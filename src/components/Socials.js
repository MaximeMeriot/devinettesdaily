import React from 'react';

const Socials = () => {
    return (
        <div className="socials-grid">
            <h1 className="join-us center">
                Rejoignez-nous sur les réseaux sociaux ! 
            </h1>
            <h2 className="join-us center">
                Une publication par jour pour vous divertir
            </h2>
            <div className="flex-socials">
                <button className="button-sn">
                    <a href="https://www.twitter.com">
                    <img src="twitter_logo.png" alt="Twitter" className="logo-sn"></img>
                    </a>
                </button>
                <button className="button-sn">
                    <a href="https://www.instagram.com">
                    <img src="instagram_logo.png" alt="Twitter" className="logo-sn"></img>
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Socials;