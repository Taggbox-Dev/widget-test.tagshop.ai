"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6451,584],{34873:(t,e,o)=>{o.d(e,{Z:()=>r});var a=o(47313),s=(o(43635),o(2406),o(17739)),i=o(98501),n=o(46417);class r extends a.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src,loadError:!1})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.media}}componentWillReceiveProps(t){const{itemDetails:e}=t,{loadError:o}=this.state;o&&t!=this.props&&e&&Object.keys(e).length>0&&e.showCart&&this.setState({imgUrl:e.data.featured_image,loadError:!1})}render(){const{ImageClass:t,media:e,itemDetails:o}=this.props,{imgUrl:a,paddingBottom:r}=this.state,l={paddingBottom:"".concat(r,"%")};return(0,n.jsx)("div",{className:"".concat(t,"_wrap mediaHolder"),style:l,children:(0,n.jsx)("img",{className:t,role:"img",src:a,height:300,width:300,onLoad:this.onLoad,onError:t=>{this.setState({loadError:!0}),t.target.src=i.XW},alt:(0,s.P)(a)})})}}},417:(t,e,o)=>{o.r(e),o.d(e,{default:()=>R});var a=o(47313),s=o(43411),i=o(35179),n=o(2406),r=o(98511),l=o(46417);const d=a.lazy((()=>Promise.all([o.e(6119),o.e(510),o.e(1774),o.e(472)]).then(o.bind(o,70472)))),c=a.lazy((()=>Promise.all([o.e(6119),o.e(1528)]).then(o.bind(o,91528)))),p=a.lazy((()=>Promise.all([o.e(510),o.e(6696)]).then(o.bind(o,36696)))),_=a.lazy((()=>Promise.all([o.e(9243),o.e(5063)]).then(o.bind(o,42870))));class h extends a.PureComponent{constructor(t){super(t),this.handleResize=()=>{this.setState({winSize:{width:window.innerWidth,height:window.innerHeight}},(()=>{const{mediaSize:t}=this.state;this.setSize(t.height,t.width)}))},this.setSize=(t,e)=>{const{hideContent:o}=this.props,{winSize:a}=this.state,s=Math.min((a.width-535)/e,(a.height-(90+(o?69:0)))/t),i={height:t*s,width:e*s,paddingBottom:100*t/e},n={winHeight:a.height,winWidth:a.width,height:i.height,width:i.width,paddingBottom:i.paddingBottom};this.props.allSizeCallback(n),this.setState({mediaSize:{height:i.height,width:i.width,paddingBottom:i.paddingBottom}})},this.onMediaLoad=async t=>{const e=!!t.mediaHeight&&parseInt(t.mediaHeight,10),o=!!t.mediaWidth&&parseInt(t.mediaWidth,10);if(e&&o)this.setSize(e,o);else{const e=document.querySelector(".track".concat(t.id)),o=e?parseInt(e.getAttribute("data-height"),10):0,s=e?parseInt(e.getAttribute("data-width"),10):0;if(s>0&&o>0)this.setSize(o,s);else try{const{width:e,height:o}=await(0,n.Ad)(t.postFileNew);this.setSize(o,e)}catch(a){this.setSize(1e3,1e3)}}},this.state={winSize:{width:window.innerWidth,height:window.innerHeight},mediaSize:{height:null,width:null,paddingBottom:null}}}static getDerivedStateFromProps(t,e){return t.data!==e.data?{...e,data:t.data}:null}componentDidMount(){const{data:t}=this.props;window.addEventListener("resize",this.handleResize),this.onMediaLoad(t)}componentDidUpdate(t){this.props.data!==t.data&&this.onMediaLoad(this.props.data)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}render(){const{data:t}=this.props,{winSize:e,mediaSize:o}=this.state,s={maxHeight:e.width>991?o.height:null,maxWidth:e.width>991?o.width:null,aspectRatio:"".concat(o.width," / ").concat(o.height),flexBasis:e.width>991?o.height:null},i={paddingBottom:"".concat(o.paddingBottom,"%"),width:e.width>991?o.width:null};return(0,l.jsxs)("div",{className:"tb_post_modal_media_holder",style:s,children:[null!==t&&void 0!==t&&t.postBranding?(0,l.jsx)(r.Z,{size:2}):null,(0,l.jsx)("div",{className:"tb_post_modal_media",style:i,children:(0,l.jsx)("div",{className:"tb_post_modal_media_",children:t.imageList&&t.imageList.length>0?(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(d,{imageList:t.imageList,...this.props,mediaSize:o})}):2===t.type||4===t.type?(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{winSize:e,ImageUrl:t.filename,...this.props,mediaSize:o,opacity:1,hotspot:!0})}):3===t.type||5===t.type?t.isAudio?(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(_,{...this.props})}):(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[(0,l.jsx)(c,{winSize:e,ImageUrl:t.filename,...this.props,mediaSize:o,opacity:0}),(0,a.createElement)(p,{...this.props,key:t.id})]}):null})})]})}}var m=o(25810),u=o(17739),g=o(98935);class w extends a.PureComponent{constructor(t){super(t),this.state={picture:t.item.author.picture,isAuthorImagevalid:!0}}componentWillReceiveProps(t){const{item:e}=t;this.setState({picture:e.author.picture})}render(){const{item:t,ThemeRule:e,ownerId:o,Personalization:a}=this.props,s=t.author.picture&&String(t.author.picture).includes("author")?" ":t.author.picture.replace(/[ ]+/g,""),n="".concat(t.author.username&&t.author.username.length>0?"@":"").concat(t.author.username),r=!(i.ig&&!a.postAuthor||0==t.postAuthor||t.author.isInstaUser),d=0==t.timePost||t.author.isInstaUser,c=i.ig?!(!a.postTime||0==t.postAuthor||d):0!=t.postAuthor&&!d,p=i.ig?!(!a.postTime||d):!d;return(0,l.jsxs)("div",{className:"tb_post_modal_post_author",children:[(0,l.jsxs)("div",{className:"tb_post_modal_author_details",children:[r?(0,l.jsx)("div",{className:"tb_post_modal_author_media",style:{overflow:4==t.network.id?"visible":""},children:this.state.isAuthorImagevalid?(0,l.jsx)("img",{loading:"lazy",className:"tb_post_modal_author_media__",src:s&&String(s).includes("author.png")?" ":s.replace(/[ ]+/g,""),alt:(0,u.P)(s),width:45,height:45,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,l.jsx)(g.Z,{network:t.network,username:t.author.name,authorClass:"tb_post_modal_author_media__",errorPic:t.author.errorPic})}):null,(0,l.jsxs)("div",{className:"tb_post_modal_author_deatils",children:[r?(0,l.jsx)("div",{className:"tb_post_modal_author_wrap",children:(0,l.jsxs)("div",{className:"tb_post_modal_author_usrname",onClick:e=>t.link?window.open(t.link):null,children:[t.author.name," "]})}):null,(0,l.jsxs)("div",{className:"tb_post_modal_author_info",children:[r?(0,l.jsx)("div",{className:"tb_post_modal_author_handlename",children:n}):null,c?(0,l.jsx)("div",{className:"tb_post_modal_seprator_dot",children:(0,l.jsx)("div",{})}):null,p?(0,l.jsx)("span",{className:"tb_post_modal_post_time",children:(0,u.Sy)(t.createdAt)}):null]})]})]}),(0,l.jsx)("div",{className:"tb_post_modal_social_wrapper",onClick:e=>t.link?window.open((0,u.hd)(t.link),"_blank"):null,children:(0,l.jsx)(m.default,{network:t.network,networkClass:"tb_post_modal_social_ico tb__icon",font:e,ThemeRule:e,isDefault:1===e.iconType,isPopUp:!0})})]})}}var b=o(43635);class v extends a.PureComponent{constructor(){super(...arguments),this.onShareFacebooklink=t=>e=>{window.open(t,"_target");const{item:o,wall:a}=this.props;i.ZQ||(0,b.S5)({type:2,action:2,wall:a.Wall.id,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:a.Wall.owner}),(0,b.Fv)("Tagbox","popup_share_click","popup_share",a.Wall.id)},this.onTwitterClick=t=>{const{item:e,wall:o}=this.props;t&&(i.ZQ||(0,b.S5)({type:2,action:2,wall:o.Wall.id,feed:e.feedId,post:e.referenceId?e.referenceId:e.id,owner:o.Wall.owner}),(0,b.Fv)("Tagbox","popup_share_click","popup_share",o.Wall.id)),window.open(e.share.twitter,"_target")},this.linkedinShareCount=t=>e=>{const{item:o,wall:a}=this.props;i.ZQ||(0,b.S5)({type:2,action:2,wall:a.Wall.id,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:a.Wall.owner}),(0,b.Fv)("Tagbox","popup_share_click","popup_share",a.Wall.id),window.open(t,"_target")}}componentDidMount(){window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)})),window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)}))}componentWillReceiveProps(t){window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)})),window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)}))}render(){const{sharePostPopUP:t,item:e,color:o}=this.props,a={};return(0,l.jsxs)("div",{className:"tb_post_modal_post_footer_social_".concat(i.ZQ?" tb_post_modal_post_footer_social_te":"").concat(i.ZQ?" tb_post_modal_post_footer_social_ts":""),children:[(0,l.jsxs)("div",{className:"tb_post_modal_share_ico",children:[(0,l.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,l.jsx)("div",{onClick:this.onShareFacebooklink(e.share.facebook),children:(0,l.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-facebook",style:a,children:(0,l.jsx)("div",{})})})}),(0,l.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,l.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-twitter",onClick:this.onTwitterClick,style:a,children:(0,l.jsx)("div",{})})}),(0,l.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,l.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-linkedin",onClick:this.linkedinShareCount(e.share.linkedin),style:a,children:(0,l.jsx)("div",{})})}),i.Jx&&e.link?(0,l.jsx)("div",{className:"tb_post_modal_social_ico_list___",onClick:o=>t(e),children:(0,l.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-mail",style:a,children:" "})}):null,!i.ZQ&&e.link?(0,l.jsx)("div",{className:"tb_post_modal_social_ico_list___ tb_post_link__",onClick:t=>window.open(e.link,"_blank"),children:(0,l.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-link",style:a,children:" "})}):null]}),i.ZQ&&e.link?(0,l.jsxs)("div",{className:"tb_post_modal_view_link",onClick:t=>window.open((0,u.hd)(e.link),"_blank"),children:[(0,l.jsx)("div",{className:"tb_post_modal_view",style:a,children:e.network.name}),(0,l.jsx)("div",{className:"tb_post_network_ico tb__icon tb-share-square",style:a,children:" "})]}):null]})}}const y=(0,s.$j)((t=>{}),(t=>({sharePostPopUP:e=>t((0,b.K8)(e))})))(v);var x=o(16390);const P=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4",fontSize:30},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707",fontSize:30},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c",fontSize:30},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C",fontSize:30}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C",fontSize:30},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000",fontSize:30}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983",fontSize:30},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000",fontSize:30},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1",fontSize:30}},{className:a,color:s,fontSize:n}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C",fontSize:30};return(0,l.jsx)("div",{className:a,style:{color:s,fontSize:n},"tb-network":e.id,children:(0,l.jsx)("div",{})})};class f extends a.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,l.jsx)("div",{className:"tb__modal_rating__",children:t?[...Array(t)].map(((t,o)=>(0,l.jsx)(P,{network:e},o))):null})}}var k=o(30584);class j extends a.PureComponent{render(){const{contentTitle:t,item:e,Personalization:o,ThemeRule:a,allSize:s,isProduct:n,socialAction:r}=this.props,d=!n&&!i.ig&&s.winWidth>991?s.height-(r?90:0):null;let c=20==e.network.id?this.props.contentData:(0,u.Fx)(this.props.contentData);12==e.network.id&&(c=(0,x.ZP)(c));const p=o.textDecorate&&String(this.props.contentData).length>0?" tb_post_modal_text_decorate":"";return 47===o.widgetTheme&&(document.querySelector("html").style.overflow="auto"),(0,l.jsx)("div",{className:"tb_post_modal_post_wrapper",style:{maxHeight:1!=e.type?d:"100%"},children:(0,l.jsx)("div",{className:"tb_post_modal_post_wrap_in",children:(0,l.jsxs)("div",{className:"tb_post_modal_post_content",children:[null!=e.rating&&e.rating?(0,l.jsx)(f,{rating:e.rating,network:e.network}):null,(0,l.jsxs)("div",{className:"tb_post_modal_content tb-cTBfont-".concat(a.font_varient," ").concat(p),children:[t?(0,l.jsx)("div",{className:"tb_post_bold_txt",children:(0,x.ZP)(t)}):null,(0,l.jsx)(k.default,{data:e,content:c,Personalization:o})]})]})})},"content_".concat(e.id))}}var S=o(31881),N=o.n(S),D=o(60088),I=o(34873);async function C(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;const s="https://magento.taggshop.io/rest",i=a?"".concat(s,"/V1/carts/mine/items"):"".concat(s,"/V1/guest-carts/").concat(o,"/items"),n=a?{Authorization:"Bearer ".concat(a)}:{},r={cartItem:{sku:t,qty:e,quote_id:o}};try{const t=await N().post(i,r,{headers:n});console.log("Item added to cart:",t.data),async function(){const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:["cart"]).join(",");try{const e=await N().get("https://magento.taggshop.io/customer/section/load/",{params:{sections:t,force_new_section_timestamp:!0,_:Date.now()},withCredentials:!0});window.location.href="https://magento.taggshop.io/checkout/cart/",console.log("Loaded sections data:",e.data)}catch(o){var e;console.error("Error loading sections:",(null===(e=o.response)||void 0===e?void 0:e.data)||o.message)}}(["cart","directory-data","messages"])}catch(d){var l;console.error("Error adding to cart:",(null===(l=d.response)||void 0===l?void 0:l.data)||d.message)}}const z=(t,e,o)=>a=>{const s=btoa(t),i=function(t){const e=document.cookie.split("; ");for(let o of e){const[e,a]=o.split("=");if(e===t)return decodeURIComponent(a)}return null}("form_key"),n="https://magento.taggshop.io/checkout/cart/add/uenc/".concat(s,"/product/").concat(e,"/");console.log("BtnClick",s,i,n);const r=new FormData;r.append("product",e),r.append("selected_configurable_option",""),r.append("related_product",""),r.append("item",e),r.append("form_key",i),r.append("qty",1),console.log("BtnClick",s,i,n,r),(async(t,e,o)=>{const a=await N().post("https://magento.taggshop.io/rest/V1/guest-carts").then((t=>t.data));C(o,1,a),console.log("guestCartId",a)})(0,0,o),N().post(n,r,{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{console.log("Response:",t.data)})).catch((t=>{console.error("Error:",t)}))},U=t=>{let{url:e,productId:o,product_sku:a}=t;return(0,l.jsx)("div",{onClick:z("".concat(e,"/"),o,a),className:"tb_pro__btn",children:"Cart Value"})};class T extends a.Component{constructor(){super(...arguments),this.state={prdImgLoaded:!1,noImg:!1,itemDetails:{}},this.openUrl=t=>{const{wall:e}=this.props,o=e.ProductSetting.Button;var a=t;2==parseInt(o.newTab)?window.parent.location.href=a:window.open(a,"_blank")},this.tracking=(t,e)=>{var o,a;const{item:s}=this.props;(0,b.S5)({type:1,action:2,wall:null===t||void 0===t||null===(o=t.Wall)||void 0===o?void 0:o.id,product_id:e.id,post:s.referenceId,owner:null===t||void 0===t||null===(a=t.Wall)||void 0===a?void 0:a.owner,feed:s.feedId,currency:e.price_currency,price:e.product_discount>0?e.product_discount:e.product_price})}}componentDidMount(){const{item:t,wall:e}=this.props;t&&t.ugc_products&&t.ugc_products.length&&t.ugc_products.map((t=>{var o,a;let{itemDetails:s}=this.state;const i=t.UgcProduct.product_url;1==(null===e||void 0===e||null===(o=e.ProductSetting)||void 0===o||null===(a=o.Button)||void 0===a?void 0:a.pdp_target)?(s[t.id]={data:null,showCart:!1},this.setState({itemDetails:s})):i&&!String(i).includes(".html")&&(0,D.PC)(t.UgcProduct.product_url).then((o=>{var a;o.data.id?(s[t.id]={data:o.data,showCart:140717!=(null===e||void 0===e||null===(a=e.Wall)||void 0===a?void 0:a.owner)},this.setState({itemDetails:s})):(s[t.id]={data:null,showCart:!1},this.setState({itemDetails:s}))})).catch((e=>{s[t.id]={data:null,showCart:!1},this.setState({itemDetails:s})}))}))}render(){const{item:t,ugc_products:e,wall:o,openCart:a}=this.props,{itemDetails:s}=this.state,i=o.ProductSetting,n=i.CatalogueTitle,r=i.Price,d=i.ProductTitle,c=i.Button;return(0,l.jsxs)("div",{className:"tb_pro__container",children:[(0,l.jsx)("div",{className:"tb_pro__heading tb-cTBfont-".concat(n.varient),children:(0,x.ZP)(n.text)}),(0,l.jsx)("div",{className:"tb_pro__wrap",children:e.map(((e,i)=>{var n,p,_,h,m,u;return(0,l.jsx)("div",{className:"tb_pro__item",children:(0,l.jsxs)("div",{className:"tb_pro__wrap_in",children:[(0,l.jsx)("div",{className:"tb_pro__img_wrapper",children:(0,l.jsx)(I.Z,{ImageClass:"tb_pro__image",media:e.UgcProduct.product_image,size:!1,itemDetails:s[e.id]?s[e.id]:null})}),e.UgcProduct.product_title?(0,l.jsx)("div",{className:"tb_pro__title tb-cTBfont-".concat(d.varient),children:(0,x.ZP)(e.UgcProduct.product_title)}):null,e.UgcProduct.product_price>0||e.UgcProduct.product_discount>0?(0,l.jsxs)("div",{className:"tb_pro__price_wrap",children:[(0,l.jsxs)("div",{className:"tb_pro__price tb-cTBfont-".concat(r.varient),children:[e.UgcProduct.price_currency_symbol,e.UgcProduct.product_discount>0?e.UgcProduct.product_discount:e.UgcProduct.product_price]}),e.UgcProduct.product_discount>0&&e.UgcProduct.product_discount!=e.UgcProduct.product_price?(0,l.jsxs)("div",{className:"tb_pro__discount_price tb-cTBfont-".concat(r.varient),children:[e.UgcProduct.price_currency_symbol,e.UgcProduct.product_price]}):null]}):null,s&&Object.keys(s).length>0&&s[e.id]&&s[e.id].showCart?(0,l.jsx)("div",{className:"tb_pro__link",children:(0,l.jsx)("div",{onClick:null!==(n=s[e.id])&&void 0!==n&&null!==(p=n.data)&&void 0!==p&&p.available?()=>a(e.id,e,s[e.id],t):null,className:"tb_pro__btn ".concat(null!==(_=s[e.id])&&void 0!==_&&null!==(h=_.data)&&void 0!==h&&h.available?"":"tb_pro_sold"," tb-cTBfont-").concat(c.varient),children:null!==(m=s[e.id])&&void 0!==m&&null!==(u=m.data)&&void 0!==u&&u.available?c.text:"Sold Out"})}):(0,l.jsxs)("div",{className:"tb_pro__link",children:[console.log("product.UgcProduct",e.UgcProduct,e.UgcProduct.shopify_product_id),(0,l.jsx)(U,{url:e.UgcProduct.product_url,productId:e.UgcProduct.shopify_product_id,product_sku:e.UgcProduct.product_sku}),(0,l.jsx)("div",{onClick:()=>{this.openUrl(e.UgcProduct.product_url),this.tracking(o,e.UgcProduct)},className:"tb_pro__btn tb-cTBfont-".concat(c.varient),target:o&&o.User&&"102810"!=o.User.id?"_blank":"",children:c.text})]})]})},i)}))})]})}}const W=T;var E=o(98501);function M(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("transform","none","important"),t.style.setProperty("clip-path","initial","important"),t.style.setProperty("border","none","important")}class B extends a.PureComponent{render(){const{brandingNetworks:t,languageSetting:e,wallId:o,themeID:a}=this.props,s=i.ig||i.ZQ?"".concat(E.ZS):"".concat((0,u.$t)(t,o)[0]),n=i.ZQ?"tagembed-light.svg":i.ig?"tagshop-light.svg":"tagbox-light.svg?var=1";return(0,l.jsxs)("a",{href:s,target:"_blank",ref:t=>{t&&(t.style.setProperty("position","absolute","important"),t.style.setProperty("left","auto","important"),t.style.setProperty("right","0","important"),t.style.setProperty("bottom","-26px","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("padding-top","4px","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","auto","important"),t.style.setProperty("text-decoration","none","important"),t.style.setProperty("direction","ltr","important"),M(t))},children:[(0,l.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("font-size","13px","important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("margin-right","5px","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),t.style.setProperty("font-family","inherit","important"),M(t))},children:[Object.keys(e).length>0&&e.poweredBy?e.poweredBy:"Powered by"," "]}),(0,l.jsx)("div",{ref:t=>{t&&(t.style.setProperty("background-image","url(".concat(E.do,"/media/images/").concat(n,")"),"important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("background-position","left center","important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("height","22px","important"),t.style.setProperty("min-height","22px","important"),t.style.setProperty("width","90px","important"),t.style.setProperty("min-width","90px","important"),M(t))}})]})}}var A=o(53049);class Z extends a.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,imgData:[],type:"",parentID:"",isRepeatingPost:!1,allSize:{winHeight:null,winWidth:null,height:null,width:null,paddingBottom:null},addtoCartPopup:!1,productImg:""},this.keyboardEvent=t=>{let e=this.state.currentIndex;39==t.keyCode||40==t.keyCode?(e+=1,this.featuredPopSliderChangeIndex(e)(t)):37==t.keyCode||38==t.keyCode?(e-=1,this.featuredPopSliderChangeIndex(e)(t)):27==t.keyCode&&this.closeWidgetPopUP()},this.onCloseModal=()=>{var t=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));t&&t.classList.contains("tb_post_modal_show")&&(t.classList.remove("tb_post_modal_show"),this.setState({isEnable:0,currentIndex:null,type:"",addtoCartPopup:!1,selectedProdDetails:null},this.props.closePopUP()));var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.closeWidgetPopUP=t=>this.onCloseModal(),this.getWidgetPopUPEvent=t=>{void 0!==t&&""!=t&&t.card&&("post"==t.type?this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,imgData:t.imgData,personalization:t.personalization,type:t.type}):"submit-pic"==t.type&&this.setState({isEnable:1,type:t.type,windowParent:t}))},this.featuredPopSliderChangeIndex=t=>e=>{const{eventData:o,isRepeatingPost:a}=this.state;if(o.idArray.length-1!=t&&t!==o.idArray.length||a){let e;e=t===o.idArray.length-1||t===o.idArray.length?0:-1===t?o.idArray.length-1:t,this.setState({currentIndex:e,isRepeatingPost:!1},(()=>this.onPopUpTrack()))}else this.loadMore()},this.onPopUpTrack=()=>{try{const{wall:t}=this.props,{currentIndex:e,completeData:o,eventData:a}=this.state;let s=null;s=-1===e?o[a.idArray.length-1]:o[e];const n={feed:s.feedId,post:s.referenceId?s.referenceId:s.id},r={wallId:t.Wall.id,userId:t.Wall.owner,feedId:s.feedId,postId:s.id},l={action:2,wall:t.Wall.id,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,type:3,owner:t.Wall.owner};(0,b.S5)(i.ZQ?r:i.nX?l:{action:2,wall:t.Wall.id,...n,owner:t.Wall.owner})}catch(t){console.log("Error in PopUp Tracking",t)}},this.loadMore=()=>{const{wall:t,postData:e,postHeight:o}=this.props,{eventData:a,currentIndex:s}=this.state,i=!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData);if(a.idArray.length-1==s&&this.setState({isRepeatingPost:!0}),i){const a=t.ThemeRule.numberOfPosts,s=Math.floor(Date.now()/1e3);this.props.managePostHeight(o),this.props.getDataNextSteps(t.Wall.id,s,a,e.appendData.networkID,e.appendData.after,e.appendData.heightEvent)}else this.setState({currentIndex:0})},this.popUpCloseClckOnWindow=()=>{document.addEventListener("click",(t=>{t.target.matches("#tb_post_modal_modal-".concat(this.state.parentID))&&this.onCloseModal()}))},this.allSize=t=>{this.setState({allSize:{winHeight:t.winHeight,winWidth:t.winWidth,height:t.height,width:t.width,paddingBottom:100*t.height/t.width}})},this.onClickOpenCart=(t,e,o,a)=>{const{wall:s}=this.props,i={type:1,action:2,wall:s.Wall.id,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:s.Wall.owner,product_id:e.UgcProduct.id,currency:e.UgcProduct.price_currency,price:e.UgcProduct.product_discount>0?e.UgcProduct.product_discount:e.UgcProduct.product_price};this.setState({addtoCartPopup:!0,selectedProdDetails:o,tagProdDetail:{...e,trackingData:i},pId:t,productImg:e.UgcProduct.product_image})},this.closeCart=t=>{this.setState({addtoCartPopup:!1,selectedProdDetails:null},(()=>{var t=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));t&&t.classList.add("tb_post_modal_show")}))}}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(".tb_app_container"),o=u.b8?u.b8:e.parentNode.id;this.setState({parentID:o}),this.getWidgetPopUPEvent(t),setTimeout((()=>{var t=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));t&&t.classList.add("tb_post_modal_show")}));var a=document.getElementsByTagName("html");a&&a[0]&&(a[0].style.overflow="hidden"),this.popUpCloseClckOnWindow(),window.addEventListener&&window.addEventListener("keydown",this.keyboardEvent)}componentWillUnmount(){window.removeEventListener("keydown",this.keyboardEvent)}componentDidUpdate(){const t=this;let e=0;if(window.editor){let o=document.getElementById("tb_post_modal_modal-taggbox_main"),a=document.querySelector(".tb_post_modal_conetent"),s=document.querySelector(".tb_post_modal_nxt_btn"),i=document.querySelector(".tb_post_modal_prev_btn");o&&(a&&(a.onclick=()=>e=1),s&&(s.onclick=()=>e=1),i&&(i.onclick=()=>e=1),o.onclick=()=>{0==e&&t.onCloseModal(),e=0})}}componentWillReceiveProps(t){const{postData:e}=t;let{completeData:o,eventData:a}=this.state;if(o.length!=e.postData.length){let t=e.postData.map((t=>e.completeDataObject[t])).filter((t=>!String(t.id).includes("free_add_")));a.idArray=t,this.setState({completeData:t,eventData:a},(()=>{const{currentIndex:t}=this.state;this.setState({currentIndex:t+1},(()=>this.onPopUpTrack()))}))}else{!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData)}}render(){const{wall:t,reportMediaPopUp:e,languageSetting:o,brandingNetworks:a,postData:s}=this.props,{currentIndex:n,completeData:r,eventData:d,parentID:c,allSize:p,addtoCartPopup:_,productImg:m,selectedProdDetails:u,tagProdDetail:g}=this.state;let b=null;b=-1===n?r[d.idArray.length-1]:r[n];const v=1==t.Personalization.popupSlideShow,x=i.ig?1==t.ThemeRule.popupContent?0:1:t.ThemeRule.hideContent,P=!!(b&&c&&Object.keys(b).length>0&&1==x&&1!=b.type),f=!!(b&&c&&Object.keys(b).length>0&&b.ugc_products&&b.ugc_products.length>0),k=!!(t.ThemeRule.socialAction&&i.ig||!i.ig),S=i.ig&&f?" tb_post_modal_ts_p":"",N=i.ig?" tb_post_modal_ts_":"",D=i.ZQ?" tb_post_modal_te_":"",I="".concat(D).concat(N).concat(S),C={maxHeight:f&&i.ig&&p.winWidth>991?p.height-(k?45:0):null};return b&&c&&Object.keys(b).length>0?_?(0,l.jsx)(A.Z,{productImg:m,addtoCartPopup:_,productDetails:u,tagshopProductDeatil:g,closeCart:this.closeCart,onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:t,closePopUp:this.props.closePopUP}):(0,l.jsx)("div",{className:"tb_post_modal_modal",id:"tb_post_modal_modal-".concat(c),children:(0,l.jsx)("div",{className:"tb_post_modal_modal_dialog".concat(P&&!f?" tb_only_media_modal":""," ").concat(k?" tb_post_modal_modal_full":"").concat(I),children:(0,l.jsxs)("div",{className:"tb_post_modal_conetent",children:[(0,l.jsxs)("div",{className:"tb_post_modal_modal_head",children:[(0,l.jsxs)("div",{className:"tb_post_modal_modal_header",children:[(0,l.jsx)("div",{className:"tb_post_modal_post_link_small",children:(0,l.jsx)("div",{className:"tb_post_modal_post_address",children:b.link?(0,l.jsxs)("div",{className:"tb_post_modal_view_link",onClick:t=>window.open(b.link,"_blank"),children:[(0,l.jsxs)("div",{className:"tb_post_modal_view",children:[o.viewOnText," ",b.network.name]}),(0,l.jsx)("div",{className:"tb_post_view_ico tb__icon tb-arrow-right-alt",children:" "})]}):null})}),(0,l.jsx)("div",{className:"tb_post_modal_close_wrap",children:(0,l.jsx)("div",{className:"tb_post_modal_close_btn",onClick:this.closeWidgetPopUP,children:(0,l.jsx)("div",{className:"tb_post_close_ico tb__icon tb-close-alt",children:" "})})})]}),v?(0,l.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_content ".concat(1===b.type?"tb_post_modal_text_nav__":""),children:[(0,l.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(n-1),children:(0,l.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,l.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(n+1),children:(0,l.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null]}),(0,l.jsx)("div",{className:"tb_post_modal_body_container",children:(0,l.jsxs)("div",{className:"tb_post_modal_modal_body",children:[1!=b.type?(0,l.jsxs)("div",{className:"tb_post_modal_details_left",children:[v?(0,l.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_img",children:[(0,l.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(n-1),children:(0,l.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,l.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(n+1),children:(0,l.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null,(0,l.jsx)(h,{data:b,wall:t,allSizeCallback:this.allSize,hideContent:P&&!f})]}):null,(0,l.jsx)("div",{className:"tb_post_modal_details_right".concat(1===b.type?" tb_post_modal_text__":""),children:(0,l.jsxs)("div",{className:"tb_post_modal_content_wrap",children:[(0,l.jsx)("div",{className:"tb_post_modal_content_in",style:C,children:(0,l.jsxs)("div",{className:"tb_post_modal_post_detail_wrap",children:[f?(0,l.jsx)(W,{item:b,wall:t,personalization:t.Personalization,ugc_products:b.ugc_products,openCart:this.onClickOpenCart},"product_".concat(b.id)):null,(0,l.jsx)(w,{item:b,ThemeRule:t.ThemeRule,Personalization:t.Personalization,ownerId:t.Wall.owner},"author_".concat(b.id)),P?null:(0,l.jsx)(j,{ThemeRule:t.ThemeRule,Personalization:t.Personalization,item:b,contentData:b.content,contentTitle:b.contentTitle,allSize:p,isProduct:f,socialAction:k},b.id)]})}),k?(0,l.jsxs)("div",{className:"tb_post_modal_post_footer",children:[i.Jx?(0,l.jsx)("div",{className:"tb_post_modal_post_footer_report",children:(0,l.jsx)("div",{className:"tb_post_modal_post_report_media_btn_wrap__",onClick:t=>e(b),children:(0,l.jsx)("div",{className:"tb_post_modal_post_report_media_btn__",children:"Report"})})}):null,t.ThemeRule.socialAction||i.Jx||i.ZQ?(0,l.jsx)(y,{item:b,wall:t,languageSetting:o}):null]}):null]})}),t.UserRule.branding_lite&&1==t.UserRule.branding_lite||s.isFreeAdsStatus?(0,l.jsx)(B,{brandingNetworks:a,languageSetting:o,wallId:t.Wall.id,themeID:t.Personalization.widgetTheme}):null]})})]})})}):null}}const R=(0,s.$j)((t=>({loaderData:t.loaderData,postHeight:t.postHeight.data})),(t=>({closePopUP:e=>t((0,b.zj)(e)),reportMediaPopUp:e=>t((0,b.SD)(e)),managePostHeight:e=>t((0,b.B0)(e)),getDataNextSteps:(e,o,a,s,i,n,r)=>t((0,b.Sx)(e,o,a,s,i,n,r))})))(Z)},98935:(t,e,o)=>{o.d(e,{Z:()=>n});var a=o(47313),s=o(46417);const i=t=>{let{username:e,network:o,authorClass:a,errorPic:i}=t;const n="#ffffff"==o.color?"#000":o.color;return(0,s.jsx)("img",{className:"".concat(a,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,a.memo)(i)},98511:(t,e,o)=>{o.d(e,{Z:()=>n});var a=o(98501),s=o(17739),i=o(46417);const n=t=>{let{size:e}=t;const o=t=>!(!(0,s.mD)(t)||1!=e);return(0,i.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("top","".concat(o(55)||o(62)||o(61)?"auto":"14px"),"important"),t.style.setProperty("left","".concat(o(62)||o(61)?"auto":"14px"),"important"),t.style.setProperty("right","".concat(o(55)||o(62)||o(61)?"14px":"auto"),"important"),t.style.setProperty("bottom","".concat(o(55)||o(62)||o(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image","url(".concat(a.do,"/media/images/tagshop-light.svg)"),"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,i.jsx)("div",{children:" "})})}},25810:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});var a=o(47313),s=o(35179),i=o(46417);const n=a.lazy((()=>o.e(5867).then(o.bind(o,95867))));class r extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:r,Personalization:l}=this.props,d=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),c=s.ZQ&&36==t.id?"tagembed":t.icon;return d?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:t,networkClass:e})]})}}},30584:(t,e,o)=>{o.r(e),o.d(e,{default:()=>c});var a=o(47313),s=o(91523),i=o(16390),n=o(46417);const r=o(77560),l=t=>(0,n.jsx)(s.default,{children:(0,i.ZP)(t)}),d=t=>{let{data:e,content:o,Personalization:a}=t;const s={color:a.hashtag_color,fontWeight:"bold",backgroundColor:1==a.hashtag_background_status?a.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,i.ZP)(o):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?l(window.slackdown.parse(r(o,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:s,children:["#",t]}))),e.slackMember)):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?l(window.slackdown.parse(r(o,e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:s,children:t}))),e.slackMember)):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?l(window.slackdown.parse(r(o,/#(\w+)/g,((t,o)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:s,children:["#",t]},"".concat(e.id,"_").concat(o)))),e.slackMember)):l(window.slackdown.parse(o,e.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,i.ZP)(o):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?r((0,i.ZP)(o),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:s,children:["#",t]}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?r((0,i.ZP)(o),e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:s,children:t}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?r((0,i.ZP)(o),/#(\w+)/g,((t,o)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:s,children:["#",t]},"".concat(e.id,"_").concat(o)))):(0,i.ZP)(o)})},c=(0,a.memo)(d)},2406:(t,e,o)=>{e.Ad=void 0;var a=o(84228);var s=o(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var i=o(22537)},84228:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=o(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((o,s)=>{if("undefined"===typeof window)return s(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return s(a.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),o({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{i&&window.clearTimeout(i),s("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(i=window.setTimeout((()=>s(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,o){var a=this&&this.__awaiter||function(t,e,o,a){return new(o||(o=Promise))((function(s,i){function n(t){try{l(a.next(t))}catch(e){i(e)}}function r(t){try{l(a.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(n,r)}l((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const s=o(47313),i=o(65786);e.useImageSize=(t,e)=>{const[o,n]=(0,s.useState)(null),[r,l]=(0,s.useState)(!1),[d,c]=(0,s.useState)(null);return(0,s.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:o,height:a}=yield(0,i.getImageSize)(t,e);n({width:o,height:a})}catch(d){c(d.toString())}finally{l(!1)}}))}),[t,e]),[o,{loading:r,error:d}]}},5724:()=>{}}]);