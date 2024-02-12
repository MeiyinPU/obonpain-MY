import React from "react";
import { NavLink } from "react-router-dom";


export default function Footer() {


  return (
  <div>
    <nav className="d-flex justify-content-end bg-primary-4">
      <NavLink to="/contact" style={{textDecoration:"none"}} className="me-3 bg.primary-2">
          <a className="primary-4 no-underline text-white">Contact</a>
        </NavLink>

       <NavLink to="/mentions-légales" style={{textDecoration:"none"}} className="me-3 bg.primary-2 placeholder-glow">
          <a className="primary-4 no-underline text-white">Mentions Légales</a>
        </NavLink>
    </nav>
  
  </div>
  )
}


