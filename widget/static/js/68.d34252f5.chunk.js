(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[68,9782],{70501:(t,e,i)=>{"use strict";i.d(e,{bs:()=>r});var s=i(8159),o=i(56364),l=i(40329),a=i(97014),d=i(98409);let n=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))n.includes(t)||n.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===n.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!n.length)return;const{User:r,Wall:u}=i,v=null===r||void 0===r?void 0:r.id,m=(l.HY,null===u||void 0===u?void 0:u.id),p=null===(t=n[0])||void 0===t?void 0:t.target,{filterId:g,network:b,itemId:_,load:f}=p.dataset,y=document.querySelector(`img[data-item-id="${_}"]`),w=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===_)):[];if(null!==w&&void 0!==w&&w.length){var x;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(x=w[0])||void 0===x?void 0:x.postFileNew);if(!t&&y){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==g&&!p.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,o,l,a,d;const{UserPlan:n,Wall:r}=e;return{table_name:null===n||void 0===n?void 0:n.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(l=i[0])||void 0===l?void 0:l.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(d=i[0])||void 0===d?void 0:d.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:_,ownerId:v},i,w);try{const{data:e}=await(new d.A).post(l.t5,t,{headers:a.ML}),i=l.HY||l.MH?"":`https://images.${l.QR}/`;p.src="18"===b?`${i}${e.media}`:e.media}catch{p.src=s.gX}finally{h(p)}}else p.src=s.gX,h(p);n.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;p.src=t,p.srcset=t,h(p),n.shift()}}},h=t=>t.setAttribute("data-load","1")},1111:(t,e,i)=>{"use strict";i.d(e,{A:()=>v});var s=i(88094),o=i(83546),l=i(83775),a=i(24076),d=i(19066),n=i(42682),r=i(15678);const c=(0,s.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,s=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,s]})]})})),h=t=>{let{products:e,appData:i,Post:o}=t;const[h,u]=(0,s.useState)(null),v=(0,s.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),m=(0,s.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,n.hq)({})}),[i,o]),p=(0,s.useCallback)(((t,e)=>{t.stopPropagation(),m(e),window.open(e.url,"_blank")}),[m]);return null!==v&&void 0!==v&&v.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,d.Ul)()}`,s=h===e;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>u(e),onMouseLeave:()=>u(null),onClick:e=>p(e,t),"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ "+(0===v.type?"tb_hotspot_ani__":""),children:e+1}),(0,l.createPortal)((0,r.jsx)(a.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,r.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},u=(0,s.memo)(h),v=(0,o.Ng)((t=>({appData:t.appData})))(u)},49782:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(88094),o=i(19066),l=i(8159),a=i(17524),d=i(70501),n=i(1111),r=i(15678);class c extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(l){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:l,Post:a}=t;this.state={isVisible:!this.props.observer,height:(null===l||void 0===l?void 0:l.height)||(null===a||void 0===a||null===(e=a.media)||void 0===e?void 0:e.height)||0,width:(null===l||void 0===l?void 0:l.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this.observer=null}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()})),this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:!0}),this.observer.disconnect())}),{threshold:.01}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect()}render(){var t,e,i,s;const{ImageClass:o,Post:c,hotspot:h,size:u,blurBG:v,ProductSetting:m,mediaOnly:p}=this.props,{id:g,link:b,products:_}=c,f=p||(null===c||void 0===c?void 0:c.media),{isVisible:y,height:w,width:x,currentWidth:P,currentHeight:k}=this.state,S=u||100*w/x,j={paddingBottom:1===S?null:`${S}%`},$={backgroundImage:y?`url(${null===f||void 0===f||null===(t=f.image)||void 0===t?void 0:t.small})`:null},C=x>w?"100%":x/w*100+"%",I=x>w?w/x*100+"%":"100%",M=c.isProduct&&h,R={width:M&&u?C:null,height:M&&u?I:null};return(0,r.jsxs)("div",{className:`${o}_wrap_`,style:j,ref:this.mediaRef,children:[M&&v?(0,r.jsx)("div",{className:"tb_blur_bg_",style:$}):null,(0,r.jsxs)("div",{className:`${o}_wrap_in`,style:R,children:[M?(0,r.jsx)(n.A,{products:_,ProductSetting:m,hotspot:c.hotspot,dataPost:c}):null,y?(0,r.jsx)("img",{className:`${o} tb_media-${g}`,src:null===f||void 0===f||null===(e=f.image)||void 0===e?void 0:e.small,srcSet:`${null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.small} 1x, ${null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.large} 2x`,sizes:`${P}px`,loading:y?"eager":"lazy",decoding:"async",fetchPriority:y?"high":"low","data-id":g,height:k,width:P,"data-height":w,"data-width":x,"data-link":b,onLoad:this.onLoad,onError:t=>{t.target.src=`${l.th}/media/error/no-image.svg`,t.target.srcset=`${l.th}/media/error/no-image.svg`,(0,d.bs)(t)},alt:null===f||void 0===f?void 0:f.title,title:(0,a.Ay)(null===f||void 0===f?void 0:f.title)},g):null]})]})}}},71816:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var s=i(88094),o=i(25740),l=i.n(o),a=i(40329),d=i(17524),n=i(19066),r=i(15678);class c extends s.Component{constructor(t){super(t),this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:s}=await(0,n.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small,{signal:this.abortController.signal});this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&"AbortError"!==i.name&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,isVisible:!this.props.observer,calcHeight:0,calcWidth:0},this.mediaRef=s.createRef(),this.observer=null,this._isMounted=!1,this.abortController=new AbortController}componentDidMount(){this._isMounted=!0,this.mediaSizeCalc();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this._isMounted&&this.setState({isVisible:!0})}),{threshold:.1}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}catch(t){this._isMounted&&this.setState({isVisible:!0})}}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect(),this.observer&&this.mediaRef.current&&this.observer.unobserve(this.mediaRef.current),this.abortController.abort()}render(){var t,e,i,s;const{VideoClass:o,Post:n,controls:c,autoPlay:h,handleVideoEnded:u,muted:v,intervalTime:m,size:p}=this.props,{isVisible:g,calcHeight:b,calcWidth:_}=this.state,{media:f,id:y,link:w,networkId:x}=n,P=1===p,k=null!==f&&void 0!==f&&f.height?null===f||void 0===f?void 0:f.height:b,S=null!==f&&void 0!==f&&f.width?null===f||void 0===f?void 0:f.width:_,j={paddingBottom:`${P?null:p||100*k/S}%`};return(0,r.jsx)("div",{className:`${o}_wrap_`,style:j,ref:this.mediaRef,children:(0,r.jsx)(l(),{className:`${o} tb_media-${y}`,url:g?null===f||void 0===f||null===(t=f.video)||void 0===t?void 0:t.full:null===f||void 0===f||null===(e=f.image)||void 0===e?void 0:e.small,"data-height":k,"data-width":S,"data-type":"video","data-network":x,"data-link":w,"data-item-id":y,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":S,"data-height":k,poster:null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.small}},file:{attributes:{preload:"metadata",poster:null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.small}}},loop:!(a.aD&&!a.HY&&null!==n&&void 0!==n&&n.loopStop)&&h,onError:t=>{P&&u&&setTimeout((()=>{this._isMounted&&u&&u()}),1e3*m),this.setVideoLoaded(!1)},autoPlay:g&&h?1:0,muted:v,volume:h?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!a.HY),playing:g&&h?1:0,controls:c||!1,onEnded:u,title:(0,d.Ay)(null===f||void 0===f?void 0:f.title)})})}}const h=(0,s.memo)(c)},82414:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(88094),o=i(40329),l=i(49782),a=i(71816),d=i(15678);const n=(0,s.lazy)((()=>i.e(7900).then(i.bind(i,17900)))),r=t=>{let{Post:e,ThemeStyle:i,index:r}=t;const c=!e.hotspot,h=!(3!==e.type&&5!==e.type||!i.autoPlay&&o.HY);return(0,d.jsxs)("div",{className:"tb_gt_media_wrap",children:[(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(n,{Post:e,IconClass:"tb_gt_media_icon",show:c,hideVideo:i.autoPlay})}),h?(0,d.jsx)(a.A,{VideoClass:"tb_gt_video",Post:e,size:100,isCover:!0,controls:!1,autoPlay:i.autoPlay,muted:!0,index:r}):(0,d.jsx)(l.default,{ImageClass:"tb_gt_image",Post:e,size:100,hotspot:o.HY,blurBG:o.HY,index:r})]})}},58496:(t,e,i)=>{"use strict";var s=i(63687);function o(){}function l(){}l.resetWarningCache=o,t.exports=function(){function t(t,e,i,o,l,a){if(a!==s){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:l,resetWarningCache:o};return i.PropTypes=i,i}},32486:(t,e,i)=>{t.exports=i(58496)()},63687:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},95098:()=>{}}]);