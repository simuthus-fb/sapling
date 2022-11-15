"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8538],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>f,mdx:()=>v,useMDXComponents:()=>u,withMDXComponents:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){return function(t){var r=u(t.components);return n.createElement(e,i({},t,{components:r}))}},u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,d=p["".concat(a,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32729:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(83117),o=(r(67294),r(3905));const i={sidebar_position:0},a="Intro",s={unversionedId:"overview/intro",id:"overview/intro",title:"Intro",description:"This overview highlights a few of the interesting areas of Sapling's",source:"@site/docs/overview/intro.md",sourceDirName:"overview",slug:"/overview/intro",permalink:"/docs/overview/intro",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/overview/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/category/overview"},next:{title:"Basic Commands",permalink:"/docs/overview/basic-commands"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"intro"},"Intro"),(0,o.mdx)("p",null,"This overview highlights a few of the interesting areas of Sapling's\nuser experience. It is by no means exhaustive (quite the opposite, really), nor\nis it meant to be a complete how-to guide for using Sapling. Rather, it is aimed\nat people who are already familiar with using distributed version control\nsystems such as Git and are curious about how Sapling handles common workflows\nand how it might differ from what you are used to."),(0,o.mdx)("p",null,"Topics will be added as areas of interest are brought to our attention."))}u.isMDXComponent=!0}}]);