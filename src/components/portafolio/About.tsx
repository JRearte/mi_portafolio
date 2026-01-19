import { TypeAnimation } from "react-type-animation";

import { sumarios } from "../../data/academico";
import { useState } from "react";
import { XCircle } from "lucide-react";

export default function About() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const [bloqueActivo, setBloqueActivo] = useState<typeof sumarios[number] | null>(null);

    const abrirModal = (bloque: typeof sumarios[number]) => {
        setBloqueActivo(bloque);
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setBloqueActivo(null);
    };

    return (
        <section
            id="about"
            className="
                select-none
                min-h-screen
                flex flex-col
                justify-center
                px-4
                pb-16
                max-w-5xl
                mx-auto
                gap-8
            "
        >
            <TypeAnimation
                sequence={["SOBRE MÍ"]}
                wrapper="p"
                speed={5}
                cursor={false}
                repeat={0}
                className="font-doto text-4xl font-bold text-center md:text-left text-gray-50"
            />

            <p className="font-ibm-plex-mono text-lg leading-relaxed text-justify text-gray-50">
                Mi enfoque como Analista de Sistemas está orientado al diseño lógico,
                la estructura de los datos y la construcción de soluciones mantenibles.
                Me interesa entender el problema antes de escribir código.
            </p>

            {/* Bloques */}
            <div className="grid gap-4">
                {sumarios.map((bloque) => (
                    <button
                        key={bloque.titulo}
                        onClick={() => abrirModal(bloque)}
                        className="border border-white/20 rounded-xl p-5 text-left
             bg-stone-950/90 hover:border-white transition cursor-pointer"
                    >
                        <div className="flex items-center gap-3 text-white">
                            <bloque.icono
                                className="drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                            />

                            <h3 className="text-lg font-doto">
                                {bloque.titulo}
                            </h3>

                            {/* Contador a la derecha */}
                            <span className="ml-auto text-sm text-white/60">
                                {bloque.items.length} ítems
                            </span>
                        </div>
                    </button>

                ))}
            </div>
            {/* Modal */}
            {modalAbierto && bloqueActivo && (
                <div
                    className="select-none fixed inset-0 bg-slate-950/80 flex justify-center items-center z-50"
                    onClick={cerrarModal}
                >
                    <div
                        className="bg-stone-950 text-white rounded-xl w-full max-w-5xl
                 relative shadow-2xl max-h-[90vh] overflow-y-auto
                 px-6 pb-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 z-20 bg-stone-950 pt-4 pb-2
                      flex items-center justify-between">
                            <h2 className="text-lg font-bold flex items-center gap-2">
                                <bloqueActivo.icono />
                                {bloqueActivo.titulo}
                            </h2>

                            <XCircle
                                onClick={cerrarModal}
                                className="w-6 h-6 text-gray-400 hover:text-white
                     cursor-pointer transition"
                            />
                        </div>

                        {/* Contenido */}
                        <ul className="space-y-3 mt-4 text-gray-300">
                            {bloqueActivo.items.map(({ texto, icono: Icono, title }, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 p-3 rounded-md
                       bg-gradient-to-r from-stone-800 via-stone-900 to-stone-800
                       shadow-md"
                                >
                                    <Icono
                                        title={title}
                                        className="text-stone-50 text-lg flex-shrink-0
                         drop-shadow-[0_0_2px_rgba(255,255,255,0.9)]"
                                    />
                                    <span>{texto}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}
