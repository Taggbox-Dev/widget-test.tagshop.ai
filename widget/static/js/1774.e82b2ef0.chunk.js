"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1774,3538,4897,7278],{19160:(e,t,i)=>{i.d(t,{A:()=>n});var s=i(65043),r=i(78250),a=i(65281),o=i(70579);class n extends s.PureComponent{constructor(e){super(e),this.onLoad=e=>1==e.target.getAttribute("data-load")&&this.setState({imgUrl:e.target.src,loadError:!1}),this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.media}}UNSAFE_componentWillReceiveProps(e){const{itemDetails:t}=e,{loadError:i}=this.state;i&&e!=this.props&&t&&Object.keys(t).length&&t.showCart&&this.setState({imgUrl:t.data.featured_image,loadError:!1})}render(){const{ImageClass:e}=this.props,{imgUrl:t,paddingBottom:i}=this.state,s={paddingBottom:`${i}%`};return(0,o.jsx)("div",{className:`${e}_wrap`,style:s,children:(0,o.jsx)("img",{className:e,role:"img",src:t,height:300,width:300,onLoad:this.onLoad,onError:e=>{this.setState({loadError:!0}),e.target.src=r.qF},alt:(0,a.wG)(t)})})}}},77278:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});var s=i(65043),r=i(97628),a=i(70579);class o extends s.PureComponent{render(){const{author:e,authorClass:t,networkId:i,size:s,inView:o}=this.props;return(0,a.jsx)("div",{className:t,style:{overflow:4==i?"visible":""},children:o?(0,a.jsx)("img",{className:`${t}__`,src:e.picture,"aria-label":"author",alt:e.name,width:s||44,height:s||44,onError:t=>{const s=(0,r.Yo)(i),a="#ffffff"==s?"000":s.replace("#","");t.target.src=e.errorPic?e.errorPic:`https://ui-avatars.com/api/?name=${e.name.replace(/\s/g,"")}&background=${a}&color=fff&length=1`}}):null},Math.random())}}},43538:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var s=i(65043),r=i(65281),a=i(70579);const o=e=>{const{createdAt:t,timeClass:i}=e;return(0,a.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,r.fF)(t)}`,children:(0,r.fF)(t)})},n=(0,s.memo)(o)},69993:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var s=i(65043),r=i(83003),a=i(74975),o=i(50050),n=(i(61964),i(36671)),d=i(69433),l=i(77822),c=i(70579);const p=e=>{let{Post:t,ThemeStyle:i,CardStyle:s,index:r,inView:a}=e;const o=!(![3,5].includes(t.type)||1!==i.autoPlay||!a);return(0,c.jsxs)("div",{className:"tb_rtp_media_wrap",children:[o&&1==s.viewCountStatus&&(null===t||void 0===t?void 0:t.count.views)>0?(0,c.jsx)(l.A,{count:null===t||void 0===t?void 0:t.count.views}):null,o?(0,c.jsx)(d.A,{VideoClass:"tb_rtp_video",Post:t,size:1,isCover:!0,muted:!0,autoPlay:!0,index:r,inView:a}):(0,c.jsx)(n.A,{ImageClass:"tb_rtp_image",Post:t,size:1,index:r,inView:a})]})};var u=i(22030),m=i(92908),h=i(19160);const _=(e,t)=>{if(0!=e){if(t>0&&t<e){let i=(e-t)/e*100;return i>0?`${i.toFixed()}%`:""}return!1}return!1},b=e=>{let{Post:t,ProductSetting:i}=e;const s=t.products,{Price:r,ProductTitle:n}=i,d=!(!s||1!=s.length);return(0,c.jsx)("div",{className:"tb_rtp_wrap",id:`slide-${t.id}`,children:(0,c.jsxs)("div",{className:"tb_rtp_wrap_in tb_swiper",children:[(0,c.jsx)(a.RC,{id:`product_slide-${t.id}`,modules:[o.dK,o.Vx],spaceBetween:10,navigation:{prevEl:`#tb_rtn_prev-${t.id}`,nextEl:`#tb_rtn_next-${t.id}`},children:s.map(((e,t)=>(0,c.jsx)(a.qr,{children:(0,c.jsxs)("div",{className:"tb_rtp",children:[(0,c.jsx)("div",{className:"tb_rtp_media",style:{opacity:e.image?1:0},children:(0,c.jsx)(h.A,{ImageClass:"tb_rtp_img",media:e.image,size:!1,itemDetails:""})}),(0,c.jsx)("div",{className:"tb_rtp_title_w",children:e.title?(0,c.jsx)("div",{className:`tb_rtp_title tb-cTBfont-${n.variant}`,children:e.title}):null}),e.price>0||e.discount>0?(0,c.jsxs)("div",{className:"tb_rtp_price_wrap",children:[(0,c.jsxs)("div",{className:`tb_rtp_price tb-cTBfont-${r.variant}`,children:[e.currency,e.discount>0?e.discount:e.price]}),e.discount>0&&e.discount!=e.price?(0,c.jsxs)("div",{className:`tb_rtp_d_price tb-cTBfont-${r.variant}`,children:[e.currency,e.price]}):null,_(Number(e.price),Number(e.discount))&&""!=_(Number(e.price),Number(e.discount))?(0,c.jsx)("div",{className:"tb_rtp_dp",children:_(Number(e.price),Number(e.discount))}):null]}):null]},t)},t)))}),d?null:(0,c.jsxs)("div",{className:"tb_rtn_wrap",onClick:e=>{e.stopPropagation()},children:[(0,c.jsx)("div",{id:`tb_rtn_prev-${t.id}`,className:"tb_rtn_btn tb_rtn_btn_left tb__icon tb-arrow-left-alt",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{id:`tb_rtn_next-${t.id}`,className:"tb_rtn_btn tb_rtn_btn_right tb__icon tb-arrow-right-alt",children:(0,c.jsx)("div",{})})]})]})})};var v=i(77278),g=i(43538);const x=e=>{let{Post:t,CardStyle:i,ProductSetting:s,inView:r}=e;const{author:a,networkId:o}=t,{ProductTitle:n}=s,d=!(!i.author.status||(0,u.zK)(a.name));return(0,c.jsx)("div",{className:"tb_rtp_wrap",children:(0,c.jsxs)("div",{className:"tb_rtp_wrap_in",style:{marginTop:d?"":0},children:[d?(0,c.jsxs)("div",{className:"tb_rtp_media",children:[(0,c.jsx)(v.default,{networkId:o,author:a,authorClass:"tb_rtp_a_img",inView:r},a.username)," "]}):"",d?(0,c.jsx)("div",{className:"tb_rtp_title_w",children:(0,c.jsx)("div",{className:`tb_rtp_authorname tb-cTBfont-${n.variant}`,children:a.username&&a.username.length>0?`${a.username}`:""})}):"",i.timeStatus?(0,c.jsx)(g.default,{createdAt:t.createdAt,timeClass:`tb_rtp_time tb-cTBfont-${i.author.variant}`}):""]})})};var w=i(43702);class f extends s.PureComponent{constructor(e){super(e),this.mediaHeight=s.createRef()}componentDidMount(){const{Post:e,itemIndex:t,onClickPopUpSlider:i}=this.props;(0,u._7)(this.mediaHeight),e.isPopUp&&i(t,e)}render(){const{itemIndex:e,ThemeStyle:t,CardStyle:i,Post:s,ProductSetting:r,sliderHeight:a,clickToShowPopUp:o,index:n}=this.props,{style:d}=i,l={backgroundColor:d.background,minHeight:a};[3,5].includes(s.type);return(0,c.jsx)(w.A,{children:a=>{let{ref:u,inView:h}=a;return(0,c.jsx)("div",{"data-id":s.id,id:`tb_rt_id-${s.id}`,className:"tb_rtp_post_wrapper",onClick:o(e,s),style:{padding:d.padding/2,opacity:h?1:0,transition:h?"opacity .5s ease-in-out":""},"tb-product":s.isShopIcon?1:s.isHotspot?2:0,"area-label":s.content.text,role:"article",ref:u,"post-id":s.referenceId?s.referenceId:s.id,"feed-id":s.feedId,children:(0,c.jsxs)("div",{className:"tb_rtp_post_in tb_icon_animate "+(m.HY?"":"tb_rtp_post_in_animate"),style:l,role:"button","aria-label":"Popup",tabIndex:0,ref:this.mediaHeight,children:[(0,c.jsx)(p,{Post:s,CardStyle:i,ThemeStyle:t,index:n,inView:h}),m.HY?null:(0,c.jsx)("div",{className:"tb_rtp_play_ico",children:(0,c.jsx)("div",{className:"tb__icon tb-play",children:(0,c.jsx)("div",{})})}),s.isProduct?(0,c.jsx)(b,{Post:s,ProductSetting:r},`product_slide${s.id}`):(0,c.jsx)(x,{Post:s,CardStyle:i,ThemeStyle:t,ProductSetting:r,inView:h})]})})}})}}var j=i(26165);class S extends s.Component{constructor(e){super(e),this.requestData=e=>{const{appendData:t,ThemeInfo:i,ThemeStyle:s,hasMoreData:r,nextData:a,loaderData:o,containerSize:n}=this.props;e.progress>.8&&r&&!o.isShowMoreLoading&&a(m.HY?null===i||void 0===i?void 0:i.webId:null===i||void 0===i?void 0:i.wallId,Math.floor(Date.now()/1e3),(0,u.Ci)(n.width,s.column,300),t.networkID,t.after,t.heightEvent)},this.updatepost=e=>this.setState({loadData:!0},(()=>setTimeout((()=>this.props.loadMoredata()),1e3*e))),this.inputRefs={},this.state={loadData:!1}}componentDidUpdate(){this.props.loadBranding()}render(){const{postData:e,completeDataObject:t,clickToShowPopUp:i,hasMoreData:s,parentID:r,keyRender:n,onClickPopUpSlider:d,CardStyle:l,ThemeStyle:p,ProductSetting:h,ThemeInfo:_,containerSize:b}=this.props,v=r,g=p.column.mobile,x=p.slide.autoSlide,w=p.slide.slideDuration,{loadData:j}=this.state,S=b.width>767?280:300,y=(0,u.Ci)(b.width,p.column,S);return(0,c.jsx)(c.Fragment,{children:r&&(0,c.jsx)("div",{className:"tb_rtp_post_container tb_swiper",ref:this.sliderHeight,children:(0,c.jsx)(a.RC,{observer:!0,observeParents:!0,spaceBetween:0,ref:e=>this.inputRefs[v]=e,onScroll:e=>{this.requestData(e)},onTouchMove:e=>{this.requestData(e),j||this.updatepost(0)},onAutoplay:e=>{this.requestData(e),j||this.updatepost((0,u.qs)()&&g&&w<5?0:5)},speed:700,edgeSwipeDetection:!0,slidesPerView:y+.4,touchRatio:2,cssMode:(0,u.qs)(),passiveListeners:!0,freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:!(!m.HY&&!m.MH)&&{delay:1===x?1e3*w:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!s,mousewheel:{forceToAxis:!0,sensitivity:1},watchSlidesProgress:!0,modules:[o.Ij,o.FJ,o.U1],className:"tb_rtp_post_slider",children:(null===e||void 0===e?void 0:e.length)>0&&e.map(((e,s)=>{const o=t[e];return m.HY||1!==o.type?(0,c.jsx)(a.qr,{"data-id":o.id,p_id:r,className:`tb_${o.id}`,children:e=>{let{isVisible:t}=e;return(0,c.jsx)(f,{isVisible:t,Post:o,index:s,CardStyle:l,ThemeStyle:p,ProductSetting:h,ThemeInfo:_,clickToShowPopUp:i,onClickPopUpSlider:d},s)}},`${o.id}-${s}`):null}))},n)})})}}const y=(0,s.memo)((0,r.Ng)((e=>({loaderData:e.loaderData})),(e=>({nextData:(t,i,s,r,a,o,n,d)=>e((0,j.wF)(t,i,s,r,a,o,n,d))})))(S))},97628:(e,t,i)=>{i.d(t,{EC:()=>s,Oi:()=>a,Yo:()=>r});const s=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),r=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),a=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")}}]);
//# sourceMappingURL=1774.e82b2ef0.chunk.js.map