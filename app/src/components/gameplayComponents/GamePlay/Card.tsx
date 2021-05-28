import React from "react";
import BackCard from "./BackCard";
import FrontCard from "./FrontCards";
import { CardsAPI } from "../../../service/cards/CardsAPI";
import { Action } from "../../../methods/cardsReducerType";
import { COMMANDS } from "../../../methods/cardsReducer";

interface Props {
  cardInfo: CardsAPI;
  selectedCardsState: [
    CardsAPI[],
    React.Dispatch<React.SetStateAction<CardsAPI[]>>
  ];
  dispatch: React.Dispatch<Action>;
}

const Card: React.FC<Props> = ({ selectedCardsState, cardInfo, dispatch }) => {
  const [selectedCards, setSelectedCards] = selectedCardsState;

  const onCardClick = () => {
    if (selectedCards.length < 2) {
      dispatch({ type: COMMANDS.Flipp_Card_UP, cardSelected: cardInfo });
      setSelectedCards((pv) => [...pv, cardInfo]);
    }
  };

  if (cardInfo.flippCard) {
    return <FrontCard cardValue={cardInfo.value} />;
  } else {
    return <BackCard onCardClick={onCardClick} />;
  }
};

export default Card;
