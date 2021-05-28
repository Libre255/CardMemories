import { CardsAPI } from "../service/cards/CardsAPI";

const shuffleCardDeck = (cardDeck: CardsAPI[]): CardsAPI[] => {
  for (let i = cardDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = cardDeck[i];
    cardDeck[i] = cardDeck[j];
    cardDeck[j] = temp;
  }
  return cardDeck;
};

export { shuffleCardDeck };
