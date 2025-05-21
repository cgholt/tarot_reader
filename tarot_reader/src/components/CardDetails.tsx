// components/TarotCardDetails.tsx

import Image from "next/image";
import { TarotCard } from "@/app/interface";

export default function TarotCardDetails({ card }: { card: TarotCard }) {
  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="relative w-72 h-[400px] mb-6">
        <Image
          src={`/images/${card.image}`}
          alt={card.name}
          fill
          className="object-contain rounded-xl shadow-2xl"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">{card.name}</h1>
      <p className="text-center max-w-xl text-lg text-gray-300">
        {card.upright}
      </p>
    </div>
  );
}
