import { useState, useEffect } from "react";
import { CardsAPI } from "../service/cards/CardsAPI";

interface Props {
  setCards: React.Dispatch<React.SetStateAction<CardsAPI[]>>;
}

const useSelectedCards = ({ setCards }: Props) => {
  const [selectedCards, setSelectedCards] = useState<CardsAPI[]>([]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => setSelectedCards([]), 1050);

      if (selectedCards[0].value !== selectedCards[1].value) {
        setTimeout(() => {
          setCards((pv) =>
            pv.map((card) => {
              if(
                card.id === selectedCards[0].id || selectedCards[1].id
              ) {
                card.flippCard = false;
              }
              return card;
            })
          );
        }, 1000);
      }
    }
  }, [selectedCards, setCards]);

  return { selectedCards, setSelectedCards };
};

export { useSelectedCards };
