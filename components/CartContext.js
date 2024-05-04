import React, { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (product, quantity) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.id === product.id
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

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    } else {
      // If quantity is 1, remove the item from the cart
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const totalProductsInCart = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);


  return (
    <CartContext.Provider
      value={{cart, addToCart, totalProductsInCart, decreaseQuantity, increaseQuantity, emptyCart}}
    >
      {children}
    </CartContext.Provider>
  );
};
