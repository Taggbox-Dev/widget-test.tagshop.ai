"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3538,4897,7278,9410,9875],{8494:(t,e,i)=>{i.d(e,{bs:()=>d});var n=i(78250),o=i(23499),l=i(92908),s=i(95553),a=i(89652);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:n,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${n}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:h}=i,m=null===d||void 0===d?void 0:d.id,p=(l.HY,null===h||void 0===h?void 0:h.id),v=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:_,network:b,itemId:g,load:f}=v.dataset,x=document.querySelector(`img[data-item-id="${g}"]`),y=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==y&&void 0!==y&&y.length){var w;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(w=y[0])||void 0===w?void 0:w.postFileNew);if(!t&&x){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==_&&!v.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var n,o,l,s,a;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(n=i[0])||void 0===n?void 0:n.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(l=i[0])||void 0===l?void 0:l.link,postFile:null===(s=i[0])||void 0===s?void 0:s.postFile,mediaFile:null===(a=i[0])||void 0===a?void 0:a.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:p,postId:g,ownerId:m},i,y);try{const{data:e}=await(new a.A).post(l.t5,t,{headers:s.ML}),i=l.HY||l.MH?"":`https://images.${l.QR}/`;v.src="18"===b?`${i}${e.media}`:e.media}catch{v.src=n.gX}finally{u(v)}}else v.src=n.gX,u(v);r.shift(),c()}else{const t=`${n.th}/media/images/no-image.svg`;v.src=t,v.srcset=t,u(v),r.shift()}}},u=t=>t.setAttribute("data-load","1")},77278:(t,e,i)=>{i.r(e),i.d(e,{default:()=>s});var n=i(65043),o=i(97628),l=i(70579);class s extends n.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:n,inView:s}=this.props;return(0,l.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:s?(0,l.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:n||44,height:n||44,onError:e=>{const n=(0,o.Yo)(i),l="#ffffff"==n?"000":n.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${l}&color=fff&length=1`}}):null},Math.random())}}},65005:(t,e,i)=>{i.d(e,{A:()=>l});var n=i(70579);const o=(t,e,i)=>(0,n.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:t,fontSize:i,minWidth:i+"px"},children:(0,n.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{color:t,width:10*e+"%",fontSize:i,minWidth:i+"px"},children:[(0,n.jsx)("div",{})," "]})}),l=t=>{let{rating:e,size:i,color:l}=t;const s=e>5?5:e,a=Math.trunc(5-s),r=Math.trunc(s),d=String(s).split(".")[1];return(0,n.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[r?[...Array(r)].map(((t,e)=>(0,n.jsx)("div",{"data-index":e,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:l||"#F8B90C",fontSize:i,minWidth:i+"px"},children:(0,n.jsx)("div",{})},e))):null,d>0?o(l||"#F8B90C",d,i):null,a?[...Array(a)].map(((t,e)=>(0,n.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:i,minWidth:i+"px"},children:(0,n.jsx)("div",{})},e))):null]})}},80714:(t,e,i)=>{i.d(e,{A:()=>m});var n=i(65043),o=i(83003),l=i(39532),s=i(65281),a=i(26165),r=i(57515),d=i(70579);const c=(0,n.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,n=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,n]})]})})),u=t=>{let{products:e,appData:i,Post:o,showTooltip:u,isPopup:h}=t;const[m,p]=(0,n.useState)(null),v=(0,n.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,n.useEffect)((()=>{if(u){const t=e.findIndex((t=>t.id===u));-1!==t&&p(t)}else p(null)}),[u,e]);const _=(0,n.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,a.hq)({})}),[i,o]),b=(0,n.useCallback)(((t,e)=>{t.stopPropagation(),_(e),window.open(e.url,"_blank")}),[_]);return null!==v&&void 0!==v&&v.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,s.Ul)()}-`,n=m===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(n?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>p(e),onMouseLeave:()=>p(null),onClick:e=>{b(e,t)},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===v.type?"tb_hotspot_ani__":""),children:e+1}),(0,d.jsx)(r.A,{wallId:i,children:(0,d.jsx)(l.m_,{appendTo:"body","data-tooltip-id":`tooltip-${t.id}-${Math.random().toString(36).substr(2,9)}`,className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,...h?{isOpen:n}:{},children:(0,d.jsx)(c,{item:t})},e)})]},`${t.id}-${e}`)})):null},h=(0,n.memo)(u),m=(0,o.Ng)((t=>({appData:t.appData})))(h)},43702:(t,e,i)=>{i.d(e,{A:()=>p});var n=i(65043),o=Object.defineProperty,l=(t,e,i)=>((t,e,i)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!==typeof e?e+"":e,i),s=new Map,a=new WeakMap,r=0,d=void 0;function c(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(i=t.root,i?(a.has(i)||(r+=1,a.set(i,r.toString())),a.get(i)):"0"):t[e]}`;var i})).toString()}function u(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const o=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:l,elements:a}=function(t){const e=c(t);let i=s.get(e);if(!i){const n=new Map;let o;const l=new IntersectionObserver((e=>{e.forEach((e=>{var i;const l=e.isIntersecting&&o.some((t=>e.intersectionRatio>=t));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=l),null==(i=n.get(e.target))||i.forEach((t=>{t(l,e)}))}))}),t);o=l.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:l,elements:n},s.set(e,i)}return i}(i),r=a.get(t)||[];return a.has(t)||a.set(t,r),r.push(e),l.observe(t),function(){r.splice(r.indexOf(e),1),0===r.length&&(a.delete(t),l.unobserve(t)),0===a.size&&(l.disconnect(),s.delete(o))}}n.Component;var h=i(92908),m=i(22030);const p=t=>{let{children:e}=t;const{ref:i,inView:o}=function(){let{threshold:t,delay:e,trackVisibility:i,rootMargin:o,root:l,triggerOnce:s,skip:a,initialInView:r,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var h;const[m,p]=n.useState(null),v=n.useRef(c),[_,b]=n.useState({inView:!!r,entry:void 0});v.current=c,n.useEffect((()=>{if(a||!m)return;let n;return n=u(m,((t,e)=>{b({inView:t,entry:e}),v.current&&v.current(t,e),e.isIntersecting&&s&&n&&(n(),n=void 0)}),{root:l,rootMargin:o,threshold:t,trackVisibility:i,delay:e},d),()=>{n&&n()}}),[Array.isArray(t)?t.toString():t,m,l,o,s,a,i,d,e]);const g=null==(h=_.entry)?void 0:h.target,f=n.useRef(void 0);m||!g||s||a||f.current===g||(f.current=g,b({inView:!!r,entry:void 0}));const x=[p,_.inView,_.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}({triggerOnce:!0,threshold:.01});return h.HY&&(0,m._7)(i),e({ref:i,inView:o})}},36671:(t,e,i)=>{i.d(e,{A:()=>d});var n=i(65043),o=i(65281),l=i(78250),s=i(8494),a=i(80714),r=i(70579);class d extends n.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var n;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(n=i.image)||void 0===n?void 0:n.small);this._isMounted&&this.setState({height:e,width:t})}catch(l){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:l,Post:s}=t;this.state={height:(null===l||void 0===l?void 0:l.height)||(null===s||void 0===s||null===(e=s.media)||void 0===e?void 0:e.height)||0,width:(null===l||void 0===l?void 0:l.width)||(null===s||void 0===s||null===(i=s.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=n.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,n;const{height:o,width:d}=this.state,{ImageClass:c,Post:u,hotspot:h,size:m,blurBG:p,ProductSetting:v,mediaOnly:_,inView:b,multiKey:g,index:f}=this.props,{id:x,link:y,products:w}=u,j=_||(null===u||void 0===u?void 0:u.media),{currentWidth:k,currentHeight:S}=this.state,N=m||100*o/d,$={paddingBottom:1===N?null:`${N}%`},C={backgroundImage:b?`url(${null===j||void 0===j||null===(t=j.image)||void 0===t?void 0:t.small})`:null},P=d>o?"100%":d/o*100+"%",I=d>o?o/d*100+"%":"100%",A=u.isProduct&&h&&u.hotspot,V={width:A&&m?P:null,height:A&&m?I:null};return(0,r.jsxs)("div",{className:`${c}_wrap_`,style:$,ref:this.mediaRef,children:[A&&p?(0,r.jsx)("div",{className:"tb_blur_bg_",style:C}):null,(0,r.jsxs)("div",{className:`${c}_wrap_in`,style:V,children:[A?(0,r.jsx)(a.A,{products:this.props.multiPic?u.mediaList[g].product:w,ProductSetting:v,hotspot:u.hotspot,dataPost:u,showTooltip:null},f):null,b?(0,r.jsx)("img",{className:`${c} tb_media-${x}`,src:null===j||void 0===j||null===(e=j.image)||void 0===e?void 0:e.small,srcSet:`${null===j||void 0===j||null===(i=j.image)||void 0===i?void 0:i.small} 1x, ${null===j||void 0===j||null===(n=j.image)||void 0===n?void 0:n.large} 2x`,sizes:`${k}px`,loading:b?"eager":"lazy",decoding:"async",fetchPriority:b?"high":"low","data-id":x,height:S,width:k,"data-height":o,"data-width":d,"data-link":y,onLoad:this.onLoad,onError:t=>{t.target.src=`${l.th}/media/error/no-image.svg`,t.target.srcset=`${l.th}/media/error/no-image.svg`,(0,s.bs)(t)},alt:null===j||void 0===j?void 0:j.title,title:null===j||void 0===j?void 0:j.title},`${x}-${o}-${d}-${b}`):null]})]})}}},89410:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var n=i(65043),o=i(92908),l=i(80229),s=i(65281),a=i(70579);class r extends n.PureComponent{constructor(t){super(t),this.contentRef=n.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,n;const t=(null===(i=this.contentRef)||void 0===i||null===(n=i.current)||void 0===n?void 0:n.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:n,maxLines:r,isReadMore:d}=this.props,c=t.content.trimcontent&&!o.HY?t.content.trimcontent:0,u={WebkitLineClamp:r,textAlign:t.style.textAlign},h=(0,s.w)(i),m=`${e} ${d?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${t.style.variant}`;return(0,a.jsxs)("div",{className:m,ref:this.contentRef,style:u,children:[n?(0,a.jsx)("div",{className:"tb_bold_txt__",children:(0,l.Ay)(n)}):null,(0,l.Ay)(h)]})}}},43538:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});var n=i(65043),o=i(65281),l=i(70579);const s=t=>{const{createdAt:e,timeClass:i}=t;return(0,l.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,o.fF)(e)}`,children:(0,o.fF)(e)})},a=(0,n.memo)(s)},99875:(t,e,i)=>{i.r(e),i.d(e,{default:()=>g});var n=i(65043),o=i(77278),l=i(43538),s=i(65005),a=i(22030),r=i(70579);const d=t=>{let{Post:e,CardStyle:i,inView:n}=t;const{author:d,networkId:c}=e,u=(0,a.zK)(d.name),h=!(!i.author.status||u),m=e.rating>0;return(0,r.jsxs)("div",{className:"tb_l_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,r.jsxs)("div",{className:"tb_l_author",children:[h?(0,r.jsx)(o.default,{author:d,network:e.network,networkId:c,authorClass:"tb_l_author_profile",inView:n}):"",(0,r.jsxs)("div",{className:"tb_l_author_info",children:[h?(0,r.jsx)("div",{className:"tb_l_authorname",children:d.name}):"",i.timeStatus?(0,r.jsx)(l.default,{createdAt:e.createdAt,timeClass:`tb_l_time tb-cTBfont-${i.author.variant}`}):""]})]}),m?(0,r.jsxs)("div",{className:"tb_l_rating__",children:[(0,r.jsx)(s.A,{size:16,rating:e.rating})," "]}):""]})};var c=i(89410),u=i(92908),h=i(78250),m=i(36671);const p=()=>(0,r.jsx)("div",{className:"tb_l_media_icon tb__media_ico_c",children:(0,r.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,r.jsx)("div",{})})}),v=t=>{let{Post:e,inView:i}=t;return e.mediaList.length>0?e.mediaList.map(((t,n)=>(0,r.jsxs)("div",{className:"tb_l_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[[3,5].includes(t.type)?(0,r.jsx)(p,{}):null,(0,r.jsx)(m.A,{ImageClass:"tb_l_image",Post:e,size:1,mediaOnly:t,hotspot:!1,blurBG:!1,observer:!0,inView:i},n)]}))):(0,r.jsxs)("div",{className:"tb_l_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[[3,5].includes(e.type)?(0,r.jsx)(p,{}):null,(0,r.jsx)(m.A,{ImageClass:"tb_l_image",Post:e,size:1,hotspot:!1,blurBG:!1,observer:!0,inView:i})]})};var _=i(43702);const b=t=>{let{Post:e,clickToShowPopUp:i,itemIndex:n,CardStyle:o,ThemeStyle:l}=t;const s=1!==e.type,m=o.content.trimcontent?(0,a.Ex)(e.content.text,200):e.content.text,p=e.products;return(0,r.jsx)(_.A,{children:t=>{var a,_,b,g,f,x,y;let{ref:w,inView:j}=t;return(0,r.jsx)("div",{id:`tb_l_id-${e.id}`,className:"tb_l_post_wrapper","tb-network":e.networkId,role:"article","aria-label":`Post ${parseInt(n)+1},${m}`,style:{padding:o.style.padding/2,opacity:j?1:0,transition:j?"opacity .5s ease-in-out":""},tabIndex:"0",ref:w,children:(0,r.jsxs)("div",{className:"tb_l_post_in",onClick:i(n,e),role:"button","aria-label":"Popup",tabIndex:"0",children:[(0,r.jsx)(d,{Post:e,CardStyle:o,ThemeStyle:l,mediaType:s,size:40,rating:e.rating,inView:j}),u.HY&&o.content.status?(0,r.jsx)("div",{className:"tb_l_contant_wrapper",children:(0,r.jsx)(c.default,{contentClass:"tb_l_content",Post:e,content:m,CardStyle:o,contentTitle:e.contentTitle})}):"",s?(0,r.jsx)("div",{className:"tb_l_media_cont",children:(0,r.jsx)(v,{Post:e,CardStyle:o,ThemeStyle:l,inView:j})}):"",e.isProduct?(0,r.jsx)("div",{className:"tb_l_p_list",children:(0,r.jsxs)("div",{className:"tb_l_p_wrp",children:[(0,r.jsx)("div",{className:"tb_l_p_",children:(0,r.jsx)("img",{className:"tb_l_p_img",decoding:"async",src:null===(a=p[0])||void 0===a?void 0:a.image,width:"60",height:"60",alt:null===(_=p[0])||void 0===_?void 0:_.title,loading:"lazy",draggable:"false",onError:t=>t.target.src=h.qF})}),(0,r.jsxs)("div",{className:"tb_l_p_info",children:[(0,r.jsx)("div",{className:"tb_l_p_t",children:null===(b=p[0])||void 0===b?void 0:b.title}),(0,r.jsxs)("div",{className:"tb_l_p_p",children:[null===(g=p[0])||void 0===g?void 0:g.currency,(null===(f=p[0])||void 0===f?void 0:f.discount)>0?null===(x=p[0])||void 0===x?void 0:x.discount:null===(y=p[0])||void 0===y?void 0:y.price]})]})]})}):null]})})}})},g=t=>{let{postData:e,completeDataObject:i,CardStyle:o,ThemeStyle:l,clickToShowPopUp:s,loadBranding:a}=t;return(0,n.useEffect)((()=>{a()}),[]),(0,r.jsx)("div",{className:"tb_l_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const n=i[t];return(0,r.jsx)(b,{Post:n,CardStyle:o,ThemeStyle:l,itemIndex:e,clickToShowPopUp:s},`wdt_crd_${e}_${t.id}`)}))})}},97628:(t,e,i)=>{i.d(e,{EC:()=>n,Oi:()=>l,Yo:()=>o});const n=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),o=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),l=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")}}]);
//# sourceMappingURL=9875.248e9fb7.chunk.js.map