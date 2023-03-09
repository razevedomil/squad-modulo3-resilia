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
            <h1>Cuidados:</h1>
            <div className="blogCuidados">
            {(Cuidados.map((Cuidado) => (
                <div className="Cuidado" key={Cuidado.id}>
                    <p className="cuidado-descricao">• {Cuidado.descricao}</p>
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
  
  axios.post('https://projeto-modulo3-resilia.onrender.com/Cuidados/2/', data)
    .then((response) => {
      // Tratar a resposta do servidor em caso de sucesso
    })
    .catch((error) => {
      // Tratar a resposta do servidor em caso de erro
    });

axios.delete('https://projeto-modulo3-resilia.onrender.com/Cuidados/')
  .then((response) => {
    // Tratar a resposta do servidor em caso de sucesso
  })
  .catch((error) => {
    // Tratar a resposta do servidor em caso de erro
  });


export default Cuidados;
