import { useEffect, useRef, useState } from "react";
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

const orderedSections: Section[] = [
  "hero",
  "about",
  "kit",
  "proyectos",
  "formulario",
];

export default function Index() {
  const [section, setSection] = useState<Section>("hero");
  const mainRef = useRef<HTMLElement | null>(null);
  const lockScrollRef = useRef(false);

  useEffect(() => {
    const mainEl = mainRef.current;

    if (!mainEl) {
      return;
    }

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 12) {
        return;
      }

      const target = event.target as HTMLElement | null;

      // Permite scroll normal dentro de modales u otros contenedores interactivos.
      if (target?.closest('[data-wheel-lock="true"]')) {
        return;
      }

      event.preventDefault();

      if (lockScrollRef.current) {
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;

      setSection((current) => {
        const currentIndex = orderedSections.indexOf(current);
        const nextIndex = Math.max(
          0,
          Math.min(orderedSections.length - 1, currentIndex + direction)
        );

        if (currentIndex === nextIndex) {
          return current;
        }

        lockScrollRef.current = true;
        window.setTimeout(() => {
          lockScrollRef.current = false;
        }, 520);

        return orderedSections[nextIndex];
      });
    };

    mainEl.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      mainEl.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-stone-950">
      <Header section={section} setSection={setSection} />

      {/* Viewport de secciones */}
      <main ref={mainRef} className="relative flex-1 overflow-hidden">

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
