import React from "react";
import { useCards } from "../../../hooks/useCards";
import { useSelectedCards } from "../../../hooks/useSelectedCards";
import Card from "./Card";

interface Props {
  setSmashBarPower:React.Dispatch<React.SetStateAction<number>>;
}

const CardDeck: React.FC<Props> = ({setSmashBarPower}) => {
  const { cardDeck, dispatch } = useCards();
  const { selectedCards, setSelectedCards } = useSelectedCards({ dispatch, setSmashBarPower });

  return (
    <div id="gameMain-flexBox" className="testBox2">
      {cardDeck.map((cardInfo) => (
        <Card
          key={cardInfo.id}
          selectedCardsState={[selectedCards, setSelectedCards]}
          cardInfo={cardInfo}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default CardDeck;
