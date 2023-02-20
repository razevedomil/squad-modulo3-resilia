import './Formulario.css'
import { useState } from 'react'

const Formulario = () => {
    const [form, SetForm] = useState({
        nome: '',
        idade: '',
        whatsapp: '',
        localTatuagem: '',
        tamanhoTatuagem: '',
        arteTatuagem: ''

    })

    const [emptyValues, SetEmptyValue] = useState(false);


    const handleChange = (e) => {
        let newProp = form;
        newProp[e.target.name] = [e.target.value];
        SetForm({ ...newProp })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Verificando se existem campos não preenchidos
        let emptyValues = Object.values(form).some(obj => obj == "");
        SetEmptyValue(emptyValues)

    }

    function enviarMensagem() {
        if (
            form["nome"] != "" ,
            form["whatsapp"] != "" ,
            form["localTatuagem"] != "" ,
            form["tamanhoTatuagem"] != ""
        ) {

            alert("Solicitação enviada! Dentro de 2 dias úteis entraremos em contato.")
        }
    
    }

    return (
        <div className="divPrincipal">

            <form className="form-completo" id="form" onSubmit={(e) => { handleSubmit(e) }}>
                <div className="form1">
                    <label className="nome">Nome</label>
                    <input type="text" placeholder="Nome Sobrenome" name="nome" onBlur={(e) => handleChange(e)} />
                    {emptyValues && form["nome"] == "" ? <span className="emptyText">!</span> : ""}
                    <label className="whatsapp">Whatsapp</label>
                    <input type="text" placeholder="(21) 900000000" name="whatsapp" onBlur={(e) => handleChange(e)} />
                    {emptyValues && form["whatsapp"] == "" ? <span className="emptyText">!</span> : ""}
                </div>

                <div className="form2">
                    <label>Tatuador</label>
                    <select required>
                        <option value="" disabled defaultValue hidden>Escolha um tatuador</option>
                        <option>Lívia (Blackwork)</option>
                        <option>Peter (Realismo)</option>
                        <option>Bárbara (Pontilhismo)</option>
                        <option>Gabriel (Old School)</option>
                        <option>Laura (Lettering)</option>
                        <option>Sávio (Fine Line)</option>
                        <option>Escolha por mim!</option>

                    </select>
                    <label className="localTatuagem">Parte do corpo</label>
                    <input type="text" placeholder="Antebraço" name="localTatuagem" onBlur={(e) => handleChange(e)}></input>
                    {emptyValues && form["localTatuagem"] == "" ? <span className="emptyText">!</span> : ""}
                </div>

                <div className="form3">
                    <label className="tamanhoTatuagem">Tamanho aproximado</label>
                    <input type="text" placeholder="15 cm" name="tamanhoTatuagem" onBlur={(e) => handleChange(e)}></input>
                    {emptyValues && form["tamanhoTatuagem"] == "" ? <span className="emptyText">!</span> : ""}
                    <label for="arquivo" className='enviar'>Enviar arquivo</label>
                    <input type="file" name="arquivo" id="arquivo"></input>
                </div>

                <div className="form4">
                    <label className="mensagem">Mensagem</label>
                    <textarea required cols='45' rows='10' placeholder="Nos conte um pouco mais da sua ideia! Quais aspectos da arte de referência você mais gosta, o que deseja adicionar ou modificar... solta a sua imaginação!"></textarea>

                    <button onClick={enviarMensagem} type="submit" className="botao">Enviar</button>
                </div>


            </form>

        </div>
    )
}


export default Formulario