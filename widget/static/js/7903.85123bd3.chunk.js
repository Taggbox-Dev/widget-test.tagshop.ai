(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1340,4935,7316,7900,7903,7955,8959,9379,9782],{70501:(e,t,i)=>{"use strict";i.d(t,{bs:()=>r});var s=i(8159),o=i(56364),a=i(40329),l=i(32866),n=i(98409);let d=[];const r=e=>{e.persist();const t=e.target,{network:i,itemId:s,themeId:o}=t.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))d.includes(e)||d.push(e);else{const e=document.querySelector(`.tb_media-${s}`);e&&(e.style.display="none")}1===d.length&&c()},c=async()=>{var e;const{postData:t,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!d.length)return;const{User:r,Wall:h}=i,m=null===r||void 0===r?void 0:r.id,v=(a.HY,null===h||void 0===h?void 0:h.id),p=null===(e=d[0])||void 0===e?void 0:e.target,{filterId:b,network:_,itemId:g,load:f}=p.dataset,w=document.querySelector(`img[data-item-id="${g}"]`),x=null!==t&&void 0!==t&&t.completeDataObject?Object.values(t.completeDataObject).filter((e=>e.id===g)):[];if(null!==x&&void 0!==x&&x.length){var k;const e=await(async e=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((t=>e.includes(t)))||await fetch(e).then((e=>e.ok)).catch((()=>!1)))(null===(k=x[0])||void 0===k?void 0:k.postFileNew);if(!e&&w){if([2,18,3,28].includes(+_)&&"0"===f&&"34"!==b&&!p.src.includes("cloud.taggbox.com")){const e=((e,t,i)=>{var s,o,a,l,n;const{UserPlan:d,Wall:r}=t;return{table_name:null===d||void 0===d?void 0:d.db_table,...e,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(a=i[0])||void 0===a?void 0:a.link,postFile:null===(l=i[0])||void 0===l?void 0:l.postFile,mediaFile:null===(n=i[0])||void 0===n?void 0:n.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:v,postId:g,ownerId:m},i,x);try{const{data:t}=await(new n.A).post(a.t5,e,{headers:l.ML}),i=a.HY||a.MH?"":`https://images.${a.QR}/`;p.src="18"===_?`${i}${t.media}`:t.media}catch{p.src=s.gX}finally{u(p)}}else p.src=s.gX,u(p);d.shift(),c()}else{const e=`${s.th}/media/images/no-image.svg`;p.src=e,p.srcset=e,u(p),d.shift()}}},u=e=>e.setAttribute("data-load","1")},81302:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>g});var s=i(88094),o=i(47043),a=i(40329),l=i(94935),n=i(97955),d=i(78959),r=i(15678);const c=e=>{let{Post:t,CardStyle:i}=e;const{author:s,networkId:a}=t,c=s.username&&s.username.length>0?`@${s.username}`:"",u=!(!i.author.status||(0,o.zK)(s.name)),h=!(!u||!i.timeStatus);return(0,r.jsxs)("div",{className:"tb_cp_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,r.jsxs)("div",{className:"tb_cp_author",children:[u?(0,r.jsx)(l.default,{author:s,networkId:a,authorClass:"tb_cp_author_profile"}):"",(0,r.jsxs)("div",{className:"tb_cp_author_info",children:[u?(0,r.jsx)("div",{className:"tb_cp_authorname",children:s.name}):"",(0,r.jsxs)("div",{className:"tb_cp_post_info",children:[u?(0,r.jsx)("div",{className:"tb_cp_username",children:c}):"",h?(0,r.jsx)("div",{className:"tb_cp_seprator",children:" "}):"",i.timeStatus?(0,r.jsx)(n.default,{createdAt:t.createdAt,timeClass:`tb_cp_time tb-cTBfont-${i.author.variant}`}):""]})]})]}),(0,r.jsx)("div",{className:"tb_cp_social_",children:(0,r.jsx)(d.default,{networkClass:"tb_cp_social_ico",networkId:a,iconStyle:i.icon})})]})};var u=i(71816),h=i(49782),m=i(17900);const v=e=>{let{Post:t,ThemeStyle:i,CardStyle:s,index:o}=e;const l=[3,5].includes(t.type)&&1===i.autoPlay||!1,n=!!s.style.ratio&&s.style.ratio,d=!a.HY||!t.hotspot;return(0,r.jsxs)("div",{className:"tb_cp_media_wrap",children:[(0,r.jsx)(m.default,{Post:t,IconClass:"tb_cp_media_icon",show:d,hideVideo:l}),l?(0,r.jsx)(u.A,{VideoClass:"tb_cp_video",Post:t,size:n,isCover:!0,controls:!1,autoPlay:!0,muted:!0,observer:!0,index:o}):(0,r.jsx)(h.default,{ImageClass:"tb_cp_image",Post:t,size:n,hotspot:a.HY,blurBG:a.HY,observer:!0,index:o})]})};var p=i(59379),b=i(499);const _=(0,s.lazy)((()=>i.e(5421).then(i.bind(i,85421)))),g=e=>{let{adjustWidth:t,clickToShowPopUp:i,index:l,onClickToCTA:n,onClickPopUpSlider:d,ThemeStyle:u,CardStyle:h,Post:m,ThemeInfo:g}=e;const f=(0,s.useRef)(null),w={width:`${t}%`,padding:h.style.padding/2},x=1!==m.type;return(0,s.useEffect)((()=>{a.HY&&(0,o._7)(f)}),[]),(0,r.jsx)("div",{id:`tb_cp_id-${m.id}`,className:"tb_cp_post_wrapper",style:w,"tb-network":m.networkId,"tb-product":m.isShopIcon?1:m.isHotspot?2:0,ref:f,"post-id":m.referenceId?m.referenceId:m.id,"feed-id":m.feedId,tabIndex:0,"area-label":m.content.text,role:"article",children:(0,r.jsxs)("div",{className:"tb_cp_post_in",onClick:i(l,m),role:"button","aria-label":"Popup",tabIndex:0,children:[(0,r.jsxs)("div",{className:"tb_cp_post_media_wrapper",children:[h.shareStatus?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(_,{Post:m,ThemeInfo:g,shareClass:"tb_cp_share_container"})}):"",x?(0,r.jsx)(v,{Post:m,CardStyle:h,ThemeStyle:u,index:l}):"",m.ctaStatus?(0,r.jsx)("div",{className:"tb_cp_post_cta",children:(0,r.jsx)(p.default,{ctaClass:"tb_cp_post_cta_btn",Post:m,onClickToCTA:n})}):""]}),(0,r.jsx)("div",{className:"tb_cp_contant_wrapper",children:(0,r.jsx)(c,{Post:m,CardStyle:h,ThemeStyle:u})}),h.actionStatus?(0,r.jsx)(b.A,{Post:m,CardStyle:h,actionClass:"tb_cp_social_action__"}):""]})})}},94935:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var s=i(88094),o=i(96913),a=i(17524),l=i(15678);class n extends s.PureComponent{render(){const{author:e,authorClass:t,networkId:i,size:s}=this.props;return(0,l.jsx)("div",{className:t,style:{overflow:4==i?"visible":""},children:(0,l.jsx)("img",{className:`${t}__`,src:e.picture,"aria-label":"author",alt:(0,a.Ay)(e.name),width:s||44,height:s||44,onError:t=>{const s=(0,o.Yo)(i),a="#ffffff"==s?"000":s.replace("#","");t.target.src=e.errorPic?e.errorPic:`https://ui-avatars.com/api/?name=${e.name.replace(/\s/g,"")}&background=${a}&color=fff&length=1`}})},Math.random())}}},59379:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var s=i(88094),o=i(15678);class a extends s.PureComponent{render(){const{Post:e,ctaClass:t,onClickToCTA:i}=this.props,{cta:s}=e,a={color:null===s||void 0===s?void 0:s.color,backgroundColor:null===s||void 0===s?void 0:s.background};return(0,o.jsxs)("div",{className:t,style:a,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:t=>{t.stopPropagation(),i(e),window.open(`${s.url}`,"_blank")},children:[" ",s.text]})}}const l=a},17900:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var s=i(88094),o=i(40329),a=i(15678);const l=s.lazy((()=>i.e(6300).then(i.bind(i,36300)))),n=e=>{const{Post:t,IconClass:i,isCenter:n,hideVideo:d,show:r}=e,c=!![3,5].includes(t.type),u=7===t.network.id,h=!!(t.mediaList&&t.mediaList.length>0),m=1===t.isAudio,v=!!t.isProduct,p=(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(l,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),b=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),_=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,a.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,a.jsxs)(a.Fragment,{children:[n&&(u||c)?(0,a.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!u?w:"",c&&u?p:""]}):null,v||h||c?(0,a.jsxs)("div",{className:`${i} tb__media_ico_`,children:[v?f:"",h?b:"",n||!c||u||d?"":m?_:g]}):null]}):null}},49782:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var s=i(88094),o=i(19066),a=i(8159),l=i(17524),n=i(70501),d=i(15678);const r=s.lazy((()=>Promise.all([i.e(4076),i.e(1111)]).then(i.bind(i,1111))));class c extends s.PureComponent{constructor(e){var t,i;super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{Post:e,mediaOnly:t}=this.props,i=t||e.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:e,height:t}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:t,width:e})}catch(a){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:a,Post:l}=e;this.state={isVisible:!this.props.observer,height:(null===a||void 0===a?void 0:a.height)||(null===l||void 0===l||null===(t=l.media)||void 0===t?void 0:t.height)||0,width:(null===a||void 0===a?void 0:a.width)||(null===l||void 0===l||null===(i=l.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this.observer=null}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()})),this.observer=new IntersectionObserver((e=>{let[t]=e;t.isIntersecting&&(this.setState({isVisible:!0}),this.observer.disconnect())}),{threshold:.01}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect()}render(){var e,t,i,o;const{ImageClass:c,Post:u,hotspot:h,size:m,blurBG:v,ProductSetting:p,mediaOnly:b}=this.props,{id:_,link:g,products:f}=u,w=b||(null===u||void 0===u?void 0:u.media),{isVisible:x,height:k,width:y,currentWidth:j,currentHeight:C}=this.state,S=m||100*k/y,I={paddingBottom:1===S?null:`${S}%`},P={backgroundImage:x?`url(${null===w||void 0===w||null===(e=w.image)||void 0===e?void 0:e.small})`:null},$=y>k?"100%":y/k*100+"%",N=y>k?k/y*100+"%":"100%",A=u.isProduct&&h,T={width:A&&m?$:null,height:A&&m?N:null};return(0,d.jsxs)("div",{className:`${c}_wrap_`,style:I,ref:this.mediaRef,children:[A&&v?(0,d.jsx)("div",{className:"tb_blur_bg_",style:P}):null,(0,d.jsxs)("div",{className:`${c}_wrap_in`,style:T,children:[A?(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(r,{products:f,ProductSetting:p,hotspot:u.hotspot,dataPost:u})}):null,x?(0,d.jsx)("img",{className:`${c} tb_media-${_}`,src:null===w||void 0===w||null===(t=w.image)||void 0===t?void 0:t.small,srcSet:`${null===w||void 0===w||null===(i=w.image)||void 0===i?void 0:i.small} 1x, ${null===w||void 0===w||null===(o=w.image)||void 0===o?void 0:o.large} 2x`,sizes:`${j}px`,loading:x?"eager":"lazy",decoding:"async",fetchPriority:x?"high":"low","data-id":_,height:C,width:j,"data-height":k,"data-width":y,"data-link":g,onLoad:this.onLoad,onError:e=>{e.target.src=`${a.th}/media/error/no-image.svg`,e.target.srcset=`${a.th}/media/error/no-image.svg`,(0,n.bs)(e)},alt:null===w||void 0===w?void 0:w.title,title:(0,l.Ay)(null===w||void 0===w?void 0:w.title)},_):null]})]})}}},71816:(e,t,i)=>{"use strict";i.d(t,{A:()=>u});var s=i(88094),o=i(25740),a=i.n(o),l=i(40329),n=i(17524),d=i(19066),r=i(15678);class c extends s.Component{constructor(e){super(e),this.mediaSizeCalc=async()=>{const{media:e}=this.props.Post;if((null===e||void 0===e||!e.height)&&(null===e||void 0===e||!e.width))try{var t;const{width:i,height:s}=await(0,d.TW)(null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.small,{signal:this.abortController.signal});this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&"AbortError"!==i.name&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=e=>{this._isMounted&&this.setState({videoLoaded:e})},this.state={loadError:!1,videoLoaded:!1,isVisible:!this.props.observer,calcHeight:0,calcWidth:0},this.mediaRef=s.createRef(),this.observer=null,this._isMounted=!1,this.abortController=new AbortController}componentDidMount(){this._isMounted=!0,this.mediaSizeCalc();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this._isMounted&&this.setState({isVisible:!0})}),{threshold:.1}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}catch(e){this._isMounted&&this.setState({isVisible:!0})}}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect(),this.observer&&this.mediaRef.current&&this.observer.unobserve(this.mediaRef.current),this.abortController.abort()}render(){var e,t,i,s;const{VideoClass:o,Post:d,controls:c,autoPlay:u,handleVideoEnded:h,muted:m,intervalTime:v,size:p}=this.props,{isVisible:b,calcHeight:_,calcWidth:g}=this.state,{media:f,id:w,link:x,networkId:k}=d,y=1===p,j=null!==f&&void 0!==f&&f.height?null===f||void 0===f?void 0:f.height:_,C=null!==f&&void 0!==f&&f.width?null===f||void 0===f?void 0:f.width:g,S={paddingBottom:`${y?null:p||100*j/C}%`};return(0,r.jsx)("div",{className:`${o}_wrap_`,style:S,ref:this.mediaRef,children:(0,r.jsx)(a(),{className:`${o} tb_media-${w}`,url:b?null===f||void 0===f||null===(e=f.video)||void 0===e?void 0:e.full:null===f||void 0===f||null===(t=f.image)||void 0===t?void 0:t.small,"data-height":j,"data-width":C,"data-type":"video","data-network":k,"data-link":x,"data-item-id":w,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":C,"data-height":j,poster:null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.small}},file:{attributes:{preload:"metadata",poster:null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.small}}},loop:!(l.aD&&!l.HY&&null!==d&&void 0!==d&&d.loopStop)&&u,onError:e=>{y&&h&&setTimeout((()=>{this._isMounted&&h&&h()}),1e3*v),this.setVideoLoaded(!1)},autoPlay:b&&u,muted:m,volume:u?1:0,playsinline:!0,onReady:()=>this.setVideoLoaded(!l.HY),playing:b&&u,controls:c||!1,onEnded:h,title:(0,n.Ay)(null===f||void 0===f?void 0:f.title)})})}}const u=(0,s.memo)(c)},78959:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var s=i(88094),o=i(96913),a=i(15678);const l=s.lazy((()=>i.e(6300).then(i.bind(i,36300))));class n extends s.PureComponent{render(){const{networkId:e,networkClass:t,iconStyle:i}=this.props;return 1===(null===i||void 0===i?void 0:i.default)&&![7,4,36].includes(e)?(0,a.jsx)("div",{className:`${t} tb__icon tb-${(0,o.EC)(e)}`,"aria-label":`post network ${(0,o.Oi)(e)}`,children:(0,a.jsx)("div",{})}):(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(l,{networkId:e,networkClass:t})})}}},499:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var s=i(88094),o=i(19066),a=i(96913),l=i(15678);const n=(e,t,i,s)=>{const a={like:`https://twitter.com/intent/favorite?tweet_id=${(0,o.Ph)(t)}`,comment:`https://twitter.com/intent/tweet?in_reply_to=${(0,o.Ph)(t)}`,retweet:`https://twitter.com/intent/retweet?tweet_id=${(0,o.Ph)(t)}`};return 1===e?a[s]:i},d=e=>{let{arialbl:t,hrefClick:i,Icon:s,count:a,itemId:n=0,type:d}=e;return(0,l.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,l.jsxs)("div",{onClick:e=>{e.stopPropagation(),window.open(i,"_blank")},className:`tb_social_action__ico_wrap tb_social_action__ico_wrap_${n}`,"aria-label":`${t} post ${d} count ${(0,o.sl)(a)}`,role:"button",tabIndex:"0",children:[(0,l.jsx)("div",{className:`tb_social_action_ico__ tb__icon tb-${s}`,children:" "}),a>0&&(0,l.jsx)("div",{className:"tb_social_action_counts__",children:(0,o.sl)(a)})]})})};class r extends s.PureComponent{componentDidMount(){try{var e;const{Post:t}=this.props,i=`.tb_social_action__ico_wrap_${null===t||void 0===t?void 0:t.id}`;null===(e=document.querySelector(i))||void 0===e||e.addEventListener("keydown",(function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())}))}catch(t){console.log(t)}}render(){const{Post:e,CardStyle:t,actionClass:i}=this.props,{icon:s,style:o}=t,r={color:1!==s.default?s.color:o.color},c=e.networkId,{comment:u,like:h}=e.count,m=[3,10,7].includes(c)?"like":"heart-outline",v=[1,2,3,7,8,9,10,18].includes(c),p=![29,19].includes(c),b=(0,a.Oi)(c);return[29,26,23,6,5,11,12,15,20,21].includes(c)?null:(0,l.jsx)("div",{className:i,children:(0,l.jsxs)("div",{className:"tb_social_action__",role:"list",children:[v&&(0,l.jsx)(d,{itemId:e.id,arialbl:b,hrefClick:n(c,e.postId,e.link,"like"),Icon:m,iconStyle:r,count:h,type:"like"}),p&&(0,l.jsx)(d,{itemId:e.id,arialbl:b,hrefClick:n(c,e.postId,e.link,"comment"),Icon:"comment",iconStyle:r,count:u,type:"comment"}),1===c&&(0,l.jsx)(d,{itemId:e.id,arialbl:b,hrefClick:n(c,e.postId,e.link,"retweet"),Icon:"retweet",iconStyle:r,count:u,type:"comment"}),(0,l.jsx)(d,{arialbl:b,itemId:e.id,hrefClick:e.link,Icon:"eye",iconStyle:r,count:0,type:"view"})]})})}}},97955:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var s=i(88094),o=i(19066),a=i(15678);const l=e=>{const{createdAt:t,timeClass:i}=e;return(0,a.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,o.fF)(t)}`,children:(0,o.fF)(t)})},n=(0,s.memo)(l)},96913:(e,t,i)=>{"use strict";i.d(t,{EC:()=>s,Oi:()=>a,Yo:()=>o});const s=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),o=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),a=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")},95098:()=>{}}]);