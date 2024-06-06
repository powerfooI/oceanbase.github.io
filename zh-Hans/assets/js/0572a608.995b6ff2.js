"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[5136],{55079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=t(74848),o=t(28453);const s={slug:"hello-oceanbase",title:"Hello OceanBase! The first lesson for becoming an OceanBase contributor"},i="Introduction",c={permalink:"/docs-playground/zh-Hans/blog/hello-oceanbase",editUrl:"https://github.com/powerfooi/docs-playground/tree/main/blog/misc-hello-oceanbase.md",source:"@site/blog/misc-hello-oceanbase.md",title:"Hello OceanBase! The first lesson for becoming an OceanBase contributor",description:"About the author: Xia Ke, a contributor of OceanBase Community, has engaged in the design and development of financial core systems for years. He is now working on the investigation of China-made databases in a subsidiary of a stock exchange, and has recently obtained OceanBase Certified Associate (OBCA) and PingCAP Certified TiDB Associate (PCTA) certificates.",date:"2024-06-03T13:23:07.000Z",formattedDate:"2024\u5e746\u67083\u65e5",tags:[],readingTime:7.525,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"hello-oceanbase",title:"Hello OceanBase! The first lesson for becoming an OceanBase contributor"},unlisted:!1,prevItem:{title:"Flink CDC + OceanBase integration solution for full and incremental synchronization",permalink:"/docs-playground/zh-Hans/blog/flink-and-ob"},nextItem:{title:"How OB Cloud Achieves Cost Reduction and Efficiency Improvement in Replacing MySQL Scenarios \uff1f",permalink:"/docs-playground/zh-Hans/blog/obcloud"}},r={authorsImageUrls:[]},l=[{value:"An OceanBase cluster",id:"an-oceanbase-cluster",level:2},{value:"OceanBase source code",id:"oceanbase-source-code",level:2},{value:"Register a built-in function",id:"register-a-built-in-function",level:2},{value:"Diagram of the expr class",id:"diagram-of-the-expr-class",level:2},{value:"Develop Hello OceanBase",id:"develop-hello-oceanbase",level:2},{value:"1. Create the ObExprHello class",id:"1-create-the-obexprhello-class",level:3},{value:"2. Modify or add the function name definition",id:"2-modify-or-add-the-function-name-definition",level:3},{value:"3. Modify the factory class",id:"3-modify-the-factory-class",level:3},{value:"4. Add IDs",id:"4-add-ids",level:3},{value:"5. Modify project files",id:"5-modify-project-files",level:3},{value:"6. ob_expr_hello.cpp",id:"6-ob_expr_hellocpp",level:3},{value:"7.ob_expr_eval_functions.cpp",id:"7ob_expr_eval_functionscpp",level:3},{value:"Compile the function",id:"compile-the-function",level:2},{value:"Verify the function",id:"verify-the-function",level:2},{value:"1. Replace the observer process",id:"1-replace-the-observer-process",level:3},{value:"2. Start the observer process",id:"2-start-the-observer-process",level:3},{value:"Test the function",id:"test-the-function",level:2},{value:"Suggestions",id:"suggestions",level:3},{value:"Afterword",id:"afterword",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"About the author: Xia Ke, a contributor of OceanBase Community, has engaged in the design and development of financial core systems for years. He is now working on the investigation of China-made databases in a subsidiary of a stock exchange, and has recently obtained OceanBase Certified Associate (OBCA) and PingCAP Certified TiDB Associate (PCTA) certificates."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The other day I read this post ",(0,a.jsx)(n.a,{href:"https://open.oceanbase.com/blog/8600156?currentPage=undefined",children:"Decoding OceanBase (11): Expressions and Functions"})," by Zhuweng, a Peking University alumnus, director of OceanBase kernel R&D. At the end, he mentioned that creating a built-in function is the first test for new recruits joining the SQL team of OceanBase. Though having no intention of looking for a new job, I was so intrigued by this ",(0,a.jsx)(n.strong,{children:"first test"}),'. I am not a database administrator, so I have not spent much time working with databases until lately when I started learning about top-notch home-grown database products for job reasons. As far as my job description is concerned, I have "walked out of my circle" to do the test. After reading posts from popular IT communities and participating in open online courses, I was deeply impressed by the vigorous momentum of the database ecosystem in China. I want to say thank you to database developers and engineers who have shared their experience, which enables laymen like me to quickly get on track. Benefiting from their good deeds, I would like to take this opportunity to make my contributions to the OceanBase community, hoping that you might find it useful.']}),"\n",(0,a.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:["Seeing ",(0,a.jsx)(n.code,{children:"Hello OceanBase"}),' in the title, you may think of "Hello World". Yes, that is exactly the vibe I wanted to strike here. This post is a "Hello World" demo that shows you how to create or modify a built-in function in OceanBase Database, or in other words, how to do secondary development based on OceanBase Database Community Edition. In addition to being motivated by ',(0,a.jsx)(n.code,{children:"Zhuweng"}),", I want to take this test also because of the requirement for extending database capabilities by using external functions. Oracle allows users to call external C or JAVA functions, just like calling built-in functions. In a sense, this feature makes a database more capable. Users can call external C or JAVA functions to, for example, implement complex mathematical algorithms, which may otherwise cause troubles by using SQL statements or Oracle built-in functions. Of course, you can always implement those algorithms at the business layer, but maybe we can talk about that in another post. Based on my research on a bunch of home-grown databases, I have come up with similar procedures for using external functions. You can take a look at them in my posts ",(0,a.jsx)(n.a,{href:"https://blog.csdn.net/xk_xx/article/details/123091480?spm=1001.2014.3001.5501",children:"Implement Oracle external functions in Dameng DM8 Database"})," and ",(0,a.jsx)(n.a,{href:"https://blog.csdn.net/xk_xx/article/details/123011397?spm=1001.2014.3001.5501",children:"Implement PostgreSQL UDFs by using the contrib module"}),'. Calling external functions in DM8 is basically the same as in Oracle, except for some slight implementation differences. Some databases, such as openGauss, MogDB, TDSQL PostgreSQL, and KingbaseES, come with an PostgreSQL kernel, and they inherently support the extension mechanisms of PostgreSQL. To the best of my knowledge, however, OceanBase Database does not support external functions. So, I wondered if I could not find a way out, a way in might do the trick. Let\'s start with "Hello OceanBase".']}),"\n",(0,a.jsx)(n.h1,{id:"preparations",children:"Preparations"}),"\n",(0,a.jsx)(n.h2,{id:"an-oceanbase-cluster",children:"An OceanBase cluster"}),"\n",(0,a.jsxs)(n.p,{children:["You can find tons of posts in the community about how to deploy OceanBase Database in all kinds of supported modes. Here are some of my posts in this regard: ",(0,a.jsx)(n.a,{href:"https://blog.csdn.net/xk_xx/article/details/122757336",children:"Use Docker to deploy OceanBase Database"}),", ",(0,a.jsx)(n.a,{href:"https://blog.csdn.net/xk_xx/article/details/122763419",children:"Manually deploy OceanBase Database in standalone mode"}),", and ",(0,a.jsx)(n.a,{href:"https://blog.csdn.net/xk_xx/article/details/123166584",children:"Use OBD to locally deploy OceanBase Database in standalone mode"}),". To implement the demo, I recommend that you pick an easy one and use OceanBase Deployer (OBD) to locally deploy a standalone OceanBase database in a development environment."]}),"\n",(0,a.jsx)(n.h2,{id:"oceanbase-source-code",children:"OceanBase source code"}),"\n",(0,a.jsxs)(n.p,{children:["You can get the latest source code by running the following command: ",(0,a.jsx)(n.code,{children:"git clone https://github.com/oceanbase/oceanbase"})]}),"\n",(0,a.jsx)(n.h1,{id:"code-structure",children:"Code structure"}),"\n",(0,a.jsxs)(n.p,{children:["You can take a look at the ",(0,a.jsx)(n.code,{children:"Decoding OceanBase"})," serial posts of the community for details."]}),"\n",(0,a.jsxs)(n.p,{children:["Here, let me briefly describe the code related to the ",(0,a.jsx)(n.code,{children:"sql/resolver/expr"})," directory."]}),"\n",(0,a.jsx)(n.h2,{id:"register-a-built-in-function",children:"Register a built-in function"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/ec1d519b-9b37-4d6e-9b86-68074ff85e3b/image/2022-03-04/78c15e68-ea1b-40f0-b4e7-07b71454a82b.png",alt:""})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-C++",children:'    #define REG_OP(OpClass)                                                \\do {                                                                 \\\n        OpClass op(alloc);                                                 \\if (OB_UNLIKELY(i >= EXPR_OP_NUM)) {                               \\\n          LOG_ERROR("out of the max expr");                                \\\n        } else {                                                           \\\n          NAME_TYPES[i].name_ = op.get_name();                             \\\n          NAME_TYPES[i].type_ = op.get_type();                             \\\n          OP_ALLOC[op.get_type()] = ObExprOperatorFactory::alloc<OpClass>; \\\n          i++;                                                             \\\n        }                                                                  \\\n      } while (0)\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"diagram-of-the-expr-class",children:"Diagram of the expr class"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/69375afc-a8a4-4cdf-b339-5cd3ebfe84be/image/2022-03-04/726f726f-7ed3-4060-b909-6595697154b3.png",alt:""})}),"\n",(0,a.jsx)(n.p,{children:"Built-in functions mainly implement the ObExprOperator interface class, which contains many functions."}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"calc_result_type0"})," and ",(0,a.jsx)(n.code,{children:"calc_result0"})," functions specify the memory allocation and type definition for function registration. The ",(0,a.jsx)(n.code,{children:"cg_expr"})," function registers the function pointer to the ",(0,a.jsx)(n.code,{children:"eval_func_"})," function. The built-in function ",(0,a.jsx)(n.code,{children:"rt_expr.eval_func_ = ObExprHello::eval_hello;"})," is called by using the function pointer. ",(0,a.jsx)(n.code,{children:"eval_hello"})," is the function that actually do the job."]}),"\n",(0,a.jsx)(n.h2,{id:"develop-hello-oceanbase",children:"Develop Hello OceanBase"}),"\n",(0,a.jsx)(n.p,{children:"In this project, you need to modify the files shown in the following figure."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/b33bf6b7-47c4-4d2e-b3f8-31e1a2349567/image/2022-03-04/38ff080c-902e-4976-9b12-6113ba751b0d.png",alt:""})}),"\n",(0,a.jsx)(n.h3,{id:"1-create-the-obexprhello-class",children:"1. Create the ObExprHello class"}),"\n",(0,a.jsxs)(n.p,{children:["Many implementation examples are provided in the ",(0,a.jsx)(n.code,{children:"sql/resolver/expr"})," directory. You can select reference objects as needed."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-C++",children:'    #ifndef _OB_EXPR_HELLO_H_\n    #define  _OB_EXPR_HELLO_H_\n\n    #include  "sql/engine/expr/ob_expr_operator.h"\n\n    namespace  oceanbase {\n    namespace  sql {\n    class  ObExprHello : public  ObStringExprOperator {\n    public:\n      explicit  ObExprHello(common::ObIAllocator&  alloc);\n      virtual  ~ObExprHello();\n      virtual  int  calc_result_type0(ObExprResType&  type, common::ObExprTypeCtx&  type_ctx) const;\n      virtual  int  calc_result0(common::ObObj&  result, common::ObExprCtx&  expr_ctx) const;\n\n      static  int  eval_hello(const  ObExpr&  expr, ObEvalCtx&  ctx, ObDatum&  expr_datum);\n      virtual  int  cg_expr(ObExprCGCtx&  op_cg_ctx, const  ObRawExpr&  raw_expr, ObExpr&  rt_expr) const  override;\n\n    private:\n      DISALLOW_COPY_AND_ASSIGN(ObExprHello);\n    };\n\n    } /* namespace sql */\n    } /* namespace oceanbase */\n\n    #endif\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The content of the new file ",(0,a.jsx)(n.code,{children:"ob_expr_hello.cpp"})," is as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-C++",children:'    #define  USING_LOG_PREFIX SQL_ENG\n    #include  "sql/engine/expr/ob_expr_hello.h"\n    static  const  char* SAY_HELLO = "Hello OceanBase!";\n\n    namespace  oceanbase {\n    using  namespace  common;\n    namespace  sql {\n\n    ObExprHello::ObExprHello(ObIAllocator& alloc) : ObStringExprOperator(alloc, T_FUN_SYS_HELLO, N_HELLO, 0)\n    {}\n\n    ObExprHello::~ObExprHello()\n    {}\n\n    int  ObExprHello::calc_result_type0(ObExprResType&  type, ObExprTypeCtx&  type_ctx) const\n    {\n      UNUSED(type_ctx);\n      type.set_varchar();\n      type.set_length(static_cast<common::ObLength>(strlen(SAY_HELLO)));\n      type.set_default_collation_type();\n      type.set_collation_level(CS_LEVEL_SYSCONST);\n      return  OB_SUCCESS;\n    }\n\n    int  ObExprHello::calc_result0(ObObj&  result, ObExprCtx&  expr_ctx) const\n    {\n      UNUSED(expr_ctx);\n\n      result.set_varchar(common::ObString(SAY_HELLO));\n      result.set_collation(result_type_);\n      return  OB_SUCCESS;\n    }\n\n    int  ObExprHello::eval_hello(const  ObExpr&  expr, ObEvalCtx&  ctx, ObDatum&  expr_datum)\n    {\n      UNUSED(expr);\n      UNUSED(ctx);\n      expr_datum.set_string(common::ObString(SAY_HELLO));\n      return  OB_SUCCESS;\n    }\n\n    int  ObExprHello::cg_expr(ObExprCGCtx&  op_cg_ctx, const  ObRawExpr&  raw_expr, ObExpr&  rt_expr) const\n    {\n      UNUSED(raw_expr);\n      UNUSED(op_cg_ctx);\n      rt_expr.eval_func_ = ObExprHello::eval_hello;\n      return  OB_SUCCESS;\n    }\n    }  // namespace sql\n    }  // namespace oceanbase\n'})}),"\n",(0,a.jsx)(n.h3,{id:"2-modify-or-add-the-function-name-definition",children:"2. Modify or add the function name definition"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ob_name_def.h"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The function name is registered here and can be used for syntax parsing."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/889fe5d5-bcc4-49ee-90c2-65c8d5a8e0d7/image/2022-03-04/0736c95b-c1be-4e3d-984b-2422fd3dee7f.png",alt:""}),(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/d03c52a3-a866-4f3d-bac7-ac5201428edc/image/2022-03-04/606b6b77-f22a-4b38-9515-3c9cf03a3ffb.png",alt:""})]}),"\n",(0,a.jsx)(n.h3,{id:"3-modify-the-factory-class",children:"3. Modify the factory class"}),"\n",(0,a.jsx)(n.p,{children:"ob_expr_operator_factory.cpp"}),"\n",(0,a.jsx)(n.p,{children:"The function pointer is registered at this step, and will be used for calling the specific built-in function at runtime."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/f07b83a3-4d9e-4169-bd6c-620e9a1b02b8/image/2022-03-04/d67d1e07-8e82-4169-b400-19f30d813d19.png",alt:""})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Register a built-in function"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/e544598d-cb7d-4b8d-ae8a-85fa04f802c8/image/2022-03-04/bb53c1e7-27f7-4370-a7cc-619241c945b2.png",alt:""})}),"\n",(0,a.jsx)(n.h3,{id:"4-add-ids",children:"4. Add IDs"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ob_item_type.h"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"You can take an ID as a key that points to the function pointer."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/597a87f1-1998-41f0-8c5d-29a818026d92/image/2022-03-04/8223570b-4af3-438d-a533-e20eec745e17.png",alt:""})}),"\n",(0,a.jsx)(n.h3,{id:"5-modify-project-files",children:"5. Modify project files"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"CMakeLists.txt"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Add the new ObExprHello function to the project for compilation."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/7128397f-fcd9-4320-bcb7-982fe9b80a12/image/2022-03-04/458ceecc-d9ba-4fdd-a7ad-c00b89f39935.png",alt:""})}),"\n",(0,a.jsx)(n.h3,{id:"6-ob_expr_hellocpp",children:"6. ob_expr_hello.cpp"}),"\n",(0,a.jsx)(n.h3,{id:"",children:(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/98290631-db52-4f32-bf1f-4b185907c9ac/image/2022-03-04/2ac97743-4494-4d81-ba5f-25dec9aabe2c.png",alt:""})}),"\n",(0,a.jsx)(n.h3,{id:"-1"}),"\n",(0,a.jsx)(n.h3,{id:"7ob_expr_eval_functionscpp",children:"7.ob_expr_eval_functions.cpp"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/b3d7d96d-7c46-445f-883d-473ecb068cd4/image/2022-03-04/d587de86-0571-42bc-8f1e-3081b47b6899.png",alt:""})}),"\n",(0,a.jsx)(n.h2,{id:"compile-the-function",children:"Compile the function"}),"\n",(0,a.jsx)(n.p,{children:"I'll skip this part. Please read other posts about how to compile the OceanBase source code for details."}),"\n",(0,a.jsx)(n.p,{children:"And by the way, I have found some compilation errors in the latest code and created a pull request on GitHub, which has been accepted but not yet been merged."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"verify-the-function",children:"Verify the function"}),"\n",(0,a.jsx)(n.h3,{id:"1-replace-the-observer-process",children:"1. Replace the observer process"}),"\n",(0,a.jsxs)(n.p,{children:["Create a soft connection to points the observer process in the ",(0,a.jsx)(n.code,{children:"/root/observer/bin"})," directory to the observer process in the ",(0,a.jsx)(n.code,{children:"/root/.obd/repository/oceanbase-ce/3.1.2/7fafba0fac1e90cbd1b5b7ae5fa129b64dc63aed/bin"})," directory."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/83dba035-7b05-49c2-828e-0da3bd8c0f8c/image/2022-03-04/d8015f5f-b55c-4bee-bfe1-e16bad69b2ec.png",alt:""})}),"\n",(0,a.jsx)(n.h3,{id:"2-start-the-observer-process",children:"2. Start the observer process"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/9d017a42-5261-4e8a-84e8-e578707c3c41/image/2022-03-04/8de93958-9c77-4932-ac53-55f2389d153f.png",alt:""})}),"\n",(0,a.jsx)(n.p,{children:"You may notice that the version is 3.1.3, which is not released yet. We got that result because the latest code was used."}),"\n",(0,a.jsx)(n.h2,{id:"test-the-function",children:"Test the function"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://gw.alipayobjects.com/zos/oceanbase/57787d55-ce12-4960-8e87-f39478f97f68/image/2022-03-04/60705b08-75e1-477b-bf21-5d07bd7902ef.png",alt:""})}),"\n",(0,a.jsx)(n.h3,{id:"suggestions",children:"Suggestions"}),"\n",(0,a.jsx)(n.p,{children:"In the past few months, I have been researching home-grown databases, such as OceanBase Database, TiDB, openGauss, MogDB, and Dameng. They are capable of online transaction processing (OLTP), online analytical processing (OLAP), or hybrid transaction/analytical processing (HTAP). I am not bold enough to compare them as a layman, but as a user, I would like to bring up a few points based on my experience with OceanBase Database."}),"\n",(0,a.jsx)(n.p,{children:"It took me some time to build the environment, which is acceptable because, after all, it is a distributed system. However, it would be great if users are provided with a tool to quickly build a demo cluster, like the playground of TiDB."}),"\n",(0,a.jsx)(n.p,{children:"The system is resource-consuming. Users with small-specification devices may suffer deployment failures due to resource insufficiency. They will be grateful if small-specification deployment is supported."}),"\n",(0,a.jsx)(n.p,{children:"Maybe OceanBase Database can consider supporting user-defined extension interfaces? Some may think that is not a necessary feature, but it is quite useful in some enterprise-level applications, and wins OceanBase a point or two when comparing it to Oracle."}),"\n",(0,a.jsx)(n.p,{children:'OceanBase Database Enterprise Edition can support more driver APIs for Oracle tenants. For more information, see "Use JDBC to connect to OceanBase Database through JayDeBeApi in Python".'}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"afterword",children:"Afterword"}),"\n",(0,a.jsx)(n.p,{children:"Most of posts in the community are intended for database administrators, focusing on deployment, migration, application, performance, and O&M. This one may not attract a large audience. However, I hope it can encourage more better content on the secondary development of open source databases."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var a=t(96540);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);