"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4101],{4101:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(72791),l=s(89057),i=s(77581),n=s(80184);const o=a.lazy((()=>s.e(8839).then(s.bind(s,88839)))),p=a.lazy((()=>Promise.all([s.e(8947),s.e(4867),s.e(6710),s.e(238)]).then(s.bind(s,44705)))),r=a.lazy((()=>Promise.all([s.e(4867),s.e(3298)]).then(s.bind(s,31431)))),c=a.lazy((()=>s.e(213).then(s.bind(s,50213)))),d=a.lazy((()=>s.e(9496).then(s.bind(s,79496)))),h=(0,l.componentWillAppendToBody)((e=>{let{children:t}=e;return t}));class b extends a.PureComponent{constructor(e){super(e),this.togglePopup=()=>{this.setState((e=>({isPopupVisible:!e.isPopupVisible,showFirstButton:!e.showFirstButton})))},this.toggleDivs=()=>{this.setState((e=>({toggleSticky:!e.isClickStoped&&!e.toggleSticky})))},this.state={isClickStoped:!1,isPopupVisible:!1,showFirstButton:!0,toggleSticky:!1},this.interval=null}componentDidMount(){this.interval=setInterval(this.toggleDivs,1e4)}componentWillUnmount(){clearInterval(this.interval)}render(){const{postData:e,completeDataObject:t,adjustWidth:s,wall:l,reviewFilters:i,languageSetting:b,appendData:u,appData:g}=this.props,{isPopupVisible:_,showFirstButton:m,toggleSticky:j}=this.state,x=!!(l.Banner&&Object.keys(l.Banner).length>0&&1===l.Banner.status&&6==l.Banner.bannerType),v=Object.keys(t).map((e=>t[e])).sort((()=>Math.random()-Math.random())).find((()=>!0));return(0,n.jsxs)("div",{className:"tb_bt__container",children:[(0,n.jsx)(h,{children:(0,n.jsxs)("div",{className:"tb_bt_popup_wrapper tb_bt_popup_show",style:{display:_?null:"none"},children:[(0,n.jsx)("div",{className:"tb_bt_popup_close_btn",onClick:this.togglePopup,children:(0,n.jsx)("div",{className:"tb_bt_popup_close_ico tb__icon tb-close-alt"})}),(0,n.jsx)("div",{className:"tb_bt_head_title",children:"What our customer say"}),(0,n.jsxs)("div",{className:"tb_bt_post_wrap",children:[x?(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(o,{reviewFilters:i,wall:l,appendData:u,languageSetting:b})}):null,(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(p,{...this.props})}),1===l.Personalization.loadMoreStatus?(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d,{languageSetting:b,wall:l,appendData:u,postData:g.postData})}):null]})]})}),(0,n.jsx)("div",{className:"tb_bt_wrapper",children:m&&(0,n.jsxs)("div",{className:"tb_bt_post_wrapper",children:[j?null:(0,n.jsx)("div",{className:"tb_bt_average_sticky ".concat(j?"":"tb_bt_show"),children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(c,{ThemeRule:l.ThemeRule,reviewFilters:i,togglePopup:this.togglePopup})})}),e&&e.length>0&&j&&(0,n.jsx)("div",{className:"tb_bt_post_contain ".concat(j?"tb_bt_show":""),children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(r,{ownerId:l.Wall.owner,itemData:v,itemIndex:v.id,adjustWidth:s,personalization:l.Personalization,ThemeRule:l.ThemeRule,wallID:l.Wall.id,toggleDivs:this.toggleDivs},v.id)},v.id)})]})})]})}}const u=(0,i.$j)((e=>({appData:e.appData})))(b)}}]);
//# sourceMappingURL=4101.0dd4e19f.chunk.js.map