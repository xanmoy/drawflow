import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DrawFlow | Docs and Diagrams for Your Team",
  description: "Centralize all of your scattered docs and diagrams. Build a team knowledge repository with a multiplayer-first tool. Build shared knowledge together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-br from-black via-[#19163d] to-black text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
