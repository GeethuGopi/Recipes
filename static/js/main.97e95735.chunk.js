(this.webpackJsonpreceipe=this.webpackJsonpreceipe||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(6),i=c.n(a),s=(c(12),c(4)),o=c.n(s),u=c(7),l=c(2),p=(c(14),c(5)),j=c.n(p),b=c(0),d=function(e){var t=e.title,c=e.calories,n=e.img,r=e.ingredients;return Object(b.jsxs)("div",{className:j.a.recipe,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("ol",{children:r.map((function(e){return Object(b.jsx)("li",{children:e.text})}))}),Object(b.jsxs)("p",{children:["Calories: ",c]}),Object(b.jsx)("img",{className:j.a.image,src:n,alt:""})]})};var h=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),i=Object(l.a)(a,2),s=i[0],p=i[1],j=Object(n.useState)("chicken"),h=Object(l.a)(j,2),m=h[0],f=h[1];Object(n.useEffect)((function(){O()}),[m]);var O=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(m,"&app_id=").concat("5d85251d","&app_key=").concat("5282fc45a660b5c3057d88a7bd6eb858\t"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(c),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),f(s),p("")},children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){return p(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(b.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(b.jsx)(d,{title:e.recipe.label,calories:e.recipe.calories,img:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),m()},5:function(e,t,c){e.exports={recipe:"recipe_recipe__2rYjm",image:"recipe_image__1vm5d"}}},[[16,1,2]]]);
//# sourceMappingURL=main.97e95735.chunk.js.map