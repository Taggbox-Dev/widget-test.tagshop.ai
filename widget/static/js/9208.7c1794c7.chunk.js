"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9208,3108,8764],{53108:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(72791),d=i(11225),s=i(87641),o=i(2703),r=i(80184);const l=JSON.parse(window.localStorage.getItem("mediaDimension"));class n extends a.PureComponent{constructor(t){super(t),this.updateImageDimensions=()=>{if(this.mediaRef.current){1===this.mediaRef.current.getAttribute("data-load")&&this.setState({imgUrl:this.mediaRef.current.src});const t=[this.mediaRef.current.offsetHeight,this.mediaRef.current.offsetWidth];window.localStorage.setItem("mediaDimension",JSON.stringify(t)),this.setState({largerHeight:t[0]>this.state.largerHeight?t[0]:this.state.largerHeight,mediaLoaded:!0,mediaSize:{height:this.mediaRef.current.offsetHeight,width:this.mediaRef.current.offsetWidth}},(()=>this.props.mediaSizeCallback({height:this.state.mediaSize.height,width:this.state.mediaSize.width})))}},this.state={mediaSize:{height:null!=l?l[0]:"85vh",width:null!=l?l[1]:"85vh"},mediaLoaded:!1,imgUrl:t.ImageUrl,largerHeight:0},this.mediaRef=a.createRef()}componentWillReceiveProps(t){const{ImageUrl:e}=t;this.state.imgUrl!==e&&this.setState({imgUrl:e,mediaLoaded:!1})}componentDidMount(){window.addEventListener&&window.addEventListener("resize",this.updateImageDimensions)}componentWillUnmount(){window.removeEventListener("resize",this.updateImageDimensions)}render(){const{data:t,wall:e,opacity:i}=this.props,{imgUrl:a,mediaSize:l,mediaLoaded:n}=this.state,c=!!(t.hotspot&&t.ugc_products.length>0);return(0,r.jsxs)("div",{className:"tb_post_modal_img_holder".concat(n?"":" tb_media_modal_spinner"),style:{minHeight:n?null:l.height,minWidth:n?null:l.width},children:[c?(0,r.jsx)(s.Z,{product:t.ugc_products}):null,(0,r.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:a,alt:(0,o.P)(a),"data-link":t.link,"data-network":t.network.id,"data-wall-id":e.Wall.id,"data-owner-id":e.Wall.owner,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-filter-id":t.filterId,"data-load":"0",onLoad:this.updateImageDimensions,onError:t.stories?null:t=>{(0,d.ht)(t)},loading:"lazy",draggable:"false",style:{opacity:n?i:0}},a)]})}}},89208:(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var a=i(72791),d=i(53108),s=i(78764),o=i(48282),r=i(46535),l=i(80184);const n=JSON.parse(window.localStorage.getItem("mediaDimension"));class c extends a.PureComponent{constructor(t){super(t),this.mediaSize=t=>{this.props.mediaSizeCallback(t)},this.state={mediaSize:{height:null!=n?n[0]:"85vh",width:null!=n?n[1]:"85vh"}}}render(){const{imageList:t,data:e,wall:i}=this.props,{mediaSize:a}=this.state;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.default,{ImageUrl:e.postFile,data:{link:e.link,network:{id:e.networkId},id:e.id,filterId:e.filterId,stories:e.stories,feedId:e.feedId},wall:i,mediaSizeCallback:this.mediaSize,opacity:0}),(0,l.jsx)("div",{className:"tb_post_modal_slide_holder_",children:(0,l.jsxs)(o.tv,{hasTrack:!1,className:"tb_post_modal_media_slider",options:{rewind:!0,speed:1e3,gap:0,autoplay:!1,autoHeight:!0,padding:0,pagination:!0,arrows:!0,classes:{pagination:"splide__pagination tb_modal_slider_dots",page:"splide__pagination__page tb_modal_slider_dot"}},children:[(0,l.jsx)(o.Gj,{children:t.map(((t,a)=>(0,l.jsx)(o.jw,{style:{margin:0},children:2===t.type||4===t.type?(0,l.jsx)(d.default,{ImageUrl:r.ZQ?t.file:t.postFile,data:{link:e.link,network:{id:e.network.id},id:t.id,filterId:e.filterId,stories:t.stories,feedId:e.feedId},wall:i,mediaSizeCallback:this.mediaSize,opacity:1},"multi-slider".concat(a)):3===t.type||5===t.type?(0,l.jsx)(s.default,{data:{mediaUrl:r.ZQ?t.media:t.mediaFile,link:e.link,network:{id:r.ZQ?t.networkId:e.networkId},id:t.id,filterId:e.filterId,stories:t.stories?t.stories:0,postFileNew:r.ZQ?t.file:t.postFile,feedId:e.feedId},wall:i,mediaSizeCallback:this.mediaSize,opacity:1}):null},a)))}),(0,l.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,l.jsx)("div",{})})]})]})})]})}}},78764:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(72791),d=i(96710),s=i.n(d),o=i(11225),r=(i(46535),i(80184));const l=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class n extends a.PureComponent{constructor(t){super(t),this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.muteToggle=()=>{this.setState({muted:!this.state.muted})},this.state={videoLoaded:!1,muted:!1},this.VideoWrap=a.createRef()}render(){const{data:t,wall:e}=this.props,{videoLoaded:i,muted:a}=this.state;return(0,r.jsxs)("div",{className:"tb_post_modal_video_holder".concat(i?" tb_post_video_loaded":""),ref:this.VideoWrap,children:[(0,r.jsx)("div",{className:"tb_m_mute_btn",onClick:this.muteToggle,children:(0,r.jsx)("div",{className:"tb__icon tb-".concat(a?"mute":"unmute"),children:(0,r.jsx)("div",{})})}),(0,r.jsx)(s(),{className:"tb_post_modal_video video".concat(t.id),url:l(t.mediaUrl,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":e.Wall.id,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}},file:{forceVideo:!0,attributes:{muted:a}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,o.ib)(e,t.id)},autoPlay:!0,muted:a,volume:1,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!1,style:{backgroundImage:"url(".concat(t.postFileNew,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})]},t.mediaUrl)}}},87641:(t,e,i)=>{i.d(e,{Z:()=>_});var a=i(72791),d=i(77581),s=i(89057),o=i(18947),r=i(2703),l=i(80184);const n=(0,s.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),c=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n  ").concat(t.product_discount>0&&t.product_price>t.product_discount?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_discount,"</div>"):"","\n  ").concat(t.product_price>0?'<div class="tb_p_tooltip_price">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"","\n  </a>");class p extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const d=(0,r.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(d),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(n,{children:(0,l.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(d),clickable:!0,html:c(t.UgcProduct)})})]},e)}))}):null}}const _=(0,d.$j)((t=>({appData:t.appData})))(p)}}]);
//# sourceMappingURL=9208.7c1794c7.chunk.js.map