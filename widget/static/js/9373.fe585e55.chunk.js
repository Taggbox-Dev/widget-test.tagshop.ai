"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2141,4311,4961,7789,9373,9410],{8494:(t,e,i)=>{i.d(e,{bs:()=>d});var s=i(78250),o=i(23499),n=i(92908),l=i(95553),a=i(89652);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:u}=i,p=null===d||void 0===d?void 0:d.id,m=(n.HY,null===u||void 0===u?void 0:u.id),v=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:_,network:b,itemId:g,load:f}=v.dataset,x=document.querySelector(`img[data-item-id="${g}"]`),w=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==w&&void 0!==w&&w.length){var y;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(y=w[0])||void 0===y?void 0:y.postFileNew);if(!t&&x){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==_&&!v.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,o,n,l,a;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(n=i[0])||void 0===n?void 0:n.link,postFile:null===(l=i[0])||void 0===l?void 0:l.postFile,mediaFile:null===(a=i[0])||void 0===a?void 0:a.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:m,postId:g,ownerId:p},i,w);try{const{data:e}=await(new a.A).post(n.t5,t,{headers:l.ML}),i=n.HY||n.MH?"":`https://images.${n.QR}/`;v.src="18"===b?`${i}${e.media}`:e.media}catch{v.src=s.gX}finally{h(v)}}else v.src=s.gX,h(v);r.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;v.src=t,v.srcset=t,h(v),r.shift()}}},h=t=>t.setAttribute("data-load","1")},36671:(t,e,i)=>{i.d(e,{A:()=>d});var s=i(65043),o=i(65281),n=i(78250),l=i(8494),a=i(80714),r=i(70579);class d extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(n){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:n,Post:l}=t;this.state={height:(null===n||void 0===n?void 0:n.height)||(null===l||void 0===l||null===(e=l.media)||void 0===e?void 0:e.height)||0,width:(null===n||void 0===n?void 0:n.width)||(null===l||void 0===l||null===(i=l.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,s;const{height:o,width:d}=this.state,{ImageClass:c,Post:h,hotspot:u,size:p,blurBG:m,ProductSetting:v,mediaOnly:_,inView:b,multiKey:g,index:f}=this.props,{id:x,link:w,products:y}=h,j=_||(null===h||void 0===h?void 0:h.media),{currentWidth:k,currentHeight:S}=this.state,C=p||100*o/d,I={paddingBottom:1===C?null:`${C}%`},P={backgroundImage:b?`url(${null===j||void 0===j||null===(t=j.image)||void 0===t?void 0:t.small})`:null},$=d>o?"100%":d/o*100+"%",N=d>o?o/d*100+"%":"100%",T=h.isProduct&&u&&h.hotspot,M={width:T&&p?$:null,height:T&&p?N:null};return(0,r.jsxs)("div",{className:`${c}_wrap_`,style:I,ref:this.mediaRef,children:[T&&m?(0,r.jsx)("div",{className:"tb_blur_bg_",style:P}):null,(0,r.jsxs)("div",{className:`${c}_wrap_in`,style:M,children:[T?(0,r.jsx)(a.A,{products:this.props.multiPic?h.mediaList[g].product:y,ProductSetting:v,hotspot:h.hotspot,dataPost:h,showTooltip:null},f):null,b?(0,r.jsx)("img",{className:`${c} tb_media-${x}`,src:null===j||void 0===j||null===(e=j.image)||void 0===e?void 0:e.small,srcSet:`${null===j||void 0===j||null===(i=j.image)||void 0===i?void 0:i.small} 1x, ${null===j||void 0===j||null===(s=j.image)||void 0===s?void 0:s.large} 2x`,sizes:`${k}px`,loading:b?"eager":"lazy",decoding:"async",fetchPriority:b?"high":"low","data-id":x,height:S,width:k,"data-height":o,"data-width":d,"data-link":w,onLoad:this.onLoad,onError:t=>{t.target.src=`${n.th}/media/error/no-image.svg`,t.target.srcset=`${n.th}/media/error/no-image.svg`,(0,l.bs)(t)},alt:null===j||void 0===j?void 0:j.title,title:null===j||void 0===j?void 0:j.title},`${x}-${o}-${d}-${b}`):null]})]})}}},43702:(t,e,i)=>{i.d(e,{A:()=>m});var s=i(65043),o=Object.defineProperty,n=(t,e,i)=>((t,e,i)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!==typeof e?e+"":e,i),l=new Map,a=new WeakMap,r=0,d=void 0;function c(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(i=t.root,i?(a.has(i)||(r+=1,a.set(i,r.toString())),a.get(i)):"0"):t[e]}`;var i})).toString()}function h(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==s){const o=t.getBoundingClientRect();return e(s,{isIntersecting:s,target:t,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:n,elements:a}=function(t){const e=c(t);let i=l.get(e);if(!i){const s=new Map;let o;const n=new IntersectionObserver((e=>{e.forEach((e=>{var i;const n=e.isIntersecting&&o.some((t=>e.intersectionRatio>=t));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=n),null==(i=s.get(e.target))||i.forEach((t=>{t(n,e)}))}))}),t);o=n.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:n,elements:s},l.set(e,i)}return i}(i),r=a.get(t)||[];return a.has(t)||a.set(t,r),r.push(e),n.observe(t),function(){r.splice(r.indexOf(e),1),0===r.length&&(a.delete(t),n.unobserve(t)),0===a.size&&(n.disconnect(),l.delete(o))}}s.Component;var u=i(92908),p=i(22030);const m=t=>{let{children:e}=t;const{ref:i,inView:o}=function(){let{threshold:t,delay:e,trackVisibility:i,rootMargin:o,root:n,triggerOnce:l,skip:a,initialInView:r,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var u;const[p,m]=s.useState(null),v=s.useRef(c),[_,b]=s.useState({inView:!!r,entry:void 0});v.current=c,s.useEffect((()=>{if(a||!p)return;let s;return s=h(p,((t,e)=>{b({inView:t,entry:e}),v.current&&v.current(t,e),e.isIntersecting&&l&&s&&(s(),s=void 0)}),{root:n,rootMargin:o,threshold:t,trackVisibility:i,delay:e},d),()=>{s&&s()}}),[Array.isArray(t)?t.toString():t,p,n,o,l,a,i,d,e]);const g=null==(u=_.entry)?void 0:u.target,f=s.useRef(void 0);p||!g||l||a||f.current===g||(f.current=g,b({inView:!!r,entry:void 0}));const x=[m,_.inView,_.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}({triggerOnce:!0,threshold:.01});return u.HY&&(0,p._7)(i),e({ref:i,inView:o})}},44961:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});var s=i(65043),o=i(97628),n=i(70579);const l=s.lazy((()=>i.e(1543).then(i.bind(i,21543))));class a extends s.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:i,isPopUp:a}=this.props;return(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(t)?(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(l,{networkId:t,networkClass:e})}):(0,n.jsx)("div",{className:`${e} tb__icon tb-${(0,o.EC)(t)}`,"aria-label":`post network ${(0,o.Oi)(t)}`,children:(0,n.jsx)("div",{})})}}},52141:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});var s=i(65043),o=i(92908),n=i(70579);const l=s.lazy((()=>i.e(1543).then(i.bind(i,21543)))),a=t=>{const{Post:e,IconClass:i,isCenter:a,hideVideo:r,show:d}=t,c=!![3,5].includes(e.type),h=7===e.network.id,u=!!(e.mediaList&&e.mediaList.length>0),p=1===e.isAudio,m=!!e.isProduct,v=(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(l,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),_=(0,n.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,n.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,n.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,n.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),x=(0,n.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return d?(0,n.jsxs)(n.Fragment,{children:[a&&(h||c)?(0,n.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!h?x:"",c&&h?v:""]}):null,m||u||c?(0,n.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?f:"",u?_:"",a||!c||h||r?"":p?b:g]}):null]}):null}},59373:(t,e,i)=>{i.r(e),i.d(e,{default:()=>j});var s=i(65043),o=i(22030),n=i(92908),l=i(36671),a=i(69433),r=i(52141),d=i(70579);const c=t=>{let{Post:e,ThemeStyle:i,index:s,inView:o}=t;const c=!e.hotspot,h=!(![3,5].includes(e.type)||1!=i.autoPlay);return(0,d.jsxs)("div",{className:"tb_sp_media_wrap",children:[(0,d.jsx)(r.default,{Post:e,IconClass:"tb_sp_media_icon",show:c,hideVideo:i.autoPlay}),h?(0,d.jsx)(a.A,{VideoClass:"tb_sp_video",Post:e,size:100,isCover:!0,controls:!1,autoPlay:!0,muted:!0,observer:!0,index:s,inView:o}):(0,d.jsx)(l.A,{ImageClass:"tb_sp_image",Post:e,size:100,hotspot:!0,blurBG:n.HY,observer:!0,index:s,inView:o})]})};var h=i(84311),u=i(44961),p=i(90170);const m=(0,s.lazy)((()=>i.e(7278).then(i.bind(i,77278)))),v=(0,s.lazy)((()=>i.e(3538).then(i.bind(i,43538)))),_=(0,s.lazy)((()=>Promise.resolve().then(i.bind(i,44961)))),b=(0,s.lazy)((()=>i.e(768).then(i.bind(i,60768)))),g=t=>{let{Post:e,CardStyle:i}=t;const{author:o,networkId:n}=e,l=o.username&&o.username.length>0?`@${o.username}`:"",a=!(!i.author.status||o.isInstaUser),r=!(!i.author.status||!i.timeStatus||o.isInstaUser);return(0,d.jsxs)("div",{className:"tb_sp_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,d.jsxs)("div",{className:"tb_sp_author",children:[a?(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(m,{author:o,network:e.network,authorClass:"tb_sp_author_profile"})}):"",(0,d.jsxs)("div",{className:"tb_sp_author_info",children:[a?(0,d.jsx)("div",{className:"tb_sp_authorname",children:o.name}):"",(0,d.jsxs)("div",{className:"tb_sp_post_info",children:[a?(0,d.jsx)("div",{className:"tb_sp_username",children:l}):"",r?(0,d.jsx)(b,{sepClass:"tb_sp_seprator"}):"",i.timeStatus?(0,d.jsxs)(s.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[(0,d.jsx)(v,{postTime:e.createdAt,timeClass:`tb_sp_time tb-cTBfont-${i.author.variant}`})," "]}):""]})]})]}),(0,d.jsx)("div",{className:"tb_sp_social_",children:(0,d.jsxs)(s.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[(0,d.jsx)(_,{networkClass:"tb_sp_social__ico",networkId:n,iconStyle:i.icon})," "]})})]})};var f=i(89410),x=i(43702);const w=s.memo((t=>{let{Post:e,CardStyle:i,clickToShowPopUp:s,index:l,ThemeInfo:a,ThemeStyle:r,postSizeInPx:m,postSize:v}=t;const{networkId:_,share:b}=e,{style:w,content:y}=i,j=1!==e.type,k=i.content.status?(0,o.Ex)(e.content.text,200):e.content.text,S=m>200,C="tb_sp_"+(n.MH?"color_overlay":"post_overlay-"+(0===i.style.mode&&n.HY?"light":"dark")),I={backgroundColor:n.MH?w.background:""};return(0,d.jsx)(x.A,{children:t=>{let{ref:o,inView:m}=t;return(0,d.jsx)("div",{id:`tb_sp_id-${e.id}`,className:"tb_sp_post_wrapper"+(S?" tb_sp_post_wrapper2x":""),style:{width:`${v}%`,padding:w.padding/2,opacity:m?1:0,transition:m?"opacity .5s ease-in-out":""},"tb-network":e.network.id,"tb-product":""!=i.shopText&&e.isShopIcon?1:e.isHotspot?2:0,role:"article","aria-label":`Post ${parseInt(l)+1},${k}`,"post-id":e.referenceId?e.referenceId:e.id,tabIndex:"0",ref:o,children:(0,d.jsx)("div",{className:"tb_sp_post_in"+(n.HY?" tb_sp_post_ani":""),onClick:s(l,e),role:"button","aria-label":"Popup",tabIndex:0,children:(0,d.jsxs)("div",{className:"tb_sp_post_media_wrapp",role:"button",tabIndex:0,"aria-label":"Pop Up Button",children:[b.status&&(0,d.jsx)(h.default,{Post:e,ThemeInfo:a,shareClass:"tb_sp_share_container"}),j&&(0,d.jsx)(c,{Post:e,CardStyle:i,ThemeStyle:r,ThemeInfo:a,index:l,inView:m}),!e.isHotspot&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"tb_sp_post_details",children:[n.HY&&(0,d.jsx)("div",{className:"tb_sp_social_",children:(0,d.jsx)(u.default,{networkClass:"tb_sp_social__ico",networkId:_,iconStyle:i.icon})}),""!=i.shopText&&e.isShopIcon&&(0,d.jsx)(p.default,{CardStyle:i,mode:1,btnClass:"tb_sp_btn_wrap"}),!n.HY&&(0,d.jsxs)(d.Fragment,{children:[65!==a.id&&(0,d.jsx)("div",{className:"tb_sp_contant_wrapper",children:(!i.content.status||1===e.type)&&(0,d.jsx)(f.default,{contentClass:"tb_sp_content",Post:e,content:k,CardStyle:i,contentTitle:y.title})}),(0,d.jsx)(g,{Post:e,CardStyle:i,ThemeStyle:r})]})]}),(0,d.jsx)("div",{className:`tb_sp_post_overlay ${C}`,style:I,children:(0,d.jsx)("div",{})})]})]})})})}})}));class y extends s.PureComponent{constructor(){super(...arguments),this.state={loadDelaydata:!1},this.handleScroll=()=>{this.state.loadDelaydata||this.setState({loadDelaydata:!0},(()=>this.props.loadMoredata()))}}componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.props.loadBranding()}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){const{postData:t,completeDataObject:e,CardStyle:i,ThemeStyle:s,ProductSetting:n,ThemeInfo:l,clickToShowPopUp:a,onClickPopUpSlider:r,containerSize:c}=this.props,h=Math.max((c.width/310).toFixed(),1),u=(0,o.GH)(c.width,s.column,h),p=(0,o.Cv)(c.width,u);let m=t.length;if(null!==s&&void 0!==s&&s.bestFit&&t.length>=parseInt(u)){const e=Math.floor(t.length/parseInt(u));m=parseInt(u)*e}return(0,d.jsx)("div",{tabIndex:"0","aria-label":`There are ${t.length>0?t.length:0} posts in the feed`,role:"feed",className:"tb_sp_post_container",children:t.map(((t,o)=>{if(o>=m)return null;const h=e[t];return(0,d.jsx)(w,{Post:h,ThemeInfo:l,index:o,CardStyle:i,ThemeStyle:s,ProductSetting:n,clickToShowPopUp:a,onClickPopUpSlider:r,postSize:p,postSizeInPx:c.width/u},o)}))})}}const j=y},69433:(t,e,i)=>{i.d(e,{A:()=>c});var s=i(65043),o=i(1043),n=i.n(o),l=i(92908),a=i(65281),r=i(70579);class d extends s.Component{constructor(t){super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:s}=await(0,a.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small);this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,s,o,a;const{VideoClass:d,Post:c,controls:h,autoPlay:u,handleVideoEnded:p,muted:m,intervalTime:v,size:_,inView:b}=this.props,{calcHeight:g,calcWidth:f,currentWidth:x,currentHeight:w}=this.state,{media:y,id:j,link:k,networkId:S}=c,C=1===_,I=null!==y&&void 0!==y&&y.height?null===y||void 0===y?void 0:y.height:g,P=null!==y&&void 0!==y&&y.width?null===y||void 0===y?void 0:y.width:f,$={paddingBottom:`${C?null:_||100*I/P}%`};return(0,r.jsx)("div",{className:`${d}_wrap_`,style:$,ref:this.mediaRef,children:(0,r.jsx)(n(),{className:`${d} tb_media-${j}`,url:null!==y&&void 0!==y&&null!==(t=y.video)&&void 0!==t&&t.clip?null===y||void 0===y||null===(e=y.video)||void 0===e?void 0:e.clip:b?null===y||void 0===y||null===(i=y.video)||void 0===i?void 0:i.full:null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.small,"data-height":g,"data-width":f,"data-type":"video","data-network":S,"data-link":k,"data-item-id":j,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":P,"data-height":I,poster:null===y||void 0===y||null===(o=y.image)||void 0===o?void 0:o.small}},file:{attributes:{preload:"metadata",poster:null===y||void 0===y||null===(a=y.image)||void 0===a?void 0:a.small,height:w,width:x}}},loop:!(l.aD&&!l.HY&&null!==c&&void 0!==c&&c.loopStop)&&u,onError:t=>{C&&p&&setTimeout((()=>{this._isMounted&&p&&p()}),1e3*v),this.setVideoLoaded(!1)},autoPlay:b&&u?1:0,muted:m,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!l.HY),playing:b&&u?1:0,controls:h||!1,onEnded:p,title:null===y||void 0===y?void 0:y.title},`${j}-${w}-${f}-${b}`)})}}const c=(0,s.memo)(d)},80714:(t,e,i)=>{i.d(e,{A:()=>p});var s=i(65043),o=i(83003),n=i(39532),l=i(65281),a=i(26165),r=i(57515),d=i(70579);const c=(0,s.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,s=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,s]})]})})),h=t=>{let{products:e,appData:i,Post:o,showTooltip:h,isPopup:u}=t;const[p,m]=(0,s.useState)(null),v=(0,s.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,s.useEffect)((()=>{if(h){const t=e.findIndex((t=>t.id===h));-1!==t&&m(t)}else m(null)}),[h,e]);const _=(0,s.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,a.hq)({})}),[i,o]),b=(0,s.useCallback)(((t,e)=>{t.stopPropagation(),_(e),window.open(e.url,"_blank")}),[_]);return null!==v&&void 0!==v&&v.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,l.Ul)()}-`,s=p===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>m(e),onMouseLeave:()=>m(null),onClick:e=>{b(e,t)},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===v.type?"tb_hotspot_ani__":""),children:e+1}),(0,d.jsx)(r.A,{wallId:i,children:(0,d.jsx)(n.m_,{appendTo:"body","data-tooltip-id":`tooltip-${t.id}-${Math.random().toString(36).substr(2,9)}`,className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,...u?{isOpen:s}:{},children:(0,d.jsx)(c,{item:t})},e)})]},`${t.id}-${e}`)})):null},u=(0,s.memo)(h),p=(0,o.Ng)((t=>({appData:t.appData})))(u)},84311:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(65043),o=i(26165),n=i(70579);class l extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:i,ThemeInfo:s}=this.props;e.stopPropagation(),(0,o.hq)({type:2,action:2,wall:s.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:s.ownerId}),(0,o.x9)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:i,twitter:s,linkedin:o}=null===e||void 0===e?void 0:e.share,l=t=>{let{shareOn:e,icon:i}=t;return(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,n.jsx)("div",{})})})};return(0,n.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,n.jsx)(l,{shareOn:i,icon:"facebook"}):"",s?(0,n.jsx)(l,{shareOn:s,icon:"twitter"}):"",o?(0,n.jsx)(l,{shareOn:o,icon:"linkedin"}):""]})]})}}},89410:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=i(65043),o=i(92908),n=i(80229),l=i(65281),a=i(70579);class r extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,s;const t=(null===(i=this.contentRef)||void 0===i||null===(s=i.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:s,maxLines:r,isReadMore:d}=this.props,c=t.content.trimcontent&&!o.HY?t.content.trimcontent:0,h={WebkitLineClamp:r,textAlign:t.style.textAlign},u=(0,l.w)(i),p=`${e} ${d?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${t.style.variant}`;return(0,a.jsxs)("div",{className:p,ref:this.contentRef,style:h,children:[s?(0,a.jsx)("div",{className:"tb_bold_txt__",children:(0,n.Ay)(s)}):null,(0,n.Ay)(u)]})}}},90170:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});var s=i(70579);const o=t=>{var e;let{CardStyle:i,btnClass:o,mode:n}=t;const l={fontFamily:null===i||void 0===i||null===(e=i.style)||void 0===e?void 0:e.font};return(0,s.jsx)("div",{className:`tb_shop_btn_wrap ${o}`,children:(0,s.jsx)("div",{className:"tb_shop_btn"+(n?" tb_shop_btn_light":" tb_shop_btn_dark"),style:l,children:i.shopText})})}},97628:(t,e,i)=>{i.d(e,{EC:()=>s,Oi:()=>n,Yo:()=>o});const s=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),o=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),n=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")}}]);
//# sourceMappingURL=9373.fe585e55.chunk.js.map