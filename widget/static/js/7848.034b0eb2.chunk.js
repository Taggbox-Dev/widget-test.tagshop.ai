"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7848],{17848:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var a=t(65043),i=t(83003),l=t(22030),s=t(78250),r=t(92908),o=t(70579);const d=a.lazy((()=>t.e(7164).then(t.bind(t,37164)))),u=a.lazy((()=>t.e(233).then(t.bind(t,60233)))),c=a.lazy((()=>t.e(312).then(t.bind(t,312)))),p=a.lazy((()=>t.e(1993).then(t.bind(t,61993)))),h=a.lazy((()=>t.e(551).then(t.bind(t,90551)))),g=a.lazy((()=>Promise.all([t.e(3245),t.e(9070)]).then(t.bind(t,69070))));class v extends a.PureComponent{constructor(){super(),this.updateContainerSize=()=>{this.containerRef.current&&this.setState({containerSize:{width:this.containerRef.current.offsetWidth,height:this.containerRef.current.offsetHeight}})},this.state={containerSize:{width:null,height:null},parentID:""},this.containerRef=a.createRef()}componentDidMount(){(0,l.YD)(this.props.ThemeId),this.updateContainerSize(),window.addEventListener("resize",this.updateContainerSize),this.containerRef.current}componentWillUnmount(){window.removeEventListener("resize",this.updateContainerSize)}componentDidUpdate(){var e;let n=document.querySelector(".tb_app_container"),t=l.wV?l.wV:null===n||void 0===n||null===(e=n.parentNode)||void 0===e?void 0:e.id;this.setState({parentID:t})}render(){var e,n,t,i,l,v,m,k,b,j,x;const{wall:f,reviewFilters:S,webFilters:w,postData:B,filter_tags:I}=this.props,{containerSize:z,parentID:D}=this.state,{SnapUp:y,ThemeInfo:C}=f,_=C.id,F=!(null===f||void 0===f||!f.Banner||!Object.keys(f.Banner).length||1!==(null===f||void 0===f||null===(e=f.Banner)||void 0===e?void 0:e.status)),R=!(null===f||void 0===f||!f.BannerImage||!Object.keys(f.BannerImage).length||1!==(null===f||void 0===f||null===(n=f.BannerImage)||void 0===n?void 0:n.status)),T=!!(F&&1==(null===f||void 0===f||null===(t=f.Banner)||void 0===t?void 0:t.banner_position)||R),H=!(!F||2!=(null===f||void 0===f||null===(i=f.Banner)||void 0===i?void 0:i.banner_position)),L=y.ruleStatus&&y.QrCode.status&&r.HY&&![63,64,50].includes(_),N=![55,52,60,16,47,57,61].includes(_),P=f.Banner&&Object.keys(f.Banner).length&&1===f.Banner.status&&6==f.Banner.type&&![57,84].includes(_),U=r.MH?1===f.Personalization.filterStatus:!!(r.MH&&1===f.Personalization.filterStatus&&w&&w.length>1),V=!!(I&&I.length>0);let M=""!=w&&w&&w.length?w.map((e=>{let{Network:n}=e;return null===n||void 0===n?void 0:n.id})):null;!r.HY&&null!==f&&void 0!==f&&null!==(l=f.Background)&&void 0!==l&&l.image&&f.Background.image.includes(s.vr)&&(f.Background.image=String(f.Background.image).replace(s.Vy,""));const O=1===(null===f||void 0===f||null===(v=f.Background)||void 0===v?void 0:v.status)&&84!==_?{backgroundImage:null!==f&&void 0!==f&&null!==(m=f.Background)&&void 0!==m&&m.url?`url(${null===f||void 0===f||null===(k=f.Background)||void 0===k?void 0:k.url})`:"",backgroundColor:null===f||void 0===f||null===(b=f.Background)||void 0===b?void 0:b.color}:null,Y=!![63,64].includes(_),E=!(1!=(null===f||void 0===f||null===(j=f.Reviews)||void 0===j?void 0:j.headerStatus)||!Y),W=P&&T||E,$=r.aD&&!r.Vn&&1===(null===(x=f.CustomTicker)||void 0===x?void 0:x.status),q=!r.aD&&N&&(U||V)&&84!==_,Q=Y&&1==f.Reviews.themeStatus||!Y;return(0,o.jsxs)("div",{className:"tb_app_container",style:{minHeight:r.yR?[47,16,49,55,60,52].includes(_)?"100%":`${this.props.postHeight}px`:null},ref:this.containerRef,children:[$&&1==f.CustomTicker.ticker_position?(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(c,{CustomTicker:f.CustomTicker})}):null,T?(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(d,{Banner:f.Banner,BannerImage:f.BannerImage,LogoImage:f.LogoImage})}):"",(0,o.jsxs)("div",{className:"tb_app_wrapper",style:O,children:[W?(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(u,{isHeader:E,reviewFilters:S,appendData:B.appendData,wall:f,postData:B})}):null,L?(0,o.jsxs)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(g,{SnapUp:f.SnapUp,id:_,webId:C.webId})," "]}):null,q?(0,o.jsxs)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(p,{type:f.Personalization.filter_type,webFilters:w,filter_tags:I,appendData:B.appendData,wall:f,postData:B})]}):"",Q?(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(h,{...this.props,brandingNetworks:M,containerSize:z,parentID:D})}):null,P&&H?(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(u,{reviewFilters:S,appendData:B.appendData,wall:f,postData:B})}):null," "]}),H?(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(d,{Banner:f.Banner,BannerImage:f.BannerImage,LogoImage:f.LogoImage})}):"",$&&2==f.CustomTicker.ticker_position?(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(c,{CustomTicker:f.CustomTicker})}):null]})}}const m=(0,i.Ng)((e=>({renderId:e.renderId})),null)(v)}}]);
//# sourceMappingURL=7848.034b0eb2.chunk.js.map