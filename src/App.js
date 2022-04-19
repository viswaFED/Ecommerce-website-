import React, { useContext, useState, Suspense } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import Home from "./Pages/Index";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Store from "./Pages/Store";
// import ProductPage from "./Pages/ProductPage";
// import AuthPage from "./AuthPage";
// import UserProfile from "./Profile/UserProfile";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Cart/CartProvider";
import Footer from "./Components/Footer/Footer";
import AuthContext from "./AuthContext";


const Home = React.lazy(()=> import ('./Pages/Index'));
const  About = React.lazy(()=> import ('./Pages/About'));
const Contact = React.lazy(()=> import ('./Pages/Contact'));
const Store = React.lazy(()=> import ('./Pages/Store'));
const ProductPage = React.lazy(()=> import ('./Pages/ProductPage'));
const AuthPage = React.lazy(()=> import ('./AuthPage'));
const UserProfile = React.lazy(()=> import ('./Profile/UserProfile'));

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
        <Suspense>
        <Routes>
          <Route path="auth" element={!authCtx.isLoggedIn && <AuthPage />} />
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
          <Route
            path="profile"
            element={authCtx.isLoggedIn && <UserProfile />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </Suspense>
      </Router>
     
      {cart && authCtx.isLoggedIn && <Cart onClick={hideCartHandler} />}
      <div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;