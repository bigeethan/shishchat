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
        this.setState({typedMessage: ""});
    };

    displayMessages = () => {
        return (
            <div>
                    {this.state.messages.map(msg => {
                        return (
                            <div>
                                {this.state.name == msg.name ?
                                    <div>
                                        <p className="title1"><b>{msg.name}:</b></p><br/>
                                        <p id="actualText">{msg.message}</p>
                                    </div> :
                                    <div>
                                        <p className="title2"><b>{msg.name}:</b></p><br/>
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
                    <div className="align-center">
                        <h1>Shishchat</h1>
                        <br/><br/>
                    </div>
                    <div className="align-center">
                        User: <p className="title1"> {this.state.name}</p>
                        <br/><br/>
                    </div>
                    <div className="messages">
                        {this.displayMessages()}
                    </div>
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