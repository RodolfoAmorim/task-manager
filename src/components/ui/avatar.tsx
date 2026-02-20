import { cn } from "@/utils/cn";

interface AvatarProps {
  name: string;
  className?: string;
}

export function Avatar({ name, className }: AvatarProps) {
  return (
    <div
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-full bg-purple-600 text-center text-xs text-white lg:size-12",
        className,
      )}
    >
      {name.toUpperCase().slice(0, 2)}
    </div>
  );
}
