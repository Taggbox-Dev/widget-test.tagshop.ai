(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3694,4210],{44238:(t,e,i)=>{"use strict";i.d(e,{bs:()=>d});var s=i(31530),o=i(7665),l=i(83884),a=i(10753),n=i(89620);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:h}=i,m=null===d||void 0===d?void 0:d.id,v=(l.HY,null===h||void 0===h?void 0:h.id),b=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:_,network:p,itemId:g,load:f}=b.dataset,w=document.querySelector(`img[data-item-id="${g}"]`),x=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==x&&void 0!==x&&x.length){var k;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(k=x[0])||void 0===k?void 0:k.postFileNew);if(!t&&w){if([2,18,3,28].includes(+p)&&"0"===f&&"34"!==_&&!b.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,o,l,a,n;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(l=i[0])||void 0===l?void 0:l.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(n=i[0])||void 0===n?void 0:n.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:v,postId:g,ownerId:m},i,x);try{const{data:e}=await(new n.A).post(l.t5,t,{headers:a.ML}),i=l.HY||l.MH?"":`https://images.${l.QR}/`;b.src="18"===p?`${i}${e.media}`:e.media}catch{b.src=s.gX}finally{u(b)}}else b.src=s.gX,u(b);r.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;b.src=t,b.srcset=t,u(b),r.shift()}}},u=t=>t.setAttribute("data-load","1")},43694:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var s=i(82483),o=i(56723);class l extends s.PureComponent{render(){const{Post:t,ctaClass:e,onClickToCTA:i}=this.props,{cta:s}=t,l={color:null===s||void 0===s?void 0:s.color,backgroundColor:null===s||void 0===s?void 0:s.background};return(0,o.jsxs)("div",{className:e,style:l,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),i(t),window.open(`${s.url}`,"_blank")},children:[" ",s.text]})}}const a=l},82803:(t,e,i)=>{"use strict";i.d(e,{A:()=>m});var s=i(82483),o=i(12251),l=i(99998),a=i(76467),n=i(99009),r=i(29269),d=i(56723);const c=(0,s.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,s=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,s]})]})})),u=t=>{let{products:e,appData:i,Post:o}=t;const[u,h]=(0,s.useState)(null),m=(0,s.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),v=(0,s.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,r.hq)({})}),[i,o]),b=(0,s.useCallback)(((t,e)=>{t.stopPropagation(),v(e),window.open(e.url,"_blank")}),[v]);return null!==m&&void 0!==m&&m.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,n.Ul)()}`,s=u===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:e=>b(e,t),"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ "+(0===m.type?"tb_hotspot_ani__":""),children:e+1}),(0,l.createPortal)((0,d.jsx)(a.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,d.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,s.memo)(u),m=(0,o.Ng)((t=>({appData:t.appData})))(h)},7775:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(82483),o=i(99009),l=i(31530),a=i(21645),n=i(44238),r=i(82803),d=i(56723);class c extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(l){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:l,Post:a}=t;this.state={isVisible:!this.props.observer,height:(null===l||void 0===l?void 0:l.height)||(null===a||void 0===a||null===(e=a.media)||void 0===e?void 0:e.height)||0,width:(null===l||void 0===l?void 0:l.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this.observer=null}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()})),this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:!0}),this.observer.disconnect())}),{threshold:.01}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect()}render(){var t,e,i,s;const{ImageClass:o,Post:c,hotspot:u,size:h,blurBG:m,ProductSetting:v,mediaOnly:b}=this.props,{id:_,link:p,products:g}=c,f=b||(null===c||void 0===c?void 0:c.media),{isVisible:w,height:x,width:k,currentWidth:y,currentHeight:j}=this.state,C=h||100*x/k,N={paddingBottom:1===C?null:`${C}%`},$={backgroundImage:w?`url(${null===f||void 0===f||null===(t=f.image)||void 0===t?void 0:t.small})`:null},I=k>x?"100%":k/x*100+"%",S=k>x?x/k*100+"%":"100%",P=c.isProduct&&u,A={width:P&&h?I:null,height:P&&h?S:null};return(0,d.jsxs)("div",{className:`${o}_wrap_`,style:N,ref:this.mediaRef,children:[P&&m?(0,d.jsx)("div",{className:"tb_blur_bg_",style:$}):null,(0,d.jsxs)("div",{className:`${o}_wrap_in`,style:A,children:[P?(0,d.jsx)(r.A,{products:g,ProductSetting:v,hotspot:c.hotspot,dataPost:c}):null,w?(0,d.jsx)("img",{className:`${o} tb_media-${_}`,src:null===f||void 0===f||null===(e=f.image)||void 0===e?void 0:e.small,srcSet:`${null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.small} 1x, ${null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.large} 2x`,sizes:`${y}px`,loading:w?"eager":"lazy",decoding:"async",fetchPriority:w?"high":"low","data-id":_,height:j,width:y,"data-height":x,"data-width":k,"data-link":p,onLoad:this.onLoad,onError:t=>{t.target.src=`${l.th}/media/error/no-image.svg`,t.target.srcset=`${l.th}/media/error/no-image.svg`,(0,n.bs)(t)},alt:null===f||void 0===f?void 0:f.title,title:(0,a.Ay)(null===f||void 0===f?void 0:f.title)},_):null]})]})}}},33689:(t,e,i)=>{"use strict";i.d(e,{A:()=>u});var s=i(82483),o=i(48819),l=i.n(o),a=i(83884),n=i(21645),r=i(99009),d=i(56723);class c extends s.Component{constructor(t){super(t),this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:s}=await(0,r.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small,{signal:this.abortController.signal});this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&"AbortError"!==i.name&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,isVisible:!this.props.observer,calcHeight:0,calcWidth:0},this.mediaRef=s.createRef(),this.observer=null,this._isMounted=!1,this.abortController=new AbortController}componentDidMount(){this._isMounted=!0,this.mediaSizeCalc();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this._isMounted&&this.setState({isVisible:!0})}),{threshold:.1}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}catch(t){this._isMounted&&this.setState({isVisible:!0})}}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect(),this.observer&&this.mediaRef.current&&this.observer.unobserve(this.mediaRef.current),this.abortController.abort()}render(){var t,e,i,s;const{VideoClass:o,Post:r,controls:c,autoPlay:u,handleVideoEnded:h,muted:m,intervalTime:v,size:b}=this.props,{isVisible:_,calcHeight:p,calcWidth:g}=this.state,{media:f,id:w,link:x,networkId:k}=r,y=1===b,j=null!==f&&void 0!==f&&f.height?null===f||void 0===f?void 0:f.height:p,C=null!==f&&void 0!==f&&f.width?null===f||void 0===f?void 0:f.width:g,N={paddingBottom:`${y?null:b||100*j/C}%`};return(0,d.jsx)("div",{className:`${o}_wrap_`,style:N,ref:this.mediaRef,children:(0,d.jsx)(l(),{className:`${o} tb_media-${w}`,url:_?null===f||void 0===f||null===(t=f.video)||void 0===t?void 0:t.full:null===f||void 0===f||null===(e=f.image)||void 0===e?void 0:e.small,"data-height":j,"data-width":C,"data-type":"video","data-network":k,"data-link":x,"data-item-id":w,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":C,"data-height":j,poster:null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.small}},file:{attributes:{preload:"metadata",poster:null===f||void 0===f||null===(s=f.image)||void 0===s?void 0:s.small}}},loop:!(a.aD&&!a.HY&&null!==r&&void 0!==r&&r.loopStop)&&u,onError:t=>{y&&h&&setTimeout((()=>{this._isMounted&&h&&h()}),1e3*v),this.setVideoLoaded(!1)},autoPlay:_&&u?1:0,muted:m,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!a.HY),playing:_&&u?1:0,controls:c||!1,onEnded:h,title:(0,n.Ay)(null===f||void 0===f?void 0:f.title)})})}}const u=(0,s.memo)(c)},19882:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(82483),o=i(83884),l=i(56723);const a=s.lazy((()=>i.e(8807).then(i.bind(i,88807)))),n=t=>{const{Post:e,IconClass:i,isCenter:n,hideVideo:r,show:d}=t,c=!![3,5].includes(e.type),u=7===e.network.id,h=!!(e.mediaList&&e.mediaList.length>0),m=1===e.isAudio,v=!!e.isProduct,b=(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(a,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),_=(0,l.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),p=(0,l.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,l.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,l.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,l.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return d?(0,l.jsxs)(l.Fragment,{children:[n&&(u||c)?(0,l.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!u?w:"",c&&u?b:""]}):null,v||h||c?(0,l.jsxs)("div",{className:`${i} tb__media_ico_`,children:[v?f:"",h?_:"",n||!c||u||r?"":m?p:g]}):null]}):null}},49502:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var s=i(82483),o=i(21645),l=i(83884),a=i(99009),n=i(40987),r=i(56723);class d extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,s;const t=(null===(i=this.contentRef)||void 0===i||null===(s=i.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:s,maxLines:d,isReadMore:c}=this.props,u=t.content.trimcontent&&!l.HY?t.content.trimcontent:0,h={WebkitLineClamp:d,textAlign:t.style.textAlign},m=(0,a.w)(i),v=`${e} ${c?"":""+(u?` tb_content_line-${u}`:"")} tb-cTBfont-${t.style.variant}`;return(0,r.jsxs)("div",{className:v,ref:this.contentRef,style:h,children:[s?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.Ay)(s)}):null,(0,r.jsx)(n.default,{content:m,CardStyle:t})]})}}},40987:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(82483),o=i(21645),l=i(56723);const a=t=>{let{content:e,CardStyle:i}=t;const{background:a,backgroundStatus:n,color:r,colorStatus:d,feedHashtag:c,allHashtag:u}=(null===i||void 0===i?void 0:i.hashtag)||{},h={color:d?r:"inherit",fontWeight:"bold",backgroundColor:n?a:"transparent",display:"inline-block",margin:"0 2px"};return e?c||u?e.split(/(\s+)/).map(((t,e)=>t.startsWith("#")?(0,l.jsx)("div",{className:"tb_highlight",style:h,children:t},e):t.includes("\n")?t.split("\n").map(((t,i,o)=>(0,l.jsxs)(s.Fragment,{children:[t,i<o.length-1&&(0,l.jsx)("br",{})]},`${e}-${i}`))):(0,l.jsx)(s.Fragment,{children:t},e))):(0,o.Ay)(e):null},n=(0,s.memo)(a)},92977:(t,e,i)=>{"use strict";i.d(e,{A:()=>n});var s=i(82483),o=i(56723);const l=t=>{let{networkId:e}=t;const{className:i,color:s}={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:s},"tb-network":e,children:(0,o.jsx)("div",{})})},a=t=>{let{ThemeID:e,networkId:i}=t;const{className:s,color:l}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:l},"tb-network":i})};class n extends s.PureComponent{render(){const{rating:t,networkId:e,ThemeID:i}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>i?(0,o.jsx)(a,{ThemeID:i,networkId:e},s):(0,o.jsx)(l,{networkId:e},s))):null})}}},2319:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var s=i(82483),o=i(29269),l=i(56723);class a extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:i,ThemeInfo:s}=this.props;e.stopPropagation(),(0,o.hq)({type:2,action:2,wall:s.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:s.ownerId}),(0,o.x9)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:i,twitter:s,linkedin:o}=null===e||void 0===e?void 0:e.share,a=t=>{let{shareOn:e,icon:i}=t;return(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,l.jsx)("div",{})})})};return(0,l.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,l.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,l.jsx)("div",{})}),(0,l.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,l.jsx)(a,{shareOn:i,icon:"facebook"}):"",s?(0,l.jsx)(a,{shareOn:s,icon:"twitter"}):"",o?(0,l.jsx)(a,{shareOn:o,icon:"linkedin"}):""]})]})}}},9916:(t,e,i)=>{"use strict";i.d(e,{EC:()=>s,Oi:()=>l,Yo:()=>o});const s=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),o=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),l=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},95098:()=>{}}]);
//# sourceMappingURL=4210.da01c2e0.chunk.js.map