(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1500,2691,2887,4935,5115,5268,7316,7900,7955,9782,9880],{70501:(t,e,s)=>{"use strict";s.d(e,{bs:()=>d});var i=s(8159),o=s(56364),a=s(40329),n=s(32866),l=s(98409);let r=[];const d=t=>{t.persist();const e=t.target,{network:s,itemId:i,themeId:o}=e.dataset;if(1!=s||[3,4,16,47,50,55,60].includes(o))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${i}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:s}=o.A.getState().appData;if(!s||!Object.keys(s).length||!r.length)return;const{User:d,Wall:h}=s,p=null===d||void 0===d?void 0:d.id,m=(a.HY,null===h||void 0===h?void 0:h.id),_=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:b,network:v,itemId:g,load:f}=_.dataset,w=document.querySelector(`img[data-item-id="${g}"]`),x=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==x&&void 0!==x&&x.length){var k;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(k=x[0])||void 0===k?void 0:k.postFileNew);if(!t&&w){if([2,18,3,28].includes(+v)&&"0"===f&&"34"!==b&&!_.src.includes("cloud.taggbox.com")){const t=((t,e,s)=>{var i,o,a,n,l;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==s&&void 0!==s&&s.length?{feedId:null===(i=s[0])||void 0===i?void 0:i.feedId,type:null===(o=s[0])||void 0===o?void 0:o.type,link:null===(a=s[0])||void 0===a?void 0:a.link,postFile:null===(n=s[0])||void 0===n?void 0:n.postFile,mediaFile:null===(l=s[0])||void 0===l?void 0:l.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:m,postId:g,ownerId:p},s,x);try{const{data:e}=await(new l.A).post(a.t5,t,{headers:n.ML}),s=a.HY||a.MH?"":`https://images.${a.QR}/`;_.src="18"===v?`${s}${e.media}`:e.media}catch{_.src=i.gX}finally{u(_)}}else _.src=i.gX,u(_);r.shift(),c()}else{const t=`${i.th}/media/images/no-image.svg`;_.src=t,_.srcset=t,u(_),r.shift()}}},u=t=>t.setAttribute("data-load","1")},94935:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(88094),o=s(96913),a=s(17524),n=s(15678);class l extends i.PureComponent{render(){const{author:t,authorClass:e,networkId:s,size:i}=this.props;return(0,n.jsx)("div",{className:e,style:{overflow:4==s?"visible":""},children:(0,n.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:(0,a.Ay)(t.name),width:i||44,height:i||44,onError:e=>{const i=(0,o.Yo)(s),a="#ffffff"==i?"000":i.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${a}&color=fff&length=1`}})},Math.random())}}},1111:(t,e,s)=>{"use strict";s.d(e,{A:()=>p});var i=s(88094),o=s(83546),a=s(83775),n=s(24076),l=s(19066),r=s(42682),d=s(15678);const c=(0,i.memo)((t=>{let{item:e}=t;const s=e.discount>0&&e.discount!==e.price,i=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),s&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,i]})]})})),u=t=>{let{products:e,appData:s,Post:o}=t;const[u,h]=(0,i.useState)(null),p=(0,i.useMemo)((()=>{var t,e;return(null===s||void 0===s||null===(t=s.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[s]),m=(0,i.useCallback)((t=>{null!==s&&void 0!==s&&s.wall&&(0,r.hq)({})}),[s,o]),_=(0,i.useCallback)(((t,e)=>{t.stopPropagation(),m(e),window.open(e.url,"_blank")}),[m]);return null!==p&&void 0!==p&&p.status?e.map(((t,e)=>{const s=`hotspot-${t.id}-${(0,l.Ul)()}`,i=u===e;return(0,d.jsxs)("div",{id:s,className:"tb_hotspot_dot"+(i?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:e=>_(e,t),"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ "+(0===p.type?"tb_hotspot_ani__":""),children:e+1}),(0,a.createPortal)((0,d.jsx)(n.m_,{className:"tb_pro_tooltip",anchorSelect:`#${s}`,clickable:!0,children:(0,d.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,i.memo)(u),p=(0,o.Ng)((t=>({appData:t.appData})))(h)},17900:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(88094),o=s(40329),a=s(15678);const n=i.lazy((()=>s.e(6300).then(s.bind(s,36300)))),l=t=>{const{Post:e,IconClass:s,isCenter:l,hideVideo:r,show:d}=t,c=!![3,5].includes(e.type),u=7===e.network.id,h=!!(e.mediaList&&e.mediaList.length>0),p=1===e.isAudio,m=!!e.isProduct,_=(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(n,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),b=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),v=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,a.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return d?(0,a.jsxs)(a.Fragment,{children:[l&&(u||c)?(0,a.jsxs)("div",{className:`${s} tb__media_ico_c`,children:[c&&!u?w:"",c&&u?_:""]}):null,m||h||c?(0,a.jsxs)("div",{className:`${s} tb__media_ico_`,children:[m?f:"",h?b:"",l||!c||u||r?"":p?v:g]}):null]}):null}},49782:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var i=s(88094),o=s(19066),a=s(8159),n=s(17524),l=s(70501),r=s(1111),d=s(15678);class c extends i.PureComponent{constructor(t){var e,s;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,s=e||t.media;if((null===s||void 0===s||!s.height)&&(null===s||void 0===s||!s.width))try{var i;const{width:t,height:e}=await(0,o.TW)(null===s||void 0===s||null===(i=s.image)||void 0===i?void 0:i.small);this._isMounted&&this.setState({height:e,width:t})}catch(a){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:a,Post:n}=t;this.state={isVisible:!this.props.observer,height:(null===a||void 0===a?void 0:a.height)||(null===n||void 0===n||null===(e=n.media)||void 0===e?void 0:e.height)||0,width:(null===a||void 0===a?void 0:a.width)||(null===n||void 0===n||null===(s=n.media)||void 0===s?void 0:s.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=i.createRef(),this.observer=null}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()})),this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:!0}),this.observer.disconnect())}),{threshold:.01}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect()}render(){var t,e,s,i;const{ImageClass:o,Post:c,hotspot:u,size:h,blurBG:p,ProductSetting:m,mediaOnly:_}=this.props,{id:b,link:v,products:g}=c,f=_||(null===c||void 0===c?void 0:c.media),{isVisible:w,height:x,width:k,currentWidth:j,currentHeight:I}=this.state,y=h||100*x/k,C={paddingBottom:1===y?null:`${y}%`},N={backgroundImage:w?`url(${null===f||void 0===f||null===(t=f.image)||void 0===t?void 0:t.small})`:null},P=k>x?"100%":k/x*100+"%",D=k>x?x/k*100+"%":"100%",S=c.isProduct&&u,$={width:S&&h?P:null,height:S&&h?D:null};return(0,d.jsxs)("div",{className:`${o}_wrap_`,style:C,ref:this.mediaRef,children:[S&&p?(0,d.jsx)("div",{className:"tb_blur_bg_",style:N}):null,(0,d.jsxs)("div",{className:`${o}_wrap_in`,style:$,children:[S?(0,d.jsx)(r.A,{products:g,ProductSetting:m,hotspot:c.hotspot,dataPost:c}):null,w?(0,d.jsx)("img",{className:`${o} tb_media-${b}`,src:null===f||void 0===f||null===(e=f.image)||void 0===e?void 0:e.small,srcSet:`${null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.small} 1x, ${null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.large} 2x`,sizes:`${j}px`,loading:w?"eager":"lazy",decoding:"async",fetchPriority:w?"high":"low","data-id":b,height:I,width:j,"data-height":x,"data-width":k,"data-link":v,onLoad:this.onLoad,onError:t=>{t.target.src=`${a.th}/media/error/no-image.svg`,t.target.srcset=`${a.th}/media/error/no-image.svg`,(0,l.bs)(t)},alt:null===f||void 0===f?void 0:f.title,title:(0,n.Ay)(null===f||void 0===f?void 0:f.title)},b):null]})]})}}},92887:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(88094),o=s(96913),a=s(15678);const n=i.lazy((()=>s.e(6300).then(s.bind(s,36300))));class l extends i.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:s,isPopUp:l}=this.props,r=(null===s||void 0===s?void 0:s.default)||[7,4,36].includes(t);return console.log("\ud83d\ude80 ~ Network ~ render ~ isDefaultIcon:",r),r?(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(n,{networkId:t,networkClass:e})}):(0,a.jsx)("div",{className:`${e} tb__icon tb-${(0,o.EC)(t)}`,"aria-label":`post network ${(0,o.Oi)(t)}`,children:(0,a.jsx)("div",{})})}}},42691:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var i=s(88094),o=s(17524),a=s(40329),n=s(19066),l=s(85115),r=s(15678);class d extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var s,i;const t=(null===(s=this.contentRef)||void 0===s||null===(i=s.current)||void 0===i?void 0:i.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:s,contentTitle:i,maxLines:d,isReadMore:c}=this.props,u=t.content.trimcontent&&!a.HY?t.content.trimcontent:0,h={WebkitLineClamp:d,textAlign:t.style.textAlign},p=(0,n.w)(s),m=`${e} ${c?"":""+(u?` tb_content_line-${u}`:"")} tb-cTBfont-${t.style.variant}`;return(0,r.jsxs)("div",{className:m,ref:this.contentRef,style:h,children:[i?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.Ay)(i)}):null,(0,r.jsx)(l.default,{content:p,CardStyle:t})]})}}},85115:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(88094),o=s(15678);const a=t=>{let{content:e,CardStyle:s}=t;const{background:a,backgroundStatus:n,color:l,colorStatus:r,feedHashtag:d,allHashtag:c}=(null===s||void 0===s?void 0:s.hashtag)||{},u={color:r?l:"inherit",fontWeight:"bold",backgroundColor:n?a:"transparent",display:"inline-block",margin:"0 2px"};return e?d||c?e.split(/(\s+)/).map(((t,e)=>t.startsWith("#")?(0,o.jsx)("div",{className:"tb_highlight",style:u,children:t},e):t.includes("\n")?t.split("\n").map(((t,s,a)=>(0,o.jsxs)(i.Fragment,{children:[t,s<a.length-1&&(0,o.jsx)("br",{})]},`${e}-${s}`))):(0,o.jsx)(i.Fragment,{children:t},e))):e:null},n=(0,i.memo)(a)},81500:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(88094),o=s(42682),a=s(15678);class n extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:s,ThemeInfo:i}=this.props;e.stopPropagation(),(0,o.hq)({type:2,action:2,wall:i.wallID,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:i.ownerId}),(0,o.x9)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:s,twitter:i,linkedin:o}=null===e||void 0===e?void 0:e.share,n=t=>{let{shareOn:e,icon:s}=t;return(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e),className:`tb_share_ico__ tb__icon tb-${s}`,title:s,children:(0,a.jsx)("div",{})})})};return(0,a.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[s?(0,a.jsx)(n,{shareOn:s,icon:"facebook"}):"",i?(0,a.jsx)(n,{shareOn:i,icon:"twitter"}):"",o?(0,a.jsx)(n,{shareOn:o,icon:"linkedin"}):""]})]})}}},97955:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(88094),o=s(19066),a=s(15678);const n=t=>{const{createdAt:e,timeClass:s}=t;return(0,a.jsx)("div",{className:s,role:"status","aria-label":`post timestamp ${(0,o.fF)(e)}`,children:(0,o.fF)(e)})},l=(0,i.memo)(n)},9571:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>w});var i=s(88094),o=s(14410),a=s.n(o),n=s(94935),l=s(97955),r=s(15678);const d=t=>{let{author:e,personalization:s,postTime:i,network:o,ThemeRule:a}=t;const d=e.username&&e.username.length>0?`@${e.username}`:"",c=!(!s.postAuthor||e.isInstaUser),u=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,r.jsx)("div",{className:"tb_gp_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:(0,r.jsxs)("div",{className:"tb_gp_author",children:[c?(0,r.jsx)(n.default,{author:e,authorClass:"tb_gp_author_profile",network:o}):"",(0,r.jsxs)("div",{className:"tb_gp_author_info",children:[c?(0,r.jsx)("div",{className:"tb_gp_authorname",children:e.name}):"",(0,r.jsxs)("div",{className:"tb_gp_post_info"+(u?"":" tb_gp_post_info__"),children:[c?(0,r.jsx)("div",{className:"tb_gp_username",children:d}):"",u?(0,r.jsx)("div",{className:"tb_gp_seprator",children:" "}):"",s.postTime?(0,r.jsx)(l.default,{postTime:i,timeClass:`tb_gp_time tb-cTBfont-${a.font_varient}`,authorColor:a.authorColor}):""]})]})]})})};var c=s(81500),u=s(17900),h=s(49782);class p extends i.PureComponent{render(){const{itemData:t,wallID:e,themeID:s,ownerId:i}=this.props;return(0,r.jsxs)("div",{className:"tb_gp_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[(0,r.jsx)(u.default,{itemData:t,IconClass:"tb_gp_media_icon",position:1,show:!0,observer:!0}),(0,r.jsx)(h.default,{ImageClass:"tb_gp_image",data:t,wallID:e,themeID:s,ownerId:i,size:100,observer:!0})]})}}var m=s(42691),_=s(92887),b=s(47043),v=s(40329);class g extends i.PureComponent{constructor(t){super(t),this.cardSize=i.createRef()}componentDidMount(){const{itemData:t,itemIndex:e,onClickPopUpSlider:s}=this.props,i=document.querySelector(".tb_gp_post_container");setTimeout((()=>{var t,e,s,o;(null===this||void 0===this||null===(t=this.cardSize)||void 0===t||null===(e=t.current)||void 0===e?void 0:e.offsetWidth)<250&&i.classList.add("tb_gp_post_wrapper2x"),(null===this||void 0===this||null===(s=this.cardSize)||void 0===s||null===(o=s.current)||void 0===o?void 0:o.offsetWidth)<120&&i.classList.add("tb_gp_post_wrapper1x"),v.Qy&&(0,b._7)(this.cardSize)}),100),t.isPopUp&&s(e,t)}render(){const{itemData:t,personalization:e,adjustWidth:s,ThemeRule:i,clickToShowPopUp:o,itemIndex:a,wallID:n,ownerId:l}=this.props,u={width:`${s}%`,padding:e.padding/2},h=1!==t.type,b=7===t.network.id,g=0==i.postHover&&v.HY?"light":"dark",f=v.MH?"tb_gp_color_overlay":"tb_gp_post_overlay-"+g,w={backgroundColor:v.MH?i.cardColor:""};return(0,r.jsx)("div",{id:`tb-gp-post-${t.id}`,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,className:"tb_gp_post_wrapper",style:u,"tb-network":t.network.id,"tb-product":t.isShopIcon?1:t.isHotspot?2:0,tabIndex:"0",role:"article","aria-label":`Post ${parseInt(a)+1},${t.content}`,ref:this.cardSize,children:(0,r.jsx)("div",{className:"tb_gp_post_in",onClick:o(a,t),role:"button","aria-label":"Popup",tabIndex:"0",children:(0,r.jsxs)("div",{className:"tb_gp_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[t.share.status?(0,r.jsx)(c.default,{share:t.share,shareClass:"tb_gp_share_container",item:t,wallID:n,ownerId:l}):null,h?(0,r.jsx)(p,{itemData:t,wallID:n,themeID:e.widgetTheme,ownerId:l},`img_gly_${t.id}`):"",b?"":(0,r.jsx)("div",{className:"tb_gp_contant_",children:(0,r.jsxs)("div",{className:"tb_gp_contant__in",children:[(0,r.jsxs)("div",{className:"tb_gp_content__",children:[(0,r.jsx)(d,{adjustWidth:s,postTime:t.createdAt,network:t.network,ownerId:l,author:t.author,font:i,personalization:e,ThemeRule:i}),i.hideContent&&1!=t.type?"":(0,r.jsx)(m.default,{item:t,contentClass:"tb_gp_content",content:t.content,font:i,ThemeRule:i,personalization:e,contentTitle:t.contentTitle})]}),(0,r.jsx)("div",{className:`tb_gp_post_overlay ${f}`,style:w,children:(0,r.jsx)("div",{})})]})}),(0,r.jsx)("div",{className:"tb_gp_social_",children:b?"":(0,r.jsx)(_.default,{networkClass:"tb_gp_social__ico",network:t.network,isDefault:1===i.iconType,ThemeRule:i})})]})})})}}class f extends i.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth,containerWidth:0,loadData:0},this.calculationData=(t,e,s,i)=>t>i&&t>i+s?{totalPostBestFit:i+s,isLastRow:!0}:{totalPostBestFit:i,isLastRow:!1}}componentDidMount(){const{postData:t,renderId:e}=this.props;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}UNSAFE_componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1})}render(){const{postData:t,completeDataObject:e,adjustWidth:s,ThemeStyle:i,ThemeInfo:o,clickToShowPopUp:n,cardNumber:l,onClickToCTA:d,onClickPopUpSlider:c}=this.props,{windowWidth:u,loadData:h}=this.state;var p={totalPostBestFit:0,isLastRow:!1};let m=0===i.column.desktop?Math.trunc(l)>5?5:Math.trunc(l):i.column.desktop;if(t.length>parseInt(l)){let e=parseInt(l);4===m?e=9:2===m?e=3:3===m?e=6:5===m&&(e=12),u<768&&(e=parseInt(l));let s=t.length/parseInt(e);p=parseInt(e)*parseInt(s),p=this.calculationData(t.length,e,m,p)}let _=0===i.column.desktop?Math.trunc(l)>5?5:Math.trunc(l)+1:i.column.desktop+1;return(0,r.jsx)(a(),{className:"tb_gp_post_container",tabIndex:"0","aria-label":`There are ${t&&t.length>0?t.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_gp_post_wrapper",resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:h?t&&t.length>0&&t.map(((t,i)=>{const a=e[t];let l=s;if(3===m&&_===i+1){l=2*s,_=_+2*m}else if(2===m&&_===i+1){l=2*s,_=_+(m+1)}else if(4===m&&_===i+1){l=2*s,_=_+(2*m+1)}else if(5===m&&_===i+1){l=2*s,_=_+(2*m+2)}return parseInt(p.totalPostBestFit)>=parseInt(i+1)?(0,r.jsx)(g,{ownerId:o.ownerId,itemData:a,itemIndex:i,adjustWidth:l,clickToShowPopUp:n,onClickToCTA:d,onClickPopUpSlider:c},i):0===parseInt(p.totalPostBestFit)?(0,r.jsx)(g,{ownerId:o.ownerId,itemData:a,itemIndex:i,adjustWidth:l,clickToShowPopUp:n,onClickToCTA:d,onClickPopUpSlider:c},`galry_${a.id}`):null})):null})}}const w=f},96913:(t,e,s)=>{"use strict";s.d(e,{EC:()=>i,Oi:()=>a,Yo:()=>o});const i=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),o=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),a=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},95098:()=>{}}]);