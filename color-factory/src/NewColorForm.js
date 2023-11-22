// NewColorForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./NewColorForm.css"
const NewColorForm = ({ addColor }) => {
  const [colorName, setColorName] = useState('');
  const [colorHex, setColorHex] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newColor = { name: colorName, hex: colorHex, id: Date.now().toString() };
    addColor(newColor);
    // After adding the color, navigate to the '/colors' path
    navigate('/colors');
  };

  return (
    <div className="NewColorForm">
      <h1>Add Color</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={colorName} onChange={e => setColorName(e.target.value)} />
        </label> <br/><br/>
        <label>
          Color:
          <input type="color" value={colorHex} onChange={e => setColorHex(e.target.value)} />
        </label><br/><br/>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;
