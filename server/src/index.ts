import express from 'express';
import cors from 'cors';
import cardsAPI from './cards/cardsAPI'
import rankingAPI from './ranking/rankingAPI';
import path from 'path';

const app = express();
const serverPORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname + '/../../app/build')));

app.use('/cards', cardsAPI);
app.use('/ranking', rankingAPI);

app.get('/', (req, res) => {
 res.json({msg:"welcom to my card world"})
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/../../app/build'), function (err) {
      if (err) {
          res.status(500).send(err)
      }
  })
})

app.listen(serverPORT, ()=>{

 console.log("Test Path", path.join(__dirname + '/../../app/build'))
  console.log("***** Card Server has been activated! ******");
})