"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[203,2319,2584,4033,4412,6304,6414,7775,9502,9538,9882],{44238:(t,e,i)=>{i.d(e,{bs:()=>d});var s=i(31530),o=i(7665),a=i(83884),n=i(10753),l=i(89620);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:u}=i,h=null===d||void 0===d?void 0:d.id,m=(a.HY,null===u||void 0===u?void 0:u.id),_=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:v,network:b,itemId:g,load:f}=_.dataset,w=document.querySelector(`img[data-item-id="${g}"]`),x=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==x&&void 0!==x&&x.length){var k;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(k=x[0])||void 0===k?void 0:k.postFileNew);if(!t&&w){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==v&&!_.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,o,a,n,l;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(a=i[0])||void 0===a?void 0:a.link,postFile:null===(n=i[0])||void 0===n?void 0:n.postFile,mediaFile:null===(l=i[0])||void 0===l?void 0:l.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:m,postId:g,ownerId:h},i,x);try{const{data:e}=await(new l.A).post(a.t5,t,{headers:n.ML}),i=a.HY||a.MH?"":`https://images.${a.QR}/`;_.src="18"===b?`${i}${e.media}`:e.media}catch{_.src=s.gX}finally{p(_)}}else _.src=s.gX,p(_);r.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;_.src=t,_.srcset=t,p(_),r.shift()}}},p=t=>t.setAttribute("data-load","1")},16414:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var s=i(82483),o=i(9916),a=i(56723);class n extends s.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:s}=this.props;return(0,a.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:(0,a.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:s||44,height:s||44,onError:e=>{const s=(0,o.Yo)(i),a="#ffffff"==s?"000":s.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${a}&color=fff&length=1`}})},Math.random())}}},82803:(t,e,i)=>{i.d(e,{A:()=>h});var s=i(82483),o=i(91965),a=i(99998),n=i(76467),l=i(99009),r=i(29269),d=i(56723);const c=(0,s.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,s=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,s]})]})})),p=t=>{let{products:e,appData:i,Post:o}=t;const[p,u]=(0,s.useState)(null),h=(0,s.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),m=(0,s.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,r.hq)({})}),[i,o]),_=(0,s.useCallback)(((t,e)=>{t.stopPropagation(),m(e),window.open(e.url,"_blank")}),[m]);return null!==h&&void 0!==h&&h.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,l.Ul)()}`,s=p===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>u(e),onMouseLeave:()=>u(null),onClick:e=>_(e,t),"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ "+(0===h.type?"tb_hotspot_ani__":""),children:e+1}),(0,a.createPortal)((0,d.jsx)(n.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,d.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},u=(0,s.memo)(p),h=(0,o.Ng)((t=>({appData:t.appData})))(u)},19882:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(82483),o=i(83884),a=i(56723);const n=s.lazy((()=>i.e(8807).then(i.bind(i,88807)))),l=t=>{const{Post:e,IconClass:i,isCenter:l,hideVideo:r,show:d}=t,c=!![3,5].includes(e.type),p=7===e.network.id,u=!!(e.mediaList&&e.mediaList.length>0),h=1===e.isAudio,m=!!e.isProduct,_=(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(n,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),v=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,a.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return d?(0,a.jsxs)(a.Fragment,{children:[l&&(p||c)?(0,a.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!p?w:"",c&&p?_:""]}):null,m||u||c?(0,a.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?f:"",u?v:"",l||!c||p||r?"":h?b:g]}):null]}):null}},7775:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var s=i(82483),o=i(99009),a=i(31530),n=i(44238),l=i(82803),r=i(56723);class d extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(a){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:a,Post:n}=t;this.state={height:(null===a||void 0===a?void 0:a.height)||(null===n||void 0===n||null===(e=n.media)||void 0===e?void 0:e.height)||0,width:(null===a||void 0===a?void 0:a.width)||(null===n||void 0===n||null===(i=n.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,s;const{height:o,width:d}=this.state;if(!o||!d)return null;const{ImageClass:c,Post:p,hotspot:u,size:h,blurBG:m,ProductSetting:_,mediaOnly:v,inView:b,multiKey:g}=this.props,{id:f,link:w,products:x}=p,k=v||(null===p||void 0===p?void 0:p.media),{currentWidth:j,currentHeight:I}=this.state,C=h||100*o/d,y={paddingBottom:1===C?null:`${C}%`},P={backgroundImage:b?`url(${null===k||void 0===k||null===(t=k.image)||void 0===t?void 0:t.small})`:null},$=d>o?"100%":d/o*100+"%",N=d>o?o/d*100+"%":"100%",D=p.isProduct&&u,S={width:D&&h?$:null,height:D&&h?N:null};return(0,r.jsxs)("div",{className:`${c}_wrap_`,style:y,ref:this.mediaRef,children:[D&&m?(0,r.jsx)("div",{className:"tb_blur_bg_",style:P}):null,(0,r.jsxs)("div",{className:`${c}_wrap_in`,style:S,children:[D?(0,r.jsx)(l.A,{products:this.props.multiPic?p.mediaList[g].product:x,ProductSetting:_,hotspot:p.hotspot,dataPost:p}):null,(0,r.jsx)("img",{className:`${c} tb_media-${f}`,src:null===k||void 0===k||null===(e=k.image)||void 0===e?void 0:e.small,srcSet:`${null===k||void 0===k||null===(i=k.image)||void 0===i?void 0:i.small} 1x, ${null===k||void 0===k||null===(s=k.image)||void 0===s?void 0:s.large} 2x`,sizes:`${j}px`,loading:b?"eager":"lazy",decoding:"async",fetchPriority:b?"high":"low","data-id":f,height:I,width:j,"data-height":o,"data-width":d,"data-link":w,onLoad:this.onLoad,onError:t=>{t.target.src=`${a.th}/media/error/no-image.svg`,t.target.srcset=`${a.th}/media/error/no-image.svg`,(0,n.bs)(t)},alt:null===k||void 0===k?void 0:k.title,title:null===k||void 0===k?void 0:k.title},`${f}-${o}-${d}-${b}`)]})]})}}},70203:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(82483),o=i(9916),a=i(56723);const n=s.lazy((()=>i.e(8807).then(i.bind(i,88807))));class l extends s.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:i,isPopUp:l}=this.props;return(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(t)?(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(n,{networkId:t,networkClass:e})}):(0,a.jsx)("div",{className:`${e} tb__icon tb-${(0,o.EC)(t)}`,"aria-label":`post network ${(0,o.Oi)(t)}`,children:(0,a.jsx)("div",{})})}}},49502:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(82483),o=i(83884),a=i(99009),n=i(56723);class l extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,s;const t=(null===(i=this.contentRef)||void 0===i||null===(s=i.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:s,maxLines:l,isReadMore:r}=this.props,d=t.content.trimcontent&&!o.HY?t.content.trimcontent:0,c={WebkitLineClamp:l,textAlign:t.style.textAlign},p=(0,a.w)(i),u=`${e} ${r?"":""+(d?` tb_content_line-${d}`:"")} tb-cTBfont-${t.style.variant}`;return(0,n.jsxs)("div",{className:u,ref:this.contentRef,style:c,children:[s?(0,n.jsx)("div",{className:"tb_bold_txt__",children:s}):null,p]})}}},26304:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});i(82483);var s=i(56723);const o=t=>{const{sepClass:e}=t;return(0,s.jsx)("div",{className:e,children:"   "})}},2319:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var s=i(82483),o=i(29269),a=i(56723);class n extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:i,ThemeInfo:s}=this.props;e.stopPropagation(),(0,o.hq)({type:2,action:2,wall:s.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:s.ownerId}),(0,o.x9)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:i,twitter:s,linkedin:o}=null===e||void 0===e?void 0:e.share,n=t=>{let{shareOn:e,icon:i}=t;return(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,a.jsx)("div",{})})})};return(0,a.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,a.jsx)(n,{shareOn:i,icon:"facebook"}):"",s?(0,a.jsx)(n,{shareOn:s,icon:"twitter"}):"",o?(0,a.jsx)(n,{shareOn:o,icon:"linkedin"}):""]})]})}}},99538:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(82483),o=i(99009),a=i(56723);const n=t=>{const{createdAt:e,timeClass:i}=t;return(0,a.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,o.fF)(e)}`,children:(0,o.fF)(e)})},l=(0,s.memo)(n)},94412:(t,e,i)=>{i.r(e),i.d(e,{default:()=>x});var s=i(82483),o=i(89871),a=i.n(o),n=i(16414),l=i(99538),r=i(26304),d=i(56723);const c=t=>{let{author:e,personalization:i,postTime:s,network:o,ThemeRule:a}=t;const c=e.username&&e.username.length>0?`@${e.username}`:"",p=!(!i.postAuthor||e.isInstaUser),u=!(!i.postAuthor||!i.postTime||e.isInstaUser);return(0,d.jsx)("div",{className:"tb_gp_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:(0,d.jsxs)("div",{className:"tb_gp_author",children:[p?(0,d.jsx)(n.default,{author:e,authorClass:"tb_gp_author_profile",network:o}):"",(0,d.jsxs)("div",{className:"tb_gp_author_info",children:[p?(0,d.jsx)("div",{className:"tb_gp_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_gp_post_info"+(u?"":" tb_gp_post_info__"),children:[p?(0,d.jsx)("div",{className:"tb_gp_username",children:c}):"",u?(0,d.jsx)(r.default,{sepClass:"tb_gp_seprator"}):"",i.postTime?(0,d.jsx)(l.default,{postTime:s,timeClass:`tb_gp_time tb-cTBfont-${a.font_varient}`,authorColor:a.authorColor}):""]})]})]})})};var p=i(2319),u=i(19882),h=i(7775);class m extends s.PureComponent{render(){const{itemData:t,wallID:e,themeID:i,ownerId:s}=this.props;return(0,d.jsxs)("div",{className:"tb_gp_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[(0,d.jsx)(u.default,{itemData:t,IconClass:"tb_gp_media_icon",position:1,show:!0,observer:!0}),(0,d.jsx)(h.default,{ImageClass:"tb_gp_image",data:t,wallID:e,themeID:i,ownerId:s,size:100,observer:!0})]})}}var _=i(49502),v=i(70203),b=i(24366),g=i(83884);class f extends s.PureComponent{constructor(t){super(t),this.cardSize=s.createRef()}componentDidMount(){const{itemData:t,itemIndex:e,onClickPopUpSlider:i}=this.props,s=document.querySelector(".tb_gp_post_container");setTimeout((()=>{var t,e,i,o;(null===this||void 0===this||null===(t=this.cardSize)||void 0===t||null===(e=t.current)||void 0===e?void 0:e.offsetWidth)<250&&s.classList.add("tb_gp_post_wrapper2x"),(null===this||void 0===this||null===(i=this.cardSize)||void 0===i||null===(o=i.current)||void 0===o?void 0:o.offsetWidth)<120&&s.classList.add("tb_gp_post_wrapper1x"),g.Qy&&(0,b._7)(this.cardSize)}),100),t.isPopUp&&i(e,t)}render(){const{itemData:t,personalization:e,adjustWidth:i,ThemeRule:s,clickToShowPopUp:o,itemIndex:a,wallID:n,ownerId:l}=this.props,r={width:`${i}%`,padding:e.padding/2},u=1!==t.type,h=7===t.network.id,b=0==s.postHover&&g.HY?"light":"dark",f=g.MH?"tb_gp_color_overlay":"tb_gp_post_overlay-"+b,w={backgroundColor:g.MH?s.cardColor:""};return(0,d.jsx)("div",{id:`tb-gp-post-${t.id}`,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,className:"tb_gp_post_wrapper",style:r,"tb-network":t.network.id,"tb-product":t.isShopIcon?1:t.isHotspot?2:0,tabIndex:"0",role:"article","aria-label":`Post ${parseInt(a)+1},${t.content}`,ref:this.cardSize,children:(0,d.jsx)("div",{className:"tb_gp_post_in",onClick:o(a,t),role:"button","aria-label":"Popup",tabIndex:"0",children:(0,d.jsxs)("div",{className:"tb_gp_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[t.share.status?(0,d.jsx)(p.default,{share:t.share,shareClass:"tb_gp_share_container",item:t,wallID:n,ownerId:l}):null,u?(0,d.jsx)(m,{itemData:t,wallID:n,themeID:e.widgetTheme,ownerId:l},`img_gly_${t.id}`):"",h?"":(0,d.jsx)("div",{className:"tb_gp_contant_",children:(0,d.jsxs)("div",{className:"tb_gp_contant__in",children:[(0,d.jsxs)("div",{className:"tb_gp_content__",children:[(0,d.jsx)(c,{adjustWidth:i,postTime:t.createdAt,network:t.network,ownerId:l,author:t.author,font:s,personalization:e,ThemeRule:s}),s.hideContent&&1!=t.type?"":(0,d.jsx)(_.default,{item:t,contentClass:"tb_gp_content",content:t.content,font:s,ThemeRule:s,personalization:e,contentTitle:t.contentTitle})]}),(0,d.jsx)("div",{className:`tb_gp_post_overlay ${f}`,style:w,children:(0,d.jsx)("div",{})})]})}),(0,d.jsx)("div",{className:"tb_gp_social_",children:h?"":(0,d.jsx)(v.default,{networkClass:"tb_gp_social__ico",network:t.network,isDefault:1===s.iconType,ThemeRule:s})})]})})})}}class w extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth,containerWidth:0,loadData:0},this.calculationData=(t,e,i,s)=>t>s&&t>s+i?{totalPostBestFit:s+i,isLastRow:!0}:{totalPostBestFit:s,isLastRow:!1}}componentDidMount(){const{postData:t,renderId:e}=this.props;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}UNSAFE_componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1})}render(){const{postData:t,completeDataObject:e,adjustWidth:i,ThemeStyle:s,ThemeInfo:o,clickToShowPopUp:n,cardNumber:l,onClickToCTA:r,onClickPopUpSlider:c}=this.props,{windowWidth:p,loadData:u}=this.state;var h={totalPostBestFit:0,isLastRow:!1};let m=0===s.column.desktop?Math.trunc(l)>5?5:Math.trunc(l):s.column.desktop;if(t.length>parseInt(l)){let e=parseInt(l);4===m?e=9:2===m?e=3:3===m?e=6:5===m&&(e=12),p<768&&(e=parseInt(l));let i=t.length/parseInt(e);h=parseInt(e)*parseInt(i),h=this.calculationData(t.length,e,m,h)}let _=0===s.column.desktop?Math.trunc(l)>5?5:Math.trunc(l)+1:s.column.desktop+1;return(0,d.jsx)(a(),{className:"tb_gp_post_container",tabIndex:"0","aria-label":`There are ${t&&t.length>0?t.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_gp_post_wrapper",resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:u?t&&t.length>0&&t.map(((t,s)=>{const a=e[t];let l=i;if(3===m&&_===s+1){l=2*i,_=_+2*m}else if(2===m&&_===s+1){l=2*i,_=_+(m+1)}else if(4===m&&_===s+1){l=2*i,_=_+(2*m+1)}else if(5===m&&_===s+1){l=2*i,_=_+(2*m+2)}return parseInt(h.totalPostBestFit)>=parseInt(s+1)?(0,d.jsx)(f,{ownerId:o.ownerId,itemData:a,itemIndex:s,adjustWidth:l,clickToShowPopUp:n,onClickToCTA:r,onClickPopUpSlider:c},s):0===parseInt(h.totalPostBestFit)?(0,d.jsx)(f,{ownerId:o.ownerId,itemData:a,itemIndex:s,adjustWidth:l,clickToShowPopUp:n,onClickToCTA:r,onClickPopUpSlider:c},`galry_${a.id}`):null})):null})}}const x=w},9916:(t,e,i)=>{i.d(e,{EC:()=>s,Oi:()=>a,Yo:()=>o});const s=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),o=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),a=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")}}]);
//# sourceMappingURL=4412.8893c30a.chunk.js.map