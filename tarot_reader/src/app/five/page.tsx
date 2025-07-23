"use client"; // Enables client-side rendering for this component

// Import necessary hooks and components
import React, { useActionState, useEffect, useState } from "react";
import { drawCards } from "@/lib/actions/draw-card-actions"; // Action to draw tarot cards
import Link from "next/link"; // For client-side navigation
import CrossSpread from "@/components/CrossSpread"; // Visual component to display card layout
import InterpretButton from "@/components/InterpretButton"; // Button to get AI interpretation

export default function FivePage() {
  // Initial empty array for form state
  const initialState: any[] = [];

  // useActionState binds the drawCards server action to the form, and tracks returned state
  const [state, formAction] = useActionState(drawCards, initialState);

  // Local state to hold AI-generated interpretation text
  const [interpretation, setInterpretation] = useState<string | null>(null);

  // Generate array of image paths based on card state, or fallback to card backs
  const cardImages =
    state.length === 5
      ? state.map((card) => `tarot/${card.image}`)
      : Array(5).fill("misc/cardBack.jpg");

  return (
    <>
      {/* Home link with styled button */}
      <Link
        href="/"
        className="m-4 bg-transparent border border-white hover:bg-[#f7eacc] text-white hover:text-[#3e6950] font-semibold py-2 px-4 rounded-xl transition duration-200"
      >
        Home
      </Link>

      <section className="m-4">
        {/* Form to trigger drawCards action */}
        <form action={formAction}>
          {/* Hidden input sets number of cards to draw */}
          <input type="hidden" value={5} name="count" />
          <button
            type="submit"
            className="bg-transparent border border-white hover:bg-[#f7eacc] text-white hover:text-[#3e6950] font-semibold py-2 px-4 rounded-xl transition duration-200"
            onClick={() => {
              // Reset interpretation when drawing new cards
              setInterpretation("");
            }}
          >
            Draw Cards
          </button>
        </form>

        {/* Header for the reading */}
        <h1 className="text-3xl font-bold">Your Tarot Reading</h1>

        {/* Display drawn cards in a cross spread layout */}
        <CrossSpread cards={cardImages} width={174} height={300} />

        {/* Button to interpret drawn cards using AI */}
        <InterpretButton
          cards={state}
          setParentInterpretation={setInterpretation}
        />

        {/* Show AI interpretation if one exists */}
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
