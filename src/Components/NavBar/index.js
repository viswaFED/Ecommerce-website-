import React, { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CartContext from "../Cart/CartContext";
import classes from "./MainNavigation.module.css";
import AuthContext from "../../AuthContext";

const Navbar = (props) => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext)
  const email=localStorage.getItem('Email');
  
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler=async()=>{
    authCtx.logout();
    const cart=JSON.stringify(cartCtx.items)
    
     await axios.post(`https://crudcrud.com/api/ff71684f3ab4436c8fc935fc56a3ff82/cart${email}`,
     cart)
    
    }
  let total = 0;
  const cartCntxt = useContext(CartContext);
  cartCntxt.items.forEach((element) => {
    total += element.quantity;
  });

  return (
    <header>
      <nav className={classes.header}>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/Home">Home</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/Store">Store</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/about">About</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/contact-us">Contact us</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={props.Cart}>Cart ({total})</button>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <button  onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      <div className={classes.gen}>
        <h1 style={{ fontFamily: "Times New Roman" }}>The Generics</h1>
      </div>
    </header>
  );
};

export default Navbar;
