'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cabecalho from '@/components/shared/Cabecalho';
import Footer from '@/components/shared/Footer';
import {
    Github,
    ExternalLink,
    ArrowLeft,
    Database,
    FileText,
    Brain,
    Layers,
    Cpu,
    Network,
    Calculator,
    Smartphone,
    GraduationCap,
    Camera
} from 'lucide-react';

type Categoria = 'todos' | 'fullstack' | 'mobile' | 'ia' | 'academico';

interface Projeto {
    id: string;
    nome: string;
    categoria: 'fullstack' | 'mobile' | 'ia' | 'academico';
    descricao: string;
    tags: string[];
    imagem?: string;
    icone: any;
    destaque?: boolean;
    github?: string;
    deploy?: string;
    observacao?: string;
}

const projetosData: Projeto[] = [
    {
        id: 'my-roadie-platform',
        nome: 'My Roadie Platform',
        categoria: 'fullstack',
        descricao:
            'Ecossistema full-stack completo concebido sob a metodologia SDD (Spec-Driven Development). Integra dashboard web administrativo em Next.js, API centralizada em NestJS e protótipos de aplicativo mobile (Flutter) em testes para Android e iOS.',
        tags: ['SDD', 'Flutter (Android & iOS)', 'Next.js', 'NestJS', 'TypeScript'],
        imagem: '/mockups/agenda-mockup.png',
        icone: Smartphone,
        destaque: true,
        github: 'https://github.com/LucasDavid80/my-roadie-platform',
        deploy: 'https://my-roadie-platform.vercel.app'
    },
    {
        id: 'pdf-toolkit',
        nome: 'PDF Toolkit',
        categoria: 'mobile',
        descricao:
            'Aplicativo desktop offline concebido via SDD como projeto de férias para explorar Flutter Desktop. Permite a conversão rápida de imagens (PNG/JPG) em PDF e manipulação segura de documentos locais sem depender de internet.',
        tags: ['SDD', 'Flutter Desktop', 'Dart', 'Offline-First'],
        imagem: '/mockups/pdftoolkit-logo.png',
        icone: FileText,
        destaque: true,
        github: 'https://github.com/LucasDavid80/PDF-Toolkit'
    },
    {
        id: 'tech-taste',
        nome: 'Tech Taste',
        categoria: 'mobile',
        descricao:
            'Aplicativo de marketplace gastronômico desenvolvido com Clean Architecture e Provider no Flutter. Interface modular desacoplando regras de negócios, catálogo de pratos, filtros e checkout.',
        tags: ['Flutter', 'Dart', 'Provider', 'Clean Architecture'],
        imagem: '/mockups/techtaste-mockup.png',
        icone: Smartphone,
        destaque: true,
        github: 'https://github.com/LucasDavid80/tech-taste'
    },
    {
        id: 'maind',
        nome: 'Project mAInd',
        categoria: 'ia',
        descricao:
            'Chatbot de triagem psicológica apresentado na FETIN (Inatel). Emprega Machine Learning com algoritmo KNN para identificar padrões de ansiedade e depressão em conversas com o usuário.',
        tags: ['Python', 'Flask', 'Scikit-learn', 'KNN', 'JavaScript'],
        imagem: '/mockups/maind-mockup.png',
        icone: Brain,
        destaque: true,
        github: 'https://github.com/LucasDavid80/backend-mAInd',
        deploy: 'https://lucasdavid80.github.io/mAInd/'
    },
    {
        id: 'pedra-um',
        nome: 'Plataforma PedraUm',
        categoria: 'fullstack',
        descricao:
            'Plataforma web comercial assumida como desenvolvedor freelancer. Modernização de arquitetura, banco de dados em tempo real com Firebase e integração de sistema de cobranças.',
        tags: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
        icone: Database,
        observacao: 'Projeto de Cliente (Código Fechado)'
    },
    {
        id: 'ia-pinguim',
        nome: 'IA Pinguim',
        categoria: 'ia',
        descricao:
            'Projeto de Inteligência Artificial para análise de atributos e classificação preditiva da base de pinguins Palmer, desenvolvido para a disciplina de Algoritmos Genéticos e IA no Inatel.',
        tags: ['Python', 'Machine Learning', 'Data Science', 'Inatel'],
        icone: Brain,
        github: 'https://github.com/LucasDavid80/IA-Pinguim'
    },
    {
        id: 'simplex-solver',
        nome: 'Simplex Solver',
        categoria: 'academico',
        descricao:
            'Solucionador do algoritmo Simplex tabular para problemas de Programação Linear. Desenvolvido para modelagem e resolução automatizada de otimizações matemáticas com restrições.',
        tags: ['Python', 'Pesquisa Operacional', 'Otimização Linear'],
        icone: Calculator,
        github: 'https://github.com/LucasDavid80/Simplex-Solver'
    },
    {
        id: 'otimizacao-2',
        nome: 'Simulador Teoria das Filas',
        categoria: 'academico',
        descricao:
            'Simulador interativo de modelos estocásticos de filas (M/M/1, M/M/s, M/G/1, prioridades e capacidades finitas) para estudo de desempenho e tempos de espera na disciplina de Otimização II.',
        tags: ['Python', 'Teoria das Filas', 'Estatística', 'Inatel'],
        icone: Cpu,
        github: 'https://github.com/LucasDavid80/OTIMIZACAO_2'
    },
    {
        id: 'sistemas-distribuidos',
        nome: 'Sistemas Distribuídos',
        categoria: 'academico',
        descricao:
            'Repositório de implementações práticas para a matéria de Sistemas Distribuídos do Inatel. Engloba comunicação em rede via sockets, concorrência, consistência e tolerância a falhas.',
        tags: ['Python', 'Sistemas Distribuídos', 'Redes', 'Inatel'],
        icone: Network,
        github: 'https://github.com/LucasDavid80/Sistemas-Distribuidos'
    },
    {
        id: 'mosaico-fotos',
        nome: 'Mosaico de Fotos & PDF',
        categoria: 'mobile',
        descricao:
            'App mobile Flutter nativo concebido para desafio técnico: captura fotos via câmera, gera um layout de mosaico dinâmico baseado na proporção das fotos e exporta o resultado em documento PDF.',
        tags: ['Flutter', 'C++', 'Camera Nativa', 'Geração de PDF'],
        icone: Camera,
        github: 'https://github.com/LucasDavid80/Mosaico-de-fotos'
    },
    {
        id: 'inatel-housing',
        nome: 'Inatel Housing',
        categoria: 'academico',
        descricao:
            'Projeto de IHC (Interação Humano-Computador) para otimização da busca de moradia estudantil em Santa Rita do Sapucaí. Análise de usuários, Personas, HTA e protótipo funcional.',
        tags: ['IHM', 'UX Research', 'HTML/CSS', 'Design System'],
        icone: GraduationCap,
        github: 'https://github.com/LucasDavid80/S05-Projeto-pratico',
        deploy: 'https://lucasdavid80.github.io/S05-Projeto-pratico/'
    },
    {
        id: 'gemini-olimpiadas',
        nome: 'Olimpíadas + Gemini AI',
        categoria: 'ia',
        descricao:
            'Aplicação web desenvolvida durante a Imersão Alura explorando a API do Google Gemini para pesquisa semântica e catálogo de atletas olímpicos brasileiros.',
        tags: ['Google Gemini AI', 'JavaScript', 'HTML/CSS', 'Alura'],
        icone: Brain,
        github: 'https://github.com/LucasDavid80/frontendWithGeminiAlura',
        deploy: 'https://olimpiadas-beta.vercel.app'
    },
    {
        id: 'escola-django',
        nome: 'Gestão Escolar Django',
        categoria: 'fullstack',
        descricao:
            'Sistema administrativo web completo para gestão educacional (cadastros de turmas, alunos, notas e frequência) utilizando o framework Django e banco de dados relacional.',
        tags: ['Python', 'Django', 'MVC', 'PostgreSQL'],
        icone: Layers,
        github: 'https://github.com/LucasDavid80/project_escola_django'
    }
];

export default function ProjetosPage() {
    const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria>('todos');

    const categorias: { id: Categoria; label: string }[] = [
        { id: 'todos', label: 'Todos os Projetos' },
        { id: 'fullstack', label: 'Full-Stack & Web' },
        { id: 'mobile', label: 'Mobile & Desktop' },
        { id: 'ia', label: 'Inteligência Artificial' },
        { id: 'academico', label: 'Acadêmico & Otimização' }
    ];

    const projetosFiltrados = projetosData.filter((item) => {
        if (categoriaAtiva === 'todos') return true;
        return item.categoria === categoriaAtiva;
    });

    return (
        <>
            <Cabecalho />
            <main className="min-h-screen bg-black pt-28 pb-20">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Voltar para Início */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-green-500 transition duration-200"
                        >
                            <ArrowLeft size={16} />
                            Voltar para o Início
                        </Link>
                    </div>

                    {/* Título e Subtítulo */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                            Galeria de <span className="text-green-500">Projetos</span>
                        </h1>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Repositórios, aplicações full-stack, utilitários desktop, modelos de inteligência artificial e experimentos acadêmicos desenvolvidos ao longo da minha trajetória.
                        </p>
                    </div>

                    {/* Abas de Filtro por Categoria */}
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16">
                        {categorias.map((cat) => {
                            const ativo = categoriaAtiva === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setCategoriaAtiva(cat.id)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition duration-300 cursor-pointer ${
                                        ativo
                                            ? 'bg-green-500 text-black shadow-lg shadow-green-500/25 scale-105'
                                            : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Grid de Cards dos Projetos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projetosFiltrados.map((projeto) => {
                            const IconComponent = projeto.icone;
                            return (
                                <div
                                    key={projeto.id}
                                    className="bg-zinc-950 rounded-2xl border border-zinc-800/80 hover:border-green-500/60 transition duration-300 flex flex-col overflow-hidden group hover:-translate-y-1.5 shadow-md hover:shadow-xl hover:shadow-green-500/5"
                                >
                                    {/* Topo: Miniatura ou Ilustração */}
                                    <div className="relative h-48 w-full bg-zinc-900 flex items-center justify-center overflow-hidden border-b border-zinc-800/80">
                                        {projeto.imagem ? (
                                            <Image
                                                src={projeto.imagem}
                                                alt={`Miniatura de ${projeto.nome}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition duration-500"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center p-6 text-center">
                                                <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:border-green-500/40 transition duration-300">
                                                    <IconComponent className="text-zinc-400 group-hover:text-green-400 transition duration-300" size={32} />
                                                </div>
                                                <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                                                    {projeto.categoria}
                                                </span>
                                            </div>
                                        )}

                                        {/* Badge de Destaque no topo da miniatura */}
                                        {projeto.destaque && (
                                            <span className="absolute top-3 right-3 bg-green-500/90 text-black text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                                                Destaque
                                            </span>
                                        )}
                                    </div>

                                    {/* Corpo do Card */}
                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition">
                                                {projeto.nome}
                                            </h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed mb-5 line-clamp-3">
                                                {projeto.descricao}
                                            </p>

                                            {/* Tags de Tecnologias */}
                                            <div className="flex flex-wrap gap-1.5 mb-6">
                                                {projeto.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-0.5 text-xs rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Rodapé do Card com Ações */}
                                        <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                {projeto.github && (
                                                    <Link
                                                        href={projeto.github}
                                                        target="_blank"
                                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 px-3 py-2 rounded-lg border border-zinc-800 transition"
                                                    >
                                                        <Github size={14} /> Repositório
                                                    </Link>
                                                )}

                                                {projeto.deploy && (
                                                    <Link
                                                        href={projeto.deploy}
                                                        target="_blank"
                                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-400 hover:text-green-300 bg-green-500/10 hover:bg-green-500/20 px-3 py-2 rounded-lg border border-green-500/30 transition"
                                                    >
                                                        <ExternalLink size={14} /> Acessar
                                                    </Link>
                                                )}
                                            </div>

                                            {projeto.observacao && (
                                                <span className="text-[11px] text-zinc-500 italic font-medium ml-auto">
                                                    {projeto.observacao}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Rodapé da Galeria - GitHub Link Geral */}
                    <div className="mt-20 p-8 rounded-2xl bg-zinc-950 border border-zinc-800 text-center flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-left">
                            <h4 className="text-lg font-bold text-white mb-1">Quer conferir todo o histórico de commits?</h4>
                            <p className="text-sm text-zinc-400">Visite meu perfil no GitHub para ver contribuições, gists e código-fonte aberto.</p>
                        </div>
                        <Link
                            href="https://github.com/LucasDavid80"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-6 py-3 rounded-full border border-zinc-700 hover:border-green-500 transition duration-300 text-sm whitespace-nowrap"
                        >
                            <Github size={18} />
                            Ver Perfil no GitHub
                        </Link>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
