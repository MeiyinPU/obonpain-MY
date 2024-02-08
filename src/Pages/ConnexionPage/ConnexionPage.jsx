import React from "react";

export default function ConnexionPage() {
  return (
    <div>
      <h1>Connexion</h1>

      <div>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="username"
            type="email"
            placeholder="Email Address"
          />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="name@example.com"
          />
        </label>
      </div>

      <div>
        <button type="button">Connexion</button>
      </div>

      <div>
        <label htmlFor="remembered">
          Se souvenir de moi
          <input type="checkbox" name="remembered" id="remembered" />
        </label>

        <label htmlFor="forgotten">
          <input type="checkbox" name="forgotten" id="forgotten" />
        </label>
      </div>

      <div>
        <button type="button">Créer un compte</button>
      </div>
    </div>
  );
}
