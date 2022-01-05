import React from "react";
import './About.css';
import Sidebar from "./Sidebar";

function About() {
  return (
    <div>
        <Sidebar />
        <div className="page">
            <h1>Shishchat</h1>
            <h3>The top Shishir themed chatting service</h3>
        </div>
        <div className="meet-shishir">
            <p><b>Meet Shishir</b></p>
            <img src="Shishir.jpeg"></img>
        </div>
    </div>
  );
}

export default About;