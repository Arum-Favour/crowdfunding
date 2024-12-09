import{a as $,c as d,r as F,b as h,g as j,d as x,s as _,l as z,e as W,f as b,h as Q,i as X,j as Z,n as ee,k as re}from"./satisfies-4645c1b8.js";const T=$,te=(r,t,e=!1)=>{if(r instanceof T)return r;try{return new T(r,t)}catch(n){if(!e)return null;throw n}};var v=te;const ne=v,se=(r,t)=>{const e=ne(r,t);return e?e.version:null};var oe=se;const ce=v,ae=(r,t)=>{const e=ce(r.trim().replace(/^[=v]+/,""),t);return e?e.version:null};var le=ae;const q=$,ie=(r,t,e,n,s)=>{typeof e=="string"&&(s=n,n=e,e=void 0);try{return new q(r instanceof q?r.version:r,e).inc(t,n,s).version}catch{return null}};var fe=ie;const I=v,ue=(r,t)=>{const e=I(r,null,!0),n=I(t,null,!0),s=e.compare(n);if(s===0)return null;const o=s>0,a=o?e:n,l=o?n:e,u=!!a.prerelease.length;if(!!l.prerelease.length&&!u)return!l.patch&&!l.minor?"major":a.patch?"patch":a.minor?"minor":"major";const f=u?"pre":"";return e.major!==n.major?f+"major":e.minor!==n.minor?f+"minor":e.patch!==n.patch?f+"patch":"prerelease"};var me=ue;const pe=$,$e=(r,t)=>new pe(r,t).major;var he=$e;const ve=$,ge=(r,t)=>new ve(r,t).minor;var de=ge;const we=$,Se=(r,t)=>new we(r,t).patch;var _e=Se;const Ee=v,Re=(r,t)=>{const e=Ee(r,t);return e&&e.prerelease.length?e.prerelease:null};var Ve=Re;const je=d,xe=(r,t,e)=>je(t,r,e);var ye=xe;const Ce=d,Pe=(r,t)=>Ce(r,t,!0);var Le=Pe;const O=$,Te=(r,t,e)=>{const n=new O(r,e),s=new O(t,e);return n.compare(s)||n.compareBuild(s)};var y=Te;const qe=y,Ie=(r,t)=>r.sort((e,n)=>qe(e,n,t));var Oe=Ie;const Ne=y,ke=(r,t)=>r.sort((e,n)=>Ne(n,e,t));var Ae=ke;const Be=$,De=v,{safeRe:w,t:S}=F,Ye=(r,t)=>{if(r instanceof Be)return r;if(typeof r=="number"&&(r=String(r)),typeof r!="string")return null;t=t||{};let e=null;if(!t.rtl)e=r.match(t.includePrerelease?w[S.COERCEFULL]:w[S.COERCE]);else{const u=t.includePrerelease?w[S.COERCERTLFULL]:w[S.COERCERTL];let m;for(;(m=u.exec(r))&&(!e||e.index+e[0].length!==r.length);)(!e||m.index+m[0].length!==e.index+e[0].length)&&(e=m),u.lastIndex=m.index+m[1].length+m[2].length;u.lastIndex=-1}if(e===null)return null;const n=e[2],s=e[3]||"0",o=e[4]||"0",a=t.includePrerelease&&e[5]?`-${e[5]}`:"",l=t.includePrerelease&&e[6]?`+${e[6]}`:"";return De(`${n}.${s}.${o}${a}${l}`,t)};var He=Ye;const Me=h(),Ge=(r,t)=>new Me(r,t).set.map(e=>e.map(n=>n.value).join(" ").trim().split(" "));var Ue=Ge;const Fe=$,ze=h(),We=(r,t,e)=>{let n=null,s=null,o=null;try{o=new ze(t,e)}catch{return null}return r.forEach(a=>{o.test(a)&&(!n||s.compare(a)===-1)&&(n=a,s=new Fe(n,e))}),n};var be=We;const Je=$,Ke=h(),Qe=(r,t,e)=>{let n=null,s=null,o=null;try{o=new Ke(t,e)}catch{return null}return r.forEach(a=>{o.test(a)&&(!n||s.compare(a)===1)&&(n=a,s=new Je(n,e))}),n};var Xe=Qe;const E=$,Ze=h(),N=j,er=(r,t)=>{r=new Ze(r,t);let e=new E("0.0.0");if(r.test(e)||(e=new E("0.0.0-0"),r.test(e)))return e;e=null;for(let n=0;n<r.set.length;++n){const s=r.set[n];let o=null;s.forEach(a=>{const l=new E(a.semver.version);switch(a.operator){case">":l.prerelease.length===0?l.patch++:l.prerelease.push(0),l.raw=l.format();case"":case">=":(!o||N(l,o))&&(o=l);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${a.operator}`)}}),o&&(!e||N(e,o))&&(e=o)}return e&&r.test(e)?e:null};var rr=er;const tr=h(),nr=(r,t)=>{try{return new tr(r,t).range||"*"}catch{return null}};var sr=nr;const or=$,J=x(),{ANY:cr}=J,ar=h(),lr=_,k=j,A=z,ir=W,fr=b,ur=(r,t,e,n)=>{r=new or(r,n),t=new ar(t,n);let s,o,a,l,u;switch(e){case">":s=k,o=ir,a=A,l=">",u=">=";break;case"<":s=A,o=fr,a=k,l="<",u="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(lr(r,t,n))return!1;for(let m=0;m<t.set.length;++m){const f=t.set[m];let i=null,p=null;if(f.forEach(c=>{c.semver===cr&&(c=new J(">=0.0.0")),i=i||c,p=p||c,s(c.semver,i.semver,n)?i=c:a(c.semver,p.semver,n)&&(p=c)}),i.operator===l||i.operator===u||(!p.operator||p.operator===l)&&o(r,p.semver))return!1;if(p.operator===u&&a(r,p.semver))return!1}return!0};var C=ur;const mr=C,pr=(r,t,e)=>mr(r,t,">",e);var $r=pr;const hr=C,vr=(r,t,e)=>hr(r,t,"<",e);var gr=vr;const B=h(),dr=(r,t,e)=>(r=new B(r,e),t=new B(t,e),r.intersects(t,e));var wr=dr;const Sr=_,_r=d;var Er=(r,t,e)=>{const n=[];let s=null,o=null;const a=r.sort((f,i)=>_r(f,i,e));for(const f of a)Sr(f,t,e)?(o=f,s||(s=f)):(o&&n.push([s,o]),o=null,s=null);s&&n.push([s,null]);const l=[];for(const[f,i]of n)f===i?l.push(f):!i&&f===a[0]?l.push("*"):i?f===a[0]?l.push(`<=${i}`):l.push(`${f} - ${i}`):l.push(`>=${f}`);const u=l.join(" || "),m=typeof t.raw=="string"?t.raw:String(t);return u.length<m.length?u:t};const D=h(),P=x(),{ANY:R}=P,g=_,L=d,Rr=(r,t,e={})=>{if(r===t)return!0;r=new D(r,e),t=new D(t,e);let n=!1;e:for(const s of r.set){for(const o of t.set){const a=jr(s,o,e);if(n=n||a!==null,a)continue e}if(n)return!1}return!0},Vr=[new P(">=0.0.0-0")],Y=[new P(">=0.0.0")],jr=(r,t,e)=>{if(r===t)return!0;if(r.length===1&&r[0].semver===R){if(t.length===1&&t[0].semver===R)return!0;e.includePrerelease?r=Vr:r=Y}if(t.length===1&&t[0].semver===R){if(e.includePrerelease)return!0;t=Y}const n=new Set;let s,o;for(const c of r)c.operator===">"||c.operator===">="?s=H(s,c,e):c.operator==="<"||c.operator==="<="?o=M(o,c,e):n.add(c.semver);if(n.size>1)return null;let a;if(s&&o){if(a=L(s.semver,o.semver,e),a>0)return null;if(a===0&&(s.operator!==">="||o.operator!=="<="))return null}for(const c of n){if(s&&!g(c,String(s),e)||o&&!g(c,String(o),e))return null;for(const K of t)if(!g(c,String(K),e))return!1;return!0}let l,u,m,f,i=o&&!e.includePrerelease&&o.semver.prerelease.length?o.semver:!1,p=s&&!e.includePrerelease&&s.semver.prerelease.length?s.semver:!1;i&&i.prerelease.length===1&&o.operator==="<"&&i.prerelease[0]===0&&(i=!1);for(const c of t){if(f=f||c.operator===">"||c.operator===">=",m=m||c.operator==="<"||c.operator==="<=",s){if(p&&c.semver.prerelease&&c.semver.prerelease.length&&c.semver.major===p.major&&c.semver.minor===p.minor&&c.semver.patch===p.patch&&(p=!1),c.operator===">"||c.operator===">="){if(l=H(s,c,e),l===c&&l!==s)return!1}else if(s.operator===">="&&!g(s.semver,String(c),e))return!1}if(o){if(i&&c.semver.prerelease&&c.semver.prerelease.length&&c.semver.major===i.major&&c.semver.minor===i.minor&&c.semver.patch===i.patch&&(i=!1),c.operator==="<"||c.operator==="<="){if(u=M(o,c,e),u===c&&u!==o)return!1}else if(o.operator==="<="&&!g(o.semver,String(c),e))return!1}if(!c.operator&&(o||s)&&a!==0)return!1}return!(s&&m&&!o&&a!==0||o&&f&&!s&&a!==0||p||i)},H=(r,t,e)=>{if(!r)return t;const n=L(r.semver,t.semver,e);return n>0?r:n<0||t.operator===">"&&r.operator===">="?t:r},M=(r,t,e)=>{if(!r)return t;const n=L(r.semver,t.semver,e);return n<0?r:n>0||t.operator==="<"&&r.operator==="<="?t:r};var xr=Rr;const V=F,G=Q,yr=$,U=X,Cr=v,Pr=oe,Lr=le,Tr=fe,qr=me,Ir=he,Or=de,Nr=_e,kr=Ve,Ar=d,Br=ye,Dr=Le,Yr=y,Hr=Oe,Mr=Ae,Gr=j,Ur=z,Fr=Z,zr=ee,Wr=b,br=W,Jr=re,Kr=He,Qr=x(),Xr=h(),Zr=_,et=Ue,rt=be,tt=Xe,nt=rr,st=sr,ot=C,ct=$r,at=gr,lt=wr,it=Er,ft=xr;var mt={parse:Cr,valid:Pr,clean:Lr,inc:Tr,diff:qr,major:Ir,minor:Or,patch:Nr,prerelease:kr,compare:Ar,rcompare:Br,compareLoose:Dr,compareBuild:Yr,sort:Hr,rsort:Mr,gt:Gr,lt:Ur,eq:Fr,neq:zr,gte:Wr,lte:br,cmp:Jr,coerce:Kr,Comparator:Qr,Range:Xr,satisfies:Zr,toComparators:et,maxSatisfying:rt,minSatisfying:tt,minVersion:nt,validRange:st,outside:ot,gtr:ct,ltr:at,intersects:lt,simplifyRange:it,subset:ft,SemVer:yr,re:V.re,src:V.src,tokens:V.t,SEMVER_SPEC_VERSION:G.SEMVER_SPEC_VERSION,RELEASE_TYPES:G.RELEASE_TYPES,compareIdentifiers:U.compareIdentifiers,rcompareIdentifiers:U.rcompareIdentifiers};export{mt as s};
