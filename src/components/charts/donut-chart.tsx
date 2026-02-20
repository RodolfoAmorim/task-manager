"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ChartDataItem {
  name: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: ChartDataItem[];
  innerRadius?: number;
  outerRadius?: number;
}

export function DonutChart({
  data = [],
  innerRadius = 75,
  outerRadius = 100,
}: DonutChartProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = data[activeIndex];
  const displayValue = activeItem?.value ?? 0;
  const displayLabel = activeItem?.name ?? "";

  return (
    <>
      <div className="relative h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={0}
              dataKey="value"
              strokeWidth={0}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  className="cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl leading-tight font-bold text-slate-800">
            {displayValue}
          </span>

          <span className="text-base font-medium text-slate-500">
            {displayLabel}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="block h-3 w-3 rounded-sm"
              style={{ backgroundColor: item.color }}
            ></span>

            <span className="text-sm leading-tight text-slate-700">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
