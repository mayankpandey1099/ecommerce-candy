import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/style.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
