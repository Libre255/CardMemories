import { useEffect, useState } from "react";
import { RankingAPI } from "../service/ranking/RankingAPI";
import { getRankingList } from "../service/ranking/RankingService";

const useRankingList = () => {
  const [rankingList, setRankingList] = useState<RankingAPI[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const rankingArray = await getRankingList();

        if (rankingArray === undefined) {
          throw new Error("could not find RankingArray");
        }
        setRankingList(rankingArray);
      } catch (err) {
        setError(err);
      }
    };
    fetchRanking();
  }, []);

  return { rankingList, error };
};
export { useRankingList };
