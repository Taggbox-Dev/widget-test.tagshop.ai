(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4081],{59681:(t,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>p});var e=n(72791),r=n(60173),a=n(54270),i=n(70188),c=n(2703),l=n(11225),s=n(46535),g=n(80184);const u=(0,c.CL)()+1e3*((0,c.QM)()+60*((0,c.dn)()+60*(0,c.eZ)())),d=()=>(0,g.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),b=(t,o,n,e,r,a,i,c,l,s,u,d,b,p,f)=>(0,g.jsx)("style",{children:":root {\n                        --tb-base-color: ".concat(t,";\n                        --tb-base-font-size:").concat(o,";\n                        --tb-author-color: ").concat(n,";\n                        --tb-link-color: ").concat(e,";\n                        --tb-line-height: ").concat(c,";\n                        --tb-font-weight: ").concat(l,";\n                        --tb-author-font: ").concat(s,";\n                        --tb-base-font: ").concat(u,";\n                        --tb-bg-color: ").concat(d,";\n                        --tb-border-radius: ").concat(b,";\n\n                        --tb-cta-color:").concat(r.btnColor,";\n                        --tb-cta-bg-color:").concat(r.btnBgColor,";\n                        --tb-cta-border-color:").concat(r.btnBorderColor,";\n                        --tb-cta-color-hover:").concat(r.btnColorHover,";\n                        --tb-cta-bg-color-hover:").concat(r.btnBgColorHover,";\n                        --tb-cta-border-color-hover:").concat(r.btnBorderColorHover,";\n                        --tb-cta-border-radius:").concat(r.btnRadius,";\n                        --tb-cta-padding:").concat(r.btnPadding,";\n                        --tb-cta-height:").concat(r.btnMinHeight,";\n                        --tb-cta-width:").concat(r.btnMinWidth,";\n                        --tb-cta-font:").concat(r.btnFont,";\n                        --tb-cta-font-weight:").concat(r.btnWeight,";\n                        --tb-cta-transition:").concat(r.btnTransition,";\n\n                        --tb-btn-color:").concat(a.btnColor,";\n                        --tb-btn-bg-color:").concat(a.btnBgColor,";\n                        --tb-btn-border-color:").concat(a.btnBorderColor,";\n                        --tb-btn-color-hover:").concat(a.btnColorHover,";\n                        --tb-btn-bg-color-hover:").concat(a.btnBgColorHover,";\n                        --tb-btn-border-color-hover:").concat(a.btnBorderColorHover,";\n                        --tb-btn-border-radius:").concat(a.btnRadius,";\n                        --tb-btn-padding:").concat(a.btnPadding,";\n                        --tb-btn-height:").concat(a.btnMinHeight,";\n                        --tb-btn-width:").concat(a.btnMinWidth,";\n                        --tb-btn-font:").concat(a.btnFont,";\n                        --tb-btn-font-weight:").concat(a.btnWeight,";\n                        --tb-btn-transition:").concat(a.btnTransition,";\n\n                        --tb-popup-author-color:").concat(p.authorColor,";\n                        --tb-popup-color:").concat(p.color,";\n                        --tb-popup-font-size:").concat(p.fontSize,";\n                        --tb-popup-icon-color:").concat(p.iconColor,";\n\n\n\n                        --tb-catalogue-font:").concat(i.CatalogueTitle.font,";\n                        --tb-catalogue-varient:").concat(i.CatalogueTitle.varient,";\n                        --tb-catalogue-size:").concat(i.CatalogueTitle.size,";\n                        --tb-catalogue-color:").concat(i.CatalogueTitle.color,";\n\n                        --tb-product-font:").concat(i.ProductTitle.font,";\n                        --tb-product-varient:").concat(i.ProductTitle.varient,";\n                        --tb-product-size:").concat(i.ProductTitle.size,";\n                        --tb-product-color:").concat(i.ProductTitle.color,";\n\n                        --tb-price-font:").concat(i.Price.font,";\n                        --tb-price-varient:").concat(i.Price.varient,";\n                        --tb-price-size:").concat(i.Price.size,";\n                        --tb-price-color:").concat(i.Price.color,";\n\n                        --tb-shop-btn-font:").concat(i.Button.font,";\n                        --tb-shop-btn-varient:").concat(i.Button.varient,";\n                        --tb-shop-btn-size:").concat(i.Button.size,";\n                        --tb-shop-btn-color:").concat(i.Button.color,";\n                        --tb-shop-btn-bg-color:").concat(i.Button.background,";\n\n                        --tb-hotspot-color:").concat(i.Hotspot.color,";\n                        --tb-hotspot-bg-color:").concat(i.Hotspot.background,";\n\n                        --tb-icon-position:").concat(f,";\n                        \n                    }")});class p extends e.PureComponent{constructor(t){super(t),this.ThemesStaticValues=t=>{switch(t){case 4:case 55:case 50:case 16:case 56:return["authorColor","iconColor","baseColor","ctaBg","ctaText"];case 49:return["authorColor","iconColor"]}},this.isStatic=t=>{const o=this.ThemesStaticValues(this.props.wall.Personalization.widgetTheme);return o&&null!=o?!!o.includes(t):null},this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?"".concat("https://cloud.taggbox.com/wall-branding/wallId_widget_").concat(t.wall.Wall.id,".jpg?v=").concat(u):"",baseColor:"#545454",baseFontSize:"14px",iconColor:"#000000",authorColor:"#000000",linkColor:"#3333FF",lineHeight:"1.5",fontWeight:"400",authorFont:"Inter, sans-serif",baseFont:"Inter, sans-serif",bgColor:"#ffffff",borderRadius:"0px",iconPosition:12,btnCTAProperties:{btnColor:"#ffffff",btnBgColor:"#2b2b2b",btnBorderColor:"#2b2b2b",btnColorHover:"#ffffff",btnBgColorHover:"#000000",btnBorderColorHover:"#000000",btnPadding:"8px 10px",btnRadius:"3px",btnMinHeight:"40px",btnMinWidth:"115px",btnFont:"Inter, sans-serif",btnWeight:400,btnTransition:"all .3s ease-out 0s"},btnProperties:{btnColor:"#2b2b2b",btnBgColor:"#ffffff",btnBorderColor:"#2b2b2b",btnColorHover:"#2b2b2b",btnBgColorHover:"#ffffff",btnBorderColorHover:"#2b2b2b",btnPadding:"8px 10px",btnRadius:"3px",btnMinHeight:"40px",btnMinWidth:"115px",btnFont:"Inter, sans-serif",btnWeight:400,btnTransition:"none"},popUpProperties:{fontSize:"14px",color:"#545454",iconColor:"#000000"},ProductSettings:{CatalogueTitle:{font:"",varient:"regular",size:"19",color:"#ff0303",text:"tttt"},ProductTitle:{font:"Rochester",varient:"100-italic",size:"17",color:"#1cbfaf"},Price:{font:"Homenaje",varient:"regular",size:"20",color:"#ff0000"},Button:{font:"Lato",varient:"100-italic",size:"17",background:"#ff0000",color:"#ffffff",text:"Shop Now",newTab:"1"},Hotspot:{type:"1",color:"#ff1414",background:"#ffffff",status:1}}}}componentDidMount(){const{hashtag_campaign_image:t,baseColor:o,baseFontSize:n,authorColor:e,linkColor:a,fontWeight:i,authorFont:g,baseFont:u,btnCTAProperties:d,btnProperties:b,lineHeight:p,bgColor:f,borderRadius:h,popUpProperties:m,ProductSetting:w}=this.state,y=!!window.location.href.includes("hashtag_campaign"),{wall:C}=this.props,_=C.Wall.id,P=C.Wall.owner,x=C.ThemeRule,S=C.ProductSetting,v=!(!x.inheritStyles||1!=x.inheritStyles);var k=document.querySelector("body"),T=document.querySelector("strong"),j=document.querySelector("p"),B=document.querySelector("h2"),W=document.querySelector("h3"),z=document.querySelector("a"),H=document.getElementsByTagName("button");H=H&&H.length>5?window.getComputedStyle(H[5]):H&&1==H.length&&H[0]?window.getComputedStyle(H[0]):window.getComputedStyle(z),T=T?window.getComputedStyle(T):W?window.getComputedStyle(W):B?window.getComputedStyle(B):"";var L=k?window.getComputedStyle(k).getPropertyValue("color"):"";L=(0,c.uu)(L,x.cardColor);var R=k?window.getComputedStyle(k).getPropertyValue("font-size"):"",F=k?window.getComputedStyle(k).getPropertyValue("font-family"):"",O=k?window.getComputedStyle(k).getPropertyValue("line-height"):"",V=j?window.getComputedStyle(j).getPropertyValue("font-weight"):"",M=T?T.getPropertyValue("color"):"#2b2b2b";M=(0,c.uu)(M,x.cardColor);var U=T?T.getPropertyValue("font-family"):"",I=T?T.getPropertyValue("color"):"",q=H?H.getPropertyValue("color"):"",E=H?H.getPropertyValue("border-color"):"",A=H?H.getPropertyValue("background-color"):"",D=H?H.getPropertyValue("padding"):"",Q=H?H.getPropertyValue("border-radius"):"",N=H?H.getPropertyValue("height"):"",X=H?H.getPropertyValue("width"):"",Z=H?H.getPropertyValue("font-weight"):"",G=H?H.getPropertyValue("font-family"):"",$=H?H.getPropertyValue("transition"):"",Y=H?H.getPropertyValue("color"):"",J=H?H.getPropertyValue("border-color"):"",K=H?H.getPropertyValue("background-color"):"";this.setState({authorColor:!this.isStatic("authorColor")&&v&&M||x.authorColor,authorFont:!this.isStatic("authorFont")&&v&&U||x.css_font,baseColor:!this.isStatic("baseColor")&&v&&L||x.fontColor,baseFont:v?F||u:x.css_font,linkColor:v?I||a:x.iconColor,baseFontSize:!this.isStatic("baseFontSize")&&v?R||n:"".concat(x.fontSize,"px"),fontWeight:v?V||i:x.font_varient,borderRadius:"".concat(x.radius,"px"),bgColor:x.cardColor,lineHeight:v&&O||p,iconColor:this.isStatic("iconColor")&&1!=x.iconType?"#ffffff":1==x.iconType?x.iconColor:"",iconPosition:"".concat(x.radius/3.5+12,"px"),btnCTAProperties:{btnColor:v?q:d.btnColor,btnBgColor:v?A:d.btnBgColor,btnBorderColor:v?E:d.btnBorderColor,btnColorHover:v?Y:d.btnColorHover,btnBgColorHover:v?K:d.btnBgColorHover,btnBorderColorHover:v?J:d.btnBorderColorHover,btnPadding:v?D:d.btnPadding,btnRadius:v?Q:d.btnRadius,btnMinHeight:v?N:d.btnMinHeight,btnMinWidth:v?X:d.btnMinWidth,btnWeight:v?Z:d.btnWeight,btnFont:v?G:d.btnFont,btnTransition:v?$:d.btnTransition},btnProperties:{btnColor:v?q:b.btnColor,btnBgColor:v?A:b.btnBgColor,btnBorderColor:v?E:b.btnBorderColor,btnColorHover:v?Y:b.btnColorHover,btnBgColorHover:v?K:b.btnBgColorHover,btnBorderColorHover:v?J:b.btnBorderColorHover,btnPadding:v?"5px 10px":b.btnPadding,btnRadius:v?Q:b.btnRadius,btnMinHeight:v?N:b.btnMinHeight,btnMinWidth:v?X:b.btnMinWidth,btnWeight:v?Z:b.btnWeight,btnFont:v?G:b.btnFont,btnTransition:v?$:b.btnTransition},popUpProperties:{authorColor:v?M||m.authorColor:(0,c.uu)(x.authorColor,x.cardColor),iconColor:1!=x.iconType?"#ffffff":1==x.iconType?x.iconColor:"",fontSize:v?R:r.tq?"".concat(x.fontSize,"px"):r.Em?x.fontSize:"".concat(x.fontSize+4,"px"),color:v?L||m.color:(0,c.uu)(x.fontColor,x.cardColor)},ProductSettings:{CatalogueTitle:{font:S.CatalogueTitle.font,varient:S.CatalogueTitle.varient,size:"".concat(S.CatalogueTitle.size,"px"),color:S.CatalogueTitle.color},ProductTitle:{font:S.ProductTitle.font,varient:S.ProductTitle.varient,size:"".concat(S.ProductTitle.size,"px"),color:S.ProductTitle.color},Price:{font:S.Price.font,varient:S.Price.varient,size:"".concat(S.Price.size,"px"),color:S.Price.color},Button:{font:S.Button.font,varient:S.Button.varient,size:"".concat(S.Button.size,"px"),color:S.Button.color,background:S.Button.background},Hotspot:{color:S.Hotspot.color,background:S.Hotspot.background}}}),y&&(0,l.wl)({wallId:_,domainName:s.QC?s.nX?"https://test.taggbox.com/embed-widget/lite/".concat(_,"?ugcSuite=1&hashtag_campaign=true"):"https://test.taggbox.com/embed-widget/lite/".concat(C.Wall.url,"?hashtag_campaign=true"):s.nX?"https://widget.taggbox.com/".concat(_,"?ugcSuite=1&hashtag_campaign=true"):"https://widget.taggbox.com/".concat(_),ownerId:P,screenshotSize:["1200x624"]}).then((t=>{let{data:o}=t;const{responseCode:n,responseData:e}=o;if(200==n&&e.length>0&&e[0]&&e[0].s3Url){const t=(0,c.CL)()+1e3*((0,c.QM)()+60*((0,c.dn)()+60*(0,c.eZ)()));this.setState({hashtag_campaign_image:"".concat(e[0].s3Url,"?v=").concat(t)})}else{const t=(0,c.Bq)(C.Personalization.widgetTheme);this.setState({hashtag_campaign_image:t})}})).catch((t=>{const o=(0,c.Bq)(C.Personalization.widgetTheme);this.setState({hashtag_campaign_image:o})}))}render(){const{hashtag_campaign_image:t,baseColor:o,baseFontSize:n,iconColor:e,authorColor:r,linkColor:c,lineHeight:l,fontWeight:u,authorFont:p,baseFont:f,iconPosition:h,btnCTAProperties:m,btnProperties:w,bgColor:y,borderRadius:C,popUpProperties:_,ProductSettings:P}=this.state,{wall:x}=this.props,S=(!!!(x.ThemeRule&&Object.keys(x.ThemeRule).length>0&&x.ThemeRule.link_font&&""!==x.ThemeRule.link_font)||x.ThemeRule.link_font,!x.UgcSettings||x.UgcSettings.onsite_link_font_btn,!x.UgcSettings||x.UgcSettings.onsite_link_font_msg,x.Banner&&Object.keys(x.Banner).length>0&&x.Banner.title_link_font,x.Banner&&Object.keys(x.Banner).length>0&&x.Banner.subtitle_link_font,new URLSearchParams(window.location.search).get("preview")),v=x.Personalization.widgetTheme,k=!!window.location.href.includes("hashtag_campaign"),T=s.nX?"Tagbox UGC Suite":s.ZQ?"Tagembed Widget":"Taggbox";var j=["inherit","Default"],B=["Inter"];return x.UgcSettings.onsite_link_font_btn&&!j.includes(x.UgcSettings.onsite_link_font_btn)&&B.push(x.UgcSettings.onsite_link_font_btn),x.UgcSettings.onsite_link_font_msg&&!j.includes(x.UgcSettings.onsite_link_font_msg)&&B.push(x.UgcSettings.onsite_link_font_msg),x.ThemeRule.link_font&&!j.includes(x.ThemeRule.link_font)&&B.push(x.ThemeRule.link_font),x.Banner&&Object.keys(x.Banner).length&&(x.Banner.subtitle_link_font&&!j.includes(x.Banner.subtitle_link_font)&&B.push(x.Banner.subtitle_link_font),x.Banner.title_link_font&&!j.includes(x.Banner.title_link_font)&&B.push(x.Banner.title_link_font)),x.ProductSetting&&Object.keys(x.ProductSetting).length&&(x.ProductSetting.Button.fontLink&&!j.includes(x.ProductSetting.Button.fontLink)&&B.push(x.ProductSetting.Button.fontLink),x.ProductSetting.CatalogueTitle.fontLink&&!j.includes(x.ProductSetting.CatalogueTitle.fontLink)&&B.push(x.ProductSetting.CatalogueTitle.fontLink),x.ProductSetting.Price.fontLink&&!j.includes(x.ProductSetting.Price.fontLink)&&B.push(x.ProductSetting.Price.fontLink),x.ProductSetting.ProductTitle.fontLink&&!j.includes(x.ProductSetting.ProductTitle.fontLink)&&B.push(x.ProductSetting.ProductTitle.fontLink)),B=B.filter(((t,o,n)=>n.indexOf(t)===o)),k?(0,g.jsxs)(a.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(x.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(x.Wall.name," - ").concat(T," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(x.Wall.name," hashtag campaign created using ").concat(T," Widget.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(x.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(x.Wall.name," - ").concat(T," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(x.Wall.name," hashtag campaign created using ").concat(T," Widget.")}),(0,g.jsx)("meta",{property:"image",content:t}),S?document.body.classList.add("tb_previw_th-".concat(v)):null,B.map((function(t,o){return(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o)})),1===x.Personalization.cssStatus?(0,g.jsx)("style",{type:"text/css",children:x.Personalization.css}):null,d(),x.Wall&&x.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,x.Wall&&x.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(x.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):window.location.href.includes("widget.taggbox.com")||window.location.href.includes("widget-test.tagembed.com")||window.location.href.includes("widgets.tagembed.com")||window.location.href.includes("widget-test.tagshop.ai")?(0,g.jsxs)(a.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):s.ZQ?(0,g.jsx)("link",{rel:"icon",href:"https://tagembed.com/wp-content/uploads/2020/09/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:s.ZQ?"https://widget.tagembed.com/".concat(x.Wall.id):"https://widget-lite.taggbox.com/".concat(x.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(x.Wall.name," - ").concat(T," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(x.Wall.name," featuring Social Feed using ").concat(T," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:s.ZQ?"https://widget.tagembed.com/".concat(x.Wall.id):"https://widget-lite.taggbox.com/".concat(x.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(x.Wall.name," - ").concat(T," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(x.Wall.name," featuring Social Feed using ").concat(T," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"image",content:t}),S?document.body.classList.add("tb_previw_th-".concat(v)):null,B.map((function(t,o){return(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o)})),1===x.Personalization.cssStatus?(0,g.jsx)("style",{type:"text/css",children:x.Personalization.css}):null,d(),x.Wall&&x.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,x.Wall&&x.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(x.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,b(o,n,r,c,m,w,P,l,u,p,f,y,C,_,h)]}):(0,g.jsxs)(a.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,S?document.body.classList.add("tb_previw_th-".concat(v)):null,B.map((function(t,o){return(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o)})),1===x.Personalization.cssStatus?(0,g.jsx)("style",{type:"text/css",children:x.Personalization.css}):null,d(),x.Wall&&x.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,x.Wall&&x.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(x.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,b(o,n,r,c,m,w,P,l,u,p,f,y,C,_,h)]})}}},80888:(t,o,n)=>{"use strict";var e=n(79047);function r(){}function a(){}a.resetWarningCache=r,t.exports=function(){function t(t,o,n,r,a,i){if(i!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:o,element:t,elementType:t,instanceOf:o,node:t,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},52007:(t,o,n)=>{t.exports=n(80888)()},79047:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50077:t=>{var o="undefined"!==typeof Element,n="function"===typeof Map,e="function"===typeof Set,r="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,s,g;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!==l--;)if(!a(t[l],i[l]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(g=t.entries();!(l=g.next()).done;)if(!i.has(l.value[0]))return!1;for(g=t.entries();!(l=g.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(e&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(g=t.entries();!(l=g.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!==l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"===typeof t.valueOf&&"function"===typeof i.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString&&"function"===typeof t.toString&&"function"===typeof i.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!==l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(o&&t instanceof Element)return!1;for(l=c;0!==l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!a(t[s[l]],i[s[l]]))return!1;return!0}return t!==t&&i!==i}t.exports=function(t,o){try{return a(t,o)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}}}]);
//# sourceMappingURL=4081.95b94605.chunk.js.map