"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9171,7234,7668],{97234:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});var a=o(72791),s=o(2703),i=o(14496),n=o(80184);class r extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o}=this.props;return(0,n.jsx)("div",{className:e,style:{overflow:4==o.id?"visible":""},children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,s.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color})},Math.random())}}},14496:(t,e,o)=>{o.d(e,{Z:()=>s});o(72791);var a=o(80184);const s=t=>{let{username:e,network:o,authorClass:s}=t;return(0,a.jsx)("img",{className:"".concat(s,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":o.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,o)=>{o.d(e,{Z:()=>n});var a=o(72791),s=o(80184);class i extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:a,item:i}=this.props,n=!(!o||1!==o.status);return(0,s.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),a(i),window.open("".concat(n?o.url:t.url),"_blank")},children:[" ",n?o.text:t.text]})}}const n=i},87641:(t,e,o)=>{o.d(e,{Z:()=>l});var a=o(72791),s=o(89057),i=o(18947),n=o(80184);const r=(0,s.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_pro_title">').concat(t.product_title,'</div>\n  <div class="tb_pro_price tb_price_disabled">').concat(t.price_currency_symbol).concat(t.product_discount,'</div>\n  <div class="tb_pro_price">').concat(t.price_currency_symbol).concat(t.product_price,"</div>\n  </a>"),l=t=>{let{product:e,hotspotStyle:o}=t;const[s,l]=(0,a.useState)(null);return o?(0,n.jsx)("div",{className:"tb_hotspot_wrap",children:e.map(((t,e)=>(0,n.jsxs)("a",{href:t.product_url,target:"_blank",id:"tb_hotspot-".concat(t.id),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>l(e),onMouseOut:t=>l(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,n.jsx)("div",{className:"tb_hotspot__ ".concat(o.hotspot_type?"":"tb_hotspot_ani__"),style:{backgroundColor:o.hotspot_color,color:o.hotspot_type_color},children:o.hotspot_type?e+1:""}),(0,n.jsx)(r,{children:(0,n.jsx)(i.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id),clickable:!0,html:d(t.UgcProduct)})})]},e)))}):null}},40115:(t,e,o)=>{o.d(e,{Z:()=>c});var a=o(72791),s=o(11225),i=o(87641),n=o(80413),r=o(2703),d=o(70188),l=o(80184);class c extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:o}=this.state;if(e&&Object.keys(e).length>0&&[4,2,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(a){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:o,themeID:a,ownerId:n,hotspot:c}=this.props,{imgUrl:p,paddingBottom:h}=this.state,u={paddingBottom:"".concat(h,"%")},m={backgroundImage:"url(".concat(p,")")},_=!!(e.hotspot&&e.ugc_products.length>0&&c);return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:u,children:[_?(0,l.jsx)("div",{className:"tb_blur_bg_",style:m}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:_?"":"100%"},children:[_?(0,l.jsx)(i.Z,{product:e.ugc_products,hotspotStyle:e.ugc_personalizaion.UgcSetting}):null,(0,l.jsx)("img",{className:"".concat(t),role:"img",src:p,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":o,"data-owner-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(d.do,"/media/images/no-image.svg"),(0,s.ht)(t)},alt:(0,r.P)(p)})]})]})}}},98270:(t,e,o)=>{o.d(e,{Z:()=>c});var a=o(72791),s=o(80413),i=o(96710),n=o.n(i),r=o(11225),d=o(80184);const l=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class c extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,s.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:o,isCover:a,controls:s,autoPlay:i,handleVideoEnded:c,muted:p}=this.props,{paddingBottom:h,videoLoaded:u}=this.state,m={paddingBottom:"".concat(h,"%")};return(0,d.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,children:(0,d.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:l(e.mediaUrl,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!i,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:i,muted:p,volume:i?1:0,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:i,height:"100%",width:"100%",controls:s,style:{backgroundImage:u?"":"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:c||null})})}}},70757:(t,e,o)=>{o.r(e),o.d(e,{default:()=>d});var a=o(72791),s=o(46535),i=o(2703),n=o(80184);const r=a.lazy((()=>o.e(1088).then(o.bind(o,41088))));class d extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:d}=this.props,l=!!d&&(7!==t.id&&4!==t.id&&36!==t.id),c=s.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(c.replace(/fa-/g,"")),style:{color:(0,i.mD)(59)?null:o.iconColor},children:(0,n.jsx)("div",{})}):(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{network:t,networkClass:e})]})}}},27668:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});var a=o(72791),s=o(2703),i=o(80184);const n=t=>{const{postTime:e,timeClass:o}=t,n=(0,a.useMemo)((()=>(0,s.Sy)(e)),[]);return(0,i.jsx)("div",{className:o,children:n})},r=(0,a.memo)(n)},59171:(t,e,o)=>{o.r(e),o.d(e,{default:()=>w});var a=o(72791),s=o(48282),i=o(77581),n=o(40115),r=o(98270),d=o(46535),l=o(80184);const c=t=>{let{itemData:e,wallID:o,ownerId:a,wall:s,autoVPlay:i,handleVideoEnded:c}=t;const p=!!(e.imageList&&e.imageList.length>0),h=(e.imageList&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_stt_multi_images_ico_bottom":"tb_stt_multi_images_ico",u=!(3!==e.type&&5!==e.type||28===e.network.id||1!=s.ThemeRule.autoPlay&&!d.ZQ);return(0,l.jsxs)("div",{className:"tb_stt_media_wrap",children:[p&&!d.ZQ?(0,l.jsx)("div",{className:"".concat(h," tb__icon tb-multiple"),children:" "}):"",u?(0,l.jsx)(r.Z,{VideoClass:"tb_stt_video",data:e,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:a,size:200,controls:!1,autoPlay:!(!d.ZQ||!i)||!!u&&i,handleVideoEnded:c,muted:!0}):(0,l.jsx)(n.Z,{ImageClass:"tb_stt_image",data:e,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:a,size:200})]})};var p=o(97234),h=o(70757);o(27668);const u=t=>{let{author:e,personalization:o,postTime:a,network:s,ThemeRule:i,font:n}=t;const r=e.username&&e.username.length>0?"@".concat(e.username):"",c={color:i.authorColor,fontFamily:i.css_font},u={color:i.authorColor,fontSize:i.fontSize,fontFamily:i.css_font},m=(i.authorColor,!(!o.postAuthor||e.isInstaUser));!o.postAuthor||o.postTime;return(0,l.jsxs)("div",{className:"tb_stt_content_wrap",children:[d.ZQ?null:(0,l.jsx)("div",{className:"tb_stt_author_img",children:m?(0,l.jsx)(p.default,{author:e,network:s,authorClass:"tb_stt_author_img_00"}):" "}),(0,l.jsxs)("div",{className:"tb_stt_author_info",children:[(0,l.jsx)(h.default,{networkClass:"tb_stt_social_ico",network:s,isDefault:1===i.iconType,ThemeRule:i}),(0,l.jsxs)("div",{className:"tb_stt_author_001",children:[0===i.hideContent?(0,l.jsx)("div",{className:"tb_stt_hashtag tb-cTBfont-".concat(i.font_varient),style:d.ZQ?null:u,children:r}):"",m?(0,l.jsx)("div",{className:"tb_stt_author_name",style:d.ZQ?null:c,children:e.name}):""]})]})]})};var m=o(16243);const _=t=>{let{itemData:e,personalization:o,adjustWidth:a,ThemeRule:s,wallID:i,ownerId:n,wall:r,onClickToCTA:p,autoPlay:h,handleVideoEnded:_}=t;const g={width:"".concat(a,"%")},w=2===e.type||3===e.type||4===e.type||5===e.type,b=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status);return(0,l.jsx)("div",{id:"tb-stt-post-".concat(e.id),className:"tb_stt_post_wrapper",style:g,"tb-network":e.network.icon,children:(0,l.jsxs)("div",{className:"tb_stt_card_wrapper",children:[w?(0,l.jsx)("div",{className:"tb_stt_media_img",children:(0,l.jsx)(c,{itemData:e,wallID:i,wall:r,ownerId:n,autoVPlay:h,handleVideoEnded:_})}):"",(0,l.jsx)("div",{className:"tb_stt_card_wrapper_00",children:(0,l.jsxs)("div",{className:"tb_stt_card_content_0",children:[b&&d.ZQ?(0,l.jsxs)("div",{className:"tb_stt_post_cta",children:[(0,l.jsx)(m.Z,{ctaClass:"tb_stt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:p})," "]}):"",(0,l.jsx)(u,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:o,ThemeRule:s})]})})]})})};o(59169);class g extends a.PureComponent{constructor(t){super(t),this.state={arrowWidth:0,currentIndex:0},this.onResponsiveCardItem=()=>{const t=document.querySelector(".splide__slide.is-active");if(t){const e=t.clientWidth+.1*t.clientWidth;this.setState({arrowWidth:e})}},this.handleVideoEnded=()=>{const{postData:t}=this.props,{currentIndex:e}=this.state,o=e+1;o<t.length&&this.secondaryRef.current&&this.secondaryRef.current&&this.secondaryRef.current.splide.go(o)},this.secondaryRef=a.createRef()}componentDidMount(){this.onResponsiveCardItem(),window.addEventListener("resize",(()=>this.onResponsiveCardItem())),setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t,completeDataObject:e,onClickPopUpSlider:o,wall:a}=this.props;this.secondaryRef.current&&this.secondaryRef.current.slides.length>0&&this.secondaryRef.current.slides.map(((s,i)=>{if(s.classList){const i=String(s.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var n=i[0];String(i[0]).includes("tb_")&&(n=String(i[0]).replace("tb_",""));const r=t.findIndex((t=>t==n));document.querySelector(".tb_stt_post_container #".concat(s.id)).addEventListener("click",(t=>{t.preventDefault();const s=e[n];56!=a.Personalization.widgetTheme&&d.ZQ||o(r,s)}))}}))}render(){const{completeDataObject:t,wall:e,onClickToCTA:o,modalPop:a}=this.props,{arrowWidth:i,currentIndex:n}=this.state;let r=this.props.postData;r&&r.length>0&&(r=1==r.length?[...r,...r,...r,...r]:2==r.length?[...r,...r]:this.props.postData);const c=e.ThemeRule.numberOfCoumn,p=e.ThemeRule.mobileColumn,h=e.ThemeRule.slidePost,u=e.ThemeRule.slideDuration,m=(e.Personalization.autoScrollStatus,{type:"loop",rewind:!1,speed:1e3,interval:1===h?1e3*parseInt(u):5e3,perPage:c>0?c:7,perMove:1,gap:0,cloneStatus:!1,autoplay:1===h,padding:"0",pagination:!1,arrows:!0,focus:"center",start:127183==e.Wall.owner?0:2,breakpoints:{560:{perPage:p>0?p:1,start:127183==e.Wall.owner?0:2},767:{perPage:p>0?p:3,start:127183==e.Wall.owner?0:2},991:{perPage:p>0?p:3,start:2},1200:{perPage:c>0?c:5,start:127183==e.Wall.owner?0:2},1400:{perPage:c>0?c:5,start:127183==e.Wall.owner?0:2},1600:{perPage:c>0?c:5,start:127183==e.Wall.owner?0:2}},updateOnMove:!0}),g=1===m.breakpoints[560].perPage?"tb_stt_center_mode560":"",w=1===m.breakpoints[767].perPage?"tb_stt_center_mode767":"",b=1===m.breakpoints[991].perPage?"tb_stt_center_mode991":"";if(d.ZQ&&1===h){var v=this.secondaryRef&&this.secondaryRef.current?this.secondaryRef.current.splide.Components.Autoplay:null;a.isShowPopUp&&v?v.pause():v&&v.play()}return(0,l.jsx)("div",{className:"tb_stt_post_container",children:(0,l.jsxs)(s.tv,{hasTrack:!1,className:"tb_stt_post_slider ".concat(d.ZQ?"tb_stt_triple_slider":""," ").concat(g," ").concat(w," ").concat(b),options:m,ref:this.secondaryRef,onActive:(t,e,o)=>this.setState({currentIndex:e.index}),children:[(0,l.jsx)(s.Gj,{children:r&&r.length>0&&r.map(((a,i)=>{const r=t[a];return(0,l.jsx)(s.jw,{style:{margin:0,padding:0},"data-index":i,className:"tb_".concat(r.id),children:(0,l.jsx)(_,{ownerId:e.Wall.owner,itemData:r,autoPlay:n==i,itemIndex:i,personalization:e.Personalization,ThemeRule:e.ThemeRule,wallID:e.Wall.id,onClickToCTA:o,wall:e,handleVideoEnded:this.handleVideoEnded})},i)}))}),(0,l.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow  tb_stt_arrow_left__",onClick:this.onUpdateData,style:{right:i},children:(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb__icon tb-arrow-left-alt",children:" "})}),(0,l.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow tb_stt_arrow_right__",style:{left:i},children:(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next tb__icon tb-arrow-right-alt",children:" "})})]})})}}const w=(0,i.$j)((t=>({modalPop:t.modalPop})))(g)},80413:(t,e,o)=>{e.Ad=void 0;var a=o(7782);var s=o(94590);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var i=o(52047)},7782:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=o(7782);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((o,s)=>{if("undefined"===typeof window)return s(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return s(a.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),o({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{i&&window.clearTimeout(i),s("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(i=window.setTimeout((()=>s(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},52047:function(t,e,o){var a=this&&this.__awaiter||function(t,e,o,a){return new(o||(o=Promise))((function(s,i){function n(t){try{d(a.next(t))}catch(e){i(e)}}function r(t){try{d(a.throw(t))}catch(e){i(e)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(n,r)}d((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const s=o(72791),i=o(94590);e.useImageSize=(t,e)=>{const[o,n]=(0,s.useState)(null),[r,d]=(0,s.useState)(!1),[l,c]=(0,s.useState)(null);return(0,s.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){d(!0),n(null);try{const{width:o,height:a}=yield(0,i.getImageSize)(t,e);n({width:o,height:a})}catch(l){c(l.toString())}finally{d(!1)}}))}),[t,e]),[o,{loading:r,error:l}]}},59169:()=>{}}]);
//# sourceMappingURL=9171.c4bcd2ca.chunk.js.map