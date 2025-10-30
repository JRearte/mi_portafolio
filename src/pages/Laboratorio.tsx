import Header from "../components/Header";
import Footer from "../components/Footer";
import GraficoBarras from "../components/laboratorio/GraficaBarras";
import GraficoDona from "../components/laboratorio/GraficaDona";
import { usuariosAnuales } from "../data/estadistica";
import { HiChartPie } from "react-icons/hi";

export default function Laboratorio() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950 text-white">
      <Header />
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-4xl font-doto font-bold mb-12 text-center border-b border-white pb-4 drop-shadow-[0_0_8px_rgba(255,255,255)]">
          <HiChartPie className="inline-block mr-3 logo-neon" />
          Componentes Estadísticos
        </h2>

        {/* Gráfico de dona */}
        <GraficoDona datos={usuariosAnuales} titulo="Usuarios por mes" />

        {/* Gráfico de barras */}
        <GraficoBarras datos={usuariosAnuales} titulo="Usuarios por mes" />
      </main>
      <Footer />
    </div>
  );
}
