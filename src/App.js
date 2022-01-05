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

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          currentUser: undefined
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
          this.setState({
            currentUser: user
          });
        }
    }

    render() {
        return (
                  <Router>
                    <Switch>
                      <Route path="/" exact component={Login} />
                      <Route path="/signup" component={Register} />
                      <Route path="/home" component={Home} />
                      <Route path="/chat" component={Chat} />
                      <Route path="/about" component={About} />
                    </Switch>
                  </Router>
        )
    }
}

export default App;