"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4355],{44355:(e,n,t)=>{t.r(n),t.d(n,{default:()=>B});var a=t(47313),s=t(43635),r=t(43411),i=t(17739),l=t(98501),o=t(35179),g=t(46417);const c=a.lazy((()=>t.e(7535).then(t.bind(t,37535)))),d=a.lazy((()=>t.e(6429).then(t.bind(t,16429)))),p=a.lazy((()=>t.e(1819).then(t.bind(t,61819)))),u=a.lazy((()=>t.e(8534).then(t.bind(t,18534)))),h=a.lazy((()=>Promise.all([t.e(7914),t.e(6538)]).then(t.bind(t,66538)))),m=a.lazy((()=>t.e(7209).then(t.bind(t,67209))));class b extends a.PureComponent{constructor(){super(),this.state={containerSize:{width:null,height:null},parentID:""}}componentDidMount(){const e=document.querySelector(".tb_app_container");e&&(console.log("containerEle",e),this.setState({containerSize:{width:e.offsetWidth,height:e.offsetHeight}})),(0,i.gz)(this.props.wall.Personalization.widgetTheme)}componentDidUpdate(){let e=document.querySelector(".tb_app_container"),n=i.b8?i.b8:e.parentNode.id;this.setState({parentID:n})}render(){const{wall:e,reviewFilters:n,webFilters:t,postData:s,languageSetting:r,filter_tags:b}=this.props,B=!!(e.Banner&&Object.keys(e.Banner).length>0&&(1===e.Banner.status&&1===e.Banner.banner_position||1===e.BannerImage.status)),j=!!(e.Banner&&Object.keys(e.Banner).length>0&&1===e.Banner.status&&2===e.Banner.banner_position),k=o.ZQ?![55,60,16,47,57].includes(e.Personalization.widgetTheme):![55,52,60,16,47,57].includes(e.Personalization.widgetTheme),x=!!(e.Banner&&Object.keys(e.Banner).length>0&&1===e.Banner.status&&6==e.Banner.bannerType&&0===e.Personalization.filterStatus&&57!=e.Personalization.widgetTheme),S=o.ZQ?1===e.Personalization.filterStatus:!!(t&&t.length>1),w=!!(b&&b.length>0);let f=""!=t&&t&&t.length>0?t.map((e=>{let{Network:n}=e;return n.id})):null;!o.ig&&e.Background.image&&e.Background.image.includes(l.ho)&&(e.Background.image=String(e.Background.image).replace(l.lO,""));const _=0===e.Background.transparent||e.Background.image&&o.ZQ?{backgroundImage:e.Background.image?"url(".concat(e.Background.image,")"):"",backgroundColor:e.Background.color}:null;return(0,g.jsxs)("div",{className:"tb_app_container",style:{minHeight:[47,16,49,55,60,52].includes(e.Personalization.widgetTheme)?"100%":"".concat(this.props.postHeight,"px")},children:[B?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(c,{Banner:e.Banner,BannerImage:e.BannerImage})]}):"",(0,g.jsxs)("div",{className:"tb_app_wrapper",style:_,children:[x?(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:(0,g.jsx)(d,{reviewFilters:n,appendData:s.appendData,wall:e,languageSetting:r,postData:s})}):null,(e.UserRule.on_site_upload&&e.UgcSettings.onsite_status||o.nX&&e.UgcSettings.onsite_status)&&o.ig&&!(0,i.mD)(50)?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(h,{UgcSettings:e.UgcSettings,id:e.Wall.id,tagShopWallId:e.Wall.wallId})," "]}):null,k&&(S||w)?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(p,{type:e.Personalization.filter_type,webFilters:t,filter_tags:b,appendData:s.appendData,wall:e,languageSetting:r,postData:s})]}):"",(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(u,{...this.props,brandingNetworks:f,containerSize:this.state.containerSize,parentID:this.state.parentID})]}),s&&s.completeDataObject?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(m,{completeDataObject:s.completeDataObject,postData:s.postData})]}):""]}),j?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(c,{Banner:e.Banner,BannerImage:e.BannerImage})]}):""]})}}const B=(0,r.$j)((e=>{if(!0===e.postHeight.manage_height){return{postHeight:e.postHeight.data.replace("px",""),renderId:e.renderId}}return{renderId:e.renderId}}),(e=>({managePostHeight:n=>e((0,s.B0)(n))})))(b)}}]);