(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{830:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return c}),t.d(n,"default",function(){return m});t(16);var a=t(11),l=t.n(a),r=t(868),o=(t(3),t(91)),u=t(840),i=t(6),d=t(10),c={},s={_frontmatter:c},p=u.a;function m(e){var n=e.components,t=l()(e,["components"]);return Object(o.mdx)(p,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"ValidationFormGroup"),Object(o.mdx)("p",null,"Handles bootstrap style field validation and handles related aria attributes."),Object(o.mdx)("p",null,"Manages the rendering of bootstrap-style:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Help text"),Object(o.mdx)("li",{parentName:"ul"},"Valid and invalid feedback")),Object(o.mdx)("p",null,"For children of type input, textarea, and select:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Appends bootstrap validation class names"),Object(o.mdx)("li",{parentName:"ul"},"Appends aria-describedby attributes (for help text and feedback)")),Object(o.mdx)("h5",null,"basic usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),'<ValidationFormGroup\n  for="firstName"\n  helpText="This is your name."\n>\n  <label htmlFor="firstName">First Name</label>\n  <Input\n    type="text"\n    id="firstName"\n    name="first-name"\n    value="Casey"\n    onChange={() => {}}\n  />\n</ValidationFormGroup>\n')),Object(o.mdx)("h5",null,"invalid message"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),'<ValidationFormGroup\n  for="firstName"\n  invalid\n  invalidMessage="Wrong!"\n>\n  <label htmlFor="firstName">First Name</label>\n  <Input\n    type="text"\n    id="firstName"\n    name="first-name"\n    value="Casey"\n    onChange={() => {}}\n  />\n</ValidationFormGroup>\n')),Object(o.mdx)("h5",null,"valid message"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),'<ValidationFormGroup\n  for="firstName"\n  valid\n  validMessage="What a nice name!"\n>\n  <label htmlFor="firstName">First Name</label>\n  <Input\n    type="text"\n    id="firstName"\n    name="first-name"\n    value="Casey"\n    onChange={() => {}}\n  />\n</ValidationFormGroup>\n')),Object(o.mdx)("h5",null,"with any kind of input"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),'<ValidationFormGroup\n  for="weatherToday"\n  helpText="Look out the window to see."\n  valid\n  validMessage="Correct!"\n>\n  <label htmlFor="weatherToday">How is the weather today?</label>\n  <select\n    className="form-control"\n    id="weatherToday"\n    name="weather"\n    value="Sunny"\n    onChange={() => {}}\n  >\n    <option>Sunny</option>\n    <option>Cloudy</option>\n    <option>Rainy</option>\n    <option>Snowy</option>\n  </select>\n</ValidationFormGroup>\n')),Object(o.mdx)("h5",null,"Props"),Object(o.mdx)(i.b,{query:"3606085719",render:function(e){var n=e.componentMetadata;return null==n?null:Object(o.mdx)(d.a,{propMetaData:n.props,mdxType:"PropsTable"})},mdxType:"StaticQuery",data:r}))}m.isMDXComponent=!0},840:function(e,n,t){"use strict";var a=t(3),l=t.n(a),r=t(8),o=t.n(r),u=t(841),i=t.n(u),d=t(91),c=t(151),s=(t(222),{pre:function(e){return l.a.createElement("div",e)},code:c.a}),p=function(e){var n=e.children,t=n;return"string"==typeof t&&(t=l.a.createElement(i.a,null,n)),l.a.createElement(d.MDXProvider,{components:s},t)};p.propTypes={children:o.a.oneOfType([o.a.string,o.a.node]).isRequired},n.a=function(e){return l.a.createElement("div",null,l.a.createElement(p,null,e.children))}},841:function(e,n,t){var a=t(842);t(41),t(38),t(34),t(58);var l=t(13),r=t(11),o=t(3),u=t(91),i=u.useMDXComponents,d=u.mdx,c=t(150).useMDXScope;e.exports=function(e){var n=e.scope,t=e.components,u=e.children,s=r(e,["scope","components","children"]),p=i(t),m=c(n),f=o.useMemo(function(){if(!u)return null;var e=l({React:o,mdx:d},m),n=Object.keys(e),t=n.map(function(n){return e[n]});return a(Function,["_fn"].concat(n,[""+u])).apply(void 0,[{}].concat(t))},[u,n]);return o.createElement(f,l({components:p},s))}},842:function(e,n,t){var a=t(843);function l(n,t,r){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=l=function(e,n,t){var l=[null];l.push.apply(l,n);var r=new(Function.bind.apply(e,l));return t&&a(r,t.prototype),r}:e.exports=l=Reflect.construct,l.apply(null,arguments)}e.exports=l},843:function(e,n){function t(n,a){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,a)}e.exports=t},868:function(e){e.exports={data:{componentMetadata:{displayName:"ValidationFormGroup",props:[{defaultValue:null,name:"for",type:{name:"string",raw:null,value:null},required:!0,docblock:"",doclets:[]},{defaultValue:{value:"undefined"},name:"className",type:{name:"string",raw:null,value:null},required:!1,docblock:"",doclets:[]},{defaultValue:{value:"undefined"},name:"invalid",type:{name:"bool",raw:null,value:null},required:!1,docblock:"",doclets:[]},{defaultValue:{value:"undefined"},name:"valid",type:{name:"bool",raw:null,value:null},required:!1,docblock:"",doclets:[]},{defaultValue:{value:"undefined"},name:"validMessage",type:{name:"node",raw:null,value:null},required:!1,docblock:"",doclets:[]},{defaultValue:{value:"undefined"},name:"invalidMessage",type:{name:"node",raw:null,value:null},required:!1,docblock:"",doclets:[]},{defaultValue:{value:"undefined"},name:"helpText",type:{name:"node",raw:null,value:null},required:!1,docblock:"",doclets:[]},{defaultValue:{value:"undefined"},name:"children",type:{name:"node",raw:null,value:null},required:!1,docblock:"",doclets:[]}]}}}}}]);
//# sourceMappingURL=component---src-pages-components-validationformgroup-mdx-acfe30c921a39971f02b.js.map