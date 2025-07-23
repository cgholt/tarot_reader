"use client"; // Marks this component as a client component in Next.js

// Import dependencies
import React, { useActionState, useState } from "react";
import { drawCards } from "@/lib/actions/draw-card-actions"; // Server action to draw tarot cards
import { TarotCard } from "../interface"; // Type for tarot card data
import Image from "next/image"; // Optimized image component from Next.js
import Link from "next/link"; // For client-side navigation
import InterpretButton from "@/components/InterpretButton"; // AI interpretation button

export default function OnePage() {
  // Initial state for useActionState hook
  const initialState: any[] = [];

  // useActionState binds the drawCards server action to a form and tracks returned state
  const [state, formAction] = useActionState(drawCards, initialState);

  // Local state to store AI-generated interpretation
  const [interpretation, setInterpretation] = useState<string | null>(null);

  // Conditionally render the card(s) or card back
  const cardsDisplay =
    state.length > 0 ? (
      // If card(s) were drawn, display them in a grid
      <ul className="grid gap-4 grid-flow-row md:grid-flow-col">
        {state.map((card: TarotCard) => (
          <li key={card.name}>
            <Image
              src={`/images/tarot/${card.image}`}
              alt={card.name}
              width={200}
              height={345}
            />
          </li>
        ))}
      </ul>
    ) : (
      // If no cards yet, show a card back as placeholder
      <Image
        src={`/images/misc/cardBack.jpg`}
        alt={"Card back"}
        width={200}
        height={345}
      />
    );

  return (
    <>
      {/* Link to return to homepage */}
      <Link
        href="/"
        className="m-4 bg-transparent border border-white hover:bg-[#f7eacc] text-white hover:text-[#3e6950] font-semibold py-2 px-4 rounded-xl transition duration-200"
      >
        Home
      </Link>

      <section className="m-4">
        {/* Form to draw one card */}
        <form action={formAction}>
          <input type="hidden" value={1} name="count" />{" "}
          {/* Hidden input to specify one card */}
          <button
            type="submit"
            className="bg-transparent border border-white hover:bg-[#f7eacc] text-white hover:text-[#3e6950] font-semibold py-2 px-4 rounded-xl transition duration-200"
            onClick={() => {
              // Clear previous interpretation on new draw
              setInterpretation("");
            }}
          >
            Draw Cards
          </button>
        </form>

        {/* Heading for the reading section */}
        <h1 className="text-3xl font-bold">Your Tarot Reading</h1>

        {/* Display drawn card(s) or placeholder */}
        <div>{cardsDisplay}</div>

        {/* Button to generate AI interpretation */}
        <InterpretButton
          cards={state}
          setParentInterpretation={setInterpretation}
        />

        {/* Show interpretation if available */}
        {interpretation && (
          <div className="mt-6 p-4 border border-white text-white">
            <h2 className="text-xl font-semibold mb-2">Interpretation:</h2>
            <p>{interpretation}</p>
          </div>
        )}
      </section>
    </>
  );
}
