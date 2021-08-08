import { useEffect, useState } from "react";
import { CardsAPI } from "../../service/cards/CardsAPI";

const useTimer = (cardDeck: CardsAPI[]) => {
  const [endGame, setEndGame] = useState<boolean>(false);
  const [timer, setTimer] = useState(500);

  useEffect(() => {
    if(!endGame){
      timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }

    const maxCardReached = cardDeck.length === 10;
    const allCardsFlipped = cardDeck.every((card) => card.flippCard);

    if (maxCardReached && allCardsFlipped) {
      setEndGame(true);
    } else if (timer === 0) {
      setEndGame(true);
    }
  }, [timer, cardDeck, endGame]);

  return { timer, endGame };
};

export { useTimer };
