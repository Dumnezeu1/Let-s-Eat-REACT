import React, { useState, useEffect } from "react";
import Cart from "./cart/Cart";
import Food from "./cart/Food";
import Restaurant from "./cart/RestaurantDetails";

function RestaurantsPages({ match, restaurants }) {
  let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  let findRestaurant = restaurants.filter(restaurant => {
    return restaurant.name.indexOf(match.params.id) !== -1;
  });
  console.log(findRestaurant);
  return (
    <div className="modal-left">
      {findRestaurant.map(restaurant => (
        <div key={restaurant.id}>
          <Restaurant restaurant={restaurant} />
          <div className="items-container">
            <Food cart={cart} setCart={setCart} restaurant={restaurant} />
            <Cart cart={cart} setCart={setCart} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantsPages;
