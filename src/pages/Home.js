import React from "react";
import './Home.css';
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="page">
      <Sidebar />
      <h1>Shishchat</h1>
      <h3>The top Shishir themed chatting service</h3>
    </div>
  );
}

export default Home;