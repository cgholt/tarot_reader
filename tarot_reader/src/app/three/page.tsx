"use client";
import { drawCards } from "@/lib/actions";
import { TarotCard } from "../interface";
import Image from "next/image";
import { useFormState } from "react-dom";
import Link from "next/link";

export default function ThreePage() {
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
            {/* <pre>{JSON.stringify(card, null, 2)}</pre> */}
          </li>
        ))}
      </ul>
    ) : (
      <ul className="grid gap-4 grid-flow-row md:grid-flow-col">
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i} className="placeholder-card">
            <Image
              src={"/images/misc/cardBack.jpg"}
              alt={"Card Back"}
              width={200}
              height={345}
            ></Image>
          </li>
        ))}
      </ul>
    );

  // useEffect(() => {
  //   // console.log(cards);
  // }, [cards]);

  return (
    <>
      <Link
        href="/"
        className="m-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition"
      >
        Home
      </Link>
      <div className="m-4">
        <form action={formAction}>
          <input type="hidden" value={3} name="count" />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
          >
            Draw Cards
          </button>
        </form>
        <h1 className="text-3xl font-bold">Your Tarot Reading</h1>
        <div>{cardsDisplay}</div>
      </div>
    </>
  );
}
