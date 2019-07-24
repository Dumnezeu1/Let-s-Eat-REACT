import React from "react";

function Products({ restaurant, setCart, cart }) {
  function AddOnClick(items) {
    var found = cart.find(element => {
      return items.name === element.name;
    });
    if (found) alert("Already in");
    else
      setCart([
        ...cart,
        {
          name: items.name,
          description: items.description,
          price: items.price,
          quantity: 1
        }
      ]);
  }

  return (
    <div className="restaurant_food container">
      {" "}
      {restaurant.items.map((items, index) => (
        <div key={items.name} className="type-food shop-item">
          <div className="food_detalii">
            <h3>{items.name}</h3>
            <p>{items.description}</p>
          </div>
          <div className="food_price">
            <p>{items.price} RON</p>
            <span
              onClick={() => {
                AddOnClick(items, index);
              }}
            >
              Adauga
            </span>{" "}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
