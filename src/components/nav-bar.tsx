'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

// Nav bar padrão, para todas páginas
export default function DefaultNavBar() {
    const pathAtual = usePathname();

    return (
        <nav className="flex start items-center h-20  pl-10 pr-10">
            <div className="flex justify-between items-center w-lg h-8">
                <Link href={'/'} className={pathAtual === '/' ? 'bg-black text-white pl-2 pr-2 pb-1 pt-1 text-md md:rounded-sm shadow-md shadow-black' : 'bg-white text-black pl-2 pr-2 pb-1 pt-1 text-md'}>Notícias</Link>
                <Link href={'/todas-noticias'} className={pathAtual === '/todas-noticias' ? 'bg-black text-white pl-2 pr-2 pb-1 pt-1 text-md md:rounded-sm shadow-md shadow-black' : 'bg-white text-black pl-2 pr-2 pb-1 pt-1 text-md'}>Todas Notícias</Link>
                <Link href={'/sobre-nos'} className={pathAtual === '/sobre-nos' ? 'bg-black text-white pl-2 pr-2 pb-1 pt-1 text-md md:rounded-sm shadow-md shadow-black' : 'bg-white text-black pl-2 pr-2 pb-1 pt-1 text-md'}>Sobre nós</Link>
            </div>
        </nav>
    )
 }