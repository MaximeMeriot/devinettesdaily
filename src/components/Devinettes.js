import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Rate from "./Rate";

const Devinettes = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const [data, setData] = useState([]);
  const [answer, setAnswer] = useState(false);
  const [numberData, setNumberData] = useState(1);
  const [current, setCurrent] = useState(Math.random(0));

  useEffect(() => {
    axios.get("blagues.json").then((res) => {
      setData(res.data);
      //   setCurrent(getRandomInt(res.data.length));
      setCurrent(0);
    });
  }, []);

  return (
    <div className="devinette" data-id="">
      {data[current] && (
        <Fragment>
          <img src="papyrus.png" className="papyrus" alt="" />
          <div className="papyrus-text absolute-center">
            <p className="text absolute-center bold">{data[current].joke}</p>
            {answer && (
              <p className="answer-text absolute-center bold">
                {"Réponse : " + data[current].answer}
              </p>
            )}
            <button
              className="answer-button button-style absolute-center bold"
              onClick={() => {
                setAnswer(true);
              }}
            >
              Voir la réponse
            </button>
          </div>
          <div className="flex-center">
            <div className="rate-container"><Rate rates={data[current].rate} /></div>
          </div>
          
        </Fragment>
      )}
    </div>
  );
};

export default Devinettes;
