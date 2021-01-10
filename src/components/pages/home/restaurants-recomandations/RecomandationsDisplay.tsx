import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

interface Recomandations {
  name: string;
  description: string;
  price: string;
}

interface Props {
  recomandations: Array<Recomandations>;
  restaurantName: string;
  retaurantRedirect: string;
}

export const RecomandationsDisplay: React.FC<Props> = ({
  recomandations,
  restaurantName,
  retaurantRedirect,
}) => {
  const recomandMessage = " Vă recomandăm";

  return (
    <div className="grid-container container">
      {recomandations.slice(0, 2).map((recomandation) => {
        const { name, description, price } = recomandation;
        return (
          <div className="grid-item" key={name}>
            <Link to={retaurantRedirect} style={{ textDecoration: "none" }}>
              <h2>
                <FontAwesomeIcon icon={faTag} />
                {recomandMessage}
              </h2>
              <div className="daily-text">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="daily-bottom-bar">
                  <h3>{price} RON</h3>
                  <h3>{restaurantName}</h3>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecomandationsDisplay;
