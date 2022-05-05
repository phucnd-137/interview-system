(this["webpackJsonpinterview-manager-system"]=this["webpackJsonpinterview-manager-system"]||[]).push([[21],{316:function(e,t,n){"use strict";var a=n(14),i=n(0),r=n.n(i),c=n(399),o=n(290),s=n(1),l=r.a.forwardRef((function(e,t){var n,i,r,l,d=e.children,u=e.type,p=e.direction,b=e.offset,j=e.scale;switch(p){case"up":case"left":r=b,l=0;break;default:r=0,l=b}var h=Object(c.a)(r,l),f=Object(a.a)(h,2),O=f[0],m=f[1],g=Object(c.a)(r,l),x=Object(a.a)(g,2),v=x[0],y=x[1];switch(u){case"rotate":return Object(s.jsx)(o.a.div,{ref:t,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:d});case"slide":return"up"===p||"down"===p?Object(s.jsx)(o.a.div,{ref:t,animate:{y:void 0!==v?v:""},onHoverEnd:function(){return y()},onHoverStart:function(){return y()},children:d}):Object(s.jsx)(o.a.div,{ref:t,animate:{x:void 0!==O?O:""},onHoverEnd:function(){return m()},onHoverStart:function(){return m()},children:d});default:return"number"===typeof j&&(j={hover:j,tap:j}),Object(s.jsx)(o.a.div,{ref:t,whileHover:{scale:null===(n=j)||void 0===n?void 0:n.hover},whileTap:{scale:null===(i=j)||void 0===i?void 0:i.tap},children:d})}}));l.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},t.a=l},635:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(19),r=n(8),c=n.n(r),o=n(273),s=n(283),l=n(301),d=n(75),u=n(0),p=n.n(u),b=n(171),j=n(20),h=n(317),f=n(318),O=n(126),m=n(14),g=n(31),x=n(113),v=n.n(x),y=n(278),w=n(655),k=n(644),q=n(653),P=n(656),_=n(27),C=n(646),I=n(316),S=n(17),R=n(82),T=n(636),B=n(1),E=Object(T.a)({root:{position:"relative",width:"100%",margin:"2em 0",padding:"1em",border:"solid 1px",borderColor:"#bdbdbd",borderRadius:"4px"},legend:{zIndex:1,position:"absolute",width:"fit-content",height:"24px",background:"white",padding:"0.25em 0.5em",left:"10px",transform:"translate(0, -125%)"}}),A=function(e){var t=e.children,n=e.legend,a=E();return Object(B.jsxs)(o.a,{className:a.root,children:[n&&Object(B.jsx)(R.a,{variant:"h4",component:"h4",className:a.legend,children:n}),t]})},F=n(9),N=n(129),Q=n(130),G=n(24),H=n(140),W=n(62),L=Object(G.b)("applicantReferences/getQuestionsThunk",function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.getQuestionsThunk(t.language_id,t.rank_id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(G.b)("applicant/getInterviewQuestionThunk",function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.getInterviewQuestionThunk({data:t.applyPosition});case 2:if(a=e.sent,!(a&&a.success.some((function(e){return e.questions.base.length>0||e.questions.focus.length>0||e.questions.advanced.length>0})))){e.next=6;break}return e.abrupt("return",a&&Object(F.a)(Object(H.e)({applicant:t,questions:a.success})));case 6:return e.abrupt("return",Object(W.a)("No questions found"));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),D=Object(G.b)("applicant/getInterviewDataThunk",function(){var e=Object(i.a)(c.a.mark((function e(t){var n,i,r,o,s,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:"",age:"",email:"",phone:"",address:"",time:"",applyPosition:[],questions:[],status:1,note:""},e.next=3,H.a.getInterviewDataThunk(t);case 3:return i=e.sent,r=Object(a.a)({},i.success),o=r.candidate_question,s=o.map((function(e){return Object(a.a)(Object(a.a)({},e.question),{},{status:e.status,candidate_id:e.id})}))||[],console.log(o),l={language:"",questions:{base:s,focus:[],advanced:[]}},Object.keys(n).forEach((function(e){r&&r[e]&&(n[e]=r[e])})),d=o.map((function(e){return{question_id:e.id,status:e.status}})),n.time=n.time.split(".")[0],e.abrupt("return",i&&Object(F.a)(Object(H.f)({applicant:Object(a.a)({},n),interviewQuestions:[Object(a.a)({},l)],questions:d})));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),M=[{label:"Information",render:[{key:"name",label:"Full Name",type:"text",required:!0},{key:"age",label:"Age",type:"number",required:!0},{key:"phone",label:"Phone Number",type:"tel",required:!0}]},{label:"Contact",render:[{key:"email",label:"Email",type:"email",required:!0}]},{label:"Address",render:[{key:"address",label:"Address",type:"text"}]},{label:"Interview Time",render:[{key:"time",label:"Interview Time",type:"datetime-local",required:!0}]},{label:"Note",render:[{key:"note",label:"Note",type:"text"}]}],V=n(647),J=n(654),K=function(e){var t=e.errors,n=(e.handleBlur,e.handleChange),a=e.touched,i=e.values,r=e.label,c=e.required,o=e.type,s=e.name,l=e.readOnly;return Object(B.jsxs)(w.a,{fullWidth:!0,error:Boolean(a&&t&&!l),children:[Object(B.jsx)(V.a,{htmlFor:"outlined-adornment-".concat(r.split(" ").join("-")),required:c,children:r}),Object(B.jsx)(J.a,{id:"outlined-adornment-".concat(r.split(" ").join("-")),type:o,value:i,name:s,onChange:n,label:r,readOnly:l,placeholder:r}),a&&t&&!l&&Object(B.jsx)(P.a,{error:!0,id:"standard-weight-helper-text-last-name",children:t})]})},U=p.a.memo(K),X=function(e){var t=e.interviewing,n=e.errors,r=e.handleBlur,d=e.handleChange,p=(e.handleSubmit,e.setFieldValue),j=e.touched,h=e.values,f=Object(b.a)(),O=Object(g.a)(),x=Object(F.d)(),R=Object(y.a)(O.breakpoints.down("md")),T=Object(F.e)((function(e){return e.language})).language,E=Object(F.e)((function(e){return e.rank})).ranks,G=u.useState(!1),H=Object(m.a)(G,2),L=H[0],D=H[1];u.useEffect((function(){v.a.all([S.a.get("/v1/languages/all"),S.a.get("/v1/ranks/all")]).then((function(e){x(Object(Q.e)({data:e[0].data.success})),x(Object(N.g)({data:e[1].data.success}))}))}),[x]);var V=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.applyPosition.every((function(e){return e.language_id&&e.rank_id&&e.rank_advanced_id}))){e.next=8;break}return D(!0),e.next=5,x(z(h));case 5:D(!1),e.next=9;break;case 8:Object(W.a)("Please select all field in apply position");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(B.jsx)(o.a,{children:Object(B.jsxs)(B.Fragment,{children:[M.map((function(e){var a=e.render;return Object(B.jsx)(s.a,{direction:R?"column":"row",spacing:2,sx:{paddingBottom:2},children:a.map((function(a){var i=a.key,c=a.label,o=a.type,s=a.required;return Object(B.jsx)(U,{touched:j[i],errors:n[i],label:c,type:o,values:h[i],name:i,handleBlur:r,handleChange:d,required:s,readOnly:t},"".concat(e.label,"-").concat(c))}))},e.label)})),!t&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(A,{legend:f.formatMessage({id:"apply-positions"}),children:Object(B.jsxs)(o.a,{children:[h.applyPosition.map((function(e,t){return Object(B.jsxs)(s.a,{direction:"row",alignItems:"center",spacing:2,sx:{padding:"1em 0"},children:[Object(B.jsxs)(s.a,{direction:R?"column":"row",spacing:2,sx:{flexGrow:1},children:[Object(B.jsxs)(w.a,{fullWidth:!0,error:Boolean(j.applyPosition&&n.applyPosition),children:[Object(B.jsx)(k.a,{options:T,onChange:function(e,n){p("applyPosition[".concat(t,"].language_id"),n&&n.id||"")},value:T.find((function(t){return t.id===e.language_id})),getOptionLabel:function(e){return e.name||""},renderInput:function(e){return Object(B.jsx)(q.a,Object(a.a)(Object(a.a)({},e),{},{variant:"standard",label:"Apply Position",placeholder:"Position"}))},sx:{flexGrow:1}}),j.applyPosition&&n.applyPosition&&Object(B.jsx)(P.a,{error:!0,id:"standard-weight-helper-text-last-name",children:n.applyPosition[t]&&n.applyPosition[t].language_id})]}),Object(B.jsxs)(w.a,{fullWidth:!0,error:Boolean(j.applyPosition&&n.applyPosition),children:[Object(B.jsx)(k.a,{options:E,onChange:function(e,n){p("applyPosition[".concat(t,"].rank_id"),n&&n.id||"")},value:E.find((function(t){return t.id===e.rank_id})),getOptionLabel:function(e){return e.name||""},renderInput:function(e){return Object(B.jsx)(q.a,Object(a.a)(Object(a.a)({},e),{},{variant:"standard",label:"Rank",placeholder:"Rank"}))},sx:{flexGrow:1}}),j.applyPosition&&n.applyPosition&&Object(B.jsx)(P.a,{error:!0,id:"standard-weight-helper-text-last-name",children:n.applyPosition[t]&&n.applyPosition[t].rank_id})]}),Object(B.jsxs)(w.a,{fullWidth:!0,error:Boolean(j.applyPosition&&n.applyPosition),children:[Object(B.jsx)(k.a,{options:E,onChange:function(e,n){p("applyPosition[".concat(t,"].rank_advanced_id"),n&&n.id||"")},value:E.find((function(t){return t.id===e.rank_advanced_id})),getOptionLabel:function(e){return e.name||""},renderInput:function(e){return Object(B.jsx)(q.a,Object(a.a)(Object(a.a)({},e),{},{variant:"standard",label:"Rank Advanced",placeholder:"Rank Advanced"}))},sx:{flexGrow:1}}),j.applyPosition&&n.applyPosition&&Object(B.jsx)(P.a,{error:!0,id:"standard-weight-helper-text-last-name",children:n.applyPosition[t]&&n.applyPosition[t].rank_advanced_id})]})]}),Object(B.jsx)(l.a,{variant:"outlined",color:"error",onClick:function(){p("applyPosition",h.applyPosition.filter((function(e,n){return n!==t})))},sx:{borderRadius:9999,width:"28px",height:"28px",padding:"3px",minWidth:"auto"},children:Object(B.jsx)(_.o,{})})]},Object(C.a)())})),Object(B.jsx)(s.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:Object(B.jsx)(l.a,{variant:"outlined",onClick:function(){p("applyPosition",h.applyPosition.concat({rank_advanced_id:"",language_id:"",rank_id:""}))},sx:{marginTop:2},children:"+ Add more position"})})]})}),Object(B.jsx)(o.a,{sx:{mt:2,width:{md:"fit-content",sm:"100%"}},children:Object(B.jsx)(I.a,{children:Object(B.jsx)(l.a,{disableElevation:!0,disabled:L,onClick:V,fullWidth:!0,size:"large",variant:"contained",color:"primary",sx:{marginTop:4},children:"Get Interview Question"})})})]})]})})},Y=n(302),Z=n(630),$=n(447),ee=n(640),te=Object(T.a)({itemHovered:{cursor:"pointer",border:"solid 1px #e0e0e0",borderColor:function(e){if(!e.interviewing)return"#e0e0e0";switch(e.status){case 0:return"rgb(255, 0, 0)";case 1:return"rgb(0, 255, 0)";default:return"#e0e0e0"}},transition:"0.3s","&:hover":{backgroundColor:"#c6f9ff"},"&:hover button":{transition:"0.7s",transform:"translate(-5px, 0)"}}}),ne=function(e){var t=e.value,n=e.interviewing,a=void 0!==n&&n,i=(e.index,te({interviewing:a,status:t.status})),r=Object(F.d)();return Object(B.jsx)(Y.a,{className:i.itemHovered,variant:"outlined",sx:{padding:"1em"},children:Object(B.jsxs)(s.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(B.jsxs)(R.a,{variant:"body1",component:"span",sx:{flexGrow:1},children:["C\xe2u h\u1ecfi : ",t.question_content,"?"]}),a&&Object(B.jsx)(s.a,{direction:"row",alignItems:"center",spacing:2,children:Object(B.jsx)(w.a,{children:Object(B.jsx)(Z.a,{"aria-labelledby":"demo-radio-buttons-group-label",value:"number"===typeof t.status?t.status+1:3,onChange:function(e){r(Object(H.d)({id:t.candidate_id||0,status:Number(e.target.value)-1}))},name:"radio-buttons-group",children:Object(B.jsxs)(s.a,{direction:"row",children:[Object(B.jsx)($.a,{value:3,control:Object(B.jsx)(ee.a,{}),label:"Skip",labelPlacement:"top"}),Object(B.jsx)($.a,{value:1,control:Object(B.jsx)(ee.a,{}),label:"Fail",labelPlacement:"top"}),Object(B.jsx)($.a,{value:2,control:Object(B.jsx)(ee.a,{}),label:"Pass",labelPlacement:"top"})]})})})})]})})},ae=p.a.memo(ne),ie=function(e){var t=e.questionStack,n=e.interviewing;e.onClickAddButton,e.onClickDeleteButton;return Object(B.jsxs)(o.a,{children:[Object(B.jsx)(s.a,{direction:"row",marginBottom:2,children:Object(B.jsx)(R.a,{variant:"h3",component:"h3",sx:{flexGrow:1},children:t.language})}),Object(B.jsx)(s.a,{direction:"column",spacing:2,children:Object.keys(t.questions).map((function(e){return t.questions[e].map((function(e){return Object(B.jsx)(ae,{value:e,interviewing:n,index:0},"".concat(t.language,"-").concat(e.id))}))}))})]})},re=p.a.memo(ie),ce=function(e){var t=e.questionList,n=e.interviewing,a=Object(u.useState)({rank_id:0,language_id:0}),i=Object(m.a)(a,1)[0],r=Object(F.d)();return Object(u.useEffect)((function(){var e,t;i.language_id&&i.rank_id&&(e=i.language_id,t=i.rank_id,r(L({language_id:e,rank_id:t})))}),[i]),Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(s.a,{direction:"column",spacing:2,sx:{border:"solid 1px #e9e9e9",borderRadius:5,padding:2},children:t.map((function(e,t){return Object(B.jsx)(re,{questionStack:e,interviewing:n},e.language)}))})})},oe=n(47),se=n(73);t.default=function(){var e=Object(d.b)(),t=Object(F.e)((function(e){return e.applicant})),n=Object(j.f)().id,r=Object(b.a)(),p=Object(j.e)();return Object(u.useEffect)((function(){n?(e(D(n)),e(Object(oe.a)([""]))):(e(Object(H.b)()),e(Object(oe.a)(["applicant"])))}),[n,e]),Object(B.jsx)(o.a,{children:Object(B.jsx)(h.a,{enableReinitialize:!0,initialValues:t.applicantInfo,validationSchema:f.c().shape({name:f.e().required("First name is required"),age:f.b().required("Age is required"),email:f.e().email("Email is invalid").required("Email is required"),phone:f.e().required("Phone is required"),applyPosition:f.a().of(f.c().shape({language_id:f.e().required("Language is required"),rank_id:f.e().required("Rank is required"),rank_advanced_id:f.e().required("Rank advanced is required")})),time:f.e().required("Time is required")}),onSubmit:function(){var e=Object(i.a)(c.a.mark((function e(t,i){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=i.setSubmitting)(!0),!n){e.next=8;break}return o=Object(a.a)(Object(a.a)({},t),{},{status:1,candidateQuestions:t.questions}),e.next=6,Object(se.c)("".concat("https://api.bims.beetsoft.com.vn/api","/v1/client/candidates/").concat(n),o,"Complete").then((function(){return p("/history")}));case 6:e.next=10;break;case 8:return e.next=10,Object(se.b)("".concat("https://api.bims.beetsoft.com.vn/api","/v1/client/candidates"),t,"Add applicant success").then((function(e){e&&e.success.id&&p("/applicant/".concat(e.success.id))}));case 10:return e.next=12,r(!1);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){return Object(B.jsxs)("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[Object(B.jsx)(O.a,{title:r.formatMessage({id:"applicant-reference-form"}),children:Object(B.jsx)(X,Object(a.a)({interviewing:!!n},e))}),t.interviewQuestions.length>0&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(O.a,{title:r.formatMessage({id:"interview-questions"}),sx:{margin:"1em 0"},children:Object(B.jsx)(s.a,{direction:"column",spacing:2,children:Object(B.jsx)(ce,{questionList:t.interviewQuestions,interviewing:!!n})})}),Object(B.jsx)(O.a,{sx:{margin:"1em 0"},children:Object(B.jsx)(I.a,{children:Object(B.jsx)(l.a,{disableElevation:!0,disabled:e.isSubmitting,type:"submit",fullWidth:!0,size:"large",variant:"contained",color:"primary",children:n?"Send Interview Result":"Submit"})})})]})]})}})})}}}]);
//# sourceMappingURL=21.be005975.chunk.js.map