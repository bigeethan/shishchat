import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "./AuthService";
import Sidebar from "./Sidebar";
import './EditProfile.css';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeBio = this.onChangeBio.bind(this);

        this.state = {
          username: AuthService.getCurrentUser(),
          bio: "",
          image: ""
        };
      }

      onChangeBio(e) {
        this.setState({
          bio: e.target.value
        });
      }

      handleRegister(e) {
          e.preventDefault();

          this.form.validateAll();

          if (this.checkBtn.context._errors.length === 0) {
            fetch('https://shishchat.herokuapp.com/editprofile/' + this.state.username, {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: this.state.username,
                            bio: this.state.bio,
                            pictureUrl: this.state.image
                        })
                    })
                    .then((response) => response.json())
                       .then((responseJson) => {
                         console.log(responseJson);
                       })
                       .catch((error) => {
                         console.error(error);
                       });
              }
            this.props.history.push('/profile');
          }

    render() {
        return (
            <div>
                <div className="top">
                    <Sidebar />
                    <h1>Shishchat</h1>
                    <h3>The top Shishir themed chatting service</h3>
                </div>
                <div className="card card-container">
                          <Form
                            onSubmit={this.handleRegister}
                            ref={c => {
                              this.form = c;
                            }}
                          >
                            {!this.state.successful && (
                              <div>
                                <div className="form-group-bio">
                                  <label htmlFor="bio">Bio</label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    name="bio"
                                    value={this.state.bio}
                                    onChange={this.onChangeBio}
                                  />
                                </div>

                                <div className="form-group-button">
                                        <button className="btn btn-primary btn-block">Save Changes</button>
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
                        </div>
            </div>
        );
    }
}

export default EditProfile;