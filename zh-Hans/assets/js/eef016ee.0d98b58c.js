"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[1648],{39315:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var s=n(74848),o=n(28453);const t={title:"OBServer \u5185\u5b58\u5360\u7528\u9ad8",weight:3},i="OBServer \u5185\u5b58\u5360\u7528\u9ad8",c={id:"trouble_shooting/observer_high_memory",title:"OBServer \u5185\u5b58\u5360\u7528\u9ad8",description:"\u573a\u666f\uff1a\u5185\u5b58\u5206\u914d\u5668\u7f13\u5b58\u5360\u7528\u5185\u5b58\u9ad8",source:"@site/docs/trouble_shooting/observer_high_memory.md",sourceDirName:"trouble_shooting",slug:"/trouble_shooting/observer_high_memory",permalink:"/docs-playground/zh-Hans/docs/trouble_shooting/observer_high_memory",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/trouble_shooting/observer_high_memory.md",tags:[],version:"current",frontMatter:{title:"OBServer \u5185\u5b58\u5360\u7528\u9ad8",weight:3}},l={},h=[{value:"<strong>\u573a\u666f\uff1a\u5185\u5b58\u5206\u914d\u5668\u7f13\u5b58\u5360\u7528\u5185\u5b58\u9ad8</strong>",id:"\u573a\u666f\u5185\u5b58\u5206\u914d\u5668\u7f13\u5b58\u5360\u7528\u5185\u5b58\u9ad8",level:2}];function a(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"observer-\u5185\u5b58\u5360\u7528\u9ad8",children:(0,s.jsx)(r.strong,{children:"OBServer \u5185\u5b58\u5360\u7528\u9ad8"})}),"\n",(0,s.jsx)(r.h2,{id:"\u573a\u666f\u5185\u5b58\u5206\u914d\u5668\u7f13\u5b58\u5360\u7528\u5185\u5b58\u9ad8",children:(0,s.jsx)(r.strong,{children:"\u573a\u666f\uff1a\u5185\u5b58\u5206\u914d\u5668\u7f13\u5b58\u5360\u7528\u5185\u5b58\u9ad8"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u73b0\u8c61"})}),"\n",(0,s.jsx)(r.p,{children:"\u90e8\u7f72\u65f6\u914d\u7f6e memory_limit \u4e3a48G\uff0c \u5185\u5b58\u4e00\u76f4\u7528\u523046G\uff0c \u5e76\u4e14\u4e0d\u4f1a\u4e0b\u964d\uff0c\u6301\u7eed\u4e0a\u5347\uff0c\u867d\u7136\u6ca1\u6709\u8d85\u8fc748G\uff0c\u4f46\u662f\u56e0\u4e3a ocp \u4e3b\u673a\u4e00\u5171 64G \u5185\u5b58\uff0c\u5f88\u5bb9\u6613\u5c31\u89e6\u53d1\u5185\u5b58\u544a\u8b66\u9600\u503c\uff0c\u6270\u4e71\u771f\u6b63\u6709\u95ee\u9898\u7684\u544a\u8b66\u6d88\u606f"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u67e5\u770b\u5f53\u524d\u5185\u5b58\u914d\u7f6e"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"select zone,svr_ip,svr_port,name,value from __all_virtual_sys_parameter_stat where name in ('memory_limit','memory_limit_percentage','system_memory') order by svr_ip,svr_port;\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u6392\u67e5\u65b9\u6cd5"})}),"\n",(0,s.jsx)(r.p,{children:'\u767b\u5f55 OBServer \u670d\u52a1\u5668\uff0c\u8fdb\u5165observer\u65e5\u5fd7\u76ee\u5f55\uff0c \u641c\u7d22observer.log\u4e2d"CHUNK_MGR"\u5173\u952e\u5b57'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"grep 'CHUNK_MGR' observer.log\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u7ed3\u679c\u5982\u4e0b\uff0c\u5176\u4e2d freelist_hold \u8868\u793a\u7f13\u5b58\u5185\u5b58\uff0c\u53ef\u4ee5\u770b\u5230\u6709\u4e09\u5341\u591aG\u5185\u5b58\u662f\u88ab\u7f13\u5b58\u7684\u6ca1\u6709\u91ca\u653e"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"[2023-03-24 16:44:10.771913] INFO  [COMMON] ob_tenant_mgr.cpp:568 [3720][2][Y0-0000000000000000] [lt=4] [dc=0] [CHUNK_MGR] free=15982 pushes=13471449 pops=13455467 limit= 51,539,607,552 hold= 49,956,257,792 used= 16,439,574,528 freelist_hold= 33,516,683,264 maps= 258,350 unmaps= 250,521 large_maps= 255,745 large_unmaps= 250,459 memalign=0 virtual_memory_used= 55,661,019,136\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u5904\u7406\u65b9\u6cd5"})}),"\n",(0,s.jsx)(r.p,{children:"\u8bbe\u7f6ememory_chunk_cache_size\u53c2\u6570\u4e3a10G\uff0c\u4e5f\u5c31\u662f\u6700\u591a\u7f13\u5b5810G\u3002\u8be5\u53c2\u6570\u53ef\u6839\u636e\u5b9e\u9645\u573a\u666f\u52a8\u6001\u8c03\u6574\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:'alter system set memory_chunk_cache_size="10G";\nshow parameters like "memory_chunk_cache_size";\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u5904\u7406\u5b8c\u6210\u540e\uff0c\u5185\u5b58\u9a6c\u4e0a\u5c31\u4e0b\u6765\u4e86\uff0c\u4f7f\u7528\u7387\u6062\u590d\u6b63\u5e38\u3002"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u6ce8\u610f"})}),"\n",(0,s.jsx)(r.p,{children:"\u7f13\u5b58\u503c\u662f\u7531 memory_chunk_cache_size \u53c2\u6570\u6765\u63a7\u5236\u7684\uff0c\u9ed8\u8ba4\u4e3a 0 \u4e0d\u9700\u8981\u914d\u7f6e\u3002"})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var s=n(96540);const o={},t=s.createContext(o);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);