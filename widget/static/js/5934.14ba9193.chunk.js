"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5934],{20169:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(72791),n=s(11225),i=s(46535),l=s(80184);class o extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:l}=this.props;t.stopPropagation(),i.ZQ||(0,n.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:l}),(0,n.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,l.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,l.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,l.jsx)("div",{})}),(0,l.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,l.jsx)("div",{})})}):"",e.twitter?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,l.jsx)("div",{})})}):"",e.linkedin?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,l.jsx)("div",{})})}):""]})]})}}},35934:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var a=s(72791),n=s(2703),i=s(46535),l=s(20169),o=s(80184);const r=a.lazy((()=>s.e(1153).then(s.bind(s,1153)))),c=a.lazy((()=>Promise.all([s.e(8947),s.e(4456)]).then(s.bind(s,44456)))),d=a.lazy((()=>Promise.all([s.e(4867),s.e(7033)]).then(s.bind(s,23450)))),p=i.ZQ?null:200,h=e=>{let{itemData:t,personalization:s,adjustWidth:h,ThemeRule:_,clickToShowPopUp:b,itemIndex:m,wallID:w,ownerId:x,postSizeInPx:u,wall:j}=e;const k=(0,a.useRef)(null),I=2===t.type||3===t.type||4===t.type||5===t.type,f={borderRadius:_.radius},v=s.trimcontent?(0,n.Sv)(t.content,p):t.content,g=u.adjustWidth<250;return(0,a.useEffect)((()=>{i.nX&&(0,n.YN)(k)}),[]),(0,o.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_sp_post_wrapper".concat(g?" tb_sp_post_wrapper2x":""),style:{width:"".concat(h,"%"),padding:s.padding/2},"tb-network":t.network.id,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(m)+1,",").concat(v),ref:k,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,o.jsx)("div",{className:"tb_sp_post_in",style:f,onClick:b(m,t),children:(0,o.jsxs)("div",{className:"tb_sp_post_media_wrapp",children:[t.share.status?(0,o.jsx)(l.Z,{share:t.share,shareClass:"tb_sp_share_container",item:t,wallID:w,ownerId:x}):"",I?(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(c,{itemData:t,wallID:w,ownerId:x,ThemeID:s.widgetTheme,wall:j},"img".concat(m,"_").concat(t.id))}):"",(0,o.jsxs)("div",{className:"tb_sp_post_details",children:[(0,o.jsx)("div",{className:"tb_sp_contant_wrapper",children:_.hideContent&&1!=t.type?"":(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(d,{contentClass:"tb_sp_content",item:t,content:v,font:_,ThemeRule:_,personalization:s,contentTitle:t.contentTitle})})}),(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(r,{ownerId:x,postTime:t.createdAt,author:t.author,network:t.network,font:_,personalization:s,ThemeRule:_})})]}),(0,o.jsx)("div",{className:"tb_sp_post_overlay",style:{backgroundColor:i.ZQ?null:_.cardColor},children:(0,o.jsx)("div",{})})]})})})};var _=s(77581),b=s(11225);class m extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[]}}render(){const{postData:e,completeDataObject:t,adjustWidth:s,wall:a,clickToShowPopUp:n,cardNumber:i,onClickToCTA:l,postSizeInPx:r}=this.props;let c=e.length;if(a&&1==a.Personalization.fitRow&&e.length>=parseInt(i)){let t=e.length/parseInt(i);c=parseInt(i)*parseInt(t)}return(0,o.jsx)("div",{tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",className:"tb_sp_post_container",children:e&&e.length>0&&e.map(((e,i)=>{const d=t[e];return parseInt(c)>=parseInt(i+1)?(0,o.jsx)(h,{ownerId:a.Wall.owner,itemData:d,itemIndex:i,adjustWidth:1==d.highlight?2*s:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:n,onClickToCTA:l,postSizeInPx:r,wall:a},"sqr_crd_".concat(i,"_").concat(e.id)):null}))})}}const w=(0,_.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,b.B0)(t))})))(m)}}]);
//# sourceMappingURL=5934.14ba9193.chunk.js.map