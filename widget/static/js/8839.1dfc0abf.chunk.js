"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8839,1088,6755],{88839:(t,e,s)=>{s.r(e),s.d(e,{default:()=>v});var i=s(72791),c=s(70188),a=s(77581),r=s(11225),l=s(96755),o=s(41088),n=s(46535),d=s(80184);class _ extends i.PureComponent{constructor(t){super(t),this.toggleDropdown=()=>{const{activeId:t}=this.state,{reviewFilters:e}=this.props;if(0!=t&&e.length>0){const s=e.filter((e=>e.Network.id==t));s&&s.length>0&&window.open(s[0].Network.link,"_blank")}else this.setState((t=>({isOpen:!this.state.isOpen})))},this.handleClickOutside=t=>{this.dropdownRef.current&&!this.dropdownRef.current.contains(t.target)&&this.setState((t=>({isOpen:!1})))},this.onLoadTotalRating=t=>{let e=0,s=0,i="",c=0,a=this.props.wall.Banner.title_font_color;return t.map((r=>{const l=r.Network;e+=l.averageReviews*l.totalReviews,s+=l.totalReviews,i=t.length>1?"Overall":l.name,c=t.length>1?0:l.id,a=t.length>1?this.props.wall.Banner.title_font_color:l.color})),{network:{name:i,avgRate:isNaN(e/s)?0:(e/s).toFixed(1),totalReviews:s,color:a},activeId:c}},this.totalReviewNetworks=t=>e=>{const{network:s,activeId:i}=this.onLoadTotalRating(t);this.props.changeFilterStatus&&this.props.changeFilterStatus(2);const c=Math.floor(Date.now()/1e3),{appendData:a,wall:r}=this.props;let l=r.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(r.Wall.id,c,l,i,a.after,a.heightEvent,null),this.setState({network:s,activeId:i,networkID:i})},this.getReviewLogo=t=>{switch(t){case"Overall":default:return"";case"Facebook":return"facebook";case"Google Review":return"google";case"Yelp":return"yelp";case"Etsy":return"etsy";case"Amazon":return"amazon";case"Tripadvisor":return"tripadvisor";case"Review Hub":return"tagembed";case"AliExpress":return"aliexpress";case"Airbnb":return"airbnb";case"Trustpilot Reviews":return"trustpilot";case"UGC Uploader":return"snapup";case"Booking.com":return"booking"}},this.state={networkID:null,isOpen:!1,activeId:0,network:{name:"",avgRate:0,totalReviews:0,color:this.props.wall.Banner.title_font_color}},this.dropdownRef=i.createRef()}componentDidMount(){document.addEventListener("click",this.handleClickOutside);const{network:t,activeId:e}=this.onLoadTotalRating(this.props.reviewFilters);this.setState({network:t,activeId:e,networkID:e})}componentWillUnmount(){document.removeEventListener("click",this.handleClickOutside)}render(){const{reviewFilters:t,wall:e,languageSetting:s}=this.props,{isOpen:i,network:a,activeId:r}=this.state,_={color:e.Banner.subTitle_font_color,fontFamily:e.Banner.subtitle_css_font,fontSize:e.Banner.subTitle_font_size},v={color:e.Banner.title_font_color,fontFamily:e.Banner.title_css_font,fontSize:e.Banner.title_font_size},b=n.Jx?{backgroundColor:e.Banner.background_color_two,..._}:{backgroundColor:e.Banner.background_color_two,color:"#fff"};return(0,d.jsx)("div",{className:"tb_rv_container",style:{padding:e.Personalization.padding/2},children:(0,d.jsxs)("div",{className:"tb_rv_wrapper",style:{borderRadius:e.ThemeRule.radius,backgroundColor:e.Banner.background_color},children:[t&&t.length>1?(0,d.jsx)("div",{className:"tb_rv_scrollable",children:(0,d.jsx)("div",{className:"tb_rv_filter_wrap",children:(0,d.jsxs)("div",{className:"tb_rv_filter_wrap_in",children:[Object.keys(t).length>0?(0,d.jsx)("div",{className:"tb_fil_soc_btn".concat(0==r?" tb_fil_active":""),onClick:this.totalReviewNetworks(t),children:(0,d.jsx)("div",{className:"tb_fil_btn_txt",children:s.filterButton})}):null,Object.keys(t).length>0&&t.map(((t,e)=>{const s=t.Network;return(0,d.jsx)("div",{className:"tb_fil_soc_btn".concat(r==s.id?" tb_fil_active":""),onClick:this.totalReviewNetworks([t]),children:(0,d.jsx)(o.default,{network:s,networkClass:"tb_review_filter_ico"})},e)}))]})})}):null,(0,d.jsxs)("div",{className:"tb_rv_banner_wrap",style:{minHeight:e.Banner.banner_height},children:[(0,d.jsxs)("div",{className:"tb_rv_rating",children:[(0,d.jsxs)("div",{className:"tb_rv_head_text",children:["Overall"!=a.name?(0,d.jsx)("div",{className:"tb_rv_head_logo",children:(0,d.jsx)("img",{className:"tb_rv_head_log_img","data-name":this.getReviewLogo(a.name),src:"https://cdn.taggbox.com/v7/".concat(c.do,"/media/review-logo/").concat(this.getReviewLogo(a.name),".svg"),height:40,width:50,style:{marginTop:"Trustpilot Reviews"==a.name?-6:""}})}):null,(0,d.jsx)("div",{className:"tb_rv_head_r_text ".concat(n.Jx?"tb-cTBfont-".concat(e.Banner.title_font_varient):""),style:n.Jx?v:{},children:"Overall"==a.name?"Overall Rating":"Rating"})]}),(0,d.jsxs)("div",{className:"tb_rv_rating_wrap",children:[(0,d.jsx)("div",{className:"tb_rv_review_count ".concat(n.Jx?"tb-cTBfont-".concat(e.Banner.title_font_varient):""),style:n.Jx?v:{color:e.Banner.subTitle_font_color},children:a.avgRate}),(0,d.jsx)("div",{className:"tb_rv_rview_star",children:(0,d.jsx)(l.default,{size:!1,rating:a.avgRate})}),(0,d.jsxs)("div",{className:"tb_rv_review_total_post tb-cTBfont-".concat(n.Jx?e.Banner.title_font_varient:e.Banner.subtitle_font_varient),style:n.Jx?v:_,children:[a.totalReviews," reviews"]})]})]}),(0,d.jsxs)("div",{className:"tb_rv_banner_btn_wrap",ref:this.dropdownRef,children:[(0,d.jsx)("div",{className:"tb_rv_banner_btn tb-cTBfont-".concat(n.Jx?e.Banner.subtitle_font_varient:""),onClick:this.toggleDropdown,style:b,children:"Write a Review"}),i&&(0,d.jsxs)("div",{className:"tb_rv_dropdown_ ".concat(i?"tb_rv_dd_show":""),children:[(0,d.jsx)("div",{className:"tb_rv_dropdown_title",children:"Where do you want to leave a review?"}),Object.keys(t).length>0&&t.map(((t,e)=>{const s=t.Network;return(0,d.jsxs)("div",{className:"tb_rv_dropdown_list",onClick:t=>s.link?window.open(s.link,"_blank"):null,children:[(0,d.jsx)(o.default,{network:s,networkClass:"tb_rv_dd_ico"}),s.name&&String(s.name).includes("Google")?"Google":String(s.name).includes("UGC Upload")?"SnapUp":s.name]},e)}))]})]})]})]})})}}const v=(0,a.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,s,i,c,a,l,o)=>t((0,r.GG)(e,s,i,c,a,l,o))})))(_)},96755:(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s(80184);const c=(t,e,s)=>(0,i.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star",style:{fontSize:s},children:(0,i.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star",style:{color:t,width:10*e+"%",fontSize:s},children:[(0,i.jsx)("div",{})," "]})}),a=t=>{let{rating:e,size:s}=t;const a=e>5?5:e,r=Math.trunc(5-a),l=Math.trunc(a),o=String(a).split(".")[1];return(0,i.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[l?[...Array(l)].map(((t,e)=>(0,i.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star",style:{color:"#F8B90C",fontSize:s},children:(0,i.jsx)("div",{})},e))):null,o>0?c("#F8B90C",o,s):null,r?[...Array(r)].map(((t,e)=>(0,i.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star",style:{fontSize:s},children:(0,i.jsx)("div",{})},e))):null]})}},41088:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var i=s(72791),c=s(46535),a=s(80184);const r=i.memo((t=>{let{network:e,networkClass:s}=t;const i="".concat(s," tb__icon tb_ico_default");switch(e.id){case 1:return(0,a.jsx)("div",{className:"".concat(i," tb-twitter")});case 2:case 18:return(0,a.jsx)("div",{className:"".concat(i," tb-instagram-default"),children:(0,a.jsx)("div",{})});case 3:return(0,a.jsx)("div",{className:"".concat(i," tb-facebook"),children:(0,a.jsx)("div",{})});case 4:return(0,a.jsxs)("div",{className:"".concat(i," tb-google-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})})]});case 5:return(0,a.jsx)("div",{className:"".concat(i," tb-pinterest"),children:(0,a.jsx)("div",{})});case 6:return(0,a.jsxs)("div",{className:"".concat(i," tb-flickr-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 7:return(0,a.jsxs)("div",{className:"".concat(i," tb-youtube-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 8:return(0,a.jsx)("div",{className:"".concat(i," tb-vimeo"),children:(0,a.jsx)("div",{})});case 10:return(0,a.jsx)("div",{className:"".concat(i," tb-linkedin"),children:(0,a.jsx)("div",{})});case 11:return(0,a.jsx)("div",{className:"".concat(i," tb-tumblr"),children:(0,a.jsx)("div",{})});case 12:return(0,a.jsx)("div",{className:"".concat(i," tb-rss"),children:(0,a.jsx)("div",{})});case 15:return(0,a.jsx)("div",{className:"".concat(i," tb-workplace"),children:(0,a.jsx)("div",{})});case 19:return(0,a.jsx)("div",{className:"".concat(i," tb-yelp"),children:(0,a.jsx)("div",{})});case 20:return(0,a.jsxs)("div",{className:"".concat(i," tb-slack-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,a.jsx)("div",{})})]});case 21:return(0,a.jsx)("div",{className:"".concat(i," tb-yammer"),children:(0,a.jsx)("div",{})});case 23:return(0,a.jsx)("div",{className:"".concat(i," tb-airbnb"),children:(0,a.jsx)("div",{})});case 25:return(0,a.jsx)("div",{className:"".concat(i," tb-soundcloud"),children:(0,a.jsx)("div",{})});case 26:return(0,a.jsxs)("div",{className:"".concat(i," tb-giphy-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 28:return c.ZQ?(0,a.jsxs)("div",{className:"".concat(i," tb-capterra-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,a.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 29:return c.ZQ?(0,a.jsx)("div",{className:"".concat(i," tb-etsy"),children:(0,a.jsx)("div",{})}):(0,a.jsx)("div",{className:"".concat(i," tb-onsite-upload"),children:(0,a.jsx)("div",{})});case 30:case 32:return(0,a.jsx)("div",{className:"".concat(i," tb-vk"),children:(0,a.jsx)("div",{})});case 31:return(0,a.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 33:return(0,a.jsxs)("div",{className:"".concat(i," tb-trustpilot-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 34:return(0,a.jsxs)("div",{className:"".concat(i," tb-amazon-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 35:return(0,a.jsx)("div",{className:"".concat(i," tb-tripadvisor"),children:(0,a.jsx)("div",{})});case 36:return(0,a.jsxs)("div",{className:"".concat(i," tb-tagembed-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})})]});case 37:return(0,a.jsxs)("div",{className:"".concat(i," tb-aliexpress-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})})]});case 38:return(0,a.jsxs)("div",{className:"".concat(i," tb-booking-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})})]});default:return""}}));class l extends i.PureComponent{render(){return(0,a.jsx)(r,{...this.props})}}}}]);
//# sourceMappingURL=8839.1dfc0abf.chunk.js.map