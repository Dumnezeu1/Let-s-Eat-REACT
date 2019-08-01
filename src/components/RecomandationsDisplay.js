import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export default function RecomandationsDisplay({
  recommendations,
  restaurantName,
  retaurantRedirect
}) {
  return (
    <Link
      exact="true"
      to={retaurantRedirect}
      style={{ textDecoration: "none" }}
    >
      <div className="grid-container container">
        {recommendations.slice(0, 3).map(item => (
          <span className="grid-item" key={item.name}>
            <h2>
              {" "}
              <FontAwesomeIcon icon={faTag} />
              Vă recomandăm
            </h2>
            <div className="daily-text">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="daily-bottom-bar">
                <h3>{item.price} RON</h3>
                <h3>{restaurantName}</h3>
              </div>
            </div>
          </span>
        ))}
      </div>
    </Link>
  );
}
