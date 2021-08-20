import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <Link to="/">
            <div className="logo">
              <div className="LogoImg"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
