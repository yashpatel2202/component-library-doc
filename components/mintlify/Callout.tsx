import { AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/utils/cn";

type CalloutType = "note" | "warning" | "tip" | "info" | "check" | "error";

export function Callout({ 
  type = "note", 
  title,
  children 
}: { 
  type?: CalloutType; 
  title?: string;
  children: React.ReactNode 
}) {
  const styles = {
    note: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900 text-blue-800 dark:text-blue-300",
    info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900 text-blue-800 dark:text-blue-300",
    warning: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300",
    tip: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300",
    check: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300",
    error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900 text-red-800 dark:text-red-300",
  };

  const icons = {
    note: Info,
    info: Info,
    warning: AlertTriangle,
    tip: CheckCircle,
    check: CheckCircle,
    error: XCircle,
  };

  const Icon = icons[type];

  return (
    <div className={cn("p-4 my-8 rounded-lg border flex gap-3 items-start", styles[type])}>
      <Icon className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="flex-1">
        {title && <div className="font-semibold mb-1">{title}</div>}
        <div className="text-sm leading-relaxed [&>p]:m-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export const InfoCallout = (props: any) => <Callout type="info" {...props} />;
export const WarningCallout = (props: any) => <Callout type="warning" {...props} />;
export const TipCallout = (props: any) => <Callout type="tip" {...props} />;
export const ErrorCallout = (props: any) => <Callout type="error" {...props} />;
export const CheckCallout = (props: any) => <Callout type="check" {...props} />;
export const NoteCallout = (props: any) => <Callout type="note" {...props} />;
