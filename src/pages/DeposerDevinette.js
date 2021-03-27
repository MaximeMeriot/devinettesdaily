import React from 'react';
import Header from '../components/header/Header';
import Socials from '../components/Socials';

const DeposerDevinette = () => {
    return (
        <div>
            <Header/>
            <div className="main-content">
                <div className="grid-3">
                    <img src="pub_gauche.png" className="pub_gauche" alt=""/>
                </div>
                <div className="grid-3">
                    <h1 className="center">Remplissez les deux champs ci-dessous pour nous envoyer votre devinette</h1>
                    <form className="form-new-joke">
                    <div>
                        <label>
                            Devinette :
                        </label> 
                        <textarea type="text" name="joke" className="form-input"/>
                    </div>
                    <div>
                        <label>
                            Réponse :
                        </label>
                        <textarea type="text" name="answer" className="form-input"/>
                    </div>
                    <div>
                      <button type="submit" className="button-style send-new-joke">Envoyer</button>
                    </div>
                    </form>
                </div>
                <div className="grid-3">
                    <Socials/>
                </div>
            </div>
        </div>
    );
};

export default DeposerDevinette;