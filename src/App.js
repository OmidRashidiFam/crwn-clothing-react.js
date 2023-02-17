import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navbar/navbar";
import HomePage from './routes/home-page/home-page'
import ShopPage from './routes/shop-page/shop-page'
import ContactPage from './routes/contact-page/contact-page'
import SignupLoginPage from './routes/signup-login-page/signup-login-page'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="signup-login" element={<SignupLoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
