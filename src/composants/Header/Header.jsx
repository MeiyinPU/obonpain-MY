import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
      <img src='src/assets/logo.png' alt='logo.png' style={{width:"20%", height:"5rem"}} className="object-cover"/>
        <NavLink to="/">
          <a className="d-block bg-primary-4 text-white fs-6 no-underline" style={{textDecoration:"none"}}>La Grange de l’Ainan</a>
        </NavLink>
      <div className="d-flex justify-content-evenly bg-primary-2">
        <NavLink to="/accueil" style={{textDecoration:"none"}} className="mt-1 bg.primary-2">
          <a className="primary-3 bg.primary-2 no-underline">Accueil</a>
        </NavLink>

        <NavLink to="/mentions-légales" style={{textDecoration:"none"}} className="mt-1 bg.primary-2"> 
          <a className="primary-3 no-underline">Mentions Légales</a>
        </NavLink>

        <NavLink to="/contact" style={{textDecoration:"none"}} className="mt-1 bg.primary-2">
          <a className="primary-3 no-underline">Contact</a>
        </NavLink>

        <NavLink to="/connexion" style={{textDecoration:"none"}} className="mt-1 bg.primary-2">
          <a className="primary-3 no-underline">Connexion</a>
        </NavLink>
       </div>
      </nav>
    </div>
  );
}
