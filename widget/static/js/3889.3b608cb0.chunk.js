"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3889],{75495:()=>{},82276:()=>{},23314:()=>{},86735:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var o=s(82483),i=s(12251),a=s(88620),l=s(4933),r=(s(46262),s(75495),s(82276),s(23314),s(83884)),n=s(24366),d=s(29269),c=s(56723);const p=o.lazy((()=>Promise.all([s.e(1645),s.e(6467),s.e(8819),s.e(6295)]).then(s.bind(s,2778))));class u extends o.Component{constructor(e){super(e),this.requestData=e=>{const{appendData:t,ThemeInfo:s,ThemeStyle:o,preRender:i,hasMoreData:a,nextData:l,loaderData:n}=this.props;e.progress>.8&&a&&!n.isShowMoreLoading&&l(r.HY?null===s||void 0===s?void 0:s.webId:null===s||void 0===s?void 0:s.wallId,Math.floor(Date.now()/1e3),null===o||void 0===o?void 0:o.totalPosts,t.networkID,t.after,i,t.heightEvent)},this.updatepost=e=>this.setState({loadData:!0},(()=>setTimeout((()=>this.props.loadMoredata()),1e3*e))),this.inputRefs={},this.state={loadData:!1}}componentDidMount(){setTimeout((()=>{const e=document.querySelectorAll(".splide__slide");e&&e.forEach((e=>{e.removeAttribute("aria-hidden"),e.removeAttribute("role")}))}),100);const{postData:e}=this.props;if(e&&1===e.length){const e=document.querySelector(".tb_rt_arrow_left__"),t=document.querySelector(".tb_rt_arrow_right__");e&&t&&(e.style.display="none",t.style.display="none")}}componentDidUpdate(){var e;const t=Object.values(this.inputRefs)[0],{postData:s,completeDataObject:o,onClickPopUpSlider:i,parentID:a}=this.props;if(t&&(null===(e=Object.values(t)[5])||void 0===e?void 0:e.length)>0){Object.values(t)[5].forEach((e=>{if(e.classList){const t=String(e.classList.value).split(" ").find((e=>String(e).includes("tb_"))),l=null===t||void 0===t?void 0:t.replace("tb_","");if(l){const t=s.findIndex((e=>e===l));document.querySelectorAll(`.tb_rt_post_container #${e.id}`).forEach((e=>{const s=e.getAttribute("p_id");String(a)===String(s)&&e.addEventListener("click",(e=>{e.preventDefault();const s=o[l];i(t,s)}))}))}}}))}}render(){const{postData:e,completeDataObject:t,clickToShowPopUp:s,hasMoreData:i,parentID:d,keyRender:u,onClickPopUpSlider:h,CardStyle:m,ThemeStyle:v,ProductSetting:b,ThemeInfo:D}=this.props,w=d,_=v.column.desktop,S=v.column.mobile,f=v.slide.autoSlide,g=v.slide.slideDuration,y=r.MH&&[151513].includes(null===D||void 0===D?void 0:D.ownerId)?0:.6,{loadData:P}=this.state;return(0,c.jsx)(c.Fragment,{children:d&&(0,c.jsx)("div",{className:"tb_rt_post_container",ref:this.sliderHeight,children:(0,c.jsx)(a.RC,{observer:!0,observeParents:!0,spaceBetween:0,ref:e=>this.inputRefs[w]=e,style:{width:"100%"},onScroll:e=>{this.requestData(e),P||this.updatepost(3)},onTouchMove:e=>{this.requestData(e),P||this.updatepost(0)},onAutoplay:e=>{this.requestData(e),P||this.updatepost(3)},autoHeight:!0,speed:700,edgeSwipeDetection:!0,slidesPerView:1,touchRatio:.5,cssMode:(0,n.qs)(),passiveListeners:!0,height:"250px",freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:1,momentumVelocityRatio:1},autoplay:!(!r.HY&&!r.MH)&&{delay:1===f?1e3*g:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!i,breakpoints:{0:{slidesPerView:(S||1)+y},480:{slidesPerView:(S||1)+y},575:{slidesPerView:(S||2)+y},767:{slidesPerView:(_||3)+y},1024:{slidesPerView:(_||5)+y},1400:{slidesPerView:(_||6)+y},1600:{slidesPerView:(_||7)+y}},mousewheel:{forceToAxis:!0,sensitivity:1},watchSlidesProgress:!0,modules:[l.Ij,l.FJ,l.U1],className:"tb_rt_post_slider",children:(null===e||void 0===e?void 0:e.length)>0&&e.map(((e,i)=>{const l=t[e];return r.HY||1!==l.type?(0,c.jsx)(a.qr,{style:{margin:0,padding:0},p_id:d,className:`tb_${l.id}`,children:e=>{let{isVisible:t}=e;return(0,c.jsx)(o.Suspense,{children:(0,c.jsx)(p,{isVisible:t,Post:l,index:i,CardStyle:m,ThemeStyle:v,ProductSetting:b,ThemeInfo:D,clickToShowPopUp:s,onClickPopUpSlider:h})})}},i):null}))},u)})})}}const h=(0,o.memo)((0,i.Ng)((e=>({loaderData:e.loaderData})),(e=>({nextData:(t,s,o,i,a,l,r,n)=>e((0,d.wF)(t,s,o,i,a,l,r,n))})))(u))}}]);
//# sourceMappingURL=3889.3b608cb0.chunk.js.map