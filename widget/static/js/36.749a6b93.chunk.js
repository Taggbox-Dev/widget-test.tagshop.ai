"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[36,9782],{70501:(t,e,i)=>{i.d(e,{bs:()=>r});var l=i(8159),o=i(56364),s=i(40329),a=i(97014),d=i(98409);let n=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:l,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))n.includes(t)||n.push(t);else{const t=document.querySelector(`.tb_media-${l}`);t&&(t.style.display="none")}1===n.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!n.length)return;const{User:r,Wall:h}=i,m=null===r||void 0===r?void 0:r.id,v=(s.HY,null===h||void 0===h?void 0:h.id),p=null===(t=n[0])||void 0===t?void 0:t.target,{filterId:g,network:_,itemId:b,load:f}=p.dataset,w=document.querySelector(`img[data-item-id="${b}"]`),y=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===b)):[];if(null!==y&&void 0!==y&&y.length){var x;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(x=y[0])||void 0===x?void 0:x.postFileNew);if(!t&&w){if([2,18,3,28].includes(+_)&&"0"===f&&"34"!==g&&!p.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var l,o,s,a,d;const{UserPlan:n,Wall:r}=e;return{table_name:null===n||void 0===n?void 0:n.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(l=i[0])||void 0===l?void 0:l.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(s=i[0])||void 0===s?void 0:s.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(d=i[0])||void 0===d?void 0:d.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:v,postId:b,ownerId:m},i,y);try{const{data:e}=await(new d.A).post(s.t5,t,{headers:a.ML}),i=s.HY||s.MH?"":`https://images.${s.QR}/`;p.src="18"===_?`${i}${e.media}`:e.media}catch{p.src=l.gX}finally{u(p)}}else p.src=l.gX,u(p);n.shift(),c()}else{const t=`${l.th}/media/images/no-image.svg`;p.src=t,p.srcset=t,u(p),n.shift()}}},u=t=>t.setAttribute("data-load","1")},60036:(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var l=i(88094),o=i(33578),s=(i(12755),i(40329)),a=i(49782),d=i(15678);const n=l.lazy((()=>Promise.all([i.e(5740),i.e(4027)]).then(i.bind(i,6570)))),r=JSON.parse(window.localStorage.getItem("mediaDimension"));class c extends l.PureComponent{constructor(t){super(t),this.mediaSize=t=>this.props.mediaSizeCallback(t),this.state={mediaSize:{height:null!=r?r[0]:"85vh",width:null!=r?r[1]:"85vh"}}}render(){const{Post:t,wallID:e,size:i,onUpdateProdImgIdx:l}=this.props,r={clickable:!0,bulletClass:"tb_rp_bullet"};return(0,d.jsx)("div",{className:"tb_rp_media_holder",children:(0,d.jsx)(o.RC,{ref:this.splideRef,direction:"horizontal",passiveListeners:!0,pagination:r,onSlideChange:t=>l(t.activeIndex),children:t.mediaList.map(((l,r)=>(0,d.jsx)(o.qr,{children:o=>{let{isActive:c}=o;return(0,d.jsx)(d.Fragment,{children:[2,4].includes(l.type)||!c?(0,d.jsx)(a.default,{ImageClass:"tb_rp_image",Post:t,mediaOnly:l,size:i,hotspot:!!l.product.length&&s.HY}):[3,5].includes(l.type)?(0,d.jsx)(n,{VideoClass:"tb_rp_video",media:l.video.full,mediaPoster:l.image.original,Post:{...t,media:{video:l.video,image:l.image}},wallID:e,size:i,isCover:!0,controls:!1,autoPlay:c,muted:false,index:r}):null})}},r)))})})}}},1111:(t,e,i)=>{i.d(e,{A:()=>m});var l=i(88094),o=i(90414),s=i(83775),a=i(24076),d=i(19066),n=i(42682),r=i(15678);const c=(0,l.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,l=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,l]})]})})),u=t=>{let{products:e,appData:i,Post:o}=t;const[u,h]=(0,l.useState)(null),m=(0,l.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),v=(0,l.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,n.hq)({})}),[i,o]),p=(0,l.useCallback)(((t,e)=>{t.stopPropagation(),v(e),window.open(e.url,"_blank")}),[v]);return null!==m&&void 0!==m&&m.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,d.Ul)()}`,l=u===e;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(l?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:e=>p(e,t),"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ "+(0===m.type?"tb_hotspot_ani__":""),children:e+1}),(0,s.createPortal)((0,r.jsx)(a.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,r.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,l.memo)(u),m=(0,o.Ng)((t=>({appData:t.appData})))(h)},49782:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var l=i(88094),o=i(19066),s=i(8159),a=i(70501),d=i(1111),n=i(15678);class r extends l.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var l;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(l=i.image)||void 0===l?void 0:l.small);this._isMounted&&this.setState({height:e,width:t})}catch(s){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:s,Post:a}=t;this.state={height:(null===s||void 0===s?void 0:s.height)||(null===a||void 0===a||null===(e=a.media)||void 0===e?void 0:e.height)||0,width:(null===s||void 0===s?void 0:s.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=l.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,l;const{height:o,width:r}=this.state;if(!o||!r)return null;const{ImageClass:c,Post:u,hotspot:h,size:m,blurBG:v,ProductSetting:p,mediaOnly:g,inView:_}=this.props,{id:b,link:f,products:w}=u,y=g||(null===u||void 0===u?void 0:u.media),{currentWidth:x,currentHeight:$}=this.state,j=m||100*o/r,P={paddingBottom:1===j?null:`${j}%`},k={backgroundImage:_?`url(${null===y||void 0===y||null===(t=y.image)||void 0===t?void 0:t.small})`:null},S=r>o?"100%":r/o*100+"%",I=r>o?o/r*100+"%":"100%",C=u.isProduct&&h,N={width:C&&m?S:null,height:C&&m?I:null};return(0,n.jsxs)("div",{className:`${c}_wrap_`,style:P,ref:this.mediaRef,children:[C&&v?(0,n.jsx)("div",{className:"tb_blur_bg_",style:k}):null,(0,n.jsxs)("div",{className:`${c}_wrap_in`,style:N,children:[C?(0,n.jsx)(d.A,{products:w,ProductSetting:p,hotspot:u.hotspot,dataPost:u}):null,(0,n.jsx)("img",{className:`${c} tb_media-${b}`,src:null===y||void 0===y||null===(e=y.image)||void 0===e?void 0:e.small,srcSet:`${null===y||void 0===y||null===(i=y.image)||void 0===i?void 0:i.small} 1x, ${null===y||void 0===y||null===(l=y.image)||void 0===l?void 0:l.large} 2x`,sizes:`${x}px`,loading:_?"eager":"lazy",decoding:"async",fetchPriority:_?"high":"low","data-id":b,height:$,width:x,"data-height":o,"data-width":r,"data-link":f,onLoad:this.onLoad,onError:t=>{t.target.src=`${s.th}/media/error/no-image.svg`,t.target.srcset=`${s.th}/media/error/no-image.svg`,(0,a.bs)(t)},alt:null===y||void 0===y?void 0:y.title,title:null===y||void 0===y?void 0:y.title},`${b}-${o}-${r}`)]})]})}}}}]);