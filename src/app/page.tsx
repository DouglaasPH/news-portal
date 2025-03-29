'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  }).format(date);
};

export default function HomePage() {
    const router = useRouter();
    const imageUrl = `https://picsum.photos/900/500`;
    const imageUrlMenor = `https://picsum.photos/400/250`;    

    const [data, setData] = useState([]);

    // Carregar os dados da API de notícias
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/api/getNewsForHomePage');
            const data = await response.json();
            setData(data); // Atualiza o estado com os dados recebidos
        };
        fetchData(); // Chama a função de fetch
    }, []); // Executa apenas uma vez após o primeiro render

    // Redireciona o usuário para a página da notícia correspondente, usando o id da notícia
    // A URL gerada será baseada no id da notícia selecionada, permitindo uma navegação dinâmica
    function redirectToNewsPage(id: number) {
        const path = '/noticia/' + id;
        router.push(path);
    }    

    return (
        <main className='pl-10 pr-10 pt-[1vw]'>
            {/* div  para notícia em alta/quente. Elementos filho: Título e div pai para imagem, informações da matéria e pequeno texto */ }
            <div className='sm:flex gap-7 flex-col h-screen'>
                <h1 className='text-black text-3xl sm:text-5xl md:text-6xl lg:text-4xl font-bold'>Notícia em alta</h1>
                {/* div  para imagem, informações da matéria e pequeno texto */}                
                <div>
                    {/* div para deixar imagem e o texto 'leia mais' na mesma linha */}
                    <div className='sm:flex md:justify-between flex-row'>
                        <Image
                            src={imageUrl}
                            alt="Imagem aleatória"
                            width={900}
                            height={500}
                            className='md:rounded-lg shadow-md shadow-black md:cursor-pointer'
                        />
                        <p className='w-[330px] text-gray-700 text-[23px]'>Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more</p>
                    </div>
                        {/* div  para informações da matéria, como: Título, Data de emissão e nome do reportér */}                
                    <div className='sm:absolute top-[400px] left-[70px] h-[16vw] w-[500px] sm:flex md:justify-between flex-col'>
                        <h3 className='text-[3vw] text-white font-medium'>Massa tortor nibh nulla condimentum imperdiet scelerisque...</h3>
                    {/* div  para data de emissão e nome do reportér */}                
                        <div className='sm:flex md:justify-between flex-row w-[200px]'>
                            <p className='text-[1vw] text-white'>26/04/2025</p>
                            <p className='text-[1vw] text-white'>Douglas Phelipe</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* div  para últimas notícias. Elementos filho: Título e div pai para todas as informações */ }
            <div className='h-[55vw] sm:flex sm:flex-col md:justify-between'>
                <h2 className='text-black text-2xl sm:text-4xl md:text-5xl lg:text-3xl font-bold'>Últimas notícias</h2>
            {/* div  para imagem e informações da matéria */ }
                <div className='h-[50vw] sm:flex sm:flex-row flex-wrap gap-[1vw] md:justify-between'>
                    {/* div  para informações da matéria, como: Título, Data de emissão e nome do reportér */}                
                    {data.map((materia: { id: number; titulo: string; conteudo: string; data_publicacao: string; nome: string; }) => (
                        <div key={materia.id} className='w-[22vw] h-[20.7vw] sm:flex sm:flex-col md:justify-between md:cursor-pointer' onClick={() => redirectToNewsPage(materia.id)}>
                            <Image
                                src={imageUrlMenor}
                                alt="Imagem aleatória"
                                width={400}
                                height={250}   
                                className='md:rounded-lg shadow-sm shadow-black'
                            />
                            <h3 className='text-lg sm:font-medium leading-none'>{materia.titulo}</h3>
                            <div className='sm:flex sm:flex-col md:justify-between h-[3vw]'>
                                <p className='font-light sm:text-gray-900'>{materia.nome}</p>
                                <p className='font-light sm:text-gray-900'>{formatDate(materia.data_publicacao)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}