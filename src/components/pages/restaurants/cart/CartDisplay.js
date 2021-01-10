import React, { useState } from "react";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartDisplay = ({ cart, setCart }) => {
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

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
        <span>Total: {total.toFixed(2)} RON</span>
      </div>
    );
  }

  function Submit(e) {
    const phoneCheck = isNaN(phone);

    if (cart.length === 0) {
      e.preventDefault();
      alert("Add something in cart");
    }
    if (
      adress.trim().length > 0 &&
      phone.trim().length === 10 &&
      cart.length > 0 &&
      !phoneCheck
    )
      alert("Order send");
  }

  const adressMessage = "Adresa";
  const phoneNumberMessage = "Nr Telefon";
  const moreDetailsMessage = "Observatii";
  const submitMessage = "Comanda!";

  return (
    <>
      <button onClick={() => setShowCart(true)} id="modal-open">
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
      <aside className={style}>
        <div className="cos_content">
          <span className="close" onClick={() => setShowCart(false)}>
            &times;
          </span>
          <Cart cart={cart} setCart={setCart} />
          <br />
          <TotalPrice />
          <div className="modal-adress">
            <form className="form-adress">
              <h3>{adressMessage}</h3>
              <textarea
                onChange={(e) => setAdress(e.target.value)}
                name="Adresa"
                id="adresa"
                placeholder="Ex: Str. Fulger Nr. 01"
                value={adress}
                required
              />
              <h3>{phoneNumberMessage}</h3>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="telphone"
                value={phone}
                placeholder="Ex: 07x.xxx.xxx"
                pattern="[0-9]{10}"
                maxLength={10}
                title="Ten digits code"
                required
              />
              <h3>{moreDetailsMessage}</h3>
              <textarea
                onChange={(e) => setDetails(e.target.value)}
                value={details}
                name="Observatii"
                id="observatii"
              />
              <br />
              <button onClick={Submit}>{submitMessage}</button>
            </form>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CartDisplay;
