import {
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaPhp,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaLeaf,
  FaChartBar,
  FaGithub,
  FaLock,
  FaLockOpen,
  FaCheckCircle, 
  FaSpinner, 
  FaTools, 
  FaClock
} from 'react-icons/fa';

import { SiTypescript, SiTailwindcss, SiPostman, SiVsco } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';



export const tecnologias = {
  // Estados de Proyectos
  finalizado: { Icon: FaCheckCircle, nombre: 'Finalizado', color: 'text-green-500', bg: 'bg-green-900' },
  en_proceso: { Icon: FaSpinner, nombre: 'En Proceso', color: 'text-yellow-400', bg: 'bg-yellow-900' },
  mantenimiento: { Icon: FaTools, nombre: 'Mantenimiento', color: 'text-blue-400', bg: 'bg-blue-900' },
  pendiente: { Icon: FaClock, nombre: 'Pendiente', color: 'text-red-400', bg: 'bg-red-900' },
  
  // Visibilidad
  privado: { Icon: FaLock, nombre: 'Privado', color: 'text-orange-500' },
  publico: { Icon: FaLockOpen, nombre: 'Público', color: 'text-green-500' },

  // Lenguajes
  typescript: { Icon: SiTypescript, nombre: 'TypeScript', color: 'text-sky-500' },
  javascript: { Icon: FaJs, nombre: 'JavaScript', color: 'text-yellow-400' },
  php: { Icon: FaPhp, nombre: 'PHP', color: 'text-blue-400' },
  html: { Icon: FaHtml5, nombre: 'HTML 5', color: 'text-orange-500' },
  css: { Icon: FaCss3Alt, nombre: 'CSS 3', color: 'text-cyan-400' },

  // Frameworks
  react: { Icon: FaReact, nombre: 'React', color: 'text-cyan-400' },
  laravel: { Icon: FaLaravel, nombre: 'Laravel', color: 'text-red-500' },
  bootstrap: { Icon: FaBootstrap, nombre: 'Bootstrap', color: 'text-purple-600' },

  // Librerías
  tailwind: { Icon: SiTailwindcss, nombre: 'Tailwind CSS', color: 'text-cyan-400' },
  leaflet: { Icon: FaLeaf, nombre: 'Leaflet', color: 'text-green-500' },
  chartjs: { Icon: FaChartBar, nombre: 'Chart.js', color: 'text-yellow-500' },

  // Herramientas
  git: { Icon: FaGitAlt, nombre: 'Git', color: 'text-orange-500' },
  github: { Icon: FaGithub, nombre: 'GitHub', color: 'text-white' },
  postman: { Icon: SiPostman, nombre: 'Postman', color: 'text-orange-400' },
  vscode: { Icon: SiVsco, nombre: 'VS Code', color: 'text-blue-500' },

  // Bases de Datos
  mysql: { Icon: GrMysql, nombre: 'MySQL', color: 'text-yellow-400' },
};
