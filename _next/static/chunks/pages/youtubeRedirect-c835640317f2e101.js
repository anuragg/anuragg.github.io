(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{9520:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/youtubeRedirect",function(){return r(4208)}])},1156:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=r(7294),o=r(1325),a=r.n(o),i=r(1163);t.default=function(e){var t=(0,i.useRouter)();return(0,s.useEffect)((function(){var e=t.pathname,r=0;if("/register"!=e){r="/goals"==e?1:"/nudgeSelection"==e?2:"/youtubeConnector"==e?3:4;for(var n=0;n<r;){for(var s=0,o=document.getElementsByClassName("".concat(a().threeDotsContainer))[n];s<3;){var i;null===(i=o.children[s])||void 0===i||(i.style.backgroundColor="#004040"),s++}var c=document.querySelectorAll(".".concat(a().progressNumb))[n];null===c||void 0===c||(c.style.backgroundColor="#004040"),null===c||void 0===c||(c.style.color="white"),n++}}}),[]),(0,n.jsx)(s.Fragment,{children:(0,n.jsxs)("div",{className:a().progressContainer,children:[(0,n.jsxs)("div",{className:a().PCLeftSection,children:[(0,n.jsx)("div",{className:a().progressNumb,children:(0,n.jsx)("p",{children:e.number})}),(0,n.jsxs)("div",{className:a().threeDotsContainer,children:[(0,n.jsx)("div",{className:a().dot}),(0,n.jsx)("div",{className:a().dot}),(0,n.jsx)("div",{className:a().dot})]})]}),(0,n.jsx)("div",{className:a().PCRightSection,children:(0,n.jsx)("p",{children:e.text})})]})})}},2608:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=r(9008),o=r(7294),a=r(4614),i=r.n(a),c=(r(1325),r(1156)),l=r(1163),p=r(4519);t.default=function(e){var t=(0,o.useState)(0),r=(t[0],t[1],(0,l.useRouter)());return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap",rel:"stylesheet"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",integrity:"sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==",crossorigin:"anonymous",referrerpolicy:"no-referrer"})]}),(0,n.jsx)("div",{className:i().wholeCss,children:(0,n.jsx)("section",{className:i().outerWrapper,children:(0,n.jsx)("section",{className:i().innerWrapper,children:(0,n.jsxs)("div",{className:i().wrapper,children:[(0,n.jsxs)("div",{className:i().wrapperLeftSection,children:[(0,n.jsx)("div",{className:i().wrapperTopSection,children:(0,n.jsx)("img",{src:"./images/ylyticLogo.svg"})}),(0,n.jsxs)("div",{className:i().wrapperBottomSection,children:[(0,n.jsx)(c.default,{number:"1",text:"Sign Up",final:!1}),(0,n.jsx)(c.default,{number:"2",text:"Set Goals",final:!1}),(0,n.jsx)(c.default,{number:"3",text:"Select Nudge",final:!1}),(0,n.jsx)(c.default,{number:"4",text:"Link Apps",final:!1}),(0,n.jsx)("div",{className:i().wrapperSignOut,children:(0,n.jsx)("button",{className:"btn btn-primary",onClick:function(){p.I.remove(),r.push("/")},children:"Sign out"})})]})]}),(0,n.jsx)("div",{className:i().wrapperRightSection,children:e.children})]})})})})]})}},4208:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=r(9669),o=r.n(s),a=r(9008),i=r(1163),c=r(4519),l=r(7294),p=r(2608),u=(r(6408),r(935)),d=r.n(u),h=r(7555),m=r.n(h);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}t.default=function(){var e=(0,l.useState)({}),t=e[0],r=e[1],s=(0,l.useState)(!1),u=s[0],h=s[1],f=(0,l.useState)(!1),g=f[0],j=f[1],_=(0,l.useState)({stage:"complete",email:"",phone:""}),v=_[0],b=_[1],y=(0,l.useState)(""),N=y[0],w=y[1],C=(0,i.useRouter)();(0,l.useEffect)((function(){o()({method:"GET",url:"http://localhost/ylytic/users/api/v1/profile",headers:{Authorization:"Bearer ".concat(c.I.get()),"content-type":"application/json"}}).then((function(e){var t=e.data;b(x({},v,{stage:t.stage,email:t.email,phone:t.phone}))})).catch((function(e){console.log(e)}))}),[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossOrigin:"anonymous"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"}),(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"Ylytic"}),(0,n.jsx)("meta",{name:"description",content:""}),(0,n.jsx)("link",{rel:"icon",href:"images/favicon.svg"})]}),(0,n.jsxs)(p.default,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h1",{className:"text-center text-primary",children:"Setup Complete!"}),(0,n.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(t),o()({method:"PUT",url:"http://localhost/ylytic/connectors/youtube/api/v1/redirect",headers:{Authorization:"Bearer ".concat(c.I.get()),"content-type":"application/json"},data:t}).then((function(e){console.log(e),200==e.status&&C.push("/dashboard")})).catch((function(e){console.log(e)}))},children:(0,n.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){var e=C.query.code;r({code:e,stage:"youtubeConnector"})},children:"Home"})})]}),(0,n.jsx)("div",{className:d().formContainer,children:(0,n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(v),o()({method:"PUT",url:"http://localhost/ylytic/users/api/v1/profile",headers:{Authorization:"Bearer ".concat(c.I.get()),"content-type":"application/json"},data:v}).then((function(e){console.log(e),200===e.status&&w("Successfully updated your profile!")})).catch((function(e){w(e.response.data.error)})),h(!1),j(!1),w("")},children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Your email"}),(0,n.jsxs)("div",{className:"input-group-prepend",children:[(0,n.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:v.email,disabled:!u,onChange:function(e){return b(x({},v,{email:e.target.value}))}}),(0,n.jsx)("div",{className:"input-group-prepend",onClick:function(){h(!0)},children:(0,n.jsx)("span",{className:"input-group-text",children:(0,n.jsx)("i",{className:"fas fa-pen"})})})]}),(0,n.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),(0,n.jsxs)("div",{className:"form-group ",children:[(0,n.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Your phone number"}),(0,n.jsxs)("div",{className:"input-group-prepend",children:[(0,n.jsx)(m(),{inputStyle:{width:"100%",background:"".concat(g?"white":"#e9ecef")},country:"in",value:v.phone,disabled:!g,onChange:function(e){return b(x({},v,{phone:"+".concat(e)}))}}),(0,n.jsx)("div",{className:"input-group-prepend",onClick:function(){j(!0)},children:(0,n.jsx)("span",{className:"input-group-text",children:(0,n.jsx)("i",{className:"fas fa-pen"})})})]})]}),N&&(0,n.jsx)("p",{className:d().error,children:N}),N&&setTimeout((function(){w("")}),900),(u||g)&&(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update info"}),(0,n.jsx)("button",{className:"btn btn-primary",onClick:function(){h(!1),j(!1)},children:"Cancel"})]})]})})]})]})}},935:function(e){e.exports={formContainer:"dashboard_formContainer__bP2MN",error:"dashboard_error__dLCFM"}},1325:function(e){e.exports={progressContainer:"progressContainer_progressContainer__xed76",PCLeftSection:"progressContainer_PCLeftSection__82ugz",PCRightSection:"progressContainer_PCRightSection__5rFIF",progressNumb:"progressContainer_progressNumb__IlV5_",threeDotsContainer:"progressContainer_threeDotsContainer__uj7cV",dot:"progressContainer_dot__UhAnH"}},4614:function(e){e.exports={wholeCss:"wrapper_wholeCss__swzH2",outerWrapper:"wrapper_outerWrapper__colE5",innerWrapper:"wrapper_innerWrapper__17eZk",wrapper:"wrapper_wrapper__cvkS_",wrapperLeftSection:"wrapper_wrapperLeftSection__A_1qR",wrapperRightSection:"wrapper_wrapperRightSection__jdBGm",wrapperTopSection:"wrapper_wrapperTopSection__hVYje",wrapperBottomSection:"wrapper_wrapperBottomSection__h6NeV",wrapperSignOut:"wrapper_wrapperSignOut__X3q3q"}},6408:function(){},9008:function(e,t,r){e.exports=r(5443)}},function(e){e.O(0,[669,555,238,774,888,179],(function(){return t=9520,e(e.s=t);var t}));var t=e.O();_N_E=t}]);