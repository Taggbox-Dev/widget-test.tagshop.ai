"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[360],{226:(t,s,e)=>{e.d(s,{A:()=>c});var a=e(4638),o=e(579);const c=t=>{let{authorClass:s,author:e,postTime:c}=t;const{name:d,picture:i,username:n,errorPic:r,isInstaUser:l,link:p}=e;return(0,o.jsxs)("a",{href:p,target:"_blank",className:"tb_sob_author ".concat(s),children:[(0,o.jsx)("div",{className:"tb_sob_author_profile",children:(0,o.jsx)("img",{className:"tb_sob_author_profile__",src:i,alt:d,width:"44",height:"44",onError:t=>t.target.src=r})}),(0,o.jsxs)("div",{className:"tb_sob_author_info",children:[(0,o.jsx)("div",{className:"tb_sob_authorname",children:d}),(0,o.jsxs)("div",{className:"tb_sob_post_info",children:[(null===n||void 0===n?void 0:n.length)>0?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"tb_sob_username",children:["@",n]}),(0,o.jsx)("div",{className:"tb_sob_seprator",children:" "})]}):null,(0,o.jsx)("div",{className:"tb_sob_time",children:(0,a.fF)(c)})]})]})]})}},8008:(t,s,e)=>{e.d(s,{A:()=>d});e(5043);var a=e(3216),o=e(6729),c=e(579);const d=(0,o.A)((t=>{const s=(0,a.Zp)(),{params:e,title:o,type:d}=t;console.log("props",e.userId,d);const i="/".concat(e.userId);return 2==d&&localStorage.setItem("isActiveProduct",!0),(0,c.jsx)("div",{className:"tb_sob_ph",children:(0,c.jsxs)("div",{className:"tb_sob_ph_w",children:[(0,c.jsx)("div",{className:"tb_sob_ph_b",onClick:t=>s(i),children:(0,c.jsx)("div",{className:"tb__icon tb-chevron-left"})}),(0,c.jsx)("div",{className:"tb_sob_ph_t",children:o||"Posts"}),(0,c.jsx)("div",{className:"tb_sob_ph_dbtn",onClick:t=>s(i)})]})})}))},6360:(t,s,e)=>{e.r(s),e.d(s,{default:()=>x});var a=e(5043),o=e(3216),c=e(9532),d=(e(3433),e(579));const i=t=>'<a href="'.concat(t.product_url,'" target="_blank" className="tb_tooltip_wrap">').concat(t.product_title,"</a>"),n=t=>{let{product:s}=t;const[e,o]=(0,a.useState)(null);return(0,d.jsx)("div",{className:"tb_hotspot_wrap",children:s.map(((t,s)=>(0,d.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>o(s),onMouseOut:t=>o(null),className:"tb_hotspot_dot".concat(e==s?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ tb_hotspot_ani__",onClick:s=>window.open(t.UgcProduct.product_url,"_blank"),children:s+1}),(0,d.jsx)(c.m_,{isOpen:"true",className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id),clickable:!0,html:i(t.UgcProduct)})]},s)))})};var r=e(3823);class l extends a.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.onMediaLoad=async t=>{const{data:s}=this.props;if(s&&Object.keys(s).length>0&&[2,4,5,3].includes(s.type))if(s.mediaHeight&&""!=s.mediaHeight&&s.mediaWidth&&""!=s.mediaWidth)this.setState({paddingBottom:100*s.mediaHeight/s.mediaWidth});else try{const{width:t,height:e}=await(0,r.pG)(s.postFileNew);this.setState({paddingBottom:100*e/t})}catch(e){this.setState({paddingBottom:100})}},this.state={loadError:!1,imgUrl:this.props.data.postFileNew,paddingBottom:100}}componentDidMount(){this.onMediaLoad()}render(){const{ImageClass:t,data:s,hotspot:e}=this.props,{imgUrl:a,paddingBottom:o}=this.state,c={paddingBottom:"".concat(o,"%")},i={backgroundImage:"url(".concat(a,")")},r=!!(s.hotspot&&s.ugc_products.length>0);return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(s.id),style:c,children:[r?(0,d.jsx)("div",{className:"tb_blur_bg_",style:i}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:r?"":"100%"},children:[r?(0,d.jsx)(n,{product:s.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t),role:"img",src:a,height:300,width:300,onError:s.stories?null:t=>{},alt:""})]})]})}}var p=e(1043),_=e.n(p);class h extends a.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.onMediaLoad=async t=>{const{data:s}=this.props;if(s&&Object.keys(s).length>0&&[2,4,5,3].includes(s.type))if(s.mediaHeight&&""!=s.mediaHeight&&s.mediaWidth&&""!=s.mediaWidth)this.setState({paddingBottom:100*s.mediaHeight/s.mediaWidth});else try{const{width:t,height:e}=await(0,r.pG)(s.postFileNew);this.setState({paddingBottom:100*e/t})}catch(e){this.setState({paddingBottom:100})}},this.state={loadError:!1,imgUrl:this.props.data.postFileNew,paddingBottom:100,videoLoaded:!1}}componentDidMount(){this.onMediaLoad()}render(){const{VideoClass:t,data:s,wallID:e,isCover:a,controls:o,autoPlay:c,handleVideoEnded:i,muted:n}=this.props,{paddingBottom:r,videoLoaded:l}=this.state,p={paddingBottom:"".concat(r,"%")},h=s.mediaClip&&String(s.mediaClip).length>0?s.mediaClip:s.mediaUrl;return(0,d.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(s.id),style:p,children:(0,d.jsx)(_(),{className:"".concat(t," video").concat(s.id),url:h,"data-type":"video","data-network":s.network.id,"data-link":s.link,"data-wall-id":e,"data-item-id":s.id,"data-feed-id":s.feedId?s.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!c,onError:t=>{},autoPlay:c,muted:n,volume:c?1:0,playsinline:!0,playing:c,height:"100%",width:"100%",controls:o||!1,style:{backgroundImage:l?"":"url(".concat(s.filename,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:i||null})})}}const u=t=>{let{itemData:s}=t;const e=3===s.type||5===s.type;return(0,d.jsx)("div",{className:"tb_sob_media",children:e?(0,d.jsx)(h,{VideoClass:"tb_sob_video",data:s,size:100,isCover:!0,muted:!0,autoPlay:e,handleVideoEnded:()=>{}}):(0,d.jsx)(l,{ImageClass:"tb_sob_img",data:s,size:100,hotspot:!0})})};var m=e(1539),b=e(226),g=e(8008),v=e(6729),j=e(2908);const x=(0,v.A)((t=>{var s,e;let{params:c}=t;const i=(0,o.Zp)(),[n,r]=(0,a.useState)(!0),[l,p]=(0,a.useState)(null),[_,h]=(0,a.useState)(!0);(0,a.useEffect)((()=>{(()=>{try{r(!0),(0,m.Q3)(c).then((t=>{const{posts:s}=t.data;p((null===s||void 0===s?void 0:s.length)>0?s[0]:{}),r(!1)})).catch((t=>{r(!1)}))}catch(t){r(!1)}})()}),[]);return n?(0,d.jsx)(d.Fragment,{children:"Loading..."}):l&&Object.keys(l).length>0?(0,d.jsxs)("div",{className:"tb_sob_pro_contain",children:[(0,d.jsx)(g.A,{title:"Post",type:"1"}),(0,d.jsx)(b.A,{authorClass:"tb_sob_m_a",author:l.author,postTime:l.createdAt,link:l.link}),(0,d.jsxs)("div",{className:"tb_sob_pro",children:[(0,d.jsxs)("div",{className:"tb_sob_pro_media",children:[(0,d.jsx)(u,{itemData:l,isSingle:!0}),(null===l||void 0===l||null===(s=l.ugc_products)||void 0===s?void 0:s.length)>0?(0,d.jsxs)("div",{className:"tb_sob_vp_btn",onClick:t=>{const s=document.getElementById("targetSection");if(s){const t=s.offsetTop-50;window.scrollTo({top:t,behavior:"smooth"})}},children:[(0,d.jsx)("div",{className:"tb__icon tb-bag-fill"}),(0,d.jsx)("div",{className:"tb_sob_vp",children:"View Products"})]}):""]}),(0,d.jsx)("div",{className:"tb_sob_pro_cont",children:(0,d.jsxs)("div",{className:"tb_sob_pro_w",children:[(0,d.jsx)(b.A,{authorClass:"tb_sob_d_a",author:l.author,postTime:l.createdAt}),(0,d.jsxs)("div",{className:"tb_sob_des_wrap",children:[_&&l.content.length>120?(0,d.jsx)("div",{className:"tb_sob_des_",children:"".concat(l.content.slice(0,120),"...")}):(0,d.jsx)("div",{className:"tb_sob_des_",children:l.content}),(0,d.jsx)("div",{className:"tb_sob_rm",onClick:()=>h(!_),children:_?"more":"less"})]}),(null===l||void 0===l||null===(e=l.ugc_products)||void 0===e?void 0:e.length)>0?(0,d.jsxs)("div",{className:"tb_sob_pro_list_wrap",id:"targetSection",children:[(0,d.jsx)("div",{className:"tb_sob_all_p",children:"All Products"}),(0,d.jsx)("div",{className:"tb_sob_pro_list",children:l.ugc_products.map(((t,s)=>{const{UgcProduct:e,ugc_product:a}=t;return(0,d.jsxs)("div",{className:"tb_sob_p_list",onClick:s=>i("/".concat(c.userId,"/product/").concat(t.UgcProduct.id)),children:[(0,d.jsx)("div",{className:"tb_sob_l_pro",children:(0,d.jsx)("img",{className:"tb_sob_l_pro__",src:e.product_image,alt:e.product_title,width:"44",height:"44",onError:t=>t.target.src=j.qF})}),(0,d.jsxs)("div",{className:"tb_sob_p_d",children:[(0,d.jsx)("div",{className:"tb_sob_p_t",children:e.product_title}),(0,d.jsxs)("div",{className:"tb_sob_p_p_w",children:[(0,d.jsxs)("div",{className:"tb_sob_p_p",children:[e.price_currency_symbol,e.product_price]}),(0,d.jsxs)("div",{className:"tb_sob_d_p",children:[e.discount_currency_symbol,e.product_discount]})]})]})]},a)}))})]}):null]})})]})]}):null}))},6729:(t,s,e)=>{e.d(s,{A:()=>c});e(5043);var a=e(3216),o=e(579);const c=t=>s=>{const e=(0,a.g)();return(0,o.jsx)(t,{...s,params:e})}},1539:(t,s,e)=>{e.d(s,{jD:()=>_,$h:()=>p,k8:()=>m,db:()=>b,Q3:()=>h,nr:()=>u});var a=e(854),o=e.n(a),c=e(2908);const d=t=>({...t,headers:{...t.headers}});const i=class{constructor(){const t={baseURL:c.bt},s=o().create(t);return s.interceptors.request.use(d),o().interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),s}};var n=e(8215),r=e(1175);const l=(t,s,e)=>({slug_:t||"",limit_:s&&s>0?s:"",offset_:e&&e>0?e:""}),p=(t,s,e)=>{try{const{slug_:a,limit_:o,offset_:d}=l(t,s,e);return t=>{t({type:n.hU,payload:!0}),(new i).get("".concat(c.$w,"/").concat(a,"/").concat(o,"/").concat(d)).then((s=>{console.log("response.data",s.data);const{after:e,brand:o,postData:c,productSetting:d}=s.data;t({type:n.ZK,payload:{after:e,brand:o,postData:c,productSetting:d,slug_:a}})})).catch((s=>{t({type:n.hU,payload:!1})}))}}catch(a){}},_=(t,s,e)=>{try{const{slug_:a,limit_:o,offset_:d}=l(t,s,e);return t=>{t({type:n.Ju,payload:!0}),(new i).get("".concat(c.De,"/").concat(a,"/").concat(o,"/").concat(d)).then((s=>{console.log("response.data",s.data);const{responseData:e}=s.data;t({type:n.s8,payload:e.products})})).catch((s=>{t({type:n.Ju,payload:!1})}))}}catch(a){}},h=t=>{const{userId:s,id:e}=t;try{return(new i).get("".concat(c.df).concat(s,"/post/").concat(e))}catch(a){}},u=t=>{const{userId:s,id:e}=t;try{return(new i).get("".concat(c.df).concat(s,"/product/").concat(e))}catch(a){}},m=t=>{try{const{brand:s,after:e,isLoadPostRequest:a,hasPost:o}=r.A.getState().users;return d=>{a||1!=o?t():(d({type:n.Mn,payload:!0}),(new i).get("".concat(c.b).concat(s.wallId,"/9/").concat(e)).then((s=>{const{responseCode:e,data:a,after:o,hasPost:c}=s.data;200==e&&d({type:n.Hd,payload:{data:a,after:o,hasPost:c}}),t()})).catch((s=>{t(),d({type:n.Mn,payload:!0}),console.log("error",s)})))}}catch(s){t()}},b=t=>{try{const{brand:s,isLoadProductRequest:e,hasProduct:a,productParmas:o}=r.A.getState().users;return d=>{e||1!=a?t():(d({type:n.FY,payload:!0}),(new i).get("".concat(c.xJ).concat(s.wallId,"/").concat(o.limit,"/").concat(o.offset+o.limit)).then((s=>{const{responseData:e,responseCode:a}=s.data;200==a&&null!==e&&void 0!==e&&e.products&&d({type:n.Kn,payload:{products:null===e||void 0===e?void 0:e.products,offset:o.offset+o.limit,hasProduct:0==(null===e||void 0===e?void 0:e.products.length)?0:1}}),t()})).catch((s=>{t(),d({type:n.FY,payload:!0}),console.log("error",s)})))}}catch(s){t()}}},3433:()=>{}}]);
//# sourceMappingURL=360.963be795.chunk.js.map