import{c as a,ai as A,a1 as E,bf as C,y as u,B as p,bT as I}from"./index-660e9d5a.js";import{I as y,c as R,D as w}from"./QueryParams-32a56510.browser.esm-54b09463.js";async function h(e,i,t,s,d){try{const l=(await a(()=>import("./IERC165-a27c30d6.js"),[])).default,c=new A(t,l,e),[f,v]=await Promise.all([c.supportsInterface(y),c.supportsInterface(R)]);if(f){const r=(await a(()=>import("./index-660e9d5a.js").then(T=>T.d_),["assets/index-660e9d5a.js","assets/index-e5ca45b5.css"])).default,n=new A(t,r,e);if(await n.isApprovedForAll(d,i))return!0;let o;try{o=await n.getApproved(s)}catch{}return(o==null?void 0:o.toLowerCase())===i.toLowerCase()}else if(v){const r=(await a(()=>import("./index-660e9d5a.js").then(_=>_.e0),["assets/index-660e9d5a.js","assets/index-e5ca45b5.css"])).default;return await new A(t,r,e).isApprovedForAll(d,i)}else return console.error("Contract does not implement ERC 1155 or ERC 721."),!1}catch(l){return console.error("Failed to check if token is approved",l),!1}}async function L(e,i,t,s,d){const l=(await a(()=>import("./IERC165-a27c30d6.js"),[])).default,c=new E(e.getSignerOrProvider(),t,l,e.options,e.storage),[f,v]=await Promise.all([c.read("supportsInterface",[y]),c.read("supportsInterface",[R])]);if(f){const r=(await a(()=>import("./index-660e9d5a.js").then(o=>o.d_),["assets/index-660e9d5a.js","assets/index-e5ca45b5.css"])).default,n=new E(e.getSignerOrProvider(),t,r,e.options,e.storage);await n.read("isApprovedForAll",[d,i])||(await n.read("getApproved",[s])).toLowerCase()===i.toLowerCase()||await n.sendTransaction("setApprovalForAll",[i,!0])}else if(v){const r=(await a(()=>import("./index-660e9d5a.js").then(o=>o.e0),["assets/index-660e9d5a.js","assets/index-e5ca45b5.css"])).default,n=new E(e.getSignerOrProvider(),t,r,e.options,e.storage);await n.read("isApprovedForAll",[d,i])||await n.sendTransaction("setApprovalForAll",[i,!0])}else throw Error("Contract must implement ERC 1155 or ERC 721.")}function q(e){switch(u(e.assetContractAddress!==void 0&&e.assetContractAddress!==null,"Asset contract address is required"),u(e.buyoutPricePerToken!==void 0&&e.buyoutPricePerToken!==null,"Buyout price is required"),u(e.listingDurationInSeconds!==void 0&&e.listingDurationInSeconds!==null,"Listing duration is required"),u(e.startTimestamp!==void 0&&e.startTimestamp!==null,"Start time is required"),u(e.tokenId!==void 0&&e.tokenId!==null,"Token ID is required"),u(e.quantity!==void 0&&e.quantity!==null,"Quantity is required"),e.type){case"NewAuctionListing":u(e.reservePricePerToken!==void 0&&e.reservePricePerToken!==null,"Reserve price is required")}}async function b(e,i,t){return{quantity:t.quantityDesired,pricePerToken:t.pricePerToken,currencyContractAddress:t.currency,buyerAddress:t.offeror,quantityDesired:t.quantityWanted,currencyValue:await C(e,t.currency,t.quantityWanted.mul(t.pricePerToken)),listingId:i}}function m(e,i,t){return t=p.from(t),e=p.from(e),i=p.from(i),e.eq(p.from(0))?!1:i.sub(e).mul(I).div(e).gte(t)}async function D(e,i,t){const s=[];for(;i-e>w;)s.push(t(e,e+w-1)),e+=w;return s.push(t(e,i-1)),await Promise.all(s)}export{m as a,D as g,L as h,h as i,b as m,q as v};