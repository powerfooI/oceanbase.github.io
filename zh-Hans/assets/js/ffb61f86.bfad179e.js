"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[7768],{51663:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(74848),n=t(28453);const o={slug:"boss-zhipin",title:"BOSS Zhipin \u2014\u2014 How to save 70% storage cost through OceanBase with an archive database of 1 billion rows per day?",tags:["User Case"]},i=void 0,r={permalink:"/docs-playground/zh-Hans/blog/boss-zhipin",editUrl:"https://github.com/powerfooi/docs-playground/tree/main/blog/user-boss.md",source:"@site/blog/user-boss.md",title:"BOSS Zhipin \u2014\u2014 How to save 70% storage cost through OceanBase with an archive database of 1 billion rows per day?",description:"Author: Zhang Yujie, Database Engineer with BOSS Zhipin",date:"2024-06-04T09:30:23.000Z",formattedDate:"2024\u5e746\u67084\u65e5",tags:[{label:"User Case",permalink:"/docs-playground/zh-Hans/blog/tags/user-case"}],readingTime:12.56,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"boss-zhipin",title:"BOSS Zhipin \u2014\u2014 How to save 70% storage cost through OceanBase with an archive database of 1 billion rows per day?",tags:["User Case"]},unlisted:!1,prevItem:{title:"Implementing a Vectorized Engine in a Distributed Database",permalink:"/docs-playground/zh-Hans/blog/vectorized-engine"},nextItem:{title:"DMALL \u2014\u2014 a summary of database selection experience in SaaS scenarios",permalink:"/docs-playground/zh-Hans/blog/dmall"}},c={authorsImageUrls:[]},d=[{value:"I. Background",id:"i-background",level:2}];function l(e){const a={h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Author: Zhang Yujie, Database Engineer with BOSS Zhipin"}),"\n",(0,s.jsx)(a.h2,{id:"i-background",children:"I. Background"}),"\n",(0,s.jsx)(a.p,{children:'BOSS Zhipin is the first "direct-hiring" online recruitment service in the world, and has become China\'s largest job searching platform. An important job of my team is to store the conversation records during the recruitment process into a database, which has held a tremendous amount of data and is taking in 500 million to 1 billion data records on a daily basis. However, these conversation records are rarely or never accessed or updated after they are written to the database. The growing volume of online data, especially the cold historical conversation records, has occupied petabytes of storage space of the online business database, resulting in serious waste of hardware resources and escalating IT costs. In addition to bloating the online business database, the increasing data volume also reduces the query efficiency, which hinders data changes and system scaling.'}),"\n",(0,s.jsx)(a.p,{children:"To address these issues, we need to separate hot data from cold historical conversation records. The hot data is stored in a sharded online database of multiple MySQL clusters. Expired data is regularly migrated to the archive database every month."})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>r});var s=t(96540);const n={},o=s.createContext(n);function i(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);