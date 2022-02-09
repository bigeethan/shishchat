import React, {Component} from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Sidebar from "./pages/Sidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthService from "./pages/AuthService";
import User from "./pages/User";
import Loading from "./pages/Loading";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Search from "./pages/Search";

class App extends Component {
    render() {
        return (
                  <Router>
                    <Switch>
                      <Route path="/" exact component={Loading}/>
                      <Route path="/login" component={Login} />
                      <Route path="/signup" component={Register} />
                      <Route path="/home" component={Home} />
                      <Route path="/chat" component={Chat} />
                      <Route path="/about" component={About} />
                      <Route path="/create-post" component={Post} />
                      <Route path="/profile" component={Profile} />
                      <Route path="/search-user" component={Search} />
                      <Route path="/edit-profile" component={EditProfile} />
                    </Switch>
                  </Router>
        )
    }
}

export default App;