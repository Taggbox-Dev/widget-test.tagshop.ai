"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[274],{70274:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var o=t(88094),s=t(83546),n=t(40329),r=t(42682),d=t(15678);class h extends o.PureComponent{constructor(){super(...arguments),this.onLoadeMore=e=>{const{postData:a,ThemeStyle:t,ThemeInfo:o}=this.props,{appendData:s}=a,{webId:r,wallId:d,id:h}=o,l=t.column.desktop<5?5:t.column.desktop,p=n.HY&&53==h?l:t.totalPosts,D=Math.floor(Date.now()/1e3);this.props.nextData(n.HY?r:d,D,p,s.networkID,s.after,s.heightEvent)}}render(){const{loaderData:e,postData:a,ThemeInfo:t,ThemeStyle:o}=this.props,s=!(!t.branding||!n.HY),r=!a.hasMoreData||!Object.keys(a.hasMoreData).length||(!a.hasMoreData[0]||0!=a.hasMoreData[0].hasMoreData)&&(!a.hasMoreData[a.appendData.networkID]||a.hasMoreData[a.appendData.networkID].hasMoreData),{showMore:h,noMore:l}=o.language.text;return!0===r?(0,d.jsx)("div",{className:"tb_see_more_btn_wrap",style:{paddingTop:s?5:""},children:(0,d.jsx)("div",{className:"tb_see_more_btn "+(e&&e.isShowMoreLoading?"tb_more_btn_loading":""),onClick:this.onLoadeMore,role:"button",tabIndex:"0",children:r?h:l})}):(0,d.jsx)(d.Fragment,{})}}const l=(0,s.Ng)((e=>({loaderData:e.loaderData})),(e=>({nextData:(a,t,o,s,n,d,h)=>e((0,r.wF)(a,t,o,s,n,d,h))})))(h)}}]);