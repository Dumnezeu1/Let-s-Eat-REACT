import React, { useState } from "react";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartDisplay({ cart, setCart }) {
  const [showCart, setShowCart] = useState(false);
  let style = "cos_container";
  if (showCart === true) {
    style += " modalDisplay";
  }

  function TotalPrice() {
    var total = cart.reduce((tot, record) => {
      return tot + record.price * record.quantity;
    }, 0);
    return (
      <div className="modal-total">
        <span>Total: {total} RON</span>
      </div>
    );
  }

  return (
    <>
      <button onClick={e => setShowCart(true)} id="modal-open">
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
      <aside className={style}>
        <div className="cos_content">
          <span className="close" onClick={e => setShowCart(false)}>
            &times;
          </span>
          <Cart cart={cart} setCart={setCart} />
          <br />
          <TotalPrice />
        </div>
      </aside>
    </>
  );
}

export default CartDisplay;
