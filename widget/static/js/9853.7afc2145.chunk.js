"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5537,9853],{15537:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var s=i(9950),o=i(66345),n=i(44414);const a=s.lazy((()=>i.e(620).then(i.bind(i,20620)))),l=e=>{const{Post:t,IconClass:i,isCenter:l,hideVideo:d,show:r}=e,c=!![3,5].includes(t.type),_=7===t.network.id,u=!!(t.mediaList&&t.mediaList.length>0),p=1===t.isAudio,h=!!t.isProduct,b=(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(a,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),m=(0,n.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),x=(0,n.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),v=(0,n.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),w=(0,n.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),y=(0,n.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,n.jsxs)(n.Fragment,{children:[l&&(_||c)?(0,n.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!_?y:"",c&&_?b:""]}):null,h||u||c?(0,n.jsxs)("div",{className:`${i} tb__media_ico_`,children:[h?w:"",u?m:"",l||!c||_||d?"":p?x:v]}):null]}):null}},13778:(e,t,i)=>{i.r(t),i.d(t,{default:()=>j});var s=i(9950),o=i(10300),n=i(78885),a=i(60497),l=(i(38281),i(78262)),d=i(3720),r=i(15537),c=i(44414);const _=e=>{let{Post:t,CardStyle:i,ThemeStyle:s,isVisible:o,index:n,inView:a}=e;const _=!(![3,5].includes(t.type)||!o||1!=s.autoPlay);return(0,c.jsxs)("div",{className:"tb_rt_media_wrap",children:[(0,c.jsx)(r.default,{Post:t,IconClass:"tb_rt_media_icon",show:!0,hideVideo:!0}),_?(0,c.jsx)(d.A,{VideoClass:"tb_rt_video",Post:t,size:178,isCover:!0,muted:!0,autoPlay:!0,observer:!1,index:n,inView:a}):(0,c.jsx)(l.A,{ImageClass:"tb_rt_image",Post:t,size:178,observer:!1,index:n,inView:a})]})};var u=i(66345),p=i(77611),h=i(56071);const b=s.lazy((()=>i.e(2663).then(i.bind(i,92663)))),m=s.lazy((()=>i.e(7713).then(i.bind(i,47713))));class x extends s.PureComponent{componentDidMount(){const{Post:e,onClickPopUpSlider:t,itemIndex:i}=this.props;e.isPopUp&&t(i,e)}render(){const{itemIndex:e,isVisible:t,clickToShowPopUp:i,ThemeStyle:o,CardStyle:n,Post:a,index:l,ProductSetting:d}=this.props,{count:r,networkId:x}=a,{style:v,content:w}=n,y={backgroundColor:v.backgournd},j=!(!u.HY||""==n.shopText||!a.isProduct||w.status),S=0==v.mode&&u.HY?"light":"dark",g=!!([3,5].includes(a.type)&&1===n.viewCountStatus&&(null===r||void 0===r?void 0:r.views)>0);return(0,c.jsx)(h.A,{children:h=>{let{ref:w,inView:P}=h;return(0,c.jsx)("div",{"data-id":a.id,id:`tb_rt_id-${a.id}`,className:"tb_rt_post_wrapper",ref:w,style:{padding:v.margin/2,opacity:P?1:0,transition:P?"opacity .2s ease-in-out":""},"tb-product":a.isShopIcon?1:a.isHotspot?2:0,"area-label":a.content.text,role:"article","post-id":a.referenceId?a.referenceId:a.id,"feed-id":a.feedId,children:(0,c.jsxs)("div",{className:"tb_rt_post_in tb_icon_animate "+(u.HY?"":"tb_rt_post_in_animate"),style:y,onClick:i(e,a),role:"button","aria-label":"Popup",tabIndex:0,children:[g?(0,c.jsx)(p.A,{count:null===r||void 0===r?void 0:r.views}):null,(0,c.jsx)(_,{Post:a,CardStyle:n,ThemeStyle:o,ProductSetting:d,isVisible:t,index:l,inView:P}),u.HY?null:(0,c.jsx)("div",{className:"tb_rt_play_ico",children:(0,c.jsx)("div",{className:"tb__icon tb-play",children:(0,c.jsx)("div",{})})}),(0,c.jsxs)("div",{className:"tb_rt_post_details",children:[(0,c.jsx)("div",{className:"tb_rt_social_",children:(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(b,{networkClass:"tb_rt_social_ico_",networkId:x,iconStyle:n.icon})})}),j?(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(m,{CardStyle:n,btnClass:"tb_rt_btn_wrap"})}):null]}),(0,c.jsx)("div",{className:`tb_rt_post_overlay tb_rt_post_overlay-${S}`,children:(0,c.jsx)("div",{})})]})})}})}}var v=i(52867),w=i(21850);class y extends s.Component{constructor(e){super(e),this.requestData=e=>{const{appendData:t,ThemeInfo:i,ThemeStyle:s,hasMoreData:o,nextData:n,loaderData:a,containerSize:l}=this.props;e.progress>.8&&o&&!a.isShowMoreLoading&&n(u.HY?null===i||void 0===i?void 0:i.webId:null===i||void 0===i?void 0:i.wallId,Math.floor(Date.now()/1e3),(0,v.Ci)(l.width,s.column,280),t.networkID,t.after,t.heightEvent)},this.inputRefs={}}componentDidUpdate(){this.props.loadBranding()}render(){const{postData:e,completeDataObject:t,clickToShowPopUp:i,hasMoreData:s,parentID:o,keyRender:l,onClickPopUpSlider:d,CardStyle:r,ThemeStyle:_,ProductSetting:p,ThemeInfo:h,containerSize:b}=this.props,m=o,w=_.slide.autoSlide,y=_.slide.slideDuration,j=b.width>767?260:280,S=u.MH&&[151513].includes(null===h||void 0===h?void 0:h.ownerId)?0:.4,g=(0,v.Ci)(b.width,_.column,j);return(0,c.jsx)(c.Fragment,{children:o&&(0,c.jsx)("div",{className:"tb_rt_post_container tb_swiper",ref:this.sliderHeight,children:(0,c.jsx)(n.RC,{observer:!0,observeParents:!0,spaceBetween:0,ref:e=>this.inputRefs[m]=e,style:{width:"100%"},onScroll:e=>{this.requestData(e)},onTouchMove:e=>{this.requestData(e)},onAutoplay:e=>{this.requestData(e)},speed:700,edgeSwipeDetection:!0,slidesPerView:g+S,touchRatio:.5,cssMode:(0,v.qs)(),passiveListeners:!0,freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:1,momentumVelocityRatio:1},autoplay:!(!u.HY&&!u.MH)&&{delay:1===w?1e3*y:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!s,mousewheel:{forceToAxis:!0,sensitivity:1},watchSlidesProgress:!0,modules:[a.Ij,a.FJ,a.U1],className:"tb_rt_post_slider",children:(null===e||void 0===e?void 0:e.length)>0&&e.map(((e,s)=>{const a=t[e];return u.HY||1!==a.type?(0,c.jsx)(n.qr,{"data-id":a.id,p_id:o,className:`tb_${a.id}`,children:e=>{let{isVisible:t}=e;return(0,c.jsx)(x,{isVisible:t,Post:a,index:s,CardStyle:r,ThemeStyle:_,ProductSetting:p,ThemeInfo:h,clickToShowPopUp:i,onClickPopUpSlider:d},s)}},`${a.id}-${s}`):null}))},l)})})}}const j=(0,s.memo)((0,o.Ng)((e=>({loaderData:e.loaderData})),(e=>({nextData:(t,i,s,o,n,a,l,d)=>e((0,w.wF)(t,i,s,o,n,a,l,d))})))(y))}}]);