import{j as r,a as f}from"./jsx-runtime-29545a09.js";import{r as i}from"./index-76fb7be0.js";import{B as v}from"./Button-e67551b5.js";import{c as q}from"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";const x="_modalWrapper_rs6qr_1",C="_darkBackground_rs6qr_8",O="_modal_rs6qr_1",B="_small_rs6qr_28",N="_medium_rs6qr_32",b="_large_rs6qr_36",w="_heading_rs6qr_40",S="_content_rs6qr_50",j="_header_rs6qr_55",a={modalWrapper:x,darkBackground:C,modal:O,small:B,medium:N,large:b,heading:w,content:S,header:j};var l=(e=>(e.Small="small",e.Medium="medium",e.Large="large",e))(l||{});const c=({open:e,size:n="medium",children:d,onClose:t,title:m,withHeader:g=!1})=>{const h=i.useCallback(s=>{s.stopPropagation(!0);const M=s.target.classList.contains(a.darkBackground);t&&M&&t()},[]),k=i.useCallback(s=>{s.key==="Esc"&&t&&t()},[]);return e?r("div",{className:a.darkBackground,onClick:h,children:r("div",{className:a.modalWrapper,onKeyPress:k,children:f("div",{className:q(a.modal,a[n]),children:[m&&r("div",{className:g?a.header:a.heading,children:m}),r("div",{className:a.content,children:d})]})})}):null},y=c;try{c.displayName="Modal",c.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:"ModalSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},withHeader:{defaultValue:{value:"false"},description:"",name:"withHeader",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"components/Modal",component:y,argTypes:{size:{options:[l.Small,l.Medium,l.Large],control:{type:"select"}},title:{control:{type:"text"}},open:{disable:!0},withHeader:{control:{type:"boolean"}}},args:{size:l.Medium,title:"Title",withHeader:!0,open:!1}},o=({title:e,...n})=>{const[d,t]=i.useState(!1);return f("div",{style:{width:"560px",display:"flex",justifyContent:"center",margin:"80px auto"},children:[r(v,{text:"Click me to open Modal",onClick:()=>t(!0)}),r(y,{title:e,...n,open:d,onClose:()=>t(!1),children:"Empty Modal Content"})]})};o.storyName="Modal";var p,u,_;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(_=(u=o.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};const z=["ModalStoryTemplate"];export{o as ModalStoryTemplate,z as __namedExportsOrder,W as default};
//# sourceMappingURL=Modal.stories-bdac100e.js.map
