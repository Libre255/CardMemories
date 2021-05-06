import { useState, useEffect } from "react";
import { cardsType } from "../components/gameplayComponents/GameMainComponent";

interface Props {
  setCards: React.Dispatch<React.SetStateAction<cardsType[]>>;
}

const useSelectedCards = ({ setCards }: Props) => {
  const [selectedCards, setSelectedCards] = useState<cardsType[]>([]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => setSelectedCards([]), 1050);

      if (selectedCards[0].value !== selectedCards[1].value) {
        setTimeout(() => {
          setCards((pv) =>
            pv.map((cards) => {
              if (
                cards.id === selectedCards[0].id ||
                cards.id === selectedCards[1].id
              ) {
                cards.flippCard = false;
              }
              return cards;
            })
          );
        }, 1000);
      }
    }
  }, [selectedCards, setCards]);

  return { selectedCards, setSelectedCards };
};

export { useSelectedCards };