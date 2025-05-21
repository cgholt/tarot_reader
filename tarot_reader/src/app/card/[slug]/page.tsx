// app/card/[slug]/page.tsx

import { getCardBySlug } from "@/lib/tarotData";
import TarotCardDetails from "@/components/TarotCardDetails";
import { notFound } from "next/navigation";

export default function CardPage({ params }: { params: { slug: string } }) {
  const card = getCardBySlug(params.slug);

  if (!card) {
    notFound();
  }

  return <TarotCardDetails card={card} />;
}
