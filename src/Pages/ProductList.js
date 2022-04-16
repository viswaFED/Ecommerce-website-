import React, { Fragment, useContext } from "react";
import {  NavLink } from "react-router-dom";
import CartContext from "../Components/Cart/CartContext";
import "./Product.css";

const ProductList = (props) => {
  const cartCntxt = useContext(CartContext);
  const addToCart = (event) => {
    event.preventDefault();
    const a = {
      id: props.id,
      title: props.title,
      imgsrc: props.img,
      price: props.price,
      quantity: props.quantity,
    };
    cartCntxt.addItem(a);
  };

  const imgsrc = props.img;
  return (
    <Fragment>
      <ul className="">
        <NavLink to ={`/store/${props.id}`}>
          <div className="product__title">
            <h4> {props.title} </h4>
          </div>
          <div className="image__container">
            <img src={imgsrc} alt="products" />
          </div>
          <div className="product__price">
            <h4 className="product__price__text">Rs.{props.price}</h4>
            <button className="Product__button" onClick={addToCart}>
              ADD TO CART
            </button>
          </div>
          </NavLink>
      </ul>
    </Fragment>
  );
};

export default ProductList;
