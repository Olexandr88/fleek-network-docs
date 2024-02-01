"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[4063],{7767:(e,n,r)=>{r.d(n,{ZP:()=>o});var s=r(5893),i=r(1151);function t(e){const n={admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Amongst other resources, ports play the role of managing and organizing network traffic. The ports initiate and terminate network connections crucial for the node to operate in the Fleek Network. The operating system should have the ports enabled and open for the node to run successfully."}),"\n",(0,s.jsx)(n.p,{children:"We reserve the following top level ranges:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["TCP: ",(0,s.jsx)(n.code,{children:"4200-4299"})]}),"\n",(0,s.jsxs)(n.li,{children:["UDP: ",(0,s.jsx)(n.code,{children:"4300-4399"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Each service in the node has 10 ports reserved within each range."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"For node operators, they can either choose to individually open up the assigned ports, or just open the top level ranges, at their discretion. But we reserve the full ranges for future use, so they should avoid any port conflicts with other software running on the node."})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For the Node Operators who opt to run the ",(0,s.jsx)(n.code,{children:"get.fleek.network"})," assisted installer, the ports are verified if in use."]})}),"\n",(0,s.jsx)(n.p,{children:"The Node process requires the following ports:"}),"\n",(0,s.jsxs)(n.h3,{id:"connection-pool-4x00-4x09",children:["Connection Pool (",(0,s.jsx)(n.code,{children:"4x00-4x09"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Netkit QUIC: ",(0,s.jsx)(n.code,{children:"4300 (UDP)"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"consensus-4x10-4x19",children:["Consensus (",(0,s.jsx)(n.code,{children:"4x10-4x19"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mempool: ",(0,s.jsx)(n.code,{children:"4210 (TCP)"})]}),"\n",(0,s.jsxs)(n.li,{children:["Primary: ",(0,s.jsx)(n.code,{children:"4310 (UDP)"})]}),"\n",(0,s.jsxs)(n.li,{children:["Worker: ",(0,s.jsx)(n.code,{children:"4311 (UDP)"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"handshake-4x20-4x29",children:["Handshake (",(0,s.jsx)(n.code,{children:"4x20-4x29"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["HTTP: ",(0,s.jsx)(n.code,{children:"4220 (TCP)"})]}),"\n",(0,s.jsxs)(n.li,{children:["TCP: ",(0,s.jsx)(n.code,{children:"4221 (TCP)"})]}),"\n",(0,s.jsxs)(n.li,{children:["WebRTC: ",(0,s.jsx)(n.code,{children:"4320 (UDP)"})]}),"\n",(0,s.jsxs)(n.li,{children:["WebTransport: ",(0,s.jsx)(n.code,{children:"4321 (UDP)"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"rpc-4x30-4x39",children:["RPC (",(0,s.jsx)(n.code,{children:"4x30-4x39"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["HTTP: ",(0,s.jsx)(n.code,{children:"4230 (TCP)"})]}),"\n",(0,s.jsx)(n.li,{children:"WebSocket / WebTransport?"}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"dht-4x40-4x49",children:["DHT (",(0,s.jsx)(n.code,{children:"4x40-4x49"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["UDP: ",(0,s.jsx)(n.code,{children:"4340 (UDP)"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"broadcast",children:"Broadcast"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Uses connection pool"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"blockstore-server",children:"Blockstore Server"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Uses connection pool"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"required",type:"caution",children:(0,s.jsx)(n.p,{children:"The ports should be freed before launching the node process. Any blockers or firewalls should be configured to enable the ports."})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},6019:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=r(5893),i=r(1151),t=r(3872),o=r(7767);const l={title:"Requirements",hide_title:!0,description:"The requirements for the server specifications on which the Fleek Network Node can be installed and run.",tags:["requirements","server"],sidebarCollapsible:!1},d=void 0,c={id:"node/requirements",title:"Requirements",description:"The requirements for the server specifications on which the Fleek Network Node can be installed and run.",source:"@site/docs/node/requirements.md",sourceDirName:"node",slug:"/node/requirements",permalink:"/docs/node/requirements",draft:!1,unlisted:!1,tags:[{label:"requirements",permalink:"/docs/tags/requirements"},{label:"server",permalink:"/docs/tags/server"}],version:"current",frontMatter:{title:"Requirements",hide_title:!0,description:"The requirements for the server specifications on which the Fleek Network Node can be installed and run.",tags:["requirements","server"],sidebarCollapsible:!1},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/node/overview"},next:{title:"Testnet onboarding",permalink:"/docs/node/testnet-onboarding"}},a={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Server",id:"server",level:2},{value:"Ports",id:"ports",level:2},{value:"Specs",id:"specs",level:2},{value:"CPU Architecture",id:"cpu-architecture",level:3},{value:"Number of CPU cores",id:"number-of-cpu-cores",level:3},{value:"Memory",id:"memory",level:3}];function u(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"This section provides the requirements for the server specifications on which the Fleek Network Node can be installed and run."}),"\n",(0,s.jsx)(n.admonition,{title:"warning",type:"caution",children:(0,s.jsx)(n.p,{children:"Only 64-bits distributions are supported. Do not try to install it on a 32-bits operating system!"})}),"\n",(0,s.jsx)(n.h2,{id:"server",children:"Server"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"The Fleek Network node binary is only supported by a Linux server. Currently, we are only providing support for the following distros:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Debian (>= 11)"}),"\n",(0,s.jsx)(n.li,{children:"Ubuntu (>= 22.04 LTS)"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Support for other OS will be made available soon, e.g. CentOS and Fedora. Feel free to test running on older versions, but we reduce the number of versions to ease support and keep instructions less verbose, which should be easily translatable to your preferred OS Distro and Version. Any contributions to provide support for your favorite distro are welcomed! Feel free to ",(0,s.jsx)(n.a,{href:"https://github.com/fleek-network",children:"open a PR"})," in our repositories."]})}),"\n",(0,s.jsx)(n.p,{children:"Because of the use of Linux containerization technology, other operating systems, such as FreeBSD, OpenBSD, MacOS, Windows and others are not supported."}),"\n",(0,s.jsx)(n.p,{children:"If you don\u2019t have a server or a spare machine, keep reading as we'll give you some hints on how to rent one, although we are not affiliated with any provider."}),"\n",(0,s.jsx)(n.h2,{id:"ports",children:"Ports"}),"\n",(0,s.jsx)(o.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"specs",children:"Specs"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"cpu-architecture",children:"CPU Architecture"}),"\n",(0,s.jsxs)(n.p,{children:["The Testnet Phase ",4," testnet includes additional functionality and improvements, such as enhanced security measures and trusted computing that requires ",(0,s.jsx)(n.strong,{children:"Intel SGX chips"})," in the Node specifications. A list of hardware which supports ",(0,s.jsx)(n.strong,{children:"Intel SGX chips - Software Guard Extensions"})," is available ",(0,s.jsx)(n.a,{href:"https://github.com/ayeks/SGX-hardware",children:"here"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Intel's Software Guard Extensions (SGX) is a set of\nextensions to the Intel architecture that aims to provide integrity and confidentiality guarantees to security sensitive computation performed on a computer where all the privileged software (kernel, hypervisor, etc) is potentially malicious. See the research paper on ",(0,s.jsx)(n.a,{href:"https://eprint.iacr.org/2016/086.pdf",children:"Intel SGX Explained"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"number-of-cpu-cores",children:"Number of CPU cores"}),"\n",(0,s.jsx)(n.p,{children:"The recommended number of CPU cores is a minimum of 4 with a minimum CPU speed of 2.0 GHz. The Fleek Network node binary is only supported on CPUs that adhere to the x86_64 architecture (64-bit)."}),"\n",(0,s.jsx)(n.h3,{id:"memory",children:"Memory"}),"\n",(0,s.jsx)(n.p,{children:"A minimum of 32 GB of memory (RAM) is required and a reasonable amount of disk space for the installation and running processes, which at the minimum should be around 20 GB."}),"\n",(0,s.jsx)(t.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3872:(e,n,r)=>{r.d(n,{Z:()=>i});r(7294);var s=r(5893);const i=e=>{let{image:n,name:r,title:i,url:t,communityMember:o=!1}=e;return(0,s.jsx)("section",{className:"author_card",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"avatar",children:(0,s.jsx)("a",{href:t,target:"_blank",alt:r,children:(0,s.jsx)("img",{src:n,alt:r})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"name",children:(0,s.jsx)("a",{href:t,target:"_blank",alt:r,children:r})}),(0,s.jsx)("span",{className:"title",children:i}),(0,s.jsxs)("span",{className:"discord",children:[o?"Join our community on":"Got questions? Find us on"," ",(0,s.jsx)("a",{href:"https://discord.gg/fleek",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var s=r(7294);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);