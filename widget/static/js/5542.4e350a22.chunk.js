(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5542,115,7033,7234,7668],{97234:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var s=o(72791),i=(o(2703),o(14496)),a=o(80184);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o}=this.props;return(0,a.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(i.Z,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},14496:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var s=o(72791),i=o(80184);const a=t=>{let{username:e,network:o,authorClass:s,errorPic:a}=t;const r="#ffffff"==o.color?"#000":o.color;return(0,i.jsx)("img",{className:"".concat(s,"__"),src:a||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45,"aria-label":"author image"})},r=(0,s.memo)(a)},13422:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var s=o(70188),i=o(2703),a=o(80184);const r=t=>{let{size:e}=t;const o=t=>!(!(0,i.mD)(t)||1!=e);return(0,a.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("top","".concat(o(55)||o(62)||o(61)?"auto":"14px"),"important"),t.style.setProperty("left","".concat(o(62)||o(61)?"auto":"14px"),"important"),t.style.setProperty("right","".concat(o(55)||o(62)||o(61)?"14px":"auto"),"important"),t.style.setProperty("bottom","".concat(o(55)||o(62)||o(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image","url(".concat(s.do,"/media/images/tagshop-light.svg)"),"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,a.jsx)("div",{children:" "})})}},16243:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var s=o(72791),i=o(80184);class a extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:s,item:a}=this.props,r=!(!o||1!==o.status),n={color:r?o.color:t.color,backgroundColor:r?o.background:t.background};return(0,i.jsxs)("div",{className:e,style:n,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),s(a),window.open("".concat(r?o.url:t.url),"_blank")},children:[" ",r?o.text:t.text]})}}const r=a},87641:(t,e,o)=>{"use strict";o.d(e,{Z:()=>_});var s=o(72791),i=o(77581),a=o(89057),r=o(18947),n=o(2703),c=o(11225),l=o(80184);const d=(0,a.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),p=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,o=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(o,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:o}=this.props;if(e&&Object.keys(e).length>0){var s,i;const{wall:a}=e;(0,c.S5)({type:1,action:2,wall:null===a||void 0===a||null===(s=a.Wall)||void 0===s?void 0:s.id,product_id:t.id,post:o.referenceId,owner:null===a||void 0===a||null===(i=a.Wall)||void 0===i?void 0:i.owner,feed:o.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:o}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const i=(0,n.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(i),onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(o==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(d,{children:(0,l.jsx)(r.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(i),clickable:!0,html:p(t.UgcProduct)})})]},e)}))}):null}}const _=(0,i.$j)((t=>({appData:t.appData})))(h)},40115:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>d});var s=o(72791),i=o(11225),a=o(87641),r=o(80413),n=o(2703),c=o(70188),l=(o(46535),o(13422),o(80184));class d extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const o=document.querySelector(".track".concat(this.props.data.id));o&&(o.setAttribute("data-height",e),o.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:o}=await(0,r.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t,size:{height:parseInt(o),width:parseInt(t)}})}catch(o){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(o){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:o}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:o})}componentDidMount(){const{data:t,hotspot:e,size:o}=this.props;!o||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:o})}render(){const{ImageClass:t,data:e,wallID:o,themeID:s,ownerId:r,hotspot:d}=this.props,{imgUrl:p,paddingBottom:h,size:_,fixedPaddingBottom:u}=this.state,m={paddingBottom:"".concat(this.props.size?1==this.props.size?null:u:h,"%")},g={backgroundImage:"url(".concat(p,")")};if(_.width>_.height)var b="100%",v="".concat(_.height/_.width*100,"%");else v="100%",b="".concat(_.width/_.height*100,"%");const w=!!(e.hotspot&&e.ugc_products.length>0&&d),x={width:w&&this.props.size?b:null,height:w&&this.props.size?v:null};return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,children:[w?(0,l.jsx)("div",{className:"tb_blur_bg_",style:g}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:x,children:[w?(0,l.jsx)(a.Z,{product:e.ugc_products,dataItem:e}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:p,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":o,"data-owner-id":r,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(c.do,"/media/images/no-image.svg"),(0,i.ht)(t)},alt:(0,n.F$)(e.content)})]})]})}}},98270:(t,e,o)=>{"use strict";o.d(e,{Z:()=>p});var s=o(72791),i=o(80413),a=o(96710),r=o.n(a),n=o(11225),c=o(46535),l=(o(13422),o(80184));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class p extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:o,isCover:s,controls:i,autoPlay:a,handleVideoEnded:p,muted:h}=this.props,{paddingBottom:_,videoLoaded:u,isVisible:m}=this.state,g={paddingBottom:"".concat(_,"%")},b=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:g,ref:this.videoRef,children:(0,l.jsx)(r(),{className:"".concat(t," video").concat(e.id),url:d(b,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:a,muted:h,volume:a?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig?m:a,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:p||null})})}}},70757:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var s=o(72791),i=o(46535),a=o(80184);const r=s.lazy((()=>o.e(1088).then(o.bind(o,41088))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:n,Personalization:c}=this.props,l=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,a.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,a.jsx)("div",{})}):(0,a.jsxs)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(r,{network:t,networkClass:e})]})}}},23450:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var s=o(72791),i=o(34867),a=o(2703),r=(o(46535),o(70757),o(80184));const n=s.lazy((()=>Promise.all([o.e(6332),o.e(6476)]).then(o.bind(o,46476))));class c extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var o,s;const t=(null===(o=this.contentRef)||void 0===o||null===(s=o.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:o,font:c,personalization:l,item:d,contentTitle:p,readMore:h,maxLength:_,textAlign:u,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:o.textAlignment};u||o.textAlignment;let v=20==d.network.id?e:(0,a.Fx)(e);12==d.network.id&&(v=(0,i.ZP)(v));const w="".concat(o.lineTrim?" tb_content_line-".concat(o.lineTrim):""),x="".concat(t," ").concat(g?"":w," tb-cTBfont-").concat(o.font_varient);return(0,r.jsxs)("div",{className:x,ref:this.contentRef,style:b,children:[p?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(p)}):null,(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(n,{data:d,content:v,Personalization:l})]})]})}}},27668:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var s=o(72791),i=o(2703),a=o(80184);const r=t=>{const{postTime:e,timeClass:o}=t;return(0,a.jsx)("div",{className:o,role:"status","aria-label":"post timestamp ".concat((0,i.Sy)(e)),children:(0,i.Sy)(e)})},n=(0,s.memo)(r)},55461:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>f});var s=o(72791),i=o(48282),a=o(97234),r=o(27668),n=o(70757),c=o(80184);const l=t=>{let{author:e,personalization:o,postTime:s,network:i,ThemeRule:l,font:d}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",h={color:l.authorColor,fontFamily:l.css_font},_={backgroundColor:l.authorColor},u=!(!o.postAuthor||e.isInstaUser),m=!(!o.postAuthor||!o.postTime||e.isInstaUser);return(0,c.jsxs)("div",{className:"tb_spt_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,c.jsxs)("div",{className:"tb_spt_author",children:[u?(0,c.jsx)(a.default,{author:e,network:i,authorClass:"tb_spt_author_profile"}):"",(0,c.jsxs)("div",{className:"tb_spt_author_info",children:[u?(0,c.jsx)("div",{className:"tb_spt_authorname",style:h,children:e.name}):"",(0,c.jsxs)("div",{className:"tb_spt_post_info",children:[u?(0,c.jsx)("div",{className:"tb_spt_username",style:h,children:p}):"",m?(0,c.jsx)("div",{className:"tb_spt_seprator",style:_,children:" "}):"",o.postTime?(0,c.jsx)(r.default,{postTime:s,timeClass:"tb_spt_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor,authorNameStyle:h}):""]})]})]}),(0,c.jsx)("div",{className:"tb_spt_social_",children:(0,c.jsx)(n.default,{networkClass:"tb_spt_social_ico",network:i,isDefault:1===l.iconType,ThemeRule:l})})]})},d=t=>{let{share:e,shareColor:o}=t;const s={color:o};return(0,c.jsxs)("div",{className:"tb_spt_share_wrapper",children:[(0,c.jsxs)("div",{className:"tb_spt_share_button_",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico tb__icon tb-share",style:s,children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_btn_txt",style:s,children:"Share"})]}),(0,c.jsx)("div",{className:"tb_spt_share_wrapper_dropdown",children:(0,c.jsxs)("div",{className:"tb_spt_share_icon_list",children:[e.facebook?(0,c.jsxs)("a",{href:e.facebook,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-facebook",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Facebook"})]}):"",e.twitter?(0,c.jsxs)("a",{href:e.twitter,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico__  tb__icon tb-twitter",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Twitter"})]}):"",e.linkedin?(0,c.jsxs)("a",{href:e.linkedin,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-linkedin",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_ico_txt",children:"LinkedIn"})]}):""]})})]})};var p=o(40115),h=o(98270);const _=t=>{let{itemData:e,wallID:o,ownerId:s,wall:i}=t;const a=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay;return(0,c.jsx)("div",{className:"tb_spt_media_wrap",role:"button",tabindex:"0","aria-label":"Pop Up Button",children:a?(0,c.jsx)(h.Z,{VideoClass:"tb_spt_video",data:e,wallID:o,themeID:i.Personalization.widgetTheme,ownerId:s,size:130,muted:!0,autoPlay:a,handleVideoEnded:()=>{}}):(0,c.jsx)(p.default,{ImageClass:"tb_spt_image",data:e,wallID:o,themeID:i.Personalization.widgetTheme,ownerId:s,size:130})})};var u=o(23450),m=o(16243),g=o(2703);const b=(t,e,o)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,g.ok)(e)):o,v=(t,e,o)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,g.ok)(e)):o,w=t=>{let{itemData:e,ThemeRule:o}=t;const s={color:o.fontColor},i=e.network.id,a=3===i||10===i?"like":"heart";return(0,c.jsx)(c.Fragment,{children:12!==i&&15!==i&&20!==i&&21!==i?(0,c.jsxs)("div",{className:"tb_spt_social_action__",children:[(0,c.jsx)("div",{className:"tb_spt_social_action__list",children:(0,c.jsxs)("a",{href:b(i,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-".concat(a),style:s,children:" "}),e.like_count>0?(0,c.jsx)("div",{className:"tb_spt_social_action_counts__",style:s,children:e.like_count}):""]})}),(0,c.jsx)("div",{className:"tb_spt_social_action__list",children:(0,c.jsxs)("a",{href:v(i,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-comment",style:s,children:" "}),e.like_count>0?(0,c.jsx)("div",{className:"tb_spt_social_action_counts__",style:s,children:e.like_count}):""]})}),1===i?(0,c.jsx)("div",{className:"tb_spt_social_action__list",children:(0,c.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,g.ok)(e.postId)),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,c.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-retweet",style:s,children:" "})})}):""]}):""})},x=t=>{let{itemData:e,personalization:o,ThemeRule:i,itemIndex:a,clickToShowPopUp:r,wallID:n,ownerId:p,onClickToCTA:h,wall:g,onClickPopUpSlider:b}=t;const v=!!(e.ugc_products&&e.ugc_products.length>0),x=!(!v||0!==e.hotspot),f=!(!e.hotspot||!v),y={backgroundColor:i.cardColor},j=1!==e.type,k=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),N={justifyContent:e.share.status?"":"flex-end",borderTop:"1px solid ".concat(i.fontColor)};return(0,s.useEffect)((()=>{e.isPopUp&&b(a,e)}),[a,e.isPopUp,e]),(0,c.jsx)("div",{id:"tb-spt-post-".concat(e.id),className:"tb_spt_post_wrapper","tb-network":e.network.id,"tb-product":x?1:f?2:0,tabIndex:"0","area-label":e.content,role:"article",children:(0,c.jsx)("div",{className:"tb_spt_post_in",onClick:r(a,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,c.jsxs)("div",{className:"tb_spt_post_media_wrapp",role:"button",tabindex:"0","aria-label":"Pop Up Button",children:[j?(0,c.jsx)(_,{itemData:e,wallID:n,wall:g,ownerId:p}):"",(0,c.jsx)("div",{className:"tb_spt_post_details",children:(0,c.jsxs)("div",{className:"tb_spt_contant_wrapper",children:[(0,c.jsx)(l,{ownerId:p,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:o,ThemeRule:i}),(0,c.jsxs)("div",{className:"tb_spt_content_wrap",children:[(0,c.jsxs)("div",{className:"tb_spt_content_wrap_in",children:[i.hideContent&&1!=e.type?"":(0,c.jsx)(u.default,{contentClass:"tb_spt_content",item:e,content:e.content,font:i,ThemeRule:i,personalization:o}),k?(0,c.jsxs)("div",{className:"tb_spt_post_cta",children:[(0,c.jsx)(m.Z,{ctaClass:"tb_spt_post_cta_btn",cta:e.cta,contentTitle:e.contentTitle,item:e,onClickToCTA:h})," "]}):""]}),(0,c.jsxs)("div",{className:"tb_spt_social_actions_container",style:N,children:[e.share.status?(0,c.jsx)(d,{share:e.share,shareColor:i.fontColor}):"",i.socialAction?(0,c.jsx)(w,{itemData:e,ThemeRule:i}):""]})]})]})}),(0,c.jsx)("div",{className:"tb_spt_post_overlay",style:y,children:(0,c.jsx)("div",{})})]})})})};o(59169);class f extends s.PureComponent{componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}render(){const{postData:t,completeDataObject:e,wall:o,clickToShowPopUp:s,onClickToCTA:a,onClickPopUpSlider:r}=this.props,n={type:"loop",rewind:!0,speed:500,gap:0,autoplay:!!o.ThemeRule.slidePost,padding:0,pagination:!1,arrows:!0};return(0,c.jsx)("div",{className:"tb_spt_post_container",children:(0,c.jsxs)(i.tv,{hasTrack:!1,className:"tb_spt_post_slider",options:n,ref:this.myRef,children:[(0,c.jsx)(i.Gj,{children:t&&t.length>0&&t.map(((t,n)=>{const l=e[t];return(0,c.jsx)(i.jw,{style:{margin:0,padding:0},children:(0,c.jsx)(x,{ownerId:o.Wall.owner,itemData:l,itemIndex:n,personalization:o.Personalization,ThemeRule:o.ThemeRule,wallID:o.Wall.id,clickToShowPopUp:s,onClickToCTA:a,wall:o,onClickPopUpSlider:r})},n)}))}),(0,c.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_spt_arrow_wrapper_",children:[(0,c.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_spt_arrow tb_spt_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"splide__arrow splide__arrow--next tb_spt_arrow tb_spt_arrow_right__ tb__icon tb-arrow-right-alt",role:"button","aria-label":"Go to next slide",children:(0,c.jsx)("div",{})})]})]})})}}},80413:(t,e,o)=>{"use strict";e.Ad=void 0;var s=o(7782);var i=o(94590);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var a=o(52047)},7782:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,e,o)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=o(7782);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((o,i)=>{if("undefined"===typeof window)return i(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(s.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const r=new Image;r.addEventListener("load",(()=>{a&&window.clearTimeout(a),o({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{a&&window.clearTimeout(a),i("".concat(t.type,": ").concat(t.message))})),r.src=t,e.timeout&&(a=window.setTimeout((()=>i(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},52047:function(t,e,o){"use strict";var s=this&&this.__awaiter||function(t,e,o,s){return new(o||(o=Promise))((function(i,a){function r(t){try{c(s.next(t))}catch(e){a(e)}}function n(t){try{c(s.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,n)}c((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=o(72791),a=o(94590);e.useImageSize=(t,e)=>{const[o,r]=(0,i.useState)(null),[n,c]=(0,i.useState)(!1),[l,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){c(!0),r(null);try{const{width:o,height:s}=yield(0,a.getImageSize)(t,e);r({width:o,height:s})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[o,{loading:n,error:l}]}},59169:()=>{},50247:()=>{}}]);
//# sourceMappingURL=5542.4e350a22.chunk.js.map