"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8829,5867,9239,5790],{89239:(t,c,s)=>{s.r(c),s.d(c,{default:()=>d});var i=s(47313),a=s(17739),e=s(98935),o=s(46417);class d extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:c,network:s}=this.props;return(0,o.jsx)("div",{className:c,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(c,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(e.Z,{authorClass:c,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,c,s)=>{s.d(c,{Z:()=>o});var i=s(47313),a=s(46417);const e=t=>{let{username:c,network:s,authorClass:i,errorPic:e}=t;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:e||"https://ui-avatars.com/api/?name=".concat(c.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1"),alt:c,width:45,height:45})},o=(0,i.memo)(e)},97915:(t,c,s)=>{s.d(c,{Z:()=>h});var i=s(47313),a=s(43411),e=s(83773),o=s(6119),d=s(17739),r=s(46417);const l=(0,e.componentWillAppendToBody)((t=>{let{children:c}=t;return c})),n=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n  ").concat(t.product_discount>0&&t.product_price>t.product_discount?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_discount,"</div>"):"","\n  ").concat(t.product_price>0?'<div class="tb_p_tooltip_price">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"","\n  </a>");class _ extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:c}=this.props,{activeMouse:s}=this.state,i=c&&Object.keys(c).length>0?c.wall.ProductSetting.Hotspot:"";return i.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,c)=>{const a=(0,d.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(c),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==c?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:c=>window.open(t.UgcProduct.product_url,"_blank"),children:c+1}),(0,r.jsx)(l,{children:(0,r.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:n(t.UgcProduct)})})]},c)}))}):null}}const h=(0,a.$j)((t=>({appData:t.appData})))(_)},84261:(t,c,s)=>{s.r(c),s.d(c,{default:()=>n});var i=s(47313),a=s(43635),e=s(97915),o=s(2406),d=s(17739),r=s(98501),l=s(46417);class n extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,c)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",c),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:c}=this.props;if(c&&Object.keys(c).length>0&&[2,4,5,3].includes(c.type))if(c.mediaHeight&&""!=c.mediaHeight&&c.mediaWidth&&""!=c.mediaWidth)this.setState({paddingBottom:100*c.mediaHeight/c.mediaWidth});else try{const{width:t,height:s}=await(0,o.Ad)(c.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.onLoad=t=>{const{data:c}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{c.mediaHeight&&""!=c.mediaHeight&&c.mediaWidth&&""!=c.mediaWidth?this.onSetHeightWithWidth(c.mediaWidth,c.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:c,wallID:s,themeID:i,ownerId:o,hotspot:n}=this.props,{imgUrl:_,paddingBottom:h}=this.state,b={paddingBottom:"".concat(h,"%")},v={backgroundImage:"url(".concat(_,")")},p=!!(c.hotspot&&c.ugc_products.length>0&&n);return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(c.id),style:b,children:[p?(0,l.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:p?"":"100%"},children:[p?(0,l.jsx)(e.Z,{product:c.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(c.id),role:"img",src:_,height:300,width:300,"data-link":c.link,"data-load":"0","data-network":c.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":c.id,"data-feed-id":c.feedId?c.feedId:"","data-filter-id":c.filterId,"theme-id":i,onLoad:this.onLoad,onError:c.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,d.P)(_)})]})]})}}},81349:(t,c,s)=>{s.d(c,{Z:()=>o});s(47313);var i=s(35179),a=s(95867),e=s(46417);const o=t=>{const{itemData:c,IconClass:s,isCenter:o,hideVideo:d,show:r}=t,l=3===c.type||5===c.type,n=7===c.network.id,_=!!(c.imageList&&c.imageList.length>0),h=1===c.isAudio,b=!!(c.ugc_products&&c.ugc_products.length>0),v=(0,e.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),p=(0,e.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,e.jsx)("div",{})}),m=(0,e.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,e.jsx)("div",{})}),x=(0,e.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,e.jsx)("div",{})}),j=(0,e.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,e.jsx)("div",{})}),u=(0,e.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,e.jsx)("div",{})}),N=(0,e.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,e.jsx)("div",{})});return r?(0,e.jsxs)(e.Fragment,{children:[o&&(n||l)?(0,e.jsxs)("div",{className:"".concat(s," tb__media_ico_c"),children:[l&&!n?N:"",l&&n?v:""]}):null,b||_||l?(0,e.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[b?u:"",_?p:"",o||!l||n||d?"":h?m:i.ZQ?j:x]}):null]}):null}},95867:(t,c,s)=>{s.r(c),s.d(c,{default:()=>d});var i=s(47313),a=s(35179),e=s(46417);const o=i.memo((t=>{let{network:c,networkClass:s}=t;const i="".concat(s," tb__icon tb_ico_default");switch(c.id){case 1:return(0,e.jsx)("div",{className:"".concat(i," tb-twitter")});case 2:case 18:return(0,e.jsx)("div",{className:"".concat(i," tb-instagram-default"),children:(0,e.jsx)("div",{})});case 3:return(0,e.jsx)("div",{className:"".concat(i," tb-facebook"),children:(0,e.jsx)("div",{})});case 4:return(0,e.jsxs)("div",{className:"".concat(i," tb-google-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,e.jsx)("div",{})})]});case 5:return(0,e.jsx)("div",{className:"".concat(i," tb-pinterest"),children:(0,e.jsx)("div",{})});case 6:return(0,e.jsxs)("div",{className:"".concat(i," tb-flickr-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})})]});case 7:return(0,e.jsxs)("div",{className:"".concat(i," tb-youtube-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})})]});case 8:return(0,e.jsx)("div",{className:"".concat(i," tb-vimeo"),children:(0,e.jsx)("div",{})});case 10:return(0,e.jsx)("div",{className:"".concat(i," tb-linkedin"),children:(0,e.jsx)("div",{})});case 11:return(0,e.jsx)("div",{className:"".concat(i," tb-tumblr"),children:(0,e.jsx)("div",{})});case 12:return(0,e.jsx)("div",{className:"".concat(i," tb-rss"),children:(0,e.jsx)("div",{})});case 15:return(0,e.jsx)("div",{className:"".concat(i," tb-workplace"),children:(0,e.jsx)("div",{})});case 19:return(0,e.jsx)("div",{className:"".concat(i," tb-yelp"),children:(0,e.jsx)("div",{})});case 20:return(0,e.jsxs)("div",{className:"".concat(i," tb-slack-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,e.jsx)("div",{})})]});case 21:return(0,e.jsx)("div",{className:"".concat(i," tb-yammer"),children:(0,e.jsx)("div",{})});case 23:return(0,e.jsx)("div",{className:"".concat(i," tb-airbnb"),children:(0,e.jsx)("div",{})});case 25:return(0,e.jsx)("div",{className:"".concat(i," tb-soundcloud"),children:(0,e.jsx)("div",{})});case 26:return(0,e.jsxs)("div",{className:"".concat(i," tb-giphy-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,e.jsx)("div",{})})]});case 28:return a.ZQ?(0,e.jsxs)("div",{className:"".concat(i," tb-capterra-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,e.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,e.jsx)("div",{})})]});case 29:return a.ZQ?(0,e.jsx)("div",{className:"".concat(i," tb-etsy"),children:(0,e.jsx)("div",{})}):(0,e.jsx)("div",{className:"".concat(i," tb-onsite-upload-default"),children:(0,e.jsx)("div",{})});case 30:case 32:return(0,e.jsx)("div",{className:"".concat(i," tb-vk"),children:(0,e.jsx)("div",{})});case 31:return(0,e.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,e.jsx)("div",{})})]});case 33:return(0,e.jsxs)("div",{className:"".concat(i," tb-trustpilot-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})})]});case 34:return(0,e.jsxs)("div",{className:"".concat(i," tb-amazon-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})})]});case 35:return(0,e.jsx)("div",{className:"".concat(i," tb-tripadvisor"),children:(0,e.jsx)("div",{})});case 36:return(0,e.jsxs)("div",{className:"".concat(i," tb-tagembed-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})})]});case 37:return(0,e.jsxs)("div",{className:"".concat(i," tb-aliexpress-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,e.jsx)("div",{})})]});default:return""}}));class d extends i.PureComponent{render(){return(0,e.jsx)(o,{...this.props})}}},25810:(t,c,s)=>{s.r(c),s.d(c,{default:()=>d});var i=s(47313),a=s(35179),e=s(46417);const o=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class d extends i.PureComponent{render(){const{network:t,networkClass:c,ThemeRule:s,isDefault:d,Personalization:r}=this.props,l=!!d&&(7!==t.id&&4!==t.id&&36!==t.id),n=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,e.jsx)("div",{className:"".concat(c," tb__icon tb-").concat(n.replace(/fa-/g,"")),children:(0,e.jsx)("div",{})}):(0,e.jsxs)(i.Suspense,{fallback:(0,e.jsx)(e.Fragment,{}),children:[" ",(0,e.jsx)(o,{network:t,networkClass:c})]})}}},55790:(t,c,s)=>{s.r(c),s.d(c,{default:()=>d});var i=s(47313),a=s(17739),e=s(46417);const o=t=>{const{postTime:c,timeClass:s}=t;return(0,e.jsx)("div",{className:s,children:(0,a.Sy)(c)})},d=(0,i.memo)(o)}}]);