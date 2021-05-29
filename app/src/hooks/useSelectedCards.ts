import { useState, useEffect } from "react";
import { COMMANDS } from "../methods/cardsReducer";
import { Action } from "../methods/cardsReducerType";
import { CardsAPI } from "../service/cards/CardsAPI";

interface Props {
  dispatch: React.Dispatch<Action>;
  setSmashBarPower:React.Dispatch<React.SetStateAction<number>>;
}

const useSelectedCards = ({ dispatch, setSmashBarPower }: Props) => {
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
      }else if (selectedCards[0].value === selectedCards[1].value){
        setSmashBarPower(powerProcent => {
          const AddMorePower = powerProcent + 10
          if(AddMorePower > 20){
            return 20
          }else{
            return AddMorePower
          }
        })
      }
    }
  }, [selectedCards, dispatch]);

  return { selectedCards, setSelectedCards };
};

export { useSelectedCards };
