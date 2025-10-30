import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type Plugin } from "chart.js";
import { useMemo } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    datos: { mes: string; mesCompleto: string; valor: number }[];
    titulo?: string;
}

export default function GraficoPastel({ datos, titulo }: Props) {
    const total = useMemo(() => datos.reduce((acc, d) => acc + d.valor, 0), [datos]);

    const colores = [
        "#D32F2F", "#F57C00", "#FBC02D", "#388E3C",
        "#00796B", "#0288D1", "#303F9F", "#7B1FA2",
        "#8E24AA", "#6A1B9A", "#512DA8", "#455A64",
    ];

    const chartData = {
        labels: datos.map(d => d.mesCompleto),
        datasets: [
            {
                data: datos.map(d => d.valor),
                backgroundColor: colores,
                borderColor: "#000000ff",
                borderWidth: 2,
            },
        ],
    };

    // Plugin para dibujar el total en el centro
    const centerTextPlugin: Plugin<"doughnut"> = {
        id: "centerText",
        afterDraw: (chart) => {
            const { ctx, chartArea } = chart;
            if (!ctx || !chartArea) return;

            const centerX = (chartArea.left + chartArea.right) / 2;
            const centerY = (chartArea.top + chartArea.bottom) / 2;

            ctx.save();
            ctx.fillStyle = "#fff";
            ctx.font = "bold 24px IBM Plex Mono";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            // Sombra tipo neón
            ctx.shadowColor = "#fff";
            ctx.shadowBlur = 10;

            ctx.fillText(`${total}`, centerX, centerY);
            ctx.restore();
        },
    };

    // Plugin para agregar sombra/neón a cada segmento
    const shadowPlugin: Plugin<"doughnut"> = {
        id: "shadowSegments",
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        beforeDatasetDraw: (chart, _args, _pluginOptions) => {
            const { ctx } = chart;
            if (!ctx) return;
            ctx.save();
            ctx.shadowColor = "#1b1a1ab4";
            ctx.shadowBlur = 10;
        },
        afterDatasetDraw: (chart) => {
            chart.ctx?.restore();
        }
    };

    const options = {
        responsive: true,
        cutout: "70%",
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    label: (context: any) => {
                        const valor = context.parsed;
                        const porcentaje = ((valor / total) * 100).toFixed(1);
                        const mes = datos[context.dataIndex].mesCompleto;
                        return `${mes}: ${valor} usuarios (${porcentaje}%)`;
                    },
                },
            },
        },
    };

    return (
        <div className="p-6 bg-stone-900 rounded-2xl flex flex-col md:flex-row items-center gap-8">
            {/* Gráfico */}
            <div className="w-full md:w-1/2 p-4">
                <Doughnut
                    data={chartData}
                    options={options}
                    plugins={[centerTextPlugin, shadowPlugin]}
                />
            </div>

            {/* Panel de detalles */}
            <div className="flex flex-col gap-2 text-sm w-full md:w-1/2">
                <h3 className="text-center font-semibold text-lg mb-2 text-white pb-4">{titulo}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                    {datos.map((d, i) => {
                        const porcentaje = ((d.valor / total) * 100).toFixed(1);
                        return (
                            <div
                                key={d.mes}
                                className="flex items-center bg-stone-800 rounded-lg p-2 hover:bg-stone-700 transition-all w-full"
                            >
                                <div
                                    className="w-6 h-6 rounded-sm mr-2 shrink-0"
                                    style={{ backgroundColor: colores[i % colores.length] }}
                                />
                                <div className="flex-1 flex flex-col text-center leading-tight">
                                    <span className="text-white text-xs font-semibold">{d.mesCompleto}</span>
                                    <span className="text-gray-400 text-xs">{d.valor} usuarios ({porcentaje}%)</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
