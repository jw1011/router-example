//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import HomePage from "./page/Homepage";
import AboutPage from "./page/Aboutpage";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import UserPage from "./page/UserPage";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id/" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
