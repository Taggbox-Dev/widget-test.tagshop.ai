"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4240,5810],{7138:(e,t,s)=>{s.d(t,{Z:()=>l});var o=s(47313),i=s(46417);class a extends o.PureComponent{render(){const{cta:e,ctaClass:t,postCta:s,onClickToCTA:o,item:a}=this.props,l=!(!s||1!==s.status),r={color:l?s.color:e.color,backgroundColor:l?s.background:e.background};return(0,i.jsxs)("div",{className:t,style:r,onClick:t=>{t.stopPropagation(),o(a),window.open("".concat(l?s.url:e.url),"_blank")},children:[" ",l?s.text:e.text]})}}const l=a},64442:(e,t,s)=>{s.d(t,{Z:()=>h});var o=s(47313),i=s(2406),a=s(20510),l=s.n(a),r=s(40475),n=s(35179),d=(s(17739),s(98511),s(46417));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class p extends o.Component{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,i.Ad)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(n.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(n.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:s,isCover:o,controls:i,autoPlay:a,handleVideoEnded:p,muted:h,themeID:u,intervalTime:m}=this.props,{paddingBottom:_,videoLoaded:g,isVisible:b}=this.state,w={small:t.postFileNew,large:t.filename,orignal:t.file},v=[74,76,77].includes(u),f={paddingBottom:"".concat(v&&n.bX?null:_,"%")},x=null!==t&&void 0!==t&&t.loopStop?t.mediaUrl:t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,d.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:f,ref:this.videoRef,children:(0,d.jsx)(l(),{className:"".concat(e," video").concat(t.id),url:c(x,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":s,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:t.postFileNew}},file:{attributes:{preload:"metadata",poster:t.postFileNew}}},loop:!(n.bX&&!n.aL&&null!==t&&void 0!==t&&t.loopStop),onError:e=>{!n.P2||t.stories&&0!=t.stories||(0,r.ib)(e,t.id),v&&p&&setTimeout((()=>{p()}),1e3*m)},autoPlay:n.bX?b:a,muted:h,volume:a?1:0,playsinline:!0,onReady:e=>{n.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:n.ig||n.bX?b:a,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(v?w.large:w.small,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:p||null})})}}const h=(0,o.memo)(p)},25810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var o=s(47313),i=s(35179),a=s(46417);const l=o.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends o.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:r,Personalization:n}=this.props,d=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),c=i.ZQ&&36==e.id?"tagembed":e.icon;return d?(0,a.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,a.jsx)("div",{})}):(0,a.jsxs)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(l,{network:e,networkClass:t})]})}}},11502:(e,t,s)=>{s.d(t,{Z:()=>a});var o=s(17739),i=s(46417);const a=e=>{let{ThemeRule:t,btnClass:s}=e;const a={fontFamily:t.css_font};return(0,i.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,i.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,o.mD)(4)||(0,o.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:a,children:t.shoppingText})})}},76254:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var o=s(47313),i=s(35179),a=s(43411),l=s(11774),r=s(40475),n=s(44084),d=s(17739),c=s(84261),p=s(64442),h=s(81349),u=s(46417);const m=e=>{let{itemData:t,wall:s,wallID:o,themeID:a,ownerId:l,ThemeRule:r}=e;const n=(i.ZQ||"tagembed"==s.User.userDatabaseType)&&r.aspectImageRatio?r.aspectImageRatio:100,d=(3===t.type||5===t.type)&&1==s.ThemeRule.autoPlay;return(0,u.jsxs)("div",{className:"tb_ht_media_wrap",children:[(0,u.jsx)(h.Z,{itemData:t,IconClass:"tb_ht_media_icon",show:i.ZQ,isCenter:!1}),d?(0,u.jsx)(p.Z,{VideoClass:"tb_ht_video",data:t,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:l,size:i.ZQ?n:100,isCover:!0,muted:!0,autoPlay:!0}):(0,u.jsx)(c.default,{ImageClass:"tb_ht_image",data:t,wallID:o,themeID:a,ownerId:l,size:n,hotspot:!1})]})};var _=s(25810),g=s(11502),b=s(7138);const w=e=>{let{itemData:t,personalization:s,ThemeRule:a,wallID:l,ownerId:r,onClickToCTA:n,clickToShowPopUp:c,itemIndex:p,adjustWidth:h,wall:w,onClickPopUpSlider:v}=e;const f=81!=s.widgetTheme,x=(0,o.useRef)(null),k=0==a.postHover&&i.ig?"light":"dark",j=i.Jx?"tb_ht_color_overlay":"tb_ht_post_overlay-"+k,S={backgroundColor:i.Jx?a.cardColor:""},y={padding:s.padding/2},C=1!==t.type,D=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status)&&(!!i.ZQ||(!f||!i.Jx)),T=f&&i.Jx?"50%":null,I=!!(i.ig&&t.ugc_products.length>0),P=!!(i.ig&&t.ugc_products&&t.ugc_products.length>0),R=!(!i.ig||!P||0!==t.hotspot),N=!!(i.ig&&t.hotspot&&P);return(0,o.useEffect)((()=>{i.ig&&(0,d.YN)(x)}),[]),(0,o.useEffect)((()=>{t.isPopUp&&v(p,t)}),[p,t.isPopUp,t]),(0,u.jsx)("div",{id:"tb-ht-post-".concat(t.id),className:"tb_ht_post_wrapper",style:y,"tb-network":t.network.id,"tb-product":R?1:N?2:0,ref:x,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,u.jsx)("div",{className:"tb_ht_post_in",onClick:c(p,t),style:{borderRadius:T},children:(0,u.jsxs)("div",{className:"tb_ht_post_media_wrapp",children:[C?(0,u.jsx)(m,{itemData:t,wallID:l,themeID:s.widgetTheme,ownerId:r,ThemeRule:a,wall:w}):"",(0,u.jsxs)("div",{className:"tb_ht_post_details",children:[(0,u.jsx)("div",{className:"tb_ht_social_",children:(0,u.jsx)(_.default,{networkClass:"tb_ht_social_ico_",network:t.network,ThemeRule:a,isDefault:1===a.iconType,Personalization:s})}),I?(0,u.jsx)(g.Z,{ThemeRule:a,btnClass:"tb_ht_btn_wrap"}):null,D?(0,u.jsxs)("div",{className:"tb_ht_post_cta",onClick:e=>{e.stopPropagation()},children:[(0,u.jsx)(b.Z,{ctaClass:"tb_ht_post_cta_btn",cta:t.cta,item:t,onClickToCTA:n})," "]}):""]}),(0,u.jsx)("div",{className:"tb_ht_post_overlay ".concat(j),style:S,children:(0,u.jsx)("div",{})})]})})})};s(37210);class v extends o.Component{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:o,getDataNextSteps:i}=this.props;o&&i(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.onUpdateData=e=>{},this.autoScrollSlider=(e,t,s,o)=>{const{wall:a}=this.props,l=i.ZQ||"tagembed"==a.User.userDatabaseType,r=l?e._o.perPage+e.index:e.index;e.length-r===(l?1:e._o.perPage)&&this.requestData()},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100)}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:s,onClickPopUpSlider:o,wall:i,parentID:a}=this.props,l=i.ThemeRule.multiRow;if(e&&Object.values(e)[5].length>0){Object.values(e)[5].map(((e,i)=>{if(e.classList){const i=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var l=i[0];String(i[0]).includes("tb_")&&(l=String(i[0]).replace("tb_",""));const r=t.findIndex((e=>e==l));let n=document.querySelectorAll("#".concat(e.id));for(let e=0;e<n.length;e++){let t=n[e],i=t.getAttribute("p_id");String(a)===String(i)&&t.addEventListener("click",(e=>{e.preventDefault();const t=s[l];o(r,t)}))}}}))}else if(2==l){Object.values(e)[5].map(((e,i)=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{if(e.classList){const l=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var i=l[0];String(l[0]).includes("tb_")&&(i=String(l[0]).replace("tb_",""));const r=t.findIndex((e=>e==i));let n=document.querySelectorAll(".tb_hs_post_container #".concat(e.id));for(let e=0;e<n.length;e++){let t=n[e],l=t.getAttribute("p_id");String(a)===String(l)&&t.addEventListener("click",(e=>{e.preventDefault();const t=s[i];o(r,t)}))}}}))}))}))}}render(){var e;const{postData:t,completeDataObject:s,wall:o,clickToShowPopUp:a,onClickToCTA:r,parentID:c,adjustWidth:p,cardNumber:h,onClickPopUpSlider:m}=this.props,_=i.ZQ||"tagembed"==o.User.userDatabaseType,g=c,b=o.ThemeRule.numberOfCoumn,v=o.ThemeRule.mobileColumn,f=o.ThemeRule.slidePost,x=o.ThemeRule.slideDuration,k=o.Personalization.autoScrollStatus,j=_||(0,d.mD)(71)?o.ThemeRule.multiRow:1,S=_&&void 0!==(null===(e=o.Personalization)||void 0===e?void 0:e.clonePost)&&0===o.Personalization.clonePost?{clones:0}:{},y=1!=k?!(Object.keys(S).length>0)&&(_?"slide":"loop"):_?"slide":"loop",C={...S,grid:{rows:j},type:1!==k&&y,rewind:!!_,rewindSpeed:1e3,interval:1===f&&parseInt(x)>0?1e3*parseInt(x):5e3,perPage:i.ig?h:b>0?b:5,perMove:1,gap:0,autoplay:1===f,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:i.ig?h:v>0?v:1},767:{perPage:i.ig?h:v>0?v:2},991:{perPage:i.ig?h:v>0?v:3},1200:{perPage:i.ig?h:b>0?b:4},1400:{perPage:i.ig?h:b>0?b:5},1600:{perPage:i.ig?h:b>0?b:6}}};return""!=c?(0,u.jsx)("div",{className:"tb_ht_post_container",children:(0,u.jsxs)(l.tv,{hasTrack:!1,className:"tb_ht_post_slider",options:C,extensions:{Grid:n.r},ref:e=>this.inputRefs[g]=e,onMove:this.autoScrollSlider,children:[(0,u.jsx)(l.Gj,{children:(o.ThemeRule.multiRow>1&&1!==t.length&&t.length%2!==0?t.pop():t)&&t&&t.length>0&&t.map(((e,t)=>{const i=s[e];return(0,u.jsx)(l.jw,{style:{margin:0,padding:0},className:"tb_".concat(i.id),p_id:c,children:(0,u.jsx)(w,{itemData:i,itemIndex:t,personalization:o.Personalization,ThemeRule:o.ThemeRule,clickToShowPopUp:a,wallID:o.Wall.id,onClickToCTA:r,adjustWidth:p,wall:o,onClickPopUpSlider:m})},t)}))}),(0,u.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_ht_arrow_wrapper_",children:[(0,u.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--prev tb_ht_arrow tb_ht_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,u.jsx)("div",{})}),(0,u.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--next  tb_ht_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,u.jsx)("div",{})})]})]})}):null}}const f=(0,o.memo)((0,a.$j)((e=>({})),(e=>({getDataNextSteps:(t,s,o,i,a,l,n,d)=>e((0,r.Sx)(t,s,o,i,a,l,n,d))})))(v))},37210:()=>{}}]);