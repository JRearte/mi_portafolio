import GraficoBarras from "../../components/laboratorio/GraficaBarras";
import GraficoDona from "../../components/laboratorio/GraficaDona";
import { usuariosAnuales } from "../../data/estadistica";
import { HiChartPie } from "react-icons/hi";

export default function Estadistica() {
    return (
        <section id="estadistica" className="flex flex-col items-center justify-center px-4 py-20 max-w-6xl mx-auto gap-12">

            {/* Título de sección */}
            <h2 className="w-full text-4xl font-doto text-white font-bold mb-12 border-b border-white pb-4 drop-shadow-[0_0_8px_rgba(255,255,255)] flex items-center justify-center gap-3">
                <HiChartPie className="logo-neon" />
                Estadística
            </h2>

            {/* Contenedor de gráficos */}
            <div className="flex flex-col gap-12 w-full max-w-4xl">
                {/* Gráfico de dona */}
                <div className="w-full">
                    <GraficoDona datos={usuariosAnuales} titulo="Usuarios por mes" />
                </div>

                {/* Gráfico de barras */}
                <div className="w-full">
                    <GraficoBarras datos={usuariosAnuales} titulo="Usuarios por mes" />
                </div>
            </div>
        </section>
    );
}
