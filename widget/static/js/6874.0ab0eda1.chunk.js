(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2685,6264,6723,6874,7949,8167],{78167:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var a=s(9950),n=s(91697),r=s(44414);class i extends a.PureComponent{render(){const{author:t,authorClass:e,networkId:s,size:a,inView:i}=this.props;return(0,r.jsx)("div",{className:e,style:{overflow:4==s?"visible":""},children:i?(0,r.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:a||44,height:a||44,onError:e=>{const a=(0,n.Yo)(s),r="#ffffff"==a?"000":a.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${r}&color=fff&length=1`}}):null},Math.random())}}},65859:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(9950),n=s(70804),r=s(66345),i=s(76506),o=s(44414);class l extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var s,a;const t=(null===(s=this.contentRef)||void 0===s||null===(a=s.current)||void 0===a?void 0:a.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:s,contentTitle:a,maxLines:l,isReadMore:c}=this.props,d=t.content.trimcontent&&!r.HY?t.content.trimcontent:0,h={WebkitLineClamp:l,textAlign:t.style.textAlign},_=(0,i.w)(s),p=`${e} ${c?"":""+(d?` tb_content_line-${d}`:"")} tb-cTBfont-${t.style.variant}`;return(0,o.jsxs)("div",{className:p,ref:this.contentRef,style:h,children:[a?(0,o.jsx)("div",{className:"tb_bold_txt__",children:(0,n.Ay)(a)}):null,(0,n.Ay)(_)]})}}},55507:(t,e,s)=>{"use strict";s.d(e,{A:()=>o});var a=s(9950),n=s(44414);const r=t=>{let{networkId:e}=t;const{className:s,color:a}={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,n.jsx)("div",{className:s,style:{color:a},"tb-network":e,children:(0,n.jsx)("div",{})})},i=t=>{let{ThemeID:e,networkId:s}=t;const{className:a,color:r}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,n.jsx)("div",{className:a,style:{color:r},"tb-network":s})};class o extends a.PureComponent{render(){const{rating:t,networkId:e,ThemeID:s}=this.props;return(0,n.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>s?(0,n.jsx)(i,{ThemeID:s,networkId:e},a):(0,n.jsx)(r,{networkId:e},a))):null})}}},37949:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});s(9950);var a=s(44414);const n=t=>{const{sepClass:e}=t;return(0,a.jsx)("div",{className:e,children:"   "})}},72685:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var a=s(9950),n=s(21850),r=s(44414);class i extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:s,ThemeInfo:a}=this.props;e.stopPropagation(),(0,n.hq)({type:2,action:2,wall:a.wallID,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:a.ownerId}),(0,n.x9)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:s,twitter:a,linkedin:n}=null===e||void 0===e?void 0:e.share,i=t=>{let{shareOn:e,icon:s}=t;return(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e),className:`tb_share_ico__ tb__icon tb-${s}`,title:s,children:(0,r.jsx)("div",{})})})};return(0,r.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,r.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,r.jsx)("div",{})}),(0,r.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[s?(0,r.jsx)(i,{shareOn:s,icon:"facebook"}):"",a?(0,r.jsx)(i,{shareOn:a,icon:"twitter"}):"",n?(0,r.jsx)(i,{shareOn:n,icon:"linkedin"}):""]})]})}}},6723:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});var a=s(9950),n=s(76506),r=s(44414);const i=t=>{const{createdAt:e,timeClass:s}=t;return(0,r.jsx)("div",{className:s,role:"status","aria-label":`post timestamp ${(0,n.fF)(e)}`,children:(0,n.fF)(e)})},o=(0,a.memo)(i)},33394:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>I});var a=s(9950),n=s(10300),r=s(53556),i=s(66345),o=s(52867),l=s(3720),c=s(78262),d=s(15537),h=s(44414);const _=t=>{let{Post:e,ThemeInfo:s,ThemeStyle:a,CardStyle:n,index:r,inView:o}=t;const _=!(![3,5].includes(e.type)||1!=a.autoPlay),p=(9==s.productType||i.MH)&&n.style.ratio?n.style.ratio:100,u=!e.hotspot;return(0,h.jsxs)("div",{className:"tb_hc_media_wrap",children:[u?(0,h.jsx)(d.default,{Post:e,IconClass:"tb_hc_media_icon",show:u,isCenter:!1,hideVideo:_}):null,_?(0,h.jsx)(l.A,{VideoClass:"tb_hc_video",Post:e,size:p,isCover:!0,controls:!1,autoPlay:_,muted:!0,observer:!1,index:r,inView:o}):(0,h.jsx)(c.A,{ImageClass:"tb_hc_image",Post:e,size:p,hotspot:!0,blurBG:i.HY,observer:!1,index:r,inView:o})]})};var p=s(60531),u=s(55507),m=s(60342),b=s(6723),g=s(92663),f=s(78167),x=s(37949);const y=t=>{let{Post:e,CardStyle:s,inView:a}=t;const{author:n,networkId:r}=e,i=n.username&&n.username.length>0?`@${n.username}`:"",o=!(!s.author.status||n.isInstaUser),l=!(!s.author.status||!s.timeStatus||n.isInstaUser),c=null!==r&&""!==r;return(0,h.jsxs)("div",{className:"tb_hc_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[o?(0,h.jsx)(f.default,{network:e.network,author:n,authorClass:"tb_hc_author_profile",size:46,inView:a}):"",(0,h.jsxs)("div",{className:"tb_hc_author_info",children:[o?(0,h.jsx)("div",{className:`tb_hc_authorname tb-cTBfont-${s.author.variant}`,children:n.name}):"",(0,h.jsxs)("div",{className:"tb_hc_post_info",children:[o?(0,h.jsx)("div",{className:"tb_hc_username",children:i}):"",l?(0,h.jsx)(x.default,{sepClass:"tb_hc_seprator"}):"",s.timeStatus?(0,h.jsx)(b.default,{createdAt:e.createdAt,timeClass:`tb_hc_time tb-cTBfont-${s.author.variant}`}):""]})]}),c?(0,h.jsx)("div",{className:"tb_hc_social_",children:(0,h.jsx)(g.default,{networkClass:"tb_hc_social_ico",networkId:r,iconStyle:s.icon})}):null]})};var w=s(65859),v=s(72685),S=s(56071);class j extends a.PureComponent{constructor(t){super(t),this.contentRef=t=>{this.setState({height:t})},this.contentRefHidden=t=>{this.setState({hiddenHeight:t})},this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this)}render(){const{Post:t,CardStyle:e,index:s,ThemeInfo:a,onClickToCTA:n,ThemeStyle:r}=this.props,l=1!==t.type,c=!!(t.rating&&t.rating>0),d=t.rating>0?"tb_hc_rating_content":"tb_hc_content",b=1===t.type?"tb_hc_text_post":"",g=1===t.type&&String(t.content).length>0&&e.style.textDecoration?"tb_hc_text_decoration":"",f=!!t.cta.status,x=e.content.trimcontent?(0,o.Ex)(t.content.text,140):t.content.text;return(0,h.jsx)(S.A,{children:o=>{let{ref:S,inView:j}=o;return(0,h.jsx)("div",{id:`tb_hc_id-${t.id}`,className:"tb_hc_post_wrapper",ref:S,style:{padding:e.style.padding/2},role:"article","aria-label":`Post ${parseInt(s)+1},${x}`,children:(0,h.jsxs)("div",{className:"tb_hc_post_in",role:"button","aria-label":"Popup",tabIndex:0,children:[t.share.status?(0,h.jsx)(v.default,{share:t.share,shareClass:"tb_hc_share_container",Post:t,ThemeInfo:a}):"",l?(0,h.jsx)(_,{Post:t,CardStyle:e,ThemeInfo:a,ThemeStyle:r,index:s,inView:j}):null,(0,h.jsxs)("div",{className:`tb_hc_contant_wrapper ${b}`,children:[(0,h.jsx)(y,{Post:t,CardStyle:e,inView:j}),f?(0,h.jsx)("div",{className:"tb_hc_post_cta",onClick:t=>{t.stopPropagation()},children:(0,h.jsx)(p.default,{ctaClass:"tb_hc_post_cta_btn",Post:t,onClickToCTA:n})}):"",c?(0,h.jsx)("div",{className:"tb_hc_rating__",children:(0,h.jsx)(u.A,{rating:t.rating,networkId:t.networkId,ThemeID:a.id})}):null,e.content.status||1==t.type?(0,h.jsx)("div",{className:"tb_hc_content_wrapper__",children:(0,h.jsx)(w.default,{contentClass:`${d}${g}`,Post:t,content:x,CardStyle:e,contentTitle:t.content.title})}):null]}),i.HY?e.actionStatus?(0,h.jsx)(m.A,{Post:t,CardStyle:e,actionClass:"tb_hc_social_action__"}):null:""]})})}})}}s(61038);var C=s(76506),N=s(21850);class T extends a.Component{constructor(t){super(t),this.state={windowWidth:document.getElementById(C.S2)&&document.getElementById(C.S2).clientWidth?document.getElementById(C.S2).clientWidth:window.innerWidth,sliderHeight:300},this.onScreenLoad=()=>{const{renderId:t}=this.props.renderId;this.setState({windowWidth:t&&document.getElementById(t)?document.getElementById(t).clientWidth:document.getElementById(C.S2)&&document.getElementById(C.S2).clientWidth?document.getElementById(C.S2).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:t,ThemeInfo:e,ThemeStyle:s,preRender:a,hasMoreData:n,nextData:r}=this.props;!this.state.loadData&&this.updatepost(0),n&&r(i.HY?e.webId:e.wallId,Math.floor(Date.now()/1e3),s.totalPosts,t.networkID,t.after,a,t.heightEvent)},this.updatepost=t=>{this.state.loadData||(this.setState({loadData:!0}),setTimeout((()=>this.props.loadMoredata()),1e3*t))},this.handleKeyPress=t=>{try{const{ThemeStyle:s}=this.props;if(1==s.slide.autoSlide){if(!["INPUT","TEXTAREA"].includes(t.target.tagName)&&"Space"===t.code){const{parentID:s}=this.props;t.preventDefault();var e=this.inputRefs[s].splide.Components.Autoplay;e.isPaused()?e.play():e.pause()}}}catch(s){}},this.reScrolled=()=>{setTimeout((()=>{let t=document.querySelector(".splide__list"),e=document.querySelector(".splide__slide").offsetWidth;const s=document.querySelectorAll(".splide__slide.is-visible").length,a=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),n=Number(a)+(s-1)+s;n>0?(t.style.transition="0s ease",t.style.transform=`translateX(-${n*e}px)`):t.style.transform="translateX(0px)"}),200)},this.autoScrollSlider=t=>{const{ThemeStyle:e}=this.props,s=e.autoScrollStatus;if(t.on("drag",(()=>{this.isDragging=!0,!this.state.loadData&&this.updatepost(0)})),t.on("move",(()=>{!this.state.loadData&&!this.isDragging&&this.updatepost(3)})),1==s){const e=t.index;t.length-e===t._o.perPage&&this.requestData()}},this.state={loadData:!1},this.inputRefs={},this.isDragging=!1}UNSAFE_componentWillMount(){this.onScreenLoad()}componentDidMount(){var t=document.querySelector(".tb_hc_post_slider"),e=t?t.offsetHeight:this.state.height;setTimeout((()=>{this.setState({sliderHeight:e});const t=document.querySelectorAll(".splide__slide");t&&t.forEach((t=>{t.removeAttribute("aria-hidden"),t.removeAttribute("role")}))}),100);const{postData:s}=this.props;if(s&&1==s.length){let n=document.querySelector(".tb_hc_arrow_left__"),r=document.querySelector(".tb_hc_arrow_right__");function i(){setTimeout((()=>{let t=document.querySelector(".splide__list");null!=t&&(t.style.transform="translateX(0)")}),100)}n&&r&&(n.style="display:none",r.style="display:none"),document.body.addEventListener("click",(function(){i()})),i(),window.addEventListener("resize",i)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let a=document.querySelector("#kt_aside_toggle");null!=a&&a.addEventListener("click",this.reScrolled),window.addEventListener("keydown",this.handleKeyPress)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}componentDidUpdate(){var t=document.querySelector(".tb_hc_post_slider"),e=t?t.offsetHeight:this.state.height;e+15!=this.state.sliderHeight&&setTimeout((()=>{this.setState({sliderHeight:e+15})}),100)}render(){const{postData:t,completeDataObject:e,CardStyle:s,ThemeStyle:a,ThemeInfo:n,cardNumber:l,parentID:c,onClickToCTA:d,handlePressStart:_,handlePressEnd:p}=this.props,{sliderHeight:u}=this.state,m=c,{windowWidth:b}=this.state,g=a.totalPosts,f=a.column.desktop,x=a.column.mobile,y=a.slide.autoSlide&&!i.HY,w=a.slide.slideDuration,v=a.autoScrollStatus,S=1===s.content.trimcontent,C=!!(b<768||(0,o.qs)()),N=g>parseInt(l)?parseInt(l):g,T=t&&t.length?C?1:t.length>N?N:t.length:3,I=t&&t.length?C?1:t.length>N?N:t.length:4,k={},P=1!=v?!Object.keys(k).length&&"slide":"slide",D=T!=t.length&&I!=t.length||Object.keys(k).length?t:Array(2).fill(t).flat(),E=!!S,A={...k,type:1!==v&&P,role:"article",label:"social widget",rewind:!0,speed:1e3,loop:1!==v,interval:y?1e3*w:5e3,perPage:this.props.tuchMobile?1:f>0?f:C?1:t.length>N?N:t.length,gap:0,perMove:!1,autoplay:!!y,padding:"0",pagination:!1,arrows:!!C||t.length>=(f>0?f:I),fixedHeight:E,breakpoints:{560:{perPage:x>0?x:1,perMove:x>0?x:1,arrows:t.length>=(x>0?x:1)},767:{perPage:f>0?f-3<1?f:f-3:T,arrows:t.length>=(f>0?f-3<1?f:f-3:T)},991:{perPage:f>0?f-4<1?f:f-4:T,arrows:t.length>=(f>0?f-4<1?f:f-4:T)},1200:{perPage:f>0?f-1==0?f:f-1:T,arrows:t.length>=(f>0?f-1==0?f:f-1:T)},1600:{perPage:f>0?f:I,arrows:t.length>=(f>0?f:I)}}};return(0,h.jsxs)(h.Fragment,{children:[""!=c?(0,h.jsx)("div",{className:"tb_hc_post_container",ref:this.sliderHeight,style:{minHeight:u&&NaN!=u?u:""},children:(0,h.jsxs)(r.eB,{hasTrack:!1,className:"tb_hc_post_slider "+(E?"tb_hc_fixed_height":""),options:A,ref:t=>this.inputRefs[m]=t,tag:"section",onMove:this.autoScrollSlider,children:[(0,h.jsx)(r.v9,{children:D&&D.length>0&&D.map(((t,i)=>{const o=e[t];return(0,h.jsx)(r.Nn,{"data-id":o.id,onMouseDown:_,onMouseUp:t=>p(t,i,o),onTouchStart:_,onTouchEnd:t=>p(t,i,o),p_id:c,className:`tb_${o.id}`,children:(0,h.jsx)(j,{onClickToCTA:d,Post:o,index:i,CardStyle:s,ThemeStyle:a,ThemeInfo:n})},i)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--prev tb_hc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--next tb_hc_arrow_right__ tb__icon tb-arrow-right-alt","aria-labelledby":"Navigation Next Slide",onClick:i.HY?this.requestData:null,children:" "})]})]})}):null," "]})}}const I=(0,a.memo)((0,n.Ng)("",(t=>({nextData:(e,s,a,n,r,i,o,l)=>t((0,N.wF)(e,s,a,n,r,i,o,l))})))(T))},43488:(t,e,s)=>{"use strict";var a=s(93959);function n(){}function r(){}r.resetWarningCache=n,t.exports=function(){function t(t,e,s,n,r,i){if(i!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:n};return s.PropTypes=s,s}},11942:(t,e,s)=>{t.exports=s(43488)()},93959:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},61038:()=>{},95098:()=>{}}]);