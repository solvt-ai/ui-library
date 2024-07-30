import{j as l,a as _}from"./jsx-runtime-29545a09.js";import{r as i}from"./index-76fb7be0.js";import{B as v}from"./Button-30074691.js";import{c as x}from"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";const C="_modalWrapper_h2h04_1",O="_darkBackground_h2h04_8",B="_modal_h2h04_1",N="_small_h2h04_33",b="_medium_h2h04_37",w="_large_h2h04_41",S="_heading_h2h04_45",j="_content_h2h04_55",q="_header_h2h04_60",a={modalWrapper:C,darkBackground:O,modal:B,small:N,medium:b,large:w,heading:S,content:j,header:q};var o=(e=>(e.Small="small",e.Medium="medium",e.Large="large",e))(o||{});const c=({open:e,size:s="medium",children:d,onClose:t,title:m,withHeader:y=!1})=>{const g=i.useCallback(n=>{n.stopPropagation(!0);const M=n.target.classList.contains(a.darkBackground);t&&M&&t()},[]),k=i.useCallback(n=>{n.key==="Esc"&&t&&t()},[]);return e?l("div",{className:a.darkBackground,onClick:g,children:l("div",{className:a.modalWrapper,onKeyPress:k,children:_("div",{className:x(a.modal,a[s]),children:[m&&l("div",{className:y?a.header:a.heading,children:m}),l("div",{className:a.content,children:d})]})})}):null},f=c;try{c.displayName="Modal",c.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:"ModalSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},withHeader:{defaultValue:{value:"false"},description:"",name:"withHeader",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"components/Modal",component:f,argTypes:{size:{options:[o.Small,o.Medium,o.Large],control:{type:"select"}},title:{control:{type:"text"}},open:{disable:!0},withHeader:{control:{type:"boolean"}}},args:{size:o.Medium,title:"Title",withHeader:!0,open:!1}},r=({title:e,...s})=>{const[d,t]=i.useState(!1);return _("div",{style:{width:"560px",display:"flex",justifyContent:"center",margin:"80px auto"},children:[l(v,{text:"Click me to open Modal",onClick:()=>t(!0)}),l(f,{title:e,...s,open:d,onClose:()=>t(!1),children:"Empty Modal Content"})]})};r.storyName="Modal";var p,u,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
  title,
  ...args
}: ModalProps) => {
  const [isOpen, setOpen] = useState(false);
  return <div style={{
    width: '560px',
    display: 'flex',
    justifyContent: 'center',
    margin: '80px auto'
  }}>
            <Button text="Click me to open Modal" onClick={() => setOpen(true)} />
            <Modal title={title} {...args} open={isOpen} onClose={() => setOpen(false)}>Empty Modal Content</Modal>
        </div>;
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const z=["ModalStoryTemplate"];export{r as ModalStoryTemplate,z as __namedExportsOrder,W as default};
//# sourceMappingURL=Modal.stories-c973f5c7.js.map
