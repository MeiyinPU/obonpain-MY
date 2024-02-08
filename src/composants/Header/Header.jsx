import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/">
          <h1>La Grange de l’Ainan</h1>
        </NavLink>

        <NavLink to="/accueil">
          <button>Accueil</button>
        </NavLink>

        <NavLink to="/mentions-légales">
          <button>mentions Légales</button>
        </NavLink>

        {/*  <NavLink to="/gammespain">
          <button>Gammes de pain</button>
        </NavLink> */}

        <NavLink to="/contact">
          <button>Contact</button>
        </NavLink>

        <NavLink to="/connexion">
          <button>Connexion</button>
        </NavLink>
      </nav>
    </div>
  );
}
