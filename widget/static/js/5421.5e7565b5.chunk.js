"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5421],{85421:(e,s,r)=>{r.r(s),r.d(s,{default:()=>a});var t=r(88094),n=r(42682),i=r(15678);class a extends t.PureComponent{constructor(){super(...arguments),this.onClickData=e=>s=>{const{Post:r,ThemeInfo:t}=this.props;s.stopPropagation(),(0,n.hq)({type:2,action:2,wall:t.wallID,feed:r.feedId,post:r.referenceId?r.referenceId:r.id,owner:t.ownerId}),(0,n.x9)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{shareClass:e,Post:s}=this.props,{facebook:r,twitter:t,linkedin:n}=null===s||void 0===s?void 0:s.share,a=e=>{let{shareOn:s,icon:r}=e;return(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(s),className:`tb_share_ico__ tb__icon tb-${r}`,title:r,children:(0,i.jsx)("div",{})})})};return(0,i.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,i.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,i.jsx)("div",{})}),(0,i.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[r?(0,i.jsx)(a,{shareOn:r,icon:"facebook"}):"",t?(0,i.jsx)(a,{shareOn:t,icon:"twitter"}):"",n?(0,i.jsx)(a,{shareOn:n,icon:"linkedin"}):""]})]})}}}}]);