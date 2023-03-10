import axios from "axios";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Agenda.css";

function Formulario() {
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // código para enviar os dados para a API
      const response = await fetch('sua-api.com/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ opcaoSelecionada })
      });
  
      // código para lidar com a resposta da API
      const data = await response.json();
      console.log(data);
    }

}

const Agenda = () => {
    const [Agenda, setAgenda] = useState([])

    const getAgenda= async() => {
        
    try{

        const response = await axios.get("https://testejson-zm4l.onrender.com/Agenda");

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

        <div className="Agenda1">
            <h1 className="Agenda">Agenda:</h1>
            <div className="Agenda">
            {(Agenda.map((Agend) => (
                <div className="Agend" key={Agend.id}>
                    <h2 className="Agend-Dia">{Agend.Dia}</h2>
                    <p className="Agend-Status">{Agend.Status}</p>
                    <p className="Agend-Horario">{Agend.Horário}</p>
                    <p className="Agend-Tatuador">{Agend.Tatuador}</p>
                </div>
            ))
        )}
        </div>
        <div className="Marcar-Horario">
        <h1 className="Horario">Marcar Horário:</h1>
        <div className="form2">
        <form id="myForm" onsubmit="return validarFormulario()">
                    <label for="opcoes">Dia: </label>
                    <select id="opcoes" name="opcoes" required className='input'>
                        <option value="" hidden>Escolha um dia</option>
                        <option>Segunda </option>
                        <option>Terça </option>
                        <option>Quarta </option>
                        <option>Quinta </option>
                        <option>Sexta </option>
                    </select>
                    <label>Horário: </label>
                    <select required className='input'>
                        <option value="" hidden>Escolha um horário</option>
                        <option>Manhã </option>
                        <option>Tarde </option>
                        <option>Noite </option>
                    </select>
                    <label>Tatuador: </label>
                    <select required className='input'>
                        <option value="" hidden>Escolha um tatuador</option>
                        <option>Lívia (Blackwork)</option>
                        <option>Peter (Realismo)</option>
                        <option>Bárbara (Pontilhismo)</option>
                        <option>Gabriel (Old School)</option>
                        <option>Laura (Lettering)</option>
                        <option>Sávio (Fine Line)</option>
                        <option>Escolha por mim!</option>
                    </select>
                    <input name="marcar" type="submit" value="Enviar" />
                </form>
        </div>
        </div>
        </div>
         
    );

};

export default Agenda;