import {firebaseDB} from '../fireBaseFolder/firebaseConfig';
import {rankingType} from './rankingType';

const getRanking = async ()=>{
  const rankingArray:rankingType[] = []
  const rankingDB = firebaseDB.collection('ranking').get();
  
  (await rankingDB).forEach(doc => rankingArray.push({
    name:doc.data().name,
    score:doc.data().score,
    date:doc.data().date
  }))
  return rankingArray
}

export {getRanking}