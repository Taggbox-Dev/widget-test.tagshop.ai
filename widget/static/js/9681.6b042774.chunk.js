"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9681],{59681:(t,o,n)=>{n.r(o),n.d(o,{default:()=>f});var e=n(72791),a=n(77581),r=n(60173),i=n(54270),c=n(70188),l=n(2703),s=n(11225),g=n(46535),d=n(80184);const b=(0,l.CL)()+1e3*((0,l.QM)()+60*((0,l.dn)()+60*(0,l.eZ)())),u=()=>(0,d.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),p=(t,o,n,e,a,r,i,c,l,s,g,b,u,p,h,f)=>(0,d.jsx)("style",{children:":root {\n                        --tb-base-color: ".concat(t,";\n                        --tb-base-font-size:").concat(o,";\n                        --tb-author-color: ").concat(n,";\n                        --tb-link-color: ").concat(e,";\n                        --tb-line-height: ").concat(c,";\n                        --tb-font-weight: ").concat(l,";\n                        --tb-author-font: ").concat(s,";\n                        --tb-base-font: ").concat(g,";\n                        --tb-bg-color: ").concat(b,";\n                        --tb-border-radius: ").concat(u,";\n\n                        --tb-cta-color:").concat(a.btnColor,";\n                        --tb-cta-bg-color:").concat(a.btnBgColor,";\n                        --tb-cta-border-color:").concat(a.btnBorderColor,";\n                        --tb-cta-color-hover:").concat(a.btnColorHover,";\n                        --tb-cta-bg-color-hover:").concat(a.btnBgColorHover,";\n                        --tb-cta-border-color-hover:").concat(a.btnBorderColorHover,";\n                        --tb-cta-border-radius:").concat(a.btnRadius,";\n                        --tb-cta-padding:").concat(a.btnPadding,";\n                        --tb-cta-height:").concat(a.btnMinHeight,";\n                        --tb-cta-width:").concat(a.btnMinWidth,";\n                        --tb-cta-font:").concat(a.btnFont,";\n                        --tb-cta-font-weight:").concat(a.btnWeight,";\n                        --tb-cta-transition:").concat(a.btnTransition,";\n\n                        --tb-btn-color:").concat(r.btnColor,";\n                        --tb-btn-bg-color:").concat(r.btnBgColor,";\n                        --tb-btn-border-color:").concat(r.btnBorderColor,";\n                        --tb-btn-color-hover:").concat(r.btnColorHover,";\n                        --tb-btn-bg-color-hover:").concat(r.btnBgColorHover,";\n                        --tb-btn-border-color-hover:").concat(r.btnBorderColorHover,";\n                        --tb-btn-border-radius:").concat(r.btnRadius,";\n                        --tb-btn-padding:").concat(r.btnPadding,";\n                        --tb-btn-height:").concat(r.btnMinHeight,";\n                        --tb-btn-width:").concat(r.btnMinWidth,";\n                        --tb-btn-font:").concat(r.btnFont,";\n                        --tb-btn-font-weight:").concat(r.btnWeight,";\n                        --tb-btn-transition:").concat(r.btnTransition,";\n\n                        --tb-popup-author-color:").concat(p.authorColor,";\n                        --tb-popup-color:").concat(p.color,";\n                        --tb-popup-font-size:").concat(p.fontSize,";\n                        --tb-popup-icon-color:").concat(p.iconColor,";\n\n\n\n                        --tb-catalogue-font:").concat(i.CatalogueTitle.font,";\n                        --tb-catalogue-varient:").concat(i.CatalogueTitle.varient,";\n                        --tb-catalogue-size:").concat(i.CatalogueTitle.size,";\n                        --tb-catalogue-color:").concat(i.CatalogueTitle.color,";\n\n                        --tb-product-font:").concat(i.ProductTitle.font,";\n                        --tb-product-varient:").concat(i.ProductTitle.varient,";\n                        --tb-product-size:").concat(i.ProductTitle.size,";\n                        --tb-product-color:").concat(i.ProductTitle.color,";\n\n                        --tb-price-font:").concat(i.Price.font,";\n                        --tb-price-varient:").concat(i.Price.varient,";\n                        --tb-price-size:").concat(i.Price.size,";\n                        --tb-price-color:").concat(i.Price.color,";\n\n                        --tb-shop-btn-font:").concat(i.Button.font,";\n                        --tb-shop-btn-varient:").concat(i.Button.varient,";\n                        --tb-shop-btn-size:").concat(i.Button.size,";\n                        --tb-shop-btn-color:").concat(i.Button.color,";\n                        --tb-shop-btn-bg-color:").concat(i.Button.background,";\n\n                        --tb-hotspot-color:").concat(i.Hotspot.color,";\n                        --tb-hotspot-bg-color:").concat(i.Hotspot.background,";\n\n                        --tb-icon-position:").concat(h,";\n\n                        --tb-snap-font:").concat(f.font,";\n                        --tb-snap-varient:").concat(f.varient,";\n                        --tb-snap-size:").concat(f.size,";\n                        --tb-snap-color:").concat(f.color,";\n                        --tb-snap-bg-color:").concat(f.background,";\n                        \n                    }")});class h extends e.PureComponent{constructor(t){super(t),this.ThemesStaticValues=t=>{switch(t){case 4:case 55:case 50:case 16:case 56:return["authorColor","iconColor","baseColor","ctaBg","ctaText"];case 49:return["authorColor","iconColor"]}},this.isStatic=t=>{const o=this.ThemesStaticValues(this.props.wall.Personalization.widgetTheme);return o&&null!=o?!!o.includes(t):null},this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?"".concat("https://cloud.taggbox.com/wall-branding/wallId_widget_").concat(t.wall.Wall.id,".jpg?v=").concat(b):"",baseColor:"#545454",baseFontSize:"14px",iconColor:"#000000",authorColor:"#000000",linkColor:"#3333FF",lineHeight:"1.5",fontWeight:"400",authorFont:"Inter, sans-serif",baseFont:"Inter, sans-serif",bgColor:"#ffffff",borderRadius:"0px",iconPosition:12,btnCTAProperties:{btnColor:"#ffffff",btnBgColor:"#2b2b2b",btnBorderColor:"#2b2b2b",btnColorHover:"#ffffff",btnBgColorHover:"#000000",btnBorderColorHover:"#000000",btnPadding:"8px 10px",btnRadius:"3px",btnMinHeight:"40px",btnMinWidth:"115px",btnFont:"Inter, sans-serif",btnWeight:400,btnTransition:"all .3s ease-out 0s"},btnProperties:{btnColor:"#2b2b2b",btnBgColor:"#ffffff",btnBorderColor:"#2b2b2b",btnColorHover:"#2b2b2b",btnBgColorHover:"#ffffff",btnBorderColorHover:"#2b2b2b",btnPadding:"8px 10px",btnRadius:"3px",btnMinHeight:"40px",btnMinWidth:"115px",btnFont:"Inter, sans-serif",btnWeight:400,btnTransition:"none"},popUpProperties:{fontSize:"14px",color:"#545454",iconColor:"#000000"},ProductSettings:{CatalogueTitle:{font:"",varient:"regular",size:"19",color:"#ff0303",text:"tttt"},ProductTitle:{font:"Rochester",varient:"100-italic",size:"17",color:"#1cbfaf"},Price:{font:"Homenaje",varient:"regular",size:"20",color:"#ff0000"},Button:{font:"Lato",varient:"100-italic",size:"17",background:"#ff0000",color:"#ffffff",text:"Shop Now",newTab:"1"},Hotspot:{type:"1",color:"#ff1414",background:"#ffffff",status:1}},UgcSettings:{font:"Homenaje",varient:"regular",size:"20",color:"#ff0000",background:"#ffffff"}}}componentDidMount(){const{hashtag_campaign_image:t,baseColor:o,baseFontSize:n,authorColor:e,linkColor:a,fontWeight:i,authorFont:c,baseFont:d,btnCTAProperties:b,btnProperties:u,lineHeight:p,bgColor:h,borderRadius:f,popUpProperties:m,ProductSetting:w,UgcSettings:C}=this.state,_=!!window.location.href.includes("hashtag_campaign"),{wall:y}=this.props,P=y.Wall.id,x=y.Wall.owner,S=y.ThemeRule,k=y.Personalization,v=y.ProductSetting,T=y.UgcSettings,B=!(!S.inheritStyles||1!=S.inheritStyles);var j=document.querySelector("body"),W=document.querySelector("strong"),z=document.querySelector("p"),H=document.querySelector("h2"),L=document.querySelector("h3"),F=document.querySelector("a"),U=document.getElementsByTagName("button");U=U&&U.length>5?window.getComputedStyle(U[5]):U&&1==U.length&&U[0]?window.getComputedStyle(U[0]):window.getComputedStyle(F),W=W?window.getComputedStyle(W):L?window.getComputedStyle(L):H?window.getComputedStyle(H):"";var R=j?window.getComputedStyle(j).getPropertyValue("color"):"";R=(0,l.uu)(R,S.cardColor);var V=j?window.getComputedStyle(j).getPropertyValue("font-size"):"",M=j?window.getComputedStyle(j).getPropertyValue("font-family"):"",q=j?window.getComputedStyle(j).getPropertyValue("line-height"):"",I=z?window.getComputedStyle(z).getPropertyValue("font-weight"):"",D=W?W.getPropertyValue("color"):"#2b2b2b";D=(0,l.uu)(D,S.cardColor);var Q=W?W.getPropertyValue("font-family"):"",O=W?W.getPropertyValue("color"):"",X=U?U.getPropertyValue("color"):"",Z=U?U.getPropertyValue("border-color"):"",E=U?U.getPropertyValue("background-color"):"",N=U?U.getPropertyValue("padding"):"",A=U?U.getPropertyValue("border-radius"):"",G=U?U.getPropertyValue("height"):"",$=U?U.getPropertyValue("width"):"",J=U?U.getPropertyValue("font-weight"):"",K=U?U.getPropertyValue("font-family"):"",Y=U?U.getPropertyValue("transition"):"",tt=U?U.getPropertyValue("color"):"",ot=U?U.getPropertyValue("border-color"):"",nt=U?U.getPropertyValue("background-color"):"";[61,16,53,4,50,55].includes(k.widgetTheme)&&(1==S.postHover?(0,l.uu)(S.fontColor,"#000000"):(0,l.uu)(S.fontColor,"#ffffff"));console.log("ThemeRule.fontColor wall",y),this.setState({authorColor:!this.isStatic("authorColor")&&B&&D||(0,l.uu)(S.authorColor,S.cardColor),authorFont:!this.isStatic("authorFont")&&B&&Q||S.css_font,baseColor:!this.isStatic("baseColor")&&B&&R||(0,l.uu)(S.fontColor,S.cardColor),baseFont:B?M||d:S.css_font,linkColor:B?O||a:S.iconColor,baseFontSize:!this.isStatic("baseFontSize")&&B?V||n:"".concat(S.fontSize,"px"),fontWeight:B?I||i:S.font_varient,borderRadius:"".concat(S.radius,"px"),bgColor:S.cardColor,lineHeight:B&&q||p,iconColor:this.isStatic("iconColor")&&1!=S.iconType?"#ffffff":1==S.iconType?S.iconColor:"",iconPosition:"".concat(S.radius/3.5+12,"px"),btnCTAProperties:{btnColor:B?X:b.btnColor,btnBgColor:B?E:b.btnBgColor,btnBorderColor:B?Z:b.btnBorderColor,btnColorHover:B?tt:b.btnColorHover,btnBgColorHover:B?nt:b.btnBgColorHover,btnBorderColorHover:B?ot:b.btnBorderColorHover,btnPadding:B?N:b.btnPadding,btnRadius:B?A:b.btnRadius,btnMinHeight:B?G:b.btnMinHeight,btnMinWidth:B?$:b.btnMinWidth,btnWeight:B?J:b.btnWeight,btnFont:B?K:b.btnFont,btnTransition:B?Y:b.btnTransition},btnProperties:{btnColor:B?X:u.btnColor,btnBgColor:B?E:u.btnBgColor,btnBorderColor:B?Z:u.btnBorderColor,btnColorHover:B?tt:u.btnColorHover,btnBgColorHover:B?nt:u.btnBgColorHover,btnBorderColorHover:B?ot:u.btnBorderColorHover,btnPadding:B?"5px 10px":u.btnPadding,btnRadius:B?A:u.btnRadius,btnMinHeight:B?G:u.btnMinHeight,btnMinWidth:B?$:u.btnMinWidth,btnWeight:B?J:u.btnWeight,btnFont:B?K:u.btnFont,btnTransition:B?Y:u.btnTransition},popUpProperties:{authorColor:B?D||m.authorColor:(0,l.uu)(S.authorColor,S.cardColor),iconColor:1!=S.iconType?"#ffffff":1==S.iconType?S.iconColor:"",fontSize:B?V:r.tq?"".concat(S.fontSize,"px"):r.Em?S.fontSize:"".concat(S.fontSize+4,"px"),color:B?R||m.color:(0,l.uu)(S.fontColor,S.cardColor)},ProductSettings:{CatalogueTitle:{font:v.CatalogueTitle.font,varient:v.CatalogueTitle.varient,size:"".concat(v.CatalogueTitle.size,"px"),color:v.CatalogueTitle.color},ProductTitle:{font:v.ProductTitle.font,varient:v.ProductTitle.varient,size:"".concat(v.ProductTitle.size,"px"),color:v.ProductTitle.color},Price:{font:v.Price.font,varient:v.Price.varient,size:"".concat(v.Price.size,"px"),color:v.Price.color},Button:{font:v.Button.font,varient:v.Button.varient,size:"".concat(v.Button.size,"px"),color:v.Button.color,background:v.Button.background},Hotspot:{color:v.Hotspot.color,background:v.Hotspot.background}},UgcSettings:{font:T.onsite_css_font_btn,varient:T.onsite_font_varient_btn,size:T.btn_fontSize,color:T.onsite_btn_txt_color,background:T.onsite_btn_color}}),_&&(0,s.wl)({wallId:P,domainName:g.QC?g.nX?"https://test.taggbox.com/embed-widget/lite/".concat(P,"?ugcSuite=1&hashtag_campaign=true"):"https://test.taggbox.com/embed-widget/lite/".concat(y.Wall.url,"?hashtag_campaign=true"):g.nX?"https://widget.taggbox.com/".concat(P,"?ugcSuite=1&hashtag_campaign=true"):"https://widget.taggbox.com/".concat(P),ownerId:x,screenshotSize:["1200x624"]}).then((t=>{let{data:o}=t;const{responseCode:n,responseData:e}=o;if(200==n&&e.length>0&&e[0]&&e[0].s3Url){const t=(0,l.CL)()+1e3*((0,l.QM)()+60*((0,l.dn)()+60*(0,l.eZ)()));this.setState({hashtag_campaign_image:"".concat(e[0].s3Url,"?v=").concat(t)})}else{const t=(0,l.Bq)(y.Personalization.widgetTheme);this.setState({hashtag_campaign_image:t})}})).catch((t=>{const o=(0,l.Bq)(y.Personalization.widgetTheme);this.setState({hashtag_campaign_image:o})}))}render(){const{hashtag_campaign_image:t,baseColor:o,baseFontSize:n,iconColor:e,authorColor:a,linkColor:r,lineHeight:l,fontWeight:s,authorFont:b,baseFont:h,iconPosition:f,btnCTAProperties:m,btnProperties:w,bgColor:C,borderRadius:_,popUpProperties:y,ProductSettings:P,UgcSettings:x}=this.state,{wall:S}=this.props,k=(!!!(S.ThemeRule&&Object.keys(S.ThemeRule).length>0&&S.ThemeRule.link_font&&""!==S.ThemeRule.link_font)||S.ThemeRule.link_font,!S.UgcSettings||S.UgcSettings.onsite_link_font_btn,!S.UgcSettings||S.UgcSettings.onsite_link_font_msg,S.Banner&&Object.keys(S.Banner).length>0&&S.Banner.title_link_font,S.Banner&&Object.keys(S.Banner).length>0&&S.Banner.subtitle_link_font,new URLSearchParams(window.location.search).get("preview")),v=S.Personalization.widgetTheme,T=!!window.location.href.includes("hashtag_campaign"),B=g.nX?"Tagbox UGC Suite":g.ZQ?"Tagembed Widget":"Taggbox";var j=["inherit","Default"],W=["Inter"];return S.UgcSettings.onsite_link_font_btn&&!j.includes(S.UgcSettings.onsite_link_font_btn)&&W.push(S.UgcSettings.onsite_link_font_btn),S.UgcSettings.onsite_link_font_msg&&!j.includes(S.UgcSettings.onsite_link_font_msg)&&W.push(S.UgcSettings.onsite_link_font_msg),S.ThemeRule.link_font&&!j.includes(S.ThemeRule.link_font)&&W.push(S.ThemeRule.link_font),S.Banner&&Object.keys(S.Banner).length&&(S.Banner.subtitle_link_font&&!j.includes(S.Banner.subtitle_link_font)&&W.push(S.Banner.subtitle_link_font),S.Banner.title_link_font&&!j.includes(S.Banner.title_link_font)&&W.push(S.Banner.title_link_font)),S.ProductSetting&&Object.keys(S.ProductSetting).length&&(S.ProductSetting.Button.fontLink&&!j.includes(S.ProductSetting.Button.fontLink)&&W.push(S.ProductSetting.Button.fontLink),S.ProductSetting.CatalogueTitle.fontLink&&!j.includes(S.ProductSetting.CatalogueTitle.fontLink)&&W.push(S.ProductSetting.CatalogueTitle.fontLink),S.ProductSetting.Price.fontLink&&!j.includes(S.ProductSetting.Price.fontLink)&&W.push(S.ProductSetting.Price.fontLink),S.ProductSetting.ProductTitle.fontLink&&!j.includes(S.ProductSetting.ProductTitle.fontLink)&&W.push(S.ProductSetting.ProductTitle.fontLink)),W=W.filter(((t,o,n)=>n.indexOf(t)===o)),console.log("test redsdsadsadsd",W),T?(0,d.jsxs)(i.q,{children:[g.nX?(0,d.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,d.jsx)("meta",{property:"og:type",content:"website"}),(0,d.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(S.Wall.id)}),(0,d.jsx)("meta",{property:"og:title",content:"".concat(S.Wall.name," - ").concat(B," Widget")}),(0,d.jsx)("meta",{property:"og:description",content:"".concat(S.Wall.name," hashtag campaign created using ").concat(B," Widget.")}),(0,d.jsx)("meta",{property:"og:image",content:t}),(0,d.jsx)("meta",{property:"type",content:"website"}),(0,d.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(S.Wall.id)}),(0,d.jsx)("meta",{property:"title",content:"".concat(S.Wall.name," - ").concat(B," Widget")}),(0,d.jsx)("meta",{property:"description",content:"".concat(S.Wall.name," hashtag campaign created using ").concat(B," Widget.")}),(0,d.jsx)("meta",{property:"image",content:t}),k?document.body.classList.add("tb_previw_th-".concat(v)):null,W.map((function(t,o){return(0,d.jsx)("link",{href:"".concat(c.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o)})),1===S.Personalization.cssStatus?(0,d.jsx)("style",{type:"text/css",children:S.Personalization.css}):null,u(),S.Wall&&S.Wall.google_tacking_status?(0,d.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,S.Wall&&S.Wall.google_tacking_status?(0,d.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(S.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):window.location.href.includes("widget.taggbox.com")||window.location.href.includes("widget-test.tagembed.com")||window.location.href.includes("widgets.tagembed.com")||window.location.href.includes("widget-test.tagshop.ai")||window.location.href.includes("widget.tagshop.ai")?(0,d.jsxs)(i.q,{children:[g.nX?(0,d.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):g.ZQ?(0,d.jsx)("link",{rel:"icon",href:"https://tagembed.com/wp-content/uploads/2020/09/favicon.ico"}):null,(0,d.jsx)("meta",{property:"og:type",content:"website"}),(0,d.jsx)("meta",{property:"og:url",content:g.ZQ?"https://widget.tagembed.com/".concat(S.Wall.id):"https://widget-lite.taggbox.com/".concat(S.Wall.id)}),(0,d.jsx)("meta",{property:"og:title",content:"".concat(S.Wall.name," - ").concat(B," Widget")}),(0,d.jsx)("meta",{property:"og:description",content:"".concat(S.Wall.name," featuring Social Feed using ").concat(B," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,d.jsx)("meta",{property:"og:image",content:t}),(0,d.jsx)("meta",{property:"type",content:"website"}),(0,d.jsx)("meta",{property:"url",content:g.ZQ?"https://widget.tagembed.com/".concat(S.Wall.id):"https://widget-lite.taggbox.com/".concat(S.Wall.id)}),(0,d.jsx)("meta",{property:"title",content:"".concat(S.Wall.name," - ").concat(B," Widget")}),(0,d.jsx)("meta",{property:"description",content:"".concat(S.Wall.name," featuring Social Feed using ").concat(B," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,d.jsx)("meta",{property:"image",content:t}),k?document.body.classList.add("tb_previw_th-".concat(v)):null,W.map((function(t,o){return(0,d.jsx)("link",{href:"".concat(c.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o)})),1===S.Personalization.cssStatus?(0,d.jsx)("style",{type:"text/css",children:S.Personalization.css}):null,u(),S.Wall&&S.Wall.google_tacking_status?(0,d.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,S.Wall&&S.Wall.google_tacking_status?(0,d.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(S.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,p(o,n,a,r,m,w,P,l,s,b,h,C,_,y,f,x)]}):(0,d.jsxs)(i.q,{children:[g.nX?(0,d.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,k?document.body.classList.add("tb_previw_th-".concat(v)):null,W.map((function(t,o){return(0,d.jsx)("link",{href:"".concat(c.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o)})),1===S.Personalization.cssStatus?(0,d.jsx)("style",{type:"text/css",children:S.Personalization.css}):null,u(),S.Wall&&S.Wall.google_tacking_status?(0,d.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,S.Wall&&S.Wall.google_tacking_status?(0,d.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(S.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,p(o,n,a,r,m,w,P,l,s,b,h,C,_,y,f,x)]})}}const f=(0,a.$j)((t=>({appData:t.appData})))(h)}}]);
//# sourceMappingURL=9681.6b042774.chunk.js.map