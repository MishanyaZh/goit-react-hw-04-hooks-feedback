(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{15:function(n,e,t){},20:function(n,e,t){"use strict";t.r(e);var a,c,r=t(1),o=t.n(r),i=t(7),s=t.n(i),d=(t(15),t(4)),b=t(6),x=t(9),l=t(2),j=t(3),p=j.a.ul(a||(a=Object(l.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  text-align: center;\n\n  list-style: none;\n"]))),u=j.a.button(c||(c=Object(l.a)(["\n  width: 80px;\n  height: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  border-radius: 5px;\n  transition-duration: 0.1s;\n  box-shadow: inset 1px 1px 11px 1px #797a7c;\n  cursor: pointer;\n\n  &:active {\n    transform: scale(1.1);\n    background: #aafcea;\n    color: #062afa;\n    box-shadow: 1px 1px 11px 1px #062afa;\n    transition-duration: 0.1s;\n  }\n"]))),h=t(0);var O,f,g,v=function(n){var e=n.leaveFeedback,t=n.options;return Object(h.jsx)("div",{children:Object(h.jsx)(p,{children:t.map((function(n){return Object(h.jsx)("li",{children:Object(h.jsx)(u,{type:"button",onClick:function(){return e(n)},children:n})},n)}))})})},k=j.a.p(O||(O=Object(l.a)(["\n  text-align: center;\n  color: brown;\n"]))),m=function(n){var e=n.message;return Object(h.jsx)(k,{children:e})},w=j.a.div(f||(f=Object(l.a)(["\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-radius: 5px;\n  background: ",";\n  box-shadow: 1px 1px 11px 1px #797a7c;\n  &:hover {\n    box-shadow: 1px 1px 11px 1px #062afa;\n  }\n"])),(function(n){return n.eventType>="50"?"rgb(157 255 157 / 53%)":"rgb(240 140 122 / 54%)"})),y=j.a.ul(g||(g=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  transition-duration: 1s;\n  &:hover {\n    transform: scale(1.3);\n    transition: 0.5s;\n  }\n"])));var F,P,T,S=function(n){var e=n.good,t=n.neutral,a=n.bad,c=n.countTotalFeedback,r=n.countPositiveFeedbackPercentage;return Object(h.jsxs)(w,{eventType:r,children:[!c&&Object(h.jsx)(m,{message:"No feedback given"}),c>0&&Object(h.jsxs)(y,{children:[Object(h.jsx)("li",{children:Object(h.jsxs)("span",{children:["Good: ",e]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("span",{children:["Neutral: ",t]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("span",{children:["Bad: ",a]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("span",{children:["Total: ",c]})}),Object(h.jsxs)("li",{children:["Positive feedback: ",r,"%"]})]})]})},B=j.a.div(F||(F=Object(l.a)(["\n  border: 2px solid black;\n  border-radius: 10px;\n  box-shadow: inset 4px 3px 9px 3px #797a7c;\n  background: burlywood;\n"]))),J=j.a.h2(P||(P=Object(l.a)(["\n  text-align: center;\n"]))),M=function(n){var e=n.title,t=n.children;return Object(h.jsxs)(B,{children:[Object(h.jsx)(J,{children:e}),t]})},N=j.a.div(T||(T=Object(l.a)(["\n  max-width: 360px;\n  min-width: 310px;\n\n  margin: 0 auto;\n  margin-top: 5px;\n  padding: 20px;\n\n  border: 1px solid crimson;\n  border-radius: 10px;\n\n  background: rgb(224, 210, 210);\n  box-shadow: 1px 1px 11px 1px #062afa;\n"]))),z=function(){var n=Object(r.useState)({good:0,neutral:0,bad:0}),e=Object(x.a)(n,2),t=e[0],a=e[1],c=function(){return Object.values(t).reduce((function(n,e){return n+e}),0)},o=Object.keys(t),i=t.good,s=t.neutral,l=t.bad,j=c(),p=function(){var n=t.good;return Math.round(n/c()*100)}();return Object(h.jsxs)(N,{children:[Object(h.jsx)(M,{title:"Please leave feedback",children:Object(h.jsx)(v,{leaveFeedback:function(n){a((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},n,e[n]+1))}))},options:o})}),Object(h.jsx)(M,{title:"Statistics",children:Object(h.jsx)(S,{good:i,neutral:s,bad:l,countTotalFeedback:j,countPositiveFeedbackPercentage:p})})]})};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c9fc22dd.chunk.js.map