import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="w-8 h-px bg-[#c8a96e]" />
      <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e] font-medium">
        {children}
      </span>
    </div>
  );
}
