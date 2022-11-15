"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1089],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>o,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){return function(t){var n=s(t.components);return r.createElement(e,l({},t,{components:n}))}},s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),p=s(n),c=a,x=p["".concat(m,".").concat(c)]||p[c]||u[c]||l;return n?r.createElement(x,i(i({ref:t},o),{},{components:n})):r.createElement(x,i({ref:t},o))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,m=new Array(l);m[0]=x;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,m[1]=i;for(var o=2;o<l;o++)m[o]=n[o];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},57051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=n(83117),a=(n(67294),n(3905));const l={sidebar_position:36},m=void 0,i={unversionedId:"commands/split",id:"commands/split",title:"split",description:"split | spl",source:"@site/docs/commands/split.md",sourceDirName:"commands",slug:"/commands/split",permalink:"/docs/commands/split",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/commands/split.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36},sidebar:"tutorialSidebar",previous:{title:"show",permalink:"/docs/commands/show"},next:{title:"ssl",permalink:"/docs/commands/ssl"}},d={},o=[{value:"split | spl",id:"split--spl",level:2},{value:"arguments",id:"arguments",level:2}],p={toc:o};function s(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"split--spl"},"split | spl"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"split a commit into smaller commits")),(0,a.mdx)("p",null,"Prompt for hunks to be selected until exhausted. Each selection of hunks\nwill form a separate commit, in order from parent to child: the first\nselection will form the first commit, the second selection will form\nthe second commit, and so on."),(0,a.mdx)("p",null,"Operates on the current revision by default. Use ",(0,a.mdx)("inlineCode",{parentName:"p"},"--rev")," to split a given\ncommit instead."),(0,a.mdx)("h2",{id:"arguments"},"arguments"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"shortname"),(0,a.mdx)("th",{parentName:"tr",align:null},"fullname"),(0,a.mdx)("th",{parentName:"tr",align:null},"default"),(0,a.mdx)("th",{parentName:"tr",align:null},"description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-r")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--rev")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"revision to split")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--no-rebase")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"false")),(0,a.mdx)("td",{parentName:"tr",align:null},"don't rebase descendants after split")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-m")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--message")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"use text as commit message")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-l")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--logfile")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"read commit message from file")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-d")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--date")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"record the specified date as commit date")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-u")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--user")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"record the specified user as committer")))))}s.isMDXComponent=!0}}]);