(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4800,7900,9782],{70501:(t,e,i)=>{"use strict";i.d(e,{bs:()=>r});var s=i(8159),o=i(56364),l=i(40329),a=i(32866),d=i(98409);let n=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))n.includes(t)||n.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===n.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!n.length)return;const{User:r,Wall:h}=i,v=null===r||void 0===r?void 0:r.id,m=(l.HY,null===h||void 0===h?void 0:h.id),p=null===(t=n[0])||void 0===t?void 0:t.target,{filterId:_,network:b,itemId:g,load:y}=p.dataset,x=document.querySelector(`img[data-item-id="${g}"]`),f=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==f&&void 0!==f&&f.length){var w;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(w=f[0])||void 0===w?void 0:w.postFileNew);if(!t&&x){if([2,18,3,28].includes(+b)&&"0"===y&&"34"!==_&&!p.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,o,l,a,d;const{UserPlan:n,Wall:r}=e;return{table_name:null===n||void 0===n?void 0:n.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(l=i[0])||void 0===l?void 0:l.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(d=i[0])||void 0===d?void 0:d.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:g,ownerId:v},i,f);try{const{data:e}=await(new d.A).post(l.t5,t,{headers:a.ML}),i=l.HY||l.MH?"":`https://images.${l.QR}/`;p.src="18"===b?`${i}${e.media}`:e.media}catch{p.src=s.gX}finally{u(p)}}else p.src=s.gX,u(p);n.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;p.src=t,p.srcset=t,u(p),n.shift()}}},u=t=>t.setAttribute("data-load","1")},1111:(t,e,i)=>{"use strict";i.d(e,{A:()=>v});var s=i(88094),o=i(83546),l=i(83775),a=i(24076),d=i(19066),n=i(42682),r=i(15678);const c=(0,s.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,s=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,s]})]})})),u=t=>{let{products:e,appData:i,Post:o}=t;const[u,h]=(0,s.useState)(null),v=(0,s.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),m=(0,s.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,n.hq)({})}),[i,o]),p=(0,s.useCallback)(((t,e)=>{t.stopPropagation(),m(e),window.open(e.url,"_blank")}),[m]);return null!==v&&void 0!==v&&v.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,d.Ul)()}`,s=u===e;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:e=>p(e,t),"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ "+(0===v.type?"tb_hotspot_ani__":""),children:e+1}),(0,l.createPortal)((0,r.jsx)(a.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,r.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,s.memo)(u),v=(0,o.Ng)((t=>({appData:t.appData})))(h)},17900:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var s=i(88094),o=i(40329),l=i(15678);const a=s.lazy((()=>i.e(6300).then(i.bind(i,36300)))),d=t=>{const{Post:e,IconClass:i,isCenter:d,hideVideo:n,show:r}=t,c=!![3,5].includes(e.type),u=7===e.network.id,h=!!(e.mediaList&&e.mediaList.length>0),v=1===e.isAudio,m=!!e.isProduct,p=(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(a,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),_=(0,l.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,l.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,l.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),y=(0,l.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),x=(0,l.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,l.jsxs)(l.Fragment,{children:[d&&(u||c)?(0,l.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!u?x:"",c&&u?p:""]}):null,m||h||c?(0,l.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?y:"",h?_:"",d||!c||u||n?"":v?b:g]}):null]}):null}},49782:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(88094),o=i(19066),l=i(8159),a=i(17524),d=i(70501),n=i(1111),r=i(15678);class c extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(l){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:l,Post:a}=t;this.state={isVisible:!this.props.observer,height:(null===l||void 0===l?void 0:l.height)||(null===a||void 0===a||null===(e=a.media)||void 0===e?void 0:e.height)||0,width:(null===l||void 0===l?void 0:l.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this.observer=null}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()})),this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:!0}),this.observer.disconnect())}),{threshold:.01}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect()}render(){var t,e,i,s;const{ImageClass:o,Post:c,hotspot:u,size:h,blurBG:v,ProductSetting:m,mediaOnly:p}=this.props,{id:_,link:b,products:g}=c,y=p||(null===c||void 0===c?void 0:c.media),{isVisible:x,height:f,width:w,currentWidth:j,currentHeight:k}=this.state,P=h||100*f/w,S={paddingBottom:1===P?null:`${P}%`},C={backgroundImage:x?`url(${null===y||void 0===y||null===(t=y.image)||void 0===t?void 0:t.small})`:null},N=w>f?"100%":w/f*100+"%",$=w>f?f/w*100+"%":"100%",I=c.isProduct&&u,H={width:I&&h?N:null,height:I&&h?$:null};return(0,r.jsxs)("div",{className:`${o}_wrap_`,style:S,ref:this.mediaRef,children:[I&&v?(0,r.jsx)("div",{className:"tb_blur_bg_",style:C}):null,(0,r.jsxs)("div",{className:`${o}_wrap_in`,style:H,children:[I?(0,r.jsx)(n.A,{products:g,ProductSetting:m,hotspot:c.hotspot,dataPost:c}):null,x?(0,r.jsx)("img",{className:`${o} tb_media-${_}`,src:null===y||void 0===y||null===(e=y.image)||void 0===e?void 0:e.small,srcSet:`${null===y||void 0===y||null===(i=y.image)||void 0===i?void 0:i.small} 1x, ${null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.large} 2x`,sizes:`${j}px`,loading:x?"eager":"lazy",decoding:"async",fetchPriority:x?"high":"low","data-id":_,height:k,width:j,"data-height":f,"data-width":w,"data-link":b,onLoad:this.onLoad,onError:t=>{t.target.src=`${l.th}/media/error/no-image.svg`,t.target.srcset=`${l.th}/media/error/no-image.svg`,(0,d.bs)(t)},alt:null===y||void 0===y?void 0:y.title,title:(0,a.Ay)(null===y||void 0===y?void 0:y.title)},_):null]})]})}}},71816:(t,e,i)=>{"use strict";i.d(e,{A:()=>u});var s=i(88094),o=i(25740),l=i.n(o),a=i(40329),d=i(17524),n=i(19066),r=i(15678);class c extends s.Component{constructor(t){super(t),this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:s}=await(0,n.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small,{signal:this.abortController.signal});this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&"AbortError"!==i.name&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,isVisible:!this.props.observer,calcHeight:0,calcWidth:0},this.mediaRef=s.createRef(),this.observer=null,this._isMounted=!1,this.abortController=new AbortController}componentDidMount(){this._isMounted=!0,this.mediaSizeCalc();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this._isMounted&&this.setState({isVisible:!0})}),{threshold:.1}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}catch(t){this._isMounted&&this.setState({isVisible:!0})}}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect(),this.observer&&this.mediaRef.current&&this.observer.unobserve(this.mediaRef.current),this.abortController.abort()}render(){var t,e,i,s;const{VideoClass:o,Post:n,controls:c,autoPlay:u,handleVideoEnded:h,muted:v,intervalTime:m,size:p}=this.props,{isVisible:_,calcHeight:b,calcWidth:g}=this.state,{media:y,id:x,link:f,networkId:w}=n,j=1===p,k=null!==y&&void 0!==y&&y.height?null===y||void 0===y?void 0:y.height:b,P=null!==y&&void 0!==y&&y.width?null===y||void 0===y?void 0:y.width:g,S={paddingBottom:`${j?null:p||100*k/P}%`};return(0,r.jsx)("div",{className:`${o}_wrap_`,style:S,ref:this.mediaRef,children:(0,r.jsx)(l(),{className:`${o} tb_media-${x}`,url:_?null===y||void 0===y||null===(t=y.video)||void 0===t?void 0:t.full:null===y||void 0===y||null===(e=y.image)||void 0===e?void 0:e.small,"data-height":k,"data-width":P,"data-type":"video","data-network":w,"data-link":f,"data-item-id":x,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":P,"data-height":k,poster:null===y||void 0===y||null===(i=y.image)||void 0===i?void 0:i.small}},file:{attributes:{preload:"metadata",poster:null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.small}}},loop:!(a.aD&&!a.HY&&null!==n&&void 0!==n&&n.loopStop)&&u,onError:t=>{j&&h&&setTimeout((()=>{this._isMounted&&h&&h()}),1e3*m),this.setVideoLoaded(!1)},autoPlay:_&&u,muted:v,volume:u?1:0,playsinline:!0,onReady:()=>this.setVideoLoaded(!a.HY),playing:_&&u,controls:c||!1,onEnded:h,title:(0,d.Ay)(null===y||void 0===y?void 0:y.title)})})}}const u=(0,s.memo)(c)},72376:(t,e,i)=>{"use strict";i.d(e,{A:()=>l});var s=i(19066),o=i(15678);const l=t=>{let{count:e}=t;return(0,o.jsxs)("div",{className:"tb_r_view",children:[(0,o.jsx)("div",{className:"tb__icon tb-eye",children:(0,o.jsx)("div",{})}),(0,s.sl)(e)]})}},70682:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>m});var s=i(88094),o=i(49782),l=i(71816),a=i(17900),d=i(15678);const n=t=>{let{Post:e,ThemeStyle:i,isVisible:s,index:n}=t;const r=!(![3,5].includes(e.type)||!s||1!=i.autoPlay);return(0,d.jsxs)("div",{className:"tb_rt_media_wrap",children:[(0,d.jsx)(a.default,{Post:e,IconClass:"tb_rt_media_icon",show:!0,hideVideo:!0}),r?(0,d.jsx)(l.A,{VideoClass:"tb_rt_video",Post:e,size:178,isCover:!0,muted:!0,autoPlay:!0,observer:!1,index:n}):(0,d.jsx)(o.default,{ImageClass:"tb_rt_image",Post:e,size:178,observer:!1,index:n})]})};var r=i(47043),c=i(40329),u=i(72376);const h=s.lazy((()=>i.e(2887).then(i.bind(i,92887)))),v=s.lazy((()=>i.e(6047).then(i.bind(i,76047))));class m extends s.PureComponent{constructor(t){super(t),this.mediaHeight=s.createRef()}componentDidMount(){const{Post:t,onClickPopUpSlider:e,itemIndex:i}=this.props;(c.Qy||c.HY)&&(0,r._7)(this.mediaHeight),t.isPopUp&&e(i,t)}render(){const{itemIndex:t,isVisible:e,clickToShowPopUp:i,ThemeStyle:o,CardStyle:l,Post:a,index:r}=this.props,{count:m,networkId:p}=a,{style:_,content:b}=l,g={backgroundColor:_.backgournd},y=!(!c.HY||""==l.shopText||!a.isProduct||b.status),x=0==_.mode&&c.HY?"light":"dark",f=!!([3,5].includes(a.type)&&1===l.viewCountStatus&&(null===m||void 0===m?void 0:m.views)>0);return(0,d.jsx)("div",{"data-id":a.id,id:`tb_rt_id-${a.id}`,className:"tb_rt_post_wrapper",ref:this.mediaHeight,style:{padding:_.padding/2},"tb-product":a.isShopIcon?1:a.isHotspot?2:0,"area-label":a.content.text,role:"article",children:(0,d.jsx)("div",{className:"tb_rt_post_in tb_icon_animate "+(c.HY?"":"tb_rt_post_in_animate"),style:g,onClick:i(t,a),role:"button","aria-label":"Popup",tabIndex:0,children:(0,d.jsxs)("div",{className:"tb_rt_post_media_wrapp",children:[f?(0,d.jsx)(u.A,{count:null===m||void 0===m?void 0:m.views}):null,(0,d.jsx)(n,{Post:a,CardStyle:l,ThemeStyle:o,isVisible:e,index:r}),c.HY?null:(0,d.jsx)("div",{className:"tb_rt_play_ico",children:(0,d.jsx)("div",{className:"tb__icon tb-play",children:(0,d.jsx)("div",{})})}),(0,d.jsxs)("div",{className:"tb_rt_post_details",children:[(0,d.jsx)("div",{className:"tb_rt_social_",children:(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(h,{networkClass:"tb_rt_social_ico_",networkId:p,iconStyle:l.icon})})}),y?(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(v,{CardStyle:l,btnClass:"tb_rt_btn_wrap"})}):null]}),(0,d.jsx)("div",{className:`tb_rt_post_overlay tb_rt_post_overlay-${x}`,children:(0,d.jsx)("div",{})})]})})})}}},58496:(t,e,i)=>{"use strict";var s=i(63687);function o(){}function l(){}l.resetWarningCache=o,t.exports=function(){function t(t,e,i,o,l,a){if(a!==s){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:l,resetWarningCache:o};return i.PropTypes=i,i}},32486:(t,e,i)=>{t.exports=i(58496)()},63687:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},95098:()=>{}}]);