import React from "react";
import Slider from "./recomandation-slider/Slider";
import RecomandationsDisplay from "./RecomandationsDisplay";
import MediaQuery from "react-responsive";

export default function Recomandations({ restaurants }) {
  const whichRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];
  const categoryLength = whichRestaurant.categories.length;
  const whichFood =
    whichRestaurant.categories[Math.floor(Math.random() * categoryLength)];
  const recomandations = whichFood.food;
  const restaurantName = whichRestaurant.name;
  const retaurantRedirect = `restaurant/${restaurantName}`;

  return (
    <div>
      <MediaQuery maxDeviceWidth={760}>
        {matches =>
          matches ? (
            <Slider
              recomandations={recomandations}
              restaurantName={restaurantName}
              retaurantRedirect={retaurantRedirect}
            />
          ) : (
            <RecomandationsDisplay
              recomandations={recomandations}
              restaurantName={restaurantName}
              retaurantRedirect={retaurantRedirect}
            />
          )
        }
      </MediaQuery>
    </div>
  );
}
