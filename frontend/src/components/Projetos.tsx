import { Github, ExternalLink, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Projetos() {
    return (
        <section id="projetos" className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4">

                <h2 className="text-3xl font-bold text-center text-white mb-4">
                    Projetos em <span className="text-green-500">Destaque</span>
                </h2>
                <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
                    Uma seleção dos meus melhores trabalhos, focando em arquitetura robusta, inteligência artificial e fundamentos da web.
                </p>

                <div className="space-y-20">

                    {/* =====================================================================================
              PROJETO 1: Plataforma PedraUm (Freelance / Web / Firebase) - NOVO DESTAQUE
          ===================================================================================== */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2 h-80 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                            <Database className="text-zinc-700 group-hover:text-green-500 transition duration-500" size={80} />
                        </div>

                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold text-white mb-2">Plataforma PedraUm</h3>
                            <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-bold mb-4">
                                Next.js • Firebase • TypeScript
                            </span>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Plataforma web em produção assumida como desenvolvedor freelancer. O projeto exigiu forte atuação em manutenção de código, migração de infraestrutura e implementação de regras de negócio complexas.
                            </p>
                            <ul className="list-disc list-inside text-zinc-500 mb-8 space-y-1">
                                <li>Refatoração de código legado e evolução contínua da interface.</li>
                                <li>Implementação de backend e persistência de dados em tempo real com <strong>Firebase</strong>.</li>
                                <li>Integração com sistema completo de pagamentos.</li>
                            </ul>
                            <div className="flex gap-4">
                                {/* Pode deixar sem botão de código já que é freela fechado, ou colocar o link do site se estiver no ar */}
                                <span className="text-sm text-zinc-500 font-bold italic">
                                    Projeto de Cliente (Código Fechado)
                                </span>
                            </div>
                        </div>
                    </div>

                    <hr className="border-zinc-800" />

                    {/* =====================================================================================
              PROJETO 2: Agenda Musical (Flutter / Riverpod) - NOVO DESTAQUE MOBILE
          ===================================================================================== */}
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        {/* <div className="w-full md:w-1/2 h-80 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                            <Music className="text-zinc-700 group-hover:text-blue-500 transition duration-500" size={80} />
                        </div> */}
                        {/* Substitua a div do ícone <Music /> por esta aqui: */}
                        <div className="w-full md:w-1/2 h-80 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                            <Image
                                src="/mockups/agenda-mockup.png"
                                alt="Interface do app Agenda Musical"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold text-white mb-2">Agenda Musical</h3>
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-4">
                                Flutter • Riverpod • REST APIs
                            </span>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Aplicativo mobile focado em organização musical. Desenvolvido para aplicar na prática conceitos de arquitetura limpa e alta reatividade no ecossistema Dart.
                            </p>
                            <ul className="list-disc list-inside text-zinc-500 mb-8 space-y-1">
                                <li>Gerenciamento de estado reativo e escalável utilizando <strong>Riverpod</strong>.</li>
                                <li>Estruturação de rotas e consumo de pacotes externos.</li>
                                <li>Foco em performance e entrega de uma UI/UX fluida.</li>
                            </ul>
                            <div className="flex gap-4">
                                {/* ATENÇÃO: Substitua pelo link real do seu repositório */}
                                <Link href="https://github.com/LucasDavid80/agenda_musical" target="_blank" className="flex items-center gap-2 text-white hover:text-green-500 transition">
                                    <Github size={20} /> Ver Código
                                </Link>
                            </div>
                        </div>
                    </div>

                    <hr className="border-zinc-800" />

                    {/* =====================================================================================
              PROJETO 3: Tech Taste (Mobile Architecture)
          ===================================================================================== */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* <div className="w-full md:w-1/2 h-80 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                            <Smartphone className="text-zinc-700 group-hover:text-orange-500 transition duration-500" size={80} />
                        </div> */}
                        {/* Substitua a div do ícone <Smartphone /> no projeto Tech Taste por esta aqui: */}
                        <div className="w-full md:w-1/2 h-80 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                            <Image
                                src="/mockups/techtaste-mockup.png"
                                alt="Interface da aplicação Tech Taste"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold text-white mb-2">Tech Taste</h3>
                            <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-bold mb-4">
                                Flutter • Provider • Clean Arch
                            </span>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Marketplace gastronômico completo. O foco do desenvolvimento foi a arquitetura modular, separando a lógica de negócios da interface.
                            </p>
                            <ul className="list-disc list-inside text-zinc-500 mb-8 space-y-1">
                                <li>Gerenciamento de estado reativo com <strong>Provider</strong></li>
                                <li>Arquitetura desacoplada (UI, Model, Data)</li>
                                <li>Fluxo de UX completo (Splash, Filtros e Checkout)</li>
                            </ul>
                            <div className="flex gap-4">
                                <Link href="https://github.com/LucasDavid80/techtaste" target="_blank" className="flex items-center gap-2 text-white hover:text-green-500 transition">
                                    <Github size={20} /> Ver Código
                                </Link>
                            </div>
                        </div>
                    </div>

                    <hr className="border-zinc-800" />

                    {/* =====================================================================================
              PROJETO 4: mAInd (Fullstack + IA)
          ===================================================================================== */}
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        {/* <div className="w-full md:w-1/2 h-80 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                            <Brain className="text-zinc-700 group-hover:text-purple-500 transition duration-500" size={80} />
                        </div> */}
                        {/* Substitua a div do ícone <Brain /> no Project mAInd por esta aqui: */}
                        <div className="w-full md:w-1/2 h-80 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                            <Image
                                src="/mockups/maind-mockup.png"
                                alt="Interface do chatbot mAInd"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold text-white mb-2">Project mAInd</h3>
                            <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold mb-4">
                                Python (Flask) • IA (KNN) • JS Vanilla
                            </span>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Chatbot de triagem psicológica apresentado na <strong>FETIN</strong>. Utiliza Machine Learning para identificar padrões de ansiedade e depressão através de uma conversa natural.
                            </p>
                            <ul className="list-disc list-inside text-zinc-500 mb-8 space-y-1">
                                <li><strong>Backend:</strong> API Flask com gestão de sessão (Stateful)</li>
                                <li><strong>IA:</strong> Algoritmo KNN treinado com Scikit-learn</li>
                                <li><strong>Frontend:</strong> Manipulação de DOM e consumo via Fetch API</li>
                            </ul>
                            <div className="flex flex-wrap gap-4">
                                <Link href="https://github.com/LucasDavid80/backend-mAInd" target="_blank" className="flex items-center gap-2 text-white hover:text-green-500 transition">
                                    <Github size={20} /> Backend (Python)
                                </Link>
                                <Link href="https://github.com/LucasDavid80/mAInd" target="_blank" className="flex items-center gap-2 text-white hover:text-green-500 transition">
                                    <Github size={20} /> Frontend (Web)
                                </Link>
                                <Link href="https://lucasdavid80.github.io/mAInd/" target="_blank" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition font-bold px-3 py-2">
                                    <ExternalLink size={18} /> Ver Interface
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <hr className="border-zinc-800" /> */}

                    {/* =====================================================================================
              PROJETO 5: Inatel Housing (UX/UI & Design System)
          ===================================================================================== */}
                    {/* <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2 h-80 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-zinc-700 group-hover:text-blue-500 transition duration-500"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="3" y1="9" x2="21" y2="9"></line>
                                <line x1="9" y1="21" x2="9" y2="9"></line>
                            </svg>
                        </div>

                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold text-white mb-2">Inatel Housing</h3>
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-4">
                                UX Research • Prototipagem • IHM
                            </span>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Projeto de Interação Humano-Computador focado em resolver o déficit de moradia estudantil. O trabalho envolveu desde a pesquisa com usuários até a prototipação de alta fidelidade.
                            </p>
                            <ul className="list-disc list-inside text-zinc-500 mb-8 space-y-1">
                                <li>Definição de <strong>User Stories</strong> e Personas</li>
                                <li>Análise Hierárquica de Tarefas (HTA)</li>
                                <li>Design System e Wireframing</li>
                            </ul>
                            <div className="flex gap-4">
                                <Link href="LINK_DO_REPO_IHM" target="_blank" className="flex items-center gap-2 text-white hover:text-green-500 transition">
                                    <Github size={20} /> Ver Documentação
                                </Link>
                                <Link href="https://lucasdavid80.github.io/S05-Projeto-pratico/" target="_blank" className="flex items-center gap-2 text-green-500 hover:text-green-400 transition font-bold">
                                    <ExternalLink size={20} /> Testar Online
                                </Link>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    )
}