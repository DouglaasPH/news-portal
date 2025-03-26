import Image from 'next/image';

export default function HomePage() {
    return (
        <main>
            {/* div  para notícia em alta/quente. Elementos filho: Título e div pai para imagem, informações da matéria e pequeno texto */ }
            <div>
                <h1>Tópicos em alta</h1>
            {/* div  para imagem, informações da matéria e pequeno texto */ }                
                <div>
                    <Image src='https://picsum.photos' alt='Imagem' />
                    {/* div  para informações da matéria, como: Título, Data de emissão e nome do reportér */}                
                    <div>
                        <h3>Título da matéria</h3>
                    {/* div  para data de emissão e nome do reportér */}                
                        <div>
                            <p>26/04/2025</p>
                            <p>Douglas Phelipe</p>
                        </div>
                    </div>
                    <p>TODO texto ... Leia mais</p>
                </div>
            </div>
            
            {/* div  para últimas notícias. Elementos filho: Título e div pai para todas as informações */ }
            <div>
                <h2>Últimas notícias</h2>
            {/* div  para imagem e informações da matéria */ }
                <div>
                    <div>
                        <Image src='https://picsum.photos' alt='Imagem' />
                        {/* div  para informações da matéria, como: Título, Data de emissão e nome do reportér */}                
                        <div>
                            <h3>Título da matéria</h3>
                            {/* div  para data de emissão e nome do reportér */}                
                            <div>
                                <p>26/04/2025</p>
                                <p>Douglas Phelipe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}