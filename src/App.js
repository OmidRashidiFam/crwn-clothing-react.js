// import useEffect from react
import { useEffect } from "react";
// import react-router-dom packages
import { Routes, Route } from "react-router-dom";
// import useDispatch from react-redux
import { useDispatch } from "react-redux";

// import auth related functions from firebase
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils.js";

// import all the component
import Navbar from "./routes/navbar/navbar.component";
import HomePage from "./routes/home-page/home-page.component";
import ShopPage from "./routes/shop-page/shop-page.component";
import ContactPage from "./routes/contact-page/contact-page.component";
import AuthpPage from "./routes/auth-page/auth-page.component";
import CheckoutPage from "./routes/checkout-page/checkout-page.component";
import { setCurentUser } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();

  // using effect to subscribe to user changes using onAuthStateChangeListener hook
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurentUser(user));
    });

    return unsubscribe;
  });

  return (
    <div className="app">
      {/* Create root route and add navigation bar */}
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/* Add routes for each component */}
          <Route index element={<HomePage />} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="auth" element={<AuthpPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

// export App component
export default App;
