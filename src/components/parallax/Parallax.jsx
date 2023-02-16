import "../parallax/Parallax.css"
import Banner from "./Banner"
import Formulario from "../formulario/Formulario"

const MyParallax = () => {
    return(
        <div className="wrapper">
        <main>
            <Banner />
            <Formulario />
        </main>
    </div>
    )
}

export default MyParallax