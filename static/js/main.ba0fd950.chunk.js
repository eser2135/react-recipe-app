(this["webpackJsonpmy-food-search-app"]=this["webpackJsonpmy-food-search-app"]||[]).push([[0],{43:function(n,e,t){},68:function(n,e,t){"use strict";t.r(e);var r,i,a,c,o,s,d,l,b,j,p,u,x,h,m,f,g,O,y,v,w,k,C,S,A,z,L,N,D,E,M,q,T,F,G,H=t(1),I=t(32),P=t.n(I),Q=(t(43),t(11)),R=t(10),_=t(4),B=t(2),J=t(3),K=J.a.div(r||(r=Object(B.a)(["\n  padding: 0 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background: #e1f1dd;\n  border-radius: 0 0 10px 10px;\n  height: 75px;\n  font-size: 2rem;\n"]))),W=J.a.div(i||(i=Object(B.a)(["\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n  span {\n    height: 4px;\n    width: 25px;\n    background: #00adb5;\n    margin-bottom: 4px;\n    border-radius: 5px;\n  }\n  @media (max-width: 768px) {\n    display: flex;\n  }\n"]))),U=Object(J.a)(R.b)(a||(a=Object(B.a)(['\n  padding: 1rem 2rem;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  color: #02475e;\n  transition: all 0.3s ease-in;\n  font-size: 2rem;\n  font-family: "Girassol", sans-serif;\n\n  &:hover {\n    color: #00adb5;\n    font-weight: bold;\n  }\n\n  @media (max-width: 768px) {\n    background-color: #e1f1dd;\n    border: 1px solid #00adb5;\n    border-radius: 10px;\n    width: 100%;\n  }\n']))),V=J.a.div(c||(c=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  @media (max-width: 768px) {\n    overflow: hidden;\n    flex-direction: column;\n    width: 100%;\n    max-height: ",";\n    transition: max-height 0.3s ease-in;\n  }\n"])),(function(n){return n.isOpen?"300px":"0"})),X=Object(J.a)(R.b)(o||(o=Object(B.a)(['\n  padding: 1rem 0;\n  color: #393e46;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 2rem;\n\n  i {\n    font-family: "Girassol", sans-serif;\n  }\n\n  span {\n    font-family: "Girassol", sans-serif;\n    font-weight: 400;\n    font-size: 2rem;\n    color: #00adb5;\n  }\n']))),Y=t(0),Z=function(){var n=Object(H.useState)(!1),e=Object(Q.a)(n,2),t=e[0],r=e[1];return Object(Y.jsxs)(K,{children:[Object(Y.jsxs)(X,{to:"/",children:[Object(Y.jsx)("i",{children:"<Eser/>"})," ",Object(Y.jsx)("span",{children:"recipe"})]}),Object(Y.jsxs)(W,{onClick:function(){return r(!t)},children:[Object(Y.jsx)("span",{}),Object(Y.jsx)("span",{}),Object(Y.jsx)("span",{})]}),Object(Y.jsxs)(V,{isOpen:t,children:[Object(Y.jsx)(U,{to:"/about",children:"About"}),Object(Y.jsx)(U,{to:{pathname:"https://github.com/eser2135"},target:"_blank",rel:"noopener noreferrer",children:"Github"}),Object(Y.jsx)(U,{to:"/login",children:"Logout"})]})]})},$=J.a.div(s||(s=Object(B.a)(['\n  background-image: url("https://picsum.photos/1600/900");\n  background-repeat: no-repeat;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n']))),nn=J.a.div(d||(d=Object(B.a)(["\n  width: 600px;\n  min-width: 600px;\n  height: 600px;\n  background-color: rgba(0, 173, 181, 0.5);\n  border-radius: 50%;\n  border: 2px solid #e1f1dd;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),en=J.a.h1(l||(l=Object(B.a)(['\n  color: white;\n  font-family: "Girassol", sans-serif;\n  font-size: 3rem;\n']))),tn=J.a.input(b||(b=Object(B.a)(['\n  height: 50px;\n  font-size: 2rem;\n  width: 250px;\n  border-radius: 5px;\n  font-family: "Girassol", sans-serif;\n  background-color: rgba(0, 0, 0, 0.6);\n  border: none;\n  color: white;\n  margin: 1rem;\n  text-indent: 20px;\n']))),rn=J.a.form(j||(j=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),an=J.a.button(p||(p=Object(B.a)(['\n  font-size: 2rem;\n  font-family: "Girassol", sans-serif;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: white;\n  border: none;\n  cursor: pointer;\n  margin: 1rem;\n']))),cn=J.a.img(u||(u=Object(B.a)(["\n  width: 150px;\n  margin: 1rem;\n"]))),on=t.p+"static/media/meal2.8b3981f1.svg",sn=function(n){var e=n.setIsAuth,t=(n.isAuth,Object(_.g)());return Object(Y.jsx)($,{children:Object(Y.jsxs)(nn,{children:[Object(Y.jsx)(cn,{src:on,alt:"meal"}),Object(Y.jsxs)(en,{children:["<Eser/>"," Recipe"]}),Object(Y.jsxs)(rn,{onSubmit:function(n){n.preventDefault(),e(!0),t.push("/")},children:[Object(Y.jsx)(tn,{type:"text",placeholder:"Username",required:!0}),Object(Y.jsx)(tn,{type:"password",placeholder:"Password",required:!0}),Object(Y.jsx)(an,{type:"submit",children:"Login"})]})]})})},dn=t(21),ln=t.n(dn),bn=t(36),jn=t(37),pn=t.n(jn),un=J.a.div(x||(x=Object(B.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  /* background: #e1f1dd; */\n  height: fit-content;\n  /* padding: 5px; */\n"]))),xn=J.a.div(h||(h=Object(B.a)(["\n  height: 300px;\n  background: #e1f1dd;\n  padding: 5px;\n  border-radius: 3px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 10px;\n  box-shadow: 8px 8px 5px black;\n\n  &:hover {\n    box-shadow: none;\n    transition: all 0.3s ease-in;\n  }\n"]))),hn=J.a.img(m||(m=Object(B.a)(["\n  height: 150px;\n  border-radius: 10px;\n"]))),mn=J.a.button(f||(f=Object(B.a)(["\n  background-color: #00adb5;\n  padding: 5px;\n  outline: none;\n  height: 2rem;\n  border: none;\n  margin: 10px;\n  border-radius: 3px;\n  cursor: pointer;\n"]))),fn=J.a.h1(g||(g=Object(B.a)(["\n  font-size: 1.5rem;\n  text-align: center;\n"]))),gn=J.a.div(O||(O=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 50px;\n"]))),On=J.a.img(y||(y=Object(B.a)(["\n  width: 80%;\n  max-width: 750px;\n"]))),yn=t.p+"static/media/default-image.b0a1da71.jpg",vn=function(n){var e=n.recipe,t=Object(_.g)();return Object(Y.jsxs)(xn,{children:[Object(Y.jsx)(fn,{children:e.label}),Object(Y.jsx)(hn,{src:e.image||yn,alt:""}),Object(Y.jsx)(mn,{onClick:function(){t.push({pathname:"/details",recipe:e})},children:"View More"})]})},wn=J.a.div(v||(v=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #00adb5;\n"]))),kn=J.a.h2(w||(w=Object(B.a)(["\n  margin-top: 1rem;\n  font-size: 3rem;\n"]))),Cn=J.a.form(k||(k=Object(B.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  border: 2px solid white;\n  border-radius: 3px;\n  margin: 20px;\n"]))),Sn=J.a.input(C||(C=Object(B.a)(["\n  height: 3rem;\n  width: 15rem;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  text-indent: 10px;\n  margin: 5px;\n  font-size: 2rem;\n"]))),An=J.a.button(S||(S=Object(B.a)(["\n  background-color: #e1f1dd;\n  padding: 5px;\n  outline: none;\n  height: 3rem;\n  border: none;\n  margin: 5px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 2rem;\n\n  &:hover {\n    background-color: #00adb5;\n    transition: all 0.3s ease-in;\n    border: 1px solid white;\n  }\n"]))),zn=J.a.select(A||(A=Object(B.a)(["\n  border-radius: 3px;\n  margin: 5px;\n  padding: 5px;\n  height: 3rem;\n  border: none;\n  font-size: 2rem;\n"]))),Ln=function(n){var e=n.setQuery,t=n.query,r=n.getData,i=n.mealTypes,a=(n.meal,n.setMeal);return Object(Y.jsxs)(Cn,{onSubmit:function(n){n.preventDefault(),r()},children:[Object(Y.jsx)(Sn,{type:"text",value:t,onChange:function(n){return e(n.target.value)},placeholder:"Search"}),Object(Y.jsx)(An,{onClick:r,children:"Search"}),Object(Y.jsx)(zn,{name:"mealTypes",id:"mealTypes",onChange:function(n){a(n.target.value)},children:null===i||void 0===i?void 0:i.map((function(n,e){return Object(Y.jsx)("option",{value:n.toLowerCase(),children:n},e)}))})]})},Nn=function(n){var e=n.setQuery,t=n.query,r=n.getData,i=n.mealTypes,a=n.meal,c=n.setMeal;return Object(Y.jsxs)(wn,{children:[Object(Y.jsx)(kn,{children:"Food App"}),Object(Y.jsx)(Ln,{query:t,setQuery:e,getData:r,mealTypes:i,setMeal:c,meal:a})]})},Dn=t.p+"static/media/home.1df754a9.svg",En=["Breakfast","Lunch","Dinner","Snack","Teatime"],Mn=function(){var n=Object(H.useState)(""),e=Object(Q.a)(n,2),t=e[0],r=e[1],i=Object(H.useState)(),a=Object(Q.a)(i,2),c=a[0],o=a[1],s=Object(H.useState)(En[0].toLowerCase()),d=Object(Q.a)(s,2),l=d[0],b=d[1],j="https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("4e9f05eb","&app_key=").concat("9b904d703fa0d46a88ce1ac63f29f498","&mealType=").concat(l),p=function(){var n=Object(bn.a)(ln.a.mark((function n(){var e;return ln.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===t){n.next=10;break}return n.next=3,pn.a.get(j);case 3:(e=n.sent).data.more||alert("No food with such ".concat(t)),console.log(e.data.hits),o(e.data.hits),r(""),n.next=11;break;case 10:console.log("Please fill the form");case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(Nn,{setQuery:r,query:t,getData:p,mealTypes:En,setMeal:b,meal:l}),c?Object(Y.jsx)(un,{children:c.map((function(n,e){return Object(Y.jsx)(vn,{recipe:n.recipe},e)}))}):Object(Y.jsx)(gn,{children:Object(Y.jsx)(On,{src:Dn})})]})},qn=J.a.div(z||(z=Object(B.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  background: #00adb5;\n  min-height: calc(100vh - 75px);\n  /* height: fit-content; */\n  padding: 5px;\n"]))),Tn=J.a.div(L||(L=Object(B.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  margin: 1rem;\n  border: 1px solid white;\n  border-radius: 5px;\n  background-color: #e1f1dd;\n  /* height: calc(100vh - 300px); */\n\n  @media (max-width: 1250px) {\n    /* justify-content: center;\n    background-color: red;\n    border: 1px solid red; */\n  }\n"]))),Fn=J.a.div(N||(N=Object(B.a)(["\n  border: 1px solid #00adb5;\n  padding: 10px;\n  border-radius: 3px;\n  margin: 2rem;\n\n  img {\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),Gn=J.a.div(D||(D=Object(B.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  margin: 25px;\n  font-size: 3rem;\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  img {\n    width: 200px;\n  }\n"]))),Hn=J.a.div(E||(E=Object(B.a)(["\n  width: 400px;\n  font-size: 1.4rem;\n  margin: 2rem;\n"]))),In=J.a.div(M||(M=Object(B.a)(["\n  width: 400px;\n  text-align: right;\n  font-size: 1.8rem;\n  margin: 2rem;\n"]))),Pn=t.p+"static/media/diet.2f19967b.svg",Qn=function(n){var e=n.location.recipe;return Object(Y.jsxs)(qn,{children:[Object(Y.jsxs)(Gn,{children:[Object(Y.jsx)("h1",{children:e.label}),Object(Y.jsx)("img",{src:Pn,alt:""})]}),Object(Y.jsxs)(Tn,{children:[Object(Y.jsxs)(In,{children:[Object(Y.jsx)(Y.Fragment,{children:"Nutrients"}),Object(Y.jsxs)("p",{children:[e.totalNutrients.CA.label," :"," ",Math.round(e.totalNutrients.CA.quantity),e.totalNutrients.CA.unit]}),Object(Y.jsxs)("p",{children:[e.totalNutrients.CHOCDF.label," :"," ",Math.round(e.totalNutrients.CHOCDF.quantity),e.totalNutrients.CHOCDF.unit]}),Object(Y.jsxs)("p",{children:[e.totalNutrients.CHOLE.label," :"," ",Math.round(e.totalNutrients.CHOLE.quantity),e.totalNutrients.CHOLE.unit]}),Object(Y.jsxs)("p",{children:[e.totalNutrients.ENERC_KCAL.label," :"," ",Math.round(e.totalNutrients.ENERC_KCAL.quantity),e.totalNutrients.ENERC_KCAL.unit]}),Object(Y.jsx)("p",{children:e.totalWeight}),Object(Y.jsxs)("p",{children:["Calories: ",Math.round(e.calories)]}),e.digest.slice(0,4).map((function(n,e){return Object(Y.jsxs)("p",{children:[n.label," : ",Math.round(n.total)]},e)}))]}),Object(Y.jsx)(Fn,{children:Object(Y.jsx)("img",{src:e.image,alt:e.label})}),Object(Y.jsx)(Hn,{children:e.ingredientLines.map((function(n,e){return Object(Y.jsxs)("div",{children:[Object(Y.jsxs)("p",{children:[e+1," - ",n]}),Object(Y.jsx)("br",{})]},e)}))})]})]})},Rn=J.a.div(q||(q=Object(B.a)(['\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(100vh - 80px);\n  line-height: 2;\n\n  span {\n    color: white;\n    font-family: "Girassol", sans-serif;\n    font-size: 3rem;\n  }\n']))),_n=J.a.div(T||(T=Object(B.a)(["\n  text-align: right;\n  margin: 0 10px;\n  max-width: 1000px;\n  border: 1px solid white;\n  padding: 25px;\n  border-radius: 5px;\n\n  a {\n    color: white;\n  }\n"]))),Bn=J.a.div(F||(F=Object(B.a)([""]))),Jn=J.a.img(G||(G=Object(B.a)(["\n  width: 500px;\n  margin-bottom: 2rem;\n"]))),Kn=t.p+"static/media/coding.0ee2fc3a.svg",Wn=function(){return Object(Y.jsxs)(Rn,{children:[Object(Y.jsx)(Jn,{src:Kn,alt:"coding"}),Object(Y.jsx)(Bn,{children:Object(Y.jsxs)("h1",{children:["About Software Developer ",Object(Y.jsx)("span",{children:"Eser Akkurt"})]})}),Object(Y.jsxs)(_n,{children:[Object(Y.jsx)("h1",{children:"I'm Eser Akkurt."}),Object(Y.jsx)("h2",{children:"I\u2019m currently learning Full-Stack Development Languages."}),Object(Y.jsx)("h2",{children:"I've already known JS, ReactJS, ReactNative,  Django, HTML-CSS, SQL, PostgreSQL Python, Bootsrap, AWS Services."}),Object(Y.jsxs)("h2",{children:[Object(Y.jsx)("a",{href:"mailto:eser.akkurt@gmail.com",children:"Send email"})," : eser.akkurt@gmail.com"]})]})]})},Un=t(16),Vn=t(38),Xn=function(n){var e=n.component,t=n.isAuth,r=Object(Vn.a)(n,["component","isAuth"]);return Object(Y.jsx)(_.b,Object(Un.a)(Object(Un.a)({},r),{},{render:function(n){return t?Object(Y.jsx)(e,Object(Un.a)({},n)):Object(Y.jsx)(_.a,{to:{pathname:"/login",state:{from:n.location}}})}}))};var Yn=function(){var n=Object(H.useState)(!1),e=Object(Q.a)(n,2),t=e[0],r=e[1];return Object(Y.jsx)(R.a,{children:Object(Y.jsxs)(_.d,{children:[Object(Y.jsx)(_.b,{path:"/login",exact:!0,component:function(){return Object(Y.jsx)(sn,{setIsAuth:r,isAuth:t})}}),Object(Y.jsx)(_.b,{component:function(){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(Z,{}),Object(Y.jsx)(Xn,{isAuth:t,exact:!0,path:"/",component:Mn}),Object(Y.jsx)(Xn,{isAuth:t,path:"/details",component:Qn}),Object(Y.jsx)(Xn,{isAuth:t,path:"/about",component:Wn})]})}})]})})};var Zn=function(){return Object(Y.jsx)(Yn,{})},$n=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),a(n),c(n)}))};P.a.render(Object(Y.jsx)(Zn,{}),document.getElementById("root")),$n()}},[[68,1,2]]]);
//# sourceMappingURL=main.ba0fd950.chunk.js.map