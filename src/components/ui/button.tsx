import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "px-4 py-2 rounded-lg flex items-center justify-center gap-4 font-medium tracking-05px leading-tight text-center transition-colors duration-300 focus:ring-2 focus:ring-purple-400/50 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-purple-600 text-white hover:bg-purple-700",
        ghost: "bg-white text-gray-800 hover:bg-gray-100",
        outline:
          "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
      },
      size: {
        md: "h-12 text-base",
        lg: "h-14 text-lg",
        icon: "size-10 p-0 [&>svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
