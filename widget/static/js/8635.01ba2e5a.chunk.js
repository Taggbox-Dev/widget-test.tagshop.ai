(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8635,8342,9239,5790],{89239:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var s=i(47313),n=i(17739),o=i(98935),a=i(46417);class r extends s.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:i}=this.props;return(0,a.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),alt:(0,n.P)(e.picture),width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(o.Z,{authorClass:t,username:e.name,network:i,color:null===i.id?"#000":i.color,errorPic:e.errorPic})},Math.random())}}},98935:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var s=i(47313),n=i(46417);const o=e=>{let{username:t,network:i,authorClass:s,errorPic:o}=e;const a="#ffffff"==i.color?"#000":i.color;return(0,n.jsx)("img",{className:"".concat(s,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":a).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45})},a=(0,s.memo)(o)},7138:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var s=i(47313),n=i(46417);class o extends s.PureComponent{render(){const{cta:e,ctaClass:t,postCta:i,onClickToCTA:s,item:o}=this.props,a=!(!i||1!==i.status);return(0,n.jsxs)("div",{className:t,style:{},onClick:t=>{t.stopPropagation(),s(o),window.open("".concat(a?i.url:e.url),"_blank")},children:[" ",a?i.text:e.text]})}}const a=o},64442:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var s=i(47313),n=i(2406),o=i(20510),a=i.n(o),r=i(43635),l=i(35179),c=(i(98511),i(46417));const d=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends s.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,n.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:i,isCover:s,controls:n,autoPlay:o,handleVideoEnded:h,muted:_}=this.props,{paddingBottom:u,videoLoaded:m,isVisible:p}=this.state,g={paddingBottom:"".concat(u,"%")},b=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,c.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:g,ref:this.videoRef,children:(0,c.jsx)(a(),{className:"".concat(e," video").concat(t.id),url:d(b,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,r.ib)(e,t.id)},autoPlay:o,muted:_,volume:o?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?p:o,height:"100%",width:"100%",controls:n||!1,style:{backgroundImage:"url(".concat(t.postFileNew,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},25810:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var s=i(47313),n=i(35179),o=i(46417);const a=s.lazy((()=>i.e(5867).then(i.bind(i,95867))));class r extends s.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:i,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),d=n.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,o.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(a,{network:e,networkClass:t})]})}}},62245:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var s=i(47313),n=i(16390),o=i(17739),a=(i(35179),i(25810),i(46417));const r=s.lazy((()=>Promise.all([i.e(622),i.e(584)]).then(i.bind(i,30584))));class l extends s.PureComponent{constructor(e){super(e),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var e,t;const i=(null===(e=this.contentRef)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(i)}),100)}render(){const{contentClass:e,content:t,ThemeRule:i,font:l,personalization:c,item:d,contentTitle:h,readMore:_,maxLength:u,textAlign:m,maxLines:p,isReadMore:g}=this.props,b={WebkitLineClamp:p,textAlign:i.textAlignment};m||i.textAlignment;let w=20==d.network.id?t:(0,o.Fx)(t);12==d.network.id&&(w=(0,n.ZP)(w));const f="".concat(i.lineTrim?" tb_content_line-".concat(i.lineTrim):""),v="".concat(e," ").concat(g?"":f);return(0,a.jsxs)("div",{className:v,ref:this.contentRef,style:b,children:[h?(0,a.jsx)("div",{className:"tb_bold_txt__",children:(0,n.ZP)(h)}):null,(0,a.jsxs)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(r,{data:d,content:w,Personalization:c})]})]})}}},90905:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var s=i(47313),n=i(35179),o=i(46417);const a=e=>{let{network:t}=e;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:a}=i[t.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:a},"tb-network":t.id,children:(0,o.jsx)("div",{})})},r=e=>{let{ThemeID:t}=e;const{className:i,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[t]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:s},"tb-network":t})};class l extends s.PureComponent{render(){const{rating:e,network:t,ThemeID:i}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:e?[...Array(e)].map(((e,s)=>i?(0,o.jsx)(r,{ThemeID:i},s):(0,o.jsx)(a,{network:t},s))):null})}}},5744:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var s=i(47313),n=i(43635),o=i(35179),a=i(46417);class r extends s.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:i,wallID:s,ownerId:a}=this.props;t.stopPropagation(),o.ZQ||(0,n.S5)({type:2,action:2,wall:s,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:a}),(0,n.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,a.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,a.jsx)("div",{})})}):"",e.twitter?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,a.jsx)("div",{})})}):"",e.linkedin?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,a.jsx)("div",{})})}):""]})]})}}},32675:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var s=i(47313),n=(i(35179),i(17739)),o=i(46417);const a=(e,t,i)=>1==e?"https://twitter.com/intent/favorite?tweet_id=".concat((0,n.ok)(t)):i,r=(e,t,i)=>1==e?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,n.ok)(t)):i,l=e=>{let{arialbl:t,hrefClick:i,Icon:s,count:a}=e;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:e=>{e.stopPropagation(),window.open(i,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),children:" "}),a>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",children:(0,n.sy)(a)}):""]})})};class c extends s.PureComponent{render(){const{itemData:e,ThemeRule:t,actionClass:i,ThemeID:s}=this.props,c={color:3===s?1===t.iconType?t.iconColor:e.network.color:t.fontColor},d=e.network.id,h=3===d||10===d||7===d?"like":"heart",_=!![1,2,3,7,8,9,10,18].includes(d),u=![29,19].includes(d),m=e.network.name?e.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,o.jsx)("div",{className:i,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[_?(0,o.jsx)(l,{arialbl:m,hrefClick:a(d,e.postId,e.link),Icon:h,iconColorStyle:c,count:e.like_count}):null,u?(0,o.jsx)(l,{arialbl:m,hrefClick:r(d,e.postId,e.link),Icon:"comment",iconColorStyle:c,count:e.comment_count}):null,1===d?(0,o.jsx)(l,{arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,n.ok)(e.postId)),Icon:"retweet",iconColorStyle:c,count:e.comment_count}):null,(0,o.jsx)(l,{arialbl:m,hrefClick:e.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},55790:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var s=i(47313),n=i(17739),o=i(46417);const a=e=>{const{postTime:t,timeClass:i}=e;return(0,o.jsx)("div",{className:i,children:(0,n.Sy)(t)})},r=(0,s.memo)(a)},94594:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>I});var s=i(47313),n=i(34862),o=i(43411),a=i(11774),r=i(64442),l=i(35179),c=i(84261),d=i(81349),h=i(46417);const _=e=>{let{itemData:t,wallID:i,ownerId:s,wall:n,isCover:o,ThemeRule:a}=e;const _=(3===t.type||5===t.type)&&28!==t.network.id&&1==n.ThemeRule.autoPlay,u=l.ZQ&&a.aspectImageRatio?a.aspectImageRatio:100,m=!t.hotspot;return(0,h.jsxs)("div",{className:"tb_hc_media_wrap",children:[m?(0,h.jsx)(d.Z,{itemData:t,IconClass:"tb_hc_media_icon",show:m,isCenter:!1}):null,_?(0,h.jsx)(r.Z,{VideoClass:"tb_hc_video",data:t,wallID:i,themeID:n.Personalization.widgetTheme,wall:n,size:u,isCover:o,muted:!0,autoPlay:_,handleVideoEnded:()=>{}}):(0,h.jsx)(c.default,{ImageClass:"tb_hc_image",data:t,wallID:i,themeID:n.Personalization.widgetTheme,ownerId:s,size:u,hotspot:!0})]})};var u=i(62245),m=i(5744),p=i(7138),g=i(90905),b=i(32675),w=i(55790),f=i(25810),v=i(89239);const x=e=>{let{author:t,personalization:i,postTime:n,network:o,ThemeRule:a,font:r,rating:l,ownerId:c,instaHash:d}=e;const _=t.username&&t.username.length>0?"@".concat(t.username):"",u=!(!i.postAuthor||t.isInstaUser),m=!(!i.postAuthor||!i.postTime||t.isInstaUser),p=null!==o.id&&""!==o.id;return(0,h.jsxs)("div",{className:"tb_hc_author_wrapper",children:[u?(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(v.default,{network:o,author:t,authorClass:"tb_hc_author_profile"})}):"",(0,h.jsxs)("div",{className:"tb_hc_author_info",children:[u?(0,h.jsx)("div",{className:"tb_hc_authorname tb-cTBfont-".concat(a.font_varient),children:t.name}):"",(0,h.jsxs)("div",{className:"tb_hc_post_info",children:[u?(0,h.jsx)("div",{className:"tb_hc_username",children:_}):"",m?(0,h.jsx)("div",{className:"tb_hc_seprator",children:" "}):"",i.postTime?(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(w.default,{postTime:n,timeClass:"tb_hc_time tb-cTBfont-".concat(a.font_varient),authorColor:a.authorColor})}):""]})]}),p?(0,h.jsx)("div",{className:"tb_hc_social_",children:(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(f.default,{networkClass:"tb_hc_social_ico",network:o,isDefault:1===a.iconType,ThemeRule:a})})}):null]})};var k=i(17739);const j=l.ZQ?null:140;class y extends s.PureComponent{constructor(e){super(e),this.contentRef=e=>{this.setState({height:e})},this.contentRefHidden=e=>{this.setState({hiddenHeight:e})},this.toggleExpand=e=>{e.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this),this.postTrack=s.createRef()}componentDidMount(){(l.nX||l.ig)&&(0,k.YN)(this.postTrack)}render(){const{itemData:e,personalization:t,ThemeRule:i,clickToShowPopUp:n,itemIndex:o,wallID:a,ownerId:r,onClickToCTA:c,wall:d,languageSetting:w}=this.props,{isExpanded:f,hiddenHeight:v,height:y}=this.state,C=1!==e.type,S=!!(e.rating&&e.rating>0),I=e.rating>0?"tb_hc_rating_content":"tb_hc_content",N=1===e.type?"tb_hc_text_post":"",T=1===e.type&&String(e.content).length>0&&t.textDecorate?"tb_hc_text_decoration":"",D=!!e.cta.status,P=t.trimcontent?(0,k.Sv)(e.content,j):e.content,R=v>y;return(0,h.jsx)("div",{"item-id":e.id,id:"tb-hc-post-".concat(e.id),className:"tb_hc_post_wrapper",ref:this.postTrack,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,style:{padding:t.padding/2},children:(0,h.jsxs)("div",{className:"tb_hc_post_in",onClick:n(o,e),children:[(0,h.jsxs)("div",{className:"tb_hc_post_media_wrapp",children:[e.share.status?(0,h.jsx)(m.Z,{share:e.share,shareClass:"tb_hc_share_container",item:e,wallID:a,ownerId:r}):"",C?(0,h.jsx)(_,{itemData:e,wallID:a,wall:d,ownerId:r,size:!!t.trimcontent&&100,isCover:!!t.trimcontent,ThemeRule:i}):null]}),(0,h.jsxs)("div",{className:"tb_hc_contant_wrapper ".concat(N),children:[(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(x,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:t,ThemeRule:i,rating:e.rating,instaHash:e.instaHash})}),D?(0,h.jsxs)("div",{className:"tb_hc_post_cta",onClick:e=>{e.stopPropagation()},children:[(0,h.jsx)(p.Z,{ctaClass:"tb_hc_post_cta_btn",cta:t.cta,postCta:e.cta,item:e,onClickToCTA:c})," "]}):"",S?(0,h.jsx)("div",{className:"tb_hc_rating__",children:(0,h.jsx)(g.Z,{rating:e.rating,network:e.network})}):null,l.ig&&i.hideContent||!l.ig&&!i.hideContent||1==e.type?(0,h.jsxs)("div",{className:"tb_hc_content_wrapper__",children:[l.ZQ?(0,h.jsx)("div",{className:"tb_hc_content_hidden",children:(0,h.jsx)(u.default,{contentClass:"".concat(I," ").concat(T),item:e,content:P,font:i,ThemeRule:i,personalization:t,contentTitle:e.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0},e.id)}):null,(0,h.jsx)(u.default,{contentClass:"".concat(I," ").concat(T),item:e,content:P,font:i,ThemeRule:i,personalization:t,contentTitle:e.contentTitle,contentRefCallBack:this.contentRef,maxLines:f?"":i.lineTrim,isReadMore:!0},e.id),i.lineTrim>0&&R&&l.ZQ?(0,h.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,children:f?w.showLess:w.readMore}):null]}):null]}),l.ig||l.ZQ?i.socialAction?(0,h.jsx)(b.Z,{itemData:e,ThemeRule:i,ThemeID:t.widgetTheme,actionClass:"tb_hc_social_action__"}):null:""]})})}}var C=i(43635);i(37210);class S extends s.Component{constructor(e){super(e),this.state={windowWidth:document.getElementById(k.u$)&&document.getElementById(k.u$).clientWidth?document.getElementById(k.u$).clientWidth:window.innerWidth,sliderHeight:300},this.onScreenLoad=()=>{const{renderId:e}=this.props.renderId;this.setState({windowWidth:e?document.getElementById(e).clientWidth:document.getElementById(k.u$)&&document.getElementById(k.u$).clientWidth?document.getElementById(k.u$).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:e,wall:t,preRender:i,hasMoreData:s,getDataNextSteps:n}=this.props;s&&n(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,i,e.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let e=document.querySelector(".splide__list"),t=document.querySelector(".splide__slide").offsetWidth;const i=document.querySelectorAll(".splide__slide.is-visible").length,s=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),n=Number(s)+(i-1)+i;n>0?(e.style.transition="0s ease",e.style.transform="translateX(-".concat(n*t,"px)")):e.style.transform="translateX(0px)"}),200)},this.autoScrollSlider=(e,t,i,s)=>{const{wall:n}=this.props;if(1==n.Personalization.autoScrollStatus){const t=l.ZQ?e._o.perPage+e.index:e.index;e.length-t===(l.ZQ?1:e._o.perPage)&&this.requestData()}},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){var e=document.querySelector(".tb_hc_post_slider"),t=e?e.offsetHeight:this.state.height;setTimeout((()=>{this.setState({sliderHeight:t});document.querySelectorAll(".splide__slide").forEach((e=>{e.removeAttribute("role")}))}),100);const{postData:i}=this.props;if(i&&1==i.length){let n=document.querySelector(".tb_hc_arrow_left__"),o=document.querySelector(".tb_hc_arrow_right__");function a(){setTimeout((()=>{let e=document.querySelector(".splide__list");null!=e&&(e.style.transform="translateX(0)")}),100)}n&&o&&(document.querySelector(".tb_hc_arrow_left__").style="display:none",document.querySelector(".tb_hc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){a()})),a(),window.addEventListener("resize",a)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let s=document.querySelector("#kt_aside_toggle");null!=s&&s.addEventListener("click",this.reScrolled)}componentDidUpdate(){var e=document.querySelector(".tb_hc_post_slider"),t=e?e.offsetHeight:this.state.height;t+15!=this.state.sliderHeight&&setTimeout((()=>{this.setState({sliderHeight:t+15})}),100)}render(){var e;const{postData:t,completeDataObject:i,wall:s,clickToShowPopUp:o,hasMoreData:r,onClickToCTA:c,parentID:d,keyRender:_,languageSetting:u}=this.props,{sliderHeight:m}=this.state,p=d,{windowWidth:g}=this.state,b=s.ThemeRule.numberOfCoumn,w=s.ThemeRule.mobileColumn,f=s.ThemeRule.slidePost&&!l.ig,v=s.ThemeRule.slideDuration,x=s.Personalization.autoScrollStatus,j=1===s.Personalization.trimcontent,C=l.ZQ?(0,k.b)():!!(g<768||n.tq),S=t&&t.length?C?1:t.length>3?3:t.length:3,I=t&&t.length?C?1:t.length>4?4:t.length:4;C||1===x||t.length;const N=l.ZQ&&void 0!==(null===(e=s.Personalization)||void 0===e?void 0:e.clonePost)&&0===s.Personalization.clonePost?{clones:0}:{},T=1!=x?!(Object.keys(N).length>0)&&"slide":"slide",D=S!=t.length&&I!=t.length||0!=Object.keys(N).length?t:Array(2).fill(t).flat(),P=(s.ThemeRule.lineTrim,!(l.ZQ||!j)),R={...N,type:1!==x&&T,role:"article",label:"social widget",rewind:!0,speed:1e3,loop:1!==x,interval:f?1e3*v:5e3,perPage:b>0?b:C?1:t.length>5?5:t.length,gap:0,perMove:!!l.ZQ&&1,autoplay:!!f,padding:"0",pagination:!1,arrows:!!C||t.length>=(b>0?b:I),fixedHeight:P,breakpoints:{560:{perPage:w>0?w:1,perMove:w>0?w:1,arrows:t.length>=(w>0?w:1)},767:{perPage:b>0?b-3<1?b:b-3:S,arrows:t.length>=(b>0?b-3<1?b:b-3:S)},991:{perPage:b>0?b-4<1?b:b-4:S,arrows:t.length>=(b>0?b-4<1?b:b-4:S)},1200:{perPage:b>0?b-1==0?b:b-1:S,arrows:t.length>=(b>0?b-1==0?b:b-1:S)},1600:{perPage:b>0?b:I,arrows:t.length>=(b>0?b:I)}}};return(0,h.jsx)(h.Fragment,{children:""!=d?(0,h.jsx)("div",{className:"tb_hc_post_container",ref:this.sliderHeight,style:{minHeight:m},children:(0,h.jsxs)(a.tv,{hasTrack:!1,className:"tb_hc_post_slider ".concat(P?"tb_hc_fixed_height":""),options:R,ref:e=>this.inputRefs[p]=e,tag:"section",onMove:this.autoScrollSlider,children:[(0,h.jsx)(a.Gj,{children:D&&D.length>0&&D.map(((e,t)=>{const n=i[e];return(0,h.jsx)(a.jw,{p_id:d,className:"tb_".concat(n.id),children:(0,h.jsx)(y,{ownerId:s.Wall.owner,itemData:n,itemIndex:t,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:o,wallID:s.Wall.id,onClickToCTA:c,wall:s,languageSetting:u})},t)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--prev tb_hc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--next tb_hc_arrow_right__ tb__icon tb-arrow-right-alt","aria-labelledby":"Navigation Next Slide",onClick:l.ig?this.requestData:null,children:" "})]})]})}):null})}}const I=(0,s.memo)((0,o.$j)((e=>({})),(e=>({getDataNextSteps:(t,i,s,n,o,a,r,l)=>e((0,C.Sx)(t,i,s,n,o,a,r,l))})))(S))},2406:(e,t,i)=>{"use strict";t.Ad=void 0;var s=i(84228);var n=i(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return n.getImageSize}});var o=i(22537)},84228:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const s=i(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,n)=>{if("undefined"===typeof window)return n(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return n(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const a=new Image;a.addEventListener("load",(()=>{o&&window.clearTimeout(o),i({width:a.naturalWidth,height:a.naturalHeight})})),a.addEventListener("error",(e=>{o&&window.clearTimeout(o),n("".concat(e.type,": ").concat(e.message))})),a.src=e,t.timeout&&(o=window.setTimeout((()=>n(s.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,i){"use strict";var s=this&&this.__awaiter||function(e,t,i,s){return new(i||(i=Promise))((function(n,o){function a(e){try{l(s.next(e))}catch(t){o(t)}}function r(e){try{l(s.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,r)}l((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const n=i(47313),o=i(65786);t.useImageSize=(e,t)=>{const[i,a]=(0,n.useState)(null),[r,l]=(0,n.useState)(!1),[c,d]=(0,n.useState)(null);return(0,n.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){l(!0),a(null);try{const{width:i,height:s}=yield(0,o.getImageSize)(e,t);a({width:i,height:s})}catch(c){d(c.toString())}finally{l(!1)}}))}),[e,t]),[i,{loading:r,error:c}]}},37210:()=>{},50247:()=>{}}]);