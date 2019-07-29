import React, { useState, useEffect } from "react";
import ChangeSlider from "./ChangeSlider";
import DisplayItems from "./DisplayItems";

function Slider({ restaurants }) {
  const [slider, setSlider] = useState(1);
  const delay = 3000;
  const recommendations = restaurants[0].categories[1].food;
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
      <DisplayItems recommendations={recommendations} slider={slider} />
      <ChangeSlider
        setSlider={setSlider}
        recommendations={recommendations}
        slider={slider}
      />
    </div>
  );
}

export default Slider;
