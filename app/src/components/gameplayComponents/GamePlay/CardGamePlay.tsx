import React from "react";
import { useCards } from "../../../hooks/useCards";
import { useSelectedCards } from "../../../hooks/useSelectedCards";
import Card from "./Card";

const CardGamePlay: React.FC = () => {
  const { cards, setCards } = useCards();
  const { selectedCards, setSelectedCards } = useSelectedCards({ setCards });

  return (
    <div id="gameMain-flexBox" className="testBox2">
      {cards.map((cardInfo) => (
        <Card
          key={cardInfo.id}
          selectedCardsState={[selectedCards, setSelectedCards]}
          cardState={[cardInfo, setCards]}
        />
      ))}
    </div>
  );
};

export default CardGamePlay;
