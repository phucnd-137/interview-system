(this["webpackJsonpinterview-manager-system"]=this["webpackJsonpinterview-manager-system"]||[]).push([[17],{314:function(e,t,n){"use strict";var r=n(14),a=n(0),i=n.n(a),c=n(397),s=n(289),o=n(1),l=i.a.forwardRef((function(e,t){var n,a,i,l,u=e.children,d=e.type,j=e.direction,b=e.offset,m=e.scale;switch(j){case"up":case"left":i=b,l=0;break;default:i=0,l=b}var h=Object(c.a)(i,l),x=Object(r.a)(h,2),f=x[0],O=x[1],v=Object(c.a)(i,l),p=Object(r.a)(v,2),g=p[0],w=p[1];switch(d){case"rotate":return Object(o.jsx)(s.a.div,{ref:t,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:u});case"slide":return"up"===j||"down"===j?Object(o.jsx)(s.a.div,{ref:t,animate:{y:void 0!==g?g:""},onHoverEnd:function(){return w()},onHoverStart:function(){return w()},children:u}):Object(o.jsx)(s.a.div,{ref:t,animate:{x:void 0!==f?f:""},onHoverEnd:function(){return O()},onHoverStart:function(){return O()},children:u});default:return"number"===typeof m&&(m={hover:m,tap:m}),Object(o.jsx)(s.a.div,{ref:t,whileHover:{scale:null===(n=m)||void 0===n?void 0:n.hover},whileTap:{scale:null===(a=m)||void 0===a?void 0:a.tap},children:u})}}));l.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},t.a=l},391:function(e,t,n){"use strict";var r=n(6),a=n(59),i=n(272),c=n(125),s=n(1),o=["children"];t.a=function(e){var t=e.children,n=Object(a.a)(e,o);return Object(s.jsx)(c.a,Object(r.a)(Object(r.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(s.jsx)(i.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},392:function(e,t,n){"use strict";var r=n(282),a=n(81),i=n(305),c=n(1);t.a=function(){return Object(c.jsxs)(r.a,{direction:"row",justifyContent:"space-between",children:[Object(c.jsx)(a.a,{variant:"subtitle2",component:i.a,href:"https://beetsoft.com.vn",target:"_blank",underline:"hover",children:"beetsoft.com.vn"}),Object(c.jsx)(a.a,{variant:"subtitle2",component:i.a,href:"https://beetsoft.com.vn",target:"_blank",underline:"hover",children:"\xa9 beetsoft.com.vn"})]})}},393:function(e,t,n){"use strict";var r=n(0);t.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},394:function(e,t,n){"use strict";var r=n(7),a=Object(r.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=a},397:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2),a=n(0),i=function(e,t,n){var r=t-e;return((n-e)%r+r)%r+e};function c(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Object(a.useRef)(0),c=Object(r.c)(Object(a.useState)(e[n.current]),2),s=c[0],o=c[1];return[s,function(t){n.current="number"!==typeof t?i(0,e.length,n.current+1):t,o(e[n.current])}]}},645:function(e,t,n){"use strict";n.r(t);var r=n(277),a=n(297),i=n(282),c=n(81),s=n(237),o=n(35),l=n(34),u=n(391),d=n(392),j=n(19),b=n(14),m=n(59),h=n(6),x=n(8),f=n.n(x),O=n(0),v=n.n(O),p=n(316),g=n(649),w=n(641),y=n(648),k=n(650),S=n(272),C=n(300),H=n(294),E=n(315),I=n(292),P=n(314),B=n(67),q=n(393),A=n(1),R=["forgotProp"],T=v.a.forwardRef((function(e,t){return Object(A.jsx)(I.a,Object(h.a)({elevation:6,ref:t,variant:"filled"},e))}));var D=function(e){e.forgotProp;var t=Object(m.a)(e,R),n=Object(l.a)(),r=Object(q.a)(),a=v.a.useState(!1),i=Object(b.a)(a,2),c=i[0],s=i[1],o=Object(B.a)().login,u=function(){s(!0)},d=function(e,t){"clickaway"!==t&&s(!1)};return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(E.a,{initialValues:{email:"",password:"",submit:null},validationSchema:p.c().shape({email:p.e().email("Must be a valid email").max(255).required("Email is required"),password:p.e().max(255).required("Password is required")}),onSubmit:function(){var e=Object(j.a)(f.a.mark((function e(t,n){var a,i,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,i=n.setStatus,c=n.setSubmitting,e.prev=1,e.next=4,o(t.email,t.password).then((function(){}),(function(e){r.current&&(i({success:!1}),a({submit:e.message}),c(!1))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),r.current&&(i({success:!1}),a({submit:e.t0.message}),c(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,a=e.handleBlur,i=e.handleChange,s=e.handleSubmit,o=e.isSubmitting,l=e.touched,j=e.values;return Object(A.jsxs)("form",Object(h.a)(Object(h.a)({noValidate:!0,onSubmit:s},t),{},{children:[Object(A.jsxs)(g.a,{fullWidth:!0,error:Boolean(l.email&&r.email),sx:Object(h.a)({},n.typography.customInput),children:[Object(A.jsx)(w.a,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),Object(A.jsx)(y.a,{id:"outlined-adornment-email-login",type:"email",value:j.email,name:"email",onBlur:a,onChange:i,label:"Email Address / Username",inputProps:{}}),l.email&&r.email&&Object(A.jsx)(k.a,{error:!0,id:"standard-weight-helper-text-email-login",children:r.email})]}),Object(A.jsx)(S.a,{sx:{mt:2},children:Object(A.jsxs)(P.a,{children:[Object(A.jsx)(C.a,{href:"login",onClick:u,disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Submit"}),Object(A.jsx)(H.a,{open:c,autoHideDuration:6e3,onClose:d,children:Object(A.jsx)(T,{onClose:d,severity:"success",sx:{width:"100%"},children:"This is a success message!"})})]})})]}))}})})},F=n(394),W=n(145);t.default=function(){var e=Object(l.a)(),t=Object(r.a)(e.breakpoints.down("md"));return Object(A.jsx)(F.a,{children:Object(A.jsxs)(a.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(A.jsx)(a.a,{item:!0,xs:12,children:Object(A.jsx)(a.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(A.jsx)(a.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(A.jsx)(u.a,{children:Object(A.jsxs)(a.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(A.jsx)(a.a,{item:!0,sx:{mb:3},children:Object(A.jsx)(o.b,{to:"#",children:Object(A.jsx)(W.a,{})})}),Object(A.jsx)(a.a,{item:!0,xs:12,children:Object(A.jsx)(a.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(A.jsx)(a.a,{item:!0,children:Object(A.jsxs)(i.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(A.jsx)(c.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Forgot password?"}),Object(A.jsx)(c.a,{variant:"caption",fontSize:"16px",textAlign:"center",children:"Enter your email address below and we'll send you password reset OTP."})]})})})}),Object(A.jsx)(a.a,{item:!0,xs:12,children:Object(A.jsx)(D,{})}),Object(A.jsx)(a.a,{item:!0,xs:12,children:Object(A.jsx)(s.a,{})}),Object(A.jsx)(a.a,{item:!0,xs:12,children:Object(A.jsx)(a.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(A.jsx)(c.a,{component:o.b,to:"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),Object(A.jsx)(a.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(A.jsx)(d.a,{})})]})})}}}]);
//# sourceMappingURL=17.4d31b8b2.chunk.js.map