"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9496],{79496:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var o=t(72791),s=t(77581),r=t(11225),n=t(80184);class h extends o.PureComponent{constructor(){super(...arguments),this.onLoadeMore=e=>{const{wall:a,appendData:t,postHeight:o}=this.props,s=a.ThemeRule.numberOfPosts,r=Math.floor(Date.now()/1e3);this.props.managePostHeight(o),this.props.getDataNextSteps(a.Wall.id,r,s,t.networkID,t.after,t.heightEvent)}}render(){const{languageSetting:e,loaderData:a,postData:t}=this.props,o=!(t.hasMoreData&&Object.keys(t.hasMoreData).length>0)||(!t.hasMoreData[0]||0!=t.hasMoreData[0].hasMoreData)&&(!t.hasMoreData[t.appendData.networkID]||t.hasMoreData[t.appendData.networkID].hasMoreData);return!0===o?(0,n.jsx)("div",{className:"tb_see_more_btn_wrap",children:(0,n.jsx)("div",{className:"tb_see_more_btn ".concat(a&&a.isShowMoreLoading?"tb_more_btn_loading":""),onClick:this.onLoadeMore,children:o?e.buttonName:e.no_more})}):(0,n.jsx)(n.Fragment,{})}}const p=(0,s.$j)((e=>({loaderData:e.loaderData,postHeight:e.postHeight.data})),(e=>({managePostHeight:a=>e((0,r.B0)(a)),getDataNextSteps:(a,t,o,s,n,h,p)=>e((0,r.Sx)(a,t,o,s,n,h,p))})))(h)}}]);
//# sourceMappingURL=9496.13ffe22c.chunk.js.map