import React from "react";
import Card from "./Card";
import { useSelectedCards } from "../../hooks/useSelectedCards";
import { useCards } from "../../hooks/useCards";

const GameMainComponent: React.FC = () => {
  const { cards, setCards } = useCards();
  const { selectedCards, setSelectedCards } = useSelectedCards({ setCards });

  return (
    <div id="gameMain-flexBox" className="testBox2">
      {cards.map((card) => (
        <Card
          key={card.id}
          cardValue={card}
          selectedCardsState={[selectedCards, setSelectedCards]}
          setCards={setCards}
        />
      ))}
    </div>
  );
};

export default GameMainComponent;
