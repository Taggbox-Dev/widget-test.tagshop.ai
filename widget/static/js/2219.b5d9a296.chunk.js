(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2219,2691,4935,5115,7316,7955,9782],{70501:(t,e,i)=>{"use strict";i.d(e,{bs:()=>d});var s=i(8159),l=i(56364),a=i(40329),o=i(32866),n=i(98409);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:l}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(l))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=l.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:h}=i,m=null===d||void 0===d?void 0:d.id,v=(a.HY,null===h||void 0===h?void 0:h.id),p=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:_,network:b,itemId:g,load:f}=p.dataset,x=document.querySelector(`img[data-item-id="${g}"]`),y=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==y&&void 0!==y&&y.length){var j;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(j=y[0])||void 0===j?void 0:j.postFileNew);if(!t&&x){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==_&&!p.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,l,a,o,n;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(l=i[0])||void 0===l?void 0:l.type,link:null===(a=i[0])||void 0===a?void 0:a.link,postFile:null===(o=i[0])||void 0===o?void 0:o.postFile,mediaFile:null===(n=i[0])||void 0===n?void 0:n.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:v,postId:g,ownerId:m},i,y);try{const{data:e}=await(new n.A).post(a.t5,t,{headers:o.ML}),i=a.HY||a.MH?"":`https://images.${a.QR}/`;p.src="18"===b?`${i}${e.media}`:e.media}catch{p.src=s.gX}finally{u(p)}}else p.src=s.gX,u(p);r.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;p.src=t,p.srcset=t,u(p),r.shift()}}},u=t=>t.setAttribute("data-load","1")},94935:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(88094),l=i(96913),a=i(17524),o=i(15678);class n extends s.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:s}=this.props;return(0,o.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:(0,o.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:(0,a.Ay)(t.name),width:s||44,height:s||44,onError:e=>{const s=(0,l.Yo)(i),a="#ffffff"==s?"000":s.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${a}&color=fff&length=1`}})},Math.random())}}},81702:(t,e,i)=>{"use strict";i.d(e,{A:()=>a});var s=i(15678);const l=(t,e,i)=>(0,s.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:t,fontSize:i},children:(0,s.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{color:t,width:10*e+"%",fontSize:i},children:[(0,s.jsx)("div",{})," "]})}),a=t=>{let{rating:e,size:i,color:a}=t;const o=e>5?5:e,n=Math.trunc(5-o),r=Math.trunc(o),d=String(o).split(".")[1];return(0,s.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[r?[...Array(r)].map(((t,e)=>(0,s.jsx)("div",{"data-index":e,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:a||"#F8B90C",fontSize:i},children:(0,s.jsx)("div",{})},e))):null,d>0?l(a||"#F8B90C",d,i):null,n?[...Array(n)].map(((t,e)=>(0,s.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:i},children:(0,s.jsx)("div",{})},e))):null]})}},1111:(t,e,i)=>{"use strict";i.d(e,{A:()=>m});var s=i(88094),l=i(83546),a=i(83775),o=i(24076),n=i(19066),r=i(42682),d=i(15678);const c=(0,s.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,s=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,s]})]})})),u=t=>{let{products:e,appData:i,Post:l}=t;const[u,h]=(0,s.useState)(null),m=(0,s.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),v=(0,s.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,r.hq)({})}),[i,l]),p=(0,s.useCallback)(((t,e)=>{t.stopPropagation(),v(e),window.open(e.url,"_blank")}),[v]);return null!==m&&void 0!==m&&m.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,n.Ul)()}`,s=u===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:e=>p(e,t),"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ "+(0===m.type?"tb_hotspot_ani__":""),children:e+1}),(0,a.createPortal)((0,d.jsx)(o.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,d.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,s.memo)(u),m=(0,l.Ng)((t=>({appData:t.appData})))(h)},49782:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(88094),l=i(19066),a=i(8159),o=i(17524),n=i(70501),r=i(1111),d=i(15678);class c extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,l.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(a){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:a,Post:o}=t;this.state={isVisible:!this.props.observer,height:(null===a||void 0===a?void 0:a.height)||(null===o||void 0===o||null===(e=o.media)||void 0===e?void 0:e.height)||0,width:(null===a||void 0===a?void 0:a.width)||(null===o||void 0===o||null===(i=o.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this.observer=null}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()})),this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:!0}),this.observer.disconnect())}),{threshold:.01}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect()}render(){var t,e,i,s;const{ImageClass:l,Post:c,hotspot:u,size:h,blurBG:m,ProductSetting:v,mediaOnly:p}=this.props,{id:_,link:b,products:g}=c,f=p||(null===c||void 0===c?void 0:c.media),{isVisible:x,height:y,width:j,currentWidth:w,currentHeight:k}=this.state,S=h||100*y/j,N={paddingBottom:1===S?null:`${S}%`},C={backgroundImage:x?`url(${null===f||void 0===f||null===(t=f.image)||void 0===t?void 0:t.small})`:null},$=j>y?"100%":j/y*100+"%",P=j>y?y/j*100+"%":"100%",I=c.isProduct&&u,A={width:I&&h?$:null,height:I&&h?P:null};return(0,d.jsxs)("div",{className:`${l}_wrap_`,style:N,ref:this.mediaRef,children:[I&&m?(0,d.jsx)("div",{className:"tb_blur_bg_",style:C}):null,(0,d.jsxs)("div",{className:`${l}_wrap_in`,style:A,children:[I?(0,d.jsx)(r.A,{products:g,ProductSetting:v,hotspot:c.hotspot,dataPost:c}):null,x?(0,d.jsx)("img",{className:`${l} tb_media-${_}`,src:null===f||void 0===f||null===(e=f.image)||void 0===e?void 0:e.small,srcSet:`${null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.small} 1x, ${null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.large} 2x`,sizes:`${w}px`,loading:x?"eager":"lazy",decoding:"async",fetchPriority:x?"high":"low","data-id":_,height:k,width:w,"data-height":y,"data-width":j,"data-link":b,onLoad:this.onLoad,onError:t=>{t.target.src=`${a.th}/media/error/no-image.svg`,t.target.srcset=`${a.th}/media/error/no-image.svg`,(0,n.bs)(t)},alt:null===f||void 0===f?void 0:f.title,title:(0,o.Ay)(null===f||void 0===f?void 0:f.title)},_):null]})]})}}},42691:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var s=i(88094),l=i(17524),a=i(40329),o=i(19066),n=i(85115),r=i(15678);class d extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,s;const t=(null===(i=this.contentRef)||void 0===i||null===(s=i.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:s,maxLines:d,isReadMore:c}=this.props,u=t.content.trimcontent&&!a.HY?t.content.trimcontent:0,h={WebkitLineClamp:d,textAlign:t.style.textAlign},m=(0,o.w)(i),v=`${e} ${c?"":""+(u?` tb_content_line-${u}`:"")} tb-cTBfont-${t.style.variant}`;return(0,r.jsxs)("div",{className:v,ref:this.contentRef,style:h,children:[s?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,l.Ay)(s)}):null,(0,r.jsx)(n.default,{content:m,CardStyle:t})]})}}},85115:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var s=i(88094),l=i(15678);const a=t=>{let{content:e,CardStyle:i}=t;const{background:a,backgroundStatus:o,color:n,colorStatus:r,feedHashtag:d,allHashtag:c}=(null===i||void 0===i?void 0:i.hashtag)||{},u={color:r?n:"inherit",fontWeight:"bold",backgroundColor:o?a:"transparent",display:"inline-block",margin:"0 2px"};return e?d||c?e.split(/(\s+)/).map(((t,e)=>t.startsWith("#")?(0,l.jsx)("div",{className:"tb_highlight",style:u,children:t},e):t.includes("\n")?t.split("\n").map(((t,i,a)=>(0,l.jsxs)(s.Fragment,{children:[t,i<a.length-1&&(0,l.jsx)("br",{})]},`${e}-${i}`))):(0,l.jsx)(s.Fragment,{children:t},e))):e:null},o=(0,s.memo)(a)},97955:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(88094),l=i(19066),a=i(15678);const o=t=>{const{createdAt:e,timeClass:i}=t;return(0,a.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,l.fF)(e)}`,children:(0,l.fF)(e)})},n=(0,s.memo)(o)},44986:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>_});i(88094);var s=i(94935),l=i(97955),a=i(81702),o=i(47043),n=i(15678);const r=t=>{let{Post:e,CardStyle:i}=t;const{author:r,networkId:d}=e,c=(0,o.zK)(r.name),u=!(!i.author.status||c),h=e.rating>0;return(0,n.jsxs)("div",{className:"tb_l_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,n.jsxs)("div",{className:"tb_l_author",children:[u?(0,n.jsx)(s.default,{author:r,network:e.network,networkId:d,authorClass:"tb_l_author_profile"}):"",(0,n.jsxs)("div",{className:"tb_l_author_info",children:[u?(0,n.jsx)("div",{className:"tb_l_authorname",children:r.name}):"",i.timeStatus?(0,n.jsx)(l.default,{createdAt:e.createdAt,timeClass:`tb_l_time tb-cTBfont-${i.author.variant}`}):""]})]}),h?(0,n.jsxs)("div",{className:"tb_l_rating__",children:[(0,n.jsx)(a.A,{size:16,rating:e.rating})," "]}):""]})};var d=i(42691),c=i(40329),u=i(8159),h=i(49782);const m=()=>(0,n.jsx)("div",{className:"tb_l_media_icon tb__media_ico_c",children:(0,n.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,n.jsx)("div",{})})}),v=t=>{let{Post:e}=t;return e.mediaList.length>0?e.mediaList.map(((t,i)=>(0,n.jsxs)("div",{className:"tb_l_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[[3,5].includes(t.type)?(0,n.jsx)(m,{}):null,(0,n.jsx)(h.default,{ImageClass:"tb_l_image",Post:e,size:1,mediaOnly:t,hotspot:!1,blurBG:!1,observer:!0},i)]}))):(0,n.jsxs)("div",{className:"tb_l_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[[3,5].includes(e.type)?(0,n.jsx)(m,{}):null,(0,n.jsx)(h.default,{ImageClass:"tb_l_image",Post:e,size:1,hotspot:!1,blurBG:!1,observer:!0})]})},p=t=>{var e,i,s,l,a,h,m;let{Post:p,clickToShowPopUp:_,itemIndex:b,CardStyle:g,ThemeStyle:f}=t;const x={padding:g.style.padding/2},y=1!==p.type,j=g.content.trimcontent?(0,o.Ex)(p.content.text,200):p.content.text,w=p.products;return(0,n.jsx)("div",{id:`tb_l_id-${p.id}`,className:"tb_l_post_wrapper","tb-network":p.networkId,role:"article","aria-label":`Post ${parseInt(b)+1},${j}`,style:x,tabIndex:"0",children:(0,n.jsxs)("div",{className:"tb_l_post_in",onClick:_(b,p),role:"button","aria-label":"Popup",tabIndex:"0",children:[(0,n.jsx)(r,{Post:p,CardStyle:g,ThemeStyle:f,mediaType:y,size:40,rating:p.rating}),c.HY&&g.content.status?(0,n.jsx)("div",{className:"tb_l_contant_wrapper",children:(0,n.jsx)(d.default,{contentClass:"tb_l_content",Post:p,content:j,CardStyle:g,contentTitle:p.contentTitle})}):"",y?(0,n.jsx)("div",{className:"tb_l_media_cont",children:(0,n.jsx)(v,{Post:p,CardStyle:g,ThemeStyle:f})}):"",p.isProduct?(0,n.jsx)("div",{className:"tb_l_p_list",children:(0,n.jsxs)("div",{className:"tb_l_p_wrp",children:[(0,n.jsx)("div",{className:"tb_l_p_",children:(0,n.jsx)("img",{className:"tb_l_p_img",decoding:"async",src:null===(e=w[0])||void 0===e?void 0:e.image,width:"60",height:"60",alt:null===(i=w[0])||void 0===i?void 0:i.title,loading:"lazy",draggable:"false",onError:t=>t.target.src=u.qF})}),(0,n.jsxs)("div",{className:"tb_l_p_info",children:[(0,n.jsx)("div",{className:"tb_l_p_t",children:null===(s=w[0])||void 0===s?void 0:s.title}),(0,n.jsxs)("div",{className:"tb_l_p_p",children:[null===(l=w[0])||void 0===l?void 0:l.currency,(null===(a=w[0])||void 0===a?void 0:a.discount)>0?null===(h=w[0])||void 0===h?void 0:h.discount:null===(m=w[0])||void 0===m?void 0:m.price]})]})]})}):null]})})},_=t=>{let{postData:e,completeDataObject:i,CardStyle:s,ThemeStyle:l,clickToShowPopUp:a}=t;return(0,n.jsx)("div",{className:"tb_l_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const o=i[t];return(0,n.jsx)(p,{Post:o,CardStyle:s,ThemeStyle:l,itemIndex:e,clickToShowPopUp:a},`wdt_crd_${e}_${t.id}`)}))})}},96913:(t,e,i)=>{"use strict";i.d(e,{EC:()=>s,Oi:()=>a,Yo:()=>l});const s=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),l=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),a=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},95098:()=>{}}]);