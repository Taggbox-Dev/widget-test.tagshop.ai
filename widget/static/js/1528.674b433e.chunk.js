"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1528],{91528:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});var a=o(47313),i=o(43635),l=(o(2406),o(97915)),c=o(98511),d=o(17739),s=(o(35179),o(46417));class r extends a.Component{constructor(t){super(t),this.state={mediaLoaded:!1,largerHeight:0,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file}}}componentWillReceiveProps(t){const{data:e}=t;this.props.data!==e&&this.setState({imgSize:{small:e.postFileNew,large:e.filename,orignal:e.file}})}render(){const{data:t,wall:e,opacity:o,mediaSize:a}=this.props,{mediaLoaded:r,imgSize:n}=this.state,p=!!(t.hotspot&&t.ugc_products.length>0),u={opacity:o,filter:r?"blur(2px)":null};return(0,s.jsxs)("div",{className:"tb_post_modal_img_holder",children:[null!==t&&void 0!==t&&t.postBranding?(0,s.jsx)(c.Z,{size:2}):null,p?(0,s.jsx)(l.Z,{product:t.ugc_products,dataItem:t}):null,(0,s.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:n.small,srcSet:"".concat(n.large,", 991w ").concat(n.small,", 480w"),sizes:a&&a.width,alt:(0,d.P)(n.small),"data-link":t.link,"data-network":t.network.id,"data-wall-id":e.Wall.id,"data-owner-id":e.Wall.owner,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-filter-id":t.filterId,"data-load":"0",onLoad:this.handleImageLoad,onError:t.stories?null:t=>{(0,i.ht)(t)},loading:"lazy",draggable:"false",width:a&&a.width,height:a&&a.height,style:u},n.small)]})}}},97915:(t,e,o)=>{o.d(e,{Z:()=>_});var a=o(47313),i=o(43411),l=o(83773),c=o(6119),d=o(17739),s=o(43635),r=o(46417);const n=(0,l.componentWillAppendToBody)((t=>{let{children:e,wallId:o}=t;return o?(0,r.jsx)("div",{"data-widget-id":o,children:e}):null})),p=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,o=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",a=t.product_price>0||t.product_discount>0?"".concat(o,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(a,"\n        </a>")};class u extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:o}=this.props;if(e&&Object.keys(e).length>0){var a,i;const{wall:l}=e;(0,s.S5)({type:1,action:2,wall:null===l||void 0===l||null===(a=l.Wall)||void 0===a?void 0:a.id,product_id:t.id,post:o.referenceId,owner:null===l||void 0===l||null===(i=l.Wall)||void 0===i?void 0:i.owner,feed:o.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:o}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,i)=>{var l,s;const u=(0,d.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(u),onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(i),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(o==i?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:i+1}),(0,r.jsx)(n,{wallId:null===e||void 0===e||null===(l=e.wall)||void 0===l||null===(s=l.Wall)||void 0===s?void 0:s.id,children:(0,r.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(u),clickable:!0,html:p(t.UgcProduct)})})]},i)}))}):null}}const _=(0,i.$j)((t=>({appData:t.appData})))(u)}}]);