"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7144],{17144:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(65043),a=r(65281),s=r(92908),l=r(70579);class o extends n.PureComponent{constructor(e){super(e),this.state={height:"5",width:"100",error:""}}async UNSAFE_componentWillMount(){const{ImageUrl:e}=this.props,{width:t,height:r}=await(0,a.TW)(e);this.setState({height:100*r/t,width:100*t/r})}render(){const e={backgroundImage:`url(${this.props.ImageUrl})`,paddingBottom:this.state.height+"%",width:"100%"};return(0,l.jsx)("div",{className:"tb_wall_custom_header_wrap__",children:(0,l.jsx)("div",{className:"tb_header_img_ "+(s.aD?"socialwall":""),style:e,children:" "})})}}},65281:(e,t,r)=>{r.d(t,{C9:()=>p,Cq:()=>m,HI:()=>g,Ph:()=>$,TW:()=>S,Uy:()=>h,fF:()=>b,hZ:()=>v,hz:()=>w,iS:()=>c,p5:()=>k,pj:()=>B,sl:()=>y,um:()=>u,vG:()=>x,w:()=>f,wG:()=>_});var n=r(92908),a=r(78250),s=r(23499),l=r(40122);let o=[],i=!1;const d=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${n.$x}`,Productdomain:n.QR}),h=e=>{var t;return null===(t=document.getElementById("tb_onsite_btn_id"))||void 0===t?void 0:t.classList.toggle("tb_onsite_btn_disabled",1===e)},u=e=>{var t,r;return null===(t=(r={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[e])||void 0===t?void 0:t.call(r)},c=e=>{const t=new Date(1e3*e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`},g=e=>{try{o.push(e)}catch(t){console.log(t)}},w=e=>e&&""!==e&&!e.includes("ui-avatars"),m=e=>{if(!e)return"0 Byte";const t=Math.floor(Math.log(e)/Math.log(1024));return{size:Math.round(e/Math.pow(1024,t),2),sizeText:["Bytes","KB","MB","GB","TB"][t]}},p=e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e,b=e=>{const t=Date.now()-1e3*e;if(t<6e4)return"just now";const r=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((e=>{let{ms:r}=e;return t>=r})),n=Math.floor(t/r.ms);return`${n} ${r.label}${n>1?"s":""} ago`},f=e=>{try{return null!==e&&void 0!==e&&e.includes("http")?[...new Set(e.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((e,t)=>e.replaceAll(t,`<a class="text_links_" role="link" target="_blank" href="${t}">${t}</a>`)),e):e}catch{return e}},v=()=>[`${a.om}`,"Website Widget"],_=e=>e&&String(e)?unescape(e).split("/").pop().split("/").slice(-1).join().split(".").shift():"",y=(["localhost","widget","wall_id="].every((e=>(0,n.vq)(e)))||(n.MH||[`${n.Xg}.${n.IF}`,`${n.Xg}${n.t6}${n.IF}`,`${n.Xg}s.${n.IF}`].some((e=>(0,n.vq)(e)))||n.HY),e=>{const t=Math.floor(Math.log10(e)/3)||0;return t?+(e/Math.pow(1e3,t)).toFixed(0)+["","K","M","B","T"][t]:e}),$=e=>n.MH?e:atob(e),M=e=>{if(null===(r=e)||void 0===r?void 0:r.startsWith("#")){const t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}}{var t;const r=(null===e||void 0===e||null===(t=e.match(/\d+/g))||void 0===t?void 0:t.map(Number))||[0,0,0];return{r:r[0],g:r[1],b:r[2]}}var r},I=e=>{const{r:t,g:r,b:n}=M(e);return Math.sqrt((255-t)**2+(255-r)**2+(255-n)**2)<=30},F=e=>{const{r:t,g:r,b:n}=M(e);return Math.sqrt((t-50)**2+(r-50)**2+(n-50)**2)<50},x=(e,t)=>{var r;null!==(r=e)&&void 0!==r&&r.startsWith("rgba")&&(e="#000000");const n=(e,t)=>t.some((t=>null===e||void 0===e?void 0:e.includes(t))),a=e=>n(e,["ffffff","255, 255, 255","#fff"]),s=e=>n(e,["000000","0, 0, 0","#000"]),[l,o]=[I(e),F(e)],[i,d]=[I(t),F(t)];return l&&i||a(e)&&a(t)?"#000000":o&&d||s(e)&&s(t)?"#ffffff":e},k=(e,t,r)=>e&&e.length>0?e.findIndex((e=>e.id===t)):r,B=()=>{try{const{wall:e}=s.A.getState().appData,{webId:t,wallId:r,ownerId:a}=e.ThemeInfo;i||(window.addEventListener("beforeunload",(()=>{if(0===o.length)return;const e=o.reduce(((e,t)=>e+t),0);e>0?fetch(n.KQ,{method:"POST",headers:d,body:JSON.stringify({action:1,model:null!==l.Ex&&void 0!==l.Ex&&l.Ex.includes("website")?"website":"wall",playCount:o.length,wall:n.HY?t:r,playTime:e,owner:a}),keepalive:!0}).finally((()=>(o=[],i=!1))):(o=[],i=!1)})),i=!0)}catch(e){console.error(e)}},S=e=>new Promise(((t,r)=>Object.assign(new Image,{onload:function(){t({width:this.naturalWidth,height:this.naturalHeight})},onerror:e=>r(new Error(`Image loading error: ${e.message}`)),src:e})))}}]);
//# sourceMappingURL=7144.095ae85b.chunk.js.map