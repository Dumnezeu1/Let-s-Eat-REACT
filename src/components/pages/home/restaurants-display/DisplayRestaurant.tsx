import React from "react";
import { Link } from "react-router-dom";

// declare function require(path: string): any;

import DummyImage from "../../../assets/img/bbq.jpg";

interface Props {
  restaurants: Array<{
    id: number;
    name: string;
    image: string;
    sortiments: string;
  }>;
  search: any;
}

const DisplayRestaurant: React.FC<Props> = ({ restaurants, search }) => {
  let filteredRestaurants = restaurants.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      restaurant.sortiments.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  });

  function redirect(name: string) {
    return `/restaurant/${name}`;
  }

  const restaurantsMessage = "Alege restaturantul preferat!";

  return (
    <div className="container" style={{ marginTop: 50 }}>
      <h1 style={{ textAlign: "center" }}>{restaurantsMessage}</h1>
      <div className="restaurante-container">
        {filteredRestaurants.map(({ id, name, image, sortiments }) => {
          return (
            <Link
              key={id}
              to={redirect(name)}
              className="restaurante-item rest-div"
            >
              {/* 
                in normal cli it will parse the images but ts will not let me unless i inport them, so i will need to upload
                the images somewhere and i am too lazy right now to do that
                <img src={require(`../../../assets/img/${image}`)} alt={name} />
               */}
              <img src={DummyImage} alt={name} />
              <h2 className="rest-name">{name}</h2>
              <p className="rest-sortiment">{sortiments}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayRestaurant;
