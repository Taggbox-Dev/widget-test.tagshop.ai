(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1535],{20169:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var s=a(72791),o=a(11225),n=a(46535),i=a(80184);class r extends s.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:a,wallID:s,ownerId:i}=this.props;t.stopPropagation(),n.ZQ||(0,o.S5)({type:2,action:2,wall:s,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:i}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,i.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,i.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(n.ZQ?"tb-share-fill":"tb-share"),children:(0,i.jsx)("div",{})}),(0,i.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,i.jsx)("div",{})})}):"",e.twitter?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,i.jsx)("div",{})})}):"",e.linkedin?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,i.jsx)("div",{})})}):""]})]})}}},30182:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>j});var s=a(72791),o=a(39852),n=a.n(o),i=a(97234),r=a(27668),l=a(80184);const c=e=>{let{author:t,personalization:a,postTime:s,network:o,ThemeRule:n,ownerId:c}=e;const d=t.username&&t.username.length>0?"@".concat(t.username):"",p={color:n.authorColor,fontFamily:n.css_font},h={backgroundColor:n.authorColor},_=!(!a.postAuthor||t.isInstaUser),u=!(!a.postAuthor||!a.postTime||t.isInstaUser);return(0,l.jsx)("div",{className:"tb_gp_author_wrapper",children:(0,l.jsxs)("div",{className:"tb_gp_author",children:[_?(0,l.jsx)(i.default,{author:t,authorClass:"tb_gp_author_profile",network:o}):"",(0,l.jsxs)("div",{className:"tb_gp_author_info",children:[_?(0,l.jsx)("div",{className:"tb_gp_authorname",style:p,children:t.name}):"",(0,l.jsxs)("div",{className:"tb_gp_post_info".concat(u?"":" tb_gp_post_info__"),children:[_?(0,l.jsx)("div",{className:"tb_gp_username",style:p,children:d}):"",u?(0,l.jsx)("div",{className:"tb_gp_seprator",style:h,children:" "}):"",a.postTime?(0,l.jsx)(r.default,{postTime:s,timeClass:"tb_gp_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor,authorNameStyle:p}):""]})]})]})})};var d=a(20169),p=a(40115),h=a(37989);class _ extends s.PureComponent{render(){const{itemData:e,wallID:t,themeID:a,ownerId:s}=this.props;return(0,l.jsxs)("div",{className:"tb_gp_media_wrap",children:[(0,l.jsx)(h.Z,{itemData:e,IconClass:"tb_gp_media_icon",position:1}),(0,l.jsx)(p.Z,{ImageClass:"tb_gp_image",data:e,wallID:t,themeID:a,ownerId:s,size:100})]})}}var u=a(23450),m=a(70757),b=a(2703),w=a(46535);class g extends s.PureComponent{constructor(e){super(e),this.cardSize=s.createRef()}componentDidMount(){const e=document.querySelector(".tb_gp_post_container");setTimeout((()=>{this.cardSize.current.offsetWidth<250&&e.classList.add("tb_gp_post_wrapper2x"),this.cardSize.current.offsetWidth<120&&e.classList.add("tb_gp_post_wrapper1x"),w.nX&&(0,b.YN)(this.cardSize)}),100)}render(){const{itemData:e,personalization:t,adjustWidth:a,ThemeRule:s,clickToShowPopUp:o,itemIndex:n,wallID:i,ownerId:r,onClickToCTA:p}=this.props,h={backgroundColor:w.ZQ?null:s.cardColor},b={width:"".concat(a,"%"),padding:t.padding/2},g={backgroundColor:s.cardColor,borderRadius:s.radius},f=2===e.type||3===e.type||4===e.type||5===e.type,x=7===e.network.id;return(0,l.jsx)("div",{id:"tb-gp-post-".concat(e.id),"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,className:"tb_gp_post_wrapper ".concat(w.ZQ?"tb_gp_post_wrapper_te":""),style:b,"tb-network":e.network.id,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(n)+1,",").concat(e.content),ref:this.cardSize,children:(0,l.jsx)("div",{className:"tb_gp_post_in",style:g,onClick:o(n,e),children:(0,l.jsxs)("div",{className:"tb_gp_post_media_wrapp",children:[e.share.status?(0,l.jsx)(d.Z,{share:e.share,shareClass:"tb_gp_share_container",item:e,wallID:i,ownerId:r}):null,f?(0,l.jsx)(_,{itemData:e,wallID:i,themeID:t.widgetTheme,ownerId:r},"img_gly_".concat(e.id)):"",w.ZQ||!x?(0,l.jsx)("div",{className:"tb_gp_contant_".concat(w.ZQ?" tb_gp_hover_content_":""),children:(0,l.jsxs)("div",{className:"tb_gp_contant__in",children:[(0,l.jsxs)("div",{className:"tb_gp_content__",children:[(0,l.jsx)(c,{adjustWidth:a,postTime:e.createdAt,network:e.network,ownerId:r,author:e.author,font:s,personalization:t,ThemeRule:s}),s.hideContent&&1!=e.type?"":(0,l.jsx)(u.default,{item:e,contentClass:"tb_gp_content",content:e.content,font:s,ThemeRule:s,personalization:t,contentTitle:e.contentTitle})]}),(0,l.jsx)("div",{className:"tb_gp_post_overlay",style:h,children:(0,l.jsx)("div",{})})]})}):"",(0,l.jsx)("div",{className:"tb_gp_social_",children:w.ZQ||!x?(0,l.jsx)(m.default,{networkClass:"tb_gp_social__ico",network:e.network,isDefault:1===s.iconType,ThemeRule:s}):""})]})})})}}var f=a(77581),x=a(11225);class I extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth,containerWidth:0,loadData:0},this.onLoadMasonry=()=>{var e=document.querySelector(".tb_gp_post_container");if(e){const t=e.style.height;if(t){const e=t.split("px");e&&JSON.stringify(e)&&e[0]>0&&this.props.managePostHeight("".concat(t))}}},this.calculationData=(e,t,a,s)=>e>s&&e>s+a?{totalPostBestFit:s+a,isLastRow:!0}:{totalPostBestFit:s,isLastRow:!1}}componentDidMount(){const{postData:e,renderId:t}=this.props;setTimeout((()=>this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))),100),t.renderId&&this.setState({windowWidth:document.getElementById(t.renderId).clientWidth})}componentWillReceiveProps(e){const{postData:t}=e;this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:e,completeDataObject:t,adjustWidth:a,wall:s,clickToShowPopUp:o,cardNumber:i,onClickToCTA:r}=this.props,{windowWidth:c,loadData:d}=this.state;var p={totalPostBestFit:0,isLastRow:!1};let h=0===s.ThemeRule.numberOfCoumn?Math.trunc(i)>5?5:Math.trunc(i):s.ThemeRule.numberOfCoumn;if(e.length>parseInt(i)){let t=parseInt(i);4===h?t=9:2===h?t=3:3===h?t=6:5===h&&(t=12),c<768&&(t=parseInt(i));let a=e.length/parseInt(t);p=parseInt(t)*parseInt(a),p=this.calculationData(e.length,t,h,p)}let _=0===s.ThemeRule.numberOfCoumn?Math.trunc(i)>5?5:Math.trunc(i)+1:s.ThemeRule.numberOfCoumn+1;return(0,l.jsx)(n(),{className:"tb_gp_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_gp_post_wrapper",resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:d?e&&e.length>0&&e.map(((e,n)=>{const i=t[e];let c=a;if(3===h&&_===n+1){c=2*a,_=_+2*h}else if(2===h&&_===n+1){c=2*a,_=_+(h+1)}else if(4===h&&_===n+1){c=2*a,_=_+(2*h+1)}else if(5===h&&_===n+1){c=2*a,_=_+(2*h+2)}return parseInt(p.totalPostBestFit)>=parseInt(n+1)?(0,l.jsx)(g,{ownerId:s.Wall.owner,itemData:i,itemIndex:n,adjustWidth:c,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:o,wallID:s.Wall.id,onClickToCTA:r},n):0===parseInt(p.totalPostBestFit)?(0,l.jsx)(g,{ownerId:s.Wall.owner,itemData:i,itemIndex:n,adjustWidth:c,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:o,wallID:s.Wall.id,onClickToCTA:r},"galry_".concat(i.id)):null})):null})}}const j=(0,f.$j)((e=>({})),(e=>({managePostHeight:t=>e((0,x.B0)(t))})))(I)},80888:(e,t,a)=>{"use strict";var s=a(79047);function o(){}function n(){}n.resetWarningCache=o,e.exports=function(){function e(e,t,a,o,n,i){if(i!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:o};return a.PropTypes=a,a}},52007:(e,t,a)=>{e.exports=a(80888)()},79047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=1535.1dcc59aa.chunk.js.map