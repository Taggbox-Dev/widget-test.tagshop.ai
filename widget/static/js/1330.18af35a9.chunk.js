"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1330],{61330:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var s=i(65043),a=i(83003),l=i(70579);const r=Array.from({length:5},((e,t)=>t+1));class o extends s.Component{constructor(e){super(e),this.handleClick=e=>{const{addRatings:t}=this.props;this.setState({activeIndex:e}),t(e)},this.handleMouseEnter=e=>{this.setState({hoverIndex:e})},this.handleMouseLeave=()=>{this.setState({hoverIndex:null})},this.state={activeIndex:null,hoverIndex:null}}render(){const{hoverIndex:e,activeIndex:t}=this.state;return(0,l.jsx)("div",{className:"t_rate_wrap",children:r.map(((i,s)=>(0,l.jsx)("div",{className:`t_star_ico_wrap${i<=e?" t_h_active_":""}${i<=t?" t_active_":""}`,onClick:()=>this.handleClick(i),onMouseEnter:()=>this.handleMouseEnter(i),onMouseLeave:this.handleMouseLeave,children:(0,l.jsx)("div",{className:"t_star_ico tb__icon tb-star-outline",children:(0,l.jsx)("div",{})})},s)))})}}const n=o;var d=i(22030),c=i(78250),h=i(92908),u=i(65281),m=i(38571);const _=s.lazy((()=>Promise.all([i.e(140),i.e(2165)]).then(i.bind(i,25799)))),p=e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()),v=e=>{var t,i;let{wall:s,type:a,onClosePopUp:r}=e;return(0,l.jsx)("div",{className:"t_modal_content",children:(0,l.jsxs)("div",{className:"t_s_wrap",children:[(0,l.jsx)("img",{className:"t_s_icon_",src:`${c.th}/media/icons/${a}-icon.svg`,height:80,width:80,alt:""}),"check"==a?(0,l.jsx)("div",{className:"t_s_title",children:"Thanks for Your Efforts!"}):null,(0,l.jsx)("div",{className:"t_s_desc",children:null!==s&&void 0!==s&&null!==(t=s.SnapUp)&&void 0!==t&&t.Form.status?null===s||void 0===s||null===(i=s.SnapUp)||void 0===i?void 0:i.Form.successText:"Thank you for sharing your amazing content with us."}),(0,l.jsx)("div",{className:"t_f_close_wrap",children:(0,l.jsx)("button",{className:"t_f_p_btn",onClick:r,children:"Close"})})]})})},g=e=>{let{logo:t}=e;return t?(0,l.jsx)("div",{className:"t_m_logo_w",children:(0,l.jsx)("img",{className:"t_m_logo",src:t,height:20,width:130,alt:""})}):null};class x extends s.Component{constructor(e){var t,i;super(e),this.handleNext=e=>this.setState({submitPost:!1}),this.onShowCloseSubmitPicPopUp=e=>{const{isOpen:t}=this.state;this.setState({isOpen:!t})},this.updateImageWithData=e=>{const{upload_image:t}=this.state;t&&t.length<20&&(t.push(e),this.setState({upload_image:t}))},this.onClickToaddMore=e=>{const{upload_image:t}=this.state;t&&t.length<20?(t.push({file:null,caption:null,review:"",rating:0,error:!1,type:1,thumb_file:"",videoPath:""}),this.setState({isAddMoreActive:!0,upload_image:t,isActiveIndex:0==t.length||1==t.length?0:parseInt(t.length)-1,step:1,submitError:!1,errorClickMore:!1})):t.length>=20&&this.setState({errorClickMore:!0})},this.onClickToUpdateMoreStep=e=>t=>{const{isAddMoreActive:i,isActiveIndex:s,upload_image:a}=this.state;i&&a[s]&&a.splice(s,1),this.setState({isAddMoreActive:!1,upload_image:a,step:e,isActiveIndex:a&&a.length>0&&parseInt(a.length)-1>0?parseInt(a.length)-1:0,errorClickMore:!1})},this.onSubmitPostData=e=>{const{name:t,email:i,upload_image:s,is_terms_check:a,tandc:l,rateProduct:r,reviewTitle:o,review:n,layout:c,captionError:u}=this.state,{wallId:_,modalPop:v,wall:g,feeds:x}=this.props;if(this.setState({submitError:!1}),l&&(null===t||void 0===t?void 0:t.length)>0&&(null===i||void 0===i?void 0:i.length)>0&&p(i)&&!i.includes("mailinator")&&l&&(1==c&&r>0&&(!h.HY||o)||2==c)&&(null===n||void 0===n?void 0:n.length)>0&&!u){this.setState({apiRequest:!0});var b=!!window.ugcSuite||!!h.Nz,w={};b&&x&&x.length>0&&x.map((e=>{e&&e.Network&&Object.keys(e.Network).length&&29==e.Network.id&&e.value1&&(w={feedId:e.value1})}));let e=[];s&&s.length>0?s.map((t=>e.push({...t}))):e=[{video:"",type:1,mediaHeight:"",mediaWidth:"",thumbnail:""}];const l={wallId:null!==g&&void 0!==g&&g.ThemeInfo.wallId?null===g||void 0===g?void 0:g.ThemeInfo.wallId:_,name:t,email:i,media:e,ONSITE_TOKN:v.ONSITE_TOKN,...w,caption:n,rating:r,title:2==c?" ":o};[104746].includes(null===g||void 0===g?void 0:g.ThemeInfo.ownerId)&&(l.is_terms_check=a),(0,m.VT)(l).then((e=>{this.setState({step:3,apiRequest:!1},(()=>setTimeout((()=>{d.GF?window.location.reload():this.props.onSitePopup(!1)}),5e3)),document.querySelector("html").style.overflow="auto")})).catch((e=>{const{message:t}=e.toJSON();t&&this.setState({submitError:!0,submitErrorMessage:t,apiRequest:!1}),console.error(e)}))}else""!=this.state.review&&0!=this.state.review.trim().length||this.setState({captionError:!0,apiRequest:!1}),null!=this.state.name&&0!=this.state.name.trim().length||this.setState({nameError:!0,apiRequest:!1}),null!=this.state.email&&0!=this.state.email.trim().length&&p(this.state.email)&&!i.includes("mailinator")||this.setState({emailError:!0,apiRequest:!1}),0==r&&this.setState({rateProductError:!h.aD}),null!=this.state.reviewTitle&&0!=this.state.reviewTitle.trim().length||this.setState({reviewTitleError:!0,apiRequest:!1})},this.addCaption=e=>{String(e.target.value).length<=500?this.setState({review:e.target.value,captionError:!1}):this.setState({captionError:!0})},this.addReview=e=>t=>{const{upload_image:i}=this.state;i&&i[e]&&(i[e].review=t.target.value,i[e].caption="",i[e].error=!1,this.setState({upload_image:i}))},this.addRatings=e=>this.setState({rateProduct:e,rateProductError:!1}),this.onChangeReviewTitle=e=>this.setState({reviewTitle:e.target.value,reviewTitleError:!1}),this.addPostImage=(e,t,i,s,a)=>{let{upload_image:l}=this.state;const r={video:e,type:i,mediaHeight:s,mediaWidth:a,thumbnail:t};l.push(r),l.length>20&&(l.length=20),this.setState({upload_image:l,isActiveIndex:l.length+1})},this.onClickToRemove=e=>{const{upload_image:t}=this.state;if(t&&t.length>0){const i=t.filter((t=>t.video!=e.video));this.setState({upload_image:i,errorClickMore:!1,isActiveIndex:i.length+1,removedFile:e})}},this.onClickToImageRemove=e=>t=>{const{upload_image:i}=this.state;i&&i[e]&&(i[e].file=null,i[e].thumb_file="",i[e].videoPath="",i[e].type=1,i[e].ext=null,i[e].size=0,i[e].fileName=null,i[e].mediaHeight=0,i[e].mediaWidth=0,this.setState({upload_image:i}),(0,u.Uy)(2))},this.onClickToEdit=e=>t=>this.setState({isActiveIndex:e,step:1}),this.onTextName=e=>{this.setState({name:e.target.value,nameError:!1},(()=>{null!=this.state.name&&0!=this.state.name.length||this.setState({nameError:!0})}))},this.onTextEmail=e=>{this.setState({email:e.target.value,emailError:!1},(()=>{null!=this.state.email&&0!=this.state.email.length&&p(this.state.email)&&!this.state.email.includes("mailinator")||this.setState({emailError:!0})}))},this.onUpdatetandc=e=>this.setState({tandc:!this.state.tandc}),this.onClosePopUp=()=>{this.props.onSitePopup(!1),document.querySelector("html").style.overflow="auto"},this.termsCheck=e=>this.setState({is_terms_check:e}),this.uploadErrorCallback=e=>{this.setState({uploadError:e},(()=>{setTimeout((()=>{this.setState({uploadError:""})}),5e3)}))},this.backStepFun=()=>this.setState({step:1}),this.state={submitPost:!0,isOpen:!0,step:1,wall_id:null,name:"",email:"",upload_image:[],tandc:!0,nameError:!1,emailError:!1,submitErrorMessage:null,apiRequest:!1,isActiveIndex:0,isAddMoreActive:!1,submitError:!1,is_terms_check:0,errorClickMore:!1,uploadError:"",rateProduct:0,reviewTitle:"",review:"",rateProductError:!1,reviewTitleError:!1,captionError:!1,layout:(null===e||void 0===e||null===(t=e.wall)||void 0===t||null===(i=t.SnapUp)||void 0===i?void 0:i.Form.type)||1,removedFile:{}}}render(){const{isActiveIndex:e,step:t,upload_image:i,isAddMoreActive:a,name:r,email:o,tandc:d,nameError:u,emailError:m,apiRequest:x,submitError:b,submitErrorMessage:w,errorClickMore:f,uploadError:N,reviewTitle:j,review:S,rateProductError:k,reviewTitleError:E,captionError:C,layout:y,removedFile:I}=this.state,{wall:T,modalPop:M,isFreeAdsStatus:P}=this.props,{Form:A}=T.SnapUp,$={backgroundColor:null!==A&&void 0!==A&&A.background.color?null===A||void 0===A?void 0:A.background.color:null,backgroundImage:null!==A&&void 0!==A&&A.background.url?`url(${null===A||void 0===A?void 0:A.background.url})`:null},{onClosePopUp:R}=this;return(0,l.jsx)("div",{className:"t_modal"+(P?" t_brand_":""),children:(0,l.jsx)("div",{className:"t_modal_wrap",style:$,children:Object.keys((null===T||void 0===T?void 0:T.SnapUp)||{}).length&&A.status?(0,l.jsx)("div",{className:"t_modal_container",children:3==t?(0,l.jsx)(v,{wall:T,onClosePopUp:R,type:"check"}):(0,l.jsxs)("div",{className:"t_modal_content",children:[(0,l.jsx)(g,{logo:null===A||void 0===A?void 0:A.logo.url}),(0,l.jsx)("div",{className:"t_m_close_btn tb__icon tb-close-alt",onClick:R,children:(0,l.jsx)("div",{})}),A.title?(0,l.jsx)("div",{className:"t_m_title",children:A.title}):null,""!=A.subTitle?(0,l.jsx)("div",{className:"t_m_subtitle",children:A.subTitle}):null,1==y?(0,l.jsxs)("div",{className:"t_f_group",children:[(0,l.jsx)(n,{isActiveIndex:e,onClickToUpdateMoreStep:this.onClickToUpdateMoreStep,isAddMoreActive:a,item:i[e],addRatings:this.addRatings}),k?(0,l.jsx)("div",{className:"t_f_error t_text_center",children:" * Rating is required."}):null]}):null,1==y&&h.HY?(0,l.jsxs)("div",{className:"t_f_group",children:[(0,l.jsxs)("div",{className:"t_label_",children:["Review Title ",(0,l.jsx)("div",{className:"t_t_danger",children:"*"})]}),(0,l.jsx)("input",{type:"text",className:"t_from_input "+(E?"t_f_invalid":""),placeholder:"Enter review title",onChange:this.onChangeReviewTitle,value:j}),E?(0,l.jsx)("div",{className:"t_f_error",children:" * Review Title is required."}):null]}):null,(0,l.jsxs)("div",{className:"t_f_group",children:[(0,l.jsxs)("div",{className:"t_label_",children:[2==y?"Caption":"Review","  ",(0,l.jsx)("div",{className:"t_t_danger",children:"*"})]}),(0,l.jsx)("textarea",{className:"t_from_textarea "+(C?"t_f_invalid":""),placeholder:`Write your ${2==y?"caption":"review"} here`,value:S,onChange:this.addCaption}),C?(0,l.jsxs)("div",{className:"t_f_error",children:[" * ",String(S).length<=0?(2==y?"Caption":"Review")+" is required.":(2==y?"Caption":"Review")+" limit of 500 exceeded!"]}):null]}),(0,l.jsxs)("div",{className:"t_f_group",children:[(0,l.jsx)("div",{className:"t_label_",children:"Picture/Video (optional)"}),(0,l.jsxs)("div",{className:"t_f_upload",children:[i&&i.length>0?i&&i.map(((e,t)=>e.thumbnail?(0,l.jsxs)("div",{className:"t_m_up_img_wrap",onClick:this.onClickToEdit(t),children:[e.thumbnail?(0,l.jsxs)("div",{className:"t_m_up_img_in",children:[(0,l.jsx)("img",{className:"t_m_up_img",src:e.thumbnail,height:80,width:80,alt:""}),[3,5].includes(e.type)?(0,l.jsx)("div",{className:"t_m_vi_ico tb__icon tb-play",children:(0,l.jsx)("div",{})}):null]}):null,(0,l.jsx)("div",{className:"t_m_remove_btn tb__icon tb-close-alt",onClick:()=>this.onClickToRemove(e,t),children:(0,l.jsx)("div",{})})]},t):null)):null,(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)("div",{className:"t_m_upload",children:"Loading..."}),children:(0,l.jsx)(_,{updateImageWithData:this.updateImageWithData,isActiveIndex:e,addPostImage:this.addPostImage,ONSITE_TOKN:M.ONSITE_TOKN,uploadErrorCallback:this.uploadErrorCallback,upload_image:i,onClickToUpdateMoreStep:this.onClickToUpdateMoreStep,removedFile:I})})]}),N?(0,l.jsx)("div",{className:"t_f_error",children:N}):null]}),(0,l.jsxs)("div",{className:"t_row_",children:[(0,l.jsx)("div",{className:"t_col_",children:(0,l.jsxs)("div",{className:"t_f_group",children:[(0,l.jsxs)("div",{className:"t_label_",children:["Name  ",(0,l.jsx)("div",{className:"t_t_danger",children:"*"})]}),(0,l.jsx)("input",{type:"text",className:"t_from_input "+(u?"t_f_invalid":""),placeholder:"Enter Your name",onChange:this.onTextName,value:r}),u?(0,l.jsx)("div",{className:"t_f_error",children:" Name is required."}):null]})}),(0,l.jsx)("div",{className:"t_col_",children:(0,l.jsxs)("div",{className:"t_f_group",children:[(0,l.jsxs)("div",{className:"t_label_",children:["Email  ",(0,l.jsx)("div",{className:"t_t_danger",children:"*"})]}),(0,l.jsx)("input",{type:"text",className:"t_from_input "+(m?"t_f_invalid":""),placeholder:"Enter you email",onChange:this.onTextEmail,value:o}),m?(0,l.jsxs)("div",{className:"t_f_error",children:[" ",0==String(o).trim().length?"Email is required.":p(o)?"":"Enter valid email."]}):null]})})]}),[104746].includes(T.ThemeInfo.ownerId)?(0,l.jsxs)("div",{className:"t_f_check_inline",children:[(0,l.jsx)("input",{type:"checkbox",id:"t_accept",className:"t_from_check",onChange:e=>this.termsCheck(e.target.checked?1:0)}),(0,l.jsxs)("div",{className:"t_f_label_wrap",children:[(0,l.jsx)("label",{className:"t_check_label_",htmlFor:"t_accept",children:"I agree to CALM using my story for marketing purposes --"}),(0,l.jsx)("a",{href:A.termsLink,className:"t_tc_link",target:"_blank",children:"click for more information on how your story will be used."})]})]}):(0,l.jsxs)("div",{className:"t_f_group",children:[(0,l.jsxs)("div",{className:"t_f_check_inline",children:[(0,l.jsx)("input",{type:"checkbox",id:"t_accept",className:"t_from_check",value:"accept",onChange:this.onUpdatetandc,checked:d}),(0,l.jsxs)("label",{className:"t_check_label_",htmlFor:"t_accept",children:["By clicking on Submit, you are agreeing to our ",(0,l.jsx)("a",{href:`${c.om}${h.MH?"on-site-uploads-content-rights/":"snapup-content-rights/"}`,className:"t_tc_link",target:"_blank",children:"terms and conditions"})," *"]})]}),0==d?(0,l.jsx)("div",{className:"t_f_error",children:"* Please agree to the terms and conditions to submit your media."}):null]}),b?(0,l.jsx)("div",{className:"t_f_group",children:(0,l.jsxs)("div",{className:"t_f_error",children:["* ",w||"Please check complete details."]})}):null,(0,l.jsx)("div",{className:"t_f_group t_text_center",children:(0,l.jsx)("div",{className:"t_f_p_btn "+(x?" t_f_btn_spinner":""),onClick:this.onSubmitPostData,children:A.button.text})}),2==t?(0,l.jsx)("div",{className:"t_f_group t_text_center",children:(0,l.jsx)("div",{className:"t_f_s_btn",onClick:this.backStepFun,children:"Back"})}):null,f?(0,l.jsx)("div",{className:"t_f_error",children:"* Max 20 posts are allowed."}):null]})}):null})})}}const b=(0,a.Ng)((e=>(void 0!=e.modalPop&&1==e.modalPop.onSiteIsShowPopUp&&(document.querySelector("html").style.overflow="hidden"),{modalPop:e.modalPop})),(e=>({onSitePopup:t=>e((0,m.b8)(t)),onsiteTokenUpdate:t=>e((0,m.du)(t))})))(x)},65281:(e,t,i)=>{i.d(t,{C9:()=>g,Cq:()=>v,HI:()=>_,Ph:()=>S,S2:()=>N,TW:()=>M,Ul:()=>m,Uy:()=>c,fF:()=>x,hZ:()=>w,hz:()=>p,iS:()=>u,p5:()=>I,pj:()=>T,sl:()=>j,um:()=>h,vG:()=>y,w:()=>b,wG:()=>f});var s=i(92908),a=i(78250),l=i(23499),r=i(40122);let o=[],n=!1;const d=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${s.$x}`,Productdomain:s.QR}),c=e=>{var t;return null===(t=document.getElementById("tb_onsite_btn_id"))||void 0===t?void 0:t.classList.toggle("tb_onsite_btn_disabled",1===e)},h=e=>{var t,i;return null===(t=(i={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[e])||void 0===t?void 0:t.call(i)},u=e=>{const t=new Date(1e3*e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`},m=()=>Math.floor(1e4*Math.random()).toString().padStart(4,"0"),_=e=>{try{o.push(e)}catch(t){console.log(t)}},p=e=>e&&""!==e&&!e.includes("ui-avatars"),v=e=>{if(!e)return"0 Byte";const t=Math.floor(Math.log(e)/Math.log(1024));return{size:Math.round(e/Math.pow(1024,t),2),sizeText:["Bytes","KB","MB","GB","TB"][t]}},g=e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e,x=e=>{const t=Date.now()-1e3*e;if(t<6e4)return"just now";const i=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((e=>{let{ms:i}=e;return t>=i})),s=Math.floor(t/i.ms);return`${s} ${i.label}${s>1?"s":""} ago`},b=e=>{try{return null!==e&&void 0!==e&&e.includes("http")?[...new Set(e.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((e,t)=>e.replaceAll(t,`<a class="text_links_" role="link" target="_blank" href="${t}">${t}</a>`)),e):e}catch{return e}},w=()=>[`${a.om}`,"Website Widget"],f=e=>e&&String(e)?unescape(e).split("/").pop().split("/").slice(-1).join().split(".").shift():"",N=["localhost","widget","wall_id="].every((e=>(0,s.vq)(e)))?"taggbox_main":s.MH||[`${s.Xg}.${s.IF}`,`${s.Xg}${s.t6}${s.IF}`,`${s.Xg}s.${s.IF}`].some((e=>(0,s.vq)(e)))?"tag_main__root":s.HY?"taggShopRoot":"taggbox_main",j=e=>{const t=Math.floor(Math.log10(e)/3)||0;return t?+(e/Math.pow(1e3,t)).toFixed(0)+["","K","M","B","T"][t]:e},S=e=>s.MH?e:atob(e),k=e=>{if(null===(i=e)||void 0===i?void 0:i.startsWith("#")){const t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}}{var t;const i=(null===e||void 0===e||null===(t=e.match(/\d+/g))||void 0===t?void 0:t.map(Number))||[0,0,0];return{r:i[0],g:i[1],b:i[2]}}var i},E=e=>{const{r:t,g:i,b:s}=k(e);return Math.sqrt((255-t)**2+(255-i)**2+(255-s)**2)<=30},C=e=>{const{r:t,g:i,b:s}=k(e);return Math.sqrt((t-50)**2+(i-50)**2+(s-50)**2)<50},y=(e,t)=>{var i;null!==(i=e)&&void 0!==i&&i.startsWith("rgba")&&(e="#000000");const s=(e,t)=>t.some((t=>null===e||void 0===e?void 0:e.includes(t))),a=e=>s(e,["ffffff","255, 255, 255","#fff"]),l=e=>s(e,["000000","0, 0, 0","#000"]),[r,o]=[E(e),C(e)],[n,d]=[E(t),C(t)];return r&&n||a(e)&&a(t)?"#000000":o&&d||l(e)&&l(t)?"#ffffff":e},I=(e,t,i)=>e&&e.length>0?e.findIndex((e=>e.id===t)):i,T=()=>{try{const{wall:e}=l.A.getState().appData,{webId:t,wallId:i,ownerId:a}=e.ThemeInfo;n||(window.addEventListener("beforeunload",(()=>{if(0===o.length)return;const e=o.reduce(((e,t)=>e+t),0);e>0?fetch(s.KQ,{method:"POST",headers:d,body:JSON.stringify({action:1,model:null!==r.Ex&&void 0!==r.Ex&&r.Ex.includes("website")?"website":"wall",playCount:o.length,wall:s.HY?t:i,playTime:e,owner:a}),keepalive:!0}).finally((()=>(o=[],n=!1))):(o=[],n=!1)})),n=!0)}catch(e){console.error(e)}},M=e=>new Promise(((t,i)=>Object.assign(new Image,{onload:function(){t({width:this.naturalWidth,height:this.naturalHeight})},onerror:e=>i(new Error(`Image loading error: ${e.message}`)),src:e})))}}]);
//# sourceMappingURL=1330.18af35a9.chunk.js.map