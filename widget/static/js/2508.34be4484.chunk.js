"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[548,1320,2508,2663,2685,5044,5537,6723,7713,7949,8167],{45285:(t,e,i)=>{i.d(e,{bs:()=>r});var s=i(80415),a=i(296),o=i(66345),l=i(28322),n=i(14313);let d=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:a}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(a))d.includes(t)||d.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===d.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=a.A.getState().appData;if(!i||!Object.keys(i).length||!d.length)return;const{User:r,Wall:u}=i,p=null===r||void 0===r?void 0:r.id,m=(o.HY,null===u||void 0===u?void 0:u.id),v=null===(t=d[0])||void 0===t?void 0:t.target,{filterId:_,network:b,itemId:g,load:x}=v.dataset,f=document.querySelector(`img[data-item-id="${g}"]`),w=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==w&&void 0!==w&&w.length){var y;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(y=w[0])||void 0===y?void 0:y.postFileNew);if(!t&&f){if([2,18,3,28].includes(+b)&&"0"===x&&"34"!==_&&!v.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,a,o,l,n;const{UserPlan:d,Wall:r}=e;return{table_name:null===d||void 0===d?void 0:d.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(a=i[0])||void 0===a?void 0:a.type,link:null===(o=i[0])||void 0===o?void 0:o.link,postFile:null===(l=i[0])||void 0===l?void 0:l.postFile,mediaFile:null===(n=i[0])||void 0===n?void 0:n.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:g,ownerId:p},i,w);try{const{data:e}=await(new n.A).post(o.t5,t,{headers:l.ML}),i=o.HY||o.MH?"":`https://images.${o.QR}/`;v.src="18"===b?`${i}${e.media}`:e.media}catch{v.src=s.gX}finally{h(v)}}else v.src=s.gX,h(v);d.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;v.src=t,v.srcset=t,h(v),d.shift()}}},h=t=>t.setAttribute("data-load","1")},78167:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(9950),a=i(91697),o=i(44414);class l extends s.PureComponent{constructor(t){super(t),this.state={errorPic:!1}}render(){const{author:t,authorClass:e,networkId:i,size:s,inView:l}=this.props,{errorPic:n}=this.state;return(0,o.jsx)("div",{className:e,style:{overflow:4!=i||n?"":"visible"},children:l?(0,o.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:s||44,height:s||44,onError:e=>{this.setState({errorPic:!0});const s=(0,a.Yo)(i),o="#ffffff"==s?"000":s.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${o}&color=fff&length=1`}}):null},Math.random())}}},78262:(t,e,i)=>{i.d(e,{A:()=>r});var s=i(9950),a=i(76506),o=i(80415),l=i(45285),n=i(44414);const d=(0,s.lazy)((()=>Promise.all([i.e(1823),i.e(9874)]).then(i.bind(i,89874))));class r extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,a.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(o){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:o,Post:l}=t;this.state={height:(null===o||void 0===o?void 0:o.height)||(null===l||void 0===l||null===(e=l.media)||void 0===e?void 0:e.height)||0,width:(null===o||void 0===o?void 0:o.width)||(null===l||void 0===l||null===(i=l.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,a,r;const{height:c,width:h}=this.state,{ImageClass:u,Post:p,hotspot:m,size:v,blurBG:_,mediaOnly:b,inView:g,multiKey:x,index:f,ProductSetting:w}=this.props,{id:y,link:j,products:k}=p,S=b||(null===p||void 0===p?void 0:p.media),{currentWidth:C,currentHeight:P}=this.state,N=v||100*c/h,$={paddingBottom:1===N?null:`${N}%`},I={backgroundImage:g?`url(${null===S||void 0===S||null===(t=S.image)||void 0===t?void 0:t.small})`:null},T=h>c?"100%":h/c*100+"%",D=h>c?c/h*100+"%":"100%",A=p.isProduct&&m&&p.hotspot&&(null===w||void 0===w||null===(e=w.Hotspot)||void 0===e?void 0:e.status),H={width:A&&v?T:null,height:A&&v?D:null};return(0,n.jsxs)("div",{className:`${u}_wrap_`,style:$,ref:this.mediaRef,children:[A&&_?(0,n.jsx)("div",{className:"tb_blur_bg_",style:I}):null,(0,n.jsxs)("div",{className:`${u}_wrap_in`,style:H,children:[A?(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{products:this.props.multiPic?p.mediaList[x].product:k,hotspot:p.hotspot,Post:p,showTooltip:null},f)}):null,g?(0,n.jsx)("img",{className:`${u} tb_media-${y}`,src:null===S||void 0===S||null===(i=S.image)||void 0===i?void 0:i.small,srcSet:`${null===S||void 0===S||null===(a=S.image)||void 0===a?void 0:a.small} 1x, ${null===S||void 0===S||null===(r=S.image)||void 0===r?void 0:r.large} 2x`,sizes:`${C}px`,loading:g?"eager":"lazy",decoding:"async",fetchPriority:g?"high":"low","data-id":y,height:P,width:C,"data-height":c,"data-width":h,"data-link":j,onLoad:this.onLoad,onError:t=>{t.target.src=`${o.th}/media/error/no-image.svg`,t.target.srcset=`${o.th}/media/error/no-image.svg`,(0,l.bs)(t)},alt:null===S||void 0===S?void 0:S.title,title:null===S||void 0===S?void 0:S.title},`${y}-${c}-${h}-${g}`):null]})]})}}},3720:(t,e,i)=>{i.d(e,{A:()=>c});var s=i(9950),a=i(38092),o=i.n(a),l=i(66345),n=i(76506),d=i(44414);class r extends s.Component{constructor(t){super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:s}=await(0,n.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small);this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,s,a,n;const{VideoClass:r,Post:c,controls:h,autoPlay:u,handleVideoEnded:p,muted:m,intervalTime:v,size:_,inView:b}=this.props,{calcHeight:g,calcWidth:x,currentWidth:f,currentHeight:w}=this.state,{media:y,id:j,link:k,networkId:S}=c,C=1===_,P=null!==y&&void 0!==y&&y.height?null===y||void 0===y?void 0:y.height:g,N=null!==y&&void 0!==y&&y.width?null===y||void 0===y?void 0:y.width:x,$={paddingBottom:`${C?null:_||100*P/N}%`};return(0,d.jsx)("div",{className:`${r}_wrap_`,style:$,ref:this.mediaRef,children:(0,d.jsx)(o(),{className:`${r} tb_media-${j}`,url:null!==y&&void 0!==y&&null!==(t=y.video)&&void 0!==t&&t.clip?null===y||void 0===y||null===(e=y.video)||void 0===e?void 0:e.clip:b?null===y||void 0===y||null===(i=y.video)||void 0===i?void 0:i.full:null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.small,"data-height":g,"data-width":x,"data-type":"video","data-network":S,"data-link":k,"data-item-id":j,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":N,"data-height":P,poster:null===y||void 0===y||null===(a=y.image)||void 0===a?void 0:a.small}},file:{attributes:{preload:"metadata",poster:null===y||void 0===y||null===(n=y.image)||void 0===n?void 0:n.small,height:w,width:f}}},loop:!(l.aD&&!l.HY&&null!==c&&void 0!==c&&c.loopStop)&&u,onError:t=>{C&&p&&setTimeout((()=>{this._isMounted&&p&&p()}),1e3*v),this.setVideoLoaded(!1)},autoPlay:b&&u?1:0,muted:m,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!l.HY),playing:b&&u?1:0,controls:h||!1,onEnded:p,title:null===y||void 0===y?void 0:y.title},`${j}-${w}-${x}-${b}`)})}}const c=(0,s.memo)(r)},15537:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var s=i(9950),a=i(66345),o=i(44414);const l=s.lazy((()=>i.e(620).then(i.bind(i,20620)))),n=t=>{const{Post:e,IconClass:i,isCenter:n,hideVideo:d,show:r}=t,c=!![3,5].includes(e.type),h=7===e.network.id,u=!!(e.mediaList&&e.mediaList.length>0),p=1===e.isAudio,m=!!e.isProduct,v=(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(l,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),_=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,o.jsx)("div",{className:"tb__icon tb-"+(a.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),x=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),f=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,o.jsxs)(o.Fragment,{children:[n&&(h||c)?(0,o.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!h?f:"",c&&h?v:""]}):null,m||u||c?(0,o.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?x:"",u?_:"",n||!c||h||d?"":p?b:g]}):null]}):null}},92663:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var s=i(9950),a=i(91697),o=i(44414);const l=s.lazy((()=>i.e(620).then(i.bind(i,20620))));class n extends s.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:i}=this.props;return 505==(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(t)?(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(l,{networkId:t,networkClass:e})}):(0,o.jsx)("div",{className:`${e} tb__icon tb-${(0,a.EC)(t)}`,"aria-label":`post network ${(0,a.Oi)(t)}`,children:(0,o.jsx)("div",{})})}}},71320:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(9950),a=i(96241),o=i(44414);class l extends s.PureComponent{constructor(t){super(t),this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1},this.toggleExpand=this.toggleExpand.bind(this),this.contentRef=s.createRef()}render(){const{CardStyle:t,contentClass:e,Content:i,Lines:s,isReadMore:l}=this.props,n={WebkitLineClamp:this.state.isExpanded?void 0:s,textAlign:t.style.textAlign};return(0,o.jsxs)("div",{className:`${e}${t.style.variant?` tb-cTBfont-${t.style.variant}`:""}`,children:[(0,o.jsx)("div",{className:"tb_content_text"+(s>0?"tb_content_trim":""),ref:this.contentRef,style:n,children:(0,o.jsx)(a.A,{Content:i,CardStyle:t})}),l?(0,o.jsxs)("div",{onClick:this.toggleExpand,className:"tb_read_more_",children:[" ","Read More"]}):null]})}}},96241:(t,e,i)=>{i.d(e,{A:()=>h});var s=i(9950),a=i(88740),o=i(44414),l=function(t){return"string"===typeof t};const n=(t,e,i)=>{if(!l(t)&&!s.isValidElement(t))return t;l(e)&&(e=function(t){var e=/[\\^$.*+?()[\]{}|]/g,i=RegExp(e.source);return t&&i.test(t)?t.replace(e,"\\$&"):t}(e)),e instanceof RegExp||(e=new RegExp(e,"g"));let a,o=[],n=0,d=[];for(;null!==(a=e.exec(t));)d.push(a);if(e.lastIndex=0,0===d.length)return t;d.forEach(((e,s)=>{const a=t.slice(n,e.index);a&&o.push(a);const l=i(...e,s,n);o.push(l),n=e.index+e[0].length}));const r=t.slice(n);return r&&o.push(r),function(t){var e=[];return t.forEach((function(t){Array.isArray(t)?e=e.concat(t):e.push(t)})),e}(o)},d=t=>{let{Content:e,children:i}=t;return(0,o.jsxs)(o.Fragment,{children:[e.title?(0,o.jsx)("div",{className:"tb_bold_txt__",children:(0,a.Ay)(e.title)}):null,i]})},r=t=>Math.floor(Math.random()*(t.length?t.length:1)),c=t=>{let{Content:e,CardStyle:i}=t;const s={color:null===i||void 0===i?void 0:i.hashtag.color,backgroundColor:1==(null===i||void 0===i?void 0:i.hashtag.backgroundStatus)?null===i||void 0===i?void 0:i.hashtag.background:null},l=(null===e||void 0===e?void 0:e.feedName)||null;return null!==i&&void 0!==i&&i.hashtag.colorStatus?1===(null===i||void 0===i?void 0:i.hashtag.allHashtag)?(0,o.jsx)(d,{Content:e,children:n((0,a.Ay)(null===e||void 0===e?void 0:e.text),/#(\w+)/g,((t,e)=>(0,o.jsx)("div",{className:"tb_highlight",style:s,children:t},`${e}-${r(e)}`)))}):0===(null===i||void 0===i?void 0:i.hashtag.allHashtag)&&1===(null===i||void 0===i?void 0:i.hashtag.feedHashtag)&&l?(0,o.jsx)(d,{Content:e,children:n((0,a.Ay)(null===e||void 0===e?void 0:e.text),l,((t,e)=>(0,o.jsx)("div",{className:"tb_highlight",style:s,children:t},`${e}-${r(e)}`)))}):(0,o.jsx)(d,{Content:e,children:(0,a.Ay)(null===e||void 0===e?void 0:e.text)}):(0,o.jsx)(d,{Content:e,children:(0,a.Ay)(null===e||void 0===e?void 0:e.text)})},h=(0,s.memo)(c)},37949:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});i(9950);var s=i(44414);const a=t=>{const{sepClass:e}=t;return(0,s.jsx)("div",{className:e,children:"   "})}},72685:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(9950),a=i(21850),o=i(44414);class l extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:i,ThemeInfo:s}=this.props;e.stopPropagation(),(0,a.hq)({type:2,action:2,wall:s.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:s.ownerId}),(0,a.x9)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:i,twitter:s,linkedin:a}=null===e||void 0===e?void 0:e.share,l=t=>{let{shareOn:e,icon:i}=t;return(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(e),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,o.jsx)("div",{})})})};return(0,o.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,o.jsx)(l,{shareOn:i,icon:"facebook"}):"",s?(0,o.jsx)(l,{shareOn:s,icon:"twitter"}):"",a?(0,o.jsx)(l,{shareOn:a,icon:"linkedin"}):""]})]})}}},47713:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});var s=i(44414);const a=t=>{var e;let{CardStyle:i,btnClass:a}=t;const o={fontFamily:null===i||void 0===i||null===(e=i.style)||void 0===e?void 0:e.font};return(0,s.jsx)("div",{className:`tb_shop_btn_wrap ${a}`,children:(0,s.jsxs)("div",{className:"tb_shop_btn"+(i.style.mode?" tb_shop_btn_light":" tb_shop_btn_dark"),style:o,children:["      ",i.shopText]})})}},6723:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var s=i(9950),a=i(76506),o=i(44414);const l=t=>{const{createdAt:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,a.fF)(e)}`,children:(0,a.fF)(e)})},n=(0,s.memo)(l)},2508:(t,e,i)=>{i.r(e),i.d(e,{default:()=>S});var s=i(9950),a=i(10300),o=i(53556),l=(i(61038),i(66345)),n=i(52867),d=i(21850),r=i(78167),c=i(6723),h=i(37949),u=i(44414);const p=s.lazy((()=>Promise.resolve().then(i.bind(i,92663)))),m=t=>{let{Post:e,CardStyle:i}=t;const{author:a,networkId:o}=e,d=a.username&&a.username.length>0?`@${a.username}`:"",m=(0,n.zK)(a.name),v=!(!i.author.status||m),_=!(!i.author.status||!i.timeStatus||m||""==d);return(0,u.jsxs)("div",{className:"tb_hs_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,u.jsxs)("div",{className:"tb_hs_author",children:[v?(0,u.jsx)(r.default,{author:a,network:e.network,networkId:o,authorClass:"tb_hs_author_profile"}):"",(0,u.jsxs)("div",{className:"tb_hs_author_info",children:[v?(0,u.jsx)("div",{className:"tb_hs_authorname",children:a.name}):"",(0,u.jsxs)("div",{className:"tb_hs_post_info",children:[v?(0,u.jsx)("div",{className:"tb_hs_username",children:`@${d}`}):"",_?(0,u.jsx)(h.default,{sepClass:"tb_hs_seprator"}):"",i.timeStatus?(0,u.jsx)(c.default,{createdAt:e.createdAt,timeClass:`tb_hs_time tb-cTBfont-${i.author.variant}`}):""]})]})]}),l.O7?null:(0,u.jsx)("div",{className:"tb_hs_social_",children:(0,u.jsx)(s.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(p,{networkClass:"tb_hs_social__ico",networkId:o,iconStyle:i.icon})})})]})};var v=i(78262),_=i(3720),b=i(15537);const g=t=>{let{Post:e,CardStyle:i,ThemeStyle:s,ProductSetting:a,index:o,inView:n}=t;const d=l.MH&&i.style.ratio?i.style.ratio:100,r=!(![3,5].includes(e.type)||1!=s.autoPlay||!n),c=!l.HY||!e.hotspot;return(0,u.jsxs)("div",{className:"tb_hs_media_wrap",children:[(0,u.jsx)(b.default,{Post:e,IconClass:"tb_hs_media_icon",show:c,hideVideo:s.autoPlay}),r?(0,u.jsx)(_.A,{VideoClass:"tb_hs_video",Post:e,size:d,isCover:!0,muted:!0,autoPlay:!0,index:o,inView:n},e.id):(0,u.jsx)(v.A,{ImageClass:"tb_hs_image",Post:e,size:d,ProductSetting:a,hotspot:!0,blurBG:l.HY,index:o,inView:n},e.id)]})};var x=i(71320),f=i(92663),w=i(47713),y=i(72685);const j=t=>{let{onClickPopUpSlider:e,postSizeInPx:i,index:a,ThemeStyle:o,CardStyle:d,Post:r,ProductSetting:c,ThemeInfo:h,clickToShowPopUp:p}=t;const{networkId:v}=r,{style:_}=d,b=1!==r.type,j=(d.content.trimcontent?(0,n.Ex)(r.content.text,200):r.content.text,i<200),k=!d.content.status,S=r.isShopIcon?0==k:1!=d.content.status,C=!!r.isShopIcon&&0!=k,P=0==d.style.mode&&l.HY?"light":"dark",N=l.MH?"tb_hs_color_overlay":"tb_hs_post_overlay-"+P,$={backgroundColor:l.MH?d.style.background:""};return(0,s.useEffect)((()=>{r.isPopUp&&e(a,r)}),[a,r.isPopUp,r]),(0,u.jsx)("div",{id:`tb_hs_id-${r.id}`,className:"tb_hs_post_wrapper"+(j?" tb_hs_post_wrapper2x":""),style:{padding:_.margin/2,opacity:1,transition:"opacity .5s ease-in-out"},"tb-product":r.isShopIcon?1:r.isHotspot?2:0,"area-label":r.content.text,role:"article",children:(0,u.jsxs)("div",{id:r.id,className:"tb_hs_post_in"+(l.HY?" tb_hs_post_ani":""),onClick:p(a,r),role:"button","aria-label":"Popup",children:[b?(0,u.jsx)(g,{Post:r,CardStyle:d,ThemeStyle:o,ProductSetting:c,index:a,inView:!0},a):"",r.isHotspot?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"tb_hs_post_details",children:[(0,u.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[l.HY?(0,u.jsx)("div",{className:"tb_hs_social_",children:(0,u.jsx)(f.default,{networkClass:"tb_hs_social__ico",networkId:v,iconStyle:d.icon})}):null,C?(0,u.jsx)(w.default,{CardStyle:d,btnClass:"tb_hs_btn_wrap"}):null,S||1==r.type?(0,u.jsx)(x.default,{contentClass:"tb_hs_content",Content:r.content,CardStyle:d}):null]}),l.HY?null:(0,u.jsx)(m,{Post:r,CardStyle:d}),r.share.status?(0,u.jsx)(y.default,{Post:r,ThemeInfo:h,shareClass:"tb_hs_share_container"}):null]}),r.isHotspot?null:(0,u.jsx)("div",{className:`tb_hs_post_overlay ${N}`,style:$,children:(0,u.jsx)("div",{})})]})]})})};class k extends s.PureComponent{constructor(t){super(t),this.handleKeyPress=t=>{try{const{ThemeStyle:i}=this.props;if(1===i.slide.autoSlide){if(!["INPUT","TEXTAREA"].includes(t.target.tagName)&&"Space"===t.code){const{parentID:i}=this.props;t.preventDefault();var e=this.inputRefs[i].splide.Components.Autoplay;e.isPaused()?e.play():e.pause()}}}catch(i){}},this.requestData=()=>{const{appendData:t,preRender:e,hasMoreData:i,nextData:s,ThemeStyle:a,ThemeInfo:o,containerSize:d}=this.props;i&&s(l.HY?o.webId:o.wallId,Math.floor(Date.now()/1e3),(0,n.Ci)(d.width,a.column,310),t.networkID,t.after,e,t.heightEvent)},this.autoScrollSlider=t=>{const{ThemeStyle:e}=this.props;if(1==e.autoScrollStatus||l.HY){t.index,t.length,t._o.perPage;this.requestData()}},this.handleResize=()=>{this.setState({resizeKey:Math.random()}),this.splideRef.current&&this.splideRef.current.refresh()},this.state={parent_id:"",postData:[],loadData:!1,resizeKey:Math.random()},this.inputRefs={},this.isDragging=!1,this.splideRef=(0,s.createRef)()}componentDidMount(){setTimeout((()=>{const t=document.querySelectorAll(".splide__slide");t&&t.forEach((t=>{t.removeAttribute("aria-hidden"),t.removeAttribute("role")}))}),100);const{Post:t,loadBranding:e}=this.props;this.setState({Post:t}),window.addEventListener("keydown",this.handleKeyPress),window.addEventListener("resize",this.handleResize),e()}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress),window.removeEventListener("resize",this.handleResize)}render(){const{postData:t,completeDataObject:e,CardStyle:i,ThemeStyle:s,ProductSetting:a,ThemeInfo:d,onClickToCTA:r,parentID:c,loaderData:h,onClickPopUpSlider:p,containerSize:m,clickToShowPopUp:v}=this.props,{resizeKey:_}=this.state,b=c;var g=[];const x=s.slide.autoSlide,f=s.slide.slideDuration,w=s.row&&0!==s.row?t.length<15&&(l.aD||l.Vn)?1:s.row:1,y=(0,n.Ci)(m.width,s.column,310);for(var k=0,S=t.length;k<S;)g.push(t.slice(k,k+=w));const C=y>=S,P={type:"slide",rewind:!0,speed:1e3,interval:1===x?1e3*parseInt(f):5e3,perPage:y,perMove:1,gap:0,autoplay:1===x,padding:0,updateOnMove:!0,dragThreshold:1e3,pagination:!1,arrows:!C};return""!=c?(0,u.jsx)("div",{className:"tb_hs_post_container",children:g.length?(0,u.jsxs)(o.eB,{ref:t=>{this.splideRef=t,this.inputRefs[b]=t},hasTrack:!1,className:"tb_hs_post_slider",options:P,onMove:this.autoScrollSlider,children:[(0,u.jsx)("div",{className:"splide__track",children:(0,u.jsx)("div",{className:"splide__list",children:(s.row>1&&1!==g.length&&g.length%2!==0?g.pop():g)&&g&&g.length>0&&g.map(((t,o)=>(0,u.jsx)("div",{className:`splide__slide splide__${o}`,children:t.map(((t,l)=>{const n=e[t];return(0,u.jsx)("div",{className:"tb_hs_col_wrap","data-id":n.id,children:(0,u.jsx)(j,{Post:n,index:o,CardStyle:i,ThemeStyle:s,ProductSetting:a,ThemeInfo:d,onClickToCTA:r,onClickPopUpSlider:p,postSizeInPx:m.width/y,clickToShowPopUp:v})},l)}))},`tb_${o}_${o}`)))})}),(0,u.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,u.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,u.jsx)("div",{})}),(0,u.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt "+(h.isShowMoreLoading?"tb_a_spinner":""),onClick:l.HY?t=>this.requestData():null,role:"button","aria-label":"Go to next slide",children:(0,u.jsx)("div",{})})]})]},_):null}):null}}const S=(0,a.Ng)((t=>({loaderData:t.loaderData})),(t=>({nextData:(e,i,s,a,o,l,n,r)=>t((0,d.wF)(e,i,s,a,o,l,n,r))})))(k)},91697:(t,e,i)=>{i.d(e,{EC:()=>s,Oi:()=>o,Yo:()=>a});const s=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),a=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),o=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},61038:()=>{}}]);