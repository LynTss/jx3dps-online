"use strict";(self.webpackChunkjx3dps_online=self.webpackChunkjx3dps_online||[]).push([[7052],{32406:function(l,n,e){e.d(n,{y:function(){return o},z:function(){return s}});var i=["\u957f\u6eaf"],s=function(l,n){for(var e={},s={},o=0;o<l.length;o++){var c,d,u,t,r,v;if(("\u76ee\u6807buff\u53d8\u52a8"===(null===(c=l[o])||void 0===c?void 0:c.\u65e5\u5fd7\u7c7b\u578b)||"\u81ea\u8eabbuff\u53d8\u52a8"===(null===(d=l[o])||void 0===d?void 0:d.\u65e5\u5fd7\u7c7b\u578b))&&(null!==(u=l[o])&&void 0!==u&&null!==(t=u.\u65e5\u5fd7)&&void 0!==t&&t.includes("\u83b7\u5f97")||null!==(r=l[o])&&void 0!==r&&null!==(v=r.\u65e5\u5fd7)&&void 0!==v&&v.includes("\u5931\u53bb"))){var a,f,h,p,x,j=null===(a=l[o])||void 0===a?void 0:a.\u65e5\u5fd7,m=null!==j&&void 0!==j&&j.includes("\u83b7\u5f97")?"get":"lose",y="get"===m?null===j||void 0===j||null===(f=j.split("\u83b7\u5f97"))||void 0===f?void 0:f[1]:null===j||void 0===j||null===(h=j.split("\u5931\u53bb"))||void 0===h?void 0:h[1],g=(null===(p=l[o])||void 0===p?void 0:p.\u65e5\u5fd7\u65f6\u95f4)||0;if(y&&(null===i||void 0===i||!i.includes(y)))if("get"===m)if(null!==e&&void 0!==e&&e[y])(null===(x=e[y][e[y].length-1])||void 0===x?void 0:x.length)>1&&e[y].push([g]);else e[y]=[[g]];else if("lose"===m){var b,N;if(null!==e&&void 0!==e&&e[y])null!==e&&void 0!==e&&null!==(b=e[y])&&void 0!==b&&b[(null===e||void 0===e||null===(N=e[y])||void 0===N?void 0:N.length)-1]&&e[y][e[y].length-1].push(g)}}}return Object.keys(e).forEach((function(l){var i;if(null!==(i=e[l])&&void 0!==i&&i.length){var o,c,d,u,t,r;null!==(o=e[l])&&void 0!==o&&o[(null===(c=e[l])||void 0===c?void 0:c.length)-1]&&(null===(d=e[l])||void 0===d||null===(u=d[(null===(t=e[l])||void 0===t?void 0:t.length)-1])||void 0===u?void 0:u.length)<2&&e[l][e[l].length-1].push(n);for(var v=0,a=0;a<e[l].length;a++)e[l][a]&&2===e[l][a].length&&(v=v+e[l][a][1]-e[l][a][0]);s[l]=null===(r=v/n*100)||void 0===r?void 0:r.toFixed(3)}})),{"Buff\u679a\u4e3e":e,"\u8986\u76d6\u7387":s}},o=function(l){var n=[];return Object.keys(l).forEach((function(e){var i;null!==(i=l[e])&&void 0!==i&&i.length&&l[e].forEach((function(l){n.push({type:e,range:l})}))})),n}},39071:function(l,n,e){e.d(n,{Z:function(){return N}});var i=e(72791),s=e(50233),o=e(71765),c=e(43751),d=e(80184);var u=function(l){var n=l.\u89d2\u8272\u72b6\u6001\u4fe1\u606f;return(0,d.jsxs)("div",{className:"cycle-status-bar-content",children:[(0,d.jsx)("div",{className:"cycle-status-bar-title",children:"\u4f53\u6001"}),(0,d.jsx)(c.Z,{title:null===n||void 0===n?void 0:n.\u4f53\u6001,children:(0,d.jsx)("img",{className:"cycle-status-bar-titai-img",src:"\u5355\u5200"===(null===n||void 0===n?void 0:n.\u4f53\u6001)?s:o,alt:""})})]})},t=e(56075);var r=function(l){var n=l.\u89d2\u8272\u72b6\u6001\u4fe1\u606f;return(0,d.jsxs)("div",{className:"cycle-status-bar-content",children:[(0,d.jsx)("div",{className:"cycle-status-bar-title",children:"\u9510\u610f"}),(0,d.jsx)("div",{className:"cycle-status-bar-body",children:(0,d.jsx)(t.Z,{className:"cycle-status-bar-ruiyi",percent:null===n||void 0===n?void 0:n.\u9510\u610f,format:function(l){return"".concat(l)}})})]})},v=e(45479),a=e(29439),f=e(90785),h=e(68466),p=e(31925),x=e(59971),j=e(46347),m=e(9296),y=(e(35648),function(l){var n=l.open,e=l.onCancel,i=l.total,s=l.dpsList;return(0,d.jsx)(m.Z,{"\u8ba1\u7b97\u7ed3\u679c":{"\u603b\u4f24":i,"\u8ba1\u7b97\u7ed3\u679c\u6280\u80fd\u5217\u8868":s},visible:n,onClose:function(){return e()}})}),g=e(51411);var b=function(l){var n,e,s=l.\u6a21\u62df\u4fe1\u606f,o=l.\u65e5\u5fd7\u4fe1\u606f,u=l.\u6a21\u62dfDPS\u7ed3\u679c,t=(0,i.useState)(!1),r=(0,a.Z)(t,2),v=r[0],m=r[1],b=(0,i.useState)(!1),N=(0,a.Z)(b,2),Z=N[0],C=N[1],k=(0,i.useState)(!1),w=(0,a.Z)(k,2),D=w[0],S=w[1];return(0,d.jsxs)("div",{className:"cycle-bar-dps-res ".concat("\u5f02\u5e38"===(null===s||void 0===s?void 0:s.\u5faa\u73af\u6267\u884c\u7ed3\u679c)?"cycle-bar-dps-res-error":""),children:["\u5f02\u5e38"===(null===s||void 0===s?void 0:s.\u5faa\u73af\u6267\u884c\u7ed3\u679c)?(0,d.jsxs)("div",{className:"cycle-dps-res-error",children:[(0,d.jsx)("h1",{className:"cycle-dps-res-error-title",children:"\u5faa\u73af\u5f02\u5e38"}),(0,d.jsx)(f.Z,{type:"error",showIcon:!0,message:"\u5f02\u5e38\u4fe1\u606f\uff1a".concat(null===s||void 0===s||null===(n=s.\u5faa\u73af\u5f02\u5e38\u4fe1\u606f)||void 0===n||null===(e=n.\u5f02\u5e38\u4fe1\u606f)||void 0===e?void 0:e.\u4fe1\u606f)})]}):null!==u&&void 0!==u&&u.\u79d2\u4f24?(0,d.jsx)("div",{className:"cycle-dps-res-success",children:(0,d.jsxs)("div",{className:"cycle-dps-res-success-content",children:[(0,d.jsx)("h1",{className:"cycle-dps-res-num",children:null===u||void 0===u?void 0:u.\u79d2\u4f24}),(0,d.jsxs)("div",{className:"cycle-dps-res-success-text-content",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{className:"cycle-dps-res-success-text",children:"\u6218\u6597\u7528\u65f6"}),(0,d.jsxs)("span",{className:"cycle-dps-res-success-text cycle-dps-res-success-highlight",children:[null===u||void 0===u?void 0:u.\u79d2\u4f24\u8ba1\u7b97\u65f6\u95f4,"\u79d2"]})]}),(0,d.jsxs)("div",{className:"cycle-dps-res-icons",children:[(0,d.jsx)(c.Z,{title:"Buff\u5206\u6790",placement:"left",children:(0,d.jsx)(h.Z,{className:"cycle-dps-res-icon",onClick:function(){return m(!0)}})}),(0,d.jsx)(c.Z,{title:"\u6218\u6597\u65e5\u5fd7",placement:"left",children:(0,d.jsx)(p.Z,{className:"cycle-dps-res-icon",onClick:function(){return C(!0)}})}),(0,d.jsx)(c.Z,{title:"\u6280\u80fd\u7edf\u8ba1",placement:"left",children:(0,d.jsx)(x.Z,{className:"cycle-dps-res-icon",onClick:function(){return S(!0)}})})]})]})]})}):null,(0,d.jsx)(j.Z,{open:Z,onCancel:function(){return C(!1)},logData:o}),(0,d.jsx)(y,{open:D,onCancel:function(){return S(!1)},dpsList:null===u||void 0===u?void 0:u.\u8ba1\u7b97\u7ed3\u679c\u6280\u80fd\u5217\u8868,total:null===u||void 0===u?void 0:u.\u603b\u4f24}),v&&(0,d.jsx)(g.Z,{open:v,onCancel:function(){return m(!1)},"\u65e5\u5fd7":o,"\u603b\u6218\u6597\u7528\u65f6":null===s||void 0===s?void 0:s.\u5f53\u524d\u65f6\u95f4})]})};var N=function(l){var n=l.\u6a21\u62df\u4fe1\u606f,e=l.\u65e5\u5fd7\u4fe1\u606f,i=l.\u6a21\u62dfDPS\u7ed3\u679c;return(0,d.jsxs)("div",{className:"cycle-status-bar",children:[(0,d.jsx)(u,{"\u89d2\u8272\u72b6\u6001\u4fe1\u606f":null===n||void 0===n?void 0:n.\u89d2\u8272\u72b6\u6001\u4fe1\u606f}),(0,d.jsx)(r,{"\u89d2\u8272\u72b6\u6001\u4fe1\u606f":null===n||void 0===n?void 0:n.\u89d2\u8272\u72b6\u6001\u4fe1\u606f}),(0,d.jsx)(v.Z,{title:"\u81ea\u8eabBuff","buff\u5217\u8868":null===n||void 0===n?void 0:n.\u5f53\u524d\u81ea\u8eabbuff\u5217\u8868,"\u5f53\u524d\u65f6\u95f4\u70b9":null===n||void 0===n?void 0:n.\u5f53\u524d\u65f6\u95f4}),(0,d.jsx)(v.Z,{title:"\u76ee\u6807Buff","buff\u5217\u8868":null===n||void 0===n?void 0:n.\u5f53\u524d\u76ee\u6807buff\u5217\u8868,"\u5f53\u524d\u65f6\u95f4\u70b9":null===n||void 0===n?void 0:n.\u5f53\u524d\u65f6\u95f4}),(0,d.jsx)(b,{"\u6a21\u62df\u4fe1\u606f":n,"\u65e5\u5fd7\u4fe1\u606f":e,"\u6a21\u62dfDPS\u7ed3\u679c":i})]})}},67840:function(l,n,e){e.d(n,{y:function(){return o},z:function(){return s}});var i=["\u52b2\u98ce\u7c07\u8ffd","\u996e\u7fbd\u7c07\u8ffd"],s=function(l,n){for(var e={},s={},o=0;o<l.length;o++){var c,d,u,t,r,v;if(("\u76ee\u6807buff\u53d8\u52a8"===(null===(c=l[o])||void 0===c?void 0:c.\u65e5\u5fd7\u7c7b\u578b)||"\u81ea\u8eabbuff\u53d8\u52a8"===(null===(d=l[o])||void 0===d?void 0:d.\u65e5\u5fd7\u7c7b\u578b))&&(null!==(u=l[o])&&void 0!==u&&null!==(t=u.\u65e5\u5fd7)&&void 0!==t&&t.includes("\u83b7\u5f97")||null!==(r=l[o])&&void 0!==r&&null!==(v=r.\u65e5\u5fd7)&&void 0!==v&&v.includes("\u5931\u53bb"))){var a,f,h,p,x,j=null===(a=l[o])||void 0===a?void 0:a.\u65e5\u5fd7,m=null!==j&&void 0!==j&&j.includes("\u83b7\u5f97")?"get":"lose",y="get"===m?null===j||void 0===j||null===(f=j.split("\u83b7\u5f97"))||void 0===f?void 0:f[1]:null===j||void 0===j||null===(h=j.split("\u5931\u53bb"))||void 0===h?void 0:h[1],g=(null===(p=l[o])||void 0===p?void 0:p.\u65e5\u5fd7\u65f6\u95f4)||0;if(y&&(null===i||void 0===i||!i.includes(y)))if("get"===m)if(null!==e&&void 0!==e&&e[y])(null===(x=e[y][e[y].length-1])||void 0===x?void 0:x.length)>1&&e[y].push([g]);else e[y]=[[g]];else if("lose"===m){var b,N;if(null!==e&&void 0!==e&&e[y])null!==e&&void 0!==e&&null!==(b=e[y])&&void 0!==b&&b[(null===e||void 0===e||null===(N=e[y])||void 0===N?void 0:N.length)-1]&&e[y][e[y].length-1].push(g)}}}return Object.keys(e).forEach((function(l){var i;if(null!==(i=e[l])&&void 0!==i&&i.length){var o,c,d,u,t,r;null!==(o=e[l])&&void 0!==o&&o[(null===(c=e[l])||void 0===c?void 0:c.length)-1]&&(null===(d=e[l])||void 0===d||null===(u=d[(null===(t=e[l])||void 0===t?void 0:t.length)-1])||void 0===u?void 0:u.length)<2&&e[l][e[l].length-1].push(n);for(var v=0,a=0;a<e[l].length;a++)e[l][a]&&2===e[l][a].length&&(v=v+e[l][a][1]-e[l][a][0]);s[l]=null===(r=v/n*100)||void 0===r?void 0:r.toFixed(3)}})),{"Buff\u679a\u4e3e":e,"\u8986\u76d6\u7387":s}},o=function(l){var n=[];return Object.keys(l).forEach((function(e){var i;null!==(i=l[e])&&void 0!==i&&i.length&&l[e].forEach((function(l){n.push({type:e,range:l})}))})),n}},34680:function(l,n,e){e.d(n,{Z:function(){return w}});var i=e(72791),s=e(48039),o=e(81694),c=e.n(o),d=e(37098),u=e(80184);var t=function(l){var n=l.\u89d2\u8272\u72b6\u6001\u4fe1\u606f;return(0,u.jsxs)("div",{className:"cycle-status-bar-content",children:[(0,u.jsx)("div",{className:"cycle-status-bar-title",children:"\u7bad\u888b"}),(0,u.jsx)("div",{className:"cycle-status-bar-arrow-wrap",children:Array.from({length:8},(function(l,e){var i,o,t=null===n||void 0===n||null===(i=n.\u7bad\u888b\u4fe1\u606f)||void 0===i||null===(o=i[e])||void 0===o?void 0:o.\u7bad\u5f62\u6001,r=c()("cycle-status-bar-arrow",t===d.f["\u9ec4\u7bad"]?"cycle-status-bar-arrow-yellow":void 0,t===d.f["\u84dd\u7bad"]?"cycle-status-bar-arrow-blue":void 0,t===d.f["\u7ea2\u7bad"]?"cycle-status-bar-arrow-red":void 0,t===d.f["\u7d2b\u7bad"]?"cycle-status-bar-arrow-purple":void 0);return(0,u.jsx)(s.Z,{className:r},e)}))})]})},r=e(70844),v=e(29439),a=e(90785),f=e(43751),h=e(68466),p=e(31925),x=e(59971),j=e(23363),m=e(9296),y=e(69228),g=e(91333),b=(e(94778),function(l){var n=l.open,e=l.onCancel,s=l.total,o=l.dpsList,c=l.logData,d=(0,i.useMemo)((function(){var l,n,e=null===(l=c||[])||void 0===l?void 0:l.filter((function(l){var n,e;return(null===l||void 0===l||null===(n=l.\u65e5\u5fd7)||void 0===n?void 0:n.includes("- \u5f15\u7206"))&&(null===l||void 0===l||null===(e=l.\u65e5\u5fd7)||void 0===e?void 0:e.includes("\u8d2f\u7a7f"))})),i=null===(n=c||[])||void 0===n?void 0:n.filter((function(l){var n,e,i;return(null===l||void 0===l||null===(n=l.\u65e5\u5fd7)||void 0===n?void 0:n.includes("\u8d2f\u7a7f"))&&((null===l||void 0===l||null===(e=l.\u65e5\u5fd7\u7c7b\u578b)||void 0===e?void 0:e.includes("\u9020\u6210\u4f24\u5bb3"))||(null===l||void 0===l||null===(i=l.\u65e5\u5fd7)||void 0===i?void 0:i.includes("- \u5f15\u7206")))})).map((function(l){return null===l||void 0===l?void 0:l.\u65e5\u5fd7})),s=N(i),o=s.\u5f15\u7206\u500d\u7387,d=s.\u603b\u500d\u7387,u=s.\u8d2f\u7a7f\u7edf\u8ba1\u6570\u7ec4;return{"\u5f15\u7206\u6b21\u6570":null===e||void 0===e?void 0:e.length,"\u5f15\u7206\u500d\u7387":o,"\u603b\u500d\u7387":d,"\u8d2f\u7a7f\u7edf\u8ba1\u6570\u7ec4":u}}),[c]),t=d.\u5f15\u7206\u6b21\u6570,r=d.\u5f15\u7206\u500d\u7387,v=d.\u603b\u500d\u7387,a=d.\u8d2f\u7a7f\u7edf\u8ba1\u6570\u7ec4;return(0,u.jsx)(m.Z,{title:(0,u.jsxs)("div",{className:"cycle-simulator-modal-header space-between",children:[(0,u.jsx)("h1",{className:"cycle-simulator-modal-title",children:"\u6280\u80fd\u7edf\u8ba1"}),(0,u.jsx)(y.Z,{content:(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{children:["\u5f15\u7206\u6b21\u6570\uff1a",t]}),(0,u.jsxs)("p",{children:["\u5f15\u7206\u500d\u7387\uff1a",r]}),(0,u.jsxs)("p",{children:["\u603b\u500d\u7387\uff1a",v]}),(0,u.jsx)(g.Z,{style:{margin:"4px 0"}}),Object.keys(a).map((function(l){return(0,u.jsxs)("p",{children:["\u8d2f\u7a7f\xb7",l,"\uff1a",a[l],"\u6b21"]},"\u8d2f\u7a7f\u7edf\u8ba1".concat(l))}))]}),children:(0,u.jsx)("span",{className:"cycle-simulator-help",children:"\u8d2f\u7a7f\u7ec6\u8282"})})]}),"\u8ba1\u7b97\u7ed3\u679c":{"\u603b\u4f24":s,"\u8ba1\u7b97\u7ed3\u679c\u6280\u80fd\u5217\u8868":o},visible:n,onClose:function(){return e()}})}),N=function(l){var n=0,e=0,i=l.map((function(l){var i=function(l){var n,e,i,s,o,c=Number(null===l||void 0===l||null===(n=l.split("\xb7"))||void 0===n?void 0:n[1]),d=null!==l&&void 0!==l&&l.includes("- \u5f15\u7206")?Number(null===l||void 0===l||null===(e=l.split("\u3010"))||void 0===e||null===(i=e[2])||void 0===i?void 0:i[0]):0;return d?{"\u672c\u6b21\u500d\u7387":Number(null===l||void 0===l||null===(s=l.split("\u3010"))||void 0===s||null===(o=s[1])||void 0===o?void 0:o[0])*(null!==l&&void 0!==l&&l.includes("- \u5f15\u7206")?d:1),"\u5f15\u7206":!0}:c?{"\u672c\u6b21\u500d\u7387":c,"\u5f15\u7206":!1}:{"\u672c\u6b21\u500d\u7387":1,"\u5f15\u7206":!1}}(l),s=i.\u672c\u6b21\u500d\u7387;return i.\u5f15\u7206?(e+=s,-1):(n+=s,s)})).filter((function(l){return-1!==l})),s=i.reduce((function(l,n){return l[n]?l[n]++:l[n]=1,l}),{});return{"\u603b\u500d\u7387":n,"\u5f15\u7206\u500d\u7387":e,"\u8d2f\u7a7f\u7edf\u8ba1\u6570\u7ec4":s}};var Z=e(87477);var C=function(l){var n,e,s=l.\u6a21\u62df\u4fe1\u606f,o=l.\u65e5\u5fd7\u4fe1\u606f,c=l.\u6a21\u62dfDPS\u7ed3\u679c,d=(0,i.useState)(!1),t=(0,v.Z)(d,2),r=t[0],m=t[1],y=(0,i.useState)(!1),g=(0,v.Z)(y,2),N=g[0],C=g[1],k=(0,i.useState)(!1),w=(0,v.Z)(k,2),D=w[0],S=w[1];return(0,u.jsxs)("div",{className:"cycle-bar-dps-res ".concat("\u5f02\u5e38"===(null===s||void 0===s?void 0:s.\u5faa\u73af\u6267\u884c\u7ed3\u679c)?"cycle-bar-dps-res-error":""),children:["\u5f02\u5e38"===(null===s||void 0===s?void 0:s.\u5faa\u73af\u6267\u884c\u7ed3\u679c)?(0,u.jsxs)("div",{className:"cycle-dps-res-error",children:[(0,u.jsx)("h1",{className:"cycle-dps-res-error-title",children:"\u5faa\u73af\u5f02\u5e38"}),(0,u.jsx)(a.Z,{type:"error",showIcon:!0,message:"\u5f02\u5e38\u4fe1\u606f\uff1a".concat(null===s||void 0===s||null===(n=s.\u5faa\u73af\u5f02\u5e38\u4fe1\u606f)||void 0===n||null===(e=n.\u5f02\u5e38\u4fe1\u606f)||void 0===e?void 0:e.\u4fe1\u606f)})]}):null!==c&&void 0!==c&&c.\u79d2\u4f24?(0,u.jsx)("div",{className:"cycle-dps-res-success",children:(0,u.jsxs)("div",{className:"cycle-dps-res-success-content",children:[(0,u.jsx)("h1",{className:"cycle-dps-res-num",children:null===c||void 0===c?void 0:c.\u79d2\u4f24}),(0,u.jsxs)("div",{className:"cycle-dps-res-success-text-content",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{className:"cycle-dps-res-success-text",children:"\u6218\u6597\u7528\u65f6"}),(0,u.jsxs)("span",{className:"cycle-dps-res-success-text cycle-dps-res-success-highlight",children:[null===c||void 0===c?void 0:c.\u79d2\u4f24\u8ba1\u7b97\u65f6\u95f4,"\u79d2"]})]}),(0,u.jsxs)("div",{className:"cycle-dps-res-icons",children:[(0,u.jsx)(f.Z,{title:"Buff\u5206\u6790",placement:"left",children:(0,u.jsx)(h.Z,{className:"cycle-dps-res-icon",onClick:function(){return m(!0)}})}),(0,u.jsx)(f.Z,{title:"\u6218\u6597\u65e5\u5fd7",placement:"left",children:(0,u.jsx)(p.Z,{className:"cycle-dps-res-icon",onClick:function(){return C(!0)}})}),(0,u.jsx)(f.Z,{title:"\u6280\u80fd\u7edf\u8ba1",placement:"left",children:(0,u.jsx)(x.Z,{className:"cycle-dps-res-icon",onClick:function(){return S(!0)}})})]})]})]})}):null,(0,u.jsx)(j.Z,{open:N,onCancel:function(){return C(!1)},logData:o}),(0,u.jsx)(b,{open:D,onCancel:function(){return S(!1)},dpsList:null===c||void 0===c?void 0:c.\u8ba1\u7b97\u7ed3\u679c\u6280\u80fd\u5217\u8868,total:null===c||void 0===c?void 0:c.\u603b\u4f24,logData:o}),r&&(0,u.jsx)(Z.Z,{open:r,onCancel:function(){return m(!1)},"\u65e5\u5fd7":o,"\u603b\u6218\u6597\u7528\u65f6":null===s||void 0===s?void 0:s.\u5f53\u524d\u65f6\u95f4})]})},k=e(68593);var w=function(l){var n=l.\u6a21\u62df\u4fe1\u606f,e=l.\u65e5\u5fd7\u4fe1\u606f,i=l.\u6a21\u62dfDPS\u7ed3\u679c,s=l.\u5947\u7a74\u4fe1\u606f;return(0,u.jsxs)("div",{className:"cycle-status-bar",children:[(0,u.jsx)(t,{"\u89d2\u8272\u72b6\u6001\u4fe1\u606f":null===n||void 0===n?void 0:n.\u89d2\u8272\u72b6\u6001\u4fe1\u606f}),(0,u.jsx)(k.Z,{"\u5f53\u524d\u5ba0\u7269\u6570\u636e":null===n||void 0===n?void 0:n.\u5f53\u524d\u5ba0\u7269\u6570\u636e,"\u5f53\u524d\u65f6\u95f4\u70b9":null===n||void 0===n?void 0:n.\u5f53\u524d\u65f6\u95f4}),(0,u.jsx)(r.Z,{title:"\u81ea\u8eabBuff","buff\u5217\u8868":null===n||void 0===n?void 0:n.\u5f53\u524d\u81ea\u8eabbuff\u5217\u8868,"\u5f53\u524d\u65f6\u95f4\u70b9":null===n||void 0===n?void 0:n.\u5f53\u524d\u65f6\u95f4,"\u5947\u7a74\u4fe1\u606f":s||[]}),(0,u.jsx)(r.Z,{title:"\u76ee\u6807Buff","buff\u5217\u8868":null===n||void 0===n?void 0:n.\u5f53\u524d\u76ee\u6807buff\u5217\u8868,"DOT\u5217\u8868":null===n||void 0===n?void 0:n.\u5f53\u524dDOT\u8fd0\u884c\u72b6\u6001,"\u5f53\u524d\u65f6\u95f4\u70b9":null===n||void 0===n?void 0:n.\u5f53\u524d\u65f6\u95f4}),(0,u.jsx)(C,{"\u6a21\u62df\u4fe1\u606f":n,"\u65e5\u5fd7\u4fe1\u606f":e,"\u6a21\u62dfDPS\u7ed3\u679c":i})]})}}}]);
//# sourceMappingURL=main~c7818f00.c85ac56f.js.map