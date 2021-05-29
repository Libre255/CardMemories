import React, { useState } from "react";
import GamePlayBox from "./GamePlayBox";
import StartButton from "./StartButton";

const GameMainComponent: React.FC = () => {
  const [startGame, setStartGame] = useState<boolean>(false);

  if (startGame) {
    return <GamePlayBox/>;
  } else {
    return <StartButton setStartGame={setStartGame} />;
  }
};

export default GameMainComponent;
