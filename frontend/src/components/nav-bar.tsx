'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

// Nav bar padrão, para todas páginas
export default function DefaultNavBar() {
    const pathAtual = usePathname();

    return (
        <nav className="sm:flex md:start items-center h-20  pl-10 pr-10">
            <div className="sm:flex md:justify-between items-center md:w-1/5 h-8">
                <Link href={'/'} className={pathAtual === '/' ? 'bg-black text-white pl-2 pr-2 pb-1 pt-1 text-md md:rounded-sm shadow-md shadow-black' : 'bg-white text-black pl-2 pr-2 pb-1 pt-1 text-md'}>Notícias</Link>
                <Link href={'/todas-noticias'} className={pathAtual === 'todas-noticias' ? 'bg-black text-white pl-2 pr-2 pb-1 pt-1 text-md md:rounded-sm shadow-md shadow-black' : 'bg-white text-black pl-2 pr-2 pb-1 pt-1 text-md'}>Todas Notícias</Link>
                <Link href={'/portal'} className={pathAtual === 'portal' ? 'bg-black text-white pl-2 pr-2 pb-1 pt-1 text-md md:rounded-sm shadow-md shadow-black' : 'bg-white text-black pl-2 pr-2 pb-1 pt-1 text-md'}>Portal</Link>
            </div>
        </nav>
    )
 }