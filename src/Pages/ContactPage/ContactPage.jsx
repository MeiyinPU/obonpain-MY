import React from "react";
import Header from "../../composants/Header/Header.jsx";
import Footer from "../../composants/Footer/Footer.jsx";


export default function ContactPage() {
  return (
    <>
    <Header />
<div className="d-flex justify-content-between">
    <section className="mt-3">
    <h6>Formulaire de contact :</h6>
      <div className="input-group input-group-sm mt-2 mb-3">
        <input type="text" className="form-control bg-light" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Votre Nom" />
      </div>

      <div className="input-group input-group-sm mb-3">
        <input type="text" className="form-control bg-light" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Votre Prénom" />
      </div>

      <div className="input-group input-group-sm mb-3">
        <input type="text" className="form-control bg-light" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Votre Email"/>
      </div>

      <div className="input-group input-group-sm mb-3">
        <input type="text" className="form-control bg-light" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Votre Téléphone"/>
      </div>

      <div className="input-group mb-3">
        <textarea className="form-control bg-light bg-light" aria-label="With textarea" placeholder="Votre message..."></textarea>
      </div>
    </section>
    
    <section className="mt-3">
      <div className="mt-4">        
        <ul className="d-flex flex-column align-items-start" style={{listStyleType:"none"}}>
          <li className="mb-2"><i className="bi bi-person-fill me-2"></i>Nom de l'artisan</li>
          <li className="mb-2"><i className="bi bi-house-fill me-2"></i>Adresse du fournil 38 000 ville</li>
          <li className="mb-2"><i className="bi bi-envelope me-2"></i>Email</li>
          <li><i className="bi bi-telephone-fill me-2"></i>Téléphone</li>
    
        </ul>  
        <div>
          <button type="button" className="btn btn-primary mt-4">Envoyer</button>
        </div>
      </div>
    </section>
</div>
    <Footer />
    </>
  )
  
  
  
  
}
