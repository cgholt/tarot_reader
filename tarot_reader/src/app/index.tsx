// src/pages/index.tsx

import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Tarot Reader</title>
        <meta
          name="description"
          content="Get your tarot reading powered by AI."
        />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-black text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Welcome to the AI Tarot Reader
        </h1>
        <p className="text-lg md:text-xl text-center max-w-xl mb-8">
          Ask your question, draw the cards, and let the wisdom of the arcana
          unfold — guided by an AI oracle.
        </p>
        <Link href="/reading">
          <a className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition">
            Begin Your Reading
          </a>
        </Link>
      </main>
    </>
  );
}
