(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7261,4261,8342,7138,7498,5810,9090,9239,5790,4442],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var o=s(47313),a=s(46417);const i=(0,o.lazy)((()=>s.e(8935).then(s.bind(s,98935))));class r extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,a.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{loading:"lazy",className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(i,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})})},Math.random())}}},98511:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var o=s(98501),a=s(17739),i=s(46417);const r=t=>{let{size:e}=t;const s=t=>!(!(0,a.mD)(t)||1!=e);return(0,i.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("top","".concat(s(55)||s(62)||s(61)?"auto":"14px"),"important"),t.style.setProperty("left","".concat(s(62)||s(61)?"auto":"14px"),"important"),t.style.setProperty("right","".concat(s(55)||s(62)||s(61)?"14px":"auto"),"important"),t.style.setProperty("bottom","".concat(s(55)||s(62)||s(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image","url(".concat(o.do,"/media/images/tagshop-light.svg)"),"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,i.jsx)("div",{children:" "})})}},7138:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var o=s(47313),a=s(46417);class i extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:o,item:i}=this.props,r=!(!s||1!==s.status),n={color:r?s.color:t.color,backgroundColor:r?s.background:t.background};return(0,a.jsxs)("div",{className:e,style:n,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),o(i),window.open("".concat(r?s.url:t.url),"_blank")},children:[" ",r?s.text:t.text]})}}const r=i},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var o=s(47313),a=s(43411),i=s(83773),r=s(6119),n=s(17739),c=s(43635),l=s(46417);const d=(0,i.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),p=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",o=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(o,"\n        </a>")};class h extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:s}=this.props;if(e&&Object.keys(e).length>0){var o,a;const{wall:i}=e;(0,c.S5)({type:1,action:2,wall:null===i||void 0===i||null===(o=i.Wall)||void 0===o?void 0:o.id,product_id:t.id,post:s.referenceId,owner:null===i||void 0===i||null===(a=i.Wall)||void 0===a?void 0:a.owner,feed:s.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,o=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return o.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==o.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(d,{children:(0,l.jsx)(r.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:p(t.UgcProduct)})})]},e)}))}):null}}const _=(0,a.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var o=s(47313),a=s(43635),i=s(97915),r=s(17739),n=s(98501),c=s(46417);class l extends o.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,r.GF)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s})}render(){const{ImageClass:t,data:e,wallID:s,themeID:o,ownerId:l,hotspot:d}=this.props,{imgUrl:p,paddingBottom:h,size:_,fixedPaddingBottom:u}=this.state,m={paddingBottom:"".concat(this.props.size?1==this.props.size?null:u:h,"%")},b={backgroundImage:"url(".concat(p,")")};if(_.width>_.height)var g="100%",x="".concat(_.height/_.width*100,"%");else x="100%",g="".concat(_.width/_.height*100,"%");const w=!!(e.hotspot&&e.ugc_products.length>0&&d),v={width:w&&this.props.size?g:null,height:w&&this.props.size?x:null};return(0,c.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,children:[w?(0,c.jsx)("div",{className:"tb_blur_bg_",style:b}):null,(0,c.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:v,children:[w?(0,c.jsx)(i.Z,{product:e.ugc_products,dataItem:e}):null,(0,c.jsx)("img",{className:"".concat(t," track").concat(e.id),src:e.postFileNew,srcSet:"".concat(e.postFileNew," 400w, ").concat(e.file," 1200w"),sizes:"(max-width: 700px) 0px, 620px",loading:"lazy",decoding:"async",height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":l,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":o,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,r.F$)(e.content)})]})]})}}},64442:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>p});var o=s(47313),a=s(17739),i=s(20510),r=s.n(i),n=s(43635),c=s(35179),l=(s(98511),s(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class p extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.GF)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:o,controls:a,autoPlay:i,handleVideoEnded:p,muted:h}=this.props,{paddingBottom:_,videoLoaded:u,isVisible:m}=this.state,b={paddingBottom:"".concat(_,"%")},g=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(r(),{className:"".concat(t," video").concat(e.id),url:d(g,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:i,muted:h,volume:i?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig?m:i,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:p||null})})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var o=s(47313),a=s(35179),i=s(46417);const r=o.lazy((()=>s.e(5867).then(s.bind(s,95867))));class n extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:n,Personalization:c}=this.props,l=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(o.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(r,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var o=s(47313),a=s(16390),i=s(17739),r=(s(35179),s(25810),s(46417));const n=o.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class c extends o.PureComponent{constructor(t){super(t),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var s,o;const t=(null===(s=this.contentRef)||void 0===s||null===(o=s.current)||void 0===o?void 0:o.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:c,personalization:l,item:d,contentTitle:p,readMore:h,maxLength:_,textAlign:u,maxLines:m,isReadMore:b}=this.props,g={WebkitLineClamp:m,textAlign:s.textAlignment};u||s.textAlignment;let x=20==d.network.id?e:(0,i.Fx)(e);12==d.network.id&&(x=(0,a.ZP)(x));const w="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),v="".concat(t," ").concat(b?"":w," tb-cTBfont-").concat(s.font_varient);return(0,r.jsxs)("div",{className:v,ref:this.contentRef,style:g,children:[p?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(p)}):null,(0,r.jsxs)(o.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(n,{data:d,content:x,Personalization:l})]})]})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var o=s(47313),a=s(17739),i=s(46417);const r=t=>{const{postTime:e,timeClass:s}=t;return(0,i.jsx)("div",{className:s,role:"status","aria-label":"post timestamp ".concat((0,a.Sy)(e)),children:(0,a.Sy)(e)})},n=(0,o.memo)(r)},56094:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>y});var o=s(47313),a=s(11774),i=s(89239),r=s(55790),n=s(25810),c=s(46417);const l=t=>{let{author:e,personalization:s,postTime:o,network:a,ThemeRule:l,font:d}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",h={color:l.authorColor,fontFamily:l.css_font},_={backgroundColor:l.authorColor},u=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,c.jsxs)("div",{className:"tb_spt_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,c.jsxs)("div",{className:"tb_spt_author",children:[u?(0,c.jsx)(i.default,{author:e,network:a,authorClass:"tb_spt_author_profile"}):"",(0,c.jsxs)("div",{className:"tb_spt_author_info",children:[u?(0,c.jsx)("div",{className:"tb_spt_authorname",style:h,children:e.name}):"",(0,c.jsxs)("div",{className:"tb_spt_post_info",children:[u?(0,c.jsx)("div",{className:"tb_spt_username",style:h,children:p}):"",m?(0,c.jsx)("div",{className:"tb_spt_seprator",style:_,children:" "}):"",s.postTime?(0,c.jsx)(r.default,{postTime:o,timeClass:"tb_spt_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor,authorNameStyle:h}):""]})]})]}),(0,c.jsx)("div",{className:"tb_spt_social_",children:(0,c.jsx)(n.default,{networkClass:"tb_spt_social_ico",network:a,isDefault:1===l.iconType,ThemeRule:l})})]})},d=t=>{let{share:e,shareColor:s}=t;const o={color:s};return(0,c.jsxs)("div",{className:"tb_spt_share_wrapper",children:[(0,c.jsxs)("div",{className:"tb_spt_share_button_",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico tb__icon tb-share",style:o,children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_btn_txt",style:o,children:"Share"})]}),(0,c.jsx)("div",{className:"tb_spt_share_wrapper_dropdown",children:(0,c.jsxs)("div",{className:"tb_spt_share_icon_list",children:[e.facebook?(0,c.jsxs)("a",{href:e.facebook,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-facebook",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Facebook"})]}):"",e.twitter?(0,c.jsxs)("a",{href:e.twitter,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico__  tb__icon tb-twitter",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Twitter"})]}):"",e.linkedin?(0,c.jsxs)("a",{href:e.linkedin,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-linkedin",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_ico_txt",children:"LinkedIn"})]}):""]})})]})};var p=s(84261),h=s(64442);const _=t=>{let{itemData:e,wallID:s,ownerId:o,wall:a}=t;const i=(3===e.type||5===e.type)&&28!==e.network.id&&1==a.ThemeRule.autoPlay;return(0,c.jsx)("div",{className:"tb_spt_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:i?(0,c.jsx)(h.default,{VideoClass:"tb_spt_video",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:o,size:130,muted:!0,autoPlay:i,handleVideoEnded:()=>{}}):(0,c.jsx)(p.default,{ImageClass:"tb_spt_image",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:o,size:130})})};var u=s(62245),m=s(7138),b=s(17739);const g=(t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,b.ok)(e)):s,x=(t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,b.ok)(e)):s,w=t=>{let{itemData:e,ThemeRule:s}=t;const o={color:s.fontColor},a=e.network.id,i=3===a||10===a?"like":"heart";return(0,c.jsx)(c.Fragment,{children:12!==a&&15!==a&&20!==a&&21!==a?(0,c.jsxs)("div",{className:"tb_spt_social_action__",children:[(0,c.jsx)("div",{className:"tb_spt_social_action__list",children:(0,c.jsxs)("a",{href:g(a,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-".concat(i),style:o,children:" "}),e.like_count>0?(0,c.jsx)("div",{className:"tb_spt_social_action_counts__",style:o,children:e.like_count}):""]})}),(0,c.jsx)("div",{className:"tb_spt_social_action__list",children:(0,c.jsxs)("a",{href:x(a,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-comment",style:o,children:" "}),e.like_count>0?(0,c.jsx)("div",{className:"tb_spt_social_action_counts__",style:o,children:e.like_count}):""]})}),1===a?(0,c.jsx)("div",{className:"tb_spt_social_action__list",children:(0,c.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,b.ok)(e.postId)),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,c.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-retweet",style:o,children:" "})})}):""]}):""})},v=t=>{let{itemData:e,personalization:s,ThemeRule:a,itemIndex:i,clickToShowPopUp:r,wallID:n,ownerId:p,onClickToCTA:h,wall:b,onClickPopUpSlider:g}=t;const x=!!(e.ugc_products&&e.ugc_products.length>0),v=!(!x||0!==e.hotspot),y=!(!e.hotspot||!x),f={backgroundColor:a.cardColor},j=1!==e.type,k=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),N={justifyContent:e.share.status?"":"flex-end",borderTop:"1px solid ".concat(a.fontColor)};return(0,o.useEffect)((()=>{e.isPopUp&&g(i,e)}),[i,e.isPopUp,e]),(0,c.jsx)("div",{id:"tb-spt-post-".concat(e.id),className:"tb_spt_post_wrapper","tb-network":e.network.id,"tb-product":v?1:y?2:0,tabIndex:"0","area-label":e.content,role:"article",children:(0,c.jsx)("div",{className:"tb_spt_post_in",onClick:r(i,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,c.jsxs)("div",{className:"tb_spt_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[j?(0,c.jsx)(_,{itemData:e,wallID:n,wall:b,ownerId:p}):"",(0,c.jsx)("div",{className:"tb_spt_post_details",children:(0,c.jsxs)("div",{className:"tb_spt_contant_wrapper",children:[(0,c.jsx)(l,{ownerId:p,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:s,ThemeRule:a}),(0,c.jsxs)("div",{className:"tb_spt_content_wrap",children:[(0,c.jsxs)("div",{className:"tb_spt_content_wrap_in",children:[a.hideContent&&1!=e.type?"":(0,c.jsx)(u.default,{contentClass:"tb_spt_content",item:e,content:e.content,font:a,ThemeRule:a,personalization:s}),k?(0,c.jsxs)("div",{className:"tb_spt_post_cta",children:[(0,c.jsx)(m.default,{ctaClass:"tb_spt_post_cta_btn",cta:e.cta,contentTitle:e.contentTitle,item:e,onClickToCTA:h})," "]}):""]}),(0,c.jsxs)("div",{className:"tb_spt_social_actions_container",style:N,children:[e.share.status?(0,c.jsx)(d,{share:e.share,shareColor:a.fontColor}):"",a.socialAction?(0,c.jsx)(w,{itemData:e,ThemeRule:a}):""]})]})]})}),(0,c.jsx)("div",{className:"tb_spt_post_overlay",style:f,children:(0,c.jsx)("div",{})})]})})})};s(37210);class y extends o.PureComponent{componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:o,onClickToCTA:i,onClickPopUpSlider:r}=this.props,n={type:"loop",rewind:!0,speed:500,gap:0,autoplay:!!s.ThemeRule.slidePost,padding:0,pagination:!1,arrows:!0};return(0,c.jsx)("div",{className:"tb_spt_post_container",children:(0,c.jsxs)(a.tv,{hasTrack:!1,className:"tb_spt_post_slider",options:n,ref:this.myRef,children:[(0,c.jsx)(a.Gj,{children:t&&t.length>0&&t.map(((t,n)=>{const l=e[t];return(0,c.jsx)(a.jw,{style:{margin:0,padding:0},children:(0,c.jsx)(v,{ownerId:s.Wall.owner,itemData:l,itemIndex:n,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:o,onClickToCTA:i,wall:s,onClickPopUpSlider:r})},n)}))}),(0,c.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_spt_arrow_wrapper_",children:[(0,c.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_spt_arrow tb_spt_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"splide__arrow splide__arrow--next tb_spt_arrow tb_spt_arrow_right__ tb__icon tb-arrow-right-alt",role:"button","aria-label":"Go to next slide",children:(0,c.jsx)("div",{})})]})]})})}}},61729:(t,e,s)=>{"use strict";var o=s(79165);function a(){}function i(){}i.resetWarningCache=a,t.exports=function(){function t(t,e,s,a,i,r){if(r!==o){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return s.PropTypes=s,s}},75192:(t,e,s)=>{t.exports=s(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},37210:()=>{},50247:()=>{}}]);