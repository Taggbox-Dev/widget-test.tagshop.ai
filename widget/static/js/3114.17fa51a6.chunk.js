"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3114],{16243:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(72791),l=s(80184);class o extends a.PureComponent{render(){const{cta:e,ctaClass:t,postCta:s,onClickToCTA:a,item:o}=this.props,i=!(!s||1!==s.status);return(0,l.jsxs)("div",{className:t,style:{},onClick:t=>{t.stopPropagation(),a(o),window.open("".concat(i?s.url:e.url),"_blank")},children:[" ",i?s.text:e.text]})}}const i=o},49899:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var a=s(72791),l=s(46535),o=s(77581),i=s(48282),r=s(11225),n=s(98529),c=s(40115),d=s(80184);const p=e=>{let{itemData:t,wallID:s,themeID:a,ownerId:l,ThemeRule:o}=e;return(0,d.jsx)("div",{className:"tb_ht_media_wrap",children:(0,d.jsx)(c.Z,{ImageClass:"tb_ht_image",data:t,wallID:s,themeID:a,ownerId:l,size:100,hotspot:!1})})};var h=s(70757),_=s(20672),u=s(16243);const m=e=>{let{itemData:t,personalization:s,ThemeRule:a,wallID:o,ownerId:i,onClickToCTA:r,clickToShowPopUp:n,itemIndex:c,adjustWidth:m}=e;const b=l.ig||l.ZQ?" tb_ht_post_overlay-dark":" tb_ht_post_overlay-light",g={padding:s.padding/2},w=2===t.type||3===t.type||4===t.type||5===t.type,v=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status)&&!!l.ZQ,x=l.ZQ?null:"50%",j=!!(l.ig&&t.ugc_products.length>0);return(0,d.jsx)("div",{id:"tb-ht-post-".concat(t.id),className:"tb_ht_post_wrapper",style:g,"tb-network":t.network.id,children:(0,d.jsx)("div",{className:"tb_ht_post_in",onClick:n(c,t),style:{borderRadius:x},children:(0,d.jsxs)("div",{className:"tb_ht_post_media_wrapp",children:[w?(0,d.jsx)(p,{itemData:t,wallID:o,themeID:s.widgetTheme,ownerId:i,ThemeRule:a}):"",(0,d.jsxs)("div",{className:"tb_ht_post_details",children:[(0,d.jsx)("div",{className:"tb_ht_social_",children:(0,d.jsx)(h.default,{networkClass:"tb_ht_social_ico_",network:t.network,ThemeRule:a,isDefault:1===a.iconType})}),j?(0,d.jsx)(_.Z,{ThemeRule:a,btnClass:"tb_ht_btn_wrap"}):null,v?(0,d.jsxs)("div",{className:"tb_ht_post_cta",onClick:e=>{e.stopPropagation()},children:[(0,d.jsx)(u.Z,{ctaClass:"tb_ht_post_cta_btn",cta:t.cta,item:t,onClickToCTA:r})," "]}):""]}),(0,d.jsx)("div",{className:"tb_ht_post_overlay".concat(b),style:{backgroundColor:l.Jx?a.cardColor:null},children:(0,d.jsx)("div",{})})]})})})};s(59169);class b extends a.Component{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:a,getDataNextSteps:l}=this.props;a&&l(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.onUpdateData=e=>{},this.autoScrollSlider=(e,t,s,a)=>{const o=l.ZQ?e._o.perPage+e.index:e.index;e.length-o===(l.ZQ?1:e._o.perPage)&&this.requestData()},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100)}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:s,onClickPopUpSlider:a,wall:l,parentID:o}=this.props,i=l.ThemeRule.multiRow;if(e&&Object.values(e)[5].length>0){Object.values(e)[5].map(((e,l)=>{if(e.classList){const l=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var i=l[0];String(l[0]).includes("tb_")&&(i=String(l[0]).replace("tb_",""));const r=t.findIndex((e=>e==i));let n=document.querySelectorAll("#".concat(e.id));for(let e=0;e<n.length;e++){let t=n[e],l=t.getAttribute("p_id");String(o)===String(l)&&t.addEventListener("click",(e=>{e.preventDefault();const t=s[i];a(r,t)}))}}}))}else if(2==i){Object.values(e)[5].map(((e,l)=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{if(e.classList){const i=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var l=i[0];String(i[0]).includes("tb_")&&(l=String(i[0]).replace("tb_",""));const r=t.findIndex((e=>e==l));let n=document.querySelectorAll(".tb_hs_post_container #".concat(e.id));for(let e=0;e<n.length;e++){let t=n[e],i=t.getAttribute("p_id");String(o)===String(i)&&t.addEventListener("click",(e=>{e.preventDefault();const t=s[l];a(r,t)}))}}}))}))}))}}render(){var e;const{postData:t,completeDataObject:s,wall:a,clickToShowPopUp:o,onClickToCTA:r,parentID:c,adjustWidth:p}=this.props,h=c,_=a.ThemeRule.numberOfCoumn,u=a.ThemeRule.mobileColumn,b=a.ThemeRule.slidePost,g=a.ThemeRule.slideDuration,w=a.Personalization.autoScrollStatus,v=l.ZQ?a.ThemeRule.multiRow:1,x=l.ZQ&&void 0!==(null===(e=a.Personalization)||void 0===e?void 0:e.clonePost)&&0===a.Personalization.clonePost?{clones:0}:{},j=1!=w?!(Object.keys(x).length>0)&&"loop":"loop",D={...x,grid:{rows:v},type:1!==w&&j,rewind:!1,rewindSpeed:1e3,interval:1===b&&parseInt(g)>0?1e3*parseInt(g):5e3,perPage:_>0?_:5,perMove:1,gap:0,autoplay:1===b,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:u>0?u:1},767:{perPage:u>0?u:2},991:{perPage:u>0?u:3},1200:{perPage:_>0?_:4},1400:{perPage:_>0?_:5},1600:{perPage:_>0?_:6}}};return""!=c?(0,d.jsx)("div",{className:"tb_ht_post_container",children:(0,d.jsxs)(i.tv,{hasTrack:!1,className:"tb_ht_post_slider",options:D,extensions:{Grid:n.r},ref:e=>this.inputRefs[h]=e,onMove:this.autoScrollSlider,children:[(0,d.jsx)(i.Gj,{children:(a.ThemeRule.multiRow>1&&1!==t.length&&t.length%2!==0?t.pop():t)&&t&&t.length>0&&t.map(((e,t)=>{const l=s[e];return(0,d.jsx)(i.jw,{style:{margin:0,padding:0},className:"tb_".concat(l.id),p_id:c,children:(0,d.jsx)(m,{itemData:l,itemIndex:t,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:o,wallID:a.Wall.id,onClickToCTA:r,adjustWidth:p})},t)}))}),(0,d.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_ht_arrow_wrapper_",children:[(0,d.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--prev tb_ht_arrow tb_ht_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,d.jsx)("div",{})}),(0,d.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--next  tb_ht_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,d.jsx)("div",{})})]})]})}):null}}const g=(0,a.memo)((0,o.$j)((e=>({})),(e=>({getDataNextSteps:(t,s,a,l,o,i,n,c)=>e((0,r.Sx)(t,s,a,l,o,i,n,c))})))(b))}}]);
//# sourceMappingURL=3114.17fa51a6.chunk.js.map