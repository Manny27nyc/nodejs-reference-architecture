"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[266],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1228:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},p="REST APIs Development",l={unversionedId:"functional-components/apifirst",id:"functional-components/apifirst",isDocsHomePage:!1,title:"REST APIs Development",description:"Building RESTFull APIs is a typical use",source:"@site/docs/functional-components/apifirst.md",sourceDirName:"functional-components",slug:"/functional-components/apifirst",permalink:"/nodejs-reference-architecture/functional-components/apifirst",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/functional-components/apifirst.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Code Coverage",permalink:"/nodejs-reference-architecture/development/code-coverage"},next:{title:"Authentication",permalink:"/nodejs-reference-architecture/functional-components/auth"}},c=[{value:"&quot;API-first&quot; approach",id:"api-first-approach",children:[]},{value:"Code First vs API first",id:"code-first-vs-api-first",children:[]},{value:"Recommended Packages",id:"recommended-packages",children:[{value:"Code Generation Tools",id:"code-generation-tools",children:[]},{value:"API mocking",id:"api-mocking",children:[]},{value:"API validation middleware",id:"api-validation-middleware",children:[]},{value:"Creating/editing OpenAPI Specifications",id:"creatingediting-openapi-specifications",children:[]}]},{value:"Guidance",id:"guidance",children:[{value:"A good example",id:"a-good-example",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rest-apis-development"},"REST APIs Development"),(0,o.kt)("p",null,"Building ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/en/topics/api/what-is-a-rest-api"},"RESTFull")," APIs is a typical use\ncase for Node.js. There are two typical approaches:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API First - define the API, use tools to help scaffold and then fill in the implementation."),(0,o.kt)("li",{parentName:"ul"},"Code First - implement the APIs and then generate documentation based on exposed API")),(0,o.kt)("p",null,"The team's experience is that the API first approach based on ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI"),"\nprovides benefits in both initial implementation and maintenance and our recommended packages and\nguidance is based on that approach, particularly if one or more of the following are true:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New project without existing API"),(0,o.kt)("li",{parentName:"ul"},"Client side and backend are developed by different teams that need way to communicate API changes"),(0,o.kt)("li",{parentName:"ul"},"Development on clients and backends starts around the same time giving developers ability to mock API based on OpenAPI spec")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: This section of the reference architecture focuses on building RESTfull APIs.\nFor GraphQL please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://nodeshift.dev/nodejs-reference-architecture/functional-components/graphql"},"GraphQL Guide")," section.")),(0,o.kt)("h2",{id:"api-first-approach"},'"API-first" approach'),(0,o.kt)("p",null,"With the API-first approach, designing the API is the first priority before writing any code. Design of the API involves thorough thinking and planning through collaboration with different teams (both client and backend side). This results in high-level documentation describing the intent of the API and ability to build client without waiting for server to be finished."),(0,o.kt)("p",null,"This API contract acts as a central draft keeping all your team members aligned on what your API\u2019s objectives are and how your API\u2019s resources are exposed. The finalization of the contract allows the team to build the interface of the application."),(0,o.kt)("p",null,"After this, the cross-functional teams rely on this interface to build the rest of the application independent of each other. In practice, teams can generate backends stubs and fully functional client libraries to avoid deviation from specification set in the OpenAPI spec file."),(0,o.kt)("h2",{id:"code-first-vs-api-first"},"Code First vs API first"),(0,o.kt)("p",null,"Code first approach provides libraries that understand server side backend structure and generate respective OpenAPI files.\nIn this approach full control over API lies within server side team - generated OpenAPI file is read only and cannot be effectively\nused to negotiate API between client and server."),(0,o.kt)("p",null,"API first approach uses OpenAPI file as source of truth. Both client and server side generate code based on the OpenAPI file."),(0,o.kt)("h2",{id:"recommended-packages"},"Recommended Packages"),(0,o.kt)("p",null,"List bellow provides comprehensive set of libraries that can be used for an end to end full stack application written in Node.js,\nExpress.js as well as client side applications."),(0,o.kt)("h3",{id:"code-generation-tools"},"Code Generation Tools"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@openapitools/openapi-generator-cli"},"openapitools/openapi-generator-cli"),"\nThis CLI provides support for generating source code based on the OpenAPI spec. The project that\nprovides this cli for JavaScript also provides generators for a number of other\nlanguages as well. This CLI has widespread usage across industry including many community projects at Red Hat.\nThe project is maintained by OpenAPI Generator Community and you can read the documentation\nhere:- ",(0,o.kt)("a",{parentName:"p",href:"https://openapi-generator.tech"},"https://openapi-generator.tech"),". It can be used as both a backend and client generator as follows:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"backend generator")),(0,o.kt)("p",null,"The nodejs-express-server option  can be used to generate Express.js based stub\nimplementations based on your OpenAPI file. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx openapi-generator-cli generate -g nodejs-express-server -i yourapi.json -o ./yourproject\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Client generator")),(0,o.kt)("p",null,"The typescript-node option can be used to generate a client for Node.js applications\nthat allows us to perform requests against another backend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"openapi-generator generate -g typescript-node -i yourapi.json -o ./yourproject\n")),(0,o.kt)("h3",{id:"api-mocking"},"API mocking"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/openapi-backend"},"openapi-backend")," allows you to mock based\non an OpenAPI definition by returning predefined strings. The library provides way not only\nreturn predefined stubs but also perform validation or handle different use cases depending on request "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@stoplight/prism-http"},"@stoplightio/prism")," allows you to\nautomatically mock API using OpenAPI spec definitions. This package is recommended if you\nneed is an out of the box way to mock API without any development involved."),(0,o.kt)("h3",{id:"api-validation-middleware"},"API validation middleware"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/express-openapi-validator"},"express-openapi-validator")," is a validator\nfor express middleware that some of the build have used successfully."),(0,o.kt)("h3",{id:"creatingediting-openapi-specifications"},"Creating/editing OpenAPI Specifications"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/swagger-editor"},"swagger-editor")," is the most popular editor\nwhich can be embedded into an existing server or run standalone. If you want to edit your\nspecifications in YAML, you can use the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/openapi-editor"},"openapi-editor")," wrapper."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/42Crunch/vscode-openapi"},"vscode-openapi")," is a VScode plugin for\nbuilding and validation of OpenAPI files that members of the team using vscode\nhave used successfully."),(0,o.kt)("h2",{id:"guidance"},"Guidance"),(0,o.kt)("p",null,"Based on the teams experience we recommend the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define the API using OpenAPI 3.0, you can write the OpenAPI definitions in YAML or JSON formats, the team does not have a preference for one over the other."),(0,o.kt)("li",{parentName:"ol"},"Prefer generating code from OpenAPI file for both client and server. Generating code based on the specification will ensure that the same types, formats are used. This will enable your team to iterate on the specification without worry of getting out of sync."),(0,o.kt)("li",{parentName:"ol"},"When making changes in the OpenAPI file change it's ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore-expanded.yaml#L3"},"version"),". Changed version will help others to detect what kind of changes were made."),(0,o.kt)("li",{parentName:"ol"},"When introducing breaking changes consider adding them as new endpoints by introducing another v2 prefix in the API path. "),(0,o.kt)("li",{parentName:"ol"},"Every path should have ",(0,o.kt)("inlineCode",{parentName:"li"},"operationId")," field specified. This field is used by generator to generate method names for clients etc."),(0,o.kt)("li",{parentName:"ol"},"When building response objects prefer referencing predefined Objects and Enums in ",(0,o.kt)("a",{parentName:"li",href:"https://swagger.io/docs/specification/data-models/"},"Schemas")),(0,o.kt)("li",{parentName:"ol"},"If an API returns a specific ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore-expanded.yaml#L148-L158"},"error object")," it should be defined in the Schemas."),(0,o.kt)("li",{parentName:"ol"},"Declare servers and security scheme to enable users to call API from OpenAPI Editor and other tools. "),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("a",{parentName:"li",href:"https://swagger.io/docs/specification/grouping-operations-with-tags/"},"tags")," to define namespaces for your API. Grouping operations with tags that will be used to organize your generated source code into folder structure.")),(0,o.kt)("h3",{id:"a-good-example"},"A good example"),(0,o.kt)("p",null,"OpenAPI spec provides an complete and minimalistic ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore-expanded.yaml"},"PetStore")," example. This example follows all the best practices and patterns for building API."))}u.isMDXComponent=!0}}]);