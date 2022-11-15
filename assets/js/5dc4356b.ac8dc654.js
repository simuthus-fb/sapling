"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2182],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>v,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,a({},t,{components:n}))}},u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},920:(e,t,n)=>{n.d(t,{RJ:()=>s,Xj:()=>l,bv:()=>c,mY:()=>i,nk:()=>p});var r=n(67294),o=n(44996),a=n(50941);function i(e){let{name:t,linkText:n}=e;const a=function(e){switch(e){case"go":return"goto";case"isl":return"web"}return e}(t),i=null!=n?n:t;return r.createElement("a",{href:(0,o.default)("/docs/commands/"+a)},r.createElement("code",null,i))}function l(e){let{name:t}=e;return r.createElement(i,{name:t,linkText:"sl "+t})}function c(){return r.createElement("p",{style:{textAlign:"center"}},r.createElement("img",{src:(0,o.default)("/img/reviewstack-demo.gif"),width:800,align:"center"}))}function s(e){let{alt:t,light:n,dark:i}=e;return r.createElement(a.Z,{alt:t,sources:{light:(0,o.default)(n),dark:(0,o.default)(i)}})}function p(e){let{src:t}=e;return r.createElement("video",{controls:!0},r.createElement("source",{src:(0,o.default)(t)}))}},53073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(83117),o=(n(67294),n(3905)),a=n(920);const i={sidebar_position:100},l="Shelve",c={unversionedId:"overview/shelve",id:"overview/shelve",title:"Shelve",description:"The Sapling  command allows you to temporarily put pending changes off to the side, then bring them back later. Any pending changes in the working copy will be saved, reverting the working copy back to a clean state. Shelves can be named with -n for easier identification.",source:"@site/docs/overview/shelve.md",sourceDirName:"overview",slug:"/overview/shelve",permalink:"/docs/overview/shelve",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/overview/shelve.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Undo",permalink:"/docs/overview/undo"},next:{title:"Git Interop",permalink:"/docs/category/git-interop"}},s={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"shelve"},"Shelve"),(0,o.mdx)("p",null,"The Sapling ",(0,o.mdx)(a.mY,{name:"shelve",mdxType:"Command"})," command allows you to temporarily put pending changes off to the side, then bring them back later. Any pending changes in the working copy will be saved, reverting the working copy back to a clean state. Shelves can be named with ",(0,o.mdx)("inlineCode",{parentName:"p"},"-n")," for easier identification."),(0,o.mdx)("p",null,"It is similar to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"git stash")," command."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"$ vim myproject.cpp\n$ sl status\nM myproject.cpp\n\n$ sl shelve\n$ sl status\n")),(0,o.mdx)("p",null,"You can either use ",(0,o.mdx)("inlineCode",{parentName:"p"},"sl unshelve")," to restore the latest shelved change to the working copy, ",(0,o.mdx)("inlineCode",{parentName:"p"},"sl unshelve [shelved name]")," to specify a change to unshelve."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"$ sl status\n\n$ sl unshelve\n$ sl status\nM myproject.spp\n")))}m.isMDXComponent=!0}}]);