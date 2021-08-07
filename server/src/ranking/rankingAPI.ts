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
      const rankingTopToBottom = rankingArray.sort((a,b) => b.score - a.score)
      res.json(rankingTopToBottom)
    });
});

export default rankingAPI

