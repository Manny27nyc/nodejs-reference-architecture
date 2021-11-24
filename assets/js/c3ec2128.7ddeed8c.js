"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[581],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1546:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],p={sidebar_position:3},s="Npm Proxy / Internal Registry",c={unversionedId:"development/npm-proxy",id:"development/npm-proxy",isDocsHomePage:!1,title:"Npm Proxy / Internal Registry",description:"The npm registry is a key part of the node(and Javascript) ecosystem. It allows users to install third-party easily with just a few commands. But what happens when you are part of an organization that limits internet access, or you are worried that a module you use might disappear from the public registry. This is where having a layer between your organization and the public npm registry can help. This is commonly refered to as a npm mirror/npm proxy",source:"@site/docs/development/npm-proxy.md",sourceDirName:"development",slug:"/development/npm-proxy",permalink:"/nodejs-reference-architecture/development/npm-proxy",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/development/npm-proxy.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Code Consistency",permalink:"/nodejs-reference-architecture/development/code-consistency"},next:{title:"Npm Publishing Guidelines",permalink:"/nodejs-reference-architecture/development/npm-publishing"}},l=[{value:"Recommended Components",id:"recommended-components",children:[]},{value:"Guidance",id:"guidance",children:[]},{value:"Learning Resources",id:"learning-resources",children:[]}],u={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"npm-proxy--internal-registry"},"Npm Proxy / Internal Registry"),(0,i.kt)("p",null,"The npm registry is a key part of the node(and Javascript) ecosystem. It allows users to install third-party easily with just a few commands. But what happens when you are part of an organization that limits internet access, or you are worried that a module you use might disappear from the public registry. This is where having a layer between your organization and the public npm registry can help. This is commonly refered to as a npm mirror/npm proxy"),(0,i.kt)("h2",{id:"recommended-components"},"Recommended Components"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"team")," has familiarity with using both Artifactory and Sonatype Nexus. Both have free and enterprise grade tiers available."),(0,i.kt)("h2",{id:"guidance"},"Guidance"),(0,i.kt)("p",null,"It is recommended to use a Proxy/Mirror when possible. There are a few different reasons why you might consider this."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You need to limit the installation of modules to only a specific set.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you have limited network access")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using a proxy/mirror can provide a centralized point for scanning for security vulnerabilities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A mirror can reduce the dependecy on the public registry.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You need to maintain a copy of a module incase it is removed from the public registry.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Being a good npm citizen. The public registry is a free service and npm allows for ",(0,i.kt)("a",{parentName:"p",href:"https://blog.npmjs.org/post/187698412060/acceptible-use"},"update to 5 million requests per month"),", which can be used up quickly with CI builds."))),(0,i.kt)("p",null,"Using a npm mirror/proxy is fairly easy. You can set the ",(0,i.kt)("em",{parentName:"p"},"registry")," that the npm cli uses by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm set registry URL"),"."),(0,i.kt)("p",null,"Since these registry are not Node.js specific and can be used by other languages, organizations might already have something running where npm support can be turned on."),(0,i.kt)("h2",{id:"learning-resources"},"Learning Resources"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://jfrog.com/artifactory/"},"https://jfrog.com/artifactory/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://guides.sonatype.com/repo3/quick-start-guides/proxying-maven-and-npm/"},"https://guides.sonatype.com/repo3/quick-start-guides/proxying-maven-and-npm/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.sonatype.com/products/repository-oss-vs-pro-features"},"https://www.sonatype.com/products/repository-oss-vs-pro-features")))}m.isMDXComponent=!0}}]);