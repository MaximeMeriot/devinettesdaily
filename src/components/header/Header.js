import React from 'react';
import Connexion from './Connexion';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='header navbar navbar-dark bg-dark'>
            <a href="/">
                <img src="logo_site.png" className="logo" alt=""/>
            </a>
            <Navigation />
            <Connexion />
        </div>
    );
};

export default Header;