import React from "react";
import { Link } from "react-router-dom";

function DisplayRestaurant({ restaurants, search }) {
  let filteredRestaurants = restaurants.filter(restaurant => {
    return (
      restaurant.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      restaurant.sortiments.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  });

  function redirect(name) {
    return `/restaurant/${name}`;
  }
  return (
    <div className="container">
      <h1 className="center">Alege restaturantul preferat!</h1>
      <div className="restaurante-container">
        {filteredRestaurants.map(restaurant => (
          <Link
            key={restaurant.id}
            to={redirect(restaurant.name)}
            className="restaurante-item rest-div"
          >
            <img
              src={require(`./../../img/${restaurant.image}`)}
              alt={restaurant.name}
            />
            <h2 className="rest-name">{restaurant.name}</h2>
            <p className="rest-sortiment">{restaurant.sortiments}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DisplayRestaurant;
