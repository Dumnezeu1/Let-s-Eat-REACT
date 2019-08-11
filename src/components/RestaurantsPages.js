import React, { useState } from "react";
import CartDisplay from "./cart/CartDisplay";
import Food from "./cart/Food";
import RestaurantDetails from "./cart/RestaurantDetails";
import { Prompt } from "react-router-dom";

function RestaurantsPages({ match, restaurants }) {
  let [cart, setCart] = useState([]);

  let findRestaurant = restaurants.filter(restaurant => {
    return restaurant.name.indexOf(match.params.id) !== -1;
  });

  return (
    <>
      <Prompt
        when={cart.length > 0}
        message={location =>
          `You have items in the cart, are you sure you want to go to ${
            location.pathname
          }`
        }
      />
      <div className="modal-left">
        {findRestaurant.map(restaurant => (
          <div key={restaurant.id}>
            <RestaurantDetails restaurant={restaurant} />
            <div className="items-container">
              <Food cart={cart} setCart={setCart} restaurant={restaurant} />
              <CartDisplay cart={cart} setCart={setCart} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RestaurantsPages;
