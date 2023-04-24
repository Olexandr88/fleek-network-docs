"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[6395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(k,l(l({ref:t},p),{},{components:r})):o.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9704:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={template:"post",draft:!1,hide_title:!1,title:"Docker compose use latest image instead of building",slug:"docker-compose-use-latest-image-instead-of-building",date:new Date("2023-02-10T07:00:00.000Z"),canonical:"",description:"Quick reference on how to use the latest image instead of building",category:"Reference",tags:["Reference","docker compose","Fleek Network","build","latest","stack"]},l=void 0,i={unversionedId:"Docker/docker-compose-use-latest-image-instead-of-building",id:"Docker/docker-compose-use-latest-image-instead-of-building",title:"Docker compose use latest image instead of building",description:"Quick reference on how to use the latest image instead of building",source:"@site/reference/Docker/docker-compose-use-latest-image-instead-of-building.md",sourceDirName:"Docker",slug:"/Docker/docker-compose-use-latest-image-instead-of-building",permalink:"/reference/Docker/docker-compose-use-latest-image-instead-of-building",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/reference/Docker/docker-compose-use-latest-image-instead-of-building.md",tags:[{label:"Reference",permalink:"/reference/tags/reference"},{label:"docker compose",permalink:"/reference/tags/docker-compose"},{label:"Fleek Network",permalink:"/reference/tags/fleek-network"},{label:"build",permalink:"/reference/tags/build"},{label:"latest",permalink:"/reference/tags/latest"},{label:"stack",permalink:"/reference/tags/stack"}],version:"current",lastUpdatedAt:1682363680,formattedLastUpdatedAt:"Apr 24, 2023",frontMatter:{template:"post",draft:!1,hide_title:!1,title:"Docker compose use latest image instead of building",slug:"docker-compose-use-latest-image-instead-of-building",date:"2023-02-10T07:00:00.000Z",canonical:"",description:"Quick reference on how to use the latest image instead of building",category:"Reference",tags:["Reference","docker compose","Fleek Network","build","latest","stack"]},sidebar:"defaultSidebar",previous:{title:"Docker compose build docker image from source",permalink:"/reference/Docker/docker-compose-build-docker-image-from-source"},next:{title:"Services authentication",permalink:"/reference/Docker/services-authentication"}},c={},s=[],p={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is only useful if your ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),' is set to build the image locally, e.g. the "ursa.build.context" and "ursa.build.dockerfile" are declared. You can see that our team provides "nightly" builds based on the latest commits in the Ursa source-code ',(0,n.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa/pkgs/container/ursa"},"here"),"."),(0,n.kt)("p",null,"\ud83d\udca1 This is because you either have the ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," image declared in the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file for the ",(0,n.kt)("inlineCode",{parentName:"p"},"ursa")," service (quick process), or the local ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", which requires to have it built (longer process). By default, located in ",(0,n.kt)("inlineCode",{parentName:"p"},"$HOME/fleek-network/ursa/docker/full-node/docker-compose.yml")),(0,n.kt)("p",null,"For this to work, ensure that the ",(0,n.kt)("inlineCode",{parentName:"p"},"Docker-compose.yml")," has the ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," tag declared. Open the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and make sure that the ",(0,n.kt)("inlineCode",{parentName:"p"},"Ursa")," service has the following image with the correct tag, if not modify it (we are only revealing what matters, the remaining source text is omitted with three dots ",(0,n.kt)("inlineCode",{parentName:"p"},"..."),", don't type it)."),(0,n.kt)("p",null,"Change directory to the location of the ursa source-code (by default ",(0,n.kt)("inlineCode",{parentName:"p"},"$HOME/fleek-network/ursa")," and open the file ",(0,n.kt)("inlineCode",{parentName:"p"},"$HOME/fleek-network/ursa/docker-full-node/docker-compose.yml")," in your favourite text editor)."),(0,n.kt)("p",null,"You'll find:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"  ...\n\n  ursa:\n    image: ursa\n    build:\n      context: ../../.\n      dockerfile: Dockerfile\n    ...\n")),(0,n.kt)("p",null,"Remove ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," and replace ",(0,n.kt)("inlineCode",{parentName:"p"},"image")," with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"  ursa:\n    image: ghcr.io/fleek-network/ursa:latest\n")),(0,n.kt)("p",null,"Change directory to ursa root, e.g., by default is ",(0,n.kt)("inlineCode",{parentName:"p"},"$HOME/fleek-network/ursa"),"."),(0,n.kt)("p",null,"\ud83d\udca1 You can ommit the ",(0,n.kt)("inlineCode",{parentName:"p"},"-f <path-to-config-file>")," by changing the directory to where the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file is e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"$HOME/fleek-network/ursa/docker/full-node")),(0,n.kt)("p",null,"Stop the Stack"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose -f ./docker/full-node/docker-compose.yml stop\n")),(0,n.kt)("p",null,"Remove stopped containers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose -f ./docker/full-node/docker-compose.yml rm\n")),(0,n.kt)("p",null,"Pull the latest images e.g., Ursa's ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose -f ./docker/full-node/docker-compose.yml pull\n")),(0,n.kt)("p",null,"Start the Stack"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose -f ./docker/full-node/docker-compose.yml up\n")),(0,n.kt)("p",null,"Most users find that is enough to do (you have to restart the service)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose -f ./docker/full-node/docker-compose.yml pull\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose -f ./docker/full-node/docker-compose.yml up\n")))}d.isMDXComponent=!0}}]);