"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7551],{53247:(e,t,o)=>{o.d(t,{V:()=>l});const l=e=>{const t={backgroundImage:1==e.transparent||5==e.bannerType?"none":`url(${e.CustomBannerImage})`,backgroundColor:1==e.transparent?"transparent":e.background_color,height:e.banner_height+"px"},o={backgroundColor:1==e.transparent?"transparent":e.background_color_two},l={color:e.subTitle_font_color,fontSize:e.subTitle_font_size,fontFamily:"None"==e.subtitle_css_font?null:e.subtitle_css_font},n=e.subtitle_font_varient,a={color:e.title_font_color,fontSize:e.title_font_size,fontFamily:"None"==e.title_css_font?null:e.title_css_font},r=e.title_font_varient;var s=50;const i={height:1.8*(s=e.social_icon_size>50?50:e.social_icon_size),width:1.8*s},c={fontSize:s},_={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},d={color:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},u={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#000"},b={color:2===e.social_icon_color_status?e.social_icon_color:"#000"},h={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"},g={color:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"};return{bannerStyle:t,bannerStyleBgRight:o,subTitleStyle:l,titleStyle:a,iconAreaStyle:i,iconStyle:c,isFacebook:String(e.social_icons).includes("1"),isTwitter:String(e.social_icons).includes("2"),isInstagram:String(e.social_icons).includes("3"),facebookIconAreaStyle:_,facebookIconStyle:d,twitterIconAreaStyle:u,twitterIconStyle:b,instagramIconAreaStyle:h,instagramIconStyle:g,subTitleVarentClass:n,titleVarentClass:r}}},37551:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var l=o(53247),n=o(78250),a=o(65281),r=o(70579);const s=e=>{let{Banner:t}=e;const{bannerStyle:o,subTitleStyle:s,titleStyle:i,iconAreaStyle:c,iconStyle:_,isFacebook:d,isTwitter:u,isInstagram:b,facebookIconAreaStyle:h,facebookIconStyle:g,twitterIconAreaStyle:m,twitterIconStyle:y,instagramIconAreaStyle:f,instagramIconStyle:w,subTitleVarentClass:S,titleVarentClass:p}=(0,l.V)(t);var v=o;const k=(e,t,o,l,n,s,i)=>(0,r.jsx)("a",{href:e?(0,a.C9)(e):"#",target:"blank",className:"tb_header4_social_icon_list__",role:"button","aria-label":n,rel:"nofollow",style:{...s,...i},children:(0,r.jsx)("div",{className:`tb_header4_social_icon__ tb__icon  ${l}`,style:{...t,...o},children:" "})});return v&&v.backgroundImage.includes("bg-bnr-3.png")&&v.backgroundImage.includes(n.Vy)&&(v.backgroundImage=v.backgroundImage.replace(n.Vy,"https://test.taggbox.com/widget/assets/media/banner/")),(0,r.jsx)("div",{className:"tb_wall_header_wrap__",style:v,children:(0,r.jsxs)("div",{className:"tb_header4_row__",children:[(0,r.jsx)("div",{className:"tb_header4_column_content__",children:(0,r.jsxs)("div",{className:"tb_header4_content__",children:[(0,r.jsx)("div",{className:`tb_header4_subtitle__ tb-cTBfont-${S}`,style:s,children:t.subTitle}),(0,r.jsx)("div",{className:`tb_header4_title__ tb-cTBfont-${p}`,style:i,children:t.title})]})}),(0,r.jsx)("div",{className:"tb_header4_column_icons__",children:1==t.social_icon_status?(0,r.jsxs)("div",{className:"tb_header4_social_icons__",children:[d?(0,r.jsx)(k,{url:t.facebook_url,iconStyle:_,networkStyle:g,iconAreaStyle:c,iconAreaStyleNetwork:h,iconClass:"tb-facebook",label:"Facebook"}):"",u?(0,r.jsx)(k,{url:t.twitter_url,iconStyle:_,networkStyle:y,iconAreaStyle:c,iconAreaStyleNetwork:m,iconClass:"tb-twitter",label:"Twitter"}):"",b?(0,r.jsx)(k,{url:t.instagram_url,iconStyle:_,networkStyle:w,iconAreaStyle:c,iconAreaStyleNetwork:f,iconClass:"tb-instagram",label:"Instagram"}):""]}):null})]})})}},65281:(e,t,o)=>{o.d(t,{C9:()=>m,Cq:()=>g,HI:()=>b,Ph:()=>v,TW:()=>A,Uy:()=>_,fF:()=>y,hZ:()=>w,hz:()=>h,iS:()=>u,p5:()=>C,pj:()=>T,sl:()=>p,um:()=>d,vG:()=>$,w:()=>f,wG:()=>S});var l=o(92908),n=o(78250),a=o(23499),r=o(40122);let s=[],i=!1;const c=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${l.$x}`,Productdomain:l.QR}),_=e=>{var t;return null===(t=document.getElementById("tb_onsite_btn_id"))||void 0===t?void 0:t.classList.toggle("tb_onsite_btn_disabled",1===e)},d=e=>{var t,o;return null===(t=(o={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[e])||void 0===t?void 0:t.call(o)},u=e=>{const t=new Date(1e3*e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`},b=e=>{try{s.push(e)}catch(t){console.log(t)}},h=e=>e&&""!==e&&!e.includes("ui-avatars"),g=e=>{if(!e)return"0 Byte";const t=Math.floor(Math.log(e)/Math.log(1024));return{size:Math.round(e/Math.pow(1024,t),2),sizeText:["Bytes","KB","MB","GB","TB"][t]}},m=e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e,y=e=>{const t=Date.now()-1e3*e;if(t<6e4)return"just now";const o=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((e=>{let{ms:o}=e;return t>=o})),l=Math.floor(t/o.ms);return`${l} ${o.label}${l>1?"s":""} ago`},f=e=>{try{return null!==e&&void 0!==e&&e.includes("http")?[...new Set(e.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((e,t)=>e.replaceAll(t,`<a class="text_links_" role="link" target="_blank" href="${t}">${t}</a>`)),e):e}catch{return e}},w=()=>[`${n.om}`,"Website Widget"],S=e=>e&&String(e)?unescape(e).split("/").pop().split("/").slice(-1).join().split(".").shift():"",p=(["localhost","widget","wall_id="].every((e=>(0,l.vq)(e)))||(l.MH||[`${l.Xg}.${l.IF}`,`${l.Xg}${l.t6}${l.IF}`,`${l.Xg}s.${l.IF}`].some((e=>(0,l.vq)(e)))||l.HY),e=>{const t=Math.floor(Math.log10(e)/3)||0;return t?+(e/Math.pow(1e3,t)).toFixed(0)+["","K","M","B","T"][t]:e}),v=e=>l.MH?e:atob(e),k=e=>{if(null===(o=e)||void 0===o?void 0:o.startsWith("#")){const t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}}{var t;const o=(null===e||void 0===e||null===(t=e.match(/\d+/g))||void 0===t?void 0:t.map(Number))||[0,0,0];return{r:o[0],g:o[1],b:o[2]}}var o},I=e=>{const{r:t,g:o,b:l}=k(e);return Math.sqrt((255-t)**2+(255-o)**2+(255-l)**2)<=30},x=e=>{const{r:t,g:o,b:l}=k(e);return Math.sqrt((t-50)**2+(o-50)**2+(l-50)**2)<50},$=(e,t)=>{var o;null!==(o=e)&&void 0!==o&&o.startsWith("rgba")&&(e="#000000");const l=(e,t)=>t.some((t=>null===e||void 0===e?void 0:e.includes(t))),n=e=>l(e,["ffffff","255, 255, 255","#fff"]),a=e=>l(e,["000000","0, 0, 0","#000"]),[r,s]=[I(e),x(e)],[i,c]=[I(t),x(t)];return r&&i||n(e)&&n(t)?"#000000":s&&c||a(e)&&a(t)?"#ffffff":e},C=(e,t,o)=>e&&e.length>0?e.findIndex((e=>e.id===t)):o,T=()=>{try{const{wall:e}=a.A.getState().appData,{webId:t,wallId:o,ownerId:n}=e.ThemeInfo;i||(window.addEventListener("beforeunload",(()=>{if(0===s.length)return;const e=s.reduce(((e,t)=>e+t),0);e>0?fetch(l.KQ,{method:"POST",headers:c,body:JSON.stringify({action:1,model:null!==r.Ex&&void 0!==r.Ex&&r.Ex.includes("website")?"website":"wall",playCount:s.length,wall:l.HY?t:o,playTime:e,owner:n}),keepalive:!0}).finally((()=>(s=[],i=!1))):(s=[],i=!1)})),i=!0)}catch(e){console.error(e)}},A=e=>new Promise(((t,o)=>Object.assign(new Image,{onload:function(){t({width:this.naturalWidth,height:this.naturalHeight})},onerror:e=>o(new Error(`Image loading error: ${e.message}`)),src:e})))}}]);
//# sourceMappingURL=7551.387c14bd.chunk.js.map