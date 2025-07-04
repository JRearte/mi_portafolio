import type { IconType } from "react-icons/lib";

export type Proyecto = {
  nombre: string;
  descripcion: string[];
  enlace: string | null;
  privado: {
    color: string;
    Icon: React.ComponentType<{ className?: string }>;
    nombre: string;
  };
  estado: {
    color: string;
    bg: string;
    Icon: React.ComponentType<{ className?: string }>;
    nombre: string;
  };
  tecnologias: {
    Icon: React.ComponentType<{ className?: string; title?: string }>;
    color: string;
    nombre: string;
  }[];
  imagenes: string[];
  funcionalidades?:{ Icon: IconType; Item: string }[];
};
