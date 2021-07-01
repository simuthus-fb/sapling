/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This software may be used and distributed according to the terms of the
 * GNU General Public License version 2.
 */

use std::path::{Path, PathBuf};
use std::sync::Arc;

use anyhow::Result;
use regex::Regex;

use configparser::{config::ConfigSet, convert::ByteCount};
use edenapi::Builder;

use crate::{
    contentstore::check_cache_buster,
    fetch_logger::FetchLogger,
    indexedlogdatastore::{IndexedLogDataStoreType, IndexedLogHgIdDataStore},
    lfs::{LfsRemote, LfsStore},
    scmstore::{ContentStoreFallbacks, FileStore, TreeStore},
    util::{
        get_cache_path, get_indexedlogdatastore_aux_path, get_indexedlogdatastore_path,
        get_local_path, get_repo_name,
    },
    ContentStore, EdenApiFileStore, EdenApiTreeStore, ExtStoredPolicy, MemcacheStore,
};

pub struct FileStoreBuilder<'a> {
    config: &'a ConfigSet,
    local_path: Option<PathBuf>,
    suffix: Option<PathBuf>,
    correlator: Option<String>,
    store_aux_data: bool,

    indexedlog_local: Option<Arc<IndexedLogHgIdDataStore>>,
    indexedlog_cache: Option<Arc<IndexedLogHgIdDataStore>>,
    lfs_local: Option<Arc<LfsStore>>,
    lfs_cache: Option<Arc<LfsStore>>,

    edenapi: Option<Arc<EdenApiFileStore>>,
    memcache: Option<Arc<MemcacheStore>>,

    contentstore: Option<Arc<ContentStore>>,
}

impl<'a> FileStoreBuilder<'a> {
    pub fn new(config: &'a ConfigSet) -> Self {
        Self {
            config,
            local_path: None,
            suffix: None,
            correlator: None,
            store_aux_data: false,
            indexedlog_local: None,
            indexedlog_cache: None,
            lfs_local: None,
            lfs_cache: None,
            edenapi: None,
            memcache: None,
            contentstore: None,
        }
    }

    pub fn local_path(mut self, path: impl AsRef<Path>) -> Self {
        self.local_path = Some(path.as_ref().to_path_buf());
        self
    }

    pub fn suffix(mut self, suffix: impl AsRef<Path>) -> Self {
        self.suffix = Some(suffix.as_ref().to_path_buf());
        self
    }

    pub fn correlator(mut self, correlator: impl ToString) -> Self {
        self.correlator = Some(correlator.to_string());
        self
    }

    pub fn store_aux_data(mut self) -> Self {
        self.store_aux_data = true;
        self
    }

    pub fn edenapi(mut self, edenapi: Arc<EdenApiFileStore>) -> Self {
        self.edenapi = Some(edenapi);
        self
    }

    pub fn memcache(mut self, memcache: Arc<MemcacheStore>) -> Self {
        self.memcache = Some(memcache);
        self
    }

    pub fn indexedlog_cache(mut self, indexedlog: Arc<IndexedLogHgIdDataStore>) -> Self {
        self.indexedlog_cache = Some(indexedlog);
        self
    }

    pub fn indexedlog_local(mut self, indexedlog: Arc<IndexedLogHgIdDataStore>) -> Self {
        self.indexedlog_local = Some(indexedlog);
        self
    }

    pub fn lfs_cache(mut self, lfs_cache: Arc<LfsStore>) -> Self {
        self.lfs_cache = Some(lfs_cache);
        self
    }

    pub fn lfs_local(mut self, lfs_local: Arc<LfsStore>) -> Self {
        self.lfs_local = Some(lfs_local);
        self
    }

    pub fn contentstore(mut self, contentstore: Arc<ContentStore>) -> Self {
        self.contentstore = Some(contentstore);
        self
    }

    fn get_extstored_policy(&self) -> Result<ExtStoredPolicy> {
        let enable_lfs = self.config.get_or_default::<bool>("remotefilelog", "lfs")?;
        let extstored_policy = if enable_lfs {
            if self
                .config
                .get_or_default::<bool>("remotefilelog", "useextstored")?
            {
                ExtStoredPolicy::Use
            } else {
                ExtStoredPolicy::Ignore
            }
        } else {
            ExtStoredPolicy::Use
        };
        Ok(extstored_policy)
    }

    fn get_lfs_threshold(&self) -> Result<Option<ByteCount>> {
        let enable_lfs = self.config.get_or_default::<bool>("remotefilelog", "lfs")?;
        let lfs_threshold = if enable_lfs {
            self.config.get_opt::<ByteCount>("lfs", "threshold")?
        } else {
            None
        };

        Ok(lfs_threshold)
    }

    fn get_edenapi_retries(&self) -> i32 {
        self.config
            .get_or_default::<i32>("scmstore", "retries")
            .unwrap_or_default()
    }

    fn use_edenapi(&self) -> Result<bool> {
        Ok(self
            .config
            .get_or_default::<bool>("remotefilelog", "http")?)
    }

    fn use_lfs(&self) -> Result<bool> {
        Ok(self.get_lfs_threshold()?.is_some())
    }

    fn build_edenapi(&self) -> Result<Arc<EdenApiFileStore>> {
        let reponame = get_repo_name(self.config)?;
        let client = Builder::from_config(self.config)?.build()?;

        Ok(EdenApiFileStore::new(reponame, client, None))
    }

    pub fn build_indexedlog_local(&self) -> Result<Option<Arc<IndexedLogHgIdDataStore>>> {
        Ok(if let Some(local_path) = self.local_path.clone() {
            let local_path = get_local_path(local_path, &self.suffix)?;
            Some(Arc::new(IndexedLogHgIdDataStore::new(
                get_indexedlogdatastore_path(&local_path)?,
                self.get_extstored_policy()?,
                self.config,
                IndexedLogDataStoreType::Local,
            )?))
        } else {
            None
        })
    }

    pub fn build_indexedlog_cache(&self) -> Result<Arc<IndexedLogHgIdDataStore>> {
        let cache_path = get_cache_path(self.config, &self.suffix)?;
        Ok(Arc::new(IndexedLogHgIdDataStore::new(
            get_indexedlogdatastore_path(&cache_path)?,
            self.get_extstored_policy()?,
            self.config,
            IndexedLogDataStoreType::Shared,
        )?))
    }

    pub fn build_aux_local(&self) -> Result<Option<Arc<IndexedLogHgIdDataStore>>> {
        Ok(if let Some(local_path) = self.local_path.clone() {
            let local_path = get_local_path(local_path, &self.suffix)?;
            let local_path = get_indexedlogdatastore_aux_path(&local_path)?;
            Some(Arc::new(IndexedLogHgIdDataStore::new(
                local_path,
                ExtStoredPolicy::Use,
                self.config,
                IndexedLogDataStoreType::Local,
            )?))
        } else {
            None
        })
    }

    pub fn build_aux_cache(&self) -> Result<Arc<IndexedLogHgIdDataStore>> {
        let cache_path = get_cache_path(self.config, &self.suffix)?;
        let cache_path = get_indexedlogdatastore_aux_path(&cache_path)?;
        Ok(Arc::new(IndexedLogHgIdDataStore::new(
            cache_path,
            ExtStoredPolicy::Use,
            self.config,
            IndexedLogDataStoreType::Shared,
        )?))
    }

    pub fn build_lfs_local(&self) -> Result<Option<Arc<LfsStore>>> {
        if !self.use_lfs()? {
            return Ok(None);
        }

        Ok(if let Some(local_path) = self.local_path.clone() {
            let local_path = get_local_path(local_path, &self.suffix)?;
            Some(Arc::new(LfsStore::local(&local_path, self.config)?))
        } else {
            None
        })
    }

    pub fn build_lfs_cache(&self) -> Result<Option<Arc<LfsStore>>> {
        if !self.use_lfs()? {
            return Ok(None);
        }

        let cache_path = get_cache_path(self.config, &self.suffix)?;
        Ok(Some(Arc::new(LfsStore::shared(&cache_path, self.config)?)))
    }

    pub fn build(mut self) -> Result<FileStore> {
        if self.contentstore.is_none() {
            let cache_path = get_cache_path(self.config, &self.suffix)?;
            check_cache_buster(&self.config, &cache_path);
        }

        let extstored_policy = self.get_extstored_policy()?;
        let lfs_threshold_bytes = self.get_lfs_threshold()?.map(|b| b.value());

        let edenapi_retries = self.get_edenapi_retries();

        let indexedlog_local = if let Some(indexedlog_local) = self.indexedlog_local.take() {
            Some(indexedlog_local)
        } else {
            self.build_indexedlog_local()?
        };

        let indexedlog_cache = if let Some(indexedlog_cache) = self.indexedlog_cache.take() {
            Some(indexedlog_cache)
        } else {
            Some(self.build_indexedlog_cache()?)
        };

        let lfs_local = if let Some(lfs_local) = self.lfs_local.take() {
            Some(lfs_local)
        } else {
            self.build_lfs_local()?
        };

        let lfs_cache = if let Some(lfs_cache) = self.lfs_cache.take() {
            Some(lfs_cache)
        } else {
            self.build_lfs_cache()?
        };


        let (aux_local, aux_cache) = if self.store_aux_data {
            let aux_local = self.build_aux_local()?;
            let aux_cache = Some(self.build_aux_cache()?);
            (aux_local, aux_cache)
        } else {
            (None, None)
        };

        let lfs_remote = if self.use_lfs()? {
            if let Some(ref lfs_cache) = lfs_cache {
                // TODO(meyer): Refactor upload functionality so we don't need to use LfsRemote with it's own references to the
                // underlying stores.
                Some(Arc::new(LfsRemote::new(
                    lfs_cache.clone(),
                    lfs_local.clone(),
                    self.config,
                    self.correlator.take(),
                )?))
            } else {
                None
            }
        } else {
            None
        };

        let memcache = self.memcache.take();

        let edenapi = if self.use_edenapi()? {
            if let Some(edenapi) = self.edenapi.take() {
                Some(edenapi)
            } else {
                Some(self.build_edenapi()?)
            }
        } else {
            None
        };

        let contentstore = if self
            .config
            .get_or_default::<bool>("scmstore", "contentstorefallback")?
        {
            self.contentstore
        } else {
            None
        };

        let logging_regex = self
            .config
            .get_opt::<String>("remotefilelog", "undesiredfileregex")?
            .map(|s| Regex::new(&s))
            .transpose()?;
        let fetch_logger = Some(Arc::new(FetchLogger::new(logging_regex)));

        let allow_write_lfs_ptrs = self
            .config
            .get_or_default::<bool>("scmstore", "lfsptrwrites")?;

        Ok(FileStore {
            extstored_policy,
            lfs_threshold_bytes,
            edenapi_retries,
            allow_write_lfs_ptrs,

            indexedlog_local,
            lfs_local,

            indexedlog_cache,
            lfs_cache,
            cache_to_local_cache: true,

            memcache,
            cache_to_memcache: true,

            edenapi,
            lfs_remote,

            contentstore,
            fallbacks: Arc::new(ContentStoreFallbacks::new()),
            fetch_logger,

            aux_local,
            aux_cache,
        })
    }
}

pub struct TreeStoreBuilder<'a> {
    config: &'a ConfigSet,
    local_path: Option<PathBuf>,
    suffix: Option<PathBuf>,

    indexedlog_local: Option<Arc<IndexedLogHgIdDataStore>>,
    indexedlog_cache: Option<Arc<IndexedLogHgIdDataStore>>,
    edenapi: Option<Arc<EdenApiTreeStore>>,
    memcache: Option<Arc<MemcacheStore>>,
    contentstore: Option<Arc<ContentStore>>,
}

impl<'a> TreeStoreBuilder<'a> {
    pub fn new(config: &'a ConfigSet) -> Self {
        Self {
            config,
            local_path: None,
            suffix: None,
            indexedlog_local: None,
            indexedlog_cache: None,
            edenapi: None,
            memcache: None,
            contentstore: None,
        }
    }

    pub fn local_path(mut self, path: impl AsRef<Path>) -> Self {
        self.local_path = Some(path.as_ref().to_path_buf());
        self
    }

    // TODO(meyer): Can we remove this since we have seprate builders for files and trees?
    // Is this configurable somewhere we can directly check from ConfigSet instead of having the
    // caller pass in, or is it just hardcoded elsewhere and we should hardcode it here?
    /// Cache path suffix for the associated indexedlog. For files, this will not be given.
    /// For trees, it will be "manifests".
    pub fn suffix(mut self, suffix: impl AsRef<Path>) -> Self {
        self.suffix = Some(suffix.as_ref().to_path_buf());
        self
    }

    pub fn edenapi(mut self, edenapi: Arc<EdenApiTreeStore>) -> Self {
        self.edenapi = Some(edenapi);
        self
    }

    pub fn memcache(mut self, memcache: Arc<MemcacheStore>) -> Self {
        self.memcache = Some(memcache);
        self
    }

    pub fn indexedlog_cache(mut self, indexedlog: Arc<IndexedLogHgIdDataStore>) -> Self {
        self.indexedlog_cache = Some(indexedlog);
        self
    }

    pub fn indexedlog_local(mut self, indexedlog: Arc<IndexedLogHgIdDataStore>) -> Self {
        self.indexedlog_local = Some(indexedlog);
        self
    }

    pub fn contentstore(mut self, contentstore: Arc<ContentStore>) -> Self {
        self.contentstore = Some(contentstore);
        self
    }

    fn use_edenapi(&self) -> Result<bool> {
        Ok(self.config.get_or_default::<bool>("treemanifest", "http")?)
    }

    fn build_edenapi(&self) -> Result<Arc<EdenApiTreeStore>> {
        let reponame = get_repo_name(self.config)?;
        let client = Builder::from_config(self.config)?.build()?;

        Ok(EdenApiTreeStore::new(reponame, client, None))
    }

    pub fn build_indexedlog_local(&self) -> Result<Option<Arc<IndexedLogHgIdDataStore>>> {
        Ok(if let Some(local_path) = self.local_path.clone() {
            let local_path = get_local_path(local_path, &self.suffix)?;
            Some(Arc::new(IndexedLogHgIdDataStore::new(
                get_indexedlogdatastore_path(&local_path)?,
                ExtStoredPolicy::Use,
                self.config,
                IndexedLogDataStoreType::Local,
            )?))
        } else {
            None
        })
    }

    pub fn build_indexedlog_cache(&self) -> Result<Arc<IndexedLogHgIdDataStore>> {
        let cache_path = get_cache_path(self.config, &self.suffix)?;
        Ok(Arc::new(IndexedLogHgIdDataStore::new(
            get_indexedlogdatastore_path(&cache_path)?,
            ExtStoredPolicy::Use,
            self.config,
            IndexedLogDataStoreType::Shared,
        )?))
    }

    pub fn build(mut self) -> Result<TreeStore> {
        // TODO(meyer): Clean this up, just copied and pasted from the other version & did some ugly hacks to get this
        // (the EdenApiAdapter stuff needs to be fixed in particular)
        if self.contentstore.is_none() {
            let cache_path = get_cache_path(self.config, &self.suffix)?;
            check_cache_buster(&self.config, &cache_path);
        }

        let indexedlog_local = if let Some(indexedlog_local) = self.indexedlog_local.take() {
            Some(indexedlog_local)
        } else {
            self.build_indexedlog_local()?
        };

        let indexedlog_cache = if let Some(indexedlog_cache) = self.indexedlog_cache.take() {
            Some(indexedlog_cache)
        } else {
            Some(self.build_indexedlog_cache()?)
        };

        let memcache = self.memcache.take();

        let edenapi = if self.use_edenapi()? {
            if let Some(edenapi) = self.edenapi.take() {
                Some(edenapi)
            } else {
                Some(self.build_edenapi()?)
            }
        } else {
            None
        };

        let contentstore = if self
            .config
            .get_or_default::<bool>("scmstore", "contentstorefallback")?
        {
            self.contentstore
        } else {
            None
        };

        Ok(TreeStore {
            indexedlog_local,

            indexedlog_cache,
            cache_to_local_cache: true,

            memcache,
            cache_to_memcache: true,

            edenapi,

            contentstore,
        })
    }
}
