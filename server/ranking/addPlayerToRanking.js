const  { firebaseDB } = require("../fireBaseFolder/firebaseConfig");

const addPlayerToRanking = (player)=>{
  firebaseDB.collection('ranking').doc().set(player)
}

module.exports = {addPlayerToRanking}