import React from "react";
import { useCards } from "../../../hooks/useCards";
import { useSelectedCards } from "../../../hooks/useSelectedCards";
import Card from "./Card";

const CardGamePlay: React.FC = () => {
  const { cardDeck, dispatch } = useCards();
  const { selectedCards, setSelectedCards } = useSelectedCards({ dispatch });

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

export default CardGamePlay;
