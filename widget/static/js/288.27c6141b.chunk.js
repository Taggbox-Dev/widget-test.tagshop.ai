"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[288],{70288:(t,o,n)=>{n.r(o),n.d(o,{default:()=>p});var e=n(47313),a=n(34862),r=n(90182),i=n(98501),c=n(17739),l=n(43635),s=n(35179),g=n(46417);const d=(0,c.CL)()+1e3*((0,c.QM)()+60*((0,c.dn)()+60*(0,c.eZ)())),u=()=>(0,g.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),b=(t,o,n,e,a,r,i,c,l,s,d,u,b,p,h,f)=>{const m=!!i&&Object.keys(i).length>0;return(0,g.jsx)("style",{children:":root {\n                        --tb-base-color: ".concat(t,";\n                        --tb-base-font-size:").concat(o,";\n                        --tb-author-color: ").concat(n,";\n                        --tb-link-color: ").concat(e,";\n                        --tb-line-height: ").concat(c,";\n                        --tb-font-weight: ").concat(l,";\n                        --tb-author-font: ").concat(s,";\n                        --tb-base-font: ").concat(d,";\n                        --tb-bg-color: ").concat(u,";\n                        --tb-border-radius: ").concat(b,";\n\n                        --tb-cta-color:").concat(a.btnColor,";\n                        --tb-cta-bg-color:").concat(a.btnBgColor,";\n                        --tb-cta-border-color:").concat(a.btnBorderColor,";\n                        --tb-cta-color-hover:").concat(a.btnColorHover,";\n                        --tb-cta-bg-color-hover:").concat(a.btnBgColorHover,";\n                        --tb-cta-border-color-hover:").concat(a.btnBorderColorHover,";\n                        --tb-cta-border-radius:").concat(a.btnRadius,";\n                        --tb-cta-padding:").concat(a.btnPadding,";\n                        --tb-cta-height:").concat(a.btnMinHeight,";\n                        --tb-cta-width:").concat(a.btnMinWidth,";\n                        --tb-cta-font:").concat(a.btnFont,";\n                        --tb-cta-font-weight:").concat(a.btnWeight,";\n                        --tb-cta-transition:").concat(a.btnTransition,";\n\n                        --tb-btn-color:").concat(r.btnColor,";\n                        --tb-btn-bg-color:").concat(r.btnBgColor,";\n                        --tb-btn-border-color:").concat(r.btnBorderColor,";\n                        --tb-btn-color-hover:").concat(r.btnColorHover,";\n                        --tb-btn-bg-color-hover:").concat(r.btnBgColorHover,";\n                        --tb-btn-border-color-hover:").concat(r.btnBorderColorHover,";\n                        --tb-btn-border-radius:").concat(r.btnRadius,";\n                        --tb-btn-padding:").concat(r.btnPadding,";\n                        --tb-btn-height:").concat(r.btnMinHeight,";\n                        --tb-btn-width:").concat(r.btnMinWidth,";\n                        --tb-btn-font:").concat(r.btnFont,";\n                        --tb-btn-font-weight:").concat(r.btnWeight,";\n                        --tb-btn-transition:").concat(r.btnTransition,";\n\n                        --tb-popup-author-color:").concat(p.authorColor,";\n                        --tb-popup-color:").concat(p.color,";\n                        --tb-popup-bg-color:").concat(p.background,";\n                        --tb-popup-font-size:").concat(p.fontSize,";\n                        --tb-popup-icon-color:").concat(p.iconColor,";\n\n\n\n                        --tb-catalogue-font:").concat(m?i.CatalogueTitle.font:"",";\n                        --tb-catalogue-varient:").concat(m?i.CatalogueTitle.varient:"",";\n                        --tb-catalogue-size:").concat(m?i.CatalogueTitle.size:"",";\n                        --tb-catalogue-color:").concat(m?i.CatalogueTitle.color:"",";\n\n                        --tb-product-font:").concat(m?i.ProductTitle.font:"",";\n                        --tb-product-varient:").concat(m?i.ProductTitle.varient:"",";\n                        --tb-product-size:").concat(m?i.ProductTitle.size:"",";\n                        --tb-product-color:").concat(m?i.ProductTitle.color:"",";\n\n                        --tb-price-font:").concat(m?i.Price.font:"",";\n                        --tb-price-varient:").concat(m?i.Price.varient:"",";\n                        --tb-price-size:").concat(m?i.Price.size:"",";\n                        --tb-price-color:").concat(m?i.Price.color:"",";\n\n                        --tb-shop-btn-font:").concat(m?i.Button.font:"",";\n                        --tb-shop-btn-varient:").concat(m?i.Button.varient:"",";\n                        --tb-shop-btn-size:").concat(m?i.Button.size:"",";\n                        --tb-shop-btn-color:").concat(m?i.Button.color:"",";\n                        --tb-shop-btn-bg-color:").concat(m?i.Button.background:"",";\n\n                        --tb-hotspot-color:").concat(m?i.Hotspot.color:"",";\n                        --tb-hotspot-bg-color:").concat(m?i.Hotspot.background:"",";\n\n                        --tb-icon-position:").concat(h,";\n\n                        --tb-snap-font:").concat(f.font,";\n                        --tb-snap-varient:").concat(f.varient,";\n                        --tb-snap-size:").concat(f.size,";\n                        --tb-snap-color:").concat(f.color,";\n                        --tb-snap-bg-color:").concat(f.background,";\n                        \n                    }")})};class p extends e.PureComponent{constructor(t){super(t),this.ThemesStaticValues=t=>{switch(t){case 4:case 55:case 50:case 16:case 56:return["authorColor","iconColor","baseColor","ctaBg","ctaText"];case 49:return["authorColor","iconColor"]}},this.isStatic=t=>{const o=this.ThemesStaticValues(this.props.wall.Personalization.widgetTheme);return o&&null!=o?!!o.includes(t):null},this.onLoadModule=t=>{const{hashtag_campaign_image:o,baseColor:n,baseFontSize:e,authorColor:r,linkColor:i,fontWeight:g,authorFont:d,baseFont:u,btnCTAProperties:b,btnProperties:p,lineHeight:h,bgColor:f,borderRadius:m,popUpProperties:w,ProductSetting:C,UgcSettings:_}=this.state,y=(window.location.href.includes("hashtag_campaign"),!1),{wall:P}=t,k=P.Wall.id,S=P.Wall.owner,v=P.ThemeRule,x=(v.ctaData&&Object.keys(v.ctaData).length>0&&v.ctaData,P.Personalization),T=P.ProductSetting,B=P.UgcSettings,j=!(!v.inheritStyles||1!=v.inheritStyles);var W=document.querySelector("body"),z=document.querySelector("strong"),H=document.querySelector("p"),L=document.querySelector("h2"),R=document.querySelector("h3"),U=document.querySelector("a"),F=document.getElementsByTagName("button");F=F&&F.length>5?window.getComputedStyle(F[5]):F&&1==F.length&&F[0]?window.getComputedStyle(F[0]):U?window.getComputedStyle(U):"",z=z?window.getComputedStyle(z):R?window.getComputedStyle(R):L?window.getComputedStyle(L):"";var V=W?window.getComputedStyle(W).getPropertyValue("color"):"";V=(0,c.uu)(V,v.cardColor);var M=W?window.getComputedStyle(W).getPropertyValue("font-size"):"",q=W?window.getComputedStyle(W).getPropertyValue("font-family"):"",D=W?window.getComputedStyle(W).getPropertyValue("line-height"):"",I=H?window.getComputedStyle(H).getPropertyValue("font-weight"):"",O=z?z.getPropertyValue("color"):"#2b2b2b";O=(0,c.uu)(O,v.cardColor);var Q=z?z.getPropertyValue("font-family"):"",Z=z?z.getPropertyValue("color"):"",E=F?F.getPropertyValue("color"):"",N=F?F.getPropertyValue("border-color"):"",X=F?F.getPropertyValue("background-color"):"",A=(F&&F.getPropertyValue("padding"),F?F.getPropertyValue("border-radius"):""),G=F?F.getPropertyValue("height"):"",J=F?F.getPropertyValue("width"):"",K=F?F.getPropertyValue("font-weight"):"",Y=F?F.getPropertyValue("font-family"):"",$=F?F.getPropertyValue("transition"):"",tt=F?F.getPropertyValue("color"):"",ot=F?F.getPropertyValue("border-color"):"",nt=F?F.getPropertyValue("background-color"):"";var et=[61,16,53,4,50,55].includes(x.widgetTheme)?1==v.postHover?(0,c.uu)(v.fontColor,"#000000"):(0,c.uu)(v.fontColor,"#ffffff"):null;this.setState({authorColor:s.Jc?!this.isStatic("authorColor")&&j&&O||(0,c.uu)(v.authorColor,v.cardColor):!this.isStatic("authorColor")&&j&&O||v.authorColor,authorFont:!this.isStatic("authorFont")&&j&&Q||v.css_font,baseColor:s.Jc?!this.isStatic("baseColor")&&j&&V||(0,c.uu)(v.fontColor,v.cardColor):!this.isStatic("baseColor")&&j&&V||(s.ig?et:v.fontColor),baseFont:j?q||u:v.css_font,linkColor:j?Z||i:v.iconColor,baseFontSize:!this.isStatic("baseFontSize")&&j?M||e:"".concat(v.fontSize,"px"),fontWeight:j?I||g:v.font_varient,borderRadius:"".concat(v.radius,"px"),bgColor:v.cardColor,lineHeight:j&&D||h,iconColor:this.isStatic("iconColor")&&1!=v.iconType?"#ffffff":1==v.iconType?v.iconColor:"",iconPosition:"".concat(12+(v.radius?v.radius/3.5:0),"px"),btnCTAProperties:{btnColor:b.btnColor,btnBgColor:b.btnBgColor,btnBorderColor:b.btnBorderColor,btnColorHover:b.btnColorHover,btnBgColorHover:b.btnBgColorHover,btnBorderColorHover:b.btnBorderColorHover,btnPadding:b.btnPadding,btnRadius:j&&A||b.btnRadius,btnMinHeight:j&&G||b.btnMinHeight,btnMinWidth:j&&J||b.btnMinWidth,btnWeight:j&&K||b.btnWeight,btnFont:j&&Y||b.btnFont,btnTransition:j&&$||b.btnTransition},btnProperties:{btnColor:j?E:p.btnColor,btnBgColor:j?X:p.btnBgColor,btnBorderColor:j?N:p.btnBorderColor,btnColorHover:j?tt:p.btnColorHover,btnBgColorHover:j?nt:p.btnBgColorHover,btnBorderColorHover:j?ot:p.btnBorderColorHover,btnPadding:j?"5px 10px":p.btnPadding,btnRadius:j?A:p.btnRadius,btnMinHeight:j?G:p.btnMinHeight,btnMinWidth:j?J:p.btnMinWidth,btnWeight:j?K:p.btnWeight,btnFont:j?Y:p.btnFont,btnTransition:j?$:p.btnTransition},popUpProperties:{authorColor:j?O||w.authorColor:(0,c.uu)(v.authorColor,v.cardColor),background:v.cardColor,iconColor:1!=v.iconType?"#ffffff":1==v.iconType?v.iconColor:"",fontSize:j?M:a.tq?"".concat(v.fontSize,"px"):a.Em?v.fontSize:"".concat(v.fontSize+4,"px"),color:j?V||w.color:(0,c.uu)(v.fontColor,v.cardColor)},ProductSettings:{CatalogueTitle:{font:T?T.CatalogueTitle.font:"",varient:T?T.CatalogueTitle.varient:"",size:T?"".concat(T.CatalogueTitle.size,"px"):"",color:T?T.CatalogueTitle.color:""},ProductTitle:{font:T?T.ProductTitle.font:"",varient:T?T.ProductTitle.varient:"",size:T?"".concat(T.ProductTitle.size,"px"):"",color:T?T.ProductTitle.color:""},Price:{font:T?T.Price.font:"",varient:T?T.Price.varient:"",size:T?"".concat(T.Price.size,"px"):"",color:T?T.Price.color:""},Button:{font:T?T.Button.font:"",varient:T?T.Button.varient:"",size:T?"".concat(T.Button.size,"px"):"",color:T?T.Button.color:"",background:T?T.Button.background:""},Hotspot:{color:T?T.Hotspot.color:"",background:T?T.Hotspot.background:""}},UgcSettings:{font:B?B.onsite_css_font_btn:"",varient:B?B.onsite_font_varient_btn:"",size:B?B.btn_fontSize:"",color:B?B.onsite_btn_txt_color:"",background:B?B.onsite_btn_color:""}}),y&&(0,l.wl)({wallId:k,domainName:s.QC?s.nX?"https://test.taggbox.com/embed-widget/lite/".concat(k,"?ugcSuite=1&hashtag_campaign=true"):"https://test.taggbox.com/embed-widget/lite/".concat(P.Wall.url,"?hashtag_campaign=true"):s.nX?"https://widget.taggbox.com/".concat(k,"?ugcSuite=1&hashtag_campaign=true"):"https://widget.taggbox.com/".concat(k),ownerId:S,screenshotSize:["1200x624"]}).then((t=>{let{data:o}=t;const{responseCode:n,responseData:e}=o;if(200==n&&e.length>0&&e[0]&&e[0].s3Url){const t=(0,c.CL)()+1e3*((0,c.QM)()+60*((0,c.dn)()+60*(0,c.eZ)()));this.setState({hashtag_campaign_image:"".concat(e[0].s3Url,"?v=").concat(t)})}else{const t=(0,c.Bq)(P.Personalization.widgetTheme);this.setState({hashtag_campaign_image:t})}})).catch((t=>{const o=(0,c.Bq)(P.Personalization.widgetTheme);this.setState({hashtag_campaign_image:o})}))};const o=this.props.wall.ThemeRule.ctaData&&Object.keys(this.props.wall.ThemeRule.ctaData).length>0?this.props.wall.ThemeRule.ctaData:{color:"#000",background:"#fff"};this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?"".concat("https://cloud.taggbox.com/wall-branding/wallId_widget_").concat(t.wall.Wall.id,".jpg?v=").concat(d):"",baseColor:"#545454",baseFontSize:"14px",iconColor:"#000000",authorColor:"#000000",linkColor:"#3333FF",lineHeight:"1.5",fontWeight:"400",authorFont:"Inter, sans-serif",baseFont:"Inter, sans-serif",bgColor:"#ffffff",borderRadius:"0px",iconPosition:10,btnCTAProperties:{btnColor:null!==o&&void 0!==o&&o.color?o.color:"#000",btnBgColor:null!==o&&void 0!==o&&o.background?o.background:"#fff",btnBorderColor:null!==o&&void 0!==o&&o.background?o.background:"#000",btnColorHover:null!==o&&void 0!==o&&o.color?o.color:"#000",btnBgColorHover:null!==o&&void 0!==o&&o.background?o.background:"#fff",btnBorderColorHover:null!==o&&void 0!==o&&o.background?o.background:"#000",btnPadding:"8px 10px",btnRadius:"3px",btnMinHeight:"40px",btnMinWidth:"115px",btnFont:"Inter, sans-serif",btnWeight:400,btnTransition:"all .3s ease-out 0s"},btnProperties:{btnColor:"#2b2b2b",btnBgColor:"#ffffff",btnBorderColor:"#2b2b2b",btnColorHover:"#2b2b2b",btnBgColorHover:"#ffffff",btnBorderColorHover:"#2b2b2b",btnPadding:"8px 10px",btnRadius:"3px",btnMinHeight:"40px",btnMinWidth:"115px",btnFont:"Inter, sans-serif",btnWeight:400,btnTransition:"none"},popUpProperties:{background:"#ffffff",fontSize:"14px",color:"#545454",iconColor:"#000000"},ProductSettings:{CatalogueTitle:{font:"",varient:"regular",size:"19",color:"#ff0303",text:"tttt"},ProductTitle:{font:"Rochester",varient:"100-italic",size:"17",color:"#1cbfaf"},Price:{font:"Homenaje",varient:"regular",size:"20",color:"#ff0000"},Button:{font:"Lato",varient:"100-italic",size:"17",background:"#ff0000",color:"#ffffff",text:"Shop Now",newTab:"1"},Hotspot:{type:"1",color:"#ff1414",background:"#ffffff",status:1}},UgcSettings:{font:"Homenaje",varient:"regular",size:"20",color:"#ff0000",background:"#ffffff"}}}componentDidMount(){this.onLoadModule(this.props)}componentWillReceiveProps(t){t!=this.props&&s.Jc&&this.onLoadModule(t)}render(){const{hashtag_campaign_image:t,baseColor:o,baseFontSize:n,iconColor:e,authorColor:a,linkColor:c,lineHeight:l,fontWeight:d,authorFont:p,baseFont:h,iconPosition:f,btnCTAProperties:m,btnProperties:w,bgColor:C,borderRadius:_,popUpProperties:y,ProductSettings:P,UgcSettings:k}=this.state,{wall:S}=this.props,v=(!!!(S.ThemeRule&&Object.keys(S.ThemeRule).length>0&&S.ThemeRule.link_font&&""!==S.ThemeRule.link_font)||S.ThemeRule.link_font,!S.UgcSettings||S.UgcSettings.onsite_link_font_btn,!S.UgcSettings||S.UgcSettings.onsite_link_font_msg,S.Banner&&Object.keys(S.Banner).length>0&&S.Banner.title_link_font,S.Banner&&Object.keys(S.Banner).length>0&&S.Banner.subtitle_link_font,new URLSearchParams(window.location.search).get("preview")),x=S.Personalization.widgetTheme,T=(window.location.href.includes("hashtag_campaign"),!1),B=s.nX?"Tagbox UGC Suite":s.ZQ?"Tagembed Widget":"Taggbox";var j=["inherit","Default"],W=["Inter"];return S.UgcSettings&&S.UgcSettings.onsite_link_font_btn&&!j.includes(S.UgcSettings.onsite_link_font_btn)&&W.push(S.UgcSettings.onsite_link_font_btn),S.UgcSettings&&S.UgcSettings.onsite_link_font_msg&&!j.includes(S.UgcSettings.onsite_link_font_msg)&&W.push(S.UgcSettings.onsite_link_font_msg),S.ThemeRule.link_font&&!j.includes(S.ThemeRule.link_font)&&W.push(S.ThemeRule.link_font),S.Banner&&Object.keys(S.Banner).length&&(S.Banner.subtitle_link_font&&!j.includes(S.Banner.subtitle_link_font)&&W.push(S.Banner.subtitle_link_font),S.Banner.title_link_font&&!j.includes(S.Banner.title_link_font)&&W.push(S.Banner.title_link_font)),S.ProductSetting&&Object.keys(S.ProductSetting).length&&(S.ProductSetting.Button.fontLink&&!j.includes(S.ProductSetting.Button.fontLink)&&W.push(S.ProductSetting.Button.fontLink),S.ProductSetting.CatalogueTitle.fontLink&&!j.includes(S.ProductSetting.CatalogueTitle.fontLink)&&W.push(S.ProductSetting.CatalogueTitle.fontLink),S.ProductSetting.Price.fontLink&&!j.includes(S.ProductSetting.Price.fontLink)&&W.push(S.ProductSetting.Price.fontLink),S.ProductSetting.ProductTitle.fontLink&&!j.includes(S.ProductSetting.ProductTitle.fontLink)&&W.push(S.ProductSetting.ProductTitle.fontLink)),W=W.filter(((t,o,n)=>n&&n.indexOf(t)===o)),T?(0,g.jsxs)(r.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(S.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(S.Wall.name," - ").concat(B," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(S.Wall.name," hashtag campaign created using ").concat(B," Widget.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(S.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(S.Wall.name," - ").concat(B," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(S.Wall.name," hashtag campaign created using ").concat(B," Widget.")}),(0,g.jsx)("meta",{property:"image",content:t}),v?document.body.classList.add("tb_previw_th-".concat(x)):null,W.map((function(t,o){return"0"!=t?(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o):null})),1===S.Personalization.cssStatus?(0,g.jsx)("style",{type:"text/css",children:S.Personalization.css}):null,u(),S.Wall&&S.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,S.Wall&&S.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(S.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):window.location.href.includes("widget.taggbox.com")||window.location.href.includes("widget-test.tagembed.com")||window.location.href.includes("widgets.tagembed.com")||window.location.href.includes("widget-test.tagshop.ai")||window.location.href.includes("widget.tagshop.ai")?(0,g.jsxs)(r.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):s.ZQ?(0,g.jsx)("link",{rel:"icon",href:"https://tagembed.com/wp-content/uploads/2020/09/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:s.ZQ?"https://widget.tagembed.com/".concat(S.Wall.id):"https://widget-lite.taggbox.com/".concat(S.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(S.Wall.name," - ").concat(B," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(S.Wall.name," featuring Social Feed using ").concat(B," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:s.ZQ?"https://widget.tagembed.com/".concat(S.Wall.id):"https://widget-lite.taggbox.com/".concat(S.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(S.Wall.name," - ").concat(B," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(S.Wall.name," featuring Social Feed using ").concat(B," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"image",content:t}),v?document.body.classList.add("tb_previw_th-".concat(x)):null,W.map((function(t,o){return"0"!=t?(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o):null})),1===S.Personalization.cssStatus?(0,g.jsx)("style",{type:"text/css",children:S.Personalization.css}):null,u(),S.Wall&&S.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,S.Wall&&S.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(S.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,b(o,n,a,c,m,w,P,l,d,p,h,C,_,y,f,k)]}):(0,g.jsxs)(r.q,{children:[v?document.body.classList.add("tb_previw_th-".concat(x)):null,W.map((function(t,o){return"0"!=t?(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o):null})),1===S.Personalization.cssStatus?(0,g.jsx)("style",{type:"text/css",children:S.Personalization.css}):null,u(),S.Wall&&S.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,S.Wall&&S.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(S.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,b(o,n,a,c,m,w,P,l,d,p,h,C,_,y,f,k)]})}}}}]);