import "../parallax/Parallax.css"
import Banner from "./Banner"
import Formulario from "../formulario/Formulario"
import Footer from "../footer/Footer"
import Home from "../api/Home"

const MyParallax = () => {
    return(
        <div className="wrapper">
        <main>
            <Formulario />
            <Home />
            
        </main>
        
    </div>
    )
}

export default MyParallax