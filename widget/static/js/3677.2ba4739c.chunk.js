(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3677],{8494:(t,e,i)=>{"use strict";i.d(e,{bs:()=>r});var o=i(78250),a=i(23499),s=i(92908),n=i(95553),l=i(89652);let d=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:o,themeId:a}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(a))d.includes(t)||d.push(t);else{const t=document.querySelector(`.tb_media-${o}`);t&&(t.style.display="none")}1===d.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=a.A.getState().appData;if(!i||!Object.keys(i).length||!d.length)return;const{User:r,Wall:u}=i,h=null===r||void 0===r?void 0:r.id,m=(s.HY,null===u||void 0===u?void 0:u.id),v=null===(t=d[0])||void 0===t?void 0:t.target,{filterId:g,network:w,itemId:_,load:x}=v.dataset,b=document.querySelector(`img[data-item-id="${_}"]`),y=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===_)):[];if(null!==y&&void 0!==y&&y.length){var P;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(P=y[0])||void 0===P?void 0:P.postFileNew);if(!t&&b){if([2,18,3,28].includes(+w)&&"0"===x&&"34"!==g&&!v.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var o,a,s,n,l;const{UserPlan:d,Wall:r}=e;return{table_name:null===d||void 0===d?void 0:d.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(o=i[0])||void 0===o?void 0:o.feedId,type:null===(a=i[0])||void 0===a?void 0:a.type,link:null===(s=i[0])||void 0===s?void 0:s.link,postFile:null===(n=i[0])||void 0===n?void 0:n.postFile,mediaFile:null===(l=i[0])||void 0===l?void 0:l.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:_,ownerId:h},i,y);try{const{data:e}=await(new l.A).post(s.t5,t,{headers:n.ML}),i=s.HY||s.MH?"":`https://images.${s.QR}/`;v.src="18"===w?`${i}${e.media}`:e.media}catch{v.src=o.gX}finally{p(v)}}else v.src=o.gX,p(v);d.shift(),c()}else{const t=`${o.th}/media/images/no-image.svg`;v.src=t,v.srcset=t,p(v),d.shift()}}},p=t=>t.setAttribute("data-load","1")},71638:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>A});var o=i(65043),a=i(83003),s=i(92908),n=i(34036),l=i(65146),d=i(41373),r=i(26165),c=i(70579);const p=t=>{let{product:e,wall:i,onsetProductImg:a,openAddtocart:s,item:n,setOnProductDetails:l}=t;const{ThemeInfo:p,ProductSetting:u}=i,[h,m]=(0,o.useState)(!1),[v,g]=(0,o.useState)(!1),w=t=>(0,r.hq)({type:1,action:2,wall:p.webId,product_id:t.id,post:n.referenceId,owner:p.ownerId,feed:n.feedId,currency:t.currency,price:t.discount>0?t.discount:t.price}),_=u.Button,x=t=>{const{Button:e}=u;var i=t;2==parseInt(e.newTab)?window.parent.location.href=i:window.open(i,"_blank")};return(0,c.jsxs)("div",{className:"tb_rpp_pro "+(h?"ts_reelTheme_No_Product":""),children:[h?null:(0,c.jsx)("div",{className:"tb_rpp_pro_img",children:(0,c.jsx)("img",{src:e.image,alt:"",onError:()=>m(!0)})}),(0,c.jsxs)("div",{className:"tb_rpp_pro_cont",children:[(0,c.jsx)("div",{className:"tb_rpp_pro_title",children:e.title}),e.price>0||e.discount>0?(0,c.jsxs)("div",{className:"tb_rpp_p_wrap",children:[(0,c.jsxs)("div",{className:"tb_rpp_p",children:[e.currency,e.discount>0?e.discount:e.price]}),0==e.discount||e.price==e.discount?(0,c.jsx)(c.Fragment,{}):(0,c.jsxs)("div",{className:"tb_rpp_p tb_rpp_d_p",children:[e.currency,e.price]})]}):null,(0,c.jsxs)("div",{className:"tb_rpp_btn"+(v?" tb_rpp_btn_spinner":""),disabled:v,onClick:()=>{(async()=>{g(!0);const t={};if(e&&e.url)try{var o;if(140717==p.ownerId||1==(null===u||void 0===u||null===(o=u.Button)||void 0===o?void 0:o.pdp_target))x(e.url),a(e.image),g(!1),w(i);else{const o="magento"==e.createdFrom||!1;""!=e.createdFrom?(0,d.YS)(e.url,o,{productId:e.sku,storeId:e.storeId}).then((i=>{var n;if(o&&0==i.status)t[e.id]={data:{available:!0},showCart:140717!==p.ownerId};else{var l;const a=o&&(null===i||void 0===i||null===(l=i.data)||void 0===l?void 0:l.data)||(null===i||void 0===i?void 0:i.data),s=o?{available:!0}:{};t[e.id]={data:null!==a&&void 0!==a&&a.id?{...a,...s}:null,showCart:(null===a||void 0===a?void 0:a.id)&&140717!==p.ownerId}}a(null!==i&&void 0!==i&&null!==(n=i.data)&&void 0!==n&&n.featured_image?i.data.featured_image:e.image),g(!1),s(t,e.id,e)})).catch((t=>{console.log("error",t),x(e.url),a(e.image),g(!1),w(i)})):(x(e.url),a(e.image),g(!1),w(i))}}catch(n){console.log("error",n),x(e.url),g(!1)}})()},children:[_.text," "]})]})]},e.id)},u=(0,o.memo)(p);var h=i(36671),m=i(1043),v=i.n(m),g=i(65281);class w extends o.PureComponent{constructor(t){super(t),this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.onUpdateTime=t=>{try{s.HY&&this.setState({played:this.state.played+t.playedSeconds})}catch(e){console.log(e)}},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,played:0}}componentWillUnmount(){const{played:t}=this.state;s.HY&&(0,g.HI)(t)}render(){var t,e,i;const{VideoClass:o,Post:a,controls:s,handleVideoEnded:n,muted:l,currentView:d,inView:r}=this.props,{videoLoaded:p}=this.state,{media:u,height:h,width:m,id:g,link:w,networkId:_}=a,x={paddingBottom:"100vh"};return(0,c.jsxs)("div",{className:`${o}_wrap_`,style:x,children:[(0,c.jsx)(v(),{className:`${o} tb_media-${g}`,url:r?u.video.full:null===u||void 0===u||null===(t=u.image)||void 0===t?void 0:t.small,"data-height":h,"data-width":m,"data-type":"video","data-network":_,"data-link":w,"data-item-id":g,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":m,"data-height":h,poster:null===u||void 0===u||null===(e=u.image)||void 0===e?void 0:e.small}},file:{attributes:{preload:"auto",poster:null===u||void 0===u||null===(i=u.image)||void 0===i?void 0:i.small,playsInline:!0}}},autoPlay:d?1:0,loop:!0,muted:d&&l,volume:d&&l?0:1,playsinline:!0,playing:d,height:"100%",width:"100%",controls:s,onReady:()=>this.setVideoLoaded(!0),onProgress:this.onUpdateTime,onEnded:n||null},`${g}-${d}-${w}`),p?null:(0,c.jsx)("div",{className:"tb_rpp_v_spinner",children:(0,c.jsx)("div",{})})]})}}var _=i(4765);const x=JSON.parse(window.localStorage.getItem("mediaDimension"));class b extends o.PureComponent{constructor(t){super(t),this.mediaSize=t=>this.props.mediaSizeCallback(t),this.state={mediaSize:{height:null!=x?x[0]:"85vh",width:null!=x?x[1]:"85vh"}}}render(){const{Post:t,wallID:e,size:i,onUpdateProdImgIdx:o,inView:a}=this.props;return(0,c.jsx)("div",{className:"tb_rp_media_holder",children:(0,c.jsx)(_.eB,{options:{direction:"ltr",pagination:!0,arrows:!1,speed:400,rewind:!0,perPage:1,perMove:1,gap:0,updateOnMove:!0,wheel:!1,paginationDirection:"ltr",classes:{pagination:"splide__pagination tb_rp_bullet"}},onMoved:(t,e)=>o(e),children:t.mediaList.map(((o,n)=>(0,c.jsx)(_.Nn,{children:[2,4].includes(o.type)?(0,c.jsx)(h.A,{ImageClass:"tb_rp_image",Post:t,mediaOnly:o,size:i,multiPic:1,multiKey:n,hotspot:!!o.product.length&&s.HY,inView:!0}):[3,5].includes(o.type)?(0,c.jsx)(w,{VideoClass:"tb_rp_video",media:o.video.full,mediaPoster:o.image.original,Post:{...t,media:{video:o.video,image:o.image}},wallID:e,size:i,isCover:!0,controls:!1,autoPlay:!0,muted:false,index:n,inView:a}):null},n)))})},t.id)}}const y=t=>{var e;const{Post:i,muted:o,index:a,wallID:n,inView:l,currentView:d}=t,r=!1;return i.mediaList&&i.mediaList.length>0?(0,c.jsx)(b,{Post:i,...t}):[2,4].includes(i.type)&&l?(0,c.jsx)(h.A,{ImageClass:"tb_rp_image",Post:i,size:r,hotspot:!(null===i||void 0===i||null===(e=i.product)||void 0===e||!e.length)&&s.HY,blurBG:!1,observer:!1,index:a,inView:l}):[3,5].includes(i.type)&&l?(0,c.jsx)(w,{VideoClass:"tb_rp_video",Post:i,size:r,wallID:n,isCover:!0,controls:!1,currentView:d,muted:o,handleVideoEnded:()=>{},index:a,inView:l}):null},P=(0,o.memo)(y);var I=i(78250);function f(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("transform","none","important"),t.style.setProperty("clip-path","initial","important"),t.style.setProperty("border","none","important")}class D extends o.PureComponent{render(){return(0,c.jsx)("a",{href:I.om,target:"_blank",ref:t=>{t&&(t.style.setProperty("margin-right","15px","important"),t.style.setProperty("width","90px","important"),t.style.setProperty("height","auto","important"),f(t))},children:(0,c.jsx)("img",{ref:t=>{t&&(t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),f(t))},src:`${I.th}/media/logo/tagshop-branding.svg`})})}}const S=t=>{var e,i,a,s;let{wall:n,item:l,onsetProductImg:d,openAddtocart:r,index:p,currentView:h,muteToggle:m,muted:v,inView:g}=t;const w=!![3,5].includes(l.type),{ThemeInfo:_,ProductSetting:x}=n,[b,y]=(0,o.useState)(0),I=t=>(0,c.jsx)("div",{className:"tb_rpp_slide_wrap",children:t.products&&t.products.map(((t,e)=>(0,c.jsx)(u,{product:t,openAddtocart:r,onsetProductImg:d,wall:n,item:l},e)))});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(P,{Post:l,wallID:_.wallId,onUpdateProdImgIdx:t=>{y(t)},ownerId:_.ownerId,ThemeID:_.id,wall:n,muted:v,currentView:h,index:p,inView:g}),(0,c.jsxs)("div",{className:"tb_rp_content",children:[x&&l.isProduct?(0,c.jsx)(I,{products:null!==(e=l.mediaList)&&void 0!==e&&e.length?null!==(i=l.mediaList)&&void 0!==i&&null!==(a=i[b])&&void 0!==a&&null!==(s=a.product)&&void 0!==s&&s.length?l.mediaList[b].product:[]:l.products}):null,w?(0,c.jsx)("div",{className:"tb_rp_mute_btn",onClick:m,children:(0,c.jsx)("div",{className:"tb__icon tb-"+(v?"mute":"unmute"),children:(0,c.jsx)("div",{})})}):null,_.branding?(0,c.jsx)(D,{wallId:_.wallId,themeID:_.id}):null]})]})},C=(0,o.memo)(S);var j=i(22030);class k extends o.Component{constructor(t){var e;super(t),this.setMuted=()=>this.setState({muted:!this.state.muted}),this.onMediaUpdate=()=>this.setState({isAuthorImagevalid:!1}),this.onAddToCart=(t,e,i,o)=>{const{wall:a}=this.props,{webId:n,wallId:l,ownerId:d}=a.ThemeInfo;setTimeout((()=>{this.setState({addCartSetTime:!0})}),100);const r={type:1,action:2,wall:s.HY?n:l,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:d,product_id:i.id,currency:i.price,price:i.discount>0?i.discount:i.price};this.setState({allProductDetails:t,addtoCartPopup:!0,selectedProductDetails:t[e],tagshopProductDeatil:{...i,trackingData:r}})},this.requestData=()=>{const{wall:t,appendData:e,hasMoreData:i,loaderData:o}=this.props,{webId:a,wallId:n}=t.ThemeInfo,l=t.ThemeStyle.totalPosts,d=Math.floor(Date.now()/1e3);i&&!o.isShowMoreLoading&&this.props.nextData(s.HY?a:n,d,l,e.networkID,e.after,e.heightEvent)},this.onItemChange=t=>this.setState({item:t}),this.startSplideSlide=t=>{this.setState({activeSlide:t.index})},this.currentSplideSlide=t=>{this.onPopUpTrack(t.index),this.setState({activeSlide:t.index}),this.props.hasMoreData&&t.index==this.props.completeData.length-2&&this.requestData()},this.onPopUpTrack=t=>{try{const{wall:e,completeData:i}=this.props,{ThemeInfo:o}=e;let a=i[t]?i[t]:null;if(a){const t={feed:a.feedId,post:a.referenceId?a.referenceId:a.id},e={action:2,wall:o.webId,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,type:3,owner:o.ownerId};(0,r.hq)(s.Qy?e:{action:2,wall:o.webId,...t,owner:o.ownerId,type:3})}}catch(e){console.log("Error in PopUp Tracking",e)}},this.onClickClosePopUp=t=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null,addCartSetTime:!1}),this.onClickCheckOut=t=>this.setState({addtoCartPopup:!0,continueShopping:!1}),this.sliderRef=o.createRef(),this.state={currentIndex:null===(e=this.props)||void 0===e?void 0:e.currentIndex,item:this.props.item,windowWidth:window.innerWidth,isAuthorImagevalid:!0,isHotspot:!1,addtoCartPopup:!1,allProductDetails:null,selectedProductId:null,selectedProductDetails:null,continueShopping:!1,selectedVariant:null,showAddToCart:!1,productLoading:!0,productImg:"",tagshopProductDeatil:null,muted:!!(0,j.RP)(),activeSlide:0,addCartSetTime:!1,selectedProdDetails:null,tagProdDetail:null},this.splideRef=o.createRef()}componentDidMount(){const{currentIndex:t,item:e}=this.props,i=(0,g.hz)(e.author.picture);this.setState({currentIndex:t,item:e,isAuthorImagevalid:i})}UNSAFE_componentWillReceiveProps(t){const{currentIndex:e,item:i}=t,o=(0,g.hz)(i.author.picture);this.setState({currentIndex:e,item:i,isAuthorImagevalid:o})}render(){const{onClosePopUp:t,slideWithArrowKeys:e,wall:i,completeData:o}=this.props,{currentIndex:a,item:s,addtoCartPopup:d,selectedProductDetails:r,continueShopping:p,productImg:u,tagshopProductDeatil:h,addCartSetTime:m,muted:v,activeSlide:g}=this.state;return(0,c.jsxs)("div",{className:`modalId${s.id} tb_rp_modal ${m?"tb_rp_add_cart_m":""}`,onKeyDown:e,onKeyPress:e,onLoad:e,onClick:e=>e.currentTarget==e.target&&t(e),children:[(0,c.jsxs)("div",{className:"tb_rp_dialog",children:[d||p?null:(0,c.jsx)("div",{className:"tb_reel_close_btn",onClick:t,children:(0,c.jsx)("div",{className:"tb__icon tb-close-thin",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("div",{className:"tb_time_line_wrap",children:(0,c.jsx)("div",{className:"tb_time_line",children:(0,c.jsx)("div",{})})}),(0,c.jsx)(_.eB,{ref:this.splideRef,options:{direction:"ttb",height:window.innerHeight,start:a,wheel:!1,releaseWheel:!0,sensitivity:1,drag:!0,pagination:!1,arrows:!1,isNavigation:!1,updateOnMove:!0},onMoved:this.currentSplideSlide,onMounted:this.startSplideSlide,children:o&&o.length>0?o.map(((e,o)=>(0,c.jsx)(_.Nn,{children:(0,c.jsx)(C,{currentView:g===o,onClosePopUp:t,wall:i,item:e,openAddtocart:(t,i,o)=>this.onAddToCart(t,i,o,e),onsetProductImg:t=>this.setState({productImg:t}),muteToggle:this.setMuted,muted:v,inView:Math.abs(g-o)<=2},`${e.id}-${o}`)},`${e.id}-${o}`))):null})]}),d&&r?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"tb_rp_cart_overlay",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_rp_cart_modal",children:(0,c.jsxs)("div",{className:"tb_rp_cart_body",children:[(0,c.jsx)("div",{className:"ts_reel_close_btn tb_reel_close_btn",onClick:d&&!p?this.onClickClosePopUp:p?t=>this.setState({addtoCartPopup:!0,continueShopping:!1}):null,children:(0,c.jsx)("div",{className:"tb__icon tb-close-thin",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("div",{className:"tb_rp_cart_wrap",children:r&&Object.keys(r).length>0?"magento"==(null===h||void 0===h?void 0:h.createdFrom)?(0,c.jsx)(n.A,{productImg:u,addtoCartPopup:d,productDetails:r,tagshopProductDeatil:h,closeCart:t=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null}),onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:i,closePopUp:this.props.onClosePopUp}):(0,c.jsx)(l.A,{productImg:u,addtoCartPopup:d,productDetails:r,tagshopProductDeatil:h,closeCart:t=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null}),onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:i,closePopUp:this.props.onClosePopUp}):null})]})})]}):null]})}}const N=(0,a.Ng)((t=>{const{appData:e}=t;return{loaderData:t.loaderData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(t=>({nextData:(e,i,o,a,s,n,l)=>t((0,r.wF)(e,i,o,a,s,n,l))})))((0,o.memo)(k));var T=i(38571);class $ extends o.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,imgData:[]},this.closeCommercePopUP=t=>{this.setState({isEnable:0,currentIndex:null},(()=>this.props.closePopUP()));var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.getCommercePopUPEvent=t=>{null!==t&&void 0!==t&&t.card&&this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,windowParent:t,imgData:t.imgData,personalization:t.personalization},(()=>this.CommercePopUPSlideWithArrowKey()))},this.featuredPopSliderChangeIndex=t=>this.updateCurrentInde(t),this.SliderWithKey=t=>this.updateCurrentInde(t),this.updateCurrentInde=t=>{const{eventData:e}=this.state;-1===t?this.setState({currentIndex:e.idArray.length-1}):this.setState({currentIndex:e.idArray.length===t?0:t})},this.CommercePopUPSlideWithArrowKey=t=>{const{personalization:e}=this.state;if(e&&1===e.popupSlideShow){let e=this;(t=t||window.event)&&t.keyCode&&void 0!==t.keyCode&&(37===t.keyCode?e.SliderWithKey(e.state.currentIndex-1):39===t.keyCode?e.SliderWithKey(e.state.currentIndex+1):27===t.keyCode&&this.closeCommercePopUP())}}}componentDidMount(){const{data:t}=this.props;this.getCommercePopUPEvent(t);var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="hidden")}componentDidUpdate(t){this.props.data!==t.data&&this.getCommercePopUPEvent(this.props.data)}UNSAFE_componentWillReceiveProps(t){const{postData:e}=t;let{completeData:i,eventData:o}=this.state;if(i.length!=e.postData.length){let t=e.postData.map((t=>e.completeDataObject[t])).filter((t=>!String(t.id).includes("free_add_")));o.idArray=t,this.setState({completeData:t,eventData:o},(()=>{const{currentIndex:t}=this.state;this.setState({currentIndex:t+1})}))}}render(){const{viewOnText:t,isEnable:e,currentIndex:i,personalization:o,completeData:a,eventData:s,url:n,imgData:l}=this.state,{postData:d,wall:r,webFilters:p}=this.props;let u=null;return u=-1===i?a[s.idArray.length-1]:a[i],1===e&&r&&Object(a||{}).length>0?(0,c.jsx)(N,{webFilters:p,wall:r,item:u,completeData:a,onClosePopUp:this.closeCommercePopUP,currentIndex:i,personalization:o,viewOnText:t,slideWithArrowKeys:this.CommercePopUPSlideWithArrowKey,featuredPopSliderChangeIndex:this.featuredPopSliderChangeIndex,hostUrl:n,imgData:l}):null}}const A=(0,a.Ng)((t=>({wall:t.appData.wall,webFilters:t.appData.webFilters})),(t=>({closePopUP:e=>t((0,T.ng)(e))})))($)},80714:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var o=i(65043),a=i(83003),s=i(39532),n=i(65281),l=i(26165),d=i(57515),r=i(70579);const c=(0,o.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,o=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),i&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,o]})]})})),p=t=>{let{products:e,appData:i,Post:a,showTooltip:p,isPopup:u,dataItem:h}=t;const[m,v]=(0,o.useState)(null),g=(0,o.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,o.useEffect)((()=>{if(p){const t=e.findIndex((t=>t.id===p));-1!==t&&v(t)}else v(null)}),[p,e]);const w=(0,o.useCallback)((t=>{var e,o,a,s;null!==i&&void 0!==i&&i.wall&&(0,l.hq)({type:1,action:2,wall:null===i||void 0===i||null===(e=i.wall)||void 0===e||null===(o=e.ThemeInfo)||void 0===o?void 0:o.webId,product_id:t.id,post:h.referenceId,owner:null===i||void 0===i||null===(a=i.wall)||void 0===a||null===(s=a.ThemeInfo)||void 0===s?void 0:s.ownerId,feed:h.feedId,currency:t.currency,price:Number(t.price)>0?t.discount:t.price})}),[i,a]),_=(0,o.useCallback)(((t,e)=>{t.stopPropagation(),w(e),window.open(e.url,"_blank")}),[w]);return null!==g&&void 0!==g&&g.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,n.Ul)()}-`,o=m===e;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(o?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>v(e),onMouseLeave:()=>v(null),onClick:e=>{_(e,t)},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===g.type?"tb_hotspot_ani__":""),children:e+1}),(0,r.jsx)(d.A,{wallId:i,children:(0,r.jsx)(s.m_,{appendTo:"body","data-tooltip-id":`tooltip-${t.id}-${Math.random().toString(36).substr(2,9)}`,className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,...u?{isOpen:o}:{},children:(0,r.jsx)(c,{item:t})},e)})]},`${t.id}-${e}`)})):null},u=(0,o.memo)(p),h=(0,a.Ng)((t=>({appData:t.appData})))(u)},36671:(t,e,i)=>{"use strict";i.d(e,{A:()=>r});var o=i(65043),a=i(65281),s=i(78250),n=i(8494),l=i(80714),d=i(70579);class r extends o.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var o;const{width:t,height:e}=await(0,a.TW)(null===i||void 0===i||null===(o=i.image)||void 0===o?void 0:o.small);this._isMounted&&this.setState({height:e,width:t})}catch(s){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:s,Post:n}=t;this.state={height:(null===s||void 0===s?void 0:s.height)||(null===n||void 0===n||null===(e=n.media)||void 0===e?void 0:e.height)||0,width:(null===s||void 0===s?void 0:s.width)||(null===n||void 0===n||null===(i=n.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=o.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,o;const{height:a,width:r}=this.state,{ImageClass:c,Post:p,hotspot:u,size:h,blurBG:m,ProductSetting:v,mediaOnly:g,inView:w,multiKey:_,index:x}=this.props,{id:b,link:y,products:P}=p,I=g||(null===p||void 0===p?void 0:p.media),{currentWidth:f,currentHeight:D}=this.state,S=h||100*a/r,C={paddingBottom:1===S?null:`${S}%`},j={backgroundImage:w?`url(${null===I||void 0===I||null===(t=I.image)||void 0===t?void 0:t.small})`:null},k=r>a?"100%":r/a*100+"%",N=r>a?a/r*100+"%":"100%",T=p.isProduct&&u&&p.hotspot,$={width:T&&h?k:null,height:T&&h?N:null};return(0,d.jsxs)("div",{className:`${c}_wrap_ mediaHolder${null===p||void 0===p?void 0:p.id}`,style:C,ref:this.mediaRef,children:[T&&m?(0,d.jsx)("div",{className:"tb_blur_bg_",style:j}):null,(0,d.jsxs)("div",{className:`${c}_wrap_in`,style:$,children:[T?(0,d.jsx)(l.A,{products:this.props.multiPic?p.mediaList[_].product:P,ProductSetting:v,hotspot:p.hotspot,dataPost:p,showTooltip:null},x):null,w?(0,d.jsx)("img",{className:`${c} tb_media-${b}`,src:null===I||void 0===I||null===(e=I.image)||void 0===e?void 0:e.small,srcSet:`${null===I||void 0===I||null===(i=I.image)||void 0===i?void 0:i.small} 1x, ${null===I||void 0===I||null===(o=I.image)||void 0===o?void 0:o.large} 2x`,sizes:`${f}px`,loading:w?"eager":"lazy",decoding:"async",fetchPriority:w?"high":"low","data-id":b,height:D,width:f,"data-height":a,"data-width":r,"data-link":y,onLoad:this.onLoad,onError:t=>{t.target.src=`${s.th}/media/error/no-image.svg`,t.target.srcset=`${s.th}/media/error/no-image.svg`,(0,n.bs)(t)},alt:null===I||void 0===I?void 0:I.title,title:null===I||void 0===I?void 0:I.title},`${b}-${a}-${r}-${w}`):null]})]})}}},41497:(t,e,i)=>{"use strict";var o=i(13218);function a(){}function s(){}s.resetWarningCache=a,t.exports=function(){function t(t,e,i,a,s,n){if(n!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s,resetWarningCache:a};return i.PropTypes=i,i}},65173:(t,e,i)=>{t.exports=i(41497)()},13218:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=3677.2ba4739c.chunk.js.map