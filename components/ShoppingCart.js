import React, { useContext } from "react";
import { CandyContext } from "./CandyContext";

const ShoppingCart = () => {
  const { cart, totalProductsInCart } = useContext(CandyContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Products: {totalProductsInCart}</p>
      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
          <p>Description: {item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
