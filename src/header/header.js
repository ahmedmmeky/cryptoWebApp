import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <div>
            <h1>Kyrptobyte Logo</h1>
          </div>
        </div>
        <div className="menu">
          <Link to="/about">
            <h1>About</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
