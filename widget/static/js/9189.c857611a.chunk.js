(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9189,1088,7033,7234,7668],{97234:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(72791),a=s(2703),c=s(14496),o=s(80184);class n extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,o.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(c.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});s(72791);var i=s(80184);const a=t=>{let{username:e,network:s,authorClass:a}=t;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},87641:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var i=s(72791),a=s(89057),c=s(18947),o=s(80184);const n=(0,a.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),r=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_pro_title">').concat(t.product_title,'</div>\n  <div class="tb_pro_price tb_price_disabled">').concat(t.price_currency_symbol).concat(t.product_discount,'</div>\n  <div class="tb_pro_price">').concat(t.price_currency_symbol).concat(t.product_price,"</div>\n  </a>"),l=t=>{let{product:e,hotspotStyle:s}=t;const[a,l]=(0,i.useState)(null);return s?(0,o.jsx)("div",{className:"tb_hotspot_wrap",children:e.map(((t,e)=>(0,o.jsxs)("a",{href:t.product_url,target:"_blank",id:"tb_hotspot-".concat(t.id),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>l(e),onMouseOut:t=>l(null),className:"tb_hotspot_dot".concat(a==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,o.jsx)("div",{className:"tb_hotspot__ ".concat(s.hotspot_type?"":"tb_hotspot_ani__"),children:s.hotspot_type?e+1:""}),(0,o.jsx)(n,{children:(0,o.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id),clickable:!0,html:r(t.UgcProduct)})})]},e)))}):null}},40115:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var i=s(72791),a=s(11225),c=s(87641),o=s(80413),n=s(2703),r=s(70188),l=s(80184);class d extends i.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:s}=this.state;if(e&&Object.keys(e).length>0&&[4,2,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(i){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:o,hotspot:d}=this.props,{imgUrl:_,paddingBottom:h}=this.state,p={paddingBottom:"".concat(h,"%")},b={backgroundImage:"url(".concat(_,")")},m=!!(e.hotspot&&e.ugc_products.length>0&&d);return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:p,children:[m?(0,l.jsx)("div",{className:"tb_blur_bg_",style:b}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:m?"":"100%"},children:[m?(0,l.jsx)(c.Z,{product:e.ugc_products,hotspotStyle:e.ugc_personalizaion.UgcSetting}):null,(0,l.jsx)("img",{className:"".concat(t),role:"img",src:_,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,n.P)(_)})]})]})}}},37989:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});s(72791);var i=s(46535),a=s(41088),c=s(80184);const o=t=>{const{itemData:e,IconClass:s,network:o,video:n,multiple:r,shoppable:l}=t,d=3===e.type||5===e.type,_=7===e.network.id,h=!!(e.imageList&&e.imageList.length>0),p=1===e.isAudio,b=!!(e.ugc_products&&e.ugc_products.length>0),m=(0,c.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),u=(0,c.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,c.jsx)("div",{})}),x=(0,c.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,c.jsx)("div",{})}),v=(0,c.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,c.jsx)("div",{})}),j=(0,c.jsx)("div",{className:"tb_shop_ico tb__icon tb-shopping-bag",children:(0,c.jsx)("div",{})}),g=(0,c.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,c.jsx)("div",{})});return h||d?(0,c.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[b?j:"",h?u:"",d&&!_&&i.ZQ?g:"",d?_?m:p?x:i.ZQ?g:v:""]}):null}},41088:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(72791),a=s(46535),c=s(80184);const o=i.memo((t=>{let{network:e,networkClass:s}=t;switch(e.id){case 1:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-twitter")});case 2:case 18:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-instagram-default"),children:(0,c.jsx)("div",{})});case 3:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-facebook"),children:(0,c.jsx)("div",{})});case 4:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-google-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});case 5:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-pinterest"),children:(0,c.jsx)("div",{})});case 6:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-flickr-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 7:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-youtube-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 8:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-vimeo"),children:(0,c.jsx)("div",{})});case 10:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-linkedin"),children:(0,c.jsx)("div",{})});case 11:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-tumblr"),children:(0,c.jsx)("div",{})});case 12:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-rss"),children:(0,c.jsx)("div",{})});case 15:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-workplace"),children:(0,c.jsx)("div",{})});case 19:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-yelp"),children:(0,c.jsx)("div",{})});case 20:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-slack-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,c.jsx)("div",{})})]});case 21:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-yammer"),children:(0,c.jsx)("div",{})});case 23:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-airbnb"),children:(0,c.jsx)("div",{})});case 25:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-soundcloud"),children:(0,c.jsx)("div",{})});case 26:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-giphy-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 28:return a.ZQ?(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-capterra-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 29:return a.ZQ?(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-etsy"),children:(0,c.jsx)("div",{})}):(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-onsite-upload-default"),children:(0,c.jsx)("div",{})});case 30:case 32:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-vk"),children:(0,c.jsx)("div",{})});case 31:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 33:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-trustpilot-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 34:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-amazon-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 35:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-tripadvisor"),children:(0,c.jsx)("div",{})});case 36:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-tagembed-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})})]});case 37:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-aliexpress-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});default:return""}}));class n extends i.PureComponent{render(){return(0,c.jsx)(o,{...this.props})}}},70757:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(72791),a=s(46535),c=s(2703),o=s(80184);const n=i.lazy((()=>s.e(1088).then(s.bind(s,41088))));class r extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:r}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:(0,c.mD)(59)?null:s.iconColor},children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},23450:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(72791),a=s(34867),c=s(2703),o=(s(46535),s(70757),s(80184));const n=i.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class r extends i.PureComponent{constructor(t){super(t),this.toggleExpanded=t=>{this.setState({expanded:!this.state.expanded}),t.stopPropagation()},this.state={expanded:!1}}render(){const{contentClass:t,content:e,ThemeRule:s,font:r,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:p,textAlign:b,isNetwork:m}=this.props,{expanded:u}=this.state,x={textAlign:b||s.textAlignment};let v=20==d.network.id?e:(0,c.Fx)(e);12==d.network.id&&(v=(0,a.ZP)(v));const j=h?u?v:v.slice(0,p):v,g="".concat(t).concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):"").concat(s.font_varient?" tb-cTBfont-".concat(s.font_varient):"");return(0,o.jsxs)("div",{className:g,style:x,children:[_?(0,o.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{data:d,content:j,Personalization:l})]}),h&&v.length>p&&(0,o.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:u?"...Read Less...":"...Read More..."})]})}}},20169:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(72791),a=s(11225),c=s(46535),o=s(80184);class n extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:i,ownerId:o}=this.props;e.stopPropagation(),c.ZQ||(0,a.S5)({type:2,action:2,wall:i,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:o}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,o.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(c.ZQ?"tb-share-fill":"tb-share"),children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,o.jsx)("div",{})})}):"",t.twitter?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,o.jsx)("div",{})})}):"",t.linkedin?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,o.jsx)("div",{})})}):""]})]})}}},27668:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(72791),a=s(2703),c=s(80184);const o=t=>{const{postTime:e,timeClass:s}=t,o=(0,i.useMemo)((()=>(0,a.Sy)(e)),[]);return(0,c.jsx)("div",{className:s,children:o})},n=(0,i.memo)(o)},30182:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>f});var i=s(72791),a=s(39852),c=s.n(a),o=s(97234),n=s(27668),r=s(80184);const l=t=>{let{author:e,personalization:s,postTime:i,network:a,ThemeRule:c,ownerId:l}=t;const d=e.username&&e.username.length>0?"@".concat(e.username):"",_=!(!s.postAuthor||e.isInstaUser),h=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,r.jsx)("div",{className:"tb_gp_author_wrapper",children:(0,r.jsxs)("div",{className:"tb_gp_author",children:[_?(0,r.jsx)(o.default,{author:e,authorClass:"tb_gp_author_profile",network:a}):"",(0,r.jsxs)("div",{className:"tb_gp_author_info",children:[_?(0,r.jsx)("div",{className:"tb_gp_authorname",children:e.name}):"",(0,r.jsxs)("div",{className:"tb_gp_post_info".concat(h?"":" tb_gp_post_info__"),children:[_?(0,r.jsx)("div",{className:"tb_gp_username",children:d}):"",h?(0,r.jsx)("div",{className:"tb_gp_seprator",children:" "}):"",s.postTime?(0,r.jsx)(n.default,{postTime:i,timeClass:"tb_gp_time tb-cTBfont-".concat(c.font_varient),authorColor:c.authorColor}):""]})]})]})})};var d=s(20169),_=s(40115),h=s(37989);class p extends i.PureComponent{render(){const{itemData:t,wallID:e,themeID:s,ownerId:i}=this.props;return(0,r.jsxs)("div",{className:"tb_gp_media_wrap",children:[(0,r.jsx)(h.Z,{itemData:t,IconClass:"tb_gp_media_icon",position:1}),(0,r.jsx)(_.Z,{ImageClass:"tb_gp_image",data:t,wallID:e,themeID:s,ownerId:i,size:100})]})}}var b=s(23450),m=s(70757),u=s(2703),x=s(46535);class v extends i.PureComponent{constructor(t){super(t),this.cardSize=i.createRef()}componentDidMount(){const t=document.querySelector(".tb_gp_post_container");setTimeout((()=>{this.cardSize.current.offsetWidth<250&&t.classList.add("tb_gp_post_wrapper2x"),this.cardSize.current.offsetWidth<120&&t.classList.add("tb_gp_post_wrapper1x"),x.nX&&(0,u.YN)(this.cardSize)}),100)}render(){const{itemData:t,personalization:e,adjustWidth:s,ThemeRule:i,clickToShowPopUp:a,itemIndex:c,wallID:o,ownerId:n,onClickToCTA:_}=this.props,h={backgroundColor:x.ZQ?null:i.cardColor},u={width:"".concat(s,"%"),padding:e.padding/2},v=2===t.type||3===t.type||4===t.type||5===t.type,j=7===t.network.id;return(0,r.jsx)("div",{id:"tb-gp-post-".concat(t.id),"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,className:"tb_gp_post_wrapper ".concat(x.ZQ?"tb_gp_post_wrapper_te":""),style:u,"tb-network":t.network.id,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(c)+1,",").concat(t.content),ref:this.cardSize,children:(0,r.jsx)("div",{className:"tb_gp_post_in",onClick:a(c,t),children:(0,r.jsxs)("div",{className:"tb_gp_post_media_wrapp",children:[t.share.status?(0,r.jsx)(d.Z,{share:t.share,shareClass:"tb_gp_share_container",item:t,wallID:o,ownerId:n}):null,v?(0,r.jsx)(p,{itemData:t,wallID:o,themeID:e.widgetTheme,ownerId:n},"img_gly_".concat(t.id)):"",x.ZQ||!j?(0,r.jsx)("div",{className:"tb_gp_contant_".concat(x.ZQ?" tb_gp_hover_content_":""),children:(0,r.jsxs)("div",{className:"tb_gp_contant__in",children:[(0,r.jsxs)("div",{className:"tb_gp_content__",children:[(0,r.jsx)(l,{adjustWidth:s,postTime:t.createdAt,network:t.network,ownerId:n,author:t.author,font:i,personalization:e,ThemeRule:i}),i.hideContent&&1!=t.type?"":(0,r.jsx)(b.default,{item:t,contentClass:"tb_gp_content",content:t.content,font:i,ThemeRule:i,personalization:e,contentTitle:t.contentTitle})]}),(0,r.jsx)("div",{className:"tb_gp_post_overlay",style:h,children:(0,r.jsx)("div",{})})]})}):"",(0,r.jsx)("div",{className:"tb_gp_social_",children:x.ZQ||!j?(0,r.jsx)(m.default,{networkClass:"tb_gp_social__ico",network:t.network,isDefault:1===i.iconType,ThemeRule:i}):""})]})})})}}var j=s(77581),g=s(11225);class N extends i.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth,containerWidth:0,loadData:0},this.onLoadMasonry=()=>{var t=document.querySelector(".tb_gp_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}},this.calculationData=(t,e,s,i)=>t>i&&t>i+s?{totalPostBestFit:i+s,isLastRow:!0}:{totalPostBestFit:i,isLastRow:!1}}componentDidMount(){const{postData:t,renderId:e}=this.props;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:i,clickToShowPopUp:a,cardNumber:o,onClickToCTA:n}=this.props,{windowWidth:l,loadData:d}=this.state;var _={totalPostBestFit:0,isLastRow:!1};let h=0===i.ThemeRule.numberOfCoumn?Math.trunc(o)>5?5:Math.trunc(o):i.ThemeRule.numberOfCoumn;if(t.length>parseInt(o)){let e=parseInt(o);4===h?e=9:2===h?e=3:3===h?e=6:5===h&&(e=12),l<768&&(e=parseInt(o));let s=t.length/parseInt(e);_=parseInt(e)*parseInt(s),_=this.calculationData(t.length,e,h,_)}let p=0===i.ThemeRule.numberOfCoumn?Math.trunc(o)>5?5:Math.trunc(o)+1:i.ThemeRule.numberOfCoumn+1;return(0,r.jsx)(c(),{className:"tb_gp_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_gp_post_wrapper",resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:d?t&&t.length>0&&t.map(((t,c)=>{const o=e[t];let l=s;if(3===h&&p===c+1){l=2*s,p=p+2*h}else if(2===h&&p===c+1){l=2*s,p=p+(h+1)}else if(4===h&&p===c+1){l=2*s,p=p+(2*h+1)}else if(5===h&&p===c+1){l=2*s,p=p+(2*h+2)}return parseInt(_.totalPostBestFit)>=parseInt(c+1)?(0,r.jsx)(v,{ownerId:i.Wall.owner,itemData:o,itemIndex:c,adjustWidth:l,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:a,wallID:i.Wall.id,onClickToCTA:n},c):0===parseInt(_.totalPostBestFit)?(0,r.jsx)(v,{ownerId:i.Wall.owner,itemData:o,itemIndex:c,adjustWidth:l,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:a,wallID:i.Wall.id,onClickToCTA:n},"galry_".concat(o.id)):null})):null})}}const f=(0,j.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,g.B0)(e))})))(N)},80888:(t,e,s)=>{"use strict";var i=s(79047);function a(){}function c(){}c.resetWarningCache=a,t.exports=function(){function t(t,e,s,a,c,o){if(o!==i){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:a};return s.PropTypes=s,s}},52007:(t,e,s)=>{t.exports=s(80888)()},79047:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50247:()=>{}}]);
//# sourceMappingURL=9189.c857611a.chunk.js.map