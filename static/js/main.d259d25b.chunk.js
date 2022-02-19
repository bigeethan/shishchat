(this["webpackJsonpsocket-ui"]=this["webpackJsonpsocket-ui"]||[]).push([[0],{307:function(e,t,a){e.exports=a(703)},312:function(e,t,a){},313:function(e,t,a){},314:function(e,t,a){},315:function(e,t,a){},443:function(e,t,a){},449:function(e,t,a){},615:function(e,t,a){},616:function(e,t,a){},697:function(e,t,a){},698:function(e,t,a){},699:function(e,t,a){},700:function(e,t,a){},701:function(e,t,a){},703:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(17),l=a.n(r),c=(a(312),a(15)),o=a(16),i=a(19),h=a(18),m=a(20),u=(a(313),a(31)),p=a(73),d=(a(314),a(295)),g=(a(315),a(97)),f=a.n(g),E="https://shishchat.herokuapp.com/",b=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"login",value:function(e,t){return f.a.post(E+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,a){return f.a.post(E+"signup",{username:e,email:t,password:a})}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}());function v(){b.logout()}var y=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],l=function(){return r(!a)};return s.a.createElement("nav",{className:a?"sidebar active":"sidebar"},s.a.createElement("button",{className:"hamburger",type:"button",onClick:l},s.a.createElement("div",null)),s.a.createElement("ul",{onClick:l},s.a.createElement("li",null,s.a.createElement(u.b,{to:"/home"},"Home")),s.a.createElement("li",null,s.a.createElement(u.b,{to:"/chat"},"Chat")),s.a.createElement("li",null,s.a.createElement(u.b,{to:"/create-post"},"Create ShishPost")),s.a.createElement("li",null,s.a.createElement(u.b,{to:"/about"},"About")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("li",null,s.a.createElement(u.b,{to:"/search-user"},"User Search")),s.a.createElement("li",null,s.a.createElement(u.b,{to:"/profile"},"User Profile")),s.a.createElement("li",null,s.a.createElement(u.b,{to:"/login"},s.a.createElement("a",{className:"nav-link",onClick:v},"Log Out")))))},j=(a(345),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).makeGetRequest=function(){fetch("https://shishchat.herokuapp.com/getposts",{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){a.setState({posts:e})}))},a.state={user:b.getCurrentUser(),posts:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.makeGetRequest(),this.timer=setInterval((function(){e.makeGetRequest(),console.log("get request made")}),3e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"top-page"},s.a.createElement(y,null),s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service")),s.a.createElement("div",{className:"middle"},s.a.createElement("h2",null,"Welcome ",this.state.user),s.a.createElement("h2",null,"ShishPosts:"),s.a.createElement("div",{className:"post-display"},this.state.posts.map((function(e){return s.a.createElement("div",{className:"posts",key:e.id},s.a.createElement("p",{id:"user"},e.user),s.a.createElement("img",{src:"graduated-shishir.jpg",id:"shishir-approved-photo"}),s.a.createElement("p",{id:"shishir-approved-text"},"Shishir Approved"),s.a.createElement("p",{id:"text"},e.text))})))),s.a.createElement("p",{id:"secret"},"Secret Message!"))}}]),t}(n.Component)),S=a(281),N=a.n(S),k=a(745),C=a(744),O=a(6),w=(a(443),a(740)),U=a(741),x=a(742),T=a(743),P=a(747),M=(n.Component,a(22)),B=a(50),F=a.n(B),I=a(39),R=a.n(I),A=a(51),D=a.n(A),J=(a(449),Object(n.createContext)(),function(e){if(!e)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")}),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleLogin=a.handleLogin.bind(Object(M.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(M.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(M.a)(a)),a.state={username:"",password:"",loading:!1,message:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onChangeUsername",value:function(e){return this.setState({username:e.target.value}),this.state.username}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?b.login(this.state.username,this.state.password).then((function(){console.log("Login Works"),localStorage.setItem("user",JSON.stringify(t.state.username)),t.props.history.push("/profile")}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:a})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"top"},s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service")),s.a.createElement("h2",null,"Login"),s.a.createElement("div",{className:"card card-container"},s.a.createElement(F.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t}},s.a.createElement("div",{className:"form-group-username"},s.a.createElement("label",{htmlFor:"username"},"Username"),s.a.createElement(R.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[J]})),s.a.createElement("div",{className:"form-group-password"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement(R.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[J]})),s.a.createElement("div",{className:"form-group-buttons"},s.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.state.loading},this.state.loading&&s.a.createElement("span",{className:"spinner-border spinner-border-sm"}),s.a.createElement("span",null,"Login")),s.a.createElement(u.b,{to:"/signup"},s.a.createElement("button",{className:"btn btn-primary btn-block"},s.a.createElement("span",null,"Sign Up")))),this.state.message&&s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.message)),s.a.createElement(D.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),t}(n.Component),q=Object(p.e)(L),W=(a(702),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).setName=function(){var e=b.getCurrentUser();e&&a.setState({name:e})},a.sendMessage=function(){a.clientRef.sendMessage("/app/user-all",JSON.stringify({name:a.state.name,message:a.state.typedMessage})),fetch("https://shishchat.herokuapp.com/addmessage",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.state.name,message:a.state.typedMessage})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error(e)})).then((function(){fetch("https://shishchat.herokuapp.com/getmessages",{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){a.setState({messages:e})}))})),a.setState({typedMessage:""})},a.displayMessages=function(){return s.a.createElement("div",null,a.state.messages.map((function(e){return s.a.createElement("div",{key:e.id},a.state.name==e.username?s.a.createElement("div",null,s.a.createElement("p",{className:"title1"},s.a.createElement("b",null,e.username,":")),s.a.createElement("br",null),s.a.createElement("p",{id:"actualText"},e.message)):s.a.createElement("div",null,s.a.createElement("p",{className:"title2"},s.a.createElement("b",null,e.username,":")),s.a.createElement("br",null),s.a.createElement("p",{id:"actualText"},e.message)))})))},a.state={messages:[],typedMessage:"",name:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://shishchat.herokuapp.com/getmessages",{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){e.setState({messages:t})})),console.log(this.state.messages)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(y,null),s.a.createElement("div",{className:"top"},s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service")),s.a.createElement("br",null),s.a.createElement("div",{className:"align-center"},"User: ",s.a.createElement("p",{className:"title1"}," ",this.state.name),s.a.createElement("br",null),s.a.createElement("br",null)),s.a.createElement("div",{className:"messages"},this.displayMessages()),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"align-center"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("table",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(C.a,{id:"outlined-basic",label:"Enter Message to Send",variant:"outlined",value:this.state.typedMessage,multiline:!0,color:"white",maxRows:6,onChange:function(t){e.setState({typedMessage:t.target.value})},inputProps:{style:{textAlign:"left",width:650}}})),s.a.createElement("td",null,s.a.createElement(k.a,{variant:"contained",color:"primary",onClick:this.sendMessage},"Send"))))),s.a.createElement(N.a,{url:"https://shishchat.herokuapp.com/websocket-chat",topics:["/topic/user"],onConnect:function(){console.log("connected"),e.setName()},onDisconnect:function(){console.log("Disconnected")},onMessage:function(t){var a=e.state.messages;a.push(t),e.setState({messages:a}),console.log(e.state)},ref:function(t){e.clientRef=t}}))}}]),t}(n.Component)),_=Object(O.a)({input:{color:"white"}})(W);a(615);var G=function(){return s.a.createElement("div",null,s.a.createElement(y,null),s.a.createElement("div",{className:"page"},s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service")),s.a.createElement("div",{className:"meet-shishir"},s.a.createElement("p",null,s.a.createElement("b",null,"Meet Shishir")),s.a.createElement("img",{src:"Shishir.jpeg"})))},H=a(294),$=(a(616),function(e){if(!e)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")}),z=function(e){if(!Object(H.isEmail)(e))return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This is not a valid email.")},K=function(e){if(e.length<3||e.length>20)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The username must be between 3 and 20 characters.")},Q=function(e){if(e.length<6||e.length>40)return s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The password must be between 6 and 40 characters.")},V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleRegister=a.handleRegister.bind(Object(M.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(M.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(M.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(M.a)(a)),a.state={username:"",email:"",password:"",successful:!1,message:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&(b.register(this.state.username,this.state.email,this.state.password).then((function(e){t.setState({message:e.data.message,successful:!0})}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({successful:!1,message:a})})),this.props.history.push("/login"))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"top"},s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service")),s.a.createElement("h2",null,"Sign Up"),s.a.createElement("div",{className:"card card-container"},s.a.createElement(F.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t}},!this.state.successful&&s.a.createElement("div",null,s.a.createElement("div",{className:"form-group-username"},s.a.createElement("label",{htmlFor:"username"},"Username"),s.a.createElement(R.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[$,K]})),s.a.createElement("div",{className:"form-group-email"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement(R.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[$,z]})),s.a.createElement("div",{className:"form-group-password"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement(R.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[$,Q]})),s.a.createElement("div",{className:"form-group-button"},s.a.createElement("button",{className:"btn btn-primary btn-block"},"Sign Up"))),this.state.message&&s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert"},this.state.message)),s.a.createElement(D.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),t}(n.Component),X=Object(p.e)(V),Y=(a(697),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={loading:!0,message:""},a.loading=function(e){setTimeout((function(){f.a.get("https://shishchat.herokuapp.com/loading").then((function(e){return a.setState({loading:!1,message:e})})),0==a.state.loading&&a.props.history.push("/login")}),2e3)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,"Please enjoy this complimentary photo of Shishir while the web application loads"),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"loading-spinner"})),s.a.createElement("img",{src:"Shishir.jpeg"}),this.loading())}}]),t}(n.Component)),Z=Object(p.e)(Y),ee=(a(698),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).createPost=a.createPost.bind(Object(M.a)(a)),a.onChangePostText=a.onChangePostText.bind(Object(M.a)(a)),a.onChangePostImageUrl=a.onChangePostImageUrl.bind(Object(M.a)(a)),a.state={user:b.getCurrentUser(),postText:"",postImageUrl:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onChangePostText",value:function(e){this.setState({postText:e.target.value})}},{key:"onChangePostImageUrl",value:function(e){this.setState({postImageUrl:e.target.value})}},{key:"createPost",value:function(e){e.preventDefault(),this.form.validateAll();var t=this.state.user,a=this.state.postText;this.state.postImageUrl;return fetch("https://shishchat.herokuapp.com/createpost",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t,text:a,image:""})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error(e)})),this.setState({postText:"",postImageUrl:""}),console.log("Another post confirmation!")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"top-page"},s.a.createElement(y,null),s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service")),s.a.createElement("div",{className:"middle"},s.a.createElement("h2",null,"Create ShishPost"),s.a.createElement(F.a,{onSubmit:this.createPost,ref:function(t){e.form=t}},s.a.createElement("div",null,s.a.createElement("div",{className:"form-group-text"},s.a.createElement("label",{htmlFor:"posttext"},"Post Text"),s.a.createElement(R.a,{type:"text",className:"form-control",name:"text",value:this.state.postText,onChange:this.onChangePostText})),s.a.createElement("div",{className:"form-group-button"},s.a.createElement("button",{className:"btn btn-primary btn-block"},"Create Post"))),s.a.createElement(D.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),t}(n.Component)),te=(a(699),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={user:b.getCurrentUser(),userinfo:{},posts:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=this;fetch("https://shishchat.herokuapp.com/getprofile/"+this.state.user,{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){e.setState({userinfo:t})})),fetch("https://shishchat.herokuapp.com/createprofile/"+this.state.user,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.state.user,bio:"",pictureUrl:""})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error(e)})).then((function(){fetch("https://shishchat.herokuapp.com/getprofile/"+e.state.user,{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){e.setState({userinfo:t})}))})),fetch("https://shishchat.herokuapp.com/getposts/"+this.state.user,{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){e.setState({posts:t})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"top-page"},s.a.createElement(y,null),s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service")),s.a.createElement("div",{className:"body"},s.a.createElement("h1",null,this.state.userinfo.username),s.a.createElement(u.b,{to:"/edit-profile"},s.a.createElement("button",{className:"btn btn-primary btn-block"},s.a.createElement("span",null,"Edit Profile"))),s.a.createElement("h2",null,"Bio"),s.a.createElement("div",{className:"bio"},s.a.createElement("p",null,this.state.userinfo.bio)),s.a.createElement("h2",null,"User Posts"),s.a.createElement("div",{className:"post-display"},this.state.posts.map((function(e){return s.a.createElement("div",{className:"posts",key:e.id},s.a.createElement("p",{id:"user"},e.user),s.a.createElement("img",{src:"graduated-shishir.jpg",id:"shishir-approved-photo"}),s.a.createElement("p",{id:"shishir-approved-text"},"Shishir Approved"),s.a.createElement("p",{id:"text"},e.text))}))),s.a.createElement("p",{id:"secret"},"Secret Message!")))}}]),t}(n.Component)),ae=(a(700),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleRegister=a.handleRegister.bind(Object(M.a)(a)),a.onChangeBio=a.onChangeBio.bind(Object(M.a)(a)),a.state={username:b.getCurrentUser(),bio:"",image:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onChangeBio",value:function(e){this.setState({bio:e.target.value})}},{key:"handleRegister",value:function(e){e.preventDefault(),this.form.validateAll(),0===this.checkBtn.context._errors.length&&fetch("https://shishchat.herokuapp.com/editprofile/"+this.state.username,{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,bio:this.state.bio,pictureUrl:this.state.image})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error(e)})),this.props.history.push("/profile")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"top"},s.a.createElement(y,null),s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service")),s.a.createElement("div",{className:"card card-container"},s.a.createElement(F.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t}},!this.state.successful&&s.a.createElement("div",null,s.a.createElement("div",{className:"form-group-bio"},s.a.createElement("label",{htmlFor:"bio"},"Bio"),s.a.createElement(R.a,{type:"text",className:"form-control",name:"bio",value:this.state.bio,onChange:this.onChangeBio})),s.a.createElement("div",{className:"form-group-button"},s.a.createElement("button",{className:"btn btn-primary btn-block"},"Save Changes"))),s.a.createElement(D.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),t}(n.Component)),ne=(a(701),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleSearch=a.handleSearch.bind(Object(M.a)(a)),a.onChangeSearch=a.onChangeSearch.bind(Object(M.a)(a)),a.state={userinfo:{},posts:[],search:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onChangeSearch",value:function(e){this.setState({search:e.target.value})}},{key:"handleSearch",value:function(e){var t=this;e.preventDefault(),this.form.validateAll(),0===this.checkBtn.context._errors.length&&(fetch("https://shishchat.herokuapp.com/getprofile/"+this.state.search,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t.setState({userinfo:e})})).catch((function(e){console.error(e)})),fetch("https://shishchat.herokuapp.com/getposts/"+this.state.search,{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){t.setState({posts:e})})))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"top-page"},s.a.createElement(y,null),s.a.createElement("h1",null,"Shishchat"),s.a.createElement("h3",null,"The top Shishir themed chatting service")),s.a.createElement("div",{className:"body"},s.a.createElement(F.a,{onSubmit:this.handleSearch,ref:function(t){e.form=t}},!this.state.successful&&s.a.createElement("div",null,s.a.createElement("div",{className:"form-group-search"},s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"search"},"Search User"),s.a.createElement(R.a,{type:"text",className:"form-control",name:"search",value:this.state.search,onChange:this.onChangeSearch})),s.a.createElement("div",{className:"form-group-button"},s.a.createElement("button",{className:"btn btn-primary btn-block"},"Search"))),s.a.createElement(D.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})),s.a.createElement("h1",null,this.state.userinfo.username),s.a.createElement("h2",null,"Bio"),s.a.createElement("div",{className:"bio"},s.a.createElement("p",null,this.state.userinfo.bio)),s.a.createElement("h2",null,"User Posts"),s.a.createElement("div",{className:"post-display"},this.state.posts.map((function(e){return s.a.createElement("div",{className:"posts",key:e.id},s.a.createElement("p",{id:"user"},e.user),s.a.createElement("img",{src:"graduated-shishir.jpg",id:"shishir-approved-photo"}),s.a.createElement("p",{id:"shishir-approved-text"},"Shishir Approved"),s.a.createElement("p",{id:"text"},e.text))}))),s.a.createElement("p",{id:"secret"},"Secret Message!")))}}]),t}(n.Component)),se=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(p.c,null,s.a.createElement(p.a,{path:"/",exact:!0,component:Z}),s.a.createElement(p.a,{path:"/login",component:q}),s.a.createElement(p.a,{path:"/signup",component:X}),s.a.createElement(p.a,{path:"/home",component:j}),s.a.createElement(p.a,{path:"/chat",component:_}),s.a.createElement(p.a,{path:"/about",component:G}),s.a.createElement(p.a,{path:"/create-post",component:ee}),s.a.createElement(p.a,{path:"/profile",component:te}),s.a.createElement(p.a,{path:"/search-user",component:ne}),s.a.createElement(p.a,{path:"/edit-profile",component:ae})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[307,1,2]]]);
//# sourceMappingURL=main.d259d25b.chunk.js.map