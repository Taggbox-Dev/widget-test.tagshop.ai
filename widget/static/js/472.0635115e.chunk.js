"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[472,1528,6696],{91528:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(47313),d=i(43635),s=i(2406),o=i(97915),r=i(17739),l=i(46417);class n extends a.Component{constructor(t){super(t),this.onMediaLoad=async(t,e)=>{const i=document.querySelector(".track".concat(t.id));if(i&&i.getAttribute("data-height")&&i.getAttribute("data-width"))this.setState({imgUrl:e,mediaLoaded:!1,mediaSize:{height:1.3*parseInt(i.getAttribute("data-height")),width:1.3*parseInt(i.getAttribute("data-width"))}});else if(this.setState({imgUrl:e,mediaLoaded:!1}),t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({mediaSize:{height:parseInt(t.mediaHeight),width:parseInt(t.mediaWidth)}});else try{const{width:e,height:i}=await(0,s.Ad)(t.postFileNew);this.setState({mediaSize:{height:1.3*i,width:1.3*e}})}catch(a){this.setState({mediaSize:{height:1e3,width:1e3}})}},this.state={mediaSize:{height:1e3,width:1e3},mediaLoaded:!1,imgUrl:t.data.postFileNew,largerHeight:0},this.mediaRef=a.createRef()}componentWillReceiveProps(t){const{data:e}=t,{ImageUrl:i}=t;this.state.imgUrl!==i&&this.onMediaLoad(e,i)}componentDidMount(){const{data:t}=this.props;this.onMediaLoad(t,this.state.imgUrl)}componentWillUnmount(){}render(){const{data:t,wall:e,opacity:i}=this.props,{imgUrl:a,mediaSize:s,mediaLoaded:n}=this.state,c=!!(t.hotspot&&t.ugc_products.length>0),p={maxWidth:s.width,maxHeight:s.height},h={opacity:i,filter:n?"blur(2px)":null,aspectRatio:"".concat(s.width,"/").concat(s.height)},_={small:t.postFileNew,large:t.filename,orignal:t.file};return(0,l.jsxs)("div",{className:"tb_post_modal_img_holder",style:p,children:[c?(0,l.jsx)(o.Z,{product:t.ugc_products}):null,(0,l.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:_.large,sizes:"(max-width: 400px) 400px",alt:(0,r.P)(a),"data-link":t.link,"data-network":t.network.id,"data-wall-id":e.Wall.id,"data-owner-id":e.Wall.owner,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-filter-id":t.filterId,"data-load":"0",onError:t.stories?null:t=>{(0,d.ht)(t)},loading:"lazy",draggable:"false",width:s.width,height:s.height,style:h},a)]})}}},70472:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var a=i(47313),d=i(91528),s=i(36696),o=i(11774),r=(i(35179),i(46417));JSON.parse(window.localStorage.getItem("mediaDimension"));class l extends a.PureComponent{constructor(t){super(t),this.handleSlideChange=()=>{const t=this.splideRef.current.splide,e=t.index,i=0===e,a=e===t.length-1;this.setState({isFirst:i,isLast:a})},this.state={mediaSize:{height:1e3,width:1e3},mediaLoaded:!1,imgUrl:t.data.postFileNew,largerHeight:0,isFirst:!1,isLast:!1},this.splideRef=a.createRef()}componentWillReceiveProps(t){const{data:e}=t,{ImageUrl:i}=t;this.state.imgUrl!==i&&this.setState({imgUrl:i,mediaLoaded:!1,mediaSize:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}})}componentDidMount(){const{data:t}=this.props;this.setState({mediaSize:{height:parseInt(t.mediaHeight),width:parseInt(t.mediaWidth)}}),this.splideRef.current.splide.on("moved",this.handleSlideChange),this.handleSlideChange()}componentWillUnmount(){this.splideRef.current.splide.off("moved",this.handleSlideChange)}render(){const{imageList:t,data:e,wall:i}=this.props,{mediaSize:a,isFirst:l,isLast:n}=this.state;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.default,{ImageUrl:e.postFile,data:e,wall:i,opacity:0}),(0,r.jsx)("div",{className:"tb_post_modal_slide_holder_",children:(0,r.jsxs)(o.tv,{hasTrack:!1,className:"tb_post_modal_media_slider",options:{rewind:!1,speed:400,gap:0,autoplay:!1,autoHeight:!0,padding:0,pagination:!0,arrows:!0,classes:{pagination:"splide__pagination tb_modal_slider_dots",page:"splide__pagination__page tb_modal_slider_dot"}},ref:this.splideRef,children:[(0,r.jsx)(o.Gj,{children:t.map(((t,a)=>(0,r.jsx)(o.jw,{style:{margin:0},children:2===t.type||4===t.type?(0,r.jsx)(d.default,{data:e,wall:i,opacity:1},"multi-slider".concat(a)):3===t.type||5===t.type?(0,r.jsx)(s.default,{data:e,wall:i,opacity:1}):null},a)))}),(0,r.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,r.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-arrow-left-alt",disabled:l,children:(0,r.jsx)("div",{})}),(0,r.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon tb-arrow-right-alt",disabled:n,children:(0,r.jsx)("div",{})})]})]})})]})}}},36696:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(47313),d=i(20510),s=i.n(d),o=i(43635),r=(i(35179),i(46417));const l=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class n extends a.PureComponent{constructor(t){super(t),this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.muteToggle=()=>{this.setState({muted:!this.state.muted})},this.state={videoLoaded:!1,muted:!1},this.VideoWrap=a.createRef()}render(){const{data:t,wall:e}=this.props,{videoLoaded:i,muted:a}=this.state,d=![7,3,25].includes(t.network.id);return(0,r.jsxs)("div",{className:"tb_post_modal_video_holder".concat(i?" tb_post_video_loaded":""),ref:this.VideoWrap,children:[d?(0,r.jsx)("div",{className:"tb_m_mute_btn",onClick:this.muteToggle,children:(0,r.jsx)("div",{className:"tb__icon tb-".concat(a?"mute":"unmute"),children:(0,r.jsx)("div",{})})}):"",(0,r.jsx)(s(),{className:"tb_post_modal_video video".concat(t.id),url:l(t.mediaUrl,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":e.Wall.id,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}},file:{forceVideo:!0,attributes:{muted:a}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,o.ib)(e,t.id)},autoPlay:!0,muted:a,volume:1,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!d,style:{backgroundImage:"url(".concat(t.postFileNew,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})]},t.mediaUrl)}}},97915:(t,e,i)=>{i.d(e,{Z:()=>h});var a=i(47313),d=i(43411),s=i(83773),o=i(6119),r=i(17739),l=i(46417);const n=(0,s.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),c=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n  ").concat(t.product_discount>0&&t.product_price>t.product_discount?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_discount,"</div>"):"","\n  ").concat(t.product_price>0?'<div class="tb_p_tooltip_price">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"","\n  </a>");class p extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const d=(0,r.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(d),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(n,{children:(0,l.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(d),clickable:!0,html:c(t.UgcProduct)})})]},e)}))}):null}}const h=(0,d.$j)((t=>({appData:t.appData})))(p)}}]);