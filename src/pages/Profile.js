import React, {Component} from "react";
import Sidebar from "./Sidebar";
import AuthService from "./AuthService";
import './Profile.css';
import { Link } from "react-router-dom";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: AuthService.getCurrentUser(),
            userinfo: {},
            posts: []
        }
    }

    componentDidUpdate() {

    }

    componentDidMount() {
        fetch('https://shishchat.herokuapp.com/getprofile/' + this.state.user, {
                    headers: {
                            "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then((response) => response.json())
                .then((json) => {
                    this.setState({
                        userinfo: json
                    });
                });

        fetch('https://shishchat.herokuapp.com/createprofile/' + this.state.user, {
                                method: "post",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    username: this.state.user,
                                    bio: "",
                                    pictureUrl: ""
                                })
                            })
                            .then((response) => response.json())
                            .then((responseJson) => {
                                 console.log(responseJson);
                            })
                            .catch((error) => {
                                console.error(error);
                            })
                            .then(() => {
                                fetch('https://shishchat.herokuapp.com/getprofile/' + this.state.user, {
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                })
                                .then((response) => response.json())
                                .then((json) => {
                                    this.setState({
                                        userinfo: json
                                    });
                                });
                            });

        fetch('https://shishchat.herokuapp.com/getposts/' + this.state.user, {
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
                <div className="body">
                            <h1>{this.state.userinfo.username}</h1>
                            <Link to="/edit-profile">
                                <button className="btn btn-primary btn-block"><span>Edit Profile</span></button>
                            </Link>
                            <h2>Bio</h2>
                            <div className="bio">
                                <p>{this.state.userinfo.bio}</p>
                            </div>
                    <h2>User Posts</h2>
                    <div className="post-display">
                        {this.state.posts.map((posts) => (
                            <div className='posts' key={posts.id}>
                                <p id="user">{posts.user}</p>
                                <p id="text">{posts.text}</p>
                            </div>
                        ))}
                    </div>
                    <p id="secret">Secret Message!</p>
                </div>
            </div>
        );
    }
}

export default Profile;