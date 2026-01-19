"use client";

import { useState } from "react";
import { Mermaid } from "./Mermaid";
import { cn } from "@/utils/cn";
import { Maximize2, Terminal, X, ZoomIn, ZoomOut } from "lucide-react";

interface ArchitectureGraphProps {
  diagram: string;
  description?: React.ReactNode;
  code?: React.ReactNode;
  title?: string;
}

export function ArchitectureGraph({ diagram, description, code, title = "System Architecture" }: ArchitectureGraphProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="my-16 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {title}
          </h3>
          {description && (
            <div className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              {description}
            </div>
          )}
        </div>

        <div className={cn(
          "grid gap-8 items-stretch",
          code ? "xl:grid-cols-2" : "grid-cols-1"
        )}>
          {/* Diagram Card - Clean Canvas Style */}
          <div className="group relative rounded-2xl border border-slate-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm transition-all">
            {/* Dot Pattern Background - Softer */}
            <div className="absolute inset-0 z-0 opacity-[0.6]" 
                 style={{ 
                   backgroundImage: 'radial-gradient(circle, #e2e8f0 1.5px, transparent 1.5px)', 
                   backgroundSize: '24px 24px' 
                 }} 
            />
            <div className="absolute inset-0 z-0 dark:opacity-[0.2] hidden dark:block" 
                 style={{ 
                   backgroundImage: 'radial-gradient(circle, #3f3f46 1.5px, transparent 1.5px)', 
                   backgroundSize: '24px 24px' 
                 }} 
            />
            
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => setIsExpanded(true)}
                className="p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-slate-200 dark:border-zinc-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Expand diagram"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="relative z-10 flex items-center justify-center h-full p-10 architecture-diagram">
               <Mermaid chart={diagram} />
            </div>
          </div>

          {/* Code/Details Card - "IDE" Style */}
          {code && (
             <div className="flex flex-col">
               <div className="flex-1 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-[#0d1117] overflow-hidden shadow-sm">
                 {/* Window Controls */}
                 <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                     <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                     <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                   </div>
                   <div className="ml-4 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                     <Terminal className="w-3 h-3" />
                     <span>interface.dart</span>
                   </div>
                 </div>
                 
                 {/* Code Content */}
                 <div className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-slate-300">
                   {code}
                 </div>
               </div>
             </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setIsExpanded(false)}
        >
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-zinc-800 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur supports-[backdrop-filter]:bg-white/50">
               <h4 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h4>
               <button 
                  onClick={() => setIsExpanded(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
               >
                 <X className="w-5 h-5" />
               </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="flex-1 overflow-auto p-8 flex items-center justify-center bg-slate-50/50 dark:bg-zinc-950/50">
               <div className="w-full h-full flex items-center justify-center">
                  <Mermaid chart={diagram} />
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
