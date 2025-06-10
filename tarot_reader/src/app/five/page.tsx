"use client";

import React, { useActionState, useEffect, useState } from "react";
import { drawCards } from "@/lib/actions/draw-card-actions";
import Link from "next/link";
import CrossSpread from "@/components/CrossSpread";
import InterpretButton from "@/components/InterpretButton";

export default function FivePage() {
  const initialState: any[] = [];
  const [state, formAction] = useActionState(drawCards, initialState);
  const [interpretation, setInterpretation] = useState<string | null>(null);

  // console.log("Current state of drawn cards:", state);

  const cardImages =
    state.length === 5
      ? state.map((card) => `tarot/${card.image}`)
      : Array(5).fill("misc/cardBack.jpg");

  return (
    <>
      <Link
        href="/"
        className="m-4 bg-transparent border border-white hover:bg-[#f7eacc] text-white hover:text-[#3e6950] font-semibold py-2 px-4 rounded-xl transition duration-200"
      >
        Home
      </Link>
      <section className="m-4">
        <form action={formAction}>
          <input type="hidden" value={5} name="count" />
          <button
            type="submit"
            className="bg-transparent border border-white hover:bg-[#f7eacc] text-white hover:text-[#3e6950] font-semibold py-2 px-4 rounded-xl transition duration-200"
            onClick={() => {
              setInterpretation("");
            }}
          >
            Draw Cards
          </button>
        </form>
        <h1 className="text-3xl font-bold">Your Tarot Reading</h1>
        <CrossSpread cards={cardImages} width={174} height={300} />
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
      </section>
    </>
  );
}
