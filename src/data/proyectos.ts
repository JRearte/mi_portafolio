import { tecnologias } from './tecnologias';
import type { Proyecto } from '../types/proyectos';

export const proyectos: Proyecto[] = [
  {
    nombre: "Sistema de información UPA",
    descripcion:
      "App web para la gestión de información del Jardín Maternal UPA, brindando seguimiento de asistencias y cumplimiento de los reglamentos para la permanencia de los infantes.",
    tecnologias: [
      tecnologias.laravel,
      tecnologias.html,
      tecnologias.css,
      tecnologias.bootstrap,
      tecnologias.chartjs,
      tecnologias.javascript,
      tecnologias.mysql,
    ],
    imagenes: [
      "image/siupa/login.webp",
      "image/siupa/usuario.webp",
      "image/siupa/tutor.webp",
      "image/siupa/sala.webp",
      "image/siupa/estadistica.webp",
      "image/siupa/barra.webp",
      "image/siupa/horario.webp",
    ],
    enlace: null,
    privado: tecnologias.privado,
    estado: tecnologias.finalizado,
  },
  {
    nombre: "ZonAtlas",
    descripcion:
      "App web que muestra negocios en el mapa de un pueblo. Permite ver productos y precios sin salir de casa, ayudando a la gente a evitar el frío y hacer sus compras más rápido y seguro. También permite a los negocios gestionar sus productos fácilmente.",
    tecnologias: [
      tecnologias.react,
      tecnologias.laravel,
      tecnologias.tailwind,
      tecnologias.leaflet,
      tecnologias.typescript,
      tecnologias.html,
      tecnologias.css,
      tecnologias.mysql,
    ],
    imagenes: [
      "image/zonAtlas/login.webp",
      "image/zonAtlas/mapa.webp",
    ],
    enlace: null,
    privado: tecnologias.privado,
    estado: tecnologias.en_proceso,
  },
  {
    nombre: "Portfolio Personal",
    descripcion:
      "Página web personal donde presento mis proyectos destacados, mis habilidades técnicas y la experiencia que he adquirido como desarrollador web.",
    tecnologias: [
      tecnologias.react,
      tecnologias.typescript,
      tecnologias.tailwind,
      tecnologias.html,
    ],
    imagenes: [
      "image/portafolio/hero.webp",
      "image/portafolio/kit.webp",
      "image/portafolio/proyectos.webp",
    ],
    enlace: "/",
    privado: tecnologias.publico,
    estado: tecnologias.mantenimiento,
  },
];
