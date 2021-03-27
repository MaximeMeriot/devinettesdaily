import React from 'react';
import Header from '../components/header/Header';
import Socials from "../components/Socials";

const MeilleuresDevinettes = () => {
    return (
        <div>
            <Header/>
            <div className="main-content">
                <div className="grid-3">
                    <img src="pub_gauche.png" className="pub_gauche" alt=""/>
                </div>
                <div className="grid-3">
                    <h1>Voici une liste des meilleures devinettes (les mieux notées)</h1>
                </div>
                <div className="grid-3">
                    <Socials/>
                </div>
            </div>
        </div>
    );
};

export default MeilleuresDevinettes;