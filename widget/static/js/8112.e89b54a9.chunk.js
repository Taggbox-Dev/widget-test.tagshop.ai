(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[203,2319,2584,4033,5108,6304,6414,7775,8112,9502,9538,9882],{89927:()=>{},44238:(t,e,s)=>{"use strict";s.d(e,{bs:()=>d});var i=s(31530),o=s(7665),a=s(83884),n=s(10753),l=s(89620);let r=[];const d=t=>{t.persist();const e=t.target,{network:s,itemId:i,themeId:o}=e.dataset;if(1!=s||[3,4,16,47,50,55,60].includes(o))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${i}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:s}=o.A.getState().appData;if(!s||!Object.keys(s).length||!r.length)return;const{User:d,Wall:u}=s,p=null===d||void 0===d?void 0:d.id,m=(a.HY,null===u||void 0===u?void 0:u.id),_=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:v,network:b,itemId:g,load:f}=_.dataset,w=document.querySelector(`img[data-item-id="${g}"]`),y=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==y&&void 0!==y&&y.length){var x;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(x=y[0])||void 0===x?void 0:x.postFileNew);if(!t&&w){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==v&&!_.src.includes("cloud.taggbox.com")){const t=((t,e,s)=>{var i,o,a,n,l;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==s&&void 0!==s&&s.length?{feedId:null===(i=s[0])||void 0===i?void 0:i.feedId,type:null===(o=s[0])||void 0===o?void 0:o.type,link:null===(a=s[0])||void 0===a?void 0:a.link,postFile:null===(n=s[0])||void 0===n?void 0:n.postFile,mediaFile:null===(l=s[0])||void 0===l?void 0:l.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:m,postId:g,ownerId:p},s,y);try{const{data:e}=await(new l.A).post(a.t5,t,{headers:n.ML}),s=a.HY||a.MH?"":`https://images.${a.QR}/`;_.src="18"===b?`${s}${e.media}`:e.media}catch{_.src=i.gX}finally{h(_)}}else _.src=i.gX,h(_);r.shift(),c()}else{const t=`${i.th}/media/images/no-image.svg`;_.src=t,_.srcset=t,h(_),r.shift()}}},h=t=>t.setAttribute("data-load","1")},16414:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(82483),o=s(9916),a=s(56723);class n extends i.PureComponent{render(){const{author:t,authorClass:e,networkId:s,size:i}=this.props;return(0,a.jsx)("div",{className:e,style:{overflow:4==s?"visible":""},children:(0,a.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:i||44,height:i||44,onError:e=>{const i=(0,o.Yo)(s),a="#ffffff"==i?"000":i.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${a}&color=fff&length=1`}})},Math.random())}}},82803:(t,e,s)=>{"use strict";s.d(e,{A:()=>p});var i=s(82483),o=s(91965),a=s(99998),n=s(76467),l=s(99009),r=s(29269),d=s(56723);const c=(0,i.memo)((t=>{let{item:e}=t;const s=e.discount>0&&e.discount!==e.price,i=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),s&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,i]})]})})),h=t=>{let{products:e,appData:s,Post:o}=t;const[h,u]=(0,i.useState)(null),p=(0,i.useMemo)((()=>{var t,e;return(null===s||void 0===s||null===(t=s.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[s]),m=(0,i.useCallback)((t=>{null!==s&&void 0!==s&&s.wall&&(0,r.hq)({})}),[s,o]),_=(0,i.useCallback)(((t,e)=>{t.stopPropagation(),m(e),window.open(e.url,"_blank")}),[m]);return null!==p&&void 0!==p&&p.status?e.map(((t,e)=>{const s=`hotspot-${t.id}-${(0,l.Ul)()}`,i=h===e;return(0,d.jsxs)("div",{id:s,className:"tb_hotspot_dot"+(i?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>u(e),onMouseLeave:()=>u(null),onClick:e=>_(e,t),"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ "+(0===p.type?"tb_hotspot_ani__":""),children:e+1}),(0,a.createPortal)((0,d.jsx)(n.m_,{className:"tb_pro_tooltip",anchorSelect:`#${s}`,clickable:!0,children:(0,d.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},u=(0,i.memo)(h),p=(0,o.Ng)((t=>({appData:t.appData})))(u)},15653:(t,e,s)=>{"use strict";s.d(e,{A:()=>m});var i=s(82483),o=Object.defineProperty,a=(t,e,s)=>((t,e,s)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s)(t,"symbol"!==typeof e?e+"":e,s),n=new Map,l=new WeakMap,r=0,d=void 0;function c(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(s=t.root,s?(l.has(s)||(r+=1,l.set(s,r.toString())),l.get(s)):"0"):t[e]}`;var s})).toString()}function h(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==i){const o=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:"number"===typeof s.threshold?s.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:a,elements:l}=function(t){const e=c(t);let s=n.get(e);if(!s){const i=new Map;let o;const a=new IntersectionObserver((e=>{e.forEach((e=>{var s;const a=e.isIntersecting&&o.some((t=>e.intersectionRatio>=t));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=a),null==(s=i.get(e.target))||s.forEach((t=>{t(a,e)}))}))}),t);o=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),s={id:e,observer:a,elements:i},n.set(e,s)}return s}(s),r=l.get(t)||[];return l.has(t)||l.set(t,r),r.push(e),a.observe(t),function(){r.splice(r.indexOf(e),1),0===r.length&&(l.delete(t),a.unobserve(t)),0===l.size&&(a.disconnect(),n.delete(o))}}i.Component;var u=s(83884),p=s(24366);const m=t=>{let{children:e}=t;const{ref:s,inView:o}=function(){let{threshold:t,delay:e,trackVisibility:s,rootMargin:o,root:a,triggerOnce:n,skip:l,initialInView:r,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var u;const[p,m]=i.useState(null),_=i.useRef(c),[v,b]=i.useState({inView:!!r,entry:void 0});_.current=c,i.useEffect((()=>{if(l||!p)return;let i;return i=h(p,((t,e)=>{b({inView:t,entry:e}),_.current&&_.current(t,e),e.isIntersecting&&n&&i&&(i(),i=void 0)}),{root:a,rootMargin:o,threshold:t,trackVisibility:s,delay:e},d),()=>{i&&i()}}),[Array.isArray(t)?t.toString():t,p,a,o,n,l,s,d,e]);const g=null==(u=v.entry)?void 0:u.target,f=i.useRef(void 0);p||!g||n||l||f.current===g||(f.current=g,b({inView:!!r,entry:void 0}));const w=[m,v.inView,v.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}({triggerOnce:!0,threshold:.01});return u.HY&&(0,p._7)(s),e({ref:s,inView:o})}},19882:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(82483),o=s(83884),a=s(56723);const n=i.lazy((()=>s.e(8807).then(s.bind(s,88807)))),l=t=>{const{Post:e,IconClass:s,isCenter:l,hideVideo:r,show:d}=t,c=!![3,5].includes(e.type),h=7===e.network.id,u=!!(e.mediaList&&e.mediaList.length>0),p=1===e.isAudio,m=!!e.isProduct,_=(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(n,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),v=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,a.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return d?(0,a.jsxs)(a.Fragment,{children:[l&&(h||c)?(0,a.jsxs)("div",{className:`${s} tb__media_ico_c`,children:[c&&!h?w:"",c&&h?_:""]}):null,m||u||c?(0,a.jsxs)("div",{className:`${s} tb__media_ico_`,children:[m?f:"",u?v:"",l||!c||h||r?"":p?b:g]}):null]}):null}},7775:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var i=s(82483),o=s(99009),a=s(31530),n=s(44238),l=s(82803),r=s(56723);class d extends i.PureComponent{constructor(t){var e,s;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,s=e||t.media;if((null===s||void 0===s||!s.height)&&(null===s||void 0===s||!s.width))try{var i;const{width:t,height:e}=await(0,o.TW)(null===s||void 0===s||null===(i=s.image)||void 0===i?void 0:i.small);this._isMounted&&this.setState({height:e,width:t})}catch(a){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:a,Post:n}=t;this.state={height:(null===a||void 0===a?void 0:a.height)||(null===n||void 0===n||null===(e=n.media)||void 0===e?void 0:e.height)||0,width:(null===a||void 0===a?void 0:a.width)||(null===n||void 0===n||null===(s=n.media)||void 0===s?void 0:s.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=i.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,s,i;const{height:o,width:d}=this.state;if(!o||!d)return null;const{ImageClass:c,Post:h,hotspot:u,size:p,blurBG:m,ProductSetting:_,mediaOnly:v,inView:b,multiKey:g}=this.props,{id:f,link:w,products:y}=h,x=v||(null===h||void 0===h?void 0:h.media),{currentWidth:j,currentHeight:k}=this.state,S=p||100*o/d,P={paddingBottom:1===S?null:`${S}%`},C={backgroundImage:b?`url(${null===x||void 0===x||null===(t=x.image)||void 0===t?void 0:t.small})`:null},I=d>o?"100%":d/o*100+"%",N=d>o?o/d*100+"%":"100%",T=h.isProduct&&u,$={width:T&&p?I:null,height:T&&p?N:null};return(0,r.jsxs)("div",{className:`${c}_wrap_`,style:P,ref:this.mediaRef,children:[T&&m?(0,r.jsx)("div",{className:"tb_blur_bg_",style:C}):null,(0,r.jsxs)("div",{className:`${c}_wrap_in`,style:$,children:[T?(0,r.jsx)(l.A,{products:this.props.multiPic?h.mediaList[g].product:y,ProductSetting:_,hotspot:h.hotspot,dataPost:h}):null,(0,r.jsx)("img",{className:`${c} tb_media-${f}`,src:null===x||void 0===x||null===(e=x.image)||void 0===e?void 0:e.small,srcSet:`${null===x||void 0===x||null===(s=x.image)||void 0===s?void 0:s.small} 1x, ${null===x||void 0===x||null===(i=x.image)||void 0===i?void 0:i.large} 2x`,sizes:`${j}px`,loading:b?"eager":"lazy",decoding:"async",fetchPriority:b?"high":"low","data-id":f,height:k,width:j,"data-height":o,"data-width":d,"data-link":w,onLoad:this.onLoad,onError:t=>{t.target.src=`${a.th}/media/error/no-image.svg`,t.target.srcset=`${a.th}/media/error/no-image.svg`,(0,n.bs)(t)},alt:null===x||void 0===x?void 0:x.title,title:null===x||void 0===x?void 0:x.title},`${f}-${o}-${d}-${b}`)]})]})}}},33689:(t,e,s)=>{"use strict";s.d(e,{A:()=>c});var i=s(82483),o=s(48819),a=s.n(o),n=s(83884),l=s(99009),r=s(56723);class d extends i.Component{constructor(t){super(t),this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:s,height:i}=await(0,l.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small);this._isMounted&&this.setState({calcHeight:i,calcWidth:s})}catch(s){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0},this.mediaRef=i.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,this.mediaSizeCalc()}componentWillUnmount(){this._isMounted=!1}render(){var t,e,s,i;const{calcHeight:o,calcWidth:l}=this.state;if(!o||!l)return null;const{VideoClass:d,Post:c,controls:h,autoPlay:u,handleVideoEnded:p,muted:m,intervalTime:_,size:v,inView:b}=this.props,{media:g,id:f,link:w,networkId:y}=c,x=1===v,j=null!==g&&void 0!==g&&g.height?null===g||void 0===g?void 0:g.height:o,k=null!==g&&void 0!==g&&g.width?null===g||void 0===g?void 0:g.width:l,S={paddingBottom:`${x?null:v||100*j/k}%`};return(0,r.jsx)("div",{className:`${d}_wrap_`,style:S,ref:this.mediaRef,children:(0,r.jsx)(a(),{className:`${d} tb_media-${f}`,url:b?null===g||void 0===g||null===(t=g.video)||void 0===t?void 0:t.full:null===g||void 0===g||null===(e=g.image)||void 0===e?void 0:e.small,"data-height":o,"data-width":l,"data-type":"video","data-network":y,"data-link":w,"data-item-id":f,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":k,"data-height":j,poster:null===g||void 0===g||null===(s=g.image)||void 0===s?void 0:s.small}},file:{attributes:{preload:"metadata",poster:null===g||void 0===g||null===(i=g.image)||void 0===i?void 0:i.small}}},loop:!(n.aD&&!n.HY&&null!==c&&void 0!==c&&c.loopStop)&&u,onError:t=>{x&&p&&setTimeout((()=>{this._isMounted&&p&&p()}),1e3*_),this.setVideoLoaded(!1)},autoPlay:b&&u?1:0,muted:m,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!n.HY),playing:b&&u?1:0,controls:h||!1,onEnded:p,title:null===g||void 0===g?void 0:g.title},`${f}-${o}-${l}-${b}`)})}}const c=(0,i.memo)(d)},70203:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(82483),o=s(9916),a=s(56723);const n=i.lazy((()=>s.e(8807).then(s.bind(s,88807))));class l extends i.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:s,isPopUp:l}=this.props;return(null===s||void 0===s?void 0:s.default)||[7,4,36].includes(t)?(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(n,{networkId:t,networkClass:e})}):(0,a.jsx)("div",{className:`${e} tb__icon tb-${(0,o.EC)(t)}`,"aria-label":`post network ${(0,o.Oi)(t)}`,children:(0,a.jsx)("div",{})})}}},49502:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(82483),o=s(83884),a=s(99009),n=s(56723);class l extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var s,i;const t=(null===(s=this.contentRef)||void 0===s||null===(i=s.current)||void 0===i?void 0:i.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:s,contentTitle:i,maxLines:l,isReadMore:r}=this.props,d=t.content.trimcontent&&!o.HY?t.content.trimcontent:0,c={WebkitLineClamp:l,textAlign:t.style.textAlign},h=(0,a.w)(s),u=`${e} ${r?"":""+(d?` tb_content_line-${d}`:"")} tb-cTBfont-${t.style.variant}`;return(0,n.jsxs)("div",{className:u,ref:this.contentRef,style:c,children:[i?(0,n.jsx)("div",{className:"tb_bold_txt__",children:i}):null,h]})}}},26304:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});s(82483);var i=s(56723);const o=t=>{const{sepClass:e}=t;return(0,i.jsx)("div",{className:e,children:"   "})}},2319:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(82483),o=s(29269),a=s(56723);class n extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:s,ThemeInfo:i}=this.props;e.stopPropagation(),(0,o.hq)({type:2,action:2,wall:i.wallID,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:i.ownerId}),(0,o.x9)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:s,twitter:i,linkedin:o}=null===e||void 0===e?void 0:e.share,n=t=>{let{shareOn:e,icon:s}=t;return(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e),className:`tb_share_ico__ tb__icon tb-${s}`,title:s,children:(0,a.jsx)("div",{})})})};return(0,a.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[s?(0,a.jsx)(n,{shareOn:s,icon:"facebook"}):"",i?(0,a.jsx)(n,{shareOn:i,icon:"twitter"}):"",o?(0,a.jsx)(n,{shareOn:o,icon:"linkedin"}):""]})]})}}},95108:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});var i=s(56723);const o=t=>{var e;let{CardStyle:s,btnClass:o,mode:a}=t;const n={fontFamily:null===s||void 0===s||null===(e=s.style)||void 0===e?void 0:e.font};return(0,i.jsx)("div",{className:`tb_shop_btn_wrap ${o}`,children:(0,i.jsx)("div",{className:"tb_shop_btn"+(a?" tb_shop_btn_light":" tb_shop_btn_dark"),style:n,children:s.shopText})})}},99538:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(82483),o=s(99009),a=s(56723);const n=t=>{const{createdAt:e,timeClass:s}=t;return(0,a.jsx)("div",{className:s,role:"status","aria-label":`post timestamp ${(0,o.fF)(e)}`,children:(0,o.fF)(e)})},l=(0,i.memo)(n)},22852:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>C});var i=s(82483),o=s(91965),a=s(87869),n=(s(89927),s(83884)),l=s(24366),r=s(29269),d=s(16414),c=s(99538),h=s(26304),u=s(56723);const p=i.lazy((()=>Promise.resolve().then(s.bind(s,70203)))),m=t=>{let{Post:e,CardStyle:s}=t;const{author:o,networkId:a}=e,r=o.username&&o.username.length>0?`@${o.username}`:"",m=(0,l.zK)(o.name),_=!(!s.author.status||m),v=!(!s.author.status||!s.timeStatus||m||""==r);return(0,u.jsxs)("div",{className:"tb_hs_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,u.jsxs)("div",{className:"tb_hs_author",children:[_?(0,u.jsx)(d.default,{author:o,network:e.network,networkId:a,authorClass:"tb_hs_author_profile"}):"",(0,u.jsxs)("div",{className:"tb_hs_author_info",children:[_?(0,u.jsx)("div",{className:"tb_hs_authorname",children:o.name}):"",(0,u.jsxs)("div",{className:"tb_hs_post_info",children:[_?(0,u.jsx)("div",{className:"tb_hs_username",children:`@${r}`}):"",v?(0,u.jsx)(h.default,{sepClass:"tb_hs_seprator"}):"",s.timeStatus?(0,u.jsx)(c.default,{createdAt:e.createdAt,timeClass:`tb_hs_time tb-cTBfont-${s.author.variant}`}):""]})]})]}),n.O7?null:(0,u.jsx)("div",{className:"tb_hs_social_",children:(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(p,{networkClass:"tb_hs_social__ico",networkId:a,iconStyle:s.icon})})})]})};var _=s(7775),v=s(33689),b=s(19882);const g=t=>{let{Post:e,CardStyle:s,ThemeStyle:i,ProductSetting:o,index:a,inView:l}=t;const r=n.MH&&s.style.ratio?s.style.ratio:100,d=!(![3,5].includes(e.type)||1!=i.autoPlay||!l),c=!n.HY||!e.hotspot;return(0,u.jsxs)("div",{className:"tb_hs_media_wrap",children:[(0,u.jsx)(b.default,{Post:e,IconClass:"tb_hs_media_icon",show:c,hideVideo:i.autoPlay}),d?(0,u.jsx)(v.A,{VideoClass:"tb_hs_video",Post:e,size:r,isCover:!0,muted:!0,autoPlay:!0,index:a,inView:l},e.id):(0,u.jsx)(_.default,{ImageClass:"tb_hs_image",Post:e,size:r,ProductSetting:o,hotspot:!0,blurBG:n.HY,index:a,inView:l},e.id)]})};var f=s(49502),w=s(70203),y=s(95108),x=s(2319),j=s(15653);const k=t=>{let{onClickPopUpSlider:e,isTrue:s,postSizeInPx:o,index:a,ThemeStyle:r,CardStyle:d,Post:c,ProductSetting:h,ThemeInfo:p}=t;const{networkId:_}=c,{style:v}=d,b=1!==c.type,k=d.content.trimcontent?(0,l.Ex)(c.content.text,200):c.content.text,S=o.adjustWidth<250,P=!d.content.status,C=c.isShopIcon?0==P:1!=d.content.status,I=!!c.isShopIcon&&0!=P,N=0==d.style.mode&&n.HY?"light":"dark",T=n.MH?"tb_hs_color_overlay":"tb_hs_post_overlay-"+N,$={backgroundColor:n.MH?d.style.background:""},D=s?{width:o.adjustWidth}:{};return(0,i.useEffect)((()=>{c.isPopUp&&e(a,c)}),[a,c.isPopUp,c]),(0,u.jsx)(j.A,{children:t=>{let{ref:e,inView:s}=t;return(0,u.jsx)("div",{id:`tb_hs_id-${c.id}`,className:"tb_hs_post_wrapper"+(S?" tb_hs_post_wrapper2x":""),style:{...D,padding:v.padding/2,opacity:s?1:0,transition:s?"opacity .5s ease-in-out":""},"tb-product":c.isShopIcon?1:c.isHotspot?2:0,"area-label":c.content.text,role:"article",ref:e,children:(0,u.jsxs)("div",{id:c.id,className:"tb_hs_post_in"+(n.HY?" tb_hs_post_ani":""),role:"button","aria-label":"Popup",children:[b?(0,u.jsx)(g,{Post:c,CardStyle:d,ThemeStyle:r,ProductSetting:h,index:a,inView:s},a):"",c.isHotspot?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"tb_hs_post_details",children:[(0,u.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[n.HY?(0,u.jsx)("div",{className:"tb_hs_social_",children:(0,u.jsx)(w.default,{networkClass:"tb_hs_social__ico",networkId:_,iconStyle:d.icon})}):null,I?(0,u.jsx)(y.default,{CardStyle:d,btnClass:"tb_hs_btn_wrap"}):null,C||1==c.type?(0,u.jsx)(f.default,{contentClass:"tb_hs_content",Post:c,content:k,CardStyle:d,contentTitle:c.content.title}):null]}),n.HY?null:(0,u.jsx)(m,{Post:c,CardStyle:d}),c.share.status?(0,u.jsx)(x.default,{Post:c,ThemeInfo:p,shareClass:"tb_hs_share_container"}):null]}),c.isHotspot?null:(0,u.jsx)("div",{className:`tb_hs_post_overlay ${T}`,style:$,children:(0,u.jsx)("div",{})})]})]})})}})},S=t=>{let{isTrue:e,children:s}=t;return e?(0,u.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:s}):s};class P extends i.PureComponent{constructor(t){super(t),this.handleKeyPress=t=>{try{const{ThemeStyle:s}=this.props;if(1==s.slide.autoSlide){if(!["INPUT","TEXTAREA"].includes(t.target.tagName)&&"Space"===t.code){const{parentID:s}=this.props;t.preventDefault();var e=this.inputRefs[s].splide.Components.Autoplay;e.isPaused()?e.play():e.pause()}}}catch(s){}},this.requestData=()=>{const{appendData:t,preRender:e,hasMoreData:s,nextData:i,ThemeStyle:o,ThemeInfo:a}=this.props;!this.state.loadData&&this.updatepost(0),s&&i(n.HY?a.webId:a.wallId,Math.floor(Date.now()/1e3),o.totalPosts,t.networkID,t.after,e,t.heightEvent)},this.autoScrollSlider=t=>{const{ThemeStyle:e}=this.props,s=e.autoScrollStatus;if(t.on("drag",(()=>{this.isDragging=!0,!this.state.loadData&&this.updatepost(0)})),t.on("move",(()=>{!this.state.loadData&&!this.isDragging&&this.updatepost(3)})),1==s||n.HY){const e=t.index;t.length-e===t._o.perPage&&this.requestData()}},this.updatepost=t=>{this.state.loadData||(this.setState({loadData:!0}),setTimeout((()=>this.props.loadMoredata()),1e3*t))},this.state={parent_id:"",postData:[],loadData:!1},this.inputRefs={},this.isDragging=!1,this.splideRef=(0,i.createRef)()}componentDidMount(){setTimeout((()=>{const t=document.querySelectorAll(".splide__slide");t&&t.forEach((t=>{t.removeAttribute("aria-hidden"),t.removeAttribute("role")}))}),100);const{Post:t}=this.props;this.setState({Post:t}),window.addEventListener("keydown",this.handleKeyPress)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}render(){const{postData:t,completeDataObject:e,CardStyle:s,ThemeStyle:i,ProductSetting:o,ThemeInfo:r,onClickToCTA:d,postSizeInPx:c,parentID:h,loaderData:p,onClickPopUpSlider:m,adjustWidth:_,cardNumber:v,handlePressStart:b,handlePressEnd:g}=this.props,{ownerId:f}=r,w=h;var y=[];const x=i.column.desktop,j=i.column.mobile,P=i.slide.autoSlide,C=i.slide.slideDuration,I=i.autoScrollStatus,N=i.row&&0!==i.row?t.length<15&&(n.aD||n.Vn)?1:i.row:1;let T=!0;const $=9!=r.productType&&!n.HY||142546!=f&&141171!=f&&void 0===i.slide.clonePost?{}:142546==f||141171==f||0===i.slide.clonePost?{clones:1}:{};for(var D=0,M=t.length;D<M;)y.push(t.slice(D,D+=N));n.HY&&$&&0==Object.keys($).length&&(16677==r.wallId?"product"===window.dataFilterType&&(T=!!(y&&y.length>=5)):y=y.length<10?Array((0,l.qs)()?j>1?4:1:15-y.length).fill(y).flat():y);const R=1!=I?!Object.keys($).length&&(9==r.productType||"loop"):n.HY?"slide":"loop",H=!(142546!=f&&141171!=f||0!=x&&0!=j||(0,l.qs)())&&!(parseInt(v)<t.length),A=(0,l.qs)()?1:t.length,O={...$,type:1!==I&&R,rewind:!1,speed:1e3,interval:1===P?1e3*parseInt(C):5e3,perPage:x>0?x:9==r.productType?3:A>6?6:A,perMove:1,gap:0,autoplay:1===P,padding:0,updateOnMove:!0,dragThreshold:1e3,pagination:!1,arrows:!0,breakpoints:{560:{perPage:Math.max(j||1,1)},767:{perPage:Math.max(j||2,2)},991:{perPage:j||Math.min(A,3)},1200:{perPage:x||Math.min(A,4)},1400:{perPage:x||Math.min(A,5)},1600:{perPage:x||Math.min(A,6)}}};return(0,u.jsx)(u.Fragment,{children:""!=h?(0,u.jsxs)(S,{isTrue:H,children:[" ",(0,u.jsx)("div",{className:"tb_hs_post_container",style:H?{maxWidth:t.length*c.adjustWidth}:null,children:T?(0,u.jsxs)(a.eB,{ref:t=>{this.splideRef=t,this.inputRefs[w]=t},hasTrack:!1,className:"tb_hs_post_slider",options:O,onMove:this.autoScrollSlider,children:[(0,u.jsx)("div",{className:"splide__track",children:(0,u.jsx)("div",{className:"splide__list",children:(i.row>1&&1!==y.length&&y.length%2!==0?y.pop():y)&&y&&y.length>0&&y.map(((t,n)=>(0,u.jsx)("div",{className:`splide__slide splide__${n}`,children:(0,u.jsx)("div",{className:"tb_hs_col_wrap",children:t.map(((t,l)=>{const h=e[t];return(0,u.jsx)(a.Nn,{"data-id":h.id,onMouseDown:b,onMouseUp:t=>g(t,n,h),onTouchStart:b,onTouchEnd:t=>g(t,n,h),children:(0,u.jsx)(k,{Post:h,index:n,CardStyle:s,ThemeStyle:i,ProductSetting:o,ThemeInfo:r,onClickToCTA:d,postSizeInPx:c,onClickPopUpSlider:m,adjustWidth:_,isTrue:H})},l)}))})},`tb_${n}_${n}`)))})}),(0,u.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,u.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,u.jsx)("div",{})}),(0,u.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt "+(p.isShowMoreLoading?"tb_a_spinner":""),onClick:n.HY?t=>this.requestData():null,role:"button","aria-label":"Go to next slide",children:(0,u.jsx)("div",{})})]})]}):null})," "]}):null})}}const C=(0,o.Ng)((t=>({loaderData:t.loaderData})),(t=>({nextData:(e,s,i,o,a,n,l,d)=>t((0,r.wF)(e,s,i,o,a,n,l,d))})))(P)},9916:(t,e,s)=>{"use strict";s.d(e,{EC:()=>i,Oi:()=>a,Yo:()=>o});const i=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),o=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),a=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},59993:(t,e,s)=>{"use strict";var i=s(85730);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,s,o,a,n){if(n!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return s.PropTypes=s,s}},16405:(t,e,s)=>{t.exports=s(59993)()},85730:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=8112.e89b54a9.chunk.js.map