import { FaBrain, FaProjectDiagram, FaCodeBranch, FaUserCheck } from "react-icons/fa";
import { GiGraduateCap, GiNotebook } from "react-icons/gi";
import { HiOutlineDocumentText, HiOutlineClipboardDocumentCheck, HiOutlineCpuChip } from "react-icons/hi2";
import { TbCertificate, TbTopologyStar3, TbBrain } from "react-icons/tb";
import { PiDatabase } from "react-icons/pi";
import { RiProjectorLine, RiBugLine } from "react-icons/ri";
import { MdOutlineLan, MdOutlineMemory, MdDeviceHub } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";

export const sumarios = [
  {
    titulo: "Formación Académica",
    icono: GiGraduateCap,
    items: [
        { texto: "Analista de Sistemas - Finalizado en 2025", icono: GiGraduateCap, title: "Título universitario" },
        { texto: "Proyecto de innovación tecnológica 1.0 – 2024", icono: FaProjectDiagram, title: "Proyecto universitario de innovación tecnológica" },
        { texto: "Formación integral en extensión: hacia el fortalecimiento de la función social de la universidad - 2024", icono: TbCertificate, title: "Curso certificado" },
        { texto: "Diseño de pósters accesibles para divulgación de acciones de extensión e investigación - 2024", icono: TbCertificate, title: "Taller de accesibilidad" },
        { texto: "Hacer y pensar una universidad para todos - 2023", icono: TbCertificate, title: "Curso certificado" },
        { texto: "Protocolo de circulación de la UNPA ante la emergencia sanitaria por COVID-19 - 2022", icono: TbCertificate, title: "Capacitación institucional" },
        { texto: "Usabilidad de sitios de gobierno - 2022", icono: TbCertificate, title: "Curso certificado" },
        { texto: "Interfaz web para sistemas embebidos - 2022", icono: TbCertificate, title: "Curso certificado" },
        { texto: "Terminal de autogestión y revelador de puentes - 2021", icono: TbCertificate, title: "Curso certificado" },
        { texto: "Redes de datos hogareñas: elementos básicos - 2021", icono: TbCertificate, title: "Curso certificado" },
        { texto: "Metodología de diseño de redes: Top Down - 2021", icono: TbCertificate, title: "Curso certificado" },
        { texto: "Aprendiendo a hacer streaming en la Patagonia Austral - 2021", icono: TbCertificate, title: "Curso certificado" },
        { texto: "Game Development: introducción a Unity - 2019", icono: TbCertificate, title: "Curso certificado" },
        { texto: "Hardware y reparación de computadoras - 2019", icono: TbCertificate, title: "Curso certificado" },
        { texto: "Comunicación efectiva - 2019", icono: TbCertificate, title: "Curso certificado" },
        { texto: "Redes de área local: instalación y configuración - 2018", icono: TbCertificate, title: "Curso certificado" },
        { texto: "Maquetación web con HTML5 y CSS3 - 2018", icono: TbCertificate, title: "Curso certificado" }
    ]
  },
  {
    titulo: "Habilidades Técnicas",
    icono: HiOutlineCpuChip,
    items: [
      { texto: "Resolución de problemas lógicos", icono: FaBrain, title: "Basado en Resolución de Problemas y Algoritmos, Matemática I y II, y Estadística" },
      { texto: "Programación orientada a objetos", icono: FaCodeBranch, title: "Adquirido en Programación O.O. y Laboratorio de Programación" },
      { texto: "Diseño y análisis de algoritmos", icono: TbTopologyStar3, title: "Fundamentado en Estructura de Datos y Programación de Algoritmos" },
      { texto: "Modelado de requerimientos (IEEE 830)", icono: HiOutlineDocumentText, title: "Desarrollado en Requerimientos de Software y Análisis y Diseño de Software" },
      { texto: "Gestión de bases de datos relacionales (SQL)", icono: PiDatabase, title: "Basado en la materia Base de Datos" },
      { texto: "Gestión de proyectos de software", icono: RiProjectorLine, title: "Derivado de Gestión de Proyectos de Software y Aspectos Profesionales" },
      { texto: "Redes y conectividad", icono: MdOutlineLan, title: "Basado en Redes y Telecomunicaciones" },
      { texto: "Administración de sistemas operativos", icono: MdOutlineMemory, title: "Adquirido en Sistemas Operativos" },
      { texto: "Pruebas de software y control de calidad", icono: RiBugLine, title: "Cubierto en Validación y Verificación de Software" },
      { texto: "Documentación técnica estandarizada", icono: HiOutlineClipboardDocumentCheck, title: "Aplicación de normas IEEE 830, 829 y 1016" }
    ]
  },
  {
    titulo: "Aptitudes",
    icono: FaBrain,
    items: [
      { texto: "Autodidacta", icono: GiNotebook, title: "Capacidad para aprender de forma independiente nuevas tecnologías y metodologías" },
      { texto: "Responsabilidad profesional", icono: FaUserCheck, title: "Compromiso con los plazos, calidad y ética en el trabajo" },
      { texto: "Puntualidad y organización", icono: IoTimeOutline, title: "Manejo adecuado del tiempo y cumplimiento de los compromisos" },
      { texto: "Pensamiento analítico", icono: TbBrain, title: "Habilidad para descomponer problemas complejos y encontrar soluciones eficientes" },
      { texto: "Orientación a resultados", icono: FiTarget, title: "Enfoque en cumplir metas de forma eficiente" },
      { texto: "Adaptabilidad tecnológica", icono: MdDeviceHub, title: "Facilidad para incorporar nuevas herramientas y entornos de desarrollo" },
      { texto: "Comunicación escrita clara", icono: HiOutlineDocumentText, title: "Capacidad para documentar y explicar ideas técnicas con precisión" }
    ]
  }
];