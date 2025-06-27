import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Index from "./pages/Index";

export function meta() {
  return {
    title: "Portafolio",
    description: "Bienvenido a mi portfolio!"
  };
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
