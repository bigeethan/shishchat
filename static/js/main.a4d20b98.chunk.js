(this["webpackJsonpsocket-ui"]=this["webpackJsonpsocket-ui"]||[]).push([[0],{146:function(e,t,a){e.exports=a(370)},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},281:function(e,t,a){},287:function(e,t,a){},288:function(e,t,a){},289:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),l=a.n(r),c=(a(151),a(21)),o=a(22),i=a(28),m=a(27),u=a(29),h=(a(152),a(32)),d=a(42),g=(a(153),a(134)),E=(a(154),a(85)),p=a.n(E),f="https://shishchat.herokuapp.com/",v=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"login",value:function(e,t){return p.a.post(f+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,a){return p.a.post(f+"signup",{username:e,email:t,password:a})}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}());function b(){v.logout()}var N=function(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),a=t[0],r=t[1],l=function(){return r(!a)};return s.a.createElement("nav",{className:a?"sidebar active":"sidebar"},s.a.createElement("button",{className:"hamburger",type:"button",onClick:l},s.a.createElement("div",null)),s.a.createElement("ul",{onClick:l},s.a.createElement("li",null,s.a.createElement(h.b,{to:"/home"},"Home")),s.a.createElement("li",null,s.a.createElement(h.b,{to:"/chat"},"Chat")),s.a.createElement("li",null,s.a.createElement(h.b,{to:"/about"},"About")),s.a.createElement("li",null,s.a.createElement("a",{href:"/",className:"nav-link",onClick:b},"Log Out"))))};var S=function(){return s.a.createElement("div",{className:"page"},s.a.createElement(N,null),s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service"))},y=a(132),w=a.n(y),C=a(411),O=a(410),k=(a(281),a(406)),j=a(407),U=a(408),M=a(409),P=a(413),T=(n.Component,a(24)),x=a(69),L=a.n(x),B=a(43),J=a.n(B),R=a(70),F=a.n(R),I=(a(287),Object(n.createContext)(),function(e){if(!e)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")}),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleLogin=a.handleLogin.bind(Object(T.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(T.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(T.a)(a)),a.state={username:"",password:"",loading:!1,message:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onChangeUsername",value:function(e){return this.setState({username:e.target.value}),this.state.username}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?v.login(this.state.username,this.state.password).then((function(){console.log("Login Works"),localStorage.setItem("user",JSON.stringify(t.state.username)),t.props.history.push("/home")}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:a})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"top"},s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service")),s.a.createElement("h2",null,"Login"),s.a.createElement("div",{className:"card card-container"},s.a.createElement(L.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t}},s.a.createElement("div",{className:"form-group-username"},s.a.createElement("label",{htmlFor:"username"},"Username"),s.a.createElement(J.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[I]})),s.a.createElement("div",{className:"form-group-password"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement(J.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[I]})),s.a.createElement("div",{className:"form-group-buttons"},s.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.state.loading},this.state.loading&&s.a.createElement("span",{className:"spinner-border spinner-border-sm"}),s.a.createElement("span",null,"Login")),s.a.createElement(h.b,{to:"/signup"},s.a.createElement("button",{className:"btn btn-primary btn-block"},s.a.createElement("span",null,"Sign Up")))),this.state.message&&s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.message)),s.a.createElement(F.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),t}(n.Component),A=Object(d.e)(D),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setName=function(){var e=v.getCurrentUser();e&&a.setState({name:e})},a.sendMessage=function(){a.clientRef.sendMessage("/app/user-all",JSON.stringify({name:a.state.name,message:a.state.typedMessage}))},a.displayMessages=function(){return s.a.createElement("div",null,a.state.messages.map((function(e){return s.a.createElement("div",null,a.state.name==e.name?s.a.createElement("div",null,s.a.createElement("p",{className:"title1"},e.name,": ",e.message),s.a.createElement("br",null)):s.a.createElement("div",null,s.a.createElement("p",{className:"title2"},e.name,": ",e.message),s.a.createElement("br",null)))})))},a.state={messages:[],typedMessage:"",name:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(N,null),s.a.createElement("div",{className:"align-center"},s.a.createElement("h1",null,"Shishchat"),s.a.createElement("br",null),s.a.createElement("br",null)),s.a.createElement("div",{className:"align-center"},"User: ",s.a.createElement("p",{className:"title1"}," ",this.state.name),s.a.createElement("br",null),s.a.createElement("br",null)),s.a.createElement("div",{className:"messages"},this.displayMessages()),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"align-center"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("table",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(O.a,{id:"outlined-basic",label:"Enter Message to Send",variant:"outlined",onChange:function(t){e.setState({typedMessage:t.target.value})}})),s.a.createElement("td",null,s.a.createElement(C.a,{variant:"contained",color:"primary",onClick:this.sendMessage},"Send"))))),s.a.createElement(w.a,{url:"https://shishchat.herokuapp.com/websocket-chat",topics:["/topic/user"],onConnect:function(){console.log("connected"),e.setName()},onDisconnect:function(){console.log("Disconnected")},onMessage:function(t){var a=e.state.messages;a.push(t),e.setState({messages:a}),console.log(e.state)},ref:function(t){e.clientRef=t}}))}}]),t}(n.Component);a(288);var q=function(){return s.a.createElement("div",null,s.a.createElement(N,null),s.a.createElement("div",{className:"page"},s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service")),s.a.createElement("div",{className:"meet-shishir"},s.a.createElement("p",null,s.a.createElement("b",null,"Meet Shishir")),s.a.createElement("img",{src:"Shishir.jpeg"})))},_=a(133),H=(a(289),function(e){if(!e)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")}),$=function(e){if(!Object(_.isEmail)(e))return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This is not a valid email.")},z=function(e){if(e.length<3||e.length>20)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The username must be between 3 and 20 characters.")},G=function(e){if(e.length<6||e.length>40)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The password must be between 6 and 40 characters.")},K=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleRegister=a.handleRegister.bind(Object(T.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(T.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(T.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(T.a)(a)),a.state={username:"",email:"",password:"",successful:!1,message:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&(v.register(this.state.username,this.state.email,this.state.password).then((function(e){t.setState({message:e.data.message,successful:!0})}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({successful:!1,message:a})})),this.props.history.push("/"))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"top"},s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service")),s.a.createElement("h2",null,"Sign Up"),s.a.createElement("div",{className:"card card-container"},s.a.createElement(L.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t}},!this.state.successful&&s.a.createElement("div",null,s.a.createElement("div",{className:"form-group-username"},s.a.createElement("label",{htmlFor:"username"},"Username"),s.a.createElement(J.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[H,z]})),s.a.createElement("div",{className:"form-group-email"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement(J.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[H,$]})),s.a.createElement("div",{className:"form-group-password"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement(J.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[H,G]})),s.a.createElement("div",{className:"form-group-button"},s.a.createElement("button",{className:"btn btn-primary btn-block"},"Sign Up"))),this.state.message&&s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert"},this.state.message)),s.a.createElement(F.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),t}(n.Component),Q=Object(d.e)(K),V=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement(d.c,null,s.a.createElement(d.a,{path:"/",exact:!0,component:A}),s.a.createElement(d.a,{path:"/signup",component:Q}),s.a.createElement(d.a,{path:"/home",component:S}),s.a.createElement(d.a,{path:"/chat",component:W}),s.a.createElement(d.a,{path:"/about",component:q})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[146,1,2]]]);
//# sourceMappingURL=main.a4d20b98.chunk.js.map