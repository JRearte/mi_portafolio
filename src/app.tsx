import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Laboratorio from "./pages/Laboratorio";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/laboratorio" element={<Laboratorio />} />
    </Routes>
  );
}
