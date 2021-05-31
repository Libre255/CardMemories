import { useEffect, useState } from "react"
import { COMMANDS } from "../methods/cardsReducer";
import { Action } from "../methods/cardsReducerType";
import { CardsAPI } from "../service/cards/CardsAPI";

interface Props {
  selectedCards:CardsAPI[];
  dispatch:React.Dispatch<Action>;
}
export interface SmashBarType {
  powerProcent: number;
  ActivatePower: boolean;
  ShowPowerButton: boolean;
}

const useSmashBarPower = ({selectedCards, dispatch}:Props)=>{
  const [SmashBarPower, setSmashBarPower] = useState<SmashBarType>({
    powerProcent: 0,
    ActivatePower: false,
    ShowPowerButton: false,
  });

  useEffect(() => {
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

    if(selectedCards.length === 2){
      if (selectedCards[0].value === selectedCards[1].value) {
        setSmashBarPower((smashBar) => updateSmashBarProcent(smashBar));
      }
    }
    
  }, [selectedCards])

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


  return {SmashBarPower, setSmashBarPower}
}

export {useSmashBarPower}