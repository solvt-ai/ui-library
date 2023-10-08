import{j as l,a as f}from"./jsx-runtime-29545a09.js";import{r as i}from"./index-76fb7be0.js";import{B as M}from"./Button-1d35022a.js";import{c as x}from"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";const C="_modalWrapper_d2uvu_1",O="_darkBackground_d2uvu_8",B="_modal_d2uvu_1",N="_small_d2uvu_28",b="_medium_d2uvu_32",w="_large_d2uvu_36",S="_heading_d2uvu_40",j="_content_d2uvu_50",q="_header_d2uvu_55",a={modalWrapper:C,darkBackground:O,modal:B,small:N,medium:b,large:w,heading:S,content:j,header:q};var o=(e=>(e.Small="small",e.Medium="medium",e.Large="large",e))(o||{});const u=({open:e,size:s="medium",children:d,onClose:t,title:c,withHeader:g=!1})=>{const v=i.useCallback(n=>{n.stopPropagation(!0);const k=n.target.classList.contains(a.darkBackground);t&&k&&t()},[]),h=i.useCallback(n=>{n.key==="Esc"&&t&&t()},[]);return e?l("div",{className:a.darkBackground,onClick:v,children:l("div",{className:a.modalWrapper,onKeyPress:h,children:f("div",{className:x(a.modal,a[s]),children:[c&&l("div",{className:g?a.header:a.heading,children:c}),l("div",{className:a.content,children:d})]})})}):null},y=u;try{u.displayName="Modal",u.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:"ModalSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},withHeader:{defaultValue:{value:"false"},description:"",name:"withHeader",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"components/Modal",component:y,argTypes:{size:{options:[o.Small,o.Medium,o.Large],control:{type:"select"}},title:{control:{type:"text"}},open:{disable:!0},withHeader:{control:{type:"boolean"}}},args:{size:o.Medium,title:"Title",withHeader:!0,open:!1}},r=({title:e,...s})=>{const[d,t]=i.useState(!1);return f("div",{style:{width:"560px",display:"flex",justifyContent:"center",margin:"80px auto"},children:[l(M,{text:"Click me to open Modal",onClick:()=>t(!0)}),l(y,{title:e,...s,open:d,onClose:()=>t(!1),children:"Empty Modal Content"})]})};r.storyName="Modal";var m,p,_;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(_=(p=r.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};const z=["ModalStoryTemplate"];export{r as ModalStoryTemplate,z as __namedExportsOrder,W as default};
//# sourceMappingURL=Modal.stories-9d1dd30c.js.map
