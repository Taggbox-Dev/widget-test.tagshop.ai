"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5e3],{94074:(e,t,o)=>{o.d(t,{V:()=>l});const l=e=>{const t={backgroundImage:1==e.transparent||5==e.bannerType?"none":`url(${e.CustomBannerImage})`,backgroundColor:1==e.transparent?"transparent":e.background_color,height:e.banner_height+"px"},o={backgroundColor:1==e.transparent?"transparent":e.background_color_two},l={color:e.subTitle_font_color,fontSize:e.subTitle_font_size,fontFamily:"None"==e.subtitle_css_font?null:e.subtitle_css_font},n=e.subtitle_font_varient,a={color:e.title_font_color,fontSize:e.title_font_size,fontFamily:"None"==e.title_css_font?null:e.title_css_font},r=e.title_font_varient;var s=50;const i={height:1.8*(s=e.social_icon_size>50?50:e.social_icon_size),width:1.8*s},c={fontSize:s},_={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},d={color:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},g={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#000"},u={color:2===e.social_icon_color_status?e.social_icon_color:"#000"},b={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"},h={color:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"};return{bannerStyle:t,bannerStyleBgRight:o,subTitleStyle:l,titleStyle:a,iconAreaStyle:i,iconStyle:c,isFacebook:String(e.social_icons).includes("1"),isTwitter:String(e.social_icons).includes("2"),isInstagram:String(e.social_icons).includes("3"),facebookIconAreaStyle:_,facebookIconStyle:d,twitterIconAreaStyle:g,twitterIconStyle:u,instagramIconAreaStyle:b,instagramIconStyle:h,subTitleVarentClass:n,titleVarentClass:r}}},25e3:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var l=o(94074),n=o(8159),a=o(19066),r=o(15678);const s=e=>{let{Banner:t}=e;const{bannerStyle:o,subTitleStyle:s,bannerStyleBgRight:i,titleStyle:c,iconStyle:_,isFacebook:d,isTwitter:g,isInstagram:u,facebookIconStyle:b,twitterIconStyle:h,instagramIconStyle:m,subTitleVarentClass:f,titleVarentClass:y}=(0,l.V)(t);var w=t.LogoImage;if(w&&String(w).length>0&&String(w).includes("banner/logo_bnr")&&String(w).includes(n.Vy))w=String(t.LogoImage).replace(n.Vy,"");else if(w.includes(n.Vy)&&""===w.split(n.Vy)[1])w=String(t.LogoImage).replace(n.Vy,"");else if(w&&String(w).length>0){let e=w.split("/").pop();"logo_bnr-2.svg"!=e&&"logo_bnr-3.svg"!=e&&"logo_bnr-5.svg"!=e||(w=`${n.vr}react-app/media/banner/logo_bnr-5.svg`)}const p=(e,t,o,l,n)=>(0,r.jsx)("a",{href:e?(0,a.C9)(e):"#",target:"_blank",className:"tb_header5_social_icon_list__",role:"button","aria-label":n,rel:"nofollow",children:(0,r.jsx)("div",{className:`tb_header5_social_icon__ tb__icon ${l}`,style:{...t,...o},children:" "})});return(0,r.jsx)("div",{className:"tb_wall_header_wrap__",style:o,children:(0,r.jsxs)("div",{className:"tb_header5_row__",children:[(0,r.jsx)("div",{className:"tb_header5_column_logo__",children:w?(0,r.jsx)("div",{className:"tb_header5_logo__",children:(0,r.jsx)("img",{loading:"lazy",className:"tb_header5_logo_img__",src:w,alt:(0,a.wG)(w),width:180,height:52})}):""}),(0,r.jsx)("div",{className:"tb_header5_column_content__",children:(0,r.jsxs)("div",{className:"tb_header5_content__",children:[(0,r.jsx)("div",{className:`tb_header5_subtitle__ tb-cTBfont-${f}`,style:s,children:t.subTitle}),(0,r.jsx)("div",{className:`tb_header5_title__ tb-cTBfont-${y}`,style:c,children:t.title})]})}),(0,r.jsxs)("div",{className:"tb_header5_column_icons__",children:[1==t.social_icon_status?(0,r.jsx)("div",{className:"tb_header5_right_bg",style:i,children:" "}):"",1==t.social_icon_status?(0,r.jsxs)("div",{className:"tb_header5_social_icons__",children:[d?(0,r.jsx)(p,{url:t.facebook_url,iconStyle:_,networkStyle:b,iconClass:"tb-facebook",label:"Facebook"}):"",g?(0,r.jsx)(p,{url:t.twitter_url,iconStyle:_,networkStyle:h,iconClass:"tb-twitter",label:"Twitter"}):"",u?(0,r.jsx)(p,{url:t.instagram_url,iconStyle:_,networkStyle:m,iconClass:"tb-instagram",label:"Instagram"}):""]}):null," "]})]})})}},19066:(e,t,o)=>{o.d(t,{C9:()=>m,Cq:()=>h,HI:()=>u,Ph:()=>I,S2:()=>S,TW:()=>M,Ul:()=>g,Uy:()=>c,fF:()=>f,hZ:()=>w,hz:()=>b,iS:()=>d,p5:()=>C,pj:()=>T,sl:()=>v,um:()=>_,vG:()=>j,w:()=>y,wG:()=>p});var l=o(40329),n=o(8159),a=o(56364);let r=[],s=!1;const i=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${l.$x}`,Productdomain:l.QR}),c=e=>{var t;return null===(t=document.getElementById("tb_onsite_btn_id"))||void 0===t?void 0:t.classList.toggle("tb_onsite_btn_disabled",1===e)},_=e=>{var t,o;return null===(t=(o={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[e])||void 0===t?void 0:t.call(o)},d=e=>{const t=new Date(1e3*e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`},g=()=>Math.floor(1e4*Math.random()).toString().padStart(4,"0"),u=e=>{try{r.push(e)}catch(t){console.log(t)}},b=e=>e&&""!==e&&!e.includes("ui-avatars"),h=e=>{if(!e)return"0 Byte";const t=Math.floor(Math.log(e)/Math.log(1024));return{size:Math.round(e/Math.pow(1024,t),2),sizeText:["Bytes","KB","MB","GB","TB"][t]}},m=e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e,f=e=>{const t=Date.now()-1e3*e;if(t<6e4)return"just now";const o=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((e=>{let{ms:o}=e;return t>=o})),l=Math.floor(t/o.ms);return`${l} ${o.label}${l>1?"s":""} ago`},y=e=>{try{return null!==e&&void 0!==e&&e.includes("http")?[...new Set(e.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((e,t)=>e.replaceAll(t,`<a class="text_links_" role="link" target="_blank" href="${t}">${t}</a>`)),e):e}catch{return e}},w=()=>[`${n.om}`,"Website Widget"],p=e=>e&&String(e)?unescape(e).split("/").pop().split("/").slice(-1).join().split(".").shift():"",S=["localhost","widget","wall_id="].every((e=>(0,l.vq)(e)))?"taggbox_main":l.MH||[`${l.Xg}.${l.IF}`,`${l.Xg}${l.t6}${l.IF}`,`${l.Xg}s.${l.IF}`].some((e=>(0,l.vq)(e)))?"tag_main__root":l.HY?"taggShopRoot":"taggbox_main",v=e=>{const t=Math.floor(Math.log10(e)/3)||0;return t?+(e/Math.pow(1e3,t)).toFixed(0)+["","K","M","B","T"][t]:e},I=e=>l.MH?e:atob(e),k=e=>{if(null===(o=e)||void 0===o?void 0:o.startsWith("#")){const t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}}{var t;const o=(null===e||void 0===e||null===(t=e.match(/\d+/g))||void 0===t?void 0:t.map(Number))||[0,0,0];return{r:o[0],g:o[1],b:o[2]}}var o},x=e=>{const{r:t,g:o,b:l}=k(e);return Math.sqrt((255-t)**2+(255-o)**2+(255-l)**2)<=30},$=e=>{const{r:t,g:o,b:l}=k(e);return Math.sqrt((t-50)**2+(o-50)**2+(l-50)**2)<50},j=(e,t)=>{var o;null!==(o=e)&&void 0!==o&&o.startsWith("rgba")&&(e="#000000");const l=(e,t)=>t.some((t=>null===e||void 0===e?void 0:e.includes(t))),n=e=>l(e,["ffffff","255, 255, 255","#fff"]),a=e=>l(e,["000000","0, 0, 0","#000"]),[r,s]=[x(e),$(e)],[i,c]=[x(t),$(t)];return r&&i||n(e)&&n(t)?"#000000":s&&c||a(e)&&a(t)?"#ffffff":e},C=(e,t,o)=>e&&e.length>0?e.findIndex((e=>e.id===t)):o,T=()=>{try{const{wall:e}=a.A.getState().appData;s||(window.addEventListener("beforeunload",(()=>{if(0===r.length)return;const t=r.reduce(((e,t)=>e+t),0);t>0?fetch(l.KQ,{method:"POST",headers:i,body:JSON.stringify({playCount:r.length,id:e.ThemeInfo.wallId,playTime:t,owner:e.ThemeInfo.ownerId}),keepalive:!0}).finally((()=>(r=[],s=!1))):(r=[],s=!1)})),s=!0)}catch(e){console.error(e)}},M=e=>new Promise(((t,o)=>Object.assign(new Image,{onload:function(){t({width:this.naturalWidth,height:this.naturalHeight})},onerror:e=>o(new Error(`Image loading error: ${e.message}`)),src:e})))}}]);