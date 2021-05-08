import express from 'express';
import cors from 'cors';
import cardsAPI from './cards/cardsAPI'
import rankingAPI from './ranking/rankingAPI';

const app = express();
const serverPORT = 8080 || process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/cards', cardsAPI);
app.use('/ranking', rankingAPI);

app.get('/', (req, res) => {
  res.json({msg:"welcom to my card world"})
})

app.listen(serverPORT, ()=>{
  console.log("***** Card Server has been activated! ******");
})