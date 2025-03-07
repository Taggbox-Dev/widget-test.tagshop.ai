"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9598],{49598:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var a=r(65043),o=r(78250),s=r(92908),l=r(65281),n=r(70579);const i=a.lazy((()=>Promise.all([r.e(3245),r.e(9070)]).then(r.bind(r,69070)))),d=a.lazy((()=>Promise.all([r.e(229),r.e(6349)]).then(r.bind(r,16349)))),c=a.lazy((()=>Promise.all([r.e(229),r.e(6439)]).then(r.bind(r,86439)))),h={1:"@",2:"#",3:"List ",4:"@",5:"Advanced ",6:"Location ",7:"@",8:"Page ",9:"Page ",10:"Group ",11:"Playlist ",12:"Board ",13:"URL ",14:"Event ",16:"Mention ",22:"Workplace ",23:"@",24:"@",25:"@",26:"#",65:"Album",67:"Page",53:"Group ",54:"Topic ",55:"Page",33:"Place ",63:"Search ",64:"Sticker "},u=a.memo((e=>{var t;let{error:r,wall:i}=e,u=r.errorWithMessage,p=!!window.editor||window.location.pathname.includes("/editor");const m="tagembed"==(null===i||void 0===i||null===(t=i.User)||void 0===t?void 0:t.userDatabaseType)||o.fZ;if(u)return u&&Object.keys(u).length?"VISITOR_LIMIT_EXCEEDED"==u.type?(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(c,{title:"Page Views Limit Exceeded",description:"Oops! Seems Page Views Limit for the plan exceeded. If you are the owner of this Taggbox account, please click below link to access your account.",button:`<a href="${m?s.n3:o.Bo}" target="_blank" class="tb_error_btn_primary">Update Now</a>`})}):(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[(0,n.jsx)(c,{title:null!==u&&void 0!==u&&u.message?u.message:"Wall Not exist",description:"Oops! Seems like something went wrong. If you are the owner of this Taggbox account, please click below link to access your account.",button:`<a href = "${m?s.n3:o.Bo}" target = "_blank" class="tb_error_btn_primary"> Access Now</a > `})," "]}):null;if(r.planLimit)return(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[(0,n.jsx)(c,{title:"You're Running Extra Widgets/Feeds!",description:"To enjoy uninterrupted services, kindly revoke the additional widget / feed or upgrade your plan.",button:`<a href="${o.Bo}" target="_blank" class="tb_error_btn_primary">Update Now</a>`})," "]});if(!r.themeError||!Object.keys(r.themeError).length)return u&&Object.keys(u).length?(0,n.jsx)(d,{error:r}):null;switch(r.themeError.error_code){case 201:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...r.themeError,wall:i,editor:p,title:"No Posts!",description:"If the Moderation is ON, approve the posts from the moderation section to make them appear on your widget. Else, there won\u2019t be any posts on your added feeds."})});case 202:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...r.themeError,wall:i,editor:p,title:"No Feeds!",description:"Seems like you have not added any feed. Kindly add feed from your preferred social network"})});case 203:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...r.themeError,wall:i,editor:p,title:"Feed Not Activated!",description:`Looks like your feed status is off. <a href="${o.Bo}/wall/index/${i.Wall.id}" target="blank">Click here</a> to turn the status on! Or add another feed`})});case 204:case 205:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...r.themeError,wall:i,editor:p,title:"No Tweets/Posts!",description:`Currently, No Tweets/Posts are available on the entered <div class="tb_error_highlight">${h[r.themeError.older_post]} ${r.themeError.older_days}</div>. The new Tweets/Posts will start appearing here.`})});case 206:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...r.themeError,wall:i,editor:p,title:"No Tweets!",description:`No Tweets are available on the entered <div class="tb_error_highlight">${h[r.themeError.older_post]} ${r.themeError.older_days}</div> All the upcoming tweets will appear here. <br>The Tweets are older than your chosen ${2===r.themeError.older_post?7:1===r.themeError.older_post?30:null} days.`})});case 207:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...r.themeError,wall:i,editor:p,title:"No Posts!",description:`It appears that all your posts are private. Please go to <a href="${o.Bo}moderation/index/${i.Wall.id}" target="_blank" rel="noopener noreferrer">Moderation</a> and make them public.`})});case 208:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...r.themeError,wall:i,editor:p,title:"No Posts!",description:`It appears that the available posts are older than your chosen ${8!==r.themeError.older_days?r.themeError.older_days+" Days":(0,l.iS)(r.themeError.older_post)}. All the new posts will start to appear here.`})});case 209:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...r.themeError,wall:i,editor:p,title:"No Posts!",description:"It appears that there are no posts available with images or videos. The theme doesn\u2019t support text content."})});case 211:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...r.themeError,wall:i,editor:p,title:"No Posts!",description:`No posts are available on the entered ${h[r.themeError.older_post]} ${r.themeError.older_days}. All Upcoming posts will appear here.`})});case 212:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...r.themeError,wall:i,editor:p,title:"No Posts!",description:`Only new posts from Instagram ${h[r.themeError.older_post]} ${r.themeError.older_days} will appear here. Existing posts from Instagram ${h[r.themeError.older_post]} ${r.themeError.older_days} can not be retrieved.`})});case 213:return(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{...r.themeError,wall:i,error:r,editor:p,title:`Your Social ${s.yR?"Embed":""} wall is Inactive.`,description:`To enhance your ${s.yR?"website":"event"} experience, re-activate your Social wall now`,utm:"feedinactive"})});default:return""}}));class p extends a.PureComponent{render(){var e,t;const r={backgroundImage:`url(${o.th}/media/error/nopost.png)`},{error:l,wall:d}=this.props,c=new URLSearchParams(window.location.search).get("preview"),h="tagembed"==(null===d||void 0===d||null===(e=d.User)||void 0===e?void 0:e.userDatabaseType)||o.fZ;return(0,n.jsxs)(n.Fragment,{children:[c?document.body.classList.add("tb_previw-error"):null,(0,n.jsxs)("div",{className:`tb_error_page ${s.yR?"":"tb_wall_error"} tb_error_theme_${null!=d&&d?null===d||void 0===d?void 0:d.ThemeInfo.id:"wall_error"} ${h?"tb_tagEmbed":""} ${s.HY?"tb_tagshop":""}`,children:[(0,n.jsx)("div",{className:"tb_error_page_bg",style:r,children:" "}),d&&Object.keys(d).length&&d.UserRule.on_site_upload&&null!==d&&void 0!==d&&null!==(t=d.SnapUp)&&void 0!==t&&t.Form.status?(0,n.jsx)("div",{className:"tb_error_onsite_btn",children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(i,{SnapUp:d.SnapUp,id:d.Wall.id,tagShopWallId:null===d||void 0===d?void 0:d.ThemeInfo.wallId})})}):null,(0,n.jsx)(u,{error:l,wall:d})]})]})}}},65281:(e,t,r)=>{r.d(t,{C9:()=>w,Cq:()=>b,HI:()=>m,Ph:()=>k,S2:()=>y,TW:()=>T,Ul:()=>p,Uy:()=>c,fF:()=>f,hZ:()=>v,hz:()=>g,iS:()=>u,p5:()=>I,pj:()=>P,sl:()=>j,um:()=>h,vG:()=>F,w:()=>x,wG:()=>_});var a=r(92908),o=r(78250),s=r(23499),l=r(40122);let n=[],i=!1;const d=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${a.$x}`,Productdomain:a.QR}),c=e=>{var t;return null===(t=document.getElementById("tb_onsite_btn_id"))||void 0===t?void 0:t.classList.toggle("tb_onsite_btn_disabled",1===e)},h=e=>{var t,r;return null===(t=(r={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[e])||void 0===t?void 0:t.call(r)},u=e=>{const t=new Date(1e3*e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`},p=()=>Math.floor(1e4*Math.random()).toString().padStart(4,"0"),m=e=>{try{n.push(e)}catch(t){console.log(t)}},g=e=>e&&""!==e&&!e.includes("ui-avatars"),b=e=>{if(!e)return"0 Byte";const t=Math.floor(Math.log(e)/Math.log(1024));return{size:Math.round(e/Math.pow(1024,t),2),sizeText:["Bytes","KB","MB","GB","TB"][t]}},w=e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e,f=e=>{const t=Date.now()-1e3*e;if(t<6e4)return"just now";const r=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((e=>{let{ms:r}=e;return t>=r})),a=Math.floor(t/r.ms);return`${a} ${r.label}${a>1?"s":""} ago`},x=e=>{try{return null!==e&&void 0!==e&&e.includes("http")?[...new Set(e.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((e,t)=>e.replaceAll(t,`<a class="text_links_" role="link" target="_blank" href="${t}">${t}</a>`)),e):e}catch{return e}},v=()=>[`${o.om}`,"Website Widget"],_=e=>e&&String(e)?unescape(e).split("/").pop().split("/").slice(-1).join().split(".").shift():"",y=["localhost","widget","wall_id="].every((e=>(0,a.vq)(e)))?"taggbox_main":a.MH||[`${a.Xg}.${a.IF}`,`${a.Xg}${a.t6}${a.IF}`,`${a.Xg}s.${a.IF}`].some((e=>(0,a.vq)(e)))?"tag_main__root":a.HY?"taggShopRoot":"taggbox_main",j=e=>{const t=Math.floor(Math.log10(e)/3)||0;return t?+(e/Math.pow(1e3,t)).toFixed(0)+["","K","M","B","T"][t]:e},k=e=>a.MH?e:atob(e),E=e=>{if(null===(r=e)||void 0===r?void 0:r.startsWith("#")){const t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}}{var t;const r=(null===e||void 0===e||null===(t=e.match(/\d+/g))||void 0===t?void 0:t.map(Number))||[0,0,0];return{r:r[0],g:r[1],b:r[2]}}var r},$=e=>{const{r:t,g:r,b:a}=E(e);return Math.sqrt((255-t)**2+(255-r)**2+(255-a)**2)<=30},S=e=>{const{r:t,g:r,b:a}=E(e);return Math.sqrt((t-50)**2+(r-50)**2+(a-50)**2)<50},F=(e,t)=>{var r;null!==(r=e)&&void 0!==r&&r.startsWith("rgba")&&(e="#000000");const a=(e,t)=>t.some((t=>null===e||void 0===e?void 0:e.includes(t))),o=e=>a(e,["ffffff","255, 255, 255","#fff"]),s=e=>a(e,["000000","0, 0, 0","#000"]),[l,n]=[$(e),S(e)],[i,d]=[$(t),S(t)];return l&&i||o(e)&&o(t)?"#000000":n&&d||s(e)&&s(t)?"#ffffff":e},I=(e,t,r)=>e&&e.length>0?e.findIndex((e=>e.id===t)):r,P=()=>{try{const{wall:e}=s.A.getState().appData,{webId:t,wallId:r,ownerId:o}=e.ThemeInfo;i||(window.addEventListener("beforeunload",(()=>{if(0===n.length)return;const e=n.reduce(((e,t)=>e+t),0);e>0?fetch(a.KQ,{method:"POST",headers:d,body:JSON.stringify({action:1,model:null!==l.Ex&&void 0!==l.Ex&&l.Ex.includes("website")?"website":"wall",playCount:n.length,wall:a.HY?t:r,playTime:e,owner:o}),keepalive:!0}).finally((()=>(n=[],i=!1))):(n=[],i=!1)})),i=!0)}catch(e){console.error(e)}},T=e=>new Promise(((t,r)=>Object.assign(new Image,{onload:function(){t({width:this.naturalWidth,height:this.naturalHeight})},onerror:e=>r(new Error(`Image loading error: ${e.message}`)),src:e})))}}]);
//# sourceMappingURL=9598.e5997959.chunk.js.map