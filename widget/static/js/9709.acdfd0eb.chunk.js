"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9709],{70757:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var a=s(72791),i=s(46535),l=s(80184);const n=a.lazy((()=>s.e(1088).then(s.bind(s,41088))));class r extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:r,Personalization:o}=this.props,c=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),d=i.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,l.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===e||void 0===e?void 0:e.name)||""),children:(0,l.jsx)("div",{})}):(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(n,{network:e,networkClass:t})]})}}},29709:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(72791),i=s(70757),l=s(80184);const n=a.lazy((()=>s.e(6755).then(s.bind(s,96755)))),r=a.lazy((()=>s.e(4996).then(s.bind(s,74996))));class o extends a.PureComponent{constructor(e){super(e),this.totalReviewNetworks=e=>{const{wall:t}=this.props;let s=0,a=0,n=[];return e.map(((e,r)=>{const o=e.Network;s+=o.averageReviews*o.totalReviews,a+=o.totalReviews,n.push(r<5?(0,l.jsx)("div",{className:"tb_rb_social_list",role:"listitem","aria-label":null===o||void 0===o?void 0:o.name,children:(0,l.jsx)(i.default,{networkClass:"tb_rb_avg_social_ico",network:o,isDefault:!0,ThemeRule:t.ThemeRule})},r):null)})),this.setState({avgRate:(s/a).toFixed(1),totalReviews:a}),n},this.state={avgRate:0,totalReviews:0}}render(){const{postData:e,reviewFilters:t,wall:s,languageSetting:i,isFreeAdsStatus:o}=this.props,{avgRate:c,totalReviews:d}=this.state,b={backgroundColor:s.ThemeRule.cardColor,borderRadius:s.ThemeRule.radius};return(0,l.jsx)("div",{className:"tb_rb_post_container tb_rb_size_".concat(s.ThemeRule.cardSize," tb_rb_position_").concat(s.ThemeRule.cardPosition),style:b,children:(0,l.jsxs)("div",{className:"tb_rb_post_wrap",children:[(0,l.jsx)("div",{className:"tb_rb_social_",role:"list",children:this.totalReviewNetworks(t)}),(0,l.jsxs)("div",{className:"tb_rb_rating_wrap",children:[(0,l.jsx)("div",{className:"tb_rb__title tb-cTBfont-".concat(s.ThemeRule.font_varient),children:"Reviews"}),(0,l.jsx)("div",{className:"tb_rb_avg_rating tb-cTBfont-".concat(s.ThemeRule.font_varient),"aria-label":"Rating ".concat(c),children:c}),(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(n,{size:18,rating:c})}),(0,l.jsxs)("div",{className:"tb_rb_based_on tb-cTBfont-".concat(s.ThemeRule.font_varient),"aria-label":"Based on ".concat(d," reviews"),children:["Based on ",(0,l.jsx)("div",{className:"tb_rb_based_on_count",children:d})," reviews"]}),o?(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[(0,l.jsx)(r,{languageSetting:i,wallId:s.Wall.id,themeID:s.Personalization.widgetTheme,isCenter:!0})," "]}):null]})]})})}}}}]);
//# sourceMappingURL=9709.acdfd0eb.chunk.js.map