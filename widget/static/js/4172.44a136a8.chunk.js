(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[552,1500,2691,2887,4172,4935,5268,6047,7492,7955,9837],{53456:()=>{},94935:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(88094),o=s(96913),r=s(17524),n=s(15678);class i extends a.PureComponent{render(){const{author:e,authorClass:t,networkId:s,size:a}=this.props;return(0,n.jsx)("div",{className:t,style:{overflow:4==s?"visible":""},children:(0,n.jsx)("img",{className:`${t}__`,src:e.picture,"aria-label":"author",alt:(0,r.Ay)(e.name),width:a||44,height:a||44,onError:t=>{const a=(0,o.Yo)(s),r="#ffffff"==a?"000":a.replace("#","");t.target.src=e.errorPic?e.errorPic:`https://ui-avatars.com/api/?name=${e.name.replace(/\s/g,"")}&background=${r}&color=fff&length=1`}})},Math.random())}}},92887:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(88094),o=s(96913),r=s(15678);const n=a.lazy((()=>s.e(6300).then(s.bind(s,36300))));class i extends a.PureComponent{render(){const{networkId:e,networkClass:t,iconStyle:s,isPopUp:i}=this.props;return(null===s||void 0===s?void 0:s.default)||[7,4,36].includes(e)?(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(n,{networkId:e,networkClass:t})}):(0,r.jsx)("div",{className:`${t} tb__icon tb-${(0,o.EC)(e)}`,"aria-label":`post network ${(0,o.Oi)(e)}`,children:(0,r.jsx)("div",{})})}}},42691:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(88094),o=s(17524),r=s(40329),n=s(19066),i=s(15678);class l extends a.PureComponent{constructor(e){super(e),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var s,a;const e=(null===(s=this.contentRef)||void 0===s||null===(a=s.current)||void 0===a?void 0:a.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{CardStyle:e,contentClass:t,content:s,contentTitle:a,maxLines:l,isReadMore:d}=this.props,c=e.content.trimcontent&&!r.HY?e.content.trimcontent:0,h={WebkitLineClamp:l,textAlign:e.style.textAlign},p=(0,n.w)(s),u=`${t} ${d?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${e.style.variant}`;return(0,i.jsxs)("div",{className:u,ref:this.contentRef,style:h,children:[a?(0,i.jsx)("div",{className:"tb_bold_txt__",children:(0,o.Ay)(a)}):null,(0,o.Ay)(p)]})}}},79837:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});s(88094);var a=s(15678);const o=e=>{const{sepClass:t}=e;return(0,a.jsx)("div",{className:t,children:" "})}},81500:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=s(88094),o=s(42682),r=s(15678);class n extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{Post:s,ThemeInfo:a}=this.props;t.stopPropagation(),(0,o.hq)({type:2,action:2,wall:a.wallID,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:a.ownerId}),(0,o.x9)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{shareClass:e,Post:t}=this.props,{facebook:s,twitter:a,linkedin:o}=null===t||void 0===t?void 0:t.share,n=e=>{let{shareOn:t,icon:s}=e;return(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(t),className:`tb_share_ico__ tb__icon tb-${s}`,title:s,children:(0,r.jsx)("div",{})})})};return(0,r.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,r.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,r.jsx)("div",{})}),(0,r.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[s?(0,r.jsx)(n,{shareOn:s,icon:"facebook"}):"",a?(0,r.jsx)(n,{shareOn:a,icon:"twitter"}):"",o?(0,r.jsx)(n,{shareOn:o,icon:"linkedin"}):""]})]})}}},76047:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var a=s(15678);const o=e=>{var t;let{CardStyle:s,btnClass:o,mode:r}=e;const n={fontFamily:null===s||void 0===s||null===(t=s.style)||void 0===t?void 0:t.font};return(0,a.jsx)("div",{className:`tb_shop_btn_wrap ${o}`,children:(0,a.jsx)("div",{className:"tb_shop_btn"+(r?" tb_shop_btn_light":" tb_shop_btn_dark"),style:n,children:s.shopText})})}},97955:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(88094),o=s(19066),r=s(15678);const n=e=>{const{createdAt:t,timeClass:s}=e;return(0,r.jsx)("div",{className:s,role:"status","aria-label":`post timestamp ${(0,o.fF)(t)}`,children:(0,o.fF)(t)})},i=(0,a.memo)(n)},37071:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>k});var a=s(88094),o=s(83546),r=s(31060),n=(s(53456),s(40329)),i=s(47043),l=s(42682),d=s(94935),c=s(97955),h=s(79837),p=s(15678);const u=a.lazy((()=>Promise.resolve().then(s.bind(s,92887)))),_=e=>{let{Post:t,CardStyle:s}=e;const{author:o,networkId:r}=t,l=o.username&&o.username.length>0?`@${o.username}`:"",_=(0,i.zK)(o.name),m=!(!s.author.status||_),b=!(!s.author.status||!s.timeStatus||_||""==l);return(0,p.jsxs)("div",{className:"tb_hs_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,p.jsxs)("div",{className:"tb_hs_author",children:[m?(0,p.jsx)(d.default,{author:o,network:t.network,networkId:r,authorClass:"tb_hs_author_profile"}):"",(0,p.jsxs)("div",{className:"tb_hs_author_info",children:[m?(0,p.jsx)("div",{className:"tb_hs_authorname",children:o.name}):"",(0,p.jsxs)("div",{className:"tb_hs_post_info",children:[m?(0,p.jsx)("div",{className:"tb_hs_username",children:`@${l}`}):"",b?(0,p.jsx)(h.default,{sepClass:"tb_hs_seprator"}):"",s.timeStatus?(0,p.jsx)(c.default,{createdAt:t.createdAt,timeClass:`tb_hs_time tb-cTBfont-${s.author.variant}`}):""]})]})]}),n.O7?null:(0,p.jsx)("div",{className:"tb_hs_social_",children:(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(u,{networkClass:"tb_hs_social__ico",networkId:r,iconStyle:s.icon})})})]})};var m=s(42691),b=s(92887),x=s(76047),v=s(81500);const f=a.lazy((()=>Promise.all([s.e(4076),s.e(5740),s.e(6469)]).then(s.bind(s,92772)))),w=e=>{let{onClickPopUpSlider:t,isTrue:s,postSizeInPx:o,index:r,isVisible:l,clickToShowPopUp:d,ThemeStyle:c,CardStyle:h,Post:u,ProductSetting:w,ThemeInfo:g}=e;const{networkId:j}=u,{style:k}=h,y=(0,a.useRef)(null),S=1!==u.type,C=h.content.trimcontent?(0,i.Ex)(u.content.text,200):u.content.text,P=o.adjustWidth<250,T=!h.content.status,N=u.isShopIcon?0==T:1!=h.content.status,I=!!u.isShopIcon&&0!=T,D=0==h.style.mode&&n.HY?"light":"dark",A=n.MH?"tb_hs_color_overlay":"tb_hs_post_overlay-"+D,$={backgroundColor:n.MH?h.style.background:""},H=s?{width:o.adjustWidth}:{};return(0,a.useEffect)((()=>{n.HY&&(0,i._7)(y)}),[]),(0,a.useEffect)((()=>{u.isPopUp&&t(r,u)}),[r,u.isPopUp,u]),(0,p.jsx)("div",{id:`tb_hs_id-${u.id}`,className:"tb_hs_post_wrapper"+(P?" tb_hs_post_wrapper2x":""),style:{...H,padding:k.padding/2},"tb-product":u.isShopIcon?1:u.isHotspot?2:0,"area-label":u.content.text,role:"article",children:(0,p.jsx)("div",{id:u.id,className:"tb_hs_post_in"+(n.HY?" tb_hs_post_ani":""),onClick:d(r,u),role:"button","aria-label":"Popup",children:(0,p.jsxs)("div",{className:"tb_hs_post_media_wrapp",children:[S?(0,p.jsxs)(a.Suspense,{children:[(0,p.jsx)(f,{Post:u,CardStyle:h,ThemeStyle:c,ProductSetting:w,isVisible:l,index:r},r)," "]}):"",u.isHotspot?null:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"tb_hs_post_details",children:[(0,p.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[n.HY?(0,p.jsx)("div",{className:"tb_hs_social_",children:(0,p.jsx)(b.default,{networkClass:"tb_hs_social__ico",networkId:j,iconStyle:h.icon})}):null,I?(0,p.jsx)(x.default,{CardStyle:h,btnClass:"tb_hs_btn_wrap"}):null,N||1==u.type?(0,p.jsx)(m.default,{contentClass:"tb_hs_content",Post:u,content:C,CardStyle:h,contentTitle:u.content.title}):null]}),n.HY?null:(0,p.jsx)(_,{Post:u,CardStyle:h}),u.share.status?(0,p.jsx)(v.default,{Post:u,ThemeInfo:g,shareClass:"tb_hs_share_container"}):null]}),u.isHotspot?null:(0,p.jsx)("div",{className:`tb_hs_post_overlay ${A}`,style:$,children:(0,p.jsx)("div",{})})]})]})})})},g=e=>{let{isTrue:t,children:s}=e;return t?(0,p.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:s}):s};class j extends a.PureComponent{constructor(e){super(e),this.handleKeyPress=e=>{try{const{ThemeStyle:s}=this.props;if(1==s.slide.autoSlide){if(!["INPUT","TEXTAREA"].includes(e.target.tagName)&&"Space"===e.code){const{parentID:s}=this.props;e.preventDefault();var t=this.inputRefs[s].splide.Components.Autoplay;t.isPaused()?t.play():t.pause()}}}catch(s){}},this.requestData=()=>{const{appendData:e,preRender:t,hasMoreData:s,nextData:a,ThemeStyle:o,ThemeInfo:r}=this.props;!this.state.loadData&&this.updatepost(0),s&&a(n.HY?r.webId:r.wallId,Math.floor(Date.now()/1e3),o.totalPosts,e.networkID,e.after,t,e.heightEvent)},this.autoScrollSlider=e=>{const{ThemeStyle:t}=this.props,s=t.autoScrollStatus;if(e.on("drag",(()=>{this.isDragging=!0,!this.state.loadData&&this.updatepost(0)})),e.on("move",(()=>{!this.state.loadData&&!this.isDragging&&this.updatepost(3)})),1==s||n.HY){const t=e.index;e.length-t===e._o.perPage&&this.requestData()}},this.updatepost=e=>{this.state.loadData||(this.setState({loadData:!0}),setTimeout((()=>this.props.loadMoredata()),1e3*e))},this.state={parent_id:"",postData:[],loadData:!1},this.inputRefs={},this.isDragging=!1}componentDidMount(){setTimeout((()=>{const e=document.querySelectorAll(".splide__slide");e&&e.forEach((e=>{e.removeAttribute("aria-hidden"),e.removeAttribute("role")}))}),100);const{Post:e}=this.props;this.setState({Post:e}),window.addEventListener("keydown",this.handleKeyPress)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress)}render(){const{postData:e,completeDataObject:t,CardStyle:s,ThemeStyle:a,ProductSetting:o,ThemeInfo:l,clickToShowPopUp:d,onClickToCTA:c,postSizeInPx:h,parentID:u,loaderData:_,onClickPopUpSlider:m,adjustWidth:b,cardNumber:x}=this.props,{ownerId:v}=l,f=u;var j=[];const k=a.column.desktop,y=a.column.mobile,S=a.slide.autoSlide,C=a.slide.slideDuration,P=a.autoScrollStatus,T=a.row&&0!==a.row?e.length<15&&(n.aD||n.Vn)?1:a.row:1;let N=!0;const I=9!=l.productType&&!n.HY||142546!=v&&141171!=v&&void 0===a.slide.clonePost?{}:142546==v||141171==v||0===a.slide.clonePost?{clones:1}:{};for(var D=0,A=e.length;D<A;)j.push(e.slice(D,D+=T));n.HY&&I&&0==Object.keys(I).length&&(16677==l.wallId?"product"===window.dataFilterType&&(N=!!(j&&j.length>=5)):j=j.length<10?Array((0,i.qs)()?y>1?4:1:15-j.length).fill(j).flat():j);const $=1!=P?!Object.keys(I).length&&(9==l.productType||"loop"):n.HY?"slide":"loop",H=!(142546!=v&&141171!=v||0!=k&&0!=y||(0,i.qs)())&&!(parseInt(x)<e.length),M=(0,i.qs)()?1:e.length,F={...I,type:1!==P&&$,rewind:!1,speed:1e3,interval:1===S?1e3*parseInt(C):5e3,perPage:k>0?k:9==l.productType?3:M>6?6:M,perMove:1,gap:0,autoplay:1===S,padding:0,updateOnMove:!0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:Math.max(y||1,1)},767:{perPage:Math.max(y||2,2)},991:{perPage:y||Math.min(M,3)},1200:{perPage:k||Math.min(M,4)},1400:{perPage:k||Math.min(M,5)},1600:{perPage:k||Math.min(M,6)}}};return(0,p.jsx)(p.Fragment,{children:""!=u?(0,p.jsxs)(g,{isTrue:H,children:[" ",(0,p.jsx)("div",{className:"tb_hs_post_container",style:H?{maxWidth:e.length*h.adjustWidth}:null,children:N?(0,p.jsxs)(r.eB,{hasTrack:!1,className:"tb_hs_post_slider",options:F,ref:e=>this.inputRefs[f]=e,onMove:this.autoScrollSlider,children:[(0,p.jsx)("div",{className:"splide__track",children:(0,p.jsx)("div",{className:"splide__list",children:(a.row>1&&1!==j.length&&j.length%2!==0?j.pop():j)&&j&&j.length>0&&j.map(((e,r)=>(0,p.jsx)("div",{className:`splide__slide splide__${r}`,children:(0,p.jsx)("div",{className:"tb_hs_col_wrap",children:e.map((e=>{const n=t[e];return(0,p.jsx)(w,{Post:n,index:r,CardStyle:s,ThemeStyle:a,ProductSetting:o,ThemeInfo:l,clickToShowPopUp:d,onClickToCTA:c,postSizeInPx:h,onClickPopUpSlider:m,adjustWidth:b,isTrue:H},r)}))})},`tb_${r}_${r}`)))})}),(0,p.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,p.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,p.jsx)("div",{})}),(0,p.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt "+(_.isShowMoreLoading?"tb_a_spinner":""),onClick:n.HY?e=>this.requestData():null,role:"button","aria-label":"Go to next slide",children:(0,p.jsx)("div",{})})]})]}):null})," "]}):null})}}const k=(0,o.Ng)((e=>({loaderData:e.loaderData})),(e=>({nextData:(t,s,a,o,r,n,i,d)=>e((0,l.wF)(t,s,a,o,r,n,i,d))})))(j)},96913:(e,t,s)=>{"use strict";s.d(t,{EC:()=>a,Oi:()=>r,Yo:()=>o});const a=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),o=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),r=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")},95098:()=>{}}]);