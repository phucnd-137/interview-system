(this["webpackJsonpinterview-manager-system"]=this["webpackJsonpinterview-manager-system"]||[]).push([[22],{395:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return r})),t.d(n,"d",(function(){return c}));var a=/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,i=/^(\+84[9|8|7|5|3]|0[9|8|7|5|3]|84[9|8|7|5|3])+([0-9]{2})+([ ]?)+([0-9]{3})+([ ]?)+([0-9]{3})\b$/i,r=/^[a-zA-Z\xc0\xc1\xc2\xc3\xc8\xc9\xca\xcc\xcd\xd2\xd3\xd4\xd5\xd9\xda\u0102\u0110\u0128\u0168\u01a0\xe0\xe1\xe2\xe3\xe8\xe9\xea\xec\xed\xf2\xf3\xf4\xf5\xf9\xfa\u0103\u0111\u0129\u0169\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ec0\u1ec0\u1ec2\u01b0\u0103\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ec1\u1ec1\u1ec3\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ebf\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\xdd\u1ef6\u1ef8\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9 ]*$/,c=/^[a-zA-Z0-9_-]+$/},690:function(e,n,t){"use strict";t.r(n);var a=t(7),i=t(18),r=t(10),c=t.n(r),o=t(304),s=t(314),l=t(266),d=t(352),u=t(62),b=t(0),p=t.n(b),j=t(191),m=t(21),h=t(372),x=t(373),g=t(107),f=t(14),O=t(27),v=t(136),y=t.n(v),w=t(309),k=t(702),P=t(654),q=t(655),_=t(703),C=t(26),I=t(695),A=t(147),S=t(19),B=t(106),R=t(686),z=t(1),E=Object(R.a)({root:{position:"relative",width:"100%",margin:"2em 0",padding:"1em",border:"solid 1px",borderColor:"#bdbdbd",borderRadius:"4px"},legend:{zIndex:1,position:"absolute",width:"fit-content",height:"24px",background:"white",padding:"0.25em 0.5em",left:"10px",transform:"translate(0, -125%)"}}),N=function(e){var n=e.children,t=e.legend,a=E();return Object(z.jsxs)(o.a,{className:a.root,children:[t&&Object(z.jsx)(B.a,{variant:"h4",component:"h4",className:a.legend,children:t}),n]})},G=t(11),F=t(149),L=t(150),T=t(159),W=[{label:"Information",render:[{key:"name",label:"Full Name",type:"text",required:!0},{key:"age",label:"Age",type:"number",required:!0},{key:"phone",label:"Phone Number",type:"tel",required:!0}]},{label:"Contact",render:[{key:"email",label:"Email",type:"email",required:!0}]},{label:"Address",render:[{key:"address",label:"Address",type:"text"}]},{label:"Interview Time",render:[{key:"time",label:"Interview Time",type:"datetime-local",required:!0}]}],Z=function(e){var n=e.errors,t=(e.handleBlur,e.handleChange),a=e.touched,i=e.values,r=e.label,c=e.required,o=e.type,s=e.name,l=e.readOnly;return Object(z.jsxs)(k.a,{fullWidth:!0,error:Boolean(a&&n&&!l),children:[Object(z.jsx)(q.a,{id:"outlined-adornment-".concat(r.split(" ").join("-")),type:o,required:c,onBlur:function(e){console.log(e.target.value)},InputProps:"number"===o?{inputProps:{min:0,max:10,readOnly:l}}:{readOnly:l},value:i,name:s,onChange:t,label:r,placeholder:r,InputLabelProps:"datetime-local"===o?{shrink:!0}:{}}),a&&n&&!l&&Object(z.jsx)(_.a,{error:!0,id:"standard-weight-helper-text-last-name",children:n})]})},M=p.a.memo(Z),Q=t(59),$=function(e){var n=e.interviewing,t=e.errors,r=e.handleBlur,l=e.handleChange,u=(e.handleSubmit,e.setFieldValue),p=e.touched,m=e.values,h=Object(j.a)(),x=Object(O.a)(),g=Object(G.d)(),v=Object(w.a)(x.breakpoints.down("md")),B=Object(G.e)((function(e){return e.language})).language,R=Object(G.e)((function(e){return e.rank})).ranks,E=b.useState(!1),Z=Object(f.a)(E,2),$=Z[0],V=Z[1];b.useEffect((function(){y.a.all([S.a.get("/v1/languages/all"),S.a.get("/v1/ranks/all")]).then((function(e){g(Object(L.e)({data:e[0].data.success})),g(Object(F.g)({data:e[1].data.success}))}))}),[g]);var H=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.applyPosition.every((function(e){return e.language_id&&e.rank_id&&e.rank_advanced_id}))){e.next=8;break}return V(!0),e.next=5,g(Object(T.b)(m));case 5:V(!1),e.next=9;break;case 8:Object(Q.a)("Please select all field in apply position");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(z.jsx)(o.a,{children:Object(z.jsxs)(z.Fragment,{children:[W.map((function(e){var a=e.render;return Object(z.jsx)(s.a,{direction:v?"column":"row",spacing:2,sx:{paddingBottom:2},children:a.map((function(a){var i=a.key,c=a.label,o=a.type,s=a.required;return Object(z.jsx)(M,{touched:p[i],errors:t[i],label:c,type:o,values:m[i],name:i,handleBlur:r,handleChange:l,required:s,readOnly:n},"".concat(e.label,"-").concat(c))}))},e.label)})),!n&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(N,{legend:h.formatMessage({id:"apply-positions"}),children:Object(z.jsxs)(o.a,{children:[m.applyPosition.map((function(e,n){return Object(z.jsxs)(s.a,{direction:"row",alignItems:"center",spacing:2,sx:{padding:"1em 0"},children:[Object(z.jsxs)(s.a,{direction:v?"column":"row",spacing:2,sx:{flexGrow:1},children:[Object(z.jsxs)(k.a,{fullWidth:!0,error:Boolean(p.applyPosition&&t.applyPosition),children:[Object(z.jsx)(P.a,{options:B,onChange:function(e,t){u("applyPosition[".concat(n,"].language_id"),t&&t.id||"")},value:B.find((function(n){return n.id===e.language_id})),getOptionLabel:function(e){return e.name||""},renderInput:function(e){return Object(z.jsx)(q.a,Object(a.a)(Object(a.a)({},e),{},{variant:"standard",label:"Apply Position",placeholder:"Position"}))},sx:{flexGrow:1}}),p.applyPosition&&t.applyPosition&&Object(z.jsx)(_.a,{error:!0,id:"standard-weight-helper-text-last-name",children:t.applyPosition[n]&&t.applyPosition[n].language_id})]}),Object(z.jsxs)(k.a,{fullWidth:!0,error:Boolean(p.applyPosition&&t.applyPosition),children:[Object(z.jsx)(P.a,{options:R,onChange:function(e,t){u("applyPosition[".concat(n,"].rank_id"),t&&t.id||"")},value:R.find((function(n){return n.id===e.rank_id})),getOptionLabel:function(e){return e.name||""},renderInput:function(e){return Object(z.jsx)(q.a,Object(a.a)(Object(a.a)({},e),{},{variant:"standard",label:"Rank",placeholder:"Rank"}))},sx:{flexGrow:1}}),p.applyPosition&&t.applyPosition&&Object(z.jsx)(_.a,{error:!0,id:"standard-weight-helper-text-last-name",children:t.applyPosition[n]&&t.applyPosition[n].rank_id})]}),Object(z.jsxs)(k.a,{fullWidth:!0,error:Boolean(p.applyPosition&&t.applyPosition),children:[Object(z.jsx)(P.a,{options:R,onChange:function(e,t){u("applyPosition[".concat(n,"].rank_advanced_id"),t&&t.id||"")},value:R.find((function(n){return n.id===e.rank_advanced_id})),getOptionLabel:function(e){return e.name||""},renderInput:function(e){return Object(z.jsx)(q.a,Object(a.a)(Object(a.a)({},e),{},{variant:"standard",label:"Rank Advanced",placeholder:"Rank Advanced"}))},sx:{flexGrow:1}}),p.applyPosition&&t.applyPosition&&Object(z.jsx)(_.a,{error:!0,id:"standard-weight-helper-text-last-name",children:t.applyPosition[n]&&t.applyPosition[n].rank_advanced_id})]})]}),Object(z.jsx)(d.a,{variant:"outlined",color:"error",onClick:function(){u("applyPosition",m.applyPosition.filter((function(e,t){return t!==n})))},sx:{borderRadius:9999,width:"28px",height:"28px",padding:"3px",minWidth:"auto"},children:Object(z.jsx)(C.o,{})})]},Object(I.a)())})),Object(z.jsx)(s.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:Object(z.jsx)(d.a,{variant:"outlined",onClick:function(){u("applyPosition",m.applyPosition.concat({rank_advanced_id:"",language_id:"",rank_id:""}))},sx:{marginTop:2},children:"+ Add more position"})})]})}),Object(z.jsx)(o.a,{sx:{mt:2,width:{md:"fit-content",sm:"100%"}},children:Object(z.jsx)(A.a,{children:Object(z.jsx)(d.a,{disableElevation:!0,disabled:$,onClick:H,fullWidth:!0,size:"large",variant:"contained",color:"primary",sx:{marginTop:4},children:"Get Interview Question"})})})]})]})})},V=t(334),H=t(683),J=t(526),D=t(692),U=Object(R.a)({itemHovered:{cursor:"pointer",border:"solid 1px #e0e0e0",borderColor:function(e){if(!e.interviewing)return"#e0e0e0";switch(e.status){case 0:return"rgb(255, 0, 0)";case 1:return"rgb(0, 255, 0)";default:return"#e0e0e0"}},transition:"0.3s","&:hover":{backgroundColor:"#c6f9ff"},"&:hover button":{transition:"0.7s",transform:"translate(-5px, 0)"}}}),K=t(44),X=function(e){var n=e.value,t=e.interviewing,a=void 0!==t&&t,i=(e.index,U({interviewing:a,status:n.status})),r=Object(G.d)();return Object(z.jsx)(V.a,{className:i.itemHovered,variant:"outlined",sx:{padding:"1em"},children:Object(z.jsxs)(s.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(z.jsx)(B.a,{variant:"body1",component:"span",sx:{flexGrow:1,textOverflow:"ellipsis",overflow:"hidden"},children:n.question_content}),a&&Object(z.jsx)(s.a,{direction:"row",alignItems:"center",spacing:2,children:Object(z.jsx)(k.a,{children:Object(z.jsx)(H.a,{"aria-labelledby":"demo-radio-buttons-group-label",value:"number"===typeof n.status?n.status+1:3,onChange:function(e){r(Object(K.d)({id:n.candidate_id||0,status:Number(e.target.value)-1}))},name:"radio-buttons-group",children:Object(z.jsxs)(s.a,{direction:"row",children:[Object(z.jsx)(J.a,{value:3,control:Object(z.jsx)(D.a,{}),label:"Skip",labelPlacement:"top"}),Object(z.jsx)(J.a,{value:1,control:Object(z.jsx)(D.a,{}),label:"Fail",labelPlacement:"top"}),Object(z.jsx)(J.a,{value:2,control:Object(z.jsx)(D.a,{}),label:"Pass",labelPlacement:"top"})]})})})})]})})},Y=p.a.memo(X),ee=function(e){var n=e.questionStack,t=e.interviewing;e.onClickAddButton,e.onClickDeleteButton;return Object(z.jsxs)(o.a,{children:[Object(z.jsx)(s.a,{direction:"row",marginBottom:2,children:Object(z.jsx)(B.a,{variant:"h3",component:"h3",sx:{flexGrow:1},children:n.language})}),Object(z.jsx)(s.a,{direction:"column",spacing:2,children:Object.keys(n.questions).map((function(e){return Object(z.jsxs)(o.a,{children:[!t&&Object(z.jsx)(B.a,{variant:"h5",component:"h5",sx:{flexGrow:1,padding:"8px 0"},children:e.toUpperCase()}),Object(z.jsx)(s.a,{direction:"column",spacing:1,children:n.questions[e].map((function(a){return Object(z.jsx)(Y,{value:a,interviewing:t,index:0},"".concat(n.language,"-").concat(a.id,"-").concat(e))}))})]},"".concat(n.language,"-").concat(e))}))})]})},ne=p.a.memo(ee),te=function(e){var n=e.questionList,t=e.interviewing,a=Object(b.useState)({rank_id:0,language_id:0}),i=Object(f.a)(a,1)[0],r=Object(G.d)();return Object(b.useEffect)((function(){var e,n;i.language_id&&i.rank_id&&(e=i.language_id,n=i.rank_id,r(Object(T.c)({language_id:e,rank_id:n})))}),[i]),Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(s.a,{direction:"column",spacing:2,sx:{border:"solid 1px #e9e9e9",borderRadius:5,padding:2},children:n.map((function(e,n){return Object(z.jsx)(ne,{questionStack:e,interviewing:t},e.language)}))})})},ae=t(42),ie=t(71),re=t(395);n.default=function(){var e=Object(u.b)(),n=Object(G.e)((function(e){return e.applicant})),t=Object(m.f)().id,r=Object(j.a)(),p=Object(m.e)();return Object(b.useEffect)((function(){e(t?Object(T.a)(t):Object(K.b)())}),[t,e]),Object(b.useEffect)((function(){e(t?Object(ae.a)(["interview"]):Object(ae.a)(["applicant"]))}),[]),Object(z.jsx)(o.a,{children:Object(z.jsx)(h.a,{enableReinitialize:!0,initialValues:n.applicantInfo,validationSchema:x.d().shape({name:x.f().trim().min(3,"Name must have at least 3 characters").max(50,"Maximum characters allowed is 50").matches(re.b,"Sorry, only letters (a-z) are allowed").required("Name is required"),age:x.c().max(100,"Too old").min(0,"Too young").required("Age is required"),email:x.f().trim().email("Email is not valid").required("Email is required"),phone:x.f().trim().max(10,"Please enter the correct phone number format").matches(re.c,"Please enter the correct phone number format").required("Phone number is required"),address:x.f().max(255),applyPosition:x.a().of(x.d().shape({language_id:x.f().required("Language is required"),rank_id:x.f().required("Rank is required"),rank_advanced_id:x.f().required("Rank advanced is required")})),time:x.f().required("Time is required"),note:x.f().max(255)}),onSubmit:function(){var e=Object(i.a)(c.a.mark((function e(n,i){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=i.setSubmitting)(!0),!t){e.next=8;break}return o=Object(a.a)(Object(a.a)({},n),{},{status:1,candidateQuestions:n.questions}),e.next=6,Object(ie.c)("".concat("https://api.bims.beetsoft.com.vn/api","/v1/client/candidates/").concat(t),o,"Complete").then((function(){return p("/history")}));case 6:e.next=10;break;case 8:return e.next=10,Object(ie.b)("".concat("https://api.bims.beetsoft.com.vn/api","/v1/client/candidates"),n,"Add applicant success").then((function(e){e&&e.success.id&&p("/interview/".concat(e.success.id))}));case 10:return e.next=12,r(!1);case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),children:function(e){return Object(z.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[Object(z.jsx)(g.a,{title:r.formatMessage({id:"applicant-reference-form"}),children:Object(z.jsx)($,Object(a.a)({interviewing:!!t},e))}),n.interviewQuestions.length>0&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(g.a,{title:r.formatMessage({id:"interview-questions"}),sx:{margin:"1em 0"},children:Object(z.jsx)(s.a,{direction:"column",spacing:2,children:Object(z.jsx)(te,{questionList:n.interviewQuestions,interviewing:!!t})})}),t&&Object(z.jsx)(g.a,{children:Object(z.jsx)(l.a,{name:"note",onChange:e.handleChange,"aria-label":"minimum height",minRows:3,placeholder:"Note",value:e.values.note,style:{width:"100%",padding:"8px"}})}),Object(z.jsx)(g.a,{sx:{margin:"1em 0"},children:Object(z.jsx)(A.a,{children:Object(z.jsx)(d.a,{disableElevation:!0,disabled:e.isSubmitting,type:"submit",fullWidth:!0,size:"large",variant:"contained",color:"primary",children:t?"Send Interview Result (".concat(n.applicantInfo.questions&&n.applicantInfo.questions.filter((function(e){return e.status&&2!==e.status})).length,"/").concat(n.applicantInfo.questions&&n.applicantInfo.questions.length," answered)"):"Submit"})})})]})]})}})})}}}]);
//# sourceMappingURL=22.49728916.chunk.js.map