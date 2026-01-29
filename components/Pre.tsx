"use client";

import { Check, Copy } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/utils/cn";

export const Pre = ({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const onCopy = async () => {
    if (!preRef.current) return;
    
    // Get text content
    const text = preRef.current.textContent || "";
    
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group">
      <pre
        ref={preRef}
        className={cn(
          "overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800", 
          className
        )}
        {...props}
      >
        {children}
      </pre>
      
      <button
        onClick={onCopy}
        className={cn(
          "absolute right-2 top-2 p-2 rounded-md z-10",
          "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 backdrop-blur-sm",
          "opacity-0 group-hover:opacity-100 transition-all duration-200",
          "focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-500",
          isCopied && "text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-400/10 hover:bg-green-100"
        )}
        aria-label="Copy code"
      >
        {isCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
};
