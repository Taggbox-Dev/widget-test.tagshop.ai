"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[620,1422],{20620:(t,e,s)=>{s.r(e),s.d(e,{default:()=>o});var l=s(9950),a=s(44414);const i=t=>Array.from({length:t},((t,e)=>(0,a.jsx)("div",{className:`tb_colr_ico tb_ico_path${e+1}`,children:(0,a.jsx)("div",{})},e))),r={1:(0,a.jsx)("div",{className:"tb-twitter"}),2:(0,a.jsx)("div",{className:"tb-instagram-default",children:(0,a.jsx)("div",{})}),3:(0,a.jsx)("div",{className:"tb-facebook",children:(0,a.jsx)("div",{})}),4:(0,a.jsx)("div",{className:"tb-google-default",children:i(4)}),5:(0,a.jsx)("div",{className:"tb-pinterest",children:(0,a.jsx)("div",{})}),6:(0,a.jsx)("div",{className:"tb-flickr-default",children:i(2)}),7:(0,a.jsx)("div",{className:"tb-youtube-default",children:i(2)}),8:(0,a.jsx)("div",{className:"tb-vimeo",children:(0,a.jsx)("div",{})}),10:(0,a.jsx)("div",{className:"tb-linkedin",children:(0,a.jsx)("div",{})}),11:(0,a.jsx)("div",{className:"tb-tumblr",children:(0,a.jsx)("div",{})}),12:(0,a.jsx)("div",{className:"tb-rss",children:(0,a.jsx)("div",{})}),15:(0,a.jsx)("div",{className:"tb-workplace",children:(0,a.jsx)("div",{})}),18:(0,a.jsx)("div",{className:"tb-instagram-default",children:(0,a.jsx)("div",{})}),19:(0,a.jsx)("div",{className:"tb-yelp",children:(0,a.jsx)("div",{})}),20:(0,a.jsx)("div",{className:"tb-slack-default",children:i(8)}),21:(0,a.jsx)("div",{className:"tb-yammer",children:(0,a.jsx)("div",{})}),23:(0,a.jsx)("div",{className:"tb-airbnb",children:(0,a.jsx)("div",{})}),25:(0,a.jsx)("div",{className:"tb-soundcloud",children:(0,a.jsx)("div",{})}),26:(0,a.jsx)("div",{className:"tb-giphy-default",children:i(7)}),28:(0,a.jsx)("div",{className:"tb-tiktok-default",children:i(7)}),29:(0,a.jsx)("div",{className:"tb-onsite-upload",children:(0,a.jsx)("div",{})}),30:(0,a.jsx)("div",{className:"tb-vk",children:(0,a.jsx)("div",{})}),31:(0,a.jsx)("div",{className:"tb-tiktok-default",children:i(7)}),32:(0,a.jsx)("div",{className:"tb-vk",children:(0,a.jsx)("div",{})}),33:(0,a.jsx)("div",{className:"tb-trustpilot-default",children:i(2)}),34:(0,a.jsx)("div",{className:"tb-amazon-default",children:i(2)}),35:(0,a.jsx)("div",{className:"tb-tripadvisor",children:(0,a.jsx)("div",{})}),36:(0,a.jsx)("div",{className:"tb-tagembed-default",children:i(3)}),37:(0,a.jsx)("div",{className:"tb-aliexpress-default",children:i(4)}),38:(0,a.jsx)("div",{className:"tb-booking-default",children:i(3)})},n=(0,l.memo)((t=>{let{networkId:e,networkClass:s}=t;const l=`${s} tb__icon tb_ico_default`,i=r[e]||"";return i?(0,a.jsx)("div",{className:l,children:i}):""}));class o extends l.PureComponent{render(){return(0,a.jsx)(n,{...this.props})}}},32446:(t,e,s)=>{s.d(e,{A:()=>i});s(9950);var l=s(20620),a=s(44414);const i=t=>{let{filterIconClass:e,network:s,isDefault:i}=t;return!!i||!![7,4,36].includes(s.id)?(0,a.jsx)(l.default,{network:s,networkClass:e}):(0,a.jsx)("div",{className:`${e} tb__icon tb-${s.icon}`,children:(0,a.jsx)("div",{})})}},51422:(t,e,s)=>{s.r(e),s.d(e,{default:()=>v});var l=s(9950),a=s(10300),i=s(82603),r=s(32446),n=s(44414);class o extends l.PureComponent{constructor(){super(...arguments),this.state={networkID:null},this.onClickWebFilters=t=>e=>{this.props.changeFilterStatus(2);const s=Math.floor(Date.now()/1e3),{appendData:l,wall:a,ThemeStyle:i}=this.props;let r=i.totalPosts;this.props.filterPostDataAppendWebFilter(a.ThemeInfo.wallId,s,r,t,l.after,l.heightEvent,null),this.setState({networkID:t})}}render(){const{webFilters:t,wall:e}=this.props,{networkID:s}=this.state;return(0,n.jsxs)("div",{className:"tb_filter_circular_wrapper",children:[(0,n.jsx)("div",{className:"tb_filter_circular_list",onClick:this.onClickWebFilters(0),children:(0,n.jsxs)("div",{className:"tb_filter_circular_button_text "+(s?"":" tb_filter_active"),children:[e.ThemeStyle.language.text.all,"  "]})}),t&&t.length>0?t.map(((t,e)=>(0,n.jsx)("div",{className:"tb_filter_circular_list",onClick:this.onClickWebFilters(t.Network.id),children:(0,n.jsx)("div",{className:"tb_filter_circular_button "+(s&&s==t.Network.id&&2==this.props.webFiltersStatus?" tb_filter_active":""),children:(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(r.A,{filterIconClass:"tb_filter_round_edge_ico",network:t.Network,isDefault:!1})})})},e))):null]})}}const c=(0,a.Ng)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,l,a,r,n,o)=>t((0,i.Z)(e,s,l,a,r,n,o))})))(o);class d extends l.PureComponent{constructor(){super(...arguments),this.state={networkID:null},this.onClickWebFilters=t=>e=>{this.props.changeFilterStatus(2);const s=Math.floor(Date.now()/1e3),{appendData:l,wall:a,ThemeStyle:i}=this.props;let r=i.totalPosts;this.props.filterPostDataAppendWebFilter(a.ThemeInfo.wallId,s,r,t,l.after,l.heightEvent,null),this.setState({networkID:t})}}render(){const{webFilters:t,wall:e}=this.props,{networkID:s}=this.state;return(0,n.jsxs)("div",{className:"tb_filter_rectangular_wrapper",children:[(0,n.jsx)("div",{className:"tb_filter_rectangular_list",onClick:this.onClickWebFilters(0),children:(0,n.jsxs)("div",{className:"tb_filter_rectangular_button tb-network-rectangular-ico-users "+(0==s&&2==this.props.webFiltersStatus?"tb_filter_active":""),children:[(0,n.jsx)("div",{className:"tb_filter_rectangular_icon",children:(0,n.jsx)("div",{className:"tb_filter_rectangular_ico tb__icon tb-users",children:" "})}),(0,n.jsx)("div",{className:"tb_filter_rectangular_button_text",children:e.ThemeStyle.language.text.all})]})}),t&&t.length>0?t.map((t=>(0,n.jsx)("div",{className:"tb_filter_rectangular_list",onClick:this.onClickWebFilters(t.Network.id),"tb-data-network":t.Network.id,children:(0,n.jsxs)("div",{className:`tb_filter_rectangular_button tb-network-rectangular-ico-${t.Network.icon} ${s&&s==t.Network.id&&2==this.props.webFiltersStatus?"tb_filter_active":""}`,children:[(0,n.jsx)("div",{className:"tb_filter_rectangular_icon",children:(0,n.jsx)(r.A,{filterIconClass:"tb_filter_rectangular_ico",network:t.Network,isDefault:!0})}),(0,n.jsx)("div",{className:"tb_filter_rectangular_button_text",children:t.Network.name})]})},t.Network.id))):null]})}}const h=(0,a.Ng)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,l,a,r,n,o)=>t((0,i.Z)(e,s,l,a,r,n,o))})))(d);class u extends l.PureComponent{constructor(){super(...arguments),this.state={networkID:null},this.onClickWebFilters=t=>e=>{this.props.changeFilterStatus(2);const s=Math.floor(Date.now()/1e3),{appendData:l,wall:a,ThemeStyle:i}=this.props;let r=i.totalPosts;this.props.filterPostDataAppendWebFilter(a.ThemeInfo.wallId,s,r,t,l.after,l.heightEvent,null),this.setState({networkID:t})}}render(){const{webFilters:t,wall:e}=this.props,{networkID:s}=this.state;return(0,n.jsxs)("div",{className:"tb_filter_round_edged_wrapper",children:[(0,n.jsx)("div",{className:"tb_filter_round_edged_list",onClick:this.onClickWebFilters(0),tabIndex:"0",children:(0,n.jsx)("div",{className:"tb_filter_round_edged_button_text "+(s?"":"tb_filter_active"),role:"button",children:e.ThemeStyle.language.text.all})}),t&&t.length>0?t.map(((t,e)=>(0,n.jsx)("div",{className:"tb_filter_round_edged_list",onClick:this.onClickWebFilters(t.Network.id),role:"list",tabIndex:"0",children:(0,n.jsx)("div",{className:"tb_filter_round_edged_button"+(s&&s==t.Network.id&&2==this.props.webFiltersStatus?" tb_filter_active":""),role:"listitem",children:(0,n.jsx)(r.A,{filterIconClass:"tb_filter_round_edge_ico",network:t.Network,isDefault:!1})})},e))):null]})}}const b=(0,a.Ng)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,l,a,r,n,o)=>t((0,i.Z)(e,s,l,a,r,n,o))})))(u);var p=s(15255);class _ extends l.PureComponent{constructor(){super(...arguments),this.state={networkID:null},this.onClickWebFilters=t=>e=>{this.props.changeFilterStatus(2);const s=Math.floor(Date.now()/1e3),{appendData:l,wall:a,ThemeStyle:i}=this.props;let r=i.totalPosts;this.props.filterPostDataAppendWebFilter(a.Wall.id,s,r,t,l.after,l.heightEvent,null),this.setState({networkID:t})}}render(){const{webFilters:t}=this.props,{networkID:e}=this.state;return(0,n.jsxs)("div",{className:"tb_filter_square_wrapper",children:[(0,n.jsx)("div",{className:"tb_filter_square_list",onClick:this.onClickWebFilters(0),children:(0,n.jsx)("div",{className:"tb_filter_square_button tb-network-ico-users "+(0==e&&2==this.props.webFiltersStatus?" tb_filter_active":""),children:(0,n.jsx)("div",{className:"tb_filter_square_ico tb__icon tb-users",children:" "})})}),t&&t.length>0?t.map((t=>(0,n.jsx)("div",{className:"tb_filter_square_list",onClick:this.onClickWebFilters(t.Network.id),children:(0,n.jsx)("div",{className:`tb_filter_square_button tb-network-ico-${t.Network.icon} ${e&&e==t.Network.id&&2==this.props.webFiltersStatus?" tb_filter_active":""}`,"tb-data-network":t.Network.id,children:(0,n.jsx)(r.A,{filterIconClass:"tb_filter_square_ico",network:t.Network,isDefault:!0})})},(0,p.A)()))):null]})}}const f=(0,a.Ng)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,l,a,r,n,o)=>t((0,i.Z)(e,s,l,a,r,n,o))})))(_);class m extends l.PureComponent{constructor(){super(...arguments),this.state={dropDownOffset:0,networkID:null,tagName:""},this.onClickTagFilters=t=>e=>{this.props.changeFilterStatus(1);const s=Math.floor(Date.now()/1e3),{appendData:l,wall:a,ThemeStyle:i}=this.props;let r=i.totalPosts;this.props.filterPostDataAppendWebFilter(a.Wall.id,s,r,0,l.after,l.heightEvent,t),this.setState({tagName:t})},this.onClickWebFilters=t=>e=>{this.props.changeFilterStatus(2);const s=Math.floor(Date.now()/1e3),{appendData:l,wall:a,ThemeStyle:i}=this.props;let r=i.totalPosts;this.props.filterPostDataAppendWebFilter(a.ThemeInfo.wallId,s,r,t,l.after,l.heightEvent,null),this.setState({networkID:t})}}offset(t){var e=t.getBoundingClientRect(),s=window.pageXOffset||document.documentElement.scrollLeft,l=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+l,left:e.left+s}}componentDidMount(){var t=document.querySelector(".tb_tag_btn_dropdown");null!=t&&(this.offset(t).left<0&&this.setState({dropDownOffset:40}))}render(){const{dropDownOffset:t,tagName:e,networkID:s}=this.state,{N_filters:l,filter_tags:a,webFilters:i,wall:r,webFiltersStatus:o}=this.props,c=l?3:6;return(0,n.jsxs)("div",{className:"tb_tag_filter_container",children:[i&&i.length>1?null:(0,n.jsx)("div",{className:"tb_tag_filter_list",onClick:this.onClickWebFilters(0),children:(0,n.jsx)("div",{className:"tb_tag_btn "+(0==s&&2==o?" tb_active":""),children:r.ThemeStyle.language.text.all})}),a&&a.length?a.map(((t,s)=>s<c?(0,n.jsx)("div",{className:"tb_tag_filter_list",children:(0,n.jsxs)("div",{className:"tb_tag_btn "+(t.tagName==e&&1==o?" tb_active":""),onClick:this.onClickTagFilters(t.tagName),children:[t.tagName," (",t.postCount,")"]})},s):null)):null,(0,n.jsx)("div",{className:"tb_tag_filter_list",children:a&&a.length&&a.length>c?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsxs)("div",{className:"tb_tag_btn",children:["More ",(0,n.jsx)("div",{className:"tb_tag_btn_arrow tb__icon tb-chevron-down"})]}),(0,n.jsx)("div",{className:"tb_tag_btn_dropdown",style:{transform:`translate(${t}px, 0px)`},children:a.map(((t,s)=>s>c-1?(0,n.jsx)("div",{className:"tb_tag_filter_list",children:(0,n.jsxs)("div",{className:"tb_tag_btn "+(t.tagName==e&&1==o?" tb_active":""),onClick:this.onClickTagFilters(t.tagName),children:[t.tagName," (",t.postCount,")"]})},s):null))})]}):null})]})}}const g=(0,a.Ng)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,l,a,r,n,o)=>t((0,i.Z)(e,s,l,a,r,n,o))})))(m);class v extends l.PureComponent{constructor(){super(...arguments),this.state={webFiltersStatus:0},this.changeFilterStatus=t=>{this.setState({webFiltersStatus:t})}}render(){const{type:t,webFilters:e,filter_tags:s}=this.props,{webFiltersStatus:a}=this.state,i=!!(e&&e.length>1);return i||s&&s.length?(0,n.jsxs)("div",{className:"tb_filter_container",children:[i?1==t?(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(c,{webFiltersStatus:a,changeFilterStatus:this.changeFilterStatus,...this.props})}):4==t?(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(h,{webFiltersStatus:a,changeFilterStatus:this.changeFilterStatus,...this.props})}):2==t?(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(b,{webFiltersStatus:a,changeFilterStatus:this.changeFilterStatus,...this.props})}):3==t?(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(f,{webFiltersStatus:a,changeFilterStatus:this.changeFilterStatus,...this.props})}):null:null,s&&s.length?(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(g,{N_filters:i,...this.props,webFiltersStatus:a,changeFilterStatus:this.changeFilterStatus})}):null]}):null}}},82603:(t,e,s)=>{s.d(e,{Z:()=>b});var l,a=s(96011),i=s.n(a),r=s(296),n=s(52867),o=s(66345),c=s(63246),d=s(14313),h=s(28322);let u;const b=(t,e,s,a,b,p,_)=>f=>{var m,g,v;const{wall:w,postData:x}=r.A.getState().appData,j=4===(null===w||void 0===w||null===(m=w.ThemeInfo)||void 0===m?void 0:m.id)&&1===(null===(g=w.ThemeStyle)||void 0===g?void 0:g.row),k=Object.keys((null===x||void 0===x?void 0:x.filteredDataObject)||{}).reduce(((t,e)=>{var s;return t+(0===a&&(null===(s=x.filteredDataObject[e])||void 0===s?void 0:s.length)||0)}),(null===x||void 0===x||null===(v=x.filteredDataObject[a])||void 0===v?void 0:v.length)||0),N=x.appendData.after,F=(t=>{const e=window.location.href,s=t?`#co_${t}`:".taggbox";let l={},a={};const i=t=>(0,n.eA)(e,t),r=i("region"),c=i("website"),d=i("tags");return o.HY&&(/.*(test\.tagshop\.ai\/w\/|widget-test\.tagshop\.ai|widget\.tagshop\.ai).*/.test(window.location.host)||c||r)&&(l=i("wall")?{}:{Website:1},r&&(u=r)),o.aD&&i("wallKey")&&(l.wallKey=i("wallKey")),a=d?{tag:d.includes("true")?1:0,keywords:decodeURIComponent(i("data-keywords")||i("keywords")||"")}:c?{Website:1,...u&&{region:u}}:(()=>{const t=document.querySelector(s);if(!t)return{};const{keywords:e,source:l,region:a,tags:i}=t.dataset;return{...i&&{tag:i.includes("true")?1:0,keywords:decodeURIComponent(e||"")},...o.HY&&{Website:l?1:void 0,region:a||void 0}}})(),{headers:{...l,...a,...h.ML}}})(n.wV)||{headers:{}},{headers:S}=F;S.tag=_?1:S.tag||void 0,S.keywords=_||S.keywords||void 0,S.action=1;const D={appendData:{after:N,networkID:a,heightEvent:p,tagName:_},filterNetworkId:a,newData:[],hasMoreData:{[a]:{hasMoreData:!0,after:N}},tagName:_};if(k<s&&k!==a){var C;l&&l.cancel(),l=i().CancelToken.source(),F.cancelToken=l.token,f({type:c.dC,payload:!0});const r=`${c.NH}${t}/${e}/${s}/${a}/1/${b}`,u=o.HY?`${r}/${(null===(C=(0,h.gu)(n.wV))||void 0===C?void 0:C.mUrl)||""}`:r,p=o.MH?`${c.NH}${t}/${s}/${a}/${b}`:u;(new d.A).get(p,F).then((e=>{const l=o.MH&&!["62229",62229].includes(t)?{data:JSON.parse([])}:e;f({type:c.Sg,payload:{...D,newData:l.data.data,hasMoreData:{[a]:{hasMoreData:!(j&&Object.keys(l.data.data).length<s)&&1===l.data.hasPost,after:l.data.after}},isFilter:!0}})})).catch((()=>{f({type:c.dC,payload:!1})}))}else f({type:c.Sg,payload:D})}}}]);