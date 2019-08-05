import React, { useState } from "react";
import FooterInfo from "./FooterInfo";

function Copyrights() {
  const footerInfo = require("./footer.json");
  const [footerInfoDisplay, setFooterInfoDisplay] = useState(false);
  const [footerInfoModal, setFooterInfoModal] = useState("");

  return (
    <>
      <div className="copyrights">
        <p className="copyrights_designed">Copyright &#169; Let's Eat 2019.</p>
        <div className="copyrights_support">
          {footerInfo.map(fInfo => (
            <div key={fInfo.name}>
              <p
                onClick={() => {
                  setFooterInfoDisplay(true);
                  setFooterInfoModal(fInfo);
                }}
              >
                {fInfo.name}
              </p>
              {footerInfoDisplay && (
                <FooterInfo
                  setFooterInfoDisplay={setFooterInfoDisplay}
                  footerInfoModal={footerInfoModal}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Copyrights;
