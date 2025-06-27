import { useState } from "react";
import { proyectos } from "../data/proyectos";
import type { Proyecto } from "../types/proyectos";

function CardProyecto({ proyecto }: { proyecto: Proyecto }) {
  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((indice + 1) % proyecto.imagenes.length);
  };

  const anterior = () => {
    setIndice((indice - 1 + proyecto.imagenes.length) % proyecto.imagenes.length);
  };

  return (
    <div className="relative bg-stone-800 rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col">
      {/* Badge privado */}
      <span
        className={`flex items-center gap-1 px-2 py-1 text-xs rounded-full absolute top-4 right-4 
        ${proyecto.privado.color} bg-stone-900 border border-current shadow-md z-10`}
      >
        <proyecto.privado.Icon className="w-4 h-4" />
        {proyecto.privado.nombre}
      </span>

      {/* Carrusel de imágenes */}
      <div className="relative w-full mb-4">
        <img
          src={proyecto.imagenes[indice]}
          alt={`${proyecto.nombre} imagen ${indice + 1}`}
          draggable="false"
          className="w-full h-48 object-cover rounded transition duration-500"
        />

        <button
          onClick={anterior}
          className="absolute left-0 top-1/2 -translate-y-1/2 
             bg-black/50 text-white w-8 h-8 
             flex items-center justify-center 
             rounded-md hover:bg-black/70 transition"
        >
          ‹
        </button>

        <button
          onClick={siguiente}
          className="absolute right-0 top-1/2 -translate-y-1/2 
             bg-black/50 text-white w-8 h-8 
             flex items-center justify-center 
             rounded-md hover:bg-black/70 transition"
        >
          ›
        </button>

      </div>

      {/* Contenido principal */}
      <div className="flex-grow">
        <div className="mb-2">
          <h3 className="text-2xl font-semibold text-center">{proyecto.nombre}</h3>
        </div>
        <p className="text-justify">{proyecto.descripcion}</p>
      </div>

      {/* Línea con estado centrado */}
      <div className="relative my-6 flex items-center justify-center">
        <div className={`flex-grow border-t border-current ${proyecto.estado.color}`}></div>

        <span
          className={`flex items-center gap-1 px-2 py-1 text-xs rounded-full 
          ${proyecto.estado.color} ${proyecto.estado.bg} border border-current shadow-md`}
        >
          <proyecto.estado.Icon className="w-4 h-4" />
          {proyecto.estado.nombre}
        </span>

        <div className={`flex-grow border-t border-current ${proyecto.estado.color}`}></div>
      </div>

      {/* Footer de tecnologías */}
      <footer className="flex flex-wrap gap-4 justify-center">
        {proyecto.tecnologias.map(({ Icon, color, nombre }) => (
          <Icon key={nombre} className={`${color} w-6 h-6`} title={nombre} />
        ))}
      </footer>
    </div>
  );
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-16 px-4 text-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-doto font-bold mb-12 text-center border-b border-green-400 pb-4">
          Proyectos Destacados
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {proyectos.map((proyecto) => (
            <CardProyecto key={proyecto.nombre} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
}
