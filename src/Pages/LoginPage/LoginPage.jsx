import React from "react";
import Header from "../../composants/Header/Header.jsx";
import Footer from "../../composants/Footer/Footer.jsx";



export default function LoginPage() {
  return (

    <>
    <Header />
    <div className="border border-sucess p-6 mb-5 d-block m-auto">
      <h3>Connexion</h3>
      <div className="d-flex flex-column align-items-end mt-5">
      
       <div className="mb-2">
        <label htmlFor="email" >
          Email
          <input
            className="ms-2 fs-6"
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
          />
        </label>
      </div>

      <div className="mb-2">
        <label htmlFor="password">
          Password
          <input
            className="ms-2 fs-6"
            type="password"
            name="password"
            id="password"
            placeholder="mot de passe"
          />
        </label>
      </div>
     </div>

      <div>
        <button type="button" className="btn btn-primary mt-3">Connexion</button>
      </div>

      <div className="login-input d-flex flex-column">
       <div>
        <input type="checkbox" name="rememberMe" id="rememberMe" />
        <label htmlFor="rememberMe" className="ms-2 mt-3"  style={{fontSize:"0.8rem"}}>
          Se souvenir de moi
        </label>
       </div>

       <div>
        <button type="button" className="btn btn-outline-secondary mt-5"  style={{fontSize:"0.8rem"}}> Mot de passe oublié</button>
      </div>
     
      </div>

      <div>
        <button type="button" className="btn btn-primary mt-3">Créer un compte</button>
      </div>
    </div>
    <Footer />
    </>
  );
}
