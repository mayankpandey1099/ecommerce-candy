import React, { createContext, useState, useMemo } from "react";

export const CandyContext = createContext();

export const CandyProvider = ({ children }) => {
  const [candies, setCandies] = useState([]);
  const [cart, setCart] = useState([]);

  const addCandy = (candy) => {
    setCandies([...candies, candy]);
  };

  const addToCart = (candy, quantity) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.name === candy.name
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      const item = { ...candy, quantity };
      setCart([...cart, item]);
    }
  };

  const totalProductsInCart = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);


  return (
    <CandyContext.Provider
      value={{ candies, cart, addCandy, addToCart, totalProductsInCart}}
    >
      {children}
    </CandyContext.Provider>
  );
};
