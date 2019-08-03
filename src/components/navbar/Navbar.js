import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  let open = "";
  if (toggleNavbar === true) {
    open += "open";
  }

  function toggle() {
    if (toggleNavbar === false) setToggleNavbar(true);
    else setToggleNavbar(false);
  }
  return (
    <nav className="navbar ">
      <Link exact="true" to="/" className="navbar-brand">
        <span>Let's Eat</span>
      </Link>
      <ul className={open}>
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
        <span onClick={toggle} />
      </button>
    </nav>
  );
}

export default Navbar;
