import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 px-4">

            {/* Círculo para sua Foto */}
            <div className="relative w-64 h-64 mb-8 border-4 border-green-500 rounded-full overflow-hidden shadow-xl shadow-green-500/20">
                <Image
                    src="/lucas.png"
                    alt="Foto de Lucas David"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                Olá, eu sou o <span className="text-green-500">Lucas David</span>
            </h1>

            <p className="text-zinc-400 max-w-lg mb-10 text-xl leading-relaxed">
                Estudante de Engenharia de Software no Inatel. Desenvolvedor focado em criar aplicações robustas e escaláveis utilizando Flutter, Next.js e Firebase.
            </p>

            <div className="flex gap-4">
                {/* Botão de Currículo atualizado para apontar para o arquivo na pasta public */}
                <Link
                    href="/curriculo/Curriculo_Lucas_David.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-lg"
                >
                    Baixar Currículo
                </Link>
                <Link href="#projetos" className="border border-zinc-700 text-zinc-300 hover:border-green-500 hover:text-green-500 font-bold py-4 px-8 rounded-full transition">
                    Ver Projetos
                </Link>
            </div>
        </section>
    )
}