(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5016,1088,7033,7234,7668],{5342:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>C});var c=s(72791),i=s(39852),a=s.n(i),o=s(46535),n=s(97234),l=s(27668),r=s(70757),d=s(80184);const _=t=>{let{author:e,personalization:s,postTime:c,network:i,ThemeRule:a,font:o}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!s.postAuthor||e.isInstaUser),b=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,d.jsxs)("div",{className:"tb_cc_author_wrapper",children:[(0,d.jsxs)("div",{className:"tb_cc_author",children:[h?(0,d.jsx)(n.default,{author:e,network:i,authorClass:"tb_cc_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_cc_author_info",children:[h?(0,d.jsx)("div",{className:"tb_cc_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_cc_post_info",children:[h?(0,d.jsx)("div",{className:"tb_cc_username",children:_}):"",b?(0,d.jsx)("div",{className:"tb_cc_seprator",children:" "}):"",s.postTime?(0,d.jsx)(l.default,{postTime:c,timeClass:"tb_cc_time tb-cTBfont-".concat(a.font_varient),authorColor:a.authorColor}):""]})]})]}),(0,d.jsx)("div",{className:"tb_cc_social_",children:(0,d.jsx)(r.default,{networkClass:"tb_cc_social_ico",network:i,ThemeRule:a,isDefault:1===a.iconType})})]})};var h=s(37989),b=s(40115),p=s(98270);const m=t=>{let{itemData:e,wallID:s,ownerId:c,wall:i}=t;const a=!(!o.ZQ||3!==e.type&&5!==e.type||i.Personalization.mobilePopup||i.Personalization.postFeatured),n=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay,l=!!o.ZQ&&(!!i.ThemeRule.aspectImageRatio&&i.ThemeRule.aspectImageRatio);return(0,d.jsxs)("div",{className:"tb_cc_media_wrap",children:[a?null:(0,d.jsx)(h.Z,{itemData:e,IconClass:"tb_cc_media_icon"}),n||a?(0,d.jsx)(p.Z,{VideoClass:"tb_cc_video",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:c,size:l,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,d.jsx)(b.Z,{ImageClass:"tb_cc_image",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:c,size:l,ThemeRule:i.ThemeRule})]})};var u=s(23450),x=s(16243),v=s(19036),j=s(2703);const N=t=>{let{itemData:e,ThemeRule:s}=t;const c=(t,e)=>{t.stopPropagation(),e()},i={color:s.fontColor},a=e.network.id,n=3===a||10===a?"like":"heart",l=1===a?"reply":"comment",r=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(a)),_=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(a),h=![29,11,19,23,26,29,30].includes(a),b=![12,15,20,21,29,11,19,23,26,29,30].includes(a);return(0,d.jsx)(d.Fragment,{children:(_||e.share.status)&&s.socialAction?(0,d.jsxs)("div",{className:"tb_cc_social_actions_ ".concat(r?"tb_cc_social_share_only__":"tb_cc_social_actions_only__"),style:s.socialAction&&b?null:{justifyContent:"flex-end"},children:[s.socialAction?(0,d.jsx)(d.Fragment,{children:b?(0,d.jsxs)(d.Fragment,{children:[_?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>c(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,j.ok)(e)):s)(a,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(n),style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:o.ZQ?e.like_count:"Like"})]})}):null,h?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>c(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,j.ok)(e)):s)(a,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(l),style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:o.ZQ?e.comment_count:1===a?"Reply":"Comment"})]})}):null,1===a?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>c(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat((0,j.ok)(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-retweet",style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:"Retweet"})]})}):"",r?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>c(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-eye",style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:"View"})]})}):""]}):""}):"",e.share.status?(0,d.jsxs)("div",{className:"tb_cc_action_counts_wrap".concat(s.socialAction?"":" tb_cc_action_share_wrap"),children:[(0,d.jsx)("div",{className:"tb_cc_action_ico tb__icon tb-share",style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_action_counts",style:i,children:"Share"}),(0,d.jsx)("div",{className:"tb_cc_share_wrapper_dropdown",children:(0,d.jsxs)("div",{className:"tb_cc_share_icon_list",children:[e.share.facebook&&(0,d.jsxs)("div",{onClick:t=>c(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_cc_share_list_in",children:[(0,d.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-facebook",children:" "}),(0,d.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,d.jsxs)("div",{onClick:t=>c(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_cc_share_list_in",children:[(0,d.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-twitter"}),(0,d.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,d.jsxs)("div",{onClick:t=>c(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_cc_share_list_in",children:[(0,d.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-linkedin",children:" "}),(0,d.jsx)("div",{className:"tb_cc_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})},g=o.ZQ?null:200,w=t=>{let{itemData:e,personalization:s,adjustWidth:c,ThemeRule:i,clickToShowPopUp:a,itemIndex:n,wallID:l,ownerId:r,onClickToCTA:h,wall:b}=t;const p=2===e.type||3===e.type||4===e.type||5===e.type,w=e.rating>0,k=e.rating>0?"tb_cc_rating_content":"tb_cc_content",f=o.ZQ&&(0,j.mD)(5)?"tb_cc_rating_content_review":null,y=1===e.type&&s.textDecorate?"tb_cc_text_decoration tb_cc_text_post":"",C=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),T=!!(C||i.socialAction||i.shareOption),I=s.trimcontent?(0,j.Sv)(e.content,g):e.content;return(0,d.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_cc_post_wrapper",style:{width:"".concat(c,"%"),padding:s.padding/2},"tb-network":e.network.icon,children:(0,d.jsxs)("div",{className:"tb_cc_post_in",onClick:a(n,e),children:[o.ZQ?p?(0,d.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,d.jsx)(m,{itemData:e,wallID:l,wall:b,ownerId:r},"img".concat(n,"_").concat(e.id))}):"":null,(0,d.jsxs)("div",{className:"tb_cc_contant_wrapper",children:[(0,d.jsx)(_,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:s,ThemeRule:i}),w&&(0,j.mD)(5)?(0,d.jsxs)("div",{className:"tb_cc_rating__",children:[(0,d.jsx)(v.Z,{rating:e.rating,network:e.network})," "]}):"",i.hideContent&&1!=e.type?"":(0,d.jsx)(u.default,{item:e,contentClass:"".concat(k," ").concat(f," ").concat(y),content:I,font:i,ThemeRule:i,personalization:s,contentTitle:e.contentTitle}),w&&!(0,j.mD)(5)?(0,d.jsxs)("div",{className:"tb_cc_rating__",children:[(0,d.jsx)(v.Z,{rating:e.rating,network:e.network})," "]}):""]}),o.ZQ?null:p?(0,d.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,d.jsx)(m,{itemData:e,wallID:l,wall:b,ownerId:r},"img".concat(n,"_").concat(e.id))}):"",T?(0,d.jsxs)("div",{className:"tb_cc_post_actions",children:[C?(0,d.jsxs)("div",{className:"tb_cc_post_cta",children:[(0,d.jsx)(x.Z,{ctaClass:"tb_cc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",T?(0,d.jsx)(N,{itemData:e,ThemeRule:i}):""]}):""]})})};var k=s(77581),f=s(11225);class y extends c.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_cc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:c,languageSetting:i,clickToShowPopUp:o,onClickToCTA:n}=this.props,{loadData:l}=this.state;return(0,d.jsx)(a(),{className:"tb_cc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:l?t&&t.length>0&&t.map(((a,l)=>{const r=e[a];return(0,d.jsx)(w,{ownerId:c.Wall.owner,itemData:r,itemIndex:l,adjustWidth:1==r.highlight?2*s:s,personalization:c.Personalization,ThemeRule:c.ThemeRule,completeDataObject:e,postData:t,languageSetting:i,wallID:c.Wall.id,clickToShowPopUp:o,onClickToCTA:n,wall:c},"cls_crd_".concat(l,"_").concat(a.id))})):null})}}const C=(0,k.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,f.B0)(e))})))(y)},97234:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var c=s(72791),i=s(2703),a=s(14496),o=s(80184);class n extends c.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,o.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(a.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});s(72791);var c=s(80184);const i=t=>{let{username:e,network:s,authorClass:i}=t;return(0,c.jsx)("img",{className:"".concat(i,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var c=s(72791),i=s(80184);class a extends c.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:c,item:a}=this.props,o=!(!s||1!==s.status);return(0,i.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),c(a),window.open("".concat(o?s.url:t.url),"_blank")},children:[" ",o?s.text:t.text]})}}const o=a},87641:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var c=s(72791),i=s(77581),a=s(89057),o=s(18947),n=s(80184);const l=(0,a.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),r=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,'</div>\n  <div class="tb_p_tooltip_price tb_price_disabled">').concat(t.price_currency_symbol).concat(t.product_discount,'</div>\n  <div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(t.product_price,"</div>\n  </a>");class d extends c.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,c=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return c.status?(0,n.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>(0,n.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,n.jsx)("div",{className:"tb_hotspot__ ".concat(1==!c.type?"tb_hotspot_ani__":""),children:e+1}),(0,n.jsx)(l,{children:(0,n.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id),clickable:!0,html:r(t.UgcProduct)})})]},e)))}):null}}const _=(0,i.$j)((t=>({appData:t.appData})))(d)},40115:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var c=s(72791),i=s(11225),a=s(87641),o=s(80413),n=s(2703),l=s(70188),r=s(80184);class d extends c.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:s}=this.state;if(e&&Object.keys(e).length>0&&[4,2,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(c){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:s,themeID:c,ownerId:o,hotspot:d}=this.props,{imgUrl:_,paddingBottom:h}=this.state,b={paddingBottom:"".concat(h,"%")},p={backgroundImage:"url(".concat(_,")")},m=!!(e.hotspot&&e.ugc_products.length>0&&d);return(0,r.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,children:[m?(0,r.jsx)("div",{className:"tb_blur_bg_",style:p}):null,(0,r.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:m?"":"100%"},children:[m?(0,r.jsx)(a.Z,{product:e.ugc_products}):null,(0,r.jsx)("img",{className:"".concat(t),role:"img",src:_,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":c,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(l.do,"/media/images/no-image.svg"),(0,i.ht)(t)},alt:(0,n.P)(_)})]})]})}}},98270:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var c=s(72791),i=s(80413),a=s(96710),o=s.n(a),n=s(11225),l=s(80184);const r=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class d extends c.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:s,isCover:c,controls:i,autoPlay:a,handleVideoEnded:d,muted:_}=this.props,{paddingBottom:h,videoLoaded:b}=this.state,p={paddingBottom:"".concat(h,"%")};return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:p,children:(0,l.jsx)(o(),{className:"".concat(t," video").concat(e.id),url:r(e.mediaUrl,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!a,onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:a,muted:_,volume:a?1:0,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:a,height:"100%",width:"100%",controls:i,style:{backgroundImage:b?"":"url(".concat(e.postFileNew,")"),backgroundSize:c?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:d||null})})}}},37989:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});s(72791);var c=s(46535),i=s(41088),a=s(80184);const o=t=>{const{itemData:e,IconClass:s,network:o,video:n,multiple:l,shoppable:r,show:d}=t,_=3===e.type||5===e.type,h=7===e.network.id,b=!!(e.imageList&&e.imageList.length>0),p=1===e.isAudio,m=!!(e.ugc_products&&e.ugc_products.length>0),u=(0,a.jsx)(i.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),x=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,a.jsx)("div",{})}),v=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,a.jsx)("div",{})}),j=(0,a.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,a.jsx)("div",{})}),N=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,a.jsx)("div",{})}),g=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,a.jsx)("div",{})});return(b||_)&&d?(0,a.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[m?N:"",b?x:"",_&&!h&&c.ZQ?g:"",_?h?u:p?v:c.ZQ?g:j:""]}):null}},41088:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var c=s(72791),i=s(46535),a=s(80184);const o=c.memo((t=>{let{network:e,networkClass:s}=t;switch(e.id){case 1:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-twitter")});case 2:case 18:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-instagram-default"),children:(0,a.jsx)("div",{})});case 3:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-facebook"),children:(0,a.jsx)("div",{})});case 4:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-google-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})})]});case 5:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-pinterest"),children:(0,a.jsx)("div",{})});case 6:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-flickr-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 7:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-youtube-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 8:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-vimeo"),children:(0,a.jsx)("div",{})});case 10:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-linkedin"),children:(0,a.jsx)("div",{})});case 11:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-tumblr"),children:(0,a.jsx)("div",{})});case 12:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-rss"),children:(0,a.jsx)("div",{})});case 15:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-workplace"),children:(0,a.jsx)("div",{})});case 19:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-yelp"),children:(0,a.jsx)("div",{})});case 20:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-slack-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,a.jsx)("div",{})})]});case 21:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-yammer"),children:(0,a.jsx)("div",{})});case 23:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-airbnb"),children:(0,a.jsx)("div",{})});case 25:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-soundcloud"),children:(0,a.jsx)("div",{})});case 26:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-giphy-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 28:return i.ZQ?(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-capterra-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 29:return i.ZQ?(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-etsy"),children:(0,a.jsx)("div",{})}):(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-onsite-upload-default"),children:(0,a.jsx)("div",{})});case 30:case 32:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-vk"),children:(0,a.jsx)("div",{})});case 31:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 33:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-trustpilot-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 34:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-amazon-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 35:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-tripadvisor"),children:(0,a.jsx)("div",{})});case 36:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-tagembed-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})})]});case 37:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-aliexpress-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})})]});default:return""}}));class n extends c.PureComponent{render(){return(0,a.jsx)(o,{...this.props})}}},70757:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var c=s(72791),i=s(46535),a=s(2703),o=s(80184);const n=c.lazy((()=>s.e(1088).then(s.bind(s,41088))));class l extends c.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:l}=this.props,r=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return r?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:(0,a.mD)(59)?null:s.iconColor},children:(0,o.jsx)("div",{})}):(0,o.jsxs)(c.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},23450:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var c=s(72791),i=s(34867),a=s(2703),o=(s(46535),s(70757),s(80184));const n=c.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class l extends c.PureComponent{constructor(t){super(t),this.toggleExpanded=t=>{this.setState({expanded:!this.state.expanded}),t.stopPropagation()},this.state={expanded:!1}}render(){const{contentClass:t,content:e,ThemeRule:s,font:l,personalization:r,item:d,contentTitle:_,readMore:h,maxLength:b,textAlign:p,isNetwork:m}=this.props,{expanded:u}=this.state,x={textAlign:p||s.textAlignment};let v=20==d.network.id?e:(0,a.Fx)(e);12==d.network.id&&(v=(0,i.ZP)(v));const j=h?u?v:v.slice(0,b):v,N="".concat(t).concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):"").concat(s.font_varient?" tb-cTBfont-".concat(s.font_varient):"");return(0,o.jsxs)("div",{className:N,style:x,children:[_?(0,o.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(_)}):null,(0,o.jsxs)(c.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{data:d,content:j,Personalization:r})]}),h&&v.length>b&&(0,o.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:u?"...Read Less...":"...Read More..."})]})}}},19036:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var c=s(72791),i=s(46535),a=s(80184);const o=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:c,color:o}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,a.jsx)("div",{className:c,style:{color:o},"tb-network":e.id,children:(0,a.jsx)("div",{})})},n=t=>{let{ThemeID:e}=t;const{className:s,color:c}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,a.jsx)("div",{className:s,style:{color:c},"tb-network":e})};class l extends c.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,a.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,c)=>s?(0,a.jsx)(n,{ThemeID:s},c):(0,a.jsx)(o,{network:e},c))):null})}}},27668:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var c=s(72791),i=s(2703),a=s(80184);const o=t=>{const{postTime:e,timeClass:s}=t,o=(0,c.useMemo)((()=>(0,i.Sy)(e)),[]);return(0,a.jsx)("div",{className:s,children:o})},n=(0,c.memo)(o)},50247:()=>{}}]);
//# sourceMappingURL=5016.3dd6f767.chunk.js.map