'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  }).format(date);
};

export default function TodasPaginasPage() {
  const router = useRouter();
  const [todasNoticiasData, setTodasNoticiasData] = useState([]);
  const [todasCategoriasData, setTodasCategoriasData] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [noticiasRes, categoriasRes] = await Promise.all([
          fetch('http://localhost:3000/api/getAllNews'),
          fetch('http://localhost:3000/api/getAllCategories'),
        ]);

        const noticiasData = await noticiasRes.json();
        const categoriasData = await categoriasRes.json();

        setTodasNoticiasData(noticiasData);
        setTodasCategoriasData(categoriasData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchNewsByCategory = async () => {
      try {
        const url = categoriaSelecionada
          ? `http://localhost:3000/api/getNewsAccordingToACategory?id=${categoriaSelecionada}`
          : 'http://localhost:3000/api/getAllNews';

        const response = await fetch(url);
        const noticiasData = await response.json();
        setTodasNoticiasData(noticiasData);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };
    fetchNewsByCategory();
  }, [categoriaSelecionada]);

  const categoriaClick = (categoria_id: number) => {
    setCategoriaSelecionada(prev => (prev === String(categoria_id) ? '' : String(categoria_id)));
  };

  const redirectToNewsPage = (id: number) => {
    router.push(`/noticia/${id}`);
  };

  return (
    <main className="px-10 pt-[1vw] h-auto flex flex-col">
      <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Categorias de busca</h1>
      <div className="flex flex-wrap gap-2 mb-10">
        {todasCategoriasData.map(({ id, nome }: { id: number; nome: string }) => (
          <button
            key={id}
            className={`border-2 px-3 py-1 rounded-md text-sm shadow-gray-400 transition-all duration-200 ${
              Number(categoriaSelecionada) === id ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300'
            }`}
            onClick={() => categoriaClick(id)}
          >
            {nome}
          </button>
        ))}
      </div>

      <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">Todas Notícias</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-20">
        {todasNoticiasData.map(({ id, titulo, data_publicacao, nome }) => (
          <div key={id} className="w-full flex flex-col bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={() => redirectToNewsPage(id)}>
            <div className="w-full h-60 relative">
              <Image src={`https://picsum.photos/800/400`} alt="Imagem aleatória" layout="fill" objectFit="cover" className="w-full h-full" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium leading-none">{titulo}</h3>
              <div className="flex flex-col gap-1 text-gray-700 mt-2">
                <p className="text-xs font-light">{nome}</p>
                <p className="text-xs font-light">{formatDate(data_publicacao)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
