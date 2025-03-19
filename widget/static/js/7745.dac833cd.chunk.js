"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[768,3538,4311,4897,4961,7278,7342,7745],{77278:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(65043),s=r(97628),i=r(70579);class a extends n.PureComponent{render(){const{author:e,authorClass:t,networkId:r,size:n,inView:a}=this.props;return(0,i.jsx)("div",{className:t,style:{overflow:4==r?"visible":""},children:a?(0,i.jsx)("img",{className:`${t}__`,src:e.picture,"aria-label":"author",alt:e.name,width:n||44,height:n||44,onError:t=>{const n=(0,s.Yo)(r),i="#ffffff"==n?"000":n.replace("#","");t.target.src=e.errorPic?e.errorPic:`https://ui-avatars.com/api/?name=${e.name.replace(/\s/g,"")}&background=${i}&color=fff&length=1`}}):null},Math.random())}}},43702:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(65043),s=Object.defineProperty,i=(e,t,r)=>((e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r)(e,"symbol"!==typeof t?t+"":t,r),a=new Map,o=new WeakMap,l=0,d=void 0;function c(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(r=e.root,r?(o.has(r)||(l+=1,o.set(r,l.toString())),o.get(r)):"0"):e[t]}`;var r})).toString()}function h(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const s=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:s,observer:i,elements:o}=function(e){const t=c(e);let r=a.get(t);if(!r){const n=new Map;let s;const i=new IntersectionObserver((t=>{t.forEach((t=>{var r;const i=t.isIntersecting&&s.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=i),null==(r=n.get(t.target))||r.forEach((e=>{e(i,t)}))}))}),e);s=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:i,elements:n},a.set(t,r)}return r}(r),l=o.get(e)||[];return o.has(e)||o.set(e,l),l.push(t),i.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(o.delete(e),i.unobserve(e)),0===o.size&&(i.disconnect(),a.delete(s))}}n.Component;var p=r(22030);const u=e=>{let{children:t}=e;const{ref:r,inView:s,entry:i}=function(){let{threshold:e,delay:t,trackVisibility:r,rootMargin:s,root:i,triggerOnce:a,skip:o,initialInView:l,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var p;const[u,m]=n.useState(null),b=n.useRef(c),[f,_]=n.useState({inView:!!l,entry:void 0});b.current=c,n.useEffect((()=>{if(o||!u)return;let n;return n=h(u,((e,t)=>{_({inView:e,entry:t}),b.current&&b.current(e,t),t.isIntersecting&&a&&n&&(n(),n=void 0)}),{root:i,rootMargin:s,threshold:e,trackVisibility:r,delay:t},d),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,u,i,s,a,o,r,d,t]);const x=null==(p=f.entry)?void 0:p.target,v=n.useRef(void 0);u||!x||a||o||v.current===x||(v.current=x,_({inView:!!l,entry:void 0}));const w=[m,f.inView,f.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}({triggerOnce:!0,threshold:.01});return s&&(0,p._7)(i),t({ref:r,inView:s})}},44961:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(65043),s=r(97628),i=r(70579);const a=n.lazy((()=>r.e(1543).then(r.bind(r,21543))));class o extends n.PureComponent{render(){const{networkId:e,networkClass:t,iconStyle:r,isPopUp:o}=this.props;return 1==(null===r||void 0===r?void 0:r.default)||[7,4,36].includes(e)?(0,i.jsx)(n.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(a,{networkId:e,networkClass:t})}):(0,i.jsx)("div",{className:`${t} tb__icon tb-${(0,s.EC)(e)}`,"aria-label":`post network ${(0,s.Oi)(e)}`,children:(0,i.jsx)("div",{})})}}},60768:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});r(65043);var n=r(70579);const s=e=>{const{sepClass:t}=e;return(0,n.jsx)("div",{className:t,children:"   "})}},84311:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(65043),s=r(26165),i=r(70579);class a extends n.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{Post:r,ThemeInfo:n}=this.props;t.stopPropagation(),(0,s.hq)({type:2,action:2,wall:n.wallID,feed:r.feedId,post:r.referenceId?r.referenceId:r.id,owner:n.ownerId}),(0,s.x9)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{shareClass:e,Post:t}=this.props,{facebook:r,twitter:n,linkedin:s}=null===t||void 0===t?void 0:t.share,a=e=>{let{shareOn:t,icon:r}=e;return(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t),className:`tb_share_ico__ tb__icon tb-${r}`,title:r,children:(0,i.jsx)("div",{})})})};return(0,i.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,i.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,i.jsx)("div",{})}),(0,i.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[r?(0,i.jsx)(a,{shareOn:r,icon:"facebook"}):"",n?(0,i.jsx)(a,{shareOn:n,icon:"twitter"}):"",s?(0,i.jsx)(a,{shareOn:s,icon:"linkedin"}):""]})]})}}},43538:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(65043),s=r(65281),i=r(70579);const a=e=>{const{createdAt:t,timeClass:r}=e;return(0,i.jsx)("div",{className:r,role:"status","aria-label":`post timestamp ${(0,s.fF)(t)}`,children:(0,s.fF)(t)})},o=(0,n.memo)(a)},85008:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(65043),s=r(60303),i=r.n(s),a=r(22030),o=r(77278),l=r(43538),d=r(44961),c=r(60768),h=r(70579);const p=e=>{let{Post:t,CardStyle:r,inView:n}=e;const{author:s,networkId:i}=t,p=s.username&&s.username.length>0?`@${s.username}`:"",u=!(!r.author.status||(0,a.zK)(s.name)),m=!(!u||!r.timeStatus);return(0,h.jsxs)("div",{className:"tb_px_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,h.jsxs)("div",{className:"tb_px_author",children:[u?(0,h.jsx)(o.default,{author:s,networkId:i,authorClass:"tb_px_author_profile",inView:n}):"",(0,h.jsxs)("div",{className:"tb_px_author_info",children:[u?(0,h.jsx)("div",{className:"tb_px_authorname",children:s.name}):"",(0,h.jsxs)("div",{className:"tb_px_post_info",children:[u?(0,h.jsx)("div",{className:"tb_px_username",children:p}):"",m?(0,h.jsx)(c.default,{sepClass:"tb_px_seprator"}):"",r.timeStatus?(0,h.jsx)(l.default,{createdAt:t.createdAt,timeClass:`tb_px_time tb-cTBfont-${r.author.variant}`}):""]})]})]}),(0,h.jsx)("div",{className:"tb_px_social_",children:(0,h.jsx)(d.default,{networkClass:"tb_px_social_ico",networkId:i,iconStyle:r.icon})})]})};var u=r(92908),m=r(36671),b=r(69433),f=r(52141),_=r(95463);const x=e=>{let{Post:t,ThemeStyle:r,index:n,inView:s,wallID:i}=e;const a=!t.hotspot,o=!(![3,5].includes(t.type)||1!=r.autoPlay),l=!(!r.interactive||!u.Vn);return(0,h.jsxs)("div",{className:"tb_px_media_wrap",children:[(0,h.jsx)(f.default,{Post:t,IconClass:"tb_px_media_icon",show:a,hideVideo:r.autoPlay}),o?(0,h.jsx)(b.A,{VideoClass:"tb_px_video",Post:t,size:!1,isCover:!0,controls:!1,autoPlay:!0,muted:!0,observer:!0,index:n,inView:s}):(0,h.jsx)(m.A,{ImageClass:"tb_px_image",Post:t,size:100,hotspot:!1,blurBG:u.HY,observer:!0,index:n,inView:s}),l?(0,h.jsx)(_.A,{Post:t,ThemeStyle:r,wallID:i,interactiveCount:r.interactiveCount}):null]})};var v=r(84311),w=r(43702);const g=e=>{let{postSize:t,clickToShowPopUp:r,index:n,ThemeStyle:s,CardStyle:i,Post:a,ThemeInfo:o}=e;const l=1!==a.type,d=u.aD?{padding:s.spacing}:null,c=a.content.text;return(0,h.jsx)(w.A,{children:e=>{let{ref:u,inView:m}=e;return(0,h.jsx)("div",{ref:u,style:{width:`${t}%`,padding:i.style.padding/2,opacity:m?1:0,transition:m?"opacity .5s ease-in-out":""},className:"tb_px_post_wrapper",role:"article","area-label":a.content.text,"post-id":a.referenceId?a.referenceId:a.id,"feed-id":a.feedId,children:(0,h.jsx)("div",{id:`tb_w_c_id-${a.id}`,"tb-network":a.networkId,"post-id":a.referenceId||a.id,"feed-id":a.feedId,tabIndex:"0","area-label":c,role:"article",children:(0,h.jsxs)("div",{className:"tb_px_post_in",onClick:r(n,a),role:"button","aria-label":"open detail modal for post",tabIndex:"0",style:d,children:[a.share.status?(0,h.jsx)(v.default,{share:a.share,shareClass:"tb_w_c_share_container",Post:a,ThemeInfo:o}):null,l?(0,h.jsx)(x,{Post:a,CardStyle:i,ThemeStyle:s,ThemeInfo:o,index:n,inView:m}):null,(0,h.jsx)("div",{className:"tb_px_contant_wrapper",children:(0,h.jsx)(p,{Post:a,CardStyle:i,ThemeStyle:s,mediaType:l,ThemeInfo:o,inView:m})})]})})})}})};class k extends n.PureComponent{componentDidMount(){this.props.loadBranding()}render(){const{postData:e,completeDataObject:t,CardStyle:r,ThemeStyle:n,ThemeInfo:s,clickToShowPopUp:o,onClickToCTA:l,onClickPopUpSlider:d,containerSize:c}=this.props,p=Math.max((c.width/(r.minimumWidth+20)).toFixed(),1),u=(0,a.GH)(c.width,n.column,p),m=(0,a.Cv)(c.width,u);return(0,h.jsx)(i(),{className:"tb_px_post_container",tabIndex:"0","aria-label":`There are ${e&&e.length>0?e.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_px_post_wrapper",horizontalOrder:!1,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:e&&e.length>0&&e.map(((e,i)=>{const a=t[e];return(0,h.jsx)(g,{postSize:m,clickToShowPopUp:o,onClickToCTA:l,onClickPopUpSlider:d,Post:a,index:i,CardStyle:r,ThemeStyle:n,ThemeInfo:s},i)}))})}}const y=k},97628:(e,t,r)=>{r.d(t,{EC:()=>n,Oi:()=>i,Yo:()=>s});const n=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),s=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),i=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")}}]);
//# sourceMappingURL=7745.dac833cd.chunk.js.map