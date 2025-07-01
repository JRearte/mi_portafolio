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
    <section id="kit" className="text-gray-200 pt-16 pb-8 px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-doto font-bold mb-12 text-center border-b border-green-400 pb-4">
          Mi Kit de Herramientas
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Lenguajes */}
          <div>
            <h3 className="text-2xl mb-4 text-green-400">Lenguajes</h3>
            <ul className="space-y-4">
              {lenguajes.map(({ Icon, nombre, color }) => (
                <li key={nombre} className="flex items-center hover:scale-105 transition font-ibm-plex-mono">
                  <Icon className={`${color} w-6 h-6 mr-2`} /> {nombre}
                </li>
              ))}
              <hr className="hidden md:block border-green-400 my-4" />
              {otrosLenguajes.map(({ Icon, nombre, color }) => (
                <li key={nombre} className="flex items-center hover:scale-105 transition font-ibm-plex-mono">
                  <Icon className={`${color} w-6 h-6 mr-2`} /> {nombre}
                </li>
              ))}
            </ul>
          </div>

          {/* Frameworks & Librerías */}
          <div>
            <h3 className="text-2xl mb-4 text-green-400">Frameworks & Librerías</h3>
            <ul className="space-y-4">
              {frameworks.map(({ Icon, nombre, color }) => (
                <li key={nombre} className="flex items-center hover:scale-105 transition font-ibm-plex-mono">
                  <Icon className={`${color} w-6 h-6 mr-2`} /> {nombre}
                </li>
              ))}
              <hr className="hidden md:block border-green-400 my-4" />
              {librerias.map(({ Icon, nombre, color }) => (
                <li key={nombre} className="flex items-center hover:scale-105 transition font-ibm-plex-mono">
                  <Icon className={`${color} w-6 h-6 mr-2`} /> {nombre}
                </li>
              ))}
            </ul>
          </div>

          {/* Herramientas & BD */}
          <div>
            <h3 className="text-2xl mb-4 text-green-400">Herramientas & BD</h3>
            <ul className="space-y-4">
              {herramientas.map(({ Icon, nombre, color }) => (
                <li key={nombre} className="flex items-center hover:scale-105 transition font-ibm-plex-mono">
                  <Icon className={`${color} w-6 h-6 mr-2`} /> {nombre}
                </li>
              ))}
              <hr className="hidden md:block border-green-400 my-4" />
              {basesDeDatos.map(({ Icon, nombre, color }) => (
                <li key={nombre} className="flex items-center hover:scale-105 transition font-ibm-plex-mono">
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