"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[233],{62792:(e,t,a)=>{a.d(t,{Z:()=>p});var n,r=a(40854),s=a.n(r),o=a(23499),i=a(22030),l=a(92908),d=a(28215),c=a(89652),h=a(95553);let v;const p=(e,t,a,r,p,u,g)=>w=>{var _,b,m;const{wall:f,postData:k}=o.A.getState().appData,y=4===(null===f||void 0===f||null===(_=f.ThemeInfo)||void 0===_?void 0:_.id)&&1===(null===(b=f.ThemeStyle)||void 0===b?void 0:b.row),x=Object.keys((null===k||void 0===k?void 0:k.filteredDataObject)||{}).reduce(((e,t)=>{var a;return e+(0===r&&(null===(a=k.filteredDataObject[t])||void 0===a?void 0:a.length)||0)}),(null===k||void 0===k||null===(m=k.filteredDataObject[r])||void 0===m?void 0:m.length)||0),R=k.appendData.after,j=(e=>{const t=window.location.href,a=e?`#co_${e}`:".taggbox";let n={},r={};const s=e=>(0,i.eA)(t,e),o=s("region"),d=s("website"),c=s("tags");return l.HY&&(/.*(test\.tagshop\.ai\/w\/|widget-test\.tagshop\.ai|widget\.tagshop\.ai).*/.test(window.location.host)||d||o)&&(n=s("wall")?{}:{Website:1},o&&(v=o)),l.aD&&s("wallKey")&&(n.wallKey=s("wallKey")),r=c?{tag:c.includes("true")?1:0,keywords:decodeURIComponent(s("data-keywords")||s("keywords")||"")}:d?{Website:1,...v&&{region:v}}:(()=>{const e=document.querySelector(a);if(!e)return{};const{keywords:t,source:n,region:r,tags:s}=e.dataset;return{...s&&{tag:s.includes("true")?1:0,keywords:decodeURIComponent(t||"")},...l.HY&&{Website:n?1:void 0,region:r||void 0}}})(),{headers:{...n,...r,...h.ML}}})(i.wV)||{headers:{}},{headers:N}=j;N.tag=g?1:N.tag||void 0,N.keywords=g||N.keywords||void 0,N.action=1;const S={appendData:{after:R,networkID:r,heightEvent:u,tagName:g},filterNetworkId:r,newData:[],hasMoreData:{[r]:{hasMoreData:!0,after:R}},tagName:g};if(x<a&&x!==r){var M;n&&n.cancel(),n=s().CancelToken.source(),j.cancelToken=n.token,w({type:d.dC,payload:!0});const o=`${d.NH}${e}/${t}/${a}/${r}/1/${p}`,v=l.HY?`${o}/${(null===(M=(0,h.gu)(i.wV))||void 0===M?void 0:M.mUrl)||""}`:o,u=l.MH?`${d.NH}${e}/${a}/${r}/${p}`:v;(new c.A).get(u,j).then((t=>{const n=l.MH&&!["62229",62229].includes(e)?{data:JSON.parse([])}:t;w({type:d.Sg,payload:{...S,newData:n.data.data,hasMoreData:{[r]:{hasMoreData:!(y&&Object.keys(n.data.data).length<a)&&1===n.data.hasPost,after:n.data.after}},isFilter:!0}})})).catch((()=>{w({type:d.dC,payload:!1})}))}else w({type:d.Sg,payload:S})}},60233:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(65043),r=a(92908),s=a(78250),o=a(83003),i=a(62792),l=a(65005),d=a(65281),c=a(70579);const h=n.lazy((()=>a.e(1543).then(a.bind(a,21543))));class v extends n.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{const{activeId:e}=this.state,{reviewFilters:t}=this.props;if(0!==e&&t.length>0){const a=t.filter((t=>t.Network.id===e));a&&a.length>0&&window.open(a[0].Network.link,"_blank")}else this.setState((e=>({isOpen:!this.state.isOpen})))},this.handleClickOutside=e=>{this.dropdownRef.current&&!this.dropdownRef.current.contains(e.target)&&this.setState((e=>({isOpen:!1})))},this.onLoadTotalRating=e=>{let t=0,a=0,n="",r=0,s=this.props.wall.Banner.title_font_color;return e.map((o=>{const i=o.Network;t+=i.averageReviews*i.totalReviews,a+=i.totalReviews,n=e.length>1?"Overall":i.name,r=e.length>1?0:i.id,s=e.length>1?this.props.wall.Banner.title_font_color:i.color})),{network:{name:n,avgRate:isNaN(t/a)?0:(t/a).toFixed(1),totalReviews:a,color:s},activeId:r}},this.totalReviewNetworks=e=>t=>{const{network:a,activeId:n}=this.onLoadTotalRating(e);this.props.changeFilterStatus&&this.props.changeFilterStatus(2);const r=Math.floor(Date.now()/1e3),{appendData:s,wall:o}=this.props;let i=o.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(o.ThemeInfo.wallId,r,i,n,s.after,s.heightEvent,null),this.setState({network:a,activeId:n,networkID:n})},this.getReviewLogo=e=>{switch(e){case"Overall":return"";case"Facebook":return"facebook";case"Google Review":return"google";case"Yelp":return"yelp";case"Etsy":return"etsy";case"Amazon":return"amazon";case"Tripadvisor":return"tripadvisor";case"Review Hub":return r.MH?"tagbox":"tagembed";case"AliExpress":return"aliexpress";case"Airbnb":return"airbnb";case"Trustpilot Reviews":return"trustpilot";case"UGC Uploader":return"snapup";case"Booking.com":return"booking"}},this.state={networkID:null,isOpen:!1,activeId:0,network:{name:"",avgRate:0,totalReviews:0,color:this.props.wall.Banner.title_font_color}},this.dropdownRef=n.createRef()}componentDidMount(){document.addEventListener("click",this.handleClickOutside);const{network:e,activeId:t}=this.onLoadTotalRating(this.props.reviewFilters);this.setState({network:e,activeId:t,networkID:t})}componentWillUnmount(){document.removeEventListener("click",this.handleClickOutside)}render(){const{reviewFilters:e,wall:t}=this.props,{isOpen:a,network:o,activeId:i}=this.state,v={color:t.Banner.subTitle_font_color,fontFamily:t.Banner.subtitle_css_font,fontSize:t.Banner.subTitle_font_size},p={color:t.Banner.title_font_color,fontFamily:t.Banner.title_css_font},u={backgroundColor:t.Banner.background_color_two,color:"#fff"};return(0,c.jsx)("div",{className:"tb_rv_container",style:{padding:t.Personalization.padding/2},children:(0,c.jsxs)("div",{className:"tb_rv_wrapper",style:{borderRadius:t.ThemeRule.radius,backgroundColor:t.Banner.background_color},children:[e&&e.length>1?(0,c.jsx)("div",{className:"tb_rv_scrollable",children:(0,c.jsx)("div",{className:"tb_rv_filter_wrap",children:(0,c.jsxs)("div",{className:"tb_rv_filter_wrap_in",children:[Object.keys(e).length?(0,c.jsx)("div",{className:"tb_fil_soc_btn"+(0===i?" tb_fil_active":""),onClick:this.totalReviewNetworks(e),children:(0,c.jsx)("div",{className:"tb_fil_btn_txt",children:t.ThemeStyle.language.text.all})}):null,Object.keys(e).length&&e.map(((e,t)=>{const a=e.Network;return(0,c.jsx)("div",{className:"tb_fil_soc_btn"+(i===a.id?" tb_fil_active":""),onClick:this.totalReviewNetworks([e]),children:(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(h,{network:a,networkClass:"tb_review_filter_ico"})})},t)}))]})})}):null,(0,c.jsxs)("div",{className:"tb_rv_banner_wrap",style:{minHeight:t.Banner.banner_height},children:[(0,c.jsxs)("div",{className:"tb_rv_rating",children:[(0,c.jsxs)("div",{className:"tb_rv_head_text",children:["Overall"!==o.name?(0,c.jsx)("div",{className:"tb_rv_head_logo",children:(0,c.jsx)("img",{className:"tb_rv_head_log_img","data-name":this.getReviewLogo(o.name),src:`${s.th}/media/review-logo/${this.getReviewLogo(o.name)}.svg`,height:40,width:50,style:{marginTop:"Trustpilot Reviews"===o.name?-6:""}})}):null,(0,c.jsx)("div",{className:"tb_rv_head_r_text "+(r.MH?`tb-cTBfont-${t.Banner.title_font_varient}`:""),style:r.MH?p:{},children:"Overall"==o.name?"Overall Rating":"Rating"})]}),(0,c.jsxs)("div",{className:"tb_rv_rating_wrap",children:[(0,c.jsx)("div",{className:"tb_rv_review_count "+(r.MH?`tb-cTBfont-${t.Banner.title_font_varient}`:""),style:r.MH?p:{color:t.Banner.subTitle_font_color},children:o.avgRate}),(0,c.jsx)("div",{className:"tb_rv_rview_star",children:(0,c.jsx)(l.A,{size:!1,rating:o.avgRate})}),(0,c.jsxs)("div",{className:`tb_rv_review_total_post tb-cTBfont-${r.MH?t.Banner.title_font_varient:t.Banner.subtitle_font_varient}`,style:r.MH?p:v,children:[(0,d.sl)(o.totalReviews)," reviews"]})]})]}),(0,c.jsxs)("div",{className:"tb_rv_banner_btn_wrap",ref:this.dropdownRef,children:[(0,c.jsx)("div",{className:`tb_rv_banner_btn tb-cTBfont-${r.MH?t.Banner.subtitle_font_varient:""}`,onClick:this.toggleDropdown,style:u,children:"Write a Review"}),a&&(0,c.jsxs)("div",{className:"tb_rv_dropdown_ "+(a?"tb_rv_dd_show":""),children:[(0,c.jsx)("div",{className:"tb_rv_dropdown_title",children:"Where do you want to leave a review?"}),Object.keys(e).length&&e.map(((e,t)=>{const a=e.Network;return(0,c.jsxs)("div",{className:"tb_rv_dropdown_list",onClick:e=>a.link?window.open(a.link,"_blank"):null,children:[(0,c.jsx)(h,{network:a,networkClass:"tb_rv_dd_ico"}),a.name&&String(a.name).includes("Google")?"Google":String(a.name).includes("UGC Upload")?"SnapUp":a.name]},t)}))]})]})]})]})})}}const p=(0,o.Ng)((e=>({})),(e=>({filterPostDataAppendWebFilter:(t,a,n,r,s,o,l)=>e((0,i.Z)(t,a,n,r,s,o,l))})))(v),u=n.lazy((()=>a.e(9329).then(a.bind(a,9329)))),g=n.lazy((()=>a.e(5703).then(a.bind(a,25703))));class w extends n.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{const{activeId:e}=this.state,{reviewFilters:t}=this.props;if(0!=e&&t.length>0){const a=t.filter((t=>t.Network.id==e));a&&a.length>0&&window.open(a[0].Network.link,"_blank")}else this.setState((e=>({isOpen:!this.state.isOpen})))},this.handleClickOutside=e=>{this.dropdownRef.current&&!this.dropdownRef.current.contains(e.target)&&this.setState((e=>({isOpen:!1})))},this.onLoadTotalRating=e=>{let t=0,a=0,n="",r=0,s=this.props.wall.Banner.title_font_color;return e.map((o=>{const i=o.Network;t+=i.averageReviews*i.totalReviews,a+=i.totalReviews,n=e.length>1?"Overall":i.name,r=e.length>1?0:i.id,s=e.length>1?this.props.wall.Banner.title_font_color:i.color})),{network:{name:n,avgRate:isNaN(t/a)?0:(t/a).toFixed(1),totalReviews:a,color:s},activeId:r}},this.totalReviewNetworks=e=>t=>{const{network:a,activeId:n}=this.onLoadTotalRating(e);this.props.changeFilterStatus&&this.props.changeFilterStatus(2);const r=Math.floor(Date.now()/1e3),{appendData:s,wall:o,ThemeStyle:i}=this.props;let l=i.totalPosts;this.props.filterPostDataAppendWebFilter(o.Wall.id,r,l,n,s.after,s.heightEvent,null),this.setState({network:a,activeId:n,networkID:n})},this.getReviewLogo=e=>{switch(e){case"Overall":default:return"";case"Facebook":return"facebook";case"Google Review":return"google";case"Yelp":return"yelp";case"Etsy":return"etsy";case"Amazon":return"amazon";case"Tripadvisor":return"tripadvisor";case"Review Hub":return r.MH?"tagbox":"tagembed";case"AliExpress":return"aliexpress";case"Airbnb":return"airbnb";case"Trustpilot Reviews":return"trustpilot";case"UGC Uploader":return"snapup";case"Booking.com":return"booking"}},this.state={networkID:null,isOpen:!1,activeId:0},this.dropdownRef=n.createRef()}componentDidMount(){document.addEventListener("click",this.handleClickOutside);const{network:e,activeId:t}=this.onLoadTotalRating(this.props.reviewFilters);this.setState({network:e,activeId:t,networkID:t})}componentWillUnmount(){document.removeEventListener("click",this.handleClickOutside)}render(){const{wall:e,isHeader:t}=this.props;return t?(0,c.jsx)(c.Fragment,{children:1==e.Reviews.headerType?(0,c.jsxs)(n.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(u,{...this.props})]}):2==e.Reviews.headerType?(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(g,{...this.props})}):null}):(0,c.jsx)(p,{...this.props})}}const _=w},65005:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(70579);const r=(e,t,a)=>(0,n.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:e,fontSize:a,minWidth:a+"px"},children:(0,n.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{color:e,width:10*t+"%",fontSize:a,minWidth:a+"px"},children:[(0,n.jsx)("div",{})," "]})}),s=e=>{let{rating:t,size:a,color:s}=e;const o=t>5?5:t,i=Math.trunc(5-o),l=Math.trunc(o),d=String(o).split(".")[1];return(0,n.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[l?[...Array(l)].map(((e,t)=>(0,n.jsx)("div",{"data-index":t,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:s||"#F8B90C",fontSize:a,minWidth:a+"px"},children:(0,n.jsx)("div",{})},t))):null,d>0?r(s||"#F8B90C",d,a):null,i?[...Array(i)].map(((e,t)=>(0,n.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:a,minWidth:a+"px"},children:(0,n.jsx)("div",{})},t))):null]})}},65281:(e,t,a)=>{a.d(t,{C9:()=>w,Cq:()=>g,HI:()=>p,Ph:()=>x,S2:()=>k,TW:()=>D,Ul:()=>v,Uy:()=>d,fF:()=>_,hZ:()=>m,hz:()=>u,iS:()=>h,p5:()=>M,pj:()=>I,sl:()=>y,um:()=>c,vG:()=>S,w:()=>b,wG:()=>f});var n=a(92908),r=a(78250),s=a(23499);let o=[],i=!1;const l=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${n.$x}`,Productdomain:n.QR}),d=e=>{var t;return null===(t=document.getElementById("tb_onsite_btn_id"))||void 0===t?void 0:t.classList.toggle("tb_onsite_btn_disabled",1===e)},c=e=>{var t,a;return null===(t=(a={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[e])||void 0===t?void 0:t.call(a)},h=e=>{const t=new Date(1e3*e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`},v=()=>Math.floor(1e4*Math.random()).toString().padStart(4,"0"),p=e=>{try{o.push(e)}catch(t){console.log(t)}},u=e=>e&&""!==e&&!e.includes("ui-avatars"),g=e=>{if(!e)return"0 Byte";const t=Math.floor(Math.log(e)/Math.log(1024));return{size:Math.round(e/Math.pow(1024,t),2),sizeText:["Bytes","KB","MB","GB","TB"][t]}},w=e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e,_=e=>{const t=Date.now()-1e3*e;if(t<6e4)return"just now";const a=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((e=>{let{ms:a}=e;return t>=a})),n=Math.floor(t/a.ms);return`${n} ${a.label}${n>1?"s":""} ago`},b=e=>{try{return null!==e&&void 0!==e&&e.includes("http")?[...new Set(e.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((e,t)=>e.replaceAll(t,`<a class="text_links_" role="link" target="_blank" href="${t}">${t}</a>`)),e):e}catch{return e}},m=()=>[`${r.om}`,"Website Widget"],f=e=>e&&String(e)?unescape(e).split("/").pop().split("/").slice(-1).join().split(".").shift():"",k=["localhost","widget","wall_id="].every((e=>(0,n.vq)(e)))?"taggbox_main":n.MH||[`${n.Xg}.${n.IF}`,`${n.Xg}${n.t6}${n.IF}`,`${n.Xg}s.${n.IF}`].some((e=>(0,n.vq)(e)))?"tag_main__root":n.HY?"taggShopRoot":"taggbox_main",y=e=>{const t=Math.floor(Math.log10(e)/3)||0;return t?+(e/Math.pow(1e3,t)).toFixed(0)+["","K","M","B","T"][t]:e},x=e=>n.MH?e:atob(e),R=e=>{if(null===(a=e)||void 0===a?void 0:a.startsWith("#")){const t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}}{var t;const a=(null===e||void 0===e||null===(t=e.match(/\d+/g))||void 0===t?void 0:t.map(Number))||[0,0,0];return{r:a[0],g:a[1],b:a[2]}}var a},j=e=>{const{r:t,g:a,b:n}=R(e);return Math.sqrt((255-t)**2+(255-a)**2+(255-n)**2)<=30},N=e=>{const{r:t,g:a,b:n}=R(e);return Math.sqrt((t-50)**2+(a-50)**2+(n-50)**2)<50},S=(e,t)=>{var a;null!==(a=e)&&void 0!==a&&a.startsWith("rgba")&&(e="#000000");const n=(e,t)=>t.some((t=>null===e||void 0===e?void 0:e.includes(t))),r=e=>n(e,["ffffff","255, 255, 255","#fff"]),s=e=>n(e,["000000","0, 0, 0","#000"]),[o,i]=[j(e),N(e)],[l,d]=[j(t),N(t)];return o&&l||r(e)&&r(t)?"#000000":i&&d||s(e)&&s(t)?"#ffffff":e},M=(e,t,a)=>e&&e.length>0?e.findIndex((e=>e.id===t)):a,I=()=>{try{const{wall:e}=s.A.getState().appData,{webId:t,wallId:a,ownerId:r}=e.ThemeInfo;i||(window.addEventListener("beforeunload",(()=>{if(0===o.length)return;const e=o.reduce(((e,t)=>e+t),0);e>0?fetch(n.KQ,{method:"POST",headers:l,body:JSON.stringify({playCount:o.length,id:n.HY?t:a,playTime:e,owner:r}),keepalive:!0}).finally((()=>(o=[],i=!1))):(o=[],i=!1)})),i=!0)}catch(e){console.error(e)}},D=e=>new Promise(((t,a)=>Object.assign(new Image,{onload:function(){t({width:this.naturalWidth,height:this.naturalHeight})},onerror:e=>a(new Error(`Image loading error: ${e.message}`)),src:e})))}}]);
//# sourceMappingURL=233.b05862c7.chunk.js.map