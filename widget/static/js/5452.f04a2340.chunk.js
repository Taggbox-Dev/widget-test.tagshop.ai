"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5452],{29146:(t,e,a)=>{a.r(e),a.d(e,{default:()=>N});var o=a(47313),s=a(89239),i=a(55790),n=a(25810),c=a(46417);const l=t=>{let{author:e,personalization:a,postTime:o,network:l,ThemeRule:r,font:d}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",p=!(!a.postAuthor||e.isInstaUser),h=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,c.jsxs)("div",{className:"tb_cp_author_wrapper",children:[(0,c.jsxs)("div",{className:"tb_cp_author",children:[p?(0,c.jsx)(s.default,{author:e,network:l,authorClass:"tb_cp_author_profile"}):"",(0,c.jsxs)("div",{className:"tb_cp_author_info",children:[p?(0,c.jsx)("div",{className:"tb_cp_authorname",children:e.name}):"",(0,c.jsxs)("div",{className:"tb_cp_post_info",children:[p?(0,c.jsx)("div",{className:"tb_cp_username",children:_}):"",h?(0,c.jsx)("div",{className:"tb_cp_seprator",children:" "}):"",a.postTime?(0,c.jsx)(i.default,{postTime:o,timeClass:"tb_cp_time tb-cTBfont-".concat(r.font_varient),authorColor:r.authorColor}):""]})]})]}),(0,c.jsx)("div",{className:"tb_cp_social_",children:(0,c.jsx)(n.default,{networkClass:"tb_cp_social_ico",network:l,ThemeRule:r,isDefault:1===r.iconType})})]})};var r=a(35179),d=a(81349),_=a(84261),p=a(64442);const h=t=>{let{itemData:e,wallID:a,ownerId:o,wall:s}=t;const i=!(!r.ZQ||3!==e.type&&5!==e.type||s.Personalization.mobilePopup||s.Personalization.postFeatured),n=(3===e.type||5===e.type)&&28!==e.network.id&&1==s.ThemeRule.autoPlay,l=r.ZQ?s.ThemeRule.aspectImageRatio?s.ThemeRule.aspectImageRatio:80:!r.ig&&100,h=!r.ig||!e.hotspot;return(0,c.jsxs)("div",{className:"tb_cp_media_wrap",children:[i?null:(0,c.jsx)(d.Z,{itemData:e,IconClass:"tb_cp_media_icon",show:h,isCenter:r.ZQ}),n||i?(0,c.jsx)(p.Z,{VideoClass:"tb_cp_video",data:e,wallID:a,themeID:s.Personalization.widgetTheme,ownerId:o,size:l,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,c.jsx)(_.default,{ImageClass:"tb_cp_image",data:e,wallID:a,themeID:s.Personalization.widgetTheme,ownerId:o,size:l,ThemeRule:s.ThemeRule,hotspot:!0})]})};var m=a(5744),u=a(7138),b=a(90905),w=a(32675);const g=t=>{let{itemData:e,personalization:a,adjustWidth:o,ThemeRule:s,clickToShowPopUp:i,itemIndex:n,wallID:d,ownerId:_,onClickToCTA:p,wall:g}=t;const k={width:"".concat(o,"%"),padding:a.padding/2},j=2===e.type||3===e.type||4===e.type||5===e.type,x=e.rating>0,C=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),v=!!(e.ugc_products&&e.ugc_products.length>0),T=!(!v||0!==e.hotspot),N=!(!e.hotspot||!v);return(0,c.jsx)("div",{id:"tb-cp-post-".concat(e.id),className:"tb_cp_post_wrapper",style:k,"tb-network":e.network.id,"tb-product":T?1:N?2:0,children:(0,c.jsxs)("div",{className:"tb_cp_post_in",onClick:i(n,e),children:[(0,c.jsxs)("div",{className:"tb_cp_post_media_wrapper",children:[e.share.status?(0,c.jsx)(m.Z,{share:e.share,shareClass:"tb_cp_share_container",item:e,wallID:d,ownerId:_}):"",j?(0,c.jsx)(h,{itemData:e,wallID:d,ownerId:_,ThemeID:a.widgetTheme,wall:g},"img".concat(n,"_").concat(e.id)):"",r.ZQ&&x?(0,c.jsxs)("div",{className:"tb_cp_rating__",children:[(0,c.jsx)(b.Z,{rating:e.rating,network:e.network})," "]}):"",C?(0,c.jsxs)("div",{className:"tb_cp_post_cta",children:[(0,c.jsx)(u.Z,{ctaClass:"tb_cp_post_cta_btn",cta:e.cta,item:e,onClickToCTA:p})," "]}):""]}),(0,c.jsx)("div",{className:"tb_cp_contant_wrapper",children:(0,c.jsx)(l,{ownerId:_,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:a,ThemeRule:s})}),s.socialAction?(0,c.jsx)(w.Z,{itemData:e,ThemeRule:s,ThemeID:a.widgetTheme,actionClass:"tb_cp_social_action__ ".concat(r.ZQ?"tb_cp_social_action_bg":"","}")}):""]})})};var k=a(43411),j=a(61395),x=a.n(j),C=a(43635);const v=t=>{let{loadData:e,postData:a,completeDataObject:o,BrandingPosition:s,clickToShowPopUp:i,wall:n,adjustWidth:l,onClickToCTA:r}=t;return e?a&&a.length>0&&a.map(((t,e)=>{const a=o[t];return parseInt(s),(0,c.jsx)(g,{ownerId:n.Wall.owner,itemData:a,itemIndex:e,adjustWidth:1==a.highlight?2*l:l,personalization:n.Personalization,ThemeRule:n.ThemeRule,wallID:n.Wall.id,clickToShowPopUp:i,onClickToCTA:r,wall:n},"Classic_Card_".concat(e,"_").concat(t.id))})):null};class T extends o.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1}}componentDidMount(){const{postData:t}=this.props;this.setState({postData:t,loadData:1})}render(){const{postData:t,completeDataObject:e,adjustWidth:a,wall:o,clickToShowPopUp:s,onClickToCTA:i}=this.props,{loadData:n}=this.state;return r.ig?(0,c.jsx)(x(),{className:"tb_cp_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cp_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(0,c.jsx)(v,{loadData:n,wall:o,clickToShowPopUp:s,postData:t,completeDataObject:e,BrandingPosition:4,adjustWidth:a,onClickToCTA:i})}):(0,c.jsx)("div",{className:"tb_cp_post_container",children:(0,c.jsx)(v,{loadData:n,wall:o,clickToShowPopUp:s,postData:t,completeDataObject:e,BrandingPosition:4,adjustWidth:a,onClickToCTA:i})})}}const N=(0,k.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,C.B0)(e))})))(T)},7138:(t,e,a)=>{a.d(e,{Z:()=>n});var o=a(47313),s=a(46417);class i extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:o,item:i}=this.props,n=!(!a||1!==a.status);return(0,s.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),o(i),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=i},64442:(t,e,a)=>{a.d(e,{Z:()=>_});var o=a(47313),s=a(2406),i=a(20510),n=a.n(i),c=a(43635),l=a(35179),r=a(46417);const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,s.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:a,isCover:o,controls:s,autoPlay:i,handleVideoEnded:_,muted:p}=this.props,{paddingBottom:h,videoLoaded:m}=this.state,u={paddingBottom:"".concat(h,"%")},b=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,r.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:u,children:(0,r.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(b,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{muted:p}}},loop:!i,onError:t=>{e.stories&&0!=e.stories||(0,c.ib)(t,e.id)},autoPlay:i,muted:p,volume:i?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:!!l.ig||i,height:"100%",width:"100%",controls:s||!1,style:{backgroundImage:m?"":"url(".concat(e.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},90905:(t,e,a)=>{a.d(e,{Z:()=>l});var o=a(47313),s=a(35179),i=a(46417);const n=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:o,color:n}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:o,style:{color:n},"tb-network":e.id,children:(0,i.jsx)("div",{})})},c=t=>{let{ThemeID:e}=t;const{className:a,color:o}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:o},"tb-network":e})};class l extends o.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,o)=>a?(0,i.jsx)(c,{ThemeID:a},o):(0,i.jsx)(n,{network:e},o))):null})}}},5744:(t,e,a)=>{a.d(e,{Z:()=>c});var o=a(47313),s=a(43635),i=a(35179),n=a(46417);class c extends o.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:a,wallID:o,ownerId:n}=this.props;e.stopPropagation(),i.ZQ||(0,s.S5)({type:2,action:2,wall:o,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:n}),(0,s.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},32675:(t,e,a)=>{a.d(e,{Z:()=>r});var o=a(47313),s=(a(35179),a(17739)),i=a(46417);const n=(t,e,a)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,s.ok)(e)):a,c=(t,e,a)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,s.ok)(e)):a,l=t=>{let{arialbl:e,hrefClick:a,Icon:o,count:n}=t;return(0,i.jsx)("div",{className:"tb_social_action__list",children:(0,i.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(a,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,i.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(o),children:" "}),n>0?(0,i.jsx)("div",{className:"tb_social_action_counts__",children:(0,s.sy)(n)}):""]})})};class r extends o.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:a,ThemeID:o}=this.props,r={color:3===o?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",p=!![1,2,3,7,8,9,10,18].includes(d),h=![29,19].includes(d),m=t.network.name?t.network.name:"";return(0,i.jsx)(i.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,i.jsx)("div",{className:a,children:(0,i.jsxs)("div",{className:"tb_social_action__",children:[p?(0,i.jsx)(l,{arialbl:m,hrefClick:n(d,t.postId,t.link),Icon:_,iconColorStyle:r,count:t.like_count}):null,h?(0,i.jsx)(l,{arialbl:m,hrefClick:c(d,t.postId,t.link),Icon:"comment",iconColorStyle:r,count:t.comment_count}):null,1===d?(0,i.jsx)(l,{arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,s.ok)(t.postId)),Icon:"retweet",iconColorStyle:r,count:t.comment_count}):null,(0,i.jsx)(l,{arialbl:m,hrefClick:t.link,Icon:"eye",iconColorStyle:r,count:0})]})}):""})}}}}]);