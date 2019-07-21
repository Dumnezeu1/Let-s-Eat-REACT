import React from "react";

function ChangeSlider({ slider, setSlider, restaurants }) {
  function nextSlider() {
    if (slider < restaurants[0].items.length) {
      setSlider(slider + 1);
    } else setSlider(1);
  }

  function prevSlider() {
    if (slider > 1) {
      setSlider(slider - 1);
    } else {
      setSlider(restaurants[0].items.length);
    }
  }
  return (
    <div className="arrow">
      {" "}
      <button onClick={prevSlider} className="arrow-slider">
        {" "}
        Back{" "}
      </button>
      <button onClick={nextSlider} className="arrow-slider">
        Next
      </button>
    </div>
  );
}

export default ChangeSlider;
