"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[548,2663,5044,6723,8167,8543],{54658:(t,e,o)=>{o.r(e),o.d(e,{default:()=>E});var s=o(9950),a=o(10300),i=o(66345),l=o(76506),n=o(80415),r=o(44414);const d=t=>{let{size:e,themeId:o}=t;const s=t=>o==t&&1==e;return(0,r.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width",""+(2==e?"110px":"75px"),"important"),t.style.setProperty("height",""+(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width",""+(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height",""+(2==e?"25px":"18px"),"important"),t.style.setProperty("top",""+(s(55)||s(62)||s(61)?"auto":"14px"),"important"),t.style.setProperty("left",""+(s(62)||s(61)?"auto":"14px"),"important"),t.style.setProperty("right",""+(s(55)||s(62)||s(61)?"14px":"auto"),"important"),t.style.setProperty("bottom",""+(s(55)||s(62)||s(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image",`url(${n.th}/media/logo/tagshop-light.svg)`,"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,r.jsx)("div",{children:" "})})},c=s.lazy((()=>Promise.all([o.e(8092),o.e(3556),o.e(1823),o.e(1828)]).then(o.bind(o,51828)))),p=s.lazy((()=>Promise.all([o.e(1823),o.e(9924)]).then(o.bind(o,69924)))),h=s.lazy((()=>Promise.all([o.e(8092),o.e(7482)]).then(o.bind(o,7482)))),_=s.lazy((()=>Promise.all([o.e(9992),o.e(1883)]).then(o.bind(o,29779))));class m extends s.PureComponent{constructor(t){super(t),this.handleResize=()=>{this.setState({winSize:{width:window.innerWidth,height:window.innerHeight}},(()=>{const{mediaSize:t}=this.state;this.setSize(t.height,t.width)}))},this.setSize=(t,e)=>{const{hideContent:o}=this.props,{winSize:s}=this.state,a=Math.min((s.width-535)/e,(s.height-(90+(o?69:0)))/t),i={height:t*a,width:e*a,paddingBottom:100*t/e},l={winHeight:s.height,winWidth:s.width,height:i.height,width:i.width,paddingBottom:i.paddingBottom};this.props.allSizeCallback(l),this.setState({mediaSize:{height:i.height,width:i.width,paddingBottom:i.paddingBottom}})},this.onMediaLoad=async t=>{const{height:e,width:o}=t.media;if(e&&o)this.setSize(e,o);else{const e=document.querySelector(`.tb_media-${t.id}`),o=e?parseInt(e.getAttribute("data-height"),10):0,a=e?parseInt(e.getAttribute("data-width"),10):0;if(a>0&&o>0)this.setSize(o,a);else try{const{width:e,height:o}=await(0,l.TW)(t.media.image.small);this._isMounted&&this.setSize(o,e)}catch(s){this._isMounted&&this.setSize(1e3,1e3)}}},this.state={winSize:{width:window.innerWidth,height:window.innerHeight},mediaSize:{height:0,width:0,paddingBottom:0}}}static getDerivedStateFromProps(t,e){return t.Post!==e.Post?{...e,Post:t.Post}:null}componentDidMount(){const{Post:t}=this.props;window.addEventListener("resize",this.handleResize),this._isMounted=!0,this.onMediaLoad(t)}componentDidUpdate(t){this.props.Post!==t.Post&&this.onMediaLoad(this.props.Post)}componentWillUnmount(){this._isMounted=!1,window.removeEventListener("resize",this.handleResize)}render(){const{Post:t,ThemeInfo:e,onUpdateProdImgIdx:o,showTooltip:a}=this.props,{winSize:i,mediaSize:l}=this.state,n={maxHeight:i.width>991?l.height:null,maxWidth:i.width>991?l.width:null,aspectRatio:`${l.width} / ${l.height}`,flexBasis:i.width>991?l.height:null},m={paddingBottom:`${l.paddingBottom}%`,width:i.width>991?l.width:null};return(0,r.jsxs)("div",{className:"tb_post_modal_media_holder",style:n,children:[null!==e&&void 0!==e&&e.branding?(0,r.jsx)(d,{size:2,themeId:e.id}):null,(0,r.jsx)("div",{className:"tb_post_modal_media",style:m,children:(0,r.jsx)("div",{className:"tb_post_modal_media_",children:t.mediaList&&t.mediaList.length>0?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(c,{winSize:i,Post:t,mediaSize:l,ThemeInfo:e,onUpdateProdImgIdx:o,showTooltip:a})}):[2,4].includes(t.type)?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(p,{winSize:i,Post:t,Item:!1,Products:t.products,mediaSize:l,ThemeInfo:e,opacity:1,showTooltip:a,hotspot:!0})}):[3,5].includes(t.type)?t.isAudio?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(_,{Post:t})}):(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(h,{Post:t,mediaSize:l},t.id)}):null})})]})}}var u=o(92663),b=o(52867),v=o(78167),g=o(6723);class y extends s.PureComponent{constructor(t){super(t),this.state={picture:t.Post.author.picture}}UNSAFE_componentWillReceiveProps(t){const{Post:e}=t;this.setState({picture:e.author.picture})}render(){const{Post:t,CardStyle:e}=this.props,{name:o,username:s}=t.author,a=e.author.status,n=`${s&&s.length>0?"@":""}${s}`,d=!(i.HY&&!a||0==a||(0,b.zK)(o))||!(!i.aD&&!i.Vn),c=0==t.timePost||t.author.isInstaUser,p=i.HY?!(!e.timeStatus||0==a||c):0!=a&&!c,h=i.HY?!(!e.timeStatus||c):!c||!(!i.aD&&!i.Vn);return(0,r.jsxs)("div",{className:"tb_post_modal_post_author",children:[(0,r.jsxs)("div",{className:"tb_post_modal_author_details",children:[d?(0,r.jsx)(v.default,{author:t.author,networkId:t.networkId,authorClass:`tb_post_modal_author_media tb-cTBfont-${e.author.variant}`,inView:!0}):null,(0,r.jsxs)("div",{className:"tb_post_modal_author_deatils",children:[d?(0,r.jsx)("div",{className:"tb_post_modal_author_wrap",children:(0,r.jsxs)("div",{className:`tb_post_modal_author_usrname tb-cTBfont-${e.author.variant}`,onClick:e=>t.link&&i.yR?window.open(t.link):null,children:[o," "]})}):null,(0,r.jsxs)("div",{className:"tb_post_modal_author_info",children:[d?(0,r.jsx)("div",{className:`tb_post_modal_author_handlename tb-cTBfont-${e.author.variant}`,children:n}):null,p?(0,r.jsx)("div",{className:"tb_post_modal_seprator_dot",children:(0,r.jsx)("div",{})}):null,h?(0,r.jsx)(g.default,{createdAt:t.createdAt,timeClass:`tb_post_modal_post_time tb-cTBfont-${e.author.variant}`}):null]})]})]}),(0,r.jsx)("div",{className:"tb_post_modal_social_wrapper",onClick:e=>t.link&&i.yR?window.open((0,l.C9)(t.link),"_blank"):null,children:(0,r.jsx)(u.default,{networkClass:`tb_post_modal_social_ico tb-cTBfont-${e.author.variant}`,networkId:t.networkId,iconStyle:e.icon,isPopUp:!0})})]})}}var w=o(93152),x=o(21850);const f={sharePostPopUP:w.CW},P=(0,a.Ng)(null,f)((t=>{let{sharePostPopUP:e,item:o,wall:a,color:n}=t;const{webId:d,wallId:c,ownerId:p}=a.ThemeInfo;(0,s.useEffect)((()=>{window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",h)}))}),[]);const h=t=>{t&&((0,x.hq)({type:2,action:2,wall:i.HY?d:c,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:p}),(0,x.x9)("Tagbox","popup_share_click","popup_share",i.HY?d:c)),window.open(o.share.twitter,"_target")},_={color:n};return(0,r.jsx)("div",{className:"tb_post_modal_post_footer_social_",children:(0,r.jsxs)("div",{className:"tb_post_modal_share_ico",children:[(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,r.jsx)("div",{onClick:(u=o.share.facebook,t=>{window.open(u,"_target"),(0,x.hq)({type:2,action:2,wall:i.HY?d:c,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:p}),(0,x.x9)("Tagbox","popup_share_click","popup_share",i.HY?d:c)}),children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-facebook",style:_,children:(0,r.jsx)("div",{})})})}),(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-twitter",onClick:h,style:_,children:(0,r.jsx)("div",{})})}),(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-linkedin",onClick:(t=>e=>{(0,x.hq)({type:2,action:2,wall:i.HY?d:c,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:p}),(0,x.x9)("Tagbox","popup_share_click","popup_share",i.HY?d:c),window.open(t,"_target")})(o.share.linkedin),style:_,children:(0,r.jsx)("div",{})})}),i.MH&&o.link&&(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___",onClick:()=>e(o),children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-mail",style:_})}),o.link&&(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___ tb_post_link__",onClick:(m=o.link,t=>{window.open((0,l.C9)(m),"_blank")}),children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-link",style:_})})]})});var m,u}));var I=o(96241),k=o(55507);class j extends s.PureComponent{constructor(t){super(t),this.state={scrollAmount:1,scrollDirection:1,contentHeightInner:100,contentHeightUpper:100},this.upperDivRef=s.createRef(),this.innerDivRef=s.createRef()}componentDidMount(){const t=this.upperDivRef.current,e=this.innerDivRef.current;e&&this.setState({contentHeightInner:e.clientHeight,contentHeightUpEle:t.clientHeight})}render(){const{Post:t,CardStyle:e,allSize:o,socialAction:s}=this.props,{contentHeightInner:a,contentHeightUpEle:l}=this.state,n=!i.HY&&o.winWidth>991?o.height-(s?100:0):null,d=String(t.content.text).length>0&&e.style.textDecoration?" tb_post_modal_text_decorate":"";47===e.widgetTheme&&(document.querySelector("html").style.overflow="auto");const c=!i.yR&&a>(n||l);return(0,r.jsx)("div",{className:"tb_post_modal_post_wrapper  "+(c?"tb_scroll_auto":""),style:{height:1!=t.type?n:"100%"},children:(0,r.jsx)("div",{className:"tb_post_modal_post_wrap_in",ref:this.upperDivRef,children:(0,r.jsxs)("div",{className:"tb_post_modal_post_content",children:[t.rating&&t.rating>0?(0,r.jsx)(k.A,{className:"tb__modal_rating__",rating:t.rating,networkId:t.networkId}):null,(0,r.jsx)("div",{className:`tb_post_modal_content tb-cTBfont-${e.style.variant} ${d}`,ref:this.innerDivRef,children:(0,r.jsx)(I.A,{Content:t.content,CardStyle:e})})]})})},`content_${t.id}`)}}o(96011);var S=o(83744),C=o(18459),N=o(88740);class D extends s.Component{constructor(){super(...arguments),this.state={prdImgLoaded:!1,noImg:!1,itemDetails:{},isLoading:!0},this.openUrl=t=>{const{ProductSetting:e}=this.props,{Button:o}=e;var s=t;2==parseInt(o.newTab)?window.parent.location.href=s:window.open(s,"_blank")},this.tracking=(t,e)=>{var o,s;const{item:a}=this.props;(0,x.hq)({type:1,action:2,wall:null===t||void 0===t||null===(o=t.ThemeInfo)||void 0===o?void 0:o.webId,product_id:e.id,post:a.referenceId,owner:null===t||void 0===t||null===(s=t.ThemeInfo)||void 0===s?void 0:s.ownerId,feed:a.feedId,currency:e.currencyCode,price:Number(e.discount)>0?e.discount:e.price})},this.showTooltipFunCallback=t=>{this.props.showTooltipFun(t)}}componentDidMount(){const{item:t,wall:e}=this.props;let{itemDetails:o}=this.state;if(t&&t.isProduct){this.setState({isLoading:!0});const s=t.products.map((t=>{var s,a;const i=t.url;if(1==(null===e||void 0===e||null===(s=e.ProductSetting)||void 0===s||null===(a=s.Button)||void 0===a?void 0:a.pdp_target))return o[t.id]={data:null,showCart:!1},this.setState({itemDetails:o}),Promise.resolve();if(i&&!String(i).includes(".html")&&""!=t.createdFrom){const s="magento"===t.createdFrom||!1;return(0,S.YS)(i,s,{productId:t.id,storeId:t.storeId}).then((a=>{if(s&&!1===a.status)o[t.id]={data:{available:!0},showCart:140717!==(null===e||void 0===e?void 0:e.ThemeInfo.ownerId)};else{var i;const l=s&&(null===a||void 0===a||null===(i=a.data)||void 0===i?void 0:i.data)||(null===a||void 0===a?void 0:a.data),n=s?{available:!0}:{};o[t.id]={data:null!==l&&void 0!==l&&l.id?{...l,...n}:null,showCart:(null===l||void 0===l?void 0:l.id)&&140717!==(null===e||void 0===e?void 0:e.ThemeInfo.ownerId)}}this.setState({itemDetails:o})})).catch((e=>{o[t.id]={data:null,showCart:!1},this.setState({itemDetails:o})}))}return o[t.id]={data:null,showCart:!1},this.setState({itemDetails:o}),Promise.resolve()}));Promise.all(s).then((()=>{this.setState({isLoading:!1})}))}}render(){const{item:t,products:e,wall:o,openCart:s,ProductSetting:a}=this.props,{itemDetails:i,isLoading:l}=this.state,{CatalogueTitle:n,Price:d,ProductTitle:c,Button:p}=a;return Object.keys(e||{}).length?(0,r.jsxs)("div",{className:"tb_pro__container",children:[(0,r.jsx)("div",{className:"tb_pro__heading",children:(0,N.Ay)(n.text)}),(0,r.jsx)("div",{className:"tb_pro__wrap",children:e.map(((e,a)=>{var n,h,_,m,u,b,v;return(0,r.jsx)("div",{className:"tb_pro__item",children:(0,r.jsxs)("div",{className:"tb_pro__wrap_in",onMouseEnter:()=>this.showTooltipFunCallback(e.id),onMouseLeave:()=>this.showTooltipFunCallback(0),children:[(0,r.jsx)("div",{className:"tb_pro__img_wrapper",children:(0,r.jsx)(C.A,{ImageClass:"tb_pro__image",media:e.image,itemDetails:i[e.id]||null},`pro-${e.id}`)}),null!==e&&void 0!==e&&e.title?(0,r.jsx)("div",{className:`tb_pro__title tb-cTBfont-${c.variant}`,children:(0,N.Ay)(e.title)}):null,Number(e.price)>0||Number(e.discount)>0?(0,r.jsxs)("div",{className:"tb_pro__price_wrap",children:[(0,r.jsxs)("div",{className:`tb_pro__price tb-cTBfont-${d.variant}`,children:[e.currency,Number(e.discount)>0?e.discount:e.price]}),Number(e.discount)>0&&e.discount!=e.price?(0,r.jsxs)("div",{className:`tb_pro__discount_price tb-cTBfont-${d.variant}`,children:[e.currency,e.price]}):null]}):null,i&&Object.keys(i).length&&i[e.id]&&null!==(n=i[e.id])&&void 0!==n&&n.showCart?(0,r.jsx)("div",{className:"tb_pro__link",children:(0,r.jsx)("div",{onClick:null!==(h=i[e.id])&&void 0!==h&&null!==(_=h.data)&&void 0!==_&&_.available?()=>s(e.id,e,i[e.id],t):null,className:`tb_pro__btn ${null!==(m=i[e.id])&&void 0!==m&&null!==(u=m.data)&&void 0!==u&&u.available?"":"tb_pro_sold"} tb-cTBfont-${p.variant} ${l?"tb_pro_sold":""}`,children:null!==(b=i[e.id])&&void 0!==b&&null!==(v=b.data)&&void 0!==v&&v.available?p.text:"Sold Out"})}):(0,r.jsx)("div",{className:"tb_pro__link",children:(0,r.jsx)("div",{onClick:()=>{this.openUrl(e.url),this.tracking(o,e)},className:`tb_pro__btn tb-cTBfont-${p.variant} ${l?" tb_pro_sold":""}`,target:o&&o.User&&"102810"!=o.User.id?"_blank":"",children:p.text})})]})},a)}))})]}):null}}const T=D;function z(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("transform","none","important"),t.style.setProperty("clip-path","initial","important"),t.style.setProperty("border","none","important")}class $ extends s.PureComponent{render(){const{brandingNetworks:t,wallId:e,wall:o}=this.props,s=i.HY||`${(0,l.hZ)(t,e)[0]}`,a=i.HY?"tagshop-light.svg":i.aD?"socialwalls-light.svg":"tagbox-light.svg",{poweredBy:d}=o.ThemeStyle.language.text;return(0,r.jsxs)("a",{href:s,target:"_blank",ref:t=>{t&&(t.style.setProperty("position","absolute","important"),t.style.setProperty("left","auto","important"),t.style.setProperty("right","0","important"),t.style.setProperty("bottom","-26px","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("padding-top","4px","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","auto","important"),t.style.setProperty("text-decoration","none","important"),t.style.setProperty("direction","ltr","important"),z(t))},children:[(0,r.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("font-size","13px","important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("margin-right","5px","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),t.style.setProperty("font-family","inherit","important"),z(t))},children:[d||"Powered by"," "]}),(0,r.jsx)("div",{ref:t=>{t&&(t.style.setProperty("background-image",`url(${n.th}/media/logo/${a})`,"important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("background-position","left center","important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("height","22px","important"),t.style.setProperty("min-height","22px","important"),t.style.setProperty("width","90px","important"),t.style.setProperty("min-width","90px","important"),z(t))}})]})}}var A=o(54199),H=o(92687);class U extends s.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,imgData:[],type:"",parentID:"",isRepeatingPost:!1,allSize:{winHeight:null,winWidth:null,height:null,width:null,paddingBottom:null},addtoCartPopup:!1,productImg:"",prodImgIdx:0},this.keyboardEvent=t=>{let e=this.state.currentIndex;[39,40].includes(t.keyCode)?(e+=1,this.featuredPopSliderChangeIndex(e)(t)):[37,38].includes(t.keyCode)?(e-=1,this.featuredPopSliderChangeIndex(e)(t)):27==t.keyCode&&this.closeWidgetPopUP()},this.onCloseModal=()=>{var t=document.querySelector(`#tb_post_modal_modal-${this.state.parentID}`);t&&t.classList.contains("tb_post_modal_show")&&(t.classList.remove("tb_post_modal_show"),this.setState({isEnable:0,currentIndex:null,type:"",addtoCartPopup:!1,selectedProdDetails:null}),this.props.closePopUP());var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.closeWidgetPopUP=t=>this.onCloseModal(),this.getWidgetPopUPEvent=t=>{void 0!==t&&""!=t&&t.card&&("post"==t.type?this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,imgData:t.imgData,personalization:t.personalization,type:t.type,showTooltip:0}):"submit-pic"==t.type&&this.setState({isEnable:1,type:t.type,windowParent:t}))},this.featuredPopSliderChangeIndex=t=>e=>{const{eventData:o,isRepeatingPost:s}=this.state;if(o.idArray.length-1!=t&&t!==o.idArray.length||s){let e;e=t===o.idArray.length-1||t===o.idArray.length?0:-1===t?o.idArray.length-1:t,this.setState({currentIndex:e,isRepeatingPost:!1},(()=>this.onPopUpTrack()))}else this.loadMore()},this.onPopUpTrack=()=>{try{const{wall:t}=this.props,{currentIndex:e,completeData:o,eventData:s}=this.state;let a=null;a=-1===e?o[s.idArray.length-1]:o[e];const l={feed:a.feedId,post:a.referenceId?a.referenceId:a.id},n={action:2,wall:t.ThemeInfo.webId,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,type:3,owner:t.ThemeInfo.ownerId};(0,x.hq)(i.Qy?n:{action:2,wall:t.ThemeInfo.webId,...l,owner:t.ThemeInfo.ownerId,type:3})}catch(t){console.log("Error in PopUp Tracking",t)}},this.loadMore=()=>{const{wall:t,postData:e}=this.props,{eventData:o,currentIndex:s}=this.state,a=!e.hasMoreData||!Object.keys(e.hasMoreData).length||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData);if(o.idArray.length-1==s&&this.setState({isRepeatingPost:!0}),a){const o=t.ThemeStyle.totalPosts,s=Math.floor(Date.now()/1e3);this.props.nextData(i.HY?t.ThemeInfo.webId:t.ThemeInfo.wallId,s,o,e.appendData.networkID,e.appendData.after,e.appendData.heightEvent)}else this.setState({currentIndex:0})},this.popUpCloseClckOnWindow=()=>{document.addEventListener("click",(t=>{t.target.matches(`#tb_post_modal_modal-${this.state.parentID}`)&&this.onCloseModal()}))},this.allSize=t=>{this.setState({allSize:{winHeight:window.innerHeight,winWidth:window.innerWidth,height:t.height,width:t.width,paddingBottom:100*t.height/t.width}})},this.onClickOpenCart=(t,e,o,s)=>{const{ThemeInfo:a}=this.props.wall,l={type:1,action:2,wall:i.HY?a.webId:a.wallId,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:a.ownerId,product_id:e.id,productList:[],currency:e.currency,currencyCode:e.currencyCode,price:Number(e.discount)>0?Number(e.discount):Number(e.price)};this.setState({addtoCartPopup:!0,selectedProdDetails:o,tagProdDetail:{...e,trackingData:l},pId:t,productImg:e.image})},this.closeCart=t=>{this.setState({addtoCartPopup:!1,selectedProdDetails:null},(()=>{var t=document.querySelector(`#tb_post_modal_modal-${this.state.parentID}`);t&&t.classList.add("tb_post_modal_show")}))},this.onUpdateProdImgIdx=t=>{this.setState({prodImgIdx:t})},this.showTooltipFun=t=>{this.setState({showTooltip:t})}}componentDidMount(){var t;const{data:e}=this.props;let o=document.querySelector(".tb_app_container"),s=b.wV?b.wV:null===o||void 0===o||null===(t=o.parentNode)||void 0===t?void 0:t.id;this.setState({parentID:s}),this.getWidgetPopUPEvent(e),setTimeout((()=>{var t=document.querySelector(`#tb_post_modal_modal-${this.state.parentID}`);t&&t.classList.add("tb_post_modal_show")}));var a=document.getElementsByTagName("html");a&&a[0]&&(a[0].style.overflow="hidden"),this.popUpCloseClckOnWindow(),window.addEventListener&&window.addEventListener("keydown",this.keyboardEvent)}componentWillUnmount(){window.removeEventListener("keydown",this.keyboardEvent)}componentDidUpdate(){const t=this;let e=0;if(window.editor){let o=document.getElementById("tb_post_modal_modal-taggbox_main"),s=document.querySelector(".tb_post_modal_conetent"),a=document.querySelector(".tb_post_modal_nxt_btn"),i=document.querySelector(".tb_post_modal_prev_btn");o&&(s&&(s.onclick=()=>e=1),a&&(a.onclick=()=>e=1),i&&(i.onclick=()=>e=1),o.onclick=()=>{0==e&&t.onCloseModal(),e=0})}}UNSAFE_componentWillReceiveProps(t){const{postData:e}=t;let{completeData:o,eventData:s}=this.state;if(o.length!=e.postData.length){let t=e.postData.map((t=>e.completeDataObject[t])).filter((t=>!String(t.id).includes("free_add_")));s.idArray=t,this.setState({completeData:t,eventData:s},(()=>{const{currentIndex:t}=this.state;this.setState({currentIndex:t+1},(()=>this.onPopUpTrack()))}))}}render(){var t,e,o,s,a,l,n,d,c,p;const{wall:h,reportMediaPopUp:_,brandingNetworks:u,postData:b}=this.props,{ThemeInfo:v}=h,{currentIndex:g,completeData:w,eventData:x,parentID:f,allSize:I,addtoCartPopup:k,productImg:S,selectedProdDetails:C,tagProdDetail:N,prodImgIdx:D,showTooltip:z}=this.state;let U=null;U=-1===g?w[x.idArray.length-1]:w[g];const E=1==(null===(t=h.ThemeStyle)||void 0===t||null===(e=t.modal)||void 0===e?void 0:e.slide),M=i.HY?1==(null===(o=h.CardStyle)||void 0===o||null===(s=o.content)||void 0===s?void 0:s.modalContentStatus)?0:1:null===(a=h.CardStyle)||void 0===a||null===(l=a.content)||void 0===l?void 0:l.status,R=!!(U&&f&&Object.keys(U).length&&1==M&&1!=U.type),B=!!(U&&f&&Object.keys(U).length&&U.isProduct),F=!!(null!==h&&void 0!==h&&null!==(n=h.CardStyle)&&void 0!==n&&n.actionStatus&&i.HY||!i.HY),Y=i.HY&&B?" tb_post_modal_ts_p":"",L=`${i.HY?" tb_post_modal_ts_":""}${Y}`,W={maxHeight:B&&i.HY&&I.winWidth>991?I.height-(F?45:0):null};return U&&f&&Object.keys(U).length?k?"magento"==(null===N||void 0===N||null===(d=N.UgcProduct)||void 0===d?void 0:d.created_from)?(0,r.jsx)(H.A,{productImg:S,addtoCartPopup:k,productDetails:C,tagshopProductDeatil:N,closeCart:this.closeCart,onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:h,closePopUp:this.props.closePopUP}):(0,r.jsx)(A.A,{productImg:S,addtoCartPopup:k,productDetails:C,tagshopProductDeatil:N,closeCart:this.closeCart,onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:h,closePopUp:this.props.closePopUP}):(0,r.jsx)("div",{className:"tb_post_modal_modal "+(i.yR?"":"tb_post_wall_modal"),id:`tb_post_modal_modal-${f}`,children:(0,r.jsx)("div",{className:`tb_post_modal_modal_dialog${R&&!B?" tb_only_media_modal":""} ${F&&i.yR?" tb_post_modal_modal_full":""}${L}`,children:(0,r.jsxs)("div",{className:"tb_post_modal_conetent",children:[i.yR?(0,r.jsxs)("div",{className:"tb_post_modal_modal_head",children:[(0,r.jsxs)("div",{className:"tb_post_modal_modal_header",children:[(0,r.jsx)("div",{className:"tb_post_modal_post_link_small",children:(0,r.jsx)("div",{className:"tb_post_modal_post_address",children:U.link?(0,r.jsxs)("div",{className:"tb_post_modal_view_link",onClick:t=>window.open(U.link,"_blank"),children:[(0,r.jsxs)("div",{className:"tb_post_modal_view",children:[h.ThemeStyle.language.text.viewOn," ",U.network.name]}),(0,r.jsx)("div",{className:"tb_post_view_ico tb__icon tb-arrow-right-alt",children:" "})]}):null})}),i.yR?(0,r.jsx)("div",{className:"tb_post_modal_close_wrap",children:(0,r.jsx)("div",{className:"tb_post_modal_close_btn",onClick:this.closeWidgetPopUP,children:(0,r.jsx)("div",{className:"tb_post_close_ico tb__icon tb-close-alt",children:" "})})}):null]}),i.yR&&E?(0,r.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_content "+(1===U.type?"tb_post_modal_text_nav__":""),children:[(0,r.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(g-1),children:(0,r.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,r.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(g+1),children:(0,r.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null]}):null,(0,r.jsx)("div",{className:"tb_post_modal_body_container",children:(0,r.jsxs)("div",{className:"tb_post_modal_modal_body",children:[1!=U.type?(0,r.jsxs)("div",{className:"tb_post_modal_details_left",children:[i.yR&&E?(0,r.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_img",children:[(0,r.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(g-1),children:(0,r.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,r.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(g+1),children:(0,r.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null,(0,r.jsx)(m,{allSizeCallback:this.allSize,hideContent:R&&!B,Post:U,CardStyle:h.CardStyle,ThemeStyle:h.ThemeStyle,ThemeInfo:h.ThemeInfo,onUpdateProdImgIdx:this.onUpdateProdImgIdx,showTooltip:z})]}):null,(0,r.jsx)("div",{className:"tb_post_modal_details_right"+(1===U.type?" tb_post_modal_text__":""),children:(0,r.jsxs)("div",{className:"tb_post_modal_content_wrap",children:[(0,r.jsx)("div",{className:"tb_post_modal_content_in",style:W,children:(0,r.jsxs)("div",{className:"tb_post_modal_post_detail_wrap",children:[B?(0,r.jsx)(T,{item:U,wall:h,ProductSetting:h.ProductSetting,products:null!==(c=U.mediaList)&&void 0!==c&&c.length?null===(p=U.mediaList[D])||void 0===p?void 0:p.product:U.products,openCart:this.onClickOpenCart,showTooltipFun:this.showTooltipFun},`product_${U.id}`):null,(0,r.jsx)(y,{Post:U,ThemeStyle:h.ThemeStyle,CardStyle:h.CardStyle},`author-${U.id}`),R?null:(0,r.jsx)(j,{CardStyle:h.CardStyle,Post:U,allSize:I,socialAction:F})]})}),F&&i.yR?(0,r.jsxs)("div",{className:"tb_post_modal_post_footer",children:[i.MH||i.aD||i.Vn?(0,r.jsx)("div",{className:"tb_post_modal_post_footer_report",children:(0,r.jsx)("div",{className:"tb_post_modal_post_report_media_btn_wrap__",onClick:t=>_(U),children:(0,r.jsx)("div",{className:"tb_post_modal_post_report_media_btn__",children:"Report"})})}):null,h.CardStyle.actionStatus||i.MH?(0,r.jsx)(P,{item:U,wall:h}):null]}):null]})}),null!==v&&void 0!==v&&v.branding?(0,r.jsx)($,{brandingNetworks:u,wallId:h.ThemeInfo.webId,themeID:null===h||void 0===h?void 0:h.ThemeInfo.id}):null]})})]})})}):null}}const E=(0,a.Ng)((t=>({loaderData:t.loaderData})),(t=>({closePopUP:e=>t((0,w.ng)(e)),reportMediaPopUp:e=>t((0,w.lM)(e)),nextData:(e,o,s,a,i,l,n)=>t((0,x.wF)(e,o,s,a,i,l,n))})))(U)},78167:(t,e,o)=>{o.r(e),o.d(e,{default:()=>l});var s=o(9950),a=o(91697),i=o(44414);class l extends s.PureComponent{constructor(t){super(t),this.state={errorPic:!1}}render(){const{author:t,authorClass:e,networkId:o,size:s,inView:l}=this.props,{errorPic:n}=this.state;return(0,i.jsx)("div",{className:e,style:{overflow:4!=o||n?"":"visible"},children:l?(0,i.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:s||44,height:s||44,onError:e=>{this.setState({errorPic:!0});const s=(0,a.Yo)(o),i="#ffffff"==s?"000":s.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${i}&color=fff&length=1`}}):null},Math.random())}}},92663:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var s=o(9950),a=o(91697),i=o(44414);const l=s.lazy((()=>o.e(620).then(o.bind(o,20620))));class n extends s.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:o}=this.props;return 505==(null===o||void 0===o?void 0:o.default)||[7,4,36].includes(t)?(0,i.jsx)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(l,{networkId:t,networkClass:e})}):(0,i.jsx)("div",{className:`${e} tb__icon tb-${(0,a.EC)(t)}`,"aria-label":`post network ${(0,a.Oi)(t)}`,children:(0,i.jsx)("div",{})})}}},96241:(t,e,o)=>{o.d(e,{A:()=>c});var s=o(9950),a=o(88740),i=o(44414),l=function(t){return"string"===typeof t};const n=(t,e,o)=>{if(!l(t)&&!s.isValidElement(t))return t;l(e)&&(e=function(t){var e=/[\\^$.*+?()[\]{}|]/g,o=RegExp(e.source);return t&&o.test(t)?t.replace(e,"\\$&"):t}(e)),e instanceof RegExp||(e=new RegExp(e,"g"));let a,i=[],n=0,r=[];for(;null!==(a=e.exec(t));)r.push(a);if(e.lastIndex=0,0===r.length)return t;r.forEach(((e,s)=>{const a=t.slice(n,e.index);a&&i.push(a);const l=o(...e,s,n);i.push(l),n=e.index+e[0].length}));const d=t.slice(n);return d&&i.push(d),function(t){var e=[];return t.forEach((function(t){Array.isArray(t)?e=e.concat(t):e.push(t)})),e}(i)},r=t=>{let{Content:e,children:o}=t;return(0,i.jsxs)(i.Fragment,{children:[e.title?(0,i.jsx)("div",{className:"tb_bold_txt__",children:(0,a.Ay)(e.title)}):null,o]})},d=t=>{let{Content:e,CardStyle:o}=t;const s={color:null===o||void 0===o?void 0:o.hashtag.color,backgroundColor:1==(null===o||void 0===o?void 0:o.hashtag.backgroundStatus)?null===o||void 0===o?void 0:o.hashtag.background:null},l=(null===e||void 0===e?void 0:e.feedName)||null;return null!==o&&void 0!==o&&o.hashtag.colorStatus?1===(null===o||void 0===o?void 0:o.hashtag.allHashtag)?(0,i.jsx)(r,{Content:e,children:n((0,a.Ay)(null===e||void 0===e?void 0:e.text),/#(\w+)/g,((t,e)=>(0,i.jsx)("div",{className:"tb_highlight",style:s,children:t},`${e}`)))}):0===(null===o||void 0===o?void 0:o.hashtag.allHashtag)&&1===(null===o||void 0===o?void 0:o.hashtag.feedHashtag)&&l?(0,i.jsx)(r,{Content:e,children:n((0,a.Ay)(null===e||void 0===e?void 0:e.text),l,((t,e)=>(0,i.jsx)("div",{className:"tb_highlight",style:s,children:t},`${e}`)))}):(0,i.jsx)(r,{Content:e,children:(0,a.Ay)(null===e||void 0===e?void 0:e.text)}):(0,i.jsx)(r,{Content:e,children:(0,a.Ay)(null===e||void 0===e?void 0:e.text)})},c=(0,s.memo)(d)},55507:(t,e,o)=>{o.d(e,{A:()=>r});var s=o(9950),a=o(44414);const i={3:{className:"tb-default-star",color:"#1b74e4"},19:{className:"tb-yelp-star",color:"#e00707"},23:{className:"tb-default-star",color:"#ff385c"},28:{className:"tb-default-star",color:"#F8B90C"},29:{className:"tb-default-star",color:"#613983"},33:{className:"tb-trustpilot",color:"#000"},35:{className:"tb-star-fill",color:"#34E0A1"},default:{className:"tb-default-star",color:"#F8B90C"}},l=(0,s.memo)((t=>{let{networkId:e,index:o,rating:s}=t;const{className:l,color:n}=i[e]||i.default,r=o<s;return(0,a.jsx)("div",{className:`tb_rating_ico__ tb__icon ${l}`,style:{color:r?n:""},"data-network":e,role:"status","aria-label":"Ratings","data-filled":r?"1":"0",children:(0,a.jsx)("div",{})},o)})),n=t=>{let{rating:e,networkId:o,className:s}=t;return(0,a.jsx)("div",{className:s,"aria-hidden":!0,children:e?Array.from({length:5},((t,s)=>(0,a.jsx)(l,{index:s,rating:e,networkId:o},s))):null})},r=(0,s.memo)(n)},6723:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var s=o(9950),a=o(76506),i=o(44414);const l=t=>{const{createdAt:e,timeClass:o}=t;return(0,i.jsx)("div",{className:o,role:"status","aria-label":`post timestamp ${(0,a.fF)(e)}`,children:(0,a.fF)(e)})},n=(0,s.memo)(l)},91697:(t,e,o)=>{o.d(e,{EC:()=>s,Oi:()=>i,Yo:()=>a});const s=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),a=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),i=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")}}]);