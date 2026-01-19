import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/portafolio/Hero";
import About from "../components/portafolio/About";
import Kit from "../components/portafolio/Kit";
import Proyectos from "../components/portafolio/Proyectos";
import Formulario from "../components/portafolio/Formulario";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import SectionMotion from "../components/SectionMotion";
import type { Section } from "../types/navigation";

export default function Index() {
  const [section, setSection] = useState<Section>("hero");

  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Header section={section} setSection={setSection} />

      {/* Viewport de secciones */}
      <main className="flex-grow overflow-y-auto overflow-x-hidden relative">

        <AnimatePresence mode="wait">
          {section === "hero" && (
            <SectionMotion key="hero">
              <Hero />
            </SectionMotion>
          )}

          {section === "about" && (
            <SectionMotion key="about">
              <About />
            </SectionMotion>
          )}

          {section === "kit" && (
            <SectionMotion key="kit">
              <Kit />
            </SectionMotion>
          )}

          {section === "proyectos" && (
            <SectionMotion key="proyectos">
              <Proyectos />
            </SectionMotion>
          )}

          {section === "formulario" && (
            <SectionMotion key="formulario">
              <Formulario />
            </SectionMotion>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
