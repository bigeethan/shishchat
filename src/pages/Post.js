import React, {Component} from "react";
import './Post.css';
import Sidebar from "./Sidebar";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "./AuthService";

class Post extends Component {
    constructor(props) {
        super(props);
        this.createPost = this.createPost.bind(this);
        this.onChangePostText = this.onChangePostText.bind(this);
        this.onChangePostImageUrl = this.onChangePostImageUrl.bind(this);

        this.state = {
            user: AuthService.getCurrentUser(),
            postText: "",
            postImageUrl: ""
        }
    }

      onChangePostText(e) {
        this.setState({
          postText: e.target.value
        });
      }

      onChangePostImageUrl(e) {
        this.setState({
          postImageUrl: e.target.value
        });
      }

    createPost(e) {
        e.preventDefault();
        this.form.validateAll();

        let username = this.state.user;
        let postText = this.state.postText;
        let postImageUrl = this.state.postImageUrl;

        fetch('https://shishchat.herokuapp.com/createpost', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: username,
                text: postText,
                image: ""
            })
        })
        .then((response) => response.json())
           .then((responseJson) => {
             console.log(responseJson);
           })
           .catch((error) => {
             console.error(error);
           });

        this.setState({
            postText: "",
            postImageUrl: ""
        });
        return console.log("Another post confirmation!");
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
                    <h2>Create ShishPost</h2>
                    <Form
                                onSubmit={this.createPost}
                                ref={c => {
                                    this.form = c;
                                }}
                              >
                                  <div>
                                    <div className="form-group-text">
                                      <label htmlFor="posttext">Post Text</label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="text"
                                        value={this.state.postText}
                                        onChange={this.onChangePostText}
                                      />
                                    </div>

                                    <div className="form-group-button">
                                            <button className="btn btn-primary btn-block">Create Post</button>
                                    </div>
                                  </div>

                                <CheckButton
                                  style={{ display: "none" }}
                                  ref={c => {
                                    this.checkBtn = c;
                                  }}
                                />
                              </Form>
                </div>
            </div>
        );
    }
}

export default Post;