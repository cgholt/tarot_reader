"use client";
import { TarotCard } from "@/app/interface";
import { useState } from "react";

export default function InterpretButton({
  cards,
  setParentInterpretation,
}: {
  cards: TarotCard[];
  setParentInterpretation: any;
}) {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    // Define the prompt
    const prompt = `Succintly interpret this tarot spread in the context of love: ${cards
      .map((card: TarotCard) => card.name)
      .join(", ")}`;

    // console.log("Generated prompt for LLM:", prompt);

    try {
      // send fetch request to NextJS route
      setLoading(true);
      setParentInterpretation("...Loading");
      const response = await fetch("/api/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      // console.log("LLM fetch response status:", response.status);
      // check for errors
      setLoading(false);
      if (!response.ok) {
        throw new Error("Failed to fetch interpretation");
      }
      // await promise
      const data = await response.json();
      // console.log("LLM response data:", data);
      // set interpretation stat
      setParentInterpretation(data.response || "No interpretation returned.");
    } catch (error) {
      // console.error("Error calling LLM:", error);
      setParentInterpretation(
        "An error occurred while fetching the interpretation."
      );
    }
  };
  return (
    <>
      {cards.length > 0 ? (
        <button
          type="submit"
          className="bg-transparent border mt-2 border-white hover:bg-[#f7eacc] hover:text-[#3e6950] text-white font-semibold py-2 px-4 rounded-xl transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleClick}
          disabled={loading}
        >
          AI Interpretation
        </button>
      ) : null}
    </>
  );
}
