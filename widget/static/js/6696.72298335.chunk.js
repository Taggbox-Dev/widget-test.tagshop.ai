"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6696],{36696:(e,t,d)=>{d.r(t),d.d(t,{default:()=>u});var a=d(47313),o=d(20510),i=d.n(o),s=d(43635),n=d(35179),l=d(17739),r=d(46417);const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class u extends a.PureComponent{constructor(e){super(e),this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.muteToggle=()=>{this.setState({muted:!this.state.muted})},this.onUpdateTime=e=>{try{const{played:t}=this.state,{wall:d}=this.props;[61,62].includes(d.Personalization.widgetTheme)&&this.setState({played:t+e.playedSeconds})}catch(t){console.log(t)}},this.state={videoLoaded:!1,muted:!1,played:0},this.VideoWrap=a.createRef()}componentWillUnmount(){const{played:e}=this.state;n.ig&&(0,l.qE)(e)}render(){const{data:e,wall:t}=this.props,{videoLoaded:d,muted:a}=this.state,o=![7,3,25].includes(e.network.id);return(0,r.jsxs)("div",{className:"tb_post_modal_video_holder".concat(d?" tb_post_video_loaded":""),ref:this.VideoWrap,children:[o?(0,r.jsx)("div",{className:"tb_m_mute_btn",onClick:this.muteToggle,children:(0,r.jsx)("div",{className:"tb__icon tb-".concat(a?"mute":"unmute"),children:(0,r.jsx)("div",{})})}):"",(0,r.jsx)(i(),{className:"tb_post_modal_video video".concat(e.id),url:c(e.mediaUrl,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":t.Wall.id,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}},file:{forceVideo:!0,attributes:{muted:a}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,s.ib)(t,e.id)},autoPlay:!0,muted:a,volume:1,playsinline:!0,onReady:e=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!o,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onProgress:this.onUpdateTime})]},e.mediaUrl)}}}}]);