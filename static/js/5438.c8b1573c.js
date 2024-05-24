"use strict";(self.webpackChunkjx3dps_online=self.webpackChunkjx3dps_online||[]).push([[5438],{95438:function(t,e,o){o.d(e,{dZ:function(){return P}});var i=o(29388),n=o(54818),r=o(24625),s=o(18347),a=o(97012),h=o(26394),c=o(71730),p=o(41172),l=o(34482),u=o(41648),d=o(92515),g=o(4699),v=o(30090),f=o(13261),y=o(40849),m=o(37526),w=o(15132),E=o(36479),C=o(23135),S=o(85995),B=o(90783),x=o(84384),G=function(t){function e(e){var o=t.call(this,{visible:e.visible})||this;o.views=[],o.geometries=[],o.controllers=[],o.interactions={},o.limitInPlot=!1,o.options={data:[],animate:!0},o.usedControllers=(0,y.nA)(),o.scalePool=new C.t,o.layoutFunc=E.Z,o.isPreMouseInPlot=!1,o.isDataChanged=!1,o.isCoordinateChanged=!1,o.createdScaleKeys=new Map,o.onCanvasEvent=function(t){var e=t.name;if(!e.includes(":")){var i=o.createViewEvent(t);o.doPlotEvent(i),o.emit(e,i)}},o.onDelegateEvents=function(t){var e=t.name;if(e.includes(":")){var i=o.createViewEvent(t);o.emit(e,i)}};var r=e.id,s=void 0===r?(0,n.EL)("view"):r,a=e.parent,h=e.canvas,p=e.backgroundGroup,l=e.middleGroup,u=e.foregroundGroup,d=e.region,g=void 0===d?{start:{x:0,y:0},end:{x:1,y:1}}:d,v=e.padding,m=e.appendPadding,w=e.theme,S=e.options,B=e.limitInPlot,x=e.syncViewPadding;return o.parent=a,o.canvas=h,o.backgroundGroup=p,o.middleGroup=l,o.foregroundGroup=u,o.region=g,o.padding=v,o.appendPadding=m,o.options=(0,i.pi)((0,i.pi)({},o.options),S),o.limitInPlot=B,o.id=s,o.syncViewPadding=x,o.themeObject=(0,n.Kn)(w)?(0,n.b$)({},(0,c.g)("default"),(0,f.j)(w)):(0,c.g)(w),o.init(),o}return(0,i.ZT)(e,t),e.prototype.setLayout=function(t){this.layoutFunc=t},e.prototype.init=function(){this.calculateViewBBox(),this.initEvents(),this.initComponentController(),this.initOptions()},e.prototype.render=function(t,e){void 0===t&&(t=!1),this.emit(r.ld.BEFORE_RENDER,w.Z.fromData(this,r.ld.BEFORE_RENDER,e)),this.paint(t),this.emit(r.ld.AFTER_RENDER,w.Z.fromData(this,r.ld.AFTER_RENDER,e)),!1===this.visible&&this.changeVisible(!1)},e.prototype.clear=function(){var t=this;this.emit(r.ld.BEFORE_CLEAR),this.filteredData=[],this.coordinateInstance=void 0,this.isDataChanged=!1,this.isCoordinateChanged=!1;for(var e=this.geometries,o=0;o<e.length;o++)e[o].clear(),e[o].container.remove(!0),e[o].labelsContainer.remove(!0);this.geometries=[];var i=this.controllers;for(o=0;o<i.length;o++)"annotation"===i[o].name?i[o].clear(!0):i[o].clear();this.createdScaleKeys.forEach((function(e,o){t.getRootView().scalePool.deleteScale(o)})),this.createdScaleKeys.clear();var n=this.views;for(o=0;o<n.length;o++)n[o].clear();this.emit(r.ld.AFTER_CLEAR)},e.prototype.destroy=function(){this.emit(r.ld.BEFORE_DESTROY);var e=this.interactions;(0,n.S6)(e,(function(t){t&&t.destroy()})),this.clear();for(var o=this.controllers,i=0,s=o.length;i<s;i++){o[i].destroy()}this.backgroundGroup.remove(!0),this.middleGroup.remove(!0),this.foregroundGroup.remove(!0),t.prototype.destroy.call(this)},e.prototype.changeVisible=function(e){t.prototype.changeVisible.call(this,e);for(var o=this.geometries,i=0,n=o.length;i<n;i++){o[i].changeVisible(e)}var r=this.controllers;for(i=0,n=r.length;i<n;i++){r[i].changeVisible(e)}return this.foregroundGroup.set("visible",e),this.middleGroup.set("visible",e),this.backgroundGroup.set("visible",e),this.getCanvas().draw(),this},e.prototype.data=function(t){return(0,n.t8)(this.options,"data",t),this.isDataChanged=!0,this},e.prototype.source=function(t){return console.warn("This method will be removed at G2 V4.1. Please use chart.data() instead."),this.data(t)},e.prototype.filter=function(t,e){return(0,n.mf)(e)?((0,n.t8)(this.options,["filters",t],e),this):(!e&&(0,n.U2)(this.options,["filters",t])&&delete this.options.filters[t],this)},e.prototype.axis=function(t,e){return(0,n.jn)(t)?(0,n.t8)(this.options,["axes"],t):(0,n.t8)(this.options,["axes",t],e),this},e.prototype.legend=function(t,e){return(0,n.jn)(t)?(0,n.t8)(this.options,["legends"],t):(0,n.HD)(t)?((0,n.t8)(this.options,["legends",t],e),(0,n.PO)(e)&&(null===e||void 0===e?void 0:e.selected)&&(0,n.t8)(this.options,["filters",t],(function(t){var o;return null===(o=null===e||void 0===e?void 0:e.selected[t])||void 0===o||o}))):(0,n.t8)(this.options,["legends"],t),this},e.prototype.scale=function(t,e){var o=this;return(0,n.HD)(t)?(0,n.t8)(this.options,["scales",t],e):(0,n.Kn)(t)&&(0,n.S6)(t,(function(t,e){(0,n.t8)(o.options,["scales",e],t)})),this},e.prototype.tooltip=function(t){return(0,n.t8)(this.options,"tooltip",t),this},e.prototype.annotation=function(){return this.getController("annotation")},e.prototype.guide=function(){return console.warn("This method will be removed at G2 V4.1. Please use chart.annotation() instead."),this.annotation()},e.prototype.coordinate=function(t,e){return(0,n.HD)(t)?(0,n.t8)(this.options,"coordinate",{type:t,cfg:e}):(0,n.t8)(this.options,"coordinate",t),this.coordinateController.update(this.options.coordinate),this.coordinateController},e.prototype.coord=function(t,e){return console.warn("This method will be removed at G2 V4.1. Please use chart.coordinate() instead."),this.coordinate(t,e)},e.prototype.facet=function(t,e){this.facetInstance&&this.facetInstance.destroy();var o=(0,a.YO)(t);if(!o)throw new Error("facet '".concat(t,"' is not exist!"));return this.facetInstance=new o(this,(0,i.pi)((0,i.pi)({},e),{type:t})),this},e.prototype.animate=function(t){return(0,n.t8)(this.options,"animate",t),this},e.prototype.updateOptions=function(t){return this.clear(),(0,n.CD)(this.options,t),this.views.forEach((function(t){return t.destroy()})),this.views=[],this.initOptions(),this.coordinateBBox=this.viewBBox,this},e.prototype.option=function(t,o){if(e.prototype[t])throw new Error("Can't use built in variable name \"".concat(t,'", please change another one.'));return(0,n.t8)(this.options,t,o),this},e.prototype.theme=function(t){return this.themeObject=(0,n.Kn)(t)?(0,n.b$)({},this.themeObject,(0,f.j)(t)):(0,c.g)(t),this},e.prototype.interaction=function(t,e){var o=this.interactions[t];o&&o.destroy();var i=(0,h.gi)(t,this,e);return i&&(i.init(),this.interactions[t]=i),this},e.prototype.removeInteraction=function(t){var e=this.interactions[t];e&&(e.destroy(),this.interactions[t]=void 0)},e.prototype.changeData=function(t){this.isDataChanged=!0,this.emit(r.ld.BEFORE_CHANGE_DATA,w.Z.fromData(this,r.ld.BEFORE_CHANGE_DATA,null)),this.data(t),this.paint(!0);for(var e=this.views,o=0,i=e.length;o<i;o++){e[o].changeData(t)}this.emit(r.ld.AFTER_CHANGE_DATA,w.Z.fromData(this,r.ld.AFTER_CHANGE_DATA,null))},e.prototype.createView=function(t){this.parent&&this.parent.parent&&console.warn("The view nesting recursive feature will be removed at G2 V4.1. Please avoid to use it.");var o={data:this.options.data,scales:(0,n.d9)(this.options.scales),axes:(0,n.d9)(this.options.axes),coordinate:(0,n.d9)(this.coordinateController.getOption()),tooltip:(0,n.d9)(this.options.tooltip),legends:(0,n.d9)(this.options.legends),animate:this.options.animate,visible:this.visible},s=new e((0,i.pi)((0,i.pi)({parent:this,canvas:this.canvas,backgroundGroup:this.backgroundGroup.addGroup({zIndex:r.mJ.BG}),middleGroup:this.middleGroup.addGroup({zIndex:r.mJ.MID}),foregroundGroup:this.foregroundGroup.addGroup({zIndex:r.mJ.FORE}),theme:this.themeObject,padding:this.padding},t),{options:(0,i.pi)((0,i.pi)({},o),(0,n.U2)(t,"options",{}))}));return this.views.push(s),s},e.prototype.view=function(t){return console.warn("This method will be removed at G2 V4.1. Please use chart.createView() instead."),this.createView(t)},e.prototype.removeView=function(t){var e=(0,n.Od)(this.views,(function(e){return e===t}))[0];return e&&e.destroy(),e},e.prototype.getCoordinate=function(){return this.coordinateInstance},e.prototype.getTheme=function(){return this.themeObject},e.prototype.getXScale=function(){var t=this.geometries[0];return t?t.getXScale():null},e.prototype.getYScales=function(){var t={},e=[];return this.geometries.forEach((function(o){var i=o.getYScale(),n=i.field;t[n]||(t[n]=!0,e.push(i))})),e},e.prototype.getScalesByDim=function(t){for(var e=this.geometries,o={},i=0,n=e.length;i<n;i++){var r=e[i],s="x"===t?r.getXScale():r.getYScale();s&&!o[s.field]&&(o[s.field]=s)}return o},e.prototype.getScale=function(t,e){var o=e||this.getScaleKey(t);return this.getRootView().scalePool.getScale(o)},e.prototype.getScaleByField=function(t,e){return this.getScale(t,e)},e.prototype.getOptions=function(){return this.options},e.prototype.getData=function(){return this.filteredData},e.prototype.getOriginalData=function(){return this.options.data},e.prototype.getPadding=function(){return this.autoPadding.getPadding()},e.prototype.getGeometries=function(){return this.geometries},e.prototype.getElements=function(){return(0,n.u4)(this.geometries,(function(t,e){return t.concat(e.getElements())}),[])},e.prototype.getElementsBy=function(t){return this.getElements().filter((function(e){return t(e)}))},e.prototype.getLayer=function(t){return t===r.JM.BG?this.backgroundGroup:t===r.JM.MID?this.middleGroup:(r.JM.FORE,this.foregroundGroup)},e.prototype.isPointInPlot=function(t){return(0,l.Qt)(this.getCoordinate(),t)},e.prototype.getLegendAttributes=function(){return(0,n.xH)(this.geometries.map((function(t){return t.getGroupAttributes()})))},e.prototype.getGroupScales=function(){var t=this.geometries.map((function(t){return t.getGroupScales()}));return(0,u.jj)((0,n.xH)(t))},e.prototype.getCanvas=function(){return this.getRootView().canvas},e.prototype.getRootView=function(){for(var t=this;t.parent;)t=t.parent;return t},e.prototype.getXY=function(t){var e,o,i=this.getCoordinate(),r=this.getScalesByDim("x"),s=this.getScalesByDim("y");if((0,n.S6)(t,(function(t,i){r[i]&&(e=r[i].scale(t)),s[i]&&(o=s[i].scale(t))})),!(0,n.UM)(e)&&!(0,n.UM)(o))return i.convert({x:e,y:o})},e.prototype.getController=function(t){return(0,n.sE)(this.controllers,(function(e){return e.name===t}))},e.prototype.showTooltip=function(t){var e=this.getController("tooltip");return e&&e.showTooltip(t),this},e.prototype.hideTooltip=function(){var t=this.getController("tooltip");return t&&t.hideTooltip(),this},e.prototype.lockTooltip=function(){var t=this.getController("tooltip");return t&&t.lockTooltip(),this},e.prototype.unlockTooltip=function(){var t=this.getController("tooltip");return t&&t.unlockTooltip(),this},e.prototype.isTooltipLocked=function(){var t=this.getController("tooltip");return t&&t.isTooltipLocked()},e.prototype.getTooltipItems=function(t){var e=this.getController("tooltip");return e?e.getTooltipItems(t):[]},e.prototype.getSnapRecords=function(t){for(var e=this.geometries,o=[],i=0,n=e.length;i<n;i++){var r=e[i],s=r.dataArray;r.sort(s);for(var a=void 0,h=0,c=s.length;h<c;h++){var p=s[h];(a=(0,d.$e)(t,p,r))&&o.push(a)}}var l=this.views;for(i=0,n=l.length;i<n;i++){var u=l[i].getSnapRecords(t);o=o.concat(u)}return o},e.prototype.getComponents=function(){for(var t=[],e=this.controllers,o=0,i=e.length;o<i;o++){var n=e[o];t=t.concat(n.getComponents())}return t},e.prototype.filterData=function(t){var e=this.options.filters;return 0===(0,n.dp)(e)?t:(0,n.hX)(t,(function(t,o){return Object.keys(e).every((function(i){return(0,e[i])(t[i],t,o)}))}))},e.prototype.filterFieldData=function(t,e){var o=this.options.filters,i=(0,n.U2)(o,t);return(0,n.o8)(i)?e:e.filter((function(e,o){return i(e[t],e,o)}))},e.prototype.adjustCoordinate=function(){var t=this.getCoordinate(),e=t.start,o=t.end,i=this.coordinateBBox.bl,r=this.coordinateBBox.tr;(0,n.Xy)(e,i)&&(0,n.Xy)(o,r)?this.isCoordinateChanged=!1:(this.isCoordinateChanged=!0,this.coordinateInstance=this.coordinateController.adjust(i,r))},e.prototype.paint=function(t){this.renderDataRecursive(t),this.syncScale(),this.emit(r.ld.BEFORE_PAINT),this.renderPaddingRecursive(t),this.renderLayoutRecursive(t),this.renderBackgroundStyleShape(),this.renderPaintRecursive(t),this.emit(r.ld.AFTER_PAINT),this.isDataChanged=!1},e.prototype.renderBackgroundStyleShape=function(){if(!this.parent){var t=(0,n.U2)(this.themeObject,"background");if(t){this.backgroundStyleRectShape||(this.backgroundStyleRectShape=this.backgroundGroup.addShape("rect",{attrs:{},zIndex:-1,capture:!1}),this.backgroundStyleRectShape.toBack());var e=this.viewBBox,o=e.x,i=e.y,r=e.width,s=e.height;this.backgroundStyleRectShape.attr({fill:t,x:o,y:i,width:r,height:s})}else this.backgroundStyleRectShape&&(this.backgroundStyleRectShape.remove(!0),this.backgroundStyleRectShape=void 0)}},e.prototype.renderPaddingRecursive=function(t){this.calculateViewBBox(),this.adjustCoordinate(),this.initComponents(t),this.autoPadding=(0,B.t)(this).shrink((0,g.d)(this.appendPadding)),this.coordinateBBox=this.viewBBox.shrink(this.autoPadding.getPadding()),this.adjustCoordinate(),this.controllers.find((function(t){return"tooltip"===t.name})).update();for(var e=this.views,o=0,i=e.length;o<i;o++){e[o].renderPaddingRecursive(t)}},e.prototype.renderLayoutRecursive=function(t){var e=!0===this.syncViewPadding?x.E:(0,n.mf)(this.syncViewPadding)?this.syncViewPadding:void 0;e&&(e(this,this.views,S.q),this.views.forEach((function(t){t.coordinateBBox=t.viewBBox.shrink(t.autoPadding.getPadding()),t.adjustCoordinate()}))),this.doLayout();for(var o=this.views,i=0,r=o.length;i<r;i++){o[i].renderLayoutRecursive(t)}},e.prototype.renderPaintRecursive=function(t){var e=this.middleGroup;if(this.limitInPlot){var o=(0,l.GC)(this.coordinateInstance),i=o.type,n=o.attrs;e.setClip({type:i,attrs:n})}else e.setClip(void 0);this.paintGeometries(t),this.renderComponents(t);for(var r=this.views,s=0,a=r.length;s<a;s++){r[s].renderPaintRecursive(t)}},e.prototype.createScale=function(t,e,o,r){var s=(0,n.U2)(this.options.scales,[t]),a=(0,i.pi)((0,i.pi)({},s),o);return this.parent?this.parent.createScale(t,e,a,r):this.scalePool.createScale(t,e,a,r)},e.prototype.renderDataRecursive=function(t){this.doFilterData(),this.createCoordinate(),this.initGeometries(t),this.renderFacet(t);for(var e=this.views,o=0,i=e.length;o<i;o++){e[o].renderDataRecursive(t)}},e.prototype.calculateViewBBox=function(){var t,e,o,i;if(this.parent){var n=this.parent.coordinateBBox;t=n.x,e=n.y,o=n.width,i=n.height}else t=0,e=0,o=this.canvas.get("width"),i=this.canvas.get("height");var r=this.region,s=r.start,a=r.end,h=new p.bK(t+o*s.x,e+i*s.y,o*(a.x-s.x),i*(a.y-s.y));this.viewBBox&&this.viewBBox.isEqual(h)||(this.viewBBox=new p.bK(t+o*s.x,e+i*s.y,o*(a.x-s.x),i*(a.y-s.y))),this.coordinateBBox=this.viewBBox},e.prototype.initEvents=function(){this.foregroundGroup.on("*",this.onDelegateEvents),this.middleGroup.on("*",this.onDelegateEvents),this.backgroundGroup.on("*",this.onDelegateEvents),this.canvas.on("*",this.onCanvasEvent)},e.prototype.initComponentController=function(){for(var t=this.usedControllers,e=0,o=t.length;e<o;e++){var i=t[e],n=(0,y.AL)(i);n&&this.controllers.push(new n(this))}},e.prototype.createViewEvent=function(t){var e=t.shape,o=t.name,i=e?e.get("origin"):null,n=new w.Z(this,t,i);return n.type=o,n},e.prototype.doPlotEvent=function(t){var e=t.type,o={x:t.x,y:t.y};if(["mousedown","mouseup","mousemove","mouseleave","mousewheel","touchstart","touchmove","touchend","touchcancel","click","dblclick","contextmenu"].includes(e)){var i=this.isPointInPlot(o),n=t.clone();if(i){var s="plot:".concat(e);n.type=s,this.emit(s,n),"mouseleave"!==e&&"touchend"!==e||(this.isPreMouseInPlot=!1)}"mousemove"===e||"touchmove"===e?(this.isPreMouseInPlot&&!i?("mousemove"===e&&(n.type=r.cX.MOUSE_LEAVE,this.emit(r.cX.MOUSE_LEAVE,n)),n.type=r.cX.LEAVE,this.emit(r.cX.LEAVE,n)):!this.isPreMouseInPlot&&i&&("mousemove"===e&&(n.type=r.cX.MOUSE_ENTER,this.emit(r.cX.MOUSE_ENTER,n)),n.type=r.cX.ENTER,this.emit(r.cX.ENTER,n)),this.isPreMouseInPlot=i):"mouseleave"!==e&&"touchend"!==e||this.isPreMouseInPlot&&("mouseleave"===e&&(n.type=r.cX.MOUSE_LEAVE,this.emit(r.cX.MOUSE_LEAVE,n)),n.type=r.cX.LEAVE,this.emit(r.cX.LEAVE,n),this.isPreMouseInPlot=!1)}},e.prototype.doFilterData=function(){var t=this.options.data;this.filteredData=this.filterData(t)},e.prototype.initGeometries=function(t){this.createOrUpdateScales();for(var e=this.getCoordinate(),o=(0,n.U2)(this.options,"scales",{}),i=this.geometries,r=0,s=i.length;r<s;r++){var a=i[r];a.scales=this.getGeometryScales();var h={coordinate:e,scaleDefs:o,data:this.filteredData,theme:this.themeObject,isDataChanged:this.isDataChanged,isCoordinateChanged:this.isCoordinateChanged};t?a.update(h):a.init(h)}this.adjustScales()},e.prototype.createOrUpdateScales=function(){for(var t=this.getScaleFields(),e=this.getGroupedFields(),o=this.getOptions(),i=o.data,n=o.scales,r=void 0===n?{}:n,s=this.filteredData,a=0,h=t.length;a<h;a++){var c=t[a],p=r[c],l=this.getScaleKey(c);this.createScale(c,e.includes(c)?i:s,p,l),this.createdScaleKeys.set(l,!0)}},e.prototype.syncScale=function(){this.getRootView().scalePool.sync(this.getCoordinate(),this.theme)},e.prototype.getGeometryScales=function(){for(var t=this.getScaleFields(),e={},o=0;o<t.length;o++){var i=t[o];e[i]=this.getScaleByField(i)}return e},e.prototype.getScaleFields=function(){for(var t=[],e=new Map,o=this.geometries,i=0;i<o.length;i++){var n=o[i].getScaleFields();(0,u.jj)(n,t,e)}return t},e.prototype.getGroupedFields=function(){for(var t=[],e=new Map,o=this.geometries,i=0;i<o.length;i++){var n=o[i].getGroupFields();(0,u.jj)(n,t,e)}return t},e.prototype.adjustScales=function(){this.adjustCategoryScaleRange()},e.prototype.adjustCategoryScaleRange=function(){var t=this,e=(0,i.ev)([this.getXScale()],(0,i.CR)(this.getYScales()),!1).filter((function(t){return!!t})),o=this.getCoordinate(),r=this.options.scales;(0,n.S6)(e,(function(e){var i=e.field,s=e.values,a=e.isCategory,h=e.isIdentity;(a||h)&&s&&!(0,n.U2)(r,[i,"range"])&&(e.range=(0,v.I6)(e,o,t.theme))}))},e.prototype.initComponents=function(t){for(var e=this.controllers,o=0;o<e.length;o++){var i=e[o];t?i.update():(i.clear(),i.render())}},e.prototype.doLayout=function(){this.layoutFunc(this)},e.prototype.createCoordinate=function(){var t=this.coordinateBBox.bl,e=this.coordinateBBox.tr;this.coordinateInstance=this.coordinateController.create(t,e)},e.prototype.paintGeometries=function(t){for(var e=this.options.animate,o=this.getCoordinate(),i={x:this.viewBBox.x,y:this.viewBBox.y,minX:this.viewBBox.minX,minY:this.viewBBox.minY,maxX:this.viewBBox.maxX,maxY:this.viewBBox.maxY,width:this.viewBBox.width,height:this.viewBBox.height},n=this.geometries,r=0;r<n.length;r++){var s=n[r];s.coordinate=o,s.canvasRegion=i,e||s.animate(!1),s.paint(t)}},e.prototype.renderComponents=function(t){for(var e=this.getComponents(),o=0;o<e.length;o++){e[o].component.render()}},e.prototype.renderFacet=function(t){this.facetInstance&&(t?this.facetInstance.update():(this.facetInstance.clear(),this.facetInstance.init(),this.facetInstance.render()))},e.prototype.initOptions=function(){var t=this,e=this.options,o=e.geometries,r=void 0===o?[]:o,s=e.interactions,a=void 0===s?[]:s,h=e.views,c=void 0===h?[]:h,p=e.annotations,l=void 0===p?[]:p,u=e.coordinate,d=e.events,g=e.facets;this.coordinateController?u&&this.coordinateController.update(u):this.coordinateController=new m.Z(u);for(var v=0;v<r.length;v++){var f=r[v];this.createGeometry(f)}for(var y=0;y<a.length;y++){var w=a[y],E=w.type,C=w.cfg;this.interaction(E,C)}for(var S=0;S<c.length;S++){var B=c[S];this.createView(B)}for(var x=this.getController("annotation"),G=0;G<l.length;G++){var P=l[G];x.annotation(P)}d&&(0,n.S6)(d,(function(e,o){t.on(o,e)})),g&&(0,n.S6)(g,(function(e){var o=e.type,n=(0,i._T)(e,["type"]);t.facet(o,n)}))},e.prototype.createGeometry=function(t){var e=t.type,o=t.cfg,i=void 0===o?{}:o;if(this[e]){var r=this[e](i);(0,n.S6)(t,(function(t,e){(0,n.mf)(r[e])&&r[e](t)}))}},e.prototype.getScaleKey=function(t){return"".concat(this.id,"-").concat(t)},e}(s.Z);function P(t,e){G.prototype[t.toLowerCase()]=function(t){void 0===t&&(t={});var o=(0,i.pi)({container:this.middleGroup.addGroup(),labelsContainer:this.foregroundGroup.addGroup()},t),n=new e(o);return this.geometries.push(n),n}}e.ZP=G}}]);
//# sourceMappingURL=5438.c8b1573c.js.map