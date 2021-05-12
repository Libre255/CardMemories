import { firebaseDB } from "../fireBaseFolder/firebaseConfig"
import { RankingType } from "./rankingType"

const addPlayerToRanking = (player:RankingType)=>{
  firebaseDB.collection('ranking').doc().set(player)
}

export {addPlayerToRanking}