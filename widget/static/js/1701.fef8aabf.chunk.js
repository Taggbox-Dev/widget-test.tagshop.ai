"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[768,1701,2141,3538,4311,4897,4961,6254,6575,7005,7278,9410],{8494:(t,e,i)=>{i.d(e,{bs:()=>d});var s=i(78250),o=i(23499),n=i(92908),a=i(95553),l=i(89652);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:u}=i,_=null===d||void 0===d?void 0:d.id,p=(n.HY,null===u||void 0===u?void 0:u.id),m=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:v,network:b,itemId:g,load:f}=m.dataset,w=document.querySelector(`img[data-item-id="${g}"]`),y=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==y&&void 0!==y&&y.length){var x;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(x=y[0])||void 0===x?void 0:x.postFileNew);if(!t&&w){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==v&&!m.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,o,n,a,l;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(n=i[0])||void 0===n?void 0:n.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(l=i[0])||void 0===l?void 0:l.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:p,postId:g,ownerId:_},i,y);try{const{data:e}=await(new l.A).post(n.t5,t,{headers:a.ML}),i=n.HY||n.MH?"":`https://images.${n.QR}/`;m.src="18"===b?`${i}${e.media}`:e.media}catch{m.src=s.gX}finally{h(m)}}else m.src=s.gX,h(m);r.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;m.src=t,m.srcset=t,h(m),r.shift()}}},h=t=>t.setAttribute("data-load","1")},35847:()=>{},36671:(t,e,i)=>{i.d(e,{A:()=>d});var s=i(65043),o=i(65281),n=i(78250),a=i(8494),l=i(80714),r=i(70579);class d extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(n){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:n,Post:a}=t;this.state={height:(null===n||void 0===n?void 0:n.height)||(null===a||void 0===a||null===(e=a.media)||void 0===e?void 0:e.height)||0,width:(null===n||void 0===n?void 0:n.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,s;const{height:o,width:d}=this.state,{ImageClass:c,Post:h,hotspot:u,size:_,blurBG:p,ProductSetting:m,mediaOnly:v,inView:b,multiKey:g,index:f}=this.props,{id:w,link:y,products:x}=h,k=v||(null===h||void 0===h?void 0:h.media),{currentWidth:j,currentHeight:S}=this.state,C=_||100*o/d,I={paddingBottom:1===C?null:`${C}%`},N={backgroundImage:b?`url(${null===k||void 0===k||null===(t=k.image)||void 0===t?void 0:t.small})`:null},P=d>o?"100%":d/o*100+"%",$=d>o?o/d*100+"%":"100%",T=h.isProduct&&u&&h.hotspot,D={width:T&&_?P:null,height:T&&_?$:null};return(0,r.jsxs)("div",{className:`${c}_wrap_`,style:I,ref:this.mediaRef,children:[T&&p?(0,r.jsx)("div",{className:"tb_blur_bg_",style:N}):null,(0,r.jsxs)("div",{className:`${c}_wrap_in`,style:D,children:[T?(0,r.jsx)(l.A,{products:this.props.multiPic?h.mediaList[g].product:x,ProductSetting:m,hotspot:h.hotspot,dataPost:h,showTooltip:null},f):null,b?(0,r.jsx)("img",{className:`${c} tb_media-${w}`,src:null===k||void 0===k||null===(e=k.image)||void 0===e?void 0:e.small,srcSet:`${null===k||void 0===k||null===(i=k.image)||void 0===i?void 0:i.small} 1x, ${null===k||void 0===k||null===(s=k.image)||void 0===s?void 0:s.large} 2x`,sizes:`${j}px`,loading:b?"eager":"lazy",decoding:"async",fetchPriority:b?"high":"low","data-id":w,height:S,width:j,"data-height":o,"data-width":d,"data-link":y,onLoad:this.onLoad,onError:t=>{t.target.src=`${n.th}/media/error/no-image.svg`,t.target.srcset=`${n.th}/media/error/no-image.svg`,(0,a.bs)(t)},alt:null===k||void 0===k?void 0:k.title,title:null===k||void 0===k?void 0:k.title},`${w}-${o}-${d}-${b}`):null]})]})}}},43538:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(65043),o=i(65281),n=i(70579);const a=t=>{const{createdAt:e,timeClass:i}=t;return(0,n.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,o.fF)(e)}`,children:(0,o.fF)(e)})},l=(0,s.memo)(a)},43702:(t,e,i)=>{i.d(e,{A:()=>p});var s=i(65043),o=Object.defineProperty,n=(t,e,i)=>((t,e,i)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!==typeof e?e+"":e,i),a=new Map,l=new WeakMap,r=0,d=void 0;function c(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(i=t.root,i?(l.has(i)||(r+=1,l.set(i,r.toString())),l.get(i)):"0"):t[e]}`;var i})).toString()}function h(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==s){const o=t.getBoundingClientRect();return e(s,{isIntersecting:s,target:t,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:n,elements:l}=function(t){const e=c(t);let i=a.get(e);if(!i){const s=new Map;let o;const n=new IntersectionObserver((e=>{e.forEach((e=>{var i;const n=e.isIntersecting&&o.some((t=>e.intersectionRatio>=t));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=n),null==(i=s.get(e.target))||i.forEach((t=>{t(n,e)}))}))}),t);o=n.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:n,elements:s},a.set(e,i)}return i}(i),r=l.get(t)||[];return l.has(t)||l.set(t,r),r.push(e),n.observe(t),function(){r.splice(r.indexOf(e),1),0===r.length&&(l.delete(t),n.unobserve(t)),0===l.size&&(n.disconnect(),a.delete(o))}}s.Component;var u=i(92908),_=i(22030);const p=t=>{let{children:e}=t;const{ref:i,inView:o}=function(){let{threshold:t,delay:e,trackVisibility:i,rootMargin:o,root:n,triggerOnce:a,skip:l,initialInView:r,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var u;const[_,p]=s.useState(null),m=s.useRef(c),[v,b]=s.useState({inView:!!r,entry:void 0});m.current=c,s.useEffect((()=>{if(l||!_)return;let s;return s=h(_,((t,e)=>{b({inView:t,entry:e}),m.current&&m.current(t,e),e.isIntersecting&&a&&s&&(s(),s=void 0)}),{root:n,rootMargin:o,threshold:t,trackVisibility:i,delay:e},d),()=>{s&&s()}}),[Array.isArray(t)?t.toString():t,_,n,o,a,l,i,d,e]);const g=null==(u=v.entry)?void 0:u.target,f=s.useRef(void 0);_||!g||a||l||f.current===g||(f.current=g,b({inView:!!r,entry:void 0}));const w=[p,v.inView,v.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}({triggerOnce:!0,threshold:.01});return u.HY&&(0,_._7)(i),e({ref:i,inView:o})}},44961:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(65043),o=i(97628),n=i(70579);const a=s.lazy((()=>i.e(1543).then(i.bind(i,21543))));class l extends s.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:i,isPopUp:l}=this.props;return(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(t)?(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(a,{networkId:t,networkClass:e})}):(0,n.jsx)("div",{className:`${e} tb__icon tb-${(0,o.EC)(t)}`,"aria-label":`post network ${(0,o.Oi)(t)}`,children:(0,n.jsx)("div",{})})}}},52141:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(65043),o=i(92908),n=i(70579);const a=s.lazy((()=>i.e(1543).then(i.bind(i,21543)))),l=t=>{const{Post:e,IconClass:i,isCenter:l,hideVideo:r,show:d}=t,c=!![3,5].includes(e.type),h=7===e.network.id,u=!!(e.mediaList&&e.mediaList.length>0),_=1===e.isAudio,p=!!e.isProduct,m=(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(a,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),v=(0,n.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,n.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,n.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,n.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,n.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return d?(0,n.jsxs)(n.Fragment,{children:[l&&(h||c)?(0,n.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!h?w:"",c&&h?m:""]}):null,p||u||c?(0,n.jsxs)("div",{className:`${i} tb__media_ico_`,children:[p?f:"",u?v:"",l||!c||h||r?"":_?b:g]}):null]}):null}},57005:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(65043),o=i(70579);const n=t=>{let{networkId:e}=t;const{className:i,color:s}={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:s},"tb-network":e,children:(0,o.jsx)("div",{})})},a=t=>{let{ThemeID:e,networkId:i}=t;const{className:s,color:n}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:n},"tb-network":i})};class l extends s.PureComponent{render(){const{rating:t,networkId:e,ThemeID:i}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>i?(0,o.jsx)(a,{ThemeID:i,networkId:e},s):(0,o.jsx)(n,{networkId:e},s))):null})}}},60768:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});i(65043);var s=i(70579);const o=t=>{const{sepClass:e}=t;return(0,s.jsx)("div",{className:e,children:"   "})}},66254:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});var s=i(65043),o=i(70579);class n extends s.PureComponent{render(){const{Post:t,ctaClass:e,onClickToCTA:i}=this.props,{cta:s}=t,n={color:null===s||void 0===s?void 0:s.color,backgroundColor:null===s||void 0===s?void 0:s.background};return(0,o.jsxs)("div",{className:e,style:n,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),i(t),window.open(`${s.url}`,"_blank")},children:[" ",s.text]})}}const a=n},69433:(t,e,i)=>{i.d(e,{A:()=>c});var s=i(65043),o=i(1043),n=i.n(o),a=i(92908),l=i(65281),r=i(70579);class d extends s.Component{constructor(t){super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:s}=await(0,l.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small);this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,s,o,l;const{VideoClass:d,Post:c,controls:h,autoPlay:u,handleVideoEnded:_,muted:p,intervalTime:m,size:v,inView:b}=this.props,{calcHeight:g,calcWidth:f,currentWidth:w,currentHeight:y}=this.state,{media:x,id:k,link:j,networkId:S}=c,C=1===v,I=null!==x&&void 0!==x&&x.height?null===x||void 0===x?void 0:x.height:g,N=null!==x&&void 0!==x&&x.width?null===x||void 0===x?void 0:x.width:f,P={paddingBottom:`${C?null:v||100*I/N}%`};return(0,r.jsx)("div",{className:`${d}_wrap_`,style:P,ref:this.mediaRef,children:(0,r.jsx)(n(),{className:`${d} tb_media-${k}`,url:null!==x&&void 0!==x&&null!==(t=x.video)&&void 0!==t&&t.clip?null===x||void 0===x||null===(e=x.video)||void 0===e?void 0:e.clip:b?null===x||void 0===x||null===(i=x.video)||void 0===i?void 0:i.full:null===x||void 0===x||null===(s=x.image)||void 0===s?void 0:s.small,"data-height":g,"data-width":f,"data-type":"video","data-network":S,"data-link":j,"data-item-id":k,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":N,"data-height":I,poster:null===x||void 0===x||null===(o=x.image)||void 0===o?void 0:o.small}},file:{attributes:{preload:"metadata",poster:null===x||void 0===x||null===(l=x.image)||void 0===l?void 0:l.small,height:y,width:w}}},loop:!(a.aD&&!a.HY&&null!==c&&void 0!==c&&c.loopStop)&&u,onError:t=>{C&&_&&setTimeout((()=>{this._isMounted&&_&&_()}),1e3*m),this.setVideoLoaded(!1)},autoPlay:b&&u?1:0,muted:p,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!a.HY),playing:b&&u?1:0,controls:h||!1,onEnded:_,title:null===x||void 0===x?void 0:x.title},`${k}-${y}-${f}-${b}`)})}}const c=(0,s.memo)(d)},77278:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});var s=i(65043),o=i(97628),n=i(70579);class a extends s.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:s,inView:a}=this.props;return(0,n.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:a?(0,n.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:s||44,height:s||44,onError:e=>{const s=(0,o.Yo)(i),n="#ffffff"==s?"000":s.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${n}&color=fff&length=1`}}):null},Math.random())}}},80714:(t,e,i)=>{i.d(e,{A:()=>_});var s=i(65043),o=i(83003),n=i(39532),a=i(65281),l=i(26165),r=i(57515),d=i(70579);const c=(0,s.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,s=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,s]})]})})),h=t=>{let{products:e,appData:i,Post:o,showTooltip:h,isPopup:u}=t;const[_,p]=(0,s.useState)(null),m=(0,s.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,s.useEffect)((()=>{if(h){const t=e.findIndex((t=>t.id===h));-1!==t&&p(t)}else p(null)}),[h,e]);const v=(0,s.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,l.hq)({})}),[i,o]),b=(0,s.useCallback)(((t,e)=>{t.stopPropagation(),v(e),window.open(e.url,"_blank")}),[v]);return null!==m&&void 0!==m&&m.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,a.Ul)()}-`,s=_===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>p(e),onMouseLeave:()=>p(null),onClick:e=>{b(e,t)},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===m.type?"tb_hotspot_ani__":""),children:e+1}),(0,d.jsx)(r.A,{wallId:i,children:(0,d.jsx)(n.m_,{appendTo:"body","data-tooltip-id":`tooltip-${t.id}-${Math.random().toString(36).substr(2,9)}`,className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,...u?{isOpen:s}:{},children:(0,d.jsx)(c,{item:t})},e)})]},`${t.id}-${e}`)})):null},u=(0,s.memo)(h),_=(0,o.Ng)((t=>({appData:t.appData})))(u)},81701:(t,e,i)=>{i.r(e),i.d(e,{default:()=>N});var s=i(65043),o=i(83003),n=i(4765),a=i(92908),l=i(22030),r=i(69433),d=i(36671),c=i(52141),h=i(70579);const u=t=>{let{Post:e,ThemeInfo:i,ThemeStyle:s,CardStyle:o,index:n,inView:l}=t;const u=!(![3,5].includes(e.type)||1!=s.autoPlay),_=(9==i.productType||a.MH)&&o.style.ratio?o.style.ratio:100,p=!e.hotspot;return(0,h.jsxs)("div",{className:"tb_hc_media_wrap",children:[p?(0,h.jsx)(c.default,{Post:e,IconClass:"tb_hc_media_icon",show:p,isCenter:!1,hideVideo:u}):null,u?(0,h.jsx)(r.A,{VideoClass:"tb_hc_video",Post:e,size:_,isCover:!0,controls:!1,autoPlay:u,muted:!0,observer:!1,index:n,inView:l}):(0,h.jsx)(d.A,{ImageClass:"tb_hc_image",Post:e,size:_,hotspot:!0,blurBG:a.HY,observer:!1,index:n,inView:l})]})};var _=i(66254),p=i(57005),m=i(96575),v=i(43538),b=i(44961),g=i(77278),f=i(60768);const w=t=>{let{Post:e,CardStyle:i,inView:s}=t;const{author:o,networkId:n}=e,a=o.username&&o.username.length>0?`@${o.username}`:"",l=!(!i.author.status||o.isInstaUser),r=!(!i.author.status||!i.timeStatus||o.isInstaUser),d=null!==n&&""!==n;return(0,h.jsxs)("div",{className:"tb_hc_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[l?(0,h.jsx)(g.default,{network:e.network,author:o,authorClass:"tb_hc_author_profile",size:46,inView:s}):"",(0,h.jsxs)("div",{className:"tb_hc_author_info",children:[l?(0,h.jsx)("div",{className:`tb_hc_authorname tb-cTBfont-${i.author.variant}`,children:o.name}):"",(0,h.jsxs)("div",{className:"tb_hc_post_info",children:[l?(0,h.jsx)("div",{className:"tb_hc_username",children:a}):"",r?(0,h.jsx)(f.default,{sepClass:"tb_hc_seprator"}):"",i.timeStatus?(0,h.jsx)(v.default,{createdAt:e.createdAt,timeClass:`tb_hc_time tb-cTBfont-${i.author.variant}`}):""]})]}),d?(0,h.jsx)("div",{className:"tb_hc_social_",children:(0,h.jsx)(b.default,{networkClass:"tb_hc_social_ico",networkId:n,iconStyle:i.icon})}):null]})};var y=i(89410),x=i(84311),k=i(43702);class j extends s.PureComponent{constructor(t){super(t),this.contentRef=t=>{this.setState({height:t})},this.contentRefHidden=t=>{this.setState({hiddenHeight:t})},this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this)}render(){const{Post:t,CardStyle:e,index:i,ThemeInfo:s,onClickToCTA:o,ThemeStyle:n}=this.props,r=1!==t.type,d=!!(t.rating&&t.rating>0),c=t.rating>0?"tb_hc_rating_content":"tb_hc_content",v=1===t.type?"tb_hc_text_post":"",b=1===t.type&&String(t.content).length>0&&e.style.textDecoration?"tb_hc_text_decoration":"",g=!!t.cta.status,f=e.content.trimcontent?(0,l.Ex)(t.content.text,140):t.content.text;return(0,h.jsx)(k.A,{children:l=>{let{ref:k,inView:j}=l;return(0,h.jsx)("div",{id:`tb_hc_id-${t.id}`,className:"tb_hc_post_wrapper",ref:k,style:{padding:e.style.padding/2},role:"article","aria-label":`Post ${parseInt(i)+1},${f}`,children:(0,h.jsxs)("div",{className:"tb_hc_post_in",role:"button","aria-label":"Popup",tabIndex:0,children:[t.share.status?(0,h.jsx)(x.default,{share:t.share,shareClass:"tb_hc_share_container",Post:t,ThemeInfo:s}):"",r?(0,h.jsx)(u,{Post:t,CardStyle:e,ThemeInfo:s,ThemeStyle:n,index:i,inView:j}):null,(0,h.jsxs)("div",{className:`tb_hc_contant_wrapper ${v}`,children:[(0,h.jsx)(w,{Post:t,CardStyle:e,inView:j}),g?(0,h.jsx)("div",{className:"tb_hc_post_cta",onClick:t=>{t.stopPropagation()},children:(0,h.jsx)(_.default,{ctaClass:"tb_hc_post_cta_btn",Post:t,onClickToCTA:o})}):"",d?(0,h.jsx)("div",{className:"tb_hc_rating__",children:(0,h.jsx)(p.default,{rating:t.rating,networkId:t.networkId,ThemeID:s.id})}):null,e.content.status||1==t.type?(0,h.jsx)("div",{className:"tb_hc_content_wrapper__",children:(0,h.jsx)(y.default,{contentClass:`${c}${b}`,Post:t,content:f,CardStyle:e,contentTitle:t.content.title})}):null]}),a.HY?e.actionStatus?(0,h.jsx)(m.default,{Post:t,CardStyle:e,actionClass:"tb_hc_social_action__"}):null:""]})})}})}}i(35847);var S=i(65281),C=i(26165);class I extends s.Component{constructor(t){super(t),this.state={windowWidth:document.getElementById(S.S2)&&document.getElementById(S.S2).clientWidth?document.getElementById(S.S2).clientWidth:window.innerWidth,sliderHeight:300},this.onScreenLoad=()=>{const{renderId:t}=this.props.renderId;this.setState({windowWidth:t&&document.getElementById(t)?document.getElementById(t).clientWidth:document.getElementById(S.S2)&&document.getElementById(S.S2).clientWidth?document.getElementById(S.S2).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:t,ThemeInfo:e,ThemeStyle:i,preRender:s,hasMoreData:o,nextData:n}=this.props;!this.state.loadData&&this.updatepost(0),o&&n(a.HY?e.webId:e.wallId,Math.floor(Date.now()/1e3),i.totalPosts,t.networkID,t.after,s,t.heightEvent)},this.updatepost=t=>{this.state.loadData||(this.setState({loadData:!0}),setTimeout((()=>this.props.loadMoredata()),1e3*t))},this.handleKeyPress=t=>{try{const{ThemeStyle:i}=this.props;if(1==i.slide.autoSlide){if(!["INPUT","TEXTAREA"].includes(t.target.tagName)&&"Space"===t.code){const{parentID:i}=this.props;t.preventDefault();var e=this.inputRefs[i].splide.Components.Autoplay;e.isPaused()?e.play():e.pause()}}}catch(i){}},this.reScrolled=()=>{setTimeout((()=>{let t=document.querySelector(".splide__list"),e=document.querySelector(".splide__slide").offsetWidth;const i=document.querySelectorAll(".splide__slide.is-visible").length,s=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),o=Number(s)+(i-1)+i;o>0?(t.style.transition="0s ease",t.style.transform=`translateX(-${o*e}px)`):t.style.transform="translateX(0px)"}),200)},this.autoScrollSlider=t=>{const{ThemeStyle:e}=this.props,i=e.autoScrollStatus;if(t.on("drag",(()=>{this.isDragging=!0,!this.state.loadData&&this.updatepost(0)})),t.on("move",(()=>{!this.state.loadData&&!this.isDragging&&this.updatepost(3)})),1==i){const e=t.index;t.length-e===t._o.perPage&&this.requestData()}},this.state={loadData:!1},this.inputRefs={},this.isDragging=!1}UNSAFE_componentWillMount(){this.onScreenLoad()}componentDidMount(){var t=document.querySelector(".tb_hc_post_slider"),e=t?t.offsetHeight:this.state.height;setTimeout((()=>{this.setState({sliderHeight:e});const t=document.querySelectorAll(".splide__slide");t&&t.forEach((t=>{t.removeAttribute("aria-hidden"),t.removeAttribute("role")}))}),100);const{postData:i,loadBranding:s}=this.props;if(i&&1==i.length){let n=document.querySelector(".tb_hc_arrow_left__"),a=document.querySelector(".tb_hc_arrow_right__");function l(){setTimeout((()=>{let t=document.querySelector(".splide__list");null!=t&&(t.style.transform="translateX(0)")}),100)}n&&a&&(n.style="display:none",a.style="display:none"),document.body.addEventListener("click",(function(){l()})),l(),window.addEventListener("resize",l)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let o=document.querySelector("#kt_aside_toggle");null!=o&&o.addEventListener("click",this.reScrolled),window.addEventListener("keydown",this.handleKeyPress),s()}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}componentDidUpdate(){var t=document.querySelector(".tb_hc_post_slider"),e=t?t.offsetHeight:this.state.height;e+15!=this.state.sliderHeight&&setTimeout((()=>{this.setState({sliderHeight:e+15})}),100)}render(){const{postData:t,completeDataObject:e,CardStyle:i,ThemeStyle:s,ThemeInfo:o,cardNumber:r,parentID:d,onClickToCTA:c,handlePressStart:u,handlePressEnd:_,containerSize:p}=this.props,{sliderHeight:m}=this.state,v=d,{windowWidth:b}=this.state,g=s.totalPosts,f=s.column.desktop,w=(s.column.mobile,s.slide.autoSlide&&!a.HY),y=s.slide.slideDuration,x=s.autoScrollStatus,k=1===i.content.trimcontent,S=!!(b<768||(0,l.qs)()),C=g>parseInt(r)?parseInt(r):g,I=t&&t.length?S?1:t.length>C?C:t.length:3,N=t&&t.length?S?1:t.length>C?C:t.length:4,P={},$=1!=x?!Object.keys(P).length&&"slide":"slide",T=I!=t.length&&N!=t.length||Object.keys(P).length?t:Array(2).fill(t).flat(),D=!!k,A=Math.max((p.width/280).toFixed(),1),E=(0,l.GH)(p.width,s.column,A),H={...P,type:1!==x&&$,role:"article",label:"social widget",rewind:!0,speed:1e3,loop:1!==x,interval:w?1e3*y:5e3,perPage:E,gap:0,perMove:!1,autoplay:!!w,padding:"0",pagination:!1,arrows:!!S||t.length>=(f>0?f:N),fixedHeight:D};return(0,h.jsxs)(h.Fragment,{children:[""!=d?(0,h.jsx)("div",{className:"tb_hc_post_container",ref:this.sliderHeight,style:{minHeight:m&&NaN!=m?m:""},children:(0,h.jsxs)(n.eB,{hasTrack:!1,className:"tb_hc_post_slider "+(D?"tb_hc_fixed_height":""),options:H,ref:t=>this.inputRefs[v]=t,tag:"section",onMove:this.autoScrollSlider,children:[(0,h.jsx)("div",{className:"splide__track",children:(0,h.jsx)("div",{className:"splide__list",children:T&&T.length>0&&T.map(((t,n)=>{const a=e[t];return(0,h.jsx)("div",{className:`splide__slide tb_${a.id}`,"data-id":a.id,onMouseDown:u,onMouseUp:t=>_(t,n,a),onTouchStart:u,onTouchEnd:t=>_(t,n,a),p_id:d,children:(0,h.jsx)(j,{onClickToCTA:c,Post:a,index:n,CardStyle:i,ThemeStyle:s,ThemeInfo:o})},n)}))})}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--prev tb_hc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--next tb_hc_arrow_right__ tb__icon tb-arrow-right-alt","aria-labelledby":"Navigation Next Slide",onClick:a.HY?this.requestData:null,children:" "})]})]})}):null," "]})}}const N=(0,s.memo)((0,o.Ng)("",(t=>({nextData:(e,i,s,o,n,a,l,r)=>t((0,C.wF)(e,i,s,o,n,a,l,r))})))(I))},84311:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});var s=i(65043),o=i(26165),n=i(70579);class a extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:i,ThemeInfo:s}=this.props;e.stopPropagation(),(0,o.hq)({type:2,action:2,wall:s.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:s.ownerId}),(0,o.x9)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:i,twitter:s,linkedin:o}=null===e||void 0===e?void 0:e.share,a=t=>{let{shareOn:e,icon:i}=t;return(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,n.jsx)("div",{})})})};return(0,n.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,n.jsx)(a,{shareOn:i,icon:"facebook"}):"",s?(0,n.jsx)(a,{shareOn:s,icon:"twitter"}):"",o?(0,n.jsx)(a,{shareOn:o,icon:"linkedin"}):""]})]})}}},89410:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=i(65043),o=i(92908),n=i(80229),a=i(65281),l=i(70579);class r extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,s;const t=(null===(i=this.contentRef)||void 0===i||null===(s=i.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:s,maxLines:r,isReadMore:d}=this.props,c=t.content.trimcontent&&!o.HY?t.content.trimcontent:0,h={WebkitLineClamp:r,textAlign:t.style.textAlign},u=(0,a.w)(i),_=`${e} ${d?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${t.style.variant}`;return(0,l.jsxs)("div",{className:_,ref:this.contentRef,style:h,children:[s?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,n.Ay)(s)}):null,(0,n.Ay)(u)]})}}},96575:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var s=i(65043),o=i(65281),n=i(97628),a=i(70579);const l=(t,e,i,s)=>{const n={like:`https://twitter.com/intent/favorite?tweet_id=${(0,o.Ph)(e)}`,comment:`https://twitter.com/intent/tweet?in_reply_to=${(0,o.Ph)(e)}`,retweet:`https://twitter.com/intent/retweet?tweet_id=${(0,o.Ph)(e)}`};return 1===t?n[s]:i},r=t=>{let{label:e,hrefClick:i,Icon:s,count:n,itemId:l=0,type:r}=t;const d=n>0?(0,o.sl)(n):"";return(0,a.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,a.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(i,"_blank")},className:`tb_social_action__ico_wrap tb_social_action__ico_wrap_${l}`,"aria-label":`${e} post ${r} count ${d}`,role:"button",tabIndex:"0",children:[(0,a.jsx)("div",{className:`tb_social_action_ico__ tb__icon tb-${s}`,children:"  "}),d?(0,a.jsx)("div",{className:"tb_social_action_counts__",children:d}):""]})})};class d extends s.PureComponent{componentDidMount(){try{var t;const{Post:e}=this.props,i=`.tb_social_action__ico_wrap_${null===e||void 0===e?void 0:e.id}`;null===(t=document.querySelector(i))||void 0===t||t.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}))}catch(e){console.log(e)}}render(){const{Post:t,CardStyle:e,actionClass:i}=this.props,{icon:s,style:o}=e,d={color:s.default?o.color:s.color},c=t.networkId,{comment:h,like:u}=t.count,_=[3,10,7].includes(c)?"like":"heart-outline",p=[1,2,3,7,8,9,10,18].includes(c),m=![29,19].includes(c),v=(0,n.Oi)(c);return[29,26,23,6,5,11,12,15,20,21].includes(c)?null:(0,a.jsx)("div",{className:i,children:(0,a.jsxs)("div",{className:"tb_social_action__",role:"list",children:[p&&(0,a.jsx)(r,{itemId:t.id,label:v,hrefClick:l(c,t.postId,t.link,"like"),Icon:_,iconStyle:d,count:u,type:"like"}),m&&(0,a.jsx)(r,{itemId:t.id,label:v,hrefClick:l(c,t.postId,t.link,"comment"),Icon:"comment",iconStyle:d,count:h,type:"comment"}),1===c&&(0,a.jsx)(r,{itemId:t.id,label:v,hrefClick:l(c,t.postId,t.link,"retweet"),Icon:"retweet",iconStyle:d,count:h,type:"comment"}),(0,a.jsx)(r,{label:v,itemId:t.id,hrefClick:t.link,Icon:"eye",iconStyle:d,count:0,type:"view"})]})})}}},97628:(t,e,i)=>{i.d(e,{EC:()=>s,Oi:()=>n,Yo:()=>o});const s=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),o=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),n=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")}}]);
//# sourceMappingURL=1701.fef8aabf.chunk.js.map