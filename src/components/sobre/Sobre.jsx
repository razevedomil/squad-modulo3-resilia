import './Sobre.css'

const Sobre = () => {
    return (
        <div className="sobrePrincipal">
            <div className="sobreTxt">
                <h1>O lugar onde arte, criatividade e autoexpressão se encontram.</h1>
                <p>
                    Nosso estúdio foi criado em 2023, mas foi pensado e elaborado muito antes disso.
                    formado por um grupo de 6 amigos que se conheceram em um evento 
                    de tatuagem em 2018, o Arteiro Tattoo Studio já existia no papel desde 2020.
                    Durante esse tempo, foram reunidas todas as ideias, comprados os móveis e 
                    escolhido o melhor local e imóvel para o estúdio. A ideia saiu do papel 
                    no final de 2022 e em janeiro de 2023 foi oficialmente inaugurado.
                </p>
            </div>

            <div className="cards">

            <div className="sobreCard">
            <img src="https://img.freepik.com/free-vector/snake-entwined-with-skull-colorful-concept_225004-1366.jpg?w=740&t=st=1677776691~exp=1677777291~hmac=0467e94476dbc5cdcf0bb13291d065b33fffea5a18909c6b3e7490f8cbf07080" alt="" />
            <h2>Artes exclusivas para cada cliente </h2>
            </div>

            <div className="sobreCard">
            <img src="https://img.freepik.com/free-vector/vintage-colorful-flying-death-head-moth_225004-1357.jpg?w=740&t=st=1677776665~exp=1677777265~hmac=70156cfde47497554ff4bd6fc1aa87d02422931577b5fa5706e27c322cb7296c" alt="" />
            <h2>Cobertura de tattoos indesejadas</h2>
            </div>

            <div className="sobreCard">
            <img src="https://img.freepik.com/free-vector/colorful-flying-swallow-template_225004-1531.jpg?w=740&t=st=1677777101~exp=1677777701~hmac=8c5190b07df7f7f54c5bb99b05fcbc93ccd4a297f14e63b3ff5387615c79985c" alt="" />
            <h2>Reformas de tatuagens antigas</h2>
            </div>

            </div>
            
        </div>
    )
}

export default Sobre