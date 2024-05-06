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
    <div className="flex flex-col justify-between min-h-screen items-center">
      <div className="bg-gray-100 shadow-md p-4 flex flex-col w-1/2 mx-auto">
        <div className="flex items-center justify-between my-4 font-bold text-xl">
          <div>Item</div>
          <div>Price</div>
          <div>Quantity</div>
        </div>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between my-4">
              <div>
                <img src={item.imageUrl} alt="img" className="w-16 h-16 mr-4" />
                <h2 className="text-lg font-semibold">{item.title}</h2>
              </div>
              <div className="text-lg">₹ {item.price}</div>
              <div>
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(index)}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md"
                >
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">Your cart is empty.</div>
        )}
        {cart.length > 0 && (
          <div className="flex justify-between items-center mt-4">
            <div className="font-bold text-lg">
              Total Products: {totalProductsInCart}
            </div>
            <button
              onClick={handlePurchase}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md max-w-md"
            >
              Purchase
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShoppingCart;
