"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2141,2873],{52141:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var i=s(65043),o=s(92908),n=s(70579);const a=i.lazy((()=>s.e(1543).then(s.bind(s,21543)))),l=e=>{const{Post:t,IconClass:s,isCenter:l,hideVideo:d,show:r}=e,c=!![3,5].includes(t.type),p=7===t.network.id,u=!!(t.mediaList&&t.mediaList.length>0),_=1===t.isAudio,h=!!t.isProduct,b=(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(a,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),m=(0,n.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),v=(0,n.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),x=(0,n.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),y=(0,n.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,n.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,n.jsxs)(n.Fragment,{children:[l&&(p||c)?(0,n.jsxs)("div",{className:`${s} tb__media_ico_c`,children:[c&&!p?w:"",c&&p?b:""]}):null,h||u||c?(0,n.jsxs)("div",{className:`${s} tb__media_ico_`,children:[h?y:"",u?m:"",l||!c||p||d?"":_?v:x]}):null]}):null}},83973:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var i=s(65043),o=s(83003),n=s(74975),a=s(50050),l=(s(61964),s(36671)),d=s(69433),r=s(52141),c=s(70579);const p=e=>{let{Post:t,CardStyle:s,ThemeStyle:i,isVisible:o,index:n,inView:a}=e;const p=!(![3,5].includes(t.type)||!o||1!=i.autoPlay);return(0,c.jsxs)("div",{className:"tb_rt_media_wrap",children:[(0,c.jsx)(r.default,{Post:t,IconClass:"tb_rt_media_icon",show:!0,hideVideo:!0}),p?(0,c.jsx)(d.A,{VideoClass:"tb_rt_video",Post:t,size:178,isCover:!0,muted:!0,autoPlay:!0,observer:!1,index:n,inView:a}):(0,c.jsx)(l.A,{ImageClass:"tb_rt_image",Post:t,size:178,observer:!1,index:n,inView:a})]})};var u=s(92908),_=s(77822),h=s(43702);const b=i.lazy((()=>s.e(4961).then(s.bind(s,44961)))),m=i.lazy((()=>s.e(7789).then(s.bind(s,90170))));class v extends i.PureComponent{componentDidMount(){const{Post:e,onClickPopUpSlider:t,itemIndex:s}=this.props;e.isPopUp&&t(s,e)}render(){const{itemIndex:e,isVisible:t,clickToShowPopUp:s,ThemeStyle:o,CardStyle:n,Post:a,index:l}=this.props,{count:d,networkId:r}=a,{style:v,content:x}=n,y={backgroundColor:v.backgournd},w=!(!u.HY||""==n.shopText||!a.isProduct||x.status),j=0==v.mode&&u.HY?"light":"dark",S=!!([3,5].includes(a.type)&&1===n.viewCountStatus&&(null===d||void 0===d?void 0:d.views)>0);return(0,c.jsx)(h.A,{children:h=>{let{ref:x,inView:f}=h;return(0,c.jsx)("div",{"data-id":a.id,id:`tb_rt_id-${a.id}`,className:"tb_rt_post_wrapper",ref:x,style:{padding:v.padding/2,opacity:f?1:0,transition:f?"opacity .2s ease-in-out":""},"tb-product":a.isShopIcon?1:a.isHotspot?2:0,"area-label":a.content.text,role:"article","post-id":a.referenceId?a.referenceId:a.id,"feed-id":a.feedId,children:(0,c.jsxs)("div",{className:"tb_rt_post_in tb_icon_animate "+(u.HY?"":"tb_rt_post_in_animate"),style:y,onClick:s(e,a),role:"button","aria-label":"Popup",tabIndex:0,children:[S?(0,c.jsx)(_.A,{count:null===d||void 0===d?void 0:d.views}):null,(0,c.jsx)(p,{Post:a,CardStyle:n,ThemeStyle:o,isVisible:t,index:l,inView:f}),u.HY?null:(0,c.jsx)("div",{className:"tb_rt_play_ico",children:(0,c.jsx)("div",{className:"tb__icon tb-play",children:(0,c.jsx)("div",{})})}),(0,c.jsxs)("div",{className:"tb_rt_post_details",children:[(0,c.jsx)("div",{className:"tb_rt_social_",children:(0,c.jsx)(i.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(b,{networkClass:"tb_rt_social_ico_",networkId:r,iconStyle:n.icon})})}),w?(0,c.jsx)(i.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(m,{CardStyle:n,btnClass:"tb_rt_btn_wrap"})}):null]}),(0,c.jsx)("div",{className:`tb_rt_post_overlay tb_rt_post_overlay-${j}`,children:(0,c.jsx)("div",{})})]})})}})}}var x=s(22030),y=s(26165);class w extends i.Component{constructor(e){super(e),this.requestData=e=>{const{appendData:t,ThemeInfo:s,ThemeStyle:i,preRender:o,hasMoreData:n,nextData:a,loaderData:l}=this.props;e.progress>.8&&n&&!l.isShowMoreLoading&&a(u.HY?null===s||void 0===s?void 0:s.webId:null===s||void 0===s?void 0:s.wallId,Math.floor(Date.now()/1e3),null===i||void 0===i?void 0:i.totalPosts,t.networkID,t.after,o,t.heightEvent)},this.updatepost=e=>this.setState({loadData:!0},(()=>setTimeout((()=>this.props.loadMoredata()),1e3*e))),this.inputRefs={},this.state={loadData:!1}}componentDidMount(){setTimeout((()=>{const e=document.querySelectorAll(".splide__slide");e&&e.forEach((e=>{e.removeAttribute("aria-hidden"),e.removeAttribute("role")}))}),100);const{postData:e}=this.props;if(e&&1===e.length){const e=document.querySelector(".tb_rt_arrow_left__"),t=document.querySelector(".tb_rt_arrow_right__");e&&t&&(e.style.display="none",t.style.display="none")}}componentDidUpdate(){var e;const t=Object.values(this.inputRefs)[0],{postData:s,completeDataObject:i,onClickPopUpSlider:o,parentID:n}=this.props;if(t&&(null===(e=Object.values(t)[5])||void 0===e?void 0:e.length)>0){Object.values(t)[5].forEach((e=>{if(e.classList){const t=String(e.classList.value).split(" ").find((e=>String(e).includes("tb_"))),a=null===t||void 0===t?void 0:t.replace("tb_","");if(a){const t=s.findIndex((e=>e===a));document.querySelectorAll(`.tb_rt_post_container #${e.id}`).forEach((e=>{const s=e.getAttribute("p_id");String(n)===String(s)&&e.addEventListener("click",(e=>{e.preventDefault();const s=i[a];o(t,s)}))}))}}}))}this.props.loadBranding()}render(){const{postData:e,completeDataObject:t,clickToShowPopUp:s,hasMoreData:i,parentID:o,keyRender:l,onClickPopUpSlider:d,CardStyle:r,ThemeStyle:p,ProductSetting:_,ThemeInfo:h,handlePressStart:b,handlePressEnd:m,containerSize:y}=this.props,w=o,j=p.column.desktop,S=p.column.mobile,f=p.slide.autoSlide,g=p.slide.slideDuration,{loadData:D}=this.state,P=y.width>767?260:280,k=u.MH&&[151513].includes(null===h||void 0===h?void 0:h.ownerId)?0:.4,C=Math.max((y.width/P).toFixed(),1),I=y.width>767?j||C:S||C;return(0,c.jsx)(c.Fragment,{children:o&&(0,c.jsx)("div",{className:"tb_rt_post_container tb_swiper",ref:this.sliderHeight,children:(0,c.jsx)(n.RC,{observer:!0,observeParents:!0,spaceBetween:0,ref:e=>this.inputRefs[w]=e,style:{width:"100%"},onScroll:e=>{this.requestData(e),D||this.updatepost(3)},onTouchMove:e=>{this.requestData(e),D||this.updatepost(0)},onAutoplay:e=>{this.requestData(e),D||this.updatepost((0,x.qs)()&&S&&g<5?0:5)},speed:700,edgeSwipeDetection:!0,slidesPerView:I+k,touchRatio:.5,cssMode:(0,x.qs)(),passiveListeners:!0,freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:1,momentumVelocityRatio:1},autoplay:!(!u.HY&&!u.MH)&&{delay:1===f?1e3*g:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!i,mousewheel:{forceToAxis:!0,sensitivity:1},watchSlidesProgress:!0,modules:[a.Ij,a.FJ,a.U1],className:"tb_rt_post_slider",children:(null===e||void 0===e?void 0:e.length)>0&&e.map(((e,i)=>{const a=t[e];return u.HY||1!==a.type?(0,c.jsx)(n.qr,{"data-id":a.id,onTouchStart:b,onTouchEnd:e=>m(e,i,a),p_id:o,className:`tb_${a.id}`,children:e=>{let{isVisible:t}=e;return(0,c.jsx)(v,{isVisible:t,Post:a,index:i,CardStyle:r,ThemeStyle:p,ProductSetting:_,ThemeInfo:h,clickToShowPopUp:s,onClickPopUpSlider:d},i)}},`${a.id}-${i}`):null}))},l)})})}}const j=(0,i.memo)((0,o.Ng)((e=>({loaderData:e.loaderData})),(e=>({nextData:(t,s,i,o,n,a,l,d)=>e((0,y.wF)(t,s,i,o,n,a,l,d))})))(w))}}]);
//# sourceMappingURL=2873.97667e2c.chunk.js.map