(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8463,5867,4261,8342,5744,7138,905,1349,7498,5810,9090,9239,5790,4442],{89239:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(47313),a=i(46417);const o=(0,s.lazy)((()=>i.e(8935).then(i.bind(i,98935))));class c extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i}=this.props;return(0,a.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{loading:"lazy",className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(o,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color,errorPic:t.errorPic})})},Math.random())}}},98511:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var s=i(98501),a=i(17739),o=i(46417);const c=t=>{let{size:e}=t;const i=t=>!(!(0,a.mD)(t)||1!=e);return(0,o.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("top","".concat(i(55)||i(62)||i(61)?"auto":"14px"),"important"),t.style.setProperty("left","".concat(i(62)||i(61)?"auto":"14px"),"important"),t.style.setProperty("right","".concat(i(55)||i(62)||i(61)?"14px":"auto"),"important"),t.style.setProperty("bottom","".concat(i(55)||i(62)||i(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image","url(".concat(s.do,"/media/images/tagshop-light.svg)"),"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,o.jsx)("div",{children:" "})})}},7138:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(47313),a=i(46417);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:i,onClickToCTA:s,item:o}=this.props,c=!(!i||1!==i.status),r={color:c?i.color:t.color,backgroundColor:c?i.background:t.background};return(0,a.jsxs)("div",{className:e,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(c?i.url:t.url),"_blank")},children:[" ",c?i.text:t.text]})}}const c=o},97915:(t,e,i)=>{"use strict";i.d(e,{Z:()=>p});var s=i(47313),a=i(43411),o=i(83773),c=i(6119),r=i(17739),n=i(43635),l=i(46417);const d=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),_=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:i}=this.props;if(e&&Object.keys(e).length>0){var s,a;const{wall:o}=e;(0,n.S5)({type:1,action:2,wall:null===o||void 0===o||null===(s=o.Wall)||void 0===s?void 0:s.id,product_id:t.id,post:i.referenceId,owner:null===o||void 0===o||null===(a=o.Wall)||void 0===a?void 0:a.owner,feed:i.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,r.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(d,{children:(0,l.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:_(t.UgcProduct)})})]},e)}))}):null}}const p=(0,a.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var s=i(47313),a=i(43635),o=i(97915),c=i(17739),r=i(98501),n=i(46417);class l extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,c.GF)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:s,ownerId:l,hotspot:d}=this.props,{imgUrl:_,paddingBottom:h,size:p,fixedPaddingBottom:m}=this.state,u={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:h,"%")},b={backgroundImage:"url(".concat(_,")")};if(p.width>p.height)var x="100%",v="".concat(p.height/p.width*100,"%");else v="100%",x="".concat(p.width/p.height*100,"%");const j=!!(e.hotspot&&e.ugc_products.length>0&&d),w={width:j&&this.props.size?x:null,height:j&&this.props.size?v:null};return(0,n.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:u,children:[j?(0,n.jsx)("div",{className:"tb_blur_bg_",style:b}):null,(0,n.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:w,children:[j?(0,n.jsx)(o.Z,{product:e.ugc_products,dataItem:e}):null,(0,n.jsx)("img",{className:"".concat(t," track").concat(e.id),src:e.postFileNew,srcSet:"".concat(e.postFileNew," 400w, ").concat(e.file," 1200w"),sizes:"(max-width: 700px) 0px, 620px",loading:"lazy",decoding:"async",height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":l,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,c.F$)(e.content)})]})]})}}},64442:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>_});var s=i(47313),a=i(17739),o=i(20510),c=i.n(o),r=i(43635),n=i(35179),l=(i(98511),i(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,a.GF)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(n.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(n.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:i,isCover:s,controls:a,autoPlay:o,handleVideoEnded:_,muted:h}=this.props,{paddingBottom:p,videoLoaded:m,isVisible:u}=this.state,b={paddingBottom:"".concat(p,"%")},x=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:d(x,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:o,muted:h,volume:o?1:0,playsinline:!0,onReady:t=>{n.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:n.ig?u:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},81349:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});i(47313);var s=i(35179),a=i(95867),o=i(46417);const c=t=>{const{itemData:e,IconClass:i,isCenter:c,hideVideo:r,show:n}=t,l=3===e.type||5===e.type,d=7===e.network.id,_=!!(e.imageList&&e.imageList.length>0),h=1===e.isAudio,p=!!(e.ugc_products&&e.ugc_products.length>0),m=(0,o.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),u=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,o.jsx)("div",{})}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),x=(0,o.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,o.jsx)("div",{})}),v=(0,o.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,o.jsx)("div",{})}),j=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,o.jsx)("div",{})}),w=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return n?(0,o.jsxs)(o.Fragment,{children:[c&&(d||l)?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_c"),children:[l&&!d?w:"",l&&d?m:""]}):null,p||_||l?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_"),children:[p?j:"",_?u:"",c||!l||d||r?"":h?b:s.ZQ?v:x]}):null]}):null}},95867:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(35179),o=i(46417);const c=s.memo((t=>{let{network:e,networkClass:i}=t;const s="".concat(i," tb__icon tb_ico_default");switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(s," tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(s," tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(s," tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(s," tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(s," tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(s," tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(s," tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(s," tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(s," tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(s," tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(s," tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(s," tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(s," tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(s," tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(s," tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(s," tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(s," tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(s," tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return a.ZQ?(0,o.jsxs)("div",{className:"".concat(s," tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return a.ZQ?(0,o.jsx)("div",{className:"".concat(s," tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(s," tb-onsite-upload"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(s," tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(s," tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(s," tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(s," tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(s," tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(s," tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 38:return(0,o.jsxs)("div",{className:"".concat(s," tb-booking-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});default:return""}}));class r extends s.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},25810:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(35179),o=i(46417);const c=s.lazy((()=>i.e(5867).then(i.bind(i,95867))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:r,Personalization:n}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},62245:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),a=i(16390),o=i(17739),c=(i(35179),i(25810),i(46417));const r=s.lazy((()=>Promise.all([i.e(622),i.e(584)]).then(i.bind(i,30584))));class n extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,s;const t=(null===(i=this.contentRef)||void 0===i||null===(s=i.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:i,font:n,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:p,textAlign:m,maxLines:u,isReadMore:b}=this.props,x={WebkitLineClamp:u,textAlign:i.textAlignment};m||i.textAlignment;let v=20==d.network.id?e:(0,o.Fx)(e);12==d.network.id&&(v=(0,a.ZP)(v));const j="".concat(i.lineTrim?" tb_content_line-".concat(i.lineTrim):""),w="".concat(t," ").concat(b?"":j," tb-cTBfont-").concat(i.font_varient);return(0,c.jsxs)("div",{className:w,ref:this.contentRef,style:x,children:[_?(0,c.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(r,{data:d,content:v,Personalization:l})]})]})}}},90905:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),a=i(35179),o=i(46417);const c=t=>{let{network:e}=t;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:c}=i[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:c},"tb-network":e.id,children:(0,o.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:i,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:s},"tb-network":e})};class n extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:i}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>i?(0,o.jsx)(r,{ThemeID:i},s):(0,o.jsx)(c,{network:e},s))):null})}}},5744:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(43635),o=i(35179),c=i(46417);class r extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:i,wallID:s,ownerId:c}=this.props;e.stopPropagation(),o.ZQ||(0,a.S5)({type:2,action:2,wall:s,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:c}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,c.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,c.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,c.jsx)("div",{})}),(0,c.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,c.jsx)("div",{})})}):"",t.twitter?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,c.jsx)("div",{})})}):"",t.linkedin?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,c.jsx)("div",{})})}):""]})]})}}},55790:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(17739),o=i(46417);const c=t=>{const{postTime:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,role:"status","aria-label":"post timestamp ".concat((0,a.Sy)(e)),children:(0,a.Sy)(e)})},r=(0,s.memo)(c)},95136:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>k});i(47313);var s=i(89239),a=i(55790),o=i(25810),c=i(46417);const r=t=>{let{author:e,personalization:i,postTime:r,network:n,ThemeRule:l,font:d,mediaType:_}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",p=!(!i.postAuthor||e.isInstaUser),m=!(!i.postAuthor||!i.postTime||e.isInstaUser);return(0,c.jsxs)("div",{className:"tb_wt_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,c.jsxs)("div",{className:"tb_wt_author",children:[p?(0,c.jsx)(s.default,{author:e,network:n,authorClass:"tb_wt_author_profile"}):"",(0,c.jsxs)("div",{className:"tb_wt_author_info",children:[p?(0,c.jsx)("div",{className:"tb_wt_authorname",children:e.name}):"",(0,c.jsxs)("div",{className:"tb_wt_post_info",children:[p?(0,c.jsx)("div",{className:"tb_wt_username",children:h}):"",m?(0,c.jsx)("div",{className:"tb_wt_seprator",children:" "}):"",i.postTime?(0,c.jsx)(a.default,{postTime:r,timeClass:"tb_wt_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor}):""]})]})]}),(0,c.jsx)("div",{className:"tb_wt_social_",children:(0,c.jsx)(o.default,{networkClass:"tb_wt_social_ico",network:n,isDefault:1===l.iconType,ThemeRule:l})})]})};var n=i(35179),l=i(81349),d=i(84261),_=i(64442);const h=t=>{let{itemData:e,wallID:i,ownerId:s,wall:a}=t;const o=!(!n.ZQ||3!==e.type&&5!==e.type||a.Personalization.mobilePopup||a.Personalization.postFeatured),r=(3===e.type||5===e.type)&&28!==e.network.id&&1==a.ThemeRule.autoPlay,h=!(!n.ZQ&&!n.Jx)&&(!!a.ThemeRule.aspectImageRatio&&a.ThemeRule.aspectImageRatio);return(0,c.jsxs)("div",{className:"tb_wt_media_wrap",role:"button",tabIndex:"0","aria-label":"Post Pop up media wrapper",children:[o?null:(0,c.jsx)(l.default,{itemData:e,IconClass:"tb_wt_media_icon",show:!0,isCenter:n.ZQ}),r||o?(0,c.jsx)(_.default,{VideoClass:"tb_wt_video",data:e,wallID:i,themeID:a.Personalization.widgetTheme,ownerId:s,size:h,isCover:!0,controls:!1,autoPlay:!1,muted:!0}):(0,c.jsx)(d.default,{ImageClass:"tb_wt_image",data:e,wallID:i,themeID:a.Personalization.widgetTheme,ownerId:s,size:h,ThemeRule:a.ThemeRule})]})};var p=i(62245),m=i(7138),u=i(90905);const b=t=>{let{share:e,shareClass:i}=t;const s=(t,e)=>{t.stopPropagation(),e()};return(0,c.jsx)("div",{className:i,children:(0,c.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,c.jsx)("div",{className:"tb_wt_share_list",children:(0,c.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,c.jsx)("div",{className:"tb_wt_share_list",children:(0,c.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,c.jsx)("div",{className:"tb_wt_share_list",children:(0,c.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var x=i(17739);const v=(t,e,i)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,x.ok)(e)):i,j=(t,e,i)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,x.ok)(e)):i,w=t=>{let{itemData:e,ThemeRule:i}=t;const s=e.network.id,a=3===s||10===s?"like":"heart";return(0,c.jsx)(c.Fragment,{children:12!==s&&15!==s&&20!==s&&21!==s&&29!==s?(0,c.jsxs)("div",{className:"tb_wt_social_action__",role:"navigation",children:[(0,c.jsx)("div",{className:"tb_wt_social_action__list",children:(0,c.jsxs)("a",{href:v(s,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":"Post Like Url ".concat(v(s,e.postId,e.link)),title:"Favorite",children:[(0,c.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-".concat(a),children:" "}),e.like_count>0?(0,c.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,c.jsx)("div",{className:"tb_wt_social_action__list",children:(0,c.jsxs)("a",{href:j(s,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":"Post comment Url ".concat(j(s,e.postId,e.link)),title:"Comment",children:[(0,c.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,c.jsx)("div",{className:"tb_wt_social_action_counts__",children:n.ZQ?e.comment_count:e.like_count}):""]})}),1===s?(0,c.jsx)("div",{className:"tb_wt_social_action__list",children:(0,c.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,x.ok)(e.postId)),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":"Post comment Url https://twitter.com/intent/retweet?tweet_id=".concat((0,x.ok)(e.postId)),title:"Tweet",children:(0,c.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})};var g=i(5744);const N=n.ZQ?null:200,f=t=>{let{itemData:e,personalization:i,ThemeRule:s,wallID:a,clickToShowPopUp:o,itemIndex:l,ownerId:d,onClickToCTA:_,wall:v}=t;const j=!!(e.ugc_products&&e.ugc_products.length>0),f=!(!j||0!==e.hotspot),k=!(!e.hotspot||!j),y=!(n.ZQ&&(0,x.mD)(53)||(0,x.mD)(57)||n.Jx&&(0,x.mD)(85)||1===e.type),C=e.rating>0,I=e.rating>0?"tb_wt_rating_content":"tb_wt_content",P=1===e.type&&i.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",T=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),S=i.trimcontent?(0,x.Sv)(e.content,N):e.content;return(0,c.jsx)("div",{id:"tb-wt-post-".concat(e.id),className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":f?1:k?2:0,role:"article","aria-label":"Post ".concat(parseInt(l)+1,",").concat(S),tabIndex:"0",children:(0,c.jsxs)("div",{className:"tb_wt_post_in",onClick:o(l,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,c.jsx)(r,{ownerId:d,postTime:e.createdAt,author:e.author,network:e.network,font:s,personalization:i,ThemeRule:s,mediaType:y}),(0,c.jsxs)("div",{className:"tb_wt_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[y?(0,c.jsx)(h,{itemData:e,wallID:a,ownerId:d,wall:v},"img".concat(l,"_").concat(e.id)):"",C?(0,c.jsxs)("div",{className:"tb_wt_rating__",children:[(0,c.jsx)(u.default,{rating:e.rating,network:e.network})," "]}):""]}),(0,c.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[e.share.status?(0,c.jsx)(g.default,{share:e.share,shareClass:"tb_wt_share_container",item:e,wallID:a,ownerId:d}):"",T?(0,c.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,c.jsx)(m.default,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",s.hideContent&&1!=e.type?"":(0,c.jsx)(p.default,{contentClass:"".concat(I," ").concat(P),item:e,content:S,font:s,ThemeRule:s,personalization:i,contentTitle:e.contentTitle}),(0,c.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!s.socialAction?{justifyContent:"flex-end"}:{},children:[s.socialAction?(0,c.jsx)(w,{itemData:e,ThemeRule:s}):"",e.share.status?(0,c.jsx)(b,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},k=t=>{let{postData:e,completeDataObject:i,adjustWidth:s,wall:a,clickToShowPopUp:o,onClickToCTA:r}=t;return(0,c.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const n=i[t];return(0,c.jsx)(f,{ownerId:a.Wall.owner,itemData:n,itemIndex:e,adjustWidth:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:o,onClickToCTA:r,wall:a},"wdt_crd_".concat(e,"_").concat(t.id))}))})}},61729:(t,e,i)=>{"use strict";var s=i(79165);function a(){}function o(){}o.resetWarningCache=a,t.exports=function(){function t(t,e,i,a,o,c){if(c!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:a};return i.PropTypes=i,i}},75192:(t,e,i)=>{t.exports=i(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50247:()=>{}}]);