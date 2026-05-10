"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  arrow?: boolean;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, arrow, external, children, className, ...props }, ref) => {
    const base = cn(
      "inline-flex items-center justify-center gap-2 font-medium tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer select-none",
      {
        "text-xs": size === "sm" || size === "md",
        "text-sm": size === "lg",
      },
      {
        "px-4 py-2": size === "sm",
        "px-6 py-3": size === "md",
        "px-8 py-4": size === "lg",
      },
      {
        "bg-[#c8a96e] text-[#050505] hover:bg-[#e8c98e] hover:shadow-[0_0_30px_rgba(200,169,110,0.25)]":
          variant === "primary" || variant === "gold",
        "border border-[#2a2a2a] text-[#888888] hover:border-[#c8a96e] hover:text-[#c8a96e]":
          variant === "outline",
        "text-[#888888] hover:text-[#f5f5f0]": variant === "ghost",
      },
      className
    );

    const content = (
      <>
        {children}
        {arrow && <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(base, "group")}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={cn(base, "group")} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
