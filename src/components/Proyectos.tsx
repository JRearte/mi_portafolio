import { useState } from "react";
import { proyectos } from "../data/proyectos";
import type { Proyecto } from "../types/proyectos";
import { XCircle } from "lucide-react";

export default function ProyectosGrid() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<Proyecto | null>(null);

  const abrirModal = (proyecto: Proyecto) => {
    setProyectoSeleccionado(proyecto);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setProyectoSeleccionado(null);
  };

  return (
    <>
      <section id="proyectos" className=" max-w-5xl mx-auto py-8">
        <h2 className="text-4xl font-doto font-bold mb-4 text-center text-white">
          Mis Proyectos
        </h2>
        <div className="mx-auto w-full h-0.5 bg-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] rounded mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 py-4">

          {proyectos.map((proyecto: Proyecto, i: number) => (
            <div
              key={i}
              onClick={() => abrirModal(proyecto)}
              className="relative rounded-xl border-white border overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 group"
            >
              {/* Imagen completa */}
              <img
                src={proyecto.imagenes[0]}
                alt={proyecto.nombre}
                className="w-full h-64 object-cover"
              />

              {/* Footer con blur y texto */}
              <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-sm py-2 px-4">
                <h3 className="text-white font-semibold text-lg text-center drop-shadow-md">
                  {proyecto.nombre}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {modalAbierto && proyectoSeleccionado && (
        <div
          className="fixed inset-0 bg-slate-950/80 flex justify-center items-center z-50"
          onClick={cerrarModal}
        >
          <div
            className="bg-stone-950 text-white rounded-xl w-full max-w-5xl relative shadow-2xl max-h-[90vh] overflow-y-auto px-6 pb-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-20 bg-stone-950 pt-4 pb-2 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">{proyectoSeleccionado.nombre}</h2>
              <XCircle
                onClick={cerrarModal}
                className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition"
              />
            </div>


            {/* Imagenes carrusel */}
            <div className="flex overflow-x-auto space-x-4 mb-6">
              {proyectoSeleccionado.imagenes.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Vista ${i}`}
                  draggable="false"
                  className="inline-block w-[500px] h-[280px] object-cover rounded-xl border border-stone-800 shadow-md"
                />
              ))}
            </div>

            {/* Descripción */}
            {proyectoSeleccionado.descripcion.map((parrafo, index) => (
              <p
                key={index}
                className="mb-4 text-gray-300 text-justify leading-relaxed"
              >
                {parrafo}
              </p>
            ))}


            {/* Funcionalidades */}
            <ul className="space-y-2 mb-6 list-disc list-inside text-gray-300">
              {proyectoSeleccionado.funcionalidades?.map(({ Icon, Item }, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-md bg-gradient-to-r from-stone-800 via-stone-900 to-stone-800 shadow-md"
                >
                  <Icon className="text-stone-50 text-lg drop-shadow-[0_0_2px_rgba(255,255,255,0.9)] flex-shrink-0 logo-neon" />
                  <span>{Item}</span>
                </li>
              ))}
            </ul>


            {/* Tecnologias */}
            <div className="flex flex-wrap gap-3 border-t border-stone-700 pt-4 items-center justify-center">
              {proyectoSeleccionado.tecnologias.map(({ nombre, Icon, color }, i) => (
                <span
                  key={i}
                  className={`flex items-center gap-2 text-sm font-semibold px-3 py-1 rounded bg-stone-900 ${color} shadow-[0_0_2px_1px] ${color}`}
                  title={nombre}
                >
                  <Icon className="w-4 h-4" />
                  {nombre}
                </span>
              ))}
            </div>



          </div>
        </div>
      )}

    </>
  );
}
