"use strict";(self.webpackChunkjx3dps_online=self.webpackChunkjx3dps_online||[]).push([[5545],{42576:function(t,e,r){r.r(e),r.d(e,{Base:function(){return n.Z},Circle:function(){return i.Z},Dom:function(){return o.Z},Ellipse:function(){return a.Z},Image:function(){return f},Line:function(){return g},Marker:function(){return v},Path:function(){return b},Polygon:function(){return w},Polyline:function(){return C},Rect:function(){return k},Text:function(){return N}});var n=r(73584),i=r(56876),o=r(62855),a=r(78774),u=r(29388),s=r(54818),l=r(5084),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="image",e.canFill=!1,e.canStroke=!1,e}return(0,u.ZT)(e,t),e.prototype.getDefaultAttrs=function(){var e=t.prototype.getDefaultAttrs.call(this);return(0,u.pi)((0,u.pi)({},e),{x:0,y:0,width:0,height:0})},e.prototype.createPath=function(t,e){var r=this,n=this.attr(),i=this.get("el");(0,s.S6)(e||n,(function(t,e){"img"===e?r._setImage(n.img):l.A8[e]&&i.setAttribute(l.A8[e],t)}))},e.prototype.setAttr=function(t,e){this.attrs[t]=e,"img"===t&&this._setImage(e)},e.prototype._setImage=function(t){var e=this.attr(),r=this.get("el");if((0,s.HD)(t))r.setAttribute("href",t);else if(t instanceof window.Image)e.width||(r.setAttribute("width",t.width),this.attr("width",t.width)),e.height||(r.setAttribute("height",t.height),this.attr("height",t.height)),r.setAttribute("href",t.src);else if(t instanceof HTMLElement&&(0,s.HD)(t.nodeName)&&"CANVAS"===t.nodeName.toUpperCase())r.setAttribute("href",t.toDataURL());else if(t instanceof ImageData){var n=document.createElement("canvas");n.setAttribute("width",""+t.width),n.setAttribute("height",""+t.height),n.getContext("2d").putImageData(t,0,0),e.width||(r.setAttribute("width",""+t.width),this.attr("width",t.width)),e.height||(r.setAttribute("height",""+t.height),this.attr("height",t.height)),r.setAttribute("href",n.toDataURL())}},e}(n.Z),f=h,c=r(41622),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="line",e.canFill=!1,e.canStroke=!0,e}return(0,u.ZT)(e,t),e.prototype.getDefaultAttrs=function(){var e=t.prototype.getDefaultAttrs.call(this);return(0,u.pi)((0,u.pi)({},e),{x1:0,y1:0,x2:0,y2:0,startArrow:!1,endArrow:!1})},e.prototype.createPath=function(t,e){var r=this.attr(),n=this.get("el");(0,s.S6)(e||r,(function(e,i){if("startArrow"===i||"endArrow"===i)if(e){var o=(0,s.Kn)(e)?t.addArrow(r,l.A8[i]):t.getDefaultArrow(r,l.A8[i]);n.setAttribute(l.A8[i],"url(#"+o+")")}else n.removeAttribute(l.A8[i]);else l.A8[i]&&n.setAttribute(l.A8[i],e)}))},e.prototype.getTotalLength=function(){var t=this.attr(),e=t.x1,r=t.y1,n=t.x2,i=t.y2;return c.x1.length(e,r,n,i)},e.prototype.getPoint=function(t){var e=this.attr(),r=e.x1,n=e.y1,i=e.x2,o=e.y2;return c.x1.pointAt(r,n,i,o,t)},e}(n.Z),g=p,d={circle:function(t,e,r){return[["M",t,e],["m",-r,0],["a",r,r,0,1,0,2*r,0],["a",r,r,0,1,0,2*-r,0]]},square:function(t,e,r){return[["M",t-r,e-r],["L",t+r,e-r],["L",t+r,e+r],["L",t-r,e+r],["Z"]]},diamond:function(t,e,r){return[["M",t-r,e],["L",t,e-r],["L",t+r,e],["L",t,e+r],["Z"]]},triangle:function(t,e,r){var n=r*Math.sin(1/3*Math.PI);return[["M",t-r,e+n],["L",t,e-n],["L",t+r,e+n],["z"]]},triangleDown:function(t,e,r){var n=r*Math.sin(1/3*Math.PI);return[["M",t-r,e-n],["L",t+r,e-n],["L",t,e+n],["Z"]]}},A={get:function(t){return d[t]},register:function(t,e){d[t]=e},remove:function(t){delete d[t]},getAll:function(){return d}},y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="marker",e.canFill=!0,e.canStroke=!0,e}return(0,u.ZT)(e,t),e.prototype.createPath=function(t){this.get("el").setAttribute("d",this._assembleMarker())},e.prototype._assembleMarker=function(){var t=this._getPath();return(0,s.kJ)(t)?t.map((function(t){return t.join(" ")})).join(""):t},e.prototype._getPath=function(){var t,e=this.attr(),r=e.x,n=e.y,i=e.r||e.radius,o=e.symbol||"circle";return(t=(0,s.mf)(o)?o:A.get(o))?t(r,n,i):(console.warn(t+" symbol is not exist."),null)},e.symbolsFactory=A,e}(n.Z),v=y,m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="path",e.canFill=!0,e.canStroke=!0,e}return(0,u.ZT)(e,t),e.prototype.getDefaultAttrs=function(){var e=t.prototype.getDefaultAttrs.call(this);return(0,u.pi)((0,u.pi)({},e),{startArrow:!1,endArrow:!1})},e.prototype.createPath=function(t,e){var r=this,n=this.attr(),i=this.get("el");(0,s.S6)(e||n,(function(e,o){if("path"===o&&(0,s.kJ)(e))i.setAttribute("d",r._formatPath(e));else if("startArrow"===o||"endArrow"===o)if(e){var a=(0,s.Kn)(e)?t.addArrow(n,l.A8[o]):t.getDefaultArrow(n,l.A8[o]);i.setAttribute(l.A8[o],"url(#"+a+")")}else i.removeAttribute(l.A8[o]);else l.A8[o]&&i.setAttribute(l.A8[o],e)}))},e.prototype._formatPath=function(t){var e=t.map((function(t){return t.join(" ")})).join("");return~e.indexOf("NaN")?"":e},e.prototype.getTotalLength=function(){var t=this.get("el");return t?t.getTotalLength():null},e.prototype.getPoint=function(t){var e=this.get("el"),r=this.getTotalLength();if(0===r)return null;var n=e?e.getPointAtLength(t*r):null;return n?{x:n.x,y:n.y}:null},e}(n.Z),b=m,x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="polygon",e.canFill=!0,e.canStroke=!0,e}return(0,u.ZT)(e,t),e.prototype.createPath=function(t,e){var r=this.attr(),n=this.get("el");(0,s.S6)(e||r,(function(t,e){"points"===e&&(0,s.kJ)(t)&&t.length>=2?n.setAttribute("points",t.map((function(t){return t[0]+","+t[1]})).join(" ")):l.A8[e]&&n.setAttribute(l.A8[e],t)}))},e}(n.Z),w=x,L=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="polyline",e.canFill=!0,e.canStroke=!0,e}return(0,u.ZT)(e,t),e.prototype.getDefaultAttrs=function(){var e=t.prototype.getDefaultAttrs.call(this);return(0,u.pi)((0,u.pi)({},e),{startArrow:!1,endArrow:!1})},e.prototype.onAttrChange=function(e,r,n){t.prototype.onAttrChange.call(this,e,r,n),-1!==["points"].indexOf(e)&&this._resetCache()},e.prototype._resetCache=function(){this.set("totalLength",null),this.set("tCache",null)},e.prototype.createPath=function(t,e){var r=this.attr(),n=this.get("el");(0,s.S6)(e||r,(function(t,e){"points"===e&&(0,s.kJ)(t)&&t.length>=2?n.setAttribute("points",t.map((function(t){return t[0]+","+t[1]})).join(" ")):l.A8[e]&&n.setAttribute(l.A8[e],t)}))},e.prototype.getTotalLength=function(){var t=this.attr().points,e=this.get("totalLength");return(0,s.UM)(e)?(this.set("totalLength",c.aH.length(t)),this.get("totalLength")):e},e.prototype.getPoint=function(t){var e,r,n=this.attr().points,i=this.get("tCache");return i||(this._setTcache(),i=this.get("tCache")),(0,s.S6)(i,(function(n,i){t>=n[0]&&t<=n[1]&&(e=(t-n[0])/(n[1]-n[0]),r=i)})),c.x1.pointAt(n[r][0],n[r][1],n[r+1][0],n[r+1][1],e)},e.prototype._setTcache=function(){var t=this.attr().points;if(t&&0!==t.length){var e=this.getTotalLength();if(!(e<=0)){var r,n,i=0,o=[];(0,s.S6)(t,(function(a,u){t[u+1]&&((r=[])[0]=i/e,n=c.x1.length(a[0],a[1],t[u+1][0],t[u+1][1]),i+=n,r[1]=i/e,o.push(r))})),this.set("tCache",o)}}},e.prototype.getStartTangent=function(){var t=this.attr().points,e=[];return e.push([t[1][0],t[1][1]]),e.push([t[0][0],t[0][1]]),e},e.prototype.getEndTangent=function(){var t=this.attr().points,e=t.length-1,r=[];return r.push([t[e-1][0],t[e-1][1]]),r.push([t[e][0],t[e][1]]),r},e}(n.Z),C=L;var T=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="rect",e.canFill=!0,e.canStroke=!0,e}return(0,u.ZT)(e,t),e.prototype.getDefaultAttrs=function(){var e=t.prototype.getDefaultAttrs.call(this);return(0,u.pi)((0,u.pi)({},e),{x:0,y:0,width:0,height:0,radius:0})},e.prototype.createPath=function(t,e){var r=this,n=this.attr(),i=this.get("el"),o=!1,a=["x","y","width","height","radius"];(0,s.S6)(e||n,(function(t,e){-1===a.indexOf(e)||o?-1===a.indexOf(e)&&l.A8[e]&&i.setAttribute(l.A8[e],t):(i.setAttribute("d",r._assembleRect(n)),o=!0)}))},e.prototype._assembleRect=function(t){var e=t.x,r=t.y,n=t.width,i=t.height,o=t.radius;if(!o)return"M "+e+","+r+" l "+n+",0 l 0,"+i+" l"+-n+" 0 z";var a=function(t){var e=0,r=0,n=0,i=0;return(0,s.kJ)(t)?1===t.length?e=r=n=i=t[0]:2===t.length?(e=n=t[0],r=i=t[1]):3===t.length?(e=t[0],r=i=t[1],n=t[2]):(e=t[0],r=t[1],n=t[2],i=t[3]):e=r=n=i=t,{r1:e,r2:r,r3:n,r4:i}}(o);return(0,s.kJ)(o)?1===o.length?a.r1=a.r2=a.r3=a.r4=o[0]:2===o.length?(a.r1=a.r3=o[0],a.r2=a.r4=o[1]):3===o.length?(a.r1=o[0],a.r2=a.r4=o[1],a.r3=o[2]):(a.r1=o[0],a.r2=o[1],a.r3=o[2],a.r4=o[3]):a.r1=a.r2=a.r3=a.r4=o,[["M "+(e+a.r1)+","+r],["l "+(n-a.r1-a.r2)+",0"],["a "+a.r2+","+a.r2+",0,0,1,"+a.r2+","+a.r2],["l 0,"+(i-a.r2-a.r3)],["a "+a.r3+","+a.r3+",0,0,1,"+-a.r3+","+a.r3],["l "+(a.r3+a.r4-n)+",0"],["a "+a.r4+","+a.r4+",0,0,1,"+-a.r4+","+-a.r4],["l 0,"+(a.r4+a.r1-i)],["a "+a.r1+","+a.r1+",0,0,1,"+a.r1+","+-a.r1],["z"]].join(" ")},e}(n.Z),k=T,S=r(59761),D=r(23653),Z={top:"before-edge",middle:"central",bottom:"after-edge",alphabetic:"baseline",hanging:"hanging"},P={top:"text-before-edge",middle:"central",bottom:"text-after-edge",alphabetic:"alphabetic",hanging:"hanging"},_={left:"left",start:"left",center:"middle",right:"end",end:"end"},M=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="text",e.canFill=!0,e.canStroke=!0,e}return(0,u.ZT)(e,t),e.prototype.getDefaultAttrs=function(){var e=t.prototype.getDefaultAttrs.call(this);return(0,u.pi)((0,u.pi)({},e),{x:0,y:0,text:null,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom"})},e.prototype.createPath=function(t,e){var r=this,n=this.attr(),i=this.get("el");this._setFont(),(0,s.S6)(e||n,(function(t,e){"text"===e?r._setText(""+t):"matrix"===e&&t?(0,D.B2)(r):l.A8[e]&&i.setAttribute(l.A8[e],t)})),i.setAttribute("paint-order","stroke"),i.setAttribute("style","stroke-linecap:butt; stroke-linejoin:miter;")},e.prototype._setFont=function(){var t=this.get("el"),e=this.attr(),r=e.textBaseline,n=e.textAlign,i=(0,S.qY)();i&&"firefox"===i.name?t.setAttribute("dominant-baseline",P[r]||"alphabetic"):t.setAttribute("alignment-baseline",Z[r]||"baseline"),t.setAttribute("text-anchor",_[n]||"left")},e.prototype._setText=function(t){var e=this.get("el"),r=this.attr(),n=r.x,i=r.textBaseline,o=void 0===i?"bottom":i;if(t)if(~t.indexOf("\n")){var a=t.split("\n"),u=a.length-1,l="";(0,s.S6)(a,(function(t,e){0===e?"alphabetic"===o?l+='<tspan x="'+n+'" dy="'+-u+'em">'+t+"</tspan>":"top"===o?l+='<tspan x="'+n+'" dy="0.9em">'+t+"</tspan>":"middle"===o?l+='<tspan x="'+n+'" dy="'+-(u-1)/2+'em">'+t+"</tspan>":"bottom"===o?l+='<tspan x="'+n+'" dy="-'+(u+.3)+'em">'+t+"</tspan>":"hanging"===o&&(l+='<tspan x="'+n+'" dy="'+(-(u-1)-.3)+'em">'+t+"</tspan>"):l+='<tspan x="'+n+'" dy="1em">'+t+"</tspan>"})),e.innerHTML=l}else e.innerHTML=t;else e.innerHTML=""},e}(n.Z),N=M},28272:function(t,e,r){r.d(e,{Ao:function(){return s},WV:function(){return a},ZL:function(){return u},rS:function(){return o}});var n=r(54818),i=r(5084);function o(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function a(t){var e=i.CX[t.type],r=t.getParent();if(!e)throw new Error("the type "+t.type+" is not supported by svg");var n=o(e);if(t.get("id")&&(n.id=t.get("id")),t.set("el",n),t.set("attrs",{}),r){var a=r.get("el");a||(a=r.createDom(),r.set("el",a)),a.appendChild(n)}return n}function u(t,e){var r=t.get("el"),i=(0,n.qo)(r.children).sort(e),o=document.createDocumentFragment();i.forEach((function(t){o.appendChild(t)})),r.appendChild(o)}function s(t,e){var r=t.parentNode,n=Array.from(r.childNodes).filter((function(t){return 1===t.nodeType&&"defs"!==t.nodeName.toLowerCase()})),i=n[e],o=n.indexOf(t);if(i){if(o>e)r.insertBefore(t,i);else if(o<e){var a=n[e+1];a?r.insertBefore(t,a):r.appendChild(t)}}else r.appendChild(t)}},70742:function(t,e,r){r.d(e,{N:function(){return o},m:function(){return a}});var n=r(23653),i=r(28272);function o(t,e){e.forEach((function(e){e.draw(t)}))}function a(t,e){var r=t.get("canvas");if(r&&r.get("autoDraw")){var o=r.get("context"),a=t.getParent(),u=a?a.getChildren():[r],s=t.get("el");if("remove"===e)if(t.get("isClipShape")){var l=s&&s.parentNode,h=l&&l.parentNode;l&&h&&h.removeChild(l)}else s&&s.parentNode&&s.parentNode.removeChild(s);else if("show"===e)s.setAttribute("visibility","visible");else if("hide"===e)s.setAttribute("visibility","hidden");else if("zIndex"===e)(0,i.Ao)(s,u.indexOf(t));else if("sort"===e){var f=t.get("children");f&&f.length&&(0,i.ZL)(t,(function(t,e){return f.indexOf(t)-f.indexOf(e)?1:0}))}else"clear"===e?s&&(s.innerHTML=""):"matrix"===e?(0,n.B2)(t):"clip"===e?(0,n.r7)(t,o):"attr"===e||"add"===e&&t.draw(o)}}},23653:function(t,e,r){r.d(e,{B2:function(){return o},kr:function(){return i},r7:function(){return a}});var n=r(28272);function i(t,e){var r=t.cfg.el,n=t.attr(),i={dx:n.shadowOffsetX,dy:n.shadowOffsetY,blur:n.shadowBlur,color:n.shadowColor};if(i.dx||i.dy||i.blur||i.color){var o=e.find("filter",i);o||(o=e.addShadow(i)),r.setAttribute("filter","url(#"+o+")")}else r.removeAttribute("filter")}function o(t){var e=t.attr().matrix;if(e){for(var r=t.cfg.el,n=[],i=0;i<9;i+=3)n.push(e[i]+","+e[i+1]);-1===(n=n.join(",")).indexOf("NaN")?r.setAttribute("transform","matrix("+n+")"):console.warn("invalid matrix:",e)}}function a(t,e){var r=t.getClip(),i=t.get("el");if(r){if(r&&!i.hasAttribute("clip-path")){(0,n.WV)(r),r.createPath(e);var o=e.addClip(r);i.setAttribute("clip-path","url(#"+o+")")}}else i.removeAttribute("clip-path")}}}]);
//# sourceMappingURL=5545.f9540d56.js.map