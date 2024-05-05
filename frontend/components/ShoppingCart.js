import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ShoppingCart = () => {
  const {
    cart,
    totalProductsInCart,
    decreaseQuantity,
    increaseQuantity,
    emptyCart,
  } = useContext(CartContext);

  const handlePurchase = () => {
    // Display a prompt to confirm purchase
    const confirmPurchase = window.confirm(
      "Are you sure you want to purchase?"
    );
    if (confirmPurchase) {
      // Empty the cart
      emptyCart();
      // Show success message
      alert("Purchased successfully!");
    }
  };
  return (
    <div>
      <h2>Cart</h2>
      <div>
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
      </div>
      {cart.map((item, index) => (
        <div key={index}>
          <div>
            <img
              src={item.imageUrl}
              alt="img"
            />
            <h2>{item.title}</h2>
          </div>
          <div>₹ {item.price}</div>
          <div>
            <button
              onClick={() => decreaseQuantity(index)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => increaseQuantity(index)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div>
        Total Products: {totalProductsInCart}
      </div>
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
};
export default ShoppingCart;
