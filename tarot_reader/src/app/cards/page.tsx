import { getAllCards } from "@/lib/db";
import { TarotCard } from "../interface";
export default async function NewsPage() {
  const cards: TarotCard[] = await getAllCards();

  return (
    <>
      <h1>cards Page</h1>
      {cards.map((card: TarotCard) => (
        <p>{card.name}</p>
      ))}
    </>
  );
}
