"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[748],{90748:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x,getPostWidth:()=>w});var l=s(72791),a=s(2703),i=s(46535),n=s(20169),o=s(70757),c=s(20672),r=s(80184);const d=l.lazy((()=>Promise.all([s.e(8947),s.e(6425)]).then(s.bind(s,16425)))),h=i.ZQ?null:200,p=e=>{let{itemData:t,personalization:s,adjustWidth:p,ThemeRule:_,clickToShowPopUp:m,itemIndex:u,wallID:w,ownerId:b,postSizeInPx:x,wall:g,onClickPopUpSlider:j}=e;const v=(0,l.useRef)(null),k=2===t.type||3===t.type||4===t.type||5===t.type,f=s.trimcontent?(0,a.Sv)(t.content,h):t.content,I=x.adjustWidth<250;(0,l.useEffect)((()=>{i.nX&&(0,a.YN)(v)}),[]);const C=!!(t.hotspot&&t.ugc_products.length>0),D=!!(i.ig&&!t.hotspot&&t.ugc_products.length>0),T=i.ig&&1==_.postHover?" tb_ct_post_overlay-dark":" tb_ct_post_overlay-light";return(0,l.useEffect)((()=>{t.isPopUp&&j(u,t)}),[u,t.isPopUp,t]),(0,r.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_ct_post_wrapper".concat(I?" tb_ct_post_wrapper2x":""),style:{width:"".concat(p,"%"),padding:s.padding/2,float:"left"},"tb-network":t.network.id,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(u)+1,",").concat(f),ref:v,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,r.jsx)("div",{className:"tb_ct_post_in",onClick:m(u,t),children:(0,r.jsxs)("div",{className:"tb_ct_post_media_wrapp",children:[t.share.status&&!i.ig?(0,r.jsx)(n.Z,{share:t.share,shareClass:"tb_ct_share_container",item:t,wallID:w,ownerId:b}):"",k?(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(d,{itemData:t,wallID:w,ownerId:b,ThemeID:s.widgetTheme,wall:g},"img".concat(u,"_").concat(t.id))}):"",C?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"tb_ct_post_details",children:i.ig?(0,r.jsxs)("div",{className:"tb_ct_social_",children:[(0,r.jsx)(o.default,{networkClass:"tb_ct_social__ico",network:t.network,isDefault:1===_.iconType,ThemeRule:_,Personalization:s}),D?(0,r.jsx)(c.Z,{ThemeRule:_,btnClass:"tb_ct_btn_wrap"}):null]}):null}),(0,r.jsx)("div",{className:"tb_ct_post_overlay".concat(T),style:{backgroundColor:i.Jx?_.cardColor:null},children:(0,r.jsx)("div",{})})]})]})})})};var _=s(77581),m=s(11225);const u=e=>{let{wall:t,largeDiv:s,smallDiv:l,itemData:a,completeDataObject:i,parentID:n,itemIndex:o,clickToShowPopUp:c,onClickToCTA:d,postSizeInPx:h,adjustWidth:_,onClickPopUpSlider:m}=e;const u=t.ThemeRule.highlightPosition,w=o%2,b={width:s+"%",float:"0"==w?"right"==u?"right":"left":"right"==u?"left":"right"},x={width:l+"%",float:"right"==u?"left":"right"};return a&&a.length>0?(0,r.jsxs)("div",{className:"ts_cs_post_row",style:{width:"100%"},children:[(0,r.jsx)("div",{className:"ts_cs_post_large",style:b,children:(0,r.jsx)(p,{ownerId:t.Wall.owner,itemData:i[a[0]],itemIndex:o,adjustWidth:100,personalization:t.Personalization,ThemeRule:t.ThemeRule,wallID:t.Wall.id,clickToShowPopUp:c,onClickToCTA:d,postSizeInPx:h,wall:t,completeDataObject:i,onClickPopUpSlider:m},"sqr_crd_".concat(0,"_",i[a[0]].id))}),(0,r.jsxs)("div",{className:"ts_cs_post_small",style:x,children:[a&&a.length>0?a.map(((e,s)=>{const l=i[e];return 0!=s?(0,r.jsx)(p,{ownerId:t.Wall.owner,itemData:l,itemIndex:s,adjustWidth:_,personalization:t.Personalization,ThemeRule:t.ThemeRule,wallID:t.Wall.id,clickToShowPopUp:c,onClickToCTA:d,postSizeInPx:h,wall:t,completeDataObject:i,onClickPopUpSlider:m},"sqr_crd_".concat(s,"_").concat(e.id)):null})):null," "]})]}):null},w=(e,t)=>{const s=(e,t)=>({cardWidth:t,largeDiv:2*e,smallDiv:100-2*e});switch(t){case 3:return s(100/3,100);case 5:return s(e>767?25:100/3,e>767?50:100);case 7:return s(e>767?20:100/3,e>767?100/3:100);case 9:return s(e>767?100/6:100/3,e>767?25:100);default:return s(e<767?100/3:100,100)}};class b extends l.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth}}componentDidMount(){const{renderId:e}=this.props;e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}render(){const{postData:e,completeDataObject:t,adjustWidth:s,wall:l,clickToShowPopUp:a,cardNumber:i,onClickToCTA:n,postSizeInPx:o,onClickPopUpSlider:c}=this.props,{windowWidth:d}=this.state;let h=e.length;if(l&&1==l.Personalization.fitRow&&e.length>=parseInt(i)){let t=e.length/parseInt(i);h=parseInt(i)*parseInt(t)}var p="";const _=l.ThemeRule.numberOfCoumn,{cardWidth:m,largeDiv:b,smallDiv:x}=w(d,_);p=d<768?3:_||1;for(var g=0,j=e.length,v=[];g<j;)v.push(e.slice(g,g+=p));var k=d<768?"3":_;return(0,r.jsx)("div",{tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",className:"tb_ct_post_container",children:v&&v.length>0&&v.map(((e,s)=>e.length==k?(0,r.jsx)(u,{ownerId:l.Wall.owner,itemData:e,itemIndex:s,adjustWidth:m,personalization:l.Personalization,ThemeRule:l.ThemeRule,wallID:l.Wall.id,clickToShowPopUp:a,onClickToCTA:n,postSizeInPx:o,wall:l,completeDataObject:t,largeDiv:b,smallDiv:x,onClickPopUpSlider:c},"sqr_crd_".concat(s,"_").concat(e.id)):null))})}}const x=(0,_.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,m.B0)(t))})))(b)},70757:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var l=s(72791),a=s(46535),i=s(2703),n=s(80184);const o=l.lazy((()=>s.e(1088).then(s.bind(s,41088))));class c extends l.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:c,Personalization:r}=this.props,d=!!c&&(7!==e.id&&4!==e.id&&36!==e.id),h=a.ZQ&&36==e.id?"tagembed":e.icon;[61,16,53,4,50,55].includes(parseInt(null===r||void 0===r?void 0:r.widgetTheme));const p=(0,i.mD)(59)?null:a.ig?(0,i.uu)(s.iconColor,s.cardColor):s.iconColor;return d?(0,n.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(h.replace(/fa-/g,"")),style:{color:p},children:(0,n.jsx)("div",{})}):(0,n.jsxs)(l.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(o,{network:e,networkClass:t})]})}}},20169:(e,t,s)=>{s.d(t,{Z:()=>o});var l=s(72791),a=s(11225),i=s(46535),n=s(80184);class o extends l.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:l,ownerId:n}=this.props;t.stopPropagation(),i.ZQ||(0,a.S5)({type:2,action:2,wall:l,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",e.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",e.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},20672:(e,t,s)=>{s.d(t,{Z:()=>i});var l=s(2703),a=s(80184);const i=e=>{let{ThemeRule:t,btnClass:s}=e;const i={fontFamily:t.css_font};return(0,a.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,a.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,l.mD)(4)||(0,l.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:i,children:t.shoppingText})})}}}]);
//# sourceMappingURL=748.2ffdc740.chunk.js.map