(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2638,3538,4897,7278,9410],{8494:(t,e,i)=>{"use strict";i.d(e,{bs:()=>d});var s=i(78250),n=i(23499),o=i(92908),a=i(95553),r=i(89652);let l=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:n}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(n))l.includes(t)||l.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===l.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=n.A.getState().appData;if(!i||!Object.keys(i).length||!l.length)return;const{User:d,Wall:h}=i,p=null===d||void 0===d?void 0:d.id,m=(o.HY,null===h||void 0===h?void 0:h.id),_=null===(t=l[0])||void 0===t?void 0:t.target,{filterId:v,network:g,itemId:b,load:f}=_.dataset,y=document.querySelector(`img[data-item-id="${b}"]`),w=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===b)):[];if(null!==w&&void 0!==w&&w.length){var x;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(x=w[0])||void 0===x?void 0:x.postFileNew);if(!t&&y){if([2,18,3,28].includes(+g)&&"0"===f&&"34"!==v&&!_.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,n,o,a,r;const{UserPlan:l,Wall:d}=e;return{table_name:null===l||void 0===l?void 0:l.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(n=i[0])||void 0===n?void 0:n.type,link:null===(o=i[0])||void 0===o?void 0:o.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(r=i[0])||void 0===r?void 0:r.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:m,postId:b,ownerId:p},i,w);try{const{data:e}=await(new r.A).post(o.t5,t,{headers:a.ML}),i=o.HY||o.MH?"":`https://images.${o.QR}/`;_.src="18"===g?`${i}${e.media}`:e.media}catch{_.src=s.gX}finally{u(_)}}else _.src=s.gX,u(_);l.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;_.src=t,_.srcset=t,u(_),l.shift()}}},u=t=>t.setAttribute("data-load","1")},13218:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},36671:(t,e,i)=>{"use strict";i.d(e,{A:()=>d});var s=i(65043),n=i(65281),o=i(78250),a=i(8494),r=i(80714),l=i(70579);class d extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,n.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(o){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:o,Post:a}=t;this.state={height:(null===o||void 0===o?void 0:o.height)||(null===a||void 0===a||null===(e=a.media)||void 0===e?void 0:e.height)||0,width:(null===o||void 0===o?void 0:o.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,s;const{height:n,width:d}=this.state,{ImageClass:c,Post:u,hotspot:h,size:p,blurBG:m,ProductSetting:_,mediaOnly:v,inView:g,multiKey:b,index:f}=this.props,{id:y,link:w,products:x}=u,j=v||(null===u||void 0===u?void 0:u.media),{currentWidth:k,currentHeight:S}=this.state,P=p||100*n/d,C={paddingBottom:1===P?null:`${P}%`},I={backgroundImage:g?`url(${null===j||void 0===j||null===(t=j.image)||void 0===t?void 0:t.small})`:null},$=d>n?"100%":d/n*100+"%",N=d>n?n/d*100+"%":"100%",T=u.isProduct&&h&&u.hotspot,A={width:T&&p?$:null,height:T&&p?N:null};return(0,l.jsxs)("div",{className:`${c}_wrap_`,style:C,ref:this.mediaRef,children:[T&&m?(0,l.jsx)("div",{className:"tb_blur_bg_",style:I}):null,(0,l.jsxs)("div",{className:`${c}_wrap_in`,style:A,children:[T?(0,l.jsx)(r.A,{products:this.props.multiPic?u.mediaList[b].product:x,ProductSetting:_,hotspot:u.hotspot,dataPost:u,showTooltip:null},f):null,g?(0,l.jsx)("img",{className:`${c} tb_media-${y}`,src:null===j||void 0===j||null===(e=j.image)||void 0===e?void 0:e.small,srcSet:`${null===j||void 0===j||null===(i=j.image)||void 0===i?void 0:i.small} 1x, ${null===j||void 0===j||null===(s=j.image)||void 0===s?void 0:s.large} 2x`,sizes:`${k}px`,loading:g?"eager":"lazy",decoding:"async",fetchPriority:g?"high":"low","data-id":y,height:S,width:k,"data-height":n,"data-width":d,"data-link":w,onLoad:this.onLoad,onError:t=>{t.target.src=`${o.th}/media/error/no-image.svg`,t.target.srcset=`${o.th}/media/error/no-image.svg`,(0,a.bs)(t)},alt:null===j||void 0===j?void 0:j.title,title:null===j||void 0===j?void 0:j.title},`${y}-${n}-${d}-${g}`):null]})]})}}},41497:(t,e,i)=>{"use strict";var s=i(13218);function n(){}function o(){}o.resetWarningCache=n,t.exports=function(){function t(t,e,i,n,o,a){if(a!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:n};return i.PropTypes=i,i}},43538:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(65043),n=i(65281),o=i(70579);const a=t=>{const{createdAt:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,n.fF)(e)}`,children:(0,n.fF)(e)})},r=(0,s.memo)(a)},43702:(t,e,i)=>{"use strict";i.d(e,{A:()=>p});var s=i(65043),n=Object.defineProperty,o=(t,e,i)=>((t,e,i)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!==typeof e?e+"":e,i),a=new Map,r=new WeakMap,l=0,d=void 0;function c(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(i=t.root,i?(r.has(i)||(l+=1,r.set(i,l.toString())),r.get(i)):"0"):t[e]}`;var i})).toString()}function u(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==s){const n=t.getBoundingClientRect();return e(s,{isIntersecting:s,target:t,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:r}=function(t){const e=c(t);let i=a.get(e);if(!i){const s=new Map;let n;const o=new IntersectionObserver((e=>{e.forEach((e=>{var i;const o=e.isIntersecting&&n.some((t=>e.intersectionRatio>=t));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=o),null==(i=s.get(e.target))||i.forEach((t=>{t(o,e)}))}))}),t);n=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:o,elements:s},a.set(e,i)}return i}(i),l=r.get(t)||[];return r.has(t)||r.set(t,l),l.push(e),o.observe(t),function(){l.splice(l.indexOf(e),1),0===l.length&&(r.delete(t),o.unobserve(t)),0===r.size&&(o.disconnect(),a.delete(n))}}s.Component;var h=i(22030);const p=t=>{let{children:e}=t;const{ref:i,inView:n,entry:o}=function(){let{threshold:t,delay:e,trackVisibility:i,rootMargin:n,root:o,triggerOnce:a,skip:r,initialInView:l,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var h;const[p,m]=s.useState(null),_=s.useRef(c),[v,g]=s.useState({inView:!!l,entry:void 0});_.current=c,s.useEffect((()=>{if(r||!p)return;let s;return s=u(p,((t,e)=>{g({inView:t,entry:e}),_.current&&_.current(t,e),e.isIntersecting&&a&&s&&(s(),s=void 0)}),{root:o,rootMargin:n,threshold:t,trackVisibility:i,delay:e},d),()=>{s&&s()}}),[Array.isArray(t)?t.toString():t,p,o,n,a,r,i,d,e]);const b=null==(h=v.entry)?void 0:h.target,f=s.useRef(void 0);p||!b||a||r||f.current===b||(f.current=b,g({inView:!!l,entry:void 0}));const y=[m,v.inView,v.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}({triggerOnce:!0,threshold:.01});return n&&(0,h._7)(o),e({ref:i,inView:n})}},61964:()=>{},65005:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var s=i(70579);const n=(t,e,i)=>(0,s.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:t,fontSize:i,minWidth:i+"px"},children:(0,s.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{color:t,width:10*e+"%",fontSize:i,minWidth:i+"px"},children:[(0,s.jsx)("div",{})," "]})}),o=t=>{let{rating:e,size:i,color:o}=t;const a=e>5?5:e,r=Math.trunc(5-a),l=Math.trunc(a),d=String(a).split(".")[1];return(0,s.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[l?[...Array(l)].map(((t,e)=>(0,s.jsx)("div",{"data-index":e,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:o||"#F8B90C",fontSize:i,minWidth:i+"px"},children:(0,s.jsx)("div",{})},e))):null,d>0?n(o||"#F8B90C",d,i):null,r?[...Array(r)].map(((t,e)=>(0,s.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:i,minWidth:i+"px"},children:(0,s.jsx)("div",{})},e))):null]})}},65173:(t,e,i)=>{t.exports=i(41497)()},67040:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>k});var s=i(65043),n=i(60303),o=i.n(n),a=i(77278),r=i(43538),l=i(22030),d=i(70579);const c=t=>{let{Post:e,CardStyle:i,inView:s}=t;const{author:n,networkId:o}=e,c=(0,l.zK)(n.name),u=!(!i.author.status||c);return(0,d.jsx)("div",{className:"tb_g_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:(0,d.jsxs)("div",{className:"tb_g_author",children:[u?(0,d.jsx)(a.default,{author:n,network:e.network,networkId:o,authorClass:"tb_g_author_profile",inView:s}):"",(0,d.jsxs)("div",{className:"tb_g_author_info",children:[u?(0,d.jsx)("div",{className:"tb_g_authorname",children:n.name}):"",i.timeStatus?(0,d.jsx)(r.default,{createdAt:e.createdAt,timeClass:`tb_g_time tb-cTBfont-${i.author.variant}`}):""]})]})})};var u=i(36671),h=i(74975),p=i(50050);i(61964);const m=t=>{let{Post:e,ImageClass:i,Item:s,index:n,inView:o}=t;return(0,d.jsx)(u.A,{ImageClass:i,Post:e,mediaOnly:s||!1,size:!1,inView:o,multiKey:n})},_=t=>{let{Post:e,ImageClass:i,inView:s}=t;return(0,d.jsxs)("div",{className:"tb_swiper",children:[(0,d.jsx)(h.RC,{modules:[p.dK,p.Vx],spaceBetween:0,autoHeight:!0,slidesPerView:1,pagination:!1,navigation:{prevEl:`#tb_c_p_prev-${e.id}`,nextEl:`#tb_c_p_next-${e.id}`},className:"tb_c_p__media_slider",children:e.mediaList.length>0?e.mediaList.map(((t,n)=>(0,d.jsx)(h.qr,{children:(0,d.jsx)(m,{ImageClass:i,Post:e,Item:t,index:n,inView:s},n)},n?`slider_${n}`:null))):(0,d.jsx)(m,{ImageClass:i,Post:e,inView:s})}),(null===e||void 0===e?void 0:e.mediaList.length)>1&&(0,d.jsxs)("div",{className:"tb_c_p__arrow_wrapper_",onClick:t=>t.stopPropagation(),children:[(0,d.jsx)("div",{id:`tb_c_p_prev-${e.id}`,className:"tb_c_p__arrow tb_c_p__arrow_left__ tb__icon tb-arrow-left-alt",children:(0,d.jsx)("div",{})}),(0,d.jsx)("div",{id:`tb_c_p_next-${e.id}`,className:"tb_c_p__arrow tb_c_p__arrow_right__ tb__icon tb-arrow-right-alt",children:(0,d.jsx)("div",{})})]})]})},v=s.memo(_);var g=i(89410),b=i(65005),f=i(92908),y=i(78250),w=i(43702);const x=t=>{let{Post:e,adjustWidth:i,CardStyle:n,clickToShowPopUp:o,itemIndex:a,handlePressStart:r,handlePressEnd:u,ThemeStyle:h,ThemeInfo:p,onClickPopUpSlider:m}=t;const _=1!=e.type,x=n.content.trimcontent?(0,l.Ex)(e.content.text,200):e.content.text;(0,s.useEffect)((()=>{e.isPopUp&&m(a,e)}),[a,e.isPopUp,e]);const j=e.products;return(0,d.jsx)(w.A,{children:t=>{var s,l,m,w,k,S;let{ref:P,inView:C}=t;return(0,d.jsx)("div",{id:`tb_g_id-${e.id}`,className:"tb_g_post_wrapper","tb-network":e.network.id,role:"article","aria-label":`Post ${parseInt(a)+1},${x}`,style:{width:`${i}%`,padding:n.style.padding/2,opacity:C?1:0,transition:C?"opacity .5s ease-in-out":""},tabIndex:"0",ref:P,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,children:(0,d.jsxs)("div",{className:"tb_g_post_in",onTouchStart:r,onTouchEnd:t=>u(t,a,e),onClick:o(a,e),role:"button","aria-label":"Popup",tabIndex:"0",children:[_?(0,d.jsx)("div",{className:"tb_g_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:(0,d.jsx)(v,{ImageClass:"tb_g_image",VideoClass:"tb_g_video",Post:e,CardStyle:n,ThemeInfo:p,ThemeStyle:h,inView:C})}):null,(0,d.jsxs)("div",{className:"tb_g_contant_wrapper",children:[(0,d.jsx)(c,{Post:e,CardStyle:n,ThemeStyle:h,mediaType:_,size:40,inView:C}),e.rating>0?(0,d.jsxs)("div",{className:"tb_g_rating__",children:[(0,d.jsx)(b.A,{size:20,rating:e.rating})," "]}):"",f.HY&&n.content.status?(0,d.jsx)(g.default,{contentClass:"tb_g_content",Post:e,content:x,CardStyle:n,contentTitle:e.contentTitle}):"",e.isProduct?(0,d.jsxs)("div",{className:"tb_g_p_wrp",children:[(0,d.jsx)("div",{className:"tb_g_p_",children:(0,d.jsx)("img",{className:"tb_g_p_img",decoding:"async",src:null===(s=j[0])||void 0===s?void 0:s.image,width:"187",height:"259",alt:"",loading:"lazy",draggable:"false",onError:t=>t.target.src=y.qF})}),(0,d.jsxs)("div",{className:"tb_g_p_info",children:[(0,d.jsx)("div",{className:"tb_g_p_t",children:null===(l=j[0])||void 0===l?void 0:l.title}),(0,d.jsxs)("div",{className:"tb_g_p_p",children:[null===(m=j[0])||void 0===m?void 0:m.currency,(null===(w=j[0])||void 0===w?void 0:w.discount)>0?null===(k=j[0])||void 0===k?void 0:k.discount:null===(S=j[0])||void 0===S?void 0:S.price]})]})]}):null]})]})})}})};class j extends s.PureComponent{componentDidMount(){this.props.loadBranding()}render(){const{postData:t,completeDataObject:e,adjustWidth:i,handlePressStart:s,handlePressEnd:n,CardStyle:a,ThemeStyle:r,postSize:l,clickToShowPopUp:c,onClickPopUpSlider:u}=this.props;return(0,d.jsx)(o(),{className:"tb_g_post_container",tabIndex:"0","aria-label":`There are ${t&&t.length>0?t.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_g_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:t&&t.length>0&&t.map(((t,o)=>{const h=e[t];return(0,d.jsx)(x,{adjustWidth:1==h.highlight?2*i:i,clickToShowPopUp:c,handlePressStart:s,handlePressEnd:n,onClickPopUpSlider:u,Post:h,postSize:l,itemIndex:o,CardStyle:a,ThemeStyle:r},o)}))})}}const k=j},77278:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var s=i(65043),n=i(97628),o=i(70579);class a extends s.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:s,inView:a}=this.props;return(0,o.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:a?(0,o.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:s||44,height:s||44,onError:e=>{const s=(0,n.Yo)(i),o="#ffffff"==s?"000":s.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${o}&color=fff&length=1`}}):null},Math.random())}}},80714:(t,e,i)=>{"use strict";i.d(e,{A:()=>p});var s=i(65043),n=i(83003),o=i(39532),a=i(65281),r=i(26165),l=i(57515),d=i(70579);const c=(0,s.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,s=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,s]})]})})),u=t=>{let{products:e,appData:i,Post:n,showTooltip:u,isPopup:h}=t;const[p,m]=(0,s.useState)(null),_=(0,s.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,s.useEffect)((()=>{if(u){const t=e.findIndex((t=>t.id===u));-1!==t&&m(t)}else m(null)}),[u,e]);const v=(0,s.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,r.hq)({})}),[i,n]),g=(0,s.useCallback)(((t,e)=>{t.stopPropagation(),v(e),window.open(e.url,"_blank")}),[v]);return null!==_&&void 0!==_&&_.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,a.Ul)()}-`,s=p===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>m(e),onMouseLeave:()=>m(null),onClick:e=>{g(e,t)},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===_.type?"tb_hotspot_ani__":""),children:e+1}),(0,d.jsx)(l.A,{wallId:i,children:(0,d.jsx)(o.m_,{appendTo:"body","data-tooltip-id":`tooltip-${t.id}-${Math.random().toString(36).substr(2,9)}`,className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,...h?{isOpen:s}:{},children:(0,d.jsx)(c,{item:t})},e)})]},`${t.id}-${e}`)})):null},h=(0,s.memo)(u),p=(0,n.Ng)((t=>({appData:t.appData})))(h)},89410:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var s=i(65043),n=i(92908),o=i(80229),a=i(65281),r=i(70579);class l extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,s;const t=(null===(i=this.contentRef)||void 0===i||null===(s=i.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:s,maxLines:l,isReadMore:d}=this.props,c=t.content.trimcontent&&!n.HY?t.content.trimcontent:0,u={WebkitLineClamp:l,textAlign:t.style.textAlign},h=(0,a.w)(i),p=`${e} ${d?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${t.style.variant}`;return(0,r.jsxs)("div",{className:p,ref:this.contentRef,style:u,children:[s?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.Ay)(s)}):null,(0,o.Ay)(h)]})}}},97628:(t,e,i)=>{"use strict";i.d(e,{EC:()=>s,Oi:()=>o,Yo:()=>n});const s=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),n=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),o=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")}}]);
//# sourceMappingURL=2638.dec5ca10.chunk.js.map