(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7694,8342,9239,5790],{89239:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=s(47313),o=(s(17739),s(98935)),i=s(46417);class n extends a.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,i.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,i.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),srcSet:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:e.name,width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,i.jsx)(o.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},98935:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(47313),o=s(46417);const i=e=>{let{username:t,network:s,authorClass:a,errorPic:i}=e;const n="#ffffff"==s.color?"#000":s.color;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45,"aria-label":"author image"})},n=(0,a.memo)(i)},64442:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var a=s(47313),o=s(2406),i=s(20510),n=s.n(i),r=s(43635),l=s(35179),c=(s(98511),s(46417));const d=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends a.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,o.Ad)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:s,isCover:a,controls:o,autoPlay:i,handleVideoEnded:h,muted:p}=this.props,{paddingBottom:u,videoLoaded:_,isVisible:m}=this.state,b={paddingBottom:"".concat(u,"%")},v=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,c.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:b,ref:this.videoRef,children:(0,c.jsx)(n(),{className:"".concat(e," video").concat(t.id),url:d(v,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":s,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,r.ib)(e,t.id)},autoPlay:i,muted:p,volume:i?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?m:i,height:"100%",width:"100%",controls:o||!1,style:{backgroundImage:"url(".concat(t.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},25810:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(47313),o=s(35179),i=s(46417);const n=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),d=o.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,i.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===e||void 0===e?void 0:e.name)||""),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:e,networkClass:t})]})}}},62245:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(47313),o=s(16390),i=s(17739),n=(s(35179),s(25810),s(46417));const r=a.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class l extends a.PureComponent{constructor(e){super(e),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var s,a;const e=(null===(s=this.contentRef)||void 0===s||null===(a=s.current)||void 0===a?void 0:a.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{contentClass:e,content:t,ThemeRule:s,font:l,personalization:c,item:d,contentTitle:h,readMore:p,maxLength:u,textAlign:_,maxLines:m,isReadMore:b}=this.props,v={WebkitLineClamp:m,textAlign:s.textAlignment};_||s.textAlignment;let w=20==d.network.id?t:(0,i.Fx)(t);12==d.network.id&&(w=(0,o.ZP)(w));const g="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),x="".concat(e," ").concat(b?"":g," tb-cTBfont-").concat(s.font_varient);return(0,n.jsxs)("div",{className:x,ref:this.contentRef,style:v,children:[h?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(h)}):null,(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{data:d,content:w,Personalization:c})]})]})}}},5744:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(47313),o=s(43635),i=s(35179),n=s(46417);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:n}=this.props;t.stopPropagation(),i.ZQ||(0,o.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",e.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",e.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},11502:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(17739),o=s(46417);const i=e=>{let{ThemeRule:t,btnClass:s}=e;const i={fontFamily:t.css_font};return(0,o.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,o.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,a.mD)(4)||(0,a.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:i,children:t.shoppingText})})}},55790:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(47313),o=s(17739),i=s(46417);const n=e=>{const{postTime:t,timeClass:s}=e;return(0,i.jsx)("div",{className:s,role:"status","aria-label":"post timestamp ".concat((0,o.Sy)(t)),children:(0,o.Sy)(t)})},r=(0,a.memo)(n)},9105:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>T});var a=s(47313),o=s(43411),i=s(11774),n=s(89239),r=s(55790),l=s(25810),c=s(35179),d=s(46417);const h=e=>{let{author:t,personalization:s,postTime:a,network:o,ThemeRule:i,font:h}=e;const p=!(!s.postAuthor||t.isInstaUser),u=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,d.jsxs)("div",{className:"tb_hs_author_wrapper ".concat(c.ZQ?"tb_hs_author_wrapper_top":""),"aria-label":"Author details","aria-roledescription":"post author details",children:[(0,d.jsxs)("div",{className:"tb_hs_author",children:[p?(0,d.jsx)(n.default,{network:o,author:t,authorClass:"tb_hs_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_hs_author_info",children:[p?(0,d.jsx)("div",{className:"tb_hs_authorname",children:t.name}):"",(0,d.jsxs)("div",{className:"tb_hs_post_info",children:[p?(0,d.jsx)("div",{className:"tb_hs_username",children:"@".concat(t.username)}):"",u?(0,d.jsx)("div",{className:"tb_hs_seprator",children:" "}):"",s.postTime?(0,d.jsx)(r.default,{postTime:a,timeClass:"tb_hs_time tb-cTBfont-".concat(i.font_varient),authorColor:i.authorColor}):""]})]})]}),c.T_?null:(0,d.jsx)("div",{className:"tb_hs_social_",children:(0,d.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:o,isDefault:1===i.iconType,ThemeRule:i})})]})};var p=s(81349),u=s(84261),_=s(64442);const m=e=>{let{itemData:t,wallID:s,ThemeID:a,ThemeRule:o,ownerId:i,wall:n}=e;const r=!(!c.ZQ||3!==t.type&&5!==t.type||n.Personalization.mobilePopup||n.Personalization.postFeatured),l=(c.ZQ||c.Jx)&&n.ThemeRule.aspectImageRatio?n.ThemeRule.aspectImageRatio:100,h=(3===t.type||5===t.type)&&28!==t.network.id&&1==n.ThemeRule.autoPlay,m=!c.ig||!t.hotspot;return(0,d.jsxs)("div",{className:"tb_hs_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[r?null:(0,d.jsx)(p.Z,{itemData:t,IconClass:"tb_hs_media_icon",show:m}),h?(0,d.jsx)(_.Z,{VideoClass:"tb_hs_video",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:l,isCover:!0,muted:!0,autoPlay:h,handleVideoEnded:()=>{}}):(0,d.jsx)(u.default,{ImageClass:"tb_hs_image",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:l,ThemeRule:o,hotspot:!0})]})};var b=s(62245),v=s(17739),w=s(11502),g=s(5744);const x=c.ZQ?null:200,f=e=>{let{itemData:t,personalization:s,ThemeRule:o,clickToShowPopUp:i,itemIndex:n,wallID:r,ownerId:p,postSizeInPx:u,wall:_,isPadding:f,isRowCount:j,onClickPopUpSlider:k}=e;const T=(0,a.useRef)(null),P=!!(t.ugc_products&&t.ugc_products.length>0),C=!(!P||0!==t.hotspot),y=(""===o.postHover||o.postHover,1!==t.type),R=s.trimcontent?(0,v.Sv)(t.content,x):t.content,I=u.adjustWidth<250,D=!(!t.hotspot||!P),N=(!c.ig||t.hotspot,!o.hideContent),S=C?0==N:1!=o.hideContent,z=!!C&&0!=N,Z=0==o.postHover&&c.ig?"light":"dark",U=c.Jx?"tb_hs_color_overlay":"tb_hs_post_overlay-"+Z,A={backgroundColor:c.Jx?o.cardColor:""};return(0,a.useEffect)((()=>{c.ig&&(0,v.YN)(T)}),[]),(0,a.useEffect)((()=>{t.isPopUp&&k(n,t)}),[n,t.isPopUp,t]),(0,d.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_hs_post_wrapper".concat(I?" tb_hs_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":C?1:D?2:0,style:{padding:s.padding/2},ref:T,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,role:"article","aria-label":"Post ".concat(parseInt(n)+1,",").concat(R),children:(0,d.jsx)("div",{className:"tb_hs_post_in".concat(c.ig?" tb_hs_post_ani":""),onClick:i(n,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,d.jsxs)("div",{className:"tb_hs_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[y?(0,d.jsx)(m,{itemData:t,wallID:r,wall:_,ownerId:p},t.id):"",D?null:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"tb_hs_post_details",children:[(0,d.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[c.ig?(0,d.jsx)("div",{className:"tb_hs_social_",children:(0,d.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null,z?(0,d.jsx)(w.Z,{ThemeRule:o,btnClass:"tb_hs_btn_wrap"}):null,S||1==t.type?(0,d.jsx)(b.default,{contentClass:"tb_hs_content",item:t,content:R,font:o,ThemeRule:o,personalization:s,contentTitle:t.contentTitle,isNetwork:!0}):null]}),c.ig?null:(0,d.jsx)(h,{ownerId:p,postTime:t.createdAt,author:t.author,network:t.network,font:o,personalization:s,ThemeRule:o}),t.share.status?(0,d.jsx)(g.Z,{share:t.share,shareClass:"tb_hs_share_container ".concat(c.ZQ?"tb_hs_share_container_te":""),item:t,wallID:r,ownerId:p}):null]}),D?null:(0,d.jsx)("div",{className:"tb_hs_post_overlay ".concat(U),style:A,children:(0,d.jsx)("div",{})}),c.ZQ?(0,d.jsx)("div",{className:"tb_hs_social_bottom_",children:(0,d.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null]})]})})})};var j=s(43635);s(37210);class k extends a.PureComponent{constructor(e){super(e),this.handleKeyPress=e=>{try{const{wall:s}=this.props;if(1==s.ThemeRule.slidePost){if(!["INPUT","TEXTAREA"].includes(e.target.tagName)&&"Space"===e.code){const{parentID:s}=this.props;e.preventDefault();var t=this.inputRefs[s].splide.Components.Autoplay;t.isPaused()?t.play():t.pause()}}}catch(s){}},this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:a,getDataNextSteps:o}=this.props;a&&o(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.autoScrollSlider=(e,t,s,a)=>{const{wall:o}=this.props;if(1==o.Personalization.autoScrollStatus||c.ig){const t=c.ZQ?e._o.perPage+e.index:e.index;e.length-t===(c.ZQ?1:e._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e,wall:t}=this.props;this.setState({postData:e}),window.addEventListener("keydown",this.handleKeyPress)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}render(){var e,t,s,a;const{postData:o,completeDataObject:n,wall:r,clickToShowPopUp:l,onClickToCTA:h,postSizeInPx:p,parentID:u,loaderData:_,onClickPopUpSlider:m}=this.props,b=u,v=r.ThemeRule.numberOfCoumn,w=r.ThemeRule.mobileColumn,g=r.ThemeRule.slidePost,x=r.ThemeRule.slideDuration,j=r.Personalization.autoScrollStatus,k=r.ThemeRule.multiRow&&0!==r.ThemeRule.multiRow?r.ThemeRule.multiRow:1;var T=[];let P=!0;const C=("tagembed"==(null===r||void 0===r||null===(e=r.User)||void 0===e?void 0:e.userDatabaseType)||c.ZQ||c.ig)&&void 0!==(null===(t=r.Personalization)||void 0===t?void 0:t.clonePost)&&0===r.Personalization.clonePost?{clones:0}:{};for(var y=0,R=o.length;y<R;)T.push(o.slice(y,y+=k));c.ig&&C&&0==Object.keys(C).length&&(16677==r.User.id?"product"===window.dataFilterType&&(P=!!(T&&T.length>=5)):T=T.length<12?Array(15-T.length).fill(T).flat():T);const I=1!=j?!(Object.keys(C).length>0)&&("tagembed"==(null===r||void 0===r||null===(s=r.User)||void 0===s?void 0:s.userDatabaseType)||c.ZQ?"slide":"loop"):c.ig?"slide":"loop",D={...C,type:1!==j&&I,rewind:!0,speed:1e3,interval:1===g?1e3*parseInt(x):5e3,perPage:v>0?v:"tagembed"==(null===r||void 0===r||null===(a=r.User)||void 0===a?void 0:a.userDatabaseType)||c.ZQ?3:6,perMove:1,gap:0,autoplay:1===g,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:w>0?w:1},767:{perPage:w>0?w:2},991:{perPage:w>0?w:3},1200:{perPage:v>0?v:4},1400:{perPage:v>0?v:5},1600:{perPage:v>0?v:c.ZQ?3:6}}};return(0,d.jsx)(d.Fragment,{children:""!=u?(0,d.jsx)("div",{className:"tb_hs_post_container",children:P?(0,d.jsxs)(i.tv,{hasTrack:!1,className:"tb_hs_post_slider",options:D,ref:e=>this.inputRefs[b]=e,onMove:this.autoScrollSlider,children:[(0,d.jsx)(i.Gj,{children:(r.ThemeRule.multiRow>1&&1!==T.length&&T.length%2!==0?T.pop():T)&&T&&T.length>0&&T.map(((e,t)=>(0,d.jsx)(i.jw,{className:"tb_".concat(t),idd:u,children:(0,d.jsx)("div",{className:"tb_hs_col_wrap",children:e.map(((e,t)=>{const s=n[e];return(0,d.jsx)(f,{parentID:u,ownerId:r.Wall.owner,wall:r,itemData:s,itemIndex:t,personalization:r.Personalization,ThemeRule:r.ThemeRule,clickToShowPopUp:l,wallID:r.Wall.id,onClickToCTA:h,postSizeInPx:p,onClickPopUpSlider:m},t)}))})},"tb_".concat(t,"_").concat(t))))}),(0,d.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,d.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,d.jsx)("div",{})}),(0,d.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt ".concat(_.isShowMoreLoading?"tb_a_spinner":""),onClick:c.ig||c.ZQ?e=>this.requestData():null,role:"button","aria-label":"Go to next slide",children:(0,d.jsx)("div",{})})]})]}):null}):null})}}const T=(0,o.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,s,a,o,i,n,r,l)=>e((0,j.Sx)(t,s,a,o,i,n,r,l))})))(k)},37210:()=>{},50247:()=>{}}]);