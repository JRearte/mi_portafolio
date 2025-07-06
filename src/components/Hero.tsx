import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { sumarios } from "../data/academico";

export default function Hero() {

  const [abierto, setAbierto] = useState<string | null>(null);

  const toggle = (titulo: string) => {
    setAbierto((prev) => (prev === titulo ? null : titulo));
  };


  return (
    <section id="hero" className="select-none flex flex-col items-center justify-center px-4 py-20 max-w-5xl mx-auto gap-8">

      {/* Contenido principal: texto + imagen */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 w-full">

        {/* Texto */}
        <div className="md:w-1/2">
          <TypeAnimation
            sequence={["BIENVENIDOS"]}
            wrapper="p"
            speed={5}
            cursor={false}
            repeat={0}
            className="font-doto text-4xl font-bold mb-4 text-center md:text-left text-gray-50"
          />

          <p className="font-ibm-plex-mono text-lg leading-relaxed text-justify mb-6 text-gray-50">
            Mi nombre es Jonatán Rearte. Soy desarrollador web full stack de Argentina. En mi búsqueda constante de nuevas experiencias y conocimientos, decidí aprender <strong>React</strong> para el front-end y <strong>Laravel</strong> para el back-end, con el objetivo de abrir camino a los analistas de sistemas de la Unidad Académica de Río Turbio.
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src="image/logo-sf.webp"
            alt="Logo personal"
            draggable="false"
            className="logo-neon w-full h-auto max-w-xs md:max-w-full"
          />
        </div>
      </div>



      <div className="flex flex-col gap-4 w-full">
        {sumarios.map(({ titulo, icono: Icono, items }) => (
          <div
            key={titulo}
            className={`border rounded-lg p-4 bg-stone-950/90 backdrop-blur transition 
            ${abierto === titulo ? "border-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" : "border-white/20"}
          `}
          >
            <button
              onClick={() => toggle(titulo)}
              className="w-full flex items-center justify-between cursor-pointer text-lg text-white list-none font-ibm-plex-mono"
            >
              <span className="flex items-center gap-2">
                <Icono className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                {titulo}
              </span>
              <span
                className={`text-white transition-transform drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] ${abierto === titulo ? "rotate-180" : ""
                  }`}
              >
                ▼
              </span>
            </button>

            {abierto === titulo && (
              <ul className="mt-4 ml-6 list-none space-y-2 text-sm text-white/90 animate-fade-in">
                {items.map(({ texto, icono: Icono, title }, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icono title={title} className="text-white/90 mt-[2px] flex-shrink-0" />
                    {texto}

                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
