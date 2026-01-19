import Link from "next/link";
import { cn } from "@/utils/cn";
import * as Icons from "lucide-react";

export function CardGroup({ cols = 2, children }: { cols?: number; children: React.ReactNode }) {
  return (
    <div className={cn("grid gap-4 my-8", {
      "grid-cols-1": cols === 1,
      "md:grid-cols-2": cols === 2,
      "md:grid-cols-3": cols === 3,
      "md:grid-cols-4": cols === 4,
    })}>
      {children}
    </div>
  );
}

export function Card({ 
  title, 
  icon, 
  href, 
  children 
}: { 
  title: string; 
  icon?: string; 
  href?: string; 
  children?: React.ReactNode 
}) {
  const Icon = icon && (Icons as any)[icon] ? (Icons as any)[icon] : Icons.Box;
  
  const cardContent = (
    <div className={cn(
      "block p-6 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 transition-all duration-200 h-full",
      href && "hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
    )}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-400">
             <Icon className="w-5 h-5" />
          </div>
        )}
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1 mt-0 text-base">
            {title}
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full no-underline">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
