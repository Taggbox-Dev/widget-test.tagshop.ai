(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8342,7498,5810],{25810:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var s=n(47313),i=n(35179),o=n(46417);const l=s.lazy((()=>n.e(5867).then(n.bind(n,95867))));class a extends s.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:n,isDefault:a,Personalization:c}=this.props,r=!!a&&(7!==e.id&&4!==e.id&&36!==e.id),d=i.ZQ&&36==e.id?"tagembed":e.icon;return r?(0,o.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===e||void 0===e?void 0:e.name)||""),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(l,{network:e,networkClass:t})]})}}},62245:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var s=n(47313),i=n(16390),o=n(17739),l=(n(35179),n(25810),n(46417));const a=s.lazy((()=>Promise.all([n.e(622),n.e(584)]).then(n.bind(n,30584))));class c extends s.PureComponent{constructor(e){super(e),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var n,s;const e=(null===(n=this.contentRef)||void 0===n||null===(s=n.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{contentClass:e,content:t,ThemeRule:n,font:c,personalization:r,item:d,contentTitle:u,readMore:m,maxLength:h,textAlign:p,maxLines:f,isReadMore:x}=this.props,b={WebkitLineClamp:f,textAlign:n.textAlignment};p||n.textAlignment;let k=20==d.network.id?t:(0,o.Fx)(t);12==d.network.id&&(k=(0,i.ZP)(k));const v="".concat(n.lineTrim?" tb_content_line-".concat(n.lineTrim):""),g="".concat(e," ").concat(x?"":v," tb-cTBfont-").concat(n.font_varient);return(0,l.jsxs)("div",{className:g,ref:this.contentRef,style:b,children:[u?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(u)}):null,(0,l.jsxs)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(a,{data:d,content:k,Personalization:r})]})]})}}},50247:()=>{}}]);