import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Header from "../../composants/Header/Header.jsx";
import Footer from "../../composants/Footer/Footer.jsx";


export default function LoginPage() {


let navigate = useNavigate();
const [credentials, setCredentials] = useState({

  email: 'Email',
  password: 'mot de passe'
})

const onChange = (e)=> {

setCredentials({

...credentials,
[e.target.name]:e.target.value
})

}

const onSubmit = (e)=>{
  e.preventDefault();
  console.log(credentials);

axios.post('http://localhost:3000/users', credentials)
    .then(res => {
      console.log(res)
      navigate('/')
    })

    .catch(error => console.log(error))

// try GET method
axios.get('http://localhost:3000/users?id=f55f')
  .then(res=> {
    console.log(res);
    console.log(res.data);
  })
  .catch(error => console.log(error))

 }

  return (
    <>
    <Header />
    <form onSubmit={onSubmit} className="mt-1">
      <div className="border border-sucess p-6 mb-5 d-block m-auto bg-primary-1">
      <h3 style={{fontSize:"2.5rem"}}>Connexion</h3>
      <div className="d-flex flex-column mt-5">
       <div className="mb-3">
        <label htmlFor="email">


         <i className="bi bi-envelope-fill me-2"></i>
          <input
            className="ms-2 fs-6 border border-0 rounded-4"
            style={{width:"25vw"}}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={onChange}
            required
          />
        </label>
      </div>

      <div className="mb-2">
        <label htmlFor="password">
          <i className="bi bi-lock-fill me-2"></i>
          <input
            className="ms-2 fs-6 border border-0 rounded-4"
            style={{width:"25vw"}}
            type="password"
            name="password"
            id="password"
            placeholder="mot de passe"
            value={credentials.password}
            onChange={onChange}
            required
          />
        </label>
      </div>
     </div>

      <div className="login-input d-flex justify-content-evenly">
       <div>
        <input type="checkbox" name="rememberMe" id="rememberMe" />
        <label htmlFor="rememberMe" className="mt-3 ms-2 me-2"  style={{fontSize:"1rem"}}>
          Se souvenir de moi
        </label>
       </div>
        <div className="mt-3 ms-2 me-2">
        <a href="#" className="fs-6 no-underline primary-3"> Mot de passe oublié ?</a>
        </div>
      </div>
        <button type="submit" className="btn btn-primary-4 mt-6 shadow-sm">Connexion</button>
      <div className="mt-5">
        <p>Pas de compte?<a href="#" className="primary-4 ms-2">Créer un compte</a></p>
      </div>
    </div>
    </form>
    <Footer />
    </>
  );
}