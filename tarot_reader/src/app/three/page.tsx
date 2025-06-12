"use client";
import { drawCards } from "@/lib/actions/draw-card-actions";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import ThreeCardSpread from "@/components/ThreeCardSpread";
import InterpretButton from "@/components/InterpretButton";

export default function ThreePage() {
  const initialState: any[] = [];
  const [state, formAction] = useActionState(drawCards, initialState);
  const [interpretation, setInterpretation] = useState<string | null>(null);

  const cardImages =
    state.length === 3
      ? state.map((card) => `tarot/${card.image}`)
      : Array(3).fill("misc/cardBack.jpg");

  return (
    <>
      <Link
        href="/"
        className="m-4 bg-transparent border border-white hover:bg-[#f7eacc] hover:text-[#3e6950] text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
      >
        Home
      </Link>
      <div className="m-4">
        <form action={formAction}>
          <input type="hidden" value={3} name="count" />
          <button
            type="submit"
            className="bg-transparent border border-white hover:bg-[#f7eacc] hover:text-[#3e6950] text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
            onClick={() => {
              setInterpretation("");
            }}
          >
            Draw Cards
          </button>
        </form>
        <h1 className="text-3xl font-bold">Your Tarot Reading</h1>
        <ThreeCardSpread cards={cardImages} width={200} height={345} />
        <InterpretButton
          cards={state}
          setParentInterpretation={setInterpretation}
        />
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
