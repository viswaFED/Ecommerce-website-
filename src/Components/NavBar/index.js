import React, { useContext } from "react";
import axios from "axios";
import { NavLink   } from "react-router-dom";
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
              <NavLink   to="/auth">Login</NavLink  >
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink   to="/Home">Home</NavLink  >
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink  to="/Store">Store</NavLink >
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink  to="/about">About</NavLink >
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink  to="/contact-us">Contact us</NavLink >
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink  to="/profile">Profile</NavLink >
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
