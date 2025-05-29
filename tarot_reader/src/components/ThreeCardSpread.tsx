import { TarotCard } from "@/app/interface";
import Image from "next/image";

export default function ThreeCardSpread({
  cards,
  width,
  height,
}: {
  cards: string[];
  width: number;
  height: number;
}) {
  return (
    <ul className="grid gap-4 grid-flow-row md:grid-flow-col">
      {cards.map((card: string, index) => (
        <li key={index}>
          <Image
            src={`/images/${card}`}
            alt={card}
            width={width}
            height={height}
          ></Image>
          {/* <pre>{JSON.stringify(card, null, 2)}</pre> */}
        </li>
      ))}
    </ul>
  );
}
