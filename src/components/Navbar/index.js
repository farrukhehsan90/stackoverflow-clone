import React, { Component, useState } from "react";

import "./styles.css";

const Navbar =(props)=> {
    
     const [user,setUser]=useState(null),
     const [routeName,setRouteName]=useState(""),
     const [showSidebar,setShowSidebar]=useState(false),
     const [showDropdownMenu,setShowDropdownMenu]=useState(false),
    
  

  const handleNavigation = (route) => {
    props.history.push(route);
  };

  const renderLargeNavbar = () => {
    return (
      <div
        id="large-navbar"
        className="d-flex align-items-center justify-content-between"
      >
        <span className="d-flex align-items-center">
          <span
            className="navbar-link"
            onClick={() => this.openInNewTab("https://1888ce7903.nxcli.net/")}
          >
            For Business
          </span>

          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={() => handleNavigation("/")}
          >
            Log Out
          </button>
        </span>
      </div>
    );
  };

  const renderSmallNavbar = () => {
    return (
      <div id="small-navbar">
        <div className="py-2 d-flex align-items-center justify-content-between"></div>
        <div className="px-2"></div>
      </div>
    );
  };


    return (
      <div
        className="container-fluid fixed-top shadow px-3 py-2 mb-5"
        style={{
          backgroundColor: props.isBackgroundColor
            ? "#fff"
            : "transparent",
          transition: "background-color 300ms linear",
        }}
      >
        {renderLargeNavbar()}
        {renderSmallNavbar()}
      </div>
    );
  }


export default Navbar;
