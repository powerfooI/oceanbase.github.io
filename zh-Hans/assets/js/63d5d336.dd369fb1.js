"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[4571],{39750:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=s(74848),r=s(28453);const l={title:"\u6267\u884c\u8ba1\u5212",weight:1},t="\u6267\u884c\u8ba1\u5212",c={id:"performance_tuning/explain",title:"\u6267\u884c\u8ba1\u5212",description:"\u6267\u884c\u8ba1\u5212\u662f\u5bf9\u4e00\u6761 SQL \u67e5\u8be2\u8bed\u53e5\u5728\u6570\u636e\u5e93\u4e2d\u6267\u884c\u8fc7\u7a0b\u7684\u63cf\u8ff0\uff0c\u901a\u5e38\u7528\u4e8e\u5206\u6790\u67d0\u6761 SQL \u7684\u6027\u80fd\u95ee\u9898\uff0c\u8bfb\u61c2\u6267\u884c\u8ba1\u5212\u662f SQL \u4f18\u5316\u7684\u5148\u51b3\u6761\u4ef6\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u67e5\u770b SQL \u7684\u903b\u8f91\u6267\u884c\u8ba1\u5212\u548c\u5b9e\u9645\u6267\u884c\u8ba1\u5212\uff0c\u5e76\u4ecb\u7ecd\u4e00\u4e9b\u5e38\u7528\u7684\u6267\u884c\u8ba1\u5212\u7b97\u5b50\u3002",source:"@site/docs/performance_tuning/explain.md",sourceDirName:"performance_tuning",slug:"/performance_tuning/explain",permalink:"/docs-playground/zh-Hans/docs/performance_tuning/explain",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/performance_tuning/explain.md",tags:[],version:"current",frontMatter:{title:"\u6267\u884c\u8ba1\u5212",weight:1}},d={},o=[{value:"<strong>\u903b\u8f91\u6267\u884c\u8ba1\u5212</strong>",id:"\u903b\u8f91\u6267\u884c\u8ba1\u5212",level:2},{value:"<strong>\u5b9e\u9645\u6267\u884c\u8ba1\u5212</strong>",id:"\u5b9e\u9645\u6267\u884c\u8ba1\u5212",level:2},{value:"<strong>\u5e38\u89c1\u6267\u884c\u8ba1\u5212\u7b97\u5b50</strong>",id:"\u5e38\u89c1\u6267\u884c\u8ba1\u5212\u7b97\u5b50",level:2}];function _(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u6267\u884c\u8ba1\u5212",children:(0,i.jsx)(e.strong,{children:"\u6267\u884c\u8ba1\u5212"})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u8ba1\u5212\u662f\u5bf9\u4e00\u6761 SQL \u67e5\u8be2\u8bed\u53e5\u5728\u6570\u636e\u5e93\u4e2d\u6267\u884c\u8fc7\u7a0b\u7684\u63cf\u8ff0\uff0c\u901a\u5e38\u7528\u4e8e\u5206\u6790\u67d0\u6761 SQL \u7684\u6027\u80fd\u95ee\u9898\uff0c\u8bfb\u61c2\u6267\u884c\u8ba1\u5212\u662f SQL \u4f18\u5316\u7684\u5148\u51b3\u6761\u4ef6\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u67e5\u770b SQL \u7684\u903b\u8f91\u6267\u884c\u8ba1\u5212\u548c\u5b9e\u9645\u6267\u884c\u8ba1\u5212\uff0c\u5e76\u4ecb\u7ecd\u4e00\u4e9b\u5e38\u7528\u7684\u6267\u884c\u8ba1\u5212\u7b97\u5b50\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u903b\u8f91\u6267\u884c\u8ba1\u5212",children:(0,i.jsx)(e.strong,{children:"\u903b\u8f91\u6267\u884c\u8ba1\u5212"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528 EXPLAIN \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u4f18\u5316\u5668\u9488\u5bf9\u6307\u5b9a SQL \u751f\u6210\u7684\u903b\u8f91\u6267\u884c\u8ba1\u5212\u3002EXPLAIN \u547d\u4ee4\u5b8c\u6574\u7684\u8bed\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"{EXPLAIN | DESCRIBE | DESC} [explain_type] dml_statement;\n\nexplain_type\uff1a\n    BASIC \n  | OUTLINE\n  | EXTENDED\n  | EXTENDED_NOADDR\n  | PARTITIONS \n  | FORMAT = {TRADITIONAL| JSON}\n\ndml_statement:\n    SELECT statement \n  | DELETE statement\n  | INSERT statement\n  | REPLACE statement\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u4e2d\uff0cFORMAT \u6709 TRADITIONAL \u548c JSON \u4e24\u79cd\u683c\u5f0f\uff0c\u9ed8\u8ba4\u662f TRADITIONAL \u683c\u5f0f\uff0c\u53ef\u8bfb\u6027\u66f4\u597d\uff0cJSON \u683c\u5f0f\u5bf9\u7a0b\u5e8f\u89e3\u6790\u6bd4\u8f83\u53cb\u597d\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5148\u770b\u4e00\u4e2a\u7b80\u5355\u7684 SQL \u6267\u884c\u8ba1\u5212\u683c\u5f0f\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"obclient> EXPLAIN\n    -> SELECT count(*) FROM BMSQL_ITEM \\G\n*************************** 1. row ***************************\nQuery Plan: ===============================================\n|ID|OPERATOR       |NAME      |EST. ROWS|COST |\n-----------------------------------------------\n|0 |SCALAR GROUP BY|          |1        |78754|\n|1 | TABLE SCAN    |BMSQL_ITEM|99995    |59653|\n===============================================\n\nOutputs & filters:\n-------------------------------------\n  0 - output([T_FUN_COUNT(*)]), filter(nil),\n      group(nil), agg_func([T_FUN_COUNT(*)])\n  1 - output([1]), filter(nil),\n      access([BMSQL_ITEM.I_ID]), partitions(p0)\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u8ba1\u5212\u7684\u8f93\u51fa\u5c55\u793a\u5206\u4e3a\u4e24\u90e8\u5206\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7b2c\u4e00\u90e8\u5206\u662f\u7528\u8868\u683c\u5f62\u5f0f\u5c55\u793a\u6267\u884c\u8ba1\u5212\u8fd9\u68f5\u6811\u3002\u6bcf\u884c\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u64cd\u4f5c\uff0c\u64cd\u4f5c\u7b26\u662f OPERATOR\uff0c\u64cd\u4f5c\u6709 ID\u3002\u64cd\u4f5c\u5c55\u793a\u53ef\u80fd\u4f1a\u7f29\u8fdb\u3002\u7f29\u8fdb\u8868\u793a\u662f\u5185\u90e8\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5d4c\u5957\u3002\u6267\u884c\u987a\u5e8f\u9075\u5faa\u7531\u5185\u5230\u5916\uff0c\u7531\u4e0a\u5230\u4e0b\u3002\u64cd\u4f5c\u7b26\u652f\u6301\u7684\u5185\u5bb9\u4e5f\u662f SQL \u5f15\u64ce\u6210\u719f\u5ea6\u7684\u4e00\u4e2a\u4f53\u73b0\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"OPERATOR\uff1a\u8868\u793a\u64cd\u4f5c\u7b97\u5b50\u7684\u540d\u79f0\uff0cTABLE SCAN \u662f\u5e38\u7528\u64cd\u4f5c\u7b97\u5b50\uff0c\u8868\u793a\u626b\u63cf\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"NAME\uff1a\u8868\u793a\u7b97\u5b50\u64cd\u4f5c\u7684\u5bf9\u8c61\u3002\u53ef\u4ee5\u662f\u8868\u540d\u3001\u7d22\u5f15\u540d\u3001\u5185\u90e8\u4e34\u65f6\u89c6\u56fe\u540d\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u626b\u63cf\u4e3b\u952e\uff0c\u4f9d\u7136\u5c55\u793a\u8868\u540d\u3002\u56e0\u4e3a OceanBase \u6570\u636e\u5e93\u91cc\u7684\u8868\u548c\u7d22\u5f15\u7684\u672c\u8d28\u90fd\u662f\u7d22\u5f15\u7ec4\u7ec7\u8868\uff0c\u8868\u6570\u636e\u8ddf\u4e3b\u952e\u7d22\u5f15\u662f\u4e00\u4e2a\u6982\u5ff5\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"EST. ROWS\uff1a\u6267\u884c\u5f53\u524d\u7b97\u5b50\u8f93\u51fa\u7684\u884c\u6570\uff0c\u8ddf\u7edf\u8ba1\u4fe1\u606f\u6709\u5173\u3002OceanBase \u6570\u636e\u5e93\u91cc\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u76ee\u524d\u53ea\u6709\u5728\u96c6\u7fa4\u5408\u5e76\u7684\u65f6\u5019\u624d\u66f4\u65b0\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"COST\uff1a\u6267\u884c\u5f53\u524d\u7b97\u5b50\u9884\u4f30\u7684\u6210\u672c\u3002COST \u8ba1\u7b97\u6bd4\u8f83\u590d\u6742\uff0c\u6682\u65f6\u5148\u4e0d\u6df1\u5165\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7b2c\u4e8c\u90e8\u5206\u7684\u5185\u5bb9\u8ddf\u7b2c\u4e00\u90e8\u5206\u6709\u5173\uff0c\u4e3b\u8981\u662f\u63cf\u8ff0\u7b2c\u4e00\u90e8\u5206\u7b97\u5b50\u7684\u5177\u4f53\u4fe1\u606f\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"output\uff1a\u8868\u793a\u5f53\u524d\u7b97\u5b50\u8f93\u51fa\u7684\u8868\u8fbe\u5f0f\uff08\u5305\u542b\u5217\uff09\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"filter\uff1a\u8868\u793a\u5f53\u524d\u7b97\u5b50\u7684\u8fc7\u6ee4\u8868\u8fbe\u5f0f\uff0cnil \u8868\u793a\u65e0\u3002\u5982\u679c\u5f53\u524d\u7b97\u5b50\u662f\u8bbf\u95ee\u5b58\u50a8\u5c42\uff0c\u8fd9\u4e2a\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u53ef\u4ee5\u4e0b\u63a8\uff08push\uff09\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728 OceanBase \u6570\u636e\u5e93\u5185\u90e8\uff0c\u8fd9\u4e2a\u7ed3\u679c\u662f\u4ee5 JSON \u683c\u5f0f\u5b58\u50a8\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "ID": 1,\n  "OPERATOR": "SCALAR GROUP BY",\n  "NAME": "SCALAR GROUP BY",\n  "EST.ROWS": 1,\n  "COST": 78754,\n  "output": [\n    "T_FUN_COUNT(*)"\n  ],\n  "CHILD_1": {\n    "ID": 0,\n    "OPERATOR": "TABLE SCAN",\n    "NAME": "TABLE SCAN",\n    "EST.ROWS": 99995,\n    "COST": 59653,\n    "output": [\n      "1"\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u8be5 JSON \u5185\u5bb9\u63cf\u8ff0\u7684\u662f\u4e00\u4e2a\u6811\uff0c\u5bf9\u666e\u901a\u7528\u6237\u53ef\u8bfb\u6027\u4e0d\u597d\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5b9e\u9645\u6267\u884c\u8ba1\u5212",children:(0,i.jsx)(e.strong,{children:"\u5b9e\u9645\u6267\u884c\u8ba1\u5212"})}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b SQL \u5b9e\u9645\u6267\u884c\u8ba1\u5212\uff0c\u67e5\u770b SQL \u7684\u5b9e\u9645\u6267\u884c\u8ba1\u5212\u8981\u6c42 SQL \u88ab\u6267\u884c\u8fc7\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd0\u884c\u4e0b\u9762\u4e24\u4e2a SQL\uff0c\u67e5\u770b SQL \u5ba1\u8ba1\u89c6\u56fe\uff0c\u83b7\u53d6\u6267\u884c\u8282\u70b9\u548c PLAN_ID \u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select o.o_w_id , o.o_d_id ,o.o_id , i.i_name ,i.i_price ,o.o_c_id  from bmsql_oorder o , bmsql_item i  where o.o_id = i.i_id  and o.o_w_id  = 3 limit 10 ;\n\nselect o.o_w_id , o.o_d_id ,o.o_id , i.i_name ,i.i_price ,o.o_c_id  from bmsql_item i , bmsql_oorder o  where o.o_id = i.i_id  and o.o_w_id  = 3 limit 10 ;\n\nSELECT /*+ read_consistency(weak) ob_querytimeout(100000000) */ substr(usec_to_time(request_time),1,19) request_time_, s.svr_ip,  s.client_Ip, s.sid,s.tenant_id, s.tenant_name, s.user_name, s.db_name, s.query_sql, s.plan_id, s.plan_type, s.affected_rows, s.return_rows, s.ret_code, s.event, s.elapsed_time, s.queue_time, s.execute_time\nFROM oceanbase.gv$ob_sql_audit s\nWHERE 1=1  and s.tenant_id = 1002\n and user_name='u_tpcc' and query_sql like 'select o.o_w_id%'\n and request_time >= time_to_usec(date_sub(CURRENT_TIMESTAMP, interval 5 minute ))\nORDER BY request_time DESC\nLIMIT 10 \\G\n\n# \u8f93\u51fa\uff1a\n\n*************************** 1. row ***************************\nrequest_time_: 2021-10-05 11:24:50\n       svr_ip: x.x.x.x\n    client_Ip: x.x.x.x\n          sid: 3221668666\n    tenant_id: 1002\n  tenant_name: obmysql\n    user_name: u_tpcc\n      db_name: tpccdb\n    query_sql: select o.o_w_id , o.o_d_id ,o.o_id , i.i_name ,i.i_price ,o.o_c_id  from bmsql_item i , bmsql_oorder o  where o.o_id = i.i_id  and o.o_w_id  = 3 limit 10\n      plan_id: 3305\n    plan_type: 3\naffected_rows: 0\n  return_rows: 10\n     ret_code: 0\n        event: default condition wait\n elapsed_time: 20058\n   queue_time: 73\n execute_time: 19726\n*************************** 2. row ***************************\nrequest_time_: 2021-10-05 11:24:46\n       svr_ip: x.x.x.x\n    client_Ip: x.x.x.x\n          sid: 3222238517\n    tenant_id: 1002\n  tenant_name: obmysql\n    user_name: u_tpcc\n      db_name: tpccdb\n    query_sql: select o.o_w_id , o.o_d_id ,o.o_id , i.i_name ,i.i_price ,o.o_c_id  from bmsql_oorder o , bmsql_item i  where o.o_id = i.i_id  and o.o_w_id  = 3 limit 10\n      plan_id: 273\n    plan_type: 3\naffected_rows: 0\n  return_rows: 10\n     ret_code: 0\n        event: system internal wait\n elapsed_time: 141562\n   queue_time: 48\n execute_time: 139714\n2 rows in set (0.119 sec)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u4e2d tenant_id\u3001svr_ip\u3001svr_port \u548c plan_id \u5217\u4fe1\u606f\u5f88\u91cd\u8981\u3002\u67e5\u770b\u89c6\u56fe gv$ob_plan_cache_plan_explain \u9700\u8981\u8fd9\u4e9b\u5b57\u6bb5\u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u662f\u5728\u7f51\u9875\u4e0a\uff0c\u4e14\u4ee5\u4e0a\u8f93\u51fa\u7ed3\u679c\u683c\u5f0f\u5316\u6b63\u786e\uff0c\u5bf9\u6bd4 2 \u4e2a SQL \u7684\u5b9e\u9645\u6267\u884c\u8ba1\u5212\u53ef\u4ee5\u770b\u51fa\u5206\u522b\u662f\u5bf9\u90a3\u4e2a\u8868\u8fdb\u884c\u8fdc\u7a0b\u8bbf\u95ee\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9664\u4e86\u901a\u8fc7 SQL \u5ba1\u8ba1\u89c6\u56fe\u5b9a\u4f4d\u5177\u4f53\u7684 SQL \u53ca\u5176\u6267\u884c\u8ba1\u5212\u5916\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u7f13\u5b58\u7684\u6267\u884c\u8ba1\u5212\u6c47\u603b\u89c6\u56fe gv$ob_plan_cache_plan_stat\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT s.tenant_id, svr_ip,plan_Id,sql_id,TYPE, query_sql, first_load_time, avg_exe_usec, slow_count,executions, slowest_exe_usec,s.outline_id\nFROM oceanbase.`gv$ob_plan_cache_plan_stat` s  \nWHERE s.tenant_id = 1002   -- \u6539\u6210\u5177\u4f53\u7684 tenant_id\nORDER BY avg_exe_usec desc limit 10\n;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4ece\u8fd9\u4e2a\u89c6\u56fe\u91cc\u53ef\u4ee5\u770b\u5230\u5168\u5c40\u7684 SQL \u6267\u884c\u6c47\u603b\u3002\u9002\u5408\u627e TOP N \u6162 SQL\u3002\u6839\u636e\u91cc\u9762\u7684\u8282\u70b9\u4fe1\u606f\u3001SQLID \u548c PLANID \u4fe1\u606f\uff0c\u65e2\u53ef\u4ee5\u5230 SQL \u5ba1\u8ba1\u89c6\u56fe\u91cc\u5b9a\u4f4d\u5177\u4f53\u7684 SQL \u4fe1\u606f\uff0c\u4e5f\u53ef\u4ee5\u67e5\u770b\u5b9e\u9645\u8fd0\u884c\u7684\u6267\u884c\u8ba1\u5212\u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u8ba1\u5212\u53ef\u4ee5\u6e05\u7a7a\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER SYSTEM flush plan cache GLOBAL;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u73af\u5883\u7814\u7a76\uff0c\u751f\u4ea7\u73af\u5883\u7684 SQL \u6267\u884c\u8ba1\u5212\u7f13\u5b58\u901a\u5e38\u4e0d\u53ef\u968f\u4fbf\u6e05\u7a7a\u3002\u6e05\u7a7a\u6267\u884c\u8ba1\u5212\u4f1a\u5bfc\u81f4\u6240\u6709 SQL \u8981\u91cd\u65b0\u8fdb\u884c\u4e00\u6b21\u786c\u89e3\u6790\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5e38\u89c1\u6267\u884c\u8ba1\u5212\u7b97\u5b50",children:(0,i.jsx)(e.strong,{children:"\u5e38\u89c1\u6267\u884c\u8ba1\u5212\u7b97\u5b50"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"TABLE GET"})}),"\n",(0,i.jsx)(e.p,{children:"\u8868\u793a\u4e3b\u952e\u76f4\u63a5\u7b49\u503c\u8bbf\u95ee\uff0c\u540e\u9762\u63a5\u8868\u540d\u3002OceanBase \u6570\u636e\u5e93\u91cc\u4e3b\u952e\u5c31\u662f\u8868\u6570\u636e\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"TABLE SCAN"})}),"\n",(0,i.jsx)(e.p,{children:"\u8868\u793a\u5168\u8868\u626b\u63cf\u3001\u4e3b\u952e\u626b\u63cf\u6216\u7d22\u5f15\u626b\u63cf\u3002\u5177\u4f53\u9700\u6839\u636e\u8be5\u6267\u884c\u8ba1\u5212\u7b97\u5b50\u540e\u9762\u7684\u64cd\u4f5c\u5bf9\u8c61\u540d\u662f\u8868\u8fd8\u662f\u7d22\u5f15\u5224\u65ad\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6ce8\u610f"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e3b\u952e\u626b\u63cf\u65f6\u6267\u884c\u8ba1\u5212\u7b97\u5b50\u540e\u9762\u8ddf\u7684\u64cd\u4f5c\u5bf9\u8c61\u4e5f\u662f\u8868\u540d\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"TOP-N SORT"})}),"\n",(0,i.jsx)(e.p,{children:"\u5e38\u7528\u7684\u573a\u666f\u6392\u5e8f\u540e\u53ef\u80fd\u53ea\u8fd4\u56de\u6700\u5927\u6216\u6700\u5c0f\u7684\u524d N \u6761\u8bb0\u5f55\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"NESTED-LOOP JOIN"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u4e2a\u7b97\u6cd5\u7684\u6574\u4f53\u6027\u80fd\u53d6\u51b3\u4e8e\u5916\u90e8\u8868\u8fd4\u56de\u7684\u8bb0\u5f55\u6570\uff08\u5faa\u73af\u7684\u6b21\u6570\uff09\u548c\u5185\u90e8\u8868\u7684\u67e5\u8be2\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e2a\u4eba\u7ecf\u9a8c\u662f\u5c0f\u8868\u4f5c\u4e3a\u5916\u90e8\u8868\uff0c\u5927\u8868\u4f5c\u4e3a\u5185\u90e8\u8868\u3002\u4e0d\u8fc7\u5b9e\u9645\u5e76\u4e0d\u662f\u6309\u7167\u8868\u7684\u5927\u5c0f\u533a\u5206\uff0c\u800c\u662f\u7531\u8fc7\u6ee4\u6761\u4ef6\u5e94\u7528\u540e\u7684\u7ed3\u679c\u96c6\u5927\u5c0f\u6765\u5b9a\u3002\u53ef\u4ee5\u5bf9\u6bd4\u4e0b\u9762 SQL \u7684\u6267\u884c\u8ba1\u5212\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"MERGE JOIN"})}),"\n",(0,i.jsx)(e.p,{children:"MERGE JOIN \u4e3b\u8981\u7528\u4e8e\u4e24\u4e2a\u4e0d\u662f\u5f88\u5c0f\u6216\u5f88\u5927\u7684\u7ed3\u679c\u96c6\u7684\u8fde\u63a5\uff0c\u5b83\u4eec\u6ca1\u6709\u6709\u6548\u7684\u8fc7\u6ee4\u6761\u4ef6\u6216\u8005\u8fd9\u4e2a\u6761\u4ef6\u4e0a\u6ca1\u6709\u5408\u9002\u7684\u7d22\u5f15\u3002"}),"\n",(0,i.jsx)(e.p,{children:"MERGE JOIN \u7b97\u6cd5\u57fa\u672c\u5206\u4e24\u5927\u9636\u6bb5\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6392\u5e8f\uff0c\u5c06\u4e24\u4e2a\u7ed3\u679c\u96c6\u5206\u522b\u6309\u8fde\u63a5\u5b57\u6bb5\u6392\u5e8f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5408\u5e76\uff0c\u5206\u522b\u4ece\u4e24\u4e2a\u7ed3\u679c\u96c6\u91cc\u8bfb\u53d6\u8bb0\u5f55\uff0c\u8fdb\u884c\u6bd4\u8f83\u3001\u904d\u5386\u7b49\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u7ed3\u679c\u96c6\u672c\u6765\u5c31\u662f\u6709\u5e8f\u7684\uff0c\u90a3\u4e48\u7b2c\u4e00\u9636\u6bb5\u53ef\u4ee5\u4f18\u5316\u3002MERGE JOIN \u53ef\u4ee5\u7528\u4e8e\u7b49\u503c\u8fd0\u7b97\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u4e0d\u7b49\u503c\u8fd0\u7b97\uff08\u5c0f\u4e8e\u3001\u5927\u4e8e\u3001\u5c0f\u4e8e\u7b49\u4e8e\u3001\u5927\u4e8e\u7b49\u4e8e\uff09\u3002"}),"\n",(0,i.jsx)(e.p,{children:"MERGE JOIN \u4e3b\u8981\u5229\u7528\u6570\u636e\u4e3b\u952e\u6216\u8005\u7d22\u5f15\u7684\u6709\u5e8f\uff0c\u6b64\u65f6\u5b83\u7684\u6027\u80fd\u6709\u53ef\u80fd\u4f1a\u66f4\u597d\u3002\u6570\u636e\u91cf\u975e\u5e38\u5927\u7684\u65f6\u5019\uff0cMERGE JOIN \u6027\u80fd\u5e76\u4e0d\u662f\u5f88\u597d\uff0c\u8981\u8bbe\u6cd5\u89c4\u907f\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"HASH JOIN"})}),"\n",(0,i.jsx)(e.p,{children:"HASH JOIN \u7528\u4e8e\u4e24\u4e2a\u6bd4\u8f83\u5927\u7684\u7ed3\u679c\u96c6\u4e4b\u95f4\u7684\u8fde\u63a5\uff0c\u901a\u5e38\u6ca1\u6709\u6bd4\u8f83\u597d\u7684\u8fc7\u6ee4\u6761\u4ef6\u6216\u8005\u8fc7\u6ee4\u6761\u4ef6\u4e0a\u6ca1\u6709\u7d22\u5f15\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"HASH JOIN \u4e5f\u5206\u5916\u90e8\u8868\u548c\u5185\u90e8\u8868\uff0c\u5185\u90e8\u8868\u662f probe table\uff0c\u5916\u90e8\u8868\u662f hash table\u3002\u901a\u5e38\u6570\u636e\u5e93\u4f1a\u6311\u9009\u7ed3\u679c\u96c6\u76f8\u5bf9\u5c0f\u7684\u8868\u4f5c\u4e3a\u5916\u90e8\u8868\uff0c\u5e76\u5728\u8fde\u63a5\u6761\u4ef6\u4e0a\u7528\u54c8\u5e0c\u51fd\u6570\u6784\u5efa hash table\uff0c\u7136\u540e\u5faa\u73af\u904d\u5386 probe table\uff0c\u5bf9\u8fde\u63a5\u6761\u4ef6\u5217\u7528\u54c8\u5e0c\u51fd\u6570\uff0c\u63a2\u6d4b\u662f\u5426\u5728 hash table \u4e2d\u5b58\u5728\uff0c\u5982\u679c\u5b58\u5728\uff0c\u5219\u8fd4\u56de\u5339\u914d\u7684\u8bb0\u5f55\u3002\u8be5\u7b97\u5b50\u548c NESTED-LOOP JOIN \u5f88\u7c7b\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u662f HASH JOIN \u4f1a\u5728\u8fde\u63a5\u6761\u4ef6\u5217\u4e0a\u7528\u54c8\u5e0c\u51fd\u6570\uff0c\u5e76\u5728\u5185\u5b58\u4e2d\u6784\u5efa hash table\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"OceanBase \u4f18\u5316\u5668\u4e00\u6b21\u80fd\u6784\u5efa\u7684\u6700\u5927 hash table \u53d7\u5185\u90e8\u53c2\u6570\uff08_hash_table_size\uff09\u9650\u5236\u3002\u5982\u679c\u5916\u90e8\u8868\u7684\u7ed3\u679c\u96c6\u6bd4\u8fd9\u4e2a\u5927\uff0c\u5c31\u9700\u8981\u5206\u591a\u6b21\u6784\u5efa hash table\uff0c\u8fd9\u4e2a\u4e5f\u53eb multiple pass\uff0c\u4f1a\u6d89\u53ca\u5230\u4e00\u4e9b\u5185\u5b58\u548c\u6587\u4ef6\u6570\u636e\u4ea4\u6362\uff0c\u4ee5\u53ca\u591a\u6b21\u54c8\u5e0c\u63a2\u6d4b\uff0c\u6027\u80fd\u76f8\u5bf9\u4f1a\u4e0b\u964d\u4e00\u4e9b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"HASH JOIN \u7684\u7ec6\u8282\u6bd4\u8f83\u590d\u6742\uff0c\u6b64\u5904\u4e0d\u8be6\u7ec6\u8ba8\u8bba\u3002\u76ee\u524d\u53ea\u8981\u80fd\u8bc6\u522b\u51fa HASH JOIN\uff0c\u4ee5\u53ca\u638c\u63e1\u4ea7\u751f\u540e\u5982\u4f55\u89c4\u907f HASH JOIN \u7b97\u6cd5\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"SUBPLAN SCAN \u548c COUNT"})}),"\n",(0,i.jsx)(e.p,{children:"\u7b97\u5b50 SUBPLAN SCAN \u8ddf TABLE SCAN \u7c7b\u4f3c\uff0c\u4e0d\u540c\u7684\u662f\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SUBPLAN SCAN \u662f\u4ece\u89c6\u56fe\uff08\u5305\u62ec\u5185\u90e8\u4e34\u65f6\u751f\u6210\u7684\uff09\u91cc\u8bfb\u53d6\u6570\u636e\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"TABLE SCAN \u662f\u4ece\u57fa\u8868\uff08\u6216\u8005\u7d22\u5f15\uff09\u91cc\u626b\u63cf\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"EXCHANGE IN|OUT REMOTE"})}),"\n",(0,i.jsx)(e.p,{children:"\u9996\u5148\u770b\u8981\u8bbf\u95ee\u8868\u7684\u4e3b\u526f\u672c\u8282\u70b9\uff0c\u7136\u540e\u76f4\u8fde\u53e6\u5916\u4e00\u4e2a\u8282\u70b9\u3002\u4eba\u4e3a\u6784\u9020\u4e00\u4e2a\u8fdc\u7a0b\u6267\u884c\u8ba1\u5212\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,i.jsx)(e.p,{children:"Exchange \u7b97\u5b50\u662f\u5206\u5e03\u5f0f\u573a\u666f\u4e0b\uff0c\u7528\u4e8e\u7ebf\u7a0b\u95f4\u8fdb\u884c\u6570\u636e\u4ea4\u4e92\u7684\u7b97\u5b50\u3002\u5b83\u4e00\u822c\u6210\u5bf9\u51fa\u73b0\uff0c\u6570\u636e\u6e90\u7aef\u6709\u4e00\u4e2a out \u7b97\u5b50\uff0c\u76ee\u7684\u7aef\u4f1a\u6709\u4e00\u4e2a in \u7b97\u5b50\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5b9e\u9645\u4e0a\u4e1a\u52a1\u90fd\u662f\u901a\u8fc7 OBProxy \u8fde\u63a5\uff0c\u80fd\u6b63\u786e\u8def\u7531\u5230 OBServer \u8282\u70b9\u4e0a\uff0c\u5f88\u5927\u7a0b\u5ea6\u89c4\u907f\u4e86\u8fdc\u7a0b\u6267\u884c\u8ba1\u5212\uff0c\u4e0d\u8fc7\u5e76\u4e0d\u80fd\u4ece\u6839\u672c\u4e0a\u907f\u514d\u3002\u540e\u9762\u8fd8\u4f1a\u4e3e\u4f8b\u8bf4\u660e\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(_,{...n})}):_(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var i=s(96540);const r={},l=i.createContext(r);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);