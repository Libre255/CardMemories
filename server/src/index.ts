import express from 'express';
import cors from 'cors';
import cardsAPI from './cards/cardsAPI'
import {addCards} from './fireBaseFolder/addCards';
import {getCards} from './fireBaseFolder/getCards';

const app = express();
const serverPORT = 8080

app.use(express.json());
app.use(cors());
app.use('/cards', cardsAPI);

app.get('/', (req, res) => {
  res.json({msg:"welcom to my card world"})
})

app.listen(serverPORT, ()=>{
  console.log("***** Card Server has been activated! ******");
})