import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

import { dogs, cats } from "./App";

const Nav = () => {
  return (
    <nav className="Navbar">
      <NavLink to="/">Home</NavLink>
      <div className="dropdown">
        <button className="dropbtn">
          <NavLink to="/dogs">Dogs</NavLink>
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          {dogs.map(d => (
            <NavLink key={d.id} to={`/dogs/${d.name}`}>
              {d.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
        <NavLink to="/cats">Cats</NavLink>
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          {cats.map(d => (
            <NavLink key={d.id} to={`/cats/${d.name}`}>
              {d.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
