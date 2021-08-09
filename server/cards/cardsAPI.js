const express = require('express')
const {getCards} = require('./getCards')

const cardsAPI = express.Router();

cardsAPI.get('/', (req, res)=>{
  getCards().then(cardsArray => res.json(cardsArray))
})


module.exports = cardsAPI