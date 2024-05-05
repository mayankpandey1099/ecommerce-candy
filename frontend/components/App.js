import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import ShoppingCart from "./ShoppingCart";
import ContactUs from "./ContactUs";
import { CartProvider } from "./CartContext";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <CartProvider>
        <div>
          <Header />
          <div>
            <div>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/ContactUs" element={<ContactUs/>} />
                <Route path="/cart" element={<ShoppingCart/>} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
    </CartProvider>
  );
};

export default App;
