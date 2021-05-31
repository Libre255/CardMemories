import React from "react";
import { Action } from "../../../methods/cardsReducerType";
import { CardsAPI } from "../../../service/cards/CardsAPI";
import Card from "./Card";

interface Props {
  cardsHook:[CardsAPI[], React.Dispatch<Action>]
  selectCardHook:[CardsAPI[], React.Dispatch<React.SetStateAction<CardsAPI[]>>];
}

const CardDeck: React.FC<Props> = ({cardsHook, selectCardHook}) => {
  const [cardDeck, dispatch] = cardsHook
  const [selectedCards, setSelectedCards] = selectCardHook

  return (
    <div id="gameMain-flexBox" className="testBox2">
      {cardDeck.map((cardInfo) => (
        <Card
          key={cardInfo.id}
          selectedCardsState={[selectedCards, setSelectedCards]}
          cardInfo={cardInfo}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default CardDeck;
