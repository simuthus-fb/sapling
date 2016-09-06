// treemanifest.cpp - c++ implementation of a tree manifest
//
// Copyright 2016 Facebook, Inc.
//
// This software may be used and distributed according to the terms of the
// GNU General Public License version 2 or any later version.
//
// no-check-code

#include "treemanifest.h"

treemanifest::~treemanifest() {
  if (this->rootManifest != NULL) {
    delete this->rootManifest;
  }
}

/**
 * Constructs a result python tuple of the given diff data.
 */
static PythonObj treemanifest_diffentry(
    const std::string *anode, const char *aflag,
    const std::string *bnode, const char *bflag) {
  const char *astr = anode != NULL ? anode->c_str() : NULL;
  Py_ssize_t alen = anode != NULL ? anode->length() : 0;
  const char *bstr = bnode != NULL ? bnode->c_str() : NULL;
  Py_ssize_t blen = bnode != NULL ? bnode->length() : 0;
  PythonObj result = Py_BuildValue("((s#s#)(s#s#))", astr, alen, aflag, Py_ssize_t(aflag ? 1 : 0),
      bstr, blen, bflag, Py_ssize_t(bflag ? 1 : 0));
  return result;
}

/**
 * Simple class for representing a single diff between two files in the
 * manifest.
 */
class DiffEntry {
  private:
    const std::string *selfnode;
    const std::string *othernode;
    const char *selfflag;
    const char *otherflag;
  public:
    DiffEntry(const std::string *selfnode, const char *selfflag,
        const std::string *othernode, const char *otherflag) {
      this->selfnode = selfnode;
      this->othernode = othernode;
      this->selfflag = selfflag;
      this->otherflag = otherflag;
    }

    void addtodiff(const PythonObj &diff, const std::string &path) {
      PythonObj entry = treemanifest_diffentry(this->selfnode, this->selfflag,
          this->othernode, this->otherflag);
      PythonObj pathObj = PyString_FromStringAndSize(path.c_str(), path.length());

      PyDict_SetItem(diff, pathObj, entry);
    }
};

/**
 * Helper function that performs the actual recursion on the tree entries.
 */
void treemanifest_diffrecurse(
    Manifest *selfmf,
    Manifest *othermf,
    std::string &path,
    const PythonObj &diff,
    const ManifestFetcher &fetcher) {
  ManifestIterator selfiter;
  ManifestIterator otheriter;

  if (selfmf != NULL) {
    selfiter = selfmf->getIterator();
  }
  if (othermf != NULL) {
    otheriter = othermf->getIterator();
  }

  // Iterate through both directory contents
  while (!selfiter.isfinished() || !otheriter.isfinished()) {
    int cmp = 0;

    ManifestEntry *selfentry = NULL;
    std::string selfbinnode;
    if (!selfiter.isfinished()) {
      cmp--;
      selfentry = selfiter.currentvalue();
      selfbinnode = binfromhex(selfentry->node);
    }

    ManifestEntry *otherentry = NULL;
    std::string otherbinnode;
    if (!otheriter.isfinished()) {
      cmp++;
      otherentry = otheriter.currentvalue();
      otherbinnode = binfromhex(otherentry->node);
    }

    // If both sides are present, cmp == 0, so do a filename comparison
    if (cmp == 0) {
      cmp = strcmp(selfentry->filename, otherentry->filename);
    }

    int originalpathsize = path.size();
    if (cmp < 0) {
      // selfentry should be processed first and only exists in self
      selfentry->appendtopath(path);
      if (selfentry->isdirectory()) {
        Manifest *selfchildmanifest = selfentry->get_manifest(
            fetcher, path.c_str(), path.size());
        treemanifest_diffrecurse(selfchildmanifest, NULL, path, diff, fetcher);
      } else {
        DiffEntry entry(&selfbinnode, selfentry->flag, NULL, NULL);
        entry.addtodiff(diff, path);
      }
      selfiter.next();
    } else if (cmp > 0) {
      // otherentry should be processed first and only exists in other
      otherentry->appendtopath(path);
      if (otherentry->isdirectory()) {
        Manifest *otherchildmanifest = otherentry->get_manifest(
            fetcher, path.c_str(), path.size());
        treemanifest_diffrecurse(NULL, otherchildmanifest, path, diff, fetcher);
      } else {
        DiffEntry entry(NULL, NULL, &otherbinnode, otherentry->flag);
        entry.addtodiff(diff, path);
      }
      otheriter.next();
    } else {
      // Filenames match - now compare directory vs file
      if (selfentry->isdirectory() && otherentry->isdirectory()) {
        // Both are directories - recurse
        selfentry->appendtopath(path);

        if (selfbinnode != otherbinnode) {
          Manifest *selfchildmanifest = fetcher.get(
              path.c_str(), path.size(),
              selfbinnode);
          Manifest *otherchildmanifest = fetcher.get(
              path.c_str(), path.size(),
              otherbinnode);

          treemanifest_diffrecurse(
              selfchildmanifest,
              otherchildmanifest,
              path,
              diff,
              fetcher);
        }
        selfiter.next();
        otheriter.next();
      } else if (selfentry->isdirectory() && !otherentry->isdirectory()) {
        // self is directory, other is not - process other then self
        otherentry->appendtopath(path);
        DiffEntry entry(NULL, NULL, &otherbinnode, otherentry->flag);
        entry.addtodiff(diff, path);

        path.append(1, '/');
        Manifest *selfchildmanifest = fetcher.get(
            path.c_str(), path.size(),
            selfbinnode);
        treemanifest_diffrecurse(selfchildmanifest, NULL, path, diff, fetcher);

        selfiter.next();
        otheriter.next();
      } else if (!selfentry->isdirectory() && otherentry->isdirectory()) {
        // self is not directory, other is - process self then other
        selfentry->appendtopath(path);
        DiffEntry entry(&selfbinnode, selfentry->flag, NULL, NULL);
        entry.addtodiff(diff, path);

        path.append(1, '/');
        Manifest *otherchildmanifest = fetcher.get(
            path.c_str(), path.size(),
            otherbinnode
        );
        treemanifest_diffrecurse(NULL, otherchildmanifest, path, diff, fetcher);

        selfiter.next();
        otheriter.next();
      } else {
        // both are files
        bool flagsdiffer = (
            (selfentry->flag && otherentry->flag && *selfentry->flag != *otherentry->flag) ||
            ((bool)selfentry->flag != (bool)otherentry->flag)
        );

        if (selfbinnode != otherbinnode || flagsdiffer) {
          selfentry->appendtopath(path);
          DiffEntry entry(&selfbinnode, selfentry->flag, &otherbinnode, otherentry->flag);
          entry.addtodiff(diff, path);
        }

        selfiter.next();
        otheriter.next();
      }
    }
    path.erase(originalpathsize);
  }
}

/**
 * Basic mechanism to traverse a tree.  Once the deepest directory in the
 * path has been located, the supplied callback is executed.  That callback
 * is called with the manifest of the deepest directory and the leaf node's
 * filename.
 *
 * For instance, if treemanifest_find is called on /abc/def/ghi, then the
 * callback is executed with the manifest of /abc/def, and the filename
 * passed in will be "ghi".
 */
static FindResult treemanifest_find(
    Manifest *manifest,
    PathIterator &path,
    const ManifestFetcher &fetcher,
    FindMode findMode,
    FindContext *findContext,
    FindResult (*callback)(
        Manifest *manifest,
        const char *filename, size_t filenamelen,
        FindContext *findContext)) {

  const char *word;
  size_t wordlen;

  path.next(&word, &wordlen);
  if (path.isfinished()) {
    // time to execute the callback.
    return callback(manifest,
        word, wordlen,
        findContext);
  } else {
    // position the iterator at the right location
    bool exacthit;
    std::list<ManifestEntry>::iterator iterator = manifest->findChild(
        word, wordlen, &exacthit);

    ManifestEntry *entry;

    if (!exacthit) {
      // do we create the intermediate node?
      if (findMode != CREATE_IF_MISSING) {
        return FIND_PATH_NOT_FOUND;
      }

      // create the intermediate node...
      entry = manifest->addChild(iterator, word, wordlen, 't');
    } else {
      entry = &(*iterator);

      if (!entry->isdirectory()) {
        return FIND_PATH_CONFLICT;
      }

      if (entry->resolved == NULL) {
        const char *pathstart;
        size_t pathlen;

        path.getPathToPosition(&pathstart, &pathlen);
        findContext->nodebuffer.erase();
        appendbinfromhex(entry->node, findContext->nodebuffer);
        entry->resolved = fetcher.get(pathstart, pathlen,
            findContext->nodebuffer);
      }
    }

    // now find the next subdir
    FindResult result = treemanifest_find(
        entry->resolved,
        path,
        fetcher,
        findMode,
        findContext,
        callback);

    // if entry->resolved has 0 entries, we may want to prune it, if the mode
    // indicates that we should.
    if (findMode == REMOVE_EMPTY_IMPLICIT_NODES) {
      if (entry->resolved->children() == 0) {
        manifest->removeChild(iterator);
      }
    }

    return result;
  }
}

struct GetResult {
  std::string *resultnode;
  char *resultflag;
};

static FindResult treemanifest_get_callback(
    Manifest *manifest,
    const char *filename, size_t filenamelen,
    FindContext *context) {
  // position the iterator at the right location
  bool exacthit;
  std::list<ManifestEntry>::iterator iterator = manifest->findChild(
      filename, filenamelen, &exacthit);

  if (!exacthit) {
    // TODO: not found. :( :(
    return FIND_PATH_NOT_FOUND;
  }

  ManifestEntry &entry = *iterator;
  GetResult *result = (GetResult *) context->extras;

  result->resultnode->erase();
  if (entry.node != NULL) {
    result->resultnode->append(entry.node);
  }

  if (entry.flag != NULL) {
    *result->resultflag = *entry.flag;
  } else {
    *result->resultflag = '\0';
  }

  return FIND_PATH_OK;
}

void treemanifest_get(
    const std::string &filename,
    Manifest *rootmanifest,
    const ManifestFetcher &fetcher,
    std::string *resultnode, char *resultflag) {
  GetResult extras = {resultnode, resultflag};
  PathIterator pathiter(filename);
  FindContext changes;
  changes.nodebuffer.reserve(20);
  changes.extras = &extras;

  treemanifest_find(
      rootmanifest,
      pathiter,
      fetcher,
      BASIC_WALK,
      &changes,
      treemanifest_get_callback
  );
}
