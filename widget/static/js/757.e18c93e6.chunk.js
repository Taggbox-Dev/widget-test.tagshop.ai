"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[757,3538,4897,7278],{19160:(e,t,i)=>{i.d(t,{A:()=>n});var r=i(65043),s=i(78250),a=i(65281),o=i(70579);class n extends r.PureComponent{constructor(e){super(e),this.onLoad=e=>1==e.target.getAttribute("data-load")&&this.setState({imgUrl:e.target.src,loadError:!1}),this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.media}}UNSAFE_componentWillReceiveProps(e){const{itemDetails:t}=e,{loadError:i}=this.state;i&&e!=this.props&&t&&Object.keys(t).length&&t.showCart&&this.setState({imgUrl:t.data.featured_image,loadError:!1})}render(){const{ImageClass:e}=this.props,{imgUrl:t,paddingBottom:i}=this.state,r={paddingBottom:`${i}%`};return(0,o.jsx)("div",{className:`${e}_wrap`,style:r,children:(0,o.jsx)("img",{className:e,role:"img",src:t,height:300,width:300,onLoad:this.onLoad,onError:e=>{this.setState({loadError:!0}),e.target.src=s.qF},alt:(0,a.wG)(t)})})}}},77278:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});var r=i(65043),s=i(97628),a=i(70579);class o extends r.PureComponent{render(){const{author:e,authorClass:t,networkId:i,size:r,inView:o}=this.props;return(0,a.jsx)("div",{className:t,style:{overflow:4==i?"visible":""},children:o?(0,a.jsx)("img",{className:`${t}__`,src:e.picture,"aria-label":"author",alt:e.name,width:r||44,height:r||44,onError:t=>{const r=(0,s.Yo)(i),a="#ffffff"==r?"000":r.replace("#","");t.target.src=e.errorPic?e.errorPic:`https://ui-avatars.com/api/?name=${e.name.replace(/\s/g,"")}&background=${a}&color=fff&length=1`}}):null},Math.random())}}},43538:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var r=i(65043),s=i(65281),a=i(70579);const o=e=>{const{createdAt:t,timeClass:i}=e;return(0,a.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,s.fF)(t)}`,children:(0,s.fF)(t)})},n=(0,r.memo)(o)},69993:(e,t,i)=>{i.r(t),i.d(t,{default:()=>P});var r=i(65043),s=i(83003),a=i(74975),o=i(50050),n=(i(61964),i(92908)),l=i(22030),d=i(26165),c=i(36671),p=i(69433),u=i(77822),m=i(70579);const _=e=>{let{Post:t,ThemeStyle:i,CardStyle:r,index:s,inView:a}=e;const o=!(![3,5].includes(t.type)||1!==i.autoPlay||!a);return(0,m.jsxs)("div",{className:"tb_rtp_media_wrap",children:[o&&1==r.viewCountStatus&&(null===t||void 0===t?void 0:t.count.views)>0?(0,m.jsx)(u.A,{count:null===t||void 0===t?void 0:t.count.views}):null,o?(0,m.jsx)(p.A,{VideoClass:"tb_rtp_video",Post:t,size:1,isCover:!0,muted:!0,autoPlay:!0,index:s,inView:a}):(0,m.jsx)(c.A,{ImageClass:"tb_rtp_image",Post:t,size:1,index:s,inView:a})]})};var h=i(19160);const b=(e,t)=>{if(0!=e){if(t>0&&t<e){let i=(e-t)/e*100;return i>0?`${i.toFixed()}%`:""}return!1}return!1},g=e=>{let{Post:t,ProductSetting:i}=e;const r=t.products,{Price:s,ProductTitle:n}=i,l=!(!r||1!=r.length);return(0,m.jsx)("div",{className:"tb_rtp_wrap",id:`slide-${t.id}`,children:(0,m.jsxs)("div",{className:"tb_rtp_wrap_in tb_swiper",children:[(0,m.jsx)(a.RC,{id:`product_slide-${t.id}`,modules:[o.dK,o.Vx],spaceBetween:10,navigation:{prevEl:`#tb_rtn_prev-${t.id}`,nextEl:`#tb_rtn_next-${t.id}`},children:r.map(((e,t)=>(0,m.jsx)(a.qr,{children:(0,m.jsxs)("div",{className:"tb_rtp",children:[(0,m.jsx)("div",{className:"tb_rtp_media",style:{opacity:e.image?1:0},children:(0,m.jsx)(h.A,{ImageClass:"tb_rtp_img",media:e.image,size:!1,itemDetails:""})}),(0,m.jsx)("div",{className:"tb_rtp_title_w",children:e.title?(0,m.jsx)("div",{className:`tb_rtp_title tb-cTBfont-${n.variant}`,children:e.title}):null}),e.price>0||e.discount>0?(0,m.jsxs)("div",{className:"tb_rtp_price_wrap",children:[(0,m.jsxs)("div",{className:`tb_rtp_price tb-cTBfont-${s.variant}`,children:[e.currency,e.discount>0?e.discount:e.price]}),e.discount>0&&e.discount!=e.price?(0,m.jsxs)("div",{className:`tb_rtp_d_price tb-cTBfont-${s.variant}`,children:[e.currency,e.price]}):null,b(Number(e.price),Number(e.discount))&&""!=b(Number(e.price),Number(e.discount))?(0,m.jsx)("div",{className:"tb_rtp_dp",children:b(Number(e.price),Number(e.discount))}):null]}):null]},t)},t)))}),l?null:(0,m.jsxs)("div",{className:"tb_rtn_wrap",onClick:e=>{e.stopPropagation()},children:[(0,m.jsx)("div",{id:`tb_rtn_prev-${t.id}`,className:"tb_rtn_btn tb_rtn_btn_left tb__icon tb-arrow-left-alt",children:(0,m.jsx)("div",{})}),(0,m.jsx)("div",{id:`tb_rtn_next-${t.id}`,className:"tb_rtn_btn tb_rtn_btn_right tb__icon tb-arrow-right-alt",children:(0,m.jsx)("div",{})})]})]})})};var x=i(77278),v=i(43538);const w=e=>{let{Post:t,CardStyle:i,ProductSetting:r,inView:s}=e;const{author:a,networkId:o}=t,{ProductTitle:n}=r,d=!(!i.author.status||(0,l.zK)(a.name));return(0,m.jsx)("div",{className:"tb_rtp_wrap",children:(0,m.jsxs)("div",{className:"tb_rtp_wrap_in",style:{marginTop:d?"":0},children:[d?(0,m.jsxs)("div",{className:"tb_rtp_media",children:[(0,m.jsx)(x.default,{networkId:o,author:a,authorClass:"tb_rtp_a_img",inView:s},a.username)," "]}):"",d?(0,m.jsx)("div",{className:"tb_rtp_title_w",children:(0,m.jsx)("div",{className:`tb_rtp_authorname tb-cTBfont-${n.variant}`,children:a.username&&a.username.length>0?`${a.username}`:""})}):"",i.timeStatus?(0,m.jsx)(v.default,{createdAt:t.createdAt,timeClass:`tb_rtp_time tb-cTBfont-${i.author.variant}`}):""]})})};var f=i(43702);class y extends r.PureComponent{constructor(e){super(e),this.mediaHeight=r.createRef()}componentDidMount(){const{Post:e,itemIndex:t,onClickPopUpSlider:i}=this.props;(0,l._7)(this.mediaHeight),e.isPopUp&&i(t,e)}render(){const{itemIndex:e,ThemeStyle:t,CardStyle:i,Post:r,ProductSetting:s,sliderHeight:a,clickToShowPopUp:o,index:l}=this.props,{style:d}=i,c={backgroundColor:d.background,minHeight:a};[3,5].includes(r.type);return(0,m.jsx)(f.A,{children:a=>{let{ref:p,inView:u}=a;return(0,m.jsx)("div",{"data-id":r.id,id:`tb_rt_id-${r.id}`,className:"tb_rtp_post_wrapper",onClick:o(e,r),style:{padding:d.padding/2,opacity:u?1:0,transition:u?"opacity .5s ease-in-out":""},"tb-product":r.isShopIcon?1:r.isHotspot?2:0,"area-label":r.content.text,role:"article",ref:p,"post-id":r.referenceId?r.referenceId:r.id,"feed-id":r.feedId,children:(0,m.jsxs)("div",{className:"tb_rtp_post_in tb_icon_animate "+(n.HY?"":"tb_rtp_post_in_animate"),style:c,role:"button","aria-label":"Popup",tabIndex:0,ref:this.mediaHeight,children:[(0,m.jsx)(_,{Post:r,CardStyle:i,ThemeStyle:t,index:l,inView:u}),n.HY?null:(0,m.jsx)("div",{className:"tb_rtp_play_ico",children:(0,m.jsx)("div",{className:"tb__icon tb-play",children:(0,m.jsx)("div",{})})}),r.isProduct?(0,m.jsx)(g,{Post:r,ProductSetting:s},`product_slide${r.id}`):(0,m.jsx)(w,{Post:r,CardStyle:i,ThemeStyle:t,ProductSetting:s,inView:u})]})})}})}}const j=(0,r.memo)((e=>{const{postData:t,completeDataObject:i,clickToShowPopUp:s,hasMoreData:d,parentID:c,keyRender:p,containerSize:u,onClickPopUpSlider:_,CardStyle:h,ThemeStyle:b,ProductSetting:g,ThemeInfo:x,appendData:v,preRender:w,loaderData:f,nextData:j,loadMoredata:S,loadBranding:P}=e,k=(0,r.useRef)(null),N=(0,r.useRef)({}),[C,T]=(0,r.useState)(!1),I=(0,r.useCallback)((e=>{e.progress>.8&&d&&!f.isShowMoreLoading&&j(n.HY?x.webId:x.wallId,Math.floor(Date.now()/1e3),b.totalPosts,v.networkID,v.after,w,v.heightEvent)}),[d,f.isShowMoreLoading,j,x,b.totalPosts,v,w]),$=e=>{T(!0),setTimeout((()=>S()),1e3*e)};(0,r.useEffect)((()=>{const e=document.querySelectorAll(".splide__slide");if(e&&e.forEach((e=>{e.removeAttribute("aria-hidden"),e.removeAttribute("role")})),t&&1===t.length){const e=document.querySelector(".tb_rtp_arrow_left__"),t=document.querySelector(".tb_rtp_arrow_right__");e&&t&&(e.style.display="none",t.style.display="none")}P()}),[t]);const A=c,F=b.slide.autoSlide,D=b.slide.slideDuration,V=1===h.content.trimcontent,E=u.width>767?280:300,H=Math.max((u.width/E).toFixed(),1),R=(0,l.GH)(u.width,b.column,H);return(0,m.jsx)(m.Fragment,{children:c&&(0,m.jsx)("div",{className:"tb_rtp_post_container tb_swiper",ref:k,children:(0,m.jsx)(a.RC,{ref:e=>N.current[A]=e,onScroll:e=>{I(e),C||$(3)},onTouchMove:e=>{I(e),C||$(0)},onAutoplay:e=>{I(e),C||$(4)},speed:700,edgeSwipeDetection:!0,slidesPerView:R+.4,touchRatio:2,cssMode:(0,l.qs)(),passiveListeners:!0,freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:!!n.HY&&{delay:1===F?1e3*D:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!d,slideFullyVisibleClass:"tb-swiper-slide-fully-visible",mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[o.Ij,o.FJ,o.U1],className:"tb_rtp_post_slider "+(V?"tb_rtp_fixed_height":""),children:t&&t.length>0&&t.map(((e,t)=>{const r=i[e];return(n.HY||[3,5].includes(r.type))&&(0,m.jsx)(a.qr,{"data-id":r.id,style:{margin:0,padding:0},p_id:c,className:`tb_${r.id}`,children:e=>{let{isVisible:i}=e;return(0,m.jsx)(y,{isVisible:i,Post:r,index:t,clickToShowPopUp:s,CardStyle:h,ThemeStyle:b,ProductSetting:g,ThemeInfo:x,onClickPopUpSlider:_},t)}},`${r.id}-${t}`)}))},p)})})})),S={nextData:d.wF},P=(0,s.Ng)((e=>({loaderData:e.loaderData})),S)(j)},97628:(e,t,i)=>{i.d(t,{EC:()=>r,Oi:()=>a,Yo:()=>s});const r=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),s=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),a=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")}}]);
//# sourceMappingURL=757.e18c93e6.chunk.js.map