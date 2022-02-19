import React, {Component} from 'react';
import axios from "axios";
import "./Loading.css";
import { withRouter } from "react-router-dom";

class Loading extends Component {
    state = {
        loading: true,
        message: ""
    }

    loading = event => {
        setTimeout(() => {
             axios.get('https://shishchat.herokuapp.com/loading')
                         .then(response => this.setState({loading: false, message: response}));
             if (this.state.loading == false) {
                this.props.history.push("/login");
             }
        }, 2000);

    }

    render() {
        return (
            <div>
                <h3>Please enjoy this complimentary photo of Shishir while the web application loads</h3>
                <div className="container">
                    <div className="loading-spinner"></div>
                </div>
                <img src="Shishir.jpeg"></img>
                {this.loading()}
            </div>
        );
    }
}

export default withRouter(Loading);