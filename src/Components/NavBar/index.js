import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Cart/CartContext";
import classes from "./MainNavigation.module.css";
import AuthContext from "../../AuthContext";

const Navbar = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler =()=>{
    authCtx.logout();
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
              <Link to="/Store">store</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/about">about</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/contact-us">contact us</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={props.Cart}>cart ({total})</button>
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
