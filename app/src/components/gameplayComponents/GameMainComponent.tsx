import React, {useState} from "react";
import CardGamePlay from "./GamePlay/CardGamePlay";
import StartButton from "./StartButton";

const GameMainComponent: React.FC = () => {
  const [startGame, setStartGame] = useState<boolean>(false)

  if(startGame){
    return <CardGamePlay/> 
  }else{
    return <StartButton setStartGame={setStartGame}/>
  }
};

export default GameMainComponent;
