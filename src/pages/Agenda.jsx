import axios from "axios";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Agenda.css";


const Agenda = () => {
    const [Agenda, setAgenda] = useState([])

    const getAgenda= async() => {
        
    try{

        const response = await axios.get("https://projeto-modulo3-resilia.onrender.com/Agenda/");

        const data = response.data;

        setAgenda(data)
    } catch (error) {
        console.log(error);
    }
    };

    useEffect(() =>{
        getAgenda();
}, []);

    return (

        <div className="Agenda">
            <h1 className="Agenda">Agenda:</h1>
            <div className="Agenda">
            {(Agenda.map((Agend) => (
                <div className="Agend" key={Agend.id}>
                    <img src={Agend.Foto}/>
                    <h2 className="Agend-nome">{Agend.Title}</h2>
                    <p className="Agend-sobre">{Agend.Cidade} - {Agend.Idade} - {Agend.Estilo} </p>
                </div>

            ))
        )}
        </div>
         </div>
    );

};

export default Agenda;