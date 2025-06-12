// src/app/layout.tsx

import StaryBackground from "@/components/StarryBackground";
import "../global.css";
import { ReactNode } from "react";
import Navbar from "./navbar";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

export const metadata = {
  title: "AI Tarot Reader",
  description: "Mystical tarot readings powered by AI",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <StaryBackground />
        <SessionProvider session={session}>
          <main className="max-w-4xl mx-auto p-6">
            <Navbar />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
