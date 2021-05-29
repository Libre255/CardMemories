import React, { useState } from "react";
import CardDeck from "./cardComponents/CardDeck";
import SmashBarContainer from "./SmashBarContainer";

export interface SmashBarType {
  powerProcent: number;
  ActivatePower: boolean;
  ShowPowerButton: boolean;
}

const GamePlayBox: React.FC = () => {
  const [SmashBarPower, setSmashBarPower] = useState<SmashBarType>({
    powerProcent: 0,
    ActivatePower: false,
    ShowPowerButton: false,
  });

  return (
    <>
      <CardDeck smashBarState={[SmashBarPower, setSmashBarPower]} />
      <SmashBarContainer smashBarState={[SmashBarPower, setSmashBarPower]} />
    </>
  );
};

export default GamePlayBox;
