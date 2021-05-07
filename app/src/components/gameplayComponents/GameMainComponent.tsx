import React, { useState } from "react";
import Card from "./Card";
import { useSelectedCards } from "../../hooks/useSelectedCards";

export interface cardsType {
  id: number;
  value: number;
  flippCard: boolean;
}

const data = [
  { id: 1, value: 1, flippCard: false },
  { id: 2, value: 1, flippCard: false },
  { id: 3, value: 2, flippCard: false },
  { id: 4, value: 2, flippCard: false },
  { id: 5, value: 3, flippCard: false },
  { id: 6, value: 3, flippCard: false },
];

const GameMainComponent: React.FC = () => {
  const [cards, setCards] = useState<cardsType[]>(data);
  const { selectedCards, setSelectedCards } = useSelectedCards({ setCards });

  return (
    <div id="gameMain-flexBox" className="testBox2">
      {cards.map((card) => (
        <Card
          key={card.id}
          cardValue={card}
          selectedCardsState={[selectedCards, setSelectedCards]}
          flippCard={card.flippCard}
          setCards={setCards}
        />
      ))}
    </div>
  );
};

export default GameMainComponent;
