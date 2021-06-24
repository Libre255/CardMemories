import React from "react";
import { useCards } from "../../hooks/useCards";
import { useSelectedCards } from "../../hooks/useSelectedCards";
import { useSmashBarPower } from "../../hooks/useSmashBarPower";
import { useTimer } from "../../hooks/useTimer";
import { useUserInfo } from "../../hooks/useUserInfo";
import CardDeck from "./cardComponents/CardDeck";
import EndGameInput from "./EndGameInput";
import SmashBarContainer from "./SmashBarContainer";
import Timer from "./Timer";

//Bug found when smashBoxButton clicked when on the process of rendering new card
//After smashButton clicked return all cards face down.
const GamePlayBox: React.FC = () => {
  const { cardDeck, dispatch } = useCards();
  const { selectedCards, setSelectedCards } = useSelectedCards({ dispatch });
  const { SmashBarPower, setSmashBarPower } = useSmashBarPower({
    selectedCards,
    dispatch,
  });
  const { timer, timerReached0 } = useTimer();
  const { userInfo, setUserInfo } = useUserInfo({
    selectedCards,
  });

  return (
    <>
      <Timer Timer={timer} />
      <CardDeck
        cardsHook={[cardDeck, dispatch]}
        selectCardHook={[selectedCards, setSelectedCards]}
      />
      <SmashBarContainer smashBarState={[SmashBarPower, setSmashBarPower]} />
      {false ? (
        <EndGameInput userInfoState={[userInfo, setUserInfo]} />
      ) : (
        ""
      )}
    </>
  );
};

export default GamePlayBox;
