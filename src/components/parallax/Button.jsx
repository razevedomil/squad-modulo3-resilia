import "../parallax/Button.css"

//função que direciona para o formulário da página
function direcionarOrcamento () {
    window.location.href='#form';
}

const Button = () => {
    return(
        <div className="button">
        <button onClick={direcionarOrcamento} class="cssbuttons-io-button"> Contato
          <div class="icon">
             <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
          </div>
       </button>
    </div>
    )
}

export default Button