(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2817,8342],{7138:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});var a=o(47313),s=o(46417);class i extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:a,item:i}=this.props,n=!(!o||1!==o.status);return(0,s.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),a(i),window.open("".concat(n?o.url:t.url),"_blank")},children:[" ",n?o.text:t.text]})}}const n=i},64442:(t,e,o)=>{"use strict";o.d(e,{Z:()=>_});var a=o(47313),s=o(2406),i=o(20510),n=o.n(i),c=o(43635),r=o(35179),l=o(46417);const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,s.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:o,isCover:a,controls:s,autoPlay:i,handleVideoEnded:_,muted:h}=this.props,{paddingBottom:m,videoLoaded:p,isVisible:u}=this.state,b={paddingBottom:"".concat(m,"%")},w=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{muted:h}}},loop:!i,onError:t=>{e.stories&&0!=e.stories||(0,c.ib)(t,e.id)},autoPlay:i,muted:h,volume:i?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig?u:i,height:"100%",width:"100%",controls:s||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},62245:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var a=o(47313),s=o(16390),i=o(17739),n=(o(35179),o(25810),o(46417));const c=a.lazy((()=>Promise.all([o.e(622),o.e(584)]).then(o.bind(o,30584))));class r extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:o,font:r,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:m,textAlign:p,maxLines:u,isReadMore:b}=this.props,w={WebkitLineClamp:u,textAlign:o.textAlignment};p||o.textAlignment;let g=20==d.network.id?e:(0,i.Fx)(e);12==d.network.id&&(g=(0,s.ZP)(g));const x="".concat(o.lineTrim?" tb_content_line-".concat(o.lineTrim):""),k="".concat(t," ").concat(b?"":x);return(0,n.jsxs)("div",{className:k,ref:this.contentRef,style:w,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(_)}):null,(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(c,{data:d,content:g,Personalization:l})]})]})}}},90905:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var a=o(47313),s=o(35179),i=o(46417);const n=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:n}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:n},"tb-network":e.id,children:(0,i.jsx)("div",{})})},c=t=>{let{ThemeID:e}=t;const{className:o,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,i.jsx)("div",{className:o,style:{color:a},"tb-network":e})};class r extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>o?(0,i.jsx)(c,{ThemeID:o},a):(0,i.jsx)(n,{network:e},a))):null})}}},5744:(t,e,o)=>{"use strict";o.d(e,{Z:()=>c});var a=o(47313),s=o(43635),i=o(35179),n=o(46417);class c extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:o,wallID:a,ownerId:n}=this.props;e.stopPropagation(),i.ZQ||(0,s.S5)({type:2,action:2,wall:a,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:n}),(0,s.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},32675:(t,e,o)=>{"use strict";o.d(e,{Z:()=>l});var a=o(47313),s=(o(35179),o(17739)),i=o(46417);const n=(t,e,o)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,s.ok)(e)):o,c=(t,e,o)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,s.ok)(e)):o,r=t=>{let{arialbl:e,hrefClick:o,Icon:a,count:n}=t;return(0,i.jsx)("div",{className:"tb_social_action__list",children:(0,i.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(o,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,i.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(a),children:" "}),n>0?(0,i.jsx)("div",{className:"tb_social_action_counts__",children:(0,s.sy)(n)}):""]})})};class l extends a.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:o,ThemeID:a}=this.props,l={color:3===a?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),m=![29,19].includes(d),p=t.network.name?t.network.name:"";return(0,i.jsx)(i.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,i.jsx)("div",{className:o,children:(0,i.jsxs)("div",{className:"tb_social_action__",children:[h?(0,i.jsx)(r,{arialbl:p,hrefClick:n(d,t.postId,t.link),Icon:_,iconColorStyle:l,count:t.like_count}):null,m?(0,i.jsx)(r,{arialbl:p,hrefClick:c(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,i.jsx)(r,{arialbl:p,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,s.ok)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,i.jsx)(r,{arialbl:p,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},16977:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>D});var a=o(47313),s=o(61395),i=o.n(s),n=o(89239),c=o(55790),r=o(25810),l=o(35179),d=o(17739),_=o(46417);const h=t=>{let{author:e,personalization:o,postTime:a,network:s,ThemeRule:i,itemData:h,mediaType:m}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",u=!(!o.postAuthor||e.isInstaUser);console.log("\ud83d\ude80 ~ AuthorDetails ~ postAuthor:",e);const b=!(!o.postAuthor||!o.postTime||e.isInstaUser||""==p);return(0,_.jsxs)("div",{className:"tb_nc_author_wrapper",children:[(0,_.jsxs)("div",{className:"tb_nc_author ".concat(l.ZQ&&(0,d.mD)(19)&&m?"tb_nc_author_top":""),children:[u?(0,_.jsx)(n.default,{itemData:h,network:s,author:e,authorClass:"tb_nc_author_profile"}):"",(0,_.jsxs)("div",{className:"tb_nc_author_info",children:[u?(0,_.jsx)("div",{className:"tb_nc_authorname",children:e.name}):"",(0,_.jsxs)("div",{className:"tb_nc_post_info",children:[u&&""!=p?(0,_.jsx)("div",{className:"tb_nc_username",children:p}):"",b?(0,_.jsx)("div",{className:"tb_nc_seprator",children:" "}):"",o.postTime?(0,_.jsx)(c.default,{postTime:a,timeClass:"tb_nc_time tb-cTBfont-".concat(i.font_varient),authorColor:i.authorColor}):""]})]})]}),l.ZQ&&(0,d.mD)(19)&&l.ZQ&&!m||(0,d.mD)(59)||(0,d.mD)(19)&&l.ig?(0,_.jsx)("div",{className:"tb_nc_social_",children:(0,_.jsx)(r.default,{networkClass:"tb_nc_social_ico",network:s,isDefault:1===i.iconType,ThemeRule:i})}):null]})};var m=o(81349),p=o(84261),u=o(64442);const b=t=>{let{itemData:e,wallID:o,ownerId:a,wall:s}=t;const i=!(!l.ZQ||3!==e.type&&5!==e.type||s.Personalization.mobilePopup||s.Personalization.postFeatured),n=(3===e.type||5===e.type)&&28!==e.network.id&&1==s.ThemeRule.autoPlay,c=l.ZQ?!!s.ThemeRule.aspectImageRatio&&s.ThemeRule.aspectImageRatio:(l.ig,!1),h=(e.hotspot,!!(l.ZQ&&(0,d.mD)(19)||!(0,d.mD)(59)&&!l.ig&&!l.Jx));return(0,_.jsxs)("div",{className:"tb_nc_media_wrap",children:[h?(0,_.jsx)("div",{className:"tb_nc_social_ tb_nc_social_top_",children:(0,_.jsx)(r.default,{networkClass:"tb_nc_social_ico",network:e.network,isDefault:1===s.ThemeRule.iconType,ThemeRule:s.ThemeRule})}):null,i?null:(0,_.jsx)(m.Z,{itemData:e,IconClass:h?"tb_nc_media_icon_te":"tb_nc_media_icon",show:!0,isCenter:l.ZQ}),n||i?(0,_.jsx)(u.Z,{VideoClass:"tb_nc_video",data:e,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:a,size:c,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,_.jsx)(p.default,{ImageClass:"tb_nc_image",data:e,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:a,size:c,ThemeRule:s.ThemeRule,hotspot:!0})]})};var w=o(62245),g=o(5744),x=o(7138),k=o(90905),v=o(32675);const j=l.ZQ?null:200,f=t=>{let{itemData:e,personalization:o,adjustWidth:a,ThemeRule:s,clickToShowPopUp:i,itemIndex:n,wallID:c,ownerId:r,onClickToCTA:m,wall:p,counter:u}=t;const f={width:"".concat(a,"%"),padding:o.padding/2},C=2===e.type||3===e.type||4===e.type||5===e.type,T=e.rating>0,y=e.rating>0?"tb_nc_rating_content":"tb_nc_content",D=1===e.type&&o.textDecorate?"tb_nc_text_decoration tb_nc_text_post":"",N=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),I=o.trimcontent?(0,d.Sv)(e.content,j):e.content;e.font;return(0,_.jsx)("div",{id:"tb-nc-post-".concat(e.id),className:"tb_nc_post_wrapper ".concat(l.ZQ&&(0,d.mD)(59)?"tb_nc_post_gradient tb_nc_gradient-".concat(u):""),style:f,"tb-network":e.network.icon,children:(0,_.jsx)("div",{className:"tb_nc_post_wrap_in",children:(0,_.jsxs)("div",{className:"tb_nc_post_in",onClick:i(n,e),children:[(0,_.jsxs)("div",{className:"tb_nc_post_media_wrapp",children:[e.share.status?(0,_.jsx)(g.Z,{share:e.share,shareClass:"tb_nc_share_container",item:e,wallID:c,ownerId:r}):"",C?(0,_.jsx)(b,{itemData:e,wallID:c,ownerId:r,wall:p},"img_".concat(e.id)):"",!T||l.ZQ||(0,d.mD)(59)||l.ig?"":(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(k.Z,{rating:e.rating,network:e.network,ThemeID:59==o.widgetTheme?o.widgetTheme:null})})]}),(0,_.jsxs)("div",{className:"tb_nc_contant_wrapper",children:[(0,_.jsx)(h,{mediaType:C,ownerId:r,itemData:e.id,postTime:e.createdAt,author:e.author,network:e.network,font:s,personalization:o,ThemeRule:s}),l.ZQ?"":N?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(x.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:m})}):"",T&&(l.ZQ&&((0,d.mD)(59)||(0,d.mD)(19))||l.ig)?(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(k.Z,{rating:e.rating,network:e.network,ThemeID:59==o.widgetTheme?o.widgetTheme:null})}):"",l.ig&&s.hideContent||!l.ig&&!s.hideContent||1==e.type?(0,_.jsx)(w.default,{contentClass:"".concat(y," ").concat(D),item:e,content:I,font:s,ThemeRule:s,personalization:o,contentTitle:e.contentTitle}):"",l.ZQ&&N?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(x.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:m})}):""]}),s.socialAction?(0,_.jsx)(v.Z,{itemData:e,ThemeRule:s,ThemeID:o.widgetTheme,actionClass:"tb_nc_social_action__"}):""]})})})};var C=o(43411),T=o(43635);class y extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_nc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:o,wall:a,postSize:s,clickToShowPopUp:n,onClickToCTA:c}=this.props,{loadData:r}=this.state;let d=0;return(0,_.jsx)(i(),{className:"tb_nc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_nc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:r?t&&t.length>0&&t.map(((t,i)=>{const r=e[t];return d=l.ZQ?i%6===0?1:d+1:1,(0,_.jsx)(f,{ownerId:a.Wall.owner,itemData:r,itemIndex:i,adjustWidth:1==r.highlight?2*o:o,postSize:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:n,onClickToCTA:c,wall:a,counter:d},i)})):null})}}const D=(0,C.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,T.B0)(e))})))(y)},50247:()=>{}}]);