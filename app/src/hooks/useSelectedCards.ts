import { useState, useEffect } from "react";
import { COMMANDS } from "../methods/cardsReducer";
import { Action } from "../methods/cardsReducerType";
import { CardsAPI } from "../service/cards/CardsAPI";

interface Props {
  dispatch: React.Dispatch<Action>;
}

const useSelectedCards = ({ dispatch }: Props) => {
  const [selectedCards, setSelectedCards] = useState<CardsAPI[]>([]);

  useEffect(() => {
    const resetSelectedCards = () => {
      const waitForAnimationToFlipDown = () => setSelectedCards([]);
      setTimeout(waitForAnimationToFlipDown, 1050);
    };
    const flipCardsFaceDown = () =>
      dispatch({
        type: COMMANDS.Flip_Selected_Cards_Down,
        selectedCards: selectedCards,
      });

    if (selectedCards.length === 2) {
      resetSelectedCards();
      if (selectedCards[0].value !== selectedCards[1].value) {
        setTimeout(flipCardsFaceDown, 1000);
      }
    }
  }, [selectedCards, dispatch]);

  return { selectedCards, setSelectedCards };
};

export { useSelectedCards };
