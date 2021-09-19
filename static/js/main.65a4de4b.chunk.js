(this["webpackJsonpchallenge-softvision"]=this["webpackJsonpchallenge-softvision"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(8),r=n.n(s),a=n(2),o=n(0),l=Object(i.createContext)({}),d=function(e){var t=e.children,n=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return[n,function(){return c(!n)}]}(),c=Object(a.a)(n,2),s=c[0],r=c[1];return Object(o.jsx)(l.Provider,{value:{isOpenModal:s,isChangeModal:r},children:t})},u=Object(i.createContext)({}),j=function(e){var t=e.children,n=Object(i.useState)(!0),c=Object(a.a)(n,2),s=c[0],r=c[1];return Object(i.useEffect)((function(){var e=window.localStorage.getItem("challenge-softvision-data-121214"),t=!e||JSON.parse(e).darkMode;r(t)}),[r]),Object(i.useEffect)((function(){localStorage.setItem("challenge-softvision-data-121214",JSON.stringify({darkMode:s}))}),[s]),Object(o.jsx)(u.Provider,{value:{darkMode:s,setDarkMode:r},children:t})},v=n(3),h=n(10),C=function(e){switch(e){case"interviewsInitial":return"interviewsTechnique";case"interviewsTechnique":return"offer";case"offer":return"assignment";case"assignment":return"rejection";default:return"interviewsInitial"}},b=function(e){switch(e){case"rejection":return"assignment";case"assignment":return"offer";case"offer":return"interviewsTechnique";case"interviewsTechnique":return"interviewsInitial";default:return"rejection"}},O=[{id:1,name:"Ezequiel Gonzalez",description:"Tiene buena pinta.",position:"FRONTEND",state:"interviewsInitial",cv:"https://drive.google.com/file/d/1XL0G_11aQ71LQwiAZGUH0cFHXLNik5_4/view?usp=sharing"}],f=Object(i.createContext)({}),x=function(e){var t=e.children,n=Object(i.useState)(O),c=Object(a.a)(n,2),s=c[0],r=c[1],l=Object(i.useState)(void 0),d=Object(a.a)(l,2),u=d[0],j=d[1];Object(i.useEffect)((function(){var e=window.localStorage.getItem("challenge-softvision-users-121214"),t=e?JSON.parse(e).users:O;r(t)}),[r]),Object(i.useEffect)((function(){localStorage.setItem("challenge-softvision-users-121214",JSON.stringify({users:s}))}),[s]);return Object(o.jsx)(f.Provider,{value:{users:s,prevUserState:function(e){var t=s.map((function(t){return t.id===e?Object(v.a)(Object(v.a)({},t),{},{state:b(t.state)}):t}));r(t)},nextUserState:function(e){var t=s.map((function(t){return t.id===e?Object(v.a)(Object(v.a)({},t),{},{state:C(t.state)}):t}));r(t)},addUser:function(e,t,n,i){var c={id:(new Date).valueOf(),name:e,description:t,position:n,state:"interviewsInitial",cv:i};r([].concat(Object(h.a)(s),[c]))},userEditState:u,setUserEditState:j,editUser:function(e,t,n,i,c){var a=s.map((function(s){return s.id===i?Object(v.a)(Object(v.a)({},s),{},{name:e,description:t,position:n,cv:c}):s}));r(a)},removeUser:function(e){var t=s.filter((function(t){return t.id!==e}));r(t)}},children:t})},m=function(e){var t=e.isOpenModal,n=e.isChangeModal,c=e.children,s=Object(i.useContext)(f).setUserEditState;return Object(o.jsx)("div",{className:"modal__main ".concat(t&&"modal__main-open"),onClick:function(){s(void 0),n()},children:c})},p=n(6),g=function(e){var t=e.isChangeModal,n=Object(i.useContext)(f),c=n.userEditState,s=n.setUserEditState,r=n.addUser,l=n.editUser,d=function(e){var t=Object(i.useState)(e),n=Object(a.a)(t,2),c=n[0],s=n[1];return{form:c,handleChange:function(e){var t=e.target,n=t.name,i=t.value;s(Object(v.a)(Object(v.a)({},c),{},Object(p.a)({},n,i)))},setForm:s}}({name:"",description:"",position:"",cv:""}),u=d.form,j=d.handleChange,h=d.setForm;Object(i.useEffect)((function(){h({name:(null===c||void 0===c?void 0:c.name)||"",description:(null===c||void 0===c?void 0:c.description)||"",position:(null===c||void 0===c?void 0:c.position)||"",cv:(null===c||void 0===c?void 0:c.cv)||""})}),[l]);var C=u.name,b=u.description,O=u.position,x=u.cv,m=function(){t(),s(void 0)};return Object(o.jsxs)("div",{className:"modal-add-user",onClick:function(e){e.stopPropagation()},children:[c?Object(o.jsx)("h3",{children:"Editar candidato"}):Object(o.jsx)("h3",{children:"A\xf1adir candidato"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C.length>6&&O.length>6&&b.length>6&&C.length<17&&O.length<17&&b.length<15&&(c?l(C,b,O.toUpperCase(),null===c||void 0===c?void 0:c.id,x):r(C,b,O.toUpperCase(),x),m(),s(void 0))},children:[Object(o.jsx)("input",{name:"name",placeholder:"Nombre",value:C,onChange:j}),Object(o.jsx)("input",{name:"description",placeholder:"Descripci\xf3n",value:b,onChange:j}),Object(o.jsx)("input",{name:"position",placeholder:"Posici\xf3n",value:O,onChange:j}),Object(o.jsx)("input",{name:"cv",placeholder:"Enlace de cv",value:x,onChange:j}),Object(o.jsx)("button",{className:"btn",children:c?"Guardar":"A\xf1adir"})]}),Object(o.jsx)("button",{className:"modal-btn-cancel",onClick:m,children:"Cancelar"})]})},w=function(e){var t=e.fill,n=void 0===t?"currentColor":t;return Object(o.jsx)("svg",{width:"16",height:"18",viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 2C5 1.46957 5.21071 0.960859 5.58579 0.585786C5.96086 0.210714 6.46957 0 7 0H9C9.53043 0 10.0391 0.210714 10.4142 0.585786C10.7893 0.960859 11 1.46957 11 2V3H15C15.2652 3 15.5196 3.10536 15.7071 3.29289C15.8946 3.48043 16 3.73478 16 4C16 4.26522 15.8946 4.51957 15.7071 4.70711C15.5196 4.89464 15.2652 5 15 5H14V15C14 15.7956 13.6839 16.5587 13.1213 17.1213C12.5587 17.6839 11.7956 18 11 18H5C4.20435 18 3.44129 17.6839 2.87868 17.1213C2.31607 16.5587 2 15.7956 2 15V5H1C0.734784 5 0.48043 4.89464 0.292893 4.70711C0.105357 4.51957 0 4.26522 0 4C0 3.73478 0.105357 3.48043 0.292893 3.29289C0.48043 3.10536 0.734784 3 1 3H5V2ZM6 5H4V15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16H11C11.2652 16 11.5196 15.8946 11.7071 15.7071C11.8946 15.5196 12 15.2652 12 15V5H6ZM9 3H7V2H9V3ZM6 6C6.26522 6 6.51957 6.10536 6.70711 6.29289C6.89464 6.48043 7 6.73478 7 7V14C7 14.2652 6.89464 14.5196 6.70711 14.7071C6.51957 14.8946 6.26522 15 6 15C5.73478 15 5.48043 14.8946 5.29289 14.7071C5.10536 14.5196 5 14.2652 5 14V7C5 6.73478 5.10536 6.48043 5.29289 6.29289C5.48043 6.10536 5.73478 6 6 6ZM10 6C10.2652 6 10.5196 6.10536 10.7071 6.29289C10.8946 6.48043 11 6.73478 11 7V14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15C9.73478 15 9.48043 14.8946 9.29289 14.7071C9.10536 14.5196 9 14.2652 9 14V7C9 6.73478 9.10536 6.48043 9.29289 6.29289C9.48043 6.10536 9.73478 6 10 6Z",fill:n})})},N=function(e){var t=e.fill,n=void 0===t?"currentColor":t;return Object(o.jsx)("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.879 1.707C13.4415 1.14459 14.2045 0.828644 15 0.828644C15.7955 0.828644 16.5584 1.14459 17.121 1.707L17.293 1.879C17.8554 2.44159 18.1713 3.20451 18.1713 4C18.1713 4.7955 17.8554 5.55842 17.293 6.121L15.556 7.86L5.70696 17.708C5.57896 17.8361 5.41859 17.927 5.24297 17.971L1.24296 18.971C1.07538 19.013 0.899782 19.0108 0.73328 18.9647C0.566778 18.9187 0.415053 18.8302 0.292893 18.7081C0.170733 18.5859 0.0823047 18.4342 0.036226 18.2677C-0.00985267 18.1012 -0.0120098 17.9256 0.0299649 17.758L1.02997 13.758C1.07401 13.5824 1.16491 13.422 1.29297 13.294L11.199 3.388L12.879 1.708V1.707ZM15.707 3.121C15.5194 2.93353 15.2651 2.82822 15 2.82822C14.7348 2.82822 14.4805 2.93353 14.293 3.121L13.307 4.107L14.862 5.724L15.879 4.707C16.0664 4.51948 16.1718 4.26517 16.1718 4C16.1718 3.73484 16.0664 3.48053 15.879 3.293L15.707 3.121ZM13.447 7.138L11.892 5.522L2.90296 14.512L2.37397 16.626L4.48897 16.097L13.448 7.138H13.447Z",fill:n})})},M=function(e){var t=e.fill,n=void 0===t?"currentColor":t;return Object(o.jsx)("svg",{width:"16",height:"28",viewBox:"0 0 16 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1783 1.15536C14.8658 0.842889 14.4419 0.667355 14 0.667355C13.5581 0.667355 13.1342 0.842889 12.8217 1.15536L1.155 12.8226C0.842549 13.1352 0.667025 13.559 0.667025 14.001C0.667025 14.443 0.842549 14.8668 1.155 15.1794L12.8217 26.8466C13.136 27.1502 13.557 27.3182 13.994 27.3144C14.431 27.3106 14.849 27.1354 15.158 26.8263C15.467 26.5173 15.6423 26.0993 15.6461 25.6622C15.6499 25.2252 15.4819 24.8042 15.1783 24.4898L4.69 14.001L15.1783 3.51214C15.4908 3.19958 15.6663 2.77571 15.6663 2.33375C15.6663 1.89179 15.4908 1.46792 15.1783 1.15536V1.15536Z",fill:n})})},L=function(e){var t=e.fill,n=void 0===t?"currentColor":t;return Object(o.jsx)("svg",{width:"16",height:"28",viewBox:"0 0 16 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.821657 1.15536C1.1342 0.842889 1.55805 0.667355 1.99999 0.667355C2.44193 0.667355 2.86578 0.842889 3.17832 1.15536L14.845 12.8226C15.1574 13.1352 15.333 13.559 15.333 14.001C15.333 14.443 15.1574 14.8668 14.845 15.1794L3.17832 26.8466C2.86399 27.1502 2.44298 27.3182 2.00599 27.3144C1.56899 27.3106 1.15097 27.1354 0.841959 26.8263C0.532945 26.5173 0.357664 26.0993 0.353867 25.6622C0.35007 25.2252 0.51806 24.8042 0.821657 24.4898L11.31 14.001L0.821657 3.51214C0.509205 3.19958 0.333679 2.77571 0.333679 2.33375C0.333679 1.89179 0.509205 1.46792 0.821657 1.15536V1.15536Z",fill:n})})},S=function(e){var t,n=e.user,c=Object(i.useContext)(f),s=c.prevUserState,r=c.nextUserState,a=c.setUserEditState,d=c.removeUser,u=Object(i.useContext)(l).isChangeModal;return Object(o.jsxs)("div",{className:"user-container",children:[Object(o.jsx)("div",{className:"user-arrow",onClick:function(){return s(n.id)},children:Object(o.jsx)(M,{})}),Object(o.jsxs)("div",{className:"user",children:[Object(o.jsx)("p",{className:"user__name",children:n.name}),Object(o.jsx)("p",{className:"user__description",children:n.description}),Object(o.jsxs)("div",{className:"user__more",children:[Object(o.jsx)("p",{className:"user__more__position",children:n.position}),n.cv&&(null===(t=n.cv)||void 0===t?void 0:t.length)>1&&Object(o.jsx)("a",{className:"user__more__cv",href:n.cv,target:"_blank",children:"Descargar cv"})]})]}),Object(o.jsxs)("div",{className:"user-icons",children:[Object(o.jsx)("div",{onClick:function(){u(),a(n)},className:"icon-edit",children:Object(o.jsx)(N,{})}),Object(o.jsx)("div",{onClick:function(){return d(n.id)},className:"icon-remove",children:Object(o.jsx)(w,{})})]}),Object(o.jsx)("div",{className:"user-arrow",onClick:function(){return r(n.id)},children:Object(o.jsx)(L,{})})]})},_=function(e){var t=e.users,n=e.title;return Object(o.jsxs)("div",{className:"card-container",children:[Object(o.jsx)("h1",{children:n}),Object(o.jsx)("div",{className:"line"}),t.map((function(e){return Object(o.jsx)(S,{user:e},e.id)}))]})},k=n(9),E=n.n(k),U=function(){var e=Object(i.useContext)(u),t=e.darkMode,n=e.setDarkMode,c=Object(i.useContext)(f).users,s=function(e){return c.filter((function(t){return t.state===e}))},r=Object(i.useContext)(l),a=r.isOpenModal,d=r.isChangeModal;return Object(o.jsxs)("div",{className:"home-screen ".concat(t?"dark-theme":"light-theme"),children:[Object(o.jsx)(m,{isOpenModal:a,isChangeModal:d,children:Object(o.jsx)(g,{isChangeModal:d})}),Object(o.jsxs)("nav",{className:"nav",children:[Object(o.jsx)("h1",{children:"Gestor de cantidatos"}),Object(o.jsx)("button",{className:"btn",onClick:d,style:{padding:"10px 15px",fontSize:"18px"},children:"A\xf1adir candidato"}),Object(o.jsxs)("div",{className:"toggle-theme",children:[Object(o.jsx)("label",{style:{fontSize:"20px"},children:"Modo oscuro"}),Object(o.jsx)(E.a,{onChange:function(){return n(!t)},checked:t,onColor:"#BA3CC2",offColor:"#518EC7"})]})]}),Object(o.jsxs)("section",{className:"sections-grid",children:[Object(o.jsx)(_,{users:s("interviewsInitial"),title:"Entrevista inicial"}),Object(o.jsx)(_,{users:s("interviewsTechnique"),title:"Entrevista t\xe9cnica"}),Object(o.jsx)(_,{users:s("offer"),title:"Oferta"}),Object(o.jsx)(_,{users:s("assignment"),title:"Asignaci\xf3n"}),Object(o.jsx)(_,{users:s("rejection"),title:"Rechazo"})]})]})},V=function(){return Object(o.jsx)(j,{children:Object(o.jsx)(x,{children:Object(o.jsx)(d,{children:Object(o.jsx)(U,{})})})})};n(17);r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(V,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.65a4de4b.chunk.js.map