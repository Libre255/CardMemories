import { useEffect, useState } from "react";
import { COMMANDS } from "../cards/reducer/cardsReducer";
import { Action } from "../cards/reducer/cardsReducerType";
import { CardsAPI } from "../../service/cards/CardsAPI";

interface Props {
  selectedCards: CardsAPI[];
  dispatch: React.Dispatch<Action>;
}
export interface SmashBarType {
  powerProcent: number;
  ActivatePower: boolean;
  ShowPowerButton: boolean;
}

const useSmashBarPower = ({ selectedCards, dispatch }: Props) => {
  const [SmashBarPower, setSmashBarPower] = useState<SmashBarType>({
    powerProcent: 0,
    ActivatePower: false,
    ShowPowerButton: false,
  });

  useEffect(() => {
    const maxPowerProcent: number = 10;
    const updateSmashBarProcent = (smashBar: SmashBarType) => {
      const addedSmashProcent: number = smashBar.powerProcent + 10;
      
      if (addedSmashProcent >= maxPowerProcent) {
        return {
          ...smashBar,
          powerProcent: maxPowerProcent,
          ShowPowerButton: true,
        };
      } else {
        return { ...smashBar, powerProcent: addedSmashProcent };
      }
    };

    if (selectedCards.length === 2) {
      if (selectedCards[0].value === selectedCards[1].value) {
        if(SmashBarPower.powerProcent === maxPowerProcent){

        }else{
          setSmashBarPower((smashBar) => updateSmashBarProcent(smashBar));
        }
      }
    }
  }, [selectedCards, SmashBarPower]);

  useEffect(() => {
    const flipAllCardsDown = () => {
      dispatch({ type: COMMANDS.Flip_AllCards_Down });
    };
    const resetAllSmashBarProperties = () => ({
      ActivatePower: false,
      ShowPowerButton: false,
      powerProcent: 0,
    });

    if (SmashBarPower.ActivatePower) {
      dispatch({ type: COMMANDS.Flip_AllCards_Up });
      setTimeout(flipAllCardsDown, 1000);
      setSmashBarPower(resetAllSmashBarProperties());
    }
  }, [SmashBarPower, dispatch, setSmashBarPower]);

  return { SmashBarPower, setSmashBarPower };
};

export { useSmashBarPower };
