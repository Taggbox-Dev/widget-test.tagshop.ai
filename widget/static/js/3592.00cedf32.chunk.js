"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3592],{10239:(e,t,o)=>{o.d(t,{V:()=>n});const n=e=>{const t={backgroundImage:1==e.transparent||5==e.bannerType?"none":`url(${e.CustomBannerImage})`,backgroundColor:1==e.transparent?"transparent":e.background_color,height:e.banner_height+"px"},o={backgroundColor:1==e.transparent?"transparent":e.background_color_two},n={color:e.subTitle_font_color,fontSize:e.subTitle_font_size,fontFamily:"None"==e.subtitle_css_font?null:e.subtitle_css_font},l=e.subtitle_font_varient,a={color:e.title_font_color,fontSize:e.title_font_size,fontFamily:"None"==e.title_css_font?null:e.title_css_font},r=e.title_font_varient;var s=50;const i={height:1.8*(s=e.social_icon_size>50?50:e.social_icon_size),width:1.8*s},c={fontSize:s},_={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},d={color:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},g={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#000"},u={color:2===e.social_icon_color_status?e.social_icon_color:"#000"},b={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"},h={color:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"};return{bannerStyle:t,bannerStyleBgRight:o,subTitleStyle:n,titleStyle:a,iconAreaStyle:i,iconStyle:c,isFacebook:String(e.social_icons).includes("1"),isTwitter:String(e.social_icons).includes("2"),isInstagram:String(e.social_icons).includes("3"),facebookIconAreaStyle:_,facebookIconStyle:d,twitterIconAreaStyle:g,twitterIconStyle:u,instagramIconAreaStyle:b,instagramIconStyle:h,subTitleVarentClass:l,titleVarentClass:r}}},73592:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});o(82483);var n=o(10239),l=o(31530),a=o(99009),r=o(56723);const s=e=>{let{Banner:t}=e;const{bannerStyle:o,subTitleStyle:s,titleStyle:i,iconAreaStyle:c,iconStyle:_,isFacebook:d,isTwitter:g,isInstagram:u,facebookIconAreaStyle:b,facebookIconStyle:h,twitterIconAreaStyle:m,twitterIconStyle:y,instagramIconAreaStyle:f,instagramIconStyle:w}=(0,n.V)(t);var S=t.LogoImage;if(S&&String(S).length>0&&String(S).includes("banner/logo_bnr")&&String(S).includes(l.Vy))S=String(t.LogoImage).replace(l.Vy,"");else if(S.includes(l.Vy)&&""===S.split(l.Vy)[1])S=String(t.LogoImage).replace(l.Vy,"");else if(S&&String(S).length>0){let e=S.split("/").pop();"logo_bnr-2.svg"!=e&&"logo_bnr-3.svg"!=e&&"logo_bnr-5.svg"!=e||(S=`${l.vr}react-app/media/banner/logo_bnr-3.svg`)}const p=(e,t,o,n,l,s,i)=>(0,r.jsx)("a",{href:e?(0,a.C9)(e):"#",target:"blank",className:"tb_header3_social_icon_list__",role:"button","aria-label":l,rel:"nofollow",style:{...s,...i},children:(0,r.jsx)("div",{className:`tb_header3_social_icon__ tb__icon  ${n}`,style:{...t,...o},children:" "})});var v=o;return v&&v.backgroundImage.includes("bg-bnr-3.png")&&v.backgroundImage.includes(l.Vy)&&(v.backgroundImage=v.backgroundImage.replace(l.Vy,"https://test.taggbox.com/widget/assets/media/banner/")),(0,r.jsx)("div",{className:"tb_wall_header_wrap__",style:v,children:(0,r.jsxs)("div",{className:"tb_header3_row__",children:[(0,r.jsx)("div",{className:"tb_header3_column_logo__",children:S?(0,r.jsx)("div",{className:"tb_header3_logo__",children:(0,r.jsx)("img",{loading:"lazy",className:"tb_header3_logo_img__",src:S,alt:(0,a.wG)(S),width:180,height:52})}):""}),(0,r.jsx)("div",{className:"tb_header3_column_content__",children:(0,r.jsxs)("div",{className:"tb_header3_content__",children:[(0,r.jsx)("div",{className:"tb_header3_subtitle__",style:s,children:t.subTitle}),(0,r.jsx)("div",{className:"tb_header3_title__",style:i,children:t.title})]})}),(0,r.jsx)("div",{className:"tb_header3_column_icons__",children:1===t.social_icon_status?(0,r.jsxs)("div",{className:"tb_header3_social_icons__",children:[d?(0,r.jsx)(p,{url:t.facebook_url,iconStyle:_,networkStyle:h,iconAreaStyle:c,iconAreaStyleNetwork:b,iconClass:"tb-facebook",label:"Facebook"}):"",g?(0,r.jsx)(p,{url:t.twitter_url,iconStyle:_,networkStyle:y,iconAreaStyle:c,iconAreaStyleNetwork:m,iconClass:"tb-twitter",label:"Twitter"}):"",u?(0,r.jsx)(p,{url:t.instagram_url,iconStyle:_,networkStyle:w,iconAreaStyle:c,iconAreaStyleNetwork:f,iconClass:"tb-instagram",label:"Instagram"}):""]}):null})]})})}},99009:(e,t,o)=>{o.d(t,{C9:()=>m,Cq:()=>h,HI:()=>u,Ph:()=>I,S2:()=>p,TW:()=>M,Ul:()=>g,Uy:()=>c,fF:()=>y,hZ:()=>w,hz:()=>b,iS:()=>d,p5:()=>N,pj:()=>C,sl:()=>v,um:()=>_,vG:()=>j,w:()=>f,wG:()=>S});var n=o(83884),l=o(31530),a=o(7665);let r=[],s=!1;const i=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${n.$x}`,Productdomain:n.QR}),c=e=>{var t;return null===(t=document.getElementById("tb_onsite_btn_id"))||void 0===t?void 0:t.classList.toggle("tb_onsite_btn_disabled",1===e)},_=e=>{var t,o;return null===(t=(o={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[e])||void 0===t?void 0:t.call(o)},d=e=>{const t=new Date(1e3*e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`},g=()=>Math.floor(1e4*Math.random()).toString().padStart(4,"0"),u=e=>{try{r.push(e)}catch(t){console.log(t)}},b=e=>e&&""!==e&&!e.includes("ui-avatars"),h=e=>{if(!e)return"0 Byte";const t=Math.floor(Math.log(e)/Math.log(1024));return{size:Math.round(e/Math.pow(1024,t),2),sizeText:["Bytes","KB","MB","GB","TB"][t]}},m=e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e,y=e=>{const t=Date.now()-1e3*e;if(t<6e4)return"just now";const o=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((e=>{let{ms:o}=e;return t>=o})),n=Math.floor(t/o.ms);return`${n} ${o.label}${n>1?"s":""} ago`},f=e=>{try{return null!==e&&void 0!==e&&e.includes("http")?[...new Set(e.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((e,t)=>e.replaceAll(t,`<a class="text_links_" role="link" target="_blank" href="${t}">${t}</a>`)),e):e}catch{return e}},w=()=>[`${l.om}`,"Website Widget"],S=e=>e&&String(e)?unescape(e).split("/").pop().split("/").slice(-1).join().split(".").shift():"",p=["localhost","widget","wall_id="].every((e=>(0,n.vq)(e)))?"taggbox_main":n.MH||[`${n.Xg}.${n.IF}`,`${n.Xg}${n.t6}${n.IF}`,`${n.Xg}s.${n.IF}`].some((e=>(0,n.vq)(e)))?"tag_main__root":n.HY?"taggShopRoot":"taggbox_main",v=e=>{const t=Math.floor(Math.log10(e)/3)||0;return t?+(e/Math.pow(1e3,t)).toFixed(0)+["","K","M","B","T"][t]:e},I=e=>n.MH?e:atob(e),k=e=>{if(null===(o=e)||void 0===o?void 0:o.startsWith("#")){const t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}}{var t;const o=(null===e||void 0===e||null===(t=e.match(/\d+/g))||void 0===t?void 0:t.map(Number))||[0,0,0];return{r:o[0],g:o[1],b:o[2]}}var o},x=e=>{const{r:t,g:o,b:n}=k(e);return Math.sqrt((255-t)**2+(255-o)**2+(255-n)**2)<=30},$=e=>{const{r:t,g:o,b:n}=k(e);return Math.sqrt((t-50)**2+(o-50)**2+(n-50)**2)<50},j=(e,t)=>{var o;null!==(o=e)&&void 0!==o&&o.startsWith("rgba")&&(e="#000000");const n=(e,t)=>t.some((t=>null===e||void 0===e?void 0:e.includes(t))),l=e=>n(e,["ffffff","255, 255, 255","#fff"]),a=e=>n(e,["000000","0, 0, 0","#000"]),[r,s]=[x(e),$(e)],[i,c]=[x(t),$(t)];return r&&i||l(e)&&l(t)?"#000000":s&&c||a(e)&&a(t)?"#ffffff":e},N=(e,t,o)=>e&&e.length>0?e.findIndex((e=>e.id===t)):o,C=()=>{try{const{wall:e}=a.A.getState().appData,{webId:t,wallId:o,ownerId:l}=e.ThemeInfo;s||(window.addEventListener("beforeunload",(()=>{if(0===r.length)return;const e=r.reduce(((e,t)=>e+t),0);e>0?fetch(n.KQ,{method:"POST",headers:i,body:JSON.stringify({playCount:r.length,id:n.HY?t:o,playTime:e,owner:l}),keepalive:!0}).finally((()=>(r=[],s=!1))):(r=[],s=!1)})),s=!0)}catch(e){console.error(e)}},M=e=>new Promise(((t,o)=>Object.assign(new Image,{onload:function(){t({width:this.naturalWidth,height:this.naturalHeight})},onerror:e=>o(new Error(`Image loading error: ${e.message}`)),src:e})))}}]);
//# sourceMappingURL=3592.00cedf32.chunk.js.map