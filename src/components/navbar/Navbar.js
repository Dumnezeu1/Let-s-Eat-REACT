import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="index.html" className="navbar-brand">
        <span>Let's Eat</span>
      </a>
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about.html" id="aboutbtn">
            About
          </a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>
      <button className="navbar-toggler">
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
