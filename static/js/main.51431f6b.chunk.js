(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(8),r=n.n(c),i=n(9),s=n(2),o=n(3),u=n(6),l=n(5),d=n(4),j=(n(14),n(15),n(0)),b=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"InputArea",contentEditable:"true","data-placeholder":this.props.placeholder})}}]),n}(a.Component),h=(n(17),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"Button",onClick:this.props.onClick,children:this.props.label})}}]),n}(a.Component)),p=(n(18),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"Header",children:this.props.label})}}]),n}(a.Component)),O=(n(19),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"TodoItem",onClick:this.props.onClick,children:[this.props.label,Object(j.jsxs)("div",{className:"date-time",children:[this.props.currDate," ",this.props.currTime]})]})}}]),n}(a.Component)),f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n),t=e.call(this);var a=new Date,c=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear(),r=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();return t.state={currentDate:c,currentTime:r},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)(j.Fragment,{children:this.props.data.map((function(e){return Object(j.jsx)(O,{onClick:t.props.onClick,label:e,currDate:t.state.currentDate,currTime:t.state.currentTime})}))})}}]),n}(a.Component),m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={data:[]},t.clickHandle=t.clickHandle.bind(Object(u.a)(t)),t.handleRemove=t.handleRemove.bind(Object(u.a)(t)),t}return Object(o.a)(n,[{key:"clickHandle",value:function(t){""!==document.querySelector(".InputArea").firstChild.data&&this.setState({data:[].concat(Object(i.a)(this.state.data),[document.querySelector(".InputArea").firstChild.data])}),document.querySelector(".InputArea").firstChild.data=""}},{key:"handleRemove",value:function(t){var e=this.state.data.filter((function(e){if(e!==t.currentTarget.childNodes[0].data)return e}));this.setState({data:e})}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{label:"To-Do"}),Object(j.jsx)("div",{className:"to-do-section",children:Object(j.jsxs)("div",{className:"grid-items",children:[Object(j.jsx)(b,{placeholder:"enter text ..."}),Object(j.jsx)(h,{label:"Submit",onClick:this.clickHandle})]})}),Object(j.jsx)(f,{data:this.state.data,onClick:this.handleRemove})]})}}]),n}(a.Component);var v=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(m,{})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};r.a.render(Object(j.jsx)(v,{}),document.getElementById("root")),k()}],[[20,1,2]]]);
//# sourceMappingURL=main.51431f6b.chunk.js.map