(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3850,7033,7234,7668],{97234:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var o=s(72791),a=s(2703),i=s(14496),n=s(80184);class r extends o.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,n.jsx)("div",{className:t,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),alt:(0,a.P)(e.picture),width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});s(72791);var o=s(80184);const a=e=>{let{username:t,network:s,authorClass:a}=e;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:t,width:44,height:44})}},98270:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var o=s(72791),a=s(80413),i=s(96710),n=s.n(i),r=s(11225),l=s(46535),c=s(80184);const d=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends o.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,a.Ad)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:s,isCover:o,controls:a,autoPlay:i,handleVideoEnded:h,muted:p}=this.props,{paddingBottom:_,videoLoaded:u,isVisible:m}=this.state,b={paddingBottom:"".concat(_,"%")},w=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,c.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:b,ref:this.videoRef,children:(0,c.jsx)(n(),{className:"".concat(e," video").concat(t.id),url:d(w,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":s,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{muted:p}}},loop:!i,onError:e=>{t.stories&&0!=t.stories||(0,r.ib)(e,t.id)},autoPlay:i,muted:p,volume:i?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?m:i,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:u?"":"url(".concat(t.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},23450:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var o=s(72791),a=s(34867),i=s(2703),n=(s(46535),s(70757),s(80184));const r=o.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class l extends o.PureComponent{constructor(e){super(e),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{const e=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}),100)}render(){const{contentClass:e,content:t,ThemeRule:s,font:l,personalization:c,item:d,contentTitle:h,readMore:p,maxLength:_,textAlign:u,maxLines:m,isReadMore:b}=this.props,w={WebkitLineClamp:m,textAlign:s.textAlignment};u||s.textAlignment;let g=20==d.network.id?t:(0,i.Fx)(t);12==d.network.id&&(g=(0,a.ZP)(g));const v="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),x="".concat(e," ").concat(b?"":v," ").concat(s.font_varient?"tb-cTBfont-".concat(s.font_varient):"");return(0,n.jsxs)("div",{className:x,ref:this.contentRef,style:w,children:[h?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(h)}):null,(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{data:d,content:g,Personalization:c})]})]})}}},20169:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var o=s(72791),a=s(11225),i=s(46535),n=s(80184);class r extends o.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:o,ownerId:n}=this.props;t.stopPropagation(),i.ZQ||(0,a.S5)({type:2,action:2,wall:o,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",e.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",e.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},27668:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var o=s(72791),a=s(2703),i=s(80184);const n=e=>{const{postTime:t,timeClass:s}=e;return(0,i.jsx)("div",{className:s,children:(0,a.Sy)(t)})},r=(0,o.memo)(n)},65093:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>T});var o=s(72791),a=s(77581),i=s(48282),n=s(98529),r=s(97234),l=s(27668),c=s(70757),d=s(46535),h=s(80184);const p=e=>{let{author:t,personalization:s,postTime:o,network:a,ThemeRule:i,font:n}=e;const p=!(!s.postAuthor||t.isInstaUser),_=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,h.jsxs)("div",{className:"tb_hs_author_wrapper ".concat(d.ZQ?"tb_hs_author_wrapper_top":""),children:[(0,h.jsxs)("div",{className:"tb_hs_author",children:[p?(0,h.jsx)(r.default,{network:a,author:t,authorClass:"tb_hs_author_profile"}):"",(0,h.jsxs)("div",{className:"tb_hs_author_info",children:[p?(0,h.jsx)("div",{className:"tb_hs_authorname",children:t.name}):"",(0,h.jsxs)("div",{className:"tb_hs_post_info",children:[p?(0,h.jsx)("div",{className:"tb_hs_username",children:"@".concat(t.username)}):"",_?(0,h.jsx)("div",{className:"tb_hs_seprator",children:" "}):"",s.postTime?(0,h.jsx)(l.default,{postTime:o,timeClass:"tb_hs_time tb-cTBfont-".concat(i.font_varient),authorColor:i.authorColor}):""]})]})]}),d.ZQ?null:(0,h.jsx)("div",{className:"tb_hs_social_",children:(0,h.jsx)(c.default,{networkClass:"tb_hs_social__ico",network:a,isDefault:1===i.iconType,ThemeRule:i})})]})};var _=s(37989),u=s(40115),m=s(98270);const b=e=>{let{itemData:t,wallID:s,ThemeID:o,ThemeRule:a,ownerId:i,wall:n}=e;const r=!(!d.ZQ||3!==t.type&&5!==t.type||n.Personalization.mobilePopup||n.Personalization.postFeatured),l=d.ZQ?n.ThemeRule.aspectImageRatio?n.ThemeRule.aspectImageRatio:75:100,c=(3===t.type||5===t.type)&&28!==t.network.id&&1==n.ThemeRule.autoPlay,p=!d.ig||!t.hotspot;return(0,h.jsxs)("div",{className:"tb_hs_media_wrap",children:[r?null:(0,h.jsx)(_.Z,{itemData:t,IconClass:"tb_hs_media_icon",show:p}),c?(0,h.jsx)(m.Z,{VideoClass:"tb_hs_video",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:l,isCover:!0,muted:!0,autoPlay:c,handleVideoEnded:()=>{}}):(0,h.jsx)(u.default,{ImageClass:"tb_hs_image",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:l,ThemeRule:a,hotspot:!0})]})};var w=s(23450),g=s(2703),v=s(20672),x=s(20169);const f=d.ZQ?null:200,j=e=>{let{itemData:t,personalization:s,ThemeRule:o,clickToShowPopUp:a,itemIndex:i,wallID:n,ownerId:r,postSizeInPx:l,wall:_}=e;const u=!!(t.ugc_products&&t.ugc_products.length>0),m=!(!u||0!==t.hotspot),j=""===o.postHover||1!==o.postHover,k=(d.ig||(d.ZQ||o.cardColor),2===t.type||3===t.type||4===t.type||5===t.type),C=s.trimcontent?(0,g.Sv)(t.content,f):t.content,T=l.adjustWidth<250,y=!(!t.hotspot||!u),I=(!d.ig||t.hotspot,!o.hideContent),D=!m||0==I,P=!!m&&0!=I,R=(d.ig&&1==o.postHover||d.ZQ,1==o.postHover&&d.ig||d.ZQ?" tb_ht_post_overlay-dark":""),N=0==o.postHover&&d.ig?" tb_ht_post_overlay-light":"";return(0,h.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_hs_post_wrapper".concat(T?" tb_hs_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":m?1:y?2:0,style:{padding:s.padding/2},children:(0,h.jsx)("div",{className:"tb_hs_post_in".concat(d.ig?" tb_hs_post_ani":""),onClick:a(i,t),children:(0,h.jsxs)("div",{className:"tb_hs_post_media_wrapp",children:[k?(0,h.jsx)(b,{itemData:t,wallID:n,wall:_,ownerId:r}):"",y?null:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"tb_hs_post_details",children:[(0,h.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[d.ig?(0,h.jsx)("div",{className:"tb_hs_social_",children:(0,h.jsx)(c.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null,P?(0,h.jsx)(v.Z,{ThemeRule:o,btnClass:"tb_hs_btn_wrap"}):null,D||1==t.type?(0,h.jsx)(w.default,{contentClass:"tb_hs_content",item:t,content:C,font:o,ThemeRule:o,personalization:s,contentTitle:t.contentTitle,isNetwork:!0}):null]}),d.ig?null:(0,h.jsx)(p,{ownerId:r,postTime:t.createdAt,author:t.author,network:t.network,font:o,personalization:s,ThemeRule:o}),t.share.status?(0,h.jsx)(x.Z,{share:t.share,shareClass:"tb_hs_share_container ".concat(d.ZQ?"tb_hs_share_container_te":""),item:t,wallID:n,ownerId:r}):null]}),y&&d.ig?null:(0,h.jsx)("div",{className:"tb_hs_post_overlay".concat(R).concat(N),style:{backgroundColor:d.Jx?o.cardColor:null},children:(0,h.jsx)("div",{})}),d.ZQ?(0,h.jsx)("div",{className:"tb_hs_social_bottom_",children:(0,h.jsx)(c.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null]})]})})})};var k=s(11225);s(59169);class C extends o.PureComponent{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:o,getDataNextSteps:a}=this.props;o&&a(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.autoScrollSlider=(e,t,s,o)=>{const{wall:a}=this.props;if(1==a.Personalization.autoScrollStatus||d.ig){const t=d.ZQ?e._o.perPage+e.index:e.index;e.length-t===(d.ZQ?1:e._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e}=this.props;this.setState({postData:e})}render(){var e;const{postData:t,completeDataObject:s,wall:o,clickToShowPopUp:a,onClickToCTA:r,postSizeInPx:l,parentID:c,keyRender:p,loaderData:_}=this.props,u=c,m=o.ThemeRule.numberOfCoumn,b=o.ThemeRule.mobileColumn,w=o.ThemeRule.slidePost,g=o.ThemeRule.slideDuration,v=o.Personalization.autoScrollStatus,x=o.ThemeRule.multiRow;var f=t;let k=!0;const C=(d.ZQ||d.ig)&&void 0!==(null===(e=o.Personalization)||void 0===e?void 0:e.clonePost)&&0===o.Personalization.clonePost?{clones:0}:{};d.ig&&C&&0==Object.keys(C).length?16677==o.User.id?"product"===window.dataFilterType&&(k=!!(f&&f.length>=5)):f=f.length<12?Array(15-f.length).fill(f).flat():f:f=t;const T=1!=v?!(Object.keys(C).length>0)&&(d.ig?"slide":"loop"):d.ig?"slide":"loop",y={...C,grid:{rows:x},type:1!==v&&T,rewind:!0,speed:1e3,interval:1===w?1e3*parseInt(g):5e3,perPage:m>0?m:d.ZQ?3:6,perMove:1,gap:0,autoplay:1===w,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:b>0?b:1},767:{perPage:b>0?b:2},991:{perPage:b>0?b:3},1200:{perPage:m>0?m:4},1400:{perPage:m>0?m:5},1600:{perPage:m>0?m:d.ZQ?3:6}}};return(0,h.jsx)(h.Fragment,{children:""!=c?(0,h.jsx)("div",{className:"tb_hs_post_container",children:k?(0,h.jsxs)(i.tv,{hasTrack:!1,className:"tb_hs_post_slider",options:y,extensions:{Grid:n.r},ref:e=>this.inputRefs[u]=e,onMove:this.autoScrollSlider,children:[(0,h.jsx)(i.Gj,{children:(o.ThemeRule.multiRow>1&&1!==f.length&&f.length%2!==0?f.pop():f)&&f&&f.length>0&&f.map(((e,t)=>{const n=s[e];return(0,h.jsx)(i.jw,{className:"tb_".concat(n.id),idd:c,children:(0,h.jsx)(j,{parentID:c,ownerId:o.Wall.owner,wall:o,itemData:n,itemIndex:t,personalization:o.Personalization,ThemeRule:o.ThemeRule,clickToShowPopUp:a,wallID:o.Wall.id,onClickToCTA:r,postSizeInPx:l})},"tb_".concat(n.id).concat(t))}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,h.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,h.jsx)("div",{})}),(0,h.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt ".concat(_.isShowMoreLoading?"tb_a_spinner":""),onClick:d.ig?e=>this.requestData():null,children:(0,h.jsx)("div",{})})]})]}):null}):null})}}const T=(0,a.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,s,o,a,i,n,r,l)=>e((0,k.Sx)(t,s,o,a,i,n,r,l))})))(C)},50247:()=>{}}]);
//# sourceMappingURL=3850.077953ec.chunk.js.map