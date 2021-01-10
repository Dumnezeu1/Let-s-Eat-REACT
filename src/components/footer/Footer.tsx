import React from "react";
import Socialize from "./Socialize";
import Copyrights from "./Copyrights";

interface FooterProps {
  footerData: Array<{
    name: string;
    info: string;
  }>;
}

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  return (
    <footer
      style={{
        zIndex: 2,
        position: "relative",
        backgroundColor: "rgb(242, 242, 243)",
      }}
    >
      <div className="container">
        <Socialize />
        <Copyrights footerData={footerData} />
      </div>
    </footer>
  );
};

export default Footer;
