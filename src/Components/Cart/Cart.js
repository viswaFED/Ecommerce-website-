import React, { useContext } from "react";
import CartItems from "./CartItems";
import CartContext from "./CartContext";
import "./Cart.css";

// const cartElements = [
//   {
//     title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

//     quantity: 2,
//   },

//   {
//     title: "Black and white Colors",

//     price: 50,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

//     quantity: 3,
//   },

//   {
//     title: "Yellow and Black Colors",

//     price: 70,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

//     quantity: 1,
//   },
// ];

const Cart = (props) => {
  let cartTotal = 0;
  const cartCntxt = useContext(CartContext);

  const CartList = cartCntxt.items.map((List) => (
    <CartItems
      key={List.id}
      id={List.id}
      item={List.title}
      img={List.imgsrc}
      price={List.price}
      quantity={List.quantity}
    />
  ));
  cartCntxt.items.forEach((item) => {
    let subtotal = 0;
    subtotal = Number(item.quantity) * Number(item.price);
    cartTotal = cartTotal + subtotal;
  });

  return (
    <div className="cart">
      <h3 className="cartName">Cart</h3>
      <button className="cart__Button" onClick={props.onClick}>
        X
      </button>
      <div className="cart-row cart-header">
        <span className="cart-item cart-column">ITEM</span>
        <span className="cart-price cart-column">PRICE</span>
        <span className="cart-quantity cart-column">QUANTITY</span>
      </div>
      <div>{CartList}</div>
      <div className="Ctotal">
        <span>
          <span className="total-title">
            <strong style={{ fontFamily: "Times New Roman" }}>Total</strong>
          </span>
          <span id="total-value" className="total--value">
            {cartTotal}
          </span>
        </span>
      </div>
      <button className="purchase-btn" type="button">
        PURCHASE
      </button>
    </div>
  );
};

export default Cart;
