import React from "react";
import Socialize from "./Socialize";
import Copyrights from "./Copyrights";

function Footer({ footerData }) {
  const style = {
    zIndex: 2,
    position: "relative",
    backgroundColor: "rgb(242, 242, 243)"
  };
  return (
    <footer style={style}>
      <div className="container">
        <Socialize />
        <Copyrights footerData={footerData} />
      </div>
    </footer>
  );
}

export default Footer;
