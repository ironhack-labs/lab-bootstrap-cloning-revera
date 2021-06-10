!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,e.CodeMirror=t())}(this,function(){"use strict"
function e(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function t(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function n(e,n){return t(e).appendChild(n)}function r(e,t,n,r){var i=document.createElement(e)
if(n&&(i.className=n),r&&(i.style.cssText=r),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function i(e,t,n,i){var o=r(e,t,n,i)
return o.setAttribute("role","presentation"),o}function o(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do if(11==t.nodeType&&(t=t.host),t==e)return!0
while(t=t.parentNode)}function a(){var e
try{e=document.activeElement}catch(t){e=document.body||null}for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement
return e}function s(t,n){var r=t.className
e(n).test(r)||(t.className+=(r?" ":"")+n)}function l(t,n){for(var r=t.split(" "),i=0;i<r.length;i++)r[i]&&!e(r[i]).test(n)&&(n+=" "+r[i])
return n}function c(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function u(e,t,n){t||(t={})
for(var r in e)!e.hasOwnProperty(r)||n===!1&&t.hasOwnProperty(r)||(t[r]=e[r])
return t}function d(e,t,n,r,i){null==t&&(t=e.search(/[^\s\u00a0]/),t==-1&&(t=e.length))
for(var o=r||0,a=i||0;;){var s=e.indexOf("\t",o)
if(s<0||s>=t)return a+(t-o)
a+=s-o,a+=n-a%n,o=s+1}}function f(e,t){for(var n=0;n<e.length;++n)if(e[n]==t)return n
return-1}function p(e,t,n){for(var r=0,i=0;;){var o=e.indexOf("\t",r)
o==-1&&(o=e.length)
var a=o-r
if(o==e.length||i+a>=t)return r+Math.min(a,t-i)
if(i+=o-r,i+=n-i%n,r=o+1,i>=t)return r}}function h(e){for(;Qa.length<=e;)Qa.push(m(Qa)+" ")
return Qa[e]}function m(e){return e[e.length-1]}function g(e,t){for(var n=[],r=0;r<e.length;r++)n[r]=t(e[r],r)
return n}function v(e,t,n){for(var r=0,i=n(t);r<e.length&&n(e[r])<=i;)r++
e.splice(r,0,t)}function y(){}function b(e,t){var n
return Object.create?n=Object.create(e):(y.prototype=e,n=new y),t&&u(t,n),n}function k(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||Ya.test(e))}function x(e,t){return t?!!(t.source.indexOf("\\w")>-1&&k(e))||t.test(e):k(e)}function w(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}function _(e){return e.charCodeAt(0)>=768&&Ja.test(e)}function C(e,t,n){for(;(n<0?t>0:t<e.length)&&_(e.charAt(t));)t+=n
return t}function S(e,t,n){for(var r=t>n?-1:1;;){if(t==n)return t
var i=(t+n)/2,o=r<0?Math.ceil(i):Math.floor(i)
if(o==t)return e(o)?t:n
e(o)?n=o:t=o+r}}function M(e,t,n,r){if(!e)return r(t,n,"ltr",0)
for(var i=!1,o=0;o<e.length;++o){var a=e[o];(a.from<n&&a.to>t||t==n&&a.to==t)&&(r(Math.max(a.from,t),Math.min(a.to,n),1==a.level?"rtl":"ltr",o),i=!0)}i||r(t,n,"ltr")}function L(e,t,n){var r
es=null
for(var i=0;i<e.length;++i){var o=e[i]
if(o.from<t&&o.to>t)return i
o.to==t&&(o.from!=o.to&&"before"==n?r=i:es=i),o.from==t&&(o.from!=o.to&&"before"!=n?r=i:es=i)}return null!=r?r:es}function T(e,t){var n=e.order
return null==n&&(n=e.order=ts(e.text,t)),n}function A(e,t){return e._handlers&&e._handlers[t]||ns}function E(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n,!1)
else if(e.detachEvent)e.detachEvent("on"+t,n)
else{var r=e._handlers,i=r&&r[t]
if(i){var o=f(i,n)
o>-1&&(r[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function O(e,t){var n=A(e,t)
if(n.length)for(var r=Array.prototype.slice.call(arguments,2),i=0;i<n.length;++i)n[i].apply(null,r)}function z(e,t,n){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),O(e,n||t.type,e,t),P(t)||t.codemirrorIgnore}function N(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var n=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),r=0;r<t.length;++r)f(n,t[r])==-1&&n.push(t[r])}function q(e,t){return A(e,t).length>0}function F(e){e.prototype.on=function(e,t){rs(this,e,t)},e.prototype.off=function(e,t){E(this,e,t)}}function I(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function D(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function P(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function R(e){I(e),D(e)}function j(e){return e.target||e.srcElement}function B(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),qa&&e.ctrlKey&&1==t&&(t=3),t}function W(e){if(null==$a){var t=r("span","​")
n(e,r("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&($a=t.offsetWidth<=1&&t.offsetHeight>2&&!(wa&&_a<8))}var i=$a?r("span","​"):r("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
return i.setAttribute("cm-text",""),i}function H(e){if(null!=Ua)return Ua
var r=n(e,document.createTextNode("AخA")),i=Pa(r,0,1).getBoundingClientRect(),o=Pa(r,1,2).getBoundingClientRect()
return t(e),!(!i||i.left==i.right)&&(Ua=o.right-i.right<3)}function $(e){if(null!=ls)return ls
var t=n(e,r("span","x")),i=t.getBoundingClientRect(),o=Pa(t,0,1).getBoundingClientRect()
return ls=Math.abs(i.left-o.left)>1}function U(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),cs[e]=t}function K(e,t){us[e]=t}function V(e){if("string"==typeof e&&us.hasOwnProperty(e))e=us[e]
else if(e&&"string"==typeof e.name&&us.hasOwnProperty(e.name)){var t=us[e.name]
"string"==typeof t&&(t={name:t}),e=b(t,e),e.name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return V("application/xml")
if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return V("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function G(e,t){t=V(t)
var n=cs[t.name]
if(!n)return G(e,"text/plain")
var r=n(e,t)
if(ds.hasOwnProperty(t.name)){var i=ds[t.name]
for(var o in i)i.hasOwnProperty(o)&&(r.hasOwnProperty(o)&&(r["_"+o]=r[o]),r[o]=i[o])}if(r.name=t.name,t.helperType&&(r.helperType=t.helperType),t.modeProps)for(var a in t.modeProps)r[a]=t.modeProps[a]
return r}function Z(e,t){var n=ds.hasOwnProperty(e)?ds[e]:ds[e]={}
u(t,n)}function X(e,t){if(t===!0)return t
if(e.copyState)return e.copyState(t)
var n={}
for(var r in t){var i=t[r]
i instanceof Array&&(i=i.concat([])),n[r]=i}return n}function Q(e,t){for(var n;e.innerMode&&(n=e.innerMode(t),n&&n.mode!=e);)t=n.state,e=n.mode
return n||{mode:e,state:t}}function Y(e,t,n){return!e.startState||e.startState(t,n)}function J(e,t){if(t-=e.first,t<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var n=e;!n.lines;)for(var r=0;;++r){var i=n.children[r],o=i.chunkSize()
if(t<o){n=i
break}t-=o}return n.lines[t]}function ee(e,t,n){var r=[],i=t.line
return e.iter(t.line,n.line+1,function(e){var o=e.text
i==n.line&&(o=o.slice(0,n.ch)),i==t.line&&(o=o.slice(t.ch)),r.push(o),++i}),r}function te(e,t,n){var r=[]
return e.iter(t,n,function(e){r.push(e.text)}),r}function ne(e,t){var n=t-e.height
if(n)for(var r=e;r;r=r.parent)r.height+=n}function re(e){if(null==e.parent)return null
for(var t=e.parent,n=f(t.lines,e),r=t.parent;r;t=r,r=r.parent)for(var i=0;r.children[i]!=t;++i)n+=r.children[i].chunkSize()
return n+t.first}function ie(e,t){var n=e.first
e:do{for(var r=0;r<e.children.length;++r){var i=e.children[r],o=i.height
if(t<o){e=i
continue e}t-=o,n+=i.chunkSize()}return n}while(!e.lines)
for(var a=0;a<e.lines.length;++a){var s=e.lines[a],l=s.height
if(t<l)break
t-=l}return n+a}function oe(e,t){return t>=e.first&&t<e.first+e.size}function ae(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function se(e,t,n){return void 0===n&&(n=null),this instanceof se?(this.line=e,this.ch=t,void(this.sticky=n)):new se(e,t,n)}function le(e,t){return e.line-t.line||e.ch-t.ch}function ce(e,t){return e.sticky==t.sticky&&0==le(e,t)}function ue(e){return se(e.line,e.ch)}function de(e,t){return le(e,t)<0?t:e}function fe(e,t){return le(e,t)<0?e:t}function pe(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function he(e,t){if(t.line<e.first)return se(e.first,0)
var n=e.first+e.size-1
return t.line>n?se(n,J(e,n).text.length):me(t,J(e,t.line).text.length)}function me(e,t){var n=e.ch
return null==n||n>t?se(e.line,t):n<0?se(e.line,0):e}function ge(e,t){for(var n=[],r=0;r<t.length;r++)n[r]=he(e,t[r])
return n}function ve(e,t,n,r){var i=[e.state.modeGen],o={}
Se(e,t.text,e.doc.mode,n,function(e,t){return i.push(e,t)},o,r)
for(var a=n.state,s=function(r){n.baseTokens=i
var s=e.state.overlays[r],l=1,c=0
n.state=!0,Se(e,t.text,s.mode,n,function(e,t){for(var n=l;c<e;){var r=i[l]
r>e&&i.splice(l,1,e,i[l+1],r),l+=2,c=Math.min(e,r)}if(t)if(s.opaque)i.splice(n,l-n,e,"overlay "+t),l=n+2
else for(;n<l;n+=2){var o=i[n+1]
i[n+1]=(o?o+" ":"")+"overlay "+t}},o),n.state=a,n.baseTokens=null,n.baseTokenPos=1},l=0;l<e.state.overlays.length;++l)s(l)
return{styles:i,classes:o.bgClass||o.textClass?o:null}}function ye(e,t,n){if(!t.styles||t.styles[0]!=e.state.modeGen){var r=be(e,re(t)),i=t.text.length>e.options.maxHighlightLength&&X(e.doc.mode,r.state),o=ve(e,t,r)
i&&(r.state=i),t.stateAfter=r.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),n===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function be(e,t,n){var r=e.doc,i=e.display
if(!r.mode.startState)return new hs(r,(!0),t)
var o=Me(e,t,n),a=o>r.first&&J(r,o-1).stateAfter,s=a?hs.fromSaved(r,a,o):new hs(r,Y(r.mode),o)
return r.iter(o,t,function(n){ke(e,n.text,s)
var r=s.line
n.stateAfter=r==t-1||r%5==0||r>=i.viewFrom&&r<i.viewTo?s.save():null,s.nextLine()}),n&&(r.modeFrontier=s.line),s}function ke(e,t,n,r){var i=e.doc.mode,o=new fs(t,e.options.tabSize,n)
for(o.start=o.pos=r||0,""==t&&xe(i,n.state);!o.eol();)we(i,o,n.state),o.start=o.pos}function xe(e,t){if(e.blankLine)return e.blankLine(t)
if(e.innerMode){var n=Q(e,t)
return n.mode.blankLine?n.mode.blankLine(n.state):void 0}}function we(e,t,n,r){for(var i=0;i<10;i++){r&&(r[0]=Q(e,n).mode)
var o=e.token(t,n)
if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}function _e(e,t,n,r){var i,o=e.doc,a=o.mode
t=he(o,t)
var s,l=J(o,t.line),c=be(e,t.line,n),u=new fs(l.text,e.options.tabSize,c)
for(r&&(s=[]);(r||u.pos<t.ch)&&!u.eol();)u.start=u.pos,i=we(a,u,c.state),r&&s.push(new ms(u,i,X(o.mode,c.state)))
return r?s:new ms(u,i,c.state)}function Ce(e,t){if(e)for(;;){var n=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!n)break
e=e.slice(0,n.index)+e.slice(n.index+n[0].length)
var r=n[1]?"bgClass":"textClass"
null==t[r]?t[r]=n[2]:new RegExp("(?:^|\\s)"+n[2]+"(?:$|\\s)").test(t[r])||(t[r]+=" "+n[2])}return e}function Se(e,t,n,r,i,o,a){var s=n.flattenSpans
null==s&&(s=e.options.flattenSpans)
var l,c=0,u=null,d=new fs(t,e.options.tabSize,r),f=e.options.addModeClass&&[null]
for(""==t&&Ce(xe(n,r.state),o);!d.eol();){if(d.pos>e.options.maxHighlightLength?(s=!1,a&&ke(e,t,r,d.pos),d.pos=t.length,l=null):l=Ce(we(n,d,r.state,f),o),f){var p=f[0].name
p&&(l="m-"+(l?p+" "+l:p))}if(!s||u!=l){for(;c<d.start;)c=Math.min(d.start,c+5e3),i(c,u)
u=l}d.start=d.pos}for(;c<d.pos;){var h=Math.min(d.pos,c+5e3)
i(h,u),c=h}}function Me(e,t,n){for(var r,i,o=e.doc,a=n?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>a;--s){if(s<=o.first)return o.first
var l=J(o,s-1),c=l.stateAfter
if(c&&(!n||s+(c instanceof ps?c.lookAhead:0)<=o.modeFrontier))return s
var u=d(l.text,null,e.options.tabSize);(null==i||r>u)&&(i=s-1,r=u)}return i}function Le(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var n=e.first,r=t-1;r>n;r--){var i=J(e,r).stateAfter
if(i&&(!(i instanceof ps)||r+i.lookAhead<t)){n=r+1
break}}e.highlightFrontier=Math.min(e.highlightFrontier,n)}}function Te(){gs=!0}function Ae(){vs=!0}function Ee(e,t,n){this.marker=e,this.from=t,this.to=n}function Oe(e,t){if(e)for(var n=0;n<e.length;++n){var r=e[n]
if(r.marker==t)return r}}function ze(e,t){for(var n,r=0;r<e.length;++r)e[r]!=t&&(n||(n=[])).push(e[r])
return n}function Ne(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}function qe(e,t,n){var r
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker,s=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t)
if(s||o.from==t&&"bookmark"==a.type&&(!n||!o.marker.insertLeft)){var l=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);(r||(r=[])).push(new Ee(a,o.from,l?null:o.to))}}return r}function Fe(e,t,n){var r
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker,s=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t)
if(s||o.from==t&&"bookmark"==a.type&&(!n||o.marker.insertLeft)){var l=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);(r||(r=[])).push(new Ee(a,l?null:o.from-t,null==o.to?null:o.to-t))}}return r}function Ie(e,t){if(t.full)return null
var n=oe(e,t.from.line)&&J(e,t.from.line).markedSpans,r=oe(e,t.to.line)&&J(e,t.to.line).markedSpans
if(!n&&!r)return null
var i=t.from.ch,o=t.to.ch,a=0==le(t.from,t.to),s=qe(n,i,a),l=Fe(r,o,a),c=1==t.text.length,u=m(t.text).length+(c?i:0)
if(s)for(var d=0;d<s.length;++d){var f=s[d]
if(null==f.to){var p=Oe(l,f.marker)
p?c&&(f.to=null==p.to?null:p.to+u):f.to=i}}if(l)for(var h=0;h<l.length;++h){var g=l[h]
if(null!=g.to&&(g.to+=u),null==g.from){var v=Oe(s,g.marker)
v||(g.from=u,c&&(s||(s=[])).push(g))}else g.from+=u,c&&(s||(s=[])).push(g)}s&&(s=De(s)),l&&l!=s&&(l=De(l))
var y=[s]
if(!c){var b,k=t.text.length-2
if(k>0&&s)for(var x=0;x<s.length;++x)null==s[x].to&&(b||(b=[])).push(new Ee(s[x].marker,null,null))
for(var w=0;w<k;++w)y.push(b)
y.push(l)}return y}function De(e){for(var t=0;t<e.length;++t){var n=e[t]
null!=n.from&&n.from==n.to&&n.marker.clearWhenEmpty!==!1&&e.splice(t--,1)}return e.length?e:null}function Pe(e,t,n){var r=null
if(e.iter(t.line,n.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var n=e.markedSpans[t].marker
!n.readOnly||r&&f(r,n)!=-1||(r||(r=[])).push(n)}}),!r)return null
for(var i=[{from:t,to:n}],o=0;o<r.length;++o)for(var a=r[o],s=a.find(0),l=0;l<i.length;++l){var c=i[l]
if(!(le(c.to,s.from)<0||le(c.from,s.to)>0)){var u=[l,1],d=le(c.from,s.from),p=le(c.to,s.to);(d<0||!a.inclusiveLeft&&!d)&&u.push({from:c.from,to:s.from}),(p>0||!a.inclusiveRight&&!p)&&u.push({from:s.to,to:c.to}),i.splice.apply(i,u),l+=u.length-3}}return i}function Re(e){var t=e.markedSpans
if(t){for(var n=0;n<t.length;++n)t[n].marker.detachLine(e)
e.markedSpans=null}}function je(e,t){if(t){for(var n=0;n<t.length;++n)t[n].marker.attachLine(e)
e.markedSpans=t}}function Be(e){return e.inclusiveLeft?-1:0}function We(e){return e.inclusiveRight?1:0}function He(e,t){var n=e.lines.length-t.lines.length
if(0!=n)return n
var r=e.find(),i=t.find(),o=le(r.from,i.from)||Be(e)-Be(t)
if(o)return-o
var a=le(r.to,i.to)||We(e)-We(t)
return a?a:t.id-e.id}function $e(e,t){var n,r=vs&&e.markedSpans
if(r)for(var i=void 0,o=0;o<r.length;++o)i=r[o],i.marker.collapsed&&null==(t?i.from:i.to)&&(!n||He(n,i.marker)<0)&&(n=i.marker)
return n}function Ue(e){return $e(e,!0)}function Ke(e){return $e(e,!1)}function Ve(e,t){var n,r=vs&&e.markedSpans
if(r)for(var i=0;i<r.length;++i){var o=r[i]
o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!n||He(n,o.marker)<0)&&(n=o.marker)}return n}function Ge(e,t,n,r,i){var o=J(e,t),a=vs&&o.markedSpans
if(a)for(var s=0;s<a.length;++s){var l=a[s]
if(l.marker.collapsed){var c=l.marker.find(0),u=le(c.from,n)||Be(l.marker)-Be(i),d=le(c.to,r)||We(l.marker)-We(i)
if(!(u>=0&&d<=0||u<=0&&d>=0)&&(u<=0&&(l.marker.inclusiveRight&&i.inclusiveLeft?le(c.to,n)>=0:le(c.to,n)>0)||u>=0&&(l.marker.inclusiveRight&&i.inclusiveLeft?le(c.from,r)<=0:le(c.from,r)<0)))return!0}}}function Ze(e){for(var t;t=Ue(e);)e=t.find(-1,!0).line
return e}function Xe(e){for(var t;t=Ke(e);)e=t.find(1,!0).line
return e}function Qe(e){for(var t,n;t=Ke(e);)e=t.find(1,!0).line,(n||(n=[])).push(e)
return n}function Ye(e,t){var n=J(e,t),r=Ze(n)
return n==r?t:re(r)}function Je(e,t){if(t>e.lastLine())return t
var n,r=J(e,t)
if(!et(e,r))return t
for(;n=Ke(r);)r=n.find(1,!0).line
return re(r)+1}function et(e,t){var n=vs&&t.markedSpans
if(n)for(var r=void 0,i=0;i<n.length;++i)if(r=n[i],r.marker.collapsed){if(null==r.from)return!0
if(!r.marker.widgetNode&&0==r.from&&r.marker.inclusiveLeft&&tt(e,t,r))return!0}}function tt(e,t,n){if(null==n.to){var r=n.marker.find(1,!0)
return tt(e,r.line,Oe(r.line.markedSpans,n.marker))}if(n.marker.inclusiveRight&&n.to==t.text.length)return!0
for(var i=void 0,o=0;o<t.markedSpans.length;++o)if(i=t.markedSpans[o],i.marker.collapsed&&!i.marker.widgetNode&&i.from==n.to&&(null==i.to||i.to!=n.from)&&(i.marker.inclusiveLeft||n.marker.inclusiveRight)&&tt(e,t,i))return!0}function nt(e){e=Ze(e)
for(var t=0,n=e.parent,r=0;r<n.lines.length;++r){var i=n.lines[r]
if(i==e)break
t+=i.height}for(var o=n.parent;o;n=o,o=n.parent)for(var a=0;a<o.children.length;++a){var s=o.children[a]
if(s==n)break
t+=s.height}return t}function rt(e){if(0==e.height)return 0
for(var t,n=e.text.length,r=e;t=Ue(r);){var i=t.find(0,!0)
r=i.from.line,n+=i.from.ch-i.to.ch}for(r=e;t=Ke(r);){var o=t.find(0,!0)
n-=r.text.length-o.from.ch,r=o.to.line,n+=r.text.length-o.to.ch}return n}function it(e){var t=e.display,n=e.doc
t.maxLine=J(n,n.first),t.maxLineLength=rt(t.maxLine),t.maxLineChanged=!0,n.iter(function(e){var n=rt(e)
n>t.maxLineLength&&(t.maxLineLength=n,t.maxLine=e)})}function ot(e,t,n,r){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),Re(e),je(e,n)
var i=r?r(e):1
i!=e.height&&ne(e,i)}function at(e){e.parent=null,Re(e)}function st(e,t){if(!e||/^\s*$/.test(e))return null
var n=t.addModeClass?xs:ks
return n[e]||(n[e]=e.replace(/\S+/g,"cm-$&"))}function lt(e,t){var n=i("span",null,null,Ca?"padding-right: .1px":null),r={pre:i("pre",[n],"CodeMirror-line"),content:n,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")}
t.measure={}
for(var o=0;o<=(t.rest?t.rest.length:0);o++){var a=o?t.rest[o-1]:t.line,s=void 0
r.pos=0,r.addToken=ut,H(e.display.measure)&&(s=T(a,e.doc.direction))&&(r.addToken=ft(r.addToken,s)),r.map=[]
var c=t!=e.display.externalMeasured&&re(a)
ht(a,r,ye(e,a,c)),a.styleClasses&&(a.styleClasses.bgClass&&(r.bgClass=l(a.styleClasses.bgClass,r.bgClass||"")),a.styleClasses.textClass&&(r.textClass=l(a.styleClasses.textClass,r.textClass||""))),0==r.map.length&&r.map.push(0,0,r.content.appendChild(W(e.display.measure))),0==o?(t.measure.map=r.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(r.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(Ca){var u=r.content.lastChild;(/\bcm-tab\b/.test(u.className)||u.querySelector&&u.querySelector(".cm-tab"))&&(r.content.className="cm-tab-wrap-hack")}return O(e,"renderLine",e,t.line,r.pre),r.pre.className&&(r.textClass=l(r.pre.className,r.textClass||"")),r}function ct(e){var t=r("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function ut(e,t,n,i,o,a,s){if(t){var l,c=e.splitSpaces?dt(t,e.trailingSpace):t,u=e.cm.state.specialChars,d=!1
if(u.test(t)){l=document.createDocumentFragment()
for(var f=0;;){u.lastIndex=f
var p=u.exec(t),m=p?p.index-f:t.length-f
if(m){var g=document.createTextNode(c.slice(f,f+m))
wa&&_a<9?l.appendChild(r("span",[g])):l.appendChild(g),e.map.push(e.pos,e.pos+m,g),e.col+=m,e.pos+=m}if(!p)break
f+=m+1
var v=void 0
if("\t"==p[0]){var y=e.cm.options.tabSize,b=y-e.col%y
v=l.appendChild(r("span",h(b),"cm-tab")),v.setAttribute("role","presentation"),v.setAttribute("cm-text","\t"),e.col+=b}else"\r"==p[0]||"\n"==p[0]?(v=l.appendChild(r("span","\r"==p[0]?"␍":"␤","cm-invalidchar")),v.setAttribute("cm-text",p[0]),e.col+=1):(v=e.cm.options.specialCharPlaceholder(p[0]),v.setAttribute("cm-text",p[0]),wa&&_a<9?l.appendChild(r("span",[v])):l.appendChild(v),e.col+=1)
e.map.push(e.pos,e.pos+1,v),e.pos++}}else e.col+=t.length,l=document.createTextNode(c),e.map.push(e.pos,e.pos+t.length,l),wa&&_a<9&&(d=!0),e.pos+=t.length
if(e.trailingSpace=32==c.charCodeAt(t.length-1),n||i||o||d||a){var k=n||""
i&&(k+=i),o&&(k+=o)
var x=r("span",[l],k,a)
if(s)for(var w in s)s.hasOwnProperty(w)&&"style"!=w&&"class"!=w&&x.setAttribute(w,s[w])
return e.content.appendChild(x)}e.content.appendChild(l)}}function dt(e,t){if(e.length>1&&!/  /.test(e))return e
for(var n=t,r="",i=0;i<e.length;i++){var o=e.charAt(i)
" "!=o||!n||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),r+=o,n=" "==o}return r}function ft(e,t){return function(n,r,i,o,a,s,l){i=i?i+" cm-force-border":"cm-force-border"
for(var c=n.pos,u=c+r.length;;){for(var d=void 0,f=0;f<t.length&&(d=t[f],!(d.to>c&&d.from<=c));f++);if(d.to>=u)return e(n,r,i,o,a,s,l)
e(n,r.slice(0,d.to-c),i,o,null,s,l),o=null,r=r.slice(d.to-c),c=d.to}}}function pt(e,t,n,r){var i=!r&&n.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!r&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",n.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function ht(e,t,n){var r=e.markedSpans,i=e.text,o=0
if(r)for(var a,s,l,c,u,d,f,p=i.length,h=0,m=1,g="",v=0;;){if(v==h){l=c=u=s="",f=null,d=null,v=1/0
for(var y=[],b=void 0,k=0;k<r.length;++k){var x=r[k],w=x.marker
if("bookmark"==w.type&&x.from==h&&w.widgetNode)y.push(w)
else if(x.from<=h&&(null==x.to||x.to>h||w.collapsed&&x.to==h&&x.from==h)){if(null!=x.to&&x.to!=h&&v>x.to&&(v=x.to,c=""),w.className&&(l+=" "+w.className),w.css&&(s=(s?s+";":"")+w.css),w.startStyle&&x.from==h&&(u+=" "+w.startStyle),w.endStyle&&x.to==v&&(b||(b=[])).push(w.endStyle,x.to),w.title&&((f||(f={})).title=w.title),w.attributes)for(var _ in w.attributes)(f||(f={}))[_]=w.attributes[_]
w.collapsed&&(!d||He(d.marker,w)<0)&&(d=x)}else x.from>h&&v>x.from&&(v=x.from)}if(b)for(var C=0;C<b.length;C+=2)b[C+1]==v&&(c+=" "+b[C])
if(!d||d.from==h)for(var S=0;S<y.length;++S)pt(t,0,y[S])
if(d&&(d.from||0)==h){if(pt(t,(null==d.to?p+1:d.to)-h,d.marker,null==d.from),null==d.to)return
d.to==h&&(d=!1)}}if(h>=p)break
for(var M=Math.min(p,v);;){if(g){var L=h+g.length
if(!d){var T=L>M?g.slice(0,M-h):g
t.addToken(t,T,a?a+l:l,u,h+T.length==v?c:"",s,f)}if(L>=M){g=g.slice(M-h),h=M
break}h=L,u=""}g=i.slice(o,o=n[m++]),a=st(n[m++],t.cm.options)}}else for(var A=1;A<n.length;A+=2)t.addToken(t,i.slice(o,o=n[A]),st(n[A+1],t.cm.options))}function mt(e,t,n){this.line=t,this.rest=Qe(t),this.size=this.rest?re(m(this.rest))-n+1:1,this.node=this.text=null,this.hidden=et(e,t)}function gt(e,t,n){for(var r,i=[],o=t;o<n;o=r){var a=new mt(e.doc,J(e.doc,o),o)
r=o+a.size,i.push(a)}return i}function vt(e){ws?ws.ops.push(e):e.ownsGroup=ws={ops:[e],delayedCallbacks:[]}}function yt(e){var t=e.delayedCallbacks,n=0
do{for(;n<t.length;n++)t[n].call(null)
for(var r=0;r<e.ops.length;r++){var i=e.ops[r]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(n<t.length)}function bt(e,t){var n=e.ownsGroup
if(n)try{yt(n)}finally{ws=null,t(n)}}function kt(e,t){var n=A(e,t)
if(n.length){var r,i=Array.prototype.slice.call(arguments,2)
ws?r=ws.delayedCallbacks:_s?r=_s:(r=_s=[],setTimeout(xt,0))
for(var o=function(e){r.push(function(){return n[e].apply(null,i)})},a=0;a<n.length;++a)o(a)}}function xt(){var e=_s
_s=null
for(var t=0;t<e.length;++t)e[t]()}function wt(e,t,n,r){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?Mt(e,t):"gutter"==o?Tt(e,t,n,r):"class"==o?Lt(e,t):"widget"==o&&At(e,t,r)}t.changes=null}function _t(e){return e.node==e.text&&(e.node=r("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),wa&&_a<8&&(e.node.style.zIndex=2)),e.node}function Ct(e,t){var n=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass
if(n&&(n+=" CodeMirror-linebackground"),t.background)n?t.background.className=n:(t.background.parentNode.removeChild(t.background),t.background=null)
else if(n){var i=_t(t)
t.background=i.insertBefore(r("div",null,n),i.firstChild),e.display.input.setUneditable(t.background)}}function St(e,t){var n=e.display.externalMeasured
return n&&n.line==t.line?(e.display.externalMeasured=null,t.measure=n.measure,n.built):lt(e,t)}function Mt(e,t){var n=t.text.className,r=St(e,t)
t.text==t.node&&(t.node=r.pre),t.text.parentNode.replaceChild(r.pre,t.text),t.text=r.pre,r.bgClass!=t.bgClass||r.textClass!=t.textClass?(t.bgClass=r.bgClass,t.textClass=r.textClass,Lt(e,t)):n&&(t.text.className=n)}function Lt(e,t){Ct(e,t),t.line.wrapClass?_t(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="")
var n=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass
t.text.className=n||""}function Tt(e,t,n,i){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var o=_t(t)
t.gutterBackground=r("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),o.insertBefore(t.gutterBackground,t.text)}var a=t.line.gutterMarkers
if(e.options.lineNumbers||a){var s=_t(t),l=t.gutter=r("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px")
if(e.display.input.setUneditable(l),s.insertBefore(l,t.text),t.line.gutterClass&&(l.className+=" "+t.line.gutterClass),!e.options.lineNumbers||a&&a["CodeMirror-linenumbers"]||(t.lineNumber=l.appendChild(r("div",ae(e.options,n),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),a)for(var c=0;c<e.display.gutterSpecs.length;++c){var u=e.display.gutterSpecs[c].className,d=a.hasOwnProperty(u)&&a[u]
d&&l.appendChild(r("div",[d],"CodeMirror-gutter-elt","left: "+i.gutterLeft[u]+"px; width: "+i.gutterWidth[u]+"px"))}}}function At(t,n,r){n.alignable&&(n.alignable=null)
for(var i=e("CodeMirror-linewidget"),o=n.node.firstChild,a=void 0;o;o=a)a=o.nextSibling,i.test(o.className)&&n.node.removeChild(o)
Ot(t,n,r)}function Et(e,t,n,r){var i=St(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),Lt(e,t),Tt(e,t,n,r),Ot(e,t,r),t.node}function Ot(e,t,n){if(zt(e,t.line,t,n,!0),t.rest)for(var r=0;r<t.rest.length;r++)zt(e,t.rest[r],t,n,!1)}function zt(e,t,n,i,o){if(t.widgets)for(var a=_t(n),s=0,l=t.widgets;s<l.length;++s){var c=l[s],u=r("div",[c.node],"CodeMirror-linewidget"+(c.className?" "+c.className:""))
c.handleMouseEvents||u.setAttribute("cm-ignore-events","true"),Nt(c,u,n,i),e.display.input.setUneditable(u),o&&c.above?a.insertBefore(u,n.gutter||n.text):a.appendChild(u),kt(c,"redraw")}}function Nt(e,t,n,r){if(e.noHScroll){(n.alignable||(n.alignable=[])).push(t)
var i=r.wrapperWidth
t.style.left=r.fixedPos+"px",e.coverGutter||(i-=r.gutterTotalWidth,t.style.paddingLeft=r.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-r.gutterTotalWidth+"px"))}function qt(e){if(null!=e.height)return e.height
var t=e.doc.cm
if(!t)return 0
if(!o(document.body,e.node)){var i="position: relative;"
e.coverGutter&&(i+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(i+="width: "+t.display.wrapper.clientWidth+"px;"),n(t.display.measure,r("div",[e.node],null,i))}return e.height=e.node.parentNode.offsetHeight}function Ft(e,t){for(var n=j(t);n!=e.wrapper;n=n.parentNode)if(!n||1==n.nodeType&&"true"==n.getAttribute("cm-ignore-events")||n.parentNode==e.sizer&&n!=e.mover)return!0}function It(e){return e.lineSpace.offsetTop}function Dt(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Pt(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=n(e.measure,r("pre","x","CodeMirror-line-like")),i=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,o={left:parseInt(i.paddingLeft),right:parseInt(i.paddingRight)}
return isNaN(o.left)||isNaN(o.right)||(e.cachedPaddingH=o),o}function Rt(e){return Ka-e.display.nativeBarWidth}function jt(e){return e.display.scroller.clientWidth-Rt(e)-e.display.barWidth}function Bt(e){return e.display.scroller.clientHeight-Rt(e)-e.display.barHeight}function Wt(e,t,n){var r=e.options.lineWrapping,i=r&&jt(e)
if(!t.measure.heights||r&&t.measure.width!=i){var o=t.measure.heights=[]
if(r){t.measure.width=i
for(var a=t.text.firstChild.getClientRects(),s=0;s<a.length-1;s++){var l=a[s],c=a[s+1]
Math.abs(l.bottom-c.bottom)>2&&o.push((l.bottom+c.top)/2-n.top)}}o.push(n.bottom-n.top)}}function Ht(e,t,n){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var r=0;r<e.rest.length;r++)if(e.rest[r]==t)return{map:e.measure.maps[r],cache:e.measure.caches[r]}
for(var i=0;i<e.rest.length;i++)if(re(e.rest[i])>n)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function $t(e,t){t=Ze(t)
var r=re(t),i=e.display.externalMeasured=new mt(e.doc,t,r)
i.lineN=r
var o=i.built=lt(e,i)
return i.text=o.pre,n(e.display.lineMeasure,o.pre),i}function Ut(e,t,n,r){return Gt(e,Vt(e,t),n,r)}function Kt(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Mn(e,t)]
var n=e.display.externalMeasured
return n&&t>=n.lineN&&t<n.lineN+n.size?n:void 0}function Vt(e,t){var n=re(t),r=Kt(e,n)
r&&!r.text?r=null:r&&r.changes&&(wt(e,r,n,xn(e)),e.curOp.forceUpdate=!0),r||(r=$t(e,t))
var i=Ht(r,t,n)
return{line:t,view:r,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Gt(e,t,n,r,i){t.before&&(n=-1)
var o,a=n+(r||"")
return t.cache.hasOwnProperty(a)?o=t.cache[a]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(Wt(e,t.view,t.rect),t.hasHeights=!0),o=Qt(e,t,n,r),o.bogus||(t.cache[a]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}function Zt(e,t,n){for(var r,i,o,a,s,l,c=0;c<e.length;c+=3)if(s=e[c],l=e[c+1],t<s?(i=0,o=1,a="left"):t<l?(i=t-s,o=i+1):(c==e.length-3||t==l&&e[c+3]>t)&&(o=l-s,i=o-1,t>=l&&(a="right")),null!=i){if(r=e[c+2],s==l&&n==(r.insertLeft?"left":"right")&&(a=n),"left"==n&&0==i)for(;c&&e[c-2]==e[c-3]&&e[c-1].insertLeft;)r=e[(c-=3)+2],a="left"
if("right"==n&&i==l-s)for(;c<e.length-3&&e[c+3]==e[c+4]&&!e[c+5].insertLeft;)r=e[(c+=3)+2],a="right"
break}return{node:r,start:i,end:o,collapse:a,coverStart:s,coverEnd:l}}function Xt(e,t){var n=Cs
if("left"==t)for(var r=0;r<e.length&&(n=e[r]).left==n.right;r++);else for(var i=e.length-1;i>=0&&(n=e[i]).left==n.right;i--);return n}function Qt(e,t,n,r){var i,o=Zt(t.map,n,r),a=o.node,s=o.start,l=o.end,c=o.collapse
if(3==a.nodeType){for(var u=0;u<4;u++){for(;s&&_(t.line.text.charAt(o.coverStart+s));)--s
for(;o.coverStart+l<o.coverEnd&&_(t.line.text.charAt(o.coverStart+l));)++l
if(i=wa&&_a<9&&0==s&&l==o.coverEnd-o.coverStart?a.parentNode.getBoundingClientRect():Xt(Pa(a,s,l).getClientRects(),r),i.left||i.right||0==s)break
l=s,s-=1,c="right"}wa&&_a<11&&(i=Yt(e.display.measure,i))}else{s>0&&(c=r="right")
var d
i=e.options.lineWrapping&&(d=a.getClientRects()).length>1?d["right"==r?d.length-1:0]:a.getBoundingClientRect()}if(wa&&_a<9&&!s&&(!i||!i.left&&!i.right)){var f=a.parentNode.getClientRects()[0]
i=f?{left:f.left,right:f.left+kn(e.display),top:f.top,bottom:f.bottom}:Cs}for(var p=i.top-t.rect.top,h=i.bottom-t.rect.top,m=(p+h)/2,g=t.view.measure.heights,v=0;v<g.length-1&&!(m<g[v]);v++);var y=v?g[v-1]:0,b=g[v],k={left:("right"==c?i.right:i.left)-t.rect.left,right:("left"==c?i.left:i.right)-t.rect.left,top:y,bottom:b}
return i.left||i.right||(k.bogus=!0),e.options.singleCursorHeightPerLine||(k.rtop=p,k.rbottom=h),k}function Yt(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!$(e))return t
var n=screen.logicalXDPI/screen.deviceXDPI,r=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*n,right:t.right*n,top:t.top*r,bottom:t.bottom*r}}function Jt(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function en(e){e.display.externalMeasure=null,t(e.display.lineMeasure)
for(var n=0;n<e.display.view.length;n++)Jt(e.display.view[n])}function tn(e){en(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function nn(){return Ma&&za?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function rn(){return Ma&&za?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function on(e){var t=0
if(e.widgets)for(var n=0;n<e.widgets.length;++n)e.widgets[n].above&&(t+=qt(e.widgets[n]))
return t}function an(e,t,n,r,i){if(!i){var o=on(t)
n.top+=o,n.bottom+=o}if("line"==r)return n
r||(r="local")
var a=nt(t)
if("local"==r?a+=It(e.display):a-=e.display.viewOffset,"page"==r||"window"==r){var s=e.display.lineSpace.getBoundingClientRect()
a+=s.top+("window"==r?0:rn())
var l=s.left+("window"==r?0:nn())
n.left+=l,n.right+=l}return n.top+=a,n.bottom+=a,n}function sn(e,t,n){if("div"==n)return t
var r=t.left,i=t.top
if("page"==n)r-=nn(),i-=rn()
else if("local"==n||!n){var o=e.display.sizer.getBoundingClientRect()
r+=o.left,i+=o.top}var a=e.display.lineSpace.getBoundingClientRect()
return{left:r-a.left,top:i-a.top}}function ln(e,t,n,r,i){return r||(r=J(e.doc,t.line)),an(e,r,Ut(e,r,t.ch,i),n)}function cn(e,t,n,r,i,o){function a(t,a){var s=Gt(e,i,t,a?"right":"left",o)
return a?s.left=s.right:s.right=s.left,an(e,r,s,n)}function s(e,t,n){var r=l[t],i=1==r.level
return a(n?e-1:e,i!=n)}r=r||J(e.doc,t.line),i||(i=Vt(e,r))
var l=T(r,e.doc.direction),c=t.ch,u=t.sticky
if(c>=r.text.length?(c=r.text.length,u="before"):c<=0&&(c=0,u="after"),!l)return a("before"==u?c-1:c,"before"==u)
var d=L(l,c,u),f=es,p=s(c,d,"before"==u)
return null!=f&&(p.other=s(c,f,"before"!=u)),p}function un(e,t){var n=0
t=he(e.doc,t),e.options.lineWrapping||(n=kn(e.display)*t.ch)
var r=J(e.doc,t.line),i=nt(r)+It(e.display)
return{left:n,right:n,top:i,bottom:i+r.height}}function dn(e,t,n,r,i){var o=se(e,t,n)
return o.xRel=i,r&&(o.outside=r),o}function fn(e,t,n){var r=e.doc
if(n+=e.display.viewOffset,n<0)return dn(r.first,0,null,-1,-1)
var i=ie(r,n),o=r.first+r.size-1
if(i>o)return dn(r.first+r.size-1,J(r,o).text.length,null,1,1)
t<0&&(t=0)
for(var a=J(r,i);;){var s=gn(e,a,i,t,n),l=Ve(a,s.ch+(s.xRel>0||s.outside>0?1:0))
if(!l)return s
var c=l.find(1)
if(c.line==i)return c
a=J(r,i=c.line)}}function pn(e,t,n,r){r-=on(t)
var i=t.text.length,o=S(function(t){return Gt(e,n,t-1).bottom<=r},i,0)
return i=S(function(t){return Gt(e,n,t).top>r},o,i),{begin:o,end:i}}function hn(e,t,n,r){n||(n=Vt(e,t))
var i=an(e,t,Gt(e,n,r),"line").top
return pn(e,t,n,i)}function mn(e,t,n,r){return!(e.bottom<=n)&&(e.top>n||(r?e.left:e.right)>t)}function gn(e,t,n,r,i){i-=nt(t)
var o=Vt(e,t),a=on(t),s=0,l=t.text.length,c=!0,u=T(t,e.doc.direction)
if(u){var d=(e.options.lineWrapping?yn:vn)(e,t,n,o,u,r,i)
c=1!=d.level,s=c?d.from:d.to-1,l=c?d.to:d.from-1}var f,p,h=null,m=null,g=S(function(t){var n=Gt(e,o,t)
return n.top+=a,n.bottom+=a,!!mn(n,r,i,!1)&&(n.top<=i&&n.left<=r&&(h=t,m=n),!0)},s,l),v=!1
if(m){var y=r-m.left<m.right-r,b=y==c
g=h+(b?0:1),p=b?"after":"before",f=y?m.left:m.right}else{c||g!=l&&g!=s||g++,p=0==g?"after":g==t.text.length?"before":Gt(e,o,g-(c?1:0)).bottom+a<=i==c?"after":"before"
var k=cn(e,se(n,g,p),"line",t,o)
f=k.left,v=i<k.top?-1:i>=k.bottom?1:0}return g=C(t.text,g,1),dn(n,g,p,v,r-f)}function vn(e,t,n,r,i,o,a){var s=S(function(s){var l=i[s],c=1!=l.level
return mn(cn(e,se(n,c?l.to:l.from,c?"before":"after"),"line",t,r),o,a,!0)},0,i.length-1),l=i[s]
if(s>0){var c=1!=l.level,u=cn(e,se(n,c?l.from:l.to,c?"after":"before"),"line",t,r)
mn(u,o,a,!0)&&u.top>a&&(l=i[s-1])}return l}function yn(e,t,n,r,i,o,a){var s=pn(e,t,r,a),l=s.begin,c=s.end;/\s/.test(t.text.charAt(c-1))&&c--
for(var u=null,d=null,f=0;f<i.length;f++){var p=i[f]
if(!(p.from>=c||p.to<=l)){var h=1!=p.level,m=Gt(e,r,h?Math.min(c,p.to)-1:Math.max(l,p.from)).right,g=m<o?o-m+1e9:m-o;(!u||d>g)&&(u=p,d=g)}}return u||(u=i[i.length-1]),u.from<l&&(u={from:l,to:u.to,level:u.level}),u.to>c&&(u={from:u.from,to:c,level:u.level}),u}function bn(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==bs){bs=r("pre",null,"CodeMirror-line-like")
for(var i=0;i<49;++i)bs.appendChild(document.createTextNode("x")),bs.appendChild(r("br"))
bs.appendChild(document.createTextNode("x"))}n(e.measure,bs)
var o=bs.offsetHeight/50
return o>3&&(e.cachedTextHeight=o),t(e.measure),o||1}function kn(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=r("span","xxxxxxxxxx"),i=r("pre",[t],"CodeMirror-line-like")
n(e.measure,i)
var o=t.getBoundingClientRect(),a=(o.right-o.left)/10
return a>2&&(e.cachedCharWidth=a),a||10}function xn(e){for(var t=e.display,n={},r={},i=t.gutters.clientLeft,o=t.gutters.firstChild,a=0;o;o=o.nextSibling,++a){var s=e.display.gutterSpecs[a].className
n[s]=o.offsetLeft+o.clientLeft+i,r[s]=o.clientWidth}return{fixedPos:wn(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:n,gutterWidth:r,wrapperWidth:t.wrapper.clientWidth}}function wn(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function _n(e){var t=bn(e.display),n=e.options.lineWrapping,r=n&&Math.max(5,e.display.scroller.clientWidth/kn(e.display)-3)
return function(i){if(et(e.doc,i))return 0
var o=0
if(i.widgets)for(var a=0;a<i.widgets.length;a++)i.widgets[a].height&&(o+=i.widgets[a].height)
return n?o+(Math.ceil(i.text.length/r)||1)*t:o+t}}function Cn(e){var t=e.doc,n=_n(e)
t.iter(function(e){var t=n(e)
t!=e.height&&ne(e,t)})}function Sn(e,t,n,r){var i=e.display
if(!n&&"true"==j(t).getAttribute("cm-not-content"))return null
var o,a,s=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-s.left,a=t.clientY-s.top}catch(l){return null}var c,u=fn(e,o,a)
if(r&&u.xRel>0&&(c=J(e.doc,u.line).text).length==u.ch){var f=d(c,c.length,e.options.tabSize)-c.length
u=se(u.line,Math.max(0,Math.round((o-Pt(e.display).left)/kn(e.display))-f))}return u}function Mn(e,t){if(t>=e.display.viewTo)return null
if(t-=e.display.viewFrom,t<0)return null
for(var n=e.display.view,r=0;r<n.length;r++)if(t-=n[r].size,t<0)return r}function Ln(e,t,n,r){null==t&&(t=e.doc.first),null==n&&(n=e.doc.first+e.doc.size),r||(r=0)
var i=e.display
if(r&&n<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)vs&&Ye(e.doc,t)<i.viewTo&&An(e)
else if(n<=i.viewFrom)vs&&Je(e.doc,n+r)>i.viewFrom?An(e):(i.viewFrom+=r,i.viewTo+=r)
else if(t<=i.viewFrom&&n>=i.viewTo)An(e)
else if(t<=i.viewFrom){var o=En(e,n,n+r,1)
o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=r):An(e)}else if(n>=i.viewTo){var a=En(e,t,t,-1)
a?(i.view=i.view.slice(0,a.index),i.viewTo=a.lineN):An(e)}else{var s=En(e,t,t,-1),l=En(e,n,n+r,1)
s&&l?(i.view=i.view.slice(0,s.index).concat(gt(e,s.lineN,l.lineN)).concat(i.view.slice(l.index)),i.viewTo+=r):An(e)}var c=i.externalMeasured
c&&(n<c.lineN?c.lineN+=r:t<c.lineN+c.size&&(i.externalMeasured=null))}function Tn(e,t,n){e.curOp.viewChanged=!0
var r=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(r.externalMeasured=null),!(t<r.viewFrom||t>=r.viewTo)){var o=r.view[Mn(e,t)]
if(null!=o.node){var a=o.changes||(o.changes=[])
f(a,n)==-1&&a.push(n)}}}function An(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function En(e,t,n,r){var i,o=Mn(e,t),a=e.display.view
if(!vs||n==e.doc.first+e.doc.size)return{index:o,lineN:n}
for(var s=e.display.viewFrom,l=0;l<o;l++)s+=a[l].size
if(s!=t){if(r>0){if(o==a.length-1)return null
i=s+a[o].size-t,o++}else i=s-t
t+=i,n+=i}for(;Ye(e.doc,n)!=n;){if(o==(r<0?0:a.length-1))return null
n+=r*a[o-(r<0?1:0)].size,o+=r}return{index:o,lineN:n}}function On(e,t,n){var r=e.display,i=r.view
0==i.length||t>=r.viewTo||n<=r.viewFrom?(r.view=gt(e,t,n),r.viewFrom=t):(r.viewFrom>t?r.view=gt(e,t,r.viewFrom).concat(r.view):r.viewFrom<t&&(r.view=r.view.slice(Mn(e,t))),r.viewFrom=t,r.viewTo<n?r.view=r.view.concat(gt(e,r.viewTo,n)):r.viewTo>n&&(r.view=r.view.slice(0,Mn(e,n)))),r.viewTo=n}function zn(e){for(var t=e.display.view,n=0,r=0;r<t.length;r++){var i=t[r]
i.hidden||i.node&&!i.changes||++n}return n}function Nn(e){e.display.input.showSelection(e.display.input.prepareSelection())}function qn(e,t){void 0===t&&(t=!0)
for(var n=e.doc,r={},i=r.cursors=document.createDocumentFragment(),o=r.selection=document.createDocumentFragment(),a=0;a<n.sel.ranges.length;a++)if(t||a!=n.sel.primIndex){var s=n.sel.ranges[a]
if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var l=s.empty();(l||e.options.showCursorWhenSelecting)&&Fn(e,s.head,i),l||Dn(e,s,o)}}return r}function Fn(e,t,n){var i=cn(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),o=n.appendChild(r("div"," ","CodeMirror-cursor"))
if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",i.other){var a=n.appendChild(r("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
a.style.display="",a.style.left=i.other.left+"px",a.style.top=i.other.top+"px",a.style.height=.85*(i.other.bottom-i.other.top)+"px"}}function In(e,t){return e.top-t.top||e.left-t.left}function Dn(e,t,n){function i(e,t,n,i){t<0&&(t=0),t=Math.round(t),i=Math.round(i),l.appendChild(r("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==n?d-e:n)+"px;\n                             height: "+(i-t)+"px"))}function o(t,n,r){function o(n,r){return ln(e,se(t,n),"div",p,r)}function a(t,n,r){var i=hn(e,p,null,t),a="ltr"==n==("after"==r)?"left":"right",s="after"==r?i.begin:i.end-(/\s/.test(p.text.charAt(i.end-1))?2:1)
return o(s,a)[a]}var l,c,p=J(s,t),h=p.text.length,m=T(p,s.direction)
return M(m,n||0,null==r?h:r,function(e,t,s,p){var g="ltr"==s,v=o(e,g?"left":"right"),y=o(t-1,g?"right":"left"),b=null==n&&0==e,k=null==r&&t==h,x=0==p,w=!m||p==m.length-1
if(y.top-v.top<=3){var _=(f?b:k)&&x,C=(f?k:b)&&w,S=_?u:(g?v:y).left,M=C?d:(g?y:v).right
i(S,v.top,M-S,v.bottom)}else{var L,T,A,E
g?(L=f&&b&&x?u:v.left,T=f?d:a(e,s,"before"),A=f?u:a(t,s,"after"),E=f&&k&&w?d:y.right):(L=f?a(e,s,"before"):u,T=!f&&b&&x?d:v.right,A=!f&&k&&w?u:y.left,E=f?a(t,s,"after"):d),i(L,v.top,T-L,v.bottom),v.bottom<y.top&&i(u,v.bottom,null,y.top),i(A,y.top,E-A,y.bottom)}(!l||In(v,l)<0)&&(l=v),In(y,l)<0&&(l=y),(!c||In(v,c)<0)&&(c=v),In(y,c)<0&&(c=y)}),{start:l,end:c}}var a=e.display,s=e.doc,l=document.createDocumentFragment(),c=Pt(e.display),u=c.left,d=Math.max(a.sizerWidth,jt(e)-a.sizer.offsetLeft)-c.right,f="ltr"==s.direction,p=t.from(),h=t.to()
if(p.line==h.line)o(p.line,p.ch,h.ch)
else{var m=J(s,p.line),g=J(s,h.line),v=Ze(m)==Ze(g),y=o(p.line,p.ch,v?m.text.length+1:null).end,b=o(h.line,v?0:null,h.ch).start
v&&(y.top<b.top-2?(i(y.right,y.top,null,y.bottom),i(u,b.top,b.left,b.bottom)):i(y.right,y.top,b.left-y.right,y.bottom)),y.bottom<b.top&&i(u,y.bottom,null,b.top)}n.appendChild(l)}function Pn(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var n=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){return t.cursorDiv.style.visibility=(n=!n)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Rn(e){e.state.focused||(e.display.input.focus(),Bn(e))}function jn(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,Wn(e))},100)}function Bn(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(O(e,"focus",e,t),e.state.focused=!0,s(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),Ca&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Pn(e))}function Wn(e,t){e.state.delayingBlurEvent||(e.state.focused&&(O(e,"blur",e,t),e.state.focused=!1,Ba(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Hn(e){for(var t=e.display,n=t.lineDiv.offsetTop,r=0;r<t.view.length;r++){var i=t.view[r],o=e.options.lineWrapping,a=void 0,s=0
if(!i.hidden){if(wa&&_a<8){var l=i.node.offsetTop+i.node.offsetHeight
a=l-n,n=l}else{var c=i.node.getBoundingClientRect()
a=c.bottom-c.top,!o&&i.text.firstChild&&(s=i.text.firstChild.getBoundingClientRect().right-c.left-1)}var u=i.line.height-a
if((u>.005||u<-.005)&&(ne(i.line,a),$n(i.line),i.rest))for(var d=0;d<i.rest.length;d++)$n(i.rest[d])
if(s>e.display.sizerWidth){var f=Math.ceil(s/kn(e.display))
f>e.display.maxLineLength&&(e.display.maxLineLength=f,e.display.maxLine=i.line,e.display.maxLineChanged=!0)}}}}function $n(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var n=e.widgets[t],r=n.node.parentNode
r&&(n.height=r.offsetHeight)}}function Un(e,t,n){var r=n&&null!=n.top?Math.max(0,n.top):e.scroller.scrollTop
r=Math.floor(r-It(e))
var i=n&&null!=n.bottom?n.bottom:r+e.wrapper.clientHeight,o=ie(t,r),a=ie(t,i)
if(n&&n.ensure){var s=n.ensure.from.line,l=n.ensure.to.line
s<o?(o=s,a=ie(t,nt(J(t,s))+e.wrapper.clientHeight)):Math.min(l,t.lastLine())>=a&&(o=ie(t,nt(J(t,l))-e.wrapper.clientHeight),a=l)}return{from:o,to:Math.max(a,o+1)}}function Kn(e,t){if(!z(e,"scrollCursorIntoView")){var n=e.display,i=n.sizer.getBoundingClientRect(),o=null
if(t.top+i.top<0?o=!0:t.bottom+i.top>(window.innerHeight||document.documentElement.clientHeight)&&(o=!1),null!=o&&!Ea){var a=r("div","​",null,"position: absolute;\n                         top: "+(t.top-n.viewOffset-It(e.display))+"px;\n                         height: "+(t.bottom-t.top+Rt(e)+n.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;")
e.display.lineSpace.appendChild(a),a.scrollIntoView(o),e.display.lineSpace.removeChild(a)}}}function Vn(e,t,n,r){null==r&&(r=0)
var i
e.options.lineWrapping||t!=n||(t=t.ch?se(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t,n="before"==t.sticky?se(t.line,t.ch+1,"before"):t)
for(var o=0;o<5;o++){var a=!1,s=cn(e,t),l=n&&n!=t?cn(e,n):s
i={left:Math.min(s.left,l.left),top:Math.min(s.top,l.top)-r,right:Math.max(s.left,l.left),bottom:Math.max(s.bottom,l.bottom)+r}
var c=Zn(e,i),u=e.doc.scrollTop,d=e.doc.scrollLeft
if(null!=c.scrollTop&&(nr(e,c.scrollTop),Math.abs(e.doc.scrollTop-u)>1&&(a=!0)),null!=c.scrollLeft&&(ir(e,c.scrollLeft),Math.abs(e.doc.scrollLeft-d)>1&&(a=!0)),!a)break}return i}function Gn(e,t){var n=Zn(e,t)
null!=n.scrollTop&&nr(e,n.scrollTop),null!=n.scrollLeft&&ir(e,n.scrollLeft)}function Zn(e,t){var n=e.display,r=bn(e.display)
t.top<0&&(t.top=0)
var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:n.scroller.scrollTop,o=Bt(e),a={}
t.bottom-t.top>o&&(t.bottom=t.top+o)
var s=e.doc.height+Dt(n),l=t.top<r,c=t.bottom>s-r
if(t.top<i)a.scrollTop=l?0:t.top
else if(t.bottom>i+o){var u=Math.min(t.top,(c?s:t.bottom)-o)
u!=i&&(a.scrollTop=u)}var d=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:n.scroller.scrollLeft,f=jt(e)-(e.options.fixedGutter?n.gutters.offsetWidth:0),p=t.right-t.left>f
return p&&(t.right=t.left+f),t.left<10?a.scrollLeft=0:t.left<d?a.scrollLeft=Math.max(0,t.left-(p?0:10)):t.right>f+d-3&&(a.scrollLeft=t.right+(p?0:10)-f),a}function Xn(e,t){null!=t&&(er(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function Qn(e){er(e)
var t=e.getCursor()
e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function Yn(e,t,n){null==t&&null==n||er(e),null!=t&&(e.curOp.scrollLeft=t),null!=n&&(e.curOp.scrollTop=n)}function Jn(e,t){er(e),e.curOp.scrollToPos=t}function er(e){var t=e.curOp.scrollToPos
if(t){e.curOp.scrollToPos=null
var n=un(e,t.from),r=un(e,t.to)
tr(e,n,r,t.margin)}}function tr(e,t,n,r){var i=Zn(e,{left:Math.min(t.left,n.left),top:Math.min(t.top,n.top)-r,right:Math.max(t.right,n.right),bottom:Math.max(t.bottom,n.bottom)+r})
Yn(e,i.scrollLeft,i.scrollTop)}function nr(e,t){Math.abs(e.doc.scrollTop-t)<2||(ya||Tr(e,{top:t}),rr(e,t,!0),ya&&Tr(e),xr(e,100))}function rr(e,t,n){t=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t)),(e.display.scroller.scrollTop!=t||n)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function ir(e,t,n,r){t=Math.max(0,Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),(n?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!r||(e.doc.scrollLeft=t,zr(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function or(e){var t=e.display,n=t.gutters.offsetWidth,r=Math.round(e.doc.height+Dt(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?n:0,docHeight:r,scrollHeight:r+Rt(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:n}}function ar(e,t){t||(t=or(e))
var n=e.display.barWidth,r=e.display.barHeight
sr(e,t)
for(var i=0;i<4&&n!=e.display.barWidth||r!=e.display.barHeight;i++)n!=e.display.barWidth&&e.options.lineWrapping&&Hn(e),sr(e,or(e)),n=e.display.barWidth,r=e.display.barHeight}function sr(e,t){var n=e.display,r=n.scrollbars.update(t)
n.sizer.style.paddingRight=(n.barWidth=r.right)+"px",n.sizer.style.paddingBottom=(n.barHeight=r.bottom)+"px",n.heightForcer.style.borderBottom=r.bottom+"px solid transparent",r.right&&r.bottom?(n.scrollbarFiller.style.display="block",n.scrollbarFiller.style.height=r.bottom+"px",n.scrollbarFiller.style.width=r.right+"px"):n.scrollbarFiller.style.display="",r.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(n.gutterFiller.style.display="block",n.gutterFiller.style.height=r.bottom+"px",n.gutterFiller.style.width=t.gutterWidth+"px"):n.gutterFiller.style.display=""}function lr(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Ba(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Ls[e.options.scrollbarStyle](function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),rs(t,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),t.setAttribute("cm-not-content","true")},function(t,n){"horizontal"==n?ir(e,t):nr(e,t)},e),e.display.scrollbars.addClass&&s(e.display.wrapper,e.display.scrollbars.addClass)}function cr(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Ts},vt(e.curOp)}function ur(e){var t=e.curOp
t&&bt(t,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null
dr(e)})}function dr(e){for(var t=e.ops,n=0;n<t.length;n++)fr(t[n])
for(var r=0;r<t.length;r++)pr(t[r])
for(var i=0;i<t.length;i++)hr(t[i])
for(var o=0;o<t.length;o++)mr(t[o])
for(var a=0;a<t.length;a++)gr(t[a])}function fr(e){var t=e.cm,n=t.display
_r(t),e.updateMaxLine&&it(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<n.viewFrom||e.scrollToPos.to.line>=n.viewTo)||n.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new As(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function pr(e){e.updatedDisplay=e.mustUpdate&&Mr(e.cm,e.update)}function hr(e){var t=e.cm,n=t.display
e.updatedDisplay&&Hn(t),e.barMeasure=or(t),n.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Ut(t,n.maxLine,n.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(n.scroller.clientWidth,n.sizer.offsetLeft+e.adjustWidthTo+Rt(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,n.sizer.offsetLeft+e.adjustWidthTo-jt(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=n.input.prepareSelection())}function mr(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&ir(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1)
var n=e.focus&&e.focus==a()
e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,n),(e.updatedDisplay||e.startHeight!=t.doc.height)&&ar(t,e.barMeasure),e.updatedDisplay&&Or(t,e.barMeasure),e.selectionChanged&&Pn(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),n&&Rn(e.cm)}function gr(e){var t=e.cm,n=t.display,r=t.doc
if(e.updatedDisplay&&Lr(t,e.update),null==n.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(n.wheelStartX=n.wheelStartY=null),null!=e.scrollTop&&rr(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&ir(t,e.scrollLeft,!0,!0),e.scrollToPos){var i=Vn(t,he(r,e.scrollToPos.from),he(r,e.scrollToPos.to),e.scrollToPos.margin)
Kn(t,i)}var o=e.maybeHiddenMarkers,a=e.maybeUnhiddenMarkers
if(o)for(var s=0;s<o.length;++s)o[s].lines.length||O(o[s],"hide")
if(a)for(var l=0;l<a.length;++l)a[l].lines.length&&O(a[l],"unhide")
n.wrapper.offsetHeight&&(r.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&O(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function vr(e,t){if(e.curOp)return t()
cr(e)
try{return t()}finally{ur(e)}}function yr(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
cr(e)
try{return t.apply(e,arguments)}finally{ur(e)}}}function br(e){return function(){if(this.curOp)return e.apply(this,arguments)
cr(this)
try{return e.apply(this,arguments)}finally{ur(this)}}}function kr(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
cr(t)
try{return e.apply(this,arguments)}finally{ur(t)}}}function xr(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,c(wr,e))}function wr(e){var t=e.doc
if(!(t.highlightFrontier>=e.display.viewTo)){var n=+new Date+e.options.workTime,r=be(e,t.highlightFrontier),i=[]
t.iter(r.line,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(r.line>=e.display.viewFrom){var a=o.styles,s=o.text.length>e.options.maxHighlightLength?X(t.mode,r.state):null,l=ve(e,o,r,!0)
s&&(r.state=s),o.styles=l.styles
var c=o.styleClasses,u=l.classes
u?o.styleClasses=u:c&&(o.styleClasses=null)
for(var d=!a||a.length!=o.styles.length||c!=u&&(!c||!u||c.bgClass!=u.bgClass||c.textClass!=u.textClass),f=0;!d&&f<a.length;++f)d=a[f]!=o.styles[f]
d&&i.push(r.line),o.stateAfter=r.save(),r.nextLine()}else o.text.length<=e.options.maxHighlightLength&&ke(e,o.text,r),o.stateAfter=r.line%5==0?r.save():null,r.nextLine()
if(+new Date>n)return xr(e,e.options.workDelay),!0}),t.highlightFrontier=r.line,t.modeFrontier=Math.max(t.modeFrontier,r.line),i.length&&vr(e,function(){for(var t=0;t<i.length;t++)Tn(e,i[t],"text")})}}function _r(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Rt(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Rt(e)+"px",t.scrollbarsClipped=!0)}function Cr(e){if(e.hasFocus())return null
var t=a()
if(!t||!o(e.display.lineDiv,t))return null
var n={activeElt:t}
if(window.getSelection){var r=window.getSelection()
r.anchorNode&&r.extend&&o(e.display.lineDiv,r.anchorNode)&&(n.anchorNode=r.anchorNode,n.anchorOffset=r.anchorOffset,n.focusNode=r.focusNode,n.focusOffset=r.focusOffset)}return n}function Sr(e){if(e&&e.activeElt&&e.activeElt!=a()&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&o(document.body,e.anchorNode)&&o(document.body,e.focusNode))){var t=window.getSelection(),n=document.createRange()
n.setEnd(e.anchorNode,e.anchorOffset),n.collapse(!1),t.removeAllRanges(),t.addRange(n),t.extend(e.focusNode,e.focusOffset)}}function Mr(e,n){var r=e.display,i=e.doc
if(n.editorIsHidden)return An(e),!1
if(!n.force&&n.visible.from>=r.viewFrom&&n.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&r.renderedView==r.view&&0==zn(e))return!1
Nr(e)&&(An(e),n.dims=xn(e))
var o=i.first+i.size,a=Math.max(n.visible.from-e.options.viewportMargin,i.first),s=Math.min(o,n.visible.to+e.options.viewportMargin)
r.viewFrom<a&&a-r.viewFrom<20&&(a=Math.max(i.first,r.viewFrom)),r.viewTo>s&&r.viewTo-s<20&&(s=Math.min(o,r.viewTo)),vs&&(a=Ye(e.doc,a),s=Je(e.doc,s))
var l=a!=r.viewFrom||s!=r.viewTo||r.lastWrapHeight!=n.wrapperHeight||r.lastWrapWidth!=n.wrapperWidth
On(e,a,s),r.viewOffset=nt(J(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+"px"
var c=zn(e)
if(!l&&0==c&&!n.force&&r.renderedView==r.view&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return!1
var u=Cr(e)
return c>4&&(r.lineDiv.style.display="none"),Ar(e,r.updateLineNumbers,n.dims),c>4&&(r.lineDiv.style.display=""),r.renderedView=r.view,Sr(u),t(r.cursorDiv),t(r.selectionDiv),r.gutters.style.height=r.sizer.style.minHeight=0,l&&(r.lastWrapHeight=n.wrapperHeight,r.lastWrapWidth=n.wrapperWidth,xr(e,400)),r.updateLineNumbers=null,!0}function Lr(e,t){for(var n=t.viewport,r=!0;;r=!1){if(r&&e.options.lineWrapping&&t.oldDisplayWidth!=jt(e))r&&(t.visible=Un(e.display,e.doc,n))
else if(n&&null!=n.top&&(n={top:Math.min(e.doc.height+Dt(e.display)-Bt(e),n.top)}),t.visible=Un(e.display,e.doc,n),t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)break
if(!Mr(e,t))break
Hn(e)
var i=or(e)
Nn(e),ar(e,i),Or(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Tr(e,t){var n=new As(e,t)
if(Mr(e,n)){Hn(e),Lr(e,n)
var r=or(e)
Nn(e),ar(e,r),Or(e,r),n.finish()}}function Ar(e,n,r){function i(t){var n=t.nextSibling
return Ca&&qa&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),n}for(var o=e.display,a=e.options.lineNumbers,s=o.lineDiv,l=s.firstChild,c=o.view,u=o.viewFrom,d=0;d<c.length;d++){var p=c[d]
if(p.hidden);else if(p.node&&p.node.parentNode==s){for(;l!=p.node;)l=i(l)
var h=a&&null!=n&&n<=u&&p.lineNumber
p.changes&&(f(p.changes,"gutter")>-1&&(h=!1),wt(e,p,u,r)),h&&(t(p.lineNumber),p.lineNumber.appendChild(document.createTextNode(ae(e.options,u)))),l=p.node.nextSibling}else{var m=Et(e,p,u,r)
s.insertBefore(m,l)}u+=p.size}for(;l;)l=i(l)}function Er(e){var t=e.gutters.offsetWidth
e.sizer.style.marginLeft=t+"px"}function Or(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Rt(e)+"px"}function zr(e){var t=e.display,n=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var r=wn(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=r+"px",a=0;a<n.length;a++)if(!n[a].hidden){e.options.fixedGutter&&(n[a].gutter&&(n[a].gutter.style.left=o),n[a].gutterBackground&&(n[a].gutterBackground.style.left=o))
var s=n[a].alignable
if(s)for(var l=0;l<s.length;l++)s[l].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=r+i+"px")}}function Nr(e){if(!e.options.lineNumbers)return!1
var t=e.doc,n=ae(e.options,t.first+t.size-1),i=e.display
if(n.length!=i.lineNumChars){var o=i.measure.appendChild(r("div",[r("div",n)],"CodeMirror-linenumber CodeMirror-gutter-elt")),a=o.firstChild.offsetWidth,s=o.offsetWidth-a
return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(a,i.lineGutter.offsetWidth-s)+1,i.lineNumWidth=i.lineNumInnerWidth+s,i.lineNumChars=i.lineNumInnerWidth?n.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",Er(e.display),!0}return!1}function qr(e,t){for(var n=[],r=!1,i=0;i<e.length;i++){var o=e[i],a=null
if("string"!=typeof o&&(a=o.style,o=o.className),"CodeMirror-linenumbers"==o){if(!t)continue
r=!0}n.push({className:o,style:a})}return t&&!r&&n.push({className:"CodeMirror-linenumbers",style:null}),n}function Fr(e){var n=e.gutters,i=e.gutterSpecs
t(n),e.lineGutter=null
for(var o=0;o<i.length;++o){var a=i[o],s=a.className,l=a.style,c=n.appendChild(r("div",null,"CodeMirror-gutter "+s))
l&&(c.style.cssText=l),"CodeMirror-linenumbers"==s&&(e.lineGutter=c,c.style.width=(e.lineNumWidth||1)+"px")}n.style.display=i.length?"":"none",Er(e)}function Ir(e){Fr(e.display),Ln(e),zr(e)}function Dr(e,t,n,o){var a=this
this.input=n,a.scrollbarFiller=r("div",null,"CodeMirror-scrollbar-filler"),a.scrollbarFiller.setAttribute("cm-not-content","true"),a.gutterFiller=r("div",null,"CodeMirror-gutter-filler"),a.gutterFiller.setAttribute("cm-not-content","true"),a.lineDiv=i("div",null,"CodeMirror-code"),a.selectionDiv=r("div",null,null,"position: relative; z-index: 1"),a.cursorDiv=r("div",null,"CodeMirror-cursors"),a.measure=r("div",null,"CodeMirror-measure"),a.lineMeasure=r("div",null,"CodeMirror-measure"),a.lineSpace=i("div",[a.measure,a.lineMeasure,a.selectionDiv,a.cursorDiv,a.lineDiv],null,"position: relative; outline: none")
var s=i("div",[a.lineSpace],"CodeMirror-lines")
a.mover=r("div",[s],null,"position: relative"),a.sizer=r("div",[a.mover],"CodeMirror-sizer"),a.sizerWidth=null,a.heightForcer=r("div",null,null,"position: absolute; height: "+Ka+"px; width: 1px;"),a.gutters=r("div",null,"CodeMirror-gutters"),a.lineGutter=null,a.scroller=r("div",[a.sizer,a.heightForcer,a.gutters],"CodeMirror-scroll"),a.scroller.setAttribute("tabIndex","-1"),a.wrapper=r("div",[a.scrollbarFiller,a.gutterFiller,a.scroller],"CodeMirror"),wa&&_a<8&&(a.gutters.style.zIndex=-1,a.scroller.style.paddingRight=0),Ca||ya&&Na||(a.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(a.wrapper):e(a.wrapper)),a.viewFrom=a.viewTo=t.first,a.reportedViewFrom=a.reportedViewTo=t.first,a.view=[],a.renderedView=null,a.externalMeasured=null,a.viewOffset=0,a.lastWrapHeight=a.lastWrapWidth=0,a.updateLineNumbers=null,a.nativeBarWidth=a.barHeight=a.barWidth=0,a.scrollbarsClipped=!1,a.lineNumWidth=a.lineNumInnerWidth=a.lineNumChars=null,a.alignWidgets=!1,a.cachedCharWidth=a.cachedTextHeight=a.cachedPaddingH=null,a.maxLine=null,a.maxLineLength=0,a.maxLineChanged=!1,a.wheelDX=a.wheelDY=a.wheelStartX=a.wheelStartY=null,a.shift=!1,a.selForContextMenu=null,a.activeTouch=null,a.gutterSpecs=qr(o.gutters,o.lineNumbers),Fr(a),n.init(a)}function Pr(e){var t=e.wheelDeltaX,n=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==n&&e.detail&&e.axis==e.VERTICAL_AXIS?n=e.detail:null==n&&(n=e.wheelDelta),{x:t,y:n}}function Rr(e){var t=Pr(e)
return t.x*=Os,t.y*=Os,t}function jr(e,t){var n=Pr(t),r=n.x,i=n.y,o=e.display,a=o.scroller,s=a.scrollWidth>a.clientWidth,l=a.scrollHeight>a.clientHeight
if(r&&s||i&&l){if(i&&qa&&Ca)e:for(var c=t.target,u=o.view;c!=a;c=c.parentNode)for(var d=0;d<u.length;d++)if(u[d].node==c){e.display.currentWheelTarget=c
break e}if(r&&!ya&&!La&&null!=Os)return i&&l&&nr(e,Math.max(0,a.scrollTop+i*Os)),ir(e,Math.max(0,a.scrollLeft+r*Os)),(!i||i&&l)&&I(t),void(o.wheelStartX=null)
if(i&&null!=Os){var f=i*Os,p=e.doc.scrollTop,h=p+o.wrapper.clientHeight
f<0?p=Math.max(0,p+f-50):h=Math.min(e.doc.height,h+f+50),Tr(e,{top:p,bottom:h})}Es<20&&(null==o.wheelStartX?(o.wheelStartX=a.scrollLeft,o.wheelStartY=a.scrollTop,o.wheelDX=r,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=a.scrollLeft-o.wheelStartX,t=a.scrollTop-o.wheelStartY,n=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX
o.wheelStartX=o.wheelStartY=null,n&&(Os=(Os*Es+n)/(Es+1),++Es)}},200)):(o.wheelDX+=r,o.wheelDY+=i))}}function Br(e,t,n){var r=e&&e.options.selectionsMayTouch,i=t[n]
t.sort(function(e,t){return le(e.from(),t.from())}),n=f(t,i)
for(var o=1;o<t.length;o++){var a=t[o],s=t[o-1],l=le(s.to(),a.from())
if(r&&!a.empty()?l>0:l>=0){var c=fe(s.from(),a.from()),u=de(s.to(),a.to()),d=s.empty()?a.from()==a.head:s.from()==s.head
o<=n&&--n,t.splice(--o,2,new Ns(d?u:c,d?c:u))}}return new zs(t,n)}function Wr(e,t){return new zs([new Ns(e,t||e)],0)}function Hr(e){return e.text?se(e.from.line+e.text.length-1,m(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function $r(e,t){if(le(e,t.from)<0)return e
if(le(e,t.to)<=0)return Hr(t)
var n=e.line+t.text.length-(t.to.line-t.from.line)-1,r=e.ch
return e.line==t.to.line&&(r+=Hr(t).ch-t.to.ch),se(n,r)}function Ur(e,t){for(var n=[],r=0;r<e.sel.ranges.length;r++){var i=e.sel.ranges[r]
n.push(new Ns($r(i.anchor,t),$r(i.head,t)))}return Br(e.cm,n,e.sel.primIndex)}function Kr(e,t,n){return e.line==t.line?se(n.line,e.ch-t.ch+n.ch):se(n.line+(e.line-t.line),e.ch)}function Vr(e,t,n){for(var r=[],i=se(e.first,0),o=i,a=0;a<t.length;a++){var s=t[a],l=Kr(s.from,i,o),c=Kr(Hr(s),i,o)
if(i=s.to,o=c,"around"==n){var u=e.sel.ranges[a],d=le(u.head,u.anchor)<0
r[a]=new Ns(d?c:l,d?l:c)}else r[a]=new Ns(l,l)}return new zs(r,e.sel.primIndex)}function Gr(e){e.doc.mode=G(e.options,e.doc.modeOption),Zr(e)}function Zr(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,xr(e,100),e.state.modeGen++,e.curOp&&Ln(e)}function Xr(e,t){return 0==t.from.ch&&0==t.to.ch&&""==m(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Qr(e,t,n,r){function i(e){return n?n[e]:null}function o(e,n,i){ot(e,n,i,r),kt(e,"change",e,t)}function a(e,t){for(var n=[],o=e;o<t;++o)n.push(new ys(c[o],i(o),r))
return n}var s=t.from,l=t.to,c=t.text,u=J(e,s.line),d=J(e,l.line),f=m(c),p=i(c.length-1),h=l.line-s.line
if(t.full)e.insert(0,a(0,c.length)),e.remove(c.length,e.size-c.length)
else if(Xr(e,t)){var g=a(0,c.length-1)
o(d,d.text,p),h&&e.remove(s.line,h),g.length&&e.insert(s.line,g)}else if(u==d)if(1==c.length)o(u,u.text.slice(0,s.ch)+f+u.text.slice(l.ch),p)
else{var v=a(1,c.length-1)
v.push(new ys(f+u.text.slice(l.ch),p,r)),o(u,u.text.slice(0,s.ch)+c[0],i(0)),e.insert(s.line+1,v)}else if(1==c.length)o(u,u.text.slice(0,s.ch)+c[0]+d.text.slice(l.ch),i(0)),e.remove(s.line+1,h)
else{o(u,u.text.slice(0,s.ch)+c[0],i(0)),o(d,f+d.text.slice(l.ch),p)
var y=a(1,c.length-1)
h>1&&e.remove(s.line+1,h-1),e.insert(s.line+1,y)}kt(e,"change",e,t)}function Yr(e,t,n){function r(e,i,o){if(e.linked)for(var a=0;a<e.linked.length;++a){var s=e.linked[a]
if(s.doc!=i){var l=o&&s.sharedHist
n&&!l||(t(s.doc,l),r(s.doc,e,l))}}}r(e,null,!0)}function Jr(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,Cn(e),Gr(e),ei(e),e.options.lineWrapping||it(e),e.options.mode=t.modeOption,Ln(e)}function ei(e){("rtl"==e.doc.direction?s:Ba)(e.display.lineDiv,"CodeMirror-rtl")}function ti(e){vr(e,function(){ei(e),Ln(e)})}function ni(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function ri(e,t){var n={from:ue(t.from),to:Hr(t),text:ee(e,t.from,t.to)}
return ui(e,n,t.from.line,t.to.line+1),Yr(e,function(e){return ui(e,n,t.from.line,t.to.line+1)},!0),n}function ii(e){for(;e.length;){var t=m(e)
if(!t.ranges)break
e.pop()}}function oi(e,t){return t?(ii(e.done),m(e.done)):e.done.length&&!m(e.done).ranges?m(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),m(e.done)):void 0}function ai(e,t,n,r){var i=e.history
i.undone.length=0
var o,a,s=+new Date
if((i.lastOp==r||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&i.lastModTime>s-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=oi(i,i.lastOp==r)))a=m(o.changes),0==le(t.from,t.to)&&0==le(t.from,a.to)?a.to=Hr(t):o.changes.push(ri(e,t))
else{var l=m(i.done)
for(l&&l.ranges||ci(e.sel,i.done),o={changes:[ri(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(n),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=s,i.lastOp=i.lastSelOp=r,i.lastOrigin=i.lastSelOrigin=t.origin,a||O(e,"historyAdded")}function si(e,t,n,r){var i=t.charAt(0)
return"*"==i||"+"==i&&n.ranges.length==r.ranges.length&&n.somethingSelected()==r.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function li(e,t,n,r){var i=e.history,o=r&&r.origin
n==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||si(e,o,m(i.done),t))?i.done[i.done.length-1]=t:ci(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=n,r&&r.clearRedo!==!1&&ii(i.undone)}function ci(e,t){var n=m(t)
n&&n.ranges&&n.equals(e)||t.push(e)}function ui(e,t,n,r){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,n),Math.min(e.first+e.size,r),function(n){n.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=n.markedSpans),++o})}function di(e){if(!e)return null
for(var t,n=0;n<e.length;++n)e[n].marker.explicitlyCleared?t||(t=e.slice(0,n)):t&&t.push(e[n])
return t?t.length?t:null:e}function fi(e,t){var n=t["spans_"+e.id]
if(!n)return null
for(var r=[],i=0;i<t.text.length;++i)r.push(di(n[i]))
return r}function pi(e,t){var n=fi(e,t),r=Ie(e,t)
if(!n)return r
if(!r)return n
for(var i=0;i<n.length;++i){var o=n[i],a=r[i]
if(o&&a)e:for(var s=0;s<a.length;++s){for(var l=a[s],c=0;c<o.length;++c)if(o[c].marker==l.marker)continue e
o.push(l)}else a&&(n[i]=a)}return n}function hi(e,t,n){for(var r=[],i=0;i<e.length;++i){var o=e[i]
if(o.ranges)r.push(n?zs.prototype.deepCopy.call(o):o)
else{var a=o.changes,s=[]
r.push({changes:s})
for(var l=0;l<a.length;++l){var c=a[l],u=void 0
if(s.push({from:c.from,to:c.to,text:c.text}),t)for(var d in c)(u=d.match(/^spans_(\d+)$/))&&f(t,Number(u[1]))>-1&&(m(s)[d]=c[d],delete c[d])}}}return r}function mi(e,t,n,r){if(r){var i=e.anchor
if(n){var o=le(t,i)<0
o!=le(n,i)<0?(i=t,t=n):o!=le(t,n)<0&&(t=n)}return new Ns(i,t)}return new Ns(n||t,t)}function gi(e,t,n,r,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),wi(e,new zs([mi(e.sel.primary(),t,n,i)],0),r)}function vi(e,t,n){for(var r=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)r[o]=mi(e.sel.ranges[o],t[o],null,i)
var a=Br(e.cm,r,e.sel.primIndex)
wi(e,a,n)}function yi(e,t,n,r){var i=e.sel.ranges.slice(0)
i[t]=n,wi(e,Br(e.cm,i,e.sel.primIndex),r)}function bi(e,t,n,r){wi(e,Wr(t,n),r)}function ki(e,t,n){var r={ranges:t.ranges,update:function(t){this.ranges=[]
for(var n=0;n<t.length;n++)this.ranges[n]=new Ns(he(e,t[n].anchor),he(e,t[n].head))},origin:n&&n.origin}
return O(e,"beforeSelectionChange",e,r),e.cm&&O(e.cm,"beforeSelectionChange",e.cm,r),r.ranges!=t.ranges?Br(e.cm,r.ranges,r.ranges.length-1):t}function xi(e,t,n){var r=e.history.done,i=m(r)
i&&i.ranges?(r[r.length-1]=t,_i(e,t,n)):wi(e,t,n)}function wi(e,t,n){_i(e,t,n),li(e,e.sel,e.cm?e.cm.curOp.id:NaN,n)}function _i(e,t,n){(q(e,"beforeSelectionChange")||e.cm&&q(e.cm,"beforeSelectionChange"))&&(t=ki(e,t,n))
var r=n&&n.bias||(le(t.primary().head,e.sel.primary().head)<0?-1:1)
Ci(e,Mi(e,t,r,!0)),n&&n.scroll===!1||!e.cm||Qn(e.cm)}function Ci(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,N(e.cm)),kt(e,"cursorActivity",e))}function Si(e){Ci(e,Mi(e,e.sel,null,!1))}function Mi(e,t,n,r){for(var i,o=0;o<t.ranges.length;o++){var a=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],l=Ti(e,a.anchor,s&&s.anchor,n,r),c=Ti(e,a.head,s&&s.head,n,r);(i||l!=a.anchor||c!=a.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new Ns(l,c))}return i?Br(e.cm,i,t.primIndex):t}function Li(e,t,n,r,i){var o=J(e,t.line)
if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var s=o.markedSpans[a],l=s.marker,c="selectLeft"in l?!l.selectLeft:l.inclusiveLeft,u="selectRight"in l?!l.selectRight:l.inclusiveRight
if((null==s.from||(c?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(u?s.to>=t.ch:s.to>t.ch))){if(i&&(O(l,"beforeCursorEnter"),l.explicitlyCleared)){if(o.markedSpans){--a
continue}break}if(!l.atomic)continue
if(n){var d=l.find(r<0?1:-1),f=void 0
if((r<0?u:c)&&(d=Ai(e,d,-r,d&&d.line==t.line?o:null)),d&&d.line==t.line&&(f=le(d,n))&&(r<0?f<0:f>0))return Li(e,d,t,r,i)}var p=l.find(r<0?-1:1)
return(r<0?c:u)&&(p=Ai(e,p,r,p.line==t.line?o:null)),p?Li(e,p,t,r,i):null}}return t}function Ti(e,t,n,r,i){var o=r||1,a=Li(e,t,n,o,i)||!i&&Li(e,t,n,o,!0)||Li(e,t,n,-o,i)||!i&&Li(e,t,n,-o,!0)
return a?a:(e.cantEdit=!0,se(e.first,0))}function Ai(e,t,n,r){return n<0&&0==t.ch?t.line>e.first?he(e,se(t.line-1)):null:n>0&&t.ch==(r||J(e,t.line)).text.length?t.line<e.first+e.size-1?se(t.line+1,0):null:new se(t.line,t.ch+n)}function Ei(e){e.setSelection(se(e.firstLine(),0),se(e.lastLine()),Ga)}function Oi(e,t,n){var r={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return r.canceled=!0}}
return n&&(r.update=function(t,n,i,o){t&&(r.from=he(e,t)),n&&(r.to=he(e,n)),i&&(r.text=i),void 0!==o&&(r.origin=o)}),O(e,"beforeChange",e,r),e.cm&&O(e.cm,"beforeChange",e.cm,r),r.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:r.from,to:r.to,text:r.text,origin:r.origin}}function zi(e,t,n){if(e.cm){if(!e.cm.curOp)return yr(e.cm,zi)(e,t,n)
if(e.cm.state.suppressEdits)return}if(!(q(e,"beforeChange")||e.cm&&q(e.cm,"beforeChange"))||(t=Oi(e,t,!0))){var r=gs&&!n&&Pe(e,t.from,t.to)
if(r)for(var i=r.length-1;i>=0;--i)Ni(e,{from:r[i].from,to:r[i].to,text:i?[""]:t.text,origin:t.origin})
else Ni(e,t)}}function Ni(e,t){if(1!=t.text.length||""!=t.text[0]||0!=le(t.from,t.to)){var n=Ur(e,t)
ai(e,t,n,e.cm?e.cm.curOp.id:NaN),Ii(e,t,n,Ie(e,t))
var r=[]
Yr(e,function(e,n){n||f(r,e.history)!=-1||(Bi(e.history,t),r.push(e.history)),Ii(e,t,null,Ie(e,t))})}}function qi(e,t,n){var r=e.cm&&e.cm.state.suppressEdits
if(!r||n){for(var i,o=e.history,a=e.sel,s="undo"==t?o.done:o.undone,l="undo"==t?o.undone:o.done,c=0;c<s.length&&(i=s[c],n?!i.ranges||i.equals(e.sel):i.ranges);c++);if(c!=s.length){for(o.lastOrigin=o.lastSelOrigin=null;;){if(i=s.pop(),!i.ranges){if(r)return void s.push(i)
break}if(ci(i,l),n&&!i.equals(e.sel))return void wi(e,i,{clearRedo:!1})
a=i}var u=[]
ci(a,l),l.push({changes:u,generation:o.generation}),o.generation=i.generation||++o.maxGeneration
for(var d=q(e,"beforeChange")||e.cm&&q(e.cm,"beforeChange"),p=function(n){var r=i.changes[n]
if(r.origin=t,d&&!Oi(e,r,!1))return s.length=0,{}
u.push(ri(e,r))
var o=n?Ur(e,r):m(s)
Ii(e,r,o,pi(e,r)),!n&&e.cm&&e.cm.scrollIntoView({from:r.from,to:Hr(r)})
var a=[]
Yr(e,function(e,t){t||f(a,e.history)!=-1||(Bi(e.history,r),a.push(e.history)),Ii(e,r,null,pi(e,r))})},h=i.changes.length-1;h>=0;--h){var g=p(h)
if(g)return g.v}}}}function Fi(e,t){if(0!=t&&(e.first+=t,e.sel=new zs(g(e.sel.ranges,function(e){return new Ns(se(e.anchor.line+t,e.anchor.ch),se(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){Ln(e.cm,e.first,e.first-t,t)
for(var n=e.cm.display,r=n.viewFrom;r<n.viewTo;r++)Tn(e.cm,r,"gutter")}}function Ii(e,t,n,r){if(e.cm&&!e.cm.curOp)return yr(e.cm,Ii)(e,t,n,r)
if(t.to.line<e.first)return void Fi(e,t.text.length-1-(t.to.line-t.from.line))
if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
Fi(e,i),t={from:se(e.first,0),to:se(t.to.line+i,t.to.ch),text:[m(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:se(o,J(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=ee(e,t.from,t.to),n||(n=Ur(e,t)),e.cm?Di(e.cm,t,r):Qr(e,t,r),_i(e,n,Ga),e.cantEdit&&Ti(e,se(e.firstLine(),0))&&(e.cantEdit=!1)}}function Di(e,t,n){var r=e.doc,i=e.display,o=t.from,a=t.to,s=!1,l=o.line
e.options.lineWrapping||(l=re(Ze(J(r,o.line))),r.iter(l,a.line+1,function(e){if(e==i.maxLine)return s=!0,!0})),r.sel.contains(t.from,t.to)>-1&&N(e),Qr(r,t,n,_n(e)),e.options.lineWrapping||(r.iter(l,o.line+t.text.length,function(e){var t=rt(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)}),s&&(e.curOp.updateMaxLine=!0)),Le(r,o.line),xr(e,400)
var c=t.text.length-(a.line-o.line)-1
t.full?Ln(e):o.line!=a.line||1!=t.text.length||Xr(e.doc,t)?Ln(e,o.line,a.line+1,c):Tn(e,o.line,"text")
var u=q(e,"changes"),d=q(e,"change")
if(d||u){var f={from:o,to:a,text:t.text,removed:t.removed,origin:t.origin}
d&&kt(e,"change",e,f),u&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(f)}e.display.selForContextMenu=null}function Pi(e,t,n,r,i){var o
r||(r=n),le(r,n)<0&&(o=[r,n],n=o[0],r=o[1]),"string"==typeof t&&(t=e.splitLines(t)),zi(e,{from:n,to:r,text:t,origin:i})}function Ri(e,t,n,r){n<e.line?e.line+=r:t<e.line&&(e.line=t,e.ch=0)}function ji(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i],a=!0
if(o.ranges){o.copied||(o=e[i]=o.deepCopy(),o.copied=!0)
for(var s=0;s<o.ranges.length;s++)Ri(o.ranges[s].anchor,t,n,r),Ri(o.ranges[s].head,t,n,r)}else{for(var l=0;l<o.changes.length;++l){var c=o.changes[l]
if(n<c.from.line)c.from=se(c.from.line+r,c.from.ch),c.to=se(c.to.line+r,c.to.ch)
else if(t<=c.to.line){a=!1
break}}a||(e.splice(0,i+1),i=0)}}}function Bi(e,t){var n=t.from.line,r=t.to.line,i=t.text.length-(r-n)-1
ji(e.done,n,r,i),ji(e.undone,n,r,i)}function Wi(e,t,n,r){var i=t,o=t
return"number"==typeof t?o=J(e,pe(e,t)):i=re(t),null==i?null:(r(o,i)&&e.cm&&Tn(e.cm,i,n),o)}function Hi(e){this.lines=e,this.parent=null
for(var t=0,n=0;n<e.length;++n)e[n].parent=this,t+=e[n].height
this.height=t}function $i(e){this.children=e
for(var t=0,n=0,r=0;r<e.length;++r){var i=e[r]
t+=i.chunkSize(),n+=i.height,i.parent=this}this.size=t,this.height=n,this.parent=null}function Ui(e,t,n){nt(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Xn(e,n)}function Ki(e,t,n,r){var i=new qs(e,n,r),o=e.cm
return o&&i.noHScroll&&(o.display.alignWidgets=!0),Wi(e,t,"widget",function(t){var n=t.widgets||(t.widgets=[])
if(null==i.insertAt?n.push(i):n.splice(Math.min(n.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!et(e,t)){var r=nt(t)<e.scrollTop
ne(t,t.height+qt(i)),r&&Xn(o,i.height),o.curOp.forceUpdate=!0}return!0}),o&&kt(o,"lineWidgetAdded",o,i,"number"==typeof t?t:re(t)),i}function Vi(e,t,n,r,o){if(r&&r.shared)return Gi(e,t,n,r,o)
if(e.cm&&!e.cm.curOp)return yr(e.cm,Vi)(e,t,n,r,o)
var a=new Is(e,o),s=le(t,n)
if(r&&u(r,a,!1),s>0||0==s&&a.clearWhenEmpty!==!1)return a
if(a.replacedWith&&(a.collapsed=!0,a.widgetNode=i("span",[a.replacedWith],"CodeMirror-widget"),r.handleMouseEvents||a.widgetNode.setAttribute("cm-ignore-events","true"),r.insertLeft&&(a.widgetNode.insertLeft=!0)),a.collapsed){if(Ge(e,t.line,t,n,a)||t.line!=n.line&&Ge(e,n.line,t,n,a))throw new Error("Inserting collapsed marker partially overlapping an existing one")
Ae()}a.addToHistory&&ai(e,{from:t,to:n,origin:"markText"},e.sel,NaN)
var l,c=t.line,d=e.cm
if(e.iter(c,n.line+1,function(e){d&&a.collapsed&&!d.options.lineWrapping&&Ze(e)==d.display.maxLine&&(l=!0),a.collapsed&&c!=t.line&&ne(e,0),Ne(e,new Ee(a,c==t.line?t.ch:null,c==n.line?n.ch:null)),++c}),a.collapsed&&e.iter(t.line,n.line+1,function(t){et(e,t)&&ne(t,0)}),a.clearOnEnter&&rs(a,"beforeCursorEnter",function(){return a.clear()}),a.readOnly&&(Te(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),a.collapsed&&(a.id=++Fs,a.atomic=!0),d){if(l&&(d.curOp.updateMaxLine=!0),a.collapsed)Ln(d,t.line,n.line+1)
else if(a.className||a.startStyle||a.endStyle||a.css||a.attributes||a.title)for(var f=t.line;f<=n.line;f++)Tn(d,f,"text")
a.atomic&&Si(d.doc),kt(d,"markerAdded",d,a)}return a}function Gi(e,t,n,r,i){r=u(r),r.shared=!1
var o=[Vi(e,t,n,r,i)],a=o[0],s=r.widgetNode
return Yr(e,function(e){s&&(r.widgetNode=s.cloneNode(!0)),o.push(Vi(e,he(e,t),he(e,n),r,i))
for(var l=0;l<e.linked.length;++l)if(e.linked[l].isParent)return
a=m(o)}),new Ds(o,a)}function Zi(e){return e.findMarks(se(e.first,0),e.clipPos(se(e.lastLine())),function(e){return e.parent})}function Xi(e,t){for(var n=0;n<t.length;n++){var r=t[n],i=r.find(),o=e.clipPos(i.from),a=e.clipPos(i.to)
if(le(o,a)){var s=Vi(e,o,a,r.primary,r.primary.type)
r.markers.push(s),s.parent=r}}}function Qi(e){for(var t=function(t){var n=e[t],r=[n.primary.doc]
Yr(n.primary.doc,function(e){return r.push(e)})
for(var i=0;i<n.markers.length;i++){var o=n.markers[i]
f(r,o.doc)==-1&&(o.parent=null,n.markers.splice(i--,1))}},n=0;n<e.length;n++)t(n)}function Yi(e){var t=this
if(to(t),!z(t,e)&&!Ft(t.display,e)){I(e),wa&&(js=+new Date)
var n=Sn(t,e,!0),r=e.dataTransfer.files
if(n&&!t.isReadOnly())if(r&&r.length&&window.FileReader&&window.File)for(var i=r.length,o=Array(i),a=0,s=function(){++a==i&&yr(t,function(){n=he(t.doc,n)
var e={from:n,to:n,text:t.doc.splitLines(o.filter(function(e){return null!=e}).join(t.doc.lineSeparator())),origin:"paste"}
zi(t.doc,e),xi(t.doc,Wr(he(t.doc,n),he(t.doc,Hr(e))))})()},l=function(e,n){if(t.options.allowDropFileTypes&&f(t.options.allowDropFileTypes,e.type)==-1)return void s()
var r=new FileReader
r.onerror=function(){return s()},r.onload=function(){var e=r.result
return/[\x00-\x08\x0e-\x1f]{2}/.test(e)?void s():(o[n]=e,void s())},r.readAsText(e)},c=0;c<r.length;c++)l(r[c],c)
else{if(t.state.draggingText&&t.doc.sel.contains(n)>-1)return t.state.draggingText(e),void setTimeout(function(){return t.display.input.focus()},20)
try{var u=e.dataTransfer.getData("Text")
if(u){var d
if(t.state.draggingText&&!t.state.draggingText.copy&&(d=t.listSelections()),_i(t.doc,Wr(n,n)),d)for(var p=0;p<d.length;++p)Pi(t.doc,"",d[p].anchor,d[p].head,"drag")
t.replaceSelection(u,"around","paste"),t.display.input.focus()}}catch(h){}}}}function Ji(e,t){if(wa&&(!e.state.draggingText||+new Date-js<100))return void R(t)
if(!z(e,t)&&!Ft(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!Ta)){var n=r("img",null,null,"position: fixed; left: 0; top: 0;")
n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",La&&(n.width=n.height=1,e.display.wrapper.appendChild(n),n._top=n.offsetTop),t.dataTransfer.setDragImage(n,0,0),La&&n.parentNode.removeChild(n)}}function eo(e,t){var i=Sn(e,t)
if(i){var o=document.createDocumentFragment()
Fn(e,i,o),e.display.dragCursor||(e.display.dragCursor=r("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),n(e.display.dragCursor,o)}}function to(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function no(e){if(document.getElementsByClassName){for(var t=document.getElementsByClassName("CodeMirror"),n=[],r=0;r<t.length;r++){var i=t[r].CodeMirror
i&&n.push(i)}n.length&&n[0].operation(function(){for(var t=0;t<n.length;t++)e(n[t])})}}function ro(){Bs||(io(),Bs=!0)}function io(){var e
rs(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,no(oo)},100))}),rs(window,"blur",function(){return no(Wn)})}function oo(e){var t=e.display
t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize()}function ao(e){var t=e.split(/-(?!$)/)
e=t[t.length-1]
for(var n,r,i,o,a=0;a<t.length-1;a++){var s=t[a]
if(/^(cmd|meta|m)$/i.test(s))o=!0
else if(/^a(lt)?$/i.test(s))n=!0
else if(/^(c|ctrl|control)$/i.test(s))r=!0
else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s)
i=!0}}return n&&(e="Alt-"+e),r&&(e="Ctrl-"+e),o&&(e="Cmd-"+e),i&&(e="Shift-"+e),e}function so(e){var t={}
for(var n in e)if(e.hasOwnProperty(n)){var r=e[n]
if(/^(name|fallthrough|(de|at)tach)$/.test(n))continue
if("..."==r){delete e[n]
continue}for(var i=g(n.split(" "),ao),o=0;o<i.length;o++){var a=void 0,s=void 0
o==i.length-1?(s=i.join(" "),a=r):(s=i.slice(0,o+1).join(" "),a="...")
var l=t[s]
if(l){if(l!=a)throw new Error("Inconsistent bindings for "+s)}else t[s]=a}delete e[n]}for(var c in t)e[c]=t[c]
return e}function lo(e,t,n,r){t=po(t)
var i=t.call?t.call(e,r):t[e]
if(i===!1)return"nothing"
if("..."===i)return"multi"
if(null!=i&&n(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return lo(e,t.fallthrough,n,r)
for(var o=0;o<t.fallthrough.length;o++){var a=lo(e,t.fallthrough[o],n,r)
if(a)return a}}}function co(e){var t="string"==typeof e?e:Ws[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function uo(e,t,n){var r=e
return t.altKey&&"Alt"!=r&&(e="Alt-"+e),(Ra?t.metaKey:t.ctrlKey)&&"Ctrl"!=r&&(e="Ctrl-"+e),(Ra?t.ctrlKey:t.metaKey)&&"Cmd"!=r&&(e="Cmd-"+e),!n&&t.shiftKey&&"Shift"!=r&&(e="Shift-"+e),e}function fo(e,t){if(La&&34==e.keyCode&&e["char"])return!1
var n=Ws[e.keyCode]
return null!=n&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(n=e.code),uo(n,e,t))}function po(e){return"string"==typeof e?Ks[e]:e}function ho(e,t){for(var n=e.doc.sel.ranges,r=[],i=0;i<n.length;i++){for(var o=t(n[i]);r.length&&le(o.from,m(r).to)<=0;){var a=r.pop()
if(le(a.from,o.from)<0){o.from=a.from
break}}r.push(o)}vr(e,function(){for(var t=r.length-1;t>=0;t--)Pi(e.doc,"",r[t].from,r[t].to,"+delete")
Qn(e)})}function mo(e,t,n){var r=C(e.text,t+n,n)
return r<0||r>e.text.length?null:r}function go(e,t,n){var r=mo(e,t.ch,n)
return null==r?null:new se(t.line,r,n<0?"after":"before")}function vo(e,t,n,r,i){if(e){"rtl"==t.doc.direction&&(i=-i)
var o=T(n,t.doc.direction)
if(o){var a,s=i<0?m(o):o[0],l=i<0==(1==s.level),c=l?"after":"before"
if(s.level>0||"rtl"==t.doc.direction){var u=Vt(t,n)
a=i<0?n.text.length-1:0
var d=Gt(t,u,a).top
a=S(function(e){return Gt(t,u,e).top==d},i<0==(1==s.level)?s.from:s.to-1,a),"before"==c&&(a=mo(n,a,1))}else a=i<0?s.to:s.from
return new se(r,a,c)}}return new se(r,i<0?n.text.length:0,i<0?"before":"after")}function yo(e,t,n,r){var i=T(t,e.doc.direction)
if(!i)return go(t,n,r)
n.ch>=t.text.length?(n.ch=t.text.length,n.sticky="before"):n.ch<=0&&(n.ch=0,n.sticky="after")
var o=L(i,n.ch,n.sticky),a=i[o]
if("ltr"==e.doc.direction&&a.level%2==0&&(r>0?a.to>n.ch:a.from<n.ch))return go(t,n,r)
var s,l=function(e,n){return mo(t,e instanceof se?e.ch:e,n)},c=function(n){return e.options.lineWrapping?(s=s||Vt(e,t),hn(e,t,s,n)):{begin:0,end:t.text.length}},u=c("before"==n.sticky?l(n,-1):n.ch)
if("rtl"==e.doc.direction||1==a.level){var d=1==a.level==r<0,f=l(n,d?1:-1)
if(null!=f&&(d?f<=a.to&&f<=u.end:f>=a.from&&f>=u.begin)){var p=d?"before":"after"
return new se(n.line,f,p)}}var h=function(e,t,r){for(var o=function(e,t){return t?new se(n.line,l(e,1),"before"):new se(n.line,e,"after")};e>=0&&e<i.length;e+=t){var a=i[e],s=t>0==(1!=a.level),c=s?r.begin:l(r.end,-1)
if(a.from<=c&&c<a.to)return o(c,s)
if(c=s?a.from:l(a.to,-1),r.begin<=c&&c<r.end)return o(c,s)}},m=h(o+r,r,u)
if(m)return m
var g=r>0?u.end:l(u.begin,-1)
return null==g||r>0&&g==t.text.length||!(m=h(r>0?0:i.length-1,r,c(g)))?null:m}function bo(e,t){var n=J(e.doc,t),r=Ze(n)
return r!=n&&(t=re(r)),vo(!0,e,r,t,1)}function ko(e,t){var n=J(e.doc,t),r=Xe(n)
return r!=n&&(t=re(r)),vo(!0,e,n,t,-1)}function xo(e,t){var n=bo(e,t.line),r=J(e.doc,n.line),i=T(r,e.doc.direction)
if(!i||0==i[0].level){var o=Math.max(n.ch,r.text.search(/\S/)),a=t.line==n.line&&t.ch<=o&&t.ch
return se(n.line,a?0:o,n.sticky)}return n}function wo(e,t,n){if("string"==typeof t&&(t=Vs[t],!t))return!1
e.display.input.ensurePolled()
var r=e.display.shift,i=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),n&&(e.display.shift=!1),i=t(e)!=Va}finally{e.display.shift=r,e.state.suppressEdits=!1}return i}function _o(e,t,n){for(var r=0;r<e.state.keyMaps.length;r++){var i=lo(t,e.state.keyMaps[r],n,e)
if(i)return i}return e.options.extraKeys&&lo(t,e.options.extraKeys,n,e)||lo(t,e.options.keyMap,n,e)}function Co(e,t,n,r){var i=e.state.keySeq
if(i){if(co(t))return"handled"
if(/\'$/.test(t)?e.state.keySeq=null:Gs.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),So(e,i+" "+t,n,r))return!0}return So(e,t,n,r)}function So(e,t,n,r){var i=_o(e,t,r)
return"multi"==i&&(e.state.keySeq=t),"handled"==i&&kt(e,"keyHandled",e,t,n),"handled"!=i&&"multi"!=i||(I(n),Pn(e)),!!i}function Mo(e,t){var n=fo(t,!0)
return!!n&&(t.shiftKey&&!e.state.keySeq?Co(e,"Shift-"+n,t,function(t){return wo(e,t,!0)})||Co(e,n,t,function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return wo(e,t)}):Co(e,n,t,function(t){return wo(e,t)}))}function Lo(e,t,n){return Co(e,"'"+n+"'",t,function(t){return wo(e,t,!0)})}function To(e){var t=this
if(!(e.target&&e.target!=t.display.input.getField()||(t.curOp.focus=a(),z(t,e)))){wa&&_a<11&&27==e.keyCode&&(e.returnValue=!1)
var n=e.keyCode
t.display.shift=16==n||e.shiftKey
var r=Mo(t,e)
La&&(Zs=r?n:null,!r&&88==n&&!ss&&(qa?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),ya&&!qa&&!r&&46==n&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),18!=n||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||Ao(t)}}function Ao(e){function t(e){18!=e.keyCode&&e.altKey||(Ba(n,"CodeMirror-crosshair"),E(document,"keyup",t),E(document,"mouseover",t))}var n=e.display.lineDiv
s(n,"CodeMirror-crosshair"),rs(document,"keyup",t),rs(document,"mouseover",t)}function Eo(e){16==e.keyCode&&(this.doc.sel.shift=!1),z(this,e)}function Oo(e){var t=this
if(!(e.target&&e.target!=t.display.input.getField()||Ft(t.display,e)||z(t,e)||e.ctrlKey&&!e.altKey||qa&&e.metaKey)){var n=e.keyCode,r=e.charCode
if(La&&n==Zs)return Zs=null,void I(e)
if(!La||e.which&&!(e.which<10)||!Mo(t,e)){var i=String.fromCharCode(null==r?n:r)
"\b"!=i&&(Lo(t,e,i)||t.display.input.onKeyPress(e))}}}function zo(e,t){var n=+new Date
return Js&&Js.compare(n,e,t)?(Ys=Js=null,"triple"):Ys&&Ys.compare(n,e,t)?(Js=new Qs(n,e,t),Ys=null,"double"):(Ys=new Qs(n,e,t),Js=null,"single")}function No(e){var t=this,n=t.display
if(!(z(t,e)||n.activeTouch&&n.input.supportsTouch())){if(n.input.ensurePolled(),n.shift=e.shiftKey,Ft(n,e))return void(Ca||(n.scroller.draggable=!1,setTimeout(function(){return n.scroller.draggable=!0},100)))
if(!Wo(t,e)){var r=Sn(t,e),i=B(e),o=r?zo(r,i):"single"
window.focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),r&&qo(t,i,r,o,e)||(1==i?r?Io(t,r,o,e):j(e)==n.scroller&&I(e):2==i?(r&&gi(t.doc,r),setTimeout(function(){return n.input.focus()},20)):3==i&&(ja?t.display.input.onContextMenu(e):jn(t)))}}}function qo(e,t,n,r,i){var o="Click"
return"double"==r?o="Double"+o:"triple"==r&&(o="Triple"+o),o=(1==t?"Left":2==t?"Middle":"Right")+o,Co(e,uo(o,i),i,function(t){if("string"==typeof t&&(t=Vs[t]),!t)return!1
var r=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),r=t(e,n)!=Va}finally{e.state.suppressEdits=!1}return r})}function Fo(e,t,n){var r=e.getOption("configureMouse"),i=r?r(e,t,n):{}
if(null==i.unit){var o=Fa?n.shiftKey&&n.metaKey:n.altKey
i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}return(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||n.shiftKey),null==i.addNew&&(i.addNew=qa?n.metaKey:n.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(qa?n.altKey:n.ctrlKey)),i}function Io(e,t,n,r){wa?setTimeout(c(Rn,e),0):e.curOp.focus=a()
var i,o=Fo(e,n,r),s=e.doc.sel
e.options.dragDrop&&is&&!e.isReadOnly()&&"single"==n&&(i=s.contains(t))>-1&&(le((i=s.ranges[i]).from(),t)<0||t.xRel>0)&&(le(i.to(),t)>0||t.xRel<0)?Do(e,r,t,o):Ro(e,r,t,o)}function Do(e,t,n,r){var i=e.display,o=!1,a=yr(e,function(t){Ca&&(i.scroller.draggable=!1),e.state.draggingText=!1,E(i.wrapper.ownerDocument,"mouseup",a),E(i.wrapper.ownerDocument,"mousemove",s),E(i.scroller,"dragstart",l),E(i.scroller,"drop",a),o||(I(t),r.addNew||gi(e.doc,n,null,null,r.extend),Ca&&!Ta||wa&&9==_a?setTimeout(function(){i.wrapper.ownerDocument.body.focus({preventScroll:!0}),i.input.focus()},20):i.input.focus())}),s=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},l=function(){return o=!0}
Ca&&(i.scroller.draggable=!0),e.state.draggingText=a,a.copy=!r.moveOnDrag,i.scroller.dragDrop&&i.scroller.dragDrop(),rs(i.wrapper.ownerDocument,"mouseup",a),rs(i.wrapper.ownerDocument,"mousemove",s),rs(i.scroller,"dragstart",l),rs(i.scroller,"drop",a),jn(e),setTimeout(function(){return i.input.focus()},20)}function Po(e,t,n){if("char"==n)return new Ns(t,t)
if("word"==n)return e.findWordAt(t)
if("line"==n)return new Ns(se(t.line,0),he(e.doc,se(t.line+1,0)))
var r=n(e,t)
return new Ns(r.from,r.to)}function Ro(e,t,n,r){function i(t){if(0!=le(v,t))if(v=t,"rectangle"==r.unit){for(var i=[],o=e.options.tabSize,a=d(J(c,n.line).text,n.ch,o),s=d(J(c,t.line).text,t.ch,o),l=Math.min(a,s),m=Math.max(a,s),g=Math.min(n.line,t.line),y=Math.min(e.lastLine(),Math.max(n.line,t.line));g<=y;g++){var b=J(c,g).text,k=p(b,l,o)
l==m?i.push(new Ns(se(g,k),se(g,k))):b.length>k&&i.push(new Ns(se(g,k),se(g,p(b,m,o))))}i.length||i.push(new Ns(n,n)),wi(c,Br(e,h.ranges.slice(0,f).concat(i),f),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var x,w=u,_=Po(e,t,r.unit),C=w.anchor
le(_.anchor,C)>0?(x=_.head,C=fe(w.from(),_.anchor)):(x=_.anchor,C=de(w.to(),_.head))
var S=h.ranges.slice(0)
S[f]=jo(e,new Ns(he(c,C),x)),wi(c,Br(e,S,f),Za)}}function o(t){var n=++b,s=Sn(e,t,!0,"rectangle"==r.unit)
if(s)if(0!=le(s,v)){e.curOp.focus=a(),i(s)
var u=Un(l,c);(s.line>=u.to||s.line<u.from)&&setTimeout(yr(e,function(){b==n&&o(t)}),150)}else{var d=t.clientY<y.top?-20:t.clientY>y.bottom?20:0
d&&setTimeout(yr(e,function(){b==n&&(l.scroller.scrollTop+=d,o(t))}),50)}}function s(t){e.state.selectingText=!1,b=1/0,t&&(I(t),l.input.focus()),E(l.wrapper.ownerDocument,"mousemove",k),E(l.wrapper.ownerDocument,"mouseup",x),c.history.lastSelOrigin=null}var l=e.display,c=e.doc
I(t)
var u,f,h=c.sel,m=h.ranges
if(r.addNew&&!r.extend?(f=c.sel.contains(n),u=f>-1?m[f]:new Ns(n,n)):(u=c.sel.primary(),f=c.sel.primIndex),"rectangle"==r.unit)r.addNew||(u=new Ns(n,n)),n=Sn(e,t,!0,!0),f=-1
else{var g=Po(e,n,r.unit)
u=r.extend?mi(u,g.anchor,g.head,r.extend):g}r.addNew?f==-1?(f=m.length,wi(c,Br(e,m.concat([u]),f),{scroll:!1,origin:"*mouse"})):m.length>1&&m[f].empty()&&"char"==r.unit&&!r.extend?(wi(c,Br(e,m.slice(0,f).concat(m.slice(f+1)),0),{scroll:!1,origin:"*mouse"}),h=c.sel):yi(c,f,u,Za):(f=0,wi(c,new zs([u],0),Za),h=c.sel)
var v=n,y=l.wrapper.getBoundingClientRect(),b=0,k=yr(e,function(e){0!==e.buttons&&B(e)?o(e):s(e)}),x=yr(e,s)
e.state.selectingText=x,rs(l.wrapper.ownerDocument,"mousemove",k),rs(l.wrapper.ownerDocument,"mouseup",x)}function jo(e,t){var n=t.anchor,r=t.head,i=J(e.doc,n.line)
if(0==le(n,r)&&n.sticky==r.sticky)return t
var o=T(i)
if(!o)return t
var a=L(o,n.ch,n.sticky),s=o[a]
if(s.from!=n.ch&&s.to!=n.ch)return t
var l=a+(s.from==n.ch==(1!=s.level)?0:1)
if(0==l||l==o.length)return t
var c
if(r.line!=n.line)c=(r.line-n.line)*("ltr"==e.doc.direction?1:-1)>0
else{var u=L(o,r.ch,r.sticky),d=u-a||(r.ch-n.ch)*(1==s.level?-1:1)
c=u==l-1||u==l?d<0:d>0}var f=o[l+(c?-1:0)],p=c==(1==f.level),h=p?f.from:f.to,m=p?"after":"before"
return n.ch==h&&n.sticky==m?t:new Ns(new se(n.line,h,m),r)}function Bo(e,t,n,r){var i,o
if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY
else try{i=t.clientX,o=t.clientY}catch(a){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
r&&I(t)
var s=e.display,l=s.lineDiv.getBoundingClientRect()
if(o>l.bottom||!q(e,n))return P(t)
o-=l.top-s.viewOffset
for(var c=0;c<e.display.gutterSpecs.length;++c){var u=s.gutters.childNodes[c]
if(u&&u.getBoundingClientRect().right>=i){var d=ie(e.doc,o),f=e.display.gutterSpecs[c]
return O(e,n,e,d,f.className,t),P(t)}}}function Wo(e,t){return Bo(e,t,"gutterClick",!0)}function Ho(e,t){Ft(e.display,t)||$o(e,t)||z(e,t,"contextmenu")||ja||e.display.input.onContextMenu(t)}function $o(e,t){return!!q(e,"gutterContextMenu")&&Bo(e,t,"gutterContextMenu",!1)}function Uo(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),tn(e)}function Ko(e){function t(t,r,i,o){e.defaults[t]=r,i&&(n[t]=o?function(e,t,n){n!=el&&i(e,t,n)}:i)}var n=e.optionHandlers
e.defineOption=t,e.Init=el,t("value","",function(e,t){return e.setValue(t)},!0),t("mode",null,function(e,t){e.doc.modeOption=t,Gr(e)},!0),t("indentUnit",2,Gr,!0),t("indentWithTabs",!1),t("smartIndent",!0),t("tabSize",4,function(e){Zr(e),tn(e),Ln(e)},!0),t("lineSeparator",null,function(e,t){if(e.doc.lineSep=t,t){var n=[],r=e.doc.first
e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i)
if(o==-1)break
i=o+t.length,n.push(se(r,o))}r++})
for(var i=n.length-1;i>=0;i--)Pi(e.doc,t,n[i],se(n[i].line,n[i].ch+t.length))}}),t("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,function(e,t,n){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),n!=el&&e.refresh()}),t("specialCharPlaceholder",ct,function(e){return e.refresh()},!0),t("electricChars",!0),t("inputStyle",Na?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),t("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),t("autocorrect",!1,function(e,t){return e.getInputField().autocorrect=t},!0),t("autocapitalize",!1,function(e,t){return e.getInputField().autocapitalize=t},!0),t("rtlMoveVisually",!Ia),t("wholeLineUpdateBefore",!0),t("theme","default",function(e){Uo(e),Ir(e)},!0),t("keyMap","default",function(e,t,n){var r=po(t),i=n!=el&&po(n)
i&&i.detach&&i.detach(e,r),r.attach&&r.attach(e,i||null)}),t("extraKeys",null),t("configureMouse",null),t("lineWrapping",!1,Go,!0),t("gutters",[],function(e,t){e.display.gutterSpecs=qr(t,e.options.lineNumbers),Ir(e)},!0),t("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?wn(e.display)+"px":"0",e.refresh()},!0),t("coverGutterNextToScrollbar",!1,function(e){return ar(e)},!0),t("scrollbarStyle","native",function(e){lr(e),ar(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),t("lineNumbers",!1,function(e,t){e.display.gutterSpecs=qr(e.options.gutters,t),Ir(e)},!0),t("firstLineNumber",1,Ir,!0),t("lineNumberFormatter",function(e){return e},Ir,!0),t("showCursorWhenSelecting",!1,Nn,!0),t("resetSelectionOnContextMenu",!0),t("lineWiseCopyCut",!0),t("pasteLinesPerSelection",!0),t("selectionsMayTouch",!1),t("readOnly",!1,function(e,t){"nocursor"==t&&(Wn(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)}),t("screenReaderLabel",null,function(e,t){t=""===t?null:t,e.display.input.screenReaderLabelChanged(t)}),t("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),t("dragDrop",!0,Vo),t("allowDropFileTypes",null),t("cursorBlinkRate",530),t("cursorScrollMargin",0),t("cursorHeight",1,Nn,!0),t("singleCursorHeightPerLine",!0,Nn,!0),t("workTime",100),t("workDelay",100),t("flattenSpans",!0,Zr,!0),t("addModeClass",!1,Zr,!0),t("pollInterval",100),t("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),t("historyEventDelay",1250),t("viewportMargin",10,function(e){return e.refresh()},!0),t("maxHighlightLength",1e4,Zr,!0),t("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),t("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),t("autofocus",null),t("direction","ltr",function(e,t){return e.doc.setDirection(t)},!0),t("phrases",null)}function Vo(e,t,n){var r=n&&n!=el
if(!t!=!r){var i=e.display.dragFunctions,o=t?rs:E
o(e.display.scroller,"dragstart",i.start),o(e.display.scroller,"dragenter",i.enter),o(e.display.scroller,"dragover",i.over),o(e.display.scroller,"dragleave",i.leave),o(e.display.scroller,"drop",i.drop)}}function Go(e){e.options.lineWrapping?(s(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Ba(e.display.wrapper,"CodeMirror-wrap"),it(e)),Cn(e),Ln(e),tn(e),setTimeout(function(){return ar(e)},100)}function Zo(e,t){var n=this
if(!(this instanceof Zo))return new Zo(e,t)
this.options=t=t?u(t):{},u(tl,t,!1)
var r=t.value
"string"==typeof r?r=new Rs(r,t.mode,null,t.lineSeparator,t.direction):t.mode&&(r.modeOption=t.mode),this.doc=r
var i=new Zo.inputStyles[t.inputStyle](this),o=this.display=new Dr(e,r,i,t)
o.wrapper.CodeMirror=this,Uo(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),lr(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new Ha,keySeq:null,specialChars:null},t.autofocus&&!Na&&o.input.focus(),wa&&_a<11&&setTimeout(function(){return n.display.input.reset(!0)},20),Xo(this),ro(),cr(this),this.curOp.forceUpdate=!0,Jr(this,r),t.autofocus&&!Na||this.hasFocus()?setTimeout(c(Bn,this),20):Wn(this)
for(var a in nl)nl.hasOwnProperty(a)&&nl[a](this,t[a],el)
Nr(this),t.finishInit&&t.finishInit(this)
for(var s=0;s<rl.length;++s)rl[s](this)
ur(this),Ca&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}function Xo(e){function t(){i.activeTouch&&(o=setTimeout(function(){return i.activeTouch=null},1e3),a=i.activeTouch,a.end=+new Date)}function n(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}function r(e,t){if(null==t.left)return!0
var n=t.left-e.left,r=t.top-e.top
return n*n+r*r>400}var i=e.display
rs(i.scroller,"mousedown",yr(e,No)),wa&&_a<11?rs(i.scroller,"dblclick",yr(e,function(t){if(!z(e,t)){var n=Sn(e,t)
if(n&&!Wo(e,t)&&!Ft(e.display,t)){I(t)
var r=e.findWordAt(n)
gi(e.doc,r.anchor,r.head)}}})):rs(i.scroller,"dblclick",function(t){return z(e,t)||I(t)}),rs(i.scroller,"contextmenu",function(t){return Ho(e,t)}),rs(i.input.getField(),"contextmenu",function(t){i.scroller.contains(t.target)||Ho(e,t)})
var o,a={end:0}
rs(i.scroller,"touchstart",function(t){if(!z(e,t)&&!n(t)&&!Wo(e,t)){i.input.ensurePolled(),clearTimeout(o)
var r=+new Date
i.activeTouch={start:r,moved:!1,prev:r-a.end<=300?a:null},1==t.touches.length&&(i.activeTouch.left=t.touches[0].pageX,i.activeTouch.top=t.touches[0].pageY)}}),rs(i.scroller,"touchmove",function(){i.activeTouch&&(i.activeTouch.moved=!0)}),rs(i.scroller,"touchend",function(n){var o=i.activeTouch
if(o&&!Ft(i,n)&&null!=o.left&&!o.moved&&new Date-o.start<300){var a,s=e.coordsChar(i.activeTouch,"page")
a=!o.prev||r(o,o.prev)?new Ns(s,s):!o.prev.prev||r(o,o.prev.prev)?e.findWordAt(s):new Ns(se(s.line,0),he(e.doc,se(s.line+1,0))),e.setSelection(a.anchor,a.head),e.focus(),I(n)}t()}),rs(i.scroller,"touchcancel",t),rs(i.scroller,"scroll",function(){i.scroller.clientHeight&&(nr(e,i.scroller.scrollTop),ir(e,i.scroller.scrollLeft,!0),O(e,"scroll",e))}),rs(i.scroller,"mousewheel",function(t){return jr(e,t)}),rs(i.scroller,"DOMMouseScroll",function(t){return jr(e,t)}),rs(i.wrapper,"scroll",function(){return i.wrapper.scrollTop=i.wrapper.scrollLeft=0}),i.dragFunctions={enter:function(t){z(e,t)||R(t)},over:function(t){z(e,t)||(eo(e,t),R(t))},start:function(t){return Ji(e,t)},drop:yr(e,Yi),leave:function(t){z(e,t)||to(e)}}
var s=i.input.getField()
rs(s,"keyup",function(t){return Eo.call(e,t)}),rs(s,"keydown",yr(e,To)),rs(s,"keypress",yr(e,Oo)),rs(s,"focus",function(t){return Bn(e,t)}),rs(s,"blur",function(t){return Wn(e,t)})}function Qo(e,t,n,r){var i,o=e.doc
null==n&&(n="add"),"smart"==n&&(o.mode.indent?i=be(e,t).state:n="prev")
var a=e.options.tabSize,s=J(o,t),l=d(s.text,null,a)
s.stateAfter&&(s.stateAfter=null)
var c,u=s.text.match(/^\s*/)[0]
if(r||/\S/.test(s.text)){if("smart"==n&&(c=o.mode.indent(i,s.text.slice(u.length),s.text),c==Va||c>150)){if(!r)return
n="prev"}}else c=0,n="not"
"prev"==n?c=t>o.first?d(J(o,t-1).text,null,a):0:"add"==n?c=l+e.options.indentUnit:"subtract"==n?c=l-e.options.indentUnit:"number"==typeof n&&(c=l+n),c=Math.max(0,c)
var f="",p=0
if(e.options.indentWithTabs)for(var m=Math.floor(c/a);m;--m)p+=a,f+="\t"
if(p<c&&(f+=h(c-p)),f!=u)return Pi(o,f,se(t,0),se(t,u.length),"+input"),s.stateAfter=null,!0
for(var g=0;g<o.sel.ranges.length;g++){var v=o.sel.ranges[g]
if(v.head.line==t&&v.head.ch<u.length){var y=se(t,u.length)
yi(o,g,new Ns(y,y))
break}}}function Yo(e){il=e}function Jo(e,t,n,r,i){var o=e.doc
e.display.shift=!1,r||(r=o.sel)
var a=+new Date-200,s="paste"==i||e.state.pasteIncoming>a,l=os(t),c=null
if(s&&r.ranges.length>1)if(il&&il.text.join("\n")==t){if(r.ranges.length%il.text.length==0){c=[]
for(var u=0;u<il.text.length;u++)c.push(o.splitLines(il.text[u]))}}else l.length==r.ranges.length&&e.options.pasteLinesPerSelection&&(c=g(l,function(e){return[e]}))
for(var d=e.curOp.updateInput,f=r.ranges.length-1;f>=0;f--){var p=r.ranges[f],h=p.from(),v=p.to()
p.empty()&&(n&&n>0?h=se(h.line,h.ch-n):e.state.overwrite&&!s?v=se(v.line,Math.min(J(o,v.line).text.length,v.ch+m(l).length)):s&&il&&il.lineWise&&il.text.join("\n")==l.join("\n")&&(h=v=se(h.line,0)))
var y={from:h,to:v,text:c?c[f%c.length]:l,origin:i||(s?"paste":e.state.cutIncoming>a?"cut":"+input")}
zi(e.doc,y),kt(e,"inputRead",e,y)}t&&!s&&ta(e,t),Qn(e),e.curOp.updateInput<2&&(e.curOp.updateInput=d),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function ea(e,t){var n=e.clipboardData&&e.clipboardData.getData("Text")
if(n)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||vr(t,function(){return Jo(t,n,0,null,"paste")}),!0}function ta(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var n=e.doc.sel,r=n.ranges.length-1;r>=0;r--){var i=n.ranges[r]
if(!(i.head.ch>100||r&&n.ranges[r-1].head.line==i.head.line)){var o=e.getModeAt(i.head),a=!1
if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(t.indexOf(o.electricChars.charAt(s))>-1){a=Qo(e,i.head.line,"smart")
break}}else o.electricInput&&o.electricInput.test(J(e.doc,i.head.line).text.slice(0,i.head.ch))&&(a=Qo(e,i.head.line,"smart"))
a&&kt(e,"electricInput",e,i.head.line)}}}function na(e){for(var t=[],n=[],r=0;r<e.doc.sel.ranges.length;r++){var i=e.doc.sel.ranges[r].head.line,o={anchor:se(i,0),head:se(i+1,0)}
n.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:n}}function ra(e,t,n,r){e.setAttribute("autocorrect",n?"":"off"),e.setAttribute("autocapitalize",r?"":"off"),e.setAttribute("spellcheck",!!t)}function ia(){var e=r("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=r("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return Ca?e.style.width="1000px":e.setAttribute("wrap","off"),Oa&&(e.style.border="1px solid black"),ra(e),t}function oa(e){var t=e.optionHandlers,n=e.helpers={}
e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,n){var r=this.options,i=r[e]
r[e]==n&&"mode"!=e||(r[e]=n,t.hasOwnProperty(e)&&yr(this,t[e])(this,n,i),O(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](po(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,n=0;n<t.length;++n)if(t[n]==e||t[n].name==e)return t.splice(n,1),!0},addOverlay:br(function(t,n){var r=t.token?t:e.getMode(this.options,t)
if(r.startState)throw new Error("Overlays may not be stateful.")
v(this.state.overlays,{mode:r,modeSpec:t,opaque:n&&n.opaque,priority:n&&n.priority||0},function(e){return e.priority}),this.state.modeGen++,Ln(this)}),removeOverlay:br(function(e){for(var t=this.state.overlays,n=0;n<t.length;++n){var r=t[n].modeSpec
if(r==e||"string"==typeof e&&r.name==e)return t.splice(n,1),this.state.modeGen++,void Ln(this)}}),indentLine:br(function(e,t,n){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),oe(this.doc,e)&&Qo(this,e,t,n)}),indentSelection:br(function(e){for(var t=this.doc.sel.ranges,n=-1,r=0;r<t.length;r++){var i=t[r]
if(i.empty())i.head.line>n&&(Qo(this,i.head.line,e,!0),n=i.head.line,r==this.doc.sel.primIndex&&Qn(this))
else{var o=i.from(),a=i.to(),s=Math.max(n,o.line)
n=Math.min(this.lastLine(),a.line-(a.ch?0:1))+1
for(var l=s;l<n;++l)Qo(this,l,e)
var c=this.doc.sel.ranges
0==o.ch&&t.length==c.length&&c[r].from().ch>0&&yi(this.doc,r,new Ns(o,c[r].to()),Ga)}}}),getTokenAt:function(e,t){return _e(this,e,t)},getLineTokens:function(e,t){return _e(this,se(e),t,!0)},getTokenTypeAt:function(e){e=he(this.doc,e)
var t,n=ye(this,J(this.doc,e.line)),r=0,i=(n.length-1)/2,o=e.ch
if(0==o)t=n[2]
else for(;;){var a=r+i>>1
if((a?n[2*a-1]:0)>=o)i=a
else{if(!(n[2*a+1]<o)){t=n[2*a+2]
break}r=a+1}}var s=t?t.indexOf("overlay "):-1
return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(t){var n=this.doc.mode
return n.innerMode?e.innerMode(n,this.getTokenAt(t).state).mode:n},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var r=[]
if(!n.hasOwnProperty(t))return r
var i=n[t],o=this.getModeAt(e)
if("string"==typeof o[t])i[o[t]]&&r.push(i[o[t]])
else if(o[t])for(var a=0;a<o[t].length;a++){var s=i[o[t][a]]
s&&r.push(s)}else o.helperType&&i[o.helperType]?r.push(i[o.helperType]):i[o.name]&&r.push(i[o.name])
for(var l=0;l<i._global.length;l++){var c=i._global[l]
c.pred(o,this)&&f(r,c.val)==-1&&r.push(c.val)}return r},getStateAfter:function(e,t){var n=this.doc
return e=pe(n,null==e?n.first+n.size-1:e),be(this,e+1,t).state},cursorCoords:function(e,t){var n,r=this.doc.sel.primary()
return n=null==e?r.head:"object"==typeof e?he(this.doc,e):e?r.from():r.to(),cn(this,n,t||"page")},charCoords:function(e,t){return ln(this,he(this.doc,e),t||"page")},coordsChar:function(e,t){return e=sn(this,e,t||"page"),fn(this,e.left,e.top)},lineAtHeight:function(e,t){return e=sn(this,{top:e,left:0},t||"page").top,ie(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,n){var r,i=!1
if("number"==typeof e){var o=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),r=J(this.doc,e)}else r=e
return an(this,r,{top:0,left:0},t||"page",n||i).top+(i?this.doc.height-nt(r):0)},defaultTextHeight:function(){return bn(this.display)},defaultCharWidth:function(){return kn(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,n,r,i){var o=this.display
e=cn(this,he(this.doc,e))
var a=e.bottom,s=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),o.sizer.appendChild(t),"over"==r)a=e.top
else if("above"==r||"near"==r){var l=Math.max(o.wrapper.clientHeight,this.doc.height),c=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);("above"==r||e.bottom+t.offsetHeight>l)&&e.top>t.offsetHeight?a=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=l&&(a=e.bottom),s+t.offsetWidth>c&&(s=c-t.offsetWidth)}t.style.top=a+"px",t.style.left=t.style.right="","right"==i?(s=o.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?s=0:"middle"==i&&(s=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=s+"px"),n&&Gn(this,{left:s,top:a,right:s+t.offsetWidth,bottom:a+t.offsetHeight})},triggerOnKeyDown:br(To),triggerOnKeyPress:br(Oo),triggerOnKeyUp:Eo,triggerOnMouseDown:br(No),execCommand:function(e){if(Vs.hasOwnProperty(e))return Vs[e].call(null,this)},triggerElectric:br(function(e){ta(this,e)}),findPosH:function(e,t,n,r){var i=1
t<0&&(i=-1,t=-t)
for(var o=he(this.doc,e),a=0;a<t&&(o=aa(this.doc,o,i,n,r),!o.hitSide);++a);return o},moveH:br(function(e,t){var n=this
this.extendSelectionsBy(function(r){return n.display.shift||n.doc.extend||r.empty()?aa(n.doc,r.head,e,t,n.options.rtlMoveVisually):e<0?r.from():r.to()},Xa)}),deleteH:br(function(e,t){var n=this.doc.sel,r=this.doc
n.somethingSelected()?r.replaceSelection("",null,"+delete"):ho(this,function(n){var i=aa(r,n.head,e,t,!1)
return e<0?{from:i,to:n.head}:{from:n.head,to:i}})}),findPosV:function(e,t,n,r){var i=1,o=r
t<0&&(i=-1,t=-t)
for(var a=he(this.doc,e),s=0;s<t;++s){var l=cn(this,a,"div")
if(null==o?o=l.left:l.left=o,a=sa(this,l,i,n),a.hitSide)break}return a},moveV:br(function(e,t){var n=this,r=this.doc,i=[],o=!this.display.shift&&!r.extend&&r.sel.somethingSelected()
if(r.extendSelectionsBy(function(a){if(o)return e<0?a.from():a.to()
var s=cn(n,a.head,"div")
null!=a.goalColumn&&(s.left=a.goalColumn),i.push(s.left)
var l=sa(n,s,e,t)
return"page"==t&&a==r.sel.primary()&&Xn(n,ln(n,l,"div").top-s.top),l},Xa),i.length)for(var a=0;a<r.sel.ranges.length;a++)r.sel.ranges[a].goalColumn=i[a]}),findWordAt:function(e){var t=this.doc,n=J(t,e.line).text,r=e.ch,i=e.ch
if(n){var o=this.getHelper(e,"wordChars")
"before"!=e.sticky&&i!=n.length||!r?++i:--r
for(var a=n.charAt(r),s=x(a,o)?function(e){return x(e,o)}:/\s/.test(a)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!x(e)};r>0&&s(n.charAt(r-1));)--r
for(;i<n.length&&s(n.charAt(i));)++i}return new Ns(se(e.line,r),se(e.line,i))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?s(this.display.cursorDiv,"CodeMirror-overwrite"):Ba(this.display.cursorDiv,"CodeMirror-overwrite"),O(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==a()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:br(function(e,t){Yn(this,e,t)}),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Rt(this)-this.display.barHeight,width:e.scrollWidth-Rt(this)-this.display.barWidth,clientHeight:Bt(this),clientWidth:jt(this)}},scrollIntoView:br(function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:se(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?Jn(this,e):tr(this,e.from,e.to,e.margin)}),setSize:br(function(e,t){var n=this,r=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}
null!=e&&(this.display.wrapper.style.width=r(e)),null!=t&&(this.display.wrapper.style.height=r(t)),this.options.lineWrapping&&en(this)
var i=this.display.viewFrom
this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){Tn(n,i,"widget")
break}++i}),this.curOp.forceUpdate=!0,O(this,"refresh",this)}),operation:function(e){return vr(this,e)},startOperation:function(){return cr(this)},endOperation:function(){return ur(this)},refresh:br(function(){var e=this.display.cachedTextHeight
Ln(this),this.curOp.forceUpdate=!0,tn(this),Yn(this,this.doc.scrollLeft,this.doc.scrollTop),Er(this.display),(null==e||Math.abs(e-bn(this.display))>.5||this.options.lineWrapping)&&Cn(this),O(this,"refresh",this)}),swapDoc:br(function(e){var t=this.doc
return t.cm=null,this.state.selectingText&&this.state.selectingText(),Jr(this,e),tn(this),this.display.input.reset(),Yn(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,kt(this,"swapDoc",this,t),t}),phrase:function(e){var t=this.options.phrases
return t&&Object.prototype.hasOwnProperty.call(t,e)?t[e]:e},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},F(e),e.registerHelper=function(t,r,i){n.hasOwnProperty(t)||(n[t]=e[t]={_global:[]}),n[t][r]=i},e.registerGlobalHelper=function(t,r,i,o){e.registerHelper(t,r,o),n[t]._global.push({pred:i,val:o})}}function aa(e,t,n,r,i){function o(){var n=t.line+u
return!(n<e.first||n>=e.first+e.size)&&(t=new se(n,t.ch,t.sticky),c=J(e,n))}function a(r){var a
if(a=i?yo(e.cm,c,t,n):go(c,t,n),null==a){if(r||!o())return!1
t=vo(i,e.cm,c,t.line,u)}else t=a
return!0}var s=t,l=n,c=J(e,t.line),u=i&&"rtl"==e.direction?-n:n
if("char"==r)a()
else if("column"==r)a(!0)
else if("word"==r||"group"==r)for(var d=null,f="group"==r,p=e.cm&&e.cm.getHelper(t,"wordChars"),h=!0;!(n<0)||a(!h);h=!1){var m=c.text.charAt(t.ch)||"\n",g=x(m,p)?"w":f&&"\n"==m?"n":!f||/\s/.test(m)?null:"p"
if(!f||h||g||(g="s"),d&&d!=g){n<0&&(n=1,a(),t.sticky="after")
break}if(g&&(d=g),n>0&&!a(!h))break}var v=Ti(e,t,s,l,!0)
return ce(s,v)&&(v.hitSide=!0),v}function sa(e,t,n,r){var i,o=e.doc,a=t.left
if("page"==r){var s=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),l=Math.max(s-.5*bn(e.display),3)
i=(n>0?t.bottom:t.top)+n*l}else"line"==r&&(i=n>0?t.bottom+3:t.top-3)
for(var c;c=fn(e,a,i),c.outside;){if(n<0?i<=0:i>=o.height){c.hitSide=!0
break}i+=5*n}return c}function la(e,t){var n=Kt(e,t.line)
if(!n||n.hidden)return null
var r=J(e.doc,t.line),i=Ht(n,r,t.line),o=T(r,e.doc.direction),a="left"
if(o){var s=L(o,t.ch)
a=s%2?"right":"left"}var l=Zt(i.map,t.ch,a)
return l.offset="right"==l.collapse?l.end:l.start,l}function ca(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0
return!1}function ua(e,t){return t&&(e.bad=!0),e}function da(e,t,n,r,i){function o(e){return function(t){return t.id==e}}function a(){u&&(c+=d,f&&(c+=d),u=f=!1)}function s(e){e&&(a(),c+=e)}function l(t){if(1==t.nodeType){var n=t.getAttribute("cm-text")
if(n)return void s(n)
var c,p=t.getAttribute("cm-marker")
if(p){var h=e.findMarks(se(r,0),se(i+1,0),o(+p))
return void(h.length&&(c=h[0].find(0))&&s(ee(e.doc,c.from,c.to).join(d)))}if("false"==t.getAttribute("contenteditable"))return
var m=/^(pre|div|p|li|table|br)$/i.test(t.nodeName)
if(!/^br$/i.test(t.nodeName)&&0==t.textContent.length)return
m&&a()
for(var g=0;g<t.childNodes.length;g++)l(t.childNodes[g]);/^(pre|p)$/i.test(t.nodeName)&&(f=!0),m&&(u=!0)}else 3==t.nodeType&&s(t.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(var c="",u=!1,d=e.doc.lineSeparator(),f=!1;l(t),t!=n;)t=t.nextSibling,f=!1
return c}function fa(e,t,n){var r
if(t==e.display.lineDiv){if(r=e.display.lineDiv.childNodes[n],!r)return ua(e.clipPos(se(e.display.viewTo-1)),!0)
t=null,n=0}else for(r=t;;r=r.parentNode){if(!r||r==e.display.lineDiv)return null
if(r.parentNode&&r.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==r)return pa(o,t,n)}}function pa(e,t,n){function r(t,n,r){for(var i=-1;i<(d?d.length:0);i++)for(var o=i<0?u.map:d[i],a=0;a<o.length;a+=3){var s=o[a+2]
if(s==t||s==n){var l=re(i<0?e.line:e.rest[i]),c=o[a]+r
return(r<0||s!=t)&&(c=o[a+(r?1:0)]),se(l,c)}}}var i=e.text.firstChild,a=!1
if(!t||!o(i,t))return ua(se(re(e.line),0),!0)
if(t==i&&(a=!0,t=i.childNodes[n],n=0,!t)){var s=e.rest?m(e.rest):e.line
return ua(se(re(s),s.text.length),a)}var l=3==t.nodeType?t:null,c=t
for(l||1!=t.childNodes.length||3!=t.firstChild.nodeType||(l=t.firstChild,n&&(n=l.nodeValue.length));c.parentNode!=i;)c=c.parentNode
var u=e.measure,d=u.maps,f=r(l,c,n)
if(f)return ua(f,a)
for(var p=c.nextSibling,h=l?l.nodeValue.length-n:0;p;p=p.nextSibling){if(f=r(p,p.firstChild,0))return ua(se(f.line,f.ch-h),a)
h+=p.textContent.length}for(var g=c.previousSibling,v=n;g;g=g.previousSibling){if(f=r(g,g.firstChild,-1))return ua(se(f.line,f.ch+v),a)
v+=g.textContent.length}}function ha(e,t){function n(){e.value=c.getValue()}if(t=t?u(t):{},t.value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var r=a()
t.autofocus=r==e||null!=e.getAttribute("autofocus")&&r==document.body}var i
if(e.form&&(rs(e.form,"submit",n),!t.leaveSubmitMethodAlone)){var o=e.form
i=o.submit
try{var s=o.submit=function(){n(),o.submit=i,o.submit(),o.submit=s}}catch(l){}}t.finishInit=function(r){r.save=n,r.getTextArea=function(){return e},r.toTextArea=function(){r.toTextArea=isNaN,n(),e.parentNode.removeChild(r.getWrapperElement()),e.style.display="",e.form&&(E(e.form,"submit",n),t.leaveSubmitMethodAlone||"function"!=typeof e.form.submit||(e.form.submit=i))}},e.style.display="none"
var c=Zo(function(t){return e.parentNode.insertBefore(t,e.nextSibling)},t)
return c}function ma(e){e.off=E,e.on=rs,e.wheelEventPixels=Rr,e.Doc=Rs,e.splitLines=os,e.countColumn=d,e.findColumn=p,e.isWordChar=k,e.Pass=Va,e.signal=O,e.Line=ys,e.changeEnd=Hr,e.scrollbarModel=Ls,e.Pos=se,e.cmpPos=le,e.modes=cs,e.mimeModes=us,e.resolveMode=V,e.getMode=G,e.modeExtensions=ds,e.extendMode=Z,e.copyState=X,e.startState=Y,e.innerMode=Q,e.commands=Vs,e.keyMap=Ks,e.keyName=fo,e.isModifierKey=co,e.lookupKey=lo,e.normalizeKeyMap=so,e.StringStream=fs,e.SharedTextMarker=Ds,e.TextMarker=Is,e.LineWidget=qs,e.e_preventDefault=I,e.e_stopPropagation=D,e.e_stop=R,e.addClass=s,e.contains=o,e.rmClass=Ba,e.keyNames=Ws}var ga=navigator.userAgent,va=navigator.platform,ya=/gecko\/\d/i.test(ga),ba=/MSIE \d/.test(ga),ka=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ga),xa=/Edge\/(\d+)/.exec(ga),wa=ba||ka||xa,_a=wa&&(ba?document.documentMode||6:+(xa||ka)[1]),Ca=!xa&&/WebKit\//.test(ga),Sa=Ca&&/Qt\/\d+\.\d+/.test(ga),Ma=!xa&&/Chrome\//.test(ga),La=/Opera\//.test(ga),Ta=/Apple Computer/.test(navigator.vendor),Aa=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(ga),Ea=/PhantomJS/.test(ga),Oa=!xa&&/AppleWebKit/.test(ga)&&/Mobile\/\w+/.test(ga),za=/Android/.test(ga),Na=Oa||za||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(ga),qa=Oa||/Mac/.test(va),Fa=/\bCrOS\b/.test(ga),Ia=/win/i.test(va),Da=La&&ga.match(/Version\/(\d*\.\d*)/)
Da&&(Da=Number(Da[1])),Da&&Da>=15&&(La=!1,Ca=!0)
var Pa,Ra=qa&&(Sa||La&&(null==Da||Da<12.11)),ja=ya||wa&&_a>=9,Ba=function(t,n){var r=t.className,i=e(n).exec(r)
if(i){var o=r.slice(i.index+i[0].length)
t.className=r.slice(0,i.index)+(o?i[1]+o:"")}}
Pa=document.createRange?function(e,t,n,r){var i=document.createRange()
return i.setEnd(r||e,n),i.setStart(e,t),i}:function(e,t,n){var r=document.body.createTextRange()
try{r.moveToElementText(e.parentNode)}catch(i){return r}return r.collapse(!0),r.moveEnd("character",n),r.moveStart("character",t),r}
var Wa=function(e){e.select()}
Oa?Wa=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:wa&&(Wa=function(e){try{e.select()}catch(t){}})
var Ha=function(){this.id=null,this.f=null,this.time=0,this.handler=c(this.onTimeout,this)}
Ha.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},Ha.prototype.set=function(e,t){this.f=t
var n=+new Date+e;(!this.id||n<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=n)}
var $a,Ua,Ka=50,Va={toString:function(){return"CodeMirror.Pass"}},Ga={scroll:!1},Za={origin:"*mouse"},Xa={origin:"+move"},Qa=[""],Ya=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Ja=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,es=null,ts=function(){function e(e){return e<=247?n.charAt(e):1424<=e&&e<=1524?"R":1536<=e&&e<=1785?r.charAt(e-1536):1774<=e&&e<=2220?"r":8192<=e&&e<=8203?"w":8204==e?"b":"L"}function t(e,t,n){this.level=e,this.from=t,this.to=n}var n="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",r="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,a=/[LRr]/,s=/[Lb1n]/,l=/[1n]/
return function(n,r){var c="ltr"==r?"L":"R"
if(0==n.length||"ltr"==r&&!i.test(n))return!1
for(var u=n.length,d=[],f=0;f<u;++f)d.push(e(n.charCodeAt(f)))
for(var p=0,h=c;p<u;++p){var g=d[p]
"m"==g?d[p]=h:h=g}for(var v=0,y=c;v<u;++v){var b=d[v]
"1"==b&&"r"==y?d[v]="n":a.test(b)&&(y=b,"r"==b&&(d[v]="R"))}for(var k=1,x=d[0];k<u-1;++k){var w=d[k]
"+"==w&&"1"==x&&"1"==d[k+1]?d[k]="1":","!=w||x!=d[k+1]||"1"!=x&&"n"!=x||(d[k]=x),x=w}for(var _=0;_<u;++_){var C=d[_]
if(","==C)d[_]="N"
else if("%"==C){var S=void 0
for(S=_+1;S<u&&"%"==d[S];++S);for(var M=_&&"!"==d[_-1]||S<u&&"1"==d[S]?"1":"N",L=_;L<S;++L)d[L]=M
_=S-1}}for(var T=0,A=c;T<u;++T){var E=d[T]
"L"==A&&"1"==E?d[T]="L":a.test(E)&&(A=E)}for(var O=0;O<u;++O)if(o.test(d[O])){var z=void 0
for(z=O+1;z<u&&o.test(d[z]);++z);for(var N="L"==(O?d[O-1]:c),q="L"==(z<u?d[z]:c),F=N==q?N?"L":"R":c,I=O;I<z;++I)d[I]=F
O=z-1}for(var D,P=[],R=0;R<u;)if(s.test(d[R])){var j=R
for(++R;R<u&&s.test(d[R]);++R);P.push(new t(0,j,R))}else{var B=R,W=P.length,H="rtl"==r?1:0
for(++R;R<u&&"L"!=d[R];++R);for(var $=B;$<R;)if(l.test(d[$])){B<$&&(P.splice(W,0,new t(1,B,$)),W+=H)
var U=$
for(++$;$<R&&l.test(d[$]);++$);P.splice(W,0,new t(2,U,$)),W+=H,B=$}else++$
B<R&&P.splice(W,0,new t(1,B,R))}return"ltr"==r&&(1==P[0].level&&(D=n.match(/^\s+/))&&(P[0].from=D[0].length,P.unshift(new t(0,0,D[0].length))),1==m(P).level&&(D=n.match(/\s+$/))&&(m(P).to-=D[0].length,P.push(new t(0,u-D[0].length,u)))),"rtl"==r?P.reverse():P}}(),ns=[],rs=function(e,t,n){if(e.addEventListener)e.addEventListener(t,n,!1)
else if(e.attachEvent)e.attachEvent("on"+t,n)
else{var r=e._handlers||(e._handlers={})
r[t]=(r[t]||ns).concat(n)}},is=function(){if(wa&&_a<9)return!1
var e=r("div")
return"draggable"in e||"dragDrop"in e}(),os=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,n=[],r=e.length;t<=r;){var i=e.indexOf("\n",t)
i==-1&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),a=o.indexOf("\r")
a!=-1?(n.push(o.slice(0,a)),t+=a+1):(n.push(o),t=i+1)}return n}:function(e){return e.split(/\r\n?|\n/)},as=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(t){return!1}}:function(e){var t
try{t=e.ownerDocument.selection.createRange()}catch(n){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},ss=function(){var e=r("div")
return"oncopy"in e||(e.setAttribute("oncopy","return;"),"function"==typeof e.oncopy)}(),ls=null,cs={},us={},ds={},fs=function(e,t,n){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=n}
fs.prototype.eol=function(){return this.pos>=this.string.length},fs.prototype.sol=function(){return this.pos==this.lineStart},fs.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},fs.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},fs.prototype.eat=function(e){var t,n=this.string.charAt(this.pos)
if(t="string"==typeof e?n==e:n&&(e.test?e.test(n):e(n)))return++this.pos,n},fs.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},fs.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos
return this.pos>e},fs.prototype.skipToEnd=function(){this.pos=this.string.length},fs.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos)
if(t>-1)return this.pos=t,!0},fs.prototype.backUp=function(e){this.pos-=e},fs.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=d(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?d(this.string,this.lineStart,this.tabSize):0)},fs.prototype.indentation=function(){return d(this.string,null,this.tabSize)-(this.lineStart?d(this.string,this.lineStart,this.tabSize):0)},fs.prototype.match=function(e,t,n){if("string"!=typeof e){var r=this.string.slice(this.pos).match(e)
return r&&r.index>0?null:(r&&t!==!1&&(this.pos+=r[0].length),r)}var i=function(e){return n?e.toLowerCase():e},o=this.string.substr(this.pos,e.length)
if(i(o)==i(e))return t!==!1&&(this.pos+=e.length),!0},fs.prototype.current=function(){return this.string.slice(this.start,this.pos)},fs.prototype.hideFirstChars=function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}},fs.prototype.lookAhead=function(e){var t=this.lineOracle
return t&&t.lookAhead(e)},fs.prototype.baseToken=function(){var e=this.lineOracle
return e&&e.baseToken(this.pos)}
var ps=function(e,t){this.state=e,this.lookAhead=t},hs=function(e,t,n,r){this.state=t,this.doc=e,this.line=n,this.maxLookAhead=r||0,this.baseTokens=null,this.baseTokenPos=1}
hs.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e)
return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},hs.prototype.baseToken=function(e){if(!this.baseTokens)return null
for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2
var t=this.baseTokens[this.baseTokenPos+1]
return{type:t&&t.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},hs.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},hs.fromSaved=function(e,t,n){return t instanceof ps?new hs(e,X(e.mode,t.state),n,t.lookAhead):new hs(e,X(e.mode,t),n)},hs.prototype.save=function(e){var t=e!==!1?X(this.doc.mode,this.state):this.state
return this.maxLookAhead>0?new ps(t,this.maxLookAhead):t}
var ms=function(e,t,n){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=n},gs=!1,vs=!1,ys=function(e,t,n){this.text=e,je(this,t),this.height=n?n(this):1}
ys.prototype.lineNo=function(){return re(this)},F(ys)
var bs,ks={},xs={},ws=null,_s=null,Cs={left:0,right:0,top:0,bottom:0},Ss=function(e,t,n){this.cm=n
var i=this.vert=r("div",[r("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=r("div",[r("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
i.tabIndex=o.tabIndex=-1,e(i),e(o),rs(i,"scroll",function(){i.clientHeight&&t(i.scrollTop,"vertical")}),rs(o,"scroll",function(){o.clientWidth&&t(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,wa&&_a<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}
Ss.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,n=e.scrollHeight>e.clientHeight+1,r=e.nativeBarWidth
if(n){this.vert.style.display="block",this.vert.style.bottom=t?r+"px":"0"
var i=e.viewHeight-(t?r:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=n?r+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(n?r:0)
this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedZeroWidth&&e.clientHeight>0&&(0==r&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:n?r:0,bottom:t?r:0}},Ss.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Ss.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Ss.prototype.zeroWidthHack=function(){var e=qa&&!Aa?"12px":"18px"
this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new Ha,this.disableVert=new Ha},Ss.prototype.enableZeroWidthBar=function(e,t,n){function r(){var i=e.getBoundingClientRect(),o="vert"==n?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1)
o!=e?e.style.pointerEvents="none":t.set(1e3,r)}e.style.pointerEvents="auto",t.set(1e3,r)},Ss.prototype.clear=function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}
var Ms=function(){}
Ms.prototype.update=function(){return{bottom:0,right:0}},Ms.prototype.setScrollLeft=function(){},Ms.prototype.setScrollTop=function(){},Ms.prototype.clear=function(){}
var Ls={"native":Ss,"null":Ms},Ts=0,As=function(e,t,n){var r=e.display
this.viewport=t,this.visible=Un(r,e.doc,t),this.editorIsHidden=!r.wrapper.offsetWidth,this.wrapperHeight=r.wrapper.clientHeight,this.wrapperWidth=r.wrapper.clientWidth,this.oldDisplayWidth=jt(e),this.force=n,this.dims=xn(e),this.events=[]}
As.prototype.signal=function(e,t){q(e,t)&&this.events.push(arguments)},As.prototype.finish=function(){for(var e=0;e<this.events.length;e++)O.apply(null,this.events[e])}
var Es=0,Os=null
wa?Os=-.53:ya?Os=15:Ma?Os=-.7:Ta&&(Os=-1/3)
var zs=function(e,t){this.ranges=e,this.primIndex=t}
zs.prototype.primary=function(){return this.ranges[this.primIndex]},zs.prototype.equals=function(e){if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var t=0;t<this.ranges.length;t++){var n=this.ranges[t],r=e.ranges[t]
if(!ce(n.anchor,r.anchor)||!ce(n.head,r.head))return!1}return!0},zs.prototype.deepCopy=function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new Ns(ue(this.ranges[t].anchor),ue(this.ranges[t].head))
return new zs(e,this.primIndex)},zs.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0
return!1},zs.prototype.contains=function(e,t){t||(t=e)
for(var n=0;n<this.ranges.length;n++){var r=this.ranges[n]
if(le(t,r.from())>=0&&le(e,r.to())<=0)return n}return-1}
var Ns=function(e,t){this.anchor=e,this.head=t}
Ns.prototype.from=function(){return fe(this.anchor,this.head)},Ns.prototype.to=function(){return de(this.anchor,this.head)},Ns.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},Hi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var n=e,r=e+t;n<r;++n){var i=this.lines[n]
this.height-=i.height,at(i),kt(i,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,n){this.height+=n,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var r=0;r<t.length;++r)t[r].parent=this},iterN:function(e,t,n){for(var r=e+t;e<r;++e)if(n(this.lines[e]))return!0}},$i.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t
for(var n=0;n<this.children.length;++n){var r=this.children[n],i=r.chunkSize()
if(e<i){var o=Math.min(t,i-e),a=r.height
if(r.removeInner(e,o),this.height-=a-r.height,i==o&&(this.children.splice(n--,1),r.parent=null),0==(t-=o))break
e=0}else e-=i}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof Hi))){var s=[]
this.collapse(s),this.children=[new Hi(s)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,n){this.size+=t.length,this.height+=n
for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize()
if(e<=o){if(i.insertInner(e,t,n),i.lines&&i.lines.length>50){for(var a=i.lines.length%25+25,s=a;s<i.lines.length;){var l=new Hi(i.lines.slice(s,s+=25))
i.height-=l.height,this.children.splice(++r,0,l),l.parent=this}i.lines=i.lines.slice(0,a),this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this
do{var t=e.children.splice(e.children.length-5,5),n=new $i(t)
if(e.parent){e.size-=n.size,e.height-=n.height
var r=f(e.parent.children,e)
e.parent.children.splice(r+1,0,n)}else{var i=new $i(e.children)
i.parent=e,e.children=[i,n],e=i}n.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},iterN:function(e,t,n){for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize()
if(e<o){var a=Math.min(t,o-e)
if(i.iterN(e,a,n))return!0
if(0==(t-=a))break
e=0}else e-=o}}}
var qs=function(e,t,n){if(n)for(var r in n)n.hasOwnProperty(r)&&(this[r]=n[r])
this.doc=e,this.node=t}
qs.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,n=this.line,r=re(n)
if(null!=r&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1)
t.length||(n.widgets=null)
var o=qt(this)
ne(n,Math.max(0,n.height-o)),e&&(vr(e,function(){Ui(e,n,-o),Tn(e,r,"widget")}),kt(e,"lineWidgetCleared",e,this,r))}},qs.prototype.changed=function(){var e=this,t=this.height,n=this.doc.cm,r=this.line
this.height=null
var i=qt(this)-t
i&&(et(this.doc,r)||ne(r,r.height+i),n&&vr(n,function(){n.curOp.forceUpdate=!0,Ui(n,r,i),kt(n,"lineWidgetChanged",n,e,re(r))}))},F(qs)
var Fs=0,Is=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++Fs}
Is.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp
if(t&&cr(e),q(this,"clear")){var n=this.find()
n&&kt(this,"clear",n.from,n.to)}for(var r=null,i=null,o=0;o<this.lines.length;++o){var a=this.lines[o],s=Oe(a.markedSpans,this)
e&&!this.collapsed?Tn(e,re(a),"text"):e&&(null!=s.to&&(i=re(a)),null!=s.from&&(r=re(a))),a.markedSpans=ze(a.markedSpans,s),null==s.from&&this.collapsed&&!et(this.doc,a)&&e&&ne(a,bn(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var l=0;l<this.lines.length;++l){var c=Ze(this.lines[l]),u=rt(c)
u>e.display.maxLineLength&&(e.display.maxLine=c,e.display.maxLineLength=u,e.display.maxLineChanged=!0)}null!=r&&e&&this.collapsed&&Ln(e,r,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Si(e.doc)),e&&kt(e,"markerCleared",e,this,r,i),t&&ur(e),this.parent&&this.parent.clear()}},Is.prototype.find=function(e,t){null==e&&"bookmark"==this.type&&(e=1)
for(var n,r,i=0;i<this.lines.length;++i){var o=this.lines[i],a=Oe(o.markedSpans,this)
if(null!=a.from&&(n=se(t?o:re(o),a.from),e==-1))return n
if(null!=a.to&&(r=se(t?o:re(o),a.to),1==e))return r}return n&&{from:n,to:r}},Is.prototype.changed=function(){var e=this,t=this.find(-1,!0),n=this,r=this.doc.cm
t&&r&&vr(r,function(){var i=t.line,o=re(t.line),a=Kt(r,o)
if(a&&(Jt(a),r.curOp.selectionChanged=r.curOp.forceUpdate=!0),r.curOp.updateMaxLine=!0,!et(n.doc,i)&&null!=n.height){var s=n.height
n.height=null
var l=qt(n)-s
l&&ne(i,i.height+l)}kt(r,"markerChanged",r,e)})},Is.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&f(t.maybeHiddenMarkers,this)!=-1||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},Is.prototype.detachLine=function(e){if(this.lines.splice(f(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},F(Is)
var Ds=function(e,t){this.markers=e,this.primary=t
for(var n=0;n<e.length;++n)e[n].parent=this}
Ds.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var e=0;e<this.markers.length;++e)this.markers[e].clear()
kt(this,"clear")}},Ds.prototype.find=function(e,t){return this.primary.find(e,t)},F(Ds)
var Ps=0,Rs=function(e,t,n,r,i){if(!(this instanceof Rs))return new Rs(e,t,n,r,i)
null==n&&(n=0),$i.call(this,[new Hi([new ys("",null)])]),this.first=n,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=n
var o=se(n,0)
this.sel=Wr(o),this.history=new ni(null),this.id=++Ps,this.modeOption=t,this.lineSep=r,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Qr(this,{from:o,to:o,text:e}),wi(this,Wr(o),Ga)}
Rs.prototype=b($i.prototype,{constructor:Rs,iter:function(e,t,n){n?this.iterN(e-this.first,t-e,n):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var n=0,r=0;r<t.length;++r)n+=t[r].height
this.insertInner(e-this.first,t,n)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=te(this,this.first,this.first+this.size)
return e===!1?t:t.join(e||this.lineSeparator())},setValue:kr(function(e){var t=se(this.first,0),n=this.first+this.size-1
zi(this,{from:t,to:se(n,J(this,n).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&Yn(this.cm,0,0),wi(this,Wr(t),Ga)}),replaceRange:function(e,t,n,r){t=he(this,t),n=n?he(this,n):t,Pi(this,e,t,n,r)},getRange:function(e,t,n){var r=ee(this,he(this,e),he(this,t))
return n===!1?r:r.join(n||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){if(oe(this,e))return J(this,e)},getLineNumber:function(e){return re(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=J(this,e)),Ze(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return he(this,e)},getCursor:function(e){var t,n=this.sel.primary()
return t=null==e||"head"==e?n.head:"anchor"==e?n.anchor:"end"==e||"to"==e||e===!1?n.to():n.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:kr(function(e,t,n){bi(this,he(this,"number"==typeof e?se(e,t||0):e),null,n)}),setSelection:kr(function(e,t,n){bi(this,he(this,e),he(this,t||e),n)}),extendSelection:kr(function(e,t,n){gi(this,he(this,e),t&&he(this,t),n)}),extendSelections:kr(function(e,t){vi(this,ge(this,e),t)}),extendSelectionsBy:kr(function(e,t){var n=g(this.sel.ranges,e)
vi(this,ge(this,n),t)}),setSelections:kr(function(e,t,n){if(e.length){for(var r=[],i=0;i<e.length;i++)r[i]=new Ns(he(this,e[i].anchor),he(this,e[i].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),wi(this,Br(this.cm,r,t),n)}}),addSelection:kr(function(e,t,n){var r=this.sel.ranges.slice(0)
r.push(new Ns(he(this,e),he(this,t||e))),wi(this,Br(this.cm,r,r.length-1),n)}),getSelection:function(e){for(var t,n=this.sel.ranges,r=0;r<n.length;r++){var i=ee(this,n[r].from(),n[r].to())
t=t?t.concat(i):i}return e===!1?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],n=this.sel.ranges,r=0;r<n.length;r++){var i=ee(this,n[r].from(),n[r].to())
e!==!1&&(i=i.join(e||this.lineSeparator())),t[r]=i}return t},replaceSelection:function(e,t,n){for(var r=[],i=0;i<this.sel.ranges.length;i++)r[i]=e
this.replaceSelections(r,t,n||"+input")},replaceSelections:kr(function(e,t,n){for(var r=[],i=this.sel,o=0;o<i.ranges.length;o++){var a=i.ranges[o]
r[o]={from:a.from(),to:a.to(),text:this.splitLines(e[o]),origin:n}}for(var s=t&&"end"!=t&&Vr(this,r,t),l=r.length-1;l>=0;l--)zi(this,r[l])
s?xi(this,s):this.cm&&Qn(this.cm)}),undo:kr(function(){qi(this,"undo")}),redo:kr(function(){qi(this,"redo")}),undoSelection:kr(function(){qi(this,"undo",!0)}),redoSelection:kr(function(){qi(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,n=0,r=0;r<e.done.length;r++)e.done[r].ranges||++t
for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++n
return{undo:t,redo:n}},clearHistory:function(){var e=this
this.history=new ni(this.history.maxGeneration),Yr(this,function(t){return t.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:hi(this.history.done),undone:hi(this.history.undone)}},setHistory:function(e){var t=this.history=new ni(this.history.maxGeneration)
t.done=hi(e.done.slice(0),null,!0),t.undone=hi(e.undone.slice(0),null,!0)},setGutterMarker:kr(function(e,t,n){return Wi(this,e,"gutter",function(e){var r=e.gutterMarkers||(e.gutterMarkers={})
return r[t]=n,!n&&w(r)&&(e.gutterMarkers=null),!0})}),clearGutter:kr(function(e){var t=this
this.iter(function(n){n.gutterMarkers&&n.gutterMarkers[e]&&Wi(t,n,"gutter",function(){return n.gutterMarkers[e]=null,w(n.gutterMarkers)&&(n.gutterMarkers=null),!0})})}),lineInfo:function(e){var t
if("number"==typeof e){if(!oe(this,e))return null
if(t=e,e=J(this,e),!e)return null}else if(t=re(e),null==t)return null
return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:kr(function(t,n,r){return Wi(this,t,"gutter"==n?"gutter":"class",function(t){var i="text"==n?"textClass":"background"==n?"bgClass":"gutter"==n?"gutterClass":"wrapClass"
if(t[i]){if(e(r).test(t[i]))return!1
t[i]+=" "+r}else t[i]=r
return!0})}),removeLineClass:kr(function(t,n,r){return Wi(this,t,"gutter"==n?"gutter":"class",function(t){var i="text"==n?"textClass":"background"==n?"bgClass":"gutter"==n?"gutterClass":"wrapClass",o=t[i]
if(!o)return!1
if(null==r)t[i]=null
else{var a=o.match(e(r))
if(!a)return!1
var s=a.index+a[0].length
t[i]=o.slice(0,a.index)+(a.index&&s!=o.length?" ":"")+o.slice(s)||null}return!0})}),addLineWidget:kr(function(e,t,n){return Ki(this,e,t,n)}),removeLineWidget:function(e){e.clear()},markText:function(e,t,n){return Vi(this,he(this,e),he(this,t),n,n&&n.type||"range")},setBookmark:function(e,t){var n={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents}
return e=he(this,e),Vi(this,e,e,n,"bookmark")},findMarksAt:function(e){e=he(this,e)
var t=[],n=J(this,e.line).markedSpans
if(n)for(var r=0;r<n.length;++r){var i=n[r];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,n){e=he(this,e),t=he(this,t)
var r=[],i=e.line
return this.iter(e.line,t.line+1,function(o){var a=o.markedSpans
if(a)for(var s=0;s<a.length;s++){var l=a[s]
null!=l.to&&i==e.line&&e.ch>=l.to||null==l.from&&i!=e.line||null!=l.from&&i==t.line&&l.from>=t.ch||n&&!n(l.marker)||r.push(l.marker.parent||l.marker)}++i}),r},getAllMarks:function(){var e=[]
return this.iter(function(t){var n=t.markedSpans
if(n)for(var r=0;r<n.length;++r)null!=n[r].from&&e.push(n[r].marker)}),e},posFromIndex:function(e){var t,n=this.first,r=this.lineSeparator().length
return this.iter(function(i){var o=i.text.length+r
return o>e?(t=e,!0):(e-=o,void++n)}),he(this,se(n,t))},indexFromPos:function(e){e=he(this,e)
var t=e.ch
if(e.line<this.first||e.ch<0)return 0
var n=this.lineSeparator().length
return this.iter(this.first,e.line,function(e){t+=e.text.length+n}),t},copy:function(e){var t=new Rs(te(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,n=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<n&&(n=e.to)
var r=new Rs(te(this,t,n),e.mode||this.modeOption,t,this.lineSep,this.direction)
return e.sharedHist&&(r.history=this.history),(this.linked||(this.linked=[])).push({doc:r,sharedHist:e.sharedHist}),r.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Xi(r,Zi(this)),r},unlinkDoc:function(e){if(e instanceof Zo&&(e=e.doc),this.linked)for(var t=0;t<this.linked.length;++t){var n=this.linked[t]
if(n.doc==e){this.linked.splice(t,1),e.unlinkDoc(this),Qi(Zi(this))
break}}if(e.history==this.history){var r=[e.id]
Yr(e,function(e){return r.push(e.id)},!0),e.history=new ni(null),e.history.done=hi(this.history.done,r),e.history.undone=hi(this.history.undone,r)}},iterLinkedDocs:function(e){Yr(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):os(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:kr(function(e){"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(e){return e.order=null}),this.cm&&ti(this.cm))})}),Rs.prototype.eachLine=Rs.prototype.iter
for(var js=0,Bs=!1,Ws={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Hs=0;Hs<10;Hs++)Ws[Hs+48]=Ws[Hs+96]=String(Hs)
for(var $s=65;$s<=90;$s++)Ws[$s]=String.fromCharCode($s)
for(var Us=1;Us<=12;Us++)Ws[Us+111]=Ws[Us+63235]="F"+Us
var Ks={}
Ks.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ks.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ks.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Ks.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ks["default"]=qa?Ks.macDefault:Ks.pcDefault
var Vs={selectAll:Ei,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),Ga)},killLine:function(e){return ho(e,function(t){if(t.empty()){var n=J(e.doc,t.head.line).text.length
return t.head.ch==n&&t.head.line<e.lastLine()?{from:t.head,to:se(t.head.line+1,0)}:{from:t.head,to:se(t.head.line,n)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){return ho(e,function(t){return{from:se(t.from().line,0),to:he(e.doc,se(t.to().line+1,0))}})},delLineLeft:function(e){return ho(e,function(e){return{from:se(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){return ho(e,function(t){var n=e.charCoords(t.head,"div").top+5,r=e.coordsChar({left:0,top:n},"div")
return{from:r,to:t.from()}})},delWrappedLineRight:function(e){return ho(e,function(t){var n=e.charCoords(t.head,"div").top+5,r=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")
return{from:t.from(),to:r}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(se(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(se(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(t){return bo(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(t){return xo(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(t){return ko(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(t){var n=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")},Xa)},goLineLeft:function(e){return e.extendSelectionsBy(function(t){var n=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:n},"div")},Xa)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(t){var n=e.cursorCoords(t.head,"div").top+5,r=e.coordsChar({left:0,top:n},"div")
return r.ch<e.getLine(r.line).search(/\S/)?xo(e,t.head):r},Xa)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],n=e.listSelections(),r=e.options.tabSize,i=0;i<n.length;i++){var o=n[i].from(),a=d(e.getLine(o.line),o.ch,r)
t.push(h(r-a%r))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return vr(e,function(){for(var t=e.listSelections(),n=[],r=0;r<t.length;r++)if(t[r].empty()){var i=t[r].head,o=J(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new se(i.line,i.ch-1)),i.ch>0)i=new se(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),se(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var a=J(e.doc,i.line-1).text
a&&(i=new se(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+a.charAt(a.length-1),se(i.line-1,a.length-1),i,"+transpose"))}n.push(new Ns(i,i))}e.setSelections(n)})},newlineAndIndent:function(e){return vr(e,function(){for(var t=e.listSelections(),n=t.length-1;n>=0;n--)e.replaceRange(e.doc.lineSeparator(),t[n].anchor,t[n].head,"+input")
t=e.listSelections()
for(var r=0;r<t.length;r++)e.indentLine(t[r].from().line,null,!0)
Qn(e)})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}},Gs=new Ha,Zs=null,Xs=400,Qs=function(e,t,n){this.time=e,this.pos=t,this.button=n}
Qs.prototype.compare=function(e,t,n){return this.time+Xs>e&&0==le(t,this.pos)&&n==this.button}
var Ys,Js,el={toString:function(){return"CodeMirror.Init"}},tl={},nl={}
Zo.defaults=tl,Zo.optionHandlers=nl
var rl=[]
Zo.defineInitHook=function(e){return rl.push(e)}
var il=null,ol=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new Ha,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null}
ol.prototype.init=function(e){function t(e){for(var t=e.target;t;t=t.parentNode){if(t==a)return!0
if(/\bCodeMirror-(?:line)?widget\b/.test(t.className))break}return!1}function n(e){if(t(e)&&!z(o,e)){if(o.somethingSelected())Yo({lineWise:!1,text:o.getSelections()}),"cut"==e.type&&o.replaceSelection("",null,"cut")
else{if(!o.options.lineWiseCopyCut)return
var n=na(o)
Yo({lineWise:!0,text:n.text}),"cut"==e.type&&o.operation(function(){o.setSelections(n.ranges,0,Ga),o.replaceSelection("",null,"cut")})}if(e.clipboardData){e.clipboardData.clearData()
var r=il.text.join("\n")
if(e.clipboardData.setData("Text",r),e.clipboardData.getData("Text")==r)return void e.preventDefault()}var s=ia(),l=s.firstChild
o.display.lineSpace.insertBefore(s,o.display.lineSpace.firstChild),l.value=il.text.join("\n")
var c=document.activeElement
Wa(l),setTimeout(function(){o.display.lineSpace.removeChild(s),c.focus(),c==a&&i.showPrimarySelection()},50)}}var r=this,i=this,o=i.cm,a=i.div=e.lineDiv
ra(a,o.options.spellcheck,o.options.autocorrect,o.options.autocapitalize),rs(a,"paste",function(e){!t(e)||z(o,e)||ea(e,o)||_a<=11&&setTimeout(yr(o,function(){return r.updateFromDOM()}),20)}),rs(a,"compositionstart",function(e){r.composing={data:e.data,done:!1}}),rs(a,"compositionupdate",function(e){r.composing||(r.composing={data:e.data,done:!1})}),rs(a,"compositionend",function(e){r.composing&&(e.data!=r.composing.data&&r.readFromDOMSoon(),r.composing.done=!0)}),rs(a,"touchstart",function(){return i.forceCompositionEnd()}),rs(a,"input",function(){r.composing||r.readFromDOMSoon()}),rs(a,"copy",n),rs(a,"cut",n)},ol.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},ol.prototype.prepareSelection=function(){var e=qn(this.cm,!1)
return e.focus=document.activeElement==this.div,e},ol.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},ol.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},ol.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,n=t.doc.sel.primary(),r=n.from(),i=n.to()
if(t.display.viewTo==t.display.viewFrom||r.line>=t.display.viewTo||i.line<t.display.viewFrom)return void e.removeAllRanges()
var o=fa(t,e.anchorNode,e.anchorOffset),a=fa(t,e.focusNode,e.focusOffset)
if(!o||o.bad||!a||a.bad||0!=le(fe(o,a),r)||0!=le(de(o,a),i)){var s=t.display.view,l=r.line>=t.display.viewFrom&&la(t,r)||{node:s[0].measure.map[2],offset:0},c=i.line<t.display.viewTo&&la(t,i)
if(!c){var u=s[s.length-1].measure,d=u.maps?u.maps[u.maps.length-1]:u.map
c={node:d[d.length-1],offset:d[d.length-2]-d[d.length-3]}}if(!l||!c)return void e.removeAllRanges()
var f,p=e.rangeCount&&e.getRangeAt(0)
try{f=Pa(l.node,l.offset,c.offset,c.node)}catch(h){}f&&(!ya&&t.state.focused?(e.collapse(l.node,l.offset),f.collapsed||(e.removeAllRanges(),e.addRange(f))):(e.removeAllRanges(),e.addRange(f)),p&&null==e.anchorNode?e.addRange(p):ya&&this.startGracePeriod()),this.rememberSelection()}},ol.prototype.startGracePeriod=function(){var e=this
clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},ol.prototype.showMultipleSelections=function(e){n(this.cm.display.cursorDiv,e.cursors),n(this.cm.display.selectionDiv,e.selection)},ol.prototype.rememberSelection=function(){var e=this.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},ol.prototype.selectionInEditor=function(){var e=this.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return o(this.div,t)},ol.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()&&document.activeElement==this.div||this.showSelection(this.prepareSelection(),!0),this.div.focus())},ol.prototype.blur=function(){this.div.blur()},ol.prototype.getField=function(){return this.div},ol.prototype.supportsTouch=function(){return!0},ol.prototype.receivedFocus=function(){function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))}var t=this
this.selectionInEditor()?this.pollSelection():vr(this.cm,function(){return t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,e)},ol.prototype.selectionChanged=function(){var e=this.getSelection()
return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},ol.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm
if(za&&Ma&&this.cm.display.gutterSpecs.length&&ca(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus()
if(!this.composing){this.rememberSelection()
var n=fa(t,e.anchorNode,e.anchorOffset),r=fa(t,e.focusNode,e.focusOffset)
n&&r&&vr(t,function(){wi(t.doc,Wr(n,r),Ga),(n.bad||r.bad)&&(t.curOp.selectionChanged=!0)})}}},ol.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null)
var e=this.cm,t=e.display,n=e.doc.sel.primary(),r=n.from(),i=n.to()
if(0==r.ch&&r.line>e.firstLine()&&(r=se(r.line-1,J(e.doc,r.line-1).length)),i.ch==J(e.doc,i.line).text.length&&i.line<e.lastLine()&&(i=se(i.line+1,0)),r.line<t.viewFrom||i.line>t.viewTo-1)return!1
var o,a,s
r.line==t.viewFrom||0==(o=Mn(e,r.line))?(a=re(t.view[0].line),s=t.view[0].node):(a=re(t.view[o].line),s=t.view[o-1].node.nextSibling)
var l,c,u=Mn(e,i.line)
if(u==t.view.length-1?(l=t.viewTo-1,c=t.lineDiv.lastChild):(l=re(t.view[u+1].line)-1,c=t.view[u+1].node.previousSibling),!s)return!1
for(var d=e.doc.splitLines(da(e,s,c,a,l)),f=ee(e.doc,se(a,0),se(l,J(e.doc,l).text.length));d.length>1&&f.length>1;)if(m(d)==m(f))d.pop(),f.pop(),l--
else{if(d[0]!=f[0])break
d.shift(),f.shift(),a++}for(var p=0,h=0,g=d[0],v=f[0],y=Math.min(g.length,v.length);p<y&&g.charCodeAt(p)==v.charCodeAt(p);)++p
for(var b=m(d),k=m(f),x=Math.min(b.length-(1==d.length?p:0),k.length-(1==f.length?p:0));h<x&&b.charCodeAt(b.length-h-1)==k.charCodeAt(k.length-h-1);)++h
if(1==d.length&&1==f.length&&a==r.line)for(;p&&p>r.ch&&b.charCodeAt(b.length-h-1)==k.charCodeAt(k.length-h-1);)p--,h++
d[d.length-1]=b.slice(0,b.length-h).replace(/^\u200b+/,""),d[0]=d[0].slice(p).replace(/\u200b+$/,"")
var w=se(a,p),_=se(l,f.length?m(f).length-h:0)
return d.length>1||d[0]||le(w,_)?(Pi(e.doc,d,w,_,"+input"),!0):void 0},ol.prototype.ensurePolled=function(){this.forceCompositionEnd()},ol.prototype.reset=function(){this.forceCompositionEnd()},ol.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},ol.prototype.readFromDOMSoon=function(){var e=this
null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return
e.composing=null}e.updateFromDOM()},80))},ol.prototype.updateFromDOM=function(){var e=this
!this.cm.isReadOnly()&&this.pollContent()||vr(this.cm,function(){return Ln(e.cm)})},ol.prototype.setUneditable=function(e){e.contentEditable="false"},ol.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||yr(this.cm,Jo)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},ol.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},ol.prototype.onContextMenu=function(){},ol.prototype.resetPosition=function(){},ol.prototype.needsContentAttribute=!0
var al=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new Ha,this.hasSelection=!1,this.composing=null}
al.prototype.init=function(e){function t(e){if(!z(i,e)){if(i.somethingSelected())Yo({lineWise:!1,text:i.getSelections()})
else{if(!i.options.lineWiseCopyCut)return
var t=na(i)
Yo({lineWise:!0,text:t.text}),"cut"==e.type?i.setSelections(t.ranges,null,Ga):(r.prevInput="",o.value=t.text.join("\n"),Wa(o))}"cut"==e.type&&(i.state.cutIncoming=+new Date)}}var n=this,r=this,i=this.cm
this.createField(e)
var o=this.textarea
e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),Oa&&(o.style.width="0px"),rs(o,"input",function(){wa&&_a>=9&&n.hasSelection&&(n.hasSelection=null),r.poll()}),rs(o,"paste",function(e){z(i,e)||ea(e,i)||(i.state.pasteIncoming=+new Date,r.fastPoll())}),rs(o,"cut",t),rs(o,"copy",t),rs(e.scroller,"paste",function(t){if(!Ft(e,t)&&!z(i,t)){if(!o.dispatchEvent)return i.state.pasteIncoming=+new Date,void r.focus()
var n=new Event("paste")
n.clipboardData=t.clipboardData,o.dispatchEvent(n)}}),rs(e.lineSpace,"selectstart",function(t){Ft(e,t)||I(t)}),rs(o,"compositionstart",function(){var e=i.getCursor("from")
r.composing&&r.composing.range.clear(),r.composing={start:e,range:i.markText(e,i.getCursor("to"),{className:"CodeMirror-composing"})}}),rs(o,"compositionend",function(){r.composing&&(r.poll(),r.composing.range.clear(),r.composing=null)})},al.prototype.createField=function(e){this.wrapper=ia(),this.textarea=this.wrapper.firstChild},al.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},al.prototype.prepareSelection=function(){var e=this.cm,t=e.display,n=e.doc,r=qn(e)
if(e.options.moveInputWithCursor){var i=cn(e,n.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),a=t.lineDiv.getBoundingClientRect()
r.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+a.top-o.top)),r.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+a.left-o.left))}return r},al.prototype.showSelection=function(e){var t=this.cm,r=t.display
n(r.cursorDiv,e.cursors),n(r.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},al.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm
if(t.somethingSelected()){this.prevInput=""
var n=t.getSelection()
this.textarea.value=n,t.state.focused&&Wa(this.textarea),wa&&_a>=9&&(this.hasSelection=n)}else e||(this.prevInput=this.textarea.value="",wa&&_a>=9&&(this.hasSelection=null))}},al.prototype.getField=function(){return this.textarea},al.prototype.supportsTouch=function(){return!1},al.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!Na||a()!=this.textarea))try{this.textarea.focus()}catch(e){}},al.prototype.blur=function(){this.textarea.blur()},al.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},al.prototype.receivedFocus=function(){this.slowPoll()},al.prototype.slowPoll=function(){var e=this
this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},al.prototype.fastPoll=function(){function e(){var r=n.poll()
r||t?(n.pollingFast=!1,n.slowPoll()):(t=!0,n.polling.set(60,e))}var t=!1,n=this
n.pollingFast=!0,n.polling.set(20,e)},al.prototype.poll=function(){var e=this,t=this.cm,n=this.textarea,r=this.prevInput
if(this.contextMenuPending||!t.state.focused||as(n)&&!r&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1
var i=n.value
if(i==r&&!t.somethingSelected())return!1
if(wa&&_a>=9&&this.hasSelection===i||qa&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1
if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0)
if(8203!=o||r||(r="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var a=0,s=Math.min(r.length,i.length);a<s&&r.charCodeAt(a)==i.charCodeAt(a);)++a
return vr(t,function(){Jo(t,i.slice(a),r.length-a,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?n.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},al.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},al.prototype.onKeyPress=function(){wa&&_a>=9&&(this.hasSelection=null),this.fastPoll()},al.prototype.onContextMenu=function(e){function t(){if(null!=a.selectionStart){var e=i.somethingSelected(),t="​"+(e?a.value:"")
a.value="⇚",a.value=t,r.prevInput=e?"":"​",a.selectionStart=1,a.selectionEnd=t.length,o.selForContextMenu=i.doc.sel}}function n(){if(r.contextMenuPending==n&&(r.contextMenuPending=!1,r.wrapper.style.cssText=d,a.style.cssText=u,wa&&_a<9&&o.scrollbars.setScrollTop(o.scroller.scrollTop=l),null!=a.selectionStart)){(!wa||wa&&_a<9)&&t()
var e=0,s=function(){o.selForContextMenu==i.doc.sel&&0==a.selectionStart&&a.selectionEnd>0&&"​"==r.prevInput?yr(i,Ei)(i):e++<10?o.detectingSelectAll=setTimeout(s,500):(o.selForContextMenu=null,o.input.reset())}
o.detectingSelectAll=setTimeout(s,200)}}var r=this,i=r.cm,o=i.display,a=r.textarea
r.contextMenuPending&&r.contextMenuPending()
var s=Sn(i,e),l=o.scroller.scrollTop
if(s&&!La){var c=i.options.resetSelectionOnContextMenu
c&&i.doc.sel.contains(s)==-1&&yr(i,wi)(i.doc,Wr(s),Ga)
var u=a.style.cssText,d=r.wrapper.style.cssText,f=r.wrapper.offsetParent.getBoundingClientRect()
r.wrapper.style.cssText="position: static",a.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-f.top-5)+"px; left: "+(e.clientX-f.left-5)+"px;\n      z-index: 1000; background: "+(wa?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
var p
if(Ca&&(p=window.scrollY),o.input.focus(),Ca&&window.scrollTo(null,p),o.input.reset(),i.somethingSelected()||(a.value=r.prevInput=" "),r.contextMenuPending=n,o.selForContextMenu=i.doc.sel,clearTimeout(o.detectingSelectAll),wa&&_a>=9&&t(),ja){R(e)
var h=function(){E(window,"mouseup",h),setTimeout(n,20)}
rs(window,"mouseup",h)}else setTimeout(n,50)}},al.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e},al.prototype.setUneditable=function(){},al.prototype.needsContentAttribute=!1,Ko(Zo),oa(Zo)
var sl="iter insert remove copy getEditor constructor".split(" ")
for(var ll in Rs.prototype)Rs.prototype.hasOwnProperty(ll)&&f(sl,ll)<0&&(Zo.prototype[ll]=function(e){return function(){return e.apply(this.doc,arguments)}}(Rs.prototype[ll]))
return F(Rs),Zo.inputStyles={textarea:al,contenteditable:ol},Zo.defineMode=function(e){Zo.defaults.mode||"null"==e||(Zo.defaults.mode=e),U.apply(this,arguments)},Zo.defineMIME=K,Zo.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Zo.defineMIME("text/plain","null"),Zo.defineExtension=function(e,t){Zo.prototype[e]=t},Zo.defineDocExtension=function(e,t){Rs.prototype[e]=t},Zo.fromTextArea=ha,ma(Zo),Zo.version="5.56.0",Zo}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){var t=e.search(o)
return t==-1?0:t}function n(e,t,n){return/\bstring\b/.test(e.getTokenTypeAt(a(t.line,0)))&&!/^[\'\"\`]/.test(n)}function r(e,t){var n=e.getMode()
return n.useInnerComments!==!1&&n.innerMode?e.getModeAt(t):n}var i={},o=/[^\s\u00a0]/,a=e.Pos
e.commands.toggleComment=function(e){e.toggleComment()},e.defineExtension("toggleComment",function(e){e||(e=i)
for(var t=this,n=1/0,r=this.listSelections(),o=null,s=r.length-1;s>=0;s--){var l=r[s].from(),c=r[s].to()
l.line>=n||(c.line>=n&&(c=a(n,0)),n=l.line,null==o?t.uncomment(l,c,e)?o="un":(t.lineComment(l,c,e),o="line"):"un"==o?t.uncomment(l,c,e):t.lineComment(l,c,e))}}),e.defineExtension("lineComment",function(e,s,l){l||(l=i)
var c=this,u=r(c,e),d=c.getLine(e.line)
if(null!=d&&!n(c,e,d)){var f=l.lineComment||u.lineComment
if(!f)return void((l.blockCommentStart||u.blockCommentStart)&&(l.fullLines=!0,c.blockComment(e,s,l)))
var p=Math.min(0!=s.ch||s.line==e.line?s.line+1:s.line,c.lastLine()+1),h=null==l.padding?" ":l.padding,m=l.commentBlankLines||e.line==s.line
c.operation(function(){if(l.indent){for(var n=null,r=e.line;r<p;++r){var i=c.getLine(r),s=i.slice(0,t(i));(null==n||n.length>s.length)&&(n=s)}for(var r=e.line;r<p;++r){var i=c.getLine(r),u=n.length;(m||o.test(i))&&(i.slice(0,u)!=n&&(u=t(i)),c.replaceRange(n+f+h,a(r,0),a(r,u)))}}else for(var r=e.line;r<p;++r)(m||o.test(c.getLine(r)))&&c.replaceRange(f+h,a(r,0))})}}),e.defineExtension("blockComment",function(e,t,n){n||(n=i)
var s=this,l=r(s,e),c=n.blockCommentStart||l.blockCommentStart,u=n.blockCommentEnd||l.blockCommentEnd
if(!c||!u)return void((n.lineComment||l.lineComment)&&0!=n.fullLines&&s.lineComment(e,t,n))
if(!/\bcomment\b/.test(s.getTokenTypeAt(a(e.line,0)))){var d=Math.min(t.line,s.lastLine())
d!=e.line&&0==t.ch&&o.test(s.getLine(d))&&--d
var f=null==n.padding?" ":n.padding
e.line>d||s.operation(function(){if(0!=n.fullLines){var r=o.test(s.getLine(d))
s.replaceRange(f+u,a(d)),s.replaceRange(c+f,a(e.line,0))
var i=n.blockCommentLead||l.blockCommentLead
if(null!=i)for(var p=e.line+1;p<=d;++p)(p!=d||r)&&s.replaceRange(i+f,a(p,0))}else s.replaceRange(u,t),s.replaceRange(c,e)})}}),e.defineExtension("uncomment",function(e,t,n){n||(n=i)
var s,l=this,c=r(l,e),u=Math.min(0!=t.ch||t.line==e.line?t.line:t.line-1,l.lastLine()),d=Math.min(e.line,u),f=n.lineComment||c.lineComment,p=[],h=null==n.padding?" ":n.padding
e:if(f){for(var m=d;m<=u;++m){var g=l.getLine(m),v=g.indexOf(f)
if(v>-1&&!/comment/.test(l.getTokenTypeAt(a(m,v+1)))&&(v=-1),v==-1&&o.test(g))break e
if(v>-1&&o.test(g.slice(0,v)))break e
p.push(g)}if(l.operation(function(){for(var e=d;e<=u;++e){var t=p[e-d],n=t.indexOf(f),r=n+f.length
n<0||(t.slice(r,r+h.length)==h&&(r+=h.length),s=!0,l.replaceRange("",a(e,n),a(e,r)))}}),s)return!0}var y=n.blockCommentStart||c.blockCommentStart,b=n.blockCommentEnd||c.blockCommentEnd
if(!y||!b)return!1
var k=n.blockCommentLead||c.blockCommentLead,x=l.getLine(d),w=x.indexOf(y)
if(w==-1)return!1
var _=u==d?x:l.getLine(u),C=_.indexOf(b,u==d?w+y.length:0),S=a(d,w+1),M=a(u,C+1)
if(C==-1||!/comment/.test(l.getTokenTypeAt(S))||!/comment/.test(l.getTokenTypeAt(M))||l.getRange(S,M,"\n").indexOf(b)>-1)return!1
var L=x.lastIndexOf(y,e.ch),T=L==-1?-1:x.slice(0,e.ch).indexOf(b,L+y.length)
if(L!=-1&&T!=-1&&T+b.length!=e.ch)return!1
T=_.indexOf(b,t.ch)
var A=_.slice(t.ch).lastIndexOf(y,T-t.ch)
return L=T==-1||A==-1?-1:t.ch+A,(T==-1||L==-1||L==t.ch)&&(l.operation(function(){l.replaceRange("",a(u,C-(h&&_.slice(C-h.length,C)==h?h.length:0)),a(u,C+b.length))
var e=w+y.length
if(h&&x.slice(e,e+h.length)==h&&(e+=h.length),l.replaceRange("",a(d,w),a(d,e)),k)for(var t=d+1;t<=u;++t){var n=l.getLine(t),r=n.indexOf(k)
if(r!=-1&&!o.test(n.slice(0,r))){var i=r+k.length
h&&n.slice(i,i+h.length)==h&&(i+=h.length),l.replaceRange("",a(t,r),a(t,i))}}}),!0)})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(t){if(t.getOption("disableInput"))return e.Pass
for(var i,a=t.listSelections(),s=[],l=0;l<a.length;l++){var c=a[l].head
if(!/\bcomment\b/.test(t.getTokenTypeAt(c)))return e.Pass
var u=t.getModeAt(c)
if(i){if(i!=u)return e.Pass}else i=u
var d,f,p=null,h=i.blockCommentStart,m=i.lineComment
if(h&&i.blockCommentContinue){d=t.getLine(c.line)
var g=d.lastIndexOf(i.blockCommentEnd,c.ch-i.blockCommentEnd.length)
if(g!=-1&&g==c.ch-i.blockCommentEnd.length||m&&(f=d.lastIndexOf(m,c.ch-1))>-1&&/\bcomment\b/.test(t.getTokenTypeAt({line:c.line,ch:f+1})));else if(c.ch>=h.length&&(f=d.lastIndexOf(h,c.ch-h.length))>-1&&f>g)if(n(0,d)>=f)p=d.slice(0,f)
else{var v,y=t.options.tabSize
f=e.countColumn(d,f,y),p=t.options.indentWithTabs?o.call("\t",v=Math.floor(f/y))+o.call(" ",f-y*v):o.call(" ",f)}else(f=d.indexOf(i.blockCommentContinue))>-1&&f<=c.ch&&f<=n(0,d)&&(p=d.slice(0,f))
null!=p&&(p+=i.blockCommentContinue)}if(null==p&&m&&r(t))if(null==d&&(d=t.getLine(c.line)),f=d.indexOf(m),c.ch||f){if(f>-1&&n(0,d)>=f){if(p=n(c.ch,d)>-1,!p){var b=t.getLine(c.line+1)||"",k=b.indexOf(m)
p=k>-1&&n(0,b)>=k||null}p&&(p=d.slice(0,f)+m+d.slice(f+m.length).match(/^\s*/)[0])}}else p=""
if(null==p)return e.Pass
s[l]="\n"+p}t.operation(function(){for(var e=a.length-1;e>=0;e--)t.replaceRange(s[e],a[e].from(),a[e].to(),"+insert")})}function n(e,t){i.lastIndex=e
var n=i.exec(t)
return n?n.index:-1}function r(e){var t=e.getOption("continueComments")
return!t||"object"!=typeof t||t.continueLineComment!==!1}var i=/\S/g,o=String.prototype.repeat||function(e){return Array(e+1).join(this)}
e.defineOption("continueComments",null,function(n,r,i){if(i&&i!=e.Init&&n.removeKeyMap("continueComment"),r){var o="Enter"
"string"==typeof r?o=r:"object"==typeof r&&r.key&&(o=r.key)
var a={name:"continueComment"}
a[o]=t,n.addKeyMap(a)}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(t,n,r){var i,o=t.getWrapperElement()
return i=o.appendChild(document.createElement("div")),r?i.className="CodeMirror-dialog CodeMirror-dialog-bottom":i.className="CodeMirror-dialog CodeMirror-dialog-top","string"==typeof n?i.innerHTML=n:i.appendChild(n),e.addClass(o,"dialog-opened"),i}function n(e,t){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=t}e.defineExtension("openDialog",function(r,i,o){function a(t){if("string"==typeof t)d.value=t
else{if(c)return
c=!0,e.rmClass(l.parentNode,"dialog-opened"),l.parentNode.removeChild(l),u.focus(),o.onClose&&o.onClose(l)}}o||(o={}),n(this,null)
var s,l=t(this,r,o.bottom),c=!1,u=this,d=l.getElementsByTagName("input")[0]
return d?(d.focus(),o.value&&(d.value=o.value,o.selectValueOnOpen!==!1&&d.select()),o.onInput&&e.on(d,"input",function(e){o.onInput(e,d.value,a)}),o.onKeyUp&&e.on(d,"keyup",function(e){o.onKeyUp(e,d.value,a)}),e.on(d,"keydown",function(t){o&&o.onKeyDown&&o.onKeyDown(t,d.value,a)||((27==t.keyCode||o.closeOnEnter!==!1&&13==t.keyCode)&&(d.blur(),e.e_stop(t),a()),13==t.keyCode&&i(d.value,t))}),o.closeOnBlur!==!1&&e.on(l,"focusout",function(e){null!==e.relatedTarget&&a()})):(s=l.getElementsByTagName("button")[0])&&(e.on(s,"click",function(){a(),u.focus()}),o.closeOnBlur!==!1&&e.on(s,"blur",a),s.focus()),a}),e.defineExtension("openConfirm",function(r,i,o){function a(){c||(c=!0,e.rmClass(s.parentNode,"dialog-opened"),s.parentNode.removeChild(s),u.focus())}n(this,null)
var s=t(this,r,o&&o.bottom),l=s.getElementsByTagName("button"),c=!1,u=this,d=1
l[0].focus()
for(var f=0;f<l.length;++f){var p=l[f]
!function(t){e.on(p,"click",function(n){e.e_preventDefault(n),a(),t&&t(u)})}(i[f]),e.on(p,"blur",function(){--d,setTimeout(function(){d<=0&&a()},200)}),e.on(p,"focus",function(){++d})}}),e.defineExtension("openNotification",function(r,i){function o(){l||(l=!0,clearTimeout(a),e.rmClass(s.parentNode,"dialog-opened"),s.parentNode.removeChild(s))}n(this,o)
var a,s=t(this,r,i&&i.bottom),l=!1,c=i&&"undefined"!=typeof i.duration?i.duration:5e3
return e.on(s,"click",function(t){e.e_preventDefault(t),o()}),c&&(a=setTimeout(o,c)),o})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function n(e){t(e)
var n=e.state.placeholder=document.createElement("pre")
n.style.cssText="height: 0; overflow: visible",n.style.direction=e.getOption("direction"),n.className="CodeMirror-placeholder CodeMirror-line-like"
var r=e.getOption("placeholder")
"string"==typeof r&&(r=document.createTextNode(r)),n.appendChild(r),e.display.lineSpace.insertBefore(n,e.display.lineSpace.firstChild)}function r(e){o(e)&&n(e)}function i(e){var r=e.getWrapperElement(),i=o(e)
r.className=r.className.replace(" CodeMirror-empty","")+(i?" CodeMirror-empty":""),i?n(e):t(e)}function o(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",function(n,o,a){var s=a&&a!=e.Init
if(o&&!s)n.on("blur",r),n.on("change",i),n.on("swapDoc",i),i(n)
else if(!o&&s){n.off("blur",r),n.off("change",i),n.off("swapDoc",i),t(n)
var l=n.getWrapperElement()
l.className=l.className.replace(" CodeMirror-empty","")}o&&!n.hasFocus()&&r(n)})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(e,t){return"pairs"==t&&"string"==typeof e?e:"object"==typeof e&&null!=e[t]?e[t]:d[t]}function n(e){for(var t=0;t<e.length;t++){var n=e.charAt(t),i="'"+n+"'"
p[i]||(p[i]=r(n))}}function r(e){return function(t){return l(t,e)}}function i(e){var t=e.state.closeBrackets
if(!t||t.override)return t
var n=e.getModeAt(e.getCursor())
return n.closeBrackets||t}function o(n){var r=i(n)
if(!r||n.getOption("disableInput"))return e.Pass
for(var o=t(r,"pairs"),a=n.listSelections(),s=0;s<a.length;s++){if(!a[s].empty())return e.Pass
var l=c(n,a[s].head)
if(!l||o.indexOf(l)%2!=0)return e.Pass}for(var s=a.length-1;s>=0;s--){var u=a[s].head
n.replaceRange("",f(u.line,u.ch-1),f(u.line,u.ch+1),"+delete")}}function a(n){var r=i(n),o=r&&t(r,"explode")
if(!o||n.getOption("disableInput"))return e.Pass
for(var a=n.listSelections(),s=0;s<a.length;s++){if(!a[s].empty())return e.Pass
var l=c(n,a[s].head)
if(!l||o.indexOf(l)%2!=0)return e.Pass}n.operation(function(){var e=n.lineSeparator()||"\n"
n.replaceSelection(e+e,null),n.execCommand("goCharLeft"),a=n.listSelections()
for(var t=0;t<a.length;t++){var r=a[t].head.line
n.indentLine(r,null,!0),n.indentLine(r+1,null,!0)}})}function s(t){var n=e.cmpPos(t.anchor,t.head)>0
return{anchor:new f(t.anchor.line,t.anchor.ch+(n?-1:1)),head:new f(t.head.line,t.head.ch+(n?1:-1))}}function l(n,r){var o=i(n)
if(!o||n.getOption("disableInput"))return e.Pass
var a=t(o,"pairs"),l=a.indexOf(r)
if(l==-1)return e.Pass
for(var c,d=t(o,"closeBefore"),p=t(o,"triples"),h=a.charAt(l+1)==r,m=n.listSelections(),g=l%2==0,v=0;v<m.length;v++){var y,b=m[v],k=b.head,x=n.getRange(k,f(k.line,k.ch+1))
if(g&&!b.empty())y="surround"
else if(!h&&g||x!=r)if(h&&k.ch>1&&p.indexOf(r)>=0&&n.getRange(f(k.line,k.ch-2),k)==r+r){if(k.ch>2&&/\bstring/.test(n.getTokenTypeAt(f(k.line,k.ch-2))))return e.Pass
y="addFour"}else if(h){var w=0==k.ch?" ":n.getRange(f(k.line,k.ch-1),k)
if(e.isWordChar(x)||w==r||e.isWordChar(w))return e.Pass
y="both"}else{if(!g||!(0===x.length||/\s/.test(x)||d.indexOf(x)>-1))return e.Pass
y="both"}else y=h&&u(n,k)?"both":p.indexOf(r)>=0&&n.getRange(k,f(k.line,k.ch+3))==r+r+r?"skipThree":"skip"
if(c){if(c!=y)return e.Pass}else c=y}var _=l%2?a.charAt(l-1):r,C=l%2?r:a.charAt(l+1)
n.operation(function(){if("skip"==c)n.execCommand("goCharRight")
else if("skipThree"==c)for(var e=0;e<3;e++)n.execCommand("goCharRight")
else if("surround"==c){for(var t=n.getSelections(),e=0;e<t.length;e++)t[e]=_+t[e]+C
n.replaceSelections(t,"around"),t=n.listSelections().slice()
for(var e=0;e<t.length;e++)t[e]=s(t[e])
n.setSelections(t)}else"both"==c?(n.replaceSelection(_+C,null),n.triggerElectric(_+C),n.execCommand("goCharLeft")):"addFour"==c&&(n.replaceSelection(_+_+_+_,"before"),n.execCommand("goCharRight"))})}function c(e,t){var n=e.getRange(f(t.line,t.ch-1),f(t.line,t.ch+1))
return 2==n.length?n:null}function u(e,t){var n=e.getTokenAt(f(t.line,t.ch+1))
return/\bstring/.test(n.type)&&n.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}var d={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},f=e.Pos
e.defineOption("autoCloseBrackets",!1,function(r,i,o){o&&o!=e.Init&&(r.removeKeyMap(p),r.state.closeBrackets=null),i&&(n(t(i,"pairs")),r.state.closeBrackets=i,r.addKeyMap(p))})
var p={Backspace:o,Enter:a}
n(d.pairs+"`")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../fold/xml-fold")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../fold/xml-fold"],e):e(CodeMirror)}(function(e){function t(t){if(t.getOption("disableInput"))return e.Pass
for(var n=t.listSelections(),r=[],l=t.getOption("autoCloseTags"),c=0;c<n.length;c++){if(!n[c].empty())return e.Pass
var u=n[c].head,d=t.getTokenAt(u),f=e.innerMode(t.getMode(),d.state),p=f.state,h=f.mode.xmlCurrentTag&&f.mode.xmlCurrentTag(p),m=h&&h.name
if(!m)return e.Pass
var g="html"==f.mode.configuration,v="object"==typeof l&&l.dontCloseTags||g&&a,y="object"==typeof l&&l.indentTags||g&&s
d.end>u.ch&&(m=m.slice(0,m.length-d.end+u.ch))
var b=m.toLowerCase()
if(!m||"string"==d.type&&(d.end!=u.ch||!/[\"\']/.test(d.string.charAt(d.string.length-1))||1==d.string.length)||"tag"==d.type&&h.close||d.string.indexOf("/")==u.ch-d.start-1||v&&i(v,b)>-1||o(t,f.mode.xmlCurrentContext&&f.mode.xmlCurrentContext(p)||[],m,u,!0))return e.Pass
var k="object"==typeof l&&l.emptyTags
if(k&&i(k,m)>-1)r[c]={text:"/>",newPos:e.Pos(u.line,u.ch+2)}
else{var x=y&&i(y,b)>-1
r[c]={indent:x,text:">"+(x?"\n\n":"")+"</"+m+">",newPos:x?e.Pos(u.line+1,0):e.Pos(u.line,u.ch+1)}}}for(var w="object"==typeof l&&l.dontIndentOnAutoClose,c=n.length-1;c>=0;c--){var _=r[c]
t.replaceRange(_.text,n[c].head,n[c].anchor,"+insert")
var C=t.listSelections().slice(0)
C[c]={head:_.newPos,anchor:_.newPos},t.setSelections(C),!w&&_.indent&&(t.indentLine(_.newPos.line,null,!0),t.indentLine(_.newPos.line+1,null,!0))}}function n(t,n){for(var r=t.listSelections(),i=[],a=n?"/":"</",s=t.getOption("autoCloseTags"),l="object"==typeof s&&s.dontIndentOnSlash,c=0;c<r.length;c++){if(!r[c].empty())return e.Pass
var u=r[c].head,d=t.getTokenAt(u),f=e.innerMode(t.getMode(),d.state),p=f.state
if(n&&("string"==d.type||"<"!=d.string.charAt(0)||d.start!=u.ch-1))return e.Pass
var h,m="xml"!=f.mode.name&&"htmlmixed"==t.getMode().name
if(m&&"javascript"==f.mode.name)h=a+"script"
else if(m&&"css"==f.mode.name)h=a+"style"
else{var g=f.mode.xmlCurrentContext&&f.mode.xmlCurrentContext(p)
if(!g||g.length&&o(t,g,g[g.length-1],u))return e.Pass
h=a+g[g.length-1]}">"!=t.getLine(u.line).charAt(d.end)&&(h+=">"),i[c]=h}if(t.replaceSelections(i),r=t.listSelections(),!l)for(var c=0;c<r.length;c++)(c==r.length-1||r[c].head.line<r[c+1].head.line)&&t.indentLine(r[c].head.line)}function r(t){return t.getOption("disableInput")?e.Pass:n(t,!0)}function i(e,t){if(e.indexOf)return e.indexOf(t)
for(var n=0,r=e.length;n<r;++n)if(e[n]==t)return n
return-1}function o(t,n,r,i,o){if(!e.scanForClosingTag)return!1
var a=Math.min(t.lastLine()+1,i.line+500),s=e.scanForClosingTag(t,i,null,a)
if(!s||s.tag!=r)return!1
for(var l=o?1:0,c=n.length-1;c>=0&&n[c]==r;c--)++l
i=s.to
for(var c=1;c<l;c++){var u=e.scanForClosingTag(t,i,null,a)
if(!u||u.tag!=r)return!1
i=u.to}return!0}e.defineOption("autoCloseTags",!1,function(n,i,o){if(o!=e.Init&&o&&n.removeKeyMap("autoCloseTags"),i){var a={name:"autoCloseTags"}
"object"==typeof i&&i.whenClosing===!1||(a["'/'"]=function(e){return r(e)}),"object"==typeof i&&i.whenOpening===!1||(a["'>'"]=function(e){return t(e)}),n.addKeyMap(a)}})
var a=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],s=["applet","blockquote","body","button","div","dl","fieldset","form","frameset","h1","h2","h3","h4","h5","h6","head","html","iframe","layer","legend","object","ol","p","select","table","ul"]
e.commands.closeTag=function(e){return n(e)}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t){var r=t.line,i=0,o=0,a=n.exec(e.getLine(r)),s=a[1]
do{i+=1
var l=r+i,c=e.getLine(l),u=n.exec(c)
if(u){var d=u[1],f=parseInt(a[3],10)+i-o,p=parseInt(u[3],10),h=p
if(s!==d||isNaN(p)){if(s.length>d.length)return
if(s.length<d.length&&1===i)return
o+=1}else f===p&&(h=p+1),f>p&&(h=f+1),e.replaceRange(c.replace(n,d+h+u[4]+u[5]),{line:l,ch:0},{line:l,ch:c.length})}}while(u)}var n=/^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,r=/^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,i=/[*+-]\s/
e.commands.newlineAndIndentContinueMarkdownList=function(o){if(o.getOption("disableInput"))return e.Pass
for(var a=o.listSelections(),s=[],l=0;l<a.length;l++){var c=a[l].head,u=o.getStateAfter(c.line),d=e.innerMode(o.getMode(),u)
if("markdown"!==d.mode.name)return void o.execCommand("newlineAndIndent")
u=d.state
var f=u.list!==!1,p=0!==u.quote,h=o.getLine(c.line),m=n.exec(h),g=/^\s*$/.test(h.slice(0,c.ch))
if(!a[l].empty()||!f&&!p||!m||g)return void o.execCommand("newlineAndIndent")
if(r.test(h)){var v=p&&/>\s*$/.test(h),y=!/>\s*$/.test(h);(v||y)&&o.replaceRange("",{line:c.line,ch:0},{line:c.line,ch:c.ch+1}),s[l]="\n"}else{var b=m[1],k=m[5],x=!(i.test(m[2])||m[2].indexOf(">")>=0),w=x?parseInt(m[3],10)+1+m[4]:m[2].replace("x"," ")
s[l]="\n"+b+w+k,x&&t(o,c)}}o.replaceSelections(s)}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(e){return e&&e.bracketRegex||/[(){}[\]]/}function n(e,n,i){var o=e.getLineHandle(n.line),a=n.ch-1,c=i&&i.afterCursor
null==c&&(c=/(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className))
var u=t(i),d=!c&&a>=0&&u.test(o.text.charAt(a))&&l[o.text.charAt(a)]||u.test(o.text.charAt(a+1))&&l[o.text.charAt(++a)]
if(!d)return null
var f=">"==d.charAt(1)?1:-1
if(i&&i.strict&&f>0!=(a==n.ch))return null
var p=e.getTokenTypeAt(s(n.line,a+1)),h=r(e,s(n.line,a+(f>0?1:0)),f,p||null,i)
return null==h?null:{from:s(n.line,a),to:h&&h.pos,match:h&&h.ch==d.charAt(0),forward:f>0}}function r(e,n,r,i,o){for(var a=o&&o.maxScanLineLength||1e4,c=o&&o.maxScanLines||1e3,u=[],d=t(o),f=r>0?Math.min(n.line+c,e.lastLine()+1):Math.max(e.firstLine()-1,n.line-c),p=n.line;p!=f;p+=r){var h=e.getLine(p)
if(h){var m=r>0?0:h.length-1,g=r>0?h.length:-1
if(!(h.length>a))for(p==n.line&&(m=n.ch-(r<0?1:0));m!=g;m+=r){var v=h.charAt(m)
if(d.test(v)&&(void 0===i||e.getTokenTypeAt(s(p,m+1))==i)){var y=l[v]
if(y&&">"==y.charAt(1)==r>0)u.push(v)
else{if(!u.length)return{pos:s(p,m),ch:v}
u.pop()}}}}}return p-r!=(r>0?e.lastLine():e.firstLine())&&null}function i(e,t,r){for(var i=e.state.matchBrackets.maxHighlightLineLength||1e3,o=[],l=e.listSelections(),c=0;c<l.length;c++){var u=l[c].empty()&&n(e,l[c].head,r)
if(u&&e.getLine(u.from.line).length<=i){var d=u.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket"
o.push(e.markText(u.from,s(u.from.line,u.from.ch+1),{className:d})),u.to&&e.getLine(u.to.line).length<=i&&o.push(e.markText(u.to,s(u.to.line,u.to.ch+1),{className:d}))}}if(o.length){a&&e.state.focused&&e.focus()
var f=function(){e.operation(function(){for(var e=0;e<o.length;e++)o[e].clear()})}
if(!t)return f
setTimeout(f,800)}}function o(e){e.operation(function(){e.state.matchBrackets.currentlyHighlighted&&(e.state.matchBrackets.currentlyHighlighted(),e.state.matchBrackets.currentlyHighlighted=null),e.state.matchBrackets.currentlyHighlighted=i(e,!1,e.state.matchBrackets)})}var a=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),s=e.Pos,l={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"}
e.defineOption("matchBrackets",!1,function(t,n,r){function i(e){e.state.matchBrackets&&e.state.matchBrackets.currentlyHighlighted&&(e.state.matchBrackets.currentlyHighlighted(),e.state.matchBrackets.currentlyHighlighted=null)}r&&r!=e.Init&&(t.off("cursorActivity",o),t.off("focus",o),t.off("blur",i),i(t)),n&&(t.state.matchBrackets="object"==typeof n?n:{},t.on("cursorActivity",o),t.on("focus",o),t.on("blur",i))}),e.defineExtension("matchBrackets",function(){i(this,!0)}),e.defineExtension("findMatchingBracket",function(e,t,r){return(r||"boolean"==typeof t)&&(r?(r.strict=t,t=r):t=t?{strict:!0}:null),n(this,e,t)}),e.defineExtension("scanForBracket",function(e,t,n,i){return r(this,e,t,n,i)})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.registerHelper("fold","brace",function(t,n){function r(r){for(var s=n.ch,l=0;;){var c=s<=0?-1:a.lastIndexOf(r,s-1)
if(c!=-1){if(1==l&&c<n.ch)break
if(i=t.getTokenTypeAt(e.Pos(o,c+1)),!/^(comment|string)/.test(i))return c+1
s=c-1}else{if(1==l)break
l=1,s=a.length}}}var i,o=n.line,a=t.getLine(o),s="{",l="}",c=r("{")
if(null==c&&(s="[",l="]",c=r("[")),null!=c){var u,d,f=1,p=t.lastLine()
e:for(var h=o;h<=p;++h)for(var m=t.getLine(h),g=h==o?c:0;;){var v=m.indexOf(s,g),y=m.indexOf(l,g)
if(v<0&&(v=m.length),y<0&&(y=m.length),g=Math.min(v,y),g==m.length)break
if(t.getTokenTypeAt(e.Pos(h,g+1))==i)if(g==v)++f
else if(!--f){u=h,d=g
break e}++g}if(null!=u&&o!=u)return{from:e.Pos(o,c),to:e.Pos(u,d)}}}),e.registerHelper("fold","import",function(t,n){function r(n){if(n<t.firstLine()||n>t.lastLine())return null
var r=t.getTokenAt(e.Pos(n,1))
if(/\S/.test(r.string)||(r=t.getTokenAt(e.Pos(n,r.end+1))),"keyword"!=r.type||"import"!=r.string)return null
for(var i=n,o=Math.min(t.lastLine(),n+10);i<=o;++i){var a=t.getLine(i),s=a.indexOf(";")
if(s!=-1)return{startCh:r.end,end:e.Pos(i,s)}}}var i,o=n.line,a=r(o)
if(!a||r(o-1)||(i=r(o-2))&&i.end.line==o-1)return null
for(var s=a.end;;){var l=r(s.line+1)
if(null==l)break
s=l.end}return{from:t.clipPos(e.Pos(o,a.startCh+1)),to:s}}),e.registerHelper("fold","include",function(t,n){function r(n){if(n<t.firstLine()||n>t.lastLine())return null
var r=t.getTokenAt(e.Pos(n,1))
return/\S/.test(r.string)||(r=t.getTokenAt(e.Pos(n,r.end+1))),"meta"==r.type&&"#include"==r.string.slice(0,8)?r.start+8:void 0}var i=n.line,o=r(i)
if(null==o||null!=r(i-1))return null
for(var a=i;;){var s=r(a+1)
if(null==s)break;++a}return{from:e.Pos(i,o+1),to:t.clipPos(e.Pos(a))}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.registerGlobalHelper("fold","comment",function(e){return e.blockCommentStart&&e.blockCommentEnd},function(t,n){var r=t.getModeAt(n),i=r.blockCommentStart,o=r.blockCommentEnd
if(i&&o){for(var a,s=n.line,l=t.getLine(s),c=n.ch,u=0;;){var d=c<=0?-1:l.lastIndexOf(i,c-1)
if(d!=-1){if(1==u&&d<n.ch)return
if(/comment/.test(t.getTokenTypeAt(e.Pos(s,d+1)))&&(0==d||l.slice(d-o.length,d)==o||!/comment/.test(t.getTokenTypeAt(e.Pos(s,d))))){a=d+i.length
break}c=d-1}else{if(1==u)return
u=1,c=l.length}}var f,p,h=1,m=t.lastLine()
e:for(var g=s;g<=m;++g)for(var v=t.getLine(g),y=g==s?a:0;;){var b=v.indexOf(i,y),k=v.indexOf(o,y)
if(b<0&&(b=v.length),k<0&&(k=v.length),y=Math.min(b,k),y==v.length)break
if(y==b)++h
else if(!--h){f=g,p=y
break e}++y}if(null!=f&&(s!=f||p!=a))return{from:e.Pos(s,a),to:e.Pos(f,p)}}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(t,i,o,a){function s(e){var n=l(t,i)
if(!n||n.to.line-n.from.line<c)return null
for(var r=t.findMarksAt(n.from),o=0;o<r.length;++o)if(r[o].__isFold&&"fold"!==a){if(!e)return null
n.cleared=!0,r[o].clear()}return n}if(o&&o.call){var l=o
o=null}else var l=r(t,o,"rangeFinder")
"number"==typeof i&&(i=e.Pos(i,0))
var c=r(t,o,"minFoldSize"),u=s(!0)
if(r(t,o,"scanUp"))for(;!u&&i.line>t.firstLine();)i=e.Pos(i.line-1,0),u=s(!1)
if(u&&!u.cleared&&"unfold"!==a){var d=n(t,o,u)
e.on(d,"mousedown",function(t){f.clear(),e.e_preventDefault(t)})
var f=t.markText(u.from,u.to,{replacedWith:d,clearOnEnter:r(t,o,"clearOnEnter"),__isFold:!0})
f.on("clear",function(n,r){e.signal(t,"unfold",t,n,r)}),e.signal(t,"fold",t,u.from,u.to)}}function n(e,t,n){var i=r(e,t,"widget")
if("function"==typeof i&&(i=i(n.from,n.to)),"string"==typeof i){var o=document.createTextNode(i)
i=document.createElement("span"),i.appendChild(o),i.className="CodeMirror-foldmarker"}else i&&(i=i.cloneNode(!0))
return i}function r(e,t,n){if(t&&void 0!==t[n])return t[n]
var r=e.options.foldOptions
return r&&void 0!==r[n]?r[n]:i[n]}e.newFoldFunction=function(e,n){return function(r,i){t(r,i,{rangeFinder:e,widget:n})}},e.defineExtension("foldCode",function(e,n,r){t(this,e,n,r)}),e.defineExtension("isFolded",function(e){for(var t=this.findMarksAt(e),n=0;n<t.length;++n)if(t[n].__isFold)return!0}),e.commands.toggleFold=function(e){e.foldCode(e.getCursor())},e.commands.fold=function(e){e.foldCode(e.getCursor(),null,"fold")},e.commands.unfold=function(e){e.foldCode(e.getCursor(),null,"unfold")},e.commands.foldAll=function(t){t.operation(function(){for(var n=t.firstLine(),r=t.lastLine();n<=r;n++)t.foldCode(e.Pos(n,0),null,"fold")})},e.commands.unfoldAll=function(t){t.operation(function(){for(var n=t.firstLine(),r=t.lastLine();n<=r;n++)t.foldCode(e.Pos(n,0),null,"unfold")})},e.registerHelper("fold","combine",function(){var e=Array.prototype.slice.call(arguments,0)
return function(t,n){for(var r=0;r<e.length;++r){var i=e[r](t,n)
if(i)return i}}}),e.registerHelper("fold","auto",function(e,t){for(var n=e.getHelpers(t,"fold"),r=0;r<n.length;r++){var i=n[r](e,t)
if(i)return i}})
var i={rangeFinder:e.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1,clearOnEnter:!0}
e.defineOption("foldOptions",null),e.defineExtension("foldOption",function(e,t){return r(this,e,t)})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("./foldcode")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./foldcode"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){this.options=e,this.from=this.to=0}function n(e){return e===!0&&(e={}),null==e.gutter&&(e.gutter="CodeMirror-foldgutter"),null==e.indicatorOpen&&(e.indicatorOpen="CodeMirror-foldgutter-open"),null==e.indicatorFolded&&(e.indicatorFolded="CodeMirror-foldgutter-folded"),e}function r(e,t){for(var n=e.findMarks(f(t,0),f(t+1,0)),r=0;r<n.length;++r)if(n[r].__isFold){var i=n[r].find(-1)
if(i&&i.line===t)return n[r]}}function i(e){if("string"==typeof e){var t=document.createElement("div")
return t.className=e+" CodeMirror-guttermarker-subtle",t}return e.cloneNode(!0)}function o(e,t,n){var o=e.state.foldGutter.options,s=t-1,l=e.foldOption(o,"minFoldSize"),c=e.foldOption(o,"rangeFinder"),u="string"==typeof o.indicatorFolded&&a(o.indicatorFolded),d="string"==typeof o.indicatorOpen&&a(o.indicatorOpen)
e.eachLine(t,n,function(t){++s
var n=null,a=t.gutterMarkers
if(a&&(a=a[o.gutter]),r(e,s)){if(u&&a&&u.test(a.className))return
n=i(o.indicatorFolded)}else{var p=f(s,0),h=c&&c(e,p)
if(h&&h.to.line-h.from.line>=l){if(d&&a&&d.test(a.className))return
n=i(o.indicatorOpen)}}(n||a)&&e.setGutterMarker(t,o.gutter,n)})}function a(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function s(e){var t=e.getViewport(),n=e.state.foldGutter
n&&(e.operation(function(){o(e,t.from,t.to)}),n.from=t.from,n.to=t.to)}function l(e,t,n){var i=e.state.foldGutter
if(i){var o=i.options
if(n==o.gutter){var a=r(e,t)
a?a.clear():e.foldCode(f(t,0),o)}}}function c(e){var t=e.state.foldGutter
if(t){var n=t.options
t.from=t.to=0,clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout(function(){s(e)},n.foldOnChangeTimeSpan||600)}}function u(e){var t=e.state.foldGutter
if(t){var n=t.options
clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout(function(){var n=e.getViewport()
t.from==t.to||n.from-t.to>20||t.from-n.to>20?s(e):e.operation(function(){n.from<t.from&&(o(e,n.from,t.from),t.from=n.from),n.to>t.to&&(o(e,t.to,n.to),t.to=n.to)})},n.updateViewportTimeSpan||400)}}function d(e,t){var n=e.state.foldGutter
if(n){var r=t.line
r>=n.from&&r<n.to&&o(e,r,r+1)}}e.defineOption("foldGutter",!1,function(r,i,o){o&&o!=e.Init&&(r.clearGutter(r.state.foldGutter.options.gutter),r.state.foldGutter=null,r.off("gutterClick",l),r.off("changes",c),r.off("viewportChange",u),r.off("fold",d),r.off("unfold",d),r.off("swapDoc",c)),i&&(r.state.foldGutter=new t(n(i)),s(r),r.on("gutterClick",l),r.on("changes",c),r.on("viewportChange",u),r.on("fold",d),r.on("unfold",d),r.on("swapDoc",c))})
var f=e.Pos}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t){return e.line-t.line||e.ch-t.ch}function n(e,t,n,r){this.line=t,this.ch=n,this.cm=e,this.text=e.getLine(t),this.min=r?Math.max(r.from,e.firstLine()):e.firstLine(),this.max=r?Math.min(r.to-1,e.lastLine()):e.lastLine()}function r(e,t){var n=e.cm.getTokenTypeAt(f(e.line,t))
return n&&/\btag\b/.test(n)}function i(e){if(!(e.line>=e.max))return e.ch=0,e.text=e.cm.getLine(++e.line),!0}function o(e){if(!(e.line<=e.min))return e.text=e.cm.getLine(--e.line),e.ch=e.text.length,!0}function a(e){for(;;){var t=e.text.indexOf(">",e.ch)
if(t==-1){if(i(e))continue
return}{if(r(e,t+1)){var n=e.text.lastIndexOf("/",t),o=n>-1&&!/\S/.test(e.text.slice(n+1,t))
return e.ch=t+1,o?"selfClose":"regular"}e.ch=t+1}}}function s(e){for(;;){var t=e.ch?e.text.lastIndexOf("<",e.ch-1):-1
if(t==-1){if(o(e))continue
return}if(r(e,t+1)){m.lastIndex=t,e.ch=t
var n=m.exec(e.text)
if(n&&n.index==t)return n}else e.ch=t}}function l(e){for(;;){m.lastIndex=e.ch
var t=m.exec(e.text)
if(!t){if(i(e))continue
return}{if(r(e,t.index+1))return e.ch=t.index+t[0].length,t
e.ch=t.index+1}}}function c(e){for(;;){var t=e.ch?e.text.lastIndexOf(">",e.ch-1):-1
if(t==-1){if(o(e))continue
return}{if(r(e,t+1)){var n=e.text.lastIndexOf("/",t),i=n>-1&&!/\S/.test(e.text.slice(n+1,t))
return e.ch=t+1,i?"selfClose":"regular"}e.ch=t}}}function u(e,t){for(var n=[];;){var r,i=l(e),o=e.line,s=e.ch-(i?i[0].length:0)
if(!i||!(r=a(e)))return
if("selfClose"!=r)if(i[1]){for(var c=n.length-1;c>=0;--c)if(n[c]==i[2]){n.length=c
break}if(c<0&&(!t||t==i[2]))return{tag:i[2],from:f(o,s),to:f(e.line,e.ch)}}else n.push(i[2])}}function d(e,t){for(var n=[];;){var r=c(e)
if(!r)return
if("selfClose"!=r){var i=e.line,o=e.ch,a=s(e)
if(!a)return
if(a[1])n.push(a[2])
else{for(var l=n.length-1;l>=0;--l)if(n[l]==a[2]){n.length=l
break}if(l<0&&(!t||t==a[2]))return{tag:a[2],from:f(e.line,e.ch),to:f(i,o)}}}else s(e)}}var f=e.Pos,p="A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",h=p+"-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",m=new RegExp("<(/?)(["+p+"]["+h+"]*)","g")
e.registerHelper("fold","xml",function(e,r){for(var i=new n(e,r.line,0);;){var o=l(i)
if(!o||i.line!=r.line)return
var s=a(i)
if(!s)return
if(!o[1]&&"selfClose"!=s){var c=f(i.line,i.ch),d=u(i,o[2])
return d&&t(d.from,c)>0?{from:c,to:d.from}:null}}}),e.findMatchingTag=function(e,r,i){var o=new n(e,r.line,r.ch,i)
if(o.text.indexOf(">")!=-1||o.text.indexOf("<")!=-1){var l=a(o),c=l&&f(o.line,o.ch),p=l&&s(o)
if(l&&p&&!(t(o,r)>0)){var h={from:f(o.line,o.ch),to:c,tag:p[2]}
return"selfClose"==l?{open:h,close:null,at:"open"}:p[1]?{open:d(o,p[2]),close:h,at:"close"}:(o=new n(e,c.line,c.ch,i),{open:h,close:u(o,p[2]),at:"open"})}}},e.findEnclosingTag=function(e,t,r,i){for(var o=new n(e,t.line,t.ch,r);;){var a=d(o,i)
if(!a)break
var s=new n(e,t.line,t.ch,r),l=u(s,a.tag)
if(l)return{open:a,close:l}}},e.scanForClosingTag=function(e,t,r,i){var o=new n(e,t.line,t.ch,i?{from:0,to:i}:null)
return u(o,r)}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t){this.cm=e,this.options=t,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length
var n=this
e.on("cursorActivity",this.activityFunc=function(){n.cursorActivity()})}function n(e,t,n){var r=e.options.hintOptions,i={}
for(var o in h)i[o]=h[o]
if(r)for(var o in r)void 0!==r[o]&&(i[o]=r[o])
if(n)for(var o in n)void 0!==n[o]&&(i[o]=n[o])
return i.hint.resolve&&(i.hint=i.hint.resolve(e,t)),i}function r(e){return"string"==typeof e?e:e.text}function i(e,t){function n(e,n){var i
i="string"!=typeof n?function(e){return n(e,t)}:r.hasOwnProperty(n)?r[n]:n,a[e]=i}var r={Up:function(){t.moveFocus(-1)},Down:function(){t.moveFocus(1)},PageUp:function(){t.moveFocus(-t.menuSize()+1,!0)},PageDown:function(){t.moveFocus(t.menuSize()-1,!0)},Home:function(){t.setFocus(0)},End:function(){t.setFocus(t.length-1)},Enter:t.pick,Tab:t.pick,Esc:t.close},i=/Mac/.test(navigator.platform)
i&&(r["Ctrl-P"]=function(){t.moveFocus(-1)},r["Ctrl-N"]=function(){t.moveFocus(1)})
var o=e.options.customKeys,a=o?{}:r
if(o)for(var s in o)o.hasOwnProperty(s)&&n(s,o[s])
var l=e.options.extraKeys
if(l)for(var s in l)l.hasOwnProperty(s)&&n(s,l[s])
return a}function o(e,t){for(;t&&t!=e;){if("LI"===t.nodeName.toUpperCase()&&t.parentNode==e)return t
t=t.parentNode}}function a(t,n){this.completion=t,this.data=n,this.picked=!1
var a=this,s=t.cm,l=s.getInputField().ownerDocument,c=l.defaultView||l.parentWindow,f=this.hints=l.createElement("ul"),p=t.cm.options.theme
f.className="CodeMirror-hints "+p,this.selectedHint=n.selectedHint||0
for(var h=n.list,m=0;m<h.length;++m){var g=f.appendChild(l.createElement("li")),v=h[m],y=u+(m!=this.selectedHint?"":" "+d)
null!=v.className&&(y=v.className+" "+y),g.className=y,v.render?v.render(g,n,v):g.appendChild(l.createTextNode(v.displayText||r(v))),g.hintId=m}var b=t.options.container||l.body,k=s.cursorCoords(t.options.alignWithWord?n.from:null),x=k.left,w=k.bottom,_=!0,C=0,S=0
if(b!==l.body){var M=["absolute","relative","fixed"].indexOf(c.getComputedStyle(b).position)!==-1,L=M?b:b.offsetParent,T=L.getBoundingClientRect(),A=l.body.getBoundingClientRect()
C=T.left-A.left-L.scrollLeft,S=T.top-A.top-L.scrollTop}f.style.left=x-C+"px",f.style.top=w-S+"px"
var E=c.innerWidth||Math.max(l.body.offsetWidth,l.documentElement.offsetWidth),O=c.innerHeight||Math.max(l.body.offsetHeight,l.documentElement.offsetHeight)
b.appendChild(f)
var z=f.getBoundingClientRect(),N=z.bottom-O,q=f.scrollHeight>f.clientHeight+1,F=s.getScrollInfo()
if(N>0){var I=z.bottom-z.top,D=k.top-(k.bottom-z.top)
if(D-I>0)f.style.top=(w=k.top-I-S)+"px",_=!1
else if(I>O){f.style.height=O-5+"px",f.style.top=(w=k.bottom-z.top-S)+"px"
var P=s.getCursor()
n.from.ch!=P.ch&&(k=s.cursorCoords(P),f.style.left=(x=k.left-C)+"px",z=f.getBoundingClientRect())}}var R=z.right-E
if(R>0&&(z.right-z.left>E&&(f.style.width=E-5+"px",R-=z.right-z.left-E),f.style.left=(x=k.left-R-C)+"px"),q)for(var j=f.firstChild;j;j=j.nextSibling)j.style.paddingRight=s.display.nativeBarWidth+"px"
if(s.addKeyMap(this.keyMap=i(t,{moveFocus:function(e,t){a.changeActive(a.selectedHint+e,t)},setFocus:function(e){a.changeActive(e)},menuSize:function(){return a.screenAmount()},length:h.length,close:function(){t.close()},pick:function(){a.pick()},data:n})),t.options.closeOnUnfocus){var B
s.on("blur",this.onBlur=function(){B=setTimeout(function(){t.close()},100)}),s.on("focus",this.onFocus=function(){clearTimeout(B)})}return s.on("scroll",this.onScroll=function(){var e=s.getScrollInfo(),n=s.getWrapperElement().getBoundingClientRect(),r=w+F.top-e.top,i=r-(c.pageYOffset||(l.documentElement||l.body).scrollTop)
return _||(i+=f.offsetHeight),i<=n.top||i>=n.bottom?t.close():(f.style.top=r+"px",void(f.style.left=x+F.left-e.left+"px"))}),e.on(f,"dblclick",function(e){var t=o(f,e.target||e.srcElement)
t&&null!=t.hintId&&(a.changeActive(t.hintId),a.pick())}),e.on(f,"click",function(e){var n=o(f,e.target||e.srcElement)
n&&null!=n.hintId&&(a.changeActive(n.hintId),t.options.completeOnSingleClick&&a.pick())}),e.on(f,"mousedown",function(){setTimeout(function(){s.focus()},20)}),this.scrollToActive(),e.signal(n,"select",h[this.selectedHint],f.childNodes[this.selectedHint]),!0}function s(e,t){if(!e.somethingSelected())return t
for(var n=[],r=0;r<t.length;r++)t[r].supportsSelection&&n.push(t[r])
return n}function l(e,t,n,r){if(e.async)e(t,r,n)
else{var i=e(t,n)
i&&i.then?i.then(r):r(i)}}function c(t,n){var r,i=t.getHelpers(n,"hint")
if(i.length){var o=function(e,t,n){function r(i){return i==o.length?t(null):void l(o[i],e,n,function(e){e&&e.list.length>0?t(e):r(i+1)})}var o=s(e,i)
r(0)}
return o.async=!0,o.supportsSelection=!0,o}return(r=t.getHelper(t.getCursor(),"hintWords"))?function(t){return e.hint.fromList(t,{words:r})}:e.hint.anyword?function(t,n){return e.hint.anyword(t,n)}:function(){}}var u="CodeMirror-hint",d="CodeMirror-hint-active"
e.showHint=function(e,t,n){if(!t)return e.showHint(n)
n&&n.async&&(t.async=!0)
var r={hint:t}
if(n)for(var i in n)r[i]=n[i]
return e.showHint(r)},e.defineExtension("showHint",function(r){r=n(this,this.getCursor("start"),r)
var i=this.listSelections()
if(!(i.length>1)){if(this.somethingSelected()){if(!r.hint.supportsSelection)return
for(var o=0;o<i.length;o++)if(i[o].head.line!=i[o].anchor.line)return}this.state.completionActive&&this.state.completionActive.close()
var a=this.state.completionActive=new t(this,r)
a.options.hint&&(e.signal(this,"startCompletion",this),a.update(!0))}}),e.defineExtension("closeHint",function(){this.state.completionActive&&this.state.completionActive.close()})
var f=window.requestAnimationFrame||function(e){return setTimeout(e,1e3/60)},p=window.cancelAnimationFrame||clearTimeout
t.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&e.signal(this.data,"close"),this.widget&&this.widget.close(),e.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(t,n){var i=t.list[n],o=this
this.cm.operation(function(){i.hint?i.hint(o.cm,t,i):o.cm.replaceRange(r(i),i.from||t.from,i.to||t.to,"complete"),e.signal(t,"pick",i),o.cm.scrollIntoView()}),this.close()},cursorActivity:function(){this.debounce&&(p(this.debounce),this.debounce=0)
var e=this.startPos
this.data&&(e=this.data.from)
var t=this.cm.getCursor(),n=this.cm.getLine(t.line)
if(t.line!=this.startPos.line||n.length-t.ch!=this.startLen-this.startPos.ch||t.ch<e.ch||this.cm.somethingSelected()||!t.ch||this.options.closeCharacters.test(n.charAt(t.ch-1)))this.close()
else{var r=this
this.debounce=f(function(){r.update()}),this.widget&&this.widget.disable()}},update:function(e){if(null!=this.tick){var t=this,n=++this.tick
l(this.options.hint,this.cm,this.options,function(r){t.tick==n&&t.finishUpdate(r,e)})}},finishUpdate:function(t,n){this.data&&e.signal(this.data,"update")
var r=this.widget&&this.widget.picked||n&&this.options.completeSingle
this.widget&&this.widget.close(),this.data=t,t&&t.list.length&&(r&&1==t.list.length?this.pick(t,0):(this.widget=new a(this,t),e.signal(t,"shown")))}},a.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap)
var e=this.completion.cm
this.completion.options.closeOnUnfocus&&(e.off("blur",this.onBlur),e.off("focus",this.onFocus)),e.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap)
var e=this
this.keyMap={Enter:function(){e.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(t,n){if(t>=this.data.list.length?t=n?this.data.list.length-1:0:t<0&&(t=n?0:this.data.list.length-1),this.selectedHint!=t){var r=this.hints.childNodes[this.selectedHint]
r&&(r.className=r.className.replace(" "+d,"")),r=this.hints.childNodes[this.selectedHint=t],r.className+=" "+d,this.scrollToActive(),e.signal(this.data,"select",this.data.list[this.selectedHint],r)}},scrollToActive:function(){var e=this.completion.options.scrollMargin||0,t=this.hints.childNodes[Math.max(0,this.selectedHint-e)],n=this.hints.childNodes[Math.min(this.data.list.length-1,this.selectedHint+e)],r=this.hints.firstChild
t.offsetTop<this.hints.scrollTop?this.hints.scrollTop=t.offsetTop-r.offsetTop:n.offsetTop+n.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=n.offsetTop+n.offsetHeight-this.hints.clientHeight+r.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1}},e.registerHelper("hint","auto",{resolve:c}),e.registerHelper("hint","fromList",function(t,n){var r,i=t.getCursor(),o=t.getTokenAt(i),a=e.Pos(i.line,o.start),s=i
o.start<i.ch&&/\w/.test(o.string.charAt(i.ch-o.start-1))?r=o.string.substr(0,i.ch-o.start):(r="",a=i)
for(var l=[],c=0;c<n.words.length;c++){var u=n.words[c]
u.slice(0,r.length)==r&&l.push(u)}if(l.length)return{list:l,from:a,to:s}}),e.commands.autocomplete=e.showHint
var h={hint:e.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnUnfocus:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null}
e.defineOption("hintOptions",null)}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../../mode/css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/css/css"],e):e(CodeMirror)}(function(e){"use strict"
var t={active:1,after:1,before:1,checked:1,"default":1,disabled:1,empty:1,enabled:1,"first-child":1,"first-letter":1,"first-line":1,"first-of-type":1,focus:1,hover:1,"in-range":1,indeterminate:1,invalid:1,lang:1,"last-child":1,"last-of-type":1,link:1,not:1,"nth-child":1,"nth-last-child":1,"nth-last-of-type":1,"nth-of-type":1,"only-of-type":1,"only-child":1,optional:1,"out-of-range":1,placeholder:1,"read-only":1,"read-write":1,required:1,root:1,selection:1,target:1,valid:1,visited:1}
e.registerHelper("hint","css",function(n){function r(e){for(var t in e)c&&0!=t.lastIndexOf(c,0)||d.push(t)}var i=n.getCursor(),o=n.getTokenAt(i),a=e.innerMode(n.getMode(),o.state)
if("css"==a.mode.name){if("keyword"==o.type&&0=="!important".indexOf(o.string))return{list:["!important"],from:e.Pos(i.line,o.start),to:e.Pos(i.line,o.end)}
var s=o.start,l=i.ch,c=o.string.slice(0,l-s);/[^\w$_-]/.test(c)&&(c="",s=l=i.ch)
var u=e.resolveMode("text/css"),d=[],f=a.state.state
return"pseudo"==f||"variable-3"==o.type?r(t):"block"==f||"maybeprop"==f?r(u.propertyKeywords):"prop"==f||"parens"==f||"at"==f||"params"==f?(r(u.valueKeywords),r(u.colorKeywords)):"media"!=f&&"media_parens"!=f||(r(u.mediaTypes),r(u.mediaFeatures)),d.length?{list:d,from:e.Pos(i.line,s),to:e.Pos(i.line,l)}:void 0}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("./xml-hint")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./xml-hint"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t in d)d.hasOwnProperty(t)&&(e.attrs[t]=d[t])}function n(t,n){var r={schemaInfo:u}
if(n)for(var i in n)r[i]=n[i]
return e.hint.xml(t,r)}var r="ab aa af ak sq am ar an hy as av ae ay az bm ba eu be bn bh bi bs br bg my ca ch ce ny zh cv kw co cr hr cs da dv nl dz en eo et ee fo fj fi fr ff gl ka de el gn gu ht ha he hz hi ho hu ia id ie ga ig ik io is it iu ja jv kl kn kr ks kk km ki rw ky kv kg ko ku kj la lb lg li ln lo lt lu lv gv mk mg ms ml mt mi mr mh mn na nv nb nd ne ng nn no ii nr oc oj cu om or os pa pi fa pl ps pt qu rm rn ro ru sa sc sd se sm sg sr gd sn si sk sl so st es su sw ss sv ta te tg th ti bo tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa cy wo fy xh yi yo za zu".split(" "),i=["_blank","_self","_top","_parent"],o=["ascii","utf-8","utf-16","latin1","latin1"],a=["get","post","put","delete"],s=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],l=["all","screen","print","embossed","braille","handheld","print","projection","screen","tty","tv","speech","3d-glasses","resolution [>][<][=] [X]","device-aspect-ratio: X/Y","orientation:portrait","orientation:landscape","device-height: [X]","device-width: [X]"],c={attrs:{}},u={a:{attrs:{href:null,ping:null,type:null,media:l,target:i,hreflang:r}},abbr:c,acronym:c,address:c,applet:c,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:l,hreflang:r,type:null,shape:["default","rect","circle","poly"]}},article:c,aside:c,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["","autoplay"],loop:["","loop"],controls:["","controls"]}},b:c,base:{attrs:{href:null,target:i}},basefont:c,bdi:c,bdo:c,big:c,blockquote:{attrs:{cite:null}},body:c,br:c,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["","autofocus"],disabled:["","autofocus"],formenctype:s,formmethod:a,formnovalidate:["","novalidate"],formtarget:i,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:c,center:c,cite:c,code:c,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["","disabled"],checked:["","checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["","disabled"],multiple:["","multiple"]}},datalist:{attrs:{data:null}},dd:c,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["","open"]}},dfn:c,dir:c,div:c,dl:c,dt:c,em:c,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["","disabled"],form:null,name:null}},figcaption:c,figure:c,font:c,footer:c,form:{attrs:{action:null,name:null,"accept-charset":o,autocomplete:["on","off"],enctype:s,method:a,novalidate:["","novalidate"],target:i}},frame:c,frameset:c,h1:c,h2:c,h3:c,h4:c,h5:c,h6:c,head:{attrs:{},children:["title","base","link","style","meta","script","noscript","command"]},header:c,hgroup:c,hr:c,html:{attrs:{manifest:null},children:["head","body"]},i:c,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["","seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["","autofocus"],checked:["","checked"],disabled:["","disabled"],formenctype:s,formmethod:a,formnovalidate:["","novalidate"],formtarget:i,multiple:["","multiple"],readonly:["","readonly"],required:["","required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:c,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["","autofocus"],disabled:["","disabled"],keytype:["RSA"]}},label:{attrs:{"for":null,form:null}},legend:c,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:r,media:l,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:c,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:o,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:c,noframes:c,noscript:c,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["","typemustmatch"]}},ol:{attrs:{reversed:["","reversed"],start:null,type:["1","a","A","i","I"]}},optgroup:{attrs:{disabled:["","disabled"],label:null}},option:{attrs:{disabled:["","disabled"],label:null,selected:["","selected"],value:null}},output:{attrs:{"for":null,form:null,name:null}},p:c,param:{attrs:{name:null,value:null}},pre:c,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:c,rt:c,ruby:c,s:c,samp:c,script:{attrs:{type:["text/javascript"],src:null,async:["","async"],defer:["","defer"],charset:o}},section:c,select:{attrs:{form:null,name:null,size:null,autofocus:["","autofocus"],disabled:["","disabled"],multiple:["","multiple"]}},small:c,source:{attrs:{src:null,type:null,media:null}},span:c,strike:c,strong:c,style:{attrs:{type:["text/css"],media:l,scoped:null}},sub:c,summary:c,sup:c,table:c,tbody:c,td:{attrs:{colspan:null,rowspan:null,headers:null}},textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["","autofocus"],disabled:["","disabled"],readonly:["","readonly"],required:["","required"],wrap:["soft","hard"]}},tfoot:c,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:c,time:{attrs:{datetime:null}},title:c,tr:c,track:{attrs:{src:null,label:null,"default":null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:r}},tt:c,u:c,ul:c,"var":c,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["","autoplay"],mediagroup:["movie"],muted:["","muted"],controls:["","controls"]}},wbr:c},d={accesskey:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"],"class":null,contenteditable:["true","false"],contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["en","es"],spellcheck:["true","false"],autocorrect:["true","false"],autocapitalize:["true","false"],style:null,tabindex:["1","2","3","4","5","6","7","8","9"],title:null,translate:["yes","no"],onclick:null,rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"]}
t(c)
for(var f in u)u.hasOwnProperty(f)&&u[f]!=c&&t(u[f])
e.htmlSchema=u,e.registerHelper("hint","html",n)}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(e,t){for(var n=0,r=e.length;n<r;++n)t(e[n])}function n(e,t){if(!Array.prototype.indexOf){for(var n=e.length;n--;)if(e[n]===t)return!0
return!1}return e.indexOf(t)!=-1}function r(t,n,r,i){var o=t.getCursor(),a=r(t,o)
if(!/\b(?:string|comment)\b/.test(a.type)){var s=e.innerMode(t.getMode(),a.state)
if("json"!==s.mode.helperType){a.state=s.state,/^[\w$_]*$/.test(a.string)?a.end>o.ch&&(a.end=o.ch,a.string=a.string.slice(0,o.ch-a.start)):a={start:o.ch,end:o.ch,string:"",state:a.state,type:"."==a.string?"property":null}
for(var u=a;"property"==u.type;){if(u=r(t,c(o.line,u.start)),"."!=u.string)return
if(u=r(t,c(o.line,u.start)),!d)var d=[]
d.push(u)}return{list:l(a,d,n,i),from:c(o.line,a.start),to:c(o.line,a.end)}}}}function i(e,t){return r(e,p,function(e,t){return e.getTokenAt(t)},t)}function o(e,t){var n=e.getTokenAt(t)
return t.ch==n.start+1&&"."==n.string.charAt(0)?(n.end=n.start,n.string=".",n.type="property"):/^\.[\w$_]*$/.test(n.string)&&(n.type="property",n.start++,n.string=n.string.replace(/\./,"")),n}function a(e,t){return r(e,h,o,t)}function s(e,t){if(Object.getOwnPropertyNames&&Object.getPrototypeOf)for(var n=e;n;n=Object.getPrototypeOf(n))Object.getOwnPropertyNames(n).forEach(t)
else for(var r in e)t(r)}function l(e,r,i,o){function a(e){0!=e.lastIndexOf(p,0)||n(c,e)||c.push(e)}function l(e){"string"==typeof e?t(u,a):e instanceof Array?t(d,a):e instanceof Function&&t(f,a),s(e,a)}var c=[],p=e.string,h=o&&o.globalScope||window
if(r&&r.length){var m,g=r.pop()
for(g.type&&0===g.type.indexOf("variable")?(o&&o.additionalContext&&(m=o.additionalContext[g.string]),o&&o.useGlobalScope===!1||(m=m||h[g.string])):"string"==g.type?m="":"atom"==g.type?m=1:"function"==g.type&&(null==h.jQuery||"$"!=g.string&&"jQuery"!=g.string||"function"!=typeof h.jQuery?null!=h._&&"_"==g.string&&"function"==typeof h._&&(m=h._()):m=h.jQuery());null!=m&&r.length;)m=m[r.pop().string]
null!=m&&l(m)}else{for(var v=e.state.localVars;v;v=v.next)a(v.name)
for(var y=e.state.context;y;y=y.prev)for(var v=y.vars;v;v=v.next)a(v.name)
for(var v=e.state.globalVars;v;v=v.next)a(v.name)
if(o&&null!=o.additionalContext)for(var b in o.additionalContext)a(b)
o&&o.useGlobalScope===!1||l(h),t(i,a)}return c}var c=e.Pos
e.registerHelper("hint","javascript",i),e.registerHelper("hint","coffeescript",a)
var u="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),d="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),f="prototype apply call bind".split(" "),p="break case catch class const continue debugger default delete do else export extends false finally for function if in import instanceof new null return super switch this throw true try typeof var void while with yield".split(" "),h="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../../mode/sql/sql")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/sql/sql"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){return"[object Array]"==Object.prototype.toString.call(e)}function n(t){var n=t.doc.modeOption
return"sql"===n&&(n="text/x-sql"),e.resolveMode(n).keywords}function r(t){var n=t.doc.modeOption
return"sql"===n&&(n="text/x-sql"),e.resolveMode(n).identifierQuote||"`"}function i(e){return"string"==typeof e?e:e.text}function o(e,n){return t(n)&&(n={columns:n}),n.text||(n.text=e),n}function a(e){var n={}
if(t(e))for(var r=e.length-1;r>=0;r--){var a=e[r]
n[i(a).toUpperCase()]=o(i(a),a)}else if(e)for(var s in e)n[s.toUpperCase()]=o(s,e[s])
return n}function s(e){return g[e.toUpperCase()]}function l(e){var t={}
for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t}function c(e,t){var n=e.length,r=i(t).substr(0,n)
return e.toUpperCase()===r.toUpperCase()}function u(e,n,r,i){if(t(r))for(var o=0;o<r.length;o++)c(n,r[o])&&e.push(i(r[o]))
else for(var a in r)if(r.hasOwnProperty(a)){var s=r[a]
s=s&&s!==!0?s.displayText?{text:s.text,displayText:s.displayText}:s.text:a,c(n,s)&&e.push(i(s))}}function d(e){"."==e.charAt(0)&&(e=e.substr(1))
for(var t=e.split(b+b),n=0;n<t.length;n++)t[n]=t[n].replace(new RegExp(b,"g"),"")
return t.join(b)}function f(e){for(var t=i(e).split("."),n=0;n<t.length;n++)t[n]=b+t[n].replace(new RegExp(b,"g"),b+b)+b
var r=t.join(".")
return"string"==typeof e?r:(e=l(e),e.text=r,e)}function p(e,t,n,r){for(var i=!1,o=[],a=t.start,c=!0;c;)c="."==t.string.charAt(0),i=i||t.string.charAt(0)==b,a=t.start,o.unshift(d(t.string)),t=r.getTokenAt(x(e.line,t.start)),"."==t.string&&(c=!0,t=r.getTokenAt(x(e.line,t.start)))
var p=o.join(".")
u(n,p,g,function(e){return i?f(e):e}),u(n,p,v,function(e){return i?f(e):e}),p=o.pop()
var h=o.join("."),y=!1,k=h
if(!s(h)){var w=h
h=m(h,r),h!==w&&(y=!0)}var _=s(h)
return _&&_.columns&&(_=_.columns),_&&u(n,p,_,function(e){var t=h
return 1==y&&(t=k),"string"==typeof e?e=t+"."+e:(e=l(e),e.text=t+"."+e.text),i?f(e):e}),a}function h(e,t){for(var n=e.split(/\s+/),r=0;r<n.length;r++)n[r]&&t(n[r].replace(/[,;]/g,""))}function m(e,t){for(var n=t.doc,r=n.getValue(),i=e.toUpperCase(),o="",a="",l=[],c={start:x(0,0),end:x(t.lastLine(),t.getLineHandle(t.lastLine()).length)},u=r.indexOf(k.QUERY_DIV);u!=-1;)l.push(n.posFromIndex(u)),u=r.indexOf(k.QUERY_DIV,u+1)
l.unshift(x(0,0)),l.push(x(t.lastLine(),t.getLineHandle(t.lastLine()).text.length))
for(var d=null,f=t.getCursor(),p=0;p<l.length;p++){if((null==d||w(f,d)>0)&&w(f,l[p])<=0){c={start:d,end:l[p]}
break}d=l[p]}if(c.start)for(var m=n.getRange(c.start,c.end,!1),p=0;p<m.length;p++){var g=m[p]
if(h(g,function(e){var t=e.toUpperCase()
t===i&&s(o)&&(a=o),t!==k.ALIAS_KEYWORD&&(o=e)}),a)break}return a}var g,v,y,b,k={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},x=e.Pos,w=e.cmpPos
e.registerHelper("hint","sql",function(e,t){g=a(t&&t.tables)
var i=t&&t.defaultTable,o=t&&t.disableKeywords
v=i&&s(i),y=n(e),b=r(e),i&&!v&&(v=m(i,e)),v=v||[],v.columns&&(v=v.columns)
var l,c,d,f=e.getCursor(),h=[],k=e.getTokenAt(f)
if(k.end>f.ch&&(k.end=f.ch,k.string=k.string.slice(0,f.ch-k.start)),k.string.match(/^[.`"'\w@][\w$#]*$/g)?(d=k.string,l=k.start,c=k.end):(l=c=f.ch,d=""),"."==d.charAt(0)||d.charAt(0)==b)l=p(f,k,h,e)
else{var w=function(e,t){return"object"==typeof e?e.className=t:e={text:e,className:t},e}
u(h,d,v,function(e){return w(e,"CodeMirror-hint-table CodeMirror-hint-default-table")}),u(h,d,g,function(e){return w(e,"CodeMirror-hint-table")}),o||u(h,d,y,function(e){return w(e.toUpperCase(),"CodeMirror-hint-keyword")})}return{list:h,from:x(f.line,l),to:x(f.line,c)}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,n){return n?e.indexOf(t)>=0:0==e.lastIndexOf(t,0)}function n(n,i){var o=i&&i.schemaInfo,a=i&&i.quoteChar||'"',s=i&&i.matchInMiddle
if(o){var l=n.getCursor(),c=n.getTokenAt(l)
c.end>l.ch&&(c.end=l.ch,c.string=c.string.slice(0,l.ch-c.start))
var u=e.innerMode(n.getMode(),c.state)
if(u.mode.xmlCurrentTag){var d,f,p=[],h=!1,m=/\btag\b/.test(c.type)&&!/>$/.test(c.string),g=m&&/^\w/.test(c.string)
if(g){var v=n.getLine(l.line).slice(Math.max(0,c.start-2),c.start),y=/<\/$/.test(v)?"close":/<$/.test(v)?"open":null
y&&(f=c.start-("close"==y?2:1))}else m&&"<"==c.string?y="open":m&&"</"==c.string&&(y="close")
var b=u.mode.xmlCurrentTag(u.state)
if(!m&&!b||y){g&&(d=c.string),h=y
var k=u.mode.xmlCurrentContext?u.mode.xmlCurrentContext(u.state):[],u=k.length&&k[k.length-1],x=u&&o[u],w=u?x&&x.children:o["!top"]
if(w&&"close"!=y)for(var _=0;_<w.length;++_)d&&!t(w[_],d,s)||p.push("<"+w[_])
else if("close"!=y)for(var C in o)!o.hasOwnProperty(C)||"!top"==C||"!attrs"==C||d&&!t(C,d,s)||p.push("<"+C)
u&&(!d||"close"==y&&t(u,d,s))&&p.push("</"+u+">")}else{var x=b&&o[b.name],S=x&&x.attrs,M=o["!attrs"]
if(!S&&!M)return
if(S){if(M){var L={}
for(var T in M)M.hasOwnProperty(T)&&(L[T]=M[T])
for(var T in S)S.hasOwnProperty(T)&&(L[T]=S[T])
S=L}}else S=M
if("string"==c.type||"="==c.string){var A,v=n.getRange(r(l.line,Math.max(0,l.ch-60)),r(l.line,"string"==c.type?c.start:c.end)),E=v.match(/([^\s\u00a0=<>\"\']+)=$/)
if(!E||!S.hasOwnProperty(E[1])||!(A=S[E[1]]))return
if("function"==typeof A&&(A=A.call(this,n)),"string"==c.type){d=c.string
var O=0;/['"]/.test(c.string.charAt(0))&&(a=c.string.charAt(0),d=c.string.slice(1),O++)
var z=c.string.length
if(/['"]/.test(c.string.charAt(z-1))&&(a=c.string.charAt(z-1),d=c.string.substr(O,z-2)),O){var N=n.getLine(l.line)
N.length>c.end&&N.charAt(c.end)==a&&c.end++}h=!0}for(var _=0;_<A.length;++_)d&&!t(A[_],d,s)||p.push(a+A[_]+a)}else{"attribute"==c.type&&(d=c.string,h=!0)
for(var q in S)!S.hasOwnProperty(q)||d&&!t(q,d,s)||p.push(q)}}return{list:p,from:h?r(l.line,null==f?c.start:f):l,to:h?r(l.line,c.end):l}}}}var r=e.Pos
e.registerHelper("hint","xml",n)}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.overlayMode=function(t,n,r){return{startState:function(){return{base:e.startState(t),overlay:e.startState(n),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(r){return{base:e.copyState(t,r.base),overlay:e.copyState(n,r.overlay),basePos:r.basePos,baseCur:null,overlayPos:r.overlayPos,overlayCur:null}},token:function(e,i){return(e!=i.streamSeen||Math.min(i.basePos,i.overlayPos)<e.start)&&(i.streamSeen=e,i.basePos=i.overlayPos=e.start),e.start==i.basePos&&(i.baseCur=t.token(e,i.base),i.basePos=e.pos),e.start==i.overlayPos&&(e.pos=e.start,i.overlayCur=n.token(e,i.overlay),i.overlayPos=e.pos),e.pos=Math.min(i.basePos,i.overlayPos),null==i.overlayCur?i.baseCur:null!=i.baseCur&&i.overlay.combineTokens||r&&null==i.overlay.combineTokens?i.baseCur+" "+i.overlayCur:i.overlayCur},indent:t.indent&&function(e,n,r){return t.indent(e.base,n,r)},electricChars:t.electricChars,innerMode:function(e){return{state:e.base,mode:t}},blankLine:function(e){var i,o
return t.blankLine&&(i=t.blankLine(e.base)),n.blankLine&&(o=n.blankLine(e.overlay)),null==o?i:r&&null!=i?i+" "+o:o}}}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function n(e,t){if(!e)return/(?:)/
var n=""
return e instanceof RegExp?(e.ignoreCase&&(n="i"),e=e.source):e=String(e),new RegExp((t===!1?"":"^")+"(?:"+e+")",n)}function r(e){if(!e)return null
if(e.apply)return e
if("string"==typeof e)return e.replace(/\./g," ")
for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "))
return t}function i(e,i){(e.next||e.push)&&t(i,e.next||e.push),this.regex=n(e.regex),this.token=r(e.token),this.data=e}function o(e,t){return function(n,r){if(r.pending){var i=r.pending.shift()
return 0==r.pending.length&&(r.pending=null),n.pos+=i.text.length,i.token}if(r.local){if(r.local.end&&n.match(r.local.end)){var o=r.local.endToken||null
return r.local=r.localState=null,o}var a,o=r.local.mode.token(n,r.localState)
return r.local.endScan&&(a=r.local.endScan.exec(n.current()))&&(n.pos=n.start+a.index),o}for(var l=e[r.state],c=0;c<l.length;c++){var u=l[c],d=(!u.data.sol||n.sol())&&n.match(u.regex)
if(d){u.data.next?r.state=u.data.next:u.data.push?((r.stack||(r.stack=[])).push(r.state),r.state=u.data.push):u.data.pop&&r.stack&&r.stack.length&&(r.state=r.stack.pop()),u.data.mode&&s(t,r,u.data.mode,u.token),u.data.indent&&r.indent.push(n.indentation()+t.indentUnit),u.data.dedent&&r.indent.pop()
var f=u.token
if(f&&f.apply&&(f=f(d)),d.length>2&&u.token&&"string"!=typeof u.token){r.pending=[]
for(var p=2;p<d.length;p++)d[p]&&r.pending.push({text:d[p],token:u.token[p-1]})
return n.backUp(d[0].length-(d[1]?d[1].length:0)),f[0]}return f&&f.join?f[0]:f}}return n.next(),null}}function a(e,t){if(e===t)return!0
if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1
var n=0
for(var r in e)if(e.hasOwnProperty(r)){if(!t.hasOwnProperty(r)||!a(e[r],t[r]))return!1
n++}for(var r in t)t.hasOwnProperty(r)&&n--
return 0==n}function s(t,r,i,o){var s
if(i.persistent)for(var l=r.persistentStates;l&&!s;l=l.next)(i.spec?a(i.spec,l.spec):i.mode==l.mode)&&(s=l)
var c=s?s.mode:i.mode||e.getMode(t,i.spec),u=s?s.state:e.startState(c)
i.persistent&&!s&&(r.persistentStates={mode:c,spec:i.spec,state:u,next:r.persistentStates}),r.localState=u,r.local={mode:c,end:i.end&&n(i.end),endScan:i.end&&i.forceEnd!==!1&&n(i.end,!1),endToken:o&&o.join?o[o.length-1]:o}}function l(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}function c(t,n){return function(r,i,o){if(r.local&&r.local.mode.indent)return r.local.mode.indent(r.localState,i,o)
if(null==r.indent||r.local||n.dontIndentStates&&l(r.state,n.dontIndentStates)>-1)return e.Pass
var a=r.indent.length-1,s=t[r.state]
e:for(;;){for(var c=0;c<s.length;c++){var u=s[c]
if(u.data.dedent&&u.data.dedentIfLineStart!==!1){var d=u.regex.exec(i)
if(d&&d[0]){a--,(u.next||u.push)&&(s=t[u.next||u.push]),i=i.slice(d[0].length)
continue e}}}break}return a<0?0:r.indent[a]}}e.defineSimpleMode=function(t,n){e.defineMode(t,function(t){return e.simpleMode(t,n)})},e.simpleMode=function(n,r){t(r,"start")
var a={},s=r.meta||{},l=!1
for(var u in r)if(u!=s&&r.hasOwnProperty(u))for(var d=a[u]=[],f=r[u],p=0;p<f.length;p++){var h=f[p]
d.push(new i(h,r)),(h.indent||h.dedent)&&(l=!0)}var m={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:l?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)}
t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0))
for(var r=t.persistentStates;r;r=r.next)n.persistentStates={mode:r.mode,spec:r.spec,state:r.state==t.localState?n.localState:e.copyState(r.mode,r.state),next:n.persistentStates}
return n},token:o(a,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:c(a,s)}
if(s)for(var g in s)s.hasOwnProperty(g)&&(m[g]=s[g])
return m}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.multiplexingMode=function(t){function n(e,t,n,r){if("string"==typeof t){var i=e.indexOf(t,n)
return r&&i>-1?i+t.length:i}var o=t.exec(n?e.slice(n):e)
return o?o.index+n+(r?o[0].length:0):-1}var r=Array.prototype.slice.call(arguments,1)
return{startState:function(){return{outer:e.startState(t),innerActive:null,inner:null}},copyState:function(n){return{outer:e.copyState(t,n.outer),innerActive:n.innerActive,inner:n.innerActive&&e.copyState(n.innerActive.mode,n.inner)}},token:function(i,o){if(o.innerActive){var a=o.innerActive,s=i.string
if(!a.close&&i.sol())return o.innerActive=o.inner=null,this.token(i,o)
var l=a.close?n(s,a.close,i.pos,a.parseDelimiters):-1
if(l==i.pos&&!a.parseDelimiters)return i.match(a.close),o.innerActive=o.inner=null,a.delimStyle&&a.delimStyle+" "+a.delimStyle+"-close"
l>-1&&(i.string=s.slice(0,l))
var c=a.mode.token(i,o.inner)
return l>-1&&(i.string=s),l==i.pos&&a.parseDelimiters&&(o.innerActive=o.inner=null),a.innerStyle&&(c=c?c+" "+a.innerStyle:a.innerStyle),c}for(var u=1/0,s=i.string,d=0;d<r.length;++d){var f=r[d],l=n(s,f.open,i.pos)
if(l==i.pos){f.parseDelimiters||i.match(f.open),o.innerActive=f
var p=0
if(t.indent){var h=t.indent(o.outer,"","")
h!==e.Pass&&(p=h)}return o.inner=e.startState(f.mode,p),f.delimStyle&&f.delimStyle+" "+f.delimStyle+"-open"}l!=-1&&l<u&&(u=l)}u!=1/0&&(i.string=s.slice(0,u))
var m=t.token(i,o.outer)
return u!=1/0&&(i.string=s),m},indent:function(n,r,i){var o=n.innerActive?n.innerActive.mode:t
return o.indent?o.indent(n.innerActive?n.inner:n.outer,r,i):e.Pass},blankLine:function(n){var i=n.innerActive?n.innerActive.mode:t
if(i.blankLine&&i.blankLine(n.innerActive?n.inner:n.outer),n.innerActive)"\n"===n.innerActive.close&&(n.innerActive=n.inner=null)
else for(var o=0;o<r.length;++o){var a=r[o]
"\n"===a.open&&(n.innerActive=a,n.inner=e.startState(a.mode,i.indent?i.indent(n.outer,"",""):0))}},electricChars:t.electricChars,innerMode:function(e){return e.inner?{state:e.inner,mode:e.innerActive.mode}:{state:e.outer,mode:t}}}}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../dialog/dialog")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../dialog/dialog"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,n,r,i){e.openDialog?e.openDialog(t,i,{value:r,selectValueOnOpen:!0}):i(prompt(n,r))}function n(e){return e.phrase("Jump to line:")+' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use line:column or scroll% syntax)")+"</span>"}function r(e,t){var n=Number(t)
return/^[-+]/.test(t)?e.getCursor().line+n:n-1}e.commands.jumpToLine=function(e){var i=e.getCursor()
t(e,n(e),e.phrase("Jump to line:"),i.line+1+":"+i.ch,function(t){if(t){var n
if(n=/^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(t))e.setCursor(r(e,n[1]),Number(n[2]))
else if(n=/^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(t)){var o=Math.round(e.lineCount()*Number(n[1])/100);/^[-+]/.test(n[1])&&(o=i.line+o+1),e.setCursor(o-1,i.ch)}else(n=/^\s*\:?\s*([\+\-]?\d+)\s*/.exec(t))&&e.setCursor(r(e,n[1]),i.ch)}})},e.keyMap["default"]["Alt-G"]="jumpToLine"}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("./searchcursor"),require("../dialog/dialog")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./searchcursor","../dialog/dialog"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t){return"string"==typeof e?e=new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),t?"gi":"g"):e.global||(e=new RegExp(e.source,e.ignoreCase?"gi":"g")),{token:function(t){e.lastIndex=t.pos
var n=e.exec(t.string)
return n&&n.index==t.pos?(t.pos+=n[0].length||1,"searching"):void(n?t.pos=n.index:t.skipToEnd())}}}function n(){this.posFrom=this.posTo=this.lastQuery=this.query=null,this.overlay=null}function r(e){return e.state.search||(e.state.search=new n)}function i(e){return"string"==typeof e&&e==e.toLowerCase()}function o(e,t,n){return e.getSearchCursor(t,n,{caseFold:i(t),multiline:!0})}function a(e,t,n,r,i){e.openDialog(t,r,{value:n,selectValueOnOpen:!0,closeOnEnter:!1,onClose:function(){h(e)},onKeyDown:i})}function s(e,t,n,r,i){e.openDialog?e.openDialog(t,i,{value:r,selectValueOnOpen:!0}):i(prompt(n,r))}function l(e,t,n,r){e.openConfirm?e.openConfirm(t,r):confirm(n)&&r[0]()}function c(e){return e.replace(/\\([nrt\\])/g,function(e,t){return"n"==t?"\n":"r"==t?"\r":"t"==t?"\t":"\\"==t?"\\":e})}function u(e){var t=e.match(/^\/(.*)\/([a-z]*)$/)
if(t)try{e=new RegExp(t[1],t[2].indexOf("i")==-1?"":"i")}catch(n){}else e=c(e)
return("string"==typeof e?""==e:e.test(""))&&(e=/x^/),e}function d(e,n,r){n.queryText=r,n.query=u(r),e.removeOverlay(n.overlay,i(n.query)),n.overlay=t(n.query,i(n.query)),e.addOverlay(n.overlay),e.showMatchesOnScrollbar&&(n.annotate&&(n.annotate.clear(),n.annotate=null),n.annotate=e.showMatchesOnScrollbar(n.query,i(n.query)))}function f(t,n,i,o){var l=r(t)
if(l.query)return p(t,n)
var c=t.getSelection()||l.lastQuery
if(c instanceof RegExp&&"x^"==c.source&&(c=null),i&&t.openDialog){var u=null,f=function(n,r){e.e_stop(r),n&&(n!=l.queryText&&(d(t,l,n),l.posFrom=l.posTo=t.getCursor()),u&&(u.style.opacity=1),p(t,r.shiftKey,function(e,n){var r
n.line<3&&document.querySelector&&(r=t.display.wrapper.querySelector(".CodeMirror-dialog"))&&r.getBoundingClientRect().bottom-4>t.cursorCoords(n,"window").top&&((u=r).style.opacity=.4)}))}
a(t,m(t),c,f,function(n,i){var o=e.keyName(n),a=t.getOption("extraKeys"),s=a&&a[o]||e.keyMap[t.getOption("keyMap")][o]
"findNext"==s||"findPrev"==s||"findPersistentNext"==s||"findPersistentPrev"==s?(e.e_stop(n),d(t,r(t),i),t.execCommand(s)):"find"!=s&&"findPersistent"!=s||(e.e_stop(n),f(i,n))}),o&&c&&(d(t,l,c),p(t,n))}else s(t,m(t),"Search for:",c,function(e){e&&!l.query&&t.operation(function(){d(t,l,e),l.posFrom=l.posTo=t.getCursor(),p(t,n)})})}function p(t,n,i){t.operation(function(){var a=r(t),s=o(t,a.query,n?a.posFrom:a.posTo);(s.find(n)||(s=o(t,a.query,n?e.Pos(t.lastLine()):e.Pos(t.firstLine(),0)),s.find(n)))&&(t.setSelection(s.from(),s.to()),t.scrollIntoView({from:s.from(),to:s.to()},20),a.posFrom=s.from(),a.posTo=s.to(),i&&i(s.from(),s.to()))})}function h(e){e.operation(function(){var t=r(e)
t.lastQuery=t.query,t.query&&(t.query=t.queryText=null,e.removeOverlay(t.overlay),t.annotate&&(t.annotate.clear(),t.annotate=null))})}function m(e){return'<span class="CodeMirror-search-label">'+e.phrase("Search:")+'</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use /re/ syntax for regexp search)")+"</span>"}function g(e){return' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use /re/ syntax for regexp search)")+"</span>"}function v(e){return'<span class="CodeMirror-search-label">'+e.phrase("With:")+'</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/>'}function y(e){return'<span class="CodeMirror-search-label">'+e.phrase("Replace?")+"</span> <button>"+e.phrase("Yes")+"</button> <button>"+e.phrase("No")+"</button> <button>"+e.phrase("All")+"</button> <button>"+e.phrase("Stop")+"</button> "}function b(e,t,n){e.operation(function(){for(var r=o(e,t);r.findNext();)if("string"!=typeof t){var i=e.getRange(r.from(),r.to()).match(t)
r.replace(n.replace(/\$(\d)/g,function(e,t){return i[t]}))}else r.replace(n)})}function k(e,t){if(!e.getOption("readOnly")){var n=e.getSelection()||r(e).lastQuery,i='<span class="CodeMirror-search-label">'+(t?e.phrase("Replace all:"):e.phrase("Replace:"))+"</span>"
s(e,i+g(e),i,n,function(n){n&&(n=u(n),s(e,v(e),e.phrase("Replace with:"),"",function(r){if(r=c(r),t)b(e,n,r)
else{h(e)
var i=o(e,n,e.getCursor("from")),a=function(){var t,c=i.from()
!(t=i.findNext())&&(i=o(e,n),!(t=i.findNext())||c&&i.from().line==c.line&&i.from().ch==c.ch)||(e.setSelection(i.from(),i.to()),e.scrollIntoView({from:i.from(),to:i.to()}),l(e,y(e),e.phrase("Replace?"),[function(){s(t)},a,function(){b(e,n,r)}]))},s=function(e){i.replace("string"==typeof n?r:r.replace(/\$(\d)/g,function(t,n){return e[n]})),a()}
a()}}))})}}e.commands.find=function(e){h(e),f(e)},e.commands.findPersistent=function(e){h(e),f(e,!1,!0)},e.commands.findPersistentNext=function(e){f(e,!1,!0,!0)},e.commands.findPersistentPrev=function(e){f(e,!0,!0,!0)},e.commands.findNext=f,e.commands.findPrev=function(e){f(e,!0)},e.commands.clearSearch=h,e.commands.replace=k,e.commands.replaceAll=function(e){k(e,!0)}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){var t=e.flags
return null!=t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}function n(e,n){for(var r=t(e),i=r,o=0;o<n.length;o++)i.indexOf(n.charAt(o))==-1&&(i+=n.charAt(o))
return r==i?e:new RegExp(e.source,i)}function r(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function i(e,t,r){t=n(t,"g")
for(var i=r.line,o=r.ch,a=e.lastLine();i<=a;i++,o=0){t.lastIndex=o
var s=e.getLine(i),l=t.exec(s)
if(l)return{from:m(i,l.index),to:m(i,l.index+l[0].length),match:l}}}function o(e,t,o){if(!r(t))return i(e,t,o)
t=n(t,"gm")
for(var a,s=1,l=o.line,c=e.lastLine();l<=c;){for(var u=0;u<s&&!(l>c);u++){var d=e.getLine(l++)
a=null==a?d:a+"\n"+d}s=2*s,t.lastIndex=o.ch
var f=t.exec(a)
if(f){var p=a.slice(0,f.index).split("\n"),h=f[0].split("\n"),g=o.line+p.length-1,v=p[p.length-1].length
return{from:m(g,v),to:m(g+h.length-1,1==h.length?v+h[0].length:h[h.length-1].length),match:f}}}}function a(e,t,n){for(var r,i=0;i<=e.length;){t.lastIndex=i
var o=t.exec(e)
if(!o)break
var a=o.index+o[0].length
if(a>e.length-n)break;(!r||a>r.index+r[0].length)&&(r=o),i=o.index+1}return r}function s(e,t,r){t=n(t,"g")
for(var i=r.line,o=r.ch,s=e.firstLine();i>=s;i--,o=-1){var l=e.getLine(i),c=a(l,t,o<0?0:l.length-o)
if(c)return{from:m(i,c.index),to:m(i,c.index+c[0].length),match:c}}}function l(e,t,i){if(!r(t))return s(e,t,i)
t=n(t,"gm")
for(var o,l=1,c=e.getLine(i.line).length-i.ch,u=i.line,d=e.firstLine();u>=d;){for(var f=0;f<l&&u>=d;f++){var p=e.getLine(u--)
o=null==o?p:p+"\n"+o}l*=2
var h=a(o,t,c)
if(h){var g=o.slice(0,h.index).split("\n"),v=h[0].split("\n"),y=u+g.length,b=g[g.length-1].length
return{from:m(y,b),to:m(y+v.length-1,1==v.length?b+v[0].length:v[v.length-1].length),match:h}}}}function c(e,t,n,r){if(e.length==t.length)return n
for(var i=0,o=n+Math.max(0,e.length-t.length);;){if(i==o)return i
var a=i+o>>1,s=r(e.slice(0,a)).length
if(s==n)return a
s>n?o=a:i=a+1}}function u(e,t,n,r){if(!t.length)return null
var i=r?p:h,o=i(t).split(/\r|\n\r?/)
e:for(var a=n.line,s=n.ch,l=e.lastLine()+1-o.length;a<=l;a++,s=0){var u=e.getLine(a).slice(s),d=i(u)
if(1==o.length){var f=d.indexOf(o[0])
if(f==-1)continue e
var n=c(u,d,f,i)+s
return{from:m(a,c(u,d,f,i)+s),to:m(a,c(u,d,f+o[0].length,i)+s)}}var g=d.length-o[0].length
if(d.slice(g)==o[0]){for(var v=1;v<o.length-1;v++)if(i(e.getLine(a+v))!=o[v])continue e
var y=e.getLine(a+o.length-1),b=i(y),k=o[o.length-1]
if(b.slice(0,k.length)==k)return{from:m(a,c(u,d,g,i)+s),to:m(a+o.length-1,c(y,b,k.length,i))}}}}function d(e,t,n,r){if(!t.length)return null
var i=r?p:h,o=i(t).split(/\r|\n\r?/)
e:for(var a=n.line,s=n.ch,l=e.firstLine()-1+o.length;a>=l;a--,s=-1){var u=e.getLine(a)
s>-1&&(u=u.slice(0,s))
var d=i(u)
if(1==o.length){var f=d.lastIndexOf(o[0])
if(f==-1)continue e
return{from:m(a,c(u,d,f,i)),to:m(a,c(u,d,f+o[0].length,i))}}var g=o[o.length-1]
if(d.slice(0,g.length)==g){for(var v=1,n=a-o.length+1;v<o.length-1;v++)if(i(e.getLine(n+v))!=o[v])continue e
var y=e.getLine(a+1-o.length),b=i(y)
if(b.slice(b.length-o[0].length)==o[0])return{from:m(a+1-o.length,c(y,b,y.length-o[0].length,i)),to:m(a,c(u,d,g.length,i))}}}}function f(e,t,r,a){this.atOccurrence=!1,this.doc=e,r=r?e.clipPos(r):m(0,0),this.pos={from:r,to:r}
var c
"object"==typeof a?c=a.caseFold:(c=a,a=null),"string"==typeof t?(null==c&&(c=!1),this.matches=function(n,r){return(n?d:u)(e,t,r,c)}):(t=n(t,"gm"),a&&a.multiline===!1?this.matches=function(n,r){return(n?s:i)(e,t,r)}:this.matches=function(n,r){return(n?l:o)(e,t,r)})}var p,h,m=e.Pos
String.prototype.normalize?(p=function(e){return e.normalize("NFD").toLowerCase()},h=function(e){return e.normalize("NFD")}):(p=function(e){return e.toLowerCase()},h=function(e){return e}),f.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){for(var n=this.matches(t,this.doc.clipPos(t?this.pos.from:this.pos.to));n&&0==e.cmpPos(n.from,n.to);)t?n.from.ch?n.from=m(n.from.line,n.from.ch-1):n=n.from.line==this.doc.firstLine()?null:this.matches(t,this.doc.clipPos(m(n.from.line-1))):n.to.ch<this.doc.getLine(n.to.line).length?n.to=m(n.to.line,n.to.ch+1):n=n.to.line==this.doc.lastLine()?null:this.matches(t,m(n.to.line+1,0))
if(n)return this.pos=n,this.atOccurrence=!0,this.pos.match||!0
var r=m(t?this.doc.firstLine():this.doc.lastLine()+1,0)
return this.pos={from:r,to:r},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var r=e.splitLines(t)
this.doc.replaceRange(r,this.pos.from,this.pos.to,n),this.pos.to=m(this.pos.from.line+r.length-1,r[r.length-1].length+(1==r.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",function(e,t,n){return new f(this.doc,e,t,n)}),e.defineDocExtension("getSearchCursor",function(e,t,n){return new f(this,e,t,n)}),e.defineExtension("selectMatches",function(t,n){for(var r=[],i=this.getSearchCursor(t,this.getCursor("from"),n);i.findNext()&&!(e.cmpPos(i.to(),this.getCursor("to"))>0);)r.push({anchor:i.from(),head:i.to()})
r.length&&this.setSelections(r,0)})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t=0;t<e.state.activeLines.length;t++)e.removeLineClass(e.state.activeLines[t],"wrap",o),e.removeLineClass(e.state.activeLines[t],"background",a),e.removeLineClass(e.state.activeLines[t],"gutter",s)}function n(e,t){if(e.length!=t.length)return!1
for(var n=0;n<e.length;n++)if(e[n]!=t[n])return!1
return!0}function r(e,r){for(var i=[],l=0;l<r.length;l++){var c=r[l],u=e.getOption("styleActiveLine")
if("object"==typeof u&&u.nonEmpty?c.anchor.line==c.head.line:c.empty()){var d=e.getLineHandleVisualStart(c.head.line)
i[i.length-1]!=d&&i.push(d)}}n(e.state.activeLines,i)||e.operation(function(){t(e)
for(var n=0;n<i.length;n++)e.addLineClass(i[n],"wrap",o),e.addLineClass(i[n],"background",a),e.addLineClass(i[n],"gutter",s)
e.state.activeLines=i})}function i(e,t){r(e,t.ranges)}var o="CodeMirror-activeline",a="CodeMirror-activeline-background",s="CodeMirror-activeline-gutter"
e.defineOption("styleActiveLine",!1,function(n,o,a){var s=a!=e.Init&&a
o!=s&&(s&&(n.off("beforeSelectionChange",i),t(n),delete n.state.activeLines),o&&(n.state.activeLines=[],r(n,n.listSelections()),n.on("beforeSelectionChange",i)))})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../lib/codemirror")):"function"==typeof define&&define.amd?define(["../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t){return e.line==t.line&&e.ch==t.ch}function n(e){q.push(e),q.length>50&&q.shift()}function r(e){return q.length?void(q[q.length-1]+=e):n(e)}function i(e){return q[q.length-(e?Math.min(e,1):1)]||""}function o(){return q.length>1&&q.pop(),i()}function a(e,i,o,a,s){null==s&&(s=e.getRange(i,o)),"grow"==a&&F&&F.cm==e&&t(i,F.pos)&&e.isClean(F.gen)?r(s):a!==!1&&n(s),e.replaceRange("",i,o,"+delete"),F="grow"==a?{cm:e,pos:i,gen:e.changeGeneration()}:null}function s(e,t,n){return e.findPosH(t,n,"char",!0)}function l(e,t,n){return e.findPosH(t,n,"word",!0)}function c(e,t,n){return e.findPosV(t,n,"line",e.doc.sel.goalColumn)}function u(e,t,n){return e.findPosV(t,n,"page",e.doc.sel.goalColumn)}function d(e,t,n){for(var r=t.line,i=e.getLine(r),o=/\S/.test(n<0?i.slice(0,t.ch):i.slice(t.ch)),a=e.firstLine(),s=e.lastLine();;){if(r+=n,r<a||r>s)return e.clipPos(N(r-n,n<0?0:null))
i=e.getLine(r)
var l=/\S/.test(i)
if(l)o=!0
else if(o)return N(r,0)}}function f(e,t,n){for(var r=t.line,i=t.ch,o=e.getLine(t.line),a=!1;;){var s=o.charAt(i+(n<0?-1:0))
if(s){if(a&&/[!?.]/.test(s))return N(r,i+(n>0?1:0))
a||(a=/\w/.test(s)),i+=n}else{if(r==(n<0?e.firstLine():e.lastLine()))return N(r,i)
if(o=e.getLine(r+n),!/\S/.test(o))return N(r,i)
r+=n,i=n<0?o.length:0}}}function p(e,n,r){var i
if(e.findMatchingBracket&&(i=e.findMatchingBracket(n,{strict:!0}))&&i.match&&(i.forward?1:-1)==r)return r>0?N(i.to.line,i.to.ch+1):i.to
for(var o=!0;;o=!1){var a=e.getTokenAt(n),s=N(n.line,r<0?a.start:a.end)
if(!(o&&r>0&&a.end==n.ch)&&/\w/.test(a.string))return s
var l=e.findPosH(s,r,"char")
if(t(s,l))return n
n=l}}function h(e,t){var n=e.state.emacsPrefix
return n?(w(e),"-"==n?-1:Number(n)):t?null:1}function m(e){var t="string"==typeof e?function(t){t.execCommand(e)}:e
return function(e){var n=h(e)
t(e)
for(var r=1;r<n;++r)t(e)}}function g(e,n,r,i){var o=h(e)
o<0&&(i=-i,o=-o)
for(var a=0;a<o;++a){var s=r(e,n,i)
if(t(s,n))break
n=s}return n}function v(e,t){var n=function(n){n.extendSelection(g(n,n.getCursor(),e,t))}
return n.motion=!0,n}function y(e,t,n,r){for(var i,o=e.listSelections(),s=o.length;s--;)i=o[s].head,a(e,i,g(e,i,t,n),r)}function b(e,t){if(e.somethingSelected()){for(var n,r=e.listSelections(),i=r.length;i--;)n=r[i],a(e,n.anchor,n.head,t)
return!0}}function k(e,t){return e.state.emacsPrefix?void("-"!=t&&(e.state.emacsPrefix+=t)):(e.state.emacsPrefix=t,e.on("keyHandled",x),void e.on("inputRead",_))}function x(e,t){e.state.emacsPrefixMap||I.hasOwnProperty(t)||w(e)}function w(e){e.state.emacsPrefix=null,e.off("keyHandled",x),e.off("inputRead",_)}function _(e,t){var n=h(e)
if(n>1&&"+input"==t.origin){for(var r=t.text.join("\n"),i="",o=1;o<n;++o)i+=r
e.replaceSelection(i)}}function C(e){e.state.emacsPrefixMap=!0,e.addKeyMap(P),e.on("keyHandled",S),e.on("inputRead",S)}function S(e,t){("string"!=typeof t||!/^\d$/.test(t)&&"Ctrl-U"!=t)&&(e.removeKeyMap(P),e.state.emacsPrefixMap=!1,e.off("keyHandled",S),e.off("inputRead",S))}function M(e){e.setCursor(e.getCursor()),e.setExtending(!e.getExtending()),e.on("change",function(){e.setExtending(!1)})}function L(e){e.setExtending(!1),e.setCursor(e.getCursor())}function T(e,t,n){e.openDialog?e.openDialog(t+': <input type="text" style="width: 10em"/>',n,{bottom:!0}):n(prompt(t,""))}function A(e,t){var n=e.getCursor(),r=e.findPosH(n,1,"word")
e.replaceRange(t(e.getRange(n,r)),n,r),e.setCursor(r)}function E(e){for(var t=e.getCursor(),n=t.line,r=t.ch,i=[];n>=e.firstLine();){for(var o=e.getLine(n),a=null==r?o.length:r;a>0;){var r=o.charAt(--a)
if(")"==r)i.push("(")
else if("]"==r)i.push("[")
else if("}"==r)i.push("{")
else if(/[\(\{\[]/.test(r)&&(!i.length||i.pop()!=r))return e.extendSelection(N(n,a))}--n,r=null}}function O(e){e.execCommand("clearSearch"),L(e)}function z(e){P[e]=function(t){k(t,e)},D["Ctrl-"+e]=function(t){k(t,e)},I["Ctrl-"+e]=!0}var N=e.Pos,q=[],F=null,I={"Alt-G":!0,"Ctrl-X":!0,"Ctrl-Q":!0,"Ctrl-U":!0}
e.emacs={kill:a,killRegion:b,repeated:m}
for(var D=e.keyMap.emacs=e.normalizeKeyMap({"Ctrl-W":function(e){a(e,e.getCursor("start"),e.getCursor("end"),!0)},"Ctrl-K":m(function(e){var t=e.getCursor(),n=e.clipPos(N(t.line)),r=e.getRange(t,n);/\S/.test(r)||(r+="\n",n=N(t.line+1,0)),a(e,t,n,"grow",r)}),"Alt-W":function(e){n(e.getSelection()),L(e)},"Ctrl-Y":function(e){var t=e.getCursor()
e.replaceRange(i(h(e)),t,t,"paste"),e.setSelection(t,e.getCursor())},"Alt-Y":function(e){e.replaceSelection(o(),"around","paste")},"Ctrl-Space":M,"Ctrl-Shift-2":M,"Ctrl-F":v(s,1),"Ctrl-B":v(s,-1),Right:v(s,1),Left:v(s,-1),"Ctrl-D":function(e){y(e,s,1,!1)},Delete:function(e){b(e,!1)||y(e,s,1,!1)},"Ctrl-H":function(e){y(e,s,-1,!1)},Backspace:function(e){b(e,!1)||y(e,s,-1,!1)},"Alt-F":v(l,1),"Alt-B":v(l,-1),"Alt-Right":v(l,1),"Alt-Left":v(l,-1),"Alt-D":function(e){y(e,l,1,"grow")},"Alt-Backspace":function(e){y(e,l,-1,"grow")},"Ctrl-N":v(c,1),"Ctrl-P":v(c,-1),Down:v(c,1),Up:v(c,-1),"Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd",End:"goLineEnd",Home:"goLineStart","Alt-V":v(u,-1),"Ctrl-V":v(u,1),PageUp:v(u,-1),PageDown:v(u,1),"Ctrl-Up":v(d,-1),"Ctrl-Down":v(d,1),"Alt-A":v(f,-1),"Alt-E":v(f,1),"Alt-K":function(e){y(e,f,1,"grow")},"Ctrl-Alt-K":function(e){y(e,p,1,"grow")},"Ctrl-Alt-Backspace":function(e){y(e,p,-1,"grow")},"Ctrl-Alt-F":v(p,1),"Ctrl-Alt-B":v(p,-1,"grow"),"Shift-Ctrl-Alt-2":function(e){var t=e.getCursor()
e.setSelection(g(e,t,p,1),t)},"Ctrl-Alt-T":function(e){var t=p(e,e.getCursor(),-1),n=p(e,t,1),r=p(e,n,1),i=p(e,r,-1)
e.replaceRange(e.getRange(i,r)+e.getRange(n,i)+e.getRange(t,n),t,r)},"Ctrl-Alt-U":m(E),"Alt-Space":function(e){for(var t=e.getCursor(),n=t.ch,r=t.ch,i=e.getLine(t.line);n&&/\s/.test(i.charAt(n-1));)--n
for(;r<i.length&&/\s/.test(i.charAt(r));)++r
e.replaceRange(" ",N(t.line,n),N(t.line,r))},"Ctrl-O":m(function(e){e.replaceSelection("\n","start")}),"Ctrl-T":m(function(e){e.execCommand("transposeChars")}),"Alt-C":m(function(e){A(e,function(e){var t=e.search(/\w/)
return t==-1?e:e.slice(0,t)+e.charAt(t).toUpperCase()+e.slice(t+1).toLowerCase()})}),"Alt-U":m(function(e){A(e,function(e){return e.toUpperCase()})}),"Alt-L":m(function(e){A(e,function(e){return e.toLowerCase()})}),"Alt-;":"toggleComment","Ctrl-/":m("undo"),"Shift-Ctrl--":m("undo"),"Ctrl-Z":m("undo"),"Cmd-Z":m("undo"),"Shift-Ctrl-Z":"redo","Shift-Alt-,":"goDocStart","Shift-Alt-.":"goDocEnd","Ctrl-S":"findPersistentNext","Ctrl-R":"findPersistentPrev","Ctrl-G":O,"Shift-Alt-5":"replace","Alt-/":"autocomplete",Enter:"newlineAndIndent","Ctrl-J":m(function(e){e.replaceSelection("\n","end")}),Tab:"indentAuto","Alt-G G":function(e){var t=h(e,!0)
return null!=t&&t>0?e.setCursor(t-1):void T(e,"Goto line",function(t){var n
t&&!isNaN(n=Number(t))&&n==(0|n)&&n>0&&e.setCursor(n-1)})},"Ctrl-X Tab":function(e){e.indentSelection(h(e,!0)||e.getOption("indentUnit"))},"Ctrl-X Ctrl-X":function(e){e.setSelection(e.getCursor("head"),e.getCursor("anchor"))},"Ctrl-X Ctrl-S":"save","Ctrl-X Ctrl-W":"save","Ctrl-X S":"saveAll","Ctrl-X F":"open","Ctrl-X U":m("undo"),"Ctrl-X K":"close","Ctrl-X Delete":function(e){a(e,e.getCursor(),f(e,e.getCursor(),1),"grow")},"Ctrl-X H":"selectAll","Ctrl-Q Tab":m("insertTab"),"Ctrl-U":C,fallthrough:"default"}),P={"Ctrl-G":w},R=0;R<10;++R)z(String(R))
z("-")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../lib/codemirror"),require("../addon/search/searchcursor"),require("../addon/dialog/dialog"),require("../addon/edit/matchbrackets.js")):"function"==typeof define&&define.amd?define(["../lib/codemirror","../addon/search/searchcursor","../addon/dialog/dialog","../addon/edit/matchbrackets"],e):e(CodeMirror)}(function(e){"use strict"
var t=[{keys:"<Left>",type:"keyToKey",toKeys:"h"},{keys:"<Right>",type:"keyToKey",toKeys:"l"},{keys:"<Up>",type:"keyToKey",toKeys:"k"},{keys:"<Down>",type:"keyToKey",toKeys:"j"},{keys:"<Space>",type:"keyToKey",toKeys:"l"},{keys:"<BS>",type:"keyToKey",toKeys:"h",context:"normal"},{keys:"<Del>",type:"keyToKey",toKeys:"x",context:"normal"},{keys:"<C-Space>",type:"keyToKey",toKeys:"W"},{keys:"<C-BS>",type:"keyToKey",toKeys:"B",context:"normal"},{keys:"<S-Space>",type:"keyToKey",toKeys:"w"},{keys:"<S-BS>",type:"keyToKey",toKeys:"b",context:"normal"},{keys:"<C-n>",type:"keyToKey",toKeys:"j"},{keys:"<C-p>",type:"keyToKey",toKeys:"k"},{keys:"<C-[>",type:"keyToKey",toKeys:"<Esc>"},{keys:"<C-c>",type:"keyToKey",toKeys:"<Esc>"},{keys:"<C-[>",type:"keyToKey",toKeys:"<Esc>",context:"insert"},{keys:"<C-c>",type:"keyToKey",toKeys:"<Esc>",context:"insert"},{keys:"s",type:"keyToKey",toKeys:"cl",context:"normal"},{keys:"s",type:"keyToKey",toKeys:"c",context:"visual"},{keys:"S",type:"keyToKey",toKeys:"cc",context:"normal"},{keys:"S",type:"keyToKey",toKeys:"VdO",context:"visual"},{keys:"<Home>",type:"keyToKey",toKeys:"0"},{keys:"<End>",type:"keyToKey",toKeys:"$"},{keys:"<PageUp>",type:"keyToKey",toKeys:"<C-b>"},{keys:"<PageDown>",type:"keyToKey",toKeys:"<C-f>"},{keys:"<CR>",type:"keyToKey",toKeys:"j^",context:"normal"},{keys:"<Ins>",type:"action",action:"toggleOverwrite",context:"insert"},{keys:"H",type:"motion",motion:"moveToTopLine",motionArgs:{linewise:!0,toJumplist:!0}},{keys:"M",type:"motion",motion:"moveToMiddleLine",motionArgs:{linewise:!0,toJumplist:!0}},{keys:"L",type:"motion",motion:"moveToBottomLine",motionArgs:{linewise:!0,toJumplist:!0}},{keys:"h",type:"motion",motion:"moveByCharacters",motionArgs:{forward:!1}},{keys:"l",type:"motion",motion:"moveByCharacters",motionArgs:{forward:!0}},{keys:"j",type:"motion",motion:"moveByLines",motionArgs:{forward:!0,linewise:!0}},{keys:"k",type:"motion",motion:"moveByLines",motionArgs:{forward:!1,linewise:!0}},{keys:"gj",type:"motion",motion:"moveByDisplayLines",motionArgs:{forward:!0}},{keys:"gk",type:"motion",motion:"moveByDisplayLines",motionArgs:{forward:!1}},{keys:"w",type:"motion",motion:"moveByWords",motionArgs:{forward:!0,wordEnd:!1}},{keys:"W",type:"motion",motion:"moveByWords",motionArgs:{forward:!0,wordEnd:!1,bigWord:!0}},{keys:"e",type:"motion",motion:"moveByWords",motionArgs:{forward:!0,wordEnd:!0,inclusive:!0}},{keys:"E",type:"motion",motion:"moveByWords",motionArgs:{forward:!0,wordEnd:!0,bigWord:!0,inclusive:!0}},{keys:"b",type:"motion",motion:"moveByWords",motionArgs:{forward:!1,wordEnd:!1}},{keys:"B",type:"motion",motion:"moveByWords",motionArgs:{forward:!1,wordEnd:!1,bigWord:!0}},{keys:"ge",type:"motion",motion:"moveByWords",motionArgs:{forward:!1,wordEnd:!0,inclusive:!0}},{keys:"gE",type:"motion",motion:"moveByWords",motionArgs:{forward:!1,wordEnd:!0,bigWord:!0,inclusive:!0}},{keys:"{",type:"motion",motion:"moveByParagraph",motionArgs:{forward:!1,toJumplist:!0}},{keys:"}",type:"motion",motion:"moveByParagraph",motionArgs:{forward:!0,toJumplist:!0}},{keys:"(",type:"motion",motion:"moveBySentence",motionArgs:{forward:!1}},{keys:")",type:"motion",motion:"moveBySentence",motionArgs:{forward:!0}},{keys:"<C-f>",type:"motion",motion:"moveByPage",motionArgs:{forward:!0}},{keys:"<C-b>",type:"motion",motion:"moveByPage",motionArgs:{forward:!1}},{keys:"<C-d>",type:"motion",motion:"moveByScroll",motionArgs:{forward:!0,explicitRepeat:!0}},{keys:"<C-u>",type:"motion",motion:"moveByScroll",motionArgs:{forward:!1,explicitRepeat:!0}},{keys:"gg",type:"motion",motion:"moveToLineOrEdgeOfDocument",motionArgs:{forward:!1,explicitRepeat:!0,linewise:!0,toJumplist:!0}},{keys:"G",type:"motion",motion:"moveToLineOrEdgeOfDocument",motionArgs:{forward:!0,explicitRepeat:!0,linewise:!0,toJumplist:!0}},{keys:"0",type:"motion",motion:"moveToStartOfLine"},{keys:"^",type:"motion",motion:"moveToFirstNonWhiteSpaceCharacter"},{keys:"+",type:"motion",motion:"moveByLines",motionArgs:{forward:!0,toFirstChar:!0}},{keys:"-",type:"motion",motion:"moveByLines",motionArgs:{forward:!1,toFirstChar:!0}},{keys:"_",type:"motion",motion:"moveByLines",motionArgs:{forward:!0,toFirstChar:!0,repeatOffset:-1}},{keys:"$",type:"motion",motion:"moveToEol",motionArgs:{inclusive:!0}},{keys:"%",type:"motion",motion:"moveToMatchedSymbol",motionArgs:{inclusive:!0,toJumplist:!0}},{keys:"f<character>",type:"motion",motion:"moveToCharacter",motionArgs:{forward:!0,inclusive:!0}},{keys:"F<character>",type:"motion",motion:"moveToCharacter",motionArgs:{forward:!1}},{keys:"t<character>",type:"motion",motion:"moveTillCharacter",motionArgs:{forward:!0,inclusive:!0}},{keys:"T<character>",type:"motion",motion:"moveTillCharacter",motionArgs:{forward:!1}},{keys:";",type:"motion",motion:"repeatLastCharacterSearch",motionArgs:{forward:!0}},{keys:",",type:"motion",motion:"repeatLastCharacterSearch",motionArgs:{forward:!1}},{keys:"'<character>",type:"motion",motion:"goToMark",motionArgs:{toJumplist:!0,linewise:!0}},{keys:"`<character>",type:"motion",motion:"goToMark",motionArgs:{toJumplist:!0}},{keys:"]`",type:"motion",motion:"jumpToMark",motionArgs:{forward:!0}},{keys:"[`",type:"motion",motion:"jumpToMark",motionArgs:{forward:!1}},{keys:"]'",type:"motion",motion:"jumpToMark",motionArgs:{forward:!0,linewise:!0}},{keys:"['",type:"motion",motion:"jumpToMark",motionArgs:{forward:!1,linewise:!0}},{keys:"]p",type:"action",action:"paste",isEdit:!0,actionArgs:{after:!0,isEdit:!0,matchIndent:!0}},{keys:"[p",type:"action",action:"paste",isEdit:!0,actionArgs:{after:!1,isEdit:!0,matchIndent:!0}},{keys:"]<character>",type:"motion",motion:"moveToSymbol",motionArgs:{forward:!0,toJumplist:!0}},{keys:"[<character>",type:"motion",motion:"moveToSymbol",motionArgs:{forward:!1,toJumplist:!0}},{keys:"|",type:"motion",motion:"moveToColumn"},{keys:"o",type:"motion",motion:"moveToOtherHighlightedEnd",context:"visual"},{keys:"O",type:"motion",motion:"moveToOtherHighlightedEnd",motionArgs:{sameLine:!0},context:"visual"},{keys:"d",type:"operator",operator:"delete"},{keys:"y",type:"operator",operator:"yank"},{keys:"c",type:"operator",operator:"change"},{keys:"=",type:"operator",operator:"indentAuto"},{keys:">",type:"operator",operator:"indent",operatorArgs:{indentRight:!0}},{keys:"<",type:"operator",operator:"indent",operatorArgs:{indentRight:!1}},{keys:"g~",type:"operator",operator:"changeCase"},{keys:"gu",type:"operator",operator:"changeCase",operatorArgs:{toLower:!0},isEdit:!0},{keys:"gU",type:"operator",operator:"changeCase",operatorArgs:{toLower:!1},isEdit:!0},{keys:"n",type:"motion",motion:"findNext",motionArgs:{forward:!0,toJumplist:!0}},{keys:"N",type:"motion",motion:"findNext",motionArgs:{forward:!1,toJumplist:!0}},{keys:"x",type:"operatorMotion",operator:"delete",motion:"moveByCharacters",motionArgs:{forward:!0},operatorMotionArgs:{visualLine:!1}},{keys:"X",type:"operatorMotion",operator:"delete",motion:"moveByCharacters",motionArgs:{forward:!1},operatorMotionArgs:{visualLine:!0}},{keys:"D",type:"operatorMotion",operator:"delete",motion:"moveToEol",motionArgs:{inclusive:!0},context:"normal"},{keys:"D",type:"operator",operator:"delete",operatorArgs:{linewise:!0},context:"visual"},{keys:"Y",type:"operatorMotion",operator:"yank",motion:"expandToLine",motionArgs:{linewise:!0},context:"normal"},{keys:"Y",type:"operator",operator:"yank",operatorArgs:{linewise:!0},context:"visual"},{keys:"C",type:"operatorMotion",operator:"change",motion:"moveToEol",motionArgs:{inclusive:!0},context:"normal"},{keys:"C",type:"operator",operator:"change",operatorArgs:{linewise:!0},context:"visual"},{keys:"~",type:"operatorMotion",operator:"changeCase",motion:"moveByCharacters",motionArgs:{forward:!0},operatorArgs:{shouldMoveCursor:!0},context:"normal"},{keys:"~",type:"operator",operator:"changeCase",context:"visual"},{keys:"<C-w>",type:"operatorMotion",operator:"delete",motion:"moveByWords",motionArgs:{forward:!1,wordEnd:!1},context:"insert"},{keys:"<C-w>",type:"idle",context:"normal"},{keys:"<C-i>",type:"action",action:"jumpListWalk",actionArgs:{forward:!0}},{keys:"<C-o>",type:"action",action:"jumpListWalk",actionArgs:{forward:!1}},{keys:"<C-e>",type:"action",action:"scroll",actionArgs:{forward:!0,linewise:!0}},{keys:"<C-y>",type:"action",action:"scroll",actionArgs:{forward:!1,linewise:!0}},{keys:"a",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"charAfter"},context:"normal"},{keys:"A",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"eol"},context:"normal"},{keys:"A",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"endOfSelectedArea"},context:"visual"},{keys:"i",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"inplace"},context:"normal"},{keys:"gi",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"lastEdit"},context:"normal"},{keys:"I",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"firstNonBlank"},context:"normal"},{keys:"gI",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"bol"},context:"normal"},{keys:"I",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{insertAt:"startOfSelectedArea"},context:"visual"},{keys:"o",type:"action",action:"newLineAndEnterInsertMode",isEdit:!0,interlaceInsertRepeat:!0,actionArgs:{after:!0},context:"normal"},{keys:"O",type:"action",action:"newLineAndEnterInsertMode",isEdit:!0,interlaceInsertRepeat:!0,actionArgs:{after:!1},context:"normal"},{keys:"v",type:"action",action:"toggleVisualMode"},{keys:"V",type:"action",action:"toggleVisualMode",actionArgs:{linewise:!0}},{keys:"<C-v>",type:"action",action:"toggleVisualMode",actionArgs:{blockwise:!0}},{keys:"<C-q>",type:"action",action:"toggleVisualMode",actionArgs:{blockwise:!0}},{keys:"gv",type:"action",action:"reselectLastSelection"},{keys:"J",type:"action",action:"joinLines",isEdit:!0},{keys:"gJ",type:"action",action:"joinLines",actionArgs:{keepSpaces:!0},isEdit:!0},{keys:"p",type:"action",action:"paste",isEdit:!0,actionArgs:{after:!0,isEdit:!0}},{keys:"P",type:"action",action:"paste",isEdit:!0,actionArgs:{after:!1,isEdit:!0}},{keys:"r<character>",type:"action",action:"replace",isEdit:!0},{keys:"@<character>",type:"action",action:"replayMacro"},{keys:"q<character>",type:"action",action:"enterMacroRecordMode"},{keys:"R",type:"action",action:"enterInsertMode",isEdit:!0,actionArgs:{replace:!0},context:"normal"},{keys:"R",type:"operator",operator:"change",operatorArgs:{linewise:!0,fullLine:!0},context:"visual",exitVisualBlock:!0},{keys:"u",type:"action",action:"undo",context:"normal"},{keys:"u",type:"operator",operator:"changeCase",operatorArgs:{toLower:!0},context:"visual",isEdit:!0},{keys:"U",type:"operator",operator:"changeCase",operatorArgs:{toLower:!1},context:"visual",isEdit:!0},{keys:"<C-r>",type:"action",action:"redo"},{keys:"m<character>",type:"action",action:"setMark"},{keys:'"<character>',type:"action",action:"setRegister"},{keys:"zz",type:"action",action:"scrollToCursor",actionArgs:{position:"center"}},{keys:"z.",type:"action",action:"scrollToCursor",actionArgs:{position:"center"},motion:"moveToFirstNonWhiteSpaceCharacter"},{keys:"zt",type:"action",action:"scrollToCursor",actionArgs:{position:"top"}},{keys:"z<CR>",type:"action",action:"scrollToCursor",actionArgs:{position:"top"},motion:"moveToFirstNonWhiteSpaceCharacter"},{keys:"z-",type:"action",action:"scrollToCursor",actionArgs:{position:"bottom"}},{keys:"zb",type:"action",action:"scrollToCursor",actionArgs:{position:"bottom"},motion:"moveToFirstNonWhiteSpaceCharacter"},{keys:".",type:"action",action:"repeatLastEdit"},{keys:"<C-a>",type:"action",action:"incrementNumberToken",isEdit:!0,actionArgs:{increase:!0,backtrack:!1}},{keys:"<C-x>",type:"action",action:"incrementNumberToken",isEdit:!0,actionArgs:{increase:!1,backtrack:!1}},{keys:"<C-t>",type:"action",action:"indent",actionArgs:{indentRight:!0},context:"insert"},{keys:"<C-d>",type:"action",action:"indent",actionArgs:{indentRight:!1},context:"insert"},{keys:"a<character>",type:"motion",motion:"textObjectManipulation"},{keys:"i<character>",type:"motion",motion:"textObjectManipulation",motionArgs:{textObjectInner:!0}},{keys:"/",type:"search",searchArgs:{forward:!0,querySrc:"prompt",toJumplist:!0}},{keys:"?",type:"search",searchArgs:{forward:!1,querySrc:"prompt",toJumplist:!0}},{keys:"*",type:"search",searchArgs:{forward:!0,querySrc:"wordUnderCursor",wholeWordOnly:!0,toJumplist:!0}},{keys:"#",type:"search",searchArgs:{forward:!1,querySrc:"wordUnderCursor",wholeWordOnly:!0,toJumplist:!0}},{keys:"g*",type:"search",searchArgs:{forward:!0,querySrc:"wordUnderCursor",toJumplist:!0}},{keys:"g#",type:"search",searchArgs:{forward:!1,querySrc:"wordUnderCursor",toJumplist:!0}},{keys:":",type:"ex"}],n=t.length,r=[{name:"colorscheme",shortName:"colo"},{name:"map"},{name:"imap",shortName:"im"},{name:"nmap",shortName:"nm"},{name:"vmap",shortName:"vm"},{name:"unmap"},{name:"write",shortName:"w"},{name:"undo",shortName:"u"},{name:"redo",shortName:"red"},{name:"set",shortName:"se"},{name:"setlocal",shortName:"setl"},{name:"setglobal",shortName:"setg"},{name:"sort",shortName:"sor"},{name:"substitute",shortName:"s",possiblyAsync:!0},{name:"nohlsearch",shortName:"noh"},{name:"yank",shortName:"y"},{name:"delmarks",shortName:"delm"},{name:"registers",shortName:"reg",excludeFromCommandHistory:!0},{name:"global",shortName:"g"}],i=e.Pos,o=function(){function o(t){t.setOption("disableInput",!0),t.setOption("showCursorWhenSelecting",!1),e.signal(t,"vim-mode-change",{mode:"normal"}),t.on("cursorActivity",ut),A(t),e.on(t.getInputField(),"paste",m(t))}function a(t){t.setOption("disableInput",!1),t.off("cursorActivity",ut),e.off(t.getInputField(),"paste",m(t)),t.state.vim=null}function s(t,n){this==e.keyMap.vim&&(e.rmClass(t.getWrapperElement(),"cm-fat-cursor"),"contenteditable"==t.getOption("inputStyle")&&null!=document.body.style.caretColor&&(f(t),t.getInputField().style.caretColor="")),n&&n.attach==l||a(t)}function l(t,n){this==e.keyMap.vim&&(e.addClass(t.getWrapperElement(),"cm-fat-cursor"),"contenteditable"==t.getOption("inputStyle")&&null!=document.body.style.caretColor&&(d(t),t.getInputField().style.caretColor="transparent")),n&&n.attach==l||o(t)}function c(e){if(e.state.fatCursorMarks){u(e)
for(var t=e.listSelections(),n=[],r=0;r<t.length;r++){var o=t[r]
if(o.empty()){var a=e.getLine(o.anchor.line).length
o.anchor.ch<a?n.push(e.markText(o.anchor,i(o.anchor.line,o.anchor.ch+1),{className:"cm-fat-cursor-mark"})):n.push(e.markText(i(o.anchor.line,a-1),i(o.anchor.line,a),{className:"cm-fat-cursor-mark"}))}}e.state.fatCursorMarks=n}}function u(e){var t=e.state.fatCursorMarks
if(t)for(var n=0;n<t.length;n++)t[n].clear()}function d(e){e.state.fatCursorMarks=[],c(e),e.on("cursorActivity",c)}function f(e){u(e),e.off("cursorActivity",c),e.state.fatCursorMarks=null}function p(t,n){if(n){if(this[t])return this[t]
var r=h(t)
if(!r)return!1
var i=e.Vim.findKey(n,r)
return"function"==typeof i&&e.signal(n,"vim-keypress",r),i}}function h(e){if("'"==e.charAt(0))return e.charAt(1)
var t=e.split(/-(?!$)/),n=t[t.length-1]
if(1==t.length&&1==t[0].length)return!1
if(2==t.length&&"Shift"==t[0]&&1==n.length)return!1
for(var r=!1,i=0;i<t.length;i++){var o=t[i]
o in yt?t[i]=yt[o]:r=!0,o in bt&&(t[i]=bt[o])}return!!r&&(x(n)&&(t[t.length-1]=n.toLowerCase()),"<"+t.join("-")+">")}function m(e){var t=e.state.vim
return t.onPasteFn||(t.onPasteFn=function(){t.insertMode||(e.setCursor(H(e.getCursor(),0,1)),Dt.enterInsertMode(e,{},t))}),t.onPasteFn}function g(e,t){for(var n=[],r=e;r<e+t;r++)n.push(String.fromCharCode(r))
return n}function v(e,t){return t>=e.firstLine()&&t<=e.lastLine()}function y(e){return/^[a-z]$/.test(e)}function b(e){return"()[]{}".indexOf(e)!=-1}function k(e){return kt.test(e)}function x(e){return/^[A-Z]$/.test(e)}function w(e){return/^\s*$/.test(e)}function _(e){return".?!".indexOf(e)!=-1}function C(e,t){for(var n=0;n<t.length;n++)if(t[n]==e)return!0
return!1}function S(e,t,n,r,i){if(void 0===t&&!i)throw Error("defaultValue is required unless callback is provided")
if(n||(n="string"),Tt[e]={type:n,defaultValue:t,callback:i},r)for(var o=0;o<r.length;o++)Tt[r[o]]=Tt[e]
t&&M(e,t)}function M(e,t,n,r){var i=Tt[e]
r=r||{}
var o=r.scope
if(!i)return new Error("Unknown option: "+e)
if("boolean"==i.type){if(t&&t!==!0)return new Error("Invalid argument: "+e+"="+t)
t!==!1&&(t=!0)}i.callback?("local"!==o&&i.callback(t,void 0),"global"!==o&&n&&i.callback(t,n)):("local"!==o&&(i.value="boolean"==i.type?!!t:t),"global"!==o&&n&&(n.state.vim.options[e]={value:t}))}function L(e,t,n){var r=Tt[e]
n=n||{}
var i=n.scope
if(!r)return new Error("Unknown option: "+e)
{if(!r.callback){var o="global"!==i&&t&&t.state.vim.options[e]
return(o||"local"!==i&&r||{}).value}var o=t&&r.callback(void 0,t)
if("global"!==i&&void 0!==o)return o
if("local"!==i)return r.callback()}}function T(){this.latestRegister=void 0,this.isPlaying=!1,this.isRecording=!1,this.replaySearchQueries=[],this.onRecordingDone=void 0,this.lastInsertModeChanges=Et()}function A(e){return e.state.vim||(e.state.vim={inputState:new O,lastEditInputState:void 0,lastEditActionCommand:void 0,lastHPos:-1,lastHSPos:-1,lastMotion:null,marks:{},fakeCursor:null,insertMode:!1,insertModeRepeat:void 0,visualMode:!1,visualLine:!1,visualBlock:!1,lastSelection:null,lastPastedText:null,sel:{},options:{}}),e.state.vim}function E(){Ot={searchQuery:null,searchIsReversed:!1,lastSubstituteReplacePart:void 0,jumpList:At(),macroModeState:new T,lastCharacterSearch:{increment:0,forward:!0,selectedCharacter:""},registerController:new F({}),searchHistoryController:new I,exCommandHistoryController:new I}
for(var e in Tt){var t=Tt[e]
t.value=t.defaultValue}}function O(){this.prefixRepeat=[],this.motionRepeat=[],this.operator=null,this.operatorArgs=null,this.motion=null,this.motionArgs=null,this.keyBuffer=[],this.registerName=null}function z(t,n){t.state.vim.inputState=new O,e.signal(t,"vim-command-done",n)}function N(e,t,n){this.clear(),this.keyBuffer=[e||""],this.insertModeChanges=[],this.searchQueries=[],this.linewise=!!t,this.blockwise=!!n}function q(e,t){var n=Ot.registerController.registers
if(!e||1!=e.length)throw Error("Register name must be 1 character")
if(n[e])throw Error("Register already defined "+e)
n[e]=t,Lt.push(e)}function F(e){this.registers=e,this.unnamedRegister=e['"']=new N,e["."]=new N,e[":"]=new N,e["/"]=new N}function I(){this.historyBuffer=[],this.iterator=0,this.initialPrefix=null}function D(e,t){Ft[e]=t}function P(e,t){for(var n=[],r=0;r<t;r++)n.push(e)
return n}function R(e,t){It[e]=t}function j(e,t){Dt[e]=t}function B(e,t){var n=e.state.vim,r=n.insertMode||n.visualMode,o=Math.min(Math.max(e.firstLine(),t.line),e.lastLine()),a=ee(e,o)-1+!!r,s=Math.min(Math.max(0,t.ch),a)
return i(o,s)}function W(e){var t={}
for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t}function H(e,t,n){return"object"==typeof t&&(n=t.ch,t=t.line),i(e.line+t,e.ch+n)}function $(e,t,n,r){for(var i,o=[],a=[],s=0;s<t.length;s++){var l=t[s]
"insert"==n&&"insert"!=l.context||l.context&&l.context!=n||r.operator&&"action"==l.type||!(i=U(e,l.keys))||("partial"==i&&o.push(l),"full"==i&&a.push(l))}return{partial:o.length&&o,full:a.length&&a}}function U(e,t){if("<character>"==t.slice(-11)){var n=t.length-11,r=e.slice(0,n),i=t.slice(0,n)
return r==i&&e.length>n?"full":0==i.indexOf(r)&&"partial"}return e==t?"full":0==t.indexOf(e)&&"partial"}function K(e){var t=/^.*(<[^>]+>)$/.exec(e),n=t?t[1]:e.slice(-1)
if(n.length>1)switch(n){case"<CR>":n="\n"
break
case"<Space>":n=" "
break
default:n=""}return n}function V(e,t,n){return function(){for(var r=0;r<n;r++)t(e)}}function G(e){return i(e.line,e.ch)}function Z(e,t){return e.ch==t.ch&&e.line==t.line}function X(e,t){return e.line<t.line||e.line==t.line&&e.ch<t.ch}function Q(e,t){return arguments.length>2&&(t=Q.apply(void 0,Array.prototype.slice.call(arguments,1))),X(e,t)?e:t}function Y(e,t){return arguments.length>2&&(t=Y.apply(void 0,Array.prototype.slice.call(arguments,1))),X(e,t)?t:e}function J(e,t,n){var r=X(e,t),i=X(t,n)
return r&&i}function ee(e,t){return e.getLine(t).length}function te(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function ne(e){return e.replace(/([.?*+$\[\]\/\\(){}|\-])/g,"\\$1")}function re(e,t,n){var r=ee(e,t),o=new Array(n-r+1).join(" ")
e.setCursor(i(t,r)),e.replaceRange(o,e.getCursor())}function ie(e,t){var n=[],r=e.listSelections(),o=G(e.clipPos(t)),a=!Z(t,o),s=e.getCursor("head"),l=ae(r,s),c=Z(r[l].head,r[l].anchor),u=r.length-1,d=u-l>l?u:0,f=r[d].anchor,p=Math.min(f.line,o.line),h=Math.max(f.line,o.line),m=f.ch,g=o.ch,v=r[d].head.ch-m,y=g-m
v>0&&y<=0?(m++,a||g--):v<0&&y>=0?(m--,c||g++):v<0&&y==-1&&(m--,g++)
for(var b=p;b<=h;b++){var k={anchor:new i(b,m),head:new i(b,g)}
n.push(k)}return e.setSelections(n),t.ch=g,f.ch=m,f}function oe(e,t,n){for(var r=[],i=0;i<n;i++){var o=H(t,i,0)
r.push({anchor:o,head:o})}e.setSelections(r,0)}function ae(e,t,n){for(var r=0;r<e.length;r++){var i="head"!=n&&Z(e[r].anchor,t),o="anchor"!=n&&Z(e[r].head,t)
if(i||o)return r}return-1}function se(e,t){var n=t.lastSelection,r=function(){var t=e.listSelections(),n=t[0],r=t[t.length-1],i=X(n.anchor,n.head)?n.anchor:n.head,o=X(r.anchor,r.head)?r.head:r.anchor
return[i,o]},o=function(){var t=e.getCursor(),r=e.getCursor(),o=n.visualBlock
if(o){var a=o.width,s=o.height
r=i(t.line+s,t.ch+a)
for(var l=[],c=t.line;c<r.line;c++){var u=i(c,t.ch),d=i(c,r.ch),f={anchor:u,head:d}
l.push(f)}e.setSelections(l)}else{var p=n.anchorMark.find(),h=n.headMark.find(),m=h.line-p.line,g=h.ch-p.ch
r={line:r.line+m,ch:m?r.ch:g+r.ch},n.visualLine&&(t=i(t.line,0),r=i(r.line,ee(e,r.line))),e.setSelection(t,r)}return[t,r]}
return t.visualMode?r():o()}function le(e,t){var n=t.sel.anchor,r=t.sel.head
t.lastPastedText&&(r=e.posFromIndex(e.indexFromPos(n)+t.lastPastedText.length),t.lastPastedText=null),t.lastSelection={anchorMark:e.setBookmark(n),headMark:e.setBookmark(r),anchor:G(n),head:G(r),visualMode:t.visualMode,visualLine:t.visualLine,visualBlock:t.visualBlock}}function ce(e,t,n){var r,o=e.state.vim.sel,a=o.head,s=o.anchor
return X(n,t)&&(r=n,n=t,t=r),X(a,s)?(a=Q(t,a),s=Y(s,n)):(s=Q(t,s),a=Y(a,n),a=H(a,0,-1),a.ch==-1&&a.line!=e.firstLine()&&(a=i(a.line-1,ee(e,a.line-1)))),[s,a]}function ue(e,t,n){var r=e.state.vim
t=t||r.sel
var n=n||r.visualLine?"line":r.visualBlock?"block":"char",i=de(e,t,n)
e.setSelections(i.ranges,i.primary),dt(e)}function de(e,t,n,r){var o=G(t.head),a=G(t.anchor)
if("char"==n){var s=r||X(t.head,t.anchor)?0:1,l=X(t.head,t.anchor)?1:0
return o=H(t.head,0,s),a=H(t.anchor,0,l),{ranges:[{anchor:a,head:o}],primary:0}}if("line"==n){if(X(t.head,t.anchor))o.ch=0,a.ch=ee(e,a.line)
else{a.ch=0
var c=e.lastLine()
o.line>c&&(o.line=c),o.ch=ee(e,o.line)}return{ranges:[{anchor:a,head:o}],primary:0}}if("block"==n){for(var u=Math.min(a.line,o.line),d=Math.min(a.ch,o.ch),f=Math.max(a.line,o.line),p=Math.max(a.ch,o.ch)+1,h=f-u+1,m=o.line==u?0:h-1,g=[],v=0;v<h;v++)g.push({anchor:i(u+v,d),head:i(u+v,p)})
return{ranges:g,primary:m}}}function fe(e){var t=e.getCursor("head")
return 1==e.getSelection().length&&(t=Q(t,e.getCursor("anchor"))),t}function pe(t,n){var r=t.state.vim
n!==!1&&t.setCursor(B(t,r.sel.head)),le(t,r),r.visualMode=!1,r.visualLine=!1,r.visualBlock=!1,r.insertMode||e.signal(t,"vim-mode-change",{mode:"normal"}),ft(r)}function he(e,t,n){var r=e.getRange(t,n)
if(/\n\s*$/.test(r)){var i=r.split("\n")
i.pop()
for(var o,o=i.pop();i.length>0&&o&&w(o);o=i.pop())n.line--,n.ch=0
o?(n.line--,n.ch=ee(e,n.line)):n.ch=0}}function me(e,t,n){t.ch=0,n.ch=0,n.line++}function ge(e){if(!e)return 0
var t=e.search(/\S/)
return t==-1?e.length:t}function ve(e,t,n,r,o){for(var a=fe(e),s=e.getLine(a.line),l=a.ch,c=o?xt[0]:wt[0];!c(s.charAt(l));)if(l++,l>=s.length)return null
r?c=wt[0]:(c=xt[0],c(s.charAt(l))||(c=xt[1]))
for(var u=l,d=l;c(s.charAt(u))&&u<s.length;)u++
for(;c(s.charAt(d))&&d>=0;)d--
if(d++,t){for(var f=u;/\s/.test(s.charAt(u))&&u<s.length;)u++
if(f==u){for(var p=d;/\s/.test(s.charAt(d-1))&&d>0;)d--
d||(d=p)}}return{start:i(a.line,d),end:i(a.line,u)}}function ye(e,t,n){Z(t,n)||Ot.jumpList.add(e,t,n)}function be(e,t){Ot.lastCharacterSearch.increment=e,Ot.lastCharacterSearch.forward=t.forward,Ot.lastCharacterSearch.selectedCharacter=t.selectedCharacter}function ke(e,t,n,r){var o=G(e.getCursor()),a=n?1:-1,s=n?e.lineCount():-1,l=o.ch,c=o.line,u=e.getLine(c),d={lineText:u,nextCh:u.charAt(l),lastCh:null,index:l,symb:r,reverseSymb:(n?{")":"(","}":"{"}:{"(":")","{":"}"})[r],forward:n,depth:0,curMoveThrough:!1},f=Pt[r]
if(!f)return o
var p=Rt[f].init,h=Rt[f].isComplete
for(p&&p(d);c!==s&&t;){if(d.index+=a,d.nextCh=d.lineText.charAt(d.index),!d.nextCh){if(c+=a,d.lineText=e.getLine(c)||"",a>0)d.index=0
else{var m=d.lineText.length
d.index=m>0?m-1:0}d.nextCh=d.lineText.charAt(d.index)}h(d)&&(o.line=c,o.ch=d.index,t--)}return d.nextCh||d.curMoveThrough?i(c,d.index):o}function xe(e,t,n,r,i){var o=t.line,a=t.ch,s=e.getLine(o),l=n?1:-1,c=r?wt:xt
if(i&&""==s){if(o+=l,s=e.getLine(o),!v(e,o))return null
a=n?0:s.length}for(;;){if(i&&""==s)return{from:0,to:0,line:o}
for(var u=l>0?s.length:-1,d=u,f=u;a!=u;){for(var p=!1,h=0;h<c.length&&!p;++h)if(c[h](s.charAt(a))){for(d=a;a!=u&&c[h](s.charAt(a));)a+=l
if(f=a,p=d!=f,d==t.ch&&o==t.line&&f==d+l)continue
return{from:Math.min(d,f+1),to:Math.max(d,f),line:o}}p||(a+=l)}if(o+=l,!v(e,o))return null
s=e.getLine(o),a=l>0?0:s.length}}function we(e,t,n,r,o,a){var s=G(t),l=[];(r&&!o||!r&&o)&&n++
for(var c=!(r&&o),u=0;u<n;u++){var d=xe(e,t,r,a,c)
if(!d){var f=ee(e,e.lastLine())
l.push(r?{line:e.lastLine(),from:f,to:f}:{line:0,from:0,to:0})
break}l.push(d),t=i(d.line,r?d.to-1:d.from)}var p=l.length!=n,h=l[0],m=l.pop()
return r&&!o?(p||h.from==s.ch&&h.line==s.line||(m=l.pop()),i(m.line,m.from)):r&&o?i(m.line,m.to-1):!r&&o?(p||h.to==s.ch&&h.line==s.line||(m=l.pop()),i(m.line,m.to)):i(m.line,m.from)}function _e(e,t,n,r){for(var o,a=e.getCursor(),s=a.ch,l=0;l<t;l++){var c=e.getLine(a.line)
if(o=Me(s,c,r,n,!0),o==-1)return null
s=o}return i(e.getCursor().line,o)}function Ce(e,t){var n=e.getCursor().line
return B(e,i(n,t-1))}function Se(e,t,n,r){C(n,Mt)&&(t.marks[n]&&t.marks[n].clear(),t.marks[n]=e.setBookmark(r))}function Me(e,t,n,r,i){var o
return r?(o=t.indexOf(n,e+1),o==-1||i||(o-=1)):(o=t.lastIndexOf(n,e-1),o==-1||i||(o+=1)),o}function Le(e,t,n,r,o){function a(t){return!e.getLine(t)}function s(e,t,n){return n?a(e)!=a(e+t):!a(e)&&a(e+t)}var l,c,u=t.line,d=e.firstLine(),f=e.lastLine(),p=u
if(r){for(;d<=p&&p<=f&&n>0;)s(p,r)&&n--,p+=r
return new i(p,0)}var h=e.state.vim
if(h.visualLine&&s(u,1,!0)){var m=h.sel.anchor
s(m.line,-1,!0)&&(o&&m.line==u||(u+=1))}var g=a(u)
for(p=u;p<=f&&n;p++)s(p,1,!0)&&(o&&a(p)==g||n--)
for(c=new i(p,0),p>f&&!g?g=!0:o=!1,p=u;p>d&&(o&&a(p)!=g&&p!=u||!s(p,-1,!0));p--);return l=new i(p,0),{start:l,end:c}}function Te(e,t,n,r){function o(e,t){if(t.pos+t.dir<0||t.pos+t.dir>=t.line.length){if(t.ln+=t.dir,!v(e,t.ln))return t.line=null,t.ln=null,void(t.pos=null)
t.line=e.getLine(t.ln),t.pos=t.dir>0?0:t.line.length-1}else t.pos+=t.dir}function a(e,t,n,r){var i=e.getLine(t),a=""===i,s={line:i,ln:t,pos:n,dir:r},l={ln:s.ln,pos:s.pos},c=""===s.line
for(o(e,s);null!==s.line;){if(l.ln=s.ln,l.pos=s.pos,""===s.line&&!c)return{ln:s.ln,pos:s.pos}
if(a&&""!==s.line&&!w(s.line[s.pos]))return{ln:s.ln,pos:s.pos}
!_(s.line[s.pos])||a||s.pos!==s.line.length-1&&!w(s.line[s.pos+1])||(a=!0),o(e,s)}var i=e.getLine(l.ln)
l.pos=0
for(var u=i.length-1;u>=0;--u)if(!w(i[u])){l.pos=u
break}return l}function s(e,t,n,r){var i=e.getLine(t),a={line:i,ln:t,pos:n,dir:r},s={ln:a.ln,pos:null},l=""===a.line
for(o(e,a);null!==a.line;){if(""===a.line&&!l)return null!==s.pos?s:{ln:a.ln,pos:a.pos}
if(_(a.line[a.pos])&&null!==s.pos&&(a.ln!==s.ln||a.pos+1!==s.pos))return s
""===a.line||w(a.line[a.pos])||(l=!1,s={ln:a.ln,pos:a.pos}),o(e,a)}var i=e.getLine(s.ln)
s.pos=0
for(var c=0;c<i.length;++c)if(!w(i[c])){s.pos=c
break}return s}for(var l={ln:t.line,pos:t.ch};n>0;)l=r<0?s(e,l.ln,l.pos,r):a(e,l.ln,l.pos,r),n--
return i(l.ln,l.pos)}function Ae(e,t,n,r){var o,a,s=t,l={"(":/[()]/,")":/[()]/,"[":/[[\]]/,"]":/[[\]]/,"{":/[{}]/,"}":/[{}]/,"<":/[<>]/,">":/[<>]/}[n],c={"(":"(",")":"(","[":"[","]":"[","{":"{","}":"{","<":"<",">":"<"}[n],u=e.getLine(s.line).charAt(s.ch),d=u===c?1:0
if(o=e.scanForBracket(i(s.line,s.ch+d),-1,void 0,{bracketRegex:l}),a=e.scanForBracket(i(s.line,s.ch+d),1,void 0,{bracketRegex:l}),!o||!a)return{start:s,end:s}
if(o=o.pos,a=a.pos,o.line==a.line&&o.ch>a.ch||o.line>a.line){var f=o
o=a,a=f}return r?a.ch+=1:o.ch+=1,{start:o,end:a}}function Ee(e,t,n,r){var o,a,s,l,c=G(t),u=e.getLine(c.line),d=u.split(""),f=d.indexOf(n)
if(c.ch<f?c.ch=f:f<c.ch&&d[c.ch]==n&&(a=c.ch,--c.ch),d[c.ch]!=n||a)for(s=c.ch;s>-1&&!o;s--)d[s]==n&&(o=s+1)
else o=c.ch+1
if(o&&!a)for(s=o,l=d.length;s<l&&!a;s++)d[s]==n&&(a=s)
return o&&a?(r&&(--o,++a),{start:i(c.line,o),end:i(c.line,a)}):{start:c,end:c}}function Oe(){}function ze(e){var t=e.state.vim
return t.searchState_||(t.searchState_=new Oe)}function Ne(e,t,n,r,i){e.openDialog?e.openDialog(t,r,{bottom:!0,value:i.value,onKeyDown:i.onKeyDown,onKeyUp:i.onKeyUp,selectValueOnOpen:!1}):r(prompt(n,""))}function qe(e){return Ie(e,"/")}function Fe(e){return De(e,"/")}function Ie(e,t){var n=De(e,t)||[]
if(!n.length)return[]
var r=[]
if(0===n[0]){for(var i=0;i<n.length;i++)"number"==typeof n[i]&&r.push(e.substring(n[i]+1,n[i+1]))
return r}}function De(e,t){t||(t="/")
for(var n=!1,r=[],i=0;i<e.length;i++){var o=e.charAt(i)
n||o!=t||r.push(i),n=!n&&"\\"==o}return r}function Pe(e){for(var t="|(){",n="}",r=!1,i=[],o=-1;o<e.length;o++){var a=e.charAt(o)||"",s=e.charAt(o+1)||"",l=s&&t.indexOf(s)!=-1
r?("\\"===a&&l||i.push(a),r=!1):"\\"===a?(r=!0,s&&n.indexOf(s)!=-1&&(l=!0),l&&"\\"!==s||i.push(a)):(i.push(a),l&&"\\"!==s&&i.push("\\"))}return i.join("")}function Re(e){for(var t=!1,n=[],r=-1;r<e.length;r++){var i=e.charAt(r)||"",o=e.charAt(r+1)||""
jt[i+o]?(n.push(jt[i+o]),r++):t?(n.push(i),t=!1):"\\"===i?(t=!0,k(o)||"$"===o?n.push("$"):"/"!==o&&"\\"!==o&&n.push("\\")):("$"===i&&n.push("$"),n.push(i),"/"===o&&n.push("\\"))}return n.join("")}function je(t){for(var n=new e.StringStream(t),r=[];!n.eol();){for(;n.peek()&&"\\"!=n.peek();)r.push(n.next())
var i=!1
for(var o in Bt)if(n.match(o,!0)){i=!0,r.push(Bt[o])
break}i||r.push(n.next())}return r.join("")}function Be(e,t,n){var r=Ot.registerController.getRegister("/")
if(r.setText(e),e instanceof RegExp)return e
var i,o,a=Fe(e)
if(a.length){i=e.substring(0,a[0])
var s=e.substring(a[0])
o=s.indexOf("i")!=-1}else i=e
if(!i)return null
L("pcre")||(i=Pe(i)),n&&(t=/^[^A-Z]*$/.test(i))
var l=new RegExp(i,t||o?"i":void 0)
return l}function We(e,t){e.openNotification?e.openNotification('<span style="color: red">'+t+"</span>",{bottom:!0,duration:5e3}):alert(t)}function He(e,t){var n='<span style="font-family: monospace; white-space: pre">'+(e||"")+'<input type="text" autocorrect="off" autocapitalize="off" spellcheck="false"></span>'
return t&&(n+=' <span style="color: #888">'+t+"</span>"),n}function $e(e,t){var n=(t.prefix||"")+" "+(t.desc||""),r=He(t.prefix,t.desc)
Ne(e,r,n,t.onClose,t)}function Ue(e,t){if(e instanceof RegExp&&t instanceof RegExp){for(var n=["global","multiline","ignoreCase","source"],r=0;r<n.length;r++){var i=n[r]
if(e[i]!==t[i])return!1}return!0}return!1}function Ke(e,t,n,r){if(t){var i=ze(e),o=Be(t,!!n,!!r)
if(o)return Ge(e,o),Ue(o,i.getQuery())?o:(i.setQuery(o),o)}}function Ve(e){if("^"==e.source.charAt(0))var t=!0
return{token:function(n){if(t&&!n.sol())return void n.skipToEnd()
var r=n.match(e,!1)
if(r)return 0==r[0].length?(n.next(),"searching"):n.sol()||(n.backUp(1),e.exec(n.next()+r[0]))?(n.match(e),"searching"):(n.next(),null)
for(;!n.eol()&&(n.next(),!n.match(e,!1)););},query:e}}function Ge(e,t){clearTimeout(Ht),Ht=setTimeout(function(){var n=ze(e),r=n.getOverlay()
r&&t==r.query||(r&&e.removeOverlay(r),r=Ve(t),e.addOverlay(r),e.showMatchesOnScrollbar&&(n.getScrollbarAnnotate()&&n.getScrollbarAnnotate().clear(),n.setScrollbarAnnotate(e.showMatchesOnScrollbar(t))),n.setOverlay(r))},50)}function Ze(e,t,n,r){return void 0===r&&(r=1),e.operation(function(){for(var o=e.getCursor(),a=e.getSearchCursor(n,o),s=0;s<r;s++){var l=a.find(t)
if(0==s&&l&&Z(a.from(),o)&&(l=a.find(t)),!l&&(a=e.getSearchCursor(n,t?i(e.lastLine()):i(e.firstLine(),0)),!a.find(t)))return}return a.from()})}function Xe(e){var t=ze(e)
e.removeOverlay(ze(e).getOverlay()),t.setOverlay(null),t.getScrollbarAnnotate()&&(t.getScrollbarAnnotate().clear(),t.setScrollbarAnnotate(null))}function Qe(e,t,n){return"number"!=typeof e&&(e=e.line),t instanceof Array?C(e,t):n?e>=t&&e<=n:e==t}function Ye(e){var t=e.getScrollInfo(),n=6,r=10,i=e.coordsChar({left:0,top:n+t.top},"local"),o=t.clientHeight-r+t.top,a=e.coordsChar({left:0,top:o},"local")
return{top:i.line,bottom:a.line}}function Je(e,t,n){if("'"==n||"`"==n)return Ot.jumpList.find(e,-1)||i(0,0)
if("."==n)return et(e)
var r=t.marks[n]
return r&&r.find()}function et(e){for(var t=e.doc.history.done,n=t.length;n--;)if(t[n].changes)return G(t[n].changes[0].to)}function tt(t,n,r,i,o,a,s,l,c){function u(){t.operation(function(){for(;!m;)d(),f()
p()})}function d(){var e=t.getRange(a.from(),a.to()),n=e.replace(s,l)
a.replace(n)}function f(){for(;a.findNext()&&Qe(a.from(),i,o);)if(r||!g||a.from().line!=g.line)return t.scrollIntoView(a.from(),30),t.setSelection(a.from(),a.to()),g=a.from(),void(m=!1)
m=!0}function p(e){if(e&&e(),t.focus(),g){t.setCursor(g)
var n=t.state.vim
n.exMode=!1,n.lastHPos=n.lastHSPos=g.ch}c&&c()}function h(n,r,i){e.e_stop(n)
var o=e.keyName(n)
switch(o){case"Y":d(),f()
break
case"N":f()
break
case"A":var a=c
c=void 0,t.operation(u),c=a
break
case"L":d()
case"Q":case"Esc":case"Ctrl-C":case"Ctrl-[":p(i)}return m&&p(i),!0}t.state.vim.exMode=!0
var m=!1,g=a.from()
return f(),m?void We(t,"No matches for "+s.source):n?void $e(t,{prefix:"replace with <strong>"+l+"</strong> (y/n/a/q/l)",onKeyDown:h}):(u(),void(c&&c()))}function nt(t){var n=t.state.vim,r=Ot.macroModeState,i=Ot.registerController.getRegister("."),o=r.isPlaying,a=r.lastInsertModeChanges
o||(t.off("change",ct),e.off(t.getInputField(),"keydown",mt)),!o&&n.insertModeRepeat>1&&(gt(t,n,n.insertModeRepeat-1,!0),n.lastEditInputState.repeatOverride=n.insertModeRepeat),delete n.insertModeRepeat,n.insertMode=!1,t.setCursor(t.getCursor().line,t.getCursor().ch-1),t.setOption("keyMap","vim"),t.setOption("disableInput",!0),t.toggleOverwrite(!1),i.setText(a.changes.join("")),e.signal(t,"vim-mode-change",{mode:"normal"}),r.isRecording&&st(r)}function rt(e){t.unshift(e)}function it(e,t,n,r,i){var o={keys:e,type:t}
o[t]=n,o[t+"Args"]=r
for(var a in i)o[a]=i[a]
rt(o)}function ot(t,n,r,i){var o=Ot.registerController.getRegister(i)
if(":"==i)return o.keyBuffer[0]&&Kt.processCommand(t,o.keyBuffer[0]),void(r.isPlaying=!1)
var a=o.keyBuffer,s=0
r.isPlaying=!0,r.replaySearchQueries=o.searchQueries.slice(0)
for(var l=0;l<a.length;l++)for(var c,u,d=a[l];d;)if(c=/<\w+-.+?>|<\w+>|./.exec(d),u=c[0],d=d.substring(c.index+u.length),e.Vim.handleKey(t,u,"macro"),n.insertMode){var f=o.insertModeChanges[s++].changes
Ot.macroModeState.lastInsertModeChanges.changes=f,vt(t,f,1),nt(t)}r.isPlaying=!1}function at(e,t){if(!e.isPlaying){var n=e.latestRegister,r=Ot.registerController.getRegister(n)
r&&r.pushText(t)}}function st(e){if(!e.isPlaying){var t=e.latestRegister,n=Ot.registerController.getRegister(t)
n&&n.pushInsertModeChanges&&n.pushInsertModeChanges(e.lastInsertModeChanges)}}function lt(e,t){if(!e.isPlaying){var n=e.latestRegister,r=Ot.registerController.getRegister(n)
r&&r.pushSearchQuery&&r.pushSearchQuery(t)}}function ct(e,t){var n=Ot.macroModeState,r=n.lastInsertModeChanges
if(!n.isPlaying)for(;t;){if(r.expectCursorActivityForChange=!0,r.ignoreCount>1)r.ignoreCount--
else if("+input"==t.origin||"paste"==t.origin||void 0===t.origin){var i=e.listSelections().length
i>1&&(r.ignoreCount=i)
var o=t.text.join("\n")
r.maybeReset&&(r.changes=[],r.maybeReset=!1),o&&(e.state.overwrite&&!/\n/.test(o)?r.changes.push([o]):r.changes.push(o))}t=t.next}}function ut(e){var t=e.state.vim
if(t.insertMode){var n=Ot.macroModeState
if(n.isPlaying)return
var r=n.lastInsertModeChanges
r.expectCursorActivityForChange?r.expectCursorActivityForChange=!1:r.maybeReset=!0}else e.curOp.isVimOp||pt(e,t)
t.visualMode&&dt(e)}function dt(e){var t="cm-animate-fat-cursor",n=e.state.vim,r=B(e,G(n.sel.head)),i=H(r,0,1)
if(ft(n),r.ch==e.getLine(r.line).length){var o=document.createElement("span")
o.textContent=" ",o.className=t,n.fakeCursorBookmark=e.setBookmark(r,{widget:o})}else n.fakeCursor=e.markText(r,i,{className:t})}function ft(e){e.fakeCursor&&(e.fakeCursor.clear(),e.fakeCursor=null),e.fakeCursorBookmark&&(e.fakeCursorBookmark.clear(),e.fakeCursorBookmark=null)}function pt(t,n){var r=t.getCursor("anchor"),i=t.getCursor("head")
if(n.visualMode&&!t.somethingSelected()?pe(t,!1):n.visualMode||n.insertMode||!t.somethingSelected()||(n.visualMode=!0,n.visualLine=!1,e.signal(t,"vim-mode-change",{mode:"visual"})),n.visualMode){var o=X(i,r)?0:-1,a=X(i,r)?-1:0
i=H(i,0,o),r=H(r,0,a),n.sel={anchor:r,head:i},Se(t,n,"<",Q(i,r)),Se(t,n,">",Y(i,r))}else n.insertMode||(n.lastHPos=t.getCursor().ch)}function ht(e){this.keyName=e}function mt(t){function n(){return i.maybeReset&&(i.changes=[],i.maybeReset=!1),i.changes.push(new ht(o)),!0}var r=Ot.macroModeState,i=r.lastInsertModeChanges,o=e.keyName(t)
o&&(o.indexOf("Delete")==-1&&o.indexOf("Backspace")==-1||e.lookupKey(o,"vim-insert",n))}function gt(e,t,n,r){function i(){s?qt.processAction(e,t,t.lastEditActionCommand):qt.evalInput(e,t)}function o(n){if(a.lastInsertModeChanges.changes.length>0){n=t.lastEditActionCommand?n:1
var r=a.lastInsertModeChanges
vt(e,r.changes,n)}}var a=Ot.macroModeState
a.isPlaying=!0
var s=!!t.lastEditActionCommand,l=t.inputState
if(t.inputState=t.lastEditInputState,s&&t.lastEditActionCommand.interlaceInsertRepeat)for(var c=0;c<n;c++)i(),o(1)
else r||i(),o(n)
t.inputState=l,t.insertMode&&!r&&nt(e),a.isPlaying=!1}function vt(t,n,r){function i(n){return"string"==typeof n?e.commands[n](t):n(t),!0}var o=t.getCursor("head"),a=Ot.macroModeState.lastInsertModeChanges.visualBlock
a&&(oe(t,o,a+1),r=t.listSelections().length,t.setCursor(o))
for(var s=0;s<r;s++){a&&t.setCursor(H(o,s,0))
for(var l=0;l<n.length;l++){var c=n[l]
if(c instanceof ht)e.lookupKey(c.keyName,"vim-insert",i)
else if("string"==typeof c){var u=t.getCursor()
t.replaceRange(c,u,u)}else{var d=t.getCursor(),f=H(d,0,c[0].length)
t.replaceRange(c[0],d,f)}}}a&&t.setCursor(H(o,0,1))}e.defineOption("vimMode",!1,function(t,n,r){n&&"vim"!=t.getOption("keyMap")?t.setOption("keyMap","vim"):!n&&r!=e.Init&&/^vim/.test(t.getOption("keyMap"))&&t.setOption("keyMap","default")})
var yt={Shift:"S",Ctrl:"C",Alt:"A",Cmd:"D",Mod:"A"},bt={Enter:"CR",Backspace:"BS",Delete:"Del",Insert:"Ins"},kt=/[\d]/,xt=[e.isWordChar,function(t){return t&&!e.isWordChar(t)&&!/\s/.test(t)}],wt=[function(e){return/\S/.test(e)}],_t=g(65,26),Ct=g(97,26),St=g(48,10),Mt=[].concat(_t,Ct,St,["<",">"]),Lt=[].concat(_t,Ct,St,["-",'"',".",":","/"]),Tt={}
S("filetype",void 0,"string",["ft"],function(e,t){if(void 0!==t){if(void 0===e){var n=t.getOption("mode")
return"null"==n?"":n}var n=""==e?"null":e
t.setOption("mode",n)}})
var At=function(){function e(e,t,n){function l(t){var n=++i%r,o=s[n]
o&&o.clear(),s[n]=e.setBookmark(t)}var c=i%r,u=s[c]
if(u){var d=u.find()
d&&!Z(d,t)&&l(t)}else l(t)
l(n),o=i,a=i-r+1,a<0&&(a=0)}function t(e,t){i+=t,i>o?i=o:i<a&&(i=a)
var n=s[(r+i)%r]
if(n&&!n.find()){var l,c=t>0?1:-1,u=e.getCursor()
do if(i+=c,n=s[(r+i)%r],n&&(l=n.find())&&!Z(u,l))break
while(i<o&&i>a)}return n}function n(e,n){var r=i,o=t(e,n)
return i=r,o&&o.find()}var r=100,i=-1,o=0,a=0,s=new Array(r)
return{cachedCursor:void 0,add:e,find:n,move:t}},Et=function(e){return e?{changes:e.changes,expectCursorActivityForChange:e.expectCursorActivityForChange}:{changes:[],expectCursorActivityForChange:!1}}
T.prototype={exitMacroRecordMode:function(){var e=Ot.macroModeState
e.onRecordingDone&&e.onRecordingDone(),e.onRecordingDone=void 0,e.isRecording=!1},enterMacroRecordMode:function(e,t){var n=Ot.registerController.getRegister(t)
n&&(n.clear(),this.latestRegister=t,e.openDialog&&(this.onRecordingDone=e.openDialog("(recording)["+t+"]",null,{bottom:!0})),this.isRecording=!0)}}
var Ot,zt,Nt={buildKeyMap:function(){},getRegisterController:function(){return Ot.registerController},resetVimGlobalState_:E,getVimGlobalState_:function(){return Ot},maybeInitVimState_:A,suppressErrorLogging:!1,InsertModeKey:ht,map:function(e,t,n){Kt.map(e,t,n)},unmap:function(e,t){Kt.unmap(e,t)},noremap:function(e,r,i){function o(e){return e?[e]:["normal","insert","visual"]}for(var a=o(i),s=t.length,l=n,c=s-l;c<s&&a.length;c++){var u=t[c]
if(!(u.keys!=r||i&&u.context&&u.context!==i||"ex"===u.type.substr(0,2)||"key"===u.type.substr(0,3))){var d={}
for(var f in u)d[f]=u[f]
d.keys=e,i&&!d.context&&(d.context=i),this._mapCommand(d)
var p=o(u.context)
a=a.filter(function(e){return p.indexOf(e)===-1})}}},mapclear:function(e){var r=t.length,i=n,o=t.slice(0,r-i)
if(t=t.slice(r-i),e)for(var a=o.length-1;a>=0;a--){var s=o[a]
if(e!==s.context)if(s.context)this._mapCommand(s)
else{var l=["normal","insert","visual"]
for(var c in l)if(l[c]!==e){var u={}
for(var d in s)u[d]=s[d]
u.context=l[c],this._mapCommand(u)}}}},setOption:M,getOption:L,defineOption:S,defineEx:function(e,t,n){if(t){if(0!==e.indexOf(t))throw new Error('(Vim.defineEx) "'+t+'" is not a prefix of "'+e+'", command not registered')}else t=e
Ut[e]=n,Kt.commandMap_[t]={name:e,shortName:t,type:"api"}},handleKey:function(e,t,n){var r=this.findKey(e,t,n)
if("function"==typeof r)return r()},findKey:function(n,r,i){function o(){var e=Ot.macroModeState
if(e.isRecording){if("q"==r)return e.exitMacroRecordMode(),z(n),!0
"mapping"!=i&&at(e,r)}}function a(){if("<Esc>"==r)return z(n),d.visualMode?pe(n):d.insertMode&&nt(n),!0}function s(t){for(var i;t;)i=/<\w+-.+?>|<\w+>|./.exec(t),r=i[0],t=t.substring(i.index+r.length),e.Vim.handleKey(n,r,"mapping")}function l(){if(a())return!0
for(var e=d.inputState.keyBuffer=d.inputState.keyBuffer+r,i=1==r.length,o=qt.matchCommand(e,t,d.inputState,"insert");e.length>1&&"full"!=o.type;){var e=d.inputState.keyBuffer=e.slice(1),s=qt.matchCommand(e,t,d.inputState,"insert")
"none"!=s.type&&(o=s)}if("none"==o.type)return z(n),!1
if("partial"==o.type)return zt&&window.clearTimeout(zt),zt=window.setTimeout(function(){d.insertMode&&d.inputState.keyBuffer&&z(n)},L("insertModeEscKeysTimeout")),!i
if(zt&&window.clearTimeout(zt),i){for(var l=n.listSelections(),c=0;c<l.length;c++){var u=l[c].head
n.replaceRange("",H(u,0,-(e.length-1)),u,"+input")}Ot.macroModeState.lastInsertModeChanges.changes.pop()}return z(n),o.command}function c(){if(o()||a())return!0
var e=d.inputState.keyBuffer=d.inputState.keyBuffer+r
if(/^[1-9]\d*$/.test(e))return!0
var i=/^(\d*)(.*)$/.exec(e)
if(!i)return z(n),!1
var s=d.visualMode?"visual":"normal",l=qt.matchCommand(i[2]||i[1],t,d.inputState,s)
if("none"==l.type)return z(n),!1
if("partial"==l.type)return!0
d.inputState.keyBuffer=""
var i=/^(\d*)(.*)$/.exec(e)
return i[1]&&"0"!=i[1]&&d.inputState.pushRepeatDigit(i[1]),l.command}var u,d=A(n)
return u=d.insertMode?l():c(),u===!1?d.insertMode||1!==r.length?void 0:function(){return!0}:u===!0?function(){return!0}:function(){return n.operation(function(){n.curOp.isVimOp=!0
try{"keyToKey"==u.type?s(u.toKeys):qt.processCommand(n,d,u)}catch(t){throw n.state.vim=void 0,A(n),e.Vim.suppressErrorLogging||console.log(t),t}return!0})}},handleEx:function(e,t){Kt.processCommand(e,t)},defineMotion:D,defineAction:j,defineOperator:R,mapCommand:it,_mapCommand:rt,defineRegister:q,exitVisualMode:pe,exitInsertMode:nt}
O.prototype.pushRepeatDigit=function(e){this.operator?this.motionRepeat=this.motionRepeat.concat(e):this.prefixRepeat=this.prefixRepeat.concat(e)},O.prototype.getRepeat=function(){var e=0
return(this.prefixRepeat.length>0||this.motionRepeat.length>0)&&(e=1,this.prefixRepeat.length>0&&(e*=parseInt(this.prefixRepeat.join(""),10)),this.motionRepeat.length>0&&(e*=parseInt(this.motionRepeat.join(""),10))),e},N.prototype={setText:function(e,t,n){this.keyBuffer=[e||""],this.linewise=!!t,this.blockwise=!!n},pushText:function(e,t){t&&(this.linewise||this.keyBuffer.push("\n"),this.linewise=!0),this.keyBuffer.push(e)},pushInsertModeChanges:function(e){this.insertModeChanges.push(Et(e))},pushSearchQuery:function(e){this.searchQueries.push(e)},clear:function(){this.keyBuffer=[],this.insertModeChanges=[],this.searchQueries=[],this.linewise=!1},toString:function(){return this.keyBuffer.join("")}},F.prototype={pushText:function(e,t,n,r,i){r&&"\n"!==n.charAt(n.length-1)&&(n+="\n")
var o=this.isValidRegister(e)?this.getRegister(e):null
if(!o){switch(t){case"yank":this.registers[0]=new N(n,r,i)
break
case"delete":case"change":n.indexOf("\n")==-1?this.registers["-"]=new N(n,r):(this.shiftNumericRegisters_(),this.registers[1]=new N(n,r))}return void this.unnamedRegister.setText(n,r,i)}var a=x(e)
a?o.pushText(n,r):o.setText(n,r,i),this.unnamedRegister.setText(o.toString(),r)},getRegister:function(e){return this.isValidRegister(e)?(e=e.toLowerCase(),this.registers[e]||(this.registers[e]=new N),this.registers[e]):this.unnamedRegister},isValidRegister:function(e){return e&&C(e,Lt)},shiftNumericRegisters_:function(){for(var e=9;e>=2;e--)this.registers[e]=this.getRegister(""+(e-1))}},I.prototype={nextMatch:function(e,t){var n=this.historyBuffer,r=t?-1:1
null===this.initialPrefix&&(this.initialPrefix=e)
for(var i=this.iterator+r;t?i>=0:i<n.length;i+=r)for(var o=n[i],a=0;a<=o.length;a++)if(this.initialPrefix==o.substring(0,a))return this.iterator=i,o
return i>=n.length?(this.iterator=n.length,this.initialPrefix):i<0?e:void 0},pushInput:function(e){var t=this.historyBuffer.indexOf(e)
t>-1&&this.historyBuffer.splice(t,1),e.length&&this.historyBuffer.push(e)},reset:function(){this.initialPrefix=null,this.iterator=this.historyBuffer.length}}
var qt={matchCommand:function(e,t,n,r){var i=$(e,t,r,n)
if(!i.full&&!i.partial)return{type:"none"}
if(!i.full&&i.partial)return{type:"partial"}
for(var o,a=0;a<i.full.length;a++){var s=i.full[a]
o||(o=s)}if("<character>"==o.keys.slice(-11)){var l=K(e)
if(!l)return{type:"none"}
n.selectedCharacter=l}return{type:"full",command:o}},processCommand:function(e,t,n){switch(t.inputState.repeatOverride=n.repeatOverride,n.type){case"motion":this.processMotion(e,t,n)
break
case"operator":this.processOperator(e,t,n)
break
case"operatorMotion":this.processOperatorMotion(e,t,n)
break
case"action":this.processAction(e,t,n)
break
case"search":this.processSearch(e,t,n)
break
case"ex":case"keyToEx":this.processEx(e,t,n)}},processMotion:function(e,t,n){t.inputState.motion=n.motion,t.inputState.motionArgs=W(n.motionArgs),this.evalInput(e,t)},processOperator:function(e,t,n){var r=t.inputState
if(r.operator){if(r.operator==n.operator)return r.motion="expandToLine",r.motionArgs={linewise:!0},void this.evalInput(e,t)
z(e)}r.operator=n.operator,r.operatorArgs=W(n.operatorArgs),n.exitVisualBlock&&(t.visualBlock=!1,ue(e)),t.visualMode&&this.evalInput(e,t)},processOperatorMotion:function(e,t,n){var r=t.visualMode,i=W(n.operatorMotionArgs)
i&&r&&i.visualLine&&(t.visualLine=!0),this.processOperator(e,t,n),r||this.processMotion(e,t,n)},processAction:function(e,t,n){var r=t.inputState,i=r.getRepeat(),o=!!i,a=W(n.actionArgs)||{}
r.selectedCharacter&&(a.selectedCharacter=r.selectedCharacter),n.operator&&this.processOperator(e,t,n),n.motion&&this.processMotion(e,t,n),(n.motion||n.operator)&&this.evalInput(e,t),a.repeat=i||1,a.repeatIsExplicit=o,a.registerName=r.registerName,z(e),t.lastMotion=null,n.isEdit&&this.recordLastEdit(t,r,n),Dt[n.action](e,a,t)},processSearch:function(t,n,r){function i(e,i,o){Ot.searchHistoryController.pushInput(e),Ot.searchHistoryController.reset()
try{Ke(t,e,i,o)}catch(a){return We(t,"Invalid regex: "+e),void z(t)}qt.processMotion(t,n,{type:"motion",motion:"findNext",motionArgs:{forward:!0,toJumplist:r.searchArgs.toJumplist}})}function o(e){t.scrollTo(f.left,f.top),i(e,!0,!0)
var n=Ot.macroModeState
n.isRecording&&lt(n,e)}function a(n,r,i){var o,a,s=e.keyName(n)
"Up"==s||"Down"==s?(o="Up"==s,a=n.target?n.target.selectionEnd:0,r=Ot.searchHistoryController.nextMatch(r,o)||"",i(r),a&&n.target&&(n.target.selectionEnd=n.target.selectionStart=Math.min(a,n.target.value.length))):"Left"!=s&&"Right"!=s&&"Ctrl"!=s&&"Alt"!=s&&"Shift"!=s&&Ot.searchHistoryController.reset()
var c
try{c=Ke(t,r,!0,!0)}catch(n){}c?t.scrollIntoView(Ze(t,!l,c),30):(Xe(t),t.scrollTo(f.left,f.top))}function s(n,r,i){var o=e.keyName(n)
"Esc"==o||"Ctrl-C"==o||"Ctrl-["==o||"Backspace"==o&&""==r?(Ot.searchHistoryController.pushInput(r),Ot.searchHistoryController.reset(),Ke(t,d),Xe(t),t.scrollTo(f.left,f.top),e.e_stop(n),z(t),i(),t.focus()):"Up"==o||"Down"==o?e.e_stop(n):"Ctrl-U"==o&&(e.e_stop(n),i(""))}if(t.getSearchCursor){var l=r.searchArgs.forward,c=r.searchArgs.wholeWordOnly
ze(t).setReversed(!l)
var u=l?"/":"?",d=ze(t).getQuery(),f=t.getScrollInfo()
switch(r.searchArgs.querySrc){case"prompt":var p=Ot.macroModeState
if(p.isPlaying){var h=p.replaySearchQueries.shift()
i(h,!0,!1)}else $e(t,{onClose:o,prefix:u,desc:Wt,onKeyUp:a,onKeyDown:s})
break
case"wordUnderCursor":var m=ve(t,!1,!0,!1,!0),g=!0
if(m||(m=ve(t,!1,!0,!1,!1),g=!1),!m)return
var h=t.getLine(m.start.line).substring(m.start.ch,m.end.ch)
h=g&&c?"\\b"+h+"\\b":ne(h),Ot.jumpList.cachedCursor=t.getCursor(),t.setCursor(m.start),i(h,!0,!1)}}},processEx:function(t,n,r){function i(e){Ot.exCommandHistoryController.pushInput(e),Ot.exCommandHistoryController.reset(),Kt.processCommand(t,e)}function o(n,r,i){var o,a,s=e.keyName(n);("Esc"==s||"Ctrl-C"==s||"Ctrl-["==s||"Backspace"==s&&""==r)&&(Ot.exCommandHistoryController.pushInput(r),Ot.exCommandHistoryController.reset(),e.e_stop(n),z(t),i(),t.focus()),"Up"==s||"Down"==s?(e.e_stop(n),o="Up"==s,a=n.target?n.target.selectionEnd:0,r=Ot.exCommandHistoryController.nextMatch(r,o)||"",i(r),a&&n.target&&(n.target.selectionEnd=n.target.selectionStart=Math.min(a,n.target.value.length))):"Ctrl-U"==s?(e.e_stop(n),i("")):"Left"!=s&&"Right"!=s&&"Ctrl"!=s&&"Alt"!=s&&"Shift"!=s&&Ot.exCommandHistoryController.reset()}"keyToEx"==r.type?Kt.processCommand(t,r.exArgs.input):n.visualMode?$e(t,{onClose:i,prefix:":",value:"'<,'>",onKeyDown:o,selectValueOnOpen:!1}):$e(t,{onClose:i,prefix:":",onKeyDown:o})},evalInput:function(e,t){var n,r,o,a=t.inputState,s=a.motion,l=a.motionArgs||{},c=a.operator,u=a.operatorArgs||{},d=a.registerName,f=t.sel,p=G(t.visualMode?B(e,f.head):e.getCursor("head")),h=G(t.visualMode?B(e,f.anchor):e.getCursor("anchor")),m=G(p),g=G(h)
if(c&&this.recordLastEdit(t,a),o=void 0!==a.repeatOverride?a.repeatOverride:a.getRepeat(),o>0&&l.explicitRepeat?l.repeatIsExplicit=!0:(l.noRepeat||!l.explicitRepeat&&0===o)&&(o=1,l.repeatIsExplicit=!1),a.selectedCharacter&&(l.selectedCharacter=u.selectedCharacter=a.selectedCharacter),l.repeat=o,z(e),s){var v=Ft[s](e,p,l,t)
if(t.lastMotion=Ft[s],!v)return
if(l.toJumplist){var y=Ot.jumpList,b=y.cachedCursor
b?(ye(e,b,v),delete y.cachedCursor):ye(e,p,v)}v instanceof Array?(r=v[0],n=v[1]):n=v,n||(n=G(p)),t.visualMode?(t.visualBlock&&n.ch===1/0||(n=B(e,n)),r&&(r=B(e,r)),r=r||g,f.anchor=r,f.head=n,ue(e),Se(e,t,"<",X(r,n)?r:n),Se(e,t,">",X(r,n)?n:r)):c||(n=B(e,n),e.setCursor(n.line,n.ch))}if(c){if(u.lastSel){r=g
var k=u.lastSel,x=Math.abs(k.head.line-k.anchor.line),w=Math.abs(k.head.ch-k.anchor.ch)
n=k.visualLine?i(g.line+x,g.ch):k.visualBlock?i(g.line+x,g.ch+w):k.head.line==k.anchor.line?i(g.line,g.ch+w):i(g.line+x,g.ch),t.visualMode=!0,t.visualLine=k.visualLine,t.visualBlock=k.visualBlock,f=t.sel={anchor:r,head:n},ue(e)}else t.visualMode&&(u.lastSel={anchor:G(f.anchor),head:G(f.head),visualBlock:t.visualBlock,visualLine:t.visualLine})
var _,C,S,M,L
if(t.visualMode){if(_=Q(f.head,f.anchor),C=Y(f.head,f.anchor),S=t.visualLine||u.linewise,M=t.visualBlock?"block":S?"line":"char",L=de(e,{anchor:_,head:C},M),S){var T=L.ranges
if("block"==M)for(var A=0;A<T.length;A++)T[A].head.ch=ee(e,T[A].head.line)
else"line"==M&&(T[0].head=i(T[0].head.line+1,0))}}else{if(_=G(r||g),C=G(n||m),X(C,_)){var E=_
_=C,C=E}S=l.linewise||u.linewise,S?me(e,_,C):l.forward&&he(e,_,C),M="char"
var O=!l.inclusive||S
L=de(e,{anchor:_,head:C},M,O)}e.setSelections(L.ranges,L.primary),t.lastMotion=null,u.repeat=o,u.registerName=d,u.linewise=S
var N=It[c](e,u,L.ranges,g,n)
t.visualMode&&pe(e,null!=N),N&&e.setCursor(N)}},recordLastEdit:function(e,t,n){var r=Ot.macroModeState
r.isPlaying||(e.lastEditInputState=t,e.lastEditActionCommand=n,r.lastInsertModeChanges.changes=[],r.lastInsertModeChanges.expectCursorActivityForChange=!1,r.lastInsertModeChanges.visualBlock=e.visualBlock?e.sel.head.line-e.sel.anchor.line:0)}},Ft={moveToTopLine:function(e,t,n){var r=Ye(e).top+n.repeat-1
return i(r,ge(e.getLine(r)))},moveToMiddleLine:function(e){var t=Ye(e),n=Math.floor(.5*(t.top+t.bottom))
return i(n,ge(e.getLine(n)))},moveToBottomLine:function(e,t,n){var r=Ye(e).bottom-n.repeat+1
return i(r,ge(e.getLine(r)))},expandToLine:function(e,t,n){var r=t
return i(r.line+n.repeat-1,1/0)},findNext:function(e,t,n){var r=ze(e),i=r.getQuery()
if(i){var o=!n.forward
return o=r.isReversed()?!o:o,Ge(e,i),Ze(e,o,i,n.repeat)}},goToMark:function(e,t,n,r){var i=Je(e,r,n.selectedCharacter)
return i?n.linewise?{line:i.line,ch:ge(e.getLine(i.line))}:i:null},moveToOtherHighlightedEnd:function(e,t,n,r){if(r.visualBlock&&n.sameLine){var o=r.sel
return[B(e,i(o.anchor.line,o.head.ch)),B(e,i(o.head.line,o.anchor.ch))]}return[r.sel.head,r.sel.anchor]},jumpToMark:function(e,t,n,r){for(var o=t,a=0;a<n.repeat;a++){var s=o
for(var l in r.marks)if(y(l)){var c=r.marks[l].find(),u=n.forward?X(c,s):X(s,c)
if(!(u||n.linewise&&c.line==s.line)){var d=Z(s,o),f=n.forward?J(s,c,o):J(o,c,s);(d||f)&&(o=c)}}}return n.linewise&&(o=i(o.line,ge(e.getLine(o.line)))),o},moveByCharacters:function(e,t,n){var r=t,o=n.repeat,a=n.forward?r.ch+o:r.ch-o
return i(r.line,a)},moveByLines:function(e,t,n,r){var o=t,a=o.ch
switch(r.lastMotion){case this.moveByLines:case this.moveByDisplayLines:case this.moveByScroll:case this.moveToColumn:case this.moveToEol:a=r.lastHPos
break
default:r.lastHPos=a}var s=n.repeat+(n.repeatOffset||0),l=n.forward?o.line+s:o.line-s,c=e.firstLine(),u=e.lastLine(),d=e.findPosV(o,n.forward?s:-s,"line",r.lastHSPos),f=n.forward?d.line>l:d.line<l
return f&&(l=d.line,a=d.ch),l<c&&o.line==c?this.moveToStartOfLine(e,t,n,r):l>u&&o.line==u?this.moveToEol(e,t,n,r,!0):(n.toFirstChar&&(a=ge(e.getLine(l)),r.lastHPos=a),r.lastHSPos=e.charCoords(i(l,a),"div").left,i(l,a))},moveByDisplayLines:function(e,t,n,r){var o=t
switch(r.lastMotion){case this.moveByDisplayLines:case this.moveByScroll:case this.moveByLines:case this.moveToColumn:case this.moveToEol:break
default:r.lastHSPos=e.charCoords(o,"div").left}var a=n.repeat,s=e.findPosV(o,n.forward?a:-a,"line",r.lastHSPos)
if(s.hitSide)if(n.forward)var l=e.charCoords(s,"div"),c={top:l.top+8,left:r.lastHSPos},s=e.coordsChar(c,"div")
else{var u=e.charCoords(i(e.firstLine(),0),"div")
u.left=r.lastHSPos,s=e.coordsChar(u,"div")}return r.lastHPos=s.ch,s},moveByPage:function(e,t,n){var r=t,i=n.repeat
return e.findPosV(r,n.forward?i:-i,"page")},moveByParagraph:function(e,t,n){var r=n.forward?1:-1
return Le(e,t,n.repeat,r)},moveBySentence:function(e,t,n){var r=n.forward?1:-1
return Te(e,t,n.repeat,r)},moveByScroll:function(e,t,n,r){var i=e.getScrollInfo(),o=null,a=n.repeat
a||(a=i.clientHeight/(2*e.defaultTextHeight()))
var s=e.charCoords(t,"local")
n.repeat=a
var o=Ft.moveByDisplayLines(e,t,n,r)
if(!o)return null
var l=e.charCoords(o,"local")
return e.scrollTo(null,i.top+l.top-s.top),o},moveByWords:function(e,t,n){return we(e,t,n.repeat,!!n.forward,!!n.wordEnd,!!n.bigWord)},moveTillCharacter:function(e,t,n){var r=n.repeat,i=_e(e,r,n.forward,n.selectedCharacter),o=n.forward?-1:1
return be(o,n),i?(i.ch+=o,i):null},moveToCharacter:function(e,t,n){var r=n.repeat
return be(0,n),_e(e,r,n.forward,n.selectedCharacter)||t},moveToSymbol:function(e,t,n){var r=n.repeat
return ke(e,r,n.forward,n.selectedCharacter)||t},moveToColumn:function(e,t,n,r){var i=n.repeat
return r.lastHPos=i-1,r.lastHSPos=e.charCoords(t,"div").left,Ce(e,i)},moveToEol:function(e,t,n,r,o){var a=t,s=i(a.line+n.repeat-1,1/0),l=e.clipPos(s)
return l.ch--,o||(r.lastHPos=1/0,r.lastHSPos=e.charCoords(l,"div").left),s},moveToFirstNonWhiteSpaceCharacter:function(e,t){var n=t
return i(n.line,ge(e.getLine(n.line)))},moveToMatchedSymbol:function(e,t){for(var n,r=t,o=r.line,a=r.ch,s=e.getLine(o);a<s.length;a++)if(n=s.charAt(a),n&&b(n)){var l=e.getTokenTypeAt(i(o,a+1))
if("string"!==l&&"comment"!==l)break}if(a<s.length){var c="<"===a||">"===a?/[(){}[\]<>]/:/[(){}[\]]/,u=e.findMatchingBracket(i(o,a),{bracketRegex:c})
return u.to}return r},moveToStartOfLine:function(e,t){return i(t.line,0)},moveToLineOrEdgeOfDocument:function(e,t,n){var r=n.forward?e.lastLine():e.firstLine()
return n.repeatIsExplicit&&(r=n.repeat-e.getOption("firstLineNumber")),i(r,ge(e.getLine(r)))},textObjectManipulation:function(e,t,n,r){var i={"(":")",")":"(","{":"}","}":"{","[":"]","]":"[","<":">",">":"<"},o={"'":!0,'"':!0,"`":!0},a=n.selectedCharacter
"b"==a?a="(":"B"==a&&(a="{")
var s,l=!n.textObjectInner
if(i[a])s=Ae(e,t,a,l)
else if(o[a])s=Ee(e,t,a,l)
else if("W"===a)s=ve(e,l,!0,!0)
else if("w"===a)s=ve(e,l,!0,!1)
else{if("p"!==a)return null
if(s=Le(e,t,n.repeat,0,l),n.linewise=!0,r.visualMode)r.visualLine||(r.visualLine=!0)
else{var c=r.inputState.operatorArgs
c&&(c.linewise=!0),s.end.line--}}return e.state.vim.visualMode?ce(e,s.start,s.end):[s.start,s.end]},repeatLastCharacterSearch:function(e,t,n){var r=Ot.lastCharacterSearch,i=n.repeat,o=n.forward===r.forward,a=(r.increment?1:0)*(o?-1:1)
e.moveH(-a,"char"),n.inclusive=!!o
var s=_e(e,i,o,r.selectedCharacter)
return s?(s.ch+=a,s):(e.moveH(a,"char"),t)}},It={change:function(t,n,r){var o,a,s=t.state.vim,l=r[0].anchor,c=r[0].head
if(s.visualMode)if(n.fullLine)c.ch=Number.MAX_VALUE,c.line--,t.setSelection(l,c),a=t.getSelection(),t.replaceSelection(""),o=l
else{a=t.getSelection()
var u=P("",r.length)
t.replaceSelections(u),o=Q(r[0].head,r[0].anchor)}else{a=t.getRange(l,c)
var d=s.lastEditInputState||{}
if("moveByWords"==d.motion&&!w(a)){var f=/\s+$/.exec(a)
f&&d.motionArgs&&d.motionArgs.forward&&(c=H(c,0,-f[0].length),a=a.slice(0,-f[0].length))}var p=new i(l.line-1,Number.MAX_VALUE),h=t.firstLine()==t.lastLine()
c.line>t.lastLine()&&n.linewise&&!h?t.replaceRange("",p,c):t.replaceRange("",l,c),n.linewise&&(h||(t.setCursor(p),e.commands.newlineAndIndent(t)),l.ch=Number.MAX_VALUE),o=l}Ot.registerController.pushText(n.registerName,"change",a,n.linewise,r.length>1),Dt.enterInsertMode(t,{head:o},t.state.vim)},"delete":function(e,t,n){var r,o,a=e.state.vim
if(a.visualBlock){o=e.getSelection()
var s=P("",n.length)
e.replaceSelections(s),r=n[0].anchor}else{var l=n[0].anchor,c=n[0].head
t.linewise&&c.line!=e.firstLine()&&l.line==e.lastLine()&&l.line==c.line-1&&(l.line==e.firstLine()?l.ch=0:l=i(l.line-1,ee(e,l.line-1))),o=e.getRange(l,c),e.replaceRange("",l,c),r=l,t.linewise&&(r=Ft.moveToFirstNonWhiteSpaceCharacter(e,l))}return Ot.registerController.pushText(t.registerName,"delete",o,t.linewise,a.visualBlock),B(e,r)},indent:function(e,t,n){var r=e.state.vim,i=n[0].anchor.line,o=r.visualBlock?n[n.length-1].anchor.line:n[0].head.line,a=r.visualMode?t.repeat:1
t.linewise&&o--
for(var s=i;s<=o;s++)for(var l=0;l<a;l++)e.indentLine(s,t.indentRight)
return Ft.moveToFirstNonWhiteSpaceCharacter(e,n[0].anchor)},indentAuto:function(e,t,n){return e.execCommand("indentAuto"),Ft.moveToFirstNonWhiteSpaceCharacter(e,n[0].anchor)},changeCase:function(e,t,n,r,i){for(var o=e.getSelections(),a=[],s=t.toLower,l=0;l<o.length;l++){var c=o[l],u=""
if(s===!0)u=c.toLowerCase()
else if(s===!1)u=c.toUpperCase()
else for(var d=0;d<c.length;d++){var f=c.charAt(d)
u+=x(f)?f.toLowerCase():f.toUpperCase()}a.push(u)}return e.replaceSelections(a),t.shouldMoveCursor?i:!e.state.vim.visualMode&&t.linewise&&n[0].anchor.line+1==n[0].head.line?Ft.moveToFirstNonWhiteSpaceCharacter(e,r):t.linewise?r:Q(n[0].anchor,n[0].head)},yank:function(e,t,n,r){var i=e.state.vim,o=e.getSelection(),a=i.visualMode?Q(i.sel.anchor,i.sel.head,n[0].head,n[0].anchor):r
return Ot.registerController.pushText(t.registerName,"yank",o,t.linewise,i.visualBlock),a}},Dt={jumpListWalk:function(e,t,n){if(!n.visualMode){var r=t.repeat,i=t.forward,o=Ot.jumpList,a=o.move(e,i?r:-r),s=a?a.find():void 0
s=s?s:e.getCursor(),e.setCursor(s)}},scroll:function(e,t,n){if(!n.visualMode){var r=t.repeat||1,i=e.defaultTextHeight(),o=e.getScrollInfo().top,a=i*r,s=t.forward?o+a:o-a,l=G(e.getCursor()),c=e.charCoords(l,"local")
if(t.forward)s>c.top?(l.line+=(s-c.top)/i,l.line=Math.ceil(l.line),e.setCursor(l),c=e.charCoords(l,"local"),e.scrollTo(null,c.top)):e.scrollTo(null,s)
else{var u=s+e.getScrollInfo().clientHeight
u<c.bottom?(l.line-=(c.bottom-u)/i,l.line=Math.floor(l.line),e.setCursor(l),c=e.charCoords(l,"local"),e.scrollTo(null,c.bottom-e.getScrollInfo().clientHeight)):e.scrollTo(null,s)}}},scrollToCursor:function(e,t){var n=e.getCursor().line,r=e.charCoords(i(n,0),"local"),o=e.getScrollInfo().clientHeight,a=r.top,s=r.bottom-a
switch(t.position){case"center":a=a-o/2+s
break
case"bottom":a=a-o+s}e.scrollTo(null,a)},replayMacro:function(e,t,n){var r=t.selectedCharacter,i=t.repeat,o=Ot.macroModeState
for("@"==r?r=o.latestRegister:o.latestRegister=r;i--;)ot(e,n,o,r)},enterMacroRecordMode:function(e,t){var n=Ot.macroModeState,r=t.selectedCharacter
Ot.registerController.isValidRegister(r)&&n.enterMacroRecordMode(e,r)},toggleOverwrite:function(t){t.state.overwrite?(t.toggleOverwrite(!1),t.setOption("keyMap","vim-insert"),e.signal(t,"vim-mode-change",{mode:"insert"})):(t.toggleOverwrite(!0),t.setOption("keyMap","vim-replace"),e.signal(t,"vim-mode-change",{mode:"replace"}))},enterInsertMode:function(t,n,r){if(!t.getOption("readOnly")){r.insertMode=!0,r.insertModeRepeat=n&&n.repeat||1
var o=n?n.insertAt:null,a=r.sel,s=n.head||t.getCursor("head"),l=t.listSelections().length
if("eol"==o)s=i(s.line,ee(t,s.line))
else if("bol"==o)s=i(s.line,0)
else if("charAfter"==o)s=H(s,0,1)
else if("firstNonBlank"==o)s=Ft.moveToFirstNonWhiteSpaceCharacter(t,s)
else if("startOfSelectedArea"==o){if(!r.visualMode)return
r.visualBlock?(s=i(Math.min(a.head.line,a.anchor.line),Math.min(a.head.ch,a.anchor.ch)),l=Math.abs(a.head.line-a.anchor.line)+1):s=a.head.line<a.anchor.line?a.head:i(a.anchor.line,0)}else if("endOfSelectedArea"==o){if(!r.visualMode)return
r.visualBlock?(s=i(Math.min(a.head.line,a.anchor.line),Math.max(a.head.ch+1,a.anchor.ch)),l=Math.abs(a.head.line-a.anchor.line)+1):s=a.head.line>=a.anchor.line?H(a.head,0,1):i(a.anchor.line,0)}else if("inplace"==o){if(r.visualMode)return}else"lastEdit"==o&&(s=et(t)||s)
t.setOption("disableInput",!1),n&&n.replace?(t.toggleOverwrite(!0),t.setOption("keyMap","vim-replace"),e.signal(t,"vim-mode-change",{mode:"replace"})):(t.toggleOverwrite(!1),t.setOption("keyMap","vim-insert"),e.signal(t,"vim-mode-change",{mode:"insert"})),Ot.macroModeState.isPlaying||(t.on("change",ct),e.on(t.getInputField(),"keydown",mt)),r.visualMode&&pe(t),oe(t,s,l)}},toggleVisualMode:function(t,n,r){var o,a=n.repeat,s=t.getCursor()
r.visualMode?r.visualLine^n.linewise||r.visualBlock^n.blockwise?(r.visualLine=!!n.linewise,r.visualBlock=!!n.blockwise,e.signal(t,"vim-mode-change",{mode:"visual",subMode:r.visualLine?"linewise":r.visualBlock?"blockwise":""}),ue(t)):pe(t):(r.visualMode=!0,r.visualLine=!!n.linewise,r.visualBlock=!!n.blockwise,o=B(t,i(s.line,s.ch+a-1)),r.sel={anchor:s,head:o},e.signal(t,"vim-mode-change",{mode:"visual",subMode:r.visualLine?"linewise":r.visualBlock?"blockwise":""}),ue(t),Se(t,r,"<",Q(s,o)),Se(t,r,">",Y(s,o)))},reselectLastSelection:function(t,n,r){var i=r.lastSelection
if(r.visualMode&&le(t,r),i){var o=i.anchorMark.find(),a=i.headMark.find()
if(!o||!a)return
r.sel={anchor:o,head:a},r.visualMode=!0,r.visualLine=i.visualLine,r.visualBlock=i.visualBlock,ue(t),Se(t,r,"<",Q(o,a)),Se(t,r,">",Y(o,a)),e.signal(t,"vim-mode-change",{mode:"visual",subMode:r.visualLine?"linewise":r.visualBlock?"blockwise":""})}},joinLines:function(e,t,n){var r,o
if(n.visualMode){if(r=e.getCursor("anchor"),o=e.getCursor("head"),X(o,r)){var a=o
o=r,r=a}o.ch=ee(e,o.line)-1}else{var s=Math.max(t.repeat,2)
r=e.getCursor(),o=B(e,i(r.line+s-1,1/0))}for(var l=0,c=r.line;c<o.line;c++){l=ee(e,r.line)
var a=i(r.line+1,ee(e,r.line+1)),u=e.getRange(r,a)
u=t.keepSpaces?u.replace(/\n\r?/g,""):u.replace(/\n\s*/g," "),e.replaceRange(u,r,a)}var d=i(r.line,l)
n.visualMode&&pe(e,!1),e.setCursor(d)},newLineAndEnterInsertMode:function(t,n,r){r.insertMode=!0
var o=G(t.getCursor())
if(o.line!==t.firstLine()||n.after){o.line=n.after?o.line:o.line-1,o.ch=ee(t,o.line),t.setCursor(o)
var a=e.commands.newlineAndIndentContinueComment||e.commands.newlineAndIndent
a(t)}else t.replaceRange("\n",i(t.firstLine(),0)),t.setCursor(t.firstLine(),0)
this.enterInsertMode(t,{repeat:n.repeat},r)},paste:function(e,t,n){var r=G(e.getCursor()),o=Ot.registerController.getRegister(t.registerName),a=o.toString()
if(a){if(t.matchIndent){var s=e.getOption("tabSize"),l=function(e){var t=e.split("\t").length-1,n=e.split(" ").length-1
return t*s+1*n},c=e.getLine(e.getCursor().line),u=l(c.match(/^\s*/)[0]),d=a.replace(/\n$/,""),f=a!==d,p=l(a.match(/^\s*/)[0]),a=d.replace(/^\s*/gm,function(t){var n=u+(l(t)-p)
if(n<0)return""
if(e.getOption("indentWithTabs")){var r=Math.floor(n/s)
return Array(r+1).join("\t")}return Array(n+1).join(" ")})
a+=f?"\n":""}if(t.repeat>1)var a=Array(t.repeat+1).join(a)
var h=o.linewise,m=o.blockwise
if(m){a=a.split("\n"),h&&a.pop()
for(var g=0;g<a.length;g++)a[g]=""==a[g]?" ":a[g]
r.ch+=t.after?1:0,r.ch=Math.min(ee(e,r.line),r.ch)}else h?n.visualMode?a=n.visualLine?a.slice(0,-1):"\n"+a.slice(0,a.length-1)+"\n":t.after?(a="\n"+a.slice(0,a.length-1),r.ch=ee(e,r.line)):r.ch=0:r.ch+=t.after?1:0
var v,y
if(n.visualMode){n.lastPastedText=a
var b,k=se(e,n),x=k[0],w=k[1],_=e.getSelection(),C=e.listSelections(),S=new Array(C.length).join("1").split("1")
n.lastSelection&&(b=n.lastSelection.headMark.find()),Ot.registerController.unnamedRegister.setText(_),m?(e.replaceSelections(S),w=i(x.line+a.length-1,x.ch),e.setCursor(x),ie(e,w),e.replaceSelections(a),v=x):n.visualBlock?(e.replaceSelections(S),e.setCursor(x),e.replaceRange(a,x,x),v=x):(e.replaceRange(a,x,w),v=e.posFromIndex(e.indexFromPos(x)+a.length-1)),b&&(n.lastSelection.headMark=e.setBookmark(b)),h&&(v.ch=0)}else if(m){e.setCursor(r)
for(var g=0;g<a.length;g++){var M=r.line+g
M>e.lastLine()&&e.replaceRange("\n",i(M,0))
var L=ee(e,M)
L<r.ch&&re(e,M,r.ch)}e.setCursor(r),ie(e,i(r.line+a.length-1,r.ch)),e.replaceSelections(a),v=r}else e.replaceRange(a,r),h&&t.after?v=i(r.line+1,ge(e.getLine(r.line+1))):h&&!t.after?v=i(r.line,ge(e.getLine(r.line))):!h&&t.after?(y=e.indexFromPos(r),v=e.posFromIndex(y+a.length-1)):(y=e.indexFromPos(r),v=e.posFromIndex(y+a.length))
n.visualMode&&pe(e,!1),e.setCursor(v)}},undo:function(t,n){t.operation(function(){V(t,e.commands.undo,n.repeat)(),t.setCursor(t.getCursor("anchor"))})},redo:function(t,n){V(t,e.commands.redo,n.repeat)()},setRegister:function(e,t,n){n.inputState.registerName=t.selectedCharacter},setMark:function(e,t,n){var r=t.selectedCharacter
Se(e,n,r,e.getCursor())},replace:function(t,n,r){var o,a,s=n.selectedCharacter,l=t.getCursor(),c=t.listSelections()
if(r.visualMode)l=t.getCursor("start"),a=t.getCursor("end")
else{var u=t.getLine(l.line)
o=l.ch+n.repeat,o>u.length&&(o=u.length),a=i(l.line,o)}if("\n"==s)r.visualMode||t.replaceRange("",l,a),(e.commands.newlineAndIndentContinueComment||e.commands.newlineAndIndent)(t)
else{var d=t.getRange(l,a)
if(d=d.replace(/[^\n]/g,s),r.visualBlock){var f=new Array(t.getOption("tabSize")+1).join(" ")
d=t.getSelection(),d=d.replace(/\t/g,f).replace(/[^\n]/g,s).split("\n"),t.replaceSelections(d)}else t.replaceRange(d,l,a)
r.visualMode?(l=X(c[0].anchor,c[0].head)?c[0].anchor:c[0].head,t.setCursor(l),pe(t,!1)):t.setCursor(H(a,0,-1))}},incrementNumberToken:function(e,t){for(var n,r,o,a,s=e.getCursor(),l=e.getLine(s.line),c=/(-?)(?:(0x)([\da-f]+)|(0b|0|)(\d+))/gi;null!==(n=c.exec(l))&&(r=n.index,o=r+n[0].length,!(s.ch<o)););if((t.backtrack||!(o<=s.ch))&&n){var u=n[2]||n[4],d=n[3]||n[5],f=t.increase?1:-1,p={"0b":2,0:8,"":10,"0x":16}[u.toLowerCase()],h=parseInt(n[1]+d,p)+f*t.repeat
a=h.toString(p)
var m=u?new Array(d.length-a.length+1+n[1].length).join("0"):""
a="-"===a.charAt(0)?"-"+u+m+a.substr(1):u+m+a
var g=i(s.line,r),v=i(s.line,o)
e.replaceRange(a,g,v),e.setCursor(i(s.line,r+a.length-1))}},repeatLastEdit:function(e,t,n){var r=n.lastEditInputState
if(r){var i=t.repeat
i&&t.repeatIsExplicit?n.lastEditInputState.repeatOverride=i:i=n.lastEditInputState.repeatOverride||i,gt(e,n,i,!1)}},indent:function(e,t){e.indentLine(e.getCursor().line,t.indentRight)},exitInsertMode:nt},Pt={"(":"bracket",")":"bracket","{":"bracket","}":"bracket","[":"section","]":"section","*":"comment","/":"comment",m:"method",M:"method","#":"preprocess"},Rt={bracket:{isComplete:function(e){if(e.nextCh===e.symb){if(e.depth++,e.depth>=1)return!0}else e.nextCh===e.reverseSymb&&e.depth--
return!1}},section:{init:function(e){e.curMoveThrough=!0,e.symb=(e.forward?"]":"[")===e.symb?"{":"}"},isComplete:function(e){return 0===e.index&&e.nextCh===e.symb}},comment:{isComplete:function(e){var t="*"===e.lastCh&&"/"===e.nextCh
return e.lastCh=e.nextCh,t}},method:{init:function(e){e.symb="m"===e.symb?"{":"}",e.reverseSymb="{"===e.symb?"}":"{"},isComplete:function(e){return e.nextCh===e.symb}},preprocess:{init:function(e){e.index=0},isComplete:function(e){if("#"===e.nextCh){var t=e.lineText.match(/#(\w+)/)[1]
if("endif"===t){if(e.forward&&0===e.depth)return!0
e.depth++}else if("if"===t){if(!e.forward&&0===e.depth)return!0
e.depth--}if("else"===t&&0===e.depth)return!0}return!1}}}
S("pcre",!0,"boolean"),Oe.prototype={getQuery:function(){return Ot.query},setQuery:function(e){Ot.query=e},getOverlay:function(){return this.searchOverlay},setOverlay:function(e){this.searchOverlay=e},isReversed:function(){return Ot.isReversed},setReversed:function(e){Ot.isReversed=e},getScrollbarAnnotate:function(){return this.annotate},setScrollbarAnnotate:function(e){this.annotate=e}}
var jt={"\\n":"\n","\\r":"\r","\\t":"\t"},Bt={"\\/":"/","\\\\":"\\","\\n":"\n","\\r":"\r","\\t":"\t","\\&":"&"},Wt="(Javascript regexp)",Ht=0,$t=function(){this.buildCommandMap_()}
$t.prototype={processCommand:function(e,t,n){var r=this
e.operation(function(){e.curOp.isVimOp=!0,r._processCommand(e,t,n)})},_processCommand:function(t,n,r){var i=t.state.vim,o=Ot.registerController.getRegister(":"),a=o.toString()
i.visualMode&&pe(t)
var s=new e.StringStream(n)
o.setText(n)
var l=r||{}
l.input=n
try{this.parseInput_(t,s,l)}catch(c){throw We(t,c),c}var u,d
if(l.commandName){if(u=this.matchCommand_(l.commandName)){if(d=u.name,u.excludeFromCommandHistory&&o.setText(a),this.parseCommandArgs_(s,l,u),"exToKey"==u.type){for(var f=0;f<u.toKeys.length;f++)e.Vim.handleKey(t,u.toKeys[f],"mapping")
return}if("exToEx"==u.type)return void this.processCommand(t,u.toInput)}}else void 0!==l.line&&(d="move")
if(!d)return void We(t,'Not an editor command ":'+n+'"')
try{Ut[d](t,l),u&&u.possiblyAsync||!l.callback||l.callback()}catch(c){throw We(t,c),c}},parseInput_:function(e,t,n){t.eatWhile(":"),t.eat("%")?(n.line=e.firstLine(),n.lineEnd=e.lastLine()):(n.line=this.parseLineSpec_(e,t),void 0!==n.line&&t.eat(",")&&(n.lineEnd=this.parseLineSpec_(e,t)))
var r=t.match(/^(\w+|!!|@@|[!#&*<=>@~])/)
return r?n.commandName=r[1]:n.commandName=t.match(/.*/)[0],n},parseLineSpec_:function(e,t){var n=t.match(/^(\d+)/)
if(n)return parseInt(n[1],10)-1
switch(t.next()){case".":return this.parseLineSpecOffset_(t,e.getCursor().line)
case"$":return this.parseLineSpecOffset_(t,e.lastLine())
case"'":var r=t.next(),i=Je(e,e.state.vim,r)
if(!i)throw new Error("Mark not set")
return this.parseLineSpecOffset_(t,i.line)
case"-":case"+":return t.backUp(1),this.parseLineSpecOffset_(t,e.getCursor().line)
default:return void t.backUp(1)}},parseLineSpecOffset_:function(e,t){var n=e.match(/^([+-])?(\d+)/)
if(n){var r=parseInt(n[2],10)
"-"==n[1]?t-=r:t+=r}return t},parseCommandArgs_:function(e,t,n){if(!e.eol()){t.argString=e.match(/.*/)[0]
var r=n.argDelimiter||/\s+/,i=te(t.argString).split(r)
i.length&&i[0]&&(t.args=i)}},matchCommand_:function(e){for(var t=e.length;t>0;t--){var n=e.substring(0,t)
if(this.commandMap_[n]){var r=this.commandMap_[n]
if(0===r.name.indexOf(e))return r}}return null},buildCommandMap_:function(){this.commandMap_={}
for(var e=0;e<r.length;e++){var t=r[e],n=t.shortName||t.name
this.commandMap_[n]=t}},map:function(e,n,r){if(":"!=e&&":"==e.charAt(0)){if(r)throw Error("Mode not supported for ex mappings")
var i=e.substring(1)
":"!=n&&":"==n.charAt(0)?this.commandMap_[i]={name:i,type:"exToEx",toInput:n.substring(1),user:!0}:this.commandMap_[i]={name:i,type:"exToKey",toKeys:n,user:!0}}else if(":"!=n&&":"==n.charAt(0)){var o={keys:e,type:"keyToEx",exArgs:{input:n.substring(1)}}
r&&(o.context=r),t.unshift(o)}else{var o={keys:e,type:"keyToKey",toKeys:n}
r&&(o.context=r),t.unshift(o)}},unmap:function(e,n){if(":"!=e&&":"==e.charAt(0)){if(n)throw Error("Mode not supported for ex mappings")
var r=e.substring(1)
if(this.commandMap_[r]&&this.commandMap_[r].user)return void delete this.commandMap_[r]}else for(var i=e,o=0;o<t.length;o++)if(i==t[o].keys&&t[o].context===n)return void t.splice(o,1)
throw Error("No such mapping.")}}
var Ut={colorscheme:function(e,t){return!t.args||t.args.length<1?void We(e,e.getOption("theme")):void e.setOption("theme",t.args[0])},map:function(e,t,n){var r=t.args
return!r||r.length<2?void(e&&We(e,"Invalid mapping: "+t.input)):void Kt.map(r[0],r[1],n)},imap:function(e,t){this.map(e,t,"insert")},nmap:function(e,t){this.map(e,t,"normal")},vmap:function(e,t){this.map(e,t,"visual")},unmap:function(e,t,n){var r=t.args
return!r||r.length<1?void(e&&We(e,"No such mapping: "+t.input)):void Kt.unmap(r[0],n)},move:function(e,t){qt.processCommand(e,e.state.vim,{type:"motion",motion:"moveToLineOrEdgeOfDocument",motionArgs:{forward:!1,explicitRepeat:!0,linewise:!0},repeatOverride:t.line+1})},set:function(e,t){var n=t.args,r=t.setCfg||{}
if(!n||n.length<1)return void(e&&We(e,"Invalid mapping: "+t.input))
var i=n[0].split("="),o=i[0],a=i[1],s=!1
if("?"==o.charAt(o.length-1)){if(a)throw Error("Trailing characters: "+t.argString)
o=o.substring(0,o.length-1),s=!0}void 0===a&&"no"==o.substring(0,2)&&(o=o.substring(2),a=!1)
var l=Tt[o]&&"boolean"==Tt[o].type
if(l&&void 0==a&&(a=!0),!l&&void 0===a||s){var c=L(o,e,r)
c instanceof Error?We(e,c.message):c===!0||c===!1?We(e," "+(c?"":"no")+o):We(e,"  "+o+"="+c)}else{var u=M(o,a,e,r)
u instanceof Error&&We(e,u.message)}},setlocal:function(e,t){t.setCfg={scope:"local"},this.set(e,t)},setglobal:function(e,t){t.setCfg={scope:"global"},this.set(e,t)},registers:function(e,t){var n=t.args,r=Ot.registerController.registers,i="----------Registers----------<br><br>"
if(n){var o
n=n.join("")
for(var a=0;a<n.length;a++)if(o=n.charAt(a),Ot.registerController.isValidRegister(o)){var s=r[o]||new N
i+='"'+o+"    "+s.toString()+"<br>"}}else for(var o in r){var l=r[o].toString()
l.length&&(i+='"'+o+"    "+l+"<br>")}We(e,i)},sort:function(t,n){function r(){if(n.argString){var t=new e.StringStream(n.argString)
if(t.eat("!")&&(s=!0),t.eol())return
if(!t.eatSpace())return"Invalid arguments"
var r=t.match(/([dinuox]+)?\s*(\/.+\/)?\s*/)
if(!r&&!t.eol())return"Invalid arguments"
if(r[1]){l=r[1].indexOf("i")!=-1,c=r[1].indexOf("u")!=-1
var i=r[1].indexOf("d")!=-1||r[1].indexOf("n")!=-1&&1,o=r[1].indexOf("x")!=-1&&1,a=r[1].indexOf("o")!=-1&&1
if(i+o+a>1)return"Invalid arguments"
u=i&&"decimal"||o&&"hex"||a&&"octal"}r[2]&&(d=new RegExp(r[2].substr(1,r[2].length-2),l?"i":""))}}function o(e,t){if(s){var n
n=e,e=t,t=n}l&&(e=e.toLowerCase(),t=t.toLowerCase())
var r=u&&y.exec(e),i=u&&y.exec(t)
return r?(r=parseInt((r[1]+r[2]).toLowerCase(),b),i=parseInt((i[1]+i[2]).toLowerCase(),b),r-i):e<t?-1:1}function a(e,t){if(s){var n
n=e,e=t,t=n}return l&&(e[0]=e[0].toLowerCase(),t[0]=t[0].toLowerCase()),e[0]<t[0]?-1:1}var s,l,c,u,d,f=r()
if(f)return void We(t,f+": "+n.argString)
var p=n.line||t.firstLine(),h=n.lineEnd||n.line||t.lastLine()
if(p!=h){var m=i(p,0),g=i(h,ee(t,h)),v=t.getRange(m,g).split("\n"),y=d?d:"decimal"==u?/(-?)([\d]+)/:"hex"==u?/(-?)(?:0x)?([0-9a-f]+)/i:"octal"==u?/([0-7]+)/:null,b="decimal"==u?10:"hex"==u?16:"octal"==u?8:null,k=[],x=[]
if(u||d)for(var w=0;w<v.length;w++){var _=d?v[w].match(d):null
_&&""!=_[0]?k.push(_):!d&&y.exec(v[w])?k.push(v[w]):x.push(v[w])}else x=v
if(k.sort(d?a:o),d)for(var w=0;w<k.length;w++)k[w]=k[w].input
else u||x.sort(o)
if(v=s?k.concat(x):x.concat(k),c){var C,S=v
v=[]
for(var w=0;w<S.length;w++)S[w]!=C&&v.push(S[w]),C=S[w]}t.replaceRange(v.join("\n"),m,g)}},global:function(e,t){var n=t.argString
if(!n)return void We(e,"Regular Expression missing from global")
var r,i=void 0!==t.line?t.line:e.firstLine(),o=t.lineEnd||t.line||e.lastLine(),a=qe(n),s=n
if(a.length&&(s=a[0],r=a.slice(1,a.length).join("/")),s)try{Ke(e,s,!0,!0)}catch(l){return void We(e,"Invalid regex: "+s)}for(var c=ze(e).getQuery(),u=[],d="",f=i;f<=o;f++){var p=c.test(e.getLine(f))
p&&(u.push(f+1),d+=e.getLine(f)+"<br>")}if(!r)return void We(e,d)
var h=0,m=function(){if(h<u.length){var t=u[h]+r
Kt.processCommand(e,t,{callback:m})}h++}
m()},substitute:function(e,t){if(!e.getSearchCursor)throw new Error("Search feature not available. Requires searchcursor.js or any other getSearchCursor implementation.")
var n,r,o,a,s=t.argString,l=s?Ie(s,s[0]):[],c="",u=!1,d=!1
if(l.length)n=l[0],L("pcre")&&""!==n&&(n=new RegExp(n).source),c=l[1],n&&"$"===n[n.length-1]&&(n=n.slice(0,n.length-1)+"\\n",c=c?c+"\n":"\n"),void 0!==c&&(c=L("pcre")?je(c.replace(/([^\\])&/g,"$1$$&")):Re(c),Ot.lastSubstituteReplacePart=c),r=l[2]?l[2].split(" "):[]
else if(s&&s.length)return void We(e,"Substitutions should be of the form :s/pattern/replace/")
if(r&&(o=r[0],a=parseInt(r[1]),o&&(o.indexOf("c")!=-1&&(u=!0,o.replace("c","")),o.indexOf("g")!=-1&&(d=!0,o.replace("g","")),n=L("pcre")?n+"/"+o:n.replace(/\//g,"\\/")+"/"+o)),n)try{Ke(e,n,!0,!0)}catch(f){return void We(e,"Invalid regex: "+n)}if(c=c||Ot.lastSubstituteReplacePart,void 0===c)return void We(e,"No previous substitute regular expression")
var p=ze(e),h=p.getQuery(),m=void 0!==t.line?t.line:e.getCursor().line,g=t.lineEnd||m
m==e.firstLine()&&g==e.lastLine()&&(g=1/0),a&&(m=g,g=m+a-1)
var v=B(e,i(m,0)),y=e.getSearchCursor(h,v)
tt(e,u,d,m,g,y,h,c,t.callback)},redo:e.commands.redo,undo:e.commands.undo,write:function(t){e.commands.save?e.commands.save(t):t.save&&t.save()},nohlsearch:function(e){Xe(e)},yank:function(e){var t=G(e.getCursor()),n=t.line,r=e.getLine(n)
Ot.registerController.pushText("0","yank",r,!0,!0)},delmarks:function(t,n){if(!n.argString||!te(n.argString))return void We(t,"Argument required")
for(var r=t.state.vim,i=new e.StringStream(te(n.argString));!i.eol();){i.eatSpace()
var o=i.pos
if(!i.match(/[a-zA-Z]/,!1))return void We(t,"Invalid argument: "+n.argString.substring(o))
var a=i.next()
if(i.match("-",!0)){if(!i.match(/[a-zA-Z]/,!1))return void We(t,"Invalid argument: "+n.argString.substring(o))
var s=a,l=i.next()
if(!(y(s)&&y(l)||x(s)&&x(l)))return void We(t,"Invalid argument: "+s+"-")
var c=s.charCodeAt(0),u=l.charCodeAt(0)
if(c>=u)return void We(t,"Invalid argument: "+n.argString.substring(o))
for(var d=0;d<=u-c;d++){var f=String.fromCharCode(c+d)
delete r.marks[f]}}else delete r.marks[a]}}},Kt=new $t
return e.keyMap.vim={attach:l,detach:s,call:p},S("insertModeEscKeysTimeout",200,"number"),e.keyMap["vim-insert"]={fallthrough:["default"],attach:l,detach:s,call:p},e.keyMap["vim-replace"]={Backspace:"goCharLeft",fallthrough:["vim-insert"],attach:l,detach:s,call:p},E(),Nt}
e.Vim=o()}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,n,r,i,o){this.indented=e,this.column=t,this.type=n,this.info=r,this.align=i,this.prev=o}function n(e,n,r,i){var o=e.indented
return e.context&&"statement"==e.context.type&&"statement"!=r&&(o=e.context.indented),e.context=new t(o,n,r,i,null,e.context)}function r(e){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}function i(e,t,n){return"variable"==t.prevToken||"type"==t.prevToken||(!!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0,n))||(!(!t.typeAtEndOfLine||e.column()!=e.indentation())||void 0))}function o(e){for(;;){if(!e||"top"==e.type)return!0
if("}"==e.type&&"namespace"!=e.prev.info)return!1
e=e.prev}}function a(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}function s(e,t){return"function"==typeof e?e(t):e.propertyIsEnumerable(t)}function l(e){return s(L,e)||/.+_t$/.test(e)}function c(e){return l(e)||s(T,e)}function u(e,t){if(!t.startOfLine)return!1
for(var n,r=null;n=e.peek();){if("\\"==n&&e.match(/^.$/)){r=u
break}if("/"==n&&e.match(/^\/[\/\*]/,!1))break
e.next()}return t.tokenize=r,"meta"}function d(e,t){return"type"==t.prevToken&&"type"}function f(e){return!(!e||e.length<2)&&("_"==e[0]&&("_"==e[1]||e[1]!==e[1].toLowerCase()))}function p(e){return e.eatWhile(/[\w\.']/),"number"}function h(e,t){if(e.backUp(1),e.match(/(R|u8R|uR|UR|LR)/)){var n=e.match(/"([^\s\\()]{0,16})\(/)
return!!n&&(t.cpp11RawStringDelim=n[1],t.tokenize=v,v(e,t))}return e.match(/(u8|u|U|L)/)?!!e.match(/["']/,!1)&&"string":(e.next(),!1)}function m(e){var t=/(\w+)::~?(\w+)$/.exec(e)
return t&&t[1]==t[2]}function g(e,t){for(var n;null!=(n=e.next());)if('"'==n&&!e.eat('"')){t.tokenize=null
break}return"string"}function v(e,t){var n=t.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&"),r=e.match(new RegExp(".*?\\)"+n+'"'))
return r?t.tokenize=null:e.skipToEnd(),"string"}function y(t,n){function r(e){if(e)for(var t in e)e.hasOwnProperty(t)&&i.push(t)}"string"==typeof t&&(t=[t])
var i=[]
r(n.keywords),r(n.types),r(n.builtin),r(n.atoms),i.length&&(n.helperType=t[0],e.registerHelper("hintWords",t[0],i))
for(var o=0;o<t.length;++o)e.defineMIME(t[o],n)}function b(e,t){for(var n=!1;!e.eol();){if(!n&&e.match('"""')){t.tokenize=null
break}n="\\"==e.next()&&!n}return"string"}function k(e){return function(t,n){for(var r;r=t.next();){if("*"==r&&t.eat("/")){if(1==e){n.tokenize=null
break}return n.tokenize=k(e-1),n.tokenize(t,n)}if("/"==r&&t.eat("*"))return n.tokenize=k(e+1),n.tokenize(t,n)}return"comment"}}function x(e){return function(t,n){for(var r,i=!1,o=!1;!t.eol();){if(!e&&!i&&t.match('"')){o=!0
break}if(e&&t.match('"""')){o=!0
break}r=t.next(),!i&&"$"==r&&t.match("{")&&t.skipTo("}"),i=!i&&"\\"==r&&!e}return!o&&e||(n.tokenize=null),"string"}}function w(e){return function(t,n){for(var r,i=!1,o=!1;!t.eol();){if(!i&&t.match('"')&&("single"==e||t.match('""'))){o=!0
break}if(!i&&t.match("``")){O=w(e),o=!0
break}r=t.next(),i="single"==e&&!i&&"\\"==r}return o&&(n.tokenize=null),"string"}}e.defineMode("clike",function(a,l){function c(e,t){var n=e.next()
if(C[n]){var r=C[n](e,t)
if(r!==!1)return r}if('"'==n||"'"==n)return t.tokenize=u(n),t.tokenize(e,t)
if(A.test(n))return p=n,null
if(E.test(n)){if(e.backUp(1),e.match(O))return"number"
e.next()}if("/"==n){if(e.eat("*"))return t.tokenize=d,d(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"}if(z.test(n)){for(;!e.match(/^\/[\/*]/,!1)&&e.eat(z););return"operator"}if(e.eatWhile(N),T)for(;e.match(T);)e.eatWhile(N)
var i=e.current()
return s(y,i)?(s(x,i)&&(p="newstatement"),s(w,i)&&(h=!0),"keyword"):s(b,i)?"type":s(k,i)||q&&q(i)?(s(x,i)&&(p="newstatement"),"builtin"):s(_,i)?"atom":"variable"}function u(e){return function(t,n){for(var r,i=!1,o=!1;null!=(r=t.next());){if(r==e&&!i){o=!0
break}i=!i&&"\\"==r}return(o||!i&&!S)&&(n.tokenize=null),"string"}}function d(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=null
break}r="*"==n}return"comment"}function f(e,t){l.typeFirstDefinitions&&e.eol()&&o(t.context)&&(t.typeAtEndOfLine=i(e,t,e.pos))}var p,h,m=a.indentUnit,g=l.statementIndentUnit||m,v=l.dontAlignCalls,y=l.keywords||{},b=l.types||{},k=l.builtin||{},x=l.blockKeywords||{},w=l.defKeywords||{},_=l.atoms||{},C=l.hooks||{},S=l.multiLineStrings,M=l.indentStatements!==!1,L=l.indentSwitch!==!1,T=l.namespaceSeparator,A=l.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,E=l.numberStart||/[\d\.]/,O=l.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,z=l.isOperatorChar||/[+\-*&%=<>!?|\/]/,N=l.isIdentifierChar||/[\w\$_\xa1-\uffff]/,q=l.isReservedIdentifier||!1
return{startState:function(e){return{tokenize:null,context:new t((e||0)-m,0,"top",null,(!1)),indented:0,startOfLine:!0,prevToken:null}},token:function(e,t){var a=t.context
if(e.sol()&&(null==a.align&&(a.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return f(e,t),null
p=h=null
var s=(t.tokenize||c)(e,t)
if("comment"==s||"meta"==s)return s
if(null==a.align&&(a.align=!0),";"==p||":"==p||","==p&&e.match(/^\s*(?:\/\/.*)?$/,!1))for(;"statement"==t.context.type;)r(t)
else if("{"==p)n(t,e.column(),"}")
else if("["==p)n(t,e.column(),"]")
else if("("==p)n(t,e.column(),")")
else if("}"==p){for(;"statement"==a.type;)a=r(t)
for("}"==a.type&&(a=r(t));"statement"==a.type;)a=r(t)}else p==a.type?r(t):M&&(("}"==a.type||"top"==a.type)&&";"!=p||"statement"==a.type&&"newstatement"==p)&&n(t,e.column(),"statement",e.current())
if("variable"==s&&("def"==t.prevToken||l.typeFirstDefinitions&&i(e,t,e.start)&&o(t.context)&&e.match(/^\s*\(/,!1))&&(s="def"),C.token){var u=C.token(e,t,s)
void 0!==u&&(s=u)}return"def"==s&&l.styleDefs===!1&&(s="variable"),t.startOfLine=!1,t.prevToken=h?"def":s||p,f(e,t),s},indent:function(t,n){if(t.tokenize!=c&&null!=t.tokenize||t.typeAtEndOfLine)return e.Pass
var r=t.context,i=n&&n.charAt(0),o=i==r.type
if("statement"==r.type&&"}"==i&&(r=r.prev),l.dontIndentStatements)for(;"statement"==r.type&&l.dontIndentStatements.test(r.info);)r=r.prev
if(C.indent){var a=C.indent(t,r,n,m)
if("number"==typeof a)return a}var s=r.prev&&"switch"==r.prev.info
if(l.allmanIndentation&&/[{(]/.test(i)){for(;"top"!=r.type&&"}"!=r.type;)r=r.prev
return r.indented}return"statement"==r.type?r.indented+("{"==i?0:g):!r.align||v&&")"==r.type?")"!=r.type||o?r.indented+(o?0:m)+(o||!s||/^(?:case|default)\b/.test(n)?0:m):r.indented+g:r.column+(o?0:1)},electricInput:L?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}})
var _="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",C="alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",S="bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",M="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",L=a("int long char short double float unsigned signed void bool"),T=a("SEL instancetype id Class Protocol BOOL"),A="case do else for if switch while struct enum union",E="struct enum union"
y(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:a(_),types:l,blockKeywords:a(A),defKeywords:a(E),typeFirstDefinitions:!0,atoms:a("NULL true false"),isReservedIdentifier:f,hooks:{"#":u,"*":d},modeProps:{fold:["brace","include"]}}),y(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:a(_+" "+C),types:l,blockKeywords:a(A+" class try catch"),defKeywords:a(E+" class namespace"),typeFirstDefinitions:!0,atoms:a("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:f,hooks:{"#":u,"*":d,u:h,U:h,L:h,R:h,0:p,1:p,2:p,3:p,4:p,5:p,6:p,7:p,8:p,9:p,token:function(e,t,n){if("variable"==n&&"("==e.peek()&&(";"==t.prevToken||null==t.prevToken||"}"==t.prevToken)&&m(e.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),y("text/x-java",{name:"clike",keywords:a("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:a("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:a("catch class do else finally for if switch try while"),defKeywords:a("class interface enum @interface"),typeFirstDefinitions:!0,atoms:a("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(e){return!e.match("interface",!1)&&(e.eatWhile(/[\w\$_]/),"meta")}},modeProps:{fold:["brace","import"]}}),y("text/x-csharp",{name:"clike",keywords:a("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:a("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:a("catch class do else finally for foreach if struct switch try while"),defKeywords:a("class interface namespace struct var"),typeFirstDefinitions:!0,atoms:a("true false null"),hooks:{"@":function(e,t){return e.eat('"')?(t.tokenize=g,g(e,t)):(e.eatWhile(/[\w\$_]/),"meta")}}}),y("text/x-scala",{name:"clike",keywords:a("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:a("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:a("catch class enum do else finally for forSome if match switch try while"),defKeywords:a("class enum def object package trait type val var"),atoms:a("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},'"':function(e,t){return!!e.match('""')&&(t.tokenize=b,t.tokenize(e,t))},"'":function(e){return e.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},"=":function(e,n){var r=n.context
return!("}"!=r.type||!r.align||!e.eat(">"))&&(n.context=new t(r.indented,r.column,r.type,r.info,null,r.prev),"operator")},"/":function(e,t){return!!e.eat("*")&&(t.tokenize=k(1),t.tokenize(e,t))}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}}),y("text/x-kotlin",{name:"clike",keywords:a("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"),types:a("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),intendSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,blockKeywords:a("catch class do else finally for if where try while enum"),defKeywords:a("class val var object interface fun"),atoms:a("true false null this"),hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},"*":function(e,t){return"."==t.prevToken?"variable":"operator"},'"':function(e,t){return t.tokenize=x(e.match('""')),t.tokenize(e,t)},"/":function(e,t){return!!e.eat("*")&&(t.tokenize=k(1),t.tokenize(e,t))},indent:function(e,t,n,r){var i=n&&n.charAt(0)
return"}"!=e.prevToken&&")"!=e.prevToken||""!=n?"operator"==e.prevToken&&"}"!=n&&"}"!=e.context.type||"variable"==e.prevToken&&"."==i||("}"==e.prevToken||")"==e.prevToken)&&"."==i?2*r+t.indented:t.align&&"}"==t.type?t.indented+(e.context.type==(n||"").charAt(0)?0:r):void 0:e.indented}},modeProps:{closeBrackets:{triples:'"'}}}),y(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:a("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:a("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:a("for while do if else struct"),builtin:a("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:a("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":u},modeProps:{fold:["brace","include"]}}),y("text/x-nesc",{name:"clike",keywords:a(_+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:l,blockKeywords:a(A),atoms:a("null true false"),hooks:{"#":u},modeProps:{fold:["brace","include"]}}),y("text/x-objectivec",{name:"clike",keywords:a(_+" "+S),types:c,builtin:a(M),blockKeywords:a(A+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:a(E+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:a("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:f,hooks:{"#":u,"*":d},modeProps:{fold:["brace","include"]}}),y("text/x-objectivec++",{name:"clike",keywords:a(_+" "+S+" "+C),types:c,builtin:a(M),blockKeywords:a(A+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:a(E+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:!0,atoms:a("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:f,hooks:{"#":u,"*":d,u:h,U:h,L:h,R:h,0:p,1:p,2:p,3:p,4:p,5:p,6:p,7:p,8:p,9:p,token:function(e,t,n){if("variable"==n&&"("==e.peek()&&(";"==t.prevToken||null==t.prevToken||"}"==t.prevToken)&&m(e.current()))return"def"}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),y("text/x-squirrel",{name:"clike",keywords:a("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:l,blockKeywords:a("case catch class else for foreach if switch try while"),defKeywords:a("function local class"),typeFirstDefinitions:!0,atoms:a("true false null"),hooks:{"#":u},modeProps:{fold:["brace","include"]}})
var O=null
y("text/x-ceylon",{name:"clike",keywords:a("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(e){var t=e.charAt(0)
return t===t.toUpperCase()&&t!==t.toLowerCase()},blockKeywords:a("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:a("class dynamic function interface module object package value"),builtin:a("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:a("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},'"':function(e,t){return t.tokenize=w(e.match('""')?"triple":"single"),t.tokenize(e,t)},"`":function(e,t){return!(!O||!e.match("`"))&&(t.tokenize=O,O=null,t.tokenize(e,t))},"'":function(e){return e.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(e,t,n){if(("variable"==n||"type"==n)&&"."==t.prevToken)return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("clojure",function(t){function n(e,t){if(e.eatSpace()||e.eat(","))return["space",null]
if(e.match(g))return[null,"number"]
if(e.match(v))return[null,"string-2"]
if(e.eat(/^"/))return(t.tokenize=r)(e,t)
if(e.eat(/^[(\[{]/))return["open","bracket"]
if(e.eat(/^[)\]}]/))return["close","bracket"]
if(e.eat(/^;/))return e.skipToEnd(),["space","comment"]
if(e.eat(/^[#'@^`~]/))return[null,"meta"]
var n=e.match(y),o=n&&n[0]
return o?"comment"===o&&"("===t.lastToken?(t.tokenize=i)(e,t):a(o,d)||":"===o.charAt(0)?["symbol","atom"]:a(o,f)||a(o,p)?["symbol","keyword"]:"("===t.lastToken?["symbol","builtin"]:["symbol","variable"]:(e.next(),e.eatWhile(function(e){return!a(e,m)}),[null,"error"])}function r(e,t){for(var r,i=!1;r=e.next();){if('"'===r&&!i){t.tokenize=n
break}i=!i&&"\\"===r}return[null,"string"]}function i(e,t){for(var r,i=1;r=e.next();)if(")"===r&&i--,"("===r&&i++,0===i){e.backUp(1),t.tokenize=n
break}return["space","comment"]}function o(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=!0
return t}function a(e,t){return t instanceof RegExp?t.test(e):t instanceof Object?t.propertyIsEnumerable(e):void 0}var s=["false","nil","true"],l=[".","catch","def","do","if","monitor-enter","monitor-exit","new","quote","recur","set!","throw","try","var"],c=["*","*'","*1","*2","*3","*agent*","*allow-unresolved-vars*","*assert*","*clojure-version*","*command-line-args*","*compile-files*","*compile-path*","*compiler-options*","*data-readers*","*default-data-reader-fn*","*e","*err*","*file*","*flush-on-newline*","*fn-loader*","*in*","*math-context*","*ns*","*out*","*print-dup*","*print-length*","*print-level*","*print-meta*","*print-namespace-maps*","*print-readably*","*read-eval*","*reader-resolver*","*source-path*","*suppress-read*","*unchecked-math*","*use-context-classloader*","*verbose-defrecords*","*warn-on-reflection*","+","+'","-","-'","->","->>","->ArrayChunk","->Eduction","->Vec","->VecNode","->VecSeq","-cache-protocol-fn","-reset-methods","..","/","<","<=","=","==",">",">=","EMPTY-NODE","Inst","StackTraceElement->vec","Throwable->map","accessor","aclone","add-classpath","add-watch","agent","agent-error","agent-errors","aget","alength","alias","all-ns","alter","alter-meta!","alter-var-root","amap","ancestors","and","any?","apply","areduce","array-map","as->","aset","aset-boolean","aset-byte","aset-char","aset-double","aset-float","aset-int","aset-long","aset-short","assert","assoc","assoc!","assoc-in","associative?","atom","await","await-for","await1","bases","bean","bigdec","bigint","biginteger","binding","bit-and","bit-and-not","bit-clear","bit-flip","bit-not","bit-or","bit-set","bit-shift-left","bit-shift-right","bit-test","bit-xor","boolean","boolean-array","boolean?","booleans","bound-fn","bound-fn*","bound?","bounded-count","butlast","byte","byte-array","bytes","bytes?","case","cast","cat","char","char-array","char-escape-string","char-name-string","char?","chars","chunk","chunk-append","chunk-buffer","chunk-cons","chunk-first","chunk-next","chunk-rest","chunked-seq?","class","class?","clear-agent-errors","clojure-version","coll?","comment","commute","comp","comparator","compare","compare-and-set!","compile","complement","completing","concat","cond","cond->","cond->>","condp","conj","conj!","cons","constantly","construct-proxy","contains?","count","counted?","create-ns","create-struct","cycle","dec","dec'","decimal?","declare","dedupe","default-data-readers","definline","definterface","defmacro","defmethod","defmulti","defn","defn-","defonce","defprotocol","defrecord","defstruct","deftype","delay","delay?","deliver","denominator","deref","derive","descendants","destructure","disj","disj!","dissoc","dissoc!","distinct","distinct?","doall","dorun","doseq","dosync","dotimes","doto","double","double-array","double?","doubles","drop","drop-last","drop-while","eduction","empty","empty?","ensure","ensure-reduced","enumeration-seq","error-handler","error-mode","eval","even?","every-pred","every?","ex-data","ex-info","extend","extend-protocol","extend-type","extenders","extends?","false?","ffirst","file-seq","filter","filterv","find","find-keyword","find-ns","find-protocol-impl","find-protocol-method","find-var","first","flatten","float","float-array","float?","floats","flush","fn","fn?","fnext","fnil","for","force","format","frequencies","future","future-call","future-cancel","future-cancelled?","future-done?","future?","gen-class","gen-interface","gensym","get","get-in","get-method","get-proxy-class","get-thread-bindings","get-validator","group-by","halt-when","hash","hash-combine","hash-map","hash-ordered-coll","hash-set","hash-unordered-coll","ident?","identical?","identity","if-let","if-not","if-some","ifn?","import","in-ns","inc","inc'","indexed?","init-proxy","inst-ms","inst-ms*","inst?","instance?","int","int-array","int?","integer?","interleave","intern","interpose","into","into-array","ints","io!","isa?","iterate","iterator-seq","juxt","keep","keep-indexed","key","keys","keyword","keyword?","last","lazy-cat","lazy-seq","let","letfn","line-seq","list","list*","list?","load","load-file","load-reader","load-string","loaded-libs","locking","long","long-array","longs","loop","macroexpand","macroexpand-1","make-array","make-hierarchy","map","map-entry?","map-indexed","map?","mapcat","mapv","max","max-key","memfn","memoize","merge","merge-with","meta","method-sig","methods","min","min-key","mix-collection-hash","mod","munge","name","namespace","namespace-munge","nat-int?","neg-int?","neg?","newline","next","nfirst","nil?","nnext","not","not-any?","not-empty","not-every?","not=","ns","ns-aliases","ns-imports","ns-interns","ns-map","ns-name","ns-publics","ns-refers","ns-resolve","ns-unalias","ns-unmap","nth","nthnext","nthrest","num","number?","numerator","object-array","odd?","or","parents","partial","partition","partition-all","partition-by","pcalls","peek","persistent!","pmap","pop","pop!","pop-thread-bindings","pos-int?","pos?","pr","pr-str","prefer-method","prefers","primitives-classnames","print","print-ctor","print-dup","print-method","print-simple","print-str","printf","println","println-str","prn","prn-str","promise","proxy","proxy-call-with-super","proxy-mappings","proxy-name","proxy-super","push-thread-bindings","pvalues","qualified-ident?","qualified-keyword?","qualified-symbol?","quot","rand","rand-int","rand-nth","random-sample","range","ratio?","rational?","rationalize","re-find","re-groups","re-matcher","re-matches","re-pattern","re-seq","read","read-line","read-string","reader-conditional","reader-conditional?","realized?","record?","reduce","reduce-kv","reduced","reduced?","reductions","ref","ref-history-count","ref-max-history","ref-min-history","ref-set","refer","refer-clojure","reify","release-pending-sends","rem","remove","remove-all-methods","remove-method","remove-ns","remove-watch","repeat","repeatedly","replace","replicate","require","reset!","reset-meta!","reset-vals!","resolve","rest","restart-agent","resultset-seq","reverse","reversible?","rseq","rsubseq","run!","satisfies?","second","select-keys","send","send-off","send-via","seq","seq?","seqable?","seque","sequence","sequential?","set","set-agent-send-executor!","set-agent-send-off-executor!","set-error-handler!","set-error-mode!","set-validator!","set?","short","short-array","shorts","shuffle","shutdown-agents","simple-ident?","simple-keyword?","simple-symbol?","slurp","some","some->","some->>","some-fn","some?","sort","sort-by","sorted-map","sorted-map-by","sorted-set","sorted-set-by","sorted?","special-symbol?","spit","split-at","split-with","str","string?","struct","struct-map","subs","subseq","subvec","supers","swap!","swap-vals!","symbol","symbol?","sync","tagged-literal","tagged-literal?","take","take-last","take-nth","take-while","test","the-ns","thread-bound?","time","to-array","to-array-2d","trampoline","transduce","transient","tree-seq","true?","type","unchecked-add","unchecked-add-int","unchecked-byte","unchecked-char","unchecked-dec","unchecked-dec-int","unchecked-divide-int","unchecked-double","unchecked-float","unchecked-inc","unchecked-inc-int","unchecked-int","unchecked-long","unchecked-multiply","unchecked-multiply-int","unchecked-negate","unchecked-negate-int","unchecked-remainder-int","unchecked-short","unchecked-subtract","unchecked-subtract-int","underive","unquote","unquote-splicing","unreduced","unsigned-bit-shift-right","update","update-in","update-proxy","uri?","use","uuid?","val","vals","var-get","var-set","var?","vary-meta","vec","vector","vector-of","vector?","volatile!","volatile?","vreset!","vswap!","when","when-first","when-let","when-not","when-some","while","with-bindings","with-bindings*","with-in-str","with-loading-context","with-local-vars","with-meta","with-open","with-out-str","with-precision","with-redefs","with-redefs-fn","xml-seq","zero?","zipmap"],u=["->","->>","as->","binding","bound-fn","case","catch","comment","cond","cond->","cond->>","condp","def","definterface","defmethod","defn","defmacro","defprotocol","defrecord","defstruct","deftype","do","doseq","dotimes","doto","extend","extend-protocol","extend-type","fn","for","future","if","if-let","if-not","if-some","let","letfn","locking","loop","ns","proxy","reify","struct-map","some->","some->>","try","when","when-first","when-let","when-not","when-some","while","with-bindings","with-bindings*","with-in-str","with-loading-context","with-local-vars","with-meta","with-open","with-out-str","with-precision","with-redefs","with-redefs-fn"]
e.registerHelper("hintWords","clojure",[].concat(s,l,c))
var d=o(s),f=o(l),p=o(c),h=o(u),m=/^(?:[\\\[\]\s"(),;@^`{}~]|$)/,g=/^(?:[+\-]?\d+(?:(?:N|(?:[eE][+\-]?\d+))|(?:\.?\d*(?:M|(?:[eE][+\-]?\d+))?)|\/\d+|[xX][0-9a-fA-F]+|r[0-9a-zA-Z]+)?(?=[\\\[\]\s"#'(),;@^`{}~]|$))/,v=/^(?:\\(?:backspace|formfeed|newline|return|space|tab|o[0-7]{3}|u[0-9A-Fa-f]{4}|x[0-9A-Fa-f]{4}|.)?(?=[\\\[\]\s"(),;@^`{}~]|$))/,y=/^(?:(?:[^\\\/\[\]\d\s"#'(),;@^`{}~][^\\\[\]\s"(),;@^`{}~]*(?:\.[^\\\/\[\]\d\s"#'(),;@^`{}~][^\\\[\]\s"(),;@^`{}~]*)*\/)?(?:\/|[^\\\/\[\]\d\s"#'(),;@^`{}~][^\\\[\]\s"(),;@^`{}~]*)*(?=[\\\[\]\s"(),;@^`{}~]|$))/
return{startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastToken:null,tokenize:n}},token:function(e,n){e.sol()&&"number"!=typeof n.ctx.indentTo&&(n.ctx.indentTo=n.ctx.start+1)
var r=n.tokenize(e,n),i=r[0],o=r[1],s=e.current()
return"space"!==i&&("("===n.lastToken&&null===n.ctx.indentTo?"symbol"===i&&a(s,h)?n.ctx.indentTo=n.ctx.start+t.indentUnit:n.ctx.indentTo="next":"next"===n.ctx.indentTo&&(n.ctx.indentTo=e.column()),n.lastToken=s),"open"===i?n.ctx={prev:n.ctx,start:e.column(),indentTo:null}:"close"===i&&(n.ctx=n.ctx.prev||n.ctx),o},indent:function(e){var t=e.ctx.indentTo
return"number"==typeof t?t:e.ctx.start+1},closeBrackets:{pairs:'()[]{}""'},lineComment:";;"}}),e.defineMIME("text/x-clojure","clojure"),e.defineMIME("text/x-clojurescript","clojure"),e.defineMIME("application/edn","clojure")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("coffeescript",function(e,t){function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function r(e,t){if(e.sol()){null===t.scope.align&&(t.scope.align=!1)
var n=t.scope.offset
if(e.eatSpace()){var r=e.indentation()
return r>n&&"coffee"==t.scope.type?"indent":r<n?"dedent":null}n>0&&s(e,t)}if(e.eatSpace())return null
var a=e.peek()
if(e.match("####"))return e.skipToEnd(),"comment"
if(e.match("###"))return t.tokenize=o,t.tokenize(e,t)
if("#"===a)return e.skipToEnd(),"comment"
if(e.match(/^-?[0-9\.]/,!1)){var l=!1
if(e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)&&(l=!0),e.match(/^-?\d+\.\d*/)&&(l=!0),e.match(/^-?\.\d+/)&&(l=!0),l)return"."==e.peek()&&e.backUp(1),"number"
var m=!1
if(e.match(/^-?0x[0-9a-f]+/i)&&(m=!0),e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)&&(m=!0),e.match(/^-?0(?![\dx])/i)&&(m=!0),m)return"number"}if(e.match(y))return t.tokenize=i(e.current(),!1,"string"),t.tokenize(e,t)
if(e.match(b)){if("/"!=e.current()||e.match(/^.*\//,!1))return t.tokenize=i(e.current(),!0,"string-2"),t.tokenize(e,t)
e.backUp(1)}return e.match(u)||e.match(h)?"operator":e.match(d)?"punctuation":e.match(x)?"atom":e.match(p)||t.prop&&e.match(f)?"property":e.match(v)?"keyword":e.match(f)?"variable":(e.next(),c)}function i(e,n,i){return function(o,a){for(;!o.eol();)if(o.eatWhile(/[^'"\/\\]/),o.eat("\\")){if(o.next(),n&&o.eol())return i}else{if(o.match(e))return a.tokenize=r,i
o.eat(/['"\/]/)}return n&&(t.singleLineStringErrors?i=c:a.tokenize=r),i}}function o(e,t){for(;!e.eol();){if(e.eatWhile(/[^#]/),e.match("###")){t.tokenize=r
break}e.eatWhile("#")}return"comment"}function a(t,n,r){r=r||"coffee"
for(var i=0,o=!1,a=null,s=n.scope;s;s=s.prev)if("coffee"===s.type||"}"==s.type){i=s.offset+e.indentUnit
break}"coffee"!==r?(o=null,a=t.column()+t.current().length):n.scope.align&&(n.scope.align=!1),n.scope={offset:i,type:r,prev:n.scope,align:o,alignOffset:a}}function s(e,t){if(t.scope.prev){if("coffee"===t.scope.type){for(var n=e.indentation(),r=!1,i=t.scope;i;i=i.prev)if(n===i.offset){r=!0
break}if(!r)return!0
for(;t.scope.prev&&t.scope.offset!==n;)t.scope=t.scope.prev
return!1}return t.scope=t.scope.prev,!1}}function l(e,t){var n=t.tokenize(e,t),r=e.current()
"return"===r&&(t.dedent=!0),(("->"===r||"=>"===r)&&e.eol()||"indent"===n)&&a(e,t)
var i="[({".indexOf(r)
if(i!==-1&&a(e,t,"])}".slice(i,i+1)),m.exec(r)&&a(e,t),"then"==r&&s(e,t),"dedent"===n&&s(e,t))return c
if(i="])}".indexOf(r),i!==-1){for(;"coffee"==t.scope.type&&t.scope.prev;)t.scope=t.scope.prev
t.scope.type==r&&(t.scope=t.scope.prev)}return t.dedent&&e.eol()&&("coffee"==t.scope.type&&t.scope.prev&&(t.scope=t.scope.prev),t.dedent=!1),n}var c="error",u=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,d=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/,f=/^[_A-Za-z$][_A-Za-z$0-9]*/,p=/^@[_A-Za-z$][_A-Za-z$0-9]*/,h=n(["and","or","not","is","isnt","in","instanceof","typeof"]),m=["for","while","loop","if","unless","else","switch","try","catch","finally","class"],g=["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"],v=n(m.concat(g))
m=n(m)
var y=/^('{3}|\"{3}|['\"])/,b=/^(\/{3}|\/)/,k=["Infinity","NaN","undefined","null","true","false","on","off","yes","no"],x=n(k),w={startState:function(e){return{tokenize:r,scope:{offset:e||0,type:"coffee",prev:null,align:!1},prop:!1,dedent:0}},token:function(e,t){var n=null===t.scope.align&&t.scope
n&&e.sol()&&(n.align=!1)
var r=l(e,t)
return r&&"comment"!=r&&(n&&(n.align=!0),t.prop="punctuation"==r&&"."==e.current()),r},indent:function(e,t){if(e.tokenize!=r)return 0
var n=e.scope,i=t&&"])}".indexOf(t.charAt(0))>-1
if(i)for(;"coffee"==n.type&&n.prev;)n=n.prev
var o=i&&n.type===t.charAt(0)
return n.align?n.alignOffset-(o?1:0):(o?n.prev:n).offset},lineComment:"#",fold:"indent"}
return w}),e.defineMIME("application/vnd.coffeescript","coffeescript"),e.defineMIME("text/x-coffeescript","coffeescript"),e.defineMIME("text/coffeescript","coffeescript")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t={},n=0;n<e.length;++n)t[e[n].toLowerCase()]=!0
return t}function n(e,t){for(var n,r=!1;null!=(n=e.next());){if(r&&"/"==n){t.tokenize=null
break}r="*"==n}return["comment","comment"]}e.defineMode("css",function(t,n){function r(e,t){return h=t,e}function i(e,t){var n=e.next()
if(v[n]){var i=v[n](e,t)
if(i!==!1)return i}return"@"==n?(e.eatWhile(/[\w\\\-]/),r("def",e.current())):"="==n||("~"==n||"|"==n)&&e.eat("=")?r(null,"compare"):'"'==n||"'"==n?(t.tokenize=o(n),t.tokenize(e,t)):"#"==n?(e.eatWhile(/[\w\\\-]/),r("atom","hash")):"!"==n?(e.match(/^\s*\w*/),r("keyword","important")):/\d/.test(n)||"."==n&&e.eat(/\d/)?(e.eatWhile(/[\w.%]/),r("number","unit")):"-"!==n?/[,+>*\/]/.test(n)?r(null,"select-op"):"."==n&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?r("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(n)?r(null,n):e.match(/[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/.test(e.current().toLowerCase())&&(t.tokenize=a),r("variable callee","variable")):/[\w\\\-]/.test(n)?(e.eatWhile(/[\w\\\-]/),r("property","word")):r(null,null):/[\d.]/.test(e.peek())?(e.eatWhile(/[\w.%]/),r("number","unit")):e.match(/^-[\w\\\-]*/)?(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?r("variable-2","variable-definition"):r("variable-2","variable")):e.match(/^\w+-/)?r("meta","meta"):void 0}function o(e){return function(t,n){for(var i,o=!1;null!=(i=t.next());){if(i==e&&!o){")"==e&&t.backUp(1)
break}o=!o&&"\\"==i}return(i==e||!o&&")"!=e)&&(n.tokenize=null),r("string","string")}}function a(e,t){return e.next(),e.match(/\s*[\"\')]/,!1)?t.tokenize=null:t.tokenize=o(")"),r(null,"(")}function s(e,t,n){this.type=e,this.indent=t,this.prev=n}function l(e,t,n,r){return e.context=new s(n,t.indentation()+(r===!1?0:g),e.context),n}function c(e){return e.context.prev&&(e.context=e.context.prev),e.context.type}function u(e,t,n){return O[n.context.type](e,t,n)}function d(e,t,n,r){for(var i=r||1;i>0;i--)n.context=n.context.prev
return u(e,t,n)}function f(e){var t=e.current().toLowerCase()
m=L.hasOwnProperty(t)?"atom":M.hasOwnProperty(t)?"keyword":"variable"}var p=n.inline
n.propertyKeywords||(n=e.resolveMode("text/css"))
var h,m,g=t.indentUnit,v=n.tokenHooks,y=n.documentTypes||{},b=n.mediaTypes||{},k=n.mediaFeatures||{},x=n.mediaValueKeywords||{},w=n.propertyKeywords||{},_=n.nonStandardPropertyKeywords||{},C=n.fontProperties||{},S=n.counterDescriptors||{},M=n.colorKeywords||{},L=n.valueKeywords||{},T=n.allowNested,A=n.lineComment,E=n.supportsAtComponent===!0,O={}
return O.top=function(e,t,n){if("{"==e)return l(n,t,"block")
if("}"==e&&n.context.prev)return c(n)
if(E&&/@component/i.test(e))return l(n,t,"atComponentBlock")
if(/^@(-moz-)?document$/i.test(e))return l(n,t,"documentTypes")
if(/^@(media|supports|(-moz-)?document|import)$/i.test(e))return l(n,t,"atBlock")
if(/^@(font-face|counter-style)/i.test(e))return n.stateArg=e,"restricted_atBlock_before"
if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))return"keyframes"
if(e&&"@"==e.charAt(0))return l(n,t,"at")
if("hash"==e)m="builtin"
else if("word"==e)m="tag"
else{if("variable-definition"==e)return"maybeprop"
if("interpolation"==e)return l(n,t,"interpolation")
if(":"==e)return"pseudo"
if(T&&"("==e)return l(n,t,"parens")}return n.context.type},O.block=function(e,t,n){if("word"==e){var r=t.current().toLowerCase()
return w.hasOwnProperty(r)?(m="property","maybeprop"):_.hasOwnProperty(r)?(m="string-2","maybeprop"):T?(m=t.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(m+=" error","maybeprop")}return"meta"==e?"block":T||"hash"!=e&&"qualifier"!=e?O.top(e,t,n):(m="error","block")},O.maybeprop=function(e,t,n){return":"==e?l(n,t,"prop"):u(e,t,n)},O.prop=function(e,t,n){if(";"==e)return c(n)
if("{"==e&&T)return l(n,t,"propBlock")
if("}"==e||"{"==e)return d(e,t,n)
if("("==e)return l(n,t,"parens")
if("hash"!=e||/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())){if("word"==e)f(t)
else if("interpolation"==e)return l(n,t,"interpolation")}else m+=" error"
return"prop"},O.propBlock=function(e,t,n){return"}"==e?c(n):"word"==e?(m="property","maybeprop"):n.context.type},O.parens=function(e,t,n){return"{"==e||"}"==e?d(e,t,n):")"==e?c(n):"("==e?l(n,t,"parens"):"interpolation"==e?l(n,t,"interpolation"):("word"==e&&f(t),"parens")},O.pseudo=function(e,t,n){return"meta"==e?"pseudo":"word"==e?(m="variable-3",n.context.type):u(e,t,n)},O.documentTypes=function(e,t,n){return"word"==e&&y.hasOwnProperty(t.current())?(m="tag",n.context.type):O.atBlock(e,t,n)},O.atBlock=function(e,t,n){if("("==e)return l(n,t,"atBlock_parens")
if("}"==e||";"==e)return d(e,t,n)
if("{"==e)return c(n)&&l(n,t,T?"block":"top")
if("interpolation"==e)return l(n,t,"interpolation")
if("word"==e){var r=t.current().toLowerCase()
m="only"==r||"not"==r||"and"==r||"or"==r?"keyword":b.hasOwnProperty(r)?"attribute":k.hasOwnProperty(r)?"property":x.hasOwnProperty(r)?"keyword":w.hasOwnProperty(r)?"property":_.hasOwnProperty(r)?"string-2":L.hasOwnProperty(r)?"atom":M.hasOwnProperty(r)?"keyword":"error"}return n.context.type},O.atComponentBlock=function(e,t,n){return"}"==e?d(e,t,n):"{"==e?c(n)&&l(n,t,T?"block":"top",!1):("word"==e&&(m="error"),n.context.type)},O.atBlock_parens=function(e,t,n){return")"==e?c(n):"{"==e||"}"==e?d(e,t,n,2):O.atBlock(e,t,n)},O.restricted_atBlock_before=function(e,t,n){return"{"==e?l(n,t,"restricted_atBlock"):"word"==e&&"@counter-style"==n.stateArg?(m="variable","restricted_atBlock_before"):u(e,t,n)},O.restricted_atBlock=function(e,t,n){return"}"==e?(n.stateArg=null,c(n)):"word"==e?(m="@font-face"==n.stateArg&&!C.hasOwnProperty(t.current().toLowerCase())||"@counter-style"==n.stateArg&&!S.hasOwnProperty(t.current().toLowerCase())?"error":"property","maybeprop"):"restricted_atBlock"},O.keyframes=function(e,t,n){return"word"==e?(m="variable","keyframes"):"{"==e?l(n,t,"top"):u(e,t,n)},O.at=function(e,t,n){return";"==e?c(n):"{"==e||"}"==e?d(e,t,n):("word"==e?m="tag":"hash"==e&&(m="builtin"),"at")},O.interpolation=function(e,t,n){return"}"==e?c(n):"{"==e||";"==e?d(e,t,n):("word"==e?m="variable":"variable"!=e&&"("!=e&&")"!=e&&(m="error"),"interpolation")},{startState:function(e){return{tokenize:null,state:p?"block":"top",stateArg:null,context:new s(p?"block":"top",e||0,null)}},token:function(e,t){if(!t.tokenize&&e.eatSpace())return null
var n=(t.tokenize||i)(e,t)
return n&&"object"==typeof n&&(h=n[1],n=n[0]),m=n,"comment"!=h&&(t.state=O[t.state](h,e,t)),m},indent:function(e,t){var n=e.context,r=t&&t.charAt(0),i=n.indent
return"prop"!=n.type||"}"!=r&&")"!=r||(n=n.prev),n.prev&&("}"!=r||"block"!=n.type&&"top"!=n.type&&"interpolation"!=n.type&&"restricted_atBlock"!=n.type?(")"!=r||"parens"!=n.type&&"atBlock_parens"!=n.type)&&("{"!=r||"at"!=n.type&&"atBlock"!=n.type)||(i=Math.max(0,n.indent-g)):(n=n.prev,i=n.indent)),i},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:A,fold:"brace"}})
var r=["domain","regexp","url","url-prefix"],i=t(r),o=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],a=t(o),s=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover"],l=t(s),c=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive"],u=t(c),d=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],f=t(d),p=["border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],h=t(p),m=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],g=t(m),v=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],y=t(v),b=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],k=t(b),x=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","match","matrix","matrix3d","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],w=t(x),_=r.concat(o).concat(s).concat(c).concat(d).concat(p).concat(b).concat(x)
e.registerHelper("hintWords","css",_),e.defineMIME("text/css",{documentTypes:i,mediaTypes:a,mediaFeatures:l,mediaValueKeywords:u,propertyKeywords:f,nonStandardPropertyKeywords:h,fontProperties:g,counterDescriptors:y,colorKeywords:k,valueKeywords:w,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=n,n(e,t))}},name:"css"}),e.defineMIME("text/x-scss",{mediaTypes:a,mediaFeatures:l,mediaValueKeywords:u,propertyKeywords:f,nonStandardPropertyKeywords:h,colorKeywords:k,valueKeywords:w,fontProperties:g,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=n,n(e,t)):["operator","operator"]},":":function(e){return!!e.match(/\s*\{/,!1)&&[null,null]},$:function(e){return e.match(/^[\w-]+/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(e){return!!e.eat("{")&&[null,"interpolation"]}},name:"css",helperType:"scss"}),e.defineMIME("text/x-less",{mediaTypes:a,mediaFeatures:l,mediaValueKeywords:u,propertyKeywords:f,nonStandardPropertyKeywords:h,colorKeywords:k,valueKeywords:w,fontProperties:g,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=n,n(e,t)):["operator","operator"]},"@":function(e){return e.eat("{")?[null,"interpolation"]:!e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)&&(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),e.defineMIME("text/x-gss",{documentTypes:i,mediaTypes:a,mediaFeatures:l,propertyKeywords:f,nonStandardPropertyKeywords:h,fontProperties:g,counterDescriptors:y,colorKeywords:k,valueKeywords:w,supportsAtComponent:!0,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=n,n(e,t))}},name:"css",helperType:"gss"})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../clike/clike")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../clike/clike"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=!0
return t}function n(e){(e.interpolationStack||(e.interpolationStack=[])).push(e.tokenize)}function r(e){return(e.interpolationStack||(e.interpolationStack=[])).pop()}function i(e){return e.interpolationStack?e.interpolationStack.length:0}function o(e,t,r,i){function o(t,r){for(var o=!1;!t.eol();){if(!i&&!o&&"$"==t.peek())return n(r),r.tokenize=a,"string"
var l=t.next()
if(l==e&&!o&&(!s||t.match(e+e))){r.tokenize=null
break}o=!i&&!o&&"\\"==l}return"string"}var s=!1
if(t.eat(e)){if(!t.eat(e))return"string"
s=!0}return r.tokenize=o,o(t,r)}function a(e,t){return e.eat("$"),e.eat("{")?t.tokenize=null:t.tokenize=s,null}function s(e,t){return e.eatWhile(/[\w_]/),t.tokenize=r(t),"variable"}function l(e){return function(t,n){for(var r;r=t.next();){if("*"==r&&t.eat("/")){if(1==e){n.tokenize=null
break}return n.tokenize=l(e-1),n.tokenize(t,n)}if("/"==r&&t.eat("*"))return n.tokenize=l(e+1),n.tokenize(t,n)}return"comment"}}var c="this super static final const abstract class extends external factory implements mixin get native set typedef with enum throw rethrow assert break case continue default in return new deferred async await covariant try catch finally do else for if switch while import library export part of show hide is as extension on yield late required".split(" "),u="try catch finally do else for if switch while".split(" "),d="true false null".split(" "),f="void bool num int double dynamic var String Null Never".split(" ")
e.defineMIME("application/dart",{name:"clike",keywords:t(c),blockKeywords:t(u),builtin:t(f),atoms:t(d),hooks:{"@":function(e){return e.eatWhile(/[\w\$_\.]/),"meta"},"'":function(e,t){return o("'",e,t,!1)},'"':function(e,t){return o('"',e,t,!1)},r:function(e,t){var n=e.peek()
return("'"==n||'"'==n)&&o(e.next(),e,t,!0)},"}":function(e,t){return i(t)>0&&(t.tokenize=r(t),null)},"/":function(e,t){return!!e.eat("*")&&(t.tokenize=l(1),t.tokenize(e,t))},token:function(e,t,n){if("variable"==n){var r=RegExp("^[_$]*[A-Z][a-zA-Z0-9_$]*$","g")
if(r.test(e.current()))return"variable-2"}}}}),e.registerHelper("hintWords","application/dart",c.concat(d).concat(f)),e.defineMode("dart",function(t){return e.getMode(t,"application/dart")},"clike")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMIME("text/x-erlang","erlang"),e.defineMode("erlang",function(t){function n(e,t){if(t.in_string)return t.in_string=!o(e),u(t,e,"string")
if(t.in_atom)return t.in_atom=!a(e),u(t,e,"atom")
if(e.eatSpace())return u(t,e,"whitespace")
if(!h(t)&&e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/))return c(e.current(),M)?u(t,e,"type"):u(t,e,"attribute")
var n=e.next()
if("%"==n)return e.skipToEnd(),u(t,e,"comment")
if(":"==n)return u(t,e,"colon")
if("?"==n)return e.eatSpace(),e.eatWhile(R),u(t,e,"macro")
if("#"==n)return e.eatSpace(),e.eatWhile(R),u(t,e,"record")
if("$"==n)return"\\"!=e.next()||e.match(j)?u(t,e,"number"):u(t,e,"error")
if("."==n)return u(t,e,"dot")
if("'"==n){if(!(t.in_atom=!a(e))){if(e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),u(t,e,"fun")
if(e.match(/\s*\(/,!1)||e.match(/\s*:/,!1))return u(t,e,"function")}return u(t,e,"atom")}if('"'==n)return t.in_string=!o(e),u(t,e,"string")
if(/[A-Z_Ø-ÞÀ-Ö]/.test(n))return e.eatWhile(R),u(t,e,"variable")
if(/[a-z_ß-öø-ÿ]/.test(n)){if(e.eatWhile(R),e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),u(t,e,"fun")
var s=e.current()
return c(s,L)?u(t,e,"keyword"):c(s,E)?u(t,e,"operator"):e.match(/\s*\(/,!1)?!c(s,P)||":"==h(t).token&&"erlang"!=h(t,2).token?c(s,D)?u(t,e,"guard"):u(t,e,"function"):u(t,e,"builtin"):":"==l(e)?"erlang"==s?u(t,e,"builtin"):u(t,e,"function"):c(s,["true","false"])?u(t,e,"boolean"):u(t,e,"atom")}var d=/[0-9]/,f=/[0-9a-zA-Z]/
return d.test(n)?(e.eatWhile(d),e.eat("#")?e.eatWhile(f)||e.backUp(1):e.eat(".")&&(e.eatWhile(d)?e.eat(/[eE]/)&&(e.eat(/[-+]/)?e.eatWhile(d)||e.backUp(2):e.eatWhile(d)||e.backUp(1)):e.backUp(1)),u(t,e,"number")):r(e,N,q)?u(t,e,"open_paren"):r(e,F,I)?u(t,e,"close_paren"):i(e,T,A)?u(t,e,"separator"):i(e,O,z)?u(t,e,"operator"):u(t,e,null)}function r(e,t,n){if(1==e.current().length&&t.test(e.current())){for(e.backUp(1);t.test(e.peek());)if(e.next(),c(e.current(),n))return!0
e.backUp(e.current().length-1)}return!1}function i(e,t,n){if(1==e.current().length&&t.test(e.current())){for(;t.test(e.peek());)e.next()
for(;0<e.current().length;){if(c(e.current(),n))return!0
e.backUp(1)}e.next()}return!1}function o(e){return s(e,'"',"\\")}function a(e){return s(e,"'","\\")}function s(e,t,n){for(;!e.eol();){var r=e.next()
if(r==t)return!0
r==n&&e.next()}return!1}function l(e){var t=e.match(/([\n\s]+|%[^\n]*\n)*(.)/,!1)
return t?t.pop():""}function c(e,t){return-1<t.indexOf(e)}function u(e,t,n){switch(m(e,f(n,t)),n){case"atom":return"atom"
case"attribute":return"attribute"
case"boolean":return"atom"
case"builtin":return"builtin"
case"close_paren":return null
case"colon":return null
case"comment":return"comment"
case"dot":return null
case"error":return"error"
case"fun":return"meta"
case"function":return"tag"
case"guard":return"property"
case"keyword":return"keyword"
case"macro":return"variable-2"
case"number":return"number"
case"open_paren":return null
case"operator":return"operator"
case"record":return"bracket"
case"separator":return null
case"string":return"string"
case"type":return"def"
case"variable":return"variable"
default:return null}}function d(e,t,n,r){return{token:e,column:t,indent:n,type:r}}function f(e,t){return d(t.current(),t.column(),t.indentation(),e)}function p(e){return d(e,0,0,e)}function h(e,t){var n=e.tokenStack.length,r=t?t:1
return!(n<r)&&e.tokenStack[n-r]}function m(e,t){"comment"!=t.type&&"whitespace"!=t.type&&(e.tokenStack=g(e.tokenStack,t),e.tokenStack=v(e.tokenStack))}function g(e,t){var n=e.length-1
return 0<n&&"record"===e[n].type&&"dot"===t.type?e.pop():0<n&&"group"===e[n].type?(e.pop(),e.push(t)):e.push(t),e}function v(e){if(!e.length)return e
var t=e.length-1
if("dot"===e[t].type)return[]
if(t>1&&"fun"===e[t].type&&"fun"===e[t-1].token)return e.slice(0,t-1)
switch(e[t].token){case"}":return y(e,{g:["{"]})
case"]":return y(e,{i:["["]})
case")":return y(e,{i:["("]})
case">>":return y(e,{i:["<<"]})
case"end":return y(e,{i:["begin","case","fun","if","receive","try"]})
case",":return y(e,{e:["begin","try","when","->",",","(","[","{","<<"]})
case"->":return y(e,{r:["when"],m:["try","if","case","receive"]})
case";":return y(e,{E:["case","fun","if","receive","try","when"]})
case"catch":return y(e,{e:["try"]})
case"of":return y(e,{e:["case"]})
case"after":return y(e,{e:["receive","try"]})
default:return e}}function y(e,t){for(var n in t)for(var r=e.length-1,i=t[n],o=r-1;-1<o;o--)if(c(e[o].token,i)){var a=e.slice(0,o)
switch(n){case"m":return a.concat(e[o]).concat(e[r])
case"r":return a.concat(e[r])
case"i":return a
case"g":return a.concat(p("group"))
case"E":return a.concat(e[o])
case"e":return a.concat(e[o])}}return"E"==n?[]:e}function b(n,r){var i,o=t.indentUnit,a=k(r),s=h(n,1),l=h(n,2)
return n.in_string||n.in_atom?e.Pass:l?"when"==s.token?s.column+o:"when"===a&&"function"===l.type?l.indent+o:"("===a&&"fun"===s.token?s.column+3:"catch"===a&&(i=_(n,["try"]))?i.column:c(a,["end","after","of"])?(i=_(n,["begin","case","fun","if","receive","try"]),i?i.column:e.Pass):c(a,I)?(i=_(n,q),i?i.column:e.Pass):c(s.token,[",","|","||"])||c(a,[",","|","||"])?(i=x(n),i?i.column+i.token.length:o):"->"==s.token?c(l.token,["receive","case","if","try"])?l.column+o+o:l.column+o:c(s.token,q)?s.column+s.token.length:(i=w(n),S(i)?i.column+o:0):0}function k(e){var t=e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/)
return S(t)&&0===t.index?t[0]:""}function x(e){var t=e.tokenStack.slice(0,-1),n=C(t,"type",["open_paren"])
return!!S(t[n])&&t[n]}function w(e){var t=e.tokenStack,n=C(t,"type",["open_paren","separator","keyword"]),r=C(t,"type",["operator"])
return S(n)&&S(r)&&n<r?t[n+1]:!!S(n)&&t[n]}function _(e,t){var n=e.tokenStack,r=C(n,"token",t)
return!!S(n[r])&&n[r]}function C(e,t,n){for(var r=e.length-1;-1<r;r--)if(c(e[r][t],n))return r
return!1}function S(e){return e!==!1&&null!=e}var M=["-type","-spec","-export_type","-opaque"],L=["after","begin","catch","case","cond","end","fun","if","let","of","query","receive","try","when"],T=/[\->,;]/,A=["->",";",","],E=["and","andalso","band","bnot","bor","bsl","bsr","bxor","div","not","or","orelse","rem","xor"],O=/[\+\-\*\/<>=\|:!]/,z=["=","+","-","*","/",">",">=","<","=<","=:=","==","=/=","/=","||","<-","!"],N=/[<\(\[\{]/,q=["<<","(","[","{"],F=/[>\)\]\}]/,I=["}","]",")",">>"],D=["is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_record","is_reference","is_tuple","atom","binary","bitstring","boolean","function","integer","list","number","pid","port","record","reference","tuple"],P=["abs","adler32","adler32_combine","alive","apply","atom_to_binary","atom_to_list","binary_to_atom","binary_to_existing_atom","binary_to_list","binary_to_term","bit_size","bitstring_to_list","byte_size","check_process_code","contact_binary","crc32","crc32_combine","date","decode_packet","delete_module","disconnect_node","element","erase","exit","float","float_to_list","garbage_collect","get","get_keys","group_leader","halt","hd","integer_to_list","internal_bif","iolist_size","iolist_to_binary","is_alive","is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_process_alive","is_record","is_reference","is_tuple","length","link","list_to_atom","list_to_binary","list_to_bitstring","list_to_existing_atom","list_to_float","list_to_integer","list_to_pid","list_to_tuple","load_module","make_ref","module_loaded","monitor_node","node","node_link","node_unlink","nodes","notalive","now","open_port","pid_to_list","port_close","port_command","port_connect","port_control","pre_loaded","process_flag","process_info","processes","purge_module","put","register","registered","round","self","setelement","size","spawn","spawn_link","spawn_monitor","spawn_opt","split_binary","statistics","term_to_binary","time","throw","tl","trunc","tuple_size","tuple_to_list","unlink","unregister","whereis"],R=/[\w@Ø-ÞÀ-Öß-öø-ÿ]/,j=/[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/
return{startState:function(){return{tokenStack:[],in_string:!1,in_atom:!1}},token:function(e,t){return n(e,t)},indent:function(e,t){return b(e,t)},lineComment:"%"}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../markdown/markdown"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../markdown/markdown","../../addon/mode/overlay"],e):e(CodeMirror)}(function(e){"use strict"
var t=/^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i
e.defineMode("gfm",function(n,r){function i(e){return e.code=!1,null}var o=0,a={startState:function(){return{code:!1,codeBlock:!1,ateSpace:!1}},copyState:function(e){return{code:e.code,codeBlock:e.codeBlock,ateSpace:e.ateSpace}},token:function(e,n){if(n.combineTokens=null,n.codeBlock)return e.match(/^```+/)?(n.codeBlock=!1,null):(e.skipToEnd(),null)
if(e.sol()&&(n.code=!1),e.sol()&&e.match(/^```+/))return e.skipToEnd(),n.codeBlock=!0,null
if("`"===e.peek()){e.next()
var i=e.pos
e.eatWhile("`")
var a=1+e.pos-i
return n.code?a===o&&(n.code=!1):(o=a,n.code=!0),null}if(n.code)return e.next(),null
if(e.eatSpace())return n.ateSpace=!0,null
if((e.sol()||n.ateSpace)&&(n.ateSpace=!1,r.gitHubSpice!==!1)){if(e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/))return n.combineTokens=!0,"link"
if(e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))return n.combineTokens=!0,"link"}return e.match(t)&&"]("!=e.string.slice(e.start-2,e.start)&&(0==e.start||/\W/.test(e.string.charAt(e.start-1)))?(n.combineTokens=!0,"link"):(e.next(),null)},blankLine:i},s={taskLists:!0,strikethrough:!0,emoji:!0}
for(var l in r)s[l]=r[l]
return s.name="markdown",e.overlayMode(e.getMode(n,s),a)},"markdown"),e.defineMIME("text/x-gfm","gfm")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("go",function(t){function n(e,t){var n=e.next()
if('"'==n||"'"==n||"`"==n)return t.tokenize=r(n),t.tokenize(e,t)
if(/[\d\.]/.test(n))return"."==n?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==n?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number"
if(/[\[\]{}\(\),;\:\.]/.test(n))return l=n,null
if("/"==n){if(e.eat("*"))return t.tokenize=i,i(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"}if(f.test(n))return e.eatWhile(f),"operator"
e.eatWhile(/[\w\$_\xa1-\uffff]/)
var o=e.current()
return u.propertyIsEnumerable(o)?("case"!=o&&"default"!=o||(l="case"),"keyword"):d.propertyIsEnumerable(o)?"atom":"variable"}function r(e){return function(t,r){for(var i,o=!1,a=!1;null!=(i=t.next());){if(i==e&&!o){a=!0
break}o=!o&&"`"!=e&&"\\"==i}return(a||!o&&"`"!=e)&&(r.tokenize=n),"string"}}function i(e,t){for(var r,i=!1;r=e.next();){if("/"==r&&i){t.tokenize=n
break}i="*"==r}return"comment"}function o(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function a(e,t,n){return e.context=new o(e.indented,t,n,null,e.context)}function s(e){if(e.context.prev){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}}var l,c=t.indentUnit,u={"break":!0,"case":!0,chan:!0,"const":!0,"continue":!0,"default":!0,defer:!0,"else":!0,fallthrough:!0,"for":!0,func:!0,go:!0,"goto":!0,"if":!0,"import":!0,"interface":!0,map:!0,"package":!0,range:!0,"return":!0,select:!0,struct:!0,"switch":!0,type:!0,"var":!0,bool:!0,"byte":!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,"int":!0,uint:!0,uintptr:!0,error:!0,rune:!0},d={"true":!0,"false":!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,"delete":!0,imag:!0,len:!0,make:!0,"new":!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},f=/[+\-*&^%:=<>!|\/]/
return{startState:function(e){return{tokenize:null,context:new o((e||0)-c,0,"top",(!1)),indented:0,startOfLine:!0}},token:function(e,t){var r=t.context
if(e.sol()&&(null==r.align&&(r.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"case"==r.type&&(r.type="}")),e.eatSpace())return null
l=null
var i=(t.tokenize||n)(e,t)
return"comment"==i?i:(null==r.align&&(r.align=!0),"{"==l?a(t,e.column(),"}"):"["==l?a(t,e.column(),"]"):"("==l?a(t,e.column(),")"):"case"==l?r.type="case":"}"==l&&"}"==r.type?s(t):l==r.type&&s(t),t.startOfLine=!1,i)},indent:function(t,r){if(t.tokenize!=n&&null!=t.tokenize)return e.Pass
var i=t.context,o=r&&r.charAt(0)
if("case"==i.type&&/^(?:case|default)\b/.test(r))return t.context.type="}",i.indented
var a=o==i.type
return i.align?i.column+(a?0:1):i.indented+(a?0:c)},electricChars:"{}):",closeBrackets:"()[]{}''\"\"``",fold:"brace",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),e.defineMIME("text/x-go","go")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("groovy",function(t){function n(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}function r(e,t){var n=e.next()
if('"'==n||"'"==n)return i(n,e,t)
if(/[\[\]{}\(\),;\:\.]/.test(n))return d=n,null
if(/\d/.test(n))return e.eatWhile(/[\w\.]/),e.eat(/eE/)&&(e.eat(/\+\-/),e.eatWhile(/\d/)),"number"
if("/"==n){if(e.eat("*"))return t.tokenize.push(a),a(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"
if(s(t.lastToken,!1))return i(n,e,t)}if("-"==n&&e.eat(">"))return d="->",null
if(/[+\-*&%=<>!?|\/~]/.test(n))return e.eatWhile(/[+\-*&%=<>|~]/),"operator"
if(e.eatWhile(/[\w\$_]/),"@"==n)return e.eatWhile(/[\w\$_\.]/),"meta"
if("."==t.lastToken)return"property"
if(e.eat(":"))return d="proplabel","property"
var r=e.current()
return m.propertyIsEnumerable(r)?"atom":f.propertyIsEnumerable(r)?(p.propertyIsEnumerable(r)?d="newstatement":h.propertyIsEnumerable(r)&&(d="standalone"),"keyword"):"variable"}function i(e,t,n){function r(t,n){for(var r,a=!1,s=!i;null!=(r=t.next());){if(r==e&&!a){if(!i)break
if(t.match(e+e)){s=!0
break}}if('"'==e&&"$"==r&&!a&&t.eat("{"))return n.tokenize.push(o()),"string"
a=!a&&"\\"==r}return s&&n.tokenize.pop(),"string"}var i=!1
if("/"!=e&&t.eat(e)){if(!t.eat(e))return"string"
i=!0}return n.tokenize.push(r),r(t,n)}function o(){function e(e,n){if("}"==e.peek()){if(t--,0==t)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](e,n)}else"{"==e.peek()&&t++
return r(e,n)}var t=1
return e.isBase=!0,e}function a(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize.pop()
break}r="*"==n}return"comment"}function s(e,t){return!e||"operator"==e||"->"==e||/[\.\[\{\(,;:]/.test(e)||"newstatement"==e||"keyword"==e||"proplabel"==e||"standalone"==e&&!t}function l(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function c(e,t,n){return e.context=new l(e.indented,t,n,null,e.context)}function u(e){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}var d,f=n("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while"),p=n("catch class def do else enum finally for if interface switch trait try while"),h=n("return break continue"),m=n("null true false this")
return r.isBase=!0,{startState:function(e){return{tokenize:[r],context:new l((e||0)-t.indentUnit,0,"top",(!1)),indented:0,startOfLine:!0,lastToken:null}},token:function(e,t){var n=t.context
if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"statement"!=n.type||s(t.lastToken,!0)||(u(t),n=t.context)),e.eatSpace())return null
d=null
var r=t.tokenize[t.tokenize.length-1](e,t)
if("comment"==r)return r
if(null==n.align&&(n.align=!0),";"!=d&&":"!=d||"statement"!=n.type)if("->"==d&&"statement"==n.type&&"}"==n.prev.type)u(t),t.context.align=!1
else if("{"==d)c(t,e.column(),"}")
else if("["==d)c(t,e.column(),"]")
else if("("==d)c(t,e.column(),")")
else if("}"==d){for(;"statement"==n.type;)n=u(t)
for("}"==n.type&&(n=u(t));"statement"==n.type;)n=u(t)}else d==n.type?u(t):("}"==n.type||"top"==n.type||"statement"==n.type&&"newstatement"==d)&&c(t,e.column(),"statement")
else u(t)
return t.startOfLine=!1,t.lastToken=d||r,r},indent:function(n,r){if(!n.tokenize[n.tokenize.length-1].isBase)return e.Pass
var i=r&&r.charAt(0),o=n.context
"statement"!=o.type||s(n.lastToken,!0)||(o=o.prev)
var a=i==o.type
return"statement"==o.type?o.indented+("{"==i?0:t.indentUnit):o.align?o.column+(a?0:1):o.indented+(a?0:t.indentUnit)},electricChars:"{}",closeBrackets:{triples:"'\""},fold:"brace",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),e.defineMIME("text/x-groovy","groovy")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("haskell",function(e,t){function n(e,t,n){return t(n),n(e,t)}function r(e,t){if(e.eatWhile(m))return null
var r=e.next()
if(h.test(r)){if("{"==r&&e.eat("-")){var a="comment"
return e.eat("#")&&(a="meta"),n(e,t,i(a,1))}return null}if("'"==r)return e.eat("\\")?e.next():e.next(),e.eat("'")?"string":"string error"
if('"'==r)return n(e,t,o)
if(l.test(r))return e.eatWhile(f),e.eat(".")?"qualifier":"variable-2"
if(s.test(r))return e.eatWhile(f),"variable"
if(c.test(r)){if("0"==r){if(e.eat(/[xX]/))return e.eatWhile(u),"integer"
if(e.eat(/[oO]/))return e.eatWhile(d),"number"}e.eatWhile(c)
var a="number"
return e.match(/^\.\d+/)&&(a="number"),e.eat(/[eE]/)&&(a="number",e.eat(/[-+]/),e.eatWhile(c)),a}if("."==r&&e.eat("."))return"keyword"
if(p.test(r)){if("-"==r&&e.eat(/-/)&&(e.eatWhile(/-/),!e.eat(p)))return e.skipToEnd(),"comment"
var a="variable"
return":"==r&&(a="variable-2"),e.eatWhile(p),a}return"error"}function i(e,t){return 0==t?r:function(n,o){for(var a=t;!n.eol();){var s=n.next()
if("{"==s&&n.eat("-"))++a
else if("-"==s&&n.eat("}")&&(--a,0==a))return o(r),e}return o(i(e,a)),e}}function o(e,t){for(;!e.eol();){var n=e.next()
if('"'==n)return t(r),"string"
if("\\"==n){if(e.eol()||e.eat(m))return t(a),"string"
e.eat("&")||e.next()}}return t(r),"string error"}function a(e,t){return e.eat("\\")?n(e,t,o):(e.next(),t(r),"error")}var s=/[a-z_]/,l=/[A-Z]/,c=/\d/,u=/[0-9A-Fa-f]/,d=/[0-7]/,f=/[a-z_A-Z0-9'\xa1-\uffff]/,p=/[-!#$%&*+.\/<=>?@\\^|~:]/,h=/[(),;[\]`{}]/,m=/[ \t\v\f]/,g=function(){function e(e){return function(){for(var t=0;t<arguments.length;t++)n[arguments[t]]=e}}var n={}
e("keyword")("case","class","data","default","deriving","do","else","foreign","if","import","in","infix","infixl","infixr","instance","let","module","newtype","of","then","type","where","_"),e("keyword")("..",":","::","=","\\","<-","->","@","~","=>"),e("builtin")("!!","$!","$","&&","+","++","-",".","/","/=","<","<*","<=","<$>","<*>","=<<","==",">",">=",">>",">>=","^","^^","||","*","*>","**"),e("builtin")("Applicative","Bool","Bounded","Char","Double","EQ","Either","Enum","Eq","False","FilePath","Float","Floating","Fractional","Functor","GT","IO","IOError","Int","Integer","Integral","Just","LT","Left","Maybe","Monad","Nothing","Num","Ord","Ordering","Rational","Read","ReadS","Real","RealFloat","RealFrac","Right","Show","ShowS","String","True"),e("builtin")("abs","acos","acosh","all","and","any","appendFile","asTypeOf","asin","asinh","atan","atan2","atanh","break","catch","ceiling","compare","concat","concatMap","const","cos","cosh","curry","cycle","decodeFloat","div","divMod","drop","dropWhile","either","elem","encodeFloat","enumFrom","enumFromThen","enumFromThenTo","enumFromTo","error","even","exp","exponent","fail","filter","flip","floatDigits","floatRadix","floatRange","floor","fmap","foldl","foldl1","foldr","foldr1","fromEnum","fromInteger","fromIntegral","fromRational","fst","gcd","getChar","getContents","getLine","head","id","init","interact","ioError","isDenormalized","isIEEE","isInfinite","isNaN","isNegativeZero","iterate","last","lcm","length","lex","lines","log","logBase","lookup","map","mapM","mapM_","max","maxBound","maximum","maybe","min","minBound","minimum","mod","negate","not","notElem","null","odd","or","otherwise","pi","pred","print","product","properFraction","pure","putChar","putStr","putStrLn","quot","quotRem","read","readFile","readIO","readList","readLn","readParen","reads","readsPrec","realToFrac","recip","rem","repeat","replicate","return","reverse","round","scaleFloat","scanl","scanl1","scanr","scanr1","seq","sequence","sequence_","show","showChar","showList","showParen","showString","shows","showsPrec","significand","signum","sin","sinh","snd","span","splitAt","sqrt","subtract","succ","sum","tail","take","takeWhile","tan","tanh","toEnum","toInteger","toRational","truncate","uncurry","undefined","unlines","until","unwords","unzip","unzip3","userError","words","writeFile","zip","zip3","zipWith","zipWith3")
var r=t.overrideKeywords
if(r)for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])
return n}()
return{startState:function(){return{f:r}},copyState:function(e){return{f:e.f}},token:function(e,t){var n=t.f(e,function(e){t.f=e}),r=e.current()
return g.hasOwnProperty(r)?g[r]:n},blockCommentStart:"{-",blockCommentEnd:"-}",lineComment:"--"}}),e.defineMIME("text/x-haskell","haskell")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},n={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1}
e.defineMode("xml",function(r,i){function o(e,t){function n(n){return t.tokenize=n,n(e,t)}var r=e.next()
if("<"==r)return e.eat("!")?e.eat("[")?e.match("CDATA[")?n(l("atom","]]>")):null:e.match("--")?n(l("comment","-->")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),n(c(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=l("meta","?>"),"meta"):(M=e.eat("/")?"closeTag":"openTag",t.tokenize=a,"tag bracket")
if("&"==r){var i
return i=e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"),i?"atom":"error"}return e.eatWhile(/[^&<]/),null}function a(e,t){var n=e.next()
if(">"==n||"/"==n&&e.eat(">"))return t.tokenize=o,M=">"==n?"endTag":"selfcloseTag","tag bracket"
if("="==n)return M="equals",null
if("<"==n){t.tokenize=o,t.state=p,t.tagName=t.tagStart=null
var r=t.tokenize(e,t)
return r?r+" tag error":"tag error"}return/[\'\"]/.test(n)?(t.tokenize=s(n),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function s(e){var t=function(t,n){for(;!t.eol();)if(t.next()==e){n.tokenize=a
break}return"string"}
return t.isInAttribute=!0,t}function l(e,t){return function(n,r){for(;!n.eol();){if(n.match(t)){r.tokenize=o
break}n.next()}return e}}function c(e){return function(t,n){for(var r;null!=(r=t.next());){if("<"==r)return n.tokenize=c(e+1),n.tokenize(t,n)
if(">"==r){if(1==e){n.tokenize=o
break}return n.tokenize=c(e-1),n.tokenize(t,n)}}return"meta"}}function u(e,t,n){this.prev=e.context,this.tagName=t,this.indent=e.indented,this.startOfLine=n,(_.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function d(e){e.context&&(e.context=e.context.prev)}function f(e,t){for(var n;;){if(!e.context)return
if(n=e.context.tagName,!_.contextGrabbers.hasOwnProperty(n)||!_.contextGrabbers[n].hasOwnProperty(t))return
d(e)}}function p(e,t,n){return"openTag"==e?(n.tagStart=t.column(),h):"closeTag"==e?m:p}function h(e,t,n){return"word"==e?(n.tagName=t.current(),L="tag",y):_.allowMissingTagName&&"endTag"==e?(L="tag bracket",y(e,t,n)):(L="error",h)}function m(e,t,n){if("word"==e){var r=t.current()
return n.context&&n.context.tagName!=r&&_.implicitlyClosed.hasOwnProperty(n.context.tagName)&&d(n),n.context&&n.context.tagName==r||_.matchClosing===!1?(L="tag",g):(L="tag error",v)}return _.allowMissingTagName&&"endTag"==e?(L="tag bracket",g(e,t,n)):(L="error",v)}function g(e,t,n){return"endTag"!=e?(L="error",g):(d(n),p)}function v(e,t,n){return L="error",g(e,t,n)}function y(e,t,n){if("word"==e)return L="attribute",b
if("endTag"==e||"selfcloseTag"==e){var r=n.tagName,i=n.tagStart
return n.tagName=n.tagStart=null,"selfcloseTag"==e||_.autoSelfClosers.hasOwnProperty(r)?f(n,r):(f(n,r),n.context=new u(n,r,i==n.indented)),p}return L="error",y}function b(e,t,n){return"equals"==e?k:(_.allowMissing||(L="error"),y(e,t,n))}function k(e,t,n){return"string"==e?x:"word"==e&&_.allowUnquoted?(L="string",y):(L="error",y(e,t,n))}function x(e,t,n){return"string"==e?x:y(e,t,n)}var w=r.indentUnit,_={},C=i.htmlMode?t:n
for(var S in C)_[S]=C[S]
for(var S in i)_[S]=i[S]
var M,L
return o.isInText=!0,{startState:function(e){var t={tokenize:o,state:p,indented:e||0,tagName:null,tagStart:null,context:null}
return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null
M=null
var n=t.tokenize(e,t)
return(n||M)&&"comment"!=n&&(L=null,t.state=t.state(M||n,e,t),L&&(n="error"==L?n+" error":L)),n},indent:function(t,n,r){var i=t.context
if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+w
if(i&&i.noIndent)return e.Pass
if(t.tokenize!=a&&t.tokenize!=o)return r?r.match(/^(\s*)/)[0].length:0
if(t.tagName)return _.multilineTagIndentPastTag!==!1?t.tagStart+t.tagName.length+2:t.tagStart+w*(_.multilineTagIndentFactor||1)
if(_.alignCDATA&&/<!\[CDATA\[/.test(n))return 0
var s=n&&/^<(\/)?([\w_:\.-]*)/.exec(n)
if(s&&s[1])for(;i;){if(i.tagName==s[2]){i=i.prev
break}if(!_.implicitlyClosed.hasOwnProperty(i.tagName))break
i=i.prev}else if(s)for(;i;){var l=_.contextGrabbers[i.tagName]
if(!l||!l.hasOwnProperty(s[2]))break
i=i.prev}for(;i&&i.prev&&!i.startOfLine;)i=i.prev
return i?i.indent+w:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:_.htmlMode?"html":"xml",helperType:_.htmlMode?"html":"xml",skipAttribute:function(e){e.state==k&&(e.state=y)},xmlCurrentTag:function(e){return e.tagName?{name:e.tagName,close:"closeTag"==e.type}:null},xmlCurrentContext:function(e){for(var t=[],n=e.context;n;n=n.prev)n.tagName&&t.push(n.tagName)
return t.reverse()}}}),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript"),require("../css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript","../css/css"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,n){var r=e.current(),i=r.search(t)
return i>-1?e.backUp(r.length-i):r.match(/<\/?$/)&&(e.backUp(r.length),e.match(t,!1)||e.match(r)),n}function n(e){var t=l[e]
return t?t:l[e]=new RegExp("\\s+"+e+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*")}function r(e,t){var r=e.match(n(t))
return r?/^\s*(.*?)\s*$/.exec(r[2])[1]:""}function i(e,t){return new RegExp((t?"^":"")+"</s*"+e+"s*>","i")}function o(e,t){for(var n in e)for(var r=t[n]||(t[n]=[]),i=e[n],o=i.length-1;o>=0;o--)r.unshift(i[o])}function a(e,t){for(var n=0;n<e.length;n++){var i=e[n]
if(!i[0]||i[1].test(r(t,i[0])))return i[2]}}var s={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]},l={}
e.defineMode("htmlmixed",function(n,r){function l(r,o){var s,d=c.token(r,o.htmlState),f=/\btag\b/.test(d)
if(f&&!/[<>\s\/]/.test(r.current())&&(s=o.htmlState.tagName&&o.htmlState.tagName.toLowerCase())&&u.hasOwnProperty(s))o.inTag=s+" "
else if(o.inTag&&f&&/>$/.test(r.current())){var p=/^([\S]+) (.*)/.exec(o.inTag)
o.inTag=null
var h=">"==r.current()&&a(u[p[1]],p[2]),m=e.getMode(n,h),g=i(p[1],!0),v=i(p[1],!1)
o.token=function(e,n){return e.match(g,!1)?(n.token=l,n.localState=n.localMode=null,null):t(e,v,n.localMode.token(e,n.localState))},o.localMode=m,o.localState=e.startState(m,c.indent(o.htmlState,"",""))}else o.inTag&&(o.inTag+=r.current(),r.eol()&&(o.inTag+=" "))
return d}var c=e.getMode(n,{name:"xml",htmlMode:!0,multilineTagIndentFactor:r.multilineTagIndentFactor,multilineTagIndentPastTag:r.multilineTagIndentPastTag}),u={},d=r&&r.tags,f=r&&r.scriptTypes
if(o(s,u),d&&o(d,u),f)for(var p=f.length-1;p>=0;p--)u.script.unshift(["type",f[p].matches,f[p].mode])
return{startState:function(){var t=e.startState(c)
return{token:l,inTag:null,localMode:null,localState:null,htmlState:t}},copyState:function(t){var n
return t.localState&&(n=e.copyState(t.localMode,t.localState)),{token:t.token,inTag:t.inTag,localMode:t.localMode,localState:n,htmlState:e.copyState(c,t.htmlState)}},token:function(e,t){return t.token(e,t)},indent:function(t,n,r){return!t.localMode||/^\s*<\//.test(n)?c.indent(t.htmlState,n,r):t.localMode.indent?t.localMode.indent(t.localState,n,r):e.Pass},innerMode:function(e){return{state:e.localState||e.htmlState,mode:e.localMode||c}}}},"xml","javascript","css"),e.defineMIME("text/html","htmlmixed")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../../addon/mode/multiplex")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../../addon/mode/multiplex"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("htmlembedded",function(t,n){var r=n.closeComment||"--%>"
return e.multiplexingMode(e.getMode(t,"htmlmixed"),{open:n.openComment||"<%--",close:r,delimStyle:"comment",mode:{token:function(e){return e.skipTo(r)||e.skipToEnd(),"comment"}}},{open:n.open||n.scriptStartRegex||"<%",close:n.close||n.scriptEndRegex||"%>",mode:e.getMode(t,n.scriptingModeSpec)})},"htmlmixed"),e.defineMIME("application/x-ejs",{name:"htmlembedded",scriptingModeSpec:"javascript"}),e.defineMIME("application/x-aspx",{name:"htmlembedded",scriptingModeSpec:"text/x-csharp"}),e.defineMIME("application/x-jsp",{name:"htmlembedded",scriptingModeSpec:"text/x-java"}),e.defineMIME("application/x-erb",{name:"htmlembedded",scriptingModeSpec:"ruby"})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("javascript",function(t,n){function r(e){for(var t,n=!1,r=!1;null!=(t=e.next());){if(!n){if("/"==t&&!r)return
"["==t?r=!0:r&&"]"==t&&(r=!1)}n=!n&&"\\"==t}}function i(e,t,n){return je=e,Be=n,t}function o(e,t){var n=e.next()
if('"'==n||"'"==n)return t.tokenize=a(n),t.tokenize(e,t)
if("."==n&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return i("number","number")
if("."==n&&e.match(".."))return i("spread","meta")
if(/[\[\]{}\(\),;\:\.]/.test(n))return i(n)
if("="==n&&e.eat(">"))return i("=>","operator")
if("0"==n&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return i("number","number")
if(/\d/.test(n))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),i("number","number")
if("/"==n)return e.eat("*")?(t.tokenize=s,s(e,t)):e.eat("/")?(e.skipToEnd(),i("comment","comment")):Re(e,t,1)?(r(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),i("regexp","string-2")):(e.eat("="),i("operator","operator",e.current()))
if("`"==n)return t.tokenize=l,l(e,t)
if("#"==n&&"!"==e.peek())return e.skipToEnd(),i("meta","meta")
if("#"==n&&e.eatWhile(Ve))return i("variable","property")
if("<"==n&&e.match("!--")||"-"==n&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),i("comment","comment")
if(Ze.test(n))return">"==n&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=n&&"="!=n||e.eat("="):/[<>*+\-]/.test(n)&&(e.eat(n),">"==n&&e.eat(n))),"?"==n&&e.eat(".")?i("."):i("operator","operator",e.current())
if(Ve.test(n)){e.eatWhile(Ve)
var o=e.current()
if("."!=t.lastType){if(Ge.propertyIsEnumerable(o)){var c=Ge[o]
return i(c.type,c.style,o)}if("async"==o&&e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return i("async","keyword",o)}return i("variable","variable",o)}}function a(e){return function(t,n){var r,a=!1
if($e&&"@"==t.peek()&&t.match(Xe))return n.tokenize=o,i("jsonld-keyword","meta")
for(;null!=(r=t.next())&&(r!=e||a);)a=!a&&"\\"==r
return a||(n.tokenize=o),i("string","string")}}function s(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=o
break}r="*"==n}return i("comment","comment")}function l(e,t){for(var n,r=!1;null!=(n=e.next());){if(!r&&("`"==n||"$"==n&&e.eat("{"))){t.tokenize=o
break}r=!r&&"\\"==n}return i("quasi","string-2",e.current())}function c(e,t){t.fatArrowAt&&(t.fatArrowAt=null)
var n=e.string.indexOf("=>",e.start)
if(!(n<0)){if(Ke){var r=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,n))
r&&(n=r.index)}for(var i=0,o=!1,a=n-1;a>=0;--a){var s=e.string.charAt(a),l=Qe.indexOf(s)
if(l>=0&&l<3){if(!i){++a
break}if(0==--i){"("==s&&(o=!0)
break}}else if(l>=3&&l<6)++i
else if(Ve.test(s))o=!0
else if(/["'\/`]/.test(s))for(;;--a){if(0==a)return
var c=e.string.charAt(a-1)
if(c==s&&"\\"!=e.string.charAt(a-2)){a--
break}}else if(o&&!i){++a
break}}o&&!i&&(t.fatArrowAt=a)}}function u(e,t,n,r,i,o){this.indented=e,this.column=t,this.type=n,this.prev=i,this.info=o,null!=r&&(this.align=r)}function d(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0
for(var r=e.context;r;r=r.prev)for(var n=r.vars;n;n=n.next)if(n.name==t)return!0}function f(e,t,n,r,i){var o=e.cc
for(Je.state=e,Je.stream=i,Je.marked=null,Je.cc=o,Je.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){var a=o.length?o.pop():Ue?A:L
if(a(n,r)){for(;o.length&&o[o.length-1].lex;)o.pop()()
return Je.marked?Je.marked:"variable"==n&&d(e,r)?"variable-2":t}}}function p(){for(var e=arguments.length-1;e>=0;e--)Je.cc.push(arguments[e])}function h(){return p.apply(null,arguments),!0}function m(e,t){for(var n=t;n;n=n.next)if(n.name==e)return!0
return!1}function g(e){var t=Je.state
if(Je.marked="def",t.context)if("var"==t.lexical.info&&t.context&&t.context.block){var r=v(e,t.context)
if(null!=r)return void(t.context=r)}else if(!m(e,t.localVars))return void(t.localVars=new k(e,t.localVars))
n.globalVars&&!m(e,t.globalVars)&&(t.globalVars=new k(e,t.globalVars))}function v(e,t){if(t){if(t.block){var n=v(e,t.prev)
return n?n==t.prev?t:new b(n,t.vars,(!0)):null}return m(e,t.vars)?t:new b(t.prev,new k(e,t.vars),(!1))}return null}function y(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function b(e,t,n){this.prev=e,this.vars=t,this.block=n}function k(e,t){this.name=e,this.next=t}function x(){Je.state.context=new b(Je.state.context,Je.state.localVars,(!1)),Je.state.localVars=et}function w(){Je.state.context=new b(Je.state.context,Je.state.localVars,(!0)),Je.state.localVars=null}function _(){Je.state.localVars=Je.state.context.vars,Je.state.context=Je.state.context.prev}function C(e,t){var n=function(){var n=Je.state,r=n.indented
if("stat"==n.lexical.type)r=n.lexical.indented
else for(var i=n.lexical;i&&")"==i.type&&i.align;i=i.prev)r=i.indented
n.lexical=new u(r,Je.stream.column(),e,null,n.lexical,t)}
return n.lex=!0,n}function S(){var e=Je.state
e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function M(e){function t(n){return n==e?h():";"==e||"}"==n||")"==n||"]"==n?p():h(t)}return t}function L(e,t){return"var"==e?h(C("vardef",t),ce,M(";"),S):"keyword a"==e?h(C("form"),O,L,S):"keyword b"==e?h(C("form"),L,S):"keyword d"==e?Je.stream.match(/^\s*$/,!1)?h():h(C("stat"),N,M(";"),S):"debugger"==e?h(M(";")):"{"==e?h(C("}"),w,X,S,_):";"==e?h():"if"==e?("else"==Je.state.lexical.info&&Je.state.cc[Je.state.cc.length-1]==S&&Je.state.cc.pop()(),h(C("form"),O,L,S,me)):"function"==e?h(be):"for"==e?h(C("form"),ge,L,S):"class"==e||Ke&&"interface"==t?(Je.marked="keyword",h(C("form","class"==e?e:t),Ce,S)):"variable"==e?Ke&&"declare"==t?(Je.marked="keyword",h(L)):Ke&&("module"==t||"enum"==t||"type"==t)&&Je.stream.match(/^\s*\w/,!1)?(Je.marked="keyword","enum"==t?h(Ie):"type"==t?h(xe,M("operator"),te,M(";")):h(C("form"),ue,M("{"),C("}"),X,S,S)):Ke&&"namespace"==t?(Je.marked="keyword",h(C("form"),A,L,S)):Ke&&"abstract"==t?(Je.marked="keyword",h(L)):h(C("stat"),H):"switch"==e?h(C("form"),O,M("{"),C("}","switch"),w,X,S,S,_):"case"==e?h(A,M(":")):"default"==e?h(M(":")):"catch"==e?h(C("form"),x,T,L,S,_):"export"==e?h(C("stat"),Te,S):"import"==e?h(C("stat"),Ee,S):"async"==e?h(L):"@"==t?h(A,L):p(C("stat"),A,M(";"),S)}function T(e){if("("==e)return h(we,M(")"))}function A(e,t){return z(e,t,!1)}function E(e,t){return z(e,t,!0)}function O(e){return"("!=e?p():h(C(")"),N,M(")"),S)}function z(e,t,n){if(Je.state.fatArrowAt==Je.stream.start){var r=n?R:P
if("("==e)return h(x,C(")"),G(we,")"),S,M("=>"),r,_)
if("variable"==e)return p(x,ue,M("=>"),r,_)}var i=n?F:q
return Ye.hasOwnProperty(e)?h(i):"function"==e?h(be,i):"class"==e||Ke&&"interface"==t?(Je.marked="keyword",h(C("form"),_e,S)):"keyword c"==e||"async"==e?h(n?E:A):"("==e?h(C(")"),N,M(")"),S,i):"operator"==e||"spread"==e?h(n?E:A):"["==e?h(C("]"),Fe,S,i):"{"==e?Z(U,"}",null,i):"quasi"==e?p(I,i):"new"==e?h(j(n)):"import"==e?h(A):h()}function N(e){return e.match(/[;\}\)\],]/)?p():p(A)}function q(e,t){return","==e?h(N):F(e,t,!1)}function F(e,t,n){var r=0==n?q:F,i=0==n?A:E
return"=>"==e?h(x,n?R:P,_):"operator"==e?/\+\+|--/.test(t)||Ke&&"!"==t?h(r):Ke&&"<"==t&&Je.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?h(C(">"),G(te,">"),S,r):"?"==t?h(A,M(":"),i):h(i):"quasi"==e?p(I,r):";"!=e?"("==e?Z(E,")","call",r):"."==e?h($,r):"["==e?h(C("]"),N,M("]"),S,r):Ke&&"as"==t?(Je.marked="keyword",h(te,r)):"regexp"==e?(Je.state.lastType=Je.marked="operator",Je.stream.backUp(Je.stream.pos-Je.stream.start-1),h(i)):void 0:void 0}function I(e,t){return"quasi"!=e?p():"${"!=t.slice(t.length-2)?h(I):h(A,D)}function D(e){if("}"==e)return Je.marked="string-2",Je.state.tokenize=l,h(I)}function P(e){return c(Je.stream,Je.state),p("{"==e?L:A)}function R(e){return c(Je.stream,Je.state),p("{"==e?L:E)}function j(e){return function(t){return"."==t?h(e?W:B):"variable"==t&&Ke?h(ae,e?F:q):p(e?E:A)}}function B(e,t){if("target"==t)return Je.marked="keyword",h(q)}function W(e,t){if("target"==t)return Je.marked="keyword",h(F)}function H(e){return":"==e?h(S,L):p(q,M(";"),S)}function $(e){if("variable"==e)return Je.marked="property",h()}function U(e,t){if("async"==e)return Je.marked="property",h(U)
if("variable"==e||"keyword"==Je.style){if(Je.marked="property","get"==t||"set"==t)return h(K)
var n
return Ke&&Je.state.fatArrowAt==Je.stream.start&&(n=Je.stream.match(/^\s*:\s*/,!1))&&(Je.state.fatArrowAt=Je.stream.pos+n[0].length),h(V)}return"number"==e||"string"==e?(Je.marked=$e?"property":Je.style+" property",h(V)):"jsonld-keyword"==e?h(V):Ke&&y(t)?(Je.marked="keyword",h(U)):"["==e?h(A,Q,M("]"),V):"spread"==e?h(E,V):"*"==t?(Je.marked="keyword",h(U)):":"==e?p(V):void 0}function K(e){return"variable"!=e?p(V):(Je.marked="property",h(be))}function V(e){return":"==e?h(E):"("==e?p(be):void 0}function G(e,t,n){function r(i,o){if(n?n.indexOf(i)>-1:","==i){var a=Je.state.lexical
return"call"==a.info&&(a.pos=(a.pos||0)+1),h(function(n,r){return n==t||r==t?p():p(e)},r)}return i==t||o==t?h():n&&n.indexOf(";")>-1?p(e):h(M(t))}return function(n,i){return n==t||i==t?h():p(e,r)}}function Z(e,t,n){for(var r=3;r<arguments.length;r++)Je.cc.push(arguments[r])
return h(C(t,n),G(e,t),S)}function X(e){return"}"==e?h():p(L,X)}function Q(e,t){if(Ke){if(":"==e)return h(te)
if("?"==t)return h(Q)}}function Y(e,t){if(Ke&&(":"==e||"in"==t))return h(te)}function J(e){if(Ke&&":"==e)return Je.stream.match(/^\s*\w+\s+is\b/,!1)?h(A,ee,te):h(te)}function ee(e,t){if("is"==t)return Je.marked="keyword",h()}function te(e,t){return"keyof"==t||"typeof"==t||"infer"==t?(Je.marked="keyword",h("typeof"==t?E:te)):"variable"==e||"void"==t?(Je.marked="type",h(oe)):"|"==t||"&"==t?h(te):"string"==e||"number"==e||"atom"==e?h(oe):"["==e?h(C("]"),G(te,"]",","),S,oe):"{"==e?h(C("}"),G(re,"}",",;"),S,oe):"("==e?h(G(ie,")"),ne,oe):"<"==e?h(G(te,">"),te):void 0}function ne(e){if("=>"==e)return h(te)}function re(e,t){return"variable"==e||"keyword"==Je.style?(Je.marked="property",h(re)):"?"==t||"number"==e||"string"==e?h(re):":"==e?h(te):"["==e?h(M("variable"),Y,M("]"),re):"("==e?p(ke,re):void 0}function ie(e,t){return"variable"==e&&Je.stream.match(/^\s*[?:]/,!1)||"?"==t?h(ie):":"==e?h(te):"spread"==e?h(ie):p(te)}function oe(e,t){return"<"==t?h(C(">"),G(te,">"),S,oe):"|"==t||"."==e||"&"==t?h(te):"["==e?h(te,M("]"),oe):"extends"==t||"implements"==t?(Je.marked="keyword",h(te)):"?"==t?h(te,M(":"),te):void 0}function ae(e,t){if("<"==t)return h(C(">"),G(te,">"),S,oe)}function se(){return p(te,le)}function le(e,t){if("="==t)return h(te)}function ce(e,t){return"enum"==t?(Je.marked="keyword",h(Ie)):p(ue,Q,pe,he)}function ue(e,t){return Ke&&y(t)?(Je.marked="keyword",h(ue)):"variable"==e?(g(t),h()):"spread"==e?h(ue):"["==e?Z(fe,"]"):"{"==e?Z(de,"}"):void 0}function de(e,t){return"variable"!=e||Je.stream.match(/^\s*:/,!1)?("variable"==e&&(Je.marked="property"),"spread"==e?h(ue):"}"==e?p():"["==e?h(A,M("]"),M(":"),de):h(M(":"),ue,pe)):(g(t),h(pe))}function fe(){return p(ue,pe)}function pe(e,t){if("="==t)return h(E)}function he(e){if(","==e)return h(ce)}function me(e,t){if("keyword b"==e&&"else"==t)return h(C("form","else"),L,S)}function ge(e,t){return"await"==t?h(ge):"("==e?h(C(")"),ve,S):void 0}function ve(e){return"var"==e?h(ce,ye):"variable"==e?h(ye):p(ye)}function ye(e,t){return")"==e?h():";"==e?h(ye):"in"==t||"of"==t?(Je.marked="keyword",h(A,ye)):p(A,ye)}function be(e,t){return"*"==t?(Je.marked="keyword",h(be)):"variable"==e?(g(t),h(be)):"("==e?h(x,C(")"),G(we,")"),S,J,L,_):Ke&&"<"==t?h(C(">"),G(se,">"),S,be):void 0}function ke(e,t){return"*"==t?(Je.marked="keyword",h(ke)):"variable"==e?(g(t),h(ke)):"("==e?h(x,C(")"),G(we,")"),S,J,_):Ke&&"<"==t?h(C(">"),G(se,">"),S,ke):void 0}function xe(e,t){return"keyword"==e||"variable"==e?(Je.marked="type",h(xe)):"<"==t?h(C(">"),G(se,">"),S):void 0}function we(e,t){return"@"==t&&h(A,we),"spread"==e?h(we):Ke&&y(t)?(Je.marked="keyword",h(we)):Ke&&"this"==e?h(Q,pe):p(ue,Q,pe)}function _e(e,t){return"variable"==e?Ce(e,t):Se(e,t)}function Ce(e,t){if("variable"==e)return g(t),h(Se)}function Se(e,t){return"<"==t?h(C(">"),G(se,">"),S,Se):"extends"==t||"implements"==t||Ke&&","==e?("implements"==t&&(Je.marked="keyword"),h(Ke?te:A,Se)):"{"==e?h(C("}"),Me,S):void 0}function Me(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||Ke&&y(t))&&Je.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(Je.marked="keyword",h(Me)):"variable"==e||"keyword"==Je.style?(Je.marked="property",h(Le,Me)):"number"==e||"string"==e?h(Le,Me):"["==e?h(A,Q,M("]"),Le,Me):"*"==t?(Je.marked="keyword",h(Me)):Ke&&"("==e?p(ke,Me):";"==e||","==e?h(Me):"}"==e?h():"@"==t?h(A,Me):void 0}function Le(e,t){if("?"==t)return h(Le)
if(":"==e)return h(te,pe)
if("="==t)return h(E)
var n=Je.state.lexical.prev,r=n&&"interface"==n.info
return p(r?ke:be)}function Te(e,t){return"*"==t?(Je.marked="keyword",h(qe,M(";"))):"default"==t?(Je.marked="keyword",h(A,M(";"))):"{"==e?h(G(Ae,"}"),qe,M(";")):p(L)}function Ae(e,t){return"as"==t?(Je.marked="keyword",h(M("variable"))):"variable"==e?p(E,Ae):void 0}function Ee(e){return"string"==e?h():"("==e?p(A):p(Oe,ze,qe)}function Oe(e,t){return"{"==e?Z(Oe,"}"):("variable"==e&&g(t),"*"==t&&(Je.marked="keyword"),h(Ne))}function ze(e){if(","==e)return h(Oe,ze)}function Ne(e,t){if("as"==t)return Je.marked="keyword",h(Oe)}function qe(e,t){if("from"==t)return Je.marked="keyword",h(A)}function Fe(e){return"]"==e?h():p(G(E,"]"))}function Ie(){return p(C("form"),ue,M("{"),C("}"),G(De,"}"),S,S)}function De(){return p(ue,pe)}function Pe(e,t){return"operator"==e.lastType||","==e.lastType||Ze.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}function Re(e,t,n){return t.tokenize==o&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(n||0)))}var je,Be,We=t.indentUnit,He=n.statementIndent,$e=n.jsonld,Ue=n.json||$e,Ke=n.typescript,Ve=n.wordCharacters||/[\w$\xa1-\uffff]/,Ge=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),n=e("keyword b"),r=e("keyword c"),i=e("keyword d"),o=e("operator"),a={type:"atom",style:"atom"}
return{"if":e("if"),"while":t,"with":t,"else":n,"do":n,"try":n,"finally":n,"return":i,"break":i,"continue":i,"new":e("new"),"delete":r,"void":r,"throw":r,"debugger":e("debugger"),"var":e("var"),"const":e("var"),"let":e("var"),"function":e("function"),"catch":e("catch"),"for":e("for"),"switch":e("switch"),"case":e("case"),"default":e("default"),"in":o,"typeof":o,"instanceof":o,"true":a,"false":a,"null":a,undefined:a,NaN:a,Infinity:a,"this":e("this"),"class":e("class"),"super":e("atom"),"yield":r,"export":e("export"),"import":e("import"),"extends":r,await:r}}(),Ze=/[+\-*&%=<>!?|~^@]/,Xe=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,Qe="([{}])",Ye={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,"this":!0,"jsonld-keyword":!0},Je={state:null,column:null,marked:null,cc:null},et=new k("this",new k("arguments",null))
return _.lex=!0,S.lex=!0,{startState:function(e){var t={tokenize:o,lastType:"sof",cc:[],lexical:new u((e||0)-We,0,"block",(!1)),localVars:n.localVars,context:n.localVars&&new b(null,null,(!1)),indented:e||0}
return n.globalVars&&"object"==typeof n.globalVars&&(t.globalVars=n.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),c(e,t)),t.tokenize!=s&&e.eatSpace())return null
var n=t.tokenize(e,t)
return"comment"==je?n:(t.lastType="operator"!=je||"++"!=Be&&"--"!=Be?je:"incdec",f(t,n,je,Be,e))},indent:function(t,r){if(t.tokenize==s)return e.Pass
if(t.tokenize!=o)return 0
var i,a=r&&r.charAt(0),l=t.lexical
if(!/^\s*else\b/.test(r))for(var c=t.cc.length-1;c>=0;--c){var u=t.cc[c]
if(u==S)l=l.prev
else if(u!=me)break}for(;("stat"==l.type||"form"==l.type)&&("}"==a||(i=t.cc[t.cc.length-1])&&(i==q||i==F)&&!/^[,\.=+\-*:?[\(]/.test(r));)l=l.prev
He&&")"==l.type&&"stat"==l.prev.type&&(l=l.prev)
var d=l.type,f=a==d
return"vardef"==d?l.indented+("operator"==t.lastType||","==t.lastType?l.info.length+1:0):"form"==d&&"{"==a?l.indented:"form"==d?l.indented+We:"stat"==d?l.indented+(Pe(t,r)?He||We:0):"switch"!=l.info||f||0==n.doubleIndentSwitch?l.align?l.column+(f?0:1):l.indented+(f?0:We):l.indented+(/^(?:case|default)\b/.test(r)?We:2*We)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:Ue?null:"/*",blockCommentEnd:Ue?null:"*/",blockCommentContinue:Ue?null:" * ",lineComment:Ue?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:Ue?"json":"javascript",jsonldMode:$e,jsonMode:Ue,expressionAllowed:Re,skipExpression:function(e){var t=e.cc[e.cc.length-1]
t!=A&&t!=E||e.cc.pop()}}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,n,r){this.state=e,this.mode=t,this.depth=n,this.prev=r}function n(r){return new t(e.copyState(r.mode,r.state),r.mode,r.depth,r.prev&&n(r.prev))}e.defineMode("jsx",function(r,i){function o(e){var t=e.tagName
e.tagName=null
var n=c.indent(e,"","")
return e.tagName=t,n}function a(e,t){return t.context.mode==c?s(e,t,t.context):l(e,t,t.context)}function s(n,i,s){if(2==s.depth)return n.match(/^.*?\*\//)?s.depth=1:n.skipToEnd(),"comment"
if("{"==n.peek()){c.skipAttribute(s.state)
var l=o(s.state),d=s.state.context
if(d&&n.match(/^[^>]*>\s*$/,!1)){for(;d.prev&&!d.startOfLine;)d=d.prev
d.startOfLine?l-=r.indentUnit:s.prev.state.lexical&&(l=s.prev.state.lexical.indented)}else 1==s.depth&&(l+=r.indentUnit)
return i.context=new t(e.startState(u,l),u,0,i.context),null}if(1==s.depth){if("<"==n.peek())return c.skipAttribute(s.state),i.context=new t(e.startState(c,o(s.state)),c,0,i.context),null
if(n.match("//"))return n.skipToEnd(),"comment"
if(n.match("/*"))return s.depth=2,a(n,i)}var f,p=c.token(n,s.state),h=n.current()
return/\btag\b/.test(p)?/>$/.test(h)?s.state.context?s.depth=0:i.context=i.context.prev:/^</.test(h)&&(s.depth=1):!p&&(f=h.indexOf("{"))>-1&&n.backUp(h.length-f),p}function l(n,r,i){if("<"==n.peek()&&u.expressionAllowed(n,i.state))return u.skipExpression(i.state),r.context=new t(e.startState(c,u.indent(i.state,"","")),c,0,r.context),null
var o=u.token(n,i.state)
if(!o&&null!=i.depth){var a=n.current()
"{"==a?i.depth++:"}"==a&&0==--i.depth&&(r.context=r.context.prev)}return o}var c=e.getMode(r,{name:"xml",allowMissing:!0,multilineTagIndentPastTag:!1,allowMissingTagName:!0}),u=e.getMode(r,i&&i.base||"javascript")
return{startState:function(){return{context:new t(e.startState(u),u)}},copyState:function(e){return{context:n(e.context)}},token:a,indent:function(e,t,n){return e.context.mode.indent(e.context.state,t,n)},innerMode:function(e){return e.context}}},"xml","javascript"),e.defineMIME("text/jsx","jsx"),e.defineMIME("text/typescript-jsx",{name:"jsx",base:{name:"javascript",typescript:!0}})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("lua",function(e,t){function n(e){return new RegExp("^(?:"+e.join("|")+")","i")}function r(e){return new RegExp("^(?:"+e.join("|")+")$","i")}function i(e){for(var t=0;e.eat("=");)++t
return e.eat("["),t}function o(e,t){var n=e.next()
return"-"==n&&e.eat("-")?e.eat("[")&&e.eat("[")?(t.cur=a(i(e),"comment"))(e,t):(e.skipToEnd(),"comment"):'"'==n||"'"==n?(t.cur=s(n))(e,t):"["==n&&/[\[=]/.test(e.peek())?(t.cur=a(i(e),"string"))(e,t):/\d/.test(n)?(e.eatWhile(/[\w.%]/),"number"):/[\w_]/.test(n)?(e.eatWhile(/[\w\\\-_.]/),"variable"):null}function a(e,t){return function(n,r){for(var i,a=null;null!=(i=n.next());)if(null==a)"]"==i&&(a=0)
else if("="==i)++a
else{if("]"==i&&a==e){r.cur=o
break}a=null}return t}}function s(e){return function(t,n){for(var r,i=!1;null!=(r=t.next())&&(r!=e||i);)i=!i&&"\\"==r
return i||(n.cur=o),"string"}}var l=e.indentUnit,c=r(t.specials||[]),u=r(["_G","_VERSION","assert","collectgarbage","dofile","error","getfenv","getmetatable","ipairs","load","loadfile","loadstring","module","next","pairs","pcall","print","rawequal","rawget","rawset","require","select","setfenv","setmetatable","tonumber","tostring","type","unpack","xpcall","coroutine.create","coroutine.resume","coroutine.running","coroutine.status","coroutine.wrap","coroutine.yield","debug.debug","debug.getfenv","debug.gethook","debug.getinfo","debug.getlocal","debug.getmetatable","debug.getregistry","debug.getupvalue","debug.setfenv","debug.sethook","debug.setlocal","debug.setmetatable","debug.setupvalue","debug.traceback","close","flush","lines","read","seek","setvbuf","write","io.close","io.flush","io.input","io.lines","io.open","io.output","io.popen","io.read","io.stderr","io.stdin","io.stdout","io.tmpfile","io.type","io.write","math.abs","math.acos","math.asin","math.atan","math.atan2","math.ceil","math.cos","math.cosh","math.deg","math.exp","math.floor","math.fmod","math.frexp","math.huge","math.ldexp","math.log","math.log10","math.max","math.min","math.modf","math.pi","math.pow","math.rad","math.random","math.randomseed","math.sin","math.sinh","math.sqrt","math.tan","math.tanh","os.clock","os.date","os.difftime","os.execute","os.exit","os.getenv","os.remove","os.rename","os.setlocale","os.time","os.tmpname","package.cpath","package.loaded","package.loaders","package.loadlib","package.path","package.preload","package.seeall","string.byte","string.char","string.dump","string.find","string.format","string.gmatch","string.gsub","string.len","string.lower","string.match","string.rep","string.reverse","string.sub","string.upper","table.concat","table.insert","table.maxn","table.remove","table.sort"]),d=r(["and","break","elseif","false","nil","not","or","return","true","function","end","if","then","else","do","while","repeat","until","for","in","local"]),f=r(["function","if","repeat","do","\\(","{"]),p=r(["end","until","\\)","}"]),h=n(["end","until","\\)","}","else","elseif"])
return{startState:function(e){return{basecol:e||0,indentDepth:0,cur:o}},token:function(e,t){if(e.eatSpace())return null
var n=t.cur(e,t),r=e.current()
return"variable"==n&&(d.test(r)?n="keyword":u.test(r)?n="builtin":c.test(r)&&(n="variable-2")),"comment"!=n&&"string"!=n&&(f.test(r)?++t.indentDepth:p.test(r)&&--t.indentDepth),n},indent:function(e,t){var n=h.test(t)
return e.basecol+l*(e.indentDepth-(n?1:0))},lineComment:"--",blockCommentStart:"--[[",blockCommentEnd:"]]"}}),e.defineMIME("text/x-lua","lua")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../xml/xml"),require("../meta")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../meta"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("markdown",function(t,n){function r(n){if(e.findModeByName){var r=e.findModeByName(n)
r&&(n=r.mime||r.mimes[0])}var i=e.getMode(t,n)
return"null"==i.name?null:i}function i(e,t,n){return t.f=t.inline=n,n(e,t)}function o(e,t,n){return t.f=t.block=n,n(e,t)}function a(e){return!e||!/\S/.test(e.string)}function s(t){if(t.linkTitle=!1,t.linkHref=!1,t.linkText=!1,t.em=!1,t.strong=!1,t.strikethrough=!1,t.quote=0,t.indentedCode=!1,t.f==c){var n=x
if(!n){var r=e.innerMode(k,t.htmlState)
n="xml"==r.mode.name&&null===r.state.tagStart&&!r.state.context&&r.state.tokenize.isInText}n&&(t.f=p,t.block=l,t.htmlState=null)}return t.trailingSpace=0,t.trailingSpaceNewLine=!1,t.prevLine=t.thisLine,t.thisLine={stream:null},null}function l(t,o){var s=t.column()===o.indentation,l=a(o.prevLine.stream),c=o.indentedCode,f=o.prevLine.hr,p=o.list!==!1,h=(o.listStack[o.listStack.length-1]||0)+3
o.indentedCode=!1
var m=o.indentation
if(null===o.indentationDiff&&(o.indentationDiff=o.indentation,p)){for(o.list=null;m<o.listStack[o.listStack.length-1];)o.listStack.pop(),o.listStack.length?o.indentation=o.listStack[o.listStack.length-1]:o.list=!1
o.list!==!1&&(o.indentationDiff=m-o.listStack[o.listStack.length-1])}var g=!(l||f||o.prevLine.header||p&&c||o.prevLine.fencedCodeEnd),y=(o.list===!1||f||l)&&o.indentation<=h&&t.match(C),b=null
if(o.indentationDiff>=4&&(c||o.prevLine.fencedCodeEnd||o.prevLine.header||l))return t.skipToEnd(),o.indentedCode=!0,w.code
if(t.eatSpace())return null
if(s&&o.indentation<=h&&(b=t.match(L))&&b[1].length<=6)return o.quote=0,o.header=b[1].length,o.thisLine.header=!0,n.highlightFormatting&&(o.formatting="header"),o.f=o.inline,d(o)
if(o.indentation<=h&&t.eat(">"))return o.quote=s?1:o.quote+1,n.highlightFormatting&&(o.formatting="quote"),t.eatSpace(),d(o)
if(!y&&!o.setext&&s&&o.indentation<=h&&(b=t.match(S))){var k=b[1]?"ol":"ul"
return o.indentation=m+t.current().length,o.list=!0,o.quote=0,o.listStack.push(o.indentation),o.em=!1,o.strong=!1,o.code=!1,o.strikethrough=!1,n.taskLists&&t.match(M,!1)&&(o.taskList=!0),o.f=o.inline,n.highlightFormatting&&(o.formatting=["list","list-"+k]),d(o)}return s&&o.indentation<=h&&(b=t.match(E,!0))?(o.quote=0,o.fencedEndRE=new RegExp(b[1]+"+ *$"),o.localMode=n.fencedCodeBlockHighlighting&&r(b[2]||n.fencedCodeBlockDefaultMode),o.localMode&&(o.localState=e.startState(o.localMode)),o.f=o.block=u,n.highlightFormatting&&(o.formatting="code-block"),o.code=-1,d(o)):o.setext||!(g&&p||o.quote||o.list!==!1||o.code||y||O.test(t.string))&&(b=t.lookAhead(1))&&(b=b.match(T))?(o.setext?(o.header=o.setext,o.setext=0,t.skipToEnd(),n.highlightFormatting&&(o.formatting="header")):(o.header="="==b[0].charAt(0)?1:2,o.setext=o.header),o.thisLine.header=!0,o.f=o.inline,d(o)):y?(t.skipToEnd(),o.hr=!0,o.thisLine.hr=!0,w.hr):"["===t.peek()?i(t,o,v):i(t,o,o.inline)}function c(t,n){var r=k.token(t,n.htmlState)
if(!x){var i=e.innerMode(k,n.htmlState);("xml"==i.mode.name&&null===i.state.tagStart&&!i.state.context&&i.state.tokenize.isInText||n.md_inside&&t.current().indexOf(">")>-1)&&(n.f=p,n.block=l,n.htmlState=null)}return r}function u(e,t){var r=t.listStack[t.listStack.length-1]||0,i=t.indentation<r,a=r+3
if(t.fencedEndRE&&t.indentation<=a&&(i||e.match(t.fencedEndRE))){n.highlightFormatting&&(t.formatting="code-block")
var s
return i||(s=d(t)),t.localMode=t.localState=null,t.block=l,t.f=p,t.fencedEndRE=null,t.code=0,t.thisLine.fencedCodeEnd=!0,i?o(e,t,t.block):s}return t.localMode?t.localMode.token(e,t.localState):(e.skipToEnd(),w.code)}function d(e){var t=[]
if(e.formatting){t.push(w.formatting),"string"==typeof e.formatting&&(e.formatting=[e.formatting])
for(var r=0;r<e.formatting.length;r++)t.push(w.formatting+"-"+e.formatting[r]),"header"===e.formatting[r]&&t.push(w.formatting+"-"+e.formatting[r]+"-"+e.header),"quote"===e.formatting[r]&&(!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=e.quote?t.push(w.formatting+"-"+e.formatting[r]+"-"+e.quote):t.push("error"))}if(e.taskOpen)return t.push("meta"),t.length?t.join(" "):null
if(e.taskClosed)return t.push("property"),t.length?t.join(" "):null
if(e.linkHref?t.push(w.linkHref,"url"):(e.strong&&t.push(w.strong),e.em&&t.push(w.em),e.strikethrough&&t.push(w.strikethrough),e.emoji&&t.push(w.emoji),e.linkText&&t.push(w.linkText),e.code&&t.push(w.code),e.image&&t.push(w.image),e.imageAltText&&t.push(w.imageAltText,"link"),e.imageMarker&&t.push(w.imageMarker)),e.header&&t.push(w.header,w.header+"-"+e.header),e.quote&&(t.push(w.quote),!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=e.quote?t.push(w.quote+"-"+e.quote):t.push(w.quote+"-"+n.maxBlockquoteDepth)),e.list!==!1){var i=(e.listStack.length-1)%3
i?1===i?t.push(w.list2):t.push(w.list3):t.push(w.list1)}return e.trailingSpaceNewLine?t.push("trailing-space-new-line"):e.trailingSpace&&t.push("trailing-space-"+(e.trailingSpace%2?"a":"b")),t.length?t.join(" "):null}function f(e,t){if(e.match(A,!0))return d(t)}function p(t,r){var i=r.text(t,r)
if("undefined"!=typeof i)return i
if(r.list)return r.list=null,d(r)
if(r.taskList){var a=" "===t.match(M,!0)[1]
return a?r.taskOpen=!0:r.taskClosed=!0,n.highlightFormatting&&(r.formatting="task"),r.taskList=!1,d(r)}if(r.taskOpen=!1,r.taskClosed=!1,r.header&&t.match(/^#+$/,!0))return n.highlightFormatting&&(r.formatting="header"),d(r)
var s=t.next()
if(r.linkTitle){r.linkTitle=!1
var l=s
"("===s&&(l=")"),l=(l+"").replace(/([.?*+^\[\]\\(){}|-])/g,"\\$1")
var u="^\\s*(?:[^"+l+"\\\\]+|\\\\\\\\|\\\\.)"+l
if(t.match(new RegExp(u),!0))return w.linkHref}if("`"===s){var f=r.formatting
n.highlightFormatting&&(r.formatting="code"),t.eatWhile("`")
var g=t.current().length
if(0!=r.code||r.quote&&1!=g){if(g==r.code){var v=d(r)
return r.code=0,v}return r.formatting=f,d(r)}return r.code=g,d(r)}if(r.code)return d(r)
if("\\"===s&&(t.next(),n.highlightFormatting)){var y=d(r),b=w.formatting+"-escape"
return y?y+" "+b:b}if("!"===s&&t.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return r.imageMarker=!0,r.image=!0,n.highlightFormatting&&(r.formatting="image"),d(r)
if("["===s&&r.imageMarker&&t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/,!1))return r.imageMarker=!1,r.imageAltText=!0,n.highlightFormatting&&(r.formatting="image"),d(r)
if("]"===s&&r.imageAltText){n.highlightFormatting&&(r.formatting="image")
var y=d(r)
return r.imageAltText=!1,r.image=!1,r.inline=r.f=m,y}if("["===s&&!r.image)return r.linkText&&t.match(/^.*?\]/)?d(r):(r.linkText=!0,n.highlightFormatting&&(r.formatting="link"),d(r))
if("]"===s&&r.linkText){n.highlightFormatting&&(r.formatting="link")
var y=d(r)
return r.linkText=!1,r.inline=r.f=t.match(/\(.*?\)| ?\[.*?\]/,!1)?m:p,y}if("<"===s&&t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1)){r.f=r.inline=h,n.highlightFormatting&&(r.formatting="link")
var y=d(r)
return y?y+=" ":y="",y+w.linkInline}if("<"===s&&t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1)){r.f=r.inline=h,n.highlightFormatting&&(r.formatting="link")
var y=d(r)
return y?y+=" ":y="",y+w.linkEmail}if(n.xml&&"<"===s&&t.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,!1)){var x=t.string.indexOf(">",t.pos)
if(x!=-1){var _=t.string.substring(t.start,x);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(_)&&(r.md_inside=!0)}return t.backUp(1),r.htmlState=e.startState(k),o(t,r,c)}if(n.xml&&"<"===s&&t.match(/^\/\w*?>/))return r.md_inside=!1,"tag"
if("*"===s||"_"===s){for(var C=1,S=1==t.pos?" ":t.string.charAt(t.pos-2);C<3&&t.eat(s);)C++
var L=t.peek()||" ",T=!/\s/.test(L)&&(!z.test(L)||/\s/.test(S)||z.test(S)),A=!/\s/.test(S)&&(!z.test(S)||/\s/.test(L)||z.test(L)),E=null,O=null
if(C%2&&(r.em||!T||"*"!==s&&A&&!z.test(S)?r.em!=s||!A||"*"!==s&&T&&!z.test(L)||(E=!1):E=!0),C>1&&(r.strong||!T||"*"!==s&&A&&!z.test(S)?r.strong!=s||!A||"*"!==s&&T&&!z.test(L)||(O=!1):O=!0),null!=O||null!=E){n.highlightFormatting&&(r.formatting=null==E?"strong":null==O?"em":"strong em"),E===!0&&(r.em=s),O===!0&&(r.strong=s)
var v=d(r)
return E===!1&&(r.em=!1),O===!1&&(r.strong=!1),v}}else if(" "===s&&(t.eat("*")||t.eat("_"))){if(" "===t.peek())return d(r)
t.backUp(1)}if(n.strikethrough)if("~"===s&&t.eatWhile(s)){if(r.strikethrough){n.highlightFormatting&&(r.formatting="strikethrough")
var v=d(r)
return r.strikethrough=!1,v}if(t.match(/^[^\s]/,!1))return r.strikethrough=!0,n.highlightFormatting&&(r.formatting="strikethrough"),d(r)}else if(" "===s&&t.match(/^~~/,!0)){if(" "===t.peek())return d(r)
t.backUp(2)}if(n.emoji&&":"===s&&t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)){r.emoji=!0,n.highlightFormatting&&(r.formatting="emoji")
var N=d(r)
return r.emoji=!1,N}return" "===s&&(t.match(/^ +$/,!1)?r.trailingSpace++:r.trailingSpace&&(r.trailingSpaceNewLine=!0)),d(r)}function h(e,t){var r=e.next()
if(">"===r){t.f=t.inline=p,n.highlightFormatting&&(t.formatting="link")
var i=d(t)
return i?i+=" ":i="",i+w.linkInline}return e.match(/^[^>]+/,!0),w.linkInline}function m(e,t){if(e.eatSpace())return null
var r=e.next()
return"("===r||"["===r?(t.f=t.inline=g("("===r?")":"]"),n.highlightFormatting&&(t.formatting="link-string"),t.linkHref=!0,d(t)):"error"}function g(e){return function(t,r){var i=t.next()
if(i===e){r.f=r.inline=p,n.highlightFormatting&&(r.formatting="link-string")
var o=d(r)
return r.linkHref=!1,o}return t.match(q[e]),r.linkHref=!0,d(r)}}function v(e,t){return e.match(/^([^\]\\]|\\.)*\]:/,!1)?(t.f=y,e.next(),n.highlightFormatting&&(t.formatting="link"),t.linkText=!0,d(t)):i(e,t,p)}function y(e,t){if(e.match(/^\]:/,!0)){t.f=t.inline=b,n.highlightFormatting&&(t.formatting="link")
var r=d(t)
return t.linkText=!1,r}return e.match(/^([^\]\\]|\\.)+/,!0),w.linkText}function b(e,t){return e.eatSpace()?null:(e.match(/^[^\s]+/,!0),void 0===e.peek()?t.linkTitle=!0:e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0),t.f=t.inline=p,w.linkHref+" url")}var k=e.getMode(t,"text/html"),x="null"==k.name
void 0===n.highlightFormatting&&(n.highlightFormatting=!1),void 0===n.maxBlockquoteDepth&&(n.maxBlockquoteDepth=0),void 0===n.taskLists&&(n.taskLists=!1),void 0===n.strikethrough&&(n.strikethrough=!1),void 0===n.emoji&&(n.emoji=!1),void 0===n.fencedCodeBlockHighlighting&&(n.fencedCodeBlockHighlighting=!0),void 0===n.fencedCodeBlockDefaultMode&&(n.fencedCodeBlockDefaultMode="text/plain"),void 0===n.xml&&(n.xml=!0),void 0===n.tokenTypeOverrides&&(n.tokenTypeOverrides={})
var w={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"image",imageAltText:"image-alt-text",imageMarker:"image-marker",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough",emoji:"builtin"}
for(var _ in w)w.hasOwnProperty(_)&&n.tokenTypeOverrides[_]&&(w[_]=n.tokenTypeOverrides[_])
var C=/^([*\-_])(?:\s*\1){2,}\s*$/,S=/^(?:[*\-+]|^[0-9]+([.)]))\s+/,M=/^\[(x| )\](?=\s)/i,L=n.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,T=/^ {0,3}(?:\={1,}|-{2,})\s*$/,A=/^[^#!\[\]*_\\<>` "'(~:]+/,E=/^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,O=/^\s*\[[^\]]+?\]:.*$/,z=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,N="    ",q={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/},F={startState:function(){return{f:l,prevLine:{stream:null},thisLine:{stream:null},block:l,htmlState:null,indentation:0,inline:p,text:f,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,setext:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,emoji:!1,fencedEndRE:null}},copyState:function(t){return{f:t.f,prevLine:t.prevLine,thisLine:t.thisLine,block:t.block,htmlState:t.htmlState&&e.copyState(k,t.htmlState),indentation:t.indentation,localMode:t.localMode,localState:t.localMode?e.copyState(t.localMode,t.localState):null,inline:t.inline,text:t.text,formatting:!1,linkText:t.linkText,linkTitle:t.linkTitle,linkHref:t.linkHref,code:t.code,em:t.em,strong:t.strong,strikethrough:t.strikethrough,emoji:t.emoji,header:t.header,setext:t.setext,hr:t.hr,taskList:t.taskList,list:t.list,listStack:t.listStack.slice(0),quote:t.quote,indentedCode:t.indentedCode,trailingSpace:t.trailingSpace,trailingSpaceNewLine:t.trailingSpaceNewLine,md_inside:t.md_inside,fencedEndRE:t.fencedEndRE}},token:function(e,t){if(t.formatting=!1,e!=t.thisLine.stream){if(t.header=0,t.hr=!1,e.match(/^\s*$/,!0))return s(t),null
if(t.prevLine=t.thisLine,t.thisLine={stream:e},t.taskList=!1,t.trailingSpace=0,t.trailingSpaceNewLine=!1,!t.localState&&(t.f=t.block,t.f!=c)){var n=e.match(/^\s*/,!0)[0].replace(/\t/g,N).length
if(t.indentation=n,t.indentationDiff=null,n>0)return null}}return t.f(e,t)},innerMode:function(e){return e.block==c?{state:e.htmlState,mode:k}:e.localState?{state:e.localState,mode:e.localMode}:{state:e,mode:F}},indent:function(t,n,r){return t.block==c&&k.indent?k.indent(t.htmlState,n,r):t.localState&&t.localMode.indent?t.localMode.indent(t.localState,n,r):e.Pass},blankLine:s,getType:d,blockCommentStart:"<!--",blockCommentEnd:"-->",closeBrackets:"()[]{}''\"\"``",fold:"markdown"}
return F},"xml"),e.defineMIME("text/markdown","markdown"),e.defineMIME("text/x-markdown","markdown")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("mllike",function(t,n){function r(e,t){var r=e.next()
if('"'===r)return t.tokenize=i,t.tokenize(e,t)
if("{"===r&&e.eat("|"))return t.longString=!0,t.tokenize=a,t.tokenize(e,t)
if("("===r&&e.eat("*"))return t.commentLevel++,t.tokenize=o,t.tokenize(e,t)
if("~"===r||"?"===r)return e.eatWhile(/\w/),"variable-2"
if("`"===r)return e.eatWhile(/\w/),"quote"
if("/"===r&&n.slashComments&&e.eat("/"))return e.skipToEnd(),"comment"
if(/\d/.test(r))return"0"===r&&e.eat(/[bB]/)&&e.eatWhile(/[01]/),"0"===r&&e.eat(/[xX]/)&&e.eatWhile(/[0-9a-fA-F]/),"0"===r&&e.eat(/[oO]/)?e.eatWhile(/[0-7]/):(e.eatWhile(/[\d_]/),e.eat(".")&&e.eatWhile(/[\d]/),e.eat(/[eE]/)&&e.eatWhile(/[\d\-+]/)),"number"
if(/[+\-*&%=<>!?|@\.~:]/.test(r))return"operator"
if(/[\w\xa1-\uffff]/.test(r)){e.eatWhile(/[\w\xa1-\uffff]/)
var l=e.current()
return s.hasOwnProperty(l)?s[l]:"variable"}return null}function i(e,t){for(var n,i=!1,o=!1;null!=(n=e.next());){if('"'===n&&!o){i=!0
break}o=!o&&"\\"===n}return i&&!o&&(t.tokenize=r),"string"}function o(e,t){for(var n,i;t.commentLevel>0&&null!=(i=e.next());)"("===n&&"*"===i&&t.commentLevel++,"*"===n&&")"===i&&t.commentLevel--,n=i
return t.commentLevel<=0&&(t.tokenize=r),"comment"}function a(e,t){for(var n,i;t.longString&&null!=(i=e.next());)"|"===n&&"}"===i&&(t.longString=!1),n=i
return t.longString||(t.tokenize=r),"string"}var s={as:"keyword","do":"keyword","else":"keyword",end:"keyword",exception:"keyword",fun:"keyword",functor:"keyword","if":"keyword","in":"keyword",include:"keyword","let":"keyword",of:"keyword",open:"keyword",rec:"keyword",struct:"keyword",then:"keyword",type:"keyword",val:"keyword","while":"keyword","with":"keyword"},l=n.extraWords||{}
for(var c in l)l.hasOwnProperty(c)&&(s[c]=n.extraWords[c])
var u=[]
for(var d in s)u.push(d)
return e.registerHelper("hintWords","mllike",u),{startState:function(){return{tokenize:r,commentLevel:0,longString:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:n.slashComments?"//":null}}),e.defineMIME("text/x-ocaml",{name:"mllike",extraWords:{and:"keyword",assert:"keyword",begin:"keyword","class":"keyword",constraint:"keyword",done:"keyword",downto:"keyword",external:"keyword","function":"keyword",initializer:"keyword",lazy:"keyword",match:"keyword",method:"keyword",module:"keyword",mutable:"keyword","new":"keyword",nonrec:"keyword",object:"keyword","private":"keyword",sig:"keyword",to:"keyword","try":"keyword",value:"keyword",virtual:"keyword",when:"keyword",raise:"builtin",failwith:"builtin","true":"builtin","false":"builtin",asr:"builtin",land:"builtin",lor:"builtin",lsl:"builtin",lsr:"builtin",lxor:"builtin",mod:"builtin",or:"builtin",raise_notrace:"builtin",trace:"builtin",exit:"builtin",print_string:"builtin",print_endline:"builtin","int":"type","float":"type",bool:"type","char":"type",string:"type",unit:"type",List:"builtin"}}),e.defineMIME("text/x-fsharp",{name:"mllike",extraWords:{"abstract":"keyword",assert:"keyword",base:"keyword",begin:"keyword","class":"keyword","default":"keyword",delegate:"keyword","do!":"keyword",done:"keyword",downcast:"keyword",downto:"keyword",elif:"keyword",extern:"keyword","finally":"keyword","for":"keyword","function":"keyword",global:"keyword",inherit:"keyword",inline:"keyword","interface":"keyword",internal:"keyword",lazy:"keyword","let!":"keyword",match:"keyword",member:"keyword",module:"keyword",mutable:"keyword",namespace:"keyword","new":"keyword","null":"keyword",override:"keyword","private":"keyword","public":"keyword","return!":"keyword","return":"keyword",select:"keyword","static":"keyword",to:"keyword","try":"keyword",upcast:"keyword","use!":"keyword",use:"keyword","void":"keyword",when:"keyword","yield!":"keyword","yield":"keyword",atomic:"keyword","break":"keyword",checked:"keyword",component:"keyword","const":"keyword",constraint:"keyword",constructor:"keyword","continue":"keyword",eager:"keyword",event:"keyword",external:"keyword",fixed:"keyword",method:"keyword",mixin:"keyword",object:"keyword",parallel:"keyword",process:"keyword","protected":"keyword",pure:"keyword",sealed:"keyword",tailcall:"keyword",trait:"keyword",virtual:"keyword","volatile":"keyword",List:"builtin",Seq:"builtin",Map:"builtin",Set:"builtin",Option:"builtin","int":"builtin",string:"builtin",not:"builtin","true":"builtin","false":"builtin",raise:"builtin",failwith:"builtin"},slashComments:!0}),e.defineMIME("text/x-sml",{name:"mllike",extraWords:{abstype:"keyword",and:"keyword",andalso:"keyword","case":"keyword",datatype:"keyword",fn:"keyword",handle:"keyword",infix:"keyword",infixr:"keyword",local:"keyword",nonfix:"keyword",op:"keyword",orelse:"keyword",raise:"keyword",withtype:"keyword",eqtype:"keyword",sharing:"keyword",sig:"keyword",signature:"keyword",structure:"keyword",where:"keyword","true":"keyword","false":"keyword","int":"builtin",real:"builtin",string:"builtin","char":"builtin",bool:"builtin"},slashComments:!0})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../clike/clike")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../clike/clike"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}function n(e,t,i){return 0==e.length?r(t):function(o,a){for(var s=e[0],l=0;l<s.length;l++)if(o.match(s[l][0]))return a.tokenize=n(e.slice(1),t),s[l][1]
return a.tokenize=r(t,i),"string"}}function r(e,t){return function(n,r){return i(n,r,e,t)}}function i(e,t,r,i){if(i!==!1&&e.match("${",!1)||e.match("{$",!1))return t.tokenize=null,"string"
if(i!==!1&&e.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/))return e.match("[",!1)&&(t.tokenize=n([[["[",null]],[[/\d[\w\.]*/,"number"],[/\$[a-zA-Z_][a-zA-Z0-9_]*/,"variable-2"],[/[\w\$]+/,"variable"]],[["]",null]]],r,i)),e.match(/\-\>\w/,!1)&&(t.tokenize=n([[["->",null]],[[/[\w]+/,"variable"]]],r,i)),"variable-2"
for(var o=!1;!e.eol()&&(o||i===!1||!e.match("{$",!1)&&!e.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/,!1));){if(!o&&e.match(r)){t.tokenize=null,t.tokStack.pop(),t.tokStack.pop()
break}o="\\"==e.next()&&!o}return"string"}var o="abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally",a="true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__",s="func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count"
e.registerHelper("hintWords","php",[o,a,s].join(" ").split(" ")),e.registerHelper("wordChars","php",/[\w$]/)
var l={name:"clike",helperType:"php",keywords:t(o),blockKeywords:t("catch do else elseif for foreach if switch try while finally"),defKeywords:t("class function interface namespace trait"),atoms:t(a),builtin:t(s),multiLineStrings:!0,hooks:{$:function(e){return e.eatWhile(/[\w\$_]/),"variable-2"},"<":function(e,t){var n
if(n=e.match(/<<\s*/)){var i=e.eat(/['"]/)
e.eatWhile(/[\w\.]/)
var o=e.current().slice(n[0].length+(i?2:1))
if(i&&e.eat(i),o)return(t.tokStack||(t.tokStack=[])).push(o,0),t.tokenize=r(o,"'"!=i),"string"}return!1},"#":function(e){for(;!e.eol()&&!e.match("?>",!1);)e.next()
return"comment"},"/":function(e){if(e.eat("/")){for(;!e.eol()&&!e.match("?>",!1);)e.next()
return"comment"}return!1},'"':function(e,t){return(t.tokStack||(t.tokStack=[])).push('"',0),t.tokenize=r('"'),"string"},"{":function(e,t){return t.tokStack&&t.tokStack.length&&t.tokStack[t.tokStack.length-1]++,!1},"}":function(e,t){return t.tokStack&&t.tokStack.length>0&&!--t.tokStack[t.tokStack.length-1]&&(t.tokenize=r(t.tokStack[t.tokStack.length-2])),!1}}}
e.defineMode("php",function(t,n){function r(t,n){var r=n.curMode==o
if(t.sol()&&n.pending&&'"'!=n.pending&&"'"!=n.pending&&(n.pending=null),r)return r&&null==n.php.tokenize&&t.match("?>")?(n.curMode=i,n.curState=n.html,n.php.context.prev||(n.php=null),"meta"):o.token(t,n.curState)
if(t.match(/^<\?\w*/))return n.curMode=o,n.php||(n.php=e.startState(o,i.indent(n.html,"",""))),n.curState=n.php,"meta"
if('"'==n.pending||"'"==n.pending){for(;!t.eol()&&t.next()!=n.pending;);var a="string"}else if(n.pending&&t.pos<n.pending.end){t.pos=n.pending.end
var a=n.pending.style}else var a=i.token(t,n.curState)
n.pending&&(n.pending=null)
var s,l=t.current(),c=l.search(/<\?/)
return c!=-1&&("string"==a&&(s=l.match(/[\'\"]$/))&&!/\?>/.test(l)?n.pending=s[0]:n.pending={end:t.pos,style:a},t.backUp(l.length-c)),a}var i=e.getMode(t,n&&n.htmlMode||"text/html"),o=e.getMode(t,l)
return{startState:function(){var t=e.startState(i),r=n.startOpen?e.startState(o):null
return{html:t,php:r,curMode:n.startOpen?o:i,curState:n.startOpen?r:t,pending:null}},copyState:function(t){var n,r=t.html,a=e.copyState(i,r),s=t.php,l=s&&e.copyState(o,s)
return n=t.curMode==i?a:l,{html:a,php:l,curMode:t.curMode,curState:n,pending:t.pending}},token:r,indent:function(e,t,n){return e.curMode!=o&&/^\s*<\//.test(t)||e.curMode==o&&/^\?>/.test(t)?i.indent(e.html,t,n):e.curMode.indent(e.curState,t,n)},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",innerMode:function(e){return{state:e.curState,mode:e.curMode}}}},"htmlmixed","clike"),e.defineMIME("application/x-httpd-php","php"),e.defineMIME("application/x-httpd-php-open",{name:"php",startOpen:!0}),e.defineMIME("text/x-php",l)}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function n(e){return e.scopes[e.scopes.length-1]}var r=t(["and","or","not","is"]),i=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],o=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"]
e.registerHelper("hintWords","python",i.concat(o)),e.defineMode("python",function(a,s){function l(e,t){var r=e.sol()&&"\\"!=t.lastToken
if(r&&(t.indent=e.indentation()),r&&"py"==n(t).type){var i=n(t).offset
if(e.eatSpace()){var o=e.indentation()
return o>i?f(t):o<i&&h(e,t)&&"#"!=e.peek()&&(t.errorToken=!0),null}var a=c(e,t)
return i>0&&h(e,t)&&(a+=" "+g),a}return c(e,t)}function c(e,t,n){if(e.eatSpace())return null
if(!n&&e.match(/^#.*/))return"comment"
if(e.match(/^[0-9\.]/,!1)){var i=!1
if(e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(i=!0),e.match(/^[\d_]+\.\d*/)&&(i=!0),e.match(/^\.\d+/)&&(i=!0),i)return e.eat(/J/i),"number"
var o=!1
if(e.match(/^0x[0-9a-f_]+/i)&&(o=!0),e.match(/^0b[01_]+/i)&&(o=!0),e.match(/^0o[0-7_]+/i)&&(o=!0),e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(e.eat(/J/i),o=!0),e.match(/^0(?![\dx])/i)&&(o=!0),o)return e.eat(/L/i),"number"}if(e.match(S)){var a=e.current().toLowerCase().indexOf("f")!==-1
return a?(t.tokenize=u(e.current(),t.tokenize),t.tokenize(e,t)):(t.tokenize=d(e.current(),t.tokenize),t.tokenize(e,t))}for(var s=0;s<y.length;s++)if(e.match(y[s]))return"operator"
return e.match(v)?"punctuation":"."==t.lastToken&&e.match(C)?"property":e.match(M)||e.match(r)?"keyword":e.match(L)?"builtin":e.match(/^(self|cls)\b/)?"variable-2":e.match(C)?"def"==t.lastToken||"class"==t.lastToken?"def":"variable":(e.next(),n?null:g)}function u(e,t){function n(e){return function(t,i){var o=c(t,i,!0)
return"punctuation"==o&&("{"==t.current()?i.tokenize=n(e+1):"}"==t.current()&&(e>1?i.tokenize=n(e-1):i.tokenize=r)),o}}function r(r,a){for(;!r.eol();)if(r.eatWhile(/[^'"\{\}\\]/),r.eat("\\")){if(r.next(),i&&r.eol())return o}else{if(r.match(e))return a.tokenize=t,o
if(r.match("{{"))return o
if(r.match("{",!1))return a.tokenize=n(0),r.current()?o:a.tokenize(r,a)
if(r.match("}}"))return o
if(r.match("}"))return g
r.eat(/['"]/)}if(i){if(s.singleLineStringErrors)return g
a.tokenize=t}return o}for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1)
var i=1==e.length,o="string"
return r.isString=!0,r}function d(e,t){function n(n,o){for(;!n.eol();)if(n.eatWhile(/[^'"\\]/),n.eat("\\")){if(n.next(),r&&n.eol())return i}else{if(n.match(e))return o.tokenize=t,i
n.eat(/['"]/)}if(r){if(s.singleLineStringErrors)return g
o.tokenize=t}return i}for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1)
var r=1==e.length,i="string"
return n.isString=!0,n}function f(e){for(;"py"!=n(e).type;)e.scopes.pop()
e.scopes.push({offset:n(e).offset+a.indentUnit,type:"py",align:null})}function p(e,t,n){var r=e.match(/^([\s\[\{\(]|#.*)*$/,!1)?null:e.column()+1
t.scopes.push({offset:t.indent+k,type:n,align:r})}function h(e,t){for(var r=e.indentation();t.scopes.length>1&&n(t).offset>r;){if("py"!=n(t).type)return!0
t.scopes.pop()}return n(t).offset!=r}function m(e,t){e.sol()&&(t.beginningOfLine=!0)
var r=t.tokenize(e,t),i=e.current()
if(t.beginningOfLine&&"@"==i)return e.match(C,!1)?"meta":_?"operator":g
if(/\S/.test(i)&&(t.beginningOfLine=!1),"variable"!=r&&"builtin"!=r||"meta"!=t.lastToken||(r="meta"),"pass"!=i&&"return"!=i||(t.dedent+=1),"lambda"==i&&(t.lambda=!0),":"!=i||t.lambda||"py"!=n(t).type||f(t),1==i.length&&!/string|comment/.test(r)){var o="[({".indexOf(i)
if(o!=-1&&p(e,t,"])}".slice(o,o+1)),o="])}".indexOf(i),o!=-1){if(n(t).type!=i)return g
t.indent=t.scopes.pop().offset-k}}return t.dedent>0&&e.eol()&&"py"==n(t).type&&(t.scopes.length>1&&t.scopes.pop(),t.dedent-=1),r}for(var g="error",v=s.delimiters||s.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,y=[s.singleOperators,s.doubleOperators,s.doubleDelimiters,s.tripleDelimiters,s.operators||/^([-+*\/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],b=0;b<y.length;b++)y[b]||y.splice(b--,1)
var k=s.hangingIndent||a.indentUnit,x=i,w=o
void 0!=s.extra_keywords&&(x=x.concat(s.extra_keywords)),void 0!=s.extra_builtins&&(w=w.concat(s.extra_builtins))
var _=!(s.version&&Number(s.version)<3)
if(_){var C=s.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/
x=x.concat(["nonlocal","False","True","None","async","await"]),w=w.concat(["ascii","bytes","exec","print"])
var S=new RegExp("^(([rbuf]|(br)|(fr))?('{3}|\"{3}|['\"]))","i")}else{var C=s.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/
x=x.concat(["exec","print"]),w=w.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"])
var S=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var M=t(x),L=t(w),T={startState:function(e){return{tokenize:l,scopes:[{offset:e||0,type:"py",align:null}],indent:e||0,lastToken:null,lambda:!1,dedent:0}},token:function(e,t){var n=t.errorToken
n&&(t.errorToken=!1)
var r=m(e,t)
return r&&"comment"!=r&&(t.lastToken="keyword"==r||"punctuation"==r?e.current():r),"punctuation"==r&&(r=null),e.eol()&&t.lambda&&(t.lambda=!1),n?r+" "+g:r},indent:function(t,r){if(t.tokenize!=l)return t.tokenize.isString?e.Pass:0
var i=n(t),o=i.type==r.charAt(0)
return null!=i.align?i.align-(o?1:0):i.offset-(o?k:0)},electricInput:/^\s*[\}\]\)]$/,closeBrackets:{triples:"'\""},lineComment:"#",fold:"indent"}
return T}),e.defineMIME("text/x-python","python")
var a=function(e){return e.split(" ")}
e.defineMIME("text/x-cython",{name:"python",extra_keywords:a("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.registerHelper("wordChars","r",/[\w.]/),e.defineMode("r",function(t){function n(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=!0
return t}function r(e,t){f=null
var n=e.next()
if("#"==n)return e.skipToEnd(),"comment"
if("0"==n&&e.eat("x"))return e.eatWhile(/[\da-f]/i),"number"
if("."==n&&e.eat(/\d/))return e.match(/\d*(?:e[+\-]?\d+)?/),"number"
if(/\d/.test(n))return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number"
if("'"==n||'"'==n)return t.tokenize=i(n),"string"
if("`"==n)return e.match(/[^`]+`/),"variable-3"
if("."==n&&e.match(/.[.\d]+/))return"keyword"
if(/[\w\.]/.test(n)&&"_"!=n){e.eatWhile(/[\w\.]/)
var r=e.current()
return p.propertyIsEnumerable(r)?"atom":m.propertyIsEnumerable(r)?(g.propertyIsEnumerable(r)&&!e.match(/\s*if(\s+|$)/,!1)&&(f="block"),"keyword"):h.propertyIsEnumerable(r)?"builtin":"variable"}return"%"==n?(e.skipTo("%")&&e.next(),"operator variable-2"):"<"==n&&e.eat("-")||"<"==n&&e.match("<-")||"-"==n&&e.match(/>>?/)?"operator arrow":"="==n&&t.ctx.argList?"arg-is":v.test(n)?"$"==n?"operator dollar":(e.eatWhile(v),"operator"):/[\(\){}\[\];]/.test(n)?(f=n,";"==n?"semi":null):null}function i(e){return function(t,n){if(t.eat("\\")){var i=t.next()
return"x"==i?t.match(/^[a-f0-9]{2}/i):("u"==i||"U"==i)&&t.eat("{")&&t.skipTo("}")?t.next():"u"==i?t.match(/^[a-f0-9]{4}/i):"U"==i?t.match(/^[a-f0-9]{8}/i):/[0-7]/.test(i)&&t.match(/^[0-7]{1,2}/),"string-2"}for(var o;null!=(o=t.next());){if(o==e){n.tokenize=r
break}if("\\"==o){t.backUp(1)
break}}return"string"}}function o(e,t,n){e.ctx={type:t,indent:e.indent,flags:0,column:n.column(),prev:e.ctx}}function a(e,t){var n=e.ctx
e.ctx={type:n.type,indent:n.indent,flags:n.flags|t,column:n.column,prev:n.prev}}function s(e){e.indent=e.ctx.indent,e.ctx=e.ctx.prev}var l=["NULL","NA","Inf","NaN","NA_integer_","NA_real_","NA_complex_","NA_character_","TRUE","FALSE"],c=["list","quote","bquote","eval","return","call","parse","deparse"],u=["if","else","repeat","while","function","for","in","next","break"],d=["if","else","repeat","while","function","for"]
e.registerHelper("hintWords","r",l.concat(c,u))
var f,p=n(l),h=n(c),m=n(u),g=n(d),v=/[+\-*\/^<>=!&|~$:]/,y=1,b=2,k=4
return{startState:function(){return{tokenize:r,ctx:{type:"top",indent:-t.indentUnit,flags:b},indent:0,afterIdent:!1}},token:function(e,t){if(e.sol()&&(0==(3&t.ctx.flags)&&(t.ctx.flags|=b),t.ctx.flags&k&&s(t),t.indent=e.indentation()),e.eatSpace())return null
var n=t.tokenize(e,t)
return"comment"!=n&&0==(t.ctx.flags&b)&&a(t,y),";"!=f&&"{"!=f&&"}"!=f||"block"!=t.ctx.type||s(t),"{"==f?o(t,"}",e):"("==f?(o(t,")",e),t.afterIdent&&(t.ctx.argList=!0)):"["==f?o(t,"]",e):"block"==f?o(t,"block",e):f==t.ctx.type?s(t):"block"==t.ctx.type&&"comment"!=n&&a(t,k),t.afterIdent="variable"==n||"keyword"==n,n},indent:function(e,n){if(e.tokenize!=r)return 0
var i=n&&n.charAt(0),o=e.ctx,a=i==o.type
return o.flags&k&&(o=o.prev),"block"==o.type?o.indent+("{"==i?0:t.indentUnit):o.flags&y?o.column+(a?0:1):o.indent+(a?0:t.indentUnit)},lineComment:"#"}}),e.defineMIME("text/x-rsrc","r")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("ruby",function(t){function n(e){for(var t={},n=0,r=e.length;n<r;++n)t[e[n]]=!0
return t}function r(e,t,n){return n.tokenize.push(e),e(t,n)}function i(e,t){if(e.sol()&&e.match("=begin")&&e.eol())return t.tokenize.push(u),"comment"
if(e.eatSpace())return null
var n,i=e.next()
if("`"==i||"'"==i||'"'==i)return r(l(i,"string",'"'==i||"`"==i),e,t)
if("/"==i)return o(e)?r(l(i,"string-2",!0),e,t):"operator"
if("%"==i){var a="string",s=!0
e.eat("s")?a="atom":e.eat(/[WQ]/)?a="string":e.eat(/[r]/)?a="string-2":e.eat(/[wxq]/)&&(a="string",s=!1)
var f=e.eat(/[^\w\s=]/)
return f?(m.propertyIsEnumerable(f)&&(f=m[f]),r(l(f,a,s,!0),e,t)):"operator"}if("#"==i)return e.skipToEnd(),"comment"
if("<"==i&&(n=e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return r(c(n[2],n[1]),e,t)
if("0"==i)return e.eat("x")?e.eatWhile(/[\da-fA-F]/):e.eat("b")?e.eatWhile(/[01]/):e.eatWhile(/[0-7]/),"number"
if(/\d/.test(i))return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number"
if("?"==i){for(;e.match(/^\\[CM]-/););return e.eat("\\")?e.eatWhile(/\w/):e.next(),"string"}if(":"==i)return e.eat("'")?r(l("'","atom",!1),e,t):e.eat('"')?r(l('"',"atom",!0),e,t):e.eat(/[\<\>]/)?(e.eat(/[\<\>]/),"atom"):e.eat(/[\+\-\*\/\&\|\:\!]/)?"atom":e.eat(/[a-zA-Z$@_\xa1-\uffff]/)?(e.eatWhile(/[\w$\xa1-\uffff]/),e.eat(/[\?\!\=]/),"atom"):"operator"
if("@"==i&&e.match(/^@?[a-zA-Z_\xa1-\uffff]/))return e.eat("@"),e.eatWhile(/[\w\xa1-\uffff]/),"variable-2"
if("$"==i)return e.eat(/[a-zA-Z_]/)?e.eatWhile(/[\w]/):e.eat(/\d/)?e.eat(/\d/):e.next(),"variable-3"
if(/[a-zA-Z_\xa1-\uffff]/.test(i))return e.eatWhile(/[\w\xa1-\uffff]/),e.eat(/[\?\!]/),e.eat(":")?"atom":"ident"
if("|"!=i||!t.varList&&"{"!=t.lastTok&&"do"!=t.lastTok){if(/[\(\)\[\]{}\\;]/.test(i))return d=i,null
if("-"==i&&e.eat(">"))return"arrow"
if(/[=+\-\/*:\.^%<>~|]/.test(i)){var p=e.eatWhile(/[=+\-\/*:\.^%<>~|]/)
return"."!=i||p||(d="."),"operator"}return null}return d="|",null}function o(e){for(var t,n=e.pos,r=0,i=!1,o=!1;null!=(t=e.next());)if(o)o=!1
else{if("[{(".indexOf(t)>-1)r++
else if("]})".indexOf(t)>-1){if(r--,r<0)break}else if("/"==t&&0==r){i=!0
break}o="\\"==t}return e.backUp(e.pos-n),i}function a(e){return e||(e=1),function(t,n){if("}"==t.peek()){if(1==e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)
n.tokenize[n.tokenize.length-1]=a(e-1)}else"{"==t.peek()&&(n.tokenize[n.tokenize.length-1]=a(e+1))
return i(t,n)}}function s(){var e=!1
return function(t,n){return e?(n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)):(e=!0,i(t,n))}}function l(e,t,n,r){return function(i,o){var l,c=!1
for("read-quoted-paused"===o.context.type&&(o.context=o.context.prev,i.eat("}"));null!=(l=i.next());){if(l==e&&(r||!c)){o.tokenize.pop()
break}if(n&&"#"==l&&!c){if(i.eat("{")){"}"==e&&(o.context={prev:o.context,type:"read-quoted-paused"}),o.tokenize.push(a())
break}if(/[@\$]/.test(i.peek())){o.tokenize.push(s())
break}}c=!c&&"\\"==l}return t}}function c(e,t){return function(n,r){return t&&n.eatSpace(),n.match(e)?r.tokenize.pop():n.skipToEnd(),"string"}}function u(e,t){return e.sol()&&e.match("=end")&&e.eol()&&t.tokenize.pop(),e.skipToEnd(),"comment"}var d,f=n(["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload","__END__","__FILE__","__LINE__","__dir__"]),p=n(["def","class","case","for","while","until","module","then","catch","loop","proc","begin"]),h=n(["end","until"]),m={"[":"]","{":"}","(":")"},g={"]":"[","}":"{",")":"("}
return{startState:function(){return{tokenize:[i],indented:0,context:{type:"top",indented:-t.indentUnit},continuedLine:!1,lastTok:null,varList:!1}},token:function(e,t){d=null,e.sol()&&(t.indented=e.indentation())
var n,r=t.tokenize[t.tokenize.length-1](e,t),i=d
if("ident"==r){var o=e.current()
r="."==t.lastTok?"property":f.propertyIsEnumerable(e.current())?"keyword":/^[A-Z]/.test(o)?"tag":"def"==t.lastTok||"class"==t.lastTok||t.varList?"def":"variable","keyword"==r&&(i=o,p.propertyIsEnumerable(o)?n="indent":h.propertyIsEnumerable(o)?n="dedent":"if"!=o&&"unless"!=o||e.column()!=e.indentation()?"do"==o&&t.context.indented<t.indented&&(n="indent"):n="indent")}return(d||r&&"comment"!=r)&&(t.lastTok=i),"|"==d&&(t.varList=!t.varList),"indent"==n||/[\(\[\{]/.test(d)?t.context={prev:t.context,type:d||r,indented:t.indented}:("dedent"==n||/[\)\]\}]/.test(d))&&t.context.prev&&(t.context=t.context.prev),e.eol()&&(t.continuedLine="\\"==d||"operator"==r),r},indent:function(n,r){if(n.tokenize[n.tokenize.length-1]!=i)return e.Pass
var o=r&&r.charAt(0),a=n.context,s=a.type==g[o]||"keyword"==a.type&&/^(?:end|until|else|elsif|when|rescue)\b/.test(r)
return a.indented+(s?0:t.indentUnit)+(n.continuedLine?t.indentUnit:0)},electricInput:/^\s*(?:end|rescue|elsif|else|\})$/,lineComment:"#",fold:"indent"}}),e.defineMIME("text/x-ruby","ruby")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../../addon/mode/simple")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../addon/mode/simple"],e):e(CodeMirror)}(function(e){"use strict"
e.defineSimpleMode("rust",{start:[{regex:/b?"/,token:"string",next:"string"},{regex:/b?r"/,token:"string",next:"string_raw"},{regex:/b?r#+"/,token:"string",next:"string_raw_hash"},{regex:/'(?:[^'\\]|\\(?:[nrt0'"]|x[\da-fA-F]{2}|u\{[\da-fA-F]{6}\}))'/,token:"string-2"},{regex:/b'(?:[^']|\\(?:['\\nrt0]|x[\da-fA-F]{2}))'/,token:"string-2"},{regex:/(?:(?:[0-9][0-9_]*)(?:(?:[Ee][+-]?[0-9_]+)|\.[0-9_]+(?:[Ee][+-]?[0-9_]+)?)(?:f32|f64)?)|(?:0(?:b[01_]+|(?:o[0-7_]+)|(?:x[0-9a-fA-F_]+))|(?:[0-9][0-9_]*))(?:u8|u16|u32|u64|i8|i16|i32|i64|isize|usize)?/,token:"number"},{regex:/(let(?:\s+mut)?|fn|enum|mod|struct|type|union)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/,token:["keyword",null,"def"]},{regex:/(?:abstract|alignof|as|async|await|box|break|continue|const|crate|do|dyn|else|enum|extern|fn|for|final|if|impl|in|loop|macro|match|mod|move|offsetof|override|priv|proc|pub|pure|ref|return|self|sizeof|static|struct|super|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,token:"keyword"},{regex:/\b(?:Self|isize|usize|char|bool|u8|u16|u32|u64|f16|f32|f64|i8|i16|i32|i64|str|Option)\b/,token:"atom"},{regex:/\b(?:true|false|Some|None|Ok|Err)\b/,token:"builtin"},{regex:/\b(fn)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/,token:["keyword",null,"def"]},{regex:/#!?\[.*\]/,token:"meta"},{regex:/\/\/.*/,token:"comment"},{regex:/\/\*/,token:"comment",next:"comment"},{regex:/[-+\/*=<>!]+/,token:"operator"},{regex:/[a-zA-Z_]\w*!/,token:"variable-3"},{regex:/[a-zA-Z_]\w*/,token:"variable"},{regex:/[\{\[\(]/,indent:!0},{regex:/[\}\]\)]/,dedent:!0}],string:[{regex:/"/,token:"string",next:"start"},{regex:/(?:[^\\"]|\\(?:.|$))*/,token:"string"}],string_raw:[{regex:/"/,token:"string",next:"start"},{regex:/[^"]*/,token:"string"}],string_raw_hash:[{regex:/"#+/,token:"string",next:"start"},{regex:/(?:[^"]|"(?!#))*/,token:"string"}],comment:[{regex:/.*?\*\//,token:"comment",next:"start"},{regex:/.*/,token:"comment"}],meta:{dontIndentStates:["comment"],electricInput:/^\s*\}$/,blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}}),e.defineMIME("text/x-rustsrc","rust"),e.defineMIME("text/rust","rust")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("shell",function(){function t(e,t){for(var n=0;n<t.length;n++)a[t[n]]=e}function n(e,t){if(e.eatSpace())return null
var n=e.sol(),i=e.next()
if("\\"===i)return e.next(),null
if("'"===i||'"'===i||"`"===i)return t.tokens.unshift(r(i,"`"===i?"quote":"string")),o(e,t)
if("#"===i)return n&&e.eat("!")?(e.skipToEnd(),"meta"):(e.skipToEnd(),"comment")
if("$"===i)return t.tokens.unshift(u),o(e,t)
if("+"===i||"="===i)return"operator"
if("-"===i)return e.eat("-"),e.eatWhile(/\w/),"attribute"
if(/\d/.test(i)&&(e.eatWhile(/\d/),e.eol()||!/\w/.test(e.peek())))return"number"
e.eatWhile(/[\w-]/)
var s=e.current()
return"="===e.peek()&&/\w+/.test(s)?"def":a.hasOwnProperty(s)?a[s]:null}function r(e,t){var n="("==e?")":"{"==e?"}":e
return function(a,s){for(var l,c=!1;null!=(l=a.next());){if(l===n&&!c){s.tokens.shift()
break}if("$"===l&&!c&&"'"!==e&&a.peek()!=n){c=!0,a.backUp(1),s.tokens.unshift(u)
break}if(!c&&e!==n&&l===e)return s.tokens.unshift(r(e,t)),o(a,s)
if(!c&&/['"]/.test(l)&&!/['"]/.test(e)){s.tokens.unshift(i(l,"string")),a.backUp(1)
break}c=!c&&"\\"===l}return t}}function i(e,t){return function(n,i){return i.tokens[0]=r(e,t),n.next(),o(n,i)}}function o(e,t){return(t.tokens[0]||n)(e,t)}var a={},s=["true","false"],l=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],c=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"]
e.registerHelper("hintWords","shell",s.concat(l,c)),t("atom",s),t("keyword",l),t("builtin",c)
var u=function(e,t){t.tokens.length>1&&e.eat("$")
var n=e.next()
return/['"({]/.test(n)?(t.tokens[0]=r(n,"("==n?"quote":"{"==n?"def":"string"),o(e,t)):(/\d/.test(n)||e.eatWhile(/\w/),t.tokens.shift(),"def")}
return{startState:function(){return{tokens:[]}},token:function(e,t){return o(e,t)},closeBrackets:"()[]{}''\"\"``",lineComment:"#",fold:"brace"}}),e.defineMIME("text/x-sh","shell"),e.defineMIME("application/x-sh","shell")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t;null!=(t=e.next());)if("`"==t&&!e.eat("`"))return"variable-2"
return e.backUp(e.current().length-1),e.eatWhile(/\w/)?"variable-2":null}function n(e){for(var t;null!=(t=e.next());)if('"'==t&&!e.eat('"'))return"variable-2"
return e.backUp(e.current().length-1),e.eatWhile(/\w/)?"variable-2":null}function r(e){return e.eat("@")&&(e.match(/^session\./),e.match(/^local\./),e.match(/^global\./)),e.eat("'")?(e.match(/^.*'/),"variable-2"):e.eat('"')?(e.match(/^.*"/),"variable-2"):e.eat("`")?(e.match(/^.*`/),"variable-2"):e.match(/^[0-9a-zA-Z$\.\_]+/)?"variable-2":null}function i(e){return e.eat("N")?"atom":e.match(/^[a-zA-Z.#!?]/)?"variable-2":null}function o(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}e.defineMode("sql",function(t,n){function r(e,t){var n=e.next()
if(v[n]){var r=v[n](e,t)
if(r!==!1)return r}if(g.hexNumber&&("0"==n&&e.match(/^[xX][0-9a-fA-F]+/)||("x"==n||"X"==n)&&e.match(/^'[0-9a-fA-F]+'/)))return"number"
if(g.binaryNumber&&(("b"==n||"B"==n)&&e.match(/^'[01]+'/)||"0"==n&&e.match(/^b[01]+/)))return"number"
if(n.charCodeAt(0)>47&&n.charCodeAt(0)<58)return e.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/),g.decimallessFloat&&e.match(/^\.(?!\.)/),"number"
if("?"==n&&(e.eatSpace()||e.eol()||e.eat(";")))return"variable-3"
if("'"==n||'"'==n&&g.doubleQuote)return t.tokenize=i(n),t.tokenize(e,t)
if((g.nCharCast&&("n"==n||"N"==n)||g.charsetCast&&"_"==n&&e.match(/[a-z][a-z0-9]*/i))&&("'"==e.peek()||'"'==e.peek()))return"keyword"
if(g.escapeConstant&&("e"==n||"E"==n)&&("'"==e.peek()||'"'==e.peek()&&g.doubleQuote))return t.tokenize=function(e,t){return(t.tokenize=i(e.next(),!0))(e,t)},"keyword"
if(g.commentSlashSlash&&"/"==n&&e.eat("/"))return e.skipToEnd(),"comment"
if(g.commentHash&&"#"==n||"-"==n&&e.eat("-")&&(!g.commentSpaceRequired||e.eat(" ")))return e.skipToEnd(),"comment"
if("/"==n&&e.eat("*"))return t.tokenize=l(1),t.tokenize(e,t)
if("."!=n){if(m.test(n))return e.eatWhile(m),"operator"
if(k.test(n))return"bracket"
if(x.test(n))return e.eatWhile(x),"punctuation"
if("{"==n&&(e.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/)||e.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/)))return"number"
e.eatWhile(/^[_\w\d]/)
var o=e.current().toLowerCase()
return y.hasOwnProperty(o)&&(e.match(/^( )+'[^']*'/)||e.match(/^( )+"[^"]*"/))?"number":f.hasOwnProperty(o)?"atom":p.hasOwnProperty(o)?"builtin":h.hasOwnProperty(o)?"keyword":d.hasOwnProperty(o)?"string-2":null}return g.zerolessFloat&&e.match(/^(?:\d+(?:e[+-]?\d+)?)/i)?"number":e.match(/^\.+/)?null:g.ODBCdotTable&&e.match(/^[\w\d_$#]+/)?"variable-2":void 0}function i(e,t){return function(n,i){for(var o,a=!1;null!=(o=n.next());){if(o==e&&!a){i.tokenize=r
break}a=(b||t)&&!a&&"\\"==o}return"string"}}function l(e){return function(t,n){var i=t.match(/^.*?(\/\*|\*\/)/)
return i?"/*"==i[1]?n.tokenize=l(e+1):e>1?n.tokenize=l(e-1):n.tokenize=r:t.skipToEnd(),"comment"}}function c(e,t,n){t.context={prev:t.context,indent:e.indentation(),col:e.column(),type:n}}function u(e){e.indent=e.context.indent,e.context=e.context.prev}var d=n.client||{},f=n.atoms||{"false":!0,"true":!0,"null":!0},p=n.builtin||o(s),h=n.keywords||o(a),m=n.operatorChars||/^[*+\-%<>!=&|~^\/]/,g=n.support||{},v=n.hooks||{},y=n.dateSQL||{date:!0,time:!0,timestamp:!0},b=n.backslashStringEscapes!==!1,k=n.brackets||/^[\{}\(\)\[\]]/,x=n.punctuation||/^[;.,:]/
return{startState:function(){return{tokenize:r,context:null}},token:function(e,t){if(e.sol()&&t.context&&null==t.context.align&&(t.context.align=!1),t.tokenize==r&&e.eatSpace())return null
var n=t.tokenize(e,t)
if("comment"==n)return n
t.context&&null==t.context.align&&(t.context.align=!0)
var i=e.current()
return"("==i?c(e,t,")"):"["==i?c(e,t,"]"):t.context&&t.context.type==i&&u(t),n},indent:function(n,r){var i=n.context
if(!i)return e.Pass
var o=r.charAt(0)==i.type
return i.align?i.col+(o?0:1):i.indent+(o?0:t.indentUnit)},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:g.commentSlashSlash?"//":g.commentHash?"#":"--",closeBrackets:"()[]{}''\"\"``"}})
var a="alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ",s="bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric"
e.defineMIME("text/x-sql",{name:"sql",keywords:o(a+"begin"),builtin:o(s),atoms:o("false true null unknown"),dateSQL:o("date time timestamp"),support:o("ODBCdotTable doubleQuote binaryNumber hexNumber")}),e.defineMIME("text/x-mssql",{name:"sql",client:o("$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id"),keywords:o(a+"begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with"),builtin:o("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),atoms:o("is not null like and or in left right between inner outer join all any some cross unpivot pivot exists"),operatorChars:/^[*+\-%<>!=^\&|\/]/,brackets:/^[\{}\(\)]/,punctuation:/^[;.,:\/]/,backslashStringEscapes:!1,dateSQL:o("date datetimeoffset datetime2 smalldatetime datetime time"),hooks:{"@":r}}),e.defineMIME("text/x-mysql",{name:"sql",client:o("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),keywords:o(a+"accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),builtin:o("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),atoms:o("false true null unknown"),operatorChars:/^[*+\-%<>!=&|^]/,dateSQL:o("date time timestamp"),support:o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),hooks:{"@":r,"`":t,"\\":i}}),e.defineMIME("text/x-mariadb",{name:"sql",client:o("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),keywords:o(a+"accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),builtin:o("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),atoms:o("false true null unknown"),operatorChars:/^[*+\-%<>!=&|^]/,dateSQL:o("date time timestamp"),support:o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),hooks:{"@":r,"`":t,"\\":i}}),e.defineMIME("text/x-sqlite",{name:"sql",client:o("auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width"),keywords:o(a+"abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without"),builtin:o("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real"),atoms:o("null current_date current_time current_timestamp"),operatorChars:/^[*+\-%<>!=&|\/~]/,dateSQL:o("date time timestamp datetime"),support:o("decimallessFloat zerolessFloat"),identifierQuote:'"',hooks:{"@":r,":":r,"?":r,$:r,'"':n,"`":t}}),e.defineMIME("text/x-cassandra",{name:"sql",client:{},keywords:o("add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"),builtin:o("ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"),atoms:o("false true infinity NaN"),operatorChars:/^[<>=]/,dateSQL:{},support:o("commentSlashSlash decimallessFloat"),hooks:{}}),e.defineMIME("text/x-plsql",{name:"sql",client:o("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),keywords:o("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),builtin:o("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),operatorChars:/^[*\/+\-%<>!=~]/,dateSQL:o("date time timestamp"),support:o("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")}),e.defineMIME("text/x-hive",{name:"sql",keywords:o("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with admin authorization char compact compactions conf cube current current_date current_timestamp day decimal defined dependency directories elem_type exchange file following for grouping hour ignore inner interval jar less logical macro minute month more none noscan over owner partialscan preceding pretty principals protection reload rewrite role roles rollup rows second server sets skewed transactions truncate unbounded unset uri user values window year"),builtin:o("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype key_type utctimestamp value_type varchar"),atoms:o("false true null unknown"),operatorChars:/^[*+\-%<>!=]/,dateSQL:o("date timestamp"),support:o("ODBCdotTable doubleQuote binaryNumber hexNumber")}),e.defineMIME("text/x-pgsql",{name:"sql",client:o("source"),keywords:o(a+"a abort abs absent absolute access according action ada add admin after aggregate alias all allocate also alter always analyse analyze and any are array array_agg array_max_cardinality as asc asensitive assert assertion assignment asymmetric at atomic attach attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli between bigint binary bit bit_length blob blocked bom boolean both breadth by c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain char char_length character character_length character_set_catalog character_set_name character_set_schema characteristics characters check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column column_name columns command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constant constraint constraint_catalog constraint_name constraint_schema constraints constructor contains content continue control conversion convert copy corr corresponding cost count covar_pop covar_samp create cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datatype date datetime_interval_code datetime_interval_precision day db deallocate debug dec decimal declare default defaults deferrable deferred defined definer degree delete delimiter delimiters dense_rank depends depth deref derived desc describe descriptor detach detail deterministic diagnostics dictionary disable discard disconnect dispatch distinct dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain double drop dump dynamic dynamic_function dynamic_function_code each element else elseif elsif empty enable encoding encrypted end end_frame end_partition endexec enforced enum equals errcode error escape event every except exception exclude excluding exclusive exec execute exists exit exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreach foreign fortran forward found frame_row free freeze from fs full function functions fusion g general generated get global go goto grant granted greatest group grouping groups handler having header hex hierarchy hint hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import in include including increment indent index indexes indicator info inherit inherits initially inline inner inout input insensitive insert instance instantiable instead int integer integrity intersect intersection interval into invoker is isnull isolation join k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like like_regex limit link listen ln load local localtime localtimestamp location locator lock locked log logged loop lower m map mapping match matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized not nothing notice notify notnull nowait nth_value ntile null nullable nullif nulls number numeric object occurrences_regex octet_length octets of off offset oids old on only open operator option options or order ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password path percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding precision prepare prepared preserve primary print_strict_params prior privileges procedural procedure procedures program public publication query quote raise range rank read reads real reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result result_oid return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns reverse revoke right role rollback rollup routine routine_catalog routine_name routine_schema routines row row_count row_number rows rowtype rule savepoint scale schema schema_name schemas scope scope_catalog scope_name scope_schema scroll search second section security select selective self sensitive sequence sequences serializable server server_name session session_user set setof sets share show similar simple size skip slice smallint snapshot some source space specific specific_name specifictype sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable stacked standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time system_user t table table_name tables tablesample tablespace temp template temporary text then ties time timestamp timezone_hour timezone_minute to token top_level_count trailing transaction transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted union unique unknown unlink unlisten unlogged unnamed unnest until untyped update upper uri usage use_column use_variable user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of values var_pop var_samp varbinary varchar variable_conflict variadic varying verbose version versioning view views volatile warning when whenever where while whitespace width_bucket window with within without work wrapper write xml xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes zone"),builtin:o("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),atoms:o("false true null unknown"),operatorChars:/^[*\/+\-%<>!=&|^\/#@?~]/,backslashStringEscapes:!1,dateSQL:o("date time timestamp"),support:o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast escapeConstant")}),e.defineMIME("text/x-gql",{name:"sql",keywords:o("ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where"),atoms:o("false true"),builtin:o("blob datetime first key __key__ string integer double boolean null"),operatorChars:/^[*+\-%<>!=]/}),e.defineMIME("text/x-gpsql",{name:"sql",client:o("source"),keywords:o("abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone"),builtin:o("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),atoms:o("false true null unknown"),operatorChars:/^[*+\-%<>!=&|^\/#@?~]/,dateSQL:o("date time timestamp"),support:o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")}),e.defineMIME("text/x-sparksql",{name:"sql",keywords:o("add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases datata dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with"),builtin:o("tinyint smallint int bigint boolean float double string binary timestamp decimal array map struct uniontype delimited serde sequencefile textfile rcfile inputformat outputformat"),atoms:o("false true null"),operatorChars:/^[*\/+\-%<>!=~&|^]/,dateSQL:o("date time timestamp"),support:o("ODBCdotTable doubleQuote zerolessFloat")}),e.defineMIME("text/x-esper",{name:"sql",client:o("source"),keywords:o("alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window"),
builtin:{},atoms:o("false true null"),operatorChars:/^[*+\-%<>!=&|^\/#@?~]/,dateSQL:o("time"),support:o("decimallessFloat zerolessFloat binaryNumber hexNumber")})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0
return t}function n(e,t,n){if(e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null
var r=e.peek()
if("/"==r){if(e.match("//"))return e.skipToEnd(),"comment"
if(e.match("/*"))return t.tokenize.push(o),o(e,t)}if(e.match(x))return"builtin"
if(e.match(w))return"attribute"
if(e.match(m))return"number"
if(e.match(g))return"number"
if(e.match(v))return"number"
if(e.match(y))return"number"
if(e.match(k))return"property"
if(p.indexOf(r)>-1)return e.next(),"operator"
if(h.indexOf(r)>-1)return e.next(),e.match(".."),"punctuation"
var a
if(a=e.match(/("""|"|')/)){var s=i.bind(null,a[0])
return t.tokenize.push(s),s(e,t)}if(e.match(b)){var l=e.current()
return f.hasOwnProperty(l)?"variable-2":d.hasOwnProperty(l)?"atom":c.hasOwnProperty(l)?(u.hasOwnProperty(l)&&(t.prev="define"),"keyword"):"define"==n?"def":"variable"}return e.next(),null}function r(){var e=0
return function(t,r,i){var o=n(t,r,i)
if("punctuation"==o)if("("==t.current())++e
else if(")"==t.current()){if(0==e)return t.backUp(1),r.tokenize.pop(),r.tokenize[r.tokenize.length-1](t,r);--e}return o}}function i(e,t,n){for(var i,o=1==e.length,a=!1;i=t.peek();)if(a){if(t.next(),"("==i)return n.tokenize.push(r()),"string"
a=!1}else{if(t.match(e))return n.tokenize.pop(),"string"
t.next(),a="\\"==i}return o&&n.tokenize.pop(),"string"}function o(e,t){for(var n;;){if(e.match(/^[^\/*]+/,!0),n=e.next(),!n)break
"/"===n&&e.eat("*")?t.tokenize.push(o):"*"===n&&e.eat("/")&&t.tokenize.pop()}return"comment"}function a(e,t,n){this.prev=e,this.align=t,this.indented=n}function s(e,t){var n=t.match(/^\s*($|\/[\/\*])/,!1)?null:t.column()+1
e.context=new a(e.context,n,e.indented)}function l(e){e.context&&(e.indented=e.context.indented,e.context=e.context.prev)}var c=t(["_","var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","open","public","internal","fileprivate","private","deinit","init","new","override","self","subscript","super","convenience","dynamic","final","indirect","lazy","required","static","unowned","unowned(safe)","unowned(unsafe)","weak","as","is","break","case","continue","default","else","fallthrough","for","guard","if","in","repeat","switch","where","while","defer","return","inout","mutating","nonmutating","catch","do","rethrows","throw","throws","try","didSet","get","set","willSet","assignment","associativity","infix","left","none","operator","postfix","precedence","precedencegroup","prefix","right","Any","AnyObject","Type","dynamicType","Self","Protocol","__COLUMN__","__FILE__","__FUNCTION__","__LINE__"]),u=t(["var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","for"]),d=t(["true","false","nil","self","super","_"]),f=t(["Array","Bool","Character","Dictionary","Double","Float","Int","Int8","Int16","Int32","Int64","Never","Optional","Set","String","UInt8","UInt16","UInt32","UInt64","Void"]),p="+-/*%=|&<>~^?!",h=":;,.(){}[]",m=/^\-?0b[01][01_]*/,g=/^\-?0o[0-7][0-7_]*/,v=/^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,y=/^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,b=/^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,k=/^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,x=/^\#[A-Za-z]+/,w=/^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/
e.defineMode("swift",function(e){return{startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(e,t){var r=t.prev
t.prev=null
var i=t.tokenize[t.tokenize.length-1]||n,o=i(e,t,r)
if(o&&"comment"!=o?t.prev||(t.prev=o):t.prev=r,"punctuation"==o){var a=/[\(\[\{]|([\]\)\}])/.exec(e.current())
a&&(a[1]?l:s)(t,e)}return o},indent:function(t,n){var r=t.context
if(!r)return 0
var i=/^[\]\}\)]/.test(n)
return null!=r.align?r.align-(i?1:0):r.indented+(i?0:e.indentUnit)},electricInput:/^\s*[\)\}\]]$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/",fold:"brace",closeBrackets:"()[]{}''\"\"``"}}),e.defineMIME("text/x-swift","swift")}),function(e){"use strict"
"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../../addon/mode/overlay"),require("../xml/xml"),require("../javascript/javascript"),require("../coffeescript/coffeescript"),require("../css/css"),require("../sass/sass"),require("../stylus/stylus"),require("../pug/pug"),require("../handlebars/handlebars")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../addon/mode/overlay","../xml/xml","../javascript/javascript","../coffeescript/coffeescript","../css/css","../sass/sass","../stylus/stylus","../pug/pug","../handlebars/handlebars"],e):e(CodeMirror)}(function(e){var t={script:[["lang",/coffee(script)?/,"coffeescript"],["type",/^(?:text|application)\/(?:x-)?coffee(?:script)?$/,"coffeescript"],["lang",/^babel$/,"javascript"],["type",/^text\/babel$/,"javascript"],["type",/^text\/ecmascript-\d+$/,"javascript"]],style:[["lang",/^stylus$/i,"stylus"],["lang",/^sass$/i,"sass"],["lang",/^less$/i,"text/x-less"],["lang",/^scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?styl(us)?$/i,"stylus"],["type",/^text\/sass/i,"sass"],["type",/^(text\/)?(x-)?scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?less$/i,"text/x-less"]],template:[["lang",/^vue-template$/i,"vue"],["lang",/^pug$/i,"pug"],["lang",/^handlebars$/i,"handlebars"],["type",/^(text\/)?(x-)?pug$/i,"pug"],["type",/^text\/x-handlebars-template$/i,"handlebars"],[null,null,"vue-template"]]}
e.defineMode("vue-template",function(t,n){var r={token:function(e){if(e.match(/^\{\{.*?\}\}/))return"meta mustache"
for(;e.next()&&!e.match("{{",!1););return null}}
return e.overlayMode(e.getMode(t,n.backdrop||"text/html"),r)}),e.defineMode("vue",function(n){return e.getMode(n,{name:"htmlmixed",tags:t})},"htmlmixed","xml","javascript","coffeescript","css","sass","stylus","pug","handlebars"),e.defineMIME("script/x-vue","vue"),e.defineMIME("text/x-vue","vue")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("yaml",function(){var e=["true","false","on","off","yes","no"],t=new RegExp("\\b(("+e.join(")|(")+"))$","i")
return{token:function(e,n){var r=e.peek(),i=n.escaped
if(n.escaped=!1,"#"==r&&(0==e.pos||/\s/.test(e.string.charAt(e.pos-1))))return e.skipToEnd(),"comment"
if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string"
if(n.literal&&e.indentation()>n.keyCol)return e.skipToEnd(),"string"
if(n.literal&&(n.literal=!1),e.sol()){if(n.keyCol=0,n.pair=!1,n.pairStart=!1,e.match(/---/))return"def"
if(e.match(/\.\.\./))return"def"
if(e.match(/\s*-\s+/))return"meta"}if(e.match(/^(\{|\}|\[|\])/))return"{"==r?n.inlinePairs++:"}"==r?n.inlinePairs--:"["==r?n.inlineList++:n.inlineList--,"meta"
if(n.inlineList>0&&!i&&","==r)return e.next(),"meta"
if(n.inlinePairs>0&&!i&&","==r)return n.keyCol=0,n.pair=!1,n.pairStart=!1,e.next(),"meta"
if(n.pairStart){if(e.match(/^\s*(\||\>)\s*/))return n.literal=!0,"meta"
if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2"
if(0==n.inlinePairs&&e.match(/^\s*-?[0-9\.\,]+\s?$/))return"number"
if(n.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number"
if(e.match(t))return"keyword"}return!n.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(n.pair=!0,n.keyCol=e.indentation(),"atom"):n.pair&&e.match(/^:\s*/)?(n.pairStart=!0,"meta"):(n.pairStart=!1,n.escaped="\\"==r,e.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}}),e.defineMIME("text/x-yaml","yaml"),e.defineMIME("text/yaml","yaml")}),function(){"use strict"
!function(e){e.defineMode("better-markdown",function(t,n){var r=function(e){return e.codeBlock?"line-code-block":null},i={startState:function(){return{codeBlock:!1}},copyState:function(e){return{codeBlock:e.codeBlock}},token:function(e,t){return t.codeBlock?e.match(/^```+/)?(t.codeBlock=!1,"line-code-block-end"):(e.skipToEnd(),r(t)):e.sol()&&e.match(/^```+/)?(e.skipToEnd(),t.codeBlock=!0,"line-code-block-start"):(e.next(),r(t))},blankLine:r},o={highlightFormatting:!0,tokenTypeOverrides:{code:"code"}}
for(var a in n)o[a]=n[a]
return o.name="gfm",e.overlayMode(e.getMode(t,o),i,!0)},"markdown"),e.defineMIME("text/x-better-markdown","better-markdown")}(window.CodeMirror),CodeMirror.defineMode("solidity",function(){var e=["address","bool","string","var","int","int8","int16","int24","int32","int40","int48","int56","int64","int72","int80","int88","int96","int104","int112","int120","int128","int136","int144","int152","int160","int168","int176","int184","int192","int200","int208","int216","int224","int232","int240","int248","int256","uint","uint8","uint16","uint24","uint32","uint40","uint48","uint56","uint64","uint72","uint80","uint88","uint96","uint104","uint112","uint120","uint128","uint136","uint144","uint152","uint160","uint168","uint176","uint184","uint192","uint200","uint208","uint216","uint224","uint232","uint240","uint248","uint256","byte","bytes","bytes1","bytes2","bytes3","bytes4","bytes5","bytes6","bytes7","bytes8","bytes9","bytes10","bytes11","bytes12","bytes13","bytes14","bytes15","bytes16","bytes17","bytes18","bytes19","bytes20","bytes21","bytes22","bytes23","bytes24","bytes25","bytes26","bytes27","bytes28","bytes29","bytes30","bytes31","bytes32","wei","szabo","finney","ether","seconds","minutes","hours","days","weeks","years"],t=["anonymous","as","constant","else","event","external","for","from","if","import","indexed","internal","memory","new","payable","pragma","private","public","pure","require","return","returns","storage","this","view","while"],n=new RegExp("("+e.join("|")+")\\b"),r=new RegExp("("+t.join("|")+")\\b")
return{startState:function(){return{blockDeclaration:!1,variableDeclaration:!1,structVariableDeclaration:!1,insideComment:!1}},copyState:function(e){return{blockDeclaration:e.blockDeclaration,variableDeclaration:e.variableDeclaration,structVariableDeclaration:e.structVariableDeclaration,insideComment:e.insideComment}},token:function(e,t){if(e.match(/\/\*/))return t.insideComment=!0,"comment"
if(t.insideComment)return e.match(/.*?\*\//)?t.insideComment=!1:e.next(),"comment"
if(e.match(/\/\/.*/))return"comment"
if(e.match(/"(?:[^\\]|\\.)*?(?:"|$)/)||e.match(/'(?:[^\\]|\\.)*?(?:'|$)/))return"string"
if("."===e.peek())return t.property=!0,e.next(),null
if(t.structVariableDeclaration&&e.match(/[\w$]+\s*:/))return e.backUp(1),"property"
if(e.match(/\(\s*{/))return t.structVariableDeclaration=!0,null
if(e.match(/}\s*\)/))return t.structVariableDeclaration=!1,null
if(t.property){if(t.property=!1,e.eatWhile(/[a-zA-Z$_][\w$]*/))return"property"
e.next()}if(e.match(n))return t.mappingDeclaration||(t.variableDeclaration=!0),"type"
if(e.match(r))return"keyword"
if(e.match(/mapping\b/))return t.mappingDeclaration=!0,"keyword"
if(e.match(/(contract|modifier|function|library|struct|enum)\b/))return t.blockDeclaration=!0,"keyword"
if(t.variableDeclaration){if(!/[^A-Za-z0-9_$ ]/.test(e.peek()))return e.next(),"variable"
t.variableDeclaration=!1}if(e.match(/[A-Z][a-z_$]*[\w$]*\s*/))return"("===e.peek()?"variable":(t.mappingDeclaration||(t.variableDeclaration=!0),"variable-3")
if(t.mappingDeclaration&&")"===e.peek())return e.next(),t.mappingDeclaration=!1,t.mappingName=!0,null
if(t.mappingName){if(!/[^A-Za-z0-9_$ ]/.test(e.peek()))return e.next(),"variable"
t.mappingName=!1}return e.match(/true|false/)?"atom":t.blockDeclaration&&e.match(/.+?(?=({|\())/)?(t.blockDeclaration=!1,"variable"):e.match(/[a-zA-Z_$][\w$]*/)?"variable":e.match(/0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i)?"number":(e.next(),null)}}})}()

//# sourceMappingURL=shared-codemirror.min-ee3ae9df.js.map
