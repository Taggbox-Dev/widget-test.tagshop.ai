"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2238,2584,6304,6414,9538],{8377:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var a=s(82483),o=s(89871),r=s.n(o),l=s(83884),i=s(24366),n=s(16414),c=s(99538),d=s(70203),p=s(26304),h=s(56723);const u=e=>{let{Post:t,CardStyle:s}=e;const{author:a,networkId:o}=t,r=a.username&&a.username.length>0?`@${a.username}`:"",l=!(!s.author.status||(0,i.zK)(a.name)),u=!(!l||!s.timeStatus);return(0,h.jsxs)("div",{className:"tb_cp_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,h.jsxs)("div",{className:"tb_cp_author",children:[l?(0,h.jsx)(n.default,{author:a,networkId:o,authorClass:"tb_cp_author_profile"}):"",(0,h.jsxs)("div",{className:"tb_cp_author_info",children:[l?(0,h.jsx)("div",{className:"tb_cp_authorname",children:a.name}):"",(0,h.jsxs)("div",{className:"tb_cp_post_info",children:[l?(0,h.jsx)("div",{className:"tb_cp_username",children:r}):"",u?(0,h.jsx)(p.default,{sepClass:"tb_cp_seprator"}):"",s.timeStatus?(0,h.jsx)(c.default,{createdAt:t.createdAt,timeClass:`tb_cp_time tb-cTBfont-${s.author.variant}`}):""]})]})]}),(0,h.jsx)("div",{className:"tb_cp_social_",children:(0,h.jsx)(d.default,{networkClass:"tb_cp_social_ico",networkId:o,iconStyle:s.icon})})]})};var m=s(33689),_=s(7775),b=s(19882);const C=e=>{let{Post:t,ThemeStyle:s,CardStyle:a,index:o,inView:r}=e;const i=[3,5].includes(t.type)&&1===s.autoPlay||!1,n=!!a.style.ratio&&a.style.ratio,c=!l.HY||!t.hotspot;return(0,h.jsxs)("div",{className:"tb_cp_media_wrap",children:[(0,h.jsx)(b.default,{Post:t,IconClass:"tb_cp_media_icon",show:c,hideVideo:i}),i?(0,h.jsx)(m.A,{VideoClass:"tb_cp_video",Post:t,size:n,isCover:!0,controls:!1,autoPlay:!0,muted:!0,observer:!0,index:o,inView:r}):(0,h.jsx)(_.default,{ImageClass:"tb_cp_image",Post:t,size:n,hotspot:l.HY,blurBG:l.HY,observer:!0,index:o,inView:r})]})};var x=s(43694),j=s(49737),f=s(15653);const S=(0,a.lazy)((()=>s.e(2319).then(s.bind(s,2319)))),w=e=>{let{adjustWidth:t,clickToShowPopUp:s,index:o,onClickToCTA:r,onClickPopUpSlider:l,ThemeStyle:i,CardStyle:n,Post:c,ThemeInfo:d}=e;const p=1!==c.type;return(0,h.jsx)(f.A,{children:e=>{let{ref:l,inView:m}=e;return(0,h.jsx)("div",{id:`tb_cp_id-${c.id}`,ref:l,className:"tb_cp_post_wrapper",style:{width:`${t}%`,padding:n.style.padding/2,opacity:m?1:0,transition:m?"opacity .5s ease-in-out":""},"tb-network":c.networkId,"tb-product":c.isShopIcon?1:c.isHotspot?2:0,"post-id":c.referenceId?c.referenceId:c.id,"feed-id":c.feedId,tabIndex:0,"area-label":c.content.text,role:"article",children:(0,h.jsxs)("div",{className:"tb_cp_post_in",onClick:s(o,c),role:"button","aria-label":"Popup",tabIndex:0,children:[n.shareStatus?(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(S,{Post:c,ThemeInfo:d,shareClass:"tb_cp_share_container"})}):"",p?(0,h.jsx)(C,{Post:c,CardStyle:n,ThemeStyle:i,index:o,inView:m}):"",c.ctaStatus?(0,h.jsx)("div",{className:"tb_cp_post_cta",children:(0,h.jsx)(x.default,{ctaClass:"tb_cp_post_cta_btn",Post:c,onClickToCTA:r})}):"",(0,h.jsx)("div",{className:"tb_cp_contant_wrapper",children:(0,h.jsx)(u,{Post:c,CardStyle:n,ThemeStyle:i})}),n.actionStatus?(0,h.jsx)(j.A,{Post:c,CardStyle:n,actionClass:"tb_cp_social_action__"}):""]})})}})},y=e=>{let{Posts:t,completeDataObject:s,clickToShowPopUp:a,adjustWidth:o,onClickToCTA:r,onClickPopUpSlider:l,CardStyle:i,ThemeStyle:n,ThemeInfo:c}=e;return t&&t.length>0&&t.map(((e,t)=>{const d=s[e];return(0,h.jsx)(w,{adjustWidth:o,clickToShowPopUp:a,onClickToCTA:r,onClickPopUpSlider:l,Post:d,index:t,CardStyle:i,ThemeStyle:n,ThemeInfo:c},t)}))};class k extends a.PureComponent{constructor(){super(...arguments),this.state={loadDelaydata:!1},this.handleScroll=()=>{this.state.loadDelaydata||this.setState({loadDelaydata:!0},(()=>this.props.loadMoredata()))}}componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){const{postData:e,completeDataObject:t,adjustWidth:s,CardStyle:a,ThemeStyle:o,ThemeInfo:i,clickToShowPopUp:n,onClickToCTA:c,onClickPopUpSlider:d}=this.props;return l.HY?(0,h.jsx)(r(),{className:"tb_cp_post_container",tabIndex:"0","aria-label":`There are ${e&&e.length>0?e.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cp_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(0,h.jsx)(y,{clickToShowPopUp:n,Posts:e,completeDataObject:t,adjustWidth:s,onClickToCTA:c,onClickPopUpSlider:d,CardStyle:a,ThemeStyle:o,ThemeInfo:i})}):(0,h.jsx)("div",{className:"tb_cp_post_container",children:(0,h.jsx)(y,{clickToShowPopUp:n,Posts:e,completeDataObject:t,adjustWidth:s,onClickToCTA:c,onClickPopUpSlider:d,CardStyle:a,ThemeStyle:o,ThemeInfo:i})})}}const v=k},16414:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var a=s(82483),o=s(9916),r=s(21645),l=s(56723);class i extends a.PureComponent{render(){const{author:e,authorClass:t,networkId:s,size:a}=this.props;return(0,l.jsx)("div",{className:t,style:{overflow:4==s?"visible":""},children:(0,l.jsx)("img",{className:`${t}__`,src:e.picture,"aria-label":"author",alt:(0,r.Ay)(e.name),width:a||44,height:a||44,onError:t=>{const a=(0,o.Yo)(s),r="#ffffff"==a?"000":a.replace("#","");t.target.src=e.errorPic?e.errorPic:`https://ui-avatars.com/api/?name=${e.name.replace(/\s/g,"")}&background=${r}&color=fff&length=1`}})},Math.random())}}},70203:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var a=s(82483),o=s(9916),r=s(56723);const l=a.lazy((()=>s.e(8807).then(s.bind(s,88807))));class i extends a.PureComponent{render(){const{networkId:e,networkClass:t,iconStyle:s,isPopUp:i}=this.props;return(null===s||void 0===s?void 0:s.default)||[7,4,36].includes(e)?(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(l,{networkId:e,networkClass:t})}):(0,r.jsx)("div",{className:`${t} tb__icon tb-${(0,o.EC)(e)}`,"aria-label":`post network ${(0,o.Oi)(e)}`,children:(0,r.jsx)("div",{})})}}},26304:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});s(82483);var a=s(56723);const o=e=>{const{sepClass:t}=e;return(0,a.jsx)("div",{className:t,children:"   "})}},99538:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var a=s(82483),o=s(99009),r=s(56723);const l=e=>{const{createdAt:t,timeClass:s}=e;return(0,r.jsx)("div",{className:s,role:"status","aria-label":`post timestamp ${(0,o.fF)(t)}`,children:(0,o.fF)(t)})},i=(0,a.memo)(l)}}]);
//# sourceMappingURL=2238.6c600c31.chunk.js.map