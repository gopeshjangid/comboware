_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"/0+H":function(t,e,r){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},i=r("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,r=void 0!==e&&e,n=t.hybrid,o=void 0!==n&&n,i=t.hasQuery,a=void 0!==i&&i;return r||o&&a}},0:function(t,e,r){r("GcxT"),t.exports=r("nOHt")},"1OyB":function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},"1TCz":function(t,e,r){"use strict";r.r(e);var n=r("o0o1"),o=r.n(n),i=r("HaE+"),a=r("nKUr"),u=r("1OyB"),c=r("vuIU"),s=r("s4An");var f=r("cDf5"),p=r.n(f),l=r("JX7q");function d(t,e){if(e&&("object"===p()(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Object(l.a)(t)}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=r("rePB"),h=r("q1tI"),b=r.n(h),g=r("8Bbg"),O=r.n(g),w=r("g4pe"),m=r.n(w);function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){Object(y.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var S="function"===typeof Symbol&&Symbol.observable||"@@observable",_=function(){return Math.random().toString(36).substring(7).split("").join(".")},E={INIT:"@@redux/INIT"+_(),REPLACE:"@@redux/REPLACE"+_(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+_()}};function k(t){if("object"!==typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function I(t,e,r){var n;if("function"===typeof e&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(x(0));if("function"===typeof e&&"undefined"===typeof r&&(r=e,e=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(x(1));return r(I)(t,e)}if("function"!==typeof t)throw new Error(x(2));var o=t,i=e,a=[],u=a,c=!1;function s(){u===a&&(u=a.slice())}function f(){if(c)throw new Error(x(3));return i}function p(t){if("function"!==typeof t)throw new Error(x(4));if(c)throw new Error(x(5));var e=!0;return s(),u.push(t),function(){if(e){if(c)throw new Error(x(6));e=!1,s();var r=u.indexOf(t);u.splice(r,1),a=null}}}function l(t){if(!k(t))throw new Error(x(7));if("undefined"===typeof t.type)throw new Error(x(8));if(c)throw new Error(x(9));try{c=!0,i=o(i,t)}finally{c=!1}for(var e=a=u,r=0;r<e.length;r++){(0,e[r])()}return t}function d(t){if("function"!==typeof t)throw new Error(x(10));o=t,l({type:E.REPLACE})}function v(){var t,e=p;return(t={subscribe:function(t){if("object"!==typeof t||null===t)throw new Error(x(11));function r(){t.next&&t.next(f())}return r(),{unsubscribe:e(r)}}})[S]=function(){return this},t}return l({type:E.INIT}),(n={dispatch:l,subscribe:p,getState:f,replaceReducer:d})[S]=v,n}function R(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function A(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(x(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=e.map((function(t){return t(o)}));return n=R.apply(void 0,i)(r.dispatch),j(j({},r),{},{dispatch:n})}}}var C,D=r("/MKj"),M=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),T=function(){return(T=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},N=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(e){i(e)}}function u(t){try{c(n.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}c((n=n.apply(t,e||[])).next())}))},q=function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},W=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},H="__NEXT_REDUX_WRAPPER_HYDRATE__",B=function(){return"undefined"===typeof window},G=function(t,e){var r=(void 0===e?{}:e).deserializeState;return r?r(t):t},U=function(t,e){var r=(void 0===e?{}:e).serializeState;return r?r(t):t},F=function(t){var e=t.makeStore,r=t.context,n=function(){return e(r)};if(B()){var o=r,i=void 0;return o.req&&(i=o.req),o.ctx&&o.ctx.req&&(i=o.ctx.req),i?(i.__nextReduxWrapperStore||(i.__nextReduxWrapperStore=n()),i.__nextReduxWrapperStore):n()}return C||(C=n()),C},X=function(t,e){void 0===e&&(e={});var r=function(r){var n=r.callback,o=r.context;return N(void 0,void 0,void 0,(function(){var r,i,a,u,c;return q(this,(function(s){switch(s.label){case 0:return r=F({context:o,makeStore:t}),e.debug&&console.log("1. getProps created store with state",r.getState()),i=n&&n(r),(u=i)?[4,i(o)]:[3,2];case 1:u=s.sent(),s.label=2;case 2:return a=u||{},e.debug&&console.log("3. getProps after dispatches has store state",r.getState()),c=r.getState(),[2,{initialProps:a,initialState:B()?U(c,e):c}]}}))}))},n=function(t){return function(e){return N(void 0,void 0,void 0,(function(){var n,o,i;return q(this,(function(a){switch(a.label){case 0:return[4,r({callback:t,context:e})];case 1:return n=a.sent(),o=n.initialProps,i=n.initialState,[2,T(T({},o),{props:T(T({},o.props),{initialState:i})})]}}))}))}};return{getServerSideProps:function(t){return function(e){return N(void 0,void 0,void 0,(function(){return q(this,(function(r){switch(r.label){case 0:return[4,n(t)(e)];case 1:return[2,r.sent()]}}))}))}},getStaticProps:n,getInitialAppProps:function(t){return function(e){return N(void 0,void 0,void 0,(function(){var n,o,i;return q(this,(function(a){switch(a.label){case 0:return[4,r({callback:t,context:e})];case 1:return n=a.sent(),o=n.initialProps,i=n.initialState,[2,T(T({},o),{initialState:i})]}}))}))}},getInitialPageProps:function(t){return function(e){return N(void 0,void 0,void 0,(function(){return q(this,(function(n){return"getState"in e?[2,t&&t(e)]:[2,r({callback:t,context:e})]}))}))}},withRedux:function(r){var n,o="withRedux("+(r.displayName||r.name||"Component")+")",i="getInitialProps"in r;return(n=function(n){function i(t,e){var r=n.call(this,t,e)||this;return r.store=null,r.hydrate(t,e),r}return M(i,n),i.prototype.hydrate=function(r,n){var i,a=r.initialState,u=(r.initialProps,W(r,["initialState","initialProps"])),c=null===(i=null===u||void 0===u?void 0:u.pageProps)||void 0===i?void 0:i.initialState;this.store||(this.store=F({makeStore:t,context:n}),e.debug&&console.log("4. WrappedApp created new store with",o,{initialState:a,initialStateFromGSPorGSSR:c})),a&&this.store.dispatch({type:H,payload:G(a,e)}),c&&this.store.dispatch({type:H,payload:G(c,e)})},i.prototype.UNSAFE_componentWillReceiveProps=function(t,e){var r,n,o,i;(null===(r=null===t||void 0===t?void 0:t.pageProps)||void 0===r?void 0:r.initialState)===(null===(o=null===(n=this.props)||void 0===n?void 0:n.pageProps)||void 0===o?void 0:o.initialState)&&(null===t||void 0===t?void 0:t.initialState)===(null===(i=this.props)||void 0===i?void 0:i.initialState)||this.hydrate(t,e)},i.prototype.render=function(){var t,e,n=this.props,o=(n.initialState,n.initialProps),i=W(n,["initialState","initialProps"]),a=i;return o&&o.pageProps&&(a.pageProps=T(T({},o.pageProps),i.pageProps)),(null===(t=null===i||void 0===i?void 0:i.pageProps)||void 0===t?void 0:t.initialState)&&delete(a=T(T({},i),{pageProps:T({},i.pageProps)})).pageProps.initialState,(null===(e=null===a||void 0===a?void 0:a.pageProps)||void 0===e?void 0:e.initialProps)&&(a.pageProps=T(T({},a.pageProps),a.pageProps.initialProps),delete a.pageProps.initialProps),b.a.createElement(D.a,{store:this.store},b.a.createElement(r,T({},o,a)))},i}(b.a.Component)).displayName=o,n.getInitialProps=i?r.getInitialProps:void 0,n}}};function K(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(o){return"function"===typeof o?o(r,n,t):e(o)}}}}var L=K();L.withExtraArgument=K;var z=L,V=r("AWPF");function J(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?J(Object(r),!0).forEach((function(e){Object(y.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Y={profile:{},skills:[{skill_name:"",skill_level:""}],loading:!1,message:"",error:""};var Z=function(){var t,e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,n=arguments.length>1?arguments[1]:void 0;switch(console.log("action",n),n.type){case V.d:return Q(Q({},r),{},{loading:!0},null===n||void 0===n||null===(t=n.payload)||void 0===t?void 0:t.data);case V.b:return Q(Q({},r),{},{loading:!1,message:"",error:null===(e=n.payload)||void 0===e?void 0:e.error});case V.c:return Q(Q({},r),{},{loading:!1,message:""},n.payload);default:return r}},$=r("JPpG");function tt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function et(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(r),!0).forEach((function(e){Object(y.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var rt={domain:{name:"",description:"",id:""},project:{name:"",description:"",id:""},network:null,image:null,server:null,serverList:[],loading:!1,message:"",error:""};var nt=function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];0,"function"===typeof t[o]&&(r[o]=t[o])}var i,a=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if("undefined"===typeof r(void 0,{type:E.INIT}))throw new Error(x(12));if("undefined"===typeof r(void 0,{type:E.PROBE_UNKNOWN_ACTION()}))throw new Error(x(13))}))}(r)}catch(u){i=u}return function(t,e){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},u=0;u<a.length;u++){var c=a[u],s=r[c],f=t[c],p=s(f,e);if("undefined"===typeof p){e&&e.type;throw new Error(x(14))}o[c]=p,n=n||p!==f}return(n=n||a.length!==Object.keys(t).length)?o:t}}({user:Z,workspace:function(){var t,e,r,n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,i=arguments.length>1?arguments[1]:void 0;switch(i.type){case $.g:return et(et(et({},o),null===(t=i.payload)||void 0===t?void 0:t.data),{},{loading:!1,error:"",message:null===(e=i.payload)||void 0===e?void 0:e.message});case $.h:return console.log("action?.payload?.data",null===i||void 0===i||null===(r=i.payload)||void 0===r?void 0:r.data),et(et({},o),{},{loading:!1,error:"",message:null===(n=i.payload)||void 0===n?void 0:n.message},null===i||void 0===i?void 0:i.payload);case $.f:return et(et(et({},o),i.payload),{},{error:"",loading:!0});case $.e:return et(et(et({},o),i.payload),{},{message:"",loading:!1});default:return o}}}),ot=X((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=I(nt,t,A(z));return e}));r("MVND");function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function at(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(Object(r),!0).forEach((function(e){Object(y.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ut(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=v(t);if(e){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}var ct=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(s.a)(t,e)}(r,t);var e=ut(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var t=this.props,e=t.Component,r=t.pageProps,n=e.layout||function(t){var e=t.children;return Object(a.jsx)(a.Fragment,{children:e})};return Object(a.jsxs)(b.a.Fragment,{children:[Object(a.jsxs)(m.a,{children:[Object(a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),Object(a.jsx)("title",{children:"Comboware"})]}),Object(a.jsx)(n,{children:Object(a.jsx)(e,at({},r))})]})}}]),r}(O.a);Object(y.a)(ct,"getInitialProps",ot.getInitialAppProps((function(t){return function(){var e=Object(i.a)(o.a.mark((function e(r){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.Component,i=r.ctx,t.dispatch({type:"TOE",payload:"was set in _app"}),e.t0=at,e.t1=at,e.t2={},!n.getInitialProps){e.next=11;break}return e.next=8,n.getInitialProps(at(at({},i),{},{store:t}));case 8:e.t3=e.sent,e.next=12;break;case 11:e.t3={};case 12:return e.t4=e.t3,e.t5=(0,e.t1)(e.t2,e.t4),e.t6={},e.t7={pathname:i.pathname},e.t8=(0,e.t0)(e.t5,e.t6,e.t7),e.abrupt("return",{pageProps:e.t8});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})));e.default=ot.withRedux(ct)},"48fX":function(t,e,r){var n=r("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},"5fIB":function(t,e,r){var n=r("7eYB");t.exports=function(t){if(Array.isArray(t))return n(t)}},"8Bbg":function(t,e,r){t.exports=r("B5Ud")},"8Kt/":function(t,e,r){"use strict";r("oI91");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var n,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=n?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=t[o]}r.default=t,e&&e.set(t,r);return r}(r("q1tI")),i=(n=r("Xuae"))&&n.__esModule?n:{default:n},a=r("lwAK"),u=r("FYa8"),c=r("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var r=o.default.Children.toArray(e.props.children);return t.concat(r)}),[]).reduce(p,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,r=new Set,n={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?i=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var c=0,s=l.length;c<s;c++){var f=l[c];if(o.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?i=!1:r.add(f);else{var p=o.props[f],d=n[f]||new Set;"name"===f&&a||!d.has(p)?(d.add(p),n[f]=d):i=!1}}}return i}}()).reverse().map((function(t,e){var r=t.key||e;return o.default.cloneElement(t,{key:r})}))}function v(t){var e=t.children,r=(0,o.useContext)(a.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:n,inAmpMode:(0,c.isInAmpMode)(r)},e)}v.rewind=function(){};var y=v;e.default=y},AWPF:function(t,e,r){"use strict";r.d(e,"d",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return u}));var n="START",o="FAILED",i="SAVE_PROFILE",a="http://localhost:8000",u={updateProfile:a+"/v1/user/updateProfile",createDomain:a+"/v1/workspace/createDomain",signUp:a+"/v1/user/register",getProfile:a+"/v1/user/getProfile"}},B5Ud:function(t,e,r){"use strict";var n=r("vJKn"),o=r("/GRZ"),i=r("i2R6"),a=r("48fX"),u=r("tCBg"),c=r("T0f4"),s=r("qVT1");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}var p=r("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=b,e.default=void 0;var l=p(r("q1tI")),d=r("g/15");function v(t){return y.apply(this,arguments)}function y(){return(y=s(n.mark((function t(e){var r,o,i;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.Component,o=e.ctx,t.next=3,(0,d.loadGetInitialProps)(r,o);case 3:return i=t.sent,t.abrupt("return",{pageProps:i});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps,e.NextWebVitalsMetric=d.NextWebVitalsMetric;var h=function(t){a(r,t);var e=f(r);function r(){return o(this,r),e.apply(this,arguments)}return i(r,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,r=t.Component,n=t.pageProps,o=t.__N_SSG,i=t.__N_SSP;return l.default.createElement(r,Object.assign({},n,o||i?{}:{url:b(e)}))}}]),r}(l.default.Component);function b(t){var e=t.pathname,r=t.asPath,n=t.query;return{get query(){return n},get pathname(){return e},get asPath(){return r},back:function(){t.back()},push:function(e,r){return t.push(e,r)},pushTo:function(e,r){var n=r?e:"",o=r||e;return t.push(n,o)},replace:function(e,r){return t.replace(e,r)},replaceTo:function(e,r){var n=r?e:"",o=r||e;return t.replace(n,o)}}}e.default=h,h.origGetInitialProps=v,h.getInitialProps=v},FYa8:function(t,e,r){"use strict";var n;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.HeadManagerContext=o},GcxT:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},"HaE+":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,"a",(function(){return o}))},JPpG:function(t,e,r){"use strict";r.d(e,"g",(function(){return n})),r.d(e,"f",(function(){return o})),r.d(e,"e",(function(){return i})),r.d(e,"h",(function(){return a})),r.d(e,"d",(function(){return c})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return f})),r.d(e,"a",(function(){return p}));var n="SAVE_DOMAIN",o="REQUEST_START",i="REQUEST_FAILED",a="SAVE_REQUEST",u="http://localhost:8000",c={id:"9f5e5d0a-8918-4321-8fec-eb062a784fd7",name:"Engineero-network",type:"Physical",subnetCIDR:"192.168.60.0/24",dhcp:"enabled",allocationPool:"192.168.60.110 \u2014 192.168.60.210"},s={id:"423def1e-30ec-4a2d-bad7-226c2de9250b",size:{cpu:2,ram:4}},f={id:"bef927d4-1eec-441e-a161-a25a43a80a7c",size:"7 GiB",os_type:"Generic Linux"},p={createDomain:u+"/v1/workspace/createDomain",createServerRequest:u+"/v1/workspace/createWorkspace",getServerDetails:u+"/v1/workspace/getServerDetails"}},T0f4:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},Xuae:function(t,e,r){"use strict";var n=r("mPvQ"),o=r("/GRZ"),i=r("i2R6"),a=(r("qXWd"),r("48fX")),u=r("tCBg"),c=r("T0f4");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}e.__esModule=!0,e.default=void 0;var f=r("q1tI"),p=function(t){a(r,t);var e=s(r);function r(t){var i;return o(this,r),(i=e.call(this,t))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);e.default=p},cDf5:function(t,e){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=r=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),r(e)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},g4pe:function(t,e,r){t.exports=r("8Kt/")},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,r){"use strict";var n;e.__esModule=!0,e.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,r){var n=r("5fIB"),o=r("rlHP"),i=r("KckH"),a=r("kG2m");t.exports=function(t){return n(t)||o(t)||i(t)||a()}},o0o1:function(t,e,r){t.exports=r("ls82")},oI91:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},tCBg:function(t,e,r){var n=r("C+bE"),o=r("qXWd");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?o(t):e}}},[[0,0,2,1,3,8]]]);