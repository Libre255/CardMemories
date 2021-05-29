import { useState, useEffect } from "react";
import { SmashBarType } from "../components/gameplayComponents/GamePlayBox";
import { COMMANDS } from "../methods/cardsReducer";
import { Action } from "../methods/cardsReducerType";
import { CardsAPI } from "../service/cards/CardsAPI";

interface Props {
  dispatch: React.Dispatch<Action>;
  smashBarState: [
    SmashBarType,
    React.Dispatch<React.SetStateAction<SmashBarType>>
  ];
}

const useSelectedCards = ({ dispatch, smashBarState }: Props) => {
  const [selectedCards, setSelectedCards] = useState<CardsAPI[]>([]);
  const [SmashBarPower, setSmashBarPower] = smashBarState;

  useEffect(() => {
    const resetSelectedCards = () => {
      const waitForAnimationToFlipDown = () => setSelectedCards([]);
      setTimeout(waitForAnimationToFlipDown, 1050);
    };
    const flipCardsFaceDown = () => {
      dispatch({
        type: COMMANDS.Flip_Selected_Cards_Down,
        selectedCards: selectedCards,
      });
    };

    const updateSmashBarProcent = (smashBar: SmashBarType) => {
      const maxPowerProcent: number = 20;
      const updatedSmashProcent: number = smashBar.powerProcent + 10;

      if (updatedSmashProcent >= 20) {
        return {
          ...smashBar,
          powerProcent: maxPowerProcent,
          ShowPowerButton: true,
        };
      } else {
        return { ...smashBar, powerProcent: updatedSmashProcent };
      }
    };
    if (selectedCards.length === 2) {
      resetSelectedCards();
      if (selectedCards[0].value !== selectedCards[1].value) {
        setTimeout(flipCardsFaceDown, 1000);
      } else if (selectedCards[0].value === selectedCards[1].value) {
        setSmashBarPower((smashBar) => updateSmashBarProcent(smashBar));
      }
    }
  }, [selectedCards, dispatch, setSmashBarPower]);

  useEffect(() => {
    const resetAllSmashBarProperties = () => ({
      ActivatePower: false,
      ShowPowerButton: false,
      powerProcent: 0,
    });

    if (SmashBarPower.ActivatePower) {
      dispatch({ type: COMMANDS.Flip_AllCards_Up });
      setSmashBarPower(resetAllSmashBarProperties());
    }
  }, [SmashBarPower, dispatch, setSmashBarPower]);

  return { selectedCards, setSelectedCards };
};

export { useSelectedCards };
