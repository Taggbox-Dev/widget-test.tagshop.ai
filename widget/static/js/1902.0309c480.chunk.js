(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[203,1902,2319,2584,3694,4033,6304,6414,7775,9502,9538,9882],{44238:(t,e,i)=>{"use strict";i.d(e,{bs:()=>c});var o=i(31530),s=i(7665),a=i(83884),l=i(10753),n=i(89620);let r=[];const c=t=>{t.persist();const e=t.target,{network:i,itemId:o,themeId:s}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(s))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${o}`);t&&(t.style.display="none")}1===r.length&&d()},d=async()=>{var t;const{postData:e,wall:i}=s.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:c,Wall:u}=i,h=null===c||void 0===c?void 0:c.id,m=(a.HY,null===u||void 0===u?void 0:u.id),p=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:b,network:v,itemId:w,load:f}=p.dataset,g=document.querySelector(`img[data-item-id="${w}"]`),x=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===w)):[];if(null!==x&&void 0!==x&&x.length){var k;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(k=x[0])||void 0===k?void 0:k.postFileNew);if(!t&&g){if([2,18,3,28].includes(+v)&&"0"===f&&"34"!==b&&!p.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var o,s,a,l,n;const{UserPlan:r,Wall:c}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(o=i[0])||void 0===o?void 0:o.feedId,type:null===(s=i[0])||void 0===s?void 0:s.type,link:null===(a=i[0])||void 0===a?void 0:a.link,postFile:null===(l=i[0])||void 0===l?void 0:l.postFile,mediaFile:null===(n=i[0])||void 0===n?void 0:n.mediaFile}:{},url:null===c||void 0===c?void 0:c.url}})({wallId:m,postId:w,ownerId:h},i,x);try{const{data:e}=await(new n.A).post(a.t5,t,{headers:l.ML}),i=a.HY||a.MH?"":`https://images.${a.QR}/`;p.src="18"===v?`${i}${e.media}`:e.media}catch{p.src=o.gX}finally{_(p)}}else p.src=o.gX,_(p);r.shift(),d()}else{const t=`${o.th}/media/images/no-image.svg`;p.src=t,p.srcset=t,_(p),r.shift()}}},_=t=>t.setAttribute("data-load","1")},16414:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var o=i(82483),s=i(9916),a=i(56723);class l extends o.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:o}=this.props;return(0,a.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:(0,a.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:o||44,height:o||44,onError:e=>{const o=(0,s.Yo)(i),a="#ffffff"==o?"000":o.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${a}&color=fff&length=1`}})},Math.random())}}},43694:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var o=i(82483),s=i(56723);class a extends o.PureComponent{render(){const{Post:t,ctaClass:e,onClickToCTA:i}=this.props,{cta:o}=t,a={color:null===o||void 0===o?void 0:o.color,backgroundColor:null===o||void 0===o?void 0:o.background};return(0,s.jsxs)("div",{className:e,style:a,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),i(t),window.open(`${o.url}`,"_blank")},children:[" ",o.text]})}}const l=a},82803:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var o=i(82483),s=i(91965),a=i(99998),l=i(76467),n=i(99009),r=i(29269),c=i(56723);const d=(0,o.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,o=e.discount>0?e.discount:e.price;return(0,c.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,c.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,c.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,c.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,o]})]})})),_=t=>{let{products:e,appData:i,Post:s}=t;const[_,u]=(0,o.useState)(null),h=(0,o.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),m=(0,o.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,r.hq)({})}),[i,s]),p=(0,o.useCallback)(((t,e)=>{t.stopPropagation(),m(e),window.open(e.url,"_blank")}),[m]);return null!==h&&void 0!==h&&h.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,n.Ul)()}`,o=_===e;return(0,c.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(o?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>u(e),onMouseLeave:()=>u(null),onClick:e=>p(e,t),"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ "+(0===h.type?"tb_hotspot_ani__":""),children:e+1}),(0,a.createPortal)((0,c.jsx)(l.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,c.jsx)(d,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},u=(0,o.memo)(_),h=(0,s.Ng)((t=>({appData:t.appData})))(u)},19882:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var o=i(82483),s=i(83884),a=i(56723);const l=o.lazy((()=>i.e(8807).then(i.bind(i,88807)))),n=t=>{const{Post:e,IconClass:i,isCenter:n,hideVideo:r,show:c}=t,d=!![3,5].includes(e.type),_=7===e.network.id,u=!!(e.mediaList&&e.mediaList.length>0),h=1===e.isAudio,m=!!e.isProduct,p=(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(l,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),b=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),v=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),w=(0,a.jsx)("div",{className:"tb__icon tb-"+(s.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),g=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return c?(0,a.jsxs)(a.Fragment,{children:[n&&(_||d)?(0,a.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[d&&!_?g:"",d&&_?p:""]}):null,m||u||d?(0,a.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?f:"",u?b:"",n||!d||_||r?"":h?v:w]}):null]}):null}},7775:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var o=i(82483),s=i(99009),a=i(31530),l=i(44238),n=i(82803),r=i(56723);class c extends o.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var o;const{width:t,height:e}=await(0,s.TW)(null===i||void 0===i||null===(o=i.image)||void 0===o?void 0:o.small);this._isMounted&&this.setState({height:e,width:t})}catch(a){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:a,Post:l}=t;this.state={height:(null===a||void 0===a?void 0:a.height)||(null===l||void 0===l||null===(e=l.media)||void 0===e?void 0:e.height)||0,width:(null===a||void 0===a?void 0:a.width)||(null===l||void 0===l||null===(i=l.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=o.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,o;const{height:s,width:c}=this.state;if(!s||!c)return null;const{ImageClass:d,Post:_,hotspot:u,size:h,blurBG:m,ProductSetting:p,mediaOnly:b,inView:v,multiKey:w}=this.props,{id:f,link:g,products:x}=_,k=b||(null===_||void 0===_?void 0:_.media),{currentWidth:j,currentHeight:y}=this.state,N=h||100*s/c,C={paddingBottom:1===N?null:`${N}%`},I={backgroundImage:v?`url(${null===k||void 0===k||null===(t=k.image)||void 0===t?void 0:t.small})`:null},T=c>s?"100%":c/s*100+"%",$=c>s?s/c*100+"%":"100%",P=_.isProduct&&u,S={width:P&&h?T:null,height:P&&h?$:null};return(0,r.jsxs)("div",{className:`${d}_wrap_`,style:C,ref:this.mediaRef,children:[P&&m?(0,r.jsx)("div",{className:"tb_blur_bg_",style:I}):null,(0,r.jsxs)("div",{className:`${d}_wrap_in`,style:S,children:[P?(0,r.jsx)(n.A,{products:this.props.multiPic?_.mediaList[w].product:x,ProductSetting:p,hotspot:_.hotspot,dataPost:_}):null,(0,r.jsx)("img",{className:`${d} tb_media-${f}`,src:null===k||void 0===k||null===(e=k.image)||void 0===e?void 0:e.small,srcSet:`${null===k||void 0===k||null===(i=k.image)||void 0===i?void 0:i.small} 1x, ${null===k||void 0===k||null===(o=k.image)||void 0===o?void 0:o.large} 2x`,sizes:`${j}px`,loading:v?"eager":"lazy",decoding:"async",fetchPriority:v?"high":"low","data-id":f,height:y,width:j,"data-height":s,"data-width":c,"data-link":g,onLoad:this.onLoad,onError:t=>{t.target.src=`${a.th}/media/error/no-image.svg`,t.target.srcset=`${a.th}/media/error/no-image.svg`,(0,l.bs)(t)},alt:null===k||void 0===k?void 0:k.title,title:null===k||void 0===k?void 0:k.title},`${f}-${s}-${c}-${v}`)]})]})}}},33689:(t,e,i)=>{"use strict";i.d(e,{A:()=>d});var o=i(82483),s=i(48819),a=i.n(s),l=i(83884),n=i(99009),r=i(56723);class c extends o.Component{constructor(t){super(t),this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:o}=await(0,n.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small);this._isMounted&&this.setState({calcHeight:o,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0},this.mediaRef=o.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,this.mediaSizeCalc()}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,o;const{calcHeight:s,calcWidth:n}=this.state;if(!s||!n)return null;const{VideoClass:c,Post:d,controls:_,autoPlay:u,handleVideoEnded:h,muted:m,intervalTime:p,size:b,inView:v}=this.props,{media:w,id:f,link:g,networkId:x}=d,k=1===b,j=null!==w&&void 0!==w&&w.height?null===w||void 0===w?void 0:w.height:s,y=null!==w&&void 0!==w&&w.width?null===w||void 0===w?void 0:w.width:n,N={paddingBottom:`${k?null:b||100*j/y}%`};return(0,r.jsx)("div",{className:`${c}_wrap_`,style:N,ref:this.mediaRef,children:(0,r.jsx)(a(),{className:`${c} tb_media-${f}`,url:v?null===w||void 0===w||null===(t=w.video)||void 0===t?void 0:t.full:null===w||void 0===w||null===(e=w.image)||void 0===e?void 0:e.small,"data-height":s,"data-width":n,"data-type":"video","data-network":x,"data-link":g,"data-item-id":f,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":y,"data-height":j,poster:null===w||void 0===w||null===(i=w.image)||void 0===i?void 0:i.small}},file:{attributes:{preload:"metadata",poster:null===w||void 0===w||null===(o=w.image)||void 0===o?void 0:o.small}}},loop:!(l.aD&&!l.HY&&null!==d&&void 0!==d&&d.loopStop)&&u,onError:t=>{k&&h&&setTimeout((()=>{this._isMounted&&h&&h()}),1e3*p),this.setVideoLoaded(!1)},autoPlay:v&&u?1:0,muted:m,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!l.HY),playing:v&&u?1:0,controls:_||!1,onEnded:h,title:null===w||void 0===w?void 0:w.title},`${f}-${s}-${n}-${v}`)})}}const d=(0,o.memo)(c)},70203:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var o=i(82483),s=i(9916),a=i(56723);const l=o.lazy((()=>i.e(8807).then(i.bind(i,88807))));class n extends o.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:i,isPopUp:n}=this.props;return(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(t)?(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(l,{networkId:t,networkClass:e})}):(0,a.jsx)("div",{className:`${e} tb__icon tb-${(0,s.EC)(t)}`,"aria-label":`post network ${(0,s.Oi)(t)}`,children:(0,a.jsx)("div",{})})}}},49502:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var o=i(82483),s=i(83884),a=i(99009),l=i(56723);class n extends o.PureComponent{constructor(t){super(t),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,o;const t=(null===(i=this.contentRef)||void 0===i||null===(o=i.current)||void 0===o?void 0:o.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:o,maxLines:n,isReadMore:r}=this.props,c=t.content.trimcontent&&!s.HY?t.content.trimcontent:0,d={WebkitLineClamp:n,textAlign:t.style.textAlign},_=(0,a.w)(i),u=`${e} ${r?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${t.style.variant}`;return(0,l.jsxs)("div",{className:u,ref:this.contentRef,style:d,children:[o?(0,l.jsx)("div",{className:"tb_bold_txt__",children:o}):null,_]})}}},92977:(t,e,i)=>{"use strict";i.d(e,{A:()=>n});var o=i(82483),s=i(56723);const a=t=>{let{networkId:e}=t;const{className:i,color:o}={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,s.jsx)("div",{className:i,style:{color:o},"tb-network":e,children:(0,s.jsx)("div",{})})},l=t=>{let{ThemeID:e,networkId:i}=t;const{className:o,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,s.jsx)("div",{className:o,style:{color:a},"tb-network":i})};class n extends o.PureComponent{render(){const{rating:t,networkId:e,ThemeID:i}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,o)=>i?(0,s.jsx)(l,{ThemeID:i,networkId:e},o):(0,s.jsx)(a,{networkId:e},o))):null})}}},26304:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});i(82483);var o=i(56723);const s=t=>{const{sepClass:e}=t;return(0,o.jsx)("div",{className:e,children:"   "})}},2319:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var o=i(82483),s=i(29269),a=i(56723);class l extends o.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:i,ThemeInfo:o}=this.props;e.stopPropagation(),(0,s.hq)({type:2,action:2,wall:o.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:o.ownerId}),(0,s.x9)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:i,twitter:o,linkedin:s}=null===e||void 0===e?void 0:e.share,l=t=>{let{shareOn:e,icon:i}=t;return(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,a.jsx)("div",{})})})};return(0,a.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,a.jsx)(l,{shareOn:i,icon:"facebook"}):"",o?(0,a.jsx)(l,{shareOn:o,icon:"twitter"}):"",s?(0,a.jsx)(l,{shareOn:s,icon:"linkedin"}):""]})]})}}},99538:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var o=i(82483),s=i(99009),a=i(56723);const l=t=>{const{createdAt:e,timeClass:i}=t;return(0,a.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,s.fF)(e)}`,children:(0,s.fF)(e)})},n=(0,o.memo)(l)},57370:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>N});i(82483);var o=i(16414),s=i(99538),a=i(70203),l=i(26304),n=i(56723);const r=t=>{let{author:e,personalization:i,postTime:r,network:c,ThemeRule:d}=t;const _=e.username&&e.username.length>0?`@${e.username}`:"",u=!(!i.postAuthor||e.isInstaUser),h=!(!i.postAuthor||!i.postTime||e.isInstaUser);return(0,n.jsxs)("div",{className:"tb_wt_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,n.jsxs)("div",{className:"tb_wt_author",children:[u?(0,n.jsx)(o.default,{author:e,network:c,authorClass:"tb_wt_author_profile"}):"",(0,n.jsxs)("div",{className:"tb_wt_author_info",children:[u?(0,n.jsx)("div",{className:"tb_wt_authorname",children:e.name}):"",(0,n.jsxs)("div",{className:"tb_wt_post_info",children:[u?(0,n.jsx)("div",{className:"tb_wt_username",children:_}):"",h?(0,n.jsx)(l.default,{sepClass:"tb_wt_seprator"}):"",i.postTime?(0,n.jsx)(s.default,{postTime:r,timeClass:`tb_wt_time tb-cTBfont-${d.font_varient}`,authorColor:d.authorColor}):""]})]})]}),(0,n.jsx)("div",{className:"tb_wt_social_",children:(0,n.jsx)(a.default,{networkClass:"tb_wt_social_ico",network:c,isDefault:1===d.iconType,ThemeRule:d})})]})};var c=i(83884),d=i(19882),_=i(7775),u=i(33689);const h=t=>{let{itemData:e,wallID:i,ownerId:o,wall:s}=t;const a=!(![3,4].includes(e.type)||1!=s.ThemeRule.autoPlay),l=c.MH&&s.ThemeRule.aspectImageRatio||!1;return(0,n.jsxs)("div",{className:"tb_wt_media_wrap",role:"button",tabIndex:"0","aria-label":"Post Pop up media wrapper",children:[(0,n.jsx)(d.default,{itemData:e,IconClass:"tb_wt_media_icon",show:!0}),a?(0,n.jsx)(u.A,{VideoClass:"tb_wt_video",data:e,wallID:i,themeID:null===s||void 0===s?void 0:s.ThemeInfo.id,ownerId:o,size:l,isCover:!0,controls:!1,autoPlay:!1,muted:!0,observer:!0}):(0,n.jsx)(_.default,{ImageClass:"tb_wt_image",data:e,wallID:i,themeID:null===s||void 0===s?void 0:s.ThemeInfo.id,ownerId:o,size:l,ThemeRule:s.ThemeRule,observer:!0})]})};var m=i(49502),p=i(43694),b=i(92977);const v=t=>{let{share:e,shareClass:i}=t;const o=(t,e)=>{t.stopPropagation(),e()};return(0,n.jsx)("div",{className:i,children:(0,n.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>o(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>o(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>o(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var w=i(99009);const f=(t,e,i)=>1===t?`https://twitter.com/intent/favorite?tweet_id=${(0,w.Ph)(e)}`:i,g=(t,e,i)=>1===t?`https://twitter.com/intent/tweet?in_reply_to=${(0,w.Ph)(e)}`:i,x=t=>{let{itemData:e,ThemeRule:i}=t;const o=e.network.id,s=3===o||10===o?"like":"heart-outline";return(0,n.jsx)(n.Fragment,{children:12!==o&&15!==o&&20!==o&&21!==o&&29!==o?(0,n.jsxs)("div",{className:"tb_wt_social_action__",role:"navigation",children:[(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:f(o,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":`Post Like Url ${f(o,e.postId,e.link)}`,title:"Favorite",children:[(0,n.jsx)("div",{className:`tb_wt_social_action_ico__ tb__icon tb-${s}`,children:" "}),e.like_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:g(o,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":`Post comment Url ${g(o,e.postId,e.link)}`,title:"Comment",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),1===o?(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsx)("a",{href:`https://twitter.com/intent/retweet?tweet_id=${(0,w.Ph)(e.postId)}`,target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":`Post comment Url https://twitter.com/intent/retweet?tweet_id=${(0,w.Ph)(e.postId)}`,title:"Tweet",children:(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})};var k=i(24366),j=i(2319);const y=t=>{let{itemData:e,personalization:i,ThemeRule:o,wallID:s,clickToShowPopUp:a,itemIndex:l,ownerId:d,onClickToCTA:_,wall:u,ThemeInfo:w}=t;const f=w.id,g=!([53,57,85].includes(f)&&c.MH||1===e.type),y=e.rating>0,N=e.rating>0?"tb_wt_rating_content":"tb_wt_content",C=1===e.type&&i.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",I=i.trimcontent?(0,k.Ex)(e.content,200):e.content;return(0,n.jsx)("div",{id:`tb-wt-post-${e.id}`,className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":e.isShopIcon?1:e.isHotspot?2:0,role:"article","aria-label":`Post ${parseInt(l)+1},${I}`,tabIndex:"0",children:(0,n.jsxs)("div",{className:"tb_wt_post_in",onClick:a(l,e),role:"button","aria-label":"Popup",tabIndex:"0",children:[(0,n.jsx)(r,{ownerId:d,postTime:e.createdAt,author:e.author,network:e.network,font:o,personalization:i,ThemeRule:o,mediaType:g}),(0,n.jsxs)("div",{className:"tb_wt_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[g?(0,n.jsx)(h,{itemData:e,wallID:s,ownerId:d,wall:u},`img${l}_${e.id}`):"",y?(0,n.jsxs)("div",{className:"tb_wt_rating__",children:[(0,n.jsx)(b.A,{rating:e.rating,network:e.network})," "]}):""]}),(0,n.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[e.share.status?(0,n.jsx)(j.default,{share:e.share,shareClass:"tb_wt_share_container",ThemeInfo:w,Post:e}):"",e.ctaStatus?(0,n.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,n.jsx)(p.default,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",o.hideContent&&1!=e.type?"":(0,n.jsx)(m.default,{contentClass:`${N} ${C}`,item:e,content:I,font:o,ThemeRule:o,personalization:i,contentTitle:e.contentTitle}),(0,n.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!o.socialAction?{justifyContent:"flex-end"}:{},children:[o.socialAction?(0,n.jsx)(x,{itemData:e,ThemeRule:o}):"",e.share.status?(0,n.jsx)(v,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},N=t=>{let{postData:e,completeDataObject:i,adjustWidth:o,CardStyle:s,ThemeStyle:a,ProductSetting:l,ThemeInfo:r,clickToShowPopUp:c,onClickToCTA:d}=t;return(0,n.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const _=i[t];return(0,n.jsx)(y,{ownerId:r.ownerId,itemData:_,itemIndex:e,adjustWidth:o,CardStyle:s,ThemeStyle:a,ProductSetting:l,wallID:r.wallId,clickToShowPopUp:c,onClickToCTA:d},`wdt_crd_${e}_${t.id}`)}))})}},9916:(t,e,i)=>{"use strict";i.d(e,{EC:()=>o,Oi:()=>a,Yo:()=>s});const o=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),s=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),a=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},59993:(t,e,i)=>{"use strict";var o=i(85730);function s(){}function a(){}a.resetWarningCache=s,t.exports=function(){function t(t,e,i,s,a,l){if(l!==o){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:s};return i.PropTypes=i,i}},16405:(t,e,i)=>{t.exports=i(59993)()},85730:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=1902.0309c480.chunk.js.map