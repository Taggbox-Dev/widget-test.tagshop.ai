(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9077,8342,9239,5790],{89239:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(47313),o=s(17739),n=s(98935),r=s(46417);class i extends a.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,r.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),alt:(0,o.P)(e.picture),width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(n.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},98935:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(47313),o=s(46417);const n=e=>{let{username:t,network:s,authorClass:a,errorPic:n}=e;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:n||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45})},r=(0,a.memo)(n)},62245:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(47313),o=s(16390),n=s(17739),r=(s(35179),s(25810),s(46417));const i=a.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class l extends a.PureComponent{constructor(e){super(e),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{const e=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}),100)}render(){const{contentClass:e,content:t,ThemeRule:s,font:l,personalization:c,item:h,contentTitle:d,readMore:_,maxLength:p,textAlign:u,maxLines:m,isReadMore:w}=this.props,b={WebkitLineClamp:m,textAlign:s.textAlignment};u||s.textAlignment;let x=20==h.network.id?t:(0,n.Fx)(t);12==h.network.id&&(x=(0,o.ZP)(x));const g="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),v="".concat(e," ").concat(w?"":g);return(0,r.jsxs)("div",{className:v,ref:this.contentRef,style:b,children:[d?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(d)}):null,(0,r.jsxs)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(i,{data:h,content:x,Personalization:c})]})]})}}},5744:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(47313),o=s(43635),n=s(35179),r=s(46417);class i extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:r}=this.props;t.stopPropagation(),n.ZQ||(0,o.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:r}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,r.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,r.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(n.ZQ?"tb-share-fill":"tb-share"),children:(0,r.jsx)("div",{})}),(0,r.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,r.jsx)("div",{})})}):"",e.twitter?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,r.jsx)("div",{})})}):"",e.linkedin?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,r.jsx)("div",{})})}):""]})]})}}},55790:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(47313),o=s(17739),n=s(46417);const r=e=>{const{postTime:t,timeClass:s}=e;return(0,n.jsx)("div",{className:s,children:(0,o.Sy)(t)})},i=(0,a.memo)(r)},9105:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>T});var a=s(47313),o=s(43411),n=s(11774),r=(s(44084),s(89239)),i=s(55790),l=s(25810),c=s(35179),h=s(46417);const d=e=>{let{author:t,personalization:s,postTime:a,network:o,ThemeRule:n,font:d}=e;const _=!(!s.postAuthor||t.isInstaUser),p=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,h.jsxs)("div",{className:"tb_hs_author_wrapper ".concat(c.ZQ?"tb_hs_author_wrapper_top":""),children:[(0,h.jsxs)("div",{className:"tb_hs_author",children:[_?(0,h.jsx)(r.default,{network:o,author:t,authorClass:"tb_hs_author_profile"}):"",(0,h.jsxs)("div",{className:"tb_hs_author_info",children:[_?(0,h.jsx)("div",{className:"tb_hs_authorname",children:t.name}):"",(0,h.jsxs)("div",{className:"tb_hs_post_info",children:[_?(0,h.jsx)("div",{className:"tb_hs_username",children:"@".concat(t.username)}):"",p?(0,h.jsx)("div",{className:"tb_hs_seprator",children:" "}):"",s.postTime?(0,h.jsx)(i.default,{postTime:a,timeClass:"tb_hs_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor}):""]})]})]}),c.ZQ?null:(0,h.jsx)("div",{className:"tb_hs_social_",children:(0,h.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:o,isDefault:1===n.iconType,ThemeRule:n})})]})};var _=s(81349),p=s(84261),u=s(64442);const m=e=>{let{itemData:t,wallID:s,ThemeID:a,ThemeRule:o,ownerId:n,wall:r}=e;const i=!(!c.ZQ||3!==t.type&&5!==t.type||r.Personalization.mobilePopup||r.Personalization.postFeatured),l=c.ZQ?r.ThemeRule.aspectImageRatio?r.ThemeRule.aspectImageRatio:75:100,d=(3===t.type||5===t.type)&&28!==t.network.id&&1==r.ThemeRule.autoPlay,m=!c.ig||!t.hotspot;return(0,h.jsxs)("div",{className:"tb_hs_media_wrap",children:[i?null:(0,h.jsx)(_.Z,{itemData:t,IconClass:"tb_hs_media_icon",show:m}),d?(0,h.jsx)(u.Z,{VideoClass:"tb_hs_video",data:t,wallID:s,themeID:r.Personalization.widgetTheme,ownerId:n,size:l,isCover:!0,muted:!0,autoPlay:d,handleVideoEnded:()=>{}}):(0,h.jsx)(p.default,{ImageClass:"tb_hs_image",data:t,wallID:s,themeID:r.Personalization.widgetTheme,ownerId:n,size:l,ThemeRule:o,hotspot:!0})]})};var w=s(62245),b=s(17739),x=s(11502),g=s(5744);const v=c.ZQ?null:200,j=e=>{let{itemData:t,personalization:s,ThemeRule:a,clickToShowPopUp:o,itemIndex:n,wallID:r,ownerId:i,postSizeInPx:_,wall:p,isPadding:u,isRowCount:j}=e;const k=!!(t.ugc_products&&t.ugc_products.length>0),f=!(!k||0!==t.hotspot),T=(""===a.postHover||a.postHover,2===t.type||3===t.type||4===t.type||5===t.type),C=s.trimcontent?(0,b.Sv)(t.content,v):t.content,P=_.adjustWidth<250,D=!(!t.hotspot||!k),R=(!c.ig||t.hotspot,!a.hideContent),N=!f||0==R,I=!!f&&0!=R,y=0==a.postHover&&c.ig?"light":"dark",S=c.Jx?"tb_hs_color_overlay":"tb_hs_post_overlay-"+y,z={backgroundColor:c.Jx?a.backgroundColor:""};return(0,h.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_hs_post_wrapper".concat(P?" tb_hs_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":f?1:D?2:0,style:{padding:s.padding/2},children:(0,h.jsx)("div",{className:"tb_hs_post_in".concat(c.ig?" tb_hs_post_ani":""),onClick:o(n,t),children:(0,h.jsxs)("div",{className:"tb_hs_post_media_wrapp",children:[T?(0,h.jsx)(m,{itemData:t,wallID:r,wall:p,ownerId:i}):"",D?null:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"tb_hs_post_details",children:[(0,h.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[c.ig?(0,h.jsx)("div",{className:"tb_hs_social_",children:(0,h.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null,I?(0,h.jsx)(x.Z,{ThemeRule:a,btnClass:"tb_hs_btn_wrap"}):null,N||1==t.type?(0,h.jsx)(w.default,{contentClass:"tb_hs_content",item:t,content:C,font:a,ThemeRule:a,personalization:s,contentTitle:t.contentTitle,isNetwork:!0}):null]}),c.ig?null:(0,h.jsx)(d,{ownerId:i,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:s,ThemeRule:a}),t.share.status?(0,h.jsx)(g.Z,{share:t.share,shareClass:"tb_hs_share_container ".concat(c.ZQ?"tb_hs_share_container_te":""),item:t,wallID:r,ownerId:i}):null]}),D?null:(0,h.jsx)("div",{className:"tb_hs_post_overlay ".concat(S),style:z,children:(0,h.jsx)("div",{})}),c.ZQ?(0,h.jsx)("div",{className:"tb_hs_social_bottom_",children:(0,h.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null]})]})})})};var k=s(43635);s(37210);class f extends a.PureComponent{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:a,getDataNextSteps:o}=this.props;a&&o(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.autoScrollSlider=(e,t,s,a)=>{const{wall:o}=this.props;if(1==o.Personalization.autoScrollStatus||c.ig){const t=c.ZQ?e._o.perPage+e.index:e.index;e.length-t===(c.ZQ?1:e._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e}=this.props;this.setState({postData:e})}render(){var e;const{postData:t,completeDataObject:s,wall:a,clickToShowPopUp:o,onClickToCTA:r,postSizeInPx:i,parentID:l,keyRender:d,loaderData:_}=this.props,p=l,u=a.ThemeRule.numberOfCoumn,m=a.ThemeRule.mobileColumn,w=a.ThemeRule.slidePost,b=a.ThemeRule.slideDuration,x=a.Personalization.autoScrollStatus,g=a.ThemeRule.multiRow&&0!==a.ThemeRule.multiRow?a.ThemeRule.multiRow:1;var v=[];let k=!0;const f=(c.ZQ||c.ig)&&void 0!==(null===(e=a.Personalization)||void 0===e?void 0:e.clonePost)&&0===a.Personalization.clonePost?{clones:0}:{};for(var T=0,C=t.length;T<C;)v.push(t.slice(T,T+=g));c.ig&&f&&0==Object.keys(f).length&&(16677==a.User.id?"product"===window.dataFilterType&&(k=!!(v&&v.length>=5)):v=v.length<12?Array(15-v.length).fill(v).flat():v);const P=1!=x?!(Object.keys(f).length>0)&&(c.ig?"slide":"loop"):c.ig?"slide":"loop",D={...f,type:1!==x&&P,rewind:!0,speed:1e3,interval:1===w?1e3*parseInt(b):5e3,perPage:u>0?u:c.ZQ?3:6,perMove:1,gap:0,autoplay:1===w,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:m>0?m:1},767:{perPage:m>0?m:2},991:{perPage:m>0?m:3},1200:{perPage:u>0?u:4},1400:{perPage:u>0?u:5},1600:{perPage:u>0?u:c.ZQ?3:6}}};return(0,h.jsx)(h.Fragment,{children:""!=l?(0,h.jsx)("div",{className:"tb_hs_post_container",children:k?(0,h.jsxs)(n.tv,{hasTrack:!1,className:"tb_hs_post_slider",options:D,ref:e=>this.inputRefs[p]=e,onMove:this.autoScrollSlider,children:[(0,h.jsx)(n.Gj,{children:(a.ThemeRule.multiRow>1&&1!==v.length&&v.length%2!==0?v.pop():v)&&v&&v.length>0&&v.map(((e,t)=>(0,h.jsx)(n.jw,{className:"tb_".concat(t),idd:l,children:(0,h.jsx)("div",{className:"tb_hs_col_wrap",children:e.map(((e,t)=>{const n=s[e];return(0,h.jsx)(j,{parentID:l,ownerId:a.Wall.owner,wall:a,itemData:n,itemIndex:t,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:o,wallID:a.Wall.id,onClickToCTA:r,postSizeInPx:i},t)}))})},"tb_".concat(t,"_").concat(t))))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,h.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,h.jsx)("div",{})}),(0,h.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt ".concat(_.isShowMoreLoading?"tb_a_spinner":""),onClick:c.ig?e=>this.requestData():null,children:(0,h.jsx)("div",{})})]})]}):null}):null})}}const T=(0,o.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,s,a,o,n,r,i,l)=>e((0,k.Sx)(t,s,a,o,n,r,i,l))})))(f)},50247:()=>{}}]);