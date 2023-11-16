"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1706],{4751:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=i(5893),t=i(1151),s=i(3872);const l={title:"Error linking with cc",slug:"error-linking-with-cc-failed-exist-status-1",hide_title:!0,tags:["references","help","update","upgrade","fix"]},a=void 0,c={id:"Lightning CLI/error-linking-with-cc-failed",title:"Error linking with cc",description:"Check if CPU is supported",source:"@site/references/Lightning CLI/error-linking-with-cc-failed.md",sourceDirName:"Lightning CLI",slug:"/Lightning CLI/error-linking-with-cc-failed-exist-status-1",permalink:"/references/Lightning CLI/error-linking-with-cc-failed-exist-status-1",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Lightning CLI/error-linking-with-cc-failed.md",tags:[{label:"references",permalink:"/references/tags/references"},{label:"help",permalink:"/references/tags/help"},{label:"update",permalink:"/references/tags/update"},{label:"upgrade",permalink:"/references/tags/upgrade"},{label:"fix",permalink:"/references/tags/fix"}],version:"current",lastUpdatedAt:1700163400,formattedLastUpdatedAt:"Nov 16, 2023",frontMatter:{title:"Error linking with cc",slug:"error-linking-with-cc-failed-exist-status-1",hide_title:!0,tags:["references","help","update","upgrade","fix"]},sidebar:"defaultSidebar",previous:{title:"Error building on ARM64",permalink:"/references/Lightning CLI/error-building-on-arm64"},next:{title:"File permissions and Ownership",permalink:"/references/Lightning CLI/file-permissions-and-ownership"}},o={},d=[{value:"Check if CPU is supported",id:"check-if-cpu-is-supported",level:2},{value:"Linking with cc error",id:"linking-with-cc-error",level:2},{value:"Update",id:"update",level:2},{value:"Install <code>gcc</code>:",id:"install-gcc",level:2},{value:"Remove previous installation files",id:"remove-previous-installation-files",level:2},{value:"Run the installation script",id:"run-the-installation-script",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"check-if-cpu-is-supported",children:"Check if CPU is supported"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"uname -i\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"WARNING",type:"caution",children:[(0,r.jsxs)(n.p,{children:["Given the ",(0,r.jsx)(n.a,{href:"https://docs.fleek.network/docs/node/requirements/#specs",children:"CPU requirements"}),", currently we're mainly supporting ",(0,r.jsx)(n.code,{children:"GenuineIntel"})," and there have been reports of failure to build the binary on ",(0,r.jsx)(n.code,{children:"AMD"}),". The ",(0,r.jsx)(n.code,{children:"ARM64"})," is a different architecture, thus not supported, but there has been some community contributions in that regard, find it in the reference ",(0,r.jsx)(n.a,{href:"/references/Lightning%20CLI/error-building-on-arm64",children:"error building on ARM64"}),"."]}),(0,r.jsxs)(n.p,{children:["Any contribution or feedback to provide support is appreciated. Feel free to let us know on our ",(0,r.jsx)(n.a,{href:"https://discord.gg/fleekxyz",children:"Discord channel"}),"."]})]}),"\n",(0,r.jsx)(n.h2,{id:"linking-with-cc-error",children:"Linking with cc error"}),"\n",(0,r.jsxs)(n.p,{children:["A user who finds the error ",(0,r.jsx)(n.code,{children:"linking with cc failed"}),", will have to install the required dependencies."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"error: linking with `cc` failed: exit status: 1\nerror: could not compile `fleek-service-ping-example` (lib) due to previous error\n"})}),"\n",(0,r.jsx)(n.h2,{id:"update",children:"Update"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sudo apt-get update\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"install-gcc",children:["Install ",(0,r.jsx)(n.code,{children:"gcc"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sudo apt-get install gcc\n"})}),"\n",(0,r.jsx)(n.h2,{id:"remove-previous-installation-files",children:"Remove previous installation files"}),"\n",(0,r.jsxs)(n.p,{children:["You can re-run the installation process. If you are using the assisted installer, it'll complain that the source code directory already exists. Since you've probably cloned the source code repository locally, you'll have to remove it manually. If you need help, find the instructions in the ",(0,r.jsx)(n.a,{href:"/references/Lightning%20CLI/uninstall-lightning-node",children:"reference"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"run-the-installation-script",children:"Run the installation script"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"curl https://get.fleek.network | bash\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, read the ",(0,r.jsx)(n.a,{href:"/docs/node/install#manual-installation",children:"manual installation instructions"})," for more information."]}),"\n",(0,r.jsx)(s.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3872:(e,n,i)=>{i.d(n,{Z:()=>t});i(7294);var r=i(5893);const t=e=>{let{image:n,name:i,title:t,url:s,communityMember:l=!1}=e;return(0,r.jsx)("section",{className:"author_card",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"avatar",children:(0,r.jsx)("a",{href:s,target:"_blank",alt:i,children:(0,r.jsx)("img",{src:n,alt:i})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"name",children:(0,r.jsx)("a",{href:s,target:"_blank",alt:i,children:i})}),(0,r.jsx)("span",{className:"title",children:t}),(0,r.jsxs)("span",{className:"discord",children:[l?"Join our community on":"Got questions? Find us on"," ",(0,r.jsx)("a",{href:"https://discord.gg/fleekxyz",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var r=i(7294);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);