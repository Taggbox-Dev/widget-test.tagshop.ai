(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[768,3538,3813,4897,4961,7005,7278,7342,9410],{8494:(t,e,i)=>{"use strict";i.d(e,{bs:()=>d});var s=i(78250),o=i(23499),n=i(92908),a=i(95553),l=i(89652);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:h}=i,p=null===d||void 0===d?void 0:d.id,m=(n.HY,null===h||void 0===h?void 0:h.id),v=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:_,network:b,itemId:f,load:g}=v.dataset,w=document.querySelector(`img[data-item-id="${f}"]`),x=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===f)):[];if(null!==x&&void 0!==x&&x.length){var y;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(y=x[0])||void 0===y?void 0:y.postFileNew);if(!t&&w){if([2,18,3,28].includes(+b)&&"0"===g&&"34"!==_&&!v.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,o,n,a,l;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(n=i[0])||void 0===n?void 0:n.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(l=i[0])||void 0===l?void 0:l.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:m,postId:f,ownerId:p},i,x);try{const{data:e}=await(new l.A).post(n.t5,t,{headers:a.ML}),i=n.HY||n.MH?"":`https://images.${n.QR}/`;v.src="18"===b?`${i}${e.media}`:e.media}catch{v.src=s.gX}finally{u(v)}}else v.src=s.gX,u(v);r.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;v.src=t,v.srcset=t,u(v),r.shift()}}},u=t=>t.setAttribute("data-load","1")},77278:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var s=i(65043),o=i(97628),n=i(70579);class a extends s.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:s,inView:a}=this.props;return(0,n.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:a?(0,n.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:s||44,height:s||44,onError:e=>{const s=(0,o.Yo)(i),n="#ffffff"==s?"000":s.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${n}&color=fff&length=1`}}):null},Math.random())}}},80714:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var s=i(65043),o=i(83003),n=i(39532),a=i(26165),l=i(57515),r=i(70579);const d=(0,s.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,s=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),i&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,s]})]})})),c=t=>{let{products:e,appData:i,Post:o,showTooltip:c,isPopup:u,dataItem:h}=t;const[p,m]=(0,s.useState)(null),v=(0,s.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,s.useEffect)((()=>{if(c){const t=e.findIndex((t=>t.id===c));-1!==t&&m(t)}else m(null)}),[c,e]);const _=(0,s.useCallback)((t=>{var e,s,o,n;null!==i&&void 0!==i&&i.wall&&(0,a.hq)({type:1,action:2,wall:null===i||void 0===i||null===(e=i.wall)||void 0===e||null===(s=e.ThemeInfo)||void 0===s?void 0:s.webId,product_id:t.id,post:h.referenceId,owner:null===i||void 0===i||null===(o=i.wall)||void 0===o||null===(n=o.ThemeInfo)||void 0===n?void 0:n.ownerId,feed:h.feedId,currency:t.currencyCode,price:Number(t.discount)>0?t.discount:t.price})}),[i,o]),b=(0,s.useCallback)(((t,e)=>{t.stopPropagation(),_(e),window.open(e.url,"_blank")}),[_]);return null!==v&&void 0!==v&&v.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${e}${u?"-pop":""}`,s=p===e;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>m(e),onMouseLeave:()=>m(null),onClick:e=>{b(e,t)},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===v.type?"tb_hotspot_ani__":""),children:e+1}),(0,r.jsx)(l.A,{wallId:i,children:(0,r.jsx)(n.m_,{appendTo:"body","data-tooltip-id":`tooltip-${t.id}-${e}${u?"-pop":""}`,className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,...u?{isOpen:s}:{},children:(0,r.jsx)(d,{item:t})},e)})]},`${t.id}-${e}`)})):null},u=(0,s.memo)(c),h=(0,o.Ng)((t=>({appData:t.appData})))(u)},36671:(t,e,i)=>{"use strict";i.d(e,{A:()=>d});var s=i(65043),o=i(65281),n=i(78250),a=i(8494),l=i(80714),r=i(70579);class d extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(n){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:n,Post:a}=t;this.state={height:(null===n||void 0===n?void 0:n.height)||(null===a||void 0===a||null===(e=a.media)||void 0===e?void 0:e.height)||0,width:(null===n||void 0===n?void 0:n.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,s;const{height:o,width:d}=this.state,{ImageClass:c,Post:u,hotspot:h,size:p,blurBG:m,mediaOnly:v,inView:_,multiKey:b,index:f}=this.props,{id:g,link:w,products:x}=u,y=v||(null===u||void 0===u?void 0:u.media),{currentWidth:k,currentHeight:j}=this.state,C=p||100*o/d,I={paddingBottom:1===C?null:`${C}%`},S={backgroundImage:_?`url(${null===y||void 0===y||null===(t=y.image)||void 0===t?void 0:t.small})`:null},N=d>o?"100%":d/o*100+"%",$=d>o?o/d*100+"%":"100%",T=u.isProduct&&h&&u.hotspot,P={width:T&&p?N:null,height:T&&p?$:null};return(0,r.jsxs)("div",{className:`${c}_wrap_ mediaHolder${null===u||void 0===u?void 0:u.id}`,style:I,ref:this.mediaRef,children:[T&&m?(0,r.jsx)("div",{className:"tb_blur_bg_",style:S}):null,(0,r.jsxs)("div",{className:`${c}_wrap_in`,style:P,children:[T?(0,r.jsx)(l.A,{products:this.props.multiPic?u.mediaList[b].product:x,hotspot:u.hotspot,Post:u,showTooltip:null},f):null,_?(0,r.jsx)("img",{className:`${c} tb_media-${g}`,src:null===y||void 0===y||null===(e=y.image)||void 0===e?void 0:e.small,srcSet:`${null===y||void 0===y||null===(i=y.image)||void 0===i?void 0:i.small} 1x, ${null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.large} 2x`,sizes:`${k}px`,loading:_?"eager":"lazy",decoding:"async",fetchPriority:_?"high":"low","data-id":g,height:j,width:k,"data-height":o,"data-width":d,"data-link":w,onLoad:this.onLoad,onError:t=>{t.target.src=`${n.th}/media/error/no-image.svg`,t.target.srcset=`${n.th}/media/error/no-image.svg`,(0,a.bs)(t)},alt:null===y||void 0===y?void 0:y.title,title:null===y||void 0===y?void 0:y.title},`${g}-${o}-${d}-${_}`):null]})]})}}},69433:(t,e,i)=>{"use strict";i.d(e,{A:()=>c});var s=i(65043),o=i(1043),n=i.n(o),a=i(92908),l=i(65281),r=i(70579);class d extends s.Component{constructor(t){super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:s}=await(0,l.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small);this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,s,o,l;const{VideoClass:d,Post:c,controls:u,autoPlay:h,handleVideoEnded:p,muted:m,intervalTime:v,size:_,inView:b}=this.props,{calcHeight:f,calcWidth:g,currentWidth:w,currentHeight:x}=this.state,{media:y,id:k,link:j,networkId:C}=c,I=1===_,S=null!==y&&void 0!==y&&y.height?null===y||void 0===y?void 0:y.height:f,N=null!==y&&void 0!==y&&y.width?null===y||void 0===y?void 0:y.width:g,$={paddingBottom:`${I?null:_||100*S/N}%`};return(0,r.jsx)("div",{className:`${d}_wrap_`,style:$,ref:this.mediaRef,children:(0,r.jsx)(n(),{className:`${d} tb_media-${k}`,url:null!==y&&void 0!==y&&null!==(t=y.video)&&void 0!==t&&t.clip?null===y||void 0===y||null===(e=y.video)||void 0===e?void 0:e.clip:b?null===y||void 0===y||null===(i=y.video)||void 0===i?void 0:i.full:null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.small,"data-height":f,"data-width":g,"data-type":"video","data-network":C,"data-link":j,"data-item-id":k,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":N,"data-height":S,poster:null===y||void 0===y||null===(o=y.image)||void 0===o?void 0:o.small}},file:{attributes:{preload:"metadata",poster:null===y||void 0===y||null===(l=y.image)||void 0===l?void 0:l.small,height:x,width:w}}},loop:!(a.aD&&!a.HY&&null!==c&&void 0!==c&&c.loopStop)&&h,onError:t=>{I&&p&&setTimeout((()=>{this._isMounted&&p&&p()}),1e3*v),this.setVideoLoaded(!1)},autoPlay:b&&h?1:0,muted:m,volume:h?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!a.HY),playing:b&&h?1:0,controls:u||!1,onEnded:p,title:null===y||void 0===y?void 0:y.title},`${k}-${x}-${g}-${b}`)})}}const c=(0,s.memo)(d)},44961:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var s=i(65043),o=i(97628),n=i(70579);const a=s.lazy((()=>i.e(1543).then(i.bind(i,21543))));class l extends s.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:i,isPopUp:l}=this.props;return 505==(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(t)?(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(a,{networkId:t,networkClass:e})}):(0,n.jsx)("div",{className:`${e} tb__icon tb-${(0,o.EC)(t)}`,"aria-label":`post network ${(0,o.Oi)(t)}`,children:(0,n.jsx)("div",{})})}}},89410:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(65043),o=i(92908),n=i(80229),a=i(65281),l=i(70579);class r extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,s;const t=(null===(i=this.contentRef)||void 0===i||null===(s=i.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:s,maxLines:r,isReadMore:d}=this.props,c=t.content.trimcontent&&!o.HY?t.content.trimcontent:0,u={WebkitLineClamp:r,textAlign:t.style.textAlign},h=(0,a.w)(i),p=`${e} ${d?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${t.style.variant}`;return(0,l.jsxs)("div",{className:p,ref:this.contentRef,style:u,children:[s?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,n.Ay)(s)}):null,(0,n.Ay)(h)]})}}},57005:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var s=i(65043),o=i(70579);const n=t=>{let{networkId:e}=t;const{className:i,color:s}={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:s},"tb-network":e,children:(0,o.jsx)("div",{})})},a=t=>{let{ThemeID:e,networkId:i}=t;const{className:s,color:n}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:n},"tb-network":i})};class l extends s.PureComponent{render(){const{rating:t,networkId:e,ThemeID:i}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>i?(0,o.jsx)(a,{ThemeID:i,networkId:e},s):(0,o.jsx)(n,{networkId:e},s))):null})}}},60768:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});i(65043);var s=i(70579);const o=t=>{const{sepClass:e}=t;return(0,s.jsx)("div",{className:e,children:"   "})}},43538:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var s=i(65043),o=i(65281),n=i(70579);const a=t=>{const{createdAt:e,timeClass:i}=t;return(0,n.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,o.fF)(e)}`,children:(0,o.fF)(e)})},l=(0,s.memo)(a)},87121:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>w});var s=i(65043),o=i(77278),n=i(43538),a=i(60768),l=i(22030),r=i(70579);class d extends s.PureComponent{render(){const{Post:t,CardStyle:e,ThemeInfo:i,inView:s}=this.props,{author:d,networkId:c}=t,{ThemeId:u}=i.id,h=(0,l.zK)(d.name),p=d.username&&d.username.length>0?`@${d.username}`:"",m=!(!e.author.status||h),v=!(!e.author.status||!e.timeStatus||h||""==p);return(0,r.jsx)("div",{className:"tb_ss_author_wrapper",children:(0,r.jsxs)("div",{className:"tb_ss_author",children:[m?(0,r.jsx)(o.default,{author:d,network:t.network,networkId:c,authorClass:"tb_ss_author_profile",inView:s}):"",(0,r.jsxs)("div",{className:"tb_ss_author_info",children:[m?(0,r.jsx)("div",{className:"tb_ss_authorname",children:d.name}):"",(0,r.jsxs)("div",{className:"tb_ss_post_info",children:[m?(0,r.jsx)("div",{className:"tb_ss_username",children:p}):"",v?(0,r.jsx)(a.default,{sepClass:"tb_ss_seprator"}):"",e.timeStatus?(0,r.jsx)(n.default,{createdAt:t.createdAt,timeClass:`tb_ss_time${e.author.variant}`}):""]})]})]})})}}var c=i(92908),u=i(36671),h=i(69433);const p=t=>{let{Post:e,ThemeStyle:i,CardStyle:s,ThemeInfo:o,index:n,inView:a}=t;const l=[3,5].includes(e.type)&&1==i.autoPlay||!1,d=!(!c.MH||!s.style.ratio)&&s.style.ratio,p=[3,5].includes(e.type)&&l;return(0,r.jsx)("div",{className:"tb_ss_media_wrap",children:p?(0,r.jsx)(h.A,{VideoClass:"tb_ss_video",Post:e,size:d,isCover:!0,controls:!1,autoPlay:l,muted:!0,index:n,inView:!0}):(0,r.jsx)(u.A,{ImageClass:"tb_ss_image",Post:e,size:d,blurBG:!1,observer:!0,index:n,inView:!0})})};var m=i(89410),v=i(57005),_=i(44961);class b extends s.PureComponent{constructor(t){super(t),this.updateHeight=()=>{this.contentRef.current&&this.setState({contentHeight:this.contentRef.current.offsetHeight})},this.state={contentHeight:0},this.contentRef=s.createRef()}componentWillUnmount(){window.removeEventListener("resize",this.updateHeight),clearInterval(this.intervalId)}UNSAFE_componentWillReceiveProps(t){const{itemIndex:e,personalization:i}=this.props;t.currentIndex!=e&&clearInterval(this.intervalId)}render(){var t,e,i,s,o;const{contentHeight:n}=this.state,{postSize:a,clickToShowPopUp:c,index:u,onClickToCTA:h,ThemeStyle:b,CardStyle:f,Post:g,ThemeInfo:w,counter:x}=this.props,y=null===w||void 0===w?void 0:w.id,k=1!==(null===g||void 0===g?void 0:g.type),j=(2===(null===g||void 0===g?void 0:g.type)||4===(null===g||void 0===g?void 0:g.type))&&77==y,C=(null===g||void 0===g?void 0:g.rating)>0,I=(null===g||void 0===g?void 0:g.rating)>0?"tb_ss_rating_content":"tb_ss_content",S=1===(null===g||void 0===g?void 0:g.type)&&null!==f&&void 0!==f&&null!==(t=f.style)&&void 0!==t&&t.textDecoration?"tb_ss_text_decoration tb_ss_text_post":"",N=null!==f&&void 0!==f&&null!==(e=f.content)&&void 0!==e&&e.trimcontent?(0,l.Ex)(null===g||void 0===g||null===(i=g.content)||void 0===i?void 0:i.text,50):null===g||void 0===g||null===(s=g.content)||void 0===s?void 0:s.text,$=!(null===f||void 0===f||!f.actionStatus),T=!(1==(null===g||void 0===g?void 0:g.type)||null===f||void 0===f||null===(o=f.content)||void 0===o||!o.status||$);console.log("postTextContent=====",T);const P={backgroundImage:`url(${g.postFileNew})`},R=74==y?" tb_mss_t":76==y?" tb_css_t":77==y?" tb_zss_t":"";((n-350)/30).toFixed();return(0,r.jsxs)("div",{id:`tb-ss-post-${null===g||void 0===g?void 0:g.id}`,className:`tb_ss_post_wrapper${R}`,"tb-network":g.network.icon,children:[74==y?(0,r.jsx)("div",{className:"tb_ss_blur_bg",style:P,children:(0,r.jsx)("div",{})}):76==y?(0,r.jsx)("div",{className:"tb_ss_bg_color","data-network":g.network.id,children:(0,r.jsx)("div",{})}):null,(0,r.jsx)("div",{className:`tb_ss_post_article${77==y?" tb_ss_post_article_full":""}${1===g.type?" tb_ss_text_article":""}`,children:(0,r.jsxs)("div",{className:"tb_ss_post_in",children:[k?(0,r.jsx)("div",{className:"tb_ss_post_media_wrapp "+(j?" tb_ss_post_animated_media":""),children:(0,r.jsx)(p,{Post:g,CardStyle:f,ThemeStyle:b,ThemeInfo:w,index:u,inView:!0})}):"",(0,r.jsx)("div",{className:"tb_ss_contant_wrapper",ref:this.contentRef,children:(0,r.jsxs)("div",{className:"tb_ss_contant_wrap_in",children:[$?(0,r.jsx)("div",{className:"tb_ss_social_",children:(0,r.jsx)(_.default,{networkClass:"tb_ss_social_ico",networkId:g.network.id,network:g.network,iconStyle:f.icon})}):"",C?(0,r.jsx)("div",{className:"tb_ss_rating_ _",children:(0,r.jsx)(v.default,{rating:g.rating,networkId:g.networkId})}):"",f.content.status?(0,r.jsx)(m.default,{contentClass:`${I} ${S}`,Post:g,content:N,CardStyle:f,contentTitle:g.content.title}):"",(0,r.jsx)(d,{Post:g,CardStyle:f,ThemeStyle:b,mediaType:k,ThemeInfo:w,inView:!0})]})})]})})]})}}var f=i(4765);i(35847);class g extends s.PureComponent{constructor(t){super(t),this.state={currentIndex:0},this.handleSlideChange=()=>{const{currentIndex:t}=this.state,e=t+1;this.myRef&&this.myRef.current&&(e<this.myRef.current.slides.length?this.myRef.current.splide.go(e):this.myRef.current.splide.go(0))},this.myRef=s.createRef()}componentDidUpdate(t,e){return t.postData!==this.props.postData||this.state.currentIndex!=e.currentIndex}render(){var t;const{postData:e,completeDataObject:i,CardStyle:s,ThemeStyle:o,ThemeInfo:n,clickToShowPopUp:a,onClickToCTA:d,onClickPopUpSlider:c,containerSize:u,ProductSetting:h}=this.props,p=Math.max((u.width/(s.minimumWidth+20)).toFixed(),1),m=(0,l.GH)(u.width,o.column,p),v=(0,l.Cv)(u.width,m),{currentIndex:_}=(null===o||void 0===o||null===(t=o.slide)||void 0===t||t.slideDelay,this.state);return(0,r.jsx)("div",{className:"tb_ss_post_container",children:(0,r.jsx)(f.eB,{hasTrack:!1,className:"tb_ss_slider_wrappper",options:{type:"fade",rewind:!0,speed:1e3,perPage:1,perMove:1,gap:0,autoplay:!1,pauseOnHover:!1,padding:0,pagination:!1,arrows:!1},ref:this.myRef,onActive:(t,e,i)=>this.setState({currentIndex:e.index}),children:(0,r.jsx)(f.v9,{children:e&&e.length>0&&e.map(((t,e)=>{const l=i[t];return(0,r.jsx)(f.Nn,{children:(0,r.jsx)(b,{postSize:v,clickToShowPopUp:a,onClickToCTA:d,onClickPopUpSlider:c,Post:l,index:e,CardStyle:s,ThemeStyle:o,ThemeInfo:n},e)},e)}))})})})}}const w=g},97628:(t,e,i)=>{"use strict";i.d(e,{EC:()=>s,Oi:()=>n,Yo:()=>o});const s=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),o=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),n=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},41497:(t,e,i)=>{"use strict";var s=i(13218);function o(){}function n(){}n.resetWarningCache=o,t.exports=function(){function t(t,e,i,o,n,a){if(a!==s){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:n,resetWarningCache:o};return i.PropTypes=i,i}},65173:(t,e,i)=>{t.exports=i(41497)()},13218:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},35847:()=>{}}]);
//# sourceMappingURL=3813.ef2b8436.chunk.js.map