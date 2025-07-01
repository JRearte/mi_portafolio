import { tecnologias } from '../data/tecnologias';

const lenguajes = [
  tecnologias.typescript,
  tecnologias.javascript,
  tecnologias.php,
  tecnologias.html,
  tecnologias.css,
];

const otrosLenguajes = [
  tecnologias.python,
  tecnologias.java,
];

const frameworks = [
  tecnologias.react,
  tecnologias.laravel,
  tecnologias.bootstrap,
];

const librerias = [
  tecnologias.tailwind,
  tecnologias.leaflet,
  tecnologias.chartjs,
];

const herramientas = [
  tecnologias.git,
  tecnologias.github,
  tecnologias.postman,
  tecnologias.vscode,
  tecnologias.vite,
];

const basesDeDatos = [
  tecnologias.mysql,
];


export default function Kit() {
  return (
    <section id="kit" className="text-white pt-16 pb-8 px-4 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Título principal con borde blanco */}
        <h2 className="text-4xl font-doto font-bold mb-4 text-center text-white">
          Mi Kit de Herramientas
        </h2>
        <div className="mx-auto w-full h-0.5 bg-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] rounded mb-12" />

        <div className="grid md:grid-cols-3 gap-10">
          {/* Lenguajes */}
          <div>
            <h3 className="text-2xl mb-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255)]">Lenguajes</h3>
            <ul className="space-y-4">
              {lenguajes.map(({ Icon, nombre, color }) => (
                <li
                  key={nombre}
                  className="flex items-center transition font-ibm-plex-mono cursor-default hover:scale-105"
                >
                  <Icon className={`${color} w-6 h-6 mr-2`} /> {nombre}
                </li>
              ))}
              <div className="hidden md:block h-0.5 bg-white my-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] rounded" />
              {otrosLenguajes.map(({ Icon, nombre, color }) => (
                <li
                  key={nombre}
                  className="flex items-center transition font-ibm-plex-mono cursor-default hover:scale-105"
                >
                  <Icon className={`${color} w-6 h-6 mr-2`} /> {nombre}
                </li>
              ))}
            </ul>
          </div>

          {/* Frameworks & Librerías */}
          <div>
            <h3 className="text-2xl mb-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255)]">Frameworks & Librerías</h3>
            <ul className="space-y-4">
              {frameworks.map(({ Icon, nombre, color }) => (
                <li
                  key={nombre}
                  className="flex items-center transition font-ibm-plex-mono cursor-default hover:scale-105"
                >
                  <Icon className={`${color} w-6 h-6 mr-2`} /> {nombre}
                </li>
              ))}
              <div className="hidden md:block h-0.5 bg-white my-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] rounded" />
              {librerias.map(({ Icon, nombre, color }) => (
                <li
                  key={nombre}
                  className="flex items-center transition font-ibm-plex-mono cursor-default hover:scale-105"
                >
                  <Icon className={`${color} w-6 h-6 mr-2`} /> {nombre}
                </li>
              ))}
            </ul>
          </div>

          {/* Herramientas & BD */}
          <div>
            <h3 className="text-2xl mb-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255)]">Herramientas & BD</h3>
            <ul className="space-y-4">
              {herramientas.map(({ Icon, nombre, color }) => (
                <li
                  key={nombre}
                  className="flex items-center transition font-ibm-plex-mono cursor-default hover:scale-105"
                >
                  <Icon className={`${color} w-6 h-6 mr-2`} /> {nombre}
                </li>
              ))}
              <div className="hidden md:block h-0.5 bg-white my-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] rounded" />
              {basesDeDatos.map(({ Icon, nombre, color }) => (
                <li
                  key={nombre}
                  className="flex items-center transition font-ibm-plex-mono cursor-default hover:scale-105"
                >
                  <Icon className={`${color} w-6 h-6 mr-2`} /> {nombre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

