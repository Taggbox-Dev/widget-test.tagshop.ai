(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2543,4935,5268,7955],{94935:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var s=a(88094),o=a(96913),r=a(17524),n=a(15678);class i extends s.PureComponent{render(){const{author:t,authorClass:e,networkId:a,size:s}=this.props;return(0,n.jsx)("div",{className:e,style:{overflow:4==a?"visible":""},children:(0,n.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:(0,r.Ay)(t.name),width:s||44,height:s||44,onError:e=>{const s=(0,o.Yo)(a),r="#ffffff"==s?"000":s.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${r}&color=fff&length=1`}})},Math.random())}}},92887:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var s=a(88094),o=a(96913),r=a(15678);const n=s.lazy((()=>a.e(6300).then(a.bind(a,36300))));class i extends s.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:a,isPopUp:i}=this.props,l=(null===a||void 0===a?void 0:a.default)||[7,4,36].includes(t);return console.log("\ud83d\ude80 ~ Network ~ render ~ isDefaultIcon:",l),l?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(n,{networkId:t,networkClass:e})}):(0,r.jsx)("div",{className:`${e} tb__icon tb-${(0,o.EC)(t)}`,"aria-label":`post network ${(0,o.Oi)(t)}`,children:(0,r.jsx)("div",{})})}}},97955:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var s=a(88094),o=a(19066),r=a(15678);const n=t=>{const{createdAt:e,timeClass:a}=t;return(0,r.jsx)("div",{className:a,role:"status","aria-label":`post timestamp ${(0,o.fF)(e)}`,children:(0,o.fF)(e)})},i=(0,s.memo)(n)},81294:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>I});a(88094);var s=a(94935),o=a(97955),r=a(92887),n=a(15678);const i=t=>{let{author:e,personalization:a,postTime:i,network:l,ThemeRule:c}=t;const _=e.username&&e.username.length>0?`@${e.username}`:"",d=!(!a.postAuthor||e.isInstaUser),h=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,n.jsxs)("div",{className:"tb_wt_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,n.jsxs)("div",{className:"tb_wt_author",children:[d?(0,n.jsx)(s.default,{author:e,network:l,authorClass:"tb_wt_author_profile"}):"",(0,n.jsxs)("div",{className:"tb_wt_author_info",children:[d?(0,n.jsx)("div",{className:"tb_wt_authorname",children:e.name}):"",(0,n.jsxs)("div",{className:"tb_wt_post_info",children:[d?(0,n.jsx)("div",{className:"tb_wt_username",children:_}):"",h?(0,n.jsx)("div",{className:"tb_wt_seprator",children:" "}):"",a.postTime?(0,n.jsx)(o.default,{postTime:i,timeClass:`tb_wt_time tb-cTBfont-${c.font_varient}`,authorColor:c.authorColor}):""]})]})]}),(0,n.jsx)("div",{className:"tb_wt_social_",children:(0,n.jsx)(r.default,{networkClass:"tb_wt_social_ico",network:l,isDefault:1===c.iconType,ThemeRule:c})})]})};var l=a(40329),c=a(17900),_=a(49782),d=a(71816);const h=t=>{let{itemData:e,wallID:a,ownerId:s,wall:o}=t;const r=!(![3,4].includes(e.type)||1!=o.ThemeRule.autoPlay),i=l.MH&&o.ThemeRule.aspectImageRatio||!1;return(0,n.jsxs)("div",{className:"tb_wt_media_wrap",role:"button",tabIndex:"0","aria-label":"Post Pop up media wrapper",children:[(0,n.jsx)(c.default,{itemData:e,IconClass:"tb_wt_media_icon",show:!0}),r?(0,n.jsx)(d.A,{VideoClass:"tb_wt_video",data:e,wallID:a,themeID:null===o||void 0===o?void 0:o.ThemeInfo.id,ownerId:s,size:i,isCover:!0,controls:!1,autoPlay:!1,muted:!0,observer:!0}):(0,n.jsx)(_.default,{ImageClass:"tb_wt_image",data:e,wallID:a,themeID:null===o||void 0===o?void 0:o.ThemeInfo.id,ownerId:s,size:i,ThemeRule:o.ThemeRule,observer:!0})]})};var w=a(42691),m=a(59379),p=a(91636);const u=t=>{let{share:e,shareClass:a}=t;const s=(t,e)=>{t.stopPropagation(),e()};return(0,n.jsx)("div",{className:a,children:(0,n.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var b=a(19066);const x=(t,e,a)=>1===t?`https://twitter.com/intent/favorite?tweet_id=${(0,b.Ph)(e)}`:a,f=(t,e,a)=>1===t?`https://twitter.com/intent/tweet?in_reply_to=${(0,b.Ph)(e)}`:a,v=t=>{let{itemData:e,ThemeRule:a}=t;const s=e.network.id,o=3===s||10===s?"like":"heart-outline";return(0,n.jsx)(n.Fragment,{children:12!==s&&15!==s&&20!==s&&21!==s&&29!==s?(0,n.jsxs)("div",{className:"tb_wt_social_action__",role:"navigation",children:[(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:x(s,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":`Post Like Url ${x(s,e.postId,e.link)}`,title:"Favorite",children:[(0,n.jsx)("div",{className:`tb_wt_social_action_ico__ tb__icon tb-${o}`,children:" "}),e.like_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:f(s,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":`Post comment Url ${f(s,e.postId,e.link)}`,title:"Comment",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),1===s?(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsx)("a",{href:`https://twitter.com/intent/retweet?tweet_id=${(0,b.Ph)(e.postId)}`,target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":`Post comment Url https://twitter.com/intent/retweet?tweet_id=${(0,b.Ph)(e.postId)}`,title:"Tweet",children:(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})};var j=a(47043),k=a(81500);const T=t=>{let{itemData:e,personalization:a,ThemeRule:s,wallID:o,clickToShowPopUp:r,itemIndex:c,ownerId:_,onClickToCTA:d,wall:b,ThemeInfo:x}=t;const f=x.id,T=!([53,57,85].includes(f)&&l.MH||1===e.type),I=e.rating>0,C=e.rating>0?"tb_wt_rating_content":"tb_wt_content",N=1===e.type&&a.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",g=a.trimcontent?(0,j.Ex)(e.content,200):e.content;return(0,n.jsx)("div",{id:`tb-wt-post-${e.id}`,className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":e.isShopIcon?1:e.isHotspot?2:0,role:"article","aria-label":`Post ${parseInt(c)+1},${g}`,tabIndex:"0",children:(0,n.jsxs)("div",{className:"tb_wt_post_in",onClick:r(c,e),role:"button","aria-label":"Popup",tabIndex:"0",children:[(0,n.jsx)(i,{ownerId:_,postTime:e.createdAt,author:e.author,network:e.network,font:s,personalization:a,ThemeRule:s,mediaType:T}),(0,n.jsxs)("div",{className:"tb_wt_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[T?(0,n.jsx)(h,{itemData:e,wallID:o,ownerId:_,wall:b},`img${c}_${e.id}`):"",I?(0,n.jsxs)("div",{className:"tb_wt_rating__",children:[(0,n.jsx)(p.A,{rating:e.rating,network:e.network})," "]}):""]}),(0,n.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[e.share.status?(0,n.jsx)(k.default,{share:e.share,shareClass:"tb_wt_share_container",ThemeInfo:x,Post:e}):"",e.ctaStatus?(0,n.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,n.jsx)(m.default,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:d})," "]}):"",s.hideContent&&1!=e.type?"":(0,n.jsx)(w.default,{contentClass:`${C} ${N}`,item:e,content:g,font:s,ThemeRule:s,personalization:a,contentTitle:e.contentTitle}),(0,n.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!s.socialAction?{justifyContent:"flex-end"}:{},children:[s.socialAction?(0,n.jsx)(v,{itemData:e,ThemeRule:s}):"",e.share.status?(0,n.jsx)(u,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},I=t=>{let{postData:e,completeDataObject:a,adjustWidth:s,CardStyle:o,ThemeStyle:r,ProductSetting:i,ThemeInfo:l,clickToShowPopUp:c,onClickToCTA:_}=t;return(0,n.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const d=a[t];return(0,n.jsx)(T,{ownerId:l.ownerId,itemData:d,itemIndex:e,adjustWidth:s,CardStyle:o,ThemeStyle:r,ProductSetting:i,wallID:l.wallId,clickToShowPopUp:c,onClickToCTA:_},`wdt_crd_${e}_${t.id}`)}))})}},58496:(t,e,a)=>{"use strict";var s=a(63687);function o(){}function r(){}r.resetWarningCache=o,t.exports=function(){function t(t,e,a,o,r,n){if(n!==s){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:o};return a.PropTypes=a,a}},32486:(t,e,a)=>{t.exports=a(58496)()},63687:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);