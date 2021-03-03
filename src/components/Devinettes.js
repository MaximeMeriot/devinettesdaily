import React, {useState, useEffect} from 'react';
import axios from 'axios';

function showAnswer() {

}

const Devinettes = () => {
    
    const [data, setData] = useState([]);
    const [numberData, setNumberData] = useState(1);

    useEffect(() => {
        axios.get('blagues.json').then((res) => {
            setData(res.data);
        });
    }, []);

    return (
        <div className="devinette" data-id="">
            <img src="papyrus.png" class="papyrus" alt="" />
            <div className="papyrus-text">
                {data.map((donnees) => (
                    <p className="text">{ donnees.joke }</p>
                ))}
                <button className="answer" onClick={showAnswer()}>Voir la réponse</button>
            </div>

        </div>
    );
};

export default Devinettes;