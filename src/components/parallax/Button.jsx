import "../parallax/Button.css"

function direcionarOrcamento () {
    window.location.href='#form';
}

const Button = () => {
    return(
        <div className="button-banner">
            <button onClick={direcionarOrcamento} type="submit" className="button-banner-btn">TESTE orçamento</button>
        </div>
    )
}

export default Button