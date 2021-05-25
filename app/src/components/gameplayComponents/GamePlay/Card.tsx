import React from "react";
import BackCard from "./BackCard";
import FrontCard from "./FrontCards";
import { CardsAPI } from "../../../service/cards/CardsAPI";

interface Props {
  cardState: [CardsAPI, React.Dispatch<React.SetStateAction<CardsAPI[]>>];
  selectedCardsState: [
    CardsAPI[],
    React.Dispatch<React.SetStateAction<CardsAPI[]>>
  ];
}

const Card: React.FC<Props> = ({ selectedCardsState, cardState }) => {
  const [cardValue, setCards] = cardState;
  const [selectedCards, setSelectedCards] = selectedCardsState;

  const flipClickedCardFaceUP = (cardDeck: CardsAPI[]) =>
    cardDeck.map((card) => {
      if (card.id === cardValue.id) card.flippCard = true;
      return card;
    });

  const onCardClick = () => {
    if (selectedCards.length < 2) {
      setCards((cardDeck) => flipClickedCardFaceUP(cardDeck));
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
