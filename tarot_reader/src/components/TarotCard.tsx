import { TarotCard } from "@/app/interface";
import Image from "next/image";

export default function TarotCardDisplay({ card }: { card: TarotCard }) {
  return (
    <Image
      src={`/images/${card.image}`}
      width={500}
      height={500}
      alt="Picture of the author"
      className="hover:scale-[2] hover:fixed hover:top-1/2 hover:left-1/2 hover:-translate-x-1/2 hover:-translate-y-1/2 hover:z-50 transition-all duration-300 ease-in-out bg-white p-6 rounded-xl shadow-lg w-64"
    />
  );
}
