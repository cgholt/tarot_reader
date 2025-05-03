// src/app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold">
        Welcome to the AI Tarot Reader
      </h1>
      <p className="text-lg max-w-xl">
        Ask your question, draw the cards, and let the wisdom of the arcana
        unfold — guided by an AI oracle.
      </p>
      <Link
        href="/reading"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition"
      >
        Begin Your Reading
      </Link>
    </section>
  );
}
