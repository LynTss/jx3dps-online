"use strict";(self.webpackChunkjx3dps_online=self.webpackChunkjx3dps_online||[]).push([[1893],{37585:function(t,e,n){function r(t,e,n){var r=t.filter((function(t){return!t.invisible}));r.sort((function(t,e){return t.y-e.y}));var i,o=!0,a=n.minY,s=n.maxY,u=Math.abs(a-s),h=0,l=Number.MIN_VALUE,f=r.map((function(t){return t.y>h&&(h=t.y),t.y<l&&(l=t.y),{content:t.content,size:e,targets:[t.y-a],pos:null}}));for(l-=a,h-a>u&&(u=h-a);o;)for(f.forEach((function(t){var e=(Math.min.apply(l,t.targets)+Math.max.apply(l,t.targets))/2;t.pos=Math.min(Math.max(l,e-t.size/2),u-t.size),t.pos=Math.max(0,t.pos)})),o=!1,i=f.length;i--;)if(i>0){var c=f[i-1],p=f[i];c.pos+c.size>p.pos&&(c.size+=p.size,c.targets=c.targets.concat(p.targets),c.pos+c.size>u&&(c.pos=u-c.size),f.splice(i,1),o=!0)}i=0,f.forEach((function(t){var n=a+e/2;t.targets.forEach((function(){r[i].y=t.pos+n,n+=e,i++}))}))}n.d(e,{J:function(){return r}})},91171:function(t,e,n){n.d(e,{P:function(){return u}});var r=n(29388),i=n(54818),o=n(55118);function a(t,e,n){return t.some((function(t){return n(t,e)}))}function s(t,e){return a(t,e,(function(t,e){var n,r,i,a=(0,o.QD)(t),s=(0,o.QD)(e);return n=a.getCanvasBBox(),r=s.getCanvasBBox(),void 0===(i=2)&&(i=0),Math.max(0,Math.min(n.x+n.width+i,r.x+r.width+i)-Math.max(n.x-i,r.x-i))*Math.max(0,Math.min(n.y+n.height+i,r.y+r.height+i)-Math.max(n.y-i,r.y-i))>0}))}function u(t,e,n,u,h){var l,f;if(0!==n.length){var c=null===(l=n[0])||void 0===l?void 0:l.get("element"),p=null===c||void 0===c?void 0:c.geometry;if(p&&"point"===p.type){var g=(0,r.CR)(p.getXYFields(),2),y=g[0],v=g[1],d=(0,i.vM)(e,(function(t){return t.get("data")[y]})),x=[],m=h&&h.offset||(null===(f=t[0])||void 0===f?void 0:f.offset)||12;(0,i.UI)((0,i.XP)(d).reverse(),(function(t){for(var e=function(t,e){var n=t.getXYFields()[1],i=[],o=e.sort((function(t,e){return t.get("data")[n]-t.get("data")[n]}));return o.length>0&&i.push(o.shift()),o.length>0&&i.push(o.pop()),i.push.apply(i,(0,r.ev)([],(0,r.CR)(o),!1)),i}(p,d[t]);e.length;){var n=e.shift(),i=(0,o.QD)(n);if(a(x,n,(function(t,e){return t.get("data")[y]===e.get("data")[y]&&t.get("data")[v]===e.get("data")[v]})))i.set("visible",!1);else{var u=!1;s(x,n)&&(i.attr("y",i.attr("y")+2*m),u=s(x,n)),u?i.set("visible",!1):x.push(n)}}}))}}}},40491:function(t,e,n){n.d(e,{T:function(){return r}});var r="\n   self.onmessage = ".concat(function(t){var e=function(){function t(t){if(t.length>4)return[];var e=function(t,e){return[e.x-t.x,e.y-t.y]};return[e(t[0],t[1]),e(t[1],t[2])]}function e(t,e,n){void 0===e&&(e=0),void 0===n&&(n={x:0,y:0});var r=t.x,i=t.y;return{x:(r-n.x)*Math.cos(-e)+(i-n.y)*Math.sin(-e)+n.x,y:(n.x-r)*Math.sin(-e)+(i-n.y)*Math.cos(-e)+n.y}}function n(t){var n=[{x:t.x,y:t.y},{x:t.x+t.width,y:t.y},{x:t.x+t.width,y:t.y+t.height},{x:t.x,y:t.y+t.height}],r=t.rotation;return r?[e(n[0],r,n[0]),e(n[1],r,n[0]),e(n[2],r,n[0]),e(n[3],r,n[0])]:n}function r(t,e){if(t.length>4)return{min:0,max:0};var n=[];return t.forEach((function(t){var r,i;n.push((r=[t.x,t.y],i=e,(r[0]||0)*(i[0]||0)+(r[1]||0)*(i[1]||0)+(r[2]||0)*(i[2]||0)))})),{min:Math.min.apply(null,n),max:Math.max.apply(null,n)}}function i(t,e){return t.max>e.min&&t.min<e.max}function o(t){return["x","y","width","height"].every((function(e){return"number"===typeof(n=t[e])&&!Number.isNaN(n)&&n!==1/0&&n!==-1/0;var n}))}return{intersect:function(e,a,s){if(void 0===s&&(s=0),!o(e)||!o(a))return!1;if(!e.rotation&&!a.rotation)return function(t,e,n){return void 0===n&&(n=0),!(e.x>t.x+t.width+n||e.x+e.width<t.x-n||e.y>t.y+t.height+n||e.y+e.height<t.y-n)}(e,a,s);for(var u=n(e),h=n(a),l=t(u).concat(t(h)),f=0;f<l.length;f++){var c=l[f];if(!i(r(u,c),r(h,c)))return!1}return!0}}}().intersect;var n={"hide-overlap":function(t){for(var n=t.slice(),r=0;r<n.length;r++){var i=n[r];if(i.visible)for(var o=r+1;o<n.length;o++){var a=n[o];i!==a&&a.visible&&e(i,a)&&(a.visible=!1)}}return n}};try{var r=JSON.parse(t.data);if(!r||!r.type||!n[r.type])return;var i=r.type,o=r.items,a=n[i](o);self.postMessage(a)}catch(t){throw t}}.toString(),"\n")},73695:function(t,e,n){var r=n(29388),i=n(54818),o=n(34482),a=n(83579),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultLayout="distribute",e}return(0,r.ZT)(e,t),e.prototype.getDefaultLabelCfg=function(e,n){var r=t.prototype.getDefaultLabelCfg.call(this,e,n);return(0,i.b$)({},r,(0,i.U2)(this.geometry.theme,"pieLabels",{}))},e.prototype.getLabelOffset=function(e){return t.prototype.getLabelOffset.call(this,e)||0},e.prototype.getLabelRotate=function(t,e,n){var r;return e<0&&((r=t)>Math.PI/2&&(r-=Math.PI),r<-Math.PI/2&&(r+=Math.PI)),r},e.prototype.getLabelAlign=function(t){var e,n=this.getCoordinate().getCenter();return e=t.angle<=Math.PI/2&&t.x>=n.x?"left":"right",t.offset<=0&&(e="right"===e?"left":"right"),e},e.prototype.getArcPoint=function(t){return t},e.prototype.getPointAngle=function(t){var e,n=this.getCoordinate(),r={x:(0,i.kJ)(t.x)?t.x[0]:t.x,y:t.y[0]},a={x:(0,i.kJ)(t.x)?t.x[1]:t.x,y:t.y[1]},s=(0,o.Oy)(n,r);if(t.points&&t.points[0].y===t.points[1].y)e=s;else{var u=(0,o.Oy)(n,a);s>=u&&(u+=2*Math.PI),e=s+(u-s)/2}return e},e.prototype.getCirclePoint=function(t,e){var n=this.getCoordinate(),i=n.getCenter(),o=n.getRadius()+e;return(0,r.pi)((0,r.pi)({},(0,a.op)(i.x,i.y,o,t)),{angle:t,r:o})},e}(n(35805).Z);e.Z=s},35805:function(t,e,n){var r=n(29388),i=n(54818),o=n(34482),a=n(35760),s=Math.PI/2,u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,r.ZT)(e,t),e.prototype.getLabelOffset=function(t){var e=this.getCoordinate(),n=0;if((0,i.hj)(t))n=t;else if((0,i.HD)(t)&&-1!==t.indexOf("%")){var r=e.getRadius();e.innerRadius>0&&(r*=1-e.innerRadius),n=.01*parseFloat(t)*r}return n},e.prototype.getLabelItems=function(e){var n=t.prototype.getLabelItems.call(this,e),o=this.geometry.getYScale();return(0,i.UI)(n,(function(t){if(t&&o){var e=o.scale((0,i.U2)(t.data,o.field));return(0,r.pi)((0,r.pi)({},t),{percent:e})}return t}))},e.prototype.getLabelAlign=function(t){var e,n=this.getCoordinate();if(t.labelEmit)e=t.angle<=Math.PI/2&&t.angle>=-Math.PI/2?"left":"right";else if(n.isTransposed){var r=n.getCenter(),i=t.offset;e=Math.abs(t.x-r.x)<1?"center":t.angle>Math.PI||t.angle<=0?i>0?"left":"right":i>0?"right":"left"}else e="center";return e},e.prototype.getLabelPoint=function(t,e,n){var r,i=1,o=t.content[n];this.isToMiddle(e)?r=this.getMiddlePoint(e.points):(1===t.content.length&&0===n?n=1:0===n&&(i=-1),r=this.getArcPoint(e,n));var a=t.offset*i,s=this.getPointAngle(r),u=t.labelEmit,h=this.getCirclePoint(s,a,r,u);return 0===h.r?h.content="":(h.content=o,h.angle=s,h.color=e.color),h.rotate=t.autoRotate?this.getLabelRotate(s,a,u):t.rotate,h.start={x:r.x,y:r.y},h},e.prototype.getArcPoint=function(t,e){return void 0===e&&(e=0),(0,i.kJ)(t.x)||(0,i.kJ)(t.y)?{x:(0,i.kJ)(t.x)?t.x[e]:t.x,y:(0,i.kJ)(t.y)?t.y[e]:t.y}:{x:t.x,y:t.y}},e.prototype.getPointAngle=function(t){return(0,o.Oy)(this.getCoordinate(),t)},e.prototype.getCirclePoint=function(t,e,n,i){var a=this.getCoordinate(),s=a.getCenter(),u=(0,o.zY)(a,n);if(0===u)return(0,r.pi)((0,r.pi)({},s),{r:u});var h=t;a.isTransposed&&u>e&&!i?h=t+2*Math.asin(e/(2*u)):u+=e;return{x:s.x+u*Math.cos(h),y:s.y+u*Math.sin(h),r:u}},e.prototype.getLabelRotate=function(t,e,n){var r=t+s;return n&&(r-=s),r&&(r>s?r-=Math.PI:r<-s&&(r+=Math.PI)),r},e.prototype.getMiddlePoint=function(t){var e=this.getCoordinate(),n=t.length,r={x:0,y:0};return(0,i.S6)(t,(function(t){r.x+=t.x,r.y+=t.y})),r.x/=n,r.y/=n,r=e.convert(r)},e.prototype.isToMiddle=function(t){return t.x.length>2},e}(a.Z);e.Z=u},65112:function(t,e,n){n.d(e,{e:function(){return o}});var r=n(54818),i=function(){function t(t){var e=this;this.queue=[],this.worker=new Worker(t),this.worker.onmessage=function(t){var n;null===(n=e.queue.shift())||void 0===n||n.resolve(t)},this.worker.onmessageerror=function(t){var n;console.warn("[AntV G2] Web worker is not available"),null===(n=e.queue.shift())||void 0===n||n.reject(t)}}return t.prototype.post=function(t,e){var n=this;return new Promise((function(i,o){n.queue.push({resolve:i,reject:o});try{n.worker.postMessage(t)}catch(a){console.warn("[AntV G2] Web worker is not available"),(0,r.mf)(e)&&e()}}))},t.prototype.destroy=function(){this.worker.terminate()},t}();function o(t){if("undefined"!==typeof window){var e;try{e=new Blob([t.toString()],{type:"application/javascript"})}catch(n){(e=new window.BlobBuilder).append(t.toString()),e=e.getBlob()}return new i(URL.createObjectURL(e))}}},55118:function(t,e,n){n.d(e,{QD:function(){return o},Yc:function(){return a},v3:function(){return s}});var r=n(54818),i=n(96843);function o(t){return t.find((function(t){return"text"===t.get("type")}))}function a(t,e,n){void 0===n&&(n=[0,0,0,0]);var o=t&&t.getChildren()[0];if(o){var a=o.clone();(null===e||void 0===e?void 0:e.rotate)&&(0,i.U1)(a,-e.rotate);var s=a.getCanvasBBox(),u=s.x,h=s.y,l=s.width,f=s.height;a.destroy();var c=n;return(0,r.UM)(c)?c=[2,2,2,2]:(0,r.hj)(c)&&(c=new Array(4).fill(c)),{x:u-c[3],y:h-c[0],width:l+c[1]+c[3],height:f+c[0]+c[2],rotation:(null===e||void 0===e?void 0:e.rotate)||0}}return{x:0,y:0,width:0,height:0,rotation:0}}function s(t,e){var n=t.getBBox();return(0,r.G)(e,(function(t){var e,r,i,o=t.getBBox();return e=n,r=o,void 0===(i=2)&&(i=0),Math.max(0,Math.min(e.x+e.width+i,r.x+r.width+i)-Math.max(e.x-i,r.x-i))*Math.max(0,Math.min(e.y+e.height+i,r.y+r.height+i)-Math.max(e.y-i,r.y-i))>0}))}},49397:function(t,e,n){var r=n(29388),i=n(84803),o=(n(54966),function(t){function e(e){var n=t.call(this,e)||this;n.type="line";var r=e.sortable,i=void 0!==r&&r;return n.sortable=i,n}return(0,r.ZT)(e,t),e}(i.Z));e.Z=o},84803:function(t,e,n){var r=n(29388),i=n(24625),o=n(46053),a=n(20017),s=(n(54966),n(32274)),u=n(67911),h=function(t){function e(e){var n=t.call(this,e)||this;n.type="path",n.shapeType="line";var r=e.connectNulls,i=void 0!==r&&r,o=e.showSinglePoint,a=void 0===o||o;return n.connectNulls=i,n.showSinglePoint=a,n}return(0,r.ZT)(e,t),e.prototype.updateElements=function(t,e){var n,i,o,h,l,f;void 0===e&&(e=!1);for(var c=new Map,p=new Map,g=[],y=0,v=0;v<t.length;v++){var d=t[v],x=this.getElementId(d);g.push(x),c.set(x,d),p.set(x,y),y++}this.elements=new Array(y);var m=(0,u.H)(this.lastElementsMap,g),M=m.added,w=m.updated,b=m.removed;try{for(var P=(0,r.XA)(M),C=P.next();!C.done;C=P.next()){x=C.value,d=c.get(x);var I=this.getShapeFactory(),k=this.getShapeInfo(d);v=p.get(x);(S=new a.Z({shapeFactory:I,container:this.container,offscreenGroup:this.getOffscreenGroup(),elementIndex:v})).geometry=this,S.animate=this.animateOption,S.draw(k,e),this.elementsMap[x]=S,this.elements[v]=S}}catch(E){n={error:E}}finally{try{C&&!C.done&&(i=P.return)&&i.call(P)}finally{if(n)throw n.error}}try{for(var A=(0,r.XA)(w),L=A.next();!L.done;L=A.next()){x=L.value,d=c.get(x);var S=this.lastElementsMap[x],B=(v=p.get(x),k=this.getShapeInfo(d),S.getModel());(this.isCoordinateChanged||(0,s.z)(B,k))&&(S.animate=this.animateOption,S.update(k)),this.elementsMap[x]=S,this.elements[v]=S}}catch(R){o={error:R}}finally{try{L&&!L.done&&(h=A.return)&&h.call(A)}finally{if(o)throw o.error}}try{for(var O=(0,r.XA)(b),Z=O.next();!Z.done;Z=O.next()){x=Z.value;(S=this.lastElementsMap[x]).animate=this.animateOption,S.destroy()}}catch(D){l={error:D}}finally{try{Z&&!Z.done&&(f=O.return)&&f.call(O)}finally{if(l)throw l.error}}},e.prototype.getPointsAndData=function(t){for(var e=[],n=[],r=0,o=t.length;r<o;r++){var a=t[r];e.push({x:a.x,y:a.y}),n.push(a[i.wv])}return{points:e,data:n}},e.prototype.getShapeInfo=function(t){var e=this.getDrawCfg(t[0]),n=this.getPointsAndData(t),r=n.points,i=n.data;return e.mappingData=t,e.data=i,e.isStack=!!this.getAdjust("stack"),e.points=r,e.connectNulls=this.connectNulls,e.showSinglePoint=this.showSinglePoint,e},e}(o.Z);e.Z=h}}]);
//# sourceMappingURL=1893.191faff4.js.map