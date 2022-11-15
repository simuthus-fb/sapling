"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1505],{3905:(e,t,o)=>{o.r(t),o.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},n.apply(this,arguments)}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=a.createContext({}),d=function(e){return function(t){var o=m(t.components);return a.createElement(e,n({},t,{components:o}))}},m=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(o),u=i,p=d["".concat(r,".").concat(u)]||d[u]||h[u]||n;return o?a.createElement(p,s(s({ref:t},c),{},{components:o})):a.createElement(p,s({ref:t},c))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,r=new Array(n);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<n;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},72291:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=o(83117),i=(o(67294),o(3905));const n={sidebar_position:20},r="Axes of Scale",s={unversionedId:"scale/axes",id:"scale/axes",title:"Axes of Scale",description:"Source control clients face many different kinds of scaling challenges.  This document aims to list those various challenges, and provide an ultra-concise explanation of how we tackle it.  Links to deeper documents will cover individual areas in more depth.",source:"@site/docs/scale/axes.md",sourceDirName:"scale",slug:"/scale/axes",permalink:"/docs/scale/axes",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/scale/axes.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Working at Scale",permalink:"/docs/category/working-at-scale"},next:{title:"Organizational Scale",permalink:"/docs/scale/organizational"}},l={},c=[{value:"Working Copy Scale",id:"working-copy-scale",level:2},{value:"Number of Files",id:"number-of-files",level:3},{value:"Size of Files",id:"size-of-files",level:3},{value:"Size of Directories",id:"size-of-directories",level:3},{value:"Repository Scale",id:"repository-scale",level:2},{value:"Number of Commits",id:"number-of-commits",level:3},{value:"Number of Branches/Bookmarks",id:"number-of-branchesbookmarks",level:3},{value:"Quantity of Historical File/Tree Data",id:"quantity-of-historical-filetree-data",level:3},{value:"Length of File History",id:"length-of-file-history",level:3},{value:"Number of Commits/Hour",id:"number-of-commitshour",level:3}],d={toc:c};function m(e){let{components:t,...o}=e;return(0,i.mdx)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"axes-of-scale"},"Axes of Scale"),(0,i.mdx)("p",null,"Source control clients face many different kinds of scaling challenges.  This document aims to list those various challenges, and provide an ultra-concise explanation of how we tackle it.  Links to deeper documents will cover individual areas in more depth."),(0,i.mdx)("p",null,"Two notes before reading:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"The problems below are specific to source control clients, that is, the piece that you run on your local computer.  The source control server faces similar scaling challenges and unique solutions, but those are not covered here."),(0,i.mdx)("li",{parentName:"ol"},"Some of the solutions described below require the Sapling client to work with the Sapling server.  When using the Sapling client with a Git server, some of these optimizations do not apply.")),(0,i.mdx)("h2",{id:"working-copy-scale"},"Working Copy Scale"),(0,i.mdx)("p",null,"The working copy consists of all the files you have checked out and interact with.  This is all the files in your repository directory, except the ones in the .sl directory."),(0,i.mdx)("h3",{id:"number-of-files"},"Number of Files"),(0,i.mdx)("p",null,"Having millions of files in the working copy causes numerous problems for traditional version control. Checkouts are slow because we must download and write all of those files to disk.  Status is slow because we must scan every file in the working copy to determine what has changed."),(0,i.mdx)("p",null,"Sapling tackles large numbers of files in three ways:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The Watchman filesystem monitor lets Sapling monitor what files have changed, allowing it to answer status queries in O(files-you-have-changed) time instead of scanning the repository."),(0,i.mdx)("li",{parentName:"ul"},"The sparse feature allows users to only checkout the files that are relevant to them."),(0,i.mdx)("li",{parentName:"ul"},"The Sapling compatible virtual filesystem makes it appear as though you have the entire repository, but files are only downloaded when you first access them.")),(0,i.mdx)("h3",{id:"size-of-files"},"Size of Files"),(0,i.mdx)("p",null,"Moderately large files (10MB-2GB) are not a major source of scaling problems, but still require special consideration.  Large files are downloaded from a special server that speaks the Git LFS protocol to avoid overloading the primary source control service.  Large files are also stored locally in their own portion of the data cache, so that they have their own cache size limit and don\u2019t swamp the other kinds of data."),(0,i.mdx)("p",null,"Files larger than 2GB are currently not battle-tested in Sapling, though they may still work."),(0,i.mdx)("h3",{id:"size-of-directories"},"Size of Directories"),(0,i.mdx)("p",null,"Large directories are those with thousands or tens of thousands of immediate children files or directories.  It does not refer to directories which recursively contains many files or directories."),(0,i.mdx)("p",null,"Directories up to a few thousand children are reasonably well supported in Sapling. Beyond that performance starts to degrade.  Further optimizations are possible, but this is not an issue on the current Sapling-based monorepos and thus far not a priority."),(0,i.mdx)("h2",{id:"repository-scale"},"Repository Scale"),(0,i.mdx)("p",null,"The repository consists of all the behind-the-scenes, non-working-copy repository data that is stored in the .sl directory. Similar to the .git directory in Git."),(0,i.mdx)("h3",{id:"number-of-commits"},"Number of Commits"),(0,i.mdx)("p",null,"The total number of commits in a repository constantly grows over time, and in a large organization can easily reach millions or tens of millions of commits.  This affects a wide variety of performance characteristics:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Storing all the commit data (messages, author, metadata, etc.) can take gigabytes of space. Note, this does not include the cost of storing file and tree data."),(0,i.mdx)("li",{parentName:"ul"},"Running ",(0,i.mdx)("inlineCode",{parentName:"li"},"sl log")," with particular constraints may have to read a large number of commits."),(0,i.mdx)("li",{parentName:"ul"},"Common graph queries, like \u2018common ancestor\u2019, used in many commands, like ",(0,i.mdx)("inlineCode",{parentName:"li"},"smartlog")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"rebase"),", can become slow."),(0,i.mdx)("li",{parentName:"ul"},"Computing the shortest unique hash prefix to provide pleasing UI output can become expensive.")),(0,i.mdx)("p",null,"Sapling takes several approaches to handle this:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"History data (i.e. the graph relationships) and commit metadata (i.e. messages, authors, etc) are stored separately. This allows us to download lots of history data for graph computations, while downloading a more limited amount of commit metadata."),(0,i.mdx)("li",{parentName:"ul"},"Commit metadata is downloaded lazily. When you first clone a repository, no commit messages are downloaded. Only once you start inspecting commits, via ",(0,i.mdx)("inlineCode",{parentName:"li"},"smartlog"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"show"),", etc, individual commit metadata is downloaded as needed. This makes clones fast, and reduces the amount of disk space required to O(commits you are interested in)."),(0,i.mdx)("li",{parentName:"ul"},"History data is stored using the Segmented Changelog. This is a data structure that represents the shape of the entire commit graph using segments to concisely represent large swaths of history.  The segmented changelog can be represented in just a few megabytes and can answer graph query questions in O(number-of-merges) time, or just a few milliseconds even in a large monorepo."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"log")," with certain constraints, such as trying to find all commits by a certain user, may still need to inspect a lot of commits.  Sapling attempts to make ",(0,i.mdx)("inlineCode",{parentName:"li"},"log")," more efficient by batch-fetching commit data, in order to avoid one-by-one serial fetches.  Additionally, ",(0,i.mdx)("inlineCode",{parentName:"li"},"log")," on files and directories has special support, discussed below."),(0,i.mdx)("li",{parentName:"ul"},"Computing the shortest unique hash for a given commit is done by maintaining an incrementally updatable tree-like index of all locally-available commit hashes.")),(0,i.mdx)("h3",{id:"number-of-branchesbookmarks"},"Number of Branches/Bookmarks"),(0,i.mdx)("p",null,"As the number of remote bookmarks (similar to a Git remote branch) in a repository grows over time, this can result in large number of remote bookmarks being downloaded and monitored by the client. This can cause slowness when talking to the server, as each bookmark needs to be checked, and generally clutters the local user experience."),(0,i.mdx)("p",null,"Sapling defaults to not downloading every bookmark from the server. Instead, during a clone you receive the ",(0,i.mdx)("inlineCode",{parentName:"p"},"main")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"master")," bookmark, and a configurable list of specific other bookmarks.  Users can choose to subscribe to specific bookmarks via ",(0,i.mdx)("inlineCode",{parentName:"p"},"sl pull -B"),".  Sapling also transparently downloads bookmarks if the users uses them in commands. For instance, if a user runs ",(0,i.mdx)("inlineCode",{parentName:"p"},"sl goto release_123")," but they don\u2019t have that remote bookmark, Sapling will automatically download it to complete the checkout."),(0,i.mdx)("h3",{id:"quantity-of-historical-filetree-data"},"Quantity of Historical File/Tree Data"),(0,i.mdx)("p",null,"During a normal distributed source control pull or clone you download all the new files and trees that have been changed, resulting in your local client having all of history. In a large repository, this quantity of data may be so large that it is slow and impractical to download all of it to individual clients."),(0,i.mdx)("p",null,"Sapling, on the other hand, does not downloald tree and file data durings pull and clones. That data is left on the server, and the Sapling client downloads it on demand when later required, such as during a checkout.  The on demand nature of Sapling commands requires carefully designed algorithms to ensure data is fetched efficiently and in parallel."),(0,i.mdx)("p",null,"Lazily downloading data means Sapling may need network access to perform operations that would traditionally be doable offline.  To support some offline work, Sapling keeps all of the downloaded data in a local cache with a bounded size.  This cache generally contains enough data to move between, inspect, commit, and amend on any of your recently in-progress commits."),(0,i.mdx)("h3",{id:"length-of-file-history"},"Length of File History"),(0,i.mdx)("p",null,"In many version control systems, running commands like ",(0,i.mdx)("inlineCode",{parentName:"p"},"log")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"blame")," on a file or directory often have to walk every commit in the repository looking for commits that touched that file or directory. This is an O(size of repo) operation."),(0,i.mdx)("p",null,"For files, Sapling makes these operations O(changes to that file) by tracking the exact history of each individual file, in addition to the history of the entire commit graph.  This allows log and blame to be fast, regardless of the size of the repository."),(0,i.mdx)("p",null,"For directories, Sapling also tracks the history of a directory, but using this information to answer history queries is not yet implemented. Instead, Sapling can query the Sapling server for a directory\u2019s history, which allows using the servers superior indexes to answer the query quickly."),(0,i.mdx)("p",null,"Additionally, in the case where the server isn't available, Sapling can bisect over the Segmented Changelog structure to look for the commits that changed the given file or directory. This allows figuring out an approximate history in O(log n) time, though it may miss cases where a file or directory is changed, then reverted back to a previous version."),(0,i.mdx)("h3",{id:"number-of-commitshour"},"Number of Commits/Hour"),(0,i.mdx)("p",null,"In a large organization the number of commits being pushed per minute introduces additional scaling challenges."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Rebase Races")),(0,i.mdx)("p",null,"In Git or Mercurial, in order to push to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"main")," branch you must first pull and rebase/merge onto the latest main branch.  If someone pushes before you, then you have to repeat the process until you win. If there are many people competing, it can become almost impossible to actually push your commit."),(0,i.mdx)("p",null,"In Sapling, when you push to the Sapling server, the server actually takes your commit and rebases it to be on the top of bookmark you are pushing to.  So if someone else pushed before you, it\u2019s ok because the server just moves your commit up to the top.  If someone else edited a file you touched, then the push will fail and you must manually rebase to merge the file.  There is still the potential for races where two people modify two different files in incompatible ways, but in practice this has not been an issue."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Code Generation Races")),(0,i.mdx)("p",null,"A large amount of commit throughput also introduces problems if your repository contains generated files.  If you modify a file that requires regenerating, then if someone else does the same and pushes first, you need to rebase over their change and once again regenerate the files.  The time taken to generate the file means the window in which you could lose the race becomes quite large, and it can become impossible to win the race if many people are changing the same generated files."),(0,i.mdx)("p",null,"While Sapling doesn\u2019t completely solve this, it improves the user experience by supporting calling code generators to solve rebase conflicts.  This allows conflicts in generated code to be handled at rebase time and allows code-pushing automation to automatically regenerate code on the users behalf when it encounters a push failure due to a conflict."))}m.isMDXComponent=!0}}]);