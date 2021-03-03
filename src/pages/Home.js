import React from "react";
import DevinetteDuJour from "../components/DevinetteDuJour";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="grid-3">test</div>
        <div className="grid-3">
          <DevinetteDuJour />
        </div>
        <div className="grid-3"></div>
      </div>
    </div>
  );
};

export default Home;
