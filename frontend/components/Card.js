import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const productsArr = [
  {
    id: 1,
    title: "Mixed Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: 5,
    title: "Mixed Cloud Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 6,
    title: "Black drops Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 7,
    title: "Circle Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 8,
    title: "Water Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Card = () => {
  const { addToCart } = useContext(CartContext);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddToCart = (item) => {
    addToCart(item, 1);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000); // Close message after 2 seconds
  };

  return (
  <div className="container mx-auto px-8 py-8 max-w-4xl overflow-y-scroll h-120 bg-gray-300">
    <div className="grid grid-cols-2 gap-4">
      {productsArr.map((item) => (
        <div key={item.id} className="p-4 bg-white rounded shadow-md">
          <img src={item.imageUrl} alt="img" className="w-full h-auto" />
          <h2 className="text-xl font-bold mt-2">{item.title}</h2>
          <h3 className="text-lg font-semibold">₹ {item.price}</h3>
          <button
            onClick={() => handleAddToCart(item)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    {showSuccessMessage && (
      <div className="mt-4 bg-green-200 text-green-800 p-2 rounded">
        Product added successfully!
      </div>
    )}
  </div>
);
}

export default Card;
