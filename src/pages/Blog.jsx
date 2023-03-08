import axios from "axios";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./Blog.css"
import Eventos from "../components/api/eventos/Eventos";
import Cuidados from "../components/api/cuidados/Cuidados";

const Blog = () => {
    const [Estilos, setEstilos] = useState([])

    const getEstilos= async() => {
        
    try{

        const response = await axios.get("https://api2-modulo3.onrender.com/Estilos");

        const data = response.data;

        setEstilos(data)
    } catch (error) {
        console.log(error);
    }
    };

    useEffect(() =>{
        getEstilos();
}, []);

    return (
        <div className="blog">
        <Cuidados/>
            <h1 className="Estilos">Estilos:</h1>
            <div className="blogEstilos">
            {(Estilos.map((Estilo) => (
                <div className="Estilo" key={Estilo.id}>
                    <h2 className="estilo-nome">{Estilo.estilo}</h2>
                    <p className="estilo-sobre">{Estilo.descricao}</p>
                </div>
   
            ))
        )}
        </div>
        <Eventos />
         </div>
        

    );
};

export default Blog;
