(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{47:function(e,c,t){},83:function(e,c,t){},87:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),l=t(20),n=t.n(l),i=(t(47),t(6)),d=t(40),r=t(7),j=t(9),o=t.n(j),h=t(97),x=t(0),b=function(e){return Object(x.jsxs)("div",{className:"header row flex-middle",children:[Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsx)("div",{className:"icon",onClick:e.prevMonth,children:"chevron_left"})}),Object(x.jsx)("div",{className:"col col-center",children:Object(x.jsx)("span",{children:Object(h.a)(e.currentMonth,"MMMM yyyy")})}),Object(x.jsx)("div",{className:"col col-end",onClick:e.nextMonth,children:Object(x.jsx)("div",{className:"icon",children:"chevron_right"})})]})},O=t(90),m=t(91),v=function(e){for(var c="EEEE",t=[],s=Object(O.a)(e.currentMonth),a=1;a<7;a++)t.push(Object(x.jsx)("div",{className:"col col-center",children:Object(h.a)(Object(m.a)(s,a),c)},a));return t.push(Object(x.jsx)("div",{className:"col col-center",children:Object(h.a)(Object(m.a)(s,0),c)},0)),Object(x.jsx)("div",{className:"days row",children:t})},u=t(92),p=t(93),N=t(94),f=t(95),g=t(98),w=function(e){for(var c=Object(u.a)(e.currentMonth),t=Object(p.a)(c),s=Object(O.a)(c),a=Object(N.a)(t),l=[],n=[],i=s,d="";i<=a;){for(var r=function(t){d=Object(h.a)(i,"d");var s=i,a=void 0;e.events&&e.events.length>0&&(a=e.events.filter((function(e){return e.date==="".concat(s.getDate(),".").concat(s.getMonth()+1,".").concat(s.getFullYear())}))),n.push(Object(x.jsxs)("div",{className:"col cell ".concat(Object(f.a)(i,c)?Object(g.a)(i,e.selectedDate)?"selected":"":"disabled"),onClick:function(){return e.onDateClick(s)},children:[Object(x.jsx)("span",{className:"number ".concat(Object(g.a)(i,new Date)?"today":""),children:d}),Object(x.jsx)("span",{className:"bg",children:d}),a&&a.length>0?Object(x.jsx)("span",{className:"event",children:a.length}):null]},i)),i=Object(m.a)(i,1)},j=0;j<7;j++)r();l.push(Object(x.jsx)("div",{className:"row",children:n},i)),n=[]}return Object(x.jsx)("div",{className:"body",children:l})},I=function(e){return Object(x.jsxs)("div",{className:"header row flex-middle",children:[Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsx)("div",{className:"icon",onClick:e.onBackClick,children:"expand_less"})}),Object(x.jsx)("div",{className:"col col-center",children:Object(x.jsx)("span",{children:e.selectedDate.toLocaleDateString()})}),Object(x.jsx)("div",{className:"col col-end"})]})},k=t(38),S=t.n(k),C=function(e){var c=Object(s.useState)(),t=Object(i.a)(c,2),a=t[0],l=t[1],n=Object(s.useState)(),d=Object(i.a)(n,2),r=d[0],j=d[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"col col-start"}),Object(x.jsxs)("div",{className:"col col-center",children:[Object(x.jsxs)("div",{children:["Title"," ",Object(x.jsx)("input",{name:"title",type:"text",maxLength:45,value:a,onChange:function(e){return l(e.target.value)}})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{children:["Time"," ",Object(x.jsx)(S.a,{clearIcon:null,clockIcon:null,disableClock:!0,value:r,onChange:j})]}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"btn",onClick:function(){a&&r&&o.a.post("/api/events",{title:"".concat(a),time:"".concat(r),date:"".concat(e.selectedDateFormated)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt_token"))}}).then((function(){e.setShowCreateEvent(!1),o.a.get("/api/events",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt_token"))}}).then((function(c){console.log(c.data),e.setEvents(c.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},children:"Create"})]}),Object(x.jsx)("div",{className:"col col-end",children:Object(x.jsx)("div",{className:"icon",onClick:function(){return e.setShowCreateEvent(!1)},children:"close"})})]})},E=function(e){var c="".concat(e.selectedDate.getDate(),".").concat(e.selectedDate.getMonth()+1,".").concat(e.selectedDate.getFullYear()),t=e.events.filter((function(e){return e.date===c})),s=[];return t.forEach((function(c){s.push(Object(x.jsxs)("div",{className:"header row flex-middle",children:[Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsxs)("span",{children:["\u2003",c.time]})}),Object(x.jsx)("div",{className:"col col-center",children:Object(x.jsx)("span",{children:c.title})}),Object(x.jsx)("div",{className:"col col-end",children:Object(x.jsx)("div",{className:"icon",onClick:function(){return t=c.id,void o.a.delete("/api/events/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt_token"))}}).then((function(){o.a.get("/api/events",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt_token"))}}).then((function(c){console.log(c.data),e.setEvents(c.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}));var t},children:"close"})})]},c.id))})),Object(x.jsxs)("div",{children:[s,Object(x.jsx)("div",{className:"header row flex-middle",children:e.showCreateEvent?Object(x.jsx)(C,{setShowCreateEvent:e.setShowCreateEvent,selectedDateFormated:c,setEvents:e.setEvents}):Object(x.jsx)("div",{className:"col col-center",children:Object(x.jsx)("div",{onClick:function(){return e.setShowCreateEvent(!0)},className:"icon",children:"add"})})})]})},y=t(96),D=t(39),L=function(){var e=Object(s.useState)([]),c=Object(i.a)(e,2),t=c[0],a=c[1],l=Object(s.useState)(new Date),n=Object(i.a)(l,2),d=n[0],r=n[1],j=Object(s.useState)(new Date),h=Object(i.a)(j,2),O=h[0],m=h[1],u=Object(s.useState)(!1),p=Object(i.a)(u,2),N=p[0],f=p[1],g=Object(s.useState)(!1),k=Object(i.a)(g,2),S=k[0],C=k[1];Object(s.useEffect)((function(){o.a.get("/api/events",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt_token"))}}).then((function(e){console.log(e.data),a(e.data)})).catch((function(e){console.log(e)}))}),[]);return Object(x.jsx)("div",{className:"calendar",children:N?Object(x.jsxs)("div",{children:[Object(x.jsx)(I,{selectedDate:O,onBackClick:function(){f(!1)}}),Object(x.jsx)(E,{events:t,setEvents:a,selectedDate:O,showCreateEvent:S,setShowCreateEvent:C})]}):Object(x.jsxs)("div",{children:[Object(x.jsx)(b,{prevMonth:function(){r(Object(y.a)(d,1))},nextMonth:function(){r(Object(D.a)(d,1))},currentMonth:d}),Object(x.jsx)(v,{currentMonth:d}),Object(x.jsx)(w,{events:t,currentMonth:d,selectedDate:O,onDateClick:function(e){m(e),f(!0)}})]})})},M=function(e){var c=Object(s.useState)(""),t=Object(i.a)(c,2),a=t[0],l=t[1],n=Object(s.useState)(""),d=Object(i.a)(n,2),r=d[0],j=d[1],h=Object(s.useState)(!1),b=Object(i.a)(h,2),O=b[0],m=b[1];return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"header row flex-middle",children:Object(x.jsxs)("div",{className:"col col-center",children:[Object(x.jsxs)("div",{children:["Email"," ",Object(x.jsx)("input",{type:"email",name:"email",value:a,onChange:function(e){return l(e.target.value)}})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{children:["Password"," ",Object(x.jsx)("input",{type:"password",name:"password",value:r,onChange:function(e){return j(e.target.value)}})]}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"col col-center",children:Object(x.jsx)("button",{className:"btn",onClick:function(){o.a.post("/api/login",{email:"".concat(a),password:"".concat(r)}).then((function(c){l(""),j(""),localStorage.setItem("jwt_token",c.data.token),e.setIsLoggedIn(!0)})).catch((function(e){console.log(e),l(""),j(""),m(!0)}))},children:"Log in"})}),O?Object(x.jsx)("h6",{className:"entry-text",children:"Email or password is wrong"}):null]})})})},_=function(e){var c=Object(s.useState)(""),t=Object(i.a)(c,2),a=t[0],l=t[1],n=Object(s.useState)(""),d=Object(i.a)(n,2),r=d[0],j=d[1],h=Object(s.useState)(null),b=Object(i.a)(h,2),O=b[0],m=b[1];return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"header row flex-middle",children:Object(x.jsxs)("div",{className:"col col-center",children:[Object(x.jsxs)("div",{children:["Email"," ",Object(x.jsx)("input",{type:"email",name:"email",value:a,onChange:function(e){return l(e.target.value)}})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{children:["Password"," ",Object(x.jsx)("input",{type:"password",name:"password",value:r,onChange:function(e){return j(e.target.value)}})]}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"col col-center",children:Object(x.jsx)("button",{className:"btn",onClick:function(){return function(){if(r.length<6)return j(""),void m("Password must be atleast 6 characters long");o.a.post("/api/users",{email:"".concat(a),password:"".concat(r)}).then((function(){o.a.post("/api/login",{email:"".concat(a),password:"".concat(r)}).then((function(c){localStorage.setItem("jwt_token",c.data.token),e.setIsLoggedIn(!0)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e),m("Email is already used")})),l(""),j("")}()},children:"Register"})}),O?Object(x.jsx)("h6",{className:"entry-text",children:O}):null]})})})},F=t(42),T=function(e){var c=Object(s.useState)(""),t=Object(i.a)(c,2),a=t[0],l=t[1],n=Object(s.useState)(""),d=Object(i.a)(n,2),r=d[0],j=d[1],h=Object(s.useState)(!1),b=Object(i.a)(h,2),O=b[0],m=b[1],v=Object(F.a)("123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",12);return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"header row flex-middle",children:Object(x.jsxs)("div",{className:"col col-center",children:[Object(x.jsxs)("div",{children:["Existing ID"," ",Object(x.jsx)("input",{id:"idInput",type:"text",name:"LoginID",maxLength:"12",value:a,onChange:function(e){return l(e.target.value.toUpperCase())}})]}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"col col-center",children:Object(x.jsx)("button",{className:"btn",onClick:function(){o.a.post("/api/login",{email:"".concat(a.toUpperCase()),password:"secret"}).then((function(c){l(""),localStorage.setItem("jwt_token",c.data.token),e.setIsLoggedIn(!0)})).catch((function(e){console.log(e),l(""),m(!0)}))},children:"Load"})}),O?Object(x.jsx)("h6",{className:"entry-text",children:"ID is invalid"}):null]})}),Object(x.jsx)("div",{className:"header row flex-middle",children:Object(x.jsxs)("div",{className:"col col-center",children:[Object(x.jsx)("div",{className:"col col-center",children:Object(x.jsx)("button",{className:"btn",onClick:function(){return function(){var e=v();o.a.post("/api/users",{email:"".concat(e),password:"secret"}).then((function(){navigator.clipboard.writeText(e),l(e),j(!0)})).catch((function(e){console.log(e)}))}()},children:"Generate new ID"})}),r?Object(x.jsx)("h6",{className:"entry-text",children:"ID copied on your clipboard, don't forget it!"}):null]})})]})},A=function(e){var c=Object(s.useState)("login"),t=Object(i.a)(c,2),a=t[0],l=t[1];return Object(x.jsxs)("div",{className:"calendar",children:[Object(x.jsxs)("div",{className:"header row flex-middle",children:[Object(x.jsx)("div",{className:"col col-center",children:Object(x.jsx)("span",{onClick:function(){return l("login")},className:"text-btn ".concat("login"===a?"active":""),children:"Log in"})}),Object(x.jsx)("div",{className:"col col-center",children:Object(x.jsx)("span",{onClick:function(){return l("register")},className:"text-btn ".concat("register"===a?"active":""),children:"Register"})}),Object(x.jsx)("div",{className:"col col-center",children:Object(x.jsx)("span",{onClick:function(){return l("id")},className:"text-btn ".concat("id"===a?"active":""),children:"ID"})})]}),"login"===a?Object(x.jsx)(M,{setIsLoggedIn:e.setIsLoggedIn}):"register"===a?Object(x.jsx)(_,{setIsLoggedIn:e.setIsLoggedIn}):Object(x.jsx)(T,{setIsLoggedIn:e.setIsLoggedIn})]})},R=function(e){return Object(x.jsxs)("div",{className:"calendar",children:[Object(x.jsx)("header",{className:"header row flex-middle",children:Object(x.jsx)("div",{className:"col col-center api-text",children:Object(x.jsx)("span",{children:"Lavender REST Api"})})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"header row flex-middle",children:Object(x.jsx)("div",{className:"col col-start api-text",children:Object(x.jsx)("span",{children:"Introduction"})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsx)("p",{className:"api-text",children:"Lavender is a calendar app where you can set events for specific days and times. Lavender offers two ways to authenticate, first one is login with email and password. The second way is through unique ID. This document describes a REST API which can be used freely on any purpose. API is mainly built solely for Lavender app but it can be extended to other apps."})})}),Object(x.jsx)("hr",{})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"header row flex-middle",children:Object(x.jsx)("div",{className:"col col-start api-text",children:Object(x.jsx)("span",{children:"Login"})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsx)("p",{className:"api-text",children:"Logins user and retrieves access token."})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-method api-text",children:"POST"}),Object(x.jsx)("code",{className:"api-code api-text",children:"/api/login"})]})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsxs)("table",{className:"api-table",children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Field"}),Object(x.jsx)("th",{children:"Info"}),Object(x.jsx)("th",{children:"Example"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"email"}),Object(x.jsx)("th",{}),Object(x.jsx)("th",{children:"admin@test.com"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"password"}),Object(x.jsx)("th",{}),Object(x.jsx)("th",{children:"123456"})]})]})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-response api-text",children:"Response Fields"}),Object(x.jsx)("code",{className:"api-code api-text",children:"token"})]})}),Object(x.jsx)("hr",{})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"header row flex-middle",children:Object(x.jsx)("div",{className:"col col-start api-text",children:Object(x.jsx)("span",{children:"Register"})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsx)("p",{className:"api-text",children:"Registers new user."})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-method api-text",children:"POST"}),Object(x.jsx)("code",{className:"api-code api-text",children:"/api/users"})]})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsxs)("table",{className:"api-table",children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Field"}),Object(x.jsx)("th",{children:"Info"}),Object(x.jsx)("th",{children:"Example"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"email"}),Object(x.jsx)("th",{children:"[unique]"}),Object(x.jsx)("th",{children:"admin@test.com"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"password"}),Object(x.jsx)("th",{children:"[min-length: 6]"}),Object(x.jsx)("th",{children:"123456"})]})]})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-response api-text",children:"Response Fields"}),Object(x.jsx)("code",{className:"api-code api-text",children:"id"})]})}),Object(x.jsx)("hr",{})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"header row flex-middle",children:Object(x.jsx)("div",{className:"col col-start api-text",children:Object(x.jsx)("span",{children:"Get User"})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsx)("p",{className:"api-text",children:"Gets user data."})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-method api-text",children:"GET"}),Object(x.jsx)("code",{className:"api-code api-text",children:"/api/users"})]})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-auth api-text",children:"Authorization"}),Object(x.jsx)("code",{className:"api-code api-text",children:"user access token"})]})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-response api-text",children:"Response Fields"}),Object(x.jsx)("code",{className:"api-code api-text",children:"events[id], email, id"})]})}),Object(x.jsx)("hr",{})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"header row flex-middle",children:Object(x.jsx)("div",{className:"col col-start api-text",children:Object(x.jsx)("span",{children:"Get Events"})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsx)("p",{className:"api-text",children:"Gets events from user."})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-method api-text",children:"GET"}),Object(x.jsx)("code",{className:"api-code api-text",children:"/api/events"})]})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-auth api-text",children:"Authorization"}),Object(x.jsx)("code",{className:"api-code api-text",children:"user access token"})]})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-response api-text",children:"Response Fields"}),Object(x.jsx)("code",{className:"api-code api-text",children:"events"})]})}),Object(x.jsx)("hr",{})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"header row flex-middle",children:Object(x.jsx)("div",{className:"col col-start api-text",children:Object(x.jsx)("span",{children:"Create Event"})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsx)("p",{className:"api-text",children:"Creates new event on user logged in."})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-method api-text",children:"POST"}),Object(x.jsx)("code",{className:"api-code api-text",children:"/api/events"})]})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsxs)("table",{className:"api-table",children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Field"}),Object(x.jsx)("th",{children:"Info"}),Object(x.jsx)("th",{children:"Example"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"title"}),Object(x.jsx)("th",{children:"[max-length: 45]"}),Object(x.jsx)("th",{children:"New event"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"date"}),Object(x.jsx)("th",{}),Object(x.jsx)("th",{children:"17.3.2021"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"time"}),Object(x.jsx)("th",{}),Object(x.jsx)("th",{children:"12.00"})]})]})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-auth api-text",children:"Authorization"}),Object(x.jsx)("code",{className:"api-code api-text",children:"user access token"})]})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-response api-text",children:"Response Fields"}),Object(x.jsx)("code",{className:"api-code api-text",children:"title, time, date, user, id"})]})}),Object(x.jsx)("hr",{})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"header row flex-middle",children:Object(x.jsx)("div",{className:"col col-start api-text",children:Object(x.jsx)("span",{children:"Delete Event"})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsx)("div",{className:"col col-start",children:Object(x.jsx)("p",{className:"api-text",children:"Deletes event from user by event's id."})})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-method api-text",children:"DELETE"}),Object(x.jsx)("code",{className:"api-code api-text",children:"/api/events/:id"})]})}),Object(x.jsx)("div",{className:"row flex-middle",children:Object(x.jsxs)("div",{className:"col col-start",children:[Object(x.jsx)("span",{className:"api-auth api-text",children:"Authorization"}),Object(x.jsx)("code",{className:"api-code api-text",children:"user access token"})]})})]})]})};t(83);o.a.defaults.baseURL="http://localhost:3003",window.onbeforeunload=function(){localStorage.removeItem("jwt_token")};var z=function(){var e=Object(s.useState)(!1),c=Object(i.a)(e,2),t=c[0],a=c[1];Object(s.useEffect)((function(){localStorage.getItem("jwt_token")&&a(!0)}),[t]);return Object(x.jsx)(d.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("header",{children:Object(x.jsxs)("div",{id:"logo",children:[Object(x.jsx)("span",{className:"icon",children:"date_range"}),Object(x.jsxs)("span",{children:["Laven",Object(x.jsx)("b",{children:"der"})]}),t?Object(x.jsx)("button",{onClick:function(){return localStorage.removeItem("jwt_token"),void a(!1)},className:"logout text-btn",children:"Logout"}):null]})}),Object(x.jsx)("main",{children:Object(x.jsxs)(r.c,{children:[Object(x.jsx)(r.a,{exact:!0,path:"/",children:t?Object(x.jsx)(L,{}):Object(x.jsx)(A,{setIsLoggedIn:a})}),Object(x.jsx)(r.a,{exact:!0,path:"/api",children:Object(x.jsx)(R,{})})]})})]})})};n.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.b38a1124.chunk.js.map