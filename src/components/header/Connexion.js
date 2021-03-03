import React from "react";

const Connexion = () => {
  return (
    <div className="connexion">
      <ul>
        <li>
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input type="text" placeholder="Pseudo" name="" id="username" />
        </li>
        <li>
          <label htmlFor="password">Mot de passe :</label>
          <input type="text" placeholder="Mot de passe" name="" id="password" />
        </li>
      </ul>
    </div>
  );
};

export default Connexion;
