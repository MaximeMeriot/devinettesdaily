import React from "react";
import DevinetteDuJour from "../components/DevinetteDuJour";
import Header from "../components/header/Header";
import Socials from "../components/Socials";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="grid-3">
        <img src="pub_gauche.png" className="pub_gauche" alt=""/>
        </div>
        <div className="grid-3">
          <DevinetteDuJour />
        </div>
        <div className="grid-3 p-5">
          <Socials/>
        </div>
      </div>
    </div>
  );
};

export default Home;
