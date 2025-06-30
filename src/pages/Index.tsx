import Header from "../components/Header";
import Hero from "../components/Hero";
import Kit from "../components/Kit";
import Proyectos from "../components/Proyectos";
import Footer from "../components/Footer";


export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Header />
      <main className="flex-grow">
        <Hero />      {/* min-h-screen */}
        <Kit />       {/* solo padding vertical */}
        <Proyectos /> {/* solo padding vertical */}
      </main>
      <Footer />
    </div>
  );
}
