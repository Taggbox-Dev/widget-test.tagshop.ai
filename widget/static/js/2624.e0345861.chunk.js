"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2624,1088,7234,7668],{97234:(t,c,i)=>{i.r(c),i.d(c,{default:()=>d});var s=i(72791),a=i(2703),e=i(14496),o=i(80184);class d extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:c,network:i}=this.props;return(0,o.jsx)("div",{className:c,style:{overflow:4==i.id?"visible":""},children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(c,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(e.Z,{authorClass:c,username:t.name,network:i,color:null===i.id?"#000":i.color})},Math.random())}}},14496:(t,c,i)=>{i.d(c,{Z:()=>a});i(72791);var s=i(80184);const a=t=>{let{username:c,network:i,authorClass:a}=t;return(0,s.jsx)("img",{className:"".concat(a,"__"),src:"https://ui-avatars.com/api/?name=".concat(c.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":i.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:c,width:44,height:44})}},87641:(t,c,i)=>{i.d(c,{Z:()=>h});var s=i(72791),a=i(77581),e=i(89057),o=i(18947),d=i(2703),r=i(80184);const l=(0,e.componentWillAppendToBody)((t=>{let{children:c}=t;return c})),n=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n  ").concat(t.product_discount>0&&t.product_price>t.product_discount?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_discount,"</div>"):"","\n  ").concat(t.product_price>0?'<div class="tb_p_tooltip_price">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"","\n  </a>");class _ extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:c}=this.props,{activeMouse:i}=this.state,s=c&&Object.keys(c).length>0?c.wall.ProductSetting.Hotspot:"";return s.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,c)=>{const a=(0,d.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(c),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==c?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:c=>window.open(t.UgcProduct.product_url,"_blank"),children:c+1}),(0,r.jsx)(l,{children:(0,r.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:n(t.UgcProduct)})})]},c)}))}):null}}const h=(0,a.$j)((t=>({appData:t.appData})))(_)},37989:(t,c,i)=>{i.d(c,{Z:()=>o});i(72791);var s=i(46535),a=i(41088),e=i(80184);const o=t=>{const{itemData:c,IconClass:i,isCenter:o,show:d}=t,r=3===c.type||5===c.type,l=7===c.network.id,n=!!(c.imageList&&c.imageList.length>0),_=1===c.isAudio,h=!!(c.ugc_products&&c.ugc_products.length>0),b=(0,e.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),v=(0,e.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,e.jsx)("div",{})}),p=(0,e.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,e.jsx)("div",{})}),u=(0,e.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,e.jsx)("div",{})}),m=(0,e.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,e.jsx)("div",{})}),x=(0,e.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,e.jsx)("div",{})}),j=(0,e.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,e.jsx)("div",{})});return d?(0,e.jsxs)(e.Fragment,{children:[o&&(l||r)?(0,e.jsxs)("div",{className:"".concat(i," tb__media_ico_c"),children:[r&&!l?j:"",r&&l?b:""]}):null,h||n||r?(0,e.jsxs)("div",{className:"".concat(i," tb__media_ico_"),children:[h?x:"",n?v:"",o||!r||l?"":_?p:s.ZQ?m:u]}):null]}):null}},40115:(t,c,i)=>{i.r(c),i.d(c,{default:()=>n});var s=i(72791),a=i(11225),e=i(87641),o=i(80413),d=i(2703),r=i(70188),l=i(80184);class n extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,c)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",c),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:c}=this.props;if(c&&Object.keys(c).length>0&&[2,4,5,3].includes(c.type))if(c.mediaHeight&&""!=c.mediaHeight&&c.mediaWidth&&""!=c.mediaWidth)this.setState({paddingBottom:100*c.mediaHeight/c.mediaWidth});else try{const{width:t,height:i}=await(0,o.Ad)(c.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.onLoad=t=>{const{data:c}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{c.mediaHeight&&""!=c.mediaHeight&&c.mediaWidth&&""!=c.mediaWidth?this.onSetHeightWithWidth(c.mediaWidth,c.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:c,wallID:i,themeID:s,ownerId:o,hotspot:n}=this.props,{imgUrl:_,paddingBottom:h}=this.state,b={paddingBottom:"".concat(h,"%")},v={backgroundImage:"url(".concat(_,")")},p=!!(c.hotspot&&c.ugc_products.length>0&&n);return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(c.id),style:b,children:[p?(0,l.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:p?"":"100%"},children:[p?(0,l.jsx)(e.Z,{product:c.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(c.id),role:"img",src:_,height:300,width:300,"data-link":c.link,"data-load":"0","data-network":c.network.id,"data-wall-id":i,"data-owner-id":o,"data-item-id":c.id,"data-feed-id":c.feedId?c.feedId:"","data-filter-id":c.filterId,"theme-id":s,onLoad:this.onLoad,onError:c.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,d.P)(_)})]})]})}}},41088:(t,c,i)=>{i.r(c),i.d(c,{default:()=>d});var s=i(72791),a=i(46535),e=i(80184);const o=s.memo((t=>{let{network:c,networkClass:i}=t;switch(c.id){case 1:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-twitter")});case 2:case 18:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-instagram-default"),children:(0,e.jsx)("div",{})});case 3:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-facebook"),children:(0,e.jsx)("div",{})});case 4:return(0,e.jsxs)("div",{className:"".concat(i," tb__icon tb-google-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,e.jsx)("div",{})})]});case 5:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-pinterest"),children:(0,e.jsx)("div",{})});case 6:return(0,e.jsxs)("div",{className:"".concat(i," tb__icon tb-flickr-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})})]});case 7:return(0,e.jsxs)("div",{className:"".concat(i," tb__icon tb-youtube-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})})]});case 8:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-vimeo"),children:(0,e.jsx)("div",{})});case 10:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-linkedin"),children:(0,e.jsx)("div",{})});case 11:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-tumblr"),children:(0,e.jsx)("div",{})});case 12:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-rss"),children:(0,e.jsx)("div",{})});case 15:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-workplace"),children:(0,e.jsx)("div",{})});case 19:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-yelp"),children:(0,e.jsx)("div",{})});case 20:return(0,e.jsxs)("div",{className:"".concat(i," tb__icon tb-slack-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,e.jsx)("div",{})})]});case 21:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-yammer"),children:(0,e.jsx)("div",{})});case 23:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-airbnb"),children:(0,e.jsx)("div",{})});case 25:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-soundcloud"),children:(0,e.jsx)("div",{})});case 26:return(0,e.jsxs)("div",{className:"".concat(i," tb__icon tb-giphy-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,e.jsx)("div",{})})]});case 28:return a.ZQ?(0,e.jsxs)("div",{className:"".concat(i," tb__icon tb-capterra-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,e.jsxs)("div",{className:"".concat(i," tb__icon tb-tiktok-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,e.jsx)("div",{})})]});case 29:return a.ZQ?(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-etsy"),children:(0,e.jsx)("div",{})}):(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-onsite-upload-default"),children:(0,e.jsx)("div",{})});case 30:case 32:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-vk"),children:(0,e.jsx)("div",{})});case 31:return(0,e.jsxs)("div",{className:"".concat(i," tb__icon tb-tiktok-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,e.jsx)("div",{})})]});case 33:return(0,e.jsxs)("div",{className:"".concat(i," tb__icon tb-trustpilot-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})})]});case 34:return(0,e.jsxs)("div",{className:"".concat(i," tb__icon tb-amazon-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})})]});case 35:return(0,e.jsx)("div",{className:"".concat(i," tb__icon tb-tripadvisor"),children:(0,e.jsx)("div",{})});case 36:return(0,e.jsxs)("div",{className:"".concat(i," tb__icon tb-tagembed-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})})]});case 37:return(0,e.jsxs)("div",{className:"".concat(i," tb__icon tb-aliexpress-default"),children:[(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,e.jsx)("div",{})}),(0,e.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,e.jsx)("div",{})})]});default:return""}}));class d extends s.PureComponent{render(){return(0,e.jsx)(o,{...this.props})}}},70757:(t,c,i)=>{i.r(c),i.d(c,{default:()=>r});var s=i(72791),a=i(46535),e=i(2703),o=i(80184);const d=s.lazy((()=>i.e(1088).then(i.bind(i,41088))));class r extends s.PureComponent{render(){const{network:t,networkClass:c,ThemeRule:i,isDefault:r,Personalization:l}=this.props,n=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),_=a.ZQ&&36==t.id?"tagembed":t.icon;var h=[61,16,53,4,50,55].includes(parseInt(null===l||void 0===l?void 0:l.widgetTheme))?1==i.postHover?(0,e.uu)(i.iconColor,"#000000"):(0,e.uu)(i.iconColor,"#ffffff"):i.iconColor;const b=(0,e.mD)(59)?null:a.ig?a.Jc?(0,e.uu)(i.iconColor,i.cardColor):h:i.iconColor;return n?(0,o.jsx)("div",{className:"".concat(c," tb__icon tb-").concat(_.replace(/fa-/g,"")),style:{color:b},children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(d,{network:t,networkClass:c})]})}}},27668:(t,c,i)=>{i.r(c),i.d(c,{default:()=>d});var s=i(72791),a=i(2703),e=i(80184);const o=t=>{const{postTime:c,timeClass:i}=t;return(0,e.jsx)("div",{className:i,children:(0,a.Sy)(c)})},d=(0,s.memo)(o)}}]);
//# sourceMappingURL=2624.e0345861.chunk.js.map