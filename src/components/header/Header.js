import React from 'react';
import Connexion from './Connexion';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='header navbar navbar-dark bg-dark'>
            <img src="logo192.png" className="logo" alt=""/>
            <Navigation />
            <Connexion />
        </div>
    );
};

export default Header;