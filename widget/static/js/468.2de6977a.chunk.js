"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[468],{53456:()=>{},468:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(88094),r=s(83546),o=s(31060),l=(s(53456),s(40329)),i=s(47043),n=s(42682),d=s(15678);const p=a.lazy((()=>Promise.all([s.e(7524),s.e(5740),s.e(6387)]).then(s.bind(s,57253)))),h=e=>{let{isTrue:t,children:s}=e;return t?(0,d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:s}):s};class c extends a.PureComponent{constructor(e){super(e),this.handleKeyPress=e=>{try{const{ThemeStyle:s}=this.props;if(1==s.slide.autoSlide){if(!["INPUT","TEXTAREA"].includes(e.target.tagName)&&"Space"===e.code){const{parentID:s}=this.props;e.preventDefault();var t=this.inputRefs[s].splide.Components.Autoplay;t.isPaused()?t.play():t.pause()}}}catch(s){}},this.requestData=()=>{const{appendData:e,preRender:t,hasMoreData:s,nextData:a,ThemeStyle:r,ThemeInfo:o}=this.props;s&&a(l.HY?o.webId:o.wallId,Math.floor(Date.now()/1e3),r.totalPosts,e.networkID,e.after,t,e.heightEvent)},this.autoScrollSlider=e=>{const{ThemeStyle:t}=this.props;if(1==t.autoScrollStatus||l.HY){const t=e.index;e.length-t===e._o.perPage&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{const e=document.querySelectorAll(".splide__slide");e&&e.forEach((e=>{e.removeAttribute("aria-hidden"),e.removeAttribute("role")}))}),100);const{Post:e}=this.props;this.setState({Post:e}),window.addEventListener("keydown",this.handleKeyPress)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}render(){const{postData:e,completeDataObject:t,CardStyle:s,ThemeStyle:r,ProductSetting:n,ThemeInfo:c,clickToShowPopUp:u,onClickToCTA:_,postSizeInPx:m,parentID:w,loaderData:g,onClickPopUpSlider:b,adjustWidth:v,cardNumber:x}=this.props,{ownerId:y}=c,S=w;var P=[];const T=r.column.desktop,f=r.column.mobile,j=r.slide.autoSlide,k=r.slide.slideDuration,D=r.autoScrollStatus,I=r.row&&0!==r.row?e.length<15&&(l.aD||l.Vn)?1:r.row:1;let C=!0;const M=9!=c.productType&&!l.HY||142546!=y&&141171!=y&&void 0===r.slide.clonePost?{}:142546==y||141171==y||0===r.slide.clonePost?{clones:0}:{};for(var N=0,A=e.length;N<A;)P.push(e.slice(N,N+=I));l.HY&&M&&0==Object.keys(M).length&&(16677==c.wallId?"product"===window.dataFilterType&&(C=!!(P&&P.length>=5)):P=P.length<12?Array(15-P.length).fill(P).flat():P);const q=1!=D?!Object.keys(M).length&&(9==c.productType||"loop"):l.HY?"slide":"loop",E=!(142546!=y&&141171!=y||0!=T&&0!=f||(0,i.qs)())&&!(parseInt(x)<e.length),H=(0,i.qs)()?1:e.length,U={...M,type:1!==D&&q,rewind:!1,speed:1e3,interval:1===j?1e3*parseInt(k):5e3,perPage:T>0?T:9==c.productType?3:H>6?6:H,perMove:1,gap:0,autoplay:1===j,padding:0,updateOnMove:!0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:Math.max(f||1,1)},767:{perPage:Math.max(f||2,2)},991:{perPage:f||Math.min(H,3)},1200:{perPage:T||Math.min(H,4)},1400:{perPage:T||Math.min(H,5)},1600:{perPage:T||Math.min(H,6)}}};return(0,d.jsx)(d.Fragment,{children:""!=w?(0,d.jsxs)(h,{isTrue:E,children:[" ",(0,d.jsx)("div",{className:"tb_hs_post_container",style:E?{maxWidth:e.length*m.adjustWidth}:null,children:C?(0,d.jsxs)(o.eB,{hasTrack:!1,className:"tb_hs_post_slider",options:U,ref:e=>this.inputRefs[S]=e,onMove:this.autoScrollSlider,children:[(0,d.jsx)("div",{className:"splide__track",children:(0,d.jsx)("div",{className:"splide__list",children:(r.row>1&&1!==P.length&&P.length%2!==0?P.pop():P)&&P&&P.length>0&&P.map(((e,o)=>(0,d.jsx)("div",{className:`splide__slide splide__${o}`,children:(0,d.jsx)("div",{className:"tb_hs_col_wrap",children:e.map((e=>{const l=t[e];return(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(p,{Post:l,index:o,CardStyle:s,ThemeStyle:r,ProductSetting:n,ThemeInfo:c,clickToShowPopUp:u,onClickToCTA:_,postSizeInPx:m,onClickPopUpSlider:b,adjustWidth:v,isTrue:E},l.id)})}))})},`tb_${o}_${o}`)))})}),(0,d.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,d.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,d.jsx)("div",{})}),(0,d.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt "+(g.isShowMoreLoading?"tb_a_spinner":""),onClick:l.HY?e=>this.requestData():null,role:"button","aria-label":"Go to next slide",children:(0,d.jsx)("div",{})})]})]}):null})," "]}):null})}}const u=(0,r.Ng)((e=>({loaderData:e.loaderData})),(e=>({nextData:(t,s,a,r,o,l,i,d)=>e((0,n.wF)(t,s,a,r,o,l,i,d))})))(c)}}]);