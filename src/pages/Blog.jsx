import "./Blog.css"

const Blog = () => {
    return (
        <section className="blog">
            <div className="cuidados">
                <h1 className="blogTitulo">Cuidados com a tatuagem</h1>
                <ul className="cuidadosList">
                    <li className="cuidadosItem">
                        Mantenha a área limpa: A área da tatuagem deve ser mantida limpa e seca para evitar a contaminação por bactérias e infecções. Lave suavemente com sabão neutro. Seque com uma toalha limpa e macia.
                    </li>
                    <li className="cuidadosItem">
                        Hidrate a pele: Mantenha a área da tatuagem hidratada para ajudar a prevenir a descamação e a perda de cor. Use uma loção hidratante sem fragrância ou álcool.
                    </li>
                    <li className="cuidadosItem">
                        Proteja do sol: A exposição ao sol pode desbotar a tatuagem e causar danos à pele. Use protetor solar com um fator de proteção solar (FPS) de pelo menos 30 e evite expor a tatuagem ao sol durante as primeiras semanas de cicatrização.
                    </li>
                </ul>
            </div>
            <div className="estilos">
                <h1 className="blogTitulo">Estilos de tatugem</h1>
                <h2 className="blogH2">Blackwork</h2>
                <p className="estilosItem">
                    Este estilo de tatuagem é conhecido por usar apenas tinta preta em desenhos geométricos ou padrões abstratos. É uma técnica minimalista que usa linhas grossas e áreas sólidas para criar designs marcantes.
                </p>
                <h2 className="blogH2">Realismo</h2>
                <p className="estilosItem">
                    Como o nome sugere, este estilo de tatuagem se concentra em criar uma imagem realista de uma pessoa, objeto ou animal. O artista usa técnicas avançadas de sombreamento e cores para dar a ilusão de profundidade e dimensão.</p>
                <h2 className="blogH2">Pontilhismo</h2>
                <p className="estilosItem">
                    Também conhecido como tatuagem de pontos, este estilo de tatuagem envolve a criação de uma imagem usando apenas pontos pequenos e precisos. Os artistas usam diferentes tamanhos de pontos para criar sombras e tons em um design."
                </p>
                <h2 className="blogH2">Old School</h2>
                <p className="estilosItem">
                    Este estilo de tatuagem tem suas raízes na história da tatuagem ocidental e é caracterizado por desenhos ousados, brilhantes e coloridos, como navios, âncoras, corações, cobras e águias. A técnica usa linhas grossas e cores vibrantes, geralmente em um estilo retrô. </p>
                <h2 className="blogH2">Lettering</h2>
                <p className="estilosItem">
                    Este estilo de tatuagem é baseado em texto, geralmente palavras ou frases curtas. Os artistas usam diferentes fontes e estilos de escrita para criar tatuagens com uma aparência personalizada.
                </p>
                <h2 className="blogH2">Fine Line</h2>
                <p className="estilosItem">
                    Este estilo de tatuagem usa linhas finas e delicadas para criar um design detalhado. É popular para tatuagens minimalistas, como tatuagens de contorno, ou para adicionar detalhes a um design maior.</p>

            </div>
            <div className="eventos">
                <h2 className="blogH2">Próximos eventos</h2>
                <ul>
                <li>
                
                <img className="eventosFoto" src="https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/325735482_931521087837503_4455511993611437142_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=48ql3MPM3ukAX8kOd82&_nc_ht=scontent-gig2-1.xx&oh=00_AfAANca_5Mc1mdi-n6UKTXe0DwqiuXUHNkoXoWaNVj0Z2Q&oe=640DC331" />
                <h2 classname="blogH2">Tattoo Week Rio</h2>
                <p className="eventosItem">Data: 20, 21 e 22 de janeiro </p>
                <p className="eventosItem">Bairro: Cidade Nova</p>
                </li>

                <li>
                
                <img className="eventosFoto" src="https://storage.builderall.com//franquias/2/6366226/editor-html/10692062.jpg" />
                <h2 classname="blogH2">Rio Art Tattoo Festival</h2>
                <p className="eventosItem">Data: 5, 6 e 7 de maio </p>
                <p className="eventosItem">Bairro: Centro</p>
                </li>

                <li>
                <img className="eventosFoto" src="https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/326129483_842738837023214_1835287402456747400_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NDp_olgaYVcAX9flc7a&_nc_ht=scontent-gig2-1.xx&oh=00_AfCK--qZ8JpBQL3byrIivqa5UjfP5ztnfq0AxHEYx-uyIA&oe=640D9590" />
                <h2 classname="blogH2">Oeste Fest Tattoo</h2>
                <p className="eventosItem">Data: 14, 15 e 16 de julho </p>
                <p className="eventosItem">Bairro: Padre Miguel</p>
                </li>
                </ul>
            </div>
        </section>
    )
}

export default Blog