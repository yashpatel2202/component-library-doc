import { cn } from "@/utils/cn";
import * as Icons from "lucide-react";

export function PageHeader({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description?: string; 
  icon?: string;
}) {
  // Robust icon mapping for Mintlify names
  const iconMap: Record<string, string> = {
    "rocket-launch": "Rocket",
    "layer-group": "Layers",
    "table-layout": "Layout",
    "code-compare": "GitCompare",
    "brackets-curly": "Brackets",
    "grid-2": "LayoutGrid",
    "list": "List",
    "check": "Check"
  };

  const iconName = icon && (iconMap[icon] || icon.charAt(0).toUpperCase() + icon.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()));
  const IconComponent = iconName && (Icons as any)[iconName];

  return (
    <div className="mb-4 border-b border-slate-200 dark:border-zinc-800 pb-2">
      <div className="flex items-center gap-2 mb-1">
        {IconComponent && (
          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
            <IconComponent className="w-8 h-8" />
          </div>
        )}
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h1>
      </div>
      
      {description && (
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
