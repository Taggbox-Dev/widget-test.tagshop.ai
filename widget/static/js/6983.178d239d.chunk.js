(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[552,4935,5111,6983,7492,7955,9782],{74361:()=>{},53456:()=>{},70501:(t,e,i)=>{"use strict";i.d(e,{bs:()=>d});var a=i(8159),s=i(56364),l=i(40329),o=i(97014),n=i(98409);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:a,themeId:s}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(s))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${a}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=s.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:h}=i,m=null===d||void 0===d?void 0:d.id,p=(l.HY,null===h||void 0===h?void 0:h.id),_=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:v,network:g,itemId:b,load:f}=_.dataset,x=document.querySelector(`img[data-item-id="${b}"]`),w=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===b)):[];if(null!==w&&void 0!==w&&w.length){var j;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(j=w[0])||void 0===j?void 0:j.postFileNew);if(!t&&x){if([2,18,3,28].includes(+g)&&"0"===f&&"34"!==v&&!_.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var a,s,l,o,n;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(a=i[0])||void 0===a?void 0:a.feedId,type:null===(s=i[0])||void 0===s?void 0:s.type,link:null===(l=i[0])||void 0===l?void 0:l.link,postFile:null===(o=i[0])||void 0===o?void 0:o.postFile,mediaFile:null===(n=i[0])||void 0===n?void 0:n.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:p,postId:b,ownerId:m},i,w);try{const{data:e}=await(new n.A).post(l.t5,t,{headers:o.ML}),i=l.HY||l.MH?"":`https://images.${l.QR}/`;_.src="18"===g?`${i}${e.media}`:e.media}catch{_.src=a.gX}finally{u(_)}}else _.src=a.gX,u(_);r.shift(),c()}else{const t=`${a.th}/media/images/no-image.svg`;_.src=t,_.srcset=t,u(_),r.shift()}}},u=t=>t.setAttribute("data-load","1")},94935:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var a=i(88094),s=i(96913),l=i(17524),o=i(15678);class n extends a.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:a}=this.props;return(0,o.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:(0,o.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:(0,l.Ay)(t.name),width:a||44,height:a||44,onError:e=>{const a=(0,s.Yo)(i),l="#ffffff"==a?"000":a.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${l}&color=fff&length=1`}})},Math.random())}}},81702:(t,e,i)=>{"use strict";i.d(e,{A:()=>l});var a=i(15678);const s=(t,e,i)=>(0,a.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:t,fontSize:i,minWidth:i+"px"},children:(0,a.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{color:t,width:10*e+"%",fontSize:i,minWidth:i+"px"},children:[(0,a.jsx)("div",{})," "]})}),l=t=>{let{rating:e,size:i,color:l}=t;const o=e>5?5:e,n=Math.trunc(5-o),r=Math.trunc(o),d=String(o).split(".")[1];return(0,a.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[r?[...Array(r)].map(((t,e)=>(0,a.jsx)("div",{"data-index":e,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:l||"#F8B90C",fontSize:i,minWidth:i+"px"},children:(0,a.jsx)("div",{})},e))):null,d>0?s(l||"#F8B90C",d,i):null,n?[...Array(n)].map(((t,e)=>(0,a.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:i,minWidth:i+"px"},children:(0,a.jsx)("div",{})},e))):null]})}},1111:(t,e,i)=>{"use strict";i.d(e,{A:()=>m});var a=i(88094),s=i(90414),l=i(83775),o=i(24076),n=i(19066),r=i(42682),d=i(15678);const c=(0,a.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,a=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,a]})]})})),u=t=>{let{products:e,appData:i,Post:s}=t;const[u,h]=(0,a.useState)(null),m=(0,a.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),p=(0,a.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,r.hq)({})}),[i,s]),_=(0,a.useCallback)(((t,e)=>{t.stopPropagation(),p(e),window.open(e.url,"_blank")}),[p]);return null!==m&&void 0!==m&&m.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,n.Ul)()}`,a=u===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(a?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:e=>_(e,t),"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ "+(0===m.type?"tb_hotspot_ani__":""),children:e+1}),(0,l.createPortal)((0,d.jsx)(o.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,d.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,a.memo)(u),m=(0,s.Ng)((t=>({appData:t.appData})))(h)},49782:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var a=i(88094),s=i(19066),l=i(8159),o=i(70501),n=i(1111),r=i(15678);class d extends a.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var a;const{width:t,height:e}=await(0,s.TW)(null===i||void 0===i||null===(a=i.image)||void 0===a?void 0:a.small);this._isMounted&&this.setState({height:e,width:t})}catch(l){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:l,Post:o}=t;this.state={height:(null===l||void 0===l?void 0:l.height)||(null===o||void 0===o||null===(e=o.media)||void 0===e?void 0:e.height)||0,width:(null===l||void 0===l?void 0:l.width)||(null===o||void 0===o||null===(i=o.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=a.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,a;const{height:s,width:d}=this.state;if(!s||!d)return null;const{ImageClass:c,Post:u,hotspot:h,size:m,blurBG:p,ProductSetting:_,mediaOnly:v,inView:g}=this.props,{id:b,link:f,products:x}=u,w=v||(null===u||void 0===u?void 0:u.media),{currentWidth:j,currentHeight:y}=this.state,k=m||100*s/d,C={paddingBottom:1===k?null:`${k}%`},S={backgroundImage:g?`url(${null===w||void 0===w||null===(t=w.image)||void 0===t?void 0:t.small})`:null},P=d>s?"100%":d/s*100+"%",$=d>s?s/d*100+"%":"100%",N=u.isProduct&&h,I={width:N&&m?P:null,height:N&&m?$:null};return(0,r.jsxs)("div",{className:`${c}_wrap_`,style:C,ref:this.mediaRef,children:[N&&p?(0,r.jsx)("div",{className:"tb_blur_bg_",style:S}):null,(0,r.jsxs)("div",{className:`${c}_wrap_in`,style:I,children:[N?(0,r.jsx)(n.A,{products:x,ProductSetting:_,hotspot:u.hotspot,dataPost:u}):null,(0,r.jsx)("img",{className:`${c} tb_media-${b}`,src:null===w||void 0===w||null===(e=w.image)||void 0===e?void 0:e.small,srcSet:`${null===w||void 0===w||null===(i=w.image)||void 0===i?void 0:i.small} 1x, ${null===w||void 0===w||null===(a=w.image)||void 0===a?void 0:a.large} 2x`,sizes:`${j}px`,loading:g?"eager":"lazy",decoding:"async",fetchPriority:g?"high":"low","data-id":b,height:y,width:j,"data-height":s,"data-width":d,"data-link":f,onLoad:this.onLoad,onError:t=>{t.target.src=`${l.th}/media/error/no-image.svg`,t.target.srcset=`${l.th}/media/error/no-image.svg`,(0,o.bs)(t)},alt:null===w||void 0===w?void 0:w.title,title:null===w||void 0===w?void 0:w.title},`${b}-${s}-${d}`)]})]})}}},42691:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var a=i(88094),s=i(17524),l=i(40329),o=i(19066),n=i(15678);class r extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,a;const t=(null===(i=this.contentRef)||void 0===i||null===(a=i.current)||void 0===a?void 0:a.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:a,maxLines:r,isReadMore:d}=this.props,c=t.content.trimcontent&&!l.HY?t.content.trimcontent:0,u={WebkitLineClamp:r,textAlign:t.style.textAlign},h=(0,o.w)(i),m=`${e} ${d?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${t.style.variant}`;return(0,n.jsxs)("div",{className:m,ref:this.contentRef,style:u,children:[a?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,s.Ay)(a)}):null,(0,s.Ay)(h)]})}}},97955:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var a=i(88094),s=i(19066),l=i(15678);const o=t=>{const{createdAt:e,timeClass:i}=t;return(0,l.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,s.fF)(e)}`,children:(0,s.fF)(e)})},n=(0,a.memo)(o)},52722:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>j});var a=i(88094),s=i(14410),l=i.n(s),o=i(94935),n=i(97955),r=i(47043),d=i(15678);const c=t=>{let{Post:e,CardStyle:i}=t;const{author:a,networkId:s}=e,l=(0,r.zK)(a.name),c=!(!i.author.status||l);return(0,d.jsx)("div",{className:"tb_g_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:(0,d.jsxs)("div",{className:"tb_g_author",children:[c?(0,d.jsx)(o.default,{author:a,network:e.network,networkId:s,authorClass:"tb_g_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_g_author_info",children:[c?(0,d.jsx)("div",{className:"tb_g_authorname",children:a.name}):"",i.timeStatus?(0,d.jsx)(n.default,{createdAt:e.createdAt,timeClass:`tb_g_time tb-cTBfont-${i.author.variant}`}):""]})]})})};i(53456);var u=i(49782),h=i(33578),m=i(69819);i(12755),i(74361);const p=t=>{let{Post:e,ImageClass:i}=t;const a=(t,e,i,a)=>(0,d.jsx)(h.qr,{children:(0,d.jsx)(u.default,{ImageClass:e,Post:t,mediaOnly:i||!1,size:!1,observer:!1})},a?`slider_${a}`:null);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h.RC,{modules:[m.dK,m.Vx],spaceBetween:0,autoHeight:!0,slidesPerView:1,pagination:!1,navigation:{prevEl:`#tb_c_p_prev-${e.id}`,nextEl:`#tb_c_p_next-${e.id}`},className:"tb_c_p__media_slider",children:e.mediaList.length>0?e.mediaList.map(((t,s)=>(0,d.jsx)(a,{ImageClass:i,Post:e,Item:t,index:s}))):(0,d.jsx)(a,{ImageClass:i,Post:e})}),(null===e||void 0===e?void 0:e.mediaList.length)>1&&(0,d.jsxs)("div",{className:"tb_c_p__arrow_wrapper_",onClick:t=>t.stopPropagation(),children:[(0,d.jsx)("div",{id:`tb_c_p_prev-${e.id}`,className:"tb_c_p__arrow tb_c_p__arrow_left__ tb__icon tb-arrow-left-alt",children:(0,d.jsx)("div",{})}),(0,d.jsx)("div",{id:`tb_c_p_next-${e.id}`,className:"tb_c_p__arrow tb_c_p__arrow_right__ tb__icon tb-arrow-right-alt",children:(0,d.jsx)("div",{})})]})]})},_=a.memo(p);var v=i(42691),g=i(81702),b=i(40329),f=i(8159);const x=t=>{var e,i,s,l,o,n;let{Post:u,adjustWidth:h,CardStyle:m,clickToShowPopUp:p,itemIndex:x,ThemeStyle:w,ThemeInfo:j,onClickPopUpSlider:y}=t;const k={width:`${h}%`,padding:m.style.padding/2},C=1!=u.type,S=m.content.trimcontent?(0,r.Ex)(u.content.text,200):u.content.text;(0,a.useEffect)((()=>{u.isPopUp&&y(x,u)}),[x,u.isPopUp,u]);const P=u.products;return(0,d.jsx)("div",{id:`tb_g_id-${u.id}`,className:"tb_g_post_wrapper","tb-network":u.network.id,role:"article","aria-label":`Post ${parseInt(x)+1},${S}`,style:k,tabIndex:"0",children:(0,d.jsxs)("div",{className:"tb_g_post_in",onClick:p(x,u),role:"button","aria-label":"Popup",tabIndex:"0",children:[C?(0,d.jsx)("div",{className:"tb_g_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:(0,d.jsx)(_,{ImageClass:"tb_g_image",VideoClass:"tb_g_video",Post:u,CardStyle:m,ThemeInfo:j,ThemeStyle:w})}):null,(0,d.jsxs)("div",{className:"tb_g_contant_wrapper",children:[(0,d.jsx)(c,{Post:u,CardStyle:m,ThemeStyle:w,mediaType:C,size:40}),u.rating>0?(0,d.jsxs)("div",{className:"tb_g_rating__",children:[(0,d.jsx)(g.A,{size:20,rating:u.rating})," "]}):"",b.HY&&m.content.status?(0,d.jsx)(v.default,{contentClass:"tb_g_content",Post:u,content:S,CardStyle:m,contentTitle:u.contentTitle}):"",u.isProduct?(0,d.jsxs)("div",{className:"tb_g_p_wrp",children:[(0,d.jsx)("div",{className:"tb_g_p_",children:(0,d.jsx)("img",{className:"tb_g_p_img",decoding:"async",src:null===(e=P[0])||void 0===e?void 0:e.image,width:"187",height:"259",alt:"",loading:"lazy",draggable:"false",onError:t=>t.target.src=f.qF})}),(0,d.jsxs)("div",{className:"tb_g_p_info",children:[(0,d.jsx)("div",{className:"tb_g_p_t",children:null===(i=P[0])||void 0===i?void 0:i.title}),(0,d.jsxs)("div",{className:"tb_g_p_p",children:[null===(s=P[0])||void 0===s?void 0:s.currency,(null===(l=P[0])||void 0===l?void 0:l.discount)>0?null===(o=P[0])||void 0===o?void 0:o.discount:null===(n=P[0])||void 0===n?void 0:n.price]})]})]}):null]})]})})};class w extends a.PureComponent{render(){const{postData:t,completeDataObject:e,adjustWidth:i,CardStyle:a,ThemeStyle:s,postSize:o,clickToShowPopUp:n,onClickPopUpSlider:r}=this.props;return(0,d.jsx)(l(),{className:"tb_g_post_container",tabIndex:"0","aria-label":`There are ${t&&t.length>0?t.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_g_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:t&&t.length>0&&t.map(((t,l)=>{const c=e[t];return(0,d.jsx)(x,{adjustWidth:1==c.highlight?2*i:i,clickToShowPopUp:n,onClickPopUpSlider:r,Post:c,postSize:o,itemIndex:l,CardStyle:a,ThemeStyle:s},l)}))})}}const j=w},96913:(t,e,i)=>{"use strict";i.d(e,{EC:()=>a,Oi:()=>l,Yo:()=>s});const a=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),s=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),l=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},95098:()=>{}}]);