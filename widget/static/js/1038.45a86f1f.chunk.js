(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1038,7033,7234,7668],{97234:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>a});var o=i(72791),n=(i(2703),i(14496)),s=i(80184);class a extends o.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:i}=this.props;return(0,s.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,s.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:e.name,width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,s.jsx)(n.Z,{authorClass:t,username:e.name,network:i,color:null===i.id?"#000":i.color,errorPic:e.errorPic})},Math.random())}}},14496:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var o=i(72791),n=i(80184);const s=e=>{let{username:t,network:i,authorClass:o,errorPic:s}=e;const a="#ffffff"==i.color?"#000":i.color;return(0,n.jsx)("img",{className:"".concat(o,"__"),src:s||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":a).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45,"aria-label":"author image"})},a=(0,o.memo)(s)},16243:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var o=i(72791),n=i(80184);class s extends o.PureComponent{render(){const{cta:e,ctaClass:t,postCta:i,onClickToCTA:o,item:s}=this.props,a=!(!i||1!==i.status),r={color:a?i.color:e.color,backgroundColor:a?i.background:e.background};return(0,n.jsxs)("div",{className:t,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:t=>{t.stopPropagation(),o(s),window.open("".concat(a?i.url:e.url),"_blank")},children:[" ",a?i.text:e.text]})}}const a=s},98270:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var o=i(72791),n=i(80413),s=i(96710),a=i.n(s),r=i(11225),l=i(46535),c=(i(13422),i(80184));const d=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends o.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,n.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:i,isCover:o,controls:n,autoPlay:s,handleVideoEnded:h,muted:_}=this.props,{paddingBottom:u,videoLoaded:p,isVisible:m}=this.state,g={paddingBottom:"".concat(u,"%")},b=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,c.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:g,ref:this.videoRef,children:(0,c.jsx)(a(),{className:"".concat(e," video").concat(t.id),url:d(b,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,r.ib)(e,t.id)},autoPlay:s,muted:_,volume:s?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?m:s,height:"100%",width:"100%",controls:n||!1,style:{backgroundImage:"url(".concat(t.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},70757:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var o=i(72791),n=i(46535),s=i(80184);const a=o.lazy((()=>i.e(1088).then(i.bind(i,41088))));class r extends o.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:i,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),d=n.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,s.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===e||void 0===e?void 0:e.name)||""),children:(0,s.jsx)("div",{})}):(0,s.jsxs)(o.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(a,{network:e,networkClass:t})]})}}},23450:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var o=i(72791),n=i(34867),s=i(2703),a=(i(46535),i(70757),i(80184));const r=o.lazy((()=>Promise.all([i.e(6332),i.e(6476)]).then(i.bind(i,46476))));class l extends o.PureComponent{constructor(e){super(e),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var i,o;const e=(null===(i=this.contentRef)||void 0===i||null===(o=i.current)||void 0===o?void 0:o.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{contentClass:e,content:t,ThemeRule:i,font:l,personalization:c,item:d,contentTitle:h,readMore:_,maxLength:u,textAlign:p,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:i.textAlignment};p||i.textAlignment;let w=20==d.network.id?t:(0,s.Fx)(t);12==d.network.id&&(w=(0,n.ZP)(w));const v="".concat(i.lineTrim?" tb_content_line-".concat(i.lineTrim):""),f="".concat(e," ").concat(g?"":v," tb-cTBfont-").concat(i.font_varient);return(0,a.jsxs)("div",{className:f,ref:this.contentRef,style:b,children:[h?(0,a.jsx)("div",{className:"tb_bold_txt__",children:(0,n.ZP)(h)}):null,(0,a.jsxs)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(r,{data:d,content:w,Personalization:c})]})]})}}},19036:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var o=i(72791),n=i(46535),s=i(80184);const a=e=>{let{network:t}=e;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:o,color:a}=i[t.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,s.jsx)("div",{className:o,style:{color:a},"tb-network":t.id,children:(0,s.jsx)("div",{})})},r=e=>{let{ThemeID:t}=e;const{className:i,color:o}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[t]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,s.jsx)("div",{className:i,style:{color:o},"tb-network":t})};class l extends o.PureComponent{render(){const{rating:e,network:t,ThemeID:i}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:e?[...Array(e)].map(((e,o)=>i?(0,s.jsx)(r,{ThemeID:i},o):(0,s.jsx)(a,{network:t},o))):null})}}},20169:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var o=i(72791),n=i(11225),s=i(46535),a=i(80184);class r extends o.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:i,wallID:o,ownerId:a}=this.props;t.stopPropagation(),s.ZQ||(0,n.S5)({type:2,action:2,wall:o,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:a}),(0,n.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,a.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(s.ZQ?"tb-share-fill":"tb-share"),children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,a.jsx)("div",{})})}):"",e.twitter?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,a.jsx)("div",{})})}):"",e.linkedin?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,a.jsx)("div",{})})}):""]})]})}}},31152:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var o=i(72791),n=(i(46535),i(2703)),s=i(80184);const a=(e,t,i)=>1==e?"https://twitter.com/intent/favorite?tweet_id=".concat((0,n.ok)(t)):i,r=(e,t,i)=>1==e?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,n.ok)(t)):i,l=e=>{let{arialbl:t,hrefClick:i,Icon:o,count:a,itemId:r=0}=e;return(0,s.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,s.jsxs)("div",{onClick:e=>{e.stopPropagation(),window.open(i,"_blank")},className:"tb_social_action__ico_wrap tb_social_action__ico_wrap_".concat(r),"aria-label":"".concat(t," post,").concat("eye"==o?"view":"heart"==o?"like":"comment"==o?"comment":""," count ").concat((0,n.sy)(a)),role:"button",tabIndex:"0",children:[(0,s.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(o),children:" "}),a>0?(0,s.jsx)("div",{className:"tb_social_action_counts__",children:(0,n.sy)(a)}):""]})})};class c extends o.PureComponent{componentDidMount(){try{var e;const{itemData:t}=this.props,i=".tb_social_action__ico_wrap_".concat(null===t||void 0===t?void 0:t.id);null===(e=document.querySelector(i))||void 0===e||e.addEventListener("keydown",(function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())}))}catch(t){console.log(t)}}render(){const{itemData:e,ThemeRule:t,actionClass:i,ThemeID:o}=this.props,c={color:3===o?1===t.iconType?t.iconColor:e.network.color:t.fontColor},d=e.network.id,h=3===d||10===d||7===d?"like":"heart",_=!![1,2,3,7,8,9,10,18].includes(d),u=![29,19].includes(d),p=e.network.name?e.network.name:"";return(0,s.jsx)(s.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,s.jsx)("div",{className:i,children:(0,s.jsxs)("div",{className:"tb_social_action__",role:"list",children:[_?(0,s.jsx)(l,{itemId:e.id,arialbl:p,hrefClick:a(d,e.postId,e.link),Icon:h,iconColorStyle:c,count:e.like_count}):null,u?(0,s.jsx)(l,{itemId:e.id,arialbl:p,hrefClick:r(d,e.postId,e.link),Icon:"comment",iconColorStyle:c,count:e.comment_count}):null,1===d?(0,s.jsx)(l,{itemId:e.id,arialbl:p,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,n.ok)(e.postId)),Icon:"retweet",iconColorStyle:c,count:e.comment_count}):null,(0,s.jsx)(l,{arialbl:p,itemId:e.id,hrefClick:e.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},27668:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var o=i(72791),n=i(2703),s=i(80184);const a=e=>{const{postTime:t,timeClass:i}=e;return(0,s.jsx)("div",{className:i,role:"status","aria-label":"post timestamp ".concat((0,n.Sy)(t)),children:(0,n.Sy)(t)})},r=(0,o.memo)(a)},1419:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>S});var o=i(72791),n=i(60173),s=i(77581),a=i(48282),r=i(98270),l=i(46535),c=i(40115),d=i(37989),h=i(80184);const _=e=>{let{itemData:t,wallID:i,ownerId:o,wall:n,isCover:s,ThemeRule:a}=e;const _=(3===t.type||5===t.type)&&28!==t.network.id&&1==n.ThemeRule.autoPlay,u=(l.ZQ||"tagembed"==n.User.userDatabaseType)&&a.aspectImageRatio?a.aspectImageRatio:100,p=!t.hotspot;return(0,h.jsxs)("div",{className:"tb_hc_media_wrap",role:"button",tabindex:"0","aria-label":"Pop Up Button",children:[p?(0,h.jsx)(d.Z,{itemData:t,IconClass:"tb_hc_media_icon",show:p,isCenter:!1}):null,_?(0,h.jsx)(r.Z,{VideoClass:"tb_hc_video",data:t,wallID:i,themeID:n.Personalization.widgetTheme,wall:n,size:u,isCover:s,muted:!0,autoPlay:_,handleVideoEnded:()=>{}}):(0,h.jsx)(c.default,{ImageClass:"tb_hc_image",data:t,wallID:i,themeID:n.Personalization.widgetTheme,ownerId:o,size:u,hotspot:!0})]})};var u=i(23450),p=i(20169),m=i(16243),g=i(19036),b=i(31152),w=i(27668),v=i(70757),f=i(97234);const x=e=>{let{author:t,personalization:i,postTime:n,network:s,ThemeRule:a,font:r,rating:l,ownerId:c,instaHash:d}=e;const _=t.username&&t.username.length>0?"@".concat(t.username):"",u=!(!i.postAuthor||t.isInstaUser),p=!(!i.postAuthor||!i.postTime||t.isInstaUser),m=null!==s.id&&""!==s.id;return(0,h.jsxs)("div",{className:"tb_hc_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[u?(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(f.default,{network:s,author:t,authorClass:"tb_hc_author_profile"})}):"",(0,h.jsxs)("div",{className:"tb_hc_author_info",children:[u?(0,h.jsx)("div",{className:"tb_hc_authorname tb-cTBfont-".concat(a.font_varient),children:t.name}):"",(0,h.jsxs)("div",{className:"tb_hc_post_info",children:[u?(0,h.jsx)("div",{className:"tb_hc_username",children:_}):"",p?(0,h.jsx)("div",{className:"tb_hc_seprator",children:" "}):"",i.postTime?(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(w.default,{postTime:n,timeClass:"tb_hc_time tb-cTBfont-".concat(a.font_varient),authorColor:a.authorColor})}):""]})]}),m?(0,h.jsx)("div",{className:"tb_hc_social_",children:(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(v.default,{networkClass:"tb_hc_social_ico",network:s,isDefault:1===a.iconType,ThemeRule:a})})}):null]})};var k=i(2703);const y=l.ZQ?null:140;class j extends o.PureComponent{constructor(e){super(e),this.contentRef=e=>{this.setState({height:e})},this.contentRefHidden=e=>{this.setState({hiddenHeight:e})},this.toggleExpand=e=>{e.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this),this.postTrack=o.createRef()}componentDidMount(){const{itemData:e,itemIndex:t,onClickPopUpSlider:i}=this.props;(l.nX||l.ig)&&(0,k.YN)(this.postTrack),e.isPopUp&&i(t,e)}render(){const{itemData:e,personalization:t,ThemeRule:i,clickToShowPopUp:n,itemIndex:s,wallID:a,ownerId:r,onClickToCTA:c,wall:d,languageSetting:w}=this.props,{isExpanded:v,hiddenHeight:f,height:j}=this.state,C=1!==e.type,I=!!(e.rating&&e.rating>0),S=e.rating>0?"tb_hc_rating_content":"tb_hc_content",T=1===e.type?"tb_hc_text_post":"",N=1===e.type&&String(e.content).length>0&&t.textDecorate?"tb_hc_text_decoration":"",P=!!e.cta.status,D=t.trimcontent?(0,k.Sv)(e.content,y):e.content,R=f>j;return(0,h.jsx)("div",{"item-id":e.id,id:"tb-hc-post-".concat(e.id),className:"tb_hc_post_wrapper",ref:this.postTrack,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,style:{padding:t.padding/2},role:"article","aria-label":"Post ".concat(parseInt(s)+1,",").concat(D),children:(0,h.jsxs)("div",{className:"tb_hc_post_in",onClick:n(s,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,h.jsxs)("div",{className:"tb_hc_post_media_wrapp",role:"button",tabindex:"0","aria-label":"Pop Up Button",children:[e.share.status?(0,h.jsx)(p.Z,{share:e.share,shareClass:"tb_hc_share_container",item:e,wallID:a,ownerId:r}):"",C?(0,h.jsx)(_,{itemData:e,wallID:a,wall:d,ownerId:r,size:!!t.trimcontent&&100,isCover:!!t.trimcontent,ThemeRule:i}):null]}),(0,h.jsxs)("div",{className:"tb_hc_contant_wrapper ".concat(T),children:[(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(x,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:t,ThemeRule:i,rating:e.rating,instaHash:e.instaHash})}),P?(0,h.jsxs)("div",{className:"tb_hc_post_cta",onClick:e=>{e.stopPropagation()},children:[(0,h.jsx)(m.Z,{ctaClass:"tb_hc_post_cta_btn",cta:t.cta,postCta:e.cta,item:e,onClickToCTA:c})," "]}):"",I?(0,h.jsx)("div",{className:"tb_hc_rating__",children:(0,h.jsx)(g.Z,{rating:e.rating,network:e.network})}):null,l.ig&&i.hideContent||!l.ig&&!i.hideContent||1==e.type?(0,h.jsxs)("div",{className:"tb_hc_content_wrapper__",children:[l.ZQ?(0,h.jsx)("div",{className:"tb_hc_content_hidden",children:(0,h.jsx)(u.default,{contentClass:"".concat(S," ").concat(N),item:e,content:D,font:i,ThemeRule:i,personalization:t,contentTitle:e.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0},e.id)}):null,(0,h.jsx)(u.default,{contentClass:"".concat(S," ").concat(N),item:e,content:D,font:i,ThemeRule:i,personalization:t,contentTitle:e.contentTitle,contentRefCallBack:this.contentRef,maxLines:v?"":i.lineTrim,isReadMore:!0},e.id),i.lineTrim>0&&R&&l.ZQ?(0,h.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,children:v?w.showLess:w.readMore}):null]}):null]}),l.ig||l.ZQ?i.socialAction?(0,h.jsx)(b.Z,{itemData:e,ThemeRule:i,ThemeID:t.widgetTheme,actionClass:"tb_hc_social_action__"}):null:""]})})}}var C=i(11225);i(59169);class I extends o.Component{constructor(e){super(e),this.state={windowWidth:document.getElementById(k.u$)&&document.getElementById(k.u$).clientWidth?document.getElementById(k.u$).clientWidth:window.innerWidth,sliderHeight:300},this.onScreenLoad=()=>{const{renderId:e}=this.props.renderId;this.setState({windowWidth:e?document.getElementById(e).clientWidth:document.getElementById(k.u$)&&document.getElementById(k.u$).clientWidth?document.getElementById(k.u$).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:e,wall:t,preRender:i,hasMoreData:o,getDataNextSteps:n}=this.props;o&&n(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,i,e.heightEvent)},this.handleKeyPress=e=>{try{const{wall:i}=this.props;if(1==i.ThemeRule.slidePost&&"Space"===e.code){const{parentID:i}=this.props;e.preventDefault();var t=this.inputRefs[i].splide.Components.Autoplay;t.isPaused()?t.play():t.pause()}}catch(i){}},this.reScrolled=()=>{setTimeout((()=>{let e=document.querySelector(".splide__list"),t=document.querySelector(".splide__slide").offsetWidth;const i=document.querySelectorAll(".splide__slide.is-visible").length,o=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),n=Number(o)+(i-1)+i;n>0?(e.style.transition="0s ease",e.style.transform="translateX(-".concat(n*t,"px)")):e.style.transform="translateX(0px)"}),200)},this.autoScrollSlider=(e,t,i,o)=>{const{wall:n}=this.props;if(1==n.Personalization.autoScrollStatus){const t=l.ZQ?e._o.perPage+e.index:e.index;e.length-t===(l.ZQ?1:e._o.perPage)&&this.requestData()}},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){var e=document.querySelector(".tb_hc_post_slider"),t=e?e.offsetHeight:this.state.height;setTimeout((()=>{this.setState({sliderHeight:t});document.querySelectorAll(".splide__slide").forEach((e=>{e.removeAttribute("role")}))}),100);const{postData:i}=this.props;if(i&&1==i.length){let n=document.querySelector(".tb_hc_arrow_left__"),s=document.querySelector(".tb_hc_arrow_right__");function a(){setTimeout((()=>{let e=document.querySelector(".splide__list");null!=e&&(e.style.transform="translateX(0)")}),100)}n&&s&&(document.querySelector(".tb_hc_arrow_left__").style="display:none",document.querySelector(".tb_hc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){a()})),a(),window.addEventListener("resize",a)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let o=document.querySelector("#kt_aside_toggle");null!=o&&o.addEventListener("click",this.reScrolled),window.addEventListener("keydown",this.handleKeyPress)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}componentDidUpdate(){var e=document.querySelector(".tb_hc_post_slider"),t=e?e.offsetHeight:this.state.height;t+15!=this.state.sliderHeight&&setTimeout((()=>{this.setState({sliderHeight:t+15})}),100)}render(){var e;const{postData:t,completeDataObject:i,wall:o,clickToShowPopUp:s,hasMoreData:r,onClickToCTA:c,parentID:d,keyRender:_,languageSetting:u,cardNumber:p,onClickPopUpSlider:m}=this.props,{sliderHeight:g}=this.state,b=d,{windowWidth:w}=this.state,v=o.ThemeRule.numberOfPosts,f=o.ThemeRule.numberOfCoumn,x=o.ThemeRule.mobileColumn,y=o.ThemeRule.slidePost&&!l.ig,C=o.ThemeRule.slideDuration,I=o.Personalization.autoScrollStatus,S=1===o.Personalization.trimcontent,T=l.ZQ?(0,k.b)():!!(w<768||n.tq),N=v>parseInt(p)?parseInt(p):v,P=t&&t.length?T?1:t.length>N?N:t.length:3,D=t&&t.length?T?1:t.length>N?N:t.length:4;T||1===I||t.length;const R=l.ZQ&&void 0!==(null===(e=o.Personalization)||void 0===e?void 0:e.clonePost)&&0===o.Personalization.clonePost?{clones:0}:{},E=1!=I?!(Object.keys(R).length>0)&&"slide":"slide",z=P!=t.length&&D!=t.length||0!=Object.keys(R).length?t:Array(2).fill(t).flat(),Z=(o.ThemeRule.lineTrim,!(l.ZQ||!S)),M={...R,type:1!==I&&E,role:"article",label:"social widget",rewind:!0,speed:1e3,loop:1!==I,interval:y?1e3*C:5e3,perPage:f>0?f:T?1:t.length>N?N:t.length,gap:0,perMove:!!l.ZQ&&1,autoplay:!!y,padding:"0",pagination:!1,arrows:!!T||t.length>=(f>0?f:D),fixedHeight:Z,breakpoints:{560:{perPage:x>0?x:1,perMove:x>0?x:1,arrows:t.length>=(x>0?x:1)},767:{perPage:f>0?f-3<1?f:f-3:P,arrows:t.length>=(f>0?f-3<1?f:f-3:P)},991:{perPage:f>0?f-4<1?f:f-4:P,arrows:t.length>=(f>0?f-4<1?f:f-4:P)},1200:{perPage:f>0?f-1==0?f:f-1:P,arrows:t.length>=(f>0?f-1==0?f:f-1:P)},1600:{perPage:f>0?f:D,arrows:t.length>=(f>0?f:D)}}};return(0,h.jsx)(h.Fragment,{children:""!=d?(0,h.jsx)("div",{className:"tb_hc_post_container",ref:this.sliderHeight,style:{minHeight:g},children:(0,h.jsxs)(a.tv,{hasTrack:!1,className:"tb_hc_post_slider ".concat(Z?"tb_hc_fixed_height":""),options:M,ref:e=>this.inputRefs[b]=e,tag:"section",onMove:this.autoScrollSlider,children:[(0,h.jsx)(a.Gj,{children:z&&z.length>0&&z.map(((e,t)=>{const n=i[e];return(0,h.jsx)(a.jw,{p_id:d,className:"tb_".concat(n.id),children:(0,h.jsx)(j,{ownerId:o.Wall.owner,itemData:n,itemIndex:t,personalization:o.Personalization,ThemeRule:o.ThemeRule,clickToShowPopUp:s,wallID:o.Wall.id,onClickToCTA:c,wall:o,languageSetting:u,onClickPopUpSlider:m})},t)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--prev tb_hc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--next tb_hc_arrow_right__ tb__icon tb-arrow-right-alt","aria-labelledby":"Navigation Next Slide",onClick:l.ig?this.requestData:null,children:" "})]})]})}):null})}}const S=(0,o.memo)((0,s.$j)((e=>({})),(e=>({getDataNextSteps:(t,i,o,n,s,a,r,l)=>e((0,C.Sx)(t,i,o,n,s,a,r,l))})))(I))},80413:(e,t,i)=>{"use strict";t.Ad=void 0;var o=i(7782);var n=i(94590);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return n.getImageSize}});var s=i(52047)},7782:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const o=i(7782);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,n)=>{if("undefined"===typeof window)return n(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return n(o.ErrorMessage.URL_IS_NOT_DEFINED);let s=null;const a=new Image;a.addEventListener("load",(()=>{s&&window.clearTimeout(s),i({width:a.naturalWidth,height:a.naturalHeight})})),a.addEventListener("error",(e=>{s&&window.clearTimeout(s),n("".concat(e.type,": ").concat(e.message))})),a.src=e,t.timeout&&(s=window.setTimeout((()=>n(o.ErrorMessage.TIMEOUT)),t.timeout))}))}},52047:function(e,t,i){"use strict";var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(n,s){function a(e){try{l(o.next(e))}catch(t){s(t)}}function r(e){try{l(o.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,r)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const n=i(72791),s=i(94590);t.useImageSize=(e,t)=>{const[i,a]=(0,n.useState)(null),[r,l]=(0,n.useState)(!1),[c,d]=(0,n.useState)(null);return(0,n.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){l(!0),a(null);try{const{width:i,height:o}=yield(0,s.getImageSize)(e,t);a({width:i,height:o})}catch(c){d(c.toString())}finally{l(!1)}}))}),[e,t]),[i,{loading:r,error:c}]}},59169:()=>{},50247:()=>{}}]);
//# sourceMappingURL=1038.45a86f1f.chunk.js.map