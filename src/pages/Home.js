import React, {Component} from "react";
import './Home.css';
import Sidebar from "./Sidebar";
import AuthService from "./AuthService";
import { saveAs } from "file-saver";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: AuthService.getCurrentUser(),
            posts: []
        }
    }

    componentDidMount() {
        this.makeGetRequest();
        this.timer = setInterval(() => {
            this.makeGetRequest();
            console.log("get request made");
        }, 30000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    makeGetRequest = () => {
        fetch('https://shishchat.herokuapp.com/getposts', {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then((response) => response.json())
                    .then((json) => {
                        this.setState({
                            posts: json
                        });
                    });
    }

    render() {
        return (
            <div>
                <div className="top-page">
                    <Sidebar />
                    <h1>Shishchat</h1>
                    <h3>The top Shishir themed chatting service</h3>
                </div>
                <div className="middle">
                    <h2>Welcome {this.state.user}</h2>
                    <h2>ShishPosts:</h2>
                    <div className="post-display">
                            {this.state.posts.map((posts) => (
                                <div className='posts' key={posts.id}>
                                        <p id="user">{posts.user}</p>
                                        <img src="graduated-shishir.jpg" id="shishir-approved-photo"></img>
                                        <p id="shishir-approved-text">Shishir Approved</p>
                                        <p id="text">{posts.text}</p>
                                </div>
                            ))}
                    </div>
                </div>
                <p id="secret">Secret Message!</p>
            </div>
        );
    }
}

export default Home;