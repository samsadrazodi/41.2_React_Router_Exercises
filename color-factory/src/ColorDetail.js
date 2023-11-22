// ColorDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ColorDetail.css';


const ColorDetail = ({ colors }) => {
  const { color } = useParams();
  const selectedColor = colors.find(c => c.name === color); // Find the color by name

  if (!selectedColor) {
    // Handle color not found (optional)
    return <div>Color not found</div>;
  }

  return (
    <div className="Color" style={{ backgroundColor: selectedColor.hex}}>
      <h1>{selectedColor.name}</h1>
        <button><Link to="/colors" >Go Back</Link></button>
    </div>
  );
};

export default ColorDetail;
