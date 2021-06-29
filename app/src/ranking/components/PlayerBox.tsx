import React from "react";
import { RankingAPI } from "../../service/ranking/RankingAPI";

interface Props {
  playerInfo: RankingAPI;
}

const PlayerBox: React.FC<Props> = ({ playerInfo }) => {
  return (
    <div className="player-FlexBox">
      <div className="playerBoxConfig">ranking badge</div>
      <div className="playerNameAndDate playerBoxConfig">
        <span>{playerInfo.name}</span>
        <span>{playerInfo.date}</span>
      </div>
      <div className="playerScore playerBoxConfig">
        <span>{playerInfo.score}</span>
      </div>
    </div>
  );
};

export default PlayerBox;
