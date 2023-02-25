import axios from "axios";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
    const [Tatuadores, setTatuadores] = useState([])

    const getTatuadores= async() => {
        
    try{

        const response = await axios.get("https://projeto-modulo3-resilia.onrender.com/Tatuadores/");

        const data = response.data;

        setTatuadores(data)
    } catch (error) {
        console.log(error);
    }
    };

    useEffect(() =>{
        getTatuadores();
}, []);

    return (
        <div>
            <h1>Tatuadores :</h1>
            {(Tatuadores.map((Tatuador) => (
                <div className="Tatuador" key={Tatuador.id}>
                    <h2>{Tatuador.Nome}</h2>
                    <p>{Tatuador.Cidade} - {Tatuador.Idade} anos - {Tatuador.Estilo} </p>
                </div>
            ))
        )}
        </div>
    );

};

export default Home;