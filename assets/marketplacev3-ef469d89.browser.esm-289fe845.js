var m=Object.defineProperty;var g=(a,t,r)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;var o=(a,t,r)=>(g(a,typeof t!="symbol"?t+"":t,r),r);import{a as n}from"./assertEnabled-d1700f0b.browser.esm-e301c455.js";import{a as f,b as l,G as W,C,d as i}from"./contract-appuri-5c40af52.browser.esm-15dc8f76.js";import{cO as E,ae as A,af as w,ag as R,a1 as I,v as T,cP as O,a2 as L,T as S}from"./index-660e9d5a.js";import{C as F}from"./contract-interceptor-d7b164a7.browser.esm-7eabd2ea.js";import{C as _}from"./contract-platform-fee-e756e68f.browser.esm-d1cde511.js";import{C as b}from"./contract-roles-71988d2e.browser.esm-05209ca1.js";import{M as U,a as D,b as M}from"./marketplacev3-offers-ce1f096b.browser.esm-89a1ac8f.js";import"./cleanCurrencyAddress-ded19cfe.browser.esm-2936ea22.js";import"./setErc20Allowance-7f76f677.browser.esm-c38686ad.js";import"./marketplace-e3129e2f.browser.esm-78cbf887.js";import"./QueryParams-32a56510.browser.esm-54b09463.js";const s=class s{get directListings(){return n(this.detectDirectListings(),A)}get englishAuctions(){return n(this.detectEnglishAuctions(),w)}get offers(){return n(this.detectOffers(),R)}get chainId(){return this._chainId}constructor(t,r,e){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new I(t,r,c,h,e);this._chainId=d,this.abi=T.parse(c||[]),this.contractWrapper=u,this.storage=e,this.metadata=new f(this.contractWrapper,O,this.storage),this.app=new l(this.contractWrapper,this.metadata,this.storage),this.roles=new b(this.contractWrapper,s.contractRoles),this.encoder=new L(this.contractWrapper),this.estimator=new W(this.contractWrapper),this.events=new C(this.contractWrapper),this.platformFees=new _(this.contractWrapper),this.interceptor=new F(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async prepare(t,r,e){return S.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}detectDirectListings(){if(i(this.contractWrapper,"DirectListings"))return new U(this.contractWrapper,this.storage)}detectEnglishAuctions(){if(i(this.contractWrapper,"EnglishAuctions"))return new D(this.contractWrapper,this.storage)}detectOffers(){if(i(this.contractWrapper,"Offers"))return new M(this.contractWrapper,this.storage)}};o(s,"contractRoles",E);let p=s;export{p as MarketplaceV3};