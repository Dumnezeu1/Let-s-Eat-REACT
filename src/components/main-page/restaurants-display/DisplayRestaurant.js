import React from "react";

function DisplayRestaurant({ restaurants, search }) {
  let filteredRestaurants = restaurants.filter(restaurant => {
    return restaurant.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  return (
    <div className="container">
      <h1 className="center">Alege restaturantul preferat!</h1>
      <div className="restaurante-container">
        {filteredRestaurants.map(restaurant => (
          <a
            key={restaurant.id}
            href="Orezari.html"
            className="restaurante-item rest-div"
          >
            <img
              src={require(`./../../../img/${restaurant.image}`)}
              alt={restaurant.name}
            />
            <h2 className="rest-name">{restaurant.name}</h2>
            <p className="rest-sortiment">{restaurant.sortiments}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default DisplayRestaurant;
