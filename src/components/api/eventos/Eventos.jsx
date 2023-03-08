import axios from "axios";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./Eventos.css";

const Eventos = () => {
    const [Eventos, setEventos] = useState([])

    const getEventos= async() => {
        
    try{

        const response = await axios.get("https://api2-modulo3.onrender.com/Eventos");

        const data = response.data;

        setEventos(data)
    } catch (error) {
        console.log(error);
    }
    };

    useEffect(() =>{
        getEventos();
}, []);

    return (
        <div className="blog">
            <h1 className="Eventos">Eventos:</h1>
            <div className="blogEventos">
            {(Eventos.map((Evento) => (
                <div className="Evento" key={Evento.id}>
                    <img src={Evento.foto} className="fotoEvento"/>
                    <p className="evento-nome">{Evento.nome}</p>
                    <p className="evento-data">{Evento.data} - {Evento.bairro}</p>
                </div>
   
            ))
        )}
        </div>
         </div>
        

    );
};

export default Eventos;
