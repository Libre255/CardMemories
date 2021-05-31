import React from "react";
import { useCards } from "../../hooks/useCards";
import { useSelectedCards } from "../../hooks/useSelectedCards";
import { useSmashBarPower } from "../../hooks/useSmashBarPower";
import { useTimer } from "../../hooks/useTimer";
import { useUserInfo } from "../../hooks/useUserInfo";
import CardDeck from "./cardComponents/CardDeck";
import EndGameInput from "./EndGameInput";
import SmashBarContainer from "./SmashBarContainer";

//Bug found when smashBoxButton clicked when on the process of rendering new card
const GamePlayBox: React.FC = () => {
  const { cardDeck, dispatch } = useCards();
  const { selectedCards, setSelectedCards } = useSelectedCards({ dispatch });
  const { SmashBarPower, setSmashBarPower } = useSmashBarPower({
    selectedCards,
    dispatch,
  });
  const { timer, maxMatchedCardsReached } = useTimer();
  const { userInfo } = useUserInfo({ maxMatchedCardsReached });

  return (
    <>
      <div>{timer}</div>
      <CardDeck
        cardsHook={[cardDeck, dispatch]}
        selectCardHook={[selectedCards, setSelectedCards]}
      />
      <SmashBarContainer smashBarState={[SmashBarPower, setSmashBarPower]} />
      {userInfo.InsertUserName ? <EndGameInput /> : ""}
    </>
  );
};

export default GamePlayBox;
