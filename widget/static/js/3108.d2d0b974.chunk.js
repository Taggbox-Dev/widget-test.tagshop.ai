"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3108],{53108:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var o=i(72791),a=i(11225),s=i(87641),d=i(2703),r=i(80184);const n=JSON.parse(window.localStorage.getItem("mediaDimension"));class l extends o.PureComponent{constructor(t){super(t),this.updateImageDimensions=()=>{if(this.mediaRef.current){1===this.mediaRef.current.getAttribute("data-load")&&this.setState({imgUrl:this.mediaRef.current.src});const t=[this.mediaRef.current.offsetHeight,this.mediaRef.current.offsetWidth];window.localStorage.setItem("mediaDimension",JSON.stringify(t)),this.setState({largerHeight:t[0]>this.state.largerHeight?t[0]:this.state.largerHeight,mediaLoaded:!0,mediaSize:{height:this.mediaRef.current.offsetHeight,width:this.mediaRef.current.offsetWidth}},(()=>this.props.mediaSizeCallback({height:this.state.mediaSize.height,width:this.state.mediaSize.width})))}},this.state={mediaSize:{height:null!=n?n[0]:"85vh",width:null!=n?n[1]:"85vh"},mediaLoaded:!1,imgUrl:t.ImageUrl,largerHeight:0},this.mediaRef=o.createRef()}componentWillReceiveProps(t){const{ImageUrl:e}=t;this.state.imgUrl!==e&&this.setState({imgUrl:e,mediaLoaded:!1})}componentDidMount(){window.addEventListener&&window.addEventListener("resize",this.updateImageDimensions)}componentWillUnmount(){window.removeEventListener("resize",this.updateImageDimensions)}render(){const{data:t,wall:e,opacity:i}=this.props,{imgUrl:o,mediaSize:n,mediaLoaded:l}=this.state;return(0,r.jsxs)("div",{className:"tb_post_modal_img_holder".concat(l?"":" tb_media_modal_spinner"),style:{minHeight:l?null:n.height,minWidth:l?null:n.width},children:[t.hotspot&&t.ugc_products&&t.ugc_products.length>0?(0,r.jsx)(s.Z,{product:t.ugc_products,hotspotStyle:t.ugc_personalizaion.UgcSetting}):null,(0,r.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:o,alt:(0,d.P)(o),"data-link":t.link,"data-network":t.network.id,"data-wall-id":e.Wall.id,"data-owner-id":e.Wall.owner,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-filter-id":t.filterId,"data-load":"0",onLoad:this.updateImageDimensions,onError:t.stories?null:t=>{(0,a.ht)(t)},loading:"lazy",draggable:"false",style:{opacity:l?i:0}},o)]})}}},87641:(t,e,i)=>{i.d(e,{Z:()=>l});var o=i(72791),a=i(89057),s=i(18947),d=i(80184);const r=(0,a.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),n=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_pro_title">').concat(t.product_title,'</div>\n  <div class="tb_pro_price tb_price_disabled">').concat(t.price_currency_symbol).concat(t.product_discount,'</div>\n  <div class="tb_pro_price">').concat(t.price_currency_symbol).concat(t.product_price,"</div>\n  </a>"),l=t=>{let{product:e,hotspotStyle:i}=t;const[a,l]=(0,o.useState)(null);return i?(0,d.jsx)("div",{className:"tb_hotspot_wrap",children:e.map(((t,e)=>(0,d.jsxs)("a",{href:t.product_url,target:"_blank",id:"tb_hotspot-".concat(t.id),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>l(e),onMouseOut:t=>l(null),className:"tb_hotspot_dot".concat(a==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ ".concat(i.hotspot_type?"":"tb_hotspot_ani__"),style:{backgroundColor:i.hotspot_color,color:i.hotspot_type_color},children:i.hotspot_type?e+1:""}),(0,d.jsx)(r,{children:(0,d.jsx)(s.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id),clickable:!0,html:n(t.UgcProduct)})})]},e)))}):null}}}]);
//# sourceMappingURL=3108.d2d0b974.chunk.js.map