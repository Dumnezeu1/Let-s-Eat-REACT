import React, { useState } from "react";
import SortimentSelectBar from "./SortimentSelectBar";

function Products({ restaurant, setCart, cart }) {
  const [findSortiment, setFindSortiment] = useState("");

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

  let findSelectedSortiment = restaurant.categories.filter(restaurantn => {
    return restaurantn.name.indexOf(findSortiment) !== -1;
  });

  return (
    <>
      <SortimentSelectBar
        restaurant={restaurant}
        findSortiment={findSortiment}
        setFindSortiment={setFindSortiment}
      />
      <div className="food-container">
        {" "}
        {findSelectedSortiment.map(category => (
          <div key={category.name} className="restaurant_food container">
            <h3>{category.name}</h3>
            {category.food.map((foo, index) => (
              <div key={foo.name} className="type-food shop-item">
                <div className="food_detalii">
                  <h3>{foo.name}</h3>
                  <p>{foo.description}</p>
                </div>
                <div className="food_price">
                  <p>{foo.price} RON</p>
                  <span
                    onClick={() => {
                      AddOnClick(foo, index);
                    }}
                  >
                    Adauga
                  </span>{" "}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
