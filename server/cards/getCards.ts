import {firebaseDB} from '../fireBaseFolder/firebaseConfig'
import {CardsType} from './cardsType'

const getCards = async ()=>{
  const cardsArray:CardsType[] = []
  const cardsDB = await firebaseDB.collection('cardsInfo').get()
  cardsDB.forEach(card => cardsArray.push({
    id:card.data().id,
    value:card.data().value,
    flippCard:card.data().flippCard,
    smashCard:card.data().smashCard
  }))
  return cardsArray.sort((a,b)=> a.id-b.id)
}

export {getCards}
