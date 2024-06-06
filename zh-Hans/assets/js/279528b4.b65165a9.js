"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[3588],{37617:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>t});var d=n(74848),o=n(28453);const s={},i="\u955c\u50cf\u548c\u4ed3\u5e93\u547d\u4ee4\u7ec4",c={id:"obd/user-guide/obd-command/command-group-for-mirroring-and-warehousing",title:"\u955c\u50cf\u548c\u4ed3\u5e93\u547d\u4ee4\u7ec4",description:"OBD \u6709\u591a\u7ea7\u547d\u4ee4\uff0c\u60a8\u53ef\u4ee5\u5728\u6bcf\u4e2a\u5c42\u7ea7\u4e2d\u4f7f\u7528 -h/--help \u9009\u9879\u67e5\u770b\u5b50\u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002\u540c\u6837\u7684\uff0c\u5f53\u5404\u5c42\u7ea7\u7684\u5b50\u547d\u4ee4\u6267\u884c\u62a5\u9519\u65f6\uff0c\u60a8\u4ea6\u53ef\u4f7f\u7528 -v/--verbose \u67e5\u770b\u547d\u4ee4\u7684\u8be6\u7ec6\u6267\u884c\u8fc7\u7a0b\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/obd/300.user-guide/300.obd-command/200.command-group-for-mirroring-and-warehousing.md",sourceDirName:"obd/300.user-guide/300.obd-command",slug:"/obd/user-guide/obd-command/command-group-for-mirroring-and-warehousing",permalink:"/docs-playground/zh-Hans/docs/obd/user-guide/obd-command/command-group-for-mirroring-and-warehousing",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/obd/300.user-guide/300.obd-command/200.command-group-for-mirroring-and-warehousing.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{}},l={},t=[{value:"obd mirror clone",id:"obd-mirror-clone",level:2},{value:"obd mirror create",id:"obd-mirror-create",level:2},{value:"obd mirror list",id:"obd-mirror-list",level:2},{value:"obd mirror update",id:"obd-mirror-update",level:2},{value:"obd mirror disable",id:"obd-mirror-disable",level:2},{value:"obd mirror enable",id:"obd-mirror-enable",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h1,{id:"\u955c\u50cf\u548c\u4ed3\u5e93\u547d\u4ee4\u7ec4",children:"\u955c\u50cf\u548c\u4ed3\u5e93\u547d\u4ee4\u7ec4"}),"\n",(0,d.jsxs)(r.p,{children:["OBD \u6709\u591a\u7ea7\u547d\u4ee4\uff0c\u60a8\u53ef\u4ee5\u5728\u6bcf\u4e2a\u5c42\u7ea7\u4e2d\u4f7f\u7528 ",(0,d.jsx)(r.code,{children:"-h/--help"})," \u9009\u9879\u67e5\u770b\u5b50\u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002\u540c\u6837\u7684\uff0c\u5f53\u5404\u5c42\u7ea7\u7684\u5b50\u547d\u4ee4\u6267\u884c\u62a5\u9519\u65f6\uff0c\u60a8\u4ea6\u53ef\u4f7f\u7528 ",(0,d.jsx)(r.code,{children:"-v/--verbose"})," \u67e5\u770b\u547d\u4ee4\u7684\u8be6\u7ec6\u6267\u884c\u8fc7\u7a0b\u3002"]}),"\n",(0,d.jsx)(r.h2,{id:"obd-mirror-clone",children:"obd mirror clone"}),"\n",(0,d.jsx)(r.p,{children:"\u4f7f\u7528\u6b64\u547d\u4ee4\u53ef\u5c06\u4e00\u4e2a RPM \u5305\u590d\u5236\u5230\u672c\u5730\u955c\u50cf\u5e93\uff0c\u4e4b\u540e\u60a8\u53ef\u4ee5\u4f7f\u7528 OBD \u96c6\u7fa4\u4e2d\u76f8\u5173\u7684\u547d\u4ee4\u542f\u52a8\u955c\u50cf\u3002"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-shell",children:"obd mirror clone <path> [-f]\n"})}),"\n",(0,d.jsxs)(r.p,{children:["\u53c2\u6570 ",(0,d.jsx)(r.code,{children:"path"})," \u4e3a RPM \u5305\u7684\u8def\u5f84\u3002"]}),"\n",(0,d.jsxs)(r.p,{children:["\u9009\u9879 ",(0,d.jsx)(r.code,{children:"-f"})," \u4e3a ",(0,d.jsx)(r.code,{children:"--force"}),"\u3002",(0,d.jsx)(r.code,{children:"-f"})," \u4e3a\u53ef\u9009\u9009\u9879\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f\u3002\u5f00\u542f\u65f6\uff0c\u82e5\u955c\u50cf\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u5f3a\u5236\u8986\u76d6\u5df2\u6709\u955c\u50cf\u3002"]}),"\n",(0,d.jsx)(r.h2,{id:"obd-mirror-create",children:"obd mirror create"}),"\n",(0,d.jsxs)(r.p,{children:["\u4f7f\u7528\u8be5\u547d\u4ee4\u53ef\u4ee5\u4ee5\u672c\u5730\u76ee\u5f55\u4e3a\u57fa\u7840\u521b\u5efa\u4e00\u4e2a\u955c\u50cf\u3002\u6b64\u547d\u4ee4\u4e3b\u8981\u7528\u4e8e\u4f7f\u7528 OBD \u542f\u52a8\u81ea\u884c\u7f16\u8bd1\u7684 OceanBase \u5f00\u6e90\u8f6f\u4ef6\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u6b64\u547d\u4ee4\u5c06\u7f16\u8bd1\u4ea7\u7269\u52a0\u5165\u672c\u5730\u4ed3\u5e93\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(r.code,{children:"obd cluster"})," \u76f8\u5173\u7684\u547d\u4ee4\u542f\u52a8\u8fd9\u4e2a\u955c\u50cf\u3002"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-shell",children:"obd mirror create -n <component name> -p <your compile dir> -V <component version> [-t <tag>] [-f]\n"})}),"\n",(0,d.jsxs)(r.p,{children:["\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u6839\u636e\u6587\u6863 ",(0,d.jsx)(r.a,{href:"https://www.oceanbase.com/docs/community-observer-cn-0000000000160092",children:"\u4f7f\u7528\u6e90\u7801\u6784\u5efa OceanBase \u6570\u636e\u5e93"})," \u7f16\u8bd1 OceanBase \u6570\u636e\u5e93\uff0c\u5728\u7f16\u8bd1\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(r.code,{children:"make DESTDIR=./ install && obd mirror create -n oceanbase-ce -V <component version> -p ./usr/local"})," \u547d\u4ee4\u5c06\u7f16\u8bd1\u4ea7\u7269\u6dfb\u52a0\u81f3 OBD \u672c\u5730\u4ed3\u5e93\u3002"]}),"\n",(0,d.jsx)(r.p,{children:"\u9009\u9879\u8bf4\u660e\u89c1\u4e0b\u8868\uff1a"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u9009\u9879\u540d"}),(0,d.jsx)(r.th,{children:"\u662f\u5426\u5fc5\u9009"}),(0,d.jsx)(r.th,{children:"\u6570\u636e\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"-n/--name"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsxs)(r.td,{children:["\u7ec4\u4ef6\u540d\u3002\u5982\u679c\u60a8\u7f16\u8bd1\u7684\u662f OceanBase \u6570\u636e\u5e93\uff0c\u5219\u586b\u5199 ",(0,d.jsx)(r.code,{children:"oceanbase-ce"}),"\u3002\u5982\u679c\u60a8\u7f16\u8bd1\u7684\u662f ODP\uff0c\u5219\u586b\u5199 ",(0,d.jsx)(r.code,{children:"obproxy-ce"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"-p/--path"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"\u6267\u884c\u7f16\u8bd1\u547d\u4ee4\u65f6\u7684\u76ee\u5f55\u3002OBD \u4f1a\u6839\u636e\u7ec4\u4ef6\u81ea\u52a8\u4ece\u8be5\u76ee\u5f55\u4e0b\u83b7\u53d6\u6240\u9700\u7684\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u76ee\u5f55\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"-V/--version"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"\u7248\u672c\u53f7\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"-t/--tag"}),(0,d.jsx)(r.td,{children:"\u5426"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsxs)(r.td,{children:["\u955c\u50cf\u6807\u7b7e\u3002\u60a8\u53ef\u4ee5\u4e3a\u60a8\u7684\u521b\u5efa\u7684\u955c\u50cf\u5b9a\u4e49\u591a\u4e2a\u6807\u7b7e\uff0c\u4ee5\u82f1\u6587\u9017\u53f7 ",(0,d.jsx)(r.code,{children:","})," \u95f4\u9694\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"-f/--force"}),(0,d.jsx)(r.td,{children:"\u5426"}),(0,d.jsx)(r.td,{children:"bool"}),(0,d.jsx)(r.td,{children:"\u5f53\u955c\u50cf\u5df2\u5b58\u5728\uff0c\u6216\u8005\u6807\u7b7e\u5df2\u5b58\u5728\u65f6\u5f3a\u5236\u8986\u76d6\u3002\u9ed8\u8ba4\u4e0d\u5f00\u542f\u3002"})]})]})]}),"\n",(0,d.jsx)(r.h2,{id:"obd-mirror-list",children:"obd mirror list"}),"\n",(0,d.jsx)(r.p,{children:"\u4f7f\u7528\u8be5\u547d\u4ee4\u53ef\u663e\u793a\u955c\u50cf\u4ed3\u5e93\u6216\u955c\u50cf\u5217\u8868\u3002"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-shell",children:"obd mirror list [mirror repo name]\n"})}),"\n",(0,d.jsxs)(r.p,{children:["\u53c2\u6570 ",(0,d.jsx)(r.code,{children:"mirror repo name"})," \u4e3a\u955c\u50cf\u4ed3\u5e93\u540d\u3002\u8be5\u53c2\u6570\u4e3a\u53ef\u9009\u53c2\u6570\u3002\u4e3a\u7a7a\u65f6\u5c06\u663e\u793a\u955c\u50cf\u4ed3\u5e93\u5217\u8868\uff0c\u4e0d\u4e3a\u7a7a\u65f6\u5219\u663e\u793a\u5bf9\u5e94\u4ed3\u5e93\u7684\u955c\u50cf\u5217\u8868\u3002"]}),"\n",(0,d.jsx)(r.h2,{id:"obd-mirror-update",children:"obd mirror update"}),"\n",(0,d.jsx)(r.p,{children:"\u4f7f\u7528\u8be5\u547d\u4ee4\u53ef\u540c\u6b65\u5168\u90e8\u8fdc\u7a0b\u955c\u50cf\u4ed3\u5e93\u7684\u4fe1\u606f\u3002"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-shell",children:"obd mirror update\n"})}),"\n",(0,d.jsx)(r.h2,{id:"obd-mirror-disable",children:"obd mirror disable"}),"\n",(0,d.jsxs)(r.p,{children:["\u4f7f\u7528\u8be5\u547d\u4ee4\u53ef\u7981\u7528\u8fdc\u7a0b\u955c\u50cf\u4ed3\u5e93\u3002\u5982\u82e5\u9700\u8981\u7981\u7528\u6240\u6709\u8fdc\u7a0b\u955c\u50cf\u4ed3\u5e93\uff0c\u53ef\u6267\u884c\u547d\u4ee4 ",(0,d.jsx)(r.code,{children:"obd mirror disable remote"}),"\u3002"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-shell",children:"obd mirror disable <mirror repo name>\n"})}),"\n",(0,d.jsxs)(r.p,{children:["\u53c2\u6570 ",(0,d.jsx)(r.code,{children:"mirror repo name"})," \u4e3a\u9700\u7981\u7528\u7684\u955c\u50cf\u4ed3\u5e93\u540d\u3002\u5982\u679c\u6307\u5b9a\u4e3a ",(0,d.jsx)(r.code,{children:"remote"}),"\uff0c\u5219\u4f1a\u7981\u7528\u6240\u6709\u8fdc\u7a0b\u955c\u50cf\u4ed3\u5e93\u3002"]}),"\n",(0,d.jsx)(r.h2,{id:"obd-mirror-enable",children:"obd mirror enable"}),"\n",(0,d.jsx)(r.p,{children:"\u4f7f\u7528\u8be5\u547d\u4ee4\u53ef\u542f\u7528\u8fdc\u7a0b\u955c\u50cf\u4ed3\u5e93\u3002"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-shell",children:"obd mirror enable <mirror repo name>\n"})}),"\n",(0,d.jsxs)(r.p,{children:["\u53c2\u6570 ",(0,d.jsx)(r.code,{children:"mirror repo name"})," \u4e3a\u9700\u542f\u52a8\u7684\u955c\u50cf\u4ed3\u5e93\u540d\u3002\u5982\u679c\u6307\u5b9a\u4e3a ",(0,d.jsx)(r.code,{children:"remote"}),"\uff0c\u5219\u4f1a\u542f\u7528\u6240\u6709\u8fdc\u7a0b\u955c\u50cf\u4ed3\u5e93\u3002"]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var d=n(96540);const o={},s=d.createContext(o);function i(e){const r=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),d.createElement(s.Provider,{value:r},e.children)}}}]);