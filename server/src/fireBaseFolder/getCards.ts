import {firebaseDB} from './firebaseConfig'
import {CardsType} from './cardsType'

const getCards = async ()=>{
  const cardsArray:CardsType[] = []
  const cardsDB = await firebaseDB.collection('cardsInfo').get()
  cardsDB.forEach(card => cardsArray.push(card.data() as CardsType))
  return cardsArray
}

export {getCards}
