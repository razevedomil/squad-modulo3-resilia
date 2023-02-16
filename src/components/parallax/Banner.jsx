import "../parallax/Banner.css"
import Button from "./Button"
import NavBar from "../nav/NavBar"

const Banner = () => {

    return(
        <div>
                <section className="module parallax parallax-1">
                    <h1 className="focus-in-contract-bck">arteiro estudio</h1>
                    <Button/>
                </section>
                <section className="module content">
                    <div className="container">
                        <h2>testeeeeeeeeeeeeeeeeeeee</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero exercitationem deleniti aperiam rerum. Nemo totam modi sed cumque atque nobis quia quo, aliquid velit, voluptas aspernatur id dolorum accusantium.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, beatae sed labore cupiditate, repellat porro iure aut quidem eligendi amet cumque vel mollitia delectus dolor. Quae rerum nisi eum nulla.
                        </p>
                    </div>
                </section>
        </div>
    
    )
}

export default Banner

