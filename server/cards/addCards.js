const  {firebaseDB}= require('../fireBaseFolder/firebaseConfig');

const addCards = (amountOfCards)=>{
  const cardsArray = []
  let id = 0;
  
  for (let i = 0; i < amountOfCards; i++){
    for (let s = 0; s < 2; s++) {
      cardsArray.push({
        id:id+=1,
        value:i + 1,
        smashCard:false,
        flippCard:false,
      })
    }
  };

  cardsArray.forEach(card =>{
    firebaseDB.collection('cardsInfo').doc(card.id.toString()).set(card)
  });
}

module.exports = {addCards}