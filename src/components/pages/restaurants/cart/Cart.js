import React from "react";

export default function Cart({ cart, setCart }) {
  function LessQuantity(index) {
    if (cart[index].quantity > 1)
      setCart([
        ...cart.slice(0, index),
        {
          ...cart[index],
          quantity: cart[index].quantity - 1,
        },
        ...cart.slice(index + 1, cart.length),
      ]);
  }

  function MoreQuantity(index) {
    setCart([
      ...cart.slice(0, index),
      { ...cart[index], quantity: parseInt(cart[index].quantity, 10) + 1 },
      ...cart.slice(index + 1, cart.length),
    ]);
  }

  function SetQuantity(e, index) {
    if (e > 0)
      setCart([
        ...cart.slice(0, index),
        { ...cart[index], quantity: (cart[index].quantity = parseInt(e, 10)) },
        ...cart.slice(index + 1, cart.length),
      ]);
    else
      setCart([
        ...cart.slice(0, index),
        { ...cart[index], quantity: (cart[index].quantity = parseInt(1, 10)) },
        ...cart.slice(index + 1, cart.length),
      ]);
  }

  function RemoveItem(index) {
    setCart([...cart.slice(0, index), ...cart.slice(index + 1, cart.length)]);
  }

  return (
    <div className="modal-cos">
      <h3 className="item-title">Comanda ta</h3>
      {cart.map((products, index) => (
        <div key={products.name} className="cos-produs">
          <div className="produse-cos">
            <div className="produs-info">
              <h2>{products.name}</h2>
              <p className="item-info">{products.description}</p>
            </div>
            <p>
              Price: <br /> {(products.quantity * products.price).toFixed(2)}{" "}
              RON
            </p>
            <div className="produs-cantitate">
              <div className="quantity-container">
                <button onClick={() => LessQuantity(index)}>-</button>
                <input
                  className="produs-numar"
                  value={products.quantity}
                  type="number"
                  onChange={(e) => SetQuantity(e.target.value, index)}
                />
                <button onClick={() => MoreQuantity(index)}>+</button>
              </div>
              <button onClick={() => RemoveItem(index)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
