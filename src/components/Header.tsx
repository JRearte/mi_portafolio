import { useState } from 'react';
import {
    Menu,
    X,
    Home,
    Wrench,
    FolderOpen,
    Mail,
    FileText
} from 'lucide-react';

export default function Header() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMenuAbierto(false);
        }
    };

    const enlaces = [
        { id: 'hero', texto: 'Inicio', icono: <Home size={16} /> },
        { id: 'kit', texto: 'Mi Kit', icono: <Wrench size={16} /> },
        { id: 'proyectos', texto: 'Proyectos', icono: <FolderOpen size={16} /> },
        { id: 'footer', texto: 'Contactos', icono: <Mail size={16} /> },
    ];

    return (
        <header className="sticky top-0 z-50 bg-stone-900/80 backdrop-blur-md text-white shadow">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo o nombre */}
                <button
                    onClick={() => scrollToSection('hero')}
                    className="text-lg font-bold font-ibm-plex-mono hover:text-gray-300 transition"
                >
                    JR
                </button>

                {/* Navegación de escritorio */}
                <div className="hidden md:flex gap-4 items-center font-ibm-plex-mono text-sm">
                    {enlaces.map(({ id, texto, icono }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="relative flex items-center justify-center gap-1 w-30 px-3 py-2 rounded 
                            hover:bg-stone-800 transition duration-300
                            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                            after:h-0.5 after:bg-white after:rounded
                            after:transition-all after:duration-800 after:ease-in-out
                            after:w-0 hover:after:w-full hover:after:shadow-[0_0_8px_white]"
                        >
                            {icono}
                            {texto}
                        </button>
                    ))}
                    <button
                        onClick={() =>
                            window.open(
                                "https://www.canva.com/design/DAGqTrUH9_k/1o-JSqaBwvIpPRQ7JYTPag/view?utm_content=DAGqTrUH9_k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks",
                                "_blank"
                            )
                        }
                        className="relative flex items-center justify-center gap-1 w-30 px-3 py-2 rounded 
                            hover:bg-stone-800 transition duration-300
                            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                            after:h-0.5 after:bg-red-600 after:rounded
                            after:transition-all after:duration-500 after:ease-in-out
                            after:w-0 hover:after:w-full hover:after:shadow-[0_0_8px_rgba(220,38,38,0.7)]"
                    >
                        <FileText size={16} />
                        CV
                    </button>
                </div>

                {/* Hamburguesa - móvil */}
                <div className="md:hidden">
                    <button onClick={() => setMenuAbierto(!menuAbierto)}>
                        {menuAbierto ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Menú desplegable - móvil */}
            {menuAbierto && (
                <div className="md:hidden bg-stone-800 px-4 pb-4 flex flex-col gap-2 font-ibm-plex-mono text-sm">
                    {enlaces.map(({ id, texto, icono }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-stone-700 transition"
                        >
                            {icono}
                            {texto}
                        </button>
                    ))}
                    <button
                        onClick={() =>
                            window.open(
                                "https://www.canva.com/design/DAGqTrUH9_k/1o-JSqaBwvIpPRQ7JYTPag/view?utm_content=DAGqTrUH9_k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks",
                                "_blank"
                            )
                        }
                        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-stone-700 transition"
                    >
                        <FileText size={16} />
                        Mi CV
                    </button>
                </div>
            )}
        </header>
    );
}
