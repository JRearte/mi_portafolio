import { tecnologias } from './tecnologias';
import type { Proyecto } from '../types/proyectos';
import {
  FiLogIn,           // Login
  FiLogOut,          // Logout
  FiUser,            // Usuario individual
  FiUsers,           // Tutores / familiares
  FiHome,            // Sala / lugar
  FiCalendar,        // Asistencia / fechas
  FiBookOpen,        // Asignaturas / academico
  FiDollarSign,      // Cuotas / pagos
  FiUserCheck,       // Datos médicos (más médico / personal)
  FiFileText         // Reportes / documentos
} from "react-icons/fi";

export const proyectos: Proyecto[] = [
  {
    nombre: "Sistema de información UPA",
    descripcion: [
      "En 2019, a petición de la Unidad Académica de Río Turbio, comenzó el desarrollo del Sistema de Información UPA (SIUpa), con el objetivo de dejar atrás la escritura manual y los archivos físicos, mejorando así la seguridad y el acceso a la información. Esta transformación buscaba brindar mayor eficiencia a la universidad.",
      "En ese contexto, surgió la necesidad de implementar un sistema de seguimiento de asistencias para los infantes, con el fin de garantizar el cumplimiento de los requisitos establecidos para su permanencia en el jardín maternal.",
      "Entre otras funciones, el sistema permite llevar un control adecuado que facilite justificar el acceso a becas estudiantiles, las cuales requieren un mínimo del 50 % de materias aprobadas anualmente. También ayuda a registrar el pago de las cuotas mensuales correspondientes por parte de los trabajadores universitarios.",
      "El sistema fue desarrollado principalmente como tesis para la finalización de la carrera de Analista de Sistemas, y se completó en 2025, luego de atravesar múltiples etapas de documentación, versiones y actualizaciones motivadas por la adopción de nuevas tecnologías."
    ],
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
    enlace: "https://github.com/JRearte/Siupa-laravel.git",
    privado: tecnologias.publico,
    estado: tecnologias.finalizado,
    funcionalidades: [
      { Icon: FiLogIn, Item: "Inicio de sesión con validación de usuario y control de permisos por rol." },
      { Icon: FiLogOut, Item: "Cierre de sesión seguro para mantener la integridad de la cuenta." },
      { Icon: FiUser, Item: "Gestión de usuarios: registrar, modificar y eliminar." },
      { Icon: FiHome, Item: "Modificar información de salas." },
      { Icon: FiCalendar, Item: "Registro, modificación y eliminación de asistencias." },
      { Icon: FiUsers, Item: "Gestión completa de tutores: registrar, modificar y eliminar." },
      { Icon: FiHome, Item: "Administración de contactos autorizados para retirar infantes." },
      { Icon: FiBookOpen, Item: "Seguimiento académico de tutores alumnos: gestionar asignaturas, calificaciones y condiciones." },
      { Icon: FiDollarSign, Item: "Registro y gestión de cuotas mensuales para tutores trabajadores universitarios." },
      { Icon: FiUser, Item: "Gestión de infantes: registrar, modificar, eliminar." },
      { Icon: FiUserCheck, Item: "Registro y eliminación de datos médicos de los infantes (vacunas, alergias, discapacidades)." },
      { Icon: FiUsers, Item: "Gestión de familiares vinculados al infante: registrar, modificar, eliminar." },
      { Icon: FiFileText, Item: "Generación de reportes específicos en PDF sobre tutores, infantes, salas y usuarios." },
      { Icon: FiFileText, Item: "Generación de reportes generales con estadísticas y actividad de los usuarios." }
    ]
  },
  {
    nombre: "ZonAtlas",
    descripcion: [
      "App web que muestra negocios en el mapa de un pueblo. Permite ver productos y precios sin salir de casa, ayudando a la gente a evitar el frío y hacer sus compras más rápido y seguro. También permite a los negocios gestionar sus productos fácilmente.",
    ],
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
    descripcion: [
      "Página web personal donde presento mis proyectos destacados, mis habilidades técnicas y la experiencia que he adquirido como desarrollador web.",
    ],
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
    funcionalidades: [],
  },
];
