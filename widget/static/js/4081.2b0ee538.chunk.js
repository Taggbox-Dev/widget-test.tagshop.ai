(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4081],{59681:(t,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>u});var e=o(72791),r=o(60173),c=o(54270),a=o(70188),i=o(2703),l=o(11225),s=o(46535),b=o(80184);const g=(0,i.CL)()+1e3*((0,i.QM)()+60*((0,i.dn)()+60*(0,i.eZ)()));class u extends e.PureComponent{constructor(t){super(t),this.ThemesStaticValues=t=>{switch(t){case 4:case 55:case 50:case 16:case 56:return["authorColor","iconColor","baseColor","ctaBg","ctaText"];case 49:return["authorColor","iconColor"]}},this.isStatic=t=>{const n=this.ThemesStaticValues(this.props.wall.Personalization.widgetTheme);return n&&null!=n?!!n.includes(t):null},this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?"".concat("https://cloud.taggbox.com/wall-branding/wallId_widget_").concat(t.wall.Wall.id,".jpg?v=").concat(g):"",baseColor:"#545454",baseFontSize:"14px",iconColor:"#000000",authorColor:"#000000",linkColor:"#3333FF",lineHeight:"1.5",fontWeight:"400",authorFont:"Inter, sans-serif",baseFont:"Inter, sans-serif",bgColor:"#ffffff",borderRadius:"0px",iconPosition:12,btnCTAProperties:{btnColor:"#ffffff",btnBgColor:"#2b2b2b",btnBorderColor:"#2b2b2b",btnColorHover:"#ffffff",btnBgColorHover:"#000000",btnBorderColorHover:"#000000",btnPadding:"8px 10px",btnRadius:"3px",btnMinHeight:"40px",btnMinWidth:"115px",btnFont:"Inter, sans-serif",btnWeight:400,btnTransition:"all .3s ease-out 0s"},btnProperties:{btnColor:"#2b2b2b",btnBgColor:"#ffffff",btnBorderColor:"#2b2b2b",btnColorHover:"#2b2b2b",btnBgColorHover:"#ffffff",btnBorderColorHover:"#2b2b2b",btnPadding:"8px 10px",btnRadius:"3px",btnMinHeight:"40px",btnMinWidth:"115px",btnFont:"Inter, sans-serif",btnWeight:400,btnTransition:"none"},popUpProperties:{fontSize:"14px",color:"#545454",iconColor:"#000000"},ProductSettings:{CatalogueTitle:{font:"",varient:"regular",size:"19",color:"#ff0303",text:"tttt"},ProductTitle:{font:"Rochester",varient:"100-italic",size:"17",color:"#1cbfaf"},Price:{font:"Homenaje",varient:"regular",size:"20",color:"#ff0000"},Button:{font:"Lato",varient:"100-italic",size:"17",background:"#ff0000",color:"#ffffff",text:"Shop Now",newTab:"1"},Hotspot:{type:"1",color:"#ff1414",background:"#ffffff",status:1}}}}componentDidMount(){const{hashtag_campaign_image:t,baseColor:n,baseFontSize:o,authorColor:e,linkColor:c,fontWeight:a,authorFont:b,baseFont:g,btnCTAProperties:u,btnProperties:d,lineHeight:p,bgColor:f,borderRadius:h,popUpProperties:m,ProductSetting:w}=this.state,y=!!window.location.href.includes("hashtag_campaign"),{wall:C}=this.props,_=C.Wall.id,P=C.Wall.owner,v=C.ThemeRule;console.log("\ud83d\ude80 ~ AppHead ~ componentDidMount ~ ThemeRule:",v);const x=C.ProductSetting,S=!(!v.inheritStyles||1!=v.inheritStyles);var j=document.querySelector("body"),T=document.querySelector("strong"),B=document.querySelector("p"),k=document.querySelector("h2"),W=document.querySelector("h3"),z=document.querySelector("a"),H=document.getElementsByTagName("button");H=H&&H.length>5?window.getComputedStyle(H[5]):H&&1==H.length&&H[0]?window.getComputedStyle(H[0]):window.getComputedStyle(z),T=T?window.getComputedStyle(T):W?window.getComputedStyle(W):k?window.getComputedStyle(k):"";var R=j?window.getComputedStyle(j).getPropertyValue("color"):"";R=(0,i.uu)(R,v.cardColor);var L=j?window.getComputedStyle(j).getPropertyValue("font-size"):"",F=j?window.getComputedStyle(j).getPropertyValue("font-family"):"",M=j?window.getComputedStyle(j).getPropertyValue("line-height"):"",O=B?window.getComputedStyle(B).getPropertyValue("font-weight"):"",V=T?T.getPropertyValue("color"):"#2b2b2b";V=(0,i.uu)(V,v.cardColor);var U=T?T.getPropertyValue("font-family"):"",E=T?T.getPropertyValue("color"):"",I=H?H.getPropertyValue("color"):"",q=H?H.getPropertyValue("border-color"):"",A=H?H.getPropertyValue("background-color"):"",N=H?H.getPropertyValue("padding"):"",D=H?H.getPropertyValue("border-radius"):"",Q=H?H.getPropertyValue("height"):"",X=H?H.getPropertyValue("width"):"",Z=H?H.getPropertyValue("font-weight"):"",G=H?H.getPropertyValue("font-family"):"",$=H?H.getPropertyValue("transition"):"",Y=H?H.getPropertyValue("color"):"",J=H?H.getPropertyValue("border-color"):"",K=H?H.getPropertyValue("background-color"):"";this.setState({authorColor:!this.isStatic("authorColor")&&S&&V||v.authorColor,authorFont:!this.isStatic("authorFont")&&S&&U||v.css_font,baseColor:!this.isStatic("baseColor")&&S&&R||v.fontColor,baseFont:S?F||g:v.css_font,linkColor:S?E||c:v.iconColor,baseFontSize:!this.isStatic("baseFontSize")&&S?L||o:"".concat(v.fontSize,"px"),fontWeight:S?O||a:v.font_varient,borderRadius:"".concat(v.radius,"px"),bgColor:v.cardColor,lineHeight:S&&M||p,iconColor:this.isStatic("iconColor")&&1!=v.iconType?"#ffffff":1==v.iconType?v.iconColor:"",iconPosition:"".concat(v.radius/3.5+12,"px"),btnCTAProperties:{btnColor:S?I:u.btnColor,btnBgColor:S?A:u.btnBgColor,btnBorderColor:S?q:u.btnBorderColor,btnColorHover:S?Y:u.btnColorHover,btnBgColorHover:S?K:u.btnBgColorHover,btnBorderColorHover:S?J:u.btnBorderColorHover,btnPadding:S?N:u.btnPadding,btnRadius:S?D:u.btnRadius,btnMinHeight:S?Q:u.btnMinHeight,btnMinWidth:S?X:u.btnMinWidth,btnWeight:S?Z:u.btnWeight,btnFont:S?G:u.btnFont,btnTransition:S?$:u.btnTransition},btnProperties:{btnColor:S?I:d.btnColor,btnBgColor:S?A:d.btnBgColor,btnBorderColor:S?q:d.btnBorderColor,btnColorHover:S?Y:d.btnColorHover,btnBgColorHover:S?K:d.btnBgColorHover,btnBorderColorHover:S?J:d.btnBorderColorHover,btnPadding:S?"5px 10px":d.btnPadding,btnRadius:S?D:d.btnRadius,btnMinHeight:S?Q:d.btnMinHeight,btnMinWidth:S?X:d.btnMinWidth,btnWeight:S?Z:d.btnWeight,btnFont:S?G:d.btnFont,btnTransition:S?$:d.btnTransition},popUpProperties:{authorColor:S?V||m.authorColor:(0,i.uu)(v.authorColor,v.cardColor),iconColor:1!=v.iconType?"#ffffff":1==v.iconType?v.iconColor:"",fontSize:S?L:r.tq?"".concat(v.fontSize,"px"):r.Em?v.fontSize:"".concat(v.fontSize+4,"px"),color:S?R||m.color:(0,i.uu)(v.fontColor,v.cardColor)},ProductSettings:{CatalogueTitle:{font:x.CatalogueTitle.font,varient:x.CatalogueTitle.varient,size:"".concat(x.CatalogueTitle.size,"px"),color:x.CatalogueTitle.color},ProductTitle:{font:x.ProductTitle.font,varient:x.ProductTitle.varient,size:"".concat(x.ProductTitle.size,"px"),color:x.ProductTitle.color},Price:{font:x.Price.font,varient:x.Price.varient,size:"".concat(x.Price.size,"px"),color:x.Price.color},Button:{font:x.Button.font,varient:x.Button.varient,size:"".concat(x.Button.size,"px"),color:x.Button.color,background:x.Button.background},Hotspot:{color:x.Hotspot.color,background:x.Hotspot.background}}}),y&&(0,l.wl)({wallId:_,domainName:s.QC?s.nX?"https://test.taggbox.com/embed-widget/lite/".concat(_,"?ugcSuite=1&hashtag_campaign=true"):"https://test.taggbox.com/embed-widget/lite/".concat(C.Wall.url,"?hashtag_campaign=true"):s.nX?"https://widget.taggbox.com/".concat(_,"?ugcSuite=1&hashtag_campaign=true"):"https://widget.taggbox.com/".concat(_),ownerId:P,screenshotSize:["1200x624"]}).then((t=>{let{data:n}=t;const{responseCode:o,responseData:e}=n;if(200==o&&e.length>0&&e[0]&&e[0].s3Url){const t=(0,i.CL)()+1e3*((0,i.QM)()+60*((0,i.dn)()+60*(0,i.eZ)()));this.setState({hashtag_campaign_image:"".concat(e[0].s3Url,"?v=").concat(t)})}else{const t=(0,i.Bq)(C.Personalization.widgetTheme);this.setState({hashtag_campaign_image:t})}})).catch((t=>{const n=(0,i.Bq)(C.Personalization.widgetTheme);this.setState({hashtag_campaign_image:n})}))}render(){const{hashtag_campaign_image:t,baseColor:n,baseFontSize:o,iconColor:e,authorColor:r,linkColor:i,lineHeight:l,fontWeight:g,authorFont:u,baseFont:d,iconPosition:p,btnCTAProperties:f,btnProperties:h,bgColor:m,borderRadius:w,popUpProperties:y,ProductSettings:C}=this.state,{wall:_}=this.props,P=(!!!(_.ThemeRule&&Object.keys(_.ThemeRule).length>0&&_.ThemeRule.link_font&&""!==_.ThemeRule.link_font)||_.ThemeRule.link_font,!_.UgcSettings||_.UgcSettings.onsite_link_font_btn,!_.UgcSettings||_.UgcSettings.onsite_link_font_msg,_.Banner&&Object.keys(_.Banner).length>0&&_.Banner.title_link_font,_.Banner&&Object.keys(_.Banner).length>0&&_.Banner.subtitle_link_font,new URLSearchParams(window.location.search).get("preview")),v=_.Personalization.widgetTheme,x=!!window.location.href.includes("hashtag_campaign"),S=s.nX?"Tagbox UGC Suite":s.ZQ?"Tagembed Widget":"Taggbox";var j=["inherit","Default"],T=["Inter"];return _.UgcSettings.onsite_link_font_btn&&!j.includes(_.UgcSettings.onsite_link_font_btn)&&T.push(_.UgcSettings.onsite_link_font_btn),_.UgcSettings.onsite_link_font_msg&&!j.includes(_.UgcSettings.onsite_link_font_msg)&&T.push(_.UgcSettings.onsite_link_font_msg),_.ThemeRule.link_font&&!j.includes(_.ThemeRule.link_font)&&T.push(_.ThemeRule.link_font),_.Banner&&Object.keys(_.Banner).length&&(_.Banner.subtitle_link_font&&!j.includes(_.Banner.subtitle_link_font)&&T.push(_.Banner.subtitle_link_font),_.Banner.title_link_font&&!j.includes(_.Banner.title_link_font)&&T.push(_.Banner.title_link_font)),_.ProductSetting&&Object.keys(_.ProductSetting).length&&(_.ProductSetting.Button.fontLink&&!j.includes(_.ProductSetting.Button.fontLink)&&T.push(_.ProductSetting.Button.fontLink),_.ProductSetting.CatalogueTitle.fontLink&&!j.includes(_.ProductSetting.CatalogueTitle.fontLink)&&T.push(_.ProductSetting.CatalogueTitle.fontLink),_.ProductSetting.Price.fontLink&&!j.includes(_.ProductSetting.Price.fontLink)&&T.push(_.ProductSetting.Price.fontLink),_.ProductSetting.ProductTitle.fontLink&&!j.includes(_.ProductSetting.ProductTitle.fontLink)&&T.push(_.ProductSetting.ProductTitle.fontLink)),T=T.filter(((t,n,o)=>o.indexOf(t)===n)),x?(0,b.jsxs)(c.q,{children:[s.nX?(0,b.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,b.jsx)("meta",{property:"og:type",content:"website"}),(0,b.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(_.Wall.id)}),(0,b.jsx)("meta",{property:"og:title",content:"".concat(_.Wall.name," - ").concat(S," Widget")}),(0,b.jsx)("meta",{property:"og:description",content:"".concat(_.Wall.name," hashtag campaign created using ").concat(S," Widget.")}),(0,b.jsx)("meta",{property:"og:image",content:t}),(0,b.jsx)("meta",{property:"type",content:"website"}),(0,b.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(_.Wall.id)}),(0,b.jsx)("meta",{property:"title",content:"".concat(_.Wall.name," - ").concat(S," Widget")}),(0,b.jsx)("meta",{property:"description",content:"".concat(_.Wall.name," hashtag campaign created using ").concat(S," Widget.")}),(0,b.jsx)("meta",{property:"image",content:t}),P?document.body.classList.add("tb_previw_th-".concat(v)):null,T.map((function(t,n){return(0,b.jsx)("link",{href:"".concat(a.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},n)})),1===_.Personalization.cssStatus?(0,b.jsx)("style",{type:"text/css",children:_.Personalization.css}):null,(0,b.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),_.Wall&&_.Wall.google_tacking_status?(0,b.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,_.Wall&&_.Wall.google_tacking_status?(0,b.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(_.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):window.location.href.includes("widget.taggbox.com")||window.location.href.includes("widget-test.tagembed.com")||window.location.href.includes("widgets.tagembed.com")||window.location.href.includes("widget-test.tagshop.ai")?(0,b.jsxs)(c.q,{children:[s.nX?(0,b.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):s.ZQ?(0,b.jsx)("link",{rel:"icon",href:"https://tagembed.com/wp-content/uploads/2020/09/favicon.ico"}):null,(0,b.jsx)("meta",{property:"og:type",content:"website"}),(0,b.jsx)("meta",{property:"og:url",content:s.ZQ?"https://widget.tagembed.com/".concat(_.Wall.id):"https://widget-lite.taggbox.com/".concat(_.Wall.id)}),(0,b.jsx)("meta",{property:"og:title",content:"".concat(_.Wall.name," - ").concat(S," Widget")}),(0,b.jsx)("meta",{property:"og:description",content:"".concat(_.Wall.name," featuring Social Feed using ").concat(S," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,b.jsx)("meta",{property:"og:image",content:t}),(0,b.jsx)("meta",{property:"type",content:"website"}),(0,b.jsx)("meta",{property:"url",content:s.ZQ?"https://widget.tagembed.com/".concat(_.Wall.id):"https://widget-lite.taggbox.com/".concat(_.Wall.id)}),(0,b.jsx)("meta",{property:"title",content:"".concat(_.Wall.name," - ").concat(S," Widget")}),(0,b.jsx)("meta",{property:"description",content:"".concat(_.Wall.name," featuring Social Feed using ").concat(S," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,b.jsx)("meta",{property:"image",content:t}),P?document.body.classList.add("tb_previw_th-".concat(v)):null,T.map((function(t,n){return(0,b.jsx)("link",{href:"".concat(a.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},n)})),1===_.Personalization.cssStatus?(0,b.jsx)("style",{type:"text/css",children:_.Personalization.css}):null,(0,b.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),_.Wall&&_.Wall.google_tacking_status?(0,b.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,_.Wall&&_.Wall.google_tacking_status?(0,b.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(_.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,(0,b.jsx)("style",{children:":root {\n                        --tb-base-color: ".concat(n,";\n                        --tb-base-font-size:").concat(o,";\n                        --tb-author-color: ").concat(r,";\n                        --tb-link-color: ").concat(i,";\n                        --tb-line-height: ").concat(l,";\n                        --tb-font-weight: ").concat(g,";\n                        --tb-author-font: ").concat(u,";\n                        --tb-base-font: ").concat(d,";\n                        --tb-bg-color: ").concat(m,";\n                        --tb-border-radius: ").concat(w,";\n\n                        --tb-cta-color:").concat(f.btnColor,";\n                        --tb-cta-bg-color:").concat(f.btnBgColor,";\n                        --tb-cta-border-color:").concat(f.btnBorderColor,";\n                        --tb-cta-color-hover:").concat(f.btnColorHover,";\n                        --tb-cta-bg-color-hover:").concat(f.btnBgColorHover,";\n                        --tb-cta-border-color-hover:").concat(f.btnBorderColorHover,";\n                        --tb-cta-border-radius:").concat(f.btnRadius,";\n                        --tb-cta-padding:").concat(f.btnPadding,";\n                        --tb-cta-height:").concat(f.btnMinHeight,";\n                        --tb-cta-width:").concat(f.btnMinWidth,";\n                        --tb-cta-font:").concat(f.btnFont,";\n                        --tb-cta-font-weight:").concat(f.btnWeight,";\n                        --tb-cta-transition:").concat(f.btnTransition,";\n\n                        --tb-btn-color:").concat(h.btnColor,";\n                        --tb-btn-bg-color:").concat(h.btnBgColor,";\n                        --tb-btn-border-color:").concat(h.btnBorderColor,";\n                        --tb-btn-color-hover:").concat(h.btnColorHover,";\n                        --tb-btn-bg-color-hover:").concat(h.btnBgColorHover,";\n                        --tb-btn-border-color-hover:").concat(h.btnBorderColorHover,";\n                        --tb-btn-border-radius:").concat(h.btnRadius,";\n                        --tb-btn-padding:").concat(h.btnPadding,";\n                        --tb-btn-height:").concat(h.btnMinHeight,";\n                        --tb-btn-width:").concat(h.btnMinWidth,";\n                        --tb-btn-font:").concat(h.btnFont,";\n                        --tb-btn-font-weight:").concat(h.btnWeight,";\n                        --tb-btn-transition:").concat(h.btnTransition,";\n\n                        --tb-popup-author-color:").concat(y.authorColor,";\n                        --tb-popup-color:").concat(y.color,";\n                        --tb-popup-font-size:").concat(y.fontSize,";\n                        --tb-popup-icon-color:").concat(y.iconColor,";\n\n\n\n                        --tb-catalogue-font:").concat(C.CatalogueTitle.font,";\n                        --tb-catalogue-varient:").concat(C.CatalogueTitle.varient,";\n                        --tb-catalogue-size:").concat(C.CatalogueTitle.size,";\n                        --tb-catalogue-color:").concat(C.CatalogueTitle.color,";\n\n                        --tb-product-font:").concat(C.ProductTitle.font,";\n                        --tb-product-varient:").concat(C.ProductTitle.varient,";\n                        --tb-product-size:").concat(C.ProductTitle.size,";\n                        --tb-product-color:").concat(C.ProductTitle.color,";\n\n                        --tb-price-font:").concat(C.Price.font,";\n                        --tb-price-varient:").concat(C.Price.varient,";\n                        --tb-price-size:").concat(C.Price.size,";\n                        --tb-price-color:").concat(C.Price.color,";\n\n                        --tb-shop-btn-font:").concat(C.Button.font,";\n                        --tb-shop-btn-varient:").concat(C.Button.varient,";\n                        --tb-shop-btn-size:").concat(C.Button.size,";\n                        --tb-shop-btn-color:").concat(C.Button.color,";\n                        --tb-shop-btn-bg-color:").concat(C.Button.background,";\n\n                        --tb-hotspot-color:").concat(C.Hotspot.color,";\n                        --tb-hotspot-bg-color:").concat(C.Hotspot.background,";\n\n                        --tb-icon-position:").concat(p,";\n                        \n                    }")})]}):(0,b.jsxs)(c.q,{children:[s.nX?(0,b.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,P?document.body.classList.add("tb_previw_th-".concat(v)):null,T.map((function(t,n){return(0,b.jsx)("link",{href:"".concat(a.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},n)})),1===_.Personalization.cssStatus?(0,b.jsx)("style",{type:"text/css",children:_.Personalization.css}):null,(0,b.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),_.Wall&&_.Wall.google_tacking_status?(0,b.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,_.Wall&&_.Wall.google_tacking_status?(0,b.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(_.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,(0,b.jsx)("style",{children:":root {\n                        --tb-base-color: ".concat(n,";\n                        --tb-base-font-size:").concat(o,";\n                        --tb-author-color: ").concat(r,";\n                        --tb-link-color: ").concat(i,";\n                        --tb-line-height: ").concat(l,";\n                        --tb-font-weight: ").concat(g,";\n                        --tb-author-font: ").concat(u,";\n                        --tb-base-font: ").concat(d,";\n                        --tb-bg-color: ").concat(m,";\n                        --tb-border-radius: ").concat(w,";\n\n                        --tb-cta-color:").concat(f.btnColor,";\n                        --tb-cta-bg-color:").concat(f.btnBgColor,";\n                        --tb-cta-border-color:").concat(f.btnBorderColor,";\n                        --tb-cta-color-hover:").concat(f.btnColorHover,";\n                        --tb-cta-bg-color-hover:").concat(f.btnBgColorHover,";\n                        --tb-cta-border-color-hover:").concat(f.btnBorderColorHover,";\n                        --tb-cta-border-radius:").concat(f.btnRadius,";\n                        --tb-cta-padding:").concat(f.btnPadding,";\n                        --tb-cta-height:").concat(f.btnMinHeight,";\n                        --tb-cta-width:").concat(f.btnMinWidth,";\n                        --tb-cta-font:").concat(f.btnFont,";\n                        --tb-cta-font-weight:").concat(f.btnWeight,";\n                        --tb-cta-transition:").concat(f.btnTransition,";\n\n                        --tb-btn-color:").concat(h.btnColor,";\n                        --tb-btn-bg-color:").concat(h.btnBgColor,";\n                        --tb-btn-border-color:").concat(h.btnBorderColor,";\n                        --tb-btn-color-hover:").concat(h.btnColorHover,";\n                        --tb-btn-bg-color-hover:").concat(h.btnBgColorHover,";\n                        --tb-btn-border-color-hover:").concat(h.btnBorderColorHover,";\n                        --tb-btn-border-radius:").concat(h.btnRadius,";\n                        --tb-btn-padding:").concat(h.btnPadding,";\n                        --tb-btn-height:").concat(h.btnMinHeight,";\n                        --tb-btn-width:").concat(h.btnMinWidth,";\n                        --tb-btn-font:").concat(h.btnFont,";\n                        --tb-btn-font-weight:").concat(h.btnWeight,";\n                        --tb-btn-transition:").concat(h.btnTransition,";\n\n                        --tb-popup-author-color:").concat(y.authorColor,";\n                        --tb-popup-color:").concat(y.color,";\n                        --tb-popup-font-size:").concat(y.fontSize,";\n                        --tb-popup-icon-color:").concat(y.iconColor,";\n\n\n\n                        --tb-catalogue-font:").concat(C.CatalogueTitle.font,";\n                        --tb-catalogue-varient:").concat(C.CatalogueTitle.varient,";\n                        --tb-catalogue-size:").concat(C.CatalogueTitle.size,";\n                        --tb-catalogue-color:").concat(C.CatalogueTitle.color,";\n\n                        --tb-product-font:").concat(C.ProductTitle.font,";\n                        --tb-product-varient:").concat(C.ProductTitle.varient,";\n                        --tb-product-size:").concat(C.ProductTitle.size,";\n                        --tb-product-color:").concat(C.ProductTitle.color,";\n\n                        --tb-price-font:").concat(C.Price.font,";\n                        --tb-price-varient:").concat(C.Price.varient,";\n                        --tb-price-size:").concat(C.Price.size,";\n                        --tb-price-color:").concat(C.Price.color,";\n\n                        --tb-shop-btn-font:").concat(C.Button.font,";\n                        --tb-shop-btn-varient:").concat(C.Button.varient,";\n                        --tb-shop-btn-size:").concat(C.Button.size,";\n                        --tb-shop-btn-color:").concat(C.Button.color,";\n                        --tb-shop-btn-bg-color:").concat(C.Button.background,";\n\n                        --tb-hotspot-color:").concat(C.Hotspot.color,";\n                        --tb-hotspot-bg-color:").concat(C.Hotspot.background,";\n\n                        --tb-icon-position:").concat(p,";\n                        \n                    }")})]})}}},80888:(t,n,o)=>{"use strict";var e=o(79047);function r(){}function c(){}c.resetWarningCache=r,t.exports=function(){function t(t,n,o,r,c,a){if(a!==e){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function n(){return t}t.isRequired=t;var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:c,resetWarningCache:r};return o.PropTypes=o,o}},52007:(t,n,o)=>{t.exports=o(80888)()},79047:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50077:t=>{var n="undefined"!==typeof Element,o="function"===typeof Map,e="function"===typeof Set,r="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function c(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var i,l,s,b;if(Array.isArray(t)){if((i=t.length)!=a.length)return!1;for(l=i;0!==l--;)if(!c(t[l],a[l]))return!1;return!0}if(o&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(b=t.entries();!(l=b.next()).done;)if(!a.has(l.value[0]))return!1;for(b=t.entries();!(l=b.next()).done;)if(!c(l.value[1],a.get(l.value[0])))return!1;return!0}if(e&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(b=t.entries();!(l=b.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((i=t.length)!=a.length)return!1;for(l=i;0!==l--;)if(t[l]!==a[l])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"===typeof t.valueOf&&"function"===typeof a.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString&&"function"===typeof t.toString&&"function"===typeof a.toString)return t.toString()===a.toString();if((i=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(l=i;0!==l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(n&&t instanceof Element)return!1;for(l=i;0!==l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!c(t[s[l]],a[s[l]]))return!1;return!0}return t!==t&&a!==a}t.exports=function(t,n){try{return c(t,n)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}}}]);
//# sourceMappingURL=4081.2b0ee538.chunk.js.map