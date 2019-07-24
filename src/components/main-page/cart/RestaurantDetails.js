import React from "react";

function RestaurantDetails({ restaurant }) {
  return (
    <div className="modal-header">
      <div className="details-background">
        <img
          src={require(`./../../../img/${restaurant.image}`)}
          alt={restaurant.name}
        />
      </div>
      <div className="restaurant-info">
        <div className="restaurant-title">
          <h3>{restaurant.name}</h3>
          <span>{restaurant.sortiments}</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
