import React, { useState, useEffect } from "react";
import ChangeSlider from "./ChangeSlider";
import DisplayItems from "./DisplayItems";

function Slider({ recomandations, restaurantName, retaurantRedirect }) {
  const [slider, setSlider] = useState(1);
  const delay = 3000;
  useEffect(() => {
    const interval = setInterval(() => {
      if (slider < recomandations.length) {
        setSlider(slider + 1);
      } else {
        setSlider(1);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [slider, recomandations]);

  return (
    <div className="daily_container">
      <DisplayItems
        recomandations={recomandations}
        slider={slider}
        restaurantName={restaurantName}
        retaurantRedirect={retaurantRedirect}
      />
      <ChangeSlider
        setSlider={setSlider}
        recomandations={recomandations}
        slider={slider}
      />
    </div>
  );
}

export default Slider;
