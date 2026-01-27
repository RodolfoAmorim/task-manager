import { cn } from "@/utils/cn";
import type { LucideIcon } from "lucide-react";
import {
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";

interface RootProps extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
}

const InputRoot = ({ error, className, ...props }: RootProps) => {
  return (
    <div
      data-error={error}
      className={cn(
        `data-[error=true]:border-error group flex items-center gap-2 rounded-lg border border-transparent bg-gray-300/50 px-4 py-2 text-gray-600 focus-within:border focus-within:border-purple-600`,
        className,
      )}
      {...props}
    />
  );
};

interface IconProps {
  icon: LucideIcon;
  className?: string;
}

const InputIcon = ({ icon: Icon, className }: IconProps) => {
  return (
    <Icon
      className={cn(
        `group-data-[error=true]:text-error size-6 group-focus-within:text-purple-600`,
        className,
      )}
      strokeWidth={1.5}
    />
  );
};

const InputField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        `group-data-[error=true]:text-error w-full flex-1 bg-transparent text-base font-light text-gray-800 outline-none placeholder:text-gray-600`,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

InputField.displayName = "InputField";

const InputAction = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(`size-6 text-gray-600 outline-none`, className)}
      {...props}
    />
  );
};

export const Input = {
  Root: InputRoot,
  Icon: InputIcon,
  Field: InputField,
  Action: InputAction,
};
