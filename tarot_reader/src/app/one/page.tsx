"use client";

import React, { useActionState, useState } from "react";
import { drawCards } from "@/lib/actions/draw-card-actions";
import { TarotCard } from "../interface";
import Image from "next/image";
import Link from "next/link";
import InterpretButton from "@/components/InterpretButton";

export default function OnePage() {
  const initialState: any[] = [];
  const [state, formAction] = useActionState(drawCards, initialState);
  const [interpretation, setInterpretation] = useState<string | null>(null);

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
        className="m-4 bg-transparent border border-white hover:bg-[#f7eacc] text-white hover:text-[#3e6950] font-semibold py-2 px-4 rounded-xl transition duration-200"
      >
        Home
      </Link>
      <section className="m-4">
        <form action={formAction}>
          <input type="hidden" value={1} name="count" />
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
        <div>{cardsDisplay}</div>
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
