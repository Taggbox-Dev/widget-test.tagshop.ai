(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1500,2691,2887,3487,5268,6047,7900,9782],{70501:(e,t,s)=>{"use strict";s.d(t,{bs:()=>d});var i=s(8159),o=s(56364),a=s(40329),n=s(32866),l=s(98409);let r=[];const d=e=>{e.persist();const t=e.target,{network:s,itemId:i,themeId:o}=t.dataset;if(1!=s||[3,4,16,47,50,55,60].includes(o))r.includes(e)||r.push(e);else{const e=document.querySelector(`.tb_media-${i}`);e&&(e.style.display="none")}1===r.length&&c()},c=async()=>{var e;const{postData:t,wall:s}=o.A.getState().appData;if(!s||!Object.keys(s).length||!r.length)return;const{User:d,Wall:u}=s,p=null===d||void 0===d?void 0:d.id,m=(a.HY,null===u||void 0===u?void 0:u.id),v=null===(e=r[0])||void 0===e?void 0:e.target,{filterId:b,network:_,itemId:g,load:f}=v.dataset,x=document.querySelector(`img[data-item-id="${g}"]`),y=null!==t&&void 0!==t&&t.completeDataObject?Object.values(t.completeDataObject).filter((e=>e.id===g)):[];if(null!==y&&void 0!==y&&y.length){var w;const e=await(async e=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((t=>e.includes(t)))||await fetch(e).then((e=>e.ok)).catch((()=>!1)))(null===(w=y[0])||void 0===w?void 0:w.postFileNew);if(!e&&x){if([2,18,3,28].includes(+_)&&"0"===f&&"34"!==b&&!v.src.includes("cloud.taggbox.com")){const e=((e,t,s)=>{var i,o,a,n,l;const{UserPlan:r,Wall:d}=t;return{table_name:null===r||void 0===r?void 0:r.db_table,...e,...null!==s&&void 0!==s&&s.length?{feedId:null===(i=s[0])||void 0===i?void 0:i.feedId,type:null===(o=s[0])||void 0===o?void 0:o.type,link:null===(a=s[0])||void 0===a?void 0:a.link,postFile:null===(n=s[0])||void 0===n?void 0:n.postFile,mediaFile:null===(l=s[0])||void 0===l?void 0:l.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:m,postId:g,ownerId:p},s,y);try{const{data:t}=await(new l.A).post(a.t5,e,{headers:n.ML}),s=a.HY||a.MH?"":`https://images.${a.QR}/`;v.src="18"===_?`${s}${t.media}`:t.media}catch{v.src=i.gX}finally{h(v)}}else v.src=i.gX,h(v);r.shift(),c()}else{const e=`${i.th}/media/images/no-image.svg`;v.src=e,v.srcset=e,h(v),r.shift()}}},h=e=>e.setAttribute("data-load","1")},1111:(e,t,s)=>{"use strict";s.d(t,{A:()=>p});var i=s(88094),o=s(83546),a=s(83775),n=s(24076),l=s(19066),r=s(42682),d=s(15678);const c=(0,i.memo)((e=>{let{item:t}=e;const s=t.discount>0&&t.discount!==t.price,i=t.discount>0?t.discount:t.price;return(0,d.jsxs)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{className:"tb_p_tooltip_title",children:t.title}),s&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[t.currency,t.price]}),(t.price>0||t.discount>0)&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price",children:[t.currency,i]})]})})),h=e=>{let{products:t,appData:s,Post:o}=e;const[h,u]=(0,i.useState)(null),p=(0,i.useMemo)((()=>{var e,t;return(null===s||void 0===s||null===(e=s.wall)||void 0===e||null===(t=e.ProductSetting)||void 0===t?void 0:t.Hotspot)||{}}),[s]),m=(0,i.useCallback)((e=>{null!==s&&void 0!==s&&s.wall&&(0,r.hq)({})}),[s,o]),v=(0,i.useCallback)(((e,t)=>{e.stopPropagation(),m(t),window.open(t.url,"_blank")}),[m]);return null!==p&&void 0!==p&&p.status?t.map(((e,t)=>{const s=`hotspot-${e.id}-${(0,l.Ul)()}`,i=h===t;return(0,d.jsxs)("div",{id:s,className:"tb_hotspot_dot"+(i?" tb_hotspot_active_":""),role:"button",style:{top:e.hotspot.top,left:e.hotspot.left},onMouseEnter:()=>u(t),onMouseLeave:()=>u(null),onClick:t=>v(t,e),"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ "+(0===p.type?"tb_hotspot_ani__":""),children:t+1}),(0,a.createPortal)((0,d.jsx)(n.m_,{className:"tb_pro_tooltip",anchorSelect:`#${s}`,clickable:!0,children:(0,d.jsx)(c,{item:e})}),document.body)]},`${e.id}-${t}`)})):null},u=(0,i.memo)(h),p=(0,o.Ng)((e=>({appData:e.appData})))(u)},17900:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var i=s(88094),o=s(40329),a=s(15678);const n=i.lazy((()=>s.e(6300).then(s.bind(s,36300)))),l=e=>{const{Post:t,IconClass:s,isCenter:l,hideVideo:r,show:d}=e,c=!![3,5].includes(t.type),h=7===t.network.id,u=!!(t.mediaList&&t.mediaList.length>0),p=1===t.isAudio,m=!!t.isProduct,v=(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(n,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),b=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),_=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,a.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),x=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return d?(0,a.jsxs)(a.Fragment,{children:[l&&(h||c)?(0,a.jsxs)("div",{className:`${s} tb__media_ico_c`,children:[c&&!h?x:"",c&&h?v:""]}):null,m||u||c?(0,a.jsxs)("div",{className:`${s} tb__media_ico_`,children:[m?f:"",u?b:"",l||!c||h||r?"":p?_:g]}):null]}):null}},49782:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var i=s(88094),o=s(19066),a=s(8159),n=s(17524),l=s(70501),r=s(1111),d=s(15678);class c extends i.PureComponent{constructor(e){var t,s;super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{Post:e,mediaOnly:t}=this.props,s=t||e.media;if((null===s||void 0===s||!s.height)&&(null===s||void 0===s||!s.width))try{var i;const{width:e,height:t}=await(0,o.TW)(null===s||void 0===s||null===(i=s.image)||void 0===i?void 0:i.small);this._isMounted&&this.setState({height:t,width:e})}catch(a){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:a,Post:n}=e;this.state={isVisible:!this.props.observer,height:(null===a||void 0===a?void 0:a.height)||(null===n||void 0===n||null===(t=n.media)||void 0===t?void 0:t.height)||0,width:(null===a||void 0===a?void 0:a.width)||(null===n||void 0===n||null===(s=n.media)||void 0===s?void 0:s.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=i.createRef(),this.observer=null}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()})),this.observer=new IntersectionObserver((e=>{let[t]=e;t.isIntersecting&&(this.setState({isVisible:!0}),this.observer.disconnect())}),{threshold:.01}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect()}render(){var e,t,s,i;const{ImageClass:o,Post:c,hotspot:h,size:u,blurBG:p,ProductSetting:m,mediaOnly:v}=this.props,{id:b,link:_,products:g}=c,f=v||(null===c||void 0===c?void 0:c.media),{isVisible:x,height:y,width:w,currentWidth:j,currentHeight:k}=this.state,S=u||100*y/w,C={paddingBottom:1===S?null:`${S}%`},P={backgroundImage:x?`url(${null===f||void 0===f||null===(e=f.image)||void 0===e?void 0:e.small})`:null},I=w>y?"100%":w/y*100+"%",N=w>y?y/w*100+"%":"100%",T=c.isProduct&&h,$={width:T&&u?I:null,height:T&&u?N:null};return(0,d.jsxs)("div",{className:`${o}_wrap_`,style:C,ref:this.mediaRef,children:[T&&p?(0,d.jsx)("div",{className:"tb_blur_bg_",style:P}):null,(0,d.jsxs)("div",{className:`${o}_wrap_in`,style:$,children:[T?(0,d.jsx)(r.A,{products:g,ProductSetting:m,hotspot:c.hotspot,dataPost:c}):null,x?(0,d.jsx)("img",{className:`${o} tb_media-${b}`,src:null===f||void 0===f||null===(t=f.image)||void 0===t?void 0:t.small,srcSet:`${null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.small} 1x, ${null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.large} 2x`,sizes:`${j}px`,loading:x?"eager":"lazy",decoding:"async",fetchPriority:x?"high":"low","data-id":b,height:k,width:j,"data-height":y,"data-width":w,"data-link":_,onLoad:this.onLoad,onError:e=>{e.target.src=`${a.th}/media/error/no-image.svg`,e.target.srcset=`${a.th}/media/error/no-image.svg`,(0,l.bs)(e)},alt:null===f||void 0===f?void 0:f.title,title:(0,n.Ay)(null===f||void 0===f?void 0:f.title)},b):null]})]})}}},71816:(e,t,s)=>{"use strict";s.d(t,{A:()=>h});var i=s(88094),o=s(25740),a=s.n(o),n=s(40329),l=s(17524),r=s(19066),d=s(15678);class c extends i.Component{constructor(e){super(e),this.mediaSizeCalc=async()=>{const{media:e}=this.props.Post;if((null===e||void 0===e||!e.height)&&(null===e||void 0===e||!e.width))try{var t;const{width:s,height:i}=await(0,r.TW)(null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.small,{signal:this.abortController.signal});this._isMounted&&this.setState({calcHeight:i,calcWidth:s})}catch(s){this._isMounted&&"AbortError"!==s.name&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=e=>{this._isMounted&&this.setState({videoLoaded:e})},this.state={loadError:!1,videoLoaded:!1,isVisible:!this.props.observer,calcHeight:0,calcWidth:0},this.mediaRef=i.createRef(),this.observer=null,this._isMounted=!1,this.abortController=new AbortController}componentDidMount(){this._isMounted=!0,this.mediaSizeCalc();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this._isMounted&&this.setState({isVisible:!0})}),{threshold:.1}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}catch(e){this._isMounted&&this.setState({isVisible:!0})}}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect(),this.observer&&this.mediaRef.current&&this.observer.unobserve(this.mediaRef.current),this.abortController.abort()}render(){var e,t,s,i;const{VideoClass:o,Post:r,controls:c,autoPlay:h,handleVideoEnded:u,muted:p,intervalTime:m,size:v}=this.props,{isVisible:b,calcHeight:_,calcWidth:g}=this.state,{media:f,id:x,link:y,networkId:w}=r,j=1===v,k=null!==f&&void 0!==f&&f.height?null===f||void 0===f?void 0:f.height:_,S=null!==f&&void 0!==f&&f.width?null===f||void 0===f?void 0:f.width:g,C={paddingBottom:`${j?null:v||100*k/S}%`};return(0,d.jsx)("div",{className:`${o}_wrap_`,style:C,ref:this.mediaRef,children:(0,d.jsx)(a(),{className:`${o} tb_media-${x}`,url:b?null===f||void 0===f||null===(e=f.video)||void 0===e?void 0:e.full:null===f||void 0===f||null===(t=f.image)||void 0===t?void 0:t.small,"data-height":k,"data-width":S,"data-type":"video","data-network":w,"data-link":y,"data-item-id":x,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":S,"data-height":k,poster:null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.small}},file:{attributes:{preload:"metadata",poster:null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.small}}},loop:!(n.aD&&!n.HY&&null!==r&&void 0!==r&&r.loopStop)&&h,onError:e=>{j&&u&&setTimeout((()=>{this._isMounted&&u&&u()}),1e3*m),this.setVideoLoaded(!1)},autoPlay:b&&h,muted:p,volume:h?1:0,playsinline:!0,onReady:()=>this.setVideoLoaded(!n.HY),playing:b&&h,controls:c||!1,onEnded:u,title:(0,l.Ay)(null===f||void 0===f?void 0:f.title)})})}}const h=(0,i.memo)(c)},92887:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var i=s(88094),o=s(96913),a=s(15678);const n=i.lazy((()=>s.e(6300).then(s.bind(s,36300))));class l extends i.PureComponent{render(){const{networkId:e,networkClass:t,iconStyle:s,isPopUp:l}=this.props;return(null===s||void 0===s?void 0:s.default)||[7,4,36].includes(e)?(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(n,{networkId:e,networkClass:t})}):(0,a.jsx)("div",{className:`${t} tb__icon tb-${(0,o.EC)(e)}`,"aria-label":`post network ${(0,o.Oi)(e)}`,children:(0,a.jsx)("div",{})})}}},42691:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var i=s(88094),o=s(17524),a=s(40329),n=s(19066),l=s(15678);const r=i.lazy((()=>s.e(5115).then(s.bind(s,85115))));class d extends i.PureComponent{constructor(e){super(e),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var s,i;const e=(null===(s=this.contentRef)||void 0===s||null===(i=s.current)||void 0===i?void 0:i.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{CardStyle:e,contentClass:t,content:s,contentTitle:d,maxLines:c,isReadMore:h}=this.props,u=e.content.trimcontent&&!a.HY?e.content.trimcontent:0,p={WebkitLineClamp:c,textAlign:e.style.textAlign},m=(0,n.w)(s),v=`${t} ${h?"":""+(u?` tb_content_line-${u}`:"")} tb-cTBfont-${e.style.variant}`;return(0,l.jsxs)("div",{className:v,ref:this.contentRef,style:p,children:[d?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,o.Ay)(d)}):null,(0,l.jsxs)(i.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(r,{content:m,CardStyle:e})]})]})}}},81500:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var i=s(88094),o=s(42682),a=s(15678);class n extends i.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{Post:s,ThemeInfo:i}=this.props;t.stopPropagation(),(0,o.hq)({type:2,action:2,wall:i.wallID,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:i.ownerId}),(0,o.x9)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{shareClass:e,Post:t}=this.props,{facebook:s,twitter:i,linkedin:o}=null===t||void 0===t?void 0:t.share,n=e=>{let{shareOn:t,icon:s}=e;return(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t),className:`tb_share_ico__ tb__icon tb-${s}`,title:s,children:(0,a.jsx)("div",{})})})};return(0,a.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[s?(0,a.jsx)(n,{shareOn:s,icon:"facebook"}):"",i?(0,a.jsx)(n,{shareOn:i,icon:"twitter"}):"",o?(0,a.jsx)(n,{shareOn:o,icon:"linkedin"}):""]})]})}}},76047:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var i=s(15678);const o=e=>{var t;let{CardStyle:s,btnClass:o,mode:a}=e;const n={fontFamily:null===s||void 0===s||null===(t=s.style)||void 0===t?void 0:t.font};return(0,i.jsx)("div",{className:`tb_shop_btn_wrap ${o}`,children:(0,i.jsx)("div",{className:"tb_shop_btn"+(a?" tb_shop_btn_light":" tb_shop_btn_dark"),style:n,children:s.shopText})})}},84273:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var i=s(88094),o=s(47043),a=s(40329),n=s(49782),l=s(71816),r=s(17900),d=s(15678);const c=e=>{let{Post:t,ThemeStyle:s,index:i}=e;const o=!t.hotspot,c=!(![3,5].includes(t.type)||1!=s.autoPlay);return(0,d.jsxs)("div",{className:"tb_sp_media_wrap",children:[(0,d.jsx)(r.default,{Post:t,IconClass:"tb_sp_media_icon",show:o,hideVideo:s.autoPlay}),c?(0,d.jsx)(l.A,{VideoClass:"tb_sp_video",Post:t,size:100,isCover:!0,controls:!1,autoPlay:!0,muted:!0,observer:!0,index:i}):(0,d.jsx)(n.default,{ImageClass:"tb_sp_image",Post:t,size:100,hotspot:!0,blurBG:a.HY,observer:!0,index:i})]})};var h=s(81500),u=s(92887),p=s(76047);const m=(0,i.lazy)((()=>s.e(4935).then(s.bind(s,94935)))),v=(0,i.lazy)((()=>s.e(7955).then(s.bind(s,97955)))),b=(0,i.lazy)((()=>Promise.resolve().then(s.bind(s,92887)))),_=e=>{let{Post:t,CardStyle:s}=e;const{author:o,networkId:a}=t,n=o.username&&o.username.length>0?`@${o.username}`:"",l=!(!s.author.status||o.isInstaUser),r=!(!s.author.status||!s.timeStatus||o.isInstaUser);return(0,d.jsxs)("div",{className:"tb_sp_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,d.jsxs)("div",{className:"tb_sp_author",children:[l?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(m,{author:o,network:t.network,authorClass:"tb_sp_author_profile"})}):"",(0,d.jsxs)("div",{className:"tb_sp_author_info",children:[l?(0,d.jsx)("div",{className:"tb_sp_authorname",children:o.name}):"",(0,d.jsxs)("div",{className:"tb_sp_post_info",children:[l?(0,d.jsx)("div",{className:"tb_sp_username",children:n}):"",r?(0,d.jsx)("div",{className:"tb_sp_seprator",children:" "}):"",s.timeStatus?(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[(0,d.jsx)(v,{postTime:t.createdAt,timeClass:`tb_sp_time tb-cTBfont-${s.author.variant}`})," "]}):""]})]})]}),(0,d.jsx)("div",{className:"tb_sp_social_",children:(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[(0,d.jsx)(b,{networkClass:"tb_sp_social__ico",networkId:a,iconStyle:s.icon})," "]})})]})};var g=s(42691);const f=i.memo((e=>{let{Post:t,adjustWidth:s,CardStyle:n,clickToShowPopUp:l,index:r,ThemeInfo:m,ThemeStyle:v,postSizeInPx:b,onClickPopUpSlider:f}=e;const{networkId:x,share:y}=t,{style:w,content:j}=n,k=(0,i.useRef)(null),S=1!==t.type,C=n.content.status?(0,o.Ex)(t.content.text,200):t.content.text,P=b.adjustWidth<250,I="tb_sp_"+(a.MH?"color_overlay":"post_overlay-"+(0===n.style.mode&&a.HY?"light":"dark")),N={backgroundColor:a.MH?w.background:""};return(0,i.useEffect)((()=>{(a.Qy||a.HY)&&(0,o._7)(k)}),[]),(0,d.jsx)("div",{id:`tb_sp_id-${t.id}`,className:"tb_sp_post_wrapper"+(P?" tb_sp_post_wrapper2x":""),style:{width:`${s}%`,padding:w.padding/2},"tb-network":t.network.id,"tb-product":""!=n.shopText&&t.isShopIcon?1:t.isHotspot?2:0,role:"article","aria-label":`Post ${parseInt(r)+1},${C}`,ref:k,"post-id":t.referenceId?t.referenceId:t.id,tabIndex:"0",children:(0,d.jsx)("div",{className:"tb_sp_post_in"+(a.HY?" tb_sp_post_ani":""),onClick:l(r,t),role:"button","aria-label":"Popup",tabIndex:0,children:(0,d.jsxs)("div",{className:"tb_sp_post_media_wrapp",role:"button",tabIndex:0,"aria-label":"Pop Up Button",children:[y.status&&(0,d.jsx)(h.default,{Post:t,ThemeInfo:m,shareClass:"tb_sp_share_container"}),S&&(0,d.jsx)(c,{Post:t,CardStyle:n,ThemeStyle:v,ThemeInfo:m,index:r}),!t.isHotspot&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"tb_sp_post_details",children:[a.HY&&(0,d.jsx)("div",{className:"tb_sp_social_",children:(0,d.jsx)(u.default,{networkClass:"tb_sp_social__ico",networkId:x,iconStyle:n.icon})}),""!=n.shopText&&t.isShopIcon&&(0,d.jsx)(p.default,{CardStyle:n,mode:1,btnClass:"tb_sp_btn_wrap"}),!a.HY&&(0,d.jsxs)(d.Fragment,{children:[65!==m.id&&(0,d.jsx)("div",{className:"tb_sp_contant_wrapper",children:(!n.content.status||1===t.type)&&(0,d.jsx)(g.default,{contentClass:"tb_sp_content",Post:t,content:C,CardStyle:n,contentTitle:j.title})}),(0,d.jsx)(_,{Post:t,CardStyle:n,ThemeStyle:v})]})]}),(0,d.jsx)("div",{className:`tb_sp_post_overlay ${I}`,style:N,children:(0,d.jsx)("div",{})})]})]})})})}));class x extends i.PureComponent{render(){const{postData:e,completeDataObject:t,adjustWidth:s,CardStyle:i,ThemeStyle:o,ProductSetting:a,ThemeInfo:n,clickToShowPopUp:l,cardNumber:r,postSizeInPx:c,onClickPopUpSlider:h}=this.props;let u=e.length;if(1===(null===o||void 0===o?void 0:o.bestFit)&&e.length>=parseInt(r)){const t=Math.floor(e.length/parseInt(r));u=parseInt(r)*t}return(0,d.jsx)("div",{tabIndex:"0","aria-label":`There are ${e.length>0?e.length:0} posts in the feed`,role:"feed",className:"tb_sp_post_container",children:e.map(((e,r)=>{if(r>=u)return null;const p=t[e];return(0,d.jsx)(f,{Post:p,ThemeInfo:n,index:r,adjustWidth:s,CardStyle:i,ThemeStyle:o,ProductSetting:a,clickToShowPopUp:l,postSizeInPx:c,onClickPopUpSlider:h},r)}))})}}const y=x},96913:(e,t,s)=>{"use strict";s.d(t,{EC:()=>i,Oi:()=>a,Yo:()=>o});const i=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),o=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),a=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")},58496:(e,t,s)=>{"use strict";var i=s(63687);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,s,o,a,n){if(n!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return s.PropTypes=s,s}},32486:(e,t,s)=>{e.exports=s(58496)()},63687:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},95098:()=>{}}]);