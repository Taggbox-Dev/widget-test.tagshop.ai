"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[472,1528,6696],{91528:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var i=a(47313),s=a(43635),o=(a(2406),a(97915)),d=a(17739),l=a(46417);class r extends i.Component{constructor(t){super(t),this.state={mediaLoaded:!1,largerHeight:0,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file}}}componentWillReceiveProps(t){const{data:e}=t;this.props.data!==e&&this.setState({imgSize:{small:e.postFileNew,large:e.filename,orignal:e.file}})}render(){const{data:t,wall:e,opacity:a,mediaSize:i}=this.props,{mediaLoaded:r,imgSize:n}=this.state,c=!!(t.hotspot&&t.ugc_products.length>0),p={opacity:a,filter:r?"blur(2px)":null};return(0,l.jsxs)("div",{className:"tb_post_modal_img_holder",children:[c?(0,l.jsx)(o.Z,{product:t.ugc_products}):null,(0,l.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:n.small,srcSet:"".concat(n.large,", 991w ").concat(n.small,", 480w"),sizes:i&&i.width,alt:(0,d.P)(n.small),"data-link":t.link,"data-network":t.network.id,"data-wall-id":e.Wall.id,"data-owner-id":e.Wall.owner,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-filter-id":t.filterId,"data-load":"0",onLoad:this.handleImageLoad,onError:t.stories?null:t=>{(0,s.ht)(t)},loading:"lazy",draggable:"false",width:i&&i.width,height:i&&i.height,style:p},n.small)]})}}},70472:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var i=a(47313),s=a(91528),o=a(36696),d=a(11774),l=(a(35179),a(46417));JSON.parse(window.localStorage.getItem("mediaDimension"));class r extends i.PureComponent{constructor(t){super(t),this.handleSlideChange=()=>{const t=this.splideRef.current.splide,e=t.index,a=0===e,i=e===t.length-1;this.setState({isFirst:a,isLast:i})},this.state={mediaSize:{height:1e3,width:1e3},mediaLoaded:!1,imgUrl:t.data.postFileNew,largerHeight:0,isFirst:!1,isLast:!1},this.splideRef=i.createRef()}componentWillReceiveProps(t){const{data:e}=t,{ImageUrl:a}=t;this.state.imgUrl!==a&&this.setState({imgUrl:a,mediaLoaded:!1,mediaSize:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}})}componentDidMount(){const{data:t}=this.props;this.setState({mediaSize:{height:parseInt(t.mediaHeight),width:parseInt(t.mediaWidth)}}),this.splideRef.current.splide.on("moved",this.handleSlideChange),this.handleSlideChange()}componentWillUnmount(){this.splideRef.current.splide.off("moved",this.handleSlideChange)}render(){const{imageList:t,data:e,wall:a}=this.props,{mediaSize:i,isFirst:r,isLast:n}=this.state;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.default,{ImageUrl:e.postFile,data:e,wall:a,opacity:0}),(0,l.jsx)("div",{className:"tb_post_modal_slide_holder_",children:(0,l.jsxs)(d.tv,{hasTrack:!1,className:"tb_post_modal_media_slider",options:{rewind:!1,speed:400,gap:0,autoplay:!1,autoHeight:!0,padding:0,pagination:!0,arrows:!0,classes:{pagination:"splide__pagination tb_modal_slider_dots",page:"splide__pagination__page tb_modal_slider_dot"}},ref:this.splideRef,children:[(0,l.jsx)(d.Gj,{children:t.map(((t,i)=>(0,l.jsx)(d.jw,{style:{margin:0},children:2===t.type||4===t.type?(0,l.jsx)(s.default,{data:e,wall:a,opacity:1},"multi-slider".concat(i)):3===t.type||5===t.type?(0,l.jsx)(o.default,{data:e,wall:a,opacity:1}):null},i)))}),(0,l.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-arrow-left-alt",disabled:r,children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon tb-arrow-right-alt",disabled:n,children:(0,l.jsx)("div",{})})]})]})})]})}}},36696:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});var i=a(47313),s=a(20510),o=a.n(s),d=a(43635),l=(a(35179),a(46417));const r=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class n extends i.PureComponent{constructor(t){super(t),this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.muteToggle=()=>{this.setState({muted:!this.state.muted})},this.state={videoLoaded:!1,muted:!1},this.VideoWrap=i.createRef()}render(){const{data:t,wall:e}=this.props,{videoLoaded:a,muted:i}=this.state,s=![7,3,25].includes(t.network.id);return(0,l.jsxs)("div",{className:"tb_post_modal_video_holder".concat(a?" tb_post_video_loaded":""),ref:this.VideoWrap,children:[s?(0,l.jsx)("div",{className:"tb_m_mute_btn",onClick:this.muteToggle,children:(0,l.jsx)("div",{className:"tb__icon tb-".concat(i?"mute":"unmute"),children:(0,l.jsx)("div",{})})}):"",(0,l.jsx)(o(),{className:"tb_post_modal_video video".concat(t.id),url:r(t.mediaUrl,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":e.Wall.id,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}},file:{forceVideo:!0,attributes:{muted:i}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,d.ib)(e,t.id)},autoPlay:!0,muted:i,volume:1,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!s,style:{backgroundImage:"url(".concat(t.postFileNew,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})]},t.mediaUrl)}}},97915:(t,e,a)=>{a.d(e,{Z:()=>_});var i=a(47313),s=a(43411),o=a(83773),d=a(6119),l=a(17739),r=a(46417);const n=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),c=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n  ").concat(t.product_discount>0&&t.product_price>t.product_discount?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_discount,"</div>"):"","\n  ").concat(t.product_price>0?'<div class="tb_p_tooltip_price">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"","\n  </a>");class p extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:a}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const s=(0,l.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(s),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(a==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(n,{children:(0,r.jsx)(d.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(s),clickable:!0,html:c(t.UgcProduct)})})]},e)}))}):null}}const _=(0,s.$j)((t=>({appData:t.appData})))(p)}}]);