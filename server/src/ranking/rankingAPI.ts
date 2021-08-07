import express from 'express';
import { RankingType} from './rankingType'
import { addPlayerToRanking } from './addPlayerToRanking';
import {getRanking} from './getRanking';

const rankingAPI = express.Router();

rankingAPI.post('/', (req, res)=> {
  const player:RankingType = req.body

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

export default rankingAPI

