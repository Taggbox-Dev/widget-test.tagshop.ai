(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3694,7112],{44238:(t,e,i)=>{"use strict";i.d(e,{bs:()=>r});var o=i(31530),l=i(7665),n=i(83884),s=i(10753),a=i(89620);let d=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:o,themeId:l}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(l))d.includes(t)||d.push(t);else{const t=document.querySelector(`.tb_media-${o}`);t&&(t.style.display="none")}1===d.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=l.A.getState().appData;if(!i||!Object.keys(i).length||!d.length)return;const{User:r,Wall:h}=i,m=null===r||void 0===r?void 0:r.id,v=(n.HY,null===h||void 0===h?void 0:h.id),p=null===(t=d[0])||void 0===t?void 0:t.target,{filterId:b,network:_,itemId:g,load:f}=p.dataset,w=document.querySelector(`img[data-item-id="${g}"]`),y=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==y&&void 0!==y&&y.length){var k;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(k=y[0])||void 0===k?void 0:k.postFileNew);if(!t&&w){if([2,18,3,28].includes(+_)&&"0"===f&&"34"!==b&&!p.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var o,l,n,s,a;const{UserPlan:d,Wall:r}=e;return{table_name:null===d||void 0===d?void 0:d.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(o=i[0])||void 0===o?void 0:o.feedId,type:null===(l=i[0])||void 0===l?void 0:l.type,link:null===(n=i[0])||void 0===n?void 0:n.link,postFile:null===(s=i[0])||void 0===s?void 0:s.postFile,mediaFile:null===(a=i[0])||void 0===a?void 0:a.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:v,postId:g,ownerId:m},i,y);try{const{data:e}=await(new a.A).post(n.t5,t,{headers:s.ML}),i=n.HY||n.MH?"":`https://images.${n.QR}/`;p.src="18"===_?`${i}${e.media}`:e.media}catch{p.src=o.gX}finally{u(p)}}else p.src=o.gX,u(p);d.shift(),c()}else{const t=`${o.th}/media/images/no-image.svg`;p.src=t,p.srcset=t,u(p),d.shift()}}},u=t=>t.setAttribute("data-load","1")},43694:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});var o=i(82483),l=i(56723);class n extends o.PureComponent{render(){const{Post:t,ctaClass:e,onClickToCTA:i}=this.props,{cta:o}=t,n={color:null===o||void 0===o?void 0:o.color,backgroundColor:null===o||void 0===o?void 0:o.background};return(0,l.jsxs)("div",{className:e,style:n,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),i(t),window.open(`${o.url}`,"_blank")},children:[" ",o.text]})}}const s=n},82803:(t,e,i)=>{"use strict";i.d(e,{A:()=>m});var o=i(82483),l=i(91965),n=i(99998),s=i(76467),a=i(99009),d=i(29269),r=i(56723);const c=(0,o.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,o=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,o]})]})})),u=t=>{let{products:e,appData:i,Post:l}=t;const[u,h]=(0,o.useState)(null),m=(0,o.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),v=(0,o.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,d.hq)({})}),[i,l]),p=(0,o.useCallback)(((t,e)=>{t.stopPropagation(),v(e),window.open(e.url,"_blank")}),[v]);return null!==m&&void 0!==m&&m.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,a.Ul)()}`,o=u===e;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(o?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:e=>p(e,t),"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ "+(0===m.type?"tb_hotspot_ani__":""),children:e+1}),(0,n.createPortal)((0,r.jsx)(s.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,r.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,o.memo)(u),m=(0,l.Ng)((t=>({appData:t.appData})))(h)},15653:(t,e,i)=>{"use strict";i.d(e,{A:()=>v});var o=i(82483),l=Object.defineProperty,n=(t,e,i)=>((t,e,i)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!==typeof e?e+"":e,i),s=new Map,a=new WeakMap,d=0,r=void 0;function c(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(i=t.root,i?(a.has(i)||(d+=1,a.set(i,d.toString())),a.get(i)):"0"):t[e]}`;var i})).toString()}function u(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;if("undefined"===typeof window.IntersectionObserver&&void 0!==o){const l=t.getBoundingClientRect();return e(o,{isIntersecting:o,target:t,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:l,observer:n,elements:a}=function(t){const e=c(t);let i=s.get(e);if(!i){const o=new Map;let l;const n=new IntersectionObserver((e=>{e.forEach((e=>{var i;const n=e.isIntersecting&&l.some((t=>e.intersectionRatio>=t));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=n),null==(i=o.get(e.target))||i.forEach((t=>{t(n,e)}))}))}),t);l=n.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:n,elements:o},s.set(e,i)}return i}(i),d=a.get(t)||[];return a.has(t)||a.set(t,d),d.push(e),n.observe(t),function(){d.splice(d.indexOf(e),1),0===d.length&&(a.delete(t),n.unobserve(t)),0===a.size&&(n.disconnect(),s.delete(l))}}o.Component;var h=i(83884),m=i(24366);const v=t=>{let{children:e}=t;const{ref:i,inView:l}=function(){let{threshold:t,delay:e,trackVisibility:i,rootMargin:l,root:n,triggerOnce:s,skip:a,initialInView:d,fallbackInView:r,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var h;const[m,v]=o.useState(null),p=o.useRef(c),[b,_]=o.useState({inView:!!d,entry:void 0});p.current=c,o.useEffect((()=>{if(a||!m)return;let o;return o=u(m,((t,e)=>{_({inView:t,entry:e}),p.current&&p.current(t,e),e.isIntersecting&&s&&o&&(o(),o=void 0)}),{root:n,rootMargin:l,threshold:t,trackVisibility:i,delay:e},r),()=>{o&&o()}}),[Array.isArray(t)?t.toString():t,m,n,l,s,a,i,r,e]);const g=null==(h=b.entry)?void 0:h.target,f=o.useRef(void 0);m||!g||s||a||f.current===g||(f.current=g,_({inView:!!d,entry:void 0}));const w=[v,b.inView,b.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}({triggerOnce:!0,threshold:.01});return h.HY&&(0,m._7)(i),e({ref:i,inView:l})}},19882:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var o=i(82483),l=i(83884),n=i(56723);const s=o.lazy((()=>i.e(8807).then(i.bind(i,88807)))),a=t=>{const{Post:e,IconClass:i,isCenter:a,hideVideo:d,show:r}=t,c=!![3,5].includes(e.type),u=7===e.network.id,h=!!(e.mediaList&&e.mediaList.length>0),m=1===e.isAudio,v=!!e.isProduct,p=(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(s,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),b=(0,n.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),_=(0,n.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,n.jsx)("div",{className:"tb__icon tb-"+(l.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,n.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,n.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,n.jsxs)(n.Fragment,{children:[a&&(u||c)?(0,n.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!u?w:"",c&&u?p:""]}):null,v||h||c?(0,n.jsxs)("div",{className:`${i} tb__media_ico_`,children:[v?f:"",h?b:"",a||!c||u||d?"":m?_:g]}):null]}):null}},7775:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var o=i(82483),l=i(99009),n=i(31530),s=i(44238),a=i(82803),d=i(56723);class r extends o.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var o;const{width:t,height:e}=await(0,l.TW)(null===i||void 0===i||null===(o=i.image)||void 0===o?void 0:o.small);this._isMounted&&this.setState({height:e,width:t})}catch(n){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:n,Post:s}=t;this.state={height:(null===n||void 0===n?void 0:n.height)||(null===s||void 0===s||null===(e=s.media)||void 0===e?void 0:e.height)||0,width:(null===n||void 0===n?void 0:n.width)||(null===s||void 0===s||null===(i=s.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=o.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,o;const{height:l,width:r}=this.state;if(!l||!r)return null;const{ImageClass:c,Post:u,hotspot:h,size:m,blurBG:v,ProductSetting:p,mediaOnly:b,inView:_,multiKey:g}=this.props,{id:f,link:w,products:y}=u,k=b||(null===u||void 0===u?void 0:u.media),{currentWidth:x,currentHeight:$}=this.state,j=m||100*l/r,C={paddingBottom:1===j?null:`${j}%`},I={backgroundImage:_?`url(${null===k||void 0===k||null===(t=k.image)||void 0===t?void 0:t.small})`:null},S=r>l?"100%":r/l*100+"%",P=r>l?l/r*100+"%":"100%",N=u.isProduct&&h,M={width:N&&m?S:null,height:N&&m?P:null};return(0,d.jsxs)("div",{className:`${c}_wrap_`,style:C,ref:this.mediaRef,children:[N&&v?(0,d.jsx)("div",{className:"tb_blur_bg_",style:I}):null,(0,d.jsxs)("div",{className:`${c}_wrap_in`,style:M,children:[N?(0,d.jsx)(a.A,{products:this.props.multiPic?u.mediaList[g].product:y,ProductSetting:p,hotspot:u.hotspot,dataPost:u}):null,(0,d.jsx)("img",{className:`${c} tb_media-${f}`,src:null===k||void 0===k||null===(e=k.image)||void 0===e?void 0:e.small,srcSet:`${null===k||void 0===k||null===(i=k.image)||void 0===i?void 0:i.small} 1x, ${null===k||void 0===k||null===(o=k.image)||void 0===o?void 0:o.large} 2x`,sizes:`${x}px`,loading:_?"eager":"lazy",decoding:"async",fetchPriority:_?"high":"low","data-id":f,height:$,width:x,"data-height":l,"data-width":r,"data-link":w,onLoad:this.onLoad,onError:t=>{t.target.src=`${n.th}/media/error/no-image.svg`,t.target.srcset=`${n.th}/media/error/no-image.svg`,(0,s.bs)(t)},alt:null===k||void 0===k?void 0:k.title,title:null===k||void 0===k?void 0:k.title},`${f}-${l}-${r}-${_}`)]})]})}}},33689:(t,e,i)=>{"use strict";i.d(e,{A:()=>c});var o=i(82483),l=i(48819),n=i.n(l),s=i(83884),a=i(99009),d=i(56723);class r extends o.Component{constructor(t){super(t),this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:o}=await(0,a.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small);this._isMounted&&this.setState({calcHeight:o,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0},this.mediaRef=o.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,this.mediaSizeCalc()}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,o;const{calcHeight:l,calcWidth:a}=this.state;if(!l||!a)return null;const{VideoClass:r,Post:c,controls:u,autoPlay:h,handleVideoEnded:m,muted:v,intervalTime:p,size:b,inView:_}=this.props,{media:g,id:f,link:w,networkId:y}=c,k=1===b,x=null!==g&&void 0!==g&&g.height?null===g||void 0===g?void 0:g.height:l,$=null!==g&&void 0!==g&&g.width?null===g||void 0===g?void 0:g.width:a,j={paddingBottom:`${k?null:b||100*x/$}%`};return(0,d.jsx)("div",{className:`${r}_wrap_`,style:j,ref:this.mediaRef,children:(0,d.jsx)(n(),{className:`${r} tb_media-${f}`,url:_?null===g||void 0===g||null===(t=g.video)||void 0===t?void 0:t.full:null===g||void 0===g||null===(e=g.image)||void 0===e?void 0:e.small,"data-height":l,"data-width":a,"data-type":"video","data-network":y,"data-link":w,"data-item-id":f,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":$,"data-height":x,poster:null===g||void 0===g||null===(i=g.image)||void 0===i?void 0:i.small}},file:{attributes:{preload:"metadata",poster:null===g||void 0===g||null===(o=g.image)||void 0===o?void 0:o.small}}},loop:!(s.aD&&!s.HY&&null!==c&&void 0!==c&&c.loopStop)&&h,onError:t=>{k&&m&&setTimeout((()=>{this._isMounted&&m&&m()}),1e3*p),this.setVideoLoaded(!1)},autoPlay:_&&h?1:0,muted:v,volume:h?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!s.HY),playing:_&&h?1:0,controls:u||!1,onEnded:m,title:null===g||void 0===g?void 0:g.title},`${f}-${l}-${a}-${_}`)})}}const c=(0,o.memo)(r)},49737:(t,e,i)=>{"use strict";i.d(e,{A:()=>r});var o=i(82483),l=i(99009),n=i(9916),s=i(56723);const a=(t,e,i,o)=>{const n={like:`https://twitter.com/intent/favorite?tweet_id=${(0,l.Ph)(e)}`,comment:`https://twitter.com/intent/tweet?in_reply_to=${(0,l.Ph)(e)}`,retweet:`https://twitter.com/intent/retweet?tweet_id=${(0,l.Ph)(e)}`};return 1===t?n[o]:i},d=t=>{let{label:e,hrefClick:i,Icon:o,count:n,itemId:a=0,type:d}=t;const r=n>0?(0,l.sl)(n):"";return(0,s.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,s.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(i,"_blank")},className:`tb_social_action__ico_wrap tb_social_action__ico_wrap_${a}`,"aria-label":`${e} post ${d} count ${r}`,role:"button",tabIndex:"0",children:[(0,s.jsx)("div",{className:`tb_social_action_ico__ tb__icon tb-${o}`,children:"  "}),r?(0,s.jsx)("div",{className:"tb_social_action_counts__",children:r}):""]})})};class r extends o.PureComponent{componentDidMount(){try{var t;const{Post:e}=this.props,i=`.tb_social_action__ico_wrap_${null===e||void 0===e?void 0:e.id}`;null===(t=document.querySelector(i))||void 0===t||t.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}))}catch(e){console.log(e)}}render(){const{Post:t,CardStyle:e,actionClass:i}=this.props,{icon:o,style:l}=e,r={color:o.default?l.color:o.color},c=t.networkId,{comment:u,like:h}=t.count,m=[3,10,7].includes(c)?"like":"heart-outline",v=[1,2,3,7,8,9,10,18].includes(c),p=![29,19].includes(c),b=(0,n.Oi)(c);return[29,26,23,6,5,11,12,15,20,21].includes(c)?null:(0,s.jsx)("div",{className:i,children:(0,s.jsxs)("div",{className:"tb_social_action__",role:"list",children:[v&&(0,s.jsx)(d,{itemId:t.id,label:b,hrefClick:a(c,t.postId,t.link,"like"),Icon:m,iconStyle:r,count:h,type:"like"}),p&&(0,s.jsx)(d,{itemId:t.id,label:b,hrefClick:a(c,t.postId,t.link,"comment"),Icon:"comment",iconStyle:r,count:u,type:"comment"}),1===c&&(0,s.jsx)(d,{itemId:t.id,label:b,hrefClick:a(c,t.postId,t.link,"retweet"),Icon:"retweet",iconStyle:r,count:u,type:"comment"}),(0,s.jsx)(d,{label:b,itemId:t.id,hrefClick:t.link,Icon:"eye",iconStyle:r,count:0,type:"view"})]})})}}},9916:(t,e,i)=>{"use strict";i.d(e,{EC:()=>o,Oi:()=>n,Yo:()=>l});const o=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),l=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),n=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},95098:()=>{}}]);
//# sourceMappingURL=7112.a7f55a32.chunk.js.map