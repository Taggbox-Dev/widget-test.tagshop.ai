"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6438],{31898:(e,t,o)=>{o.d(t,{V:()=>l});const l=e=>{const t={backgroundImage:1==e.transparent||5==e.bannerType?"none":`url(${e.CustomBannerImage})`,backgroundColor:1==e.transparent?"transparent":e.background_color,height:e.banner_height+"px"},o={backgroundColor:1==e.transparent?"transparent":e.background_color_two},l={color:e.subTitle_font_color,fontSize:e.subTitle_font_size,fontFamily:"None"==e.subtitle_css_font?null:e.subtitle_css_font},n=e.subtitle_font_varient,s={color:e.title_font_color,fontSize:e.title_font_size,fontFamily:"None"==e.title_css_font?null:e.title_css_font},a=e.title_font_varient;var i=50;const r={height:1.8*(i=e.social_icon_size>50?50:e.social_icon_size),width:1.8*i},c={fontSize:i},_={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},d={color:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},b={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#000"},g={color:2===e.social_icon_color_status?e.social_icon_color:"#000"},u={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"},h={color:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"};return{bannerStyle:t,bannerStyleBgRight:o,subTitleStyle:l,titleStyle:s,iconAreaStyle:r,iconStyle:c,isFacebook:String(e.social_icons).includes("1"),isTwitter:String(e.social_icons).includes("2"),isInstagram:String(e.social_icons).includes("3"),facebookIconAreaStyle:_,facebookIconStyle:d,twitterIconAreaStyle:b,twitterIconStyle:g,instagramIconAreaStyle:u,instagramIconStyle:h,subTitleVarentClass:n,titleVarentClass:a}}},86438:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});var l=o(31898),n=o(80415),s=o(76506),a=o(44414);const i=e=>{let{Banner:t}=e;const{bannerStyle:o,subTitleStyle:i,bannerStyleBgRight:r,titleStyle:c,iconStyle:_,isFacebook:d,isTwitter:b,isInstagram:g,facebookIconStyle:u,twitterIconStyle:h,instagramIconStyle:m,subTitleVarentClass:y,titleVarentClass:w}=(0,l.V)(t);var f=t.LogoImage;if(f&&String(f).length>0&&String(f).includes("banner/logo_bnr")&&String(f).includes(n.Vy))f=String(t.LogoImage).replace(n.Vy,"");else if(f.includes(n.Vy)&&""===f.split(n.Vy)[1])f=String(t.LogoImage).replace(n.Vy,"");else if(f&&String(f).length>0){let e=f.split("/").pop();"logo_bnr-2.svg"!=e&&"logo_bnr-3.svg"!=e&&"logo_bnr-5.svg"!=e||(f=`${n.vr}react-app/media/banner/logo_bnr-5.svg`)}const S=(e,t,o,l,n)=>(0,a.jsx)("a",{href:e?(0,s.C9)(e):"#",target:"_blank",className:"tb_header5_social_icon_list__",role:"button","aria-label":n,rel:"nofollow",children:(0,a.jsx)("div",{className:`tb_header5_social_icon__ tb__icon ${l}`,style:{...t,...o},children:" "})});return(0,a.jsx)("div",{className:"tb_wall_header_wrap__",style:o,children:(0,a.jsxs)("div",{className:"tb_header5_row__",children:[(0,a.jsx)("div",{className:"tb_header5_column_logo__",children:f?(0,a.jsx)("div",{className:"tb_header5_logo__",children:(0,a.jsx)("img",{loading:"lazy",className:"tb_header5_logo_img__",src:f,alt:(0,s.wG)(f),width:180,height:52})}):""}),(0,a.jsx)("div",{className:"tb_header5_column_content__",children:(0,a.jsxs)("div",{className:"tb_header5_content__",children:[(0,a.jsx)("div",{className:`tb_header5_subtitle__ tb-cTBfont-${y}`,style:i,children:t.subTitle}),(0,a.jsx)("div",{className:`tb_header5_title__ tb-cTBfont-${w}`,style:c,children:t.title})]})}),(0,a.jsxs)("div",{className:"tb_header5_column_icons__",children:[1==t.social_icon_status?(0,a.jsx)("div",{className:"tb_header5_right_bg",style:r,children:" "}):"",1==t.social_icon_status?(0,a.jsxs)("div",{className:"tb_header5_social_icons__",children:[d?(0,a.jsx)(S,{url:t.facebook_url,iconStyle:_,networkStyle:u,iconClass:"tb-facebook",label:"Facebook"}):"",b?(0,a.jsx)(S,{url:t.twitter_url,iconStyle:_,networkStyle:h,iconClass:"tb-twitter",label:"Twitter"}):"",g?(0,a.jsx)(S,{url:t.instagram_url,iconStyle:_,networkStyle:m,iconClass:"tb-instagram",label:"Instagram"}):""]}):null," "]})]})})}},76506:(e,t,o)=>{o.d(t,{C9:()=>m,Cq:()=>h,HI:()=>g,Ph:()=>p,TW:()=>x,Uy:()=>_,fF:()=>y,hZ:()=>w,hz:()=>u,iS:()=>b,p5:()=>v,pj:()=>I,sl:()=>S,um:()=>d,wG:()=>f});var l=o(66345),n=o(80415),s=o(296),a=o(86961);let i=[],r=!1;const c=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${l.$x}`,Productdomain:l.QR}),_=e=>{var t;return null===(t=document.getElementById("tb_onsite_btn_id"))||void 0===t?void 0:t.classList.toggle("tb_onsite_btn_disabled",1===e)},d=e=>{var t,o;return null===(t=(o={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[e])||void 0===t?void 0:t.call(o)},b=e=>{const t=new Date(1e3*e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`},g=e=>{try{i.push(e)}catch(t){console.log(t)}},u=e=>e&&""!==e&&!e.includes("ui-avatars"),h=e=>{if(!e)return"0 Byte";const t=Math.floor(Math.log(e)/Math.log(1024));return{size:Math.round(e/Math.pow(1024,t),2),sizeText:["Bytes","KB","MB","GB","TB"][t]}},m=e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e,y=e=>{const t=Date.now()-1e3*e;if(t<6e4)return"just now";const o=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((e=>{let{ms:o}=e;return t>=o})),l=Math.floor(t/o.ms);return`${l} ${o.label}${l>1?"s":""} ago`},w=()=>[`${n.om}`,"Website Widget"],f=e=>e&&String(e)?unescape(e).split("/").pop().split("/").slice(-1).join().split(".").shift():"",S=(["localhost","widget","wall_id="].every((e=>(0,l.vq)(e)))||(l.MH||[`${l.Xg}.${l.IF}`,`${l.Xg}${l.t6}${l.IF}`,`${l.Xg}s.${l.IF}`].some((e=>(0,l.vq)(e)))||l.HY),e=>{const t=Math.floor(Math.log10(e)/3)||0;return t?+(e/Math.pow(1e3,t)).toFixed(0)+["","K","M","B","T"][t]:e}),p=e=>l.MH?e:atob(e),v=(e,t,o)=>e&&e.length>0?e.findIndex((e=>e.id===t)):o,I=()=>{try{const{wall:e}=s.A.getState().appData,{webId:t,wallId:o,ownerId:n}=e.ThemeInfo;r||(window.addEventListener("beforeunload",(()=>{if(0===i.length)return;const e=i.reduce(((e,t)=>e+t),0);e>0?fetch(l.KQ,{method:"POST",headers:c,body:JSON.stringify({action:1,model:null!==a.Ex&&void 0!==a.Ex&&a.Ex.includes("website")?"website":"wall",playCount:i.length,wall:l.HY?t:o,playTime:e,owner:n}),keepalive:!0}).finally((()=>(i=[],r=!1))):(i=[],r=!1)})),r=!0)}catch(e){console.error(e)}},x=e=>new Promise(((t,o)=>Object.assign(new Image,{onload:function(){t({width:this.naturalWidth,height:this.naturalHeight})},onerror:e=>o(new Error(`Image loading error: ${e.message}`)),src:e})))}}]);