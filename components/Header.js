import React from "react";
import { Link } from "react-router-dom"; 
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div
      className="bg-gray-100 p-4 border-b-2 border-gray-300 shadow-md flex justify-between items-center">
      <ul className="font-bold flex gap-4 justify-center left-0 right-0">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/store">STORE</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
        <Link to="/cart">
          <FaShoppingCart className="mr-2" /> Cart
        </Link>
      </button>
    </div>
  );
};

export default Header;
