"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { cn } from "@/utils/cn";

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  securityLevel: "loose",
  fontFamily: "var(--font-inter)",
});

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark") || 
                     window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(isDark);
    };
    
    checkDarkMode();
    
    // Observer for class changes on html element (generic dark mode toggles)
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "base", // Use base to allow full customization
        securityLevel: "loose",
        flowchart: { 
          curve: "basis", 
          padding: 20
        },
        themeVariables: {
           fontFamily: "var(--font-inter)",
           fontSize: "16px",
           
           // Light Mode - Minimal & Clean
           primaryColor: isDark ? "#18181b" : "#ffffff",
           primaryTextColor: isDark ? "#f4f4f5" : "#18181b",
           primaryBorderColor: isDark ? "#3f3f46" : "#e4e4e7",
           lineColor: isDark ? "#71717a" : "#a1a1aa",
           secondaryColor: isDark ? "#18181b" : "#ffffff",
           tertiaryColor: isDark ? "#18181b" : "#ffffff",
           
           // Interaction
           mainBkg: isDark ? "#18181b" : "#ffffff",
           nodeBorder: isDark ? "#3f3f46" : "#e4e4e7",
           clusterBkg: isDark ? "#18181b" : "#fafafa",
           clusterBorder: isDark ? "#3f3f46" : "#e4e4e7",
        }
      });
      
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      
      mermaid.render(id, chart).then(({ svg }) => {
        setSvg(svg);
      }).catch((e) => {
        console.error("Mermaid error:", e);
        setSvg(`<div class="text-red-500 font-mono text-xs p-4 border border-red-200 rounded bg-red-50">Invalid Diagram Syntax</div>`);
      });
    }
  }, [chart, isDark]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "mermaid-chart w-full flex justify-center items-center overflow-visible", // Changed: Removed padding/borders/bg
        " [&>svg]:w-full [&>svg]:max-w-none" // Force SVG to scale width only
      )}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
