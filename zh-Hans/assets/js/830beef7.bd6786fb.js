"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[6013],{19834:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=s(74848),i=s(28453);const c={title:"SQL \u6027\u80fd\u8c03\u4f18 \u2014\u2014 \u8c03\u4f18\u7efc\u5408\u5b9e\u8df5",weight:5},a="SQL \u8c03\u4f18\u7efc\u5408\u5b9e\u8df5",o={id:"performance_tuning/comprehensive_sql_optimize",title:"SQL \u6027\u80fd\u8c03\u4f18 \u2014\u2014 \u8c03\u4f18\u7efc\u5408\u5b9e\u8df5",description:"&emsp;&emsp;\u8fd9\u7bc7\u5185\u5bb9\u66f4\u50cf\u662f\u5bf9\u524d\u4e24\u7bc7 SQL \u6027\u80fd\u8c03\u4f18\u4e2d\u5185\u5bb9\u7684\u7efc\u5408\u5e94\u7528\uff0c\u603b\u7ed3\u4e86\u6027\u80fd\u4f18\u5316\u7684\u65b9\u6cd5\uff0c\u5e76\u901a\u8fc7\u4f8b\u5b50\u5c55\u793a\u4e86\u5206\u6790\u6027\u80fd\u74f6\u9888\u7684\u5177\u4f53\u6b65\u9aa4\u3002",source:"@site/docs/performance_tuning/comprehensive_sql_optimize.md",sourceDirName:"performance_tuning",slug:"/performance_tuning/comprehensive_sql_optimize",permalink:"/docs-playground/zh-Hans/docs/performance_tuning/comprehensive_sql_optimize",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/performance_tuning/comprehensive_sql_optimize.md",tags:[],version:"current",frontMatter:{title:"SQL \u6027\u80fd\u8c03\u4f18 \u2014\u2014 \u8c03\u4f18\u7efc\u5408\u5b9e\u8df5",weight:5}},r={},l=[{value:"\u6027\u80fd\u4f18\u5316\u7684\u65b9\u6cd5",id:"\u6027\u80fd\u4f18\u5316\u7684\u65b9\u6cd5",level:2},{value:"\u5206\u6790\u6027\u80fd\u74f6\u9888\u7684\u6b65\u9aa4",id:"\u5206\u6790\u6027\u80fd\u74f6\u9888\u7684\u6b65\u9aa4",level:2},{value:"\u5206\u6790 SQL \u6027\u80fd\u74f6\u9888\u7684\u4f8b\u5b50",id:"\u5206\u6790-sql-\u6027\u80fd\u74f6\u9888\u7684\u4f8b\u5b50",level:2},{value:"\u4f7f\u7528 hint \u751f\u6210\u6307\u5b9a\u8ba1\u5212",id:"\u4f7f\u7528-hint-\u751f\u6210\u6307\u5b9a\u8ba1\u5212",level:2},{value:"\u4f7f\u7528 outline \u8fdb\u884c\u8ba1\u5212\u7ed1\u5b9a",id:"\u4f7f\u7528-outline-\u8fdb\u884c\u8ba1\u5212\u7ed1\u5b9a",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u2003\u2003\u8fd9\u7bc7\u5185\u5bb9\u66f4\u50cf\u662f\u5bf9\u524d\u4e24\u7bc7 SQL \u6027\u80fd\u8c03\u4f18\u4e2d\u5185\u5bb9\u7684\u7efc\u5408\u5e94\u7528\uff0c\u603b\u7ed3\u4e86\u6027\u80fd\u4f18\u5316\u7684\u65b9\u6cd5\uff0c\u5e76\u901a\u8fc7\u4f8b\u5b50\u5c55\u793a\u4e86\u5206\u6790\u6027\u80fd\u74f6\u9888\u7684\u5177\u4f53\u6b65\u9aa4\u3002"}),"\n",(0,t.jsx)("a",{name:"ybMph"}),"\n",(0,t.jsx)(n.h1,{id:"sql-\u8c03\u4f18\u7efc\u5408\u5b9e\u8df5",children:"SQL \u8c03\u4f18\u7efc\u5408\u5b9e\u8df5"}),"\n",(0,t.jsx)(n.p,{children:"\u5148\u7ed9\u51fa\u6027\u80fd\u4f18\u5316\u65b9\u6cd5\u548c\u5206\u6790\u6027\u80fd\u74f6\u9888\u6b65\u9aa4\u7684\u6587\u5b57\u63cf\u8ff0\uff1a"}),"\n",(0,t.jsx)("a",{name:"LKMKM"}),"\n",(0,t.jsx)(n.h2,{id:"\u6027\u80fd\u4f18\u5316\u7684\u65b9\u6cd5",children:"\u6027\u80fd\u4f18\u5316\u7684\u65b9\u6cd5"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5f00\u542f\u5e76\u884c\u6267\u884c\u7b49\u673a\u5236\uff08\u7b80\u5355\uff09\uff0c\u53ef\u4ee5\u53c2\u8003\uff1a\u300a",(0,t.jsx)(n.a,{href:"https://open.oceanbase.com/blog/5558373888",children:"OceanBase \u5e76\u884c\u6267\u884c\u6280\u672f"}),"\u300b\u3002\u8fd9\u7bc7\u535a\u5ba2\u5185\u5bb9\u8fc7\u591a\uff08\u5b9e\u9645\u5e94\u8be5\u50cf\u6027\u80fd\u8c03\u4f18\u7cfb\u5217\u62c6\u6210\u591a\u7bc7\u53d1\u7684\uff09\uff0c\u4ece 4.2 \u7248\u672c\u5f00\u59cb\uff0cOB \u5df2\u7ecf\u652f\u6301\u4e86 auto dop\uff0c\u5982\u679c\u7528\u6237\u4e0d\u719f\u6089\u5e76\u884c\u5ea6\u7684\u8bbe\u7f6e\u89c4\u5219\uff0c\u53ef\u4ee5\u8bbe\u7f6e parallel_degree_policy \u4e3a AUTO\uff0c\u8ba9\u4f18\u5316\u5668\u5e2e\u5fd9\u81ea\u52a8\u9009\u62e9\u5408\u9002\u7684\u5e76\u884c\u5ea6\uff0c\u63a8\u8350\u4f7f\u7528\u3002auto dop \u7684\u76f8\u5173\u5185\u5bb9\u53ef\u4ee5\u76f4\u63a5\u5728\u4e0a\u9762\u8fd9\u7bc7\u535a\u5ba2\u4e2d\u641c\u7d22 parallel_degree_policy \u5173\u952e\u5b57\uff0c\u6216\u8005\u53c2\u8003",(0,t.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000000220672",children:"\u5b98\u7f51\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u5408\u9002\u7684\u7d22\u5f15\uff08\u7b80\u5355\uff09\uff0c\u53ef\u4ee5\u53c2\u8003\uff1a\u300a",(0,t.jsx)(n.a,{href:"https://open.oceanbase.com/blog/6735590448",children:"\u6027\u80fd\u8c03\u4f18\u5b66\u4e60\u7b14\u8bb0 1 \u2014\u2014 \u7d22\u5f15\u8c03\u4f18"}),"\u300b\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8c03\u6574\u8fde\u63a5\u65b9\u5f0f\uff08\u6bd4\u8f83\u7b80\u5355\uff09\uff0c\u53ef\u4ee5\u53c2\u8003\uff1a\u300a",(0,t.jsx)(n.a,{href:"https://open.oceanbase.com/blog/6752926064",children:"\u6027\u80fd\u8c03\u4f18\u5b66\u4e60\u7b14\u8bb0 2 \u2014\u2014 \u8fde\u63a5\u8c03\u4f18"}),"\u300b"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8c03\u6574\u8fde\u63a5\u987a\u5e8f\uff08\u96be\u5ea6\u8f83\u5927\uff09\uff0c\u8fd9\u91cc\u6307\u7684\u662f\uff1a\u4f8b\u5982\u6709 t1\uff0ct2\uff0ct3 \u4e09\u4e2a\u8868\u505a\u8fde\u63a5\uff0c \u5047\u8bbe OB \u7684\u4f18\u5316\u5668\u8ba4\u4e3a t1\uff0ct2 \u4e24\u4e2a\u8868\u5148\u505a\u8fde\u63a5\uff0c\u518d\u4e0e t3 \u505a\u8fde\u63a5\uff0c\u662f\u4e00\u4e2a\u6bd4\u8f83\u597d\u7684\u8ba1\u5212\u3002\u4f46\u662f\u5b9e\u9645\u53ef\u80fd\u662f t1 \u548c t3 \u5148\u505a\u8fde\u63a5\uff0c\u518d\u548c t2 \u505a\u8fde\u63a5\u662f\u66f4\u4f18\u7684\u8ba1\u5212\u3002\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7 hint \u544a\u8bc9\u4f18\u5316\u5668\u6b63\u786e\u7684\u8fde\u63a5\u987a\u5e8f\u6765\u4f18\u5316 SQL \u7684\u6027\u80fd\uff08\u53c2\u8003",(0,t.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000000222740",children:"\u5b98\u7f51\u6587\u6863"}),"\uff09\uff0c\u5728\u4e00\u4e9b\u590d\u6742\u573a\u666f\u4e0b\uff0c\u9700\u8981\u4e30\u5bcc\u7684\u7ecf\u9a8c\u652f\u6301\u624d\u80fd\u901a\u8fc7\u8c03\u6574\u8fde\u63a5\u987a\u5e8f\u6765\u4f18\u5316 SQL \u6267\u884c\u6548\u7387\uff0c\u6709\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u81ea\u884c\u7814\u7a76\u548c\u5c1d\u8bd5\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u68c0\u67e5 OB \u662f\u5426\u505a\u4e86\u9519\u8bef\u7684\u67e5\u8be2\u6539\u5199 / \u7f3a\u5c11\u5408\u9002\u7684\u67e5\u8be2\u6539\u5199\u673a\u5236\uff08\u96be\u5ea6\u8f83\u5927\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("a",{name:"pdvc8"}),"\n",(0,t.jsx)(n.h2,{id:"\u5206\u6790\u6027\u80fd\u74f6\u9888\u7684\u6b65\u9aa4",children:"\u5206\u6790\u6027\u80fd\u74f6\u9888\u7684\u6b65\u9aa4"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5229\u7528 SQL \u6267\u884c\u8ba1\u5212\u53bb\u5206\u6790\u5177\u4f53\u54ea\u4e9b\u6b65\u9aa4\uff08\u54ea\u51e0\u4e2a\u7b97\u5b50\uff09\u7684\u6267\u884c\u65f6\u95f4\u6162\u3002\u4e2a\u4eba\u7ecf\u9a8c\u662f\u53ef\u4ee5\u901a\u8fc7\u628a\u5927 SQL \u62c6\u5206\u6210\u5c0f SQL \u53bb\u5206\u6790\u8fd9\u4e00\u6b65\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5145\u5206\u5229\u7528\u5df2\u6709\u7684\u811a\u672c\u548c\u5de5\u5177\u6765\u7b80\u5316\u5206\u6790\u8fc7\u7a0b\u3002\u8fd9\u91cc\u6211\u7406\u89e3\u4e3b\u8981\u662f\u901a\u8fc7\u4e00\u4e9b\u5b57\u5178\u89c6\u56fe\uff0c\u4f8b\u5982 oceanbase.GV$SQL_PLAN_MONITOR\u3002"}),"\n"]}),"\n",(0,t.jsx)("a",{name:"pEga7"}),"\n",(0,t.jsx)(n.h2,{id:"\u5206\u6790-sql-\u6027\u80fd\u74f6\u9888\u7684\u4f8b\u5b50",children:"\u5206\u6790 SQL \u6027\u80fd\u74f6\u9888\u7684\u4f8b\u5b50"}),"\n",(0,t.jsxs)(n.p,{children:["\u2003\u2003\u4e3e\u4e00\u4e2a\u771f\u5b9e\u7684 SQL \u6027\u80fd\u5206\u6790\u548c\u4f18\u5316\u7684\u4f8b\u5b50\uff1a\u4e0b\u9762\u8fd9\u6761 SQL \u6267\u884c\u4e86 2.43s\uff0c\u63a5\u4e0b\u6765\u5f00\u59cb\u5206\u6790\u6027\u80fd\u74f6\u9888\u5e76\u8fdb\u884c\u4f18\u5316\u3002",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.img,{alt:"image.png",src:s(56525).A+"",width:"674",height:"508"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2003\u2003\u770b\u5230\u4f18\u5316\u5668\u751f\u6210\u8ba1\u5212\u662f\u8ba9 bbtr \u8868\u5148\u4e0e cte \u8868\u505a merge join\uff0c\u518d\u4e0e btr \u8868\u505a nest loop join\u3002",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.img,{alt:"image.png",src:s(65846).A+"",width:"674",height:"238"})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"\u2003\u2003\u5728\u4e0a\u9762\u7684\u8ba1\u5212\u4e2d\uff0c\u4ece 4 \u53f7\u7b97\u5b50\u5230 8 \u53f7\u7b97\u5b50\u662f\u4e09\u5f20\u8868\u7684 join \u662f\u8fd9\u4e2a\u8ba1\u5212\u6700\u6838\u5fc3\u7684\u90e8\u5206\uff0c\u5927\u6982\u7387\u4e5f\u662f\u6027\u80fd\u7684\u74f6\u9888\u70b9\uff0c\u6211\u4eec\u5148\u4ece\u8fd9\u91cc\u5f00\u59cb\u5206\u6790\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"=============================\n|ID|OPERATOR           |NAME|\n-----------------------------\n|4 |NESTED-LOOP JOIN   |    |\n|5 |\u251c\u2500MERGE JOIN       |    |\n|6 |\u2502  \u2514\u2500TABLE SCAN    |BBTR|\n|7 |\u2502  \u2514\u2500TABLE SCAN    |CTE |\n|8 |\u2514\u2500TABLE GET        |BTR |\n=============================\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u2003\u2003\u8981\u5206\u6790\u51fa\u8ba1\u5212\u91cc\u54ea\u91cc\u662f\u74f6\u9888\uff0c\u9996\u5148\u5f97\u67e5\u4e00\u4e0b\u6bcf\u4e2a\u8868\u7684\u6570\u636e\u91cf\uff0c\u5148\u770b\u6700\u5185\u5c42\u8fdb\u884c merge join \u7684\u4e24\u5f20\u8868 cte \u548c bbtr\uff0cmerge join \u7684\u4ee3\u4ef7\u662f\u626b\u63cf\u51fa cte \u6570\u636e\u7684\u4ee3\u4ef7 + \u626b\u63cf\u51fa bbtr \u7684\u4ee3\u4ef7 + \u5f52\u5e76\u7684\u4ee3\u4ef7\uff1a",(0,t.jsx)("br",{}),"cte \u8868\u5728 7 \u53f7\u7b97\u5b50\u4e2d\u7684\u8fc7\u6ee4\u6761\u4ef6\u662f cte.bpo_send_flag = '0'\uff0c\u8fc7\u6ee4\u4e4b\u540e\u8fd4\u56de\u6570\u636e\u91cf\u662f 1638 \u884c\uff0c\u626b\u63cf\u8017\u65f6 2.13 \u79d2\uff08\u8fd9\u4e2a\u65f6\u95f4\u660e\u663e\u4e0d\u592a\u5bf9\uff09\u3002",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.img,{alt:"image.png",src:s(43935).A+"",width:"820",height:"126"})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["\u2003\u2003\u7c7b\u4f3c\u5730\uff0cbbtr \u8868\u7684\u6570\u636e\u5728 6 \u53f7\u7b97\u5b50\u8fd4\u56de\u7684\u6570\u636e\u91cf\u662f 40 \u591a\u4e07\u884c\uff0c\u6ca1\u6709\u8fc7\u6ee4\u6761\u4ef6\uff0c\u626b\u63cf\u8017\u8d39 0.19 \u79d2\u3002",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.img,{alt:"image.png",src:s(68928).A+"",width:"674",height:"155"})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["\u2003\u2003\u7136\u540e\u4e0a\u5c42\u7684 NLJ \u8981\u62ff merge join \u7684\u7ed3\u679c\u5f53\u505a\u9a71\u52a8\u8868\uff08\u5de6\u8868\uff09\uff0c\u5bf9\u53f3\u8868 btr \u8fdb\u884c table get\u3002",(0,t.jsx)("br",{}),"\u2003\u2003\u8fd9\u6761 SQL \u4e00\u5171\u6267\u884c\u4e86 2.43 \u79d2\uff0c\u4f46\u4ec5\u4ec5\u662f merge join \u4e2d cte \u8868\u7684\u626b\u63cf\u4ee3\u4ef7\u5c31\u5df2\u7ecf\u9ad8\u8fbe 2.13 \u79d2\u4e86\uff0c\u6240\u4ee5\u8fd9\u6761 SQL \u7684\u74f6\u9888\u70b9\u5c31\u662f cte \u8868\u7684\u626b\u63cf\u3002",(0,t.jsx)("br",{}),"\u2003\u2003\u53ef\u4ee5\u770b\u5230 cte \u8868\u4e0a\u6709\u4e00\u4e2a\u8fc7\u6ee4\u6761\u4ef6 bpo_send_flag = '0'\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728 cte \u8868\u7684\u5217 bpo_send_flag \u4e0a\u5efa\u4e00\u4e2a\u7d22\u5f15\u6765\u4f18\u5316\u5b83\u7684\u67e5\u8be2\u6027\u80fd\u3002\u5982\u679c\u8003\u8651\u5230\u8ba1\u5212\u4e2d\u7684 7 \u53f7\u7b97\u5b50\u8fd8\u9700\u8981\u62ff cte \u8868\u4e2d\u7684 bpo_send_time \u5217\u548c claim_tpa_id \u5217\u7684\u6570\u636e\u5411\u4e0a\u5410\u884c\uff0c\u8fd8\u53ef\u4ee5\u8003\u8651\u5728\uff08bpo_send_flag, bpo_send_time, claim_tpa_id\uff09\u4e0a\u521b\u5efa\u8054\u5408\u7d22\u5f15\u6765\u6d88\u9664\u7d22\u5f15\u56de\u8868\u7684\u6027\u80fd\u6d88\u8017\u3002",(0,t.jsx)("br",{}),"\u2003\u2003\u521b\u5efa\u7d22\u5f15\u4e4b\u540e\u7684\u8ba1\u5212\u9884\u671f\u5927\u6982\u4f1a\u957f\u8fd9\u6837\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"=================================\n|ID|OPERATOR           |NAME    |\n---------------------------------\n|4 |NESTED-LOOP JOIN   |        |\n|5 |\u251c\u2500MERGE JOIN       |        |\n|6 |\u2502  \u2514\u2500TABLE SCAN    |BBTR    |\n|7 |\u2502  \u2514\u2500TABLE SCAN    |CTE(idx)|\n|8 |\u2514\u2500TABLE GET        |BTR     |\n=================================\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u2003\u2003\u5047\u5982\u4e0a\u9762\u6392\u67e5\u4e0b\u6765\u53d1\u73b0 cte \u8868\u7684\u626b\u63cf\u5e76\u4e0d\u662f\u74f6\u9888\uff0c\u90a3\u4e48\u5e94\u8be5\u505a\u8fdb\u4e00\u6b65\u7684\u5206\u6790\u3002\u4f8b\u5982\u5c1d\u8bd5\u53bb\u5355\u72ec\u53bb\u6267\u884c bbtr \u548c cte \u4e24\u4e2a\u8868\u7684\u8fde\u63a5\uff0c\u67e5\u770b\u5b83\u7684\u6267\u884c\u7ed3\u679c\u7684\u884c\u6570\u548c btr \u8868\u7684\u884c\u6570\u5173\u7cfb\u30024 \u53f7 NLJ \u7b97\u5b50\u7684\u5de6\u652f\u8fd4\u56de\u7684\u884c\u6570\uff08merge join \u7ed3\u679c\u7684\u884c\uff09\u548c\u53f3\u652f\u8fd4\u56de\u7684\u884c\u6570\uff08btr \u901a\u8fc7 8 \u53f7\u7b97\u5b50\u4e2d filter \u8fc7\u6ee4\u4e4b\u540e\u7684\u884c\uff09\u5982\u679c\u6ca1\u6709\u660e\u663e\u7684\u5927\u5c0f\u8868\u5173\u7cfb\uff08\u5de6\u652f\u884c\u6570 / \u53f3\u652f\u884c\u6570 < 20\uff09\uff0c\u5219\u610f\u5473\u7740 4 \u53f7\u7b97\u5b50\u9009\u62e9 Hash Join \u7684\u65b9\u5f0f\u4f1a\u6bd4\u9009\u62e9 NLJ \u7684\u65b9\u5f0f\u66f4\u4f18\u3002\u90a3\u4e48\u5c31\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000000222744",children:"hint"})," /*+ leading(bbtr cte btr) use_hash(btr) */ \u6765\u4fee\u6539 4 \u53f7\u7b97\u5b50\u7684\u8fde\u63a5\u65b9\u5f0f\uff0c\u5c06 Nested_Loop Join \u6539\u6210 Hash Join\u3002"]}),"\n",(0,t.jsx)("a",{name:"EHPpJ"}),"\n",(0,t.jsx)(n.h1,{id:"hint-\u548c-outline",children:"hint \u548c outline"}),"\n",(0,t.jsx)("a",{name:"VOKEW"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528-hint-\u751f\u6210\u6307\u5b9a\u8ba1\u5212",children:"\u4f7f\u7528 hint \u751f\u6210\u6307\u5b9a\u8ba1\u5212"}),"\n",(0,t.jsxs)(n.p,{children:["\u2003\u2003\u5b98\u7f51\u4e0a\u5199\u7684\u5f88\u8be6\u7ec6\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\uff0c\u8be6\u89c1 ",(0,t.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000000222337",children:"OB \u5b98\u7f51\u4e2d\u7684 hint \u90e8\u5206"}),"\uff1a",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.img,{alt:"image.png",src:s(40105).A+"",width:"942",height:"346"})]}),"\n",(0,t.jsx)("a",{name:"h5vVC"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528-outline-\u8fdb\u884c\u8ba1\u5212\u7ed1\u5b9a",children:"\u4f7f\u7528 outline \u8fdb\u884c\u8ba1\u5212\u7ed1\u5b9a"}),"\n",(0,t.jsxs)(n.p,{children:["\u2003\u2003\u5b98\u7f51\u4e0a\u5199\u7684\u5f88\u8be6\u7ec6\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\uff0c\u8be6\u89c1 ",(0,t.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000000220954",children:"OB \u5b98\u7f51\u4e2d\u7684\u8ba1\u5212\u7ed1\u5b9a\u90e8\u5206"}),"\uff1a",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.img,{alt:"image.png",src:s(74962).A+"",width:"958",height:"328"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},56525:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1-04f8a8b87f7ac57b3264ac0472fa5fbf.png"},65846:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/2-df2394b6b56d2400a9412fd5121ebb46.png"},43935:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/3-ac4da33d377a53a33b1c3cf492898bb6.png"},68928:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/4-7aa55c7dc1b2134af98a2461551b22cb.png"},40105:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/5-621c2e8c511c7a8eaa20988940991471.png"},74962:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/6-e4924b65443475032b2114cad51abca2.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const i={},c=t.createContext(i);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);