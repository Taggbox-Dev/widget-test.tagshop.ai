"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4355],{44355:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var a=t(47313),i=t(43635),s=t(43411),r=t(17739),l=t(98501),o=t(35179),d=t(46417);const g=a.lazy((()=>t.e(7535).then(t.bind(t,37535)))),u=a.lazy((()=>t.e(6429).then(t.bind(t,16429)))),c=a.lazy((()=>t.e(1819).then(t.bind(t,61819)))),h=a.lazy((()=>t.e(8534).then(t.bind(t,18534)))),p=a.lazy((()=>Promise.all([t.e(7914),t.e(589)]).then(t.bind(t,66538))));class m extends a.PureComponent{constructor(){super(),this.handleResize=()=>{this.containerRef.current&&this.setState({containerSize:{width:this.containerRef.current.offsetWidth,height:this.containerRef.current.offsetHeight}})},this.state={containerSize:{width:null,height:null},parentID:""},this.containerRef=a.createRef()}componentDidMount(){(0,r.gz)(this.props.wall.Personalization.widgetTheme),window.addEventListener("resize",this.handleResize),this.containerRef.current&&this.setState({containerSize:{width:this.containerRef.current.offsetWidth,height:this.containerRef.current.offsetHeight}})}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}componentDidUpdate(){let e=document.querySelector(".tb_app_container"),n=r.b8?r.b8:e.parentNode.id;this.setState({parentID:n})}render(){var e,n,t,i,s,m,f,v;const{wall:b,reviewFilters:B,webFilters:w,postData:S,languageSetting:j,filter_tags:k}=this.props,x=!!(b.Banner&&Object.keys(b.Banner).length>0||b.CustomBanner&&Object.keys(b.CustomBanner).length>0&&(1===(null===b||void 0===b||null===(e=b.Banner)||void 0===e?void 0:e.status)&&1===(null===b||void 0===b||null===(n=b.Banner)||void 0===n?void 0:n.banner_position)||1===(null===b||void 0===b||null===(t=b.BannerImage)||void 0===t?void 0:t.status))),z=!!(b.Banner&&Object.keys(b.Banner).length>0&&1===b.Banner.status&&2===b.Banner.banner_position),_=o.ZQ?![55,60,16,47,57].includes(b.Personalization.widgetTheme):![55,52,60,16,47,57,61].includes(b.Personalization.widgetTheme),D=b.Banner&&Object.keys(b.Banner).length>0&&1===b.Banner.status&&6==b.Banner.bannerType&&0===b.Personalization.filterStatus&&![57,84].includes(b.Personalization.widgetTheme),I=o.ZQ?1===b.Personalization.filterStatus:!!(1===b.Personalization.filterStatus&&w&&w.length>1),y=!!(k&&k.length>0);let R=""!=w&&w&&w.length>0?w.map((e=>{let{Network:n}=e;return null===n||void 0===n?void 0:n.id})):null;!o.ig&&b.Background.image&&b.Background.image.includes(l.ho)&&(b.Background.image=String(b.Background.image).replace(l.lO,""));const F=0===(null===b||void 0===b||null===(i=b.Background)||void 0===i?void 0:i.transparent)||null!==b&&void 0!==b&&null!==(s=b.Background)&&void 0!==s&&s.image&&o.ZQ?{backgroundImage:null!==b&&void 0!==b&&null!==(m=b.Background)&&void 0!==m&&m.image?"url(".concat(null===b||void 0===b||null===(f=b.Background)||void 0===f?void 0:f.image,")"):"",backgroundColor:null===b||void 0===b||null===(v=b.Background)||void 0===v?void 0:v.color}:null;return(0,d.jsxs)("div",{className:"tb_app_container",style:{minHeight:[47,16,49,55,60,52].includes(b.Personalization.widgetTheme)?"100%":"".concat(this.props.postHeight,"px")},ref:this.containerRef,children:[x?(0,d.jsxs)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(g,{Banner:b.Banner,BannerImage:b.BannerImage})]}):"",(0,d.jsxs)("div",{className:"tb_app_wrapper",style:F,children:[D&&x?(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(u,{reviewFilters:B,appendData:S.appendData,wall:b,languageSetting:j,postData:S})}):null,(b.UserRule.on_site_upload&&b.UgcSettings.onsite_status||o.nX&&b.UgcSettings.onsite_status)&&(o.Jx||o.ig&&!(0,r.mD)(50))?(0,d.jsxs)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(p,{UgcSettings:b.UgcSettings,id:b.Wall.id,tagShopWallId:b.Wall.wallId})," "]}):null,_&&(I||y)?(0,d.jsxs)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(c,{type:b.Personalization.filter_type,webFilters:w,filter_tags:k,appendData:S.appendData,wall:b,languageSetting:j,postData:S})]}):"",(0,d.jsxs)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(h,{...this.props,brandingNetworks:R,containerSize:this.state.containerSize,parentID:this.state.parentID})]}),D&&z?(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(u,{reviewFilters:B,appendData:S.appendData,wall:b,languageSetting:j,postData:S})}):null]}),z?(0,d.jsxs)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(g,{Banner:b.Banner,BannerImage:b.BannerImage})]}):""]})}}const f=(0,s.$j)((e=>{if(!0===e.postHeight.manage_height){return{postHeight:e.postHeight.data.replace("px",""),renderId:e.renderId}}return{renderId:e.renderId}}),(e=>({managePostHeight:n=>e((0,i.B0)(n))})))(m)}}]);