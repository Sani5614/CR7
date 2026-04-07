import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CR7 — The Standard of Greatness",
  description:
    "Fan-made modern tribute single-page site celebrating Cristiano Ronaldo's legendary career, stats, milestones, and achievements.",
  keywords: ["CR7", "Cristiano Ronaldo", "football", "stats", "tribute"],
  openGraph: {
    title: "CR7 Tribute",
    description: "A premium, responsive tribute dashboard for Cristiano Ronaldo.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
