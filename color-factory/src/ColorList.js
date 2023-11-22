// ColorList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ColorList.css'
const ColorList = ({ colors }) => {
  return (
    <div className="ColorList">
    <div className="ColorList-header">
      <h1>Welcome to Color Factory</h1>
      <button><Link to="/colors/new" >Add New </Link> </button>
    </div>

      <ul>
        {colors.map(color => (
          <li key={color.id}>
            <Link to={`/colors/${color.name}`}>
              {color.name} 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
