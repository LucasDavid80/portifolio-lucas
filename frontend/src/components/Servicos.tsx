import { Code, Smartphone } from 'lucide-react'; // Removi o 'BookOpen' pois não será mais usado

export default function Servicos() {
    return (
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4">

                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    Como posso <span className="text-green-500">ajudar você?</span>
                </h2>

                {/* ALTERADO: De grid-cols-3 para grid-cols-2 e adicionado max-w-4xl para centralizar */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* Card 1: Freelance Web */}
                    <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-green-500 transition hover:-translate-y-2">
                        <div className="w-12 h-12 bg-green-500/10 flex items-center justify-center rounded-lg mb-6">
                            <Code className="text-green-500" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Sites & Landing Pages</h3>
                        <p className="text-zinc-400 mb-6">
                            Desenvolvimento de sites profissionais para comércios locais e profissionais liberais. Seus clientes precisam te achar no Google.
                        </p>
                        <span className="text-sm text-green-500 font-bold">A partir de R$ 600,00</span>
                    </div>

                    {/* Card 2: Apps Mobile */}
                    <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-green-500 transition hover:-translate-y-2">
                        <div className="w-12 h-12 bg-green-500/10 flex items-center justify-center rounded-lg mb-6">
                            <Smartphone className="text-green-500" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Aplicativos Mobile</h3>
                        <p className="text-zinc-400 mb-6">
                            Tire sua ideia do papel. Apps para Android e iOS desenvolvidos com Flutter, ideais para gestão ou delivery.
                        </p>
                        <span className="text-sm text-green-500 font-bold">Orçamento sob medida</span>
                    </div>

                    {/* Card 3: Aulas (O dinheiro rápido) */}
                    <div style={{ display: "none" }} className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-green-500 transition hover:-translate-y-2">
                        <div className="w-12 h-12 bg-green-500/10 flex items-center justify-center rounded-lg mb-6">
                            {/* <BookOpen className="text-green-500" size={24} /> */}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Aulas Particulares</h3>
                        <p className="text-zinc-400 mb-6">
                            Reforço escolar e universitário em Física e Cálculo. Aprenda com quem vive a Engenharia no Inatel.
                        </p>
                        <span className="text-sm text-green-500 font-bold">R$ 50,00 / hora</span>
                    </div>

                </div>
            </div>
        </section>
    )
}