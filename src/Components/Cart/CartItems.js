import React, { useContext } from "react";
import CartContext from "./CartContext";
import "./CartItems.css";
const CartItems = (props) => {
  const cartCntxt = useContext(CartContext);
  const removeFromCart = (event) => {
    event.preventDefault();
    
    cartCntxt.removeItem(props.id);
  };
  const imgsrc = props.img;
  return (
    <div className="cart-items">
      <div className="cartitems-row">
        <span className="cart-item cart-column">
          <img src={imgsrc} alt="products" className="cartimg" />
          {props.item}
        </span>
        <span className="cart-price cart-column">{props.price}</span>
        <span className="cart-quantity cart-column">
          <input type="text" value={props.quantity} />
          <button className="remove-button" onClick={removeFromCart}>
            Remove
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartItems;
