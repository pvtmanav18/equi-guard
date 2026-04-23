import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-content tracking-tight">{title}</h1>
        <p className="text-sm text-content/40 mt-1">{description}</p>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: { value: string; positive: boolean };
  accent?: string;
  className?: string;
}

export function StatCard({ label, value, subtitle, icon: Icon, trend, className }: StatCardProps) {
  return (
    <div className={cn("glass-card rounded-xl p-5 transition-all duration-300 hover:bg-content/[0.05] hover:border-content/[0.1]", className)}>
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs font-medium uppercase tracking-widest text-content/40">{label}</p>
        {Icon && (
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-content/[0.06]">
            <Icon className="w-4 h-4 text-content/70" />
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-content tracking-tight">{value}</p>
      {(subtitle || trend) && (
        <div className="flex items-center gap-2 mt-1.5">
          {trend && (
            <span className={cn("text-xs font-medium", trend.positive ? "text-content/70" : "text-content/40")}>{trend.value}</span>
          )}
          {subtitle && <span className="text-xs text-content/30">{subtitle}</span>}
        </div>
      )}
    </div>
  );
}
