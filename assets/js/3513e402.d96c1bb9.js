"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2974],{97234:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=t(74848),o=t(28453);const c={title:"\u5408\u5e76\u8f6c\u50a8\u76f8\u5173SQL",weight:1},i="\u5408\u5e76\u8f6c\u50a8\u76f8\u5173 SQL",r={id:"operation_maintenance/common_sql/compaction",title:"\u5408\u5e76\u8f6c\u50a8\u76f8\u5173SQL",description:"- \u67e5\u770b\u5168\u5c40\u5408\u5e76\u662f\u5426\u5f00\u542f",source:"@site/docs/operation_maintenance/common_sql/compaction.md",sourceDirName:"operation_maintenance/common_sql",slug:"/operation_maintenance/common_sql/compaction",permalink:"/docs-playground/docs/operation_maintenance/common_sql/compaction",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/operation_maintenance/common_sql/compaction.md",tags:[],version:"current",frontMatter:{title:"\u5408\u5e76\u8f6c\u50a8\u76f8\u5173SQL",weight:1}},a={},l=[];function d(n){const e={code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u5408\u5e76\u8f6c\u50a8\u76f8\u5173-sql",children:(0,s.jsx)(e.strong,{children:"\u5408\u5e76\u8f6c\u50a8\u76f8\u5173 SQL"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b\u5168\u5c40\u5408\u5e76\u662f\u5426\u5f00\u542f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SHOW PARAMETERS LIKE 'enable_major_freeze';\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u624b\u52a8\u53d1\u8d77\u6240\u6709\u79df\u6237\u5408\u5e76"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"ALTER SYSTEM MAJOR FREEZE TENANT=ALL;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u624b\u52a8\u53d1\u8d77\u5355\u4e2a\u79df\u6237\u5408\u5e76\uff0c\u4ee5\u79df\u6237\u540d\u4e3a obtest \u4e3a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"ALTER SYSTEM MAJOR FREEZE TENANT=obtest;\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b\u6240\u6709\u79df\u6237\u5408\u5e76\u60c5\u51b5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM oceanbase.CDB_OB_ZONE_MAJOR_COMPACTION;\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://intranetproxy.alipay.com/skylark/lark/0/2023/png/65656351/1684814629058-117ce5cb-441f-4d9b-9fc8-1dc089113d79.png#clientId=u0f7d1ad4-4356-4&from=paste&height=441&id=uab8c9c6f&originHeight=882&originWidth=1918&originalType=binary&ratio=2&rotation=0&showTitle=false&size=245583&status=done&style=none&taskId=u651af399-c2f5-4af0-a7f4-9eaf99b57f7&title=&width=959",alt:"image.png"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b\u5408\u5e76\u5269\u4f59\u8868\u6570\u91cf"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select * from GV$OB_COMPACTION_PROGRESS \nwhere UNFINISHED_TABLET_COUNT != 0;\n"})}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>r});var s=t(96540);const o={},c=s.createContext(o);function i(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);