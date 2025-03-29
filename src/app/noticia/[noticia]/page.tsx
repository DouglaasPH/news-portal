'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

// Função para formatar a data/hora recebida do banco de dados
const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  }).format(date);
};

export default function NoticiaPage({ params }: { params: {noticia: string} }) {
    const imageUrl = `https://picsum.photos/1600/600`;
    const [data, setData] = useState({
        categoria_nome: '',
        titulo: '',
        autor_nome: '',
        data_publicacao: '',
        conteudo: '',
    });

    // Carregar os dados da API de notícias
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/api/getNews?id=${params.noticia}`);
            const data = await response.json();
            const date = formatDate(data[0].data_publicacao); // Formata a data
            setData({ ...data[0], data_publicacao: date }); // Atualiza o estado com os dados recebidos + a data formatada
        };
        fetchData(); // Chama a função de fetch
    }, []); // Executa apenas uma vez após o primeiro render

    // Definir a altura da tag main com base na quantidade de caracter do conteudo da matéria
    const heightToMain = data.conteudo.length / 60;

    return (
        <main className='pl-10 pr-10 pt-[1vw] mb-[4vw] flex justify-between flex-col' style={{ height: 50 + heightToMain + 'vw' }}>
            {/* div para: categoria, titulo, autoria e data de publicação */}
            <div className="flex justify-between flex-col h-[13vw]">
                <h4 className="font-light text-[1.2vw]">{ data.categoria_nome }</h4>
                <h1 className="text-gray-900 text-[4vw] leading-tight font-semibold">{ data.titulo }</h1>
                <p className="font-normal text-[1.4vw]">{data.autor_nome} - { data.data_publicacao }</p>
            </div>

            {/* div para imagem principal da matéria */}
            <div>
                <Image
                    src={imageUrl}
                    alt="Imagem aleatória"
                    width={1600}
                    height={600}
                    className="w-[100vw]"
                />            
            </div>

            {/* div para texto da matéria */}
            <div>                
                <p className="text-[1.4vw]">{ data.conteudo }</p>
            </div>
        </main>
    )
}