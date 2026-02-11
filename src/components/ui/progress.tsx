interface ProgressProps {
  value: number;
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
  backgroundImageUrl?: string;
}

export function Progress({
  value,
  width = "100%",
  height = 12,
  color = "var(--color-purple-400)",
  className,
  backgroundImageUrl = "/img/bars.svg",
}: ProgressProps) {
  const percentage = Math.max(0, Math.min(value, 100));

  return (
    <div
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`relative overflow-hidden rounded-xs ${className ?? ""}`}
      style={{
        width,
        height,
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "left top",
        backgroundSize: "auto 100%",
      }}
    >
      <div
        className="absolute inset-y-0 left-0 rounded-xs"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
    </div>
  );
}
