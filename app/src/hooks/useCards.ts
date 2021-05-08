import { useEffect, useState } from "react";
import { CardsAPI } from "../service/cards/cardsAPI";
import { getCards } from "../service/cards/CardsService";

const useCards = () => {
  const [cards, setCards] = useState<CardsAPI[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardsArray = await getCards();
        if (cardsArray === undefined) {
          throw new Error("cardsArray is undefined");
        }
        setCards(cardsArray);
      } catch (error) {
        setError(error);
      }
    };
    fetchCards();
  }, []);

  return { cards, setCards, error };
};

export { useCards };
