import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        select-none
        min-h-screen
        flex items-center
        px-4
      "
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-8">
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

          <p className="font-ibm-plex-mono text-lg leading-relaxed text-justify text-gray-50">
            Mi nombre es Jonatán Rearte. Soy Analista de Sistemas y desarrollador web full stack de Argentina,
            con enfoque en el diseño lógico, la arquitectura de software y la construcción de soluciones mantenibles.
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="image/logo-sf.webp"
            alt="Logo personal"
            draggable="false"
            className="logo-neon w-full h-auto max-w-xs md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
