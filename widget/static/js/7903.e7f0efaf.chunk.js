(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2887,4935,5268,7492,7900,7903,7955,9379,9782],{70501:(t,e,i)=>{"use strict";i.d(e,{bs:()=>d});var s=i(8159),o=i(56364),l=i(40329),a=i(32866),n=i(98409);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:h}=i,m=null===d||void 0===d?void 0:d.id,p=(l.HY,null===h||void 0===h?void 0:h.id),v=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:_,network:b,itemId:g,load:f}=v.dataset,w=document.querySelector(`img[data-item-id="${g}"]`),x=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==x&&void 0!==x&&x.length){var k;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(k=x[0])||void 0===k?void 0:k.postFileNew);if(!t&&w){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==_&&!v.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,o,l,a,n;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(l=i[0])||void 0===l?void 0:l.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(n=i[0])||void 0===n?void 0:n.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:p,postId:g,ownerId:m},i,x);try{const{data:e}=await(new n.A).post(l.t5,t,{headers:a.ML}),i=l.HY||l.MH?"":`https://images.${l.QR}/`;v.src="18"===b?`${i}${e.media}`:e.media}catch{v.src=s.gX}finally{u(v)}}else v.src=s.gX,u(v);r.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;v.src=t,v.srcset=t,u(v),r.shift()}}},u=t=>t.setAttribute("data-load","1")},81302:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>g});var s=i(88094),o=i(47043),l=i(40329),a=i(94935),n=i(97955),r=i(92887),d=i(15678);const c=t=>{let{Post:e,CardStyle:i}=t;const{author:s,networkId:l}=e,c=s.username&&s.username.length>0?`@${s.username}`:"",u=!(!i.author.status||(0,o.zK)(s.name)),h=!(!u||!i.timeStatus);return(0,d.jsxs)("div",{className:"tb_cp_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,d.jsxs)("div",{className:"tb_cp_author",children:[u?(0,d.jsx)(a.default,{author:s,networkId:l,authorClass:"tb_cp_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_cp_author_info",children:[u?(0,d.jsx)("div",{className:"tb_cp_authorname",children:s.name}):"",(0,d.jsxs)("div",{className:"tb_cp_post_info",children:[u?(0,d.jsx)("div",{className:"tb_cp_username",children:c}):"",h?(0,d.jsx)("div",{className:"tb_cp_seprator",children:" "}):"",i.timeStatus?(0,d.jsx)(n.default,{createdAt:e.createdAt,timeClass:`tb_cp_time tb-cTBfont-${i.author.variant}`}):""]})]})]}),(0,d.jsx)("div",{className:"tb_cp_social_",children:(0,d.jsx)(r.default,{networkClass:"tb_cp_social_ico",networkId:l,iconStyle:i.icon})})]})};var u=i(71816),h=i(49782),m=i(17900);const p=t=>{let{Post:e,ThemeStyle:i,CardStyle:s,index:o}=t;const a=[3,5].includes(e.type)&&1===i.autoPlay||!1,n=!!s.style.ratio&&s.style.ratio,r=!l.HY||!e.hotspot;return(0,d.jsxs)("div",{className:"tb_cp_media_wrap",children:[(0,d.jsx)(m.default,{Post:e,IconClass:"tb_cp_media_icon",show:r,hideVideo:a}),a?(0,d.jsx)(u.A,{VideoClass:"tb_cp_video",Post:e,size:n,isCover:!0,controls:!1,autoPlay:!0,muted:!0,observer:!0,index:o}):(0,d.jsx)(h.default,{ImageClass:"tb_cp_image",Post:e,size:n,hotspot:l.HY,blurBG:l.HY,observer:!0,index:o})]})};var v=i(59379),_=i(45834);const b=(0,s.lazy)((()=>i.e(1500).then(i.bind(i,81500)))),g=t=>{let{adjustWidth:e,clickToShowPopUp:i,index:a,onClickToCTA:n,onClickPopUpSlider:r,ThemeStyle:u,CardStyle:h,Post:m,ThemeInfo:g}=t;const f=(0,s.useRef)(null),w={width:`${e}%`,padding:h.style.padding/2},x=1!==m.type;return(0,s.useEffect)((()=>{l.HY&&(0,o._7)(f)}),[]),(0,d.jsx)("div",{id:`tb_cp_id-${m.id}`,className:"tb_cp_post_wrapper",style:w,"tb-network":m.networkId,"tb-product":m.isShopIcon?1:m.isHotspot?2:0,ref:f,"post-id":m.referenceId?m.referenceId:m.id,"feed-id":m.feedId,tabIndex:0,"area-label":m.content.text,role:"article",children:(0,d.jsxs)("div",{className:"tb_cp_post_in",onClick:i(a,m),role:"button","aria-label":"Popup",tabIndex:0,children:[(0,d.jsxs)("div",{className:"tb_cp_post_media_wrapper",children:[h.shareStatus?(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(b,{Post:m,ThemeInfo:g,shareClass:"tb_cp_share_container"})}):"",x?(0,d.jsx)(p,{Post:m,CardStyle:h,ThemeStyle:u,index:a}):"",m.ctaStatus?(0,d.jsx)("div",{className:"tb_cp_post_cta",children:(0,d.jsx)(v.default,{ctaClass:"tb_cp_post_cta_btn",Post:m,onClickToCTA:n})}):""]}),(0,d.jsx)("div",{className:"tb_cp_contant_wrapper",children:(0,d.jsx)(c,{Post:m,CardStyle:h,ThemeStyle:u})}),h.actionStatus?(0,d.jsx)(_.A,{Post:m,CardStyle:h,actionClass:"tb_cp_social_action__"}):""]})})}},94935:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(88094),o=i(96913),l=i(17524),a=i(15678);class n extends s.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:s}=this.props;return(0,a.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:(0,a.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:(0,l.Ay)(t.name),width:s||44,height:s||44,onError:e=>{const s=(0,o.Yo)(i),l="#ffffff"==s?"000":s.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${l}&color=fff&length=1`}})},Math.random())}}},59379:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var s=i(88094),o=i(15678);class l extends s.PureComponent{render(){const{Post:t,ctaClass:e,onClickToCTA:i}=this.props,{cta:s}=t,l={color:null===s||void 0===s?void 0:s.color,backgroundColor:null===s||void 0===s?void 0:s.background};return(0,o.jsxs)("div",{className:e,style:l,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),i(t),window.open(`${s.url}`,"_blank")},children:[" ",s.text]})}}const a=l},1111:(t,e,i)=>{"use strict";i.d(e,{A:()=>m});var s=i(88094),o=i(83546),l=i(83775),a=i(24076),n=i(19066),r=i(42682),d=i(15678);const c=(0,s.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,s=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,s]})]})})),u=t=>{let{products:e,appData:i,Post:o}=t;const[u,h]=(0,s.useState)(null),m=(0,s.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),p=(0,s.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,r.hq)({})}),[i,o]),v=(0,s.useCallback)(((t,e)=>{t.stopPropagation(),p(e),window.open(e.url,"_blank")}),[p]);return null!==m&&void 0!==m&&m.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,n.Ul)()}`,s=u===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:e=>v(e,t),"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ "+(0===m.type?"tb_hotspot_ani__":""),children:e+1}),(0,l.createPortal)((0,d.jsx)(a.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,d.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,s.memo)(u),m=(0,o.Ng)((t=>({appData:t.appData})))(h)},17900:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(88094),o=i(40329),l=i(15678);const a=s.lazy((()=>i.e(6300).then(i.bind(i,36300)))),n=t=>{const{Post:e,IconClass:i,isCenter:n,hideVideo:r,show:d}=t,c=!![3,5].includes(e.type),u=7===e.network.id,h=!!(e.mediaList&&e.mediaList.length>0),m=1===e.isAudio,p=!!e.isProduct,v=(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(a,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),_=(0,l.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,l.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,l.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,l.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,l.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return d?(0,l.jsxs)(l.Fragment,{children:[n&&(u||c)?(0,l.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!u?w:"",c&&u?v:""]}):null,p||h||c?(0,l.jsxs)("div",{className:`${i} tb__media_ico_`,children:[p?f:"",h?_:"",n||!c||u||r?"":m?b:g]}):null]}):null}},49782:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(88094),o=i(19066),l=i(8159),a=i(17524),n=i(70501),r=i(1111),d=i(15678);class c extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(l){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:l,Post:a}=t;this.state={isVisible:!this.props.observer,height:(null===l||void 0===l?void 0:l.height)||(null===a||void 0===a||null===(e=a.media)||void 0===e?void 0:e.height)||0,width:(null===l||void 0===l?void 0:l.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this.observer=null}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()})),this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:!0}),this.observer.disconnect())}),{threshold:.01}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect()}render(){var t,e,i,s;const{ImageClass:o,Post:c,hotspot:u,size:h,blurBG:m,ProductSetting:p,mediaOnly:v}=this.props,{id:_,link:b,products:g}=c,f=v||(null===c||void 0===c?void 0:c.media),{isVisible:w,height:x,width:k,currentWidth:y,currentHeight:j}=this.state,C=h||100*x/k,S={paddingBottom:1===C?null:`${C}%`},I={backgroundImage:w?`url(${null===f||void 0===f||null===(t=f.image)||void 0===t?void 0:t.small})`:null},P=k>x?"100%":k/x*100+"%",$=k>x?x/k*100+"%":"100%",N=c.isProduct&&u,A={width:N&&h?P:null,height:N&&h?$:null};return(0,d.jsxs)("div",{className:`${o}_wrap_`,style:S,ref:this.mediaRef,children:[N&&m?(0,d.jsx)("div",{className:"tb_blur_bg_",style:I}):null,(0,d.jsxs)("div",{className:`${o}_wrap_in`,style:A,children:[N?(0,d.jsx)(r.A,{products:g,ProductSetting:p,hotspot:c.hotspot,dataPost:c}):null,w?(0,d.jsx)("img",{className:`${o} tb_media-${_}`,src:null===f||void 0===f||null===(e=f.image)||void 0===e?void 0:e.small,srcSet:`${null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.small} 1x, ${null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.large} 2x`,sizes:`${y}px`,loading:w?"eager":"lazy",decoding:"async",fetchPriority:w?"high":"low","data-id":_,height:j,width:y,"data-height":x,"data-width":k,"data-link":b,onLoad:this.onLoad,onError:t=>{t.target.src=`${l.th}/media/error/no-image.svg`,t.target.srcset=`${l.th}/media/error/no-image.svg`,(0,n.bs)(t)},alt:null===f||void 0===f?void 0:f.title,title:(0,a.Ay)(null===f||void 0===f?void 0:f.title)},_):null]})]})}}},71816:(t,e,i)=>{"use strict";i.d(e,{A:()=>u});var s=i(88094),o=i(25740),l=i.n(o),a=i(40329),n=i(17524),r=i(19066),d=i(15678);class c extends s.Component{constructor(t){super(t),this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:s}=await(0,r.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small,{signal:this.abortController.signal});this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&"AbortError"!==i.name&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,isVisible:!this.props.observer,calcHeight:0,calcWidth:0},this.mediaRef=s.createRef(),this.observer=null,this._isMounted=!1,this.abortController=new AbortController}componentDidMount(){this._isMounted=!0,this.mediaSizeCalc();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this._isMounted&&this.setState({isVisible:!0})}),{threshold:.1}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}catch(t){this._isMounted&&this.setState({isVisible:!0})}}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect(),this.observer&&this.mediaRef.current&&this.observer.unobserve(this.mediaRef.current),this.abortController.abort()}render(){var t,e,i,s;const{VideoClass:o,Post:r,controls:c,autoPlay:u,handleVideoEnded:h,muted:m,intervalTime:p,size:v}=this.props,{isVisible:_,calcHeight:b,calcWidth:g}=this.state,{media:f,id:w,link:x,networkId:k}=r,y=1===v,j=null!==f&&void 0!==f&&f.height?null===f||void 0===f?void 0:f.height:b,C=null!==f&&void 0!==f&&f.width?null===f||void 0===f?void 0:f.width:g,S={paddingBottom:`${y?null:v||100*j/C}%`};return(0,d.jsx)("div",{className:`${o}_wrap_`,style:S,ref:this.mediaRef,children:(0,d.jsx)(l(),{className:`${o} tb_media-${w}`,url:_?null===f||void 0===f||null===(t=f.video)||void 0===t?void 0:t.full:null===f||void 0===f||null===(e=f.image)||void 0===e?void 0:e.small,"data-height":j,"data-width":C,"data-type":"video","data-network":k,"data-link":x,"data-item-id":w,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":C,"data-height":j,poster:null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.small}},file:{attributes:{preload:"metadata",poster:null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.small}}},loop:!(a.aD&&!a.HY&&null!==r&&void 0!==r&&r.loopStop)&&u,onError:t=>{y&&h&&setTimeout((()=>{this._isMounted&&h&&h()}),1e3*p),this.setVideoLoaded(!1)},autoPlay:_&&u?1:0,muted:m,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!a.HY),playing:_&&u?1:0,controls:c||!1,onEnded:h,title:(0,n.Ay)(null===f||void 0===f?void 0:f.title)})})}}const u=(0,s.memo)(c)},92887:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(88094),o=i(96913),l=i(15678);const a=s.lazy((()=>i.e(6300).then(i.bind(i,36300))));class n extends s.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:i,isPopUp:n}=this.props;return(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(t)?(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(a,{networkId:t,networkClass:e})}):(0,l.jsx)("div",{className:`${e} tb__icon tb-${(0,o.EC)(t)}`,"aria-label":`post network ${(0,o.Oi)(t)}`,children:(0,l.jsx)("div",{})})}}},45834:(t,e,i)=>{"use strict";i.d(e,{A:()=>d});var s=i(88094),o=i(19066),l=i(96913),a=i(15678);const n=(t,e,i,s)=>{const l={like:`https://twitter.com/intent/favorite?tweet_id=${(0,o.Ph)(e)}`,comment:`https://twitter.com/intent/tweet?in_reply_to=${(0,o.Ph)(e)}`,retweet:`https://twitter.com/intent/retweet?tweet_id=${(0,o.Ph)(e)}`};return 1===t?l[s]:i},r=t=>{let{arialbl:e,hrefClick:i,Icon:s,count:l,itemId:n=0,type:r}=t;const d=l>0?(0,o.sl)(l):"";return(0,a.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,a.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(i,"_blank")},className:`tb_social_action__ico_wrap tb_social_action__ico_wrap_${n}`,"aria-label":`${e} post ${r} count ${d}`,role:"button",tabIndex:"0",children:[(0,a.jsx)("div",{className:`tb_social_action_ico__ tb__icon tb-${s}`,children:"  "}),d?(0,a.jsx)("div",{className:"tb_social_action_counts__",children:d}):""]})})};class d extends s.PureComponent{componentDidMount(){try{var t;const{Post:e}=this.props,i=`.tb_social_action__ico_wrap_${null===e||void 0===e?void 0:e.id}`;null===(t=document.querySelector(i))||void 0===t||t.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}))}catch(e){console.log(e)}}render(){const{Post:t,CardStyle:e,actionClass:i}=this.props,{icon:s,style:o}=e,d={color:1!==s.default?s.color:o.color},c=t.networkId,{comment:u,like:h}=t.count,m=[3,10,7].includes(c)?"like":"heart-outline",p=[1,2,3,7,8,9,10,18].includes(c),v=![29,19].includes(c),_=(0,l.Oi)(c);return[29,26,23,6,5,11,12,15,20,21].includes(c)?null:(0,a.jsx)("div",{className:i,children:(0,a.jsxs)("div",{className:"tb_social_action__",role:"list",children:[p&&(0,a.jsx)(r,{itemId:t.id,arialbl:_,hrefClick:n(c,t.postId,t.link,"like"),Icon:m,iconStyle:d,count:h,type:"like"}),v&&(0,a.jsx)(r,{itemId:t.id,arialbl:_,hrefClick:n(c,t.postId,t.link,"comment"),Icon:"comment",iconStyle:d,count:u,type:"comment"}),1===c&&(0,a.jsx)(r,{itemId:t.id,arialbl:_,hrefClick:n(c,t.postId,t.link,"retweet"),Icon:"retweet",iconStyle:d,count:u,type:"comment"}),(0,a.jsx)(r,{arialbl:_,itemId:t.id,hrefClick:t.link,Icon:"eye",iconStyle:d,count:0,type:"view"})]})})}}},97955:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(88094),o=i(19066),l=i(15678);const a=t=>{const{createdAt:e,timeClass:i}=t;return(0,l.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,o.fF)(e)}`,children:(0,o.fF)(e)})},n=(0,s.memo)(a)},96913:(t,e,i)=>{"use strict";i.d(e,{EC:()=>s,Oi:()=>l,Yo:()=>o});const s=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),o=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),l=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},95098:()=>{}}]);