"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[7431],{40295:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(74848),s=t(28453);const i={title:"Integrated Architecture of OceanBase Database",slug:"integrated-architecture"},r="Shared-everything or shared-nothing?",o={permalink:"/docs-playground/zh-Hans/blog/integrated-architecture",editUrl:"https://github.com/powerfooi/docs-playground/tree/main/blog/showcase-integrated-architecture.md",source:"@site/blog/showcase-integrated-architecture.md",title:"Integrated Architecture of OceanBase Database",description:"oceanbase database",date:"2024-06-04T13:18:36.000Z",formattedDate:"2024\u5e746\u67084\u65e5",tags:[],readingTime:5.53,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Integrated Architecture of OceanBase Database",slug:"integrated-architecture"},unlisted:!1,prevItem:{title:"Flink CDC + OceanBase integration solution for full and incremental synchronization",permalink:"/docs-playground/zh-Hans/blog/flink-cdc"},nextItem:{title:"Integrated SQL Engine in OceanBase Database",permalink:"/docs-playground/zh-Hans/blog/integrated-sql-engine"}},c={authorsImageUrls:[]},d=[];function l(e){const a={a:"a",em:"em",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://obportal.s3.ap-southeast-1.amazonaws.com/obc-blog/img/d105da79260f4d6a8a03571e4a2b17091682302303091.jpg",alt:"oceanbase database"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"Yang Zhifeng, OceanBase\u2019s Chief Architect, lately introduced the evolution of the technical architecture of OceanBase Database from V0.5 to V4.0 and shared his thoughts along the journey. This article is only part of his sharing. Since the content of the sharing is so extensive, we will divide it into the following articles:"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.em,{children:"\u2012"})," ",(0,n.jsx)(a.a,{href:"https://medium.com/@oceanbase/the-architectural-evolution-of-oceanbase-database-9ab70506fc15",children:(0,n.jsx)(a.em,{children:"The architectural evolution of OceanBase Database"})})]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"\u2012 What is the integrated architecture of OceanBase Database?"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"\u2012 SQL engine and transaction processing in the integrated architecture of OceanBase Database"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"\u2012 Performance of OceanBase Database in standalone mode: a performance comparison with MySQL 8.0"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"This article introduces the integrated architecture of the OceanBase database."})}),"\n",(0,n.jsx)(a.p,{children:"The architecture of OceanBase Database V4.0 allows you to deploy a distributed database or a MySQL-like standalone database in the same way that you are familiar with."}),"\n",(0,n.jsx)(a.p,{children:"If you deploy a standalone OceanBase database or a single-container tenant in an OceanBase cluster, the database provides the same efficiency and performance as a conventional standalone database does."}),"\n",(0,n.jsx)(a.p,{children:"If you deploy OceanBase Database in a distributed architecture, no additional costs will be incurred in tenant management, transaction processing, and SQL statement execution."}),"\n",(0,n.jsx)(a.p,{children:"With that in mind, we must design each database layer, such as the SQL layer, storage layer, and transaction layer, in a way that integrates features of a standalone database and a distributed database to meet various needs with a balanced performance at each layer."}),"\n",(0,n.jsx)(a.p,{children:"In the development of databases, a long-debated question is whether we should design databases in shared-nothing clusters or shared-everything architectures to maximize efficiency."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://obportal.s3.ap-southeast-1.amazonaws.com/obc-blog/img/d105da79260f4d6a8a03571e4a2b17091682302331364.jpg",alt:"oceanbase database"})}),"\n",(0,n.jsx)(a.p,{children:"A physical cluster in a real production environment today is neither completely shared-everything nor completely shared-nothing."}),"\n",(0,n.jsx)(a.p,{children:"A server may have multiple CPU cores, 96 or more in some cases, with increasingly large memory space. Servers interact with disks and external devices by using high-speed system buses over a high-performance network. The cluster that consists of such servers is not purely shared-nothing. In such a cluster, each server has excellent computing and storage capabilities that we can use. That is how all standalone or centralized databases are scaled up. We have no reason to ignore the vertical scaling option of distributed databases, which are generally horizontally scaled."}),"\n",(0,n.jsx)(a.p,{children:"The question is, how to vertically scale up a distributed database?"}),"\n",(0,n.jsx)(a.p,{children:"Assume that we have built a distributed database of architecture as shown on the left side of the following figure. This architecture consists of separated computing nodes and storage nodes and is adopted by many distributed databases today. The computing node layer and storage node layer are separated. They interact with each other by using a GTM (Global Transaction Manager) or TSO (Timestamp Oracle), which handles global transactions and is necessary for multi-server interactions."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://obportal.s3.ap-southeast-1.amazonaws.com/obc-blog/img/d105da79260f4d6a8a03571e4a2b17091682302372544.jpg",alt:"oceanbase database"})}),"\n",(0,n.jsx)(a.p,{children:"If this distributed database is deployed on a single node and runs as a standalone database, the biggest problem here is that the interactions between the components on a single server lead to considerable overhead, which is unnecessary for a standalone database such as MySQL. So, a distributed database in such a simple deployment mode cannot compete with a standalone database."}),"\n",(0,n.jsx)(a.h1,{id:"the-integrated-architecture-meeting-the-needs-in-both-standalone-and-distributed-scenarios",children:"The integrated architecture: Meeting the needs in both standalone and distributed scenarios"}),"\n",(0,n.jsx)(a.p,{children:"A standalone database must have separate layers of SQL, transaction, and storage engines. Similarly, you can consider the distributed SQL engine, transaction engine, and storage engine of a distributed database as three separate layers. We want to integrate the three engines of a standalone database with those of a distributed database by using the same code that can dynamically adapt to different deployment modes."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://obportal.s3.ap-southeast-1.amazonaws.com/obc-blog/img/d105da79260f4d6a8a03571e4a2b17091682302392770.jpg",alt:"oceanbase database"})}),"\n",(0,n.jsx)(a.p,{children:"In addition, to maximize the scalability of the single server of a standalone database, the SQL layer must support parallel execution and the transaction layer must provide a concurrency management feature, such as Multi-Version Concurrency Control (MVCC). Techniques like group commit are also required to concurrently execute multiple transactions on a single server. The storage layer must support parallel I/O so that the server can make full use of additional disks and bandwidth."}),"\n",(0,n.jsx)(a.p,{children:"When you deploy a distributed database that also provides features of a standalone system, it is not enough to focus only on scalability. Each server of the distributed database must also achieve very high efficiency and support the efficient serial execution of distributed transactions so that standalone transactions can be adaptively optimized."}),"\n",(0,n.jsx)(a.p,{children:"OceanBase Database also provides the standalone LSM-Tree storage engine, a one-of-a-kind innovative technology. In a standalone database, we can only perform major compactions that may affect both the front end and the back end. Fortunately, we are not talking about a 100% standalone database, and we can introduce a distribution strategy so that the major compactions of multiple replicas can be performed in turn during off-peak hours. We have taken into account both standalone and distributed features in the design of the SQL layer, transaction layer, and storage layer so that each layer consumes no extra overhead in both standalone and distributed scenarios."}),"\n",(0,n.jsx)(a.p,{children:"As a result, OceanBase Database provides two essential features:"}),"\n",(0,n.jsx)(a.p,{children:"First, in standalone mode, no additional components are deployed and OceanBase Database works with only a single process, which means no complex interactions are performed between different processes. In this single-process multi-thread model, interactions are performed by calling functions, which is very important."}),"\n",(0,n.jsx)(a.p,{children:"Second, components interact vertically between the SQL layer, transaction layer, and storage layer. Function calls are made for interaction between the layers on a single server. RPCs are used only when it is necessary to communicate between nodes."}),"\n",(0,n.jsx)(a.p,{children:"Like the shared-nothing and shared-everything architecture mentioned above, OceanBase Database performs interactions between the SQL layer, transaction layer, and storage layer within each OBserver by calling functions, which is the same as in a standalone database. When interactions between multiple OBservers are required, you can choose the most efficient solution based on your needs."}),"\n",(0,n.jsx)(a.p,{children:"For example, if an SQL query is sent from OBServer A to the SQL layer of OBServer B and requests to access the storage layer of OBServer B, the optimal solution depends on the specific task, and the choice may vary based on the workload. The same is true for the transaction layer. For a standalone transaction, interactions with other transaction components are unnecessary."}),"\n",(0,n.jsx)(a.p,{children:"If you want to learn more about the architecture of OceanBase\u2019s storage, SQL, and transaction engines, here are some references for you:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://medium.com/@oceanbase/design-a-storage-engine-for-distributed-relational-database-from-scratch-a27d69a47fe0",children:"Design A Storage Engine for Distributed Relational Database from Scratch"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://medium.com/@oceanbase/designing-a-distributed-sql-engine-challenges-decisions-52bea749b2f0",children:"Designing a Distributed SQL Engine: Challenges & Decisions"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://medium.com/@oceanbase/infinite-possibilities-of-a-well-designed-transaction-engine-in-distributed-database-273dd2ad3c5d",children:"Infinite Possibilities of a Well-Designed Transaction Engine in Distributed Database"})}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"In the next articles, you will learn more details about the SQL engine and transaction processing in OceanBase. Stay tuned!"})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var n=t(96540);const s={},i=n.createContext(s);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);