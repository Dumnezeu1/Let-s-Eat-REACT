import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link exact="true" to="/" className="navbar-brand">
        <span>Let's Eat</span>
      </Link>
      <ul>
        <li>
          <Link exact="true" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link exact="true" to="/about" id="aboutbtn">
            About
          </Link>
        </li>
        <li>
          <Link exact="true" to="/contacts">
            Contact
          </Link>
        </li>
      </ul>
      <button className="navbar-toggler">
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
