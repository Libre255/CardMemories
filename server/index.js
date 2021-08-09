const express = require('express');
const cors = require('cors');
const cardsAPI = require( './cards/cardsAPI')
const rankingAPI = require('./ranking/rankingAPI');
const path = require('path');
const serverless = require('serverless-http');

const app = express();
const serverPORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname + '/../build')));

app.use('/cards', cardsAPI);
app.use('/ranking', rankingAPI);

app.get('/', (req, res) => {
 res.json({msg:"welcom to my card world"})
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/../build/index.html'), function (err) {
      if (err) {
          res.status(500).send(err)
      }
  })
})

app.listen(serverPORT, ()=>{
  console.log("***** Card Server has been activated! ******");
})

module.exports.handler = serverless(app)