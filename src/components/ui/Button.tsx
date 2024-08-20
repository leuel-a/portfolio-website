import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn("bg-white text-dark-blue p-2 rounded-md", className)}>
      {children}
    </button>
  );
}
