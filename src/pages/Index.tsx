import Header from "../components/Header";
import Hero from "../components/portafolio/Hero";
import Kit from "../components/portafolio/Kit";
import Proyectos from "../components/portafolio/Proyectos";
import Formulario from "../components/portafolio/Formulario";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Kit />
        <Proyectos />
        <Formulario />
      </main>
      <Footer />
    </div>
  );
}
