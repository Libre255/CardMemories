import React, { useEffect, useState } from "react";
import { RankingAPI } from "../../service/ranking/RankingAPI";

interface Props {
  playerInfo: RankingAPI;
  ranking: number;
}

const PlayerBox: React.FC<Props> = ({ playerInfo, ranking }) => {
  const [colorOfRanking, setColorOfRanking] = useState("");
  useEffect(() => {
    switch (ranking) {
      case 0:
        setColorOfRanking("gold");
        break;
      case 1:
        setColorOfRanking("grey");
        break;
      case 2:
        setColorOfRanking("brown");
        break;
      default:
        break;
    }
  }, [ranking]);
  return (
    <div className="player-FlexBox animate__animated animate__fadeIn">
      <div className="playerNameAndDate playerBoxConfig">
        <span style={{ color: colorOfRanking }}>{playerInfo.name}</span>
        <span>{playerInfo.date}</span>
      </div>
      <div className="playerScore playerBoxConfig">
        <span>{playerInfo.score}</span>
      </div>
    </div>
  );
};

export default PlayerBox;
