import React from "react";
import Socialize from "./Socialize";
import Copyrights from "./Copyrights";

function Footer() {
  const style = {
    zIndex: 25321312,
    position: "relative",
    backgroundColor: "rgb(242, 242, 243)"
  };
  return (
    <footer style={style}>
      <div className="container">
        <Socialize />
        <Copyrights />
      </div>
    </footer>
  );
}

export default Footer;
