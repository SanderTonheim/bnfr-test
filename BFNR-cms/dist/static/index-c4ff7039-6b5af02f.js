import{t as _,aI as j,a as g,P as w,cN as B,j as a,as as L,cM as O,ao as T,aW as S,at as W,x as A,af as D,ac as z}from"./desk-0312ba5d-a1629a64.js";import{P as C}from"./PaneItem-1352c9b8-f901a916.js";import{useDeskTool as G}from"./index-74d44846-899aa953.js";import"./index-75fb8da5.js";var r;function H(o,t){return t||(t=o.slice(0)),Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(t)}}))}const M=_.hr(r||(r=H([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function U(o){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:f}=o,{features:h}=G(),{collapsed:m}=j(),{defaultLayout:y,displayOptions:c,items:i,menuItems:v,menuItemGroups:I,title:b}=u,P=c==null?void 0:c.showIcons,x=e=>{var n;const s=(n=e.displayOptions)==null?void 0:n.showIcon;return typeof s<"u"?s!==!1:P!==!1};return g(w,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:p,children:[B,a(L,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:W,mode:"bleed"}),title:b}),a(A,{overflow:m?void 0:"auto",children:a(D,{padding:2,space:1,children:i&&i.map((e,n)=>{if(e.type==="divider")return a(z,{paddingY:1,children:a(M,{})},"divider-".concat(n));const s=!d&&t===e.id,k=d&&t===e.id;return a(C,{icon:x(e)?e.icon:!1,id:e.id,layout:y,pressed:s,schemaType:e.schemaType,selected:k,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{U as default};