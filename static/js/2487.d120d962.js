"use strict";(self.webpackChunkjx3dps_online=self.webpackChunkjx3dps_online||[]).push([[2487],{32487:function(t,e,o){function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){f(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function f(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var a;o.d(e,{E3:function(){return ot},zy:function(){return nt}});var l={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function u(){if(void 0!==a)return a;a="";var t=document.createElement("p").style;for(var e in l)e+"Transform"in t&&(a=e);return a}function c(){return u()?"".concat(u(),"TransitionProperty"):"transitionProperty"}function s(){return u()?"".concat(u(),"Transform"):"transform"}function p(t,e){var o=c();o&&(t.style[o]=e,"transitionProperty"!==o&&(t.style.transitionProperty=e))}function d(t,e){var o=s();o&&(t.style[o]=e,"transform"!==o&&(t.style.transform=e))}var h,g=/matrix\((.*)\)/,v=/matrix3d\((.*)\)/;function m(t){var e=t.style.display;t.style.display="none",t.offsetHeight,t.style.display=e}function y(t,e,o){var n=o;if("object"!==i(e))return"undefined"!==typeof n?("number"===typeof n&&(n="".concat(n,"px")),void(t.style[e]=n)):h(t,e);for(var r in e)e.hasOwnProperty(r)&&y(t,r,e[r])}function w(t,e){var o=t["page".concat(e?"Y":"X","Offset")],n="scroll".concat(e?"Top":"Left");if("number"!==typeof o){var r=t.document;"number"!==typeof(o=r.documentElement[n])&&(o=r.body[n])}return o}function b(t){return w(t)}function x(t){return w(t,!0)}function W(t){var e=function(t){var e,o,n,r=t.ownerDocument,i=r.body,f=r&&r.documentElement;return e=t.getBoundingClientRect(),o=Math.floor(e.left),n=Math.floor(e.top),{left:o-=f.clientLeft||i.clientLeft||0,top:n-=f.clientTop||i.clientTop||0}}(t),o=t.ownerDocument,n=o.defaultView||o.parentWindow;return e.left+=b(n),e.top+=x(n),e}function S(t){return null!==t&&void 0!==t&&t==t.window}function O(t){return S(t)?t.document:9===t.nodeType?t:t.ownerDocument}var j=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),P=/^(top|right|bottom|left)$/;function T(t,e){return"left"===t?e.useCssRight?"right":t:e.useCssBottom?"bottom":t}function C(t){return"left"===t?"right":"right"===t?"left":"top"===t?"bottom":"bottom"===t?"top":void 0}function M(t,e,o){"static"===y(t,"position")&&(t.style.position="relative");var n=-999,r=-999,i=T("left",o),f=T("top",o),a=C(i),l=C(f);"left"!==i&&(n=999),"top"!==f&&(r=999);var u,s="",d=W(t);("left"in e||"top"in e)&&(s=(u=t).style.transitionProperty||u.style[c()]||"",p(t,"none")),"left"in e&&(t.style[a]="",t.style[i]="".concat(n,"px")),"top"in e&&(t.style[l]="",t.style[f]="".concat(r,"px")),m(t);var h=W(t),g={};for(var v in e)if(e.hasOwnProperty(v)){var w=T(v,o),b="left"===v?n:r,x=d[v]-h[v];g[w]=w===v?b+x:b-x}y(t,g),m(t),("left"in e||"top"in e)&&p(t,s);var S={};for(var O in e)if(e.hasOwnProperty(O)){var j=T(O,o),P=e[O]-d[O];S[j]=O===j?g[j]+P:g[j]-P}y(t,S)}function D(t,e){var o=W(t),n=function(t){var e=window.getComputedStyle(t,null),o=e.getPropertyValue("transform")||e.getPropertyValue(s());if(o&&"none"!==o){var n=o.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(n[12]||n[4],0),y:parseFloat(n[13]||n[5],0)}}return{x:0,y:0}}(t),r={x:n.x,y:n.y};"left"in e&&(r.x=n.x+e.left-o.left),"top"in e&&(r.y=n.y+e.top-o.top),function(t,e){var o=window.getComputedStyle(t,null),n=o.getPropertyValue("transform")||o.getPropertyValue(s());if(n&&"none"!==n){var r,i=n.match(g);i?((r=(i=i[1]).split(",").map((function(t){return parseFloat(t,10)})))[4]=e.x,r[5]=e.y,d(t,"matrix(".concat(r.join(","),")"))):((r=n.match(v)[1].split(",").map((function(t){return parseFloat(t,10)})))[12]=e.x,r[13]=e.y,d(t,"matrix3d(".concat(r.join(","),")")))}else d(t,"translateX(".concat(e.x,"px) translateY(").concat(e.y,"px) translateZ(0)"))}(t,r)}function E(t,e){for(var o=0;o<t.length;o++)e(t[o])}function H(t){return"border-box"===h(t,"boxSizing")}"undefined"!==typeof window&&(h=window.getComputedStyle?function(t,e,o){var n=o,r="",i=O(t);return(n=n||i.defaultView.getComputedStyle(t,null))&&(r=n.getPropertyValue(e)||n[e]),r}:function(t,e){var o=t.currentStyle&&t.currentStyle[e];if(j.test(o)&&!P.test(e)){var n=t.style,r=n.left,i=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left,n.left="fontSize"===e?"1em":o||0,o=n.pixelLeft+"px",n.left=r,t.runtimeStyle.left=i}return""===o?"auto":o});var V=["margin","border","padding"];function X(t,e,o){var n,r={},i=t.style;for(n in e)e.hasOwnProperty(n)&&(r[n]=i[n],i[n]=e[n]);for(n in o.call(t),e)e.hasOwnProperty(n)&&(i[n]=r[n])}function Y(t,e,o){var n,r,i,f=0;for(r=0;r<e.length;r++)if(n=e[r])for(i=0;i<o.length;i++){var a=void 0;a="border"===n?"".concat(n).concat(o[i],"Width"):n+o[i],f+=parseFloat(h(t,a))||0}return f}var k={getParent:function(t){var e=t;do{e=11===e.nodeType&&e.host?e.host:e.parentNode}while(e&&1!==e.nodeType&&9!==e.nodeType);return e}};function L(t,e,o){var n=o;if(S(t))return"width"===e?k.viewportWidth(t):k.viewportHeight(t);if(9===t.nodeType)return"width"===e?k.docWidth(t):k.docHeight(t);var r="width"===e?["Left","Right"]:["Top","Bottom"],i="width"===e?Math.floor(t.getBoundingClientRect().width):Math.floor(t.getBoundingClientRect().height),f=H(t),a=0;(null===i||void 0===i||i<=0)&&(i=void 0,(null===(a=h(t,e))||void 0===a||Number(a)<0)&&(a=t.style[e]||0),a=parseFloat(a)||0),void 0===n&&(n=f?1:-1);var l=void 0!==i||f,u=i||a;return-1===n?l?u-Y(t,["border","padding"],r):a:l?1===n?u:u+(2===n?-Y(t,["border"],r):Y(t,["margin"],r)):a+Y(t,V.slice(n),r)}E(["Width","Height"],(function(t){k["doc".concat(t)]=function(e){var o=e.document;return Math.max(o.documentElement["scroll".concat(t)],o.body["scroll".concat(t)],k["viewport".concat(t)](o))},k["viewport".concat(t)]=function(e){var o="client".concat(t),n=e.document,r=n.body,i=n.documentElement[o];return"CSS1Compat"===n.compatMode&&i||r&&r[o]||i}}));var B={position:"absolute",visibility:"hidden",display:"block"};function F(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var n,r=e[0];return 0!==r.offsetWidth?n=L.apply(void 0,e):X(r,B,(function(){n=L.apply(void 0,e)})),n}function R(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t}E(["width","height"],(function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);k["outer".concat(e)]=function(e,o){return e&&F(e,t,o?0:1)};var o="width"===t?["Left","Right"]:["Top","Bottom"];k[t]=function(e,n){var r=n;return void 0!==r?e?(H(e)&&(r+=Y(e,["padding","border"],o)),y(e,t,r)):void 0:e&&F(e,t,-1)}}));var z={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var e=t.ownerDocument||t;return e.defaultView||e.parentWindow},getDocument:O,offset:function(t,e,o){if("undefined"===typeof e)return W(t);!function(t,e,o){if(o.ignoreShake){var n=W(t),r=n.left.toFixed(0),i=n.top.toFixed(0),f=e.left.toFixed(0),a=e.top.toFixed(0);if(r===f&&i===a)return}o.useCssRight||o.useCssBottom?M(t,e,o):o.useCssTransform&&s()in document.body.style?D(t,e):M(t,e,o)}(t,e,o||{})},isWindow:S,each:E,css:y,clone:function(t){var e,o={};for(e in t)t.hasOwnProperty(e)&&(o[e]=t[e]);if(t.overflow)for(e in t)t.hasOwnProperty(e)&&(o.overflow[e]=t.overflow[e]);return o},mix:R,getWindowScrollLeft:function(t){return b(t)},getWindowScrollTop:function(t){return x(t)},merge:function(){for(var t={},e=0;e<arguments.length;e++)z.mix(t,e<0||arguments.length<=e?void 0:arguments[e]);return t},viewportWidth:0,viewportHeight:0};R(z,k);var _=z.getParent;function A(t){if(z.isWindow(t)||9===t.nodeType)return null;var e,o=z.getDocument(t).body,n=z.css(t,"position");if(!("fixed"===n||"absolute"===n))return"html"===t.nodeName.toLowerCase()?null:_(t);for(e=_(t);e&&e!==o&&9!==e.nodeType;e=_(e))if("static"!==(n=z.css(e,"position")))return e;return null}var I=z.getParent;function N(t,e){for(var o={left:0,right:1/0,top:0,bottom:1/0},n=A(t),r=z.getDocument(t),i=r.defaultView||r.parentWindow,f=r.body,a=r.documentElement;n;){if(-1!==navigator.userAgent.indexOf("MSIE")&&0===n.clientWidth||n===f||n===a||"visible"===z.css(n,"overflow")){if(n===f||n===a)break}else{var l=z.offset(n);l.left+=n.clientLeft,l.top+=n.clientTop,o.top=Math.max(o.top,l.top),o.right=Math.min(o.right,l.left+n.clientWidth),o.bottom=Math.min(o.bottom,l.top+n.clientHeight),o.left=Math.max(o.left,l.left)}n=A(n)}var u=null;z.isWindow(t)||9===t.nodeType||(u=t.style.position,"absolute"===z.css(t,"position")&&(t.style.position="fixed"));var c=z.getWindowScrollLeft(i),s=z.getWindowScrollTop(i),p=z.viewportWidth(i),d=z.viewportHeight(i),h=a.scrollWidth,g=a.scrollHeight,v=window.getComputedStyle(f);if("hidden"===v.overflowX&&(h=i.innerWidth),"hidden"===v.overflowY&&(g=i.innerHeight),t.style&&(t.style.position=u),e||function(t){if(z.isWindow(t)||9===t.nodeType)return!1;var e=z.getDocument(t),o=e.body,n=null;for(n=I(t);n&&n!==o&&n!==e;n=I(n))if("fixed"===z.css(n,"position"))return!0;return!1}(t))o.left=Math.max(o.left,c),o.top=Math.max(o.top,s),o.right=Math.min(o.right,c+p),o.bottom=Math.min(o.bottom,s+d);else{var m=Math.max(h,c+p);o.right=Math.min(o.right,m);var y=Math.max(g,s+d);o.bottom=Math.min(o.bottom,y)}return o.top>=0&&o.left>=0&&o.bottom>o.top&&o.right>o.left?o:null}function $(t){var e,o,n;if(z.isWindow(t)||9===t.nodeType){var r=z.getWindow(t);e={left:z.getWindowScrollLeft(r),top:z.getWindowScrollTop(r)},o=z.viewportWidth(r),n=z.viewportHeight(r)}else e=z.offset(t),o=z.outerWidth(t),n=z.outerHeight(t);return e.width=o,e.height=n,e}function U(t,e){var o=e.charAt(0),n=e.charAt(1),r=t.width,i=t.height,f=t.left,a=t.top;return"c"===o?a+=i/2:"b"===o&&(a+=i),"c"===n?f+=r/2:"r"===n&&(f+=r),{left:f,top:a}}function Z(t,e,o,n,r){var i=U(e,o[1]),f=U(t,o[0]),a=[f.left-i.left,f.top-i.top];return{left:Math.round(t.left-a[0]+n[0]-r[0]),top:Math.round(t.top-a[1]+n[1]-r[1])}}function q(t,e,o){return t.left<o.left||t.left+e.width>o.right}function G(t,e,o){return t.top<o.top||t.top+e.height>o.bottom}function J(t,e,o){var n=[];return z.each(t,(function(t){n.push(t.replace(e,(function(t){return o[t]})))})),n}function K(t,e){return t[e]=-t[e],t}function Q(t,e){return(/%$/.test(t)?parseInt(t.substring(0,t.length-1),10)/100*e:parseInt(t,10))||0}function tt(t,e){t[0]=Q(t[0],e.width),t[1]=Q(t[1],e.height)}function et(t,e,o,n){var r=o.points,i=o.offset||[0,0],f=o.targetOffset||[0,0],a=o.overflow,l=o.source||t;i=[].concat(i),f=[].concat(f);var u={},c=0,s=N(l,!(!(a=a||{})||!a.alwaysByViewport)),p=$(l);tt(i,p),tt(f,e);var d=Z(p,e,r,i,f),h=z.merge(p,d);if(s&&(a.adjustX||a.adjustY)&&n){if(a.adjustX&&q(d,p,s)){var g=J(r,/[lr]/gi,{l:"r",r:"l"}),v=K(i,0),m=K(f,0);(function(t,e,o){return t.left>o.right||t.left+e.width<o.left})(Z(p,e,g,v,m),p,s)||(c=1,r=g,i=v,f=m)}if(a.adjustY&&G(d,p,s)){var y=J(r,/[tb]/gi,{t:"b",b:"t"}),w=K(i,1),b=K(f,1);(function(t,e,o){return t.top>o.bottom||t.top+e.height<o.top})(Z(p,e,y,w,b),p,s)||(c=1,r=y,i=w,f=b)}c&&(d=Z(p,e,r,i,f),z.mix(h,d));var x=q(d,p,s),W=G(d,p,s);if(x||W){var S=r;x&&(S=J(r,/[lr]/gi,{l:"r",r:"l"})),W&&(S=J(r,/[tb]/gi,{t:"b",b:"t"})),r=S,i=o.offset||[0,0],f=o.targetOffset||[0,0]}u.adjustX=a.adjustX&&x,u.adjustY=a.adjustY&&W,(u.adjustX||u.adjustY)&&(h=function(t,e,o,n){var r=z.clone(t),i={width:e.width,height:e.height};return n.adjustX&&r.left<o.left&&(r.left=o.left),n.resizeWidth&&r.left>=o.left&&r.left+i.width>o.right&&(i.width-=r.left+i.width-o.right),n.adjustX&&r.left+i.width>o.right&&(r.left=Math.max(o.right-i.width,o.left)),n.adjustY&&r.top<o.top&&(r.top=o.top),n.resizeHeight&&r.top>=o.top&&r.top+i.height>o.bottom&&(i.height-=r.top+i.height-o.bottom),n.adjustY&&r.top+i.height>o.bottom&&(r.top=Math.max(o.bottom-i.height,o.top)),z.mix(r,i)}(d,p,s,u))}return h.width!==p.width&&z.css(l,"width",z.width(l)+h.width-p.width),h.height!==p.height&&z.css(l,"height",z.height(l)+h.height-p.height),z.offset(l,{left:h.left,top:h.top},{useCssRight:o.useCssRight,useCssBottom:o.useCssBottom,useCssTransform:o.useCssTransform,ignoreShake:o.ignoreShake}),{points:r,offset:i,targetOffset:f,overflow:u}}function ot(t,e,o){var n=o.target||e,r=$(n),i=!function(t,e){var o=N(t,e),n=$(t);return!o||n.left+n.width<=o.left||n.top+n.height<=o.top||n.left>=o.right||n.top>=o.bottom}(n,o.overflow&&o.overflow.alwaysByViewport);return et(t,r,o,i)}function nt(t,e,o){var n,i,f=z.getDocument(t),a=f.defaultView||f.parentWindow,l=z.getWindowScrollLeft(a),u=z.getWindowScrollTop(a),c=z.viewportWidth(a),s=z.viewportHeight(a),p={left:n="pageX"in e?e.pageX:l+e.clientX,top:i="pageY"in e?e.pageY:u+e.clientY,width:0,height:0},d=n>=0&&n<=l+c&&i>=0&&i<=u+s,h=[o.points[0],"cc"];return et(t,p,r(r({},o),{},{points:h}),d)}ot.__getOffsetParent=A,ot.__getVisibleRectForElement=N}}]);
//# sourceMappingURL=2487.d120d962.js.map