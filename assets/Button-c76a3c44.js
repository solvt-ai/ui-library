import{j as m,c as o}from"./index-e9bf0e58.js";const d="_button_1i7t3_1",p="_small_1i7t3_12",c="_medium_1i7t3_19",_="_large_1i7t3_26",f="_primary_1i7t3_33",y="_outline_1i7t3_48",v="_fluid_1i7t3_68",a={button:d,small:p,medium:c,large:_,primary:f,outline:y,fluid:v};var b=(e=>(e.Small="small",e.Medium="medium",e.Large="large",e))(b||{}),g=(e=>(e.Primary="primary",e.Outline="outline",e))(g||{});const t=({text:e,size:l="medium",intent:u="primary",disabled:i=!1,onClick:n,fluid:r=!1,type:s="button"})=>m("button",{className:o(a[u],a[l],a.button,{[a.fluid]:r}),disabled:i,onClick:n,type:s,children:e}),V=t;try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"ButtonSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},intent:{defaultValue:{value:"ButtonIntent.Primary"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"outline"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},fluid:{defaultValue:{value:"false"},description:"",name:"fluid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}}}}}catch{}export{V as B,g as a,b};
//# sourceMappingURL=Button-c76a3c44.js.map
