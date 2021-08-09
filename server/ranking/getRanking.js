const  { firebaseDB } = require("../fireBaseFolder/firebaseConfig");

const getRanking = async ()=>{
  const rankingArray = []
  const rankingDB = await firebaseDB.collection('ranking').get();

  rankingDB.forEach(doc => rankingArray.push({
    name:doc.data().name,
    score:doc.data().score,
    date:doc.data().date,
    time:doc.data().time
  }))
  return rankingArray
}

module.exports = {getRanking}