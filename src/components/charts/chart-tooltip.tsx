"use client";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  nameMap?: Record<string, string>;
}

export function ChartTooltip({
  active,
  payload,
  label,
  nameMap,
}: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="min-w-37.5 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
        <p className="border-gry-500 mb-2 border-b border-b-gray-300 pb-2 text-sm font-medium tracking-wider text-gray-700 uppercase">
          {label}
        </p>

        <div className="flex flex-col gap-2">
          {payload.map((item, index) => {
            const displayName = nameMap?.[item.dataKey] || item.name;

            return (
              <div
                key={index}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="size-2 rounded-full"
                    style={{
                      backgroundColor:
                        item.fill === "url(#stripe-pattern)"
                          ? "var(--color-gray-300)"
                          : item.fill,
                    }}
                  />
                  <span className="text-sm text-gray-800">{displayName}</span>
                </div>

                <span className="text-sm font-medium text-gray-800">
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
