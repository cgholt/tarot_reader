export interface TarotCard {
  name: string;
  suit: string;
  upright: string;
  reversed: string;
  image: string;
  revealed: boolean;
}

export type CardInHand = {
  name: string;
  suit: string;
  upright: string;
  reversed: string;
  image: string;
  position: string;
};

export type Star = [number, number];
export type Line = [number, number];
export type ConstellationRaw = {
  stars: Star[];
  lines: Line[];
};
