(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[217],{53341:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var o=a(82483),s=a(48819),i=a.n(s),d=a(83884),n=a(99009),r=a(56723);class l extends o.PureComponent{constructor(e){super(e),this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.muteToggle=()=>{this.setState({muted:!this.state.muted})},this.onUpdateTime=e=>{try{if(d.HY){const{played:t}=this.state;this.setState({played:t+e.playedSeconds})}}catch(t){console.log(t)}},this.state={videoLoaded:!1,muted:!!d.aD,played:0},this.VideoWrap=o.createRef()}componentWillUnmount(){const{played:e}=this.state;d.HY&&(0,n.HI)(e)}render(){const{Post:e,mediaSize:t}=this.props,{videoLoaded:a,muted:o}=this.state,{media:s,id:d,link:n,networkId:l}=e,p=![7,3,25].includes(e.networkId),{height:c,width:h}=t;return(0,r.jsxs)("div",{className:"tb_post_modal_video_holder"+(a?" tb_post_video_loaded":""),ref:this.VideoWrap,children:[p?(0,r.jsx)("div",{className:"tb_m_mute_btn",onClick:this.muteToggle,children:(0,r.jsx)("div",{className:"tb__icon tb-"+(o?"mute":"unmute"),children:(0,r.jsx)("div",{})})}):"",(0,r.jsx)(i(),{className:`tb_post_modal_video tb_p_media-${d}`,url:s.video.full,"data-height":c,"data-width":h,"data-type":"video","data-network":l,"data-link":n,"data-item-id":d,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":h,"data-height":c,poster:s.image.small,muted:o}},file:{attributes:{preload:"metadata",poster:s.image.small,muted:o}}},loop:!0,autoPlay:!0,muted:o,volume:1,playsinline:!0,onReady:e=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!p,onProgress:this.onUpdateTime})]},s.video.full)}}},59993:(e,t,a)=>{"use strict";var o=a(85730);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,t,a,s,i,d){if(d!==o){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:s};return a.PropTypes=a,a}},16405:(e,t,a)=>{e.exports=a(59993)()},85730:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=217.c9e0a967.chunk.js.map