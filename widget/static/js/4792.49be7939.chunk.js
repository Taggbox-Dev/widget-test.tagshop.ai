"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4792,5867,4576],{84792:(t,e,s)=>{s.r(e),s.d(e,{default:()=>p});var i=s(47313),a=s(35179),c=s(98501),l=s(43411),n=s(43635),o=s(24576),r=s(95867),d=s(46417);class _ extends i.PureComponent{constructor(t){super(t),this.toggleDropdown=()=>{const{activeId:t}=this.state,{reviewFilters:e}=this.props;if(0!=t&&e.length>0){const s=e.filter((e=>e.Network.id==t));s&&s.length>0&&window.open(s[0].Network.link,"_blank")}else this.setState((t=>({isOpen:!this.state.isOpen})))},this.handleClickOutside=t=>{this.dropdownRef.current&&!this.dropdownRef.current.contains(t.target)&&this.setState((t=>({isOpen:!1})))},this.onLoadTotalRating=t=>{let e=0,s=0,i="",a=0,c=this.props.wall.Banner.title_font_color;return t.map((l=>{const n=l.Network;e+=n.averageReviews*n.totalReviews,s+=n.totalReviews,i=t.length>1?"Overall":n.name,a=t.length>1?0:n.id,c=t.length>1?this.props.wall.Banner.title_font_color:n.color})),{network:{name:i,avgRate:isNaN(e/s)?0:(e/s).toFixed(1),totalReviews:s,color:c},activeId:a}},this.totalReviewNetworks=t=>e=>{const{network:s,activeId:i}=this.onLoadTotalRating(t);this.props.changeFilterStatus&&this.props.changeFilterStatus(2);const a=Math.floor(Date.now()/1e3),{appendData:c,wall:l}=this.props;let n=l.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(l.Wall.id,a,n,i,c.after,c.heightEvent,null),this.setState({network:s,activeId:i,networkID:i})},this.getReviewLogo=t=>{switch(t){case"Overall":return"";case"Facebook":return"facebook";case"Google Review":return"google";case"Yelp":return"yelp";case"Etsy":return"etsy";case"Amazon":return"amazon";case"Tripadvisor":return"tripadvisor";case"Review Hub":return a.Jx?"tagbox":"tagembed";case"AliExpress":return"aliexpress";case"Airbnb":return"airbnb";case"Trustpilot Reviews":return"trustpilot";case"UGC Uploader":return"snapup";case"Booking.com":return"booking"}},this.state={networkID:null,isOpen:!1,activeId:0,network:{name:"",avgRate:0,totalReviews:0,color:this.props.wall.Banner.title_font_color}},this.dropdownRef=i.createRef()}componentDidMount(){document.addEventListener("click",this.handleClickOutside);const{network:t,activeId:e}=this.onLoadTotalRating(this.props.reviewFilters);this.setState({network:t,activeId:e,networkID:e})}componentWillUnmount(){document.removeEventListener("click",this.handleClickOutside)}render(){const{reviewFilters:t,wall:e,languageSetting:s}=this.props,{isOpen:i,network:l,activeId:n}=this.state,_={color:e.Banner.subTitle_font_color,fontFamily:e.Banner.subtitle_css_font,fontSize:e.Banner.subTitle_font_size},v={color:e.Banner.title_font_color,fontFamily:e.Banner.title_css_font,fontSize:e.Banner.title_font_size},h=a.Jx?{backgroundColor:e.Banner.background_color_two,..._}:{backgroundColor:e.Banner.background_color_two,color:"#fff"};return(0,d.jsx)("div",{className:"tb_rv_container",style:{padding:e.Personalization.padding/2},children:(0,d.jsxs)("div",{className:"tb_rv_wrapper",style:{borderRadius:e.ThemeRule.radius,backgroundColor:e.Banner.background_color},children:[t&&t.length>1?(0,d.jsx)("div",{className:"tb_rv_scrollable",children:(0,d.jsx)("div",{className:"tb_rv_filter_wrap",children:(0,d.jsxs)("div",{className:"tb_rv_filter_wrap_in",children:[Object.keys(t).length>0?(0,d.jsx)("div",{className:"tb_fil_soc_btn".concat(0==n?" tb_fil_active":""),onClick:this.totalReviewNetworks(t),children:(0,d.jsx)("div",{className:"tb_fil_btn_txt",children:s.filterButton})}):null,Object.keys(t).length>0&&t.map(((t,e)=>{const s=t.Network;return(0,d.jsx)("div",{className:"tb_fil_soc_btn".concat(n==s.id?" tb_fil_active":""),onClick:this.totalReviewNetworks([t]),children:(0,d.jsx)(r.default,{network:s,networkClass:"tb_review_filter_ico"})},e)}))]})})}):null,(0,d.jsxs)("div",{className:"tb_rv_banner_wrap",style:{minHeight:e.Banner.banner_height},children:[(0,d.jsxs)("div",{className:"tb_rv_rating",children:[(0,d.jsxs)("div",{className:"tb_rv_head_text",children:["Overall"!=l.name?(0,d.jsx)("div",{className:"tb_rv_head_logo",children:(0,d.jsx)("img",{className:"tb_rv_head_log_img","data-name":this.getReviewLogo(l.name),src:"".concat(c.do,"/media/review-logo/").concat(this.getReviewLogo(l.name),".svg"),height:40,width:50,style:{marginTop:"Trustpilot Reviews"==l.name?-6:""}})}):null,(0,d.jsx)("div",{className:"tb_rv_head_r_text ".concat(a.Jx?"tb-cTBfont-".concat(e.Banner.title_font_varient):""),style:a.Jx?v:{},children:"Overall"==l.name?"Overall Rating":"Rating"})]}),(0,d.jsxs)("div",{className:"tb_rv_rating_wrap",children:[(0,d.jsx)("div",{className:"tb_rv_review_count ".concat(a.Jx?"tb-cTBfont-".concat(e.Banner.title_font_varient):""),style:a.Jx?v:{color:e.Banner.subTitle_font_color},children:l.avgRate}),(0,d.jsx)("div",{className:"tb_rv_rview_star",children:(0,d.jsx)(o.default,{size:!1,rating:l.avgRate})}),(0,d.jsxs)("div",{className:"tb_rv_review_total_post tb-cTBfont-".concat(a.Jx?e.Banner.title_font_varient:e.Banner.subtitle_font_varient),style:a.Jx?v:_,children:[l.totalReviews," reviews"]})]})]}),(0,d.jsxs)("div",{className:"tb_rv_banner_btn_wrap",ref:this.dropdownRef,children:[(0,d.jsx)("div",{className:"tb_rv_banner_btn tb-cTBfont-".concat(a.Jx?e.Banner.subtitle_font_varient:""),onClick:this.toggleDropdown,style:h,children:"Write a Review"}),i&&(0,d.jsxs)("div",{className:"tb_rv_dropdown_ ".concat(i?"tb_rv_dd_show":""),children:[(0,d.jsx)("div",{className:"tb_rv_dropdown_title",children:"Where do you want to leave a review?"}),Object.keys(t).length>0&&t.map(((t,e)=>{const s=t.Network;return(0,d.jsxs)("div",{className:"tb_rv_dropdown_list",onClick:t=>s.link?window.open(s.link,"_blank"):null,children:[(0,d.jsx)(r.default,{network:s,networkClass:"tb_rv_dd_ico"}),s.name&&String(s.name).includes("Google")?"Google":String(s.name).includes("UGC Upload")?"SnapUp":s.name]},e)}))]})]})]})]})})}}const v=(0,l.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,i,a,c,l,o)=>t((0,n.GG)(e,s,i,a,c,l,o))})))(_);class h extends i.PureComponent{constructor(t){var e,s,i;super(t),this.state={network:{name:"",avgRate:0,totalReviews:0,color:null===(e=this.props)||void 0===e||null===(s=e.wall)||void 0===s||null===(i=s.Banner)||void 0===i?void 0:i.title_font_color}}}render(){var t,e,s,i,c,l,n,r,_,v;const{reviewFilters:h,wall:b}=this.props,x=(null===b||void 0===b||null===(t=b.Banner)||void 0===t||t.title_font_color,null===b||void 0===b||null===(e=b.Banner)||void 0===e||e.title_css_font,null===b||void 0===b||null===(s=b.Banner)||void 0===s||s.title_font_size,null===b||void 0===b||null===(i=b.Banner)||void 0===i||i.background_color_two,(null===b||void 0===b||null===(c=b.UserRule)||void 0===c?void 0:c.on_site_upload)&&b.UgcSettings.onsite_status&&(a.ig||b.UgcSettings.onsite_button_status));return(0,d.jsxs)("div",{className:"tb_m_container",children:[(0,d.jsx)("div",{className:"tb_m_title tb-cTBfont-".concat(null===b||void 0===b||null===(l=b.UgcSettings)||void 0===l?void 0:l.headerFontVariant),children:b.UgcSettings.headingText}),(0,d.jsxs)("div",{className:"tb_m_wrapper",children:[(0,d.jsx)("div",{className:"tb_m_rating",children:(0,d.jsxs)("div",{className:"tb_m_rating_wrap",children:[(0,d.jsxs)("div",{className:"tb_m_avg",children:[(0,d.jsx)("div",{className:"tb_m_rview_star",children:(0,d.jsx)(o.default,{size:20,rating:parseFloat(null===h||void 0===h||null===(n=h.reviewDetails)||void 0===n?void 0:n.avgRating)})}),(0,d.jsxs)("div",{className:"tb_m_review_total_post",children:[null===h||void 0===h||null===(r=h.reviewDetails)||void 0===r?void 0:r.avgRating," out of 5"]})]}),(0,d.jsxs)("div",{className:"tb_m_total",children:["Based on ",null===h||void 0===h||null===(_=h.reviewDetails)||void 0===_?void 0:_.totalReviewGiven," reviews"]})]})}),x?(0,d.jsx)("div",{className:"tb_m_banner_btn_wrap",ref:this.dropdownRef,children:(0,d.jsx)("div",{className:"tb_m_banner_btn tb-cTBfont-".concat(null===b||void 0===b||null===(v=b.UgcSettings)||void 0===v?void 0:v.buttonFontWeight),onClick:()=>this.props.onSitePopup(!0),children:b.UgcSettings.buttonText})}):null]})]})}}const b=(0,l.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,i,a,c,l,o)=>t((0,n.GG)(e,s,i,a,c,l,o)),onSitePopup:e=>t((0,n.wg)(e))})))(h),x=(t,e)=>{try{return(t/e*100).toFixed(2)}catch(s){return 0}};class j extends i.PureComponent{constructor(t){var e,s,i;super(t),this.state={network:{name:"",avgRate:0,totalReviews:0,color:null===(e=this.props)||void 0===e||null===(s=e.wall)||void 0===s||null===(i=s.Banner)||void 0===i?void 0:i.title_font_color}}}render(){var t,e,s,i,c,l;const{reviewFilters:n,wall:r}=this.props,_=(null===r||void 0===r||null===(t=r.UserRule)||void 0===t?void 0:t.on_site_upload)&&r.UgcSettings.onsite_status&&(a.ig||r.UgcSettings.onsite_button_status);return(0,d.jsxs)("div",{className:"tb_c_container",children:[(0,d.jsx)("div",{className:"tb_c_title tb-cTBfont-".concat(null===r||void 0===r||null===(e=r.UgcSettings)||void 0===e?void 0:e.headerFontVariant),children:r.UgcSettings.headingText}),(0,d.jsxs)("div",{className:"tb_c_wrapper",children:[(0,d.jsx)("div",{className:"tb_c_rating",children:(0,d.jsxs)("div",{className:"tb_c_rating_wrap",children:[(0,d.jsxs)("div",{className:"tb_c_avg",children:[(0,d.jsx)("div",{className:"tb_c_rview_star",children:(0,d.jsx)(o.default,{size:20,rating:parseFloat(null===n||void 0===n||null===(s=n.reviewDetails)||void 0===s?void 0:s.avgRating)})}),(0,d.jsxs)("div",{className:"tb_c_review_total_post",children:[null===n||void 0===n||null===(i=n.reviewDetails)||void 0===i?void 0:i.avgRating," out of 5"]})]}),(0,d.jsxs)("div",{className:"tb_c_total",children:["Based on ",null===n||void 0===n||null===(c=n.reviewDetails)||void 0===c?void 0:c.totalReviewGiven," reviews"]})]})}),(0,d.jsx)("div",{className:"tb_c_avg_st",children:null===n||void 0===n?void 0:n.reviewList.map(((t,e)=>{var s;return(0,d.jsxs)("div",{className:"tb_c_avg_list",children:[(0,d.jsx)(o.default,{size:16,rating:t.rating}),(0,d.jsx)("div",{className:"tb_c_bar",children:(0,d.jsx)("div",{className:"tb_c_bar_active",style:{width:"".concat(x(t.count,null===n||void 0===n||null===(s=n.reviewDetails)||void 0===s?void 0:s.totalReviewGiven),"%")},children:(0,d.jsx)("div",{})})}),(0,d.jsx)("div",{className:"tb_c_rate_count",children:t.count})]},"rating_".concat(e))}))}),_?(0,d.jsx)("div",{className:"tb_c_banner_btn_wrap",ref:this.dropdownRef,children:(0,d.jsx)("div",{className:"tb_c_banner_btn tb-cTBfont-".concat(null===r||void 0===r||null===(l=r.UgcSettings)||void 0===l?void 0:l.buttonFontWeight),onClick:()=>this.props.onSitePopup(!0),children:r.UgcSettings.buttonText})}):null]})]})}}const u=(0,l.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,i,a,c,l,o)=>t((0,n.GG)(e,s,i,a,c,l,o)),onSitePopup:e=>t((0,n.wg)(e))})))(j);class m extends i.PureComponent{constructor(t){super(t),this.state={networkID:null,isOpen:!1,activeId:0},this.dropdownRef=i.createRef()}render(){const{reviewFilters:t,wall:e,languageSetting:s,isHeader:i}=this.props,{isOpen:a,network:c,activeId:l}=this.state;return i?(0,d.jsx)(d.Fragment,{children:1==e.Personalization.themeHeader?(0,d.jsx)(b,{...this.props}):2==e.Personalization.themeHeader?(0,d.jsx)(u,{...this.props}):null}):(0,d.jsx)(v,{...this.props})}}const p=m},24576:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var i=s(46417);const a=(t,e,s)=>(0,i.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:"#F8B90C",fontSize:s},children:(0,i.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{color:t,width:10*e+"%",fontSize:s},children:[(0,i.jsx)("div",{})," "]})}),c=t=>{let{rating:e,size:s}=t;const c=e>5?5:e,l=Math.trunc(5-c),n=Math.trunc(c),o=String(c).split(".")[1];return(0,i.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[n?[...Array(n)].map(((t,e)=>(0,i.jsx)("div",{"data-index":e,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:"#F8B90C",fontSize:s},children:(0,i.jsx)("div",{})},e))):null,o>0?a("#F8B90C",o,s):null,l?[...Array(l)].map(((t,e)=>(0,i.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:s},children:(0,i.jsx)("div",{})},e))):null]})}},95867:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(35179),c=s(46417);const l=i.memo((t=>{let{network:e,networkClass:s}=t;const i="".concat(s," tb__icon tb_ico_default");switch(e.id){case 1:return(0,c.jsx)("div",{className:"".concat(i," tb-twitter")});case 2:case 18:return(0,c.jsx)("div",{className:"".concat(i," tb-instagram-default"),children:(0,c.jsx)("div",{})});case 3:return(0,c.jsx)("div",{className:"".concat(i," tb-facebook"),children:(0,c.jsx)("div",{})});case 4:return(0,c.jsxs)("div",{className:"".concat(i," tb-google-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});case 5:return(0,c.jsx)("div",{className:"".concat(i," tb-pinterest"),children:(0,c.jsx)("div",{})});case 6:return(0,c.jsxs)("div",{className:"".concat(i," tb-flickr-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 7:return(0,c.jsxs)("div",{className:"".concat(i," tb-youtube-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 8:return(0,c.jsx)("div",{className:"".concat(i," tb-vimeo"),children:(0,c.jsx)("div",{})});case 10:return(0,c.jsx)("div",{className:"".concat(i," tb-linkedin"),children:(0,c.jsx)("div",{})});case 11:return(0,c.jsx)("div",{className:"".concat(i," tb-tumblr"),children:(0,c.jsx)("div",{})});case 12:return(0,c.jsx)("div",{className:"".concat(i," tb-rss"),children:(0,c.jsx)("div",{})});case 15:return(0,c.jsx)("div",{className:"".concat(i," tb-workplace"),children:(0,c.jsx)("div",{})});case 19:return(0,c.jsx)("div",{className:"".concat(i," tb-yelp"),children:(0,c.jsx)("div",{})});case 20:return(0,c.jsxs)("div",{className:"".concat(i," tb-slack-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,c.jsx)("div",{})})]});case 21:return(0,c.jsx)("div",{className:"".concat(i," tb-yammer"),children:(0,c.jsx)("div",{})});case 23:return(0,c.jsx)("div",{className:"".concat(i," tb-airbnb"),children:(0,c.jsx)("div",{})});case 25:return(0,c.jsx)("div",{className:"".concat(i," tb-soundcloud"),children:(0,c.jsx)("div",{})});case 26:return(0,c.jsxs)("div",{className:"".concat(i," tb-giphy-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 28:return a.ZQ?(0,c.jsxs)("div",{className:"".concat(i," tb-capterra-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,c.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 29:return a.ZQ?(0,c.jsx)("div",{className:"".concat(i," tb-etsy"),children:(0,c.jsx)("div",{})}):(0,c.jsx)("div",{className:"".concat(i," tb-onsite-upload"),children:(0,c.jsx)("div",{})});case 30:case 32:return(0,c.jsx)("div",{className:"".concat(i," tb-vk"),children:(0,c.jsx)("div",{})});case 31:return(0,c.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 33:return(0,c.jsxs)("div",{className:"".concat(i," tb-trustpilot-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 34:return(0,c.jsxs)("div",{className:"".concat(i," tb-amazon-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 35:return(0,c.jsx)("div",{className:"".concat(i," tb-tripadvisor"),children:(0,c.jsx)("div",{})});case 36:return(0,c.jsxs)("div",{className:"".concat(i," tb-tagembed-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})})]});case 37:return(0,c.jsxs)("div",{className:"".concat(i," tb-aliexpress-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});case 38:return(0,c.jsxs)("div",{className:"".concat(i," tb-booking-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})})]});default:return""}}));class n extends i.PureComponent{render(){return(0,c.jsx)(l,{...this.props})}}}}]);