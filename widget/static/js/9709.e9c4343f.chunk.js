"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9709,757],{70757:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(72791),l=s(46535),r=s(2703),n=s(80184);const i=a.lazy((()=>s.e(1088).then(s.bind(s,41088))));class o extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:o}=this.props,c=!!o&&(7!==e.id&&4!==e.id&&36!==e.id),d=l.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,n.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:(0,r.mD)(59)?null:s.iconColor},children:(0,n.jsx)("div",{})}):(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(i,{network:e,networkClass:t})]})}}},29709:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var a=s(72791),l=s(70757),r=s(80184);const n=a.lazy((()=>s.e(6755).then(s.bind(s,96755))));class i extends a.PureComponent{constructor(e){super(e),this.totalReviewNetworks=e=>{const{wall:t}=this.props;let s=0,a=0,n=[];return e.map(((e,i)=>{const o=e.Network;s+=o.averageReviews*o.totalReviews,a+=o.totalReviews,n.push(i<5?(0,r.jsx)("div",{className:"tb_rb_social_list",children:(0,r.jsx)(l.default,{networkClass:"tb_rb_avg_social_ico",network:o,isDefault:!0,ThemeRule:t.ThemeRule})},i):null)})),this.setState({avgRate:(s/a).toFixed(1),totalReviews:a}),n},this.state={avgRate:0,totalReviews:0}}render(){const{reviewFilters:e,wall:t}=this.props,{avgRate:s,totalReviews:l}=this.state,i={backgroundColor:t.ThemeRule.cardColor,borderRadius:t.ThemeRule.radius},o={fontFamily:t.ThemeRule.css_font,fontSize:t.ThemeRule.fontsize,color:t.ThemeRule.fontColor};return(0,r.jsx)("div",{className:"tb_rb_post_container tb_rb_size_".concat(t.ThemeRule.cardSize," tb_rb_position_").concat(t.ThemeRule.cardPosition),style:i,children:(0,r.jsxs)("div",{className:"tb_rb_post_wrap",children:[(0,r.jsx)("div",{className:"tb_rb_social_",children:this.totalReviewNetworks(e)}),(0,r.jsxs)("div",{className:"tb_rb_rating_wrap",children:[(0,r.jsx)("div",{className:"tb_rb__title tb-cTBfont-".concat(t.ThemeRule.font_varient),style:o,children:"Reviews"}),(0,r.jsx)("div",{className:"tb_rb_avg_rating tb-cTBfont-".concat(t.ThemeRule.font_varient),style:o,children:s}),(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(n,{size:18,rating:s})}),(0,r.jsxs)("div",{className:"tb_rb_based_on tb-cTBfont-".concat(t.ThemeRule.font_varient),style:o,children:["Based on ",(0,r.jsx)("div",{className:"tb_rb_based_on_count",children:l})," reviews"]})]})]})})}}}}]);
//# sourceMappingURL=9709.e9c4343f.chunk.js.map