import{r as t,_ as r,a as n,b as a,c as e,i as c,d as s,S as o,s as i,e as u,f,m as l,t as h,g as p,h as v,k as m,j as d,B as g,q as y,n as $,o as b,l as j,p as x,C as k,u as E,w as S,v as D,x as P,G as R,y as T,z as w,A as C}from"./client.4f921967.js";import{_ as I}from"./asyncToGenerator.5229e80b.js";import{C as G}from"./Card.539128d6.js";function A(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=n(t);if(r){var s=n(this).constructor;e=Reflect.construct(c,arguments,s)}else e=c.apply(this,arguments);return a(this,e)}}function B(t,r,n){var a=t.slice();return a[2]=r[n],a}function N(t){var r,n;return r=new G({props:{card:t[2],flippable:!0}}),{c:function(){u(r.$$.fragment)},l:function(t){f(r.$$.fragment,t)},m:function(t,a){l(r,t,a),n=!0},p:function(t,n){var a={};1&n&&(a.card=t[2]),r.$set(a)},i:function(t){n||(h(r.$$.fragment,t),n=!0)},o:function(t){p(r.$$.fragment,t),n=!1},d:function(t){v(r,t)}}}function U(t){var r,n,a,e,c,s,o,i,u,f,l,v,I,G,A,U,_,q,z,H,L,M,V=t[0].title+"",F=t[0].desc+"",J=t[0].icon.creator+"";document.title=r="The Space Deck | "+t[1](t[0].title)+" Suit";for(var K=t[0].cards,O=[],Q=0;Q<K.length;Q+=1)O[Q]=N(B(t,K,Q));var W=function(t){return p(O[t],1,1,(function(){O[t]=null}))};return{c:function(){n=m(),a=d("div"),e=d("img"),o=m(),i=d("h2"),u=g(V),f=m(),l=d("p"),v=g(F),I=m(),G=d("p"),A=g("Icon by "),U=d("a"),_=g(J),z=g(" from The Noun Project."),H=m(),L=d("ul");for(var t=0;t<O.length;t+=1)O[t].c();this.h()},l:function(t){y('[data-svelte="svelte-1m139i9"]',document.head).forEach($),n=b(t),a=j(t,"DIV",{class:!0});var r=x(a);e=j(r,"IMG",{src:!0,alt:!0}),o=b(r),i=j(r,"H2",{});var c=x(i);u=k(c,V),c.forEach($),f=b(r),l=j(r,"P",{});var s=x(l);v=k(s,F),s.forEach($),I=b(r),G=j(r,"P",{class:!0});var h=x(G);A=k(h,"Icon by "),U=j(h,"A",{href:!0});var p=x(U);_=k(p,J),p.forEach($),z=k(h," from The Noun Project."),h.forEach($),r.forEach($),H=b(t),L=j(t,"UL",{class:!0});for(var m=x(L),d=0;d<O.length;d+=1)O[d].l(m);m.forEach($),this.h()},h:function(){e.src!==(c=t[0].icon.src)&&E(e,"src",c),E(e,"alt",s=t[0].icon.alt),E(U,"href",q=t[0].icon.link),E(G,"class","credit"),E(a,"class","suit-intro"),E(L,"class","teaser")},m:function(t,r){S(t,n,r),S(t,a,r),D(a,e),D(a,o),D(a,i),D(i,u),D(a,f),D(a,l),D(l,v),D(a,I),D(a,G),D(G,A),D(G,U),D(U,_),D(G,z),S(t,H,r),S(t,L,r);for(var c=0;c<O.length;c+=1)O[c].m(L,null);M=!0},p:function(t,n){var a=P(n,1)[0];if((!M||3&a)&&r!==(r="The Space Deck | "+t[1](t[0].title)+" Suit")&&(document.title=r),(!M||1&a&&e.src!==(c=t[0].icon.src))&&E(e,"src",c),(!M||1&a&&s!==(s=t[0].icon.alt))&&E(e,"alt",s),(!M||1&a)&&V!==(V=t[0].title+"")&&R(u,V),(!M||1&a)&&F!==(F=t[0].desc+"")&&R(v,F),(!M||1&a)&&J!==(J=t[0].icon.creator+"")&&R(_,J),(!M||1&a&&q!==(q=t[0].icon.link))&&E(U,"href",q),1&a){var o;for(K=t[0].cards,o=0;o<K.length;o+=1){var i=B(t,K,o);O[o]?(O[o].p(i,a),h(O[o],1)):(O[o]=N(i),O[o].c(),h(O[o],1),O[o].m(L,null))}for(C(),o=K.length;o<O.length;o+=1)W(o);T()}},i:function(t){if(!M){for(var r=0;r<K.length;r+=1)h(O[r]);M=!0}},o:function(t){O=O.filter(Boolean);for(var r=0;r<O.length;r+=1)p(O[r]);M=!1},d:function(t){t&&$(n),t&&$(a),t&&$(H),t&&$(L),w(O,t)}}}function _(t){return q.apply(this,arguments)}function q(){return(q=I(t.mark((function r(n){var a,e,c;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.params,t.next=3,this.fetch("suits/".concat(a.suitname,".json"));case 3:return e=t.sent,t.next=6,e.json();case 6:if(c=t.sent,200!==e.status){t.next=11;break}return t.abrupt("return",{suit:c});case 11:this.error(e.status,c.message);case 12:case"end":return t.stop()}}),r,this)})))).apply(this,arguments)}function z(t,r,n){var a=r.suit;return t.$$set=function(t){"suit"in t&&n(0,a=t.suit)},[a,function(t){return t[0].toUpperCase()+t.substr(1)}]}var H=function(t){r(a,o);var n=A(a);function a(t){var r;return e(this,a),r=n.call(this),c(s(r),t,z,U,i,{suit:0}),r}return a}();export default H;export{_ as preload};