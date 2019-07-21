import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

function DisplayItems({ restaurants, slider }) {
  return (
    <span className="grid-container container">
      {restaurants[0].items.slice(slider - 1, slider).map(item => (
        <span className="grid-item" key={slider}>
          <h2>
            {" "}
            <FontAwesomeIcon icon={faTag} />
            Vă recomandăm
          </h2>
          <div className="daily-text">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="daily-bottom-bar">
              <h3>{item.price} lei</h3>
            </div>
          </div>
        </span>
      ))}
    </span>
  );
}

export default DisplayItems;
