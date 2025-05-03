// src/app/layout.tsx

import "../global.css";
import { ReactNode } from "react";

export const metadata = {
  title: "AI Tarot Reader",
  description: "Mystical tarot readings powered by AI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-900 to-black text-white min-h-screen">
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
