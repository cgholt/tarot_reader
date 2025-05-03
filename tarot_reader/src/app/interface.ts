export interface TarotCard {
  name: string;
  suit: string;
  upright: string;
  reversed: string;
  image: string;
}

export type CardInHand = {
  name: string;
  suit: string;
  upright: string;
  reversed: string;
  image: string;
  position: string;
};
