"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[62],{226:(t,s,e)=>{e.d(s,{A:()=>o});var a=e(4638),c=e(579);const o=t=>{let{authorClass:s,author:e,postTime:o}=t;const{name:r,picture:n,username:l,errorPic:d,isInstaUser:i,link:_}=e;return(0,c.jsxs)("a",{href:_,target:"_blank",className:"tb_sob_author ".concat(s),children:[(0,c.jsx)("div",{className:"tb_sob_author_profile",children:(0,c.jsx)("img",{className:"tb_sob_author_profile__",src:n,alt:r,width:"44",height:"44",onError:t=>t.target.src=d})}),(0,c.jsxs)("div",{className:"tb_sob_author_info",children:[(0,c.jsx)("div",{className:"tb_sob_authorname",children:r}),(0,c.jsxs)("div",{className:"tb_sob_post_info",children:[(null===l||void 0===l?void 0:l.length)>0?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"tb_sob_username",children:["@",l]}),(0,c.jsx)("div",{className:"tb_sob_seprator",children:" "})]}):null,(0,c.jsx)("div",{className:"tb_sob_time",children:(0,a.fF)(o)})]})]})]})}},8008:(t,s,e)=>{e.d(s,{A:()=>r});e(5043);var a=e(3216),c=e(6729),o=e(579);const r=(0,c.A)((t=>{const s=(0,a.Zp)(),{params:e,title:c,type:r}=t;console.log("props",e.userId,r);const n="/".concat(e.userId);return 2==r&&localStorage.setItem("isActiveProduct",!0),(0,o.jsx)("div",{className:"tb_sob_ph",children:(0,o.jsxs)("div",{className:"tb_sob_ph_w",children:[(0,o.jsx)("div",{className:"tb_sob_ph_b",onClick:t=>s(n),children:(0,o.jsx)("div",{className:"tb__icon tb-chevron-left"})}),(0,o.jsx)("div",{className:"tb_sob_ph_t",children:c||"Posts"}),(0,o.jsx)("div",{className:"tb_sob_ph_dbtn",onClick:t=>s(n)})]})})}))},3062:(t,s,e)=>{e.r(s),e.d(s,{default:()=>_});var a=e(5043),c=e(3216),o=e(1539),r=e(2908),n=e(226),l=e(579);const d=t=>{let{posts:s,history:e,params:a}=t;return(null===s||void 0===s?void 0:s.length)>0?(0,l.jsx)(l.Fragment,{children:s.map((t=>(0,l.jsxs)("div",{className:"tb_sob_r_p_wrap",onClick:s=>e("/".concat(a.userId,"/post/").concat(t.id)),children:[(0,l.jsx)(n.A,{authorClass:"tb_sob_r_pa",author:t.author}),(0,l.jsxs)("div",{className:"tb_sob_r_p",children:[(0,l.jsx)("div",{className:"tb_sob_r_pm",children:(0,l.jsx)("img",{className:"tb_sob_r_pm_img_",src:t.postFileNew,alt:t.content,onError:t=>t.target.src=r.gX})}),t.content.length>120?(0,l.jsx)("div",{className:"tb_sob_r_pc",children:"".concat(t.content.slice(0,100),"...")}):(0,l.jsx)("div",{className:"tb_sob_r_pc",children:t.content})]})]},t.id)))}):null};var i=e(8008);e(3433);const _=(0,e(6729).A)((t=>{var s;let{params:e}=t;const n=(0,c.Zp)(),[_,p]=(0,a.useState)(!0),[u,b]=(0,a.useState)(null),[h,m]=(0,a.useState)(600),v=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if((()=>{try{p(!0),(0,o.nr)(e).then((t=>{var s;const{responseData:e}=t.data;b((null===e||void 0===e||null===(s=e.products)||void 0===s?void 0:s.length)>0?e.products[0]:{}),p(!1)})).catch((t=>{p(!1)}))}catch(t){p(!1)}})(),v.current){const t=v.current.clientHeight;m(t)}}),[v.current]),console.log("\ud83d\ude80 ~ ProductDetail ~ divHeight:",h),_?(0,l.jsx)(l.Fragment,{}):u&&Object.keys(u).length>0?(0,l.jsxs)("div",{className:"tb_sob_pro_contain tb_sob_pd_con",children:[(0,l.jsx)(i.A,{title:"Products",type:"2"}),(0,l.jsxs)("div",{className:"tb_sob_pro",children:[(0,l.jsx)("div",{className:"tb_sob_pro_media",ref:v,children:(0,l.jsx)("div",{className:"tb_sob_m_holder",children:(0,l.jsx)("div",{className:"tb_sob_img tb_flex",children:(0,l.jsx)("img",{className:"tb_sob_img_",src:u.product_image,onError:t=>t.target.src=r.qF})})})}),(0,l.jsx)("div",{className:"tb_sob_pro_cont",children:(0,l.jsx)("div",{className:"tb_sob_pro_w",children:(0,l.jsxs)("div",{className:"tb_sob_pro_list_wrap",id:"targetSection",children:[(0,l.jsxs)("div",{className:"tb_sob_p_d",children:[(0,l.jsx)("div",{className:"tb_sob_p_t",children:u.product_title}),(0,l.jsxs)("div",{className:"tb_sob_p_p_w",children:[(0,l.jsxs)("div",{className:"tb_sob_p_p",children:[u.price_currency_symbol,u.product_price]}),(0,l.jsxs)("div",{className:"tb_sob_d_p",children:[u.discount_currency_symbol,u.product_discount]})]})]}),(0,l.jsx)("div",{className:"tb_sob_p_btn tb_sob_vow_btn",onClick:t=>window.open(u.product_url,"_blank"),children:"View On Website"}),(null===u||void 0===u||null===(s=u.posts)||void 0===s?void 0:s.length)>0?(0,l.jsx)("div",{className:"tb_sob_rp_",style:{maxHeight:h-141},children:(0,l.jsx)(d,{posts:u.posts,history:n,params:e})}):null]})})})]})]}):null}))},6729:(t,s,e)=>{e.d(s,{A:()=>o});e(5043);var a=e(3216),c=e(579);const o=t=>s=>{const e=(0,a.g)();return(0,c.jsx)(t,{...s,params:e})}},1539:(t,s,e)=>{e.d(s,{jD:()=>p,$h:()=>_,k8:()=>h,db:()=>m,Q3:()=>u,nr:()=>b});var a=e(854),c=e.n(a),o=e(2908);const r=t=>({...t,headers:{...t.headers}});const n=class{constructor(){const t={baseURL:o.bt},s=c().create(t);return s.interceptors.request.use(r),c().interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),s}};var l=e(8215),d=e(1175);const i=(t,s,e)=>({slug_:t||"",limit_:s&&s>0?s:"",offset_:e&&e>0?e:""}),_=(t,s,e)=>{try{const{slug_:a,limit_:c,offset_:r}=i(t,s,e);return t=>{t({type:l.hU,payload:!0}),(new n).get("".concat(o.$w,"/").concat(a,"/").concat(c,"/").concat(r)).then((s=>{console.log("response.data",s.data);const{after:e,brand:c,postData:o,productSetting:r}=s.data;t({type:l.ZK,payload:{after:e,brand:c,postData:o,productSetting:r,slug_:a}})})).catch((s=>{t({type:l.hU,payload:!1})}))}}catch(a){}},p=(t,s,e)=>{try{const{slug_:a,limit_:c,offset_:r}=i(t,s,e);return t=>{t({type:l.Ju,payload:!0}),(new n).get("".concat(o.De,"/").concat(a,"/").concat(c,"/").concat(r)).then((s=>{console.log("response.data",s.data);const{responseData:e}=s.data;t({type:l.s8,payload:e.products})})).catch((s=>{t({type:l.Ju,payload:!1})}))}}catch(a){}},u=t=>{const{userId:s,id:e}=t;try{return(new n).get("".concat(o.df).concat(s,"/post/").concat(e))}catch(a){}},b=t=>{const{userId:s,id:e}=t;try{return(new n).get("".concat(o.df).concat(s,"/product/").concat(e))}catch(a){}},h=t=>{try{const{brand:s,after:e,isLoadPostRequest:a,hasPost:c}=d.A.getState().users;return r=>{a||1!=c?t():(r({type:l.Mn,payload:!0}),(new n).get("".concat(o.b).concat(s.wallId,"/9/").concat(e)).then((s=>{const{responseCode:e,data:a,after:c,hasPost:o}=s.data;200==e&&r({type:l.Hd,payload:{data:a,after:c,hasPost:o}}),t()})).catch((s=>{t(),r({type:l.Mn,payload:!0}),console.log("error",s)})))}}catch(s){t()}},m=t=>{try{const{brand:s,isLoadProductRequest:e,hasProduct:a,productParmas:c}=d.A.getState().users;return r=>{e||1!=a?t():(r({type:l.FY,payload:!0}),(new n).get("".concat(o.xJ).concat(s.wallId,"/").concat(c.limit,"/").concat(c.offset+c.limit)).then((s=>{const{responseData:e,responseCode:a}=s.data;200==a&&null!==e&&void 0!==e&&e.products&&r({type:l.Kn,payload:{products:null===e||void 0===e?void 0:e.products,offset:c.offset+c.limit,hasProduct:0==(null===e||void 0===e?void 0:e.products.length)?0:1}}),t()})).catch((s=>{t(),r({type:l.FY,payload:!0}),console.log("error",s)})))}}catch(s){t()}}},3433:()=>{}}]);
//# sourceMappingURL=62.63ad14a4.chunk.js.map