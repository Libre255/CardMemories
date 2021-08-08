import React from "react";
import { useRankingList } from "../hooks/useRankingList";
import PlayerBox from "./PlayerBox";

const RankingList: React.FC = () => {
  const { rankingList } = useRankingList();

  return (
    <div id="RankingList-grid" className="animate__animated animate__fadeIn">
      <div id="RankingTitle" className="animate__animated animate__fadeIn">
        Ranking
      </div>
      {rankingList.map((player, index) =>
        index < 5 ? (
          <PlayerBox key={index} playerInfo={player} ranking={index} />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default RankingList;
