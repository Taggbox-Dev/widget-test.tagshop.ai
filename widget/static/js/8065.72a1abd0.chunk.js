"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8065],{78065:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var o=a(65043),n=a(92908),s=a(60303),i=a.n(s),l=a(22030),r=a(70579);const h=o.lazy((()=>Promise.all([a.e(9532),a.e(1043),a.e(229),a.e(2503),a.e(4975),a.e(841),a.e(6221)]).then(a.bind(a,81364))));class c extends o.Component{constructor(){super(...arguments),this.state={activeID:-1,newPostdata:[],postData:[]},this.onLoadData=t=>{const{postData:e,containerSize:a,CardStyle:o,ThemeStyle:n}=t,s=Math.max((a.width/(o.minimumWidth+20)).toFixed(),1),i=(0,l.GH)(a.width,n.column,s),r=Array.from({length:i},(()=>[]));e.forEach(((t,e)=>r[e%i].push(t))),r.forEach((t=>{for(;t.length<3;){const e=r[Math.floor(Math.random()*i)],a=e[Math.floor(Math.random()*e.length)];t.push(a)}})),this.setState({newPostdata:r,postData:e})},this.scrollInterval=null,this.componentDidMount=()=>{this.scrollInterval=setInterval((()=>this.onUpdateTimeInterVal()),3e3)},this.onUpdateTimeInterVal=()=>{const{activeID:t}=this.state,{containerSize:e,CardStyle:a,ThemeStyle:o}=this.props,n=Math.max((e.width/(a.minimumWidth+20)).toFixed(),1),s=(0,l.GH)(e.width,o.column.desktop,n),i=parseInt(t)+1;this.setState({activeID:parseInt(s)>=i?i:0})}}componentWillMount(){this.onLoadData(this.props)}componentWillUnmount(){this.scrollInterval&&clearInterval(this.scrollInterval)}componentWillReceiveProps(t){if(JSON.stringify(t.postData)!==JSON.stringify(this.props.postData))return this.onLoadData(t),!0}render(){const{postData:t,completeDataObject:e,CardStyle:a,ThemeStyle:o,ThemeInfo:s,clickToShowPopUp:l,onClickToCTA:c,postSizeInPx:d}=this.props,{activeID:p,newPostdata:m}=this.state;return(0,r.jsxs)(r.Fragment,{children:[" ",n.Vn?(0,r.jsx)(i(),{id:"pixel",className:"tb_w_e_post_container",tabIndex:"0","aria-label":`There are ${t&&t.length>0?t.length:0} posts in the feed`,elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_e_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0}):(0,r.jsx)("div",{className:"tb_w_e_post_container",children:m.map(((t,n)=>(0,r.jsx)(h,{Post:t,pIndex:n,ThemeStyle:o,ThemeInfo:s,CardStyle:a,activeID:p,completeDataObject:e,onClickToCTA:c,postSizeInPx:d,cardCount:m.length,clickToShowPopUp:l},`exhi_${n}_${null===t||void 0===t?void 0:t.length}`)))})]})}}const d=(0,o.memo)(c)}}]);
//# sourceMappingURL=8065.72a1abd0.chunk.js.map