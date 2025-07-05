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
  FaClock,
  FaPython,
  FaJava,
} from 'react-icons/fa';

import { SiTypescript, SiTailwindcss, SiPostman, SiVsco, SiVite } from 'react-icons/si';
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
  typescript: {
    Icon: SiTypescript,
    nombre: 'TypeScript',
    color: 'text-sky-500',
    enlace: 'https://www.typescriptlang.org/',
  },
  javascript: {
    Icon: FaJs,
    nombre: 'JavaScript',
    color: 'text-yellow-400',
    enlace: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  php: {
    Icon: FaPhp,
    nombre: 'PHP',
    color: 'text-blue-400',
    enlace: 'https://www.php.net/',
  },
  html: {
    Icon: FaHtml5,
    nombre: 'HTML 5',
    color: 'text-orange-500',
    enlace: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  css: {
    Icon: FaCss3Alt,
    nombre: 'CSS 3',
    color: 'text-cyan-400',
    enlace: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  python: {
    Icon: FaPython,
    nombre: 'Python',
    color: 'text-blue-500',
    enlace: 'https://www.python.org/',
  },
  java: {
    Icon: FaJava,
    nombre: 'Java',
    color: 'text-red-500',
    enlace: 'https://dev.java/',
  },

  // Frameworks
  react: {
    Icon: FaReact,
    nombre: 'React',
    color: 'text-cyan-400',
    enlace: 'https://reactjs.org/',
  },
  laravel: {
    Icon: FaLaravel,
    nombre: 'Laravel',
    color: 'text-red-500',
    enlace: 'https://laravel.com/',
  },
  bootstrap: {
    Icon: FaBootstrap,
    nombre: 'Bootstrap',
    color: 'text-purple-600',
    enlace: 'https://getbootstrap.com/',
  },

  // Librerías
  tailwind: {
    Icon: SiTailwindcss,
    nombre: 'Tailwind CSS',
    color: 'text-cyan-400',
    enlace: 'https://tailwindcss.com/',
  },
  leaflet: {
    Icon: FaLeaf,
    nombre: 'Leaflet',
    color: 'text-green-500',
    enlace: 'https://leafletjs.com/',
  },
  chartjs: {
    Icon: FaChartBar,
    nombre: 'Chart.js',
    color: 'text-yellow-500',
    enlace: 'https://www.chartjs.org/',
  },

  // Herramientas
  git: {
    Icon: FaGitAlt,
    nombre: 'Git',
    color: 'text-orange-500',
    enlace: 'https://git-scm.com/',
  },
  github: {
    Icon: FaGithub,
    nombre: 'GitHub',
    color: 'text-white',
    enlace: 'https://github.com/',
  },
  postman: {
    Icon: SiPostman,
    nombre: 'Postman',
    color: 'text-orange-400',
    enlace: 'https://www.postman.com/',
  },
  vscode: {
    Icon: SiVsco,
    nombre: 'VS Code',
    color: 'text-blue-500',
    enlace: 'https://code.visualstudio.com/',
  },
  vite: {
    Icon: SiVite,
    nombre: 'Vite',
    color: 'text-yellow-400',
    enlace: 'https://vitejs.dev/',
  },

  // Bases de Datos
  mysql: {
    Icon: GrMysql,
    nombre: 'MySQL',
    color: 'text-yellow-400',
    enlace: 'https://www.mysql.com/',
  },



};
