import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const productsArr = [
  {
    id:1,
    title: "Mixed Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {id:2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {id:3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {id:4,
    title: "Blue Color",
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
    <div className="grid grid-cols-2 gap-4">
      {productsArr.map((item) => (
        <div key={item.id} className="border p-4 shadow-md">
          <img src={item.imageUrl} alt="img" className="w-full mb-2" />
          <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
          <h3 className="text-gray-700 mb-2">₹ {item.price}</h3>
          <button
            onClick={() => handleAddToCart(item)}
            className="bg-blue-500 text-white px-4 py-2 rounded block mx-auto"
          >
            Add to Cart
          </button>
        </div>
      ))}
      {showSuccessMessage && (
        <div className="bg-green-500 text-white px-4 py-2 rounded absolute bottom-0 left-0 right-0 mx-auto mb-4">
          Product added successfully!
        </div>
      )}
    </div>
  );
};


export default Card;
