(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5555,4261,9239,5790],{34873:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var s=i(47313),o=(i(43635),i(2406),i(17739)),r=i(98501),a=i(46417);class n extends s.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src,loadError:!1})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.media}}componentWillReceiveProps(t){const{itemDetails:e}=t,{loadError:i}=this.state;i&&t!=this.props&&e&&Object.keys(e).length>0&&e.showCart&&this.setState({imgUrl:e.data.featured_image,loadError:!1})}render(){const{ImageClass:t,media:e,itemDetails:i}=this.props,{imgUrl:s,paddingBottom:n}=this.state,d={paddingBottom:"".concat(n,"%")};return(0,a.jsx)("div",{className:"".concat(t,"_wrap mediaHolder"),style:d,children:(0,a.jsx)("img",{className:t,role:"img",src:s,height:300,width:300,onLoad:this.onLoad,onError:t=>{this.setState({loadError:!0}),t.target.src=r.XW},alt:(0,o.P)(s)})})}}},89239:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),o=i(17739),r=i(98935),a=i(46417);class n extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i}=this.props;return(0,a.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,o.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(r.Z,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var s=i(47313),o=i(46417);const r=t=>{let{username:e,network:i,authorClass:s,errorPic:r}=t;const a="#ffffff"==i.color?"#000":i.color;return(0,o.jsx)("img",{className:"".concat(s,"__"),src:r||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":a).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},a=(0,s.memo)(r)},98511:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var s=i(98501),o=i(17739),r=i(46417);const a=t=>{let{size:e}=t;const i=t=>!(!(0,o.mD)(t)||1!=e);return(0,r.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("top","".concat(i(55)||i(62)||i(61)?"auto":"14px"),"important"),t.style.setProperty("left","".concat(i(62)||i(61)?"auto":"14px"),"important"),t.style.setProperty("right","".concat(i(55)||i(62)||i(61)?"14px":"auto"),"important"),t.style.setProperty("bottom","".concat(i(55)||i(62)||i(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image","url(".concat(s.do,"/media/images/tagshop-light.svg)"),"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,r.jsx)("div",{children:" "})})}},97915:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var s=i(47313),o=i(43411),r=i(83773),a=i(6119),n=i(17739),d=i(43635),c=i(46417);const l=(0,r.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),p=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:i}=this.props;if(e&&Object.keys(e).length>0){var s,o;const{wall:r}=e;(0,d.S5)({type:1,action:2,wall:null===r||void 0===r||null===(s=r.Wall)||void 0===s?void 0:s.id,product_id:t.id,post:i.referenceId,owner:null===r||void 0===r||null===(o=r.Wall)||void 0===o?void 0:o.owner,feed:i.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const o=(0,n.i1)();return(0,c.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(o),onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,c.jsx)(l,{children:(0,c.jsx)(a.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(o),clickable:!0,html:p(t.UgcProduct)})})]},e)}))}):null}}const u=(0,o.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var s=i(47313),o=i(43635),r=i(97915),a=i(2406),n=i(17739),d=i(98501),c=(i(35179),i(98511),i(46417));class l extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:s,ownerId:a,hotspot:l}=this.props,{imgUrl:p,paddingBottom:h,size:u,fixedPaddingBottom:m}=this.state,g={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:h,"%")},_={backgroundImage:"url(".concat(p,")")};if(u.width>u.height)var b="100%",v="".concat(u.height/u.width*100,"%");else v="100%",b="".concat(u.width/u.height*100,"%");const w=!!(e.hotspot&&e.ugc_products.length>0&&l),y={width:w&&this.props.size?b:null,height:w&&this.props.size?v:null};return(0,c.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:g,children:[w?(0,c.jsx)("div",{className:"tb_blur_bg_",style:_}):null,(0,c.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:y,children:[w?(0,c.jsx)(r.Z,{product:e.ugc_products,dataItem:e}):null,(0,c.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:p,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(d.do,"/media/images/no-image.svg"),(0,o.ht)(t)},alt:(0,n.P)(p)})]})]})}}},64442:(t,e,i)=>{"use strict";i.d(e,{Z:()=>p});var s=i(47313),o=i(2406),r=i(20510),a=i.n(r),n=i(43635),d=i(35179),c=(i(98511),i(46417));const l=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class p extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(d.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(d.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:i,isCover:s,controls:o,autoPlay:r,handleVideoEnded:p,muted:h}=this.props,{paddingBottom:u,videoLoaded:m,isVisible:g}=this.state,_={paddingBottom:"".concat(u,"%")},b=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:_,ref:this.videoRef,children:(0,c.jsx)(a(),{className:"".concat(t," video").concat(e.id),url:l(b,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:r,muted:h,volume:r?1:0,playsinline:!0,onReady:t=>{d.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:d.ig?g:r,height:"100%",width:"100%",controls:o||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:p||null})})}}},25810:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),o=i(35179),r=i(46417);const a=s.lazy((()=>i.e(5867).then(i.bind(i,95867))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:n,Personalization:d}=this.props,c=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),l=o.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,r.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(l.replace(/fa-/g,"")),children:(0,r.jsx)("div",{})}):(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(a,{network:t,networkClass:e})]})}}},11502:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(17739),o=i(46417);const r=t=>{let{ThemeRule:e,btnClass:i}=t;const r={fontFamily:e.css_font};return(0,o.jsx)("div",{className:"tb_shop_btn_wrap ".concat(i),children:(0,o.jsx)("div",{className:"tb_shop_btn".concat(e.postHover||(0,s.mD)(4)||(0,s.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:r,children:e.shoppingText})})}},55790:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),o=i(17739),r=i(46417);const a=t=>{const{postTime:e,timeClass:i}=t;return(0,r.jsx)("div",{className:i,children:(0,o.Sy)(e)})},n=(0,s.memo)(a)},24235:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(17739),o=i(46417);const r=t=>{let{count:e}=t;return(0,o.jsxs)("div",{className:"tb_r_view",children:[(0,o.jsx)("div",{className:"tb__icon tb-eye",children:(0,o.jsx)("div",{})}),(0,s.sy)(e)]})}},81750:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>I});var s=i(47313),o=i(34862),r=i(43411),a=i(97529),n=i(47330),d=(i(6940),i(65192),i(59606),i(98907),i(84261)),c=i(64442),l=i(35179),p=i(46417);const h=t=>{let{itemData:e,wallID:i,wall:s,ownerId:o,preload:r,isVisible:a}=t;const n=!(3!==e.type&&5!==e.type||1!=s.ThemeRule.autoPlay&&l.ig);return(0,p.jsx)("div",{className:"tb_rtp_media_wrap",children:n?(0,p.jsx)(c.Z,{VideoClass:"tb_rtp_video",data:e,wallID:i,themeID:s.Personalization.widgetTheme,ownerId:o,size:178,isCover:!0,muted:!0}):(0,p.jsx)(d.default,{ImageClass:"tb_rtp_image",data:e,wallID:i,themeID:s.Personalization.widgetTheme,ownerId:o,size:178})})};var u=i(17739),m=(i(25810),i(11502),i(34873)),g=i(16390);const _=(t,e)=>{if(0!=t){if(e>0&&e<t){let i=(t-e)/t*100;return i>0?"".concat(i.toFixed(),"%"):""}return!1}return!1},b=t=>{let{itemData:e,wall:i}=t;const s=e.ugc_products,{Price:o,ProductTitle:r}=i.ProductSetting,d=!(!s||1!=s.length);return(0,p.jsx)("div",{className:"tb_rtp_wrap",id:"slide-".concat(e.id),children:(0,p.jsxs)("div",{className:"tb_rtp_wrap_in",children:[(0,p.jsx)(a.tq,{id:"product_slide-".concat(e.id),modules:[n.tl,n.W_],spaceBetween:10,navigation:{prevEl:"#tb_rtn_prev-".concat(e.id),nextEl:"#tb_rtn_next-".concat(e.id)},children:s.map(((t,e)=>(0,p.jsx)(a.o5,{children:(0,p.jsxs)("div",{className:"tb_rtp",children:[(0,p.jsx)("div",{className:"tb_rtp_media",style:{opacity:t.UgcProduct.product_image?1:0},children:(0,p.jsx)(m.Z,{ImageClass:"tb_rtp_img",media:t.UgcProduct.product_image,size:!1,itemDetails:""})}),(0,p.jsx)("div",{className:"tb_rtp_title_w",children:t.UgcProduct.product_title?(0,p.jsx)("div",{className:"tb_rtp_title tb-cTBfont-".concat(r.varient),children:(0,g.ZP)(t.UgcProduct.product_title)}):null}),t.UgcProduct.product_price>0||t.UgcProduct.product_discount>0?(0,p.jsxs)("div",{className:"tb_rtp_price_wrap",children:[(0,p.jsxs)("div",{className:"tb_rtp_price tb-cTBfont-".concat(o.varient),children:[t.UgcProduct.price_currency_symbol,t.UgcProduct.product_discount>0?t.UgcProduct.product_discount:t.UgcProduct.product_price]}),t.UgcProduct.product_discount>0&&t.UgcProduct.product_discount!=t.UgcProduct.product_price?(0,p.jsxs)("div",{className:"tb_rtp_d_price tb-cTBfont-".concat(o.varient),children:[t.UgcProduct.price_currency_symbol,t.UgcProduct.product_price]}):null,(0,p.jsx)("div",{className:"tb_rtp_dp",children:_(t.UgcProduct.product_price,t.UgcProduct.product_discount)})]}):null]},e)},e)))}),d?null:(0,p.jsxs)("div",{className:"tb_rtn_wrap",onClick:t=>{t.stopPropagation()},children:[(0,p.jsx)("div",{id:"tb_rtn_prev-".concat(e.id),className:"tb_rtn_btn tb_rtn_btn_left tb__icon tb-arrow-left-alt",children:(0,p.jsx)("div",{})}),(0,p.jsx)("div",{id:"tb_rtn_next-".concat(e.id),className:"tb_rtn_btn tb_rtn_btn_right tb__icon tb-arrow-right-alt",children:(0,p.jsx)("div",{})})]})]})})};var v=i(89239),w=i(55790);const y=t=>{let{author:e,personalization:i,postTime:s,network:o,ThemeRule:r,font:a,mediaType:n,ownerId:d,wall:c}=t;const l=!(!i.postAuthor||e.isInstaUser),{ProductTitle:h}=c.ProductSetting;return(0,p.jsx)("div",{className:"tb_rtp_wrap",children:(0,p.jsxs)("div",{className:"tb_rtp_wrap_in",style:{marginTop:l?"":0},children:[l?(0,p.jsxs)("div",{className:"tb_rtp_media",children:[(0,p.jsx)(v.default,{network:o,author:e,authorClass:"tb_rtp_a_img"},e.username)," "]}):"",l?(0,p.jsx)("div",{className:"tb_rtp_title_w",children:(0,p.jsx)("div",{className:"tb_rtp_authorname tb-cTBfont-".concat(h.varient),children:e.username&&e.username.length>0?"".concat(e.username):""})}):"",s?(0,p.jsx)(w.default,{postTime:s,timeClass:"tb_rtp_time tb-cTBfont-".concat(r.font_varient)}):""]})})};var f=i(24235);class x extends s.PureComponent{constructor(t){super(t),this.mediaHeight=s.createRef()}componentDidMount(){(l.nX||l.ig)&&(0,u.YN)(this.mediaHeight)}render(){const{itemData:t,itemIndex:e,wallID:i,ownerId:s,wall:o,isVisible:r,clickToShowPopUp:a,ThemeRule:n,personalization:d,sliderHeight:c}=this.props,u=!!(t.ugc_products&&t.ugc_products.length>0),m={backgroundColor:n.cardColor,minHeight:c},g=!(!l.ig||!u||0!==t.hotspot),_=!!(l.ig&&t.hotspot&&u),v=3===t.type||5===t.type;return(0,p.jsx)("div",{"item-id":t.id,id:"tb-hc-post-".concat(t.id),className:"tb_rtp_post_wrapper",ref:this.mediaHeight,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,style:{paddingLeft:o.Personalization.padding/2,paddingRight:o.Personalization.padding/2},"tb-product":g?1:_?2:0,children:(0,p.jsxs)("div",{className:"tb_rtp_post_in tb_icon_animate ".concat(l.ig?"":"tb_rtp_post_in_animate"),style:m,onClick:a(e,t),children:[(0,p.jsxs)("div",{className:"tb_rtp_post_media_wrapp",children:[v&&1==n.showReelsView&&(null===t||void 0===t?void 0:t.views)>0?(0,p.jsx)(f.Z,{count:null===t||void 0===t?void 0:t.views}):null,(0,p.jsx)(h,{itemData:t,wallID:i,wall:o,ownerId:s,preload:0==e,isVisible:r},"img_".concat(t.id)),l.ig?null:(0,p.jsx)("div",{className:"tb_rtp_play_ico",children:(0,p.jsx)("div",{className:"tb__icon tb-play",children:(0,p.jsx)("div",{})})})]}),u?(0,p.jsx)(b,{itemData:t,wall:o},"product_slide".concat(t.id)):(0,p.jsx)(y,{ownerId:s,postTime:t.createdAt,author:t.author,network:t.network,font:n,personalization:d,ThemeRule:n,wall:o})]})})}}var P=i(43635);class j extends s.Component{constructor(t){super(t),this.state={sliderHeight:""},this.requestData=t=>{const{appendData:e,wall:i,preRender:s,hasMoreData:o,getDataNextSteps:r,loaderData:a}=this.props;t.progress>.8&&o&&!a.isShowMoreLoading&&r(i.Wall.id,Math.floor(Date.now()/1e3),i.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.sliderHeight=s.createRef(),this.inputRefs={}}componentDidMount(){this.sliderHeight.current&&this.setState({sliderHeight:this.sliderHeight.current.clientHeight-40}),setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;if(t&&1==t.length){let t=document.querySelector(".tb_rtp_arrow_left__"),e=document.querySelector(".tb_rtp_arrow_right__");t&&e&&(document.querySelector(".tb_rtp_arrow_left__").style="display:none",document.querySelector(".tb_rtp_arrow_right__").style="display:none")}}render(){const{postData:t,completeDataObject:e,wall:i,clickToShowPopUp:s,hasMoreData:r,parentID:d,keyRender:c,containerSize:h}=this.props,u=d,{sliderHeight:m}=this.state,g=i.ThemeRule.numberOfCoumn,_=i.ThemeRule.mobileColumn,b=i.ThemeRule.slidePost,v=i.ThemeRule.slideDuration,w=1===i.Personalization.trimcontent,y=(h.width/240).toFixed();let f=(1==y?2:y)-.4;var P=t;f>t.length&&(f=t.length);const j=0==g?f:parseInt(g)-.4;return j&&Math.round(j)<=t.length&&(P=Array(2).fill(t).flat()),(0,p.jsx)(p.Fragment,{children:""!=d?(0,p.jsx)("div",{className:"tb_rtp_post_container",ref:this.sliderHeight,children:(0,p.jsx)(a.tq,{ref:t=>this.inputRefs[u]=t,style:{width:"100%",height:"100%"},onScroll:t=>this.requestData(t),onSlideChange:t=>this.requestData(t),onAutoplay:t=>this.requestData(t),autoHeight:!0,speed:700,edgeSwipeDetection:!0,slidesPerView:j,touchRatio:2,cssMode:o.tq,passiveListeners:!0,height:"100%",freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:!!l.ig&&{delay:1===b?1e3*v:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!r,breakpoints:{0:{slidesPerView:0==_?f:parseInt(_)-.4},480:{slidesPerView:0==_?f:parseInt(_)-.4},575:{slidesPerView:0==_?f:parseInt(_)-.4},767:{slidesPerView:j},1024:{slidesPerView:j},1400:{slidesPerView:j},1600:{slidesPerView:j}},mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[n.pt,n.Gk,n.Rv],className:"tb_rtp_post_slider ".concat(w?"tb_rtp_fixed_height":""),children:(0,p.jsx)(p.Fragment,{children:P&&P.length>0&&P.map(((t,o)=>{const r=e[t];return l.ig||3===r.type||5===r.type?(0,p.jsx)(a.o5,{style:{margin:0,padding:0},p_id:d,className:"tb_".concat(r.id),children:t=>{let{isVisible:e}=t;return(0,p.jsx)(x,{isVisible:e,ownerId:i.Wall.owner,itemData:r,itemIndex:o,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:s,wall:i,sliderHeight:m})}},o):null}))})},c)}):null})}}const I=(0,s.memo)((0,r.$j)((t=>({loaderData:t.loaderData})),(t=>({getDataNextSteps:(e,i,s,o,r,a,n,d)=>t((0,P.Sx)(e,i,s,o,r,a,n,d))})))(j))},2406:(t,e,i)=>{"use strict";e.Ad=void 0;var s=i(84228);var o=i(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return o.getImageSize}});var r=i(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=i(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,o)=>{if("undefined"===typeof window)return o(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return o(s.ErrorMessage.URL_IS_NOT_DEFINED);let r=null;const a=new Image;a.addEventListener("load",(()=>{r&&window.clearTimeout(r),i({width:a.naturalWidth,height:a.naturalHeight})})),a.addEventListener("error",(t=>{r&&window.clearTimeout(r),o("".concat(t.type,": ").concat(t.message))})),a.src=t,e.timeout&&(r=window.setTimeout((()=>o(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,i){"use strict";var s=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(o,r){function a(t){try{d(s.next(t))}catch(e){r(e)}}function n(t){try{d(s.throw(t))}catch(e){r(e)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,n)}d((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const o=i(47313),r=i(65786);e.useImageSize=(t,e)=>{const[i,a]=(0,o.useState)(null),[n,d]=(0,o.useState)(!1),[c,l]=(0,o.useState)(null);return(0,o.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){d(!0),a(null);try{const{width:i,height:s}=yield(0,r.getImageSize)(t,e);a({width:i,height:s})}catch(c){l(c.toString())}finally{d(!1)}}))}),[t,e]),[i,{loading:n,error:c}]}},65192:()=>{},59606:()=>{},98907:()=>{},50247:()=>{}}]);