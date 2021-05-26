import { useEffect, useState } from "react";
import { CardsAPI } from "../service/cards/CardsAPI";
import { getCards } from "../service/cards/CardsService";

const useCards = () => {
  const [cards, setCards] = useState<CardsAPI[]>([]);
  const [error, setError] = useState<Error>();

  const shuffleCardDeck = (cardDeck:CardsAPI[]):CardsAPI[]=>{
    for (let i = (cardDeck.length - 1); i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = cardDeck[i]
      cardDeck[i] = cardDeck[j]
      cardDeck[j] = temp
    }
    return cardDeck
  }
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardsArray = await getCards();
        if (cardsArray === undefined) {
          throw new Error("cardsArray is undefined");
        }
        setCards(shuffleCardDeck(cardsArray));
      } catch (error) {
        setError(error);
      }
    };
    fetchCards();
  }, []);

  return { cards, setCards, error };
};

export { useCards };
