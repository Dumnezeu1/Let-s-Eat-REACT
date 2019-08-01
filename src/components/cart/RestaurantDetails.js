import React, { useState } from "react";
import RestaurantDetailsModal from "./RestaurantDetailsModal";

function RestaurantDetails({ restaurant }) {
  const [modalDetailsDisplay, setDetailsDisplay] = useState(false);

  return (
    <>
      {modalDetailsDisplay && (
        <RestaurantDetailsModal
          restaurant={restaurant}
          modalDetailsDisplay={modalDetailsDisplay}
          setDetailsDisplay={setDetailsDisplay}
        />
      )}

      <div className="modal-header">
        <div className="details-background">
          <img
            src={require(`./../../img/${restaurant.image}`)}
            alt={restaurant.name}
          />
        </div>
        <div
          className="restaurant-info"
          onClick={() => {
            setDetailsDisplay(true);
          }}
        >
          <div className="restaurant-title">
            <h3>{restaurant.name}</h3>
            <span>{restaurant.sortiments}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantDetails;
