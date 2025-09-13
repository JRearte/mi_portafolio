import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const enlaces = [
  {
    nombre: 'GitHub',
    url: 'https://github.com/jrearte',
    Icono: FaGithub,
    hover: 'hover:text-gray-400',
  },
  {
    nombre: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jonatán-rearte',
    Icono: FaLinkedin,
    hover: 'hover:text-blue-500',
  },
  {
    nombre: 'Correo',
    url: 'mailto:jrearte198@gmail.com',
    Icono: FaEnvelope,
    hover: 'hover:text-red-500',
  },
];

export default function Footer() {
  const abrirEnlace = (url: string) => {
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <footer id="footer" className="bg-stone-900 text-white p-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm mb-2 md:mb-0">
          © {new Date().getFullYear()} Jonatán Rearte. Todos los derechos reservados.
        </div>
        <div className="flex space-x-4">
          {enlaces.map(({ nombre, url, Icono, hover }, index) => (
            <button
              key={index}
              onClick={() => abrirEnlace(url)}
              className={`transition ${hover}`}
              aria-label={nombre}
              title={nombre}
            >
              <Icono className="w-5 h-5" />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
