import React, { useState, useEffect } from "react";
import ChangeSlider from "./ChangeSlider";
import DisplayItems from "./DisplayItems";

function Slider({ recommendations, restaurantName }) {
  const [slider, setSlider] = useState(1);
  const delay = 3000;
  useEffect(() => {
    const interval = setInterval(() => {
      if (slider < recommendations.length) {
        setSlider(slider + 1);
      } else {
        setSlider(1);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [slider, recommendations]);

  return (
    <div className="daily_container">
      <DisplayItems
        recommendations={recommendations}
        slider={slider}
        restaurantName={restaurantName}
      />
      <ChangeSlider
        setSlider={setSlider}
        recommendations={recommendations}
        slider={slider}
      />
    </div>
  );
}

export default Slider;
