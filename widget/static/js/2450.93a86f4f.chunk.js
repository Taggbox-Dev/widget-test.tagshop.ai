"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2450,8807],{77352:(e,t,s)=>{s.d(t,{Z:()=>b});var l,i=s(8118),a=s.n(i),d=s(7665),o=s(24366),n=s(83884),r=s(16759),c=s(89620),v=s(10753);let u;const b=(e,t,s,i,b,h,_)=>m=>{var p,w,k;const{wall:f,postData:j}=d.A.getState().appData,x=4===(null===f||void 0===f||null===(p=f.ThemeInfo)||void 0===p?void 0:p.id)&&1===(null===(w=f.ThemeStyle)||void 0===w?void 0:w.row),g=Object.keys((null===j||void 0===j?void 0:j.filteredDataObject)||{}).reduce(((e,t)=>{var s;return e+(0===i&&(null===(s=j.filteredDataObject[t])||void 0===s?void 0:s.length)||0)}),(null===j||void 0===j||null===(k=j.filteredDataObject[i])||void 0===k?void 0:k.length)||0),N=j.appendData.after,y=(e=>{const t=window.location.href,s=e?`#co_${e}`:".taggbox";let l={},i={};const a=e=>(0,o.eA)(t,e),d=a("region"),r=a("website"),c=a("tags");return n.HY&&(/.*(test\.tagshop\.ai\/w\/|widget-test\.tagshop\.ai|widget\.tagshop\.ai).*/.test(window.location.host)||r||d)&&(l=a("wall")?{}:{Website:1},d&&(u=d)),n.aD&&a("wallKey")&&(l.wallKey=a("wallKey")),i=c?{tag:c.includes("true")?1:0,keywords:decodeURIComponent(a("data-keywords")||a("keywords")||"")}:r?{Website:1,...u&&{region:u}}:(()=>{const e=document.querySelector(s);if(!e)return{};const{keywords:t,source:l,region:i,tags:a}=e.dataset;return{...a&&{tag:a.includes("true")?1:0,keywords:decodeURIComponent(t||"")},...n.HY&&{Website:l?1:void 0,region:i||void 0}}})(),{headers:{...l,...i,...v.ML}}})(o.wV)||{headers:{}},{headers:D}=y;D.tag=_?1:D.tag||void 0,D.keywords=_||D.keywords||void 0,D.action=1;const I={appendData:{after:N,networkID:i,heightEvent:h,tagName:_},filterNetworkId:i,newData:[],hasMoreData:{[i]:{hasMoreData:!0,after:N}},tagName:_};if(g<s&&g!==i){var $;l&&l.cancel(),l=a().CancelToken.source(),y.cancelToken=l.token,m({type:r.dC,payload:!0});const d=`${r.NH}${e}/${t}/${s}/${i}/1/${b}`,u=n.HY?`${d}/${(null===($=(0,v.gu)(o.wV))||void 0===$?void 0:$.mUrl)||""}`:d,h=n.MH?`${r.NH}${e}/${s}/${i}/${b}`:u;(new c.A).get(h,y).then((t=>{const l=n.MH&&!["62229",62229].includes(e)?{data:JSON.parse([])}:t;m({type:r.Sg,payload:{...I,newData:l.data.data,hasMoreData:{[i]:{hasMoreData:!(x&&Object.keys(l.data.data).length<s)&&1===l.data.hasPost,after:l.data.after}},isFilter:!0}})})).catch((()=>{m({type:r.dC,payload:!1})}))}else m({type:r.Sg,payload:I})}},19623:(e,t,s)=>{s.d(t,{A:()=>a});s(82483);var l=s(88807),i=s(56723);const a=e=>{let{filterIconClass:t,network:s,isDefault:a}=e;return!!a||!![7,4,36].includes(s.id)?(0,i.jsx)(l.default,{network:s,networkClass:t}):(0,i.jsx)("div",{className:`${t} tb__icon tb-${s.icon}`,children:(0,i.jsx)("div",{})})}},52450:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var l=s(82483),i=s(31530),a=s(12251),d=s(19623),o=s(77352),n=s(56723);const r=(0,l.memo)((e=>{let{LogoImage:t,title:s,networkID:l}=e;return(0,n.jsx)("div",{className:"tb_sb__brand",children:(0,n.jsx)("div",{className:"tb_sb__brand_icon",children:(0,n.jsx)("img",{loading:"lazy",className:"tb_brand_img",height:64,width:64,src:t,alt:"",onError:e=>e.target.src=`https://ui-avatars.com/api/?name=${s}&background=${"000"}&color=${"fff"}&length=1`})})},`network_image_${l}`)}));class c extends l.Component{constructor(e){super(e),this.toggleDropdown=()=>{this.setState({isOpen:!this.state.isOpen})},this.onUpdate=e=>{const{Banner:t}=this.props,s=t.find((t=>t.networkId===e));s&&(((e,t)=>{const s=document.createElement("link");s.id=`link_${e}`,s.rel="stylesheet",s.type="text/css",s.href=`${i.th}/web-fonts/${t}.css`,document.head.appendChild(s)})(e,null===s||void 0===s?void 0:s.title_link_font),this.setState({data:s,networkID:e}))},this.onClickWebFilters=e=>t=>{const{appData:s}=this.props;if(s){const{wall:t,postData:l}=s,i=null===l||void 0===l?void 0:l.appendData,a=Math.floor(Date.now()/1e3);let d=t.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(t.Wall.id,a,d,e,null===i||void 0===i?void 0:i.after,null===i||void 0===i?void 0:i.heightEvent,null),this.onUpdate(e)}},this.handleClickOutside=e=>{this.dropdownRef.current&&!this.dropdownRef.current.contains(e.target)&&this.setState({isOpen:!1})},this.state={networkID:0,data:null,isOpen:!1},this.dropdownRef=l.createRef()}componentDidMount(){var e;const{Banner:t}=this.props;this.onUpdate((null===t||void 0===t||null===(e=t[0])||void 0===e?void 0:e.networkId)||this.state.networkID),document.addEventListener("click",this.handleClickOutside)}componentWillUnmount(){document.removeEventListener("click",this.handleClickOutside)}render(){const{Banner:e}=this.props,{data:t,networkID:s,isOpen:i}=this.state;return t&&Object.keys(t).length>0?(0,n.jsxs)("div",{className:"tb_sb__b_cont",style:{backgroundColor:null===t||void 0===t?void 0:t.background_color},children:[(0,n.jsxs)("div",{className:"tb_sb__b_wrapper",children:[(0,n.jsxs)("div",{className:"tb_sb__profile",children:[(0,n.jsx)(r,{LogoImage:null===t||void 0===t?void 0:t.LogoImage,title:null===t||void 0===t?void 0:t.title,networkID:s}),(0,n.jsxs)("div",{className:"tb_sb___info tb-cTBfont-regular",style:{fontFamily:null===t||void 0===t?void 0:t.title_css_font},children:[(0,n.jsx)("div",{className:"tb_sb__name","aria-label":null===t||void 0===t?void 0:t.title,style:{color:null===t||void 0===t?void 0:t.title_font_color,fontSize:parseInt(null===t||void 0===t?void 0:t.title_font_size)},children:null===t||void 0===t?void 0:t.title}),(0,n.jsx)("div",{className:"tb_sb__posts","aria-label":null===t||void 0===t?void 0:t.subTitle,style:{color:null===t||void 0===t?void 0:t.title_font_color,fontSize:parseInt(null===t||void 0===t?void 0:t.subTitle_font_size)},children:null===t||void 0===t?void 0:t.subTitle})]})]}),(0,n.jsxs)("div",{className:"tb_sb_btn_wrap_",ref:this.dropdownRef,children:[(0,n.jsx)("div",{className:"tb_sb_f_btn tb-cTBfont-",onClick:0!=(null===t||void 0===t?void 0:t.networkId)?e=>window.open(null===t||void 0===t?void 0:t.followLink,"_blank"):this.toggleDropdown,style:{backgroundColor:null===t||void 0===t?void 0:t.background_color_two,color:null===t||void 0===t?void 0:t.social_icon_color,borderColor:null===t||void 0===t?void 0:t.background_color_two},children:null===t||void 0===t?void 0:t.subtitle_font_varient}),i&&(0,n.jsx)("div",{className:"tb_sb_dropdown_ "+(i?"tb_sb_dd_show":""),children:e.map(((t,s)=>0!=(null===t||void 0===t?void 0:t.networkId)?(0,n.jsx)("div",{className:"tb_sb_dd_list",onClick:t=>e&&e[s].followLink?window.open(e[s].followLink,"_blank"):null,children:null===t||void 0===t?void 0:t.networkName},s):null))})]})]}),(null===e||void 0===e?void 0:e.length)>1?(0,n.jsx)("div",{className:"tb_sb_f_wrapper",children:e.map(((e,t)=>(0,n.jsx)("div",{className:"tb_sb_f_list "+((null===e||void 0===e?void 0:e.networkId)==s?"tb_active":""),"tb-data-network":null===e||void 0===e?void 0:e.networkId,onClick:this.onClickWebFilters(null===e||void 0===e?void 0:e.networkId),children:(0,n.jsxs)("div",{className:"tb_sb_f_button tb-network-rectangular-ico-users",children:[0!=(null===e||void 0===e?void 0:e.networkId)?(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(d.A,{filterIconClass:"tb_sb_f_ico",network:null===e||void 0===e?void 0:e.network,isDefault:!1})}):null,(0,n.jsx)("div",{className:"tb_sb_f_button_text",children:0==(null===e||void 0===e?void 0:e.networkId)?"All":null===e||void 0===e?void 0:e.networkName})]})},t)))}):null]},`network_${s}`):null}}const v=(0,a.Ng)((e=>({appData:e.appData})),(e=>({filterPostDataAppendWebFilter:(t,s,l,i,a,d,n)=>e((0,o.Z)(t,s,l,i,a,d,n))})))(c)},88807:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var l=s(82483),i=s(56723);const a=e=>Array.from({length:e},((e,t)=>(0,i.jsx)("div",{className:`tb_colr_ico tb_ico_path${t+1}`,children:(0,i.jsx)("div",{})},t))),d={1:(0,i.jsx)("div",{className:"tb-twitter"}),2:(0,i.jsx)("div",{className:"tb-instagram-default",children:(0,i.jsx)("div",{})}),3:(0,i.jsx)("div",{className:"tb-facebook",children:(0,i.jsx)("div",{})}),4:(0,i.jsx)("div",{className:"tb-google-default",children:a(4)}),5:(0,i.jsx)("div",{className:"tb-pinterest",children:(0,i.jsx)("div",{})}),6:(0,i.jsx)("div",{className:"tb-flickr-default",children:a(2)}),7:(0,i.jsx)("div",{className:"tb-youtube-default",children:a(2)}),8:(0,i.jsx)("div",{className:"tb-vimeo",children:(0,i.jsx)("div",{})}),10:(0,i.jsx)("div",{className:"tb-linkedin",children:(0,i.jsx)("div",{})}),11:(0,i.jsx)("div",{className:"tb-tumblr",children:(0,i.jsx)("div",{})}),12:(0,i.jsx)("div",{className:"tb-rss",children:(0,i.jsx)("div",{})}),15:(0,i.jsx)("div",{className:"tb-workplace",children:(0,i.jsx)("div",{})}),18:(0,i.jsx)("div",{className:"tb-instagram-default",children:(0,i.jsx)("div",{})}),19:(0,i.jsx)("div",{className:"tb-yelp",children:(0,i.jsx)("div",{})}),20:(0,i.jsx)("div",{className:"tb-slack-default",children:a(8)}),21:(0,i.jsx)("div",{className:"tb-yammer",children:(0,i.jsx)("div",{})}),23:(0,i.jsx)("div",{className:"tb-airbnb",children:(0,i.jsx)("div",{})}),25:(0,i.jsx)("div",{className:"tb-soundcloud",children:(0,i.jsx)("div",{})}),26:(0,i.jsx)("div",{className:"tb-giphy-default",children:a(7)}),28:(0,i.jsx)("div",{className:"tb-tiktok-default",children:a(7)}),29:(0,i.jsx)("div",{className:"tb-onsite-upload",children:(0,i.jsx)("div",{})}),30:(0,i.jsx)("div",{className:"tb-vk",children:(0,i.jsx)("div",{})}),31:(0,i.jsx)("div",{className:"tb-tiktok-default",children:a(7)}),32:(0,i.jsx)("div",{className:"tb-vk",children:(0,i.jsx)("div",{})}),33:(0,i.jsx)("div",{className:"tb-trustpilot-default",children:a(2)}),34:(0,i.jsx)("div",{className:"tb-amazon-default",children:a(2)}),35:(0,i.jsx)("div",{className:"tb-tripadvisor",children:(0,i.jsx)("div",{})}),36:(0,i.jsx)("div",{className:"tb-tagembed-default",children:a(3)}),37:(0,i.jsx)("div",{className:"tb-aliexpress-default",children:a(4)}),38:(0,i.jsx)("div",{className:"tb-booking-default",children:a(3)})},o=(0,l.memo)((e=>{let{networkId:t,networkClass:s}=e;const l=`${s} tb__icon tb_ico_default`,a=d[t]||"";return a?(0,i.jsx)("div",{className:l,children:a}):""}));class n extends l.PureComponent{render(){return(0,i.jsx)(o,{...this.props})}}}}]);
//# sourceMappingURL=2450.93a86f4f.chunk.js.map