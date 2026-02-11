import { Progress } from "./progress";

interface KpiCardProps {
  title: string;
  value: number;
  subLabel: string;
  total?: number;
}

export function KpiCard({ title, value, subLabel, total = 100 }: KpiCardProps) {
  const percentage = Math.min(Math.round((value / total) * 100), 100);

  return (
    <div className="card flex min-h-48 min-w-48 snap-start flex-col items-start justify-between gap-4 px-4 py-6">
      <div className="flex flex-col items-start justify-start space-y-4 text-gray-800">
        <h3 className="tracking-05px leading-none">{title}</h3>

        <span className="tracking-05px text-4xl leading-tight font-medium">
          {value}
        </span>
      </div>

      <div className="w-full space-y-1">
        <div className="flex items-end justify-between text-sm leading-tight font-light text-gray-700">
          <span>{subLabel}</span>

          <span>
            {value}/{total}
          </span>
        </div>

        <Progress
          value={percentage}
          height={12}
          color={"var(--color-purple-400)"}
        />
      </div>
    </div>
  );
}
