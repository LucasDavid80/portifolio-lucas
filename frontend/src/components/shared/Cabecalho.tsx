import Link from "next/link";
import Container from "./Container";
import { Github } from 'lucide-react';

export default function Cabecalho() {
    return (
        <header className="flex items-center h-20 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm fixed w-full top-0 z-50">
            <Container className="flex-1 flex justify-between items-center">
                {/* Logo em Texto */}
                <div>
                    <Link href="/" className="text-2xl font-black text-white tracking-tighter hover:opacity-90 transition">
                        Lucas<span className="text-green-500">David</span>
                    </Link>
                </div>

                {/* Menu de Navegação */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-zinc-400 hover:text-white transition duration-300 text-sm font-medium">
                        Início
                    </Link>
                    <Link href="/#projetos" className="text-zinc-400 hover:text-white transition duration-300 text-sm font-medium">
                        Destaques
                    </Link>
                    <Link href="/projetos" className="text-zinc-400 hover:text-green-400 transition duration-300 text-sm font-medium">
                        Todos os Projetos
                    </Link>
                </nav>

                {/* Botões de Acesso Rápido */}
                <div className="flex items-center gap-3 md:gap-4">
                    <Link
                        href="/projetos"
                        className="md:hidden text-zinc-400 hover:text-green-400 text-xs font-medium px-3 py-1.5 rounded-full border border-zinc-800"
                    >
                        Projetos
                    </Link>
                    <Link
                        href="https://github.com/LucasDavid80"
                        target="_blank"
                        className="text-zinc-400 hover:text-white transition duration-300 flex items-center gap-1.5 text-sm font-medium"
                    >
                        <Github size={18} />
                        <span className="hidden sm:inline">GitHub</span>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/lucas-david-b3376a206/"
                        target="_blank"
                        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-full px-5 py-2 text-sm font-medium transition duration-300 border border-zinc-700"
                    >
                        LinkedIn
                    </Link>
                </div>

            </Container>
        </header>
    )
}