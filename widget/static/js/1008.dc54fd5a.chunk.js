(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1008,7033,7234,7668],{97234:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var n=s(72791),r=s(2703),a=s(14496),o=s(80184);class i extends n.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,o.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,r.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(a.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});s(72791);var n=s(80184);const r=t=>{let{username:e,network:s,authorClass:r}=t;return(0,n.jsx)("img",{className:"".concat(r,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var n=s(72791),r=s(80184);class a extends n.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:n,item:a}=this.props,o=!(!s||1!==s.status);return(0,r.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),n(a),window.open("".concat(o?s.url:t.url),"_blank")},children:[" ",o?s.text:t.text]})}}const o=a},70757:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var n=s(72791),r=s(46535),a=s(2703),o=s(80184);const i=n.lazy((()=>s.e(1088).then(s.bind(s,41088))));class l extends n.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:l}=this.props,c=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),d=r.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:(0,a.mD)(59)?null:s.iconColor},children:(0,o.jsx)("div",{})}):(0,o.jsxs)(n.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(i,{network:t,networkClass:e})]})}}},23450:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var n=s(72791),r=s(34867),a=s(2703),o=(s(46535),s(70757),s(80184));const i=n.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class l extends n.PureComponent{constructor(t){super(t),this.toggleExpanded=t=>{this.setState({expanded:!this.state.expanded}),t.stopPropagation()},this.state={expanded:!1}}render(){const{contentClass:t,content:e,ThemeRule:s,font:l,personalization:c,item:d,contentTitle:_,readMore:h,maxLength:u,textAlign:m,isNetwork:p}=this.props,{expanded:b}=this.state,w={textAlign:m||s.textAlignment};let g=20==d.network.id?e:(0,a.Fx)(e);12==d.network.id&&(g=(0,r.ZP)(g));const x=h?b?g:g.slice(0,u):g,v="".concat(t).concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):"").concat(s.font_varient?" tb-cTBfont-".concat(s.font_varient):"");return(0,o.jsxs)("div",{className:v,style:w,children:[_?(0,o.jsx)("div",{className:"tb_bold_txt__",children:(0,r.ZP)(_)}):null,(0,o.jsxs)(n.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(i,{data:d,content:x,Personalization:c})]}),h&&g.length>u&&(0,o.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:b?"...Read Less...":"...Read More..."})]})}}},19036:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var n=s(72791),r=s(46535),a=s(80184);const o=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:r.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:r.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:n,color:o}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,a.jsx)("div",{className:n,style:{color:o},"tb-network":e.id,children:(0,a.jsx)("div",{})})},i=t=>{let{ThemeID:e}=t;const{className:s,color:n}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,a.jsx)("div",{className:s,style:{color:n},"tb-network":e})};class l extends n.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,a.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,n)=>s?(0,a.jsx)(i,{ThemeID:s},n):(0,a.jsx)(o,{network:e},n))):null})}}},20169:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var n=s(72791),r=s(11225),a=s(46535),o=s(80184);class i extends n.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:n,ownerId:o}=this.props;e.stopPropagation(),a.ZQ||(0,r.S5)({type:2,action:2,wall:n,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:o}),(0,r.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,o.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(a.ZQ?"tb-share-fill":"tb-share"),children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,o.jsx)("div",{})})}):"",t.twitter?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,o.jsx)("div",{})})}):"",t.linkedin?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,o.jsx)("div",{})})}):""]})]})}}},31152:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var n=s(72791),r=(s(46535),s(2703)),a=s(80184);const o=(t,e,s)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,r.ok)(e)):s,i=(t,e,s)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,r.ok)(e)):s,l=t=>{let{arialbl:e,hrefClick:s,Icon:n,count:r}=t;return(0,a.jsx)("div",{className:"tb_social_action__list",children:(0,a.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(s,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,a.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(n),children:" "}),r>0?(0,a.jsx)("div",{className:"tb_social_action_counts__",children:r}):""]})})};class c extends n.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:s,ThemeID:n}=this.props,c={color:3===n?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),u=![29,19].includes(d),m=t.network.name?t.network.name:"";return(0,a.jsx)(a.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,a.jsx)("div",{className:s,children:(0,a.jsxs)("div",{className:"tb_social_action__",children:[h?(0,a.jsx)(l,{arialbl:m,hrefClick:o(d,t.postId,t.link),Icon:_,iconColorStyle:c,count:t.like_count}):null,u?(0,a.jsx)(l,{arialbl:m,hrefClick:i(d,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===d?(0,a.jsx)(l,{arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,r.ok)(t.postId)),Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,a.jsx)(l,{arialbl:m,hrefClick:t.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},27668:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var n=s(72791),r=s(2703),a=s(80184);const o=t=>{const{postTime:e,timeClass:s}=t,o=(0,n.useMemo)((()=>(0,r.Sy)(e)),[]);return(0,a.jsx)("div",{className:s,children:o})},i=(0,n.memo)(o)},51433:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>C});var n=s(72791),r=s(60173),a=s(77581),o=s(48282),i=s(2703),l=s(46535),c=s(97234),d=s(27668),_=s(70757),h=s(80184);const u=t=>{let{author:e,personalization:s,postTime:n,network:r,ThemeRule:a,font:o,mediaType:i,ownerId:u}=t;const m=!(!s.postAuthor||e.isInstaUser),p=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,h.jsxs)("div",{className:"tb_rc_author_wrapper",children:[(0,h.jsxs)("div",{className:"tb_rc_author",children:[m?(0,h.jsx)(c.default,{network:r,author:e,authorClass:"tb_rc_author_profile"},e.username):"",(0,h.jsxs)("div",{className:"tb_rc_author_info",children:[m?(0,h.jsx)("div",{className:"tb_rc_authorname",children:e.name}):"",(0,h.jsxs)("div",{className:"tb_rc_post_info",children:[m?(0,h.jsx)("div",{className:"tb_rc_username",children:e.username&&e.username.length>0?"@".concat(e.username):""}):"",p?(0,h.jsx)("div",{className:"tb_rc_seprator",children:" "}):"",s.postTime?(0,h.jsx)(d.default,{postTime:n,timeClass:"tb_rc_time tb-cTBfont-".concat(a.font_varient),authorColor:a.authorColor}):""]})]})]}),i&&r.id||l.ZQ?(0,h.jsx)("div",{className:"tb_rc_social_",children:(0,h.jsx)(_.default,{networkClass:"tb_rc_social_ico",network:r,isDefault:1===a.iconType,ThemeRule:a})}):null]})};var m=s(23450),p=s(20169),b=s(16243),w=s(19036),g=s(31152);const x=l.ZQ?null:200;class v extends n.PureComponent{constructor(t){super(t),this.postTrack=n.createRef()}componentDidMount(){l.nX&&(0,i.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,adjustWidth:s,ThemeRule:n,clickToShowPopUp:r,itemIndex:a,wallID:o,ownerId:c,onClickToCTA:d,wall:v}=this.props,f=2===t.type||3===t.type||4===t.type||5===t.type,k=t.rating>0,j=t.rating>0||(0,i.mD)(54)?"tb_rc_rating_content":"tb_rc_content",C=1===t.type&&e.textDecorate?"tb_rc_text_decoration tb_rc_text_post":"",N=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),T=e.trimcontent?(0,i.Sv)(t.content,x):t.content;return(0,h.jsx)("div",{className:"tb_rc_post_wrapper",ref:this.postTrack,"data-id":t.id,style:{width:"".concat(1==t.highlight?2*s:s,"%"),padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"tab-index":0,"area-label":T,role:"article",children:(0,h.jsx)("div",{className:"tb_rc_post_wrap_in ".concat(l.ZQ?"te_mc_post_wrap_in":""),children:(0,h.jsxs)("div",{className:"tb_rc_post_in",onClick:r(a,t),children:[(0,h.jsxs)("div",{className:"tb_rc_post_media_wrapp",children:[l.ZQ||f||!(0,i.mD)(20)?null:(0,h.jsxs)("div",{className:"tb_rc_social_top_",children:[" ",(0,h.jsx)(_.default,{networkClass:"tb_rc_social_center_ico",network:t.network,isDefault:1===n.iconType,ThemeRule:n})," "]}),t.share.status?(0,h.jsx)(p.Z,{share:t.share,shareClass:"tb_rc_share_container",item:t,wallID:o,ownerId:c}):null]}),(0,h.jsxs)("div",{className:"tb_rc_contant_wrapper",children:[(0,h.jsxs)("div",{className:"tb_rc_content_wrap ".concat((0,i.mD)(52)?"tb_rc_content_wrap_fixed":""),children:[k?(0,h.jsxs)("div",{className:"tb_rc_rating__ ".concat(29===t.network.id?"tb_rc_onsite_rating__":""),children:[(0,h.jsx)(w.Z,{rating:t.rating,network:t.network})," "]}):null,N&&!l.ZQ?(0,h.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,h.jsx)(b.Z,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,n.hideContent&&f?null:(0,h.jsx)(m.default,{item:t,contentClass:"".concat(j," ").concat(C),content:T,font:n,ThemeRule:n,personalization:e,contentTitle:t.contentTitle,readMore:null==n.lineTrim,maxLength:100})]}),N&&l.ZQ?(0,h.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,h.jsx)(b.Z,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,(0,h.jsx)(u,{ownerId:c,mediaType:f,postTime:t.createdAt,author:t.author,network:t.network,font:n,personalization:e,ThemeRule:n})]}),n.socialAction&&!(0,i.mD)(52)?(0,h.jsx)(g.Z,{itemData:t,ThemeRule:n,ThemeID:e.widgetTheme,actionClass:"tb_rc_social_action__ ".concat(l.ZQ?"tb_rc_social_action_bg":"")}):null]})})})}}const f=v;var k=s(11225);s(59169);class j extends n.Component{constructor(t){super(t),this.state={windowWidth:document.getElementById(i.u$)&&document.getElementById(i.u$).clientWidth?document.getElementById(i.u$).clientWidth:window.innerWidth},this.onScreenLoad=()=>{const{renderId:t}=this.props.renderId;this.setState({windowWidth:t?document.getElementById(t).clientWidth:document.getElementById(i.u$)&&document.getElementById(i.u$).clientWidth?document.getElementById(i.u$).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:t,wall:e,preRender:s,hasMoreData:n}=this.props;n&&(0,k.Sx)(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,s,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let t=document.querySelector(".splide__list"),e=document.querySelector(".splide__slide").offsetWidth;const s=document.querySelectorAll(".splide__slide.is-visible").length,n=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),r=Number(n)+(s-1)+s;r>0?(t.style.transition="0s ease",t.style.transform="translateX(-".concat(r*e,"px)")):t.style.transform="translateX(0px)"}),200)},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach((t=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;if(t&&1==t.length){let s=document.querySelector(".tb_rc_arrow_left__"),n=document.querySelector(".tb_rc_arrow_right__");function r(){setTimeout((()=>{let t=document.querySelector(".splide__list");null!=t&&(t.style.transform="translateX(0)")}),100)}s&&n&&(document.querySelector(".tb_rc_arrow_left__").style="display:none",document.querySelector(".tb_rc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){r()})),r(),window.addEventListener("resize",r)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let e=document.querySelector("#kt_aside_toggle");null!=e&&e.addEventListener("click",this.reScrolled)}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:s,onClickPopUpSlider:n,parentID:r}=this.props;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map(((t,a)=>{if(t.classList){const a=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var o=a[0];String(a[0]).includes("tb_")&&(o=String(a[0]).replace("tb_",""));const i=e.findIndex((t=>t==o));let l=document.querySelectorAll(".tb_rc_post_container #".concat(t.id));for(let t=0;t<l.length;t++){let e=l[t],a=e.getAttribute("p_id");String(r)===String(a)&&e.addEventListener("click",(t=>{t.preventDefault();const e=s[o];n(i,e)}))}}}))}}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:n,hasMoreData:a,onClickToCTA:i,parentID:c}=this.props,d=c,{windowWidth:_}=this.state,u=s.ThemeRule.numberOfCoumn,m=s.ThemeRule.mobileColumn,p=s.ThemeRule.slidePost,b=s.ThemeRule.slideDuration,w=s.Personalization.autoScrollStatus,g=1===s.Personalization.trimcontent,x=!!(_<768||r.tq),v=t&&t.length?x?1:t.length>3?3:t.length:3,k=t&&t.length?x?1:t.length>3?3:t.length:3;x||1===w||t.length;const j=l.ZQ?3:5,C={role:"article",label:"social widget",rewind:!0,speed:1e3,loop:!0,interval:1===p?1e3*b:5e3,perPage:u>0?u:x?1:t.length>j?j:t.length,gap:0,perMove:!!l.ZQ&&1,autoplay:1===p,padding:"0",pagination:!1,arrows:!!x||t.length>(u>0?u:k),fixedHeight:g,breakpoints:{560:{perPage:m>0?m:1,perMove:m>0?m:1,arrows:t.length>(m>0?m:1)},767:{perPage:u>0?u-3<1?u:u-3:v,arrows:t.length>(u>0?u-3<1?u:u-3:v)},991:{perPage:u>0?u-4<1?u:u-4:v,arrows:t.length>(u>0?u-4<1?u:u-4:v)},1200:{perPage:u>0?u-1==0?u:u-1:v,arrows:t.length>(u>0?u-1==0?u:u-1:v)},1600:{perPage:u>0?u:k,arrows:t.length>(u>0?u:k)}}};return(0,h.jsx)(h.Fragment,{children:""!=c?(0,h.jsx)("div",{className:"tb_rc_post_container",ref:this.sliderHeight,children:(0,h.jsxs)(o.tv,{hasTrack:!1,className:"tb_rc_post_slider ".concat(g?"tb_rc_fixed_height":""),options:C,ref:t=>this.inputRefs[d]=t,children:[(0,h.jsx)(o.Gj,{children:t&&t.length>0&&t.map(((t,r)=>{const a=e[t];return(0,h.jsx)(o.jw,{p_id:c,className:"tb_".concat(a.id),children:(0,h.jsx)(f,{ownerId:s.Wall.owner,itemData:a,itemIndex:r,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:n,wallID:s.Wall.id,onClickToCTA:i,wall:s})},r)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_rc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--prev tb_rc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--next tb_rc_arrow_right__ tb__icon tb-arrow-right-alt",onClick:void 0!=a?this.requestData:null,"aria-labelledby":"Navigation Next Slide",children:" "})]})]})}):null})}}const C=(0,n.memo)((0,a.$j)((t=>({})),(t=>({getDataNextSteps:(e,s,n,r,a,o,i,l)=>t((0,k.Sx)(e,s,n,r,a,o,i,l))})))(j))},59169:()=>{},50247:()=>{}}]);
//# sourceMappingURL=1008.dc54fd5a.chunk.js.map