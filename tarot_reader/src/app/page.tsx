// src/app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Welcome to the AI Tarot Reader
      </h1>
      <p className="text-lg max-w-xl text-white">
        Ask your question, draw the cards, and let the wisdom of the arcana
        unfold — guided by an AI oracle.
      </p>
      <div className="flex gap-4 flex-row">
        <Link
          href="/one"
          className="bg-transparent border border-white hover:bg-[#efd577] text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
        >
          One Card
        </Link>
        <Link
          href="/three"
          className="bg-transparent border border-white hover:bg-[#efd577] text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
        >
          Three Cards
        </Link>
        <Link
          href="/five"
          className="bg-transparent border border-white hover:bg-[#efd577] text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
        >
          Five Cards
        </Link>
      </div>
    </section>
  );
}
