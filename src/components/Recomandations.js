import React from "react";
import Slider from "./recomandation-slider/Slider";
import RecomandationsDisplay from "./RecomandationsDisplay";
import MediaQuery from "react-responsive";

export default function Recomandations({ restaurants }) {
  const which = 2;
  const recommendations = restaurants[which].categories[0].food;
  const restaurantName = restaurants[which].name;
  const retaurantRedirect = `restaurant/${restaurantName}`;

  return (
    <div>
      <MediaQuery maxDeviceWidth={760}>
        {matches =>
          matches ? (
            <Slider
              recommendations={recommendations}
              restaurantName={restaurantName}
              retaurantRedirect={retaurantRedirect}
            />
          ) : (
            <RecomandationsDisplay
              recommendations={recommendations}
              restaurantName={restaurantName}
              retaurantRedirect={retaurantRedirect}
            />
          )
        }
      </MediaQuery>
    </div>
  );
}
