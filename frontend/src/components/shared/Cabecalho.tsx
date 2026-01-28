import Link from "next/link";
import Container from "./Container";
// import Image from "next/image"; // Não precisamos mais importar Image

export default function Cabecalho() {
    return (
        <header className="flex items-center h-20 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm fixed w-full top-0 z-50">
            <Container className="flex-1 flex justify-between items-center">
                {/* Logo em Texto */}
                <div>
                    <Link href="/" className="text-2xl font-black text-white tracking-tighter">
                        Lucas<span className="text-green-500">David</span>
                        <span className="text-green-500"></span>
                    </Link>
                </div>

                {/* Botão de Contato/LinkedIn */}
                <Link
                    href="https://www.linkedin.com/in/lucas-david-b3376a206/"
                    target="_blank"
                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-full px-6 py-2 text-sm font-medium transition duration-300 border border-zinc-700"
                >
                    LinkedIn
                </Link>

            </Container>
        </header>
    )
}