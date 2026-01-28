import Footer from "@/components/shared/Footer";
import Hero from "@/components/Hero";
import Projetos from "@/components/Projetos";
import Servicos from "@/components/Servicos";
import Cabecalho from "@/components/shared/Cabecalho";

export default function Home() {
  return (
    <>
      <Cabecalho />
      <main className="flex flex-col min-h-screen pt-24 bg-black">

        <Hero />
        <Servicos />
        <Projetos />
        <Footer />

      </main>
    </>
  );
}