import React from "react";
import Background from "./../../img/dish.jpg";

export default function AboutPage({ aboutData }) {
  const style = {
    backgroundImage: `url(${Background})`,
    height: "100%",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };
  return (
    <div>
      <div className="about-products-bg">
        <div style={style}>
          <div className="textp">
            <h1>{aboutData.bannerTitle}</h1>
            <p>{aboutData.bannerText}</p>
          </div>
        </div>
      </div>
      <div className="wrapperr">
        <div className="gallery">
          {aboutData.employees.map(employee => (
            <div className="gallery_about" key={employee.name}>
              <img src={employee.avatar} alt={employee.name} />
              <h3>{employee.name}</h3>
              <h4>{employee.position}</h4>
              <p>{employee.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
