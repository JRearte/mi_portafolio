import { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import { HiOutlineSwatch } from "react-icons/hi2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Chart,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
    datos: { mes: string; mesCompleto: string; valor: number }[];
    titulo?: string;
}

export default function GraficoBarras({ datos, titulo }: Props) {
    const [color, setColor] = useState("#39FF14");
    const chartRef = useRef<Chart<"bar">>(null);

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) return;

        const ctx = chart.ctx as CanvasRenderingContext2D;
        const originalFill = ctx.fill.bind(ctx);

        // Glow neón
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ctx.fill = (...args: [any]) => {
            ctx.save();
            ctx.shadowColor = color;
            ctx.shadowBlur = 15;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            originalFill(...args);
            ctx.restore();
        };

        return () => {
            ctx.fill = originalFill;
        };
    }, [color]);

    const chartData = {
        labels: datos.map(d => d.mes), // Abreviado para eje X
        datasets: [
            {
                label: " Usuarios",
                data: datos.map(d => d.valor),
                backgroundColor: `${color}90`,
                borderColor: color,
                borderWidth: 2,
                borderRadius: 8,
                hoverBackgroundColor: color,
                hoverBorderColor: "#fff",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "bottom" as const, labels: { color } },
            title: { display: true, text: titulo, color, font: { size: 16 } },
            tooltip: {
                backgroundColor: "#1a1a1a",
                titleColor: color,
                bodyColor: "#fff",
                borderColor: color,
                borderWidth: 1,
                callbacks: {
                    // Mostrar mes completo en tooltip
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    title: (tooltipItems: any) => {
                        const index = tooltipItems[0].dataIndex;
                        return datos[index].mesCompleto;
                    },
                },
            },
        },
        scales: {
            x: { ticks: { color }, grid: { color: `${color}30` } },
            y: { ticks: { color }, grid: { color: `${color}30` } },
        },
    };

    return (
        <div className="p-6 bg-stone-900 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300">
            <div className="w-full">
                <Bar ref={chartRef} data={chartData} options={options} />
            </div>
            <div className="flex items-center gap-3">
                <label className="text-white font-ibm-plex-mono text-rm">
                    <HiOutlineSwatch className="inline-block mr-1 h-6 w-6" /> Color del gráfico:
                </label>
                <input
                    type="color"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                    className="w-8 h-6 cursor-pointer rounded-md transition-all duration-300"
                    style={{
                        boxShadow: `0 0 10px ${color}aa`,
                        border: `1px solid ${color}`,
                    }}
                />
            </div>
        </div>
    );
}
