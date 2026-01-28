import Link from 'next/link';
import Image from 'next/image'; // Vamos usar o componente otimizado do Next

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 px-4">

            {/* Círculo para sua Foto - Aumentei para w-64 h-64 (256px) */}
            <div className="relative w-64 h-64 mb-8 border-4 border-green-500 rounded-full overflow-hidden shadow-xl shadow-green-500/20">
                <Image
                    src="/minha-foto.png" // <--- TROQUE pelo nome exato do seu arquivo (ex: .jpg ou .png)
                    alt="Foto de Lucas David"
                    fill
                    className="object-cover"
                    priority // Isso faz a foto carregar instantaneamente
                />
            </div>

            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                Olá, eu sou o <span className="text-green-500">Lucas David</span>
            </h1>

            <p className="text-zinc-400 max-w-lg mb-10 text-xl leading-relaxed">
                Estudante de Engenharia de Software no Inatel.
                Transformo problemas complexos em soluções simples com React e Flutter.
            </p>

            <div className="flex gap-4">
                <Link href="https://wa.me/5535988890551" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-lg">
                    Fazer Orçamento
                </Link>
                <Link href="#projetos" className="border border-zinc-700 text-zinc-300 hover:border-green-500 hover:text-green-500 font-bold py-4 px-8 rounded-full transition">
                    Ver Projetos
                </Link>
            </div>
        </section>
    )
}