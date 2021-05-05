import React from "react";
import BackCard from "./BackCard";
import FrontCard from "./FrontCards";
import { cardsType } from "./GameMainComponent";
interface Props {
  selectedCardsState: [
    cardsType[],
    React.Dispatch<React.SetStateAction<cardsType[]>>
  ];
  setCards: React.Dispatch<React.SetStateAction<cardsType[]>>;
  cardValue: cardsType;
  flippCard: boolean;
}

const Card: React.FC<Props> = ({
  selectedCardsState,
  setCards,
  cardValue,
  flippCard,
}) => {
  const [selectedCards, setSelectedCards] = selectedCardsState;

  const onCardClick = () => {
    if (selectedCards.length < 2) {
      setCards((pv) =>
        pv.map((card) => {
          if (card.id === cardValue.id) card.flippCard = true;
          return card;
        })
      );
      setSelectedCards((pv) => [...pv, cardValue]);
    }
  };

  if (flippCard) {
    return <FrontCard />;
  } else {
    return <BackCard onCardClick={onCardClick} />;
  }
};

export default Card;
