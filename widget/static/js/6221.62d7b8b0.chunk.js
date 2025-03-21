"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[768,3538,4311,4897,4961,6221,7278,7342,9410],{77278:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var s=n(65043),i=n(97628),r=n(70579);class o extends s.PureComponent{render(){const{author:e,authorClass:t,networkId:n,size:s,inView:o}=this.props;return(0,r.jsx)("div",{className:t,style:{overflow:4==n?"visible":""},children:o?(0,r.jsx)("img",{className:`${t}__`,src:e.picture,"aria-label":"author",alt:e.name,width:s||44,height:s||44,onError:t=>{const s=(0,i.Yo)(n),r="#ffffff"==s?"000":s.replace("#","");t.target.src=e.errorPic?e.errorPic:`https://ui-avatars.com/api/?name=${e.name.replace(/\s/g,"")}&background=${r}&color=fff&length=1`}}):null},Math.random())}}},43702:(e,t,n)=>{n.d(t,{A:()=>_});var s=n(65043),i=Object.defineProperty,r=(e,t,n)=>((e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),o=new Map,a=new WeakMap,l=0,c=void 0;function d(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(a.has(n)||(l+=1,a.set(n,l.toString())),a.get(n)):"0"):e[t]}`;var n})).toString()}function u(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;if("undefined"===typeof window.IntersectionObserver&&void 0!==s){const i=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:r,elements:a}=function(e){const t=d(e);let n=o.get(t);if(!n){const s=new Map;let i;const r=new IntersectionObserver((t=>{t.forEach((t=>{var n;const r=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=r),null==(n=s.get(t.target))||n.forEach((e=>{e(r,t)}))}))}),e);i=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:r,elements:s},o.set(t,n)}return n}(n),l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(t),r.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(a.delete(e),r.unobserve(e)),0===a.size&&(r.disconnect(),o.delete(i))}}s.Component;var h=n(22030);const _=e=>{let{children:t}=e;const{ref:n,inView:i,entry:r}=function(){let{threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:r,triggerOnce:o,skip:a,initialInView:l,fallbackInView:c,onChange:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var h;const[_,p]=s.useState(null),m=s.useRef(d),[b,w]=s.useState({inView:!!l,entry:void 0});m.current=d,s.useEffect((()=>{if(a||!_)return;let s;return s=u(_,((e,t)=>{w({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&o&&s&&(s(),s=void 0)}),{root:r,rootMargin:i,threshold:e,trackVisibility:n,delay:t},c),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,_,r,i,o,a,n,c,t]);const f=null==(h=b.entry)?void 0:h.target,v=s.useRef(void 0);_||!f||o||a||v.current===f||(v.current=f,w({inView:!!l,entry:void 0}));const x=[p,b.inView,b.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}({triggerOnce:!0,threshold:.01});return i&&(0,h._7)(r),t({ref:n,inView:i})}},44961:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var s=n(65043),i=n(97628),r=n(70579);const o=s.lazy((()=>n.e(1543).then(n.bind(n,21543))));class a extends s.PureComponent{render(){const{networkId:e,networkClass:t,iconStyle:n,isPopUp:a}=this.props;return 505==(null===n||void 0===n?void 0:n.default)||[7,4,36].includes(e)?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(o,{networkId:e,networkClass:t})}):(0,r.jsx)("div",{className:`${t} tb__icon tb-${(0,i.EC)(e)}`,"aria-label":`post network ${(0,i.Oi)(e)}`,children:(0,r.jsx)("div",{})})}}},89410:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var s=n(65043),i=n(92908),r=n(80229),o=n(65281),a=n(70579);class l extends s.PureComponent{constructor(e){super(e),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var n,s;const e=(null===(n=this.contentRef)||void 0===n||null===(s=n.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{CardStyle:e,contentClass:t,content:n,contentTitle:s,maxLines:l,isReadMore:c}=this.props,d=e.content.trimcontent&&!i.HY?e.content.trimcontent:0,u={WebkitLineClamp:l,textAlign:e.style.textAlign},h=(0,o.w)(n),_=`${t} ${c?"":""+(d?` tb_content_line-${d}`:"")} tb-cTBfont-${e.style.variant}`;return(0,a.jsxs)("div",{className:_,ref:this.contentRef,style:u,children:[s?(0,a.jsx)("div",{className:"tb_bold_txt__",children:(0,r.Ay)(s)}):null,(0,r.Ay)(h)]})}}},60768:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(65043);var s=n(70579);const i=e=>{const{sepClass:t}=e;return(0,s.jsx)("div",{className:t,children:"   "})}},84311:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var s=n(65043),i=n(26165),r=n(70579);class o extends s.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{Post:n,ThemeInfo:s}=this.props;t.stopPropagation(),(0,i.hq)({type:2,action:2,wall:s.wallID,feed:n.feedId,post:n.referenceId?n.referenceId:n.id,owner:s.ownerId}),(0,i.x9)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{shareClass:e,Post:t}=this.props,{facebook:n,twitter:s,linkedin:i}=null===t||void 0===t?void 0:t.share,o=e=>{let{shareOn:t,icon:n}=e;return(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(t),className:`tb_share_ico__ tb__icon tb-${n}`,title:n,children:(0,r.jsx)("div",{})})})};return(0,r.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,r.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,r.jsx)("div",{})}),(0,r.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[n?(0,r.jsx)(o,{shareOn:n,icon:"facebook"}):"",s?(0,r.jsx)(o,{shareOn:s,icon:"twitter"}):"",i?(0,r.jsx)(o,{shareOn:i,icon:"linkedin"}):""]})]})}}},43538:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var s=n(65043),i=n(65281),r=n(70579);const o=e=>{const{createdAt:t,timeClass:n}=e;return(0,r.jsx)("div",{className:n,role:"status","aria-label":`post timestamp ${(0,i.fF)(t)}`,children:(0,i.fF)(t)})},a=(0,s.memo)(o)},81364:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var s=n(65043),i=n(74975),r=n(92908),o=n(22030),a=n(77278),l=n(43538),c=n(44961),d=n(60768),u=n(70579);const h=e=>{let{Post:t,CardStyle:n,inView:s}=e;const{author:i,networkId:r}=t,h=i.username&&i.username.length>0?`@${i.username}`:"",_=!(!n.author.status||(0,o.zK)(i.name)),p=!(!_||!n.timeStatus);return(0,u.jsxs)("div",{className:"tb_w_e_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,u.jsxs)("div",{className:"tb_w_e_author",children:[_?(0,u.jsx)(a.default,{author:i,networkId:r,authorClass:"tb_w_e_author_profile",size:46,inView:s}):"",(0,u.jsxs)("div",{className:"tb_w_e_author_info",children:[_?(0,u.jsx)("div",{className:"tb_w_e_authorname",children:i.name}):"",(0,u.jsxs)("div",{className:"tb_w_e_post_info",children:[_?(0,u.jsx)("div",{className:"tb_w_e_username",children:h}):"",p?(0,u.jsx)(d.default,{sepClass:"tb_w_e_seprator"}):"",n.timeStatus?(0,u.jsx)(l.default,{createdAt:t.createdAt,timeClass:`tb_w_e_time tb-cTBfont-${n.author.variant}`}):""]})]})]}),(0,u.jsx)("div",{className:"tb_w_e_social_",children:(0,u.jsx)(c.default,{networkClass:"tb_w_e_social_ico",networkId:r,iconStyle:n.icon})})]})};var _=n(36671),p=n(69433),m=n(52141),b=n(95463);const w=e=>{let{Post:t,ThemeStyle:n,index:s,inView:i,wallID:o}=e;const a=!t.hotspot,l=!(![3,5].includes(t.type)||1!=n.autoPlay),c=!(!n.interactive||!r.Vn);return(0,u.jsxs)("div",{className:"tb_w_e_media_wrap",children:[(0,u.jsx)(m.default,{Post:t,IconClass:"tb_w_e_media_icon",show:a,hideVideo:n.autoPlay}),l?(0,u.jsx)(p.A,{VideoClass:"tb_w_e_video",Post:t,size:100,isCover:!0,controls:!1,autoPlay:!0,muted:!0,observer:!0,index:s,inView:i}):(0,u.jsx)(_.A,{ImageClass:"tb_w_e_image",Post:t,size:100,hotspot:!1,blurBG:r.HY,observer:!0,index:s,inView:i}),c?(0,u.jsx)(b.A,{Post:t,ThemeStyle:n,wallID:o,interactiveCount:n.interactiveCount}):null]})};var f=n(89410),v=n(84311),x=n(43702);const y=s.lazy((()=>n.e(6575).then(n.bind(n,96575)))),g=s.lazy((()=>n.e(7005).then(n.bind(n,57005)))),k=e=>{let{postSize:t,clickToShowPopUp:n,index:i,onClickToCTA:a,ThemeStyle:l,CardStyle:c,Post:d,ThemeInfo:_,counter:p}=e;null===_||void 0===_||_.ownerId;const m=_.id,b=1!==d.type,k=d.rating>0,C=d.rating>0?"tb_w_c_rating_content":"tb_w_c_content",j=1===d.type&&c.style.textDecoration?"tb_w_c_text_decoration tb_w_c_text_post":"",I=c.content.trimcontent?(0,o.Ex)(d.content.text,50):d.content.text,S=!(!d.ctaStatus&&!l.shareOption||!c.actionStatus||r.aD);return(0,u.jsx)(x.A,{children:e=>{let{ref:o,inView:a}=e;return(0,u.jsx)("div",{ref:o,style:{width:`${t}%`,padding:c.style.padding/2,opacity:a?1:0,transition:a?"opacity .5s ease-in-out":""},className:"tb_w_e_post_wrapper",role:"article","area-label":d.content.text,"post-id":d.referenceId?d.referenceId:d.id,"feed-id":d.feedId,children:(0,u.jsx)("div",{id:`tb_w_e_id-${d.id}`,"tb-network":d.networkId,"post-id":d.referenceId||d.id,"feed-id":d.feedId,tabIndex:"0","area-label":I,role:"article",children:(0,u.jsxs)("div",{className:"tb_w_e_post_in",onClick:n(i,d),role:"button","aria-label":"open detail modal for post",tabIndex:"0",children:[d.share.status?(0,u.jsx)(v.default,{share:d.share,shareClass:"tb_w_e_share_container",Post:d,ThemeInfo:_}):null,b?(0,u.jsx)(w,{Post:d,CardStyle:c,ThemeStyle:l,ThemeInfo:_,index:i,inView:!0}):null,k&&59!==m&&!r.HY?(0,u.jsx)("div",{className:"tb_w_e_rating__",children:(0,u.jsx)(s.Suspense,{fallback:(0,u.jsx)("div",{className:"rating-default-height"}),children:(0,u.jsx)(g,{rating:d.rating,networkId:d.networkId})})}):null,(0,u.jsxs)("div",{className:"tb_w_e_contant_wrapper",children:[(0,u.jsx)(h,{Post:d,CardStyle:c,ThemeStyle:l,mediaType:b,ThemeInfo:_,inView:!0}),c.content.status||1===d.type?(0,u.jsx)(f.default,{contentClass:`${C} ${j}`,Post:d,content:I,CardStyle:c,contentTitle:d.content.title}):null]}),S?(0,u.jsx)(s.Suspense,{fallback:"",children:(0,u.jsx)(y,{Post:d,CardStyle:c,actionClass:"tb_w_e_social_action__"})}):null]})})})}})};class C extends s.Component{constructor(e){super(e),this.onUpdate=()=>{const{pIndex:e}=this.props;setTimeout((()=>{window.dispatchEvent(new Event("resize")),setTimeout((()=>{const t=document.getElementById(`tb_wall_list_wrap___${e+1}`);t&&t.classList.add("tb_fc_animation")}),250)}),100)},this.myRef=s.createRef()}UNSAFE_componentWillReceiveProps(e){const{activeID:t,pIndex:n}=e;t==n&&this.myRef.current&&this.props.activeID!==t&&this.myRef.current.swiper.slideNext()}render(){const{pIndex:e,Post:t,completeDataObject:n,onClickToCTA:s,postSizeInPx:r,cardCount:o,CardStyle:a,ThemeStyle:l,ThemeInfo:c,clickToShowPopUp:d}=this.props;return(0,u.jsx)(i.RC,{ref:this.myRef,autoHeight:!0,slidesPerView:"auto",direction:"vertical",spaceBetween:0,mousewheel:!0,loop:!0,speed:2e3,allowTouchMove:!1,autoplay:{enabled:!1,disableOnInteraction:!0},id:`tb_wall_list_wrap___${e+1}`,className:"swiper-container tb_wall_list_wrap___",style:{width:100/o+"%"},onAfterInit:this.onUpdate,children:null!==t&&void 0!==t&&t.length?t.map(((t,o)=>{const h=n[t];return(0,u.jsx)(i.qr,{children:(0,u.jsx)(k,{CardStyle:a,ThemeStyle:l,ThemeInfo:c,Post:h,index:o,clickToShowPopUp:d,onClickToCTA:s,postSizeInPx:r},`item_${o}_${e+1}_${h.id}`)},`item_${o}_${e}`)})):null},`tb_wall_list_wrap___${e+1}`)}}const j=C},97628:(e,t,n)=>{n.d(t,{EC:()=>s,Oi:()=>r,Yo:()=>i});const s=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),i=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),r=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")}}]);
//# sourceMappingURL=6221.62d7b8b0.chunk.js.map