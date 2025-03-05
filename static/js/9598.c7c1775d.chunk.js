"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9598],{49598:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p});var a=t(65043),o=t(78250),s=t(92908),l=t(65281),n=t(70579);const i=a.lazy((()=>Promise.all([t.e(3245),t.e(9070)]).then(t.bind(t,69070)))),d=a.lazy((()=>Promise.all([t.e(229),t.e(6349)]).then(t.bind(t,16349)))),c=a.lazy((()=>Promise.all([t.e(229),t.e(6439)]).then(t.bind(t,86439)))),h={1:"@",2:"#",3:"List ",4:"@",5:"Advanced ",6:"Location ",7:"@",8:"Page ",9:"Page ",10:"Group ",11:"Playlist ",12:"Board ",13:"URL ",14:"Event ",16:"Mention ",22:"Workplace ",23:"@",24:"@",25:"@",26:"#",65:"Album",67:"Page",53:"Group ",54:"Topic ",55:"Page",33:"Place ",63:"Search ",64:"Sticker "},u=a.memo((e=>{var r;let{error:t,wall:i}=e,u=t.errorWithMessage,p=!!window.editor||window.location.pathname.includes("/editor");const m="tagembed"==(null===i||void 0===i||null===(r=i.User)||void 0===r?void 0:r.userDatabaseType)||o.fZ;if(u)return u&&Object.keys(u).length?"VISITOR_LIMIT_EXCEEDED"==u.type?(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(c,{title:"Page Views Limit Exceeded",description:"Oops! Seems Page Views Limit for the plan exceeded. If you are the owner of this Taggbox account, please click below link to access your account.",button:`<a href="${m?s.n3:o.Bo}" target="_blank" class="tb_error_btn_primary">Update Now</a>`})}):(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[(0,n.jsx)(c,{title:null!==u&&void 0!==u&&u.message?u.message:"Wall Not exist",description:"Oops! Seems like something went wrong. If you are the owner of this Taggbox account, please click below link to access your account.",button:`<a href = "${m?s.n3:o.Bo}" target = "_blank" class="tb_error_btn_primary"> Access Now</a > `})," "]}):null;if(t.planLimit)return(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[(0,n.jsx)(c,{title:"You're Running Extra Widgets/Feeds!",description:"To enjoy uninterrupted services, kindly revoke the additional widget / feed or upgrade your plan.",button:`<a href="${o.Bo}" target="_blank" class="tb_error_btn_primary">Update Now</a>`})," "]});if(!t.themeError||!Object.keys(t.themeError).length)return u&&Object.keys(u).length?(0,n.jsx)(d,{error:t}):null;switch(t.themeError.error_code){case 201:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...t.themeError,wall:i,editor:p,title:"No Posts!",description:"If the Moderation is ON, approve the posts from the moderation section to make them appear on your widget. Else, there won\u2019t be any posts on your added feeds."})});case 202:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...t.themeError,wall:i,editor:p,title:"No Feeds!",description:"Seems like you have not added any feed. Kindly add feed from your preferred social network"})});case 203:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...t.themeError,wall:i,editor:p,title:"Feed Not Activated!",description:`Looks like your feed status is off. <a href="${o.Bo}/wall/index/${i.Wall.id}" target="blank">Click here</a> to turn the status on! Or add another feed`})});case 204:case 205:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...t.themeError,wall:i,editor:p,title:"No Tweets/Posts!",description:`Currently, No Tweets/Posts are available on the entered <div class="tb_error_highlight">${h[t.themeError.older_post]} ${t.themeError.older_days}</div>. The new Tweets/Posts will start appearing here.`})});case 206:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...t.themeError,wall:i,editor:p,title:"No Tweets!",description:`No Tweets are available on the entered <div class="tb_error_highlight">${h[t.themeError.older_post]} ${t.themeError.older_days}</div> All the upcoming tweets will appear here. <br>The Tweets are older than your chosen ${2===t.themeError.older_post?7:1===t.themeError.older_post?30:null} days.`})});case 207:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...t.themeError,wall:i,editor:p,title:"No Posts!",description:`It appears that all your posts are private. Please go to <a href="${o.Bo}moderation/index/${i.Wall.id}" target="_blank" rel="noopener noreferrer">Moderation</a> and make them public.`})});case 208:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...t.themeError,wall:i,editor:p,title:"No Posts!",description:`It appears that the available posts are older than your chosen ${8!==t.themeError.older_days?t.themeError.older_days+" Days":(0,l.iS)(t.themeError.older_post)}. All the new posts will start to appear here.`})});case 209:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...t.themeError,wall:i,editor:p,title:"No Posts!",description:"It appears that there are no posts available with images or videos. The theme doesn\u2019t support text content."})});case 211:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...t.themeError,wall:i,editor:p,title:"No Posts!",description:`No posts are available on the entered ${h[t.themeError.older_post]} ${t.themeError.older_days}. All Upcoming posts will appear here.`})});case 212:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...t.themeError,wall:i,editor:p,title:"No Posts!",description:`Only new posts from Instagram ${h[t.themeError.older_post]} ${t.themeError.older_days} will appear here. Existing posts from Instagram ${h[t.themeError.older_post]} ${t.themeError.older_days} can not be retrieved.`})});case 213:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...t.themeError,wall:i,error:t,editor:p,title:`Your Social ${s.yR?"Embed":""} wall is Inactive.`,description:`To enhance your ${s.yR?"website":"event"} experience, re-activate your Social wall now`,utm:"feedinactive"})});default:return""}}));class p extends a.PureComponent{render(){var e,r;const t={backgroundImage:`url(${o.th}/media/error/nopost.png)`},{error:l,wall:d}=this.props,c=new URLSearchParams(window.location.search).get("preview"),h="tagembed"==(null===d||void 0===d||null===(e=d.User)||void 0===e?void 0:e.userDatabaseType)||o.fZ;return(0,n.jsxs)(n.Fragment,{children:[c?document.body.classList.add("tb_previw-error"):null,(0,n.jsxs)("div",{className:`tb_error_page ${s.yR?"":"tb_wall_error"} tb_error_theme_${null!=d&&d?null===d||void 0===d?void 0:d.ThemeInfo.id:"wall_error"} ${h?"tb_tagEmbed":""} ${s.HY?"tb_tagshop":""}`,children:[(0,n.jsx)("div",{className:"tb_error_page_bg",style:t,children:" "}),d&&Object.keys(d).length&&d.UserRule.on_site_upload&&null!==d&&void 0!==d&&null!==(r=d.SnapUp)&&void 0!==r&&r.Form.status?(0,n.jsx)("div",{className:"tb_error_onsite_btn",children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{SnapUp:d.SnapUp,id:d.Wall.id,tagShopWallId:null===d||void 0===d?void 0:d.ThemeInfo.wallId})})}):null,(0,n.jsx)(u,{error:l,wall:d})]})]})}}},65281:(e,r,t)=>{t.d(r,{C9:()=>b,Cq:()=>g,HI:()=>p,Ph:()=>j,S2:()=>x,TW:()=>P,Ul:()=>u,Uy:()=>d,fF:()=>w,hZ:()=>_,hz:()=>m,iS:()=>h,p5:()=>F,pj:()=>I,sl:()=>y,um:()=>c,vG:()=>S,w:()=>f,wG:()=>v});var a=t(92908),o=t(78250),s=t(23499);let l=[],n=!1;const i=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${a.$x}`,Productdomain:a.QR}),d=e=>{var r;return null===(r=document.getElementById("tb_onsite_btn_id"))||void 0===r?void 0:r.classList.toggle("tb_onsite_btn_disabled",1===e)},c=e=>{var r,t;return null===(r=(t={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[e])||void 0===r?void 0:r.call(t)},h=e=>{const r=new Date(1e3*e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()]} ${r.getDate()}, ${r.getFullYear()}`},u=()=>Math.floor(1e4*Math.random()).toString().padStart(4,"0"),p=e=>{try{l.push(e)}catch(r){console.log(r)}},m=e=>e&&""!==e&&!e.includes("ui-avatars"),g=e=>{if(!e)return"0 Byte";const r=Math.floor(Math.log(e)/Math.log(1024));return{size:Math.round(e/Math.pow(1024,r),2),sizeText:["Bytes","KB","MB","GB","TB"][r]}},b=e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e,w=e=>{const r=Date.now()-1e3*e;if(r<6e4)return"just now";const t=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((e=>{let{ms:t}=e;return r>=t})),a=Math.floor(r/t.ms);return`${a} ${t.label}${a>1?"s":""} ago`},f=e=>{try{return null!==e&&void 0!==e&&e.includes("http")?[...new Set(e.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((e,r)=>e.replaceAll(r,`<a class="text_links_" role="link" target="_blank" href="${r}">${r}</a>`)),e):e}catch{return e}},_=()=>[`${o.om}`,"Website Widget"],v=e=>e&&String(e)?unescape(e).split("/").pop().split("/").slice(-1).join().split(".").shift():"",x=["localhost","widget","wall_id="].every((e=>(0,a.vq)(e)))?"taggbox_main":a.MH||[`${a.Xg}.${a.IF}`,`${a.Xg}${a.t6}${a.IF}`,`${a.Xg}s.${a.IF}`].some((e=>(0,a.vq)(e)))?"tag_main__root":a.HY?"taggShopRoot":"taggbox_main",y=e=>{const r=Math.floor(Math.log10(e)/3)||0;return r?+(e/Math.pow(1e3,r)).toFixed(0)+["","K","M","B","T"][r]:e},j=e=>a.MH?e:atob(e),k=e=>{if(null===(t=e)||void 0===t?void 0:t.startsWith("#")){const r=parseInt(e.slice(1),16);return{r:r>>16&255,g:r>>8&255,b:255&r}}{var r;const t=(null===e||void 0===e||null===(r=e.match(/\d+/g))||void 0===r?void 0:r.map(Number))||[0,0,0];return{r:t[0],g:t[1],b:t[2]}}var t},$=e=>{const{r:r,g:t,b:a}=k(e);return Math.sqrt((255-r)**2+(255-t)**2+(255-a)**2)<=30},E=e=>{const{r:r,g:t,b:a}=k(e);return Math.sqrt((r-50)**2+(t-50)**2+(a-50)**2)<50},S=(e,r)=>{var t;null!==(t=e)&&void 0!==t&&t.startsWith("rgba")&&(e="#000000");const a=(e,r)=>r.some((r=>null===e||void 0===e?void 0:e.includes(r))),o=e=>a(e,["ffffff","255, 255, 255","#fff"]),s=e=>a(e,["000000","0, 0, 0","#000"]),[l,n]=[$(e),E(e)],[i,d]=[$(r),E(r)];return l&&i||o(e)&&o(r)?"#000000":n&&d||s(e)&&s(r)?"#ffffff":e},F=(e,r,t)=>e&&e.length>0?e.findIndex((e=>e.id===r)):t,I=()=>{try{const{wall:e}=s.A.getState().appData,{webId:r,wallId:t,ownerId:o}=e.ThemeInfo;n||(window.addEventListener("beforeunload",(()=>{if(0===l.length)return;const e=l.reduce(((e,r)=>e+r),0);e>0?fetch(a.KQ,{method:"POST",headers:i,body:JSON.stringify({playCount:l.length,id:a.HY?r:t,playTime:e,owner:o}),keepalive:!0}).finally((()=>(l=[],n=!1))):(l=[],n=!1)})),n=!0)}catch(e){console.error(e)}},P=e=>new Promise(((r,t)=>Object.assign(new Image,{onload:function(){r({width:this.naturalWidth,height:this.naturalHeight})},onerror:e=>t(new Error(`Image loading error: ${e.message}`)),src:e})))}}]);
//# sourceMappingURL=9598.c7c1775d.chunk.js.map