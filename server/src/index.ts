import express from 'express';
import cors from 'cors';
import {addCards} from './fireBaseFolder/addCards';
import {getCards} from './fireBaseFolder/getCards';

const app = express();
const serverPORT = 8080


app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  // addCards(3)
  getCards().then(cardArray => console.log(cardArray))
  res.json({msg:"welcom to my card world"})
})

app.listen(serverPORT, ()=>{
  console.log("***** Card Server has been activated! ******");
})