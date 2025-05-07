"use client";

import React from "react";
import { drawCards } from "@/lib/actions";
import { TarotCard } from "../interface";
import Image from "next/image";
import { useFormState } from "react-dom";
import Link from "next/link";

export default function OnePage() {
  const initialState: any[] = [];
  const [state, formAction] = useFormState(drawCards, initialState);

  const cardsDisplay =
    state.length > 0 ? (
      <ul className="grid gap-4 grid-flow-row md:grid-flow-col">
        {state.map((card: TarotCard) => (
          <li key={card.name}>
            <Image
              src={`/images/tarot/${card.image}`}
              alt={card.name}
              width={200}
              height={345}
            ></Image>
            <pre>{JSON.stringify(card, null, 2)}</pre>
          </li>
        ))}
      </ul>
    ) : (
      <Image
        src={`/images/misc/cardBack.jpg`}
        alt={"Card back"}
        width={200}
        height={345}
      ></Image>
    );

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
          <input type="hidden" value={1} name="count" />
          <button
            type="submit"
            className="bg-transparent border border-white hover:bg-[#efd577] text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
          >
            Draw Cards
          </button>
        </form>
        <h1 className="text-3xl font-bold">Your Tarot Reading</h1>
        <div>{cardsDisplay}</div>
      </section>
    </>
  );
}
