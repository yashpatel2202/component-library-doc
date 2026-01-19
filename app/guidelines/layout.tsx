import { GuidelinesSidebar } from "@/components/GuidelinesSidebar";

export default function GuidelinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-slate-900 dark:text-slate-100 flex">
      <GuidelinesSidebar />
      <div className="flex-1 ml-72">
        <main className="max-w-4xl mx-auto py-16 px-12 prose prose-slate dark:prose-invert prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500">
          {children}
        </main>
      </div>
    </div>
  );
}
