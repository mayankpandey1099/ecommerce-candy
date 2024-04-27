import React, { useState, useContext } from "react";
import { CandyContext } from "./CandyContext";

const AddCandyForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { addCandy } = useContext(CandyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCandy({ name, price, description });
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="add-candy-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Candy</button>
      </form>
    </div>
  );
};

export default AddCandyForm;
