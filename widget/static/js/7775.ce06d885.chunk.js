"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7775],{44238:(t,e,i)=>{i.d(e,{bs:()=>r});var l=i(31530),o=i(7665),s=i(83884),d=i(32209),a=i(89620);let n=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:l,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))n.includes(t)||n.push(t);else{const t=document.querySelector(`.tb_media-${l}`);t&&(t.style.display="none")}1===n.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!n.length)return;const{User:r,Wall:h}=i,m=null===r||void 0===r?void 0:r.id,v=(s.HY,null===h||void 0===h?void 0:h.id),p=null===(t=n[0])||void 0===t?void 0:t.target,{filterId:g,network:_,itemId:b,load:f}=p.dataset,w=document.querySelector(`img[data-item-id="${b}"]`),y=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===b)):[];if(null!==y&&void 0!==y&&y.length){var $;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===($=y[0])||void 0===$?void 0:$.postFileNew);if(!t&&w){if([2,18,3,28].includes(+_)&&"0"===f&&"34"!==g&&!p.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var l,o,s,d,a;const{UserPlan:n,Wall:r}=e;return{table_name:null===n||void 0===n?void 0:n.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(l=i[0])||void 0===l?void 0:l.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(s=i[0])||void 0===s?void 0:s.link,postFile:null===(d=i[0])||void 0===d?void 0:d.postFile,mediaFile:null===(a=i[0])||void 0===a?void 0:a.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:v,postId:b,ownerId:m},i,y);try{const{data:e}=await(new a.A).post(s.t5,t,{headers:d.ML}),i=s.HY||s.MH?"":`https://images.${s.QR}/`;p.src="18"===_?`${i}${e.media}`:e.media}catch{p.src=l.gX}finally{u(p)}}else p.src=l.gX,u(p);n.shift(),c()}else{const t=`${l.th}/media/images/no-image.svg`;p.src=t,p.srcset=t,u(p),n.shift()}}},u=t=>t.setAttribute("data-load","1")},82803:(t,e,i)=>{i.d(e,{A:()=>m});var l=i(82483),o=i(91965),s=i(99998),d=i(76467),a=i(99009),n=i(29269),r=i(56723);const c=(0,l.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,l=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,l]})]})})),u=t=>{let{products:e,appData:i,Post:o}=t;const[u,h]=(0,l.useState)(null),m=(0,l.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]),v=(0,l.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,n.hq)({})}),[i,o]),p=(0,l.useCallback)(((t,e)=>{t.stopPropagation(),v(e),window.open(e.url,"_blank")}),[v]);return null!==m&&void 0!==m&&m.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,a.Ul)()}`,l=u===e;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(l?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>h(e),onMouseLeave:()=>h(null),onClick:e=>p(e,t),"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ "+(0===m.type?"tb_hotspot_ani__":""),children:e+1}),(0,s.createPortal)((0,r.jsx)(d.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,children:(0,r.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,l.memo)(u),m=(0,o.Ng)((t=>({appData:t.appData})))(h)},7775:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var l=i(82483),o=i(99009),s=i(31530),d=i(44238),a=i(82803),n=i(56723);class r extends l.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var l;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(l=i.image)||void 0===l?void 0:l.small);this._isMounted&&this.setState({height:e,width:t})}catch(s){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:s,Post:d}=t;this.state={height:(null===s||void 0===s?void 0:s.height)||(null===d||void 0===d||null===(e=d.media)||void 0===e?void 0:e.height)||0,width:(null===s||void 0===s?void 0:s.width)||(null===d||void 0===d||null===(i=d.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=l.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,l;const{height:o,width:r}=this.state;if(!o||!r)return null;const{ImageClass:c,Post:u,hotspot:h,size:m,blurBG:v,ProductSetting:p,mediaOnly:g,inView:_,multiKey:b}=this.props,{id:f,link:w,products:y}=u,$=g||(null===u||void 0===u?void 0:u.media),{currentWidth:x,currentHeight:k}=this.state,j=m||100*o/r,P={paddingBottom:1===j?null:`${j}%`},S={backgroundImage:_?`url(${null===$||void 0===$||null===(t=$.image)||void 0===t?void 0:t.small})`:null},N=r>o?"100%":r/o*100+"%",M=r>o?o/r*100+"%":"100%",I=u.isProduct&&h,D={width:I&&m?N:null,height:I&&m?M:null};return(0,n.jsxs)("div",{className:`${c}_wrap_`,style:P,ref:this.mediaRef,children:[I&&v?(0,n.jsx)("div",{className:"tb_blur_bg_",style:S}):null,(0,n.jsxs)("div",{className:`${c}_wrap_in`,style:D,children:[I?(0,n.jsx)(a.A,{products:this.props.multiPic?u.mediaList[b].product:y,ProductSetting:p,hotspot:u.hotspot,dataPost:u}):null,(0,n.jsx)("img",{className:`${c} tb_media-${f}`,src:null===$||void 0===$||null===(e=$.image)||void 0===e?void 0:e.small,srcSet:`${null===$||void 0===$||null===(i=$.image)||void 0===i?void 0:i.small} 1x, ${null===$||void 0===$||null===(l=$.image)||void 0===l?void 0:l.large} 2x`,sizes:`${x}px`,loading:_?"eager":"lazy",decoding:"async",fetchPriority:_?"high":"low","data-id":f,height:k,width:x,"data-height":o,"data-width":r,"data-link":w,onLoad:this.onLoad,onError:t=>{t.target.src=`${s.th}/media/error/no-image.svg`,t.target.srcset=`${s.th}/media/error/no-image.svg`,(0,d.bs)(t)},alt:null===$||void 0===$?void 0:$.title,title:null===$||void 0===$?void 0:$.title},`${f}-${o}-${r}-${_}`)]})]})}}}}]);
//# sourceMappingURL=7775.ce06d885.chunk.js.map