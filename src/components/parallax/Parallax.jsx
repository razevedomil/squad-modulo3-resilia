import "../parallax/Parallax.css"
import Formulario from "../formulario/Formulario"
import Api from "../api/Api"

const MyParallax = () => {
    return(
        <div className="wrapper">
            <Formulario />
            <Api />
    </div>
    )
}

export default MyParallax