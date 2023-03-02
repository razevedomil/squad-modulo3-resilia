import "../parallax/Parallax.css"
import Formulario from "../formulario/Formulario"
import Api from "../api/Api"
import Sobre from "../sobre/Sobre"

const MyParallax = () => {
    return(
        <div className="wrapper">
            <Sobre />
            <Formulario />
            <Api />
    </div>
    )
}

export default MyParallax