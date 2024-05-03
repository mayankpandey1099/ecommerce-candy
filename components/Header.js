import React from "react";
import { Link } from "react-router-dom"; 

const Header = () => {
    return (
        <div>
            <ul className="font-bold justify-center">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/store">STORE</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
            <button><Link to="/cart">Cart</Link></button>
        </div>
    );
};

export default Header;
