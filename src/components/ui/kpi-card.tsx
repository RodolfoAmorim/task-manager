interface KpiCardProps {
  title: string;
  value: number;
  subLabel: string;
  total?: number;
}

export function KpiCard({ title, value, subLabel, total = 100 }: KpiCardProps) {
  const percentage = Math.min(Math.round((value / total) * 100), 100);

  return (
    <div className="shadow-card flex min-h-48 min-w-44 snap-start flex-col items-start justify-between gap-4 rounded-3xl bg-white px-4 py-6">
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

        {/* progress bar */}
        <div className="relative h-3 w-full bg-[url('/img/bars.svg')] bg-size-[10px] bg-top-left bg-repeat-x">
          <div
            className="absolute inset-0 right-auto rounded-xs bg-purple-400"
            style={{ width: percentage + "px" }}
          />
        </div>
      </div>
    </div>
  );
}
