import React, {Component} from "react";
import Sidebar from "./Sidebar";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "./AuthService";
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);

        this.state = {
            userinfo: {},
            posts: [],
            search: ""
        }
    }

    onChangeSearch(e) {
        this.setState({
            search: e.target.value
        });
    }

    handleSearch(e) {
        e.preventDefault();

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            fetch('https://shishchat.herokuapp.com/getprofile/' + this.state.search, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    userinfo: json
                });
            })
            .catch((error) => {
                console.error(error);
            });

            fetch('https://shishchat.herokuapp.com/getposts/' + this.state.search, {
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
                        <Form
                            onSubmit={this.handleSearch}
                                ref={c => {
                                this.form = c;
                            }}
                        >
                            {!this.state.successful && (
                                <div>
                                    <div className="form-group-search">
                                        <br></br>
                                        <label htmlFor="search">Search User</label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="search"
                                                value={this.state.search}
                                                onChange={this.onChangeSearch}
                                            />
                                    </div>

                                    <div className="form-group-button">
                                        <button className="btn btn-primary btn-block">Search</button>
                                    </div>
                                </div>
                            )}
                            <CheckButton
                                style={{ display: "none" }}
                                ref={c => {
                                    this.checkBtn = c;
                                }}
                            />
                        </Form>

                        <h1>{this.state.userinfo.username}</h1>
                        <h2>Bio</h2>
                        <div className="bio">
                            <p>{this.state.userinfo.bio}</p>
                        </div>
                        <h2>User Posts</h2>
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
                        <p id="secret">Secret Message!</p>
                    </div>
                </div>
            );
        }
}

export default Search;