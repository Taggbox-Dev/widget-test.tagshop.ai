"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8549],{16243:(t,e,o)=>{o.d(e,{Z:()=>i});var a=o(72791),s=o(80184);class n extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:a,item:n}=this.props,i=!(!o||1!==o.status),c={color:i?o.color:t.color,backgroundColor:i?o.background:t.background};return(0,s.jsxs)("div",{className:e,style:c,onClick:e=>{e.stopPropagation(),a(n),window.open("".concat(i?o.url:t.url),"_blank")},children:[" ",i?o.text:t.text]})}}const i=n},98270:(t,e,o)=>{o.d(e,{Z:()=>d});var a=o(72791),s=o(80413),n=o(96710),i=o.n(n),c=o(11225),l=o(80184);const r=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class d extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,s.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:o,isCover:a,controls:s,autoPlay:n,handleVideoEnded:d,muted:_}=this.props,{paddingBottom:h,videoLoaded:m}=this.state,p={paddingBottom:"".concat(h,"%")};return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:p,children:(0,l.jsx)(i(),{className:"".concat(t," video").concat(e.id),url:r(e.mediaUrl,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!n,onError:t=>{e.stories&&0!=e.stories||(0,c.ib)(t,e.id)},autoPlay:n,muted:_,volume:n?1:0,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:n,height:"100%",width:"100%",controls:s,style:{backgroundImage:m?"":"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:d||null})})}}},19036:(t,e,o)=>{o.d(e,{Z:()=>l});var a=o(72791),s=o(46535),n=o(80184);const i=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:i}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,n.jsx)("div",{className:a,style:{color:i},"tb-network":e.id,children:(0,n.jsx)("div",{})})},c=t=>{let{ThemeID:e}=t;const{className:o,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,n.jsx)("div",{className:o,style:{color:a},"tb-network":e})};class l extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,n.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>o?(0,n.jsx)(c,{ThemeID:o},a):(0,n.jsx)(i,{network:e},a))):null})}}},20169:(t,e,o)=>{o.d(e,{Z:()=>c});var a=o(72791),s=o(11225),n=o(46535),i=o(80184);class c extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:o,wallID:a,ownerId:i}=this.props;e.stopPropagation(),n.ZQ||(0,s.S5)({type:2,action:2,wall:a,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:i}),(0,s.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,i.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,i.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(n.ZQ?"tb-share-fill":"tb-share"),children:(0,i.jsx)("div",{})}),(0,i.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,i.jsx)("div",{})})}):"",t.twitter?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,i.jsx)("div",{})})}):"",t.linkedin?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,i.jsx)("div",{})})}):""]})]})}}},31152:(t,e,o)=>{o.d(e,{Z:()=>r});var a=o(72791),s=(o(46535),o(2703)),n=o(80184);const i=(t,e,o)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,s.ok)(e)):o,c=(t,e,o)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,s.ok)(e)):o,l=t=>{let{arialbl:e,hrefClick:o,Icon:a,iconColorStyle:s,count:i}=t;return(0,n.jsx)("div",{className:"tb_social_action__list",children:(0,n.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(o,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,n.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(a),style:s,children:" "}),i>0?(0,n.jsx)("div",{className:"tb_social_action_counts__",style:s,children:i}):""]})})};class r extends a.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:o,ThemeID:a}=this.props,r={color:3===a?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),m=![29,19].includes(d),p=t.network.name?t.network.name:"";return(0,n.jsx)(n.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,n.jsx)("div",{className:o,children:(0,n.jsxs)("div",{className:"tb_social_action__",children:[h?(0,n.jsx)(l,{arialbl:p,hrefClick:i(d,t.postId,t.link),Icon:_,iconColorStyle:r,count:t.like_count}):null,m?(0,n.jsx)(l,{arialbl:p,hrefClick:c(d,t.postId,t.link),Icon:"comment",iconColorStyle:r,count:t.comment_count}):null,1===d?(0,n.jsx)(l,{arialbl:p,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,s.ok)(t.postId)),Icon:"retweet",iconColorStyle:r,count:t.comment_count}):null,(0,n.jsx)(l,{arialbl:p,hrefClick:t.link,Icon:"eye",iconColorStyle:r,count:0})]})}):""})}}},38774:(t,e,o)=>{o.r(e),o.d(e,{default:()=>f});var a=o(72791),s=o(39852),n=o.n(s),i=o(97234),c=o(27668),l=o(70757),r=o(46535),d=o(2703),_=o(80184);const h=t=>{let{author:e,personalization:o,postTime:a,network:s,ThemeRule:n,itemData:h,mediaType:m}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",u={color:r.ZQ||(0,d.mD)(59)?null:n.authorColor,fontFamily:n.css_font},b={backgroundColor:r.ZQ||(0,d.mD)(59)?null:n.authorColor},w=!(!o.postAuthor||e.isInstaUser),g=!(!o.postAuthor||!o.postTime||e.isInstaUser);return(0,_.jsxs)("div",{className:"tb_nc_author_wrapper",children:[(0,_.jsxs)("div",{className:"tb_nc_author ".concat(r.ZQ&&(0,d.mD)(19)&&m?"tb_nc_author_top":""),children:[w?(0,_.jsx)(i.default,{itemData:h,network:s,author:e,authorClass:"tb_nc_author_profile"}):"",(0,_.jsxs)("div",{className:"tb_nc_author_info",children:[w?(0,_.jsx)("div",{className:"tb_nc_authorname",style:u,children:e.name}):"",(0,_.jsxs)("div",{className:"tb_nc_post_info",children:[w?(0,_.jsx)("div",{className:"tb_nc_username",style:u,children:p}):"",g?(0,_.jsx)("div",{className:"tb_nc_seprator",style:b,children:" "}):"",o.postTime?(0,_.jsx)(c.default,{postTime:a,timeClass:"tb_nc_time tb-cTBfont-".concat(n.font_varient),authorColor:!r.ZQ&&!(0,d.mD)(59)&&n.authorColor,authorNameStyle:u}):""]})]})]}),!r.ZQ&&(0,d.mD)(19)||(0,d.mD)(59)||(0,d.mD)(19)?(0,_.jsx)("div",{className:"tb_nc_social_",children:(0,_.jsx)(l.default,{networkClass:"tb_nc_social_ico",network:s,isDefault:1===n.iconType,ThemeRule:n})}):null]})};var m=o(37989),p=o(40115),u=o(98270);const b=t=>{let{itemData:e,wallID:o,ownerId:a,wall:s}=t;const n=!(!r.ZQ||3!==e.type&&5!==e.type||s.Personalization.mobilePopup||s.Personalization.postFeatured),i=(3===e.type||5===e.type)&&28!==e.network.id&&1==s.ThemeRule.autoPlay,c=r.ZQ?!!s.ThemeRule.aspectImageRatio&&s.ThemeRule.aspectImageRatio:!r.ig&&100;return console.log("\ud83d\ude80 ~ Media ~ size:",c),(0,_.jsxs)("div",{className:"tb_nc_media_wrap",children:[r.ZQ&&(0,d.mD)(19)||!(0,d.mD)(59)&&!r.ig?(0,_.jsx)("div",{className:"tb_nc_social_ tb_nc_social_top_",children:(0,_.jsx)(l.default,{networkClass:"tb_nc_social_ico",network:e.network,isDefault:1===s.ThemeRule.iconType,ThemeRule:s.ThemeRule})}):null,n?null:(0,_.jsx)(m.Z,{itemData:e,IconClass:"tb_nc_media_icon"}),i||n?(0,_.jsx)(u.Z,{VideoClass:"tb_nc_video",data:e,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:a,size:c,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,_.jsx)(p.Z,{ImageClass:"tb_nc_image",data:e,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:a,size:c,ThemeRule:s.ThemeRule,hotspot:!0})]})};var w=o(23450),g=o(20169),k=o(16243),x=o(19036),j=o(31152);const C=r.ZQ?null:200,v=t=>{let{itemData:e,personalization:o,adjustWidth:a,ThemeRule:s,clickToShowPopUp:n,itemIndex:i,wallID:c,ownerId:l,onClickToCTA:m,wall:p,counter:u}=t;const v={width:"".concat(a,"%"),padding:o.padding/2},y={backgroundColor:s.cardColor},T=2===e.type||3===e.type||4===e.type||5===e.type,D=e.rating>0,f=e.rating>0?"tb_nc_rating_content":"tb_nc_content",N=1===e.type&&o.textDecorate?"tb_nc_text_decoration tb_nc_text_post":"",I=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),Z=o.trimcontent?(0,d.Sv)(e.content,C):e.content;e.font;return(0,_.jsx)("div",{id:"tb-nc-post-".concat(e.id),className:"tb_nc_post_wrapper ".concat(r.ZQ&&(0,d.mD)(59)?"tb_nc_post_gradient tb_nc_gradient-".concat(u):""),style:v,"tb-network":e.network.icon,children:(0,_.jsx)("div",{className:"tb_nc_post_wrap_in",style:{borderRadius:p.ThemeRule.radius},children:(0,_.jsxs)("div",{className:"tb_nc_post_in",style:y,onClick:n(i,e),children:[(0,_.jsxs)("div",{className:"tb_nc_post_media_wrapp",children:[e.share.status?(0,_.jsx)(g.Z,{share:e.share,shareClass:"tb_nc_share_container",item:e,wallID:c,ownerId:l}):"",T?(0,_.jsx)(b,{itemData:e,wallID:c,ownerId:l,wall:p},"img_".concat(e.id)):"",!D||r.ZQ||(0,d.mD)(59)?"":(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(x.Z,{rating:e.rating,network:e.network,ThemeID:59==o.widgetTheme?o.widgetTheme:null})})]}),(0,_.jsxs)("div",{className:"tb_nc_contant_wrapper",children:[(0,_.jsx)(h,{mediaType:T,ownerId:l,itemData:e.id,postTime:e.createdAt,author:e.author,network:e.network,font:s,personalization:o,ThemeRule:s}),r.ZQ?"":I?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(k.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:m})}):"",D&&r.ZQ&&((0,d.mD)(59)||(0,d.mD)(19))?(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(x.Z,{rating:e.rating,network:e.network,ThemeID:59==o.widgetTheme?o.widgetTheme:null})}):"",s.hideContent&&1!=e.type?"":(0,_.jsx)(w.default,{contentClass:"".concat(f," ").concat(N),item:e,content:Z,font:s,ThemeRule:s,personalization:o,contentTitle:e.contentTitle}),r.ZQ&&I?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(k.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:m})}):""]}),s.socialAction?(0,_.jsx)(j.Z,{itemData:e,ThemeRule:s,ThemeID:o.widgetTheme,actionClass:"tb_nc_social_action__ ".concat(r.ZQ?"tb_nc_social_action_bg":"")}):""]})})})};var y=o(77581),T=o(11225);class D extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_nc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:o,wall:a,postSize:s,clickToShowPopUp:i,onClickToCTA:c}=this.props,{loadData:l}=this.state;let d=0;return(0,_.jsx)(n(),{className:"tb_nc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_nc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:l?t&&t.length>0&&t.map(((t,n)=>{const l=e[t];return d=r.ZQ?n%6===0?1:d+1:1,(0,_.jsx)(v,{ownerId:a.Wall.owner,itemData:l,itemIndex:n,adjustWidth:1==l.highlight?2*o:o,postSize:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:i,onClickToCTA:c,wall:a,counter:d},n)})):null})}}const f=(0,y.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,T.B0)(e))})))(D)}}]);
//# sourceMappingURL=8549.75a4892a.chunk.js.map