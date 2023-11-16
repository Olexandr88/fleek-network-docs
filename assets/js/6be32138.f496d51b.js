"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[3396],{3103:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=i(5893),o=i(1151);const r={title:"Bloom Filters and Cuckoo Filters for Cache Summarization",description:"Summary of our experiment informing whether or not we should replace our implementation of Counting Bloom filters with Cuckoo filters.",slug:"bloom-and-cuckoo-filters-for-cache-summarization",image:"./assets/bloom-cuckoo/bloom.png?202301181528",authors:{name:"Matthias Wright",title:"Software Engineer",url:"https://github.com/matthias-wright",image_url:"https://github.com/matthias-wright.png"},tags:["fleek network","blog","engineering","content routing"]},s=void 0,a={permalink:"/blog/bloom-and-cuckoo-filters-for-cache-summarization",source:"@site/blog/bloom-and-cuckoo-filters-for-cache-summarization.md",title:"Bloom Filters and Cuckoo Filters for Cache Summarization",description:"Summary of our experiment informing whether or not we should replace our implementation of Counting Bloom filters with Cuckoo filters.",date:"2023-11-16T19:36:40.000Z",formattedDate:"November 16, 2023",tags:[{label:"fleek network",permalink:"/blog/tags/fleek-network"},{label:"blog",permalink:"/blog/tags/blog"},{label:"engineering",permalink:"/blog/tags/engineering"},{label:"content routing",permalink:"/blog/tags/content-routing"}],readingTime:10.37,hasTruncateMarker:!0,authors:[{name:"Matthias Wright",title:"Software Engineer",url:"https://github.com/matthias-wright",image_url:"https://github.com/matthias-wright.png",imageURL:"https://github.com/matthias-wright.png"}],frontMatter:{title:"Bloom Filters and Cuckoo Filters for Cache Summarization",description:"Summary of our experiment informing whether or not we should replace our implementation of Counting Bloom filters with Cuckoo filters.",slug:"bloom-and-cuckoo-filters-for-cache-summarization",image:"./assets/bloom-cuckoo/bloom.png?202301181528",authors:{name:"Matthias Wright",title:"Software Engineer",url:"https://github.com/matthias-wright",image_url:"https://github.com/matthias-wright.png",imageURL:"https://github.com/matthias-wright.png"},tags:["fleek network","blog","engineering","content routing"]},unlisted:!1},l={image:i(9969).Z,authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",level:2},{value:"Bloom Filters",id:"bloom-filters",level:2},{value:"Cuckoo Filters",id:"cuckoo-filters",level:2},{value:"Benchmarking",id:"benchmarking",level:2},{value:"Experimental Setup",id:"experimental-setup",level:2},{value:"Memory Footprint",id:"memory-footprint",level:2},{value:"Lookup Performance",id:"lookup-performance",level:2},{value:"Insertion Performance",id:"insertion-performance",level:2},{value:"Capacity and Scaling",id:"capacity-and-scaling",level:2},{value:"Other Filters",id:"other-filters",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Disclaimer: This is not a general comparison between Bloom filters and Cuckoo filters. This blog post summarizes some of the experiments we conducted to decide whether or not we should replace our implementation of Counting Bloom filters with Cuckoo filters, for a specific use case."}),"\n",(0,n.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,n.jsx)(t.p,{children:"Nodes on Fleek Network currently use Counting Bloom filters to summarize their cached content. These cache summaries are exchanged with other nodes in order to facilitate content routing."}),"\n",(0,n.jsx)(t.p,{children:"If a particular node does not store a requested piece of content, it can use the Bloom filters that it received from its peers to check if a peer stores the requested content."}),"\n",(0,n.jsx)(t.p,{children:"We are using Counting Bloom filters rather than regular Bloom filters because we need to be able to remove elements from the filter to support cache eviction."}),"\n",(0,n.jsx)(t.h2,{id:"bloom-filters",children:"Bloom Filters"}),"\n",(0,n.jsxs)(t.p,{children:["A Bloom filter is a space-efficient probabilistic data structure that can be used to perform approximate set membership queries.\nThe answer to an approximate set membership query is not ",(0,n.jsx)(t.code,{children:"no"})," or ",(0,n.jsx)(t.code,{children:"yes,"})," but rather ",(0,n.jsx)(t.code,{children:"no"})," or ",(0,n.jsx)(t.code,{children:"probably."})," This ",(0,n.jsx)(t.code,{children:"probably"})," is quantified with the false positive rate."]}),"\n",(0,n.jsxs)(t.p,{children:["One of the convenient features of Bloom filters is that they can be configured to have a specific false positive rate.\nOf course, there is a tradeoff here; the lower the false positive rate, the larger the memory footprint. Bloom filters support two operations: ",(0,n.jsx)(t.code,{children:"insert"})," and ",(0,n.jsx)(t.code,{children:"contains."})]}),"\n",(0,n.jsxs)(t.p,{children:["A Bloom filter is represented by an array of m bits together with k independent hash functions. To insert an element into the filter, it is hashed with each of the k hash functions.\nThe resulting hashes are interpreted as integers (modulo m) to obtain k array positions. The bits at these positions are then set to 1 (if there aren't already 1).",(0,n.jsx)(t.br,{}),"\n","To check whether or not an element is contained in the filter, the element is hashed k times with the different hash functions."]}),"\n",(0,n.jsx)(t.p,{children:"If all bits at the resulting array positions are 1, the element is assumed to be present. If any of the k bits are zero, we can be certain that the queried element is not present in the set."}),"\n",(0,n.jsx)(t.p,{children:"However, even if all bits are 1, it might still be the case that the bits were set by a combination of other elements. This is where the aforementioned false positive rate comes into play."}),"\n",(0,n.jsxs)(t.p,{children:["Since we also need a ",(0,n.jsx)(t.code,{children:"remove"})," operation for our use case, we have been using Counting Bloom filters, a variant of Bloom filters.\nCounting Bloom filters retain most of the properties that regular Bloom filters have. The ",(0,n.jsx)(t.code,{children:"remove"})," operation comes at the cost of an increased memory footprint."]}),"\n",(0,n.jsx)(t.p,{children:"Each position in the array is no longer a single bit but a group of bits representing a counter.\nWhenever an element is inserted into the filter, the counters for all k positions are incremented by 1. To remove an element, we decrement the counters."}),"\n",(0,n.jsx)(t.h2,{id:"cuckoo-filters",children:"Cuckoo Filters"}),"\n",(0,n.jsx)(t.p,{children:"Bloom filters are the most known members of a class of data structures called Approximate Membership Query Filters (AMQ Filters).\nA relatively recent addition to this class is the Cuckoo filter [1]. Cuckoo filters share many similarities with Bloom filters, especially Counting Bloom filters."}),"\n",(0,n.jsxs)(t.p,{children:["They are space-efficient and can be used for approximate set membership queries. Cuckoo filters also support the operations ",(0,n.jsx)(t.code,{children:"insert,"})," ",(0,n.jsx)(t.code,{children:"contains,"})," and ",(0,n.jsx)(t.code,{children:"remove,"})," and have configurable false positive rates."]}),"\n",(0,n.jsx)(t.p,{children:"Cuckoo filters are based on Cuckoo hash tables [2] and leverage an optimization called partial-key cuckoo hashing. A basic Cuckoo hash table consists of an array of buckets.\nWe determine two candidate buckets for each element using two different hash functions, h1 and h2."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"contains"})," operation will check if either bucket contains the element.\nFor insertion, if either bucket is empty, the element will be inserted into the empty bucket."]}),"\n",(0,n.jsx)(t.p,{children:"If neither bucket is empty, one of the buckets is selected, and the existing element is removed and inserted into its alternate location.\nThis may trigger another relocation if the alternate location is not empty."}),"\n",(0,n.jsx)(t.p,{children:"Although the insertion operation may perform a sequence of relocations, the amortized runtime is O(1)."}),"\n",(0,n.jsx)(t.p,{children:"Most implementations of Cuckoo hash tables and, consequently, Cuckoo filters will use buckets that can hold multiple elements, as proposed in [3]."}),"\n",(0,n.jsx)(t.p,{children:"For Cuckoo filters, the hash table size is reduced by only storing fingerprints - a bit string calculated from an element's hash - rather than key-value pairs."}),"\n",(0,n.jsxs)(t.p,{children:["The fingerprint size is derived from the desired false positive rate.",(0,n.jsx)(t.br,{}),"\n","A problem that arises is that, to relocate existing fingerprints using the Cuckoo hashing approach described above, we need the original hash from which the fingerprint was derived."]}),"\n",(0,n.jsx)(t.p,{children:"Of course, we could store this hash somewhere, but the whole point of using fingerprints is to reduce the memory footprint of the filter."}),"\n",(0,n.jsxs)(t.p,{children:["The solution to this predicament is the aforementioned partial-key cuckoo hashing, a technique for determining an element's alternate location using only its fingerprint.",(0,n.jsx)(t.br,{}),"\n","For a given element x, the two candidate buckets are computed as follows:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(9440).Z+"",width:"1324",height:"194"})}),"\n",(0,n.jsx)(t.p,{children:"An important property of this technique is that h1(x) can also be computed from h2(x) and the fingerprint."}),"\n",(0,n.jsx)(t.h2,{id:"benchmarking",children:"Benchmarking"}),"\n",(0,n.jsx)(t.p,{children:"As this post mentioned, we are not aiming for a general comparison of Counting Bloom and Cuckoo filters."}),"\n",(0,n.jsx)(t.p,{children:"Instead, we want to determine which filter suits our specific use case better. The two main properties we are looking for are space efficiency and lookup performance."}),"\n",(0,n.jsx)(t.p,{children:"Space efficiency is important because nodes frequently update their cache and have to communicate these changes with their peers. These messages should take up as little bandwidth as possible."}),"\n",(0,n.jsx)(t.p,{children:"Lookup speed is also important because Fleek Network aims to serve user requests as quickly as possible. Checking whether a peer has some content stored in their cache summary should not be a bottleneck."}),"\n",(0,n.jsx)(t.h2,{id:"experimental-setup",children:"Experimental Setup"}),"\n",(0,n.jsxs)(t.p,{children:["We are using our own Counting Bloom filter ",(0,n.jsx)(t.a,{href:"https://github.com/fleek-network/ursa/blob/483f4d56cbaa5e83182454d2c1db6f6af7c54912/crates/ursa-network/src/utils/bloom_filter.rs#L11",children:"implementation"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/sile/scalable_cuckoo_filter?gh",children:"scalable cuckoo filter"})," Cuckoo filter implementation in Rust, the ",(0,n.jsx)(t.a,{href:"https://github.com/efficient/cuckoofilter?gh",children:"original cuckoofilter"})," implementation is in C++. All experiments were performed on a Linux machine with 16 GB RAM and an Intel Core i7 (10th Gen). Whenever the experiment is probabilistic, we repeat the experiment 20 times and report the mean and standard deviation."]}),"\n",(0,n.jsx)(t.h2,{id:"memory-footprint",children:"Memory Footprint"}),"\n",(0,n.jsx)(t.p,{children:"For both Counting Bloom filters and Cuckoo filters, the memory footprint is determined by two factors: the filter's capacity and the desired false positive rate. In the first experiment, we examine the impact that\nthese factors have on the memory footprint."}),"\n",(0,n.jsx)(t.p,{children:"To this end, we fix the false positive rate and initialize the filters with capacities ranging from 100K to 1M. The result is shown in Fig. 1.\nThe size of Bloom filters scales linearly with the capacity. Cuckoo filters are more space-efficient. This result is consistent with the experiments reported in [1]."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(5441).Z+"",width:"640",height:"480"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Figure 1: We fix the false positive rate and initialize the filters with capacities ranging from 100K to 1M. The y-axis shows the size of the filters in Megabytes."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Next, we fix the capacity and initialize the filters with false positive rates ranging from 0.0001 to 0.5. Fig. 2 shows that Cuckoo filters are more space-efficient."}),"\n",(0,n.jsx)(t.p,{children:"The gap between Counting Bloom filters and Cuckoo filters grows as the false positive rate decreases. This is also consistent with experiments in [1]."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(9844).Z+"",width:"640",height:"480"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Figure 2: We fix the capacity and initialize the filters with false positive rates ranging from 0.0001 to 0.5. The y-axis shows the size of the filters in Megabytes."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"lookup-performance",children:"Lookup Performance"}),"\n",(0,n.jsx)(t.p,{children:"We first add elements to both filters until the capacity is reached. We then measure the lookup performance for different ratios of positive and negative lookups."}),"\n",(0,n.jsx)(t.p,{children:"A positive lookup is for an existing element, and a negative lookup is for an element not contained in the filter. We perform 100K lookups for each ratio and report the average lookup duration and standard deviation."}),"\n",(0,n.jsx)(t.p,{children:"Fig. 3 shows the results. Bloom filters perform slightly better on average than Cuckoo filters. This result is inconsistent with [1],\nwhere Cuckoo filters were reported to have a better lookup performance than Bloom filters. It should be noted here that the authors in [1] use the original C++ Cuckoo filter implementation and their own unreleased Bloom filter implementation. In contrast, we use a Rust Cuckoo filter implementation and our Bloom filter implementation. We cannot easily determine the reason for this discrepancy."}),"\n",(0,n.jsx)(t.p,{children:"However, the performance difference is negligible."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(8915).Z+"",width:"640",height:"480"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Figure 3: Lookup performance for different ratios of positive and negative lookups. For example, ratio 0.25 indicates that 25% of lookups are positive and 75% are negative.\nThe shaded region indicates the standard deviation."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"insertion-performance",children:"Insertion Performance"}),"\n",(0,n.jsx)(t.p,{children:"Less critical than lookup performance but still important for our purposes is insertion performance. We measure how the insertion performance varies for different occupancy levels.\nFig. 4 shows the results. The insertion performance is constant across all levels of occupancy for Bloom filters."}),"\n",(0,n.jsx)(t.p,{children:"For Cuckoo filters, the performance decreases as the filter becomes fuller because more relocations are required. In Fig. 4, the performance for Bloom filters is not constant. It quickly increases and then remains constant. This can be explained by CPU caching."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(989).Z+"",width:"640",height:"480"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Figure 4: Insertion performance for different occupancy levels. The shaded region indicates the standard deviation."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"capacity-and-scaling",children:"Capacity and Scaling"}),"\n",(0,n.jsx)(t.p,{children:"We have mentioned the capacity of a filter several times now. An interesting case is what happens when a filter's capacity is exceeded.\nBloom filters and Cuckoo filters behave differently in this scenario."}),"\n",(0,n.jsxs)(t.p,{children:["For Bloom filters, the ",(0,n.jsx)(t.code,{children:"insertion"})," operation always succeeds. However, the false positive rate will rapidly increase as we exceed the filter's capacity. While Bloom filters fail silently, Cuckoo filters are more explicit. Most implementations have a maximum number of\nrelocations that will be performed for an insertion. The ",(0,n.jsx)(t.code,{children:"insertion"})," operation will return an error if more relocations are required."]}),"\n",(0,n.jsx)(t.p,{children:"For both filters, we can avoid this problem by simply initializing the filter with a sufficiently large capacity. However, this will increase the memory footprint of the filter."}),"\n",(0,n.jsx)(t.p,{children:"Furthermore, it is difficult to predict how many elements a node on Fleek Network will cache. It is also likely that the number of cached elements will greatly vary for different nodes."}),"\n",(0,n.jsx)(t.p,{children:"Fortunately, a variant of Bloom filters called Scalable Bloom Filters [4] can adapt dynamically to the number of elements stored while guaranteeing a maximum false positive rate."}),"\n",(0,n.jsx)(t.p,{children:"The proposed technique is also applicable to Cuckoo filters."}),"\n",(0,n.jsx)(t.h2,{id:"other-filters",children:"Other Filters"}),"\n",(0,n.jsx)(t.p,{children:"While we only looked at Bloom filters and Cuckoo filters, there are other AMQ filters that we want to mention here briefly:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Quotient filters [5, 6]: Compact hash tables that support insertion, lookup, and deletion. Less space-efficient than Bloom filters and Cuckoo filters."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"XOR filters [7]: More space-efficient than Bloom filters and Cuckoo filters. However, they are static, meaning the filter has to be rebuilt if additional elements are added."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"We examined whether Counting Bloom filters or Cuckoo filters are more suitable for summarizing caches on Fleek Network. Cuckoo filters are more space-efficient, especially for lower false positive rates. Bloom filters have a slightly better insertion and lookup performance for the implementations we tested."}),"\n",(0,n.jsx)(t.p,{children:"Both filters can be adapted to grow and shrink in size dynamically. Since the difference in insertion and lookup performance is negligible while Cuckoo filters are significantly more space-efficient, we favor Cuckoo filters for our use case."}),"\n",(0,n.jsx)(t.h3,{id:"references",children:"References"}),"\n",(0,n.jsx)(t.p,{children:"[1] Bin Fan, Dave G. Andersen, Michael Kaminsky, and Michael D. Mitzenmacher. Cuckoo Filter: Practically Better Than Bloom.\nIn Proceedings of the 10th ACM International Conference on emerging Networking Experiments and Technologies (CoNEXT 14). Association for Computing Machinery, New York, NY, USA, pp. 75-88, 2014."}),"\n",(0,n.jsx)(t.p,{children:"[2] Rasmus Pagha and Flemming Friche Rodler. Cuckoo hashing. Journal of Algorithms, 51(2), pp. 122-144, 2004."}),"\n",(0,n.jsx)(t.p,{children:"[3] Martin Dietzfelbinger and Christoph Weidling. Balanced Allocation and Dictionaries with Tightly Packed Constant Size Bins. Theoretical Computer Science, 380(1), pp. 47-68, 2007."}),"\n",(0,n.jsx)(t.p,{children:"[4] Paulo S. Almeida, Carlos Baquero, Nuno Pregui\xe7a, and David Hutchison. Scalable Bloom Filters. Information Processing Letters, 101(6), pp. 255-261, 2007."}),"\n",(0,n.jsx)(t.p,{children:"[5] John G. Cleary. Compact hash tables using bidirectional linear probing. IEEE Transactions on Computers. 33(9), pp. 828-834, 1984."}),"\n",(0,n.jsx)(t.p,{children:"[6] Anna Pagh, Rasmus Pagh, and S. Srinivasa Rao. An optimal Bloom filter replacement. Proceedings of the Sixteenth Annual ACM-SIAM Symposium on Discrete Algorithms, pp. 823-829, 2005."}),"\n",(0,n.jsx)(t.p,{children:"[7] Thomas Mueller Graf and Daniel Lemire. Xor Filters: Faster and Smaller Than Bloom and Cuckoo Filters. ACM Journal of Experimental Algorithmics. 25, pp. 1-16, 2020."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9969:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/bloom-79da0db687b4fb2060758838b9c44513.png"},5441:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/capacity-size-5c2576bd69db0e5b510781e7cc1c5257.png"},9844:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/fp-rate-size-fbb54b2450b4a91e28c97d8adf0253e8.png"},989:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/insert-3ff48d4c63724adcf399f81b29607691.png"},8915:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/lookup-e36011237d8602b5f6c36fe5dd145bf5.png"},9440:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/math-formul-a247d4df475b26b1e7cbb2acfc0ab8c2.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>s});var n=i(7294);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);