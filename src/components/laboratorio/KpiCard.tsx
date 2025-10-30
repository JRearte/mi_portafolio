interface Props {
  titulo: string;
  valor: number | string;
  variacion?: string;
  color?: "green" | "red" | "blue";
}

export default function KpiCard({ titulo, valor, variacion, color = "green" }: Props) {
  const colorMap: Record<string, string> = {
    green: "text-green-400",
    red: "text-red-400",
    blue: "text-blue-400",
  };

  return (
    <div className="bg-stone-800 p-4 rounded shadow flex flex-col items-center">
      <h3 className={`text-lg font-semibold ${colorMap[color]}`}>{titulo}</h3>
      <p className="text-3xl font-bold">{valor}</p>
      {variacion && <span className="text-gray-400 text-sm">{variacion}</span>}
    </div>
  );
}
