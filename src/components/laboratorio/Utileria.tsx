import {
  HiOutlineArchiveBox,
  HiOutlineTrash,
  HiOutlinePencil,
} from "react-icons/hi2";
import { MdCancel, MdDone } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import Button from "./Boton";

export default function Utileria() {
  const handleAccion = () => alert("Tocaste un boton");

  return (
    <section
      id="utileria"
      className="flex flex-col items-center justify-center px-4 py-20 max-w-6xl mx-auto gap-12"
    >
      {/* Título de sección */}
      <h2 className="w-full text-4xl font-doto text-white font-bold mb-12 border-b border-white pb-4 drop-shadow-[0_0_8px_rgba(255,255,255)] flex items-center justify-center gap-3">
        <HiOutlineArchiveBox className="logo-neon" />
        Utilerías
      </h2>

      {/* Botones futuristas */}
      <div className="flex flex-wrap justify-center gap-6">
        <Button
          texto="Guardar"
          color="rgba(30, 144, 255, 1)" // azul eléctrico
          icono={<FaSave size={18} />}
          onClick={handleAccion}
        />
        <Button
          texto="Aceptar"
          color="rgba(50, 205, 50, 1)" // verde neón
          icono={<MdDone size={18} />}
          onClick={handleAccion}
        />
        <Button
          texto="Eliminar"
          color="rgba(220, 20, 60, 1)" // rojo intenso
          icono={<HiOutlineTrash size={18} />}
          onClick={handleAccion}
        />
        <Button
          texto="Modificar"
          color="rgba(128, 128, 255, 1)" // lila oscuro
          icono={<HiOutlinePencil size={18} />}
          onClick={handleAccion}
        />
        <Button
          texto="Cerrar"
          color="rgba(255, 69, 0, 1)" // naranja oscuro
          icono={<MdCancel size={18} />}
          onClick={handleAccion}
        />
        <Button
          texto="Salir"
          color="rgba(139, 0, 139, 1)" // púrpura intenso
          icono={<BiExit size={18} />}
          onClick={handleAccion}
        />
      </div>
    </section>
  );
}
