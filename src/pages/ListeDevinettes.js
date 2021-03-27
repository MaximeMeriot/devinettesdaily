import React, { useState, useEffect, Fragment } from "react";
import Header from '../components/header/Header';
import Navigation from '../components/header/Navigation';
import axios from "axios";
import Socials from "../components/Socials";

const ListeDevinettes = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
    }
    
      const [data, setData] = useState([]);
      const [answer, setAnswer] = useState(false);
    
      useEffect(() => {
        axios.get("blagues.json").then((res) => {
          setData(shuffle(res.data));
        });
      }, []);
    
      return (
        <Fragment><Header/>
        <div className="main-content">
        <div className="grid-3">
          <img src="pub_gauche.png" className="pub_gauche" alt=""/>
        </div>
        <div className="grid-3">
          {data && data.length > 0 && (
              data.map((value, index) => {
                  return (index < 10 ? 
            <div className="devinette" data-id="">
              <img src="papyrus.png" className="papyrus" alt="" />
              <div className="papyrus-text absolute-center">
                <p className="text absolute-center">{value.joke}</p>
                {answer && (
                  <p className="answer-text absolute-center">
                    {"Réponse : " + value.answer}
                  </p>
                )}
                <button
                  className="answer-button absolute-center"
                  onClick={() => {
                    setAnswer(true);
                  }}
                >
                  Voir la réponse
                </button>
              </div></div>:<Fragment></Fragment>
                  )
              })
              
          )}
        </div>
        <div className="grid-3">
        <Socials/>
        </div>
        </div>
    </Fragment>
      );
};

export default ListeDevinettes;