!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},r.parcelRequired7c6=o),o.register("iE7OH",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o.register("ke5Oc",(function(e,t){"use strict";var r=o("c4C4W"),n=o("lGmLA"),i=o("9jbh3"),a=o("knWMA");var s=function e(t){var o=new i(t),s=n(i.prototype.request,o);return r.extend(s,i.prototype,o),r.extend(s,o),s.create=function(r){return e(a(t,r))},s}(o("c74ni"));s.Axios=i,s.CanceledError=o("dW1zJ"),s.CancelToken=o("77MZz"),s.isCancel=o("lXDKh"),s.VERSION=o("kLR29").version,s.toFormData=o("12Kat"),s.AxiosError=o("5TB86"),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=o("9BdDr"),s.isAxiosError=o("kv87N"),e.exports=s,e.exports.default=s})),o.register("c4C4W",(function(e,t){"use strict";var r,n=o("lGmLA"),i=Object.prototype.toString,a=(r=Object.create(null),function(e){var t=i.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=s("ArrayBuffer");function f(e){return null!==e&&"object"==typeof e}function p(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var h=s("Date"),d=s("File"),v=s("Blob"),m=s("FileList");function y(e){return"[object Function]"===i.call(e)}var g=s("URLSearchParams");function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var w,k=(w="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return w&&e instanceof w});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:f,isPlainObject:p,isUndefined:c,isDate:h,isFile:d,isBlob:v,isFunction:y,isStream:function(e){return f(e)&&y(e.pipe)},isURLSearchParams:g,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:b,merge:function e(){var t={};function r(r,n){p(t[n])&&p(r)?t[n]=e(t[n],r):p(r)?t[n]=e({},r):u(r)?t[n]=r.slice():t[n]=r}for(var n=0,i=arguments.length;n<i;n++)b(arguments[n],r);return t},extend:function(e,t,r){return b(t,(function(t,i){e[i]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r){var n,i,o,a={};t=t||{};do{for(i=(n=Object.getOwnPropertyNames(e)).length;i-- >0;)a[o=n[i]]||(t[o]=e[o],a[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:s,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},isTypedArray:k,isFileList:m}})),o.register("lGmLA",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}})),o.register("9jbh3",(function(e,t){"use strict";var r=o("c4C4W"),n=o("6d5Pb"),i=o("JRZh2"),a=o("k04r0"),s=o("knWMA"),u=o("gYMA1"),c=o("9SeBc"),l=c.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&c.assertOptions(r,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var o,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var f=[a,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(u),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var p=t;n.length;){var h=n.shift(),d=n.shift();try{p=h(p)}catch(e){d(e);break}}try{o=a(p)}catch(e){return Promise.reject(e)}for(;u.length;)o=o.then(u.shift(),u.shift());return o},f.prototype.getUri=function(e){e=s(this.defaults,e);var t=u(e.baseURL,e.url);return n(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)})),e.exports=f})),o.register("6d5Pb",(function(e,t){"use strict";var r=o("c4C4W");function n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var o;if(i)o=i(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(n(t)+"="+n(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("JRZh2",(function(e,t){"use strict";var r=o("c4C4W");function n(){this.handlers=[]}n.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=n})),o.register("k04r0",(function(e,t){"use strict";var r=o("c4C4W"),n=o("jrAxF"),i=o("lXDKh"),a=o("c74ni"),s=o("dW1zJ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=n.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=n.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=n.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("jrAxF",(function(e,t){"use strict";var r=o("c4C4W"),n=o("c74ni");e.exports=function(e,t,i){var o=this||n;return r.forEach(i,(function(r){e=r.call(o,e,t)})),e}})),o.register("c74ni",(function(e,t){"use strict";var r=o("6qd2L"),n=o("c4C4W"),i=o("h8JMh"),a=o("5TB86"),s=o("gWbUy"),u=o("12Kat"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var f,p={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==r&&"[object process]"===Object.prototype.toString.call(r))&&(f=o("btSY7")),f),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e))return e;if(n.isArrayBufferView(e))return e.buffer;if(n.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r,o=n.isObject(e),a=t&&t["Content-Type"];if((r=n.isFileList(e))||o&&"multipart/form-data"===a){var s=this.env&&this.env.FormData;return u(r?{"files[]":e}:e,s&&new s)}return o||"application/json"===a?(l(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||p.transitional,r=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||i&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw a.from(e,a.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("beknR")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){p.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){p.headers[e]=n.merge(c)})),e.exports=p})),o.register("6qd2L",(function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=s(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||l||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("h8JMh",(function(e,t){"use strict";var r=o("c4C4W");e.exports=function(e,t){r.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}})),o.register("5TB86",(function(e,t){"use strict";var r=o("c4C4W");function n(e,t,r,n,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}r.inherits(n,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=n.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(n,a),Object.defineProperty(i,"isAxiosError",{value:!0}),n.from=function(e,t,o,a,s,u){var c=Object.create(i);return r.toFlatObject(e,c,(function(e){return e!==Error.prototype})),n.call(c,e.message,t,o,a,s),c.name=e.name,u&&Object.assign(c,u),c},e.exports=n})),o.register("gWbUy",(function(e,t){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("12Kat",(function(e,t){"use strict";var r=o("3aNd6").Buffer,n=o("c4C4W");e.exports=function(e,t){t=t||new FormData;var i=[];function o(e){return null===e?"":n.isDate(e)?e.toISOString():n.isArrayBuffer(e)||n.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):r.from(e):e}return function e(r,a){if(n.isPlainObject(r)||n.isArray(r)){if(-1!==i.indexOf(r))throw Error("Circular reference detected in "+a);i.push(r),n.forEach(r,(function(r,i){if(!n.isUndefined(r)){var s,u=a?a+"."+i:i;if(r&&!a&&"object"==typeof r)if(n.endsWith(i,"{}"))r=JSON.stringify(r);else if(n.endsWith(i,"[]")&&(s=n.toArray(r)))return void s.forEach((function(e){!n.isUndefined(e)&&t.append(u,o(e))}));e(r,u)}})),i.pop()}else t.append(a,o(r))}(e),t}})),o.register("3aNd6",(function(r,n){e(r.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(r.exports,"INSPECT_MAX_BYTES",(function(){return a}),(function(e){return a=e}));var i,a,s=o("ds8z5"),u=o("8MBJY"),c=o("a2hTj"),l=o("eYQtU"),f=o("l5bVx"),p=o("2MbLg"),h=o("5d11t"),d=o("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=g,a=50;var m=2147483647;function y(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,g.prototype),t}function g(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return b(e,t,r)}function b(e,r,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!g.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=0|E(e,t),n=y(r),i=n.write(e,t);i!==r&&(n=n.slice(0,i));return n}(e,r);if(ArrayBuffer.isView(e))return function(e){if(oe(e,Uint8Array)){var t=new Uint8Array(e);return _(t.buffer,t.byteOffset,t.byteLength)}return x(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":t(f)(e)));if(oe(e,ArrayBuffer)||e&&oe(e.buffer,ArrayBuffer))return _(e,r,n);if("undefined"!=typeof SharedArrayBuffer&&(oe(e,SharedArrayBuffer)||e&&oe(e.buffer,SharedArrayBuffer)))return _(e,r,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return g.from(i,r,n);var o=function(e){if(g.isBuffer(e)){var t=0|I(e.length),r=y(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||ae(e.length)?y(0):x(e);if("Buffer"===e.type&&Array.isArray(e.data))return x(e.data)}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return g.from(e[Symbol.toPrimitive]("string"),r,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":t(f)(e)))}function w(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function k(e){return w(e),y(e<0?0:0|I(e))}function x(e){for(var t=e.length<0?0:0|I(e.length),r=y(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function _(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,g.prototype),n}function I(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return 0|e}function E(e,r){if(g.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||oe(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===e?"undefined":t(f)(e)));var n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return re(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ne(e).length;default:if(o)return i?-1:re(e).length;r=(""+r).toLowerCase(),o=!0}}function T(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return F(this,t,r);case"utf8":case"utf-8":return M(this,t,r);case"ascii":return U(this,t,r);case"latin1":case"binary":return j(this,t,r);case"base64":return D(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return W(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function O(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function S(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),ae(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=g.from(t,n)),g.isBuffer(t))return 0===t.length?-1:A(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):A(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function A(e,t,r,n,i){var o,a=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,s/=2,u/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var l=-1;for(o=r;o<s;o++)if(c(e,o)===c(t,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*a}else-1!==l&&(o-=o-l),l=-1}else for(r+u>s&&(r=s-u),o=r;o>=0;o--){for(var f=!0,p=0;p<u;p++)if(c(e,o+p)!==c(t,p)){f=!1;break}if(f)return o}return-1}function N(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o,a=t.length;for(n>a/2&&(n=a/2),o=0;o<n;++o){var s=parseInt(t.substr(2*o,2),16);if(ae(s))return o;e[r+o]=s}return o}function R(e,t,r,n){return ie(re(t,e.length-r),e,r,n)}function C(e,t,r,n){return ie(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function L(e,t,r,n){return ie(ne(t),e,r,n)}function P(e,t,r,n){return ie(function(e,t){for(var r,n,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)n=(r=e.charCodeAt(a))>>8,i=r%256,o.push(i),o.push(n);return o}(t,e.length-r),e,r,n)}function D(e,t,r){return 0===t&&r===e.length?h.fromByteArray(e):h.fromByteArray(e.slice(t,r))}function M(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var o=e[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(i+s<=r){var u=void 0,c=void 0,l=void 0,f=void 0;switch(s){case 1:o<128&&(a=o);break;case 2:128==(192&(u=e[i+1]))&&(f=(31&o)<<6|63&u)>127&&(a=f);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(f=(15&o)<<12|(63&u)<<6|63&c)>2047&&(f<55296||f>57343)&&(a=f);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(f=(15&o)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&f<1114112&&(a=f)}}null===a?(a=65533,s=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=s}return function(e){var t=e.length;if(t<=B)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=B));return r}(n)}g.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),g.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.buffer}}),Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.byteOffset}}),g.poolSize=8192,g.from=function(e,t,r){return b(e,t,r)},Object.setPrototypeOf(g.prototype,Uint8Array.prototype),Object.setPrototypeOf(g,Uint8Array),g.alloc=function(e,t,r){return function(e,t,r){return w(e),e<=0?y(e):void 0!==t?"string"==typeof r?y(e).fill(t,r):y(e).fill(t):y(e)}(e,t,r)},g.allocUnsafe=function(e){return k(e)},g.allocUnsafeSlow=function(e){return k(e)},g.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==g.prototype},g.compare=function(e,t){if(oe(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),oe(t,Uint8Array)&&(t=g.from(t,t.offset,t.byteLength)),!g.isBuffer(e)||!g.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},g.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},g.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return g.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=g.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var o=e[r];if(oe(o,Uint8Array))i+o.length>n.length?(g.isBuffer(o)||(o=g.from(o)),o.copy(n,i)):Uint8Array.prototype.set.call(n,o,i);else{if(!g.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i)}i+=o.length}return n},g.byteLength=E,g.prototype._isBuffer=!0,g.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},g.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},g.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},g.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?M(this,0,e):T.apply(this,arguments)},g.prototype.toLocaleString=g.prototype.toString,g.prototype.equals=function(e){if(!g.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===g.compare(this,e)},g.prototype.inspect=function(){var e="",t=a;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(g.prototype[v]=g.prototype.inspect),g.prototype.compare=function(e,r,n,i,o){if(oe(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),!g.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===e?"undefined":t(f)(e)));if(void 0===r&&(r=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),r<0||n>e.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&r>=n)return 0;if(i>=o)return-1;if(r>=n)return 1;if(this===e)return 0;for(var a=(o>>>=0)-(i>>>=0),s=(n>>>=0)-(r>>>=0),u=Math.min(a,s),c=this.slice(i,o),l=e.slice(r,n),p=0;p<u;++p)if(c[p]!==l[p]){a=c[p],s=l[p];break}return a<s?-1:s<a?1:0},g.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},g.prototype.indexOf=function(e,t,r){return S(this,e,t,r,!0)},g.prototype.lastIndexOf=function(e,t,r){return S(this,e,t,r,!1)},g.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return N(this,e,t,r);case"utf8":case"utf-8":return R(this,e,t,r);case"ascii":case"latin1":case"binary":return C(this,e,t,r);case"base64":return L(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var B=4096;function U(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function j(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function F(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=t;o<r;++o)i+=se[e[o]];return i}function W(e,t,r){for(var n=e.slice(t,r),i="",o=0;o<n.length-1;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function z(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function H(e,t,r,n,i,o){if(!g.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function V(e,t,r,n,i){$(t,n,i,e,r,7);var o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function q(e,t,r,n,i){$(t,n,i,e,r,7);var o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function J(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function G(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,4),d.write(e,t,r,n,23,4),r+4}function K(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,8),d.write(e,t,r,n,52,8),r+8}g.prototype.slice=function(e,t){var r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,g.prototype),n},g.prototype.readUintLE=g.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||z(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n},g.prototype.readUintBE=g.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||z(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},g.prototype.readUint8=g.prototype.readUInt8=function(e,t){return e>>>=0,t||z(e,1,this.length),this[e]},g.prototype.readUint16LE=g.prototype.readUInt16LE=function(e,t){return e>>>=0,t||z(e,2,this.length),this[e]|this[e+1]<<8},g.prototype.readUint16BE=g.prototype.readUInt16BE=function(e,t){return e>>>=0,t||z(e,2,this.length),this[e]<<8|this[e+1]},g.prototype.readUint32LE=g.prototype.readUInt32LE=function(e,t){return e>>>=0,t||z(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},g.prototype.readUint32BE=g.prototype.readUInt32BE=function(e,t){return e>>>=0,t||z(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},g.prototype.readBigUInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+r*Math.pow(2,24);return BigInt(n)+(BigInt(i)<<BigInt(32))})),g.prototype.readBigUInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),g.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||z(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},g.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||z(e,t,this.length);for(var n=t,i=1,o=this[e+--n];n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},g.prototype.readInt8=function(e,t){return e>>>=0,t||z(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},g.prototype.readInt16LE=function(e,t){e>>>=0,t||z(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},g.prototype.readInt16BE=function(e,t){e>>>=0,t||z(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},g.prototype.readInt32LE=function(e,t){return e>>>=0,t||z(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},g.prototype.readInt32BE=function(e,t){return e>>>=0,t||z(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},g.prototype.readBigInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),g.prototype.readBigInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r)})),g.prototype.readFloatLE=function(e,t){return e>>>=0,t||z(e,4,this.length),d.read(this,e,!0,23,4)},g.prototype.readFloatBE=function(e,t){return e>>>=0,t||z(e,4,this.length),d.read(this,e,!1,23,4)},g.prototype.readDoubleLE=function(e,t){return e>>>=0,t||z(e,8,this.length),d.read(this,e,!0,52,8)},g.prototype.readDoubleBE=function(e,t){return e>>>=0,t||z(e,8,this.length),d.read(this,e,!1,52,8)},g.prototype.writeUintLE=g.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||H(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},g.prototype.writeUintBE=g.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||H(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},g.prototype.writeUint8=g.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,1,255,0),this[t]=255&e,t+1},g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},g.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return V(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),g.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),g.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);H(this,e,t,r,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<r&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},g.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);H(this,e,t,r,i-1,-i)}var o=r-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},g.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},g.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},g.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},g.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},g.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||H(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},g.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return V(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),g.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),g.prototype.writeFloatLE=function(e,t,r){return G(this,e,t,!0,r)},g.prototype.writeFloatBE=function(e,t,r){return G(this,e,t,!1,r)},g.prototype.writeDoubleLE=function(e,t,r){return K(this,e,t,!0,r)},g.prototype.writeDoubleBE=function(e,t,r){return K(this,e,t,!1,r)},g.prototype.copy=function(e,t,r,n){if(!g.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},g.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!g.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){var i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var a=g.isBuffer(e)?e:g.from(e,n),s=a.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=a[o%s]}return this};var Y={};function Q(e,r,n){Y[e]=function(n){t(l)(o,n);var i=t(p)(o);function o(){var n;return t(u)(this,o),n=i.call(this),Object.defineProperty(t(s)(n),"message",{value:r.apply(t(s)(n),arguments),writable:!0,configurable:!0}),n.name="".concat(n.name," [").concat(e,"]"),n.stack,delete n.name,n}return t(c)(o,[{key:"code",get:function(){return e},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(e,"]: ").concat(this.message)}}]),o}(n)}function X(e){for(var t="",r=e.length,n="-"===e[0]?1:0;r>=n+4;r-=3)t="_".concat(e.slice(r-3,r)).concat(t);return"".concat(e.slice(0,r)).concat(t)}function $(e,r,n,i,o,a){if(e>n||e<r){var s,u="bigint"===(void 0===r?"undefined":t(f)(r))?"n":"";throw s=a>3?0===r||r===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(a+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(a+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(a+1)-1).concat(u):">= ".concat(r).concat(u," and <= ").concat(n).concat(u),new Y.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,r){Z(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||ee(t,e.length-(r+1))}(i,o,a)}function Z(e,t){if("number"!=typeof e)throw new Y.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,r){if(Math.floor(e)!==e)throw Z(e,r),new Y.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new Y.ERR_BUFFER_OUT_OF_BOUNDS;throw new Y.ERR_OUT_OF_RANGE(r||"offset",">= ".concat(r?1:0," and <= ").concat(t),e)}Q("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),Q("ERR_INVALID_ARG_TYPE",(function(e,r){return'The "'.concat(e,'" argument must be of type number. Received type ').concat(void 0===r?"undefined":t(f)(r))}),TypeError),Q("ERR_OUT_OF_RANGE",(function(e,r,n){var i='The value of "'.concat(e,'" is out of range.'),o=n;return Number.isInteger(n)&&Math.abs(n)>Math.pow(2,32)?o=X(String(n)):"bigint"===(void 0===n?"undefined":t(f)(n))&&(o=String(n),(n>Math.pow(BigInt(2),BigInt(32))||n<-Math.pow(BigInt(2),BigInt(32)))&&(o=X(o)),o+="n"),i+=" It must be ".concat(r,". Received ").concat(o)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function re(e,t){var r;t=t||1/0;for(var n=e.length,i=null,o=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function ne(e){return h.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,r,n){var i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function oe(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function ae(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),o.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),o.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n.default(e,t)};var r,n=(r=o("gD1JV"))&&r.__esModule?r:{default:r}})),o.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),o.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=r.default();return function(){var r,o=n.default(e);if(t){var a=n.default(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return i.default(this,r)}};var r=a(o("aTHs7")),n=a(o("fVNic")),i=a(o("jmhxu"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),o.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),o.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=i(o("ds8z5")),n=i(o("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("5d11t",(function(t,r){var n,i;e(t.exports,"toByteArray",(function(){return n}),(function(e){return n=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),n=function(e){var t,r,n=f(e),i=n[0],o=n[1],u=new s(function(e,t,r){return 3*(t+r)/4-r}(0,i,o)),c=0,l=o>0?i-4:i;for(r=0;r<l;r+=4)t=a[e.charCodeAt(r)]<<18|a[e.charCodeAt(r+1)]<<12|a[e.charCodeAt(r+2)]<<6|a[e.charCodeAt(r+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=a[e.charCodeAt(r)]<<2|a[e.charCodeAt(r+1)]>>4,u[c++]=255&t);1===o&&(t=a[e.charCodeAt(r)]<<10|a[e.charCodeAt(r+1)]<<4|a[e.charCodeAt(r+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,r=e.length,n=r%3,i=[],a=16383,s=0,u=r-n;s<u;s+=a)i.push(p(e,s,s+a>u?u:s+a));1===n?(t=e[r-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)o[c]=u[c],a[u.charCodeAt(c)]=c;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function p(e,t,r){for(var n,i,a=[],s=t;s<r;s+=3)n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(o[(i=n)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return a.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63})),o.register("7rddL",(function(t,r){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var n,i;e(t.exports,"read",(function(){return n}),(function(e){return n=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),n=function(e,t,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,c=u>>1,l=-7,f=r?i-1:0,p=r?-1:1,h=e[t+f];for(f+=p,o=h&(1<<-l)-1,h>>=-l,l+=s;l>0;o=256*o+e[t+f],f+=p,l-=8);for(a=o&(1<<-l)-1,o>>=-l,l+=n;l>0;a=256*a+e[t+f],f+=p,l-=8);if(0===o)o=1-c;else{if(o===u)return a?NaN:1/0*(h?-1:1);a+=Math.pow(2,n),o-=c}return(h?-1:1)*a*Math.pow(2,o-n)},i=function(e,t,r,n,i,o){var a,s,u,c=8*o-i-1,l=(1<<c)-1,f=l>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:o-1,d=n?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),(t+=a+f>=1?p/u:p*Math.pow(2,1-f))*u>=2&&(a++,u/=2),a+f>=l?(s=0,a=l):a+f>=1?(s=(t*u-1)*Math.pow(2,i),a+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;e[r+h]=255&s,h+=d,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[r+h]=255&a,h+=d,a/=256,c-=8);e[r+h-d]|=128*v}})),o.register("btSY7",(function(e,t){"use strict";var r=o("c4C4W"),n=o("j97bH"),i=o("jFG8L"),a=o("6d5Pb"),s=o("gYMA1"),u=o("1nUSP"),c=o("9jFfm"),l=o("gWbUy"),f=o("5TB86"),p=o("dW1zJ"),h=o("4ULKu");e.exports=function(e){return new Promise((function(t,o){var d,v=e.data,m=e.headers,y=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}r.isFormData(v)&&r.isStandardBrowserEnv()&&delete m["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",k=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(w+":"+k)}var x=s(e.baseURL,e.url);function _(){if(b){var r="getAllResponseHeaders"in b?u(b.getAllResponseHeaders()):null,i={data:y&&"text"!==y&&"json"!==y?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:r,config:e,request:b};n((function(e){t(e),g()}),(function(e){o(e),g()}),i),b=null}}if(b.open(e.method.toUpperCase(),a(x,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=_:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(_)},b.onabort=function(){b&&(o(new f("Request aborted",f.ECONNABORTED,e,b)),b=null)},b.onerror=function(){o(new f("Network Error",f.ERR_NETWORK,e,b,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new f(t,r.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,e,b)),b=null},r.isStandardBrowserEnv()){var I=(e.withCredentials||c(x))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;I&&(m[e.xsrfHeaderName]=I)}"setRequestHeader"in b&&r.forEach(m,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete m[t]:b.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),y&&"json"!==y&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){b&&(o(!e||e&&e.type?new p:e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),v||(v=null);var E=h(x);E&&-1===["http","https","file"].indexOf(E)?o(new f("Unsupported protocol "+E+":",f.ERR_BAD_REQUEST,e)):b.send(v)}))}})),o.register("j97bH",(function(e,t){"use strict";var r=o("5TB86");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),o.register("jFG8L",(function(e,t){"use strict";var r=o("c4C4W");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("gYMA1",(function(e,t){"use strict";var r=o("7xjuH"),n=o("ftRZn");e.exports=function(e,t){return e&&!r(t)?n(e,t):t}})),o.register("7xjuH",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("ftRZn",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("1nUSP",(function(e,t){"use strict";var r=o("c4C4W"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),i=r.trim(e.substr(o+1)),t){if(a[t]&&n.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([i]):a[t]?a[t]+", "+i:i}})),a):a}})),o.register("9jFfm",(function(e,t){"use strict";var r=o("c4C4W");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}})),o.register("dW1zJ",(function(e,t){"use strict";var r=o("5TB86");function n(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}o("c4C4W").inherits(n,r,{__CANCEL__:!0}),e.exports=n})),o.register("4ULKu",(function(e,t){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("beknR",(function(e,t){e.exports=null})),o.register("lXDKh",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("knWMA",(function(e,t){"use strict";var r=o("c4C4W");e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function a(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function u(r){return r in t?i(e[r],t[r]):r in e?i(void 0,e[r]):void 0}var c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,i=t(e);r.isUndefined(i)&&t!==u||(n[e]=i)})),n}})),o.register("9SeBc",(function(e,r){var n=o("l5bVx"),i=o("kLR29").version,a=o("5TB86"),s={};["object","boolean","number","function","string","symbol"].forEach((function(e,r){s[e]=function(i){return(void 0===i?"undefined":t(n)(i))===e||"a"+(r<1?"n ":" ")+e}}));var u={};s.transitional=function(e,t,r){function n(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,o){if(!1===e)throw new a(n(i," has been removed"+(t?" in "+t:"")),a.ERR_DEPRECATED);return t&&!u[i]&&(u[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,o)}},e.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new a("options must be an object",a.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),i=n.length;i-- >0;){var o=n[i],s=t[o];if(s){var u=e[o],c=void 0===u||s(u,o,e);if(!0!==c)throw new a("option "+o+" must be "+c,a.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new a("Unknown option "+o,a.ERR_BAD_OPTION)}},validators:s}})),o.register("kLR29",(function(e,t){e.exports={version:"0.27.2"}})),o.register("77MZz",(function(e,t){"use strict";var r=o("dW1zJ");function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},n.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},n.source=function(){var e;return{token:new n((function(t){e=t})),cancel:e}},e.exports=n})),o.register("9BdDr",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("kv87N",(function(e,t){"use strict";var r=o("c4C4W");e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return a.apply(null,arguments)};var r,n=(r=o("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,r){return(a=i()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return r&&n.default(o,r.prototype),o}).apply(null,arguments)}})),o.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),o.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=o("fVNic"))&&r.__esModule?r:{default:r}})),o.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=t),t}})),o("iE7OH").register(JSON.parse('{"9p9yL":"index.5e77a5a5.js","i2hMd":"avatar.d76e3797.jpg","dwpwv":"no-img.acfafebf.jpeg"}'));var a={};function s(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){s(o,n,i,a,u,"next",e)}function u(e){s(o,n,i,a,u,"throw",e)}a(void 0)}))}};var u={},c=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new S(n||[]);return o._invoke=function(e,t,r){var n=f;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return N()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(e,r,a),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function m(){}function y(){}function g(){}var b={};u(b,o,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(A([])));k&&k!==r&&n.call(k,o)&&(b=k);var x=g.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function r(i,o,a,s){var u=l(e[i],e,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(f).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:t,done:!0}}return y.prototype=g,u(x,"constructor",g),u(g,"constructor",y),y.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(I.prototype),u(I.prototype,a,(function(){return this})),e.AsyncIterator=I,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new I(c(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(x),u(x,s,"Generator"),u(x,o,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(u);try{regeneratorRuntime=c}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}var l,f,p={};l=void 0!==r?r:"undefined"!=typeof window?window:p,f=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,r="Success",n="Failure",i="Warning",o="Info",a={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,r=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],r++);for(var n=function(r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t&&"[object Object]"===Object.prototype.toString.call(r[n])?e[n]=c(e[n],r[n]):e[n]=r[n])};r<arguments.length;r++)n(arguments[r]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,p=function(s,l,p,d){if(!u("body"))return!1;t||h.Notify.init({});var v=c(!0,t,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof d&&!Array.isArray(d)){var m={};"object"==typeof p?m=p:"object"==typeof d&&(m=d),t=c(!0,t,m)}var y,g,b=t[s.toLocaleLowerCase("en")];f++,"string"!=typeof l&&(l="Notiflix "+s),t.plainText&&(y=l,(g=e.document.createElement("div")).innerHTML=y,l=g.textContent||g.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(a.wrapID)||e.document.createElement("div");if(w.id=a.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var k=e.document.getElementById(a.overlayID)||e.document.createElement("div");k.id=a.overlayID,k.style.width="100%",k.style.height="100%",k.style.position="fixed",k.style.zIndex=t.zindex-1,k.style.left=0,k.style.top=0,k.style.right=0,k.style.bottom=0,k.style.background=b.backOverlayColor||t.backOverlayColor,k.className=t.cssAnimation?"nx-with-animation":"",k.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(a.overlayID)||e.document.body.appendChild(k)}e.document.getElementById(a.wrapID)||e.document.body.appendChild(w);var x=e.document.createElement("div");x.id=t.ID+"-"+f,x.className=t.className+" "+b.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof p?"nx-with-close-button":"")+" "+("function"==typeof p?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),x.style.fontSize=t.fontSize,x.style.color=b.textColor,x.style.background=b.background,x.style.borderRadius=t.borderRadius,x.style.pointerEvents="all",t.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(x.style.animationDuration=t.cssAnimationDuration+"ms");var _="";if(t.closeButton&&"function"!=typeof p&&(_='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)x.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"");else{var I="";s===r?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===o&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),x.innerHTML=I+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"")}else x.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?_:"");if("left-bottom"===t.position||"right-bottom"===t.position){var E=e.document.getElementById(a.wrapID);E.insertBefore(x,E.firstChild)}else e.document.getElementById(a.wrapID).appendChild(x);var T=e.document.getElementById(x.id);if(T){var O,S,A=function(){T.classList.add("nx-remove");var t=e.document.getElementById(a.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(O)},N=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(a.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(S)};if(t.closeButton&&"function"!=typeof p&&e.document.getElementById(x.id).querySelector("span.nx-close-button").addEventListener("click",(function(){A();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof p||t.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof p&&p(),A();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof p){var R=function(){O=setTimeout((function(){A()}),t.timeout),S=setTimeout((function(){N()}),t.timeout+t.cssAnimationDuration)};R(),t.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(O),clearTimeout(S)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),R()})))}}if(t.showOnlyTheLastOne&&f>0)for(var C=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+f+"])"),L=0;L<C.length;L++){var P=C[L];null!==P.parentNode&&P.parentNode.removeChild(P)}t=c(!0,t,v)},h={Notify:{init:function(r){t=c(!0,a,r),function(t,r){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(r)){var n=e.document.createElement("style");n.id=r,n.innerHTML=t(),e.document.head.appendChild(n)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,n){p(r,e,t,n)},failure:function(e,t,r){p(n,e,t,r)},warning:function(e,t,r){p(i,e,t,r)},info:function(e,t,r){p(o,e,t,r)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:h.Notify}):{Notify:h.Notify}},"function"==typeof define&&define.amd?define([],(function(){return f(l)})):"object"==typeof p?p=f(l):l.Notiflix=f(l);var h;function d(e,t,r){var n,i,o,a,s;function u(){var c=Date.now()-a;c<t&&c>=0?n=setTimeout(u,t-c):(n=null,r||(s=e.apply(o,i),o=i=null))}null==t&&(t=100);var c=function(){o=this,i=arguments,a=Date.now();var c=r&&!n;return n||(n=setTimeout(u,t)),c&&(s=e.apply(o,i),o=i=null),s};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(s=e.apply(o,i),o=i=null,clearTimeout(n),n=null)},c}d.debounce=d,h=d;var v,m=o("l5bVx"),y="Expected a function",g=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,k=/^0o[0-7]+$/i,x=parseInt,_="object"==typeof r&&r&&r.Object===Object&&r,I="object"==typeof self&&self&&self.Object===Object&&self,E=_||I||Function("return this")(),T=Object.prototype.toString,O=Math.max,S=Math.min,A=function(){return E.Date.now()};function N(e,t,r){var n,i,o,a,s,u,c=0,l=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError(y);function h(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function d(e){return c=e,s=setTimeout(m,t),l?h(e):a}function v(e){var r=e-u;return void 0===u||r>=t||r<0||f&&e-c>=o}function m(){var e=A();if(v(e))return g(e);s=setTimeout(m,function(e){var r=t-(e-u);return f?S(r,o-(e-c)):r}(e))}function g(e){return s=void 0,p&&n?h(e):(n=i=void 0,a)}function b(){var e=A(),r=v(e);if(n=arguments,i=this,u=e,r){if(void 0===s)return d(u);if(f)return s=setTimeout(m,t),h(u)}return void 0===s&&(s=setTimeout(m,t)),a}return t=C(t)||0,R(r)&&(l=!!r.leading,o=(f="maxWait"in r)?O(C(r.maxWait)||0,t):o,p="trailing"in r?!!r.trailing:p),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=u=i=s=void 0},b.flush=function(){return void 0===s?a:g(A())},b}function R(e){var r=void 0===e?"undefined":t(m)(e);return!!e&&("object"==r||"function"==r)}function C(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(m)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==T.call(e)}(e))return NaN;if(R(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=R(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(g,"");var n=w.test(e);return n||k.test(e)?x(e.slice(2),n?2:8):b.test(e)?NaN:+e}v=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(y);return R(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),N(e,t,{leading:n,maxWait:t,trailing:i})};var L,P=o("8MBJY"),D=o("a2hTj");L=o("ke5Oc");var M="api_key=a1b67e21d001fd0b301e3f4d42b48ca7",B="https://api.themoviedb.org",U=function(){"use strict";function e(){t(P)(this,e),this.searchQuery="",this.page=1,this.totalPages=1}return t(D)(e,[{key:"saveTotalPages",value:function(e){return this.totalPages=e}},{key:"resetTotalPages",value:function(){return this.totalPages=1}},{key:"getTotalPages",value:function(){return this.totalPages}},{key:"incrementPage",value:function(){return this.page+=1}},{key:"resetPage",value:function(){return this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){return this.searchQuery=e}},{key:"fetchApiMoviesTrend",value:function(){return t(L).get("".concat(B,"/3/trending/movie/day?").concat(M,"&page=").concat(this.page))}},{key:"fetchGanresID",value:function(){return t(L).get("".concat(B,"/3/genre/movie/list?").concat(M))}},{key:"fetchFindMoviesBySearchQuery",value:function(){return console.log(this.searchQuery),console.log(this.page),t(L).get("\n".concat(B,"/3/search/movie?").concat(M,"&query=").concat(this.searchQuery,"&page=").concat(this.page))}},{key:"fetchOneMovie",value:function(e){return t(L).get("".concat(B,"/3/movie/").concat(e,"?").concat(M))}}]),e}(),j=(P=o("8MBJY"),D=o("a2hTj"),o("hKHmD")),F={};Object.defineProperty(F,"__esModule",{value:!0}),F.default=function(e){return W.default(e)||z.default(e)||V.default(e)||H.default()};var W=q(o("kMC0W")),z=q(o("7AJDX")),H=q(o("8CtQK")),V=q(o("auk6i"));function q(e){return e&&e.__esModule?e:{default:e}}P=o("8MBJY"),D=o("a2hTj");var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.default=function(e,t){return G.default(e)||K.default(e,t)||Q.default(e,t)||Y.default()};var G=X(o("8slrw")),K=X(o("7AJDX")),Y=X(o("ifqQW")),Q=X(o("auk6i"));function X(e){return e&&e.__esModule?e:{default:e}}var $=o("ds8z5"),Z=(P=o("8MBJY"),D=o("a2hTj"),o("eYQtU")),ee={};Object.defineProperty(ee,"__esModule",{value:!0}),ee.default=function(e){return ae(e)};var te=oe(o("ge8co")),re=oe(o("cZGw3")),ne=oe(o("fVNic")),ie=oe(o("gD1JV"));function oe(e){return e&&e.__esModule?e:{default:e}}function ae(e){var t="function"==typeof Map?new Map:void 0;return ae=function(e){if(null===e||!re.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return te.default(e,arguments,ne.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),ie.default(r,e)},ae(e)}var se=o("2MbLg"),ue=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},ce={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=o>>2,f=(3&o)<<4|s>>4,p=(15&s)<<2|c>>6,h=63&c;u||(h=64,a||(p=64)),n.push(r[l],r[f],r[p],r[h])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ue(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var o=r[e.charAt(i++)],a=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw Error();var c=o<<2|a>>4;if(n.push(c),64!==s){var l=a<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},le=function(e){return function(e){var t=ue(e);return ce.encodeByteArray(t,!0)}(e).replace(/\./g,"")},fe=function(e){try{return ce.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pe=function(){"use strict";function e(){var r=this;t(P)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return t(D)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var de=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(e,i,o){var a;return t(P)(this,n),(a=r.call(this,i)).code=e,a.customData=o,a.name="FirebaseError",Object.setPrototypeOf(t($)(a),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(t($)(a),ve.prototype.create),a}return n}(t(ee)(Error)),ve=function(){"use strict";function e(r,n,i){t(P)(this,e),this.service=r,this.serviceName=n,this.errors=i}return t(D)(e,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?me(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new de(o,u,i);return c}}]),e}();function me(e,t){return e.replace(ye,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var ye=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function be(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(we(l)&&we(f)){if(!be(l,f))return!1}else if(l!==f)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var p=!0,h=!1,d=void 0;try{for(var v,m=n[Symbol.iterator]();!(p=(v=m.next()).done);p=!0){var y=v.value;if(!r.includes(y))return!1}}catch(e){h=!0,d=e}finally{try{p||null==m.return||m.return()}finally{if(h)throw d}}return!0}function we(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ke(e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=function(e,n){var i=t(J)(n.value,2),o=i[0],a=i[1];Array.isArray(a)?a.forEach((function(e){r.push(encodeURIComponent(o)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(o)+"="+encodeURIComponent(a))},u=Object.entries(e)[Symbol.iterator]();!(n=(a=u.next()).done);n=!0)s(0,a)}catch(e){i=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r.length?"&"+r.join("&"):""}function xe(e){var r={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=t(J)(e.split("="),2),i=n[0],o=n[1];r[decodeURIComponent(i)]=decodeURIComponent(o)}})),r}function _e(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie=function(){"use strict";function e(r,n){var i=this;t(P)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(i)})).catch((function(e){i.error(e)}))}return t(D)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=Ee),void 0===n.error&&(n.error=Ee),void 0===n.complete&&(n.complete=Ee);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function Ee(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Te(e){return e&&e._delegate?e._delegate:e}var Oe=function(){"use strict";function e(r,n,i){t(P)(this,e),this.name=r,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(D)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),Se="[DEFAULT]",Ae=function(){"use strict";function e(r,n){t(P)(this,e),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(D)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new pe;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Se})}catch(e){}var r=!0,n=!1,i=void 0;try{for(var o,a=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=t(J)(o.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(e.instances.values()),r.next=3,Promise.all(t(F)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(F)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.options,n=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var o=this.getOrInitializeService({instanceIdentifier:i,options:n}),a=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var f=t(J)(c.value,2),p=f[0],h=f[1],d=this.normalizeInstanceIdentifier(p);i===d&&h.resolve(o)}}catch(e){s=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw u}}return o}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var o=this.instances.get(n);return o&&e(o,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,o=void 0;try{for(var a,s=r[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,o=this.instances.get(r);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===Se?void 0:t),options:i}),this.instances.set(r,o),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(o,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se;return this.component?this.component.multipleInstances?e:Se:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,Re,Ce=function(){"use strict";function e(r){t(P)(this,e),this.name=r,this.providers=new Map}return t(D)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ae(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),Le=(P=o("8MBJY"),D=o("a2hTj"),j=o("hKHmD"),[]);(Re=Ne||(Ne={}))[Re.DEBUG=0]="DEBUG",Re[Re.VERBOSE=1]="VERBOSE",Re[Re.INFO=2]="INFO",Re[Re.WARN=3]="WARN",Re[Re.ERROR=4]="ERROR",Re[Re.SILENT=5]="SILENT";var Pe,De={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},Me=Ne.INFO,Be=(Pe={},t(j)(Pe,Ne.DEBUG,"log"),t(j)(Pe,Ne.VERBOSE,"log"),t(j)(Pe,Ne.INFO,"info"),t(j)(Pe,Ne.WARN,"warn"),t(j)(Pe,Ne.ERROR,"error"),Pe),Ue=function(e,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var a;if(!(r<e.logLevel)){var s=(new Date).toISOString(),u=Be[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(a=console)[u].apply(a,["[".concat(s,"]  ").concat(e.name,":")].concat(t(F)(i)))}},je=function(){"use strict";function e(r){t(P)(this,e),this.name=r,this._logLevel=Me,this._logHandler=Ue,this._userLogHandler=null,Le.push(this)}return t(D)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Ne))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?De[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ne.DEBUG].concat(t(F)(r))),this._logHandler.apply(this,[this,Ne.DEBUG].concat(t(F)(r)))}},{key:"log",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ne.VERBOSE].concat(t(F)(r))),this._logHandler.apply(this,[this,Ne.VERBOSE].concat(t(F)(r)))}},{key:"info",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ne.INFO].concat(t(F)(r))),this._logHandler.apply(this,[this,Ne.INFO].concat(t(F)(r)))}},{key:"warn",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ne.WARN].concat(t(F)(r))),this._logHandler.apply(this,[this,Ne.WARN].concat(t(F)(r)))}},{key:"error",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ne.ERROR].concat(t(F)(r))),this._logHandler.apply(this,[this,Ne.ERROR].concat(t(F)(r)))}}]),e}();var Fe={};Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ze.default(e,t,r[t])}))}return e};var We,ze=(We=o("hKHmD"))&&We.__esModule?We:{default:We};var He,Ve;var qe=new WeakMap,Je=new WeakMap,Ge=new WeakMap,Ke=new WeakMap,Ye=new WeakMap;var Qe={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Je.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ge.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Ze(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Xe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ve||(Ve=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.apply(et(this),r),Ze(qe.get(this))}:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Ze(e.apply(et(this),r))}:function(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var a,s=(a=e).call.apply(a,[et(this),r].concat(t(F)(i)));return Ge.set(s,r.sort?r.sort():[r]),Ze(s)}}function $e(e){return"function"==typeof e?Xe(e):(e instanceof IDBTransaction&&function(e){if(!Je.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),n()},o=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));Je.set(e,t)}}(e),t=e,(He||(He=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Qe):e);var t}function Ze(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(Ze(t.result)),n()},o=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&qe.set(e,t)})).catch((function(){})),Ye.set(r,t),r;var t,r;if(Ke.has(e))return Ke.get(e);var n=$e(e);return n!==e&&(Ke.set(e,n),Ye.set(n,e)),n}var et=function(e){return Ye.get(e)};function tt(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,o=r.blocking,a=r.terminated,s=indexedDB.open(e,t),u=Ze(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Ze(s.result),e.oldVersion,e.newVersion,Ze(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),u}var rt=["get","getKey","getAll","getAllKeys","count"],nt=["put","add","delete","clear"],it=new Map;function ot(e,r){if(e instanceof IDBDatabase&&!(r in e)&&"string"==typeof r){if(it.get(r))return it.get(r);var n=r.replace(/FromIndex$/,""),i=r!==n,o=nt.includes(n);if(n in(i?IDBIndex:IDBObjectStore).prototype&&(o||rt.includes(n))){var s,c=(s=t(a)(t(u).mark((function e(r){var a,s,c,l,f,p,h=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=h.length,s=new Array(a>1?a-1:0),c=1;c<a;c++)s[c-1]=h[c];return f=this.transaction(r,o?"readwrite":"readonly"),p=f.store,i&&(p=p.index(s.shift())),e.next=7,Promise.all([(l=p)[n].apply(l,t(F)(s)),o&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)});return it.set(r,c),c}}}Qe=function(e){return t(Fe)({},e,{get:function(t,r,n){return ot(t,r)||e.get(t,r,n)},has:function(t,r){return!!ot(t,r)||e.has(t,r)}})}(Qe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var at=function(){"use strict";function e(r){t(P)(this,e),this.container=r}return t(D)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var st,ut,ct="@firebase/app",lt="0.7.32",ft=new je("@firebase/app"),pt="[DEFAULT]",ht=(st={},t(j)(st,ct,"fire-core"),t(j)(st,"@firebase/app-compat","fire-core-compat"),t(j)(st,"@firebase/analytics","fire-analytics"),t(j)(st,"@firebase/analytics-compat","fire-analytics-compat"),t(j)(st,"@firebase/app-check","fire-app-check"),t(j)(st,"@firebase/app-check-compat","fire-app-check-compat"),t(j)(st,"@firebase/auth","fire-auth"),t(j)(st,"@firebase/auth-compat","fire-auth-compat"),t(j)(st,"@firebase/database","fire-rtdb"),t(j)(st,"@firebase/database-compat","fire-rtdb-compat"),t(j)(st,"@firebase/functions","fire-fn"),t(j)(st,"@firebase/functions-compat","fire-fn-compat"),t(j)(st,"@firebase/installations","fire-iid"),t(j)(st,"@firebase/installations-compat","fire-iid-compat"),t(j)(st,"@firebase/messaging","fire-fcm"),t(j)(st,"@firebase/messaging-compat","fire-fcm-compat"),t(j)(st,"@firebase/performance","fire-perf"),t(j)(st,"@firebase/performance-compat","fire-perf-compat"),t(j)(st,"@firebase/remote-config","fire-rc"),t(j)(st,"@firebase/remote-config-compat","fire-rc-compat"),t(j)(st,"@firebase/storage","fire-gcs"),t(j)(st,"@firebase/storage-compat","fire-gcs-compat"),t(j)(st,"@firebase/firestore","fire-fst"),t(j)(st,"@firebase/firestore-compat","fire-fst-compat"),t(j)(st,"fire-js","fire-js"),t(j)(st,"firebase","fire-js-all"),st),dt=new Map,vt=new Map;function mt(e,t){try{e.container.addComponent(t)}catch(r){ft.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function yt(e){var t=e.name;if(vt.has(t))return ft.debug("There were multiple attempts to register component ".concat(t,".")),!1;vt.set(t,e);var r=!0,n=!1,i=void 0;try{for(var o,a=dt.values()[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){mt(o.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}return!0}function gt(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bt=(ut={},t(j)(ut,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(j)(ut,"bad-app-name","Illegal App name: '{$appName}"),t(j)(ut,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(j)(ut,"app-deleted","Firebase App named '{$appName}' already deleted"),t(j)(ut,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(j)(ut,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(j)(ut,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(j)(ut,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(j)(ut,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(j)(ut,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),ut),wt=new ve("app","Firebase",bt),kt=function(){"use strict";function e(r,n,i){var o=this;t(P)(this,e),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Oe("app",(function(){return o}),"PUBLIC"))}return t(D)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}]),e}(),xt="9.9.4";function _t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=dt.get(e);if(!t)throw wt.create("no-app",{appName:e});return t}function It(e,t,r){var n,i=null!==(n=ht[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void ft.warn(s.join(" "))}yt(new Oe("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Et="firebase-heartbeat-store",Tt=null;function Ot(){return Tt||(Tt=tt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Et)}}).catch((function(e){throw wt.create("idb-open",{originalErrorMessage:e.message})}))),Tt}function St(e){return At.apply(this,arguments)}function At(){return(At=t(a)(t(u).mark((function e(r){var n,i,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Ot();case 4:return i=e.sent,e.abrupt("return",i.transaction(Et).objectStore(Et).get(Ct(r)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof de?ft.warn(e.t0.message):(o=wt.create("idb-get",{originalErrorMessage:null===(n=e.t0)||void 0===n?void 0:n.message}),ft.warn(o.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Nt(e,t){return Rt.apply(this,arguments)}function Rt(){return(Rt=t(a)(t(u).mark((function e(r,n){var i,o,a,s,c;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Ot();case 4:return o=e.sent,a=o.transaction(Et,"readwrite"),s=a.objectStore(Et),e.next=9,s.put(n,Ct(r));case 9:return e.abrupt("return",a.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof de?ft.warn(e.t0.message):(c=wt.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),ft.warn(c.message));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function Ct(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt=function(){"use strict";function e(r){var n=this;t(P)(this,e),this.container=r,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Bt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return t(D)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n,i,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),o=Pt(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==o&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===o}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:o,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n,i,o,a,s;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(n=Pt(),i=Dt(e._heartbeatsCache.heartbeats),o=i.heartbeatsToSend,a=i.unsentEntries,s=le(JSON.stringify({version:2,heartbeats:o})),e._heartbeatsCache.lastSentHeartbeatDate=n,!(a.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=a,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),r)})))()}}]),e}();function Pt(){return(new Date).toISOString().substring(0,10)}function Dt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(e,i){var o=i.value,a=r.find((function(e){return e.agent===o.agent}));if(a){if(a.dates.push(o.date),Ut(r)>t)return a.dates.pop(),"break"}else if(r.push({agent:o.agent,dates:[o.date]}),Ut(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:r,unsentEntries:n}}var Mt,Bt=function(){"use strict";function e(r){t(P)(this,e),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(D)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,St(e.app);case 9:return n=t.sent,t.abrupt("return",n||{heartbeats:[]});case 11:case"end":return t.stop()}}),r)})))()}},{key:"overwrite",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,r._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,r.read();case 10:return o=t.sent,t.abrupt("return",Nt(r.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),n)})))()}},{key:"add",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i,o;return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return o=n.sent,n.abrupt("return",Nt(r.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:t(F)(o.heartbeats).concat(t(F)(e.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),e}();function Ut(e){return le(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt="",yt(new Oe("platform-logger",(function(e){return new at(e)}),"PRIVATE")),yt(new Oe("heartbeat",(function(e){return new Lt(e)}),"PRIVATE")),It(ct,lt,Mt),It(ct,lt,"esm2017"),It("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
It("firebase","9.9.4","app");$=o("ds8z5"),P=o("8MBJY"),D=o("a2hTj"),j=o("hKHmD");var jt={};Object.defineProperty(jt,"__esModule",{value:!0}),jt.default=function(e,t,r){return Wt(e,t,r)};var Ft=function(e){return e&&e.__esModule?e:{default:e}}(o("2mz0K"));function Wt(e,t,r){return(Wt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=Ft.default(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r||e):i.value}})(e,t,r)}var zt=o("fVNic");Z=o("eYQtU"),se=o("2MbLg");function Ht(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;function Vt(){return t(j)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var qt=Vt,Jt=new ve("auth","Firebase",Vt()),Gt=new je("@firebase/auth");function Kt(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var o;Gt.logLevel<=Ne.ERROR&&(o=Gt).error.apply(o,["Auth (".concat(xt,"): ").concat(e)].concat(t(F)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw Zt.apply(void 0,[e].concat(t(F)(n)))}function Qt(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return Zt.apply(void 0,[e].concat(t(F)(n)))}function Xt(e,r,n){var i=Object.assign(Object.assign({},qt()),t(j)({},r,n));return new ve("auth","Firebase",i).create(r,{appName:e.name})}function $t(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&Yt(e,"argument-error"),Xt(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function Zt(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var o;if("string"!=typeof e){var a,s=n[0],u=t(F)(n.slice(1));return u[0]&&(u[0].appName=e.name),(a=e._errorFactory).create.apply(a,[s].concat(t(F)(u)))}return(o=Jt).create.apply(o,[e].concat(t(F)(n)))}function er(e,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];if(!e)throw Zt.apply(void 0,[r].concat(t(F)(i)))}function tr(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Kt(t),new Error(t)}function rr(e,t){e||tr(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nr=new Map;function ir(e){rr(e instanceof Function,"Expected a class definition");var t=nr.get(e);return t?(rr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,nr.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){var r=gt(e,"auth");if(r.isInitialized()){var n=r.getImmediate();if(be(r.getOptions(),null!=t?t:{}))return n;Yt(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ar(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function sr(){return"http:"===ur()||"https:"===ur()}function ur(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!sr()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var lr=function(){"use strict";function e(r,n){t(P)(this,e),this.shortDelay=r,this.longDelay=n,rr(n>r,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())||"object"==typeof navigator&&"ReactNative"===navigator.product}return t(D)(e,[{key:"get",value:function(){return cr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e,t){rr(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pr,hr=function(){"use strict";function e(){t(P)(this,e)}return t(D)(e,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),dr=(pr={},t(j)(pr,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(j)(pr,"MISSING_CUSTOM_TOKEN","internal-error"),t(j)(pr,"INVALID_IDENTIFIER","invalid-email"),t(j)(pr,"MISSING_CONTINUE_URI","internal-error"),t(j)(pr,"INVALID_PASSWORD","wrong-password"),t(j)(pr,"MISSING_PASSWORD","internal-error"),t(j)(pr,"EMAIL_EXISTS","email-already-in-use"),t(j)(pr,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(j)(pr,"INVALID_IDP_RESPONSE","invalid-credential"),t(j)(pr,"INVALID_PENDING_TOKEN","invalid-credential"),t(j)(pr,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(j)(pr,"MISSING_REQ_TYPE","internal-error"),t(j)(pr,"EMAIL_NOT_FOUND","user-not-found"),t(j)(pr,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(j)(pr,"EXPIRED_OOB_CODE","expired-action-code"),t(j)(pr,"INVALID_OOB_CODE","invalid-action-code"),t(j)(pr,"MISSING_OOB_CODE","internal-error"),t(j)(pr,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(j)(pr,"INVALID_ID_TOKEN","invalid-user-token"),t(j)(pr,"TOKEN_EXPIRED","user-token-expired"),t(j)(pr,"USER_NOT_FOUND","user-token-expired"),t(j)(pr,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(j)(pr,"INVALID_CODE","invalid-verification-code"),t(j)(pr,"INVALID_SESSION_INFO","invalid-verification-id"),t(j)(pr,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(j)(pr,"MISSING_SESSION_INFO","missing-verification-id"),t(j)(pr,"SESSION_EXPIRED","code-expired"),t(j)(pr,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(j)(pr,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(j)(pr,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(j)(pr,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(j)(pr,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(j)(pr,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(j)(pr,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(j)(pr,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(j)(pr,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(j)(pr,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(j)(pr,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),pr),vr=new lr(3e4,6e4);function mr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function yr(e,t,r,n){return gr.apply(this,arguments)}function gr(){return gr=t(a)(t(u).mark((function e(r,n,i,o){var s,c=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.abrupt("return",br(r,s,t(a)(t(u).mark((function e(){var a,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===n?s=o:a={body:JSON.stringify(o)}),c=ke(Object.assign({key:r.config.apiKey},s)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",hr.fetch()(_r(r,r.config.apiHost,i,c),Object.assign({method:n,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),gr.apply(this,arguments)}function br(e,t,r){return wr.apply(this,arguments)}function wr(){return(wr=t(a)(t(u).mark((function e(r,n,i){var o,a,s,c,l,f,p,h,d;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r._canInitEmulator=!1,o=Object.assign(Object.assign({},dr),n),e.prev=2,a=new Ir(r),e.next=6,Promise.race([i(),a.promise]);case 6:return s=e.sent,a.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(c=e.sent))){e.next=13;break}throw Er(r,"account-exists-with-different-credential",c);case 13:if(!s.ok||"errorMessage"in c){e.next=17;break}return e.abrupt("return",c);case 17:if(l=s.ok?c.errorMessage:c.error.message,f=t(J)(l.split(" : "),2),p=f[0],h=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==p){e.next=23;break}throw Er(r,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==p){e.next=27;break}throw Er(r,"email-already-in-use",c);case 27:if("USER_DISABLED"!==p){e.next=29;break}throw Er(r,"user-disabled",c);case 29:if(d=o[p]||p.toLowerCase().replace(/[_\s]+/g,"-"),!h){e.next=34;break}throw Xt(r,d,h);case 34:Yt(r,d);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof de)){e.next=41;break}throw e.t0;case 41:Yt(r,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function kr(e,t,r,n){return xr.apply(this,arguments)}function xr(){return xr=t(a)(t(u).mark((function e(r,n,i,o){var a,s,c=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,yr(r,n,i,o,a);case 3:return"mfaPendingCredential"in(s=e.sent)&&Yt(r,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),xr.apply(this,arguments)}function _r(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?fr(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Ir=function(){"use strict";function e(r){var n=this;t(P)(this,e),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(Qt(r.auth,"network-request-failed"))}),vr.get())}))}return t(D)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function Er(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=Qt(e,t,n);return i.customData._tokenResponse=r,i}function Tr(e,t){return Or.apply(this,arguments)}function Or(){return(Or=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",yr(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Sr(e,t){return Ar.apply(this,arguments)}function Ar(){return(Ar=t(a)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",yr(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(){return Rr=t(a)(t(u).mark((function e(r){var n,i,o,a,s,c,l=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]&&l[1],i=Te(r),e.next=4,i.getIdToken(n);case 4:return o=e.sent,er((a=Lr(o))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),s="object"==typeof a.firebase?a.firebase:void 0,c=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:a,token:o,authTime:Nr(Cr(a.auth_time)),issuedAtTime:Nr(Cr(a.iat)),expirationTime:Nr(Cr(a.exp)),signInProvider:c||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),Rr.apply(this,arguments)}function Cr(e){return 1e3*Number(e)}function Lr(e){var r,n=t(J)(e.split("."),3),i=n[0],o=n[1],a=n[2];if(void 0===i||void 0===o||void 0===a)return Kt("JWT malformed, contained fewer than 3 sections"),null;try{var s=fe(o);return s?JSON.parse(s):(Kt("Failed to decode base64 JWT payload"),null)}catch(e){return Kt("Caught error parsing JWT payload as JSON",null===(r=e)||void 0===r?void 0:r.toString()),null}}function Pr(e,t){return Dr.apply(this,arguments)}function Dr(){return Dr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(r,n){var i=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof de&&Mr(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),Dr.apply(this,arguments)}function Mr(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Br=function(){"use strict";function e(r){t(P)(this,e),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(D)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(e),n=this;this.timerId=setTimeout(t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),e)}))),r)}}},{key:"iteration",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,e.user.getIdToken(!0);case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(n=t.t0)||void 0===n?void 0:n.code)&&e.schedule(!0),t.abrupt("return");case 10:e.schedule();case 11:case"end":return t.stop()}}),r,null,[[1,6]])})))()}}]),e}(),Ur=function(){"use strict";function e(r,n){t(P)(this,e),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return t(D)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e){return Fr.apply(this,arguments)}function Fr(){return(Fr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(r){var n,i,o,a,s,c,l,f,p,h,d;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return o=e.sent,e.next=7,Pr(r,Sr(i,{idToken:o}));case 7:er(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),s=a.users[0],r._notifyReloadListener(s),c=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?Hr(s.providerUserInfo):[],l=zr(r.providerData,c),f=r.isAnonymous,p=!(r.email&&s.passwordHash||(null==l?void 0:l.length)),h=!!f&&p,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ur(s.createdAt,s.lastLoginAt),isAnonymous:h},Object.assign(r,d);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Wr(){return(Wr=t(a)(t(u).mark((function e(r){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Te(r),e.next=3,jr(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function zr(e,r){var n=e.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return t(F)(n).concat(t(F)(r))}function Hr(e){return e.map((function(e){var t=e.providerId,r=Ht(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function Vr(e,t){return qr.apply(this,arguments)}function qr(){return(qr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(r,n){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,br(r,{},t(a)(t(u).mark((function e(){var i,o,a,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ke({grant_type:"refresh_token",refresh_token:n}).slice(1),o=r.config,a=o.tokenApiHost,s=o.apiKey,c=_r(r,a,"/v1/token","key=".concat(s)),e.next=5,r._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",hr.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jr=function(){"use strict";function e(){t(P)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(D)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){er(e.idToken,"internal-error"),er(void 0!==e.idToken,"internal-error"),er(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,er(r=Lr(t),"internal-error"),er(void 0!==r.exp,"internal-error"),er(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return t(a)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(er(!n.accessToken||n.refreshToken,e,"user-token-expired"),r||!n.accessToken||n.isExpired){t.next=3;break}return t.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){t.next=7;break}return t.next=6,n.refresh(e,n.refreshToken);case 6:return t.abrupt("return",n.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,r){var n=this;return t(a)(t(u).mark((function i(){var o,a,s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Vr(e,r);case 2:o=t.sent,a=o.accessToken,s=o.refreshToken,c=o.expiresIn,n.updateTokensAndExpiration(a,s,Number(c));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return tr("not implemented")}}],[{key:"fromJSON",value:function(t,r){var n=r.refreshToken,i=r.accessToken,o=r.expirationTime,a=new e;return n&&(er("string"==typeof n,"internal-error",{appName:t}),a.refreshToken=n),i&&(er("string"==typeof i,"internal-error",{appName:t}),a.accessToken=i),o&&(er("number"==typeof o,"internal-error",{appName:t}),a.expirationTime=o),a}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e,t){er("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Kr=function(){"use strict";function e(r){t(P)(this,e);var n=r.uid,i=r.auth,o=r.stsTokenManager,a=Ht(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Br(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?t(F)(a.providerData):[],this.metadata=new Ur(a.createdAt||void 0,a.lastLoginAt||void 0)}return t(D)(e,[{key:"getIdToken",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Pr(r,r.stsTokenManager.getToken(r.auth,e));case 2:if(er(i=t.sent,r.auth,"internal-error"),r.accessToken===i){t.next=9;break}return r.accessToken=i,t.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Rr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Wr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(er(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){er(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return t(a)(t(u).mark((function i(){var o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=!1,e.idToken&&e.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(e),o=!0),!r){t.next=5;break}return t.next=5,jr(n);case 5:return t.next=7,n.auth._persistUserIfCurrent(n);case 7:o&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return n=t.sent,t.next=5,Pr(e,Tr(e.auth,{idToken:n}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,r){var n,i,o,a,s,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,p=null!==(i=r.email)&&void 0!==i?i:void 0,h=null!==(o=r.phoneNumber)&&void 0!==o?o:void 0,d=null!==(a=r.photoURL)&&void 0!==a?a:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=r.createdAt)&&void 0!==c?c:void 0,g=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,b=r.uid,w=r.emailVerified,k=r.isAnonymous,x=r.providerData,_=r.stsTokenManager;er(b&&_,t,"internal-error");var I=Jr.fromJSON(this.name,_);er("string"==typeof b,t,"internal-error"),Gr(f,t.name),Gr(p,t.name),er("boolean"==typeof w,t,"internal-error"),er("boolean"==typeof k,t,"internal-error"),Gr(h,t.name),Gr(d,t.name),Gr(v,t.name),Gr(m,t.name),Gr(y,t.name),Gr(g,t.name);var E=new e({uid:b,auth:t,email:p,emailVerified:w,displayName:f,isAnonymous:k,photoURL:d,phoneNumber:h,tenantId:v,stsTokenManager:I,createdAt:y,lastLoginAt:g});return x&&Array.isArray(x)&&(E.providerData=x.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(a)(t(u).mark((function o(){var a,s;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new Jr).updateFromServerResponse(n),s=new e({uid:n.localId,auth:r,stsTokenManager:a,isAnonymous:i}),t.next=5,jr(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),o)})))()}}]),e}(),Yr=function(){"use strict";function e(){t(P)(this,e),this.type="NONE",this.storage={}}return t(D)(e,[{key:"_isAvailable",value:function(){return t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,r){var n=this;return t(a)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.storage[e]=r;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),n)})))()}},{key:"_remove",value:function(e){var r=this;return t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete r.storage[e];case 1:case"end":return t.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yr.type="NONE";var Qr=Yr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var $r=function(){"use strict";function e(r,n,i){t(P)(this,e),this.persistence=r,this.auth=n,this.userKey=i;var o=this.auth,a=o.config,s=o.name;this.fullUserKey=Xr(this.userKey,a.apiKey,s),this.fullPersistenceKey=Xr("persistence",a.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(D)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return n=t.sent,t.abrupt("return",n?Kr._fromJSON(e.auth,n):null);case 4:case"end":return t.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,r.getCurrentUser();case 4:return i=t.sent,t.next=7,r.removeCurrentUser();case 7:if(r.persistence=e,!i){t.next=10;break}return t.abrupt("return",r.setCurrentUser(i));case 10:case"end":return t.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(a)(t(u).mark((function o(){var s,c,l,f,p,h,d,v,m,y,g,b,w;return t(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n.length){o.next=2;break}return o.abrupt("return",new e(ir(Qr),r,i));case 2:return o.next=4,Promise.all(n.map(function(){var e=t(a)(t(u).mark((function e(r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=o.sent.filter((function(e){return e})),c=s[0]||ir(Qr),l=Xr(i,r.config.apiKey,r.name),f=null,p=!0,h=!1,d=void 0,o.prev=9,v=n[Symbol.iterator]();case 11:if(p=(m=v.next()).done){o.next=29;break}return y=m.value,o.prev=13,o.next=16,y._get(l);case 16:if(!(g=o.sent)){o.next=22;break}return b=Kr._fromJSON(r,g),y!==c&&(f=b),c=y,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:p=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),h=!0,d=o.t1;case 35:o.prev=35,o.prev=36,p||null==v.return||v.return();case 38:if(o.prev=38,!h){o.next=41;break}throw d;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(w=s.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&w.length){o.next=46;break}return o.abrupt("return",new e(c,r,i));case 46:if(c=w[0],!f){o.next=50;break}return o.next=50,c._set(l,f.toJSON());case 50:return o.next=52,Promise.all(n.map(function(){var e=t(a)(t(u).mark((function e(r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===c){e.next=8;break}return e.prev=1,e.next=4,r._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return o.abrupt("return",new e(c,r,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(en(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(an(t))return"Blackberry";if(sn(t))return"Webos";if(tn(t))return"Safari";if((t.includes("chrome/")||rn(t))&&!t.includes("edge/"))return"Chrome";if(on(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function en(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he();return/firefox\//i.test(e)}function tn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he();return/crios\//i.test(e)}function nn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he();return/iemobile/i.test(e)}function on(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he();return/android/i.test(e)}function an(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he();return/blackberry/i.test(e)}function sn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he();return/webos/i.test(e)}function un(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function cn(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he();return un(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function ln(){return((e=he()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function fn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he();return un(e)||on(e)||sn(e)||an(e)||/windows phone/i.test(e)||nn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pn(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Zr(he());break;case"Worker":t="".concat(Zr(he()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(xt,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn=function(){"use strict";function e(r){t(P)(this,e),this.auth=r,this.queue=[]}return t(D)(e,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i,o,a,s,c,l,f,p,h,d,v,m,y,g;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.auth.currentUser!==e){t.next=3;break}return t.abrupt("return");case 3:o=[],t.prev=4,a=!0,s=!1,c=void 0,t.prev=6,l=r.queue[Symbol.iterator]();case 8:if(a=(f=l.next()).done){t.next=16;break}return p=f.value,t.next=12,p(e);case 12:p.onAbort&&o.push(p.onAbort);case 13:a=!0,t.next=8;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(6),s=!0,c=t.t0;case 22:t.prev=22,t.prev=23,a||null==l.return||l.return();case 25:if(t.prev=25,!s){t.next=28;break}throw c;case 28:return t.finish(25);case 29:return t.finish(22);case 30:t.next=53;break;case 32:for(t.prev=32,t.t1=t.catch(4),o.reverse(),h=!0,d=!1,v=void 0,t.prev=36,m=o[Symbol.iterator]();!(h=(y=m.next()).done);h=!0){g=y.value;try{g()}catch(e){}}t.next=44;break;case 40:t.prev=40,t.t2=t.catch(36),d=!0,v=t.t2;case 44:t.prev=44,t.prev=45,h||null==m.return||m.return();case 47:if(t.prev=47,!d){t.next=50;break}throw v;case 50:return t.finish(47);case 51:return t.finish(44);case 52:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=t.t1)||void 0===i?void 0:i.message});case 53:case"end":return t.stop()}}),n,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),e}(),dn=function(){"use strict";function e(r,n,i){t(P)(this,e),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mn(this),this.idTokenSubscription=new mn(this),this.beforeStateQueue=new hn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return t(D)(e,[{key:"_initializeWithPersistence",value:function(e,r){r&&(this._popupRedirectResolver=ir(r));var n=this;return this._initializationPromise=this.queue(t(a)(t(u).mark((function i(){var o,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,$r.create(n,e);case 5:if(n.persistenceManager=t.sent,!n._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(o=n._popupRedirectResolver)||void 0===o?void 0:o._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,n._popupRedirectResolver._initialize(n);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(a=n.currentUser)||void 0===a?void 0:a.uid)||null,!n._deleted){t.next=21;break}return t.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(n=t.sent,e.currentUser||n){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!n||e.currentUser.uid!==n.uid){t.next=12;break}return e._currentUser._assign(n),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(n,!0);case 14:case"end":return t.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i,o,a,s,c,l,f;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,r.assertedPersistence.getCurrentUser();case 3:if(o=t.sent,a=o,s=!1,!e||!r.config.authDomain){t.next=15;break}return t.next=9,r.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==a?void 0:a._redirectEventId,t.next=13,r.tryRedirectSignIn(e);case 13:f=t.sent,c&&c!==l||!(null==f?void 0:f.user)||(a=f.user,s=!0);case 15:if(a){t.next=17;break}return t.abrupt("return",r.directlySetCurrentUser(null));case 17:if(a._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,r.beforeStateQueue.runMiddleware(a);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),a=o,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(t.t0)}));case 28:if(!a){t.next=32;break}return t.abrupt("return",r.reloadAndSetCurrentUserOrClear(a));case 32:return t.abrupt("return",r.directlySetCurrentUser(null));case 33:return er(r._popupRedirectResolver,r,"argument-error"),t.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==a._redirectEventId){t.next=38;break}return t.abrupt("return",r.directlySetCurrentUser(a));case 38:return t.abrupt("return",r.reloadAndSetCurrentUserOrClear(a));case 39:case"end":return t.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,r._popupRedirectResolver._completeRedirectFn(r,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,r._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,jr(e);case 4:t.next=10;break;case 6:if(t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(i=t.t0)||void 0===i?void 0:i.code)){t.next=10;break}return t.abrupt("return",r.directlySetCurrentUser(null));case 10:return t.abrupt("return",r.directlySetCurrentUser(e));case 11:case"end":return t.stop()}}),n,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?Te(e):null)&&er(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),t.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return t.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return t(a)(t(u).mark((function i(){return t(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&er(n.tenantId===e.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",n.queue(t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.directlySetCurrentUser(e);case 2:n.notifyAuthListeners();case 3:case"end":return t.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),r)})))()}},{key:"setPersistence",value:function(e){var r=this;return this.queue(t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.assertedPersistence.setPersistence(ir(e));case 2:case"end":return t.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new ve("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,r){var n=this;return t(a)(t(u).mark((function i(){var o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return o=t.sent,t.abrupt("return",null===e?o.removeCurrentUser():o.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.redirectPersistenceManager){t.next=9;break}return er(i=e&&ir(e)||r._popupRedirectResolver,r,"argument-error"),t.next=5,$r.create(r,[ir(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=t.sent,t.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=t.sent;case 9:return t.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return t.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i,o;return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(o=r.redirectUser)||void 0===o?void 0:o._redirectEventId)!==e){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(e){var r=this;return t(a)(t(u).mark((function n(){return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return er(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var r=this;return t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.currentUser&&r.currentUser!==e&&r._currentUser._stopProactiveRefresh(),e&&r.isProactiveRefreshEnabled&&e._startProactiveRefresh(),r.currentUser=e,!e){t.next=8;break}return t.next=6,r.assertedPersistence.setCurrentUser(e);case 6:t.next=10;break;case 8:return t.next=10,r.assertedPersistence.removeCurrentUser();case 10:case"end":return t.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return er(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pn(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n,i,o;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=t(j)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),r.next=5,null===(n=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(o=r.sent)&&(i["X-Firebase-Client"]=o),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e){return Te(e)}var mn=function(){"use strict";function e(r){var n,i,o=this;t(P)(this,e),this.auth=r,this.observer=null,this.addObserver=(i=new Ie((function(e){return o.observer=e}),n)).subscribe.bind(i)}return t(D)(e,[{key:"next",get:function(){return er(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yn=function(){"use strict";function e(r,n){t(P)(this,e),this.providerId=r,this.signInMethod=n}return t(D)(e,[{key:"toJSON",value:function(){return tr("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return tr("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return tr("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return tr("not implemented")}}]),e}();function gn(e,t){return bn.apply(this,arguments)}function bn(){return(bn=t(a)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",yr(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function wn(e,t){return kn.apply(this,arguments)}function kn(){return(kn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kr(r,"POST","/v1/accounts:signInWithPassword",mr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xn(e,t){return _n.apply(this,arguments)}function _n(){return(_n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kr(r,"POST","/v1/accounts:signInWithEmailLink",mr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function In(e,t){return En.apply(this,arguments)}function En(){return(En=t(a)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kr(r,"POST","/v1/accounts:signInWithEmailLink",mr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(e,i,o){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(P)(this,n),(a=r.call(this,"password",o))._email=e,a._password=i,a._tenantId=s,a}return t(D)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var r=this;return t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",wn(e,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",xn(e,{email:r._email,oobCode:r._password}));case 5:Yt(e,"internal-error");case 6:case"end":return t.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(e,r){var n=this;return t(a)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",gn(e,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return t.abrupt("return",In(e,{idToken:r,email:n._email,oobCode:n._password}));case 5:Yt(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(yn);function On(e,t){return Sn.apply(this,arguments)}function Sn(){return(Sn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kr(r,"POST","/v1/accounts:signInWithIdp",mr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(){var e;return t(P)(this,n),(e=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(D)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return On(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,On(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,On(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ke(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yt("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,o=Ht(t,["providerId","signInMethod"]);if(!r||!i)return null;var a=new n(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}}]),n}(yn);function Nn(e,t){return Rn.apply(this,arguments)}function Rn(){return(Rn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",yr(r,"POST","/v1/accounts:sendVerificationCode",mr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Cn(){return(Cn=t(a)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kr(r,"POST","/v1/accounts:signInWithPhoneNumber",mr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ln(){return(Ln=t(a)(t(u).mark((function e(r,n){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,kr(r,"POST","/v1/accounts:signInWithPhoneNumber",mr(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Er(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Pn=t(j)({},"USER_NOT_FOUND","user-not-found");function Dn(){return(Dn=t(a)(t(u).mark((function e(r,n){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",kr(r,"POST","/v1/accounts:signInWithPhoneNumber",mr(r,i),Pn));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(e){var i;return t(P)(this,n),(i=r.call(this,"phone","phone")).params=e,i}return t(D)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Cn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Ln.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Dn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return r||t||i||o?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o}):null}}]),n}(yn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn=function(){"use strict";function e(r){var n,i,o,a,s,u;t(P)(this,e);var c=xe(_e(r)),l=null!==(n=c.apiKey)&&void 0!==n?n:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=c.mode)&&void 0!==o?o:null);er(l&&f&&p,"argument-error"),this.apiKey=l,this.operation=p,this.code=f,this.continueUrl=null!==(a=c.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return t(D)(e,null,[{key:"parseLink",value:function(t){var r=function(e){var t=xe(_e(e)).link,r=t?xe(_e(t)).deep_link_id:null,n=xe(_e(e)).deep_link_id;return(n?xe(_e(n)).link:null)||n||r||t||e}(t);try{return new e(r)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Un=function(){"use strict";function e(){t(P)(this,e),this.providerId=e.PROVIDER_ID}return t(D)(e,null,[{key:"credential",value:function(e,t){return Tn._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=Bn.parseLink(t);return er(r,"argument-error"),Tn._fromEmailAndCode(e,r.code,r.tenantId)}}]),e}();Un.PROVIDER_ID="password",Un.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jn=function(){"use strict";function e(r){t(P)(this,e),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return t(D)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),Fn=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(){var e;return t(P)(this,n),(e=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(D)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(F)(this.scopes)}}]),n}(jn),Wn=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(){return t(P)(this,n),r.call(this,"facebook.com")}return t(D)(n,null,[{key:"credential",value:function(e){return An._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Fn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zn=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(){var e;return t(P)(this,n),(e=r.call(this,"google.com")).addScope("profile"),e}return t(D)(n,null,[{key:"credential",value:function(e,t){return An._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(Fn);zn.GOOGLE_SIGN_IN_METHOD="google.com",zn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hn=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(){return t(P)(this,n),r.call(this,"github.com")}return t(D)(n,null,[{key:"credential",value:function(e){return An._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Fn);Hn.GITHUB_SIGN_IN_METHOD="github.com",Hn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vn=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(){return t(P)(this,n),r.call(this,"twitter.com")}return t(D)(n,null,[{key:"credential",value:function(e,t){return An._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(Fn);Vn.TWITTER_SIGN_IN_METHOD="twitter.com",Vn.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var qn=function(){"use strict";function e(r){t(P)(this,e),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return t(D)(e,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(a)(t(u).mark((function a(){var s,c,l;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Kr._fromIdTokenResponse(r,i,o);case 2:return s=t.sent,c=Jn(i),l=new e({user:s,providerId:c,_tokenResponse:i,operationType:n}),t.abrupt("return",l);case 6:case"end":return t.stop()}}),a)})))()}},{key:"_forOperation",value:function(r,n,i){return t(a)(t(u).mark((function o(){var a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._updateTokensIfNecessary(i,!0);case 2:return a=Jn(i),t.abrupt("return",new e({user:r,providerId:a,_tokenResponse:i,operationType:n}));case 4:case"end":return t.stop()}}),o)})))()}}]),e}();function Jn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gn=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(e,i,o,a){var s,u;return t(P)(this,n),(s=r.call(this,i.code,i.message)).operationType=o,s.user=a,Object.setPrototypeOf(t($)(s),n.prototype),s.customData={appName:e.name,tenantId:null!==(u=e.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:o},s}return t(D)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(de);function Kn(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw Gn._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e,t){return Qn.apply(this,arguments)}function Qn(){return Qn=t(a)(t(u).mark((function e(r,n){var i,o,a=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>2&&void 0!==a[2]&&a[2],e.t0=Pr,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return o=e.sent,e.abrupt("return",qn._forOperation(r,"link",o));case 14:case"end":return e.stop()}}),e)}))),Qn.apply(this,arguments)}function Xn(e,t){return $n.apply(this,arguments)}function $n(){return $n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(r,n){var i,o,a,s,c,l,f,p=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=p.length>2&&void 0!==p[2]&&p[2],a=r.auth,s="reauthenticate",e.prev=4,e.next=7,Pr(r,Kn(a,s,n,r),i);case 7:return er((c=e.sent).idToken,a,"internal-error"),er(l=Lr(c.idToken),a,"internal-error"),f=l.sub,er(r.uid===f,a,"user-mismatch"),e.abrupt("return",qn._forOperation(r,s,c));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(o=e.t0)||void 0===o?void 0:o.code)&&Yt(a,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])}))),$n.apply(this,arguments)}function Zn(e,t){return ei.apply(this,arguments)}function ei(){return ei=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(r,n){var i,o,a,s,c=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],o="signIn",e.next=4,Kn(r,o,n);case 4:return a=e.sent,e.next=7,qn._fromIdTokenResponse(r,o,a);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),ei.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ti(e,t){return yr(e,"POST","/v2/accounts/mfaEnrollment:start",mr(e,t))}new WeakMap;var ri="__sak",ni=function(){"use strict";function e(r,n){t(P)(this,e),this.storageRetriever=r,this.type=n}return t(D)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(ri,"1"),this.storage.removeItem(ri),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ii=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(){var e,i;return t(P)(this,n),(e=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,r){return e.onStorageEvent(t,r)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(tn(i=he())||un(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=fn(),e._shouldAllowMigration=!0,e}return t(D)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var o=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},a=this.storage.getItem(n);ln()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,o=void 0;if(r)try{for(var a,s=Array.from(r)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,r){var i=this,o=this;return t(a)(t(u).mark((function a(){return t(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(jt)(t(zt)(n.prototype),"_set",i).call(o,e,r);case 2:o.localCache[e]=JSON.stringify(r);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(e){var r=this,i=this;return t(a)(t(u).mark((function o(){var a;return t(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(jt)(t(zt)(n.prototype),"_get",r).call(i,e);case 2:return a=o.sent,i.localCache[e]=JSON.stringify(a),o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}},{key:"_remove",value:function(e){var r=this,i=this;return t(a)(t(u).mark((function o(){return t(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(jt)(t(zt)(n.prototype),"_remove",r).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return o.stop()}}),o)})))()}}]),n}(ni);ii.type="LOCAL";var oi=ii,ai=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(){return t(P)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(D)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(ni);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ai.type="SESSION";var si=ai;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){return Promise.all(e.map((r=t(a)(t(u).mark((function e(r){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return r.apply(this,arguments)})));var r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ci=function(){"use strict";function e(r){t(P)(this,e),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(D)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i,o,s,c,l,f,p,h;return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=(i=e).data,s=o.eventId,c=o.eventType,l=o.data,null==(f=r.handlersMap[c])?void 0:f.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:c}),p=Array.from(f).map(function(){var e=t(a)(t(u).mark((function e(r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,l));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.next=9,ui(p);case 9:h=n.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:c,response:h});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var r=this.receivers.find((function(e){return e.isListeningto(t)}));if(r)return r;var n=new e(t);return this.receivers.push(n),n}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function li(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ci.receivers=[];var fi=function(){"use strict";function e(r){t(P)(this,e),this.target=r,this.handlers=new Set}return t(D)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(a)(t(u).mark((function o(){var a,s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,o){var u=li("",20);a.port1.start();var l=setTimeout((function(){o(new Error("unsupported_event"))}),n);c={messageChannel:a,onMessage:function(e){var r=e;if(r.data.eventId===u)switch(r.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(r.data.response);break;default:clearTimeout(l),clearTimeout(s),o(new Error("invalid_response"))}}},i.handlers.add(c),a.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:e,eventId:u,data:r},[a.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return t.stop()}}),o)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hi(){return void 0!==pi().WorkerGlobalScope&&"function"==typeof pi().importScripts}function di(){return vi.apply(this,arguments)}function vi(){return(vi=t(a)(t(u).mark((function e(){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mi="firebaseLocalStorageDb",yi="firebaseLocalStorage",gi="fbase_key",bi=function(){"use strict";function e(r){t(P)(this,e),this.request=r}return t(D)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),e}();function wi(e,t){return e.transaction([yi],t?"readwrite":"readonly").objectStore(yi)}function ki(){var e=indexedDB.deleteDatabase(mi);return new bi(e).toPromise()}function xi(){var e=indexedDB.open(mi,1);return new Promise((function(r,n){e.addEventListener("error",(function(){n(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(yi,{keyPath:gi})}catch(e){n(e)}})),e.addEventListener("success",t(a)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(yi)){t.next=12;break}return i.close(),t.next=5,ki();case 5:return t.t0=r,t.next=8,xi();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:r(i);case 13:case"end":return t.stop()}}),n)}))))}))}function _i(e,t,r){return Ii.apply(this,arguments)}function Ii(){return(Ii=t(a)(t(u).mark((function e(r,n,i){var o,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=wi(r,!0).put((o={},t(j)(o,gi,n),t(j)(o,"value",i),o)),e.abrupt("return",new bi(a).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ei(e,t){return Ti.apply(this,arguments)}function Ti(){return(Ti=t(a)(t(u).mark((function e(r,n){var i,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=wi(r,!1).get(n),e.next=3,new bi(i).toPromise();case 3:return o=e.sent,e.abrupt("return",void 0===o?null:o.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oi(e,t){var r=wi(e,!0).delete(t);return new bi(r).toPromise()}var Si=function(){"use strict";function e(){t(P)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(D)(e,[{key:"_openDb",value:function(){var e=this;return t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,xi();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),r)})))()}},{key:"_withRetries",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,r._openDb();case 5:return o=t.sent,t.next=8,e(o);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",hi()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(a)(t(u).mark((function r(){return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.receiver=ci._getInstance(hi()?self:null),e.receiver._subscribe("keyChanged",function(){var r=t(a)(t(u).mark((function r(n,i){var o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return o=t.sent,t.abrupt("return",{keyProcessed:o.includes(i.key)});case 4:case"end":return t.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(a)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n,i,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,di();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new fi(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(o=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(n=o[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=o[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(e){var r=this;return t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,r.sender._send("keyChanged",{key:e},r.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(a)(t(u).mark((function e(){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,xi();case 5:return r=e.sent,e.next=8,_i(r,ri,"1");case 8:return e.next=10,Oi(r,ri);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var r=this;return t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,r.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,r){var n=this;return t(a)(t(u).mark((function i(){return t(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(t(a)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return _i(t,e,r)}));case 2:return n.localCache[e]=r,t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Ei(t,e)}));case 2:return i=t.sent,r.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),n)})))()}},{key:"_remove",value:function(e){var r=this;return t(a)(t(u).mark((function n(){return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(t(a)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Oi(t,e)}));case 2:return delete r.localCache[e],t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n,i,o,a,s,c,l,f,p,h,d,v,m,y,g,b,w;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=wi(e,!1).getAll();return new bi(t).toPromise()}));case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],o=new Set,a=!0,s=!1,c=void 0,t.prev=10,l=n[Symbol.iterator]();!(a=(f=l.next()).done);a=!0)p=f.value,h=p.fbase_key,d=p.value,o.add(h),JSON.stringify(e.localCache[h])!==JSON.stringify(d)&&(e.notifyListeners(h,d),i.push(h));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,c=t.t0;case 18:t.prev=18,t.prev=19,a||null==l.return||l.return();case 21:if(t.prev=21,!s){t.next=24;break}throw c;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,m=!1,y=void 0,t.prev=27,g=Object.keys(e.localCache)[Symbol.iterator]();!(v=(b=g.next()).done);v=!0)w=b.value,e.localCache[w]&&!o.has(w)&&(e.notifyListeners(w,null),i.push(w));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),m=!0,y=t.t1;case 35:t.prev=35,t.prev=36,v||null==g.return||g.return();case 38:if(t.prev=38,!m){t.next=41;break}throw y;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,o=void 0;if(r)try{for(var a,s=Array.from(r)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(a)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();Si.type="LOCAL";var Ai=Si;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e,t){return yr(e,"POST","/v2/accounts/mfaSignIn:start",mr(e,t))}function Ri(e){return new Promise((function(t,r){var n,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=Qt("internal-error");t.customData=e,r(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(o)}))}function Ci(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ci("rcb"),new lr(3e4,6e4);var Li="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e,t,r){return Di.apply(this,arguments)}function Di(){return(Di=t(a)(t(u).mark((function e(r,n,i){var o,a,s,c,l,f,p,h;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(a=e.sent,e.prev=4,er("string"==typeof a,r,"argument-error"),er(i.type===Li,r,"argument-error"),!("session"in(s="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(c=s.session,!("phoneNumber"in s)){e.next=19;break}return er("enroll"===c.type,r,"internal-error"),e.next=15,ti(r,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:a}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return er("signin"===c.type,r,"internal-error"),er(f=(null===(o=s.multiFactorHint)||void 0===o?void 0:o.uid)||s.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,Ni(r,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:a}});case 24:return p=e.sent,e.abrupt("return",p.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Nn(r,{phoneNumber:s.phoneNumber,recaptchaToken:a});case 30:return h=e.sent.sessionInfo,e.abrupt("return",h);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mi=function(){"use strict";function e(r){t(P)(this,e),this.providerId=e.PROVIDER_ID,this.auth=vn(r)}return t(D)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Pi(this.auth,e,Te(t))}}],[{key:"credential",value:function(e,t){return Mn._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var r=t;return e.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?Mn._fromTokenResponse(r,n):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bi(e,t){return t?ir(t):(er(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mi.PROVIDER_ID="phone",Mi.PHONE_SIGN_IN_METHOD="phone";var Ui=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(e){var i;return t(P)(this,n),(i=r.call(this,"custom","custom")).params=e,i}return t(D)(n,[{key:"_getIdTokenResponse",value:function(e){return On(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return On(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return On(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(yn);function ji(e){return Zn(e.auth,new Ui(e),e.bypassAuthState)}function Fi(e){var t=e.auth,r=e.user;return er(r,t,"internal-error"),Xn(r,new Ui(e),e.bypassAuthState)}function Wi(e){return zi.apply(this,arguments)}function zi(){return(zi=t(a)(t(u).mark((function e(r){var n,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,er(i=r.user,n,"internal-error"),e.abrupt("return",Yn(i,new Ui(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hi=function(){"use strict";function e(r,n,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(P)(this,e),this.auth=r,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return t(D)(e,[{key:"execute",value:function(){var e,r=this;return new Promise((e=t(a)(t(u).mark((function e(n,i){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,r.resolver._initialize(r.auth);case 4:return r.eventManager=e.sent,e.next=7,r.onExecution();case 7:r.eventManager.registerConsumer(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,r){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i,o,a,s,c,l,f;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,o=e.sessionId,a=e.postBody,s=e.tenantId,c=e.error,l=e.type,!c){t.next=4;break}return r.reject(c),t.abrupt("return");case 4:return f={auth:r.auth,requestUri:i,sessionId:o,tenantId:s||void 0,postBody:a||void 0,user:r.user,bypassAuthState:r.bypassAuthState},t.prev=5,t.t0=r,t.next=9,r.getIdpTask(l)(f);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),r.reject(t.t2);case 16:case"end":return t.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ji;case"linkViaPopup":case"linkViaRedirect":return Wi;case"reauthViaPopup":case"reauthViaRedirect":return Fi;default:Yt(this.auth,"internal-error")}}},{key:"resolve",value:function(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Vi=new lr(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e,t,r){return Ji.apply(this,arguments)}function Ji(){return(Ji=t(a)(t(u).mark((function e(r,n,i){var o,a,s;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=vn(r),$t(r,n,jn),a=Bi(o,i),s=new Gi(o,"signInViaPopup",n,a),e.abrupt("return",s.executeNotNull());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Gi=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(e,i,o,a,s){var u;return t(P)(this,n),(u=r.call(this,e,i,a,s)).provider=o,u.authWindow=null,u.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=t($)(u),u}return t(D)(n,[{key:"executeNotNull",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return er(n=t.sent,e.auth,"internal-error"),t.abrupt("return",n);case 5:case"end":return t.stop()}}),r)})))()}},{key:"onExecution",value:function(){var e=this;return t(a)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return rr(1===e.filter.length,"Popup operations only handle one event"),n=li(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],n);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=n,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(Qt(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Qt(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(Qt(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Vi.get())};t()}}]),n}(Hi);Gi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ki=new Map,Yi=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(e,i){var o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(P)(this,n),(o=r.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a)).eventId=null,o}return t(D)(n,[{key:"execute",value:function(){var e=this,r=this;return t(a)(t(u).mark((function i(){var o,a;return t(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o=Ki.get(r.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Qi(r.resolver,r.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(jt)(t(zt)(n.prototype),"execute",e).call(r);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:a=i.t0,o=function(){return Promise.resolve(a)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),o=function(){return Promise.reject(i.t1)};case 20:Ki.set(r.auth._key(),o);case 21:return r.bypassAuthState||Ki.set(r.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",o());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var r=this,i=this,o=function(){return t(jt)(t(zt)(n.prototype),"onAuthEvent",r)};return t(a)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",o().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(n=t.sent)){t.next=16;break}return i.user=n,t.abrupt("return",o().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),r)})))()}},{key:"onExecution",value:function(){return t(a)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),n}(Hi);function Qi(e,t){return Xi.apply(this,arguments)}function Xi(){return(Xi=t(a)(t(u).mark((function e(r,n){var i,o,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=eo(n),o=Zi(r),e.next=4,o._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,o._get(i);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,o._remove(i);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $i(e,t){Ki.set(e._key(),t)}function Zi(e){return ir(e._redirectPersistence)}function eo(e){return Xr("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e,t){return ro.apply(this,arguments)}function ro(){return ro=t(a)(t(u).mark((function e(r,n){var i,o,a,s,c,l=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],o=vn(r),a=Bi(o,n),s=new Yi(o,a,i),e.next=6,s.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,o._persistUserIfCurrent(c.user);case 11:return e.next=13,o._setRedirectUser(null,n);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)}))),ro.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var no=function(){"use strict";function e(r){t(P)(this,e),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(D)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oo(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!oo(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qt(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(io(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(io(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function io(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function oo(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function ao(e){return so.apply(this,arguments)}function so(){return so=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(u).mark((function e(r){var n,i=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",yr(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),e)}))),so.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var uo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,co=/^https?/;function lo(){return(lo=t(a)(t(u).mark((function e(r){var n,i,o,a,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ao(r);case 4:n=e.sent.authorizedDomains,i=!0,o=!1,a=void 0,e.prev=6,s=n[Symbol.iterator]();case 8:if(i=(c=s.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!fo(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),o=!0,a=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!o){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Yt(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function fo(e){var t=ar(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===i}if(!co.test(n))return!1;if(uo.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var po=new lr(3e4,6e4);function ho(){var e=pi().___jsl,r=!0,n=!1,i=void 0;if(null==e?void 0:e.H)try{for(var o,a=Object.keys(e.H)[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=o.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(F)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}}var vo=null;function mo(e){return vo=vo||function(e){return new Promise((function(t,r){var n,i,o;function a(){ho(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){ho(),r(Qt(e,"network-request-failed"))},timeout:po.get()})}if(null===(i=null===(n=pi().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=pi().gapi)||void 0===o?void 0:o.load)){var s=Ci("iframefcb");return pi()[s]=function(){gapi.load?a():r(Qt(e,"network-request-failed"))},Ri("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}a()}})).catch((function(e){throw vo=null,e}))}(e),vo}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yo=new lr(5e3,15e3),go={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wo(e){var t=e.config;er(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?fr(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:xt},i=bo.get(e.config.apiHost);i&&(n.eid=i);var o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),"".concat(r,"?").concat(ke(n).slice(1))}function ko(e){return xo.apply(this,arguments)}function xo(){return xo=t(a)(t(u).mark((function e(r){var n,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,mo(r);case 2:return n=e.sent,er(i=pi().gapi,r,"internal-error"),e.abrupt("return",n.open({where:document.body,url:wo(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:go,dontclear:!0},(function(e){return new Promise((n=t(a)(t(u).mark((function n(i,o){var a,s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){pi().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:a=Qt(r,"network-request-failed"),s=pi().setTimeout((function(){o(a)}),yo.get()),e.ping(c).then(c,(function(){o(a)}));case 7:case"end":return t.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return e.stop()}}),e)}))),xo.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _o={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Io="_blank",Eo="http://localhost",To=function(){"use strict";function e(r){t(P)(this,e),this.window=r,this.associatedEvent=null}return t(D)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Oo(e,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},_o),{width:i.toString(),height:o.toString(),top:a,left:s}),l=he().toLowerCase();n&&(u=rn(l)?Io:n),en(l)&&(r=r||Eo,c.scrollbars="yes");var f=Object.entries(c).reduce((function(e,r){var n=t(J)(r,2),i=n[0],o=n[1];return"".concat(e).concat(i,"=").concat(o,",")}),"");if(cn(l)&&"_self"!==u)return So(r||"",u),new To(null);var p=window.open(r||"",u,f);er(p,e,"popup-blocked");try{p.focus()}catch(e){}return new To(p)}function So(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ao="__/auth/handler",No="emulator/auth/handler";function Ro(e,r,n,i,o,a){er(e.config.authDomain,e,"auth-domain-config-required"),er(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:xt,eventId:o};if(r instanceof jn){r.setDefaultLanguage(e.languageCode),s.providerId=r.providerId||"",ge(r.getCustomParameters())||(s.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,p=Object.entries(a||{})[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var h=t(J)(f.value,2),d=h[0],v=h[1];s[d]=v}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}}if(r instanceof Fn){var m=r.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}e.tenantId&&(s.tid=e.tenantId);var y,g,b=s,w=!0,k=!1,x=void 0;try{for(var _,I=Object.keys(b)[Symbol.iterator]();!(w=(_=I.next()).done);w=!0){var E=_.value;void 0===b[E]&&delete b[E]}}catch(e){k=!0,x=e}finally{try{w||null==I.return||I.return()}finally{if(k)throw x}}return"".concat((y=e,g=y.config,g.emulator?fr(g,No):"https://".concat(g.authDomain,"/").concat(Ao)),"?").concat(ke(b).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Co="webStorageSupport",Lo=function(){"use strict";function e(){t(P)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=si,this._completeRedirectFn=to,this._overrideRedirectResult=$i}return t(D)(e,[{key:"_openPopup",value:function(e,r,n,i){var o=this;return t(a)(t(u).mark((function a(){var s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return rr(null===(s=o.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),c=Ro(e,r,n,ar(),i),t.abrupt("return",Oo(e,c,li()));case 4:case"end":return t.stop()}}),a)})))()}},{key:"_openRedirect",value:function(e,r,n,i){var o=this;return t(a)(t(u).mark((function a(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o._originValidation(e);case 2:return a=Ro(e,r,n,ar(),i),pi().location.href=a,t.abrupt("return",new Promise((function(){})));case 4:case"end":return t.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,o=n.promise;return i?Promise.resolve(i):(rr(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[r]={promise:a},a.catch((function(){delete t.eventManagers[r]})),a}},{key:"initAndGetManager",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ko(e);case 2:return i=t.sent,o=new no(e),i.register("authEvent",(function(t){return er(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:o.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[e._key()]={manager:o},r.iframes[e._key()]=i,t.abrupt("return",o);case 8:case"end":return t.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Co,{type:Co},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),Yt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return lo.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return fn()||tn()||un()}}]),e}(),Po=Lo,Do=function(e){"use strict";t(Z)(n,e);var r=t(se)(n);function n(e){var i;return t(P)(this,n),(i=r.call(this,"phone")).credential=e,i}return t(D)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return yr(e,"POST","/v2/accounts/mfaEnrollment:finalize",mr(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return yr(e,"POST","/v2/accounts/mfaSignIn:finalize",mr(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function e(r){t(P)(this,e),this.factorId=r}return t(D)(e,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return tr("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){t(P)(this,e)}return t(D)(e,null,[{key:"assertion",value:function(e){return Do._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var Mo,Bo="@firebase/auth",Uo="0.20.6",jo=function(){"use strict";function e(r){t(P)(this,e),this.auth=r,this.internalListeners=new Map}return t(D)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var r=this;return t(a)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.assertAuthConfigured(),t.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,r.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){er(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t(),t=gt(e,"auth");return t.isInitialized()?t.getImmediate():or(e,{popupRedirectResolver:Po,persistence:[Ai,oi,si]})}Mo="Browser",yt(new Oe("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=n.options,a=o.apiKey,s=o.authDomain;return function(e,t){er(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),er(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:a,authDomain:s,clientPlatform:Mo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pn(Mo)},i=new dn(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(ir);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),yt(new Oe("auth-internal",(function(e){var t=vn(e.getProvider("auth").getImmediate());return new jo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),It(Bo,Uo,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Mo)),It(Bo,Uo,"esm2017");var Wo;function zo(e){var r=e.displayName,n=(e.photoURL,e.email);return'<img class="login__img" src='.concat(t(Wo)," alt='Logo' >\n<p class=\"login__name\">").concat(r,'<span class="login__email">').concat(n,'</span></p>\n        <button id ="log-out" class="login__btn log-out__btn" type = "button" >Log out</ button> ')}Wo=o("aNJCr").getBundleURL("9p9yL")+o("iE7OH").resolve("i2hMd");var Ho,Vo=new zn,qo=(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var r=t;t={name:r}}var n=Object.assign({name:pt,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw wt.create("bad-app-name",{appName:String(i)});var o=dt.get(i);if(o){if(be(e,o.options)&&be(n,o.config))return o;throw wt.create("duplicate-app",{appName:i})}var a=new Ce(i),s=!0,u=!1,c=void 0;try{for(var l,f=vt.values()[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var p=l.value;a.addComponent(p)}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}var h=new kt(e,n,a);dt.set(i,h)}({apiKey:"AIzaSyB4nCcf0Zx2nZ8gPzJiQLIYSUjZfb0eFbA",authDomain:"hot-movies-b8689.firebaseapp.com",projectId:"hot-movies-b8689",storageBucket:"hot-movies-b8689.appspot.com",messagingSenderId:"394776065340",appId:"1:394776065340:web:ea4ab3f36c65dad4949a39"}),"user-auth-data"),Jo=document.querySelector(".js-login"),Go=document.querySelector(".header__box");function Ko(e){e?(Jo.innerHTML=zo(e),Qo(),Go.classList.add("header__box--margin")):(Jo.innerHTML='<button id="login-btn" class="login__btn" type="button">Login</button>',Yo())}function Yo(){document.querySelector("#login-btn").addEventListener("click",Xo)}function Qo(){document.querySelector("#log-out").addEventListener("click",(function(){localStorage.removeItem(qo),Jo.innerHTML='<button id="login-btn" class="login__btn" type="button">Login</button>',Go.classList.remove("header__box--margin"),Yo()}))}function Xo(){qi(Fo(),Vo).then((function(e){zn.credentialFromResult(e).accessToken;var t,r,n=e.user;if(n.emailVerified){var i={displayName:n.displayName,email:n.email,photoURL:n.photoURL};t=qo,r=i,localStorage.setItem(t,JSON.stringify(r)),Ko(i),Qo()}})).catch((function(e){e.code,e.message,e.customData.email,zn.credentialFromError(e)}))}Ko((Ho=qo,JSON.parse(localStorage.getItem(Ho)))),window.addEventListener("scroll",t(v)((function(){return Zo.apply(this,arguments)}),700));var $o=1;function Zo(){return(Zo=t(a)(t(u).mark((function e(){var r,n,i,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=document.body.offsetHeight,n=window.innerHeight,i=window.scrollY,!(i+n>=r-n/4)){e.next=26;break}if(ra.homeLink.classList.contains("nav__link--active")){e.next=9;break}return e.abrupt("return");case 9:if(!na.query){e.next=21;break}if(na.getTotalPages()!==$o){e.next=12;break}return e.abrupt("return");case 12:return na.incrementPage(),e.next=15,na.fetchFindMoviesBySearchQuery();case 15:o=e.sent,$o+=1,console.log("запрос"),ga(o.data.results,ia.data.genres),e.next=26;break;case 21:return na.incrementPage(),e.next=24,na.fetchApiMoviesTrend();case 24:ga(e.sent.data.results,ia.data.genres);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ea;ea=o("aNJCr").getBundleURL("9p9yL")+o("iE7OH").resolve("dwpwv"),p.Notify.init({position:"right-bottom",clickToClose:!0});var ta=document.querySelector(".js-box");ta.innerHTML='<label class="search">\n          <input type="text" class="search__input" placeholder="Movie search" />\n        </label>';var ra={ulList:document.querySelector(".movies"),input:document.querySelector(".search__input"),linkLib:document.querySelector("#library"),homeLink:document.querySelector("#nav_home"),header:document.querySelector("header"),modalBackdrop:document.querySelector(".backdrop"),modalBtnClose:document.querySelector(".modal__close"),modal:document.querySelector(".modal"),errorSearchMassege:document.querySelector(".error-massege"),backdrop:document.querySelector(".backdrop"),scrollTopBtn:document.querySelector(".isShowBtn")},na=new U;ra.input.addEventListener("input",t(h)((function(e){return da.apply(this,arguments)}),300)),ra.linkLib.addEventListener("click",(function(e){e.preventDefault(),ra.ulList.addEventListener("click",Ia),ra.errorSearchMassege.classList.contains("error-massege--visible")&&ra.errorSearchMassege.classList.remove("error-massege--visible");if(!ua(sa))return void p.Notify.failure("Login to your account!");ta.innerHTML="",ta.innerHTML='<button type="button" class="btn btn-watched btn--position">WATCHED</button>\n    <button type="button" id=\'btn-queue\' class="btn ">QUEUE</button>',ra.homeLink.classList.remove("nav__link--active"),ra.linkLib.classList.add("nav__link--active"),ra.header.classList.add("header-img");var t={buttonWached:document.querySelector(".btn-watched"),buttonQueue:document.querySelector("#btn-queue")};t.buttonWached.addEventListener("click",(function(){return function(e){e.buttonQueue.classList.remove("btn-watched"),e.buttonWached.classList.add("btn-watched"),ra.ulList.removeEventListener("click",Ea),ra.ulList.addEventListener("click",Ia);var t=ua(oa);if(t<1)return ra.ulList.innerHTML="Unfortunately your list is empty, please add movies.";ra.ulList.innerHTML=ya(t),_a(document.querySelectorAll(".movies__item"))}(t)})),t.buttonQueue.addEventListener("click",(function(){return function(e){e.buttonWached.classList.remove("btn-watched"),e.buttonQueue.classList.add("btn-watched"),ra.ulList.removeEventListener("click",Ia),ra.ulList.addEventListener("click",Ea);var t=ua(aa);if(t.length<1)return ra.ulList.innerHTML="Unfortunately your list is empty, please add movies.";ra.ulList.innerHTML=ya(t),_a(document.querySelectorAll(".movies__item"))}(t)})),ra.ulList.innerHTML=ya(ua(oa)),_a(document.querySelectorAll(".movies__item"))})),document.addEventListener("scroll",t(v)((function(){console.log(window.scrollY),window.scrollY>400?ra.scrollTopBtn.classList.remove("isShowBtn__hide"):window.scrollY<400&&ra.scrollTopBtn.classList.add("isShowBtn__hide")}),300)),ra.ulList.addEventListener("click",(function(e){return pa.apply(this,arguments)})),ra.scrollTopBtn.addEventListener("click",(function(){window.scrollTo(0,0)}));var ia=[];!function(){va.apply(this,arguments)}();var oa="watched-movies",aa="queue-movies",sa="user-auth-data";function ua(e){return JSON.parse(localStorage.getItem(e))}function ca(e,t){localStorage.setItem(e,JSON.stringify(t))}function la(e,t){if(ua(sa)){var r=ua(oa)||[];return wa(t.buttonAddWathed,"ADDED TO WATCH"),-1===r.findIndex((function(t){return t.id===e.data.id}))?(r.push(e.data),ca(oa,r),p.Notify.success("Movie added successfully"),void(t.buttonAddWathed.disabled=!0)):void 0}p.Notify.failure("Login to your account!")}function fa(e,t){if(ua(sa)){var r=ua(aa)||[];return wa(t.buttonAddQueue,"ADDED TO QUEUE"),-1===r.findIndex((function(t){return t.id===e.data.id}))?(r.push(e.data),ca(aa,r),void p.Notify.success("Movie added successfully")):void 0}p.Notify.failure("Login to your account!")}function pa(){return(pa=t(a)(t(u).mark((function e(r){var n,i,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("IMG"===r.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return ra.modal.innerHTML="",ha(),ra.backdrop.addEventListener("click",ka),document.addEventListener("keydown",xa),e.next=8,na.fetchOneMovie(r.target.id);case 8:n=e.sent,i=ma(n.data),ra.modal.innerHTML=i,o={buttonAddWathed:document.querySelector(".card__button-watch"),buttonAddQueue:document.querySelector(".card__button-queue")},ua(sa)&&(ba(n,oa)&&wa(o.buttonAddWathed,"ADDED TO WATCH"),ba(n,aa)&&wa(o.buttonAddQueue,"ADDED TO QUEUE")),o.buttonAddWathed.addEventListener("click",(function(){return la(n,o)})),o.buttonAddQueue.addEventListener("click",(function(){return fa(n,o)}));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ha(e){ra.modalBackdrop.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}function da(){return(da=t(a)(t(u).mark((function e(r){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return na.resetPage(),na.resetTotalPages(),na.query=r.target.value,ra.errorSearchMassege.classList.contains("error-massege--visible")&&ra.errorSearchMassege.classList.remove("error-massege--visible"),e.prev=4,e.next=7,na.fetchFindMoviesBySearchQuery();case 7:if(n=e.sent,console.log(n),0!==n.data.results.length){e.next=11;break}return e.abrupt("return",ra.errorSearchMassege.classList.add("error-massege--visible"));case 11:na.saveTotalPages(n.data.total_pages),ra.ulList.innerHTML="",ga(n.data.results,ia.data.genres),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}function va(){return(va=t(a)(t(u).mark((function e(){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,na.fetchGanresID();case 2:return ia=e.sent,console.log(ia),e.next=6,na.fetchApiMoviesTrend();case 6:r=e.sent,console.log(r.data),ga(r.data.results,ia.data.genres);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ma(e){var r=e.genres,n=e.overview,i=e.poster_path,o=e.release_date,a=e.title,s=e.vote_average,u=e.vote_count,c=r.map((function(e){return e.name})).join(", "),l=o?o.slice(0,4):"unknown";return'<div class="card">\n  <div class="card__img-box">\n    <img src='.concat(i?"https://image.tmdb.org/t/p/original"+i:t(ea)," alt=").concat(a,' class="card__img" />\n  </div>\n  <div class="card__flex">\n  <div class="card__box-descr">\n    <h2 class="card__title">').concat(a,'</h2>\n    <ul class="card__list">\n      <li class="card__item">\n        <p class="card__category">Vote / Votes:</p>\n        <p class="card__value"><span class="movies__rating">').concat(s.toFixed(1),"</span> / ").concat(u,'</p>\n      </li>\n      <li class="card__item">\n        <p class="card__category">Release year:</p>\n        <p class="card__value">').concat(l,' </p>\n      </li>\n\n      <li class="card__item">\n        <p class="card__category">Genre:</p>\n        <p class="card__value">').concat(c,'</p>\n      </li>\n    </ul>\n  </div>\n  <div class="card__box-about">\n    <p class="card__about">ABOUT</p>\n    <p class="card__descr">').concat(n,'</p>\n  </div>\n  <div class="card__box-button">\n    <button type="button" class="btn btn-comm card__button-watch">ADD TO WATCH</button>\n    <button type="button" class="btn btn-comm card__button-queue">ADD TO QUEUE</button>\n  </div>\n</div>\n</div>')}function ya(e){return e.map((function(e){var r=e.genres,n=e.poster_path,i=e.release_date,o=e.title,a=e.vote_average,s=e.id,u=r.map((function(e){return e.name})).join(", "),c=n?"https://image.tmdb.org/t/p/original"+n:t(ea),l=i?i.slice(0,4):"unknown";return'<li class="movies__item" id='.concat(s,">\n\n    <img id='").concat(s,"' src=").concat(c," alt=").concat(o,' class="movies__img">\n    <h3 class="movies__title">').concat(o,'</h3>\n    <p class="movies__subtitle">').concat(u," | ").concat(l,'<span class="movies__rating" >').concat(a.toFixed(1),"</span></p>\n\n</li>")})).join("")}function ga(e,r){console.log(e);var n=e.map((function(e){var n=e.original_title,i=e.genre_ids,o=e.release_date,a=e.vote_average,s=e.poster_path,u=e.id,c=[],l=(i.map((function(e){return c.push(r.find((function(t){return t.id===e})).name)})),s?"https://image.tmdb.org/t/p/original"+s:t(ea)),f=o?o.slice(0,4):"unknown";return'<li class="movies__item" >\n\n    <img id=\''.concat(u,"' src=").concat(l," alt=").concat(n,' class="movies__img">\n    <h3 class="movies__title">').concat(n,'</h3>\n    <p class="movies__subtitle">').concat(c.join(", ")," | ").concat(f,'</p>\n      <p class="movies__rating-name">Rating:<span class="movies__rating">').concat(a.toFixed(1)," </span></p>\n\n</li>")}));ra.ulList.insertAdjacentHTML("beforeend",n.join(""))}function ba(e,t){var r=ua(t);if(r)return r.some((function(t){return t.id===e.data.id}))}function wa(e,t){e.disabled=!0,e.classList.add("is-disabled"),e.textContent=t}function ka(e){e.target!==e.currentTarget&&e.target!==ra.modalBtnClose||ha()}function xa(e){"Escape"===e.code&&(ha(),document.removeEventListener("keydown",xa))}function _a(e){e.forEach((function(e){return e.insertAdjacentHTML("beforeend",(t=e.id,"<button id =".concat(t,' class="delete__btn" type="button">X</button>')));var t}))}function Ia(e){var t=ua(oa);if("BUTTON"===e.target.nodeName){var r=Number(e.target.id),n=t.findIndex((function(e){return e.id===r}));document.getElementById("".concat(r)).remove(),t.splice(n,1);ca(oa,t)}}function Ea(e){var t=ua(aa);if("BUTTON"===e.target.nodeName){var r=Number(e.target.id),n=t.findIndex((function(e){return e.id===r}));document.getElementById("".concat(r)).remove(),t.splice(n,1);ca(aa,t)}}}();
//# sourceMappingURL=index.5e77a5a5.js.map
