"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[8399],{56446:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=n(74848),t=n(28453);const s={},a="Deploy",l={id:"ob-operator/deploy-ob-operator",title:"Deploy",description:"This topic describes how to deploy ob-operator.",source:"@site/docs/ob-operator/300.deploy-ob-operator.md",sourceDirName:"ob-operator",slug:"/ob-operator/deploy-ob-operator",permalink:"/docs-playground/docs/ob-operator/deploy-ob-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/ob-operator/300.deploy-ob-operator.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{}},c={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use Helm to deploy ob-operator",id:"use-helm-to-deploy-ob-operator",level:2},{value:"Use configuration files to deploy ob-operator",id:"use-configuration-files-to-deploy-ob-operator",level:2},{value:"View the deployment result",id:"view-the-deployment-result",level:2}];function p(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"deploy",children:"Deploy"}),"\n",(0,r.jsx)(o.p,{children:"This topic describes how to deploy ob-operator."}),"\n",(0,r.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(o.p,{children:["ob-operator depends on cert-manager. Before you deploy ob-operator, make sure that you have installed cert-manager. For more information about how to install cert-manager, see the ",(0,r.jsx)(o.a,{href:"https://cert-manager.io/docs/installation/",children:"installation document"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"use-helm-to-deploy-ob-operator",children:"Use Helm to deploy ob-operator"}),"\n",(0,r.jsxs)(o.p,{children:["You can deploy ob-operator by using Helm. For more information about how to install Helm, see the documentation on ",(0,r.jsx)(o.a,{href:"https://github.com/helm/helm",children:"GitHub"}),". After you install Helm, run the following command to deploy ob-operator:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"helm repo add ob-operator https://oceanbase.github.io/ob-operator/\nhelm install ob-operator ob-operator/ob-operator --namespace=oceanbase-system --create-namespace --version=2.1.0\n"})}),"\n",(0,r.jsx)(o.p,{children:"The parameters are described as follows:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["namespace: the namespace for ob-operator. You can specify a custom namespace as needed. We recommend that you use ",(0,r.jsx)(o.code,{children:"oceanbase-system"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"version: the version of ob-operator. We recommend that you use the latest version."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"use-configuration-files-to-deploy-ob-operator",children:"Use configuration files to deploy ob-operator"}),"\n",(0,r.jsx)(o.p,{children:"You can deploy ob-operator by using the configuration file for the stable or developing version of ob-operator as needed."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Deploy the stable version of ob-operator"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/oceanbase/ob-operator/2.1.0_release/deploy/operator.yaml\n"})}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Deploy the developing version of ob-operator"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/oceanbase/ob-operator/master/deploy/operator.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"We recommend that you use the configuration file for the stable version of ob-operator."}),"\n",(0,r.jsx)(o.h2,{id:"view-the-deployment-result",children:"View the deployment result"}),"\n",(0,r.jsx)(o.p,{children:"After the deployment is completed, you can run the following command to view the custom resource definitions (CRDs):"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"kubectl get crds\n"})}),"\n",(0,r.jsx)(o.p,{children:"If the output is similar to the following example, the CRDs are deployed:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"NAME                                            CREATED AT\nobparameters.oceanbase.oceanbase.com             2023-11-12T08:06:58Z\nobservers.oceanbase.oceanbase.com                2023-11-12T08:06:58Z\nobtenantbackups.oceanbase.oceanbase.com          2023-11-12T08:06:58Z\nobtenantrestores.oceanbase.oceanbase.com         2023-11-12T08:06:58Z\nobzones.oceanbase.oceanbase.com                  2023-11-12T08:06:58Z\nobtenants.oceanbase.oceanbase.com                2023-11-12T08:06:58Z\nobtenantoperations.oceanbase.oceanbase.com       2023-11-12T08:06:58Z\nobclusters.oceanbase.oceanbase.com               2023-11-12T08:06:58Z\nobtenantbackuppolicies.oceanbase.oceanbase.com   2023-11-12T08:06:58Z\n"})}),"\n",(0,r.jsx)(o.p,{children:"Run the following command to check whether ob-operator is deployed:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"kubectl get pods -n oceanbase-system\n"})}),"\n",(0,r.jsx)(o.p,{children:"The following result is returned. If all the containers are ready and in the running state, ob-operator is deployed."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"NAME                                            READY   STATUS    RESTARTS   AGE\noceanbase-controller-manager-86cfc8f7bf-4hfnj   2/2     Running   0          1m\n"})})]})}function d(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>l});var r=n(96540);const t={},s=r.createContext(t);function a(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);