import { useEffect, useState } from "react";
import { CardsAPI } from "../../service/cards/CardsAPI";

const useTimer = (cardDeck: CardsAPI[]) => {
  const [timerReached0, setTimerReached0] = useState<boolean>(false);
  const [timer, setTimer] = useState(400);

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    const maxCardReached = cardDeck.length === 10;
    const allCardsFlipped = cardDeck.every((card) => card.flippCard);

    if (maxCardReached && allCardsFlipped) {
      setTimerReached0(true);
    } else if (timer === 0) {
      setTimerReached0(true);
    }
  }, [timer, cardDeck]);

  return { timer, timerReached0 };
};

export { useTimer };
