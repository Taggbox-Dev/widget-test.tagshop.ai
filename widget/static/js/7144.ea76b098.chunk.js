"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7144],{17144:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(65043),n=r(65281),o=r(92908),s=r(70579);class l extends a.PureComponent{constructor(e){super(e),this.state={height:"5",width:"100",error:""}}async UNSAFE_componentWillMount(){const{ImageUrl:e}=this.props,{width:t,height:r}=await(0,n.TW)(e);this.setState({height:100*r/t,width:100*t/r})}render(){const e={backgroundImage:`url(${this.props.ImageUrl})`,paddingBottom:this.state.height+"%",width:"100%"};return(0,s.jsx)("div",{className:"tb_wall_custom_header_wrap__",children:(0,s.jsx)("div",{className:"tb_header_img_ "+(o.aD?"socialwall":""),style:e,children:" "})})}}},65281:(e,t,r)=>{r.d(t,{C9:()=>w,Cq:()=>p,HI:()=>g,Ph:()=>$,S2:()=>y,TW:()=>W,Ul:()=>c,Uy:()=>d,fF:()=>b,hZ:()=>v,hz:()=>m,iS:()=>u,p5:()=>x,pj:()=>B,sl:()=>M,um:()=>h,vG:()=>k,w:()=>f,wG:()=>_});var a=r(92908),n=r(78250),o=r(23499);let s=[],l=!1;const i=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${a.$x}`,Productdomain:a.QR}),d=e=>{var t;return null===(t=document.getElementById("tb_onsite_btn_id"))||void 0===t?void 0:t.classList.toggle("tb_onsite_btn_disabled",1===e)},h=e=>{var t,r;return null===(t=(r={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[e])||void 0===t?void 0:t.call(r)},u=e=>{const t=new Date(1e3*e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`},c=()=>Math.floor(1e4*Math.random()).toString().padStart(4,"0"),g=e=>{try{s.push(e)}catch(t){console.log(t)}},m=e=>e&&""!==e&&!e.includes("ui-avatars"),p=e=>{if(!e)return"0 Byte";const t=Math.floor(Math.log(e)/Math.log(1024));return{size:Math.round(e/Math.pow(1024,t),2),sizeText:["Bytes","KB","MB","GB","TB"][t]}},w=e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e,b=e=>{const t=Date.now()-1e3*e;if(t<6e4)return"just now";const r=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((e=>{let{ms:r}=e;return t>=r})),a=Math.floor(t/r.ms);return`${a} ${r.label}${a>1?"s":""} ago`},f=e=>{try{return null!==e&&void 0!==e&&e.includes("http")?[...new Set(e.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((e,t)=>e.replaceAll(t,`<a class="text_links_" role="link" target="_blank" href="${t}">${t}</a>`)),e):e}catch{return e}},v=()=>[`${n.om}`,"Website Widget"],_=e=>e&&String(e)?unescape(e).split("/").pop().split("/").slice(-1).join().split(".").shift():"",y=["localhost","widget","wall_id="].every((e=>(0,a.vq)(e)))?"taggbox_main":a.MH||[`${a.Xg}.${a.IF}`,`${a.Xg}${a.t6}${a.IF}`,`${a.Xg}s.${a.IF}`].some((e=>(0,a.vq)(e)))?"tag_main__root":a.HY?"taggShopRoot":"taggbox_main",M=e=>{const t=Math.floor(Math.log10(e)/3)||0;return t?+(e/Math.pow(1e3,t)).toFixed(0)+["","K","M","B","T"][t]:e},$=e=>a.MH?e:atob(e),I=e=>{if(null===(r=e)||void 0===r?void 0:r.startsWith("#")){const t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}}{var t;const r=(null===e||void 0===e||null===(t=e.match(/\d+/g))||void 0===t?void 0:t.map(Number))||[0,0,0];return{r:r[0],g:r[1],b:r[2]}}var r},S=e=>{const{r:t,g:r,b:a}=I(e);return Math.sqrt((255-t)**2+(255-r)**2+(255-a)**2)<=30},F=e=>{const{r:t,g:r,b:a}=I(e);return Math.sqrt((t-50)**2+(r-50)**2+(a-50)**2)<50},k=(e,t)=>{var r;null!==(r=e)&&void 0!==r&&r.startsWith("rgba")&&(e="#000000");const a=(e,t)=>t.some((t=>null===e||void 0===e?void 0:e.includes(t))),n=e=>a(e,["ffffff","255, 255, 255","#fff"]),o=e=>a(e,["000000","0, 0, 0","#000"]),[s,l]=[S(e),F(e)],[i,d]=[S(t),F(t)];return s&&i||n(e)&&n(t)?"#000000":l&&d||o(e)&&o(t)?"#ffffff":e},x=(e,t,r)=>e&&e.length>0?e.findIndex((e=>e.id===t)):r,B=()=>{try{const{wall:e}=o.A.getState().appData,{webId:t,wallId:r,ownerId:n}=e.ThemeInfo;l||(window.addEventListener("beforeunload",(()=>{if(0===s.length)return;const e=s.reduce(((e,t)=>e+t),0);e>0?fetch(a.KQ,{method:"POST",headers:i,body:JSON.stringify({playCount:s.length,id:a.HY?t:r,playTime:e,owner:n}),keepalive:!0}).finally((()=>(s=[],l=!1))):(s=[],l=!1)})),l=!0)}catch(e){console.error(e)}},W=e=>new Promise(((t,r)=>Object.assign(new Image,{onload:function(){t({width:this.naturalWidth,height:this.naturalHeight})},onerror:e=>r(new Error(`Image loading error: ${e.message}`)),src:e})))}}]);
//# sourceMappingURL=7144.ea76b098.chunk.js.map