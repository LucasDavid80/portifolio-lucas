import { Github, ExternalLink, Database, FileText, ArrowRight } from 'lucide-react';
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
                    Uma seleção dos meus principais trabalhos, focando em arquitetura robusta, inteligência artificial, mobile e desenvolvimento desktop.
                </p>

                <div className="space-y-20">

                    {/* =====================================================================================
                        PROJETO 1: My Roadie Platform (O Carro-Chefe Full-Stack)
                    ===================================================================================== */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2 h-80 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                            <Image
                                src="/mockups/agenda-mockup.png"
                                alt="Interface da plataforma My Roadie"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-bold text-white">My Roadie Platform</h3>
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                                    Full-Stack • Em Testes
                                </span>
                            </div>
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-4">
                                SDD • Flutter (Android/iOS) • Next.js • NestJS • TypeScript
                            </span>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Ecossistema full-stack completo para gestão musical e produção de eventos. A solução centraliza organização de agendas, repertórios e equipe, integrando dashboard administrativo web, API escalável e protótipos de aplicativo mobile em testes.
                            </p>
                            <ul className="list-disc list-inside text-zinc-500 mb-8 space-y-1">
                                <li><strong>Engenharia com SDD:</strong> Arquitetura orientada por especificações formais (<em>Spec-Driven Development</em>), com modelagem prévia de contratos de API, backlog e documentação técnica.</li>
                                <li><strong>Mobile (Flutter):</strong> Protótipos funcionais em teste para Android e iOS, focados em usabilidade offline-first para músicos e roadies na estrada.</li>
                                <li><strong>Web Dashboard (Next.js):</strong> Painel administrativo web para controle centralizado de apresentações, logística e repertórios.</li>
                                <li><strong>Backend Centralizado (NestJS):</strong> API REST com arquitetura modular, segurança e sincronização de dados.</li>
                            </ul>
                            <div className="flex flex-wrap gap-4">
                                <Link href="https://github.com/LucasDavid80/my-roadie-platform" target="_blank" className="flex items-center gap-2 text-white hover:text-green-500 transition font-medium">
                                    <Github size={20} /> Ver Repositório
                                </Link>
                                <Link href="https://my-roadie-platform.vercel.app" target="_blank" className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition font-bold px-3 py-2 border border-green-500/30 rounded-lg bg-green-500/10">
                                    <ExternalLink size={18} /> Acessar Web
                                </Link>
                            </div>
                        </div>
                    </div>

                    <hr className="border-zinc-800" />

                    {/* =====================================================================================
                        PROJETO 2: Plataforma PedraUm (Experiência Comercial em Produção)
                    ===================================================================================== */}
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="w-full md:w-1/2 h-80 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                            <Database className="text-zinc-700 group-hover:text-green-500 transition duration-500" size={80} />
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-bold text-white">Plataforma PedraUm</h3>
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-800 text-zinc-300 border border-zinc-700">
                                    Produção Comercial
                                </span>
                            </div>
                            <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-bold mb-4">
                                Next.js • Firebase • TypeScript
                            </span>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Plataforma web em produção assumida como desenvolvedor freelancer. O projeto exigiu forte atuação em manutenção de código, migração de infraestrutura e implementação de regras de negócio complexas para um cliente real.
                            </p>
                            <ul className="list-disc list-inside text-zinc-500 mb-8 space-y-1">
                                <li>Refatoração de código legado e evolução contínua da interface.</li>
                                <li>Implementação de backend e persistência de dados em tempo real com <strong>Firebase</strong>.</li>
                                <li>Integração com sistema completo de pagamentos.</li>
                            </ul>
                            <div className="flex gap-4">
                                <span className="text-sm text-zinc-500 font-bold italic">
                                    Projeto de Cliente (Código Fechado)
                                </span>
                            </div>
                        </div>
                    </div>

                    <hr className="border-zinc-800" />

                    {/* =====================================================================================
                        PROJETO 3: Tech Taste (Especialidade Mobile & Clean Architecture)
                    ===================================================================================== */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
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
                                <Link href="https://github.com/LucasDavid80/tech-taste" target="_blank" className="flex items-center gap-2 text-white hover:text-green-500 transition font-medium">
                                    <Github size={20} /> Ver Código
                                </Link>
                            </div>
                        </div>
                    </div>

                    <hr className="border-zinc-800" />

                    {/* =====================================================================================
                        PROJETO 4: mAInd (Inteligência Artificial & FETIN)
                    ===================================================================================== */}
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
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
                                <Link href="https://github.com/LucasDavid80/backend-mAInd" target="_blank" className="flex items-center gap-2 text-white hover:text-green-500 transition font-medium">
                                    <Github size={20} /> Backend (Python)
                                </Link>
                                <Link href="https://github.com/LucasDavid80/mAInd" target="_blank" className="flex items-center gap-2 text-white hover:text-green-500 transition font-medium">
                                    <Github size={20} /> Frontend (Web)
                                </Link>
                                <Link href="https://lucasdavid80.github.io/mAInd/" target="_blank" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition font-bold px-3 py-2 border border-purple-500/30 rounded-lg bg-purple-500/10">
                                    <ExternalLink size={18} /> Ver Interface
                                </Link>
                            </div>
                        </div>
                    </div>

                    <hr className="border-zinc-800" />

                    {/* =====================================================================================
                        PROJETO 5: PDF Toolkit (Flutter Desktop / Iniciativa e SDD)
                    ===================================================================================== */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2 h-80 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                            <Image
                                src="/mockups/pdftoolkit-logo.png"
                                alt="Logo e Interface do PDF Toolkit"
                                fill
                                className="object-contain p-8 group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold text-white mb-2">PDF Toolkit</h3>
                            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-bold mb-4">
                                SDD • Flutter Desktop • Dart • Offline-First
                            </span>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Aplicativo desktop offline concebido como projeto de férias da faculdade para explorar as capacidades e a reatividade do <strong>Flutter Desktop</strong>. Desenvolvido para converter imagens (PNG/JPG) em documentos PDF e manipular arquivos com agilidade e total privacidade.
                            </p>
                            <ul className="list-disc list-inside text-zinc-500 mb-8 space-y-1">
                                <li><strong>Engenharia com SDD:</strong> Especificação detalhada de requisitos, modelagem de regras e divisão de tarefas antes da codificação.</li>
                                <li><strong>Privacidade & Segurança:</strong> Processamento 100% offline no dispositivo, sem envio de dados a servidores de terceiros.</li>
                                <li><strong>Interface Desktop Nativa:</strong> Layout ergonômico para computadores com suporte a ações rápidas e conversão em lote.</li>
                                <li><strong>Performance em Dart:</strong> Manipulação direta de fluxos de bytes e geração de PDFs.</li>
                            </ul>
                            <div className="flex gap-4">
                                <Link href="https://github.com/LucasDavid80/PDF-Toolkit" target="_blank" className="flex items-center gap-2 text-white hover:text-green-500 transition font-medium">
                                    <Github size={20} /> Ver Código
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* =====================================================================================
                    BANNER: Acesso à Galeria Completa de Projetos
                ===================================================================================== */}
                <div className="mt-24 p-8 md:p-12 rounded-2xl bg-zinc-950 border border-zinc-800 text-center flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold text-white mb-3">
                        Quer ver outros repositórios e trabalhos acadêmicos?
                    </h3>
                    <p className="text-zinc-400 max-w-xl mb-8">
                        Explore o catálogo completo com projetos de Inteligência Artificial, Pesquisa Operacional, Sistemas Distribuídos e ferramentas desktop.
                    </p>
                    <Link
                        href="/projetos"
                        className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold transition transform hover:scale-105 shadow-lg shadow-green-600/20 group"
                    >
                        <span>Ver Todos os Projetos</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition duration-300" />
                    </Link>
                </div>

            </div>
        </section>
    )
}