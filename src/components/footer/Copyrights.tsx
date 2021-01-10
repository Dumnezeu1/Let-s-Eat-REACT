import React, { useState } from "react";
import FooterInfo from "./FooterInfoModal";

interface FooterDetails {
  name: string;
  info: string;
}

interface FooterProps {
  footerData: Array<FooterDetails>;
}

const Copyrights: React.FC<FooterProps> = ({ footerData }) => {
  const [footerInfoDisplay, setFooterInfoDisplay] = useState<boolean>(false);
  const [footerInfoModal, setFooterInfoModal] = useState<
    FooterDetails | undefined
  >(undefined);

  const setDisplayData = (data: FooterDetails) => {
    setFooterInfoDisplay(true);
    setFooterInfoModal(data);
  };

  return (
    <div className="copyrights">
      <p className="copyrights_designed">Copyright &#169; Let's Eat 2019.</p>
      <div className="copyrights_support">
        {footerData.map((data) => (
          <div key={data.name}>
            <p onClick={() => setDisplayData(data)}>{data.name}</p>
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
  );
};

export default Copyrights;
