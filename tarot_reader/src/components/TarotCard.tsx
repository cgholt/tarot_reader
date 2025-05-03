import { TarotCard } from "@/app/interface";
import Image from "next/image";

export default function TarotCardDisplay(card: TarotCard) {
  return (
    <Image
      src={`/images/${card.image}`}
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );
}
