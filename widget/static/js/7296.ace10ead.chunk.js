"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7296],{27296:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var s=n(47313),l=n(17739),a=n(35179),o=n(46417);const i=(0,s.lazy)((()=>n.e(5652).then(n.bind(n,5652)))),r=(0,s.lazy)((()=>n.e(5323).then(n.bind(n,35323)))),c=(0,s.lazy)((()=>n.e(1502).then(n.bind(n,11502)))),d=(0,s.lazy)((()=>n.e(5810).then(n.bind(n,25810)))),p=(0,s.lazy)((()=>Promise.all([n.e(6390),n.e(8342)]).then(n.bind(n,62245)))),_=a.ZQ?null:200,h=e=>{let{itemData:t,personalization:n,ThemeRule:h,clickToShowPopUp:u,itemIndex:b,wallID:g,ownerId:x,postSizeInPx:m,wall:j,onClickPopUpSlider:w}=e;const f=(0,s.useRef)(null),k=1!==t.type,v=n.trimcontent?(0,l.Sv)(t.content,_):t.content,I=m.adjustWidth<250,T=0==h.postHover&&a.ig?"light":"dark",y=!!(t.hotspot&&t.ugc_products.length>0),z=!!(a.ig&&""!=h.shoppingText&&!t.hotspot&&t.ugc_products.length>0);return(0,s.useEffect)((()=>{a.ig&&(0,l.YN)(f)}),[]),(0,s.useEffect)((()=>{t.isPopUp&&w(b,t)}),[b,t.isPopUp,t]),(0,o.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_gt_post_wrapper".concat(I?" tb_gt_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":z?1:y?2:0,ref:f,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,o.jsx)("div",{className:"tb_gt_post_in".concat(a.ig?" tb_gt_post_ani":""),onClick:u(b,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,o.jsxs)("div",{className:"tb_gt_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[k?(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(r,{itemData:t,wallID:g,wall:j,ownerId:x})}):"",y?null:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"tb_gt_post_details",children:[a.ig?(0,o.jsx)("div",{className:"tb_gt_social_",children:(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(d,{networkClass:"tb_gt_social__ico",network:t.network,isDefault:1===h.iconType,ThemeRule:h,Personalization:n})})}):null,z?(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(c,{ThemeRule:h,btnClass:"tb_gt_btn_wrap"})}):null,a.ig?null:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"tb_gt_contant_wrapper",children:h.hideContent&&1!=t.type?"":(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(p,{contentClass:"tb_gt_content",item:t,content:v,font:h,ThemeRule:h,personalization:n,contentTitle:t.contentTitle})})}),(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(i,{ownerId:x,postTime:t.createdAt,author:t.author,network:t.network,font:h,personalization:n,ThemeRule:h})})]})]}),(0,o.jsx)("div",{className:"tb_gt_post_overlay tb_gt_post_overlay-".concat(T),children:(0,o.jsx)("div",{})})]})]})})})}}}]);