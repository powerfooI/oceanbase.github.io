"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[1647],{53341:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(74848),t=r(28453);const a={},s="Manage clusters",c={id:"ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/cluster-management-intro",title:"Manage clusters",description:"ob-operator defines the following custom resource definitions (CRDs) based on the deployment mode of OceanBase clusters:",source:"@site/docs/ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/100.cluster-management-intro.md",sourceDirName:"ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator",slug:"/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/cluster-management-intro",permalink:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/cluster-management-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/ob-operator/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/100.cluster-management-intro.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{}},i={},d=[];function l(e){const o={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"manage-clusters",children:"Manage clusters"}),"\n",(0,n.jsx)(o.p,{children:"ob-operator defines the following custom resource definitions (CRDs) based on the deployment mode of OceanBase clusters:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"obclusters.oceanbase.oceanbase.com"})," defines OceanBase clusters. You can define OceanBase clusters and perform cluster O&M tasks by modifying this resource definition."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"obzones.oceanbase.oceanbase.com"})," defines a specific zone and is used for O&M of the zone. Generally, you do not need to modify this resource definition. ob-operator automatically maintains this resource definition."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"observers.oceanbase.oceanbase.com"})," defines a specific OBServer node and is used for O&M of the OBServer node. Generally, you do not need to modify this resource definition. ob-operator automatically maintains this resource definition."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"obparameters.oceanbase.oceanbase.com"})," defines parameters of OceanBase Database and is used for O&M of parameters. Generally, you do not need to modify this resource definition. ob-operator automatically maintains this resource definition."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["You can implement the O&M of OceanBase clusters by creating or modifying ",(0,n.jsx)(o.code,{children:"obparameters.oceanbase.oceanbase.com"}),". For example, you can perform the following O&M tasks:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/create-cluster",children:"Create a cluster"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/zone-management/add-zone",children:"Add zones to a cluster"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/zone-management/delete-zone",children:"Delete zones from a cluster"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/server-management/add-server",children:"Add OBServer nodes to zones"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/server-management/delete-server",children:"Delete OBServer nodes from zones"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/upgrade-cluster-of-ob-operator",children:"Upgrade a cluster"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/parameter-management",children:"Manage parameters"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs-playground/docs/ob-operator/ob-operator-user-guide/cluster-management-of-ob-operator/delete-cluster",children:"Delete a cluster"})}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>s,x:()=>c});var n=r(96540);const t={},a=n.createContext(t);function s(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);