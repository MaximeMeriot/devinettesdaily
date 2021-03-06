import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="nav-active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/liste-devinettes" activeClassName="nav-active">
            Liste de devinettes
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/meilleures-devinettes" activeClassName="nav-active">
            Les meilleures devinettes
          </NavLink>
        </li>
        <li className="deposit button-style">
          <NavLink exact to="/deposer-une-devinette">
            Déposer une devinette
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
