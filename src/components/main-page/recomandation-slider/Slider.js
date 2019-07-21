import React, { useState, useEffect } from "react";
import ChangeSlider from "./ChangeSlider";
import DisplayItems from "./DisplayItems";

function Slider({ restaurants }) {
  const [slider, setSlider] = useState(1);
  const delay = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider < restaurants[0].items.length) {
        setSlider(slider + 1);
      } else {
        setSlider(1);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [slider, restaurants]);

  return (
    <div className="daily_container">
      <DisplayItems restaurants={restaurants} slider={slider} />
      <ChangeSlider
        setSlider={setSlider}
        restaurants={restaurants}
        slider={slider}
      />
    </div>
  );
}

export default Slider;
