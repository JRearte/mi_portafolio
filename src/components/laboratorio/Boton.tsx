interface BotonProps {
  texto?: string;
  color?: string; // color dinámico tipo "rgba(50,50,50,1)"
  icono?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Boton({ texto, color = "#555", icono, onClick, className }: BotonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "rgba(30, 30, 30, 0.8)", 
        color: "#fff",
        border: `2px solid ${color}`,
        backdropFilter: "blur(6px)",
        boxShadow: `0 0 6px ${color}80`,
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      className={`px-4 py-2 min-w-[150px] rounded-lg flex items-center gap-2 font-semibold ${className ?? ""}`}
      onMouseEnter={(e) => {
        const btn = e.currentTarget as HTMLButtonElement;
        btn.style.backgroundColor = color + "22";
        btn.style.boxShadow = `0 0 15px ${color}80`;
      }}
      onMouseLeave={(e) => {
        const btn = e.currentTarget as HTMLButtonElement;
        btn.style.backgroundColor = "rgba(30,30,30,0.8)";
        btn.style.boxShadow = `0 0 6px ${color}80`;
      }}
    >
      {icono && <span className="flex justify-center items-center w-1/4 logo-neon">{icono}</span>}
      {texto && <span className="flex-1 text-center">{texto}</span>}
    </button>
  );
}
