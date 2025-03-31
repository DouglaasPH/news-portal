'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

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
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const imageRef = useRef<HTMLDivElement>(null);
    const imageUrl = `https://picsum.photos/900/500`;
    const imageUrlMenor = `https://picsum.photos/400/250`;    

    const [data, setData] = useState([]);

    // Função para atualizar a posição da div da notícia em alta
    const updatePosition = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + window.scrollY - 140, // Ajusta 10px abaixo da imagem
                left: rect.left + window.scrollX + 20 // Ajusta 10px à direita da imagem
            });
        }
    };

    // Função para atualizar a posição da div das informações da seção "últimas notícias"
    const updatePositionForSecondDiv = () => {
        if (window.innerWidth >= 1280) {
            return (window.innerWidth / 5) + 'px'
        } else if (window.innerWidth >= 1024) {
            return (window.innerWidth / 5) + 'px'
        } else if (window.innerWidth >= 768) {
            return (window.innerWidth / 3) + 'px'
        } else return (window.innerWidth / 3) + 'px'
    }


    // Carregar os dados da API de notícias
    useEffect(() => {
        console.log(window.innerWidth)
        // Buscar dados das notícias
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/api/getNewsForHomePage');
            const data = await response.json();
            setData(data); // Atualiza o estado com os dados recebidos
        };

        fetchData(); // Chama a função de fetch
        
        updatePosition(); // Atualiza a posição da div da notícia em alta
        updatePositionForSecondDiv(); // Atualiza a proporção das imagems de todas notícias
        window.addEventListener('resize', updatePosition);
        window.addEventListener('resize', updatePositionForSecondDiv);        
        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('resize', updatePositionForSecondDiv);
        }     
    }, []); // Executa apenas uma vez após o primeiro render

    

    // Redireciona o usuário para a página da notícia correspondente, usando o id da notícia
    // A URL gerada será baseada no id da notícia selecionada, permitindo uma navegação dinâmica
    function redirectToNewsPage(id: number) {
        const path = '/noticia/' + id;
        router.push(path);
    }    

    return (
        <main className='pl-10 pr-10 pt-[1vw] flex flex-col gap-[100px]'>
            {/* div  para notícia em alta/quente. Elementos filho: Título e div pai para imagem, informações da matéria e pequeno texto */ }
            <div className='flex gap-7 flex-col'>
                <h1 className='text-black text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold'>Notícia em alta</h1>
                {/* div  para imagem, informações da matéria e pequeno texto */}
                <div className="h-[540px] sm:h-[650px] md:h-[650px] lg:h-[550px] xl:h-[515px]">
                    {/* div para deixar imagem e o texto 'leia mais' na mesma linha */}
                    <div className='h-full flex sm:items-center md:items-center lg:items-center xl:items-start justify-between flex-col xl:flex-row'>
                        <Image
                            src={imageUrl}
                            alt="Imagem aleatória"
                            width={900}
                            height={500}
                            className='rounded-lg shadow-md shadow-black cursor-pointer object-cover w-full h-[300px] sm:h-[320px] md:h-[390px] lg:h-[430px] xl:h-[490px] xl:w-[70%]'
                            ref={imageRef}
                        />
                        <p className='w-full xl:w-[330px] text-gray-700 text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] xl:text-[26px]'>Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more</p>
                    </div>
                        {/* div  para informações da matéria, como: Título, Data de emissão e nome do reportér */}
                    <div className='absolute h-[115px] w-[260px] sm:h-[100px] sm:w-[480px] md:h-[110px] md:w-[500px] lg:h-[105px] lg:w-[500px] xl:h-[120px] xl:w-[500px] flex justify-between flex-col'
                        style={{
                            top: `${position.top}px`,
                            left: `${position.left}px`
                        }}>
                        <h3 className='text-[20px] sm:text-[25px] md:text-[26px] lg:text-[27px] xl:text-[28px] text-white font-medium'>Massa tortor nibh nulla condimentum imperdiet scelerisque...</h3>
                        
                        {/* div  para data de emissão e nome do reportér */}
                        <div className='flex justify-between flex-row  w-[160px] sm:w-[150px] md:w-[180px] lg:w-[190px] xl:w-[200px]'>
                            <p className='text-[10px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] text-white'>26/04/2025</p>
                            <p className='text-[10px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] text-white'>Douglas Phelipe</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* div  para últimas notícias. Elementos filho: Título e div pai para todas as informações */}
            <div className='h-[1200px] sm:h-[1300px] md:h-[1500px] lg:h-[700px] xl:h-[750px] flex flex-col gap-[40px]'>
                <h2 className='text-black text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold'>Últimas notícias</h2>
            {/* div  para imagem e informações da matéria */ }
                <div className='h-[1100px] sm:h-[1200px] md:h-[1400px] lg:h-[580px] xl:h-[650px] flex flex-row flex-wrap justify-between'>
                    {/* div  para informações da matéria, como: Título, Data de emissão e nome do reportér */}                
                    {data.map((materia: { id: number; titulo: string; conteudo: string; data_publicacao: string; nome: string; }) => (
                        <div key={materia.id} className='h-[220px] sm:h-[240px] md:h-[260px] lg:h-[250px] xl:h-[270px] flex flex-col justify-between cursor-pointer' style={{ width: updatePositionForSecondDiv() }} onClick={() => redirectToNewsPage(materia.id)}>
                            <Image
                                src={imageUrlMenor}
                                alt="Imagem aleatória"
                                width={400}
                                height={250}   
                                className='cursor-pointer'
                            />
                            <h3 className='text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[21px] font-medium leading-none'>{materia.titulo}</h3>
                            <div className='flex flex-col gap-[5px] h-[50px]'>
                                <p className='text-[9px] sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[13px] font-light sm:text-gray-900'>{materia.nome}</p>
                                <p className='text-[9px] sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[13px] font-light leading-tight sm:text-gray-900'>{formatDate(materia.data_publicacao)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </main>
    )
}