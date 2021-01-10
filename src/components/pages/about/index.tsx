import React from "react";
import Background from "../../assets/img/dish.jpg";

interface Employee {
  name: string;
  avatar: string;
  position: string;
  about: string;
}

interface Props {
  aboutData: {
    bannerTitle: string;
    bannerText: string;
    employees: Array<Employee>;
  };
}

const AboutPage: React.FC<Props> = ({ aboutData }) => {
  const { bannerTitle, bannerText, employees } = aboutData;

  return (
    <div>
      <div className="about-products-bg">
        <div style={style}>
          <div className="textp">
            <h1>{bannerTitle}</h1>
            <p>{bannerText}</p>
          </div>
        </div>
      </div>
      <div className="wrapperr">
        <div className="gallery">
          {employees.map(({ name, avatar, position, about }) => (
            <div className="gallery_about" key={name}>
              <img src={avatar} alt={name} />
              <h3>{name}</h3>
              <h4>{position}</h4>
              <p>{about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const style = {
  backgroundImage: `url(${Background})`,
  height: "100%",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default AboutPage;
