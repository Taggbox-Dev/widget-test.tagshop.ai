(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6355],{95119:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>h});var n=i(65043),r=i(1043),a=i.n(r),o=i(78250),s=i(65281),l=i(93950),d=i.n(l),c=i(70579);class u extends n.Component{constructor(t){super(t),this.handlePlay=()=>{this.setState({isPlaying:!0})},this.onMediaLoad=async t=>{if(t.mediaHeight&&t.mediaWidth)this.setState({mediaSize:{height:t.mediaHeight,width:t.mediaWidth}});else try{const{width:e,height:i}=await(0,s.TW)(t.postFile);this.setState({mediaSize:{height:i,width:e}})}catch(e){this.setState({mediaSize:{height:100,width:100}})}},this.state={imageError:!1,windowWidth:window.innerWidth,windowHeight:window.innerHeight,mediaSize:{height:400,width:400},animate:!1,itemData:null,isPlaying:!1}}componentDidMount(){this.onLoadAnimation()}componentDidUpdate(t){d().isEqual(t.itemData,this.props.itemData)||(this.setState({itemData:this.props.itemData,animate:!1}),this.onLoadAnimation())}onLoadAnimation(){setTimeout((()=>{this.setState({animate:!0}),this.onMediaLoad(this.props.itemData)}),1e3)}render(){const{itemData:t,wall:e}=this.props,{imageError:i,windowHeight:n,windowWidth:r,mediaSize:s,animate:l,isPlaying:d}=this.state,u=r>n?((n-400)/50).toFixed():((n/2-200)/50).toFixed(),h=1!==t.type,p=3===t.type||5===t.type;let m=`${t.postFile}`;!(!i&&""!=t.mediaFile)||1==t.type&&t.type;const f=Math.min(r/s.width,n/s.height),g=s.height*f,v=s.width*f,w={paddingBottom:100*g/v+"%"};return t.mediaFile.includes(o.vr)&&(m=t.postFile),(0,c.jsxs)("div",{id:"spotlight__",className:"sl_container",children:[(0,c.jsx)("div",{className:"sl_overlay_ "+(l?"sl_media_ani":""),style:{backgroundImage:`url(${m})`}}),(0,c.jsx)("div",{className:"sl_wrap",children:(0,c.jsx)("div",{className:"sl_wrap_row sl_only_text",children:h?(0,c.jsx)("div",{className:"sl_media_wrap "+(l?"sl_media_ani":""),style:{maxWidth:v},children:p?(0,c.jsxs)("div",{className:"sl_media_wrap_",style:w,children:[!d&&(0,c.jsx)("img",{src:t.postFile,alt:"Video Poster",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",cursor:"pointer",zIndex:1},onLoad:this.handlePlay}),(0,c.jsx)(a(),{url:(y=t.mediaUrl,b=t.networkId,25===b?String(y).replace("https://w.soundcloud.com/player/?url=",""):y),config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto",muted:!0,poster:t.postFile}},file:{forceVideo:!0,attributes:{muted:!0,poster:t.postFile}}},className:"sl_media_",loop:!0,autoPlay:!0,muted:!0,volume:1,playsinline:!0,playing:!0,height:"100%",width:"100%",controls:!1})]}):(0,c.jsx)("div",{className:"sl_media_wrap_",style:w,children:(0,c.jsx)("img",{className:"sl_media_",src:t.postFile,height:g,width:v})})}):null})})]});var y,b}}const h=(0,n.memo)(u)},65281:(t,e,i)=>{"use strict";i.d(e,{C9:()=>v,Cq:()=>g,HI:()=>m,Ph:()=>j,S2:()=>x,TW:()=>W,Ul:()=>p,Uy:()=>c,fF:()=>w,hZ:()=>b,hz:()=>f,iS:()=>h,p5:()=>O,pj:()=>I,sl:()=>S,um:()=>u,vG:()=>$,w:()=>y,wG:()=>_});var n=i(92908),r=i(78250),a=i(23499),o=i(40122);let s=[],l=!1;const d=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${n.$x}`,Productdomain:n.QR}),c=t=>{var e;return null===(e=document.getElementById("tb_onsite_btn_id"))||void 0===e?void 0:e.classList.toggle("tb_onsite_btn_disabled",1===t)},u=t=>{var e,i;return null===(e=(i={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[t])||void 0===e?void 0:e.call(i)},h=t=>{const e=new Date(1e3*t);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`},p=()=>Math.floor(1e4*Math.random()).toString().padStart(4,"0"),m=t=>{try{s.push(t)}catch(e){console.log(e)}},f=t=>t&&""!==t&&!t.includes("ui-avatars"),g=t=>{if(!t)return"0 Byte";const e=Math.floor(Math.log(t)/Math.log(1024));return{size:Math.round(t/Math.pow(1024,e),2),sizeText:["Bytes","KB","MB","GB","TB"][e]}},v=t=>t.startsWith("http://")||t.startsWith("https://")?t:"https://"+t,w=t=>{const e=Date.now()-1e3*t;if(e<6e4)return"just now";const i=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((t=>{let{ms:i}=t;return e>=i})),n=Math.floor(e/i.ms);return`${n} ${i.label}${n>1?"s":""} ago`},y=t=>{try{return null!==t&&void 0!==t&&t.includes("http")?[...new Set(t.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((t,e)=>t.replaceAll(e,`<a class="text_links_" role="link" target="_blank" href="${e}">${e}</a>`)),t):t}catch{return t}},b=()=>[`${r.om}`,"Website Widget"],_=t=>t&&String(t)?unescape(t).split("/").pop().split("/").slice(-1).join().split(".").shift():"",x=["localhost","widget","wall_id="].every((t=>(0,n.vq)(t)))?"taggbox_main":n.MH||[`${n.Xg}.${n.IF}`,`${n.Xg}${n.t6}${n.IF}`,`${n.Xg}s.${n.IF}`].some((t=>(0,n.vq)(t)))?"tag_main__root":n.HY?"taggShopRoot":"taggbox_main",S=t=>{const e=Math.floor(Math.log10(t)/3)||0;return e?+(t/Math.pow(1e3,e)).toFixed(0)+["","K","M","B","T"][e]:t},j=t=>n.MH?t:atob(t),T=t=>{if(null===(i=t)||void 0===i?void 0:i.startsWith("#")){const e=parseInt(t.slice(1),16);return{r:e>>16&255,g:e>>8&255,b:255&e}}{var e;const i=(null===t||void 0===t||null===(e=t.match(/\d+/g))||void 0===e?void 0:e.map(Number))||[0,0,0];return{r:i[0],g:i[1],b:i[2]}}var i},M=t=>{const{r:e,g:i,b:n}=T(t);return Math.sqrt((255-e)**2+(255-i)**2+(255-n)**2)<=30},F=t=>{const{r:e,g:i,b:n}=T(t);return Math.sqrt((e-50)**2+(i-50)**2+(n-50)**2)<50},$=(t,e)=>{var i;null!==(i=t)&&void 0!==i&&i.startsWith("rgba")&&(t="#000000");const n=(t,e)=>e.some((e=>null===t||void 0===t?void 0:t.includes(e))),r=t=>n(t,["ffffff","255, 255, 255","#fff"]),a=t=>n(t,["000000","0, 0, 0","#000"]),[o,s]=[M(t),F(t)],[l,d]=[M(e),F(e)];return o&&l||r(t)&&r(e)?"#000000":s&&d||a(t)&&a(e)?"#ffffff":t},O=(t,e,i)=>t&&t.length>0?t.findIndex((t=>t.id===e)):i,I=()=>{try{const{wall:t}=a.A.getState().appData,{webId:e,wallId:i,ownerId:r}=t.ThemeInfo;l||(window.addEventListener("beforeunload",(()=>{if(0===s.length)return;const t=s.reduce(((t,e)=>t+e),0);t>0?fetch(n.KQ,{method:"POST",headers:d,body:JSON.stringify({action:1,model:null!==o.Ex&&void 0!==o.Ex&&o.Ex.includes("website")?"website":"wall",playCount:s.length,wall:n.HY?e:i,playTime:t,owner:r}),keepalive:!0}).finally((()=>(s=[],l=!1))):(s=[],l=!1)})),l=!0)}catch(t){console.error(t)}},W=t=>new Promise(((e,i)=>Object.assign(new Image,{onload:function(){e({width:this.naturalWidth,height:this.naturalHeight})},onerror:t=>i(new Error(`Image loading error: ${t.message}`)),src:t})))},9812:(t,e,i)=>{var n=i(56552).Symbol;t.exports=n},16913:(t,e,i)=>{var n=i(9812),r=i(34552),a=i(16095),o=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":o&&o in Object(t)?r(t):a(t)}},61141:(t,e,i)=>{var n=i(10143),r=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(r,""):t}},37105:(t,e,i)=>{var n="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;t.exports=n},34552:(t,e,i)=>{var n=i(9812),r=Object.prototype,a=r.hasOwnProperty,o=r.toString,s=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),i=t[s];try{t[s]=void 0;var n=!0}catch(l){}var r=o.call(t);return n&&(e?t[s]=i:delete t[s]),r}},16095:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},56552:(t,e,i)=>{var n=i(37105),r="object"==typeof self&&self&&self.Object===Object&&self,a=n||r||Function("return this")();t.exports=a},10143:t=>{var e=/\s/;t.exports=function(t){for(var i=t.length;i--&&e.test(t.charAt(i)););return i}},93950:(t,e,i)=>{var n=i(46686),r=i(4757),a=i(40801),o=Math.max,s=Math.min;t.exports=function(t,e,i){var l,d,c,u,h,p,m=0,f=!1,g=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function w(e){var i=l,n=d;return l=d=void 0,m=e,u=t.apply(n,i)}function y(t){var i=t-p;return void 0===p||i>=e||i<0||g&&t-m>=c}function b(){var t=r();if(y(t))return _(t);h=setTimeout(b,function(t){var i=e-(t-p);return g?s(i,c-(t-m)):i}(t))}function _(t){return h=void 0,v&&l?w(t):(l=d=void 0,u)}function x(){var t=r(),i=y(t);if(l=arguments,d=this,p=t,i){if(void 0===h)return function(t){return m=t,h=setTimeout(b,e),f?w(t):u}(p);if(g)return clearTimeout(h),h=setTimeout(b,e),w(p)}return void 0===h&&(h=setTimeout(b,e)),u}return e=a(e)||0,n(i)&&(f=!!i.leading,c=(g="maxWait"in i)?o(a(i.maxWait)||0,e):c,v="trailing"in i?!!i.trailing:v),x.cancel=function(){void 0!==h&&clearTimeout(h),m=0,l=p=d=h=void 0},x.flush=function(){return void 0===h?u:_(r())},x}},46686:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},22761:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},19841:(t,e,i)=>{var n=i(16913),r=i(22761);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==n(t)}},4757:(t,e,i)=>{var n=i(56552);t.exports=function(){return n.Date.now()}},40801:(t,e,i)=>{var n=i(61141),r=i(46686),a=i(19841),o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(a(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var i=s.test(t);return i||l.test(t)?d(t.slice(2),i?2:8):o.test(t)?NaN:+t}},41497:(t,e,i)=>{"use strict";var n=i(13218);function r(){}function a(){}a.resetWarningCache=r,t.exports=function(){function t(t,e,i,r,a,o){if(o!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:r};return i.PropTypes=i,i}},65173:(t,e,i)=>{t.exports=i(41497)()},13218:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=6355.5c252489.chunk.js.map