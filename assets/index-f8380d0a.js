import{B as Oe,ca as Pe,cb as $e,cc as je,cd as Be,ce as Fe,cf as Ie,b$ as Xr,bU as k,cg as _e,c0 as Re}from"./index-660e9d5a.js";const De=Object.freeze(Object.defineProperty({__proto__:null,BigNumber:Oe,FixedFormat:Pe,FixedNumber:$e,_base16To36:je,_base36To16:Be,formatFixed:Fe,parseFixed:Ie},Symbol.toStringTag,{value:"Module"})),tn=Xr(De);var Zr={exports:{}},Pr=Object.prototype.toString,Qr=function(e){var t=Pr.call(e),n=t==="[object Arguments]";return n||(n=t!=="[object Array]"&&e!==null&&typeof e=="object"&&typeof e.length=="number"&&e.length>=0&&Pr.call(e.callee)==="[object Function]"),n},lr,$r;function Ue(){if($r)return lr;$r=1;var r;if(!Object.keys){var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,n=Qr,i=Object.prototype.propertyIsEnumerable,f=!i.call({toString:null},"toString"),s=i.call(function(){},"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=function(p){var v=p.constructor;return v&&v.prototype===p},d={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},w=function(){if(typeof window>"u")return!1;for(var p in window)try{if(!d["$"+p]&&e.call(window,p)&&window[p]!==null&&typeof window[p]=="object")try{c(window[p])}catch{return!0}}catch{return!0}return!1}(),P=function(p){if(typeof window>"u"||!w)return c(p);try{return c(p)}catch{return!1}};r=function(v){var I=v!==null&&typeof v=="object",B=t.call(v)==="[object Function]",N=n(v),ar=I&&t.call(v)==="[object String]",R=[];if(!I&&!B&&!N)throw new TypeError("Object.keys called on a non-object");var z=s&&B;if(ar&&v.length>0&&!e.call(v,0))for(var V=0;V<v.length;++V)R.push(String(V));if(N&&v.length>0)for(var j=0;j<v.length;++j)R.push(String(j));else for(var D in v)!(z&&D==="prototype")&&e.call(v,D)&&R.push(String(D));if(f)for(var U=P(v),_=0;_<l.length;++_)!(U&&l[_]==="constructor")&&e.call(v,l[_])&&R.push(l[_]);return R}}return lr=r,lr}var qe=Array.prototype.slice,Ne=Qr,jr=Object.keys,er=jr?function(e){return jr(e)}:Ue(),Br=Object.keys;er.shim=function(){if(Object.keys){var e=function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2);e||(Object.keys=function(n){return Ne(n)?Br(qe.call(n)):Br(n)})}else Object.keys=er;return Object.keys||er};var ke=er,re=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var i=42;e[t]=i;for(t in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var f=Object.getOwnPropertySymbols(e);if(f.length!==1||f[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var s=Object.getOwnPropertyDescriptor(e,t);if(s.value!==i||s.enumerable!==!0)return!1}return!0},Te=Error,Me=EvalError,Ge=RangeError,ze=ReferenceError,ee=SyntaxError,ir=TypeError,xe=URIError,Fr=typeof Symbol<"u"&&Symbol,Ce=re,We=function(){return typeof Fr!="function"||typeof Symbol!="function"||typeof Fr("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Ce()},cr={__proto__:null,foo:{}},Le=Object,He=function(){return{__proto__:cr}.foo===cr.foo&&!(cr instanceof Le)},Je="Function.prototype.bind called on incompatible ",Ve=Object.prototype.toString,Ke=Math.max,Ye="[object Function]",Ir=function(e,t){for(var n=[],i=0;i<e.length;i+=1)n[i]=e[i];for(var f=0;f<t.length;f+=1)n[f+e.length]=t[f];return n},Xe=function(e,t){for(var n=[],i=t||0,f=0;i<e.length;i+=1,f+=1)n[f]=e[i];return n},Ze=function(r,e){for(var t="",n=0;n<r.length;n+=1)t+=r[n],n+1<r.length&&(t+=e);return t},Qe=function(e){var t=this;if(typeof t!="function"||Ve.apply(t)!==Ye)throw new TypeError(Je+t);for(var n=Xe(arguments,1),i,f=function(){if(this instanceof i){var w=t.apply(this,Ir(n,arguments));return Object(w)===w?w:this}return t.apply(e,Ir(n,arguments))},s=Ke(0,t.length-n.length),l=[],c=0;c<s;c++)l[c]="$"+c;if(i=Function("binder","return function ("+Ze(l,",")+"){ return binder.apply(this,arguments); }")(f),t.prototype){var d=function(){};d.prototype=t.prototype,i.prototype=new d,d.prototype=null}return i},rt=Qe,wr=Function.prototype.bind||rt,et=Function.prototype.call,tt=Object.prototype.hasOwnProperty,nt=wr,ot=nt.call(et,tt),y,it=Te,at=Me,ft=Ge,ut=ze,H=ee,L=ir,st=xe,te=Function,yr=function(r){try{return te('"use strict"; return ('+r+").constructor;")()}catch{}},T=Object.getOwnPropertyDescriptor;if(T)try{T({},"")}catch{T=null}var pr=function(){throw new L},lt=T?function(){try{return arguments.callee,pr}catch{try{return T(arguments,"callee").get}catch{return pr}}}():pr,x=We(),ct=He(),S=Object.getPrototypeOf||(ct?function(r){return r.__proto__}:null),W={},yt=typeof Uint8Array>"u"||!S?y:S(Uint8Array),M={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?y:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?y:ArrayBuffer,"%ArrayIteratorPrototype%":x&&S?S([][Symbol.iterator]()):y,"%AsyncFromSyncIteratorPrototype%":y,"%AsyncFunction%":W,"%AsyncGenerator%":W,"%AsyncGeneratorFunction%":W,"%AsyncIteratorPrototype%":W,"%Atomics%":typeof Atomics>"u"?y:Atomics,"%BigInt%":typeof BigInt>"u"?y:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?y:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?y:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?y:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":it,"%eval%":eval,"%EvalError%":at,"%Float32Array%":typeof Float32Array>"u"?y:Float32Array,"%Float64Array%":typeof Float64Array>"u"?y:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?y:FinalizationRegistry,"%Function%":te,"%GeneratorFunction%":W,"%Int8Array%":typeof Int8Array>"u"?y:Int8Array,"%Int16Array%":typeof Int16Array>"u"?y:Int16Array,"%Int32Array%":typeof Int32Array>"u"?y:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":x&&S?S(S([][Symbol.iterator]())):y,"%JSON%":typeof JSON=="object"?JSON:y,"%Map%":typeof Map>"u"?y:Map,"%MapIteratorPrototype%":typeof Map>"u"||!x||!S?y:S(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?y:Promise,"%Proxy%":typeof Proxy>"u"?y:Proxy,"%RangeError%":ft,"%ReferenceError%":ut,"%Reflect%":typeof Reflect>"u"?y:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?y:Set,"%SetIteratorPrototype%":typeof Set>"u"||!x||!S?y:S(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?y:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":x&&S?S(""[Symbol.iterator]()):y,"%Symbol%":x?Symbol:y,"%SyntaxError%":H,"%ThrowTypeError%":lt,"%TypedArray%":yt,"%TypeError%":L,"%Uint8Array%":typeof Uint8Array>"u"?y:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?y:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?y:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?y:Uint32Array,"%URIError%":st,"%WeakMap%":typeof WeakMap>"u"?y:WeakMap,"%WeakRef%":typeof WeakRef>"u"?y:WeakRef,"%WeakSet%":typeof WeakSet>"u"?y:WeakSet};if(S)try{null.error}catch(r){var pt=S(S(r));M["%Error.prototype%"]=pt}var gt=function r(e){var t;if(e==="%AsyncFunction%")t=yr("async function () {}");else if(e==="%GeneratorFunction%")t=yr("function* () {}");else if(e==="%AsyncGeneratorFunction%")t=yr("async function* () {}");else if(e==="%AsyncGenerator%"){var n=r("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var i=r("%AsyncGenerator%");i&&S&&(t=S(i.prototype))}return M[e]=t,t},_r={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Y=wr,nr=ot,vt=Y.call(Function.call,Array.prototype.concat),ht=Y.call(Function.apply,Array.prototype.splice),Rr=Y.call(Function.call,String.prototype.replace),or=Y.call(Function.call,String.prototype.slice),dt=Y.call(Function.call,RegExp.prototype.exec),mt=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,bt=/\\(\\)?/g,Et=function(e){var t=or(e,0,1),n=or(e,-1);if(t==="%"&&n!=="%")throw new H("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new H("invalid intrinsic syntax, expected opening `%`");var i=[];return Rr(e,mt,function(f,s,l,c){i[i.length]=l?Rr(c,bt,"$1"):s||f}),i},wt=function(e,t){var n=e,i;if(nr(_r,n)&&(i=_r[n],n="%"+i[0]+"%"),nr(M,n)){var f=M[n];if(f===W&&(f=gt(n)),typeof f>"u"&&!t)throw new L("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:i,name:n,value:f}}throw new H("intrinsic "+e+" does not exist!")},X=function(e,t){if(typeof e!="string"||e.length===0)throw new L("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new L('"allowMissing" argument must be a boolean');if(dt(/^%?[^%]*%?$/,e)===null)throw new H("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=Et(e),i=n.length>0?n[0]:"",f=wt("%"+i+"%",t),s=f.name,l=f.value,c=!1,d=f.alias;d&&(i=d[0],ht(n,vt([0,1],d)));for(var w=1,P=!0;w<n.length;w+=1){var p=n[w],v=or(p,0,1),I=or(p,-1);if((v==='"'||v==="'"||v==="`"||I==='"'||I==="'"||I==="`")&&v!==I)throw new H("property names with quotes must have matching quotes");if((p==="constructor"||!P)&&(c=!0),i+="."+p,s="%"+i+"%",nr(M,s))l=M[s];else if(l!=null){if(!(p in l)){if(!t)throw new L("base intrinsic for "+e+" exists, but the property is not available.");return}if(T&&w+1>=n.length){var B=T(l,p);P=!!B,P&&"get"in B&&!("originalValue"in B.get)?l=B.get:l=l[p]}else P=nr(l,p),l=l[p];P&&!c&&(M[s]=l)}}return l},ne={exports:{}},gr,Dr;function Ar(){if(Dr)return gr;Dr=1;var r=X,e=r("%Object.defineProperty%",!0)||!1;if(e)try{e({},"a",{value:1})}catch{e=!1}return gr=e,gr}var At=X,tr=At("%Object.getOwnPropertyDescriptor%",!0);if(tr)try{tr([],"length")}catch{tr=null}var oe=tr,Ur=Ar(),St=ee,C=ir,qr=oe,Ot=function(e,t,n){if(!e||typeof e!="object"&&typeof e!="function")throw new C("`obj` must be an object or a function`");if(typeof t!="string"&&typeof t!="symbol")throw new C("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new C("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new C("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new C("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new C("`loose`, if provided, must be a boolean");var i=arguments.length>3?arguments[3]:null,f=arguments.length>4?arguments[4]:null,s=arguments.length>5?arguments[5]:null,l=arguments.length>6?arguments[6]:!1,c=!!qr&&qr(e,t);if(Ur)Ur(e,t,{configurable:s===null&&c?c.configurable:!s,enumerable:i===null&&c?c.enumerable:!i,value:n,writable:f===null&&c?c.writable:!f});else if(l||!i&&!f&&!s)e[t]=n;else throw new St("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},hr=Ar(),ie=function(){return!!hr};ie.hasArrayLengthDefineBug=function(){if(!hr)return null;try{return hr([],"length",{value:1}).length!==1}catch{return!0}};var Pt=ie,$t=X,Nr=Ot,jt=Pt(),kr=oe,Tr=ir,Bt=$t("%Math.floor%"),Ft=function(e,t){if(typeof e!="function")throw new Tr("`fn` is not a function");if(typeof t!="number"||t<0||t>4294967295||Bt(t)!==t)throw new Tr("`length` must be a positive 32-bit integer");var n=arguments.length>2&&!!arguments[2],i=!0,f=!0;if("length"in e&&kr){var s=kr(e,"length");s&&!s.configurable&&(i=!1),s&&!s.writable&&(f=!1)}return(i||f||!n)&&(jt?Nr(e,"length",t,!0,!0):Nr(e,"length",t)),e};(function(r){var e=wr,t=X,n=Ft,i=ir,f=t("%Function.prototype.apply%"),s=t("%Function.prototype.call%"),l=t("%Reflect.apply%",!0)||e.call(s,f),c=Ar(),d=t("%Math.max%");r.exports=function(p){if(typeof p!="function")throw new i("a function is required");var v=l(e,s,arguments);return n(v,1+d(0,p.length-(arguments.length-1)),!0)};var w=function(){return l(e,f,arguments)};c?c(r.exports,"apply",{value:w}):r.exports.apply=w})(ne);var It=ne.exports,ae=X,fe=It,_t=fe(ae("String.prototype.indexOf")),Rt=function(e,t){var n=ae(e,!!t);return typeof n=="function"&&_t(e,".prototype.")>-1?fe(n):n},Dt=ke,ue=re(),se=Rt,Mr=Object,Ut=se("Array.prototype.push"),Gr=se("Object.prototype.propertyIsEnumerable"),qt=ue?Object.getOwnPropertySymbols:null,Nt=function(e,t){if(e==null)throw new TypeError("target must be an object");var n=Mr(e);if(arguments.length===1)return n;for(var i=1;i<arguments.length;++i){var f=Mr(arguments[i]),s=Dt(f),l=ue&&(Object.getOwnPropertySymbols||qt);if(l)for(var c=l(f),d=0;d<c.length;++d){var w=c[d];Gr(f,w)&&Ut(s,w)}for(var P=0;P<s.length;++P){var p=s[P];if(Gr(f,p)){var v=f[p];n[p]=v}}}return n},vr=Nt,kt=function(){if(!Object.assign)return!1;for(var r="abcdefghijklmnopqrst",e=r.split(""),t={},n=0;n<e.length;++n)t[e[n]]=e[n];var i=Object.assign({},t),f="";for(var s in i)f+=s;return r!==f},Tt=function(){if(!Object.assign||!Object.preventExtensions)return!1;var r=Object.preventExtensions({1:2});try{Object.assign(r,"xy")}catch{return r[1]==="y"}return!1},Mt=function(){return!Object.assign||kt()||Tt()?vr:Object.assign},le={},Gt=function(e){return e&&typeof e=="object"&&typeof e.copy=="function"&&typeof e.fill=="function"&&typeof e.readUInt8=="function"},dr={exports:{}};typeof Object.create=="function"?dr.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:dr.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e};var zt=dr.exports;(function(r){var e=/%[sdj%]/g;r.format=function(o){if(!z(o)){for(var a=[],u=0;u<arguments.length;u++)a.push(i(arguments[u]));return a.join(" ")}for(var u=1,m=arguments,O=m.length,b=String(o).replace(e,function(E){if(E==="%%")return"%";if(u>=O)return E;switch(E){case"%s":return String(m[u++]);case"%d":return Number(m[u++]);case"%j":try{return JSON.stringify(m[u++])}catch{return"[Circular]"}default:return E}}),h=m[u];u<O;h=m[++u])N(h)||!U(h)?b+=" "+h:b+=" "+i(h);return b},r.deprecate=function(o,a){if(j(k.process))return function(){return r.deprecate(o,a).apply(this,arguments)};if(process.noDeprecation===!0)return o;var u=!1;function m(){if(!u){if(process.throwDeprecation)throw new Error(a);process.traceDeprecation?console.trace(a):console.error(a),u=!0}return o.apply(this,arguments)}return m};var t={},n;r.debuglog=function(o){if(j(n)&&(n={}.NODE_DEBUG||""),o=o.toUpperCase(),!t[o])if(new RegExp("\\b"+o+"\\b","i").test(n)){var a=process.pid;t[o]=function(){var u=r.format.apply(r,arguments);console.error("%s %d: %s",o,a,u)}}else t[o]=function(){};return t[o]};function i(o,a){var u={seen:[],stylize:s};return arguments.length>=3&&(u.depth=arguments[2]),arguments.length>=4&&(u.colors=arguments[3]),B(a)?u.showHidden=a:a&&r._extend(u,a),j(u.showHidden)&&(u.showHidden=!1),j(u.depth)&&(u.depth=2),j(u.colors)&&(u.colors=!1),j(u.customInspect)&&(u.customInspect=!0),u.colors&&(u.stylize=f),c(u,o,u.depth)}r.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function f(o,a){var u=i.styles[a];return u?"\x1B["+i.colors[u][0]+"m"+o+"\x1B["+i.colors[u][1]+"m":o}function s(o,a){return o}function l(o){var a={};return o.forEach(function(u,m){a[u]=!0}),a}function c(o,a,u){if(o.customInspect&&a&&Q(a.inspect)&&a.inspect!==r.inspect&&!(a.constructor&&a.constructor.prototype===a)){var m=a.inspect(u,o);return z(m)||(m=c(o,m,u)),m}var O=d(o,a);if(O)return O;var b=Object.keys(a),h=l(b);if(o.showHidden&&(b=Object.getOwnPropertyNames(a)),Z(a)&&(b.indexOf("message")>=0||b.indexOf("description")>=0))return w(a);if(b.length===0){if(Q(a)){var E=a.name?": "+a.name:"";return o.stylize("[Function"+E+"]","special")}if(D(a))return o.stylize(RegExp.prototype.toString.call(a),"regexp");if(_(a))return o.stylize(Date.prototype.toString.call(a),"date");if(Z(a))return w(a)}var A="",q=!1,rr=["{","}"];if(I(a)&&(q=!0,rr=["[","]"]),Q(a)){var Ae=a.name?": "+a.name:"";A=" [Function"+Ae+"]"}if(D(a)&&(A=" "+RegExp.prototype.toString.call(a)),_(a)&&(A=" "+Date.prototype.toUTCString.call(a)),Z(a)&&(A=" "+w(a)),b.length===0&&(!q||a.length==0))return rr[0]+A+rr[1];if(u<0)return D(a)?o.stylize(RegExp.prototype.toString.call(a),"regexp"):o.stylize("[Object]","special");o.seen.push(a);var sr;return q?sr=P(o,a,u,h,b):sr=b.map(function(Se){return p(o,a,u,h,Se,q)}),o.seen.pop(),v(sr,A,rr)}function d(o,a){if(j(a))return o.stylize("undefined","undefined");if(z(a)){var u="'"+JSON.stringify(a).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return o.stylize(u,"string")}if(R(a))return o.stylize(""+a,"number");if(B(a))return o.stylize(""+a,"boolean");if(N(a))return o.stylize("null","null")}function w(o){return"["+Error.prototype.toString.call(o)+"]"}function P(o,a,u,m,O){for(var b=[],h=0,E=a.length;h<E;++h)Or(a,String(h))?b.push(p(o,a,u,m,String(h),!0)):b.push("");return O.forEach(function(A){A.match(/^\d+$/)||b.push(p(o,a,u,m,A,!0))}),b}function p(o,a,u,m,O,b){var h,E,A;if(A=Object.getOwnPropertyDescriptor(a,O)||{value:a[O]},A.get?A.set?E=o.stylize("[Getter/Setter]","special"):E=o.stylize("[Getter]","special"):A.set&&(E=o.stylize("[Setter]","special")),Or(m,O)||(h="["+O+"]"),E||(o.seen.indexOf(A.value)<0?(N(u)?E=c(o,A.value,null):E=c(o,A.value,u-1),E.indexOf(`
`)>-1&&(b?E=E.split(`
`).map(function(q){return"  "+q}).join(`
`).substr(2):E=`
`+E.split(`
`).map(function(q){return"   "+q}).join(`
`))):E=o.stylize("[Circular]","special")),j(h)){if(b&&O.match(/^\d+$/))return E;h=JSON.stringify(""+O),h.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(h=h.substr(1,h.length-2),h=o.stylize(h,"name")):(h=h.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),h=o.stylize(h,"string"))}return h+": "+E}function v(o,a,u){var m=o.reduce(function(O,b){return b.indexOf(`
`)>=0,O+b.replace(/\u001b\[\d\d?m/g,"").length+1},0);return m>60?u[0]+(a===""?"":a+`
 `)+" "+o.join(`,
  `)+" "+u[1]:u[0]+a+" "+o.join(", ")+" "+u[1]}function I(o){return Array.isArray(o)}r.isArray=I;function B(o){return typeof o=="boolean"}r.isBoolean=B;function N(o){return o===null}r.isNull=N;function ar(o){return o==null}r.isNullOrUndefined=ar;function R(o){return typeof o=="number"}r.isNumber=R;function z(o){return typeof o=="string"}r.isString=z;function V(o){return typeof o=="symbol"}r.isSymbol=V;function j(o){return o===void 0}r.isUndefined=j;function D(o){return U(o)&&fr(o)==="[object RegExp]"}r.isRegExp=D;function U(o){return typeof o=="object"&&o!==null}r.isObject=U;function _(o){return U(o)&&fr(o)==="[object Date]"}r.isDate=_;function Z(o){return U(o)&&(fr(o)==="[object Error]"||o instanceof Error)}r.isError=Z;function Q(o){return typeof o=="function"}r.isFunction=Q;function be(o){return o===null||typeof o=="boolean"||typeof o=="number"||typeof o=="string"||typeof o=="symbol"||typeof o>"u"}r.isPrimitive=be,r.isBuffer=Gt;function fr(o){return Object.prototype.toString.call(o)}function ur(o){return o<10?"0"+o.toString(10):o.toString(10)}var Ee=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function we(){var o=new Date,a=[ur(o.getHours()),ur(o.getMinutes()),ur(o.getSeconds())].join(":");return[o.getDate(),Ee[o.getMonth()],a].join(" ")}r.log=function(){console.log("%s - %s",we(),r.format.apply(r,arguments))},r.inherits=zt,r._extend=function(o,a){if(!a||!U(a))return o;for(var u=Object.keys(a),m=u.length;m--;)o[u[m]]=a[u[m]];return o};function Or(o,a){return Object.prototype.hasOwnProperty.call(o,a)}})(le);var xt=Mt();/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function zr(r,e){if(r===e)return 0;for(var t=r.length,n=e.length,i=0,f=Math.min(t,n);i<f;++i)if(r[i]!==e[i]){t=r[i],n=e[i];break}return t<n?-1:n<t?1:0}function K(r){return k.Buffer&&typeof k.Buffer.isBuffer=="function"?k.Buffer.isBuffer(r):!!(r!=null&&r._isBuffer)}var F=le,Ct=Object.prototype.hasOwnProperty,xr=Array.prototype.slice,ce=function(){return(function(){}).name==="foo"}();function Cr(r){return Object.prototype.toString.call(r)}function Wr(r){return K(r)||typeof k.ArrayBuffer!="function"?!1:typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r?!!(r instanceof DataView||r.buffer&&r.buffer instanceof ArrayBuffer):!1}var g=Zr.exports=pe,Wt=/\s*function\s+([^\(\s]*)\s*/;function ye(r){if(F.isFunction(r)){if(ce)return r.name;var e=r.toString(),t=e.match(Wt);return t&&t[1]}}g.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=Lt(this),this.generatedMessage=!0);var t=e.stackStartFunction||$;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var i=n.stack,f=ye(t),s=i.indexOf(`
`+f);if(s>=0){var l=i.indexOf(`
`,s+1);i=i.substring(l+1)}this.stack=i}}};F.inherits(g.AssertionError,Error);function Lr(r,e){return typeof r=="string"?r.length<e?r:r.slice(0,e):r}function Hr(r){if(ce||!F.isFunction(r))return F.inspect(r);var e=ye(r),t=e?": "+e:"";return"[Function"+t+"]"}function Lt(r){return Lr(Hr(r.actual),128)+" "+r.operator+" "+Lr(Hr(r.expected),128)}function $(r,e,t,n,i){throw new g.AssertionError({message:t,actual:r,expected:e,operator:n,stackStartFunction:i})}g.fail=$;function pe(r,e){r||$(r,!0,e,"==",g.ok)}g.ok=pe;g.equal=function(e,t,n){e!=t&&$(e,t,n,"==",g.equal)};g.notEqual=function(e,t,n){e==t&&$(e,t,n,"!=",g.notEqual)};g.deepEqual=function(e,t,n){J(e,t,!1)||$(e,t,n,"deepEqual",g.deepEqual)};g.deepStrictEqual=function(e,t,n){J(e,t,!0)||$(e,t,n,"deepStrictEqual",g.deepStrictEqual)};function J(r,e,t,n){if(r===e)return!0;if(K(r)&&K(e))return zr(r,e)===0;if(F.isDate(r)&&F.isDate(e))return r.getTime()===e.getTime();if(F.isRegExp(r)&&F.isRegExp(e))return r.source===e.source&&r.global===e.global&&r.multiline===e.multiline&&r.lastIndex===e.lastIndex&&r.ignoreCase===e.ignoreCase;if((r===null||typeof r!="object")&&(e===null||typeof e!="object"))return t?r===e:r==e;if(Wr(r)&&Wr(e)&&Cr(r)===Cr(e)&&!(r instanceof Float32Array||r instanceof Float64Array))return zr(new Uint8Array(r.buffer),new Uint8Array(e.buffer))===0;if(K(r)!==K(e))return!1;n=n||{actual:[],expected:[]};var i=n.actual.indexOf(r);return i!==-1&&i===n.expected.indexOf(e)?!0:(n.actual.push(r),n.expected.push(e),Ht(r,e,t,n))}function Jr(r){return Object.prototype.toString.call(r)=="[object Arguments]"}function Ht(r,e,t,n){if(r==null||e===null||e===void 0)return!1;if(F.isPrimitive(r)||F.isPrimitive(e))return r===e;if(t&&Object.getPrototypeOf(r)!==Object.getPrototypeOf(e))return!1;var i=Jr(r),f=Jr(e);if(i&&!f||!i&&f)return!1;if(i)return r=xr.call(r),e=xr.call(e),J(r,e,t);var s=Kr(r),l=Kr(e),c,d;if(s.length!==l.length)return!1;for(s.sort(),l.sort(),d=s.length-1;d>=0;d--)if(s[d]!==l[d])return!1;for(d=s.length-1;d>=0;d--)if(c=s[d],!J(r[c],e[c],t,n))return!1;return!0}g.notDeepEqual=function(e,t,n){J(e,t,!1)&&$(e,t,n,"notDeepEqual",g.notDeepEqual)};g.notDeepStrictEqual=ge;function ge(r,e,t){J(r,e,!0)&&$(r,e,t,"notDeepStrictEqual",ge)}g.strictEqual=function(e,t,n){e!==t&&$(e,t,n,"===",g.strictEqual)};g.notStrictEqual=function(e,t,n){e===t&&$(e,t,n,"!==",g.notStrictEqual)};function Vr(r,e){if(!r||!e)return!1;if(Object.prototype.toString.call(e)=="[object RegExp]")return e.test(r);try{if(r instanceof e)return!0}catch{}return Error.isPrototypeOf(e)?!1:e.call({},r)===!0}function Jt(r){var e;try{r()}catch(t){e=t}return e}function ve(r,e,t,n){var i;if(typeof e!="function")throw new TypeError('"block" argument must be a function');typeof t=="string"&&(n=t,t=null),i=Jt(e),n=(t&&t.name?" ("+t.name+").":".")+(n?" "+n:"."),r&&!i&&$(i,t,"Missing expected exception"+n);var f=typeof n=="string",s=!r&&F.isError(i),l=!r&&i&&!t;if((s&&f&&Vr(i,t)||l)&&$(i,t,"Got unwanted exception"+n),r&&i&&t&&!Vr(i,t)||!r&&i)throw i}g.throws=function(r,e,t){ve(!0,r,e,t)};g.doesNotThrow=function(r,e,t){ve(!1,r,e,t)};g.ifError=function(r){if(r)throw r};function he(r,e){r||$(r,!0,e,"==",he)}g.strict=xt(he,g,{equal:g.strictEqual,deepEqual:g.deepStrictEqual,notEqual:g.notStrictEqual,notDeepEqual:g.notDeepStrictEqual});g.strict.strict=g.strict;var Kr=Object.keys||function(r){var e=[];for(var t in r)Ct.call(r,t)&&e.push(t);return e},nn=Zr.exports;const on=Xr(_e);var G={},Vt=k&&k.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(G,"__esModule",{value:!0});G.getLength=G.decode=G.encode=void 0;var Kt=Vt(Re);function de(r){if(Array.isArray(r)){for(var e=[],t=0;t<r.length;t++)e.push(de(r[t]));var n=Buffer.concat(e);return Buffer.concat([Yr(n.length,192),n])}else{var i=Sr(r);return i.length===1&&i[0]<128?i:Buffer.concat([Yr(i.length,128),i])}}G.encode=de;function mr(r,e){if(r[0]==="0"&&r[1]==="0")throw new Error("invalid RLP: extra zeros");return parseInt(r,e)}function Yr(r,e){if(r<56)return Buffer.from([r+e]);var t=Er(r),n=t.length/2,i=Er(e+55+n);return Buffer.from(i+t,"hex")}function Yt(r,e){if(e===void 0&&(e=!1),!r||r.length===0)return Buffer.from([]);var t=Sr(r),n=br(t);if(e)return n;if(n.remainder.length!==0)throw new Error("invalid remainder");return n.data}G.decode=Yt;function Xt(r){if(!r||r.length===0)return Buffer.from([]);var e=Sr(r),t=e[0];if(t<=127)return e.length;if(t<=183)return t-127;if(t<=191)return t-182;if(t<=247)return t-191;var n=t-246,i=mr(e.slice(1,n).toString("hex"),16);return n+i}G.getLength=Xt;function br(r){var e,t,n,i,f,s=[],l=r[0];if(l<=127)return{data:r.slice(0,1),remainder:r.slice(1)};if(l<=183){if(e=l-127,l===128?n=Buffer.from([]):n=r.slice(1,e),e===2&&n[0]<128)throw new Error("invalid rlp encoding: byte must be less 0x80");return{data:n,remainder:r.slice(e)}}else if(l<=191){if(t=l-182,r.length-1<t)throw new Error("invalid RLP: not enough bytes for string length");if(e=mr(r.slice(1,t).toString("hex"),16),e<=55)throw new Error("invalid RLP: expected string length to be greater than 55");if(n=r.slice(t,e+t),n.length<e)throw new Error("invalid RLP: not enough bytes for string");return{data:n,remainder:r.slice(e+t)}}else if(l<=247){for(e=l-191,i=r.slice(1,e);i.length;)f=br(i),s.push(f.data),i=f.remainder;return{data:s,remainder:r.slice(e)}}else{t=l-246,e=mr(r.slice(1,t).toString("hex"),16);var c=t+e;if(c>r.length)throw new Error("invalid rlp: total length is larger than the data");if(i=r.slice(t,c),i.length===0)throw new Error("invalid rlp, List has a invalid length");for(;i.length;)f=br(i),s.push(f.data),i=f.remainder;return{data:s,remainder:r.slice(c)}}}function me(r){return r.slice(0,2)==="0x"}function Zt(r){return typeof r!="string"?r:me(r)?r.slice(2):r}function Er(r){if(r<0)throw new Error("Invalid integer as argument, must be unsigned!");var e=r.toString(16);return e.length%2?"0"+e:e}function Qt(r){return r.length%2?"0"+r:r}function rn(r){var e=Er(r);return Buffer.from(e,"hex")}function Sr(r){if(!Buffer.isBuffer(r)){if(typeof r=="string")return me(r)?Buffer.from(Qt(Zt(r)),"hex"):Buffer.from(r);if(typeof r=="number"||typeof r=="bigint")return r?rn(r):Buffer.from([]);if(r==null)return Buffer.from([]);if(r instanceof Uint8Array)return Buffer.from(r);if(Kt.default.isBN(r))return Buffer.from(r.toArray());throw new Error("invalid type")}return r}export{on as a,It as b,Rt as c,X as d,G as e,nn as f,oe as g,tn as r,re as s,ir as t};
