"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2013,7355,7655],{8494:(e,t,i)=>{i.d(t,{bs:()=>r});var a=i(78250),s=i(23499),o=i(92908),d=i(95553),l=i(89652);let n=[];const r=e=>{e.persist();const t=e.target,{network:i,itemId:a,themeId:s}=t.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(s))n.includes(e)||n.push(e);else{const e=document.querySelector(`.tb_media-${a}`);e&&(e.style.display="none")}1===n.length&&c()},c=async()=>{var e;const{postData:t,wall:i}=s.A.getState().appData;if(!i||!Object.keys(i).length||!n.length)return;const{User:r,Wall:m}=i,h=null===r||void 0===r?void 0:r.id,u=(o.HY,null===m||void 0===m?void 0:m.id),_=null===(e=n[0])||void 0===e?void 0:e.target,{filterId:g,network:v,itemId:b,load:w}=_.dataset,f=document.querySelector(`img[data-item-id="${b}"]`),x=null!==t&&void 0!==t&&t.completeDataObject?Object.values(t.completeDataObject).filter((e=>e.id===b)):[];if(null!==x&&void 0!==x&&x.length){var S;const e=await(async e=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((t=>e.includes(t)))||await fetch(e).then((e=>e.ok)).catch((()=>!1)))(null===(S=x[0])||void 0===S?void 0:S.postFileNew);if(!e&&f){if([2,18,3,28].includes(+v)&&"0"===w&&"34"!==g&&!_.src.includes("cloud.taggbox.com")){const e=((e,t,i)=>{var a,s,o,d,l;const{UserPlan:n,Wall:r}=t;return{table_name:null===n||void 0===n?void 0:n.db_table,...e,...null!==i&&void 0!==i&&i.length?{feedId:null===(a=i[0])||void 0===a?void 0:a.feedId,type:null===(s=i[0])||void 0===s?void 0:s.type,link:null===(o=i[0])||void 0===o?void 0:o.link,postFile:null===(d=i[0])||void 0===d?void 0:d.postFile,mediaFile:null===(l=i[0])||void 0===l?void 0:l.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:u,postId:b,ownerId:h},i,x);try{const{data:t}=await(new l.A).post(o.t5,e,{headers:d.ML}),i=o.HY||o.MH?"":`https://images.${o.QR}/`;_.src="18"===v?`${i}${t.media}`:t.media}catch{_.src=a.gX}finally{p(_)}}else _.src=a.gX,p(_);n.shift(),c()}else{const e=`${a.th}/media/images/no-image.svg`;_.src=e,_.srcset=e,p(_),n.shift()}}},p=e=>e.setAttribute("data-load","1")},27655:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var a=i(65043),s=i(47355),o=i(42013),d=i(4765),l=i(70579);class n extends a.PureComponent{constructor(e){super(e),this.handleSlideChange=()=>{const e=this.splideRef.current.splide,t=e.index,i=0===t,a=t===e.length-1;this.setState({isFirst:i,isLast:a})},this.state={mediaSize:{height:1e3,width:1e3},mediaLoaded:!1,imgUrl:e.Post.media.image.small,largerHeight:0,isFirst:!1,isLast:!1,currentIndex:0},this.splideRef=a.createRef()}UNSAFE_componentWillReceiveProps(e){const{Post:t}=e,{ImageUrl:i}=e;this.state.imgUrl!==i&&this.setState({imgUrl:i,mediaLoaded:!1,mediaSize:{height:t.media.height,width:t.media.width}})}componentDidMount(){const{Post:e}=this.props;this.setState({mediaSize:{height:e.media.height,width:e.media.width}}),this.splideRef.current.splide.on("moved",this.handleSlideChange),this.handleSlideChange()}componentWillUnmount(){this.splideRef.current.splide.off("moved",this.handleSlideChange)}render(){const{Post:e,mediaSize:t,ThemeInfo:i,onUpdateProdImgIdx:a,winSize:n}=this.props,{isFirst:r,isLast:c,currentIndex:p}=this.state;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.default,{winSize:n,Post:e,mediaSize:t,ThemeInfo:i,mediaSizeCallback:this.mediaSize,opacity:0}),(0,l.jsx)("div",{className:"tb_post_modal_slide_holder_",children:(0,l.jsxs)(d.eB,{hasTrack:!1,className:"tb_post_modal_media_slider",options:{type:"slide",rewind:!1,speed:400,gap:0,drag:!0,autoplay:!1,autoHeight:!0,padding:0,gap:"1rem",pagination:!0,arrows:!0,classes:{pagination:"splide__pagination tb_modal_slider_dots",page:"splide__pagination__page tb_modal_slider_dot"}},ref:this.splideRef,onActive:(e,t,i)=>{this.setState({currentIndex:t.index},(()=>a(this.state.currentIndex)))},children:[(0,l.jsx)(d.v9,{children:e.mediaList.map(((a,r)=>{const c=p==r;return(0,l.jsx)(d.Nn,{style:{margin:0,padding:0},children:[2,4].includes(a.type)||!c?(0,l.jsx)(s.default,{winSize:n,Post:e,Item:a,Products:a.product,mediaSize:t,ThemeInfo:i,mediaSizeCallback:this.mediaSize,hotspot:!0,opacity:1}):[3,5].includes(a.type)?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.default,{winSize:n,Post:{...e,networkId:e.networkId,media:a},Item:a,Products:a.products,mediaSize:t,ThemeInfo:i,mediaSizeCallback:this.mediaSize,opacity:1})}):null},r)}))}),(0,l.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-arrow-left-alt",disabled:r,role:"button","aria-label":"Go to previous slide",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon tb-arrow-right-alt",disabled:c,role:"button","aria-label":"Go to next slide",children:(0,l.jsx)("div",{})})]})]})})]})}}},42013:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var a=i(65043),s=i(1043),o=i.n(s),d=i(92908),l=i(65281),n=i(70579);class r extends a.PureComponent{constructor(e){super(e),this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.muteToggle=()=>{this.setState({muted:!this.state.muted})},this.onUpdateTime=e=>{try{if(d.HY){const{played:t}=this.state;this.setState({played:t+e.playedSeconds})}}catch(t){console.log(t)}},this.state={videoLoaded:!1,muted:!0,played:0},this.VideoWrap=a.createRef()}componentWillUnmount(){const{played:e}=this.state;d.HY&&(0,l.HI)(e)}render(){const{Post:e,mediaSize:t}=this.props,{videoLoaded:i,muted:a}=this.state,{media:s,id:d,link:l,networkId:r}=e,c=![7,3,25].includes(e.networkId),{height:p,width:m}=t;return(0,n.jsxs)("div",{className:"tb_post_modal_video_holder"+(i?" tb_post_video_loaded":""),ref:this.VideoWrap,children:[c?(0,n.jsx)("div",{className:"tb_m_mute_btn",onClick:this.muteToggle,children:(0,n.jsx)("div",{className:"tb__icon tb-"+(a?"mute":"unmute"),children:(0,n.jsx)("div",{})})}):"",(0,n.jsx)(o(),{className:`tb_post_modal_video tb_p_media-${d}`,url:s.video.full,"data-height":p,"data-width":m,"data-type":"video","data-network":r,"data-link":l,"data-item-id":d,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":m,"data-height":p,poster:s.image.small,muted:a}},file:{attributes:{preload:"metadata",poster:s.image.small,muted:a}}},loop:!0,autoPlay:!0,muted:a,volume:1,playsinline:!0,onReady:e=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!c,onProgress:this.onUpdateTime}),i?null:(0,n.jsx)("div",{className:"tb_post_modal_spinner",children:(0,n.jsx)("div",{})})]},s.video.full)}}},47355:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var a=i(65043),s=i(80714),o=i(78250),d=i(8494),l=i(70579);class n extends a.PureComponent{constructor(e){super(e),this.state={mediaLoaded:!1}}UNSAFE_componentWillReceiveProps(e){const{Post:t}=e,{media:i}=t;this.props.Post!==t&&this.setState({imgSize:{small:i.image.small,large:i.image.large,orignal:i.image.orignal}})}render(){const{Post:e,opacity:t,mediaSize:i,Products:a,Item:n,ThemeInfo:r,showTooltip:c}=this.props,{mediaLoaded:p}=this.state,m=n||e.media,h=!!(a&&a.length>0&&e.hotspot),u={opacity:t,filter:p?"blur(2px)":null,aspectRatio:`${i.width}/${i.height}`};return(0,l.jsxs)("div",{className:"tb_post_modal_img_holder",children:[h?(0,l.jsx)(s.A,{isPopup:!0,products:a,dataItem:e,showTooltip:c}):null,(0,l.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",src:m.image.small,srcSet:`${m.image.large}, 991w ${m.image.small}, 480w`,sizes:i&&i.width,alt:m.title,"data-link":e.link,"data-network":e.networkId,"data-wall-id":r.wallId,"data-owner-id":r.ownerId,"data-item-id":e.id,"data-feed-id":r.feedId?r.feedId:"","data-load":"0",onLoad:this.handleImageLoad,onError:e=>{e.target.src=`${o.th}/media/error/no-image.svg`,e.target.srcset=`${o.th}/media/error/no-image.svg`,(0,d.bs)(e)},loading:"lazy",draggable:"false",width:i&&i.width,height:i&&i.height,style:u})]})}}},80714:(e,t,i)=>{i.d(t,{A:()=>h});var a=i(65043),s=i(83003),o=i(39532),d=i(65281),l=i(26165),n=i(57515),r=i(70579);const c=(0,a.memo)((e=>{let{item:t}=e;const i=t.discount>0&&t.discount!==t.price,a=t.discount>0?t.discount:t.price;return(0,r.jsxs)("a",{hotspot:1,href:t.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:t.title}),i&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[t.currency,t.price]}),(t.price>0||t.discount>0)&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[t.currency,a]})]})})),p=e=>{let{products:t,appData:i,Post:s,showTooltip:p,isPopup:m}=e;const[h,u]=(0,a.useState)(null),_=(0,a.useMemo)((()=>{var e,t;return(null===i||void 0===i||null===(e=i.wall)||void 0===e||null===(t=e.ProductSetting)||void 0===t?void 0:t.Hotspot)||{}}),[i]);(0,a.useEffect)((()=>{if(p){const e=t.findIndex((e=>e.id===p));-1!==e&&u(e)}else u(null)}),[p,t]);const g=(0,a.useCallback)((e=>{null!==i&&void 0!==i&&i.wall&&(0,l.hq)({})}),[i,s]),v=(0,a.useCallback)(((e,t)=>{e.stopPropagation(),g(t),window.open(t.url,"_blank")}),[g]);return null!==_&&void 0!==_&&_.status?t.map(((e,t)=>{const i=`hotspot-${e.id}-${(0,d.Ul)()}-`,a=h===t;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(a?" tb_hotspot_active_":""),role:"button",style:{top:e.hotspot.top,left:e.hotspot.left},onMouseEnter:()=>u(t),onMouseLeave:()=>u(null),onClick:t=>{v(t,e)},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===_.type?"tb_hotspot_ani__":""),children:t+1}),(0,r.jsx)(n.A,{wallId:i,children:(0,r.jsx)(o.m_,{appendTo:"body","data-tooltip-id":`tooltip-${e.id}-${Math.random().toString(36).substr(2,9)}`,className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,...m?{isOpen:a}:{},children:(0,r.jsx)(c,{item:e})},t)})]},`${e.id}-${t}`)})):null},m=(0,a.memo)(p),h=(0,s.Ng)((e=>({appData:e.appData})))(m)}}]);
//# sourceMappingURL=7655.e93bf012.chunk.js.map