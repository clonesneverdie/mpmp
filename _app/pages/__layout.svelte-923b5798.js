import{D as J,W as ge,F as Me,G as ke,H as Ee,S as U,i as L,s as R,l as K,g as M,I as A,d as o,J as Y,K as Q,e as f,t as O,c as v,a as _,h as N,L as u,M as H,j as Ie,N as pe,O as xe,k as x,w as S,m as V,x as W,b as w,y as j,q as E,o as D,B as q,P as de,Q as Ve,R as ce,T as ye,n as De,p as Ce,U as Pe,V as Ae,X as Fe,Y as Oe,Z as Ne}from"../chunks/vendor-ad2d9906.js";import{b as Se}from"../chunks/env-859c48a7.js";const G=J(!1),Z=()=>{G.set(!G)},me=J(""),fe=J(),ve=J(!1);let _e,be,z,ee,$e,we,te;console.log(Se),_e=window.ethereum,be=window.WalletConnectProvider.default,we={walletconnect:{package:be,options:{rpc:{137:"https://polygonscan.com/"},network:"matic"}}},ee=new ge({cacheProvider:!0,providerOptions:we,disableInjectedProvider:!1});async function We(){return await te.getAddress()}async function je(){return $e=await ee.connect(),z=new Me($e),te=z.getSigner(),te}async function qe(){await ee.clearCachedProvider(),z=null}async function Be(l,e,s,t){let a=await new ke(l,e,s).balanceOf(t);return Ee(a)}async function He(){await _e.request({method:"wallet_addEthereumChain",params:[{chainId:"0x89",chainName:"Polygon Mainnet",nativeCurrency:{name:"Matic",symbol:"MATIC",decimals:18},rpcUrls:["https://polygon-rpc.com/"],blockExplorerUrls:["https://polygonscan.com/"]}]})}var Ue=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"}],name:"Snapshot",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"INITIAL_SUPPLY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"snapshotId",type:"uint256"}],name:"balanceOfAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"burnFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"buyback",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"emitter",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_buyback",type:"address"}],name:"setBuybackFund",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_emitter",type:"address"}],name:"setEmitter",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whitehole",type:"address"}],name:"setWhitehole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"snapshot",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"snapshotId",type:"uint256"}],name:"totalSupplyAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"whitehole",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}];function Le(l){let e,s,t,n;return{c(){e=f("div"),s=O("Wallet Connect")},l(a){e=v(a,"DIV",{});var i=_(e);s=N(i,"Wallet Connect"),i.forEach(o)},m(a,i){M(a,e,i),u(e,s),t||(n=H(e,"click",l[2]),t=!0)},p:A,d(a){a&&o(e),t=!1,n()}}}function Re(l){let e,s,t,n;return{c(){e=f("div"),s=O(l[0])},l(a){e=v(a,"DIV",{});var i=_(e);s=N(i,l[0]),i.forEach(o)},m(a,i){M(a,e,i),u(e,s),t||(n=H(e,"click",qe),t=!0)},p(a,i){i&1&&Ie(s,a[0])},d(a){a&&o(e),t=!1,n()}}}function Ye(l){let e;function s(a,i){return a[1]===!0?Re:Le}let t=s(l),n=t(l);return{c(){n.c(),e=K()},l(a){n.l(a),e=K()},m(a,i){n.m(a,i),M(a,e,i)},p(a,[i]){t===(t=s(a))&&n?n.p(a,i):(n.d(1),n=t(a),n&&(n.c(),n.m(e.parentNode,e)))},i:A,o:A,d(a){n.d(a),a&&o(e)}}}function Ge(l,e,s){let t,n,a;Y(l,ve,m=>s(1,t=m)),Y(l,me,m=>s(3,n=m)),Y(l,fe,m=>s(4,a=m));let i;async function y(){s(0,i=await Be("0x818E6b4bEa1C1FfF712464FE057d4791Efc6D552",Ue,a,n)),console.log(i)}async function p(){Q(fe,a=await je(),a),Q(me,n=await We(),n),await He(),console.log(n),Q(ve,t=!0,t),y()}return l.$$.update=()=>{l.$$.dirty&1&&s(0,i)},[i,t,p]}class he extends U{constructor(e){super();L(this,e,Ge,Ye,R,{})}}function Je(l){let e,s,t,n,a,i,y,p,m,b,d,r,c,C;return p=new he({}),d=new pe({props:{icon:xe,color:"#E3DAE7"}}),{c(){e=f("header"),s=f("div"),t=f("div"),n=O("MPMP"),a=x(),i=f("div"),y=f("div"),S(p.$$.fragment),m=x(),b=f("div"),S(d.$$.fragment),this.h()},l(h){e=v(h,"HEADER",{class:!0});var g=_(e);s=v(g,"DIV",{class:!0});var B=_(s);t=v(B,"DIV",{});var k=_(t);n=N(k,"MPMP"),k.forEach(o),B.forEach(o),a=V(g),i=v(g,"DIV",{class:!0});var P=_(i);y=v(P,"DIV",{class:!0});var I=_(y);W(p.$$.fragment,I),I.forEach(o),m=V(P),b=v(P,"DIV",{class:!0});var F=_(b);W(d.$$.fragment,F),F.forEach(o),P.forEach(o),g.forEach(o),this.h()},h(){w(s,"class","logo-wrap svelte-1306yfk"),w(y,"class","wallet-btn svelte-1306yfk"),w(b,"class","nav-icon svelte-1306yfk"),w(i,"class","menu-wrap svelte-1306yfk"),w(e,"class","svelte-1306yfk")},m(h,g){M(h,e,g),u(e,s),u(s,t),u(t,n),u(e,a),u(e,i),u(i,y),j(p,y,null),u(i,m),u(i,b),j(d,b,null),r=!0,c||(C=[H(y,"click",Z),H(b,"click",l[1])],c=!0)},p:A,i(h){r||(E(p.$$.fragment,h),E(d.$$.fragment,h),r=!0)},o(h){D(p.$$.fragment,h),D(d.$$.fragment,h),r=!1},d(h){h&&o(e),q(p),q(d),c=!1,de(C)}}}function Ke(l,e,s){let t;return Y(l,G,a=>s(0,t=a)),[t,()=>{Q(G,t=!t,t)}]}class Qe extends U{constructor(e){super();L(this,e,Ke,Je,R,{})}}function Xe(l){let e,s,t;return{c(){e=f("footer"),s=f("div"),t=O("Footer"),this.h()},l(n){e=v(n,"FOOTER",{class:!0});var a=_(e);s=v(a,"DIV",{class:!0});var i=_(s);t=N(i,"Footer"),i.forEach(o),a.forEach(o),this.h()},h(){w(s,"class","content-wrap"),w(e,"class","svelte-1ikeeje")},m(n,a){M(n,e,a),u(e,s),u(s,t)},p:A,i:A,o:A,d(n){n&&o(e)}}}class Ze extends U{constructor(e){super();L(this,e,null,Xe,R,{})}}function Te(l){let e,s,t,n,a,i,y,p,m,b,d,r,c,C,h,g,B,k,P,I,F,X,ne;return n=new pe({props:{icon:Pe,color:"#E3DAE7"}}),p=new he({}),{c(){e=f("nav"),s=f("div"),t=f("div"),S(n.$$.fragment),a=x(),i=f("div"),y=f("div"),S(p.$$.fragment),m=x(),b=f("div"),d=O("Clone V3"),r=x(),c=f("div"),C=O("Clone Parts"),h=x(),g=f("div"),B=O("Swap"),P=x(),I=f("div"),this.h()},l($){e=v($,"NAV",{class:!0});var T=_(e);s=v(T,"DIV",{class:!0});var ae=_(s);t=v(ae,"DIV",{class:!0});var se=_(t);W(n.$$.fragment,se),se.forEach(o),ae.forEach(o),a=V(T),i=v(T,"DIV",{class:!0});var ie=_(i);y=v(ie,"DIV",{class:!0});var re=_(y);W(p.$$.fragment,re),re.forEach(o),ie.forEach(o),m=V(T),b=v(T,"DIV",{class:!0});var le=_(b);d=N(le,"Clone V3"),le.forEach(o),r=V(T),c=v(T,"DIV",{class:!0});var oe=_(c);C=N(oe,"Clone Parts"),oe.forEach(o),h=V(T),g=v(T,"DIV",{class:!0});var ue=_(g);B=N(ue,"Swap"),ue.forEach(o),T.forEach(o),P=V($),I=v($,"DIV",{class:!0}),_(I).forEach(o),this.h()},h(){w(t,"class","close-btn svelte-mxb7dg"),w(s,"class","close svelte-mxb7dg"),w(y,"class","wallet-btn svelte-mxb7dg"),w(i,"class","btn-wrap svelte-mxb7dg"),w(b,"class","menu svelte-mxb7dg"),w(c,"class","menu svelte-mxb7dg"),w(g,"class","menu svelte-mxb7dg"),w(e,"class","svelte-mxb7dg"),w(I,"class","back svelte-mxb7dg")},m($,T){M($,e,T),u(e,s),u(s,t),j(n,t,null),u(e,a),u(e,i),u(i,y),j(p,y,null),u(e,m),u(e,b),u(b,d),u(e,r),u(e,c),u(c,C),u(e,h),u(e,g),u(g,B),M($,P,T),M($,I,T),F=!0,X||(ne=[H(t,"click",Z),H(I,"click",Z)],X=!0)},p:A,i($){F||(E(n.$$.fragment,$),E(p.$$.fragment,$),Ve(()=>{k||(k=ce(e,ye,{x:250,opacity:1},!0)),k.run(1)}),F=!0)},o($){D(n.$$.fragment,$),D(p.$$.fragment,$),k||(k=ce(e,ye,{x:250,opacity:1},!1)),k.run(0),F=!1},d($){$&&o(e),q(n),q(p),$&&k&&k.end(),$&&o(P),$&&o(I),X=!1,de(ne)}}}function ze(l){let e,s,t=l[0]&&Te();return{c(){t&&t.c(),e=K()},l(n){t&&t.l(n),e=K()},m(n,a){t&&t.m(n,a),M(n,e,a),s=!0},p(n,[a]){n[0]?t?(t.p(n,a),a&1&&E(t,1)):(t=Te(),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(De(),D(t,1,1,()=>{t=null}),Ce())},i(n){s||(E(t),s=!0)},o(n){D(t),s=!1},d(n){t&&t.d(n),n&&o(e)}}}function et(l,e,s){let t;return Y(l,G,n=>s(0,t=n)),[t]}class tt extends U{constructor(e){super();L(this,e,et,ze,R,{})}}function nt(l){let e,s,t,n,a,i,y,p,m;e=new Qe({}),t=new tt({});const b=l[1].default,d=Ae(b,l,l[0],null);return p=new Ze({}),{c(){S(e.$$.fragment),s=x(),S(t.$$.fragment),n=x(),a=f("main"),i=f("div"),d&&d.c(),y=x(),S(p.$$.fragment),this.h()},l(r){W(e.$$.fragment,r),s=V(r),W(t.$$.fragment,r),n=V(r),a=v(r,"MAIN",{class:!0});var c=_(a);i=v(c,"DIV",{class:!0});var C=_(i);d&&d.l(C),C.forEach(o),c.forEach(o),y=V(r),W(p.$$.fragment,r),this.h()},h(){w(i,"class","wrap svelte-1adshqw"),w(a,"class","svelte-1adshqw")},m(r,c){j(e,r,c),M(r,s,c),j(t,r,c),M(r,n,c),M(r,a,c),u(a,i),d&&d.m(i,null),M(r,y,c),j(p,r,c),m=!0},p(r,[c]){d&&d.p&&(!m||c&1)&&Fe(d,b,r,r[0],m?Ne(b,r[0],c,null):Oe(r[0]),null)},i(r){m||(E(e.$$.fragment,r),E(t.$$.fragment,r),E(d,r),E(p.$$.fragment,r),m=!0)},o(r){D(e.$$.fragment,r),D(t.$$.fragment,r),D(d,r),D(p.$$.fragment,r),m=!1},d(r){q(e,r),r&&o(s),q(t,r),r&&o(n),r&&o(a),d&&d.d(r),r&&o(y),q(p,r)}}}function at(l,e,s){let{$$slots:t={},$$scope:n}=e;return l.$$set=a=>{"$$scope"in a&&s(0,n=a.$$scope)},[n,t]}class rt extends U{constructor(e){super();L(this,e,at,nt,R,{})}}export{rt as default};
