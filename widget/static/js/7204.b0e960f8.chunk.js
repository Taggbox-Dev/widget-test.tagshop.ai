(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7204,5867,4261,5744,8342,9239,5790,5810,1349],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var i=s(47313),a=(s(17739),s(98935)),o=s(46417);class c extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,o.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(a.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var i=s(47313),a=s(46417);const o=t=>{let{username:e,network:s,authorClass:i,errorPic:o}=t;const c="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":c).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45,"aria-label":"author image"})},c=(0,i.memo)(o)},98511:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var i=s(98501),a=s(17739),o=s(46417);const c=t=>{let{size:e}=t;const s=t=>!(!(0,a.mD)(t)||1!=e);return(0,o.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("top","".concat(s(55)||s(62)||s(61)?"auto":"14px"),"important"),t.style.setProperty("left","".concat(s(62)||s(61)?"auto":"14px"),"important"),t.style.setProperty("right","".concat(s(55)||s(62)||s(61)?"14px":"auto"),"important"),t.style.setProperty("bottom","".concat(s(55)||s(62)||s(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image","url(".concat(i.do,"/media/images/tagshop-light.svg)"),"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,o.jsx)("div",{children:" "})})}},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var i=s(47313),a=s(43411),o=s(83773),c=s(6119),r=s(17739),n=s(43635),l=s(46417);const d=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),h=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",i=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(i,"\n        </a>")};class p extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:s}=this.props;if(e&&Object.keys(e).length>0){var i,a;const{wall:o}=e;(0,n.S5)({type:1,action:2,wall:null===o||void 0===o||null===(i=o.Wall)||void 0===i?void 0:i.id,product_id:t.id,post:s.referenceId,owner:null===o||void 0===o||null===(a=o.Wall)||void 0===a?void 0:a.owner,feed:s.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,r.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(d,{children:(0,l.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:h(t.UgcProduct)})})]},e)}))}):null}}const _=(0,a.$j)((t=>({appData:t.appData})))(p)},81349:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});s(47313);var i=s(35179),a=s(95867),o=s(46417);const c=t=>{const{itemData:e,IconClass:s,isCenter:c,hideVideo:r,show:n}=t,l=3===e.type||5===e.type,d=7===e.network.id,h=!!(e.imageList&&e.imageList.length>0),p=1===e.isAudio,_=!!(e.ugc_products&&e.ugc_products.length>0),u=(0,o.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),m=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,o.jsx)("div",{})}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),v=(0,o.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,o.jsx)("div",{})}),x=(0,o.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,o.jsx)("div",{})}),j=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,o.jsx)("div",{})}),g=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return n?(0,o.jsxs)(o.Fragment,{children:[c&&(d||l)?(0,o.jsxs)("div",{className:"".concat(s," tb__media_ico_c"),children:[l&&!d?g:"",l&&d?u:""]}):null,_||h||l?(0,o.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[_?j:"",h?m:"",c||!l||d||r?"":p?b:i.ZQ?x:v]}):null]}):null}},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>h});var i=s(47313),a=s(43635),o=s(97915),c=s(2406),r=s(17739),n=s(98501),l=(s(35179),s(98511),s(28831)),d=s(46417);class h extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s})}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:c,hotspot:h}=this.props,{imgUrl:p,paddingBottom:_,size:u,fixedPaddingBottom:m}=this.state,b={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:_,"%")},v={backgroundImage:"url(".concat(p,")")};if(u.width>u.height)var x="100%",j="".concat(u.height/u.width*100,"%");else j="100%",x="".concat(u.width/u.height*100,"%");const g=!!(e.hotspot&&e.ugc_products.length>0&&h),w={width:g&&this.props.size?x:null,height:g&&this.props.size?j:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,children:[g?(0,d.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:w,children:[g?(0,d.jsx)(o.Z,{product:e.ugc_products,dataItem:e}):null,(0,d.jsx)(l.LazyLoadImage,{src:p,className:"".concat(t," track").concat(e.id),width:300,height:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":c,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,r.F$)(e.content)})]})]})}}},64442:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>h});var i=s(47313),a=s(2406),o=s(20510),c=s.n(o),r=s(43635),n=s(35179),l=(s(98511),s(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends i.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(n.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(n.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:i,controls:a,autoPlay:o,handleVideoEnded:h,muted:p}=this.props,{paddingBottom:_,videoLoaded:u,isVisible:m}=this.state,b={paddingBottom:"".concat(_,"%")},v=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:d(v,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:o,muted:p,volume:o?1:0,playsinline:!0,onReady:t=>{n.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:n.ig?m:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},95867:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(35179),o=s(46417);const c=i.memo((t=>{let{network:e,networkClass:s}=t;const i="".concat(s," tb__icon tb_ico_default");switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(i," tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(i," tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(i," tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(i," tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(i," tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(i," tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(i," tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(i," tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(i," tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(i," tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(i," tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(i," tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(i," tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(i," tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(i," tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(i," tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(i," tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(i," tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return a.ZQ?(0,o.jsxs)("div",{className:"".concat(i," tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return a.ZQ?(0,o.jsx)("div",{className:"".concat(i," tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(i," tb-onsite-upload"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(i," tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(i," tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(i," tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(i," tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(i," tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(i," tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 38:return(0,o.jsxs)("div",{className:"".concat(i," tb-booking-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});default:return""}}));class r extends i.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(35179),o=s(46417);const c=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:r,Personalization:n}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(16390),o=s(17739),c=(s(35179),s(25810),s(46417));const r=i.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class n extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var s,i;const t=(null===(s=this.contentRef)||void 0===s||null===(i=s.current)||void 0===i?void 0:i.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:n,personalization:l,item:d,contentTitle:h,readMore:p,maxLength:_,textAlign:u,maxLines:m,isReadMore:b}=this.props,v={WebkitLineClamp:m,textAlign:s.textAlignment};u||s.textAlignment;let x=20==d.network.id?e:(0,o.Fx)(e);12==d.network.id&&(x=(0,a.ZP)(x));const j="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),g="".concat(t," ").concat(b?"":j," tb-cTBfont-").concat(s.font_varient);return(0,c.jsxs)("div",{className:g,ref:this.contentRef,style:v,children:[h?(0,c.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(h)}):null,(0,c.jsxs)(i.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(r,{data:d,content:x,Personalization:l})]})]})}}},5744:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(43635),o=s(35179),c=s(46417);class r extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:i,ownerId:c}=this.props;e.stopPropagation(),o.ZQ||(0,a.S5)({type:2,action:2,wall:i,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:c}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,c.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,c.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,c.jsx)("div",{})}),(0,c.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,c.jsx)("div",{})})}):"",t.twitter?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,c.jsx)("div",{})})}):"",t.linkedin?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,c.jsx)("div",{})})}):""]})]})}}},11502:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var i=s(17739),a=s(46417);const o=t=>{let{ThemeRule:e,btnClass:s}=t;const o={fontFamily:e.css_font};return(0,a.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,a.jsx)("div",{className:"tb_shop_btn".concat(e.postHover||(0,i.mD)(4)||(0,i.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:o,children:e.shoppingText})})}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(17739),o=s(46417);const c=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,role:"status","aria-label":"post timestamp ".concat((0,a.Sy)(e)),children:(0,a.Sy)(e)})},r=(0,i.memo)(c)},9105:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>y});var i=s(47313),a=s(43411),o=s(11774),c=s(89239),r=s(55790),n=s(25810),l=s(35179),d=s(46417);const h=t=>{let{author:e,personalization:s,postTime:i,network:a,ThemeRule:o,font:h}=t;const p=!(!s.postAuthor||e.isInstaUser),_=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,d.jsxs)("div",{className:"tb_hs_author_wrapper ".concat(l.ZQ?"tb_hs_author_wrapper_top":""),"aria-label":"Author details","aria-roledescription":"post author details",children:[(0,d.jsxs)("div",{className:"tb_hs_author",children:[p?(0,d.jsx)(c.default,{network:a,author:e,authorClass:"tb_hs_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_hs_author_info",children:[p?(0,d.jsx)("div",{className:"tb_hs_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_hs_post_info",children:[p?(0,d.jsx)("div",{className:"tb_hs_username",children:"@".concat(e.username)}):"",_?(0,d.jsx)("div",{className:"tb_hs_seprator",children:" "}):"",s.postTime?(0,d.jsx)(r.default,{postTime:i,timeClass:"tb_hs_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]}),l.T_?null:(0,d.jsx)("div",{className:"tb_hs_social_",children:(0,d.jsx)(n.default,{networkClass:"tb_hs_social__ico",network:a,isDefault:1===o.iconType,ThemeRule:o})})]})};var p=s(81349),_=s(84261),u=s(64442);const m=t=>{let{itemData:e,wallID:s,ThemeID:i,ThemeRule:a,ownerId:o,wall:c}=t;const r=!(!l.ZQ||3!==e.type&&5!==e.type||c.Personalization.mobilePopup||c.Personalization.postFeatured),n=(l.ZQ||l.Jx)&&c.ThemeRule.aspectImageRatio?c.ThemeRule.aspectImageRatio:100,h=(3===e.type||5===e.type)&&28!==e.network.id&&1==c.ThemeRule.autoPlay,m=!l.ig||!e.hotspot;return(0,d.jsxs)("div",{className:"tb_hs_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[r?null:(0,d.jsx)(p.default,{itemData:e,IconClass:"tb_hs_media_icon",show:m}),h?(0,d.jsx)(u.default,{VideoClass:"tb_hs_video",data:e,wallID:s,themeID:c.Personalization.widgetTheme,ownerId:o,size:n,isCover:!0,muted:!0,autoPlay:h,handleVideoEnded:()=>{}}):(0,d.jsx)(_.default,{ImageClass:"tb_hs_image",data:e,wallID:s,themeID:c.Personalization.widgetTheme,ownerId:o,size:n,ThemeRule:a,hotspot:!0})]})};var b=s(62245),v=s(17739),x=s(11502),j=s(5744);const g=l.ZQ?null:200,w=t=>{let{itemData:e,personalization:s,ThemeRule:a,clickToShowPopUp:o,itemIndex:c,wallID:r,ownerId:p,postSizeInPx:_,wall:u,isPadding:w,isRowCount:f,onClickPopUpSlider:N}=t;const y=(0,i.useRef)(null),k=!!(e.ugc_products&&e.ugc_products.length>0),P=!(!k||0!==e.hotspot),I=(""===a.postHover||a.postHover,1!==e.type),T=s.trimcontent?(0,v.Sv)(e.content,g):e.content,C=_.adjustWidth<250,S=!(!e.hotspot||!k),D=(!l.ig||e.hotspot,!a.hideContent),R=P?0==D:1!=a.hideContent,z=!!P&&0!=D,W=0==a.postHover&&l.ig?"light":"dark",U=l.Jx?"tb_hs_color_overlay":"tb_hs_post_overlay-"+W,A={backgroundColor:l.Jx?a.cardColor:""};return(0,i.useEffect)((()=>{l.ig&&(0,v.YN)(y)}),[]),(0,i.useEffect)((()=>{e.isPopUp&&N(c,e)}),[c,e.isPopUp,e]),(0,d.jsx)("div",{id:"tb-hs-post-".concat(e.id),className:"tb_hs_post_wrapper".concat(C?" tb_hs_post_wrapper2x":""),"tb-network":e.network.id,"tb-product":P?1:S?2:0,style:{padding:s.padding/2},ref:y,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,role:"article","aria-label":"Post ".concat(parseInt(c)+1,",").concat(T),children:(0,d.jsx)("div",{className:"tb_hs_post_in".concat(l.ig?" tb_hs_post_ani":""),onClick:o(c,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,d.jsxs)("div",{className:"tb_hs_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[I?(0,d.jsx)(m,{itemData:e,wallID:r,wall:u,ownerId:p},e.id):"",S?null:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"tb_hs_post_details",children:[(0,d.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[l.ig?(0,d.jsx)("div",{className:"tb_hs_social_",children:(0,d.jsx)(n.default,{networkClass:"tb_hs_social__ico",network:e.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null,z?(0,d.jsx)(x.Z,{ThemeRule:a,btnClass:"tb_hs_btn_wrap"}):null,R||1==e.type?(0,d.jsx)(b.default,{contentClass:"tb_hs_content",item:e,content:T,font:a,ThemeRule:a,personalization:s,contentTitle:e.contentTitle,isNetwork:!0}):null]}),l.ig?null:(0,d.jsx)(h,{ownerId:p,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:s,ThemeRule:a}),e.share.status?(0,d.jsx)(j.default,{share:e.share,shareClass:"tb_hs_share_container ".concat(l.ZQ?"tb_hs_share_container_te":""),item:e,wallID:r,ownerId:p}):null]}),S?null:(0,d.jsx)("div",{className:"tb_hs_post_overlay ".concat(U),style:A,children:(0,d.jsx)("div",{})}),l.ZQ?(0,d.jsx)("div",{className:"tb_hs_social_bottom_",children:(0,d.jsx)(n.default,{networkClass:"tb_hs_social__ico",network:e.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null]})]})})})};var f=s(43635);s(37210);class N extends i.PureComponent{constructor(t){super(t),this.handleKeyPress=t=>{try{const{wall:s}=this.props;if(1==s.ThemeRule.slidePost){if(!["INPUT","TEXTAREA"].includes(t.target.tagName)&&"Space"===t.code){const{parentID:s}=this.props;t.preventDefault();var e=this.inputRefs[s].splide.Components.Autoplay;e.isPaused()?e.play():e.pause()}}}catch(s){}},this.requestData=()=>{const{appendData:t,wall:e,preRender:s,hasMoreData:i,getDataNextSteps:a}=this.props;i&&a(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,s,t.heightEvent)},this.autoScrollSlider=(t,e,s,i)=>{const{wall:a}=this.props;if(1==a.Personalization.autoScrollStatus||l.ig){const e=l.ZQ?t._o.perPage+t.index:t.index;t.length-e===(l.ZQ?1:t._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t,wall:e}=this.props;this.setState({postData:t}),window.addEventListener("keydown",this.handleKeyPress)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}render(){var t,e,s,i;const{postData:a,completeDataObject:c,wall:r,clickToShowPopUp:n,onClickToCTA:h,postSizeInPx:p,parentID:_,loaderData:u,onClickPopUpSlider:m}=this.props,b=_,v=r.ThemeRule.numberOfCoumn,x=r.ThemeRule.mobileColumn,j=r.ThemeRule.slidePost,g=r.ThemeRule.slideDuration,f=r.Personalization.autoScrollStatus,N=r.ThemeRule.multiRow&&0!==r.ThemeRule.multiRow?r.ThemeRule.multiRow:1;var y=[];let k=!0;const P=("tagembed"==(null===r||void 0===r||null===(t=r.User)||void 0===t?void 0:t.userDatabaseType)||l.ZQ||l.ig)&&void 0!==(null===(e=r.Personalization)||void 0===e?void 0:e.clonePost)&&0===r.Personalization.clonePost?{clones:0}:{};for(var I=0,T=a.length;I<T;)y.push(a.slice(I,I+=N));l.ig&&P&&0==Object.keys(P).length&&(16677==r.User.id?"product"===window.dataFilterType&&(k=!!(y&&y.length>=5)):y=y.length<12?Array(15-y.length).fill(y).flat():y);const C=1!=f?!(Object.keys(P).length>0)&&("tagembed"==(null===r||void 0===r||null===(s=r.User)||void 0===s?void 0:s.userDatabaseType)||l.ZQ?"slide":"loop"):l.ig?"slide":"loop",S={...P,type:1!==f&&C,rewind:!0,speed:1e3,interval:1===j?1e3*parseInt(g):5e3,perPage:v>0?v:"tagembed"==(null===r||void 0===r||null===(i=r.User)||void 0===i?void 0:i.userDatabaseType)||l.ZQ?3:6,perMove:1,gap:0,autoplay:1===j,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:x>0?x:1},767:{perPage:x>0?x:2},991:{perPage:x>0?x:3},1200:{perPage:v>0?v:4},1400:{perPage:v>0?v:5},1600:{perPage:v>0?v:l.ZQ?3:6}}};return(0,d.jsx)(d.Fragment,{children:""!=_?(0,d.jsx)("div",{className:"tb_hs_post_container",children:k?(0,d.jsxs)(o.tv,{hasTrack:!1,className:"tb_hs_post_slider",options:S,ref:t=>this.inputRefs[b]=t,onMove:this.autoScrollSlider,children:[(0,d.jsx)(o.Gj,{children:(r.ThemeRule.multiRow>1&&1!==y.length&&y.length%2!==0?y.pop():y)&&y&&y.length>0&&y.map(((t,e)=>(0,d.jsx)(o.jw,{className:"tb_".concat(e),idd:_,children:(0,d.jsx)("div",{className:"tb_hs_col_wrap",children:t.map(((t,e)=>{const s=c[t];return(0,d.jsx)(w,{parentID:_,ownerId:r.Wall.owner,wall:r,itemData:s,itemIndex:e,personalization:r.Personalization,ThemeRule:r.ThemeRule,clickToShowPopUp:n,wallID:r.Wall.id,onClickToCTA:h,postSizeInPx:p,onClickPopUpSlider:m},e)}))})},"tb_".concat(e,"_").concat(e))))}),(0,d.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,d.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,d.jsx)("div",{})}),(0,d.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt ".concat(u.isShowMoreLoading?"tb_a_spinner":""),onClick:l.ig||l.ZQ?t=>this.requestData():null,role:"button","aria-label":"Go to next slide",children:(0,d.jsx)("div",{})})]})]}):null}):null})}}const y=(0,a.$j)((t=>({loaderData:t.loaderData})),(t=>({getDataNextSteps:(e,s,i,a,o,c,r,n)=>t((0,f.Sx)(e,s,i,a,o,c,r,n))})))(N)},61729:(t,e,s)=>{"use strict";var i=s(79165);function a(){}function o(){}o.resetWarningCache=a,t.exports=function(){function t(t,e,s,a,o,c){if(c!==i){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:a};return s.PropTypes=s,s}},75192:(t,e,s)=>{t.exports=s(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},37210:()=>{},50247:()=>{}}]);