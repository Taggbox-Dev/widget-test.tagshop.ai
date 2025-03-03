/*! For license information please see 7869.8f34edde.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7869],{87869:(n,t,e)=>{e.d(t,{Nn:()=>be,eB:()=>ye,v9:()=>me});var i=e(82483);function o(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var r="(prefers-reduced-motion: reduce)",s={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function u(n){n.length=0}function a(n,t,e){return Array.prototype.slice.call(n,t,e)}function c(n){return n.bind.apply(n,[null].concat(a(arguments,1)))}var l=setTimeout,f=function(){};function d(n){return requestAnimationFrame(n)}function p(n,t){return typeof t===n}function v(n){return!b(n)&&p("object",n)}var h=Array.isArray,g=c(p,"function"),m=c(p,"string"),y=c(p,"undefined");function b(n){return null===n}function w(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function E(n){return h(n)?n:[n]}function S(n,t){E(n).forEach(t)}function x(n,t){return n.indexOf(t)>-1}function k(n,t){return n.push.apply(n,E(t)),n}function P(n,t,e){n&&S(t,(function(t){t&&n.classList[e?"add":"remove"](t)}))}function C(n,t){P(n,m(t)?t.split(" "):t,!0)}function _(n,t){S(t,n.appendChild.bind(n))}function A(n,t){S(n,(function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)}))}function L(n,t){return w(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function M(n,t){var e=n?a(n.children):[];return t?e.filter((function(n){return L(n,t)})):e}function D(n,t){return t?M(n,t)[0]:n.firstElementChild}var N=Object.keys;function O(n,t,e){return n&&(e?N(n).reverse():N(n)).forEach((function(e){"__proto__"!==e&&t(n[e],e)})),n}function z(n){return a(arguments,1).forEach((function(t){O(t,(function(e,i){n[i]=t[i]}))})),n}function R(n){return a(arguments,1).forEach((function(t){O(t,(function(t,e){h(t)?n[e]=t.slice():v(t)?n[e]=R({},v(n[e])?n[e]:{},t):n[e]=t}))})),n}function j(n,t){S(t||N(n),(function(t){delete n[t]}))}function I(n,t){S(n,(function(n){S(t,(function(t){n&&n.removeAttribute(t)}))}))}function T(n,t,e){v(t)?O(t,(function(t,e){T(n,e,t)})):S(n,(function(n){b(e)||""===e?I(n,t):n.setAttribute(t,String(e))}))}function F(n,t,e){var i=document.createElement(n);return t&&(m(t)?C(i,t):T(i,t)),e&&_(e,i),i}function W(n,t,e){if(y(e))return getComputedStyle(n)[t];b(e)||(n.style[t]=""+e)}function X(n,t){W(n,"display",t)}function B(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function G(n,t){return n.getAttribute(t)}function U(n,t){return n&&n.classList.contains(t)}function H(n){return n.getBoundingClientRect()}function Y(n){S(n,(function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}))}function q(n){return D((new DOMParser).parseFromString(n,"text/html").body)}function K(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function V(n,t){return n&&n.querySelector(t)}function J(n,t){return t?a(n.querySelectorAll(t)):[]}function Q(n,t){P(n,t,!1)}function Z(n){return n.timeStamp}function $(n){return m(n)?n:n?n+"px":""}var nn="splide",tn="data-"+nn;function en(n,t){if(!n)throw new Error("["+nn+"] "+(t||""))}var on=Math.min,rn=Math.max,sn=Math.floor,un=Math.ceil,an=Math.abs;function cn(n,t,e){return an(n-t)<e}function ln(n,t,e,i){var o=on(t,e),r=rn(t,e);return i?o<n&&n<r:o<=n&&n<=r}function fn(n,t,e){var i=on(t,e),o=rn(t,e);return on(rn(i,n),o)}function dn(n){return+(n>0)-+(n<0)}function pn(n,t){return S(t,(function(t){n=n.replace("%s",""+t)})),n}function vn(n){return n<10?"0"+n:""+n}var hn={};function gn(){var n=[];function t(n,t,e){S(n,(function(n){n&&S(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,o,r){t(e,i,(function(t,e,i){var s="addEventListener"in t,u=s?t.removeEventListener.bind(t,e,o,r):t.removeListener.bind(t,o);s?t.addEventListener(e,o,r):t.addListener(o),n.push([t,e,i,o,u])}))},unbind:function(e,i,o){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||o&&n[3]!==o)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i,o=!0;return"function"===typeof CustomEvent?i=new CustomEvent(t,{bubbles:o,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,o,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),u(n)}}}var mn="mounted",yn="ready",bn="move",wn="moved",En="click",Sn="active",xn="inactive",kn="visible",Pn="hidden",Cn="refresh",_n="updated",An="resize",Ln="resized",Mn="drag",Dn="dragging",Nn="dragged",On="scroll",zn="scrolled",Rn="destroy",jn="arrows:mounted",In="arrows:updated",Tn="pagination:mounted",Fn="pagination:updated",Wn="navigation:mounted",Xn="autoplay:play",Bn="autoplay:playing",Gn="autoplay:pause",Un="lazyload:loaded",Hn="sk",Yn="sh",qn="ei";function Kn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=gn();return n&&n.event.on(Rn,e.destroy),z(e,{bus:t,on:function(n,i){e.bind(t,E(n).join(" "),(function(n){i.apply(i,h(n.detail)?n.detail:[])}))},off:c(e.unbind,t),emit:function(n){e.dispatch(t,n,a(arguments,1))}})}function Vn(n,t,e,i){var o,r,s=Date.now,u=0,a=!0,c=0;function l(){if(!a){if(u=n?on((s()-o)/n,1):1,e&&e(u),u>=1&&(t(),o=s(),i&&++c>=i))return f();r=d(l)}}function f(){a=!0}function p(){r&&cancelAnimationFrame(r),u=0,r=0,a=!0}return{start:function(t){t||p(),o=s()-(t?u*n:0),a=!1,r=d(l)},rewind:function(){o=s(),u=0,e&&e(u)},pause:f,cancel:p,set:function(t){n=t},isPaused:function(){return a}}}var Jn="Arrow",Qn=Jn+"Left",Zn=Jn+"Right",$n=Jn+"Up",nt=Jn+"Down",tt="ttb",et={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[$n,Zn],ArrowRight:[nt,Qn]};var it="role",ot="tabindex",rt="aria-",st=rt+"controls",ut=rt+"current",at=rt+"selected",ct=rt+"label",lt=rt+"labelledby",ft=rt+"hidden",dt=rt+"orientation",pt=rt+"roledescription",vt=rt+"live",ht=rt+"busy",gt=rt+"atomic",mt=[it,ot,"disabled",st,ut,ct,lt,ft,dt,pt],yt=nn+"__",bt="is-",wt=nn,Et=yt+"track",St=yt+"list",xt=yt+"slide",kt=xt+"--clone",Pt=xt+"__container",Ct=yt+"arrows",_t=yt+"arrow",At=_t+"--prev",Lt=_t+"--next",Mt=yt+"pagination",Dt=Mt+"__page",Nt=yt+"progress"+"__bar",Ot=yt+"toggle",zt=yt+"sr",Rt=bt+"initialized",jt=bt+"active",It=bt+"prev",Tt=bt+"next",Ft=bt+"visible",Wt=bt+"loading",Xt=bt+"focus-in",Bt=bt+"overflow",Gt=[jt,Ft,It,Tt,Wt,Xt,Bt],Ut={slide:xt,clone:kt,arrows:Ct,arrow:_t,prev:At,next:Lt,pagination:Mt,page:Dt,spinner:yt+"spinner"};var Ht="touchstart mousedown",Yt="touchmove mousemove",qt="touchend touchcancel mouseup click";var Kt="slide",Vt="loop",Jt="fade";function Qt(n,t,e,i){var o,r=Kn(n),s=r.on,u=r.emit,a=r.bind,l=n.Components,f=n.root,d=n.options,p=d.isNavigation,v=d.updateOnMove,h=d.i18n,g=d.pagination,m=d.slideFocus,y=l.Direction.resolve,b=G(i,"style"),w=G(i,ct),E=e>-1,S=D(i,"."+Pt);function x(){var o=n.splides.map((function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""})).join(" ");T(i,ct,pn(h.slideX,(E?e:t)+1)),T(i,st,o),T(i,it,m?"button":""),m&&I(i,pt)}function k(){o||C()}function C(){if(!o){var e=n.index;!function(){var n=_();n!==U(i,jt)&&(P(i,jt,n),T(i,ut,p&&n||""),u(n?Sn:xn,A))}(),function(){var t=function(){if(n.is(Jt))return _();var t=H(l.Elements.track),e=H(i),o=y("left",!0),r=y("right",!0);return sn(t[o])<=un(e[o])&&sn(e[r])<=un(t[r])}(),e=!t&&(!_()||E);n.state.is([4,5])||T(i,ft,e||"");T(J(i,d.focusableNodes||""),ot,e?-1:""),m&&T(i,ot,e?-1:0);t!==U(i,Ft)&&(P(i,Ft,t),u(t?kn:Pn,A));if(!t&&document.activeElement===i){var o=l.Slides.getAt(n.index);o&&B(o.slide)}}(),P(i,It,t===e-1),P(i,Tt,t===e+1)}}function _(){var i=n.index;return i===t||d.cloneStatus&&i===e}var A={index:t,slideIndex:e,slide:i,container:S,isClone:E,mount:function(){E||(i.id=f.id+"-slide"+vn(t+1),T(i,it,g?"tabpanel":"group"),T(i,pt,h.slide),T(i,ct,w||pn(h.slideLabel,[t+1,n.length]))),a(i,"click",c(u,En,A)),a(i,"keydown",c(u,Hn,A)),s([wn,Yn,zn],C),s(Wn,x),v&&s(bn,k)},destroy:function(){o=!0,r.destroy(),Q(i,Gt),I(i,mt),T(i,"style",b),T(i,ct,w||"")},update:C,style:function(n,t,e){W(e&&S||i,n,t)},isWithin:function(e,i){var o=an(e-t);return E||!d.rewind&&!n.is(Vt)||(o=on(o,n.length-o)),o<=i}};return A}var Zt=tn+"-interval";var $t={passive:!1,capture:!0};var ne={Spacebar:" ",Right:Zn,Left:Qn,Up:$n,Down:nt};function te(n){return n=m(n)?n:n.key,ne[n]||n}var ee="keydown";var ie=tn+"-lazy",oe=ie+"-srcset",re="["+ie+"], ["+oe+"]";var se=[" ","Enter"];var ue=Object.freeze({__proto__:null,Media:function(n,t,e){var i=n.state,o=e.breakpoints||{},s=e.reducedMotion||{},u=gn(),a=[];function c(n){n&&u.destroy()}function l(n,t){var e=matchMedia(t);u.bind(e,"change",f),a.push([n,e])}function f(){var t=i.is(7),o=e.direction,r=a.reduce((function(n,t){return R(n,t[1].matches?t[0]:{})}),{});j(e),d(r),e.destroy?n.destroy("completely"===e.destroy):t?(c(!0),n.mount()):o!==e.direction&&n.refresh()}function d(t,o,r){R(e,t),o&&R(Object.getPrototypeOf(e),t),!r&&i.is(1)||n.emit(_n,e)}return{setup:function(){var n="min"===e.mediaQuery;N(o).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){l(o[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),l(s,r),f()},destroy:c,reduce:function(n){matchMedia(r).matches&&(n?R(e,s):j(e,N(s)))},set:d}},Direction:function(n,t,e){return{resolve:function(n,t,i){var o="rtl"!==(i=i||e.direction)||t?i===tt?0:-1:1;return et[n]&&et[n][o]||n.replace(/width|left|right/i,(function(n,t){var e=et[n.toLowerCase()][o]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(n){return n*("rtl"===e.direction?1:-1)}}},Elements:function(n,t,e){var i,o,r,s=Kn(n),a=s.on,c=s.bind,l=n.root,f=e.i18n,d={},p=[],v=[],h=[];function m(){i=w("."+Et),o=D(i,"."+St),en(i&&o,"A track/list element is missing."),k(p,M(o,"."+xt+":not(."+kt+")")),O({arrows:Ct,pagination:Mt,prev:At,next:Lt,bar:Nt,toggle:Ot},(function(n,t){d[t]=w("."+n)})),z(d,{root:l,track:i,list:o,slides:p}),function(){var n=l.id||(r=nn,""+r+vn(hn[r]=(hn[r]||0)+1)),t=e.role;var r;l.id=n,i.id=i.id||n+"-track",o.id=o.id||n+"-list",!G(l,it)&&"SECTION"!==l.tagName&&t&&T(l,it,t);T(l,pt,f.carousel),T(o,it,"presentation")}(),b()}function y(n){var t=mt.concat("style");u(p),Q(l,v),Q(i,h),I([i,o],t),I(l,n?t:["style",pt])}function b(){Q(l,v),Q(i,h),v=E(wt),h=E(Et),C(l,v),C(i,h),T(l,ct,e.label),T(l,lt,e.labelledby)}function w(n){var t=V(l,n);return t&&function(n,t){if(g(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!L(e,t);)e=e.parentElement;return e}(t,"."+wt)===l?t:void 0}function E(n){return[n+"--"+e.type,n+"--"+e.direction,e.drag&&n+"--draggable",e.isNavigation&&n+"--nav",n===wt&&jt]}return z(d,{setup:m,mount:function(){a(Cn,y),a(Cn,m),a(_n,b),c(document,Ht+" keydown",(function(n){r="keydown"===n.type}),{capture:!0}),c(l,"focusin",(function(){P(l,Xt,!!r)}))},destroy:y})},Slides:function(n,t,e){var i=Kn(n),o=i.on,r=i.emit,s=i.bind,a=t.Elements,l=a.slides,f=a.list,d=[];function p(){l.forEach((function(n,t){h(n,t,-1)}))}function v(){b((function(n){n.destroy()})),u(d)}function h(t,e,i){var o=Qt(n,e,i,t);o.mount(),d.push(o),d.sort((function(n,t){return n.index-t.index}))}function y(n){return n?k((function(n){return!n.isClone})):d}function b(n,t){y(t).forEach(n)}function k(n){return d.filter(g(n)?n:function(t){return m(n)?L(t.slide,n):x(E(n),t.index)})}return{mount:function(){p(),o(Cn,v),o(Cn,p)},destroy:v,update:function(){b((function(n){n.update()}))},register:h,get:y,getIn:function(n){var i=t.Controller,o=i.toIndex(n),r=i.hasFocus()?1:e.perPage;return k((function(n){return ln(n.index,o,o+r-1)}))},getAt:function(n){return k(n)[0]},add:function(n,t){S(n,(function(n){if(m(n)&&(n=q(n)),w(n)){var i=l[t];i?A(n,i):_(f,n),C(n,e.classes.slide),function(n,t){var e=J(n,"img"),i=e.length;i?e.forEach((function(n){s(n,"load error",(function(){--i||t()}))})):t()}(n,c(r,An))}})),r(Cn)},remove:function(n){Y(k(n).map((function(n){return n.slide}))),r(Cn)},forEach:b,filter:k,style:function(n,t,e){b((function(i){i.style(n,t,e)}))},getLength:function(n){return n?l.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(n,t,e){var i,o,r,s=Kn(n),u=s.on,a=s.bind,l=s.emit,f=t.Slides,d=t.Direction.resolve,p=t.Elements,h=p.root,g=p.track,m=p.list,y=f.getAt,b=f.style;function w(){i=e.direction===tt,W(h,"maxWidth",$(e.width)),W(g,d("paddingLeft"),S(!1)),W(g,d("paddingRight"),S(!0)),E(!0)}function E(n){var t=H(h);(n||o.width!==t.width||o.height!==t.height)&&(W(g,"height",function(){var n="";i&&(en(n=x(),"height or heightRatio is missing."),n="calc("+n+" - "+S(!1)+" - "+S(!0)+")");return n}()),b(d("marginRight"),$(e.gap)),b("width",e.autoWidth?null:$(e.fixedWidth)||(i?"":k())),b("height",$(e.fixedHeight)||(i?e.autoHeight?null:k():x()),!0),o=t,l(Ln),r!==(r=D())&&(P(h,Bt,r),l("overflow",r)))}function S(n){var t=e.padding,i=d(n?"right":"left");return t&&$(t[i]||(v(t)?0:t))||"0px"}function x(){return $(e.height||H(m).width*e.heightRatio)}function k(){var n=$(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function C(){return H(m)[d("width")]}function _(n,t){var e=y(n||0);return e?H(e.slide)[d("width")]+(t?0:M()):0}function A(n,t){var e=y(n);if(e){var i=H(e.slide)[d("right")],o=H(m)[d("left")];return an(i-o)+(t?0:M())}return 0}function L(t){return A(n.length-1)-A(0)+_(0,t)}function M(){var n=y(0);return n&&parseFloat(W(n.slide,d("marginRight")))||0}function D(){return n.is(Jt)||L(!0)>C()}return{mount:function(){w(),a(window,"resize load",function(n,t){var e=Vn(t||0,n,null,1);return function(){e.isPaused()&&e.start()}}(c(l,An))),u([_n,Cn],w),u(An,E)},resize:E,listSize:C,slideSize:_,sliderSize:L,totalSize:A,getPadding:function(n){return parseFloat(W(g,d("padding"+(n?"Right":"Left"))))||0},isOverflow:D}},Clones:function(n,t,e){var i,o=Kn(n),r=o.on,s=t.Elements,a=t.Slides,c=t.Direction.resolve,l=[];function f(){r(Cn,d),r([_n,An],v),(i=h())&&(!function(t){var i=a.get().slice(),o=i.length;if(o){for(;i.length<t;)k(i,i);k(i.slice(-t),i.slice(0,t)).forEach((function(r,u){var c=u<t,f=function(t,i){var o=t.cloneNode(!0);return C(o,e.classes.clone),o.id=n.root.id+"-clone"+vn(i+1),o}(r.slide,u);c?A(f,i[0].slide):_(s.list,f),k(l,f),a.register(f,u-t+(c?0:o),r.index)}))}}(i),t.Layout.resize(!0))}function d(){p(),f()}function p(){Y(l),u(l),o.destroy()}function v(){var n=h();i!==n&&(i<n||!n)&&o.emit(Cn)}function h(){var i=e.clones;if(n.is(Vt)){if(y(i)){var o=e[c("fixedWidth")]&&t.Layout.slideSize(0);i=o&&un(H(s.track)[c("width")]/o)||e[c("autoWidth")]&&n.length||2*e.perPage}}else i=0;return i}return{mount:f,destroy:p}},Move:function(n,t,e){var i,o=Kn(n),r=o.on,s=o.emit,u=n.state.set,a=t.Layout,c=a.slideSize,l=a.getPadding,f=a.totalSize,d=a.listSize,p=a.sliderSize,v=t.Direction,h=v.resolve,g=v.orient,m=t.Elements,b=m.list,w=m.track;function E(){t.Controller.isBusy()||(t.Scroll.cancel(),S(n.index),t.Slides.update())}function S(n){x(_(n,!0))}function x(e,i){if(!n.is(Jt)){var o=i?e:function(e){if(n.is(Vt)){var i=C(e),o=i>t.Controller.getEnd();(i<0||o)&&(e=k(e,o))}return e}(e);W(b,"transform","translate"+h("X")+"("+o+"px)"),e!==o&&s(Yn)}}function k(n,t){var e=n-L(t),i=p();return n-=g(i*(un(an(e)/i)||1))*(t?1:-1)}function P(){x(A(),!0),i.cancel()}function C(n){for(var e=t.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var s=e[r].index,u=an(_(s,!0)-n);if(!(u<=o))break;o=u,i=s}return i}function _(t,i){var o=g(f(t-1)-function(n){var t=e.focus;return"center"===t?(d()-c(n,!0))/2:+t*c(n)||0}(t));return i?function(t){e.trimSpace&&n.is(Kt)&&(t=fn(t,0,g(p(!0)-d())));return t}(o):o}function A(){var n=h("left");return H(b)[n]-H(w)[n]+g(l(!1))}function L(n){return _(n?t.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=t.Transition,r([mn,Ln,_n,Cn],E)},move:function(n,t,e,o){n!==t&&function(n){var t=g(k(A(),n));return n?t>=0:t<=b[h("scrollWidth")]-H(w)[h("width")]}(n>e)&&(P(),x(k(A(),n>e),!0)),u(4),s(bn,t,e,n),i.start(t,(function(){u(3),s(wn,t,e,n),o&&o()}))},jump:S,translate:x,shift:k,cancel:P,toIndex:C,toPosition:_,getPosition:A,getLimit:L,exceededLimit:function(n,t){t=y(t)?A():t;var e=!0!==n&&g(t)<g(L(!1)),i=!1!==n&&g(t)>g(L(!0));return e||i},reposition:E}},Controller:function(n,t,e){var i,o,r,s,u=Kn(n),a=u.on,l=u.emit,f=t.Move,d=f.getPosition,p=f.getLimit,v=f.toPosition,h=t.Slides,g=h.isEnough,b=h.getLength,w=e.omitEnd,E=n.is(Vt),S=n.is(Kt),x=c(L,!1),k=c(L,!0),P=e.start||0,C=P;function _(){o=b(!0),r=e.perMove,s=e.perPage,i=N();var n=fn(P,0,w?i:o-1);n!==P&&(P=n,f.reposition())}function A(){i!==N()&&l(qn)}function L(n,t){var e=r||(j()?1:s),o=M(P+e*(n?-1:1),P,!(r||j()));return-1===o&&S&&!cn(d(),p(!n),1)?n?0:i:t?o:D(o)}function M(t,u,a){if(g()||j()){var c=function(t){if(S&&"move"===e.trimSpace&&t!==P)for(var i=d();i===v(t,!0)&&ln(t,0,n.length-1,!e.rewind);)t<P?--t:++t;return t}(t);c!==t&&(u=t,t=c,a=!1),t<0||t>i?t=r||!ln(0,t,u,!0)&&!ln(i,u,t,!0)?E?a?t<0?-(o%s||s):o:t:e.rewind?t<0?i:0:-1:O(z(t)):a&&t!==u&&(t=O(z(u)+(t<u?-1:1)))}else t=-1;return t}function D(n){return E?(n+o)%o||0:n}function N(){for(var n=o-(j()||E&&r?1:s);w&&n-- >0;)if(v(o-1,!0)!==v(n,!0)){n++;break}return fn(n,0,o-1)}function O(n){return fn(j()?n:s*n,0,i)}function z(n){return j()?on(n,i):sn((n>=i?o-1:n)/s)}function R(n){n!==P&&(C=P,P=n)}function j(){return!y(e.focus)||e.isNavigation}function I(){return n.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){_(),a([_n,Cn,qn],_),a(Ln,A)},go:function(n,t,e){if(!I()){var o=function(n){var t=P;if(m(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],o=e[1],r=e[2];"+"===o||"-"===o?t=M(P+ +(""+o+(+r||1)),P):">"===o?t=r?O(+r):x(!0):"<"===o&&(t=k(!0))}else t=E?n:fn(n,0,i);return t}(n),r=D(o);r>-1&&(t||r!==P)&&(R(r),f.move(o,r,C,e))}},scroll:function(n,e,o,r){t.Scroll.scroll(n,e,o,(function(){var n=D(f.toIndex(d()));R(w?on(n,i):n),r&&r()}))},getNext:x,getPrev:k,getAdjacent:L,getEnd:N,setIndex:R,getIndex:function(n){return n?C:P},toIndex:O,toPage:z,toDest:function(n){var t=f.toIndex(n);return S?fn(t,0,i):t},hasFocus:j,isBusy:I}},Arrows:function(n,t,e){var i,o,r=Kn(n),s=r.on,u=r.bind,a=r.emit,l=e.classes,f=e.i18n,d=t.Elements,p=t.Controller,v=d.arrows,h=d.track,g=v,m=d.prev,y=d.next,b={};function w(){!function(){var n=e.arrows;!n||m&&y||(g=v||F("div",l.arrows),m=k(!0),y=k(!1),i=!0,_(g,[m,y]),!v&&A(g,h));m&&y&&(z(b,{prev:m,next:y}),X(g,n?"":"none"),C(g,o=Ct+"--"+e.direction),n&&(s([mn,wn,Cn,zn,qn],P),u(y,"click",c(x,">")),u(m,"click",c(x,"<")),P(),T([m,y],st,h.id),a(jn,m,y)))}(),s(_n,E)}function E(){S(),w()}function S(){r.destroy(),Q(g,o),i?(Y(v?[m,y]:g),m=y=null):I([m,y],mt)}function x(n){p.go(n,!0)}function k(n){return q('<button class="'+l.arrow+" "+(n?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function P(){if(m&&y){var t=n.index,e=p.getPrev(),i=p.getNext(),o=e>-1&&t<e?f.last:f.prev,r=i>-1&&t>i?f.first:f.next;m.disabled=e<0,y.disabled=i<0,T(m,ct,o),T(y,ct,r),a(In,m,y,e,i)}}return{arrows:b,mount:w,destroy:S,update:P}},Autoplay:function(n,t,e){var i,o,r=Kn(n),s=r.on,u=r.bind,a=r.emit,c=Vn(e.interval,n.go.bind(n,">"),(function(n){var t=f.bar;t&&W(t,"width",100*n+"%"),a(Bn,n)})),l=c.isPaused,f=t.Elements,d=t.Elements,p=d.root,v=d.toggle,h=e.autoplay,g="pause"===h;function m(){l()&&t.Slides.isEnough()&&(c.start(!e.resetProgress),o=i=g=!1,w(),a(Xn))}function y(n){void 0===n&&(n=!0),g=!!n,w(),l()||(c.pause(),a(Gn))}function b(){g||(i||o?y(!1):m())}function w(){v&&(P(v,jt,!g),T(v,ct,e.i18n[g?"play":"pause"]))}function E(n){var i=t.Slides.getAt(n);c.set(i&&+G(i.slide,Zt)||e.interval)}return{mount:function(){h&&(!function(){e.pauseOnHover&&u(p,"mouseenter mouseleave",(function(n){i="mouseenter"===n.type,b()}));e.pauseOnFocus&&u(p,"focusin focusout",(function(n){o="focusin"===n.type,b()}));v&&u(v,"click",(function(){g?m():y(!0)}));s([bn,On,Cn],c.rewind),s(bn,E)}(),v&&T(v,st,f.track.id),g||m(),w())},destroy:c.cancel,play:m,pause:y,isPaused:l}},Cover:function(n,t,e){var i=Kn(n).on;function o(n){t.Slides.forEach((function(t){var e=D(t.container||t.slide,"img");e&&e.src&&r(n,e,t)}))}function r(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),X(t,n?"none":"")}return{mount:function(){e.cover&&(i(Un,c(r,!0)),i([mn,_n,Cn],c(o,!0)))},destroy:c(o,!1)}},Scroll:function(n,t,e){var i,o,r=Kn(n),s=r.on,u=r.emit,a=n.state.set,l=t.Move,f=l.getPosition,d=l.getLimit,p=l.exceededLimit,v=l.translate,h=n.is(Kt),g=1;function m(n,e,r,s,d){var v=f();if(w(),r&&(!h||!p())){var m=t.Layout.sliderSize(),E=dn(n)*m*sn(an(n)/m)||0;n=l.toPosition(t.Controller.toDest(n%m))+E}var S=cn(v,n,1);g=1,e=S?0:e||rn(an(n-v)/1.5,800),o=s,i=Vn(e,y,c(b,v,n,d),1),a(5),u(On),i.start()}function y(){a(3),o&&o(),u(zn)}function b(n,t,i,r){var s=f(),u=(n+(t-n)*function(n){var t=e.easingFunc;return t?t(n):1-Math.pow(1-n,4)}(r)-s)*g;v(s+u),h&&!i&&p()&&(g*=.6,an(u)<10&&m(d(p(!0)),600,!1,o,!0))}function w(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){s(bn,w),s([_n,Cn],E)},destroy:w,scroll:m,cancel:E}},Drag:function(n,t,e){var i,o,r,s,u,a,c,l,d=Kn(n),p=d.on,h=d.emit,g=d.bind,m=d.unbind,y=n.state,b=t.Move,w=t.Scroll,E=t.Controller,S=t.Elements.track,x=t.Media.reduce,k=t.Direction,P=k.resolve,C=k.orient,_=b.getPosition,A=b.exceededLimit,M=!1;function D(){var n=e.drag;B(!n),s="free"===n}function N(n){if(a=!1,!c){var t=X(n);!function(n){var t=e.noDrag;return!L(n,"."+Dt+", ."+_t)&&(!t||!L(n,t))}(n.target)||!t&&n.button||(E.isBusy()?K(n,!0):(l=t?S:window,u=y.is([4,5]),r=null,g(l,Yt,O,$t),g(l,qt,z,$t),b.cancel(),w.cancel(),j(n)))}}function O(t){if(y.is(6)||(y.set(6),h(Mn)),t.cancelable)if(u){b.translate(i+I(t)/(M&&n.is(Kt)?5:1));var o=T(t)>200,r=M!==(M=A());(o||r)&&j(t),a=!0,h(Dn),K(t)}else(function(n){return an(I(n))>an(I(n,!0))})(t)&&(u=function(n){var t=e.dragMinThreshold,i=v(t),o=i&&t.mouse||0,r=(i?t.touch:+t)||10;return an(I(n))>(X(n)?r:o)}(t),K(t))}function z(i){y.is(6)&&(y.set(3),h(Nn)),u&&(!function(i){var o=function(t){if(n.is(Vt)||!M){var e=T(t);if(e&&e<200)return I(t)/e}return 0}(i),r=function(n){return _()+dn(n)*on(an(n)*(e.flickPower||600),s?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}(o),u=e.rewind&&e.rewindByDrag;x(!1),s?E.scroll(r,0,e.snap):n.is(Jt)?E.go(C(dn(o))<0?u?"<":"-":u?">":"+"):n.is(Kt)&&M&&u?E.go(A(!0)?">":"<"):E.go(E.toDest(r),!0);x(!0)}(i),K(i)),m(l,Yt,O),m(l,qt,z),u=!1}function R(n){!c&&a&&K(n,!0)}function j(n){r=o,o=n,i=_()}function I(n,t){return W(n,t)-W(F(n),t)}function T(n){return Z(n)-Z(F(n))}function F(n){return o===n&&r||o}function W(n,t){return(X(n)?n.changedTouches[0]:n)["page"+P(t?"Y":"X")]}function X(n){return"undefined"!==typeof TouchEvent&&n instanceof TouchEvent}function B(n){c=n}return{mount:function(){g(S,Yt,f,$t),g(S,qt,f,$t),g(S,Ht,N,$t),g(S,"click",R,{capture:!0}),g(S,"dragstart",K),p([mn,_n],D)},disable:B,isDragging:function(){return u}}},Keyboard:function(n,t,e){var i,o,r=Kn(n),s=r.on,u=r.bind,a=r.unbind,c=n.root,f=t.Direction.resolve;function d(){var n=e.keyboard;n&&(i="global"===n?window:c,u(i,ee,h))}function p(){a(i,ee)}function v(){var n=o;o=!0,l((function(){o=n}))}function h(t){if(!o){var e=te(t);e===f(Qn)?n.go("<"):e===f(Zn)&&n.go(">")}}return{mount:function(){d(),s(_n,p),s(_n,d),s(bn,v)},destroy:p,disable:function(n){o=n}}},LazyLoad:function(n,t,e){var i=Kn(n),o=i.on,r=i.off,s=i.bind,a=i.emit,l="sequential"===e.lazyLoad,f=[wn,zn],d=[];function p(){u(d),t.Slides.forEach((function(n){J(n.slide,re).forEach((function(t){var i=G(t,ie),o=G(t,oe);if(i!==t.src||o!==t.srcset){var r=e.classes.spinner,s=t.parentElement,u=D(s,"."+r)||F("span",r,s);d.push([t,n,u]),t.src||X(t,"none")}}))})),l?m():(r(f),o(f,v),v())}function v(){(d=d.filter((function(t){var i=e.perPage*((e.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,i)||h(t)}))).length||r(f)}function h(n){var t=n[0];C(n[1].slide,Wt),s(t,"load error",c(g,n)),T(t,"src",G(t,ie)),T(t,"srcset",G(t,oe)),I(t,ie),I(t,oe)}function g(n,t){var e=n[0],i=n[1];Q(i.slide,Wt),"error"!==t.type&&(Y(n[2]),X(e,""),a(Un,e,i),a(An)),l&&m()}function m(){d.length&&h(d.shift())}return{mount:function(){e.lazyLoad&&(p(),o(Cn,p))},destroy:c(u,d),check:v}},Pagination:function(n,t,e){var i,o,r=Kn(n),s=r.on,l=r.emit,f=r.bind,d=t.Slides,p=t.Elements,v=t.Controller,h=v.hasFocus,g=v.getIndex,m=v.go,y=t.Direction.resolve,b=p.pagination,w=[];function E(){i&&(Y(b?a(i.children):i),Q(i,o),u(w),i=null),r.destroy()}function S(n){m(">"+n,!0)}function x(n,t){var e=w.length,i=te(t),o=k(),r=-1;i===y(Zn,!1,o)?r=++n%e:i===y(Qn,!1,o)?r=(--n+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1);var s=w[r];s&&(B(s.button),m(">"+r),K(t,!0))}function k(){return e.paginationDirection||e.direction}function P(n){return w[v.toPage(n)]}function _(){var n=P(g(!0)),t=P(g());if(n){var e=n.button;Q(e,jt),I(e,at),T(e,ot,-1)}if(t){var o=t.button;C(o,jt),T(o,at,!0),T(o,ot,"")}l(Fn,{list:i,items:w},n,t)}return{items:w,mount:function t(){E(),s([_n,Cn,qn],t);var r=e.pagination;b&&X(b,r?"":"none"),r&&(s([bn,On,zn],_),function(){var t=n.length,r=e.classes,s=e.i18n,u=e.perPage,a=h()?v.getEnd()+1:un(t/u);C(i=b||F("ul",r.pagination,p.track.parentElement),o=Mt+"--"+k()),T(i,it,"tablist"),T(i,ct,s.select),T(i,dt,k()===tt?"vertical":"");for(var l=0;l<a;l++){var g=F("li",null,i),m=F("button",{class:r.page,type:"button"},g),y=d.getIn(l).map((function(n){return n.slide.id})),E=!h()&&u>1?s.pageX:s.slideX;f(m,"click",c(S,l)),e.paginationKeyboard&&f(m,"keydown",c(x,l)),T(g,it,"presentation"),T(m,it,"tab"),T(m,st,y.join(" ")),T(m,ct,pn(E,l+1)),T(m,ot,-1),w.push({li:g,button:m,page:l})}}(),_(),l(Tn,{list:i,items:w},P(n.index)))},destroy:E,getAt:P,update:_}},Sync:function(n,t,e){var i=e.isNavigation,o=e.slideFocus,r=[];function s(){n.splides.forEach((function(t){t.isParent||(l(n,t.splide),l(t.splide,n))})),i&&function(){var t=Kn(n),e=t.on;e(En,d),e(Hn,p),e([mn,_n],f),r.push(t),t.emit(Wn,n.splides)}()}function a(){r.forEach((function(n){n.destroy()})),u(r)}function l(n,t){var e=Kn(n);e.on(bn,(function(n,e,i){t.go(t.is(Vt)?i:n)})),r.push(e)}function f(){T(t.Elements.list,dt,e.direction===tt?"vertical":"")}function d(t){n.go(t.index)}function p(n,t){x(se,te(t))&&(d(n),K(t))}return{setup:c(t.Media.set,{slideFocus:y(o)?i:o},!0),mount:s,destroy:a,remount:function(){a(),s()}}},Wheel:function(n,t,e){var i=Kn(n).bind,o=0;function r(i){if(i.cancelable){var r=i.deltaY,s=r<0,u=Z(i),a=e.wheelMinThreshold||0,c=e.wheelSleep||0;an(r)>a&&u-o>c&&(n.go(s?"<":">"),o=u),function(i){return!e.releaseWheel||n.state.is(4)||-1!==t.Controller.getAdjacent(i)}(s)&&K(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",r,$t)}}},Live:function(n,t,e){var i=Kn(n).on,o=t.Elements.track,r=e.live&&!e.isNavigation,s=F("span",zt),u=Vn(90,c(a,!1));function a(n){T(o,ht,n),n?(_(o,s),u.start()):(Y(s),u.cancel())}function l(n){r&&T(o,vt,n?"off":"polite")}return{mount:function(){r&&(l(!t.Autoplay.isPaused()),T(o,gt,!0),s.textContent="\u2026",i(Xn,c(l,!0)),i(Gn,c(l,!1)),i([wn,zn],c(a,!0)))},disable:l,destroy:function(){I(o,[vt,gt,ht]),Y(s)}}}}),ae={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Ut,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ce(n,t,e){var i=t.Slides;function o(){i.forEach((function(n){n.style("transform","translateX(-"+100*n.index+"%)")}))}return{mount:function(){Kn(n).on([mn,Cn],o)},start:function(n,t){i.style("transition","opacity "+e.speed+"ms "+e.easing),l(t)},cancel:f}}function le(n,t,e){var i,o=t.Move,r=t.Controller,s=t.Scroll,u=t.Elements.list,a=c(W,u,"transition");function l(){a(""),s.cancel()}return{mount:function(){Kn(n).bind(u,"transitionend",(function(n){n.target===u&&i&&(l(),i())}))},start:function(t,u){var c=o.toPosition(t,!0),l=o.getPosition(),f=function(t){var i=e.rewindSpeed;if(n.is(Kt)&&i){var o=r.getIndex(!0),s=r.getEnd();if(0===o&&t>=s||o>=s&&0===t)return i}return e.speed}(t);an(c-l)>=1&&f>=1?e.useScroll?s.scroll(c,f,!1,u):(a("transform "+f+"ms "+e.easing),o.translate(c,!0),i=u):(o.jump(t),u())},cancel:l}}var fe=function(){function n(t,e){this.event=Kn(),this.Components={},this.state=function(n){var t=n;return{set:function(n){t=n},is:function(n){return x(E(n),t)}}}(1),this.splides=[],this._o={},this._E={};var i=m(t)?V(document,t):t;en(i,i+" is invalid."),this.root=i,e=R({label:G(i,ct)||"",labelledby:G(i,lt)||""},ae,n.defaults,e||{});try{R(e,JSON.parse(G(i,tn)))}catch(o){en(!1,"Invalid JSON")}this._o=Object.create(R({},e))}var t,e,i,r=n.prototype;return r.mount=function(n,t){var e=this,i=this.state,o=this.Components;return en(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=t||this._T||(this.is(Jt)?ce:le),this._E=n||this._E,O(z({},ue,this._E,{Transition:this._T}),(function(n,t){var i=n(e,o,e._o);o[t]=i,i.setup&&i.setup()})),O(o,(function(n){n.mount&&n.mount()})),this.emit(mn),C(this.root,Rt),i.set(3),this.emit(yn),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this._C.Controller.go(n),this},r.on=function(n,t){return this.event.on(n,t),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(a(arguments,1))),this},r.add=function(n,t){return this._C.Slides.add(n,t),this},r.remove=function(n){return this._C.Slides.remove(n),this},r.is=function(n){return this._o.type===n},r.refresh=function(){return this.emit(Cn),this},r.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?Kn(this).on(yn,this.destroy.bind(this,n)):(O(this._C,(function(t){t.destroy&&t.destroy(n)}),!0),t.emit(Rn),t.destroy(),n&&u(this.splides),e.set(7)),this},t=n,(e=[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&o(t.prototype,e),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),n}();fe.defaults={},fe.STATES=s;var de=[[mn,"onMounted"],[yn,"onReady"],[bn,"onMove"],[wn,"onMoved"],[En,"onClick"],[Sn,"onActive"],[xn,"onInactive"],[kn,"onVisible"],[Pn,"onHidden"],[Cn,"onRefresh"],[_n,"onUpdated"],[An,"onResize"],[Ln,"onResized"],[Mn,"onDrag"],[Dn,"onDragging"],[Nn,"onDragged"],[On,"onScroll"],[zn,"onScrolled"],[Rn,"onDestroy"],[jn,"onArrowsMounted"],[In,"onArrowsUpdated"],[Tn,"onPaginationMounted"],[Fn,"onPaginationUpdated"],[Wn,"onNavigationMounted"],[Xn,"onAutoplayPlay"],[Bn,"onAutoplayPlaying"],[Gn,"onAutoplayPause"],[Un,"onLazyLoadLoaded"]];function pe(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter(Boolean).join(" ")}function ve(n){return null!==n&&"object"===typeof n}function he(n,t){if(Array.isArray(n)&&Array.isArray(t))return n.length===t.length&&!n.some(((n,e)=>!he(n,t[e])));if(ve(n)&&ve(t)){const e=Object.keys(n),i=Object.keys(t);return e.length===i.length&&!e.some((e=>!Object.prototype.hasOwnProperty.call(t,e)||!he(n[e],t[e])))}return n===t}function ge(n,t){const e=n;return function(n,t){if(n){const e=Object.keys(n);for(let i=0;i<e.length;i++){const o=e[i];if("__proto__"!==o&&!1===t(n[o],o))break}}}(t,((n,t)=>{Array.isArray(n)?e[t]=n.slice():ve(n)?e[t]=ge(ve(e[t])?e[t]:{},n):e[t]=n})),e}var me=n=>{let{children:t,className:e,...o}=n;return i.createElement("div",{className:pe("splide__track",e),...o},i.createElement("ul",{className:"splide__list"},t))},ye=class extends i.Component{constructor(){super(...arguments),this.splideRef=i.createRef(),this.slides=[]}componentDidMount(){const{options:n,extensions:t,transition:e}=this.props,{current:i}=this.splideRef;i&&(this.splide=new fe(i,n),this.bind(this.splide),this.splide.mount(t,e),this.options=ge({},n||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:n}=this.props;n&&!he(this.options,n)&&(this.splide.options=n,this.options=ge({},n));const t=this.getSlides();var e,i;e=this.slides,i=t,(e.length!==i.length||e.some(((n,t)=>n!==i[t])))&&(this.splide.refresh(),this.slides=t)}sync(n){var t;null==(t=this.splide)||t.sync(n)}go(n){var t;null==(t=this.splide)||t.go(n)}getSlides(){var n;if(this.splide){const t=null==(n=this.splide.Components.Elements)?void 0:n.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(n){de.forEach((t=>{let[e,i]=t;const o=this.props[i];"function"===typeof o&&n.on(e,(function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];o(n,...e)}))}))}omit(n,t){return t.forEach((t=>{Object.prototype.hasOwnProperty.call(n,t)&&delete n[t]})),n}render(){const{className:n,tag:t="div",hasTrack:e=!0,children:o,...r}=this.props;return i.createElement(t,{className:pe("splide",n),ref:this.splideRef,...this.omit(r,["options",...de.map((n=>n[1]))])},e?i.createElement(me,null,o):o)}},be=n=>{let{children:t,className:e,...o}=n;return i.createElement("li",{className:pe("splide__slide",e),...o},t)}}}]);
//# sourceMappingURL=7869.8f34edde.chunk.js.map