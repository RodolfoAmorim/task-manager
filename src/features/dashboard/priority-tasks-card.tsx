"use client";

import { ChevronDownIcon } from "lucide-react";
import { DonutChart } from "@/components/charts/donut-chart";

const chartData = [
  { name: "Críticas", value: 15, color: "#1e1b4b" },
  { name: "Alta", value: 20, color: "#dc2626" },
  { name: "Média", value: 35, color: "#f59e0b" },
  { name: "Baixa", value: 25, color: "#22c55e" },
  { name: "Leve", value: 5, color: "#e5e7eb" },
];

export function PriorityTasksChart() {
  return (
    <div className="card w-full space-y-6 xl:w-auto xl:flex-1">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="card-title text-lg">Tarefas por Prioridades</h3>

        <button className="tracking-05px flex items-center justify-center gap-2 rounded-lg bg-gray-200 px-2 py-0.5 text-sm leading-tight font-medium text-gray-700">
          essa semana <ChevronDownIcon />
        </button>
      </div>

      <DonutChart data={chartData} />
    </div>
  );
}
