import './Sobre.css'

const Sobre = () => {
    return (
        <div className='sobre-1'>
            <div className='sobre-2'><h1 className='titulo-tatoo'>SOBRE</h1></div>
            <div className='sobre-3'>
                <p className='sobre-paragrafo primeiro-letter'>O Arteiro Studio é um estúdio de tatuagem recém-criado em 2023, na cidade do Rio de Janeiro. Fundado por um grupo de jovens tatuadores apaixonados pela arte corporal, o estúdio é um espaço acolhedor e vibrante, que oferece serviços de alta qualidade em um ambiente descontraído e amigável.Com um olhar sempre atento às novas tendências e técnicas de tatuagem, os tatuadores do Arteiro Studio estão em constante evolução e aprimoramento de suas habilidades. Eles são altamente qualificados e experientes em uma ampla variedade de estilos, desde tradicionais até os mais contemporâneos, como aquarela, pontilhismo e realismo.</p>
                <p className='sobre-paragrafo'>Além disso, a equipe do Arteiro Studio tem um compromisso inabalável com a higiene e a segurança de seus clientes. Eles seguem rigorosamente todas as normas sanitárias e utilizam apenas materiais de alta qualidade e esterilizados.</p>
                <p className='sobre-paragrafo'>O estúdio também é conhecido por sua abordagem personalizada e atenta aos desejos e necessidades de cada cliente. Os tatuadores trabalham em estreita colaboração com seus clientes, desde a concepção da tatuagem até a sua execução, garantindo que o resultado final seja exatamente o que o cliente esperava.</p>
                <p className='sobre-paragrafo'>O Arteiro Studio é muito mais do que um simples estúdio de tatuagem. É um espaço onde os clientes podem se sentir confortáveis e bem-vindos, onde podem compartilhar suas ideias e projetos com profissionais altamente qualificados e apaixonados pela arte corporal.</p>
                <p className='sobre-paragrafo'>Se você estiver procurando por uma experiência única e personalizada em tatuagem, o Arteiro Studio é o lugar certo para você. Abaixo você encontra os tipos de serviços:</p>

                 <div className='card-sobre'>
                    <div className='card-sobre-img'><h1 className='card-sobre-txt'>Blackwork</h1></div>
                    <div className='card-sobre-img'><h1 className='card-sobre-txt'>Realismo</h1></div>
                    <div className='card-sobre-img'><h1 className='card-sobre-txt'>Pontilhismo</h1></div>
                    <div className='card-sobre-img'><h1 className='card-sobre-txt'>Old School</h1></div>
                    <div className='card-sobre-img'><h1 className='card-sobre-txt'>Lettering</h1></div>
                    <div className='card-sobre-img'><h1 className='card-sobre-txt'>Fine Line</h1></div>
                 
                </div>
            </div>
        </div>
    )
}

export default Sobre