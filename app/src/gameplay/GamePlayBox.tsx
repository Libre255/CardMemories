import React from "react";
import { useCards } from "./cards/hooks/useCards";
import { useSelectedCards } from "./cards/hooks/useSelectedCards";
import { useSmashBarPower } from "./smashBar/useSmashBarPower";
import { useTimer } from "./timer/useTimer";
import { useUserInfo } from "../common/hooks/useUserInfo";
import CardDeck from "./cards/components/CardDeck";
import EndGameInput from "./endGame/EndGameInput";
import SmashBarContainer from "./smashBar/SmashBarContainer";
import Timer from "./timer/Timer";

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
