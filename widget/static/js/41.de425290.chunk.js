"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[41,4311,7342,9410],{44961:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var s=n(65043),i=n(97628),o=n(70579);const a=s.lazy((()=>n.e(1543).then(n.bind(n,21543))));class l extends s.PureComponent{render(){const{networkId:e,networkClass:t,iconStyle:n,isPopUp:l}=this.props;return 1==(null===n||void 0===n?void 0:n.default)||[7,4,36].includes(e)?(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(a,{networkId:e,networkClass:t})}):(0,o.jsx)("div",{className:`${t} tb__icon tb-${(0,i.EC)(e)}`,"aria-label":`post network ${(0,i.Oi)(e)}`,children:(0,o.jsx)("div",{})})}}},89410:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var s=n(65043),i=n(92908),o=n(80229),a=n(65281),l=n(70579);class r extends s.PureComponent{constructor(e){super(e),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var n,s;const e=(null===(n=this.contentRef)||void 0===n||null===(s=n.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{CardStyle:e,contentClass:t,content:n,contentTitle:s,maxLines:r,isReadMore:c}=this.props,d=e.content.trimcontent&&!i.HY?e.content.trimcontent:0,_={WebkitLineClamp:r,textAlign:e.style.textAlign},h=(0,a.w)(n),p=`${t} ${c?"":""+(d?` tb_content_line-${d}`:"")} tb-cTBfont-${e.style.variant}`;return(0,l.jsxs)("div",{className:p,ref:this.contentRef,style:_,children:[s?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,o.Ay)(s)}):null,(0,o.Ay)(h)]})}}},84311:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var s=n(65043),i=n(26165),o=n(70579);class a extends s.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{Post:n,ThemeInfo:s}=this.props;t.stopPropagation(),(0,i.hq)({type:2,action:2,wall:s.wallID,feed:n.feedId,post:n.referenceId?n.referenceId:n.id,owner:s.ownerId}),(0,i.x9)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{shareClass:e,Post:t}=this.props,{facebook:n,twitter:s,linkedin:i}=null===t||void 0===t?void 0:t.share,a=e=>{let{shareOn:t,icon:n}=e;return(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t),className:`tb_share_ico__ tb__icon tb-${n}`,title:n,children:(0,o.jsx)("div",{})})})};return(0,o.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[n?(0,o.jsx)(a,{shareOn:n,icon:"facebook"}):"",s?(0,o.jsx)(a,{shareOn:s,icon:"twitter"}):"",i?(0,o.jsx)(a,{shareOn:i,icon:"linkedin"}):""]})]})}}},99187:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var s=n(65043),i=n(60303),o=n.n(i),a=n(92908),l=n(22030),r=n(36671),c=n(69433),d=n(52141),_=n(44961),h=n(70579);const p=e=>{let{Post:t,ThemeStyle:n,CardStyle:s,ThemeInfo:i,index:o,inView:l}=e;const p=[3,5].includes(t.type)&&1==n.autoPlay||!1,b=!(!a.MH||!s.style.ratio)&&s.style.ratio,u=59==!i.id&&!a.HY&&!a.MH;return(0,h.jsxs)("div",{className:"tb_nc_media_wrap",children:[u?(0,h.jsx)("div",{className:"tb_nc_social_ tb_nc_social_top_",children:(0,h.jsx)(_.default,{networkClass:"tb_nc_social_ico",networkId:t.network.id,network:t.network,iconStyle:s.icon})}):null,(0,h.jsx)(d.default,{Post:t,IconClass:u?"tb_nc_media_icon_te":"tb_nc_media_icon",show:!0,hideVideo:p}),p?(0,h.jsx)(c.A,{VideoClass:"tb_nc_video",Post:t,size:b,isCover:!0,controls:!1,autoPlay:p,muted:!0,index:o,inView:l}):(0,h.jsx)(r.A,{ImageClass:"tb_nc_image",Post:t,size:b,hotspot:a.HY,blurBG:!1,observer:!0,index:o,inView:l})]})};var b=n(89410),u=n(84311),x=n(66254),m=n(43702),f=n(9574);const w=s.lazy((()=>n.e(6575).then(n.bind(n,96575)))),j=s.lazy((()=>n.e(7005).then(n.bind(n,57005)))),C=e=>{let{postSize:t,clickToShowPopUp:n,index:i,onClickToCTA:o,ThemeStyle:r,CardStyle:c,Post:d,ThemeInfo:_,counter:C}=e;const v=_.id,k=1!==d.type,y=d.rating>0,g=d.rating>0?"tb_nc_rating_content":"tb_nc_content",I=1===d.type&&c.style.textDecoration?"tb_nc_text_decoration tb_nc_text_post":"",S=c.content.trimcontent?(0,l.Ex)(d.content.text,200):d.content.text;return(0,h.jsx)(m.A,{children:e=>{let{ref:l,inView:m}=e;return(0,h.jsx)("div",{ref:l,style:{width:`${t}%`,padding:c.style.padding/2,opacity:m?1:0,transition:m?"opacity .5s ease-in-out":""},className:"tb_nc_post_wrapper"+(a.MH&&83===v?` tb_nc_post_gradient tb_nc_gradient-${C}`:""),role:"article","area-label":d.content.text,"post-id":d.referenceId?d.referenceId:d.id,"feed-id":d.feedId,children:(0,h.jsx)("div",{id:`tb_nc_id-${d.id}`,"tb-network":d.networkId,"post-id":d.referenceId||d.id,"feed-id":d.feedId,tabIndex:"0","area-label":S,role:"article",children:(0,h.jsx)("div",{className:"tb_nc_post_wrap_in",children:(0,h.jsxs)("div",{className:"tb_nc_post_in",onClick:n(i,d),role:"button","aria-label":"open detail modal for post",tabIndex:"0",children:[d.share.status?(0,h.jsx)(u.default,{share:d.share,shareClass:"tb_nc_share_container",Post:d,ThemeInfo:_}):null,k?(0,h.jsx)(p,{Post:d,CardStyle:c,ThemeStyle:r,ThemeInfo:_,index:i,inView:m}):null,y&&59!==v&&!a.HY?(0,h.jsx)("div",{className:"tb_nc_rating__",children:(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)("div",{className:"rating-default-height"}),children:(0,h.jsx)(j,{rating:d.rating,networkId:d.networkId})})}):null,(0,h.jsxs)("div",{className:"tb_nc_contant_wrapper",children:[(0,h.jsx)(f.A,{className:"tb_nc",Post:d,CardStyle:c,ThemeInfo:_,inView:m}),d.ctaStatus?(0,h.jsx)("div",{className:"tb_nc_post_cta",children:(0,h.jsx)(x.default,{ctaClass:"tb_nc_post_cta_btn",cta:d,Post:d,onClickToCTA:o})}):null,y&&a.HY?(0,h.jsx)("div",{className:"tb_nc_rating__",children:(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)("div",{className:"rating-default-height"}),children:(0,h.jsx)(j,{rating:d.rating,networkId:d.networkId})})}):null,c.content.status||1===d.type?(0,h.jsx)(b.default,{contentClass:`${g} ${I}`,Post:d,content:S,CardStyle:c,contentTitle:d.content.title}):null]}),c.actionStatus?(0,h.jsx)(s.Suspense,{fallback:"",children:(0,h.jsx)(w,{Post:d,CardStyle:c,actionClass:"tb_nc_social_action__"})}):null]})})})})}})};class v extends s.PureComponent{componentDidMount(){this.props.loadBranding()}render(){const{postData:e,completeDataObject:t,CardStyle:n,ThemeStyle:s,ThemeInfo:i,clickToShowPopUp:r,onClickToCTA:c,onClickPopUpSlider:d,containerSize:_}=this.props,p=Math.max((_.width/(n.minimumWidth+20)).toFixed(),1),b=(0,l.GH)(_.width,s.column,p),u=(0,l.Cv)(_.width,b);let x=0;return(0,h.jsx)(o(),{className:"tb_nc_post_container",tabIndex:"0","aria-label":`There are ${e&&e.length>0?e.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_nc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:e&&e.length>0&&e.map(((e,o)=>{const l=t[e];return x=a.MH&&83==(null===i||void 0===i?void 0:i.id)?o%6===0?1:x+1:1,(0,h.jsx)(C,{postSize:u,clickToShowPopUp:r,onClickToCTA:c,onClickPopUpSlider:d,Post:l,index:o,CardStyle:n,ThemeStyle:s,ThemeInfo:i},o)}))})}}const k=v}}]);
//# sourceMappingURL=41.de425290.chunk.js.map