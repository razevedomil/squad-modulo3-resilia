import axios from "axios";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Api.css";

const Api = () => {
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
        <div className="Api-site">
            <h1 className="Tatuadores">Tatuadores:</h1>
            {(Tatuadores.map((Tatuador) => (
                <div className="Tatuador" key={Tatuador.id}>
                    <h2 className="tatuador-nome">{Tatuador.Nome}</h2>
                    <p className="tatuador-sobre">{Tatuador.Cidade} - {Tatuador.Idade} anos - {Tatuador.Estilo} </p>
                </div>
            ))
        )}
        </div>
    );

};

export default Api;