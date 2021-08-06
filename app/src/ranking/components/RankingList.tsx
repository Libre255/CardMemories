import React from "react";
import { useRankingList } from "../hooks/useRankingList";
import PlayerBox from "./PlayerBox";

const RankingList: React.FC = () => {
  const { rankingList } = useRankingList();

  return (
    <div id="RankingList-grid" className="testBox">
      <div id="RankingTitle">Ranking</div>
      {rankingList.map((player, index) => (
        index < 5? <PlayerBox playerInfo={player} ranking={index} /> : ""
      ))}
    </div>
  );
};

export default RankingList;
