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
            <div className="tatList">
            {(Tatuadores.map((Tatuador) => (
                <div className="Tatuador" key={Tatuador.id}>
                    <img src={Tatuador.Foto}/>
                    <h2 className="tatuador-nome">{Tatuador.Nome}</h2>
                    <p className="tatuador-sobre">{Tatuador.Cidade} - {Tatuador.Idade} anos - {Tatuador.Estilo} </p>
                </div>

            ))
        )}
        </div>
         </div>
    );

};

const data = {
    // Objeto com os dados que deseja enviar no POST
  };
  
  axios.post('https://projeto-modulo3-resilia.onrender.com/Tatuadores/2/', data)
    .then((response) => {
      // Tratar a resposta do servidor em caso de sucesso
    })
    .catch((error) => {
      // Tratar a resposta do servidor em caso de erro
    });

axios.delete('https://projeto-modulo3-resilia.onrender.com/Tatuadores/')
  .then((response) => {
    // Tratar a resposta do servidor em caso de sucesso
  })
  .catch((error) => {
    // Tratar a resposta do servidor em caso de erro
  });

export default Api;