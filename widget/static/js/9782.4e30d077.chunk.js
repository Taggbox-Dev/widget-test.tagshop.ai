"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9782],{70501:(t,e,i)=>{i.d(e,{bs:()=>r});var l=i(8159),s=i(56364),o=i(40329),d=i(32866),a=i(98409);let n=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:l,themeId:s}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(s))n.includes(t)||n.push(t);else{const t=document.querySelector(`.tb_media-${l}`);t&&(t.style.display="none")}1===n.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=s.A.getState().appData;if(!i||!Object.keys(i).length||!n.length)return;const{User:r,Wall:h}=i,v=null===r||void 0===r?void 0:r.id,m=(o.HY,null===h||void 0===h?void 0:h.id),p=null===(t=n[0])||void 0===t?void 0:t.target,{filterId:g,network:b,itemId:_,load:f}=p.dataset,w=document.querySelector(`img[data-item-id="${_}"]`),y=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===_)):[];if(null!==y&&void 0!==y&&y.length){var $;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===($=y[0])||void 0===$?void 0:$.postFileNew);if(!t&&w){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==g&&!p.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var l,s,o,d,a;const{UserPlan:n,Wall:r}=e;return{table_name:null===n||void 0===n?void 0:n.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(l=i[0])||void 0===l?void 0:l.feedId,type:null===(s=i[0])||void 0===s?void 0:s.type,link:null===(o=i[0])||void 0===o?void 0:o.link,postFile:null===(d=i[0])||void 0===d?void 0:d.postFile,mediaFile:null===(a=i[0])||void 0===a?void 0:a.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:_,ownerId:v},i,y);try{const{data:e}=await(new a.A).post(o.t5,t,{headers:d.ML}),i=o.HY||o.MH?"":`https://images.${o.QR}/`;p.src="18"===b?`${i}${e.media}`:e.media}catch{p.src=l.gX}finally{u(p)}}else p.src=l.gX,u(p);n.shift(),c()}else{const t=`${l.th}/media/images/no-image.svg`;p.src=t,p.srcset=t,u(p),n.shift()}}},u=t=>t.setAttribute("data-load","1")},1111:(t,e,i)=>{i.d(e,{A:()=>v});var l=i(88094),s=i(83546),o=i(83775),d=i(24076),a=i(19066),n=i(42682),r=i(15678);const c=(0,l.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,l=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,l]})]})})),u=t=>{let{products:e,appData:i,Post:s}=t;const[u,h]=(0,l.useState)(null),v=(0,l.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),m=(0,l.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,n.hq)({})}),[i,s]),p=(0,l.useCallback)(((t,e)=>{t.stopPropagation(),m(e),window.open(e.url,"_blank")}),[m]);return null!==v&&void 0!==v&&v.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,a.Ul)()}`,l=u===e;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(l?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:e=>p(e,t),"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ "+(0===v.type?"tb_hotspot_ani__":""),children:e+1}),(0,o.createPortal)((0,r.jsx)(d.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,r.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,l.memo)(u),v=(0,s.Ng)((t=>({appData:t.appData})))(h)},49782:(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var l=i(88094),s=i(19066),o=i(8159),d=i(17524),a=i(70501),n=i(1111),r=i(15678);class c extends l.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var l;const{width:t,height:e}=await(0,s.TW)(null===i||void 0===i||null===(l=i.image)||void 0===l?void 0:l.small);this._isMounted&&this.setState({height:e,width:t})}catch(o){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:o,Post:d}=t;this.state={isVisible:!this.props.observer,height:(null===o||void 0===o?void 0:o.height)||(null===d||void 0===d||null===(e=d.media)||void 0===e?void 0:e.height)||0,width:(null===o||void 0===o?void 0:o.width)||(null===d||void 0===d||null===(i=d.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=l.createRef(),this.observer=null}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()})),this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:!0}),this.observer.disconnect())}),{threshold:.01}),this.mediaRef.current&&this.observer.observe(this.mediaRef.current)}componentWillUnmount(){this._isMounted=!1,this.observer&&this.observer.disconnect()}render(){var t,e,i,l;const{ImageClass:s,Post:c,hotspot:u,size:h,blurBG:v,ProductSetting:m,mediaOnly:p}=this.props,{id:g,link:b,products:_}=c,f=p||(null===c||void 0===c?void 0:c.media),{isVisible:w,height:y,width:$,currentWidth:x,currentHeight:k}=this.state,j=h||100*y/$,S={paddingBottom:1===j?null:`${j}%`},P={backgroundImage:w?`url(${null===f||void 0===f||null===(t=f.image)||void 0===t?void 0:t.small})`:null},I=$>y?"100%":$/y*100+"%",N=$>y?y/$*100+"%":"100%",M=c.isProduct&&u,D={width:M&&h?I:null,height:M&&h?N:null};return(0,r.jsxs)("div",{className:`${s}_wrap_`,style:S,ref:this.mediaRef,children:[M&&v?(0,r.jsx)("div",{className:"tb_blur_bg_",style:P}):null,(0,r.jsxs)("div",{className:`${s}_wrap_in`,style:D,children:[M?(0,r.jsx)(n.A,{products:_,ProductSetting:m,hotspot:c.hotspot,dataPost:c}):null,w?(0,r.jsx)("img",{className:`${s} tb_media-${g}`,src:null===f||void 0===f||null===(e=f.image)||void 0===e?void 0:e.small,srcSet:`${null===f||void 0===f||null===(i=f.image)||void 0===i?void 0:i.small} 1x, ${null===f||void 0===f||null===(l=f.image)||void 0===l?void 0:l.large} 2x`,sizes:`${x}px`,loading:w?"eager":"lazy",decoding:"async",fetchPriority:w?"high":"low","data-id":g,height:k,width:x,"data-height":y,"data-width":$,"data-link":b,onLoad:this.onLoad,onError:t=>{t.target.src=`${o.th}/media/error/no-image.svg`,t.target.srcset=`${o.th}/media/error/no-image.svg`,(0,a.bs)(t)},alt:null===f||void 0===f?void 0:f.title,title:(0,d.Ay)(null===f||void 0===f?void 0:f.title)},g):null]})]})}}}}]);