"use server";

import { CardInHand, TarotCard } from "@/app/interface";
import { TAROT_DECK } from "@/data/tarotDeck";

export async function drawCards(prevState: any, formData: any) {
  // Get count
  const count = formData.get("count");

  function shuffleDeck(array: TarotCard[]) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // console.log(array);
    return array;
  }

  let deck = shuffleDeck(TAROT_DECK);

  const drawnHand: CardInHand[] = deck
    .slice(0, count)
    .map((card: TarotCard) => ({
      ...card,
      position: Math.random() < 0.5 ? "upright" : "reversed",
    }));
  console.log(drawnHand);
  return drawnHand;
}
