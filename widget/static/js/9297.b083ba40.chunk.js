"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9297],{99297:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var s=a(88094),i=a(90414),r=a(40329),o=a(16371),n=a(16198),l=a(49472),d=a(42682),c=a(15678);const p=e=>{let{product:t,wall:a,onsetProductImg:i,openAddtocart:r,item:o,setOnProductDetails:n}=e;const{ThemeInfo:p,ProductSetting:u}=a,[h,m]=(0,s.useState)(!1),[g,P]=(0,s.useState)(!1),w=e=>(0,d.hq)({type:1,action:2,wall:p.webId,product_id:e.id,post:o.referenceId,owner:p.ownerId,feed:o.feedId,currency:e.currency,price:e.discount>0?e.discount:e.price}),x=u.Button,v=e=>{const{Button:t}=u;var a=e;2==parseInt(t.newTab)?window.parent.location.href=a:window.open(a,"_blank")};return(0,c.jsxs)("div",{className:"tb_rpp_pro "+(h?"ts_reelTheme_No_Product":""),children:[h?null:(0,c.jsx)("div",{className:"tb_rpp_pro_img",children:(0,c.jsx)("img",{src:t.image,alt:"",onError:()=>m(!0)})}),(0,c.jsxs)("div",{className:"tb_rpp_pro_cont",children:[(0,c.jsx)("div",{className:"tb_rpp_pro_title",children:t.title}),t.price>0||t.discount>0?(0,c.jsxs)("div",{className:"tb_rpp_p_wrap",children:[(0,c.jsxs)("div",{className:"tb_rpp_p",children:[t.currency,t.discount>0?t.discount:t.price]}),0==t.discount||t.price==t.discount?(0,c.jsx)(c.Fragment,{}):(0,c.jsxs)("div",{className:"tb_rpp_p tb_rpp_d_p",children:[t.currency,t.price]})]}):null,(0,c.jsxs)("div",{className:"tb_rpp_btn"+(g?" tb_rpp_btn_spinner":""),disabled:g,onClick:()=>{(async()=>{P(!0);const e={};if(t&&t.url)try{var s;if(140717==p.ownerId||1==(null===u||void 0===u||null===(s=u.Button)||void 0===s?void 0:s.pdp_target))v(t.url),i(t.image),P(!1),w(a);else{const s="magento"==t.createdFrom||!1;""!=t.createdFrom?(0,l.YS)(t.url,s,{productId:t.sku,storeId:t.storeId}).then((a=>{var o;if(s&&0==a.status)e[t.id]={data:{available:!0},showCart:140717!==p.ownerId};else{var l;const i=s&&(null===a||void 0===a||null===(l=a.data)||void 0===l?void 0:l.data)||(null===a||void 0===a?void 0:a.data),r=s?{available:!0}:{};e[t.id]={data:null!==i&&void 0!==i&&i.id?{...i,...r}:null,showCart:(null===i||void 0===i?void 0:i.id)&&140717!==p.ownerId}}i(null!==a&&void 0!==a&&null!==(o=a.data)&&void 0!==o&&o.featured_image?a.data.featured_image:t.image),P(!1),n(e),r(t.id,t)})).catch((e=>{console.log("error",e),v(t.url),i(t.image),P(!1),w(a)})):(v(t.url),i(t.image),P(!1),w(a))}}catch(o){console.log("error",o),v(t.url),P(!1)}})()},children:[x.text," "]})]})]})},u=(0,s.memo)(p),h=s.lazy((()=>Promise.all([a.e(4076),a.e(9782)]).then(a.bind(a,49782)))),m=s.lazy((()=>Promise.all([a.e(5740),a.e(4027)]).then(a.bind(a,6570)))),g=s.lazy((()=>Promise.all([a.e(4076),a.e(36)]).then(a.bind(a,60036)))),P=e=>{const{Post:t,muted:a,autoPlay:i,index:o,wallID:n}=e,l=!1;return(0,c.jsx)("div",{className:"tb_rp_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",style:{minHeight:window.innerHeight},children:t.mediaList&&t.mediaList.length>0?(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(g,{Post:t,...e})}):[2,4].includes(t.type)||!i?(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(h,{ImageClass:"tb_rp_image",Post:t,size:l,hotspot:r.HY})}):[3,5].includes(t.type)?(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(m,{VideoClass:"tb_rp_video",Post:t,size:l,wallID:n,isCover:!0,controls:!1,autoPlay:i,muted:a,handleVideoEnded:()=>{},index:o})}):null})},w=(0,s.memo)(P);var x=a(33578),v=a(8159);function _(e){e.style.setProperty("visibility","visible","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("display","flex","important"),e.style.setProperty("transform","none","important"),e.style.setProperty("clip-path","initial","important"),e.style.setProperty("border","none","important")}class D extends s.PureComponent{render(){return(0,c.jsx)("a",{href:v.om,target:"_blank",ref:e=>{e&&(e.style.setProperty("margin-right","15px","important"),e.style.setProperty("width","90px","important"),e.style.setProperty("height","auto","important"),_(e))},children:(0,c.jsx)("img",{ref:e=>{e&&(e.style.setProperty("width","100%","important"),e.style.setProperty("height","auto","important"),_(e))},src:`${v.th}/media/logo/tagshop-branding.svg`})})}}var I=a(69819);a(12755);const S=e=>{var t,a,i,r;let{wall:o,item:n,onsetProductImg:l,openAddtocart:d,setOnProductDetails:p,isFreePlan:h,index:m,currentVideo:g,muteToggle:P,muted:v}=e;const _=!(![3,5].includes(n.type)||!g),{ThemeInfo:S,ProductSetting:b}=o,[y,C]=(0,s.useState)(0),j=e=>(0,c.jsx)(x.RC,{autoHeight:!0,speed:400,edgeSwipeDetection:!0,slidesPerView:e.products&&e.products.length>1?1.3:1,touchRatio:2,spaceBetween:0,mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,direction:"horizontal",modules:[I.dK],pagination:{clickable:!0},className:"tb_rpp_wrap",children:e.products&&e.products.map(((e,t)=>(0,c.jsx)(x.qr,{children:(0,c.jsx)(u,{product:e,openAddtocart:d,onsetProductImg:l,wall:o,item:n,setOnProductDetails:p})},t)))});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(w,{Post:n,wallID:S.wallId,onUpdateProdImgIdx:e=>{C(e)},ownerId:S.ownerId,ThemeID:S.id,wall:o,muted:v,autoPlay:_,index:m}),(0,c.jsxs)("div",{className:"tb_rp_content",children:[b&&n.isProduct?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(j,{products:null!==(t=n.mediaList)&&void 0!==t&&t.length?null!==(a=n.mediaList)&&void 0!==a&&null!==(i=a[y])&&void 0!==i&&null!==(r=i.product)&&void 0!==r&&r.length?n.mediaList[y].product:[]:n.products})," "]}):null,_?(0,c.jsx)("div",{className:"tb_rp_mute_btn",onClick:P,children:(0,c.jsx)("div",{className:"tb__icon tb-"+(v?"mute":"unmute"),children:(0,c.jsx)("div",{})})}):null,S.branding&&1==S.branding||h?(0,c.jsx)(D,{wallId:S.wallId,themeID:S.id}):null]})]})},b=(0,s.memo)(S);var y=a(19066);class C extends s.Component{constructor(e){var t;super(e),this.setMuted=()=>this.setState({muted:!this.state.muted}),this.setOnProductDetails=e=>this.setState({allProductDetails:e}),this.onMediaUpdate=()=>this.setState({isAuthorImagevalid:!1}),this.onAddToCart=(e,t,a)=>{const{wall:s}=this.props;setTimeout((()=>{this.setState({addCartSetTime:!0})}),100);const i={type:1,action:2,wall:s.ThemeInfo.webId,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:s.ThemeInfo.ownerId,product_id:t.id,currency:t.price,price:t.discount>0?t.discount:t.price};this.setState({addtoCartPopup:!0,selectedProductDetails:this.state.allProductDetails[e],tagshopProductDeatil:{...t,trackingData:i}})},this.requestData=()=>{const{wall:e,appendData:t,hasMoreData:a,loaderData:s}=this.props,i=e.ThemeStyle.totalPosts,o=Math.floor(Date.now()/1e3);a&&!s.isShowMoreLoading&&this.props.nextData(r.HY?e.ThemeInfo.webId:e.ThemeInfo.wallId,o,i,t.networkID,t.after,t.heightEvent)},this.onItemChange=e=>this.setState({item:e}),this.currentSwiperSlide=e=>{this.props.hasMoreData&&e.progress>.9&&this.requestData(),this.onPopUpTrack(e.activeIndex)},this.onPopUpTrack=e=>{try{const{wall:t,completeData:a}=this.props,{ThemeInfo:s}=t;let i=a[e]?a[e]:null;if(i){const e={feed:i.feedId,post:i.referenceId?i.referenceId:i.id},t={action:2,wall:s.webId,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,type:3,owner:s.ownerId};(0,d.hq)(r.Qy?t:{action:2,wall:s.webId,...e,owner:s.ownerId})}}catch(t){console.log("Error in PopUp Tracking",t)}},this.startSwiperSlide=e=>this.setState({activeSlide:e.activeIndex}),this.onClickClosePopUp=e=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null,addCartSetTime:!1}),this.onClickCheckOut=e=>this.setState({addtoCartPopup:!0,continueShopping:!1}),this.sliderRef=s.createRef(),this.state={currentIndex:null===(t=this.props)||void 0===t?void 0:t.currentIndex,item:this.props.item,windowWidth:window.innerWidth,isAuthorImagevalid:!0,isHotspot:!1,addtoCartPopup:!1,allProductDetails:null,selectedProductId:null,selectedProductDetails:null,continueShopping:!1,selectedVariant:null,showAddToCart:!1,productLoading:!0,productImg:"",tagshopProductDeatil:null,muted:!1,activeSlide:0,addCartSetTime:!1,selectedProdDetails:null,tagProdDetail:null},this.splideRef=s.createRef()}componentDidMount(){const{currentIndex:e,item:t}=this.props,a=(0,y.hz)(t.author.picture);this.setState({currentIndex:e,item:t,isAuthorImagevalid:a})}UNSAFE_componentWillReceiveProps(e){const{currentIndex:t,item:a}=e,s=(0,y.hz)(a.author.picture);this.setState({currentIndex:t,item:a,isAuthorImagevalid:s})}render(){const{onClosePopUp:e,slideWithArrowKeys:t,wall:a,completeData:s,isFreePlan:i}=this.props,{currentIndex:r,item:l,addtoCartPopup:d,selectedProductDetails:p,continueShopping:u,productImg:h,tagshopProductDeatil:m,addCartSetTime:g,muted:P}=this.state;return(0,c.jsxs)("div",{className:`modalId${l.id} tb_rp_modal ${g?"tb_rp_add_cart_m":""}`,onKeyDown:t,onKeyPress:t,onLoad:t,onClick:t=>t.currentTarget==t.target&&e(t),children:[(0,c.jsxs)("div",{className:"tb_rp_dialog",children:[d||u?null:(0,c.jsx)("div",{className:"tb_reel_close_btn",onClick:e,children:(0,c.jsx)("div",{className:"tb__icon tb-close-thin",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("div",{className:"tb_time_line_wrap",children:(0,c.jsx)("div",{className:"tb_time_line",children:(0,c.jsx)("div",{})})}),(0,c.jsx)(x.RC,{ref:this.splideRef,direction:"vertical",height:`${window.innerHeight}`,initialSlide:r,passiveListeners:!0,mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,onSlideChange:e=>this.currentSwiperSlide(e),onSwiper:e=>this.startSwiperSlide(e),children:s&&s.length>0?s.map(((t,s)=>(0,c.jsx)(x.qr,{children:r=>{let{isActive:o}=r;return(0,c.jsx)(b,{currentVideo:o,onClosePopUp:e,wall:a,item:t,openAddtocart:(e,a)=>this.onAddToCart(e,a,t),onsetProductImg:e=>this.setState({productImg:e}),setOnProductDetails:this.setOnProductDetails,isFreePlan:i,muteToggle:this.setMuted,muted:P},`${t.id}-${s}`)}},`${t.id}-${s}`))):(0,c.jsx)(c.Fragment,{})})]}),d&&p?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"tb_rp_cart_overlay",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_rp_cart_modal",children:(0,c.jsxs)("div",{className:"tb_rp_cart_body",children:[(0,c.jsx)("div",{className:"ts_reel_close_btn tb_reel_close_btn",onClick:d&&!u?this.onClickClosePopUp:u?e=>this.setState({addtoCartPopup:!0,continueShopping:!1}):null,children:(0,c.jsx)("div",{className:"tb__icon tb-close-thin",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("div",{className:"tb_rp_cart_wrap",children:p&&Object.keys(p).length>0?"magento"==(null===m||void 0===m?void 0:m.createdFrom)?(0,c.jsx)(o.A,{productImg:h,addtoCartPopup:d,productDetails:p,tagshopProductDeatil:m,closeCart:e=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null}),onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:e=>this.setState({selectedVariant:e}),wall:a,closePopUp:this.props.onClosePopUp}):(0,c.jsx)(n.A,{productImg:h,addtoCartPopup:d,productDetails:p,tagshopProductDeatil:m,closeCart:e=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null}),onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:e=>this.setState({selectedVariant:e}),wall:a,closePopUp:this.props.onClosePopUp}):null})]})})]}):null]})}}const j=(0,i.Ng)((e=>{const{appData:t}=e;return{loaderData:e.loaderData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||0!=t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(e=>({nextData:(t,a,s,i,r,o,n)=>e((0,d.wF)(t,a,s,i,r,o,n))})))((0,s.memo)(C));var f=a(30784);class T extends s.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,imgData:[]},this.closeCommercePopUP=e=>{this.setState({isEnable:0,currentIndex:null},(()=>this.props.closePopUP()));var t=document.getElementsByTagName("html");t&&t[0]&&(t[0].style.overflow="")},this.getCommercePopUPEvent=e=>{null!==e&&void 0!==e&&e.card&&this.setState({url:"",isEnable:1,eventData:e,currentIndex:e.index,completeData:e.idArray,viewOnText:e.viewOnText,shareText:e.shareText,windowParent:e,imgData:e.imgData,personalization:e.personalization},(()=>this.CommercePopUPSlideWithArrowKey()))},this.featuredPopSliderChangeIndex=e=>this.updateCurrentInde(e),this.SliderWithKey=e=>this.updateCurrentInde(e),this.updateCurrentInde=e=>{const{eventData:t}=this.state;-1===e?this.setState({currentIndex:t.idArray.length-1}):this.setState({currentIndex:t.idArray.length===e?0:e})},this.CommercePopUPSlideWithArrowKey=e=>{const{personalization:t}=this.state;if(t&&1===t.popupSlideShow){let t=this;(e=e||window.event)&&e.keyCode&&void 0!==e.keyCode&&(37===e.keyCode?t.SliderWithKey(t.state.currentIndex-1):39===e.keyCode?t.SliderWithKey(t.state.currentIndex+1):27===e.keyCode&&this.closeCommercePopUP())}}}componentDidMount(){const{data:e}=this.props;this.getCommercePopUPEvent(e);var t=document.getElementsByTagName("html");t&&t[0]&&(t[0].style.overflow="hidden")}componentDidUpdate(e){this.props.data!==e.data&&this.getCommercePopUPEvent(this.props.data)}UNSAFE_componentWillReceiveProps(e){const{postData:t}=e;let{completeData:a,eventData:s}=this.state;if(a.length!=t.postData.length){let e=t.postData.map((e=>t.completeDataObject[e])).filter((e=>!String(e.id).includes("free_add_")));s.idArray=e,this.setState({completeData:e,eventData:s},(()=>{const{currentIndex:e}=this.state;this.setState({currentIndex:e+1})}))}}render(){const{viewOnText:e,isEnable:t,currentIndex:a,personalization:s,completeData:i,eventData:r,url:o,imgData:n}=this.state,{postData:l,wall:d,webFilters:p}=this.props;let u=null;return u=-1===a?i[r.idArray.length-1]:i[a],1===t&&d&&Object(i||{}).length>0?(0,c.jsx)(j,{webFilters:p,wall:d,item:u,completeData:i,onClosePopUp:this.closeCommercePopUP,currentIndex:a,personalization:s,viewOnText:e,slideWithArrowKeys:this.CommercePopUPSlideWithArrowKey,featuredPopSliderChangeIndex:this.featuredPopSliderChangeIndex,hostUrl:o,imgData:n,isFreePlan:l&&l.isFreeAdsStatus}):null}}const k=(0,i.Ng)((e=>({wall:e.appData.wall,webFilters:e.appData.webFilters})),(e=>({closePopUP:t=>e((0,f.ng)(t))})))(T)}}]);