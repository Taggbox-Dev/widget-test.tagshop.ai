"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4033],{84033:(t,o,e)=>{e.r(o),e.d(o,{default:()=>v});var n=e(65043),i=e(78250),l=e(22030),r=e(92908),a=e(65281);var s=e(70579);const d=(0,l.Ln)(1)+1e3*((0,l.Ln)(4)+60*((0,l.Ln)(2)+60*(0,l.Ln)(3))),u=(t,o)=>{var e,n,i,l,s,d;const{cardStyle:u,ctaBtn:c,button:g,popUpProperties:b,ProductSettings:h,heading:v,subheading:f,ticker:p,height:y,reviewTitle:$,reviewBtn:m,reviewStar:w}=(t=>{var o,e,n,i,l,s,d,u,c,g,b,h,v,f,p,y,$,m,w,k,S,T,z,x,C,_,L,I,P,A,H,W;const{ThemeRule:B,ProductSetting:G,SnapUp:M,CustomTicker:F,ThemeStyle:j,CardStyle:E,Reviews:V}=t,{QrCode:q}=M,{CustomBanner:O}=t,D="#ffffff",U="#000000",N="inherit";let X,Q,R,Y,J;"undefined"!==typeof G&&G?({Button:X,CatalogueTitle:Q,Price:R,ProductTitle:Y,Hotspot:J}=G):(Q={fontLink:"",font:"",variant:"",size:"",color:"",text:""},Y={fontLink:"",font:"",variant:"",size:"",color:""},R={fontLink:"",font:"",variant:"",size:"",color:""},X={fontLink:"",font:"",variant:"",size:"",background:"",color:"",text:"",newTab:""},J={type:"",background:"",color:"",status:""});const K=o=>{var e=[],n=[];r.HY&&(e=[61,16,53],n=[4,55,50]),r.aD&&(n=[74,69,71,67,65,68]);const i=!!e.includes(t.ThemeInfo.id),l=!!n.includes(t.ThemeInfo.id),s=i&&1==E.style.mode||l?U:i&&0==E.style.mode?D:E.style.background;return(0,a.vG)(o,s)},Z=t=>{const o=t?t.split("-"):"";return{weight:o[0]?o[0]:"",style:o[1]?o[1]:""}},tt=(t,o,e,n,i)=>t?e:""!=o?o:i,ot=E.globalCTA&&Object.keys(E.globalCTA).length?E.globalCTA:{},et=!(!E.inheritStyles||1!=!r.aD),nt=E.style.size,it=E.style.font,lt=E.author.color,rt=E.author.font,at=E.author.variant,st=E.icon.color;var dt=document.querySelector("body"),ut=document.querySelector("p"),ct=document.querySelector("strong"),gt=document.querySelector("h2"),bt=document.querySelector("h3"),ht=document.querySelector("h1"),vt=dt?window.getComputedStyle(dt):ut?window.getComputedStyle(ut):"",ft=vt?vt.getPropertyValue("font-size"):"",pt=vt&&!r.I2?vt.getPropertyValue("color"):"#2b2b2b",yt=vt?vt.getPropertyValue("font-family"):"",$t=vt?vt.getPropertyValue("line-height"):"",mt=ct?window.getComputedStyle(ct):gt?window.getComputedStyle(gt):bt?window.getComputedStyle(bt):"",wt=document.querySelector(".tb_theme_title");if(wt)var kt=wt.tagName;var St=document.querySelector(".tb_theme_sub_title");if(St)var Tt=St.tagName;var zt=[],xt=[];!function(t,o){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_title")||o(t)}))}(kt,(function(t){var o=window.getComputedStyle(t),e=K(o.color),n=o.fontSize,i=o.fontWeight,l=o.fontFamily,r=o.textAlign;zt.push(e,n,i,l,r)}));var Ct=zt[0]?zt[0]:N,_t=zt[1]?zt[1]:N,Lt=zt[2]?zt[2]:N,It=zt[3]?zt[3]:N,Pt=zt[4]?zt[4]:N;!function(t,o){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_sub_title")||o(t)}))}(Tt,(function(t){var o=window.getComputedStyle(t),e=K(o.color),n=o.fontSize,i=o.fontWeight,l=o.fontFamily,r=o.textAlign;xt.push(e,n,i,l,r)}));var At,Ht=xt[0]?xt[0]:N,Wt=xt[1]?xt[1]:N,Bt=xt[2]?xt[2]:N,Gt=xt[3]?xt[3]:N,Mt=xt[4]?xt[4]:N,Ft=ct?window.getComputedStyle(ct):ht?window.getComputedStyle(ht):gt?window.getComputedStyle(gt):bt?window.getComputedStyle(bt):"",jt=(Ft&&Ft.getPropertyValue("font-size"),mt?mt.getPropertyValue("color"):""),Et=mt?mt.getPropertyValue("font-family"):"",Vt=mt?mt.getPropertyValue("font-weight"):"",qt=mt?mt.getPropertyValue("font-style"):"",Ot=document.querySelector("a"),Dt=document.getElementsByTagName("button"),Ut=(At=Ot?window.getComputedStyle(Ot):Dt.length>0?window.getComputedStyle(Dt[0]):"")?At.getPropertyValue("color"):"",Nt=At?At.getPropertyValue("font-family"):"",Xt=At?At.getPropertyValue("background-color"):"",Qt=At?At.getPropertyValue("border-color"):"",Rt=K(et?pt||U:E.style.color),Yt=et?ft||"14px":nt&&String(nt).includes("px")?nt:`${nt}px`,Jt=et||""==it?yt||N:it||N,Kt=Z(E.style.font).weight?Z(E.style.font).weight:"normal",Zt=Z(E.style.font).style?Z(E.style.font).style:"normal",to=K(st),oo=et&&$t||"1.5",eo=K(jt||U),no=E.style.ratio?`${E.style.ratio}%`:"100%";const io=j.column.desktop;var lo=0;lo=8==io?2:12==io||18==io?3:32==io?4:2;var ro=K(et?jt||U:lt);if(r.aD)var ao=(et||""==it)&&Et||rt||"inherit",so=Z(at).weight?Z(at).weight:"normal",uo=Z(at).style?Z(at).style:"normal";else ao=et||""==it?Et||N:it||N,so=600,uo="normal";var co=et?(0,a.vG)(pt||U,E.style.background):(0,a.vG)(E.style.color,E.style.background),go=Z(E.style.font).weight?Z(E.style.font).weight:"normal",bo=Z(E.style.font).style?Z(E.style.font).style:"normal",ho=et?(0,a.vG)(pt||U,E.style.background):(0,a.vG)(st,E.style.background);if(r.aD)var vo=r.yR?et?16:nt:24;else vo=et?16:nt;var fo=et?(0,a.vG)(jt||U,E.style.background):(0,a.vG)(lt,E.style.background),po=et||""==(null===G||void 0===G||null===(o=G.CatalogueTitle)||void 0===o?void 0:o.font)?Et||N:Q.font,yo=tt(et,Z(Q.variant).style,qt,0,"normal"),$o=tt(et,Z(Q.variant).weight,Vt,0,"600"),mo=et?"16px":`${Q.size}px`,wo=et?(0,a.vG)(jt||U,E.style.background):(0,a.vG)(Q.color,E.style.background),ko=et||""==Y.font?Et||N:Y.font?Y.font:N,So=tt(et,Z(Y.variant).style,qt,0,"normal"),To=tt(et,Z(Y.variant).weight,Vt,0,"600"),zo=et?"14px":`${Y.size}px`,xo=et?(0,a.vG)(jt||U,E.style.background):(0,a.vG)(Y.color,E.style.background),Co=et||""==R.font?Et||N:R.font?R.font:N,_o=tt(et,Z(R.variant).style,qt,0,"normal"),Lo=tt(et,Z(R.variant).weight,Vt,0,"600"),Io=et?"14px":`${R.size}px`,Po=et?(0,a.vG)(jt||U,E.style.background):(0,a.vG)(R.color,E.style.background),Ao=et||""==X.font?Et||N:X.font?X.font:N,Ho=tt(et,Z(X.variant).style,qt,0,"normal"),Wo=tt(et,Z(X.variant).weight,Vt,0,"600"),Bo=et?"14px":`${X.size}px`,Go=X.color,Mo=X.background,Fo=et&&Nt||N,jo=tt(et,Z(X.variant).style,qt,0,"normal"),Eo=tt(et,Z(X.variant).weight,Vt,0,"600"),Vo=et&&Ut?U:"#545454",qo=et&&Xt||D,Oo=et&&Qt?U:"#545454",Do=et||""==(null===ot||void 0===ot?void 0:ot.font)?Et||N:null===ot||void 0===ot?void 0:ot.font,Uo=tt(et,Z(null===ot||void 0===ot?void 0:ot.variant).style,qt,0,"normal"),No=tt(et,Z(null===ot||void 0===ot?void 0:ot.variant).weight,Vt,0,"600"),Xo=et?"14px":`${null===ot||void 0===ot?void 0:ot.size}px`,Qo=null===ot||void 0===ot?void 0:ot.color,Ro=null===ot||void 0===ot?void 0:ot.background,Yo=J.color,Jo=J.background,Ko=(et||null!==q&&void 0!==q&&null!==(e=q.style)&&void 0!==e&&e.font||""==(null===q||void 0===q||null===(n=q.style)||void 0===n?void 0:n.font)||null===q||void 0===q||null===(i=q.style)||void 0===i||i.font,tt(et,Z(null===q||void 0===q||null===(l=q.style)||void 0===l?void 0:l.variant).style,qt,0,"normal"),tt(et,Z(null===q||void 0===q||null===(s=q.style)||void 0===s?void 0:s.variant).weight,Vt,0,"600"),et||null===q||void 0===q||null===(d=q.style)||void 0===d||d.size,null===q||void 0===q||null===(u=q.style)||void 0===u||u.color,null===q||void 0===q||null===(c=q.style)||void 0===c||c.background,`${null===F||void 0===F?void 0:F.title_font_size}px`),Zo=null===F||void 0===F?void 0:F.subtitle_css_font,te=null===F||void 0===F?void 0:F.title_font_color,oe=null===F||void 0===F?void 0:F.title_backgroud_color,ee=Z(null===F||void 0===F?void 0:F.title_font_varient).weight,ne=`${null===F||void 0===F?void 0:F.subTitle_font_size}px`,ie=null===F||void 0===F?void 0:F.subtitle_css_font,le=null===F||void 0===F?void 0:F.subTitle_font_color,re=null===F||void 0===F?void 0:F.subTitle_backgroud_color,ae=Z(null===F||void 0===F?void 0:F.subtitle_font_varient).weight,se=1==(null===F||void 0===F?void 0:F.status)?parseInt(null===F||void 0===F?void 0:F.ticker_height):0,de=1==(null===O||void 0===O?void 0:O.status)?parseInt(null===O||void 0===O?void 0:O.banner_height):0,ue=et?Et||N:null===V||void 0===V||null===(g=V.title)||void 0===g||null===(b=g.style)||void 0===b?void 0:b.font,ce=tt(et,Z(null===V||void 0===V||null===(h=V.title)||void 0===h||null===(v=h.style)||void 0===v?void 0:v.variant).style,qt,0,"normal"),ge=tt(et,Z(null===V||void 0===V||null===(f=V.title)||void 0===f||null===(p=f.style)||void 0===p?void 0:p.variant).weight,Vt,0,"600"),be=et?"14px":`${null===V||void 0===V||null===(y=V.title)||void 0===y||null===($=y.style)||void 0===$?void 0:$.size}px`,he=null===V||void 0===V||null===(m=V.title)||void 0===m||null===(w=m.style)||void 0===w?void 0:w.color,ve=et?Et||N:null===V||void 0===V||null===(k=V.button)||void 0===k||null===(S=k.style)||void 0===S?void 0:S.font,fe=tt(et,Z(null===V||void 0===V||null===(T=V.button)||void 0===T||null===(z=T.style)||void 0===z?void 0:z.variant).style,qt,0,"normal"),pe=tt(et,Z(null===V||void 0===V||null===(x=V.button)||void 0===x||null===(C=x.style)||void 0===C?void 0:C.variant).weight,Vt,0,"600"),ye=et?"14px":`${null===V||void 0===V||null===(_=V.button)||void 0===_||null===(L=_.style)||void 0===L?void 0:L.size}px`,$e=null===V||void 0===V||null===(I=V.button)||void 0===I||null===(P=I.style)||void 0===P?void 0:P.color,me=null===V||void 0===V||null===(A=V.button)||void 0===A||null===(H=A.style)||void 0===H?void 0:H.background,we=null===V||void 0===V||null===(W=V.star)||void 0===W?void 0:W.color;return{cardStyle:{color:Rt,fontSize:Yt,font:Jt,fontWeight:Kt,fontStyle:Zt,iconColor:to,lineHeight:oo,linkColor:eo,background:E.style.background,authorColor:ro,cardPadding:null!==B&&void 0!==B&&B.padding?`${B.padding}px`:"0px",authorFont:ao,authorFontWeight:so,authorFontStyle:uo,radius:[55].includes(t.ThemeInfo.id)?"50%":`${t.CardStyle.style.radius}px`,iconPosition:12+(t.CardStyle.style.radius?t.CardStyle.style.radius/3.5:0)+"px",cardSize:no,rows:lo},ctaBtn:{font:Do,variant:Uo,weight:No,size:Xo,color:Qo,background:Ro,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:Qo,backgroundHover:Ro},button:{font:Fo,variant:jo,weight:Eo,size:"14px",color:Vo,borderColor:Oo,background:qo,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:Vo,backgroundHover:qo},popUpProperties:{background:E.style.background,font:Jt,fontSize:`${vo}px`,color:co,iconColor:ho,fontWeight:go,fontStyle:bo,authorFont:ao,authorFontSize:"14px",authorColor:fo,authorfontWeight:"600"},ProductSettings:{CatalogueTitle:{font:po,variant:yo,weight:$o,size:mo,color:wo},ProductTitle:{font:ko,variant:So,weight:To,size:zo,color:xo},Price:{font:Co,variant:_o,weight:Lo,size:Io,color:Po},Button:{font:Ao,variant:Ho,weight:Wo,size:Bo,color:Go,background:Mo},Hotspot:{color:Yo,background:Jo,status:1}},SnapUp:M,heading:{title:{size:_t,font:It,fontWeight:Lt,color:Ct,textalign:Pt}},subheading:{subtitle:{size:Wt,font:Gt,fontWeight:Bt,color:Ht,textalign:Mt}},ticker:{heading:{size:Ko,font:Zo,fontWeight:ee,color:te,background:oe},desc:{size:ne,font:ie,fontWeight:ae,color:le,background:re}},height:{banner:`${de}px`,ticker:`${se}px`},reviewTitle:{font:ue,variant:ce,weight:ge,size:be,color:he},reviewBtn:{font:ve,variant:fe,weight:pe,size:ye,color:$e,background:me},reviewStar:{color:we}}})(t),{QrCode:k}=t.SnapUp;return`${o?"[data-wall-id],[data-widget-id]":":root,[data-widget-id]"} {\n        --tb-color: ${u.color};\n        --tb-font-size: ${u.fontSize};\n        --tb-font: ${u.font};\n        --tb-font-weight: ${u.fontWeight};\n        --tb-font-tyle: ${u.fontStyle};\n        --tb-icon-color:${u.iconColor};\n        --tb-line-height: ${u.lineHeight};\n        --tb-link-color: ${u.linkColor};\n        --tb-bg-color: ${u.background};\n        --tb-background-size: contain;\n        --tb-author-color: ${u.authorColor};\n        --tb-author-font: ${u.authorFont};\n        --tb-author-font-weight: ${u.authorFontWeight};\n        --tb-author-font-style: ${u.authorFontStyle};\n        --tb-border-radius: ${u.radius};\n        --tb-icon-position:${u.iconPosition};\n        --tb-media-size:${u.cardSize};\n        --tb-padding:${u.cardPadding};\n        --tb-grid-row:${u.rows};\n\n        --tb-cta-color:${c.color};\n        --tb-cta-bg-color:${c.background};\n        --tb-cta-border-color:${c.borderColor};\n        --tb-cta-color-hover:${c.colorHover};\n        --tb-cta-bg-color-hover:${c.backgroundHover};\n        --tb-cta-border-color-hover:${c.borderHover};\n        --tb-cta-border-radius:${c.radius};\n        --tb-cta-padding:${c.padding};\n        --tb-cta-height:${c.minHeight};\n        --tb-cta-width:${c.minWidth};\n        --tb-cta-font:${c.font};\n        --tb-cta-font-weight:${c.weight};\n        --tb-cta-transition:${c.transition};\n\n        --tb-btn-color:${g.color};\n        --tb-btn-bg-color:${g.background};\n        --tb-btn-border-color:${g.borderColor};\n        --tb-btn-color-hover:${g.colorHover};\n        --tb-btn-bg-color-hover:${g.backgroundHover};\n        --tb-btn-border-color-hover:${g.borderHover};\n        --tb-btn-border-radius:${g.radius};\n        --tb-btn-padding:${g.padding};\n        --tb-btn-height:${g.minHeight};\n        --tb-btn-width:${g.minWidth};\n        --tb-btn-font:${g.font};\n        --tb-btn-font-weight:${g.weight};\n        --tb-btn-transition:${g.transition};\n\n        --tb-popup-color:${b.color};\n        --tb-popup-bg-color:${b.background};\n        --tb-popup-font:${b.font};\n        --tb-popup-font-size:${b.fontSize};\n        --tb-popup-icon-color:${b.iconColor};\n        --tb-popup-font-weight:${b.fontWeight};\n        --tb-popup-font-style: ${b.fontStyle};\n\n        --tb-popup-author-font:${b.authorFont};\n        --tb-popup-author-font-size:${b.authorFontSize};\n        --tb-popup-author-font-weight:${b.authorfontWeight};\n        --tb-popup-author-font-style:${b.authorfontWeight};\n        --tb-popup-author-color:${b.authorColor};\n\n\n        --tb-catalogue-font:${h.CatalogueTitle.font};\n        --tb-catalogue-varient:${h.CatalogueTitle.varient};\n        --tb-catalogue-weight:${h.CatalogueTitle.weight};\n        --tb-catalogue-size:${h.CatalogueTitle.size};\n        --tb-catalogue-color:${h.CatalogueTitle.color};\n\n        --tb-product-font:${h.ProductTitle.font};\n        --tb-product-varient:${h.ProductTitle.varient};\n        --tb-product-size:${h.ProductTitle.size};\n        --tb-product-color:${h.ProductTitle.color};\n\n        --tb-price-font:${h.Price.font};\n        --tb-price-weight:${h.Price.weight};\n        --tb-price-varient:${h.Price.varient};\n        --tb-price-size:${h.Price.size};\n        --tb-price-color:${h.Price.color};\n\n        --tb-shop-btn-font:${h.Button.font};\n        --tb-shop-btn-weight:${h.Button.weight};\n        --tb-shop-btn-varient:${h.Button.varient};\n        --tb-shop-btn-size:${h.Button.size};\n        --tb-shop-btn-color:${h.Button.color};\n        --tb-shop-btn-bg-color:${h.Button.background};\n\n        --tb-hotspot-color:${h.Hotspot.color};\n        --tb-hotspot-bg-color:${h.Hotspot.background};\n\n        --tb-su-btn-font:${null===k||void 0===k||null===(e=k.style)||void 0===e?void 0:e.font};\n        --tb-su-btn-varient:${null===k||void 0===k||null===(n=k.style)||void 0===n?void 0:n.varient};\n        --tb-su-btn-weight:${null===k||void 0===k||null===(i=k.style)||void 0===i?void 0:i.weight};\n        --tb-su-btn-size:${null===k||void 0===k||null===(l=k.style)||void 0===l?void 0:l.size};\n        --tb-su-btn-color:${null===k||void 0===k||null===(s=k.style)||void 0===s?void 0:s.color};\n        --tb-su-btn-background:${null===k||void 0===k||null===(d=k.style)||void 0===d?void 0:d.background};\n\n        --tb-t-font-size:${v.title.size};\n        --tb-t-font-family:${v.title.font};\n        --tb-t-font-weight:${v.title.fontWeight};\n        --tb-t-color:${v.title.color};\n        --tb-t-text-align:${v.title.textalign};\n\n        --tb-st-font-size:${f.subtitle.size};\n        --tb-st-font-family:${f.subtitle.font};\n        --tb-st-font-weight:${f.subtitle.fontWeight};\n        --tb-st-color:${f.subtitle.color};\n        --tb-st-text-align:${f.subtitle.textalign};\n\n        --tb-ti-title-font-size:${p.heading.size};\n        --tb-ti-title-font-family:${p.heading.font};\n        --tb-ti-title-font-weight:${p.heading.fontWeight};\n        --tb-ti-title-color:${p.heading.color};\n        --tb-ti-title-background:${p.heading.background};\n        --tb-ti-desc-font-size:${p.desc.size};\n        --tb-ti-desc-font-family:${p.desc.font};\n        --tb-ti-desc-font-weight:${p.desc.fontWeight};\n        --tb-ti-desc-color:${p.desc.color};\n        --tb-ti-desc-background:${p.desc.background};\n        --tb-theme-height:calc(100vh - ${y.banner} - ${y.ticker});\n        --tb-banner-height:${y.banner};\n        --tb-ticker-height:${y.ticker};\n        \n        --tb-re-title-font:${$.font};\n        --tb-re-title-varient:${$.variant};\n        --tb-re-title-size:${$.size};\n        --tb-re-title-color:${$.color};\n\n        --tb-btn-review-font:${m.font};\n        --tb-btn-review-varient:${m.variant};\n        --tb-btn-review-size:${m.size};\n        --tb-btn-review-color:${m.color};\n        --tb-btn-review-bg-color:${m.background};\n\n        --tb-review-start-color:${w.color};\n\n    }`},c=t=>{var o,e;const n=!r.sb&&((null===(o=document.querySelectorAll("[data-wall-id]"))||void 0===o?void 0:o.length)>0||(null===(e=document.querySelectorAll("[data-widget-id]"))||void 0===e?void 0:e.length)>0),i=u(t,n),a=`style-root-${t.ThemeInfo.wallId}`;document.getElementById(a)||(0,l.eY)(i,"style",a)},g=t=>{const o=`css-${t.ThemeInfo.wallId}`;document.getElementById(o)||1!==t.ThemeStyle.css.status||(0,l.eY)(t.ThemeStyle.css.code,"style",o)},b=()=>{try{const t=(0,l.eA)(window.location.href,"lang");document.documentElement.setAttribute("lang",t||"de")}catch(t){console.error("Error setting language:",t)}};class h extends n.PureComponent{constructor(){super(...arguments),this.state={HASHTAG_CAMP_IMG:""},this.updateHashtagImage=t=>{const{wall:o}=t;if(!(0,l.vq)("hashtag_campaign")||null===o||void 0===o||!o.ThemeInfo.wallId)return;const e=(0,l.vq)("hashtag_campaign")?`https://cloud.taggbox.com/wall-branding/wallId_widget_${o.ThemeInfo.wallId}.jpg?v=${d}`:`${i.th}widget/assets/media/theme/themeThumb${o.ThemeInfo.id}.png`;this.setState({HASHTAG_CAMP_IMG:e})}}componentDidMount(){this.updateHashtagImage(this.props)}componentDidUpdate(t){const{wall:o}=this.props;var e;t.wall!==o&&((r.I2||(0,l.vq)("addfeedload=load"))&&((t=>{try{[`#style-root-${t}`,`#css-${t}`].forEach((t=>{const o=document.querySelector(t);null===o||void 0===o||o.remove()}))}catch(o){console.error("Error removing CSS:",o)}})(null===o||void 0===o||null===(e=o.Wall)||void 0===e?void 0:e.id),this.updateHashtagImage(this.props)))}render(){const{HASHTAG_CAMP_IMG:t}=this.state,{wall:o}=this.props,{CardStyle:e,ThemeInfo:n,ProductSetting:a,Banner:d}=o,{QrCode:u}=o.SnapUp,{Ticker:h}=null!==o&&void 0!==o&&o.Ticker?null===o||void 0===o?void 0:o.Ticker:[],v=n.wallName,f=r.Qy?"Tagbox UGC Suite":r.aD?" Live SocialWall - Tagbox":"Taggbox",p=[r.V2.TAGSHOP,r.V2.TAGSHOP_TEST,r.V2.TAGBOX,r.V2.TAGBOX_TEST,r.V2.TAGEMBED,r.V2.TAGEMBED_TEST,r.V2.SOCIALWALL,r.V2.SOCIALWALL_TEST,r.V2.SOCIALEMBED].some((t=>(0,l.vq)(t))),y=[{property:"type",content:"website"},{property:"url",content:`${r.V2.TAGBOX_LITE}${n.wallId}`},{property:"title",content:`${v} - ${f} Widget`},{property:"description",content:`${v} hashtag campaign created using ${f} Widget.`},{property:"image",content:t}],$=[{property:"type",content:"website"},{property:"url",content:`${r.V2.TAGBOX_LITE}/${n.wallId}`},{property:"title",content:`${v} - ${f} Widget`},{property:"description",content:`${v} featuring Social Feed using ${f} Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.`}];var m=["inherit","Default","0"],w=["Inter"];return e.inheritStyles||!e.style.fontLink||m.includes(e.style.fontLink)||w.push(e.style.fontLink),e.inheritStyles||!e.author.fontLink||m.includes(e.author.fontLink)||w.push(e.author.fontLink),d&&Object.keys(d).length&&(d.subTitle.style.fontLink&&!m.includes(d.subTitle.style.fontLink)&&w.push(d.subTitle.style.fontLink),d.title.style.fontLink&&!m.includes(d.title.style.fontLink)&&w.push(d.title.style.fontLink)),!e.inheritStyles&&a&&Object.keys(a).length&&(a.Button.fontLink&&!m.includes(a.Button.fontLink)&&w.push(a.Button.fontLink),a.CatalogueTitle.fontLink&&!m.includes(a.CatalogueTitle.fontLink)&&w.push(a.CatalogueTitle.fontLink),a.Price.fontLink&&!m.includes(a.Price.fontLink)&&w.push(a.Price.fontLink),a.ProductTitle.fontLink&&!m.includes(a.ProductTitle.fontLink)&&w.push(a.ProductTitle.fontLink)),!e.inheritStyles&&u&&Object.keys(u).length&&u&&u.style.fontLink&&!m.includes(u.style.fontLink)&&w.push(u.style.fontLink),h&&Object.keys(h).length&&(h.title.style.fontLink&&!m.includes(h.title.style.fontLink)&&w.push(h.title.style.fontLink),h.subTitle.style.fontLink&&!m.includes(h.subTitle.style.fontLink)&&w.push(h.subTitle.style.fontLink)),w=w.filter(((t,o,e)=>e&&e.indexOf(t)===o)),(0,s.jsxs)(s.Fragment,{children:[p?(0,s.jsx)("title",{children:`${n.wallName} | ${f}`}):null,p&&$&&Object.keys($).length&&$.map((t=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:`${t.property}`,content:t.content}),(0,s.jsx)("meta",{name:`og:${t.property}`,content:t.content})]}))),p&&y&&Object.keys(y).length&&y.map((t=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:`${t.property}`,content:t.content}),(0,s.jsx)("meta",{name:`og:${t.property}`,content:t.content})]}))),o.ThemeInfo&&o.ThemeInfo.gtStatus?(0,s.jsx)("script",{children:`window.dataLayer = window.dataLayer || [];\n                        function gtag() {\n                            dataLayer.push(arguments);\n                        }\n                        gtag("js", new Date());\n                        window.gaTokenClient = '${o.ThemeInfo.gtCode}';\n                        gtag("event", "page_view", {\n                            "send_to": window.gaTokenClient,\n                            "anonymize_ip": true,\n                        });`}):null,r.yR&&o.ThemeInfo&&o.ThemeInfo.gtStatus?(0,s.jsx)("script",{async:!0,defer:!0,src:"https://www.googletagmanager.com/gtag/js",onLoad:()=>console.log("script loaded")}):null,w&&Array.isArray(w)&&w.map(((t,o)=>(0,s.jsx)("link",{rel:"stylesheet",href:`${i.th}/web-fonts/${t}.css`},o))),132857==o.ThemeInfo.ownerId&&r.MH?b():null,c(o),g(o)]})}}const v=h},65281:(t,o,e)=>{e.d(o,{C9:()=>f,Cq:()=>v,HI:()=>b,Ph:()=>S,S2:()=>w,TW:()=>I,Ul:()=>g,Uy:()=>d,fF:()=>p,hZ:()=>$,hz:()=>h,iS:()=>c,p5:()=>_,pj:()=>L,sl:()=>k,um:()=>u,vG:()=>C,w:()=>y,wG:()=>m});var n=e(92908),i=e(78250),l=e(23499);let r=[],a=!1;const s=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${n.$x}`,Productdomain:n.QR}),d=t=>{var o;return null===(o=document.getElementById("tb_onsite_btn_id"))||void 0===o?void 0:o.classList.toggle("tb_onsite_btn_disabled",1===t)},u=t=>{var o,e;return null===(o=(e={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[t])||void 0===o?void 0:o.call(e)},c=t=>{const o=new Date(1e3*t);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][o.getMonth()]} ${o.getDate()}, ${o.getFullYear()}`},g=()=>Math.floor(1e4*Math.random()).toString().padStart(4,"0"),b=t=>{try{r.push(t)}catch(o){console.log(o)}},h=t=>t&&""!==t&&!t.includes("ui-avatars"),v=t=>{if(!t)return"0 Byte";const o=Math.floor(Math.log(t)/Math.log(1024));return{size:Math.round(t/Math.pow(1024,o),2),sizeText:["Bytes","KB","MB","GB","TB"][o]}},f=t=>t.startsWith("http://")||t.startsWith("https://")?t:"https://"+t,p=t=>{const o=Date.now()-1e3*t;if(o<6e4)return"just now";const e=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((t=>{let{ms:e}=t;return o>=e})),n=Math.floor(o/e.ms);return`${n} ${e.label}${n>1?"s":""} ago`},y=t=>{try{return null!==t&&void 0!==t&&t.includes("http")?[...new Set(t.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((t,o)=>t.replaceAll(o,`<a class="text_links_" role="link" target="_blank" href="${o}">${o}</a>`)),t):t}catch{return t}},$=()=>[`${i.om}`,"Website Widget"],m=t=>t&&String(t)?unescape(t).split("/").pop().split("/").slice(-1).join().split(".").shift():"",w=["localhost","widget","wall_id="].every((t=>(0,n.vq)(t)))?"taggbox_main":n.MH||[`${n.Xg}.${n.IF}`,`${n.Xg}${n.t6}${n.IF}`,`${n.Xg}s.${n.IF}`].some((t=>(0,n.vq)(t)))?"tag_main__root":n.HY?"taggShopRoot":"taggbox_main",k=t=>{const o=Math.floor(Math.log10(t)/3)||0;return o?+(t/Math.pow(1e3,o)).toFixed(0)+["","K","M","B","T"][o]:t},S=t=>n.MH?t:atob(t),T=t=>{if(null===(e=t)||void 0===e?void 0:e.startsWith("#")){const o=parseInt(t.slice(1),16);return{r:o>>16&255,g:o>>8&255,b:255&o}}{var o;const e=(null===t||void 0===t||null===(o=t.match(/\d+/g))||void 0===o?void 0:o.map(Number))||[0,0,0];return{r:e[0],g:e[1],b:e[2]}}var e},z=t=>{const{r:o,g:e,b:n}=T(t);return Math.sqrt((255-o)**2+(255-e)**2+(255-n)**2)<=30},x=t=>{const{r:o,g:e,b:n}=T(t);return Math.sqrt((o-50)**2+(e-50)**2+(n-50)**2)<50},C=(t,o)=>{var e;null!==(e=t)&&void 0!==e&&e.startsWith("rgba")&&(t="#000000");const n=(t,o)=>o.some((o=>null===t||void 0===t?void 0:t.includes(o))),i=t=>n(t,["ffffff","255, 255, 255","#fff"]),l=t=>n(t,["000000","0, 0, 0","#000"]),[r,a]=[z(t),x(t)],[s,d]=[z(o),x(o)];return r&&s||i(t)&&i(o)?"#000000":a&&d||l(t)&&l(o)?"#ffffff":t},_=(t,o,e)=>t&&t.length>0?t.findIndex((t=>t.id===o)):e,L=()=>{try{const{wall:t}=l.A.getState().appData,{webId:o,wallId:e,ownerId:i}=t.ThemeInfo;a||(window.addEventListener("beforeunload",(()=>{if(0===r.length)return;const t=r.reduce(((t,o)=>t+o),0);t>0?fetch(n.KQ,{method:"POST",headers:s,body:JSON.stringify({playCount:r.length,id:n.HY?o:e,playTime:t,owner:i}),keepalive:!0}).finally((()=>(r=[],a=!1))):(r=[],a=!1)})),a=!0)}catch(t){console.error(t)}},I=t=>new Promise(((o,e)=>Object.assign(new Image,{onload:function(){o({width:this.naturalWidth,height:this.naturalHeight})},onerror:t=>e(new Error(`Image loading error: ${t.message}`)),src:t})))}}]);
//# sourceMappingURL=4033.198bce47.chunk.js.map