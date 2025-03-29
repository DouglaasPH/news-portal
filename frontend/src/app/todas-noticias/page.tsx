'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Função para formatar a data/hora recebida do banco de dados
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

    const imageUrl = `https://picsum.photos/400/250`;

    // Carregar as notícias e categorias após o componente ser montado
    useEffect(() => {
        const fetchData = async () => {
            const noticiasResponse = await fetch('http://localhost:3000/api/getAllNews');
            const noticiasData = await noticiasResponse.json();
            setTodasNoticiasData(noticiasData);

            const categoriasResponse = await fetch('http://localhost:3000/api/getAllCategories');
            const categoriasData = await categoriasResponse.json();
            setTodasCategoriasData(categoriasData);
        };

        fetchData();
    }, []); // O array vazio garante que o fetch seja executado uma vez após o primeiro render

    // Função para marcar/desmarcar categoria
    function categoriaClick(categoria_id: number) {
        if (categoria_id !== Number(categoriaSelecionada)) setCategoriaSelecionada(String(categoria_id))
        else setCategoriaSelecionada('');
    }

    // Buscar novas notícias com base na categoria selecionada
    useEffect(() => {
        if (categoriaSelecionada) {
            const fetchNewsByCategory = async () => {
                const noticiasResponse = await fetch(`http://localhost:3000/api/getNewsAccordingToACategory?id=${categoriaSelecionada}`);
                const noticiasData = await noticiasResponse.json();
                console.log(noticiasData);
                setTodasNoticiasData(noticiasData);
            };

            fetchNewsByCategory();
        } else {
            // Se nenhuma categoria estiver selecionada, recarregar todas as notícias
            const fetchAllNews = async () => {
                const noticiasResponse = await fetch('http://localhost:3000/api/getAllNews');
                const noticiasData = await noticiasResponse.json();
                console.log(noticiasData);
                setTodasNoticiasData(noticiasData);
            };

            fetchAllNews();
        }
    }, [categoriaSelecionada]); // O useEffect será executado toda vez que a categoriaSelecionada mudar

    // Redireciona o usuário para a página da notícia correspondente, usando o slug gerado
    // A URL gerada será baseada no título da notícia selecionada, permitindo uma navegação dinâmica
    function redirectToNewsPage(title: string) {
        // Converte o título da notícia selecionada pelo usuário em um slug válido para ser usado na URL
        // Exemplo: "Lorem ipsum dolor sit amet" -> "lorem-ipsum-dolor-sit-amet"
        const slug = title
            .toLowerCase()
            .replace(/[\s,]+/g, "-") // Substitui espaços e vírgulas por "-"
            .replace(/[^\w-]/g, ""); // Remove caracteres especiais

        const path = '/noticia/' + slug;
        router.push(path);
    }        

    return (
        <main className='pl-10 pr-10 pt-[1vw] h-[95vw] sm:flex sm:flex-col md:justify-between'>
            <h1 className='text-black text-3xl sm:text-5xl md:text-6xl lg:text-4xl font-bold'>Categorias de busca</h1>            

            {/* div para exibir todas as categorias disponíveis */}
            <div className="h-[6vw] sm:flex sm:flex-row flex-wrap gap-[1vw]" >
                {/* Iterar sobre a API de todas categorias de notícia  */}
                {todasCategoriasData.map((categoria: { id: number; nome: string }) => (
                    <button
                        key={categoria.id}
                        className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-md text-black text-sm sm:text-sm md:text-sm lg:text-sm shadow shadow-gray-400"
                        style={{ backgroundColor: Number(categoriaSelecionada) === categoria.id ? 'black' : 'white', color: Number(categoriaSelecionada) === categoria.id ? 'white' : 'black', borderColor: Number(categoriaSelecionada) === categoria.id ? 'black' : undefined }}
                        onClick={() => categoriaClick(categoria.id)}
                    >
                        {categoria.nome}
                    </button>
                ))}                
            </div>

            <h1 className='text-black text-3xl sm:text-5xl md:text-6xl lg:text-3xl font-bold'>Todas Notícias</h1>

            {/* div para exibir todas as últimas notícias */}
            <div 
                className='sm:flex sm:flex-row flex-wrap gap-[1.6vw]' 
                style={{ height: (todasCategoriasData.length / 4) * 15 + 'vw' }}
            >
                {todasNoticiasData.map((materia: { id: number; titulo: string; conteudo: string; data_publicacao: string; nome: string; }) => (
                    <div key={materia.id} className='w-[22vw] h-[20.7vw] sm:flex sm:flex-col md:justify-between md:cursor-pointer' onClick={() => redirectToNewsPage(materia.titulo)}>
                        <Image
                            src={imageUrl}
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
        </main>
    );
}
