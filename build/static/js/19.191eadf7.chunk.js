(this["webpackJsonpinterview-manager-system"]=this["webpackJsonpinterview-manager-system"]||[]).push([[19],{312:function(e,t,n){"use strict";var a=n(14),r=n(0),i=n.n(r),s=n(330),c=n(287),o=n(1),l=i.a.forwardRef((function(e,t){var n,r,i,l,d=e.children,j=e.type,u=e.direction,b=e.offset,h=e.scale;switch(u){case"up":case"left":i=b,l=0;break;default:i=0,l=b}var m=Object(s.a)(i,l),x=Object(a.a)(m,2),O=x[0],p=x[1],f=Object(s.a)(i,l),v=Object(a.a)(f,2),g=v[0],w=v[1];switch(j){case"rotate":return Object(o.jsx)(c.a.div,{ref:t,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:d});case"slide":return"up"===u||"down"===u?Object(o.jsx)(c.a.div,{ref:t,animate:{y:void 0!==g?g:""},onHoverEnd:function(){return w()},onHoverStart:function(){return w()},children:d}):Object(o.jsx)(c.a.div,{ref:t,animate:{x:void 0!==O?O:""},onHoverEnd:function(){return p()},onHoverStart:function(){return p()},children:d});default:return"number"===typeof h&&(h={hover:h,tap:h}),Object(o.jsx)(c.a.div,{ref:t,whileHover:{scale:null===(n=h)||void 0===n?void 0:n.hover},whileTap:{scale:null===(r=h)||void 0===r?void 0:r.tap},children:d})}}));l.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},t.a=l},383:function(e,t,n){"use strict";var a=n(8),r=n(57),i=n(270),s=n(123),c=n(1),o=["children"];t.a=function(e){var t=e.children,n=Object(r.a)(e,o);return Object(c.jsx)(s.a,Object(a.a)(Object(a.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(c.jsx)(i.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},384:function(e,t,n){"use strict";var a=n(280),r=n(81),i=n(303),s=n(1);t.a=function(){return Object(s.jsxs)(a.a,{direction:"row",justifyContent:"space-between",children:[Object(s.jsx)(r.a,{variant:"subtitle2",component:i.a,href:"https://beetsoft.com.vn",target:"_blank",underline:"hover",children:"beetsoft.com.vn"}),Object(s.jsx)(r.a,{variant:"subtitle2",component:i.a,href:"https://beetsoft.com.vn",target:"_blank",underline:"hover",children:"\xa9 beetsoft.com.vn"})]})}},385:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},386:function(e,t,n){"use strict";var a=n(9),r=Object(a.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=r},601:function(e,t,n){"use strict";n.r(t);var a=n(275),r=n(295),i=n(280),s=n(81),c=n(234),o=n(34),l=n(33),d=n(383),j=n(384),u=n(8),b=n(16),h=n(14),m=n(57),x=n(6),O=n.n(x),p=n(0),f=n.n(p),v=n(550),g=n.n(v),w=n(551),y=n.n(w),k=n(315),C=n(270),S=n(603),E=n(597),H=n(604),I=n(606),P=n(554),B=n(309),z=n(555),W=n(596),q=n(298),A=n(314),D=n(312),F=n(68),R=n(385),G=n(1),J=["loginProp"],M=function(e){var t=e.loginProp,n=Object(m.a)(e,J),a=Object(l.a)(),d=Object(R.a)(),j=f.a.useState(!0),x=Object(h.a)(j,2),p=x[0],v=x[1],w=Object(F.a)().login,M=f.a.useState(!1),T=Object(h.a)(M,2),U=T[0],V=T[1],_=function(){V(!U)},K=function(e){e.preventDefault()};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(r.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(G.jsx)(r.a,{item:!0,xs:12,children:Object(G.jsxs)(C.a,{sx:{alignItems:"center",display:"flex"},children:[Object(G.jsx)(c.a,{sx:{flexGrow:1},orientation:"horizontal"}),Object(G.jsx)(c.a,{sx:{flexGrow:1},orientation:"horizontal"})]})}),Object(G.jsx)(r.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(G.jsx)(C.a,{sx:{mb:2},children:Object(G.jsx)(s.a,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),Object(G.jsx)(A.a,{enableReinitialize:!0,initialValues:{email:"contact@trants.io",password:"123123",submit:null},validationSchema:k.c().shape({email:k.d().email("Must be a valid email").max(255).required("Email is required"),password:k.d().max(255).required("Password is required")}),onSubmit:function(){var e=Object(b.a)(O.a.mark((function e(t,n){var a,r,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,r=n.setStatus,i=n.setSubmitting,e.prev=1,e.next=4,w(t.email,t.password).then((function(){}),(function(e){d.current&&(r({success:!1}),a({submit:e.message}),i(!1))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),d.current&&(r({success:!1}),a({submit:e.t0.message}),i(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,c=e.handleBlur,l=e.handleChange,d=e.handleSubmit,j=e.isSubmitting,b=e.touched,h=e.values;return Object(G.jsxs)("form",Object(u.a)(Object(u.a)({noValidate:!0,onSubmit:d},n),{},{children:[Object(G.jsxs)(S.a,{fullWidth:!0,error:Boolean(b.email&&r.email),sx:Object(u.a)({},a.typography.customInput),children:[Object(G.jsx)(E.a,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),Object(G.jsx)(H.a,{id:"outlined-adornment-email-login",type:"email",value:h.email,name:"email",onBlur:c,onChange:l,label:"Email Address / Username",inputProps:{}}),b.email&&r.email&&Object(G.jsx)(I.a,{error:!0,id:"standard-weight-helper-text-email-login",children:r.email})]}),Object(G.jsxs)(S.a,{fullWidth:!0,error:Boolean(b.password&&r.password),sx:Object(u.a)({},a.typography.customInput),children:[Object(G.jsx)(E.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(G.jsx)(H.a,{id:"outlined-adornment-password-login",type:U?"text":"password",value:h.password,name:"password",onBlur:c,onChange:l,endAdornment:Object(G.jsx)(P.a,{position:"end",children:Object(G.jsx)(B.a,{"aria-label":"toggle password visibility",onClick:_,onMouseDown:K,edge:"end",size:"large",children:U?Object(G.jsx)(g.a,{}):Object(G.jsx)(y.a,{})})}),label:"Password",inputProps:{}}),b.password&&r.password&&Object(G.jsx)(I.a,{error:!0,id:"standard-weight-helper-text-password-login",children:r.password})]}),Object(G.jsxs)(i.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[Object(G.jsx)(z.a,{control:Object(G.jsx)(W.a,{checked:p,onChange:function(e){return v(e.target.checked)},name:"checked",color:"primary"}),label:"Remember me"}),Object(G.jsx)(s.a,{variant:"subtitle1",component:o.b,to:t?"dashboard":"/forgot",color:"secondary",sx:{textDecoration:"none"},children:"Forgot Password?"})]}),r.submit&&Object(G.jsx)(C.a,{sx:{mt:3},children:Object(G.jsx)(I.a,{error:!0,children:r.submit})}),Object(G.jsx)(C.a,{sx:{mt:2},children:Object(G.jsx)(D.a,{children:Object(G.jsx)(q.a,{disableElevation:!0,disabled:j,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]}))}})]})},T=n(386),U=n(145);t.default=function(){var e=Object(l.a)(),t=Object(a.a)(e.breakpoints.down("md"));return Object(G.jsx)(T.a,{children:Object(G.jsxs)(r.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(G.jsx)(r.a,{item:!0,xs:12,children:Object(G.jsx)(r.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(G.jsx)(r.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(G.jsx)(d.a,{children:Object(G.jsxs)(r.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(G.jsx)(r.a,{item:!0,sx:{mb:3},children:Object(G.jsx)(o.b,{to:"#",children:Object(G.jsx)(U.a,{})})}),Object(G.jsx)(r.a,{item:!0,xs:12,children:Object(G.jsx)(r.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(G.jsx)(r.a,{item:!0,children:Object(G.jsxs)(i.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(G.jsx)(s.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),Object(G.jsx)(s.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),Object(G.jsx)(r.a,{item:!0,xs:12,children:Object(G.jsx)(M,{})}),Object(G.jsx)(r.a,{item:!0,xs:12,children:Object(G.jsx)(c.a,{})})]})})})})}),Object(G.jsx)(r.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(G.jsx)(j.a,{})})]})})}}}]);
//# sourceMappingURL=19.191eadf7.chunk.js.map