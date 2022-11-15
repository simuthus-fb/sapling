"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3066],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>i,MDXProvider:()=>s,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,l({},t,{components:n}))}},u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),s=a,x=p["".concat(m,".").concat(s)]||p[s]||c[s]||l;return n?r.createElement(x,d(d({ref:t},i),{},{components:n})):r.createElement(x,d({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,m=new Array(l);m[0]=x;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,m[1]=d;for(var i=2;i<l;i++)m[i]=n[i];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},69500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var r=n(83117),a=(n(67294),n(3905));const l={sidebar_position:11},m=void 0,d={unversionedId:"commands/fold",id:"commands/fold",title:"fold",description:"fold | squash",source:"@site/docs/commands/fold.md",sourceDirName:"commands",slug:"/commands/fold",permalink:"/docs/commands/fold",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/commands/fold.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"diff",permalink:"/docs/commands/diff"},next:{title:"forget",permalink:"/docs/commands/forget"}},o={},i=[{value:"fold | squash",id:"fold--squash",level:2},{value:"arguments",id:"arguments",level:2}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"fold--squash"},"fold | squash"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"combine multiple commits into a single commit")),(0,a.mdx)("p",null,"With ",(0,a.mdx)("inlineCode",{parentName:"p"},"--from"),", fold all of the commit linearly between the current\ncommit and the specified commit."),(0,a.mdx)("p",null,"With ",(0,a.mdx)("inlineCode",{parentName:"p"},"--exact"),", fold only the specified commits while ignoring the\ncurrent commit. The given commits must form a linear, continuous\nchain."),(0,a.mdx)("p",null,"Some examples:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Fold from the current commit to its parent:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"sl fold --from .^\n")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Fold all draft commits into the current commit:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"sl fold --from 'draft()'\n")),(0,a.mdx)("p",null,"See ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl help phases")," for more about draft commits and\n",(0,a.mdx)("inlineCode",{parentName:"p"},"sl help revsets")," for more about the ",(0,a.mdx)("inlineCode",{parentName:"p"},"draft()")," keyword."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Fold commits between e254371c1 and be57079e4 into the current commit:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"sl fold --from e254371c1::be57079e4\n")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Fold commits e254371c1 and be57079e4:")),(0,a.mdx)("p",null,'sl fold "e254371c1 + be57079e4" --exact'),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Only fold commits linearly between foo and .:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"sl fold foo::. --exact\n")),(0,a.mdx)("h2",{id:"arguments"},"arguments"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"shortname"),(0,a.mdx)("th",{parentName:"tr",align:null},"fullname"),(0,a.mdx)("th",{parentName:"tr",align:null},"default"),(0,a.mdx)("th",{parentName:"tr",align:null},"description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-r")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--rev")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"revision to fold")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--exact")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"only fold specified revisions")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--from")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"fold linearly from current revision to specified revision")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--no-rebase")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"false")),(0,a.mdx)("td",{parentName:"tr",align:null},"don't rebase descendants after fold")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-M")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--reuse-message")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"reuse commit message from REV")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-m")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--message")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"use text as commit message")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-l")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--logfile")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"read commit message from file")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-d")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--date")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"record the specified date as commit date")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-u")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--user")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"record the specified user as committer")))))}u.isMDXComponent=!0}}]);