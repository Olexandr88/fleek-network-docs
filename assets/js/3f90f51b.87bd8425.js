"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[6669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3872:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);const i=e=>{let{image:t,name:n,title:i,url:r,communityMember:o=!1}=e;return a.createElement("section",{className:"author_card"},a.createElement("div",null,a.createElement("span",{className:"avatar"},a.createElement("a",{href:r,target:"_blank",alt:n},a.createElement("img",{src:t,alt:n}))),a.createElement("div",null,a.createElement("span",{className:"name"},a.createElement("a",{href:r,target:"_blank",alt:n},n)),a.createElement("span",{className:"title"},i),a.createElement("span",{className:"discord"},o?"Join our community on":"Got questions? Find us on"," ",a.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}},3726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),r=n(3872);const o={draft:!1,title:"Services",hide_title:!0,sidebarCollapsible:!1,date:new Date("2023-01-10T09:00:00.000Z"),description:"Discover Fleek Network Services, modular software powered with the enhanced scalability and performance of edge networks.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","services","development","sdk","toolkit"]},s=void 0,c={unversionedId:"learn/services",id:"learn/services",title:"Services",description:"Discover Fleek Network Services, modular software powered with the enhanced scalability and performance of edge networks.",source:"@site/docs/learn/services.md",sourceDirName:"learn",slug:"/learn/services",permalink:"/docs/learn/services",draft:!1,tags:[{label:"Edge Platform",permalink:"/docs/tags/edge-platform"},{label:"CDN",permalink:"/docs/tags/cdn"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"services",permalink:"/docs/tags/services"},{label:"development",permalink:"/docs/tags/development"},{label:"sdk",permalink:"/docs/tags/sdk"},{label:"toolkit",permalink:"/docs/tags/toolkit"}],version:"current",frontMatter:{draft:!1,title:"Services",hide_title:!0,sidebarCollapsible:!1,date:"2023-01-10T09:00:00.000Z",description:"Discover Fleek Network Services, modular software powered with the enhanced scalability and performance of edge networks.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","services","development","sdk","toolkit"]},sidebar:"docs",previous:{title:"Token and economics",permalink:"/docs/learn/token-and-economics"},next:{title:"Developers",permalink:"/docs/learn/developers"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Service Development Toolkit (SDK)",id:"service-development-toolkit-sdk",level:2},{value:"Handshake",id:"handshake",level:2},{value:"Service geographic distribution",id:"service-geographic-distribution",level:2},{value:"Resources as commodities",id:"resources-as-commodities",level:2},{value:"Use-cases",id:"use-cases",level:2},{value:"Traditional Services",id:"traditional-services",level:3},{value:"Edge Functions",id:"edge-functions",level:4},{value:"SSR/ISR",id:"ssrisr",level:4},{value:"Hosting",id:"hosting",level:4},{value:"CDN",id:"cdn",level:4},{value:"Container Orchestration",id:"container-orchestration",level:4},{value:"CRDT Databases",id:"crdt-databases",level:4},{value:"Web3 Services",id:"web3-services",level:3},{value:"Blockchain Snapshots",id:"blockchain-snapshots",level:4},{value:"Decentralized IPFS Pinning",id:"decentralized-ipfs-pinning",level:4},{value:"VM&#39;s (EVM, zkVM&#39;s, etc.)",id:"vms-evm-zkvms-etc",level:4},{value:"Ephemeral Rollups",id:"ephemeral-rollups",level:4},{value:"Proof Generation",id:"proof-generation",level:4},{value:"Alternative Sequencers",id:"alternative-sequencers",level:4}],p={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"A Fleek Network Service is a modular application that runs on nodes and allows users to perform well-defined functions or some specific tasks. Services are scalable and performant due to edge computation and networking features provided by the core principles of the network."),(0,i.kt)("p",null,"As a permissionless system, services are built by developers who are free to build and deploy them to run on the decentralized edge platform. Applications can be of any kind but are generally described as web services. These are cryptographically secure and run within a fair economically incentivized model. The services are hosted in user-managed resources and are highly available to customers and end-users in exchange for rewards."),(0,i.kt)("p",null,"A Service Development Toolkit (SDK) facilitates access to core APIs and resources for developers. Services run in a sandboxed environment (unable to access the host's processes, hardware and kernel directly) and are restricted to specific features such as cryptography, networking and storage. The service implementation source code is fully managed by the author(s), owner(s) and development team(s)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"At an early stage, core services are statically linked to the node's binary process (Lightning). In the future, the Fleek Network protocol aims to load services dynamically.")),(0,i.kt)("h2",{id:"service-development-toolkit-sdk"},"Service Development Toolkit (SDK)"),(0,i.kt)("p",null,"The Service Development Toolkit (SDK) abstracts the core protocol features, including the communication with the middleware which is done through an Inter-Process Communication (IPC) system. Any system-level programming language, such as C/C++, Go or Rust can establish a communication channel with the middleware. By using the toolkit, a Service builder accelerates the development process e.g. effectively enables nodes to generate Delivery Acknowledgements (SNARKs) that prove work completion which is used to determine rewards, along with other cryptographic commitments."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As discussed in ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/the-network"},"The Network")," section, ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/the-network#delivery-acknowledgements-snarks"},"Delivery Acknowledgements")," include metadata about the commodities consumed by a node while executing or running a service. It also contains cryptographically secured metadata that are tamper-proof and used to determine the reward attributed to a node.")),(0,i.kt)("p",null,"A commitment ensures clients receive the correct work output that is being requested, such as content, a computed response, etc. In addition to preventing malicious services from coercing a node into making false commitments. Likewise, the commitments generated by a node determine the bandwidth and computation served, amongst other commodities."),(0,i.kt)("h2",{id:"handshake"},"Handshake"),(0,i.kt)("p",null,"The Handshake component is the entry point to external communications with a node. It enables clients to establish an encrypted communication session with the node and interact with services over a secure transport layer (TLS+TCP or QUIC). On establishing a client and node connection, public keys are exchanged and a lane is negotiated for the session. A Handshake is required for a client to access and interact with a service."),(0,i.kt)("h2",{id:"service-geographic-distribution"},"Service geographic distribution"),(0,i.kt)("p",null,"The network takes care of infrastructure coverage, scalability, and incentivizing edge nodes to run services. It employs a range of algorithms to assign edge nodes in each geographic region to handle the work for each service, guaranteeing the most efficient route. Additionally, when a service experiences a surge in demand and scales up, any unused services are automatically downscaled. By dynamically allocating resources, it eliminates unnecessary resource usage and allows efficient garbage collection. All of this is achieved while maintaining optimal levels of trust, security, infrastructure coverage, and performance guarantees."),(0,i.kt)("h2",{id:"resources-as-commodities"},"Resources as commodities"),(0,i.kt)("p",null,"The hardware resources used by a service are packaged and measured as commodities. Includes things like bandwidth and CPU, along with their respective commodities such as GB(s) and CPU cycles. ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/the-network#delivery-acknowledgements-snarks"},"Delivery Acknowledgements")," detail the commodities used by a node during service execution. The data is used to reward the node based on the current pricing of those commodities set by the network governance."),(0,i.kt)("h2",{id:"use-cases"},"Use-cases"),(0,i.kt)("p",null,"Building on Fleek Network's Decentralized Edge Infrastructure unlocks various opportunities and advantages for Service builders, that empower them to implement most of the following concepts."),(0,i.kt)("h3",{id:"traditional-services"},"Traditional Services"),(0,i.kt)("h4",{id:"edge-functions"},"Edge Functions"),(0,i.kt)("p",null,"Edge computing comes in many flavors, and Fleek Network can support many serverless or edge computing functions. For example, low-cost computation for JavaScript functions, Lambda, runtimes or Cloudflare Workers-like computing. Can also perform deterministic computation, consensus-based computation, ZK-computation, and EVM computation. The network is non-opinionated and enables developers to refine their computing service in great detail."),(0,i.kt)("h4",{id:"ssrisr"},"SSR/ISR"),(0,i.kt)("p",null,"One applied edge compute use-case that can be built is Server-side Rendering (SSR) or Incremental Static Regeneration Service (ISR) on top of a container/serverless engine. Given the granularity of content verification within the core's hashing, streaming of particular pieces of data can be optimized and parallelized across multiple nodes. Such as chunking pages of static sites and regenerating only where needed."),(0,i.kt)("h4",{id:"hosting"},"Hosting"),(0,i.kt)("p",null,"Web3 apps are generally composed of a backend and a frontend stack. The backends are considerably decentralized but often have the client-side facing interface hosted into a central cloud provider. Given the desirability of content delivery acceleration services for a snappy user experience, that end customers demand. The Fleek Network takes a big step forward on this topic, as services can leverage the block store and content addressability (IPFS) for an application host provider."),(0,i.kt)("p",null,"As we have today with user stories like S3 or Netlify, a service can use Fleek Network as a storage layer for static sites. Similarly, a CDN or SSR can complement static site hosting by accelerating and dynamically computing user needs. In consequence, the reward mechanism would distribute rewards fairly to every actor in the computation and fulfillment of paying customers for these requests, e.g. service builder, node operator, etc."),(0,i.kt)("h4",{id:"cdn"},"CDN"),(0,i.kt)("p",null,"A decentralized CDN is a big missing piece in the Web3 infra stack. Every protocol, middleware, service, and app can benefit from content acceleration. Today most projects use popular CDNs in front of their stacks for optimization and performance improvement e.g. availability and latency. A decentralized CDN built on Fleek Network can gain great notoriety in the blockchain and Web3 development communities, due to its benefits and principles, without sacrificing performance and cost of integration."),(0,i.kt)("p",null,"The dCDN service can cache content based on the user request and popularity, and put it in the speediest location based on the network reputation system, computation and routing response timings. Conceptually similar to a traditional CDN, but abstracting the geo-location that is usually specified by user-selected zones."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"While the network does not possess a specific concept of geography, it gains an implicit understanding of geographical proximity through the data it collects on latency and hop counts between nodes, which is a part of the reputation system.")),(0,i.kt)("p",null,"Learn more about how Fleek Network behaves by reading the ",(0,i.kt)("a",{parentName:"p",href:"/docs/whitepaper"},"whitepaper"),"."),(0,i.kt)("h4",{id:"container-orchestration"},"Container Orchestration"),(0,i.kt)("p",null,"A decentralized orchestration service built on a content-addressable edge network can bring benefits in performance and delivery. A service could utilize the native content-addressing and Blake3 hashing and verified data streaming to partition large container image files and serve them at scale in a multi-region environment."),(0,i.kt)("p",null,"Fleek Network can act as a p2p CDN, serving container chunks in a parallelized, verified, and performant way\u2013without sacrificing decentralization. Similar to concepts that can be found in Docker image hosting, Docker Swarm clustering, etc."),(0,i.kt)("h4",{id:"crdt-databases"},"CRDT Databases"),(0,i.kt)("p",null,"Database services in a decentralized edge platform with a content addressable core can benefit from the network's data deduplication and integrity characteristics."),(0,i.kt)("p",null,"Particularly a CRDT database service could be built to converge data from multiple edge locations replicas. Given all data is content-addressed, unique content hashes allow for easy differentiation and verification as the data is replicated."),(0,i.kt)("h3",{id:"web3-services"},"Web3 Services"),(0,i.kt)("h4",{id:"blockchain-snapshots"},"Blockchain Snapshots"),(0,i.kt)("p",null,"Interchain synchronization of a full-node history is CPU-intensive. Can take hours, days or weeks depending on blockchain technology. On Fleek Network's core, the internal blockchain is based on content addressability which stores snapshots of the state HEAD. It utilizes decentralized content acceleration for node entire-state synchronization for higher speed."),(0,i.kt)("p",null,"A service can be built that does a similar process for any chain. By automating snapshot storage timely and in-synchronization to the chain HEAD. It can deliver an entire state to a node rapidly."),(0,i.kt)("h4",{id:"decentralized-ipfs-pinning"},"Decentralized IPFS Pinning"),(0,i.kt)("p",null,"All content on the Fleek Network is content addressed and referred to by the CID, which mapping of the CID to the origin is stored in perpetuity. Coupled with the built-in file system interlinked to decentralized storage protocols such as Arweave and Filecoin, an IPFS pinning service can be built. A pinning service for IPFS that provides the user experience we are accustomed to, but using decentralized infrastructure, which today's IPFS pinning services fail to offer."),(0,i.kt)("p",null,"Worth mentioning that an IPFS pinning service as such, would be cheaper and provide better availability, performance and security guarantees. For example, as the network stores the CID-to-origin mapping in perpetuity, even if an IPFS file is lost it can be easily retrieved if there's at least one origin."),(0,i.kt)("h4",{id:"vms-evm-zkvms-etc"},"VM's (EVM, zkVM's, etc.)"),(0,i.kt)("p",null,"A service that deploys a virtual machine, such as many zk-VMs, or the EVM can be built and deployed to Fleek Network. It can provide compute in the zk-VM and provide the zk-SNARK from the node, proving the correctness of the response. In addition, the network routing can ensure that the zk-VM computation is happening in the closest proximity to the client based on latency and other network factors."),(0,i.kt)("h4",{id:"ephemeral-rollups"},"Ephemeral Rollups"),(0,i.kt)("p",null,"The Fleek Network can be utilized as a short-term service platform for a variety of applications or side-chaining that compute state and roll it up to a smart contract. An NFT minting or game event that occurs during a short period, can roll up state to a smart contract after the event time elapses."),(0,i.kt)("p",null,"To help users mitigate gas costs and feeds while providing instant finality throughout an event. Consequently, roll-ups would run on a decentralized network, that is fault-resistant and highly performant."),(0,i.kt)("h4",{id:"proof-generation"},"Proof Generation"),(0,i.kt)("p",null,"As a result of the rise of Zero-Knowledge proofs (SNARKs, STARKs) for performance and cost-efficient proof generation, there are benefits for computing them closer to end-users and in a decentralized manner which Fleek Network Edge Network entails."),(0,i.kt)("p",null,"For example, a hypothetical ",(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2016/260.pdf"},"Groth16")," service can read parameters from configuration files in a file system and generate a proof based on public user custom parameters."),(0,i.kt)("h4",{id:"alternative-sequencers"},"Alternative Sequencers"),(0,i.kt)("p",null,"As encountered by most sequencers that post transactions to Layer-1 settlement contracts (which are mostly done over centralized processes), Layer-2 networks bypass these by posting them manually.\nThis causes long finalization times and a reduction in block speeds on Layer-1, which is contrary to what users are familiar with and find ordinary on Layer-2."),(0,i.kt)("p",null,"In Fleek Network, a service builder can offer an alternative to a Layer-2 sequencer, that is decentralized and more reliable by batching and posting to Layer-1 settlement contracts. With equivalent Layer-2 settlement times."),(0,i.kt)("p",null,"An additional benefit can be enabling end-user gasless transaction submissions by disregarding a Layer-2 gas token to submit transactions to Layer-1."),(0,i.kt)(r.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}h.isMDXComponent=!0}}]);