<<<<<<<< HEAD:build/static/js/20.42dc2417.chunk.js
(this["webpackJsonpinterview-manager-system"]=this["webpackJsonpinterview-manager-system"]||[]).push([[20],{490:function(e,t,n){"use strict";var a=n(9),r=n(70),c=n(315),s=n(109),i=n(1),o=["children"];t.a=function(e){var t=e.children,n=Object(r.a)(e,o);return Object(i.jsx)(s.a,Object(a.a)(Object(a.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(i.jsx)(c.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},491:function(e,t,n){"use strict";var a=n(324),r=n(96),c=n(348),s=n(1);t.a=function(){return Object(s.jsxs)(a.a,{direction:"row",justifyContent:"space-between",children:[Object(s.jsx)(r.a,{variant:"subtitle2",component:c.a,href:"https://beetsoft.com.vn",target:"_blank",underline:"hover",children:"beetsoft.com.vn"}),Object(s.jsx)(r.a,{variant:"subtitle2",component:c.a,href:"https://beetsoft.com.vn",target:"_blank",underline:"hover",children:"\xa9 beetsoft.com.vn"})]})}},492:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},493:function(e,t,n){"use strict";var a=n(5),r=Object(a.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=r},708:function(e,t,n){"use strict";n.r(t);var a=n(319),r=n(342),c=n(324),s=n(96),i=n(271),o=n(32),l=n(27),j=n(490),d=n(491),u=n(9),b=n(18),x=n(15),h=n(70),m=n(10),O=n.n(m),p=n(0),f=n.n(p),g=n(428),v=n.n(g),w=n(429),y=n.n(w),C=n(381),k=n(315),S=n(710),I=n(705),B=n(360),E=n(711),P=n(534),z=n(363),W=n(663),q=n(532),A=n(353),F=n(380),H=n(131),D=n(89),G=n(492),R=n(1),U=["loginProp"],J=function(e){var t=e.loginProp,n=Object(h.a)(e,U),a=Object(l.a)(),j=Object(G.a)(),d=f.a.useState(!0),m=Object(x.a)(d,2),p=m[0],g=m[1],w=Object(D.a)().login,J=f.a.useState(!1),V=Object(x.a)(J,2),_=V[0],M=V[1],K=function(){M(!_)},L=function(e){e.preventDefault()};return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(r.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(R.jsx)(r.a,{item:!0,xs:12,children:Object(R.jsxs)(k.a,{sx:{alignItems:"center",display:"flex"},children:[Object(R.jsx)(i.a,{sx:{flexGrow:1},orientation:"horizontal"}),Object(R.jsx)(i.a,{sx:{flexGrow:1},orientation:"horizontal"})]})}),Object(R.jsx)(r.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(R.jsx)(k.a,{sx:{mb:2},children:Object(R.jsx)(s.a,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),Object(R.jsx)(F.a,{enableReinitialize:!0,initialValues:{account:"",password:"",submit:null},validationSchema:C.d().shape({account:C.f().max(255).required("Email/Username is required"),password:C.f().trim().min(6).max(255).required("Password is required")}),onSubmit:function(){var e=Object(b.a)(O.a.mark((function e(t,n){var a,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,r=n.setStatus,c=n.setSubmitting,e.prev=1,e.next=4,w(t.account,t.password).then((function(){}),(function(e){j.current&&(r({success:!1}),a({submit:e.message}),c(!1))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),j.current&&(r({success:!1}),a({submit:e.t0.message}),c(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,i=e.handleBlur,l=e.handleChange,j=e.handleSubmit,d=e.isSubmitting,b=e.touched,x=e.values;return Object(R.jsxs)("form",Object(u.a)(Object(u.a)({noValidate:!0,onSubmit:j},n),{},{children:[Object(R.jsxs)(S.a,{fullWidth:!0,error:Boolean(b.account&&r.account),sx:Object(u.a)({},a.typography.customInput),children:[Object(R.jsx)(I.a,{htmlFor:"outlined-adornment-account-login",children:"Email Address / Username"}),Object(R.jsx)(B.a,{id:"outlined-adornment-account-login",type:"account",value:x.account,name:"account",onBlur:i,onChange:l,label:"Email Address / Username",inputProps:{}}),b.account&&r.account&&Object(R.jsx)(E.a,{error:!0,id:"standard-weight-helper-text-account-login",children:r.account})]}),Object(R.jsxs)(S.a,{fullWidth:!0,error:Boolean(b.password&&r.password),sx:Object(u.a)({},a.typography.customInput),children:[Object(R.jsx)(I.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(R.jsx)(B.a,{id:"outlined-adornment-password-login",type:_?"text":"password",value:x.password,name:"password",autoComplete:"off",onBlur:i,onChange:l,endAdornment:Object(R.jsx)(P.a,{position:"end",children:Object(R.jsx)(z.a,{"aria-label":"toggle password visibility",onClick:K,onMouseDown:L,edge:"end",size:"large",children:_?Object(R.jsx)(v.a,{}):Object(R.jsx)(y.a,{})})}),label:"Password",inputProps:{}}),b.password&&r.password&&Object(R.jsx)(E.a,{error:!0,id:"standard-weight-helper-text-password-login",children:r.password})]}),Object(R.jsxs)(c.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[Object(R.jsx)(W.a,{control:Object(R.jsx)(q.a,{checked:p,onChange:function(e){return g(e.target.checked)},name:"checked",color:"primary"}),label:"Remember me"}),Object(R.jsx)(s.a,{variant:"subtitle1",component:o.b,to:t?"dashboard":"/forgot",color:"secondary",sx:{textDecoration:"none"},children:"Forgot Password?"})]}),r.submit&&Object(R.jsx)(k.a,{sx:{mt:3},children:Object(R.jsx)(E.a,{error:!0,children:r.submit})}),Object(R.jsx)(k.a,{sx:{mt:2},children:Object(R.jsx)(H.a,{children:Object(R.jsx)(A.a,{disableElevation:!0,disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]}))}})]})},V=n(493),_=n(168);t.default=function(){var e=Object(l.a)(),t=Object(a.a)(e.breakpoints.down("md"));return Object(R.jsx)(V.a,{children:Object(R.jsxs)(r.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(R.jsx)(r.a,{item:!0,xs:12,children:Object(R.jsx)(r.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(R.jsx)(r.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(R.jsx)(j.a,{children:Object(R.jsxs)(r.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(R.jsx)(r.a,{item:!0,sx:{mb:3},children:Object(R.jsx)(o.b,{to:"#",children:Object(R.jsx)(_.a,{})})}),Object(R.jsx)(r.a,{item:!0,xs:12,children:Object(R.jsx)(r.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(R.jsx)(r.a,{item:!0,children:Object(R.jsxs)(c.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(R.jsx)(s.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),Object(R.jsx)(s.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),Object(R.jsx)(r.a,{item:!0,xs:12,children:Object(R.jsx)(J,{})}),Object(R.jsx)(r.a,{item:!0,xs:12,children:Object(R.jsx)(i.a,{})})]})})})})}),Object(R.jsx)(r.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(R.jsx)(d.a,{})})]})})}}}]);
//# sourceMappingURL=20.42dc2417.chunk.js.map
========
(this["webpackJsonpinterview-manager-system"]=this["webpackJsonpinterview-manager-system"]||[]).push([[20],{489:function(e,t,n){"use strict";var a=n(9),r=n(70),c=n(313),s=n(109),i=n(1),o=["children"];t.a=function(e){var t=e.children,n=Object(r.a)(e,o);return Object(i.jsx)(s.a,Object(a.a)(Object(a.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(i.jsx)(c.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},490:function(e,t,n){"use strict";var a=n(322),r=n(96),c=n(346),s=n(1);t.a=function(){return Object(s.jsxs)(a.a,{direction:"row",justifyContent:"space-between",children:[Object(s.jsx)(r.a,{variant:"subtitle2",component:c.a,href:"https://beetsoft.com.vn",target:"_blank",underline:"hover",children:"beetsoft.com.vn"}),Object(s.jsx)(r.a,{variant:"subtitle2",component:c.a,href:"https://beetsoft.com.vn",target:"_blank",underline:"hover",children:"\xa9 beetsoft.com.vn"})]})}},491:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},492:function(e,t,n){"use strict";var a=n(5),r=Object(a.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=r},707:function(e,t,n){"use strict";n.r(t);var a=n(317),r=n(340),c=n(322),s=n(96),i=n(272),o=n(30),l=n(26),j=n(489),d=n(490),u=n(9),b=n(18),x=n(15),h=n(70),m=n(10),O=n.n(m),p=n(0),f=n.n(p),g=n(426),v=n.n(g),w=n(427),y=n.n(w),C=n(377),k=n(313),S=n(709),I=n(704),B=n(358),E=n(710),P=n(534),z=n(361),W=n(661),q=n(532),A=n(351),F=n(376),H=n(110),D=n(89),G=n(491),R=n(1),U=["loginProp"],J=function(e){var t=e.loginProp,n=Object(h.a)(e,U),a=Object(l.a)(),j=Object(G.a)(),d=f.a.useState(!0),m=Object(x.a)(d,2),p=m[0],g=m[1],w=Object(D.a)().login,J=f.a.useState(!1),V=Object(x.a)(J,2),_=V[0],M=V[1],K=function(){M(!_)},L=function(e){e.preventDefault()};return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(r.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(R.jsx)(r.a,{item:!0,xs:12,children:Object(R.jsxs)(k.a,{sx:{alignItems:"center",display:"flex"},children:[Object(R.jsx)(i.a,{sx:{flexGrow:1},orientation:"horizontal"}),Object(R.jsx)(i.a,{sx:{flexGrow:1},orientation:"horizontal"})]})}),Object(R.jsx)(r.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(R.jsx)(k.a,{sx:{mb:2},children:Object(R.jsx)(s.a,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),Object(R.jsx)(F.a,{enableReinitialize:!0,initialValues:{account:"",password:"",submit:null},validationSchema:C.d().shape({account:C.f().max(255).required("Email/Username is required"),password:C.f().trim().min(6).max(255).required("Password is required")}),onSubmit:function(){var e=Object(b.a)(O.a.mark((function e(t,n){var a,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,r=n.setStatus,c=n.setSubmitting,e.prev=1,e.next=4,w(t.account,t.password).then((function(){}),(function(e){j.current&&(r({success:!1}),a({submit:e.message}),c(!1))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),j.current&&(r({success:!1}),a({submit:e.t0.message}),c(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,i=e.handleBlur,l=e.handleChange,j=e.handleSubmit,d=e.isSubmitting,b=e.touched,x=e.values;return Object(R.jsxs)("form",Object(u.a)(Object(u.a)({noValidate:!0,onSubmit:j},n),{},{children:[Object(R.jsxs)(S.a,{fullWidth:!0,error:Boolean(b.account&&r.account),sx:Object(u.a)({},a.typography.customInput),children:[Object(R.jsx)(I.a,{htmlFor:"outlined-adornment-account-login",children:"Email Address / Username"}),Object(R.jsx)(B.a,{id:"outlined-adornment-account-login",type:"account",value:x.account,name:"account",onBlur:i,onChange:l,label:"Email Address / Username",inputProps:{}}),b.account&&r.account&&Object(R.jsx)(E.a,{error:!0,id:"standard-weight-helper-text-account-login",children:r.account})]}),Object(R.jsxs)(S.a,{fullWidth:!0,error:Boolean(b.password&&r.password),sx:Object(u.a)({},a.typography.customInput),children:[Object(R.jsx)(I.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(R.jsx)(B.a,{id:"outlined-adornment-password-login",type:_?"text":"password",value:x.password,name:"password",autoComplete:"off",onBlur:i,onChange:l,endAdornment:Object(R.jsx)(P.a,{position:"end",children:Object(R.jsx)(z.a,{"aria-label":"toggle password visibility",onClick:K,onMouseDown:L,edge:"end",size:"large",children:_?Object(R.jsx)(v.a,{}):Object(R.jsx)(y.a,{})})}),label:"Password",inputProps:{}}),b.password&&r.password&&Object(R.jsx)(E.a,{error:!0,id:"standard-weight-helper-text-password-login",children:r.password})]}),Object(R.jsxs)(c.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[Object(R.jsx)(W.a,{control:Object(R.jsx)(q.a,{checked:p,onChange:function(e){return g(e.target.checked)},name:"checked",color:"primary"}),label:"Remember me"}),Object(R.jsx)(s.a,{variant:"subtitle1",component:o.b,to:t?"dashboard":"/forgot",color:"secondary",sx:{textDecoration:"none"},children:"Forgot Password?"})]}),r.submit&&Object(R.jsx)(k.a,{sx:{mt:3},children:Object(R.jsx)(E.a,{error:!0,children:r.submit})}),Object(R.jsx)(k.a,{sx:{mt:2},children:Object(R.jsx)(H.a,{children:Object(R.jsx)(A.a,{disableElevation:!0,disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]}))}})]})},V=n(492),_=n(169);t.default=function(){var e=Object(l.a)(),t=Object(a.a)(e.breakpoints.down("md"));return Object(R.jsx)(V.a,{children:Object(R.jsxs)(r.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(R.jsx)(r.a,{item:!0,xs:12,children:Object(R.jsx)(r.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(R.jsx)(r.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(R.jsx)(j.a,{children:Object(R.jsxs)(r.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(R.jsx)(r.a,{item:!0,sx:{mb:3},children:Object(R.jsx)(o.b,{to:"#",children:Object(R.jsx)(_.a,{})})}),Object(R.jsx)(r.a,{item:!0,xs:12,children:Object(R.jsx)(r.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(R.jsx)(r.a,{item:!0,children:Object(R.jsxs)(c.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(R.jsx)(s.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),Object(R.jsx)(s.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),Object(R.jsx)(r.a,{item:!0,xs:12,children:Object(R.jsx)(J,{})}),Object(R.jsx)(r.a,{item:!0,xs:12,children:Object(R.jsx)(i.a,{})})]})})})})}),Object(R.jsx)(r.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(R.jsx)(d.a,{})})]})})}}}]);
//# sourceMappingURL=20.c4a7f328.chunk.js.map
>>>>>>>> 0619a7e1d13f58e3e29457b48f89868762514593:build/static/js/20.c4a7f328.chunk.js
