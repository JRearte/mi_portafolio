import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center px-4 py-20 max-w-5xl mx-auto gap-8">

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
            className="w-full h-auto max-w-xs md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
