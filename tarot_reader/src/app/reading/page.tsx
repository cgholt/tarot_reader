"use client";

import React, { useState } from "react";
import { drawCards } from "@/lib/actions";
import { CardInHand, TarotCard } from "../interface";
import Image from "next/image";

export default function ReadingPage() {
  const [cards, setCards] = useState<CardInHand[] | null>(null);

  // const clickHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   let hand: CardInHand[] = await drawCards(3); // Assuming drawCards is a function that draws 3 cards
  //   setCards(hand);
  // };
  // let hand: TarotCard[] = [];

  const cardsDisplay = cards ? (
    <ul className="grid gap-4 grid-flow-row md:grid-flow-col">
      {cards.map((card: TarotCard) => (
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
    <p>No cards drawn</p>
  );

  // useEffect(() => {
  //   // console.log(cards);
  // }, [cards]);

  return (
    <section>
      <button
        onClick={async () => {
          const newHand = await drawCards(3);
          console.log(newHand);
          setCards(newHand);
        }}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
      >
        Draw Cards
      </button>
      <h1 className="text-3xl font-bold">Your Tarot Reading</h1>
      <div>{cardsDisplay}</div>
    </section>
  );
}
