import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navbar/navbar";
import HomePage from "./routes/home-page/home-page";
import ShopPage from "./routes/shop-page/shop-page";
import ContactPage from "./routes/contact-page/contact-page";
import AuthpPage from "./routes/auth-page/auth-page";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="auth" element={<AuthpPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
