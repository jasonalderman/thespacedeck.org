import{S as s,i as a,s as c,e as l,v as r,g as i,k as t,w as e,h as n,l as o,o as f,n as h,f as p,j as u,x as d,y as E,z as v,A as b,B as m}from"./client.22e1d9b3.js";function k(s){let a,c,p;return{c(){a=l("a"),c=r("link"),this.h()},l(s){a=i(s,"A",{class:!0,href:!0});var l=t(a);c=e(l,"link"),l.forEach(n),this.h()},h(){o(a,"class","permalink"),o(a,"href",p=s[0].url)},m(s,l){f(s,a,l),h(a,c)},p(s,c){1&c&&p!==(p=s[0].url)&&o(a,"href",p)},d(s){s&&n(a)}}}function I(s){let a,c,I,T,x,H,A,C,L,M,S,g,j,N,O,P,$,w,y,z,B,D,G,V,q,F,J=s[0].suit+"",K=s[0].title+"",Q=s[0].desc+"",R=s[0].title+"",U=s[0].backText+"",W=s[1]&&k(s);return{c(){a=l("li"),c=l("a"),I=l("section"),T=l("p"),x=r(J),H=p(),A=l("img"),M=p(),S=l("h1"),g=r(K),j=p(),N=l("p"),O=r(Q),P=p(),$=l("section"),w=l("h1"),y=r(R),z=p(),B=l("div"),G=p(),W&&W.c(),this.h()},l(s){a=i(s,"LI",{class:!0});var l=t(a);c=i(l,"A",{href:!0});var r=t(c);I=i(r,"SECTION",{class:!0});var o=t(I);T=i(o,"P",{class:!0});var f=t(T);x=e(f,J),f.forEach(n),H=u(o),A=i(o,"IMG",{class:!0,src:!0,alt:!0}),M=u(o),S=i(o,"H1",{});var h=t(S);g=e(h,K),h.forEach(n),j=u(o),N=i(o,"P",{class:!0});var p=t(N);O=e(p,Q),p.forEach(n),o.forEach(n),P=u(r),$=i(r,"SECTION",{class:!0});var d=t($);w=i(d,"H1",{});var E=t(w);y=e(E,R),E.forEach(n),z=u(d),B=i(d,"DIV",{class:!0}),t(B).forEach(n),d.forEach(n),r.forEach(n),G=u(l),W&&W.l(l),l.forEach(n),this.h()},h(){o(T,"class","suit-name"),o(A,"class","card-icon"),A.src!==(C=s[0].icon.src)&&o(A,"src",C),o(A,"alt",L="[Icon for "+s[0].title+(s[0].icon.alt?": "+s[0].icon.alt+"]":"]")),o(N,"class","description"),o(I,"class","front"),o(B,"class","notes"),o($,"class","back"),o(c,"href",D=s[0].url),d(c,"flippable",s[1]),d(c,"flip",s[2]),o(a,"class",V="card "+s[0].suit)},m(l,r){f(l,a,r),h(a,c),h(c,I),h(I,T),h(T,x),h(I,H),h(I,A),h(I,M),h(I,S),h(S,g),h(I,j),h(I,N),h(N,O),h(c,P),h(c,$),h($,w),h(w,y),h($,z),h($,B),B.innerHTML=U,h(a,G),W&&W.m(a,null),q||(F=E(c,"click",v(s[3])),q=!0)},p(s,[l]){1&l&&J!==(J=s[0].suit+"")&&b(x,J),1&l&&A.src!==(C=s[0].icon.src)&&o(A,"src",C),1&l&&L!==(L="[Icon for "+s[0].title+(s[0].icon.alt?": "+s[0].icon.alt+"]":"]"))&&o(A,"alt",L),1&l&&K!==(K=s[0].title+"")&&b(g,K),1&l&&Q!==(Q=s[0].desc+"")&&b(O,Q),1&l&&R!==(R=s[0].title+"")&&b(y,R),1&l&&U!==(U=s[0].backText+"")&&(B.innerHTML=U),1&l&&D!==(D=s[0].url)&&o(c,"href",D),2&l&&d(c,"flippable",s[1]),4&l&&d(c,"flip",s[2]),s[1]?W?W.p(s,l):(W=k(s),W.c(),W.m(a,null)):W&&(W.d(1),W=null),1&l&&V!==(V="card "+s[0].suit)&&o(a,"class",V)},i:m,o:m,d(s){s&&n(a),W&&W.d(),q=!1,F()}}}function T(s,a,c){let{card:l}=a,{flippable:r}=a,i=!1;return s.$$set=s=>{"card"in s&&c(0,l=s.card),"flippable"in s&&c(1,r=s.flippable)},[l,r,i,function(s){c(2,i=!i)}]}class x extends s{constructor(s){super(),a(this,s,T,I,c,{card:0,flippable:1})}}export{x as C};
