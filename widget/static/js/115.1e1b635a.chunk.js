"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[115],{13422:(t,e,i)=>{i.d(e,{Z:()=>s});var o=i(70188),a=i(2703),r=i(80184);const s=t=>{let{size:e}=t;const i=t=>!(!(0,a.mD)(t)||1!=e);return(0,r.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("top","".concat(i(55)||i(62)||i(61)?"auto":"14px"),"important"),t.style.setProperty("left","".concat(i(62)||i(61)?"auto":"14px"),"important"),t.style.setProperty("right","".concat(i(55)||i(62)||i(61)?"14px":"auto"),"important"),t.style.setProperty("bottom","".concat(i(55)||i(62)||i(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image","url(".concat(o.do,"/media/images/tagshop-light.svg)"),"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,r.jsx)("div",{children:" "})})}},87641:(t,e,i)=>{i.d(e,{Z:()=>u});var o=i(72791),a=i(77581),r=i(89057),s=i(18947),n=i(2703),d=i(11225),c=i(80184);const p=(0,r.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),l=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",o=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(o,"\n        </a>")};class h extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:i}=this.props;if(e&&Object.keys(e).length>0){var o,a;const{wall:r}=e;(0,d.S5)({type:1,action:2,wall:null===r||void 0===r||null===(o=r.Wall)||void 0===o?void 0:o.id,product_id:t.id,post:i.referenceId,owner:null===r||void 0===r||null===(a=r.Wall)||void 0===a?void 0:a.owner,feed:i.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,o=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return o.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.i1)();return(0,c.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ ".concat(0==o.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,c.jsx)(p,{children:(0,c.jsx)(s.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:l(t.UgcProduct)})})]},e)}))}):null}}const u=(0,a.$j)((t=>({appData:t.appData})))(h)},40115:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var o=i(72791),a=i(11225),r=i(87641),s=i(80413),n=i(2703),d=i(70188),c=(i(46535),i(13422),i(80184));class p extends o.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,s.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:o,ownerId:s,hotspot:p}=this.props,{imgUrl:l,paddingBottom:h,size:u,fixedPaddingBottom:g}=this.state,m={paddingBottom:"".concat(this.props.size?1==this.props.size?null:g:h,"%")},_={backgroundImage:"url(".concat(l,")")};if(u.width>u.height)var y="100%",w="".concat(u.height/u.width*100,"%");else w="100%",y="".concat(u.width/u.height*100,"%");const v=!!(e.hotspot&&e.ugc_products.length>0&&p),f={width:v&&this.props.size?y:null,height:v&&this.props.size?w:null};return(0,c.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,children:[v?(0,c.jsx)("div",{className:"tb_blur_bg_",style:_}):null,(0,c.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:f,children:[v?(0,c.jsx)(r.Z,{product:e.ugc_products,dataItem:e}):null,(0,c.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:l,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":o,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(d.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,n.F$)(e.content)})]})]})}}},80413:(t,e,i)=>{e.Ad=void 0;var o=i(7782);var a=i(94590);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var r=i(52047)},7782:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=i(7782);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(o.ErrorMessage.URL_IS_NOT_DEFINED);let r=null;const s=new Image;s.addEventListener("load",(()=>{r&&window.clearTimeout(r),i({width:s.naturalWidth,height:s.naturalHeight})})),s.addEventListener("error",(t=>{r&&window.clearTimeout(r),a("".concat(t.type,": ").concat(t.message))})),s.src=t,e.timeout&&(r=window.setTimeout((()=>a(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},52047:function(t,e,i){var o=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))((function(a,r){function s(t){try{d(o.next(t))}catch(e){r(e)}}function n(t){try{d(o.throw(t))}catch(e){r(e)}}function d(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,n)}d((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=i(72791),r=i(94590);e.useImageSize=(t,e)=>{const[i,s]=(0,a.useState)(null),[n,d]=(0,a.useState)(!1),[c,p]=(0,a.useState)(null);return(0,a.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){d(!0),s(null);try{const{width:i,height:o}=yield(0,r.getImageSize)(t,e);s({width:i,height:o})}catch(c){p(c.toString())}finally{d(!1)}}))}),[t,e]),[i,{loading:n,error:c}]}}}]);
//# sourceMappingURL=115.1e1b635a.chunk.js.map