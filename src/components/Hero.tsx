import logo from "../assets/image/logo-sf.webp";
import { FaFileAlt, FaTools, FaFolderOpen, FaEnvelope } from "react-icons/fa";


export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-20 max-w-5xl mx-auto gap-8">

      {/* Contenido principal: texto + imagen */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 w-full">
        {/* Texto */}
        <div className="md:w-1/2">
          <p className="font-doto text-4xl font-bold mb-4 text-center md:text-left text-gray-50">
            BIENVENIDOS
          </p>
          <p className="font-ibm-plex-mono text-lg leading-relaxed text-justify mb-6 text-gray-50">
            Mi nombre es Jonatán Rearte. Soy un desarrollador web full stack de Argentina. En búsqueda de nuevas experiencias y conocimientos, me aventuré a aprender <strong>React</strong> para el front-end y <strong>Laravel</strong> para el back-end, con el objetivo de abrir un camino para los analistas de sistemas de mi pueblo.
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src={logo}
            alt="Logo personal"
            draggable="false"
            className="w-full h-auto max-w-xs md:max-w-full"
          />
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* Botón para ver CV */}
        <a
          href="https://www.canva.com/design/DAGqTrUH9_k/1o-JSqaBwvIpPRQ7JYTPag/view?utm_content=DAGqTrUH9_k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h40ce2b8d0a"
          target="_blank"
          rel="noopener noreferrer"
          draggable="false"
          className="flex items-center justify-center gap-2 bg-green-500/30 text-white w-40 text-center px-4 py-2 rounded transition 
         shadow shadow-green-500/50 hover:shadow-green-500 hover:shadow-lg hover:bg-green-600/60 font-ibm-plex-mono"
        >
          <FaFileAlt className="w-4 h-4" />
          Curriculum
        </a>

        {/* Botón Mi Kit */}
        <a
          href="#kit"
          draggable="false"
          className="flex items-center justify-center gap-2 bg-blue-500/30 text-white w-40 text-center px-4 py-2 rounded transition 
         shadow shadow-blue-500/50 hover:shadow-blue-500 hover:shadow-lg hover:bg-blue-600/60 font-ibm-plex-mono"
        >
          <FaTools className="w-4 h-4" />
          Mi Kit
        </a>

        {/* Botón Proyectos */}
        <a
          href="#proyectos"
          draggable="false"
          className="flex items-center justify-center gap-2 bg-red-500/30 text-white w-40 text-center px-4 py-2 rounded transition 
         shadow shadow-red-500/50 hover:shadow-red-500 hover:shadow-lg hover:bg-red-600/60 font-ibm-plex-mono"
        >
          <FaFolderOpen className="w-4 h-4" />
          Proyectos
        </a>

        {/* Botón Contactos */}
        <a
          href="#footer"
          draggable="false"
          className="flex items-center justify-center gap-2 bg-yellow-500/30 text-white w-40 text-center px-4 py-2 rounded transition 
         shadow shadow-yellow-500/50 hover:shadow-yellow-500 hover:shadow-lg hover:bg-yellow-600/60 font-ibm-plex-mono"
        >
          <FaEnvelope className="w-4 h-4" />
          Contactos
        </a>
      </div>

    </section>
  );
}
