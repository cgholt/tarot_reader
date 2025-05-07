"use client";

import React from "react";
import { drawCards } from "@/lib/actions";
import PentagonCardDisplay from "@/components/pentagonSpread";
import { useFormState } from "react-dom";
import Link from "next/link";

export default function FivePage() {
  // const [state, formAction] = useActionState(drawCards, []);
  const initialState: any[] = [];
  const [state, formAction] = useFormState(drawCards, initialState);

  const cardImages =
    state.length === 5
      ? state.map((card) => `tarot/${card.image}`)
      : Array(5).fill("misc/cardBack.jpg");

  // console.log(cardImages);
  return (
    <>
      <Link
        href="/"
        className="m-4 bg-transparent border border-white hover:bg-[#efd577] text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
      >
        Home
      </Link>
      <section className="m-4">
        <form action={formAction}>
          <input type="hidden" value={5} name="count" />
          <button
            type="submit"
            className="bg-transparent border border-white hover:bg-[#efd577] text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
          >
            Draw Cards
          </button>
        </form>
        <h1 className="text-3xl font-bold">Your Tarot Reading</h1>
        <PentagonCardDisplay
          cardImages={cardImages}
          radius={275}
          width={200 * 0.9}
          height={345 * 0.9}
        />
      </section>
    </>
  );
}
