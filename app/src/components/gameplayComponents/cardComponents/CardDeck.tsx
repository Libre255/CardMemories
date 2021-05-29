import React from "react";
import { useCards } from "../../../hooks/useCards";
import { useSelectedCards } from "../../../hooks/useSelectedCards";
import { SmashBarType } from "../GamePlayBox";
import Card from "./Card";

interface Props {
  smashBarState: [
    SmashBarType,
    React.Dispatch<React.SetStateAction<SmashBarType>>
  ];
}

const CardDeck: React.FC<Props> = ({ smashBarState }) => {
  const { cardDeck, dispatch } = useCards();
  const { selectedCards, setSelectedCards } = useSelectedCards({
    dispatch,
    smashBarState,
  });

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
