"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8541],{16243:(t,e,a)=>{a.d(e,{Z:()=>o});var s=a(72791),i=a(80184);class l extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:l}=this.props,o=!(!a||1!==a.status);return(0,i.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(l),window.open("".concat(o?a.url:t.url),"_blank")},children:[" ",o?a.text:t.text]})}}const o=l},49899:(t,e,a)=>{a.r(e),a.d(e,{default:()=>b});var s=a(72791),i=a(46535),l=a(77581),o=a(48282),r=a(11225),n=a(98529),c=a(40115),d=a(80184);const p=t=>{let{itemData:e,wallID:a,themeID:s,ownerId:l,ThemeRule:o}=t;const r=(3===e.type||5===e.type)&&!!i.ZQ,n=!!(e.imageList&&e.imageList.length>0)&&!!i.ZQ,p=(e.imageList&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_ht_multi_images_ico_bottom":"tb_ht_multi_images_ico",_=1===e.isAudio&&!!i.ZQ,h=i.ZQ&&o.aspectImageRatio?o.aspectImageRatio:100;return(0,d.jsxs)("div",{className:"tb_ht_media_wrap",children:[n?(0,d.jsx)("div",{className:"".concat(p," tb__icon tb-multiple"),children:" "}):"",_?(0,d.jsx)("div",{className:"tb_ht_audio_ico tb__icon tb-audio",children:(0,d.jsx)("div",{})}):null,r?(0,d.jsx)("div",{className:"tb_ht_video_ico tb__icon tb-play",children:(0,d.jsx)("div",{})}):null,(0,d.jsx)(c.Z,{ImageClass:"tb_ht_image",data:e,wallID:a,themeID:s,ownerId:l,size:h})]})};var _=a(70757),h=a(16243);const u=t=>{let{itemData:e,personalization:a,ThemeRule:s,wallID:l,ownerId:o,onClickToCTA:r,clickToShowPopUp:n,itemIndex:c,adjustWidth:u}=t;const m={backgroundColor:i.ZQ?"rgba(0,0,0,.3)":s.cardColor},b={padding:a.padding/2},g=2===e.type||3===e.type||4===e.type||5===e.type,w=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status)&&!!i.ZQ,v=i.ZQ?null:"50%";return(0,d.jsx)("div",{id:"tb-ht-post-".concat(e.id),className:"tb_ht_post_wrapper",style:b,"tb-network":e.network.id,children:(0,d.jsx)("div",{className:"tb_ht_post_in ".concat(i.ZQ?"tb_ht_post_animate":""),onClick:n(c,e),style:{borderRadius:v},children:(0,d.jsxs)("div",{className:"tb_ht_post_media_wrapp",children:[g?(0,d.jsx)(p,{itemData:e,wallID:l,themeID:a.widgetTheme,ownerId:o,ThemeRule:s}):"",(0,d.jsxs)("div",{className:"tb_ht_post_details",children:[(0,d.jsx)("div",{className:"tb_ht_social_",children:(0,d.jsx)(_.default,{networkClass:"tb_ht_social_ico_",network:e.network,ThemeRule:s,isDefault:1===s.iconType})}),w?(0,d.jsxs)("div",{className:"tb_ht_post_cta",onClick:t=>{t.stopPropagation()},children:[(0,d.jsx)(h.Z,{ctaClass:"tb_ht_post_cta_btn",cta:e.cta,item:e,onClickToCTA:r})," "]}):""]}),(0,d.jsx)("div",{className:"tb_ht_post_overlay",style:m,children:(0,d.jsx)("div",{})})]})})})};a(59169);class m extends s.Component{constructor(t){super(t),this.requestData=()=>{const{appendData:t,wall:e,preRender:a,hasMoreData:s,getDataNextSteps:i}=this.props;s&&i(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,a,t.heightEvent)},this.onUpdateData=t=>{},this.autoScrollSlider=(t,e,a,s)=>{const l=i.ZQ?t._o.perPage+t.index:t.index;t.length-l===(i.ZQ?1:t._o.perPage)&&this.requestData()},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:a,onClickPopUpSlider:s,wall:i,parentID:l}=this.props,o=i.ThemeRule.multiRow;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map(((t,i)=>{if(t.classList){const i=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var o=i[0];String(i[0]).includes("tb_")&&(o=String(i[0]).replace("tb_",""));const r=e.findIndex((t=>t==o));let n=document.querySelectorAll("#".concat(t.id));for(let t=0;t<n.length;t++){let e=n[t],i=e.getAttribute("p_id");String(l)===String(i)&&e.addEventListener("click",(t=>{t.preventDefault();const e=a[o];s(r,e)}))}}}))}else if(2==o){Object.values(t)[5].map(((t,i)=>{t&&t.childNodes.length>0&&t.childNodes.forEach((t=>{t&&t.childNodes.length>0&&t.childNodes.forEach((t=>{if(t.classList){const o=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var i=o[0];String(o[0]).includes("tb_")&&(i=String(o[0]).replace("tb_",""));const r=e.findIndex((t=>t==i));let n=document.querySelectorAll(".tb_hs_post_container #".concat(t.id));for(let t=0;t<n.length;t++){let e=n[t],o=e.getAttribute("p_id");String(l)===String(o)&&e.addEventListener("click",(t=>{t.preventDefault();const e=a[i];s(r,e)}))}}}))}))}))}}render(){const{postData:t,completeDataObject:e,wall:a,clickToShowPopUp:s,onClickToCTA:l,parentID:r,adjustWidth:c}=this.props,p=r,_=a.ThemeRule.numberOfCoumn,h=a.ThemeRule.mobileColumn,m=a.ThemeRule.slidePost,b=a.ThemeRule.slideDuration,g=a.Personalization.autoScrollStatus,w={grid:{rows:i.ZQ?a.ThemeRule.multiRow:1},type:1!==g&&"loop",rewind:!1,rewindSpeed:1e3,interval:1===m&&parseInt(b)>0?1e3*parseInt(b):5e3,perPage:_>0?_:5,perMove:1,gap:0,autoplay:1===m,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:h>0?h:1},767:{perPage:h>0?h:2},991:{perPage:h>0?h:3},1200:{perPage:_>0?_:4},1400:{perPage:_>0?_:5},1600:{perPage:_>0?_:6}}};return""!=r?(0,d.jsx)("div",{className:"tb_ht_post_container",children:(0,d.jsxs)(o.tv,{hasTrack:!1,className:"tb_ht_post_slider",options:w,extensions:{Grid:n.r},ref:t=>this.inputRefs[p]=t,onMove:this.autoScrollSlider,children:[(0,d.jsx)(o.Gj,{children:(a.ThemeRule.multiRow>1&&1!==t.length&&t.length%2!==0?t.pop():t)&&t&&t.length>0&&t.map(((t,i)=>{const n=e[t];return(0,d.jsx)(o.jw,{style:{margin:0,padding:0},className:"tb_".concat(n.id),p_id:r,children:(0,d.jsx)(u,{itemData:n,itemIndex:i,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:s,wallID:a.Wall.id,onClickToCTA:l,adjustWidth:c})},i)}))}),(0,d.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_ht_arrow_wrapper_",children:[(0,d.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--prev tb_ht_arrow tb_ht_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,d.jsx)("div",{})}),(0,d.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--next  tb_ht_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,d.jsx)("div",{})})]})]})}):null}}const b=(0,s.memo)((0,l.$j)((t=>({})),(t=>({getDataNextSteps:(e,a,s,i,l,o,n,c)=>t((0,r.Sx)(e,a,s,i,l,o,n,c))})))(m))}}]);
//# sourceMappingURL=8541.1ab164be.chunk.js.map