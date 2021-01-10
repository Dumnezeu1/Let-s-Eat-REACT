import React, { useRef, useEffect } from "react";
import { useClickOutside } from "../../../utils/hooks";
import DummyImage from "../../../assets/img/bbq.jpg";

export default function RestaurantDetailsModal({
  restaurant,
  setDetailsDisplay,
}) {
  const adressMessage = "Adresă";
  const infoMessaje = "Date societate";
  const workingTimeMessage = "Program";

  const retaurantModalRef = useRef(null);
  const clickOutside = useClickOutside(retaurantModalRef);

  useEffect(() => {
    if (clickOutside === retaurantModalRef) {
      setDetailsDisplay(false);
    }
  }, [clickOutside, setDetailsDisplay]);

  return (
    <div id="detalii" className="modal_container">
      <div ref={retaurantModalRef} className="modal-detalii-container">
        <span
          className="close-restaurant-modal"
          onClick={() => {
            setDetailsDisplay(false);
          }}
        >
          &times;
        </span>
        {/* 
                in normal cli it will parse the images but ts will not let me unless i inport them, so i will need to upload
                the images somewhere and i am too lazy right now to do that
                <img src={require(`../../../assets/img/${image}`)} alt={name} />
          */}
        <img src={DummyImage} alt={restaurant.name} />
        <h2 className="modal-detalii-title">{restaurant.name}</h2>
        <div className="modal-detalii">
          <div className="modal-detalii-content">
            <h2>{adressMessage}</h2>
            <p>{restaurant.adress}</p>
          </div>
          <div className="modal-detalii-content">
            <h2>{infoMessaje}</h2>
            <p>{restaurant.company_data}</p>
          </div>
          <div className="modal-detalii-content">
            <h2>{workingTimeMessage}</h2>
            <table>
              <tbody>
                {restaurant.working_time.map((orar) => (
                  <tr key={orar.day}>
                    <td>{orar.day}</td>
                    <td className="restaurant-ora">{orar.open}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
