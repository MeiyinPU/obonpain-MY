import React from "react";
import { NavLink } from "react-router-dom";


export default function Footer() {


  return (
  <div>
  
    <nav className="d-flex justify-content-end">
      <NavLink to="/contact" className="me-3">
          <button>Contact</button>
        </NavLink>

       <NavLink to="/mentions-légales">
          <button>Mentions Légales</button>
        </NavLink>
    </nav>
    
  </div>
  )
}


