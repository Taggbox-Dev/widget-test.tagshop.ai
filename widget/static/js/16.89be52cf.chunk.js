"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[16,9239,5790],{66538:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var a=s(47313),o=s(97914),n=s(43411),i=s(98501),l=s(43635),r=s(35179),c=s(46417);class d extends a.PureComponent{render(){const{UgcSettings:e,id:t,tagShopWallId:s}=this.props;var a=window.ugcSuite||window.location.href.includes("ugcSuite=1")?{ugcSuite:1}:{};const n=Object.keys(a).length>0?"&ugcSuite=1":"",l=!(s||!r.ig),d=e.onsite_qr_code_status||""!=e.onsite_qr_code_btn_text?e.onsite_qr_code_btn_text:"",_=r.ig?"".concat(i.oC,"/").concat(t,"/onsite-upload").concat(l?"?wall=1":""):"".concat(i.nn,"/").concat(t,"?onsite-upload=true").concat(n);return!e.onsite_status||!r.ig&&!e.onsite_button_status||1!=e.onsite_qr_code_status&&""===d?null:(0,c.jsx)("div",{className:"tb_onsite_upload_btn_wrap",children:(0,c.jsx)("div",{className:"tb_onsite_upload_btn",children:(0,c.jsx)("div",{className:"tb_onsite_btn",onClick:()=>this.props.onSitePopup(!0),children:(0,c.jsxs)("div",{className:"tb_onsite_qr_btn_wrap",children:[1==e.onsite_qr_code_status?(0,c.jsx)("div",{className:"tb_onsite_qr_code",children:(0,c.jsx)(o.ZP,{level:"L",size:60,value:_})}):null,""!==d?(0,c.jsx)("div",{className:"tb_onsite_btn_txt tb-cTBfont-".concat(e.onsite_font_varient_btn),children:d}):""]})})})})}}const _=(0,n.$j)((e=>({modalPop:e.modalPop})),(e=>({onSitePopup:t=>e((0,l.wg)(t))})))(d)},89239:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var a=s(47313),o=s(17739),n=s(98935),i=s(46417);class l extends a.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,i.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,i.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),alt:(0,o.P)(e.picture),width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,i.jsx)(n.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},98935:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(47313),o=s(46417);const n=e=>{let{username:t,network:s,authorClass:a,errorPic:n}=e;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:n||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45})},i=(0,a.memo)(n)},55790:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var a=s(47313),o=s(17739),n=s(46417);const i=e=>{const{postTime:t,timeClass:s}=e;return(0,n.jsx)("div",{className:s,children:(0,o.Sy)(t)})},l=(0,a.memo)(i)},91744:(e,t,s)=>{s.r(t),s.d(t,{default:()=>S});var a=s(47313),o=s(43411),n=s(11774),i=s(44084),l=s(89239),r=s(55790),c=s(25810),d=s(35179),_=s(46417);const p=e=>{let{author:t,personalization:s,postTime:a,network:o,ThemeRule:n,font:i}=e;const p=!(!s.postAuthor||t.isInstaUser),h=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,_.jsxs)("div",{className:"tb_gt_author_wrapper ".concat(d.ZQ?"tb_gt_author_wrapper_top":""),children:[(0,_.jsxs)("div",{className:"tb_gt_author",children:[p?(0,_.jsx)(l.default,{network:o,author:t,authorClass:"tb_gt_author_profile"}):"",(0,_.jsxs)("div",{className:"tb_gt_author_info",children:[p?(0,_.jsx)("div",{className:"tb_gt_authorname",children:t.name}):"",(0,_.jsxs)("div",{className:"tb_gt_post_info",children:[p?(0,_.jsx)("div",{className:"tb_gt_username",children:"@".concat(t.username)}):"",h?(0,_.jsx)("div",{className:"tb_gt_seprator",children:" "}):"",s.postTime?(0,_.jsx)(r.default,{postTime:a,timeClass:"tb_gt_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor}):""]})]})]}),d.ZQ?null:(0,_.jsx)("div",{className:"tb_gt_social_",children:(0,_.jsx)(c.default,{networkClass:"tb_gt_social__ico",network:o,isDefault:1===n.iconType,ThemeRule:n})})]})};var h=s(81349),u=s(84261),m=s(64442);const g=a.lazy((()=>Promise.resolve().then(s.bind(s,25810)))),w=e=>{let{itemData:t,wallID:s,ThemeID:o,ownerId:n,wall:i}=e;const l=!t.hotspot,r=!(3!==t.type&&5!==t.type||1!=i.ThemeRule.autoPlay&&d.ig);return(0,_.jsxs)("div",{className:"tb_gt_media_wrap",children:[d.ZQ?(0,_.jsx)("div",{className:"tb_gt_social_top_",children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:(0,_.jsx)(g,{networkClass:"tb_gt_social__ico",network:t.network,isDefault:1===i.ThemeRule.iconType,ThemeRule:i.ThemeRule})})}):null,(0,_.jsx)(h.Z,{itemData:t,IconClass:"tb_gt_media_icon",show:l}),r?(0,_.jsx)(m.Z,{VideoClass:"tb_gt_video",data:t,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:n,size:100,isCover:!0,muted:!0}):(0,_.jsx)(u.default,{ImageClass:"tb_gt_image",data:t,wallID:s,themeID:o,ownerId:n,size:100,hotspot:!!t.hotspot})]})};var x=s(17739),b=s(11502);const j=a.lazy((()=>Promise.all([s.e(6390),s.e(8342)]).then(s.bind(s,62245)))),v=d.ZQ?null:200,T=e=>{let{itemData:t,personalization:s,ThemeRule:o,clickToShowPopUp:n,itemIndex:i,wallID:l,ownerId:r,postSizeInPx:h,wall:u}=e;const m=2===t.type||3===t.type||4===t.type||5===t.type,g=s.trimcontent?(0,x.Sv)(t.content,v):t.content,T=h.adjustWidth<250,D=0==o.postHover&&d.ig?"light":"dark",I=!!(t.hotspot&&t.ugc_products.length>0),f=!!(d.ig&&!t.hotspot&&t.ugc_products.length>0);return(0,_.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_gt_post_wrapper".concat(T?" tb_gt_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":f?1:I?2:0,children:(0,_.jsx)("div",{className:"tb_gt_post_in".concat(d.ig?" tb_gt_post_ani":""),onClick:n(i,t),children:(0,_.jsxs)("div",{className:"tb_gt_post_media_wrapp",children:[m?(0,_.jsx)(w,{itemData:t,wallID:l,wall:u,ownerId:r}):"",I?null:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"tb_gt_post_details",children:[d.ig?(0,_.jsx)("div",{className:"tb_gt_social_",children:(0,_.jsx)(c.default,{networkClass:"tb_gt_social__ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null,f?(0,_.jsx)(b.Z,{ThemeRule:o,btnClass:"tb_gt_btn_wrap"}):null,d.ig?null:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"tb_gt_contant_wrapper",children:o.hideContent&&1!=t.type?"":(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:(0,_.jsx)(j,{contentClass:"tb_gt_content",item:t,content:g,font:o,ThemeRule:o,personalization:s,contentTitle:t.contentTitle})})}),(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:(0,_.jsx)(p,{ownerId:r,postTime:t.createdAt,author:t.author,network:t.network,font:o,personalization:s,ThemeRule:o})})]})]}),(0,_.jsx)("div",{className:"tb_gt_post_overlay tb_gt_post_overlay-".concat(D),children:(0,_.jsx)("div",{})})]})]})})})};var D=s(66538);class I extends a.Component{constructor(e){super(e),this.state={snapBtnSize:0,sizeClass:""},this.updateDimensions=this.updateDimensions.bind(this)}componentDidMount(){window.addEventListener("resize",this.updateDimensions),this.updateDimensions()}componentWillUnmount(){window.removeEventListener("resize",this.updateDimensions)}componentDidUpdate(){this.updateDimensions()}updateDimensions(){const{className:e,wall:t}=this.props,s=this.divRef.offsetWidth;s!==this.state.snapBtnSize&&(s<200&&s>150?this.setState({sizeClass:"".concat(e,"-3x")}):s<150&&s>120?this.setState({sizeClass:"".concat(e,"-2x")}):s<120&&s>0&&this.setState({sizeClass:"".concat(e,"-1x")}),this.setState({snapBtnSize:s}))}render(){const{className:e,wall:t}=this.props,{sizeClass:s}=this.state;return(0,_.jsx)("div",{className:"".concat(e," ").concat(s),ref:e=>{this.divRef=e},children:(0,_.jsx)(D.default,{UgcSettings:t.UgcSettings,id:t.Wall.id,tagShopWallId:t.Wall.wallId})})}}const f=e=>{let{wall:t,itemData:s,completeDataObject:o,parentID:n,itemIndex:i,clickToShowPopUp:l,onClickToCTA:r,postSizeInPx:c,isOnsite:d}=e;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"tb_gt_post_small",children:[d?(0,_.jsx)("div",{className:"tb_gt_post_wrapper tb_onsite_post__",children:(0,_.jsxs)(a.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:[" ",(0,_.jsx)(I,{className:"tb_gt_post_in",wall:t})," "]})}):(0,_.jsx)(T,{parentID:n,ownerId:t.Wall.owner,wall:t,itemData:o[s[0]],itemIndex:i,personalization:t.Personalization,ThemeRule:t.ThemeRule,clickToShowPopUp:l,wallID:t.Wall.id,onClickToCTA:r,postSizeInPx:c}),(0,_.jsx)(T,{parentID:n,ownerId:t.Wall.owner,wall:t,itemData:o[s[1]],itemIndex:i,personalization:t.Personalization,ThemeRule:t.ThemeRule,clickToShowPopUp:l,wallID:t.Wall.id,onClickToCTA:r,postSizeInPx:c})]}),(0,_.jsx)("div",{className:"tb_gt_post_large",children:(0,_.jsx)(T,{parentID:n,ownerId:t.Wall.owner,wall:t,itemData:o[s[2]],itemIndex:i,personalization:t.Personalization,ThemeRule:t.ThemeRule,clickToShowPopUp:l,wallID:t.Wall.id,onClickToCTA:r,postSizeInPx:c})})]})};var k=s(43635);s(37210);class C extends a.PureComponent{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:a}=this.props;a&&(0,k.Sx)(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.state={parent_id:""},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100)}render(){const{postData:e,completeDataObject:t,wall:s,clickToShowPopUp:a,onClickToCTA:o,postSizeInPx:l,parentID:r}=this.props,c=r,p=s.ThemeRule.numberOfCoumn,h=s.ThemeRule.mobileColumn,u=s.ThemeRule.slidePost,m=s.ThemeRule.slideDuration,g={grid:{rows:s.ThemeRule.multiRow},rewind:!0,speed:1e3,interval:1===u?1e3*parseInt(m):5e3,perPage:p>0?p:d.ZQ||d.ig?3:6,perMove:1,gap:0,autoplay:1===u,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:h>0?h:1},767:{perPage:h>0?h:2},991:{perPage:h>0?h:3},1200:{perPage:p>0?p:d.ig?3:4},1400:{perPage:p>0?p:d.ig?3:5},1600:{perPage:p>0?p:d.ZQ||d.ig?3:6}}};let w=[];const x=!!s.UgcSettings.onsite_status;for(let n=0;n<e.length;){let t=0==n&&x?2:3;const s=2==t?[0].concat(e.slice(n,n+t)):e.slice(n,n+t);w.push(s),n+=t}return w=w.length<9?Array(10).fill(w).flat():w,e&&e.length>2?(0,_.jsx)("div",{className:"tb_gt_post_container",children:(0,_.jsxs)(n.tv,{hasTrack:!1,className:"tb_gt_post_slider",options:g,extensions:{Grid:i.r},ref:e=>this.inputRefs[c]=e,children:[(0,_.jsx)(n.Gj,{children:w.map(((e,i)=>e&&3==e.length?(0,_.jsx)(n.jw,{id:"tb_gt-".concat(i),className:"tb_gt_post_row tb_".concat(i),idd:r,children:(0,_.jsx)(f,{parentID:r,ownerId:s.Wall.owner,wall:s,completeDataObject:t,itemIndex:i,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:a,wallID:s.Wall.id,onClickToCTA:o,postSizeInPx:l,indexNo:i<6?i:"0",largeDiv:66.66,smallDiv:33.33,itemData:e,isOnsite:x&&0==i})},i):null))}),(0,_.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_gt_arrow_wrapper_",children:[(0,_.jsx)("div",{className:"tb_gt_arrow splide__arrow splide__arrow--prev tb_gt_arrow tb_gt_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,_.jsx)("div",{})}),(0,_.jsx)("div",{className:"tb_gt_arrow splide__arrow splide__arrow--next  tb_gt_arrow_right__ tb__icon tb-arrow-right-alt",onClick:this.requestData,children:(0,_.jsx)("div",{})})]})]})}):null}}const S=(0,o.$j)((e=>({})),(e=>({getDataNextSteps:(t,s,a,o,n,i,l,r)=>e((0,k.Sx)(t,s,a,o,n,i,l,r))})))(C)}}]);