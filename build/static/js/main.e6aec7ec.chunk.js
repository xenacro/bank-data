(this["webpackJsonpbank-data"]=this["webpackJsonpbank-data"]||[]).push([[0],{23:function(e,c,n){},42:function(e,c,n){},44:function(e,c,n){"use strict";n.r(c);var t=n(1),s=n.n(t),i=n(16),l=n.n(i),a=(n(23),n(3)),r=n(17),o=n.n(r),d=n(18),j=(n(42),n(0));var b=function(){var e,c,n=new d.a,s=Object(t.useState)(""),i=Object(a.a)(s,2),l=i[0],r=i[1],b=Object(t.useState)(""),h=Object(a.a)(b,2),u=h[0],O=h[1],p=Object(t.useState)([]),x=Object(a.a)(p,2),v=x[0],m=x[1],f=Object(t.useState)([]),g=Object(a.a)(f,2),k=g[0],N=g[1],C=Object(t.useState)(0),y=Object(a.a)(C,2),A=y[0],w=y[1],S=Object(t.useState)(0),_=Object(a.a)(S,2),I=_[0],B=_[1],M=Object(t.useState)("bank_id"),D=Object(a.a)(M,2),F=D[0],L=D[1],P=Object(t.useState)(!0),E=Object(a.a)(P,2),T=E[0],U=E[1];return Object(t.useEffect)((function(){o.a.get("https://vast-shore-74260.herokuapp.com/banks?city=".concat(u)).then((function(e){console.log(e);var c=[].concat(e.data).sort((function(e,c){return T?e[F]-c[F]:c[F]-e[F]}));m(c),w(0),N(c.slice(0,10))}))}),[u]),Object(t.useEffect)((function(){console.log("sdghhj");var e=[];e=T?[].concat(v).sort((function(e,c){return e[F]>c[F]?1:-1})):[].concat(v).sort((function(e,c){return c[F]>e[F]?1:-1})),m(e);for(var c=[],n=10*A;n<10*(A+1);n++)c.push(e[n]);N(c)}),[A,F,T]),Object(t.useEffect)((function(){r(n.get("favs")||""),console.log("djsdkjf")}),[I]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-12 mb-4 mt-3",children:Object(j.jsx)("h2",{children:"Bank Branches"})})}),Object(j.jsxs)("div",{className:"row mt-1",children:[Object(j.jsx)("div",{className:"col-12 col-md-4",children:Object(j.jsxs)("div",{class:"dropdown",children:[Object(j.jsx)("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:u||"Select City"}),Object(j.jsxs)("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(j.jsx)("a",{class:"dropdown-item",onClick:function(){return O("MUMBAI")},children:"MUMBAI"}),Object(j.jsx)("a",{class:"dropdown-item",onClick:function(){return O("NALANDA")},children:"NALANDA"}),Object(j.jsx)("a",{class:"dropdown-item",onClick:function(){return O("PATNA")},children:"PATNA"}),Object(j.jsx)("a",{class:"dropdown-item",onClick:function(){return O("LIMADIA")},children:"LIMADIA"}),Object(j.jsx)("a",{class:"dropdown-item",onClick:function(){return O("WAGHODIA")},children:"WAGHODIA"})]})]})}),Object(j.jsx)("div",{className:"col-12 col-md-8",children:Object(j.jsxs)("div",{class:"input-group",children:[Object(j.jsx)("div",{class:"input-group-prepend",children:Object(j.jsx)("span",{class:"input-group-text",id:"",children:Object(j.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/search--v1.png",style:{height:26}})})}),Object(j.jsx)("input",{type:"text",placeholder:"Search",class:"form-control",value:u,onChange:function(e){return O(e.target.value.toUpperCase())}})]})})]}),v.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"row mt-4",children:Object(j.jsx)("div",{className:"col-12",children:Object(j.jsxs)("table",{class:"table table-hover table-dark table-responsive",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsxs)("th",{scope:"col",className:"linear",onClick:function(){U("bank_id"!=F||!T),L("bank_id")},children:["bank_id"==F&&(T?Object(j.jsx)("span",{children:"\u22c1"}):Object(j.jsx)("span",{children:"\u22c0"})),"  Bank Id. "]}),Object(j.jsxs)("th",{scope:"col",className:"linear",onClick:function(){U("bank_name"!=F||!T),L("bank_name")},children:["bank_name"==F&&(T?Object(j.jsx)("span",{children:"\u22c1"}):Object(j.jsx)("span",{children:"\u22c0"})),"  Bank Name "]}),Object(j.jsxs)("th",{scope:"col",className:"linear",onClick:function(){U("branch"!=F||!T),L("branch")},children:["branch"==F&&(T?Object(j.jsx)("span",{children:"\u22c1"}):Object(j.jsx)("span",{children:"\u22c0"})),"  Branch"]}),Object(j.jsxs)("th",{scope:"col",className:"linear",onClick:function(){U("ifsc"!=F||!T),L("ifsc")},children:["ifsc"==F&&(T?Object(j.jsx)("span",{children:"\u22c1"}):Object(j.jsx)("span",{children:"\u22c0"})),"  IFSC"]}),Object(j.jsxs)("th",{scope:"col",className:"linear",onClick:function(){U("city"!=F||!T),L("city")},children:["city"==F&&(T?Object(j.jsx)("span",{children:"\u22c1"}):Object(j.jsx)("span",{children:"\u22c0"})),"  City"]}),Object(j.jsxs)("th",{scope:"col",className:"linear",onClick:function(){U("district"!=F||!T),L("district")},children:["district"==F&&(T?Object(j.jsx)("span",{children:"\u22c1"}):Object(j.jsx)("span",{children:"\u22c0"})),"  District"]}),Object(j.jsxs)("th",{scope:"col",className:"linear",onClick:function(){U("state"!=F||!T),L("state")},children:["state"==F&&(T?Object(j.jsx)("span",{children:"\u22c1"}):Object(j.jsx)("span",{children:"\u22c0"})),"  State"]}),Object(j.jsxs)("th",{scope:"col",className:"linear",onClick:function(){U("address"!=F||!T),L("address")},children:["address"==F&&(T?Object(j.jsx)("span",{children:"\u22c1"}):Object(j.jsx)("span",{children:"\u22c0"})),"  Address"]})]})}),Object(j.jsx)("tbody",{children:v.length>10*A&&k.map((function(e){return(null===e||void 0===e?void 0:e.bank_id)&&Object(j.jsxs)("tr",{style:{fontSize:16},children:[Object(j.jsxs)("th",{scope:"row",children:[Object(j.jsx)("img",{onClick:function(){n.set("favs",l+(null===e||void 0===e?void 0:e.ifsc)+", "),B(I+1),console.log(I+1)},src:l.includes(null===e||void 0===e?void 0:e.ifsc)?"https://img.icons8.com/fluency/48/000000/star.png":"https://img.icons8.com/color/48/000000/star--v1.png",style:{height:18}})," ",null===e||void 0===e?void 0:e.bank_id," "]}),Object(j.jsx)("td",{children:null===e||void 0===e?void 0:e.bank_name}),Object(j.jsx)("td",{children:null===e||void 0===e?void 0:e.branch}),Object(j.jsx)("td",{children:null===e||void 0===e?void 0:e.ifsc}),Object(j.jsx)("td",{children:null===e||void 0===e?void 0:e.city}),Object(j.jsx)("td",{children:null===e||void 0===e?void 0:e.district}),Object(j.jsx)("td",{children:null===e||void 0===e?void 0:e.state}),Object(j.jsx)("td",{children:null===e||void 0===e?void 0:e.address})]})}))})]})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(j.jsx)("nav",{"aria-label":"Page navigation example",children:Object(j.jsxs)("ul",{class:"pagination",children:[Object(j.jsx)("li",{class:"page-item",children:Object(j.jsx)("a",{class:"page-link",onClick:function(){return A>0&&w(A-1)},style:{backgroundColor:A<=0&&"grey"},children:"Previous"})}),A>0&&Object(j.jsx)("li",{class:"page-item",children:Object(j.jsx)("a",{class:"page-link",onClick:function(){return w(A-1)},children:A})}),Object(j.jsx)("li",{class:"page-item",children:Object(j.jsx)("a",{class:"page-link",style:{backgroundColor:"grey"},children:A+1})}),(null===(e=k[9])||void 0===e?void 0:e.bank_id)&&Object(j.jsx)("li",{class:"page-item",children:Object(j.jsx)("a",{class:"page-link",onClick:function(){return w(A+1)},children:A+2})}),Object(j.jsx)("li",{class:"page-item",children:Object(j.jsx)("a",{class:"page-link",style:{backgroundColor:!(null===(c=k[9])||void 0===c?void 0:c.bank_id)&&"grey"},onClick:function(){var e;return(null===(e=k[9])||void 0===e?void 0:e.bank_id)&&w(A+1)},children:"Next"})})]})})})})]}):Object(j.jsx)("div",{className:"row mt-5",children:Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)("h4",{children:"Select the top cities or search them."})})})]})})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(c){var n=c.getCLS,t=c.getFID,s=c.getFCP,i=c.getLCP,l=c.getTTFB;n(e),t(e),s(e),i(e),l(e)}))};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),h()}},[[44,1,2]]]);
//# sourceMappingURL=main.e6aec7ec.chunk.js.map