"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3538,4897,7278,9410,9875],{8494:(t,e,i)=>{i.d(e,{bs:()=>d});var n=i(78250),l=i(23499),s=i(92908),a=i(95553),o=i(89652);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:n,themeId:l}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(l))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${n}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=l.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:h}=i,m=null===d||void 0===d?void 0:d.id,v=(s.HY,null===h||void 0===h?void 0:h.id),p=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:g,network:_,itemId:b,load:f}=p.dataset,y=document.querySelector(`img[data-item-id="${b}"]`),x=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===b)):[];if(null!==x&&void 0!==x&&x.length){var w;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(w=x[0])||void 0===w?void 0:w.postFileNew);if(!t&&y){if([2,18,3,28].includes(+_)&&"0"===f&&"34"!==g&&!p.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var n,l,s,a,o;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(n=i[0])||void 0===n?void 0:n.feedId,type:null===(l=i[0])||void 0===l?void 0:l.type,link:null===(s=i[0])||void 0===s?void 0:s.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(o=i[0])||void 0===o?void 0:o.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:v,postId:b,ownerId:m},i,x);try{const{data:e}=await(new o.A).post(s.t5,t,{headers:a.ML}),i=s.HY||s.MH?"":`https://images.${s.QR}/`;p.src="18"===_?`${i}${e.media}`:e.media}catch{p.src=n.gX}finally{u(p)}}else p.src=n.gX,u(p);r.shift(),c()}else{const t=`${n.th}/media/images/no-image.svg`;p.src=t,p.srcset=t,u(p),r.shift()}}},u=t=>t.setAttribute("data-load","1")},77278:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});var n=i(65043),l=i(97628),s=i(70579);class a extends n.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:n,inView:a}=this.props;return(0,s.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:a?(0,s.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:n||44,height:n||44,onError:e=>{const n=(0,l.Yo)(i),s="#ffffff"==n?"000":n.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${s}&color=fff&length=1`}}):null},Math.random())}}},65005:(t,e,i)=>{i.d(e,{A:()=>s});var n=i(70579);const l=(t,e,i)=>(0,n.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:t,fontSize:i,minWidth:i+"px"},children:(0,n.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{color:t,width:10*e+"%",fontSize:i,minWidth:i+"px"},children:[(0,n.jsx)("div",{})," "]})}),s=t=>{let{rating:e,size:i,color:s}=t;const a=e>5?5:e,o=Math.trunc(5-a),r=Math.trunc(a),d=String(a).split(".")[1];return(0,n.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[r?[...Array(r)].map(((t,e)=>(0,n.jsx)("div",{"data-index":e,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:s||"#F8B90C",fontSize:i,minWidth:i+"px"},children:(0,n.jsx)("div",{})},e))):null,d>0?l(s||"#F8B90C",d,i):null,o?[...Array(o)].map(((t,e)=>(0,n.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:i,minWidth:i+"px"},children:(0,n.jsx)("div",{})},e))):null]})}},43702:(t,e,i)=>{i.d(e,{A:()=>m});var n=i(65043),l=Object.defineProperty,s=(t,e,i)=>((t,e,i)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!==typeof e?e+"":e,i),a=new Map,o=new WeakMap,r=0,d=void 0;function c(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(i=t.root,i?(o.has(i)||(r+=1,o.set(i,r.toString())),o.get(i)):"0"):t[e]}`;var i})).toString()}function u(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const l=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:l,observer:s,elements:o}=function(t){const e=c(t);let i=a.get(e);if(!i){const n=new Map;let l;const s=new IntersectionObserver((e=>{e.forEach((e=>{var i;const s=e.isIntersecting&&l.some((t=>e.intersectionRatio>=t));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=s),null==(i=n.get(e.target))||i.forEach((t=>{t(s,e)}))}))}),t);l=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:s,elements:n},a.set(e,i)}return i}(i),r=o.get(t)||[];return o.has(t)||o.set(t,r),r.push(e),s.observe(t),function(){r.splice(r.indexOf(e),1),0===r.length&&(o.delete(t),s.unobserve(t)),0===o.size&&(s.disconnect(),a.delete(l))}}n.Component;var h=i(22030);const m=t=>{let{children:e}=t;const{ref:i,inView:l,entry:s}=function(){let{threshold:t,delay:e,trackVisibility:i,rootMargin:l,root:s,triggerOnce:a,skip:o,initialInView:r,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var h;const[m,v]=n.useState(null),p=n.useRef(c),[g,_]=n.useState({inView:!!r,entry:void 0});p.current=c,n.useEffect((()=>{if(o||!m)return;let n;return n=u(m,((t,e)=>{_({inView:t,entry:e}),p.current&&p.current(t,e),e.isIntersecting&&a&&n&&(n(),n=void 0)}),{root:s,rootMargin:l,threshold:t,trackVisibility:i,delay:e},d),()=>{n&&n()}}),[Array.isArray(t)?t.toString():t,m,s,l,a,o,i,d,e]);const b=null==(h=g.entry)?void 0:h.target,f=n.useRef(void 0);m||!b||a||o||f.current===b||(f.current=b,_({inView:!!r,entry:void 0}));const y=[v,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}({triggerOnce:!0,threshold:.01});return l&&(0,h._7)(s),e({ref:i,inView:l})}},36671:(t,e,i)=>{i.d(e,{A:()=>d});var n=i(65043),l=i(65281),s=i(78250),a=i(8494),o=i(70579);const r=(0,n.lazy)((()=>Promise.all([i.e(9532),i.e(714)]).then(i.bind(i,80714))));class d extends n.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var n;const{width:t,height:e}=await(0,l.TW)(null===i||void 0===i||null===(n=i.image)||void 0===n?void 0:n.small);this._isMounted&&this.setState({height:e,width:t})}catch(s){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:s,Post:a}=t;this.state={height:(null===s||void 0===s?void 0:s.height)||(null===a||void 0===a||null===(e=a.media)||void 0===e?void 0:e.height)||0,width:(null===s||void 0===s?void 0:s.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=n.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,l,d;const{height:c,width:u}=this.state,{ImageClass:h,Post:m,hotspot:v,size:p,blurBG:g,mediaOnly:_,inView:b,multiKey:f,index:y,ProductSetting:x}=this.props,{id:w,link:j,products:k}=m,S=_||(null===m||void 0===m?void 0:m.media),{currentWidth:C,currentHeight:I}=this.state,$=p||100*c/u,N={paddingBottom:1===$?null:`${$}%`},P={backgroundImage:b?`url(${null===S||void 0===S||null===(t=S.image)||void 0===t?void 0:t.small})`:null},A=u>c?"100%":u/c*100+"%",V=u>c?c/u*100+"%":"100%",R=m.isProduct&&v&&m.hotspot&&(null===x||void 0===x||null===(e=x.Hotspot)||void 0===e?void 0:e.status),z={width:R&&p?A:null,height:R&&p?V:null};return(0,o.jsxs)("div",{className:`${h}_wrap_`,style:N,ref:this.mediaRef,children:[R&&g?(0,o.jsx)("div",{className:"tb_blur_bg_",style:P}):null,(0,o.jsxs)("div",{className:`${h}_wrap_in`,style:z,children:[R?(0,o.jsx)(n.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(r,{products:this.props.multiPic?m.mediaList[f].product:k,hotspot:m.hotspot,Post:m,showTooltip:null},y)}):null,b?(0,o.jsx)("img",{className:`${h} tb_media-${w}`,src:null===S||void 0===S||null===(i=S.image)||void 0===i?void 0:i.small,srcSet:`${null===S||void 0===S||null===(l=S.image)||void 0===l?void 0:l.small} 1x, ${null===S||void 0===S||null===(d=S.image)||void 0===d?void 0:d.large} 2x`,sizes:`${C}px`,loading:b?"eager":"lazy",decoding:"async",fetchPriority:b?"high":"low","data-id":w,height:I,width:C,"data-height":c,"data-width":u,"data-link":j,onLoad:this.onLoad,onError:t=>{t.target.src=`${s.th}/media/error/no-image.svg`,t.target.srcset=`${s.th}/media/error/no-image.svg`,(0,a.bs)(t)},alt:null===S||void 0===S?void 0:S.title,title:null===S||void 0===S?void 0:S.title},`${w}-${c}-${u}-${b}`):null]})]})}}},89410:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var n=i(65043),l=i(92908),s=i(80229),a=i(65281),o=i(70579);class r extends n.PureComponent{constructor(t){super(t),this.contentRef=n.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,n;const t=(null===(i=this.contentRef)||void 0===i||null===(n=i.current)||void 0===n?void 0:n.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:n,maxLines:r,isReadMore:d}=this.props,c=t.content.trimcontent&&!l.HY?t.content.trimcontent:0,u={WebkitLineClamp:r,textAlign:t.style.textAlign},h=(0,a.w)(i),m=`${e} ${d?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${t.style.variant}`;return(0,o.jsxs)("div",{className:m,ref:this.contentRef,style:u,children:[n?(0,o.jsx)("div",{className:"tb_bold_txt__",children:(0,s.Ay)(n)}):null,(0,s.Ay)(h)]})}}},43538:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});var n=i(65043),l=i(65281),s=i(70579);const a=t=>{const{createdAt:e,timeClass:i}=t;return(0,s.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,l.fF)(e)}`,children:(0,l.fF)(e)})},o=(0,n.memo)(a)},99875:(t,e,i)=>{i.r(e),i.d(e,{default:()=>b});var n=i(65043),l=i(77278),s=i(43538),a=i(65005),o=i(22030),r=i(70579);const d=t=>{let{Post:e,CardStyle:i,inView:n}=t;const{author:d,networkId:c}=e,u=(0,o.zK)(d.name),h=!(!i.author.status||u),m=e.rating>0;return(0,r.jsxs)("div",{className:"tb_l_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,r.jsxs)("div",{className:"tb_l_author",children:[h?(0,r.jsx)(l.default,{author:d,network:e.network,networkId:c,authorClass:"tb_l_author_profile",inView:n}):"",(0,r.jsxs)("div",{className:"tb_l_author_info",children:[h?(0,r.jsx)("div",{className:"tb_l_authorname",children:d.name}):"",i.timeStatus?(0,r.jsx)(s.default,{createdAt:e.createdAt,timeClass:`tb_l_time tb-cTBfont-${i.author.variant}`}):""]})]}),m?(0,r.jsxs)("div",{className:"tb_l_rating__",children:[(0,r.jsx)(a.A,{size:16,rating:e.rating})," "]}):""]})};var c=i(89410),u=i(92908),h=i(78250),m=i(36671);const v=()=>(0,r.jsx)("div",{className:"tb_l_media_icon tb__media_ico_c",children:(0,r.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,r.jsx)("div",{})})}),p=t=>{let{Post:e,inView:i}=t;return e.mediaList.length>0?e.mediaList.map(((t,n)=>(0,r.jsxs)("div",{className:"tb_l_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[[3,5].includes(t.type)?(0,r.jsx)(v,{}):null,(0,r.jsx)(m.A,{ImageClass:"tb_l_image",Post:e,size:1,mediaOnly:t,hotspot:!1,blurBG:!1,observer:!0,inView:i},n)]}))):(0,r.jsxs)("div",{className:"tb_l_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[[3,5].includes(e.type)?(0,r.jsx)(v,{}):null,(0,r.jsx)(m.A,{ImageClass:"tb_l_image",Post:e,size:1,hotspot:!1,blurBG:!1,observer:!0,inView:i})]})};var g=i(43702);const _=t=>{let{Post:e,clickToShowPopUp:i,itemIndex:n,CardStyle:l,ThemeStyle:s}=t;const a=1!==e.type,m=l.content.trimcontent?(0,o.Ex)(e.content.text,200):e.content.text,v=e.products;return(0,r.jsx)(g.A,{children:t=>{var o,g,_,b,f,y,x;let{ref:w,inView:j}=t;return(0,r.jsx)("div",{id:`tb_l_id-${e.id}`,className:"tb_l_post_wrapper","tb-network":e.networkId,role:"article","aria-label":`Post ${parseInt(n)+1},${m}`,style:{padding:l.style.padding/2,opacity:j?1:0,transition:j?"opacity .5s ease-in-out":""},tabIndex:"0",ref:w,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,children:(0,r.jsxs)("div",{className:"tb_l_post_in",onClick:i(n,e),role:"button","aria-label":"Popup",tabIndex:"0",children:[(0,r.jsx)(d,{Post:e,CardStyle:l,ThemeStyle:s,mediaType:a,size:40,rating:e.rating,inView:j}),u.HY&&l.content.status?(0,r.jsx)("div",{className:"tb_l_contant_wrapper",children:(0,r.jsx)(c.default,{contentClass:"tb_l_content",Post:e,content:m,CardStyle:l,contentTitle:e.content.title})}):"",a?(0,r.jsx)("div",{className:"tb_l_media_cont",children:(0,r.jsx)(p,{Post:e,CardStyle:l,ThemeStyle:s,inView:j})}):"",e.isProduct?(0,r.jsx)("div",{className:"tb_l_p_list",children:(0,r.jsxs)("div",{className:"tb_l_p_wrp",children:[(0,r.jsx)("div",{className:"tb_l_p_",children:(0,r.jsx)("img",{className:"tb_l_p_img",decoding:"async",src:null===(o=v[0])||void 0===o?void 0:o.image,width:"60",height:"60",alt:null===(g=v[0])||void 0===g?void 0:g.title,loading:"lazy",draggable:"false",onError:t=>t.target.src=h.qF})}),(0,r.jsxs)("div",{className:"tb_l_p_info",children:[(0,r.jsx)("div",{className:"tb_l_p_t",children:null===(_=v[0])||void 0===_?void 0:_.title}),(0,r.jsxs)("div",{className:"tb_l_p_p",children:[null===(b=v[0])||void 0===b?void 0:b.currency,(null===(f=v[0])||void 0===f?void 0:f.discount)>0?null===(y=v[0])||void 0===y?void 0:y.discount:null===(x=v[0])||void 0===x?void 0:x.price]})]})]})}):null]})})}})},b=t=>{let{postData:e,completeDataObject:i,CardStyle:l,ThemeStyle:s,clickToShowPopUp:a,loadBranding:o}=t;return(0,n.useEffect)((()=>{o()}),[]),(0,r.jsx)("div",{className:"tb_l_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const n=i[t];return(0,r.jsx)(_,{Post:n,CardStyle:l,ThemeStyle:s,itemIndex:e,clickToShowPopUp:a},`wdt_crd_${e}_${t.id}`)}))})}},97628:(t,e,i)=>{i.d(e,{EC:()=>n,Oi:()=>s,Yo:()=>l});const n=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),l=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),s=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")}}]);
//# sourceMappingURL=9875.9178b319.chunk.js.map