import React, { useContext, useState } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./Pages/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Store from "./Pages/Store";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Cart/CartProvider";
import Footer from "./Pages/Footer";
import ProductPage from "./Pages/ProductPage";
import AuthPage from "./AuthPage";
import UserProfile from "./Profile/UserProfile";
import AuthContext from "./AuthContext";

function App() {
  const [cart, setCart] = useState(false);

  const hideCartHandler = () => {
    setCart(false);
  };
  const showCartHandler = () => {
    setCart(true);
  };

const authCtx = useContext(AuthContext);
  return (
    <CartProvider>
      <Router>
        <Navbar Cart={showCartHandler} />
        <Routes>
          <Route path="Home" element={authCtx.isLoggedIn && <Home />} />
          <Route path="about" element={authCtx.isLoggedIn && <About />} />
          <Route
            path="contact-us"
            element={authCtx.isLoggedIn && <Contact />}
          />
          <Route path="Store" element={authCtx.isLoggedIn && <Store />} />
          <Route
            path="Store/:productId"
            element={authCtx.isLoggedIn && <ProductPage />}
          />
          <Route path="auth" element={!authCtx.isLoggedIn && <AuthPage />} />
          <Route
            path="profile"
            element={authCtx.isLoggedIn && <UserProfile />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
     
      {cart && <Cart onClick={hideCartHandler} />}
      <div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;