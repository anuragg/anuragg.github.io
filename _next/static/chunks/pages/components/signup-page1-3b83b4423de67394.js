(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{1231:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/signup-page1",function(){return s(4220)}])},4220:function(e,n,s){"use strict";s.r(n);var a=s(5893),t=s(7294),i=s(240),r=s.n(i),c=s(9669),o=s.n(c),l=s(1163),u=s(4519);function d(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}n.default=function(e){var n=(0,l.useRouter)(),s={firstName:"",lastName:"",email:"",password:"",confirmPassword:"",stage:"register"},i=(0,t.useState)(s),c=i[0],p=i[1],m=(0,t.useState)(""),h=m[0],g=m[1],_=function(e){var n=e.target,s=n.name,a=n.value;p(function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),a.forEach((function(n){d(e,n,s[n])}))}return e}({},c,d({},s,a)))};return(0,a.jsx)(t.Fragment,{children:(0,a.jsx)("div",{className:r().fullPage,children:(0,a.jsxs)("section",{className:r().createAccount,children:[(0,a.jsx)("div",{className:r().CAHeader,children:(0,a.jsx)("div",{className:r().CAHeading,children:(0,a.jsx)("h1",{children:"Create account"})})}),0!==h.length&&(0,a.jsx)("p",{className:r().error,children:h}),(0,a.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(c),c.email&&c.password?c.password.localeCompare(c.confirmPassword)?g("Passwords dont match"):o()({method:"POST",url:"http://localhost/ylytic/users/api/v1/register",headers:{"content-type":"application/json"},data:c}).then((function(e){p(s),e.data.token&&(u.I.add(e.data.token),setTimeout((function(){n.push("/goals")}),1e3))})).catch((function(e){g(e.response.data.error)})):g("please enter valid data")},children:(0,a.jsxs)("div",{className:r().userInputForm,children:[(0,a.jsxs)("div",{className:r().userInput,children:[(0,a.jsx)("label",{children:"Your Name"}),(0,a.jsx)("input",{type:"text",name:"firstName",placeholder:"First Name",onChange:_}),(0,a.jsx)("input",{type:"text",name:"lastName",placeholder:"Last Name",onChange:_})]}),(0,a.jsxs)("div",{className:r().userInput,children:[(0,a.jsx)("label",{children:"Email address"}),(0,a.jsxs)("div",{className:r().inputContainer,children:[(0,a.jsx)("div",{className:r().icon,children:(0,a.jsx)("i",{className:"fa-solid fa-user"})}),(0,a.jsx)("div",{className:r().inputField,children:(0,a.jsx)("input",{type:"email",name:"email",placeholder:"name@example.com",onChange:_})})]})]}),(0,a.jsxs)("div",{className:r().userInput,children:[(0,a.jsx)("label",{children:"Password"}),(0,a.jsxs)("div",{className:r().inputContainer,children:[(0,a.jsx)("div",{className:r().icon,children:(0,a.jsx)("i",{className:"fa-solid fa-key"})}),(0,a.jsx)("div",{className:r().inputField,children:(0,a.jsx)("input",{type:"password",name:"password",placeholder:"********",id:r().inputPassword,onChange:_})}),(0,a.jsx)("p",{className:r().special,onClick:function(){var e=document.getElementById("".concat(r().inputPassword));"password"===e.type?e.type="text":e.type="password"},children:(0,a.jsx)("i",{className:"fa-solid fa-eye"})})]})]}),(0,a.jsxs)("div",{className:r().userInput,children:[(0,a.jsx)("label",{children:"Confirm password"}),(0,a.jsxs)("div",{className:r().inputContainer,children:[(0,a.jsx)("div",{className:r().icon,children:(0,a.jsx)("i",{className:"fa-solid fa-key"})}),(0,a.jsx)("div",{className:r().inputField,children:(0,a.jsx)("input",{type:"password",name:"confirmPassword",placeholder:"********",onChange:_})})]})]}),(0,a.jsx)("div",{className:r().termsCondition,children:(0,a.jsxs)("label",{htmlFor:"condition1",children:["By clicking on the 'Create my account' you agree to our"," ",(0,a.jsx)("a",{href:"#",children:"Terms and Conditions"})," and",(0,a.jsx)("a",{href:"#",children:" Privacy Policy"})]})}),(0,a.jsxs)("button",{type:"submit",className:r().createAccountButton,children:[" ","Create my account"]}),(0,a.jsxs)("p",{className:r().bottomQuestion,children:["Already have an account? ",(0,a.jsx)("a",{href:"/login",children:"Sign-in"})]})]})})]})})})}},240:function(e){e.exports={fullPage:"signup-page_fullPage__M05wy",createAccount:"signup-page_createAccount__fz5cX",CAHeader:"signup-page_CAHeader__XHHMf",CAHeading:"signup-page_CAHeading__WOGfJ",CAPhrase:"signup-page_CAPhrase__95Szy",inputPassword:"signup-page_inputPassword__mQO0B",userInputForm:"signup-page_userInputForm__6lOaL",userInput:"signup-page_userInput__Ig3_v",inputContainer:"signup-page_inputContainer__NFRpW",icon:"signup-page_icon__N7M_e",special:"signup-page_special__M9jGp",inputField:"signup-page_inputField__uodDJ",error:"signup-page_error__dEyLf",termsCondition:"signup-page_termsCondition__pUvrf",createAccountButton:"signup-page_createAccountButton__pKZWa",bottomQuestion:"signup-page_bottomQuestion__oOBO_"}}},function(e){e.O(0,[669,774,888,179],(function(){return n=1231,e(e.s=n);var n}));var n=e.O();_N_E=n}]);