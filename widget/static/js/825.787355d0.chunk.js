"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[825,2141,4311,4961,6254,9410],{8494:(e,t,i)=>{i.d(t,{bs:()=>r});var n=i(78250),o=i(23499),s=i(92908),a=i(95553),l=i(89652);let d=[];const r=e=>{e.persist();const t=e.target,{network:i,itemId:n,themeId:o}=t.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))d.includes(e)||d.push(e);else{const e=document.querySelector(`.tb_media-${n}`);e&&(e.style.display="none")}1===d.length&&c()},c=async()=>{var e;const{postData:t,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!d.length)return;const{User:r,Wall:u}=i,p=null===r||void 0===r?void 0:r.id,m=(s.HY,null===u||void 0===u?void 0:u.id),v=null===(e=d[0])||void 0===e?void 0:e.target,{filterId:_,network:b,itemId:g,load:f}=v.dataset,x=document.querySelector(`img[data-item-id="${g}"]`),w=null!==t&&void 0!==t&&t.completeDataObject?Object.values(t.completeDataObject).filter((e=>e.id===g)):[];if(null!==w&&void 0!==w&&w.length){var y;const e=await(async e=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((t=>e.includes(t)))||await fetch(e).then((e=>e.ok)).catch((()=>!1)))(null===(y=w[0])||void 0===y?void 0:y.postFileNew);if(!e&&x){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==_&&!v.src.includes("cloud.taggbox.com")){const e=((e,t,i)=>{var n,o,s,a,l;const{UserPlan:d,Wall:r}=t;return{table_name:null===d||void 0===d?void 0:d.db_table,...e,...null!==i&&void 0!==i&&i.length?{feedId:null===(n=i[0])||void 0===n?void 0:n.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(s=i[0])||void 0===s?void 0:s.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(l=i[0])||void 0===l?void 0:l.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:g,ownerId:p},i,w);try{const{data:t}=await(new l.A).post(s.t5,e,{headers:a.ML}),i=s.HY||s.MH?"":`https://images.${s.QR}/`;v.src="18"===b?`${i}${t.media}`:t.media}catch{v.src=n.gX}finally{h(v)}}else v.src=n.gX,h(v);d.shift(),c()}else{const e=`${n.th}/media/images/no-image.svg`;v.src=e,v.srcset=e,h(v),d.shift()}}},h=e=>e.setAttribute("data-load","1")},36671:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(65043),o=i(65281),s=i(78250),a=i(8494),l=i(80714),d=i(70579);class r extends n.PureComponent{constructor(e){var t,i;super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{Post:e,mediaOnly:t}=this.props,i=t||e.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var n;const{width:e,height:t}=await(0,o.TW)(null===i||void 0===i||null===(n=i.image)||void 0===n?void 0:n.small);this._isMounted&&this.setState({height:t,width:e})}catch(s){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:s,Post:a}=e;this.state={height:(null===s||void 0===s?void 0:s.height)||(null===a||void 0===a||null===(t=a.media)||void 0===t?void 0:t.height)||0,width:(null===s||void 0===s?void 0:s.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=n.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var e,t,i,n;const{height:o,width:r}=this.state,{ImageClass:c,Post:h,hotspot:u,size:p,blurBG:m,ProductSetting:v,mediaOnly:_,inView:b,multiKey:g,index:f}=this.props,{id:x,link:w,products:y}=h,k=_||(null===h||void 0===h?void 0:h.media),{currentWidth:j,currentHeight:C}=this.state,S=p||100*o/r,I={paddingBottom:1===S?null:`${S}%`},$={backgroundImage:b?`url(${null===k||void 0===k||null===(e=k.image)||void 0===e?void 0:e.small})`:null},P=r>o?"100%":r/o*100+"%",T=r>o?o/r*100+"%":"100%",N=h.isProduct&&u&&h.hotspot,A={width:N&&p?P:null,height:N&&p?T:null};return(0,d.jsxs)("div",{className:`${c}_wrap_`,style:I,ref:this.mediaRef,children:[N&&m?(0,d.jsx)("div",{className:"tb_blur_bg_",style:$}):null,(0,d.jsxs)("div",{className:`${c}_wrap_in`,style:A,children:[N?(0,d.jsx)(l.A,{products:this.props.multiPic?h.mediaList[g].product:y,ProductSetting:v,hotspot:h.hotspot,dataPost:h,showTooltip:null},f):null,b?(0,d.jsx)("img",{className:`${c} tb_media-${x}`,src:null===k||void 0===k||null===(t=k.image)||void 0===t?void 0:t.small,srcSet:`${null===k||void 0===k||null===(i=k.image)||void 0===i?void 0:i.small} 1x, ${null===k||void 0===k||null===(n=k.image)||void 0===n?void 0:n.large} 2x`,sizes:`${j}px`,loading:b?"eager":"lazy",decoding:"async",fetchPriority:b?"high":"low","data-id":x,height:C,width:j,"data-height":o,"data-width":r,"data-link":w,onLoad:this.onLoad,onError:e=>{e.target.src=`${s.th}/media/error/no-image.svg`,e.target.srcset=`${s.th}/media/error/no-image.svg`,(0,a.bs)(e)},alt:null===k||void 0===k?void 0:k.title,title:null===k||void 0===k?void 0:k.title},`${x}-${o}-${r}-${b}`):null]})]})}}},43702:(e,t,i)=>{i.d(t,{A:()=>m});var n=i(65043),o=Object.defineProperty,s=(e,t,i)=>((e,t,i)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),a=new Map,l=new WeakMap,d=0,r=void 0;function c(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(l.has(i)||(d+=1,l.set(i,d.toString())),l.get(i)):"0"):e[t]}`;var i})).toString()}function h(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const o=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:s,elements:l}=function(e){const t=c(e);let i=a.get(t);if(!i){const n=new Map;let o;const s=new IntersectionObserver((t=>{t.forEach((t=>{var i;const s=t.isIntersecting&&o.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=s),null==(i=n.get(t.target))||i.forEach((e=>{e(s,t)}))}))}),e);o=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:s,elements:n},a.set(t,i)}return i}(i),d=l.get(e)||[];return l.has(e)||l.set(e,d),d.push(t),s.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(l.delete(e),s.unobserve(e)),0===l.size&&(s.disconnect(),a.delete(o))}}n.Component;var u=i(92908),p=i(22030);const m=e=>{let{children:t}=e;const{ref:i,inView:o}=function(){let{threshold:e,delay:t,trackVisibility:i,rootMargin:o,root:s,triggerOnce:a,skip:l,initialInView:d,fallbackInView:r,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var u;const[p,m]=n.useState(null),v=n.useRef(c),[_,b]=n.useState({inView:!!d,entry:void 0});v.current=c,n.useEffect((()=>{if(l||!p)return;let n;return n=h(p,((e,t)=>{b({inView:e,entry:t}),v.current&&v.current(e,t),t.isIntersecting&&a&&n&&(n(),n=void 0)}),{root:s,rootMargin:o,threshold:e,trackVisibility:i,delay:t},r),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,p,s,o,a,l,i,r,t]);const g=null==(u=_.entry)?void 0:u.target,f=n.useRef(void 0);p||!g||a||l||f.current===g||(f.current=g,b({inView:!!d,entry:void 0}));const x=[m,_.inView,_.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}({triggerOnce:!0,threshold:.01});return u.HY&&(0,p._7)(i),t({ref:i,inView:o})}},44961:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var n=i(65043),o=i(97628),s=i(70579);const a=n.lazy((()=>i.e(1543).then(i.bind(i,21543))));class l extends n.PureComponent{render(){const{networkId:e,networkClass:t,iconStyle:i,isPopUp:l}=this.props;return(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(e)?(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(a,{networkId:e,networkClass:t})}):(0,s.jsx)("div",{className:`${t} tb__icon tb-${(0,o.EC)(e)}`,"aria-label":`post network ${(0,o.Oi)(e)}`,children:(0,s.jsx)("div",{})})}}},52141:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var n=i(65043),o=i(92908),s=i(70579);const a=n.lazy((()=>i.e(1543).then(i.bind(i,21543)))),l=e=>{const{Post:t,IconClass:i,isCenter:l,hideVideo:d,show:r}=e,c=!![3,5].includes(t.type),h=7===t.network.id,u=!!(t.mediaList&&t.mediaList.length>0),p=1===t.isAudio,m=!!t.isProduct,v=(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(a,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),_=(0,s.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,s.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,s.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,s.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),x=(0,s.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,s.jsxs)(s.Fragment,{children:[l&&(h||c)?(0,s.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!h?x:"",c&&h?v:""]}):null,m||u||c?(0,s.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?f:"",u?_:"",l||!c||h||d?"":p?b:g]}):null]}):null}},66254:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var n=i(65043),o=i(70579);class s extends n.PureComponent{render(){const{Post:e,ctaClass:t,onClickToCTA:i}=this.props,{cta:n}=e,s={color:null===n||void 0===n?void 0:n.color,backgroundColor:null===n||void 0===n?void 0:n.background};return(0,o.jsxs)("div",{className:t,style:s,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:t=>{t.stopPropagation(),i(e),window.open(`${n.url}`,"_blank")},children:[" ",n.text]})}}const a=s},69433:(e,t,i)=>{i.d(t,{A:()=>c});var n=i(65043),o=i(1043),s=i.n(o),a=i(92908),l=i(65281),d=i(70579);class r extends n.Component{constructor(e){super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{media:e}=this.props.Post;if((null===e||void 0===e||!e.height)&&(null===e||void 0===e||!e.width))try{var t;const{width:i,height:n}=await(0,l.TW)(null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.small);this._isMounted&&this.setState({calcHeight:n,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=e=>{this._isMounted&&this.setState({videoLoaded:e})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=n.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var e,t,i,n,o,l;const{VideoClass:r,Post:c,controls:h,autoPlay:u,handleVideoEnded:p,muted:m,intervalTime:v,size:_,inView:b}=this.props,{calcHeight:g,calcWidth:f,currentWidth:x,currentHeight:w}=this.state,{media:y,id:k,link:j,networkId:C}=c,S=1===_,I=null!==y&&void 0!==y&&y.height?null===y||void 0===y?void 0:y.height:g,$=null!==y&&void 0!==y&&y.width?null===y||void 0===y?void 0:y.width:f,P={paddingBottom:`${S?null:_||100*I/$}%`};return(0,d.jsx)("div",{className:`${r}_wrap_`,style:P,ref:this.mediaRef,children:(0,d.jsx)(s(),{className:`${r} tb_media-${k}`,url:null!==y&&void 0!==y&&null!==(e=y.video)&&void 0!==e&&e.clip?null===y||void 0===y||null===(t=y.video)||void 0===t?void 0:t.clip:b?null===y||void 0===y||null===(i=y.video)||void 0===i?void 0:i.full:null===y||void 0===y||null===(n=y.image)||void 0===n?void 0:n.small,"data-height":g,"data-width":f,"data-type":"video","data-network":C,"data-link":j,"data-item-id":k,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":$,"data-height":I,poster:null===y||void 0===y||null===(o=y.image)||void 0===o?void 0:o.small}},file:{attributes:{preload:"metadata",poster:null===y||void 0===y||null===(l=y.image)||void 0===l?void 0:l.small,height:w,width:x}}},loop:!(a.aD&&!a.HY&&null!==c&&void 0!==c&&c.loopStop)&&u,onError:e=>{S&&p&&setTimeout((()=>{this._isMounted&&p&&p()}),1e3*v),this.setVideoLoaded(!1)},autoPlay:b&&u?1:0,muted:m,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!a.HY),playing:b&&u?1:0,controls:h||!1,onEnded:p,title:null===y||void 0===y?void 0:y.title},`${k}-${w}-${f}-${b}`)})}}const c=(0,n.memo)(r)},80714:(e,t,i)=>{i.d(t,{A:()=>p});var n=i(65043),o=i(83003),s=i(39532),a=i(65281),l=i(26165),d=i(57515),r=i(70579);const c=(0,n.memo)((e=>{let{item:t}=e;const i=t.discount>0&&t.discount!==t.price,n=t.discount>0?t.discount:t.price;return(0,r.jsxs)("a",{hotspot:1,href:t.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:t.title}),i&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[t.currency,t.price]}),(t.price>0||t.discount>0)&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[t.currency,n]})]})})),h=e=>{let{products:t,appData:i,Post:o,showTooltip:h,isPopup:u}=e;const[p,m]=(0,n.useState)(null),v=(0,n.useMemo)((()=>{var e,t;return(null===i||void 0===i||null===(e=i.wall)||void 0===e||null===(t=e.ProductSetting)||void 0===t?void 0:t.Hotspot)||{}}),[i]);(0,n.useEffect)((()=>{if(h){const e=t.findIndex((e=>e.id===h));-1!==e&&m(e)}else m(null)}),[h,t]);const _=(0,n.useCallback)((e=>{null!==i&&void 0!==i&&i.wall&&(0,l.hq)({})}),[i,o]),b=(0,n.useCallback)(((e,t)=>{e.stopPropagation(),_(t),window.open(t.url,"_blank")}),[_]);return null!==v&&void 0!==v&&v.status?t.map(((e,t)=>{const i=`hotspot-${e.id}-${(0,a.Ul)()}-`,n=p===t;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(n?" tb_hotspot_active_":""),role:"button",style:{top:e.hotspot.top,left:e.hotspot.left},onMouseEnter:()=>m(t),onMouseLeave:()=>m(null),onClick:t=>{b(t,e)},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===v.type?"tb_hotspot_ani__":""),children:t+1}),(0,r.jsx)(d.A,{wallId:i,children:(0,r.jsx)(s.m_,{appendTo:"body","data-tooltip-id":`tooltip-${e.id}-${Math.random().toString(36).substr(2,9)}`,className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,...u?{isOpen:n}:{},children:(0,r.jsx)(c,{item:e})},t)})]},`${e.id}-${t}`)})):null},u=(0,n.memo)(h),p=(0,o.Ng)((e=>({appData:e.appData})))(u)},80825:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var n=i(65043),o=i(60303),s=i.n(o),a=i(92908),l=i(22030),d=i(70579);const r=(0,n.lazy)((()=>i.e(7278).then(i.bind(i,77278)))),c=(0,n.lazy)((()=>i.e(3538).then(i.bind(i,43538)))),h=(0,n.lazy)((()=>Promise.resolve().then(i.bind(i,44961)))),u=(0,n.lazy)((()=>i.e(768).then(i.bind(i,60768)))),p=e=>{let{Post:t,CardStyle:i,ThemeInfo:o,inView:s}=e;const{author:a,networkId:p}=t,{ThemeId:m}=o.id,v=a.username&&a.username.length>0?`@${a.username}`:"",_=(0,l.zK)(a.name),b=!(!i.author.status||_),g=!(!i.author.status||!i.timeStatus||_||""==v);return(0,d.jsxs)("div",{className:"tb_nc_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,d.jsxs)("div",{className:"tb_nc_author",children:[b?(0,d.jsxs)(n.Suspense,{fallback:(0,d.jsx)("div",{className:"tb_nc_author_profile"}),children:[(0,d.jsx)(r,{author:a,network:t.network,networkId:p,authorClass:"tb_nc_author_profile",inView:s})," "]}):"",(0,d.jsxs)("div",{className:"tb_nc_author_info",children:[b?(0,d.jsx)("div",{className:"tb_nc_authorname",children:a.name}):"",(0,d.jsxs)("div",{className:"tb_nc_post_info",children:[b&&""!=v?(0,d.jsx)("div",{className:"tb_nc_username",children:v}):"",g?(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)("div",{}),children:(0,d.jsx)(u,{sepClass:"tb_nc_seprator"})}):"",i.timeStatus?(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(c,{createdAt:t.createdAt,timeClass:`tb_nc_time tb-cTBfont-${i.author.variant}`})}):""]})]})]}),(0,d.jsx)("div",{className:"tb_nc_social_",children:(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)("div",{style:{minWidth:20}}),children:(0,d.jsx)(h,{networkClass:"tb_nc_social_ico",networkId:p,iconStyle:i.icon})})})]})};var m=i(36671),v=i(69433),_=i(52141),b=i(44961);const g=e=>{let{Post:t,ThemeStyle:i,CardStyle:n,ThemeInfo:o,index:s,inView:l}=e;const r=[3,5].includes(t.type)&&1==i.autoPlay||!1,c=!(!a.MH||!n.style.ratio)&&n.style.ratio,h=59==!o.id&&!a.HY&&!a.MH;return(0,d.jsxs)("div",{className:"tb_nc_media_wrap",children:[h?(0,d.jsx)("div",{className:"tb_nc_social_ tb_nc_social_top_",children:(0,d.jsx)(b.default,{networkClass:"tb_nc_social_ico",networkId:t.network.id,network:t.network,iconStyle:n.icon})}):null,(0,d.jsx)(_.default,{Post:t,IconClass:h?"tb_nc_media_icon_te":"tb_nc_media_icon",show:!0,hideVideo:r}),r?(0,d.jsx)(v.A,{VideoClass:"tb_nc_video",Post:t,size:c,isCover:!0,controls:!1,autoPlay:r,muted:!0,index:s,inView:l}):(0,d.jsx)(m.A,{ImageClass:"tb_nc_image",Post:t,size:c,hotspot:a.HY,blurBG:!1,observer:!0,index:s,inView:l})]})};var f=i(89410),x=i(84311),w=i(66254),y=i(43702);const k=n.lazy((()=>i.e(6575).then(i.bind(i,96575)))),j=n.lazy((()=>i.e(7005).then(i.bind(i,57005)))),C=e=>{let{postSize:t,clickToShowPopUp:i,index:o,onClickToCTA:s,ThemeStyle:r,CardStyle:c,Post:h,ThemeInfo:u,counter:m}=e;const v=u.id,_=1!==h.type,b=h.rating>0,C=h.rating>0?"tb_nc_rating_content":"tb_nc_content",S=1===h.type&&c.style.textDecoration?"tb_nc_text_decoration tb_nc_text_post":"",I=c.content.trimcontent?(0,l.Ex)(h.content.text,200):h.content.text;return(0,d.jsx)(y.A,{children:e=>{let{ref:l,inView:y}=e;return(0,d.jsx)("div",{ref:l,style:{width:`${t}%`,padding:c.style.padding/2,opacity:y?1:0,transition:y?"opacity .5s ease-in-out":""},className:"tb_nc_post_wrapper"+(a.MH&&83===v?` tb_nc_post_gradient tb_nc_gradient-${m}`:""),role:"article","area-label":h.content.text,children:(0,d.jsx)("div",{id:`tb_nc_id-${h.id}`,"tb-network":h.networkId,"post-id":h.referenceId||h.id,"feed-id":h.feedId,tabIndex:"0","area-label":I,role:"article",children:(0,d.jsx)("div",{className:"tb_nc_post_wrap_in",children:(0,d.jsxs)("div",{className:"tb_nc_post_in",onClick:i(o,h),role:"button","aria-label":"open detail modal for post",tabIndex:"0",children:[h.share.status?(0,d.jsx)(x.default,{share:h.share,shareClass:"tb_nc_share_container",Post:h,ThemeInfo:u}):null,_?(0,d.jsx)(g,{Post:h,CardStyle:c,ThemeStyle:r,ThemeInfo:u,index:o,inView:y}):null,b&&59!==v&&!a.HY?(0,d.jsx)("div",{className:"tb_nc_rating__",children:(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)("div",{className:"rating-default-height"}),children:(0,d.jsx)(j,{rating:h.rating,networkId:h.networkId})})}):null,(0,d.jsxs)("div",{className:"tb_nc_contant_wrapper",children:[(0,d.jsx)(p,{Post:h,CardStyle:c,ThemeStyle:r,mediaType:_,ThemeInfo:u,inView:y}),h.ctaStatus?(0,d.jsx)("div",{className:"tb_nc_post_cta",children:(0,d.jsx)(w.default,{ctaClass:"tb_nc_post_cta_btn",cta:h,Post:h,onClickToCTA:s})}):null,b&&a.HY?(0,d.jsx)("div",{className:"tb_nc_rating__",children:(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)("div",{className:"rating-default-height"}),children:(0,d.jsx)(j,{rating:h.rating,networkId:h.networkId})})}):null,c.content.status||1===h.type?(0,d.jsx)(f.default,{contentClass:`${C} ${S}`,Post:h,content:I,CardStyle:c,contentTitle:h.content.title}):null]}),c.actionStatus?(0,d.jsx)(n.Suspense,{fallback:"",children:(0,d.jsx)(k,{Post:h,CardStyle:c,actionClass:"tb_nc_social_action__"})}):null]})})})})}})};class S extends n.PureComponent{componentDidMount(){this.props.loadBranding()}render(){const{postData:e,completeDataObject:t,CardStyle:i,ThemeStyle:n,ThemeInfo:o,clickToShowPopUp:r,onClickToCTA:c,onClickPopUpSlider:h,containerSize:u}=this.props,p=Math.max((u.width/(i.minimumWidth+20)).toFixed(),1),m=(0,l.GH)(u.width,n.column,p),v=(0,l.Cv)(u.width,m);let _=0;return(0,d.jsx)(s(),{className:"tb_nc_post_container",tabIndex:"0","aria-label":`There are ${e&&e.length>0?e.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_nc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:e&&e.length>0&&e.map(((e,s)=>{const l=t[e];return _=a.MH&&83==(null===o||void 0===o?void 0:o.id)?s%6===0?1:_+1:1,(0,d.jsx)(C,{postSize:v,clickToShowPopUp:r,onClickToCTA:c,onClickPopUpSlider:h,Post:l,index:s,CardStyle:i,ThemeStyle:n,ThemeInfo:o},s)}))})}}const I=S},84311:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var n=i(65043),o=i(26165),s=i(70579);class a extends n.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{Post:i,ThemeInfo:n}=this.props;t.stopPropagation(),(0,o.hq)({type:2,action:2,wall:n.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:n.ownerId}),(0,o.x9)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{shareClass:e,Post:t}=this.props,{facebook:i,twitter:n,linkedin:o}=null===t||void 0===t?void 0:t.share,a=e=>{let{shareOn:t,icon:i}=e;return(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,s.jsx)("div",{})})})};return(0,s.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,s.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,s.jsx)("div",{})}),(0,s.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,s.jsx)(a,{shareOn:i,icon:"facebook"}):"",n?(0,s.jsx)(a,{shareOn:n,icon:"twitter"}):"",o?(0,s.jsx)(a,{shareOn:o,icon:"linkedin"}):""]})]})}}},89410:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var n=i(65043),o=i(92908),s=i(80229),a=i(65281),l=i(70579);class d extends n.PureComponent{constructor(e){super(e),this.contentRef=n.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var i,n;const e=(null===(i=this.contentRef)||void 0===i||null===(n=i.current)||void 0===n?void 0:n.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{CardStyle:e,contentClass:t,content:i,contentTitle:n,maxLines:d,isReadMore:r}=this.props,c=e.content.trimcontent&&!o.HY?e.content.trimcontent:0,h={WebkitLineClamp:d,textAlign:e.style.textAlign},u=(0,a.w)(i),p=`${t} ${r?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${e.style.variant}`;return(0,l.jsxs)("div",{className:p,ref:this.contentRef,style:h,children:[n?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,s.Ay)(n)}):null,(0,s.Ay)(u)]})}}},97628:(e,t,i)=>{i.d(t,{EC:()=>n,Oi:()=>s,Yo:()=>o});const n=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),o=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),s=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")}}]);
//# sourceMappingURL=825.787355d0.chunk.js.map