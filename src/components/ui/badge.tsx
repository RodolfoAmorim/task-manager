import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export function Badge({
  variant,
  children,
}: {
  variant: "success" | "warning";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-2 py-1",
        variant === "success"
          ? "bg-gray-700/10 text-gray-700"
          : "bg-gray-700/10 text-gray-700",
      )}
    >
      {children}
    </span>
  );
}
