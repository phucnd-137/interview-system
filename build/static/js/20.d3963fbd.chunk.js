(this["webpackJsonpinterview-manager-system"]=this["webpackJsonpinterview-manager-system"]||[]).push([[20],{347:function(e,t,a){"use strict";t.a=function(e,t){}},361:function(e,t,a){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}a.d(t,"a",(function(){return n}))},627:function(e,t,a){"use strict";a.r(t);var n=a(6),s=a(282),r=a(81),c=a(59),o=a(3),i=a(0),l=a.n(i),u=a(333);function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.baseClasses,a=e.newClasses;e.Component;if(!a)return t;var n=Object(o.a)({},t);return Object.keys(a).forEach((function(e){a[e]&&(n[e]="".concat(t[e]," ").concat(a[e]))})),n}var f={set:function(e,t,a,n){var s=e.get(t);s||(s=new Map,e.set(t,s)),s.set(a,n)},get:function(e,t,a){var n=e.get(t);return n?n.get(a):void 0},delete:function(e,t,a){e.get(t).delete(a)}};var m=l.a.createContext(null);function h(){return l.a.useContext(m)}var v="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",b=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];var p=a(404),y=a(405),j=a(406),C=a(443),S=a(407),O=a(444),g=a(408);function x(){return{plugins:[Object(p.a)(),Object(y.a)(),Object(j.a)(),Object(C.a)(),Object(S.a)(),"undefined"===typeof window?null:Object(O.a)(),Object(g.a)()]}}var w=Object(u.b)(x()),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disableGlobal,a=void 0!==t&&t,n=e.productionPrefix,s=void 0===n?"jss":n,r=e.seed,c=void 0===r?"":r,o=""===c?"":"".concat(c,"-"),i=0,l=function(){return i+=1};return function(e,t){var n=t.options.name;if(n&&0===n.indexOf("Mui")&&!t.options.link&&!a){if(-1!==b.indexOf(e.key))return"Mui-".concat(e.key);var r="".concat(o).concat(n,"-").concat(e.key);return t.options.theme[v]&&""===c?"".concat(r,"-").concat(l()):r}return"".concat(o).concat(s).concat(l())}}(),M={disableGeneration:!1,generateClassName:k,jss:w,sheetsCache:null,sheetsManager:new Map,sheetsRegistry:null},N=l.a.createContext(M);var J=-1e9;function R(){return J+=1}var D=a(361);function E(e){return e&&"object"===Object(D.a)(e)&&e.constructor===Object}function _(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0},n=a.clone?Object(o.a)({},e):e;return E(e)&&E(t)&&Object.keys(t).forEach((function(s){"__proto__"!==s&&(E(t[s])&&s in e?n[s]=_(e[s],t[s],a):n[s]=t[s])})),n}function P(e){var t="function"===typeof e;return{create:function(a,n){var s;try{s=t?e(a):e}catch(i){throw i}if(!n||!a.overrides||!a.overrides[n])return s;var r=a.overrides[n],c=Object(o.a)({},s);return Object.keys(r).forEach((function(e){c[e]=_(c[e],r[e])})),c},options:{}}}var G={};function F(e,t,a){var n=e.state;if(e.stylesOptions.disableGeneration)return t||{};n.cacheClasses||(n.cacheClasses={value:null,lastProp:null,lastJSS:{}});var s=!1;return n.classes!==n.cacheClasses.lastJSS&&(n.cacheClasses.lastJSS=n.classes,s=!0),t!==n.cacheClasses.lastProp&&(n.cacheClasses.lastProp=t,s=!0),s&&(n.cacheClasses.value=d({baseClasses:n.cacheClasses.lastJSS,newClasses:t,Component:a})),n.cacheClasses.value}function T(e,t){var a=e.state,n=e.theme,s=e.stylesOptions,r=e.stylesCreator,c=e.name;if(!s.disableGeneration){var i=f.get(s.sheetsManager,r,n);i||(i={refs:0,staticSheet:null,dynamicStyles:null},f.set(s.sheetsManager,r,n,i));var l=Object(o.a)({},r.options,s,{theme:n,flip:"boolean"===typeof s.flip?s.flip:"rtl"===n.direction});l.generateId=l.serverGenerateClassName||l.generateClassName;var m=s.sheetsRegistry;if(0===i.refs){var h;s.sheetsCache&&(h=f.get(s.sheetsCache,r,n));var v=r.create(n,c);h||((h=s.jss.createStyleSheet(v,Object(o.a)({link:!1},l))).attach(),s.sheetsCache&&f.set(s.sheetsCache,r,n,h)),m&&m.add(h),i.staticSheet=h,i.dynamicStyles=Object(u.d)(v)}if(i.dynamicStyles){var b=s.jss.createStyleSheet(i.dynamicStyles,Object(o.a)({link:!0},l));b.update(t),b.attach(),a.dynamicSheet=b,a.classes=d({baseClasses:i.staticSheet.classes,newClasses:b.classes}),m&&m.add(b)}else a.classes=i.staticSheet.classes;i.refs+=1}}function A(e,t){var a=e.state;a.dynamicSheet&&a.dynamicSheet.update(t)}function q(e){var t=e.state,a=e.theme,n=e.stylesOptions,s=e.stylesCreator;if(!n.disableGeneration){var r=f.get(n.sheetsManager,s,a);r.refs-=1;var c=n.sheetsRegistry;0===r.refs&&(f.delete(n.sheetsManager,s,a),n.jss.removeStyleSheet(r.staticSheet),c&&c.remove(r.staticSheet)),t.dynamicSheet&&(n.jss.removeStyleSheet(t.dynamicSheet),c&&c.remove(t.dynamicSheet))}}function H(e,t){var a,n=l.a.useRef([]),s=l.a.useMemo((function(){return{}}),t);n.current!==s&&(n.current=s,a=e()),l.a.useEffect((function(){return function(){a&&a()}}),[s])}var I=a(125),U=a(1),V=[{id:0,alertCase:"add",department:"Applicant",name:"John Doe",time:1651133902216,to:"applicant list"},{id:1,alertCase:"modify",department:"Applicant",name:"John Doe",time:1651132802216,modified:"interview status"},{id:2,alertCase:"delete",department:"Applicant",name:"John Doe",time:1651131702216,from:"applicant list"},{id:3,alertCase:"add",department:"Rank",name:"Senior1",time:1651130602216,to:"rank list"},{id:4,alertCase:"add",department:"Rank",name:"Senior1",time:1651130502216,to:"rank list"},{id:5,alertCase:"add",department:"Rank",name:"Senior2",time:1651130202216,to:"rank list"},{id:6,alertCase:"delete",department:"Customer",name:"John Doe",time:1651130022126,from:"customer list"}],W=function(e){var t={title:"second",value:Math.floor((Date.now()-e)/1e3)},a={title:"minute",value:Math.floor((Date.now()-e)/1e3/60)},n={title:"hour",value:Math.floor((Date.now()-e)/1e3/60/60)},s={title:"day",value:Math.floor((Date.now()-e)/1e3/60/60/24)},r=s.value&&s||n.value&&n||a.value&&a||t;return"".concat(r.value," ").concat(r.value>1?"".concat(r.title,"s"):r.title," ago")},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.name,n=t.classNamePrefix,s=t.Component,r=t.defaultTheme,i=void 0===r?G:r,u=Object(c.a)(t,["name","classNamePrefix","Component","defaultTheme"]),d=P(e),f=a||n||"makeStyles";d.options={index:R(),name:a,meta:f,classNamePrefix:f};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=h()||i,n=Object(o.a)({},l.a.useContext(N),u),r=l.a.useRef(),c=l.a.useRef();H((function(){var s={name:a,state:{},stylesCreator:d,stylesOptions:n,theme:t};return T(s,e),c.current=!1,r.current=s,function(){q(s)}}),[t,d]),l.a.useEffect((function(){c.current&&A(r.current,e),c.current=!0}));var f=F(r.current,e.classes,s);return f};return m}({root:{display:"flex",backgroundColor:function(e){switch(e.alertCase){case"add":return"#e6f7ff";case"modify":return"#fffbe6";case"delete":return"#ffe6e6";default:return"#fff"}},borderRadius:"4px",border:"solid 1px #e0e0e0","&:hover":{backgroundColor:"#e0e0e0"}},textFocus:{fontWeight:"bold"}}),B=function(e){var t=e.alertCase,a=e.department,n=e.name,c=e.time,o=e.modified,i=e.from,l=e.to,u=(e.id,z({alertCase:t}));switch(t){case"add":return Object(U.jsxs)(s.a,{className:u.root,direction:"row",justifyContent:"space-between",spacing:2,padding:2,margin:1,children:[Object(U.jsxs)(r.a,{variant:"body1",children:[a," ",Object(U.jsx)("span",{className:u.textFocus,children:n})," has been added ",l&&"to ".concat(l)]}),Object(U.jsx)(r.a,{variant:"body2",children:W(c)})]});case"modify":return Object(U.jsxs)(s.a,{className:u.root,direction:"row",justifyContent:"space-between",spacing:2,padding:2,margin:1,children:[Object(U.jsxs)(r.a,{variant:"body1",children:[a," ",Object(U.jsx)("span",{className:u.textFocus,children:n})," has been modified ",o]}),Object(U.jsx)(r.a,{variant:"body2",children:W(c)})]});case"delete":return Object(U.jsxs)(s.a,{className:u.root,direction:"row",justifyContent:"space-between",spacing:2,padding:2,margin:1,children:[Object(U.jsxs)(r.a,{variant:"body1",children:[a," ",Object(U.jsx)("span",{className:u.textFocus,children:n})," has been deleted ",i&&"from ".concat(i)]}),Object(U.jsx)(r.a,{variant:"body2",children:W(c)})]});default:return null}};t.default=function(){return Object(U.jsx)(I.a,{title:"Updates",children:V.map((function(e,t){return Object(U.jsx)(B,Object(n.a)({},e),t)}))})}}}]);
//# sourceMappingURL=20.d3963fbd.chunk.js.map