import React, { useState } from "react";
import RestaurantDetailsModal from "./RestaurantDetailsModal";
import DummyImage from "../../../assets/img/bbq.jpg";

function RestaurantDetails({ restaurant }) {
  const [modalDetailsDisplay, setDetailsDisplay] = useState(false);

  return (
    <>
      {modalDetailsDisplay && (
        <RestaurantDetailsModal
          restaurant={restaurant}
          setDetailsDisplay={setDetailsDisplay}
        />
      )}

      <div className="modal-header">
        <div className="details-background">
          {/* 
                in normal cli it will parse the images but ts will not let me unless i inport them, so i will need to upload
                the images somewhere and i am too lazy right now to do that
                <img src={require(`../../../assets/img/${image}`)} alt={name} />
          */}
          <img src={DummyImage} alt={restaurant.name} />
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
