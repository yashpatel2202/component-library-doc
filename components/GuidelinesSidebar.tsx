"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { 
  Box, 
  Layers, 
  Code, 
  Settings, 
  BookOpen, 
  FileText,
  Layout,
  Network,
  GitBranch,
  Rocket,
  Shield,
  Palette,
  LucideIcon
} from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

interface Category {
  title: string;
  icon: LucideIcon;
  items: NavigationItem[];
}

const navCategories: Category[] = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [

      { name: "Introduction", href: "/guidelines/index/introduction", icon: FileText },
      { name: "Types of Component", href: "/guidelines/index/type", icon: Box },
      { name: "Baseline", href: "/guidelines/index/baseline", icon: Shield },
    ],
  },
  {
    title: "Component",
    icon: Code,
    items: [
      { name: "Decoding Component", href: "/guidelines/component/decode", icon: Code },
      { name: "Theming", href: "/guidelines/component/theme", icon: Palette },
      { name: "Layout", href: "/guidelines/component/layout", icon: Layout },
      { name: "Internal BL", href: "/guidelines/component/bl", icon: Settings },
    ],
  },
  {
    title: "Advanced",
    icon: Layers,
    items: [
      { name: "Scope of Component", href: "/guidelines/advanced/scope", icon: Layers },
      { name: "Interdependent Components", href: "/guidelines/advanced/interdepend", icon: Network },
      { name: "Route-Aware Components", href: "/guidelines/advanced/multiroute", icon: GitBranch },
    ],
  },
  {
    title: "What's Next",
    icon: Rocket,
    items: [
      { name: "Let's Make Components", href: "/guidelines/next/start", icon: Rocket },
    ],
  },
];

export function GuidelinesSidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-72 h-screen fixed left-0 top-0 overflow-y-auto bg-slate-50/50 dark:bg-zinc-950/50 border-r border-slate-200 dark:border-zinc-800 p-6 scrollbar-thin backdrop-blur-xl">
      <div className="mb-10 flex items-center gap-2 px-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
             <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
           </svg>
        </div>
        <div>
           <Link href="/" className="font-bold text-lg block text-slate-900 dark:text-white tracking-tight leading-none group hover:text-blue-600 transition-colors">
            Flutter Library
          </Link>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Basic Guidelines</p>
        </div>
      </div>

      <div className="space-y-8">
        {navCategories.map((category) => (
          <div key={category.title}>
            <div className="flex items-center gap-2 px-2 mb-3 text-slate-400 group">
              <category.icon className="w-4 h-4 group-hover:text-blue-500 transition-colors" />
              <h2 className="text-xs font-bold uppercase tracking-wider group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                {category.title}
              </h2>
            </div>
            <ul className="space-y-0.5 border-l border-slate-200 dark:border-zinc-800 ml-2 pl-2">
              {category.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-all duration-200 group relative",
                        isActive
                          ? "bg-blue-50 text-blue-600 font-medium dark:bg-blue-900/20 dark:text-blue-400"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-slate-200"
                      )}
                    >
                      {isActive && (
                        <span className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-1 h-5 bg-blue-600 rounded-r-md" />
                      )}
                       <item.icon className={cn("w-4 h-4", isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300")} />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
