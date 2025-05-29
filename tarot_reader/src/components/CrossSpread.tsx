import { CardInHand } from "@/app/interface";
import Image from "next/image";

export default function CrossSpread({
  cards,
  width,
  height,
}: {
  cards: string[];
  width: number;
  height: number;
}) {
  // console.log(cards);
  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-2 w-fit mx-auto">
      {/* Row 1 */}

      <div></div>
      <div className="col-start-2 flex justify-center">
        <Image
          src={`/images/${cards[0]}`}
          alt="Card 1"
          width={width}
          height={height}
        />
      </div>
      <div></div>

      {/* Row 2 */}
      <div className="flex justify-center items-center">
        <Image
          src={`/images/${cards[1]}`}
          alt="Card 2"
          width={width}
          height={height}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={`/images/${cards[2]}`}
          alt="Card 3"
          width={width}
          height={height}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={`/images/${cards[3]}`}
          alt="Card 4"
          width={width}
          height={height}
        />
      </div>

      {/* Row 3 */}
      <div></div>
      <div className="col-start-2 flex justify-center">
        <Image
          src={`/images/${cards[4]}`}
          alt="Card 5"
          width={width}
          height={height}
        />
      </div>
      <div></div>
    </div>
  );
}
