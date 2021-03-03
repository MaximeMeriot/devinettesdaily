import React from 'react';
import Header from '../components/header/Header';
import Navigation from '../components/header/Navigation';

function goBack() {
    window.history.back();
}

const NotFound = () => {
    return (
        <div>
            <Header />
            <h1>Erreur 404</h1>
            <h2>La page que vous avez tenté d'atteindre n'a pas été trouvée...</h2>
            <button onClick={goBack}>Revenir en arrière</button>
        </div>
    );
};

export default NotFound;