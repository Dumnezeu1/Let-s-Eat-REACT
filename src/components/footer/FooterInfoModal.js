import React from "react";

export default function FooterInfo({ footerInfoModal, setFooterInfoDisplay }) {
  const modalTextStyle = {
    height: "auto",
    paddingTop: "20px",
    paddingBottom: "100px"
  };

  const modalTitleStyle = {
    height: "auto",
    paddingTop: "50px"
  };

  return (
    <div id="detalii" className="modal_container">
      <div className="modal-detalii-container">
        <span
          className="close-restaurant-modal"
          onClick={() => setFooterInfoDisplay(false)}
        >
          &times;
        </span>
        <h1 style={modalTitleStyle}>{footerInfoModal.name}</h1>
        <p style={modalTextStyle}>{footerInfoModal.info}</p>
      </div>
    </div>
  );
}
