import{r as t,_ as r,a as n,b as a,c as s,i as e,d as c,S as o,s as i,j as u,B as f,l,p as h,C as p,n as d,u as v,w as m,v as g,E as y,H as x,I as b}from"./client.c36ed7db.js";import{_ as j}from"./asyncToGenerator.5229e80b.js";function R(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,e=n(t);if(r){var c=n(this).constructor;s=Reflect.construct(e,arguments,c)}else s=e.apply(this,arguments);return a(this,s)}}function E(t){var r,n,a,s,e;return{c:function(){r=u("div"),n=u("em"),a=f("Loading a random activity..."),this.h()},l:function(t){r=l(t,"DIV",{class:!0});var s=h(r);n=l(s,"EM",{class:!0});var e=h(n);a=p(e,"Loading a random activity..."),e.forEach(d),s.forEach(d),this.h()},h:function(){v(n,"class","svelte-gmmgzf"),v(r,"class","svelte-gmmgzf")},m:function(c,o){m(c,r,o),g(r,n),g(n,a),s||(e=y(r,"click",t[0]),s=!0)},p:x,i:x,o:x,d:function(t){t&&d(r),s=!1,e()}}}function k(t){return w.apply(this,arguments)}function w(){return(w=j(t.mark((function r(n){var a,s;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.params,t.next=3,this.fetch("activity.json");case 3:return a=t.sent,t.next=6,a.json();case 6:if(s=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{cards:s});case 11:this.error(a.status,s.message);case 12:case"end":return t.stop()}}),r,this)})))).apply(this,arguments)}function D(t,r,n){var a=r.cards,s=Math.floor(Math.random()*(a.length-.5)),e=a[s].url;return console.log("going to:",e),b(e),t.$$set=function(t){"cards"in t&&n(1,a=t.cards)},[function(){b(e)},a]}var M=function(t){r(a,o);var n=R(a);function a(t){var r;return s(this,a),r=n.call(this),e(c(r),t,D,E,i,{cards:1}),r}return a}();export default M;export{k as preload};