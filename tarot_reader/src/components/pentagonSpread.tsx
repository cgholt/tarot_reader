import { CardInHand, TarotCard } from "@/app/interface";
import Image from "next/image";

interface PentagonCardDisplayProps {
  cardImages: string[]; // Array of 5 CardInHand
  size?: number; // Width/height of the card in px
  radius?: number; // Radius of the pentagon in px
  backs?: boolean;
  width?: number;
  height?: number;
}

export default function PentagonCardDisplay({
  cardImages,
  size = 100,
  radius = 175,
  width = 200,
  height = 345,
}: PentagonCardDisplayProps) {
  console.log(cardImages);
  if (cardImages.length !== 5) {
    return <p>Error: Provide exactly 5 card images.</p>;
  }
  // Center of the container
  const centerX = radius + size / 2;
  const centerY = radius + size / 2;

  return (
    <div
      className="relative"
      style={{
        width: `${2 * radius + size}px`,
        height: `${2 * radius + size}px`,
      }}
    >
      {cardImages.map((image, i) => {
        const angle = (2 * Math.PI * i) / 5 - Math.PI / 2; // rotate to start at top
        const x = centerX + radius * Math.cos(angle) - size / 2;
        const y = centerY + radius * Math.sin(angle) - size / 2;

        return (
          <Image
            key={i}
            src={`/images/${image}`}
            alt={`Card ${i + 1}`}
            width={width}
            height={height}
            className="absolute"
            style={{ left: `${x}px`, top: `${y}px` }}
          />
        );
      })}
    </div>
  );
}
