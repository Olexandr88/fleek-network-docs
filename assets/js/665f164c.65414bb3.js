"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[9320],{5032:(e,t,n)=>{n.d(t,{ZP:()=>r});var s=n(5893),o=n(1151);function i(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"Node participation can be true or false (online or offline) throughout an Epoch. Participation is in a transient state when the operator requests to opt in or out, and the network has yet to end the undergoing Epoch. Once the Epoch ends, the Node participation transitions to true or false. Therefore, a Node Operator can expect a Node state to be online, offline, opted in or out during an Epoch lifetime."}),(0,s.jsxs)(t.p,{children:["Before starting the service, make sure to opt-in or opt-out of network participation, through the available subcommand ",(0,s.jsx)(t.strong,{children:"opt"})," in the CLI."]}),(0,s.jsx)(t.p,{children:"The quickest way to find help is to run the help subcommand as follows:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"lgtn opt help\n"})}),(0,s.jsxs)(t.p,{children:["To learn more, read the ",(0,s.jsx)(t.a,{href:"/docs/node/lightning-cli",children:"Lightning-CLI"})," section for command ",(0,s.jsx)(t.a,{href:"/docs/node/lightning-cli#opt",children:"opt"}),"."]})]})}function r(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},3566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var s=n(5893),o=n(1151),i=n(3872),r=n(5032);const a={title:"Testnet onboarding",slug:"testnet-onboarding",hide_title:!0,description:"Join Fleek's Testnet onboarding, follow Discord instructions to install and verify your node. Check live updates, attend community calls, and ensure node is setup correctly.",tags:["testnet","onboarding","phases","getting started"],sidebarCollapsible:!1},l=void 0,d={id:"node/testnet-onboarding",title:"Testnet onboarding",description:"Join Fleek's Testnet onboarding, follow Discord instructions to install and verify your node. Check live updates, attend community calls, and ensure node is setup correctly.",source:"@site/docs/node/testnet-onboarding.md",sourceDirName:"node",slug:"/node/testnet-onboarding",permalink:"/docs/node/testnet-onboarding",draft:!1,unlisted:!1,tags:[{label:"testnet",permalink:"/docs/tags/testnet"},{label:"onboarding",permalink:"/docs/tags/onboarding"},{label:"phases",permalink:"/docs/tags/phases"},{label:"getting started",permalink:"/docs/tags/getting-started"}],version:"current",frontMatter:{title:"Testnet onboarding",slug:"testnet-onboarding",hide_title:!0,description:"Join Fleek's Testnet onboarding, follow Discord instructions to install and verify your node. Check live updates, attend community calls, and ensure node is setup correctly.",tags:["testnet","onboarding","phases","getting started"],sidebarCollapsible:!1},sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/node/requirements"},next:{title:"Install",permalink:"/docs/node/install"}},c={},h=[{value:"Testnet Phase:",id:"testnet-phase",level:2},{value:"Prerequesites",id:"prerequesites",level:3},{value:"1) Install the Fleek Network Lightning CLI latest version",id:"1-install-the-fleek-network-lightning-cli-latest-version",level:3},{value:"2) Set up the Metamask browser extension",id:"2-set-up-the-metamask-browser-extension",level:3},{value:"3) Visit the faucet website",id:"3-visit-the-faucet-website",level:3},{value:"4) Connect wallet",id:"4-connect-wallet",level:3},{value:"5) Mint tFLK",id:"5-mint-tflk",level:3},{value:"6) Stake tFLK",id:"6-stake-tflk",level:3},{value:"7) Confirm the transaction on metamask",id:"7-confirm-the-transaction-on-metamask",level:3},{value:"8) Network participation",id:"8-network-participation",level:3},{value:"9) Start the Node",id:"9-start-the-node",level:3},{value:"10) Confirm Node Stake",id:"10-confirm-node-stake",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"The Node fails to run after successfully stake and run? Or the Core team network restart announcement?",id:"the-node-fails-to-run-after-successfully-stake-and-run-or-the-core-team-network-restart-announcement",level:3},{value:"Node details don&#39;t show staked amount?",id:"node-details-dont-show-staked-amount",level:3},{value:"Can I shut down the node after Testnet completion?",id:"can-i-shut-down-the-node-after-testnet-completion",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["The following instructions are intended for onboarding Node Operators into the Testnet and will only be useful for Testnet Phases that are ",(0,s.jsx)(t.strong,{children:"public"})," or for Node Operators who have been ",(0,s.jsx)(t.strong,{children:"contacted"})," and ",(0,s.jsx)(t.strong,{children:"selected"})," by the Fleek Foundation. Please be aware that guidelines or instructions for participation are provided prior to the launch of a Testnet Phase. If you'd like to ",(0,s.jsx)(t.strong,{children:"participate"})," in the next ",(0,s.jsx)(t.strong,{children:"Testnet Phase"}),", follow us on ",(0,s.jsx)(t.a,{href:"https://discord.gg/fleek",children:"Discord"}),", ",(0,s.jsx)(t.a,{href:"https://twitter.com/fleek_net",children:"Twitter"}),", and our ",(0,s.jsx)(t.a,{href:"https://blog.fleek.network/",children:"Blog"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"testnet-phase",children:"Testnet Phase:"}),"\n",(0,s.jsxs)(t.p,{children:["Following the successful completion of Fleek Network ",(0,s.jsx)(t.a,{href:"https://blog.fleek.network",children:"first Testnet Phases"}),", the core development team has been actively implementing the next set of core protocol functionalities, which include services, the reward's system, the broadcaster/synchronizer, as well as all identified improvements and fixes found during that phase."]}),"\n",(0,s.jsx)(t.h3,{id:"prerequesites",children:"Prerequesites"}),"\n",(0,s.jsxs)(t.p,{children:["The Fleek team cares about user experience and provides documentation and tools (whichever's your preference) to onboard easily and quickly. However, the Node operator's server should have the ",(0,s.jsx)(t.a,{href:"/docs/node/requirements",children:"minimum requirements"})," to set up and run a Fleek Network node."]}),"\n",(0,s.jsx)(t.p,{children:"To join, you will have to follow the steps below:"}),"\n",(0,s.jsx)(t.h3,{id:"1-install-the-fleek-network-lightning-cli-latest-version",children:"1) Install the Fleek Network Lightning CLI latest version"}),"\n",(0,s.jsxs)(t.p,{children:["Once Fleek launches the Testnet Phase, you have to install or update the Lightning CLI binary to the latest version. The instructions are available ",(0,s.jsx)(t.a,{href:"/docs/node/install",children:"here"})," where you can use an assisted installer or install it manually by following the documentation. If you already have it installed, use the update reference provided ",(0,s.jsx)(t.a,{href:"/references/Lightning%20CLI/update-cli-from-source-code",children:"here"})," or if you prefer a more step-by-step approach use the provided ",(0,s.jsx)(t.a,{href:"/guides/Node%20Operators/updating-lightning",children:"guide"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Warning",type:"caution",children:(0,s.jsx)(t.p,{children:"Particular Testnet versions are only available after the Testnet Phase is ready and announced! Since we work transparently (open-source) some users rush to install things on their own assumptions, misaligned, which causes them confusion. The Fleek Network core team is required to provide all the changes, features and tests before announcing publicly that the particular testnet phase is ready. Otherwise, you'll be running the process prematurely, be patient to avoid disappointment please!"})}),"\n",(0,s.jsx)(t.h3,{id:"2-set-up-the-metamask-browser-extension",children:"2) Set up the Metamask browser extension"}),"\n",(0,s.jsxs)(t.p,{children:["Open the Metamask ",(0,s.jsx)(t.code,{children:"settings"}),", located in the drop-down (top-right menu options). Set the following property values:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Network Name: ",(0,s.jsx)(t.code,{children:"Fleek Network Testnet"})]}),"\n",(0,s.jsxs)(t.li,{children:["RPC URL: ",(0,s.jsx)(t.code,{children:"https://rpc.testnet.fleek.network/rpc/v0"})]}),"\n",(0,s.jsxs)(t.li,{children:["Chain ID: ",(0,s.jsx)(t.code,{children:"59330"})]}),"\n",(0,s.jsxs)(t.li,{children:["Currency symbol: ",(0,s.jsx)(t.code,{children:"tFLK"})]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Testnet FLK"})," on testnets are supposed to have no real value. Since you need Testnet ",(0,s.jsx)(t.code,{children:"FLK"})," to actually interact with Fleek Network, users get ",(0,s.jsx)(t.code,{children:"Testnet FLK"})," for free from the faucet. For clarity and simplicity we'll refer to ",(0,s.jsx)(t.code,{children:"Testnet FLK"})," as ",(0,s.jsx)(t.code,{children:"tFLK"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"3-visit-the-faucet-website",children:"3) Visit the faucet website"}),"\n",(0,s.jsxs)(t.p,{children:["Before proceeding, make sure to have the Fleek Network selected as the metamask network. Once confirmed, visit the ",(0,s.jsx)(t.a,{href:"https://faucet.testnet.fleek.network/",children:"Faucet website"})]}),"\n",(0,s.jsx)(t.h3,{id:"4-connect-wallet",children:"4) Connect wallet"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.a,{href:"https://faucet.testnet.fleek.network/",children:"Faucet website"}),", you have to click the ",(0,s.jsx)(t.code,{children:"Connect Wallet"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"5-mint-tflk",children:"5) Mint tFLK"}),"\n",(0,s.jsxs)(t.p,{children:["Once ",(0,s.jsx)(t.code,{children:"Connect Wallet"})," is ready, proceed to ",(0,s.jsx)(t.code,{children:"Mint tFLK"})," and wait until the balance of the account in your Metamask increases. You need to have ",(0,s.jsx)(t.code,{children:"tFLK"})," before proceeding. Be patient."]}),"\n",(0,s.jsx)(t.h3,{id:"6-stake-tflk",children:"6) Stake tFLK"}),"\n",(0,s.jsxs)(t.p,{children:["Once ",(0,s.jsx)(t.code,{children:"tFLK"})," balance is available, click in the ",(0,s.jsx)(t.code,{children:"Stake"})," button. You'll be required to provided the following details from your node:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Node Public Key"}),"\n",(0,s.jsx)(t.li,{children:"Consensus Public Key"}),"\n",(0,s.jsx)(t.li,{children:"Server IP Address"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can get the details quickly by running the ",(0,s.jsx)(t.strong,{children:"node details"})," script in the terminal connected to your machine or server where the node is set up and running, as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"curl https://get.fleek.network/node_details | bash\n"})}),"\n",(0,s.jsx)(t.p,{children:"The response should include the following details:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"\ud83e\udd16 Your server details are the following\n\nThe Node Public Key is <NODE PUBLIC KEY>\nThe Consensus Public Key is <CONSENSUS PUBLIC KEY>\nThe Node Server IP address is <SERVER IP ADDRESS>\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"warning",type:"caution",children:(0,s.jsxs)(t.p,{children:["The output above is an example, you'll not find the actual text ",(0,s.jsx)(t.code,{children:"<NODE PUBLIC KEY>"}),", ",(0,s.jsx)(t.code,{children:"<CONSENSUS PUBLIC KEY>"})," but the text values (string of bits), or ",(0,s.jsx)(t.code,{children:"<SERVER IP ADDRESS>"})," where instead you'll find a numerical ip address.\nMake sure that you copy and paste the correct values otherwise the transaction will fail!"]})}),"\n",(0,s.jsx)(t.h3,{id:"7-confirm-the-transaction-on-metamask",children:"7) Confirm the transaction on metamask"}),"\n",(0,s.jsx)(t.p,{children:"It is important to note that when transacting through Metamask, a warning message might pop up regarding gas costs, but rest assured that there won't be any deductions from your wallet balance."}),"\n",(0,s.jsx)(t.p,{children:"You'll have to wait for Metamask to confirm the transaction, which Metamask should take about 10 seconds to confirm. Although, the transaction takes under a second."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Important to note that in Testnet Phase ",1," the Epoch is set to about 30 minutes. This is the average period you'll have to wait to see any meaningful logs."]})}),"\n",(0,s.jsx)(t.h3,{id:"8-network-participation",children:"8) Network participation"}),"\n",(0,s.jsx)(t.p,{children:"The Node Operator has to explicitly opt-in to have the Node participate in the Network."}),"\n",(0,s.jsx)(r.ZP,{}),"\n",(0,s.jsx)(t.p,{children:"The Opt command allows the user to opt into or out of Network participation."}),"\n",(0,s.jsx)(t.p,{children:"To opt-in, use the subcommand in:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"lgtn opt in\n"})}),"\n",(0,s.jsx)(t.p,{children:"Once successful, you will receive a confirmation text message as feedback, notifying you of your inclusion in the next Epoch."}),"\n",(0,s.jsxs)(t.p,{children:["To learn more about network participation visit the ",(0,s.jsx)(t.a,{href:"/docs/node/lightning-cli/#opt",children:"Opt"})," section in the ",(0,s.jsx)(t.a,{href:"/docs/node/lightning-cli",children:"Lightning CLI"})," page."]}),"\n",(0,s.jsx)(t.h3,{id:"9-start-the-node",children:"9) Start the Node"}),"\n",(0,s.jsxs)(t.p,{children:["Visit the section ",(0,s.jsx)(t.a,{href:"/docs/node/systemd-service",children:"Systemd Service"})," to learn how to enable, disable, start, stop the Systemd Service."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["The Systemd Service is setup automatically by the assisted installer, manually if you have followed the instructions provided, or the docker install. If you have a custom set up, you'll have to do the equivalent to start the node as described in the section ",(0,s.jsx)(t.a,{href:"/docs/node/systemd-service",children:"Systemd Service"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"Make sure you do a quick healthcheck:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"curl https://get.fleek.network/healthcheck | bash\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To learn more about healchecks read the section ",(0,s.jsx)(t.a,{href:"/docs/node/health-check",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"10-confirm-node-stake",children:"10) Confirm Node Stake"}),"\n",(0,s.jsxs)(t.p,{children:["To confirm the Node Staked amount, you can run the ",(0,s.jsx)(t.strong,{children:"node details"})," script to get the information. The ",(0,s.jsx)(t.strong,{children:"node details"})," output will only show staked information if available, if it doesn't show staked information it means that your Node is not properly staked."]}),"\n",(0,s.jsx)(t.p,{children:"Check the Node stake by running the following command in the machine or server where the node is set up:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"curl https://get.fleek.network/node_details | bash\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Alternatively, the Stake amount can be verified by querying the ",(0,s.jsx)(t.a,{href:"/docs/learn/the-network/#json-rpc-interface",children:"RPC-JSON API"})," method ",(0,s.jsx)(t.code,{children:"flk_get_node_info"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(t.h3,{id:"the-node-fails-to-run-after-successfully-stake-and-run-or-the-core-team-network-restart-announcement",children:"The Node fails to run after successfully stake and run? Or the Core team network restart announcement?"}),"\n",(0,s.jsxs)(t.p,{children:["The Fleek Network core team might have to restart the network, for any development purposes or required updates during the Testnet Phase. If you've done this process before and is running into issues, you'll have to go into the Metamask advance settings (Metamask \u2192 Settings \u2192 Advanced) and click ",(0,s.jsx)(t.code,{children:"Clear activity and nonce data"})," or ",(0,s.jsx)(t.code,{children:"Clear Local data"}),". After doing this Metamask will clear the cache."]}),"\n",(0,s.jsx)(t.h3,{id:"node-details-dont-show-staked-amount",children:"Node details don't show staked amount?"}),"\n",(0,s.jsxs)(t.p,{children:["If you have staked successfully and the transaction details in the Metamask wallet is confirmed, but the ",(0,s.jsx)(t.strong,{children:"node details"})," script or the ",(0,s.jsx)(t.a,{href:"/docs/learn/the-network/#json-rpc-interface",children:"RPC-JSON API"})," method ",(0,s.jsx)(t.code,{children:"flk_get_node_info"})," shows an empty result, do the following:"]}),"\n",(0,s.jsx)(t.p,{children:"Metamask:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Copy the Account address at the very top of your Metamask home"}),"\n",(0,s.jsx)(t.li,{children:"Copy the Transaction ID by clicking in the tFLK transaction \u2192 Copy Transaction ID at the very top"}),"\n",(0,s.jsx)(t.li,{children:"Copy the Activity log details of the transaction"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Server where the Node is set up:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Copy the Node Public Key"}),"\n",(0,s.jsx)(t.li,{children:"Copy the Server IP Address"}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["You can get the Node Public Key and Server IP Address quick by using the ",(0,s.jsx)(t.a,{href:"#6-stake-tflk",children:"node details"})," script described in the section."]})}),"\n",(0,s.jsxs)(t.p,{children:["Report to us by sharing the details about via our ",(0,s.jsx)(t.a,{href:"https://discord.gg/fleek",children:"discord"})," troubleshooting channel."]}),"\n",(0,s.jsx)(t.h3,{id:"can-i-shut-down-the-node-after-testnet-completion",children:"Can I shut down the node after Testnet completion?"}),"\n",(0,s.jsx)(t.p,{children:"Once the Testnet finishes, it's not necessary to keep the node active. Furthermore, as the Testnet identity (keystore node and consensus pem keys) and its related stake hold no intrinsic value other than for testing purposes, you can delete them."}),"\n",(0,s.jsxs)(t.p,{children:["However, if you wish to learn about key management, you can refer to the ",(0,s.jsx)(t.a,{href:"/guides/Node%20Operators/managing-the-keystore",children:"instruction guide"})," to learn on how to back up or restore keys, etc."]}),"\n",(0,s.jsx)(i.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3872:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var s=n(5893);const o=e=>{let{image:t,name:n,title:o,url:i,communityMember:r=!1}=e;return(0,s.jsx)("section",{className:"author_card",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"avatar",children:(0,s.jsx)("a",{href:i,target:"_blank",alt:n,children:(0,s.jsx)("img",{src:t,alt:n})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"name",children:(0,s.jsx)("a",{href:i,target:"_blank",alt:n,children:n})}),(0,s.jsx)("span",{className:"title",children:o}),(0,s.jsxs)("span",{className:"discord",children:[r?"Join our community on":"Got questions? Find us on"," ",(0,s.jsx)("a",{href:"https://discord.gg/fleek",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(7294);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);