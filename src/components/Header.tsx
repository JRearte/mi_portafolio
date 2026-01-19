import { useState } from "react";
import {
  Menu,
  X,
  Home,
  UserCheck,
  Wrench,
  FolderOpen,
  Mail,
  FileText,
} from "lucide-react";
import type { Section } from "../types/navigation";
import type { ReactNode } from "react";

type HeaderProps = {
  section: Section;
  setSection: React.Dispatch<React.SetStateAction<Section>>;
};

type Enlace = {
  id: Section;
  texto: string;
  icono: ReactNode;
};

export default function Header({ section, setSection }: HeaderProps) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const enlaces: Enlace[] = [
    { id: "hero", texto: "Inicio", icono: <Home size={16} /> },
    { id: "about", texto: "Sobre mí", icono: <UserCheck size={16} /> },
    { id: "kit", texto: "Mi Kit", icono: <Wrench size={16} /> },
    { id: "proyectos", texto: "Proyectos", icono: <FolderOpen size={16} /> },
    { id: "formulario", texto: "Contacto", icono: <Mail size={16} /> },
  ];

  const handleNavigate = (id: Section) => {
    setSection(id);
    setMenuAbierto(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-900/80 backdrop-blur-md text-white shadow">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigate("hero")}
          className="text-lg font-bold font-ibm-plex-mono hover:text-gray-300 transition cursor-pointer"
        >
          JR
        </button>

        {/* Navegación escritorio */}
        <div className="hidden md:flex gap-4 items-center font-ibm-plex-mono text-sm">
          {enlaces.map(({ id, texto, icono }) => (
            <button
              key={id}
              onClick={() => handleNavigate(id)}
              className={`relative flex items-center justify-center gap-1 px-3 py-2 rounded
                transition duration-300 cursor-pointer
                ${
                  section === id
                    ? "bg-stone-800 after:w-full after:shadow-[0_0_8px_white]"
                    : "hover:bg-stone-800"
                }
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                after:h-0.5 after:bg-white after:rounded
                after:transition-all after:duration-800 after:ease-in-out
                after:w-0 hover:after:w-full hover:after:shadow-[0_0_8px_white]
              `}
            >
              {icono}
              {texto}
            </button>
          ))}

          {/* CV */}
          <button
            onClick={() =>
              window.open(
                `${import.meta.env.BASE_URL}CV_Jonatan_Rearte.pdf`,
                "_blank"
              )
            }
            className="relative flex items-center justify-center gap-1 px-3 py-2 rounded font-semibold
              text-aqua-200 hover:bg-stone-800 hover:text-aqua-200 transition duration-300
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:h-0.5 after:bg-[#7fffd4] after:rounded
              after:transition-all after:duration-500 after:ease-in-out
              after:w-0 hover:after:w-full
              hover:after:shadow-[0_0_12px_#7fffd4,0_0_24px_#7fffd4] cursor-pointer"
          >
            <FileText size={16} />
            CV
          </button>
        </div>

        {/* Hamburguesa móvil */}
        <div className="md:hidden">
          <button onClick={() => setMenuAbierto(!menuAbierto)}>
            {menuAbierto ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="md:hidden bg-stone-800 px-4 pb-4 flex flex-col gap-2 font-ibm-plex-mono text-sm">
          {enlaces.map(({ id, texto, icono }) => (
            <button
              key={id}
              onClick={() => handleNavigate(id)}
              className={`flex items-center gap-2 px-3 py-2 rounded transition
                ${
                  section === id
                    ? "bg-stone-700"
                    : "hover:bg-stone-700"
                }`}
            >
              {icono}
              {texto}
            </button>
          ))}

          <button
            onClick={() =>
              window.open(
                `${import.meta.env.BASE_URL}CV_Jonatan_Rearte.pdf`,
                "_blank"
              )
            }
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-stone-700 transition"
          >
            <FileText size={16} />
            CV
          </button>
        </div>
      )}
    </header>
  );
}
