import React from "react";
import { useRankingList } from "../hooks/useRankingList";
import PlayerBox from "./PlayerBox";

const RankingList: React.FC = () => {
  const { rankingList } = useRankingList();

  return (
    <div id="RankingList-grid" className="testBox">
      {rankingList.map((player) => (
        <PlayerBox playerInfo={player} />
      ))}
    </div>
  );
};

export default RankingList;
