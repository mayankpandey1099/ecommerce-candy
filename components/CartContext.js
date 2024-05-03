import React, { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (product, quantity) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.name === product.name
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      const item = { ...product, quantity };
      setCart([...cart, item]);
    }
  };

  const totalProductsInCart = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);


  return (
    <CartContext.Provider
      value={{cart, addToCart, totalProductsInCart}}
    >
      {children}
    </CartContext.Provider>
  );
};
