import axios from "axios";
import { useState, useEffect } from "react";
import "./Cuidados.css"

const Cuidados = () => {
    const [Cuidados, setCuidados] = useState([])

    const getCuidados= async() => {
        
    try{

        const response = await axios.get("https://api2-modulo3.onrender.com/Cuidados");

        const data = response.data;

        setCuidados(data)
    } catch (error) {
        console.log(error);
    }
    };

    useEffect(() =>{
        getCuidados();
}, []);

    return (
        <div className="cuidados">
            <h1 className="Cuidados">Cuidados:</h1>
            <div className="blogCuidados">
            {(Cuidados.map((Cuidado) => (
                <div className="Cuidado" key={Cuidado.id}>
                    <h2 className="cuidado-nome">{Cuidado.Cuidado}</h2>
                    <p className="cuidado-sobre">{Cuidado.descricao}</p>
                </div>
   
            ))
        )}
        </div>
         </div>
        

    );
};

export default Cuidados;
