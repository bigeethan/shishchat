import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import AuthService from "./AuthService";

function logOut() {
      AuthService.logout();
}

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <ul onClick={showSidebar}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/create-post">Create ShishPost</Link></li>
        <li><Link to="/about">About</Link></li>
        <br/><br/>
        <li><Link to="/search-user">User Search</Link></li>
        <li><Link to="/profile">User Profile</Link></li>
        <li><Link to="/login"><a className="nav-link" onClick={logOut}>Log Out</a></Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;