"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[757,3538,4897,7278],{19160:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(65043),s=r(78250),a=r(65281),o=r(70579);class n extends i.PureComponent{constructor(e){super(e),this.onLoad=e=>1==e.target.getAttribute("data-load")&&this.setState({imgUrl:e.target.src,loadError:!1}),this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.media}}UNSAFE_componentWillReceiveProps(e){const{itemDetails:t}=e,{loadError:r}=this.state;r&&e!=this.props&&t&&Object.keys(t).length&&t.showCart&&this.setState({imgUrl:t.data.featured_image,loadError:!1})}render(){const{ImageClass:e}=this.props,{imgUrl:t,paddingBottom:r}=this.state,i={paddingBottom:`${r}%`};return(0,o.jsx)("div",{className:`${e}_wrap`,style:i,children:(0,o.jsx)("img",{className:e,role:"img",src:t,height:300,width:300,onLoad:this.onLoad,onError:e=>{this.setState({loadError:!0}),e.target.src=s.qF},alt:(0,a.wG)(t)})})}}},43538:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var i=r(65043),s=r(65281),a=r(70579);const o=e=>{const{createdAt:t,timeClass:r}=e;return(0,a.jsx)("div",{className:r,role:"status","aria-label":`post timestamp ${(0,s.fF)(t)}`,children:(0,s.fF)(t)})},n=(0,i.memo)(o)},69993:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var i=r(65043),s=r(83003),a=r(74975),o=r(50050),n=(r(61964),r(92908)),l=r(22030),d=r(26165),c=r(36671),p=r(69433),u=r(77822),m=r(70579);const _=e=>{let{Post:t,ThemeStyle:r,CardStyle:i,index:s,inView:a}=e;const o=!(![3,5].includes(t.type)||1!==r.autoPlay||!a);return(0,m.jsxs)("div",{className:"tb_rtp_media_wrap",children:[o&&1==i.viewCountStatus&&(null===t||void 0===t?void 0:t.count.views)>0?(0,m.jsx)(u.A,{count:null===t||void 0===t?void 0:t.count.views}):null,o?(0,m.jsx)(p.A,{VideoClass:"tb_rtp_video",Post:t,size:1,isCover:!0,muted:!0,autoPlay:!0,index:s,inView:a}):(0,m.jsx)(c.A,{ImageClass:"tb_rtp_image",Post:t,size:1,index:s,inView:a})]})};var h=r(19160);const b=(e,t)=>{if(0!=e){if(t>0&&t<e){let r=(e-t)/e*100;return r>0?`${r.toFixed()}%`:""}return!1}return!1},g=e=>{let{Post:t,ProductSetting:r}=e;const i=t.products,{Price:s,ProductTitle:n}=r,l=!(!i||1!=i.length);return(0,m.jsx)("div",{className:"tb_rtp_wrap",id:`slide-${t.id}`,children:(0,m.jsxs)("div",{className:"tb_rtp_wrap_in tb_swiper",children:[(0,m.jsx)(a.RC,{id:`product_slide-${t.id}`,modules:[o.dK,o.Vx],spaceBetween:10,navigation:{prevEl:`#tb_rtn_prev-${t.id}`,nextEl:`#tb_rtn_next-${t.id}`},children:i.map(((e,t)=>(0,m.jsx)(a.qr,{children:(0,m.jsxs)("div",{className:"tb_rtp",children:[(0,m.jsx)("div",{className:"tb_rtp_media",style:{opacity:e.image?1:0},children:(0,m.jsx)(h.A,{ImageClass:"tb_rtp_img",media:e.image,size:!1,itemDetails:""})}),(0,m.jsx)("div",{className:"tb_rtp_title_w",children:e.title?(0,m.jsx)("div",{className:`tb_rtp_title tb-cTBfont-${n.variant}`,children:e.title}):null}),e.price>0||e.discount>0?(0,m.jsxs)("div",{className:"tb_rtp_price_wrap",children:[(0,m.jsxs)("div",{className:`tb_rtp_price tb-cTBfont-${s.variant}`,children:[e.currency,e.discount>0?e.discount:e.price]}),e.discount>0&&e.discount!=e.price?(0,m.jsxs)("div",{className:`tb_rtp_d_price tb-cTBfont-${s.variant}`,children:[e.currency,e.price]}):null,b(Number(e.price),Number(e.discount))&&""!=b(Number(e.price),Number(e.discount))?(0,m.jsx)("div",{className:"tb_rtp_dp",children:b(Number(e.price),Number(e.discount))}):null]}):null]},t)},t)))}),l?null:(0,m.jsxs)("div",{className:"tb_rtn_wrap",onClick:e=>{e.stopPropagation()},children:[(0,m.jsx)("div",{id:`tb_rtn_prev-${t.id}`,className:"tb_rtn_btn tb_rtn_btn_left tb__icon tb-arrow-left-alt",children:(0,m.jsx)("div",{})}),(0,m.jsx)("div",{id:`tb_rtn_next-${t.id}`,className:"tb_rtn_btn tb_rtn_btn_right tb__icon tb-arrow-right-alt",children:(0,m.jsx)("div",{})})]})]})})};var x=r(77278),v=r(43538);const w=e=>{let{Post:t,CardStyle:r,ProductSetting:i,inView:s}=e;const{author:a,networkId:o}=t,{ProductTitle:n}=i,d=!(!r.author.status||(0,l.zK)(a.name));return(0,m.jsx)("div",{className:"tb_rtp_wrap",children:(0,m.jsxs)("div",{className:"tb_rtp_wrap_in",style:{marginTop:d?"":0},children:[d?(0,m.jsxs)("div",{className:"tb_rtp_media",children:[(0,m.jsx)(x.default,{networkId:o,author:a,authorClass:"tb_rtp_a_img",inView:s},a.username)," "]}):"",d?(0,m.jsx)("div",{className:"tb_rtp_title_w",children:(0,m.jsx)("div",{className:`tb_rtp_authorname tb-cTBfont-${n.variant}`,children:a.username&&a.username.length>0?`${a.username}`:""})}):"",r.timeStatus?(0,m.jsx)(v.default,{createdAt:t.createdAt,timeClass:`tb_rtp_time tb-cTBfont-${r.author.variant}`}):""]})})};var f=r(43702);class y extends i.PureComponent{constructor(e){super(e),this.mediaHeight=i.createRef()}componentDidMount(){const{Post:e,itemIndex:t,onClickPopUpSlider:r}=this.props;(0,l._7)(this.mediaHeight),e.isPopUp&&r(t,e)}render(){const{itemIndex:e,ThemeStyle:t,CardStyle:r,Post:i,ProductSetting:s,sliderHeight:a,clickToShowPopUp:o,index:l}=this.props,{style:d}=r,c={backgroundColor:d.background,minHeight:a};[3,5].includes(i.type);return(0,m.jsx)(f.A,{children:a=>{let{ref:p,inView:u}=a;return(0,m.jsx)("div",{"data-id":i.id,id:`tb_rt_id-${i.id}`,className:"tb_rtp_post_wrapper",onClick:o(e,i),style:{padding:d.padding/2,opacity:u?1:0,transition:u?"opacity .5s ease-in-out":""},"tb-product":i.isShopIcon?1:i.isHotspot?2:0,"area-label":i.content.text,role:"article",ref:p,"post-id":i.referenceId?i.referenceId:i.id,"feed-id":i.feedId,children:(0,m.jsxs)("div",{className:"tb_rtp_post_in tb_icon_animate "+(n.HY?"":"tb_rtp_post_in_animate"),style:c,role:"button","aria-label":"Popup",tabIndex:0,ref:this.mediaHeight,children:[(0,m.jsx)(_,{Post:i,CardStyle:r,ThemeStyle:t,index:l,inView:u}),n.HY?null:(0,m.jsx)("div",{className:"tb_rtp_play_ico",children:(0,m.jsx)("div",{className:"tb__icon tb-play",children:(0,m.jsx)("div",{})})}),i.isProduct?(0,m.jsx)(g,{Post:i,ProductSetting:s},`product_slide${i.id}`):(0,m.jsx)(w,{Post:i,CardStyle:r,ThemeStyle:t,ProductSetting:s,inView:u})]})})}})}}const j=(0,i.memo)((e=>{const{postData:t,completeDataObject:r,clickToShowPopUp:s,hasMoreData:d,parentID:c,keyRender:p,containerSize:u,onClickPopUpSlider:_,CardStyle:h,ThemeStyle:b,ProductSetting:g,ThemeInfo:x,appendData:v,preRender:w,loaderData:f,nextData:j,loadMoredata:S,handlePressStart:P,handlePressEnd:k,loadBranding:N}=e,C=(0,i.useRef)(null),T=(0,i.useRef)({}),[I,$]=(0,i.useState)(!1),A=(0,i.useCallback)((e=>{e.progress>.8&&d&&!f.isShowMoreLoading&&j(n.HY?x.webId:x.wallId,Math.floor(Date.now()/1e3),b.totalPosts,v.networkID,v.after,w,v.heightEvent)}),[d,f.isShowMoreLoading,j,x,b.totalPosts,v,w]),E=e=>{$(!0),setTimeout((()=>S()),1e3*e)};(0,i.useEffect)((()=>{const e=document.querySelectorAll(".splide__slide");if(e&&e.forEach((e=>{e.removeAttribute("aria-hidden"),e.removeAttribute("role")})),t&&1===t.length){const e=document.querySelector(".tb_rtp_arrow_left__"),t=document.querySelector(".tb_rtp_arrow_right__");e&&t&&(e.style.display="none",t.style.display="none")}N()}),[t]);const F=c,D=b.column.desktop,V=b.column.mobile,R=b.slide.autoSlide,U=b.slide.slideDuration,H=1===h.content.trimcontent,M=u.width>767?260:280,B=Math.max((u.width/M).toFixed(),1),Y=u.width>767?D||B:V||B;return(0,m.jsx)(m.Fragment,{children:c&&(0,m.jsx)("div",{className:"tb_rtp_post_container tb_swiper",ref:C,children:(0,m.jsx)(a.RC,{ref:e=>T.current[F]=e,onScroll:e=>{A(e),I||E(3)},onTouchMove:e=>{A(e),I||E(0)},onAutoplay:e=>{A(e),I||E(4)},speed:700,edgeSwipeDetection:!0,slidesPerView:Y+.4,touchRatio:2,cssMode:(0,l.qs)(),passiveListeners:!0,freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:!!n.HY&&{delay:1===R?1e3*U:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!d,slideFullyVisibleClass:"tb-swiper-slide-fully-visible",mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[o.Ij,o.FJ,o.U1],className:"tb_rtp_post_slider "+(H?"tb_rtp_fixed_height":""),children:t&&t.length>0&&t.map(((e,t)=>{const i=r[e];return(n.HY||[3,5].includes(i.type))&&(0,m.jsx)(a.qr,{"data-id":i.id,onTouchStart:P,onTouchEnd:e=>k(e,t,i),style:{margin:0,padding:0},p_id:c,className:`tb_${i.id}`,children:e=>{let{isVisible:r}=e;return(0,m.jsx)(y,{isVisible:r,Post:i,index:t,clickToShowPopUp:s,CardStyle:h,ThemeStyle:b,ProductSetting:g,ThemeInfo:x,onClickPopUpSlider:_},t)}},`${i.id}-${t}`)}))},p)})})})),S={nextData:d.wF},P=(0,s.Ng)((e=>({loaderData:e.loaderData})),S)(j)},77278:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var i=r(65043),s=r(97628),a=r(70579);class o extends i.PureComponent{render(){const{author:e,authorClass:t,networkId:r,size:i,inView:o}=this.props;return(0,a.jsx)("div",{className:t,style:{overflow:4==r?"visible":""},children:o?(0,a.jsx)("img",{className:`${t}__`,src:e.picture,"aria-label":"author",alt:e.name,width:i||44,height:i||44,onError:t=>{const i=(0,s.Yo)(r),a="#ffffff"==i?"000":i.replace("#","");t.target.src=e.errorPic?e.errorPic:`https://ui-avatars.com/api/?name=${e.name.replace(/\s/g,"")}&background=${a}&color=fff&length=1`}}):null},Math.random())}}},97628:(e,t,r)=>{r.d(t,{EC:()=>i,Oi:()=>a,Yo:()=>s});const i=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),s=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),a=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")}}]);
//# sourceMappingURL=757.09690e4b.chunk.js.map