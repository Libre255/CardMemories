import { useState, useEffect } from "react";
import { CardsAPI } from "../service/cards/CardsAPI";

interface Props {
  setCards: React.Dispatch<React.SetStateAction<CardsAPI[]>>;
}

const useSelectedCards = ({ setCards }: Props) => {
  const [selectedCards, setSelectedCards] = useState<CardsAPI[]>([]);

  useEffect(() => {
    const resetSelectedCards = () => setSelectedCards([]);
    const flipCardsFaceDown = () => {
      setCards((cardDeck) =>
        cardDeck.map((card) => {
          if (
            selectedCards.some((selectedCard) => selectedCard.id === card.id)
          ) {
            card.flippCard = false;
          }
          return card;
        })
      );
    };
    if (selectedCards.length === 2) {
      setTimeout(resetSelectedCards, 1050);
      if (selectedCards[0].value !== selectedCards[1].value) {
        setTimeout(flipCardsFaceDown, 1000);
      }
    }
  }, [selectedCards, setCards]);

  return { selectedCards, setSelectedCards };
};

export { useSelectedCards };
