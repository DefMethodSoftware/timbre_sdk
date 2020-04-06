!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["timbre-javascript-sdk"]=e():t["timbre-javascript-sdk"]=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=12)}([function(t,e,r){"use strict";var n=r(3),o=Object.prototype.toString;function u(t){return"[object Array]"===o.call(t)}function i(t){return void 0===t}function c(t){return null!==t&&"object"==typeof t}function a(t){return"[object Function]"===o.call(t)}function s(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),u(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:u,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:function(t){return null!==t&&!i(t)&&null!==t.constructor&&!i(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:c,isUndefined:i,isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:a,isStream:function(t){return c(t)&&a(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:s,merge:function t(){var e={};function r(r,n){"object"==typeof e[n]&&"object"==typeof r?e[n]=t(e[n],r):e[n]=r}for(var n=0,o=arguments.length;n<o;n++)s(arguments[n],r);return e},deepMerge:function t(){var e={};function r(r,n){"object"==typeof e[n]&&"object"==typeof r?e[n]=t(e[n],r):e[n]="object"==typeof r?t({},r):r}for(var n=0,o=arguments.length;n<o;n++)s(arguments[n],r);return e},extend:function(t,e,r){return s(e,(function(e,o){t[o]=r&&"function"==typeof e?n(e,r):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,e,r){"use strict";r.r(e),r.d(e,"notEmpty",(function(){return n})),r.d(e,"isEmpty",(function(){return o})),r.d(e,"identity",(function(){return i}));var n=function(t){return null!==t&&!u(t)&&void 0!==t},o=function(t){return!n(t)},u=function(t){return t instanceof Object&&0===Object.keys(t).length},i=function(t){return t}},function(t,e,r){"use strict";r.d(e,"a",(function(){return A}));var n=r(11),o=r.n(n),u=r(1);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function p(t,e,r,n,o,u,i){try{var c=t[u](i),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var u=t.apply(e,r);function i(t){p(u,n,o,i,c,"next",t)}function c(t){p(u,n,o,i,c,"throw",t)}i(void 0)}))}}function d(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=["storage","storageId"],w=["method","url"],O=[{url:"users",method:"post"},{url:"users/login",method:"post"}];function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function j(t,e,r,n,o,u,i){try{var c=t[u](i),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function S(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var u=t.apply(e,r);function i(t){j(u,n,o,i,c,"next",t)}function c(t){j(u,n,o,i,c,"throw",t)}i(void 0)}))}}function P(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?E(t):e}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(n,t);var e,r=(e=n,function(){var t,r=k(e);if(T()){var n=k(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return P(this,t)});function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),C(E(e=r.call(this,t)),"get",function(){var t=S(regeneratorRuntime.mark((function t(r){var n,o,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.url,o=r.token,u=R(r,["url","token"]),t.next=3,e.requestor({url:n,token:o,method:"GET",headers:u.headers,responseType:u.responseType});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),C(E(e),"post",function(){var t=S(regeneratorRuntime.mark((function t(r){var n,o,u,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.url,o=r.body,u=r.token,i=R(r,["url","body","token"]),t.next=3,e.requestor({url:n,token:u,method:"POST",body:o,headers:i.headers,responseType:i.responseType});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),C(E(e),"patch",function(){var t=S(regeneratorRuntime.mark((function t(r){var n,o,u,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.url,o=r.body,u=r.token,i=R(r,["url","body","token"]),t.next=3,e.requestor({url:n,token:u,method:"PATCH",body:o,headers:i.headers,responseType:i.responseType});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return n}(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(n,t);var e,r=(e=n,function(){var t,r=m(e);if(y()){var n=m(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return d(this,t)});function n(t){var e,i=t.apiURI,c=t.config;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),v(h(e=r.call(this)),"_verifyConfig",(function(t,e){e.forEach((function(e){if(!t[e])throw"Invalid config: ".concat(e," missing or invalid")}))})),v(h(e),"generateRequestConfig",function(){var t=l(regeneratorRuntime.mark((function t(r){var n,o,i,c,a,p,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.apiURI,o=r.url,i=r.method,c=r.responseType,a=r.body,p=r.headers,l=r.token,f(r,["apiURI","url","method","responseType","body","headers","token"]),d=i.toLowerCase(),t.t0="".concat(n,"/").concat(o),t.t1=d,t.t2=s,t.next=7,e.getToken(o,d,l);case 7:return t.t3=t.sent,t.t4={"Content-Type":"application/json",Authorization:t.t3},t.t5=p,t.t6=(0,t.t2)(t.t4,t.t5),t.t7=Object(u.isEmpty)(c)?"json":c,t.t8="get"!==i&&Object(u.notEmpty)(a)?JSON.stringify(a):{},t.abrupt("return",{url:t.t0,method:t.t1,headers:t.t6,withCredentials:!1,crossDomain:!0,timeout:1e3,responseType:t.t7,data:t.t8});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),v(h(e),"getToken",function(){var t=l(regeneratorRuntime.mark((function t(r,n,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isWhitelistedAction(r,n)){t.next=2;break}return t.abrupt("return",null);case 2:if(!Object(u.notEmpty)(o)){t.next=6;break}t.t0=o,t.next=9;break;case 6:return t.next=8,e.storage.getItem(e.storageId);case 8:t.t0=t.sent;case 9:return t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()),v(h(e),"isWhitelistedAction",(function(t,e){return O.some((function(r){return r.url===t&&r.method===e}))})),v(h(e),"isStorageableEndpoint",(function(t,r){return t=t.replace(e.apiURI+"/",""),e.isWhitelistedAction(t,r)})),v(h(e),"performRequest",function(){var t=l(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.request(r).then(e.performSuccess,e.performFailure).finally(u.identity);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),v(h(e),"performSuccess",(function(t){var r=t.status,n=t.statusText,o=t.config,u=t.data;return e.isStorageableEndpoint(o.url,o.method)&&e.storeAccessData(e.storage,e.storageId,u.token),{result:{status:r,statusText:n,request:o,data:u}}})),v(h(e),"requestor",function(){var t=l(regeneratorRuntime.mark((function t(r){var n,o,u=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.length>1&&void 0!==u[1]?u[1]:1,e._verifyConfig(r,w),t.next=4,e.generateRequestConfig(s({},r,{apiURI:e.apiURI}));case 4:return n=t.sent,t.next=7,e.performRequest(n);case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),v(h(e),"storeAccessData",(function(t,e,r){t.setItem(e,r)})),e._verifyConfig(c,g),e.apiURI=i,e.storage=c.storage,e.storageId=c.storageId,e}return n}((function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"getFailure",(function(t){var e=Object(u.notEmpty)(t.response)?t.response:t;return{result:{status:e.status,statusText:e.statusText,request:e.config}}})),i(this,"performFailure",(function(t){return Promise.reject(e.getFailure(t)).catch(u.identity)}))})))},function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},function(t,e,r){"use strict";var n=r(0);function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var u;if(r)u=r(e);else if(n.isURLSearchParams(e))u=e.toString();else{var i=[];n.forEach(e,(function(t,e){null!=t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),i.push(o(e)+"="+o(t))})))})),u=i.join("&")}if(u){var c=t.indexOf("#");-1!==c&&(t=t.slice(0,c)),t+=(-1===t.indexOf("?")?"?":"&")+u}return t}},function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,r){"use strict";(function(e){var n=r(0),o=r(20),u={"Content-Type":"application/x-www-form-urlencoded"};function i(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var c,a={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==e&&"[object process]"===Object.prototype.toString.call(e))&&(c=r(7)),c),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(i(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)?(i(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(t){a.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){a.headers[t]=n.merge(u)})),t.exports=a}).call(this,r(19))},function(t,e,r){"use strict";var n=r(0),o=r(21),u=r(4),i=r(23),c=r(26),a=r(27),s=r(8);t.exports=function(t){return new Promise((function(e,f){var p=t.data,l=t.headers;n.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",y=t.auth.password||"";l.Authorization="Basic "+btoa(h+":"+y)}var m=i(t.baseURL,t.url);if(d.open(t.method.toUpperCase(),u(m,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,n={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:t,request:d};o(e,f,n),d=null}},d.onabort=function(){d&&(f(s("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){f(s("Network Error",t,null,d)),d=null},d.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),f(s(e,t,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var b=r(28),v=(t.withCredentials||a(m))&&t.xsrfCookieName?b.read(t.xsrfCookieName):void 0;v&&(l[t.xsrfHeaderName]=v)}if("setRequestHeader"in d&&n.forEach(l,(function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete l[e]:d.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){d&&(d.abort(),f(t),d=null)})),void 0===p&&(p=null),d.send(p)}))}},function(t,e,r){"use strict";var n=r(22);t.exports=function(t,e,r,o,u){var i=new Error(t);return n(i,e,r,o,u)}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e){e=e||{};var r={},o=["url","method","params","data"],u=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,(function(t){void 0!==e[t]&&(r[t]=e[t])})),n.forEach(u,(function(o){n.isObject(e[o])?r[o]=n.deepMerge(t[o],e[o]):void 0!==e[o]?r[o]=e[o]:n.isObject(t[o])?r[o]=n.deepMerge(t[o]):void 0!==t[o]&&(r[o]=t[o])})),n.forEach(i,(function(n){void 0!==e[n]?r[n]=e[n]:void 0!==t[n]&&(r[n]=t[n])}));var c=o.concat(u).concat(i),a=Object.keys(e).filter((function(t){return-1===c.indexOf(t)}));return n.forEach(a,(function(n){void 0!==e[n]?r[n]=e[n]:void 0!==t[n]&&(r[n]=t[n])})),r}},function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},function(t,e,r){t.exports=r(14)},function(t,e,r){"use strict";r.r(e);var n=r(13).default,o=r(31).default,u=r(32).default,i=r(33).default,c=r(1).isEmpty;e.default=function(t,e){if(c(t))throw new Error("timbre-javascript-sdk: A valid url is required to successfully make network requests");return{AuthenticationClient:new n({apiURI:t,config:e}),BandsClient:new o({apiURI:t,config:e}),UsersClient:new u({apiURI:t,config:e}),MembershipRequestsClient:new i({apiURI:t,config:e})}}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,r,n,o,u,i){try{var c=t[u](i),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function u(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}r.r(e),r.d(e,"default",(function(){return f}));var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(n,t);var e,r=(e=n,function(){var t,r=a(e);if(c()){var n=a(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return u(this,t)});function n(t){var e,u,c,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e=r.call(this,t),u=i(e),c="authenticate",a=function(){var t,r=(t=regeneratorRuntime.mark((function t(r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.email,o=r.password,t.next=3,e.post({body:{email:n,password:o},url:"users/login"});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,u){var i=t.apply(e,r);function c(t){o(i,n,u,c,a,"next",t)}function a(t){o(i,n,u,c,a,"throw",t)}c(void 0)}))});return function(t){return r.apply(this,arguments)}}(),c in u?Object.defineProperty(u,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):u[c]=a,e}return n}(r(2).a)},function(t,e,r){"use strict";var n=r(0),o=r(3),u=r(15),i=r(9);function c(t){var e=new u(t),r=o(u.prototype.request,e);return n.extend(r,u.prototype,e),n.extend(r,e),r}var a=c(r(6));a.Axios=u,a.create=function(t){return c(i(a.defaults,t))},a.Cancel=r(10),a.CancelToken=r(29),a.isCancel=r(5),a.all=function(t){return Promise.all(t)},a.spread=r(30),t.exports=a,t.exports.default=a},function(t,e,r){"use strict";var n=r(0),o=r(4),u=r(16),i=r(17),c=r(9);function a(t){this.defaults=t,this.interceptors={request:new u,response:new u}}a.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=c(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[i,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)r=r.then(e.shift(),e.shift());return r},a.prototype.getUri=function(t){return t=c(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){a.prototype[t]=function(e,r){return this.request(n.merge(r||{},{method:t,url:e}))}})),n.forEach(["post","put","patch"],(function(t){a.prototype[t]=function(e,r,o){return this.request(n.merge(o||{},{method:t,url:e,data:r}))}})),t.exports=a},function(t,e,r){"use strict";var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},function(t,e,r){"use strict";var n=r(0),o=r(18),u=r(5),i=r(6);function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||i.adapter)(t).then((function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return u(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e,r){return n.forEach(r,(function(r){t=r(t,e)})),t}},function(t,e){var r,n,o=t.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(t){if(r===setTimeout)return setTimeout(t,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(t){r=u}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var a,s=[],f=!1,p=-1;function l(){f&&a&&(f=!1,a.length?s=a.concat(s):p=-1,s.length&&d())}function d(){if(!f){var t=c(l);f=!0;for(var e=s.length;e;){for(a=s,s=[];++p<e;)a&&a[p].run();p=-1,e=s.length}a=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];s.push(new h(t,e)),1!==s.length||f||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},function(t,e,r){"use strict";var n=r(8);t.exports=function(t,e,r){var o=r.config.validateStatus;!o||o(r.status)?t(r):e(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},function(t,e,r){"use strict";var n=r(24),o=r(25);t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,u,i={};return t?(n.forEach(t.split("\n"),(function(t){if(u=t.indexOf(":"),e=n.trim(t.substr(0,u)).toLowerCase(),r=n.trim(t.substr(u+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([r]):i[e]?i[e]+", "+r:r}})),i):i}},function(t,e,r){"use strict";var n=r(0);t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}},function(t,e,r){"use strict";var n=r(0);t.exports=n.isStandardBrowserEnv()?{write:function(t,e,r,o,u,i){var c=[];c.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),n.isString(o)&&c.push("path="+o),n.isString(u)&&c.push("domain="+u),!0===i&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,r){"use strict";var n=r(10);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,r,n,o,u,i){try{var c=t[u](i),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,u){var i=t.apply(e,r);function c(t){o(i,n,u,c,a,"next",t)}function a(t){o(i,n,u,c,a,"throw",t)}c(void 0)}))}}function i(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e),r.d(e,"default",(function(){return l}));var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,t);var e,r=(e=n,function(){var t,r=s(e);if(a()){var n=s(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return i(this,t)});function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),p(c(e=r.call(this,t)),"create",function(){var t=u(regeneratorRuntime.mark((function t(r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.body,o=r.token,t.next=3,e.post({body:n,url:"bands",token:o});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),p(c(e),"view",function(){var t=u(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.token,t.next=3,e.get({url:"bands",token:n});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return n}(r(2).a)},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,r,n,o,u,i){try{var c=t[u](i),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,u){var i=t.apply(e,r);function c(t){o(i,n,u,c,a,"next",t)}function a(t){o(i,n,u,c,a,"throw",t)}c(void 0)}))}}function i(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e),r.d(e,"default",(function(){return l}));var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,t);var e,r=(e=n,function(){var t,r=s(e);if(a()){var n=s(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return i(this,t)});function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),p(c(e=r.call(this,t)),"create",function(){var t=u(regeneratorRuntime.mark((function t(r){var n,o,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.email,o=r.password,u=r.username,t.next=3,e.post({body:{email:n,password:o,username:u},url:"users"});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),p(c(e),"updateProfile",function(){var t=u(regeneratorRuntime.mark((function t(r){var n,o,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.userId,o=r.token,u=r.body,t.next=3,e.patch({body:u,url:"users/".concat(n),token:o});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return n}(r(2).a)},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,r,n,o,u,i){try{var c=t[u](i),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,u){var i=t.apply(e,r);function c(t){o(i,n,u,c,a,"next",t)}function a(t){o(i,n,u,c,a,"throw",t)}c(void 0)}))}}function i(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e),r.d(e,"default",(function(){return l}));var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,t);var e,r=(e=n,function(){var t,r=s(e);if(a()){var n=s(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return i(this,t)});function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),p(c(e=r.call(this,t)),"create",function(){var t=u(regeneratorRuntime.mark((function t(r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.bandId,o=r.token,t.next=3,e.post({url:"bands/".concat(n,"/membership_requests"),token:o});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),p(c(e),"view",function(){var t=u(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.token,t.next=3,e.get({url:"membership_requests",token:n});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),p(c(e),"respond",function(){var t=u(regeneratorRuntime.mark((function t(r){var n,o,u,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.bandId,o=r.membershipRequestId,u=r.token,i=r.body,t.next=3,e.patch({body:i,url:"bands/".concat(n,"/membership_requests/").concat(o),token:u});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return n}(r(2).a)}]).default}));