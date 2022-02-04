import React, {Component, useContext, useEffect, useRef} from 'react';
import SockJsClient from 'react-stomp';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './MessageStyle.css';
import NameComponent from "./NameComponent";
import Sidebar from "./Sidebar";
import Login from "./Login";
import AuthService from "./AuthService";
import User from "./User";
import ScrollToBottom from 'react-scroll-to-bottom';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            typedMessage: "",
            name: ""
        }
    }

    setName = () => {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                name: user
            });
        }
    };

    sendMessage = () => {
        this.clientRef.sendMessage('/app/user-all', JSON.stringify({
            name: this.state.name,
            message: this.state.typedMessage
        }));
        fetch('https://shishchat.herokuapp.com/addmessage', {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: this.state.name,
                        message: this.state.typedMessage
                    })
                })
                .then((response) => response.json())
                   .then((responseJson) => {
                     console.log(responseJson);
                   })
                   .catch((error) => {
                     console.error(error);
                   });
        this.setState({typedMessage: ""});
    };

    componentDidMount() {
        fetch('https://shishchat.herokuapp.com/getmessages', {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then((response) => response.json())
                    .then((json) => {
                        this.setState({
                            messages: json
                        });
                    });
        console.log(this.state.messages);
    }

    displayMessages = () => {
        return (
            <div>
                    {this.state.messages.map(msg => {
                        return (
                            <div key={msg.id}>
                                {this.state.name == msg.username ?
                                    <div>
                                        <p className="title1"><b>{msg.username}:</b></p><br/>
                                        <p id="actualText">{msg.message}</p>
                                    </div> :
                                    <div>
                                        <p className="title2"><b>{msg.username}:</b></p><br/>
                                        <p id="actualText">{msg.message}</p>
                                    </div>
                                }
                            </div>)
                    })}
            </div>
        );
    };

    render() {
        return (
                <div>
                    <Sidebar />
                    <div className="top">
                        <h1>Shishchat</h1>
                        <h3>The top Shishir themed chatting service</h3>
                    </div>
                    <br/>
                    <div className="align-center">
                        User: <p className="title1"> {this.state.name}</p>
                        <br/><br/>
                    </div>
                    <img src="parrot-shishir.jpeg" className="one"></img>
                    <div className="messages">
                        {this.displayMessages()}
                    </div>
                    <img src="parrot-shishir.jpeg" className="two"></img>
                    <br/><br/>
                    <div className="align-center">
                                        <br/><br/>
                                        <table>
                                            <tr>
                                                <td>
                                                    <TextField id="outlined-basic" label="Enter Message to Send" variant="outlined"
                                                               value={this.state.typedMessage}
                                                               multiline
                                                               maxRows={6}
                                                               onChange={(event) => {
                                                                   this.setState({typedMessage: event.target.value});
                                                               }}
                                                               inputProps={{style: { textAlign: 'left', width: 650 }}}
                                                               />
                                                </td>
                                                <td>
                                                    <Button variant="contained" color="primary"
                                                            onClick={this.sendMessage}>Send</Button>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                    <SockJsClient url='https://shishchat.herokuapp.com/websocket-chat'
                                  topics={['/topic/user']}
                                  onConnect={() => {
                                      console.log("connected");
                                      this.setName();
                                  }}
                                  onDisconnect={() => {
                                      console.log("Disconnected");
                                  }}
                                  onMessage={(msg) => {
                                      var jobs = this.state.messages;
                                      jobs.push(msg);
                                      this.setState({messages: jobs});
                                      console.log(this.state);
                                  }}
                                  ref={(client) => {
                                      this.clientRef = client
                                  }}/>
                </div>
        )
    }
}

export default Chat;