(this["webpackJsonpapp-base"]=this["webpackJsonpapp-base"]||[]).push([[0],{40:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(31),r=n.n(i),s=n(33),l=n(3),o=n(0);function j(e){var t=e.fluid,n=e.children;return Object(o.jsx)("div",{className:"container".concat(t?"-fluid":""),children:n})}function b(e){var t=e.fluid,n=e.children;return Object(o.jsx)("div",{className:"row".concat(t?"-fluid":""),children:n})}function u(e){var t=e.size,n=e.children;return Object(o.jsx)("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" "),children:n})}var d=n(2),m=n(9),h=n(77),O=n(78);n(40);function x(){var e=Object(c.useState)([{timeFrame:"Today",active:!0},{timeFrame:"Week",active:!1},{timeFrame:"Month",active:!1},{timeFrame:"Year",active:!1}]),t=Object(m.a)(e,2),n=t[0],a=t[1];function i(e){var t=e.target.id,c=n.map((function(e){return e.timeFrame===t?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));console.log(c),a(c)}return Object(o.jsxs)("div",{children:[Object(o.jsx)(h.a,{className:"arrow leftArrow",onClick:function(){var e,t=0;n.map((function(n){!0===n.active&&(e=t),t+=1})),0!==e&&(e-=1),t=0;var c=n.map((function(n){if(t==e){var c=Object(d.a)(Object(d.a)({},n),{},{active:!0});return t+=1,c}var a=Object(d.a)(Object(d.a)({},n),{},{active:!1});return t+=1,a}));a(c)}}),n.map((function(e){return e.active?Object(o.jsx)("div",{className:"active toggledTime",id:e.timeFrame,onClick:i,children:e.timeFrame}):Object(o.jsx)("li",{className:"toggledTime",style:{display:"none"},id:e.timeFrame,onClick:i})})),Object(o.jsx)(O.a,{className:"arrow rightArrow",onClick:function(){var e=0,t=!1,c=n.map((function(n){if(!0===n.active){if(3===e)return Object(d.a)(Object(d.a)({},n),{},{active:!0});var c=Object(d.a)(Object(d.a)({},n),{},{active:!1});return t=!0,e+=1,c}if(!0===t){var a=Object(d.a)(Object(d.a)({},n),{},{active:!0});return e+=1,t=!1,a}var i=Object(d.a)(Object(d.a)({},n),{},{active:!1});return e+=1,i}));a(c)}}),Object(o.jsx)("ul",{className:"bottomToggler",children:n.map((function(e){return e.active?Object(o.jsx)("li",{className:"bottomActive bottomToggleElement",id:e.timeFrame,onClick:i,children:e.timeFrame}):Object(o.jsx)("li",{className:"bottomToggleElement",id:e.timeFrame,onClick:i,children:e.timeFrame})}))})]})}var v=function(){return Object(o.jsx)(j,{fluid:!0,children:Object(o.jsxs)(b,{children:[Object(o.jsx)(u,{size:"md-6"}),Object(o.jsx)(u,{size:"md-6 sm-12",children:Object(o.jsx)(x,{})})]})})};var f=function(e){var t=e.children;return Object(o.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron border border-success",children:t})},p=n(13),g=n.n(p),N=function(e){return g.a.post("/api/signup",e)},w=function(){return g.a.get("/api/articles")},k=function(e){return g.a.get("/api/articles/category/"+e)},y=function(e){return g.a.get("/api/articles/search/"+e)};var C=function(){var e=Object(c.useState)("business"),t=Object(m.a)(e,2),n=t[0];return t[1],w().then((function(e){console.log(e.data)})),k(n).then((function(e){console.log(e.data)})),Object(o.jsx)(j,{fluid:!0,children:Object(o.jsx)(b,{children:Object(o.jsx)(u,{size:"md-12",children:Object(o.jsxs)(f,{children:[Object(o.jsx)("h1",{children:"404 Page Not Found"}),Object(o.jsx)("h1",{children:Object(o.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})})})};function F(e){return Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",Object(d.a)({className:"form-control"},e))})}function S(e){return Object(o.jsx)("button",Object(d.a)(Object(d.a)({},e),{},{style:{float:"right",marginBottom:10},className:"btn btn-success",children:e.children}))}var E=n(11);var T=function(){var e=Object(E.b)(),t=e.loginWithRedirect;return!e.isAuthenticated&&Object(o.jsx)("button",{onClick:function(){return t()},children:"Log In"})};var A=function(){var e=Object(c.useState)({}),t=Object(m.a)(e,2),n=t[0];return t[1],Object(o.jsxs)(j,{fluid:!0,children:[Object(o.jsx)(b,{children:Object(o.jsxs)(u,{size:"md-12",children:[Object(o.jsx)("h2",{children:"Log In"}),Object(o.jsx)(F,{name:"emailOld",placeholder:"Email"}),Object(o.jsx)(F,{name:"passwordOld",placeholder:"Password"}),Object(o.jsx)(T,{children:"Log In"})]})}),Object(o.jsx)(b,{children:Object(o.jsxs)(u,{size:"md-12",children:[Object(o.jsx)("h2",{children:"Sign Up"}),Object(o.jsx)(F,{name:"nameNew",placeholder:"Full Name (John Doe)"}),Object(o.jsx)(F,{name:"emailNew",placeholder:"Email (newsisawesome@news.com)"}),Object(o.jsx)(F,{name:"passwordNew",placeholder:"Password must be at least 8 characters"}),Object(o.jsx)(S,{onClick:function(e){e.preventDefault(),n.nameNew&&n.emailNew&&n.passwordNew&&N({name:n.nameNew,email:n.emailNew,password:n.passwordNew}).catch((function(e){return console.log(e)}))},children:"Sign Up"})]})})]})};var L=function(){var e=Object(E.b)(),t=e.logout;return e.isAuthenticated&&Object(o.jsx)("button",{onClick:function(){return t({returnTo:"https://news-app-5.herokuapp.com/"})},children:"Log Out"})},z=n(32),J=n.n(z);n(67);var P=function(){var e=new Date;return Object(o.jsx)(J.a,{interval:6e4,format:"LLLL",children:e})};var I=function(){var e=Object(c.useState)(),t=Object(m.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",value:n,onChange:function(e){var t=e.target.value;a(t)},placeholder:"Search"}),Object(o.jsx)("button",{className:"btn btn-success",type:"submit",onClick:function(e){e.preventDefault(),y(n).then((function(e){console.log(e.data)})),console.log(n)},children:"Search"})]})};var D=function(){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:[Object(o.jsx)(I,{}),Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:"NEWS APP"}),Object(o.jsx)(P,{}),Object(o.jsx)(T,{}),Object(o.jsx)(L,{})]})},W=a.a.createContext({category:""});var B=function(){var e=Object(c.useState)({category:""}),t=Object(m.a)(e,2),n=t[0],a=t[1];function i(e){a(e)}return Object(c.useEffect)((function(){k(n).then((function(e){console.log(e.data)})),console.log(n)})),Object(o.jsx)(W.Provider,{value:n,children:Object(o.jsx)("div",{className:"d-flex flex-column flex-shrink-0 p-3 bg-light",style:{width:"280px"},children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("button",{type:"button",className:"btn btn-link",value:"technology",onClick:function(){return i("technology")},children:"Tech"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("button",{type:"button",className:"btn btn-link",value:"technology",onClick:function(){return i("business")},children:"Business"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("button",{type:"button",className:"btn btn-link",value:"technology",onClick:function(){return i("general")},children:"General"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("button",{type:"button",className:"btn btn-link",value:"technology",onClick:function(){return i("health")},children:"Health"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("button",{type:"button",className:"btn btn-link",value:"technology",onClick:function(){return i("science")},children:"Science"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("button",{type:"button",className:"btn btn-link",value:"technology",onClick:function(){return i("entertainment")},children:"Entertainment"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("button",{type:"button",className:"btn btn-link",value:"technology",onClick:function(){return i("sports")},children:"Sports"})})]})})})};var U=function(){var e=Object(E.b)(),t=e.user;return e.isAuthenticated&&Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:t.picture,alt:t.name}),Object(o.jsx)("h2",{children:t.name}),Object(o.jsx)("p",{children:t.email}),JSON.stringify(t,null,2)]})};var H=function(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(D,{}),Object(o.jsx)(B,{}),Object(o.jsx)(U,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:v}),Object(o.jsx)(l.a,{exact:!0,path:"/login",component:A}),Object(o.jsx)(l.a,{exact:!0,path:"/article",component:C})]})]})})};n(74);r.a.render(Object(o.jsx)(E.a,{domain:"dev-gorzoijf.us.auth0.com",clientId:"Vp8Jdu2rlfvi3CVtTm71PHJAihmJMdi2",redirectUri:window.location.origin,children:Object(o.jsx)(H,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.fe6879c6.chunk.js.map