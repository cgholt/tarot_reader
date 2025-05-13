"use client";

import React, { useActionState } from "react";
import { drawCards } from "@/lib/actions";
import PentagonCardDisplay from "@/components/pentagonSpread";
import Link from "next/link";
import CrossSpread from "@/components/CrossSpread";

export default function FivePage() {
  // const [state, formAction] = useActionState(drawCards, []);
  const initialState: any[] = [];
  const [state, formAction] = useActionState(drawCards, initialState);

  const cardImages =
    state.length === 5
      ? state.map((card) => `tarot/${card.image}`)
      : Array(5).fill("misc/cardBack.jpg");

  // console.log(cardImages);
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
          >
            Draw Cards
          </button>
        </form>
        <h1 className="text-3xl font-bold">Your Tarot Reading</h1>
        {/* <PentagonCardDisplay
          cardImages={cardImages}
          radius={275}
          width={200 * 0.9}
          height={345 * 0.9}
        /> */}
        <CrossSpread cards={cardImages} width={80} height={120} />
      </section>
    </>
  );
}
