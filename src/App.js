import "./App.css";
import React from "react";
import { CartProvider } from './components/CartContext';
import { UserProvider } from "./contexts/userContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Design from "./pages/Design";
import Home from "./pages/Home";
import Wears from "./pages/Wears";
import Electronics from "./pages/Electronics";
import Jewelry from "./pages/Jewelry";
import MensClothing from "./pages/MensClothing";
import WomansClothing from "./pages/WomansClothing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <UserProvider>
      <Routes>
        <Route path="/" element={<Design />}>
          <Route index element={<Home />} />
          {/* <Route path="/wears" element={<Wears />} /> */}
          <Route path="/electronics" element={<Electronics Cart={Cart} />} />
          <Route path="/mensclothing" element={<MensClothing />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/womansclothing" element={<WomansClothing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      </UserProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
