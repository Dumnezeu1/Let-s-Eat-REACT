import React from "react";

export default function FooterInfo({ footerInfoModal, setFooterInfoDisplay }) {
  return (
    <div id="detalii" className="modal_container">
      <div className="modal-detalii-container">
        <span
          className="close-restaurant-modal"
          onClick={() => {
            setFooterInfoDisplay(false);
          }}
        >
          &times;
        </span>
        <h1>{footerInfoModal.name}</h1>
        <p>{footerInfoModal.info}</p>
      </div>
    </div>
  );
}
