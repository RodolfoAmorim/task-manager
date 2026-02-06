"use client";

import { cn } from "@/utils/cn";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { StripePattern } from "./stripe-pattern";
import { ChartTooltip } from "./chart-tooltip";
import { ChevronDownIcon } from "lucide-react";

interface TaskData {
  name: string;
  valueA: number;
  valueB: number;
}

interface StackedBarChartProps {
  data: TaskData[];
  title: string;
  legendA: string;
  legendB: string;
  className?: string;
}

export function StackedBarChart({
  data,
  legendA,
  legendB,
  title,
  className,
}: StackedBarChartProps) {
  const name_map = {
    valueA: legendA,
    valueB: legendB,
  };

  return (
    <div
      className={cn(
        "shadow-card h-92 w-full rounded-xl bg-white p-4",
        className,
      )}
    >
      <header className="mb-8 flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-xl leading-tight text-gray-800">{title}</h2>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm leading-tight text-gray-700">
          <div className="flex items-center gap-2">
            <div className="size-3 rotate-90 rounded-sm bg-[url('/img/bars.svg')]" />
            {legendB}
          </div>

          <div className="flex items-center gap-2">
            <div className="size-3 rounded-sm bg-purple-600" /> {legendA}
          </div>

          <div className="relative">
            <button className="tracking-05px flex items-center justify-center gap-2 rounded-lg bg-gray-200 px-2 py-0.5 text-sm leading-tight font-medium text-gray-700">
              2025 <ChevronDownIcon />
            </button>
          </div>
        </div>
      </header>

      <ResponsiveContainer width="100%" height="75%">
        <BarChart
          data={data}
          margin={{ top: 0, right: 0, left: -40, bottom: 16 }}
        >
          <defs>
            <StripePattern />
          </defs>

          <CartesianGrid vertical={false} stroke="#f4f4f5" />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#a1a1aa", fontSize: 14 }}
            dy={15}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#a1a1aa", fontSize: 12 }}
          />

          <Tooltip
            cursor={{ fill: "#f4f4f5", opacity: 0.5 }}
            content={<ChartTooltip nameMap={name_map} />}
          />

          <Bar
            dataKey="valueA"
            stackId="tasks"
            fill="var(--color-purple-600)"
            barSize={32}
            radius={2}
          />

          <Bar
            dataKey="valueB"
            stackId="tasks"
            fill="url(#stripe-pattern)"
            barSize={32}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
