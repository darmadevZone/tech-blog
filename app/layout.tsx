import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DarmaT0o0 Tech Blog",
  description: "日頃の技術を学んだことを発信していくブログです。",
  keywords: [
    "tech",
    "blog",
    "darmaT0o0",
    "darmato",
    "darmato.dev",
    "darmato.dev/blog",
    "技術",
    "ブログ",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <Header className="hidden" />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
