(this["webpackJsonpchatbook-app"]=this["webpackJsonpchatbook-app"]||[]).push([[0],{17:function(e,t,s){},18:function(e,t,s){},22:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(23),r=s.n(c),i=(s(30),s(25)),o=s(8),l=s(4),j=s(21),u=s(0),b=function(e){var t=e.items,s=e.removeItem,a=e.editItem;return Object(u.jsx)("div",{className:"post-list",children:t.map((function(e){var t=e.id,n=e.title;return Object(u.jsxs)("article",{className:"post-item",children:[Object(u.jsx)("p",{className:"title",children:n}),Object(u.jsxs)("div",{className:"btn-container",children:[Object(u.jsx)("button",{type:"button",className:"edit-btn",onClick:function(){return a(t)},children:Object(u.jsx)(j.a,{})}),Object(u.jsx)("button",{type:"button",className:"delete-btn",onClick:function(){return s(t)},children:Object(u.jsx)(j.b,{})})]})]},t)}))})},m=(s(22),function(e){var t=e.type,s=e.msg,n=e.removeAlert,c=e.list;return Object(a.useEffect)((function(){var e=setTimeout((function(){n()}),3e3);return function(){return clearTimeout(e)}}),[c]),Object(u.jsx)("p",{className:"alert alert-".concat(t),children:s})});var d=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)(""),r=Object(l.a)(c,2),j=r[0],d=r[1],h=Object(a.useState)(!1),p=Object(l.a)(h,2),O=p[0],f=p[1],x=Object(a.useState)(null),v=Object(l.a)(x,2),g=v[0],w=v[1],N=Object(a.useState)({show:!1,msg:"",type:""}),y=Object(l.a)(N,2),S=y[0],C=y[1],E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";C({show:e,type:t,msg:s})};return Object(u.jsxs)("section",{className:"section-center",children:[Object(u.jsxs)("form",{className:"post-form bgimage",onSubmit:function(e){if(e.preventDefault(),s)if(s&&O)d(j.map((function(e){return e.id===g?Object(o.a)(Object(o.a)({},e),{},{title:s}):e}))),n(""),w(null),f(!1),E(!0,"success","Post Edited");else{E(!0,"success","Post is saved");var t={id:(new Date).getTime().toString(),title:s};d([].concat(Object(i.a)(j),[t])),n("")}else E(!0,"danger","There is nothing to be post")},children:[S.show&&Object(u.jsx)(m,Object(o.a)(Object(o.a)({},S),{},{removeAlert:E,list:j})),Object(u.jsx)("h3",{children:"Write your post here"}),Object(u.jsxs)("div",{className:"post-control",children:[Object(u.jsx)("input",{type:"text",className:"post",placeholder:"Write what is on your mind today. :",value:s,onChange:function(e){return n(e.target.value)}}),Object(u.jsx)("button",{type:"submit",className:"submit-btn",children:O?"edit":"submit"})]})]}),j.length>0&&Object(u.jsxs)("div",{className:"post-container",children:[Object(u.jsx)("h2",{children:"Now, here you will see the post uploaded till now:-"}),Object(u.jsx)(b,{items:j,removeItem:function(e){E(!0,"danger","Post removed"),d(j.filter((function(t){return t.id!==e})))},editItem:function(e){var t=j.find((function(t){return t.id===e}));f(!0),w(e),n(t.title)}}),Object(u.jsx)("button",{className:"clear-btn",onClick:function(){E(!0,"danger","Cleared all of your post till now"),d([])},children:"Clear all the post"})]})]})},h=(s(32),s(11));var p=function(){var e={color:"white"};return Object(u.jsxs)("nav",{children:[Object(u.jsx)("h3",{children:"Logo"}),Object(u.jsxs)("ul",{className:"nav-links",children:[Object(u.jsx)(h.b,{style:e,to:"/Dashboard/Dashboard",children:Object(u.jsx)("li",{children:"Dashboard"})}),Object(u.jsx)(h.b,{style:e,to:"/Signin/Signin",children:Object(u.jsx)("li",{children:"Sign in"})}),Object(u.jsx)(h.b,{style:e,to:"/Signup/Signup",children:Object(u.jsx)("li",{children:"Sign up"})})]})]})};s(17);function O(e){var t={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.password?e.password.length<6&&(t.password="Password needs to be 6 characters or more"):t.password="Password is required",t}var f=s(10),x=function(e,t){var s=Object(a.useState)({email:"",password:""}),n=Object(l.a)(s,2),c=n[0],r=n[1],i=Object(a.useState)({}),j=Object(l.a)(i,2),u=j[0],b=j[1],m=Object(a.useState)(!1),d=Object(l.a)(m,2),h=d[0],p=d[1];return Object(a.useEffect)((function(){0===Object.keys(u).length&&h&&e()}),[u]),{handleChange:function(e){var t=e.target,s=t.name,a=t.value;r(Object(o.a)(Object(o.a)({},c),{},Object(f.a)({},s,a)))},handleSubmit:function(e){e.preventDefault(),b(t(c)),p(!0)},values:c,errors:u}},v=function(e){var t=e.submitForm,s=x(t,O),a=s.handleChange,n=s.handleSubmit,c=s.values,r=s.errors;return Object(u.jsx)("div",{className:"form-content-right",children:Object(u.jsxs)("form",{onSubmit:n,className:"form",noValidate:!0,children:[Object(u.jsx)("h1",{children:"Let's get started with chatbook by login to your account"}),Object(u.jsxs)("div",{className:"form-inputs",children:[Object(u.jsx)("label",{className:"form-label",children:"Email"}),Object(u.jsx)("input",{className:"form-input",type:"email",name:"email",placeholder:"Enter your email",value:c.email,onChange:a}),r.email&&Object(u.jsx)("p",{children:r.email})]}),Object(u.jsxs)("div",{className:"form-inputs",children:[Object(u.jsx)("label",{className:"form-label",children:"Password"}),Object(u.jsx)("input",{className:"form-input",type:"password",name:"password",placeholder:"Enter your password",value:c.password,onChange:a}),r.password&&Object(u.jsx)("p",{children:r.password})]}),Object(u.jsx)("button",{className:"form-input-btn",type:"submit",children:"Login"})]})})},g=function(){return Object(u.jsx)("div",{className:"form-content-right",children:Object(u.jsx)("h1",{className:"form-success",children:"You have successfully login!"})})},w=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),s=t[0],n=t[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)("div",{className:"form-content-left"}),s?Object(u.jsx)(g,{}):Object(u.jsx)(v,{submitForm:function(){n(!0)}})]})})};s(18);function N(e){var t={};return e.username.trim()||(t.username="Username required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.mobile?(e.mobile.length<10||e.mobile.length>15)&&(t.mobile="Mobile-No. is invalid"):t.mobile="Mobile-No. required",e.password?e.password.length<6&&(t.password="Password needs to be 6 characters or more"):t.password="Password is required",e.password2?e.password2!==e.password&&(t.password2="Passwords do not match"):t.password2="Password is required",t}var y=function(e,t){var s=Object(a.useState)({username:"",email:"",mobile:"",password:"",password2:""}),n=Object(l.a)(s,2),c=n[0],r=n[1],i=Object(a.useState)({}),j=Object(l.a)(i,2),u=j[0],b=j[1],m=Object(a.useState)(!1),d=Object(l.a)(m,2),h=d[0],p=d[1];return Object(a.useEffect)((function(){0===Object.keys(u).length&&h&&e()}),[u]),{handleChange:function(e){var t=e.target,s=t.name,a=t.value;r(Object(o.a)(Object(o.a)({},c),{},Object(f.a)({},s,a)))},handleSubmit:function(e){e.preventDefault(),b(t(c)),p(!0)},values:c,errors:u}},S=function(e){var t=e.submitForm,s=y(t,N),a=s.handleChange,n=s.handleSubmit,c=s.values,r=s.errors;return Object(u.jsx)("div",{className:"form-content-right",children:Object(u.jsxs)("form",{onSubmit:n,className:"form",noValidate:!0,children:[Object(u.jsx)("h1",{children:"Get started with us today! Create your account by filling out the information below."}),Object(u.jsxs)("div",{className:"form-inputs",children:[Object(u.jsx)("label",{className:"form-label",children:"Username"}),Object(u.jsx)("input",{className:"form-input",type:"text",name:"username",placeholder:"Enter your username",value:c.username,onChange:a}),r.username&&Object(u.jsx)("p",{children:r.username})]}),Object(u.jsxs)("div",{className:"form-inputs",children:[Object(u.jsx)("label",{className:"form-label",children:"Mobile-No."}),Object(u.jsx)("input",{className:"form-input",type:"number",name:"mobile",placeholder:"Enter your Mobile-No.",value:c.mobile,onChange:a}),r.mobile&&Object(u.jsx)("p",{children:r.mobile})]}),Object(u.jsxs)("div",{className:"form-inputs",children:[Object(u.jsx)("label",{className:"form-label",children:"Email"}),Object(u.jsx)("input",{className:"form-input",type:"email",name:"email",placeholder:"Enter your email",value:c.email,onChange:a}),r.email&&Object(u.jsx)("p",{children:r.email})]}),Object(u.jsxs)("div",{className:"form-inputs",children:[Object(u.jsx)("label",{className:"form-label",children:"Password"}),Object(u.jsx)("input",{className:"form-input",type:"password",name:"password",placeholder:"Enter your password",value:c.password,onChange:a}),r.password&&Object(u.jsx)("p",{children:r.password})]}),Object(u.jsxs)("div",{className:"form-inputs",children:[Object(u.jsx)("label",{className:"form-label",children:"Confirm Password"}),Object(u.jsx)("input",{className:"form-input",type:"password",name:"password2",placeholder:"Confirm your password",value:c.password2,onChange:a}),r.password2&&Object(u.jsx)("p",{children:r.password2})]}),Object(u.jsx)("button",{className:"form-input-btn",type:"submit",children:"Sign up"})]})})},C=function(){return Object(u.jsx)("div",{className:"form-content-right",children:Object(u.jsx)("h1",{className:"form-success",children:"You have successfully signed up!"})})},E=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),s=t[0],n=t[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)("div",{className:"form-content-left"}),s?Object(u.jsx)(C,{}):Object(u.jsx)(S,{submitForm:function(){n(!0)}})]})})},P=(s(41),s(2));var k=function(){return Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"Manage",children:[Object(u.jsx)(p,{}),Object(u.jsxs)(P.c,{children:[Object(u.jsx)(P.a,{path:"/Dashboard/Dashboard",exact:!0,component:d}),Object(u.jsx)(P.a,{path:"/Signin/Signin",component:w}),Object(u.jsx)(P.a,{path:"/Signup/Signup",component:E})]})]})})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),D()}},[[42,1,2]]]);
//# sourceMappingURL=main.4580696f.chunk.js.map