(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[155,7775,9882],{44238:(t,e,i)=>{"use strict";i.d(e,{bs:()=>r});var s=i(31530),o=i(7665),l=i(83884),a=i(10753),d=i(89620);let n=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))n.includes(t)||n.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===n.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!n.length)return;const{User:r,Wall:h}=i,v=null===r||void 0===r?void 0:r.id,m=(l.HY,null===h||void 0===h?void 0:h.id),p=null===(t=n[0])||void 0===t?void 0:t.target,{filterId:b,network:_,itemId:g,load:f}=p.dataset,y=document.querySelector(`img[data-item-id="${g}"]`),w=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==w&&void 0!==w&&w.length){var x;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(x=w[0])||void 0===x?void 0:x.postFileNew);if(!t&&y){if([2,18,3,28].includes(+_)&&"0"===f&&"34"!==b&&!p.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,o,l,a,d;const{UserPlan:n,Wall:r}=e;return{table_name:null===n||void 0===n?void 0:n.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(l=i[0])||void 0===l?void 0:l.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(d=i[0])||void 0===d?void 0:d.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:g,ownerId:v},i,w);try{const{data:e}=await(new d.A).post(l.t5,t,{headers:a.ML}),i=l.HY||l.MH?"":`https://images.${l.QR}/`;p.src="18"===_?`${i}${e.media}`:e.media}catch{p.src=s.gX}finally{u(p)}}else p.src=s.gX,u(p);n.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;p.src=t,p.srcset=t,u(p),n.shift()}}},u=t=>t.setAttribute("data-load","1")},82803:(t,e,i)=>{"use strict";i.d(e,{A:()=>v});var s=i(82483),o=i(12251),l=i(99998),a=i(76467),d=i(99009),n=i(29269),r=i(56723);const c=(0,s.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,s=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,s]})]})})),u=t=>{let{products:e,appData:i,Post:o}=t;const[u,h]=(0,s.useState)(null),v=(0,s.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),m=(0,s.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,n.hq)({})}),[i,o]),p=(0,s.useCallback)(((t,e)=>{t.stopPropagation(),m(e),window.open(e.url,"_blank")}),[m]);return null!==v&&void 0!==v&&v.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,d.Ul)()}`,s=u===e;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:e=>p(e,t),"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ "+(0===v.type?"tb_hotspot_ani__":""),children:e+1}),(0,l.createPortal)((0,r.jsx)(a.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,r.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,s.memo)(u),v=(0,o.Ng)((t=>({appData:t.appData})))(h)},7775:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(82483),o=i(99009),l=i(31530),a=i(21645),d=i(44238),n=i(82803),r=i(56723);class c extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(l){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:l,Post:a}=t;this.state={isVisible:!this.props.observer,height:(null===l||void 0===l?void 0:l.height)||(null===a||void 0===a||null===(e=a.media)||void 0===e?void 0:e.height)||0,width:(null===l||void 0===l?void 0:l.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this.observer=null}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()})),this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:!0}),this.observer.disconnect())}),{threshold:.01}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect()}render(){var t,e,i,s;const{ImageClass:o,Post:c,hotspot:u,size:h,blurBG:v,ProductSetting:m,mediaOnly:p}=this.props,{id:b,link:_,products:g}=c,f=p||(null===c||void 0===c?void 0:c.media),{isVisible:y,height:w,width:x,currentWidth:j,currentHeight:P}=this.state,k=h||100*w/x,S={paddingBottom:1===k?null:`${k}%`},C={backgroundImage:y?`url(${null===f||void 0===f||null===(t=f.image)||void 0===t?void 0:t.small})`:null},$=x>w?"100%":x/w*100+"%",N=x>w?w/x*100+"%":"100%",I=c.isProduct&&u,M={width:I&&h?$:null,height:I&&h?N:null};return(0,r.jsxs)("div",{className:`${o}_wrap_`,style:S,ref:this.mediaRef,children:[I&&v?(0,r.jsx)("div",{className:"tb_blur_bg_",style:C}):null,(0,r.jsxs)("div",{className:`${o}_wrap_in`,style:M,children:[I?(0,r.jsx)(n.A,{products:g,ProductSetting:m,hotspot:c.hotspot,dataPost:c}):null,y?(0,r.jsx)("img",{className:`${o} tb_media-${b}`,src:null===f||void 0===f||null===(e=f.image)||void 0===e?void 0:e.small,srcSet:`${null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.small} 1x, ${null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.large} 2x`,sizes:`${j}px`,loading:y?"eager":"lazy",decoding:"async",fetchPriority:y?"high":"low","data-id":b,height:P,width:j,"data-height":w,"data-width":x,"data-link":_,onLoad:this.onLoad,onError:t=>{t.target.src=`${l.th}/media/error/no-image.svg`,t.target.srcset=`${l.th}/media/error/no-image.svg`,(0,d.bs)(t)},alt:null===f||void 0===f?void 0:f.title,title:(0,a.Ay)(null===f||void 0===f?void 0:f.title)},b):null]})]})}}},33689:(t,e,i)=>{"use strict";i.d(e,{A:()=>u});var s=i(82483),o=i(48819),l=i.n(o),a=i(83884),d=i(21645),n=i(99009),r=i(56723);class c extends s.Component{constructor(t){super(t),this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:s}=await(0,n.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small,{signal:this.abortController.signal});this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&"AbortError"!==i.name&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,isVisible:!this.props.observer,calcHeight:0,calcWidth:0},this.mediaRef=s.createRef(),this.observer=null,this._isMounted=!1,this.abortController=new AbortController}componentDidMount(){this._isMounted=!0,this.mediaSizeCalc();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this._isMounted&&this.setState({isVisible:!0})}),{threshold:.1}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}catch(t){this._isMounted&&this.setState({isVisible:!0})}}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect(),this.observer&&this.mediaRef.current&&this.observer.unobserve(this.mediaRef.current),this.abortController.abort()}render(){var t,e,i,s;const{VideoClass:o,Post:n,controls:c,autoPlay:u,handleVideoEnded:h,muted:v,intervalTime:m,size:p}=this.props,{isVisible:b,calcHeight:_,calcWidth:g}=this.state,{media:f,id:y,link:w,networkId:x}=n,j=1===p,P=null!==f&&void 0!==f&&f.height?null===f||void 0===f?void 0:f.height:_,k=null!==f&&void 0!==f&&f.width?null===f||void 0===f?void 0:f.width:g,S={paddingBottom:`${j?null:p||100*P/k}%`};return(0,r.jsx)("div",{className:`${o}_wrap_`,style:S,ref:this.mediaRef,children:(0,r.jsx)(l(),{className:`${o} tb_media-${y}`,url:b?null===f||void 0===f||null===(t=f.video)||void 0===t?void 0:t.full:null===f||void 0===f||null===(e=f.image)||void 0===e?void 0:e.small,"data-height":P,"data-width":k,"data-type":"video","data-network":x,"data-link":w,"data-item-id":y,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":k,"data-height":P,poster:null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.small}},file:{attributes:{preload:"metadata",poster:null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.small}}},loop:!(a.aD&&!a.HY&&null!==n&&void 0!==n&&n.loopStop)&&u,onError:t=>{j&&h&&setTimeout((()=>{this._isMounted&&h&&h()}),1e3*m),this.setVideoLoaded(!1)},autoPlay:b&&u?1:0,muted:v,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!a.HY),playing:b&&u?1:0,controls:c||!1,onEnded:h,title:(0,d.Ay)(null===f||void 0===f?void 0:f.title)})})}}const u=(0,s.memo)(c)},19882:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var s=i(82483),o=i(83884),l=i(56723);const a=s.lazy((()=>i.e(8807).then(i.bind(i,88807)))),d=t=>{const{Post:e,IconClass:i,isCenter:d,hideVideo:n,show:r}=t,c=!![3,5].includes(e.type),u=7===e.network.id,h=!!(e.mediaList&&e.mediaList.length>0),v=1===e.isAudio,m=!!e.isProduct,p=(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(a,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),b=(0,l.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),_=(0,l.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,l.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,l.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),y=(0,l.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,l.jsxs)(l.Fragment,{children:[d&&(u||c)?(0,l.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!u?y:"",c&&u?p:""]}):null,m||h||c?(0,l.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?f:"",h?b:"",d||!c||u||n?"":v?_:g]}):null]}):null}},6815:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});i(82483);var s=i(83884),o=i(7775),l=i(33689),a=i(19882),d=i(56723);const n=t=>{let{Post:e,CardStyle:i,ThemeStyle:n,ProductSetting:r,index:c}=t;const u=s.MH&&i.style.ratio?i.style.ratio:100,h=!(![3,5].includes(e.type)||1!=n.autoPlay),v=!s.HY||!e.hotspot;return(0,d.jsxs)("div",{className:"tb_hs_media_wrap",children:[(0,d.jsx)(a.default,{Post:e,IconClass:"tb_hs_media_icon",show:v,hideVideo:n.autoPlay}),h?(0,d.jsx)(l.A,{VideoClass:"tb_hs_video",Post:e,size:u,isCover:!0,muted:!0,autoPlay:!0,observer:!1,index:c},e.id):(0,d.jsx)(o.default,{ImageClass:"tb_hs_image",Post:e,size:u,ProductSetting:r,hotspot:!0,blurBG:s.HY,observer:!1,index:c},e.id)]})}},59993:(t,e,i)=>{"use strict";var s=i(85730);function o(){}function l(){}l.resetWarningCache=o,t.exports=function(){function t(t,e,i,o,l,a){if(a!==s){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:l,resetWarningCache:o};return i.PropTypes=i,i}},16405:(t,e,i)=>{t.exports=i(59993)()},85730:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=155.63c611b6.chunk.js.map