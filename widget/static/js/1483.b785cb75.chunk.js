"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1483],{43702:(e,t,n)=>{n.d(t,{A:()=>p});var i=n(65043),r=Object.defineProperty,s=(e,t,n)=>((e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),o=new Map,l=new WeakMap,a=0,d=void 0;function c(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(l.has(n)||(a+=1,l.set(n,a.toString())),l.get(n)):"0"):e[t]}`;var n})).toString()}function u(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==i){const r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:s,elements:l}=function(e){const t=c(e);let n=o.get(t);if(!n){const i=new Map;let r;const s=new IntersectionObserver((t=>{t.forEach((t=>{var n;const s=t.isIntersecting&&r.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=s),null==(n=i.get(t.target))||n.forEach((e=>{e(s,t)}))}))}),e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},o.set(t,n)}return n}(n),a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(l.delete(e),s.unobserve(e)),0===l.size&&(s.disconnect(),o.delete(r))}}i.Component;var h=n(22030);const p=e=>{let{children:t}=e;const{ref:n,inView:r,entry:s}=function(){let{threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:s,triggerOnce:o,skip:l,initialInView:a,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var h;const[p,b]=i.useState(null),g=i.useRef(c),[v,f]=i.useState({inView:!!a,entry:void 0});g.current=c,i.useEffect((()=>{if(l||!p)return;let i;return i=u(p,((e,t)=>{f({inView:e,entry:t}),g.current&&g.current(e,t),t.isIntersecting&&o&&i&&(i(),i=void 0)}),{root:s,rootMargin:r,threshold:e,trackVisibility:n,delay:t},d),()=>{i&&i()}}),[Array.isArray(e)?e.toString():e,p,s,r,o,l,n,d,t]);const y=null==(h=v.entry)?void 0:h.target,_=i.useRef(void 0);p||!y||o||l||_.current===y||(_.current=y,f({inView:!!a,entry:void 0}));const x=[b,v.inView,v.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}({triggerOnce:!0,threshold:.01});return r&&(0,h._7)(s),t({ref:n,inView:r})}},81483:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var i=n(65043),r=n(22030),s=n(92908),o=n(43702),l=n(70579);const a=(0,i.lazy)((()=>Promise.all([n.e(9532),n.e(1043),n.e(1885)]).then(n.bind(n,11417)))),d=(0,i.lazy)((()=>n.e(7002).then(n.bind(n,77002)))),c=(0,i.lazy)((()=>n.e(7789).then(n.bind(n,90170)))),u=(0,i.lazy)((()=>n.e(4961).then(n.bind(n,44961)))),h=(0,i.lazy)((()=>Promise.all([n.e(229),n.e(9410)]).then(n.bind(n,89410)))),p=e=>{var t,n;let{CardStyle:p,clickToShowPopUp:b,index:g,ThemeStyle:v,Post:f,postSizeInPx:y,ProductSetting:_,onClickPopUpSlider:x}=e;const m=1!==(null===f||void 0===f?void 0:f.type),w=null!==p&&void 0!==p&&p.content.trimcontent?(0,r.Ex)(null===f||void 0===f||null===(t=f.content)||void 0===t?void 0:t.text,200):null===f||void 0===f||null===(n=f.content)||void 0===n?void 0:n.text,j=y<250;return(0,i.useEffect)((()=>{null!==f&&void 0!==f&&f.isPopUp&&x(g,f)}),[g,null===f||void 0===f?void 0:f.isPopUp,f]),(0,l.jsx)(o.A,{children:e=>{let{ref:t,inView:n}=e;return f&&(0,l.jsx)("div",{id:`tb-gt-post-${f.id}`,className:"tb_gt_post_wrapper"+(j?" tb_gt_post_wrapper2x":""),"tb-network":f.networkId,"tb-product":""!=p.shopText&&f.isShopIcon?1:f.isHotspot?2:0,style:{opacity:n?1:0,transition:n?"opacity .7s ease-in-out":""},"post-id":f.referenceId?f.referenceId:f.id,"feed-id":f.feedId,ref:t,children:(0,l.jsxs)("div",{className:"tb_gt_post_in"+(s.HY?" tb_gt_post_ani":""),onClick:b(g,f),role:"article","aria-label":w,tabIndex:0,children:[m?(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(a,{ProductSetting:_,Post:f,CardStyle:p,ThemeStyle:v,index:g,inView:n})}):"",f.isHotspot?null:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"tb_gt_post_details","aria-hidden":"true",children:[s.HY?(0,l.jsx)("div",{className:"tb_gt_social_",role:"presentation",children:(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(u,{networkClass:"tb_gt_social__ico",networkId:f.networkId,iconStyle:p.icon})})}):null,f.isShopIcon&&""!=p.shopText?(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{ThemeStyle:v,CardStyle:p,mode:1,btnClass:"tb_gt_btn_wrap"})}):null,s.HY?null:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"tb_gt_contant_wrapper",children:p.content.status&&1!=f.type?"":(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(h,{contentClass:"tb_gt_content",item:f,content:w,CardStyle:p,contentTitle:f.contentTitle})})}),(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(d,{Post:f,CardStyle:p})})]})]}),(0,l.jsx)("div",{className:"tb_gt_post_overlay tb_gt_post_overlay-dark",children:(0,l.jsx)("div",{})})]})]})})}})}}}]);
//# sourceMappingURL=1483.b785cb75.chunk.js.map