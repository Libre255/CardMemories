import React from "react";
import { useRankingList } from "../hooks/useRankingList";

const RankingList: React.FC = () => {
  const { rankingList } = useRankingList();

  return (
    <div id="RankingList" className="testBox">
      {rankingList.map((player) => player.score)}
    </div>
  );
};

export default RankingList;
