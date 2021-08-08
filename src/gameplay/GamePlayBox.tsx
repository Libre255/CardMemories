import React from "react";
import { useCards } from "./cards/hooks/useCards";
import { useSelectedCards } from "./cards/hooks/useSelectedCards";
import { useSmashBarPower } from "./smashBar/useSmashBarPower";
import { useTimer } from "./timer/useTimer";
import { useUserInfo } from "../common/hooks/useUserInfo";
import CardDeck from "./cards/components/CardDeck";
import EndGameInput from "./endGame/EndGameInput";
import SmashBarContainer from "./smashBar/components/SmashBarContainer";
import Timer from "./timer/Timer";

const GamePlayBox: React.FC = () => {
  const { cardDeck, dispatch } = useCards();
  const { selectedCards, setSelectedCards } = useSelectedCards({ dispatch });
  const { SmashBarPower, setSmashBarPower } = useSmashBarPower({
    selectedCards,
    dispatch,
  });
  const { timer, endGame } = useTimer(cardDeck);
  const { userInfo, setUserInfo } = useUserInfo({
    selectedCards, timer
  });

  return (
    <div id="mainGameContainer">
      <Timer Timer={timer} />
      <CardDeck
        cardsHook={[cardDeck, dispatch]}
        selectCardHook={[selectedCards, setSelectedCards]}
      />
      <SmashBarContainer smashBarState={[SmashBarPower, setSmashBarPower]} />
      {endGame ? (
        <EndGameInput userInfoState={[userInfo, setUserInfo]} />
      ) : (
        ""
      )}
    </div>
  );
};

export default GamePlayBox;
