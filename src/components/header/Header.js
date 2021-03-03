import React from 'react';
import Connexion from './Connexion';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='header'>
            <img src="logo192.png" class="logo" alt=""/>
            <Navigation />
            <Connexion />
        </div>
    );
};

export default Header;