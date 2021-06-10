!function(){"use strict"
function e(){}function t(e){return e}function n(e){return"string"==typeof e}function o(e){return null!==e&&"object"===("undefined"==typeof e?"undefined":m(e))}function i(e){return"function"==typeof e}function r(e){return e=I(e),0===e.length?e:e[0].toUpperCase()+e.slice(1)}function a(e){return null===e||void 0===e?"":I(e)}function s(){for(var e=/^\/+|\/+$/g,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i]
return o.map(function(t){return a(t).replace(e,"")}).filter(t).join("/")}function d(e){return Object.keys(e).filter(function(t){return e[t]}).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}function u(e,t){var n=e.indexOf(t),o=n>=0
return o&&e.splice(n,1),o}function c(e){var t=e
if(i(e))t=void 0
else if(E(e))t=e.map(c)
else if(o(e)){t={}
var n=Object.keys(e)
n.length||(n=Object.getOwnPropertyNames(e)),n.forEach(function(n){t[n]=c(e[n])})}return t}function l(e,t){var n=void 0
try{var o=window.localStorage[e]
n=JSON.parse(o||"{}")}catch(i){}return t?(n||{})[t]:n||{}}function f(e,t,n){var o=l(e)
o[t]=n
try{window.localStorage[e]=JSON.stringify(o)}catch(i){G&&console.error("[QualifiedEmbed] Error saving editor data",i)}}function h(e){"complete"===Z.readyState||"interactive"===Z.readyState?window.setTimeout(e,1):Z.addEventListener("DOMContentLoaded",e)}function v(e){if(e.$$destroyed)throw new Error("This manager has been destroyed, please create a new one")}var p,m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),w=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},b=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},k=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t},E=Array.isArray,I=String,_=function(){var e=[],t=!1
return{destroy:function(n){t=!0,e.forEach(function(e){e(n)})},onDestroy:function(n){t?n():e.push(n)}}},C={"http:":"80","https:":"443"},O=/^(https?:)?\/\/([^\/:]+)?(:(\d+))?/,S=["file:","data:"],R=function(e){if(e&&S.find(function(t){return e.startsWith(t)}))return"null"
var t=document.location,n=O.exec(e),o=void 0,i=void 0,r=void 0
n?(o=n[1]?n[1]:t.protocol,i=n[2],r=n[4]):(o=t.protocol,i=t.hostname,r=t.port)
var a=r&&r!==C[o]?":"+r:""
return o+"//"+i+a},j=function(e){return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o]
if(e){var i;(i=console).log.apply(i,["[Penpal]"].concat(n))}}}
!function(e){e.Call="call",e.Reply="reply",e.Syn="syn",e.SynAck="synAck",e.Ack="ack"}(p||(p={}))
var P
!function(e){e.Fulfilled="fulfilled",e.Rejected="rejected"}(P||(P={}))
var $
!function(e){e.ConnectionDestroyed="ConnectionDestroyed",e.ConnectionTimeout="ConnectionTimeout",e.NotInIframe="NotInIframe",e.NoIframeSrc="NoIframeSrc"}($||($={}))
var N
!function(e){e.DataCloneError="DataCloneError"}(N||(N={}))
var A
!function(e){e.Message="message"}(A||(A={}))
var M=function(e,t,n,o){return function(i){if(i.origin!==n)return void e("Parent: Handshake - Received SYN message from origin "+i.origin+" which did not match expected origin "+n)
e("Parent: Handshake - Received SYN, responding with SYN-ACK")
var r={penpal:p.SynAck,methodNames:Object.keys(t)}
i.source.postMessage(r,o)}},D=function(e){var t=e.name,n=e.message,o=e.stack
return{name:t,message:n,stack:o}},L=function(e){var t=new Error
return Object.keys(e).forEach(function(n){return t[n]=e[n]}),t},T=function(e,t,n){var o=e.localName,i=e.local,r=e.remote,a=e.originForSending,s=e.originForReceiving,d=!1,u=function(e){if(e.source===r&&e.data.penpal===p.Call){if(e.origin!==s)return void n(o+" received message from origin "+e.origin+" which did not match expected origin "+s)
var i=e.data,u=i.methodName,c=i.args,l=i.id
n(o+": Received "+u+"() call")
var f=function(e){return function(t){if(n(o+": Sending "+u+"() reply"),d)return void n(o+": Unable to send "+u+"() reply due to destroyed connection")
var i={penpal:p.Reply,id:l,resolution:e,returnValue:t}
e===P.Rejected&&t instanceof Error&&(i.returnValue=D(t),i.returnValueIsError=!0)
try{r.postMessage(i,a)}catch(s){if(s.name===N.DataCloneError){var c={penpal:p.Reply,id:l,resolution:P.Rejected,returnValue:D(s),returnValueIsError:!0}
r.postMessage(c,a)}throw s}}}
new Promise(function(e){return e(t[u].apply(t,c))}).then(f(P.Fulfilled),f(P.Rejected))}}
return i.addEventListener(A.Message,u),function(){d=!0,i.removeEventListener(A.Message,u)}},F=0,U=function(){return++F},x=function(e,t,n,o,i){var r=t.localName,a=t.local,s=t.remote,d=t.originForSending,u=t.originForReceiving,c=!1
i(r+": Connecting call sender")
var l=function(e){return function(){for(var t=arguments.length,n=Array(t),l=0;l<t;l++)n[l]=arguments[l]
i(r+": Sending "+e+"() call")
var f=void 0
try{s.closed&&(f=!0)}catch(h){f=!0}if(f&&o(),c){var v=new Error("Unable to send "+e+"() call due to destroyed connection")
throw v.code=$.ConnectionDestroyed,v}return new Promise(function(t,o){var c=U(),l=function h(n){if(n.source===s&&n.data.penpal===p.Reply&&n.data.id===c){if(n.origin!==u)return void i(r+" received message from origin "+n.origin+" which did not match expected origin "+u)
var d=n.data
i(r+": Received "+e+"() reply"),a.removeEventListener(A.Message,h)
var l=d.returnValue
d.returnValueIsError&&(l=L(l)),(d.resolution===P.Fulfilled?t:o)(l)}}
a.addEventListener(A.Message,l)
var f={penpal:p.Call,id:c,methodName:e,args:n}
s.postMessage(f,d)})}}
return n.reduce(function(e,t){return e[t]=l(t),e},e),function(){c=!0}},V=function(e,t,n,o,i){var r=o.destroy,a=o.onDestroy,s=void 0,d=void 0,u={}
return function(o){if(o.origin!==t)return void i("Parent: Handshake - Received ACK message from origin "+o.origin+" which did not match expected origin "+t)
i("Parent: Handshake - Received ACK")
var c={localName:"Parent",local:window,remote:o.source,originForSending:n,originForReceiving:t}
s&&s(),s=T(c,e,i),a(s),d&&d.forEach(function(e){delete u[e]}),d=o.data.methodNames
var l=x(u,c,d,r,i)
return a(l),u}},q=function(e){if(!e.src&&!e.srcdoc){var t=new Error("Iframe must have src or srcdoc property defined.")
throw t.code=$.NoIframeSrc,t}},Q=6e4,H=function(e,t){var n=t.destroy,o=t.onDestroy,i=setInterval(function(){document.contains(e)||(clearInterval(i),n())},Q)
o(function(){clearInterval(i)})},K=function(e,t){var n=void 0
return void 0!==e&&(n=window.setTimeout(function(){var n=new Error("Connection timed out after "+e+"ms")
n.code=$.ConnectionTimeout,t(n)},e)),function(){clearTimeout(n)}},Y=function(e){var t=e.iframe,n=e.methods,o=void 0===n?{}:n,i=e.childOrigin,r=e.timeout,a=e.debug,s=void 0!==a&&a,d=j(s),u=_(),c=u.onDestroy,l=u.destroy
i||(q(t),i=R(t.src))
var f="null"===i?"*":i,h=M(d,o,i,f),v=V(o,i,f,u,d),m=new Promise(function(e,n){var o=K(r,l),i=function(n){if(n.source===t.contentWindow&&n.data){if(n.data.penpal===p.Syn)return void h(n)
if(n.data.penpal===p.Ack){var i=v(n)
return void(i&&(o(),e(i)))}}}
window.addEventListener(A.Message,i),d("Parent: Awaiting handshake"),H(t,u),c(function(e){window.removeEventListener(A.Message,i),e||(e=new Error("Connection destroyed"),e.code=$.ConnectionDestroyed),n(e)})})
return{promise:m,destroy:function(){l()}}},J=function(){function e(t){var n=t.node
if(y(this,e),!n)throw new Error("Cannot create an embedded editor without a node")
this.node=n
try{n.QualifiedEmbed=this}catch(o){}"IFRAME"===n.nodeName?this.iframe=n:(this.iframe=document.createElement("iframe"),n.appendChild(this.iframe)),this.iframe.classList.add("qualified-embedded")}return g(e,[{key:"destroy",value:function(){if(!this.$$destroyed){if(this.$$destroyed=!0,this.manager&&u(this.manager.editors,this),this.iframe&&(this.iframe.src="",this.iframe!==this.node&&this.iframe.parentNode&&this.iframe.parentNode.removeChild(this.iframe)),this.node)try{this.node.QualifiedEmbed=null}catch(e){}this.connection&&this.connection.destroy(),this.iframe=this.node=this.manager=this.options=this.connection=this.childMethods=null}}},{key:"_initPenpal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=this.manager,a={}
e.forEach(function(e){a[e]=function(a){var s,d="on"+r(e),u=(s={},w(s,t._type||"editor",t),w(s,"data",a),s)
n.forEach(function(e){u[e]=t[e]}),[t,t.options,o].forEach(function(e){e&&i(e[d])&&e[d](u)})}}),this.connection=Y({iframe:this.iframe,timeout:3e5,methods:a}),this.connection.promise.then(function(e){t.childMethods=e})["catch"](function(e){t.$$destroyed||a.loaded({error:e?e.toString():"Unknown Connection Error",started:!1})})}},{key:"_post",value:function(e,t){return this.$$destroyed?Promise.reject("Editor has been destroyed"):this.childMethods&&this.childMethods[e]?this.childMethods[e](c(t)):Promise.reject('Unable to call method "'+e+'" on iframe')}}]),e}(),W="[data-qualified-embed]",z="qualifiedEmbed",B="https://www.qualified.io",G=!1,X=function(e){function t(e){var n=e.node,o=e.challengeId,i=e.options,r=void 0===i?{}:i,a=e.manager
y(this,t)
var s=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{manager:a,node:n}))
if(a){if(a.$$destroyed)throw new Error("Cannot create an embed on a destroyed manager object")
s.manager=a,a.editors.push(s)}if(o||(o=n.dataset[z]),!o)throw new Error("Unable to determine challenge ID from node: no value for data-qualified-embed")
return s.challengeId=o,s.options=Object.assign({},a&&a.options,a&&a.challengeOptions[o]||{},r),s._updateIframe(),s.challengeData={},s._initPenpal(["ready","loaded","change","runStart","run"],["challengeId","manager"]),s}return b(t,e),g(t,[{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.challengeId,n=void 0===t?this.challengeId:t,o=e.options,i=void 0===o?null:o,r=e.reload,a=void 0!==r&&r
this.$$destroyed||(i&&Object.assign(this.options,i),a||n&&this.challengeId!==n?(this.challengeId=n,this._updateIframe()):this._sendOptions())}},{key:"start",value:function(){return this._post("start")}},{key:"runTests",value:function(){return this._post("runTests")}},{key:"attempt",value:function(){return this._post("attempt")}},{key:"reset",value:function(){return this._post("reset")}},{key:"reload",value:function(){this._updateIframe()}},{key:"setFileContents",value:function(e,t){return this._post("setFileContents",{files:e,cursor:t})}},{key:"setRunResult",value:function(e){return this._post("setRunResult",e)}},{key:"onReady",value:function(){if(this.options.localStorageId){var e=l(this.options.localStorageId,this.challengeId)
e&&e.files&&(this.options.initialFiles=Object.assign({},this.options.initialFiles,e.files),e.cursor&&(this.options.initialCursor=e.cursor))}this._sendOptions()}},{key:"onLoaded",value:function(e){var t=e.data
this.challengeData=t}},{key:"onChange",value:function(e){var t=e.data
this.options.localStorageId&&f(this.options.localStorageId,this.challengeId,t)}},{key:"_sendOptions",value:function(){this._post("setOptions",this.options)}},{key:"_updateIframe",value:function(){if(!this.$$destroyed){var e={hasAuthToken:!!this.options.authToken,theme:this.options.theme},t=this.options.baseURL||B
this.iframe.src=s(t,"embed",this.challengeId)+"?"+d(e)}}}]),t}(J),Z=window.document,ee=function(){function t(){var o=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.onLoaded,a=void 0===r?e:r,s=i.onRun,d=void 0===s?e:s,u=i.onRunStart,c=void 0===u?e:u,l=i.onChange,f=void 0===l?e:l,v=i.autoCreate,p=void 0!==v&&v,m=i.options,g=void 0===m?{}:m,w=i.challengeOptions,b=void 0===w?{}:w
y(this,t),this.onLoaded=a,this.onRun=d,this.onRunStart=c,this.onChange=f,this.editors=[],this.options=g,this.challengeOptions=b,p&&h(function(){var e=n(p)?p:W
Array.from(document.querySelectorAll(e)).forEach(function(e){o.createEditor({node:e})})})}return g(t,null,[{key:"init",value:function(e){return new t(e)}}]),g(t,[{key:"findEditor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.node,n=e.challengeId
return v(this),t&&this.editors.find(function(e){return e.node===t})||n&&this.editors.find(function(e){return e.challengeId===n})||!1}},{key:"createEditor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.node,n=e.challengeId,o=void 0===n?null:n,i=e.options,r=void 0===i?{}:i
v(this)
var a=this.updateEditor({node:t,challengeId:o,options:r})
return a||new X({manager:this,node:t,challengeId:o,options:r})}},{key:"updateEditor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.node,n=e.challengeId,o=void 0===n?null:n,i=e.options,r=void 0===i?{}:i
v(this)
var a=this.findEditor({node:t,challengeId:o})
return a&&a.update({challengeId:o,options:r}),a||!1}},{key:"destroy",value:function(){this.$$destroyed||(this.$$destroyed=!0,this.editors.forEach(function(e){e.destroy()}),this.editors=null)}}]),t}(),te=function(e){function t(e){var n=e.node,o=e.options
y(this,t)
var i=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{node:n}))
if(!o||!o.invitePath||!o.authToken)throw new Error("Unable to load an assessment without invitePath and authToken")
return i._type="assessment",i.options=Object.assign({},o),i._updateIframe(),i.assessmentData={},i._initPenpal(["ready","error","loaded","updated","solutionUpdated","submitted"]),i}return b(t,e),g(t,[{key:"next",value:function(){return this._post("next")}},{key:"previous",value:function(){return this._post("previous")}},{key:"welcome",value:function(){return this.switchChallenge("welcome")}},{key:"review",value:function(){return this.switchChallenge("review")}},{key:"submit",value:function(){return this._post("submit")}},{key:"switchChallenge",value:function(e){return this._post("switchChallenge",e)}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,n=void 0===t?null:t,o=e.reload,i=void 0!==o&&o
if(!this.$$destroyed){var r=!1
n&&(r=n.invitePath&&n.invitePath!==this.options.invitePath,Object.assign(this.options,n)),i||r?this._updateIframe():this._sendOptions()}}},{key:"reload",value:function(){this._updateIframe()}},{key:"onReady",value:function(){this._sendOptions()}},{key:"onLoaded",value:function(e){var t=e.data
this.assessmentData=t}},{key:"_sendOptions",value:function(){this._post("setOptions",this.options)}},{key:"_updateIframe",value:function(){if(!this.$$destroyed){var e=this.options.baseURL||B
this.iframe.src=s(e,this.options.invitePath)}}}]),t}(J)
window.QualifiedEmbed=ee,window.QualifiedEmbeddedChallenge=X,window.QualifiedEmbeddedAssessment=te}()
