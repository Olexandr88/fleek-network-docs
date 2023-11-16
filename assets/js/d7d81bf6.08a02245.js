"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[2918],{6710:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=r(5893),i=r(1151),s=r(3872);const l={title:"Error building on ARM64",slug:"error-building-on-arm64",hide_title:!0,tags:["references","help","fix"]},a=void 0,o={id:"Lightning CLI/error-building-on-arm64",title:"Error building on ARM64",description:"Building on the ARM64 (aarch64)",source:"@site/references/Lightning CLI/error-building-on-arm64.md",sourceDirName:"Lightning CLI",slug:"/Lightning CLI/error-building-on-arm64",permalink:"/references/Lightning CLI/error-building-on-arm64",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Lightning CLI/error-building-on-arm64.md",tags:[{label:"references",permalink:"/references/tags/references"},{label:"help",permalink:"/references/tags/help"},{label:"fix",permalink:"/references/tags/fix"}],version:"current",lastUpdatedAt:1700163400,formattedLastUpdatedAt:"Nov 16, 2023",frontMatter:{title:"Error building on ARM64",slug:"error-building-on-arm64",hide_title:!0,tags:["references","help","fix"]},sidebar:"defaultSidebar",previous:{title:"Uninstall Docker Setup",permalink:"/references/Docker/uninstall-docker-setup"},next:{title:"Error linking with cc",permalink:"/references/Lightning CLI/error-linking-with-cc-failed-exist-status-1"}},c={},d=[{value:"Building on the ARM64 (aarch64)",id:"building-on-the-arm64-aarch64",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"building-on-the-arm64-aarch64",children:"Building on the ARM64 (aarch64)"}),"\n",(0,t.jsxs)(n.p,{children:["ARM64 platform has its own specifics, and currently consists of requiring ",(0,t.jsx)(n.code,{children:"gcc"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install gcc\n"})}),"\n",(0,t.jsxs)(n.p,{children:["On cargo build, the error ",(0,t.jsx)(n.code,{children:"error: linking with "}),"cc",(0,t.jsx)(n.code,{children:" failed: exit status: 1"})," occurs, as demonstrated in the output below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"error: linking with `cc` failed: exit status: 1\n# ... wall of text\n# ... the key error is \u21b4\n= note: /usr/bin/ld: /home/ubuntu/fleek-network/lightning/target/release/deps/libblake3-a927e9b36d695ff0.rlib(blake3-a927e9b36d695ff0.blake3.91a53ea05847a7a5-cgu.0.rcgu.o): in function `blake3_compress_in_place_portable':\n          /home/ubuntu/.cargo/registry/src/index.crates.io-6f17d22bba15001f/blake3-1.4.1/src/ffi_neon.rs:45: multiple definition of `blake3_compress_in_place_portable'; /home/ubuntu/fleek-network/lightning/target/release/deps/libfleek_blake3-990c4c0cfb4eaa87.rlib(fleek_blake3-990c4c0cfb4eaa87.fleek_blake3.4f11e9370af31773-cgu.0.rcgu.o):/home/ubuntu/.cargo/registry/src/index.crates.io-6f17d22bba15001f/fleek-blake3-1.4.1/src/ffi_neon.rs:45: first defined here\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As a result of the ",(0,t.jsx)(n.a,{href:"https://github.com/ryssroad/fleek-aarch64-build",children:"research"})," by the community member ",(0,t.jsx)(n.a,{href:"https://github.com/ryssroad",children:"ryssroad"}),", the following solution was shared."]}),"\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"cargo.toml"})," file in ",(0,t.jsx)(n.code,{children:"~/fleek-network/lightning/Cargo.toml"})," and find the ",(0,t.jsx)(n.code,{children:"lto"})," key."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"lto = true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Change the ",(0,t.jsx)(n.code,{children:"lto"})," key value from ",(0,t.jsx)(n.code,{children:"true"})," to ",(0,t.jsx)(n.code,{children:"thin"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'...\n[profile.release]\n# currently enabled, may increase build time, but runtime faster, can set to `"thin"`.\nlto = "thin"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"RUSTFLAGS"})," on build, as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'RUSTFLAGS="-Clink-arg=-Wl,--allow-multiple-definition" cargo +stable build --release \n'})}),"\n",(0,t.jsxs)(n.p,{children:["Once the build completes, you should find the generated binary ",(0,t.jsx)(n.code,{children:"lightning-node"})," under the directory ",(0,t.jsx)(n.code,{children:"~/fleek-network/lightning/target/release/lightning-node"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"As an example, execute:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"~/fleek-network/lightning/target/release/lightning-node help\n"})}),"\n",(0,t.jsx)(n.p,{children:"To find the help output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Usage: lightning-node [OPTIONS] <COMMAND>\n\nCommands:\n  run           Start the node\n  keys          Handle keys\n  print-config  Print the loaded configuration\n  help          Print this message or the help of the given subcommand(s)\n\nOptions:\n  -c, --config <CONFIG>      Path to the toml configuration file [default: ~/.lightning/config.toml]\n      --with-mock-consensus  Determines that we should be using the mock consensus backend\n  -v...                      Increases the level of verbosity (the max level is -vvv)\n      --log-location         Print code location on console logs\n  -h, --help                 Print help\n  -V, --version              Print version\n"})}),"\n",(0,t.jsx)(s.Z,{name:"Road aka @road",image:"https://github.com/ryssroad.png",title:"Community member",url:"https://github.com/ryssroad",communityMember:"true"})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3872:(e,n,r)=>{r.d(n,{Z:()=>i});r(7294);var t=r(5893);const i=e=>{let{image:n,name:r,title:i,url:s,communityMember:l=!1}=e;return(0,t.jsx)("section",{className:"author_card",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"avatar",children:(0,t.jsx)("a",{href:s,target:"_blank",alt:r,children:(0,t.jsx)("img",{src:n,alt:r})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"name",children:(0,t.jsx)("a",{href:s,target:"_blank",alt:r,children:r})}),(0,t.jsx)("span",{className:"title",children:i}),(0,t.jsxs)("span",{className:"discord",children:[l?"Join our community on":"Got questions? Find us on"," ",(0,t.jsx)("a",{href:"https://discord.gg/fleekxyz",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>l});var t=r(7294);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);