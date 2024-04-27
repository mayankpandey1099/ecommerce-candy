import React from "react";
import AddCandyForm from "./AddCandyForm";
import CandyQuantity from "./CandyQuantity";
import ShoppingCart from "./ShoppingCart";
import { CandyProvider } from "./CandyContext";

const App = () => {
  return (
    <CandyProvider>
      <div className="container">
        <header>
          <h1>Candy Shop</h1>
        </header>
        <div className="content">
          <div className="middle-box">
            <AddCandyForm />
          </div>
          <div className="side-box">
            <CandyQuantity />
          </div>
          <div className="side-box">
            <ShoppingCart />
          </div>
        </div>
        <footer>
          <p>&copy; 2024 Candy Shop</p>
        </footer>
      </div>
    </CandyProvider>
  );
};

export default App;
