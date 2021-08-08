import axios from "axios";
import { RankingAPI } from "./RankingAPI";

const getRankingList = async (): Promise<RankingAPI[]> => {
  const rankingResponse = await axios("/ranking");
  const rankingList = await rankingResponse.data;
  return rankingList;
};

export { getRankingList };
