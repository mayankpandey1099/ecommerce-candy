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
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <div className="flex justify-center mb-4">
        <div className="w-1/4">Item</div>
        <div className="w-1/4">Price</div>
        <div className="w-1/4">Quantity</div>
      </div>
      {cart.map((item, index) => (
        <div key={index} className="flex justify-center items-center mb-4">
          <div className="w-1/4">
            <img
              src={item.imageUrl}
              alt="img"
              className="w-40 mb-2 mx-auto"
            />
            <h2 className="text-lg font-semibold text-center">{item.title}</h2>
          </div>
          <div className="w-1/4">₹ {item.price}</div>
          <div className="w-1/4">
            <button
              onClick={() => decreaseQuantity(index)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              onClick={() => increaseQuantity(index)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="text-right mt-4">
        Total Products: {totalProductsInCart}
      </div>
      <button
        onClick={handlePurchase}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Purchase
      </button>
    </div>
  );
};
export default ShoppingCart;
