"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[1361],{86201:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var s=t(74848),n=t(28453);const o={title:"The architectural evolution of OceanBase Database",slug:"architectural-evolution"},r="OceanBase Database V0.5 to V3.0",i={permalink:"/docs-playground/zh-Hans/blog/architectural-evolution",editUrl:"https://github.com/powerfooi/docs-playground/tree/main/blog/showcase-architectural-evolution.md",source:"@site/blog/showcase-architectural-evolution.md",title:"The architectural evolution of OceanBase Database",description:"oceanbase database",date:"2024-06-04T13:18:36.000Z",formattedDate:"2024\u5e746\u67084\u65e5",tags:[],readingTime:3.9,hasTruncateMarker:!0,authors:[],frontMatter:{title:"The architectural evolution of OceanBase Database",slug:"architectural-evolution"},unlisted:!1,nextItem:{title:"Data Compression Technology Explained Balance between Costs & Performance",permalink:"/docs-playground/zh-Hans/blog/compression-ratio"}},c={authorsImageUrls:[]},h=[];function l(e){const a={a:"a",em:"em",h1:"h1",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"https://obportal.s3.ap-southeast-1.amazonaws.com/obc-blog/img/d105da79260f4d6a8a03571e4a2b17091682303077795.jpg",alt:"oceanbase database"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:"Yang Zhifeng, OceanBase\u2019s Chief Architect, lately introduced the evolution of the technical architecture of OceanBase Database from V0.5 to V4.0 and shared his thoughts along the journey. This article is only part of his sharing. Since the content of the sharing is so extensive, we will divide it into the following articles:"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:"\u2012 The architectural evolution of OceanBase Database"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"\u2012"})," ",(0,s.jsx)(a.a,{href:"https://oceanbase.medium.com/integrated-architecture-of-oceanbase-database-615dcf707f38",children:(0,s.jsx)(a.em,{children:"What is the integrated architecture of OceanBase Database?"})})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:"\u2012 SQL engine and transaction processing in the integrated architecture of OceanBase Database"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:"\u2012 Performance of OceanBase Database in standalone mode: a performance comparison with MySQL 8.0"})}),"\n",(0,s.jsx)(a.p,{children:"Now, let\u2019s roll out the first article and present to you the architectural evolution of the OceanBase Database in over ten years."}),"\n",(0,s.jsx)(a.p,{children:"The development of the OceanBase Database started in 2010. The first version, OceanBase Database V0.5, consists of a storage layer and a computing layer, as shown in the figure below. The computing layer, which is stateless, provides SQL services, and the storage layer is a storage cluster of two types of servers."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"https://obportal.s3.ap-southeast-1.amazonaws.com/obc-blog/img/d105da79260f4d6a8a03571e4a2b17091682303106461.jpg",alt:"oceanbase database"})}),"\n",(0,s.jsx)(a.p,{children:"OceanBase architecture v0.5"}),"\n",(0,s.jsx)(a.p,{children:"This architecture allows OceanBase Database to well support services such as Taobao Favorites. Resources, especially those for data reads, are moderately scalable. The SQL layer is stateless and can be freely scaled."}),"\n",(0,s.jsx)(a.p,{children:"The most significant vulnerability of this architecture is that data writes are handled by UpdateServer nodes. Such an architecture featuring single-point writes and multi-point reads cannot be scaled to cope with a higher concurrency."}),"\n",(0,s.jsx)(a.p,{children:"Another issue that may not be found just from the figure is that with the storage layer and SQL layer split that way, we can hardly keep the query latency under control, which is serious. As a matter of fact, the latency of online services fluctuates, which is hard to control if the latency requirement is high."}),"\n",(0,s.jsx)(a.p,{children:"To address that issue, we laid off the old architecture and developed a new one, which has empowered OceanBase Database V1.0 to V3.0. Generally, the new architecture features equivalent nodes in a cluster. All nodes can handle transactions and save data while processing SQL queries. As shown in the figure below, the new architecture is horizontally replicable and vertically scalable. Horizontally, you can copy zone replicas to ensure the high availability of the service; vertically, you can scale out the cluster by adding more OBServers."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"https://obportal.s3.ap-southeast-1.amazonaws.com/obc-blog/img/d105da79260f4d6a8a03571e4a2b17091682303185573.jpg",alt:"oceanbase database"})}),"\n",(0,s.jsx)(a.p,{children:"OceanBase architecture v1.0 \u2014 v3.0"}),"\n",(0,s.jsx)(a.p,{children:"This new architecture showed excellent scalability, which gave us the confidence to challenge the Transaction Processing Performance Council Benchmark C (TPC-C) test with OceanBase Database V3.0. The result was encouraging. OceanBase Database became the world\u2019s only distributed database and China\u2019s first database that passed the test back then and got a record-high score that remains untouched so far."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"https://obportal.s3.ap-southeast-1.amazonaws.com/obc-blog/img/d105da79260f4d6a8a03571e4a2b17091682303213301.jpg",alt:"oceanbase database"})}),"\n",(0,s.jsx)(a.p,{children:"Horizontal scalability of OceanBase"}),"\n",(0,s.jsx)(a.p,{children:"The stunning performance indicates the great horizontal scalability of OceanBase Database V3.0. You can see in the figure above that, as the number of OBServer nodes increases from three, the performance curve of OceanBase Database swings up linearly before it finally hits the record-high tpmC of 707 million. This large OceanBase cluster of 1,557 OBServers processed 20 million transactions per second within the 8-hour TPC-C stress test. The test results show that the new architecture is highly scalable. Such high scalability and concurrency satisfy the needs of most online service systems in the world today."}),"\n",(0,s.jsx)(a.h1,{id:"oceanbase-database-v40",children:"OceanBase Database V4.0"}),"\n",(0,s.jsx)(a.p,{children:"In response to new business requirements, we have developed an up-to-date architecture to support OceanBase Database V4.0. The most significant update is the introduction of dynamic log streams. In the previous architecture, transaction, and storage resources are scaled by the same granularity. If the storage is sharded and scaled by shard, transaction processing, and high availability capabilities will also be scaled by shard. In the architecture for V4.0, we decouple transaction scaling from storage scaling, so that several storage shards share the same transaction log stream and the high availability capabilities corresponding to that log stream."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"https://obportal.s3.ap-southeast-1.amazonaws.com/obc-blog/img/d105da79260f4d6a8a03571e4a2b17091682303236782.jpg",alt:"oceanbase database"})}),"\n",(0,s.jsx)(a.p,{children:"OceanBase 4.0 architecture"}),"\n",(0,s.jsx)(a.p,{children:"The fundamental idea that leads to this update is that we want to support smaller applications. It\u2019s true that the architecture for V3.0 has no problem in supporting huge applications like those of Ant Group. However, as OceanBase Database becomes more popular among customers other than tech giants, if we keep the association between the number of log streams and that of partitions, it cannot be adapted to many scenarios, especially for small and medium-sized companies. This is because the resource overhead of databases that hold small applications becomes greater as the number of log streams increases."}),"\n",(0,s.jsx)(a.p,{children:"In the next articles, you will learn more details about the integrated architecture of the OceanBase Database. Stay tuned!"})]})}function d(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>i});var s=t(96540);const n={},o=s.createContext(n);function r(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);