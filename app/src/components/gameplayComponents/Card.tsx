import React from "react";
import BackCard from "./BackCard";
import FrontCard from "./FrontCards";
import { CardsAPI } from "../../service/cards/cardsAPI";

interface Props {
  selectedCardsState: [
    CardsAPI[],
    React.Dispatch<React.SetStateAction<CardsAPI[]>>
  ];
  setCards: React.Dispatch<React.SetStateAction<CardsAPI[]>>;
  cardValue: CardsAPI;
}

const Card: React.FC<Props> = ({ selectedCardsState, setCards, cardValue }) => {
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

  if (cardValue.flippCard) {
    return <FrontCard />;
  } else {
    return <BackCard onCardClick={onCardClick} />;
  }
};

export default Card;
