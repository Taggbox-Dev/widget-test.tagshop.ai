(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4967,7900,9782],{49286:()=>{},25531:()=>{},56531:()=>{},70501:(e,t,i)=>{"use strict";i.d(t,{bs:()=>r});var s=i(8159),o=i(56364),l=i(40329),a=i(97014),n=i(98409);let d=[];const r=e=>{e.persist();const t=e.target,{network:i,itemId:s,themeId:o}=t.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))d.includes(e)||d.push(e);else{const e=document.querySelector(`.tb_media-${s}`);e&&(e.style.display="none")}1===d.length&&c()},c=async()=>{var e;const{postData:t,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!d.length)return;const{User:r,Wall:h}=i,p=null===r||void 0===r?void 0:r.id,v=(l.HY,null===h||void 0===h?void 0:h.id),m=null===(e=d[0])||void 0===e?void 0:e.target,{filterId:_,network:b,itemId:g,load:y}=m.dataset,f=document.querySelector(`img[data-item-id="${g}"]`),w=null!==t&&void 0!==t&&t.completeDataObject?Object.values(t.completeDataObject).filter((e=>e.id===g)):[];if(null!==w&&void 0!==w&&w.length){var x;const e=await(async e=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((t=>e.includes(t)))||await fetch(e).then((e=>e.ok)).catch((()=>!1)))(null===(x=w[0])||void 0===x?void 0:x.postFileNew);if(!e&&f){if([2,18,3,28].includes(+b)&&"0"===y&&"34"!==_&&!m.src.includes("cloud.taggbox.com")){const e=((e,t,i)=>{var s,o,l,a,n;const{UserPlan:d,Wall:r}=t;return{table_name:null===d||void 0===d?void 0:d.db_table,...e,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(l=i[0])||void 0===l?void 0:l.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(n=i[0])||void 0===n?void 0:n.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:v,postId:g,ownerId:p},i,w);try{const{data:t}=await(new n.A).post(l.t5,e,{headers:a.ML}),i=l.HY||l.MH?"":`https://images.${l.QR}/`;m.src="18"===b?`${i}${t.media}`:t.media}catch{m.src=s.gX}finally{u(m)}}else m.src=s.gX,u(m);d.shift(),c()}else{const e=`${s.th}/media/images/no-image.svg`;m.src=e,m.srcset=e,u(m),d.shift()}}},u=e=>e.setAttribute("data-load","1")},1111:(e,t,i)=>{"use strict";i.d(t,{A:()=>p});var s=i(88094),o=i(83546),l=i(83775),a=i(24076),n=i(19066),d=i(42682),r=i(15678);const c=(0,s.memo)((e=>{let{item:t}=e;const i=t.discount>0&&t.discount!==t.price,s=t.discount>0?t.discount:t.price;return(0,r.jsxs)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{className:"tb_p_tooltip_title",children:t.title}),i&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[t.currency,t.price]}),(t.price>0||t.discount>0)&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price",children:[t.currency,s]})]})})),u=e=>{let{products:t,appData:i,Post:o}=e;const[u,h]=(0,s.useState)(null),p=(0,s.useMemo)((()=>{var e,t;return(null===i||void 0===i||null===(e=i.wall)||void 0===e||null===(t=e.ProductSetting)||void 0===t?void 0:t.Hotspot)||{}}),[i]),v=(0,s.useCallback)((e=>{null!==i&&void 0!==i&&i.wall&&(0,d.hq)({})}),[i,o]),m=(0,s.useCallback)(((e,t)=>{e.stopPropagation(),v(t),window.open(t.url,"_blank")}),[v]);return null!==p&&void 0!==p&&p.status?t.map(((e,t)=>{const i=`hotspot-${e.id}-${(0,n.Ul)()}`,s=u===t;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:e.hotspot.top,left:e.hotspot.left},onMouseEnter:()=>h(t),onMouseLeave:()=>h(null),onClick:t=>m(t,e),"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ "+(0===p.type?"tb_hotspot_ani__":""),children:t+1}),(0,l.createPortal)((0,r.jsx)(a.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,r.jsx)(c,{item:e})}),document.body)]},`${e.id}-${t}`)})):null},h=(0,s.memo)(u),p=(0,o.Ng)((e=>({appData:e.appData})))(h)},17900:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var s=i(88094),o=i(40329),l=i(15678);const a=s.lazy((()=>i.e(6300).then(i.bind(i,36300)))),n=e=>{const{Post:t,IconClass:i,isCenter:n,hideVideo:d,show:r}=e,c=!![3,5].includes(t.type),u=7===t.network.id,h=!!(t.mediaList&&t.mediaList.length>0),p=1===t.isAudio,v=!!t.isProduct,m=(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(a,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),_=(0,l.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,l.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,l.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),y=(0,l.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),f=(0,l.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,l.jsxs)(l.Fragment,{children:[n&&(u||c)?(0,l.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!u?f:"",c&&u?m:""]}):null,v||h||c?(0,l.jsxs)("div",{className:`${i} tb__media_ico_`,children:[v?y:"",h?_:"",n||!c||u||d?"":p?b:g]}):null]}):null}},49782:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var s=i(88094),o=i(19066),l=i(8159),a=i(17524),n=i(70501),d=i(1111),r=i(15678);class c extends s.PureComponent{constructor(e){var t,i;super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{Post:e,mediaOnly:t}=this.props,i=t||e.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:e,height:t}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:t,width:e})}catch(l){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:l,Post:a}=e;this.state={isVisible:!this.props.observer,height:(null===l||void 0===l?void 0:l.height)||(null===a||void 0===a||null===(t=a.media)||void 0===t?void 0:t.height)||0,width:(null===l||void 0===l?void 0:l.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this.observer=null}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()})),this.observer=new IntersectionObserver((e=>{let[t]=e;t.isIntersecting&&(this.setState({isVisible:!0}),this.observer.disconnect())}),{threshold:.01}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect()}render(){var e,t,i,s;const{ImageClass:o,Post:c,hotspot:u,size:h,blurBG:p,ProductSetting:v,mediaOnly:m}=this.props,{id:_,link:b,products:g}=c,y=m||(null===c||void 0===c?void 0:c.media),{isVisible:f,height:w,width:x,currentWidth:j,currentHeight:S}=this.state,P=h||100*w/x,k={paddingBottom:1===P?null:`${P}%`},C={backgroundImage:f?`url(${null===y||void 0===y||null===(e=y.image)||void 0===e?void 0:e.small})`:null},D=x>w?"100%":x/w*100+"%",I=x>w?w/x*100+"%":"100%",N=c.isProduct&&u,M={width:N&&h?D:null,height:N&&h?I:null};return(0,r.jsxs)("div",{className:`${o}_wrap_`,style:k,ref:this.mediaRef,children:[N&&p?(0,r.jsx)("div",{className:"tb_blur_bg_",style:C}):null,(0,r.jsxs)("div",{className:`${o}_wrap_in`,style:M,children:[N?(0,r.jsx)(d.A,{products:g,ProductSetting:v,hotspot:c.hotspot,dataPost:c}):null,f?(0,r.jsx)("img",{className:`${o} tb_media-${_}`,src:null===y||void 0===y||null===(t=y.image)||void 0===t?void 0:t.small,srcSet:`${null===y||void 0===y||null===(i=y.image)||void 0===i?void 0:i.small} 1x, ${null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.large} 2x`,sizes:`${j}px`,loading:f?"eager":"lazy",decoding:"async",fetchPriority:f?"high":"low","data-id":_,height:S,width:j,"data-height":w,"data-width":x,"data-link":b,onLoad:this.onLoad,onError:e=>{e.target.src=`${l.th}/media/error/no-image.svg`,e.target.srcset=`${l.th}/media/error/no-image.svg`,(0,n.bs)(e)},alt:null===y||void 0===y?void 0:y.title,title:(0,a.Ay)(null===y||void 0===y?void 0:y.title)},_):null]})]})}}},71816:(e,t,i)=>{"use strict";i.d(t,{A:()=>u});var s=i(88094),o=i(25740),l=i.n(o),a=i(40329),n=i(17524),d=i(19066),r=i(15678);class c extends s.Component{constructor(e){super(e),this.mediaSizeCalc=async()=>{const{media:e}=this.props.Post;if((null===e||void 0===e||!e.height)&&(null===e||void 0===e||!e.width))try{var t;const{width:i,height:s}=await(0,d.TW)(null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.small,{signal:this.abortController.signal});this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&"AbortError"!==i.name&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=e=>{this._isMounted&&this.setState({videoLoaded:e})},this.state={loadError:!1,videoLoaded:!1,isVisible:!this.props.observer,calcHeight:0,calcWidth:0},this.mediaRef=s.createRef(),this.observer=null,this._isMounted=!1,this.abortController=new AbortController}componentDidMount(){this._isMounted=!0,this.mediaSizeCalc();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this._isMounted&&this.setState({isVisible:!0})}),{threshold:.1}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}catch(e){this._isMounted&&this.setState({isVisible:!0})}}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect(),this.observer&&this.mediaRef.current&&this.observer.unobserve(this.mediaRef.current),this.abortController.abort()}render(){var e,t,i,s;const{VideoClass:o,Post:d,controls:c,autoPlay:u,handleVideoEnded:h,muted:p,intervalTime:v,size:m}=this.props,{isVisible:_,calcHeight:b,calcWidth:g}=this.state,{media:y,id:f,link:w,networkId:x}=d,j=1===m,S=null!==y&&void 0!==y&&y.height?null===y||void 0===y?void 0:y.height:b,P=null!==y&&void 0!==y&&y.width?null===y||void 0===y?void 0:y.width:g,k={paddingBottom:`${j?null:m||100*S/P}%`};return(0,r.jsx)("div",{className:`${o}_wrap_`,style:k,ref:this.mediaRef,children:(0,r.jsx)(l(),{className:`${o} tb_media-${f}`,url:_?null===y||void 0===y||null===(e=y.video)||void 0===e?void 0:e.full:null===y||void 0===y||null===(t=y.image)||void 0===t?void 0:t.small,"data-height":S,"data-width":P,"data-type":"video","data-network":x,"data-link":w,"data-item-id":f,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":P,"data-height":S,poster:null===y||void 0===y||null===(i=y.image)||void 0===i?void 0:i.small}},file:{attributes:{preload:"metadata",poster:null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.small}}},loop:!(a.aD&&!a.HY&&null!==d&&void 0!==d&&d.loopStop)&&u,onError:e=>{j&&h&&setTimeout((()=>{this._isMounted&&h&&h()}),1e3*v),this.setVideoLoaded(!1)},autoPlay:_&&u?1:0,muted:p,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!a.HY),playing:_&&u?1:0,controls:c||!1,onEnded:h,title:(0,n.Ay)(null===y||void 0===y?void 0:y.title)})})}}const u=(0,s.memo)(c)},72376:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var s=i(19066),o=i(15678);const l=e=>{let{count:t}=e;return(0,o.jsxs)("div",{className:"tb_r_view",children:[(0,o.jsx)("div",{className:"tb__icon tb-eye",children:(0,o.jsx)("div",{})}),(0,s.sl)(t)]})}},76357:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>f});var s=i(88094),o=i(83546),l=i(33578),a=i(69819),n=(i(12755),i(49286),i(25531),i(56531),i(49782)),d=i(71816),r=i(17900),c=i(15678);const u=e=>{let{Post:t,ThemeStyle:i,isVisible:s,index:o}=e;const l=!(![3,5].includes(t.type)||!s||1!=i.autoPlay);return(0,c.jsxs)("div",{className:"tb_rt_media_wrap",children:[(0,c.jsx)(r.default,{Post:t,IconClass:"tb_rt_media_icon",show:!0,hideVideo:!0}),l?(0,c.jsx)(d.A,{VideoClass:"tb_rt_video",Post:t,size:178,isCover:!0,muted:!0,autoPlay:!0,observer:!1,index:o}):(0,c.jsx)(n.default,{ImageClass:"tb_rt_image",Post:t,size:178,observer:!1,index:o})]})};var h=i(47043),p=i(40329),v=i(72376);const m=s.lazy((()=>i.e(2887).then(i.bind(i,92887)))),_=s.lazy((()=>i.e(6047).then(i.bind(i,76047))));class b extends s.PureComponent{constructor(e){super(e),this.mediaHeight=s.createRef()}componentDidMount(){const{Post:e,onClickPopUpSlider:t,itemIndex:i}=this.props;(p.Qy||p.HY)&&(0,h._7)(this.mediaHeight),e.isPopUp&&t(i,e)}render(){const{itemIndex:e,isVisible:t,clickToShowPopUp:i,ThemeStyle:o,CardStyle:l,Post:a,index:n}=this.props,{count:d,networkId:r}=a,{style:h,content:b}=l,g={backgroundColor:h.backgournd},y=!(!p.HY||""==l.shopText||!a.isProduct||b.status),f=0==h.mode&&p.HY?"light":"dark",w=!!([3,5].includes(a.type)&&1===l.viewCountStatus&&(null===d||void 0===d?void 0:d.views)>0);return(0,c.jsx)("div",{"data-id":a.id,id:`tb_rt_id-${a.id}`,className:"tb_rt_post_wrapper",ref:this.mediaHeight,style:{padding:h.padding/2},"tb-product":a.isShopIcon?1:a.isHotspot?2:0,"area-label":a.content.text,role:"article",children:(0,c.jsx)("div",{className:"tb_rt_post_in tb_icon_animate "+(p.HY?"":"tb_rt_post_in_animate"),style:g,onClick:i(e,a),role:"button","aria-label":"Popup",tabIndex:0,children:(0,c.jsxs)("div",{className:"tb_rt_post_media_wrapp",children:[w?(0,c.jsx)(v.A,{count:null===d||void 0===d?void 0:d.views}):null,(0,c.jsx)(u,{Post:a,CardStyle:l,ThemeStyle:o,isVisible:t,index:n}),p.HY?null:(0,c.jsx)("div",{className:"tb_rt_play_ico",children:(0,c.jsx)("div",{className:"tb__icon tb-play",children:(0,c.jsx)("div",{})})}),(0,c.jsxs)("div",{className:"tb_rt_post_details",children:[(0,c.jsx)("div",{className:"tb_rt_social_",children:(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(m,{networkClass:"tb_rt_social_ico_",networkId:r,iconStyle:l.icon})})}),y?(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(_,{CardStyle:l,btnClass:"tb_rt_btn_wrap"})}):null]}),(0,c.jsx)("div",{className:`tb_rt_post_overlay tb_rt_post_overlay-${f}`,children:(0,c.jsx)("div",{})})]})})})}}var g=i(42682);class y extends s.Component{constructor(e){super(e),this.requestData=e=>{const{appendData:t,ThemeInfo:i,ThemeStyle:s,preRender:o,hasMoreData:l,nextData:a,loaderData:n}=this.props;e.progress>.8&&l&&!n.isShowMoreLoading&&a(p.HY?null===i||void 0===i?void 0:i.webId:null===i||void 0===i?void 0:i.wallId,Math.floor(Date.now()/1e3),null===s||void 0===s?void 0:s.totalPosts,t.networkID,t.after,o,t.heightEvent)},this.updatepost=e=>this.setState({loadData:!0},(()=>setTimeout((()=>this.props.loadMoredata()),1e3*e))),this.inputRefs={},this.state={loadData:!1}}componentDidMount(){setTimeout((()=>{const e=document.querySelectorAll(".splide__slide");e&&e.forEach((e=>{e.removeAttribute("aria-hidden"),e.removeAttribute("role")}))}),100);const{postData:e}=this.props;if(e&&1===e.length){const e=document.querySelector(".tb_rt_arrow_left__"),t=document.querySelector(".tb_rt_arrow_right__");e&&t&&(e.style.display="none",t.style.display="none")}}componentDidUpdate(){var e;const t=Object.values(this.inputRefs)[0],{postData:i,completeDataObject:s,onClickPopUpSlider:o,parentID:l}=this.props;if(t&&(null===(e=Object.values(t)[5])||void 0===e?void 0:e.length)>0){Object.values(t)[5].forEach((e=>{if(e.classList){const t=String(e.classList.value).split(" ").find((e=>String(e).includes("tb_"))),a=null===t||void 0===t?void 0:t.replace("tb_","");if(a){const t=i.findIndex((e=>e===a));document.querySelectorAll(`.tb_rt_post_container #${e.id}`).forEach((e=>{const i=e.getAttribute("p_id");String(l)===String(i)&&e.addEventListener("click",(e=>{e.preventDefault();const i=s[a];o(t,i)}))}))}}}))}}render(){const{postData:e,completeDataObject:t,clickToShowPopUp:i,hasMoreData:s,parentID:o,keyRender:n,onClickPopUpSlider:d,CardStyle:r,ThemeStyle:u,ProductSetting:v,ThemeInfo:m}=this.props,_=o,g=u.column.desktop,y=u.column.mobile,f=u.slide.autoSlide,w=u.slide.slideDuration,x=p.MH&&[151513].includes(null===m||void 0===m?void 0:m.ownerId)?0:.6,{loadData:j}=this.state;return(0,c.jsx)(c.Fragment,{children:o&&(0,c.jsx)("div",{className:"tb_rt_post_container",ref:this.sliderHeight,children:(0,c.jsx)(l.RC,{observer:!0,observeParents:!0,spaceBetween:0,ref:e=>this.inputRefs[_]=e,style:{width:"100%"},onScroll:e=>{this.requestData(e),j||this.updatepost(3)},onTouchMove:e=>{this.requestData(e),j||this.updatepost(0)},onAutoplay:e=>{this.requestData(e),j||this.updatepost((0,h.qs)()&&y&&w<5?0:5)},autoHeight:!0,speed:700,edgeSwipeDetection:!0,slidesPerView:1,touchRatio:.5,cssMode:(0,h.qs)(),passiveListeners:!0,height:"250px",freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:1,momentumVelocityRatio:1},autoplay:!(!p.HY&&!p.MH)&&{delay:1===f?1e3*w:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!s,breakpoints:{0:{slidesPerView:(y||1)+x},480:{slidesPerView:(y||1)+x},575:{slidesPerView:(y||2)+x},767:{slidesPerView:(g||3)+x},1024:{slidesPerView:(g||5)+x},1400:{slidesPerView:(g||6)+x},1600:{slidesPerView:(g||7)+x}},mousewheel:{forceToAxis:!0,sensitivity:1},watchSlidesProgress:!0,modules:[a.Ij,a.FJ,a.U1],className:"tb_rt_post_slider",children:(null===e||void 0===e?void 0:e.length)>0&&e.map(((e,s)=>{const a=t[e];return p.HY||1!==a.type?(0,c.jsx)(l.qr,{style:{margin:0,padding:0},p_id:o,className:`tb_${a.id}`,children:e=>{let{isVisible:t}=e;return(0,c.jsx)(b,{isVisible:t,Post:a,index:s,CardStyle:r,ThemeStyle:u,ProductSetting:v,ThemeInfo:m,clickToShowPopUp:i,onClickPopUpSlider:d})}},s):null}))},n)})})}}const f=(0,s.memo)((0,o.Ng)((e=>({loaderData:e.loaderData})),(e=>({nextData:(t,i,s,o,l,a,n,d)=>e((0,g.wF)(t,i,s,o,l,a,n,d))})))(y))},58496:(e,t,i)=>{"use strict";var s=i(63687);function o(){}function l(){}l.resetWarningCache=o,e.exports=function(){function e(e,t,i,o,l,a){if(a!==s){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:o};return i.PropTypes=i,i}},32486:(e,t,i)=>{e.exports=i(58496)()},63687:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},95098:()=>{}}]);