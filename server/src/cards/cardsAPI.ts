import express from 'express';
import {getCards} from '../fireBaseFolder/getCards'

const cardsAPI = express.Router();

cardsAPI.get('/', (req, res)=>{
  getCards().then(cardsArray => res.json(cardsArray))
})


export default cardsAPI