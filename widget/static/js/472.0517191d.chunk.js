"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[472,1528,6696],{91528:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var a=i(47313),s=i(43635),d=(i(2406),i(97915)),o=i(17739),l=i(46417);class r extends a.Component{constructor(t){super(t),this.state={mediaLoaded:!1,largerHeight:0,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file}}}componentWillReceiveProps(t){const{data:e}=t;this.props.data!==e&&this.setState({imgSize:{small:e.postFileNew,large:e.filename,orignal:e.file}})}render(){const{data:t,wall:e,opacity:i,mediaSize:a}=this.props,{mediaLoaded:r,imgSize:n}=this.state,c=!!(t.hotspot&&t.ugc_products.length>0),p={opacity:i,filter:r?"blur(2px)":null};return(0,l.jsxs)("div",{className:"tb_post_modal_img_holder",children:[c?(0,l.jsx)(d.Z,{product:t.ugc_products}):null,(0,l.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:n.small,srcSet:"".concat(n.large,", 991w ").concat(n.small,", 480w"),sizes:a&&a.width,alt:(0,o.P)(n.small),"data-link":t.link,"data-network":t.network.id,"data-wall-id":e.Wall.id,"data-owner-id":e.Wall.owner,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-filter-id":t.filterId,"data-load":"0",onLoad:this.handleImageLoad,onError:t.stories?null:t=>{(0,s.ht)(t)},loading:"lazy",draggable:"false",width:a&&a.width,height:a&&a.height,style:p},n.small)]})}}},70472:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(47313),s=i(91528),d=i(36696),o=i(11774),l=i(35179),r=i(46417);JSON.parse(window.localStorage.getItem("mediaDimension"));class n extends a.PureComponent{constructor(t){super(t),this.handleSlideChange=()=>{const t=this.splideRef.current.splide,e=t.index,i=0===e,a=e===t.length-1;this.setState({isFirst:i,isLast:a})},this.state={mediaSize:{height:1e3,width:1e3},mediaLoaded:!1,imgUrl:t.data.postFileNew,largerHeight:0,isFirst:!1,isLast:!1,currentIndex:0},this.splideRef=a.createRef()}componentWillReceiveProps(t){const{data:e}=t,{ImageUrl:i}=t;this.state.imgUrl!==i&&this.setState({imgUrl:i,mediaLoaded:!1,mediaSize:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}})}componentDidMount(){const{data:t}=this.props;this.setState({mediaSize:{height:parseInt(t.mediaHeight),width:parseInt(t.mediaWidth)}}),this.splideRef.current.splide.on("moved",this.handleSlideChange),this.handleSlideChange()}componentWillUnmount(){this.splideRef.current.splide.off("moved",this.handleSlideChange)}render(){const{imageList:t,data:e,wall:i}=this.props,{mediaSize:a,isFirst:n,isLast:c,currentIndex:p}=this.state;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.default,{ImageUrl:e.postFile,data:e,wall:i,opacity:0}),(0,r.jsx)("div",{className:"tb_post_modal_slide_holder_",children:(0,r.jsxs)(o.tv,{hasTrack:!1,className:"tb_post_modal_media_slider",options:{rewind:!1,speed:400,gap:0,autoplay:!1,autoHeight:!0,padding:0,pagination:!0,arrows:!0,classes:{pagination:"splide__pagination tb_modal_slider_dots",page:"splide__pagination__page tb_modal_slider_dot"}},ref:this.splideRef,onActive:(t,e,i)=>this.setState({currentIndex:e.index}),children:[(0,r.jsx)(o.Gj,{children:t.map(((t,a)=>{const n=p==a,c=l.ZQ?t.file:t.postFile;return(0,r.jsx)(o.jw,{style:{margin:0},children:2!==t.type&&4!==t.type&&n?3===t.type||5===t.type?(0,r.jsx)(d.default,{data:{mediaUrl:l.ZQ?t.media:t.mediaFile,link:e.link,network:{id:l.ZQ?t.networkId:e.networkId},id:t.id,filterId:e.filterId,stories:t.stories?t.stories:0,postFileNew:c,filename:c,file:c,feedId:e.feedId},wall:i,opacity:1}):null:(0,r.jsx)(s.default,{ImageUrl:c,data:{link:e.link,network:{id:e.network.id},id:t.id,filterId:e.filterId,stories:t.stories,feedId:e.feedId,postFileNew:c,filename:c,file:c},wall:i,opacity:1},"multi-slider".concat(a))},a)}))}),(0,r.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,r.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-arrow-left-alt",disabled:n,children:(0,r.jsx)("div",{})}),(0,r.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon tb-arrow-right-alt",disabled:c,children:(0,r.jsx)("div",{})})]})]})})]})}}},36696:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(47313),s=i(20510),d=i.n(s),o=i(43635),l=(i(35179),i(46417));const r=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class n extends a.PureComponent{constructor(t){super(t),this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.muteToggle=()=>{this.setState({muted:!this.state.muted})},this.state={videoLoaded:!1,muted:!1},this.VideoWrap=a.createRef()}render(){const{data:t,wall:e}=this.props,{videoLoaded:i,muted:a}=this.state,s=![7,3,25].includes(t.network.id);return(0,l.jsxs)("div",{className:"tb_post_modal_video_holder".concat(i?" tb_post_video_loaded":""),ref:this.VideoWrap,children:[s?(0,l.jsx)("div",{className:"tb_m_mute_btn",onClick:this.muteToggle,children:(0,l.jsx)("div",{className:"tb__icon tb-".concat(a?"mute":"unmute"),children:(0,l.jsx)("div",{})})}):"",(0,l.jsx)(d(),{className:"tb_post_modal_video video".concat(t.id),url:r(t.mediaUrl,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":e.Wall.id,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}},file:{forceVideo:!0,attributes:{muted:a}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,o.ib)(e,t.id)},autoPlay:!0,muted:a,volume:1,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!s,style:{backgroundImage:"url(".concat(t.postFileNew,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})]},t.mediaUrl)}}},97915:(t,e,i)=>{i.d(e,{Z:()=>_});var a=i(47313),s=i(43411),d=i(83773),o=i(6119),l=i(17739),r=i(46417);const n=(0,d.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),c=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n  ").concat(t.product_discount>0&&t.product_price>t.product_discount?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_discount,"</div>"):"","\n  ").concat(t.product_price>0?'<div class="tb_p_tooltip_price">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"","\n  </a>");class p extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const s=(0,l.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(s),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(n,{children:(0,r.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(s),clickable:!0,html:c(t.UgcProduct)})})]},e)}))}):null}}const _=(0,s.$j)((t=>({appData:t.appData})))(p)}}]);