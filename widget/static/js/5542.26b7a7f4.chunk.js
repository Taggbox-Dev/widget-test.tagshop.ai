(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5542,7033,7234,7668],{97234:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var o=s(72791),a=s(2703),i=s(14496),n=s(80184);class r extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,n.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});s(72791);var o=s(80184);const a=t=>{let{username:e,network:s,authorClass:a}=t;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var o=s(72791),a=s(80184);class i extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:o,item:i}=this.props,n=!(!s||1!==s.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),o(i),window.open("".concat(n?s.url:t.url),"_blank")},children:[" ",n?s.text:t.text]})}}const n=i},87641:(t,e,s)=>{"use strict";s.d(e,{Z:()=>p});var o=s(72791),a=s(77581),i=s(89057),n=s(18947),r=s(2703),l=s(80184);const c=(0,i.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,'</div>\n  <div class="tb_p_tooltip_price tb_price_disabled">').concat(t.price_currency_symbol).concat(t.product_discount,'</div>\n  <div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(t.product_price,"</div>\n  </a>");class _ extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,o=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return o.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,r.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==o.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(c,{children:(0,l.jsx)(n.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const p=(0,a.$j)((t=>({appData:t.appData})))(_)},40115:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var o=s(72791),a=s(11225),i=s(87641),n=s(80413),r=s(2703),l=s(70188),c=s(80184);class d extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:s}=this.state;if(e&&Object.keys(e).length>0&&[4,2,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(o){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:s,themeID:o,ownerId:n,hotspot:d}=this.props,{imgUrl:_,paddingBottom:p}=this.state,h={paddingBottom:"".concat(p,"%")},u={backgroundImage:"url(".concat(_,")")},m=!!(e.hotspot&&e.ugc_products.length>0&&d);return(0,c.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:h,children:[m?(0,c.jsx)("div",{className:"tb_blur_bg_",style:u}):null,(0,c.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:m?"":"100%"},children:[m?(0,c.jsx)(i.Z,{product:e.ugc_products}):null,(0,c.jsx)("img",{className:"".concat(t),role:"img",src:_,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":o,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(l.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,r.P)(_)})]})]})}}},98270:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var o=s(72791),a=s(80413),i=s(96710),n=s.n(i),r=s(11225),l=s(46535),c=s(80184);const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:s,isCover:o,controls:a,autoPlay:i,handleVideoEnded:_,muted:p}=this.props,{paddingBottom:h,videoLoaded:u}=this.state,m={paddingBottom:"".concat(h,"%")};return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,children:(0,c.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(e.mediaUrl,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!i,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:i,muted:p,volume:i?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:!!l.ig||i,height:"100%",width:"100%",controls:a,style:{backgroundImage:u?"":"url(".concat(e.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},70757:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var o=s(72791),a=s(46535),i=s(2703),n=s(80184);const r=o.lazy((()=>s.e(1088).then(s.bind(s,41088))));class l extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:l}=this.props,c=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon,_=(0,i.mD)(59)?null:(0,i.uu)(s.iconColor,s.cardColor);return c?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:_},children:(0,n.jsx)("div",{})}):(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{network:t,networkClass:e})]})}}},23450:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var o=s(72791),a=s(34867),i=s(2703),n=(s(46535),s(70757),s(80184));const r=o.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class l extends o.PureComponent{constructor(t){super(t),this.toggleExpanded=t=>{this.setState({expanded:!this.state.expanded}),t.stopPropagation()},this.state={expanded:!1}}render(){const{contentClass:t,content:e,ThemeRule:s,font:l,personalization:c,item:d,contentTitle:_,readMore:p,maxLength:h,textAlign:u,isNetwork:m}=this.props,{expanded:b}=this.state,w={textAlign:u||s.textAlignment};let g=20==d.network.id?e:(0,i.Fx)(e);12==d.network.id&&(g=(0,a.ZP)(g));const v=p?b?g:g.slice(0,h):g,x="".concat(t).concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):"").concat(s.font_varient?" tb-cTBfont-".concat(s.font_varient):"");return(0,n.jsxs)("div",{className:x,style:w,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{data:d,content:v,Personalization:c})]}),p&&g.length>h&&(0,n.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:b?"...Read Less...":"...Read More..."})]})}}},27668:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var o=s(72791),a=s(2703),i=s(80184);const n=t=>{const{postTime:e,timeClass:s}=t,n=(0,o.useMemo)((()=>(0,a.Sy)(e)),[]);return(0,i.jsx)("div",{className:s,children:n})},r=(0,o.memo)(n)},55461:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>j});var o=s(72791),a=s(48282),i=s(97234),n=s(27668),r=s(70757),l=s(80184);const c=t=>{let{author:e,personalization:s,postTime:o,network:a,ThemeRule:c,font:d}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",p={color:c.authorColor,fontFamily:c.css_font},h={backgroundColor:c.authorColor},u=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,l.jsxs)("div",{className:"tb_spt_author_wrapper",children:[(0,l.jsxs)("div",{className:"tb_spt_author",children:[u?(0,l.jsx)(i.default,{author:e,network:a,authorClass:"tb_spt_author_profile"}):"",(0,l.jsxs)("div",{className:"tb_spt_author_info",children:[u?(0,l.jsx)("div",{className:"tb_spt_authorname",style:p,children:e.name}):"",(0,l.jsxs)("div",{className:"tb_spt_post_info",children:[u?(0,l.jsx)("div",{className:"tb_spt_username",style:p,children:_}):"",m?(0,l.jsx)("div",{className:"tb_spt_seprator",style:h,children:" "}):"",s.postTime?(0,l.jsx)(n.default,{postTime:o,timeClass:"tb_spt_time tb-cTBfont-".concat(c.font_varient),authorColor:c.authorColor,authorNameStyle:p}):""]})]})]}),(0,l.jsx)("div",{className:"tb_spt_social_",children:(0,l.jsx)(r.default,{networkClass:"tb_spt_social_ico",network:a,isDefault:1===c.iconType,ThemeRule:c})})]})},d=t=>{let{share:e,shareColor:s}=t;const o={color:s};return(0,l.jsxs)("div",{className:"tb_spt_share_wrapper",children:[(0,l.jsxs)("div",{className:"tb_spt_share_button_",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico tb__icon tb-share",style:o,children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_btn_txt",style:o,children:"Share"})]}),(0,l.jsx)("div",{className:"tb_spt_share_wrapper_dropdown",children:(0,l.jsxs)("div",{className:"tb_spt_share_icon_list",children:[e.facebook?(0,l.jsxs)("a",{href:e.facebook,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-facebook",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Facebook"})]}):"",e.twitter?(0,l.jsxs)("a",{href:e.twitter,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__  tb__icon tb-twitter",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Twitter"})]}):"",e.linkedin?(0,l.jsxs)("a",{href:e.linkedin,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-linkedin",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"LinkedIn"})]}):""]})})]})};var _=s(40115),p=s(98270);const h=t=>{let{itemData:e,wallID:s,ownerId:o,wall:a}=t;const i=(3===e.type||5===e.type)&&28!==e.network.id&&1==a.ThemeRule.autoPlay;return(0,l.jsx)("div",{className:"tb_spt_media_wrap",children:i?(0,l.jsx)(p.Z,{VideoClass:"tb_spt_video",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:o,size:130,muted:!0,autoPlay:i,handleVideoEnded:()=>{}}):(0,l.jsx)(_.Z,{ImageClass:"tb_spt_image",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:o,size:130})})};var u=s(23450),m=s(16243),b=s(2703);const w=(t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,b.ok)(e)):s,g=(t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,b.ok)(e)):s,v=t=>{let{itemData:e,ThemeRule:s}=t;const o={color:s.fontColor},a=e.network.id,i=3===a||10===a?"like":"heart";return(0,l.jsx)(l.Fragment,{children:12!==a&&15!==a&&20!==a&&21!==a?(0,l.jsxs)("div",{className:"tb_spt_social_action__",children:[(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsxs)("a",{href:w(a,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-".concat(i),style:o,children:" "}),e.like_count>0?(0,l.jsx)("div",{className:"tb_spt_social_action_counts__",style:o,children:e.like_count}):""]})}),(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsxs)("a",{href:g(a,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-comment",style:o,children:" "}),e.like_count>0?(0,l.jsx)("div",{className:"tb_spt_social_action_counts__",style:o,children:e.like_count}):""]})}),1===a?(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,b.ok)(e.postId)),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-retweet",style:o,children:" "})})}):""]}):""})},x=t=>{let{itemData:e,personalization:s,ThemeRule:o,itemIndex:a,clickToShowPopUp:i,wallID:n,ownerId:r,onClickToCTA:_,wall:p}=t;const b={backgroundColor:o.cardColor},w=2===e.type||3===e.type||4===e.type||5===e.type,g=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),x={justifyContent:e.share.status?"":"flex-end",borderTop:"1px solid ".concat(o.fontColor)};return(0,l.jsx)("div",{id:"tb-spt-post-".concat(e.id),className:"tb_spt_post_wrapper","tb-network":e.network.id,children:(0,l.jsx)("div",{className:"tb_spt_post_in",onClick:i(a,e),children:(0,l.jsxs)("div",{className:"tb_spt_post_media_wrapp",children:[w?(0,l.jsx)(h,{itemData:e,wallID:n,wall:p,ownerId:r}):"",(0,l.jsx)("div",{className:"tb_spt_post_details",children:(0,l.jsxs)("div",{className:"tb_spt_contant_wrapper",children:[(0,l.jsx)(c,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:o,personalization:s,ThemeRule:o}),(0,l.jsxs)("div",{className:"tb_spt_content_wrap",children:[(0,l.jsxs)("div",{className:"tb_spt_content_wrap_in",children:[o.hideContent&&1!=e.type?"":(0,l.jsx)(u.default,{contentClass:"tb_spt_content",item:e,content:e.content,font:o,ThemeRule:o,personalization:s}),g?(0,l.jsxs)("div",{className:"tb_spt_post_cta",children:[(0,l.jsx)(m.Z,{ctaClass:"tb_spt_post_cta_btn",cta:e.cta,contentTitle:e.contentTitle,item:e,onClickToCTA:_})," "]}):""]}),(0,l.jsxs)("div",{className:"tb_spt_social_actions_container",style:x,children:[e.share.status?(0,l.jsx)(d,{share:e.share,shareColor:o.fontColor}):"",o.socialAction?(0,l.jsx)(v,{itemData:e,ThemeRule:o}):""]})]})]})}),(0,l.jsx)("div",{className:"tb_spt_post_overlay",style:b,children:(0,l.jsx)("div",{})})]})})})};s(59169);class j extends o.PureComponent{componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:o,onClickToCTA:i}=this.props,n={type:"loop",rewind:!0,speed:500,gap:0,autoplay:!!s.ThemeRule.slidePost,padding:0,pagination:!1,arrows:!0};return(0,l.jsx)("div",{className:"tb_spt_post_container",children:(0,l.jsxs)(a.tv,{hasTrack:!1,className:"tb_spt_post_slider",options:n,ref:this.myRef,children:[(0,l.jsx)(a.Gj,{children:t&&t.length>0&&t.map(((t,n)=>{const r=e[t];return(0,l.jsx)(a.jw,{style:{margin:0,padding:0},children:(0,l.jsx)(x,{ownerId:s.Wall.owner,itemData:r,itemIndex:n,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:o,onClickToCTA:i,wall:s},n)})}))}),(0,l.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_spt_arrow_wrapper_",children:[(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_spt_arrow tb_spt_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next tb_spt_arrow tb_spt_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,l.jsx)("div",{})})]})]})})}}},80413:(t,e,s)=>{"use strict";e.Ad=void 0;var o=s(7782);var a=s(94590);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var i=s(52047)},7782:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=s(7782);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(o.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),s({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{i&&window.clearTimeout(i),a("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(i=window.setTimeout((()=>a(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},52047:function(t,e,s){"use strict";var o=this&&this.__awaiter||function(t,e,s,o){return new(s||(s=Promise))((function(a,i){function n(t){try{l(o.next(t))}catch(e){i(e)}}function r(t){try{l(o.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,r)}l((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(72791),i=s(94590);e.useImageSize=(t,e)=>{const[s,n]=(0,a.useState)(null),[r,l]=(0,a.useState)(!1),[c,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:s,height:o}=yield(0,i.getImageSize)(t,e);n({width:s,height:o})}catch(c){d(c.toString())}finally{l(!1)}}))}),[t,e]),[s,{loading:r,error:c}]}},59169:()=>{},50247:()=>{}}]);
//# sourceMappingURL=5542.26b7a7f4.chunk.js.map