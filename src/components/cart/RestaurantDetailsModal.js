import React from "react";

export default function RestaurantDetailsModal({
  restaurant,
  setDetailsDisplay
}) {
  const adressMessage = "Adresă";
  const infoMessaje = "Date societate";
  const workingTimeMessage = "Program";

  return (
    <div id="detalii" className="modal_container">
      <div className="modal-detalii-container">
        <span
          className="close-restaurant-modal"
          onClick={() => {
            setDetailsDisplay(false);
          }}
        >
          &times;
        </span>
        <img
          src={require(`./../../img/${restaurant.image}`)}
          alt={restaurant.name}
        />{" "}
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
                {restaurant.working_time.map(orar => (
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
