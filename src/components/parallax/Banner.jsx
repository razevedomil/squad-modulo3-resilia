import "../parallax/Banner.css"
import Button from "./Button"


const Banner = () => {

    return(
        <div>
                <section className="module parallax parallax-1">
                    <h1 className="fundo1">Tattoos</h1>
                    <h1 className="fundo2">& Piercings</h1>
                    <h4 className="fundo3">Expert Tattoos & Piercings</h4>
                    <h6 className="fundo4">Arteiro Tattoo</h6><span className="effect"></span>
                    
                    <Button/>
                </section>
        </div>
    
    )
}

export default Banner

