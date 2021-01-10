import React from "react";

interface Props {
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
  recomandations: any;
}

const ChangeSlider: React.FC<Props> = ({
  slider,
  setSlider,
  recomandations,
}) => {
  function nextSlider() {
    if (slider < recomandations.length) {
      setSlider(slider + 1);
    } else setSlider(1);
  }

  function prevSlider() {
    if (slider > 1) {
      setSlider(slider - 1);
    } else {
      setSlider(recomandations.length);
    }
  }
  return (
    <div className="arrow">
      <button onClick={prevSlider} className="arrow-slider">
        Back
      </button>
      <button onClick={nextSlider} className="arrow-slider">
        Next
      </button>
    </div>
  );
};

export default ChangeSlider;
