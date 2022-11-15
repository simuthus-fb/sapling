"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7670],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>o,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){return function(t){var n=s(t.components);return a.createElement(e,m({},t,{components:n}))}},s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,m=e.originalType,d=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,x=p["".concat(d,".").concat(u)]||p[u]||c[u]||m;return n?a.createElement(x,l(l({ref:t},o),{},{components:n})):a.createElement(x,l({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=n.length,d=new Array(m);d[0]=x;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var o=2;o<m;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},46581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>s,frontMatter:()=>m,metadata:()=>l,toc:()=>o});var a=n(83117),r=(n(67294),n(3905));const m={sidebar_position:23},d=void 0,l={unversionedId:"commands/metaedit",id:"commands/metaedit",title:"metaedit",description:"metaedit | meta | me",source:"@site/docs/commands/metaedit.md",sourceDirName:"commands",slug:"/commands/metaedit",permalink:"/docs/commands/metaedit",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/commands/metaedit.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"log",permalink:"/docs/commands/log"},next:{title:"next",permalink:"/docs/commands/next"}},i={},o=[{value:"metaedit | meta | me",id:"metaedit--meta--me",level:2},{value:"arguments",id:"arguments",level:2}],p={toc:o};function s(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"metaedit--meta--me"},"metaedit | meta | me"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"edit commit message and other metadata")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"sl metaedit")," lets you edit commit messages. With no\narguments, the current commit message is modified. To edit\nthe commit message for a different commit, specify ",(0,r.mdx)("inlineCode",{parentName:"p"},"-r\nREV"),". To edit the commit messages for multiple commits,\nspecify ",(0,r.mdx)("inlineCode",{parentName:"p"},"--batch"),"."),(0,r.mdx)("p",null,"By default, ",(0,r.mdx)("inlineCode",{parentName:"p"},"sl metaedit")," launches your default editor so that\nyou can interactively edit the commit message. Specify ",(0,r.mdx)("inlineCode",{parentName:"p"},"-m")," to\nspecify the commit message on the command line."),(0,r.mdx)("p",null,"You can edit other pieces of commit metadata such as the user or\ndate, by specifying ",(0,r.mdx)("inlineCode",{parentName:"p"},"-u")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"-d"),", respectively. The expected\nformat for the user is 'Full Name ",(0,r.mdx)("a",{parentName:"p",href:"mailto:user@example.com"},"user@example.com"),"'."),(0,r.mdx)("p",null,"There is also an automation-friendly JSON input mode which allows\nthe caller to provide the mapping between commit and new message\nand username in the following format:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n    "<commit_hash>": {\n        "message": "<message>",\n        "user": "<user>" // optional\n    }\n}\n')),(0,r.mdx)("p",null,"You can specify ",(0,r.mdx)("inlineCode",{parentName:"p"},"--fold")," to fold multiple revisions into one when the\ngiven revisions form a linear unbroken chain. However, ",(0,r.mdx)("inlineCode",{parentName:"p"},"sl fold")," is\nthe preferred command for this purpose. See ",(0,r.mdx)("inlineCode",{parentName:"p"},"sl help fold")," for more\ninformation."),(0,r.mdx)("p",null,"Some examples:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Edit the commit message for the current commit:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"sl metaedit\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Change the username for the current commit:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"sl metaedit --user 'New User <new-email@example.com>'\n")),(0,r.mdx)("h2",{id:"arguments"},"arguments"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"shortname"),(0,r.mdx)("th",{parentName:"tr",align:null},"fullname"),(0,r.mdx)("th",{parentName:"tr",align:null},"default"),(0,r.mdx)("th",{parentName:"tr",align:null},"description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-r")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--rev")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"revision to edit")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--fold")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"fold specified revisions into one")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--batch")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"edit messages of multiple commits in one editor invocation")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--json-input-file")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"read commit messages and users from JSON file")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-M")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--reuse-message")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"reuse commit message from another commit")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-m")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--message")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"use text as commit message")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-l")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--logfile")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"read commit message from file")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-d")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--date")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"record the specified date as commit date")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-u")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--user")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"record the specified user as committer")))))}s.isMDXComponent=!0}}]);