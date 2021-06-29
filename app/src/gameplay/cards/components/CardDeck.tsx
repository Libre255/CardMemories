import React from "react";
import { Action } from "../reducer/cardsReducerType";
import { CardsAPI } from "../../../service/cards/CardsAPI";
import Card from "./Card";
import { useGridCardPostion } from "../hooks/useCardGridPosition";

interface Props {
  cardsHook: [CardsAPI[], React.Dispatch<Action>];
  selectCardHook: [
    CardsAPI[],
    React.Dispatch<React.SetStateAction<CardsAPI[]>>
  ];
}

const CardDeck: React.FC<Props> = ({ cardsHook, selectCardHook }) => {
  const [cardDeck, dispatch] = cardsHook;
  const [selectedCards, setSelectedCards] = selectCardHook;
  const { rowColumn } = useGridCardPostion({ cardDeck });

  return (
    <div
      id="gameMain-grid"
      className="testBox2"
      style={{
        gridTemplateColumns: rowColumn.column,
        gridTemplateRows: rowColumn.row,
      }}
    >
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
