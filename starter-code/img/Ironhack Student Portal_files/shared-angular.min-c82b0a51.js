!function(t){"use strict"
function e(t){return w(t)?(b(t.objectMaxDepth)&&(yi.objectMaxDepth=n(t.objectMaxDepth)?t.objectMaxDepth:NaN),void(b(t.urlErrorParamsEnabled)&&P(t.urlErrorParamsEnabled)&&(yi.urlErrorParamsEnabled=t.urlErrorParamsEnabled))):yi}function n(t){return S(t)&&t>0}function r(t,e){e=e||Error
var n="https://errors.angularjs.org/1.8.2/",r=n.replace(".","\\.")+"[\\s\\S]*",i=new RegExp(r,"g")
return function(){var r,o,a=arguments[0],s=arguments[1],u="["+(t?t+":":"")+a+"] ",c=K(arguments,2).map(function(t){return At(t,yi.objectMaxDepth)})
if(u+=s.replace(/\{\d+\}/g,function(t){var e=+t.slice(1,-1)
return e<c.length?c[e].replace(i,""):t}),u+="\n"+n+(t?t+"/":"")+a,yi.urlErrorParamsEnabled)for(o=0,r="?";o<c.length;o++,r="&")u+=r+"p"+o+"="+encodeURIComponent(c[o])
return new e(u)}}function i(t){if(null==t||M(t))return!1
if(k(t)||C(t)||vi&&t instanceof vi)return!0
var e="length"in Object(t)&&t.length
return S(e)&&(e>=0&&e-1 in t||"function"==typeof t.item)}function o(t,e,n){var r,a
if(t)if(O(t))for(r in t)"prototype"!==r&&"length"!==r&&"name"!==r&&t.hasOwnProperty(r)&&e.call(n,t[r],r,t)
else if(k(t)||i(t)){var s="object"!=typeof t
for(r=0,a=t.length;r<a;r++)(s||r in t)&&e.call(n,t[r],r,t)}else if(t.forEach&&t.forEach!==o)t.forEach(e,n,t)
else if(x(t))for(r in t)e.call(n,t[r],r,t)
else if("function"==typeof t.hasOwnProperty)for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r,t)
else for(r in t)xi.call(t,r)&&e.call(n,t[r],r,t)
return t}function a(t,e,n){for(var r=Object.keys(t).sort(),i=0;i<r.length;i++)e.call(n,t[r[i]],r[i])
return r}function s(t){return function(e,n){t(n,e)}}function u(){return++Vi}function c(t,e){e?t.$$hashKey=e:delete t.$$hashKey}function l(t,e,n){for(var r=t.$$hashKey,i=0,o=e.length;i<o;++i){var a=e[i]
if(w(a)||O(a))for(var s=Object.keys(a),u=0,f=s.length;u<f;u++){var h=s[u],d=a[h]
n&&w(d)?E(d)?t[h]=new Date(d.valueOf()):T(d)?t[h]=new RegExp(d):d.nodeName?t[h]=d.cloneNode(!0):U(d)?t[h]=d.clone():"__proto__"!==h&&(w(t[h])||(t[h]=k(d)?[]:{}),l(t[h],[d],!0)):t[h]=d}}return c(t,r),t}function f(t){return l(t,Ei.call(arguments,1),!1)}function h(t){return l(t,Ei.call(arguments,1),!0)}function d(t){return parseInt(t,10)}function p(t,e){return f(Object.create(t),e)}function $(){}function v(t){return t}function m(t){return function(){return t}}function g(t){return O(t.toString)&&t.toString!==Oi}function y(t){return"undefined"==typeof t}function b(t){return"undefined"!=typeof t}function w(t){return null!==t&&"object"==typeof t}function x(t){return null!==t&&"object"==typeof t&&!Ti(t)}function C(t){return"string"==typeof t}function S(t){return"number"==typeof t}function E(t){return"[object Date]"===Oi.call(t)}function k(t){return Array.isArray(t)||t instanceof Array}function A(t){var e=Oi.call(t)
switch(e){case"[object Error]":return!0
case"[object Exception]":return!0
case"[object DOMException]":return!0
default:return t instanceof Error}}function O(t){return"function"==typeof t}function T(t){return"[object RegExp]"===Oi.call(t)}function M(t){return t&&t.window===t}function D(t){return t&&t.$evalAsync&&t.$watch}function V(t){return"[object File]"===Oi.call(t)}function N(t){return"[object FormData]"===Oi.call(t)}function j(t){return"[object Blob]"===Oi.call(t)}function P(t){return"boolean"==typeof t}function R(t){return t&&O(t.then)}function I(t){return t&&S(t.length)&&ji.test(Oi.call(t))}function L(t){return"[object ArrayBuffer]"===Oi.call(t)}function U(t){return!(!t||!(t.nodeName||t.prop&&t.attr&&t.find))}function _(t){var e,n={},r=t.split(",")
for(e=0;e<r.length;e++)n[r[e]]=!0
return n}function q(t){return Ci(t.nodeName||t[0]&&t[0].nodeName)}function F(t,e){return Array.prototype.indexOf.call(t,e)!==-1}function H(t,e){var n=t.indexOf(e)
return n>=0&&t.splice(n,1),n}function B(t,e,r){function i(t,e,n){if(n--,n<0)return"..."
var r,i=e.$$hashKey
if(k(t))for(var o=0,s=t.length;o<s;o++)e.push(a(t[o],n))
else if(x(t))for(r in t)e[r]=a(t[r],n)
else if(t&&"function"==typeof t.hasOwnProperty)for(r in t)t.hasOwnProperty(r)&&(e[r]=a(t[r],n))
else for(r in t)xi.call(t,r)&&(e[r]=a(t[r],n))
return c(e,i),e}function a(t,e){if(!w(t))return t
var n=u.indexOf(t)
if(n!==-1)return l[n]
if(M(t)||D(t))throw Mi("cpws","Can't copy! Making copies of Window or Scope instances is not supported.")
var r=!1,o=s(t)
return void 0===o&&(o=k(t)?[]:Object.create(Ti(t)),r=!0),u.push(t),l.push(o),r?i(t,o,e):o}function s(t){switch(Oi.call(t)){case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Float32Array]":case"[object Float64Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return new t.constructor(a(t.buffer),t.byteOffset,t.length)
case"[object ArrayBuffer]":if(!t.slice){var e=new ArrayBuffer(t.byteLength)
return new Uint8Array(e).set(new Uint8Array(t)),e}return t.slice(0)
case"[object Boolean]":case"[object Number]":case"[object String]":case"[object Date]":return new t.constructor(t.valueOf())
case"[object RegExp]":var n=new RegExp(t.source,t.toString().match(/[^\/]*$/)[0])
return n.lastIndex=t.lastIndex,n
case"[object Blob]":return new t.constructor([t],{type:t.type})}if(O(t.cloneNode))return t.cloneNode(!0)}var u=[],l=[]
if(r=n(r)?r:NaN,e){if(I(e)||L(e))throw Mi("cpta","Can't copy! TypedArray destination cannot be mutated.")
if(t===e)throw Mi("cpi","Can't copy! Source and destination are identical.")
return k(e)?e.length=0:o(e,function(t,n){"$$hashKey"!==n&&delete e[n]}),u.push(t),l.push(e),i(t,e,r)}return a(t,r)}function z(t,e){return t===e||t!==t&&e!==e}function W(t,e){if(t===e)return!0
if(null===t||null===e)return!1
if(t!==t&&e!==e)return!0
var n,r,i,o=typeof t,a=typeof e
if(o===a&&"object"===o){if(!k(t)){if(E(t))return!!E(e)&&z(t.getTime(),e.getTime())
if(T(t))return!!T(e)&&t.toString()===e.toString()
if(D(t)||D(e)||M(t)||M(e)||k(e)||E(e)||T(e))return!1
i=xt()
for(r in t)if("$"!==r.charAt(0)&&!O(t[r])){if(!W(t[r],e[r]))return!1
i[r]=!0}for(r in e)if(!(r in i)&&"$"!==r.charAt(0)&&b(e[r])&&!O(e[r]))return!1
return!0}if(!k(e))return!1
if((n=t.length)===e.length){for(r=0;r<n;r++)if(!W(t[r],e[r]))return!1
return!0}}return!1}function G(t,e,n){return t.concat(Ei.call(e,n))}function K(t,e){return Ei.call(t,e||0)}function J(t,e){var n=arguments.length>2?K(arguments,2):[]
return!O(e)||e instanceof RegExp?e:n.length?function(){return arguments.length?e.apply(t,G(n,arguments,0)):e.apply(t,n)}:function(){return arguments.length?e.apply(t,arguments):e.call(t)}}function Y(e,n){var r=n
return"string"==typeof e&&"$"===e.charAt(0)&&"$"===e.charAt(1)?r=void 0:M(n)?r="$WINDOW":n&&t.document===n?r="$DOCUMENT":D(n)&&(r="$SCOPE"),r}function Z(t,e){if(!y(t))return S(e)||(e=e?2:null),JSON.stringify(t,Y,e)}function X(t){return C(t)?JSON.parse(t):t}function Q(t,e){t=t.replace(Ui,"")
var n=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4
return Ni(n)?e:n}function tt(t,e){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+e),t}function et(t,e,n){n=n?-1:1
var r=t.getTimezoneOffset(),i=Q(e,r)
return tt(t,n*(i-r))}function nt(t){t=vi(t).clone().empty()
var e=vi("<div></div>").append(t).html()
try{return t[0].nodeType===Wi?Ci(e):e.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(t,e){return"<"+Ci(e)})}catch(n){return Ci(e)}}function rt(t){try{return decodeURIComponent(t)}catch(e){}}function it(t){var e={}
return o((t||"").split("&"),function(t){var n,r,i
t&&(r=t=t.replace(/\+/g,"%20"),n=t.indexOf("="),n!==-1&&(r=t.substring(0,n),i=t.substring(n+1)),r=rt(r),b(r)&&(i=!b(i)||rt(i),xi.call(e,r)?k(e[r])?e[r].push(i):e[r]=[e[r],i]:e[r]=i))}),e}function ot(t){var e=[]
return o(t,function(t,n){k(t)?o(t,function(t){e.push(st(n,!0)+(t===!0?"":"="+st(t,!0)))}):e.push(st(n,!0)+(t===!0?"":"="+st(t,!0)))}),e.length?e.join("&"):""}function at(t){return st(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function st(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,e?"%20":"+")}function ut(t,e){var n,r,i=_i.length
for(r=0;r<i;++r)if(n=_i[r]+e,C(n=t.getAttribute(n)))return n
return null}function ct(e){var n=e.currentScript
if(!n)return!0
if(!(n instanceof t.HTMLScriptElement||n instanceof t.SVGScriptElement))return!1
var r=n.attributes,i=[r.getNamedItem("src"),r.getNamedItem("href"),r.getNamedItem("xlink:href")]
return i.every(function(t){if(!t)return!0
if(!t.value)return!1
var n=e.createElement("a")
if(n.href=t.value,e.location.origin===n.origin)return!0
switch(n.protocol){case"http:":case"https:":case"ftp:":case"blob:":case"file:":case"data:":return!0
default:return!1}})}function lt(e,n){var r,i,a={}
if(o(_i,function(t){var n=t+"app"
!r&&e.hasAttribute&&e.hasAttribute(n)&&(r=e,i=e.getAttribute(n))}),o(_i,function(t){var n,o=t+"app"
!r&&(n=e.querySelector("["+o.replace(":","\\:")+"]"))&&(r=n,i=n.getAttribute(o))}),r){if(!qi)return void t.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.")
a.strictDi=null!==ut(r,"strict-di"),n(r,i?[i]:[],a)}}function ft(e,n,r){w(r)||(r={})
var i={strictDi:!1}
r=f(i,r)
var a=function(){if(e=vi(e),e.injector()){var i=e[0]===t.document?"document":nt(e)
throw Mi("btstrpd","App already bootstrapped with this element '{0}'",i.replace(/</,"&lt;").replace(/>/,"&gt;"))}n=n||[],n.unshift(["$provide",function(t){t.value("$rootElement",e)}]),r.debugInfoEnabled&&n.push(["$compileProvider",function(t){t.debugInfoEnabled(!0)}]),n.unshift("ng")
var o=ve(n,r.strictDi)
return o.invoke(["$rootScope","$rootElement","$compile","$injector",function(t,e,n,r){t.$apply(function(){e.data("$injector",r),n(e)(t)})}]),o},s=/^NG_ENABLE_DEBUG_INFO!/,u=/^NG_DEFER_BOOTSTRAP!/
return t&&s.test(t.name)&&(r.debugInfoEnabled=!0,t.name=t.name.replace(s,"")),t&&!u.test(t.name)?a():(t.name=t.name.replace(u,""),Di.resumeBootstrap=function(t){return o(t,function(t){n.push(t)}),a()},void(O(Di.resumeDeferredBootstrap)&&Di.resumeDeferredBootstrap()))}function ht(){t.name="NG_ENABLE_DEBUG_INFO!"+t.name,t.location.reload()}function dt(t){var e=Di.element(t).injector()
if(!e)throw Mi("test","no injector found for element argument to getTestability")
return e.get("$$testability")}function pt(t,e){return e=e||"_",t.replace(Fi,function(t,n){return(n?e:"")+t.toLowerCase()})}function $t(){var e
if(!Hi){var n=Li()
mi=y(n)?t.jQuery:n?t[n]:void 0,mi&&mi.fn.on?(vi=mi,f(mi.fn,{scope:po.scope,isolateScope:po.isolateScope,controller:po.controller,injector:po.injector,inheritedData:po.inheritedData})):vi=Ut,e=vi.cleanData,vi.cleanData=function(t){for(var n,r,i=0;null!=(r=t[i]);i++)n=(vi._data(r)||{}).events,n&&n.$destroy&&vi(r).triggerHandler("$destroy")
e(t)},Di.element=vi,Hi=!0}}function vt(){Ut.legacyXHTMLReplacement=!0}function mt(t,e,n){if(!t)throw Mi("areq","Argument '{0}' is {1}",e||"?",n||"required")
return t}function gt(t,e,n){return n&&k(t)&&(t=t[t.length-1]),mt(O(t),e,"not a function, got "+(t&&"object"==typeof t?t.constructor.name||"Object":typeof t)),t}function yt(t,e){if("hasOwnProperty"===t)throw Mi("badname","hasOwnProperty is not a valid {0} name",e)}function bt(t,e,n){if(!e)return t
for(var r,i=e.split("."),o=t,a=i.length,s=0;s<a;s++)r=i[s],t&&(t=(o=t)[r])
return!n&&O(t)?J(o,t):t}function wt(t){for(var e,n=t[0],r=t[t.length-1],i=1;n!==r&&(n=n.nextSibling);i++)(e||t[i]!==n)&&(e||(e=vi(Ei.call(t,0,i))),e.push(n))
return e||t}function xt(){return Object.create(null)}function Ct(t){if(null==t)return""
switch(typeof t){case"string":break
case"number":t=""+t
break
default:t=!g(t)||k(t)||E(t)?Z(t):t.toString()}return t}function St(t){function e(t,e,n){return t[e]||(t[e]=n())}var n=r("$injector"),i=r("ng"),o=e(t,"angular",Object)
return o.$$minErr=o.$$minErr||r,e(o,"module",function(){var t={}
return function(r,o,a){var s={},u=function(t,e){if("hasOwnProperty"===t)throw i("badname","hasOwnProperty is not a valid {0} name",e)}
return u(r,"module"),o&&t.hasOwnProperty(r)&&(t[r]=null),e(t,r,function(){function t(t,e,n,r){return r||(r=u),function(){return r[n||"push"]([t,e,arguments]),h}}function e(t,e,n){return n||(n=u),function(i,o){return o&&O(o)&&(o.$$moduleName=r),n.push([t,e,arguments]),h}}if(!o)throw n("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",r)
var u=[],c=[],l=[],f=t("$injector","invoke","push",c),h={_invokeQueue:u,_configBlocks:c,_runBlocks:l,info:function(t){if(b(t)){if(!w(t))throw i("aobj","Argument '{0}' must be an object","value")
return s=t,this}return s},requires:o,name:r,provider:e("$provide","provider"),factory:e("$provide","factory"),service:e("$provide","service"),value:t("$provide","value"),constant:t("$provide","constant","unshift"),decorator:e("$provide","decorator",c),animation:e("$animateProvider","register"),filter:e("$filterProvider","register"),controller:e("$controllerProvider","register"),directive:e("$compileProvider","directive"),component:e("$compileProvider","component"),config:f,run:function(t){return l.push(t),this}}
return a&&f(a),h})}})}function Et(t,e){if(k(t)){e=e||[]
for(var n=0,r=t.length;n<r;n++)e[n]=t[n]}else if(w(t)){e=e||{}
for(var i in t)"$"===i.charAt(0)&&"$"===i.charAt(1)||(e[i]=t[i])}return e||t}function kt(t,e){var r=[]
return n(e)&&(t=Di.copy(t,null,e)),JSON.stringify(t,function(t,e){if(e=Y(t,e),w(e)){if(r.indexOf(e)>=0)return"..."
r.push(e)}return e})}function At(t,e){return"function"==typeof t?t.toString().replace(/ \{[\s\S]*$/,""):y(t)?"undefined":"string"!=typeof t?kt(t,e):t}function Ot(n){f(n,{errorHandlingConfig:e,bootstrap:ft,copy:B,extend:f,merge:h,equals:W,element:vi,forEach:o,injector:ve,noop:$,bind:J,toJson:Z,fromJson:X,identity:v,isUndefined:y,isDefined:b,isString:C,isFunction:O,isObject:w,isNumber:S,isElement:U,isArray:k,version:Yi,isDate:E,callbacks:{$$counter:0},getTestability:dt,reloadWithDebugInfo:ht,UNSAFE_restoreLegacyJqLiteXHTMLReplacement:vt,$$minErr:r,$$csp:Ii,$$encodeUriSegment:at,$$encodeUriQuery:st,$$lowercase:Ci,$$stringify:Ct,$$uppercase:Si}),gi=St(t),gi("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:Hn}),t.provider("$compile",Te).directive({a:Oa,input:Ka,textarea:Ka,form:ja,script:zs,select:Ks,option:Js,ngBind:Xa,ngBindHtml:ts,ngBindTemplate:Qa,ngClass:ns,ngClassEven:is,ngClassOdd:rs,ngCloak:os,ngController:as,ngForm:Pa,ngHide:Ls,ngIf:cs,ngInclude:ls,ngInit:hs,ngNonBindable:As,ngPluralize:Ds,ngRef:Ns,ngRepeat:js,ngShow:Is,ngStyle:Us,ngSwitch:_s,ngSwitchWhen:qs,ngSwitchDefault:Fs,ngOptions:Ms,ngTransclude:Bs,ngModel:Ss,ngList:ds,ngChange:es,pattern:Zs,ngPattern:Zs,required:Ys,ngRequired:Ys,minlength:Qs,ngMinlength:Qs,maxlength:Xs,ngMaxlength:Xs,ngValue:Za,ngModelOptions:ks}).directive({ngInclude:fs,input:Ja}).directive(Ta).directive(ss),t.provider({$anchorScroll:me,$animate:Vo,$animateCss:Po,$$animateJs:Mo,$$animateQueue:Do,$$AnimateRunner:jo,$$animateAsyncRun:No,$browser:Ee,$cacheFactory:ke,$controller:Pe,$document:Re,$$isDocumentHidden:Ie,$exceptionHandler:Le,$filter:lr,$$forceReflow:Fo,$interpolate:Xe,$interval:Qe,$$intervalFactory:tn,$http:Ke,$httpParamSerializer:_e,$httpParamSerializerJQLike:qe,$httpBackend:Ye,$xhrFactory:Je,$jsonpCallbacks:Zo,$location:mn,$log:gn,$parse:jn,$rootScope:Fn,$q:Pn,$$q:Rn,$sce:Kn,$sceDelegate:Gn,$sniffer:Jn,$$taskTrackerFactory:Yn,$templateCache:Ae,$templateRequest:Xn,$$testability:Qn,$timeout:tr,$window:sr,$$rAF:qn,$$jqLite:ce,$$Map:bo,$$cookieReader:cr})}]).info({angularVersion:"1.8.2"})}function Tt(){return++Xi}function Mt(t){return Vt(t.replace(to,"ms-"))}function Dt(t,e){return e.toUpperCase()}function Vt(t){return t.replace(Qi,Dt)}function Nt(t){return!io.test(t)}function jt(t){var e=t.nodeType
return e===Bi||!e||e===Ki}function Pt(t){for(var e in Zi[t.ng339])return!0
return!1}function Rt(e,n){var r,i,a,s,u,c=n.createDocumentFragment(),l=[]
if(Nt(e))l.push(n.createTextNode(e))
else{if(r=c.appendChild(n.createElement("div")),i=(oo.exec(e)||["",""])[1].toLowerCase(),s=Ut.legacyXHTMLReplacement?e.replace(ao,"<$1></$2>"):e,$i<10)for(a=uo[i]||uo._default,r.innerHTML=a[1]+s+a[2],u=a[0];u--;)r=r.firstChild
else{for(a=so[i]||[],u=a.length;--u>-1;)r.appendChild(t.document.createElement(a[u])),r=r.firstChild
r.innerHTML=s}l=G(l,r.childNodes),r=c.firstChild,r.textContent=""}return c.textContent="",c.innerHTML="",o(l,function(t){c.appendChild(t)}),c}function It(e,n){n=n||t.document
var r
return(r=ro.exec(e))?[n.createElement(r[1])]:(r=Rt(e,n))?r.childNodes:[]}function Lt(t,e){var n=t.parentNode
n&&n.replaceChild(e,t),e.appendChild(t)}function Ut(t){if(t instanceof Ut)return t
var e
if(C(t)&&(t=Pi(t),e=!0),!(this instanceof Ut)){if(e&&"<"!==t.charAt(0))throw no("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element")
return new Ut(t)}e?Zt(this,It(t)):O(t)?re(t):Zt(this,t)}function _t(t){return t.cloneNode(!0)}function qt(t,e){!e&&jt(t)&&vi.cleanData([t]),t.querySelectorAll&&vi.cleanData(t.querySelectorAll("*"))}function Ft(t){var e
for(e in t)return!1
return!0}function Ht(t){var e=t.ng339,n=e&&Zi[e],r=n&&n.events,i=n&&n.data
i&&!Ft(i)||r&&!Ft(r)||(delete Zi[e],t.ng339=void 0)}function Bt(t,e,n,r){if(b(r))throw no("offargs","jqLite#off() does not support the `selector` argument")
var i=Wt(t),a=i&&i.events,s=i&&i.handle
if(s){if(e){var u=function(e){var r=a[e]
b(n)&&H(r||[],n),b(n)&&r&&r.length>0||(t.removeEventListener(e,s),delete a[e])}
o(e.split(" "),function(t){u(t),eo[t]&&u(eo[t])})}else for(e in a)"$destroy"!==e&&t.removeEventListener(e,s),delete a[e]
Ht(t)}}function zt(t,e){var n=t.ng339,r=n&&Zi[n]
r&&(e?delete r.data[e]:r.data={},Ht(t))}function Wt(t,e){var n=t.ng339,r=n&&Zi[n]
return e&&!r&&(t.ng339=n=Tt(),r=Zi[n]={events:{},data:{},handle:void 0}),r}function Gt(t,e,n){if(jt(t)){var r,i=b(n),o=!i&&e&&!w(e),a=!e,s=Wt(t,!o),u=s&&s.data
if(i)u[Vt(e)]=n
else{if(a)return u
if(o)return u&&u[Vt(e)]
for(r in e)u[Vt(r)]=e[r]}}}function Kt(t,e){return!!t.getAttribute&&(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+e+" ")>-1}function Jt(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),r=n
o(e.split(" "),function(t){t=Pi(t),r=r.replace(" "+t+" "," ")}),r!==n&&t.setAttribute("class",Pi(r))}}function Yt(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),r=n
o(e.split(" "),function(t){t=Pi(t),r.indexOf(" "+t+" ")===-1&&(r+=t+" ")}),r!==n&&t.setAttribute("class",Pi(r))}}function Zt(t,e){if(e)if(e.nodeType)t[t.length++]=e
else{var n=e.length
if("number"==typeof n&&e.window!==e){if(n)for(var r=0;r<n;r++)t[t.length++]=e[r]}else t[t.length++]=e}}function Xt(t,e){return Qt(t,"$"+(e||"ngController")+"Controller")}function Qt(t,e,n){t.nodeType===Ki&&(t=t.documentElement)
for(var r=k(e)?e:[e];t;){for(var i=0,o=r.length;i<o;i++)if(b(n=vi.data(t,r[i])))return n
t=t.parentNode||t.nodeType===Ji&&t.host}}function te(t){for(qt(t,!0);t.firstChild;)t.removeChild(t.firstChild)}function ee(t,e){e||qt(t)
var n=t.parentNode
n&&n.removeChild(t)}function ne(e,n){n=n||t,"complete"===n.document.readyState?n.setTimeout(e):vi(n).on("load",e)}function re(e){function n(){t.document.removeEventListener("DOMContentLoaded",n),t.removeEventListener("load",n),e()}"complete"===t.document.readyState?t.setTimeout(e):(t.document.addEventListener("DOMContentLoaded",n),t.addEventListener("load",n))}function ie(t,e){var n=$o[e.toLowerCase()]
return n&&vo[q(t)]&&n}function oe(t){return mo[t]}function ae(t,e){var n=function(n,r){n.isDefaultPrevented=function(){return n.defaultPrevented}
var i=e[r||n.type],o=i?i.length:0
if(o){if(y(n.immediatePropagationStopped)){var a=n.stopImmediatePropagation
n.stopImmediatePropagation=function(){n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),a&&a.call(n)}}n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===!0}
var s=i.specialHandlerWrapper||se
o>1&&(i=Et(i))
for(var u=0;u<o;u++)n.isImmediatePropagationStopped()||s(t,n,i[u])}}
return n.elem=t,n}function se(t,e,n){n.call(t,e)}function ue(t,e,n){var r=e.relatedTarget
r&&(r===t||ho.call(t,r))||n.call(t,e)}function ce(){this.$get=function(){return f(Ut,{hasClass:function(t,e){return t.attr&&(t=t[0]),Kt(t,e)},addClass:function(t,e){return t.attr&&(t=t[0]),Yt(t,e)},removeClass:function(t,e){return t.attr&&(t=t[0]),Jt(t,e)}})}}function le(t,e){var n=t&&t.$$hashKey
if(n)return"function"==typeof n&&(n=t.$$hashKey()),n
var r=typeof t
return n="function"===r||"object"===r&&null!==t?t.$$hashKey=r+":"+(e||u)():r+":"+t}function fe(){this._keys=[],this._values=[],this._lastKey=NaN,this._lastIndex=-1}function he(t){return Function.prototype.toString.call(t)}function de(t){var e=he(t).replace(Eo,""),n=e.match(wo)||e.match(xo)
return n}function pe(t){var e=de(t)
return e?"function("+(e[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function $e(t,e,n){var r,i,a
if("function"==typeof t){if(!(r=t.$inject)){if(r=[],t.length){if(e)throw C(n)&&n||(n=t.name||pe(t)),ko("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n)
i=de(t),o(i[1].split(Co),function(t){t.replace(So,function(t,e,n){r.push(n)})})}t.$inject=r}}else k(t)?(a=t.length-1,gt(t[a],"fn"),r=t.slice(0,a)):gt(t,"fn",!0)
return r}function ve(t,e){function n(t){return function(e,n){return w(e)?void o(e,s(t)):t(e,n)}}function r(t,e){if(yt(t,"service"),(O(e)||k(e))&&(e=x.instantiate(e)),!e.$get)throw ko("pget","Provider '{0}' must define $get factory method.",t)
return b[t+$]=e}function i(t,e){return function(){var n=A.invoke(e,this)
if(y(n))throw ko("undef","Provider '{0}' must return a value from $get factory method.",t)
return n}}function a(t,e,n){return r(t,{$get:n!==!1?i(t,e):e})}function u(t,e){return a(t,["$injector",function(t){return t.instantiate(e)}])}function c(t,e){return a(t,m(e),!1)}function l(t,e){yt(t,"constant"),b[t]=e,S[t]=e}function f(t,e){var n=x.get(t+$),r=n.$get
n.$get=function(){var t=A.invoke(r,n)
return A.invoke(e,null,{$delegate:t})}}function h(t){mt(y(t)||k(t),"modulesToLoad","not an array")
var e,n=[]
return o(t,function(t){function r(t){var e,n
for(e=0,n=t.length;e<n;e++){var r=t[e],i=x.get(r[0])
i[r[1]].apply(i,r[2])}}if(!g.get(t)){g.set(t,!0)
try{C(t)?(e=gi(t),A.modules[t]=e,n=n.concat(h(e.requires)).concat(e._runBlocks),r(e._invokeQueue),r(e._configBlocks)):O(t)?n.push(x.invoke(t)):k(t)?n.push(x.invoke(t)):gt(t,"module")}catch(i){throw k(t)&&(t=t[t.length-1]),i.message&&i.stack&&i.stack.indexOf(i.message)===-1&&(i=i.message+"\n"+i.stack),ko("modulerr","Failed to instantiate module {0} due to:\n{1}",t,i.stack||i.message||i)}}}),n}function d(t,n){function r(e,r){if(t.hasOwnProperty(e)){if(t[e]===p)throw ko("cdep","Circular dependency found: {0}",e+" <- "+v.join(" <- "))
return t[e]}try{return v.unshift(e),t[e]=p,t[e]=n(e,r),t[e]}catch(i){throw t[e]===p&&delete t[e],i}finally{v.shift()}}function i(t,n,i){for(var o=[],a=ve.$$annotate(t,e,i),s=0,u=a.length;s<u;s++){var c=a[s]
if("string"!=typeof c)throw ko("itkn","Incorrect injection token! Expected service name as string, got {0}",c)
o.push(n&&n.hasOwnProperty(c)?n[c]:r(c,i))}return o}function o(t){if($i||"function"!=typeof t)return!1
var e=t.$$ngIsClass
return P(e)||(e=t.$$ngIsClass=/^class\b/.test(he(t))),e}function a(t,e,n,r){"string"==typeof n&&(r=n,n=null)
var a=i(t,n,r)
return k(t)&&(t=t[t.length-1]),o(t)?(a.unshift(null),new(Function.prototype.bind.apply(t,a))):t.apply(e,a)}function s(t,e,n){var r=k(t)?t[t.length-1]:t,o=i(t,e,n)
return o.unshift(null),new(Function.prototype.bind.apply(r,o))}return{invoke:a,instantiate:s,get:r,annotate:ve.$$annotate,has:function(e){return b.hasOwnProperty(e+$)||t.hasOwnProperty(e)}}}e=e===!0
var p={},$="Provider",v=[],g=new yo,b={$provide:{provider:n(r),factory:n(a),service:n(u),value:n(c),constant:n(l),decorator:f}},x=b.$injector=d(b,function(t,e){throw Di.isString(e)&&v.push(e),ko("unpr","Unknown provider: {0}",v.join(" <- "))}),S={},E=d(S,function(t,e){var n=x.get(t+$,e)
return A.invoke(n.$get,n,void 0,t)}),A=E
b["$injector"+$]={$get:m(E)},A.modules=x.modules=xt()
var T=h(t)
return A=E.get("$injector"),A.strictDi=e,o(T,function(t){t&&A.invoke(t)}),A.loadNewModules=function(t){o(h(t),function(t){t&&A.invoke(t)})},A}function me(){var t=!0
this.disableAutoScrolling=function(){t=!1},this.$get=["$window","$location","$rootScope",function(e,n,r){function i(t){var e=null
return Array.prototype.some.call(t,function(t){if("a"===q(t))return e=t,!0}),e}function o(){var t=s.yOffset
if(O(t))t=t()
else if(U(t)){var n=t[0],r=e.getComputedStyle(n)
t="fixed"!==r.position?0:n.getBoundingClientRect().bottom}else S(t)||(t=0)
return t}function a(t){if(t){t.scrollIntoView()
var n=o()
if(n){var r=t.getBoundingClientRect().top
e.scrollBy(0,r-n)}}else e.scrollTo(0,0)}function s(t){t=C(t)?t:S(t)?t.toString():n.hash()
var e
t?(e=u.getElementById(t))?a(e):(e=i(u.getElementsByName(t)))?a(e):"top"===t&&a(null):a(null)}var u=e.document
return t&&r.$watch(function(){return n.hash()},function(t,e){t===e&&""===t||ne(function(){r.$evalAsync(s)})}),s}]}function ge(t,e){return t||e?t?e?(k(t)&&(t=t.join(" ")),k(e)&&(e=e.join(" ")),t+" "+e):t:e:""}function ye(t){for(var e=0;e<t.length;e++){var n=t[e]
if(n.nodeType===Oo)return n}}function be(t){C(t)&&(t=t.split(" "))
var e=xt()
return o(t,function(t){t.length&&(e[t]=!0)}),e}function we(t){return w(t)?t:{}}function xe(t){var e=t.indexOf("#")
return e===-1?"":t.substr(e)}function Ce(t){return t.replace(/#$/,"")}function Se(t,e,n,r,i){function a(){x=null,u()}function s(){m=C(),m=y(m)?null:m,W(m,k)&&(m=k),k=m,g=m}function u(){var t=g
s(),b===c.url()&&t===m||(b=c.url(),g=m,o(S,function(t){t(c.url(),m)}))}var c=this,l=t.location,f=t.history,h=t.setTimeout,d=t.clearTimeout,p={},v=i(n)
c.isMock=!1,c.$$completeOutstandingRequest=v.completeTask,c.$$incOutstandingRequestCount=v.incTaskCount,c.notifyWhenNoOutstandingRequests=v.notifyWhenNoPendingTasks
var m,g,b=l.href,w=e.find("base"),x=null,C=r.history?function(){try{return f.state}catch(t){}}:$
s(),c.url=function(e,n,i){if(y(i)&&(i=null),l!==t.location&&(l=t.location),f!==t.history&&(f=t.history),e){var o=g===i
if(e=er(e).href,b===e&&(!r.history||o))return c
var a=b&&cn(b)===cn(e)
return b=e,g=i,!r.history||a&&o?(a||(x=e),n?l.replace(e):a?l.hash=xe(e):l.href=e,l.href!==e&&(x=e)):(f[n?"replaceState":"pushState"](i,"",e),s()),x&&(x=e),c}return Ce(x||l.href)},c.state=function(){return m}
var S=[],E=!1,k=null
c.onUrlChange=function(e){return E||(r.history&&vi(t).on("popstate",a),vi(t).on("hashchange",a),E=!0),S.push(e),e},c.$$applicationDestroyed=function(){vi(t).off("hashchange popstate",a)},c.$$checkUrlChange=u,c.baseHref=function(){var t=w.attr("href")
return t?t.replace(/^(https?:)?\/\/[^\/]*/,""):""},c.defer=function(t,e,n){var r
return e=e||0,n=n||v.DEFAULT_TASK_TYPE,v.incTaskCount(n),r=h(function(){delete p[r],v.completeTask(t,n)},e),p[r]=n,r},c.defer.cancel=function(t){if(p.hasOwnProperty(t)){var e=p[t]
return delete p[t],d(t),v.completeTask($,e),!0}return!1}}function Ee(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(t,e,n,r,i){return new Se(t,r,e,n,i)}]}function ke(){this.$get=function(){function t(t,n){function i(t){t!==h&&(d?d===t&&(d=t.n):d=t,o(t.n,t.p),o(t,h),h=t,h.n=null)}function o(t,e){t!==e&&(t&&(t.p=e),e&&(e.n=t))}if(t in e)throw r("$cacheFactory")("iid","CacheId '{0}' is already taken!",t)
var a=0,s=f({},n,{id:t}),u=xt(),c=n&&n.capacity||Number.MAX_VALUE,l=xt(),h=null,d=null
return e[t]={put:function(t,e){if(!y(e)){if(c<Number.MAX_VALUE){var n=l[t]||(l[t]={key:t})
i(n)}return t in u||a++,u[t]=e,a>c&&this.remove(d.key),e}},get:function(t){if(c<Number.MAX_VALUE){var e=l[t]
if(!e)return
i(e)}return u[t]},remove:function(t){if(c<Number.MAX_VALUE){var e=l[t]
if(!e)return
e===h&&(h=e.p),e===d&&(d=e.n),o(e.n,e.p),delete l[t]}t in u&&(delete u[t],a--)},removeAll:function(){u=xt(),a=0,l=xt(),h=d=null},destroy:function(){u=null,s=null,l=null,delete e[t]},info:function(){return f({},s,{size:a})}}}var e={}
return t.info=function(){var t={}
return o(e,function(e,n){t[n]=e.info()}),t},t.get=function(t){return e[t]},t}}function Ae(){this.$get=["$cacheFactory",function(t){return t("templates")}]}function Oe(){}function Te(e,n){function r(t,e,n){var r=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,i=xt()
return o(t,function(t,o){if(t=t.trim(),t in T)return void(i[o]=T[t])
var a=t.match(r)
if(!a)throw Ro("iscp","Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",e,o,t,n?"controller bindings definition":"isolate scope definition")
i[o]={mode:a[1][0],collection:"*"===a[2],optional:"?"===a[3],attrName:a[4]||o},a[4]&&(T[t]=i[o])}),i}function i(t,e){var n={isolateScope:null,bindToController:null}
if(w(t.scope)&&(t.bindToController===!0?(n.bindToController=r(t.scope,e,!0),n.isolateScope={}):n.isolateScope=r(t.scope,e,!1)),w(t.bindToController)&&(n.bindToController=r(t.bindToController,e,!0)),n.bindToController&&!t.controller)throw Ro("noctrl","Cannot bind to controller without directive '{0}'s controller.",e)
return n}function a(t){var e=t.charAt(0)
if(!e||e!==Ci(e))throw Ro("baddir","Directive/Component name '{0}' is invalid. The first character must be a lowercase letter",t)
if(t!==t.trim())throw Ro("baddir","Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces",t)}function u(t){var e=t.require||t.controller&&t.name
return!k(e)&&w(e)&&o(e,function(t,n){var r=t.match(S),i=t.substring(r[0].length)
i||(e[n]=r[0]+n)}),e}function c(t,e){if(t&&(!C(t)||!/[EACM]/.test(t)))throw Ro("badrestrict","Restrict property '{0}' of directive '{1}' is invalid",t,e)
return t||"EA"}var l={},h="Directive",d=/^\s*directive:\s*([\w-]+)\s+(.*)$/,g=/(([\w-]+)(?::([^;]+))?;?)/,x=_("ngSrc,ngSrcset,src,srcset"),S=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,E=/^(on[a-z]+|formaction)$/,T=xt()
this.directive=function L(t,n){return mt(t,"name"),yt(t,"directive"),C(t)?(a(t),mt(n,"directiveFactory"),l.hasOwnProperty(t)||(l[t]=[],e.factory(t+h,["$injector","$exceptionHandler",function(e,n){var r=[]
return o(l[t],function(i,o){try{var a=e.invoke(i)
O(a)?a={compile:m(a)}:!a.compile&&a.link&&(a.compile=m(a.link)),a.priority=a.priority||0,a.index=o,a.name=a.name||t,a.require=u(a),a.restrict=c(a.restrict,t),a.$$moduleName=i.$$moduleName,r.push(a)}catch(s){n(s)}}),r}])),l[t].push(n)):o(t,s(L)),this},this.component=function U(t,e){function n(t){function n(e){return O(e)||k(e)?function(n,r){return t.invoke(e,this,{$element:n,$attrs:r})}:e}var i=e.template||e.templateUrl?e.template:"",a={controller:r,controllerAs:je(e.controller)||e.controllerAs||"$ctrl",template:n(i),templateUrl:n(e.templateUrl),transclude:e.transclude,scope:{},bindToController:e.bindings||{},restrict:"E",require:e.require}
return o(e,function(t,e){"$"===e.charAt(0)&&(a[e]=t)}),a}if(!C(t))return o(t,s(J(this,U))),this
var r=e.controller||function(){}
return o(e,function(t,e){"$"===e.charAt(0)&&(n[e]=t,O(r)&&(r[e]=t))}),n.$inject=["$injector"],this.directive(t,n)},this.aHrefSanitizationTrustedUrlList=function(t){return b(t)?(n.aHrefSanitizationTrustedUrlList(t),this):n.aHrefSanitizationTrustedUrlList()},Object.defineProperty(this,"aHrefSanitizationWhitelist",{get:function(){return this.aHrefSanitizationTrustedUrlList},set:function(t){this.aHrefSanitizationTrustedUrlList=t}}),this.imgSrcSanitizationTrustedUrlList=function(t){return b(t)?(n.imgSrcSanitizationTrustedUrlList(t),this):n.imgSrcSanitizationTrustedUrlList()},Object.defineProperty(this,"imgSrcSanitizationWhitelist",{get:function(){return this.imgSrcSanitizationTrustedUrlList},set:function(t){this.imgSrcSanitizationTrustedUrlList=t}})
var M=!0
this.debugInfoEnabled=function(t){return b(t)?(M=t,this):M}
var V=!1
this.strictComponentBindingsEnabled=function(t){return b(t)?(V=t,this):V}
var N=10
this.onChangesTtl=function(t){return arguments.length?(N=t,this):N}
var j=!0
this.commentDirectivesEnabled=function(t){return arguments.length?(j=t,this):j}
var R=!0
this.cssClassDirectivesEnabled=function(t){return arguments.length?(R=t,this):R}
var I=xt()
this.addPropertySecurityContext=function(t,e,n){var r=t.toLowerCase()+"|"+e.toLowerCase()
if(r in I&&I[r]!==n)throw Ro("ctxoverride","Property context '{0}.{1}' already set to '{2}', cannot override to '{3}'.",t,e,I[r],n)
return I[r]=n,this},function(){function t(t,e){o(e,function(e){I[e.toLowerCase()]=t})}t(da.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]),t(da.CSS,["*|style"]),t(da.URL,["area|href","area|ping","a|href","a|ping","blockquote|cite","body|background","del|cite","input|src","ins|cite","q|cite"]),t(da.MEDIA_URL,["audio|src","img|src","img|srcset","source|src","source|srcset","track|src","video|src","video|poster"]),t(da.RESOURCE_URL,["*|formAction","applet|code","applet|codebase","base|href","embed|src","frame|src","form|action","head|profile","html|manifest","iframe|src","link|href","media|src","object|codebase","object|data","script|src"])}(),this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(e,n,r,a,s,u,c,m,b){function T(){try{if(!--It)throw Dt=void 0,Ro("infchng","{0} $onChanges() iterations reached. Aborting!\n",N)
c.$apply(function(){for(var t=0,e=Dt.length;t<e;++t)try{Dt[t]()}catch(n){r(n)}Dt=void 0})}finally{It++}}function L(t,e){if(!t)return t
if(!C(t))throw Ro("srcset",'Can\'t pass trusted values to `{0}`: "{1}"',e,t.toString())
for(var n="",r=Pi(t),i=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,o=/\s/.test(r)?i:/(,)/,a=r.split(o),s=Math.floor(a.length/2),u=0;u<s;u++){var c=2*u
n+=m.getTrustedMediaUrl(Pi(a[c])),n+=" "+Pi(a[c+1])}var l=Pi(a[2*u]).split(/\s/)
return n+=m.getTrustedMediaUrl(Pi(l[0])),2===l.length&&(n+=" "+Pi(l[1])),n}function U(t,e){if(e){var n,r,i,o=Object.keys(e)
for(n=0,r=o.length;n<r;n++)i=o[n],this[i]=e[i]}else this.$attr={}
this.$$element=t}function _(t,e,n){jt.innerHTML="<span "+e+">"
var r=jt.firstChild.attributes,i=r[0]
r.removeNamedItem(i.name),i.value=n,t.attributes.setNamedItem(i)}function F(t,e){try{t.addClass(e)}catch(n){}}function B(t,e,n,r,i){t instanceof vi||(t=vi(t))
var o=Y(t,e,t,n,r,i)
B.$$addScopeClass(t)
var a=null
return function(e,n,r){if(!t)throw Ro("multilink","This element has already been linked.")
mt(e,"scope"),i&&i.needsNewScope&&(e=e.$parent.$new()),r=r||{}
var s=r.parentBoundTranscludeFn,u=r.transcludeControllers,c=r.futureParentElement
s&&s.$$boundTransclude&&(s=s.$$boundTransclude),a||(a=G(c))
var l
if(l="html"!==a?vi(gt(a,vi("<div></div>").append(t).html())):n?po.clone.call(t):t,u)for(var f in u)l.data("$"+f+"Controller",u[f].instance)
return B.$$addScopeInfo(l,e),n&&n(l,e),o&&o(e,l,l,s),n||(t=o=null),l}}function G(t){var e=t&&t[0]
return e&&"foreignobject"!==q(e)&&Oi.call(e).match(/SVG/)?"svg":"html"}function Y(t,e,n,r,i,o){function a(t,n,r,i){var o,a,s,u,c,l,f,h,$
if(d){var v=n.length
for($=new Array(v),c=0;c<p.length;c+=3)f=p[c],$[f]=n[f]}else $=n
for(c=0,l=p.length;c<l;)s=$[p[c++]],o=p[c++],a=p[c++],o?(o.scope?(u=t.$new(),B.$$addScopeInfo(vi(s),u)):u=t,h=o.transcludeOnThisElement?X(t,o.transclude,i):!o.templateOnThisElement&&i?i:!i&&e?X(t,e):null,o(a,u,s,r,h)):a&&a(t,s.childNodes,void 0,i)}for(var s,u,c,l,f,h,d,p=[],$=k(t)||t instanceof vi,v=0;v<t.length;v++)s=new U,11===$i&&Z(t,v,$),u=Q(t[v],[],s,0===v?r:void 0,i),c=u.length?ot(u,t[v],s,e,n,null,[],[],o):null,c&&c.scope&&B.$$addScopeClass(s.$$element),f=c&&c.terminal||!(l=t[v].childNodes)||!l.length?null:Y(l,c?(c.transcludeOnThisElement||!c.templateOnThisElement)&&c.transclude:e),(c||f)&&(p.push(v,c,f),h=!0,d=d||c),o=null
return h?a:null}function Z(t,e,n){var r,i=t[e],o=i.parentNode
if(i.nodeType===Wi)for(;;){if(r=o?i.nextSibling:t[e+1],!r||r.nodeType!==Wi)break
i.nodeValue=i.nodeValue+r.nodeValue,r.parentNode&&r.parentNode.removeChild(r),n&&r===t[e+1]&&t.splice(e+1,1)}}function X(t,e,n){function r(r,i,o,a,s){return r||(r=t.$new(!1,s),r.$$transcluded=!0),e(r,i,{parentBoundTranscludeFn:n,transcludeControllers:o,futureParentElement:a})}var i=r.$$slots=xt()
for(var o in e.$$slots)e.$$slots[o]?i[o]=X(t,e.$$slots[o],n):i[o]=null
return r}function Q(t,e,n,r,i){var o,a,s,u=t.nodeType,c=n.$attr
switch(u){case Bi:a=q(t),ct(e,De(a),"E",r,i)
for(var l,f,h,d,p,$=t.attributes,v=0,m=$&&$.length;v<m;v++){var y,b=!1,x=!1,S=!1,E=!1,k=!1
l=$[v],f=l.name,d=l.value,h=De(f.toLowerCase()),(p=h.match(Ft))?(S="Attr"===p[1],E="Prop"===p[1],k="On"===p[1],f=f.replace(Lo,"").toLowerCase().substr(4+p[1].length).replace(/_(.)/g,function(t,e){return e.toUpperCase()})):(y=h.match(Ht))&&lt(y[1])&&(b=f,x=f.substr(0,f.length-5)+"end",f=f.substr(0,f.length-6)),E||k?(n[h]=d,c[h]=l.name,E?Ct(t,e,h,f):St(e,h,f)):(h=De(f.toLowerCase()),c[h]=f,!S&&n.hasOwnProperty(h)||(n[h]=d,ie(t,h)&&(n[h]=!0)),Et(t,e,d,h,S),ct(e,h,"A",r,i,b,x))}if("input"===a&&"hidden"===t.getAttribute("type")&&t.setAttribute("autocomplete","off"),!Rt)break
if(s=t.className,w(s)&&(s=s.animVal),C(s)&&""!==s)for(;o=g.exec(s);)h=De(o[2]),ct(e,h,"C",r,i)&&(n[h]=Pi(o[3])),s=s.substr(o.index+o[0].length)
break
case Wi:vt(e,t.nodeValue)
break
case Gi:if(!Pt)break
tt(t,e,n,r,i)}return e.sort(dt),e}function tt(t,e,n,r,i){try{var o=d.exec(t.nodeValue)
if(o){var a=De(o[1])
ct(e,a,"M",r,i)&&(n[a]=Pi(o[2]))}}catch(s){}}function et(t,e,n){var r=[],i=0
if(e&&t.hasAttribute&&t.hasAttribute(e)){do{if(!t)throw Ro("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",e,n)
t.nodeType===Bi&&(t.hasAttribute(e)&&i++,t.hasAttribute(n)&&i--),r.push(t),t=t.nextSibling}while(i>0)}else r.push(t)
return vi(r)}function rt(t,e,n){return function(r,i,o,a,s){return i=et(i[0],e,n),t(r,i,o,a,s)}}function it(t,e,n,r,i,o){var a
return t?B(e,n,r,i,o):function(){return a||(a=B(e,n,r,i,o),e=n=o=null),a.apply(this,arguments)}}function ot(e,n,i,a,s,u,c,l,h){function d(t,e,n,r){t&&(n&&(t=rt(t,n,r)),t.require=$.require,t.directiveName=v,(E===$||$.$$isolateScope)&&(t=At(t,{isolateScope:!0})),c.push(t)),e&&(n&&(e=rt(e,n,r)),e.require=$.require,e.directiveName=v,(E===$||$.$$isolateScope)&&(e=At(e,{isolateScope:!0})),l.push(e))}function p(t,e,a,s,u){function h(t,e,n,r){var i
if(D(t)||(r=n,n=e,e=t,t=void 0),N&&(i=g),n||(n=N?x.parent():x),!r)return u(t,e,i,n,I)
var o=u.$$slots[r]
if(o)return o(t,e,i,n,I)
if(y(o))throw Ro("noslot",'No parent directive that requires a transclusion with slot name "{0}". Element: {1}',r,nt(x))}var d,p,$,v,m,g,b,x,T,M
n===a?(T=i,x=i.$$element):(x=vi(a),T=new U(x,i)),m=e,E?v=e.$new(!0):C&&(m=e.$parent),u&&(b=h,b.$$boundTransclude=u,b.isSlotFilled=function(t){return!!u.$$slots[t]}),S&&(g=st(x,T,b,S,v,e,E)),E&&(B.$$addScopeInfo(x,v,!0,!(A&&(A===E||A===E.$$originalDirective))),B.$$addScopeClass(x,!0),v.$$isolateBindings=E.$$isolateBindings,M=Mt(e,T,v,v.$$isolateBindings,E),M.removeWatches&&v.$on("$destroy",M.removeWatches))
for(var V in g){var j=S[V],P=g[V],R=j.$$bindings.bindToController
P.instance=P(),x.data("$"+j.name+"Controller",P.instance),P.bindingInfo=Mt(m,T,P.instance,R,j)}for(o(S,function(t,e){var n=t.require
t.bindToController&&!k(n)&&w(n)&&f(g[e].instance,at(e,n,x,g))}),o(g,function(t){var e=t.instance
if(O(e.$onChanges))try{e.$onChanges(t.bindingInfo.initialChanges)}catch(n){r(n)}if(O(e.$onInit))try{e.$onInit()}catch(n){r(n)}O(e.$doCheck)&&(m.$watch(function(){e.$doCheck()}),e.$doCheck()),O(e.$onDestroy)&&m.$on("$destroy",function(){e.$onDestroy()})}),d=0,p=c.length;d<p;d++)$=c[d],Ot($,$.isolateScope?v:e,x,T,$.require&&at($.directiveName,$.require,x,g),b)
var I=e
for(E&&(E.template||null===E.templateUrl)&&(I=v),t&&t(I,a.childNodes,void 0,u),d=l.length-1;d>=0;d--)$=l[d],Ot($,$.isolateScope?v:e,x,T,$.require&&at($.directiveName,$.require,x,g),b)
o(g,function(t){var e=t.instance
O(e.$postLink)&&e.$postLink()})}h=h||{}
for(var $,v,m,g,b,x=-Number.MAX_VALUE,C=h.newScopeDirective,S=h.controllerDirectives,E=h.newIsolateScopeDirective,A=h.templateDirective,T=h.nonTlbTranscludeDirective,M=!1,V=!1,N=h.hasElementTranscludeDirective,j=i.$$element=vi(n),P=u,R=a,I=!1,L=!1,_=0,F=e.length;_<F;_++){$=e[_]
var H=$.$$start,z=$.$$end
if(H&&(j=et(n,H,z)),m=void 0,x>$.priority)break
if(b=$.scope,b&&($.templateUrl||(w(b)?($t("new/isolated scope",E||C,$,j),E=$):$t("new/isolated scope",E,$,j)),C=C||$),v=$.name,!I&&($.replace&&($.templateUrl||$.template)||$.transclude&&!$.$$tlb)){for(var W,G=_+1;W=e[G++];)if(W.transclude&&!W.$$tlb||W.replace&&(W.templateUrl||W.template)){L=!0
break}I=!0}if(!$.templateUrl&&$.controller&&(S=S||xt(),$t("'"+v+"' controller",S[v],$,j),S[v]=$),b=$.transclude)if(M=!0,$.$$tlb||($t("transclusion",T,$,j),T=$),"element"===b)N=!0,x=$.priority,m=j,j=i.$$element=vi(B.$$createComment(v,i[v])),n=j[0],kt(s,K(m),n),R=it(L,m,a,x,P&&P.name,{nonTlbTranscludeDirective:T})
else{var Y=xt()
if(w(b)){m=t.document.createDocumentFragment()
var Z=xt(),X=xt()
o(b,function(t,e){var n="?"===t.charAt(0)
t=n?t.substring(1):t,Z[t]=e,Y[e]=null,X[e]=n}),o(j.contents(),function(e){var n=Z[De(q(e))]
n?(X[n]=!0,Y[n]=Y[n]||t.document.createDocumentFragment(),Y[n].appendChild(e)):m.appendChild(e)}),o(X,function(t,e){if(!t)throw Ro("reqslot","Required transclusion slot `{0}` was not filled.",e)})
for(var tt in Y)if(Y[tt]){var ot=vi(Y[tt].childNodes)
Y[tt]=it(L,ot,a)}m=vi(m.childNodes)}else m=vi(_t(n)).contents()
j.empty(),R=it(L,m,a,void 0,void 0,{needsNewScope:$.$$isolateScope||$.$$newScope}),R.$$slots=Y}if($.template)if(V=!0,$t("template",A,$,j),A=$,b=O($.template)?$.template(j,i):$.template,b=qt(b),$.replace){if(P=$,m=Nt(b)?[]:Ne(gt($.templateNamespace,Pi(b))),n=m[0],1!==m.length||n.nodeType!==Bi)throw Ro("tplrt","Template for directive '{0}' must have exactly one root element. {1}",v,"")
kt(s,j,n)
var ct={$attr:{}},lt=Q(n,[],ct),dt=e.splice(_+1,e.length-(_+1));(E||C)&&ut(lt,E,C),e=e.concat(lt).concat(dt),ft(i,ct),F=e.length}else j.html(b)
if($.templateUrl)V=!0,$t("template",A,$,j),A=$,$.replace&&(P=$),p=ht(e.splice(_,e.length-_),j,i,s,M&&R,c,l,{controllerDirectives:S,newScopeDirective:C!==$&&C,newIsolateScopeDirective:E,templateDirective:A,nonTlbTranscludeDirective:T}),F=e.length
else if($.compile)try{g=$.compile(j,i,R)
var pt=$.$$originalDirective||$
O(g)?d(null,J(pt,g),H,z):g&&d(J(pt,g.pre),J(pt,g.post),H,z)}catch(vt){r(vt,nt(j))}$.terminal&&(p.terminal=!0,x=Math.max(x,$.priority))}return p.scope=C&&C.scope===!0,p.transcludeOnThisElement=M,p.templateOnThisElement=V,p.transclude=R,h.hasElementTranscludeDirective=N,p}function at(t,e,n,r){var i
if(C(e)){var a=e.match(S),s=e.substring(a[0].length),u=a[1]||a[3],c="?"===a[2]
if("^^"===u?n=n.parent():(i=r&&r[s],i=i&&i.instance),!i){var l="$"+s+"Controller"
i="^^"===u&&n[0]&&n[0].nodeType===Ki?null:u?n.inheritedData(l):n.data(l)}if(!i&&!c)throw Ro("ctreq","Controller '{0}', required by directive '{1}', can't be found!",s,t)}else if(k(e)){i=[]
for(var f=0,h=e.length;f<h;f++)i[f]=at(t,e[f],n,r)}else w(e)&&(i={},o(e,function(e,o){i[o]=at(t,e,n,r)}))
return i||null}function st(t,e,n,r,i,o,a){var s=xt()
for(var c in r){var l=r[c],f={$scope:l===a||l.$$isolateScope?i:o,$element:t,$attrs:e,$transclude:n},h=l.controller
"@"===h&&(h=e[l.name])
var d=u(h,f,!0,l.controllerAs)
s[l.name]=d,t.data("$"+l.name+"Controller",d.instance)}return s}function ut(t,e,n){for(var r=0,i=t.length;r<i;r++)t[r]=p(t[r],{$$isolateScope:e,$$newScope:n})}function ct(t,n,r,o,a,s,u){if(n===a)return null
var c=null
if(l.hasOwnProperty(n))for(var f,d=e.get(n+h),$=0,v=d.length;$<v;$++)if(f=d[$],(y(o)||o>f.priority)&&f.restrict.indexOf(r)!==-1){if(s&&(f=p(f,{$$start:s,$$end:u})),!f.$$bindings){var m=f.$$bindings=i(f,f.name)
w(m.isolateScope)&&(f.$$isolateBindings=m.isolateScope)}t.push(f),c=f}return c}function lt(t){if(l.hasOwnProperty(t))for(var n,r=e.get(t+h),i=0,o=r.length;i<o;i++)if(n=r[i],n.multiElement)return!0
return!1}function ft(t,e){var n=e.$attr,r=t.$attr
o(t,function(r,i){"$"!==i.charAt(0)&&(e[i]&&e[i]!==r&&(r.length?r+=("style"===i?";":" ")+e[i]:r=e[i]),t.$set(i,r,!0,n[i]))}),o(e,function(e,i){t.hasOwnProperty(i)||"$"===i.charAt(0)||(t[i]=e,"class"!==i&&"style"!==i&&(r[i]=n[i]))})}function ht(t,e,n,i,s,u,c,l){var f,h,d=[],$=e[0],v=t.shift(),m=p(v,{templateUrl:null,transclude:null,replace:null,$$originalDirective:v}),g=O(v.templateUrl)?v.templateUrl(e,n):v.templateUrl,y=v.templateNamespace
return e.empty(),a(g).then(function(r){var a,p,b,x
if(r=qt(r),v.replace){if(b=Nt(r)?[]:Ne(gt(y,Pi(r))),a=b[0],1!==b.length||a.nodeType!==Bi)throw Ro("tplrt","Template for directive '{0}' must have exactly one root element. {1}",v.name,g)
p={$attr:{}},kt(i,e,a)
var C=Q(a,[],p)
w(v.scope)&&ut(C,!0),t=C.concat(t),ft(n,p)}else a=$,e.html(r)
for(t.unshift(m),f=ot(t,a,n,s,e,v,u,c,l),o(i,function(t,n){t===a&&(i[n]=e[0])}),h=Y(e[0].childNodes,s);d.length;){var S=d.shift(),E=d.shift(),k=d.shift(),A=d.shift(),O=e[0]
if(!S.$$destroyed){if(E!==$){var T=E.className
l.hasElementTranscludeDirective&&v.replace||(O=_t(a)),kt(k,vi(E),O),F(vi(O),T)}x=f.transcludeOnThisElement?X(S,f.transclude,A):A,f(h,S,O,i,x)}}d=null})["catch"](function(t){A(t)&&r(t)}),function(t,e,n,r,i){var o=i
e.$$destroyed||(d?d.push(e,n,r,o):(f.transcludeOnThisElement&&(o=X(e,f.transclude,i)),f(h,e,n,r,o)))}}function dt(t,e){var n=e.priority-t.priority
return 0!==n?n:t.name!==e.name?t.name<e.name?-1:1:t.index-e.index}function $t(t,e,n,r){function i(t){return t?" (module: "+t+")":""}if(e)throw Ro("multidir","Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",e.name,i(e.$$moduleName),n.name,i(n.$$moduleName),t,nt(r))}function vt(t,e){var r=n(e,!0)
r&&t.push({priority:0,compile:function(t){var e=t.parent(),n=!!e.length
return n&&B.$$addBindingClass(e),function(t,e){var i=e.parent()
n||B.$$addBindingClass(i),B.$$addBindingInfo(i,r.expressions),t.$watch(r,function(t){e[0].nodeValue=t})}}})}function gt(e,n){switch(e=Ci(e||"html")){case"svg":case"math":var r=t.document.createElement("div")
return r.innerHTML="<"+e+">"+n+"</"+e+">",r.childNodes[0].childNodes
default:return n}}function yt(t,e){return"srcdoc"===e?m.HTML:"src"===e||"ngSrc"===e?["img","video","audio","source","track"].indexOf(t)===-1?m.RESOURCE_URL:m.MEDIA_URL:"xlinkHref"===e?"image"===t?m.MEDIA_URL:"a"===t?m.URL:m.RESOURCE_URL:"form"===t&&"action"===e||"base"===t&&"href"===e||"link"===t&&"href"===e?m.RESOURCE_URL:"a"!==t||"href"!==e&&"ngHref"!==e?void 0:m.URL}function bt(t,e){var n=e.toLowerCase()
return I[t+"|"+n]||I["*|"+n]}function wt(t){return L(m.valueOf(t),"ng-prop-srcset")}function Ct(t,e,n,r){if(E.test(r))throw Ro("nodomevents","Property bindings for HTML DOM event properties are disallowed")
var i=q(t),o=bt(i,r),a=v
"srcset"!==r||"img"!==i&&"source"!==i?o&&(a=m.getTrusted.bind(m,o)):a=wt,e.push({priority:100,compile:function(t,e){var i=s(e[n]),o=s(e[n],function(t){return m.valueOf(t)})
return{pre:function(t,e){function n(){var n=i(t)
e[0][r]=a(n)}n(),t.$watch(o,n)}}}})}function St(t,e,n){t.push(si(s,c,r,e,n,!1))}function Et(t,e,r,i,o){var a=q(t),s=yt(a,i),u=!o,c=x[i]||o,l=n(r,u,s,c)
if(l){if("multiple"===i&&"select"===a)throw Ro("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",nt(t))
if(E.test(i))throw Ro("nodomevents","Interpolations for HTML DOM event attributes are disallowed")
e.push({priority:100,compile:function(){return{pre:function(t,e,o){var a=o.$$observers||(o.$$observers=xt()),u=o[i]
u!==r&&(l=u&&n(u,!0,s,c),r=u),l&&(o[i]=l(t),(a[i]||(a[i]=[])).$$inter=!0,(o.$$observers&&o.$$observers[i].$$scope||t).$watch(l,function(t,e){"class"===i&&t!==e?o.$updateClass(t,e):o.$set(i,t)}))}}}})}}function kt(e,n,r){var i,o,a=n[0],s=n.length,u=a.parentNode
if(e)for(i=0,o=e.length;i<o;i++)if(e[i]===a){e[i++]=r
for(var c=i,l=c+s-1,f=e.length;c<f;c++,l++)l<f?e[c]=e[l]:delete e[c]
e.length-=s-1,e.context===a&&(e.context=r)
break}u&&u.replaceChild(r,a)
var h=t.document.createDocumentFragment()
for(i=0;i<s;i++)h.appendChild(n[i])
for(vi.hasData(a)&&(vi.data(r,vi.data(a)),vi(a).off("$destroy")),vi.cleanData(h.querySelectorAll("*")),i=1;i<s;i++)delete n[i]
n[0]=r,n.length=1}function At(t,e){return f(function(){return t.apply(null,arguments)},t,e)}function Ot(t,e,n,i,o,a){try{t(e,n,i,o,a)}catch(s){r(s,nt(n))}}function Tt(t,e){if(V)throw Ro("missingattr","Attribute '{0}' of '{1}' is non-optional and must be set!",t,e)}function Mt(t,e,r,i,a){function u(e,n,i){O(r.$onChanges)&&!z(n,i)&&(Dt||(t.$$postDigest(T),Dt=[]),l||(l={},Dt.push(c)),l[e]&&(i=l[e].previousValue),l[e]=new Me(i,n))}function c(){r.$onChanges(l),l=void 0}var l,f=[],h={}
return o(i,function(i,o){var c,l,d,p,v,m=i.attrName,g=i.optional,y=i.mode
switch(y){case"@":g||xi.call(e,m)||(Tt(m,a.name),r[o]=e[m]=void 0),v=e.$observe(m,function(t){if(C(t)||P(t)){var e=r[o]
u(o,t,e),r[o]=t}}),e.$$observers[m].$$scope=t,c=e[m],C(c)?r[o]=n(c)(t):P(c)&&(r[o]=c),h[o]=new Me(Io,r[o]),f.push(v)
break
case"=":if(!xi.call(e,m)){if(g)break
Tt(m,a.name),e[m]=void 0}if(g&&!e[m])break
l=s(e[m]),p=l.literal?W:z,d=l.assign||function(){throw c=r[o]=l(t),Ro("nonassign","Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",e[m],m,a.name)},c=r[o]=l(t)
var b=function(e){return p(e,r[o])||(p(e,c)?d(t,e=r[o]):r[o]=e),c=e}
b.$stateful=!0,v=i.collection?t.$watchCollection(e[m],b):t.$watch(s(e[m],b),null,l.literal),f.push(v)
break
case"<":if(!xi.call(e,m)){if(g)break
Tt(m,a.name),e[m]=void 0}if(g&&!e[m])break
l=s(e[m])
var w=l.literal,x=r[o]=l(t)
h[o]=new Me(Io,r[o]),v=t[i.collection?"$watchCollection":"$watch"](l,function(t,e){if(e===t){if(e===x||w&&W(e,x))return
e=x}u(o,t,e),r[o]=t}),f.push(v)
break
case"&":if(g||xi.call(e,m)||Tt(m,a.name),l=e.hasOwnProperty(m)?s(e[m]):$,l===$&&g)break
r[o]=function(e){return l(t,e)}}}),{initialChanges:h,removeWatches:f.length&&function(){for(var t=0,e=f.length;t<e;++t)f[t]()}}}var Dt,Vt=/^\w/,jt=t.document.createElement("div"),Pt=j,Rt=R,It=N
U.prototype={$normalize:De,$addClass:function(t){t&&t.length>0&&b.addClass(this.$$element,t)},$removeClass:function(t){t&&t.length>0&&b.removeClass(this.$$element,t)},$updateClass:function(t,e){var n=Ve(t,e)
n&&n.length&&b.addClass(this.$$element,n)
var r=Ve(e,t)
r&&r.length&&b.removeClass(this.$$element,r)},$set:function(t,e,n,i){var a,s=this.$$element[0],u=ie(s,t),c=oe(t),l=t
u?(this.$$element.prop(t,e),i=u):c&&(this[c]=e,l=c),this[t]=e,i?this.$attr[t]=i:(i=this.$attr[t],i||(this.$attr[t]=i=pt(t,"-"))),a=q(this.$$element),"img"===a&&"srcset"===t&&(this[t]=e=L(e,"$set('srcset', value)")),n!==!1&&(null===e||y(e)?this.$$element.removeAttr(i):Vt.test(i)?u&&e===!1?this.$$element.removeAttr(i):this.$$element.attr(i,e):_(this.$$element[0],i,e))
var f=this.$$observers
f&&o(f[l],function(t){try{t(e)}catch(n){r(n)}})},$observe:function(t,e){var n=this,r=n.$$observers||(n.$$observers=xt()),i=r[t]||(r[t]=[])
return i.push(e),c.$evalAsync(function(){i.$$inter||!n.hasOwnProperty(t)||y(n[t])||e(n[t])}),function(){H(i,e)}}}
var Lt=n.startSymbol(),Ut=n.endSymbol(),qt="{{"===Lt&&"}}"===Ut?v:function(t){return t.replace(/\{\{/g,Lt).replace(/}}/g,Ut)},Ft=/^ng(Attr|Prop|On)([A-Z].*)$/,Ht=/^(.+)Start$/
return B.$$addBindingInfo=M?function(t,e){var n=t.data("$binding")||[]
k(e)?n=n.concat(e):n.push(e),t.data("$binding",n)}:$,B.$$addBindingClass=M?function(t){F(t,"ng-binding")}:$,B.$$addScopeInfo=M?function(t,e,n,r){var i=n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope"
t.data(i,e)}:$,B.$$addScopeClass=M?function(t,e){F(t,e?"ng-isolate-scope":"ng-scope")}:$,B.$$createComment=function(e,n){var r=""
return M&&(r=" "+(e||"")+": ",n&&(r+=n+" ")),t.document.createComment(r)},B}]}function Me(t,e){this.previousValue=t,this.currentValue=e}function De(t){return t.replace(Lo,"").replace(Uo,function(t,e,n){return n?e.toUpperCase():e})}function Ve(t,e){var n="",r=t.split(/\s+/),i=e.split(/\s+/)
t:for(var o=0;o<r.length;o++){for(var a=r[o],s=0;s<i.length;s++)if(a===i[s])continue t
n+=(n.length>0?" ":"")+a}return n}function Ne(t){t=vi(t)
var e=t.length
if(e<=1)return t
for(;e--;){var n=t[e];(n.nodeType===Gi||n.nodeType===Wi&&""===n.nodeValue.trim())&&ki.call(t,e,1)}return t}function je(t,e){if(e&&C(e))return e
if(C(t)){var n=qo.exec(t)
if(n)return n[3]}}function Pe(){var t={}
this.has=function(e){return t.hasOwnProperty(e)},this.register=function(e,n){yt(e,"controller"),w(e)?f(t,e):t[e]=n},this.$get=["$injector",function(e){function n(t,e,n,i){if(!t||!w(t.$scope))throw r("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",i,e)
t.$scope[e]=n}return function(r,i,o,a){var s,u,c,l
if(o=o===!0,a&&C(a)&&(l=a),C(r)){if(u=r.match(qo),!u)throw _o("ctrlfmt","Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",r)
if(c=u[1],l=l||u[3],r=t.hasOwnProperty(c)?t[c]:bt(i.$scope,c,!0),!r)throw _o("ctrlreg","The controller with the name '{0}' is not registered.",c)
gt(r,c,!0)}if(o){var h=(k(r)?r[r.length-1]:r).prototype
return s=Object.create(h||null),l&&n(i,l,s,c||r.name),f(function(){var t=e.invoke(r,s,i,c)
return t!==s&&(w(t)||O(t))&&(s=t,l&&n(i,l,s,c||r.name)),s},{instance:s,identifier:l})}return s=e.instantiate(r,i,c),l&&n(i,l,s,c||r.name),s}}]}function Re(){this.$get=["$window",function(t){return vi(t.document)}]}function Ie(){this.$get=["$document","$rootScope",function(t,e){function n(){i=r.hidden}var r=t[0],i=r&&r.hidden
return t.on("visibilitychange",n),e.$on("$destroy",function(){t.off("visibilitychange",n)}),function(){return i}}]}function Le(){this.$get=["$log",function(t){return function(e,n){t.error.apply(t,arguments)}}]}function Ue(t){return w(t)?E(t)?t.toISOString():Z(t):t}function _e(){this.$get=function(){return function(t){if(!t)return""
var e=[]
return a(t,function(t,n){null===t||y(t)||O(t)||(k(t)?o(t,function(t){e.push(st(n)+"="+st(Ue(t)))}):e.push(st(n)+"="+st(Ue(t))))}),e.join("&")}}}function qe(){this.$get=function(){return function(t){function e(t,r,i){k(t)?o(t,function(t,n){e(t,r+"["+(w(t)?n:"")+"]")}):w(t)&&!E(t)?a(t,function(t,n){e(t,r+(i?"":"[")+n+(i?"":"]"))}):(O(t)&&(t=t()),n.push(st(r)+"="+(null==t?"":st(Ue(t)))))}if(!t)return""
var n=[]
return e(t,"",!0),n.join("&")}}}function Fe(t,e){if(C(t)){var n=t.replace(Go,"").trim()
if(n){var r=e("Content-Type"),i=r&&0===r.indexOf(Ho)
if(i||He(n))try{t=X(n)}catch(o){if(!i)return t
throw Ko("baddata",'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"',t,o)}}}return t}function He(t){var e=t.match(zo)
return e&&Wo[e[0]].test(t)}function Be(t){function e(t,e){t&&(r[t]=r[t]?r[t]+", "+e:e)}var n,r=xt()
return C(t)?o(t.split("\n"),function(t){n=t.indexOf(":"),e(Ci(Pi(t.substr(0,n))),Pi(t.substr(n+1)))}):w(t)&&o(t,function(t,n){e(Ci(n),Pi(t))}),r}function ze(t){var e
return function(n){if(e||(e=Be(t)),n){var r=e[Ci(n)]
return void 0===r&&(r=null),r}return e}}function We(t,e,n,r){return O(r)?r(t,e,n):(o(r,function(r){t=r(t,e,n)}),t)}function Ge(t){return 200<=t&&t<300}function Ke(){var t=this.defaults={transformResponse:[Fe],transformRequest:[function(t){return!w(t)||V(t)||j(t)||N(t)?t:Z(t)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:Et(Bo),put:Et(Bo),patch:Et(Bo)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},e=!1
this.useApplyAsync=function(t){return b(t)?(e=!!t,this):e}
var n=this.interceptors=[],i=this.xsrfTrustedOrigins=[]
Object.defineProperty(this,"xsrfWhitelistedOrigins",{get:function(){return this.xsrfTrustedOrigins},set:function(t){this.xsrfTrustedOrigins=t}}),this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(a,s,u,c,l,h,d,p){function v(e){function n(t,e){for(var n=0,r=e.length;n<r;){var i=e[n++],o=e[n++]
t=t.then(i,o)}return e.length=0,t}function i(){a.$$completeOutstandingRequest($,"$http")}function s(t,e){var n,r={}
return o(t,function(t,i){O(t)?(n=t(e),null!=n&&(r[i]=n)):r[i]=t}),r}function u(e){var n,r,i,o=t.headers,a=f({},e.headers)
o=f({},o.common,o[Ci(e.method)])
t:for(n in o){r=Ci(n)
for(i in a)if(Ci(i)===r)continue t
a[n]=o[n]}return s(a,Et(e))}function c(e){var n=e.headers,r=We(e.data,ze(n),void 0,e.transformRequest)
return y(r)&&o(n,function(t,e){"content-type"===Ci(e)&&delete n[e]}),y(e.withCredentials)&&!y(t.withCredentials)&&(e.withCredentials=t.withCredentials),x(e,r).then(l,l)}function l(t){var e=f({},t)
return e.data=We(t.data,t.headers,t.status,v.transformResponse),Ge(t.status)?e:h.reject(e)}if(!w(e))throw r("$http")("badreq","Http request configuration must be an object.  Received: {0}",e)
if(!C(p.valueOf(e.url)))throw r("$http")("badreq","Http request configuration url must be a string or a $sce trusted object.  Received: {0}",e.url)
var v=f({method:"get",transformRequest:t.transformRequest,transformResponse:t.transformResponse,paramSerializer:t.paramSerializer,jsonpCallbackParam:t.jsonpCallbackParam},e)
v.headers=u(e),v.method=Si(v.method),v.paramSerializer=C(v.paramSerializer)?d.get(v.paramSerializer):v.paramSerializer,a.$$incOutstandingRequestCount("$http")
var m=[],g=[],b=h.resolve(v)
return o(T,function(t){(t.request||t.requestError)&&m.unshift(t.request,t.requestError),(t.response||t.responseError)&&g.push(t.response,t.responseError)}),b=n(b,m),b=b.then(c),b=n(b,g),b=b["finally"](i)}function m(t){o(arguments,function(t){v[t]=function(e,n){return v(f({},n||{},{method:t,url:e}))}})}function g(t){o(arguments,function(t){v[t]=function(e,n,r){return v(f({},r||{},{method:t,url:e,data:n}))}})}function x(n,r){function i(t){if(t){var n={}
return o(t,function(t,r){n[r]=function(n){function r(){t(n)}e?l.$applyAsync(r):l.$$phase?r():l.$apply(r)}}),n}}function a(t,n,r,i,o){function a(){c(n,t,r,i,o)}$&&(Ge(t)?$.put(D,[t,n,Be(r),i,o]):$.remove(D)),e?l.$applyAsync(a):(a(),l.$$phase||l.$apply())}function c(t,e,r,i,o){e=e>=-1?e:0,(Ge(e)?g.resolve:g.reject)({data:t,status:e,headers:ze(r),config:n,statusText:i,xhrStatus:o})}function f(t){c(t.data,t.status,Et(t.headers()),t.statusText,t.xhrStatus)}function d(){var t=v.pendingRequests.indexOf(n)
t!==-1&&v.pendingRequests.splice(t,1)}var $,m,g=h.defer(),x=g.promise,O=n.headers,T="jsonp"===Ci(n.method),D=n.url
if(T?D=p.getTrustedResourceUrl(D):C(D)||(D=p.valueOf(D)),D=S(D,n.paramSerializer(n.params)),T&&(D=E(D,n.jsonpCallbackParam)),v.pendingRequests.push(n),x.then(d,d),!n.cache&&!t.cache||n.cache===!1||"GET"!==n.method&&"JSONP"!==n.method||($=w(n.cache)?n.cache:w(t.cache)?t.cache:A),$&&(m=$.get(D),b(m)?R(m)?m.then(f,f):k(m)?c(m[1],m[0],Et(m[2]),m[3],m[4]):c(m,200,{},"OK","complete"):$.put(D,x)),y(m)){var V=M(n.url)?u()[n.xsrfCookieName||t.xsrfCookieName]:void 0
V&&(O[n.xsrfHeaderName||t.xsrfHeaderName]=V),s(n.method,D,r,a,O,n.timeout,n.withCredentials,n.responseType,i(n.eventHandlers),i(n.uploadEventHandlers))}return x}function S(t,e){return e.length>0&&(t+=(t.indexOf("?")===-1?"?":"&")+e),t}function E(t,e){var n=t.split("?")
if(n.length>2)throw Ko("badjsonp",'Illegal use more than one "?", in url, "{1}"',t)
var r=it(n[1])
return o(r,function(n,r){if("JSON_CALLBACK"===n)throw Ko("badjsonp",'Illegal use of JSON_CALLBACK in url, "{0}"',t)
if(r===e)throw Ko("badjsonp",'Illegal use of callback param, "{0}", in url, "{1}"',e,t)}),t+=(t.indexOf("?")===-1?"?":"&")+e+"=JSON_CALLBACK"}var A=c("$http")
t.paramSerializer=C(t.paramSerializer)?d.get(t.paramSerializer):t.paramSerializer
var T=[]
o(n,function(t){T.unshift(C(t)?d.get(t):d.invoke(t))})
var M=ir(i)
return v.pendingRequests=[],m("get","delete","head","jsonp"),g("post","put","patch"),v.defaults=t,v}]}function Je(){this.$get=function(){return function(){return new t.XMLHttpRequest}}}function Ye(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(t,e,n,r){return Ze(t,r,t.defer,e,n[0])}]}function Ze(t,e,n,r,i){function a(t,e,n){t=t.replace("JSON_CALLBACK",e)
var o=i.createElement("script"),a=null
return o.type="text/javascript",o.src=t,o.async=!0,a=function(t){o.removeEventListener("load",a),o.removeEventListener("error",a),i.body.removeChild(o),o=null
var s=-1,u="unknown"
t&&("load"!==t.type||r.wasCalled(e)||(t={type:"error"}),u=t.type,s="error"===t.type?404:200),n&&n(s,u)},o.addEventListener("load",a),o.addEventListener("error",a),i.body.appendChild(o),a}return function(i,s,u,c,l,f,h,d,p,$){function v(t){C="timeout"===t,w&&w(),x&&x.abort()}function m(t,e,r,i,o,a){b(O)&&n.cancel(O),w=x=null,t(e,r,i,o,a)}if(s=s||t.url(),"jsonp"===Ci(i))var g=r.createCallback(s),w=a(s,g,function(t,e){var n=200===t&&r.getResponse(g)
m(c,t,n,"",e,"complete"),r.removeCallback(g)})
else{var x=e(i,s),C=!1
x.open(i,s,!0),o(l,function(t,e){b(t)&&x.setRequestHeader(e,t)}),x.onload=function(){var t=x.statusText||"",e="response"in x?x.response:x.responseText,n=1223===x.status?204:x.status
0===n&&(n=e?200:"file"===er(s).protocol?404:0),m(c,n,e,x.getAllResponseHeaders(),t,"complete")}
var S=function(){m(c,-1,null,null,"","error")},E=function(){m(c,-1,null,null,"",C?"timeout":"abort")},k=function(){m(c,-1,null,null,"","timeout")}
if(x.onerror=S,x.ontimeout=k,x.onabort=E,o(p,function(t,e){x.addEventListener(e,t)}),o($,function(t,e){x.upload.addEventListener(e,t)}),h&&(x.withCredentials=!0),d)try{x.responseType=d}catch(A){if("json"!==d)throw A}x.send(y(u)?null:u)}if(f>0)var O=n(function(){v("timeout")},f)
else R(f)&&f.then(function(){v(b(f.$$timeoutId)?"timeout":"abort")})}}function Xe(){var t="{{",e="}}"
this.startSymbol=function(e){return e?(t=e,this):t},this.endSymbol=function(t){return t?(e=t,this):e},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){function o(t){return"\\\\\\"+t}function a(n){return n.replace(h,t).replace(d,e)}function s(t,e,n,r){var i=t.$watch(function(t){return i(),r(t)},e,n)
return i}function u(o,u,h,d){function p(t){try{return t=h&&!$?i.getTrusted(h,t):i.valueOf(t),d&&!b(t)?t:Ct(t)}catch(e){r(Jo.interr(o,e))}}var $=h===i.URL||h===i.MEDIA_URL
if(!o.length||o.indexOf(t)===-1){if(u)return
var v=a(o)
$&&(v=i.getTrusted(h,v))
var g=m(v)
return g.exp=o,g.expressions=[],g.$$watchDelegate=s,g}d=!!d
for(var w,x,C,S,E,k=0,A=[],O=o.length,T=[],M=[];k<O;){if((w=o.indexOf(t,k))===-1||(x=o.indexOf(e,w+c))===-1){k!==O&&T.push(a(o.substring(k)))
break}k!==w&&T.push(a(o.substring(k,w))),S=o.substring(w+c,x),A.push(S),k=x+l,M.push(T.length),T.push("")}E=1===T.length&&1===M.length
var D=$&&E?void 0:p
if(C=A.map(function(t){return n(t,D)}),!u||A.length){var V=function(t){for(var e=0,n=A.length;e<n;e++){if(d&&y(t[e]))return
T[M[e]]=t[e]}return $?i.getTrusted(h,E?T[0]:T.join("")):(h&&T.length>1&&Jo.throwNoconcat(o),T.join(""))}
return f(function(t){var e=0,n=A.length,i=new Array(n)
try{for(;e<n;e++)i[e]=C[e](t)
return V(i)}catch(a){r(Jo.interr(o,a))}},{exp:o,expressions:A,$$watchDelegate:function(t,e){var n
return t.$watchGroup(C,function(r,i){var o=V(r)
e.call(this,o,r!==i?n:o,t),n=o})}})}}var c=t.length,l=e.length,h=new RegExp(t.replace(/./g,o),"g"),d=new RegExp(e.replace(/./g,o),"g")
return u.startSymbol=function(){return t},u.endSymbol=function(){return e},u}]}function Qe(){this.$get=["$$intervalFactory","$window",function(t,e){var n={},r=function(t,r,i){var o=e.setInterval(t,r)
return n[o]=i,o},i=function(t){e.clearInterval(t),delete n[t]},o=t(r,i)
return o.cancel=function(t){if(!t)return!1
if(!t.hasOwnProperty("$$intervalId"))throw Yo("badprom","`$interval.cancel()` called with a promise that was not generated by `$interval()`.")
if(!n.hasOwnProperty(t.$$intervalId))return!1
var e=t.$$intervalId,r=n[e]
return _n(r.promise),r.reject("canceled"),i(e),!0},o}]}function tn(){this.$get=["$browser","$q","$$q","$rootScope",function(t,e,n,r){return function(i,o){return function(a,s,u,c){function l(){h?a.apply(null,d):a(p)}function f(){$?t.defer(l):r.$evalAsync(l),v.notify(p++),u>0&&p>=u&&(v.resolve(p),o(m.$$intervalId)),$||r.$apply()}var h=arguments.length>4,d=h?K(arguments,4):[],p=0,$=b(c)&&!c,v=($?n:e).defer(),m=v.promise
return u=b(u)?u:0,m.$$intervalId=i(f,s,v,$),m}}}]}function en(t){for(var e=t.split("/"),n=e.length;n--;)e[n]=at(e[n].replace(/%2F/g,"/"))
return e.join("/")}function nn(t,e){for(var n=t.split("/"),r=n.length;r--;)n[r]=decodeURIComponent(n[r]),e&&(n[r]=n[r].replace(/\//g,"%2F"))
return n.join("/")}function rn(t,e,n){var r=ot(e),i=n?"#"+at(n):"",o=en(t)
return o+(r?"?"+r:"")+i}function on(t,e){var n=er(t)
e.$$protocol=n.protocol,e.$$host=n.hostname,e.$$port=d(n.port)||Qo[n.protocol]||null}function an(t,e,n){if(ea.test(t))throw ta("badpath",'Invalid url "{0}".',t)
var r="/"!==t.charAt(0)
r&&(t="/"+t)
var i=er(t),o=r&&"/"===i.pathname.charAt(0)?i.pathname.substring(1):i.pathname
e.$$path=nn(o,n),e.$$search=it(i.search),e.$$hash=decodeURIComponent(i.hash),e.$$path&&"/"!==e.$$path.charAt(0)&&(e.$$path="/"+e.$$path)}function sn(t,e){return t.slice(0,e.length)===e}function un(t,e){if(sn(e,t))return e.substr(t.length)}function cn(t){var e=t.indexOf("#")
return e===-1?t:t.substr(0,e)}function ln(t){return t.substr(0,cn(t).lastIndexOf("/")+1)}function fn(t){return t.substring(0,t.indexOf("/",t.indexOf("//")+2))}function hn(t,e,n){this.$$html5=!0,n=n||"",on(t,this),this.$$parse=function(t){var n=un(e,t)
if(!C(n))throw ta("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',t,e)
an(n,this,!0),this.$$path||(this.$$path="/"),this.$$compose()},this.$$normalizeUrl=function(t){return e+t.substr(1)},this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0
var o,a,s
return b(o=un(t,r))?(a=o,s=n&&b(o=un(n,o))?e+(un("/",o)||o):t+a):b(o=un(e,r))?s=e+o:e===r+"/"&&(s=e),s&&this.$$parse(s),!!s}}function dn(t,e,n){on(t,this),this.$$parse=function(r){function i(t,e,n){var r,i=/^\/[A-Z]:(\/.*)/
return sn(e,n)&&(e=e.replace(n,"")),i.exec(e)?t:(r=i.exec(t),r?r[1]:t)}var o,a=un(t,r)||un(e,r)
y(a)||"#"!==a.charAt(0)?this.$$html5?o=a:(o="",y(a)&&(t=r,this.replace())):(o=un(n,a),y(o)&&(o=a)),an(o,this,!1),this.$$path=i(this.$$path,o,t),this.$$compose()},this.$$normalizeUrl=function(e){return t+(e?n+e:"")},this.$$parseLinkUrl=function(e,n){return cn(t)===cn(e)&&(this.$$parse(e),!0)}}function pn(t,e,n){this.$$html5=!0,dn.apply(this,arguments),this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0
var o,a
return t===cn(r)?o=r:(a=un(e,r))?o=t+n+a:e===r+"/"&&(o=e),o&&this.$$parse(o),!!o},this.$$normalizeUrl=function(e){return t+n+e}}function $n(t){return function(){return this[t]}}function vn(t,e){return function(n){return y(n)?this[t]:(this[t]=e(n),this.$$compose(),this)}}function mn(){var t="!",e={enabled:!1,requireBase:!0,rewriteLinks:!0}
this.hashPrefix=function(e){return b(e)?(t=e,this):t},this.html5Mode=function(t){return P(t)?(e.enabled=t,this):w(t)?(P(t.enabled)&&(e.enabled=t.enabled),P(t.requireBase)&&(e.requireBase=t.requireBase),(P(t.rewriteLinks)||C(t.rewriteLinks))&&(e.rewriteLinks=t.rewriteLinks),this):e},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,r,i,o,a){function s(t,e){return t===e||er(t).href===er(e).href}function u(t,e,n){var i=l.url(),o=l.$$state
try{r.url(t,e,n),l.$$state=r.state()}catch(a){throw l.url(i),l.$$state=o,a}}function c(t,e){n.$broadcast("$locationChangeSuccess",l.absUrl(),t,l.$$state,e)}var l,f,h,d=r.baseHref(),p=r.url()
if(e.enabled){if(!d&&e.requireBase)throw ta("nobase","$location in HTML5 mode requires a <base> tag to be present!")
h=fn(p)+(d||"/"),f=i.history?hn:pn}else h=cn(p),f=dn
var $=ln(h)
l=new f(h,$,"#"+t),l.$$parseLinkUrl(p,p),l.$$state=r.state()
var v=/^\s*(javascript|mailto):/i
o.on("click",function(t){var i=e.rewriteLinks
if(i&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&2!==t.which&&2!==t.button){for(var a=vi(t.target);"a"!==q(a[0]);)if(a[0]===o[0]||!(a=a.parent())[0])return
if(!C(i)||!y(a.attr(i))){var s=a.prop("href"),u=a.attr("href")||a.attr("xlink:href")
w(s)&&"[object SVGAnimatedString]"===s.toString()&&(s=er(s.animVal).href),v.test(s)||!s||a.attr("target")||t.isDefaultPrevented()||l.$$parseLinkUrl(s,u)&&(t.preventDefault(),l.absUrl()!==r.url()&&n.$apply())}}}),l.absUrl()!==p&&r.url(l.absUrl(),!0)
var m=!0
return r.onUrlChange(function(t,e){return sn(t,$)?(n.$evalAsync(function(){var r,i=l.absUrl(),o=l.$$state
l.$$parse(t),l.$$state=e,r=n.$broadcast("$locationChangeStart",t,i,e,o).defaultPrevented,l.absUrl()===t&&(r?(l.$$parse(i),l.$$state=o,u(i,!1,o)):(m=!1,c(i,o)))}),void(n.$$phase||n.$digest())):void(a.location.href=t)}),n.$watch(function(){if(m||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1
var t=r.url(),e=l.absUrl(),o=r.state(),a=l.$$replace,f=!s(t,e)||l.$$html5&&i.history&&o!==l.$$state;(m||f)&&(m=!1,n.$evalAsync(function(){var e=l.absUrl(),r=n.$broadcast("$locationChangeStart",e,t,l.$$state,o).defaultPrevented
l.absUrl()===e&&(r?(l.$$parse(t),l.$$state=o):(f&&u(e,a,o===l.$$state?null:l.$$state),c(t,o)))}))}l.$$replace=!1}),l}]}function gn(){var t=!0,e=this
this.debugEnabled=function(e){return b(e)?(t=e,this):t},this.$get=["$window",function(n){function r(t){return A(t)&&(t.stack&&a?t=t.message&&t.stack.indexOf(t.message)===-1?"Error: "+t.message+"\n"+t.stack:t.stack:t.sourceURL&&(t=t.message+"\n"+t.sourceURL+":"+t.line)),t}function i(t){var e=n.console||{},i=e[t]||e.log||$
return function(){var t=[]
return o(arguments,function(e){t.push(r(e))}),Function.prototype.apply.call(i,e,t)}}var a=$i||/\bEdge\//.test(n.navigator&&n.navigator.userAgent)
return{log:i("log"),info:i("info"),warn:i("warn"),error:i("error"),debug:function(){var n=i("debug")
return function(){t&&n.apply(e,arguments)}}()}}]}function yn(t){return t+""}function bn(t,e){return"undefined"!=typeof t?t:e}function wn(t,e){return"undefined"==typeof t?e:"undefined"==typeof e?t:t+e}function xn(t,e){var n=t(e)
return!n.$stateful}function Cn(t,e){switch(t.type){case ua.MemberExpression:if(t.computed)return!1
break
case ua.UnaryExpression:return ca
case ua.BinaryExpression:return"+"!==t.operator&&ca
case ua.CallExpression:return!1}return void 0===e?la:e}function Sn(t,e,n){var r,i,a,s=t.isPure=Cn(t,n)
switch(t.type){case ua.Program:r=!0,o(t.body,function(t){Sn(t.expression,e,s),r=r&&t.expression.constant}),t.constant=r
break
case ua.Literal:t.constant=!0,t.toWatch=[]
break
case ua.UnaryExpression:Sn(t.argument,e,s),t.constant=t.argument.constant,t.toWatch=t.argument.toWatch
break
case ua.BinaryExpression:Sn(t.left,e,s),Sn(t.right,e,s),t.constant=t.left.constant&&t.right.constant,t.toWatch=t.left.toWatch.concat(t.right.toWatch)
break
case ua.LogicalExpression:Sn(t.left,e,s),Sn(t.right,e,s),t.constant=t.left.constant&&t.right.constant,t.toWatch=t.constant?[]:[t]
break
case ua.ConditionalExpression:Sn(t.test,e,s),Sn(t.alternate,e,s),Sn(t.consequent,e,s),t.constant=t.test.constant&&t.alternate.constant&&t.consequent.constant,t.toWatch=t.constant?[]:[t]
break
case ua.Identifier:t.constant=!1,t.toWatch=[t]
break
case ua.MemberExpression:Sn(t.object,e,s),t.computed&&Sn(t.property,e,s),t.constant=t.object.constant&&(!t.computed||t.property.constant),t.toWatch=t.constant?[]:[t]
break
case ua.CallExpression:a=!!t.filter&&xn(e,t.callee.name),r=a,i=[],o(t.arguments,function(t){Sn(t,e,s),r=r&&t.constant,i.push.apply(i,t.toWatch)}),t.constant=r,t.toWatch=a?i:[t]
break
case ua.AssignmentExpression:Sn(t.left,e,s),Sn(t.right,e,s),t.constant=t.left.constant&&t.right.constant,t.toWatch=[t]
break
case ua.ArrayExpression:r=!0,i=[],o(t.elements,function(t){Sn(t,e,s),r=r&&t.constant,i.push.apply(i,t.toWatch)}),t.constant=r,t.toWatch=i
break
case ua.ObjectExpression:r=!0,i=[],o(t.properties,function(t){Sn(t.value,e,s),r=r&&t.value.constant,i.push.apply(i,t.value.toWatch),t.computed&&(Sn(t.key,e,!1),r=r&&t.key.constant,i.push.apply(i,t.key.toWatch))}),t.constant=r,t.toWatch=i
break
case ua.ThisExpression:t.constant=!1,t.toWatch=[]
break
case ua.LocalsExpression:t.constant=!1,t.toWatch=[]}}function En(t){if(1===t.length){var e=t[0].expression,n=e.toWatch
return 1!==n.length?n:n[0]!==e?n:void 0}}function kn(t){return t.type===ua.Identifier||t.type===ua.MemberExpression}function An(t){if(1===t.body.length&&kn(t.body[0].expression))return{type:ua.AssignmentExpression,left:t.body[0].expression,right:{type:ua.NGValueParameter},operator:"="}}function On(t){return 0===t.body.length||1===t.body.length&&(t.body[0].expression.type===ua.Literal||t.body[0].expression.type===ua.ArrayExpression||t.body[0].expression.type===ua.ObjectExpression)}function Tn(t){return t.constant}function Mn(t){this.$filter=t}function Dn(t){this.$filter=t}function Vn(t,e,n){this.ast=new ua(t,n),this.astCompiler=n.csp?new Dn(e):new Mn(e)}function Nn(t){return O(t.valueOf)?t.valueOf():ia.call(t)}function jn(){var t,e,n=xt(),r={"true":!0,"false":!1,"null":null,undefined:void 0}
this.addLiteral=function(t,e){r[t]=e},this.setIdentifierFns=function(n,r){return t=n,e=r,this},this.$get=["$filter",function(i){function a(t,e){var r,o
switch(typeof t){case"string":if(t=t.trim(),o=t,r=n[o],!r){var a=new sa(y),s=new Vn(a,i,y)
r=s.parse(t),n[o]=d(r)}return m(r,e)
case"function":return m(t,e)
default:return m($,e)}}function s(t){var e=new sa(y),n=new Vn(e,i,y)
return n.getAst(t).ast}function u(t,e,n){return null==t||null==e?t===e:!("object"==typeof t&&(t=Nn(t),"object"==typeof t&&!n))&&(t===e||t!==t&&e!==e)}function c(t,e,n,r,i){var o,a=r.inputs
if(1===a.length){var s=u
return a=a[0],t.$watch(function(t){var e=a(t)
return u(e,s,a.isPure)||(o=r(t,void 0,void 0,[e]),s=e&&Nn(e)),o},e,n,i)}for(var c=[],l=[],f=0,h=a.length;f<h;f++)c[f]=u,l[f]=null
return t.$watch(function(t){for(var e=!1,n=0,i=a.length;n<i;n++){var s=a[n](t);(e||(e=!u(s,c[n],a[n].isPure)))&&(l[n]=s,c[n]=s&&Nn(s))}return e&&(o=r(t,void 0,void 0,l)),o},e,n,i)}function l(t,e,n,r,i){function o(){c(u)&&s()}function a(t,e,n,r){return u=p&&r?r[0]:l(t,e,n,r),c(u)&&t.$$postDigest(o),h(u)}var s,u,c=r.literal?f:b,l=r.$$intercepted||r,h=r.$$interceptor||v,p=r.inputs&&!l.inputs
return a.literal=r.literal,a.constant=r.constant,a.inputs=r.inputs,d(a),s=t.$watch(a,e,n,i)}function f(t){var e=!0
return o(t,function(t){b(t)||(e=!1)}),e}function h(t,e,n,r){var i=t.$watch(function(t){return i(),r(t)},e,n)
return i}function d(t){return t.constant?t.$$watchDelegate=h:t.oneTime?t.$$watchDelegate=l:t.inputs&&(t.$$watchDelegate=c),t}function p(t,e){function n(n){return e(t(n))}return n.$stateful=t.$stateful||e.$stateful,n.$$pure=t.$$pure&&e.$$pure,n}function m(t,e){if(!e)return t
t.$$interceptor&&(e=p(t.$$interceptor,e),t=t.$$intercepted)
var n=!1,r=function(r,i,o,a){var s=n&&a?a[0]:t(r,i,o,a)
return e(s)}
return r.$$intercepted=t,r.$$interceptor=e,r.literal=t.literal,r.oneTime=t.oneTime,r.constant=t.constant,e.$stateful||(n=!t.inputs,r.inputs=t.inputs?t.inputs:[t],e.$$pure||(r.inputs=r.inputs.map(function(t){return t.isPure===la?function(e){return t(e)}:t}))),d(r)}var g=Ii().noUnsafeEval,y={csp:g,literals:B(r),isIdentifierStart:O(t)&&t,isIdentifierContinue:O(e)&&e}
return a.$$getAst=s,a}]}function Pn(){var t=!0
this.$get=["$rootScope","$exceptionHandler",function(e,n){return In(function(t){e.$evalAsync(t)},n,t)}],this.errorOnUnhandledRejections=function(e){return b(e)?(t=e,this):t}}function Rn(){var t=!0
this.$get=["$browser","$exceptionHandler",function(e,n){return In(function(t){e.defer(t)},n,t)}],this.errorOnUnhandledRejections=function(e){return b(e)?(t=e,this):t}}function In(t,e,n){function i(){return new a}function a(){var t=this.promise=new s
this.resolve=function(e){h(t,e)},this.reject=function(e){p(t,e)},this.notify=function(e){v(t,e)}}function s(){this.$$state={status:0}}function u(r){var i,o,a
a=r.pending,r.processScheduled=!1,r.pending=void 0
try{for(var s=0,u=a.length;s<u;++s){Un(r),o=a[s][0],i=a[s][r.status]
try{O(i)?h(o,i(r.value)):1===r.status?h(o,r.value):p(o,r.value)}catch(l){p(o,l),l&&l.$$passToExceptionHandler===!0&&e(l)}}}finally{--T,n&&0===T&&t(c)}}function c(){for(;!T&&M.length;){var t=M.shift()
if(!Ln(t)){Un(t)
var n="Possibly unhandled rejection: "+At(t.value)
A(t.value)?e(t.value,n):e(n)}}}function l(e){!n||e.pending||2!==e.status||Ln(e)||(0===T&&0===M.length&&t(c),M.push(e)),!e.processScheduled&&e.pending&&(e.processScheduled=!0,++T,t(function(){u(e)}))}function h(t,e){t.$$state.status||(e===t?$(t,E("qcycle","Expected promise to be resolved with value other than itself '{0}'",e)):d(t,e))}function d(t,e){function n(e){a||(a=!0,d(t,e))}function r(e){a||(a=!0,$(t,e))}function i(e){v(t,e)}var o,a=!1
try{(w(e)||O(e))&&(o=e.then),O(o)?(t.$$state.status=-1,o.call(e,n,r,i)):(t.$$state.value=e,t.$$state.status=1,l(t.$$state))}catch(s){r(s)}}function p(t,e){t.$$state.status||$(t,e)}function $(t,e){t.$$state.value=e,t.$$state.status=2,l(t.$$state)}function v(n,r){var i=n.$$state.pending
n.$$state.status<=0&&i&&i.length&&t(function(){for(var t,n,o=0,a=i.length;o<a;o++){n=i[o][0],t=i[o][3]
try{v(n,O(t)?t(r):r)}catch(s){e(s)}}})}function m(t){var e=new s
return p(e,t),e}function g(t,e,n){var r=null
try{O(n)&&(r=n())}catch(i){return m(i)}return R(r)?r.then(function(){return e(t)},m):e(t)}function b(t,e,n,r){var i=new s
return h(i,t),i.then(e,n,r)}function x(t){var e=new s,n=0,r=k(t)?[]:{}
return o(t,function(t,i){n++,b(t).then(function(t){r[i]=t,--n||h(e,r)},function(t){p(e,t)})}),0===n&&h(e,r),e}function C(t){var e=i()
return o(t,function(t){b(t).then(e.resolve,e.reject)}),e.promise}function S(t){function e(t){h(r,t)}function n(t){p(r,t)}if(!O(t))throw E("norslvr","Expected resolverFn, got '{0}'",t)
var r=new s
return t(e,n),r}var E=r("$q",TypeError),T=0,M=[]
f(s.prototype,{then:function(t,e,n){if(y(t)&&y(e)&&y(n))return this
var r=new s
return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([r,t,e,n]),this.$$state.status>0&&l(this.$$state),r},"catch":function(t){return this.then(null,t)},"finally":function(t,e){return this.then(function(e){return g(e,D,t)},function(e){return g(e,m,t)},e)}})
var D=b
return S.prototype=s.prototype,S.defer=i,S.reject=m,S.when=b,S.resolve=D,S.all=x,S.race=C,S}function Ln(t){return!!t.pur}function Un(t){t.pur=!0}function _n(t){t.$$state&&Un(t.$$state)}function qn(){this.$get=["$window","$timeout",function(t,e){var n=t.requestAnimationFrame||t.webkitRequestAnimationFrame,r=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.webkitCancelRequestAnimationFrame,i=!!n,o=i?function(t){var e=n(t)
return function(){r(e)}}:function(t){var n=e(t,16.66,!1)
return function(){e.cancel(n)}}
return o.supported=i,o}]}function Fn(){function t(t){function e(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=u(),this.$$ChildScope=null,this.$$suspended=!1}return e.prototype=t,e}var e=10,n=r("$rootScope"),a=null,s=null
this.digestTtl=function(t){return arguments.length&&(e=t),e},this.$get=["$exceptionHandler","$parse","$browser",function(r,c,l){function f(t){t.currentScope.$$destroyed=!0}function h(t){9===$i&&(t.$$childHead&&h(t.$$childHead),t.$$nextSibling&&h(t.$$nextSibling)),t.$parent=t.$$nextSibling=t.$$prevSibling=t.$$childHead=t.$$childTail=t.$root=t.$$watchers=null}function d(){this.$id=u(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$suspended=!1,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$$isolateBindings=null}function p(t){if(S.$$phase)throw n("inprog","{0} already in progress",S.$$phase)
S.$$phase=t}function v(){S.$$phase=null}function m(t,e){do t.$$watchersCount+=e
while(t=t.$parent)}function g(t,e,n){do t.$$listenerCount[n]-=e,0===t.$$listenerCount[n]&&delete t.$$listenerCount[n]
while(t=t.$parent)}function b(){}function x(){for(;A.length;)try{A.shift()()}catch(t){r(t)}s=null}function C(){null===s&&(s=l.defer(function(){S.$apply(x)},null,"$applyAsync"))}d.prototype={constructor:d,$new:function(e,n){var r
return n=n||this,e?(r=new d,r.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=t(this)),r=new this.$$ChildScope),r.$parent=n,r.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=r,n.$$childTail=r):n.$$childHead=n.$$childTail=r,(e||n!==this)&&r.$on("$destroy",f),r},$watch:function(t,e,n,r){var i=c(t),o=O(e)?e:$
if(i.$$watchDelegate)return i.$$watchDelegate(this,o,n,i,t)
var s=this,u=s.$$watchers,l={fn:o,last:b,get:i,exp:r||t,eq:!!n}
return a=null,u||(u=s.$$watchers=[],u.$$digestWatchIndex=-1),u.unshift(l),u.$$digestWatchIndex++,m(this,1),function(){var t=H(u,l)
t>=0&&(m(s,-1),t<u.$$digestWatchIndex&&u.$$digestWatchIndex--),a=null}},$watchGroup:function(t,e){function n(){u=!1
try{c?(c=!1,e(i,i,s)):e(i,r,s)}finally{for(var n=0;n<t.length;n++)r[n]=i[n]}}var r=new Array(t.length),i=new Array(t.length),a=[],s=this,u=!1,c=!0
if(!t.length){var l=!0
return s.$evalAsync(function(){l&&e(i,i,s)}),function(){l=!1}}return 1===t.length?this.$watch(t[0],function(t,n,o){i[0]=t,r[0]=n,e(i,t===n?i:r,o)}):(o(t,function(t,e){var r=s.$watch(t,function(t){i[e]=t,u||(u=!0,s.$evalAsync(n))})
a.push(r)}),function(){for(;a.length;)a.shift()()})},$watchCollection:function(t,e){function n(t){o=t
var e,n,r,s,u
if(!y(o)){if(w(o))if(i(o)){a!==d&&(a=d,v=a.length=0,f++),e=o.length,v!==e&&(f++,a.length=v=e)
for(var c=0;c<e;c++)u=a[c],s=o[c],r=u!==u&&s!==s,r||u===s||(f++,a[c]=s)}else{a!==p&&(a=p={},v=0,f++),e=0
for(n in o)xi.call(o,n)&&(e++,s=o[n],u=a[n],n in a?(r=u!==u&&s!==s,r||u===s||(f++,a[n]=s)):(v++,a[n]=s,f++))
if(v>e){f++
for(n in a)xi.call(o,n)||(v--,delete a[n])}}else a!==o&&(a=o,f++)
return f}}function r(){if($?($=!1,e(o,o,u)):e(o,s,u),l)if(w(o))if(i(o)){s=new Array(o.length)
for(var t=0;t<o.length;t++)s[t]=o[t]}else{s={}
for(var n in o)xi.call(o,n)&&(s[n]=o[n])}else s=o}n.$$pure=c(t).literal,n.$stateful=!n.$$pure
var o,a,s,u=this,l=e.length>1,f=0,h=c(t,n),d=[],p={},$=!0,v=0
return this.$watch(h,r)},$digest:function(){var t,i,o,u,c,f,h,d,$,m,g,y=e,w=E.length?S:this,C=[]
p("$digest"),l.$$checkUrlChange(),this===S&&null!==s&&(l.defer.cancel(s),x()),a=null
do{h=!1,$=w
for(var A=0;A<E.length;A++){try{g=E[A],u=g.fn,u(g.scope,g.locals)}catch(M){r(M)}a=null}E.length=0
t:do{if(f=!$.$$suspended&&$.$$watchers)for(f.$$digestWatchIndex=f.length;f.$$digestWatchIndex--;)try{if(t=f[f.$$digestWatchIndex])if(c=t.get,(i=c($))===(o=t.last)||(t.eq?W(i,o):Ni(i)&&Ni(o))){if(t===a){h=!1
break t}}else h=!0,a=t,t.last=t.eq?B(i,null):i,u=t.fn,u(i,o===b?i:o,$),y<5&&(m=4-y,C[m]||(C[m]=[]),C[m].push({msg:O(t.exp)?"fn: "+(t.exp.name||t.exp.toString()):t.exp,newVal:i,oldVal:o}))}catch(M){r(M)}if(!(d=!$.$$suspended&&$.$$watchersCount&&$.$$childHead||$!==w&&$.$$nextSibling))for(;$!==w&&!(d=$.$$nextSibling);)$=$.$parent}while($=d)
if((h||E.length)&&!y--)throw v(),n("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",e,C)}while(h||E.length)
for(v();T<k.length;)try{k[T++]()}catch(M){r(M)}k.length=T=0,l.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var t=this.$parent
this.$broadcast("$destroy"),this.$$destroyed=!0,this===S&&l.$$applicationDestroyed(),m(this,-this.$$watchersCount)
for(var e in this.$$listenerCount)g(this,this.$$listenerCount[e],e)
t&&t.$$childHead===this&&(t.$$childHead=this.$$nextSibling),t&&t.$$childTail===this&&(t.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=$,this.$on=this.$watch=this.$watchGroup=function(){return $},this.$$listeners={},this.$$nextSibling=null,h(this)}},$eval:function(t,e){return c(t)(this,e)},$evalAsync:function(t,e){S.$$phase||E.length||l.defer(function(){E.length&&S.$digest()},null,"$evalAsync"),E.push({scope:this,fn:c(t),locals:e})},$$postDigest:function(t){k.push(t)},$apply:function(t){try{p("$apply")
try{return this.$eval(t)}finally{v()}}catch(e){r(e)}finally{try{S.$digest()}catch(e){throw r(e),e}}},$applyAsync:function(t){function e(){n.$eval(t)}var n=this
t&&A.push(e),t=c(t),C()},$on:function(t,e){var n=this.$$listeners[t]
n||(this.$$listeners[t]=n=[]),n.push(e)
var r=this
do r.$$listenerCount[t]||(r.$$listenerCount[t]=0),r.$$listenerCount[t]++
while(r=r.$parent)
var i=this
return function(){var r=n.indexOf(e)
r!==-1&&(delete n[r],g(i,1,t))}},$emit:function(t,e){var n,i,o,a=[],s=this,u=!1,c={name:t,targetScope:s,stopPropagation:function(){u=!0},preventDefault:function(){c.defaultPrevented=!0},defaultPrevented:!1},l=G([c],arguments,1)
do{for(n=s.$$listeners[t]||a,c.currentScope=s,i=0,o=n.length;i<o;i++)if(n[i])try{n[i].apply(null,l)}catch(f){r(f)}else n.splice(i,1),i--,o--
if(u)break
s=s.$parent}while(s)
return c.currentScope=null,c},$broadcast:function(t,e){var n=this,i=n,o=n,a={name:t,targetScope:n,preventDefault:function(){a.defaultPrevented=!0},defaultPrevented:!1}
if(!n.$$listenerCount[t])return a
for(var s,u,c,l=G([a],arguments,1);i=o;){for(a.currentScope=i,s=i.$$listeners[t]||[],u=0,c=s.length;u<c;u++)if(s[u])try{s[u].apply(null,l)}catch(f){r(f)}else s.splice(u,1),u--,c--
if(!(o=i.$$listenerCount[t]&&i.$$childHead||i!==n&&i.$$nextSibling))for(;i!==n&&!(o=i.$$nextSibling);)i=i.$parent}return a.currentScope=null,a}}
var S=new d,E=S.$$asyncQueue=[],k=S.$$postDigestQueue=[],A=S.$$applyAsyncQueue=[],T=0
return S}]}function Hn(){var t=/^\s*(https?|s?ftp|mailto|tel|file):/,e=/^\s*((https?|ftp|file|blob):|data:image\/)/
this.aHrefSanitizationTrustedUrlList=function(e){return b(e)?(t=e,this):t},this.imgSrcSanitizationTrustedUrlList=function(t){return b(t)?(e=t,this):e},this.$get=function(){return function(n,r){var i=r?e:t,o=er(n&&n.trim()).href
return""===o||o.match(i)?n:"unsafe:"+o}}}function Bn(t){return t.replace(pa,Dt)}function zn(t){if("self"===t)return t
if(C(t)){if(t.indexOf("***")>-1)throw ha("iwcard","Illegal sequence *** in string matcher.  String: {0}",t)
return t=Ri(t).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*"),new RegExp("^"+t+"$")}if(T(t))return new RegExp("^"+t.source+"$")
throw ha("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function Wn(t){var e=[]
return b(t)&&o(t,function(t){e.push(zn(t))}),e}function Gn(){this.SCE_CONTEXTS=da
var t=["self"],e=[]
this.trustedResourceUrlList=function(e){return arguments.length&&(t=Wn(e)),t},Object.defineProperty(this,"resourceUrlWhitelist",{get:function(){return this.trustedResourceUrlList},set:function(t){this.trustedResourceUrlList=t}}),this.bannedResourceUrlList=function(t){return arguments.length&&(e=Wn(t)),e},Object.defineProperty(this,"resourceUrlBlacklist",{get:function(){return this.bannedResourceUrlList},set:function(t){this.bannedResourceUrlList=t}}),this.$get=["$injector","$$sanitizeUri",function(n,r){function i(t,e){return"self"===t?nr(e)||rr(e):!!t.exec(e.href)}function o(n){var r,o,a=er(n.toString()),s=!1
for(r=0,o=t.length;r<o;r++)if(i(t[r],a)){s=!0
break}if(s)for(r=0,o=e.length;r<o;r++)if(i(e[r],a)){s=!1
break}return s}function a(t){var e=function(t){this.$$unwrapTrustedValue=function(){return t}}
return t&&(e.prototype=new t),e.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},e.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},e}function s(t,e){var n=h.hasOwnProperty(t)?h[t]:null
if(!n)throw ha("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",t,e)
if(null===e||y(e)||""===e)return e
if("string"!=typeof e)throw ha("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",t)
return new n(e)}function u(t){return t instanceof f?t.$$unwrapTrustedValue():t}function c(t,e){if(null===e||y(e)||""===e)return e
var n=h.hasOwnProperty(t)?h[t]:null
if(n&&e instanceof n)return e.$$unwrapTrustedValue()
if(O(e.$$unwrapTrustedValue)&&(e=e.$$unwrapTrustedValue()),t===da.MEDIA_URL||t===da.URL)return r(e.toString(),t===da.MEDIA_URL)
if(t===da.RESOURCE_URL){if(o(e))return e
throw ha("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",e.toString())}if(t===da.HTML)return l(e)
throw ha("unsafe","Attempting to use an unsafe value in a safe context.")}var l=function(t){throw ha("unsafe","Attempting to use an unsafe value in a safe context.")}
n.has("$sanitize")&&(l=n.get("$sanitize"))
var f=a(),h={}
return h[da.HTML]=a(f),h[da.CSS]=a(f),h[da.MEDIA_URL]=a(f),h[da.URL]=a(h[da.MEDIA_URL]),h[da.JS]=a(f),h[da.RESOURCE_URL]=a(h[da.URL]),{trustAs:s,getTrusted:c,valueOf:u}}]}function Kn(){var t=!0
this.enabled=function(e){return arguments.length&&(t=!!e),t},this.$get=["$parse","$sceDelegate",function(e,n){if(t&&$i<8)throw ha("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.")
var r=Et(da)
r.isEnabled=function(){return t},r.trustAs=n.trustAs,r.getTrusted=n.getTrusted,r.valueOf=n.valueOf,t||(r.trustAs=r.getTrusted=function(t,e){return e},r.valueOf=v),r.parseAs=function(t,n){var i=e(n)
return i.literal&&i.constant?i:e(n,function(e){return r.getTrusted(t,e)})}
var i=r.parseAs,a=r.getTrusted,s=r.trustAs
return o(da,function(t,e){var n=Ci(e)
r[Bn("parse_as_"+n)]=function(e){return i(t,e)},r[Bn("get_trusted_"+n)]=function(e){return a(t,e)},r[Bn("trust_as_"+n)]=function(e){return s(t,e)}}),r}]}function Jn(){this.$get=["$window","$document",function(t,e){var n={},r=t.nw&&t.nw.process,i=!r&&t.chrome&&(t.chrome.app&&t.chrome.app.runtime||!t.chrome.app&&t.chrome.runtime&&t.chrome.runtime.id),o=!i&&t.history&&t.history.pushState,a=d((/android (\d+)/.exec(Ci((t.navigator||{}).userAgent))||[])[1]),s=/Boxee/i.test((t.navigator||{}).userAgent),u=e[0]||{},c=u.body&&u.body.style,l=!1,f=!1
return c&&(l=!!("transition"in c||"webkitTransition"in c),f=!!("animation"in c||"webkitAnimation"in c)),{history:!(!o||a<4||s),hasEvent:function(t){if("input"===t&&$i)return!1
if(y(n[t])){var e=u.createElement("div")
n[t]="on"+t in e}return n[t]},csp:Ii(),transitions:l,animations:f,android:a}}]}function Yn(){this.$get=m(function(t){return new Zn(t)})}function Zn(t){function e(e,o){o=o||f
try{e()}finally{n(o)
var a=u[o],s=u[l]
if(!s||!a)for(var c,h=s?i:r;c=h(o);)try{c()}catch(d){t.error(d)}}}function n(t){t=t||f,u[t]&&(u[t]--,u[l]--)}function r(){var t=c.pop()
return t&&t.cb}function i(t){for(var e=c.length-1;e>=0;--e){var n=c[e]
if(n.type===t)return c.splice(e,1),n.cb}}function o(t){t=t||f,u[t]=(u[t]||0)+1,u[l]=(u[l]||0)+1}function a(t,e){e=e||l,u[e]?c.push({type:e,cb:t}):t()}var s=this,u={},c=[],l=s.ALL_TASKS_TYPE="$$all$$",f=s.DEFAULT_TASK_TYPE="$$default$$"
s.completeTask=e,s.incTaskCount=o,s.notifyWhenNoPendingTasks=a}function Xn(){var t
this.httpOptions=function(e){return e?(t=e,this):t},this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(e,n,r,i,o){function a(s,u){function c(t){return u||(t=$a("tpload","Failed to load template: {0} (HTTP status: {1} {2})",s,t.status,t.statusText),e(t)),i.reject(t)}a.totalPendingRequests++,C(s)&&!y(n.get(s))||(s=o.getTrustedResourceUrl(s))
var l=r.defaults&&r.defaults.transformResponse
return k(l)?l=l.filter(function(t){return t!==Fe}):l===Fe&&(l=null),r.get(s,f({cache:n,transformResponse:l},t))["finally"](function(){a.totalPendingRequests--}).then(function(t){return n.put(s,t.data)},c)}return a.totalPendingRequests=0,a}]}function Qn(){this.$get=["$rootScope","$browser","$location",function(t,e,n){var r={}
return r.findBindings=function(t,e,n){var r=t.getElementsByClassName("ng-binding"),i=[]
return o(r,function(t){var r=Di.element(t).data("$binding")
r&&o(r,function(r){if(n){var o=new RegExp("(^|\\s)"+Ri(e)+"(\\s|\\||$)")
o.test(r)&&i.push(t)}else r.indexOf(e)!==-1&&i.push(t)})}),i},r.findModels=function(t,e,n){for(var r=["ng-","data-ng-","ng\\:"],i=0;i<r.length;++i){var o=n?"=":"*=",a="["+r[i]+"model"+o+'"'+e+'"]',s=t.querySelectorAll(a)
if(s.length)return s}},r.getLocation=function(){return n.url()},r.setLocation=function(e){e!==n.url()&&(n.url(e),t.$digest())},r.whenStable=function(t){e.notifyWhenNoOutstandingRequests(t)},r}]}function tr(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(t,e,n,r,i){function o(o,s,u){O(o)||(u=s,s=o,o=$)
var c,l=K(arguments,3),f=b(u)&&!u,h=(f?r:n).defer(),d=h.promise
return c=e.defer(function(){try{h.resolve(o.apply(null,l))}catch(e){h.reject(e),i(e)}finally{delete a[d.$$timeoutId]}f||t.$apply()},s,"$timeout"),d.$$timeoutId=c,a[c]=h,d}var a={}
return o.cancel=function(t){if(!t)return!1
if(!t.hasOwnProperty("$$timeoutId"))throw va("badprom","`$timeout.cancel()` called with a promise that was not generated by `$timeout()`.")
if(!a.hasOwnProperty(t.$$timeoutId))return!1
var n=t.$$timeoutId,r=a[n]
return _n(r.promise),r.reject("canceled"),delete a[n],e.defer.cancel(n)},o}]}function er(t){if(!C(t))return t
var e=t
$i&&(ma.setAttribute("href",e),e=ma.href),ma.setAttribute("href",e)
var n=ma.hostname
return!ya&&n.indexOf(":")>-1&&(n="["+n+"]"),{href:ma.href,protocol:ma.protocol?ma.protocol.replace(/:$/,""):"",host:ma.host,search:ma.search?ma.search.replace(/^\?/,""):"",hash:ma.hash?ma.hash.replace(/^#/,""):"",hostname:n,port:ma.port,pathname:"/"===ma.pathname.charAt(0)?ma.pathname:"/"+ma.pathname}}function nr(t){return or(t,ga)}function rr(t){return or(t,ar())}function ir(t){var e=[ga].concat(t.map(er))
return function(t){var n=er(t)
return e.some(or.bind(null,n))}}function or(t,e){return t=er(t),e=er(e),t.protocol===e.protocol&&t.host===e.host}function ar(){return t.document.baseURI?t.document.baseURI:(fa||(fa=t.document.createElement("a"),fa.href=".",fa=fa.cloneNode(!1)),fa.href)}function sr(){this.$get=m(t)}function ur(t){function e(t){try{return t.cookie||""}catch(e){return""}}function n(t){try{return decodeURIComponent(t)}catch(e){return t}}var r=t[0]||{},i={},o=""
return function(){var t,a,s,u,c,l=e(r)
if(l!==o)for(o=l,t=o.split("; "),i={},s=0;s<t.length;s++)a=t[s],u=a.indexOf("="),u>0&&(c=n(a.substring(0,u)),y(i[c])&&(i[c]=n(a.substring(u+1))))
return i}}function cr(){this.$get=ur}function lr(t){function e(r,i){if(w(r)){var a={}
return o(r,function(t,n){a[n]=e(n,t)}),a}return t.factory(r+n,i)}var n="Filter"
this.register=e,this.$get=["$injector",function(t){return function(e){return t.get(e+n)}}],e("currency",$r),e("date",Mr),e("filter",fr),e("json",Dr),e("limitTo",Vr),e("lowercase",ka),e("number",vr),e("orderBy",jr),e("uppercase",Aa)}function fr(){return function(t,e,n,o){if(!i(t)){if(null==t)return t
throw r("filter")("notarray","Expected array but received: {0}",t)}o=o||"$"
var a,s,u=pr(e)
switch(u){case"function":a=e
break
case"boolean":case"null":case"number":case"string":s=!0
case"object":a=hr(e,n,o,s)
break
default:return t}return Array.prototype.filter.call(t,a)}}function hr(t,e,n,r){var i,o=w(t)&&n in t
return e===!0?e=W:O(e)||(e=function(t,e){return!y(t)&&(null===t||null===e?t===e:!(w(e)||w(t)&&!g(t))&&(t=Ci(""+t),e=Ci(""+e),t.indexOf(e)!==-1))}),i=function(i){return o&&!w(i)?dr(i,t[n],e,n,!1):dr(i,t,e,n,r)}}function dr(t,e,n,r,i,o){var a=pr(t),s=pr(e)
if("string"===s&&"!"===e.charAt(0))return!dr(t,e.substring(1),n,r,i)
if(k(t))return t.some(function(t){return dr(t,e,n,r,i)})
switch(a){case"object":var u
if(i){for(u in t)if(u.charAt&&"$"!==u.charAt(0)&&dr(t[u],e,n,r,!0))return!0
return!o&&dr(t,e,n,r,!1)}if("object"===s){for(u in e){var c=e[u]
if(!O(c)&&!y(c)){var l=u===r,f=l?t:t[u]
if(!dr(f,c,n,r,l,l))return!1}}return!0}return n(t,e)
case"function":return!1
default:return n(t,e)}}function pr(t){return null===t?"null":typeof t}function $r(t){var e=t.NUMBER_FORMATS
return function(t,n,r){y(n)&&(n=e.CURRENCY_SYM),y(r)&&(r=e.PATTERNS[1].maxFrac)
var i=n?/\u00A4/g:/\s*\u00A4\s*/g
return null==t?t:yr(t,e.PATTERNS[1],e.GROUP_SEP,e.DECIMAL_SEP,r).replace(i,n)}}function vr(t){var e=t.NUMBER_FORMATS
return function(t,n){return null==t?t:yr(t,e.PATTERNS[0],e.GROUP_SEP,e.DECIMAL_SEP,n)}}function mr(t){var e,n,r,i,o,a=0
for((n=t.indexOf(wa))>-1&&(t=t.replace(wa,"")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charAt(r)===xa;r++);if(r===(o=t.length))e=[0],n=1
else{for(o--;t.charAt(o)===xa;)o--
for(n-=r,e=[],i=0;r<=o;r++,i++)e[i]=+t.charAt(r)}return n>ba&&(e=e.splice(0,ba-1),a=n-1,n=1),{d:e,e:a,i:n}}function gr(t,e,n,r){var i=t.d,o=i.length-t.i
e=y(e)?Math.min(Math.max(n,o),r):+e
var a=e+t.i,s=i[a]
if(a>0){i.splice(Math.max(t.i,a))
for(var u=a;u<i.length;u++)i[u]=0}else{o=Math.max(0,o),t.i=1,i.length=Math.max(1,a=e+1),i[0]=0
for(var c=1;c<a;c++)i[c]=0}if(s>=5)if(a-1<0){for(var l=0;l>a;l--)i.unshift(0),t.i++
i.unshift(1),t.i++}else i[a-1]++
for(;o<Math.max(0,e);o++)i.push(0)
var f=i.reduceRight(function(t,e,n,r){return e+=t,r[n]=e%10,Math.floor(e/10)},0)
f&&(i.unshift(f),t.i++)}function yr(t,e,n,r,i){if(!C(t)&&!S(t)||isNaN(t))return""
var o,a=!isFinite(t),s=!1,u=Math.abs(t)+"",c=""
if(a)c="∞"
else{o=mr(u),gr(o,i,e.minFrac,e.maxFrac)
var l=o.d,f=o.i,h=o.e,d=[]
for(s=l.reduce(function(t,e){return t&&!e},!0);f<0;)l.unshift(0),f++
f>0?d=l.splice(f,l.length):(d=l,l=[0])
var p=[]
for(l.length>=e.lgSize&&p.unshift(l.splice(-e.lgSize,l.length).join(""));l.length>e.gSize;)p.unshift(l.splice(-e.gSize,l.length).join(""))
l.length&&p.unshift(l.join("")),c=p.join(n),d.length&&(c+=r+d.join("")),h&&(c+="e+"+h)}return t<0&&!s?e.negPre+c+e.negSuf:e.posPre+c+e.posSuf}function br(t,e,n,r){var i=""
for((t<0||r&&t<=0)&&(r?t=-t+1:(t=-t,i="-")),t=""+t;t.length<e;)t=xa+t
return n&&(t=t.substr(t.length-e)),i+t}function wr(t,e,n,r,i){return n=n||0,function(o){var a=o["get"+t]()
return(n>0||a>-n)&&(a+=n),0===a&&n===-12&&(a=12),br(a,e,r,i)}}function xr(t,e,n){return function(r,i){var o=r["get"+t](),a=(n?"STANDALONE":"")+(e?"SHORT":""),s=Si(a+t)
return i[s][o]}}function Cr(t,e,n){var r=-1*n,i=r>=0?"+":""
return i+=br(Math[r>0?"floor":"ceil"](r/60),2)+br(Math.abs(r%60),2)}function Sr(t){var e=new Date(t,0,1).getDay()
return new Date(t,0,(e<=4?5:12)-e)}function Er(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function kr(t){return function(e){var n=Sr(e.getFullYear()),r=Er(e),i=+r-+n,o=1+Math.round(i/6048e5)
return br(o,t)}}function Ar(t,e){return t.getHours()<12?e.AMPMS[0]:e.AMPMS[1]}function Or(t,e){return t.getFullYear()<=0?e.ERAS[0]:e.ERAS[1]}function Tr(t,e){return t.getFullYear()<=0?e.ERANAMES[0]:e.ERANAMES[1]}function Mr(t){function e(t){var e
if(e=t.match(n)){var r=new Date(0),i=0,o=0,a=e[8]?r.setUTCFullYear:r.setFullYear,s=e[8]?r.setUTCHours:r.setHours
e[9]&&(i=d(e[9]+e[10]),o=d(e[9]+e[11])),a.call(r,d(e[1]),d(e[2])-1,d(e[3]))
var u=d(e[4]||0)-i,c=d(e[5]||0)-o,l=d(e[6]||0),f=Math.round(1e3*parseFloat("0."+(e[7]||0)))
return s.call(r,u,c,l,f),r}return t}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/
return function(n,r,i){var a,s,u="",c=[]
if(r=r||"mediumDate",r=t.DATETIME_FORMATS[r]||r,C(n)&&(n=Ea.test(n)?d(n):e(n)),S(n)&&(n=new Date(n)),!E(n)||!isFinite(n.getTime()))return n
for(;r;)s=Sa.exec(r),s?(c=G(c,s,1),r=c.pop()):(c.push(r),r=null)
var l=n.getTimezoneOffset()
return i&&(l=Q(i,l),n=et(n,i,!0)),o(c,function(e){a=Ca[e],u+=a?a(n,t.DATETIME_FORMATS,l):"''"===e?"'":e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}}function Dr(){return function(t,e){return y(e)&&(e=2),Z(t,e)}}function Vr(){return function(t,e,n){return e=Math.abs(Number(e))===1/0?Number(e):d(e),Ni(e)?t:(S(t)&&(t=t.toString()),i(t)?(n=!n||isNaN(n)?0:d(n),n=n<0?Math.max(0,t.length+n):n,e>=0?Nr(t,n,n+e):0===n?Nr(t,e,t.length):Nr(t,Math.max(0,n+e),n)):t)}}function Nr(t,e,n){return C(t)?t.slice(e,n):Ei.call(t,e,n)}function jr(t){function e(e){return e.map(function(e){var n=1,r=v
if(O(e))r=e
else if(C(e)&&("+"!==e.charAt(0)&&"-"!==e.charAt(0)||(n="-"===e.charAt(0)?-1:1,e=e.substring(1)),""!==e&&(r=t(e),r.constant))){var i=r()
r=function(t){return t[i]}}return{get:r,descending:n}})}function n(t){switch(typeof t){case"number":case"boolean":case"string":return!0
default:return!1}}function o(t){return O(t.valueOf)&&(t=t.valueOf(),n(t))?t:g(t)&&(t=t.toString(),n(t))?t:t}function a(t,e){var n=typeof t
return null===t?n="null":"object"===n&&(t=o(t)),{value:t,type:n,index:e}}function s(t,e){var n=0,r=t.type,i=e.type
if(r===i){var o=t.value,a=e.value
"string"===r?(o=o.toLowerCase(),a=a.toLowerCase()):"object"===r&&(w(o)&&(o=t.index),w(a)&&(a=e.index)),o!==a&&(n=o<a?-1:1)}else n="undefined"===r?1:"undefined"===i?-1:"null"===r?1:"null"===i?-1:r<i?-1:1
return n}return function(t,n,o,u){function c(t,e){return{value:t,tieBreaker:{value:e,type:"number",index:e},predicateValues:f.map(function(n){return a(n.get(t),e)})}}function l(t,e){for(var n=0,r=f.length;n<r;n++){var i=d(t.predicateValues[n],e.predicateValues[n])
if(i)return i*f[n].descending*h}return(d(t.tieBreaker,e.tieBreaker)||s(t.tieBreaker,e.tieBreaker))*h}if(null==t)return t
if(!i(t))throw r("orderBy")("notarray","Expected array but received: {0}",t)
k(n)||(n=[n]),0===n.length&&(n=["+"])
var f=e(n),h=o?-1:1,d=O(u)?u:s,p=Array.prototype.map.call(t,c)
return p.sort(l),t=p.map(function(t){return t.value})}}function Pr(t){return O(t)&&(t={link:t}),t.restrict=t.restrict||"AC",m(t)}function Rr(t,e){t.$name=e}function Ir(t,e,n,r,i){this.$$controls=[],this.$error={},this.$$success={},this.$pending=void 0,this.$name=i(e.name||e.ngForm||"")(n),this.$dirty=!1,this.$pristine=!0,this.$valid=!0,this.$invalid=!1,this.$submitted=!1,this.$$parentForm=Ma,this.$$element=t,this.$$animate=r,Lr(this)}function Lr(t){t.$$classCache={},t.$$classCache[$s]=!(t.$$classCache[ps]=t.$$element.hasClass(ps))}function Ur(t){function e(t,e,n,r){t[e]||(t[e]={}),a(t[e],n,r)}function n(t,e,n,r){t[e]&&s(t[e],n,r),_r(t[e])&&(t[e]=void 0)}function r(t,e,n){n&&!t.$$classCache[e]?(t.$$animate.addClass(t.$$element,e),t.$$classCache[e]=!0):!n&&t.$$classCache[e]&&(t.$$animate.removeClass(t.$$element,e),t.$$classCache[e]=!1)}function i(t,e,n){e=e?"-"+pt(e,"-"):"",r(t,ps+e,n===!0),r(t,$s+e,n===!1)}var o=t.clazz,a=t.set,s=t.unset
o.prototype.$setValidity=function(t,o,u){y(o)?e(this,"$pending",t,u):n(this,"$pending",t,u),P(o)?o?(s(this.$error,t,u),a(this.$$success,t,u)):(a(this.$error,t,u),s(this.$$success,t,u)):(s(this.$error,t,u),s(this.$$success,t,u)),this.$pending?(r(this,Da,!0),this.$valid=this.$invalid=void 0,i(this,"",null)):(r(this,Da,!1),this.$valid=_r(this.$error),this.$invalid=!this.$valid,i(this,"",this.$valid))
var c
c=this.$pending&&this.$pending[t]?void 0:!this.$error[t]&&(!!this.$$success[t]||null),i(this,t,c),this.$$parentForm.$setValidity(t,c,this)}}function _r(t){if(t)for(var e in t)if(t.hasOwnProperty(e))return!1
return!0}function qr(t){t.$formatters.push(function(e){return t.$isEmpty(e)?e:e.toString()})}function Fr(t,e,n,r,i,o){Hr(t,e,n,r,i,o),qr(r)}function Hr(t,e,n,r,i,o){var a=Ci(e[0].type)
if(!i.android){var s=!1
e.on("compositionstart",function(){s=!0}),e.on("compositionupdate",function(t){(y(t.data)||""===t.data)&&(s=!1)}),e.on("compositionend",function(){s=!1,c()})}var u,c=function(t){if(u&&(o.defer.cancel(u),u=null),!s){var i=e.val(),c=t&&t.type
"password"===a||n.ngTrim&&"false"===n.ngTrim||(i=Pi(i)),(r.$viewValue!==i||""===i&&r.$$hasNativeValidators)&&r.$setViewValue(i,c)}}
if(i.hasEvent("input"))e.on("input",c)
else{var l=function(t,e,n){u||(u=o.defer(function(){u=null,e&&e.value===n||c(t)}))}
e.on("keydown",function(t){var e=t.keyCode
91===e||15<e&&e<19||37<=e&&e<=40||l(t,this,this.value)}),i.hasEvent("paste")&&e.on("paste cut drop",l)}e.on("change",c),Wa[a]&&r.$$hasNativeValidators&&a===n.type&&e.on(za,function(t){if(!u){var e=this[wi],n=e.badInput,r=e.typeMismatch
u=o.defer(function(){u=null,e.badInput===n&&e.typeMismatch===r||c(t)})}}),r.$render=function(){var t=r.$isEmpty(r.$viewValue)?"":r.$viewValue
e.val()!==t&&e.val(t)}}function Br(t,e){if(E(t))return t
if(C(t)){Fa.lastIndex=0
var n=Fa.exec(t)
if(n){var r=+n[1],i=+n[2],o=0,a=0,s=0,u=0,c=Sr(r),l=7*(i-1)
return e&&(o=e.getHours(),a=e.getMinutes(),s=e.getSeconds(),u=e.getMilliseconds()),new Date(r,0,c.getDate()+l,o,a,s,u)}}return NaN}function zr(t,e){return function(n,r){var i,a
if(E(n))return n
if(C(n)){if('"'===n.charAt(0)&&'"'===n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),Ra.test(n))return new Date(n)
if(t.lastIndex=0,i=t.exec(n)){i.shift(),a=r?{yyyy:r.getFullYear(),MM:r.getMonth()+1,dd:r.getDate(),HH:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),sss:r.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},o(i,function(t,n){n<e.length&&(a[e[n]]=+t)})
var s=new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,1e3*a.sss||0)
return a.yyyy<100&&s.setFullYear(a.yyyy),s}}return NaN}}function Wr(t,e,n,r){return function(i,o,a,s,u,c,l,f){function h(t){return t&&!(t.getTime&&t.getTime()!==t.getTime())}function d(t){return b(t)&&!E(t)?p(t)||void 0:t}function p(t,e){var r=s.$options.getOption("timezone")
m&&m!==r&&(e=tt(e,Q(m)))
var i=n(t,e)
return!isNaN(i)&&r&&(i=et(i,r)),i}function $(t,e){var n=r
g&&C(s.$options.getOption("timeSecondsFormat"))&&(n=r.replace("ss.sss",s.$options.getOption("timeSecondsFormat")).replace(/:$/,""))
var i=l("date")(t,n,e)
return g&&s.$options.getOption("timeStripZeroSeconds")&&(i=i.replace(/(?::00)?(?:\.000)?$/,"")),i}Gr(i,o,a,s,t),Hr(i,o,a,s,u,c)
var v,m,g="time"===t||"datetimelocal"===t
if(s.$parsers.push(function(n){return s.$isEmpty(n)?null:e.test(n)?p(n,v):void(s.$$parserName=t)}),s.$formatters.push(function(t){if(t&&!E(t))throw xs("datefmt","Expected `{0}` to be a date",t)
if(h(t)){v=t
var e=s.$options.getOption("timezone")
return e&&(m=e,v=et(v,e,!0)),$(t,e)}return v=null,m=null,""}),b(a.min)||a.ngMin){var w=a.min||f(a.ngMin)(i),x=d(w)
s.$validators.min=function(t){return!h(t)||y(x)||n(t)>=x},a.$observe("min",function(t){t!==w&&(x=d(t),w=t,s.$validate())})}if(b(a.max)||a.ngMax){var S=a.max||f(a.ngMax)(i),k=d(S)
s.$validators.max=function(t){return!h(t)||y(k)||n(t)<=k},a.$observe("max",function(t){t!==S&&(k=d(t),S=t,s.$validate())})}}}function Gr(t,e,n,r,i){var o=e[0],a=r.$$hasNativeValidators=w(o.validity)
a&&r.$parsers.push(function(t){var n=e.prop(wi)||{}
return n.badInput||n.typeMismatch?void(r.$$parserName=i):t})}function Kr(t){t.$parsers.push(function(e){return t.$isEmpty(e)?null:Ua.test(e)?parseFloat(e):void(t.$$parserName="number")}),t.$formatters.push(function(e){if(!t.$isEmpty(e)){if(!S(e))throw xs("numfmt","Expected `{0}` to be a number",e)
e=e.toString()}return e})}function Jr(t){return b(t)&&!S(t)&&(t=parseFloat(t)),Ni(t)?void 0:t}function Yr(t){return(0|t)===t}function Zr(t){var e=t.toString(),n=e.indexOf(".")
if(n===-1){if(-1<t&&t<1){var r=/e-(\d+)$/.exec(e)
if(r)return Number(r[1])}return 0}return e.length-n-1}function Xr(t,e,n){var r=Number(t),i=!Yr(r),o=!Yr(e),a=!Yr(n)
if(i||o||a){var s=i?Zr(r):0,u=o?Zr(e):0,c=a?Zr(n):0,l=Math.max(s,u,c),f=Math.pow(10,l)
r*=f,e*=f,n*=f,i&&(r=Math.round(r)),o&&(e=Math.round(e)),a&&(n=Math.round(n))}return(r-e)%n===0}function Qr(t,e,n,r,i,o,a,s){Gr(t,e,n,r,"number"),Kr(r),Hr(t,e,n,r,i,o)
var u
if(b(n.min)||n.ngMin){var c=n.min||s(n.ngMin)(t)
u=Jr(c),r.$validators.min=function(t,e){return r.$isEmpty(e)||y(u)||e>=u},n.$observe("min",function(t){t!==c&&(u=Jr(t),c=t,r.$validate())})}if(b(n.max)||n.ngMax){var l=n.max||s(n.ngMax)(t),f=Jr(l)
r.$validators.max=function(t,e){return r.$isEmpty(e)||y(f)||e<=f},n.$observe("max",function(t){t!==l&&(f=Jr(t),l=t,r.$validate())})}if(b(n.step)||n.ngStep){var h=n.step||s(n.ngStep)(t),d=Jr(h)
r.$validators.step=function(t,e){return r.$isEmpty(e)||y(d)||Xr(e,u||0,d)},n.$observe("step",function(t){t!==h&&(d=Jr(t),h=t,r.$validate())})}}function ti(t,e,n,r,i,o){function a(t,r){e.attr(t,n[t])
var i=n[t]
n.$observe(t,function(t){t!==i&&(i=t,r(t))})}function s(t){if(f=Jr(t),!Ni(r.$modelValue))if(l){var n=e.val()
f>n&&(n=f,e.val(n)),r.$setViewValue(n)}else r.$validate()}function u(t){if(h=Jr(t),!Ni(r.$modelValue))if(l){var n=e.val()
h<n&&(e.val(h),n=h<f?f:h),r.$setViewValue(n)}else r.$validate()}function c(t){d=Jr(t),Ni(r.$modelValue)||(l?r.$viewValue!==e.val()&&r.$setViewValue(e.val()):r.$validate())}Gr(t,e,n,r,"range"),Kr(r),Hr(t,e,n,r,i,o)
var l=r.$$hasNativeValidators&&"range"===e[0].type,f=l?0:void 0,h=l?100:void 0,d=l?1:void 0,p=e[0].validity,$=b(n.min),v=b(n.max),m=b(n.step),g=r.$render
r.$render=l&&b(p.rangeUnderflow)&&b(p.rangeOverflow)?function(){g(),r.$setViewValue(e.val())}:g,$&&(f=Jr(n.min),r.$validators.min=l?function(){return!0}:function(t,e){return r.$isEmpty(e)||y(f)||e>=f},a("min",s)),v&&(h=Jr(n.max),r.$validators.max=l?function(){return!0}:function(t,e){return r.$isEmpty(e)||y(h)||e<=h},a("max",u)),m&&(d=Jr(n.step),r.$validators.step=l?function(){return!p.stepMismatch}:function(t,e){return r.$isEmpty(e)||y(d)||Xr(e,f||0,d)},a("step",c))}function ei(t,e,n,r,i,o){Hr(t,e,n,r,i,o),qr(r),r.$validators.url=function(t,e){var n=t||e
return r.$isEmpty(n)||Ia.test(n)}}function ni(t,e,n,r,i,o){Hr(t,e,n,r,i,o),qr(r),r.$validators.email=function(t,e){var n=t||e
return r.$isEmpty(n)||La.test(n)}}function ri(t,e,n,r){var i=!n.ngTrim||"false"!==Pi(n.ngTrim)
y(n.name)&&e.attr("name",u())
var o=function(t){var o
e[0].checked&&(o=n.value,i&&(o=Pi(o)),r.$setViewValue(o,t&&t.type))}
e.on("change",o),r.$render=function(){var t=n.value
i&&(t=Pi(t)),e[0].checked=t===r.$viewValue},n.$observe("value",r.$render)}function ii(t,e,n,r,i){var o
if(b(r)){if(o=t(r),!o.constant)throw xs("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",n,r)
return o(e)}return i}function oi(t,e,n,r,i,o,a,s){var u=ii(s,t,"ngTrueValue",n.ngTrueValue,!0),c=ii(s,t,"ngFalseValue",n.ngFalseValue,!1),l=function(t){r.$setViewValue(e[0].checked,t&&t.type)}
e.on("change",l),r.$render=function(){e[0].checked=r.$viewValue},r.$isEmpty=function(t){return t===!1},r.$formatters.push(function(t){return W(t,u)}),r.$parsers.push(function(t){return t?u:c})}function ai(t,e){function n(t,e){if(!t||!t.length)return[]
if(!e||!e.length)return t
var n=[]
t:for(var r=0;r<t.length;r++){for(var i=t[r],o=0;o<e.length;o++)if(i===e[o])continue t
n.push(i)}return n}function r(t){return t&&t.split(" ")}function i(t){if(!t)return t
var e=t
return k(t)?e=t.map(i).join(" "):w(t)?e=Object.keys(t).filter(function(e){return t[e]}).join(" "):C(t)||(e=t+""),e}t="ngClass"+t
var a
return["$parse",function(s){return{restrict:"AC",link:function(u,c,l){function f(t){t=p(r(t),1),l.$addClass(t)}function h(t){t=p(r(t),-1),l.$removeClass(t)}function d(t,e){var i=r(t),o=r(e),a=n(i,o),s=n(o,i),u=p(a,-1),c=p(s,1)
l.$addClass(c),l.$removeClass(u)}function p(t,e){var n=[]
return o(t,function(t){(e>0||g[t])&&(g[t]=(g[t]||0)+e,g[t]===+(e>0)&&n.push(t))}),n.join(" ")}function $(t){t===e?f(m):h(m),y=t}function v(t){y===e&&d(m,t),m=t}var m,g=c.data("$classCounts"),y=!0
g||(g=xt(),c.data("$classCounts",g)),"ngClass"!==t&&(a||(a=s("$index",function(t){return 1&t})),u.$watch(a,$)),u.$watch(s(l[t],i),v)}}}]}function si(t,e,n,r,i,o){return{restrict:"A",compile:function(a,s){var u=t(s[r])
return function(t,r){r.on(i,function(r){var i=function(){u(t,{$event:r})}
if(e.$$phase)if(o)t.$evalAsync(i)
else try{i()}catch(a){n(a)}else t.$apply(i)})}}}}function ui(t,e,n,r,i,o,a,s,u){this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=void 0,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=void 0,this.$name=u(n.name||"",!1)(t),this.$$parentForm=Ma,this.$options=Cs,this.$$updateEvents="",this.$$updateEventHandler=this.$$updateEventHandler.bind(this),this.$$parsedNgModel=i(n.ngModel),this.$$parsedNgModelAssign=this.$$parsedNgModel.assign,this.$$ngModelGet=this.$$parsedNgModel,this.$$ngModelSet=this.$$parsedNgModelAssign,this.$$pendingDebounce=null,this.$$parserValid=void 0,this.$$parserName="parse",this.$$currentValidationRunId=0,this.$$scope=t,this.$$rootScope=t.$root,this.$$attr=n,this.$$element=r,this.$$animate=o,this.$$timeout=a,this.$$parse=i,this.$$q=s,this.$$exceptionHandler=e,Lr(this),ci(this)}function ci(t){t.$$scope.$watch(function(e){var n=t.$$ngModelGet(e)
return n===t.$modelValue||t.$modelValue!==t.$modelValue&&n!==n||t.$$setModelValue(n),n})}function li(t){this.$$options=t}function fi(t,e){o(e,function(e,n){b(t[n])||(t[n]=e)})}function hi(t,e){t.prop("selected",e),t.attr("selected",e)}function di(t,e,n){if(t){if(C(t)&&(t=new RegExp("^"+t+"$")),!t.test)throw r("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",e,t,nt(n))
return t}}function pi(t){var e=d(t)
return Ni(e)?-1:e}var $i,vi,mi,gi,yi={objectMaxDepth:5,urlErrorParamsEnabled:!0},bi=/^\/(.+)\/([a-z]*)$/,wi="validity",xi=Object.prototype.hasOwnProperty,Ci=function(t){return C(t)?t.toLowerCase():t},Si=function(t){return C(t)?t.toUpperCase():t},Ei=[].slice,ki=[].splice,Ai=[].push,Oi=Object.prototype.toString,Ti=Object.getPrototypeOf,Mi=r("ng"),Di=t.angular||(t.angular={}),Vi=0
$i=t.document.documentMode
var Ni=Number.isNaN||function(t){return t!==t}
$.$inject=[],v.$inject=[]
var ji=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,Pi=function(t){return C(t)?t.trim():t},Ri=function(t){return t.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ii=function(){function e(){try{return new Function(""),!1}catch(t){return!0}}if(!b(Ii.rules)){var n=t.document.querySelector("[ng-csp]")||t.document.querySelector("[data-ng-csp]")
if(n){var r=n.getAttribute("ng-csp")||n.getAttribute("data-ng-csp")
Ii.rules={noUnsafeEval:!r||r.indexOf("no-unsafe-eval")!==-1,noInlineStyle:!r||r.indexOf("no-inline-style")!==-1}}else Ii.rules={noUnsafeEval:e(),noInlineStyle:!1}}return Ii.rules},Li=function(){if(b(Li.name_))return Li.name_
var e,n,r,i,o=_i.length
for(n=0;n<o;++n)if(r=_i[n],e=t.document.querySelector("["+r.replace(":","\\:")+"jq]")){i=e.getAttribute(r+"jq")
break}return Li.name_=i},Ui=/:/g,_i=["ng-","data-ng-","ng:","x-ng-"],qi=ct(t.document),Fi=/[A-Z]/g,Hi=!1,Bi=1,zi=2,Wi=3,Gi=8,Ki=9,Ji=11,Yi={full:"1.8.2",major:1,minor:8,dot:2,codeName:"meteoric-mining"}
Ut.expando="ng339"
var Zi=Ut.cache={},Xi=1
Ut._data=function(t){return this.cache[t[this.expando]]||{}}
var Qi=/-([a-z])/g,to=/^-ms-/,eo={mouseleave:"mouseout",mouseenter:"mouseover"},no=r("jqLite"),ro=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,io=/<|&#?\w+;/,oo=/<([\w:-]+)/,ao=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,so={thead:["table"],col:["colgroup","table"],tr:["tbody","table"],td:["tr","tbody","table"]}
so.tbody=so.tfoot=so.colgroup=so.caption=so.thead,so.th=so.td
var uo={option:[1,'<select multiple="multiple">',"</select>"],_default:[0,"",""]}
for(var co in so){var lo=so[co],fo=lo.slice().reverse()
uo[co]=[fo.length,"<"+fo.join("><")+">","</"+lo.join("></")+">"]}uo.optgroup=uo.option
var ho=t.Node.prototype.contains||function(t){return!!(16&this.compareDocumentPosition(t))},po=Ut.prototype={ready:re,toString:function(){var t=[]
return o(this,function(e){t.push(""+e)}),"["+t.join(", ")+"]"},eq:function(t){return vi(t>=0?this[t]:this[this.length+t])},length:0,push:Ai,sort:[].sort,splice:[].splice},$o={}
o("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(t){$o[Ci(t)]=t})
var vo={}
o("input,select,option,textarea,button,form,details".split(","),function(t){vo[t]=!0})
var mo={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"}
o({data:Gt,removeData:zt,hasData:Pt,cleanData:function(t){for(var e=0,n=t.length;e<n;e++)zt(t[e]),Bt(t[e])}},function(t,e){Ut[e]=t}),o({data:Gt,inheritedData:Qt,scope:function(t){return vi.data(t,"$scope")||Qt(t.parentNode||t,["$isolateScope","$scope"])},isolateScope:function(t){return vi.data(t,"$isolateScope")||vi.data(t,"$isolateScopeNoTemplate")},controller:Xt,injector:function(t){return Qt(t,"$injector")},removeAttr:function(t,e){t.removeAttribute(e)},hasClass:Kt,css:function(t,e,n){return e=Mt(e),b(n)?void(t.style[e]=n):t.style[e]},attr:function(t,e,n){var r,i=t.nodeType
if(i!==Wi&&i!==zi&&i!==Gi&&t.getAttribute){var o=Ci(e),a=$o[o]
return b(n)?void(null===n||n===!1&&a?t.removeAttribute(e):t.setAttribute(e,a?o:n)):(r=t.getAttribute(e),a&&null!==r&&(r=o),null===r?void 0:r)}},prop:function(t,e,n){return b(n)?void(t[e]=n):t[e]},text:function(){function t(t,e){if(y(e)){var n=t.nodeType
return n===Bi||n===Wi?t.textContent:""}t.textContent=e}return t.$dv="",t}(),val:function(t,e){if(y(e)){if(t.multiple&&"select"===q(t)){var n=[]
return o(t.options,function(t){t.selected&&n.push(t.value||t.text)}),n}return t.value}t.value=e},html:function(t,e){return y(e)?t.innerHTML:(qt(t,!0),void(t.innerHTML=e))},empty:te},function(t,e){Ut.prototype[e]=function(e,n){var r,i,o=this.length
if(t!==te&&y(2===t.length&&t!==Kt&&t!==Xt?e:n)){if(w(e)){for(r=0;r<o;r++)if(t===Gt)t(this[r],e)
else for(i in e)t(this[r],i,e[i])
return this}for(var a=t.$dv,s=y(a)?Math.min(o,1):o,u=0;u<s;u++){var c=t(this[u],e,n)
a=a?a+c:c}return a}for(r=0;r<o;r++)t(this[r],e,n)
return this}}),o({removeData:zt,on:function(t,e,n,r){if(b(r))throw no("onargs","jqLite#on() does not support the `selector` or `eventData` parameters")
if(jt(t)){var i=Wt(t,!0),o=i.events,a=i.handle
a||(a=i.handle=ae(t,o))
for(var s=e.indexOf(" ")>=0?e.split(" "):[e],u=s.length,c=function(e,r,i){var s=o[e]
s||(s=o[e]=[],s.specialHandlerWrapper=r,"$destroy"===e||i||t.addEventListener(e,a)),s.push(n)};u--;)e=s[u],eo[e]?(c(eo[e],ue),c(e,void 0,!0)):c(e)}},off:Bt,one:function(t,e,n){t=vi(t),t.on(e,function r(){t.off(e,n),t.off(e,r)}),t.on(e,n)},replaceWith:function(t,e){var n,r=t.parentNode
qt(t),o(new Ut(e),function(e){n?r.insertBefore(e,n.nextSibling):r.replaceChild(e,t),n=e})},children:function(t){var e=[]
return o(t.childNodes,function(t){t.nodeType===Bi&&e.push(t)}),e},contents:function(t){return t.contentDocument||t.childNodes||[]},append:function(t,e){var n=t.nodeType
if(n===Bi||n===Ji){e=new Ut(e)
for(var r=0,i=e.length;r<i;r++){var o=e[r]
t.appendChild(o)}}},prepend:function(t,e){if(t.nodeType===Bi){var n=t.firstChild
o(new Ut(e),function(e){t.insertBefore(e,n)})}},wrap:function(t,e){Lt(t,vi(e).eq(0).clone()[0])},remove:ee,detach:function(t){ee(t,!0)},after:function(t,e){var n=t,r=t.parentNode
if(r){e=new Ut(e)
for(var i=0,o=e.length;i<o;i++){var a=e[i]
r.insertBefore(a,n.nextSibling),n=a}}},addClass:Yt,removeClass:Jt,toggleClass:function(t,e,n){e&&o(e.split(" "),function(e){var r=n
y(r)&&(r=!Kt(t,e)),(r?Yt:Jt)(t,e)})},parent:function(t){var e=t.parentNode
return e&&e.nodeType!==Ji?e:null},next:function(t){return t.nextElementSibling},find:function(t,e){return t.getElementsByTagName?t.getElementsByTagName(e):[]},clone:_t,triggerHandler:function(t,e,n){var r,i,a,s=e.type||e,u=Wt(t),c=u&&u.events,l=c&&c[s]
l&&(r={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:$,type:s,target:t},e.type&&(r=f(r,e)),i=Et(l),a=n?[r].concat(n):[r],o(i,function(e){r.isImmediatePropagationStopped()||e.apply(t,a)}))}},function(t,e){Ut.prototype[e]=function(e,n,r){for(var i,o=0,a=this.length;o<a;o++)y(i)?(i=t(this[o],e,n,r),b(i)&&(i=vi(i))):Zt(i,t(this[o],e,n,r))
return b(i)?i:this}}),Ut.prototype.bind=Ut.prototype.on,Ut.prototype.unbind=Ut.prototype.off
var go=Object.create(null)
fe.prototype={_idx:function(t){return t!==this._lastKey&&(this._lastKey=t,this._lastIndex=this._keys.indexOf(t)),this._lastIndex},_transformKey:function(t){return Ni(t)?go:t},get:function(t){t=this._transformKey(t)
var e=this._idx(t)
if(e!==-1)return this._values[e]},has:function(t){t=this._transformKey(t)
var e=this._idx(t)
return e!==-1},set:function(t,e){t=this._transformKey(t)
var n=this._idx(t)
n===-1&&(n=this._lastIndex=this._keys.length),this._keys[n]=t,this._values[n]=e},"delete":function(t){t=this._transformKey(t)
var e=this._idx(t)
return e!==-1&&(this._keys.splice(e,1),this._values.splice(e,1),this._lastKey=NaN,this._lastIndex=-1,!0)}}
var yo=fe,bo=[function(){this.$get=[function(){return yo}]}],wo=/^([^(]+?)=>/,xo=/^[^(]*\(\s*([^)]*)\)/m,Co=/,/,So=/^\s*(_?)(\S+?)\1\s*$/,Eo=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,ko=r("$injector")
ve.$$annotate=$e
var Ao=r("$animate"),Oo=1,To="ng-animate",Mo=function(){this.$get=$},Do=function(){var t=new yo,e=[]
this.$get=["$$AnimateRunner","$rootScope",function(n,r){function i(t,e,n){var r=!1
return e&&(e=C(e)?e.split(" "):k(e)?e:[],o(e,function(e){e&&(r=!0,t[e]=n)})),r}function a(){o(e,function(e){var n=t.get(e)
if(n){var r=be(e.attr("class")),i="",a=""
o(n,function(t,e){var n=!!r[e]
t!==n&&(t?i+=(i.length?" ":"")+e:a+=(a.length?" ":"")+e)}),o(e,function(t){i&&Yt(t,i),a&&Jt(t,a)}),t["delete"](e)}}),e.length=0}function s(n,o,s){var u=t.get(n)||{},c=i(u,o,!0),l=i(u,s,!1);(c||l)&&(t.set(n,u),e.push(n),1===e.length&&r.$$postDigest(a))}return{enabled:$,on:$,off:$,pin:$,push:function(t,e,r,i){i&&i(),r=r||{},r.from&&t.css(r.from),r.to&&t.css(r.to),(r.addClass||r.removeClass)&&s(t,r.addClass,r.removeClass)
var o=new n
return o.complete(),o}}}]},Vo=["$provide",function(t){var e=this,n=null,r=null
this.$$registeredAnimations=Object.create(null),this.register=function(n,r){if(n&&"."!==n.charAt(0))throw Ao("notcsel","Expecting class selector starting with '.' got '{0}'.",n)
var i=n+"-animation"
e.$$registeredAnimations[n.substr(1)]=i,t.factory(i,r)},this.customFilter=function(t){return 1===arguments.length&&(r=O(t)?t:null),r},this.classNameFilter=function(t){if(1===arguments.length&&(n=t instanceof RegExp?t:null)){var e=new RegExp("[(\\s|\\/)]"+To+"[(\\s|\\/)]")
if(e.test(n.toString()))throw n=null,Ao("nongcls",'$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',To)}return n},this.$get=["$$animateQueue",function(t){function e(t,e,n){if(n){var r=ye(n)
!r||r.parentNode||r.previousElementSibling||(n=null)}n?n.after(t):e.prepend(t)}return{on:t.on,off:t.off,pin:t.pin,enabled:t.enabled,cancel:function(t){t.cancel&&t.cancel()},enter:function(n,r,i,o){return r=r&&vi(r),i=i&&vi(i),r=r||i.parent(),e(n,r,i),t.push(n,"enter",we(o))},move:function(n,r,i,o){return r=r&&vi(r),i=i&&vi(i),r=r||i.parent(),e(n,r,i),t.push(n,"move",we(o))},leave:function(e,n){return t.push(e,"leave",we(n),function(){e.remove()})},addClass:function(e,n,r){return r=we(r),r.addClass=ge(r.addclass,n),t.push(e,"addClass",r)},removeClass:function(e,n,r){return r=we(r),r.removeClass=ge(r.removeClass,n),t.push(e,"removeClass",r)},setClass:function(e,n,r,i){return i=we(i),i.addClass=ge(i.addClass,n),i.removeClass=ge(i.removeClass,r),t.push(e,"setClass",i)},animate:function(e,n,r,i,o){return o=we(o),o.from=o.from?f(o.from,n):n,o.to=o.to?f(o.to,r):r,i=i||"ng-inline-animate",o.tempClasses=ge(o.tempClasses,i),t.push(e,"animate",o)}}}]}],No=function(){this.$get=["$$rAF",function(t){function e(e){n.push(e),n.length>1||t(function(){for(var t=0;t<n.length;t++)n[t]()
n=[]})}var n=[]
return function(){var t=!1
return e(function(){t=!0}),function(n){t?n():e(n)}}}]},jo=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(t,e,n,r,i){function a(t){this.setHost(t)
var e=n(),o=function(t){i(t,0,!1)}
this._doneCallbacks=[],this._tick=function(t){r()?o(t):e(t)},this._state=0}var s=0,u=1,c=2
return a.chain=function(t,e){function n(){return r===t.length?void e(!0):void t[r](function(t){return t===!1?void e(!1):(r++,void n())})}var r=0
n()},a.all=function(t,e){function n(n){i=i&&n,++r===t.length&&e(i)}var r=0,i=!0
o(t,function(t){t.done(n)})},a.prototype={setHost:function(t){this.host=t||{}},done:function(t){this._state===c?t():this._doneCallbacks.push(t)},progress:$,getPromise:function(){if(!this.promise){var e=this
this.promise=t(function(t,n){e.done(function(e){e===!1?n():t()})})}return this.promise},then:function(t,e){return this.getPromise().then(t,e)},"catch":function(t){return this.getPromise()["catch"](t)},"finally":function(t){return this.getPromise()["finally"](t)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(t){var e=this
e._state===s&&(e._state=u,e._tick(function(){e._resolve(t)}))},_resolve:function(t){this._state!==c&&(o(this._doneCallbacks,function(e){e(t)}),this._doneCallbacks.length=0,this._state=c)}},a}]},Po=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(t,e,n){return function(e,r){function i(){return t(function(){o(),s||u.complete(),s=!0}),u}function o(){a.addClass&&(e.addClass(a.addClass),a.addClass=null),a.removeClass&&(e.removeClass(a.removeClass),a.removeClass=null),a.to&&(e.css(a.to),a.to=null)}var a=r||{}
a.$$prepared||(a=B(a)),a.cleanupStyles&&(a.from=a.to=null),a.from&&(e.css(a.from),a.from=null)
var s,u=new n
return{start:i,end:i}}}]},Ro=r("$compile"),Io=new Oe
Te.$inject=["$provide","$$sanitizeUriProvider"],Me.prototype.isFirstChange=function(){return this.previousValue===Io}
var Lo=/^((?:x|data)[:\-_])/i,Uo=/[:\-_]+(.)/g,_o=r("$controller"),qo=/^(\S+)(\s+as\s+([\w$]+))?$/,Fo=function(){this.$get=["$document",function(t){return function(e){return e?!e.nodeType&&e instanceof vi&&(e=e[0]):e=t[0].body,e.offsetWidth+1}}]},Ho="application/json",Bo={"Content-Type":Ho+";charset=utf-8"},zo=/^\[|^\{(?!\{)/,Wo={"[":/]$/,"{":/}$/},Go=/^\)]\}',?\n/,Ko=r("$http"),Jo=Di.$interpolateMinErr=r("$interpolate")
Jo.throwNoconcat=function(t){throw Jo("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",t)},Jo.interr=function(t,e){return Jo("interr","Can't interpolate: {0}\n{1}",t,e.toString())}
var Yo=r("$interval"),Zo=function(){this.$get=function(){function t(t){var e=function(t){e.data=t,e.called=!0}
return e.id=t,e}var e=Di.callbacks,n={}
return{createCallback:function(r){var i="_"+(e.$$counter++).toString(36),o="angular.callbacks."+i,a=t(i)
return n[o]=e[i]=a,o},wasCalled:function(t){return n[t].called},getResponse:function(t){return n[t].data},removeCallback:function(t){var r=n[t]
delete e[r.id],delete n[t]}}}},Xo=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Qo={http:80,https:443,ftp:21},ta=r("$location"),ea=/^\s*[\\\/]{2,}/,na={$$absUrl:"",$$html5:!1,$$replace:!1,$$compose:function(){this.$$url=rn(this.$$path,this.$$search,this.$$hash),this.$$absUrl=this.$$normalizeUrl(this.$$url),this.$$urlUpdatedByLocation=!0},absUrl:$n("$$absUrl"),url:function(t){if(y(t))return this.$$url
var e=Xo.exec(t)
return(e[1]||""===t)&&this.path(decodeURIComponent(e[1])),(e[2]||e[1]||""===t)&&this.search(e[3]||""),this.hash(e[5]||""),this},protocol:$n("$$protocol"),host:$n("$$host"),port:$n("$$port"),path:vn("$$path",function(t){return t=null!==t?t.toString():"","/"===t.charAt(0)?t:"/"+t}),search:function(t,e){switch(arguments.length){case 0:return this.$$search
case 1:if(C(t)||S(t))t=t.toString(),this.$$search=it(t)
else{if(!w(t))throw ta("isrcharg","The first argument of the `$location#search()` call must be a string or an object.")
t=B(t,{}),o(t,function(e,n){null==e&&delete t[n]}),this.$$search=t}break
default:y(e)||null===e?delete this.$$search[t]:this.$$search[t]=e}return this.$$compose(),this},hash:vn("$$hash",function(t){return null!==t?t.toString():""}),replace:function(){return this.$$replace=!0,this}}
o([pn,dn,hn],function(t){t.prototype=Object.create(na),t.prototype.state=function(e){if(!arguments.length)return this.$$state
if(t!==hn||!this.$$html5)throw ta("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API")
return this.$$state=y(e)?null:e,this.$$urlUpdatedByLocation=!0,this}})
var ra=r("$parse"),ia={}.constructor.prototype.valueOf,oa=xt()
o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(t){oa[t]=!0})
var aa={n:"\n",f:"\f",r:"\r",t:"\t",v:"\x0B","'":"'",'"':'"'},sa=function(t){this.options=t}
sa.prototype={constructor:sa,lex:function(t){for(this.text=t,this.index=0,this.tokens=[];this.index<this.text.length;){var e=this.text.charAt(this.index)
if('"'===e||"'"===e)this.readString(e)
else if(this.isNumber(e)||"."===e&&this.isNumber(this.peek()))this.readNumber()
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent()
else if(this.is(e,"(){}[].,;:?"))this.tokens.push({index:this.index,text:e}),this.index++
else if(this.isWhitespace(e))this.index++
else{var n=e+this.peek(),r=n+this.peek(2),i=oa[e],o=oa[n],a=oa[r]
if(i||o||a){var s=a?r:o?n:e
this.tokens.push({index:this.index,text:s,operator:!0}),this.index+=s.length}else this.throwError("Unexpected next character ",this.index,this.index+1)}}return this.tokens},is:function(t,e){return e.indexOf(t)!==-1},peek:function(t){var e=t||1
return this.index+e<this.text.length&&this.text.charAt(this.index+e)},isNumber:function(t){return"0"<=t&&t<="9"&&"string"==typeof t},isWhitespace:function(t){return" "===t||"\r"===t||"\t"===t||"\n"===t||"\x0B"===t||" "===t},isIdentifierStart:function(t){return this.options.isIdentifierStart?this.options.isIdentifierStart(t,this.codePointAt(t)):this.isValidIdentifierStart(t)},isValidIdentifierStart:function(t){return"a"<=t&&t<="z"||"A"<=t&&t<="Z"||"_"===t||"$"===t},isIdentifierContinue:function(t){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(t,this.codePointAt(t)):this.isValidIdentifierContinue(t)},isValidIdentifierContinue:function(t,e){return this.isValidIdentifierStart(t,e)||this.isNumber(t)},codePointAt:function(t){return 1===t.length?t.charCodeAt(0):(t.charCodeAt(0)<<10)+t.charCodeAt(1)-56613888},peekMultichar:function(){var t=this.text.charAt(this.index),e=this.peek()
if(!e)return t
var n=t.charCodeAt(0),r=e.charCodeAt(0)
return n>=55296&&n<=56319&&r>=56320&&r<=57343?t+e:t},isExpOperator:function(t){return"-"===t||"+"===t||this.isNumber(t)},throwError:function(t,e,n){n=n||this.index
var r=b(e)?"s "+e+"-"+this.index+" ["+this.text.substring(e,n)+"]":" "+n
throw ra("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",t,r,this.text)},readNumber:function(){for(var t="",e=this.index;this.index<this.text.length;){var n=Ci(this.text.charAt(this.index))
if("."===n||this.isNumber(n))t+=n
else{var r=this.peek()
if("e"===n&&this.isExpOperator(r))t+=n
else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"===t.charAt(t.length-1))t+=n
else{if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!==t.charAt(t.length-1))break
this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:e,text:t,constant:!0,value:Number(t)})},readIdent:function(){var t=this.index
for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var e=this.peekMultichar()
if(!this.isIdentifierContinue(e))break
this.index+=e.length}this.tokens.push({index:t,text:this.text.slice(t,this.index),identifier:!0})},readString:function(t){var e=this.index
this.index++
for(var n="",r=t,i=!1;this.index<this.text.length;){var o=this.text.charAt(this.index)
if(r+=o,i){if("u"===o){var a=this.text.substring(this.index+1,this.index+5)
a.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+a+"]"),this.index+=4,n+=String.fromCharCode(parseInt(a,16))}else{var s=aa[o]
n+=s||o}i=!1}else if("\\"===o)i=!0
else{if(o===t)return this.index++,void this.tokens.push({index:e,text:r,constant:!0,value:n})
n+=o}this.index++}this.throwError("Unterminated quote",e)}}
var ua=function(t,e){this.lexer=t,this.options=e}
ua.Program="Program",ua.ExpressionStatement="ExpressionStatement",ua.AssignmentExpression="AssignmentExpression",ua.ConditionalExpression="ConditionalExpression",ua.LogicalExpression="LogicalExpression",ua.BinaryExpression="BinaryExpression",ua.UnaryExpression="UnaryExpression",ua.CallExpression="CallExpression",ua.MemberExpression="MemberExpression",ua.Identifier="Identifier",ua.Literal="Literal",ua.ArrayExpression="ArrayExpression",ua.Property="Property",ua.ObjectExpression="ObjectExpression",ua.ThisExpression="ThisExpression",ua.LocalsExpression="LocalsExpression",ua.NGValueParameter="NGValueParameter",ua.prototype={ast:function(t){this.text=t,this.tokens=this.lexer.lex(t)
var e=this.program()
return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),e},program:function(){for(var t=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&t.push(this.expressionStatement()),!this.expect(";"))return{type:ua.Program,body:t}},expressionStatement:function(){return{type:ua.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var t=this.expression();this.expect("|");)t=this.filter(t)
return t},expression:function(){return this.assignment()},assignment:function(){var t=this.ternary()
if(this.expect("=")){if(!kn(t))throw ra("lval","Trying to assign a value to a non l-value")
t={type:ua.AssignmentExpression,left:t,right:this.assignment(),operator:"="}}return t},ternary:function(){var t,e,n=this.logicalOR()
return this.expect("?")&&(t=this.expression(),this.consume(":"))?(e=this.expression(),{type:ua.ConditionalExpression,test:n,alternate:t,consequent:e}):n},logicalOR:function(){for(var t=this.logicalAND();this.expect("||");)t={type:ua.LogicalExpression,operator:"||",left:t,right:this.logicalAND()}
return t},logicalAND:function(){for(var t=this.equality();this.expect("&&");)t={type:ua.LogicalExpression,operator:"&&",left:t,right:this.equality()}
return t},equality:function(){for(var t,e=this.relational();t=this.expect("==","!=","===","!==");)e={type:ua.BinaryExpression,operator:t.text,left:e,right:this.relational()}
return e},relational:function(){for(var t,e=this.additive();t=this.expect("<",">","<=",">=");)e={type:ua.BinaryExpression,operator:t.text,left:e,right:this.additive()}
return e},additive:function(){for(var t,e=this.multiplicative();t=this.expect("+","-");)e={type:ua.BinaryExpression,operator:t.text,left:e,right:this.multiplicative()}
return e},multiplicative:function(){for(var t,e=this.unary();t=this.expect("*","/","%");)e={type:ua.BinaryExpression,operator:t.text,left:e,right:this.unary()}
return e},unary:function(){var t
return(t=this.expect("+","-","!"))?{type:ua.UnaryExpression,operator:t.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var t
this.expect("(")?(t=this.filterChain(),this.consume(")")):this.expect("[")?t=this.arrayDeclaration():this.expect("{")?t=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?t=B(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?t={type:ua.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?t=this.identifier():this.peek().constant?t=this.constant():this.throwError("not a primary expression",this.peek())
for(var e;e=this.expect("(","[",".");)"("===e.text?(t={type:ua.CallExpression,callee:t,arguments:this.parseArguments()},this.consume(")")):"["===e.text?(t={type:ua.MemberExpression,object:t,property:this.expression(),computed:!0},this.consume("]")):"."===e.text?t={type:ua.MemberExpression,object:t,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE")
return t},filter:function(t){for(var e=[t],n={type:ua.CallExpression,callee:this.identifier(),arguments:e,filter:!0};this.expect(":");)e.push(this.expression())
return n},parseArguments:function(){var t=[]
if(")"!==this.peekToken().text)do t.push(this.filterChain())
while(this.expect(","))
return t},identifier:function(){var t=this.consume()
return t.identifier||this.throwError("is not a valid identifier",t),{type:ua.Identifier,name:t.text}},constant:function(){return{type:ua.Literal,value:this.consume().value}},arrayDeclaration:function(){var t=[]
if("]"!==this.peekToken().text)do{if(this.peek("]"))break
t.push(this.expression())}while(this.expect(","))
return this.consume("]"),{type:ua.ArrayExpression,elements:t}},object:function(){var t,e=[]
if("}"!==this.peekToken().text)do{if(this.peek("}"))break
t={type:ua.Property,kind:"init"},this.peek().constant?(t.key=this.constant(),t.computed=!1,this.consume(":"),t.value=this.expression()):this.peek().identifier?(t.key=this.identifier(),t.computed=!1,this.peek(":")?(this.consume(":"),t.value=this.expression()):t.value=t.key):this.peek("[")?(this.consume("["),t.key=this.expression(),this.consume("]"),t.computed=!0,this.consume(":"),t.value=this.expression()):this.throwError("invalid key",this.peek()),e.push(t)}while(this.expect(","))
return this.consume("}"),{type:ua.ObjectExpression,properties:e}},throwError:function(t,e){throw ra("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",e.text,t,e.index+1,this.text,this.text.substring(e.index))},consume:function(t){if(0===this.tokens.length)throw ra("ueoe","Unexpected end of expression: {0}",this.text)
var e=this.expect(t)
return e||this.throwError("is unexpected, expecting ["+t+"]",this.peek()),e},peekToken:function(){if(0===this.tokens.length)throw ra("ueoe","Unexpected end of expression: {0}",this.text)
return this.tokens[0]},peek:function(t,e,n,r){return this.peekAhead(0,t,e,n,r)},peekAhead:function(t,e,n,r,i){if(this.tokens.length>t){var o=this.tokens[t],a=o.text
if(a===e||a===n||a===r||a===i||!e&&!n&&!r&&!i)return o}return!1},expect:function(t,e,n,r){var i=this.peek(t,e,n,r)
return!!i&&(this.tokens.shift(),i)},selfReferential:{"this":{type:ua.ThisExpression},$locals:{type:ua.LocalsExpression}}}
var ca=1,la=2
Mn.prototype={compile:function(t){var e=this
this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]},Sn(t,e.$filter)
var n,r=""
if(this.stage="assign",n=An(t)){this.state.computing="assign"
var i=this.nextId()
this.recurse(n,i),this.return_(i),r="fn.assign="+this.generateFunction("assign","s,v,l")}var a=En(t.body)
e.stage="inputs",o(a,function(t,n){var r="fn"+n
e.state[r]={vars:[],body:[],own:{}},e.state.computing=r
var i=e.nextId()
e.recurse(t,i),e.return_(i),e.state.inputs.push({name:r,isPure:t.isPure}),t.watchId=n}),this.state.computing="fn",this.stage="main",this.recurse(t)
var s='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+r+this.watchFns()+"return fn;",u=new Function("$filter","getStringValue","ifDefined","plus",s)(this.$filter,yn,bn,wn)
return this.state=this.stage=void 0,u},USE:"use",STRICT:"strict",watchFns:function(){var t=[],e=this.state.inputs,n=this
return o(e,function(e){t.push("var "+e.name+"="+n.generateFunction(e.name,"s")),e.isPure&&t.push(e.name,".isPure="+JSON.stringify(e.isPure)+";")}),e.length&&t.push("fn.inputs=["+e.map(function(t){return t.name}).join(",")+"];"),t.join("")},generateFunction:function(t,e){return"function("+e+"){"+this.varsPrefix(t)+this.body(t)+"};"},filterPrefix:function(){var t=[],e=this
return o(this.state.filters,function(n,r){t.push(n+"=$filter("+e.escape(r)+")")}),t.length?"var "+t.join(",")+";":""},varsPrefix:function(t){return this.state[t].vars.length?"var "+this.state[t].vars.join(",")+";":""},body:function(t){return this.state[t].body.join("")},recurse:function(t,e,n,r,i,a){var s,u,c,l,f,h=this
if(r=r||$,!a&&b(t.watchId))return e=e||this.nextId(),void this.if_("i",this.lazyAssign(e,this.computedMember("i",t.watchId)),this.lazyRecurse(t,e,n,r,i,!0))
switch(t.type){case ua.Program:o(t.body,function(e,n){h.recurse(e.expression,void 0,void 0,function(t){u=t}),n!==t.body.length-1?h.current().body.push(u,";"):h.return_(u)})
break
case ua.Literal:l=this.escape(t.value),this.assign(e,l),r(e||l)
break
case ua.UnaryExpression:this.recurse(t.argument,void 0,void 0,function(t){u=t}),l=t.operator+"("+this.ifDefined(u,0)+")",this.assign(e,l),r(l)
break
case ua.BinaryExpression:this.recurse(t.left,void 0,void 0,function(t){s=t}),this.recurse(t.right,void 0,void 0,function(t){u=t}),l="+"===t.operator?this.plus(s,u):"-"===t.operator?this.ifDefined(s,0)+t.operator+this.ifDefined(u,0):"("+s+")"+t.operator+"("+u+")",this.assign(e,l),r(l)
break
case ua.LogicalExpression:e=e||this.nextId(),h.recurse(t.left,e),h.if_("&&"===t.operator?e:h.not(e),h.lazyRecurse(t.right,e)),r(e)
break
case ua.ConditionalExpression:e=e||this.nextId(),h.recurse(t.test,e),h.if_(e,h.lazyRecurse(t.alternate,e),h.lazyRecurse(t.consequent,e)),r(e)
break
case ua.Identifier:e=e||this.nextId(),n&&(n.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",t.name)+"?l:s"),n.computed=!1,n.name=t.name),h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",t.name)),function(){h.if_("inputs"===h.stage||"s",function(){i&&1!==i&&h.if_(h.isNull(h.nonComputedMember("s",t.name)),h.lazyAssign(h.nonComputedMember("s",t.name),"{}")),h.assign(e,h.nonComputedMember("s",t.name))})},e&&h.lazyAssign(e,h.nonComputedMember("l",t.name))),r(e)
break
case ua.MemberExpression:s=n&&(n.context=this.nextId())||this.nextId(),e=e||this.nextId(),h.recurse(t.object,s,void 0,function(){h.if_(h.notNull(s),function(){t.computed?(u=h.nextId(),h.recurse(t.property,u),h.getStringValue(u),i&&1!==i&&h.if_(h.not(h.computedMember(s,u)),h.lazyAssign(h.computedMember(s,u),"{}")),l=h.computedMember(s,u),h.assign(e,l),n&&(n.computed=!0,n.name=u)):(i&&1!==i&&h.if_(h.isNull(h.nonComputedMember(s,t.property.name)),h.lazyAssign(h.nonComputedMember(s,t.property.name),"{}")),l=h.nonComputedMember(s,t.property.name),h.assign(e,l),n&&(n.computed=!1,n.name=t.property.name))},function(){h.assign(e,"undefined")}),r(e)},!!i)
break
case ua.CallExpression:e=e||this.nextId(),t.filter?(u=h.filter(t.callee.name),c=[],o(t.arguments,function(t){var e=h.nextId()
h.recurse(t,e),c.push(e)}),l=u+"("+c.join(",")+")",h.assign(e,l),r(e)):(u=h.nextId(),s={},c=[],h.recurse(t.callee,u,s,function(){h.if_(h.notNull(u),function(){o(t.arguments,function(e){h.recurse(e,t.constant?void 0:h.nextId(),void 0,function(t){c.push(t)})}),l=s.name?h.member(s.context,s.name,s.computed)+"("+c.join(",")+")":u+"("+c.join(",")+")",h.assign(e,l)},function(){h.assign(e,"undefined")}),r(e)}))
break
case ua.AssignmentExpression:u=this.nextId(),s={},this.recurse(t.left,void 0,s,function(){h.if_(h.notNull(s.context),function(){h.recurse(t.right,u),l=h.member(s.context,s.name,s.computed)+t.operator+u,h.assign(e,l),r(e||l)})},1)
break
case ua.ArrayExpression:c=[],o(t.elements,function(e){h.recurse(e,t.constant?void 0:h.nextId(),void 0,function(t){c.push(t)})}),l="["+c.join(",")+"]",this.assign(e,l),r(e||l)
break
case ua.ObjectExpression:c=[],f=!1,o(t.properties,function(t){t.computed&&(f=!0)}),f?(e=e||this.nextId(),this.assign(e,"{}"),o(t.properties,function(t){t.computed?(s=h.nextId(),h.recurse(t.key,s)):s=t.key.type===ua.Identifier?t.key.name:""+t.key.value,u=h.nextId(),h.recurse(t.value,u),h.assign(h.member(e,s,t.computed),u)})):(o(t.properties,function(e){h.recurse(e.value,t.constant?void 0:h.nextId(),void 0,function(t){c.push(h.escape(e.key.type===ua.Identifier?e.key.name:""+e.key.value)+":"+t)})}),l="{"+c.join(",")+"}",this.assign(e,l)),r(e||l)
break
case ua.ThisExpression:this.assign(e,"s"),r(e||"s")
break
case ua.LocalsExpression:this.assign(e,"l"),r(e||"l")
break
case ua.NGValueParameter:this.assign(e,"v"),r(e||"v")}},getHasOwnProperty:function(t,e){var n=t+"."+e,r=this.current().own
return r.hasOwnProperty(n)||(r[n]=this.nextId(!1,t+"&&("+this.escape(e)+" in "+t+")")),r[n]},assign:function(t,e){if(t)return this.current().body.push(t,"=",e,";"),t},filter:function(t){return this.state.filters.hasOwnProperty(t)||(this.state.filters[t]=this.nextId(!0)),this.state.filters[t]},ifDefined:function(t,e){return"ifDefined("+t+","+this.escape(e)+")"},plus:function(t,e){return"plus("+t+","+e+")"},return_:function(t){this.current().body.push("return ",t,";")},if_:function(t,e,n){if(t===!0)e()
else{var r=this.current().body
r.push("if(",t,"){"),e(),r.push("}"),n&&(r.push("else{"),n(),r.push("}"))}},not:function(t){return"!("+t+")"},isNull:function(t){return t+"==null"},notNull:function(t){return t+"!=null"},nonComputedMember:function(t,e){var n=/^[$_a-zA-Z][$_a-zA-Z0-9]*$/,r=/[^$_a-zA-Z0-9]/g
return n.test(e)?t+"."+e:t+'["'+e.replace(r,this.stringEscapeFn)+'"]'},computedMember:function(t,e){return t+"["+e+"]"},member:function(t,e,n){return n?this.computedMember(t,e):this.nonComputedMember(t,e)},getStringValue:function(t){this.assign(t,"getStringValue("+t+")")},lazyRecurse:function(t,e,n,r,i,o){var a=this
return function(){a.recurse(t,e,n,r,i,o)}},lazyAssign:function(t,e){var n=this
return function(){n.assign(t,e)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)},escape:function(t){if(C(t))return"'"+t.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'"
if(S(t))return t.toString()
if(t===!0)return"true"
if(t===!1)return"false"
if(null===t)return"null"
if("undefined"==typeof t)return"undefined"
throw ra("esc","IMPOSSIBLE")},nextId:function(t,e){var n="v"+this.state.nextId++
return t||this.current().vars.push(n+(e?"="+e:"")),n},current:function(){return this.state[this.state.computing]}},Dn.prototype={compile:function(t){var e=this
Sn(t,e.$filter)
var n,r;(n=An(t))&&(r=this.recurse(n))
var i,a=En(t.body)
a&&(i=[],o(a,function(t,n){var r=e.recurse(t)
r.isPure=t.isPure,t.input=r,i.push(r),t.watchId=n}))
var s=[]
o(t.body,function(t){s.push(e.recurse(t.expression))})
var u=0===t.body.length?$:1===t.body.length?s[0]:function(t,e){var n
return o(s,function(r){n=r(t,e)}),n}
return r&&(u.assign=function(t,e,n){return r(t,n,e)}),i&&(u.inputs=i),u},recurse:function(t,e,n){var r,i,a,s=this
if(t.input)return this.inputs(t.input,t.watchId)
switch(t.type){case ua.Literal:return this.value(t.value,e)
case ua.UnaryExpression:return i=this.recurse(t.argument),this["unary"+t.operator](i,e)
case ua.BinaryExpression:return r=this.recurse(t.left),i=this.recurse(t.right),this["binary"+t.operator](r,i,e)
case ua.LogicalExpression:return r=this.recurse(t.left),i=this.recurse(t.right),this["binary"+t.operator](r,i,e)
case ua.ConditionalExpression:return this["ternary?:"](this.recurse(t.test),this.recurse(t.alternate),this.recurse(t.consequent),e)
case ua.Identifier:return s.identifier(t.name,e,n)
case ua.MemberExpression:return r=this.recurse(t.object,!1,!!n),t.computed||(i=t.property.name),t.computed&&(i=this.recurse(t.property)),t.computed?this.computedMember(r,i,e,n):this.nonComputedMember(r,i,e,n)
case ua.CallExpression:return a=[],o(t.arguments,function(t){a.push(s.recurse(t))}),t.filter&&(i=this.$filter(t.callee.name)),t.filter||(i=this.recurse(t.callee,!0)),t.filter?function(t,n,r,o){for(var s=[],u=0;u<a.length;++u)s.push(a[u](t,n,r,o))
var c=i.apply(void 0,s,o)
return e?{context:void 0,name:void 0,value:c}:c}:function(t,n,r,o){var s,u=i(t,n,r,o)
if(null!=u.value){for(var c=[],l=0;l<a.length;++l)c.push(a[l](t,n,r,o))
s=u.value.apply(u.context,c)}return e?{value:s}:s}
case ua.AssignmentExpression:return r=this.recurse(t.left,!0,1),i=this.recurse(t.right),function(t,n,o,a){var s=r(t,n,o,a),u=i(t,n,o,a)
return s.context[s.name]=u,e?{value:u}:u}
case ua.ArrayExpression:return a=[],o(t.elements,function(t){a.push(s.recurse(t))}),function(t,n,r,i){for(var o=[],s=0;s<a.length;++s)o.push(a[s](t,n,r,i))
return e?{value:o}:o}
case ua.ObjectExpression:return a=[],o(t.properties,function(t){t.computed?a.push({key:s.recurse(t.key),computed:!0,value:s.recurse(t.value)}):a.push({key:t.key.type===ua.Identifier?t.key.name:""+t.key.value,computed:!1,value:s.recurse(t.value)})}),function(t,n,r,i){for(var o={},s=0;s<a.length;++s)a[s].computed?o[a[s].key(t,n,r,i)]=a[s].value(t,n,r,i):o[a[s].key]=a[s].value(t,n,r,i)
return e?{value:o}:o}
case ua.ThisExpression:return function(t){return e?{value:t}:t}
case ua.LocalsExpression:return function(t,n){return e?{value:n}:n}
case ua.NGValueParameter:return function(t,n,r){return e?{value:r}:r}}},"unary+":function(t,e){return function(n,r,i,o){var a=t(n,r,i,o)
return a=b(a)?+a:0,e?{value:a}:a}},"unary-":function(t,e){return function(n,r,i,o){var a=t(n,r,i,o)
return a=b(a)?-a:-0,e?{value:a}:a}},"unary!":function(t,e){return function(n,r,i,o){var a=!t(n,r,i,o)
return e?{value:a}:a}},"binary+":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a),u=e(r,i,o,a),c=wn(s,u)
return n?{value:c}:c}},"binary-":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a),u=e(r,i,o,a),c=(b(s)?s:0)-(b(u)?u:0)
return n?{value:c}:c}},"binary*":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)*e(r,i,o,a)
return n?{value:s}:s}},"binary/":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)/e(r,i,o,a)
return n?{value:s}:s}},"binary%":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)%e(r,i,o,a)
return n?{value:s}:s}},"binary===":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)===e(r,i,o,a)
return n?{value:s}:s}},"binary!==":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)!==e(r,i,o,a)
return n?{value:s}:s}},"binary==":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)==e(r,i,o,a)
return n?{value:s}:s}},"binary!=":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)!=e(r,i,o,a)
return n?{value:s}:s}},"binary<":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)<e(r,i,o,a)
return n?{value:s}:s}},"binary>":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)>e(r,i,o,a)
return n?{value:s}:s}},"binary<=":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)<=e(r,i,o,a)
return n?{value:s}:s}},"binary>=":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)>=e(r,i,o,a)
return n?{value:s}:s}},"binary&&":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)&&e(r,i,o,a)
return n?{value:s}:s}},"binary||":function(t,e,n){return function(r,i,o,a){var s=t(r,i,o,a)||e(r,i,o,a)
return n?{value:s}:s}},"ternary?:":function(t,e,n,r){return function(i,o,a,s){var u=t(i,o,a,s)?e(i,o,a,s):n(i,o,a,s)
return r?{value:u}:u}},value:function(t,e){return function(){return e?{context:void 0,name:void 0,value:t}:t}},identifier:function(t,e,n){return function(r,i,o,a){var s=i&&t in i?i:r
n&&1!==n&&s&&null==s[t]&&(s[t]={})
var u=s?s[t]:void 0
return e?{context:s,name:t,value:u}:u}},computedMember:function(t,e,n,r){return function(i,o,a,s){var u,c,l=t(i,o,a,s)
return null!=l&&(u=e(i,o,a,s),u=yn(u),r&&1!==r&&l&&!l[u]&&(l[u]={}),c=l[u]),n?{context:l,name:u,value:c}:c}},nonComputedMember:function(t,e,n,r){return function(i,o,a,s){var u=t(i,o,a,s)
r&&1!==r&&u&&null==u[e]&&(u[e]={})
var c=null!=u?u[e]:void 0
return n?{context:u,name:e,value:c}:c}},inputs:function(t,e){return function(n,r,i,o){return o?o[e]:t(n,r,i)}}},Vn.prototype={constructor:Vn,parse:function(t){var e=this.getAst(t),n=this.astCompiler.compile(e.ast)
return n.literal=On(e.ast),n.constant=Tn(e.ast),n.oneTime=e.oneTime,n},getAst:function(t){var e=!1
return t=t.trim(),":"===t.charAt(0)&&":"===t.charAt(1)&&(e=!0,t=t.substring(2)),{ast:this.ast.ast(t),oneTime:e}}}
var fa,ha=r("$sce"),da={HTML:"html",CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},pa=/_([a-z])/g,$a=r("$templateRequest"),va=r("$timeout"),ma=t.document.createElement("a"),ga=er(t.location.href)
ma.href="http://[::1]"
var ya="[::1]"===ma.hostname
ur.$inject=["$document"],lr.$inject=["$provide"]
var ba=22,wa=".",xa="0"
$r.$inject=["$locale"],vr.$inject=["$locale"]
var Ca={yyyy:wr("FullYear",4,0,!1,!0),yy:wr("FullYear",2,0,!0,!0),y:wr("FullYear",1,0,!1,!0),MMMM:xr("Month"),MMM:xr("Month",!0),MM:wr("Month",2,1),M:wr("Month",1,1),LLLL:xr("Month",!1,!0),dd:wr("Date",2),d:wr("Date",1),HH:wr("Hours",2),H:wr("Hours",1),hh:wr("Hours",2,-12),h:wr("Hours",1,-12),mm:wr("Minutes",2),m:wr("Minutes",1),ss:wr("Seconds",2),s:wr("Seconds",1),sss:wr("Milliseconds",3),EEEE:xr("Day"),EEE:xr("Day",!0),a:Ar,Z:Cr,ww:kr(2),w:kr(1),G:Or,GG:Or,GGG:Or,GGGG:Tr},Sa=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,Ea=/^-?\d+$/
Mr.$inject=["$locale"]
var ka=m(Ci),Aa=m(Si)
jr.$inject=["$parse"]
var Oa=m({restrict:"E",compile:function(t,e){if(!e.href&&!e.xlinkHref)return function(t,e){if("a"===e[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===Oi.call(e.prop("href"))?"xlink:href":"href"
e.on("click",function(t){e.attr(n)||t.preventDefault()})}}}}),Ta={}
o($o,function(t,e){function n(t,n,i){t.$watch(i[r],function(t){i.$set(e,!!t)})}if("multiple"!==t){var r=De("ng-"+e),i=n
"checked"===t&&(i=function(t,e,i){i.ngModel!==i[r]&&n(t,e,i)}),Ta[r]=function(){return{restrict:"A",priority:100,link:i}}}}),o(mo,function(t,e){Ta[e]=function(){return{priority:100,link:function(t,n,r){if("ngPattern"===e&&"/"===r.ngPattern.charAt(0)){var i=r.ngPattern.match(bi)
if(i)return void r.$set("ngPattern",new RegExp(i[1],i[2]))}t.$watch(r[e],function(t){r.$set(e,t)})}}}}),o(["src","srcset","href"],function(t){var e=De("ng-"+t)
Ta[e]=["$sce",function(n){return{priority:99,link:function(r,i,o){var a=t,s=t
"href"===t&&"[object SVGAnimatedString]"===Oi.call(i.prop("href"))&&(s="xlinkHref",o.$attr[s]="xlink:href",a=null),o.$set(e,n.getTrustedMediaUrl(o[e])),o.$observe(e,function(e){return e?(o.$set(s,e),void($i&&a&&i.prop(a,o[s]))):void("href"===t&&o.$set(s,null))})}}}]})
var Ma={$addControl:$,$getControls:m([]),$$renameControl:Rr,$removeControl:$,$setValidity:$,$setDirty:$,$setPristine:$,$setSubmitted:$,$$setSubmitted:$},Da="ng-pending",Va="ng-submitted"
Ir.$inject=["$element","$attrs","$scope","$animate","$interpolate"],Ir.prototype={$rollbackViewValue:function(){o(this.$$controls,function(t){t.$rollbackViewValue()})},$commitViewValue:function(){o(this.$$controls,function(t){t.$commitViewValue()})},$addControl:function(t){yt(t.$name,"input"),this.$$controls.push(t),t.$name&&(this[t.$name]=t),t.$$parentForm=this},$getControls:function(){return Et(this.$$controls)},$$renameControl:function(t,e){var n=t.$name
this[n]===t&&delete this[n],this[e]=t,t.$name=e},$removeControl:function(t){t.$name&&this[t.$name]===t&&delete this[t.$name],o(this.$pending,function(e,n){this.$setValidity(n,null,t)},this),o(this.$error,function(e,n){this.$setValidity(n,null,t)},this),o(this.$$success,function(e,n){this.$setValidity(n,null,t)},this),H(this.$$controls,t),t.$$parentForm=Ma},$setDirty:function(){this.$$animate.removeClass(this.$$element,vs),this.$$animate.addClass(this.$$element,ms),this.$dirty=!0,this.$pristine=!1,this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,vs,ms+" "+Va),this.$dirty=!1,this.$pristine=!0,this.$submitted=!1,o(this.$$controls,function(t){t.$setPristine()})},$setUntouched:function(){o(this.$$controls,function(t){t.$setUntouched()})},$setSubmitted:function(){for(var t=this;t.$$parentForm&&t.$$parentForm!==Ma;)t=t.$$parentForm
t.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,Va),this.$submitted=!0,o(this.$$controls,function(t){t.$$setSubmitted&&t.$$setSubmitted()})}},Ur({clazz:Ir,set:function(t,e,n){var r=t[e]
if(r){var i=r.indexOf(n)
i===-1&&r.push(n)}else t[e]=[n]},unset:function(t,e,n){var r=t[e]
r&&(H(r,n),0===r.length&&delete t[e])}})
var Na=function(t){return["$timeout","$parse",function(e,n){function r(t){return""===t?n('this[""]').assign:n(t).assign||$}var i={name:"form",restrict:t?"EAC":"E",require:["form","^^?form"],controller:Ir,compile:function(n,i){n.addClass(vs).addClass(ps)
var o=i.name?"name":!(!t||!i.ngForm)&&"ngForm"
return{pre:function(t,n,i,a){var s=a[0]
if(!("action"in i)){var u=function(e){t.$apply(function(){s.$commitViewValue(),s.$setSubmitted()}),e.preventDefault()}
n[0].addEventListener("submit",u),n.on("$destroy",function(){e(function(){n[0].removeEventListener("submit",u)},0,!1)})}var c=a[1]||s.$$parentForm
c.$addControl(s)
var l=o?r(s.$name):$
o&&(l(t,s),i.$observe(o,function(e){s.$name!==e&&(l(t,void 0),s.$$parentForm.$$renameControl(s,e),(l=r(s.$name))(t,s))})),n.on("$destroy",function(){s.$$parentForm.$removeControl(s),l(t,void 0),f(s,Ma)})}}}}
return i}]},ja=Na(),Pa=Na(!0),Ra=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Ia=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,La=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Ua=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,_a=/^(\d{4,})-(\d{2})-(\d{2})$/,qa=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Fa=/^(\d{4,})-W(\d\d)$/,Ha=/^(\d{4,})-(\d\d)$/,Ba=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,za="keydown wheel mousedown",Wa=xt()
o("date,datetime-local,month,time,week".split(","),function(t){Wa[t]=!0})
var Ga={text:Fr,date:Wr("date",_a,zr(_a,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":Wr("datetimelocal",qa,zr(qa,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),time:Wr("time",Ba,zr(Ba,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:Wr("week",Fa,Br,"yyyy-Www"),month:Wr("month",Ha,zr(Ha,["yyyy","MM"]),"yyyy-MM"),number:Qr,url:ei,email:ni,radio:ri,range:ti,checkbox:oi,hidden:$,button:$,submit:$,reset:$,file:$},Ka=["$browser","$sniffer","$filter","$parse",function(t,e,n,r){return{restrict:"E",require:["?ngModel"],link:{pre:function(i,o,a,s){s[0]&&(Ga[Ci(a.type)]||Ga.text)(i,o,a,s[0],e,t,n,r)}}}}],Ja=function(){var t={configurable:!0,enumerable:!1,get:function(){return this.getAttribute("value")||""},set:function(t){this.setAttribute("value",t)}}
return{restrict:"E",priority:200,compile:function(e,n){if("hidden"===Ci(n.type))return{pre:function(e,n,r,i){var o=n[0]
o.parentNode&&o.parentNode.insertBefore(o,o.nextSibling),Object.defineProperty&&Object.defineProperty(o,"value",t)}}}}},Ya=/^(true|false|\d+)$/,Za=function(){function t(t,e,n){var r=b(n)?n:9===$i?"":null
t.prop("value",r),e.$set("value",n)}return{restrict:"A",priority:100,compile:function(e,n){return Ya.test(n.ngValue)?function(e,n,r){var i=e.$eval(r.ngValue)
t(n,r,i)}:function(e,n,r){e.$watch(r.ngValue,function(e){t(n,r,e)})}}}},Xa=["$compile",function(t){return{restrict:"AC",compile:function(e){return t.$$addBindingClass(e),function(e,n,r){t.$$addBindingInfo(n,r.ngBind),n=n[0],e.$watch(r.ngBind,function(t){n.textContent=Ct(t)})}}}}],Qa=["$interpolate","$compile",function(t,e){return{compile:function(n){return e.$$addBindingClass(n),function(n,r,i){var o=t(r.attr(i.$attr.ngBindTemplate))
e.$$addBindingInfo(r,o.expressions),r=r[0],i.$observe("ngBindTemplate",function(t){r.textContent=y(t)?"":t})}}}}],ts=["$sce","$parse","$compile",function(t,e,n){return{restrict:"A",compile:function(r,i){var o=e(i.ngBindHtml),a=e(i.ngBindHtml,function(e){return t.valueOf(e)})
return n.$$addBindingClass(r),function(e,r,i){n.$$addBindingInfo(r,i.ngBindHtml),e.$watch(a,function(){var n=o(e)
r.html(t.getTrustedHtml(n)||"")})}}}}],es=m({restrict:"A",require:"ngModel",link:function(t,e,n,r){r.$viewChangeListeners.push(function(){t.$eval(n.ngChange)})}}),ns=ai("",!0),rs=ai("Odd",0),is=ai("Even",1),os=Pr({compile:function(t,e){e.$set("ngCloak",void 0),t.removeClass("ng-cloak")}}),as=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],ss={},us={blur:!0,focus:!0}
o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(t){var e=De("ng-"+t)
ss[e]=["$parse","$rootScope","$exceptionHandler",function(n,r,i){return si(n,r,i,e,t,us[t])}]})
var cs=["$animate","$compile",function(t,e){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,u,c
n.$watch(i.ngIf,function(n){n?u||a(function(n,o){u=o,n[n.length++]=e.$$createComment("end ngIf",i.ngIf),s={clone:n},t.enter(n,r.parent(),r)}):(c&&(c.remove(),c=null),u&&(u.$destroy(),u=null),s&&(c=wt(s.clone),t.leave(c).done(function(t){t!==!1&&(c=null)}),s=null))})}}}],ls=["$templateRequest","$anchorScroll","$animate",function(t,e,n){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Di.noop,compile:function(r,i){var o=i.ngInclude||i.src,a=i.onload||"",s=i.autoscroll
return function(r,i,u,c,l){var f,h,d,p=0,$=function(){h&&(h.remove(),h=null),f&&(f.$destroy(),f=null),d&&(n.leave(d).done(function(t){t!==!1&&(h=null)}),h=d,d=null)}
r.$watch(o,function(o){var u=function(t){t===!1||!b(s)||s&&!r.$eval(s)||e()},h=++p
o?(t(o,!0).then(function(t){if(!r.$$destroyed&&h===p){var e=r.$new()
c.template=t
var s=l(e,function(t){$(),n.enter(t,null,i).done(u)})
f=e,d=s,f.$emit("$includeContentLoaded",o),r.$eval(a)}},function(){r.$$destroyed||h===p&&($(),r.$emit("$includeContentError",o))}),r.$emit("$includeContentRequested",o)):($(),c.template=null)})}}}}],fs=["$compile",function(e){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(n,r,i,o){return Oi.call(r[0]).match(/SVG/)?(r.empty(),void e(Rt(o.template,t.document).childNodes)(n,function(t){r.append(t)},{futureParentElement:r})):(r.html(o.template),void e(r.contents())(n))}}}],hs=Pr({priority:450,compile:function(){return{pre:function(t,e,n){t.$eval(n.ngInit)}}}}),ds=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(t,e,n,r){var i=n.ngList||", ",a="false"!==n.ngTrim,s=a?Pi(i):i,u=function(t){if(!y(t)){var e=[]
return t&&o(t.split(s),function(t){t&&e.push(a?Pi(t):t)}),e}}
r.$parsers.push(u),r.$formatters.push(function(t){if(k(t))return t.join(i)}),r.$isEmpty=function(t){return!t||!t.length}}}},ps="ng-valid",$s="ng-invalid",vs="ng-pristine",ms="ng-dirty",gs="ng-untouched",ys="ng-touched",bs="ng-empty",ws="ng-not-empty",xs=r("ngModel")
ui.$inject=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$q","$interpolate"],ui.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var t=this.$$parse(this.$$attr.ngModel+"()"),e=this.$$parse(this.$$attr.ngModel+"($$$p)")
this.$$ngModelGet=function(e){var n=this.$$parsedNgModel(e)
return O(n)&&(n=t(e)),n},this.$$ngModelSet=function(t,n){O(this.$$parsedNgModel(t))?e(t,{$$$p:n}):this.$$parsedNgModelAssign(t,n)}}else if(!this.$$parsedNgModel.assign)throw xs("nonassign","Expression '{0}' is non-assignable. Element: {1}",this.$$attr.ngModel,nt(this.$$element))},$render:$,$isEmpty:function(t){return y(t)||""===t||null===t||t!==t},$$updateEmptyClasses:function(t){this.$isEmpty(t)?(this.$$animate.removeClass(this.$$element,ws),this.$$animate.addClass(this.$$element,bs)):(this.$$animate.removeClass(this.$$element,bs),this.$$animate.addClass(this.$$element,ws))},$setPristine:function(){this.$dirty=!1,this.$pristine=!0,this.$$animate.removeClass(this.$$element,ms),this.$$animate.addClass(this.$$element,vs)},$setDirty:function(){this.$dirty=!0,this.$pristine=!1,this.$$animate.removeClass(this.$$element,vs),this.$$animate.addClass(this.$$element,ms),this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1,this.$untouched=!0,this.$$animate.setClass(this.$$element,gs,ys)},$setTouched:function(){this.$touched=!0,this.$untouched=!1,this.$$animate.setClass(this.$$element,ys,gs)},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce),this.$viewValue=this.$$lastCommittedViewValue,this.$render()},$validate:function(){if(!Ni(this.$modelValue)){var t=this.$$lastCommittedViewValue,e=this.$$rawModelValue,n=this.$valid,r=this.$modelValue,i=this.$options.getOption("allowInvalid"),o=this
this.$$runValidators(e,t,function(t){i||n===t||(o.$modelValue=t?e:void 0,o.$modelValue!==r&&o.$$writeModelToScope())})}},$$runValidators:function(t,e,n){function r(){var t=l.$$parserName
return y(l.$$parserValid)?(s(t,null),!0):(l.$$parserValid||(o(l.$validators,function(t,e){s(e,null)}),o(l.$asyncValidators,function(t,e){s(e,null)})),s(t,l.$$parserValid),l.$$parserValid)}function i(){var n=!0
return o(l.$validators,function(r,i){var o=Boolean(r(t,e))
n=n&&o,s(i,o)}),!!n||(o(l.$asyncValidators,function(t,e){s(e,null)}),!1)}function a(){var n=[],r=!0
o(l.$asyncValidators,function(i,o){var a=i(t,e)
if(!R(a))throw xs("nopromise","Expected asynchronous validator to return a promise but got '{0}' instead.",a)
s(o,void 0),n.push(a.then(function(){s(o,!0)},function(){r=!1,s(o,!1)}))}),n.length?l.$$q.all(n).then(function(){u(r)},$):u(!0)}function s(t,e){c===l.$$currentValidationRunId&&l.$setValidity(t,e)}function u(t){c===l.$$currentValidationRunId&&n(t)}this.$$currentValidationRunId++
var c=this.$$currentValidationRunId,l=this
return r()&&i()?void a():void u(!1)},$commitViewValue:function(){var t=this.$viewValue
this.$$timeout.cancel(this.$$pendingDebounce),(this.$$lastCommittedViewValue!==t||""===t&&this.$$hasNativeValidators)&&(this.$$updateEmptyClasses(t),this.$$lastCommittedViewValue=t,this.$pristine&&this.$setDirty(),this.$$parseAndValidate())},$$parseAndValidate:function(){function t(){r.$modelValue!==o&&r.$$writeModelToScope()}var e=this.$$lastCommittedViewValue,n=e,r=this
if(this.$$parserValid=!y(n)||void 0,this.$setValidity(this.$$parserName,null),this.$$parserName="parse",this.$$parserValid)for(var i=0;i<this.$parsers.length;i++)if(n=this.$parsers[i](n),y(n)){this.$$parserValid=!1
break}Ni(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope))
var o=this.$modelValue,a=this.$options.getOption("allowInvalid")
this.$$rawModelValue=n,a&&(this.$modelValue=n,t()),this.$$runValidators(n,this.$$lastCommittedViewValue,function(e){a||(r.$modelValue=e?n:void 0,t())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue),o(this.$viewChangeListeners,function(t){try{t()}catch(e){this.$$exceptionHandler(e)}},this)},$setViewValue:function(t,e){this.$viewValue=t,this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(e)},$$debounceViewValueCommit:function(t){var e=this.$options.getOption("debounce")
S(e[t])?e=e[t]:S(e["default"])&&this.$options.getOption("updateOn").indexOf(t)===-1?e=e["default"]:S(e["*"])&&(e=e["*"]),this.$$timeout.cancel(this.$$pendingDebounce)
var n=this
e>0?this.$$pendingDebounce=this.$$timeout(function(){n.$commitViewValue()},e):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){n.$commitViewValue()})},$overrideModelOptions:function(t){this.$options=this.$options.createChild(t),this.$$setUpdateOnEvents()},$processModelValue:function(){var t=this.$$format()
this.$viewValue!==t&&(this.$$updateEmptyClasses(t),this.$viewValue=this.$$lastCommittedViewValue=t,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,$))},$$format:function(){for(var t=this.$formatters,e=t.length,n=this.$modelValue;e--;)n=t[e](n)
return n},$$setModelValue:function(t){this.$modelValue=this.$$rawModelValue=t,this.$$parserValid=void 0,this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler),this.$$updateEvents=this.$options.getOption("updateOn"),this.$$updateEvents&&this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(t){this.$$debounceViewValueCommit(t&&t.type)}},Ur({clazz:ui,set:function(t,e){t[e]=!0},unset:function(t,e){delete t[e]}})
var Cs,Ss=["$rootScope",function(t){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:ui,priority:1,compile:function(e){return e.addClass(vs).addClass(gs).addClass(ps),{pre:function(t,e,n,r){var i=r[0],o=r[1]||i.$$parentForm,a=r[2]
a&&(i.$options=a.$options),i.$$initGetterSetters(),o.$addControl(i),n.$observe("name",function(t){i.$name!==t&&i.$$parentForm.$$renameControl(i,t)}),t.$on("$destroy",function(){i.$$parentForm.$removeControl(i)})},post:function(e,n,r,i){function o(){a.$setTouched()}var a=i[0]
a.$$setUpdateOnEvents(),n.on("blur",function(){a.$touched||(t.$$phase?e.$evalAsync(o):e.$apply(o))})}}}}}],Es=/(\s+|^)default(\s+|$)/
li.prototype={getOption:function(t){return this.$$options[t]},createChild:function(t){var e=!1
return t=f({},t),o(t,function(n,r){"$inherit"===n?"*"===r?e=!0:(t[r]=this.$$options[r],"updateOn"===r&&(t.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===r&&(t.updateOnDefault=!1,t[r]=Pi(n.replace(Es,function(){return t.updateOnDefault=!0," "})))},this),e&&(delete t["*"],fi(t,this.$$options)),fi(t,Cs.$$options),new li(t)}},Cs=new li({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null})
var ks=function(){function t(t,e){this.$$attrs=t,this.$$scope=e}return t.$inject=["$attrs","$scope"],t.prototype={$onInit:function(){var t=this.parentCtrl?this.parentCtrl.$options:Cs,e=this.$$scope.$eval(this.$$attrs.ngModelOptions)
this.$options=t.createChild(e)}},{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:t}},As=Pr({terminal:!0,priority:1e3}),Os=r("ngOptions"),Ts=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ms=["$compile","$document","$parse",function(e,n,r){function a(t,e,n){function o(t,e,n,r,i){this.selectValue=t,this.viewValue=e,this.label=n,this.group=r,this.disabled=i}function a(t){var e
if(!c&&i(t))e=t
else{e=[]
for(var n in t)t.hasOwnProperty(n)&&"$"!==n.charAt(0)&&e.push(n)}return e}var s=t.match(Ts)
if(!s)throw Os("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",t,nt(e))
var u=s[5]||s[7],c=s[6],l=/ as /.test(s[0])&&s[1],f=s[9],h=r(s[2]?s[1]:u),d=l&&r(l),p=d||h,$=f&&r(f),v=f?function(t,e){return $(n,e)}:function(t){return le(t)},m=function(t,e){return v(t,C(t,e))},g=r(s[2]||s[1]),y=r(s[3]||""),b=r(s[4]||""),w=r(s[8]),x={},C=c?function(t,e){return x[c]=e,x[u]=t,x}:function(t){return x[u]=t,x}
return{trackBy:f,getTrackByValue:m,getWatchables:r(w,function(t){var e=[]
t=t||[]
for(var r=a(t),i=r.length,o=0;o<i;o++){var u=t===r?o:r[o],c=t[u],l=C(c,u),f=v(c,l)
if(e.push(f),s[2]||s[1]){var h=g(n,l)
e.push(h)}if(s[4]){var d=b(n,l)
e.push(d)}}return e}),getOptions:function(){for(var t=[],e={},r=w(n)||[],i=a(r),s=i.length,u=0;u<s;u++){var c=r===i?u:i[u],l=r[c],h=C(l,c),d=p(n,h),$=v(d,h),x=g(n,h),S=y(n,h),E=b(n,h),k=new o($,d,x,S,E)
t.push(k),e[$]=k}return{items:t,selectValueMap:e,getOptionFromViewValue:function(t){return e[m(t)]},getViewValueFromOption:function(t){return f?B(t.viewValue):t.viewValue}}}}}function s(t,r,i,s){function l(t,e){var n=u.cloneNode(!1)
e.appendChild(n),h(t,n)}function f(t){var e=C.getOptionFromViewValue(t),n=e&&e.element
return n&&!n.selected&&(n.selected=!0),e}function h(t,e){t.element=e,e.disabled=t.disabled,t.label!==e.label&&(e.label=t.label,e.textContent=t.label),e.value=t.selectValue}function d(){var t=C&&p.readValue()
if(C)for(var e=C.items.length-1;e>=0;e--){var n=C.items[e]
ee(b(n.group)?n.element.parentNode:n.element)}C=S.getOptions()
var i={}
if(C.items.forEach(function(t){var e
b(t.group)?(e=i[t.group],e||(e=c.cloneNode(!1),E.appendChild(e),e.label=null===t.group?"null":t.group,i[t.group]=e),l(t,e)):l(t,E)}),r[0].appendChild(E),$.$render(),!$.$isEmpty(t)){var o=p.readValue(),a=S.trackBy||v;(a?W(t,o):t===o)||($.$setViewValue(o),$.$render())}}for(var p=s[0],$=s[1],v=i.multiple,m=0,g=r.children(),y=g.length;m<y;m++)if(""===g[m].value){p.hasEmptyOption=!0,p.emptyOption=g.eq(m)
break}r.empty()
var w=!!p.emptyOption,x=vi(u.cloneNode(!1))
x.val("?")
var C,S=a(i.ngOptions,r,t),E=n[0].createDocumentFragment()
p.generateUnknownOptionValue=function(t){return"?"},v?(p.writeValue=function(t){if(C){var e=t&&t.map(f)||[]
C.items.forEach(function(t){t.element.selected&&!F(e,t)&&(t.element.selected=!1)})}},p.readValue=function(){var t=r.val()||[],e=[]
return o(t,function(t){var n=C.selectValueMap[t]
n&&!n.disabled&&e.push(C.getViewValueFromOption(n))}),e},S.trackBy&&t.$watchCollection(function(){if(k($.$viewValue))return $.$viewValue.map(function(t){return S.getTrackByValue(t)})},function(){$.$render()})):(p.writeValue=function(t){if(C){var e=r[0].options[r[0].selectedIndex],n=C.getOptionFromViewValue(t)
e&&e.removeAttribute("selected"),n?(r[0].value!==n.selectValue&&(p.removeUnknownOption(),r[0].value=n.selectValue,n.element.selected=!0),n.element.setAttribute("selected","selected")):p.selectUnknownOrEmptyOption(t)}},p.readValue=function(){var t=C.selectValueMap[r.val()]
return t&&!t.disabled?(p.unselectEmptyOption(),p.removeUnknownOption(),C.getViewValueFromOption(t)):null},S.trackBy&&t.$watch(function(){return S.getTrackByValue($.$viewValue)},function(){$.$render()})),w&&(e(p.emptyOption)(t),r.prepend(p.emptyOption),p.emptyOption[0].nodeType===Gi?(p.hasEmptyOption=!1,p.registerOption=function(t,e){""===e.val()&&(p.hasEmptyOption=!0,p.emptyOption=e,p.emptyOption.removeClass("ng-scope"),$.$render(),e.on("$destroy",function(){var t=p.$isEmptyOptionSelected()
p.hasEmptyOption=!1,p.emptyOption=void 0,t&&$.$render()}))}):p.emptyOption.removeClass("ng-scope")),t.$watchCollection(S.getWatchables,d)}var u=t.document.createElement("option"),c=t.document.createElement("optgroup")
return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(t,e,n,r){r[0].registerOption=$},post:s}}}],Ds=["$locale","$interpolate","$log",function(t,e,n){var r=/{}/g,i=/^when(Minus)?(.+)$/
return{link:function(a,s,u){function c(t){s.text(t||"")}var l,f=u.count,h=u.$attr.when&&s.attr(u.$attr.when),d=u.offset||0,p=a.$eval(h)||{},v={},m=e.startSymbol(),g=e.endSymbol(),b=m+f+"-"+d+g,w=Di.noop
o(u,function(t,e){var n=i.exec(e)
if(n){var r=(n[1]?"-":"")+Ci(n[2])
p[r]=s.attr(u.$attr[e])}}),o(p,function(t,n){v[n]=e(t.replace(r,b))}),a.$watch(f,function(e){var r=parseFloat(e),i=Ni(r)
if(i||r in p||(r=t.pluralCat(r-d)),!(r===l||i&&Ni(l))){w()
var o=v[r]
y(o)?(null!=e&&n.debug("ngPluralize: no rule defined for '"+r+"' in "+h),w=$,c()):w=a.$watch(o,c),l=r}})}}}],Vs=r("ngRef"),Ns=["$parse",function(t){return{priority:-1,restrict:"A",compile:function(e,n){var r=De(q(e)),i=t(n.ngRef),o=i.assign||function(){throw Vs("nonassign",'Expression in ngRef="{0}" is non-assignable!',n.ngRef)}
return function(t,e,a){var s
if(a.hasOwnProperty("ngRefRead")){if("$element"===a.ngRefRead)s=e
else if(s=e.data("$"+a.ngRefRead+"Controller"),!s)throw Vs("noctrl",'The controller for ngRefRead="{0}" could not be found on ngRef="{1}"',a.ngRefRead,n.ngRef)}else s=e.data("$"+r+"Controller")
s=s||e,o(t,s),e.on("$destroy",function(){i(t)===s&&o(t,null)})}}}}],js=["$parse","$animate","$compile",function(t,e,n){var a="$$NG_REMOVED",s=r("ngRepeat"),u=function(t,e,n,r,i,o,a){t[n]=r,i&&(t[i]=o),t.$index=e,t.$first=0===e,t.$last=e===a-1,t.$middle=!(t.$first||t.$last),t.$odd=!(t.$even=0===(1&e))},c=function(t){return t.clone[0]},l=function(t){return t.clone[t.clone.length-1]},f=function(t,e,n){return le(n)},h=function(t,e){return e}
return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(r,d){var p=d.ngRepeat,$=n.$$createComment("end ngRepeat",p),v=p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/)
if(!v)throw s("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",p)
var m=v[1],g=v[2],y=v[3],b=v[4]
if(v=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/),!v)throw s("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",m)
var w=v[3]||v[1],x=v[2]
if(y&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(y)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(y)))throw s("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",y)
var C
if(b){var S={$id:le},E=t(b)
C=function(t,e,n,r){return x&&(S[x]=e),S[w]=n,S.$index=r,E(t,S)}}return function(t,n,r,d,v){var m=xt()
t.$watchCollection(g,function(r){var d,g,b,E,k,A,O,T,M,D,V,N,j=n[0],P=xt()
if(y&&(t[y]=r),i(r))M=r,T=C||f
else{T=C||h,M=[]
for(var R in r)xi.call(r,R)&&"$"!==R.charAt(0)&&M.push(R)}for(E=M.length,V=new Array(E),d=0;d<E;d++)if(k=r===M?d:M[d],A=r[k],O=T(t,k,A,d),m[O])D=m[O],delete m[O],P[O]=D,V[d]=D
else{if(P[O])throw o(V,function(t){t&&t.scope&&(m[t.id]=t)}),s("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",p,O,A)
V[d]={id:O,scope:void 0,clone:void 0},P[O]=!0}S&&(S[w]=void 0)
for(var I in m){if(D=m[I],N=wt(D.clone),e.leave(N),N[0].parentNode)for(d=0,g=N.length;d<g;d++)N[d][a]=!0
D.scope.$destroy()}for(d=0;d<E;d++)if(k=r===M?d:M[d],A=r[k],D=V[d],D.scope){b=j
do b=b.nextSibling
while(b&&b[a])
c(D)!==b&&e.move(wt(D.clone),null,j),j=l(D),u(D.scope,d,w,A,x,k,E)}else v(function(t,n){D.scope=n
var r=$.cloneNode(!1)
t[t.length++]=r,e.enter(t,null,j),j=r,D.clone=t,P[D.id]=D,u(D.scope,d,w,A,x,k,E)})
m=P})}}}}],Ps="ng-hide",Rs="ng-hide-animate",Is=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngShow,function(e){t[e?"removeClass":"addClass"](n,Ps,{tempClasses:Rs})})}}}],Ls=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,r){e.$watch(r.ngHide,function(e){t[e?"addClass":"removeClass"](n,Ps,{tempClasses:Rs})})}}}],Us=Pr(function(t,e,n){t.$watchCollection(n.ngStyle,function(t,n){n&&t!==n&&o(n,function(t,n){e.css(n,"")}),t&&e.css(t)})}),_s=["$animate","$compile",function(t,e){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(n,r,i,a){var s=i.ngSwitch||i.on,u=[],c=[],l=[],f=[],h=function(t,e){return function(n){n!==!1&&t.splice(e,1)}}
n.$watch(s,function(n){for(var r,i;l.length;)t.cancel(l.pop())
for(r=0,i=f.length;r<i;++r){var s=wt(c[r].clone)
f[r].$destroy()
var d=l[r]=t.leave(s)
d.done(h(l,r))}c.length=0,f.length=0,(u=a.cases["!"+n]||a.cases["?"])&&o(u,function(n){n.transclude(function(r,i){f.push(i)
var o=n.element
r[r.length++]=e.$$createComment("end ngSwitchWhen")
var a={clone:r}
c.push(a),t.enter(r,o.parent(),o)})})})}}}],qs=Pr({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){var a=n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function(t,e,n){return n[e-1]!==t})
o(a,function(t){r.cases["!"+t]=r.cases["!"+t]||[],r.cases["!"+t].push({transclude:i,element:e})})}}),Fs=Pr({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:e})}}),Hs=r("ngTransclude"),Bs=["$compile",function(t){return{restrict:"EAC",compile:function(e){var n=t(e.contents())
return e.empty(),function(t,e,r,i,o){function a(t,n){t.length&&u(t)?e.append(t):(s(),n.$destroy())}function s(){n(t,function(t){e.append(t)})}function u(t){for(var e=0,n=t.length;e<n;e++){var r=t[e]
if(r.nodeType!==Wi||r.nodeValue.trim())return!0}}if(!o)throw Hs("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",nt(e))
r.ngTransclude===r.$attr.ngTransclude&&(r.ngTransclude="")
var c=r.ngTransclude||r.ngTranscludeSlot
o(a,null,c),c&&!o.isSlotFilled(c)&&s()}}}}],zs=["$templateCache",function(t){return{restrict:"E",terminal:!0,compile:function(e,n){if("text/ng-template"===n.type){var r=n.id,i=e[0].text
t.put(r,i)}}}}],Ws={$setViewValue:$,$render:$},Gs=["$element","$scope",function(e,n){function r(){s||(s=!0,n.$$postDigest(function(){s=!1,o.ngModelCtrl.$render()}))}function i(t){u||(u=!0,n.$$postDigest(function(){n.$$destroyed||(u=!1,o.ngModelCtrl.$setViewValue(o.readValue()),t&&o.ngModelCtrl.$render())}))}var o=this,a=new yo
o.selectValueMap={},o.ngModelCtrl=Ws,o.multiple=!1,o.unknownOption=vi(t.document.createElement("option")),o.hasEmptyOption=!1,o.emptyOption=void 0,o.renderUnknownOption=function(t){var n=o.generateUnknownOptionValue(t)
o.unknownOption.val(n),e.prepend(o.unknownOption),hi(o.unknownOption,!0),e.val(n)},o.updateUnknownOption=function(t){var n=o.generateUnknownOptionValue(t)
o.unknownOption.val(n),hi(o.unknownOption,!0),e.val(n)},o.generateUnknownOptionValue=function(t){return"? "+le(t)+" ?"},o.removeUnknownOption=function(){o.unknownOption.parent()&&o.unknownOption.remove()},o.selectEmptyOption=function(){o.emptyOption&&(e.val(""),hi(o.emptyOption,!0))},o.unselectEmptyOption=function(){o.hasEmptyOption&&hi(o.emptyOption,!1)},n.$on("$destroy",function(){o.renderUnknownOption=$}),o.readValue=function(){var t=e.val(),n=t in o.selectValueMap?o.selectValueMap[t]:t
return o.hasOption(n)?n:null},o.writeValue=function(t){var n=e[0].options[e[0].selectedIndex]
if(n&&hi(vi(n),!1),o.hasOption(t)){o.removeUnknownOption()
var r=le(t)
e.val(r in o.selectValueMap?r:t)
var i=e[0].options[e[0].selectedIndex]
hi(vi(i),!0)}else o.selectUnknownOrEmptyOption(t)},o.addOption=function(t,e){if(e[0].nodeType!==Gi){yt(t,'"option value"'),""===t&&(o.hasEmptyOption=!0,o.emptyOption=e)
var n=a.get(t)||0
a.set(t,n+1),r()}},o.removeOption=function(t){var e=a.get(t)
e&&(1===e?(a["delete"](t),""===t&&(o.hasEmptyOption=!1,o.emptyOption=void 0)):a.set(t,e-1))},o.hasOption=function(t){return!!a.get(t)},o.$hasEmptyOption=function(){return o.hasEmptyOption},o.$isUnknownOptionSelected=function(){return e[0].options[0]===o.unknownOption[0]},o.$isEmptyOptionSelected=function(){return o.hasEmptyOption&&e[0].options[e[0].selectedIndex]===o.emptyOption[0]},o.selectUnknownOrEmptyOption=function(t){null==t&&o.emptyOption?(o.removeUnknownOption(),o.selectEmptyOption()):o.unknownOption.parent().length?o.updateUnknownOption(t):o.renderUnknownOption(t)}
var s=!1,u=!1
o.registerOption=function(t,e,n,a,s){if(n.$attr.ngValue){var u,c
n.$observe("value",function(t){var n,r=e.prop("selected")
b(c)&&(o.removeOption(u),delete o.selectValueMap[c],n=!0),c=le(t),u=t,o.selectValueMap[c]=t,o.addOption(t,e),e.attr("value",c),n&&r&&i()})}else a?n.$observe("value",function(t){o.readValue()
var n,r=e.prop("selected")
b(u)&&(o.removeOption(u),n=!0),u=t,o.addOption(t,e),n&&r&&i()}):s?t.$watch(s,function(t,r){n.$set("value",t)
var a=e.prop("selected")
r!==t&&o.removeOption(r),o.addOption(t,e),r&&a&&i()}):o.addOption(n.value,e)
n.$observe("disabled",function(t){("true"===t||t&&e.prop("selected"))&&(o.multiple?i(!0):(o.ngModelCtrl.$setViewValue(null),o.ngModelCtrl.$render()))}),e.on("$destroy",function(){var t=o.readValue(),e=n.value
o.removeOption(e),r(),(o.multiple&&t&&t.indexOf(e)!==-1||t===e)&&i(!0)})}}],Ks=function(){function t(t,e,n,r){var i=r[0],a=r[1]
if(!a)return void(i.registerOption=$)
if(i.ngModelCtrl=a,e.on("change",function(){i.removeUnknownOption(),t.$apply(function(){a.$setViewValue(i.readValue())})}),n.multiple){i.multiple=!0,i.readValue=function(){var t=[]
return o(e.find("option"),function(e){if(e.selected&&!e.disabled){var n=e.value
t.push(n in i.selectValueMap?i.selectValueMap[n]:n)}}),t},i.writeValue=function(t){o(e.find("option"),function(e){var n=!!t&&(F(t,e.value)||F(t,i.selectValueMap[e.value])),r=e.selected
n!==r&&hi(vi(e),n)})}
var s,u=NaN
t.$watch(function(){u!==a.$viewValue||W(s,a.$viewValue)||(s=Et(a.$viewValue),a.$render()),u=a.$viewValue}),a.$isEmpty=function(t){return!t||0===t.length}}}function e(t,e,n,r){var i=r[1]
if(i){var o=r[0]
i.$render=function(){o.writeValue(i.$viewValue)}}}return{restrict:"E",require:["select","?ngModel"],controller:Gs,priority:1,link:{pre:t,post:e}}},Js=["$interpolate",function(t){return{restrict:"E",priority:100,compile:function(e,n){var r,i
return b(n.ngValue)||(b(n.value)?r=t(n.value,!0):(i=t(e.text(),!0),i||n.$set("value",e.text()))),function(t,e,n){var o="$selectController",a=e.parent(),s=a.data(o)||a.parent().data(o)
s&&s.registerOption(t,e,n,r,i)}}}}],Ys=["$parse",function(t){return{restrict:"A",require:"?ngModel",link:function(e,n,r,i){if(i){var o=r.hasOwnProperty("required")||t(r.ngRequired)(e)
r.ngRequired||(r.required=!0),i.$validators.required=function(t,e){return!o||!i.$isEmpty(e)},r.$observe("required",function(t){o!==t&&(o=t,i.$validate())})}}}}],Zs=["$parse",function(t){return{restrict:"A",require:"?ngModel",compile:function(e,n){var r,i
return n.ngPattern&&(r=n.ngPattern,i="/"===n.ngPattern.charAt(0)&&bi.test(n.ngPattern)?function(){return n.ngPattern}:t(n.ngPattern)),function(t,e,n,o){if(o){var a=n.pattern
n.ngPattern?a=i(t):r=n.pattern
var s=di(a,r,e)
n.$observe("pattern",function(t){var n=s
s=di(t,r,e),(n&&n.toString())!==(s&&s.toString())&&o.$validate()}),o.$validators.pattern=function(t,e){return o.$isEmpty(e)||y(s)||s.test(e)}}}}}}],Xs=["$parse",function(t){return{restrict:"A",require:"?ngModel",link:function(e,n,r,i){if(i){var o=r.maxlength||t(r.ngMaxlength)(e),a=pi(o)
r.$observe("maxlength",function(t){o!==t&&(a=pi(t),o=t,i.$validate())}),i.$validators.maxlength=function(t,e){return a<0||i.$isEmpty(e)||e.length<=a}}}}}],Qs=["$parse",function(t){return{restrict:"A",require:"?ngModel",link:function(e,n,r,i){if(i){var o=r.minlength||t(r.ngMinlength)(e),a=pi(o)||-1
r.$observe("minlength",function(t){o!==t&&(a=pi(t)||-1,o=t,i.$validate())}),i.$validators.minlength=function(t,e){return i.$isEmpty(e)||e.length>=a}}}}}]
return t.angular.bootstrap?void(t.console&&console.log("WARNING: Tried to load AngularJS more than once.")):($t(),Ot(Di),Di.module("ngLocale",[],["$provide",function(t){function e(t){t+=""
var e=t.indexOf(".")
return e==-1?0:t.length-e-1}function n(t,n){var r=n
void 0===r&&(r=Math.min(e(t),3))
var i=Math.pow(10,r),o=(t*i|0)%i
return{v:r,f:o}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"}
t.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],SHORTDAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],SHORTMONTH:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],STANDALONEMONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(t,e){var i=0|t,o=n(t,e)
return 1==i&&0==o.v?r.ONE:r.OTHER}})}]),void vi(function(){lt(t.document,ft)}))}(window),!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend(window.angular.element("<style>").text('@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}')),function(t,e){"use strict"
function n(){function t(t,e,i,o){return function(s,u,c){if(!c.hasOwnProperty(r)){var l=c.$normalize(e)
!n[l]||a(u,i)||c[l]||s.$watch(c[t],function(t){t=o?!t:!!t,u.attr(e,t)})}}}var n={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeydown:!0,bindRoleForClick:!0}
this.config=function(t){n=e.extend(n,t)},this.$get=function(){return{config:function(t){return n[t]},$$watchExpr:t}}}var r="ngAriaDisable",i=e.module("ngAria",["ng"]).info({angularVersion:"1.8.2"}).provider("$aria",n),o=["BUTTON","A","INPUT","TEXTAREA","SELECT","DETAILS","SUMMARY"],a=function(t,e){if(e.indexOf(t[0].nodeName)!==-1)return!0}
i.directive("ngShow",["$aria",function(t){return t.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(t){return t.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(t){return t.$$watchExpr("ngValue","aria-checked",o,!1)}]).directive("ngChecked",["$aria",function(t){return t.$$watchExpr("ngChecked","aria-checked",o,!1)}]).directive("ngReadonly",["$aria",function(t){return t.$$watchExpr("ngReadonly","aria-readonly",o,!1)}]).directive("ngRequired",["$aria",function(t){return t.$$watchExpr("ngRequired","aria-required",o,!1)}]).directive("ngModel",["$aria",function(t){function e(e,n,r,i){return t.config(n)&&!r.attr(e)&&(i||!a(r,o))&&("hidden"!==r.attr("type")||"INPUT"!==r[0].nodeName)}function n(t,e){return!e.attr("role")&&e.attr("type")===t&&!a(e,o)}function i(t,e){var n=t.type,r=t.role
return"checkbox"===(n||r)||"menuitemcheckbox"===r?"checkbox":"radio"===(n||r)||"menuitemradio"===r?"radio":"range"===n||"progressbar"===r||"slider"===r?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(o,a){if(!a.hasOwnProperty(r)){var s=i(a,o)
return{post:function(r,i,o,a){function u(){return a.$modelValue}function c(t){var e=o.value==a.$viewValue
i.attr("aria-checked",e)}function l(){i.attr("aria-checked",!a.$isEmpty(a.$viewValue))}var f=e("tabindex","tabindex",i,!1)
switch(s){case"radio":case"checkbox":n(s,i)&&i.attr("role",s),e("aria-checked","ariaChecked",i,!1)&&r.$watch(u,"radio"===s?c:l),f&&i.attr("tabindex",0)
break
case"range":if(n(s,i)&&i.attr("role","slider"),t.config("ariaValue")){var h=!i.attr("aria-valuemin")&&(o.hasOwnProperty("min")||o.hasOwnProperty("ngMin")),d=!i.attr("aria-valuemax")&&(o.hasOwnProperty("max")||o.hasOwnProperty("ngMax")),p=!i.attr("aria-valuenow")
h&&o.$observe("min",function(t){i.attr("aria-valuemin",t)}),d&&o.$observe("max",function(t){i.attr("aria-valuemax",t)}),p&&r.$watch(u,function(t){i.attr("aria-valuenow",t)})}f&&i.attr("tabindex",0)}!o.hasOwnProperty("ngRequired")&&a.$validators.required&&e("aria-required","ariaRequired",i,!1)&&o.$observe("required",function(){i.attr("aria-required",!!o.required)}),e("aria-invalid","ariaInvalid",i,!0)&&r.$watch(function(){return a.$invalid},function(t){i.attr("aria-invalid",!!t)})}}}}}}]).directive("ngDisabled",["$aria",function(t){return t.$$watchExpr("ngDisabled","aria-disabled",o,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(t,e,n,i){n.hasOwnProperty(r)||e.attr("aria-live")||e.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(t,e){return{restrict:"A",compile:function(n,i){if(!i.hasOwnProperty(r)){var s=e(i.ngClick)
return function(e,n,r){a(n,o)||(t.config("bindRoleForClick")&&!n.attr("role")&&n.attr("role","button"),t.config("tabindex")&&!n.attr("tabindex")&&n.attr("tabindex",0),!t.config("bindKeydown")||r.ngKeydown||r.ngKeypress||r.ngKeyup||n.on("keydown",function(t){function n(){s(e,{$event:t})}var r=t.which||t.keyCode
13!==r&&32!==r||(o.indexOf(t.target.nodeName)!==-1||t.target.isContentEditable||t.preventDefault(),e.$apply(n))}))}}}}}]).directive("ngDblclick",["$aria",function(t){return function(e,n,i){i.hasOwnProperty(r)||!t.config("tabindex")||n.attr("tabindex")||a(n,o)||n.attr("tabindex",0)}}])}(window,window.angular),function(t,e){"use strict"
function n(){function n(t,e){return r(t.split(","),e)}function r(t,e){var n,r={}
for(n=0;n<t.length;n++)r[e?c(t[n]):t[n]]=!0
return r}function $(t,e){e&&e.length&&o(t,r(e))}function v(t,e){null===t||void 0===t?t="":"string"!=typeof t&&(t=""+t)
var n=U(t)
if(!n)return""
var r=5
do{if(0===r)throw p("uinput","Failed to sanitize html because the input is unstable")
r--,t=n.innerHTML,n=U(t)}while(t!==n.innerHTML)
for(var i=n.firstChild;i;){switch(i.nodeType){case 1:e.start(i.nodeName.toLowerCase(),m(i.attributes))
break
case 3:e.chars(i.textContent)}var o
if(!(o=i.firstChild)&&(1===i.nodeType&&e.end(i.nodeName.toLowerCase()),o=w("nextSibling",i),!o))for(;null==o&&(i=w("parentNode",i),i!==n);)o=w("nextSibling",i),1===i.nodeType&&e.end(i.nodeName.toLowerCase())
i=o}for(;i=n.firstChild;)n.removeChild(i)}function m(t){for(var e={},n=0,r=t.length;n<r;n++){var i=t[n]
e[i.name]=i.value}return e}function g(t){return t.replace(/&/g,"&amp;").replace(S,function(t){var e=t.charCodeAt(0),n=t.charCodeAt(1)
return"&#"+(1024*(e-55296)+(n-56320)+65536)+";"}).replace(E,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function y(t,e){var n=!1,r=i(t,t.push)
return{start:function(t,i){t=c(t),!n&&N[t]&&(n=t),n||j[t]!==!0||(r("<"),r(t),a(i,function(n,i){var o=c(i),a="img"===t&&"src"===o||"background"===o
L[o]!==!0||P[o]===!0&&!e(n,a)||(r(" "),r(i),r('="'),r(g(n)),r('"'))}),r(">"))},end:function(t){t=c(t),n||j[t]!==!0||k[t]===!0||(r("</"),r(t),r(">")),t==n&&(n=!1)},chars:function(t){n||r(g(t))}}}function b(e){for(;e;){if(e.nodeType===t.Node.ELEMENT_NODE)for(var n=e.attributes,r=0,i=n.length;r<i;r++){var o=n[r],a=o.name.toLowerCase()
"xmlns:ns1"!==a&&0!==a.lastIndexOf("ns1:",0)||(e.removeAttributeNode(o),r--,i--)}var s=e.firstChild
s&&b(s),e=w("nextSibling",e)}}function w(t,e){var n=e[t]
if(n&&f.call(e,n))throw p("elclob","Failed to sanitize html because the element is clobbered: {0}",e.outerHTML||e.outerText)
return n}var x=!1,C=!1
this.$get=["$$sanitizeUri",function(t){return x=!0,C&&o(j,V),function(e){var n=[]
return h(e,d(n,function(e,n){return!/^unsafe:/.test(t(e,n))})),n.join("")}}],this.enableSvg=function(t){return u(t)?(C=t,this):C},this.addValidElements=function(t){return x||(s(t)&&(t={htmlElements:t}),$(V,t.svgElements),$(k,t.htmlVoidElements),$(j,t.htmlVoidElements),$(j,t.htmlElements)),this},this.addValidAttrs=function(t){return x||o(L,r(t,!0)),this},i=e.bind,o=e.extend,a=e.forEach,s=e.isArray,u=e.isDefined,c=e.$$lowercase,l=e.noop,h=v,d=y,f=t.Node.prototype.contains||function(t){return!!(16&this.compareDocumentPosition(t))}
var S=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,E=/([^#-~ |!])/g,k=n("area,br,col,hr,img,wbr"),A=n("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),O=n("rp,rt"),T=o({},O,A),M=o({},A,n("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),D=o({},O,n("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),V=n("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),N=n("script,style"),j=o({},k,M,D,T),P=n("background,cite,href,longdesc,src,xlink:href,xml:base"),R=n("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),I=n("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),L=o({},P,I,R),U=function(t,e){function n(){try{return!!r("")}catch(t){return!1}}function r(e){e="<remove></remove>"+e
try{var n=(new t.DOMParser).parseFromString(e,"text/html").body
return n.firstChild.remove(),n}catch(r){return}}function i(t){return a.innerHTML=t,e.documentMode&&b(a),a}if(n())return r
if(!e||!e.implementation)throw p("noinert","Can't create an inert html document")
var o=e.implementation.createHTMLDocument("inert"),a=(o.documentElement||o.getDocumentElement()).querySelector("body")
return i}(t,t.document)}function r(t){var e=[],n=d(e,l)
return n.chars(t),e.join("")}var i,o,a,s,u,c,l,f,h,d,p=e.$$minErr("$sanitize")
e.module("ngSanitize",[]).provider("$sanitize",n).info({angularVersion:"1.8.2"}),e.module("ngSanitize").filter("linky",["$sanitize",function(t){var n=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,i=/^mailto:/i,o=e.$$minErr("linky"),a=e.isDefined,s=e.isFunction,u=e.isObject,c=e.isString
return function(e,l,f){function h(t){t&&y.push(r(t))}function d(t,e){var n,r=m(t)
y.push("<a ")
for(n in r)y.push(n+'="'+r[n]+'" ')
!a(l)||"target"in r||y.push('target="',l,'" '),y.push('href="',t.replace(/"/g,"&quot;"),'">'),h(e),y.push("</a>")}if(null==e||""===e)return e
if(!c(e))throw o("notstring","Expected string but received: {0}",e)
for(var p,$,v,m=s(f)?f:u(f)?function(){return f}:function(){return{}},g=e,y=[];p=g.match(n);)$=p[0],p[2]||p[4]||($=(p[3]?"http://":"mailto:")+$),v=p.index,h(g.substr(0,v)),d($,p[0].replace(i,"")),g=g.substring(v+p[0].length)
return h(g),t(y.join(""))}}])}(window,window.angular),function(t,e){"use strict"
function n(t,e,n){if(!t)throw dt("areq","Argument '{0}' is {1}",e||"?",n||"required")
return t}function r(t,e){return t||e?t?e?(G(t)&&(t=t.join(" ")),G(e)&&(e=e.join(" ")),t+" "+e):t:e:""}function i(t){var e={}
return t&&(t.to||t.from)&&(e.to=t.to,e.from=t.from),e}function o(t,e,n){var r=""
return t=G(t)?t:t&&X(t)&&t.length?t.split(/\s+/):[],W(t,function(t,i){t&&t.length>0&&(r+=i>0?" ":"",r+=n?e+t:t+e)}),r}function a(t,e){var n=t.indexOf(e)
e>=0&&t.splice(n,1)}function s(t){if(t instanceof tt)switch(t.length){case 0:return t
case 1:if(t[0].nodeType===P)return t
break
default:return tt(u(t))}if(t.nodeType===P)return tt(t)}function u(t){if(!t[0])return t
for(var e=0;e<t.length;e++){var n=t[e]
if(n.nodeType===P)return n}}function c(t,e,n){W(e,function(e){t.addClass(e,n)})}function l(t,e,n){W(e,function(e){t.removeClass(e,n)})}function f(t){return function(e,n){n.addClass&&(c(t,e,n.addClass),n.addClass=null),n.removeClass&&(l(t,e,n.removeClass),n.removeClass=null)}}function h(t){if(t=t||{},!t.$$prepared){var e=t.domOperation||et
t.domOperation=function(){t.$$domOperationFired=!0,e(),e=et},t.$$prepared=!0}return t}function d(t,e){p(t,e),$(t,e)}function p(t,e){e.from&&(t.css(e.from),e.from=null)}function $(t,e){e.to&&(t.css(e.to),e.to=null)}function v(t,e,n){var r=e.options||{},i=n.options||{},o=(r.addClass||"")+" "+(i.addClass||""),a=(r.removeClass||"")+" "+(i.removeClass||""),s=m(t.attr("class"),o,a)
i.preparationClasses&&(r.preparationClasses=C(i.preparationClasses,r.preparationClasses),delete i.preparationClasses)
var u=r.domOperation!==et?r.domOperation:null
return z(r,i),u&&(r.domOperation=u),s.addClass?r.addClass=s.addClass:r.addClass=null,s.removeClass?r.removeClass=s.removeClass:r.removeClass=null,e.addClass=r.addClass,e.removeClass=r.removeClass,r}function m(t,e,n){function r(t){X(t)&&(t=t.split(" "))
var e={}
return W(t,function(t){t.length&&(e[t]=!0)}),e}var i=1,o=-1,a={}
t=r(t),e=r(e),W(e,function(t,e){a[e]=i}),n=r(n),W(n,function(t,e){a[e]=a[e]===i?null:o})
var s={addClass:"",removeClass:""}
return W(a,function(e,n){var r,a
e===i?(r="addClass",a=!t[n]||t[n+I]):e===o&&(r="removeClass",a=t[n]||t[n+R]),a&&(s[r].length&&(s[r]+=" "),s[r]+=n)}),s}function g(t){return t instanceof tt?t[0]:t}function y(t,e,n,r){var i=""
n&&(i=o(n,L,!0)),r.addClass&&(i=C(i,o(r.addClass,R))),r.removeClass&&(i=C(i,o(r.removeClass,I))),i.length&&(r.preparationClasses=i,e.addClass(i))}function b(t,e){e.preparationClasses&&(t.removeClass(e.preparationClasses),e.preparationClasses=null),e.activeClasses&&(t.removeClass(e.activeClasses),e.activeClasses=null)}function w(t,e){var n=e?"paused":"",r=N+st
return x(t,[r,n]),[r,n]}function x(t,e){var n=e[0],r=e[1]
t.style[n]=r}function C(t,e){return t?e?t+" "+e:t:e}function S(t){return[lt,t+"s"]}function E(t,e){var n=e?ct:ft
return[n,t+"s"]}function k(t,e,n){var r=Object.create(null),i=t.getComputedStyle(e)||{}
return W(n,function(t,e){var n=i[t]
if(n){var o=n.charAt(0);("-"===o||"+"===o||o>=0)&&(n=A(n)),0===n&&(n=null),r[e]=n}}),r}function A(t){var e=0,n=t.split(/\s*,\s*/)
return W(n,function(t){"s"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t=parseFloat(t)||0,e=e?Math.max(t,e):t}),e}function O(t){return 0===t||null!=t}function T(t,e){var n=D,r=t+"s"
return e?n+=nt:r+=" linear all",[n,r]}function M(t,e,n){W(n,function(n){t[n]=K(t[n])?t[n]:e.style.getPropertyValue(n)})}var D,V,N,j,P=1,R="-add",I="-remove",L="ng-",U="-active",_="-prepare",q="ng-animate",F="$$ngAnimateChildren",H=""
void 0===t.ontransitionend&&void 0!==t.onwebkittransitionend?(H="-webkit-",D="WebkitTransition",V="webkitTransitionEnd transitionend"):(D="transition",V="transitionend"),void 0===t.onanimationend&&void 0!==t.onwebkitanimationend?(H="-webkit-",N="WebkitAnimation",j="webkitAnimationEnd animationend"):(N="animation",j="animationend")
var B,z,W,G,K,J,Y,Z,X,Q,tt,et,nt="Duration",rt="Property",it="Delay",ot="TimingFunction",at="IterationCount",st="PlayState",ut=9999,ct=N+it,lt=N+nt,ft=D+it,ht=D+nt,dt=e.$$minErr("ng"),pt={blockTransitions:function(t,e){var n=e?"-"+e+"s":""
return x(t,[ft,n]),[ft,n]}},$t=["$$rAF",function(t){function e(t){r=r.concat(t),n()}function n(){if(r.length){for(var e=r.shift(),o=0;o<e.length;o++)e[o]()
i||t(function(){i||n()})}}var r,i
return r=e.queue=[],e.waitUntilQuiet=function(e){i&&i(),i=t(function(){i=null,e(),n()})},e}],vt=["$interpolate",function(t){return{link:function(e,n,r){function i(t){t="on"===t||"true"===t,n.data(F,t)}var o=r.ngAnimateChildren
X(o)&&0===o.length?n.data(F,!0):(i(t(o)(e)),r.$observe("ngAnimateChildren",i))}}}],mt="$$animateCss",gt=1e3,yt=3,bt=1.5,wt={transitionDuration:ht,transitionDelay:ft,transitionProperty:D+rt,animationDuration:lt,animationDelay:ct,animationIterationCount:N+at},xt={transitionDuration:ht,transitionDelay:ft,animationDuration:lt,animationDelay:ct},Ct=["$animateProvider",function(t){this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$animateCache","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(t,e,n,r,s,u,c,l,v){function m(e,n,r,i,o){var a=s.get(r)
a||(a=k(t,e,o),"infinite"===a.animationIterationCount&&(a.animationIterationCount=1))
var u=i||a.transitionDuration>0||a.animationDuration>0
return s.put(r,a,u),a}function y(n,r,i,a){var u,c="stagger-"+i
if(s.count(i)>0&&(u=s.get(c),!u)){var l=o(r,"-stagger")
e.addClass(n,l),u=k(t,n,a),u.animationDuration=Math.max(u.animationDuration,0),u.transitionDuration=Math.max(u.transitionDuration,0),e.removeClass(n,l),s.put(c,u,!0)}return u||{}}function b(t){P.push(t),l.waitUntilQuiet(function(){s.flush()
for(var t=u(),e=0;e<P.length;e++)P[e](t)
P.length=0})}function C(t,e,n,r){var i=m(t,e,n,r,wt),o=i.animationDelay,a=i.transitionDelay
return i.maxDelay=o&&a?Math.max(o,a):o||a,i.maxDuration=Math.max(i.animationDuration*i.animationIterationCount,i.transitionDuration),i}var A=f(e),P=[]
return function(t,u){function l(){m()}function f(){m(!0)}function m(n){if(!(K||Y&&J)){K=!0,J=!1,wt&&!F.$$skipPreparationClasses&&e.removeClass(t,wt),Lt&&e.removeClass(t,Lt),w(z,!1),pt.blockTransitions(z,!1),W(st,function(t){z.style[t[0]]=""}),A(t,F),d(t,F),Object.keys(H).length&&W(H,function(t,e){t?z.style.setProperty(e,t):z.style.removeProperty(e)}),F.onDone&&F.onDone(),ft&&ft.length&&t.off(ft.join(" "),_)
var i=t.data(mt)
i&&(r.cancel(i[0].timer),t.removeData(mt)),Z&&Z.complete(!n)}}function k(t){It.blockTransition&&pt.blockTransitions(z,t),It.blockKeyframeAnimation&&w(z,!!t)}function P(){return Z=new n({end:l,cancel:f}),b(et),m(),{$$willAnimate:!1,start:function(){return Z},end:l}}function _(t){t.stopPropagation()
var e=t.originalEvent||t
if(e.target===z){var n=e.$manualTimeStamp||Date.now(),r=parseFloat(e.elapsedTime.toFixed(yt))
Math.max(n-at,0)>=tt&&r>=nt&&(Y=!0,m())}}function q(){function n(){if(!K){if(k(!1),W(st,function(t){var e=t[0],n=t[1]
z.style[e]=n}),A(t,F),e.addClass(t,Lt),It.recalculateTimingStyles){if(Ct=z.getAttribute("class")+" "+wt,At=s.cacheKey(z,ht,F.addClass,F.removeClass),Pt=C(z,Ct,At,!1),Rt=Pt.maxDelay,Q=Math.max(Rt,0),nt=Pt.maxDuration,0===nt)return void m()
It.hasTransitions=Pt.transitionDuration>0,It.hasAnimations=Pt.animationDuration>0}if(It.applyAnimationDelay&&(Rt="boolean"!=typeof F.delay&&O(F.delay)?parseFloat(F.delay):Rt,Q=Math.max(Rt,0),Pt.animationDelay=Rt,Ut=E(Rt,!0),st.push(Ut),z.style[Ut[0]]=Ut[1]),tt=Q*gt,it=nt*gt,F.easing){var n,o=F.easing
It.hasTransitions&&(n=D+ot,st.push([n,o]),z.style[n]=o),It.hasAnimations&&(n=N+ot,st.push([n,o]),z.style[n]=o)}Pt.transitionDuration&&ft.push(V),Pt.animationDuration&&ft.push(j),at=Date.now()
var a=tt+bt*it,u=at+a,c=t.data(mt)||[],l=!0
if(c.length){var f=c[0]
l=u>f.expectedEndTime,l?r.cancel(f.timer):c.push(m)}if(l){var h=r(i,a,!1)
c[0]={timer:h,expectedEndTime:u},c.push(m),t.data(mt,c)}ft.length&&t.on(ft.join(" "),_),F.to&&(F.cleanupStyles&&M(H,z,Object.keys(F.to)),$(t,F))}}function i(){var e=t.data(mt)
if(e){for(var n=1;n<e.length;n++)e[n]()
t.removeData(mt)}}if(!K){if(!z.parentNode)return void m()
var o=function(t){if(Y)J&&t&&(J=!1,m())
else if(J=!t,Pt.animationDuration){var e=w(z,J)
J?st.push(e):a(st,e)}},u=Nt>0&&(Pt.transitionDuration&&0===kt.transitionDuration||Pt.animationDuration&&0===kt.animationDuration)&&Math.max(kt.animationDelay,kt.transitionDelay)
u?r(n,Math.floor(u*Nt*gt),!1):n(),X.resume=function(){o(!0)},X.pause=function(){o(!1)}}}var F=u||{}
F.$$prepared||(F=h(B(F)))
var H={},z=g(t)
if(!z||!z.parentNode||!v.enabled())return P()
var K,J,Y,Z,X,Q,tt,nt,it,at,st=[],ct=t.attr("class"),lt=i(F),ft=[]
if(0===F.duration||!c.animations&&!c.transitions)return P()
var ht=F.event&&G(F.event)?F.event.join(" "):F.event,dt=ht&&F.structural,$t="",vt=""
dt?$t=o(ht,L,!0):ht&&($t=ht),F.addClass&&(vt+=o(F.addClass,R)),F.removeClass&&(vt.length&&(vt+=" "),vt+=o(F.removeClass,I)),F.applyClassesEarly&&vt.length&&A(t,F)
var wt=[$t,vt].join(" ").trim(),Ct=ct+" "+wt,St=lt.to&&Object.keys(lt.to).length>0,Et=(F.keyframeStyle||"").length>0
if(!Et&&!St&&!wt)return P()
var kt,At=s.cacheKey(z,ht,F.addClass,F.removeClass)
if(s.containsCachedAnimationWithoutDuration(At))return wt=null,P()
if(F.stagger>0){var Ot=parseFloat(F.stagger)
kt={transitionDelay:Ot,animationDelay:Ot,transitionDuration:0,animationDuration:0}}else kt=y(z,wt,At,xt)
F.$$skipPreparationClasses||e.addClass(t,wt)
var Tt
if(F.transitionStyle){var Mt=[D,F.transitionStyle]
x(z,Mt),st.push(Mt)}if(F.duration>=0){Tt=z.style[D].length>0
var Dt=T(F.duration,Tt)
x(z,Dt),st.push(Dt)}if(F.keyframeStyle){var Vt=[N,F.keyframeStyle]
x(z,Vt),st.push(Vt)}var Nt=kt?F.staggerIndex>=0?F.staggerIndex:s.count(At):0,jt=0===Nt
jt&&!F.skipBlocking&&pt.blockTransitions(z,ut)
var Pt=C(z,Ct,At,!dt),Rt=Pt.maxDelay
Q=Math.max(Rt,0),nt=Pt.maxDuration
var It={}
if(It.hasTransitions=Pt.transitionDuration>0,It.hasAnimations=Pt.animationDuration>0,It.hasTransitionAll=It.hasTransitions&&"all"===Pt.transitionProperty,It.applyTransitionDuration=St&&(It.hasTransitions&&!It.hasTransitionAll||It.hasAnimations&&!It.hasTransitions),It.applyAnimationDuration=F.duration&&It.hasAnimations,It.applyTransitionDelay=O(F.delay)&&(It.applyTransitionDuration||It.hasTransitions),It.applyAnimationDelay=O(F.delay)&&It.hasAnimations,It.recalculateTimingStyles=vt.length>0,(It.applyTransitionDuration||It.applyAnimationDuration)&&(nt=F.duration?parseFloat(F.duration):nt,It.applyTransitionDuration&&(It.hasTransitions=!0,Pt.transitionDuration=nt,Tt=z.style[D+rt].length>0,st.push(T(nt,Tt))),It.applyAnimationDuration&&(It.hasAnimations=!0,Pt.animationDuration=nt,st.push(S(nt)))),0===nt&&!It.recalculateTimingStyles)return P()
var Lt=o(wt,U)
if(null!=F.delay){var Ut
"boolean"!=typeof F.delay&&(Ut=parseFloat(F.delay),Q=Math.max(Ut,0)),It.applyTransitionDelay&&st.push(E(Ut)),It.applyAnimationDelay&&st.push(E(Ut,!0))}return null==F.duration&&Pt.transitionDuration>0&&(It.recalculateTimingStyles=It.recalculateTimingStyles||jt),tt=Q*gt,it=nt*gt,F.skipBlocking||(It.blockTransition=Pt.transitionDuration>0,It.blockKeyframeAnimation=Pt.animationDuration>0&&kt.animationDelay>0&&0===kt.animationDuration),F.from&&(F.cleanupStyles&&M(H,z,Object.keys(F.from)),p(t,F)),It.blockTransition||It.blockKeyframeAnimation?k(nt):F.skipBlocking||pt.blockTransitions(z,!1),{$$willAnimate:!0,end:l,start:function(){if(!K)return X={end:l,cancel:f,resume:null,pause:null},Z=new n(X),b(q),Z}}}}]}],St=["$$animationProvider",function(t){function e(t){return t.parentNode&&11===t.parentNode.nodeType}t.drivers.push("$$animateCssDriver")
var n="ng-animate-shim",r="ng-anchor",i="ng-anchor-out",o="ng-anchor-in"
this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(t,a,s,u,c,l,f){function h(t){return t.replace(/\bng-\S+\b/g,"")}function d(t,e){return X(t)&&(t=t.split(" ")),X(e)&&(e=e.split(" ")),t.filter(function(t){return e.indexOf(t)===-1}).join(" ")}function p(e,a,u){function c(t){var e={},n=g(t).getBoundingClientRect()
return W(["width","height","top","left"],function(t){var r=n[t]
switch(t){case"top":r+=m.scrollTop
break
case"left":r+=m.scrollLeft}e[t]=Math.floor(r)+"px"}),e}function l(){var e=t(v,{addClass:i,delay:!0,from:c(a)})
return e.$$willAnimate?e:null}function f(t){return t.attr("class")||""}function p(){var e=h(f(u)),n=d(e,y),r=d(y,e),a=t(v,{to:c(u),addClass:o+" "+n,removeClass:i+" "+r,delay:!0})
return a.$$willAnimate?a:null}function $(){v.remove(),a.removeClass(n),u.removeClass(n)}var v=tt(g(a).cloneNode(!0)),y=h(f(v))
a.addClass(n),u.addClass(n),v.addClass(r),b.append(v)
var w,x=l()
if(!x&&(w=p(),!w))return $()
var C=x||w
return{start:function(){function t(){n&&n.end()}var e,n=C.start()
return n.done(function(){return n=null,!w&&(w=p())?(n=w.start(),n.done(function(){n=null,$(),e.complete()}),n):($(),void e.complete())}),e=new s({end:t,cancel:t})}}}function $(t,e,n,r){var i=v(t,et),o=v(e,et),a=[]
if(W(r,function(t){var e=t.out,r=t["in"],i=p(n,e,r)
i&&a.push(i)}),i||o||0!==a.length)return{start:function(){function t(){W(e,function(t){t.end()})}var e=[]
i&&e.push(i.start()),o&&e.push(o.start()),W(a,function(t){e.push(t.start())})
var n=new s({end:t,cancel:t})
return s.all(e,function(t){n.complete(t)}),n}}}function v(e){var n=e.element,r=e.options||{}
e.structural&&(r.event=e.event,r.structural=!0,r.applyClassesEarly=!0,"leave"===e.event&&(r.onDone=r.domOperation)),r.preparationClasses&&(r.event=C(r.event,r.preparationClasses))
var i=t(n,r)
return i.$$willAnimate?i:null}if(!c.animations&&!c.transitions)return et
var m=f[0].body,y=g(u),b=tt(e(y)||m.contains(y)?y:m)
return function(t){return t.from&&t.to?$(t.from,t.to,t.classes,t.anchors):v(t)}}]}],Et=["$animateProvider",function(t){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(e,n,r){function i(n){n=G(n)?n:n.split(" ")
for(var r=[],i={},o=0;o<n.length;o++){var a=n[o],s=t.$$registeredAnimations[a]
s&&!i[a]&&(r.push(e.get(s)),i[a]=!0)}return r}var o=f(r)
return function(t,e,r,a){function s(){a.domOperation(),o(t,a)}function u(){p=!0,s(),d(t,a)}function c(t,e,r,i,o){var a
switch(r){case"animate":a=[e,i.from,i.to,o]
break
case"setClass":a=[e,m,g,o]
break
case"addClass":a=[e,m,o]
break
case"removeClass":a=[e,g,o]
break
default:a=[e,o]}a.push(i)
var s=t.apply(t,a)
if(s)if(Y(s.start)&&(s=s.start()),s instanceof n)s.done(o)
else if(Y(s))return s
return et}function l(t,e,r,i,o){var a=[]
return W(i,function(i){var s=i[o]
s&&a.push(function(){var i,o,a=!1,u=function(t){a||(a=!0,(o||et)(t),i.complete(!t))}
return i=new n({end:function(){u()},cancel:function(){u(!0)}}),o=c(s,t,e,r,function(t){var e=t===!1
u(e)}),i})}),a}function f(t,e,r,i,o){var a=l(t,e,r,i,o)
if(0===a.length){var s,u
"beforeSetClass"===o?(s=l(t,"removeClass",r,i,"beforeRemoveClass"),u=l(t,"addClass",r,i,"beforeAddClass")):"setClass"===o&&(s=l(t,"removeClass",r,i,"removeClass"),u=l(t,"addClass",r,i,"addClass")),s&&(a=a.concat(s)),u&&(a=a.concat(u))}if(0!==a.length)return function(t){var e=[]
return a.length&&W(a,function(t){e.push(t())}),e.length?n.all(e,t):t(),function(t){W(e,function(e){t?e.cancel():e.end()})}}}var p=!1
3===arguments.length&&Z(r)&&(a=r,r=null),a=h(a),r||(r=t.attr("class")||"",a.addClass&&(r+=" "+a.addClass),a.removeClass&&(r+=" "+a.removeClass))
var $,v,m=a.addClass,g=a.removeClass,y=i(r)
if(y.length){var b,w
"leave"===e?(w="leave",b="afterLeave"):(w="before"+e.charAt(0).toUpperCase()+e.substr(1),b=e),"enter"!==e&&"move"!==e&&($=f(t,e,a,y,w)),v=f(t,e,a,y,b)}if($||v){var x
return{$$willAnimate:!0,end:function(){return x?x.end():(u(),x=new n,x.complete(!0)),x},start:function(){function t(t){u(t),x.complete(t)}function e(e){p||((r||et)(e),t(e))}if(x)return x
x=new n
var r,i=[]
return $&&i.push(function(t){r=$(t)}),i.length?i.push(function(t){s(),t(!0)}):s(),v&&i.push(function(t){r=v(t)}),x.setHost({end:function(){e()},cancel:function(){e(!0)}}),n.chain(i,t),x}}}}}]}],kt=["$$animationProvider",function(t){t.drivers.push("$$animateJsDriver"),this.$get=["$$animateJs","$$AnimateRunner",function(t,e){function n(e){var n=e.element,r=e.event,i=e.options,o=e.classes
return t(n,r,o,i)}return function(t){if(t.from&&t.to){var r=n(t.from),i=n(t.to)
if(!r&&!i)return
return{start:function(){function t(){return function(){W(o,function(t){t.end()})}}function n(t){a.complete(t)}var o=[]
r&&o.push(r.start()),i&&o.push(i.start()),e.all(o,n)
var a=new e({end:t(),cancel:t()})
return a}}}return n(t)}}]}],At="data-ng-animate",Ot="$ngAnimatePin",Tt=["$animateProvider",function(e){function r(t){return{addClass:t.addClass,removeClass:t.removeClass,from:t.from,to:t.to}}function i(t){if(!t)return null
var e=t.split($),n=Object.create(null)
return W(e,function(t){n[t]=!0}),n}function o(t,e){if(t&&e){var n=i(e)
return t.split($).some(function(t){return n[t]})}}function a(t,e,n){return m[t].some(function(t){return t(e,n)})}function c(t,e){var n=(t.addClass||"").length>0,r=(t.removeClass||"").length>0
return e?n&&r:n||r}var l=1,p=2,$=" ",m=this.rules={skip:[],cancel:[],join:[]}
m.join.push(function(t,e){return!t.structural&&c(t)}),m.skip.push(function(t,e){return!t.structural&&!c(t)}),m.skip.push(function(t,e){return"leave"===e.event&&t.structural}),m.skip.push(function(t,e){return e.structural&&e.state===p&&!t.structural}),m.cancel.push(function(t,e){return e.structural&&t.structural}),m.cancel.push(function(t,e){return e.state===p&&t.structural}),m.cancel.push(function(t,e){if(e.structural)return!1
var n=t.addClass,r=t.removeClass,i=e.addClass,a=e.removeClass
return!(Q(n)&&Q(r)||Q(i)&&Q(a))&&(o(n,a)||o(r,i))}),this.$get=["$$rAF","$rootScope","$rootElement","$document","$$Map","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(i,o,$,m,w,x,C,S,E,k,A){function O(t){q["delete"](t.target)}function T(){var t=!1
return function(e){t?e():o.$$postDigest(function(){t=!0,e()})}}function M(t,e){return v(t,e,{})}function D(t,e,n){var r=[],i=et[n]
return i&&W(i,function(i){ut.call(i.node,e)?r.push(i.callback):"leave"===n&&ut.call(i.node,t)&&r.push(i.callback)}),r}function V(t,e,n){var r=u(e)
return t.filter(function(t){var e=t.node===r&&(!n||t.callback===n)
return!e})}function N(t,e){"close"!==t||e.parentNode||ct.off(e)}function j(t,e,n){function u(t,e,n,r){O(function(){var t=D(S,w,e)
t.length?i(function(){W(t,function(t){t(m,n,r)}),N(n,w)}):N(n,w)}),t.progress(e,n,r)}function f(t){b(m,$),st(m,$),d(m,$),$.domOperation(),k.complete(!t)}var $=B(n),m=s(t),w=g(m),S=w&&w.parentNode
$=h($)
var k=new C,O=T()
if(G($.addClass)&&($.addClass=$.addClass.join(" ")),$.addClass&&!X($.addClass)&&($.addClass=null),G($.removeClass)&&($.removeClass=$.removeClass.join(" ")),$.removeClass&&!X($.removeClass)&&($.removeClass=null),$.from&&!Z($.from)&&($.from=null),$.to&&!Z($.to)&&($.to=null),!(H&&w&&ot(w,e,n)&&at(w,$)))return f(),k
var V=["enter","move","leave"].indexOf(e)>=0,j=A(),P=j||q.get(w),F=!P&&_.get(w)||{},z=!!F.state
if(P||z&&F.state===l||(P=!L(w,S,e)),P)return j&&u(k,e,"start",r($)),f(),j&&u(k,e,"close",r($)),k
V&&R(w)
var K={structural:V,element:m,event:e,addClass:$.addClass,removeClass:$.removeClass,close:f,options:$,runner:k}
if(z){var J=a("skip",K,F)
if(J)return F.state===p?(f(),k):(v(m,F,K),F.runner)
var Y=a("cancel",K,F)
if(Y)if(F.state===p)F.runner.end()
else{if(!F.structural)return v(m,F,K),F.runner
F.close()}else{var Q=a("join",K,F)
if(Q){if(F.state!==p)return y(E,m,V?e:null,$),e=K.event=F.event,$=v(m,F,K),F.runner
M(m,K)}}}else M(m,K)
var tt=K.structural
if(tt||(tt="animate"===K.event&&Object.keys(K.options.to||{}).length>0||c(K)),!tt)return f(),I(w),k
var et=(F.counter||0)+1
return K.counter=et,U(w,l,K),o.$$postDigest(function(){m=s(t)
var n=_.get(w),i=!n
n=n||{}
var o=m.parent()||[],a=o.length>0&&("animate"===n.event||n.structural||c(n))
if(i||n.counter!==et||!a)return i&&(st(m,$),d(m,$)),(i||V&&n.event!==e)&&($.domOperation(),k.end()),void(a||I(w))
e=!n.structural&&c(n,!0)?"setClass":n.event,U(w,p)
var l=x(m,e,n.options)
k.setHost(l),u(k,e,"start",r($)),l.done(function(t){f(!t)
var n=_.get(w)
n&&n.counter===et&&I(w),u(k,e,"close",r($))})}),k}function R(t){var e=t.querySelectorAll("["+At+"]")
W(e,function(t){var e=parseInt(t.getAttribute(At),10),n=_.get(t)
if(n)switch(e){case p:n.runner.end()
case l:_["delete"](t)}})}function I(t){t.removeAttribute(At),_["delete"](t)}function L(t,e,n){var r,i=m[0].body,o=g($),a=t===i||"HTML"===t.nodeName,s=t===o,u=!1,c=q.get(t),l=tt.data(t,Ot)
for(l&&(e=g(l));e&&(s||(s=e===o),e.nodeType===P);){var f=_.get(e)||{}
if(!u){var h=q.get(e)
if(h===!0&&c!==!1){c=!0
break}h===!1&&(c=!1),u=f.structural}if(Q(r)||r===!0){var d=tt.data(e,F)
K(d)&&(r=d)}if(u&&r===!1)break
if(a||(a=e===i),a&&s)break
e=s||!(l=tt.data(e,Ot))?e.parentNode:g(l)}var p=(!u||r)&&c!==!0
return p&&s&&a}function U(t,e,n){n=n||{},n.state=e,t.setAttribute(At,e)
var r=_.get(t),i=r?z(r,n):n
_.set(t,i)}var _=new w,q=new w,H=null,Y=o.$watch(function(){return 0===S.totalPendingRequests},function(t){t&&(Y(),o.$$postDigest(function(){o.$$postDigest(function(){null===H&&(H=!0)})}))}),et=Object.create(null),nt=e.customFilter(),rt=e.classNameFilter(),it=function(){return!0},ot=nt||it,at=rt?function(t,e){var n=[t.getAttribute("class"),e.addClass,e.removeClass].join(" ")
return rt.test(n)}:it,st=f(E),ut=t.Node.prototype.contains||function(t){return this===t||!!(16&this.compareDocumentPosition(t))},ct={on:function(t,e,n){var r=u(e)
et[t]=et[t]||[],et[t].push({node:r,callback:n}),tt(e).on("$destroy",function(){var i=_.get(r)
i||ct.off(t,e,n)})},off:function(t,e,n){if(1!==arguments.length||X(arguments[0])){var r=et[t]
r&&(et[t]=1===arguments.length?null:V(r,e,n))}else{e=arguments[0]
for(var i in et)et[i]=V(et[i],e)}},pin:function(t,e){n(J(t),"element","not an element"),n(J(e),"parentElement","not an element"),t.data(Ot,e)},push:function(t,e,n,r){return n=n||{},n.domOperation=r,j(t,e,n)},enabled:function(t,e){var n=arguments.length
if(0===n)e=!!H
else{var r=J(t)
if(r){var i=g(t)
1===n?e=!q.get(i):(q.has(i)||tt(t).on("$destroy",O),q.set(i,!e))}else e=H=!!t}return e}}
return ct}]}],Mt=function(){var t="$$ngAnimateParentKey",e=0,n=Object.create(null)
this.$get=[function(){return{cacheKey:function(n,r,i,o){var a=n.parentNode,s=a[t]||(a[t]=++e),u=[s,r,n.getAttribute("class")]
return i&&u.push(i),o&&u.push(o),u.join(" ")},containsCachedAnimationWithoutDuration:function(t){var e=n[t]
return e&&!e.isValid||!1},flush:function(){n=Object.create(null)},count:function(t){var e=n[t]
return e?e.total:0},get:function(t){var e=n[t]
return e&&e.value},put:function(t,e,r){n[t]?(n[t].total++,n[t].value=e):n[t]={total:1,value:e,isValid:r}}}}]},Dt=["$animateProvider",function(t){function e(t,e){t.data(s,e)}function n(t){t.removeData(s)}function i(t){return t.data(s)}var o="ng-animate-ref",a=this.drivers=[],s="$$animationRunner",u="$$animatePrepareClasses"
this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$Map","$$rAFScheduler","$$animateCache",function(t,s,c,l,p,$,v){function m(t){function e(t){if(t.processed)return t
t.processed=!0
var n=t.domNode,r=n.parentNode
o.set(n,t)
for(var a;r;){if(a=o.get(r)){a.processed||(a=e(a))
break}r=r.parentNode}return(a||i).children.push(t),t}function n(t){var e,n=[],r=[]
for(e=0;e<t.children.length;e++)r.push(t.children[e])
var i=r.length,o=0,a=[]
for(e=0;e<r.length;e++){var s=r[e]
i<=0&&(i=o,o=0,n.push(a),a=[]),a.push(s),s.children.forEach(function(t){o++,r.push(t)}),i--}return a.length&&n.push(a),n}var r,i={children:[]},o=new p
for(r=0;r<t.length;r++){var a=t[r]
o.set(a.domNode,t[r]={domNode:a.domNode,element:a.element,fn:a.fn,children:[]})}for(r=0;r<t.length;r++)e(t[r])
return n(i)}var y=[],b=f(t)
return function(f,p,w){function x(t){var e="["+o+"]",n=t.hasAttribute(o)?[t]:t.querySelectorAll(e),r=[]
return W(n,function(t){var e=t.getAttribute(o)
e&&e.length&&r.push(t)}),r}function C(t){var e=[],n={}
W(t,function(t,r){var i=t.element,a=g(i),s=t.event,u=["enter","move"].indexOf(s)>=0,c=t.structural?x(a):[]
if(c.length){var l=u?"to":"from"
W(c,function(t){var e=t.getAttribute(o)
n[e]=n[e]||{},n[e][l]={animationID:r,element:tt(t)}})}else e.push(t)})
var r={},i={}
return W(n,function(n,o){var a=n.from,s=n.to
if(!a||!s){var u=a?a.animationID:s.animationID,c=u.toString()
return void(r[c]||(r[c]=!0,e.push(t[u])))}var l=t[a.animationID],f=t[s.animationID],h=a.animationID.toString()
if(!i[h]){var d=i[h]={structural:!0,beforeStart:function(){l.beforeStart(),f.beforeStart()},close:function(){l.close(),f.close()},classes:S(l.classes,f.classes),from:l,to:f,anchors:[]}
d.classes.length?e.push(d):(e.push(l),e.push(f))}i[h].anchors.push({out:a.element,"in":s.element})}),e}function S(t,e){t=t.split(" "),e=e.split(" ")
for(var n=[],r=0;r<t.length;r++){var i=t[r]
if("ng-"!==i.substring(0,3))for(var o=0;o<e.length;o++)if(i===e[o]){n.push(i)
break}}return n.join(" ")}function E(t){for(var e=a.length-1;e>=0;e--){var n=a[e],r=c.get(n),i=r(t)
if(i)return i}}function k(){N=(N?N+" ":"")+q,t.addClass(f,N)
var e=f.data(u)
e&&(t.removeClass(f,e),e=null)}function A(t,e){function n(t){var n=i(t)
n&&n.setHost(e)}t.from&&t.to?(n(t.from.element),n(t.to.element)):n(t.element)}function O(){var t=i(f)
!t||"leave"===p&&w.$$domOperationFired||t.end()}function T(e){f.off("$destroy",O),n(f),b(f,w),d(f,w),w.domOperation(),N&&t.removeClass(f,N),D.complete(!e)}w=h(w)
var M=["enter","move","leave"].indexOf(p)>=0,D=new l({end:function(){T()},cancel:function(){T(!0)}})
if(!a.length)return T(),D
var V=r(f.attr("class"),r(w.addClass,w.removeClass)),N=w.tempClasses
return N&&(V+=" "+N,w.tempClasses=null),M&&f.data(u,"ng-"+p+_),e(f,D),y.push({element:f,classes:V,event:p,structural:M,options:w,beforeStart:k,close:T}),f.on("$destroy",O),y.length>1?D:(s.$$postDigest(function(){var e=[]
W(y,function(t){i(t.element)?e.push(t):t.close()}),y.length=0
var n=C(e),r=[]
W(n,function(t){var e=t.from?t.from.element:t.element,n=w.addClass
n=(n?n+" ":"")+q
var o=v.cacheKey(e[0],t.event,n,w.removeClass)
r.push({element:e,domNode:g(e),fn:function(){var e,n=t.close
if(v.containsCachedAnimationWithoutDuration(o))return void n()
t.beforeStart()
var r=t.anchors?t.from.element||t.to.element:t.element
if(i(r)){var a=E(t)
a&&(e=a.start)}if(e){var s=e()
s.done(function(t){n(!t)}),A(t,s)}else n()}})})
for(var o=m(r),a=0;a<o.length;a++)for(var s=o[a],c=0;c<s.length;c++){var l=s[c],f=l.element
if(o[a][c]=l.fn,0!==a){var h=f.data(u)
h&&t.addClass(f,h)}else f.removeData(u)}$(o)}),D)}}]}],Vt=["$animate",function(t){return{restrict:"A",transclude:"element",terminal:!0,priority:550,link:function(e,n,r,i,o){var a,s
e.$watchCollection(r.ngAnimateSwap||r["for"],function(e){a&&t.leave(a),s&&(s.$destroy(),s=null),(e||0===e)&&o(function(e,r){a=e,s=r,t.enter(e,null,n)})})}}}]
e.module("ngAnimate",[],function(){et=e.noop,B=e.copy,z=e.extend,tt=e.element,W=e.forEach,G=e.isArray,X=e.isString,Z=e.isObject,Q=e.isUndefined,K=e.isDefined,Y=e.isFunction,J=e.isElement}).info({angularVersion:"1.8.2"}).directive("ngAnimateSwap",Vt).directive("ngAnimateChildren",vt).factory("$$rAFScheduler",$t).provider("$$animateQueue",Tt).provider("$$animateCache",Mt).provider("$$animation",Dt).provider("$animateCss",Ct).provider("$$animateCssDriver",St).provider("$$animateJs",Et).provider("$$animateJsDriver",kt)}(window,window.angular),function(){"use strict"
function t(e){var r=e.parentNode
return!!r&&(9===r.nodeType||"none"!==n(e,"display")&&"hidden"!==n(e,"visibility")&&t(r))}function e(t,i,o,a,s,u,c,l){var f=t.parentNode,h=2,d=t.offsetParent
if(!r(t))return!1
if(9===f.nodeType)return!0
if("fixed"===n(t,"position"))return!0
if("0"===n(t,"opacity")||"none"===n(t,"display")||"hidden"===n(t,"visibility"))return!1
if(i&&f){void 0!==o&&void 0!==a&&void 0!==s&&void 0!==u&&void 0!==c&&void 0!==l||(o=t.offsetTop,u=t.offsetLeft,s=o+t.offsetHeight,a=u+t.offsetWidth,c=t.offsetWidth,l=t.offsetHeight)
var p=n(f,"overflow")
if("inline"!==n(f,"display")&&("hidden"===p||"scroll"===p||"auto"===p)){var $=0,v=0
if(d!==f&&($=f.offsetLeft,v=f.offsetTop),u+h>$+f.offsetWidth+f.scrollLeft||u+c-h<$+f.scrollLeft||o+h>v+f.offsetHeight+f.scrollTop||o+l-h<v+f.scrollTop)return!1}if(d===f)u+=f.offsetLeft-f.scrollLeft,o+=f.offsetTop-f.scrollTop
else if(d!==f.offsetParent)return u+=d.offsetLeft-d.scrollLeft,o+=d.offsetTop-d.scrollTop,e(d,!0,o,a,s,u,c,l)
return e(f,!0,o,a,s,u,c,l)}return!0}function n(t,e){return 9===t.nodeType?null:window.getComputedStyle?document.defaultView.getComputedStyle(t,null).getPropertyValue(e):t.currentStyle?t.currentStyle[e]:void 0}function r(t){for(;t=t.parentNode;)if(t===document)return!0
return!1}var i=angular.module
angular.module=function(t,e,n){return Array.isArray(e)&&(e=e.map(function(t){return angular.isObject(t)&&t.name?t.name:t})),i(t,e,n)}
window.document
!function(r,i,o){function a(t){return function(){var e=this[0]
return e&&e[t]&&e[t](),this}}var s=r.element.prototype,u=Array.prototype
s.every=function(t){return u.every.call(this,t)},s.some=function(t){return u.some.call(this,t)},s.map=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i]
return u.map.call(this,function(e){var i=r.element(e)
return i[t].apply(i,n)})},s.querySelector=function(t){var e=this[0]
return r.element(e?e.querySelector(t):null)},s.querySelectorAll=function(t){var e=this[0]
return r.element(e?e.querySelectorAll(t):null)},s.focus=a("focus"),s.selectInput=function(t,e){var n=this[0]
return n&&n.select&&n.focus&&(n.focus(),void 0===t?n.select():(void 0===e&&(e=this.val().length),void 0!==n.selectionStart?(n.selectionStart=t,n.selectionEnd=e):n.select())),this},s.isVisible=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
return this.length>0&&this.every(function(r){return"basic"===n?t(r):e(r,n)})},s.isInView=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=this[0]
if(!e)return!1
var n=e.getBoundingClientRect(),o=r.element(i)
return n.top>=t+this.scrollableParent().getFixedNodeOffsets()&&n.left>=t&&n.bottom<=o.offsetHeight()-t&&n.right<=o.offsetWidth()-t},s.getFixedNodeOffsets=function(){var t=0
if(this.length){var e=this[0]
if(e===i&&(e=o),e&&e.querySelectorAll){var n=!1
r.forEach(e.querySelectorAll(".sticky-header, .navbar-fixed-top"),function(e){e.classList.contains("sticky-header")?(t+=n?0:e.offsetHeight,n=!0):t+=e.offsetHeight})}}return t},s.getStyle=function(t){return this[0]?n(this[0],t):null},s.isHidden=function(){return"none"===this.getStyle("display")},s.offsetTop=function(){var t=this[0],e=0
if(t!==i)for(;t&&9!==t.nodeType;)e+=t.offsetTop,t=t.offsetParent
return e},s.offsetLeft=function(){var t=this[0],e=0
if(t!==i)for(;t&&9!==t.nodeType;)e+=t.offsetLeft,t=t.offsetParent
return e},s.offsetHeight=function(){var t=this[0]
return t===i?"innerHeight"in t?t.innerHeight:o.documentElement.offsetHeight:t?t.offsetHeight:0},s.offsetWidth=function(){var t=this[0]
return t===i?"innerWidth"in t?t.innerWidth:o.documentElement.offsetWidth:t?t.offsetWidth:0},s.offset=function(){var t={top:this.offsetTop(),left:this.offsetLeft(),width:this.offsetWidth(),height:this.offsetHeight()}
return t.right=t.left+t.width,t.bottom=t.top+t.height,t},s.scrollTop=function(t){var e=this[0],n=void 0===t
return e?(e===i?void 0===i.scrollY?n?t=o.documentElement.scrollTop:o.documentElement.scrollTop=t:n?t=i.scrollY:i.scrollTo(i.scrollX,t):n?t=e.scrollTop:e.scrollTop=t,t):0},s.isScrollable=function(){if(this[0]===i)return!0
var t=this.getStyle("overflow"),e=this.getStyle("overflow-y")
return"auto"===t||"scroll"===t||"auto"===e||"scroll"===e},s.scrollableParent=function(){for(var t=this.parent();t.length&&!t.isScrollable();)t=t.parent()
return t.length||(t=r.element(i)),t}}(angular,window,document),function(){if(window){var t=window.angular,e=void 0,n={find:function(n){return e||["[ng-app]","body","[ui-view]"].forEach(function(n){e=e||t.element(document.querySelector(n)).injector()}),e.get(n)},$apply:function(t){return n.$rootScope.$apply(t)},changeUrl:function(t){n.$apply(function(){return n.$location.url(t)})},go:function(){var t=arguments
n.$apply(function(){return n.$state.go.apply(n.$state,t)})},$httpGet:function(){return n.$http.get.apply(null,arguments).then(function(t){return console.log(t.data)},function(t){return console.error(t.data)})},$httpPost:function(){return n.$http.post.apply(null,arguments).then(function(t){return console.log(t.data)},function(t){return console.error(t.data)})},scopeFor:function(e){return t.element(e).scope()},directiveCtrl:function(e,n){return t.element(e).data("$"+n+"Controller")},watchers:function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[ng-app]",i=[]
return t.isString(e)&&(e=document.querySelector(e)),e=t.element(e),function n(e){t.forEach(["$scope","$isolateScope"],function(n){e.data()&&e.data().hasOwnProperty(n)&&t.forEach(e.data()[n].$$watchers,function(t){i.indexOf(t)<0&&i.push(t)})}),t.forEach(e.children(),function(e){n(t.element(e))})}(e),i.length},digestRate:function(){var t=void 0
if(n._dgs){var e=(Date.now()-n._dgs)/1e3,r=n._dgc
t="digests/sec: "+Math.round(100*r/e)/100+" | sec: "+Math.round(e)+" | digests: "+r+" | watchers: "+n.watchers()}else{n._dgs=Date.now(),n._dgc=0
var i=n.$rootScope.$watch(function(){n._dgc++})
n.digestRateStop=function(){n._dgs=0,i()},t="Started watcher, stop with Dev.digestRateStop()"}return t}},r={};["$rootScope","$location","$http","$q","$timeout","$state","DS","allModels"].forEach(function(t){r[t]={get:function(){return n.find(t)}}}),r.models=r.allModels,Object.defineProperties(n,r),window.Dev=n}}()}()

//# sourceMappingURL=shared-angular.min-c82b0a51.js.map
