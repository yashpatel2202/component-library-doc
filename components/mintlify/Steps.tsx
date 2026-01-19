import { cn } from "@/utils/cn";

export function Steps({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-4 mb-12 border-l border-slate-200 dark:border-zinc-800 pl-8 space-y-8">
      {children}
    </div>
  );
}

export function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-slate-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950" />
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 mt-0">
        {title}
      </h3>
      <div className="prose-sm text-slate-600 dark:text-slate-400">
        {children}
      </div>
    </div>
  );
}
