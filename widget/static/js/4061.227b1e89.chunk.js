"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[531,548,1320,2663,2685,4061,5044,5537,6723,7949,8167],{45285:(t,e,i)=>{i.d(e,{bs:()=>d});var a=i(80415),s=i(296),o=i(66345),l=i(28322),n=i(14313);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:a,themeId:s}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(s))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${a}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=s.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:u}=i,_=null===d||void 0===d?void 0:d.id,m=(o.HY,null===u||void 0===u?void 0:u.id),v=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:p,network:b,itemId:w,load:g}=v.dataset,x=document.querySelector(`img[data-item-id="${w}"]`),f=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===w)):[];if(null!==f&&void 0!==f&&f.length){var k;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(k=f[0])||void 0===k?void 0:k.postFileNew);if(!t&&x){if([2,18,3,28].includes(+b)&&"0"===g&&"34"!==p&&!v.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var a,s,o,l,n;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(a=i[0])||void 0===a?void 0:a.feedId,type:null===(s=i[0])||void 0===s?void 0:s.type,link:null===(o=i[0])||void 0===o?void 0:o.link,postFile:null===(l=i[0])||void 0===l?void 0:l.postFile,mediaFile:null===(n=i[0])||void 0===n?void 0:n.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:m,postId:w,ownerId:_},i,f);try{const{data:e}=await(new n.A).post(o.t5,t,{headers:l.ML}),i=o.HY||o.MH?"":`https://images.${o.QR}/`;v.src="18"===b?`${i}${e.media}`:e.media}catch{v.src=a.gX}finally{h(v)}}else v.src=a.gX,h(v);r.shift(),c()}else{const t=`${a.th}/media/images/no-image.svg`;v.src=t,v.srcset=t,h(v),r.shift()}}},h=t=>t.setAttribute("data-load","1")},78167:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var a=i(9950),s=i(91697),o=i(44414);class l extends a.PureComponent{constructor(t){super(t),this.state={errorPic:!1}}render(){const{author:t,authorClass:e,networkId:i,size:a,inView:l}=this.props,{errorPic:n}=this.state;return(0,o.jsx)("div",{className:e,style:{overflow:4!=i||n?"":"visible"},children:l?(0,o.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:a||44,height:a||44,onError:e=>{this.setState({errorPic:!0});const a=(0,s.Yo)(i),o="#ffffff"==a?"000":a.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${o}&color=fff&length=1`}}):null},Math.random())}}},60531:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var a=i(9950),s=i(44414);class o extends a.PureComponent{render(){const{Post:t,ctaClass:e,onClickToCTA:i}=this.props,{cta:a}=t,o={color:null===a||void 0===a?void 0:a.color,backgroundColor:null===a||void 0===a?void 0:a.background};return(0,s.jsxs)("div",{className:e,style:o,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),i(t),window.open(`${a.url}`,"_blank")},children:[" ",a.text]})}}const l=o},78262:(t,e,i)=>{i.d(e,{A:()=>d});var a=i(9950),s=i(76506),o=i(80415),l=i(45285),n=i(44414);const r=(0,a.lazy)((()=>Promise.all([i.e(1823),i.e(9874)]).then(i.bind(i,89874))));class d extends a.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var a;const{width:t,height:e}=await(0,s.TW)(null===i||void 0===i||null===(a=i.image)||void 0===a?void 0:a.small);this._isMounted&&this.setState({height:e,width:t})}catch(o){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:o,Post:l}=t;this.state={height:(null===o||void 0===o?void 0:o.height)||(null===l||void 0===l||null===(e=l.media)||void 0===e?void 0:e.height)||0,width:(null===o||void 0===o?void 0:o.width)||(null===l||void 0===l||null===(i=l.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=a.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,s,d;const{height:c,width:h}=this.state,{ImageClass:u,Post:_,hotspot:m,size:v,blurBG:p,mediaOnly:b,inView:w,multiKey:g,index:x,ProductSetting:f}=this.props,{id:k,link:j,products:C}=_,y=b||(null===_||void 0===_?void 0:_.media),{currentWidth:N,currentHeight:I}=this.state,$=v||100*c/h,T={paddingBottom:1===$?null:`${$}%`},P={backgroundImage:w?`url(${null===y||void 0===y||null===(t=y.image)||void 0===t?void 0:t.small})`:null},S=h>c?"100%":h/c*100+"%",A=h>c?c/h*100+"%":"100%",R=_.isProduct&&m&&_.hotspot&&(null===f||void 0===f||null===(e=f.Hotspot)||void 0===e?void 0:e.status),D={width:R&&v?S:null,height:R&&v?A:null};return(0,n.jsxs)("div",{className:`${u}_wrap_`,style:T,ref:this.mediaRef,children:[R&&p?(0,n.jsx)("div",{className:"tb_blur_bg_",style:P}):null,(0,n.jsxs)("div",{className:`${u}_wrap_in`,style:D,children:[R?(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(r,{products:this.props.multiPic?_.mediaList[g].product:C,hotspot:_.hotspot,Post:_,showTooltip:null},x)}):null,w?(0,n.jsx)("img",{className:`${u} tb_media-${k}`,src:null===y||void 0===y||null===(i=y.image)||void 0===i?void 0:i.small,srcSet:`${null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.small} 1x, ${null===y||void 0===y||null===(d=y.image)||void 0===d?void 0:d.large} 2x`,sizes:`${N}px`,loading:w?"eager":"lazy",decoding:"async",fetchPriority:w?"high":"low","data-id":k,height:I,width:N,"data-height":c,"data-width":h,"data-link":j,onLoad:this.onLoad,onError:t=>{t.target.src=`${o.th}/media/error/no-image.svg`,t.target.srcset=`${o.th}/media/error/no-image.svg`,(0,l.bs)(t)},alt:null===y||void 0===y?void 0:y.title,title:null===y||void 0===y?void 0:y.title},`${k}-${c}-${h}-${w}`):null]})]})}}},3720:(t,e,i)=>{i.d(e,{A:()=>c});var a=i(9950),s=i(38092),o=i.n(s),l=i(66345),n=i(76506),r=i(44414);class d extends a.Component{constructor(t){super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:a}=await(0,n.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small);this._isMounted&&this.setState({calcHeight:a,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=a.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,a,s,n;const{VideoClass:d,Post:c,controls:h,autoPlay:u,handleVideoEnded:_,muted:m,intervalTime:v,size:p,inView:b}=this.props,{calcHeight:w,calcWidth:g,currentWidth:x,currentHeight:f}=this.state,{media:k,id:j,link:C,networkId:y}=c,N=1===p,I=null!==k&&void 0!==k&&k.height?null===k||void 0===k?void 0:k.height:w,$=null!==k&&void 0!==k&&k.width?null===k||void 0===k?void 0:k.width:g,T={paddingBottom:`${N?null:p||100*I/$}%`};return(0,r.jsx)("div",{className:`${d}_wrap_`,style:T,ref:this.mediaRef,children:(0,r.jsx)(o(),{className:`${d} tb_media-${j}`,url:null!==k&&void 0!==k&&null!==(t=k.video)&&void 0!==t&&t.clip?null===k||void 0===k||null===(e=k.video)||void 0===e?void 0:e.clip:b?null===k||void 0===k||null===(i=k.video)||void 0===i?void 0:i.full:null===k||void 0===k||null===(a=k.image)||void 0===a?void 0:a.small,"data-height":w,"data-width":g,"data-type":"video","data-network":y,"data-link":C,"data-item-id":j,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":$,"data-height":I,poster:null===k||void 0===k||null===(s=k.image)||void 0===s?void 0:s.small}},file:{attributes:{preload:"metadata",poster:null===k||void 0===k||null===(n=k.image)||void 0===n?void 0:n.small,height:f,width:x}}},loop:!(l.aD&&!l.HY&&null!==c&&void 0!==c&&c.loopStop)&&u,onError:t=>{N&&_&&setTimeout((()=>{this._isMounted&&_&&_()}),1e3*v),this.setVideoLoaded(!1)},autoPlay:b&&u?1:0,muted:m,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!l.HY),playing:b&&u?1:0,controls:h||!1,onEnded:_,title:null===k||void 0===k?void 0:k.title},`${j}-${f}-${g}-${b}`)})}}const c=(0,a.memo)(d)},15537:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(9950),s=i(66345),o=i(44414);const l=a.lazy((()=>i.e(620).then(i.bind(i,20620)))),n=t=>{const{Post:e,IconClass:i,isCenter:n,hideVideo:r,show:d}=t,c=!![3,5].includes(e.type),h=7===e.network.id,u=!!(e.mediaList&&e.mediaList.length>0),_=1===e.isAudio,m=!!e.isProduct,v=(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(l,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),p=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),w=(0,o.jsx)("div",{className:"tb__icon tb-"+(s.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),g=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),x=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return d?(0,o.jsxs)(o.Fragment,{children:[n&&(h||c)?(0,o.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!h?x:"",c&&h?v:""]}):null,m||u||c?(0,o.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?g:"",u?p:"",n||!c||h||r?"":_?b:w]}):null]}):null}},92663:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(9950),s=i(91697),o=i(44414);const l=a.lazy((()=>i.e(620).then(i.bind(i,20620))));class n extends a.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:i}=this.props;return 505==(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(t)?(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(l,{networkId:t,networkClass:e})}):(0,o.jsx)("div",{className:`${e} tb__icon tb-${(0,s.EC)(t)}`,"aria-label":`post network ${(0,s.Oi)(t)}`,children:(0,o.jsx)("div",{})})}}},71320:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var a=i(9950),s=i(96241),o=i(44414);class l extends a.PureComponent{constructor(t){super(t),this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1},this.toggleExpand=this.toggleExpand.bind(this),this.contentRef=a.createRef()}render(){const{CardStyle:t,contentClass:e,Content:i,Lines:a,isReadMore:l}=this.props,n={WebkitLineClamp:this.state.isExpanded?void 0:a,textAlign:t.style.textAlign};return(0,o.jsxs)("div",{className:`${e}${t.style.variant?` tb-cTBfont-${t.style.variant}`:""}`,children:[(0,o.jsx)("div",{className:"tb_content_text"+(a>0?"tb_content_trim":""),ref:this.contentRef,style:n,children:(0,o.jsx)(s.A,{Content:i,CardStyle:t})}),l?(0,o.jsxs)("div",{onClick:this.toggleExpand,className:"tb_read_more_",children:[" ","Read More"]}):null]})}}},96241:(t,e,i)=>{i.d(e,{A:()=>c});var a=i(9950),s=i(88740),o=i(44414),l=function(t){return"string"===typeof t};const n=(t,e,i)=>{if(!l(t)&&!a.isValidElement(t))return t;l(e)&&(e=function(t){var e=/[\\^$.*+?()[\]{}|]/g,i=RegExp(e.source);return t&&i.test(t)?t.replace(e,"\\$&"):t}(e)),e instanceof RegExp||(e=new RegExp(e,"g"));let s,o=[],n=0,r=[];for(;null!==(s=e.exec(t));)r.push(s);if(e.lastIndex=0,0===r.length)return t;r.forEach(((e,a)=>{const s=t.slice(n,e.index);s&&o.push(s);const l=i(...e,a,n);o.push(l),n=e.index+e[0].length}));const d=t.slice(n);return d&&o.push(d),function(t){var e=[];return t.forEach((function(t){Array.isArray(t)?e=e.concat(t):e.push(t)})),e}(o)},r=t=>{let{Content:e,children:i}=t;return(0,o.jsxs)(o.Fragment,{children:[e.title?(0,o.jsx)("div",{className:"tb_bold_txt__",children:(0,s.Ay)(e.title)}):null,i]})},d=t=>{let{Content:e,CardStyle:i}=t;const a={color:null===i||void 0===i?void 0:i.hashtag.color,backgroundColor:1==(null===i||void 0===i?void 0:i.hashtag.backgroundStatus)?null===i||void 0===i?void 0:i.hashtag.background:null},l=(null===e||void 0===e?void 0:e.feedName)||null;return null!==i&&void 0!==i&&i.hashtag.colorStatus?1===(null===i||void 0===i?void 0:i.hashtag.allHashtag)?(0,o.jsx)(r,{Content:e,children:n((0,s.Ay)(null===e||void 0===e?void 0:e.text),/#(\w+)/g,((t,e)=>(0,o.jsx)("div",{className:"tb_highlight",style:a,children:t},`${e}`)))}):0===(null===i||void 0===i?void 0:i.hashtag.allHashtag)&&1===(null===i||void 0===i?void 0:i.hashtag.feedHashtag)&&l?(0,o.jsx)(r,{Content:e,children:n((0,s.Ay)(null===e||void 0===e?void 0:e.text),l,((t,e)=>(0,o.jsx)("div",{className:"tb_highlight",style:a,children:t},`${e}`)))}):(0,o.jsx)(r,{Content:e,children:(0,s.Ay)(null===e||void 0===e?void 0:e.text)}):(0,o.jsx)(r,{Content:e,children:(0,s.Ay)(null===e||void 0===e?void 0:e.text)})},c=(0,a.memo)(d)},55507:(t,e,i)=>{i.d(e,{A:()=>r});var a=i(9950),s=i(44414);const o={3:{className:"tb-default-star",color:"#1b74e4"},19:{className:"tb-yelp-star",color:"#e00707"},23:{className:"tb-default-star",color:"#ff385c"},28:{className:"tb-default-star",color:"#F8B90C"},29:{className:"tb-default-star",color:"#613983"},33:{className:"tb-trustpilot",color:"#000"},35:{className:"tb-star-fill",color:"#34E0A1"},default:{className:"tb-default-star",color:"#F8B90C"}},l=(0,a.memo)((t=>{let{networkId:e,index:i,rating:a}=t;const{className:l,color:n}=o[e]||o.default,r=i<a;return(0,s.jsx)("div",{className:`tb_rating_ico__ tb__icon ${l}`,style:{color:r?n:""},"data-network":e,role:"status","aria-label":"Ratings","data-filled":r?"1":"0",children:(0,s.jsx)("div",{})},i)})),n=t=>{let{rating:e,networkId:i,className:a}=t;return(0,s.jsx)("div",{className:a,"aria-hidden":!0,children:e?Array.from({length:5},((t,a)=>(0,s.jsx)(l,{index:a,rating:e,networkId:i},a))):null})},r=(0,a.memo)(n)},37949:(t,e,i)=>{i.r(e),i.d(e,{default:()=>s});i(9950);var a=i(44414);const s=t=>{const{sepClass:e}=t;return(0,a.jsx)("div",{className:e,children:"   "})}},72685:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var a=i(9950),s=i(21850),o=i(44414);class l extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:i,ThemeInfo:a}=this.props;e.stopPropagation(),(0,s.hq)({type:2,action:2,wall:a.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:a.ownerId}),(0,s.x9)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:i,twitter:a,linkedin:s}=null===e||void 0===e?void 0:e.share,l=t=>{let{shareOn:e,icon:i}=t;return(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(e),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,o.jsx)("div",{})})})};return(0,o.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,o.jsx)(l,{shareOn:i,icon:"facebook"}):"",a?(0,o.jsx)(l,{shareOn:a,icon:"twitter"}):"",s?(0,o.jsx)(l,{shareOn:s,icon:"linkedin"}):""]})]})}}},6723:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(9950),s=i(76506),o=i(44414);const l=t=>{const{createdAt:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,s.fF)(e)}`,children:(0,s.fF)(e)})},n=(0,a.memo)(l)},84061:(t,e,i)=>{i.r(e),i.d(e,{default:()=>N});var a=i(9950),s=i(78167),o=i(6723),l=i(92663),n=i(37949),r=i(44414);const d=t=>{let{author:e,personalization:i,postTime:a,network:d,ThemeRule:c}=t;const h=e.username&&e.username.length>0?`@${e.username}`:"",u=!(!i.postAuthor||e.isInstaUser),_=!(!i.postAuthor||!i.postTime||e.isInstaUser);return(0,r.jsxs)("div",{className:"tb_wt_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,r.jsxs)("div",{className:"tb_wt_author",children:[u?(0,r.jsx)(s.default,{author:e,network:d,authorClass:"tb_wt_author_profile"}):"",(0,r.jsxs)("div",{className:"tb_wt_author_info",children:[u?(0,r.jsx)("div",{className:"tb_wt_authorname",children:e.name}):"",(0,r.jsxs)("div",{className:"tb_wt_post_info",children:[u?(0,r.jsx)("div",{className:"tb_wt_username",children:h}):"",_?(0,r.jsx)(n.default,{sepClass:"tb_wt_seprator"}):"",i.postTime?(0,r.jsx)(o.default,{postTime:a,timeClass:`tb_wt_time tb-cTBfont-${c.font_varient}`,authorColor:c.authorColor}):""]})]})]}),(0,r.jsx)("div",{className:"tb_wt_social_",children:(0,r.jsx)(l.default,{networkClass:"tb_wt_social_ico",network:d,isDefault:1===c.iconType,ThemeRule:c})})]})};var c=i(66345),h=i(15537),u=i(78262),_=i(3720);const m=t=>{let{itemData:e,wallID:i,ownerId:a,wall:s}=t;const o=!(![3,4].includes(e.type)||1!=s.ThemeRule.autoPlay),l=c.MH&&s.ThemeRule.aspectImageRatio||!1;return(0,r.jsxs)("div",{className:"tb_wt_media_wrap",role:"button",tabIndex:"0","aria-label":"Post Pop up media wrapper",children:[(0,r.jsx)(h.default,{itemData:e,IconClass:"tb_wt_media_icon",show:!0}),o?(0,r.jsx)(_.A,{VideoClass:"tb_wt_video",data:e,wallID:i,themeID:null===s||void 0===s?void 0:s.ThemeInfo.id,ownerId:a,size:l,isCover:!0,controls:!1,autoPlay:!1,muted:!0,observer:!0}):(0,r.jsx)(u.A,{ImageClass:"tb_wt_image",data:e,wallID:i,themeID:null===s||void 0===s?void 0:s.ThemeInfo.id,ownerId:a,size:l,ThemeRule:s.ThemeRule,observer:!0})]})};var v=i(71320),p=i(60531),b=i(55507);const w=t=>{let{share:e,shareClass:i}=t;const a=(t,e)=>{t.stopPropagation(),e()};return(0,r.jsx)("div",{className:i,children:(0,r.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,r.jsx)("div",{className:"tb_wt_share_list",children:(0,r.jsx)("div",{onClick:t=>a(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,r.jsx)("div",{className:"tb_wt_share_list",children:(0,r.jsx)("div",{onClick:t=>a(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,r.jsx)("div",{className:"tb_wt_share_list",children:(0,r.jsx)("div",{onClick:t=>a(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var g=i(76506);const x=(t,e,i)=>1===t?`https://twitter.com/intent/favorite?tweet_id=${(0,g.Ph)(e)}`:i,f=(t,e,i)=>1===t?`https://twitter.com/intent/tweet?in_reply_to=${(0,g.Ph)(e)}`:i,k=t=>{let{itemData:e,ThemeRule:i}=t;const a=e.network.id,s=3===a||10===a?"like":"heart-outline";return(0,r.jsx)(r.Fragment,{children:12!==a&&15!==a&&20!==a&&21!==a&&29!==a?(0,r.jsxs)("div",{className:"tb_wt_social_action__",role:"navigation",children:[(0,r.jsx)("div",{className:"tb_wt_social_action__list",children:(0,r.jsxs)("a",{href:x(a,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":`Post Like Url ${x(a,e.postId,e.link)}`,title:"Favorite",children:[(0,r.jsx)("div",{className:`tb_wt_social_action_ico__ tb__icon tb-${s}`,children:" "}),e.like_count>0?(0,r.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,r.jsx)("div",{className:"tb_wt_social_action__list",children:(0,r.jsxs)("a",{href:f(a,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":`Post comment Url ${f(a,e.postId,e.link)}`,title:"Comment",children:[(0,r.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,r.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),1===a?(0,r.jsx)("div",{className:"tb_wt_social_action__list",children:(0,r.jsx)("a",{href:`https://twitter.com/intent/retweet?tweet_id=${(0,g.Ph)(e.postId)}`,target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":`Post comment Url https://twitter.com/intent/retweet?tweet_id=${(0,g.Ph)(e.postId)}`,title:"Tweet",children:(0,r.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})};var j=i(52867),C=i(72685);const y=t=>{let{itemData:e,personalization:i,ThemeRule:a,wallID:s,clickToShowPopUp:o,itemIndex:l,ownerId:n,onClickToCTA:h,wall:u,ThemeInfo:_}=t;const g=_.id,x=!([53,57,85].includes(g)&&c.MH||1===e.type),f=e.rating>0,y=e.rating>0?"tb_wt_rating_content":"tb_wt_content",N=1===e.type&&i.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",I=i.trimcontent?(0,j.Ex)(e.content,200):e.content;return(0,r.jsx)("div",{id:`tb-wt-post-${e.id}`,className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":e.isShopIcon?1:e.isHotspot?2:0,role:"article","aria-label":`Post ${parseInt(l)+1},${I}`,tabIndex:"0",children:(0,r.jsxs)("div",{className:"tb_wt_post_in",onClick:o(l,e),role:"button","aria-label":"Popup",tabIndex:"0",children:[(0,r.jsx)(d,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:i,ThemeRule:a,mediaType:x}),(0,r.jsxs)("div",{className:"tb_wt_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[x?(0,r.jsx)(m,{itemData:e,wallID:s,ownerId:n,wall:u},`img${l}_${e.id}`):"",f?(0,r.jsxs)("div",{className:"tb_wt_rating__",children:[(0,r.jsx)(b.A,{rating:e.rating,network:e.network})," "]}):""]}),(0,r.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[e.share.status?(0,r.jsx)(C.default,{share:e.share,shareClass:"tb_wt_share_container",ThemeInfo:_,Post:e}):"",e.ctaStatus?(0,r.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,r.jsx)(p.default,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",a.hideContent&&1!=e.type?"":(0,r.jsx)(v.default,{contentClass:`${y} ${N}`,item:e,content:I,font:a,ThemeRule:a,personalization:i,contentTitle:e.contentTitle}),(0,r.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!a.socialAction?{justifyContent:"flex-end"}:{},children:[a.socialAction?(0,r.jsx)(k,{itemData:e,ThemeRule:a}):"",e.share.status?(0,r.jsx)(w,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},N=t=>{let{postData:e,completeDataObject:i,adjustWidth:s,CardStyle:o,ThemeStyle:l,ProductSetting:n,ThemeInfo:d,clickToShowPopUp:c,onClickToCTA:h,loadBranding:u}=t;return(0,a.useEffect)((()=>{u()}),[]),(0,r.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const a=i[t];return(0,r.jsx)(y,{ownerId:d.ownerId,itemData:a,itemIndex:e,adjustWidth:s,CardStyle:o,ThemeStyle:l,ProductSetting:n,wallID:d.wallId,clickToShowPopUp:c,onClickToCTA:h},`wdt_crd_${e}_${t.id}`)}))})}},91697:(t,e,i)=>{i.d(e,{EC:()=>a,Oi:()=>o,Yo:()=>s});const a=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),s=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),o=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")}}]);