import { useState, useEffect } from "react";
import { COMMANDS } from "../reducer/cardsReducer";
import { Action } from "../reducer/cardsReducerType";
import { CardsAPI } from "../../../service/cards/CardsAPI";

interface Props {
  dispatch: React.Dispatch<Action>;
}

const useSelectedCards = ({ dispatch }: Props) => {
  const [selectedCards, setSelectedCards] = useState<CardsAPI[]>([]);

  useEffect(() => {
    const resetSelectedCards = (resetTimer: number) => {
      const waitForAnimationToFlipDown = () => setSelectedCards([]);
      setTimeout(waitForAnimationToFlipDown, resetTimer);
    };
    const flipCardsFaceDown = () => {
      dispatch({
        type: COMMANDS.Flip_Selected_Cards_Down,
        selectedCards: selectedCards,
      });
    };

    if (selectedCards.length === 2) {
      if (selectedCards[0].value === selectedCards[1].value) {
        resetSelectedCards(550);
      } else if (selectedCards[0].value !== selectedCards[1].value) {
        resetSelectedCards(1000);
        setTimeout(flipCardsFaceDown, 950);
      }
    }
  }, [selectedCards, dispatch]);

  return { selectedCards, setSelectedCards };
};

export { useSelectedCards };
