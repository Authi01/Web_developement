import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <Link to="/">
          <img src="res-logo.png" alt="icon" className="navbar-logo" />
        </Link>
        <div className="navbar-logo-text">Tasty Treat</div>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/P1">Food</Link>
        </li>
      </ul>
      <li>
        <Link to="/P3">
          <div className="navbar-logo-container">
            <img src="service-02.png" alt="icon" className="navbar-logo" />
          </div>
        </Link>
      </li>
    </nav>
  );
};

export default Navbar;
