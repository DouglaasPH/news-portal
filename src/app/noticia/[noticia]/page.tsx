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

export default function NoticiaPage({ params }: { params: { noticia: string } }) {
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
      const result = await response.json();
      const formattedDate = formatDate(result[0].data_publicacao);
      setData({ ...result[0], data_publicacao: formattedDate });
    };
    fetchData();
  }, [params.noticia]);

  return (
    <main className='px-4 md:px-10 pt-4 mb-16 flex flex-col'>
      {/* Cabeçalho da notícia */}
      <div className="bg-slate-100 p-4 md:p-6 rounded-lg shadow">
        <h4 className="text-sm md:text-base text-gray-600">{data.categoria_nome}</h4>
        <h1 className="text-gray-900 text-2xl md:text-4xl font-semibold leading-tight">{data.titulo}</h1>
        <p className="text-xs md:text-sm text-gray-700">{data.autor_nome} - {data.data_publicacao}</p>
      </div>

      {/* Imagem principal da matéria */}
      <div className="my-6">
        <Image src={imageUrl} alt="Imagem aleatória" width={1600} height={600} className="w-full rounded-lg shadow" />
      </div>

      {/* Texto da matéria */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow">
        <p className="text-sm md:text-base text-gray-800 leading-relaxed">{data.conteudo}</p>
      </div>
    </main>
  );
}
