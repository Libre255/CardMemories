const  express = require('express');
const {addPlayerToRanking} = require('./addPlayerToRanking')
const {getRanking} = require('./getRanking')

const rankingAPI = express.Router();

rankingAPI.post('/', (req, res)=> {
  const player = req.body

  addPlayerToRanking({
    name:player.name,
    score:player.score,
    date:player.date,
    time:player.time
  })

  res.json(player)
});

rankingAPI.get('/', (req, res)=>{
  getRanking()
    .then(rankingArray => {
      const rankingTopToBottomByScore = rankingArray.sort((a,b) => {
        let n = b.score -a.score 
        if (n !== 0) {
            return n;
        }
        return  b.time -a.time;
      })
      const SelectTop5Players = rankingTopToBottomByScore.map((player, index )=> index < 5 ? player : "")
      res.json(SelectTop5Players)
    });
});

module.exports = rankingAPI

