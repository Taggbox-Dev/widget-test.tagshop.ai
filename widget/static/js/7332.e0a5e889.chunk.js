"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6575,7332],{4835:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var i=o(65043),n=o(60303),s=o.n(n),l=o(92908),c=o(9574),a=o(69433),r=o(36671),d=o(52141),p=o(70579);const _=e=>{let{Post:t,ThemeStyle:o,CardStyle:i,index:n,inView:s}=e;const c=[3,5].includes(t.type)&&1===o.autoPlay||!1,_=!!i.style.ratio&&i.style.ratio,h=!l.HY||!t.hotspot;return(0,p.jsxs)("div",{className:"tb_cp_media_wrap",children:[(0,p.jsx)(d.default,{Post:t,IconClass:"tb_cp_media_icon",show:h,hideVideo:c}),c?(0,p.jsx)(a.A,{VideoClass:"tb_cp_video",Post:t,size:_,isCover:!0,controls:!1,autoPlay:!0,muted:!0,observer:!0,index:n,inView:s}):(0,p.jsx)(r.A,{ImageClass:"tb_cp_image",Post:t,size:_,hotspot:l.HY,blurBG:l.HY,observer:!0,index:n,inView:s})]})};var h=o(66254),m=o(96575),u=o(43702);const b=(0,i.lazy)((()=>o.e(4311).then(o.bind(o,84311)))),y=e=>{let{postSize:t,clickToShowPopUp:o,index:n,onClickToCTA:s,ThemeStyle:l,CardStyle:a,Post:r,ThemeInfo:d}=e;const y=1!==r.type;return(0,p.jsx)(u.A,{children:e=>{let{ref:u,inView:C}=e;return y?(0,p.jsx)("div",{id:`tb_cp_id-${r.id}`,ref:u,className:"tb_cp_post_wrapper",style:{width:`${t}%`,padding:a.style.padding/2,opacity:C?1:0,transition:C?"opacity .5s ease-in-out":""},"tb-network":r.networkId,"tb-product":r.isShopIcon?1:r.isHotspot?2:0,"post-id":r.referenceId?r.referenceId:r.id,"feed-id":r.feedId,tabIndex:0,"area-label":r.content.text,role:"article",children:(0,p.jsxs)("div",{className:"tb_cp_post_in",onClick:o(n,r),role:"button","aria-label":"Popup",tabIndex:0,children:[a.shareStatus?(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(b,{Post:r,ThemeInfo:d,shareClass:"tb_cp_share_container"})}):"",y?(0,p.jsx)(_,{Post:r,CardStyle:a,ThemeStyle:l,index:n,inView:C}):"",r.ctaStatus?(0,p.jsx)("div",{className:"tb_cp_post_cta",children:(0,p.jsx)(h.default,{ctaClass:"tb_cp_post_cta_btn",Post:r,onClickToCTA:s})}):"",(0,p.jsx)("div",{className:"tb_cp_contant_wrapper",children:(0,p.jsx)(c.A,{className:"tb_cp",Post:r,CardStyle:a,ThemeStyle:l,inView:C})}),a.actionStatus?(0,p.jsx)(m.default,{Post:r,CardStyle:a,actionClass:"tb_cp_social_action__"}):""]})}):null}})};var C=o(22030);const S=e=>{let{Posts:t,completeDataObject:o,clickToShowPopUp:i,postSize:n,onClickToCTA:s,onClickPopUpSlider:l,CardStyle:c,ThemeStyle:a,ThemeInfo:r}=e;return t&&t.length>0&&t.map(((e,t)=>{const d=o[e];return(0,p.jsx)(y,{postSize:n,clickToShowPopUp:i,onClickToCTA:s,onClickPopUpSlider:l,Post:d,index:t,CardStyle:c,ThemeStyle:a,ThemeInfo:r},t)}))};class k extends i.PureComponent{constructor(){super(...arguments),this.state={loadDelaydata:!1},this.handleScroll=()=>{this.state.loadDelaydata||this.setState({loadDelaydata:!0},(()=>this.props.loadMoredata()))}}componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.props.loadBranding()}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){const{postData:e,completeDataObject:t,CardStyle:o,ThemeStyle:i,ThemeInfo:n,clickToShowPopUp:c,onClickToCTA:a,onClickPopUpSlider:r,containerSize:d}=this.props,_=(o.minimumWidth||200)+20,h=(0,C.Ci)(d.width,i.column,_),m=(0,C.Cv)(d.width,h);return l.HY?(0,p.jsx)(s(),{className:"tb_cp_post_container",tabIndex:"0","aria-label":`There are ${e&&e.length>0?e.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cp_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(0,p.jsx)(S,{clickToShowPopUp:c,Posts:e,completeDataObject:t,postSize:m,onClickToCTA:a,onClickPopUpSlider:r,CardStyle:o,ThemeStyle:i,ThemeInfo:n})}):(0,p.jsx)("div",{className:"tb_cp_post_container",children:(0,p.jsx)(S,{clickToShowPopUp:c,Posts:e,completeDataObject:t,postSize:m,onClickToCTA:a,onClickPopUpSlider:r,CardStyle:o,ThemeStyle:i,ThemeInfo:n})})}}const w=k},96575:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var i=o(65043),n=o(65281),s=o(97628),l=o(70579);const c=(e,t,o,i)=>{const s={like:`https://twitter.com/intent/favorite?tweet_id=${(0,n.Ph)(t)}`,comment:`https://twitter.com/intent/tweet?in_reply_to=${(0,n.Ph)(t)}`,retweet:`https://twitter.com/intent/retweet?tweet_id=${(0,n.Ph)(t)}`};return 1===e?s[i]:o},a=e=>{let{label:t,hrefClick:o,Icon:i,count:s,itemId:c=0,type:a}=e;const r=s>0?(0,n.sl)(s):"";return(0,l.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,l.jsxs)("div",{onClick:e=>{e.stopPropagation(),window.open(o,"_blank")},className:`tb_social_action__ico_wrap tb_social_action__ico_wrap_${c}`,"aria-label":`${t} post ${a} count ${r}`,role:"button",tabIndex:"0",children:[(0,l.jsx)("div",{className:`tb_social_action_ico__ tb__icon tb-${i}`,children:"  "}),r?(0,l.jsx)("div",{className:"tb_social_action_counts__",children:r}):""]})})};class r extends i.PureComponent{componentDidMount(){try{var e;const{Post:t}=this.props,o=`.tb_social_action__ico_wrap_${null===t||void 0===t?void 0:t.id}`;null===(e=document.querySelector(o))||void 0===e||e.addEventListener("keydown",(function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())}))}catch(t){console.log(t)}}render(){const{Post:e,CardStyle:t,actionClass:o}=this.props,{icon:i,style:n}=t,r={color:1==i.default?i.color:n.color},d=e.networkId,{comment:p,like:_}=e.count,h=[3,10,7].includes(d)?"like":"heart-outline",m=[1,2,3,7,8,9,10,18].includes(d),u=![29,19].includes(d),b=(0,s.Oi)(d);return[29,26,23,6,5,11,12,15,20,21].includes(d)?null:(0,l.jsx)("div",{className:o,children:(0,l.jsxs)("div",{className:"tb_social_action__",role:"list",children:[m&&(0,l.jsx)(a,{itemId:e.id,label:b,hrefClick:c(d,e.postId,e.link,"like"),Icon:h,iconStyle:r,count:_,type:"like"}),u&&(0,l.jsx)(a,{itemId:e.id,label:b,hrefClick:c(d,e.postId,e.link,"comment"),Icon:"comment",iconStyle:r,count:p,type:"comment"}),1===d&&(0,l.jsx)(a,{itemId:e.id,label:b,hrefClick:c(d,e.postId,e.link,"retweet"),Icon:"retweet",iconStyle:r,count:p,type:"comment"}),(0,l.jsx)(a,{label:b,itemId:e.id,hrefClick:e.link,Icon:"eye",iconStyle:r,count:0,type:"view"})]})})}}}}]);
//# sourceMappingURL=7332.e0a5e889.chunk.js.map