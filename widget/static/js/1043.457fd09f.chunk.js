(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1043],{67789:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function a(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(r){return!1}}function l(e,t,r){var a={};return r.isMergeableObject(e)&&o(e).forEach((function(t){a[t]=n(e[t],r)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&r.isMergeableObject(t[o])?a[o]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"===typeof r?r:s}(o,r)(e[o],t[o],r):a[o]=n(t[o],r))})),a}function s(e,r,o){(o=o||{}).arrayMerge=o.arrayMerge||a,o.isMergeableObject=o.isMergeableObject||t,o.cloneUnlessOtherwiseSpecified=n;var i=Array.isArray(r);return i===Array.isArray(e)?i?o.arrayMerge(e,r,o):l(e,r,o):n(r,o)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return s(e,r,t)}),{})};var u=s;e.exports=u},63452:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,a){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof n&&(a=n,n={}),n=n||{},a=a||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,a),i.onload||t(i,a),o.appendChild(i)}},92906:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=Number.isNaN||function(e){return"number"===typeof e&&e!==e};function a(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(a=e[r],o=t[r],!(a===o||n(a)&&n(o)))return!1;var a,o;return!0}const o=function(e,t){var r;void 0===t&&(t=a);var n,o=[],i=!1;return function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return i&&r===this&&t(a,o)||(n=e.apply(this,a),i=!0,r=this,o=a),n}}},66366:e=>{var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,a="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,s,u,c;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(s=l;0!==s--;)if(!o(e[s],i[s]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(c=e.entries();!(s=c.next()).done;)if(!i.has(s.value[0]))return!1;for(c=e.entries();!(s=c.next()).done;)if(!o(s.value[1],i.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(c=e.entries();!(s=c.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(s=l;0!==s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof i.toString)return e.toString()===i.toString();if((l=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=l;0!==s--;)if(!Object.prototype.hasOwnProperty.call(i,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=l;0!==s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!o(e[u[s]],i[u[s]]))return!1;return!0}return e!==e&&i!==i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},74902:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let a of l(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},y=(e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>P}),e.exports=(n=d,c(o({},"__esModule",{value:!0}),n));var f=y(r(65043)),h=y(r(66366)),m=r(96081),b=r(32206);class P extends f.Component{constructor(){var e;super(...arguments),e=this,p(this,"mounted",!1),p(this,"isReady",!1),p(this,"isPlaying",!1),p(this,"isLoading",!0),p(this,"loadOnReady",null),p(this,"startOnPlay",!0),p(this,"seekOnPlay",null),p(this,"onDurationCalled",!1),p(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),p(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),p(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),p(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),p(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),p(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),p(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),p(this,"handleError",(function(){e.isLoading=!1,e.props.onError(...arguments)})),p(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),p(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:a,playbackRate:o,pip:i,loop:l,activePlayer:s,disableDeferredLoading:u}=this.props;if(!(0,h.default)(e.url,t)){if(this.isLoading&&!s.forceLoad&&!u&&!(0,b.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==a&&(a?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==l&&this.player.setLoop&&this.player.setLoop(l)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?f.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}p(P,"displayName","Player"),p(P,"propTypes",m.propTypes),p(P,"defaultProps",m.defaultProps)},90961:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let a of l(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},y=(e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{createReactPlayer:()=>T}),e.exports=(n=d,c(o({},"__esModule",{value:!0}),n));var f=y(r(65043)),h=y(r(67789)),m=y(r(92906)),b=y(r(66366)),P=r(96081),g=r(32206),v=y(r(74902));const w=(0,g.lazy)((()=>r.e(6353).then(r.t.bind(r,60371,23)))),O="undefined"!==typeof window&&window.document&&"undefined"!==typeof document,k="undefined"!==typeof r.g&&r.g.window&&r.g.window.document,_=Object.keys(P.propTypes),j=O||k?f.Suspense:()=>null,S=[],T=(e,t)=>{var r;return r=class extends f.Component{constructor(){var r;super(...arguments),r=this,p(this,"state",{showPreview:!!this.props.light}),p(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),p(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),p(this,"showPreview",(()=>{this.setState({showPreview:!0})})),p(this,"getDuration",(()=>this.player?this.player.getDuration():null)),p(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),p(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),p(this,"getInternalPlayer",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return r.player?r.player.getInternalPlayer(e):null})),p(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),p(this,"handleReady",(()=>{this.props.onReady(this)})),p(this,"getActivePlayer",(0,m.default)((r=>{for(const t of[...S,...e])if(t.canPlay(r))return t;return t||null}))),p(this,"getConfig",(0,m.default)(((e,t)=>{const{config:r}=this.props;return h.default.all([P.defaultProps.config,P.defaultProps.config[t]||{},r,r[t]||{}])}))),p(this,"getAttributes",(0,m.default)((e=>(0,g.omit)(this.props,_)))),p(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return f.default.createElement(v.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,b.default)(this.props,e)||!(0,b.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:a,previewAriaLabel:o}=this.props;return f.default.createElement(w,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:o,oEmbedUrl:a,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:a,wrapper:o}=this.props,{showPreview:i}=this.state,l=this.getAttributes(e),s="string"===typeof o?this.references.wrapper:void 0;return f.default.createElement(o,{ref:s,style:{...t,width:r,height:n},...l},f.default.createElement(j,{fallback:a},i?this.renderPreview(e):this.renderActivePlayer(e)))}},p(r,"displayName","ReactPlayer"),p(r,"propTypes",P.propTypes),p(r,"defaultProps",P.defaultProps),p(r,"addCustomPlayer",(e=>{S.push(e)})),p(r,"removeCustomPlayers",(()=>{S.length=0})),p(r,"canPlay",(t=>{for(const r of[...S,...e])if(r.canPlay(t))return!0;return!1})),p(r,"canEnablePIP",(t=>{for(const r of[...S,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r}},1043:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let a of l(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>h}),e.exports=(n=y,c(o({},"__esModule",{value:!0}),n));var p=((e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(68838)),d=r(90961);const f=p.default[p.default.length-1];var h=(0,d.createReactPlayer)(p.default,f)},41520:(e,t,r)=>{var n,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,s={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(s,{AUDIO_EXTENSIONS:()=>_,DASH_EXTENSIONS:()=>T,FLV_EXTENSIONS:()=>A,HLS_EXTENSIONS:()=>S,MATCH_URL_DAILYMOTION:()=>v,MATCH_URL_FACEBOOK:()=>f,MATCH_URL_FACEBOOK_WATCH:()=>h,MATCH_URL_KALTURA:()=>k,MATCH_URL_MIXCLOUD:()=>w,MATCH_URL_MUX:()=>d,MATCH_URL_SOUNDCLOUD:()=>y,MATCH_URL_STREAMABLE:()=>m,MATCH_URL_TWITCH_CHANNEL:()=>g,MATCH_URL_TWITCH_VIDEO:()=>P,MATCH_URL_VIDYARD:()=>O,MATCH_URL_VIMEO:()=>p,MATCH_URL_WISTIA:()=>b,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>j,canPlay:()=>C}),e.exports=(n=s,((e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of i(t))l.call(e,s)||s===r||a(e,s,{get:()=>t[s],enumerable:!(n=o(t,s))||n.enumerable});return e})(a({},"__esModule",{value:!0}),n));var u=r(32206);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,y=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,p=/vimeo\.com\/(?!progressive_redirect).+/,d=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,f=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,h=/^https?:\/\/fb\.watch\/.+$/,m=/streamable\.com\/([a-z0-9]+)$/,b=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,P=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,g=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,v=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,w=/mixcloud\.com\/([^/]+\/[^/]+)/,O=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,k=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,_=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,j=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,S=/\.(m3u8)($|\?)/i,T=/\.(mpd)($|\?)/i,A=/\.(flv)($|\?)/i,E=e=>{if(e instanceof Array){for(const t of e){if("string"===typeof t&&E(t))return!0;if(E(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(_.test(e)||j.test(e)||S.test(e)||T.test(e)||A.test(e))},C={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>y.test(e)&&!_.test(e),vimeo:e=>p.test(e)&&!j.test(e)&&!S.test(e),mux:e=>d.test(e),facebook:e=>f.test(e)||h.test(e),streamable:e=>m.test(e),wistia:e=>b.test(e),twitch:e=>P.test(e)||g.test(e),dailymotion:e=>v.test(e),mixcloud:e=>w.test(e),vidyard:e=>O.test(e),kaltura:e=>k.test(e),file:E}},68838:(e,t,r)=>{Object.create;var n,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),s=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of i(t))l.call(e,s)||s===r||a(e,s,{get:()=>t[s],enumerable:!(n=o(t,s))||n.enumerable});return e},u={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>p}),e.exports=(n=u,s(a({},"__esModule",{value:!0}),n));var c=r(32206),y=r(41520),p=[{key:"youtube",name:"YouTube",canPlay:y.canPlay.youtube,lazyPlayer:(0,c.lazy)((()=>r.e(8446).then(r.t.bind(r,71059,23))))},{key:"soundcloud",name:"SoundCloud",canPlay:y.canPlay.soundcloud,lazyPlayer:(0,c.lazy)((()=>r.e(9979).then(r.t.bind(r,11848,23))))},{key:"vimeo",name:"Vimeo",canPlay:y.canPlay.vimeo,lazyPlayer:(0,c.lazy)((()=>r.e(6173).then(r.t.bind(r,72458,23))))},{key:"mux",name:"Mux",canPlay:y.canPlay.mux,lazyPlayer:(0,c.lazy)((()=>r.e(2723).then(r.t.bind(r,54384,23))))},{key:"facebook",name:"Facebook",canPlay:y.canPlay.facebook,lazyPlayer:(0,c.lazy)((()=>r.e(6887).then(r.t.bind(r,36112,23))))},{key:"streamable",name:"Streamable",canPlay:y.canPlay.streamable,lazyPlayer:(0,c.lazy)((()=>r.e(7627).then(r.t.bind(r,95912,23))))},{key:"wistia",name:"Wistia",canPlay:y.canPlay.wistia,lazyPlayer:(0,c.lazy)((()=>r.e(9340).then(r.t.bind(r,34045,23))))},{key:"twitch",name:"Twitch",canPlay:y.canPlay.twitch,lazyPlayer:(0,c.lazy)((()=>r.e(2042).then(r.t.bind(r,53267,23))))},{key:"dailymotion",name:"DailyMotion",canPlay:y.canPlay.dailymotion,lazyPlayer:(0,c.lazy)((()=>r.e(6328).then(r.t.bind(r,25145,23))))},{key:"mixcloud",name:"Mixcloud",canPlay:y.canPlay.mixcloud,lazyPlayer:(0,c.lazy)((()=>r.e(7570).then(r.t.bind(r,90875,23))))},{key:"vidyard",name:"Vidyard",canPlay:y.canPlay.vidyard,lazyPlayer:(0,c.lazy)((()=>r.e(3392).then(r.t.bind(r,75941,23))))},{key:"kaltura",name:"Kaltura",canPlay:y.canPlay.kaltura,lazyPlayer:(0,c.lazy)((()=>r.e(6463).then(r.t.bind(r,58892,23))))},{key:"file",name:"FilePlayer",canPlay:y.canPlay.file,canEnablePIP:e=>y.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,c.supportsWebKitPresentationMode)())&&!y.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,c.lazy)((()=>r.e(7458).then(r.t.bind(r,97691,23))))}]},96081:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let a of l(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{defaultProps:()=>_,propTypes:()=>O}),e.exports=(n=y,c(o({},"__esModule",{value:!0}),n));var p=((e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(65173));const{string:d,bool:f,number:h,array:m,oneOfType:b,shape:P,object:g,func:v,node:w}=p.default,O={url:b([d,m,g]),playing:f,loop:f,controls:f,volume:h,muted:f,playbackRate:h,width:b([d,h]),height:b([d,h]),style:g,progressInterval:h,playsinline:f,pip:f,stopOnUnmount:f,light:b([f,d,g]),playIcon:w,previewTabIndex:h,previewAriaLabel:d,fallback:w,oEmbedUrl:d,wrapper:b([d,v,P({render:v.isRequired})]),config:P({soundcloud:P({options:g}),youtube:P({playerVars:g,embedOptions:g,onUnstarted:v}),facebook:P({appId:d,version:d,playerId:d,attributes:g}),dailymotion:P({params:g}),vimeo:P({playerOptions:g,title:d}),mux:P({attributes:g,version:d}),file:P({attributes:g,tracks:m,forceVideo:f,forceAudio:f,forceHLS:f,forceSafariHLS:f,forceDisableHls:f,forceDASH:f,forceFLV:f,hlsOptions:g,hlsVersion:d,dashVersion:d,flvVersion:d}),wistia:P({options:g,playerId:d,customControls:m}),mixcloud:P({options:g}),twitch:P({options:g,playerId:d}),vidyard:P({options:g})}),onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onPlaybackQualityChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v},k=()=>{},_={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:k},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:k,onStart:k,onPlay:k,onPause:k,onBuffer:k,onBufferEnd:k,onEnded:k,onError:k,onDuration:k,onSeek:k,onPlaybackRateChange:k,onPlaybackQualityChange:k,onProgress:k,onClickPreview:k,onEnablePIP:k,onDisablePIP:k}},32206:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let a of l(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},y=(e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(p,{callPlayer:()=>I,getConfig:()=>E,getSDK:()=>A,isBlobUrl:()=>R,isMediaStream:()=>M,lazy:()=>m,omit:()=>C,parseEndTime:()=>k,parseStartTime:()=>O,queryString:()=>j,randomString:()=>_,supportsWebKitPresentationMode:()=>L}),e.exports=(n=p,c(o({},"__esModule",{value:!0}),n));var d=y(r(65043)),f=y(r(63452)),h=y(r(67789));const m=e=>d.default.lazy((async()=>{const t=await e();return"function"===typeof t.default?t:t.default})),b=/[?&#](?:start|t)=([0-9hms]+)/,P=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,v=/^\d+$/;function w(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(g))return function(e){let t=0,r=g.exec(e);for(;null!==r;){const[,n,a]=r;"h"===a&&(t+=60*parseInt(n,10)*60),"m"===a&&(t+=60*parseInt(n,10)),"s"===a&&(t+=parseInt(n,10)),r=g.exec(e)}return t}(e);if(v.test(e))return parseInt(e)}}function O(e){return w(e,b)}function k(e){return w(e,P)}function _(){return Math.random().toString(36).substr(2,5)}function j(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function S(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const T={},A=function(e){0;return e}((function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>!0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:f.default;const o=S(t);return o&&n(o)?Promise.resolve(o):new Promise(((n,o)=>{if(T[e])return void T[e].push({resolve:n,reject:o});T[e]=[{resolve:n,reject:o}];const i=t=>{T[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),i(S(t))}}a(e,(n=>{n?(T[e].forEach((e=>e.reject(n))),T[e]=null):r||i(S(t))}))}))}));function E(e,t){return(0,h.default)(t.config,e.config)}function C(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];const a=[].concat(...r),o={},i=Object.keys(e);for(const l of i)-1===a.indexOf(l)&&(o[l]=e[l]);return o}function I(e){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return this.player[e](...r)}function M(e){return"undefined"!==typeof window&&"undefined"!==typeof window.MediaStream&&e instanceof window.MediaStream}function R(e){return/^blob:/.test(e)}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("video");const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"===typeof e.webkitSetPresentationMode&&t}}}]);
//# sourceMappingURL=1043.457fd09f.chunk.js.map