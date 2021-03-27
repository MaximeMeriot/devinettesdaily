import React from "react";

const Connexion = () => {
  return (
    <div className="connexion">
      <ul>
        <li className="flex connexion-div">
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input type="text" placeholder="Pseudo" name="" id="username" />
        </li>
        <li className="flex connexion-div">
          <label htmlFor="password">Mot de passe :</label>
          <input type="text" placeholder="Mot de passe" name="" id="password" />
        </li>
      </ul>
      <div className="flex connexion-div">
        <button className="button-style button-connexion">Connexion</button>
      </div>
    </div>
  );
};

export default Connexion;
