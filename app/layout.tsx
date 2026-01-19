import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./code-highlight.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flutter Component Library",
  description: "Documentation for the Flutter Component Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
