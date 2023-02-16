import './formulario.css'
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
    return (
        <div className="divPrincipal">

            <form className="form-completo" onSubmit={(e) => { handleSubmit(e) }}>
                <div className="formH1"><h1>Formulário de Orçamento</h1></div>
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
                        <option value="" disabled selected hidden>Escolha um tatuador</option>
                        <option>Lívia (Blackwork)</option>
                        <option>Peter (Realismo)</option>
                        <option>Bárbara (Pontilhismo)</option>
                        <option>Gabriel (Old School)</option>
                        <option>Laura (Lettering)</option>
                        <option>Sávio (Fine Line)</option>
                        <option>Escolha por mim!</option>

                    </select>
                    <label className="localTatuagem">Parte do corpo</label>
                    <input type="text" placeholder="Antebraço" name="localTatuagem"></input>
                    {emptyValues && form["localTatuagem"] == "" ? <span className="emptyText">!</span> : ""}
                </div>

                <div className="form3">
                    <label className="tamanhoTatuagem">Tamanho aproximado</label>
                    <input type="text" placeholder="15 cm" name="tamanhoTatuagem"></input>
                    {emptyValues && form["tamanhoTatuagem"] == "" ? <span className="emptyText">!</span> : ""}
                    <label className="arteTatuagem">Referência:</label>
                    <input type="file"  className="input-file" accept="image/*" required></input>
                </div>

                <div className="form4">
                    <label className="mensagem">Mensagem</label>
                    <textarea required cols='45' rows='10' placeholder="Nos conte um pouco mais da sua ideia! Quais aspectos da arte de referência você mais gosta, o que deseja adicionar ou modificar... solta a sua imaginação!"></textarea>


                    <button type="submit" className="botao">Enviar</button>
                </div>
            </form>

        </div>
    )
}



export default Formulario