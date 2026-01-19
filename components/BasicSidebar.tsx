"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { 
  BookOpen, 
  Layers, 
  ScanLine, 
  Play 
} from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  icon: any;
};

type Category = {
  title: string;
  items: NavItem[];
};

const navCategories: Category[] = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "/basic/index/introduction", icon: BookOpen },
      { name: "Types of Component", href: "/basic/index/type", icon: Layers },
      { name: "Baseline", href: "/basic/index/baseline", icon: ScanLine },
    ]
  },
  {
    title: "Component",
    items: [
      { name: "Decoding Component", href: "/basic/component/decode", icon: Layers },
      { name: "Theming", href: "/basic/component/theme", icon: Layers },
      { name: "Layout", href: "/basic/component/layout", icon: Layers },
      { name: "Internal BL", href: "/basic/component/bl", icon: Layers },
    ]
  },
  {
    title: "Advanced",
    items: [
      { name: "Scope of Component", href: "/basic/advanced/scope", icon: ScanLine },
      { name: "Interdependent Components", href: "/basic/advanced/interdepend", icon: ScanLine },
      { name: "Route-Aware Components", href: "/basic/advanced/multiroute", icon: ScanLine },
    ]
  },
  {
    title: "What's Next",
    items: [
      { name: "Let's Make Components", href: "/basic/next/start", icon: Play },
    ]
  }
];

export function BasicSidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-72 h-screen fixed left-0 top-0 overflow-y-auto bg-slate-50/50 dark:bg-zinc-950/50 border-r border-slate-200 dark:border-zinc-800 p-6 scrollbar-thin backdrop-blur-xl">
      <div className="mb-10 flex items-center gap-2 px-2">
         <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
           <BookOpen className="w-5 h-5" />
         </div>
         <div>
            <Link href="/basic" className="font-bold text-lg block text-slate-900 dark:text-white tracking-tight leading-none group hover:text-blue-600 transition-colors">
             Guidelines
           </Link>
           <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Mintlify Mirror</p>
         </div>
       </div>

      <div className="space-y-8">
        {navCategories.map((category) => (
          <div key={category.title}>
            <h2 className="px-2 mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              {category.title}
            </h2>
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
