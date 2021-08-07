import {firebaseDB} from '../fireBaseFolder/firebaseConfig';
import {RankingType} from './rankingType';

const getRanking = async ()=>{
  const rankingArray:RankingType[] = []
  const rankingDB = await firebaseDB.collection('ranking').get();

  rankingDB.forEach(doc => rankingArray.push({
    name:doc.data().name,
    score:doc.data().score,
    date:doc.data().date,
    time:doc.data().time
  }))
  return rankingArray
}

export {getRanking}