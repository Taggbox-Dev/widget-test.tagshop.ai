"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4456,1088],{87641:(t,i,s)=>{s.d(i,{Z:()=>_});var c=s(72791),e=s(77581),a=s(89057),o=s(18947),d=s(80184);const l=(0,a.componentWillAppendToBody)((t=>{let{children:i}=t;return i})),r=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_pro_title">').concat(t.product_title,'</div>\n  <div class="tb_pro_price tb_price_disabled">').concat(t.price_currency_symbol).concat(t.product_discount,'</div>\n  <div class="tb_pro_price">').concat(t.price_currency_symbol).concat(t.product_price,"</div>\n  </a>");class n extends c.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:i}=this.props,{activeMouse:s}=this.state,c=i&&Object.keys(i).length>0?i.wall.ProductSetting.Hotspot:"";return c.status?(0,d.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,i)=>(0,d.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(i),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==i?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ ".concat(1==!c.type?"tb_hotspot_ani__":""),children:i+1}),(0,d.jsx)(l,{children:(0,d.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id),clickable:!0,html:r(t.UgcProduct)})})]},i)))}):null}}const _=(0,e.$j)((t=>({appData:t.appData})),(t=>{}))(n)},40115:(t,i,s)=>{s.d(i,{Z:()=>n});var c=s(72791),e=s(11225),a=s(87641),o=s(80413),d=s(2703),l=s(70188),r=s(80184);class n extends c.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:i}=this.props,{imgUrl:s}=this.state;if(i&&Object.keys(i).length>0&&[4,2,5,3].includes(i.type))if(i.mediaHeight&&""!=i.mediaHeight&&i.mediaWidth&&""!=i.mediaWidth)this.setState({paddingBottom:100*i.mediaHeight/i.mediaWidth});else try{const{width:t,height:s}=await(0,o.Ad)(i.postFileNew);this.setState({paddingBottom:100*s/t})}catch(c){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:i,wallID:s,themeID:c,ownerId:o,hotspot:n}=this.props,{imgUrl:_,paddingBottom:h}=this.state,b={paddingBottom:"".concat(h,"%")},v={backgroundImage:"url(".concat(_,")")},m=!!(i.hotspot&&i.ugc_products.length>0&&n);return(0,r.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(i.id),style:b,children:[m?(0,r.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,r.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:m?"":"100%"},children:[m?(0,r.jsx)(a.Z,{product:i.ugc_products}):null,(0,r.jsx)("img",{className:"".concat(t),role:"img",src:_,height:300,width:300,"data-link":i.link,"data-load":"0","data-network":i.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":i.id,"data-feed-id":i.feedId?i.feedId:"","data-filter-id":i.filterId,"theme-id":c,onLoad:this.onLoad,onError:i.stories?null:t=>{t.target.src="".concat(l.do,"/media/images/no-image.svg"),(0,e.ht)(t)},alt:(0,d.P)(_)})]})]})}}},37989:(t,i,s)=>{s.d(i,{Z:()=>o});s(72791);var c=s(46535),e=s(41088),a=s(80184);const o=t=>{const{itemData:i,IconClass:s,network:o,video:d,multiple:l,shoppable:r}=t,n=3===i.type||5===i.type,_=7===i.network.id,h=!!(i.imageList&&i.imageList.length>0),b=1===i.isAudio,v=!!(i.ugc_products&&i.ugc_products.length>0),m=(0,a.jsx)(e.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),p=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,a.jsx)("div",{})}),j=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,a.jsx)("div",{})}),x=(0,a.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,a.jsx)("div",{})}),u=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-shopping-bag",children:(0,a.jsx)("div",{})}),N=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,a.jsx)("div",{})});return h||n?(0,a.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[v?u:"",h?p:"",n&&!_&&c.ZQ?N:"",n?_?m:b?j:c.ZQ?N:x:""]}):null}},41088:(t,i,s)=>{s.r(i),s.d(i,{default:()=>d});var c=s(72791),e=s(46535),a=s(80184);const o=c.memo((t=>{let{network:i,networkClass:s}=t;switch(i.id){case 1:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-twitter")});case 2:case 18:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-instagram-default"),children:(0,a.jsx)("div",{})});case 3:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-facebook"),children:(0,a.jsx)("div",{})});case 4:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-google-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})})]});case 5:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-pinterest"),children:(0,a.jsx)("div",{})});case 6:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-flickr-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 7:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-youtube-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 8:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-vimeo"),children:(0,a.jsx)("div",{})});case 10:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-linkedin"),children:(0,a.jsx)("div",{})});case 11:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-tumblr"),children:(0,a.jsx)("div",{})});case 12:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-rss"),children:(0,a.jsx)("div",{})});case 15:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-workplace"),children:(0,a.jsx)("div",{})});case 19:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-yelp"),children:(0,a.jsx)("div",{})});case 20:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-slack-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,a.jsx)("div",{})})]});case 21:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-yammer"),children:(0,a.jsx)("div",{})});case 23:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-airbnb"),children:(0,a.jsx)("div",{})});case 25:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-soundcloud"),children:(0,a.jsx)("div",{})});case 26:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-giphy-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 28:return e.ZQ?(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-capterra-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 29:return e.ZQ?(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-etsy"),children:(0,a.jsx)("div",{})}):(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-onsite-upload-default"),children:(0,a.jsx)("div",{})});case 30:case 32:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-vk"),children:(0,a.jsx)("div",{})});case 31:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 33:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-trustpilot-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 34:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-amazon-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 35:return(0,a.jsx)("div",{className:"".concat(s," tb__icon tb-tripadvisor"),children:(0,a.jsx)("div",{})});case 36:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-tagembed-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})})]});case 37:return(0,a.jsxs)("div",{className:"".concat(s," tb__icon tb-aliexpress-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})})]});default:return""}}));class d extends c.PureComponent{render(){return(0,a.jsx)(o,{...this.props})}}},44456:(t,i,s)=>{s.r(i),s.d(i,{default:()=>r});var c=s(72791),e=s(46535),a=s(37989),o=s(40115),d=s(80184);const l=c.lazy((()=>Promise.resolve().then(s.bind(s,70757)))),r=t=>{let{itemData:i,wallID:s,ThemeID:r,ownerId:n,wall:_}=t;return(0,d.jsxs)("div",{className:"tb_sp_media_wrap",children:[e.ZQ?(0,d.jsx)("div",{className:"tb_sp_social_top_",children:(0,d.jsx)(c.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(l,{networkClass:"tb_sp_social__ico",network:i.network,isDefault:1===_.ThemeRule.iconType,ThemeRule:_.ThemeRule})})}):null,(0,d.jsx)(a.Z,{itemData:i,IconClass:"tb_sp_media_icon"}),(0,d.jsx)(o.Z,{ImageClass:"tb_sp_image",data:i,wallID:s,themeID:r,ownerId:n,size:100,hotspot:!!i.hotspot})]})}},80413:(t,i,s)=>{i.Ad=void 0;var c=s(7782);var e=s(94590);Object.defineProperty(i,"Ad",{enumerable:!0,get:function(){return e.getImageSize}});var a=s(52047)},7782:(t,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.ErrorMessage=void 0,i.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,i,s)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.getImageSize=void 0;const c=s(7782);i.getImageSize=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,e)=>{if("undefined"===typeof window)return e(c.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return e(c.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const o=new Image;o.addEventListener("load",(()=>{a&&window.clearTimeout(a),s({width:o.naturalWidth,height:o.naturalHeight})})),o.addEventListener("error",(t=>{a&&window.clearTimeout(a),e("".concat(t.type,": ").concat(t.message))})),o.src=t,i.timeout&&(a=window.setTimeout((()=>e(c.ErrorMessage.TIMEOUT)),i.timeout))}))}},52047:function(t,i,s){var c=this&&this.__awaiter||function(t,i,s,c){return new(s||(s=Promise))((function(e,a){function o(t){try{l(c.next(t))}catch(i){a(i)}}function d(t){try{l(c.throw(t))}catch(i){a(i)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(t){t(i)}))).then(o,d)}l((c=c.apply(t,i||[])).next())}))};Object.defineProperty(i,"__esModule",{value:!0}),i.useImageSize=void 0;const e=s(72791),a=s(94590);i.useImageSize=(t,i)=>{const[s,o]=(0,e.useState)(null),[d,l]=(0,e.useState)(!1),[r,n]=(0,e.useState)(null);return(0,e.useEffect)((()=>{c(void 0,void 0,void 0,(function*(){l(!0),o(null);try{const{width:s,height:c}=yield(0,a.getImageSize)(t,i);o({width:s,height:c})}catch(r){n(r.toString())}finally{l(!1)}}))}),[t,i]),[s,{loading:d,error:r}]}}}]);
//# sourceMappingURL=4456.4ee39cb4.chunk.js.map