import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="logo">
            <div className="LogoImg"></div>
          </div>
          <div className="menu">
            <Link to="/about">
              <h1>About</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
