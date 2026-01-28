import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">

                <h2 className="text-3xl font-bold text-white mb-6">
                    Vamos trabalhar <span className="text-green-500">juntos?</span>
                </h2>

                <p className="text-zinc-400 max-w-lg mb-10 text-lg">
                    Seja para criar um site, desenvolver um app ou aulas de reforço.
                    Estou disponível para novos projetos e desafios.
                </p>

                {/* Botões de Contato */}
                <div className="flex flex-wrap gap-6 justify-center mb-16">

                    {/* WhatsApp (O mais importante para Freela) */}
                    <Link
                        href="https://wa.me/5535988890551"
                        target="_blank"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105"
                    >
                        <MessageCircle size={20} />
                        Chamar no WhatsApp
                    </Link>

                    {/* LinkedIn */}
                    <Link
                        href="https://www.linkedin.com/in/lucas-david-b3376a206/"
                        target="_blank"
                        className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-8 rounded-full transition border border-zinc-700"
                    >
                        <Linkedin size={20} />
                        LinkedIn
                    </Link>

                    {/* Botão de Email */}
                    <a
                        href="mailto:lucasdavidoliveira80@gmail.com"
                        className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-full font-medium hover:bg-zinc-700 transition duration-300"
                    >
                        <Mail size={20} />
                        Email
                    </a>

                    {/* GitHub */}
                    <Link
                        href="https://github.com/LucasDavid80"
                        target="_blank"
                        className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-8 rounded-full transition border border-zinc-700"
                    >
                        <Github size={20} />
                        GitHub
                    </Link>
                </div>

                <hr className="w-full border-zinc-800 mb-8" />

                {/* Direitos Autorais */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full text-zinc-500 text-sm">
                    <p>© {currentYear} Lucas David. Todos os direitos reservados.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <span className="hover:text-green-500 cursor-pointer transition">Feito com Next.js & Tailwind</span>
                    </div>
                </div>

            </div>
        </footer>
    )
}