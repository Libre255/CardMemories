import { firebaseDB } from "../fireBaseFolder/firebaseConfig"
import { rankingType } from "./rankingType"

const addPlayerToRanking = (player:rankingType)=>{
  firebaseDB.collection('ranking').doc().set(player)
}

export {addPlayerToRanking}