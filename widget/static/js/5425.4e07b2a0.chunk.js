"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5425,8126],{98126:(s,t,e)=>{e.r(t),e.d(t,{default:()=>c});var i=e(88094),n=e(29104),a=e(83546),o=e(8159),l=e(40329),d=e(47043),p=e(30784),u=e(15678);class r extends i.PureComponent{render(){const{SnapUp:s,id:t,webId:e}=this.props;var i=window.ugcSuite||l.Nz?{ugcSuite:1}:{};const a=Object.keys(i).length?"&ugcSuite=1":"",p=!(e||!l.HY),{QrCode:r,Form:c}=s,h=r.status||""!=r.text?r.text:"",_=l.HY?`${o.$R}/${t}/onsite-upload${p?"?wall=1":""}`:`${l.aD&&!l.Vn?o.GR:o.Hy}/${t}?onsite-upload=true${a}`,b=l.aD&&!l.Vn?h.length<31?"tb_snap_btn_wall tb_snap_btn_wall_v":"tb_snap_btn_wall":"",m=null!==r&&void 0!==r&&r.position?` tb_pos-${r.position}`:null;return!c.status||!l.HY&&!c.status||1!=r.status&&""===h?null:(0,u.jsx)("div",{className:`tb_onsite_upload_btn_wrap ${b}${m}`,children:(0,u.jsxs)("div",{className:"tb_onsite_upload_btn",children:[(0,u.jsx)("div",{className:"tb_snap_btn_bg",style:{opacity:l.aD?.7:null},children:(0,u.jsx)("div",{})}),(0,u.jsx)("div",{className:"tb_onsite_btn",onClick:()=>l.sb||l.bU||(0,d.vq)("display.socialwalls.com")?this.props.onSitePopup(!1):this.props.onSitePopup(!0),children:(0,u.jsxs)("div",{className:"tb_onsite_qr_btn_wrap",children:[1==r.status?(0,u.jsx)("div",{className:"tb_onsite_qr_code",children:(0,u.jsx)(n.Ay,{level:"L",size:60,value:_})}):null,""!==h?(0,u.jsx)("div",{className:`tb_onsite_btn_txt tb-cTBfont-${r.style.varient}`,children:h}):""]})})]})})}}const c=(0,a.Ng)((s=>({modalPop:s.modalPop})),(s=>({onSitePopup:t=>s((0,p.b8)(t))})))(r)},35425:(s,t,e)=>{e.r(t),e.d(t,{default:()=>o});var i=e(88094),n=e(98126),a=e(15678);class o extends i.Component{constructor(s){super(s),this.state={snapBtnSize:0,sizeClass:""},this.updateDimensions=this.updateDimensions.bind(this)}componentDidMount(){window.addEventListener("resize",this.updateDimensions),this.updateDimensions()}componentWillUnmount(){window.removeEventListener("resize",this.updateDimensions)}componentDidUpdate(){this.updateDimensions()}updateDimensions(){const{className:s}=this.props,t=this.divRef.offsetWidth;t!==this.state.snapBtnSize&&(t<200&&t>150?this.setState({sizeClass:`${s}-3x`}):t<150&&t>120?this.setState({sizeClass:`${s}-2x`}):t<120&&t>0&&this.setState({sizeClass:`${s}-1x`}),this.setState({snapBtnSize:t}))}render(){const{className:s,wallId:t,webId:e,SnapUp:i}=this.props,{sizeClass:o}=this.state;return(0,a.jsx)("div",{className:`${s} ${o}`,ref:s=>{this.divRef=s},children:(0,a.jsx)(n.default,{SnapUp:i,id:t,webId:e})})}}}}]);