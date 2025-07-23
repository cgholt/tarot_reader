"use client"; // Marks this as a client-side component in Next.js

// Import the drawCards server action
import { drawCards } from "@/lib/actions/draw-card-actions";

// Next.js Link for client-side navigation
import Link from "next/link";

// React hooks for state and effect
import { useActionState, useEffect, useState } from "react";

// Component to visually display the three-card tarot spread
import ThreeCardSpread from "@/components/ThreeCardSpread";

// Button to trigger AI interpretation
import InterpretButton from "@/components/InterpretButton";

export default function ThreePage() {
  // Initial state used for useActionState hook
  const initialState: any[] = [];

  // useActionState binds form submission to drawCards and captures returned state
  const [state, formAction] = useActionState(drawCards, initialState);

  // Local state to hold AI-generated interpretation text
  const [interpretation, setInterpretation] = useState<string | null>(null);

  // Decide which card images to display: drawn cards or placeholder backs
  const cardImages =
    state.length === 3
      ? state.map((card) => `tarot/${card.image}`) // Show drawn card images
      : Array(3).fill("misc/cardBack.jpg"); // Show card backs as placeholder

  return (
    <>
      {/* Link back to homepage */}
      <Link
        href="/"
        className="m-4 bg-transparent border border-white hover:bg-[#f7eacc] hover:text-[#3e6950] text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
      >
        Home
      </Link>

      <div className="m-4">
        {/* Form to draw three cards */}
        <form action={formAction}>
          {/* Hidden input to indicate the number of cards to draw */}
          <input type="hidden" value={3} name="count" />

          {/* Button to submit form and draw cards */}
          <button
            type="submit"
            className="bg-transparent border border-white hover:bg-[#f7eacc] hover:text-[#3e6950] text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
            onClick={() => {
              // Clear existing interpretation when drawing new cards
              setInterpretation("");
            }}
          >
            Draw Cards
          </button>
        </form>

        {/* Header for the tarot reading */}
        <h1 className="text-3xl font-bold">Your Tarot Reading</h1>

        {/* Display the 3-card spread */}
        <ThreeCardSpread cards={cardImages} width={200} height={345} />

        {/* Button to get AI interpretation of the drawn cards */}
        <InterpretButton
          cards={state}
          setParentInterpretation={setInterpretation}
        />

        {/* Display interpretation text if available */}
        {interpretation && (
          <div className="mt-6 p-4 border border-white text-white">
            <h2 className="text-xl font-semibold mb-2">Interpretation:</h2>
            <p>{interpretation}</p>
          </div>
        )}
      </div>
    </>
  );
}
