"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[306],{40306:(e,i,t)=>{t.r(i),t.d(i,{default:()=>o});var s=t(72791),l=t(89646),a=t(2703),d=(t(36497),t(80184));const r=s.lazy((()=>Promise.all([t.e(6710),t.e(6491)]).then(t.bind(t,16491)))),n=JSON.parse(window.localStorage.getItem("mediaDimension"));class o extends s.PureComponent{constructor(e){super(e),this.mediaSize=e=>{this.props.mediaSizeCallback(e)},this.CurrentVideo=e=>{},this.state={mediaSize:{height:null!=n?n[0]:"85vh",width:null!=n?n[1]:"85vh"}}}render(){const{imageList:e,data:i,wall:t,wallID:n,ownerId:o,size:h}=this.props;return(0,d.jsx)("div",{className:"tb_rp_media_holder",children:(0,d.jsx)(l.tq,{ref:this.splideRef,direction:"horizontal","passive-listeners":!0,pagination:{clickable:!0,bulletClass:"tb_rp_bullet"},children:e.map(((e,i)=>(0,d.jsx)(l.o5,{children:2===e.type||4===e.type?(0,d.jsx)("img",{className:"tb_rp_s_image",src:e.postFile,height:500,width:480,alt:(0,a.P)(e.postFile)}):3===e.type||5===e.type?(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(r,{VideoClass:"tb_rp_video",data:{...e,network:{id:e.networkId},postFileNew:e.postFile,mediaUrl:e.mediaFile},wallID:n,themeID:t.Personalization.widgetTheme,ownerId:o,size:h,isCover:!0,controls:!1,autoPlay:true,muted:false,handleVideoEnded:e=>this.CurrentVideo(),index:i})}):null},i)))})})}}}}]);
//# sourceMappingURL=306.34426acd.chunk.js.map