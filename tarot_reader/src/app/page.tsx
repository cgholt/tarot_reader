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
      <div>
        <Link
          href="/one"
          className="m-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition"
        >
          One Card
        </Link>
        <Link
          href="/three"
          className="m-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition"
        >
          Three Cards
        </Link>
        <Link
          href="/five"
          className="m-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition"
        >
          Five Cards
        </Link>
      </div>
    </section>
  );
}
