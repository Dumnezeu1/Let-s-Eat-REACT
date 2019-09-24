import React, { useRef, useEffect } from "react";
import { useClickOutside } from "./../../hooks";

export default function FooterInfo({ footerInfoModal, setFooterInfoDisplay }) {
  const footerModalRef = useRef(null);
  const clickOutside = useClickOutside(footerModalRef);

  useEffect(() => {
    if (clickOutside === footerModalRef) {
      setFooterInfoDisplay(false);
    }
  }, [clickOutside, setFooterInfoDisplay]);

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
    <div ref={footerModalRef} id="detalii" className="modal_container">
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
