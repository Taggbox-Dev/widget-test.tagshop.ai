"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1046,5029],{95029:(s,t,e)=>{e.r(t),e.d(t,{default:()=>c});var n=e(82483),i=e(43901),a=e(12251),o=e(31530),l=e(83884),d=e(24366),p=e(93131),r=e(56723);class u extends n.PureComponent{render(){const{SnapUp:s,id:t,webId:e}=this.props;window.ugcSuite||l.Nz;const n=!(e||!l.HY),{QrCode:a,Form:p}=s,u=a.status||""!=a.text?a.text:"",c=l.HY?`${o.$R}/${t}/onsite-upload${n?"?wall=1":""}`:`${l.aD&&!l.Vn?o.GR:o.Hy}/${t}?onsite-upload=true${l.Nz}`,_=l.aD&&!l.Vn?u.length<31?"tb_snap_btn_wall tb_snap_btn_wall_v":"tb_snap_btn_wall":"",h=null!==a&&void 0!==a&&a.position?` tb_pos-${a.position}`:null;return!p.status||!l.HY&&!p.status||1!=a.status&&""===u?null:(0,r.jsx)("div",{className:`tb_onsite_upload_btn_wrap ${_}${h}`,children:(0,r.jsxs)("div",{className:"tb_onsite_upload_btn",children:[(0,r.jsx)("div",{className:"tb_snap_btn_bg",style:{opacity:l.aD?.7:null},children:(0,r.jsx)("div",{})}),(0,r.jsx)("div",{className:"tb_onsite_btn",onClick:()=>l.sb||l.bU||(0,d.vq)("display.socialwalls.com")?this.props.onSitePopup(!1):this.props.onSitePopup(!0),children:(0,r.jsxs)("div",{className:"tb_onsite_qr_btn_wrap",children:[1==a.status?(0,r.jsx)("div",{className:"tb_onsite_qr_code",children:(0,r.jsx)(i.Ay,{level:"L",size:60,value:c})}):null,""!==u?(0,r.jsx)("div",{className:`tb_onsite_btn_txt tb-cTBfont-${a.style.varient}`,children:u}):""]})})]})})}}const c=(0,a.Ng)((s=>({modalPop:s.modalPop})),(s=>({onSitePopup:t=>s((0,p.b8)(t))})))(u)},11046:(s,t,e)=>{e.r(t),e.d(t,{default:()=>o});var n=e(82483),i=e(95029),a=e(56723);class o extends n.Component{constructor(s){super(s),this.state={snapBtnSize:0,sizeClass:""},this.updateDimensions=this.updateDimensions.bind(this)}componentDidMount(){window.addEventListener("resize",this.updateDimensions),this.updateDimensions()}componentWillUnmount(){window.removeEventListener("resize",this.updateDimensions)}componentDidUpdate(){this.updateDimensions()}updateDimensions(){const{className:s}=this.props,t=this.divRef.offsetWidth;t!==this.state.snapBtnSize&&(t<200&&t>150?this.setState({sizeClass:`${s}-3x`}):t<150&&t>120?this.setState({sizeClass:`${s}-2x`}):t<120&&t>0&&this.setState({sizeClass:`${s}-1x`}),this.setState({snapBtnSize:t}))}render(){const{className:s,wallId:t,webId:e,SnapUp:n}=this.props,{sizeClass:o}=this.state;return(0,a.jsx)("div",{className:`${s} ${o}`,ref:s=>{this.divRef=s},children:(0,a.jsx)(i.default,{SnapUp:n,id:t,webId:e})})}}}}]);
//# sourceMappingURL=1046.00c43423.chunk.js.map