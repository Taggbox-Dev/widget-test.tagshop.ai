"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[548,1320,2508,2663,2685,5044,5537,6723,7713,7949,8167],{45285:(e,t,i)=>{i.d(t,{bs:()=>r});var s=i(80415),a=i(296),o=i(66345),l=i(28322),n=i(14313);let d=[];const r=e=>{e.persist();const t=e.target,{network:i,itemId:s,themeId:a}=t.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(a))d.includes(e)||d.push(e);else{const e=document.querySelector(`.tb_media-${s}`);e&&(e.style.display="none")}1===d.length&&c()},c=async()=>{var e;const{postData:t,wall:i}=a.A.getState().appData;if(!i||!Object.keys(i).length||!d.length)return;const{User:r,Wall:u}=i,p=null===r||void 0===r?void 0:r.id,m=(o.HY,null===u||void 0===u?void 0:u.id),v=null===(e=d[0])||void 0===e?void 0:e.target,{filterId:_,network:b,itemId:g,load:x}=v.dataset,f=document.querySelector(`img[data-item-id="${g}"]`),w=null!==t&&void 0!==t&&t.completeDataObject?Object.values(t.completeDataObject).filter((e=>e.id===g)):[];if(null!==w&&void 0!==w&&w.length){var y;const e=await(async e=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((t=>e.includes(t)))||await fetch(e).then((e=>e.ok)).catch((()=>!1)))(null===(y=w[0])||void 0===y?void 0:y.postFileNew);if(!e&&f){if([2,18,3,28].includes(+b)&&"0"===x&&"34"!==_&&!v.src.includes("cloud.taggbox.com")){const e=((e,t,i)=>{var s,a,o,l,n;const{UserPlan:d,Wall:r}=t;return{table_name:null===d||void 0===d?void 0:d.db_table,...e,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(a=i[0])||void 0===a?void 0:a.type,link:null===(o=i[0])||void 0===o?void 0:o.link,postFile:null===(l=i[0])||void 0===l?void 0:l.postFile,mediaFile:null===(n=i[0])||void 0===n?void 0:n.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:g,ownerId:p},i,w);try{const{data:t}=await(new n.A).post(o.t5,e,{headers:l.ML}),i=o.HY||o.MH?"":`https://images.${o.QR}/`;v.src="18"===b?`${i}${t.media}`:t.media}catch{v.src=s.gX}finally{h(v)}}else v.src=s.gX,h(v);d.shift(),c()}else{const e=`${s.th}/media/images/no-image.svg`;v.src=e,v.srcset=e,h(v),d.shift()}}},h=e=>e.setAttribute("data-load","1")},78167:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var s=i(9950),a=i(91697),o=i(44414);class l extends s.PureComponent{constructor(e){super(e),this.state={errorPic:!1}}render(){const{author:e,authorClass:t,networkId:i,size:s,inView:l}=this.props,{errorPic:n}=this.state;return(0,o.jsx)("div",{className:t,style:{overflow:4!=i||n?"":"visible"},children:l?(0,o.jsx)("img",{className:`${t}__`,src:e.picture,"aria-label":"author",alt:e.name,width:s||44,height:s||44,onError:t=>{this.setState({errorPic:!0});const s=(0,a.Yo)(i),o="#ffffff"==s?"000":s.replace("#","");t.target.src=e.errorPic?e.errorPic:`https://ui-avatars.com/api/?name=${e.name.replace(/\s/g,"")}&background=${o}&color=fff&length=1`}}):null},Math.random())}}},78262:(e,t,i)=>{i.d(t,{A:()=>r});var s=i(9950),a=i(76506),o=i(80415),l=i(45285),n=i(44414);const d=(0,s.lazy)((()=>Promise.all([i.e(1823),i.e(9874)]).then(i.bind(i,89874))));class r extends s.PureComponent{constructor(e){var t,i;super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{Post:e,mediaOnly:t}=this.props,i=t||e.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:e,height:t}=await(0,a.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:t,width:e})}catch(o){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:o,Post:l}=e;this.state={height:(null===o||void 0===o?void 0:o.height)||(null===l||void 0===l||null===(t=l.media)||void 0===t?void 0:t.height)||0,width:(null===o||void 0===o?void 0:o.width)||(null===l||void 0===l||null===(i=l.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var e,t,i,a,r;const{height:c,width:h}=this.state,{ImageClass:u,Post:p,hotspot:m,size:v,blurBG:_,mediaOnly:b,inView:g,multiKey:x,index:f,ProductSetting:w}=this.props,{id:y,link:j,products:k}=p,S=b||(null===p||void 0===p?void 0:p.media),{currentWidth:C,currentHeight:P}=this.state,N=v||100*c/h,$={paddingBottom:1===N?null:`${N}%`},I={backgroundImage:g?`url(${null===S||void 0===S||null===(e=S.image)||void 0===e?void 0:e.small})`:null},T=h>c?"100%":h/c*100+"%",D=h>c?c/h*100+"%":"100%",A=p.isProduct&&m&&p.hotspot&&(null===w||void 0===w||null===(t=w.Hotspot)||void 0===t?void 0:t.status),H={width:A&&v?T:null,height:A&&v?D:null};return(0,n.jsxs)("div",{className:`${u}_wrap_`,style:$,ref:this.mediaRef,children:[A&&_?(0,n.jsx)("div",{className:"tb_blur_bg_",style:I}):null,(0,n.jsxs)("div",{className:`${u}_wrap_in`,style:H,children:[A?(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{products:this.props.multiPic?p.mediaList[x].product:k,hotspot:p.hotspot,Post:p,showTooltip:null},f)}):null,g?(0,n.jsx)("img",{className:`${u} tb_media-${y}`,src:null===S||void 0===S||null===(i=S.image)||void 0===i?void 0:i.small,srcSet:`${null===S||void 0===S||null===(a=S.image)||void 0===a?void 0:a.small} 1x, ${null===S||void 0===S||null===(r=S.image)||void 0===r?void 0:r.large} 2x`,sizes:`${C}px`,loading:g?"eager":"lazy",decoding:"async",fetchPriority:g?"high":"low","data-id":y,height:P,width:C,"data-height":c,"data-width":h,"data-link":j,onLoad:this.onLoad,onError:e=>{e.target.src=`${o.th}/media/error/no-image.svg`,e.target.srcset=`${o.th}/media/error/no-image.svg`,(0,l.bs)(e)},alt:null===S||void 0===S?void 0:S.title,title:null===S||void 0===S?void 0:S.title},`${y}-${c}-${h}-${g}`):null]})]})}}},3720:(e,t,i)=>{i.d(t,{A:()=>c});var s=i(9950),a=i(38092),o=i.n(a),l=i(66345),n=i(76506),d=i(44414);class r extends s.Component{constructor(e){super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{media:e}=this.props.Post;if((null===e||void 0===e||!e.height)&&(null===e||void 0===e||!e.width))try{var t;const{width:i,height:s}=await(0,n.TW)(null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.small);this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=e=>{this._isMounted&&this.setState({videoLoaded:e})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var e,t,i,s,a,n;const{VideoClass:r,Post:c,controls:h,autoPlay:u,handleVideoEnded:p,muted:m,intervalTime:v,size:_,inView:b}=this.props,{calcHeight:g,calcWidth:x,currentWidth:f,currentHeight:w}=this.state,{media:y,id:j,link:k,networkId:S}=c,C=1===_,P=null!==y&&void 0!==y&&y.height?null===y||void 0===y?void 0:y.height:g,N=null!==y&&void 0!==y&&y.width?null===y||void 0===y?void 0:y.width:x,$={paddingBottom:`${C?null:_||100*P/N}%`};return(0,d.jsx)("div",{className:`${r}_wrap_`,style:$,ref:this.mediaRef,children:(0,d.jsx)(o(),{className:`${r} tb_media-${j}`,url:null!==y&&void 0!==y&&null!==(e=y.video)&&void 0!==e&&e.clip?null===y||void 0===y||null===(t=y.video)||void 0===t?void 0:t.clip:b?null===y||void 0===y||null===(i=y.video)||void 0===i?void 0:i.full:null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.small,"data-height":g,"data-width":x,"data-type":"video","data-network":S,"data-link":k,"data-item-id":j,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":N,"data-height":P,poster:null===y||void 0===y||null===(a=y.image)||void 0===a?void 0:a.small}},file:{attributes:{preload:"metadata",poster:null===y||void 0===y||null===(n=y.image)||void 0===n?void 0:n.small,height:w,width:f}}},loop:!(l.aD&&!l.HY&&null!==c&&void 0!==c&&c.loopStop)&&u,onError:e=>{C&&p&&setTimeout((()=>{this._isMounted&&p&&p()}),1e3*v),this.setVideoLoaded(!1)},autoPlay:b&&u?1:0,muted:m,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!l.HY),playing:b&&u?1:0,controls:h||!1,onEnded:p,title:null===y||void 0===y?void 0:y.title},`${j}-${w}-${x}-${b}`)})}}const c=(0,s.memo)(r)},15537:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var s=i(9950),a=i(66345),o=i(44414);const l=s.lazy((()=>i.e(620).then(i.bind(i,20620)))),n=e=>{const{Post:t,IconClass:i,isCenter:n,hideVideo:d,show:r}=e,c=!![3,5].includes(t.type),h=7===t.network.id,u=!!(t.mediaList&&t.mediaList.length>0),p=1===t.isAudio,m=!!t.isProduct,v=(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(l,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),_=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,o.jsx)("div",{className:"tb__icon tb-"+(a.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),x=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),f=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,o.jsxs)(o.Fragment,{children:[n&&(h||c)?(0,o.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!h?f:"",c&&h?v:""]}):null,m||u||c?(0,o.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?x:"",u?_:"",n||!c||h||d?"":p?b:g]}):null]}):null}},92663:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var s=i(9950),a=i(91697),o=i(44414);const l=s.lazy((()=>i.e(620).then(i.bind(i,20620))));class n extends s.PureComponent{render(){const{networkId:e,networkClass:t,iconStyle:i}=this.props;return 505==(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(e)?(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(l,{networkId:e,networkClass:t})}):(0,o.jsx)("div",{className:`${t} tb__icon tb-${(0,a.EC)(e)}`,"aria-label":`post network ${(0,a.Oi)(e)}`,children:(0,o.jsx)("div",{})})}}},71320:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var s=i(9950),a=i(96241),o=i(44414);class l extends s.PureComponent{constructor(e){super(e),this.toggleExpand=e=>{e.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1},this.toggleExpand=this.toggleExpand.bind(this),this.contentRef=s.createRef()}render(){const{CardStyle:e,contentClass:t,Content:i,Lines:s,isReadMore:l}=this.props,n={WebkitLineClamp:this.state.isExpanded?void 0:s,textAlign:e.style.textAlign};return(0,o.jsxs)("div",{className:`${t}${e.style.variant?` tb-cTBfont-${e.style.variant}`:""}`,children:[(0,o.jsx)("div",{className:"tb_content_text"+(s>0?"tb_content_trim":""),ref:this.contentRef,style:n,children:(0,o.jsx)(a.A,{Content:i,CardStyle:e})}),l?(0,o.jsxs)("div",{onClick:this.toggleExpand,className:"tb_read_more_",children:[" ","Read More"]}):null]})}}},96241:(e,t,i)=>{i.d(t,{A:()=>c});var s=i(9950),a=i(88740),o=i(44414),l=function(e){return"string"===typeof e};const n=(e,t,i)=>{if(!l(e)&&!s.isValidElement(e))return e;l(t)&&(t=function(e){var t=/[\\^$.*+?()[\]{}|]/g,i=RegExp(t.source);return e&&i.test(e)?e.replace(t,"\\$&"):e}(t)),t instanceof RegExp||(t=new RegExp(t,"g"));let a,o=[],n=0,d=[];for(;null!==(a=t.exec(e));)d.push(a);if(t.lastIndex=0,0===d.length)return e;d.forEach(((t,s)=>{const a=e.slice(n,t.index);a&&o.push(a);const l=i(...t,s,n);o.push(l),n=t.index+t[0].length}));const r=e.slice(n);return r&&o.push(r),function(e){var t=[];return e.forEach((function(e){Array.isArray(e)?t=t.concat(e):t.push(e)})),t}(o)},d=e=>{let{Content:t,children:i}=e;return(0,o.jsxs)(o.Fragment,{children:[t.title?(0,o.jsx)("div",{className:"tb_bold_txt__",children:(0,a.Ay)(t.title)}):null,i]})},r=e=>{let{Content:t,CardStyle:i}=e;const s={color:null===i||void 0===i?void 0:i.hashtag.color,backgroundColor:1==(null===i||void 0===i?void 0:i.hashtag.backgroundStatus)?null===i||void 0===i?void 0:i.hashtag.background:null},l=(null===t||void 0===t?void 0:t.feedName)||null;return null!==i&&void 0!==i&&i.hashtag.colorStatus?1===(null===i||void 0===i?void 0:i.hashtag.allHashtag)?(0,o.jsx)(d,{Content:t,children:n((0,a.Ay)(null===t||void 0===t?void 0:t.text),/#(\w+)/g,((e,t)=>(0,o.jsx)("div",{className:"tb_highlight",style:s,children:e},`${t}`)))}):0===(null===i||void 0===i?void 0:i.hashtag.allHashtag)&&1===(null===i||void 0===i?void 0:i.hashtag.feedHashtag)&&l?(0,o.jsx)(d,{Content:t,children:n((0,a.Ay)(null===t||void 0===t?void 0:t.text),l,((e,t)=>(0,o.jsx)("div",{className:"tb_highlight",style:s,children:e},`${t}`)))}):(0,o.jsx)(d,{Content:t,children:(0,a.Ay)(null===t||void 0===t?void 0:t.text)}):(0,o.jsx)(d,{Content:t,children:(0,a.Ay)(null===t||void 0===t?void 0:t.text)})},c=(0,s.memo)(r)},37949:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});i(9950);var s=i(44414);const a=e=>{const{sepClass:t}=e;return(0,s.jsx)("div",{className:t,children:"   "})}},72685:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var s=i(9950),a=i(21850),o=i(44414);class l extends s.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{Post:i,ThemeInfo:s}=this.props;t.stopPropagation(),(0,a.hq)({type:2,action:2,wall:s.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:s.ownerId}),(0,a.x9)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{shareClass:e,Post:t}=this.props,{facebook:i,twitter:s,linkedin:a}=null===t||void 0===t?void 0:t.share,l=e=>{let{shareOn:t,icon:i}=e;return(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,o.jsx)("div",{})})})};return(0,o.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,o.jsx)(l,{shareOn:i,icon:"facebook"}):"",s?(0,o.jsx)(l,{shareOn:s,icon:"twitter"}):"",a?(0,o.jsx)(l,{shareOn:a,icon:"linkedin"}):""]})]})}}},47713:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var s=i(44414);const a=e=>{var t;let{CardStyle:i,btnClass:a}=e;const o={fontFamily:null===i||void 0===i||null===(t=i.style)||void 0===t?void 0:t.font};return(0,s.jsx)("div",{className:`tb_shop_btn_wrap ${a}`,children:(0,s.jsxs)("div",{className:"tb_shop_btn"+(i.style.mode?" tb_shop_btn_light":" tb_shop_btn_dark"),style:o,children:["      ",i.shopText]})})}},6723:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var s=i(9950),a=i(76506),o=i(44414);const l=e=>{const{createdAt:t,timeClass:i}=e;return(0,o.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,a.fF)(t)}`,children:(0,a.fF)(t)})},n=(0,s.memo)(l)},2508:(e,t,i)=>{i.r(t),i.d(t,{default:()=>S});var s=i(9950),a=i(10300),o=i(53556),l=(i(61038),i(66345)),n=i(52867),d=i(21850),r=i(78167),c=i(6723),h=i(37949),u=i(44414);const p=s.lazy((()=>Promise.resolve().then(i.bind(i,92663)))),m=e=>{let{Post:t,CardStyle:i}=e;const{author:a,networkId:o}=t,d=a.username&&a.username.length>0?`@${a.username}`:"",m=(0,n.zK)(a.name),v=!(!i.author.status||m),_=!(!i.author.status||!i.timeStatus||m||""==d);return(0,u.jsxs)("div",{className:"tb_hs_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,u.jsxs)("div",{className:"tb_hs_author",children:[v?(0,u.jsx)(r.default,{author:a,network:t.network,networkId:o,authorClass:"tb_hs_author_profile"}):"",(0,u.jsxs)("div",{className:"tb_hs_author_info",children:[v?(0,u.jsx)("div",{className:"tb_hs_authorname",children:a.name}):"",(0,u.jsxs)("div",{className:"tb_hs_post_info",children:[v?(0,u.jsx)("div",{className:"tb_hs_username",children:`@${d}`}):"",_?(0,u.jsx)(h.default,{sepClass:"tb_hs_seprator"}):"",i.timeStatus?(0,u.jsx)(c.default,{createdAt:t.createdAt,timeClass:`tb_hs_time tb-cTBfont-${i.author.variant}`}):""]})]})]}),l.O7?null:(0,u.jsx)("div",{className:"tb_hs_social_",children:(0,u.jsx)(s.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(p,{networkClass:"tb_hs_social__ico",networkId:o,iconStyle:i.icon})})})]})};var v=i(78262),_=i(3720),b=i(15537);const g=e=>{let{Post:t,CardStyle:i,ThemeStyle:s,ProductSetting:a,index:o,inView:n}=e;const d=l.MH&&i.style.ratio?i.style.ratio:100,r=!(![3,5].includes(t.type)||1!=s.autoPlay||!n),c=!l.HY||!t.hotspot;return(0,u.jsxs)("div",{className:"tb_hs_media_wrap",children:[(0,u.jsx)(b.default,{Post:t,IconClass:"tb_hs_media_icon",show:c,hideVideo:s.autoPlay}),r?(0,u.jsx)(_.A,{VideoClass:"tb_hs_video",Post:t,size:d,isCover:!0,muted:!0,autoPlay:!0,index:o,inView:n},t.id):(0,u.jsx)(v.A,{ImageClass:"tb_hs_image",Post:t,size:d,ProductSetting:a,hotspot:!0,blurBG:l.HY,index:o,inView:n},t.id)]})};var x=i(71320),f=i(92663),w=i(47713),y=i(72685);const j=e=>{let{onClickPopUpSlider:t,postSizeInPx:i,index:a,ThemeStyle:o,CardStyle:d,Post:r,ProductSetting:c,ThemeInfo:h,clickToShowPopUp:p}=e;const{networkId:v}=r,{style:_}=d,b=1!==r.type,j=(d.content.trimcontent?(0,n.Ex)(r.content.text,200):r.content.text,i<200),k=!d.content.status,S=r.isShopIcon?0==k:1!=d.content.status,C=!!r.isShopIcon&&0!=k,P=0==d.style.mode&&l.HY?"light":"dark",N=l.MH?"tb_hs_color_overlay":"tb_hs_post_overlay-"+P,$={backgroundColor:l.MH?d.style.background:""};return(0,s.useEffect)((()=>{r.isPopUp&&t(a,r)}),[a,r.isPopUp,r]),(0,u.jsx)("div",{id:`tb_hs_id-${r.id}`,className:"tb_hs_post_wrapper"+(j?" tb_hs_post_wrapper2x":""),style:{padding:_.margin/2,opacity:1,transition:"opacity .5s ease-in-out"},"tb-product":r.isShopIcon?1:r.isHotspot?2:0,"area-label":r.content.text,role:"article",children:(0,u.jsxs)("div",{id:r.id,className:"tb_hs_post_in"+(l.HY?" tb_hs_post_ani":""),onClick:p(a,r),role:"button","aria-label":"Popup",children:[b?(0,u.jsx)(g,{Post:r,CardStyle:d,ThemeStyle:o,ProductSetting:c,index:a,inView:!0},a):"",r.isHotspot?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"tb_hs_post_details",children:[(0,u.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[l.HY?(0,u.jsx)("div",{className:"tb_hs_social_",children:(0,u.jsx)(f.default,{networkClass:"tb_hs_social__ico",networkId:v,iconStyle:d.icon})}):null,C?(0,u.jsx)(w.default,{CardStyle:d,btnClass:"tb_hs_btn_wrap"}):null,S||1==r.type?(0,u.jsx)(x.default,{contentClass:"tb_hs_content",Content:r.content,CardStyle:d}):null]}),l.HY?null:(0,u.jsx)(m,{Post:r,CardStyle:d}),r.share.status?(0,u.jsx)(y.default,{Post:r,ThemeInfo:h,shareClass:"tb_hs_share_container"}):null]}),r.isHotspot?null:(0,u.jsx)("div",{className:`tb_hs_post_overlay ${N}`,style:$,children:(0,u.jsx)("div",{})})]})]})})};class k extends s.PureComponent{constructor(e){super(e),this.handleKeyPress=e=>{try{const{ThemeStyle:i}=this.props;if(1==i.slide.autoSlide){if(!["INPUT","TEXTAREA"].includes(e.target.tagName)&&"Space"===e.code){const{parentID:i}=this.props;e.preventDefault();var t=this.inputRefs[i].splide.Components.Autoplay;t.isPaused()?t.play():t.pause()}}}catch(i){}},this.requestData=()=>{const{appendData:e,preRender:t,hasMoreData:i,nextData:s,ThemeStyle:a,ThemeInfo:o,containerSize:d}=this.props;i&&s(l.HY?o.webId:o.wallId,Math.floor(Date.now()/1e3),(0,n.Ci)(d.width,a.column,310),e.networkID,e.after,t,e.heightEvent)},this.autoScrollSlider=e=>{const{ThemeStyle:t}=this.props;if(1==t.autoScrollStatus||l.HY){e.index,e.length,e._o.perPage;this.requestData()}},this.handleResize=()=>{this.setState({resizeKey:Math.random()}),this.splideRef.current&&this.splideRef.current.refresh()},this.state={parent_id:"",postData:[],loadData:!1,resizeKey:Math.random()},this.inputRefs={},this.isDragging=!1,this.splideRef=(0,s.createRef)()}componentDidMount(){setTimeout((()=>{const e=document.querySelectorAll(".splide__slide");e&&e.forEach((e=>{e.removeAttribute("aria-hidden"),e.removeAttribute("role")}))}),100);const{Post:e,loadBranding:t}=this.props;this.setState({Post:e}),window.addEventListener("keydown",this.handleKeyPress),window.addEventListener("resize",this.handleResize),t()}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress),window.removeEventListener("resize",this.handleResize)}render(){const{postData:e,completeDataObject:t,CardStyle:i,ThemeStyle:s,ProductSetting:a,ThemeInfo:d,onClickToCTA:r,parentID:c,loaderData:h,onClickPopUpSlider:p,containerSize:m,clickToShowPopUp:v}=this.props,{resizeKey:_}=this.state,b=c;var g=[];const x=s.slide.autoSlide,f=s.slide.slideDuration,w=s.row&&0!==s.row?e.length<15&&(l.aD||l.Vn)?1:s.row:1,y=(0,n.Ci)(m.width,s.column,310);for(var k=0,S=e.length;k<S;)g.push(e.slice(k,k+=w));const C=y>=S,P={type:"slide",rewind:!0,speed:1e3,interval:1===x?1e3*parseInt(f):5e3,perPage:y,perMove:1,gap:0,autoplay:1===x,padding:0,updateOnMove:!0,dragThreshold:1e3,pagination:!1,arrows:!C};return""!=c?(0,u.jsx)("div",{className:"tb_hs_post_container",children:g.length?(0,u.jsxs)(o.eB,{ref:e=>{this.splideRef=e,this.inputRefs[b]=e},hasTrack:!1,className:"tb_hs_post_slider",options:P,onMove:this.autoScrollSlider,children:[(0,u.jsx)("div",{className:"splide__track",children:(0,u.jsx)("div",{className:"splide__list",children:(s.row>1&&1!==g.length&&g.length%2!==0?g.pop():g)&&g&&g.length>0&&g.map(((e,o)=>(0,u.jsx)("div",{className:`splide__slide splide__${o}`,children:e.map(((e,l)=>{const n=t[e];return(0,u.jsx)("div",{className:"tb_hs_col_wrap","data-id":n.id,children:(0,u.jsx)(j,{Post:n,index:o,CardStyle:i,ThemeStyle:s,ProductSetting:a,ThemeInfo:d,onClickToCTA:r,onClickPopUpSlider:p,postSizeInPx:m.width/y,clickToShowPopUp:v})},l)}))},`tb_${o}_${o}`)))})}),(0,u.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,u.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,u.jsx)("div",{})}),(0,u.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt "+(h.isShowMoreLoading?"tb_a_spinner":""),onClick:l.HY?e=>this.requestData():null,role:"button","aria-label":"Go to next slide",children:(0,u.jsx)("div",{})})]})]},_):null}):null}}const S=(0,a.Ng)((e=>({loaderData:e.loaderData})),(e=>({nextData:(t,i,s,a,o,l,n,r)=>e((0,d.wF)(t,i,s,a,o,l,n,r))})))(k)},91697:(e,t,i)=>{i.d(t,{EC:()=>s,Oi:()=>o,Yo:()=>a});const s=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),a=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),o=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")},61038:()=>{}}]);