"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1320,2685,7541],{71320:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(9950),n=s(96241),i=s(44414);class o extends a.PureComponent{constructor(e){super(e),this.toggleExpand=e=>{e.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1},this.toggleExpand=this.toggleExpand.bind(this),this.contentRef=a.createRef()}render(){const{CardStyle:e,contentClass:t,Content:s,Lines:a,isReadMore:o}=this.props,r={WebkitLineClamp:this.state.isExpanded?void 0:a,textAlign:e.style.textAlign};return(0,i.jsxs)("div",{className:`${t}${e.style.variant?` tb-cTBfont-${e.style.variant}`:""}`,children:[(0,i.jsx)("div",{className:"tb_content_text"+(a>0?"tb_content_trim":""),ref:this.contentRef,style:r,children:(0,i.jsx)(n.A,{Content:s,CardStyle:e})}),o?(0,i.jsxs)("div",{onClick:this.toggleExpand,className:"tb_read_more_",children:[" ","Read More"]}):null]})}}},96241:(e,t,s)=>{s.d(t,{A:()=>h});var a=s(9950),n=s(88740),i=s(44414),o=function(e){return"string"===typeof e};const r=(e,t,s)=>{if(!o(e)&&!a.isValidElement(e))return e;o(t)&&(t=function(e){var t=/[\\^$.*+?()[\]{}|]/g,s=RegExp(t.source);return e&&s.test(e)?e.replace(t,"\\$&"):e}(t)),t instanceof RegExp||(t=new RegExp(t,"g"));let n,i=[],r=0,l=[];for(;null!==(n=t.exec(e));)l.push(n);if(t.lastIndex=0,0===l.length)return e;l.forEach(((t,a)=>{const n=e.slice(r,t.index);n&&i.push(n);const o=s(...t,a,r);i.push(o),r=t.index+t[0].length}));const d=e.slice(r);return d&&i.push(d),function(e){var t=[];return e.forEach((function(e){Array.isArray(e)?t=t.concat(e):t.push(e)})),t}(i)},l=e=>{let{Content:t,children:s}=e;return(0,i.jsxs)(i.Fragment,{children:[t.title?(0,i.jsx)("div",{className:"tb_bold_txt__",children:(0,n.Ay)(t.title)}):null,s]})},d=e=>Math.floor(Math.random()*(e.length?e.length:1)),c=e=>{let{Content:t,CardStyle:s}=e;const a={color:null===s||void 0===s?void 0:s.hashtag.color,backgroundColor:1==(null===s||void 0===s?void 0:s.hashtag.backgroundStatus)?null===s||void 0===s?void 0:s.hashtag.background:null},o=(null===t||void 0===t?void 0:t.feedName)||null;return null!==s&&void 0!==s&&s.hashtag.colorStatus?1===(null===s||void 0===s?void 0:s.hashtag.allHashtag)?(0,i.jsx)(l,{Content:t,children:r((0,n.Ay)(null===t||void 0===t?void 0:t.text),/#(\w+)/g,((e,t)=>(0,i.jsx)("div",{className:"tb_highlight",style:a,children:e},`${t}-${d(t)}`)))}):0===(null===s||void 0===s?void 0:s.hashtag.allHashtag)&&1===(null===s||void 0===s?void 0:s.hashtag.feedHashtag)&&o?(0,i.jsx)(l,{Content:t,children:r((0,n.Ay)(null===t||void 0===t?void 0:t.text),o,((e,t)=>(0,i.jsx)("div",{className:"tb_highlight",style:a,children:e},`${t}-${d(t)}`)))}):(0,i.jsx)(l,{Content:t,children:(0,n.Ay)(null===t||void 0===t?void 0:t.text)}):(0,i.jsx)(l,{Content:t,children:(0,n.Ay)(null===t||void 0===t?void 0:t.text)})},h=(0,a.memo)(c)},55507:(e,t,s)=>{s.d(t,{A:()=>l});var a=s(9950),n=s(44414);const i={3:{className:"tb-default-star",color:"#1b74e4"},19:{className:"tb-yelp-star",color:"#e00707"},23:{className:"tb-default-star",color:"#ff385c"},28:{className:"tb-default-star",color:"#F8B90C"},29:{className:"tb-default-star",color:"#613983"},33:{className:"tb-trustpilot",color:"#000"},35:{className:"tb-star-fill",color:"#34E0A1"},default:{className:"tb-default-star",color:"#F8B90C"}},o=(0,a.memo)((e=>{let{networkId:t,index:s,rating:a}=e;const{className:o,color:r}=i[t]||i.default,l=s<a;return(0,n.jsx)("div",{className:`tb_rating_ico__ tb__icon ${o}`,style:{color:l?r:""},"data-network":t,role:"status","aria-label":"Ratings","data-filled":l?"1":"0",children:(0,n.jsx)("div",{})},s)})),r=e=>{let{rating:t,networkId:s,className:a}=e;return(0,n.jsx)("div",{className:a,"aria-hidden":!0,children:t?Array.from({length:5},((e,a)=>(0,n.jsx)(o,{index:a,rating:t,networkId:s},a))):null})},l=(0,a.memo)(r)},72685:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(9950),n=s(21850),i=s(44414);class o extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{Post:s,ThemeInfo:a}=this.props;t.stopPropagation(),(0,n.hq)({type:2,action:2,wall:a.wallID,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:a.ownerId}),(0,n.x9)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{shareClass:e,Post:t}=this.props,{facebook:s,twitter:a,linkedin:n}=null===t||void 0===t?void 0:t.share,o=e=>{let{shareOn:t,icon:s}=e;return(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t),className:`tb_share_ico__ tb__icon tb-${s}`,title:s,children:(0,i.jsx)("div",{})})})};return(0,i.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,i.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,i.jsx)("div",{})}),(0,i.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[s?(0,i.jsx)(o,{shareOn:s,icon:"facebook"}):"",a?(0,i.jsx)(o,{shareOn:a,icon:"twitter"}):"",n?(0,i.jsx)(o,{shareOn:n,icon:"linkedin"}):""]})]})}}},49769:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var a=s(9950),n=s(10300),i=s(53556),o=s(66345),r=s(52867),l=s(3720),d=s(78262),c=s(15537),h=s(44414);const _=e=>{let{Post:t,ThemeInfo:s,ThemeStyle:a,CardStyle:n,index:i,inView:r}=e;const _=!(![3,5].includes(t.type)||1!=a.autoPlay),u=(9==s.productType||o.MH)&&n.style.ratio?n.style.ratio:100,p=!t.hotspot;return(0,h.jsxs)("div",{className:"tb_hc_media_wrap",children:[p?(0,h.jsx)(c.default,{Post:t,IconClass:"tb_hc_media_icon",show:p,isCenter:!1,hideVideo:_}):null,_?(0,h.jsx)(l.A,{VideoClass:"tb_hc_video",Post:t,size:u,isCover:!0,controls:!1,autoPlay:_,muted:!0,observer:!1,index:i,inView:r}):(0,h.jsx)(d.A,{ImageClass:"tb_hc_image",Post:t,size:u,hotspot:!0,blurBG:o.HY,observer:!1,index:i,inView:r})]})};var u=s(60531),p=s(55507),m=s(60342),x=s(71320),v=s(72685),b=s(56071),g=s(37949),f=s(6723),w=s(78167);const y=(0,a.lazy)((()=>s.e(5044).then(s.bind(s,92663)))),j=e=>{let{className:t,Post:s,CardStyle:n,inView:i,size:o}=e;const{author:l,networkId:d}=s,c=l.username&&l.username.length>0?`@${l.username}`:"",_=(0,r.zK)(l.name),u=!(!n.author.status||!n.timeStatus||l.isInstaUser),p=null!==d&&""!==d,m=!(!n.author.status||_);return(0,h.jsxs)("div",{className:`${t}_author_wrapper`,"aria-label":"Author details","aria-roledescription":"post author details",children:[m?(0,h.jsx)(w.default,{network:s.network,author:l,authorClass:`${t}_author_profile`,size:o,inView:i}):"",(0,h.jsxs)("div",{className:`${t}_author_info`,children:[m?(0,h.jsx)("div",{className:`${t}_authorname tb-cTBfont-${n.author.variant}`,children:l.name}):"",(0,h.jsxs)("div",{className:`${t}_post_info`,children:[m?(0,h.jsx)("div",{className:`${t}_username`,children:c}):"",u?(0,h.jsx)(g.default,{sepClass:`${t}_seprator`}):"",n.timeStatus?(0,h.jsx)(f.default,{createdAt:s.createdAt,timeClass:`${t}_time tb-cTBfont-${n.author.variant}`}):""]})]}),p?(0,h.jsx)("div",{className:`${t}_social_`,children:(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)("div",{style:{minWidth:20}}),children:(0,h.jsx)(y,{networkClass:`${t}_social_ico`,networkId:d,iconStyle:n.icon})})}):null]})};class C extends a.PureComponent{render(){const{Post:e,CardStyle:t,index:s,ThemeInfo:a,onClickToCTA:n,ThemeStyle:i,clickToShowPopUp:o}=this.props,r=1!==e.type,l=e.rating>0?"tb_hc_rating_content":"tb_hc_content",d=1===e.type?"tb_hc_text_post":"",c=1===e.type&&String(e.content).length>0&&t.style.textDecoration?"tb_hc_text_decoration":"",g=!!e.cta.status;return(0,h.jsx)(b.A,{children:b=>{let{ref:f,inView:w}=b;return(0,h.jsx)("div",{id:`tb_hc_id-${e.id}`,className:"tb_hc_post_wrapper",ref:f,style:{padding:t.style.margin/2},role:"article","aria-label":e.content.text,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,children:(0,h.jsxs)("div",{className:"tb_hc_post_in",onClick:o(s,e),role:"button","aria-label":"Popup",tabIndex:0,children:[e.share.status?(0,h.jsx)(v.default,{share:e.share,shareClass:"tb_hc_share_container",Post:e,ThemeInfo:a}):"",r?(0,h.jsx)(_,{Post:e,CardStyle:t,ThemeInfo:a,ThemeStyle:i,index:s,inView:w}):null,(0,h.jsxs)("div",{className:`tb_hc_contant_wrapper ${d}`,children:[(0,h.jsx)(j,{className:"tb_hc",Post:e,CardStyle:t,inView:w,size:46}),g?(0,h.jsx)("div",{className:"tb_hc_post_cta",onClick:e=>{e.stopPropagation()},children:(0,h.jsx)(u.default,{ctaClass:"tb_hc_post_cta_btn",Post:e,onClickToCTA:n})}):"",e.rating&&e.rating>0?(0,h.jsx)(p.A,{className:"tb_hc_rating",rating:e.rating,networkId:e.networkId}):null,t.content.status||1==e.type?(0,h.jsx)("div",{className:"tb_hc_content_wrapper__",children:(0,h.jsx)(x.default,{contentClass:`${l}${c}`,Content:e.content,CardStyle:t,Lines:t.content.trimcontent?3:0})}):null]}),t.actionStatus?(0,h.jsx)(m.A,{Post:e,CardStyle:t,actionClass:"tb_hc_social_action__"}):""]})})}})}}s(61038);var N=s(21850);class S extends a.Component{constructor(e){super(e),this.requestData=()=>{const{containerSize:e,ThemeStyle:t,appendData:s,ThemeInfo:a,hasMoreData:n,nextData:i}=this.props;n&&i(o.HY?a.webId:a.wallId,Math.floor(Date.now()/1e3),(0,r.Ci)(e.width,t.column,280),s.networkID,s.after,s.heightEvent)},this.pauseOnKeypress=e=>{try{const{ThemeStyle:s}=this.props;if(1==s.slide.autoSlide){if(!["INPUT","TEXTAREA"].includes(e.target.tagName)&&"Space"===e.code){const{parentID:s}=this.props;e.preventDefault();var t=this.inputRefs[s].splide.Components.Autoplay;t.isPaused()?t.play():t.pause()}}}catch(s){console.warn(s)}},this.onSliderMove=e=>{const t=e.index;e.length-t===e._o.perPage&&this.requestData()},this.state={loadData:!1},this.inputRefs={},this.isDragging=!1}componentDidMount(){var e=document.querySelector(".tb_hc_post_slider"),t=e?e.offsetHeight:this.state.height;setTimeout((()=>{this.setState({sliderHeight:t});const e=document.querySelectorAll(".splide__slide");e&&e.forEach((e=>{e.removeAttribute("aria-hidden"),e.removeAttribute("role")}))}),100),window.addEventListener("keydown",this.pauseOnKeypress),this.props.loadBranding()}componentWillUnmount(){window.removeEventListener("keydown",this.pauseOnKeypress)}render(){const{postData:e,completeDataObject:t,CardStyle:s,ThemeStyle:a,ThemeInfo:n,parentID:l,onClickToCTA:d,containerSize:c,clickToShowPopUp:_}=this.props,u=a.slide.autoSlide&&!o.HY,p=a.slide.slideDuration,m=a.autoScrollStatus,x=!!(1===s.content.trimcontent),v={type:1!==m&&"slide",role:"article",label:"social widget",rewind:!0,speed:1e3,loop:1!==m,interval:u?1e3*p:5e3,perPage:(0,r.Ci)(c.width,a.column,280),gap:0,perMove:!1,autoplay:!!u,pagination:!1,arrows:e.length>=(0,r.Ci)(c.width,a.column,280),fixedHeight:x};return""!=l?(0,h.jsx)("div",{className:"tb_hc_post_container",children:(0,h.jsxs)(i.eB,{hasTrack:!1,className:"tb_hc_post_slider "+(x?"tb_hc_fixed_height":""),ref:e=>this.inputRefs[e]=e,options:v,tag:"section",onMove:this.onSliderMove,children:[(0,h.jsx)("div",{className:"splide__track",children:(0,h.jsx)("div",{className:"splide__list",children:e&&e.length>0&&e.map(((e,i)=>{const o=t[e];return(0,h.jsx)("div",{className:`splide__slide tb_${o.id}`,"data-id":o.id,p_id:l,children:(0,h.jsx)(C,{onClickToCTA:d,Post:o,index:i,CardStyle:s,ThemeStyle:a,ThemeInfo:n,clickToShowPopUp:_})},i)}))})}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--prev tb_hc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--next tb_hc_arrow_right__ tb__icon tb-arrow-right-alt","aria-labelledby":"Navigation Next Slide",onClick:o.HY?this.requestData:null,children:" "})]})]})}):null}}const k=(0,a.memo)((0,n.Ng)("",(e=>({nextData:(t,s,a,n,i,o,r,l)=>e((0,N.wF)(t,s,a,n,i,o,r,l))})))(S))},61038:()=>{}}]);