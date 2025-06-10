// src/app/layout.tsx

import StaryBackground from "@/components/StarryBackground";
import "../global.css";
import { ReactNode } from "react";
import Navbar from "./navbar";

export const metadata = {
  title: "AI Tarot Reader",
  description: "Mystical tarot readings powered by AI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StaryBackground />
        <Navbar />
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
