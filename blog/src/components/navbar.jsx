import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" activeClassName="active">
            Accueil
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/categorie">
            Categorie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
