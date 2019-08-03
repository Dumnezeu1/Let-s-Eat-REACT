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
          <div className="modal-adress">
            <form className="form-adress">
              <h3>Adresa</h3>
              <textarea
                name="Adresa"
                id="adresa"
                placeholder="Ex: Str. Fulger Nr. 01"
                required
              />
              <h3>Nr Telefon</h3>
              <input
                type="tel"
                name="telphone"
                placeholder="Ex: 07x.xxx.xxx"
                pattern="[0-9]{10}"
                maxLength="10"
                title="Ten digits code"
                required
              />
              <h3>Observatii</h3>
              <textarea name="Observatii" id="observatii" />
              <br />
              <button>Comanda!</button>
            </form>
          </div>
        </div>
      </aside>
    </>
  );
}

export default CartDisplay;
