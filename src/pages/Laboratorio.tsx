import Header from "../components/Header";
import Footer from "../components/Footer";
import Estadistica from "../components/laboratorio/Estadistica";

export default function Laboratorio() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Header />
      <main className="flex-grow">
        <Estadistica />
      </main>
      <Footer />
    </div>
  );
}