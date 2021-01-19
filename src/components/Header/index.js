import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

import "./style.css";

const Header =({history})=> {
  

  const [showDropDown,setShowDropDown]=useState(false);
  const [access_token,setAccessToken]=useState("");

  const renderLogout = () => {
    return (
      <li
        className={"sidebar-inactive-list buttonColor"}
        onClick={() => handleLogout}
      >
        <span style={{ marginLeft: 12 }}>Log Out</span>
      </li>
    );
  };

  const handleNavigation = (route) => {
    history.push(route);
  };

 const handleLogout = () => {
    history.push("/");
  };
    
    if (!user) return null;
    return (
      <div
        className="container-fluid d-flex justify-content-between align-items-center py-1"
        style={{
          backgroundColor: "#EBEBEB",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <div
          className="mr-3 d-flex align-items-center"
          onClick={() =>
            setShowDropDown({ showDropDown: !showDropDown })
          }
        >
          <div className="mx-2"></div>
          <div className="dropDown">
            {!!showDropDown && renderLogout()}
          </div>
        </div>
      </div>
    );
  };


export default withRouter(Header);
