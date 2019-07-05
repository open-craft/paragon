(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{838:function(t,e,n){"use strict";n.r(e);var o=n(845),s=n(3),a=n.n(s),r=n(6),i=n(57),u=(n(92),n(8)),l=n.n(u);function d(t){var e=t.status;return e?a.a.createElement("span",{className:"status-indicator "+e.toLowerCase().replace(" ","-")},a.a.createElement("span",null,e)):null}d.propTypes={status:l.a.string.isRequired};var p=n(152);e.default=function(){return a.a.createElement("div",null,a.a.createElement(p.a,{title:"Status"}),a.a.createElement("h1",null,"Library Status"),a.a.createElement("h3",null,"Components Status"),a.a.createElement(r.b,{query:"1862336286",render:function(t){var e=t.allMdx;if(!e||!e.nodes)return null;var n=e.nodes.map(function(t){return t.frontmatter});return a.a.createElement(i.a,{className:"pgn-doc__status-table",data:n.map(function(t){var e=t.title,n=t.status,o=t.designStatus,s=t.devStatus,r=t.notes;return{name:a.a.createElement("div",null,a.a.createElement("h6",null,e," ",a.a.createElement(d,{status:n})),a.a.createElement("pre",null,r)),designStatus:a.a.createElement(d,{status:o}),devStatus:a.a.createElement(d,{status:s})}}),columns:[{label:"Component",key:"name",width:"col-2"},{label:"Design",key:"designStatus",width:"col-3"},{label:"Development",key:"devStatus",width:"col-3"}]})},data:o}))}},845:function(t){t.exports={data:{allMdx:{nodes:[{frontmatter:{designStatus:"To Do",devStatus:"To Do",status:"Needs Work",notes:"Reassess default separator icons and any other style changes.\nHas overly complex implementation.\nMust remove baked in English labels.\nEliminate unnecessary props.\n",title:"Breadcrumbs",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"Done",status:"Stable",notes:"",title:"Button",type:"component"}},{frontmatter:{designStatus:"TBD",devStatus:"To Do",status:"Deprecate Soon",notes:"Replaced by Input and ValidationFormGroup\n",title:"Checkbox",type:"component"}},{frontmatter:{designStatus:"To Do",devStatus:"To Do",status:"Needs Work",notes:"Refactor to use Input component and refresh checkbox designs\n",title:"CheckboxGroup",type:"component"}},{frontmatter:{designStatus:"To Do",devStatus:"To Do",status:"Needs Work",notes:"Transition to fully uncontrolled component and add imperative .open().\nRemove use of Button component, it breaks with new styles.\nAssess removing the responsive toggle to stay expanded.\n",title:"Collapsible",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"In Progress",status:"Needs Work",notes:"Simplifying implementation.\nFix event handling bug.\n",title:"Dropdown",type:"component"}},{frontmatter:{designStatus:"TBD",devStatus:"To Do",status:"Deprecate Soon",notes:"Unneeded. Used in one place (studio-frontend/src/components/EditImageModal/index.jsx)\n",title:"Fieldset",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"To Do",status:"Needs Work",notes:"Improve prop naming. Deprecate content prop.\nUse React.forwardRef for ref forwarding.\n",title:"Hyperlink",type:"component"}},{frontmatter:{designStatus:"TBD",devStatus:"TBD",status:"Reassessing",notes:"Reconcile purpose of this component with use of FontAwesome",title:"Icon",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"Done",status:"Stable",notes:"",title:"Input",type:"component"}},{frontmatter:{designStatus:"TBD",devStatus:"To Do",status:"Deprecate Soon",notes:"Replaced by Input and ValidationFormGroup\n",title:"InputSelect",type:"component"}},{frontmatter:{designStatus:"TBD",devStatus:"To Do",status:"Deprecate Soon",notes:"Replaced by Input and ValidationFormGroup\n",title:"InputText",type:"component"}},{frontmatter:{designStatus:"TBD",devStatus:"To Do",status:"Deprecate Soon",notes:"Not used anywhere in code on Github. Consult design.",title:"ListBox",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"To Do",status:"Needs Work",notes:"Remove unnecessary props. \nRemove baked in English strings.\nUse React.forwardRef for ref forwarding\n",title:"MailtoLink",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"To Do",status:"Needs Work",notes:"Overly complex implementation\nToo opinionated in design/structure\n",title:"Modal",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"To Do",status:"Needs Work",notes:"Breaks if given 5000 pages.\nOverly complex implementation.\nRemove baked in english strings \n",title:"Pagination",type:"component"}},{frontmatter:{designStatus:"To Do",devStatus:"To Do",status:"Needs Work",notes:"Refactor to use Input component\nand refresh checkbox designs\n",title:"RadioButtonGroup",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"TBD",status:"Reassessing",notes:"Consider a different strategy: export breakpoint constants and a passthrough to react-responsive. Current components are less flexible than needed ( from x-small to medium is not possible without strange repetition).\n",title:"Responsive Components",type:"component"}},{frontmatter:{designStatus:"To Do",devStatus:"To Do",status:"Needs Work",notes:"Needs more flexibility. Too opinionated in design/structure.\n",title:"SearchField",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"Done",status:"Stable",notes:"",title:"StatefulButton",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"In Progress",status:"Needs Work",notes:"Used deprecated lifecycle method\nShould be controlled or uncontrolled – not both.\nProps need renaming. Should use children over prop.\n",title:"StatusAlert",type:"component"}},{frontmatter:{designStatus:"TBD",devStatus:"TBD",status:"Reassessing",notes:"Potentially does too much work. Consider if should be multiple components: Table, TableHeader, SortableTable, etc.\n",title:"Table",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"In Progress",status:"Needs Work",notes:"Overly complex implementation. New styles break layout.\n",title:"Tabs",type:"component"}},{frontmatter:{designStatus:"TBD",devStatus:"To Do",status:"Deprecate Soon",notes:"Replaced by Input and ValidationFormGroup\n",title:"TextArea",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"Done",status:"Stable",notes:"",title:"TransitionReplace",type:"component"}},{frontmatter:{designStatus:"Done",devStatus:"Done",status:"Stable",notes:"",title:"ValidationFormGroup",type:"component"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-status-jsx-1be1b7161e6e7ceba571.js.map