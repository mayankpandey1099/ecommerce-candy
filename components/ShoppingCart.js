import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ShoppingCart = () => {
  const { cart, totalProductsInCart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Products: {totalProductsInCart}</p>
      {cart.map((item, index) => (
        <div key={index}>
           <h2>{item.title}</h2>
          <h3>₹ {item.price}</h3>
          <img src={item.imageUrl} alt="img" />
          <p>Quantity: {item.quantity}</p>
          <button>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
