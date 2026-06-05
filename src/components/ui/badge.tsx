import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variant === "default" && "bg-emerald-100 text-emerald-800",
        variant === "secondary" && "bg-cyan-100 text-cyan-900",
        variant === "outline" &&
          "border border-slate-300 bg-white text-slate-700",
        className,
      )}
      {...props}
    />
  );
}
