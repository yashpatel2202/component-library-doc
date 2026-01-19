"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { 
  Download, 
  Database, 
  Bell, 
  Type, 
  Calendar, 
  ScanLine, 
  Image as ImageIcon, 
  Layout, 
  Filter, 
  Smartphone,
  Box,
  Keyboard,
  Film,
  Layers,
  LucideIcon,
  Headphones,
  FileText,
  Play,
  BookOpen
} from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

type Category = {
  title: string;
  icon: LucideIcon;
  items: NavItem[];
};

const navCategories: Category[] = [
  {
    title: "Utility Components",
    icon: Box,
    items: [
      { name: "Download Manager", href: "/docs/utility/download-manager", icon: Download },
      { name: "Cache Manager", href: "/docs/utility/cache-manager", icon: Database },
      { name: "Notification Manager", href: "/docs/utility/notification-manager", icon: Bell },
    ]
  },
  {
    title: "Input Components",
    icon: Keyboard,
    items: [
      { name: "Basic Inputs", href: "/docs/input/basic-inputs", icon: Type },
      { name: "Advanced Pickers", href: "/docs/input/advanced-pickers", icon: Calendar },
      { name: "Specialized Inputs", href: "/docs/input/specialized-inputs", icon: ScanLine },
    ]
  },
  {
    title: "Media Components",
    icon: Film,
    items: [

      { name: "Audio Player", href: "/docs/media/audio", icon: Headphones },
      { name: "Video Player", href: "/docs/media/video", icon: Play },
      { name: "Image Component", href: "/docs/media/image", icon: ImageIcon },
      { name: "PDF Viewer", href: "/docs/media/pdf", icon: FileText },
    ]
  },
  {
    title: "High-Level Components",
    icon: Layers,
    items: [
      { name: "CMS Pages", href: "/docs/high-level/cms-pages", icon: Layout },
      { name: "Filters", href: "/docs/high-level/filters", icon: Filter },
      { name: "Views / Screens", href: "/docs/high-level/views-screens", icon: Smartphone },
    ]
  }
];

export function Sidebar() {
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
            Flutter Lib
          </Link>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Docs v1.0</p>
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
