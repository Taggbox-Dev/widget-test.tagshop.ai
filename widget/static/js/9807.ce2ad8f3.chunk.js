(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9807,6476,757],{16897:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>T});var o=a(72791),s=a(77581),i=a(46535),n=a(80184);const r=o.lazy((()=>Promise.all([a.e(8947),a.e(6710),a.e(8282),a.e(9208)]).then(a.bind(a,89208)))),l=o.lazy((()=>Promise.all([a.e(8947),a.e(3108)]).then(a.bind(a,53108)))),d=o.lazy((()=>Promise.all([a.e(6710),a.e(8764)]).then(a.bind(a,78764)))),c=o.lazy((()=>Promise.all([a.e(722),a.e(6756)]).then(a.bind(a,28688))));class _ extends o.PureComponent{constructor(){super(...arguments),this.mediaSize=t=>{this.props.mediaSizeCallback(t)}}render(){const{data:t}=this.props;return(0,n.jsx)("div",{className:"tb_post_modal_media_holder",children:t.imageList&&t.imageList.length>0?(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(r,{imageList:t.imageList,...this.props})}):2===t.type||4===t.type?(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(l,{ImageUrl:t.filename,...this.props,mediaSizeCallback:this.mediaSize,opacity:1})}):3===t.type||5===t.type?t&&t.isAudio?(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(c,{...this.props})}):(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[(0,n.jsx)(l,{ImageUrl:t.filename,...this.props,mediaSizeCallback:this.mediaSize,opacity:0}),(0,n.jsx)(d,{...this.props})]}):null})}}var p=a(70757),h=a(2703),m=a(14496);class u extends o.PureComponent{constructor(t){super(t),this.state={picture:t.item.author.picture,isAuthorImagevalid:!0}}componentWillReceiveProps(t){const{item:e}=t;this.setState({picture:e.author.picture})}render(){const{item:t,ThemeRule:e,ownerId:a}=this.props,o=t.author.picture&&String(t.author.picture).includes("author")?" ":t.author.picture.replace(/[ ]+/g,""),s="".concat(t.author.username&&t.author.username.length>0?"@":"").concat(t.author.username),i=0!=t.postAuthor&&!t.author.isInstaUser,r=0!=t.postAuthor&&0!=t.timePost&&!t.author.isInstaUser,l=0!=t.timePost&&!t.author.isInstaUser,d={color:"#000"};return(0,n.jsxs)("div",{className:"tb_post_modal_post_author",children:[(0,n.jsxs)("div",{className:"tb_post_modal_author_details",children:[i?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"tb_post_modal_author_media",style:{backgroundImage:"url(".concat(o,")")},onClick:e=>t.link?window.open(t.link,"_blank"):null,children:!this.state.isAuthorImagevalid&&(0,n.jsx)(m.Z,{network:t.network,username:t.author.name,authorClass:"tb_post_modal_author_media"})}),(0,n.jsx)("img",{loading:"lazy",src:o,alt:(0,h.P)(o),height:"68",width:"68",style:{display:"none"},onError:t=>{this.setState({isAuthorImagevalid:!1})}})]}):null,(0,n.jsxs)("div",{className:"tb_post_modal_author_deatils",children:[i?(0,n.jsx)("div",{className:"tb_post_modal_author_wrap",children:(0,n.jsxs)("div",{className:"tb_post_modal_author_usrname",style:d,onClick:e=>t.link?window.open(t.link):null,children:[t.author.name," "]})}):null,(0,n.jsxs)("div",{className:"tb_post_modal_author_info",children:[i?(0,n.jsx)("div",{className:"tb_post_modal_author_handlename",style:d,children:s}):null,r?(0,n.jsx)("div",{className:"tb_post_modal_seprator_dot",style:{backgroundColor:"#000"},children:" "}):null,l?(0,n.jsx)("span",{className:"tb_post_modal_post_time",style:d,children:(0,h.Sy)(t.createdAt)}):null]})]})]}),(0,n.jsx)("div",{className:"tb_post_modal_social_wrapper",onClick:e=>t.link?window.open(t.link,"_blank"):null,children:(0,n.jsx)(p.default,{network:t.network,networkClass:"tb_post_modal_social_ico tb__icon",font:e,ThemeRule:e,isDefault:1===e.iconType,isPopUp:!0})})]})}}var g=a(11225);class b extends o.PureComponent{constructor(){super(...arguments),this.onShareFacebooklink=t=>e=>{window.open(t,"_target");const{item:a,wall:o}=this.props;i.ZQ||(0,g.S5)({type:2,action:2,wall:o.Wall.id,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:o.Wall.owner}),(0,g.Fv)("Tagbox","popup_share_click","popup_share",o.Wall.id)},this.onTwitterClick=t=>{const{item:e,wall:a}=this.props;t&&(i.ZQ||(0,g.S5)({type:2,action:2,wall:a.Wall.id,feed:e.feedId,post:e.referenceId?e.referenceId:e.id,owner:a.Wall.owner}),(0,g.Fv)("Tagbox","popup_share_click","popup_share",a.Wall.id)),window.open(e.share.twitter,"_target")},this.linkedinShareCount=t=>e=>{const{item:a,wall:o}=this.props;i.ZQ||(0,g.S5)({type:2,action:2,wall:o.Wall.id,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:o.Wall.owner}),(0,g.Fv)("Tagbox","popup_share_click","popup_share",o.Wall.id),window.open(t,"_target")}}componentDidMount(){window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)})),window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)}))}componentWillReceiveProps(t){window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)})),window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)}))}render(){const{sharePostPopUP:t,item:e,color:a}=this.props,o={color:a};return(0,n.jsxs)("div",{className:"tb_post_modal_post_footer_social_ ".concat(i.ZQ?"tb_post_modal_post_footer_social_te":""),children:[(0,n.jsxs)("div",{className:"tb_post_modal_share_ico",children:[(0,n.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,n.jsx)("div",{onClick:this.onShareFacebooklink(e.share.facebook),children:(0,n.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-facebook",style:o,children:(0,n.jsx)("div",{})})})}),(0,n.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,n.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-twitter",onClick:this.onTwitterClick,style:o,children:(0,n.jsx)("div",{})})}),(0,n.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,n.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-linkedin",onClick:this.linkedinShareCount(e.share.linkedin),style:o,children:(0,n.jsx)("div",{})})}),i.Jx&&e.link?(0,n.jsx)("div",{className:"tb_post_modal_social_ico_list___",onClick:a=>t(e),children:(0,n.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-mail",style:o,children:" "})}):null,!i.ZQ&&e.link?(0,n.jsx)("div",{className:"tb_post_modal_social_ico_list___ tb_post_link__",onClick:t=>window.open(e.link,"_blank"),children:(0,n.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-link",style:o,children:" "})}):null]}),i.ZQ&&e.link?(0,n.jsxs)("div",{className:"tb_post_modal_view_link",onClick:t=>window.open(e.link,"_blank"),children:[(0,n.jsx)("div",{className:"tb_post_modal_view",style:o,children:e.network.name}),(0,n.jsx)("div",{className:"tb_post_network_ico tb__icon tb-share-square",style:o,children:" "})]}):null]})}}const w=(0,s.$j)((t=>{}),(t=>({sharePostPopUP:e=>t((0,g.K8)(e))})))(b);var v=a(34867);const x=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4",fontSize:30},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707",fontSize:30},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c",fontSize:30},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C",fontSize:30}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C",fontSize:30},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000",fontSize:30}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983",fontSize:30},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000",fontSize:30},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1",fontSize:30}},{className:o,color:s,fontSize:r}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C",fontSize:30};return(0,n.jsx)("div",{className:o,style:{color:s,fontSize:r},"tb-network":e.id,children:(0,n.jsx)("div",{})})};class y extends o.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,n.jsx)("div",{className:"tb__modal_rating__",children:t?[...Array(t)].map(((t,a)=>(0,n.jsx)(x,{network:e},a))):null})}}var f=a(60173),k=a(46476);class j extends o.PureComponent{render(){const{contentTitle:t,item:e,Personalization:a,ThemeRule:o,mediaSize:s}=this.props,i=f.tq?o.fontSize:f.Em?o.fontSize+2:o.fontSize+5,r={fontFamily:o.css_font,fontSize:i,color:o.fontColor};let l=20==e.network.id?this.props.contentData:(0,h.Fx)(this.props.contentData);12==e.network.id&&(l=(0,v.ZP)(l));const d=a.textDecorate?" tb_post_modal_text_decorate":"";return 47===a.widgetTheme&&(document.querySelector("html").style.overflow="auto"),(0,n.jsx)("div",{className:"tb_post_modal_post_wrapper",style:{height:1!=e.type?s.height-90:"auto"},children:(0,n.jsx)("div",{className:"tb_post_modal_post_wrap_in",children:(0,n.jsxs)("div",{className:"tb_post_modal_post_content tb-cTBfont-".concat(o.font_varient),style:r,children:[null!=e.rating&&e.rating?(0,n.jsx)(y,{rating:e.rating,network:e.network}):null,(0,n.jsxs)("div",{className:"tb_post_modal_content ".concat(d),children:[t?(0,n.jsx)("div",{className:"tb_post_bold_txt",children:(0,v.ZP)(t)}):null,(0,n.jsx)(k.default,{data:e,content:l,Personalization:a})]})]})})},"content_".concat(e.id))}}a(80413);var P=a(70188);class N extends o.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.media}}render(){const{ImageClass:t,media:e}=this.props,{imgUrl:a,paddingBottom:o}=this.state,s={paddingBottom:"".concat(o,"%")};return(0,n.jsx)("div",{className:"".concat(t,"_wrap mediaHolder"),style:s,children:(0,n.jsx)("img",{className:t,role:"img",src:a,height:300,width:300,onLoad:this.onLoad,onError:t=>{t.target.src="".concat(P.do,"/media/images/no-image.svg"),(0,g.ht)(t)},alt:(0,h.P)(a)})})}}class S extends o.Component{constructor(){super(...arguments),this.state={prdImgLoaded:!1,noImg:!1},this.openUrl=t=>{var e;const{item:a,wall:o}=this.props,s=a.ugc_personalizaion.UgcSetting;var i=t;114259==(null===o||void 0===o||null===(e=o.User)||void 0===e?void 0:e.id)?i+="?utm_source=tagshop&utm_medium=gallery&utm_campaign=".concat(a.network.name):1==(null===o||void 0===o?void 0:o.Wall.utm_status)&&(i+="?utm_source=".concat(null===o||void 0===o?void 0:o.Wall.utm_source,"&utm_medium=").concat(null===o||void 0===o?void 0:o.Wall.utm_medium,"&utm_campaign=").concat(null===o||void 0===o?void 0:o.Wall.utm_campaign)),2==parseInt(s.tab_target)?window.parent.location.href=i:window.open(i,"_blank")},this.tracking=(t,e)=>{var a;(0,g.S5)({type:1,action:2,wall:null===t||void 0===t||null===(a=t.Wall)||void 0===a?void 0:a.id,product_id:e,post:this.props.item.referenceId})}}render(){const{item:t,ugc_products:e,wall:a,openAddtocart:o,showAddToCart:s,onsetProductImg:i}=this.props,{prdImgLoaded:r,noImg:l}=this.state,d=t.ugc_personalizaion.UgcSetting;return(0,n.jsxs)("div",{className:"tb_pro__container",children:[(0,n.jsx)("div",{className:"tb_pro__heading tb-cTBfont-".concat(d.feature_font_varient),children:(0,v.ZP)(d.feature_text)}),(0,n.jsx)("div",{className:"tb_pro__wrap",children:e.map(((e,r)=>(0,n.jsx)("div",{className:"tb_pro__item",children:(0,n.jsxs)("div",{className:"tb_pro__wrap_in",children:[(0,n.jsx)("div",{className:"tb_pro__img_wrapper",children:(0,n.jsx)(N,{ImageClass:"tb_pro__image",media:e.UgcProduct.product_image,size:!1})}),t.ugc_personalizaion&&d&&e.UgcProduct.product_title?(0,n.jsxs)("div",{className:"tb_pro__title tb-cTBfont-".concat(d.title_font_varient),children:[" ",e.UgcProduct.product_title]}):null,e.UgcProduct.product_price>0||e.UgcProduct.product_discount>0?(0,n.jsx)("div",{className:"tb_pro__price",children:(0,n.jsxs)("div",{className:"tb_pro__price tb-cTBfont-".concat(d.price_font_varient),children:[" ",e.UgcProduct.price_currency_symbol," ",e.UgcProduct.product_discount>0?e.UgcProduct.product_discount:e.UgcProduct.product_price]})}):null,e.UgcProduct.product_discount>0&&e.UgcProduct.product_discount!=e.UgcProduct.product_price?(0,n.jsxs)("div",{className:"tb_pro__discount_price  tb-cTBfont-".concat(d.discount_font_varient),children:[e.UgcProduct.price_currency_symbol," ",e.UgcProduct.product_price]}):null,s?(0,n.jsx)("div",{className:"tb_pro__link",children:(0,n.jsx)("a",{onClick:()=>{o(e.id,e),i(e.UgcProduct.product_image),this.tracking(a,e.UgcProduct.id)},className:"tb_pro__btn tb-cTBfont-".concat(d.button_font_varient),children:d.buy_now_text})}):(0,n.jsx)("div",{className:"tb_pro__link",children:(0,n.jsx)("a",{onClick:()=>{this.openUrl(e.UgcProduct.product_url),this.tracking(a,e.UgcProduct.id)},className:"tb_pro__btn tb-cTBfont-".concat(d.button_font_varient),target:a&&a.User&&"102810"!=a.User.id?"_blank":"",children:d.buy_now_text})})]})},r)))})]})}}const I=S;function C(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important")}class D extends o.PureComponent{render(){const{brandingNetworks:t,languageSetting:e,wallId:a,themeID:o}=this.props,s=i.ZQ?"".concat(P.ZS,"?utm_source=free_plan_widget_").concat(o,"&utm_medium=").concat(a,"&utm_campaign=powered-by-logo"):"".concat((0,h.$t)(t,a)[0]).concat(P.Si),r=i.ZQ?"tagembed_logo-light.svg":"taggbox_logo-light.svg";return(0,n.jsxs)("a",{href:s,target:"_blank",ref:t=>{t&&(t.style.setProperty("position","absolute","important"),t.style.setProperty("left","auto","important"),t.style.setProperty("right","0","important"),t.style.setProperty("bottom","-30px","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("padding-top","4px","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","auto","important"),t.style.setProperty("text-decoration","none","important"),t.style.setProperty("direction","ltr","important"),t.style.setProperty("transform","none","important"),C(t))},children:[(0,n.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("font-size","14px","important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("margin-right","6px","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),t.style.setProperty("font-family","inherit","important"),t.style.setProperty("transform","none","important"),C(t))},children:[Object.keys(e).length>0&&e.poweredBy?e.poweredBy:"Powered by"," "]}),(0,n.jsx)("div",{ref:t=>{t&&(t.style.setProperty("background-image","url(".concat(P.do,"/media/images/").concat(r,")"),"important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("background-position","left center","important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("height","26px","important"),t.style.setProperty("min-height","26px","important"),t.style.setProperty("width","96px","important"),t.style.setProperty("min-width","96px","important"),t.style.setProperty("transform","none","important"),C(t))}})]})}}class z extends o.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,platform:null,imgData:[],type:"",parentID:"",isRepeatingPost:!1,mediaSize:{height:500,width:500,maxHeight:0}},this.keyboardEvent=t=>{let e=this.state.currentIndex;39==t.keyCode||40==t.keyCode?(e+=1,this.featuredPopSliderChangeIndex(e)(t)):37==t.keyCode||38==t.keyCode?(e-=1,this.featuredPopSliderChangeIndex(e)(t)):27==t.keyCode&&this.closeWidgetPopUP()},this.onCloseModal=()=>{var t=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));t&&t.classList.contains("tb_post_modal_show")&&(t.classList.remove("tb_post_modal_show"),this.setState({isEnable:0,currentIndex:null,type:""},this.props.closePopUP()));var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.closeWidgetPopUP=t=>this.onCloseModal(),this.getWidgetPopUPEvent=t=>{void 0!==t&&""!=t&&t.card&&("post"==t.type?this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,imgData:t.imgData,personalization:t.personalization,type:t.type}):"submit-pic"==t.type&&this.setState({isEnable:1,type:t.type,windowParent:t}))},this.featuredPopSliderChangeIndex=t=>e=>{const{eventData:a,isRepeatingPost:o}=this.state;a.idArray.length-1!=t&&t!==a.idArray.length||o?t===a.idArray.length-1||t===a.idArray.length?this.setState({currentIndex:0,isRepeatingPost:!1}):-1===t?this.setState({currentIndex:a.idArray.length-1,isRepeatingPost:!1}):this.setState({currentIndex:t,isRepeatingPost:!1}):this.loadMore()},this.loadMore=()=>{const{wall:t,postData:e,postHeight:a}=this.props,{eventData:o,currentIndex:s}=this.state,i=!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData);if(o.idArray.length-1==s&&this.setState({isRepeatingPost:!0}),i){const o=t.ThemeRule.numberOfPosts,s=Math.floor(Date.now()/1e3);this.props.managePostHeight(a),this.props.getDataNextSteps(t.Wall.id,s,o,e.appendData.networkID,e.appendData.after,e.appendData.heightEvent)}else this.setState({currentIndex:0})},this.popUpCloseClckOnWindow=()=>{document.addEventListener("click",(t=>{t.target.matches("#tb_post_modal_modal-".concat(this.state.parentID))&&this.onCloseModal()}))},this.mediaSize=t=>{const{mediaSize:e}=this.state;this.setState({mediaSize:{height:e.maxHeight&&parseInt(e.maxHeight)>=parseInt(t.height)?e.maxHeight:t.height,width:t.width,maxHeight:e.maxHeight&&parseInt(e.maxHeight)>=parseInt(t.height)?e.maxHeight:t.height}})}}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(".tb_app_container"),a=h.b8?h.b8:e.parentNode.id;this.setState({parentID:a}),this.getWidgetPopUPEvent(t),setTimeout((()=>{var e=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));e&&e.classList.add("tb_post_modal_show"),void 0!=t.personalization.widgetTheme&&47==t.personalization.widgetTheme&&e&&(e.style.overflow="hidden")}));var o=document.getElementsByTagName("html");o&&o[0]&&(o[0].style.overflow="hidden"),this.popUpCloseClckOnWindow(),window.addEventListener&&window.addEventListener("keydown",this.keyboardEvent)}componentWillUnmount(){window.removeEventListener("keydown",this.keyboardEvent)}componentDidUpdate(){const t=this;let e=0;if(window.editor){let a=document.getElementById("tb_post_modal_modal-taggbox_main"),o=document.querySelector(".tb_post_modal_conetent"),s=document.querySelector(".tb_post_modal_nxt_btn"),i=document.querySelector(".tb_post_modal_prev_btn");a&&(o&&(o.onclick=()=>e=1),s&&(s.onclick=()=>e=1),i&&(i.onclick=()=>e=1),a.onclick=()=>{0==e&&t.onCloseModal(),e=0})}}componentWillReceiveProps(t){const{postData:e}=t;let{completeData:a,eventData:o}=this.state;if(a.length!=e.postData.length){let t=e.postData.map((t=>e.completeDataObject[t])).filter((t=>!String(t.id).includes("free_add_")));o.idArray=t,this.setState({completeData:t,eventData:o},(()=>{const{currentIndex:t}=this.state;this.setState({currentIndex:t+1})}))}else{!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData)}}render(){const{wall:t,reportMediaPopUp:e,languageSetting:a,brandingNetworks:o,postData:s}=this.props,{currentIndex:r,completeData:l,eventData:d,parentID:c,mediaSize:p}=this.state;let m=null;m=-1===r?l[d.idArray.length-1]:l[r];const g=1==t.Personalization.popupSlideShow,b=(0,h.uu)(t.ThemeRule.cardColor),v=!!(m&&c&&Object.keys(m).length>0&&1==t.ThemeRule.hideContent&&1!=m.type);return m&&c&&Object.keys(m).length>0?(0,n.jsx)("div",{className:"tb_post_modal_modal",id:"tb_post_modal_modal-".concat(c),children:(0,n.jsx)("div",{className:"tb_post_modal_modal_dialog  ".concat(v?"tb_only_media_modal":""),children:(0,n.jsxs)("div",{className:"tb_post_modal_conetent",children:[(0,n.jsxs)("div",{className:"tb_post_modal_modal_head",children:[(0,n.jsxs)("div",{className:"tb_post_modal_modal_header",children:[(0,n.jsx)("div",{className:"tb_post_modal_post_link_small",children:(0,n.jsx)("div",{className:"tb_post_modal_post_address",children:m.link?(0,n.jsxs)("div",{className:"tb_post_modal_view_link",onClick:t=>window.open(m.link,"_blank"),children:[(0,n.jsxs)("div",{className:"tb_post_modal_view",children:[a.viewOnText," ",m.network.name]}),(0,n.jsx)("div",{className:"tb_post_view_ico tb__icon tb-arrow-right-alt",children:" "})]}):null})}),(0,n.jsx)("div",{className:"tb_post_modal_close_wrap",children:(0,n.jsx)("div",{className:"tb_post_modal_close_btn",onClick:this.closeWidgetPopUP,children:(0,n.jsx)("div",{className:"tb_post_close_ico tb__icon tb-close-alt",children:" "})})})]}),g?(0,n.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_content ".concat(1===m.type?"tb_post_modal_text_nav__":null),children:[(0,n.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(r-1),children:(0,n.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,n.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(r+1),children:(0,n.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null]}),(0,n.jsx)("div",{className:"tb_post_modal_body_container",children:(0,n.jsxs)("div",{className:"tb_post_modal_modal_body",style:{backgroundColor:t.ThemeRule.cardColor},children:[1!=m.type?(0,n.jsxs)("div",{className:"tb_post_modal_details_left",children:[g?(0,n.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_img",children:[(0,n.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(r-1),children:(0,n.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,n.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(r+1),children:(0,n.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null,(0,n.jsx)(_,{data:m,wall:t,mediaSizeCallback:this.mediaSize})]}):null,(0,n.jsx)("div",{className:"tb_post_modal_details_right ".concat(1===m.type?"tb_post_modal_text__":""),style:{backgroundColor:t.ThemeRule.cardColor},children:(0,n.jsxs)("div",{className:"tb_post_modal_content_wrap",children:[(0,n.jsx)("div",{className:"tb_post_modal_content_in",children:(0,n.jsxs)("div",{className:"tb_post_modal_post_detail_wrap",children:[m.ugc_products.length>0?(0,n.jsx)(I,{item:m,wall:t,personalization:t.Personalization,ugc_products:m.ugc_products}):null,(0,n.jsx)(u,{item:m,ThemeRule:{...t.ThemeRule,fontColor:b},Personalization:t.Personalization,ownerId:t.Wall.owner},"author_".concat(m.id)),v?null:(0,n.jsx)(j,{ThemeRule:{...t.ThemeRule,fontColor:b},Personalization:t.Personalization,item:m,contentData:m.content,contentTitle:m.contentTitle,mediaSize:!i.ig&&p},m.id)]})}),(0,n.jsxs)("div",{className:"tb_post_modal_post_footer ".concat(i.ig?"tb_post_modal_post_footer_ts":""),children:[i.Jx?(0,n.jsx)("div",{className:"tb_post_modal_post_footer_report",children:(0,n.jsx)("div",{className:"tb_post_modal_post_report_media_btn_wrap__",onClick:t=>e(m),children:(0,n.jsx)("div",{className:"tb_post_modal_post_report_media_btn__",style:{color:b},children:"Report"})})}):null,(0,n.jsx)(w,{item:m,wall:t,color:b,languageSetting:a})]})]})}),t.UserRule.branding_lite&&1==t.UserRule.branding_lite||s.isFreeAdsStatus?(0,n.jsx)(D,{brandingNetworks:o,languageSetting:a,wallId:t.Wall.id,themeID:t.Personalization.widgetTheme}):null]})})]})})}):null}}const T=(0,s.$j)((t=>({loaderData:t.loaderData,postHeight:t.postHeight.data})),(t=>({closePopUP:e=>t((0,g.zj)(e)),reportMediaPopUp:e=>t((0,g.SD)(e)),managePostHeight:e=>t((0,g.B0)(e)),getDataNextSteps:(e,a,o,s,i,n,r)=>t((0,g.Sx)(e,a,o,s,i,n,r))})))(z)},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});a(72791);var o=a(80184);const s=t=>{let{username:e,network:a,authorClass:s}=t;return(0,o.jsx)("img",{className:"".concat(s,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var o=a(72791),s=a(46535),i=a(2703),n=a(80184);const r=o.lazy((()=>a.e(1088).then(a.bind(a,41088))));class l extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:l}=this.props,d=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),c=s.ZQ&&36==t.id?"tagembed":t.icon;return d?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(c.replace(/fa-/g,"")),style:{color:(0,i.mD)(59)?null:a.iconColor},children:(0,n.jsx)("div",{})}):(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{network:t,networkClass:e})]})}}},46476:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var o=a(72791),s=a(35737),i=a(34867),n=a(80184);const r=a(80844),l=t=>(0,n.jsx)(s.default,{children:(0,i.ZP)(t)}),d=t=>{let{data:e,content:a,Personalization:o}=t;const s={color:o.hashtag_color,fontWeight:"bold",backgroundColor:1==o.hashtag_background_status?o.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===o.hashtag_highlight&&0===o.hashtag_feed&&0===o.hashtag_all?(0,i.ZP)(a):1===o.hashtag_highlight&&0===o.hashtag_feed&&1===o.hashtag_all?l(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:s,children:["#",t]}))),e.slackMember)):1===o.hashtag_highlight&&1===o.hashtag_feed&&0===o.hashtag_all?l(window.slackdown.parse(r(a,e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:s,children:t}))),e.slackMember)):1===o.hashtag_highlight&&1===o.hashtag_feed&&1===o.hashtag_all?l(window.slackdown.parse(r(a,/#(\w+)/g,((t,a)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:s,children:["#",t]},"".concat(e.id,"_").concat(a)))),e.slackMember)):l(window.slackdown.parse(a,e.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===o.hashtag_highlight&&0===o.hashtag_feed&&0===o.hashtag_all?(0,i.ZP)(a):1===o.hashtag_highlight&&0===o.hashtag_feed&&1===o.hashtag_all?r((0,i.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:s,children:["#",t]}))):1===o.hashtag_highlight&&1===o.hashtag_feed&&0===o.hashtag_all?r((0,i.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:s,children:t}))):1===o.hashtag_highlight&&1===o.hashtag_feed&&1===o.hashtag_all?r((0,i.ZP)(a),/#(\w+)/g,((t,a)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:s,children:["#",t]},"".concat(e.id,"_").concat(a)))):(0,i.ZP)(a)})},c=(0,o.memo)(d)},80413:(t,e,a)=>{"use strict";e.Ad=void 0;var o=a(7782);var s=a(94590);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var i=a(52047)},7782:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=a(7782);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,s)=>{if("undefined"===typeof window)return s(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return s(o.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{i&&window.clearTimeout(i),s("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(i=window.setTimeout((()=>s(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},52047:function(t,e,a){"use strict";var o=this&&this.__awaiter||function(t,e,a,o){return new(a||(a=Promise))((function(s,i){function n(t){try{l(o.next(t))}catch(e){i(e)}}function r(t){try{l(o.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,r)}l((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const s=a(72791),i=a(94590);e.useImageSize=(t,e)=>{const[a,n]=(0,s.useState)(null),[r,l]=(0,s.useState)(!1),[d,c]=(0,s.useState)(null);return(0,s.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:a,height:o}=yield(0,i.getImageSize)(t,e);n({width:a,height:o})}catch(d){c(d.toString())}finally{l(!1)}}))}),[t,e]),[a,{loading:r,error:d}]}},50247:()=>{}}]);
//# sourceMappingURL=9807.ce2ad8f3.chunk.js.map