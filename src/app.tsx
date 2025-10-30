import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Laboratorio from "./pages/Laboratorio";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Si la página se recarga y no está en "/", forzar inicio
    if (location.pathname !== "/") {
      window.location.href = import.meta.env.BASE_URL;
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/laboratorio" element={<Laboratorio />} />
      {/* Opcional: cualquier otra ruta desconocida */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}