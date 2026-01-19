import { Sidebar } from "@/components/Sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-slate-900 dark:text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 ml-72"> {/* Adjusted for w-72 sidebar */}
        <main className="max-w-4xl mx-auto py-16 px-12 prose prose-slate dark:prose-invert prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500">
          {children}
        </main>
      </div>
    </div>
  );
}
